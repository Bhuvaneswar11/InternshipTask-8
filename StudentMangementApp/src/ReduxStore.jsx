// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./StudentSlice";

export const store = configureStore({
  reducer: {
    student: studentReducer,
  },
});
