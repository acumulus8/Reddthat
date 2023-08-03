// basic color variables from Figme design
export const uiColors = {
	blue1: "#1B95DC",
	blue2: "50ACE1",
	blue3: "#86C5EA",
	blue4: "#ADD9F2",
	blue5: "#CEE8F6",
	orange1: "#EF8911",
	orange2: "#F6A648",
	orange3: "#F8C589",
	orange4: "#F8D9B6",
	orange5: "#FFF3E4",
	red1: "#EF3911",
	red2: "#F07054",
	red3: "#F19986",
	red4: "#F6BEB2",
	red5: "#F6DCD7",
	gray1: "#4D4842",
	gray2: "#888075",
	gray3: "#B8B2AA",
	gray4: "#DBD5CC",
	gray5: "#ECE9E5",
	white1: "#FCFCFC",
	white2: "#F0F4F6",
};

export const theme = {
	token: {
		colorPrimary: uiColors.blue1,
		colorText: uiColors.gray1,
		borderRadius: 4,
	},
	components: {
		Layout: {
			colorBgHeader: uiColors.white1,
			colorBgBody: uiColors.white2,
			outerHeight: "100%",
		},
		Button: {
			colorPrimary: uiColors.orange1,
			colorSecondary: uiColors.blue1,
			colorDanger: uiColors.red1,
			colorDisabled: uiColors.gray3,
			colorText: uiColors.orange5,
			colorTextSecondary: uiColors.blue5,
			colorTextDisabled: uiColors.gray4,
			colorTextDanger: uiColors.white1,
		},
		Select: {
			colorBgContainer: uiColors.orange5,
			colorBgElevated: uiColors.orange5,
			colorBorder: uiColors.orange4,
			colorIcon: uiColors.orange1,
			colorText: uiColors.orange1,
		},
		Menu: {
			horizontalItemSelectedColor: uiColors.orange1,
		},
	},
};
