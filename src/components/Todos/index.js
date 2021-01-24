import React, { useEffect } from "react";
import {
  useRecoilValue as useValue,
  useRecoilState as useRecoil,
} from "recoil"; // Global State Hooks
import styles from "./Todos.module.scss";
import {
  todoState,
  priorityState,
  addState,
  changeState,
  removeState,
} from "../../state/atoms"; //Global State
import TodoItem from "../TodoItem";
import TodoForm from "../TodoForm";

// TODOS
export default function Todos() {
  // GLOBAL STATE
  const [todoList, setTodoList] = useRecoil(todoState);
  const changing = useValue(changeState);
  const show = useValue(addState);
  const removing = useValue(removeState);
  const priority = useValue(priorityState);

  // Sort according to priotiy or name when priority changes
  useEffect(() => {
    if (priority) {
      setTodoList(
        todoList.slice().sort(function (a, b) {
          return a.priority - b.priority; // By priority
        })
      );
    } else {
      setTodoList(
        todoList.slice().sort(function (a, b) {
          return a.title.localeCompare(b.title); // By name
        })
      );
    }
  }, [priority, changing, show, removing]); // watches priority for sortButton, changing for item edits, show for item additions, removing etc.

  return (
    <div className={styles.todos}>
      {/* Dynamically render  todo items */}
      {todoList.map((todo, index) => (
        <span key={todo.id} className={styles.todoItem}>
          <TodoItem key={index} item={todo} />
        </span>
      ))}
      {/* Todo Form */}
      {show ? <TodoForm /> : null}
    </div>
  );
}
