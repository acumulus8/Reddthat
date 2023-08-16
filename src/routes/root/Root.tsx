import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Layout, message } from "antd";
import PageHeader from "../../components/PageHeader";
import SideBar from "../../components/SideBar";
import { RootState } from "../../store";

const { Content, Footer } = Layout;

const Root = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const { authentication, listings } = useSelector((state: RootState) => state);

	React.useEffect(() => {
		if (authentication.errorMessage) {
			messageApi.open({ type: "error", content: authentication.errorMessage });
		}
		if (listings.errorMessage) {
			messageApi.open({ type: "error", content: listings.errorMessage });
		}
	}, [authentication.errorMessage, listings.errorMessage, messageApi]);

	return (
		<Layout hasSider={false}>
			<PageHeader />
			<Layout hasSider style={appBodyStyles}>
				<Content>
					{contextHolder}
					<Outlet />
				</Content>
				<SideBar />
			</Layout>
			<Footer style={{ textAlign: "center" }}>Reddthat (Reddit clone) Created by Tim Wilburn</Footer>
		</Layout>
	);
};

const appBodyStyles = {
	width: 960,
	margin: "60px auto 100px auto",
};

export default Root;
