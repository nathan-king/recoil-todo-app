import React, { useState, useEffect } from "react";
import styles from "./Todos.module.scss";
// Import Custom Helper Functions
import {
  sortName,
  sortPriority,
  useRecoil,
  keyListener,
} from "../../utils/Helpers";
// Import Global State Tools
import { useRecoilValue as useValue } from "recoil";
import { todoState, priorityState, entryState } from "../../state/atoms";
// MUI Button Component
import Button from "../../components/Button";

// Todos Component
export default function Todos() {
  // Global State
  const [todoList, setTodoList] = useRecoil(todoState);
  const [show, toggleShow] = useRecoil(entryState);
  const priority = useValue(priorityState);
  // Local State
  const [newTodo, setNewTodo] = useState("");

  // Sort To-do List
  let todos = [...todoList];
  priority ? sortPriority(todos) : sortName(todos);

  return (
    <>
      <Button />
      {/* Dynamically render  todo items */}

      {todos.map((todo, index) => (
        <div key={index}>
          {todo.title} {todo.priority}
        </div>
      ))}
      {show ? (
        <input
          type="text"
          name="todoTitle"
          onChange={(e) => setNewTodo(e.target.value)}
        ></input>
      ) : null}
    </>
  );
}
