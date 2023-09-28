import {
  ChangeEvent,
  MouseEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { Todo } from "../App";
import { FaPencilAlt, FaTrash, FaCheck } from "react-icons/fa";

interface Props {
  todo: Todo;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TaskTile = ({ todo, setTodos }: Props) => {
  const [updatedTask, setUpdatedTask] = useState<string>(todo.task);
  const [toggled, setToggled] = useState<boolean>(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUpdatedTask(e.target.value);
  }

  function handleComplete() {
    todo.isCompleted = !todo.isCompleted;
    setTodos((prevTodos) => [...prevTodos]);
  }

  function handleUpdate(e: MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    if (updatedTask !== "") todo.task = updatedTask;
    setTodos((prevTodos) => [...prevTodos]);
    setToggled((prev) => !prev);
  }

  function handleToggle() {
    setToggled((prev) => !prev);
  }

  function handleDelete() {
    setTodos((prevTodos) =>
      prevTodos.filter((currentTodo) => currentTodo.id !== todo.id)
    );
  }

  return (
    <div className="py-2 flex gap-4 justify-between">
      <p
        className="relative font-nunito text-sm bullet-before"
        style={{
          color: todo.isCompleted ? "#777" : "#eee",
        }}
      >
        {todo.task}
      </p>
      <div className="flex gap-2">
        <div
          className="p-1 rounded w-5 h-5 transition cursor-pointer"
          onClick={handleComplete}
        >
          <FaCheck
            style={{
              color: todo.isCompleted ? "var(--clr-evergreen)" : "#334155",
            }}
          />
        </div>
        <div
          className="p-1 rounded w-5 h-5 cursor-pointer"
          onClick={handleToggle}
        >
          <FaPencilAlt className="text-slate-700" />
        </div>
        <div
          className="p-1 rounded w-5 h-5 cursor-pointer"
          onClick={handleDelete}
        >
          <FaTrash className="text-slate-700" />
        </div>
      </div>
      <div
        className="flex items-center justify-center fixed inset-[0] bg-slate-950 z-[100] transition-[top] duration-300"
        style={{
          top: toggled ? "0" : "150vh",
        }}
      >
        <form className="sm:flex justify-between gap-3 font-nunito w-[500px]">
          <input
            type="text"
            placeholder="Type in the Task..."
            value={updatedTask}
            onChange={(e) => handleChange(e)}
            className="inline-block py-3 px-3 bg-desaturated w-[100%] placeholder:text-dark_aura placeholder:italic text-sm font-medium rounded-md"
          />
          <input
            type="submit"
            value="Update"
            onClick={(e) => handleUpdate(e)}
            className="inline-block relative left-[50%] sm:left-[0] py-3 px-3 mt-2 sm:mt-[0] sm:px-6 bg-evergreen text-sm font-medium rounded-md translate-x-[-50%] sm:translate-x-[0] cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default TaskTile;
