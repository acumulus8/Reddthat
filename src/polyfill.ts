// Polyfill for globalThis
if (typeof globalThis === "undefined") {
	// @ts-ignore
	(typeof window !== "undefined" ? window : global).globalThis = (function (this: any) {
		return this;
	})();
}
