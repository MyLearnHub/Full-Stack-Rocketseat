import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "@/env";
import { AppError } from "@/utils/AppError";
import { registerSchema, loginSchema } from "@/schemas/auth-schemas";

class AuthController {
  async register(req: Request, res: Response) {
    const parsed = registerSchema.parse(req.body);

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
    });

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt,
    });
  }

  async login(req: Request, res: Response) {
    const parsed = loginSchema.parse(req.body);

    const user = await prisma.user.findFirst({
      where: { email: parsed.email },
    });
    if (!user) throw new AppError("Invalid credentials", 401);

    const passwordMatches = await compare(parsed.password, user.password);
    if (!passwordMatches) throw new AppError("Invalid credentials", 401);

    const token = jwt.sign({ role: user.role }, env.JWT_SECRET, {
      subject: user.id,
      expiresIn: "8h",
    });

    return res.json({ token });
  }
}

export { AuthController };
