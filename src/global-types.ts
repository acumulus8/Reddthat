export type Kind = "Listing" | "more" | "t1" | "t2" | "t3" | "t4" | "t5";

export interface Thing {
	id: string;
	name: string;
	kind: Kind;
	data: string;
}

export type Listing = {
	kind: Kind;
	data: Thing[];
};

export interface Votable extends Thing {
	ups: number;
	downs: number;
	likes: boolean | null;
}

export interface Created extends Thing {
	created: Date;
}

export interface Link extends Thing, Votable, Created {
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
