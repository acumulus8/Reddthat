import React from "react";
import { Skeleton, Card, Space } from "antd";

const ListingSkeleton = () => {
	return (
		<Space direction="vertical" size={12} style={{ width: "100%" }}>
			<Card>
				<Skeleton avatar active paragraph={{ rows: 3 }} />
			</Card>
			<Card>
				<Skeleton avatar active paragraph={{ rows: 4 }} />
			</Card>
			<Card>
				<Skeleton avatar active paragraph={{ rows: 3 }} />
			</Card>
			<Card>
				<Skeleton avatar active paragraph={{ rows: 5 }} />
			</Card>
			<Card>
				<Skeleton avatar active paragraph={{ rows: 5 }} />
			</Card>
		</Space>
	);
};

export default ListingSkeleton;
