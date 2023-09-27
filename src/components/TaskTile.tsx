import { Dispatch, SetStateAction, useState } from "react";
import { Todo } from "../App";
import { FaPencilAlt, FaTrash, FaCheck } from "react-icons/fa";

interface Props {
  todo: Todo;
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TaskTile = ({ todo, setTodos }: Props) => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  function handleComplete() {
    setIsCompleted((prev) => !prev);
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
          color: isCompleted ? "#777" : "#eee",
        }}
      >
        {todo.task}
      </p>
      <div className="flex gap-2">
        <div
          className="p-1 rounded w-5 h-5 transition cursor-pointer"
          style={{
            backgroundColor: isCompleted ? "#333" : "var(--clr-desaturated)",
          }}
          onClick={handleComplete}
        >
          <FaCheck
            style={{
              color: isCompleted ? "var(--clr-evergreen)" : "#334155",
            }}
          />
        </div>
        <div className="p-1 bg-desaturated rounded w-5 h-5 cursor-pointer">
          <FaPencilAlt className="text-slate-700" />
        </div>
        <div
          className="p-1 bg-desaturated rounded w-5 h-5 cursor-pointer"
          onClick={handleDelete}
        >
          <FaTrash className="text-slate-700" />
        </div>
      </div>
    </div>
  );
};

export default TaskTile;