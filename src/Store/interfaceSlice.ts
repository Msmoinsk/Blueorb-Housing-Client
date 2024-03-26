import { createSlice } from "@reduxjs/toolkit";


export const interfaceSlice = createSlice({
    name: 'interface',
    initialState: {
        gridView: true
    },
    reducers: {
        toggleGridView: (state) => {
            state.gridView = !state.gridView
        }
    }
})

export const { toggleGridView } = interfaceSlice.actions

export default interfaceSlice.reducer