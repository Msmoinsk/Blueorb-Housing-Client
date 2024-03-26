import { configureStore } from "@reduxjs/toolkit";
import responsiveReducer, { responsiveSlice } from "./responsiveSlice";
import themeReducer, { themeSlice } from './themeSlice';
import interfaceReducer, { interfaceSlice } from "./interfaceSlice";

export const store = configureStore({
    reducer: {
        [themeSlice.name]: themeReducer,
        [responsiveSlice.name]: responsiveReducer,
        [interfaceSlice.name]: interfaceReducer
    }
})