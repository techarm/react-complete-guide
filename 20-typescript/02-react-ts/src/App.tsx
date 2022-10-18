import { useContext } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { TodosContext } from "./store/todo-context";
import { TodosContextProvider } from "./store/todo-context";
import "./App.css";

function App() {
  const todoCtx = useContext(TodosContext);
  return (
    <TodosContextProvider>
      <NewTodo onAddTodo={todoCtx.addTodo} />
      <Todos items={todoCtx.items} onDelete={todoCtx.deleteTodo} />
    </TodosContextProvider>
  );
}

export default App;
