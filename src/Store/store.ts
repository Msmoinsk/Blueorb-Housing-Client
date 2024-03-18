import { configureStore } from "@reduxjs/toolkit";
import responsiveReducer, { responsiveSlice } from "./responsiveSlice";
import themeReducer, { themeSlice } from './themeSlice';

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeReducer,
        [responsiveSlice.name]: responsiveReducer
    }
})