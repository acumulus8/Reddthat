import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Layout } from "antd";

import HomePage from "./pages/home/HomePage";
import PageHeader from "./components/PageHeader";
import "./styles/App.css";

const { Content } = Layout;

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<HomePage />} />));

const App: React.FC = () => {
	return (
		<>
			<PageHeader />
			<Layout>
				<Content>
					<RouterProvider router={router} />
				</Content>
			</Layout>
		</>
	);
};

export default App;
