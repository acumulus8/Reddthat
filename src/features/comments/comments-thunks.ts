import { createAsyncThunk } from "@reduxjs/toolkit";
import { CommentsResponse } from "./types";
import { RedditApi } from "../../lib/api";

export const getCommentsForLink = createAsyncThunk("comments/getCommentsForLink", async (permaLink: string) => {
	try {
		const comments: CommentsResponse = await RedditApi.getCommentsForLink(permaLink);
		return comments;
	} catch (error: any) {
		return { errorMessage: error.message };
	}
});
