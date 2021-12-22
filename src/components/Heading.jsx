import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

function Heading() {
  return (
    <div className="flex items-center mb-20">
      <Link to="/" className="flex items-center">
        <h5 className="text-gray-100 font-bold text-3xl">Task CRUD</h5>
      </Link>
      <div className="flex-grow text-right py-2">
        <Link to="/add">
          <button className="bg-green-700 hover:bg-green-500 text-white text-semibold py-2 px-4 rounded inline-flex items-center">
            <IoMdAdd />
            <span className="ml-1">Add Task</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Heading;
