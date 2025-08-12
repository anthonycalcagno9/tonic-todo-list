export async function fetchTasks() {
  try {
    const response = await fetch("/getTasks");
    const data = await response.json();
    console.log("Successfully retrieved Tasks");
    return data;
  } catch (err: any) {
    console.error("Error fetching tasks: ", err.message);
  }
}

export async function completeTask(
  taskId: number,
  currentCompletionStatus: boolean
) {
  try {
    const response = await fetch("/updateTask", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: taskId,
        isCompleted: currentCompletionStatus,
      }),
    });

    if (!response.ok) {
      throw new Error("Update task call failed");
    }

    const result = await response.text();
    console.log("Task updated successfully", result);
  } catch (err: any) {
    console.error("Error updating task: ", err.message);
  }
}

export async function deleteTask(id: number) {
  try {
    const url = "/deleteTask?id=" + id.toString();
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error deleting task");
    }
  } catch (err: any) {
    console.error("error deleting task: ", err.message);
  }
}

export async function createTask(userInput: string) {
  try {
    const response = await fetch("/createTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: userInput,
      }),
    });

    if (!response.ok) {
      throw new Error("Create task call failed");
    }

    const result = await response.text();
    console.log("Task created successfully: ", result);
  } catch (err: any) {
    console.error("Error creating task", err.message);
  }
}
