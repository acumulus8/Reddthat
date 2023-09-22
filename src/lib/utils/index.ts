export function convertUTCToFormattedDate(utc: number) {
	const date = new Date(utc * 1000);
	const formattedDate = date.toLocaleDateString("en-US", {
		weekday: "short",
		year: "numeric",
		month: "short",
		day: "numeric",
	});
	return formattedDate;
}

export function getTimeDifference(created: number) {
	const now = new Date().getTime();
	const difference = now - created;
	const seconds = Math.floor(difference / 10000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	if (days > 0) {
		return `${days} days`;
	}
	if (hours > 0) {
		return `${hours} hours`;
	}
	if (minutes > 0) {
		return `${minutes} minutes`;
	}
	return `${seconds} seconds`;
}

export function getTokenFromLocalStorage() {
	const token = localStorage.getItem("token");
	if (token === null || token === "undefined") {
		return null;
	}
	return token;
}
export function setTokenInLocalStorage(token: string) {
	if (token === null) {
		localStorage.removeItem("token");
	}
	localStorage.setItem("token", token);
}

export function removeTokenFromLocalStorage() {
	localStorage.removeItem("token");
	return null;
}
