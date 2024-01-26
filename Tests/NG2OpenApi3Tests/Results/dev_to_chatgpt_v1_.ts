import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The organization the resource belongs to */
	export interface SharedOrganization {
		name?: string | null;

		/** Profile image (640x640) */
		profile_image?: string | null;

		/** Profile image (90x90) */
		profile_image_90?: string | null;
		slug?: string | null;
		username?: string | null;
	}

	/** The organization the resource belongs to */
	export interface SharedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,

		/** Profile image (640x640) */
		profile_image: FormControl<string | null | undefined>,

		/** Profile image (90x90) */
		profile_image_90: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateSharedOrganizationFormGroup() {
		return new FormGroup<SharedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			profile_image_90: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The author */
	export interface SharedUser {
		github_username?: string | null;
		name?: string | null;

		/** Profile image (640x640) */
		profile_image?: string | null;

		/** Profile image (90x90) */
		profile_image_90?: string | null;
		twitter_username?: string | null;
		username?: string | null;
		website_url?: string | null;
	}

	/** The author */
	export interface SharedUserFormProperties {
		github_username: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Profile image (640x640) */
		profile_image: FormControl<string | null | undefined>,

		/** Profile image (90x90) */
		profile_image_90: FormControl<string | null | undefined>,
		twitter_username: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		website_url: FormControl<string | null | undefined>,
	}
	export function CreateSharedUserFormGroup() {
		return new FormGroup<SharedUserFormProperties>({
			github_username: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			profile_image: new FormControl<string | null | undefined>(undefined),
			profile_image_90: new FormControl<string | null | undefined>(undefined),
			twitter_username: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			website_url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representation of an article returned in a list */
	export interface GetArticlesResponse {

		/** The body of the article */
		body_markdown?: string | null;

		/** Required */
		canonical_url: string;

		/** Required */
		cover_image: string;

		/** Required */
		created_at: Date;

		/** Required */
		crossposted_at: Date;

		/**
		 * A description of the article
		 * Required
		 */
		description: string;

		/** Required */
		edited_at: Date;

		/** Required */
		id: number;

		/** Required */
		last_comment_at: Date;

		/** The organization the resource belongs to */
		organization?: SharedOrganization;

		/**
		 * A relative path of the article.
		 * Required
		 */
		path: string;

		/** Required */
		positive_reactions_count: number;

		/** Required */
		public_reactions_count: number;

		/** Required */
		published_at: Date;

		/**
		 * Crossposting or published date time
		 * Required
		 */
		published_timestamp: Date;

		/** Required */
		readable_publish_date: string;

		/**
		 * Reading time, in minutes
		 * Required
		 */
		reading_time_minutes: number;

		/** Required */
		slug: string;

		/** Required */
		social_image: string;

		/**
		 * An array representation of the tags that are associated with an article
		 * Required
		 */
		tag_list: Array<string>;

		/**
		 * An array representation of the tags that are associated with an article
		 * Required
		 */
		tags: string;

		/**
		 * The article title
		 * Required
		 */
		title: string;

		/** Required */
		type_of: string;

		/**
		 * The url of the article. Can be used to link to the article.
		 * Required
		 */
		url: string;

		/**
		 * The author
		 * Required
		 */
		user: SharedUser;
	}

	/** Representation of an article returned in a list */
	export interface GetArticlesResponseFormProperties {

		/** The body of the article */
		body_markdown: FormControl<string | null | undefined>,

		/** Required */
		canonical_url: FormControl<string | null | undefined>,

		/** Required */
		cover_image: FormControl<string | null | undefined>,

		/** Required */
		created_at: FormControl<Date | null | undefined>,

		/** Required */
		crossposted_at: FormControl<Date | null | undefined>,

		/**
		 * A description of the article
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		edited_at: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		last_comment_at: FormControl<Date | null | undefined>,

		/**
		 * A relative path of the article.
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/** Required */
		positive_reactions_count: FormControl<number | null | undefined>,

		/** Required */
		public_reactions_count: FormControl<number | null | undefined>,

		/** Required */
		published_at: FormControl<Date | null | undefined>,

		/**
		 * Crossposting or published date time
		 * Required
		 */
		published_timestamp: FormControl<Date | null | undefined>,

		/** Required */
		readable_publish_date: FormControl<string | null | undefined>,

		/**
		 * Reading time, in minutes
		 * Required
		 */
		reading_time_minutes: FormControl<number | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,

		/** Required */
		social_image: FormControl<string | null | undefined>,

		/**
		 * An array representation of the tags that are associated with an article
		 * Required
		 */
		tags: FormControl<string | null | undefined>,

		/**
		 * The article title
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/** Required */
		type_of: FormControl<string | null | undefined>,

		/**
		 * The url of the article. Can be used to link to the article.
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGetArticlesResponseFormGroup() {
		return new FormGroup<GetArticlesResponseFormProperties>({
			body_markdown: new FormControl<string | null | undefined>(undefined),
			canonical_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cover_image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			crossposted_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			edited_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_comment_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			positive_reactions_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			public_reactions_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			published_at: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			published_timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			readable_publish_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			reading_time_minutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			social_image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type_of: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of filtered articles
		 * Get api/articles/search
		 * @param {string} q Accepts keywords to use as a search query.
		 * @param {number} page Pagination Page
		 * @param {number} per_page Page size (the number of items to return per page).
		 * @param {string} top Returns the most popular articles in the last N days. 'top' indicates the number of days since publication of the articles returned. This param can be used in conjuction with q or tag.
		 * @return {void} OK
		 */
		GetArticles(q: string | null | undefined, page: number | null | undefined, per_page: number | null | undefined, top: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/articles/search?q=' + (q == null ? '' : encodeURIComponent(q)) + '&page=' + page + '&per_page=' + per_page + '&top=' + (top == null ? '' : encodeURIComponent(top)), { observe: 'response', responseType: 'text' });
		}
	}

}

