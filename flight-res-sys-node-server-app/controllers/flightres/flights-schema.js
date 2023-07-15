import mongoose from "mongoose";

const Schema = mongoose.Schema({
        id: Number,
        created_at: Date,
        updated_at: Date,
        flight_identifier: String,
        flt_num: Number,
        scheduled_origin_gate: String,
        scheduled_destination_gate: String,
        out_gmt: Date,
        in_gmt:  String,
        off_gmt: String,
        on_gmt: String,
        destination: String,
        origin: String,
        destination_full_name: String,
        origin_full_name: String
}, { collection: 'flights' });


export default Schema;