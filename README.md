# ODS Full Stack Coding Assignment

## ✈️ Assignment Description
A new flight reservation system is being commissioned and you are tasked with building this out. There will be multiple phases to this project, but you will be expected to deliver the first phase here. You are expected to build out the initial flight search feature. Users should be able to visit the application and view a list of flights based on search criteria. A data source is provided for you in the repo to put all of this together.

## Flight Search Feature

1. Allow the user to enter a station (`destination` or `origin`) to search flights. Display the results in a table.

2. Provide an auto-suggest feature for station. A user should be able to see flights based on station code or location name as they're typing out the search terms similar to how Google works.

   Example: A user wants to select flights to/from Jacksonville. The associated station code is JAX
   
       Case 1: User enters the keywords: Jack --> The user is presented with a list of suggestion(s)
       Case 2: User enters the keywords: Jackson --> The user is presented with a list of suggestion(s)
       Case 3: User enters the keywords: Jax --> The user is presented with a list of suggestion(s)
   
3. Provide two RESTful endpoints supporting the functionality listed in steps 1 and 2.

4. You can be creative with this as however you'd like

## Bonus Points (Not Required)
1. Unit tests are created for your code and test the main logic you've put together, e.g. auto-suggest returns BNA when Nashville is the search term.

## Datasource
A zipped CSV file of flights is available in /data/flights.csv. Each row in the CSV file represents a flight.

## Implementation
###  Tech Stack 
* Frontend: React, Redux
* Backend: Node.js, Express
* Database: MongoDB

###  Hosting
* Frontend: Hosted on Netlify (https://storied-tapioca-3903f7.netlify.app/)
* Backend: Hosted on Render (https://flight-res-sys-node-server-app.onrender.com/)
* Database: Hosted on MongoDB atlas

#### Note: The backend server may take some time to load as Render.com can spin down Free instance types due to inactivity.

### Running code Locally
1. Clone this repository
2. Install MongoDb and MongoDb compass.
3. Open MongoDB Compass and connect to the MongoDB instance. Then, create a new database with the name "flightres" and a collection with the name "flights."
4. Upload the CSV file (data/flights.csv) to the collection, following the schema present in flight-res-sys-node-server-app/controllers/flightres/flights-schema.js to initialize the data types of the flights.
5. Navigate to the "flight-res-sys-react-app" directory in the terminal and run npm install. After installation, run ```npm start``` to start the React server.
6. Navigate to the "flight-res-sys-node-server-app" directory in the terminal and run npm install. After installation, run ```nodemon app.js``` to start the Node server.

#### Note: To run the above servers locally, add the following environment variables:
```REACT_APP_API_BASE=http://localhost:4000/api``` .
```DB_CONNECTION_STRING=mongodb://127.0.0.1:27017/flightres``` .

Make sure to set these environment variables in your local development environment before running the React and Node servers. This will ensure that the frontend can communicate with the backend server and that the backend can connect to the MongoDB database correctly.

### Running Test Cases in Local
1. Navigate to the "flight-res-sys-node-server-app" directory in the terminal and run ``` npm test```.

## API Endpoints
### Search Flights
**Endpoint:** ```/api/flights/search```  
**Method:** GET  
**Description:** Search for flights based on either origin or destination airport.  
**Parameters:**  
origin (query parameter): Origin airport (string)  
destination (query parameter): Destination airport (string)  
**Responses:**  
200: Success (JSON array of flight data)  
400: Invalid search (Error message)  

### Suggest Airports
**Endpoint:** ```/api/flights/suggest/:query```  
**Method:** GET    
**Description:** Get suggested airport names based on a given query.  
**Parameters:**  
query (path parameter): Query string (string)  
**Responses:**  
200: Success (JSON array of suggested airport names)

#### Usage

To use the API, make HTTP GET requests to the specified endpoints. For example, to search for flights from a specific origin, use the following request:  
GET ```http://localhost:4000/api/flights/search?origin=JFK```  
Sample Output: 

To get airport name suggestions, use:  
GET ```http://localhost:4000/api/flights/suggest/air```  
Sample Output:

Video: (Link to be added)