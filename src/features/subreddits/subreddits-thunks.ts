import { createAsyncThunk } from "@reduxjs/toolkit";
import { RedditApi } from "../../lib/api";
import { authenticationSliceActions } from "../authentication/authenticationSlice";

export const getSubreddits = createAsyncThunk("subreddits/getSubreddits", async () => {});

export const getSubredditAbout = createAsyncThunk<any, string, {}>("subreddits/getSubredditAbout", async (subreddit, ThunkAPI) => {
	try {
		const sidebar = await RedditApi.getSubredditAbout(subreddit);
		return sidebar;
	} catch (error: any) {
		if (error.status === 401) {
			ThunkAPI.dispatch(authenticationSliceActions.clearToken());
			return { loading: true };
		}
		return { errorMessage: error.message, loading: false };
	}
});
