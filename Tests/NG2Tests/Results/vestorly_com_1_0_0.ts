import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Advisor {
		about?: string | null;
		account_type?: string | null;
		address?: string | null;
		adv_brochure?: string | null;
		api_key?: string | null;
		city?: string | null;
		company?: string | null;
		compliance_bcc_email_address?: string | null;
		dashboard_url?: string | null;
		disclosure?: string | null;
		email_report_blast?: string | null;
		external_options?: string | null;
		first_name?: string | null;

		/** Required */
		id: string;
		last_name?: string | null;
		linkedin?: string | null;
		logo?: string | null;

		/** Required */
		name: string;
		plan?: string | null;
		profile_picture?: string | null;
		reg_number?: string | null;
		state?: string | null;
		tag?: string | null;
		twitter_handle?: string | null;
		website?: string | null;
		zip?: string | null;
	}
	export interface AdvisorFormProperties {
		about: FormControl<string | null | undefined>,
		account_type: FormControl<string | null | undefined>,
		address: FormControl<string | null | undefined>,
		adv_brochure: FormControl<string | null | undefined>,
		api_key: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		company: FormControl<string | null | undefined>,
		compliance_bcc_email_address: FormControl<string | null | undefined>,
		dashboard_url: FormControl<string | null | undefined>,
		disclosure: FormControl<string | null | undefined>,
		email_report_blast: FormControl<string | null | undefined>,
		external_options: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		linkedin: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		plan: FormControl<string | null | undefined>,
		profile_picture: FormControl<string | null | undefined>,
		reg_number: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		tag: FormControl<string | null | undefined>,
		twitter_handle: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateAdvisorFormGroup() {
		return new FormGroup<AdvisorFormProperties>({
			about: new FormControl<string | null | undefined>(undefined),
			account_type: new FormControl<string | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			adv_brochure: new FormControl<string | null | undefined>(undefined),
			api_key: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			company: new FormControl<string | null | undefined>(undefined),
			compliance_bcc_email_address: new FormControl<string | null | undefined>(undefined),
			dashboard_url: new FormControl<string | null | undefined>(undefined),
			disclosure: new FormControl<string | null | undefined>(undefined),
			email_report_blast: new FormControl<string | null | undefined>(undefined),
			external_options: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined),
			linkedin: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			plan: new FormControl<string | null | undefined>(undefined),
			profile_picture: new FormControl<string | null | undefined>(undefined),
			reg_number: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
			twitter_handle: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Advisorresponse {
		advisor?: Advisor;
	}
	export interface AdvisorresponseFormProperties {
	}
	export function CreateAdvisorresponseFormGroup() {
		return new FormGroup<AdvisorresponseFormProperties>({
		});

	}

	export interface Advisors {
		advisors?: Array<Advisor>;
	}
	export interface AdvisorsFormProperties {
	}
	export function CreateAdvisorsFormGroup() {
		return new FormGroup<AdvisorsFormProperties>({
		});

	}

	export interface Article {

		/** Required */
		_id: string;
		body?: string | null;
		created_at?: string | null;
		external_url?: string | null;
		external_url_source?: string | null;
		external_url_type?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		image_height?: number | null;
		image_path?: string | null;
		image_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		image_width?: number | null;
		is_mobile_proxy_needed?: boolean | null;
		is_proxy_needed?: boolean | null;
		is_responsive?: boolean | null;
		logo_url?: string | null;
		needs_sanitize?: boolean | null;
		proxy_url?: string | null;
		redirector_link?: string | null;
		square_logo_url?: string | null;
		suitability_score?: string | null;
		summary?: string | null;

		/** Required */
		title: string;
		topic?: string | null;
		url?: string | null;
	}
	export interface ArticleFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		body: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		external_url: FormControl<string | null | undefined>,
		external_url_source: FormControl<string | null | undefined>,
		external_url_type: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		image_height: FormControl<number | null | undefined>,
		image_path: FormControl<string | null | undefined>,
		image_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		image_width: FormControl<number | null | undefined>,
		is_mobile_proxy_needed: FormControl<boolean | null | undefined>,
		is_proxy_needed: FormControl<boolean | null | undefined>,
		is_responsive: FormControl<boolean | null | undefined>,
		logo_url: FormControl<string | null | undefined>,
		needs_sanitize: FormControl<boolean | null | undefined>,
		proxy_url: FormControl<string | null | undefined>,
		redirector_link: FormControl<string | null | undefined>,
		square_logo_url: FormControl<string | null | undefined>,
		suitability_score: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			body: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			external_url: new FormControl<string | null | undefined>(undefined),
			external_url_source: new FormControl<string | null | undefined>(undefined),
			external_url_type: new FormControl<string | null | undefined>(undefined),
			image_height: new FormControl<number | null | undefined>(undefined),
			image_path: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			image_width: new FormControl<number | null | undefined>(undefined),
			is_mobile_proxy_needed: new FormControl<boolean | null | undefined>(undefined),
			is_proxy_needed: new FormControl<boolean | null | undefined>(undefined),
			is_responsive: new FormControl<boolean | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			needs_sanitize: new FormControl<boolean | null | undefined>(undefined),
			proxy_url: new FormControl<string | null | undefined>(undefined),
			redirector_link: new FormControl<string | null | undefined>(undefined),
			square_logo_url: new FormControl<string | null | undefined>(undefined),
			suitability_score: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topic: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArticlePhrase {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		created_at?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		length?: number | null;
		text?: string | null;
	}
	export interface ArticlePhraseFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		created_at: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		length: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateArticlePhraseFormGroup() {
		return new FormGroup<ArticlePhraseFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArticlePhraseresponse {
		article_phrase?: ArticlePhrase;
	}
	export interface ArticlePhraseresponseFormProperties {
	}
	export function CreateArticlePhraseresponseFormGroup() {
		return new FormGroup<ArticlePhraseresponseFormProperties>({
		});

	}

	export interface ArticlePhrases {
		article_phrases?: Array<ArticlePhrase>;
	}
	export interface ArticlePhrasesFormProperties {
	}
	export function CreateArticlePhrasesFormGroup() {
		return new FormGroup<ArticlePhrasesFormProperties>({
		});

	}

	export interface Articleresponse {
		article?: Article;
	}
	export interface ArticleresponseFormProperties {
	}
	export function CreateArticleresponseFormGroup() {
		return new FormGroup<ArticleresponseFormProperties>({
		});

	}

	export interface Articles {
		articles?: Array<Article>;
	}
	export interface ArticlesFormProperties {
	}
	export function CreateArticlesFormGroup() {
		return new FormGroup<ArticlesFormProperties>({
		});

	}

	export interface CustomFeed {

		/** Required */
		_id: string;
		custom_feed_filter_id?: string | null;
		custom_feed_permission_id?: string | null;
		custom_feed_template_id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		custom_feed_visibility?: number | null;
		default?: boolean | null;
		display_label?: string | null;
		is_auto_curated_newsletter_custom_feed?: boolean | null;

		/** Required */
		label: string;
		links?: string | null;

		/** Type: float */
		popularity?: number | null;
		premium_content?: boolean | null;
		seed_custom_feed_id?: string | null;
		third_party_articles_custom_feed_id?: string | null;
	}
	export interface CustomFeedFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		custom_feed_filter_id: FormControl<string | null | undefined>,
		custom_feed_permission_id: FormControl<string | null | undefined>,
		custom_feed_template_id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		custom_feed_visibility: FormControl<number | null | undefined>,
		default: FormControl<boolean | null | undefined>,
		display_label: FormControl<string | null | undefined>,
		is_auto_curated_newsletter_custom_feed: FormControl<boolean | null | undefined>,

		/** Required */
		label: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,

		/** Type: float */
		popularity: FormControl<number | null | undefined>,
		premium_content: FormControl<boolean | null | undefined>,
		seed_custom_feed_id: FormControl<string | null | undefined>,
		third_party_articles_custom_feed_id: FormControl<string | null | undefined>,
	}
	export function CreateCustomFeedFormGroup() {
		return new FormGroup<CustomFeedFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			custom_feed_filter_id: new FormControl<string | null | undefined>(undefined),
			custom_feed_permission_id: new FormControl<string | null | undefined>(undefined),
			custom_feed_template_id: new FormControl<string | null | undefined>(undefined),
			custom_feed_visibility: new FormControl<number | null | undefined>(undefined),
			default: new FormControl<boolean | null | undefined>(undefined),
			display_label: new FormControl<string | null | undefined>(undefined),
			is_auto_curated_newsletter_custom_feed: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			links: new FormControl<string | null | undefined>(undefined),
			popularity: new FormControl<number | null | undefined>(undefined),
			premium_content: new FormControl<boolean | null | undefined>(undefined),
			seed_custom_feed_id: new FormControl<string | null | undefined>(undefined),
			third_party_articles_custom_feed_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomFeedFilter {

		/** Required */
		_id: string;

		/** Required */
		custom_feed_id: string;
		source_ids?: Array<string>;
	}
	export interface CustomFeedFilterFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,

		/** Required */
		custom_feed_id: FormControl<string | null | undefined>,
	}
	export function CreateCustomFeedFilterFormGroup() {
		return new FormGroup<CustomFeedFilterFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			custom_feed_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomFeedFilterInput {

		/** Required */
		custom_feed_id: string;
		source_ids?: Array<string>;
	}
	export interface CustomFeedFilterInputFormProperties {

		/** Required */
		custom_feed_id: FormControl<string | null | undefined>,
	}
	export function CreateCustomFeedFilterInputFormGroup() {
		return new FormGroup<CustomFeedFilterInputFormProperties>({
			custom_feed_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomFeedFilterresponse {
		custom_feed_filter?: CustomFeedFilter;
	}
	export interface CustomFeedFilterresponseFormProperties {
	}
	export function CreateCustomFeedFilterresponseFormGroup() {
		return new FormGroup<CustomFeedFilterresponseFormProperties>({
		});

	}

	export interface CustomFeedFilters {
		custom_feed_filters?: Array<CustomFeedFilter>;
	}
	export interface CustomFeedFiltersFormProperties {
	}
	export function CreateCustomFeedFiltersFormGroup() {
		return new FormGroup<CustomFeedFiltersFormProperties>({
		});

	}

	export interface CustomFeedInput {
		custom_feed_filter_id?: string | null;
		custom_feed_permission_id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		custom_feed_visibility?: number | null;
		default?: boolean | null;
		is_auto_curated_newsletter_custom_feed?: boolean | null;

		/** Required */
		label: string;

		/** Type: float */
		popularity?: number | null;
		premium_content?: boolean | null;
		seed_custom_feed_id?: string | null;
		social_posting_id?: string | null;
		third_party_articles_custom_feed_id?: string | null;
	}
	export interface CustomFeedInputFormProperties {
		custom_feed_filter_id: FormControl<string | null | undefined>,
		custom_feed_permission_id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		custom_feed_visibility: FormControl<number | null | undefined>,
		default: FormControl<boolean | null | undefined>,
		is_auto_curated_newsletter_custom_feed: FormControl<boolean | null | undefined>,

		/** Required */
		label: FormControl<string | null | undefined>,

		/** Type: float */
		popularity: FormControl<number | null | undefined>,
		premium_content: FormControl<boolean | null | undefined>,
		seed_custom_feed_id: FormControl<string | null | undefined>,
		social_posting_id: FormControl<string | null | undefined>,
		third_party_articles_custom_feed_id: FormControl<string | null | undefined>,
	}
	export function CreateCustomFeedInputFormGroup() {
		return new FormGroup<CustomFeedInputFormProperties>({
			custom_feed_filter_id: new FormControl<string | null | undefined>(undefined),
			custom_feed_permission_id: new FormControl<string | null | undefined>(undefined),
			custom_feed_visibility: new FormControl<number | null | undefined>(undefined),
			default: new FormControl<boolean | null | undefined>(undefined),
			is_auto_curated_newsletter_custom_feed: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			popularity: new FormControl<number | null | undefined>(undefined),
			premium_content: new FormControl<boolean | null | undefined>(undefined),
			seed_custom_feed_id: new FormControl<string | null | undefined>(undefined),
			social_posting_id: new FormControl<string | null | undefined>(undefined),
			third_party_articles_custom_feed_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomFeedresponse {
		custom_feed?: CustomFeed;
	}
	export interface CustomFeedresponseFormProperties {
	}
	export function CreateCustomFeedresponseFormGroup() {
		return new FormGroup<CustomFeedresponseFormProperties>({
		});

	}

	export interface CustomFeeds {
		custom_feeds?: Array<CustomFeed>;
	}
	export interface CustomFeedsFormProperties {
	}
	export function CreateCustomFeedsFormGroup() {
		return new FormGroup<CustomFeedsFormProperties>({
		});

	}

	export interface Event {

		/** Required */
		_id: string;
		advisor_id?: string | null;
		created_at?: string | null;
		event_content?: EventContent;

		/** Required */
		original_url: string;
		originator_email?: string | null;
		originator_id?: string | null;
		parent_event_id?: string | null;
		referer?: string | null;

		/** Required */
		subject_email: string;
		subject_id?: string | null;

		/** Required */
		type: EventType;
	}
	export interface EventFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		advisor_id: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,

		/** Required */
		original_url: FormControl<string | null | undefined>,
		originator_email: FormControl<string | null | undefined>,
		originator_id: FormControl<string | null | undefined>,
		parent_event_id: FormControl<string | null | undefined>,
		referer: FormControl<string | null | undefined>,

		/** Required */
		subject_email: FormControl<string | null | undefined>,
		subject_id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<EventType | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			advisor_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			original_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			originator_email: new FormControl<string | null | undefined>(undefined),
			originator_id: new FormControl<string | null | undefined>(undefined),
			parent_event_id: new FormControl<string | null | undefined>(undefined),
			referer: new FormControl<string | null | undefined>(undefined),
			subject_email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subject_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EventType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EventType { page_view = 'page_view', sign_up = 'sign_up', sign_in = 'sign_in', content_posted = 'content_posted', create_post = 'create_post', publish_post = 'publish_post', update_post = 'update_post', delete_post = 'delete_post', unpublish_post = 'unpublish_post', invite = 'invite', publish_newsletter = 'publish_newsletter', publish_social = 'publish_social', click = 'click', delivered = 'delivered', open = 'open', dropped = 'dropped', bounce = 'bounce' }

	export interface EventContent {

		/** Mongo id of event */
		_id?: string | null;
		content_field?: string | null;
		content_id?: string | null;
		content_type?: string | null;
		created_at?: string | null;
		slug?: string | null;
		updated_at?: string | null;
	}
	export interface EventContentFormProperties {

		/** Mongo id of event */
		_id: FormControl<string | null | undefined>,
		content_field: FormControl<string | null | undefined>,
		content_id: FormControl<string | null | undefined>,
		content_type: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
	}
	export function CreateEventContentFormGroup() {
		return new FormGroup<EventContentFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined),
			content_field: new FormControl<string | null | undefined>(undefined),
			content_id: new FormControl<string | null | undefined>(undefined),
			content_type: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventInput {
		advisor_id?: string | null;
		created_at?: string | null;
		event_content?: EventContent;

		/** Required */
		original_url: string;
		originator_email?: string | null;
		originator_id?: string | null;
		parent_event_id?: string | null;
		referer?: string | null;

		/** Required */
		subject_email: string;
		subject_id?: string | null;

		/** Required */
		type: EventType;
	}
	export interface EventInputFormProperties {
		advisor_id: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,

		/** Required */
		original_url: FormControl<string | null | undefined>,
		originator_email: FormControl<string | null | undefined>,
		originator_id: FormControl<string | null | undefined>,
		parent_event_id: FormControl<string | null | undefined>,
		referer: FormControl<string | null | undefined>,

		/** Required */
		subject_email: FormControl<string | null | undefined>,
		subject_id: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<EventType | null | undefined>,
	}
	export function CreateEventInputFormGroup() {
		return new FormGroup<EventInputFormProperties>({
			advisor_id: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			original_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			originator_email: new FormControl<string | null | undefined>(undefined),
			originator_id: new FormControl<string | null | undefined>(undefined),
			parent_event_id: new FormControl<string | null | undefined>(undefined),
			referer: new FormControl<string | null | undefined>(undefined),
			subject_email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subject_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EventType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Eventcreateresponse {
		meta?: Meta;
	}
	export interface EventcreateresponseFormProperties {
	}
	export function CreateEventcreateresponseFormGroup() {
		return new FormGroup<EventcreateresponseFormProperties>({
		});

	}

	export interface Eventresponse {
		event?: Event;
	}
	export interface EventresponseFormProperties {
	}
	export function CreateEventresponseFormGroup() {
		return new FormGroup<EventresponseFormProperties>({
		});

	}

	export interface Events {
		events?: Array<Event>;
	}
	export interface EventsFormProperties {
	}
	export function CreateEventsFormGroup() {
		return new FormGroup<EventsFormProperties>({
		});

	}

	export interface Features {

		/** Required */
		_id: string;
	}
	export interface FeaturesFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
	}
	export function CreateFeaturesFormGroup() {
		return new FormGroup<FeaturesFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Group {

		/** Required */
		_id: string;
		autopublish?: boolean | null;
		is_default?: boolean | null;
		is_hidden?: boolean | null;
		name?: string | null;
		new_weekly_mailer_content?: string | null;
		newsletter_subject?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_articles_per_group?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_articles_per_newsletter?: number | null;
	}
	export interface GroupFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		autopublish: FormControl<boolean | null | undefined>,
		is_default: FormControl<boolean | null | undefined>,
		is_hidden: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		new_weekly_mailer_content: FormControl<string | null | undefined>,
		newsletter_subject: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_articles_per_group: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_articles_per_newsletter: FormControl<number | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			autopublish: new FormControl<boolean | null | undefined>(undefined),
			is_default: new FormControl<boolean | null | undefined>(undefined),
			is_hidden: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			new_weekly_mailer_content: new FormControl<string | null | undefined>(undefined),
			newsletter_subject: new FormControl<string | null | undefined>(undefined),
			number_articles_per_group: new FormControl<number | null | undefined>(undefined),
			number_articles_per_newsletter: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GroupInput {

		/** Required */
		_id: string;
		autopublish?: boolean | null;
		is_default?: boolean | null;
		is_hidden?: boolean | null;
		name?: string | null;
		new_weekly_mailer_content?: string | null;
		newsletter_subject?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_articles_per_group?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_articles_per_newsletter?: number | null;
	}
	export interface GroupInputFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		autopublish: FormControl<boolean | null | undefined>,
		is_default: FormControl<boolean | null | undefined>,
		is_hidden: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		new_weekly_mailer_content: FormControl<string | null | undefined>,
		newsletter_subject: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_articles_per_group: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number_articles_per_newsletter: FormControl<number | null | undefined>,
	}
	export function CreateGroupInputFormGroup() {
		return new FormGroup<GroupInputFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			autopublish: new FormControl<boolean | null | undefined>(undefined),
			is_default: new FormControl<boolean | null | undefined>(undefined),
			is_hidden: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			new_weekly_mailer_content: new FormControl<string | null | undefined>(undefined),
			newsletter_subject: new FormControl<string | null | undefined>(undefined),
			number_articles_per_group: new FormControl<number | null | undefined>(undefined),
			number_articles_per_newsletter: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Groupresponse {
		group?: Group;
	}
	export interface GroupresponseFormProperties {
	}
	export function CreateGroupresponseFormGroup() {
		return new FormGroup<GroupresponseFormProperties>({
		});

	}

	export interface Groups {
		groups?: Array<Group>;
	}
	export interface GroupsFormProperties {
	}
	export function CreateGroupsFormGroup() {
		return new FormGroup<GroupsFormProperties>({
		});

	}

	export interface Member {

		/** Required */
		_id: string;
		address?: string | null;
		age?: string | null;
		assets?: string | null;
		city?: string | null;
		data_estimated?: boolean | null;
		education?: string | null;

		/** Required */
		email: string;
		estimated_location?: string | null;
		estimated_zip?: string | null;
		family?: string | null;
		first_name?: string | null;
		gender?: string | null;
		genuine_email?: boolean | null;
		high_net_worth?: boolean | null;
		home_market_value?: string | null;
		home_owner_status?: string | null;
		hometown?: string | null;
		household_income?: string | null;
		interest_consultation?: string | null;
		interest_in_new_advisor?: string | null;
		invited_by?: string | null;
		invited_on?: string | null;
		is_client?: boolean | null;
		is_hidden?: boolean | null;
		last_active_date?: string | null;
		last_name?: string | null;
		location?: string | null;
		marital_status?: string | null;
		message?: string | null;
		occupation?: string | null;
		phone?: string | null;
		picture_url?: string | null;
		portfolio_size?: string | null;
		profile_url?: string | null;
		register_ip_addr?: string | null;
		signed_up_with?: string | null;
		state?: string | null;
		subscribed_group_ids?: Array<string>;
		tags?: Array<string>;
		unsubscribed?: boolean | null;
		unsubscribed_date?: boolean | null;
		user_type?: string | null;
		zip?: string | null;
	}
	export interface MemberFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		address: FormControl<string | null | undefined>,
		age: FormControl<string | null | undefined>,
		assets: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		data_estimated: FormControl<boolean | null | undefined>,
		education: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,
		estimated_location: FormControl<string | null | undefined>,
		estimated_zip: FormControl<string | null | undefined>,
		family: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		gender: FormControl<string | null | undefined>,
		genuine_email: FormControl<boolean | null | undefined>,
		high_net_worth: FormControl<boolean | null | undefined>,
		home_market_value: FormControl<string | null | undefined>,
		home_owner_status: FormControl<string | null | undefined>,
		hometown: FormControl<string | null | undefined>,
		household_income: FormControl<string | null | undefined>,
		interest_consultation: FormControl<string | null | undefined>,
		interest_in_new_advisor: FormControl<string | null | undefined>,
		invited_by: FormControl<string | null | undefined>,
		invited_on: FormControl<string | null | undefined>,
		is_client: FormControl<boolean | null | undefined>,
		is_hidden: FormControl<boolean | null | undefined>,
		last_active_date: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		marital_status: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		occupation: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		picture_url: FormControl<string | null | undefined>,
		portfolio_size: FormControl<string | null | undefined>,
		profile_url: FormControl<string | null | undefined>,
		register_ip_addr: FormControl<string | null | undefined>,
		signed_up_with: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		unsubscribed: FormControl<boolean | null | undefined>,
		unsubscribed_date: FormControl<boolean | null | undefined>,
		user_type: FormControl<string | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address: new FormControl<string | null | undefined>(undefined),
			age: new FormControl<string | null | undefined>(undefined),
			assets: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			data_estimated: new FormControl<boolean | null | undefined>(undefined),
			education: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			estimated_location: new FormControl<string | null | undefined>(undefined),
			estimated_zip: new FormControl<string | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			gender: new FormControl<string | null | undefined>(undefined),
			genuine_email: new FormControl<boolean | null | undefined>(undefined),
			high_net_worth: new FormControl<boolean | null | undefined>(undefined),
			home_market_value: new FormControl<string | null | undefined>(undefined),
			home_owner_status: new FormControl<string | null | undefined>(undefined),
			hometown: new FormControl<string | null | undefined>(undefined),
			household_income: new FormControl<string | null | undefined>(undefined),
			interest_consultation: new FormControl<string | null | undefined>(undefined),
			interest_in_new_advisor: new FormControl<string | null | undefined>(undefined),
			invited_by: new FormControl<string | null | undefined>(undefined),
			invited_on: new FormControl<string | null | undefined>(undefined),
			is_client: new FormControl<boolean | null | undefined>(undefined),
			is_hidden: new FormControl<boolean | null | undefined>(undefined),
			last_active_date: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			marital_status: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			occupation: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
			portfolio_size: new FormControl<string | null | undefined>(undefined),
			profile_url: new FormControl<string | null | undefined>(undefined),
			register_ip_addr: new FormControl<string | null | undefined>(undefined),
			signed_up_with: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			unsubscribed: new FormControl<boolean | null | undefined>(undefined),
			unsubscribed_date: new FormControl<boolean | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemberEvent {
		_id?: string | null;
		content_url?: string | null;
		created_at?: string | null;
		event_date?: string | null;
		event_source?: string | null;
		event_type?: string | null;
		member_id?: string | null;
		original_url?: string | null;
		originator_email?: string | null;
		originator_group_id?: string | null;
		originator_id?: string | null;
		originator_name?: string | null;
		originator_type?: string | null;
		parent_event_id?: string | null;
		parent_originator_id?: string | null;
		referer?: string | null;
		source?: string | null;
		subject_id?: string | null;
		type?: string | null;
		username?: string | null;
	}
	export interface MemberEventFormProperties {
		_id: FormControl<string | null | undefined>,
		content_url: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		event_date: FormControl<string | null | undefined>,
		event_source: FormControl<string | null | undefined>,
		event_type: FormControl<string | null | undefined>,
		member_id: FormControl<string | null | undefined>,
		original_url: FormControl<string | null | undefined>,
		originator_email: FormControl<string | null | undefined>,
		originator_group_id: FormControl<string | null | undefined>,
		originator_id: FormControl<string | null | undefined>,
		originator_name: FormControl<string | null | undefined>,
		originator_type: FormControl<string | null | undefined>,
		parent_event_id: FormControl<string | null | undefined>,
		parent_originator_id: FormControl<string | null | undefined>,
		referer: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		subject_id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateMemberEventFormGroup() {
		return new FormGroup<MemberEventFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined),
			content_url: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			event_date: new FormControl<string | null | undefined>(undefined),
			event_source: new FormControl<string | null | undefined>(undefined),
			event_type: new FormControl<string | null | undefined>(undefined),
			member_id: new FormControl<string | null | undefined>(undefined),
			original_url: new FormControl<string | null | undefined>(undefined),
			originator_email: new FormControl<string | null | undefined>(undefined),
			originator_group_id: new FormControl<string | null | undefined>(undefined),
			originator_id: new FormControl<string | null | undefined>(undefined),
			originator_name: new FormControl<string | null | undefined>(undefined),
			originator_type: new FormControl<string | null | undefined>(undefined),
			parent_event_id: new FormControl<string | null | undefined>(undefined),
			parent_originator_id: new FormControl<string | null | undefined>(undefined),
			referer: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			subject_id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemberEvents {
		member_events?: Array<MemberEvent>;
		members?: Array<TruncatedMember>;
	}
	export interface MemberEventsFormProperties {
	}
	export function CreateMemberEventsFormGroup() {
		return new FormGroup<MemberEventsFormProperties>({
		});

	}

	export interface TruncatedMember {
		_id?: string | null;
		added_on?: string | null;
		email?: string | null;
		first_name?: string | null;
		last_name?: string | null;
		picture_url?: string | null;
	}
	export interface TruncatedMemberFormProperties {
		_id: FormControl<string | null | undefined>,
		added_on: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		picture_url: FormControl<string | null | undefined>,
	}
	export function CreateTruncatedMemberFormGroup() {
		return new FormGroup<TruncatedMemberFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined),
			added_on: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemberReport {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		day?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		event_count?: number | null;
		originator_group_id?: string | null;
		parent_originator_id?: string | null;
		source?: string | null;
		type?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year?: number | null;
	}
	export interface MemberReportFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		day: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		event_count: FormControl<number | null | undefined>,
		originator_group_id: FormControl<string | null | undefined>,
		parent_originator_id: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateMemberReportFormGroup() {
		return new FormGroup<MemberReportFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			event_count: new FormControl<number | null | undefined>(undefined),
			originator_group_id: new FormControl<string | null | undefined>(undefined),
			parent_originator_id: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MemberReports {
		member_reports?: Array<MemberReport>;
	}
	export interface MemberReportsFormProperties {
	}
	export function CreateMemberReportsFormGroup() {
		return new FormGroup<MemberReportsFormProperties>({
		});

	}

	export interface Memberresponse {
		member?: Member;
	}
	export interface MemberresponseFormProperties {
	}
	export function CreateMemberresponseFormGroup() {
		return new FormGroup<MemberresponseFormProperties>({
		});

	}

	export interface Members {
		members?: Array<Member>;
		meta?: Meta;
		more_results?: boolean | null;
	}
	export interface MembersFormProperties {
		more_results: FormControl<boolean | null | undefined>,
	}
	export function CreateMembersFormGroup() {
		return new FormGroup<MembersFormProperties>({
			more_results: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Meta {
		message?: string | null;
	}
	export interface MetaFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateMetaFormGroup() {
		return new FormGroup<MetaFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Newsletter {
		_id?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		click_count?: string | null;
		is_default?: boolean | null;
		is_sent?: boolean | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_click_count?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		unique_click_count?: string | null;
	}
	export interface NewsletterFormProperties {
		_id: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		click_count: FormControl<string | null | undefined>,
		is_default: FormControl<boolean | null | undefined>,
		is_sent: FormControl<boolean | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_click_count: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		unique_click_count: FormControl<string | null | undefined>,
	}
	export function CreateNewsletterFormGroup() {
		return new FormGroup<NewsletterFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined),
			click_count: new FormControl<string | null | undefined>(undefined),
			is_default: new FormControl<boolean | null | undefined>(undefined),
			is_sent: new FormControl<boolean | null | undefined>(undefined),
			total_click_count: new FormControl<string | null | undefined>(undefined),
			unique_click_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewsletterInput {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		click_count?: string | null;
		is_default?: boolean | null;
		is_sent?: boolean | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_click_count?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		unique_click_count?: string | null;
	}
	export interface NewsletterInputFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		click_count: FormControl<string | null | undefined>,
		is_default: FormControl<boolean | null | undefined>,
		is_sent: FormControl<boolean | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_click_count: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		unique_click_count: FormControl<string | null | undefined>,
	}
	export function CreateNewsletterInputFormGroup() {
		return new FormGroup<NewsletterInputFormProperties>({
			click_count: new FormControl<string | null | undefined>(undefined),
			is_default: new FormControl<boolean | null | undefined>(undefined),
			is_sent: new FormControl<boolean | null | undefined>(undefined),
			total_click_count: new FormControl<string | null | undefined>(undefined),
			unique_click_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewsletterSetting {

		/** Required */
		_id: string;
		banner_color?: string | null;
		body_html?: string | null;
		email_accent_color?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		email_day_of_week?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		email_hour?: number | null;
		email_status?: string | null;
		facebook_active_wall?: string | null;
		footer_email_font?: string | null;
		footer_html?: string | null;
		footer_image_url?: string | null;
		group_id?: string | null;
		header_background_color?: string | null;
		header_image_url?: string | null;
		intro_text?: string | null;
		linkedin_active_wall?: string | null;
		montage_enabled?: boolean | null;
		montage_facebook_image_url?: string | null;
		montage_linkedin_image_url?: string | null;
		montage_title?: string | null;
		montage_twitter_image_url?: string | null;
		newsletter_ids?: Array<string>;
		newsletter_type?: string | null;
		primary_email_font?: string | null;
		salutation_text?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		social_day_of_week?: number | null;
		social_description?: string | null;
		social_posting_text?: string | null;
		social_title?: string | null;
		subject?: string | null;
		title_color?: string | null;
	}
	export interface NewsletterSettingFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		banner_color: FormControl<string | null | undefined>,
		body_html: FormControl<string | null | undefined>,
		email_accent_color: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		email_day_of_week: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		email_hour: FormControl<number | null | undefined>,
		email_status: FormControl<string | null | undefined>,
		facebook_active_wall: FormControl<string | null | undefined>,
		footer_email_font: FormControl<string | null | undefined>,
		footer_html: FormControl<string | null | undefined>,
		footer_image_url: FormControl<string | null | undefined>,
		group_id: FormControl<string | null | undefined>,
		header_background_color: FormControl<string | null | undefined>,
		header_image_url: FormControl<string | null | undefined>,
		intro_text: FormControl<string | null | undefined>,
		linkedin_active_wall: FormControl<string | null | undefined>,
		montage_enabled: FormControl<boolean | null | undefined>,
		montage_facebook_image_url: FormControl<string | null | undefined>,
		montage_linkedin_image_url: FormControl<string | null | undefined>,
		montage_title: FormControl<string | null | undefined>,
		montage_twitter_image_url: FormControl<string | null | undefined>,
		newsletter_type: FormControl<string | null | undefined>,
		primary_email_font: FormControl<string | null | undefined>,
		salutation_text: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		social_day_of_week: FormControl<number | null | undefined>,
		social_description: FormControl<string | null | undefined>,
		social_posting_text: FormControl<string | null | undefined>,
		social_title: FormControl<string | null | undefined>,
		subject: FormControl<string | null | undefined>,
		title_color: FormControl<string | null | undefined>,
	}
	export function CreateNewsletterSettingFormGroup() {
		return new FormGroup<NewsletterSettingFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			banner_color: new FormControl<string | null | undefined>(undefined),
			body_html: new FormControl<string | null | undefined>(undefined),
			email_accent_color: new FormControl<string | null | undefined>(undefined),
			email_day_of_week: new FormControl<number | null | undefined>(undefined),
			email_hour: new FormControl<number | null | undefined>(undefined),
			email_status: new FormControl<string | null | undefined>(undefined),
			facebook_active_wall: new FormControl<string | null | undefined>(undefined),
			footer_email_font: new FormControl<string | null | undefined>(undefined),
			footer_html: new FormControl<string | null | undefined>(undefined),
			footer_image_url: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<string | null | undefined>(undefined),
			header_background_color: new FormControl<string | null | undefined>(undefined),
			header_image_url: new FormControl<string | null | undefined>(undefined),
			intro_text: new FormControl<string | null | undefined>(undefined),
			linkedin_active_wall: new FormControl<string | null | undefined>(undefined),
			montage_enabled: new FormControl<boolean | null | undefined>(undefined),
			montage_facebook_image_url: new FormControl<string | null | undefined>(undefined),
			montage_linkedin_image_url: new FormControl<string | null | undefined>(undefined),
			montage_title: new FormControl<string | null | undefined>(undefined),
			montage_twitter_image_url: new FormControl<string | null | undefined>(undefined),
			newsletter_type: new FormControl<string | null | undefined>(undefined),
			primary_email_font: new FormControl<string | null | undefined>(undefined),
			salutation_text: new FormControl<string | null | undefined>(undefined),
			social_day_of_week: new FormControl<number | null | undefined>(undefined),
			social_description: new FormControl<string | null | undefined>(undefined),
			social_posting_text: new FormControl<string | null | undefined>(undefined),
			social_title: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			title_color: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewsletterSettings {
		newsletter_settings?: Array<NewsletterSetting>;
	}
	export interface NewsletterSettingsFormProperties {
	}
	export function CreateNewsletterSettingsFormGroup() {
		return new FormGroup<NewsletterSettingsFormProperties>({
		});

	}

	export interface NewsletterSettingsInput {
		newsletter_setting?: NewsletterSetting;
	}
	export interface NewsletterSettingsInputFormProperties {
	}
	export function CreateNewsletterSettingsInputFormGroup() {
		return new FormGroup<NewsletterSettingsInputFormProperties>({
		});

	}

	export interface Newsletterresponse {
		newsletter?: Newsletter;
	}
	export interface NewsletterresponseFormProperties {
	}
	export function CreateNewsletterresponseFormGroup() {
		return new FormGroup<NewsletterresponseFormProperties>({
		});

	}

	export interface Newsletters {
		newsletters?: Array<Newsletter>;
	}
	export interface NewslettersFormProperties {
	}
	export function CreateNewslettersFormGroup() {
		return new FormGroup<NewslettersFormProperties>({
		});

	}

	export interface Newslettersettingresponse {
		newsletter_setting?: NewsletterSetting;
	}
	export interface NewslettersettingresponseFormProperties {
	}
	export function CreateNewslettersettingresponseFormGroup() {
		return new FormGroup<NewslettersettingresponseFormProperties>({
		});

	}

	export interface OrgSetting {

		/** Required */
		_id: string;
		company_address?: string | null;
		company_contact_email?: string | null;
		company_homepage_url?: string | null;
		is_default?: boolean | null;
		name?: string | null;
		privacy_policy_url?: string | null;
		site_url?: string | null;
		terms_and_conditions_url?: string | null;
	}
	export interface OrgSettingFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		company_address: FormControl<string | null | undefined>,
		company_contact_email: FormControl<string | null | undefined>,
		company_homepage_url: FormControl<string | null | undefined>,
		is_default: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		privacy_policy_url: FormControl<string | null | undefined>,
		site_url: FormControl<string | null | undefined>,
		terms_and_conditions_url: FormControl<string | null | undefined>,
	}
	export function CreateOrgSettingFormGroup() {
		return new FormGroup<OrgSettingFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			company_address: new FormControl<string | null | undefined>(undefined),
			company_contact_email: new FormControl<string | null | undefined>(undefined),
			company_homepage_url: new FormControl<string | null | undefined>(undefined),
			is_default: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			privacy_policy_url: new FormControl<string | null | undefined>(undefined),
			site_url: new FormControl<string | null | undefined>(undefined),
			terms_and_conditions_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PersonalSettings {

		/** Required */
		_id: string;
	}
	export interface PersonalSettingsFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
	}
	export function CreatePersonalSettingsFormGroup() {
		return new FormGroup<PersonalSettingsFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Post {
		_id?: string | null;
		advisor_id?: string | null;
		approval_status?: string | null;
		approval_transactions?: Array<string>;
		article_id?: string | null;
		comment?: string | null;
		created_at?: string | null;
		display_date?: string | null;
		display_summary?: string | null;
		display_tag?: string | null;
		external_url?: string | null;
		external_url_source?: string | null;
		external_url_type?: string | null;
		group_ids?: Array<string>;
		image_height?: string | null;
		image_path?: string | null;
		image_url?: string | null;
		image_width?: string | null;
		is_featured?: boolean | null;
		is_mobile_proxy_needed?: boolean | null;
		is_proxy_needed?: boolean | null;
		is_published?: boolean | null;
		is_responsive?: boolean | null;
		logo_url?: string | null;
		needs_sanitize?: string | null;
		newsletter_ids?: Array<string>;
		post_date?: string | null;
		proxy_url?: string | null;
		redirector_link?: string | null;
		slug?: string | null;
		square_logo_url?: string | null;
		suitability_score?: string | null;
		summary?: string | null;
		title?: string | null;
		topic?: string | null;
		updated_at?: string | null;
		vestorly_url?: string | null;
		video?: string | null;
		video_id?: string | null;
	}
	export interface PostFormProperties {
		_id: FormControl<string | null | undefined>,
		advisor_id: FormControl<string | null | undefined>,
		approval_status: FormControl<string | null | undefined>,
		article_id: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		display_date: FormControl<string | null | undefined>,
		display_summary: FormControl<string | null | undefined>,
		display_tag: FormControl<string | null | undefined>,
		external_url: FormControl<string | null | undefined>,
		external_url_source: FormControl<string | null | undefined>,
		external_url_type: FormControl<string | null | undefined>,
		image_height: FormControl<string | null | undefined>,
		image_path: FormControl<string | null | undefined>,
		image_url: FormControl<string | null | undefined>,
		image_width: FormControl<string | null | undefined>,
		is_featured: FormControl<boolean | null | undefined>,
		is_mobile_proxy_needed: FormControl<boolean | null | undefined>,
		is_proxy_needed: FormControl<boolean | null | undefined>,
		is_published: FormControl<boolean | null | undefined>,
		is_responsive: FormControl<boolean | null | undefined>,
		logo_url: FormControl<string | null | undefined>,
		needs_sanitize: FormControl<string | null | undefined>,
		post_date: FormControl<string | null | undefined>,
		proxy_url: FormControl<string | null | undefined>,
		redirector_link: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		square_logo_url: FormControl<string | null | undefined>,
		suitability_score: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
		vestorly_url: FormControl<string | null | undefined>,
		video: FormControl<string | null | undefined>,
		video_id: FormControl<string | null | undefined>,
	}
	export function CreatePostFormGroup() {
		return new FormGroup<PostFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined),
			advisor_id: new FormControl<string | null | undefined>(undefined),
			approval_status: new FormControl<string | null | undefined>(undefined),
			article_id: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			display_date: new FormControl<string | null | undefined>(undefined),
			display_summary: new FormControl<string | null | undefined>(undefined),
			display_tag: new FormControl<string | null | undefined>(undefined),
			external_url: new FormControl<string | null | undefined>(undefined),
			external_url_source: new FormControl<string | null | undefined>(undefined),
			external_url_type: new FormControl<string | null | undefined>(undefined),
			image_height: new FormControl<string | null | undefined>(undefined),
			image_path: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			image_width: new FormControl<string | null | undefined>(undefined),
			is_featured: new FormControl<boolean | null | undefined>(undefined),
			is_mobile_proxy_needed: new FormControl<boolean | null | undefined>(undefined),
			is_proxy_needed: new FormControl<boolean | null | undefined>(undefined),
			is_published: new FormControl<boolean | null | undefined>(undefined),
			is_responsive: new FormControl<boolean | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			needs_sanitize: new FormControl<string | null | undefined>(undefined),
			post_date: new FormControl<string | null | undefined>(undefined),
			proxy_url: new FormControl<string | null | undefined>(undefined),
			redirector_link: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			square_logo_url: new FormControl<string | null | undefined>(undefined),
			suitability_score: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
			vestorly_url: new FormControl<string | null | undefined>(undefined),
			video: new FormControl<string | null | undefined>(undefined),
			video_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostInput {
		advisor_id?: string | null;
		approval_status?: string | null;
		approval_transactions?: Array<string>;
		article_id?: string | null;
		comment?: string | null;
		created_at?: string | null;
		display_date?: string | null;
		display_summary?: string | null;
		display_tag?: string | null;
		external_url?: string | null;
		external_url_source?: string | null;
		external_url_type?: string | null;
		group_ids?: Array<string>;
		image_height?: string | null;
		image_path?: string | null;
		image_url?: string | null;
		image_width?: string | null;
		is_featured?: boolean | null;
		is_mobile_proxy_needed?: boolean | null;
		is_proxy_needed?: boolean | null;
		is_published?: boolean | null;
		is_responsive?: boolean | null;
		logo_url?: string | null;
		needs_sanitize?: string | null;
		newsletter_ids?: Array<string>;
		post_date?: string | null;
		proxy_url?: string | null;
		slug?: string | null;
		square_logo_url?: string | null;
		suitability_score?: string | null;
		summary?: string | null;

		/** Required */
		title: string;
		topic?: string | null;
		updated_at?: string | null;
		vestorly_url?: string | null;
		video?: string | null;
		video_id?: string | null;
	}
	export interface PostInputFormProperties {
		advisor_id: FormControl<string | null | undefined>,
		approval_status: FormControl<string | null | undefined>,
		article_id: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
		created_at: FormControl<string | null | undefined>,
		display_date: FormControl<string | null | undefined>,
		display_summary: FormControl<string | null | undefined>,
		display_tag: FormControl<string | null | undefined>,
		external_url: FormControl<string | null | undefined>,
		external_url_source: FormControl<string | null | undefined>,
		external_url_type: FormControl<string | null | undefined>,
		image_height: FormControl<string | null | undefined>,
		image_path: FormControl<string | null | undefined>,
		image_url: FormControl<string | null | undefined>,
		image_width: FormControl<string | null | undefined>,
		is_featured: FormControl<boolean | null | undefined>,
		is_mobile_proxy_needed: FormControl<boolean | null | undefined>,
		is_proxy_needed: FormControl<boolean | null | undefined>,
		is_published: FormControl<boolean | null | undefined>,
		is_responsive: FormControl<boolean | null | undefined>,
		logo_url: FormControl<string | null | undefined>,
		needs_sanitize: FormControl<string | null | undefined>,
		post_date: FormControl<string | null | undefined>,
		proxy_url: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		square_logo_url: FormControl<string | null | undefined>,
		suitability_score: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
		updated_at: FormControl<string | null | undefined>,
		vestorly_url: FormControl<string | null | undefined>,
		video: FormControl<string | null | undefined>,
		video_id: FormControl<string | null | undefined>,
	}
	export function CreatePostInputFormGroup() {
		return new FormGroup<PostInputFormProperties>({
			advisor_id: new FormControl<string | null | undefined>(undefined),
			approval_status: new FormControl<string | null | undefined>(undefined),
			article_id: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			display_date: new FormControl<string | null | undefined>(undefined),
			display_summary: new FormControl<string | null | undefined>(undefined),
			display_tag: new FormControl<string | null | undefined>(undefined),
			external_url: new FormControl<string | null | undefined>(undefined),
			external_url_source: new FormControl<string | null | undefined>(undefined),
			external_url_type: new FormControl<string | null | undefined>(undefined),
			image_height: new FormControl<string | null | undefined>(undefined),
			image_path: new FormControl<string | null | undefined>(undefined),
			image_url: new FormControl<string | null | undefined>(undefined),
			image_width: new FormControl<string | null | undefined>(undefined),
			is_featured: new FormControl<boolean | null | undefined>(undefined),
			is_mobile_proxy_needed: new FormControl<boolean | null | undefined>(undefined),
			is_proxy_needed: new FormControl<boolean | null | undefined>(undefined),
			is_published: new FormControl<boolean | null | undefined>(undefined),
			is_responsive: new FormControl<boolean | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			needs_sanitize: new FormControl<string | null | undefined>(undefined),
			post_date: new FormControl<string | null | undefined>(undefined),
			proxy_url: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			square_logo_url: new FormControl<string | null | undefined>(undefined),
			suitability_score: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			topic: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<string | null | undefined>(undefined),
			vestorly_url: new FormControl<string | null | undefined>(undefined),
			video: new FormControl<string | null | undefined>(undefined),
			video_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Postrequest {
		post?: PostInput;
	}
	export interface PostrequestFormProperties {
	}
	export function CreatePostrequestFormGroup() {
		return new FormGroup<PostrequestFormProperties>({
		});

	}

	export interface Postresponse {
		post?: Post;
	}
	export interface PostresponseFormProperties {
	}
	export function CreatePostresponseFormGroup() {
		return new FormGroup<PostresponseFormProperties>({
		});

	}

	export interface Posts {
		posts?: Array<Post>;
	}
	export interface PostsFormProperties {
	}
	export function CreatePostsFormGroup() {
		return new FormGroup<PostsFormProperties>({
		});

	}

	export interface SeedCustomFeed {

		/** Required */
		_id: string;
		article_id?: string | null;
		custom_feed_id?: string | null;
		not_article_id?: string | null;
		not_seeds?: Array<string>;
		seeds?: Array<string>;
		sort_by?: string | null;
	}
	export interface SeedCustomFeedFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		article_id: FormControl<string | null | undefined>,
		custom_feed_id: FormControl<string | null | undefined>,
		not_article_id: FormControl<string | null | undefined>,
		sort_by: FormControl<string | null | undefined>,
	}
	export function CreateSeedCustomFeedFormGroup() {
		return new FormGroup<SeedCustomFeedFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			article_id: new FormControl<string | null | undefined>(undefined),
			custom_feed_id: new FormControl<string | null | undefined>(undefined),
			not_article_id: new FormControl<string | null | undefined>(undefined),
			sort_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeedCustomFeedInput {
		article_id?: string | null;

		/** Required */
		custom_feed_id: string;
		not_article_id?: string | null;
		not_seeds?: Array<string>;
		seeds?: Array<string>;
		sort_by?: string | null;
	}
	export interface SeedCustomFeedInputFormProperties {
		article_id: FormControl<string | null | undefined>,

		/** Required */
		custom_feed_id: FormControl<string | null | undefined>,
		not_article_id: FormControl<string | null | undefined>,
		sort_by: FormControl<string | null | undefined>,
	}
	export function CreateSeedCustomFeedInputFormGroup() {
		return new FormGroup<SeedCustomFeedInputFormProperties>({
			article_id: new FormControl<string | null | undefined>(undefined),
			custom_feed_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			not_article_id: new FormControl<string | null | undefined>(undefined),
			sort_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SeedCustomFeedresponse {
		seed_custom_feed?: SeedCustomFeed;
	}
	export interface SeedCustomFeedresponseFormProperties {
	}
	export function CreateSeedCustomFeedresponseFormGroup() {
		return new FormGroup<SeedCustomFeedresponseFormProperties>({
		});

	}

	export interface SeedCustomFeeds {
		seed_custom_feeds?: Array<SeedCustomFeed>;
	}
	export interface SeedCustomFeedsFormProperties {
	}
	export function CreateSeedCustomFeedsFormGroup() {
		return new FormGroup<SeedCustomFeedsFormProperties>({
		});

	}

	export interface Session {
		_id?: string | null;
		current_user?: User;
		new_user?: boolean | null;
		settings?: Settings;
		'vestorly-auth'?: string | null;
	}
	export interface SessionFormProperties {
		_id: FormControl<string | null | undefined>,
		new_user: FormControl<boolean | null | undefined>,
		'vestorly-auth': FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined),
			new_user: new FormControl<boolean | null | undefined>(undefined),
			'vestorly-auth': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SessionLogoutResponse {
		message?: string | null;
	}
	export interface SessionLogoutResponseFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateSessionLogoutResponseFormGroup() {
		return new FormGroup<SessionLogoutResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Settings {

		/** Required */
		_id: string;
		adv_brochure?: string | null;
		company?: string | null;
		disclosure?: string | null;
		feature?: Features;
		name?: string | null;
		orgsetting?: OrgSetting;
		personalsetting?: PersonalSettings;
		picture_url?: string | null;
		slug?: string | null;
		website?: string | null;
	}
	export interface SettingsFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		adv_brochure: FormControl<string | null | undefined>,
		company: FormControl<string | null | undefined>,
		disclosure: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		picture_url: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			adv_brochure: new FormControl<string | null | undefined>(undefined),
			company: new FormControl<string | null | undefined>(undefined),
			disclosure: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Source {

		/** Required */
		_id: string;
		custom_rss_feed?: boolean | null;
		enabled?: boolean | null;
		logo_url?: string | null;

		/** Required */
		name: string;

		/** Required */
		rss_publisher: string;

		/** Required */
		url: string;
	}
	export interface SourceFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		custom_rss_feed: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		logo_url: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		rss_publisher: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			custom_rss_feed: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rss_publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SourceInput {
		custom_rss_feed?: boolean | null;
		enabled?: boolean | null;
		logo_url?: string | null;

		/** Required */
		name: string;

		/** Required */
		rss_publisher: string;

		/** Required */
		url: string;
	}
	export interface SourceInputFormProperties {
		custom_rss_feed: FormControl<boolean | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		logo_url: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		rss_publisher: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSourceInputFormGroup() {
		return new FormGroup<SourceInputFormProperties>({
			custom_rss_feed: new FormControl<boolean | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			logo_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rss_publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sourceresponse {
		source?: Source;
	}
	export interface SourceresponseFormProperties {
	}
	export function CreateSourceresponseFormGroup() {
		return new FormGroup<SourceresponseFormProperties>({
		});

	}

	export interface Sources {
		sources?: Array<Source>;
	}
	export interface SourcesFormProperties {
	}
	export function CreateSourcesFormGroup() {
		return new FormGroup<SourcesFormProperties>({
		});

	}

	export interface User {

		/** Required */
		_id: string;
		company?: string | null;
		first_name?: string | null;
		last_name?: string | null;
		name?: string | null;
		new_user?: boolean | null;
		picture_url?: string | null;
		plan_expired?: boolean | null;
		plan_id?: string | null;
		plan_setup?: boolean | null;
		plan_status?: string | null;
		plan_stripe?: boolean | null;
		show_tour?: boolean | null;
		slug?: string | null;
		user_type?: string | null;
		username?: string | null;
		website?: string | null;
	}
	export interface UserFormProperties {

		/** Required */
		_id: FormControl<string | null | undefined>,
		company: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		new_user: FormControl<boolean | null | undefined>,
		picture_url: FormControl<string | null | undefined>,
		plan_expired: FormControl<boolean | null | undefined>,
		plan_id: FormControl<string | null | undefined>,
		plan_setup: FormControl<boolean | null | undefined>,
		plan_status: FormControl<string | null | undefined>,
		plan_stripe: FormControl<boolean | null | undefined>,
		show_tour: FormControl<boolean | null | undefined>,
		slug: FormControl<string | null | undefined>,
		user_type: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			company: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			new_user: new FormControl<boolean | null | undefined>(undefined),
			picture_url: new FormControl<string | null | undefined>(undefined),
			plan_expired: new FormControl<boolean | null | undefined>(undefined),
			plan_id: new FormControl<string | null | undefined>(undefined),
			plan_setup: new FormControl<boolean | null | undefined>(undefined),
			plan_status: new FormControl<string | null | undefined>(undefined),
			plan_stripe: new FormControl<boolean | null | undefined>(undefined),
			show_tour: new FormControl<boolean | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			user_type: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a single advisor given their ID
		 * Get advisors/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id Advisor Id to fetch
		 * @return {void} Advisor response
		 */
		FindAdvisorByID(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'advisors/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns phrases used in Categories
		 * Get article_phrases
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} text_search Text to search phrases
		 * @param {number} size Number of returned phrases
		 * @param {number} from Number of phrases to skip
		 * @return {void} Response
		 */
		FindArticlePhrases(vestorly_auth: string, access_token: string | null | undefined, text_search: string | null | undefined, size: number | null | undefined, from: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'article_phrases?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&text_search=' + (text_search == null ? '' : encodeURIComponent(text_search)) + '&size=' + size + '&from=' + from, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all articles
		 * Get articles
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {number} limit Limit on the number of articles to return
		 * @param {string} text_query Search query parameter
		 * @param {string} sort_direction Direction of sort (used with sort_by parameter)
		 * @param {string} sort_by Field on model to sort by
		 * @return {void} Response
		 */
		FindArticles(vestorly_auth: string, access_token: string | null | undefined, limit: number | null | undefined, text_query: string | null | undefined, sort_direction: string | null | undefined, sort_by: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'articles?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&limit=' + limit + '&text_query=' + (text_query == null ? '' : encodeURIComponent(text_query)) + '&sort_direction=' + (sort_direction == null ? '' : encodeURIComponent(sort_direction)) + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single article
		 * Get articles/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id Article Id to fetch
		 * @return {void} Article response
		 */
		FindArticleByID(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'articles/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all Categorie's filters
		 * Get custom_feed_filters
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} Response
		 */
		FindCustomFeedFilters(vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'custom_feed_filters?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Category filter
		 * Post custom_feed_filters
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {CustomFeedFilterInput} requestBody Category filter to add
		 * @return {CustomFeedFilterresponse} Custom Feed Filter response
		 */
		CreateCustomFeedFilter(vestorly_auth: string, access_token: string | null | undefined, requestBody: CustomFeedFilterInput): Observable<CustomFeedFilterresponse> {
			return this.http.post<CustomFeedFilterresponse>(this.baseUri + 'custom_feed_filters?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a single Category's filter
		 * Get custom_feed_filters/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id Custom Feed Filter Id to fetch
		 * @return {void} Custom Feed Filter response
		 */
		FindCustomFeedFilterByID(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'custom_feed_filters/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Category Feed Filter
		 * Put custom_feed_filters/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id id of category filter to update
		 * @param {CustomFeedFilterInput} requestBody Category filter to add
		 * @return {CustomFeedFilterresponse} Custom Feed Filter response
		 */
		UpdateCustomFeedFilterById(vestorly_auth: string, access_token: string | null | undefined, id: string, requestBody: CustomFeedFilterInput): Observable<CustomFeedFilterresponse> {
			return this.http.put<CustomFeedFilterresponse>(this.baseUri + 'custom_feed_filters/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the Category's filter
		 * Delete custom_feed_filters/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id id of category filter to delete
		 * @return {CustomFeedFilterresponse} Custom Feed Filter response
		 */
		DeleteCustomFeedFilter(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<CustomFeedFilterresponse> {
			return this.http.delete<CustomFeedFilterresponse>(this.baseUri + 'custom_feed_filters/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), {});
		}

		/**
		 * Returns all Categories
		 * Get custom_feeds
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} Response
		 */
		FindCustomFeeds(vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'custom_feeds?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Category
		 * Post custom_feeds
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {CustomFeedInput} requestBody Category to add
		 * @return {CustomFeedresponse} Custom Feed response
		 */
		CreateCustomFeed(vestorly_auth: string, access_token: string | null | undefined, requestBody: CustomFeedInput): Observable<CustomFeedresponse> {
			return this.http.post<CustomFeedresponse>(this.baseUri + 'custom_feeds?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a single Category
		 * Get custom_feeds/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id Custom Feed Id to fetch
		 * @return {void} Custom Feed response
		 */
		FindCustomFeedByID(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'custom_feeds/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Category
		 * Put custom_feeds/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id id of category to update
		 * @param {CustomFeedInput} requestBody Category to add
		 * @return {CustomFeedresponse} Custom Feed response
		 */
		UpdateCategoryById(vestorly_auth: string, access_token: string | null | undefined, id: string, requestBody: CustomFeedInput): Observable<CustomFeedresponse> {
			return this.http.put<CustomFeedresponse>(this.baseUri + 'custom_feeds/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a new Category
		 * Delete custom_feeds/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id id of category to delete
		 * @return {CustomFeedresponse} Custom Feed response
		 */
		DeleteCustomFeed(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<CustomFeedresponse> {
			return this.http.delete<CustomFeedresponse>(this.baseUri + 'custom_feeds/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), {});
		}

		/**
		 * Returns Articles by Category
		 * Get custom_feeds/{id}/articles
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id Category Id to fetch
		 * @param {number} limit Limit on the number of articles to return
		 * @param {string} sort_by Field on model to sort by
		 * @param {number} start Field where the fetch will start from
		 * @param {string} created_at_gte_days_ago Filter retrieved articles since this date
		 * @param {string} text_query Search query parameter
		 * @return {void} Response
		 */
		FindCustomFeedArticles(vestorly_auth: string, access_token: string | null | undefined, id: string, limit: number | null | undefined, sort_by: string | null | undefined, start: number | null | undefined, created_at_gte_days_ago: string | null | undefined, text_query: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'custom_feeds/' + (id == null ? '' : encodeURIComponent(id)) + '/articles?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&limit=' + limit + '&sort_by=' + (sort_by == null ? '' : encodeURIComponent(sort_by)) + '&start=' + start + '&created_at_gte_days_ago=' + (created_at_gte_days_ago == null ? '' : encodeURIComponent(created_at_gte_days_ago)) + '&text_query=' + (text_query == null ? '' : encodeURIComponent(text_query)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Duplicates Category
		 * Post custom_feeds/{id}/duplicates
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id id of category to duplicate
		 * @return {void} Custom Feed response
		 */
		DuplicateCustomFeed(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'custom_feeds/' + (id == null ? '' : encodeURIComponent(id)) + '/duplicates?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all events
		 * Get events
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} Event response
		 */
		FindEvents(vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new event in the system
		 * Post events
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {EventInput} requestBody Event
		 * @return {void} Event response
		 */
		CreateEvent(vestorly_auth: string, access_token: string | null | undefined, requestBody: EventInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'events?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single event if the user has access
		 * Get events/{id}
		 * @param {string} id Mongo ID of event to fetch
		 * @param {string} access_token OAuth Token
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @return {void} Event response
		 */
		FindEventByID(id: string, access_token: string | null | undefined, vestorly_auth: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events/' + (id == null ? '' : encodeURIComponent(id)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all groups
		 * Get groups
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} Group response
		 */
		FindGroups(vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Group
		 * Post groups
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {GroupInput} requestBody Group to add
		 * @return {Groupresponse} group response
		 */
		CreateGroup(vestorly_auth: string, access_token: string | null | undefined, requestBody: GroupInput): Observable<Groupresponse> {
			return this.http.post<Groupresponse>(this.baseUri + 'groups?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a single group if user has access
		 * Get groups/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id Mongo ID of group to fetch
		 * @return {void} Group response
		 */
		FindGroupByID(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'groups/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Group
		 * Put groups/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id id of group to update
		 * @param {GroupInput} requestBody Group to update
		 * @return {Groupresponse} group response
		 */
		UpdateGroupById(vestorly_auth: string, access_token: string | null | undefined, id: string, requestBody: GroupInput): Observable<Groupresponse> {
			return this.http.put<Groupresponse>(this.baseUri + 'groups/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Group
		 * Delete groups/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id id of group to delete
		 * @return {Groupresponse} group response
		 */
		DeleteGroup(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<Groupresponse> {
			return this.http.delete<Groupresponse>(this.baseUri + 'groups/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), {});
		}

		/**
		 * Returns all MemberEvents
		 * Get member_events
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} member event response
		 */
		FindMemberEvents(vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'member_events?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all member reports
		 * Get member_reports
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} member reports response
		 */
		FindMemberReports(vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'member_reports?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all members
		 * Get members
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {number} start Skips number of members from start
		 * @param {number} limit Number of members to return
		 * @return {void} Member response
		 */
		FindMembers(vestorly_auth: string, access_token: string | null | undefined, start: number | null | undefined, limit: number | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'members?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&start=' + start + '&limit=' + limit, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new member in the Vestorly Platform
		 * Post members
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {Member} requestBody Member you want to create
		 * @return {void} member response
		 */
		CreateMember(vestorly_auth: string, access_token: string | null | undefined, requestBody: Member): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'members?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single member
		 * Get members/{id}
		 * @param {string} id Mongo ID of member to fetch
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} Member response
		 */
		FindMemberByID(id: string, vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'members/' + (id == null ? '' : encodeURIComponent(id)) + '&vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a single member
		 * Put members/{id}
		 * @param {string} id Mongo ID of member to fetch
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {Member} requestBody Member you want to update
		 * @return {void} Member response
		 */
		UpdateMemberByID(id: string, vestorly_auth: string, access_token: string | null | undefined, requestBody: Member): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'members/' + (id == null ? '' : encodeURIComponent(id)) + '&vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all newsletter settings
		 * Get newsletter_settings
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} newsletter settings response
		 */
		FindNewsletterSettings(vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'newsletter_settings?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a single newsletter settings if the user has access
		 * Get newsletter_settings/{id}
		 * @param {string} id Mongo ID of newsletter settings to fetch
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} newsletting setting response
		 */
		FindNewsletterSettingsByID(id: string, vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'newsletter_settings/' + (id == null ? '' : encodeURIComponent(id)) + '&vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a single newsletter setting by ID
		 * Put newsletter_settings/{id}
		 * @param {string} id Mongo ID of newsletter settings to update
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {NewsletterSettingsInput} requestBody newsletter settings
		 * @return {void} newsletter settings response
		 */
		UpdateNewsletterSettingsByID(id: string, vestorly_auth: string, access_token: string | null | undefined, requestBody: NewsletterSettingsInput): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'newsletter_settings/' + (id == null ? '' : encodeURIComponent(id)) + '&vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all newsletters
		 * Get newsletters
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} Newsletter response
		 */
		FindNewsletters(vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'newsletters?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a newsletter by ID
		 * Get newsletters/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id Mongo ID of event to get
		 * @return {void} Newsletter response
		 */
		GetNewsletterByID(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'newsletters/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a newsletter
		 * Put newsletters/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id Mongo ID of event to update
		 * @param {NewsletterInput} requestBody Newsletter
		 * @return {void} Newsletter response
		 */
		UpdateNewsletterByID(vestorly_auth: string, access_token: string | null | undefined, id: string, requestBody: NewsletterInput): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'newsletters/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Query all posts
		 * Get posts
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} text_query Filter post by parameters
		 * @param {string} external_url Filter by External URL
		 * @param {string} is_published Filter by is_published boolean
		 * @return {void} posts response
		 */
		FindPosts(vestorly_auth: string, access_token: string | null | undefined, text_query: string | null | undefined, external_url: string | null | undefined, is_published: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'posts?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&text_query=' + (text_query == null ? '' : encodeURIComponent(text_query)) + '&external_url=' + (external_url == null ? '' : encodeURIComponent(external_url)) + '&is_published=' + (is_published == null ? '' : encodeURIComponent(is_published)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a new post in the Vestorly Platform
		 * Post posts
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {PostInput} requestBody Post you want to create
		 * @return {void} posts response
		 */
		CreatePost(vestorly_auth: string, access_token: string | null | undefined, requestBody: PostInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'posts?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Query all posts
		 * Get posts/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id ID of post to fetch
		 * @return {void} post response
		 */
		GetPostByID(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'posts/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update A Post
		 * Put posts/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id id of post to update
		 * @param {Post} requestBody Post you want to update
		 * @return {void} post response
		 */
		UpdatePostByID(vestorly_auth: string, access_token: string | null | undefined, id: string, requestBody: Post): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'posts/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all Categories keywords
		 * Get seed_custom_feeds
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} Response
		 */
		FindSeedCustomFeeds(vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'seed_custom_feeds?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new Category Keyword
		 * Post seed_custom_feeds
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {SeedCustomFeedInput} requestBody Category to add
		 * @return {SeedCustomFeedresponse} Seed Custom Feed response
		 */
		CreateSeedCustomFeed(vestorly_auth: string, access_token: string | null | undefined, requestBody: SeedCustomFeedInput): Observable<SeedCustomFeedresponse> {
			return this.http.post<SeedCustomFeedresponse>(this.baseUri + 'seed_custom_feeds?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a single Category keyword
		 * Get seed_custom_feeds/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id Seed Custom Feed Id to fetch
		 * @return {void} Seed Custom Feed response
		 */
		FindSeedCustomFeedByID(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'seed_custom_feeds/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Category keywords
		 * Put seed_custom_feeds/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id id of seed category to update
		 * @param {SeedCustomFeedInput} requestBody Category keywords to add
		 * @return {SeedCustomFeedresponse} Seed Custom Feed response
		 */
		UpdateSeedCustomFeedById(vestorly_auth: string, access_token: string | null | undefined, id: string, requestBody: SeedCustomFeedInput): Observable<SeedCustomFeedresponse> {
			return this.http.put<SeedCustomFeedresponse>(this.baseUri + 'seed_custom_feeds/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Category keywords
		 * Delete seed_custom_feeds/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id id of seed category to delete
		 * @return {SeedCustomFeedresponse} Seed Custom Feed response
		 */
		DeleteSeedCustomFeed(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<SeedCustomFeedresponse> {
			return this.http.delete<SeedCustomFeedresponse>(this.baseUri + 'seed_custom_feeds/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), {});
		}

		/**
		 * Login To Vestorly Platform
		 * Post sessions
		 * @param {string} username Username in the vestorly platform
		 * @param {string} password Password in Vestorly Platform
		 * @return {void} Response
		 */
		Login(username: string, password: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sessions?username=' + (username == null ? '' : encodeURIComponent(username)) + '&password=' + (password == null ? '' : encodeURIComponent(password)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Logout of the vestorly platform
		 * Delete sessions/{id}
		 * @param {string} vestorly_auth Authenication token
		 * @param {string} id ID of pet to session
		 * @return {void} You have successfully logged out of the vestorly platform
		 */
		Logout(vestorly_auth: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sessions/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all sources
		 * Get sources
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @return {void} source response
		 */
		FindSources(vestorly_auth: string, access_token: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sources?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create source
		 * Post sources
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {SourceInput} requestBody Source
		 * @return {void} source response
		 */
		CreateSource(vestorly_auth: string, access_token: string | null | undefined, requestBody: SourceInput): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sources?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Source By ID
		 * Get sources/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id ID of source to fetch
		 * @return {void} source response
		 */
		GetSourceByID(vestorly_auth: string, access_token: string | null | undefined, id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Source By ID
		 * Put sources/{id}
		 * @param {string} vestorly_auth Vestorly Auth Token
		 * @param {string} access_token OAuth Token
		 * @param {string} id ID of source to fetch
		 * @param {SourceInput} requestBody Source
		 * @return {void} source response
		 */
		UpdateSourceByID(vestorly_auth: string, access_token: string | null | undefined, id: string, requestBody: SourceInput): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'sources/' + (id == null ? '' : encodeURIComponent(id)) + '?vestorly_auth=' + (vestorly_auth == null ? '' : encodeURIComponent(vestorly_auth)) + '&access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

