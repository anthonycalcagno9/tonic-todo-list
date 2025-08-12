import type { APIRoute } from "astro";
import { db, Task } from "astro:db";

export const GET: APIRoute = async () => {
  try {
    const tasks = await db.select().from(Task);
    return new Response(JSON.stringify(tasks), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err: any) {
    return new Response(err.message, {
      status: 500,
      headers: {
        "Content-type": "application/json",
      },
    });
  }
};
