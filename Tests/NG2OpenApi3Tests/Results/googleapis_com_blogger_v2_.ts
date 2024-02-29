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

		/**
		 * The count of pages in this blog.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalItems?: number | null;
	}
	export interface BlogPagesFormProperties {

		/** The URL of the container for pages in this blog. */
		selfLink: FormControl<string | null | undefined>,

		/**
		 * The count of pages in this blog.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/**
		 * The count of posts in this blog.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		totalItems?: number | null;
	}
	export interface BlogPostsFormProperties {

		/** The URL of the container for posts in this blog. */
		selfLink: FormControl<string | null | undefined>,

		/**
		 * The count of posts in this blog.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
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

		/**
		 * Location's latitude.
		 * Type: double
		 */
		lat?: number | null;

		/**
		 * Location's longitude.
		 * Type: double
		 */
		lng?: number | null;

		/** Location name. */
		name?: string | null;

		/** Location's viewport span. Can be used when rendering a map preview. */
		span?: string | null;
	}
	export interface PostLocationFormProperties {

		/**
		 * Location's latitude.
		 * Type: double
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Location's longitude.
		 * Type: double
		 */
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

	export enum PostReaderComments { ALLOW = 'ALLOW', DONT_ALLOW_SHOW_EXISTING = 'DONT_ALLOW_SHOW_EXISTING', DONT_ALLOW_HIDE_EXISTING = 'DONT_ALLOW_HIDE_EXISTING' }

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

	export enum CommentStatus { LIVE = 'LIVE', EMPTIED = 'EMPTIED', PENDING = 'PENDING', SPAM = 'SPAM' }

	export enum PostStatus { LIVE = 'LIVE', DRAFT = 'DRAFT', SCHEDULED = 'SCHEDULED', SOFT_TRASHED = 'SOFT_TRASHED' }

	export enum BlogStatus { LIVE = 'LIVE', DELETED = 'DELETED' }

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

	export enum BlogPerUserInfoRole { VIEW_TYPE_UNSPECIFIED = 'VIEW_TYPE_UNSPECIFIED', READER = 'READER', AUTHOR = 'AUTHOR', ADMIN = 'ADMIN' }

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

	export enum PageStatus { LIVE = 'LIVE', DRAFT = 'DRAFT', SOFT_TRASHED = 'SOFT_TRASHED' }

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
		 * Gets a blog by id.
		 * Get v2/blogs/{blogId}
		 * @return {Blog} Successful response
		 */
		Blogger_blogs_get(blogId: string): Observable<Blog> {
			return this.http.get<Blog>(this.baseUri + 'v2/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)), {});
		}

		/**
		 * Lists pages.
		 * Get v2/blogs/{blogId}/pages
		 * @return {PageList} Successful response
		 */
		Blogger_pages_list(blogId: string, fetchBodies: boolean | null | undefined): Observable<PageList> {
			return this.http.get<PageList>(this.baseUri + 'v2/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages&fetchBodies=' + fetchBodies, {});
		}

		/**
		 * Gets a page by blog id and page id.
		 * Get v2/blogs/{blogId}/pages/{pageId}
		 * @return {Page} Successful response
		 */
		Blogger_pages_get(blogId: string, pageId: string): Observable<Page> {
			return this.http.get<Page>(this.baseUri + 'v2/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)), {});
		}

		/**
		 * Lists posts.
		 * Get v2/blogs/{blogId}/posts
		 * @param {number} maxResults Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {PostList} Successful response
		 */
		Blogger_posts_list(blogId: string, fetchBodies: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, startDate: string | null | undefined): Observable<PostList> {
			return this.http.get<PostList>(this.baseUri + 'v2/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts&fetchBodies=' + fetchBodies + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)), {});
		}

		/**
		 * Gets a post by blog id and post id
		 * Get v2/blogs/{blogId}/posts/{postId}
		 * @return {Post} Successful response
		 */
		Blogger_posts_get(blogId: string, postId: string): Observable<Post> {
			return this.http.get<Post>(this.baseUri + 'v2/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)), {});
		}

		/**
		 * Lists comments.
		 * Get v2/blogs/{blogId}/posts/{postId}/comments
		 * @param {number} maxResults Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {CommentList} Successful response
		 */
		Blogger_comments_list(blogId: string, postId: string, fetchBodies: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, startDate: string | null | undefined): Observable<CommentList> {
			return this.http.get<CommentList>(this.baseUri + 'v2/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments&fetchBodies=' + fetchBodies + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)), {});
		}

		/**
		 * Gets a comment by blog id, post id and comment id.
		 * Get v2/blogs/{blogId}/posts/{postId}/comments/{commentId}
		 * @return {Comment} Successful response
		 */
		Blogger_comments_get(blogId: string, postId: string, commentId: string): Observable<Comment> {
			return this.http.get<Comment>(this.baseUri + 'v2/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)), {});
		}

		/**
		 * Gets a user by user id.
		 * Get v2/users/{userId}
		 * @return {User} Successful response
		 */
		Blogger_users_get(userId: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Lists blogs by user id, possibly filtered.
		 * Get v2/users/{userId}/blogs
		 * @return {BlogList} Successful response
		 */
		Blogger_blogs_list(userId: string): Observable<BlogList> {
			return this.http.get<BlogList>(this.baseUri + 'v2/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/blogs', {});
		}
	}

}

