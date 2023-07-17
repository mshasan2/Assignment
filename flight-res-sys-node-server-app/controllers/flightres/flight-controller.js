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
    /**
     * 
     * /api/flights/search:
     *  get:
     *     description: Search for flights
     *    parameters:
     *     - in: query
     *      name: origin
     *     schema:
     *     type: string
     *    description: Origin airport
     *    - in: query
     *    name: destination
     *   schema:
     *    type: string
     *  description: Destination airport
     * responses:
     * 200:
     * description: Success
     * 400:
     * description: Invalid search
     * 
     */
    app.get('/api/flights/search', searchFlights);

    /**
     * 
     * /api/flights/suggest/{query}:
     * get:
     * description: Suggest airports names based on query
     * parameters:
     * - in: path
     * name: query
     * schema:
     * type: string
     * description: Query string
     * responses:
     * 200:
     * description: Success
     * 
     */ 
    app.get('/api/flights/suggest/:query', suggest);
}