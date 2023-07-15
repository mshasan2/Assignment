import { createSlice } from "@reduxjs/toolkit";
import { suggestThunk } from "../services/flights-thunks";

const suggestSlice = createSlice({
    name: "suggest",
    initialState: {
        suggestData: []
    },
    extraReducers: {
        [suggestThunk.fulfilled]: (state, action) => {
            state.suggestData = action.payload;
        }
    }
});

export default suggestSlice.reducer;

