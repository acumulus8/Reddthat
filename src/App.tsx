import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ConfigProvider as ThemeProvider } from "antd";

import Root from "./routes/root/Root";
import Home from "./routes/home/Home";
import "./styles/App.css";
import { theme } from "./styles/theme";

const router = createBrowserRouter([{ path: "/", element: <Root />, children: [{ path: "/:listingType?", element: <Home /> }] }]);

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
		</ThemeProvider>
	);
};

export default App;
