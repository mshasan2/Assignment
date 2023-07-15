import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "../reducers/search-reducer";
import suggestReducer from "../reducers/suggest-reducer";
import {Provider} from "react-redux";
import SearchComponent from "./components/search";

const store = configureStore({
    reducer: {searchData: searchReducer,
        suggestData: suggestReducer}
});

const Delta = () => {
    
    return (
        <Provider store={store}>
            <h1>Home</h1>
            <div className="container">
                <SearchComponent/>
            </div>
            
        </Provider>
    )
    }

export default Delta;
