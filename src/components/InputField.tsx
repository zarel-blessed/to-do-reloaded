import {
  useState,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  MouseEvent,
} from "react";

import { Todo } from "../App";

interface Props {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const InputField = ({ setTodos }: Props) => {
  const [newTask, setNewTask] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  function handleClick(e: MouseEvent<HTMLInputElement>) {
    e.preventDefault();
    updateTodo(newTask);
  }

  function updateTodo(task: string) {
    const newTodo: Todo = {
      task,
      id: Date.now(),
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTask("");
  }

  return (
    <form className="sm:flex justify-between gap-3 font-nunito">
      <input
        type="text"
        placeholder="Type in the Task..."
        value={newTask}
        onChange={(e) => handleChange(e)}
        className="inline-block py-3 px-3 bg-desaturated w-[100%] placeholder:text-dark_aura placeholder:italic text-sm font-medium rounded-md"
      />
      <input
        type="submit"
        value="Add"
        onClick={(e) => handleClick(e)}
        className="inline-block relative left-[50%] sm:left-[0] py-3 px-3 mt-2 sm:mt-[0] sm:px-6 bg-evergreen text-sm font-medium rounded-md translate-x-[-50%] sm:translate-x-[0] cursor-pointer"
      />
    </form>
  );
};

export default InputField;
