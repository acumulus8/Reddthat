import { createAsyncThunk } from "@reduxjs/toolkit";
import { RedditApi } from "../../lib/api";
import { Listing, Link } from "../../global-types";
import { ListingsState } from "./listingsSlice";
import { authenticationSliceActions } from "../authentication/authenticationSlice";

export const getListing = createAsyncThunk<ListingsState, string | undefined, {}>("listings/getListing", async (type = "best", ThunkAPI) => {
	try {
		const listing: Listing<Link> = await RedditApi.getListing(type, 30);
		return { listing: listing, errorMessage: null, loading: false } as ListingsState;
	} catch (error: any) {
		if (error.status === 401) {
			ThunkAPI.dispatch(authenticationSliceActions.clearToken());
			return { listing: null, errorMessage: null, loading: true } as ListingsState;
		}
		return { listing: null, errorMessage: error.message, loading: false } as ListingsState;
	}
});
