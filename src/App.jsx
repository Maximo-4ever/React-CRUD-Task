import { Route, Routes } from "react-router-dom";
import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { ContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <div className="h-screen text-white text-center p-6 sm:p-10">
      <div className="container mx-auto h-full">
        <ContextProvider>
          <Heading />
          <Routes>
            <Route element={<TaskList />} path="/" />
            <Route element={<TaskForm />} path="/add" />
            <Route element={<TaskForm />} path="/edit/:id" />
          </Routes>
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
