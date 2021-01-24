import React, { useState } from "react";
// Global State Hooks
import {
  useRecoilState as useRecoil,
  useSetRecoilState as useSetState,
} from "recoil";
// Global State
import { todoState, changeState } from "../../state/atoms";
// Icons and Styles
import AddIcon from "@material-ui/icons/Add";
import styles from "../TodoForm/TodoForm.module.scss";
// Custom Helper
import { replaceItemAtIndex } from "../../utils/Helpers";

const EditForm = ({ item }) => {
  // Global State Hooks
  const [todoList, setTodoList] = useRecoil(todoState);
  const setChanging = useSetState(changeState);
  // Local State
  const [newTodo, setNewTodo] = useState({
    title: item.title,
    completed: item.completed,
    priority: item.priority,
  });

  const index = todoList.findIndex((listItem) => listItem === item);

  const changeTitle = (e) => {
    console.log("e.target.value");
    setNewTodo({
      ...newTodo,
      title: e.target.value,
    });
  };

  const changePriority = (e) => {
    setNewTodo({
      ...newTodo,
      priority: +e.target.value, //Change value to number
    });
  };

  const updateItem = () => {
    const { title, priority } = newTodo;
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      title,
      priority,
    });
    setTodoList(newList);
    setChanging(false);
  };

  //   sortItems();

  return (
    <div className={styles.form}>
      <div className={styles.textContainer}>
        <input
          type="text"
          className={styles.text}
          value={newTodo.title}
          onChange={changeTitle}
          placeholder={item.title}
        />
      </div>
      <select
        onChange={changePriority}
        className={styles.priority}
        value={newTodo.priority}
      >
        <option>Priority</option>
        <option value={1}>High</option>
        <option value={2}>Medium</option>
        <option value={3}>Low</option>
      </select>
      <button className={styles.button} onClick={updateItem}>
        <AddIcon />
      </button>
    </div>
  );
};

export default EditForm;
