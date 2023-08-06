import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Card, Avatar, Space, Typography } from "antd";
import { LikeOutlined, DislikeOutlined, UserOutlined, CommentOutlined } from "@ant-design/icons";
import { Link as ListingData } from "../global-types";
import { uiColors } from "../styles/theme";
import { getTimeDifference } from "../lib/utils";

const { Paragraph, Text, Title } = Typography;

type PostProps = {
	data?: ListingData;
	isDetailsPage?: boolean;
};

const Post: React.FC<PostProps> = ({ data, isDetailsPage }) => {
	const navigate = useNavigate();

	if (!data) {
		return null;
	}

	const thumbnailDefaultSpan = 8;
	const textDefaultSpan = 16;
	const fullSpan = 24;
	const hasThumbnail = !!data.thumbnail && data.thumbnail !== "self";
	const hasSelfText = !!data.selftext;
	const bodyTextSpan = hasSelfText ? (hasThumbnail ? textDefaultSpan : fullSpan) : 0;
	const bodyThumbnailSpan = hasThumbnail ? (hasSelfText ? thumbnailDefaultSpan : fullSpan) : 0;

	const handleClick = () => {
		navigate(`/post/${data.id}`);
	};

	return (
		<Card style={postStyle}>
			<Row gutter={12}>
				{/* Post Sidebar*/}
				<Col span={2}>
					<Space direction="vertical" align="center">
						<LikeOutlined style={data.likes ? { color: uiColors.orange1 } : {}} />
						<Text style={{ fontSize: 12 }}>{data.ups}</Text>
						<DislikeOutlined style={data.likes === false ? { color: uiColors.orange1 } : {}} />
					</Space>
				</Col>
				{/* Post Body*/}
				<Col span={22}>
					<Space direction="vertical">
						{/*Body Header*/}
						<Row onClick={handleClick} style={{ cursor: "pointer" }}>
							<Space direction="vertical">
								<Space direction="horizontal" size="middle">
									<Space direction="horizontal" size={4}>
										<Avatar size={24} style={postAvatarStyle} icon={<UserOutlined />} />
										<Text>r/{data.subreddit}</Text>
									</Space>
									<Text type="secondary">posted by {data.author}</Text>
									<Text type="secondary">{getTimeDifference(data.created)}</Text>
								</Space>
								<Title level={5} style={{ marginTop: 0 }}>
									{data.title}
								</Title>
							</Space>
						</Row>

						{/* Body Content */}
						<Space direction="vertical" size={20}>
							<Row gutter={8} onClick={handleClick} style={{ cursor: "pointer" }}>
								{hasThumbnail && (
									<>
										<Col span={bodyTextSpan}>
											<Paragraph ellipsis={{ rows: 10, expandable: false }}>{data.selftext}</Paragraph>
										</Col>
										<Col span={bodyThumbnailSpan}>
											{" "}
											<img src={data.thumbnail} alt="thumbnail" />{" "}
										</Col>
									</>
								)}
							</Row>

							{/* Body Footer*/}
							<Row>
								<Space direction="horizontal" align="center">
									<CommentOutlined style={{ color: uiColors.gray3, fontSize: 22 }} />
									<Text type="secondary">{data.num_comments} Comments</Text>
								</Space>
							</Row>
						</Space>
					</Space>
				</Col>
			</Row>
		</Card>
	);
};

const postStyle = {
	minWidth: "100%",
	maxWidth: "100%",
};
const postAvatarStyle = {
	color: uiColors.blue1,
	backgroundColor: uiColors.blue5,
};

export default Post;
