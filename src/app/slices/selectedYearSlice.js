// selectedYearSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const selectedYearSlice = createSlice({
  name: 'selectedYear',
  initialState: {
    value: 'yil-sec',
  },
  reducers: {
    setSelectedYear: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedYear } = selectedYearSlice.actions;

export const selectSelectedYear = (state) => state.selectedYear.value;

export default selectedYearSlice.reducer;
