import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authentication";
import counterReducer from "./counter";

const store = configureStore({
  reducer: { counter: counterReducer, login: authReducer },
});

export default store;
