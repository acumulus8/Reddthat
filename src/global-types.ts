import { Comment } from "./features/comments/types";

export type Kind = "Listing" | "more" | "t1" | "t2" | "t3" | "t4" | "t5";
export type Scopes =
	| "identity"
	| "edit"
	| "flair"
	| "history"
	| "modconfig"
	| "modflair"
	| "modlog"
	| "modposts"
	| "modwiki"
	| "mysubreddits"
	| "privatemessages"
	| "read"
	| "report"
	| "save"
	| "submit"
	| "subscribe"
	| "vote"
	| "wikiedit"
	| "wikiread";

export interface Thing<DataType> {
	id: string;
	name: string;
	kind: Kind;
	data?: DataType;
}

export type ListingData<ChildrenDataType> = {
	after: string | null;
	before: string | null;
	children?: Thing<ChildrenDataType>[];
	dist: number;
	modhash: string;
};

export type Listing<ListingDataType> = {
	kind: Kind;
	data: ListingData<ListingDataType>;
};

export interface Votable extends Thing<Link> {
	ups: number;
	downs: number;
	likes: boolean | null;
}
export interface CommentVotable extends Thing<Comment> {
	ups: number;
	downs: number;
	likes: boolean | null;
}

export interface Created extends Thing<Link> {
	created: number;
}
export interface CommentCreated extends Thing<Comment> {
	created: number;
}

export interface Link extends Votable, Created {
	author: string;
	author_flair_css_class: string | null;
	author_flair_text: string | null;
	clicked: boolean;
	domain: string;
	hidden: boolean;
	is_self: boolean;
	likes: boolean | null;
	link_flair_css_class: string | null;
	link_flair_text: string | null;
	locked: boolean;
	media: Object | null;
	media_embed: Object | null;
	num_comments: number;
	over_18: boolean;
	permalink: string;
	saved: boolean;
	score: number;
	selftext: string;
	selftext_html: string | null;
	subreddit: string;
	subreddit_id: string;
	thumbnail: string;
	title: string;
	url: string;
	edited: boolean | Date;
	distinguished: string | null;
	stickied: boolean;
}
