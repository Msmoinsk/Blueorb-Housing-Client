import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false, // default to light mode
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const { toggleDarkMode } = themeSlice.actions

export default themeSlice.reducer