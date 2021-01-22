import React, { useContext } from "react";
import MuiButton from "@material-ui/core/Button";
import { priorityState } from "../../state/atoms";
import { useRecoil } from "../../utils/Helpers";

export default function Button() {
  const [priority, setPriority] = useRecoil(priorityState);

  return (
    <>
      <MuiButton
        variant="contained"
        color="primary"
        onClick={() => setPriority(!priority)}
      >
        Sort by {priority ? "name" : "priority"}
      </MuiButton>
    </>
  );
}
