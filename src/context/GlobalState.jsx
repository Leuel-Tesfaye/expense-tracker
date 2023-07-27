import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// initial state

const initialState = {
  // this is a single object any global state will go in this object
  // only we need our transaction in here b/c as long as we have access to our transaction in certain components we can do our calculation there for the balance we don't need stuff like that in our state we just need to be able to pass this data down.
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 3000 },
    { id: 3, text: "Book", amount: -30 },
    { id: 4, text: "Gym", amount: -200 },
    { id: 5, text: "Food", amount: -400 },
  ],
};

// we need to create our global context
export const GlobalContext = createContext(initialState);
// in order for other components to have access to our global state we need to have a provider

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  transactions: state.transactions;

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
