// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
  // reducer: counterSlice.reducer,
});

export default store;
