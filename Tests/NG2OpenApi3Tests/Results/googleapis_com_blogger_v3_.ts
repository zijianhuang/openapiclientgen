import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Blog {

		/** The JSON custom meta-data for the Blog. */
		customMetaData?: string | null;

		/** The description of this blog. This is displayed underneath the title. */
		description?: string | null;

		/** The identifier for this resource. */
		id?: string | null;

		/** The kind of this entry. Always blogger#blog. */
		kind?: string | null;

		/** The locale this Blog is set to. */
		locale?: BlogLocale;

		/** The name of this blog. This is displayed as the title. */
		name?: string | null;

		/** The container of pages in this blog. */
		pages?: BlogPages;

		/** The container of posts in this blog. */
		posts?: BlogPosts;

		/** RFC 3339 date-time when this blog was published. */
		published?: string | null;

		/** The API REST URL to fetch this resource from. */
		selfLink?: string | null;

		/** The status of the blog. */
		status?: BlogStatus | null;

		/** RFC 3339 date-time when this blog was last updated. */
		updated?: string | null;

		/** The URL where this blog is published. */
		url?: string | null;
	}
	export interface BlogFormProperties {

		/** The JSON custom meta-data for the Blog. */
		customMetaData: FormControl<string | null | undefined>,

		/** The description of this blog. This is displayed underneath the title. */
		description: FormControl<string | null | undefined>,

		/** The identifier for this resource. */
		id: FormControl<string | null | undefined>,

		/** The kind of this entry. Always blogger#blog. */
		kind: FormControl<string | null | undefined>,

		/** The name of this blog. This is displayed as the title. */
		name: FormControl<string | null | undefined>,

		/** RFC 3339 date-time when this blog was published. */
		published: FormControl<string | null | undefined>,

		/** The API REST URL to fetch this resource from. */
		selfLink: FormControl<string | null | undefined>,

		/** The status of the blog. */
		status: FormControl<BlogStatus | null | undefined>,

		/** RFC 3339 date-time when this blog was last updated. */
		updated: FormControl<string | null | undefined>,

		/** The URL where this blog is published. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateBlogFormGroup() {
		return new FormGroup<BlogFormProperties>({
			customMetaData: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<BlogStatus | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlogLocale {

		/** The country this blog's locale is set to. */
		country?: string | null;

		/** The language this blog is authored in. */
		language?: string | null;

		/** The language variant this blog is authored in. */
		variant?: string | null;
	}
	export interface BlogLocaleFormProperties {

		/** The country this blog's locale is set to. */
		country: FormControl<string | null | undefined>,

		/** The language this blog is authored in. */
		language: FormControl<string | null | undefined>,

		/** The language variant this blog is authored in. */
		variant: FormControl<string | null | undefined>,
	}
	export function CreateBlogLocaleFormGroup() {
		return new FormGroup<BlogLocaleFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			variant: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlogPages {

		/** The URL of the container for pages in this blog. */
		selfLink?: string | null;

		/** The count of pages in this blog. */
		totalItems?: number | null;
	}
	export interface BlogPagesFormProperties {

		/** The URL of the container for pages in this blog. */
		selfLink: FormControl<string | null | undefined>,

		/** The count of pages in this blog. */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateBlogPagesFormGroup() {
		return new FormGroup<BlogPagesFormProperties>({
			selfLink: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BlogPosts {

		/** The List of Posts for this Blog. */
		items?: Array<Post>;

		/** The URL of the container for posts in this blog. */
		selfLink?: string | null;

		/** The count of posts in this blog. */
		totalItems?: number | null;
	}
	export interface BlogPostsFormProperties {

		/** The URL of the container for posts in this blog. */
		selfLink: FormControl<string | null | undefined>,

		/** The count of posts in this blog. */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateBlogPostsFormGroup() {
		return new FormGroup<BlogPostsFormProperties>({
			selfLink: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Post {

		/** The author of this Post. */
		author?: PostAuthor;

		/** Data about the blog containing this Post. */
		blog?: PostBlog;

		/** The content of the Post. May contain HTML markup. */
		content?: string | null;

		/** The JSON meta-data for the Post. */
		customMetaData?: string | null;

		/** Etag of the resource. */
		etag?: string | null;

		/** The identifier of this Post. */
		id?: string | null;

		/** Display image for the Post. */
		PostImages?: Array<PostImages>;

		/** The kind of this entity. Always blogger#post. */
		kind?: string | null;

		/** The list of labels this Post was tagged with. */
		labels?: Array<string>;

		/** The location for geotagged posts. */
		location?: PostLocation;

		/** RFC 3339 date-time when this Post was published. */
		published?: string | null;

		/** Comment control and display setting for readers of this post. */
		readerComments?: PostReaderComments | null;

		/** The container of comments on this Post. */
		replies?: PostReplies;

		/** The API REST URL to fetch this resource from. */
		selfLink?: string | null;

		/** Status of the post. Only set for admin-level requests. */
		status?: PostStatus | null;

		/** The title of the Post. */
		title?: string | null;

		/** The title link URL, similar to atom's related link. */
		titleLink?: string | null;

		/** RFC 3339 date-time when this Post was last trashed. */
		trashed?: string | null;

		/** RFC 3339 date-time when this Post was last updated. */
		updated?: string | null;

		/** The URL where this Post is displayed. */
		url?: string | null;
	}
	export interface PostFormProperties {

		/** The content of the Post. May contain HTML markup. */
		content: FormControl<string | null | undefined>,

		/** The JSON meta-data for the Post. */
		customMetaData: FormControl<string | null | undefined>,

		/** Etag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The identifier of this Post. */
		id: FormControl<string | null | undefined>,

		/** The kind of this entity. Always blogger#post. */
		kind: FormControl<string | null | undefined>,

		/** RFC 3339 date-time when this Post was published. */
		published: FormControl<string | null | undefined>,

		/** Comment control and display setting for readers of this post. */
		readerComments: FormControl<PostReaderComments | null | undefined>,

		/** The API REST URL to fetch this resource from. */
		selfLink: FormControl<string | null | undefined>,

		/** Status of the post. Only set for admin-level requests. */
		status: FormControl<PostStatus | null | undefined>,

		/** The title of the Post. */
		title: FormControl<string | null | undefined>,

		/** The title link URL, similar to atom's related link. */
		titleLink: FormControl<string | null | undefined>,

		/** RFC 3339 date-time when this Post was last trashed. */
		trashed: FormControl<string | null | undefined>,

		/** RFC 3339 date-time when this Post was last updated. */
		updated: FormControl<string | null | undefined>,

		/** The URL where this Post is displayed. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePostFormGroup() {
		return new FormGroup<PostFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			customMetaData: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<string | null | undefined>(undefined),
			readerComments: new FormControl<PostReaderComments | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PostStatus | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			titleLink: new FormControl<string | null | undefined>(undefined),
			trashed: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostAuthor {

		/** The display name. */
		displayName?: string | null;

		/** The identifier of the creator. */
		id?: string | null;

		/** The creator's avatar. */
		image?: PostAuthorImage;

		/** The URL of the creator's Profile page. */
		url?: string | null;
	}
	export interface PostAuthorFormProperties {

		/** The display name. */
		displayName: FormControl<string | null | undefined>,

		/** The identifier of the creator. */
		id: FormControl<string | null | undefined>,

		/** The URL of the creator's Profile page. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePostAuthorFormGroup() {
		return new FormGroup<PostAuthorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostAuthorImage {

		/** The creator's avatar URL. */
		url?: string | null;
	}
	export interface PostAuthorImageFormProperties {

		/** The creator's avatar URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePostAuthorImageFormGroup() {
		return new FormGroup<PostAuthorImageFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostBlog {

		/** The identifier of the Blog that contains this Post. */
		id?: string | null;
	}
	export interface PostBlogFormProperties {

		/** The identifier of the Blog that contains this Post. */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePostBlogFormGroup() {
		return new FormGroup<PostBlogFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostImages {
		url?: string | null;
	}
	export interface PostImagesFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function CreatePostImagesFormGroup() {
		return new FormGroup<PostImagesFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostLocation {

		/** Location's latitude. */
		lat?: number | null;

		/** Location's longitude. */
		lng?: number | null;

		/** Location name. */
		name?: string | null;

		/** Location's viewport span. Can be used when rendering a map preview. */
		span?: string | null;
	}
	export interface PostLocationFormProperties {

		/** Location's latitude. */
		lat: FormControl<number | null | undefined>,

		/** Location's longitude. */
		lng: FormControl<number | null | undefined>,

		/** Location name. */
		name: FormControl<string | null | undefined>,

		/** Location's viewport span. Can be used when rendering a map preview. */
		span: FormControl<string | null | undefined>,
	}
	export function CreatePostLocationFormGroup() {
		return new FormGroup<PostLocationFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined),
			lng: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			span: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PostReaderComments { ALLOW = 0, DONT_ALLOW_SHOW_EXISTING = 1, DONT_ALLOW_HIDE_EXISTING = 2 }

	export interface PostReplies {

		/** The List of Comments for this Post. */
		items?: Array<Comment>;

		/** The URL of the comments on this post. */
		selfLink?: string | null;

		/** The count of comments on this post. */
		totalItems?: string | null;
	}
	export interface PostRepliesFormProperties {

		/** The URL of the comments on this post. */
		selfLink: FormControl<string | null | undefined>,

		/** The count of comments on this post. */
		totalItems: FormControl<string | null | undefined>,
	}
	export function CreatePostRepliesFormGroup() {
		return new FormGroup<PostRepliesFormProperties>({
			selfLink: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Comment {

		/** The author of this Comment. */
		author?: CommentAuthor;

		/** Data about the blog containing this comment. */
		blog?: CommentBlog;

		/** The actual content of the comment. May include HTML markup. */
		content?: string | null;

		/** The identifier for this resource. */
		id?: string | null;

		/** Data about the comment this is in reply to. */
		inReplyTo?: CommentInReplyTo;

		/** The kind of this entry. Always blogger#comment. */
		kind?: string | null;

		/** Data about the post containing this comment. */
		post?: CommentPost;

		/** RFC 3339 date-time when this comment was published. */
		published?: string | null;

		/** The API REST URL to fetch this resource from. */
		selfLink?: string | null;

		/** The status of the comment (only populated for admin users). */
		status?: CommentStatus | null;

		/** RFC 3339 date-time when this comment was last updated. */
		updated?: string | null;
	}
	export interface CommentFormProperties {

		/** The actual content of the comment. May include HTML markup. */
		content: FormControl<string | null | undefined>,

		/** The identifier for this resource. */
		id: FormControl<string | null | undefined>,

		/** The kind of this entry. Always blogger#comment. */
		kind: FormControl<string | null | undefined>,

		/** RFC 3339 date-time when this comment was published. */
		published: FormControl<string | null | undefined>,

		/** The API REST URL to fetch this resource from. */
		selfLink: FormControl<string | null | undefined>,

		/** The status of the comment (only populated for admin users). */
		status: FormControl<CommentStatus | null | undefined>,

		/** RFC 3339 date-time when this comment was last updated. */
		updated: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<CommentStatus | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentAuthor {

		/** The display name. */
		displayName?: string | null;

		/** The identifier of the creator. */
		id?: string | null;

		/** The creator's avatar. */
		image?: CommentAuthorImage;

		/** The URL of the creator's Profile page. */
		url?: string | null;
	}
	export interface CommentAuthorFormProperties {

		/** The display name. */
		displayName: FormControl<string | null | undefined>,

		/** The identifier of the creator. */
		id: FormControl<string | null | undefined>,

		/** The URL of the creator's Profile page. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCommentAuthorFormGroup() {
		return new FormGroup<CommentAuthorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentAuthorImage {

		/** The creator's avatar URL. */
		url?: string | null;
	}
	export interface CommentAuthorImageFormProperties {

		/** The creator's avatar URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCommentAuthorImageFormGroup() {
		return new FormGroup<CommentAuthorImageFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentBlog {

		/** The identifier of the blog containing this comment. */
		id?: string | null;
	}
	export interface CommentBlogFormProperties {

		/** The identifier of the blog containing this comment. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCommentBlogFormGroup() {
		return new FormGroup<CommentBlogFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentInReplyTo {

		/** The identified of the parent of this comment. */
		id?: string | null;
	}
	export interface CommentInReplyToFormProperties {

		/** The identified of the parent of this comment. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCommentInReplyToFormGroup() {
		return new FormGroup<CommentInReplyToFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentPost {

		/** The identifier of the post containing this comment. */
		id?: string | null;
	}
	export interface CommentPostFormProperties {

		/** The identifier of the post containing this comment. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCommentPostFormGroup() {
		return new FormGroup<CommentPostFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommentStatus { LIVE = 0, EMPTIED = 1, PENDING = 2, SPAM = 3 }

	export enum PostStatus { LIVE = 0, DRAFT = 1, SCHEDULED = 2, SOFT_TRASHED = 3 }

	export enum BlogStatus { LIVE = 0, DELETED = 1 }

	export interface BlogList {

		/** Admin level list of blog per-user information. */
		blogUserInfos?: Array<BlogUserInfo>;

		/** The list of Blogs this user has Authorship or Admin rights over. */
		items?: Array<Blog>;

		/** The kind of this entity. Always blogger#blogList. */
		kind?: string | null;
	}
	export interface BlogListFormProperties {

		/** The kind of this entity. Always blogger#blogList. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBlogListFormGroup() {
		return new FormGroup<BlogListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlogUserInfo {
		blog?: Blog;
		blog_user_info?: BlogPerUserInfo;

		/** The kind of this entity. Always blogger#blogUserInfo. */
		kind?: string | null;
	}
	export interface BlogUserInfoFormProperties {

		/** The kind of this entity. Always blogger#blogUserInfo. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateBlogUserInfoFormGroup() {
		return new FormGroup<BlogUserInfoFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlogPerUserInfo {

		/** ID of the Blog resource. */
		blogId?: string | null;

		/** True if the user has Admin level access to the blog. */
		hasAdminAccess?: boolean | null;

		/** The kind of this entity. Always blogger#blogPerUserInfo. */
		kind?: string | null;

		/** The Photo Album Key for the user when adding photos to the blog. */
		photosAlbumKey?: string | null;

		/** Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER). */
		role?: BlogPerUserInfoRole | null;

		/** ID of the User. */
		userId?: string | null;
	}
	export interface BlogPerUserInfoFormProperties {

		/** ID of the Blog resource. */
		blogId: FormControl<string | null | undefined>,

		/** True if the user has Admin level access to the blog. */
		hasAdminAccess: FormControl<boolean | null | undefined>,

		/** The kind of this entity. Always blogger#blogPerUserInfo. */
		kind: FormControl<string | null | undefined>,

		/** The Photo Album Key for the user when adding photos to the blog. */
		photosAlbumKey: FormControl<string | null | undefined>,

		/** Access permissions that the user has for the blog (ADMIN, AUTHOR, or READER). */
		role: FormControl<BlogPerUserInfoRole | null | undefined>,

		/** ID of the User. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateBlogPerUserInfoFormGroup() {
		return new FormGroup<BlogPerUserInfoFormProperties>({
			blogId: new FormControl<string | null | undefined>(undefined),
			hasAdminAccess: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			photosAlbumKey: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<BlogPerUserInfoRole | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BlogPerUserInfoRole { VIEW_TYPE_UNSPECIFIED = 0, READER = 1, AUTHOR = 2, ADMIN = 3 }

	export interface CommentList {

		/** Etag of the response. */
		etag?: string | null;

		/** The List of Comments for a Post. */
		items?: Array<Comment>;

		/** The kind of this entry. Always blogger#commentList. */
		kind?: string | null;

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken?: string | null;

		/** Pagination token to fetch the previous page, if one exists. */
		prevPageToken?: string | null;
	}
	export interface CommentListFormProperties {

		/** Etag of the response. */
		etag: FormControl<string | null | undefined>,

		/** The kind of this entry. Always blogger#commentList. */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Pagination token to fetch the previous page, if one exists. */
		prevPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCommentListFormGroup() {
		return new FormGroup<CommentListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Page {

		/** The author of this Page. */
		author?: PageAuthor;

		/** Data about the blog containing this Page. */
		blog?: PageBlog;

		/** The body content of this Page, in HTML. */
		content?: string | null;

		/** Etag of the resource. */
		etag?: string | null;

		/** The identifier for this resource. */
		id?: string | null;

		/** The kind of this entity. Always blogger#page. */
		kind?: string | null;

		/** RFC 3339 date-time when this Page was published. */
		published?: string | null;

		/** The API REST URL to fetch this resource from. */
		selfLink?: string | null;

		/** The status of the page for admin resources (either LIVE or DRAFT). */
		status?: PageStatus | null;

		/** The title of this entity. This is the name displayed in the Admin user interface. */
		title?: string | null;

		/** RFC 3339 date-time when this Page was trashed. */
		trashed?: string | null;

		/** RFC 3339 date-time when this Page was last updated. */
		updated?: string | null;

		/** The URL that this Page is displayed at. */
		url?: string | null;
	}
	export interface PageFormProperties {

		/** The body content of this Page, in HTML. */
		content: FormControl<string | null | undefined>,

		/** Etag of the resource. */
		etag: FormControl<string | null | undefined>,

		/** The identifier for this resource. */
		id: FormControl<string | null | undefined>,

		/** The kind of this entity. Always blogger#page. */
		kind: FormControl<string | null | undefined>,

		/** RFC 3339 date-time when this Page was published. */
		published: FormControl<string | null | undefined>,

		/** The API REST URL to fetch this resource from. */
		selfLink: FormControl<string | null | undefined>,

		/** The status of the page for admin resources (either LIVE or DRAFT). */
		status: FormControl<PageStatus | null | undefined>,

		/** The title of this entity. This is the name displayed in the Admin user interface. */
		title: FormControl<string | null | undefined>,

		/** RFC 3339 date-time when this Page was trashed. */
		trashed: FormControl<string | null | undefined>,

		/** RFC 3339 date-time when this Page was last updated. */
		updated: FormControl<string | null | undefined>,

		/** The URL that this Page is displayed at. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<PageStatus | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			trashed: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageAuthor {

		/** The display name. */
		displayName?: string | null;

		/** The identifier of the creator. */
		id?: string | null;

		/** The creator's avatar. */
		image?: PageAuthorImage;

		/** The URL of the creator's Profile page. */
		url?: string | null;
	}
	export interface PageAuthorFormProperties {

		/** The display name. */
		displayName: FormControl<string | null | undefined>,

		/** The identifier of the creator. */
		id: FormControl<string | null | undefined>,

		/** The URL of the creator's Profile page. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePageAuthorFormGroup() {
		return new FormGroup<PageAuthorFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageAuthorImage {

		/** The creator's avatar URL. */
		url?: string | null;
	}
	export interface PageAuthorImageFormProperties {

		/** The creator's avatar URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePageAuthorImageFormGroup() {
		return new FormGroup<PageAuthorImageFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageBlog {

		/** The identifier of the blog containing this page. */
		id?: string | null;
	}
	export interface PageBlogFormProperties {

		/** The identifier of the blog containing this page. */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePageBlogFormGroup() {
		return new FormGroup<PageBlogFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PageStatus { LIVE = 0, DRAFT = 1, SOFT_TRASHED = 2 }

	export interface PageList {

		/** Etag of the response. */
		etag?: string | null;

		/** The list of Pages for a Blog. */
		items?: Array<Page>;

		/** The kind of this entity. Always blogger#pageList. */
		kind?: string | null;

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken?: string | null;
	}
	export interface PageListFormProperties {

		/** Etag of the response. */
		etag: FormControl<string | null | undefined>,

		/** The kind of this entity. Always blogger#pageList. */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePageListFormGroup() {
		return new FormGroup<PageListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pageviews {

		/** Blog Id. */
		blogId?: string | null;

		/** The container of posts in this blog. */
		PageviewsCounts?: Array<PageviewsCounts>;

		/** The kind of this entry. Always blogger#page_views. */
		kind?: string | null;
	}
	export interface PageviewsFormProperties {

		/** Blog Id. */
		blogId: FormControl<string | null | undefined>,

		/** The kind of this entry. Always blogger#page_views. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePageviewsFormGroup() {
		return new FormGroup<PageviewsFormProperties>({
			blogId: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PageviewsCounts {

		/** Count of page views for the given time range. */
		count?: string | null;

		/** Time range the given count applies to. */
		timeRange?: PageviewsCountsTimeRange | null;
	}
	export interface PageviewsCountsFormProperties {

		/** Count of page views for the given time range. */
		count: FormControl<string | null | undefined>,

		/** Time range the given count applies to. */
		timeRange: FormControl<PageviewsCountsTimeRange | null | undefined>,
	}
	export function CreatePageviewsCountsFormGroup() {
		return new FormGroup<PageviewsCountsFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			timeRange: new FormControl<PageviewsCountsTimeRange | null | undefined>(undefined),
		});

	}

	export enum PageviewsCountsTimeRange { ALL_TIME = 0, THIRTY_DAYS = 1, SEVEN_DAYS = 2 }

	export interface PostList {

		/** Etag of the response. */
		etag?: string | null;

		/** The list of Posts for this Blog. */
		items?: Array<Post>;

		/** The kind of this entity. Always blogger#postList. */
		kind?: string | null;

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken?: string | null;

		/** Pagination token to fetch the previous page, if one exists. */
		prevPageToken?: string | null;
	}
	export interface PostListFormProperties {

		/** Etag of the response. */
		etag: FormControl<string | null | undefined>,

		/** The kind of this entity. Always blogger#postList. */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Pagination token to fetch the previous page, if one exists. */
		prevPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePostListFormGroup() {
		return new FormGroup<PostListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			prevPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostPerUserInfo {

		/** ID of the Blog that the post resource belongs to. */
		blogId?: string | null;

		/** True if the user has Author level access to the post. */
		hasEditAccess?: boolean | null;

		/** The kind of this entity. Always blogger#postPerUserInfo. */
		kind?: string | null;

		/** ID of the Post resource. */
		postId?: string | null;

		/** ID of the User. */
		userId?: string | null;
	}
	export interface PostPerUserInfoFormProperties {

		/** ID of the Blog that the post resource belongs to. */
		blogId: FormControl<string | null | undefined>,

		/** True if the user has Author level access to the post. */
		hasEditAccess: FormControl<boolean | null | undefined>,

		/** The kind of this entity. Always blogger#postPerUserInfo. */
		kind: FormControl<string | null | undefined>,

		/** ID of the Post resource. */
		postId: FormControl<string | null | undefined>,

		/** ID of the User. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreatePostPerUserInfoFormGroup() {
		return new FormGroup<PostPerUserInfoFormProperties>({
			blogId: new FormControl<string | null | undefined>(undefined),
			hasEditAccess: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			postId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostUserInfo {

		/** The kind of this entity. Always blogger#postUserInfo. */
		kind?: string | null;
		post?: Post;
		post_user_info?: PostPerUserInfo;
	}
	export interface PostUserInfoFormProperties {

		/** The kind of this entity. Always blogger#postUserInfo. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreatePostUserInfoFormGroup() {
		return new FormGroup<PostUserInfoFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostUserInfosList {

		/** The list of Posts with User information for the post, for this Blog. */
		items?: Array<PostUserInfo>;

		/** The kind of this entity. Always blogger#postList. */
		kind?: string | null;

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken?: string | null;
	}
	export interface PostUserInfosListFormProperties {

		/** The kind of this entity. Always blogger#postList. */
		kind: FormControl<string | null | undefined>,

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePostUserInfosListFormGroup() {
		return new FormGroup<PostUserInfosListFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {

		/** Profile summary information. */
		about?: string | null;

		/** The container of blogs for this user. */
		blogs?: UserBlogs;

		/** The timestamp of when this profile was created, in seconds since epoch. */
		created?: string | null;

		/** The display name. */
		displayName?: string | null;

		/** The identifier for this User. */
		id?: string | null;

		/** The kind of this entity. Always blogger#user. */
		kind?: string | null;

		/** This user's locale */
		locale?: UserLocale;

		/** The API REST URL to fetch this resource from. */
		selfLink?: string | null;

		/** The user's profile page. */
		url?: string | null;
	}
	export interface UserFormProperties {

		/** Profile summary information. */
		about: FormControl<string | null | undefined>,

		/** The timestamp of when this profile was created, in seconds since epoch. */
		created: FormControl<string | null | undefined>,

		/** The display name. */
		displayName: FormControl<string | null | undefined>,

		/** The identifier for this User. */
		id: FormControl<string | null | undefined>,

		/** The kind of this entity. Always blogger#user. */
		kind: FormControl<string | null | undefined>,

		/** The API REST URL to fetch this resource from. */
		selfLink: FormControl<string | null | undefined>,

		/** The user's profile page. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			about: new FormControl<string | null | undefined>(undefined),
			created: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserBlogs {

		/** The URL of the Blogs for this user. */
		selfLink?: string | null;
	}
	export interface UserBlogsFormProperties {

		/** The URL of the Blogs for this user. */
		selfLink: FormControl<string | null | undefined>,
	}
	export function CreateUserBlogsFormGroup() {
		return new FormGroup<UserBlogsFormProperties>({
			selfLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserLocale {

		/** The country this blog's locale is set to. */
		country?: string | null;

		/** The language this blog is authored in. */
		language?: string | null;

		/** The language variant this blog is authored in. */
		variant?: string | null;
	}
	export interface UserLocaleFormProperties {

		/** The country this blog's locale is set to. */
		country: FormControl<string | null | undefined>,

		/** The language this blog is authored in. */
		language: FormControl<string | null | undefined>,

		/** The language variant this blog is authored in. */
		variant: FormControl<string | null | undefined>,
	}
	export function CreateUserLocaleFormGroup() {
		return new FormGroup<UserLocaleFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			variant: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a blog by url.
		 * Get v3/blogs/byurl
		 * @return {Blog} Successful response
		 */
		Blogger_blogs_getByUrl(url: string, view: BlogPerUserInfoRole | null | undefined): Observable<Blog> {
			return this.http.get<Blog>(this.baseUri + 'v3/blogs/byurl?url=' + (url == null ? '' : encodeURIComponent(url)) + '&view=' + view, {});
		}

		/**
		 * Gets a blog by id.
		 * Get v3/blogs/{blogId}
		 * @return {Blog} Successful response
		 */
		Blogger_blogs_get(blogId: string, maxPosts: number | null | undefined, view: BlogPerUserInfoRole | null | undefined): Observable<Blog> {
			return this.http.get<Blog>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '&maxPosts=' + maxPosts + '&view=' + view, {});
		}

		/**
		 * Lists comments by blog.
		 * Get v3/blogs/{blogId}/comments
		 * @return {CommentList} Successful response
		 */
		Blogger_comments_listByBlog(blogId: string, endDate: string | null | undefined, fetchBodies: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, startDate: string | null | undefined, status: Array<CommentStatus> | null | undefined): Observable<CommentList> {
			return this.http.get<CommentList>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/comments&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&fetchBodies=' + fetchBodies + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&' + status?.map(z => `status=${z}`).join('&'), {});
		}

		/**
		 * Lists pages.
		 * Get v3/blogs/{blogId}/pages
		 * @return {PageList} Successful response
		 */
		Blogger_pages_list(blogId: string, fetchBodies: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, status: Array<PageStatus> | null | undefined, view: BlogPerUserInfoRole | null | undefined): Observable<PageList> {
			return this.http.get<PageList>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages&fetchBodies=' + fetchBodies + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + status?.map(z => `status=${z}`).join('&') + '&view=' + view, {});
		}

		/**
		 * Inserts a page.
		 * Post v3/blogs/{blogId}/pages
		 * @return {Page} Successful response
		 */
		Blogger_pages_insert(blogId: string, isDraft: boolean | null | undefined, requestBody: Page): Observable<Page> {
			return this.http.post<Page>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages&isDraft=' + isDraft, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a page by blog id and page id.
		 * Delete v3/blogs/{blogId}/pages/{pageId}
		 * @param {boolean} useTrash Move to Trash if possible
		 * @return {void} Successful response
		 */
		Blogger_pages_delete(blogId: string, pageId: string, useTrash: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '&useTrash=' + useTrash, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a page by blog id and page id.
		 * Get v3/blogs/{blogId}/pages/{pageId}
		 * @return {Page} Successful response
		 */
		Blogger_pages_get(blogId: string, pageId: string, view: BlogPerUserInfoRole | null | undefined): Observable<Page> {
			return this.http.get<Page>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '&view=' + view, {});
		}

		/**
		 * Patches a page.
		 * Patch v3/blogs/{blogId}/pages/{pageId}
		 * @return {Page} Successful response
		 */
		Blogger_pages_patch(blogId: string, pageId: string, publish: boolean | null | undefined, revert: boolean | null | undefined, requestBody: Page): Observable<Page> {
			return this.http.patch<Page>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '&publish=' + publish + '&revert=' + revert, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a page by blog id and page id.
		 * Put v3/blogs/{blogId}/pages/{pageId}
		 * @return {Page} Successful response
		 */
		Blogger_pages_update(blogId: string, pageId: string, publish: boolean | null | undefined, revert: boolean | null | undefined, requestBody: Page): Observable<Page> {
			return this.http.put<Page>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '&publish=' + publish + '&revert=' + revert, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Publishes a page.
		 * Post v3/blogs/{blogId}/pages/{pageId}/publish
		 * @return {Page} Successful response
		 */
		Blogger_pages_publish(blogId: string, pageId: string): Observable<Page> {
			return this.http.post<Page>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '/publish', null, {});
		}

		/**
		 * Reverts a published or scheduled page to draft state.
		 * Post v3/blogs/{blogId}/pages/{pageId}/revert
		 * @return {Page} Successful response
		 */
		Blogger_pages_revert(blogId: string, pageId: string): Observable<Page> {
			return this.http.post<Page>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '/revert', null, {});
		}

		/**
		 * Gets page views by blog id.
		 * Get v3/blogs/{blogId}/pageviews
		 * @return {Pageviews} Successful response
		 */
		Blogger_pageViews_get(blogId: string, range: Array<string> | null | undefined): Observable<Pageviews> {
			return this.http.get<Pageviews>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pageviews&' + range?.map(z => `range=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Lists posts.
		 * Get v3/blogs/{blogId}/posts
		 * @param {Blogger_posts_listSortOption} sortOption Sort direction applied to post list.
		 * @return {PostList} Successful response
		 */
		Blogger_posts_list(blogId: string, endDate: string | null | undefined, fetchBodies: boolean | null | undefined, fetchImages: boolean | null | undefined, labels: string | null | undefined, maxResults: number | null | undefined, orderBy: Blogger_posts_listOrderBy | null | undefined, pageToken: string | null | undefined, sortOption: Blogger_posts_listSortOption | null | undefined, startDate: string | null | undefined, status: Array<PostStatus> | null | undefined, view: BlogPerUserInfoRole | null | undefined): Observable<PostList> {
			return this.http.get<PostList>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&fetchBodies=' + fetchBodies + '&fetchImages=' + fetchImages + '&labels=' + (labels == null ? '' : encodeURIComponent(labels)) + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&sortOption=' + sortOption + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&' + status?.map(z => `status=${z}`).join('&') + '&view=' + view, {});
		}

		/**
		 * Inserts a post.
		 * Post v3/blogs/{blogId}/posts
		 * @return {Post} Successful response
		 */
		Blogger_posts_insert(blogId: string, fetchBody: boolean | null | undefined, fetchImages: boolean | null | undefined, isDraft: boolean | null | undefined, requestBody: Post): Observable<Post> {
			return this.http.post<Post>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts&fetchBody=' + fetchBody + '&fetchImages=' + fetchImages + '&isDraft=' + isDraft, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a post by path.
		 * Get v3/blogs/{blogId}/posts/bypath
		 * @return {Post} Successful response
		 */
		Blogger_posts_getByPath(blogId: string, path: string, maxComments: number | null | undefined, view: BlogPerUserInfoRole | null | undefined): Observable<Post> {
			return this.http.get<Post>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/bypath&path=' + (path == null ? '' : encodeURIComponent(path)) + '&maxComments=' + maxComments + '&view=' + view, {});
		}

		/**
		 * Searches for posts matching given query terms in the specified blog.
		 * Get v3/blogs/{blogId}/posts/search
		 * @return {PostList} Successful response
		 */
		Blogger_posts_search(blogId: string, q: string, fetchBodies: boolean | null | undefined, orderBy: Blogger_posts_listOrderBy | null | undefined): Observable<PostList> {
			return this.http.get<PostList>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/search&q=' + (q == null ? '' : encodeURIComponent(q)) + '&fetchBodies=' + fetchBodies + '&orderBy=' + orderBy, {});
		}

		/**
		 * Deletes a post by blog id and post id.
		 * Delete v3/blogs/{blogId}/posts/{postId}
		 * @param {boolean} useTrash Move to Trash if possible
		 * @return {void} Successful response
		 */
		Blogger_posts_delete(blogId: string, postId: string, useTrash: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '&useTrash=' + useTrash, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a post by blog id and post id
		 * Get v3/blogs/{blogId}/posts/{postId}
		 * @return {Post} Successful response
		 */
		Blogger_posts_get(blogId: string, postId: string, fetchBody: boolean | null | undefined, fetchImages: boolean | null | undefined, maxComments: number | null | undefined, view: BlogPerUserInfoRole | null | undefined): Observable<Post> {
			return this.http.get<Post>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '&fetchBody=' + fetchBody + '&fetchImages=' + fetchImages + '&maxComments=' + maxComments + '&view=' + view, {});
		}

		/**
		 * Patches a post.
		 * Patch v3/blogs/{blogId}/posts/{postId}
		 * @return {Post} Successful response
		 */
		Blogger_posts_patch(blogId: string, postId: string, fetchBody: boolean | null | undefined, fetchImages: boolean | null | undefined, maxComments: number | null | undefined, publish: boolean | null | undefined, revert: boolean | null | undefined, requestBody: Post): Observable<Post> {
			return this.http.patch<Post>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '&fetchBody=' + fetchBody + '&fetchImages=' + fetchImages + '&maxComments=' + maxComments + '&publish=' + publish + '&revert=' + revert, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a post by blog id and post id.
		 * Put v3/blogs/{blogId}/posts/{postId}
		 * @return {Post} Successful response
		 */
		Blogger_posts_update(blogId: string, postId: string, fetchBody: boolean | null | undefined, fetchImages: boolean | null | undefined, maxComments: number | null | undefined, publish: boolean | null | undefined, revert: boolean | null | undefined, requestBody: Post): Observable<Post> {
			return this.http.put<Post>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '&fetchBody=' + fetchBody + '&fetchImages=' + fetchImages + '&maxComments=' + maxComments + '&publish=' + publish + '&revert=' + revert, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists comments.
		 * Get v3/blogs/{blogId}/posts/{postId}/comments
		 * @return {CommentList} Successful response
		 */
		Blogger_comments_list(blogId: string, postId: string, endDate: string | null | undefined, fetchBodies: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, startDate: string | null | undefined, status: CommentStatus | null | undefined, view: BlogPerUserInfoRole | null | undefined): Observable<CommentList> {
			return this.http.get<CommentList>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&fetchBodies=' + fetchBodies + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&status=' + status + '&view=' + view, {});
		}

		/**
		 * Deletes a comment by blog id, post id and comment id.
		 * Delete v3/blogs/{blogId}/posts/{postId}/comments/{commentId}
		 * @return {void} Successful response
		 */
		Blogger_comments_delete(blogId: string, postId: string, commentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a comment by id.
		 * Get v3/blogs/{blogId}/posts/{postId}/comments/{commentId}
		 * @return {Comment} Successful response
		 */
		Blogger_comments_get(blogId: string, postId: string, commentId: string, view: BlogPerUserInfoRole | null | undefined): Observable<Comment> {
			return this.http.get<Comment>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '&view=' + view, {});
		}

		/**
		 * Marks a comment as not spam by blog id, post id and comment id.
		 * Post v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve
		 * @return {Comment} Successful response
		 */
		Blogger_comments_approve(blogId: string, postId: string, commentId: string): Observable<Comment> {
			return this.http.post<Comment>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/approve', null, {});
		}

		/**
		 * Removes the content of a comment by blog id, post id and comment id.
		 * Post v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent
		 * @return {Comment} Successful response
		 */
		Blogger_comments_removeContent(blogId: string, postId: string, commentId: string): Observable<Comment> {
			return this.http.post<Comment>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/removecontent', null, {});
		}

		/**
		 * Marks a comment as spam by blog id, post id and comment id.
		 * Post v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam
		 * @return {Comment} Successful response
		 */
		Blogger_comments_markAsSpam(blogId: string, postId: string, commentId: string): Observable<Comment> {
			return this.http.post<Comment>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/spam', null, {});
		}

		/**
		 * Publishes a post.
		 * Post v3/blogs/{blogId}/posts/{postId}/publish
		 * @return {Post} Successful response
		 */
		Blogger_posts_publish(blogId: string, postId: string, publishDate: string | null | undefined): Observable<Post> {
			return this.http.post<Post>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/publish&publishDate=' + (publishDate == null ? '' : encodeURIComponent(publishDate)), null, {});
		}

		/**
		 * Reverts a published or scheduled post to draft state.
		 * Post v3/blogs/{blogId}/posts/{postId}/revert
		 * @return {Post} Successful response
		 */
		Blogger_posts_revert(blogId: string, postId: string): Observable<Post> {
			return this.http.post<Post>(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/revert', null, {});
		}

		/**
		 * Gets one user by user_id.
		 * Get v3/users/{userId}
		 * @return {User} Successful response
		 */
		Blogger_users_get(userId: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Lists blogs by user.
		 * Get v3/users/{userId}/blogs
		 * @param {Array<BlogStatus>} status Default value of status is LIVE.
		 * @return {BlogList} Successful response
		 */
		Blogger_blogs_listByUser(userId: string, fetchUserInfo: boolean | null | undefined, role: Array<BlogPerUserInfoRole> | null | undefined, status: Array<BlogStatus> | null | undefined, view: BlogPerUserInfoRole | null | undefined): Observable<BlogList> {
			return this.http.get<BlogList>(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/blogs&fetchUserInfo=' + fetchUserInfo + '&' + role?.map(z => `role=${z}`).join('&') + '&' + status?.map(z => `status=${z}`).join('&') + '&view=' + view, {});
		}

		/**
		 * Gets one blog and user info pair by blog id and user id.
		 * Get v3/users/{userId}/blogs/{blogId}
		 * @return {BlogUserInfo} Successful response
		 */
		Blogger_blogUserInfos_get(userId: string, blogId: string, maxPosts: number | null | undefined): Observable<BlogUserInfo> {
			return this.http.get<BlogUserInfo>(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '&maxPosts=' + maxPosts, {});
		}

		/**
		 * Lists post and user info pairs.
		 * Get v3/users/{userId}/blogs/{blogId}/posts
		 * @return {PostUserInfosList} Successful response
		 */
		Blogger_postUserInfos_list(userId: string, blogId: string, endDate: string | null | undefined, fetchBodies: boolean | null | undefined, labels: string | null | undefined, maxResults: number | null | undefined, orderBy: Blogger_posts_listOrderBy | null | undefined, pageToken: string | null | undefined, startDate: string | null | undefined, status: Array<PostStatus> | null | undefined, view: BlogPerUserInfoRole | null | undefined): Observable<PostUserInfosList> {
			return this.http.get<PostUserInfosList>(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&fetchBodies=' + fetchBodies + '&labels=' + (labels == null ? '' : encodeURIComponent(labels)) + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&' + status?.map(z => `status=${z}`).join('&') + '&view=' + view, {});
		}

		/**
		 * Gets one post and user info pair, by post_id and user_id.
		 * Get v3/users/{userId}/blogs/{blogId}/posts/{postId}
		 * @return {PostUserInfo} Successful response
		 */
		Blogger_postUserInfos_get(userId: string, blogId: string, postId: string, maxComments: number | null | undefined): Observable<PostUserInfo> {
			return this.http.get<PostUserInfo>(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '&maxComments=' + maxComments, {});
		}
	}

	export enum Blogger_posts_listOrderBy { ORDER_BY_UNSPECIFIED = 0, PUBLISHED = 1, UPDATED = 2 }

	export enum Blogger_posts_listSortOption { SORT_OPTION_UNSPECIFIED = 0, DESCENDING = 1, ASCENDING = 2 }

}

