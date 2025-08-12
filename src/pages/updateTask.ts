import type { APIRoute } from "astro";
import { db, Task, eq } from "astro:db";

export const PUT: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    if (!body.id || body.id < 1) {
      throw new Error("Did not receive id so cannot update task");
    }

    const response = await db
      .update(Task)
      .set({ isCompleted: !body.isCompleted })
      .where(eq(Task.id, body.id));

    return new Response("successfully updated Task", {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err: any) {
    return new Response(err.message, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
