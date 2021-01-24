import React from "react";
import { priorityState } from "../../state/atoms";
import { useRecoilState as useRecoil } from "recoil";
import styles from "./SortButton.module.scss";

export default function Button() {
  const [priority, setPriority] = useRecoil(priorityState);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setPriority(!priority)}>
        Sort by {priority ? "name" : "priority"}
      </button>
    </div>
  );
}
