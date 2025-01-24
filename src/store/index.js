import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./../FormValidation/formSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

