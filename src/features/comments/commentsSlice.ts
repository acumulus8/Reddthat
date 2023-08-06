import { createSlice } from "@reduxjs/toolkit";
import { getCommentsForLink } from "./comments-thunks";
import { Comment } from "./types";
import { Link, Listing } from "../../global-types";

export interface CommenstState {
	loading: boolean;
	errorMessage: string | null;
	comments: Listing<Comment> | null;
	selectedPost: Link | null;
}

const initialState: CommenstState = {
	loading: false,
	errorMessage: null,
	comments: null,
	selectedPost: null,
};

const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {},
	extraReducers: {
		[getCommentsForLink.pending.type]: (state) => {
			return { ...state, loading: true };
		},
		[getCommentsForLink.fulfilled.type]: (state, action) => {
			return {
				...state,
				loading: false,
				selectedPost: action.payload[0],
				comments: action.payload[1],
				errorMessage: action.payload.errorMessage,
			};
		},
		[getCommentsForLink.rejected.type]: (state, action) => {
			return { ...state, errorMessage: action.payload.errorMessage };
		},
	},
});

export const commentsSliceActions = commentsSlice.actions;
export const commentsSliceReducer = commentsSlice.reducer;
