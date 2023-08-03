import React, { useState } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { RocketOutlined, FireOutlined, RiseOutlined, EyeOutlined, UpOutlined } from "@ant-design/icons";

const SubredditCatMenu: React.FC = () => {
	const [current, setCurrent] = useState("mail");

	const onClick: MenuProps["onClick"] = (e) => {
		setCurrent(e.key);
	};
	return <Menu mode="horizontal" style={menuStyle} onClick={onClick} selectedKeys={[current]} items={tempItems} />;
};

const menuStyle = {
	marginBottom: 20,
};

const tempItems: MenuProps["items"] = [
	{
		label: "Best",
		key: "best",
		icon: <RocketOutlined />,
	},
	{
		label: "Hot",
		key: "hot",
		icon: <FireOutlined />,
	},
	{
		label: "Rising",
		key: "rising",
		icon: <RiseOutlined />,
	},
	{
		label: "New",
		key: "new",
		icon: <EyeOutlined />,
	},
	{
		label: "Top",
		key: "top",
		icon: <UpOutlined />,
	},
];

export default SubredditCatMenu;
