import React from "react";
import { useRecoilState as useRecoil } from "recoil";
import { todoState, changeState, removeState } from "state/atoms";
import EditForm from "../EditForm";
import styles from "./TodoItem.module.scss";
import LowIcon from "@material-ui/icons/StarOutline";
import MidIcon from "@material-ui/icons/StarHalf";
import HighIcon from "@material-ui/icons/Star";
import { removeItemAtIndex, replaceItemAtIndex } from "../../utils/Helpers";

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoil(todoState);
  const [changing, toggleChanging] = useRecoil(changeState);
  const [removing, toggleRemoving] = useRecoil(removeState);
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
