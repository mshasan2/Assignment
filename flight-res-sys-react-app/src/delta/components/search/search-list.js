import React from "react";

const SearchList = ({searchData}) => {
    return (
        <div>
            {
                searchData.length > 0 ?
                <div>
                    <h6 className="ms-1 mt-1">Search Results</h6>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-1">
                                    <b>Flight No.</b>
                                </div>
                                <div className="col-2">
                                    <b>Departure Time</b>
                                </div>
                                <div className="col-3">
                                    <b>Origin</b>
                                </div>
                                
                                <div className="col-3">
                                    <b>Destination</b> 
                                </div>
                                <div className="col-1">
                                    <b>Gate</b>
                                </div>
                            </div>
                        </li>
                        {
                            searchData.map((flight) => {
                                return (
                                <li className="list-group-item" key={flight._id}>
                                    <div className="row">
                                        <div className="col-1">
                                            {flight.flt_num}
                                        </div>
                                        <div className="col-2">
                                            {flight.in_gmt}
                                        </div>
                                        <div className="col-3">
                                            {`${flight.origin_full_name} ${flight.origin}`}
                                        </div> 
                                        <div className="col-3">
                                            {`${flight.destination_full_name} ${flight.destination}`}
                                        </div>  
                                        <div className="col-1">
                                            {flight.scheduled_origin_gate}
                                        </div>  
                                    </div>
                                    
                                </li>
                                )
                            })
                        }
                    </ul>
                </div> : null
            }
        </div>
    )
}

export default SearchList;