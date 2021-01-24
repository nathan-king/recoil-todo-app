import React, { useState, useEffect } from "react";
import {
  useRecoilValue as useValue,
  useRecoilState as useRecoil,
} from "recoil"; // Custom Helper Functions
import { todoState, changeState, priorityState } from "../../state/atoms"; //Global State
import AddIcon from "@material-ui/icons/Add";
import styles from "../TodoForm/TodoForm.module.scss";
import { replaceItemAtIndex } from "../../utils/Helpers";

const EditForm = ({ item }) => {
  const [todoList, setTodoList] = useRecoil(todoState);
  const [priorityOrder, setPriority] = useRecoil(priorityState);
  const [changing, setChanging] = useRecoil(changeState);
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
      priority: +e.target.value,
    });
  };

  const sortItems = () => {
    if (priorityOrder) {
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
  };

  const updateItem = () => {
    const { title, completed, priority } = newTodo;
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
