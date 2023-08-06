import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Select, SelectProps } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { Subreddit } from "../../features/subreddits/types";
import { uiColors } from "../../styles/theme";

type SelectOption = Required<SelectProps>["options"][number];

function formatOptionItem(title: string | undefined, key: React.Key, type?: "group"): SelectOption {
	let img = document.createElement("img");
	img.width = 20;

	return {
		key,
		label: title,
		type,
		value: title,
	} as SelectOption;
}

export const tempSubreddits: Partial<Subreddit>[] = [
	{ title: "discgolf", header_img: "../assets/images/reddthat-icon.png", url: "2" },
	{ title: "reactjs", header_img: "../assets/images/reddthat-icon.png", url: "1" },
	{ title: "reading", header_img: "../assets/images/reddthat-icon.png", url: "3" },
	{ title: "socool", header_img: "../assets/images/reddthat-icon.png", url: "4" },
];

interface SubredditNavMenuProps {
	subreddits?: Partial<Subreddit>[];
}

const SubredditNavMenu: React.FC<Partial<SubredditNavMenuProps>> = ({ subreddits }) => {
	const [options, setOptions] = React.useState<SelectOption[]>([]);
	const navigate = useNavigate();
	const params = useParams();

	useEffect(() => {
		if (subreddits && !!subreddits.length) {
			setOptions([
				formatOptionItem("Home", "home"),
				...subreddits.map((subreddit) => formatOptionItem(subreddit.title, subreddit.title || "")),
			]);
		}
	}, [subreddits]);

	const onChange = (selectOptionValue: string) => {
		const currentParam = params.listingId;
		const newParam = selectOptionValue === "Home" ? "" : selectOptionValue;
		navigate(`/${newParam}`, { state: { from: currentParam } });
	};

	return (
		<>
			{options.length && (
				<Select
					options={options}
					suffixIcon={<CaretDownOutlined style={{ color: uiColors.orange1 }} />}
					style={selectStyles}
					defaultValue={"Home"}
					loading={!subreddits?.length}
					onChange={onChange}
				/>
			)}
		</>
	);
};

const selectStyles = {
	width: "100%",
};

export default SubredditNavMenu;
