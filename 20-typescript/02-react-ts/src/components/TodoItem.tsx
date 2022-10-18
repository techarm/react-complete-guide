import React, { useContext } from "react";
import Todo from "../models/todo";
import { TodosContext } from "../store/todo-context";
import styles from "./TodoItem.module.css";

type Props = {
  todo: Todo;
};

const TodoItem: React.FC<Props> = (props) => {
  const { id, text } = props.todo;
  const todoCtx = useContext(TodosContext);

  const deleteHandler = () => {
    todoCtx.deleteTodo(id);
  };

  return (
    <li className={styles.item} onClick={deleteHandler}>
      {text}
    </li>
  );
};

export default TodoItem;
