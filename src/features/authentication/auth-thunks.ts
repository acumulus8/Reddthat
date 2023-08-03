import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthenticationState } from "./authenticationSlice";
import { RedditApi } from "../../lib/api";

export const getTokenFromLocalStorage = () => {
	const token = localStorage.getItem("token");
	return token;
};
export const setTokenInLocalStorage = (token: string) => {
	localStorage.setItem("token", token);
	if (token === null) {
		localStorage.removeItem("token");
	}
};

export const getApiTokenForApp = createAsyncThunk<Partial<AuthenticationState>>("authentication/getApiTokenForApp", async () => {
	const possibleToken = getTokenFromLocalStorage();
	if (possibleToken) {
		console.log("_____RETURNING EXISTING TOKEN FROM LOCAL STORAGE");
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
