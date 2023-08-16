import { getTokenFromLocalStorage, removeTokenFromLocalStorage } from "../utils";
import { Listing, Link } from "../../global-types";
import RedditError from "../errors/reddit-error";

const { REACT_APP_REDDIT_CLIENT_ID, REACT_APP_REDDIT_APP_SECRET } = process.env;
const unAuthedRootUrl = "https://www.reddit.com/api/v1";
const authedRootUrl = "https://oauth.reddit.com";

export const RedditApi = {
	getAppOnlyToken: async () => {
		const body = new FormData();
		const appOnlyAuthString = btoa(REACT_APP_REDDIT_CLIENT_ID + ":" + REACT_APP_REDDIT_APP_SECRET);
		body.append("grant_type", "client_credentials");

		const response = await fetch(`${unAuthedRootUrl}/access_token`, {
			method: "POST",
			mode: "cors",
			credentials: "omit",
			headers: {
				Authorization: `Basic ${appOnlyAuthString}`,
			},
			body: body,
		});
		const responseJson = await response.json();
		return responseJson;
	},
	getListing: async (typeOrThingId: string, limit: number): Promise<Listing<Link>> => {
		const token = getTokenFromLocalStorage();

		const response: Response = await fetch(`${authedRootUrl}/${typeOrThingId}?limit=${limit}`, {
			method: "GET",
			mode: "cors",
			credentials: "omit",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 401) {
			removeTokenFromLocalStorage();
			throw new RedditError("Unauthorized", { status: response.status });
		}
		const responseJson = await response.json();
		return responseJson;
	},
	getCommentsForLink: async (permalink: string) => {
		const token = getTokenFromLocalStorage();

		const response = await fetch(`${authedRootUrl}/${permalink}?limit=20&depth=5`, {
			method: "GET",
			mode: "cors",
			credentials: "omit",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const responseJson = await response.json();
		return responseJson;
	},
	getSubredditAbout: async (subreddit: string) => {
		const token = getTokenFromLocalStorage();

		const response = await fetch(`${authedRootUrl}/r/${subreddit}/about`, {
			method: "GET",
			mode: "cors",
			credentials: "omit",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		if (response.status === 401) {
			removeTokenFromLocalStorage();
			throw new RedditError("Unauthorized", { status: response.status });
		}
		const responseJson = await response.json();
		return responseJson;
	},
};
