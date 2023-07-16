import * as flightsDao from "./flights-dao.js";

const searchFlights = async (req, res) => {
    if (req.query.origin) {
        const query = req.query.origin; 
        const flights = await flightsDao.searchFlightsOnOrigin(query);
        res.status(200).json(flights);
    }
    else if (req.query.destination) {
        const query = req.query.destination; 
        const flights = await flightsDao.searchFlightsOnDestination(query);
        res.status(200).json(flights);
    }
    else {
        res.status(400).send("Invalid search");
    }
}

const suggest = async (req, res) => {
    const query = req.params.query;
    const suggestions = await flightsDao.suggest(query);
    res.json(suggestions);

}

export default (app) => {
    app.get('/api/flights/search', searchFlights);
    app.get('/api/flights/suggest/:query', suggest);
}