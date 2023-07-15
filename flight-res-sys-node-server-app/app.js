import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import FlightController from './controllers/flightres/flight-controller.js';

const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/flightres'


const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(CONNECTION_STRING);
FlightController(app);

app.get('/hello', (req, res) => {res.send('Hello World!')})
app.listen(4000)