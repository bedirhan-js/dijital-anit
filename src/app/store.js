// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slices/contentSlice";
import alertReducer from "./slices/alertSlice";
import selectedYearReducer  from "./slices/selectedYearSlice";
import cityReducer from './slices/citySlice'; 
import searchReducer from './slices/searchSlice';
const store = configureStore({
  reducer: {
    content: contentReducer,
    alert: alertReducer,
    selectedYear: selectedYearReducer,
    city:cityReducer,
    search: searchReducer
  },
});

export default store;
