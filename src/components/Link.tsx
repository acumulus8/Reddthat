import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Card, Avatar, Space, Typography } from "antd";
import { LikeOutlined, DislikeOutlined, UserOutlined, CommentOutlined } from "@ant-design/icons";
import { Link as ListingData } from "../global-types";
import { uiColors } from "../styles/theme";
import { getTimeDifference } from "../lib/utils";
import { SCREEN_SIZE } from "../lib/utils/constants";

const { Paragraph, Text, Title } = Typography;

type PostProps = {
	data?: ListingData;
	isDetailsPage?: boolean;
};

const Post: React.FC<PostProps> = ({ data, isDetailsPage }) => {
	const navigate = useNavigate();
	const isMobile = window.innerWidth <= SCREEN_SIZE.TABLET;

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
	const hasVideo = !!data.is_video && data.media?.reddit_video;

	const handleClick = () => {
		if (isDetailsPage) return;
		navigate(`/post/${data.id}`);
	};

	const likeDislikeContent = (
		<Space direction={isMobile ? "horizontal" : "vertical"} style={isMobile ? { opacity: 0.8 } : {}} align="center">
			<LikeOutlined style={data.likes ? { color: uiColors.orange1 } : {}} />
			<Text style={{ fontSize: 12 }}>{data.ups}</Text>
			<DislikeOutlined style={data.likes === false ? { color: uiColors.orange1 } : {}} />
		</Space>
	);
	// be contientious of adjusting things based on isMobile - it is used to determine whether or not to render certain elements as well as the gutter, spacing, and positioning of elements - be sure sibling elements are aware of the changes to gutter and spacing
	return (
		<Card style={isMobile ? postMobileStyle : postStyle}>
			<Row gutter={isMobile ? 8 : 12}>
				{/* Post Sidebar*/}
				{!isMobile && <Col span={2}>{likeDislikeContent}</Col>}
				{/* Post Body*/}
				<Col span={isMobile ? 24 : 22}>
					<Space direction="vertical">
						{/*Body Header*/}
						<Row onClick={handleClick} style={{ cursor: "pointer" }}>
							<Space direction="vertical">
								<Space direction="horizontal" size="middle">
									<Space direction="horizontal" size={4}>
										<Avatar size={24} style={postAvatarStyle} icon={<UserOutlined />} />
										<Text>r/{data.subreddit}</Text>
									</Space>
									{!isMobile && <Text type="secondary">{data.author}</Text>}
									<Text type="secondary">
										{getTimeDifference(data.created)}
										{!isMobile && " ago"}
									</Text>
								</Space>
								<Title level={5} style={{ marginTop: 0 }}>
									{data.title}
								</Title>
							</Space>
						</Row>

						{/* Body Content */}
						<Space direction="vertical" size={20}>
							<Row gutter={8} onClick={handleClick} style={{ cursor: "pointer" }}>
								<Col span={bodyTextSpan}>
									<Paragraph ellipsis={{ rows: 10, expandable: false }}>{data.selftext}</Paragraph>
								</Col>
								{hasThumbnail && !isDetailsPage ? (
									<Col span={bodyThumbnailSpan}>
										{" "}
										<img src={data.thumbnail} alt="thumbnail" />{" "}
									</Col>
								) : hasVideo ? (
									<Col span={bodyThumbnailSpan}>
										{" "}
										<video autoPlay src={data.media?.reddit_video?.fallback_url} controls />{" "}
									</Col>
								) : isDetailsPage && data.url ? (
									<img src={data.url} style={{ maxWidth: "80%", border: "1px solid lightGray" }} alt="thumbnail" />
								) : null}
							</Row>

							{/* Body Footer*/}
							<Row gutter={isMobile ? 24 : 0}>
								<Col>{isMobile && likeDislikeContent}</Col>
								<Col>
									<Space direction="horizontal" align="center">
										<CommentOutlined style={{ color: uiColors.gray3, fontSize: 22 }} />
										<Text type="secondary">{data.num_comments} Comments</Text>
									</Space>
								</Col>
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
const postMobileStyle = {
	// minWidth: "96%",
	// maxWidth: "96%",
	// margin: "0 auto",
};
const postAvatarStyle = {
	color: uiColors.blue1,
	backgroundColor: uiColors.blue5,
};

export default Post;
