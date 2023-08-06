import React from "react";
import { Avatar, Typography, Divider, Col, Row, Space } from "antd";
import { UserOutlined, LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { Comment as CommentType } from "../../../features/comments/types";
import { getTimeDifference } from "../../../lib/utils";

const { Text } = Typography;

type CommentProps = {
	data: CommentType;
};

const Comment: React.FC<CommentProps> = ({ data }) => {
	const renderCommentReplies = () => {
		const replies = data?.replies?.data?.children;
		if (!replies || replies.length < 1) return null;

		const filteredReplies = replies.filter((reply) => reply?.data);

		return (
			<div style={{ margin: "20px 0" }}>
				{filteredReplies.map((reply, idx) => {
					if (!reply.data) return null;
					if (idx === filteredReplies.length - 1) return <div key={reply.data.id}>{""}</div>;
					// if (!reply.data) return null;
					return <Comment key={reply.data.id} data={reply.data as CommentType} />;
				})}
			</div>
		);
	};

	return (
		<Row style={{ width: "100%" }}>
			{/* Comment Sidebar*/}
			<Col span={1} style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
				<Avatar size={20} style={{ minHeight: 20 }} icon={<UserOutlined />} />
				<Divider type="vertical" style={{ height: "100%", margin: "8px 0 0 10px" }} />
			</Col>
			{/* Comment Body*/}
			<Col span={23}>
				{/* Body Header*/}
				<Row gutter={10}>
					<Col style={{ paddingLeft: 8 }}>
						<Text>{data.author}</Text>
					</Col>
					<Col>
						<Text type="secondary">{getTimeDifference(data.created)}</Text>
					</Col>
				</Row>
				{/* Body Content*/}
				<Row>
					<Text>{data.body}</Text>
				</Row>
				{/* Body Footer*/}
				<Row>
					<Space>
						<LikeOutlined />
						<Text>{data.ups}</Text>
						<DislikeOutlined />
					</Space>
				</Row>
				{/* Comment Replies*/}
				{renderCommentReplies()}
			</Col>
		</Row>
	);
};

export default Comment;
