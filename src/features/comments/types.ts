import { Created, Thing, Votable, Listing } from "../../global-types";

export interface Comment extends Thing, Votable, Created {
	approved_by: string | null;
	author: string;
	author_flair_css_class: string | null;
	author_flair_text: string | null;
	banned_by: string | null;
	body: string;
	body_html: string;
	edited: boolean | Date;
	gilded: number;
	likes: boolean | null;
	link_author: string;
	link_id: string;
	link_title: string;
	link_url: string;
	num_reports: number | null;
	parent_id: string;
	replies: Listing;
	saved: boolean;
	score: number;
	score_hidden: boolean;
	subreddit: string;
	subreddit_id: string;
	distinguished: string | null;
}
