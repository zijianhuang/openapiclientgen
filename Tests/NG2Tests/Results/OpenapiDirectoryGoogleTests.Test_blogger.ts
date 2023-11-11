import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
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
		locale?: BlogLocale | null;

		/** The name of this blog. This is displayed as the title. */
		name?: string | null;

		/** The container of pages in this blog. */
		pages?: BlogPages | null;

		/** The container of posts in this blog. */
		posts?: BlogPosts | null;

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

	export interface BlogLocale {

		/** The country this blog's locale is set to. */
		country?: string | null;

		/** The language this blog is authored in. */
		language?: string | null;

		/** The language variant this blog is authored in. */
		variant?: string | null;
	}

	export interface BlogPages {

		/** The URL of the container for pages in this blog. */
		selfLink?: string | null;

		/** The count of pages in this blog. */
		totalItems?: number | null;
	}

	export interface BlogPosts {

		/** The List of Posts for this Blog. */
		items?: Array<Post> | null;

		/** The URL of the container for posts in this blog. */
		selfLink?: string | null;

		/** The count of posts in this blog. */
		totalItems?: number | null;
	}

	export interface Post {

		/** The author of this Post. */
		author?: PostAuthor | null;

		/** Data about the blog containing this Post. */
		blog?: PostBlog | null;

		/** The content of the Post. May contain HTML markup. */
		content?: string | null;

		/** The JSON meta-data for the Post. */
		customMetaData?: string | null;

		/** Etag of the resource. */
		etag?: string | null;

		/** The identifier of this Post. */
		id?: string | null;

		/** Display image for the Post. */
		PostImages?: Array<PostImages> | null;

		/** The kind of this entity. Always blogger#post. */
		kind?: string | null;

		/** The list of labels this Post was tagged with. */
		labels?: Array<string> | null;

		/** The location for geotagged posts. */
		location?: PostLocation | null;

		/** RFC 3339 date-time when this Post was published. */
		published?: string | null;

		/** Comment control and display setting for readers of this post. */
		readerComments?: PostReaderComments | null;

		/** The container of comments on this Post. */
		replies?: PostReplies | null;

		/** The API REST URL to fetch this resource from. */
		selfLink?: string | null;

		/** Status of the post. Only set for admin-level requests. */
		status?: PostStatus | null;

		/** The title of the Post. */
		title?: string | null;

		/** The title link URL, similar to atom's related link. */
		titleLink?: string | null;

		/** RFC 3339 date-time when this Post was last updated. */
		updated?: string | null;

		/** The URL where this Post is displayed. */
		url?: string | null;
	}

	export interface PostAuthor {

		/** The display name. */
		displayName?: string | null;

		/** The identifier of the creator. */
		id?: string | null;

		/** The creator's avatar. */
		image?: PostAuthorImage | null;

		/** The URL of the creator's Profile page. */
		url?: string | null;
	}

	export interface PostAuthorImage {

		/** The creator's avatar URL. */
		url?: string | null;
	}

	export interface PostBlog {

		/** The identifier of the Blog that contains this Post. */
		id?: string | null;
	}

	export interface PostImages {
		url?: string | null;
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

	export enum PostReaderComments { ALLOW = 0, DONT_ALLOW_SHOW_EXISTING = 1, DONT_ALLOW_HIDE_EXISTING = 2 }

	export interface PostReplies {

		/** The List of Comments for this Post. */
		items?: Array<Comment> | null;

		/** The URL of the comments on this post. */
		selfLink?: string | null;

		/** The count of comments on this post. */
		totalItems?: string | null;
	}

	export interface Comment {

		/** The author of this Comment. */
		author?: CommentAuthor | null;

		/** Data about the blog containing this comment. */
		blog?: CommentBlog | null;

		/** The actual content of the comment. May include HTML markup. */
		content?: string | null;

		/** The identifier for this resource. */
		id?: string | null;

		/** Data about the comment this is in reply to. */
		inReplyTo?: CommentInReplyTo | null;

		/** The kind of this entry. Always blogger#comment. */
		kind?: string | null;

		/** Data about the post containing this comment. */
		post?: CommentPost | null;

		/** RFC 3339 date-time when this comment was published. */
		published?: string | null;

		/** The API REST URL to fetch this resource from. */
		selfLink?: string | null;

		/** The status of the comment (only populated for admin users). */
		status?: CommentStatus | null;

		/** RFC 3339 date-time when this comment was last updated. */
		updated?: string | null;
	}

	export interface CommentAuthor {

		/** The display name. */
		displayName?: string | null;

		/** The identifier of the creator. */
		id?: string | null;

		/** The creator's avatar. */
		image?: CommentAuthorImage | null;

		/** The URL of the creator's Profile page. */
		url?: string | null;
	}

	export interface CommentAuthorImage {

		/** The creator's avatar URL. */
		url?: string | null;
	}

	export interface CommentBlog {

		/** The identifier of the blog containing this comment. */
		id?: string | null;
	}

	export interface CommentInReplyTo {

		/** The identified of the parent of this comment. */
		id?: string | null;
	}

	export interface CommentPost {

		/** The identifier of the post containing this comment. */
		id?: string | null;
	}

	export enum CommentStatus { LIVE = 0, EMPTIED = 1, PENDING = 2, SPAM = 3 }

	export enum PostStatus { LIVE = 0, DRAFT = 1, SCHEDULED = 2 }

	export enum BlogStatus { LIVE = 0, DELETED = 1 }

	export interface BlogList {

		/** Admin level list of blog per-user information. */
		blogUserInfos?: Array<BlogUserInfo> | null;

		/** The list of Blogs this user has Authorship or Admin rights over. */
		items?: Array<Blog> | null;

		/** The kind of this entity. Always blogger#blogList. */
		kind?: string | null;
	}

	export interface BlogUserInfo {
		blog?: Blog | null;
		blog_user_info?: BlogPerUserInfo | null;

		/** The kind of this entity. Always blogger#blogUserInfo. */
		kind?: string | null;
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

		/**
		 * Access permissions that the user has for the blog (ADMIN, AUTHOR, or
		 * READER).
		 */
		role?: BlogPerUserInfoRole | null;

		/** ID of the User. */
		userId?: string | null;
	}

	export enum BlogPerUserInfoRole { VIEW_TYPE_UNSPECIFIED = 0, READER = 1, AUTHOR = 2, ADMIN = 3 }

	export interface CommentList {

		/** Etag of the response. */
		etag?: string | null;

		/** The List of Comments for a Post. */
		items?: Array<Comment> | null;

		/** The kind of this entry. Always blogger#commentList. */
		kind?: string | null;

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken?: string | null;

		/** Pagination token to fetch the previous page, if one exists. */
		prevPageToken?: string | null;
	}

	export interface Page {

		/** The author of this Page. */
		author?: PageAuthor | null;

		/** Data about the blog containing this Page. */
		blog?: PageBlog | null;

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

		/**
		 * The title of this entity. This is the name displayed in the Admin user
		 * interface.
		 */
		title?: string | null;

		/** RFC 3339 date-time when this Page was last updated. */
		updated?: string | null;

		/** The URL that this Page is displayed at. */
		url?: string | null;
	}

	export interface PageAuthor {

		/** The display name. */
		displayName?: string | null;

		/** The identifier of the creator. */
		id?: string | null;

		/** The creator's avatar. */
		image?: PageAuthorImage | null;

		/** The URL of the creator's Profile page. */
		url?: string | null;
	}

	export interface PageAuthorImage {

		/** The creator's avatar URL. */
		url?: string | null;
	}

	export interface PageBlog {

		/** The identifier of the blog containing this page. */
		id?: string | null;
	}

	export enum PageStatus { LIVE = 0, DRAFT = 1 }

	export interface PageList {

		/** Etag of the response. */
		etag?: string | null;

		/** The list of Pages for a Blog. */
		items?: Array<Page> | null;

		/** The kind of this entity. Always blogger#pageList. */
		kind?: string | null;

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken?: string | null;
	}

	export interface Pageviews {

		/** Blog Id. */
		blogId?: string | null;

		/** The container of posts in this blog. */
		PageviewsCounts?: Array<PageviewsCounts> | null;

		/** The kind of this entry. Always blogger#page_views. */
		kind?: string | null;
	}

	export interface PageviewsCounts {

		/** Count of page views for the given time range. */
		count?: string | null;

		/** Time range the given count applies to. */
		timeRange?: PageviewsCountsTimeRange | null;
	}

	export enum PageviewsCountsTimeRange { ALL_TIME = 0, THIRTY_DAYS = 1, SEVEN_DAYS = 2 }

	export interface PostList {

		/** Etag of the response. */
		etag?: string | null;

		/** The list of Posts for this Blog. */
		items?: Array<Post> | null;

		/** The kind of this entity. Always blogger#postList. */
		kind?: string | null;

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken?: string | null;

		/** Pagination token to fetch the previous page, if one exists. */
		prevPageToken?: string | null;
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

	export interface PostUserInfo {

		/** The kind of this entity. Always blogger#postUserInfo. */
		kind?: string | null;
		post?: Post | null;
		post_user_info?: PostPerUserInfo | null;
	}

	export interface PostUserInfosList {

		/** The list of Posts with User information for the post, for this Blog. */
		items?: Array<PostUserInfo> | null;

		/** The kind of this entity. Always blogger#postList. */
		kind?: string | null;

		/** Pagination token to fetch the next page, if one exists. */
		nextPageToken?: string | null;
	}

	export interface User {

		/** Profile summary information. */
		about?: string | null;

		/** The container of blogs for this user. */
		blogs?: UserBlogs | null;

		/** The timestamp of when this profile was created, in seconds since epoch. */
		created?: string | null;

		/** The display name. */
		displayName?: string | null;

		/** The identifier for this User. */
		id?: string | null;

		/** The kind of this entity. Always blogger#user. */
		kind?: string | null;

		/** This user's locale */
		locale?: UserLocale | null;

		/** The API REST URL to fetch this resource from. */
		selfLink?: string | null;

		/** The user's profile page. */
		url?: string | null;
	}

	export interface UserBlogs {

		/** The URL of the Blogs for this user. */
		selfLink?: string | null;
	}

	export interface UserLocale {

		/** The country this blog's locale is set to. */
		country?: string | null;

		/** The language this blog is authored in. */
		language?: string | null;

		/** The language variant this blog is authored in. */
		variant?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a blog by url.
		 * Get v3/blogs/byurl
		 * @return {void} Successful response
		 */
		Blogger_blogs_getByUrl(url: string, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/byurl?url=' + (url == null ? '' : encodeURIComponent(url)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a blog by id.
		 * Get v3/blogs/{blogId}
		 * @return {void} Successful response
		 */
		Blogger_blogs_get(blogId: string, maxPosts: number, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '&maxPosts=' + maxPosts + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists comments by blog.
		 * Get v3/blogs/{blogId}/comments
		 * @return {void} Successful response
		 */
		Blogger_comments_listByBlog(blogId: string, endDate: string, fetchBodies: boolean, maxResults: number, pageToken: string, startDate: string, status: Array<CommentStatus>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/comments&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&fetchBodies=' + fetchBodies + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&' + status.map(z => `status=${z}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists pages.
		 * Get v3/blogs/{blogId}/pages
		 * @return {void} Successful response
		 */
		Blogger_pages_list(blogId: string, fetchBodies: boolean, maxResults: number, pageToken: string, status: Array<PageStatus>, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages&fetchBodies=' + fetchBodies + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + status.map(z => `status=${z}`).join('&') + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a page.
		 * Post v3/blogs/{blogId}/pages
		 * @return {void} Successful response
		 */
		Blogger_pages_insert(blogId: string, isDraft: boolean, requestBody: Page): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages&isDraft=' + isDraft, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a page by blog id and page id.
		 * Delete v3/blogs/{blogId}/pages/{pageId}
		 * @return {void} Successful response
		 */
		Blogger_pages_delete(blogId: string, pageId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a page by blog id and page id.
		 * Get v3/blogs/{blogId}/pages/{pageId}
		 * @return {void} Successful response
		 */
		Blogger_pages_get(blogId: string, pageId: string, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patches a page.
		 * Patch v3/blogs/{blogId}/pages/{pageId}
		 * @return {void} Successful response
		 */
		Blogger_pages_patch(blogId: string, pageId: string, publish: boolean, revert: boolean, requestBody: Page): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '&publish=' + publish + '&revert=' + revert, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a page by blog id and page id.
		 * Put v3/blogs/{blogId}/pages/{pageId}
		 * @return {void} Successful response
		 */
		Blogger_pages_update(blogId: string, pageId: string, publish: boolean, revert: boolean, requestBody: Page): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '&publish=' + publish + '&revert=' + revert, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publishes a page.
		 * Post v3/blogs/{blogId}/pages/{pageId}/publish
		 * @return {void} Successful response
		 */
		Blogger_pages_publish(blogId: string, pageId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '/publish', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reverts a published or scheduled page to draft state.
		 * Post v3/blogs/{blogId}/pages/{pageId}/revert
		 * @return {void} Successful response
		 */
		Blogger_pages_revert(blogId: string, pageId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pages/' + (pageId == null ? '' : encodeURIComponent(pageId)) + '/revert', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets page views by blog id.
		 * Get v3/blogs/{blogId}/pageviews
		 * @return {void} Successful response
		 */
		Blogger_pageViews_get(blogId: string, range: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/pageviews&' + range.map(z => `range=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists posts.
		 * Get v3/blogs/{blogId}/posts
		 * @return {void} Successful response
		 */
		Blogger_posts_list(blogId: string, endDate: string, fetchBodies: boolean, fetchImages: boolean, labels: string, maxResults: number, orderBy: Blogger_posts_listOrderBy, pageToken: string, startDate: string, status: Array<PostStatus>, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&fetchBodies=' + fetchBodies + '&fetchImages=' + fetchImages + '&labels=' + (labels == null ? '' : encodeURIComponent(labels)) + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&' + status.map(z => `status=${z}`).join('&') + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Inserts a post.
		 * Post v3/blogs/{blogId}/posts
		 * @return {void} Successful response
		 */
		Blogger_posts_insert(blogId: string, fetchBody: boolean, fetchImages: boolean, isDraft: boolean, requestBody: Post): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts&fetchBody=' + fetchBody + '&fetchImages=' + fetchImages + '&isDraft=' + isDraft, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a post by path.
		 * Get v3/blogs/{blogId}/posts/bypath
		 * @return {void} Successful response
		 */
		Blogger_posts_getByPath(blogId: string, path: string, maxComments: number, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/bypath&path=' + (path == null ? '' : encodeURIComponent(path)) + '&maxComments=' + maxComments + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches for posts matching given query terms in the specified blog.
		 * Get v3/blogs/{blogId}/posts/search
		 * @return {void} Successful response
		 */
		Blogger_posts_search(blogId: string, q: string, fetchBodies: boolean, orderBy: Blogger_posts_listOrderBy): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/search&q=' + (q == null ? '' : encodeURIComponent(q)) + '&fetchBodies=' + fetchBodies + '&orderBy=' + orderBy, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a post by blog id and post id.
		 * Delete v3/blogs/{blogId}/posts/{postId}
		 * @return {void} Successful response
		 */
		Blogger_posts_delete(blogId: string, postId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a post by blog id and post id
		 * Get v3/blogs/{blogId}/posts/{postId}
		 * @return {void} Successful response
		 */
		Blogger_posts_get(blogId: string, postId: string, fetchBody: boolean, fetchImages: boolean, maxComments: number, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '&fetchBody=' + fetchBody + '&fetchImages=' + fetchImages + '&maxComments=' + maxComments + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Patches a post.
		 * Patch v3/blogs/{blogId}/posts/{postId}
		 * @return {void} Successful response
		 */
		Blogger_posts_patch(blogId: string, postId: string, fetchBody: boolean, fetchImages: boolean, maxComments: number, publish: boolean, revert: boolean, requestBody: Post): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '&fetchBody=' + fetchBody + '&fetchImages=' + fetchImages + '&maxComments=' + maxComments + '&publish=' + publish + '&revert=' + revert, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a post by blog id and post id.
		 * Put v3/blogs/{blogId}/posts/{postId}
		 * @return {void} Successful response
		 */
		Blogger_posts_update(blogId: string, postId: string, fetchBody: boolean, fetchImages: boolean, maxComments: number, publish: boolean, revert: boolean, requestBody: Post): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '&fetchBody=' + fetchBody + '&fetchImages=' + fetchImages + '&maxComments=' + maxComments + '&publish=' + publish + '&revert=' + revert, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists comments.
		 * Get v3/blogs/{blogId}/posts/{postId}/comments
		 * @return {void} Successful response
		 */
		Blogger_comments_list(blogId: string, postId: string, endDate: string, fetchBodies: boolean, maxResults: number, pageToken: string, startDate: string, status: CommentStatus, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&fetchBodies=' + fetchBodies + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&status=' + status + '&view=' + view, { observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Blogger_comments_get(blogId: string, postId: string, commentId: string, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks a comment as not spam by blog id, post id and comment id.
		 * Post v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve
		 * @return {void} Successful response
		 */
		Blogger_comments_approve(blogId: string, postId: string, commentId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/approve', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes the content of a comment by blog id, post id and comment id.
		 * Post v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent
		 * @return {void} Successful response
		 */
		Blogger_comments_removeContent(blogId: string, postId: string, commentId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/removecontent', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Marks a comment as spam by blog id, post id and comment id.
		 * Post v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam
		 * @return {void} Successful response
		 */
		Blogger_comments_markAsSpam(blogId: string, postId: string, commentId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/comments/' + (commentId == null ? '' : encodeURIComponent(commentId)) + '/spam', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Publishes a post.
		 * Post v3/blogs/{blogId}/posts/{postId}/publish
		 * @return {void} Successful response
		 */
		Blogger_posts_publish(blogId: string, postId: string, publishDate: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/publish&publishDate=' + (publishDate == null ? '' : encodeURIComponent(publishDate)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Reverts a published or scheduled post to draft state.
		 * Post v3/blogs/{blogId}/posts/{postId}/revert
		 * @return {void} Successful response
		 */
		Blogger_posts_revert(blogId: string, postId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '/revert', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one user by user_id.
		 * Get v3/users/{userId}
		 * @return {void} Successful response
		 */
		Blogger_users_get(userId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists blogs by user.
		 * Get v3/users/{userId}/blogs
		 * @param {Array<BlogStatus>} status Default value of status is LIVE.
		 * @return {void} Successful response
		 */
		Blogger_blogs_listByUser(userId: string, fetchUserInfo: boolean, role: Array<BlogPerUserInfoRole>, status: Array<BlogStatus>, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/blogs&fetchUserInfo=' + fetchUserInfo + '&' + role.map(z => `role=${z}`).join('&') + '&' + status.map(z => `status=${z}`).join('&') + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one blog and user info pair by blog id and user id.
		 * Get v3/users/{userId}/blogs/{blogId}
		 * @return {void} Successful response
		 */
		Blogger_blogUserInfos_get(userId: string, blogId: string, maxPosts: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '&maxPosts=' + maxPosts, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists post and user info pairs.
		 * Get v3/users/{userId}/blogs/{blogId}/posts
		 * @return {void} Successful response
		 */
		Blogger_postUserInfos_list(userId: string, blogId: string, endDate: string, fetchBodies: boolean, labels: string, maxResults: number, orderBy: Blogger_posts_listOrderBy, pageToken: string, startDate: string, status: Array<PostStatus>, view: BlogPerUserInfoRole): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&fetchBodies=' + fetchBodies + '&labels=' + (labels == null ? '' : encodeURIComponent(labels)) + '&maxResults=' + maxResults + '&orderBy=' + orderBy + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&' + status.map(z => `status=${z}`).join('&') + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets one post and user info pair, by post_id and user_id.
		 * Get v3/users/{userId}/blogs/{blogId}/posts/{postId}
		 * @return {void} Successful response
		 */
		Blogger_postUserInfos_get(userId: string, blogId: string, postId: string, maxComments: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '/blogs/' + (blogId == null ? '' : encodeURIComponent(blogId)) + '/posts/' + (postId == null ? '' : encodeURIComponent(postId)) + '&maxComments=' + maxComments, { observe: 'response', responseType: 'text' });
		}
	}

	export enum Blogger_posts_listOrderBy { ORDER_BY_UNSPECIFIED = 0, PUBLISHED = 1, UPDATED = 2 }

}

