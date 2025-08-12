import { type Tasks } from "../models/tasks";
import React, { useEffect, useState } from "react";
import TaskTile from "./TaskTile";

const example: Tasks = {
    id: 2,
    isCompleted: false,
    description: "this is an example task im adding to test the tile look"
}

export default function TodoContainer() {
  const [tasks, setTasks] = useState<Tasks[]>([example]);
  const [input, setInput] = useState<string>("");


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-center py-8">
        <button
          className="px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
          />
        ))}
      </div>
    </div>
  );
}