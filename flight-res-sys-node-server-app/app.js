import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import FlightController from './controllers/flightres/flight-controller.js';

// const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/flightres'

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(CONNECTION_STRING);
FlightController(app);

/**
 * 
 * /:
 * get:
 * description: Root endpoint
 * responses:
 * 200:
 * description: Success
 * 
 */
app.get('', (req, res) => res.send('Node Server is now live!'));
app.listen(4000)