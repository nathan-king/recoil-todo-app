import React from "react";
import {
  useRecoilValue as useValue,
  useRecoilState as useRecoil,
} from "recoil"; // Global State Hooks
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { addState, changeState, removeState } from "../../state/atoms";
import styles from "./Buttons.module.scss";

export default function Buttons() {
  const [show, toggleShow] = useRecoil(addState);
  const [changing, toggleChanging] = useRecoil(changeState);
  const [removing, toggleRemoving] = useRecoil(removeState);

  // Ensure that other modes are disabled when one is enabled

  const addHandler = () => {
    toggleShow(!show);
    toggleChanging(show && changing ? !changing : false);
    toggleRemoving(show && removing ? !removing : false);
  };

  const editHandler = () => {
    toggleChanging(!changing);
    toggleShow(changing && show ? !show : false);
    toggleRemoving(changing && removing ? !removing : false);
  };

  const removeHandler = () => {
    toggleRemoving(!removing);
    toggleChanging(removing && changing ? !changing : false);
    toggleShow(removing && show ? !show : false);
  };

  return (
    <div className="button-container">
      <div
        className={`${styles.button} ${show ? styles.cancel : styles.add}`}
        onClick={addHandler}
      >
        <AddIcon />
      </div>
      <div
        className={`${styles.button} ${changing ? styles.cancel : styles.edit}`}
        onClick={editHandler}
      >
        {changing ? <AddIcon /> : <EditIcon />}
      </div>
      <div
        className={`${styles.button} ${
          removing ? styles.cancel : styles.delete
        }`}
        onClick={removeHandler}
      >
        {removing ? <AddIcon /> : <DeleteIcon />}
      </div>
    </div>
  );
}
