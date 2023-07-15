import mongoose from "mongoose";
import flightsSchema from "./flights-Schema.js";

const flightsModel = mongoose.model('flightsModel', flightsSchema);
export default flightsModel;