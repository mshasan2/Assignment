import React from "react";
import {configureStore} from "@reduxjs/toolkit";
import searchReducer from "../reducers/search-reducer";
import suggestReducer from "../reducers/suggest-reducer";
import {Provider} from "react-redux";
import SearchComponent from "./components/search";
import delta_logo from '../img/delta_logo.png';

const store = configureStore({
    reducer: {searchData: searchReducer,
        suggestData: suggestReducer}
});

const Delta = () => {
    
    return (
        <Provider store={store}>
            <div>
                <img src={delta_logo} alt="Delta Logo"
                className="p-3" width="300" height="100%"></img>
            </div>
            <div className="container">
                <SearchComponent/>
            </div>
            
        </Provider>
    )
    }

export default Delta;
