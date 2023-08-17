import React from "react";
import { Space, Typography, Row, Col, Button, Divider } from "antd";
import { TagOutlined } from "@ant-design/icons";
import { Subreddit } from "../../features/subreddits/types";
import { convertUTCToFormattedDate } from "../../lib/utils";

const { Title, Text, Paragraph } = Typography;

type SubredditSideBarProps = {
	data: Subreddit;
};

const SubredditSideBar: React.FC<SubredditSideBarProps> = ({ data }) => {
	return (
		<div>
			{data && (
				<Space direction="vertical" size={16}>
					{data.primary_color && <div style={styles.header(data.primary_color)} />}
					{data.header_img && <img src={data.header_img || ""} alt="subreddit header background" aria-label="ignore" />}
					<Row gutter={8} align="middle">
						{data.icon_img && (
							<Col span={5}>
								<img src={data.icon_img || ""} alt="subreddit icon" style={styles.iconImg} />
							</Col>
						)}
						<Col span={19}>
							<Title level={3} style={styles.margin0}>
								{data.display_name_prefixed}
							</Title>
						</Col>
					</Row>
					<Paragraph style={styles.margin0}>{data.public_description}</Paragraph>
					<Row gutter={10}>
						<Col>
							<TagOutlined />
						</Col>
						<Col>
							<Text type="secondary">Created {convertUTCToFormattedDate(data.created_utc)}</Text>
						</Col>
					</Row>
					<Divider style={styles.margin0} />
					<Row gutter={16}>
						<Col span={8} style={styles.statColumn as Object}>
							<Text strong>{data.subscribers}</Text>
							<Text type="secondary">Posts</Text>
						</Col>
						<Col span={8} style={styles.statColumn as Object}>
							<Text strong>{data.subscribers}</Text>
							<Text type="secondary">Members</Text>
						</Col>
						<Col span={8} style={styles.statColumn as Object}>
							<Text strong>{data.accounts_active}</Text>
							<Text type="secondary">Ranked by size</Text>
						</Col>
					</Row>
					{data.user_is_subscriber === null ? (
						<Row justify="center" gutter={[0, 30]}>
							<Button type="default">Login to comment</Button>
						</Row>
					) : data.user_is_subscriber === false ? (
						<Row justify="center">
							<Button type="dashed">Join</Button>
						</Row>
					) : (
						<Row justify="center">
							<Button type="dashed">Comment</Button>
						</Row>
					)}
				</Space>
			)}
		</div>
	);
};

const styles = {
	header: (primary_color: string): Object => ({
		minWidth: "100%",
		height: 20,
		backgroundColor: primary_color,
		position: "absolute",
		top: 0,
		left: 0,
		borderRadius: "4px 4px 0 0",
	}),
	margin0: { margin: 0 },
	statColumn: { display: "flex", flexDirection: "column" },
	iconImg: { maxWidth: "100%" },
};

export default SubredditSideBar;
