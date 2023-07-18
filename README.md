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

<details>
  <summary>Example Payloads</summary>
  
  <details>
        <summary>Searching flights based on destination</summary>
        <p>GET http://localhost:4000/api/flights/search?destination=Malaga</p>
        
        
    [
    {
        "_id": "64af2a9b88e6c467048a9cfa",
        "id": 291480,
        "created_at": "2019-09-20T00:36:44.000Z",
        "updated_at": "2019-09-20T00:36:44.000Z",
        "flight_identifier": "b4131042-7935-486f-bbaa-131819a5b356",
        "flt_num": 2594,
        "scheduled_origin_gate": "1",
        "scheduled_destination_gate": "Any",
        "out_gmt": "2019-02-10T00:51:46.000Z",
        "in_gmt": "2019-02-09 21:16:09",
        "off_gmt": "2019-02-09 19:58:59",
        "on_gmt": "2019-02-09 21:10:45",
        "destination": "AGP",
        "origin": "SDR",
        "destination_full_name": "Malaga",
        "origin_full_name": "Santander"
    },
    {
        "_id": "64af2a9b88e6c467048a9e96",
        "id": 292225,
        "created_at": "2019-09-20T00:36:44.000Z",
        "updated_at": "2019-09-20T00:36:44.000Z",
        "flight_identifier": "243e04fd-5953-4033-9bc0-3e0e715f10b3",
        "flt_num": 7401,
        "scheduled_origin_gate": "Any",
        "scheduled_destination_gate": "Any",
        "out_gmt": "2019-02-10T02:05:55.000Z",
        "in_gmt": "2019-02-09 22:47:48",
        "off_gmt": "2019-02-09 21:21:18",
        "on_gmt": "2019-02-09 22:41:17",
        "destination": "AGP",
        "origin": "ALG",
        "destination_full_name": "Malaga",
        "origin_full_name": "Houari Boumediene"
    },
    {
        "_id": "64af2a9b88e6c467048a9f52",
        "id": 293105,
        "created_at": "2019-09-20T00:36:44.000Z",
        "updated_at": "2019-09-20T00:36:44.000Z",
        "flight_identifier": "be80a1f3-a2eb-4a05-8f38-c0836eeac1b0",
        "flt_num": 1138,
        "scheduled_origin_gate": "Any",
        "scheduled_destination_gate": "Any",
        "out_gmt": "2019-02-10T02:40:12.000Z",
        "in_gmt": "2019-02-09 23:06:28",
        "off_gmt": "2019-02-09 21:54:42",
        "on_gmt": "2019-02-09 23:00:07",
        "destination": "AGP",
        "origin": "LIS",
        "destination_full_name": "Malaga",
        "origin_full_name": "Lisbon"
    }
    ]
  </details>

  <details>
        <summary>Searching flights based on Origin</summary>
        <p>GET http://localhost:4000/api/flights/search?origin=Santander</p>
        

        
    [
    {
        "_id": "64af2a9b88e6c467048a9cfa",
        "id": 291480,
        "created_at": "2019-09-20T00:36:44.000Z",
        "updated_at": "2019-09-20T00:36:44.000Z",
        "flight_identifier": "b4131042-7935-486f-bbaa-131819a5b356",
        "flt_num": 2594,
        "scheduled_origin_gate": "1",
        "scheduled_destination_gate": "Any",
        "out_gmt": "2019-02-10T00:51:46.000Z",
        "in_gmt": "2019-02-09 21:16:09",
        "off_gmt": "2019-02-09 19:58:59",
        "on_gmt": "2019-02-09 21:10:45",
        "destination": "AGP",
        "origin": "SDR",
        "destination_full_name": "Malaga",
        "origin_full_name": "Santander"
    }
    ]

</details>

</details>

### Suggest Airports
**Endpoint:** ```/api/flights/suggest/:query```  
**Method:** GET    
**Description:** Get suggested airport names based on a given query.  
**Parameters:**  
query (path parameter): Query string (string)  
**Responses:**  
200: Success (JSON array of suggested airport names)
400: Invalid Input (Error message) 

<details>
  <summary>Example payloads</summary>
  <p>Getting suggested airport names </p>
  <p>
    GET http://localhost:4000/api/flights/suggest/bos
  </p>
  
````
[
    "Logan Intl",
    "Los Cabos Intl"
]
````
<p>
    GET http://localhost:4000/api/flights/suggest/san 
</p>

    [
        "Mineta San Jose Intl",
        "San Angelo Regl/mathis",
        "San Antonio Intl",
        "San Diego Intl",
        "San Francisco Intl",
        "San Giusto",
        "San Luis Obispo Co Regl",
        "San Pablo"
    ]




</details>

#### Usage

To use the API, make HTTP GET requests to the specified endpoints. For example, to search for flights from a specific origin, use the following request:  
GET ```http://localhost:4000/api/flights/search?origin=JFK```  

To get airport name suggestions, use:  
GET ```http://localhost:4000/api/flights/suggest/air```  




### Demo Video: https://www.youtube.com/watch?v=Z34N5n1orWU
Video Description: The above video contains a demo of the Application created for the ODS Full Stack Assignment. The video showcases the auto-suggest feature as well as the search feature created as part of the ODS Full Stack Assignment.
