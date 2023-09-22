import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Layout, message, Affix } from "antd";
import PageHeader from "../../components/PageHeader";
import SideBar from "../../components/SideBar";
import { RootState } from "../../store";
import { SCREEN_SIZE, APP_PADDING } from "../../lib/utils/constants";

const { Content, Footer } = Layout;

const Root = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const { authentication, listings } = useSelector((state: RootState) => state);

	const isMobile = window.innerWidth <= SCREEN_SIZE.TABLET;

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
			<Layout hasSider style={isMobile ? appBodyMobileStyles : appBodyStyles}>
				<Content>
					{isMobile && <SideBar />}
					{contextHolder}
					<Outlet />
				</Content>
				{!isMobile && (
					<Affix offsetTop={124}>
						<SideBar />
					</Affix>
				)}
			</Layout>
			<Footer style={footerStyles}>Reddthat (Reddit clone) Created by Tim Wilburn</Footer>
		</Layout>
	);
};

const appBodyStyles = {
	width: 960,
	margin: "60px auto 100px auto",
};
const appBodyMobileStyles = {
	width: "100%",
	padding: `0 ${APP_PADDING.MOBILE}px`,
};
const footerStyles: any = {
	textAlign: "center",
};

export default Root;
