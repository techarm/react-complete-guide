import React from "react";
import Todo from "../models/todo";
import styles from "./TodoItem.module.css";

type Props = {
  todo: Todo;
  onDelete: (id: string) => void;
};

const TodoItem: React.FC<Props> = (props) => {
  const { id, text } = props.todo;

  const deleteHandler = () => {
    props.onDelete(id);
  };

  return (
    <li className={styles.item} onClick={deleteHandler}>
      {text}
    </li>
  );
};

export default TodoItem;
