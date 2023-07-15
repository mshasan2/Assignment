import React from 'react';
import {searchFlightsByOriginThunk, searchFlightsByDestinationThunk, suggestThunk} from '../../../services/flights-thunks';
import { useSelector, useDispatch} from "react-redux";
import { useState } from 'react';
import SearchList from './search-list';


const SearchComponent = () => {
    const {searchData} = useSelector(state => state.searchData)
    let {suggestData} = useSelector(state => state.suggestData)
    const [search, setSearch] = useState("");
    const [searchType, setSearchType] = useState("origin");
    const [suggestSearch, setSuggestSearch] = useState("");
    

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }
    const dispatch = useDispatch();

    const searchFlights = () => {
        if(searchType === "origin") {
            
            dispatch(searchFlightsByOriginThunk(search))
        } else {
            dispatch(searchFlightsByDestinationThunk(search))
        }
    }

    const suggestSearchHandler = (e) => {
        if (e.target.value === "") {
            setSuggestSearch("");
            suggestData = [];
            return;
        } else {
            setSuggestSearch(e.target.value);
            dispatch(suggestThunk(suggestSearch))
        }
    }

    const suggestSearchNames = () => {
        dispatch(suggestThunk(suggestSearch))
    }

    
    return (
        
            <div>
                <div>
                    <h1>Search Flights from/to Origin/Destination using the Search API</h1>
                    <div className="ms-2 ">
                        <span className=" d-inline ">
                            
                            <label className='' >
                                <input className='me-2' type="radio"
                                name="flexRadioDefault" id="flexRadioDefault1"
                                defaultChecked={searchType === "origin"} 
                                onClick={() => setSearchType("origin")}/>
                                Origin
                            </label>
                        </span>    
                        
                        <span className="ps-3 d-inline">
                        <label className='' >
                            <input className='me-2' type="radio"
                            name="flexRadioDefault" id="flexRadioDefault2"
                            defaultChecked={searchType === "destination"} 
                            onClick={() => setSearchType("destination")}/>
                            Destination
                        </label> 
                        </span>   
                        
                    </div>

                    <div className="input-group mb-3">

                        <input className="form-control"
                        onChange={searchHandler}
                        value = {search}/>
                        <button className="btn btn-primary" type="button"
                        onClick={searchFlights}
                        >Search</button>
                    </div>
                    <div>
                        <SearchList searchData={searchData}/>
                    </div>
                </div>

                <div>
                    <h1>AutoSuggest Station Name using the Suggest API</h1>
                    <div className="input-group mb-3">
                    <input className="form-control"
                        onChange={suggestSearchHandler}
                        value = {suggestSearch}
                        />
                    <button className="btn btn-primary" type="button"
                        onClick={suggestSearchNames}
                        >Search</button>
                    </div>

                </div>
                <div>
                    {JSON.stringify(suggestData)}
                {suggestData.length > 0 ? (
                    <ul className="list-group">
                        {suggestData.slice(0, 7).map((station, index) => (
                        <li className="list-group-item" key={index}>
                            {station}
                        </li>
                        ))}
                    </ul>
                    ) : null
                }

                </div>

            </div>
       
    );
};

export default SearchComponent;