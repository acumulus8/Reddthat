import React from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Typography } from "antd";
import SubredditNavMenu, { tempSubreddits } from "./SubredditNavMenu";
import { APP_PADDING } from "../../lib/utils/constants";

const ReddthatLogo = require("./../../assets/images/reddthat-Icon.png");

const { Header } = Layout;
const { Title } = Typography;

const PageHeader: React.FC = () => {
	return (
		<Header style={styles.root}>
			<div>
				<Link to="/" style={styles.containerLeft}>
					<img src={ReddthatLogo} style={styles.logo} alt="Logo of the fictional Reddit clone 'Reddthat'" />
					<Title level={3} style={styles.appTitle}>
						Reddthat
					</Title>
				</Link>
				{/* <SubredditNavMenu subreddits={tempSubreddits} /> */}
			</div>
			<Button type="primary" style={{ marginLeft: "auto" }}>
				Log In
			</Button>
		</Header>
	);
};

const styles = {
	root: {
		display: "flex",
		alignItems: "center",
		position: "sticky",
		top: 0,
		zIndex: 1,
		width: "100%",
		paddingLeft: APP_PADDING.MOBILE,
		paddingRight: APP_PADDING.MOBILE,
	} as any,
	containerLeft: { display: "flex", alignItems: "center" },
	logo: { width: 50 },
	appTitle: { margin: "0 0 0 6px" },
};

export default PageHeader;
