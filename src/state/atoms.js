import { atom } from "recoil";

// To-do List
export const todoState = atom({
  key: "todoState",
  default: [
    {
      id: 13234,
      title: "Eat brekky",
      completed: false,
      priority: 1,
    },
    {
      id: 45367,
      title: "Do homework",
      completed: false,
      priority: 3,
    },
    {
      id: 65743,
      title: "Work out",
      completed: false,
      priority: 2,
    },
  ],
});

// Priority/Name Order
export const priorityState = atom({
  key: "priorityState",
  default: true,
});

export const titleState = atom({
  key: "titleState",
  default: "",
});

export const changeState = atom({
  key: "changeState",
  default: false,
});

export const removeState = atom({
  key: "removeState",
  default: false,
});

export const addState = atom({
  key: "addState",
  default: false,
});

// Todos
export const itemState = atom({
  key: "itemState",
  default: {
    title: "",
    completed: false,
    priority: null,
  },
});

export const filterTodosValues = atom({
  key: "filterTodosValues",
  default: "",
});
