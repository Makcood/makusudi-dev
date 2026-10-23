import { env } from "@/config/env";

export const site = {
  name: "makusudidev",
  author: "Joshua Makusudi",
  url: env.siteUrl,
  description:
    "makusudidev is the portfolio personal of Joshua Makusudi, a software engineer building full-stack web, mobile and AI-driven products.",
  locale: "en_GB",
} as const;
