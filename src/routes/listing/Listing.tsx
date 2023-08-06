import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { Space } from "antd";
import { useSelector } from "react-redux";
import { useAppDispatch, RootState } from "../../store";
import { getApiTokenForApp } from "../../features/authentication/auth-thunks";
import { getListing } from "../../features/listings/listings-thunks";
import Link from "../../components/Link";
import ListingCatMenu from "./components/ListingCatMenu";
import { Link as LinkType, Listing as ListingType } from "../../global-types";

interface ListingProps extends Partial<ListingType<LinkType>> {}

const Listing: React.FC<ListingProps> = () => {
	const dispatch = useAppDispatch();
	const { listings, authentication } = useSelector((state: RootState) => state);
	const params = useParams();
	const location = useLocation();

	React.useEffect(() => {
		if (authentication.token === null) {
			dispatch(getApiTokenForApp());
		} else {
			const from = location.state && location.state.from;
			if ((from && !from.includes(params.listingType)) || !from) {
				dispatch(getListing(params.listingType));
			}
		}
	}, [authentication.token, dispatch, params.listingType, location.state]);
	// React.useEffect(() => {
	// 	const from = location.state && location.state.from;
	// 	if ((from && !from.includes(params.listingType)) || !from) {
	// 		dispatch(getListing(params.listingType));
	// 	}
	// }, [params, dispatch, location.state]);

	const renderListing = () => {
		if (listings.loading) {
			return <span>Loading...</span>;
		}
		if (listings.listing) {
			return listings.listing.data?.children?.map((post) => {
				if (!post.data || post.data.over_18) return null;
				return <Link key={post.data.id} data={post.data} />;
			});
		}
		return <span>ListingSkeleton here</span>;
	};

	return (
		<>
			<ListingCatMenu />
			{/* {listings.listing?.before && (	
				<button onClick={() => dispatch(getListing(params.listingType, listings.listing?.before))}>Previous</button>
			)} */}
			<Space direction="vertical" size={10} style={{ width: "100%" }}>
				{renderListing()}
				{/* {!listings.loading && listings.listing && listings.listing.data && listings.listing.data.children?.length ? (
					listings.listing.data.children.map((post) => {
						if (!post.data || post.data.over_18) return null;
						return <Link key={post.data.id} data={post.data} />;
					})
				) : (
					<span>Nothing HERE@</span>
				)} */}
			</Space>
		</>
	);
};

export default Listing;
