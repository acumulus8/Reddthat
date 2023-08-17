import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Typography, Button, Space, Divider } from "antd";
import { RootState } from "../../store";

const { Title, Paragraph } = Typography;

const SubredditSideBar: React.FC = () => {
	const { authentication } = useSelector((state: RootState) => state);
	return (
		<Space direction="vertical" size={30} style={styles.root}>
			<Row gutter={10} align="top">
				<img
					src="https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png"
					alt="SideBar planets header"
					style={styles.headerImg as Object}
				/>
				<Col span={5}>
					<img
						src="https://www.redditstatic.com/desktop2x/img/id-cards/snoo-home@2x.png"
						style={styles.img}
						alt="Home page sidebar of the reddit mascot."
					/>
				</Col>
				<Col span={19}>
					<Title level={2}>Home</Title>
				</Col>
			</Row>
			<Row>
				<Paragraph style={styles.margin0}>
					Log In to make this your personal Reddthat frontpage! Come here to check in with your favorite communities.
				</Paragraph>
			</Row>
			<Divider style={styles.margin0} />
			{!authentication.viewer && (
				<Row justify="center" gutter={[0, 30]}>
					<Button type="default">Log in to Reddit!</Button>
				</Row>
			)}
		</Space>
	);
};

const styles = {
	root: {
		marginTop: 8,
	},
	headerImg: {
		height: 40,
		position: "absolute",
		top: 0,
		left: 0,
		maxWidth: "100%",
	},
	img: {
		maxWidth: 40,
	},
	margin0: {
		margin: 0,
	},
};

export default SubredditSideBar;
