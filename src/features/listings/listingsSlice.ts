import { createSlice } from "@reduxjs/toolkit";
import { Listing, Link } from "../../global-types";
import { getListing } from "./listings-thunks";

export interface ListingsState {
	loading: boolean;
	listing: Listing<Link> | null;
	errorMessage: string | null;
}

const initialState: ListingsState = {
	loading: false,
	listing: null,
	errorMessage: null,
};

const listingsSlice = createSlice({
	name: "listings",
	initialState,
	reducers: {},
	extraReducers: {
		[getListing.pending.type]: (state) => {
			return { ...state, loading: true };
		},
		[getListing.fulfilled.type]: (state, action) => {
			return { ...state, loading: false, listing: action.payload.listing, errorMessage: action.payload.errorMessage };
		},
		[getListing.rejected.type]: (state, action) => {
			return { ...state, errorMessage: action.payload.errorMessage };
		},
	},
});

export const listingsSliceActions = listingsSlice.actions;
export const listingsSliceReducer = listingsSlice.reducer;
