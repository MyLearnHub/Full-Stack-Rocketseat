import { AppError } from "@/utils/AppError";
import { Request, Response } from "express";
import { prisma } from "@/database/prisma";
import { z } from "zod";

class TicketsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      title: z.string().min(1),
      description: z.string().min(1),
    });

    const { title, description } = bodySchema.parse(request.body);

    if (!request.user?.id) {
      throw new AppError("Não autorizado", 401);
    }

    const refund = await prisma.ticket.create({
      data: {
        title,
        description,
        customerId: request.user.id,
      },
    });

    response.status(201).json(refund);
  }

  async index(request: Request, response: Response) {
    const querySchema = z.object({
      name: z.string().optional().default(""),
      page: z.coerce.number().optional().default(1),
      perPage: z.coerce.number().optional().default(10),
    });

    const { name, page, perPage } = querySchema.parse(request.query);

    const skip = (page - 1) * perPage;

    const tickets = await prisma.ticket.findMany({
      skip,
      take: perPage,
      where: {
        customer: {
          name: {
            contains: name.trim(),
          },
        },
      },
      orderBy: { createdAt: "desc" },
      include: { customer: true },
    });

    const totalRecords = await prisma.ticket.count();
    const totalPages = Math.ceil(totalRecords / perPage);

    response.json({
      tickets,
      pagination: {
        page,
        perPage,
        totalRecords,
        totalPages: totalPages > 0 ? totalPages : 1,
      },
    });
  }

  async show(request: Request, response: Response) {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const ticket = await prisma.ticket.findFirst({
      where: { id },
      include: { customer: true },
    });

    response.json(ticket);
  }

  async my(request: Request, response: Response) {
    if (!request.user?.id) {
      throw new AppError("Não autorizado", 401);
    }

    const tickets = await prisma.ticket.findMany({
      where: { customerId: request.user.id },
      orderBy: { updatedAt: "desc" },
      include: { customer: true },
    });

    return response.json(tickets);
  }
}

export { TicketsController };
