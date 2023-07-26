import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const listingsSlice = createSlice({
	name: "listings",
	initialState,
	reducers: {},
});

export const listingsSliceReducer = listingsSlice.reducer;
