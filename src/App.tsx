import { useState, useEffect } from "react";
import InputField from "./components/InputField";
import TaskTile from "./components/TaskTile";

export interface Todo {
  task: string;
  isCompleted: boolean;
  id: number;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const todosInLS: string | null = localStorage.getItem("todos");
    const storedTodos: Todo[] = JSON.parse(todosInLS || "[{}]");
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-night_soul overflow-hidden isolate">
      <div className="relative p-6 bg-glassparent w-full max-w-[660px] rounded-lg ui-container">
        <InputField setTodos={setTodos} />
        <div className="bg-glassparent py-2 pl-5 pr-3 mt-5 h-[400px] rounded-md overflow-y-auto custom-scrollbar">
          {todos.map((todo) => (
            <TaskTile todo={todo} setTodos={setTodos} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
