import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";
import styles from "./Todos.module.css";

type Props = {
  items: Todo[];
  onDelete: (id: string) => void;
};

const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} todo={item} onDelete={props.onDelete} />
      ))}
    </ul>
  );
};

export default Todos;
