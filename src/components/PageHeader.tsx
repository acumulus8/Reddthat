import React from "react";
import { Layout } from "antd";
import PageNavigation from "./PageNavigation";

const { Header } = Layout;

const PageHeader: React.FC = () => {
	return (
		<>
			<Layout>
				<Header style={{ display: "flex", alignItems: "center" }}>
					<h1 style={{ color: "#fcfced" }}>Reddthat</h1>
					<PageNavigation />
				</Header>
			</Layout>
		</>
	);
};

export default PageHeader;
