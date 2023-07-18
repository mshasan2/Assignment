import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./flights-service";

export const searchFlightsByOriginThunk = createAsyncThunk(
    "flights/searchFlightsByOrigin", async (searchTerm) => {
        return await service.searchFlightsByOrigin(searchTerm);
    }
);

export const searchFlightsByDestinationThunk = createAsyncThunk(
    "flights/searchFlightsByDestination", async (searchTerm) => {
        return await service.searchFlightsByDestination(searchTerm);
    }
);

export const suggestThunk = createAsyncThunk(
    "flights/suggest", async (suggestionTerm) => {
        return await service.suggest(suggestionTerm);
    }
);

