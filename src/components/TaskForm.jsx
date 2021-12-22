import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../context/GlobalContext";

function TaskForm() {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });
  const { addTask, tasks, updateTask } = useContext(GlobalContext);
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(task);
    if (task.id) {
      updateTask(task)
    } else {
      addTask(task);
    }
    navigate("/");
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    if (taskFound) {
      setTask(taskFound);
    }
  }, [params.id, tasks]);

  return (
    <div className="flex justify-center items-center h-3/4">
      <form
        className="bg-gray-800 p-10 md:w-3/5 w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-10 text-3xl">
          {task.id ? "Editing" : "Create"} a Task
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
            placeholder="Enter a Title"
            value={task.title}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="description"
          rows="2"
          className="py-2 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full mb-5"
          placeholder="Enter a description"
          value={task.description}
          onChange={handleChange}
        />
        <button className="bg-green-700 w-full hover:bg-green-500 py-4">
          {task.id ? "Edit" : "Create"} Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
