import mongoose from "mongoose";
import flightsSchema from "./flights-schema.js";

const flightsModel = mongoose.model('flightsModel', flightsSchema);
export default flightsModel;