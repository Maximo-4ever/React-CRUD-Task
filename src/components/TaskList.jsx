import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

function TaskList() {
  const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);
  console.log(tasks);

  return (
    <div className="flex justify-center">

      <div className="w-full sm:w-11/12">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-800 sm:px-12 px-4 py-9 text-white shadow-2x1 mb-4 flex justify-between rounded"
          >
            <div className="text-left select-none" onClick={() => toggleTaskDone(task.id)}>
              <h1 className={`font-bold text-lg mb-1 ${task.done ? "line-through text-gray-500" : ""}`}>{task.title}</h1>
              <h6 className={task.done ? "line-through text-gray-500" : ""}>{task.description}</h6>
            </div>
            <div className="flex justify-content-center py-2 gap-2">
              <Link
                className="bg-gray-600 px-7 rounded flex items-center h-9 hover:bg-gray-500"
                to={`edit/${task.id}`}
              >
                Edit
              </Link>
              <button
                className="bg-red-500 px-5 py-0 rounded h-9 hover:bg-red-400"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
