import React from "react";

const SearchList = ({searchData}) => {
    return (
        <div>
            {
                searchData.length > 0 ?
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-1">
                                Flight No.
                            </div>
                            <div className="col-2">
                                Departure Time
                            </div>
                            <div className="col-3">
                                Origin 
                            </div>
                            
                            <div className="col-3">
                                Destination 
                            </div>
                            <div className="col-1">
                                Gate
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
                </ul> : null
            }
        </div>
    )
}

export default SearchList;