import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Layout, message, Affix } from "antd";
import PageHeader from "../../components/PageHeader";
import { RootState } from "../../store";

const { Content, Footer, Sider } = Layout;

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
				<Affix offsetTop={124}>
					<Sider theme="light" width={300} style={sidebarStyles}>
						Sider
					</Sider>
				</Affix>
			</Layout>
			<Footer style={{ textAlign: "center" }}>Reddthat (Reddit clone) Created by Tim Wilburn</Footer>
		</Layout>
	);
};

const appBodyStyles = {
	width: 960,
	margin: "60px auto 100px auto",
};
const sidebarStyles = {
	padding: 24,
	marginLeft: 40,
	height: "calc(80vh - 160px)",
};

export default Root;
