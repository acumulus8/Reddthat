import { createSlice } from "@reduxjs/toolkit";
import { Listing } from "../../global-types";

export interface ListingsState {
	loading: boolean;
	listings: Listing[] | null;
}

const initialState: ListingsState = {
	loading: false,
	listings: null,
};

const listingsSlice = createSlice({
	name: "listings",
	initialState,
	reducers: {},
});

export const listingsSliceActions = listingsSlice.actions;
export const listingsSliceReducer = listingsSlice.reducer;
