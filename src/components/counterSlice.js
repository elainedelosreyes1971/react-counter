import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counterList: [],
    },
    reducers: {
        updateSize: (state, action) => {
            state.counterList = new Array(action.payload).fill(0);
        }
    },
});

export const {updateSize} = counterSlice.actions;
export default counterSlice.reducer;
