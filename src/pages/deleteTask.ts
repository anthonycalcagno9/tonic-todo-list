import type { APIRoute } from "astro";
import { db, Task, eq } from "astro:db";

export const DELETE: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const idString = url.searchParams.get("id");

    const id = parseInt(idString || "0");

    if (id === 0) {
      throw new Error("Did not receive id so cannot delete task");
    }

    const response = await db.delete(Task).where(eq(Task.id, id));
    console.log("deleted task");

    return new Response("Successfully deleted task", {
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
