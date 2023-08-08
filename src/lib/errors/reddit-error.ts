class RedditError extends Error {
	status: number;

	constructor(message = "not sure", params: { status: number }) {
		super(message);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, RedditError);
		}
		this.name = "RedditError";
		this.message = message;
		this.status = params.status;
	}
}

export default RedditError;
