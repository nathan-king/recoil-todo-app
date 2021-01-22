import { atom } from "recoil";

// To-do List
export const todoState = atom({
  key: "todoState",
  default: [
    {
      title: "Eat brekky",
      completed: false,
      priority: 1,
    },
    {
      title: "Do homework",
      completed: false,
      priority: 3,
    },
    {
      title: "Work out",
      completed: false,
      priority: 2,
    },
  ],
});

// Priority
export const priorityState = atom({
  key: "priorityState",
  default: true,
});

export const entryState = atom({
  key: "entryState",
  default: false,
});
