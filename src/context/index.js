import React, { useReducer, createContext } from "react";

const initialState = {
  todos: [
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
  priority: true,
};

const actions = {
  add: (list, newItem) => {
    return newItem === "" ? list : list.concat(newItem);
  },
  remove: (list, trash) => {
    return trash === "" ? list : list.filter((todo) => todo !== trash);
  },
};

const Context = createContext(initialState);

const Reducer = (state, action) => {
  switch (action.type) {
    case "add":
      state.todos = actions.add(state.todos, action.payload);
      return { ...state };
    default:
      throw new Error();
  }
};

const ContextProvider = (props) => {
  const [todoList, setTodoList] = useReducer(Reducer, initialState.todos);
  const [priority, setPriority] = useReducer(Reducer, initialState.priority);
  return (
    <Context.Provider
      value={{
        todoList: [todoList, setTodoList],
        priority: [priority, setPriority],
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider, actions };
