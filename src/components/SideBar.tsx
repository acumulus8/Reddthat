import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Layout, Affix } from "antd";

const { Sider } = Layout;

const sidebarStyles = {
	padding: 24,
	marginLeft: 40,
	height: "calc(80vh - 160px)",
};

const SideBar: React.FC = () => {
	const { subreddits } = useSelector((state: RootState) => state);

	useEffect(() => {}, [subreddits.about]);

	return (
		<Affix offsetTop={124}>
			<Sider theme="light" width={300} style={sidebarStyles}>
				{subreddits.about?.data && (
					<>
						<img src={subreddits.about.data.header_img || ""} alt="subreddit icon" />
						<h2>{subreddits.about.data.display_name_prefixed}</h2>
						<p>{subreddits.about.data.public_description}</p>
					</>
				)}
			</Sider>
		</Affix>
	);
};

export default SideBar;
