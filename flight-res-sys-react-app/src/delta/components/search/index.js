import React from 'react';
import { useEffect } from 'react';
import {searchFlightsByOriginThunk, searchFlightsByDestinationThunk, suggestThunk} from '../../../services/flights-thunks';
import { useSelector, useDispatch} from "react-redux";
import { useState } from 'react';
import SearchList from './search-list';
import './index.css';


const SearchComponent = () => {
    const {searchData} = useSelector(state => state.searchData)
    const {suggestData} = useSelector(state => state.suggestData)
    const [suggestedArray, setsuggestedArray] = useState(suggestData);
    const [searchType, setSearchType] = useState("origin");
    const [suggestSearch, setSuggestSearch] = useState("");
    
    const dispatch = useDispatch();

    const suggestSearchHandler = (e) => {
        if (e.target.value === "") {     
            setSuggestSearch("");
            setsuggestedArray([]);
        } else {
            setSuggestSearch(e.target.value);
            
        }
    }

    useEffect(() => {
        if (suggestSearch !== "") {
            dispatch(suggestThunk(suggestSearch))
            
        }
    }
    , [suggestSearch, dispatch])

    useEffect(() => {
        setsuggestedArray(suggestData);
      }, [suggestData]);

    const searchFlightDetails = (station) => {
        if(searchType === "origin") {
            dispatch(searchFlightsByOriginThunk(station))
        } else {
            dispatch(searchFlightsByDestinationThunk(station))
        }
    }

    const suggestedArrayClickHandler = (station) => {
        setSuggestSearch(station);
        setsuggestedArray([]);
        searchFlightDetails(station);
    }

    const searchButtonHandler = () => {
        suggestedArrayClickHandler(suggestSearch);       
    }


    
    return (
        
            <div className='bg-image rounded p-2'>

                <div>
                    <h4>Search Flight Details using Origin/Destination</h4>
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


                    <div className="input-group mb-1">
            
                        <input className="form-control"
                            onChange={suggestSearchHandler}
                            value = {suggestSearch}
                            />
                        <button className="btn btn-primary" type="button"
                        onClick={searchButtonHandler}
                        >Search</button>
                        
                    </div>

                </div>
                <div>

                    {suggestedArray.length > 0 ? (
                        <ul className="list-group">
                            {suggestedArray.map((station, index) => (
                            <li className="list-group-item" key={index} onClick = {() => suggestedArrayClickHandler(station)}>
                                {station}
                            </li>
                            ))}
                        </ul>
                        ) : null
                    }

                </div>

                <div>
                    <SearchList searchData={searchData}/>
                </div>

                

            </div>
       
    );
};

export default SearchComponent;
