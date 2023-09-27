import { useState, useEffect } from "react";
import InputField from "./components/InputField";

export interface Todo {
  task: string;
  id: number;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const todosInLS: string | null = localStorage.getItem("todos");
    const storedTodos: Todo[] = JSON.parse(todosInLS || "[{}]");
    setTodos(storedTodos);
    console.log(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-night_soul">
      <div className="p-6 bg-glassparent w-full max-w-[675px] rounded-lg">
        <InputField setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
