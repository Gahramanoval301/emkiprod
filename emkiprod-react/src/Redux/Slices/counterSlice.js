import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: '',
    initialState,
    reducers: {}
})

// export const { } = counterSlice.actions;
export default counterSlice.reducer;