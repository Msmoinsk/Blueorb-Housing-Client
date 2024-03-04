import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice'
import { themeSlice } from "./themeSlice";

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeReducer
    }
})