import React from "react";
import { Layout, Button, Typography } from "antd";
import SubredditNavMenu, { tempSubreddits } from "./SubredditNavMenu";

const ReddthatLogo = require("./../assets/images/reddthat-Icon.png");

const { Header } = Layout;
const { Title } = Typography;

const styles = {
	containerLeft: { display: "flex", alignItems: "center", width: 500 },
	logo: { width: 60 },
};

const PageHeader: React.FC = () => {
	return (
		<>
			<Layout>
				<Header style={{ display: "flex", alignItems: "center", position: "sticky", top: 0, zIndex: 1 }}>
					<div style={styles.containerLeft}>
						<img src={ReddthatLogo} style={styles.logo} alt="Logo of the fictional Reddit clone 'Reddthat'" />
						<Title level={2}>Reddthat</Title>
						<SubredditNavMenu subreddits={tempSubreddits} />
					</div>
					<Button type="primary" style={{ marginLeft: "auto" }}>
						Log In
					</Button>
				</Header>
			</Layout>
		</>
	);
};

export default PageHeader;
