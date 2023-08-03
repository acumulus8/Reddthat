import React from "react";
import { Col, Row, Card, Avatar, Space, Typography } from "antd";
import { LikeOutlined, DislikeOutlined, UserOutlined, CommentOutlined } from "@ant-design/icons";
import { uiColors } from "../styles/theme";

const { Paragraph, Text, Title } = Typography;

const Post: React.FC = () => {
	return (
		<Card style={postStyle}>
			<Row gutter={12}>
				<Col span={2} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
					<LikeOutlined style={likeDislikeStyle} />
					{3}
					<DislikeOutlined style={likeDislikeStyle} />
				</Col>
				<Col span={22}>
					<Space direction="vertical">
						{/*Post Header*/}
						<Row>
							<Space direction="vertical">
								<Space direction="horizontal" size="middle">
									<Space direction="horizontal" size={4}>
										<Avatar size={24} style={postAvatarStyle} icon={<UserOutlined />} />
										<Text>r/subreddit</Text>
									</Space>
									<Text type="secondary">posted by username</Text>
									<Text type="secondary">1 hour ago</Text>
								</Space>
								<Title level={5} style={{ marginTop: 0 }}>
									Post Title
								</Title>
							</Space>
						</Row>
						{/* Post Body*/}
						<Row>
							{/* <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "more" }}> */}
							<Paragraph>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Aliquam eleifend mi in nulla posuere.
								Sed egestas egestas fringilla phasellus faucibus scelerisque. Neque sodales ut etiam sit amet nisl purus in mollis.
								Eget mauris pharetra et ultrices. Purus gravida quis blandit turpis cursus in. Risus viverra adipiscing at in tellus.
								Nec ultrices dui sapien eget mi. Felis eget nunc lobortis mattis aliquam faucibus purus in massa.
							</Paragraph>
						</Row>

						{/* Post Footer*/}
						<Row>
							<Space direction="horizontal" align="center">
								<CommentOutlined style={{ color: uiColors.gray3, fontSize: 22 }} />
								<Text type="secondary">250 Comments</Text>
							</Space>
						</Row>
					</Space>
				</Col>
			</Row>
		</Card>
	);
};

const postStyle = {
	maxWidth: "100%",
};
const postAvatarStyle = {
	color: uiColors.blue1,
	backgroundColor: uiColors.blue5,
};

const likeDislikeStyle = {
	margin: "3px 0",
};

export default Post;
