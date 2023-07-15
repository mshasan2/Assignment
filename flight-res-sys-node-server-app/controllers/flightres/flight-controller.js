import * as flightsDao from "./flights-dao.js";

const findFlights = async (req, res) => {
    // const flights = await flightsDao.findFlights();
    // res.json(flights);
    res.send('Hello Flights')
}

const searchFlights = async (req, res) => {
    if (req.query.origin) {
        const query = req.query.origin; 
        const flights = await flightsDao.searchFlightsOnOrigin(query);
        res.json(flights);
    }
    else if (req.query.destination) {
        const query = req.query.destination; 
        const flights = await flightsDao.searchFlightsOnDestination(query);
        res.json(flights);
    }
//     const flights = await flightsDao.findFlights();
//     res.json(flights);
}

const suggest = async (req, res) => {
    // if (req.query.origin) {
    //     const query = req.query.origin; 
    //     const flights = await flightsDao.suggestOrigin(query);
    //     res.json(flights);
    // }
    // else if (req.query.destination) {
    //     const query = req.query.destination; 
    //     const flights = await flightsDao.suggestDestination(query);
    //     res.json(flights);
    // }
    const query = req.params.query;
    const suggestions = await flightsDao.suggest(query);
    res.json(suggestions);

}

export default (app) => {
    app.get('/api/flights/search', searchFlights);
    app.get('/api/flights/suggest/:query', suggest);
    app.get('/api/flights', findFlights);
}