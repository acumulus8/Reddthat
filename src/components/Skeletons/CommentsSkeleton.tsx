import React from "react";
import { Skeleton } from "antd";

const styles = {
	indent1: { marginLeft: 20 },
	indent2: { marginLeft: 45 },
	indent3: { marginLeft: 60 },
};

const SideBarSkeleton = () => {
	return (
		<>
			<Skeleton avatar active paragraph={{ rows: 3 }} />
			<Skeleton style={styles.indent1} avatar active paragraph={{ rows: 3 }} />
			<Skeleton style={styles.indent2} avatar active paragraph={{ rows: 3 }} />
			<Skeleton style={styles.indent3} avatar active paragraph={{ rows: 3 }} />
			<Skeleton avatar active paragraph={{ rows: 3 }} />
		</>
	);
};

export default SideBarSkeleton;
