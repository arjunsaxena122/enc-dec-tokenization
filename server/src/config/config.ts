import dotenv from "dotenv";
import { z } from "zod";

dotenv.config({
  path: "./.env",
});

const envSchema = z.object({
  PORT: z.string().optional(),
  FRONTEND_ORIGIN: z.string(),
});

const createEnv = (env: NodeJS.ProcessEnv) => {
  const validationResult = envSchema.safeParse(env);

  if (validationResult.error)
    throw new Error(`env validation failed: ${validationResult.error}`);

  return validationResult.data;
};

export const env = createEnv(process.env);
