import React from "react";
import { useStore } from "react-redux";
import { Outlet } from "react-router-dom";
import { Layout, message } from "antd";
import PageHeader from "../../components/PageHeader";
import { RootState } from "../../store";

const { Content, Footer } = Layout;

const Root = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const store = useStore();
	const state: RootState = store.getState() as RootState;

	React.useEffect(() => {
		if (state.authentication.errorMessage) {
			messageApi.open({ type: "error", content: state.authentication.errorMessage });
		}
	}, [state.authentication.errorMessage, messageApi]);

	return (
		<Layout hasSider={false}>
			<PageHeader />
			<Layout hasSider style={appBodyStyles}>
				<Content>
					{contextHolder}
					<Outlet />
				</Content>
				<Layout.Sider theme="light" width={300} style={sidebarStyles}>
					Sider
				</Layout.Sider>
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
};

export default Root;
