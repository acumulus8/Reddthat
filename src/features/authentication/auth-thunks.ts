import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthenticationState } from "./authenticationSlice";
import { RedditApi } from "../../lib/api";
import { getTokenFromLocalStorage, setTokenInLocalStorage } from "../../lib/utils";

export const getApiTokenForApp = createAsyncThunk<Partial<AuthenticationState>>("authentication/getApiTokenForApp", async () => {
	const possibleToken = getTokenFromLocalStorage();
	if (possibleToken) {
		console.log("_____RETURNING EXISTING TOKEN FROM LOCAL STORAGE: ", possibleToken);
		return { token: possibleToken };
	}
	try {
		console.log("_____GET API TOKEN FOR APP");
		const token = await RedditApi.getAppOnlyToken();
		setTokenInLocalStorage(token.access_token);
		return { token: token.access_token };
	} catch (error: any) {
		return { token: null, errorMessage: error.message };
	}
});
