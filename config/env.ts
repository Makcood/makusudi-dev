import { z } from "zod";

const schema = z.object({
  NEXT_PUBLIC_SITE_URL: z
    .url({ protocol: /^https?$/ })
    .refine((value) => !value.endsWith("/"), "Must not end with a trailing slash")
    .optional(),
  VERCEL_ENV: z.enum(["production", "preview", "development"]).optional(),
  VERCEL_PROJECT_PRODUCTION_URL: z.string().optional(),
  VERCEL_BRANCH_URL: z.string().optional(),
});

const parsed = schema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  VERCEL_ENV: process.env.VERCEL_ENV,
  VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
  VERCEL_BRANCH_URL: process.env.VERCEL_BRANCH_URL,
});

if (!parsed.success) {
  throw new Error(`Invalid environment variables:\n${z.prettifyError(parsed.error)}`);
}

const data = parsed.data;

function resolveSiteUrl(): string {
  if (data.NEXT_PUBLIC_SITE_URL) {
    return data.NEXT_PUBLIC_SITE_URL;
  }

  if (data.VERCEL_ENV === "production" && data.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${data.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (data.VERCEL_ENV === "preview" && data.VERCEL_BRANCH_URL) {
    return `https://${data.VERCEL_BRANCH_URL}`;
  }

  return "http://localhost:3000";
}

export const env = {
  siteUrl: resolveSiteUrl(),
} as const;
