import { type Tasks } from "../models/tasks";
import React, { useEffect, useState } from "react";
import TaskTile from "./TaskTile";
import {
  completeTask,
  createTask,
  deleteTask,
  fetchTasks,
} from "../services/taskService";

export default function TodoContainer() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const onMount = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };

    onMount();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const updateTask = async (id: number, isCompleted: boolean) => {
    await completeTask(id, isCompleted);

    const data = await fetchTasks();
    setTasks(data);
  };

  const removeTask = async (id: number) => {
    await deleteTask(id);

    const data = await fetchTasks();
    setTasks(data);
  };

  const create = async (description: string) => {
    await createTask(description);

    const data = await fetchTasks();
    setTasks(data);

    setInput("");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center py-8">
        <button
          className="px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => create(input)}
        >
          Create Task
        </button>
        <div className="px-4 py-2 w-1/3">
          <input
            type="text"
            value={input}
            placeholder="Type task here..."
            onChange={handleInputChange}
            className="border rounded px-4 py-2 w-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        {tasks.map((task) => (
          <TaskTile
            task={task}
            key={task.id}
            updateTask={updateTask}
            deleteTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}
