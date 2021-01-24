import React from "react";
import { useRecoilValue as useValue } from "recoil";
import { todoState } from "../../state/atoms";
import styles from "./Numbers.module.scss";

const Numbers = () => {
  const todoList = useValue(todoState);
  const total = todoList.length;
  const completed = todoList.filter((x) => x.completed).length;
  return (
    <div className={styles.container}>
      <div className={styles.number}>Total: {total}</div>
      <div className={styles.number}>Completed: {completed}</div>
    </div>
  );
};

export default Numbers;
