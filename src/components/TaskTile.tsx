import type { Tasks } from "../models/tasks"

interface TaskTileProps {
    task: Tasks
}

export default function TaskTile(props: TaskTileProps) {
  return (
    <div className="flex border border-black rounded w-2/3 py-4 gap-4 justify-between">
      <div className={`w-2/3 overflow-hidden text-ellipsis ml-4 mt-2 text-lg ${props.task.isCompleted ? "line-through decoration-2" : ""}`}>{props.task.description}</div>
      <div className="flex">
      <button
        className="px-4 py-2 mr-4 bg-green-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {props.task.isCompleted ? "Undo" : "Complete"}
      </button>
      <button
        className="px-4 py-2 mr-4 bg-red-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Delete
      </button>
      </div>
    </div>
  );
}