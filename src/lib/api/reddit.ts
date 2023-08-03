const { REACT_APP_REDDIT_CLIENT_ID, REACT_APP_REDDIT_APP_SECRET } = process.env;

const userRequestHeaders = {
	"Content-Type": "application/json",
	"User-Agent": "web:com.reddthatportfolioapp:v0.1.0 (by /u/bigabear)",
};

export const RedditApi = {
	getAppOnlyToken: async () => {
		const body = new FormData();
		const appOnlyAuthString = btoa(REACT_APP_REDDIT_CLIENT_ID + ":" + REACT_APP_REDDIT_APP_SECRET);
		body.append("grant_type", "client_credentials");

		const response = await fetch("https://www.reddit.com/api/v1/access_token", {
			method: "POST",
			mode: "cors",
			credentials: "omit",
			headers: {
				"User-Agent": "web:com.reddthatportfolioapp:v0.1.0 (by /u/bigabear)",
				Authorization: `Basic ${appOnlyAuthString}`,
			},
			body: body,
		});
		const responseJson = await response.json();
		return responseJson;
	},
};
