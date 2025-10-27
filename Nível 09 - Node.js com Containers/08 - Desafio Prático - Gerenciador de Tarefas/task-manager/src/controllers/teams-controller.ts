import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { createTeamSchema, addMemberSchema } from "@/schemas/team-schemas";
import { AppError } from "@/utils/AppError";

class TeamsController {
  async create(req: Request, res: Response) {
    const parsed = createTeamSchema.parse(req.body);

    const team = await prisma.team.create({
      data: {
        name: parsed.name,
        description: parsed.description,
      },
    });

    return res.status(201).json(team);
  }

  async addMember(req: Request & { user?: { id: string } }, res: Response) {
    const teamId = req.params.id;
    const parsed = addMemberSchema.parse(req.body);

    const user = await prisma.user.findUnique({ where: { id: parsed.userId } });
    if (!user) throw new AppError("User not found", 404);

    // prevent duplicates
    const exists = await prisma.teamMember.findFirst({
      where: { teamId, userId: parsed.userId },
    });

    if (exists) throw new AppError("User already a member of this team", 409);

    await prisma.teamMember.create({
      data: { teamId, userId: parsed.userId },
    });

    return res.status(201).json({ message: "Member added" });
  }

  async removeMember(req: Request, res: Response) {
    const { id: teamId, userId } = req.params;

    const member = await prisma.teamMember.findFirst({
      where: { teamId, userId },
    });

    if (!member) throw new AppError("Member not found in team", 404);

    await prisma.teamMember.delete({ where: { id: member.id } });

    return res.json({ message: "Member removed" });
  }

  async list(req: Request, res: Response) {
    const teams = await prisma.team.findMany({
      include: {
        members: {
          include: { user: { select: { id: true, name: true, email: true } } },
        },
      },
    });
    return res.json(teams);
  }
}

export { TeamsController };
