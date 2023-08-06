export function getTimeDifference(created: number) {
	const now = new Date().getTime();
	const difference = now - created;
	const seconds = Math.floor(difference / 10000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	if (days > 0) {
		return `${days} days ago`;
	}
	if (hours > 0) {
		return `${hours} hours ago`;
	}
	if (minutes > 0) {
		return `${minutes} minutes ago`;
	}
	return `${seconds} seconds ago`;
}

export function getTokenFromLocalStorage() {
	const token = localStorage.getItem("token");
	if (token === null || token === "undefined") {
		return null;
	}
	return token;
}
export function setTokenInLocalStorage(token: string) {
	localStorage.setItem("token", token);
	if (token === null) {
		localStorage.removeItem("token");
	}
}
