// src/redux/studentSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [],  // Stores student data
  searchQuery: "", // For search filter
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    setStudents: (state, action) => {
      state.students = action.payload;
    },
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex((s) => s.id === action.payload.id);
      if (index >= 0) state.students[index] = action.payload;
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter((s) => s.id !== action.payload);
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setStudents, addStudent, updateStudent, removeStudent, setSearchQuery } = studentSlice.actions;

export default studentSlice.reducer;
