import { createSlice } from "@reduxjs/toolkit";
import { getApiTokenForApp } from "./auth-thunks";
import { message } from "antd";

export interface AuthenticationState {
	loading: boolean;
	token: string | null;
	errorMessage: string | null;
}

const initialState: AuthenticationState = {
	loading: false,
	token: null,
	errorMessage: null,
};

const authenticationSlice = createSlice({
	name: "authentication",
	initialState,
	reducers: {},
	extraReducers: {
		[getApiTokenForApp.pending.type]: (state) => {
			return { ...state, loading: true };
		},
		[getApiTokenForApp.fulfilled.type]: (state, action) => {
			return { ...state, loading: false, token: action.payload.token, errorMessage: action.payload.errorMessage };
		},
		[getApiTokenForApp.rejected.type]: (state, action) => {
			return { ...state, loading: false, token: null, errorMessage: action.payload };
		},
	},
});

export const authenticationSliceActions = authenticationSlice.actions;
export const authenticationSliceReducer = authenticationSlice.reducer;

console.log("authenticationSliceActions: ", authenticationSliceActions);