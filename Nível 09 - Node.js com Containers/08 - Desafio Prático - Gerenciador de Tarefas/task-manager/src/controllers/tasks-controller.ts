import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { createTaskSchema, updateTaskSchema } from "@/schemas/task-schemas";
import { AppError } from "@/utils/AppError";

class TasksController {
  async create(req: Request & { user?: { id: string; role: string } }, res: Response) {
    const parsed = createTaskSchema.parse(req.body);

    if (parsed.assignedTo) {
      const isMember = await prisma.teamMember.findFirst({
        where: { teamId: parsed.teamId, userId: parsed.assignedTo },
      });
      if (!isMember) throw new AppError("Assigned user is not member of the team", 400);
    }

    const task = await prisma.task.create({
      data: {
        title: parsed.title,
        description: parsed.description ?? "",
        status: parsed.status ?? "pending",
        priority: parsed.priority ?? "low",
        assignedTo: parsed.assignedTo ?? null,
        teamId: parsed.teamId,
      },
    });

    return res.status(201).json(task);
  }

  async list(req: Request & { user?: { id: string; role: string } }, res: Response) {
    const { user } = req;
    if (!user) throw new AppError("Not authenticated", 401);

    if (user.role === "admin") {
      const tasks = await prisma.task.findMany();
      return res.json(tasks);
    }

    // member => show tasks for teams where member belongs
    const memberships = await prisma.teamMember.findMany({ where: { userId: user.id } });
    const teamIds = memberships.map((m) => m.teamId);

    const tasks = await prisma.task.findMany({ where: { teamId: { in: teamIds } } });
    return res.json(tasks);
  }

  async update(req: Request & { user?: { id: string; role: string } }, res: Response) {
    const id = req.params.id;
    const parsed = updateTaskSchema.parse(req.body);
    const actor = req.user;
    if (!actor) throw new AppError("Not authenticated", 401);

    const task = await prisma.task.findUnique({ where: { id } });
    if (!task) throw new AppError("Task not found", 404);

    // permissions: member can edit only own tasks
    if (actor.role === "member") {
      if (task.assignedTo !== actor.id) {
        throw new AppError("Members can only edit their own tasks", 403);
      }
    }

    // if status changes, create history
    const dataToUpdate: any = { ...parsed };

    const updateResult = await prisma.task.update({
      where: { id },
      data: dataToUpdate,
    });

    if (parsed.status && parsed.status !== task.status) {
      await prisma.taskHistory.create({
        data: {
          taskId: id,
          changedBy: actor.id,
          oldStatus: task.status as any,
          newStatus: parsed.status as any,
        },
      });
    }

    return res.json(updateResult);
  }

  async delete(req: Request & { user?: { id: string; role: string } }, res: Response) {
    const id = req.params.id;
    const actor = req.user;
    if (!actor) throw new AppError("Not authenticated", 401);

    const task = await prisma.task.findUnique({ where: { id } });
    if (!task) throw new AppError("Task not found", 404);

    if (actor.role !== "admin") throw new AppError("Only admin can delete tasks", 403);

    await prisma.task.delete({ where: { id } });
    return res.json({ message: "Task deleted" });
  }
}

export { TasksController };
