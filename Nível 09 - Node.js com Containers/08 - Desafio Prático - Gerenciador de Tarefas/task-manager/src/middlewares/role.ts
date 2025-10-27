import { Request, Response, NextFunction } from "express";
import { AppError } from "@/utils/AppError";

export function ensureAdmin(
  req: Request & { user?: { id: string; role: string } },
  res: Response,
  next: NextFunction
) {
  if (!req.user) throw new AppError("Not authenticated", 401);
  if (req.user.role !== "admin") throw new AppError("Admin only", 403);
  next();
}
