import { createContext, useReducer } from "react";
import { v4 } from "uuid";
import { AppReducer } from "./AppReducer";

const initialState = {
  tasks: [
    {
      id: v4(),
      title: "Create a new task!",
      description: "Create a new task for CRUD",
      done: false,
    },
    {
      id: v4(),
      title: "Play videogames",
      description: "Play a video game with friends",
      done: true,
    },
    {
      id: v4(),
      title: "Do homework",
      description: "Do homework in the afternoon",
      done: false,
    },
  ],
};
export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addTask = (task) => {
    dispatch({
      type: "ADD_TASK",
      payload: { ...task, id: v4() },
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  };

  const updateTask = (task) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: task,
    });
  };

  const toggleTaskDone = (id) => {
    dispatch({
      type: "TOGGLE_TASK_DONE",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, toggleTaskDone }}>
      {children}
    </GlobalContext.Provider>
  );
};
