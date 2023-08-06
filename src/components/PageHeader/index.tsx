import React from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Typography } from "antd";
import SubredditNavMenu, { tempSubreddits } from "./SubredditNavMenu";

const ReddthatLogo = require("./../../assets/images/reddthat-Icon.png");

const { Header } = Layout;
const { Title } = Typography;

const styles = {
	containerLeft: { display: "flex", alignItems: "center" },
	logo: { width: 60 },
};

const PageHeader: React.FC = () => {
	return (
		<Header style={{ display: "flex", alignItems: "center", position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
			<div>
				<Link to="/" style={styles.containerLeft}>
					<img src={ReddthatLogo} style={styles.logo} alt="Logo of the fictional Reddit clone 'Reddthat'" />
					<Title level={2}>Reddthat</Title>
				</Link>
				{/* <SubredditNavMenu subreddits={tempSubreddits} /> */}
			</div>
			<Button type="primary" style={{ marginLeft: "auto" }}>
				Log In
			</Button>
		</Header>
	);
};

export default PageHeader;
