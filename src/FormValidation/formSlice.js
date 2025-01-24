import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listStudent: [],
  studentSelected: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.listStudent.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.listStudent = state.listStudent.filter(
        (student) => student.id !== action.payload
      );
    },
    updateStudent: (state, action) => {
      const index = state.listStudent.findIndex(
        (student) => student.id === action.payload.id
      );
      if (index !== -1) {
        state.listStudent[index] = action.payload;
      }
    },
    selectStudent: (state, action) => {
      state.studentSelected = action.payload;
    },
  },
});

export const { addStudent, deleteStudent, updateStudent, selectStudent } =
  formSlice.actions;

export default formSlice.reducer;
