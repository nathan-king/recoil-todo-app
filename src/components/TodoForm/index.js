import React, { useEffect } from "react";
import { useRecoil } from "../../utils/Helpers"; // Custom Helper Functions
import { todoState, itemState, addState } from "../../state/atoms"; //Global State
import AddIcon from "@material-ui/icons/Add";
import styles from "./TodoForm.module.scss";
import { v4 } from "uuid";

const TodoForm = ({ title }) => {
  const [newTodo, setNewTodo] = useRecoil(itemState);
  const [show, setShow] = useRecoil(addState);
  const [todoList, setTodoList] = useRecoil(todoState);

  const titleHandler = (e) => {
    setNewTodo({
      ...newTodo,
      id: v4(),
      title: e.target.value,
    });
  };

  const priorityHandler = (e) => {
    setNewTodo({
      ...newTodo,
      id: v4(),
      priority: e.target.value,
    });
  };

  // Set the To-do List State

  function addTodo() {
    setTodoList([...todoList, newTodo]);
    setShow(!show);
  }

  return (
    <div className={styles.form} noValidate autoComplete="off">
      <div className={styles.textContainer}>
        <input
          type="text"
          className={styles.text}
          value={newTodo.title}
          onChange={titleHandler}
          placeholder={title}
        />
      </div>
      <select
        className={styles.priority}
        value={newTodo.priority}
        onChange={priorityHandler}
      >
        <option>Priority</option>
        <option value={1}>High</option>
        <option value={2}>Medium</option>
        <option value={3}>Low</option>
      </select>
      <button className={styles.button} onClick={addTodo}>
        <AddIcon />
      </button>
    </div>
  );
};

export default TodoForm;
