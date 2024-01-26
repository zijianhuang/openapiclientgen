import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Access_tokensElement {
		access_token?: string | null;
		account_id?: number | null;
		expires_on_date?: number | null;
		scope?: Array<string>;
	}
	export interface Access_tokensElementFormProperties {
		access_token: FormControl<string | null | undefined>,
		account_id: FormControl<number | null | undefined>,
		expires_on_date: FormControl<number | null | undefined>,
	}
	export function CreateAccess_tokensElementFormGroup() {
		return new FormGroup<Access_tokensElementFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			account_id: new FormControl<number | null | undefined>(undefined),
			expires_on_date: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Account_mergeElement {
		merge_date?: number | null;
		new_account_id?: number | null;
		old_account_id?: number | null;
	}
	export interface Account_mergeElementFormProperties {
		merge_date: FormControl<number | null | undefined>,
		new_account_id: FormControl<number | null | undefined>,
		old_account_id: FormControl<number | null | undefined>,
	}
	export function CreateAccount_mergeElementFormGroup() {
		return new FormGroup<Account_mergeElementFormProperties>({
			merge_date: new FormControl<number | null | undefined>(undefined),
			new_account_id: new FormControl<number | null | undefined>(undefined),
			old_account_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AnswersElement {
		accepted?: boolean | null;
		answer_id?: number | null;
		awarded_bounty_amount?: number | null;
		awarded_bounty_users?: Array<string>;
		body?: string | null;
		body_markdown?: string | null;
		can_flag?: boolean | null;
		comment_count?: number | null;
		comments?: Array<string>;
		community_owned_date?: number | null;
		creation_date?: number | null;
		down_vote_count?: number | null;
		downvoted?: boolean | null;
		is_accepted?: boolean | null;
		last_activity_date?: number | null;
		last_edit_date?: number | null;
		last_editor?: AnswersElementLast_editor;
		link?: string | null;
		locked_date?: number | null;
		owner?: AnswersElementOwner;
		question_id?: number | null;
		score?: number | null;
		share_link?: string | null;
		tags?: Array<string>;
		title?: string | null;
		up_vote_count?: number | null;
		upvoted?: boolean | null;
	}
	export interface AnswersElementFormProperties {
		accepted: FormControl<boolean | null | undefined>,
		answer_id: FormControl<number | null | undefined>,
		awarded_bounty_amount: FormControl<number | null | undefined>,
		body: FormControl<string | null | undefined>,
		body_markdown: FormControl<string | null | undefined>,
		can_flag: FormControl<boolean | null | undefined>,
		comment_count: FormControl<number | null | undefined>,
		community_owned_date: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		down_vote_count: FormControl<number | null | undefined>,
		downvoted: FormControl<boolean | null | undefined>,
		is_accepted: FormControl<boolean | null | undefined>,
		last_activity_date: FormControl<number | null | undefined>,
		last_edit_date: FormControl<number | null | undefined>,
		link: FormControl<string | null | undefined>,
		locked_date: FormControl<number | null | undefined>,
		question_id: FormControl<number | null | undefined>,
		score: FormControl<number | null | undefined>,
		share_link: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		up_vote_count: FormControl<number | null | undefined>,
		upvoted: FormControl<boolean | null | undefined>,
	}
	export function CreateAnswersElementFormGroup() {
		return new FormGroup<AnswersElementFormProperties>({
			accepted: new FormControl<boolean | null | undefined>(undefined),
			answer_id: new FormControl<number | null | undefined>(undefined),
			awarded_bounty_amount: new FormControl<number | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			body_markdown: new FormControl<string | null | undefined>(undefined),
			can_flag: new FormControl<boolean | null | undefined>(undefined),
			comment_count: new FormControl<number | null | undefined>(undefined),
			community_owned_date: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			down_vote_count: new FormControl<number | null | undefined>(undefined),
			downvoted: new FormControl<boolean | null | undefined>(undefined),
			is_accepted: new FormControl<boolean | null | undefined>(undefined),
			last_activity_date: new FormControl<number | null | undefined>(undefined),
			last_edit_date: new FormControl<number | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			locked_date: new FormControl<number | null | undefined>(undefined),
			question_id: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			share_link: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			up_vote_count: new FormControl<number | null | undefined>(undefined),
			upvoted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AnswersElementLast_editor {
		accept_rate?: number | null;
		badge_counts?: AnswersElementLast_editorBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface AnswersElementLast_editorFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateAnswersElementLast_editorFormGroup() {
		return new FormGroup<AnswersElementLast_editorFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnswersElementLast_editorBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface AnswersElementLast_editorBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateAnswersElementLast_editorBadge_countsFormGroup() {
		return new FormGroup<AnswersElementLast_editorBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AnswersElementOwner {
		accept_rate?: number | null;
		badge_counts?: AnswersElementOwnerBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface AnswersElementOwnerFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateAnswersElementOwnerFormGroup() {
		return new FormGroup<AnswersElementOwnerFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnswersElementOwnerBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface AnswersElementOwnerBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateAnswersElementOwnerBadge_countsFormGroup() {
		return new FormGroup<AnswersElementOwnerBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BadgesElement {
		award_count?: number | null;
		badge_id?: number | null;
		badge_type?: string | null;
		description?: string | null;
		link?: string | null;
		name?: string | null;
		rank?: string | null;
		user?: BadgesElementUser;
	}
	export interface BadgesElementFormProperties {
		award_count: FormControl<number | null | undefined>,
		badge_id: FormControl<number | null | undefined>,
		badge_type: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		rank: FormControl<string | null | undefined>,
	}
	export function CreateBadgesElementFormGroup() {
		return new FormGroup<BadgesElementFormProperties>({
			award_count: new FormControl<number | null | undefined>(undefined),
			badge_id: new FormControl<number | null | undefined>(undefined),
			badge_type: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BadgesElementUser {
		accept_rate?: number | null;
		badge_counts?: BadgesElementUserBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface BadgesElementUserFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateBadgesElementUserFormGroup() {
		return new FormGroup<BadgesElementUserFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BadgesElementUserBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface BadgesElementUserBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateBadgesElementUserBadge_countsFormGroup() {
		return new FormGroup<BadgesElementUserBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CommentsElement {
		body?: string | null;
		body_markdown?: string | null;
		can_flag?: boolean | null;
		comment_id?: number | null;
		creation_date?: number | null;
		edited?: boolean | null;
		link?: string | null;
		owner?: CommentsElementOwner;
		post_id?: number | null;
		post_type?: string | null;
		reply_to_user?: CommentsElementReply_to_user;
		score?: number | null;
		upvoted?: boolean | null;
	}
	export interface CommentsElementFormProperties {
		body: FormControl<string | null | undefined>,
		body_markdown: FormControl<string | null | undefined>,
		can_flag: FormControl<boolean | null | undefined>,
		comment_id: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		edited: FormControl<boolean | null | undefined>,
		link: FormControl<string | null | undefined>,
		post_id: FormControl<number | null | undefined>,
		post_type: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
		upvoted: FormControl<boolean | null | undefined>,
	}
	export function CreateCommentsElementFormGroup() {
		return new FormGroup<CommentsElementFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			body_markdown: new FormControl<string | null | undefined>(undefined),
			can_flag: new FormControl<boolean | null | undefined>(undefined),
			comment_id: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			edited: new FormControl<boolean | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
			post_type: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			upvoted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CommentsElementOwner {
		accept_rate?: number | null;
		badge_counts?: CommentsElementOwnerBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface CommentsElementOwnerFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateCommentsElementOwnerFormGroup() {
		return new FormGroup<CommentsElementOwnerFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentsElementOwnerBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface CommentsElementOwnerBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateCommentsElementOwnerBadge_countsFormGroup() {
		return new FormGroup<CommentsElementOwnerBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CommentsElementReply_to_user {
		accept_rate?: number | null;
		badge_counts?: CommentsElementReply_to_userBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface CommentsElementReply_to_userFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateCommentsElementReply_to_userFormGroup() {
		return new FormGroup<CommentsElementReply_to_userFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentsElementReply_to_userBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface CommentsElementReply_to_userBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateCommentsElementReply_to_userBadge_countsFormGroup() {
		return new FormGroup<CommentsElementReply_to_userBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Created_comment {
		body?: string | null;
		body_markdown?: string | null;
		can_flag?: boolean | null;
		comment_id?: number | null;
		creation_date?: number | null;
		edited?: boolean | null;
		link?: string | null;
		owner?: Created_commentOwner;
		post_id?: number | null;
		post_type?: string | null;
		reply_to_user?: Created_commentReply_to_user;
		score?: number | null;
		upvoted?: boolean | null;
	}
	export interface Created_commentFormProperties {
		body: FormControl<string | null | undefined>,
		body_markdown: FormControl<string | null | undefined>,
		can_flag: FormControl<boolean | null | undefined>,
		comment_id: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		edited: FormControl<boolean | null | undefined>,
		link: FormControl<string | null | undefined>,
		post_id: FormControl<number | null | undefined>,
		post_type: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
		upvoted: FormControl<boolean | null | undefined>,
	}
	export function CreateCreated_commentFormGroup() {
		return new FormGroup<Created_commentFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			body_markdown: new FormControl<string | null | undefined>(undefined),
			can_flag: new FormControl<boolean | null | undefined>(undefined),
			comment_id: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			edited: new FormControl<boolean | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
			post_type: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			upvoted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Created_commentOwner {
		accept_rate?: number | null;
		badge_counts?: Created_commentOwnerBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface Created_commentOwnerFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateCreated_commentOwnerFormGroup() {
		return new FormGroup<Created_commentOwnerFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Created_commentOwnerBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface Created_commentOwnerBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateCreated_commentOwnerBadge_countsFormGroup() {
		return new FormGroup<Created_commentOwnerBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Created_commentReply_to_user {
		accept_rate?: number | null;
		badge_counts?: Created_commentReply_to_userBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface Created_commentReply_to_userFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateCreated_commentReply_to_userFormGroup() {
		return new FormGroup<Created_commentReply_to_userFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Created_commentReply_to_userBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface Created_commentReply_to_userBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateCreated_commentReply_to_userBadge_countsFormGroup() {
		return new FormGroup<Created_commentReply_to_userBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Error {
		error_id?: number | null;
		error_message?: string | null;
		error_name?: string | null;
	}
	export interface ErrorFormProperties {
		error_id: FormControl<number | null | undefined>,
		error_message: FormControl<string | null | undefined>,
		error_name: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			error_id: new FormControl<number | null | undefined>(undefined),
			error_message: new FormControl<string | null | undefined>(undefined),
			error_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ErrorsElement {
		description?: string | null;
		error_id?: number | null;
		error_name?: string | null;
	}
	export interface ErrorsElementFormProperties {
		description: FormControl<string | null | undefined>,
		error_id: FormControl<number | null | undefined>,
		error_name: FormControl<string | null | undefined>,
	}
	export function CreateErrorsElementFormGroup() {
		return new FormGroup<ErrorsElementFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			error_id: new FormControl<number | null | undefined>(undefined),
			error_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventsElement {
		creation_date?: number | null;
		event_type?: string | null;
		excerpt?: string | null;
		link?: string | null;
		'the id of the object (answer, comment, question, or user) the event describes'?: number | null;
	}
	export interface EventsElementFormProperties {
		creation_date: FormControl<number | null | undefined>,
		event_type: FormControl<string | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		'the id of the object (answer, comment, question, or user) the event describes': FormControl<number | null | undefined>,
	}
	export function CreateEventsElementFormGroup() {
		return new FormGroup<EventsElementFormProperties>({
			creation_date: new FormControl<number | null | undefined>(undefined),
			event_type: new FormControl<string | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			'the id of the object (answer, comment, question, or user) the event describes': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FiltersElement {
		filter?: string | null;
		filter_type?: string | null;
		included_fields?: Array<string>;
	}
	export interface FiltersElementFormProperties {
		filter: FormControl<string | null | undefined>,
		filter_type: FormControl<string | null | undefined>,
	}
	export function CreateFiltersElementFormGroup() {
		return new FormGroup<FiltersElementFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			filter_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Inbox_itemsElement {
		answer_id?: number | null;
		body?: string | null;
		comment_id?: number | null;
		creation_date?: number | null;
		is_unread?: boolean | null;
		item_type?: string | null;
		link?: string | null;
		question_id?: number | null;
		site?: Inbox_itemsElementSite;
		title?: string | null;
	}
	export interface Inbox_itemsElementFormProperties {
		answer_id: FormControl<number | null | undefined>,
		body: FormControl<string | null | undefined>,
		comment_id: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		is_unread: FormControl<boolean | null | undefined>,
		item_type: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		question_id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateInbox_itemsElementFormGroup() {
		return new FormGroup<Inbox_itemsElementFormProperties>({
			answer_id: new FormControl<number | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			comment_id: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			is_unread: new FormControl<boolean | null | undefined>(undefined),
			item_type: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			question_id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Inbox_itemsElementSite {
		aliases?: Array<string>;
		api_site_parameter?: string | null;
		audience?: string | null;
		closed_beta_date?: number | null;
		favicon_url?: string | null;
		high_resolution_icon_url?: string | null;
		icon_url?: string | null;
		launch_date?: number | null;
		logo_url?: string | null;
		markdown_extensions?: Array<string>;
		name?: string | null;
		open_beta_date?: number | null;
		related_sites?: Array<string>;
		site_state?: string | null;
		site_type?: string | null;
		site_url?: string | null;
		styling?: Inbox_itemsElementSiteStyling;
		twitter_account?: string | null;
	}
	export interface Inbox_itemsElementSiteFormProperties {
		api_site_parameter: FormControl<string | null | undefined>,
		audience: FormControl<string | null | undefined>,
		closed_beta_date: FormControl<number | null | undefined>,
		favicon_url: FormControl<string | null | undefined>,
		high_resolution_icon_url: FormControl<string | null | undefined>,
		icon_url: FormControl<string | null | undefined>,
		launch_date: FormControl<number | null | undefined>,
		logo_url: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		open_beta_date: FormControl<number | null | undefined>,
		site_state: FormControl<string | null | undefined>,
		site_type: FormControl<string | null | undefined>,
		site_url: FormControl<string | null | undefined>,
		twitter_account: FormControl<string | null | undefined>,
	}
	export function CreateInbox_itemsElementSiteFormGroup() {
		return new FormGroup<Inbox_itemsElementSiteFormProperties>({
			api_site_parameter: new FormControl<string | null | undefined>(undefined),
			audience: new FormControl<string | null | undefined>(undefined),
			closed_beta_date: new FormControl<number | null | undefined>(undefined),
			favicon_url: new FormControl<string | null | undefined>(undefined),
			high_resolution_icon_url: new FormControl<string | null | undefined>(undefined),
			icon_url: new FormControl<string | null | undefined>(undefined),
			launch_date: new FormControl<number | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			open_beta_date: new FormControl<number | null | undefined>(undefined),
			site_state: new FormControl<string | null | undefined>(undefined),
			site_type: new FormControl<string | null | undefined>(undefined),
			site_url: new FormControl<string | null | undefined>(undefined),
			twitter_account: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Inbox_itemsElementSiteStyling {
		link_color?: string | null;
		tag_background_color?: string | null;
		tag_foreground_color?: string | null;
	}
	export interface Inbox_itemsElementSiteStylingFormProperties {
		link_color: FormControl<string | null | undefined>,
		tag_background_color: FormControl<string | null | undefined>,
		tag_foreground_color: FormControl<string | null | undefined>,
	}
	export function CreateInbox_itemsElementSiteStylingFormGroup() {
		return new FormGroup<Inbox_itemsElementSiteStylingFormProperties>({
			link_color: new FormControl<string | null | undefined>(undefined),
			tag_background_color: new FormControl<string | null | undefined>(undefined),
			tag_foreground_color: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Info_object {
		answers_per_minute?: number | null;
		api_revision?: string | null;
		badges_per_minute?: number | null;
		new_active_users?: number | null;
		questions_per_minute?: number | null;
		site?: Info_objectSite;
		total_accepted?: number | null;
		total_answers?: number | null;
		total_badges?: number | null;
		total_comments?: number | null;
		total_questions?: number | null;
		total_unanswered?: number | null;
		total_users?: number | null;
		total_votes?: number | null;
	}
	export interface Info_objectFormProperties {
		answers_per_minute: FormControl<number | null | undefined>,
		api_revision: FormControl<string | null | undefined>,
		badges_per_minute: FormControl<number | null | undefined>,
		new_active_users: FormControl<number | null | undefined>,
		questions_per_minute: FormControl<number | null | undefined>,
		total_accepted: FormControl<number | null | undefined>,
		total_answers: FormControl<number | null | undefined>,
		total_badges: FormControl<number | null | undefined>,
		total_comments: FormControl<number | null | undefined>,
		total_questions: FormControl<number | null | undefined>,
		total_unanswered: FormControl<number | null | undefined>,
		total_users: FormControl<number | null | undefined>,
		total_votes: FormControl<number | null | undefined>,
	}
	export function CreateInfo_objectFormGroup() {
		return new FormGroup<Info_objectFormProperties>({
			answers_per_minute: new FormControl<number | null | undefined>(undefined),
			api_revision: new FormControl<string | null | undefined>(undefined),
			badges_per_minute: new FormControl<number | null | undefined>(undefined),
			new_active_users: new FormControl<number | null | undefined>(undefined),
			questions_per_minute: new FormControl<number | null | undefined>(undefined),
			total_accepted: new FormControl<number | null | undefined>(undefined),
			total_answers: new FormControl<number | null | undefined>(undefined),
			total_badges: new FormControl<number | null | undefined>(undefined),
			total_comments: new FormControl<number | null | undefined>(undefined),
			total_questions: new FormControl<number | null | undefined>(undefined),
			total_unanswered: new FormControl<number | null | undefined>(undefined),
			total_users: new FormControl<number | null | undefined>(undefined),
			total_votes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Info_objectSite {
		aliases?: Array<string>;
		api_site_parameter?: string | null;
		audience?: string | null;
		closed_beta_date?: number | null;
		favicon_url?: string | null;
		high_resolution_icon_url?: string | null;
		icon_url?: string | null;
		launch_date?: number | null;
		logo_url?: string | null;
		markdown_extensions?: Array<string>;
		name?: string | null;
		open_beta_date?: number | null;
		related_sites?: Array<string>;
		site_state?: string | null;
		site_type?: string | null;
		site_url?: string | null;
		styling?: Info_objectSiteStyling;
		twitter_account?: string | null;
	}
	export interface Info_objectSiteFormProperties {
		api_site_parameter: FormControl<string | null | undefined>,
		audience: FormControl<string | null | undefined>,
		closed_beta_date: FormControl<number | null | undefined>,
		favicon_url: FormControl<string | null | undefined>,
		high_resolution_icon_url: FormControl<string | null | undefined>,
		icon_url: FormControl<string | null | undefined>,
		launch_date: FormControl<number | null | undefined>,
		logo_url: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		open_beta_date: FormControl<number | null | undefined>,
		site_state: FormControl<string | null | undefined>,
		site_type: FormControl<string | null | undefined>,
		site_url: FormControl<string | null | undefined>,
		twitter_account: FormControl<string | null | undefined>,
	}
	export function CreateInfo_objectSiteFormGroup() {
		return new FormGroup<Info_objectSiteFormProperties>({
			api_site_parameter: new FormControl<string | null | undefined>(undefined),
			audience: new FormControl<string | null | undefined>(undefined),
			closed_beta_date: new FormControl<number | null | undefined>(undefined),
			favicon_url: new FormControl<string | null | undefined>(undefined),
			high_resolution_icon_url: new FormControl<string | null | undefined>(undefined),
			icon_url: new FormControl<string | null | undefined>(undefined),
			launch_date: new FormControl<number | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			open_beta_date: new FormControl<number | null | undefined>(undefined),
			site_state: new FormControl<string | null | undefined>(undefined),
			site_type: new FormControl<string | null | undefined>(undefined),
			site_url: new FormControl<string | null | undefined>(undefined),
			twitter_account: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Info_objectSiteStyling {
		link_color?: string | null;
		tag_background_color?: string | null;
		tag_foreground_color?: string | null;
	}
	export interface Info_objectSiteStylingFormProperties {
		link_color: FormControl<string | null | undefined>,
		tag_background_color: FormControl<string | null | undefined>,
		tag_foreground_color: FormControl<string | null | undefined>,
	}
	export function CreateInfo_objectSiteStylingFormGroup() {
		return new FormGroup<Info_objectSiteStylingFormProperties>({
			link_color: new FormControl<string | null | undefined>(undefined),
			tag_background_color: new FormControl<string | null | undefined>(undefined),
			tag_foreground_color: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Network_usersElement {
		account_id?: number | null;
		answer_count?: number | null;
		badge_counts?: Network_usersElementBadge_counts;
		creation_date?: number | null;
		last_access_date?: number | null;
		question_count?: number | null;
		reputation?: number | null;
		site_name?: string | null;
		site_url?: string | null;
		top_answers?: Array<string>;
		top_questions?: Array<string>;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface Network_usersElementFormProperties {
		account_id: FormControl<number | null | undefined>,
		answer_count: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		last_access_date: FormControl<number | null | undefined>,
		question_count: FormControl<number | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		site_name: FormControl<string | null | undefined>,
		site_url: FormControl<string | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateNetwork_usersElementFormGroup() {
		return new FormGroup<Network_usersElementFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined),
			answer_count: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			last_access_date: new FormControl<number | null | undefined>(undefined),
			question_count: new FormControl<number | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			site_name: new FormControl<string | null | undefined>(undefined),
			site_url: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Network_usersElementBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface Network_usersElementBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateNetwork_usersElementBadge_countsFormGroup() {
		return new FormGroup<Network_usersElementBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NotificationsElement {
		body?: string | null;
		creation_date?: number | null;
		is_unread?: boolean | null;
		notification_type?: string | null;
		post_id?: number | null;
		site?: NotificationsElementSite;
	}
	export interface NotificationsElementFormProperties {
		body: FormControl<string | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		is_unread: FormControl<boolean | null | undefined>,
		notification_type: FormControl<string | null | undefined>,
		post_id: FormControl<number | null | undefined>,
	}
	export function CreateNotificationsElementFormGroup() {
		return new FormGroup<NotificationsElementFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			is_unread: new FormControl<boolean | null | undefined>(undefined),
			notification_type: new FormControl<string | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NotificationsElementSite {
		aliases?: Array<string>;
		api_site_parameter?: string | null;
		audience?: string | null;
		closed_beta_date?: number | null;
		favicon_url?: string | null;
		high_resolution_icon_url?: string | null;
		icon_url?: string | null;
		launch_date?: number | null;
		logo_url?: string | null;
		markdown_extensions?: Array<string>;
		name?: string | null;
		open_beta_date?: number | null;
		related_sites?: Array<string>;
		site_state?: string | null;
		site_type?: string | null;
		site_url?: string | null;
		styling?: NotificationsElementSiteStyling;
		twitter_account?: string | null;
	}
	export interface NotificationsElementSiteFormProperties {
		api_site_parameter: FormControl<string | null | undefined>,
		audience: FormControl<string | null | undefined>,
		closed_beta_date: FormControl<number | null | undefined>,
		favicon_url: FormControl<string | null | undefined>,
		high_resolution_icon_url: FormControl<string | null | undefined>,
		icon_url: FormControl<string | null | undefined>,
		launch_date: FormControl<number | null | undefined>,
		logo_url: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		open_beta_date: FormControl<number | null | undefined>,
		site_state: FormControl<string | null | undefined>,
		site_type: FormControl<string | null | undefined>,
		site_url: FormControl<string | null | undefined>,
		twitter_account: FormControl<string | null | undefined>,
	}
	export function CreateNotificationsElementSiteFormGroup() {
		return new FormGroup<NotificationsElementSiteFormProperties>({
			api_site_parameter: new FormControl<string | null | undefined>(undefined),
			audience: new FormControl<string | null | undefined>(undefined),
			closed_beta_date: new FormControl<number | null | undefined>(undefined),
			favicon_url: new FormControl<string | null | undefined>(undefined),
			high_resolution_icon_url: new FormControl<string | null | undefined>(undefined),
			icon_url: new FormControl<string | null | undefined>(undefined),
			launch_date: new FormControl<number | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			open_beta_date: new FormControl<number | null | undefined>(undefined),
			site_state: new FormControl<string | null | undefined>(undefined),
			site_type: new FormControl<string | null | undefined>(undefined),
			site_url: new FormControl<string | null | undefined>(undefined),
			twitter_account: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotificationsElementSiteStyling {
		link_color?: string | null;
		tag_background_color?: string | null;
		tag_foreground_color?: string | null;
	}
	export interface NotificationsElementSiteStylingFormProperties {
		link_color: FormControl<string | null | undefined>,
		tag_background_color: FormControl<string | null | undefined>,
		tag_foreground_color: FormControl<string | null | undefined>,
	}
	export function CreateNotificationsElementSiteStylingFormGroup() {
		return new FormGroup<NotificationsElementSiteStylingFormProperties>({
			link_color: new FormControl<string | null | undefined>(undefined),
			tag_background_color: new FormControl<string | null | undefined>(undefined),
			tag_foreground_color: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostsElement {
		body?: string | null;
		body_markdown?: string | null;
		comment_count?: number | null;
		comments?: Array<string>;
		creation_date?: number | null;
		down_vote_count?: number | null;
		downvoted?: boolean | null;
		last_activity_date?: number | null;
		last_edit_date?: number | null;
		last_editor?: PostsElementLast_editor;
		link?: string | null;
		owner?: PostsElementOwner;
		post_id?: number | null;
		post_type?: string | null;
		score?: number | null;
		share_link?: string | null;
		title?: string | null;
		up_vote_count?: number | null;
		upvoted?: boolean | null;
	}
	export interface PostsElementFormProperties {
		body: FormControl<string | null | undefined>,
		body_markdown: FormControl<string | null | undefined>,
		comment_count: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		down_vote_count: FormControl<number | null | undefined>,
		downvoted: FormControl<boolean | null | undefined>,
		last_activity_date: FormControl<number | null | undefined>,
		last_edit_date: FormControl<number | null | undefined>,
		link: FormControl<string | null | undefined>,
		post_id: FormControl<number | null | undefined>,
		post_type: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
		share_link: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		up_vote_count: FormControl<number | null | undefined>,
		upvoted: FormControl<boolean | null | undefined>,
	}
	export function CreatePostsElementFormGroup() {
		return new FormGroup<PostsElementFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			body_markdown: new FormControl<string | null | undefined>(undefined),
			comment_count: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			down_vote_count: new FormControl<number | null | undefined>(undefined),
			downvoted: new FormControl<boolean | null | undefined>(undefined),
			last_activity_date: new FormControl<number | null | undefined>(undefined),
			last_edit_date: new FormControl<number | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
			post_type: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			share_link: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			up_vote_count: new FormControl<number | null | undefined>(undefined),
			upvoted: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PostsElementLast_editor {
		accept_rate?: number | null;
		badge_counts?: PostsElementLast_editorBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface PostsElementLast_editorFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreatePostsElementLast_editorFormGroup() {
		return new FormGroup<PostsElementLast_editorFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostsElementLast_editorBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface PostsElementLast_editorBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreatePostsElementLast_editorBadge_countsFormGroup() {
		return new FormGroup<PostsElementLast_editorBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PostsElementOwner {
		accept_rate?: number | null;
		badge_counts?: PostsElementOwnerBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface PostsElementOwnerFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreatePostsElementOwnerFormGroup() {
		return new FormGroup<PostsElementOwnerFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostsElementOwnerBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface PostsElementOwnerBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreatePostsElementOwnerBadge_countsFormGroup() {
		return new FormGroup<PostsElementOwnerBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PrivilegesElement {
		description?: string | null;
		reputation?: number | null;
		short_description?: string | null;
	}
	export interface PrivilegesElementFormProperties {
		description: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		short_description: FormControl<string | null | undefined>,
	}
	export function CreatePrivilegesElementFormGroup() {
		return new FormGroup<PrivilegesElementFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			short_description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Question_timeline_eventsElement {
		comment_id?: number | null;
		creation_date?: number | null;
		down_vote_count?: number | null;
		owner?: Question_timeline_eventsElementOwner;
		post_id?: number | null;
		question_id?: number | null;
		revision_guid?: string | null;
		timeline_type?: string | null;
		up_vote_count?: number | null;
		user?: Question_timeline_eventsElementUser;
	}
	export interface Question_timeline_eventsElementFormProperties {
		comment_id: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		down_vote_count: FormControl<number | null | undefined>,
		post_id: FormControl<number | null | undefined>,
		question_id: FormControl<number | null | undefined>,
		revision_guid: FormControl<string | null | undefined>,
		timeline_type: FormControl<string | null | undefined>,
		up_vote_count: FormControl<number | null | undefined>,
	}
	export function CreateQuestion_timeline_eventsElementFormGroup() {
		return new FormGroup<Question_timeline_eventsElementFormProperties>({
			comment_id: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			down_vote_count: new FormControl<number | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
			question_id: new FormControl<number | null | undefined>(undefined),
			revision_guid: new FormControl<string | null | undefined>(undefined),
			timeline_type: new FormControl<string | null | undefined>(undefined),
			up_vote_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Question_timeline_eventsElementOwner {
		accept_rate?: number | null;
		badge_counts?: Question_timeline_eventsElementOwnerBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface Question_timeline_eventsElementOwnerFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateQuestion_timeline_eventsElementOwnerFormGroup() {
		return new FormGroup<Question_timeline_eventsElementOwnerFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Question_timeline_eventsElementOwnerBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface Question_timeline_eventsElementOwnerBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateQuestion_timeline_eventsElementOwnerBadge_countsFormGroup() {
		return new FormGroup<Question_timeline_eventsElementOwnerBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Question_timeline_eventsElementUser {
		accept_rate?: number | null;
		badge_counts?: Question_timeline_eventsElementUserBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface Question_timeline_eventsElementUserFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateQuestion_timeline_eventsElementUserFormGroup() {
		return new FormGroup<Question_timeline_eventsElementUserFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Question_timeline_eventsElementUserBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface Question_timeline_eventsElementUserBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateQuestion_timeline_eventsElementUserBadge_countsFormGroup() {
		return new FormGroup<Question_timeline_eventsElementUserBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuestionsElement {
		accepted_answer_id?: number | null;
		answer_count?: number | null;
		answers?: Array<string>;
		body?: string | null;
		body_markdown?: string | null;
		bounty_amount?: number | null;
		bounty_closes_date?: number | null;
		bounty_user?: QuestionsElementBounty_user;
		can_close?: boolean | null;
		can_flag?: boolean | null;
		close_vote_count?: number | null;
		closed_date?: number | null;
		closed_details?: QuestionsElementClosed_details;
		closed_reason?: string | null;
		comment_count?: number | null;
		comments?: Array<string>;
		community_owned_date?: number | null;
		creation_date?: number | null;
		delete_vote_count?: number | null;
		down_vote_count?: number | null;
		downvoted?: boolean | null;
		favorite_count?: number | null;
		favorited?: boolean | null;
		is_answered?: boolean | null;
		last_activity_date?: number | null;
		last_edit_date?: number | null;
		last_editor?: QuestionsElementLast_editor;
		link?: string | null;
		locked_date?: number | null;
		migrated_from?: QuestionsElementMigrated_from;
		migrated_to?: QuestionsElementMigrated_to;
		notice?: QuestionsElementNotice;
		owner?: QuestionsElementOwner;
		protected_date?: number | null;
		question_id?: number | null;
		reopen_vote_count?: number | null;
		score?: number | null;
		share_link?: string | null;
		tags?: Array<string>;
		title?: string | null;
		up_vote_count?: number | null;
		upvoted?: boolean | null;
		view_count?: number | null;
	}
	export interface QuestionsElementFormProperties {
		accepted_answer_id: FormControl<number | null | undefined>,
		answer_count: FormControl<number | null | undefined>,
		body: FormControl<string | null | undefined>,
		body_markdown: FormControl<string | null | undefined>,
		bounty_amount: FormControl<number | null | undefined>,
		bounty_closes_date: FormControl<number | null | undefined>,
		can_close: FormControl<boolean | null | undefined>,
		can_flag: FormControl<boolean | null | undefined>,
		close_vote_count: FormControl<number | null | undefined>,
		closed_date: FormControl<number | null | undefined>,
		closed_reason: FormControl<string | null | undefined>,
		comment_count: FormControl<number | null | undefined>,
		community_owned_date: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		delete_vote_count: FormControl<number | null | undefined>,
		down_vote_count: FormControl<number | null | undefined>,
		downvoted: FormControl<boolean | null | undefined>,
		favorite_count: FormControl<number | null | undefined>,
		favorited: FormControl<boolean | null | undefined>,
		is_answered: FormControl<boolean | null | undefined>,
		last_activity_date: FormControl<number | null | undefined>,
		last_edit_date: FormControl<number | null | undefined>,
		link: FormControl<string | null | undefined>,
		locked_date: FormControl<number | null | undefined>,
		protected_date: FormControl<number | null | undefined>,
		question_id: FormControl<number | null | undefined>,
		reopen_vote_count: FormControl<number | null | undefined>,
		score: FormControl<number | null | undefined>,
		share_link: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		up_vote_count: FormControl<number | null | undefined>,
		upvoted: FormControl<boolean | null | undefined>,
		view_count: FormControl<number | null | undefined>,
	}
	export function CreateQuestionsElementFormGroup() {
		return new FormGroup<QuestionsElementFormProperties>({
			accepted_answer_id: new FormControl<number | null | undefined>(undefined),
			answer_count: new FormControl<number | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			body_markdown: new FormControl<string | null | undefined>(undefined),
			bounty_amount: new FormControl<number | null | undefined>(undefined),
			bounty_closes_date: new FormControl<number | null | undefined>(undefined),
			can_close: new FormControl<boolean | null | undefined>(undefined),
			can_flag: new FormControl<boolean | null | undefined>(undefined),
			close_vote_count: new FormControl<number | null | undefined>(undefined),
			closed_date: new FormControl<number | null | undefined>(undefined),
			closed_reason: new FormControl<string | null | undefined>(undefined),
			comment_count: new FormControl<number | null | undefined>(undefined),
			community_owned_date: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			delete_vote_count: new FormControl<number | null | undefined>(undefined),
			down_vote_count: new FormControl<number | null | undefined>(undefined),
			downvoted: new FormControl<boolean | null | undefined>(undefined),
			favorite_count: new FormControl<number | null | undefined>(undefined),
			favorited: new FormControl<boolean | null | undefined>(undefined),
			is_answered: new FormControl<boolean | null | undefined>(undefined),
			last_activity_date: new FormControl<number | null | undefined>(undefined),
			last_edit_date: new FormControl<number | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			locked_date: new FormControl<number | null | undefined>(undefined),
			protected_date: new FormControl<number | null | undefined>(undefined),
			question_id: new FormControl<number | null | undefined>(undefined),
			reopen_vote_count: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			share_link: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			up_vote_count: new FormControl<number | null | undefined>(undefined),
			upvoted: new FormControl<boolean | null | undefined>(undefined),
			view_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementBounty_user {
		accept_rate?: number | null;
		badge_counts?: QuestionsElementBounty_userBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface QuestionsElementBounty_userFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateQuestionsElementBounty_userFormGroup() {
		return new FormGroup<QuestionsElementBounty_userFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementBounty_userBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface QuestionsElementBounty_userBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateQuestionsElementBounty_userBadge_countsFormGroup() {
		return new FormGroup<QuestionsElementBounty_userBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementClosed_details {
		by_users?: Array<string>;
		description?: string | null;
		on_hold?: boolean | null;
		original_questions?: Array<string>;
		reason?: string | null;
	}
	export interface QuestionsElementClosed_detailsFormProperties {
		description: FormControl<string | null | undefined>,
		on_hold: FormControl<boolean | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateQuestionsElementClosed_detailsFormGroup() {
		return new FormGroup<QuestionsElementClosed_detailsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			on_hold: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementLast_editor {
		accept_rate?: number | null;
		badge_counts?: QuestionsElementLast_editorBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface QuestionsElementLast_editorFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateQuestionsElementLast_editorFormGroup() {
		return new FormGroup<QuestionsElementLast_editorFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementLast_editorBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface QuestionsElementLast_editorBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateQuestionsElementLast_editorBadge_countsFormGroup() {
		return new FormGroup<QuestionsElementLast_editorBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementMigrated_from {
		on_date?: number | null;
		other_site?: QuestionsElementMigrated_fromOther_site;
		question_id?: number | null;
	}
	export interface QuestionsElementMigrated_fromFormProperties {
		on_date: FormControl<number | null | undefined>,
		question_id: FormControl<number | null | undefined>,
	}
	export function CreateQuestionsElementMigrated_fromFormGroup() {
		return new FormGroup<QuestionsElementMigrated_fromFormProperties>({
			on_date: new FormControl<number | null | undefined>(undefined),
			question_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementMigrated_fromOther_site {
		aliases?: Array<string>;
		api_site_parameter?: string | null;
		audience?: string | null;
		closed_beta_date?: number | null;
		favicon_url?: string | null;
		high_resolution_icon_url?: string | null;
		icon_url?: string | null;
		launch_date?: number | null;
		logo_url?: string | null;
		markdown_extensions?: Array<string>;
		name?: string | null;
		open_beta_date?: number | null;
		related_sites?: Array<string>;
		site_state?: string | null;
		site_type?: string | null;
		site_url?: string | null;
		styling?: QuestionsElementMigrated_fromOther_siteStyling;
		twitter_account?: string | null;
	}
	export interface QuestionsElementMigrated_fromOther_siteFormProperties {
		api_site_parameter: FormControl<string | null | undefined>,
		audience: FormControl<string | null | undefined>,
		closed_beta_date: FormControl<number | null | undefined>,
		favicon_url: FormControl<string | null | undefined>,
		high_resolution_icon_url: FormControl<string | null | undefined>,
		icon_url: FormControl<string | null | undefined>,
		launch_date: FormControl<number | null | undefined>,
		logo_url: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		open_beta_date: FormControl<number | null | undefined>,
		site_state: FormControl<string | null | undefined>,
		site_type: FormControl<string | null | undefined>,
		site_url: FormControl<string | null | undefined>,
		twitter_account: FormControl<string | null | undefined>,
	}
	export function CreateQuestionsElementMigrated_fromOther_siteFormGroup() {
		return new FormGroup<QuestionsElementMigrated_fromOther_siteFormProperties>({
			api_site_parameter: new FormControl<string | null | undefined>(undefined),
			audience: new FormControl<string | null | undefined>(undefined),
			closed_beta_date: new FormControl<number | null | undefined>(undefined),
			favicon_url: new FormControl<string | null | undefined>(undefined),
			high_resolution_icon_url: new FormControl<string | null | undefined>(undefined),
			icon_url: new FormControl<string | null | undefined>(undefined),
			launch_date: new FormControl<number | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			open_beta_date: new FormControl<number | null | undefined>(undefined),
			site_state: new FormControl<string | null | undefined>(undefined),
			site_type: new FormControl<string | null | undefined>(undefined),
			site_url: new FormControl<string | null | undefined>(undefined),
			twitter_account: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementMigrated_fromOther_siteStyling {
		link_color?: string | null;
		tag_background_color?: string | null;
		tag_foreground_color?: string | null;
	}
	export interface QuestionsElementMigrated_fromOther_siteStylingFormProperties {
		link_color: FormControl<string | null | undefined>,
		tag_background_color: FormControl<string | null | undefined>,
		tag_foreground_color: FormControl<string | null | undefined>,
	}
	export function CreateQuestionsElementMigrated_fromOther_siteStylingFormGroup() {
		return new FormGroup<QuestionsElementMigrated_fromOther_siteStylingFormProperties>({
			link_color: new FormControl<string | null | undefined>(undefined),
			tag_background_color: new FormControl<string | null | undefined>(undefined),
			tag_foreground_color: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementMigrated_to {
		on_date?: number | null;
		other_site?: QuestionsElementMigrated_toOther_site;
		question_id?: number | null;
	}
	export interface QuestionsElementMigrated_toFormProperties {
		on_date: FormControl<number | null | undefined>,
		question_id: FormControl<number | null | undefined>,
	}
	export function CreateQuestionsElementMigrated_toFormGroup() {
		return new FormGroup<QuestionsElementMigrated_toFormProperties>({
			on_date: new FormControl<number | null | undefined>(undefined),
			question_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementMigrated_toOther_site {
		aliases?: Array<string>;
		api_site_parameter?: string | null;
		audience?: string | null;
		closed_beta_date?: number | null;
		favicon_url?: string | null;
		high_resolution_icon_url?: string | null;
		icon_url?: string | null;
		launch_date?: number | null;
		logo_url?: string | null;
		markdown_extensions?: Array<string>;
		name?: string | null;
		open_beta_date?: number | null;
		related_sites?: Array<string>;
		site_state?: string | null;
		site_type?: string | null;
		site_url?: string | null;
		styling?: QuestionsElementMigrated_toOther_siteStyling;
		twitter_account?: string | null;
	}
	export interface QuestionsElementMigrated_toOther_siteFormProperties {
		api_site_parameter: FormControl<string | null | undefined>,
		audience: FormControl<string | null | undefined>,
		closed_beta_date: FormControl<number | null | undefined>,
		favicon_url: FormControl<string | null | undefined>,
		high_resolution_icon_url: FormControl<string | null | undefined>,
		icon_url: FormControl<string | null | undefined>,
		launch_date: FormControl<number | null | undefined>,
		logo_url: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		open_beta_date: FormControl<number | null | undefined>,
		site_state: FormControl<string | null | undefined>,
		site_type: FormControl<string | null | undefined>,
		site_url: FormControl<string | null | undefined>,
		twitter_account: FormControl<string | null | undefined>,
	}
	export function CreateQuestionsElementMigrated_toOther_siteFormGroup() {
		return new FormGroup<QuestionsElementMigrated_toOther_siteFormProperties>({
			api_site_parameter: new FormControl<string | null | undefined>(undefined),
			audience: new FormControl<string | null | undefined>(undefined),
			closed_beta_date: new FormControl<number | null | undefined>(undefined),
			favicon_url: new FormControl<string | null | undefined>(undefined),
			high_resolution_icon_url: new FormControl<string | null | undefined>(undefined),
			icon_url: new FormControl<string | null | undefined>(undefined),
			launch_date: new FormControl<number | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			open_beta_date: new FormControl<number | null | undefined>(undefined),
			site_state: new FormControl<string | null | undefined>(undefined),
			site_type: new FormControl<string | null | undefined>(undefined),
			site_url: new FormControl<string | null | undefined>(undefined),
			twitter_account: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementMigrated_toOther_siteStyling {
		link_color?: string | null;
		tag_background_color?: string | null;
		tag_foreground_color?: string | null;
	}
	export interface QuestionsElementMigrated_toOther_siteStylingFormProperties {
		link_color: FormControl<string | null | undefined>,
		tag_background_color: FormControl<string | null | undefined>,
		tag_foreground_color: FormControl<string | null | undefined>,
	}
	export function CreateQuestionsElementMigrated_toOther_siteStylingFormGroup() {
		return new FormGroup<QuestionsElementMigrated_toOther_siteStylingFormProperties>({
			link_color: new FormControl<string | null | undefined>(undefined),
			tag_background_color: new FormControl<string | null | undefined>(undefined),
			tag_foreground_color: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementNotice {
		body?: string | null;
		creation_date?: number | null;
		owner_user_id?: number | null;
	}
	export interface QuestionsElementNoticeFormProperties {
		body: FormControl<string | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		owner_user_id: FormControl<number | null | undefined>,
	}
	export function CreateQuestionsElementNoticeFormGroup() {
		return new FormGroup<QuestionsElementNoticeFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			owner_user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementOwner {
		accept_rate?: number | null;
		badge_counts?: QuestionsElementOwnerBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface QuestionsElementOwnerFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateQuestionsElementOwnerFormGroup() {
		return new FormGroup<QuestionsElementOwnerFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionsElementOwnerBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface QuestionsElementOwnerBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateQuestionsElementOwnerBadge_countsFormGroup() {
		return new FormGroup<QuestionsElementOwnerBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Reputation_changesElement {
		link?: string | null;
		on_date?: number | null;
		post_id?: number | null;
		post_type?: string | null;
		reputation_change?: number | null;
		title?: string | null;
		user_id?: number | null;
		vote_type?: string | null;
	}
	export interface Reputation_changesElementFormProperties {
		link: FormControl<string | null | undefined>,
		on_date: FormControl<number | null | undefined>,
		post_id: FormControl<number | null | undefined>,
		post_type: FormControl<string | null | undefined>,
		reputation_change: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		vote_type: FormControl<string | null | undefined>,
	}
	export function CreateReputation_changesElementFormGroup() {
		return new FormGroup<Reputation_changesElementFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
			on_date: new FormControl<number | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
			post_type: new FormControl<string | null | undefined>(undefined),
			reputation_change: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			vote_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Reputation_historyElement {
		creation_date?: number | null;
		post_id?: number | null;
		reputation_change?: number | null;
		reputation_history_type?: string | null;
		user_id?: number | null;
	}
	export interface Reputation_historyElementFormProperties {
		creation_date: FormControl<number | null | undefined>,
		post_id: FormControl<number | null | undefined>,
		reputation_change: FormControl<number | null | undefined>,
		reputation_history_type: FormControl<string | null | undefined>,
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateReputation_historyElementFormGroup() {
		return new FormGroup<Reputation_historyElementFormProperties>({
			creation_date: new FormControl<number | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
			reputation_change: new FormControl<number | null | undefined>(undefined),
			reputation_history_type: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Reputation_objectsElement {
		link?: string | null;
		on_date?: number | null;
		post_id?: number | null;
		post_type?: string | null;
		reputation_change?: number | null;
		title?: string | null;
		user_id?: number | null;
		vote_type?: string | null;
	}
	export interface Reputation_objectsElementFormProperties {
		link: FormControl<string | null | undefined>,
		on_date: FormControl<number | null | undefined>,
		post_id: FormControl<number | null | undefined>,
		post_type: FormControl<string | null | undefined>,
		reputation_change: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		vote_type: FormControl<string | null | undefined>,
	}
	export function CreateReputation_objectsElementFormGroup() {
		return new FormGroup<Reputation_objectsElementFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
			on_date: new FormControl<number | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
			post_type: new FormControl<string | null | undefined>(undefined),
			reputation_change: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			vote_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RevisionsElement {
		body?: string | null;
		comment?: string | null;
		creation_date?: number | null;
		is_rollback?: boolean | null;
		last_body?: string | null;
		last_tags?: Array<string>;
		last_title?: string | null;
		post_id?: number | null;
		post_type?: string | null;
		revision_guid?: string | null;
		revision_number?: number | null;
		revision_type?: string | null;
		set_community_wiki?: boolean | null;
		tags?: Array<string>;
		title?: string | null;
		user?: RevisionsElementUser;
	}
	export interface RevisionsElementFormProperties {
		body: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		is_rollback: FormControl<boolean | null | undefined>,
		last_body: FormControl<string | null | undefined>,
		last_title: FormControl<string | null | undefined>,
		post_id: FormControl<number | null | undefined>,
		post_type: FormControl<string | null | undefined>,
		revision_guid: FormControl<string | null | undefined>,
		revision_number: FormControl<number | null | undefined>,
		revision_type: FormControl<string | null | undefined>,
		set_community_wiki: FormControl<boolean | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateRevisionsElementFormGroup() {
		return new FormGroup<RevisionsElementFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			is_rollback: new FormControl<boolean | null | undefined>(undefined),
			last_body: new FormControl<string | null | undefined>(undefined),
			last_title: new FormControl<string | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
			post_type: new FormControl<string | null | undefined>(undefined),
			revision_guid: new FormControl<string | null | undefined>(undefined),
			revision_number: new FormControl<number | null | undefined>(undefined),
			revision_type: new FormControl<string | null | undefined>(undefined),
			set_community_wiki: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RevisionsElementUser {
		accept_rate?: number | null;
		badge_counts?: RevisionsElementUserBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface RevisionsElementUserFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateRevisionsElementUserFormGroup() {
		return new FormGroup<RevisionsElementUserFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RevisionsElementUserBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface RevisionsElementUserBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateRevisionsElementUserBadge_countsFormGroup() {
		return new FormGroup<RevisionsElementUserBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Single_filter {
		filter?: string | null;
		filter_type?: string | null;
		included_fields?: Array<string>;
	}
	export interface Single_filterFormProperties {
		filter: FormControl<string | null | undefined>,
		filter_type: FormControl<string | null | undefined>,
	}
	export function CreateSingle_filterFormGroup() {
		return new FormGroup<Single_filterFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			filter_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SitesElement {
		aliases?: Array<string>;
		api_site_parameter?: string | null;
		audience?: string | null;
		closed_beta_date?: number | null;
		favicon_url?: string | null;
		high_resolution_icon_url?: string | null;
		icon_url?: string | null;
		launch_date?: number | null;
		logo_url?: string | null;
		markdown_extensions?: Array<string>;
		name?: string | null;
		open_beta_date?: number | null;
		related_sites?: Array<string>;
		site_state?: string | null;
		site_type?: string | null;
		site_url?: string | null;
		styling?: SitesElementStyling;
		twitter_account?: string | null;
	}
	export interface SitesElementFormProperties {
		api_site_parameter: FormControl<string | null | undefined>,
		audience: FormControl<string | null | undefined>,
		closed_beta_date: FormControl<number | null | undefined>,
		favicon_url: FormControl<string | null | undefined>,
		high_resolution_icon_url: FormControl<string | null | undefined>,
		icon_url: FormControl<string | null | undefined>,
		launch_date: FormControl<number | null | undefined>,
		logo_url: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		open_beta_date: FormControl<number | null | undefined>,
		site_state: FormControl<string | null | undefined>,
		site_type: FormControl<string | null | undefined>,
		site_url: FormControl<string | null | undefined>,
		twitter_account: FormControl<string | null | undefined>,
	}
	export function CreateSitesElementFormGroup() {
		return new FormGroup<SitesElementFormProperties>({
			api_site_parameter: new FormControl<string | null | undefined>(undefined),
			audience: new FormControl<string | null | undefined>(undefined),
			closed_beta_date: new FormControl<number | null | undefined>(undefined),
			favicon_url: new FormControl<string | null | undefined>(undefined),
			high_resolution_icon_url: new FormControl<string | null | undefined>(undefined),
			icon_url: new FormControl<string | null | undefined>(undefined),
			launch_date: new FormControl<number | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			open_beta_date: new FormControl<number | null | undefined>(undefined),
			site_state: new FormControl<string | null | undefined>(undefined),
			site_type: new FormControl<string | null | undefined>(undefined),
			site_url: new FormControl<string | null | undefined>(undefined),
			twitter_account: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SitesElementStyling {
		link_color?: string | null;
		tag_background_color?: string | null;
		tag_foreground_color?: string | null;
	}
	export interface SitesElementStylingFormProperties {
		link_color: FormControl<string | null | undefined>,
		tag_background_color: FormControl<string | null | undefined>,
		tag_foreground_color: FormControl<string | null | undefined>,
	}
	export function CreateSitesElementStylingFormGroup() {
		return new FormGroup<SitesElementStylingFormProperties>({
			link_color: new FormControl<string | null | undefined>(undefined),
			tag_background_color: new FormControl<string | null | undefined>(undefined),
			tag_foreground_color: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Suggested_editsElement {
		approval_date?: number | null;
		body?: string | null;
		comment?: string | null;
		creation_date?: number | null;
		post_id?: number | null;
		post_type?: string | null;
		proposing_user?: Suggested_editsElementProposing_user;
		rejection_date?: number | null;
		suggested_edit_id?: number | null;
		tags?: Array<string>;
		title?: string | null;
	}
	export interface Suggested_editsElementFormProperties {
		approval_date: FormControl<number | null | undefined>,
		body: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		post_id: FormControl<number | null | undefined>,
		post_type: FormControl<string | null | undefined>,
		rejection_date: FormControl<number | null | undefined>,
		suggested_edit_id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSuggested_editsElementFormGroup() {
		return new FormGroup<Suggested_editsElementFormProperties>({
			approval_date: new FormControl<number | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
			post_type: new FormControl<string | null | undefined>(undefined),
			rejection_date: new FormControl<number | null | undefined>(undefined),
			suggested_edit_id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Suggested_editsElementProposing_user {
		accept_rate?: number | null;
		badge_counts?: Suggested_editsElementProposing_userBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface Suggested_editsElementProposing_userFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateSuggested_editsElementProposing_userFormGroup() {
		return new FormGroup<Suggested_editsElementProposing_userFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Suggested_editsElementProposing_userBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface Suggested_editsElementProposing_userBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateSuggested_editsElementProposing_userBadge_countsFormGroup() {
		return new FormGroup<Suggested_editsElementProposing_userBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tag_score_objectsElement {
		post_count?: number | null;
		score?: number | null;
		user?: Tag_score_objectsElementUser;
	}
	export interface Tag_score_objectsElementFormProperties {
		post_count: FormControl<number | null | undefined>,
		score: FormControl<number | null | undefined>,
	}
	export function CreateTag_score_objectsElementFormGroup() {
		return new FormGroup<Tag_score_objectsElementFormProperties>({
			post_count: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tag_score_objectsElementUser {
		accept_rate?: number | null;
		badge_counts?: Tag_score_objectsElementUserBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface Tag_score_objectsElementUserFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateTag_score_objectsElementUserFormGroup() {
		return new FormGroup<Tag_score_objectsElementUserFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tag_score_objectsElementUserBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface Tag_score_objectsElementUserBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateTag_score_objectsElementUserBadge_countsFormGroup() {
		return new FormGroup<Tag_score_objectsElementUserBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tag_synonymsElement {
		applied_count?: number | null;
		creation_date?: number | null;
		from_tag?: string | null;
		last_applied_date?: number | null;
		to_tag?: string | null;
	}
	export interface Tag_synonymsElementFormProperties {
		applied_count: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		from_tag: FormControl<string | null | undefined>,
		last_applied_date: FormControl<number | null | undefined>,
		to_tag: FormControl<string | null | undefined>,
	}
	export function CreateTag_synonymsElementFormGroup() {
		return new FormGroup<Tag_synonymsElementFormProperties>({
			applied_count: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			from_tag: new FormControl<string | null | undefined>(undefined),
			last_applied_date: new FormControl<number | null | undefined>(undefined),
			to_tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tag_wikisElement {
		body?: string | null;
		body_last_edit_date?: number | null;
		excerpt?: string | null;
		excerpt_last_edit_date?: number | null;
		last_body_editor?: Tag_wikisElementLast_body_editor;
		last_excerpt_editor?: Tag_wikisElementLast_excerpt_editor;
		tag_name?: string | null;
	}
	export interface Tag_wikisElementFormProperties {
		body: FormControl<string | null | undefined>,
		body_last_edit_date: FormControl<number | null | undefined>,
		excerpt: FormControl<string | null | undefined>,
		excerpt_last_edit_date: FormControl<number | null | undefined>,
		tag_name: FormControl<string | null | undefined>,
	}
	export function CreateTag_wikisElementFormGroup() {
		return new FormGroup<Tag_wikisElementFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			body_last_edit_date: new FormControl<number | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			excerpt_last_edit_date: new FormControl<number | null | undefined>(undefined),
			tag_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tag_wikisElementLast_body_editor {
		accept_rate?: number | null;
		badge_counts?: Tag_wikisElementLast_body_editorBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface Tag_wikisElementLast_body_editorFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateTag_wikisElementLast_body_editorFormGroup() {
		return new FormGroup<Tag_wikisElementLast_body_editorFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tag_wikisElementLast_body_editorBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface Tag_wikisElementLast_body_editorBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateTag_wikisElementLast_body_editorBadge_countsFormGroup() {
		return new FormGroup<Tag_wikisElementLast_body_editorBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Tag_wikisElementLast_excerpt_editor {
		accept_rate?: number | null;
		badge_counts?: Tag_wikisElementLast_excerpt_editorBadge_counts;
		display_name?: string | null;
		link?: string | null;
		profile_image?: string | null;
		reputation?: number | null;
		user_id?: number | null;
		user_type?: string | null;
	}
	export interface Tag_wikisElementLast_excerpt_editorFormProperties {
		accept_rate: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
	}
	export function CreateTag_wikisElementLast_excerpt_editorFormGroup() {
		return new FormGroup<Tag_wikisElementLast_excerpt_editorFormProperties>({
			accept_rate: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Tag_wikisElementLast_excerpt_editorBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface Tag_wikisElementLast_excerpt_editorBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateTag_wikisElementLast_excerpt_editorBadge_countsFormGroup() {
		return new FormGroup<Tag_wikisElementLast_excerpt_editorBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagsElement {
		count?: number | null;
		has_synonyms?: boolean | null;
		is_moderator_only?: boolean | null;
		is_required?: boolean | null;
		last_activity_date?: number | null;
		name?: string | null;
		synonyms?: Array<string>;
		user_id?: number | null;
	}
	export interface TagsElementFormProperties {
		count: FormControl<number | null | undefined>,
		has_synonyms: FormControl<boolean | null | undefined>,
		is_moderator_only: FormControl<boolean | null | undefined>,
		is_required: FormControl<boolean | null | undefined>,
		last_activity_date: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateTagsElementFormGroup() {
		return new FormGroup<TagsElementFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			has_synonyms: new FormControl<boolean | null | undefined>(undefined),
			is_moderator_only: new FormControl<boolean | null | undefined>(undefined),
			is_required: new FormControl<boolean | null | undefined>(undefined),
			last_activity_date: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Top_tag_objectsElement {
		answer_count?: number | null;
		answer_score?: number | null;
		question_count?: number | null;
		question_score?: number | null;
		tag_name?: string | null;
		user_id?: number | null;
	}
	export interface Top_tag_objectsElementFormProperties {
		answer_count: FormControl<number | null | undefined>,
		answer_score: FormControl<number | null | undefined>,
		question_count: FormControl<number | null | undefined>,
		question_score: FormControl<number | null | undefined>,
		tag_name: FormControl<string | null | undefined>,
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateTop_tag_objectsElementFormGroup() {
		return new FormGroup<Top_tag_objectsElementFormProperties>({
			answer_count: new FormControl<number | null | undefined>(undefined),
			answer_score: new FormControl<number | null | undefined>(undefined),
			question_count: new FormControl<number | null | undefined>(undefined),
			question_score: new FormControl<number | null | undefined>(undefined),
			tag_name: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface User {
		about_me?: string | null;
		accept_rate?: number | null;
		account_id?: number | null;
		age?: number | null;
		answer_count?: number | null;
		badge_counts?: UserBadge_counts;
		creation_date?: number | null;
		display_name?: string | null;
		down_vote_count?: number | null;
		is_employee?: boolean | null;
		last_access_date?: number | null;
		last_modified_date?: number | null;
		link?: string | null;
		location?: string | null;
		profile_image?: string | null;
		question_count?: number | null;
		reputation?: number | null;
		reputation_change_day?: number | null;
		reputation_change_month?: number | null;
		reputation_change_quarter?: number | null;
		reputation_change_week?: number | null;
		reputation_change_year?: number | null;
		timed_penalty_date?: number | null;
		up_vote_count?: number | null;
		user_id?: number | null;
		user_type?: string | null;
		view_count?: number | null;
		website_url?: string | null;
	}
	export interface UserFormProperties {
		about_me: FormControl<string | null | undefined>,
		accept_rate: FormControl<number | null | undefined>,
		account_id: FormControl<number | null | undefined>,
		age: FormControl<number | null | undefined>,
		answer_count: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		down_vote_count: FormControl<number | null | undefined>,
		is_employee: FormControl<boolean | null | undefined>,
		last_access_date: FormControl<number | null | undefined>,
		last_modified_date: FormControl<number | null | undefined>,
		link: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		question_count: FormControl<number | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		reputation_change_day: FormControl<number | null | undefined>,
		reputation_change_month: FormControl<number | null | undefined>,
		reputation_change_quarter: FormControl<number | null | undefined>,
		reputation_change_week: FormControl<number | null | undefined>,
		reputation_change_year: FormControl<number | null | undefined>,
		timed_penalty_date: FormControl<number | null | undefined>,
		up_vote_count: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
		view_count: FormControl<number | null | undefined>,
		website_url: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			about_me: new FormControl<string | null | undefined>(undefined),
			accept_rate: new FormControl<number | null | undefined>(undefined),
			account_id: new FormControl<number | null | undefined>(undefined),
			age: new FormControl<number | null | undefined>(undefined),
			answer_count: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			down_vote_count: new FormControl<number | null | undefined>(undefined),
			is_employee: new FormControl<boolean | null | undefined>(undefined),
			last_access_date: new FormControl<number | null | undefined>(undefined),
			last_modified_date: new FormControl<number | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			question_count: new FormControl<number | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			reputation_change_day: new FormControl<number | null | undefined>(undefined),
			reputation_change_month: new FormControl<number | null | undefined>(undefined),
			reputation_change_quarter: new FormControl<number | null | undefined>(undefined),
			reputation_change_week: new FormControl<number | null | undefined>(undefined),
			reputation_change_year: new FormControl<number | null | undefined>(undefined),
			timed_penalty_date: new FormControl<number | null | undefined>(undefined),
			up_vote_count: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
			view_count: new FormControl<number | null | undefined>(undefined),
			website_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface UserBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateUserBadge_countsFormGroup() {
		return new FormGroup<UserBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface User_timeline_objectsElement {
		badge_id?: number | null;
		comment_id?: number | null;
		creation_date?: number | null;
		detail?: string | null;
		link?: string | null;
		post_id?: number | null;
		post_type?: string | null;
		suggested_edit_id?: number | null;
		timeline_type?: string | null;
		title?: string | null;
		user_id?: number | null;
	}
	export interface User_timeline_objectsElementFormProperties {
		badge_id: FormControl<number | null | undefined>,
		comment_id: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		detail: FormControl<string | null | undefined>,
		link: FormControl<string | null | undefined>,
		post_id: FormControl<number | null | undefined>,
		post_type: FormControl<string | null | undefined>,
		suggested_edit_id: FormControl<number | null | undefined>,
		timeline_type: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateUser_timeline_objectsElementFormGroup() {
		return new FormGroup<User_timeline_objectsElementFormProperties>({
			badge_id: new FormControl<number | null | undefined>(undefined),
			comment_id: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			post_id: new FormControl<number | null | undefined>(undefined),
			post_type: new FormControl<string | null | undefined>(undefined),
			suggested_edit_id: new FormControl<number | null | undefined>(undefined),
			timeline_type: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UsersElement {
		about_me?: string | null;
		accept_rate?: number | null;
		account_id?: number | null;
		age?: number | null;
		answer_count?: number | null;
		badge_counts?: UsersElementBadge_counts;
		creation_date?: number | null;
		display_name?: string | null;
		down_vote_count?: number | null;
		is_employee?: boolean | null;
		last_access_date?: number | null;
		last_modified_date?: number | null;
		link?: string | null;
		location?: string | null;
		profile_image?: string | null;
		question_count?: number | null;
		reputation?: number | null;
		reputation_change_day?: number | null;
		reputation_change_month?: number | null;
		reputation_change_quarter?: number | null;
		reputation_change_week?: number | null;
		reputation_change_year?: number | null;
		timed_penalty_date?: number | null;
		up_vote_count?: number | null;
		user_id?: number | null;
		user_type?: string | null;
		view_count?: number | null;
		website_url?: string | null;
	}
	export interface UsersElementFormProperties {
		about_me: FormControl<string | null | undefined>,
		accept_rate: FormControl<number | null | undefined>,
		account_id: FormControl<number | null | undefined>,
		age: FormControl<number | null | undefined>,
		answer_count: FormControl<number | null | undefined>,
		creation_date: FormControl<number | null | undefined>,
		display_name: FormControl<string | null | undefined>,
		down_vote_count: FormControl<number | null | undefined>,
		is_employee: FormControl<boolean | null | undefined>,
		last_access_date: FormControl<number | null | undefined>,
		last_modified_date: FormControl<number | null | undefined>,
		link: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		profile_image: FormControl<string | null | undefined>,
		question_count: FormControl<number | null | undefined>,
		reputation: FormControl<number | null | undefined>,
		reputation_change_day: FormControl<number | null | undefined>,
		reputation_change_month: FormControl<number | null | undefined>,
		reputation_change_quarter: FormControl<number | null | undefined>,
		reputation_change_week: FormControl<number | null | undefined>,
		reputation_change_year: FormControl<number | null | undefined>,
		timed_penalty_date: FormControl<number | null | undefined>,
		up_vote_count: FormControl<number | null | undefined>,
		user_id: FormControl<number | null | undefined>,
		user_type: FormControl<string | null | undefined>,
		view_count: FormControl<number | null | undefined>,
		website_url: FormControl<string | null | undefined>,
	}
	export function CreateUsersElementFormGroup() {
		return new FormGroup<UsersElementFormProperties>({
			about_me: new FormControl<string | null | undefined>(undefined),
			accept_rate: new FormControl<number | null | undefined>(undefined),
			account_id: new FormControl<number | null | undefined>(undefined),
			age: new FormControl<number | null | undefined>(undefined),
			answer_count: new FormControl<number | null | undefined>(undefined),
			creation_date: new FormControl<number | null | undefined>(undefined),
			display_name: new FormControl<string | null | undefined>(undefined),
			down_vote_count: new FormControl<number | null | undefined>(undefined),
			is_employee: new FormControl<boolean | null | undefined>(undefined),
			last_access_date: new FormControl<number | null | undefined>(undefined),
			last_modified_date: new FormControl<number | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			question_count: new FormControl<number | null | undefined>(undefined),
			reputation: new FormControl<number | null | undefined>(undefined),
			reputation_change_day: new FormControl<number | null | undefined>(undefined),
			reputation_change_month: new FormControl<number | null | undefined>(undefined),
			reputation_change_quarter: new FormControl<number | null | undefined>(undefined),
			reputation_change_week: new FormControl<number | null | undefined>(undefined),
			reputation_change_year: new FormControl<number | null | undefined>(undefined),
			timed_penalty_date: new FormControl<number | null | undefined>(undefined),
			up_vote_count: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
			view_count: new FormControl<number | null | undefined>(undefined),
			website_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UsersElementBadge_counts {
		bronze?: number | null;
		gold?: number | null;
		silver?: number | null;
	}
	export interface UsersElementBadge_countsFormProperties {
		bronze: FormControl<number | null | undefined>,
		gold: FormControl<number | null | undefined>,
		silver: FormControl<number | null | undefined>,
	}
	export function CreateUsersElementBadge_countsFormGroup() {
		return new FormGroup<UsersElementBadge_countsFormProperties>({
			bronze: new FormControl<number | null | undefined>(undefined),
			gold: new FormControl<number | null | undefined>(undefined),
			silver: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Write_permissionsElement {
		can_add?: boolean | null;
		can_delete?: boolean | null;
		can_edit?: boolean | null;
		max_daily_actions?: number | null;
		min_seconds_between_actions?: number | null;
		object_type?: string | null;
		user_id?: number | null;
	}
	export interface Write_permissionsElementFormProperties {
		can_add: FormControl<boolean | null | undefined>,
		can_delete: FormControl<boolean | null | undefined>,
		can_edit: FormControl<boolean | null | undefined>,
		max_daily_actions: FormControl<number | null | undefined>,
		min_seconds_between_actions: FormControl<number | null | undefined>,
		object_type: FormControl<string | null | undefined>,
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateWrite_permissionsElementFormGroup() {
		return new FormGroup<Write_permissionsElementFormProperties>({
			can_add: new FormControl<boolean | null | undefined>(undefined),
			can_delete: new FormControl<boolean | null | undefined>(undefined),
			can_edit: new FormControl<boolean | null | undefined>(undefined),
			max_daily_actions: new FormControl<number | null | undefined>(undefined),
			min_seconds_between_actions: new FormControl<number | null | undefined>(undefined),
			object_type: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Reads the properties for a set of access tokens.
		 * {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
		 * This method returns a list of access_tokens.
		 * Get access-tokens/{accessTokens}
		 * @param {string} accessTokens String list (semicolon delimited).
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		Access_tokens_accessTokensGetByPagesizeAndPageAndFilterAndCallback(accessTokens: string, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'access-tokens/' + (accessTokens == null ? '' : encodeURIComponent(accessTokens)) + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
		 * {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
		 * This method returns a list of access_tokens.
		 * Get access-tokens/{accessTokens}/invalidate
		 * @param {string} accessTokens String list (semicolon delimited).
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		Access_tokens_accessTokensInvalidateGetByPagesizeAndPageAndFilterAndCallback(accessTokens: string, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'access-tokens/' + (accessTokens == null ? '' : encodeURIComponent(accessTokens)) + '/invalidate&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all the undeleted answers in the system.
		 * The sorts accepted by this method operate on the follow fields of the answer object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of answers.
		 * Get answers
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'answers?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the set of answers identified by ids.
		 * This is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
		 * The sorts accepted by this method operate on the follow fields of the answer object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of answers.
		 * Get answers/{ids}
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Answers_idsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'answers/' + (ids == null ? '' : encodeURIComponent(ids)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the comments on a set of answers.
		 * If you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
		 * The sorts accepted by this method operate on the follow fields of the comment object:
		 * - creation - creation_date
		 * - votes - score
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of comments.
		 * Get answers/{ids}/comments
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'answers/' + (ids == null ? '' : encodeURIComponent(ids)) + '/comments&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
		 * This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
		 * Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
		 * {accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
		 * This method returns a list of access_tokens.
		 * Get apps/{accessTokens}/de-authenticate
		 * @param {string} accessTokens String list (semicolon delimited).
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		Apps_accessTokensDe_authenticateGetByPagesizeAndPageAndFilterAndCallback(accessTokens: string, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'apps/' + (accessTokens == null ? '' : encodeURIComponent(accessTokens)) + '/de-authenticate&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all the badges in the system.
		 * Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
		 * This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
		 * For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
		 * rank is the default sort.
		 * This method returns a list of badges.
		 * Get badges
		 * @param {string} max sort = rank => string
		 * sort = name => string
		 * sort = type => string
		 * @param {string} min sort = rank => string
		 * sort = name => string
		 * sort = type => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		BadgesGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(inname: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: BadgesGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'badges?inname=' + (inname == null ? '' : encodeURIComponent(inname)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all explicitly named badges in the system.
		 * A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
		 * For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
		 * rank is the default sort.
		 * This method returns a list of badges.
		 * Get badges/name
		 * @param {string} max sort = rank => string
		 * sort = name => string
		 * @param {string} min sort = rank => string
		 * sort = name => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		BadgesNameGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(inname: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: BadgesNameGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'badges/name?inname=' + (inname == null ? '' : encodeURIComponent(inname)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns recently awarded badges in the system.
		 * As these badges have been awarded, they will have the badge.user property set.
		 * This method returns a list of badges.
		 * Get badges/recipients
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		BadgesRecipientsGetByFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'badges/recipients?fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the badges that are awarded for participation in specific tags.
		 * For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
		 * rank is the default sort.
		 * This method returns a list of badges.
		 * Get badges/tags
		 * @param {string} max sort = rank => string
		 * sort = name => string
		 * @param {string} min sort = rank => string
		 * sort = name => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		BadgesTagsGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(inname: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: BadgesNameGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'badges/tags?inname=' + (inname == null ? '' : encodeURIComponent(inname)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the badges identified in id.
		 * Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
		 * Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
		 * This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
		 * For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
		 * rank is the default sort.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
		 * This method returns a list of badges.
		 * Get badges/{ids}
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = rank => string
		 * sort = name => string
		 * sort = type => string
		 * @param {string} min sort = rank => string
		 * sort = name => string
		 * sort = type => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Badges_idsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: BadgesGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'badges/' + (ids == null ? '' : encodeURIComponent(ids)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns recently awarded badges in the system, constrained to a certain set of badges.
		 * As these badges have been awarded, they will have the badge.user property set.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
		 * This method returns a list of badges.
		 * Get badges/{ids}/recipients
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Badges_idsRecipientsGetByFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'badges/' + (ids == null ? '' : encodeURIComponent(ids)) + '/recipients&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the comments on the site.
		 * If you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.
		 * If you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.
		 * The sorts accepted by this method operate on the follow fields of the comment object:
		 * - creation - creation_date
		 * - votes - score
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of comments.
		 * Get comments
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		CommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'comments?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the comments identified in id.
		 * This method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.
		 * The sorts accepted by this method operate on the follow fields of the comment object:
		 * - creation - creation_date
		 * - votes - score
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of comments.
		 * Get comments/{ids}
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Comments_idsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'comments/' + (ids == null ? '' : encodeURIComponent(ids)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a comment.
		 * Use an access_token with write_access to delete a comment.
		 * In practice, this method will never return an object.
		 * Post comments/{id}/delete
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Comments_idDeletePostByFilterAndCallbackAndSiteAndPreview(id: number, filter: string | null | undefined, callback: string | null | undefined, site: string, preview: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'comments/' + id + '/delete?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)) + '&preview=' + preview, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Edit an existing comment.
		 * Use an access_token with write_access to edit an existing comment.
		 * This method return the created comment.
		 * Post comments/{id}/edit
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Comments_idEditPostByFilterAndCallbackAndSiteAndBodyAndPreview(id: number, filter: string | null | undefined, callback: string | null | undefined, site: string, body: string | null | undefined, preview: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'comments/' + id + '/edit?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)) + '&body=' + (body == null ? '' : encodeURIComponent(body)) + '&preview=' + preview, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the various error codes that can be produced by the API.
		 * This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
		 * For testing purposes, look into the /errors/{id} method which simulates errors given a code.
		 * This method returns a list of errors.
		 * Get errors
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		ErrorsGetByPagesizeAndPageAndFilterAndCallback(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'errors?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * This method allows you to generate an error.
		 * This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
		 * This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.
		 * Get errors/{id}
		 * @return {void} OK
		 */
		Errors_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'errors/' + id, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a stream of events that have occurred on the site.
		 * The API considers the following "events":
		 * - posting a question
		 * - posting an answer
		 * - posting a comment
		 * - editing a post
		 * - creating a user
		 * Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.
		 * It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.
		 * This method returns a list of events.
		 * Get events
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @param {number} since Unix date.
		 * @return {void} OK
		 */
		EventsGetByPagesizeAndPageAndFilterAndCallbackAndSiteAndSince(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, since: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)) + '&since=' + since, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be "unsafe".
		 * Filter "safety" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
		 * When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
		 * It is not expected that many applications will call this method at runtime, filters should be pre-calculated and "baked in" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
		 * This method returns a single filter.
		 * Get filters/create
		 * @param {string} exclude String list (semicolon delimited).
		 * @param {string} include String list (semicolon delimited).
		 * @return {void} OK
		 */
		FiltersCreateGetByBaseAndExcludeAndIncludeAndUnsafe(base: string | null | undefined, exclude: string | null | undefined, include: string | null | undefined, unsafe: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'filters/create?base=' + (base == null ? '' : encodeURIComponent(base)) + '&exclude=' + (exclude == null ? '' : encodeURIComponent(exclude)) + '&include=' + (include == null ? '' : encodeURIComponent(include)) + '&unsafe=' + unsafe, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the fields included by the given filters, and the "safeness" of those filters.
		 * It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
		 * {filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
		 * This method returns a list of filters.
		 * Get filters/{filters}
		 * @param {string} filters String list (semicolon delimited).
		 * @return {void} OK
		 */
		Filters_filtersGet(filters: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'filters/' + (filters == null ? '' : encodeURIComponent(filters)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user's inbox.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method returns a list of inbox items.
		 * Get inbox
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		InboxGetByPagesizeAndPageAndFilterAndCallback(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'inbox?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the unread items in a user's inbox.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method returns a list of inbox items.
		 * Get inbox/unread
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {number} since Unix date.
		 * @return {void} OK
		 */
		InboxUnreadGetByPagesizeAndPageAndFilterAndCallbackAndSince(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, since: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'inbox/unread?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&since=' + since, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a collection of statistics about the site.
		 * Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
		 * This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
		 * This method returns an info object.
		 * Get info
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		InfoGetBySite(site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'info?site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the user associated with the passed access_token.
		 * This method returns a user.
		 * Get me
		 * @param {string} max sort = reputation => number
		 * sort = creation => date
		 * sort = name => string
		 * sort = modified => date
		 * @param {string} min sort = reputation => number
		 * sort = creation => date
		 * sort = name => string
		 * sort = modified => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the answers owned by the user associated with the given access_token.
		 * This method returns a list of answers.
		 * Get me/answers
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeAnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/answers?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all of a user's associated accounts, given an access_token for them.
		 * This method returns a list of network users.
		 * Get me/associated
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		MeAssociatedGetByPagesizeAndPageAndFilterAndCallback(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/associated?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the badges earned by the user associated with the given access_token.
		 * This method returns a list of badges.
		 * Get me/badges
		 * @param {string} max sort = rank => string
		 * sort = name => string
		 * sort = type => string
		 * @param {string} min sort = rank => string
		 * sort = name => string
		 * sort = type => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeBadgesGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: BadgesGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/badges?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the comments owned by the user associated with the given access_token.
		 * This method returns a list of comments.
		 * Get me/comments
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/comments?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
		 * This method returns a list of comments.
		 * Get me/comments/{toId}
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeComments_toIdGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(toId: number, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/comments/' + toId + '?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the questions favorites by the user associated with the given access_token.
		 * This method returns a list of questions.
		 * Get me/favorites
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = added => date
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = added => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeFavoritesGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeFavoritesGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/favorites?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the user identified by access_token's inbox.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method returns a list of inbox items.
		 * Get me/inbox
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeInboxGetByPagesizeAndPageAndFilterAndCallbackAndSite(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/inbox?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the unread items in the user identified by access_token's inbox.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method returns a list of inbox items.
		 * Get me/inbox/unread
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @param {number} since Unix date.
		 * @return {void} OK
		 */
		MeInboxUnreadGetByPagesizeAndPageAndFilterAndCallbackAndSiteAndSince(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, since: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/inbox/unread?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)) + '&since=' + since, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the comments mentioning the user associated with the given access_token.
		 * This method returns a list of comments.
		 * Get me/mentioned
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeMentionedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/mentioned?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a record of merges that have occurred involving a user identified by an access_token.
		 * This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
		 * This is most useful when confirming that an account_id is in fact "new" to an application.
		 * Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
		 * Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
		 * This method returns a list of account_merge.
		 * Get me/merges
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		MeMergesGetByPagesizeAndPageAndFilterAndCallback(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/merges?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user's notifications, given an access_token.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method returns a list of notifications.
		 * Get me/notifications
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeNotificationsGetByPagesizeAndPageAndFilterAndCallbackAndSite(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/notifications?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user's unread notifications, given an access_token.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method returns a list of notifications.
		 * Get me/notifications/unread
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeNotificationsUnreadGetByPagesizeAndPageAndFilterAndCallbackAndSite(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/notifications/unread?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the privileges the user identified by access_token has.
		 * This method returns a list of privileges.
		 * Get me/privileges
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MePrivilegesGetByPagesizeAndPageAndFilterAndCallbackAndSite(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/privileges?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the questions owned by the user associated with the given access_token.
		 * This method returns a list of questions.
		 * Get me/questions
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeQuestionsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/questions?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the questions that have active bounties offered by the user associated with the given access_token.
		 * This method returns a list of questions.
		 * Get me/questions/featured
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeQuestionsFeaturedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/questions/featured?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the questions owned by the user associated with the given access_token that have no answers.
		 * This method returns a list of questions.
		 * Get me/questions/no-answers
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeQuestionsNo_answersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/questions/no-answers?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the questions owned by the user associated with the given access_token that have no accepted answer.
		 * This method returns a list of questions.
		 * Get me/questions/unaccepted
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeQuestionsUnacceptedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/questions/unaccepted?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the questions owned by the user associated with the given access_token that are not considered answered.
		 * This method returns a list of questions.
		 * Get me/questions/unanswered
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeQuestionsUnansweredGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/questions/unanswered?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the reputation changed for the user associated with the given access_token.
		 * This method returns a list of reputation changes.
		 * Get me/reputation
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeReputationGetByFilterAndCallbackAndSite(filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/reputation?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns user's public reputation history.
		 * This method returns a list of reputation_history.
		 * Get me/reputation-history
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeReputation_historyGetByPagesizeAndPageAndFilterAndCallbackAndSite(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/reputation-history?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns user's full reputation history, including private events.
		 * This method requires an access_token, with a scope containing "private_info".
		 * This method returns a list of reputation_history.
		 * Get me/reputation-history/full
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeReputation_historyFullGetByPagesizeAndPageAndFilterAndCallbackAndSite(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/reputation-history/full?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the suggested edits the user identified by access_token has submitted.
		 * This method returns a list of suggested-edits.
		 * Get me/suggested-edits
		 * @param {string} max sort = creation => date
		 * sort = approval => date
		 * sort = rejection => date
		 * @param {string} min sort = creation => date
		 * sort = approval => date
		 * sort = rejection => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeSuggested_editsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeSuggested_editsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/suggested-edits?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the tags the user identified by the access_token passed is active in.
		 * This method returns a list of tags.
		 * Get me/tags
		 * @param {string} max sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {string} min sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeTagsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeTagsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/tags?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
		 * This method returns a list of answers.
		 * Get me/tags/{tags}/top-answers
		 * @param {string} tags String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeTags_tagsTop_answersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(tags: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/tags/' + (tags == null ? '' : encodeURIComponent(tags)) + '/top-answers&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
		 * This method returns a list of questions.
		 * Get me/tags/{tags}/top-questions
		 * @param {string} tags String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = hot => none
		 * sort = week => none
		 * sort = month => none
		 * sort = relevance => none
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = hot => none
		 * sort = week => none
		 * sort = month => none
		 * sort = relevance => none
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeTags_tagsTop_questionsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(tags: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeTags_tagsTop_questionsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/tags/' + (tags == null ? '' : encodeURIComponent(tags)) + '/top-questions&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a subset of the actions the user identified by the passed access_token has taken on the site.
		 * This method returns a list of user timeline objects.
		 * Get me/timeline
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeTimelineGetByFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/timeline?fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the user identified by access_token's top 30 tags by answer score.
		 * This method returns a list of top tag objects.
		 * Get me/top-answer-tags
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeTop_answer_tagsGetByPagesizeAndPageAndFilterAndCallbackAndSite(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/top-answer-tags?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the user identified by access_token's top 30 tags by question score.
		 * This method returns a list of top tag objects.
		 * Get me/top-question-tags
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeTop_question_tagsGetByPagesizeAndPageAndFilterAndCallbackAndSite(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/top-question-tags?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the write permissions a user has via the api, given an access token.
		 * The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
		 * This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
		 * This method returns a list of write_permissions.
		 * Get me/write-permissions
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		MeWrite_permissionsGetByPagesizeAndPageAndFilterAndCallbackAndSite(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'me/write-permissions?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user's notifications.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method returns a list of notifications.
		 * Get notifications
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		NotificationsGetByPagesizeAndPageAndFilterAndCallback(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'notifications?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user's unread notifications.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method returns a list of notifications.
		 * Get notifications/unread
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		NotificationsUnreadGetByPagesizeAndPageAndFilterAndCallback(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'notifications/unread?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches all posts (questions and answers) on the site.
		 * In many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.
		 * Most applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: "all posts on Jan. 1st 2011" or "top 10 posts by score of all time".
		 * The sorts accepted by this method operate on the follow fields of the post object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of posts.
		 * Get posts
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		PostsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'posts?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetches a set of posts by ids.
		 * This method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
		 * The sorts accepted by this method operate on the follow fields of the post object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of posts.
		 * Get posts/{ids}
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Posts_idsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'posts/' + (ids == null ? '' : encodeURIComponent(ids)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the comments on the posts identified in ids, regardless of the type of the posts.
		 * This method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
		 * The sorts accepted by this method operate on the follow fields of the comment object:
		 * - creation - creation_date
		 * - votes - score
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of comments.
		 * Get posts/{ids}/comments
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Posts_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'posts/' + (ids == null ? '' : encodeURIComponent(ids)) + '/comments&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns edit revisions for the posts identified in ids.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
		 * This method returns a list of revisions.
		 * Get posts/{ids}/revisions
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Posts_idsRevisionsGetByFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'posts/' + (ids == null ? '' : encodeURIComponent(ids)) + '/revisions&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns suggsted edits on the posts identified in ids.
		 * - creation - creation_date
		 * - approval - approval_date
		 * - rejection - rejection_date
		 * creation is the default sort.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
		 * This method returns a list of suggested-edits.
		 * Get posts/{ids}/suggested-edits
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = approval => date
		 * sort = rejection => date
		 * @param {string} min sort = creation => date
		 * sort = approval => date
		 * sort = rejection => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Posts_idsSuggested_editsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeSuggested_editsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'posts/' + (ids == null ? '' : encodeURIComponent(ids)) + '/suggested-edits&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new comment.
		 * Use an access_token with write_access to create a new comment on a post.
		 * This method returns the created comment.
		 * Post posts/{id}/comments/add
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Posts_idCommentsAddPostByFilterAndCallbackAndSiteAndBodyAndPreview(id: number, filter: string | null | undefined, callback: string | null | undefined, site: string, body: string | null | undefined, preview: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'posts/' + id + '/comments/add?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)) + '&body=' + (body == null ? '' : encodeURIComponent(body)) + '&preview=' + preview, null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the earnable privileges on a site.
		 * Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
		 * While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
		 * This method returns a list of privileges.
		 * Get privileges
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		PrivilegesGetByPagesizeAndPageAndFilterAndCallbackAndSite(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'privileges?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the questions on the site.
		 * This method allows you make fairly flexible queries across the entire corpus of questions on a site. For example, getting all questions asked in the the week of Jan 1st 2011 with scores of 10 or more is a single query with parameters sort=votes&min=10&fromdate=1293840000&todate=1294444800.
		 * To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * - hot - by the formula ordering the hot tab Does not accept min or max
		 * - week - by the formula ordering the week tab Does not accept min or max
		 * - month - by the formula ordering the month tab Does not accept min or max
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get questions
		 * @param {string} tagged String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = hot => none
		 * sort = week => none
		 * sort = month => none
		 * sort = relevance => none
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = hot => none
		 * sort = week => none
		 * sort = month => none
		 * sort = relevance => none
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		QuestionsGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(tagged: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeTags_tagsTop_questionsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions?tagged=' + (tagged == null ? '' : encodeURIComponent(tagged)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all the questions with active bounties in the system.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get questions/featured
		 * @param {string} tagged String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		QuestionsFeaturedGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(tagged: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions/featured?tagged=' + (tagged == null ? '' : encodeURIComponent(tagged)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns questions which have received no answers.
		 * Compare with /questions/unanswered which mearly returns questions that the sites consider insufficiently well answered.
		 * This method corresponds roughly with the this site tab.
		 * To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get questions/no-answers
		 * @param {string} tagged String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		QuestionsNo_answersGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(tagged: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions/no-answers?tagged=' + (tagged == null ? '' : encodeURIComponent(tagged)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns questions the site considers to be unanswered.
		 * Note that just because a question has an answer, that does not mean it is considered answered. While the rules are subject to change, at this time a question must have at least one upvoted answer to be considered answered.
		 * To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
		 * Compare with /questions/no-answers.
		 * This method corresponds roughly with the unanswered tab.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get questions/unanswered
		 * @param {string} tagged String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		QuestionsUnansweredGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(tagged: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions/unanswered?tagged=' + (tagged == null ? '' : encodeURIComponent(tagged)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the questions identified in {ids}.
		 * This is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get questions/{ids}
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Questions_idsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions/' + (ids == null ? '' : encodeURIComponent(ids)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the answers to a set of questions identified in id.
		 * This method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
		 * The sorts accepted by this method operate on the follow fields of the answer object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of answers.
		 * Get questions/{ids}/answers
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Questions_idsAnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions/' + (ids == null ? '' : encodeURIComponent(ids)) + '/answers&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the comments on a question.
		 * If you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
		 * The sorts accepted by this method operate on the follow fields of the comment object:
		 * - creation - creation_date
		 * - votes - score
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of comments.
		 * Get questions/{ids}/comments
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Questions_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions/' + (ids == null ? '' : encodeURIComponent(ids)) + '/comments&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets questions which link to those questions identified in {ids}.
		 * This method only considers questions that are linked within a site, and will never return questions from another Stack Exchange site.
		 * A question is considered "linked" when it explicitly includes a hyperlink to another question, there are no other heuristics.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get questions/{ids}/linked
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = rank => none
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = rank => none
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Questions_idsLinkedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Questions_idsLinkedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions/' + (ids == null ? '' : encodeURIComponent(ids)) + '/linked&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns questions that the site considers related to those identified in {ids}.
		 * The algorithm for determining if questions are related is not documented, and subject to change at any time. Futhermore, these values are very heavily cached, and may not update immediately after a question has been editted. It is also not guaranteed that a question will be considered related to any number (even non-zero) of questions, and a consumer should be able to handle a variable number of returned questions.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get questions/{ids}/related
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = rank => none
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = rank => none
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Questions_idsRelatedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Questions_idsLinkedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions/' + (ids == null ? '' : encodeURIComponent(ids)) + '/related&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a subset of the events that have happened to the questions identified in id.
		 * This provides data similar to that found on a question's timeline page.
		 * Voting data is scrubbed to deter inferencing of voter identity.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
		 * This method returns a list of question timeline events.
		 * Get questions/{ids}/timeline
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Questions_idsTimelineGetByFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'questions/' + (ids == null ? '' : encodeURIComponent(ids)) + '/timeline&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns edit revisions identified by ids in {ids}.
		 * {ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
		 * This method returns a list of revisions.
		 * Get revisions/{ids}
		 * @param {string} ids Guid list (semicolon delimited).
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Revisions_idsGetByFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'revisions/' + (ids == null ? '' : encodeURIComponent(ids)) + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches a site for any questions which fit the given criteria.
		 * This method is intentionally quite limited. For more general searching, you should use a proper internet search engine restricted to the domain of the site in question.
		 * At least one of tagged or intitle must be set on this method. nottagged is only used if tagged is also set, for performance reasons.
		 * tagged and nottagged are semi-colon delimited list of tags. At least 1 tag in tagged will be on each returned question if it is passed, making it the OR equivalent of the AND version of tagged on /questions.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * - relevance - matches the relevance tab on the site itself Does not accept min or max
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get search
		 * @param {string} tagged String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = relevance => none
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = relevance => none
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @param {string} nottagged String list (semicolon delimited).
		 * @return {void} OK
		 */
		SearchGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndIntitleAndNottagged(tagged: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: SearchGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndIntitleAndNottaggedSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, intitle: string | null | undefined, nottagged: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search?tagged=' + (tagged == null ? '' : encodeURIComponent(tagged)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)) + '&intitle=' + (intitle == null ? '' : encodeURIComponent(intitle)) + '&nottagged=' + (nottagged == null ? '' : encodeURIComponent(nottagged)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches a site for any questions which fit the given criteria.
		 * Search criteria are expressed using the following parameters:
		 * - q - a free form text parameter, will match all question properties based on an undocumented algorithm.
		 * - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.
		 * - answers - the minimum number of answers returned questions must have.
		 * - body - text which must appear in returned questions' bodies.
		 * - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.
		 * - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.
		 * - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.
		 * - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.
		 * - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.
		 * - title - text which must appear in returned questions' titles.
		 * - user - the id of the user who must own the questions returned.
		 * - url - a url which must be contained in a post, may include a wildcard.
		 * - views - the minimum number of views returned questions must have.
		 * - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.
		 * At least one additional parameter must be set if nottagged is set, for performance reasons.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * - relevance - matches the relevance tab on the site itself Does not accept min or max
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get search/advanced
		 * @param {string} tagged String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = relevance => none
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = relevance => none
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @param {string} nottagged String list (semicolon delimited).
		 * @return {void} OK
		 */
		SearchAdvancedGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndAcceptedAndAnswersAndBodyAndClosedAndMigratedAndNoticeAndNottaggedAndQAndTitleAndUrlAndUserAndViewsAndWiki(tagged: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: SearchGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndIntitleAndNottaggedSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, accepted: SearchAdvancedGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndAcceptedAndAnswersAndBodyAndClosedAndMigratedAndNoticeAndNottaggedAndQAndTitleAndUrlAndUserAndViewsAndWikiAccepted | null | undefined, answers: number | null | undefined, body: string | null | undefined, closed: SearchAdvancedGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndAcceptedAndAnswersAndBodyAndClosedAndMigratedAndNoticeAndNottaggedAndQAndTitleAndUrlAndUserAndViewsAndWikiAccepted | null | undefined, migrated: SearchAdvancedGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndAcceptedAndAnswersAndBodyAndClosedAndMigratedAndNoticeAndNottaggedAndQAndTitleAndUrlAndUserAndViewsAndWikiAccepted | null | undefined, notice: SearchAdvancedGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndAcceptedAndAnswersAndBodyAndClosedAndMigratedAndNoticeAndNottaggedAndQAndTitleAndUrlAndUserAndViewsAndWikiAccepted | null | undefined, nottagged: string | null | undefined, q: string | null | undefined, title: string | null | undefined, url: string | null | undefined, user: number | null | undefined, views: number | null | undefined, wiki: SearchAdvancedGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndAcceptedAndAnswersAndBodyAndClosedAndMigratedAndNoticeAndNottaggedAndQAndTitleAndUrlAndUserAndViewsAndWikiAccepted | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'search/advanced?tagged=' + (tagged == null ? '' : encodeURIComponent(tagged)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)) + '&accepted=' + accepted + '&answers=' + answers + '&body=' + (body == null ? '' : encodeURIComponent(body)) + '&closed=' + closed + '&migrated=' + migrated + '&notice=' + notice + '&nottagged=' + (nottagged == null ? '' : encodeURIComponent(nottagged)) + '&q=' + (q == null ? '' : encodeURIComponent(q)) + '&title=' + (title == null ? '' : encodeURIComponent(title)) + '&url=' + (url == null ? '' : encodeURIComponent(url)) + '&user=' + user + '&views=' + views + '&wiki=' + wiki, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns questions which are similar to a hypothetical one based on a title and tag combination.
		 * This method is roughly equivalent to a site's related questions suggestion on the ask page.
		 * This method is useful for correlating data outside of a Stack Exchange site with similar content within one.
		 * Note that title must always be passed as a parameter. tagged and nottagged are optional, semi-colon delimited lists of tags.
		 * If tagged is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. nottagged is treated as a requirement, no questions will be returned with those tags.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * - relevance - order by "how similar" the questions are, most likely candidate first with a descending order Does not accept min or max
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get similar
		 * @param {string} tagged String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = relevance => none
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = relevance => none
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @param {string} nottagged String list (semicolon delimited).
		 * @return {void} OK
		 */
		SimilarGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndNottaggedAndTitle(tagged: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: SearchGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndIntitleAndNottaggedSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, nottagged: string | null | undefined, title: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'similar?tagged=' + (tagged == null ? '' : encodeURIComponent(tagged)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)) + '&nottagged=' + (nottagged == null ? '' : encodeURIComponent(nottagged)) + '&title=' + (title == null ? '' : encodeURIComponent(title)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all sites in the network.
		 * This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
		 * The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
		 * This method returns a list of sites.
		 * Get sites
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		SitesGetByPagesizeAndPageAndFilterAndCallback(pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sites?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all the suggested edits in the systems.
		 * This method returns a list of suggested-edits.
		 * The sorts accepted by this method operate on the follow fields of the suggested_edit object:
		 * - creation - creation_date
		 * - approval - approval_date Does not return unapproved suggested_edits
		 * - rejection - rejection_date Does not return unrejected suggested_edits
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * Get suggested-edits
		 * @param {string} max sort = creation => date
		 * sort = approval => date
		 * sort = rejection => date
		 * @param {string} min sort = creation => date
		 * sort = approval => date
		 * sort = rejection => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Suggested_editsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeSuggested_editsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'suggested-edits?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns suggested edits identified in ids.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.
		 * The sorts accepted by this method operate on the follow fields of the suggested_edit object:
		 * - creation - creation_date
		 * - approval - approval_date Does not return unapproved suggested_edits
		 * - rejection - rejection_date Does not return unrejected suggested_edits
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of suggested-edits.
		 * Get suggested-edits/{ids}
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = approval => date
		 * sort = rejection => date
		 * @param {string} min sort = creation => date
		 * sort = approval => date
		 * sort = rejection => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Suggested_edits_idsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeSuggested_editsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'suggested-edits/' + (ids == null ? '' : encodeURIComponent(ids)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the tags found on a site.
		 * The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
		 * This method returns a list of tags.
		 * The sorts accepted by this method operate on the follow fields of the tag object:
		 * - popular - count
		 * - activity - the creation_date of the last question asked with the tag
		 * - name - name
		 * popular is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * Get tags
		 * @param {string} max sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {string} min sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		TagsGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(inname: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeTagsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags?inname=' + (inname == null ? '' : encodeURIComponent(inname)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the tags found on a site that only moderators can use.
		 * The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
		 * This method returns a list of tags.
		 * The sorts accepted by this method operate on the follow fields of the tag object:
		 * - popular - count
		 * - activity - the creation_date of the last question asked with the tag
		 * - name - name
		 * popular is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * Get tags/moderator-only
		 * @param {string} max sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {string} min sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		TagsModerator_onlyGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(inname: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeTagsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/moderator-only?inname=' + (inname == null ? '' : encodeURIComponent(inname)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the tags found on a site that fulfill required tag constraints on questions.
		 * The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
		 * This method returns a list of tags.
		 * The sorts accepted by this method operate on the follow fields of the tag object:
		 * - popular - count
		 * - activity - the creation_date of the last question asked with the tag
		 * - name - name
		 * popular is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * Get tags/required
		 * @param {string} max sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {string} min sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		TagsRequiredGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(inname: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeTagsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/required?inname=' + (inname == null ? '' : encodeURIComponent(inname)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all tag synonyms found a site.
		 * When searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.
		 * The sorts accepted by this method operate on the follow fields of the tag_synonym object:
		 * - creation - creation_date
		 * - applied - applied_count
		 * - activity - last_applied_date
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of tag_synonyms.
		 * Get tags/synonyms
		 * @param {string} max sort = creation => date
		 * sort = applied => number
		 * sort = activity => date
		 * @param {string} min sort = creation => date
		 * sort = applied => number
		 * sort = activity => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		TagsSynonymsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: TagsSynonymsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/synonyms?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the frequently asked questions for the given set of tags in {tags}.
		 * For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
		 * {tags} can contain up to 5 individual tags per request.
		 * This method returns a list of questions.
		 * Get tags/{tags}/faq
		 * @param {string} tags String list (semicolon delimited).
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Tags_tagsFaqGetByPagesizeAndPageAndFilterAndCallbackAndSite(tags: string, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/' + (tags == null ? '' : encodeURIComponent(tags)) + '/faq&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns tag objects representing the tags in {tags} found on the site.
		 * This method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.
		 * This method returns a list of tags.
		 * The sorts accepted by this method operate on the follow fields of the tag object:
		 * - popular - count
		 * - activity - the creation_date of the last question asked with the tag
		 * - name - name
		 * popular is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * Get tags/{tags}/info
		 * @param {string} tags String list (semicolon delimited).
		 * @param {string} max sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {string} min sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Tags_tagsInfoGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(tags: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeTagsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/' + (tags == null ? '' : encodeURIComponent(tags)) + '/info&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the tags that are most related to those in {tags}.
		 * Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
		 * count on tag objects returned is the number of question with that tag that also share all those in {tags}.
		 * {tags} can contain up to 4 individual tags per request.
		 * This method returns a list of tags.
		 * Get tags/{tags}/related
		 * @param {string} tags String list (semicolon delimited).
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Tags_tagsRelatedGetByPagesizeAndPageAndFilterAndCallbackAndSite(tags: string, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/' + (tags == null ? '' : encodeURIComponent(tags)) + '/related&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.
		 * {tags} can contain up to 20 individual tags per request.
		 * The sorts accepted by this method operate on the follow fields of the tag_synonym object:
		 * - creation - creation_date
		 * - applied - applied_count
		 * - activity - last_applied_date
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of tag synonyms.
		 * Get tags/{tags}/synonyms
		 * @param {string} tags String list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = applied => number
		 * sort = activity => date
		 * @param {string} min sort = creation => date
		 * sort = applied => number
		 * sort = activity => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Tags_tagsSynonymsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(tags: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: TagsSynonymsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/' + (tags == null ? '' : encodeURIComponent(tags)) + '/synonyms&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the wikis that go with the given set of tags in {tags}.
		 * Be aware that not all tags have wikis.
		 * {tags} can contain up to 20 individual tags per request.
		 * This method returns a list of tag wikis.
		 * Get tags/{tags}/wikis
		 * @param {string} tags String list (semicolon delimited).
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Tags_tagsWikisGetByPagesizeAndPageAndFilterAndCallbackAndSite(tags: string, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/' + (tags == null ? '' : encodeURIComponent(tags)) + '/wikis&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
		 * This is a view onto the data presented on the tag info page on the sites.
		 * This method returns a list of tag score objects.
		 * Get tags/{tag}/top-answerers/{period}
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Tags_tagTop_answerers_periodGetByPagesizeAndPageAndFilterAndCallbackAndSite(tag: string, period: Tags_tagTop_answerers_periodGetByPagesizeAndPageAndFilterAndCallbackAndSitePeriod, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/' + (tag == null ? '' : encodeURIComponent(tag)) + '/top-answerers/' + period + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
		 * This is a view onto the data presented on the tag info page on the sites.
		 * This method returns a list of tag score objects.
		 * Get tags/{tag}/top-askers/{period}
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Tags_tagTop_askers_periodGetByPagesizeAndPageAndFilterAndCallbackAndSite(tag: string, period: Tags_tagTop_answerers_periodGetByPagesizeAndPageAndFilterAndCallbackAndSitePeriod, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tags/' + (tag == null ? '' : encodeURIComponent(tag)) + '/top-askers/' + period + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all users on a site.
		 * This method returns a list of users.
		 * The sorts accepted by this method operate on the follow fields of the user object:
		 * - reputation - reputation
		 * - creation - creation_date
		 * - name - display_name
		 * - modified - last_modified_date
		 * reputation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * The inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply "Kevin" or those with Kevin as one of (or part of) their names; such as "Kevin Montrose".
		 * Get users
		 * @param {string} max sort = reputation => number
		 * sort = creation => date
		 * sort = name => string
		 * sort = modified => date
		 * @param {string} min sort = reputation => number
		 * sort = creation => date
		 * sort = name => string
		 * sort = modified => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		UsersGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(inname: string | null | undefined, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users?inname=' + (inname == null ? '' : encodeURIComponent(inname)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets those users on a site who can exercise moderation powers.
		 * Note, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.
		 * The sorts accepted by this method operate on the follow fields of the user object:
		 * - reputation - reputation
		 * - creation - creation_date
		 * - name - display_name
		 * - modified - last_modified_date
		 * reputation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of users.
		 * Get users/moderators
		 * @param {string} max sort = reputation => number
		 * sort = creation => date
		 * sort = name => string
		 * sort = modified => date
		 * @param {string} min sort = reputation => number
		 * sort = creation => date
		 * sort = name => string
		 * sort = modified => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		UsersModeratorsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/moderators?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns those users on a site who both have moderator powers, and were actually elected.
		 * This method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).
		 * The sorts accepted by this method operate on the follow fields of the user object:
		 * - reputation - reputation
		 * - creation - creation_date
		 * - name - display_name
		 * - modified - last_modified_date
		 * reputation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of users.
		 * Get users/moderators/elected
		 * @param {string} max sort = reputation => number
		 * sort = creation => date
		 * sort = name => string
		 * sort = modified => date
		 * @param {string} min sort = reputation => number
		 * sort = creation => date
		 * sort = name => string
		 * sort = modified => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		UsersModeratorsElectedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/moderators/elected?order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the users identified in ids in {ids}.
		 * Typically this method will be called to fetch user profiles when you have obtained user ids from some other source, such as /questions.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the user object:
		 * - reputation - reputation
		 * - creation - creation_date
		 * - name - display_name
		 * - modified - last_modified_date
		 * reputation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of users.
		 * Get users/{ids}
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = reputation => number
		 * sort = creation => date
		 * sort = name => string
		 * sort = modified => date
		 * @param {string} min sort = reputation => number
		 * sort = creation => date
		 * sort = name => string
		 * sort = modified => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the answers the users in {ids} have posted.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the answer object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of answers.
		 * Get users/{ids}/answers
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsAnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/answers&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all of a user's associated accounts, given their account_ids in {ids}.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
		 * This method returns a list of network_users.
		 * Get users/{ids}/associated
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		Users_idsAssociatedGetByPagesizeAndPageAndFilterAndCallback(ids: string, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/associated&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the badges the users in {ids} have earned.
		 * Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
		 * This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
		 * For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
		 * rank is the default sort.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * This method returns a list of badges.
		 * Get users/{ids}/badges
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = rank => string
		 * sort = name => string
		 * sort = type => string
		 * sort = awarded => date
		 * @param {string} min sort = rank => string
		 * sort = name => string
		 * sort = type => string
		 * sort = awarded => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsBadgesGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Users_idsBadgesGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/badges&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the comments posted by users in {ids}.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the comment object:
		 * - creation - creation_date
		 * - votes - score
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of comments.
		 * Get users/{ids}/comments
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/comments&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.
		 * This method is useful for extracting conversations, especially over time or across multiple posts.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.
		 * The sorts accepted by this method operate on the follow fields of the comment object:
		 * - creation - creation_date
		 * - votes - score
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of comments.
		 * Get users/{ids}/comments/{toid}
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsComments_toidGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, toid: number, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/comments/' + toid + '&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the questions that users in {ids} have favorited.
		 * This method is effectively a view onto a user's favorites tab.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * - added - when the user favorited the question
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get users/{ids}/favorites
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = added => date
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * sort = added => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsFavoritesGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeFavoritesGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/favorites&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets all the comments that the users in {ids} were mentioned in.
		 * Note, to count as a mention the comment must be considered to be "in reply to" a user. Most importantly, this means that a comment can only be in reply to a single user.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the comment object:
		 * - creation - creation_date
		 * - votes - score
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of comments.
		 * Get users/{ids}/mentioned
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsMentionedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/mentioned&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a record of merges that have occurred involving the passed account ids.
		 * This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
		 * This is most useful when confirming that an account_id is in fact "new" to an application.
		 * Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
		 * Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
		 * This method returns a list of account_merge.
		 * Get users/{ids}/merges
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @return {void} OK
		 */
		Users_idsMergesGetByPagesizeAndPageAndFilterAndCallback(ids: string, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/merges&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the questions asked by the users in {ids}.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get users/{ids}/questions
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsQuestionsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/questions&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the questions on which the users in {ids} have active bounties.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get users/{ids}/questions/featured
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsQuestionsFeaturedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/questions/featured&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the questions asked by the users in {ids} which have no answers.
		 * Questions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get users/{ids}/questions/no-answers
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsQuestionsNo_answersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/questions/no-answers&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.
		 * Questions returned by this method have answers, but the owner has not opted to accept any of them.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get users/{ids}/questions/unaccepted
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsQuestionsUnacceptedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/questions/unaccepted&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.
		 * These rules are subject to change, but currently any question without at least one upvoted or accepted answer is considered unanswered.
		 * To get the set of questions that a user probably considers unanswered, the returned questions should be unioned with those returned by /users/{id}/questions/no-answers. These methods are distinct so that truly unanswered (that is, zero posted answers) questions can be easily separated from mearly poorly or inadequately answered ones.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get users/{ids}/questions/unanswered
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsQuestionsUnansweredGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/questions/unanswered&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a subset of the reputation changes for users in {ids}.
		 * Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * This method returns a list of reputation objects.
		 * Get users/{ids}/reputation
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsReputationGetByFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/reputation&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns users' public reputation history.
		 * This method returns a list of reputation_history.
		 * Get users/{ids}/reputation-history
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsReputation_historyGetByPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/reputation-history&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the suggested edits a users in {ids} have submitted.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the suggested_edit object:
		 * - creation - creation_date
		 * - approval - approval_date Does not return unapproved suggested_edits
		 * - rejection - rejection_date Does not return unrejected suggested_edits
		 * creation is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of suggested-edits.
		 * Get users/{ids}/suggested-edits
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = creation => date
		 * sort = approval => date
		 * sort = rejection => date
		 * @param {string} min sort = creation => date
		 * sort = approval => date
		 * sort = rejection => date
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsSuggested_editsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeSuggested_editsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/suggested-edits&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the tags the users identified in {ids} have been active in.
		 * This route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * The sorts accepted by this method operate on the follow fields of the tag object:
		 * - popular - count
		 * - activity - the creation_date of the last question asked with the tag
		 * - name - name
		 * popular is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of tags.
		 * Get users/{ids}/tags
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {string} max sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {string} min sort = popular => number
		 * sort = activity => date
		 * sort = name => string
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsTagsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: MeTagsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/tags&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a subset of the actions the users in {ids} have taken on the site.
		 * This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
		 * {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
		 * This method returns a list of user timeline objects.
		 * Get users/{ids}/timeline
		 * @param {string} ids Number list (semicolon delimited).
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idsTimelineGetByFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(ids: string, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + (ids == null ? '' : encodeURIComponent(ids)) + '/timeline&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user's inbox.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
		 * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
		 * This method returns a list of inbox items.
		 * Get users/{id}/inbox
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idInboxGetByPagesizeAndPageAndFilterAndCallbackAndSite(id: number, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/inbox?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the unread items in a user's inbox.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
		 * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
		 * This method returns a list of inbox items.
		 * Get users/{id}/inbox/unread
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @param {number} since Unix date.
		 * @return {void} OK
		 */
		Users_idInboxUnreadGetByPagesizeAndPageAndFilterAndCallbackAndSiteAndSince(id: number, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, since: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/inbox/unread?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)) + '&since=' + since, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user's notifications.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method returns a list of notifications.
		 * Get users/{id}/notifications
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idNotificationsGetByPagesizeAndPageAndFilterAndCallbackAndSite(id: number, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/notifications?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user's unread notifications.
		 * This method requires an access_token, with a scope containing "read_inbox".
		 * This method returns a list of notifications.
		 * Get users/{id}/notifications/unread
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idNotificationsUnreadGetByPagesizeAndPageAndFilterAndCallbackAndSite(id: number, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/notifications/unread?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the privileges a user has.
		 * Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
		 * {id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
		 * This method returns a list of privileges.
		 * Get users/{id}/privileges
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idPrivilegesGetByPagesizeAndPageAndFilterAndCallbackAndSite(id: number, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/privileges?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a user's full reputation history, including private events.
		 * This method requires an access_token, with a scope containing "private_info".
		 * This method returns a list of reputation_history.
		 * Get users/{id}/reputation-history/full
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idReputation_historyFullGetByPagesizeAndPageAndFilterAndCallbackAndSite(id: number, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/reputation-history/full?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the top 30 answers a user has posted in response to questions with the given tags.
		 * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
		 * The sorts accepted by this method operate on the follow fields of the answer object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of answers.
		 * Get users/{id}/tags/{tags}/top-answers
		 * @param {string} tags String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idTags_tagsTop_answersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(id: number, tags: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/tags/' + (tags == null ? '' : encodeURIComponent(tags)) + '/top-answers&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the top 30 questions a user has asked with the given tags.
		 * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
		 * The sorts accepted by this method operate on the follow fields of the question object:
		 * - activity - last_activity_date
		 * - creation - creation_date
		 * - votes - score
		 * activity is the default sort.
		 * It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.
		 * This method returns a list of questions.
		 * Get users/{id}/tags/{tags}/top-questions
		 * @param {string} tags String list (semicolon delimited).
		 * @param {string} max sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {string} min sort = activity => date
		 * sort = creation => date
		 * sort = votes => number
		 * @param {number} fromdate Unix date.
		 * @param {number} todate Unix date.
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idTags_tagsTop_questionsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSite(id: number, tags: string, order: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder | null | undefined, max: string | null | undefined, min: string | null | undefined, sort: AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort | null | undefined, fromdate: number | null | undefined, todate: number | null | undefined, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/tags/' + (tags == null ? '' : encodeURIComponent(tags)) + '/top-questions&order=' + order + '&max=' + (max == null ? '' : encodeURIComponent(max)) + '&min=' + (min == null ? '' : encodeURIComponent(min)) + '&sort=' + sort + '&fromdate=' + fromdate + '&todate=' + todate + '&pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single user's top tags by answer score.
		 * This a subset of the data returned on a user's tags tab.
		 * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
		 * This method returns a list of top_tag objects.
		 * Get users/{id}/top-answer-tags
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idTop_answer_tagsGetByPagesizeAndPageAndFilterAndCallbackAndSite(id: number, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/top-answer-tags?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single user's top tags by question score.
		 * This a subset of the data returned on a user's tags tab.
		 * {id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
		 * This method returns a list of top_tag objects.
		 * Get users/{id}/top-question-tags
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idTop_question_tagsGetByPagesizeAndPageAndFilterAndCallbackAndSite(id: number, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/top-question-tags?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the write permissions a user has via the api.
		 * The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
		 * This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
		 * This method returns a list of write_permissions.
		 * Get users/{id}/write-permissions
		 * @param {string} filter #Discussion
		 * The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.
		 * An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.
		 * Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.
		 * The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).
		 * #Safety
		 * Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
		 * Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).
		 * When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.
		 * #Built In Filters
		 * The following filters are built in:
		 * default, each type documents which fields are returned under the default filter (for example, answers).
		 * withbody, which is default plus the *.body fields
		 * none, which is empty
		 * total, which includes just .total
		 * #Compatibility with V1.x
		 * For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.
		 * @param {string} callback All API responses are JSON, we do support JSONP with the callback query parameter.
		 * @param {string} site Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.
		 * @return {void} OK
		 */
		Users_idWrite_permissionsGetByPagesizeAndPageAndFilterAndCallbackAndSite(id: number, pagesize: number | null | undefined, page: number | null | undefined, filter: string | null | undefined, callback: string | null | undefined, site: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/' + id + '/write-permissions?pagesize=' + pagesize + '&page=' + page + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&site=' + (site == null ? '' : encodeURIComponent(site)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteOrder { desc = 'desc', asc = 'asc' }

	export enum AnswersGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { activity = 'activity', creation = 'creation', votes = 'votes' }

	export enum Answers_idsCommentsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { creation = 'creation', votes = 'votes' }

	export enum BadgesGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { rank = 'rank', name = 'name', type = 'type' }

	export enum BadgesNameGetByInnameAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { rank = 'rank', name = 'name' }

	export enum MeGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { reputation = 'reputation', creation = 'creation', name = 'name', modified = 'modified' }

	export enum MeFavoritesGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { activity = 'activity', creation = 'creation', votes = 'votes', added = 'added' }

	export enum MeSuggested_editsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { creation = 'creation', approval = 'approval', rejection = 'rejection' }

	export enum MeTagsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { popular = 'popular', activity = 'activity', name = 'name' }

	export enum MeTags_tagsTop_questionsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { activity = 'activity', creation = 'creation', votes = 'votes', hot = 'hot', week = 'week', month = 'month', relevance = 'relevance' }

	export enum Questions_idsLinkedGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { activity = 'activity', creation = 'creation', votes = 'votes', rank = 'rank' }

	export enum SearchGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndIntitleAndNottaggedSort { activity = 'activity', creation = 'creation', votes = 'votes', relevance = 'relevance' }

	export enum SearchAdvancedGetByTaggedAndOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteAndAcceptedAndAnswersAndBodyAndClosedAndMigratedAndNoticeAndNottaggedAndQAndTitleAndUrlAndUserAndViewsAndWikiAccepted { true = 'true', false = 'false' }

	export enum TagsSynonymsGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { creation = 'creation', applied = 'applied', activity = 'activity' }

	export enum Tags_tagTop_answerers_periodGetByPagesizeAndPageAndFilterAndCallbackAndSitePeriod { all_time = 'all_time', month = 'month' }

	export enum Users_idsBadgesGetByOrderAndMaxAndMinAndSortAndFromdateAndTodateAndPagesizeAndPageAndFilterAndCallbackAndSiteSort { rank = 'rank', name = 'name', type = 'type', awarded = 'awarded' }

}

