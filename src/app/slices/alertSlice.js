// src/app/slices/alertSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    message: null,
    isOpen: false,
  },
  reducers: {
    showAlert: (state, action) => {
      state.message = action.payload;
      state.isOpen = true;
    },
    hideAlert: (state) => {
      state.message = null;
      state.isOpen = false;
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;

export const selectAlert = (state) => state.alert;

export default alertSlice.reducer;
