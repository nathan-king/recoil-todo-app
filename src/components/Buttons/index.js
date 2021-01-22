import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useRecoil } from "../../utils/Helpers";
import { entryState } from "../../state/atoms";

export default function Buttons() {
  const [show, toggleShow] = useRecoil(entryState);

  return (
    <div className="button-container">
      <Fab color="primary" aria-label="add" onClick={() => toggleShow(!show)}>
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
