import type { APIRoute } from "astro";
import { db, Task } from "astro:db";
import type { Tasks } from "../models/tasks";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    if (body.description === "") {
      throw new Error("Task description was empty, cannot create new task");
    }

    const taskToCreate: Omit<Tasks, "id"> = {
      isCompleted: false,
      description: body.description,
    };

    const response = await db.insert(Task).values(taskToCreate);

    return new Response("successfully created task", {
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
