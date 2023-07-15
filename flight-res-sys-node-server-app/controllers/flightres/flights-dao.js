import e from "express";
import flightsModel from "./flights-model.js";

export const findFlights = () => flightsModel.find();

export const searchFlightsOnOrigin = async (query) => {
    const flights = await flightsModel.find({
        origin_full_name: query
    })
    return flights;
};

export const searchFlightsOnDestination = async (query) => {
    const flights = await flightsModel.find({
        destination_full_name: query
    })
    return flights;
};



// export const suggestOrigin = async (query) => {
//     // Update the fields option to return the origin_full_name field.
//     // work on suggest name

//   // Perform a case-insensitive search for matching stations
// //   const stations = await flightsModel.find({
// //     $or: [
// //       { origin_full_name: { $regex: query, $options: 'i' } },
// //       { origin: { $regex: query, $options: 'i' } },
// //     ],
    
// //   }).limit(5).select('origin_full_name origin -_id');

// //   return stations;
//     const stations = await flightsModel.distinct('origin_full_name', {
//         $or: [
//         { origin_full_name: { $regex: query, $options: 'i' } },
//         { origin: { $regex: query, $options: 'i' } },
//         ],
//         });
//     return stations;

//   };


// export const suggestDestination = async (query) => {
//     // Update the fields option to return the origin_full_name field.

//   // Perform a case-insensitive search for matching stations
// //   const stations = await flightsModel.find({
// //     $or: [
// //       { destination_full_name: { $regex: query, $options: 'i' } },
// //       { destination: { $regex: query, $options: 'i' } },
// //     ],
    
// //   }).select('destination_full_name destination -_id').limit(5);

// //   return stations;

//     const stations = await flightsModel.distinct('destination_full_name', {
//         $or: [
//         { destination_full_name: { $regex: query, $options: 'i' } },
//         { destination: { $regex: query, $options: 'i' } },
//         ],
//         });
//     return stations;
//   };

export const suggest = async (query) => {
    const destinations = await flightsModel.distinct('destination_full_name', {
        $or: [
          { destination_full_name: { $regex: query, $options: 'i' } },
          { destination: { $regex: query, $options: 'i' } }
        ],
      });
  
      const origins = await flightsModel.distinct('origin_full_name', {
        $or: [
          { origin_full_name: { $regex: query, $options: 'i' } },
          { origin: { $regex: query, $options: 'i' } }
        ],
      });
  
      const combinedUniqueElements = Array.from(new Set([...destinations, ...origins]));
  
      return combinedUniqueElements.slice(0, 10);
}

