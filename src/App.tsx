import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider as ThemeProvider, Modal } from "antd";

import Root from "./routes/root/Root";
import Listing from "./routes/listing/Listing";
import LinkDetails from "./routes/linkDetails/LinkDetails";
import "./styles/App.css";
import { theme } from "./styles/theme";
import TermsModal from "./components/TermsModal";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "/:listingType?", element: <Listing /> },
			{ path: "/post/:id", element: <LinkDetails /> },
		],
	},
]);

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			{!localStorage.getItem("accepts_terms") && <TermsModal />}
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default App;
