import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Space } from "antd";
import { getCommentsForLink } from "../../features/comments/comments-thunks";
import { useAppDispatch, RootState } from "../../store";
import { Link as LinkType } from "../../global-types";
import Link from "../../components/Link";
import Comment from "./components/Comment";
import { Comment as CommentType } from "../../features/comments/types";
import ScrollToTop from "../../lib/hooks/useScrollToTop";

const LinkDetails: React.FC = () => {
	const { listings, comments } = useSelector((state: RootState) => state);
	const [selectedLink, setSelectedLink] = useState<LinkType>();
	const params = useParams();
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (params.id && listings.listing?.data.children) {
			const link = listings.listing.data.children.find((post) => (post.data ? post.data.id === params.id : false));
			if (link?.data) {
				const permaLink = link.data.permalink;
				setSelectedLink(link.data);
				dispatch(getCommentsForLink(permaLink));
			}
		} else {
			navigate("/");
		}
	}, [params.id, listings.listing, navigate, dispatch]);

	const renderComments = () => {
		if (comments.loading) {
			return <span>Loading...</span>;
		}
		if (comments.comments) {
			return comments.comments.data?.children?.map((comment) => {
				if (!comment.data) return null;
				return (
					<Space size={10}>
						<Comment key={comment.data.id} data={comment.data as CommentType} />
					</Space>
				);
			});
		}
		return <span>Nothing here</span>;
	};

	return (
		<>
			<ScrollToTop />
			<Link data={selectedLink} isDetailsPage />
			<Card>{renderComments()}</Card>
		</>
	);
};

export default LinkDetails;
