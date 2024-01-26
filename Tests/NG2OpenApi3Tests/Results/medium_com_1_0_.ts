import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Welcome
		 * **Test Endpoint**
		 * Returns the information about the Medium API
		 * Get 
		 * @return {GetReturn} OK
		 */
		Get(headersHandler?: () => HttpHeaders): Observable<GetReturn> {
			return this.http.get<GetReturn>(this.baseUri + '', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article Info
		 * Returns the article related information such as *Title, Subtitle, Tags,  Topics* (assigned by Medium), *Publication, Published date and time,  Clap Count, Voter Count, Word Count, Reading Time, Language, etc…*
		 * Get article/{article_id}
		 * @param {string} article_id It's a unique hash id assigned to every Medium Article.
		 * @return {Article_article_idGetReturn} OK
		 */
		Article_article_idGet(article_id: string, headersHandler?: () => HttpHeaders): Observable<Article_article_idGetReturn> {
			return this.http.get<Article_article_idGetReturn>(this.baseUri + 'article/' + (article_id == null ? '' : encodeURIComponent(article_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article's Content
		 * Returns the content of an article/story, for the corresponding `article_id`
		 * Get article/{article_id}/content
		 * @param {string} article_id It's a unique hash id assigned to every Medium Article.
		 * @return {Article_article_idContentGetReturn} OK
		 */
		Article_article_idContentGet(article_id: string, headersHandler?: () => HttpHeaders): Observable<Article_article_idContentGetReturn> {
			return this.http.get<Article_article_idContentGetReturn>(this.baseUri + 'article/' + (article_id == null ? '' : encodeURIComponent(article_id)) + '/content', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article Fans
		 * Returns a list of `user_ids` of the people who clapped on the article (a.k.a `voters`).
		 * Get article/{article_id}/fans
		 * @param {string} article_id It's a unique hash id assigned to every Medium Article.
		 * @return {Article_article_idFansGetReturn} OK
		 */
		Article_article_idFansGet(article_id: string, headersHandler?: () => HttpHeaders): Observable<Article_article_idFansGetReturn> {
			return this.http.get<Article_article_idFansGetReturn>(this.baseUri + 'article/' + (article_id == null ? '' : encodeURIComponent(article_id)) + '/fans', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article's Markdown
		 * Returns the markdown of an article/story from Medium, for the corresponding `article_id`
		 * Get article/{article_id}/markdown
		 * @param {string} article_id It's a unique hash id assigned to every Medium Article.
		 * @return {Article_article_idMarkdownGetReturn} OK
		 */
		Article_article_idMarkdownGet(article_id: string, headersHandler?: () => HttpHeaders): Observable<Article_article_idMarkdownGetReturn> {
			return this.http.get<Article_article_idMarkdownGetReturn>(this.baseUri + 'article/' + (article_id == null ? '' : encodeURIComponent(article_id)) + '/markdown', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Related Articles
		 * Returns a list of `article_ids` of the related posts. (Length = 5)
		 * **Note:** If the given article is self-published, related posts will belong to the same author,  else related posts will belong to the publication in which the article is published.
		 * Get article/{article_id}/related
		 * @param {string} article_id It's a unique hash id assigned to every Medium Article.
		 * @return {Article_article_idRelatedGetReturn} OK
		 */
		Article_article_idRelatedGet(article_id: string, headersHandler?: () => HttpHeaders): Observable<Article_article_idRelatedGetReturn> {
			return this.http.get<Article_article_idRelatedGetReturn>(this.baseUri + 'article/' + (article_id == null ? '' : encodeURIComponent(article_id)) + '/related', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Article Responses
		 * Returns a list of responses (`response_ids`, same as `article_ids`) for a given article (`article_id`)
		 * Note: To see the content of the response, use the "Get Article's Content" endpoint
		 * Get article/{article_id}/responses
		 * @param {string} article_id It's a unique hash id assigned to every Medium Article.
		 * @return {Article_article_idResponsesGetReturn} OK
		 */
		Article_article_idResponsesGet(article_id: string, headersHandler?: () => HttpHeaders): Observable<Article_article_idResponsesGetReturn> {
			return this.http.get<Article_article_idResponsesGetReturn>(this.baseUri + 'article/' + (article_id == null ? '' : encodeURIComponent(article_id)) + '/responses', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Latest Posts
		 * Returns a list of latest posts (`article_ids`) for a topic/niche (as classified by the Medium platform). Example of a topic/niche can be:
		 * * blockchain
		 * * relationships
		 * * mental-health, etc …
		 * These are known as `topic_slugs`. At any given moment, this endpoint will return a list of 25 articles (`article_ids`).
		 * Get latestposts/{topic_slug}
		 * @param {string} topic_slug It's a unique string, usually hyphen-separated, representing a topic/niche, as classified by Medium.
		 * @return {Latestposts_topic_slugGetReturn} OK
		 */
		Latestposts_topic_slugGet(topic_slug: string, headersHandler?: () => HttpHeaders): Observable<Latestposts_topic_slugGetReturn> {
			return this.http.get<Latestposts_topic_slugGetReturn>(this.baseUri + 'latestposts/' + (topic_slug == null ? '' : encodeURIComponent(topic_slug)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get List Info
		 * Returns the list-related information such as *id, name, author, description,  thumbnail image url, creation datetime, last article inserted datetime,  number of articles in the list, claps, voters, and comments/responses*.
		 * Get list/{list_id}
		 * @param {string} list_id It's a unique hash id assigned to every Medium List.
		 * @return {List_list_idGetReturn} OK
		 */
		List_list_idGet(list_id: string, headersHandler?: () => HttpHeaders): Observable<List_list_idGetReturn> {
			return this.http.get<List_list_idGetReturn>(this.baseUri + 'list/' + (list_id == null ? '' : encodeURIComponent(list_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get List Articles
		 * Returns an array of `articles_ids` present in the given Medium List.
		 * Get list/{list_id}/articles
		 * @param {string} list_id It's a unique hash id assigned to every Medium List.
		 * @return {List_list_idArticlesGetReturn} OK
		 */
		List_list_idArticlesGet(list_id: string, headersHandler?: () => HttpHeaders): Observable<List_list_idArticlesGetReturn> {
			return this.http.get<List_list_idArticlesGetReturn>(this.baseUri + 'list/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/articles', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get List Responses
		 * Returns an array of `response_ids` of the comments (same as `article_ids`) on the given Medium List.
		 * Get list/{list_id}/responses
		 * @param {string} list_id It's a unique hash id assigned to every Medium List.
		 * @return {List_list_idResponsesGetReturn} OK
		 */
		List_list_idResponsesGet(list_id: string, headersHandler?: () => HttpHeaders): Observable<List_list_idResponsesGetReturn> {
			return this.http.get<List_list_idResponsesGetReturn>(this.baseUri + 'list/' + (list_id == null ? '' : encodeURIComponent(list_id)) + '/responses', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Publication ID
		 * Returns the unique `publication_id` for the given `publication_slug`.
		 * **Note:** You can find the `publication_slug` from the publication's homepage URL.
		 * - medium.com/**publication_slug**
		 * Get publication/id_for/{publication_slug}
		 * @param {string} publication_slug It's a lowercased hyphen-separated unique string alloted to each Medium Publication.
		 * @return {PublicationId_for_publication_slugGetReturn} OK
		 */
		PublicationId_for_publication_slugGet(publication_slug: string, headersHandler?: () => HttpHeaders): Observable<PublicationId_for_publication_slugGetReturn> {
			return this.http.get<PublicationId_for_publication_slugGetReturn>(this.baseUri + 'publication/id_for/' + (publication_slug == null ? '' : encodeURIComponent(publication_slug)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Publication Info
		 * Returns the publication related information such as *Publication name, Tagline, Description, Tags, Followers Count, Twitter username, Instagram username, Facebook Page name, etc …*
		 * **Note:** If you don't know the `publication_id`, you can get it from any article published by it. Use endpoint "/article/{article_id}" to retrieve the `publication_id`.
		 * Get publication/{publication_id}
		 * @param {string} publication_id It's a unique hash id assigned to every Medium Publication.
		 * @return {Publication_publication_idGetReturn} OK
		 */
		Publication_publication_idGet(publication_id: string, headersHandler?: () => HttpHeaders): Observable<Publication_publication_idGetReturn> {
			return this.http.get<Publication_publication_idGetReturn>(this.baseUri + 'publication/' + (publication_id == null ? '' : encodeURIComponent(publication_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Publication Articles
		 * Returns the list of `articles_ids`, of the latest 25 articles, posted in that publication.
		 * Get publication/{publication_id}/articles
		 * @param {string} publication_id It's a unique hash id assigned to every Medium Publication.
		 * @param {string} from To get the articles before specified date and time.
		 * @return {Publication_publication_idArticlesGetByFromReturn} OK
		 */
		Publication_publication_idArticlesGetByFrom(publication_id: string, from: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Publication_publication_idArticlesGetByFromReturn> {
			return this.http.get<Publication_publication_idArticlesGetByFromReturn>(this.baseUri + 'publication/' + (publication_id == null ? '' : encodeURIComponent(publication_id)) + '/articles&from=' + (from == null ? '' : encodeURIComponent(from)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Publication Newsletter
		 * Returns the newsletter related information such as *id, name, description, slug, creator_id, subscribers, image_url, etc …*
		 * **Note:** If you don't know the `publication_id`, you can get it from any article published by it. Use endpoint "/article/{article_id}" to retrieve the `publication_id`.
		 * Get publication/{publication_id}/newsletter
		 * @param {string} publication_id It's a unique hash id assigned to every Medium Publication.
		 * @return {Publication_publication_idNewsletterGetReturn} OK
		 */
		Publication_publication_idNewsletterGet(publication_id: string, headersHandler?: () => HttpHeaders): Observable<Publication_publication_idNewsletterGetReturn> {
			return this.http.get<Publication_publication_idNewsletterGetReturn>(this.baseUri + 'publication/' + (publication_id == null ? '' : encodeURIComponent(publication_id)) + '/newsletter', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Related Tags
		 * Returns a list of `related_tags` for the given `tag`.
		 * Get related_tags/{tag}
		 * @param {string} tag It's a unique string, usually hyphen-separated, representing a class of content.
		 * @return {Related_tags_tagGetReturn} OK
		 */
		Related_tags_tagGet(tag: string, headersHandler?: () => HttpHeaders): Observable<Related_tags_tagGetReturn> {
			return this.http.get<Related_tags_tagGetReturn>(this.baseUri + 'related_tags/' + (tag == null ? '' : encodeURIComponent(tag)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search Articles
		 * Returns the list of `articles_ids` for the given search query results. (Max Length = 1000)
		 * Get search/articles?query={query}
		 * @param {string} query Search query
		 * @return {SearchArticlesGetByQueryReturn} OK
		 */
		SearchArticlesGetByQuery(query: string, headersHandler?: () => HttpHeaders): Observable<SearchArticlesGetByQueryReturn> {
			return this.http.get<SearchArticlesGetByQueryReturn>(this.baseUri + 'search/articles?query={query}&query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search Lists
		 * Returns an array of `list_ids` for the given search query results. (Max Length = 1000)
		 * Get search/lists?query={query}
		 * @param {string} query Search query
		 * @return {SearchListsGetByQueryReturn} OK
		 */
		SearchListsGetByQuery(query: string, headersHandler?: () => HttpHeaders): Observable<SearchListsGetByQueryReturn> {
			return this.http.get<SearchListsGetByQueryReturn>(this.baseUri + 'search/lists?query={query}&query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search Publications
		 * Returns the list of `publication_ids` for the given search query results. (Max Length = 1000)
		 * Get search/publications?query={query}
		 * @param {string} query Search query
		 * @return {SearchPublicationsGetByQueryReturn} OK
		 */
		SearchPublicationsGetByQuery(query: string, headersHandler?: () => HttpHeaders): Observable<SearchPublicationsGetByQueryReturn> {
			return this.http.get<SearchPublicationsGetByQueryReturn>(this.baseUri + 'search/publications?query={query}&query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search Tags
		 * Returns a list of `tags` for the given search query results. (Max Length = 1000)
		 * Get search/tags?query={query}
		 * @param {string} query Search query
		 * @return {SearchTagsGetByQueryReturn} OK
		 */
		SearchTagsGetByQuery(query: string, headersHandler?: () => HttpHeaders): Observable<SearchTagsGetByQueryReturn> {
			return this.http.get<SearchTagsGetByQueryReturn>(this.baseUri + 'search/tags?query={query}&query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Search Users
		 * Returns a list of `user_ids` for the given search query results. (Max Length = 1000)
		 * Get search/users?query={query}
		 * @param {string} query Search query
		 * @return {SearchUsersGetByQueryReturn} OK
		 */
		SearchUsersGetByQuery(query: string, headersHandler?: () => HttpHeaders): Observable<SearchUsersGetByQueryReturn> {
			return this.http.get<SearchUsersGetByQueryReturn>(this.baseUri + 'search/users?query={query}&query=' + (query == null ? '' : encodeURIComponent(query)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Top Writers
		 * Returns a list of top writers (`user_ids`) within a particular topic/niche (`topic_slug`).
		 * e.g.
		 * - blockchain
		 * - relationships
		 * - artificial-intelligence, etc ...
		 * **Note:** You can use optional `count` query parameter to limit the number of results.  The maximum number of top writers within a topic/niche will be 250.
		 * Get top_writer/{topic_slug}
		 * @param {string} topic_slug It's a unique string, usually hyphen-separated, representing a topic/niche, as classified by Medium.
		 * @param {number} count Limits the number of `article_ids` in the result.
		 * @return {Top_writer_topic_slugGetByCountReturn} OK
		 */
		Top_writer_topic_slugGetByCount(topic_slug: string, count: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Top_writer_topic_slugGetByCountReturn> {
			return this.http.get<Top_writer_topic_slugGetByCountReturn>(this.baseUri + 'top_writer/' + (topic_slug == null ? '' : encodeURIComponent(topic_slug)) + '&count=' + count, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get Topfeeds
		 * Returns a list of `article_ids` (length: 25) for the given `tag` and `mode`.
		 * Get topfeeds/{tag}/{mode}
		 * @param {string} tag It's a unique string, usually hyphen-separated, representing a class of content.
		 * @param {string} mode Mode:
		 *   - `hot` : For getting trending articles
		 *   - `new` : For getting latest articles
		 *   - `top_year` : For getting best articles of the year
		 *   - `top_month` : For getting best articles of the month
		 *   - `top_week` : For getting best articles of the week
		 *   - `top_all_time`: For getting best article of all time
		 * @param {number} after To get the subsequent top feeds. (`after` &lt; 250)
		 * @param {number} count To limit the number of top feeds. (`count` &lt; 25)
		 * @return {Topfeeds_tag_modeGetByAfterAndCountReturn} OK
		 */
		Topfeeds_tag_modeGetByAfterAndCount(tag: string, mode: string, after: number | null | undefined, count: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Topfeeds_tag_modeGetByAfterAndCountReturn> {
			return this.http.get<Topfeeds_tag_modeGetByAfterAndCountReturn>(this.baseUri + 'topfeeds/' + (tag == null ? '' : encodeURIComponent(tag)) + '/' + (mode == null ? '' : encodeURIComponent(mode)) + '&after=' + after + '&count=' + count, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get User ID
		 * Returns the unique `user_id` for the given `username`.
		 * **Note:** You can find the `username` from the user's/author's profile page URL.
		 * - **username**.medium.com
		 * - medium.com/@**username**
		 * Get user/id_for/{username}
		 * @param {string} username It's a unique string chosen by every single Medium user.
		 * @return {UserId_for_usernameGetReturn} OK
		 */
		UserId_for_usernameGet(username: string, headersHandler?: () => HttpHeaders): Observable<UserId_for_usernameGetReturn> {
			return this.http.get<UserId_for_usernameGetReturn>(this.baseUri + 'user/id_for/' + (username == null ? '' : encodeURIComponent(username)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get User Info
		 * Returns user related information like *Full name, Bio, Followers count, Following count, Twitter username, Profile-image URL, User ID, etc...*
		 * It takes `user_id` as the path parameter.
		 * **Note:** If you don't know the `user_id`, then you can get it from the endpoint\
		 * '/user/id_for/{`username`}'.
		 * Get user/{user_id}
		 * @param {string} user_id It's a unique hash id assigned to every single Medium user.
		 * @return {User_user_idGetReturn} OK
		 */
		User_user_idGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<User_user_idGetReturn> {
			return this.http.get<User_user_idGetReturn>(this.baseUri + 'user/' + (user_id == null ? '' : encodeURIComponent(user_id)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get User's Articles
		 * Returns the list of articles (`article_ids`) written by the user.
		 * Get user/{user_id}/articles
		 * @param {string} user_id Unique hash id assigned to every single Medium user.
		 * @return {User_user_idArticlesGetReturn} OK
		 */
		User_user_idArticlesGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<User_user_idArticlesGetReturn> {
			return this.http.get<User_user_idArticlesGetReturn>(this.baseUri + 'user/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/articles', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get User Followers
		 * Returns the list of `user_ids` of the user's followers.
		 * **Note:** The length of this followers' list might be different from what you get in  the "Get User Info" Endpoint. It's because, this list doesn't include Medium Users who  left the platform.
		 * If you really need the exact followers' count, use this endpoint to get the followers'  list and take its length as the exact followers' count
		 * Get user/{user_id}/followers
		 * @param {string} user_id Unique hash id assigned to every single Medium user.
		 * @param {number} count To limit the number of results. (count &lt; 1500)
		 * @return {User_user_idFollowersGetByCountReturn} OK
		 */
		User_user_idFollowersGetByCount(user_id: string, count: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<User_user_idFollowersGetByCountReturn> {
			return this.http.get<User_user_idFollowersGetByCountReturn>(this.baseUri + 'user/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/followers&count=' + count, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get User Following
		 * Returns the list of `user_ids` of the user's followings.
		 * **Note:** Currently, this list does not contain the `publication_ids` of the publications that the user is following.
		 * Get user/{user_id}/following
		 * @param {string} user_id Unique hash id assigned to every single Medium user.
		 * @param {number} count To limit the number of results. (count &lt; 1500)
		 * @return {User_user_idFollowingGetByCountReturn} OK
		 */
		User_user_idFollowingGetByCount(user_id: string, count: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<User_user_idFollowingGetByCountReturn> {
			return this.http.get<User_user_idFollowingGetByCountReturn>(this.baseUri + 'user/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/following&count=' + count, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get User's Interests
		 * Returns a list of tags that the given user follows.
		 * Get user/{user_id}/interests
		 * @param {string} user_id Unique hash id assigned to every single Medium user.
		 * @return {User_user_idInterestsGetReturn} OK
		 */
		User_user_idInterestsGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<User_user_idInterestsGetReturn> {
			return this.http.get<User_user_idInterestsGetReturn>(this.baseUri + 'user/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/interests', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get User's Lists
		 * Returns an array of `list_ids` created by the user.
		 * **Note:** You can check whether the use has created lists or not beforehand. Check the  `has_list` attribute in the "Article Info" endpoint.
		 * Get user/{user_id}/lists
		 * @param {string} user_id Unique hash id assigned to every single Medium user.
		 * @return {User_user_idListsGetReturn} OK
		 */
		User_user_idListsGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<User_user_idListsGetReturn> {
			return this.http.get<User_user_idListsGetReturn>(this.baseUri + 'user/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/lists', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get User's Publications
		 * Returns a list of `publication_ids` where the user is the editor and/or creator.
		 * Get user/{user_id}/publications
		 * @param {string} user_id Unique hash id assigned to every single Medium user.
		 * @return {User_user_idPublicationsGetReturn} OK
		 */
		User_user_idPublicationsGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<User_user_idPublicationsGetReturn> {
			return this.http.get<User_user_idPublicationsGetReturn>(this.baseUri + 'user/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/publications', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get User's Top Articles
		 * Returns a list of `article_ids` of the top 10 articles on the user's profile, for a given `user_id`.
		 * Get user/{user_id}/top_articles
		 * @param {string} user_id Unique hash id assigned to every single Medium user.
		 * @return {User_user_idTop_articlesGetReturn} OK
		 */
		User_user_idTop_articlesGet(user_id: string, headersHandler?: () => HttpHeaders): Observable<User_user_idTop_articlesGetReturn> {
			return this.http.get<User_user_idTop_articlesGetReturn>(this.baseUri + 'user/' + (user_id == null ? '' : encodeURIComponent(user_id)) + '/top_articles', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export interface GetReturn {

		/** Full name of the API's developer */
		developer?: string | null;

		/** Link to the Medium API's documentation */
		documentation?: string | null;

		/** Email ID of the developer */
		email?: string | null;

		/** LinkedIn Page URL */
		linkedin?: string | null;

		/** Full name of the API */
		name?: string | null;

		/** Twitter Profile URL */
		twitter?: string | null;

		/** Link to the Medium API's website */
		website?: string | null;
	}
	export interface GetReturnFormProperties {

		/** Full name of the API's developer */
		developer: FormControl<string | null | undefined>,

		/** Link to the Medium API's documentation */
		documentation: FormControl<string | null | undefined>,

		/** Email ID of the developer */
		email: FormControl<string | null | undefined>,

		/** LinkedIn Page URL */
		linkedin: FormControl<string | null | undefined>,

		/** Full name of the API */
		name: FormControl<string | null | undefined>,

		/** Twitter Profile URL */
		twitter: FormControl<string | null | undefined>,

		/** Link to the Medium API's website */
		website: FormControl<string | null | undefined>,
	}
	export function CreateGetReturnFormGroup() {
		return new FormGroup<GetReturnFormProperties>({
			developer: new FormControl<string | null | undefined>(undefined),
			documentation: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			linkedin: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Article_article_idGetReturn {
		author?: string | null;
		claps?: number | null;
		id?: string | null;
		image_url?: string | null;
		is_locked?: boolean | null;
		is_series?: boolean | null;
		lang?: string | null;
		last_modified_at?: string | null;
		publication_id?: string | null;
		published_at?: string | null;
		reading_time?: number | null;
		responses_count?: number | null;
		subtitle?: string | null;
		tags?: Array<string>;
		title?: string | null;
		topics?: Array<string>;
		url?: string | null;
		voters?: number | null;
		word_count?: number | null;
	}
	export interface Article_article_idGetReturnFormProperties {
		author: FormControl<string | null | undefined>,
		claps: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		image_url: FormControl<string | null | undefined>,
		is_locked: FormControl<boolean | null | undefined>,
		is_series: FormControl<boolean | null | undefined>,
		lang: FormControl<string | null | undefined>,
		last_modified_at: FormControl<string | null | undefined>,
		publication_id: FormControl<string | null | undefined>,
		published_at: FormControl<string | null | undefined>,
		reading_time: FormControl<number | null | undefined>,
		responses_count: FormControl<number | null | undefined>,
		subtitle: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
		voters: FormControl<number | null | undefined>,
		word_count: FormControl<number | null | undefined>,
	}
	export function CreateArticle_article_idGetReturnFormGroup() {
		return new FormGroup<Article_article_idGetReturnFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			claps: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			is_locked: new FormControl<boolean | null | undefined>(undefined),
			is_series: new FormControl<boolean | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined),
			last_modified_at: new FormControl<string | null | undefined>(undefined),
			publication_id: new FormControl<string | null | undefined>(undefined),
			published_at: new FormControl<string | null | undefined>(undefined),
			reading_time: new FormControl<number | null | undefined>(undefined),
			responses_count: new FormControl<number | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			voters: new FormControl<number | null | undefined>(undefined),
			word_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Article_article_idContentGetReturn {
		content?: string | null;
	}
	export interface Article_article_idContentGetReturnFormProperties {
		content: FormControl<string | null | undefined>,
	}
	export function CreateArticle_article_idContentGetReturnFormGroup() {
		return new FormGroup<Article_article_idContentGetReturnFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Article_article_idFansGetReturn {
		article_id?: string | null;
		count?: number | null;
		voters?: Array<string>;
	}
	export interface Article_article_idFansGetReturnFormProperties {
		article_id: FormControl<string | null | undefined>,
		count: FormControl<number | null | undefined>,
	}
	export function CreateArticle_article_idFansGetReturnFormGroup() {
		return new FormGroup<Article_article_idFansGetReturnFormProperties>({
			article_id: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Article_article_idMarkdownGetReturn {
		markdown?: string | null;
	}
	export interface Article_article_idMarkdownGetReturnFormProperties {
		markdown: FormControl<string | null | undefined>,
	}
	export function CreateArticle_article_idMarkdownGetReturnFormGroup() {
		return new FormGroup<Article_article_idMarkdownGetReturnFormProperties>({
			markdown: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Article_article_idRelatedGetReturn {
		id?: string | null;
		related_articles?: Array<string>;
	}
	export interface Article_article_idRelatedGetReturnFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateArticle_article_idRelatedGetReturnFormGroup() {
		return new FormGroup<Article_article_idRelatedGetReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Article_article_idResponsesGetReturn {
		id?: string | null;
		responses?: Array<string>;
	}
	export interface Article_article_idResponsesGetReturnFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateArticle_article_idResponsesGetReturnFormGroup() {
		return new FormGroup<Article_article_idResponsesGetReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Latestposts_topic_slugGetReturn {
		latestposts?: Array<string>;
	}
	export interface Latestposts_topic_slugGetReturnFormProperties {
	}
	export function CreateLatestposts_topic_slugGetReturnFormGroup() {
		return new FormGroup<Latestposts_topic_slugGetReturnFormProperties>({
		});

	}

	export interface List_list_idGetReturn {

		/** `user_id` of the author */
		author?: string | null;
		claps?: number | null;

		/** Number of articles in the list */
		count?: number | null;
		created_at?: string | null;
		description?: string | null;
		id?: string | null;
		last_item_inserted_at?: string | null;
		name?: string | null;
		responses_count?: number | null;

		/** Image URL */
		thumbnail?: string | null;
		voters?: number | null;
	}
	export interface List_list_idGetReturnFormProperties {

		/** `user_id` of the author */
		author: FormControl<string | null | undefined>,
		claps: FormControl<number | null | undefined>,

		/** Number of articles in the list */
		count: FormControl<number | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		last_item_inserted_at: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		responses_count: FormControl<number | null | undefined>,

		/** Image URL */
		thumbnail: FormControl<string | null | undefined>,
		voters: FormControl<number | null | undefined>,
	}
	export function CreateList_list_idGetReturnFormGroup() {
		return new FormGroup<List_list_idGetReturnFormProperties>({
			author: new FormControl<string | null | undefined>(undefined),
			claps: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_item_inserted_at: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			responses_count: new FormControl<number | null | undefined>(undefined),
			thumbnail: new FormControl<string | null | undefined>(undefined),
			voters: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface List_list_idArticlesGetReturn {
		id?: string | null;
		list_articles?: Array<string>;
	}
	export interface List_list_idArticlesGetReturnFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateList_list_idArticlesGetReturnFormGroup() {
		return new FormGroup<List_list_idArticlesGetReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface List_list_idResponsesGetReturn {
		id?: string | null;
		responses?: Array<string>;
	}
	export interface List_list_idResponsesGetReturnFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateList_list_idResponsesGetReturnFormGroup() {
		return new FormGroup<List_list_idResponsesGetReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicationId_for_publication_slugGetReturn {

		/** Unique hash id of the publication. */
		publication_id?: string | null;

		/** Same publication slug that you passed in the path parameters. */
		publication_slug?: string | null;
	}
	export interface PublicationId_for_publication_slugGetReturnFormProperties {

		/** Unique hash id of the publication. */
		publication_id: FormControl<string | null | undefined>,

		/** Same publication slug that you passed in the path parameters. */
		publication_slug: FormControl<string | null | undefined>,
	}
	export function CreatePublicationId_for_publication_slugGetReturnFormGroup() {
		return new FormGroup<PublicationId_for_publication_slugGetReturnFormProperties>({
			publication_id: new FormControl<string | null | undefined>(undefined),
			publication_slug: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Publication_publication_idGetReturn {
		creator?: string | null;
		description?: string | null;
		editors?: Array<string>;
		facebook_pagename?: string | null;
		followers?: number | null;
		id?: string | null;
		instagram_username?: string | null;
		name?: string | null;
		slug?: string | null;
		tagline?: string | null;
		tags?: Array<string>;
		twitter_username?: string | null;
		url?: string | null;
	}
	export interface Publication_publication_idGetReturnFormProperties {
		creator: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		facebook_pagename: FormControl<string | null | undefined>,
		followers: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		instagram_username: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		tagline: FormControl<string | null | undefined>,
		twitter_username: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePublication_publication_idGetReturnFormGroup() {
		return new FormGroup<Publication_publication_idGetReturnFormProperties>({
			creator: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			facebook_pagename: new FormControl<string | null | undefined>(undefined),
			followers: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instagram_username: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tagline: new FormControl<string | null | undefined>(undefined),
			twitter_username: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Publication_publication_idArticlesGetByFromReturn {
		publication_articles?: Array<string>;
	}
	export interface Publication_publication_idArticlesGetByFromReturnFormProperties {
	}
	export function CreatePublication_publication_idArticlesGetByFromReturnFormGroup() {
		return new FormGroup<Publication_publication_idArticlesGetByFromReturnFormProperties>({
		});

	}

	export interface Publication_publication_idNewsletterGetReturn {
		creator_id?: string | null;
		description?: string | null;
		id?: string | null;
		image?: string | null;
		name?: string | null;
		slug?: string | null;
		subscribers?: number | null;
	}
	export interface Publication_publication_idNewsletterGetReturnFormProperties {
		creator_id: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		subscribers: FormControl<number | null | undefined>,
	}
	export function CreatePublication_publication_idNewsletterGetReturnFormGroup() {
		return new FormGroup<Publication_publication_idNewsletterGetReturnFormProperties>({
			creator_id: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			subscribers: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Related_tags_tagGetReturn {
		given_tag?: string | null;
		related_tags?: Array<string>;
	}
	export interface Related_tags_tagGetReturnFormProperties {
		given_tag: FormControl<string | null | undefined>,
	}
	export function CreateRelated_tags_tagGetReturnFormGroup() {
		return new FormGroup<Related_tags_tagGetReturnFormProperties>({
			given_tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchArticlesGetByQueryReturn {
		articles?: Array<string>;
		search_query?: string | null;
	}
	export interface SearchArticlesGetByQueryReturnFormProperties {
		search_query: FormControl<string | null | undefined>,
	}
	export function CreateSearchArticlesGetByQueryReturnFormGroup() {
		return new FormGroup<SearchArticlesGetByQueryReturnFormProperties>({
			search_query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchListsGetByQueryReturn {
		lists?: Array<string>;
		search_query?: string | null;
	}
	export interface SearchListsGetByQueryReturnFormProperties {
		search_query: FormControl<string | null | undefined>,
	}
	export function CreateSearchListsGetByQueryReturnFormGroup() {
		return new FormGroup<SearchListsGetByQueryReturnFormProperties>({
			search_query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchPublicationsGetByQueryReturn {
		publications?: Array<string>;
		search_query?: string | null;
	}
	export interface SearchPublicationsGetByQueryReturnFormProperties {
		search_query: FormControl<string | null | undefined>,
	}
	export function CreateSearchPublicationsGetByQueryReturnFormGroup() {
		return new FormGroup<SearchPublicationsGetByQueryReturnFormProperties>({
			search_query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchTagsGetByQueryReturn {
		search_query?: string | null;
		tags?: Array<string>;
	}
	export interface SearchTagsGetByQueryReturnFormProperties {
		search_query: FormControl<string | null | undefined>,
	}
	export function CreateSearchTagsGetByQueryReturnFormGroup() {
		return new FormGroup<SearchTagsGetByQueryReturnFormProperties>({
			search_query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchUsersGetByQueryReturn {
		search_query?: string | null;
		users?: Array<string>;
	}
	export interface SearchUsersGetByQueryReturnFormProperties {
		search_query: FormControl<string | null | undefined>,
	}
	export function CreateSearchUsersGetByQueryReturnFormGroup() {
		return new FormGroup<SearchUsersGetByQueryReturnFormProperties>({
			search_query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_writer_topic_slugGetByCountReturn {
		top_writers?: Array<string>;
	}
	export interface Top_writer_topic_slugGetByCountReturnFormProperties {
	}
	export function CreateTop_writer_topic_slugGetByCountReturnFormGroup() {
		return new FormGroup<Top_writer_topic_slugGetByCountReturnFormProperties>({
		});

	}

	export interface Topfeeds_tag_modeGetByAfterAndCountReturn {
		topfeeds?: Array<string>;
	}
	export interface Topfeeds_tag_modeGetByAfterAndCountReturnFormProperties {
	}
	export function CreateTopfeeds_tag_modeGetByAfterAndCountReturnFormGroup() {
		return new FormGroup<Topfeeds_tag_modeGetByAfterAndCountReturnFormProperties>({
		});

	}

	export interface UserId_for_usernameGetReturn {

		/** Unique hash id of the user. */
		id?: string | null;
	}
	export interface UserId_for_usernameGetReturnFormProperties {

		/** Unique hash id of the user. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUserId_for_usernameGetReturnFormGroup() {
		return new FormGroup<UserId_for_usernameGetReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User_user_idGetReturn {
		allow_notes?: boolean | null;
		bio?: string | null;
		followers_count?: number | null;
		following_count?: number | null;
		fullname?: string | null;
		has_list?: boolean | null;
		id?: string | null;
		image_url?: string | null;
		is_book_author?: boolean | null;
		is_suspended?: boolean | null;
		is_writer_program_enrolled?: boolean | null;
		medium_member_at?: string | null;
		top_writer_in?: Array<string>;
		twitter_username?: string | null;
		username?: string | null;
	}
	export interface User_user_idGetReturnFormProperties {
		allow_notes: FormControl<boolean | null | undefined>,
		bio: FormControl<string | null | undefined>,
		followers_count: FormControl<number | null | undefined>,
		following_count: FormControl<number | null | undefined>,
		fullname: FormControl<string | null | undefined>,
		has_list: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		image_url: FormControl<string | null | undefined>,
		is_book_author: FormControl<boolean | null | undefined>,
		is_suspended: FormControl<boolean | null | undefined>,
		is_writer_program_enrolled: FormControl<boolean | null | undefined>,
		medium_member_at: FormControl<string | null | undefined>,
		twitter_username: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateUser_user_idGetReturnFormGroup() {
		return new FormGroup<User_user_idGetReturnFormProperties>({
			allow_notes: new FormControl<boolean | null | undefined>(undefined),
			bio: new FormControl<string | null | undefined>(undefined),
			followers_count: new FormControl<number | null | undefined>(undefined),
			following_count: new FormControl<number | null | undefined>(undefined),
			fullname: new FormControl<string | null | undefined>(undefined),
			has_list: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			is_book_author: new FormControl<boolean | null | undefined>(undefined),
			is_suspended: new FormControl<boolean | null | undefined>(undefined),
			is_writer_program_enrolled: new FormControl<boolean | null | undefined>(undefined),
			medium_member_at: new FormControl<string | null | undefined>(undefined),
			twitter_username: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User_user_idArticlesGetReturn {
		associated_articles?: Array<string>;
	}
	export interface User_user_idArticlesGetReturnFormProperties {
	}
	export function CreateUser_user_idArticlesGetReturnFormGroup() {
		return new FormGroup<User_user_idArticlesGetReturnFormProperties>({
		});

	}

	export interface User_user_idFollowersGetByCountReturn {
		followers?: Array<string>;
		id?: string | null;
	}
	export interface User_user_idFollowersGetByCountReturnFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUser_user_idFollowersGetByCountReturnFormGroup() {
		return new FormGroup<User_user_idFollowersGetByCountReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User_user_idFollowingGetByCountReturn {
		following?: Array<string>;
		id?: string | null;
	}
	export interface User_user_idFollowingGetByCountReturnFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUser_user_idFollowingGetByCountReturnFormGroup() {
		return new FormGroup<User_user_idFollowingGetByCountReturnFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User_user_idInterestsGetReturn {
		tags_followed?: Array<string>;
	}
	export interface User_user_idInterestsGetReturnFormProperties {
	}
	export function CreateUser_user_idInterestsGetReturnFormGroup() {
		return new FormGroup<User_user_idInterestsGetReturnFormProperties>({
		});

	}

	export interface User_user_idListsGetReturn {
		lists?: Array<string>;
		user_id?: string | null;
	}
	export interface User_user_idListsGetReturnFormProperties {
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateUser_user_idListsGetReturnFormGroup() {
		return new FormGroup<User_user_idListsGetReturnFormProperties>({
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User_user_idPublicationsGetReturn {
		publications?: Array<string>;
		user_id?: string | null;
	}
	export interface User_user_idPublicationsGetReturnFormProperties {
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateUser_user_idPublicationsGetReturnFormGroup() {
		return new FormGroup<User_user_idPublicationsGetReturnFormProperties>({
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User_user_idTop_articlesGetReturn {
		associated_articles?: Array<string>;
	}
	export interface User_user_idTop_articlesGetReturnFormProperties {
	}
	export function CreateUser_user_idTop_articlesGetReturnFormGroup() {
		return new FormGroup<User_user_idTop_articlesGetReturnFormProperties>({
		});

	}

}

