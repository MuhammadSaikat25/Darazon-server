import { z } from "zod";
export const createUserValidation = z.object({
  body: z.object({
    name: z.string(),
    role: z.enum(["admin", "seller", "user"]).default("user"),
    email: z.string().email(),
    password: z.string().min(8).optional(),
    avatar: z.string().url().optional(),
  }),
});
