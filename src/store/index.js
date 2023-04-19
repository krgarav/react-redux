import React from "react";
import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENTBY2") {
    return { counter: state.counter + 2 };
  }
  if (action.type === "DECREMENTBY2") {
    return { counter: state.counter - 2 };
  }
  return state;
};
const Index = createStore(counterReducer);
export default Index;
