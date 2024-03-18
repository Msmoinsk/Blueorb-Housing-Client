import { createSlice } from "@reduxjs/toolkit";


export const responsiveSlice = createSlice({
    name: "responsive",
    initialState: {
        isMobile: false
    },
    reducers: {
        toggleMobileMode: (state) => {

            state.isMobile = !state.isMobile
        }
    }
})

export const { toggleMobileMode } = responsiveSlice.actions

export default responsiveSlice.reducer