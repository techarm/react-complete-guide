import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextProps = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

type TodosContextProviderProps = { children: React.ReactNode };

export const TodosContext = React.createContext<TodoContextProps>({
  items: [],
  addTodo: (text: string) => {},
  deleteTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<TodosContextProviderProps> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const deleteHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const todoContextValue: TodoContextProps = {
    items: todos,
    addTodo: addTodoHandler,
    deleteTodo: deleteHandler,
  };

  return (
    <TodosContext.Provider value={todoContextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
