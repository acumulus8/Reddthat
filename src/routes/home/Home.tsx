import React from "react";
import { Layout } from "antd";
import { useStore } from "react-redux";
import { useAppDispatch, RootState } from "../../store";
import { getApiTokenForApp } from "../../features/authentication/auth-thunks";
import Post from "../../components/Post";
import SubredditCatMenu from "./components/SubbredditCatMenu";

const { Content } = Layout;

const Home: React.FC = () => {
	const dispatch = useAppDispatch();
	const store = useStore();
	const state = store.getState() as RootState;

	React.useEffect(() => {
		if (state.authentication.token === null) {
			dispatch(getApiTokenForApp());
		}
	});

	return (
		<div>
			<SubredditCatMenu />
			<Post />
		</div>
	);
};

export default Home;
