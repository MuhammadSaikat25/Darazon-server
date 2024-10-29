import { z } from "zod";
export const createUserValidation = z.object({
  body: z.object({
    name: z.string(),
    role: z.enum(["admin", "seller", "user"]),
    email: z.string().email(),
    password: z.string().min(8),
    avatar: z.string().url().optional(),
  }),
});