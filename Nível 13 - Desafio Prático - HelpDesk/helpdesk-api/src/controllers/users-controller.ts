import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";
import { prisma } from "@/database/prisma";
import { UserRole } from "@prisma/client";
import { hash } from "bcrypt";
import { z } from "zod";

class UsersController {
  async create(request: Request, response: Response, next: NextFunction) {
    const bodySchema = z.object({
      name: z.string().trim().min(2, { message: "Nome é obrigatorio" }),
      email: z
        .string()
        .trim()
        .email({ message: "Email inválido" })
        .toLowerCase(),
      password: z
        .string()
        .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
      role: z
        .enum([UserRole.employee, UserRole.manager])
        .default(UserRole.employee),
    });

    const { name, email, password, role } = bodySchema.parse(request.body);

    const userWithSameEmail = await prisma.user.findFirst({ where: { email } });

    if (userWithSameEmail) {
      throw new AppError("Já existe um usuário cadastrado com esse e-mail");
    }

    const hashedPassword = await hash(password, 8);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });

    response.status(201).json();
  }
}

export { UsersController };
