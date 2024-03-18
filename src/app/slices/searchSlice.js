// searchSlice.js

import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
