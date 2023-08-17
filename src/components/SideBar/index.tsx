import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Layout, Affix } from "antd";
import SubredditSideBar from "./SubredditSideBar";
import DefaultSideBar from "./DefaultSidebar";

const { Sider } = Layout;

type SideBarType = "subreddit" | "user" | "default";

const SideBar: React.FC = () => {
	const [sideBarType, setSideBarType] = React.useState<SideBarType>("subreddit");
	const { subreddits } = useSelector((state: RootState) => state);

	useEffect(() => {
		if (subreddits.about?.data) {
			setSideBarType("subreddit");
		} else {
			setSideBarType("default");
		}
	}, [subreddits.about]);

	const SideBarComponent =
		sideBarType === "subreddit" && subreddits.about?.data ? (
			<SubredditSideBar data={subreddits.about?.data} />
		) : sideBarType === "user" ? null : sideBarType === "default" ? (
			<DefaultSideBar />
		) : null;

	return (
		<Affix offsetTop={124}>
			<Sider theme="light" width={300} style={styles.root}>
				{SideBarComponent}
			</Sider>
		</Affix>
	);
};

const styles = {
	root: {
		padding: 24,
		marginLeft: 30,
		height: "calc(80vh - 160px)",
	},
};

export default SideBar;
