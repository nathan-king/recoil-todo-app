import React, { useEffect } from "react";
// Global State Hooks
import {
  useRecoilValue as useValue,
  useRecoilState as useRecoil,
} from "recoil";
//Global State
import {
  todoState,
  priorityState,
  addState,
  changeState,
  removeState,
} from "../../state/atoms";
import styles from "./Todos.module.scss";
// Components
import TodoItem from "../TodoItem";
import TodoForm from "../TodoForm";

// COMPONENT BODY
export default function Todos() {
  // Global State Hooks
  const [todoList, setTodoList] = useRecoil(todoState);
  const changing = useValue(changeState);
  const show = useValue(addState);
  const removing = useValue(removeState);
  const priority = useValue(priorityState);

  // Sort TodoList
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
    // Watches priority for sortButton, and editing, adding and deleting modes etc.
  }, [priority, changing, show, removing]);

  return (
    <div className={styles.todos}>
      {/* Dynamically render  todo items */}
      {todoList.map((todo, index) => (
        <span key={todo.id} className={styles.todoItem}>
          <TodoItem key={index} item={todo} />
        </span>
      ))}
      {/* Todo Form only appears in adding mode */}
      {show ? <TodoForm /> : null}
    </div>
  );
}
