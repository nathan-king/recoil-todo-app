import { useContext } from "react";
import { Context } from "../context";
import {
  useRecoilValue as useValue,
  useSetRecoilState as useSetState,
} from "recoil";

// This simplifies components where state will be both read and set
export function useRecoil(atom) {
  return [useValue(atom), useSetState(atom)];
}

export function sortName(todos) {
  todos.sort((a, b) => a.title.localeCompare(b.title));
}

export function sortPriority(todos) {
  todos.sort((a, b) => a.priority - b.priority);
}

export function keyListener(callback) {
  const listener = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      callback();
    }
  };
  document.addEventListener("keydown", listener);

  return () => {
    document.removeEventListener("keydown", listener);
  };
}
