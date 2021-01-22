import { useContext } from "react";
import { Context } from "../context";

export function handleAdd(todo, setContext) {
  setContext({
    type: "add",
    payload: todo,
  });
}

export function sortName(todos) {
  todos.sort((a, b) => a.title.localeCompare(b.title));
}

export function sortPriority(todos) {
  todos.sort((a, b) => a.priority - b.priority);
}
