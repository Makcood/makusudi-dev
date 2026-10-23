import { z } from "zod";

import "server-only";

const schema = z.object({});

const parsed = schema.safeParse({});

if (!parsed.success) {
  throw new Error(`Invalid server environment variables:\n${z.prettifyError(parsed.error)}`);
}

export const serverEnv = parsed.data;
