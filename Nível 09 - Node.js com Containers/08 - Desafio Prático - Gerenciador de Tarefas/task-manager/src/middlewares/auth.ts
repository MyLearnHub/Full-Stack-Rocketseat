import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "@/env";
import { AppError } from "@/utils/AppError";

interface TokenPayload {
  sub: string;
  role: "admin" | "member";
  iat?: number;
  exp?: number;
}

export function ensureAuthenticated(
  req: Request & { user?: { id: string; role: string } },
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError("Token missing", 401);

  const [, token] = authHeader.split(" ");

  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as TokenPayload;
    req.user = { id: payload.sub, role: payload.role };
    next();
  } catch (err) {
    throw new AppError("Invalid token", 401);
  }
}
