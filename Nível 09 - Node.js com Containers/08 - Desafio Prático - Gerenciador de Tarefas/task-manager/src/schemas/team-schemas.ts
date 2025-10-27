import { z } from "zod";

export const createTeamSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
});

export const addMemberSchema = z.object({
  userId: z.string().uuid().or(z.string().min(1)), // se id for UUID
});
