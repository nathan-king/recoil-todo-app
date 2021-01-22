import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../context";
import styles from "./Todos.module.scss";
import { handleAdd, sortName, sortPriority } from "../../utils/Helpers";

// MUI Button Component
import Button from "@material-ui/core/button";

export default function Todos() {
  const { context, setContext } = useContext(Context);

  // Toggle Priority vs Name Sorting
  const [priority, setPriority] = useState(true); // Sorting: true = priority, false = name
  // let priority = context.priority;
  let todos = [...context.todos];

  priority ? sortPriority(todos) : sortName(todos);

  return (
    <>
      <div className={styles.todos}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPriority(!priority)}
        >
          Sort by {priority ? "name" : "priority"}
        </Button>

        {/* Dynamically render  todo items */}
        {todos.map((todo, index) => (
          <div key={index}>
            {todo.title} {todo.priority}
          </div>
        ))}
      </div>
    </>
  );

  // Event Handlers and Helper Functions

  // function handleAdd(todo) {
  //   setContext({
  //     type: "add",
  //     payload: todo,
  //   });
  // }

  // function sortName(todos) {
  //   todos.sort((a, b) => a.title.localeCompare(b.title));
  // }

  // function sortPriority(todos) {
  //   todos.sort((a, b) => a.priority - b.priority);
  // }
}
