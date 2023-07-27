import React from "react";
import { Menu, MenuProps } from "antd";

const tempSubreddits: MenuProps["items"] = ["reactjs", "discgolf", "reading", "socool"].map((subreddit) => {
	return {
		key: subreddit,
		title: `nav ${subreddit}`,
	};
});

type PageNavigationProps = {
	subreddits?: MenuProps["items"];
};

const PageNavigation: React.FC<PageNavigationProps> = ({ subreddits = tempSubreddits }) => {
	return <Menu mode="horizontal" theme="dark" defaultSelectedKeys={["2"]} items={subreddits} />;
};

export default PageNavigation;
