import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { RocketOutlined, FireOutlined, RiseOutlined, EyeOutlined, UpOutlined } from "@ant-design/icons";

const ListingCatMenu: React.FC = () => {
	const [current, setCurrent] = useState("mail");
	const navigate = useNavigate();
	const location = useLocation();

	const onClick: MenuProps["onClick"] = (e) => {
		setCurrent(e.key);
		navigate(`/${e.key}`, { state: { from: location.pathname } });
	};
	return <Menu mode="horizontal" style={menuStyle} onClick={onClick} selectedKeys={[current]} items={tempItems} />;
};

const menuStyle = {
	marginBottom: 20,
};
const iconStyle = {
	fontSize: 22,
};

const categories = ["best", "hot", "rising", "new", "top"];

const tempItems: MenuProps["items"] = [
	{
		label: categories[0].slice(0, 1).toUpperCase() + categories[0].slice(1),
		key: categories[0],
		icon: <RocketOutlined style={iconStyle} />,
	},
	{
		label: categories[1].slice(0, 1).toUpperCase() + categories[1].slice(1),
		key: categories[1],
		icon: <FireOutlined style={iconStyle} />,
	},
	{
		label: categories[2].slice(0, 1).toUpperCase() + categories[2].slice(1),
		key: categories[2],
		icon: <RiseOutlined style={iconStyle} />,
	},
	{
		label: categories[3].slice(0, 1).toUpperCase() + categories[3].slice(1),
		key: categories[3],
		icon: <EyeOutlined style={iconStyle} />,
	},
	{
		label: categories[4].slice(0, 1).toUpperCase() + categories[4].slice(1),
		key: categories[4],
		icon: <UpOutlined style={iconStyle} />,
	},
];

export default ListingCatMenu;
