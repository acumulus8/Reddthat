import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Layout } from "antd";
import SubredditSideBar from "./SubredditSideBar";
import DefaultSideBar from "./DefaultSidebar";
import SideBarSkeleton from "../Skeletons/SideBarSkeleton";
import { SCREEN_SIZE } from "../../lib/utils/constants";

const { Sider } = Layout;

type SideBarType = "subreddit" | "user" | "default";

const SideBar: React.FC = () => {
	const [sideBarType, setSideBarType] = React.useState<SideBarType>("subreddit");
	const { subreddits } = useSelector((state: RootState) => state);
	const isMobile = window.innerWidth <= SCREEN_SIZE.TABLET;

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
		<Sider theme="light" width={isMobile ? "100%" : 300} style={isMobile ? styles.mobileRoot : styles.root}>
			{subreddits.loading ? <SideBarSkeleton /> : SideBarComponent}
		</Sider>
	);
};

const styles = {
	root: {
		padding: 24,
		marginLeft: 30,
		height: "calc(80vh - 160px)",
	},
	mobileRoot: {
		padding: 24,
		margin: "12px 0 20px 0",
	},
};

export default SideBar;
