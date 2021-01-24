import React from "react";
// Global State
import { useRecoilState as useRecoil } from "recoil";
import { todoState, changeState, removeState } from "state/atoms";
// Icons
import LowIcon from "@material-ui/icons/StarOutline";
import MidIcon from "@material-ui/icons/StarHalf";
import HighIcon from "@material-ui/icons/Star";
// Helper Functions
import { removeItemAtIndex, replaceItemAtIndex } from "../../utils/Helpers";
// Components and Styles
import EditForm from "../EditForm";
import styles from "./TodoItem.module.scss";

// COMPONENT BODY
const TodoItem = ({ item }) => {
  // Global State Hooks
  const [todoList, setTodoList] = useRecoil(todoState);
  const [changing] = useRecoil(changeState);
  const [removing, toggleRemoving] = useRecoil(removeState);

  // TodoList Modification Functions
  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleCompleted = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      completed: !item.completed,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    toggleRemoving(false);
    setTodoList(newList);
  };

  return (
    <div>
      {changing ? (
        <EditForm item={item} key={item.id} />
      ) : (
        <div
          className={`${styles.item} ${removing ? styles.removing : null}`}
          onClick={removing ? deleteItem : toggleCompleted}
          // Click to delete item if delete mode, otherwise removetoggle completed property
        >
          <div
            className={`${styles.text} ${
              item.completed ? styles.completed : null
            } `}
          >
            <div>{item.title}</div>
            <div className={styles.star}>
              {item.priority === 1 ? (
                <HighIcon />
              ) : item.priority === 2 ? (
                <MidIcon />
              ) : (
                <LowIcon />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
