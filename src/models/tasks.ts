import type { Task } from "astro:db";

export type Tasks = typeof Task.$inferSelect;
