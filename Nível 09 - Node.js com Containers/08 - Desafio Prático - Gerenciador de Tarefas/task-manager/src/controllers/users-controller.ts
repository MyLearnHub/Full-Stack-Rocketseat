import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { hash } from "bcrypt";
import { createUserSchema } from "@/schemas/user-schemas";
import { AppError } from "@/utils/AppError";

class UsersController {
  async create(req: Request, res: Response) {
    const parsed = createUserSchema.parse(req.body);

    const existing = await prisma.user.findFirst({
      where: { email: parsed.email },
    });
    if (existing) throw new AppError("Email already registered", 409);

    const passwordHash = await hash(parsed.password, 10);

    const user = await prisma.user.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        password: passwordHash,
        role: parsed.role ?? "member",
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    return res.status(201).json(user);
  }

  async list(req: Request, res: Response) {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
    return res.json(users);
  }
}

export { UsersController };
