import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Buttons() {
  return (
    <div className="button-container">
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="tertiary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab color="secondary" aria-label="delete">
        <DeleteIcon />
      </Fab>
    </div>
  );
}
