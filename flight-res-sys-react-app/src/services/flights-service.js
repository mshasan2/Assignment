import axios from "axios";

// const API_Base = "http://localhost:4000/api";

const API_Base = process.env.REACT_APP_API_URL;
const API_Flights = `${API_Base}/flights`;

export const searchFlightsByOrigin = async (searchTerm) => {
    const response = await axios.get(`${API_Flights}/search?origin=${searchTerm}`);
    return response.data;
}

export const searchFlightsByDestination = async (searchTerm) => {
    const response =  await axios.get(`${API_Flights}/search?destination=${searchTerm}`);
    return response.data;
}

export const suggest = async (suggestionTerm) => {
    const response = await axios.get(`${API_Flights}/suggest/${suggestionTerm}`);
    return response.data;
}






