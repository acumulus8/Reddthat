export type SubredditType = "public" | "private" | "restricted" | "gold_restricted" | "archived";
export type SubmissionType = "any" | "link" | "self";

export interface Subreddit {
	accounts_active: number;
	comment_score_hide_mins: number;
	description: string;
	description_html: string;
	display_name: string;
	display_name_prefixed: string;
	header_img: string | null;
	header_size: number[] | null;
	header_title: string | null;
	over18: boolean;
	public_description?: string;
	public_traffic: boolean;
	subscribers: number;
	submission_type: SubmissionType;
	submit_link_label?: string;
	submit_text_label?: string;
	subreddit_type: SubredditType;
	title: string;
	url: string;
	user_is_banned: boolean;
	user_is_contributor: boolean;
	user_is_moderator: boolean;
	user_is_subscriber: boolean;
	primary_color: string;
	created_utc: number;
	icon_img: string;
}
