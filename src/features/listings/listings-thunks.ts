import { createAsyncThunk } from "@reduxjs/toolkit";
import { RedditApi } from "../../lib/api";
import { getTokenFromLocalStorage } from "../../lib/utils";
import { Listing, Link } from "../../global-types";
import { ListingsState } from "./listingsSlice";

export const getListing = createAsyncThunk<ListingsState, string | undefined>("listings/getListing", async (type = "best") => {
	try {
		const listing: Listing<Link> = await RedditApi.getListing(type, 30);
		return { listing: listing, errorMessage: null, loading: false } as ListingsState;
	} catch (error: any) {
		return { listing: null, errorMessage: error.message, loading: false } as ListingsState;
	}
});
