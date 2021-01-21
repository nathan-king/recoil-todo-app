import React, { useReducer, createContext } from "react";

const initialState = {
  todos: ["Eat brekky", "Do homework", "Work out"],
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
  const [context, setContext] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ context, setContext }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider, actions };
