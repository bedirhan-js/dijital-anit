// slices/citySlice.js

import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    value: 'sehir-sec', // Başlangıç değeri
  },
  reducers: {
    setSelectedCity: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedCity } = citySlice.actions;

export const selectCity = (state) => state.city.value;

export default citySlice.reducer;
