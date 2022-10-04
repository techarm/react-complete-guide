import { createStore } from "redux";

const INIT_STATE = {
  counter: 0,
};

const counterReducer = (state = INIT_STATE, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
