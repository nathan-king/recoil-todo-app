import React, { useContext } from "react";
import { Context } from "../../context";
import styles from "./Todos.module.scss";

export default function Todos() {
  const { context, setContext } = useContext(Context);

  return (
    <div>
      <ul>
        {context.todos.map((todo, index) => (
          <li
            className={styles.todo}
            key={index}
            onClick={(item) => handleAdd(item)}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );

  function handleAdd(todo) {
    setContext({
      type: "add",
      payload: todo,
    });
  }
}
