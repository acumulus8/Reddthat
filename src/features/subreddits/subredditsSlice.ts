import { createSlice } from "@reduxjs/toolkit";
import { getSubredditAbout } from "./subreddits-thunks";
import { Thing } from "../../global-types";
import { Subreddit } from "./types";

export interface SubredditsState {
	loading: boolean;
	about: Thing<Subreddit> | null;
	errorMessage: string | null;
}

const initialState: SubredditsState = {
	loading: false,
	about: null,
	errorMessage: null,
};

const subredditsSlice = createSlice({
	name: "subreddits",
	initialState,
	reducers: {
		clearAboutInfo: (state) => {
			return { ...state, about: null };
		},
	},
	extraReducers: {
		[getSubredditAbout.pending.type]: (state) => {
			return { ...state, loading: true };
		},
		[getSubredditAbout.fulfilled.type]: (state, action) => {
			return { ...state, loading: false, about: action.payload, errorMessage: null };
		},
		[getSubredditAbout.rejected.type]: (state, action) => {
			return { ...state, loading: false, about: null, errorMessage: action.payload };
		},
	},
});

export const subredditsSliceActions = subredditsSlice.actions;
export const subredditsSliceReducer = subredditsSlice.reducer;
