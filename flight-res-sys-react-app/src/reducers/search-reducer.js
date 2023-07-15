import {createSlice} from "@reduxjs/toolkit";
import {searchFlightsByOriginThunk, searchFlightsByDestinationThunk} from "../services/flights-thunks";


const searchSlice = createSlice({
    name: "flights",
    initialState: {
        searchData: []
    },
    extraReducers: {
       

        [searchFlightsByOriginThunk.fulfilled]: (state, action) => {
            state.searchData = action.payload;
        },

        [searchFlightsByDestinationThunk.fulfilled]: (state, action) => {
            state.searchData = action.payload;
        },

        
    }
});

export default searchSlice.reducer;