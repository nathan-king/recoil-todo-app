import React, { useContext } from "react";
import MuiButton from "@material-ui/core/Button";
import { priorityState } from "../../state/atoms";
import { useRecoil } from "../../utils/Helpers";
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
