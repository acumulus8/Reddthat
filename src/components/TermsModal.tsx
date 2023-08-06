import React from "react";
import { Modal, Typography, Button } from "antd";
import { uiColors } from "../styles/theme";
const { Title, Paragraph } = Typography;

const TermsModal = () => {
	const [isVisible, setIsVisible] = React.useState(true);

	const handleOk = () => {
		localStorage.setItem("accepts_terms", "true");
		setIsVisible(false);
	};

	return (
		<Modal
			title="Slight Disclaimer..."
			open={isVisible}
			onOk={handleOk}
			onCancel={() => window.location.replace("https://timwilburn.com/portfolio")}
			footer={[
				<Button key="disagree" type="primary" danger onClick={() => window.location.replace("https://timwilburn.com/portfolio")}>
					Get me out of here!
				</Button>,
				<Button key="agree" type="primary" onClick={handleOk}>
					Ok Cool!
				</Button>,
			]}
		>
			<Title level={3}>Thanks for checking out my project! </Title>
			<Paragraph>I just wanted to let you know that this is a project I made for fun, and is not affiliated with Reddit in any way.</Paragraph>
			<Paragraph>
				Even though this site does not show any NSFW content on the Home page, it is possible that you may see some NSFW content if you click
				on a link that shows comments with words or opinions that may bother you. (Only moderators control what comments are allowed on a
				subreddit.)
			</Paragraph>
		</Modal>
	);
};

export default TermsModal;
