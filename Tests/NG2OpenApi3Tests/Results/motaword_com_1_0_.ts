import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccountGlossaryUploadRequest {

		/**
		 * Glossary file. Currently supported formats: .xlsx, .tbx
		 * Required
		 */
		glossary: string;
	}
	export interface AccountGlossaryUploadRequestFormProperties {

		/**
		 * Glossary file. Currently supported formats: .xlsx, .tbx
		 * Required
		 */
		glossary: FormControl<string | null | undefined>,
	}
	export function CreateAccountGlossaryUploadRequestFormGroup() {
		return new FormGroup<AccountGlossaryUploadRequestFormProperties>({
			glossary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountStyleGuideUploadRequest {

		/**
		 * Style guide file. Currently supported formats: .pdf, .docx, .txt
		 * Required
		 */
		styleguide: string;
	}
	export interface AccountStyleGuideUploadRequestFormProperties {

		/**
		 * Style guide file. Currently supported formats: .pdf, .docx, .txt
		 * Required
		 */
		styleguide: FormControl<string | null | undefined>,
	}
	export function CreateAccountStyleGuideUploadRequestFormGroup() {
		return new FormGroup<AccountStyleGuideUploadRequestFormProperties>({
			styleguide: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActiveWidget {

		/** Is the Active Widget in admin mode? This changes a couple of behaviors in the widget to configure some rules like elements, sections, pages, etc. */
		admin_mode?: boolean | null;

		/** When true, hash params are included in filenames. When false, params are ignored. */
		allow_hash_in_url?: boolean | null;

		/** When true, query params are included in filenames. When false, params are ignored. */
		allow_query_in_url?: boolean | null;

		/** When true, we will ignore the source language of your project and try to automatically detect the source language of the given content. This is especially useful in environments with unpredictable source contents, such as a chat environment. */
		auto_detect_source_language?: boolean | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		created_at?: Date | null;

		/** When true, Active ecosystem will print debug-level logs from all Active modules. */
		debug_mode?: boolean | null;

		/** Continuous project exclusive elements and rules */
		elements?: string | null;

		/** Specify whether we should follow the user around in your website and automatically translate pages. */
		follow_user?: boolean | null;

		/** Determines whether to force-refresh local browser cache of your translations in certain period of times, no matter if there is a new activity in the project. */
		force_cache_refresh_interval?: boolean | null;

		/** When true, Active ecosystem will collect all strings on TMS no matter if the translation is present in the cache. */
		hit_backend_for_existing?: boolean | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Continuous project language mappings */
		language_mappings?: string | null;

		/** Whether ActiveJS should be considered live in an embedded site. Use `false` if you are still testing Active. Go to your Active dashboard and follow links to your website to actually test Active. */
		live?: boolean | null;

		/** We can automatically localize the same-domain URLs in your page. The way we localize the URL depends on urlMode configuration. We can either add/update the locale query parameter, or add/update the path of the URL. */
		modify_links?: boolean | null;
		name?: string | null;

		/** When true, Active ecosystem will optimize the script and data flows per page, rather than per project. This decreases the bandwidth usage per script, but makes translation publishing more complex and script serving per-page. */
		optimize_per_page?: boolean | null;

		/** Continuous project page rules */
		pages?: string | null;

		/** Custom regex for path-type URL mode. */
		path_regex?: string | null;

		/** Options are "bottom-left", "bottom-right", "in-place" */
		position?: string | null;

		/** Query parameter name to be used with query-type URL mode. Default is 'locale'. */
		query_name?: string | null;

		/** When true, Active ecosystem reboots itself when url changes. */
		reboot_on_url_change?: boolean | null;

		/** JSON string for a list of domains that this widget's API interactions are limited to. */
		restricted_domains?: string | null;

		/** Continuous project section rules */
		sections?: string | null;

		/** Is the Active Widget in test mode? This changes a couple behaviors in the widget to make it easier for you to test and develop your Active integration. */
		test_mode?: boolean | null;

		/** \"light\", \"dark\" OR custom JSON. */
		theme?: string | null;

		/** Token that you should use when you are using this widget on your website. */
		token?: string | null;

		/** When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can do this by actually redirecting the user to the new page, or by simply changing the URL in the address bar via browser's History API. When NULL, we won't apply any URL changes. */
		url_change_mode?: string | null;

		/** When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can either change the path of the URL to prefix it with the locale code, or we can add a query parameter to the URL. We also use this mode to detect the locale for the current page when a user directly loads a page. When NULL, locale detection from URL will be disabled (even then, if the user has selected a locale manually, and followUser is enabled, we will still automatically translate the page in user's locale. */
		url_mode?: string | null;

		/** Should we make use of local browser cache for your visitors? We will refresh the cache when Active JS detects new activity in your project. */
		use_cache?: boolean | null;

		/** When enabled, we will translate your website with dummy content, rather than actually using MT/TM. */
		use_dummy_translations?: boolean | null;

		/** Continuous project variable definitions */
		variables?: string | null;
	}
	export interface ActiveWidgetFormProperties {

		/** Is the Active Widget in admin mode? This changes a couple of behaviors in the widget to configure some rules like elements, sections, pages, etc. */
		admin_mode: FormControl<boolean | null | undefined>,

		/** When true, hash params are included in filenames. When false, params are ignored. */
		allow_hash_in_url: FormControl<boolean | null | undefined>,

		/** When true, query params are included in filenames. When false, params are ignored. */
		allow_query_in_url: FormControl<boolean | null | undefined>,

		/** When true, we will ignore the source language of your project and try to automatically detect the source language of the given content. This is especially useful in environments with unpredictable source contents, such as a chat environment. */
		auto_detect_source_language: FormControl<boolean | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		created_at: FormControl<Date | null | undefined>,

		/** When true, Active ecosystem will print debug-level logs from all Active modules. */
		debug_mode: FormControl<boolean | null | undefined>,

		/** Continuous project exclusive elements and rules */
		elements: FormControl<string | null | undefined>,

		/** Specify whether we should follow the user around in your website and automatically translate pages. */
		follow_user: FormControl<boolean | null | undefined>,

		/** Determines whether to force-refresh local browser cache of your translations in certain period of times, no matter if there is a new activity in the project. */
		force_cache_refresh_interval: FormControl<boolean | null | undefined>,

		/** When true, Active ecosystem will collect all strings on TMS no matter if the translation is present in the cache. */
		hit_backend_for_existing: FormControl<boolean | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** Continuous project language mappings */
		language_mappings: FormControl<string | null | undefined>,

		/** Whether ActiveJS should be considered live in an embedded site. Use `false` if you are still testing Active. Go to your Active dashboard and follow links to your website to actually test Active. */
		live: FormControl<boolean | null | undefined>,

		/** We can automatically localize the same-domain URLs in your page. The way we localize the URL depends on urlMode configuration. We can either add/update the locale query parameter, or add/update the path of the URL. */
		modify_links: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** When true, Active ecosystem will optimize the script and data flows per page, rather than per project. This decreases the bandwidth usage per script, but makes translation publishing more complex and script serving per-page. */
		optimize_per_page: FormControl<boolean | null | undefined>,

		/** Continuous project page rules */
		pages: FormControl<string | null | undefined>,

		/** Custom regex for path-type URL mode. */
		path_regex: FormControl<string | null | undefined>,

		/** Options are "bottom-left", "bottom-right", "in-place" */
		position: FormControl<string | null | undefined>,

		/** Query parameter name to be used with query-type URL mode. Default is 'locale'. */
		query_name: FormControl<string | null | undefined>,

		/** When true, Active ecosystem reboots itself when url changes. */
		reboot_on_url_change: FormControl<boolean | null | undefined>,

		/** JSON string for a list of domains that this widget's API interactions are limited to. */
		restricted_domains: FormControl<string | null | undefined>,

		/** Continuous project section rules */
		sections: FormControl<string | null | undefined>,

		/** Is the Active Widget in test mode? This changes a couple behaviors in the widget to make it easier for you to test and develop your Active integration. */
		test_mode: FormControl<boolean | null | undefined>,

		/** \"light\", \"dark\" OR custom JSON. */
		theme: FormControl<string | null | undefined>,

		/** Token that you should use when you are using this widget on your website. */
		token: FormControl<string | null | undefined>,

		/** When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can do this by actually redirecting the user to the new page, or by simply changing the URL in the address bar via browser's History API. When NULL, we won't apply any URL changes. */
		url_change_mode: FormControl<string | null | undefined>,

		/** When a user changes locale (or when we automatically detect and change it for them), we will change the URL of the page they are in. We can either change the path of the URL to prefix it with the locale code, or we can add a query parameter to the URL. We also use this mode to detect the locale for the current page when a user directly loads a page. When NULL, locale detection from URL will be disabled (even then, if the user has selected a locale manually, and followUser is enabled, we will still automatically translate the page in user's locale. */
		url_mode: FormControl<string | null | undefined>,

		/** Should we make use of local browser cache for your visitors? We will refresh the cache when Active JS detects new activity in your project. */
		use_cache: FormControl<boolean | null | undefined>,

		/** When enabled, we will translate your website with dummy content, rather than actually using MT/TM. */
		use_dummy_translations: FormControl<boolean | null | undefined>,

		/** Continuous project variable definitions */
		variables: FormControl<string | null | undefined>,
	}
	export function CreateActiveWidgetFormGroup() {
		return new FormGroup<ActiveWidgetFormProperties>({
			admin_mode: new FormControl<boolean | null | undefined>(undefined),
			allow_hash_in_url: new FormControl<boolean | null | undefined>(undefined),
			allow_query_in_url: new FormControl<boolean | null | undefined>(undefined),
			auto_detect_source_language: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			debug_mode: new FormControl<boolean | null | undefined>(undefined),
			elements: new FormControl<string | null | undefined>(undefined),
			follow_user: new FormControl<boolean | null | undefined>(undefined),
			force_cache_refresh_interval: new FormControl<boolean | null | undefined>(undefined),
			hit_backend_for_existing: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language_mappings: new FormControl<string | null | undefined>(undefined),
			live: new FormControl<boolean | null | undefined>(undefined),
			modify_links: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			optimize_per_page: new FormControl<boolean | null | undefined>(undefined),
			pages: new FormControl<string | null | undefined>(undefined),
			path_regex: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<string | null | undefined>(undefined),
			query_name: new FormControl<string | null | undefined>(undefined),
			reboot_on_url_change: new FormControl<boolean | null | undefined>(undefined),
			restricted_domains: new FormControl<string | null | undefined>(undefined),
			sections: new FormControl<string | null | undefined>(undefined),
			test_mode: new FormControl<boolean | null | undefined>(undefined),
			theme: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			url_change_mode: new FormControl<string | null | undefined>(undefined),
			url_mode: new FormControl<string | null | undefined>(undefined),
			use_cache: new FormControl<boolean | null | undefined>(undefined),
			use_dummy_translations: new FormControl<boolean | null | undefined>(undefined),
			variables: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActiveWidgetList {
		meta?: PagingMeta;
		widgets?: Array<ActiveWidget>;
	}
	export interface ActiveWidgetListFormProperties {
	}
	export function CreateActiveWidgetListFormGroup() {
		return new FormGroup<ActiveWidgetListFormProperties>({
		});

	}

	export interface PagingMeta {
		paging?: PagingMetaPaging;
	}
	export interface PagingMetaFormProperties {
	}
	export function CreatePagingMetaFormGroup() {
		return new FormGroup<PagingMetaFormProperties>({
		});

	}

	export interface PagingMetaPaging {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count?: string | null;
		links?: PagingLinksMeta;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		page?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		per_page?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_count?: string | null;
	}
	export interface PagingMetaPagingFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		page: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		per_page: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_count: FormControl<string | null | undefined>,
	}
	export function CreatePagingMetaPagingFormGroup() {
		return new FormGroup<PagingMetaPagingFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<string | null | undefined>(undefined),
			per_page: new FormControl<string | null | undefined>(undefined),
			total_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Activity {

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		activity_at?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		links?: ActivityLinks;

		/** Source text */
		source_text?: string | null;

		/** Target text of the activity, which is actually the translation of the source text. */
		target_text?: string | null;

		/**
		 * Unique identifier of the translator/proofreader of this activity.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		translator?: string | null;

		/** Currently there are two available activity types; 'translated', 'proofread'. */
		type?: ActivityType | null;
	}
	export interface ActivityFormProperties {

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		activity_at: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** Source text */
		source_text: FormControl<string | null | undefined>,

		/** Target text of the activity, which is actually the translation of the source text. */
		target_text: FormControl<string | null | undefined>,

		/**
		 * Unique identifier of the translator/proofreader of this activity.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		translator: FormControl<string | null | undefined>,

		/** Currently there are two available activity types; 'translated', 'proofread'. */
		type: FormControl<ActivityType | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			activity_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			source_text: new FormControl<string | null | undefined>(undefined),
			target_text: new FormControl<string | null | undefined>(undefined),
			translator: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ActivityType | null | undefined>(undefined),
		});

	}

	export enum ActivityType { translated = 'translated', proofread = 'proofread' }

	export interface ActivityLinks extends LinksMeta {
		comments?: Href;
		project?: Href;
	}
	export interface ActivityLinksFormProperties extends LinksMetaFormProperties {
	}
	export function CreateActivityLinksFormGroup() {
		return new FormGroup<ActivityLinksFormProperties>({
		});

	}

	export interface Href {
		href?: string | null;
	}
	export interface HrefFormProperties {
		href: FormControl<string | null | undefined>,
	}
	export function CreateHrefFormGroup() {
		return new FormGroup<HrefFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityList {
		activities?: Array<Activity>;
		meta?: PagingMeta;
	}
	export interface ActivityListFormProperties {
	}
	export function CreateActivityListFormGroup() {
		return new FormGroup<ActivityListFormProperties>({
		});

	}

	export interface AddOrUpdateDocumentRequest {
		document?: FileAsData;
	}
	export interface AddOrUpdateDocumentRequestFormProperties {
	}
	export function CreateAddOrUpdateDocumentRequestFormGroup() {
		return new FormGroup<AddOrUpdateDocumentRequestFormProperties>({
		});

	}

	export interface FileAsData {

		/** Base64 encoded contents of your file. */
		data?: string | null;

		/** Name of your file */
		name?: string | null;
	}
	export interface FileAsDataFormProperties {

		/** Base64 encoded contents of your file. */
		data: FormControl<string | null | undefined>,

		/** Name of your file */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFileAsDataFormGroup() {
		return new FormGroup<FileAsDataFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Address {
		city?: string | null;
		country?: string | null;
		phone?: string | null;
		state?: string | null;
		street?: string | null;
		zip?: string | null;
	}
	export interface AddressFormProperties {
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		street: FormControl<string | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateAddressFormGroup() {
		return new FormGroup<AddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnalyticsCollection {
		anonymousId?: string | null;
		properties?: {[id: string]: string };
		sessionId?: string | null;
		type?: string | null;
		userId?: string | null;
	}
	export interface AnalyticsCollectionFormProperties {
		anonymousId: FormControl<string | null | undefined>,
		properties: FormControl<{[id: string]: string } | null | undefined>,
		sessionId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAnalyticsCollectionFormGroup() {
		return new FormGroup<AnalyticsCollectionFormProperties>({
			anonymousId: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			sessionId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnalyticsToken {
		jwt?: string | null;
	}
	export interface AnalyticsTokenFormProperties {
		jwt: FormControl<string | null | undefined>,
	}
	export function CreateAnalyticsTokenFormGroup() {
		return new FormGroup<AnalyticsTokenFormProperties>({
			jwt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AsyncOperationStatus {

		/**
		 * operation duration in milliseconds
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration?: string | null;
		key?: string | null;
		message?: string | null;
		status?: AsyncOperationStatusStatus | null;
	}
	export interface AsyncOperationStatusFormProperties {

		/**
		 * operation duration in milliseconds
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		duration: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		status: FormControl<AsyncOperationStatusStatus | null | undefined>,
	}
	export function CreateAsyncOperationStatusFormGroup() {
		return new FormGroup<AsyncOperationStatusFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AsyncOperationStatusStatus | null | undefined>(undefined),
		});

	}

	export enum AsyncOperationStatusStatus { sent = 'sent', started = 'started', completed = 'completed', failed = 'failed' }

	export enum AsyncOperationStatusEnum { sent = 'sent', started = 'started', completed = 'completed', failed = 'failed' }

	export interface AvailableVendorsFilter {

		/**
		 * Corporate account ID to filter for vendor authorization
		 * Type: double
		 */
		corporateId?: number | null;

		/** Filter vendors for manual work permission */
		manualWorkPermission?: boolean | null;

		/** Source language code */
		sourceLanguage?: string | null;

		/** List of target language codes. */
		targetLanguages?: Array<string>;

		/** List of vendor types */
		types?: Array<string>;
	}
	export interface AvailableVendorsFilterFormProperties {

		/**
		 * Corporate account ID to filter for vendor authorization
		 * Type: double
		 */
		corporateId: FormControl<number | null | undefined>,

		/** Filter vendors for manual work permission */
		manualWorkPermission: FormControl<boolean | null | undefined>,

		/** Source language code */
		sourceLanguage: FormControl<string | null | undefined>,
	}
	export function CreateAvailableVendorsFilterFormGroup() {
		return new FormGroup<AvailableVendorsFilterFormProperties>({
			corporateId: new FormControl<number | null | undefined>(undefined),
			manualWorkPermission: new FormControl<boolean | null | undefined>(undefined),
			sourceLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillingAddress extends Address {

		/** addressing name, such as company name. used in billing address. */
		name?: string | null;
	}
	export interface BillingAddressFormProperties extends AddressFormProperties {

		/** addressing name, such as company name. used in billing address. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBillingAddressFormGroup() {
		return new FormGroup<BillingAddressFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BlogArticle {
		announcement_type?: BlogArticleAnnouncement_type | null;
		author?: string | null;

		/** Article content */
		content?: string | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		created_at?: Date | null;

		/** Article excerpt */
		excerpt?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** language code */
		language?: string | null;
		links?: BlogArticleLinks;
		slug?: string | null;
		title?: string | null;
		topic?: string | null;
	}
	export interface BlogArticleFormProperties {
		announcement_type: FormControl<BlogArticleAnnouncement_type | null | undefined>,
		author: FormControl<string | null | undefined>,

		/** Article content */
		content: FormControl<string | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		created_at: FormControl<Date | null | undefined>,

		/** Article excerpt */
		excerpt: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** language code */
		language: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
	}
	export function CreateBlogArticleFormGroup() {
		return new FormGroup<BlogArticleFormProperties>({
			announcement_type: new FormControl<BlogArticleAnnouncement_type | null | undefined>(undefined),
			author: new FormControl<string | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			excerpt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BlogArticleAnnouncement_type { article = 'article', case = 'case', 'famous-translators' = 'famous-translators', sales = 'sales' }

	export interface BlogArticleLinks extends LinksMeta {
		android?: Href;
		header_image?: Href;
		ios?: Href;
		web?: Href;
	}
	export interface BlogArticleLinksFormProperties extends LinksMetaFormProperties {
	}
	export function CreateBlogArticleLinksFormGroup() {
		return new FormGroup<BlogArticleLinksFormProperties>({
		});

	}

	export interface BlogArticleList {
		articles?: Array<BlogArticle>;
		meta?: PagingMeta;
	}
	export interface BlogArticleListFormProperties {
	}
	export function CreateBlogArticleListFormGroup() {
		return new FormGroup<BlogArticleListFormProperties>({
		});

	}

	export interface CM {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		user_id?: string | null;
	}
	export interface CMFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateCMFormGroup() {
		return new FormGroup<CMFormProperties>({
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CallbackResult {
		data?: Project;

		/** Callback response returned from `url`. */
		result?: string | null;
		type?: ProjectStatus | null;

		/** The URL that received the callback. */
		url?: string | null;
	}
	export interface CallbackResultFormProperties {

		/** Callback response returned from `url`. */
		result: FormControl<string | null | undefined>,
		type: FormControl<ProjectStatus | null | undefined>,

		/** The URL that received the callback. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCallbackResultFormGroup() {
		return new FormGroup<CallbackResultFormProperties>({
			result: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ProjectStatus | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Project {
		average_scores?: {[id: string]: number };
		budget_code?: string | null;

		/** Callback URL to notify when project status changed. */
		callback_url?: string | null;
		can_pam_manage?: boolean | null;
		client?: User;

		/**
		 * Assigned admin's id
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		cm_id?: string | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		completed_on?: Date | null;
		continuous_project_type?: string | null;

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created_at?: string | null;

		/** Custom data provided while creating a new project. */
		custom?: string | null;

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		delivery_at?: string | null;

		/** A list of errors. Visible when creating a project and uploading your documents at the same time, in case of multiple errors. */
		errors?: Array<Error>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		is_api_project?: boolean | null;
		is_certified?: boolean | null;
		is_continuous?: boolean | null;
		is_manual?: boolean | null;
		links?: ProjectLinks;

		/** Currently authed vendor's available working language pairs in this project. Includes rates per language pair. Includes complex pair logic such as bilingualism, project reverse pair enforcement etc. */
		pairs?: Array<VendorProjectPair>;

		/** Quote IDs of pivots */
		pivoted_projects?: Array<number>;
		price?: ProjectPrice;
		price_without_discount?: ProjectPrice_without_discount;

		/** Currently authed vendor's role in this project. If vendor has already joined, this contains the role they joined the project with. If not joined yet, this is the role that they can join the project with. */
		role?: ProjectRole | null;
		should_send_client_survey?: boolean | null;
		source?: ProjectSource | null;
		source_language?: string | null;
		status?: ProjectStatus | null;
		subjects?: Array<string>;
		target_languages?: Array<string>;

		/** TMS project name for this MW project. Requires privileged scope. */
		tms_name?: string | null;

		/**
		 * Unix epoch time. Available only if status is `pending`.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		valid_until?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		vendor_word_count?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count?: string | null;
		word_count_analysis?: ProjectWord_count_analysis;
	}
	export interface ProjectFormProperties {
		average_scores: FormControl<{[id: string]: number } | null | undefined>,
		budget_code: FormControl<string | null | undefined>,

		/** Callback URL to notify when project status changed. */
		callback_url: FormControl<string | null | undefined>,
		can_pam_manage: FormControl<boolean | null | undefined>,

		/**
		 * Assigned admin's id
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		cm_id: FormControl<string | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		completed_on: FormControl<Date | null | undefined>,
		continuous_project_type: FormControl<string | null | undefined>,

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created_at: FormControl<string | null | undefined>,

		/** Custom data provided while creating a new project. */
		custom: FormControl<string | null | undefined>,

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		delivery_at: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		is_api_project: FormControl<boolean | null | undefined>,
		is_certified: FormControl<boolean | null | undefined>,
		is_continuous: FormControl<boolean | null | undefined>,
		is_manual: FormControl<boolean | null | undefined>,

		/** Currently authed vendor's role in this project. If vendor has already joined, this contains the role they joined the project with. If not joined yet, this is the role that they can join the project with. */
		role: FormControl<ProjectRole | null | undefined>,
		should_send_client_survey: FormControl<boolean | null | undefined>,
		source: FormControl<ProjectSource | null | undefined>,
		source_language: FormControl<string | null | undefined>,
		status: FormControl<ProjectStatus | null | undefined>,

		/** TMS project name for this MW project. Requires privileged scope. */
		tms_name: FormControl<string | null | undefined>,

		/**
		 * Unix epoch time. Available only if status is `pending`.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		valid_until: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		vendor_word_count: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			average_scores: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			budget_code: new FormControl<string | null | undefined>(undefined),
			callback_url: new FormControl<string | null | undefined>(undefined),
			can_pam_manage: new FormControl<boolean | null | undefined>(undefined),
			cm_id: new FormControl<string | null | undefined>(undefined),
			completed_on: new FormControl<Date | null | undefined>(undefined),
			continuous_project_type: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			custom: new FormControl<string | null | undefined>(undefined),
			delivery_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_api_project: new FormControl<boolean | null | undefined>(undefined),
			is_certified: new FormControl<boolean | null | undefined>(undefined),
			is_continuous: new FormControl<boolean | null | undefined>(undefined),
			is_manual: new FormControl<boolean | null | undefined>(undefined),
			role: new FormControl<ProjectRole | null | undefined>(undefined),
			should_send_client_survey: new FormControl<boolean | null | undefined>(undefined),
			source: new FormControl<ProjectSource | null | undefined>(undefined),
			source_language: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ProjectStatus | null | undefined>(undefined),
			tms_name: new FormControl<string | null | undefined>(undefined),
			valid_until: new FormControl<string | null | undefined>(undefined),
			vendor_word_count: new FormControl<string | null | undefined>(undefined),
			word_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {
		billing?: BillingAddress;

		/** Type: DateOnly */
		birthday?: Date | null;

		/** \@deprecated. use `vendor` key */
		can_work_manual_files?: boolean | null;

		/** \@deprecated. use mailing or billing key. */
		city?: string | null;
		client?: UserClient;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		corporate_id?: string | null;

		/** \@deprecated. use mailing or billing key. */
		country?: string | null;

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created_at?: string | null;
		do_not_contact?: boolean | null;
		email?: string | null;
		first_name?: string | null;
		has_pwd?: boolean | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		is_client?: boolean | null;
		is_developer?: boolean | null;

		/** \@deprecated. use `vendor` key */
		is_proofreader?: boolean | null;
		is_prospect?: boolean | null;
		is_sales_person?: boolean | null;
		is_vendor?: boolean | null;

		/** \@deprecated. use `vendor` key */
		language_pairs?: Array<LanguagePair>;
		last_name?: string | null;

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		last_seen_online_at?: string | null;
		links?: UserLinks;

		/** User Locale */
		locale?: string | null;
		mailing?: Address;
		name?: string | null;

		/** \@deprecated. Native language of user */
		native_language?: string | null;

		/**
		 * \@deprecated. use /stats endpoint for the current nps value.
		 * Type: float
		 */
		nps?: number | null;
		phone_number?: string | null;
		profile_picture_path?: string | null;
		social_media?: SocialMedia;

		/** \@deprecated. use mailing or billing key. */
		state?: string | null;
		status?: string | null;

		/** \@deprecated. use mailing or billing key. */
		street?: string | null;
		timezone?: string | null;

		/** \@deprecated. use `vendor` key */
		tms_user_name?: string | null;
		user_groups?: Array<UserGroup>;
		vendor?: UserVendor;

		/** \@deprecated. use mailing or billing key. new key name is "zip". */
		zip_code?: string | null;
	}
	export interface UserFormProperties {

		/** Type: DateOnly */
		birthday: FormControl<Date | null | undefined>,

		/** \@deprecated. use `vendor` key */
		can_work_manual_files: FormControl<boolean | null | undefined>,

		/** \@deprecated. use mailing or billing key. */
		city: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		corporate_id: FormControl<string | null | undefined>,

		/** \@deprecated. use mailing or billing key. */
		country: FormControl<string | null | undefined>,

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created_at: FormControl<string | null | undefined>,
		do_not_contact: FormControl<boolean | null | undefined>,
		email: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		has_pwd: FormControl<boolean | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		is_client: FormControl<boolean | null | undefined>,
		is_developer: FormControl<boolean | null | undefined>,

		/** \@deprecated. use `vendor` key */
		is_proofreader: FormControl<boolean | null | undefined>,
		is_prospect: FormControl<boolean | null | undefined>,
		is_sales_person: FormControl<boolean | null | undefined>,
		is_vendor: FormControl<boolean | null | undefined>,
		last_name: FormControl<string | null | undefined>,

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		last_seen_online_at: FormControl<string | null | undefined>,

		/** User Locale */
		locale: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** \@deprecated. Native language of user */
		native_language: FormControl<string | null | undefined>,

		/**
		 * \@deprecated. use /stats endpoint for the current nps value.
		 * Type: float
		 */
		nps: FormControl<number | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
		profile_picture_path: FormControl<string | null | undefined>,

		/** \@deprecated. use mailing or billing key. */
		state: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,

		/** \@deprecated. use mailing or billing key. */
		street: FormControl<string | null | undefined>,
		timezone: FormControl<string | null | undefined>,

		/** \@deprecated. use `vendor` key */
		tms_user_name: FormControl<string | null | undefined>,

		/** \@deprecated. use mailing or billing key. new key name is "zip". */
		zip_code: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			birthday: new FormControl<Date | null | undefined>(undefined),
			can_work_manual_files: new FormControl<boolean | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			corporate_id: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			do_not_contact: new FormControl<boolean | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			has_pwd: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_client: new FormControl<boolean | null | undefined>(undefined),
			is_developer: new FormControl<boolean | null | undefined>(undefined),
			is_proofreader: new FormControl<boolean | null | undefined>(undefined),
			is_prospect: new FormControl<boolean | null | undefined>(undefined),
			is_sales_person: new FormControl<boolean | null | undefined>(undefined),
			is_vendor: new FormControl<boolean | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			last_seen_online_at: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			native_language: new FormControl<string | null | undefined>(undefined),
			nps: new FormControl<number | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
			profile_picture_path: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			tms_user_name: new FormControl<string | null | undefined>(undefined),
			zip_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserClient {
		corporate?: UserClientCorporate;

		/** Type: float */
		nps?: number | null;
		subjects?: {[id: string]: string };
	}
	export interface UserClientFormProperties {

		/** Type: float */
		nps: FormControl<number | null | undefined>,
		subjects: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUserClientFormGroup() {
		return new FormGroup<UserClientFormProperties>({
			nps: new FormControl<number | null | undefined>(undefined),
			subjects: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UserClientCorporate {
		email?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		logo?: string | null;
		name?: string | null;
		phone_number?: string | null;
	}
	export interface UserClientCorporateFormProperties {
		email: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		phone_number: FormControl<string | null | undefined>,
	}
	export function CreateUserClientCorporateFormGroup() {
		return new FormGroup<UserClientCorporateFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phone_number: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LanguagePair {
		source_language?: string | null;
		target_language?: string | null;
	}
	export interface LanguagePairFormProperties {
		source_language: FormControl<string | null | undefined>,
		target_language: FormControl<string | null | undefined>,
	}
	export function CreateLanguagePairFormGroup() {
		return new FormGroup<LanguagePairFormProperties>({
			source_language: new FormControl<string | null | undefined>(undefined),
			target_language: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SocialMedia {
		facebook_url?: string | null;
		linkedIn_url?: string | null;
		twitter_url?: string | null;
	}
	export interface SocialMediaFormProperties {
		facebook_url: FormControl<string | null | undefined>,
		linkedIn_url: FormControl<string | null | undefined>,
		twitter_url: FormControl<string | null | undefined>,
	}
	export function CreateSocialMediaFormGroup() {
		return new FormGroup<SocialMediaFormProperties>({
			facebook_url: new FormControl<string | null | undefined>(undefined),
			linkedIn_url: new FormControl<string | null | undefined>(undefined),
			twitter_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserGroup {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		corporate_id?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		name?: string | null;
		permissions?: Array<string>;
	}
	export interface UserGroupFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		corporate_id: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserGroupFormGroup() {
		return new FormGroup<UserGroupFormProperties>({
			corporate_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserVendor {
		can_work_manual_files?: boolean | null;

		/** Type: float */
		email_open_rate?: number | null;
		is_frozen?: boolean | null;
		is_proofreader?: boolean | null;
		language_pairs?: Array<LanguagePair>;

		/** Native language of user */
		native_language?: string | null;

		/** Type: float */
		pam_tqs?: number | null;
		paypal_email?: string | null;
		profile_survey?: ProfileSurvey;
		require_1099?: boolean | null;
		tags?: Array<string>;
		tms_user_name?: string | null;
		vendor_type?: string | null;
	}
	export interface UserVendorFormProperties {
		can_work_manual_files: FormControl<boolean | null | undefined>,

		/** Type: float */
		email_open_rate: FormControl<number | null | undefined>,
		is_frozen: FormControl<boolean | null | undefined>,
		is_proofreader: FormControl<boolean | null | undefined>,

		/** Native language of user */
		native_language: FormControl<string | null | undefined>,

		/** Type: float */
		pam_tqs: FormControl<number | null | undefined>,
		paypal_email: FormControl<string | null | undefined>,
		require_1099: FormControl<boolean | null | undefined>,
		tms_user_name: FormControl<string | null | undefined>,
		vendor_type: FormControl<string | null | undefined>,
	}
	export function CreateUserVendorFormGroup() {
		return new FormGroup<UserVendorFormProperties>({
			can_work_manual_files: new FormControl<boolean | null | undefined>(undefined),
			email_open_rate: new FormControl<number | null | undefined>(undefined),
			is_frozen: new FormControl<boolean | null | undefined>(undefined),
			is_proofreader: new FormControl<boolean | null | undefined>(undefined),
			native_language: new FormControl<string | null | undefined>(undefined),
			pam_tqs: new FormControl<number | null | undefined>(undefined),
			paypal_email: new FormControl<string | null | undefined>(undefined),
			require_1099: new FormControl<boolean | null | undefined>(undefined),
			tms_user_name: new FormControl<string | null | undefined>(undefined),
			vendor_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfileSurvey {
		current_services?: string | null;
		daily_proofreading_capacity?: string | null;
		daily_translation_capacity?: string | null;
		dtp_software?: string | null;
		experience?: string | null;
		is_certified_translator?: string | null;
		is_sworn_translator?: string | null;
		memoq?: string | null;
		memsource?: string | null;
		omegat?: string | null;
		proofreader_experience?: string | null;
		provides_creative_writing_service?: string | null;
		provides_postedit_service?: string | null;
		reference?: string | null;
		sdl_trados?: string | null;
		skype_id?: string | null;
		smartcat?: string | null;
		smartling?: string | null;
		software?: string | null;
		specialization?: string | null;
		subtitle_edit?: string | null;
		subtitle_workshop?: string | null;
		translator_association?: string | null;
		transsuite_2000?: string | null;
		vendor_profile_lsp?: string | null;
		wordbee?: string | null;
		wordfast?: string | null;
		work_type?: string | null;
		work_with?: string | null;
		working_as?: string | null;
		working_timezone?: string | null;
		xbench?: string | null;
		xtm?: string | null;
	}
	export interface ProfileSurveyFormProperties {
		current_services: FormControl<string | null | undefined>,
		daily_proofreading_capacity: FormControl<string | null | undefined>,
		daily_translation_capacity: FormControl<string | null | undefined>,
		dtp_software: FormControl<string | null | undefined>,
		experience: FormControl<string | null | undefined>,
		is_certified_translator: FormControl<string | null | undefined>,
		is_sworn_translator: FormControl<string | null | undefined>,
		memoq: FormControl<string | null | undefined>,
		memsource: FormControl<string | null | undefined>,
		omegat: FormControl<string | null | undefined>,
		proofreader_experience: FormControl<string | null | undefined>,
		provides_creative_writing_service: FormControl<string | null | undefined>,
		provides_postedit_service: FormControl<string | null | undefined>,
		reference: FormControl<string | null | undefined>,
		sdl_trados: FormControl<string | null | undefined>,
		skype_id: FormControl<string | null | undefined>,
		smartcat: FormControl<string | null | undefined>,
		smartling: FormControl<string | null | undefined>,
		software: FormControl<string | null | undefined>,
		specialization: FormControl<string | null | undefined>,
		subtitle_edit: FormControl<string | null | undefined>,
		subtitle_workshop: FormControl<string | null | undefined>,
		translator_association: FormControl<string | null | undefined>,
		transsuite_2000: FormControl<string | null | undefined>,
		vendor_profile_lsp: FormControl<string | null | undefined>,
		wordbee: FormControl<string | null | undefined>,
		wordfast: FormControl<string | null | undefined>,
		work_type: FormControl<string | null | undefined>,
		work_with: FormControl<string | null | undefined>,
		working_as: FormControl<string | null | undefined>,
		working_timezone: FormControl<string | null | undefined>,
		xbench: FormControl<string | null | undefined>,
		xtm: FormControl<string | null | undefined>,
	}
	export function CreateProfileSurveyFormGroup() {
		return new FormGroup<ProfileSurveyFormProperties>({
			current_services: new FormControl<string | null | undefined>(undefined),
			daily_proofreading_capacity: new FormControl<string | null | undefined>(undefined),
			daily_translation_capacity: new FormControl<string | null | undefined>(undefined),
			dtp_software: new FormControl<string | null | undefined>(undefined),
			experience: new FormControl<string | null | undefined>(undefined),
			is_certified_translator: new FormControl<string | null | undefined>(undefined),
			is_sworn_translator: new FormControl<string | null | undefined>(undefined),
			memoq: new FormControl<string | null | undefined>(undefined),
			memsource: new FormControl<string | null | undefined>(undefined),
			omegat: new FormControl<string | null | undefined>(undefined),
			proofreader_experience: new FormControl<string | null | undefined>(undefined),
			provides_creative_writing_service: new FormControl<string | null | undefined>(undefined),
			provides_postedit_service: new FormControl<string | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			sdl_trados: new FormControl<string | null | undefined>(undefined),
			skype_id: new FormControl<string | null | undefined>(undefined),
			smartcat: new FormControl<string | null | undefined>(undefined),
			smartling: new FormControl<string | null | undefined>(undefined),
			software: new FormControl<string | null | undefined>(undefined),
			specialization: new FormControl<string | null | undefined>(undefined),
			subtitle_edit: new FormControl<string | null | undefined>(undefined),
			subtitle_workshop: new FormControl<string | null | undefined>(undefined),
			translator_association: new FormControl<string | null | undefined>(undefined),
			transsuite_2000: new FormControl<string | null | undefined>(undefined),
			vendor_profile_lsp: new FormControl<string | null | undefined>(undefined),
			wordbee: new FormControl<string | null | undefined>(undefined),
			wordfast: new FormControl<string | null | undefined>(undefined),
			work_type: new FormControl<string | null | undefined>(undefined),
			work_with: new FormControl<string | null | undefined>(undefined),
			working_as: new FormControl<string | null | undefined>(undefined),
			working_timezone: new FormControl<string | null | undefined>(undefined),
			xbench: new FormControl<string | null | undefined>(undefined),
			xtm: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {
		code?: string | null;
		help?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		http_code?: number | null;
		message?: string | null;
	}
	export interface ErrorFormProperties {
		code: FormControl<string | null | undefined>,
		help: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		http_code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			help: new FormControl<string | null | undefined>(undefined),
			http_code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VendorProjectPair {
		currency?: string | null;

		/** Indicates if the vendor be able to proofred this pair */
		is_proofreader?: boolean | null;
		proofreader?: User;

		/** Type: float */
		proofreading_rate?: number | null;

		/** Source language code */
		source_language?: string | null;

		/** Target language code */
		target_language?: string | null;

		/** Type: float */
		translation_rate?: number | null;
	}
	export interface VendorProjectPairFormProperties {
		currency: FormControl<string | null | undefined>,

		/** Indicates if the vendor be able to proofred this pair */
		is_proofreader: FormControl<boolean | null | undefined>,

		/** Type: float */
		proofreading_rate: FormControl<number | null | undefined>,

		/** Source language code */
		source_language: FormControl<string | null | undefined>,

		/** Target language code */
		target_language: FormControl<string | null | undefined>,

		/** Type: float */
		translation_rate: FormControl<number | null | undefined>,
	}
	export function CreateVendorProjectPairFormGroup() {
		return new FormGroup<VendorProjectPairFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			is_proofreader: new FormControl<boolean | null | undefined>(undefined),
			proofreading_rate: new FormControl<number | null | undefined>(undefined),
			source_language: new FormControl<string | null | undefined>(undefined),
			target_language: new FormControl<string | null | undefined>(undefined),
			translation_rate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectPrice {

		/** Type: float */
		amount?: number | null;

		/** Type: float */
		base_amount?: number | null;
		base_currency?: string | null;
		currency?: string | null;

		/**
		 * USD is our base pricing currency. If `currency` is different, this will help.
		 * Type: float
		 */
		usd_amount?: number | null;
	}
	export interface ProjectPriceFormProperties {

		/** Type: float */
		amount: FormControl<number | null | undefined>,

		/** Type: float */
		base_amount: FormControl<number | null | undefined>,
		base_currency: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,

		/**
		 * USD is our base pricing currency. If `currency` is different, this will help.
		 * Type: float
		 */
		usd_amount: FormControl<number | null | undefined>,
	}
	export function CreateProjectPriceFormGroup() {
		return new FormGroup<ProjectPriceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			base_amount: new FormControl<number | null | undefined>(undefined),
			base_currency: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			usd_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectPrice_without_discount {

		/** Type: float */
		amount?: number | null;

		/** Type: float */
		base_amount?: number | null;
		base_currency?: string | null;
		currency?: string | null;

		/**
		 * USD is our base pricing currency. If `currency` is different, this will help.
		 * Type: float
		 */
		usd_amount?: number | null;
	}
	export interface ProjectPrice_without_discountFormProperties {

		/** Type: float */
		amount: FormControl<number | null | undefined>,

		/** Type: float */
		base_amount: FormControl<number | null | undefined>,
		base_currency: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,

		/**
		 * USD is our base pricing currency. If `currency` is different, this will help.
		 * Type: float
		 */
		usd_amount: FormControl<number | null | undefined>,
	}
	export function CreateProjectPrice_without_discountFormGroup() {
		return new FormGroup<ProjectPrice_without_discountFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			base_amount: new FormControl<number | null | undefined>(undefined),
			base_currency: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			usd_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProjectRole { translator = 'translator', proofreader = 'proofreader', both = 'both' }

	export enum ProjectSource { api = 'api', web = 'web' }

	export enum ProjectStatus { pending = 'pending', started = 'started', completed = 'completed', translated = 'translated', proofread = 'proofread' }

	export interface ProjectWord_count_analysis {
		base?: string | null;
		duplicate?: string | null;
		exclusion?: string | null;
		final?: string | null;
		tm?: string | null;
	}
	export interface ProjectWord_count_analysisFormProperties {
		base: FormControl<string | null | undefined>,
		duplicate: FormControl<string | null | undefined>,
		exclusion: FormControl<string | null | undefined>,
		final: FormControl<string | null | undefined>,
		tm: FormControl<string | null | undefined>,
	}
	export function CreateProjectWord_count_analysisFormGroup() {
		return new FormGroup<ProjectWord_count_analysisFormProperties>({
			base: new FormControl<string | null | undefined>(undefined),
			duplicate: new FormControl<string | null | undefined>(undefined),
			exclusion: new FormControl<string | null | undefined>(undefined),
			final: new FormControl<string | null | undefined>(undefined),
			tm: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelProjectRequest {

		/** Cancellation reason */
		reason?: string | null;
	}
	export interface CancelProjectRequestFormProperties {

		/** Cancellation reason */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCancelProjectRequestFormGroup() {
		return new FormGroup<CancelProjectRequestFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientProfile {

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		account_creation_date?: Date | null;

		/**
		 * total project count that this client sent
		 * Type: double
		 */
		client_project_count?: number | null;

		/** corporate name */
		corporate?: string | null;

		/**
		 * corporate id
		 * Type: double
		 */
		corporate_id?: number | null;

		/**
		 * total user count in a corporation
		 * Type: double
		 */
		corporate_user_count?: number | null;

		/** the file extension for the files that usually this client sent */
		frequent_file_extension?: string | null;

		/** frequent language pairs */
		frequent_language_pairs?: Array<string>;

		/** full name of the client */
		full_name?: string | null;

		/** The answer for the question "Is there any growth for this corporate's spending". The values can be true, false or null if the corporate is oour client for less than 6 months */
		growth?: boolean | null;

		/** the answer for the question "Is this client usually sent complex projects?" */
		is_complex?: boolean | null;

		/**
		 * corporate's spending in twelve months
		 * Type: float
		 */
		last_12_months_spending?: number | null;

		/**
		 * the quote number for the last project of this client
		 * Type: double
		 */
		last_project?: number | null;

		/** the creation date of the last project that is sent by this client */
		last_project_time?: Date | null;

		/** list of prooofreaders for the target languages of last project */
		last_proofreaders?: Array<ProofreaderWithLanguage>;

		/** notes that is submited for this client and/or with her projects */
		notes?: Array<string>;

		/** net promoter score info for this client */
		nps?: ClientProfileNps;

		/**
		 * rank of the user in all corporate users for project count. If the user is the most active user foor sending projects her rank is 1
		 * Type: double
		 */
		user_rank_in_project_count?: number | null;

		/**
		 * rank of the user in all corporate users for total spending. If the user is the most active user for spending her rank is 1
		 * Type: double
		 */
		user_rank_in_spending?: number | null;
	}
	export interface ClientProfileFormProperties {

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		account_creation_date: FormControl<Date | null | undefined>,

		/**
		 * total project count that this client sent
		 * Type: double
		 */
		client_project_count: FormControl<number | null | undefined>,

		/** corporate name */
		corporate: FormControl<string | null | undefined>,

		/**
		 * corporate id
		 * Type: double
		 */
		corporate_id: FormControl<number | null | undefined>,

		/**
		 * total user count in a corporation
		 * Type: double
		 */
		corporate_user_count: FormControl<number | null | undefined>,

		/** the file extension for the files that usually this client sent */
		frequent_file_extension: FormControl<string | null | undefined>,

		/** full name of the client */
		full_name: FormControl<string | null | undefined>,

		/** The answer for the question "Is there any growth for this corporate's spending". The values can be true, false or null if the corporate is oour client for less than 6 months */
		growth: FormControl<boolean | null | undefined>,

		/** the answer for the question "Is this client usually sent complex projects?" */
		is_complex: FormControl<boolean | null | undefined>,

		/**
		 * corporate's spending in twelve months
		 * Type: float
		 */
		last_12_months_spending: FormControl<number | null | undefined>,

		/**
		 * the quote number for the last project of this client
		 * Type: double
		 */
		last_project: FormControl<number | null | undefined>,

		/** the creation date of the last project that is sent by this client */
		last_project_time: FormControl<Date | null | undefined>,

		/**
		 * rank of the user in all corporate users for project count. If the user is the most active user foor sending projects her rank is 1
		 * Type: double
		 */
		user_rank_in_project_count: FormControl<number | null | undefined>,

		/**
		 * rank of the user in all corporate users for total spending. If the user is the most active user for spending her rank is 1
		 * Type: double
		 */
		user_rank_in_spending: FormControl<number | null | undefined>,
	}
	export function CreateClientProfileFormGroup() {
		return new FormGroup<ClientProfileFormProperties>({
			account_creation_date: new FormControl<Date | null | undefined>(undefined),
			client_project_count: new FormControl<number | null | undefined>(undefined),
			corporate: new FormControl<string | null | undefined>(undefined),
			corporate_id: new FormControl<number | null | undefined>(undefined),
			corporate_user_count: new FormControl<number | null | undefined>(undefined),
			frequent_file_extension: new FormControl<string | null | undefined>(undefined),
			full_name: new FormControl<string | null | undefined>(undefined),
			growth: new FormControl<boolean | null | undefined>(undefined),
			is_complex: new FormControl<boolean | null | undefined>(undefined),
			last_12_months_spending: new FormControl<number | null | undefined>(undefined),
			last_project: new FormControl<number | null | undefined>(undefined),
			last_project_time: new FormControl<Date | null | undefined>(undefined),
			user_rank_in_project_count: new FormControl<number | null | undefined>(undefined),
			user_rank_in_spending: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProofreaderWithLanguage {

		/** full name of the proofreader */
		full_name?: string | null;

		/** proofreader id */
		id?: string | null;

		/** language code (i.e en-US) */
		language?: string | null;

		/** link to the vendor that can be only used in motaword admin application */
		vendor_link?: string | null;
	}
	export interface ProofreaderWithLanguageFormProperties {

		/** full name of the proofreader */
		full_name: FormControl<string | null | undefined>,

		/** proofreader id */
		id: FormControl<string | null | undefined>,

		/** language code (i.e en-US) */
		language: FormControl<string | null | undefined>,

		/** link to the vendor that can be only used in motaword admin application */
		vendor_link: FormControl<string | null | undefined>,
	}
	export function CreateProofreaderWithLanguageFormGroup() {
		return new FormGroup<ProofreaderWithLanguageFormProperties>({
			full_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			vendor_link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientProfileNps {

		/** information for all nps survey that this client completed */
		average?: ClientProfileNpsAverage;

		/** last survey info */
		last?: ClientProfileNpsLast;
	}
	export interface ClientProfileNpsFormProperties {
	}
	export function CreateClientProfileNpsFormGroup() {
		return new FormGroup<ClientProfileNpsFormProperties>({
		});

	}

	export interface ClientProfileNpsAverage {

		/**
		 * total number of completed survey count by this client
		 * Type: double
		 */
		completed_surveys_count?: number | null;

		/**
		 * average score for all coompleted surveys
		 * Type: float
		 */
		score?: number | null;
	}
	export interface ClientProfileNpsAverageFormProperties {

		/**
		 * total number of completed survey count by this client
		 * Type: double
		 */
		completed_surveys_count: FormControl<number | null | undefined>,

		/**
		 * average score for all coompleted surveys
		 * Type: float
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateClientProfileNpsAverageFormGroup() {
		return new FormGroup<ClientProfileNpsAverageFormProperties>({
			completed_surveys_count: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClientProfileNpsLast {

		/** last surveys completion date */
		completion_date?: Date | null;

		/**
		 * score that the client gave us
		 * Type: double
		 */
		score?: number | null;
	}
	export interface ClientProfileNpsLastFormProperties {

		/** last surveys completion date */
		completion_date: FormControl<Date | null | undefined>,

		/**
		 * score that the client gave us
		 * Type: double
		 */
		score: FormControl<number | null | undefined>,
	}
	export function CreateClientProfileNpsLastFormGroup() {
		return new FormGroup<ClientProfileNpsLastFormProperties>({
			completion_date: new FormControl<Date | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ClientProjectStat {
		languages?: Array<string>;
		month?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		number_of_projects?: string | null;

		/** Type: float */
		total_spending?: number | null;
		week?: string | null;
	}
	export interface ClientProjectStatFormProperties {
		month: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		number_of_projects: FormControl<string | null | undefined>,

		/** Type: float */
		total_spending: FormControl<number | null | undefined>,
		week: FormControl<string | null | undefined>,
	}
	export function CreateClientProjectStatFormGroup() {
		return new FormGroup<ClientProjectStatFormProperties>({
			month: new FormControl<string | null | undefined>(undefined),
			number_of_projects: new FormControl<string | null | undefined>(undefined),
			total_spending: new FormControl<number | null | undefined>(undefined),
			week: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientProjectStats {
		stats?: Array<ClientProjectStat>;
	}
	export interface ClientProjectStatsFormProperties {
	}
	export function CreateClientProjectStatsFormGroup() {
		return new FormGroup<ClientProjectStatsFormProperties>({
		});

	}

	export interface ClientStats {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		document_count?: string | null;

		/** Type: float */
		nps?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		started_project_count?: string | null;
		total_discounted?: Monetary;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_project_count?: string | null;

		/** Type: float */
		total_spending?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		translator_count?: string | null;
	}
	export interface ClientStatsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		document_count: FormControl<string | null | undefined>,

		/** Type: float */
		nps: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		started_project_count: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_project_count: FormControl<string | null | undefined>,

		/** Type: float */
		total_spending: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		translator_count: FormControl<string | null | undefined>,
	}
	export function CreateClientStatsFormGroup() {
		return new FormGroup<ClientStatsFormProperties>({
			document_count: new FormControl<string | null | undefined>(undefined),
			nps: new FormControl<number | null | undefined>(undefined),
			started_project_count: new FormControl<string | null | undefined>(undefined),
			total_project_count: new FormControl<string | null | undefined>(undefined),
			total_spending: new FormControl<number | null | undefined>(undefined),
			translator_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Monetary {

		/** Type: float */
		amount?: number | null;
		currency?: string | null;
	}
	export interface MonetaryFormProperties {

		/** Type: float */
		amount: FormControl<number | null | undefined>,
		currency: FormControl<string | null | undefined>,
	}
	export function CreateMonetaryFormGroup() {
		return new FormGroup<MonetaryFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientStringStats {
		language_counts?: Array<LanguageStringStat>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_project_strings_count?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_tm_strings_count?: string | null;
	}
	export interface ClientStringStatsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_project_strings_count: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total_tm_strings_count: FormControl<string | null | undefined>,
	}
	export function CreateClientStringStatsFormGroup() {
		return new FormGroup<ClientStringStatsFormProperties>({
			total_project_strings_count: new FormControl<string | null | undefined>(undefined),
			total_tm_strings_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LanguageStringStat {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		project_string_count?: string | null;
		source_language?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		tm_string_count?: string | null;
	}
	export interface LanguageStringStatFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		project_string_count: FormControl<string | null | undefined>,
		source_language: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		tm_string_count: FormControl<string | null | undefined>,
	}
	export function CreateLanguageStringStatFormGroup() {
		return new FormGroup<LanguageStringStatFormProperties>({
			project_string_count: new FormControl<string | null | undefined>(undefined),
			source_language: new FormControl<string | null | undefined>(undefined),
			tm_string_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClientStringTranslation {
		content?: string | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		last_changed?: Date | null;
		resource?: string | null;
		resource_id?: string | null;
		state?: ClientStringTranslationState | null;
		target_language?: string | null;
	}
	export interface ClientStringTranslationFormProperties {
		content: FormControl<string | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		last_changed: FormControl<Date | null | undefined>,
		resource: FormControl<string | null | undefined>,
		resource_id: FormControl<string | null | undefined>,
		state: FormControl<ClientStringTranslationState | null | undefined>,
		target_language: FormControl<string | null | undefined>,
	}
	export function CreateClientStringTranslationFormGroup() {
		return new FormGroup<ClientStringTranslationFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			last_changed: new FormControl<Date | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
			resource_id: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ClientStringTranslationState | null | undefined>(undefined),
			target_language: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClientStringTranslationState { Translated = 'Translated', Approved = 'Approved' }

	export interface ClientStringWithTranslations {
		content?: string | null;
		language?: string | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		last_changed?: Date | null;
		translations?: Array<ClientStringTranslation>;
	}
	export interface ClientStringWithTranslationsFormProperties {
		content: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		last_changed: FormControl<Date | null | undefined>,
	}
	export function CreateClientStringWithTranslationsFormGroup() {
		return new FormGroup<ClientStringWithTranslationsFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			last_changed: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ClientStrings {
		meta?: PagingMeta;
		strings?: Array<ClientStringWithTranslations>;
	}
	export interface ClientStringsFormProperties {
	}
	export function CreateClientStringsFormGroup() {
		return new FormGroup<ClientStringsFormProperties>({
		});

	}

	export interface Comment {

		/**
		 * Comment text.
		 * Required
		 */
		comment: string;

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		commented_at?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		links?: CommentLinks;
	}
	export interface CommentFormProperties {

		/**
		 * Comment text.
		 * Required
		 */
		comment: FormControl<string | null | undefined>,

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		commented_at: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commented_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CommentLinks extends LinksMeta {
		activity?: Href;
		project?: Href;
	}
	export interface CommentLinksFormProperties extends LinksMetaFormProperties {
	}
	export function CreateCommentLinksFormGroup() {
		return new FormGroup<CommentLinksFormProperties>({
		});

	}

	export interface CommentList {
		activities?: Array<Comment>;
		meta?: PagingMeta;
	}
	export interface CommentListFormProperties {
	}
	export function CreateCommentListFormGroup() {
		return new FormGroup<CommentListFormProperties>({
		});

	}

	export interface Commission {
		amount?: Monetary;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date?: Date | null;
		project?: Project;
		status?: CommissionStatus | null;
	}
	export interface CommissionFormProperties {

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date: FormControl<Date | null | undefined>,
		status: FormControl<CommissionStatus | null | undefined>,
	}
	export function CreateCommissionFormGroup() {
		return new FormGroup<CommissionFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<CommissionStatus | null | undefined>(undefined),
		});

	}

	export enum CommissionStatus { completed = 'completed', unclaimed = 'unclaimed', failed = 'failed', sent = 'sent', waiting = 'waiting', waiting_invoice = 'waiting_invoice' }

	export interface CommissionList {
		commissions?: Array<Commission>;
		meta?: PagingMeta;
	}
	export interface CommissionListFormProperties {
	}
	export function CreateCommissionListFormGroup() {
		return new FormGroup<CommissionListFormProperties>({
		});

	}

	export interface CommissionStats {
		balance?: Monetary;
		paid?: Monetary;
		quote_total?: Monetary;
		total?: Monetary;
	}
	export interface CommissionStatsFormProperties {
	}
	export function CreateCommissionStatsFormGroup() {
		return new FormGroup<CommissionStatsFormProperties>({
		});

	}

	export interface ContinuousProject {

		/** Should we collect analytics data from Active for this continuous project? */
		analytics_enabled?: boolean | null;

		/** Immediately start post-editing project for translation requests that are applied MT. */
		auto_start_postedit?: boolean | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		created_at?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		is_enabled?: boolean | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		last_activity_at?: Date | null;
		links?: ContinuousProjectLinks;

		/** Immediately apply MT on translation requests if they are missing from TM. */
		mt_enabled?: boolean | null;

		/** One of "MOTAWORD", "GOOGLE", "AMAZON", "MS". Default is "MOTAWORD". */
		mt_engine?: string | null;
		name?: string | null;

		/** Get an instant quote for translation requests that are applied MT. */
		postedit_enabled?: boolean | null;
		source_language?: string | null;

		/** One of "a => ACTIVE", "i => INACTIVE", "d => DELETED", "c => SCHEDULED CANCELLATION", "p => SCHEDULED CHANGE" */
		status?: string | null;
		subscription?: Subscription;
		target_languages?: Array<string>;

		/** Continuous project type. We currently have only 2 types, NULL and "active". */
		type?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count?: string | null;
	}
	export interface ContinuousProjectFormProperties {

		/** Should we collect analytics data from Active for this continuous project? */
		analytics_enabled: FormControl<boolean | null | undefined>,

		/** Immediately start post-editing project for translation requests that are applied MT. */
		auto_start_postedit: FormControl<boolean | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		created_at: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		is_enabled: FormControl<boolean | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		last_activity_at: FormControl<Date | null | undefined>,

		/** Immediately apply MT on translation requests if they are missing from TM. */
		mt_enabled: FormControl<boolean | null | undefined>,

		/** One of "MOTAWORD", "GOOGLE", "AMAZON", "MS". Default is "MOTAWORD". */
		mt_engine: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Get an instant quote for translation requests that are applied MT. */
		postedit_enabled: FormControl<boolean | null | undefined>,
		source_language: FormControl<string | null | undefined>,

		/** One of "a => ACTIVE", "i => INACTIVE", "d => DELETED", "c => SCHEDULED CANCELLATION", "p => SCHEDULED CHANGE" */
		status: FormControl<string | null | undefined>,

		/** Continuous project type. We currently have only 2 types, NULL and "active". */
		type: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count: FormControl<string | null | undefined>,
	}
	export function CreateContinuousProjectFormGroup() {
		return new FormGroup<ContinuousProjectFormProperties>({
			analytics_enabled: new FormControl<boolean | null | undefined>(undefined),
			auto_start_postedit: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_enabled: new FormControl<boolean | null | undefined>(undefined),
			last_activity_at: new FormControl<Date | null | undefined>(undefined),
			mt_enabled: new FormControl<boolean | null | undefined>(undefined),
			mt_engine: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postedit_enabled: new FormControl<boolean | null | undefined>(undefined),
			source_language: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			word_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscription {

		/** Stripe downgradable plan */
		downgrade?: Array<string>;

		/**
		 * Stripe subscription plan payment card internal id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		payment_method?: number | null;

		/** Stripe plan period end */
		period_end?: Date | null;

		/** Stripe subscription plan id */
		plan_id?: string | null;

		/** Stripe subscription plan name */
		plan_name?: string | null;

		/** Stripe plan price */
		price?: string | null;
		products?: Array<string>;

		/** Stripe Scheduled plan period end */
		schedule_name?: string | null;

		/** Stripe Scheduled start date */
		schedule_start?: Date | null;

		/** Stripe subscription id for this project */
		subscription_id?: string | null;

		/** Stripe upgradable plan */
		upgrade?: Array<string>;

		/** Stripe plan trial */
		withTrial?: any;
	}
	export interface SubscriptionFormProperties {

		/**
		 * Stripe subscription plan payment card internal id
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		payment_method: FormControl<number | null | undefined>,

		/** Stripe plan period end */
		period_end: FormControl<Date | null | undefined>,

		/** Stripe subscription plan id */
		plan_id: FormControl<string | null | undefined>,

		/** Stripe subscription plan name */
		plan_name: FormControl<string | null | undefined>,

		/** Stripe plan price */
		price: FormControl<string | null | undefined>,

		/** Stripe Scheduled plan period end */
		schedule_name: FormControl<string | null | undefined>,

		/** Stripe Scheduled start date */
		schedule_start: FormControl<Date | null | undefined>,

		/** Stripe subscription id for this project */
		subscription_id: FormControl<string | null | undefined>,

		/** Stripe plan trial */
		withTrial: FormControl<any | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			payment_method: new FormControl<number | null | undefined>(undefined),
			period_end: new FormControl<Date | null | undefined>(undefined),
			plan_id: new FormControl<string | null | undefined>(undefined),
			plan_name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<string | null | undefined>(undefined),
			schedule_name: new FormControl<string | null | undefined>(undefined),
			schedule_start: new FormControl<Date | null | undefined>(undefined),
			subscription_id: new FormControl<string | null | undefined>(undefined),
			withTrial: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Continuous project cache for translations per target language. */
	export interface ContinuousProjectCache {
		meta?: PagingMeta;
		translations?: {[id: string]: ContinuousProjectLanguageCache };
	}

	/** Continuous project cache for translations per target language. */
	export interface ContinuousProjectCacheFormProperties {
		translations: FormControl<{[id: string]: ContinuousProjectLanguageCache } | null | undefined>,
	}
	export function CreateContinuousProjectCacheFormGroup() {
		return new FormGroup<ContinuousProjectCacheFormProperties>({
			translations: new FormControl<{[id: string]: ContinuousProjectLanguageCache } | null | undefined>(undefined),
		});

	}


	/** TM, MT and Nonparsed cache list for translations */
	export interface ContinuousProjectLanguageCache {

		/** source > target map of strings for translations */
		mt?: ContinuousProjectCachedStrings;

		/** source > target map of strings for translations */
		nonparsed?: ContinuousProjectCachedStrings;

		/** source > target map of strings for translations */
		tm?: ContinuousProjectCachedStrings;
	}

	/** TM, MT and Nonparsed cache list for translations */
	export interface ContinuousProjectLanguageCacheFormProperties {
	}
	export function CreateContinuousProjectLanguageCacheFormGroup() {
		return new FormGroup<ContinuousProjectLanguageCacheFormProperties>({
		});

	}


	/** source > target map of strings for translations */
	export interface ContinuousProjectCachedStrings {
	}

	/** source > target map of strings for translations */
	export interface ContinuousProjectCachedStringsFormProperties {
	}
	export function CreateContinuousProjectCachedStringsFormGroup() {
		return new FormGroup<ContinuousProjectCachedStringsFormProperties>({
		});

	}

	export interface ContinuousProjectCosts {
		mt?: Monetary;
		post_edit?: Monetary;
		saved?: Monetary;
		total?: Monetary;
	}
	export interface ContinuousProjectCostsFormProperties {
	}
	export function CreateContinuousProjectCostsFormGroup() {
		return new FormGroup<ContinuousProjectCostsFormProperties>({
		});

	}

	export interface ContinuousProjectDocument {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		billed_word_count?: string | null;
		id?: string | null;
		links?: DocumentLinks;
		name?: string | null;
		post_edit_enabled?: boolean | null;
		project_id?: string | null;
		source_language?: string | null;
		target_languages?: Array<string>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count?: string | null;
	}
	export interface ContinuousProjectDocumentFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		billed_word_count: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		post_edit_enabled: FormControl<boolean | null | undefined>,
		project_id: FormControl<string | null | undefined>,
		source_language: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count: FormControl<string | null | undefined>,
	}
	export function CreateContinuousProjectDocumentFormGroup() {
		return new FormGroup<ContinuousProjectDocumentFormProperties>({
			billed_word_count: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			post_edit_enabled: new FormControl<boolean | null | undefined>(undefined),
			project_id: new FormControl<string | null | undefined>(undefined),
			source_language: new FormControl<string | null | undefined>(undefined),
			word_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContinuousProjectDocumentList {
		documents?: Array<ContinuousProjectDocument>;
		meta?: PagingMeta;
	}
	export interface ContinuousProjectDocumentListFormProperties {
	}
	export function CreateContinuousProjectDocumentListFormGroup() {
		return new FormGroup<ContinuousProjectDocumentListFormProperties>({
		});

	}

	export interface ContinuousProjectDocumentProgressBody {
		documentName?: string | null;
		filterByLanguage?: string | null;
	}
	export interface ContinuousProjectDocumentProgressBodyFormProperties {
		documentName: FormControl<string | null | undefined>,
		filterByLanguage: FormControl<string | null | undefined>,
	}
	export function CreateContinuousProjectDocumentProgressBodyFormGroup() {
		return new FormGroup<ContinuousProjectDocumentProgressBodyFormProperties>({
			documentName: new FormControl<string | null | undefined>(undefined),
			filterByLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContinuousProjectDocumentStringsBody {
		documentName?: string | null;
	}
	export interface ContinuousProjectDocumentStringsBodyFormProperties {
		documentName: FormControl<string | null | undefined>,
	}
	export function CreateContinuousProjectDocumentStringsBodyFormGroup() {
		return new FormGroup<ContinuousProjectDocumentStringsBodyFormProperties>({
			documentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContinuousProjectInvoices {
		invoices?: Array<Invoice>;
	}
	export interface ContinuousProjectInvoicesFormProperties {
	}
	export function CreateContinuousProjectInvoicesFormGroup() {
		return new FormGroup<ContinuousProjectInvoicesFormProperties>({
		});

	}

	export interface Invoice {

		/**
		 * Monetary amount
		 * Type: float
		 */
		amount?: number | null;

		/**
		 * Monetary amount
		 * Type: float
		 */
		base_amount?: number | null;
		base_currency?: string | null;
		billing?: BillingAddress;
		currency?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		invoice_no?: string | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		invoiced_at?: Date | null;
		links?: InvoiceLinks;
		status?: string | null;
	}
	export interface InvoiceFormProperties {

		/**
		 * Monetary amount
		 * Type: float
		 */
		amount: FormControl<number | null | undefined>,

		/**
		 * Monetary amount
		 * Type: float
		 */
		base_amount: FormControl<number | null | undefined>,
		base_currency: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		invoice_no: FormControl<string | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		invoiced_at: FormControl<Date | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceFormGroup() {
		return new FormGroup<InvoiceFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			base_amount: new FormControl<number | null | undefined>(undefined),
			base_currency: new FormControl<string | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			invoice_no: new FormControl<string | null | undefined>(undefined),
			invoiced_at: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContinuousProjectLanguage {
		code?: string | null;
		is_enabled?: boolean | null;
	}
	export interface ContinuousProjectLanguageFormProperties {
		code: FormControl<string | null | undefined>,
		is_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateContinuousProjectLanguageFormGroup() {
		return new FormGroup<ContinuousProjectLanguageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			is_enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ContinuousProjectLinks extends LinksMeta {
		editors?: {[id: string]: Href };
	}
	export interface ContinuousProjectLinksFormProperties extends LinksMetaFormProperties {
		editors: FormControl<{[id: string]: Href } | null | undefined>,
	}
	export function CreateContinuousProjectLinksFormGroup() {
		return new FormGroup<ContinuousProjectLinksFormProperties>({
			editors: new FormControl<{[id: string]: Href } | null | undefined>(undefined),
		});

	}

	export interface ContinuousProjectProgress {
		costs?: ContinuousProjectCosts;
		progress?: Progress;
		word_counts?: ContinuousProjectWordCounts;
	}
	export interface ContinuousProjectProgressFormProperties {
	}
	export function CreateContinuousProjectProgressFormGroup() {
		return new FormGroup<ContinuousProjectProgressFormProperties>({
		});

	}

	export interface ContinuousProjectWordCounts {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		mt?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		post_edit?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total?: string | null;
	}
	export interface ContinuousProjectWordCountsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		mt: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		post_edit: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		total: FormControl<string | null | undefined>,
	}
	export function CreateContinuousProjectWordCountsFormGroup() {
		return new FormGroup<ContinuousProjectWordCountsFormProperties>({
			mt: new FormControl<string | null | undefined>(undefined),
			post_edit: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContinuousProjectUpdateContent {
		analytics_enabled?: boolean | null;
		auto_start_postedit?: boolean | null;
		is_enabled?: boolean | null;
		languages?: Array<ContinuousProjectLanguage>;
		mt_enabled?: boolean | null;
		name?: string | null;
		postedit_enabled?: boolean | null;
	}
	export interface ContinuousProjectUpdateContentFormProperties {
		analytics_enabled: FormControl<boolean | null | undefined>,
		auto_start_postedit: FormControl<boolean | null | undefined>,
		is_enabled: FormControl<boolean | null | undefined>,
		mt_enabled: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		postedit_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateContinuousProjectUpdateContentFormGroup() {
		return new FormGroup<ContinuousProjectUpdateContentFormProperties>({
			analytics_enabled: new FormControl<boolean | null | undefined>(undefined),
			auto_start_postedit: new FormControl<boolean | null | undefined>(undefined),
			is_enabled: new FormControl<boolean | null | undefined>(undefined),
			mt_enabled: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			postedit_enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ContinuousProjectsList {
		meta?: PagingMeta;
		projects?: Array<ContinuousProject>;
	}
	export interface ContinuousProjectsListFormProperties {
	}
	export function CreateContinuousProjectsListFormGroup() {
		return new FormGroup<ContinuousProjectsListFormProperties>({
		});

	}

	export interface CorporateAccount {
		billing?: BillingAddress;
		domain?: string | null;
		email?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		logo?: string | null;
		name?: string | null;

		/** Deprecated, use `domain`. */
		web_site?: string | null;
	}
	export interface CorporateAccountFormProperties {
		domain: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		logo: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Deprecated, use `domain`. */
		web_site: FormControl<string | null | undefined>,
	}
	export function CreateCorporateAccountFormGroup() {
		return new FormGroup<CorporateAccountFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			logo: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			web_site: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreditCard {
		bin?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		is_default?: boolean | null;
		payment_code?: string | null;
	}
	export interface CreditCardFormProperties {
		bin: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		is_default: FormControl<boolean | null | undefined>,
		payment_code: FormControl<string | null | undefined>,
	}
	export function CreateCreditCardFormGroup() {
		return new FormGroup<CreditCardFormProperties>({
			bin: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_default: new FormControl<boolean | null | undefined>(undefined),
			payment_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeliveryPredictionInLanguage {
		language?: string | null;

		/** true for late, false for on-time delivery */
		late?: boolean | null;

		/** Type: float */
		probability?: number | null;
	}
	export interface DeliveryPredictionInLanguageFormProperties {
		language: FormControl<string | null | undefined>,

		/** true for late, false for on-time delivery */
		late: FormControl<boolean | null | undefined>,

		/** Type: float */
		probability: FormControl<number | null | undefined>,
	}
	export function CreateDeliveryPredictionInLanguageFormGroup() {
		return new FormGroup<DeliveryPredictionInLanguageFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			late: new FormControl<boolean | null | undefined>(undefined),
			probability: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeliveryPredictionPayload {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		projectId?: string | null;
	}
	export interface DeliveryPredictionPayloadFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateDeliveryPredictionPayloadFormGroup() {
		return new FormGroup<DeliveryPredictionPayloadFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeliveryPredictionResponse {
		result?: Array<DeliveryPredictionInLanguage>;
	}
	export interface DeliveryPredictionResponseFormProperties {
	}
	export function CreateDeliveryPredictionResponseFormGroup() {
		return new FormGroup<DeliveryPredictionResponseFormProperties>({
		});

	}

	export interface DeprecatedStringTranslationContent {
		contents?: Array<string>;
		source_language?: string | null;
		target_languages?: Array<string>;
	}
	export interface DeprecatedStringTranslationContentFormProperties {
		source_language: FormControl<string | null | undefined>,
	}
	export function CreateDeprecatedStringTranslationContentFormGroup() {
		return new FormGroup<DeprecatedStringTranslationContentFormProperties>({
			source_language: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Document {

		/** Extension of the file */
		file_type?: string | null;
		has_custom_package?: boolean | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		links?: DocumentLinks;
		manual_files?: Array<ManualFile>;
		name?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		project_id?: string | null;
		review_in_manual_editor?: boolean | null;
		scheme?: string | null;

		/** Type: float */
		search_score?: number | null;
		source_language?: string | null;
		subject?: string | null;
		target_languages?: Array<string>;

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		uploaded_at?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count?: string | null;
	}
	export interface DocumentFormProperties {

		/** Extension of the file */
		file_type: FormControl<string | null | undefined>,
		has_custom_package: FormControl<boolean | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		project_id: FormControl<string | null | undefined>,
		review_in_manual_editor: FormControl<boolean | null | undefined>,
		scheme: FormControl<string | null | undefined>,

		/** Type: float */
		search_score: FormControl<number | null | undefined>,
		source_language: FormControl<string | null | undefined>,
		subject: FormControl<string | null | undefined>,

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		uploaded_at: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			file_type: new FormControl<string | null | undefined>(undefined),
			has_custom_package: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project_id: new FormControl<string | null | undefined>(undefined),
			review_in_manual_editor: new FormControl<boolean | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined),
			search_score: new FormControl<number | null | undefined>(undefined),
			source_language: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			uploaded_at: new FormControl<string | null | undefined>(undefined),
			word_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ManualFile {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		driveFileId?: string | null;
		isProofread?: boolean | null;
		isTranslated?: boolean | null;
		language?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		proofreadingFileId?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		translationFileId?: string | null;
	}
	export interface ManualFileFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		driveFileId: FormControl<string | null | undefined>,
		isProofread: FormControl<boolean | null | undefined>,
		isTranslated: FormControl<boolean | null | undefined>,
		language: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		proofreadingFileId: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		translationFileId: FormControl<string | null | undefined>,
	}
	export function CreateManualFileFormGroup() {
		return new FormGroup<ManualFileFormProperties>({
			driveFileId: new FormControl<string | null | undefined>(undefined),
			isProofread: new FormControl<boolean | null | undefined>(undefined),
			isTranslated: new FormControl<boolean | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			proofreadingFileId: new FormControl<string | null | undefined>(undefined),
			translationFileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentInSearch extends Document {
		search_result_reason?: string | null;
	}
	export interface DocumentInSearchFormProperties extends DocumentFormProperties {
		search_result_reason: FormControl<string | null | undefined>,
	}
	export function CreateDocumentInSearchFormGroup() {
		return new FormGroup<DocumentInSearchFormProperties>({
			file_type: new FormControl<string | null | undefined>(undefined),
			has_custom_package: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			project_id: new FormControl<string | null | undefined>(undefined),
			review_in_manual_editor: new FormControl<boolean | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined),
			search_score: new FormControl<number | null | undefined>(undefined),
			source_language: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			uploaded_at: new FormControl<string | null | undefined>(undefined),
			word_count: new FormControl<string | null | undefined>(undefined),
			search_result_reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentLinks extends LinksMeta {
		admins?: {[id: string]: Href };
		download?: Href;
		editors?: {[id: string]: Href };
		'preview-box'?: Href;
		'preview-pdf'?: Href;
		'preview-pdf-viewer'?: Href;
		progress?: Href;
		project?: Href;
		strings?: Href;
		thumbnail?: Href;
	}
	export interface DocumentLinksFormProperties extends LinksMetaFormProperties {
		admins: FormControl<{[id: string]: Href } | null | undefined>,
		editors: FormControl<{[id: string]: Href } | null | undefined>,
	}
	export function CreateDocumentLinksFormGroup() {
		return new FormGroup<DocumentLinksFormProperties>({
			admins: new FormControl<{[id: string]: Href } | null | undefined>(undefined),
			editors: new FormControl<{[id: string]: Href } | null | undefined>(undefined),
		});

	}

	export interface DocumentList {
		documents?: Array<Document>;
		meta?: PagingMeta;
	}
	export interface DocumentListFormProperties {
	}
	export function CreateDocumentListFormGroup() {
		return new FormGroup<DocumentListFormProperties>({
		});

	}

	export interface DocumentSubjects {
		name?: string | null;
	}
	export interface DocumentSubjectsFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateDocumentSubjectsFormGroup() {
		return new FormGroup<DocumentSubjectsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentUpdates {

		/** You can add as many files as you want in documents[] parameter. */
		'documents[]'?: Array<string>;

		/** JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation. */
		'schemes[]'?: string | null;

		/** When provided, we will download the files from these URLs, in addition to files provded in `documents` parameter and then save as source documents */
		'source-links[]'?: Array<LinkedSourceDocument>;
	}
	export interface DocumentUpdatesFormProperties {

		/** JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation. */
		'schemes[]': FormControl<string | null | undefined>,
	}
	export function CreateDocumentUpdatesFormGroup() {
		return new FormGroup<DocumentUpdatesFormProperties>({
			'schemes[]': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinkedSourceDocument {
		name?: string | null;

		/**
		 * file size in bytes. optional.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size?: string | null;

		/** Preferred source names are listed as enum. If you have a custom file type, simply enter that name. */
		source?: LinkedSourceDocumentSource | null;
		url?: string | null;
	}
	export interface LinkedSourceDocumentFormProperties {
		name: FormControl<string | null | undefined>,

		/**
		 * file size in bytes. optional.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		size: FormControl<string | null | undefined>,

		/** Preferred source names are listed as enum. If you have a custom file type, simply enter that name. */
		source: FormControl<LinkedSourceDocumentSource | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateLinkedSourceDocumentFormGroup() {
		return new FormGroup<LinkedSourceDocumentFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<LinkedSourceDocumentSource | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LinkedSourceDocumentSource { dropbox = 'dropbox', googledrive = 'googledrive', icloud = 'icloud' }

	export interface DocumentUploadRequest {

		/** Single file data. The name is plural to provide a consistent naming convention. */
		documents?: string | null;

		/** JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation. */
		schemes?: string | null;
		'source-link'?: LinkedSourceDocument;
	}
	export interface DocumentUploadRequestFormProperties {

		/** Single file data. The name is plural to provide a consistent naming convention. */
		documents: FormControl<string | null | undefined>,

		/** JSON string. If your documents have a scheme, as in cases of CSV files, use the same array index keys for `schemes` parameter to specify their schemes. See `Document Schemes` title in the API documentation. */
		schemes: FormControl<string | null | undefined>,
	}
	export function CreateDocumentUploadRequestFormGroup() {
		return new FormGroup<DocumentUploadRequestFormProperties>({
			documents: new FormControl<string | null | undefined>(undefined),
			schemes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Earning {

		/** Type: float */
		amount?: number | null;
		currency?: string | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		due_date?: Date | null;
		status?: EarningStatus | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		words?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		words_approved?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		words_translated?: string | null;
	}
	export interface EarningFormProperties {

		/** Type: float */
		amount: FormControl<number | null | undefined>,
		currency: FormControl<string | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		due_date: FormControl<Date | null | undefined>,
		status: FormControl<EarningStatus | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		words: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		words_approved: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		words_translated: FormControl<string | null | undefined>,
	}
	export function CreateEarningFormGroup() {
		return new FormGroup<EarningFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			due_date: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<EarningStatus | null | undefined>(undefined),
			words: new FormControl<string | null | undefined>(undefined),
			words_approved: new FormControl<string | null | undefined>(undefined),
			words_translated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EarningStatus { paid = 'paid', pending = 'pending', failed = 'failed' }

	export interface EarningWithTQS extends Earning {

		/** Is this score above or below the average among other vendors in the same project? */
		is_above_average?: boolean | null;

		/** Type: float */
		score?: number | null;

		/**
		 * The number of translated strings by this translator which was edited by a proofreader.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		strings_edited?: string | null;

		/**
		 * The number of translated strings by this translator.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		strings_translated?: string | null;
	}
	export interface EarningWithTQSFormProperties extends EarningFormProperties {

		/** Is this score above or below the average among other vendors in the same project? */
		is_above_average: FormControl<boolean | null | undefined>,

		/** Type: float */
		score: FormControl<number | null | undefined>,

		/**
		 * The number of translated strings by this translator which was edited by a proofreader.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		strings_edited: FormControl<string | null | undefined>,

		/**
		 * The number of translated strings by this translator.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		strings_translated: FormControl<string | null | undefined>,
	}
	export function CreateEarningWithTQSFormGroup() {
		return new FormGroup<EarningWithTQSFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			currency: new FormControl<string | null | undefined>(undefined),
			due_date: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<EarningStatus | null | undefined>(undefined),
			words: new FormControl<string | null | undefined>(undefined),
			words_approved: new FormControl<string | null | undefined>(undefined),
			words_translated: new FormControl<string | null | undefined>(undefined),
			is_above_average: new FormControl<boolean | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			strings_edited: new FormControl<string | null | undefined>(undefined),
			strings_translated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Earnings {
		completed?: Array<EarningWithTQS>;
		ongoing?: Array<EarningWithTQS>;

		/** Type: float */
		total?: number | null;
	}
	export interface EarningsFormProperties {

		/** Type: float */
		total: FormControl<number | null | undefined>,
	}
	export function CreateEarningsFormGroup() {
		return new FormGroup<EarningsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Email {
		email?: string | null;
	}
	export interface EmailFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateEmailFormGroup() {
		return new FormGroup<EmailFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileNeedsVendor {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		fileId?: string | null;
		guid?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		projectId?: string | null;
		reason?: string | null;
		targetLanguage?: Array<string>;
		taskType?: Array<string>;
	}
	export interface FileNeedsVendorFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		fileId: FormControl<string | null | undefined>,
		guid: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		projectId: FormControl<string | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateFileNeedsVendorFormGroup() {
		return new FormGroup<FileNeedsVendorFormProperties>({
			fileId: new FormControl<string | null | undefined>(undefined),
			guid: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterContents {
		budget_codes?: Array<string>;
		categories?: Array<string>;
		clients?: Array<SimpleModel>;
		documents?: Array<SimpleModel>;
		projects?: Array<SimpleModel>;
		severities?: Array<string>;
		source_languages?: Array<string>;
		subjects?: Array<string>;
		target_languages?: Array<string>;
		vendors?: Array<SimpleModel>;
	}
	export interface FilterContentsFormProperties {
	}
	export function CreateFilterContentsFormGroup() {
		return new FormGroup<FilterContentsFormProperties>({
		});

	}

	export interface SimpleModel {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		name?: string | null;
	}
	export interface SimpleModelFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSimpleModelFormGroup() {
		return new FormGroup<SimpleModelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FilterDates {

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_from?: Date | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_to?: Date | null;
	}
	export interface FilterDatesFormProperties {

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_from: FormControl<Date | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_to: FormControl<Date | null | undefined>,
	}
	export function CreateFilterDatesFormGroup() {
		return new FormGroup<FilterDatesFormProperties>({
			date_from: new FormControl<Date | null | undefined>(undefined),
			date_to: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface FilterVendorRequest {
		clients?: Array<number>;
		communication_channel?: Array<string>;
		corporate_ids_for_auth?: Array<number>;
		corporates?: Array<number>;
		country?: Array<string>;
		created_at?: string | null;
		current_services?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		daily_proofreading_capacity?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		daily_translation_capacity?: number | null;
		destination_languages?: Array<number>;
		dtp_software?: Array<string>;
		email_address?: string | null;
		experience?: Array<string>;
		first_name?: string | null;
		id?: Array<number>;
		is_certified_translator?: boolean | null;
		is_sworn_translator?: boolean | null;
		language_pairs?: Array<string>;
		last_name?: string | null;
		last_online?: string | null;
		last_worked?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		memoq?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		memsource?: number | null;

		/** Type: double */
		min_tqs?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		omegat?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		project_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		proofreader_experience?: number | null;
		provides_creative_writing_service?: boolean | null;
		provides_postedit_service?: boolean | null;
		quote_file_subjects?: Array<string>;
		reference?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sdl_trados?: number | null;
		search?: string | null;
		skype_id?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smartcat?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smartling?: number | null;
		source_languages?: Array<number>;
		specialization?: Array<string>;
		status?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		subtitle_edit?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		subtitle_workshop?: number | null;
		translator_association?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		transsuite_2000?: number | null;
		user_working_timezone?: Array<string>;
		vendor_profile_lsp?: string | null;
		vendor_tags?: Array<string>;
		vendor_type?: Array<string>;
		vendor_working_timezone?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		word_count?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wordbee?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wordfast?: number | null;
		work_type?: string | null;
		work_with?: string | null;
		working_as?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		xbench?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		xtm?: number | null;
	}
	export interface FilterVendorRequestFormProperties {
		created_at: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		daily_proofreading_capacity: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		daily_translation_capacity: FormControl<number | null | undefined>,
		email_address: FormControl<string | null | undefined>,
		first_name: FormControl<string | null | undefined>,
		is_certified_translator: FormControl<boolean | null | undefined>,
		is_sworn_translator: FormControl<boolean | null | undefined>,
		last_name: FormControl<string | null | undefined>,
		last_online: FormControl<string | null | undefined>,
		last_worked: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		memoq: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		memsource: FormControl<number | null | undefined>,

		/** Type: double */
		min_tqs: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		omegat: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		project_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		proofreader_experience: FormControl<number | null | undefined>,
		provides_creative_writing_service: FormControl<boolean | null | undefined>,
		provides_postedit_service: FormControl<boolean | null | undefined>,
		reference: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sdl_trados: FormControl<number | null | undefined>,
		search: FormControl<string | null | undefined>,
		skype_id: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smartcat: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		smartling: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		subtitle_edit: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		subtitle_workshop: FormControl<number | null | undefined>,
		translator_association: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		transsuite_2000: FormControl<number | null | undefined>,
		vendor_profile_lsp: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		word_count: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wordbee: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		wordfast: FormControl<number | null | undefined>,
		work_type: FormControl<string | null | undefined>,
		work_with: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		xbench: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		xtm: FormControl<number | null | undefined>,
	}
	export function CreateFilterVendorRequestFormGroup() {
		return new FormGroup<FilterVendorRequestFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			daily_proofreading_capacity: new FormControl<number | null | undefined>(undefined),
			daily_translation_capacity: new FormControl<number | null | undefined>(undefined),
			email_address: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			is_certified_translator: new FormControl<boolean | null | undefined>(undefined),
			is_sworn_translator: new FormControl<boolean | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			last_online: new FormControl<string | null | undefined>(undefined),
			last_worked: new FormControl<string | null | undefined>(undefined),
			memoq: new FormControl<number | null | undefined>(undefined),
			memsource: new FormControl<number | null | undefined>(undefined),
			min_tqs: new FormControl<number | null | undefined>(undefined),
			omegat: new FormControl<number | null | undefined>(undefined),
			project_count: new FormControl<number | null | undefined>(undefined),
			proofreader_experience: new FormControl<number | null | undefined>(undefined),
			provides_creative_writing_service: new FormControl<boolean | null | undefined>(undefined),
			provides_postedit_service: new FormControl<boolean | null | undefined>(undefined),
			reference: new FormControl<string | null | undefined>(undefined),
			sdl_trados: new FormControl<number | null | undefined>(undefined),
			search: new FormControl<string | null | undefined>(undefined),
			skype_id: new FormControl<string | null | undefined>(undefined),
			smartcat: new FormControl<number | null | undefined>(undefined),
			smartling: new FormControl<number | null | undefined>(undefined),
			subtitle_edit: new FormControl<number | null | undefined>(undefined),
			subtitle_workshop: new FormControl<number | null | undefined>(undefined),
			translator_association: new FormControl<string | null | undefined>(undefined),
			transsuite_2000: new FormControl<number | null | undefined>(undefined),
			vendor_profile_lsp: new FormControl<string | null | undefined>(undefined),
			word_count: new FormControl<number | null | undefined>(undefined),
			wordbee: new FormControl<number | null | undefined>(undefined),
			wordfast: new FormControl<number | null | undefined>(undefined),
			work_type: new FormControl<string | null | undefined>(undefined),
			work_with: new FormControl<string | null | undefined>(undefined),
			xbench: new FormControl<number | null | undefined>(undefined),
			xtm: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Formats {
		documents?: FormatsDocuments;
		glossaries?: FormatsGlossaries;
		styleguides?: FormatsStyleguides;
	}
	export interface FormatsFormProperties {
	}
	export function CreateFormatsFormGroup() {
		return new FormGroup<FormatsFormProperties>({
		});

	}

	export interface FormatsDocuments {
		extensions?: Array<string>;
		mimes?: Array<string>;
	}
	export interface FormatsDocumentsFormProperties {
	}
	export function CreateFormatsDocumentsFormGroup() {
		return new FormGroup<FormatsDocumentsFormProperties>({
		});

	}

	export interface FormatsGlossaries {
		extensions?: Array<string>;
	}
	export interface FormatsGlossariesFormProperties {
	}
	export function CreateFormatsGlossariesFormGroup() {
		return new FormGroup<FormatsGlossariesFormProperties>({
		});

	}

	export interface FormatsStyleguides {
		extensions?: Array<string>;
	}
	export interface FormatsStyleguidesFormProperties {
	}
	export function CreateFormatsStyleguidesFormGroup() {
		return new FormGroup<FormatsStyleguidesFormProperties>({
		});

	}

	export interface GetQuotesForDocumentsBody {
		files?: Array<number>;
	}
	export interface GetQuotesForDocumentsBodyFormProperties {
	}
	export function CreateGetQuotesForDocumentsBodyFormGroup() {
		return new FormGroup<GetQuotesForDocumentsBodyFormProperties>({
		});

	}

	export interface GetQuotesForLanguagesBody {
		languages?: Array<string>;
	}
	export interface GetQuotesForLanguagesBodyFormProperties {
	}
	export function CreateGetQuotesForLanguagesBodyFormGroup() {
		return new FormGroup<GetQuotesForLanguagesBodyFormProperties>({
		});

	}

	export interface Glossary {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		links?: DocumentLinks;
		name?: string | null;

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		uploaded_at?: string | null;
	}
	export interface GlossaryFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		uploaded_at: FormControl<string | null | undefined>,
	}
	export function CreateGlossaryFormGroup() {
		return new FormGroup<GlossaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uploaded_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlossaryList {
		glossaries?: Array<Glossary>;
		meta?: PagingMeta;
	}
	export interface GlossaryListFormProperties {
	}
	export function CreateGlossaryListFormGroup() {
		return new FormGroup<GlossaryListFormProperties>({
		});

	}

	export interface GlossaryUploadRequest {

		/**
		 * You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.
		 * Required
		 */
		glossaries: string;
	}
	export interface GlossaryUploadRequestFormProperties {

		/**
		 * You can only add one glossary, even though the name suggests multiple glossaries. This may be updated in the future to support multiple glossaries.
		 * Required
		 */
		glossaries: FormControl<string | null | undefined>,
	}
	export function CreateGlossaryUploadRequestFormGroup() {
		return new FormGroup<GlossaryUploadRequestFormProperties>({
			glossaries: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InstantContentsTranslationResult {

		/** a map of source string > translated string. */
		results?: {[id: string]: string };
	}
	export interface InstantContentsTranslationResultFormProperties {

		/** a map of source string > translated string. */
		results: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateInstantContentsTranslationResultFormGroup() {
		return new FormGroup<InstantContentsTranslationResultFormProperties>({
			results: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface InstantFilesTranslationResult {

		/** a map of source file name > base64-encoded translated file. */
		results?: {[id: string]: string };
	}
	export interface InstantFilesTranslationResultFormProperties {

		/** a map of source file name > base64-encoded translated file. */
		results: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateInstantFilesTranslationResultFormGroup() {
		return new FormGroup<InstantFilesTranslationResultFormProperties>({
			results: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface InstantTranslationFilter {
		skipMt?: Array<string>;
		skipPostEdit?: Array<string>;
	}
	export interface InstantTranslationFilterFormProperties {
	}
	export function CreateInstantTranslationFilterFormGroup() {
		return new FormGroup<InstantTranslationFilterFormProperties>({
		});

	}

	export interface InstantTranslationRequest {

		/** Simple list of strings to be translated. You can also choose to upload files instead of strings. */
		contents?: Array<string>;

		/** You can add as many files as you want in documents parameter. */
		documents?: Array<FileAsData>;
		filters?: InstantTranslationFilter;

		/** Free-form meta data to attach to your instant translation request. This can be used in statistics and analytical dashboards. */
		meta?: string | null;
	}
	export interface InstantTranslationRequestFormProperties {

		/** Free-form meta data to attach to your instant translation request. This can be used in statistics and analytical dashboards. */
		meta: FormControl<string | null | undefined>,
	}
	export function CreateInstantTranslationRequestFormGroup() {
		return new FormGroup<InstantTranslationRequestFormProperties>({
			meta: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InstantTranslationResult {
	}
	export interface InstantTranslationResultFormProperties {
	}
	export function CreateInstantTranslationResultFormGroup() {
		return new FormGroup<InstantTranslationResultFormProperties>({
		});

	}

	export interface IntegrationsToken {
		token?: string | null;
	}
	export interface IntegrationsTokenFormProperties {
		token: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationsTokenFormGroup() {
		return new FormGroup<IntegrationsTokenFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvitedVendor {

		/** Action to be taken */
		action?: string | null;

		/**
		 * Email opening rate of the vendor
		 * Type: double
		 */
		email_open_rate?: number | null;

		/** Did the vendor enter the given project */
		is_entered?: boolean | null;

		/** Is vendor get ever paid? */
		is_get_paid?: boolean | null;

		/** Did the vendor work on the given project */
		is_worked?: boolean | null;

		/** Vendors working status in any project */
		is_worked_in_any_project?: boolean | null;

		/**
		 * Last project date
		 * Type: DateOnly
		 */
		last_project_date?: Date | null;

		/**
		 * Project translation percentage when interacted with the vendor
		 * Type: double
		 */
		project_status_when_interacted?: number | null;

		/**
		 * Registration date
		 * Type: DateOnly
		 */
		registration_date?: Date | null;

		/**
		 * Responsiveness of the vendor
		 * Type: double
		 */
		responsiveness?: number | null;

		/** Id in the Users */
		user_id?: string | null;

		/** Id in the Vendors */
		vendor_id?: string | null;

		/** The name of the vendor */
		vendor_name?: string | null;

		/** Type of the vendor in the given project namely translator or proofreader */
		vendor_type?: string | null;
	}
	export interface InvitedVendorFormProperties {

		/** Action to be taken */
		action: FormControl<string | null | undefined>,

		/**
		 * Email opening rate of the vendor
		 * Type: double
		 */
		email_open_rate: FormControl<number | null | undefined>,

		/** Did the vendor enter the given project */
		is_entered: FormControl<boolean | null | undefined>,

		/** Is vendor get ever paid? */
		is_get_paid: FormControl<boolean | null | undefined>,

		/** Did the vendor work on the given project */
		is_worked: FormControl<boolean | null | undefined>,

		/** Vendors working status in any project */
		is_worked_in_any_project: FormControl<boolean | null | undefined>,

		/**
		 * Last project date
		 * Type: DateOnly
		 */
		last_project_date: FormControl<Date | null | undefined>,

		/**
		 * Project translation percentage when interacted with the vendor
		 * Type: double
		 */
		project_status_when_interacted: FormControl<number | null | undefined>,

		/**
		 * Registration date
		 * Type: DateOnly
		 */
		registration_date: FormControl<Date | null | undefined>,

		/**
		 * Responsiveness of the vendor
		 * Type: double
		 */
		responsiveness: FormControl<number | null | undefined>,

		/** Id in the Users */
		user_id: FormControl<string | null | undefined>,

		/** Id in the Vendors */
		vendor_id: FormControl<string | null | undefined>,

		/** The name of the vendor */
		vendor_name: FormControl<string | null | undefined>,

		/** Type of the vendor in the given project namely translator or proofreader */
		vendor_type: FormControl<string | null | undefined>,
	}
	export function CreateInvitedVendorFormGroup() {
		return new FormGroup<InvitedVendorFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			email_open_rate: new FormControl<number | null | undefined>(undefined),
			is_entered: new FormControl<boolean | null | undefined>(undefined),
			is_get_paid: new FormControl<boolean | null | undefined>(undefined),
			is_worked: new FormControl<boolean | null | undefined>(undefined),
			is_worked_in_any_project: new FormControl<boolean | null | undefined>(undefined),
			last_project_date: new FormControl<Date | null | undefined>(undefined),
			project_status_when_interacted: new FormControl<number | null | undefined>(undefined),
			registration_date: new FormControl<Date | null | undefined>(undefined),
			responsiveness: new FormControl<number | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
			vendor_id: new FormControl<string | null | undefined>(undefined),
			vendor_name: new FormControl<string | null | undefined>(undefined),
			vendor_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvitedVendorsByLanguage {

		/** Invited vendors for this target language */
		invited_vendors?: Array<InvitedVendor>;

		/** Target Language that the vendors invited for */
		target_language?: string | null;
	}
	export interface InvitedVendorsByLanguageFormProperties {

		/** Target Language that the vendors invited for */
		target_language: FormControl<string | null | undefined>,
	}
	export function CreateInvitedVendorsByLanguageFormGroup() {
		return new FormGroup<InvitedVendorsByLanguageFormProperties>({
			target_language: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceLinks extends LinksMeta {
		corporate?: Href;
		html?: Href;
		json?: Href;
		pdf?: Href;
		project?: Href;
		view?: Href;
	}
	export interface InvoiceLinksFormProperties extends LinksMetaFormProperties {
	}
	export function CreateInvoiceLinksFormGroup() {
		return new FormGroup<InvoiceLinksFormProperties>({
		});

	}

	export interface Language {
		code?: string | null;
		name?: string | null;
	}
	export interface LanguageFormProperties {
		code: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LanguagePairsReport {
		meta?: PagingMeta;
		LanguagePairsReportReport?: Array<LanguagePairsReportReport>;
	}
	export interface LanguagePairsReportFormProperties {
	}
	export function CreateLanguagePairsReportFormGroup() {
		return new FormGroup<LanguagePairsReportFormProperties>({
		});

	}

	export interface LanguagePairsReportReport {
		language_pair?: LanguagePairsReportReportLanguage_pair;

		/** Type: float */
		spending?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count?: string | null;
	}
	export interface LanguagePairsReportReportFormProperties {

		/** Type: float */
		spending: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count: FormControl<string | null | undefined>,
	}
	export function CreateLanguagePairsReportReportFormGroup() {
		return new FormGroup<LanguagePairsReportReportFormProperties>({
			spending: new FormControl<number | null | undefined>(undefined),
			word_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LanguagePairsReportReportLanguage_pair {
		source_language?: string | null;
		target_language?: string | null;
	}
	export interface LanguagePairsReportReportLanguage_pairFormProperties {
		source_language: FormControl<string | null | undefined>,
		target_language: FormControl<string | null | undefined>,
	}
	export function CreateLanguagePairsReportReportLanguage_pairFormGroup() {
		return new FormGroup<LanguagePairsReportReportLanguage_pairFormProperties>({
			source_language: new FormControl<string | null | undefined>(undefined),
			target_language: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LinksMeta {
		self?: Href;
	}
	export interface LinksMetaFormProperties {
	}
	export function CreateLinksMetaFormGroup() {
		return new FormGroup<LinksMetaFormProperties>({
		});

	}

	export enum ListOrderType { asc = 'asc', desc = 'desc' }

	export interface LocationUpdateContent {

		/**
		 * Latitude of location
		 * Required
		 * Type: float
		 */
		lat: number;

		/**
		 * Longitude of location
		 * Required
		 * Type: float
		 */
		lon: number;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp?: number | null;
	}
	export interface LocationUpdateContentFormProperties {

		/**
		 * Latitude of location
		 * Required
		 * Type: float
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Longitude of location
		 * Required
		 * Type: float
		 */
		lon: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		timestamp: FormControl<number | null | undefined>,
	}
	export function CreateLocationUpdateContentFormGroup() {
		return new FormGroup<LocationUpdateContentFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lon: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MachineTranslatedStrings {
		cost?: Monetary;
		strings?: Array<ClientStringWithTranslations>;
	}
	export interface MachineTranslatedStringsFormProperties {
	}
	export function CreateMachineTranslatedStringsFormGroup() {
		return new FormGroup<MachineTranslatedStringsFormProperties>({
		});

	}

	export interface NewProject {

		/** Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'. */
		callback_url?: string | null;

		/** Coupon code to redeem */
		coupon_code?: string | null;

		/** Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. */
		custom?: Array<string>;

		/** Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls. */
		'documents[]'?: string | null;

		/** Optional. Only one glossary is supported at the moment. */
		'glossaries[]'?: string | null;
		source_language?: string | null;

		/** Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls. */
		'styleguides[]'?: string | null;
		'target_languages[]'?: Array<string>;
	}
	export interface NewProjectFormProperties {

		/** Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'. */
		callback_url: FormControl<string | null | undefined>,

		/** Coupon code to redeem */
		coupon_code: FormControl<string | null | undefined>,

		/** Optional. You can add as many files as you want in documents[] parameter. Or you add your documents later in separate calls. */
		'documents[]': FormControl<string | null | undefined>,

		/** Optional. Only one glossary is supported at the moment. */
		'glossaries[]': FormControl<string | null | undefined>,
		source_language: FormControl<string | null | undefined>,

		/** Optional. You can add as many files as you want in styleguides[] parameter. Or you add your style guides later in separate calls. */
		'styleguides[]': FormControl<string | null | undefined>,
	}
	export function CreateNewProjectFormGroup() {
		return new FormGroup<NewProjectFormProperties>({
			callback_url: new FormControl<string | null | undefined>(undefined),
			coupon_code: new FormControl<string | null | undefined>(undefined),
			'documents[]': new FormControl<string | null | undefined>(undefined),
			'glossaries[]': new FormControl<string | null | undefined>(undefined),
			source_language: new FormControl<string | null | undefined>(undefined),
			'styleguides[]': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewSalesActivity {
		subject?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		timestamp?: string | null;

		/** Activity Type */
		type?: string | null;
	}
	export interface NewSalesActivityFormProperties {
		subject: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		timestamp: FormControl<string | null | undefined>,

		/** Activity Type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateNewSalesActivityFormGroup() {
		return new FormGroup<NewSalesActivityFormProperties>({
			subject: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotificationSubscription {
		device?: NotificationSubscriptionDevice | null;

		/** OneSignal calls this "player ID". */
		endpoint?: string | null;
		type?: NotificationSubscriptionType | null;
	}
	export interface NotificationSubscriptionFormProperties {
		device: FormControl<NotificationSubscriptionDevice | null | undefined>,

		/** OneSignal calls this "player ID". */
		endpoint: FormControl<string | null | undefined>,
		type: FormControl<NotificationSubscriptionType | null | undefined>,
	}
	export function CreateNotificationSubscriptionFormGroup() {
		return new FormGroup<NotificationSubscriptionFormProperties>({
			device: new FormControl<NotificationSubscriptionDevice | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<NotificationSubscriptionType | null | undefined>(undefined),
		});

	}

	export enum NotificationSubscriptionDevice { iOS = 'iOS', Android = 'Android', Chrome = 'Chrome', Firefox = 'Firefox', Safari = 'Safari', Edge = 'Edge', Amazon = 'Amazon', WindowsPhone = 'WindowsPhone', Windows = 'Windows', MacOS = 'MacOS' }

	export enum NotificationSubscriptionType { OneSignal = 'OneSignal' }

	export interface OperationStatus {
		status?: OperationStatusStatus | null;
	}
	export interface OperationStatusFormProperties {
		status: FormControl<OperationStatusStatus | null | undefined>,
	}
	export function CreateOperationStatusFormGroup() {
		return new FormGroup<OperationStatusFormProperties>({
			status: new FormControl<OperationStatusStatus | null | undefined>(undefined),
		});

	}

	export enum OperationStatusStatus { success = 'success', error = 'error' }

	export enum OperationStatusEnum { success = 'success', error = 'error' }

	export interface Package extends PackageStatus {

		/** This is the unique package tracking key. You can use this key to track the current progress of the translation packaging with /package/check call. */
		key?: string | null;
	}
	export interface PackageFormProperties extends PackageStatusFormProperties {

		/** This is the unique package tracking key. You can use this key to track the current progress of the translation packaging with /package/check call. */
		key: FormControl<string | null | undefined>,
	}
	export function CreatePackageFormGroup() {
		return new FormGroup<PackageFormProperties>({
			status: new FormControl<PackageStatusStatus | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PackageStatus {

		/** The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package. */
		status?: PackageStatusStatus | null;
	}
	export interface PackageStatusFormProperties {

		/** The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package. */
		status: FormControl<PackageStatusStatus | null | undefined>,
	}
	export function CreatePackageStatusFormGroup() {
		return new FormGroup<PackageStatusFormProperties>({
			status: new FormControl<PackageStatusStatus | null | undefined>(undefined),
		});

	}

	export enum PackageStatusStatus { started = 'started', packaging = 'packaging', completed = 'completed' }


	/** The status of translation packaging. Possible values are 'started', 'packaging', 'completed'. When completed, you can make a /download call to download the last translation package. */
	export enum PackageStatusEnum { started = 'started', packaging = 'packaging', completed = 'completed' }

	export interface PagingLinksMeta extends LinksMeta {
		next?: string | null;
		previous?: string | null;
	}
	export interface PagingLinksMetaFormProperties extends LinksMetaFormProperties {
		next: FormControl<string | null | undefined>,
		previous: FormControl<string | null | undefined>,
	}
	export function CreatePagingLinksMetaFormGroup() {
		return new FormGroup<PagingLinksMetaFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
			previous: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PamMessage {

		/** the message to be sent */
		message?: string | null;

		/** name of the recipients in the channel */
		recipients?: Array<string>;

		/** contexts for next message */
		slots?: Array<string>;

		/** id of the thread */
		thread_id?: string | null;

		/** the key for thread_id default is project */
		thread_key?: string | null;
	}
	export interface PamMessageFormProperties {

		/** the message to be sent */
		message: FormControl<string | null | undefined>,

		/** id of the thread */
		thread_id: FormControl<string | null | undefined>,

		/** the key for thread_id default is project */
		thread_key: FormControl<string | null | undefined>,
	}
	export function CreatePamMessageFormGroup() {
		return new FormGroup<PamMessageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			thread_id: new FormControl<string | null | undefined>(undefined),
			thread_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PasswordUpdateContent {

		/** New Password */
		password?: string | null;
	}
	export interface PasswordUpdateContentFormProperties {

		/** New Password */
		password: FormControl<string | null | undefined>,
	}
	export function CreatePasswordUpdateContentFormGroup() {
		return new FormGroup<PasswordUpdateContentFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PaymentInfo {
		billing?: BillingAddress;
		card?: CreditCard;
		cards?: Array<CreditCard>;
		corporate?: PaymentInfoCorporate;
		shared_card?: CreditCard;
	}
	export interface PaymentInfoFormProperties {
	}
	export function CreatePaymentInfoFormGroup() {
		return new FormGroup<PaymentInfoFormProperties>({
		});

	}

	export interface PaymentInfoCorporate {
		allow_api_invoicing?: boolean | null;
		allow_payment_code?: boolean | null;
		auto_charge?: boolean | null;
		billing?: BillingAddress;
		card?: CreditCard;
		contact_email_address?: string | null;
		payment_code?: string | null;
	}
	export interface PaymentInfoCorporateFormProperties {
		allow_api_invoicing: FormControl<boolean | null | undefined>,
		allow_payment_code: FormControl<boolean | null | undefined>,
		auto_charge: FormControl<boolean | null | undefined>,
		contact_email_address: FormControl<string | null | undefined>,
		payment_code: FormControl<string | null | undefined>,
	}
	export function CreatePaymentInfoCorporateFormGroup() {
		return new FormGroup<PaymentInfoCorporateFormProperties>({
			allow_api_invoicing: new FormControl<boolean | null | undefined>(undefined),
			allow_payment_code: new FormControl<boolean | null | undefined>(undefined),
			auto_charge: new FormControl<boolean | null | undefined>(undefined),
			contact_email_address: new FormControl<string | null | undefined>(undefined),
			payment_code: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PermissionList {
		meta?: PagingMeta;
		permissions?: Array<string>;
	}
	export interface PermissionListFormProperties {
	}
	export function CreatePermissionListFormGroup() {
		return new FormGroup<PermissionListFormProperties>({
		});

	}

	export interface PopularLanguagePairs {
		pairs?: Array<LanguagePair>;
	}
	export interface PopularLanguagePairsFormProperties {
	}
	export function CreatePopularLanguagePairsFormGroup() {
		return new FormGroup<PopularLanguagePairsFormProperties>({
		});

	}

	export interface ProfilePictureUpload {

		/**
		 * Profile picture file contents. Accepted extensions are png, jpg.
		 * Required
		 */
		profile_picture: string;
	}
	export interface ProfilePictureUploadFormProperties {

		/**
		 * Profile picture file contents. Accepted extensions are png, jpg.
		 * Required
		 */
		profile_picture: FormControl<string | null | undefined>,
	}
	export function CreateProfilePictureUploadFormGroup() {
		return new FormGroup<ProfilePictureUploadFormProperties>({
			profile_picture: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Progress {
	}
	export interface ProgressFormProperties {
	}
	export function CreateProgressFormGroup() {
		return new FormGroup<ProgressFormProperties>({
		});

	}

	export interface ProgressLink extends LinksMeta {
		project?: Href;
	}
	export interface ProgressLinkFormProperties extends LinksMetaFormProperties {
	}
	export function CreateProgressLinkFormGroup() {
		return new FormGroup<ProgressLinkFormProperties>({
		});

	}

	export interface ProgressSub {

		/** Type: float */
		proofreading?: number | null;

		/** Type: float */
		total?: number | null;

		/** Type: float */
		translation?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count?: string | null;
	}
	export interface ProgressSubFormProperties {

		/** Type: float */
		proofreading: FormControl<number | null | undefined>,

		/** Type: float */
		total: FormControl<number | null | undefined>,

		/** Type: float */
		translation: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count: FormControl<string | null | undefined>,
	}
	export function CreateProgressSubFormGroup() {
		return new FormGroup<ProgressSubFormProperties>({
			proofreading: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
			translation: new FormControl<number | null | undefined>(undefined),
			word_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectCompletionReport {

		/** Assigned admin's user id */
		admin_user_id?: string | null;
		completion_report_data?: Array<InvitedVendorsByLanguage>;

		/** internal id of the project */
		id?: string | null;

		/** quote id of the project */
		quote_id?: string | null;
	}
	export interface ProjectCompletionReportFormProperties {

		/** Assigned admin's user id */
		admin_user_id: FormControl<string | null | undefined>,

		/** internal id of the project */
		id: FormControl<string | null | undefined>,

		/** quote id of the project */
		quote_id: FormControl<string | null | undefined>,
	}
	export function CreateProjectCompletionReportFormGroup() {
		return new FormGroup<ProjectCompletionReportFormProperties>({
			admin_user_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			quote_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectId {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		'internal-id'?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		'public-id'?: string | null;
	}
	export interface ProjectIdFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		'internal-id': FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		'public-id': FormControl<string | null | undefined>,
	}
	export function CreateProjectIdFormGroup() {
		return new FormGroup<ProjectIdFormProperties>({
			'internal-id': new FormControl<string | null | undefined>(undefined),
			'public-id': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectInSearch extends Project {
		search_result_reason?: string | null;
	}
	export interface ProjectInSearchFormProperties extends ProjectFormProperties {
		search_result_reason: FormControl<string | null | undefined>,
	}
	export function CreateProjectInSearchFormGroup() {
		return new FormGroup<ProjectInSearchFormProperties>({
			average_scores: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			budget_code: new FormControl<string | null | undefined>(undefined),
			callback_url: new FormControl<string | null | undefined>(undefined),
			can_pam_manage: new FormControl<boolean | null | undefined>(undefined),
			cm_id: new FormControl<string | null | undefined>(undefined),
			completed_on: new FormControl<Date | null | undefined>(undefined),
			continuous_project_type: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			custom: new FormControl<string | null | undefined>(undefined),
			delivery_at: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_api_project: new FormControl<boolean | null | undefined>(undefined),
			is_certified: new FormControl<boolean | null | undefined>(undefined),
			is_continuous: new FormControl<boolean | null | undefined>(undefined),
			is_manual: new FormControl<boolean | null | undefined>(undefined),
			role: new FormControl<ProjectRole | null | undefined>(undefined),
			should_send_client_survey: new FormControl<boolean | null | undefined>(undefined),
			source: new FormControl<ProjectSource | null | undefined>(undefined),
			source_language: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ProjectStatus | null | undefined>(undefined),
			tms_name: new FormControl<string | null | undefined>(undefined),
			valid_until: new FormControl<string | null | undefined>(undefined),
			vendor_word_count: new FormControl<string | null | undefined>(undefined),
			word_count: new FormControl<string | null | undefined>(undefined),
			search_result_reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectLaunchResponse {
		status?: ProjectLaunchResponseStatus | null;
	}
	export interface ProjectLaunchResponseFormProperties {
		status: FormControl<ProjectLaunchResponseStatus | null | undefined>,
	}
	export function CreateProjectLaunchResponseFormGroup() {
		return new FormGroup<ProjectLaunchResponseFormProperties>({
			status: new FormControl<ProjectLaunchResponseStatus | null | undefined>(undefined),
		});

	}

	export enum ProjectLaunchResponseStatus { started = 'started' }

	export enum ProjectLaunchResponseEnum { started = 'started' }

	export interface ProjectLinks extends LinksMeta {
		documents?: Href;
		glossaries?: Href;
		payment?: Href;
		'quote-pdf'?: Href;
		styleguides?: Href;
	}
	export interface ProjectLinksFormProperties extends LinksMetaFormProperties {
	}
	export function CreateProjectLinksFormGroup() {
		return new FormGroup<ProjectLinksFormProperties>({
		});

	}

	export interface ProjectList {
		meta?: PagingMeta;
		projects?: Array<Project>;
	}
	export interface ProjectListFormProperties {
	}
	export function CreateProjectListFormGroup() {
		return new FormGroup<ProjectListFormProperties>({
		});

	}

	export interface ProjectPayment {

		/** Last 4 digits of the credit card you are using one-time. This parameter is only required when stripe_token is provided. */
		bin?: string | null;

		/** Optional with corporate accounts. Not available for others. */
		budget_code?: string | null;

		/**
		 * Optional. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		card_id?: string | null;

		/** Optional. `corporate` payment method requires this.s */
		payment_code?: string | null;

		/** Optional. Determines which method to use for payment. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin. `corporate` method follows corporate account policy automatically, either follows invoicing flow or automatically charges corporate's primary card. */
		payment_method?: ProjectPaymentPayment_method | null;

		/** This is required if you are using a one-time credit card. This is the token generted from frontend via Stripe SDK. If you are using a one-time card with `stripe_token`, you must also provide `bin`, last 4 digits of the card. */
		stripe_token?: string | null;
	}
	export interface ProjectPaymentFormProperties {

		/** Last 4 digits of the credit card you are using one-time. This parameter is only required when stripe_token is provided. */
		bin: FormControl<string | null | undefined>,

		/** Optional with corporate accounts. Not available for others. */
		budget_code: FormControl<string | null | undefined>,

		/**
		 * Optional. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		card_id: FormControl<string | null | undefined>,

		/** Optional. `corporate` payment method requires this.s */
		payment_code: FormControl<string | null | undefined>,

		/** Optional. Determines which method to use for payment. `client`, `app`, `corporate_card` methods require a credit card ID. `credit` method requires Stripe token and bin. `corporate` method follows corporate account policy automatically, either follows invoicing flow or automatically charges corporate's primary card. */
		payment_method: FormControl<ProjectPaymentPayment_method | null | undefined>,

		/** This is required if you are using a one-time credit card. This is the token generted from frontend via Stripe SDK. If you are using a one-time card with `stripe_token`, you must also provide `bin`, last 4 digits of the card. */
		stripe_token: FormControl<string | null | undefined>,
	}
	export function CreateProjectPaymentFormGroup() {
		return new FormGroup<ProjectPaymentFormProperties>({
			bin: new FormControl<string | null | undefined>(undefined),
			budget_code: new FormControl<string | null | undefined>(undefined),
			card_id: new FormControl<string | null | undefined>(undefined),
			payment_code: new FormControl<string | null | undefined>(undefined),
			payment_method: new FormControl<ProjectPaymentPayment_method | null | undefined>(undefined),
			stripe_token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProjectPaymentPayment_method { corporate = 'corporate', client = 'client', app = 'app', credit = 'credit', corporate_card = 'corporate_card' }

	export interface ProjectTQS {

		/** Is this score above or below the average among other vendors in the same project? */
		is_above_average?: boolean | null;

		/** Type: float */
		score?: number | null;

		/**
		 * The number of translated strings by this translator which was edited by a proofreader.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		strings_edited?: string | null;

		/**
		 * The number of translated strings by this translator.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		strings_translated?: string | null;
	}
	export interface ProjectTQSFormProperties {

		/** Is this score above or below the average among other vendors in the same project? */
		is_above_average: FormControl<boolean | null | undefined>,

		/** Type: float */
		score: FormControl<number | null | undefined>,

		/**
		 * The number of translated strings by this translator which was edited by a proofreader.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		strings_edited: FormControl<string | null | undefined>,

		/**
		 * The number of translated strings by this translator.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		strings_translated: FormControl<string | null | undefined>,
	}
	export function CreateProjectTQSFormGroup() {
		return new FormGroup<ProjectTQSFormProperties>({
			is_above_average: new FormControl<boolean | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			strings_edited: new FormControl<string | null | undefined>(undefined),
			strings_translated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectUpdate {

		/** Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'. */
		callback_url?: string | null;

		/** Coupon code to redeem */
		coupon_code?: string | null;

		/** Optional. This is a consistent custom data parameter that will be given to you in the response across every request of this project model. Values should be provided like this, custom[my_key] = my_value. If you previously provided one, it will be replaced. */
		custom?: Array<string>;
		source_language?: string | null;
		'target_languages[]'?: Array<string>;
	}
	export interface ProjectUpdateFormProperties {

		/** Optional. If you provide a callback URL, we will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'. */
		callback_url: FormControl<string | null | undefined>,

		/** Coupon code to redeem */
		coupon_code: FormControl<string | null | undefined>,
		source_language: FormControl<string | null | undefined>,
	}
	export function CreateProjectUpdateFormGroup() {
		return new FormGroup<ProjectUpdateFormProperties>({
			callback_url: new FormControl<string | null | undefined>(undefined),
			coupon_code: new FormControl<string | null | undefined>(undefined),
			source_language: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QaEntry {
		category?: string | null;
		comment?: string | null;
		docId?: string | null;
		editorLink?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		end?: string | null;
		inSource?: boolean | null;
		isCurrent?: boolean | null;
		module?: string | null;
		projectId?: SimpleModel;
		severity?: string | null;
		source?: string | null;
		sourceLanguage?: SimpleModel;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		start?: string | null;
		state?: string | null;
		targetLanguage?: SimpleModel;
		translation?: string | null;
		uniqueKey?: string | null;
		vendor?: SimpleModel;
	}
	export interface QaEntryFormProperties {
		category: FormControl<string | null | undefined>,
		comment: FormControl<string | null | undefined>,
		docId: FormControl<string | null | undefined>,
		editorLink: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		end: FormControl<string | null | undefined>,
		inSource: FormControl<boolean | null | undefined>,
		isCurrent: FormControl<boolean | null | undefined>,
		module: FormControl<string | null | undefined>,
		severity: FormControl<string | null | undefined>,
		source: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		start: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		translation: FormControl<string | null | undefined>,
		uniqueKey: FormControl<string | null | undefined>,
	}
	export function CreateQaEntryFormGroup() {
		return new FormGroup<QaEntryFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			docId: new FormControl<string | null | undefined>(undefined),
			editorLink: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<string | null | undefined>(undefined),
			inSource: new FormControl<boolean | null | undefined>(undefined),
			isCurrent: new FormControl<boolean | null | undefined>(undefined),
			module: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			translation: new FormControl<string | null | undefined>(undefined),
			uniqueKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QaFilter {
		budget_codes?: Array<string>;
		categories?: Array<string>;
		clients?: Array<number>;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_from?: Date | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_to?: Date | null;
		documents?: Array<number>;
		projects?: Array<number>;
		severities?: Array<string>;
		source_languages?: Array<string>;
		subjects?: Array<string>;
		target_languages?: Array<string>;
		vendors?: Array<number>;
	}
	export interface QaFilterFormProperties {

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_from: FormControl<Date | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_to: FormControl<Date | null | undefined>,
	}
	export function CreateQaFilterFormGroup() {
		return new FormGroup<QaFilterFormProperties>({
			date_from: new FormControl<Date | null | undefined>(undefined),
			date_to: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface QaWarnings {
		report?: Array<QaEntry>;
	}
	export interface QaWarningsFormProperties {
	}
	export function CreateQaWarningsFormGroup() {
		return new FormGroup<QaWarningsFormProperties>({
		});

	}

	export interface RegeneratePreviewResponse {
		link?: Href;
		source?: string | null;
	}
	export interface RegeneratePreviewResponseFormProperties {
		source: FormControl<string | null | undefined>,
	}
	export function CreateRegeneratePreviewResponseFormGroup() {
		return new FormGroup<RegeneratePreviewResponseFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportContent {

		/** Activity Type */
		activity_type?: string | null;

		/** Report Message */
		message?: string | null;
	}
	export interface ReportContentFormProperties {

		/** Activity Type */
		activity_type: FormControl<string | null | undefined>,

		/** Report Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateReportContentFormGroup() {
		return new FormGroup<ReportContentFormProperties>({
			activity_type: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportFilter {

		/** budget code filter. valid for corporate accounts only. */
		budget_code?: string | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_from?: Date | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_to?: Date | null;

		/** List of source language codes. */
		source_languages?: Array<string>;

		/** List of target language codes. */
		target_languages?: Array<string>;

		/** List of corporate user IDs. Valid for corporate accounts only. */
		users?: Array<number>;
	}
	export interface ReportFilterFormProperties {

		/** budget code filter. valid for corporate accounts only. */
		budget_code: FormControl<string | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_from: FormControl<Date | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		date_to: FormControl<Date | null | undefined>,
	}
	export function CreateReportFilterFormGroup() {
		return new FormGroup<ReportFilterFormProperties>({
			budget_code: new FormControl<string | null | undefined>(undefined),
			date_from: new FormControl<Date | null | undefined>(undefined),
			date_to: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Responsivity {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		invited?: string | null;
		month?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		notEntered?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		onlyEntered?: string | null;

		/** Type: float */
		score?: number | null;
		week?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		worked?: string | null;
	}
	export interface ResponsivityFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		invited: FormControl<string | null | undefined>,
		month: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		notEntered: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		onlyEntered: FormControl<string | null | undefined>,

		/** Type: float */
		score: FormControl<number | null | undefined>,
		week: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		worked: FormControl<string | null | undefined>,
	}
	export function CreateResponsivityFormGroup() {
		return new FormGroup<ResponsivityFormProperties>({
			invited: new FormControl<string | null | undefined>(undefined),
			month: new FormControl<string | null | undefined>(undefined),
			notEntered: new FormControl<string | null | undefined>(undefined),
			onlyEntered: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			week: new FormControl<string | null | undefined>(undefined),
			worked: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResponsivityList {
		links?: LinksMeta;
		responsivity?: Array<Responsivity>;
	}
	export interface ResponsivityListFormProperties {
	}
	export function CreateResponsivityListFormGroup() {
		return new FormGroup<ResponsivityListFormProperties>({
		});

	}

	export interface SalesActivities {
		activities?: Array<SalesActivity>;
	}
	export interface SalesActivitiesFormProperties {
	}
	export function CreateSalesActivitiesFormGroup() {
		return new FormGroup<SalesActivitiesFormProperties>({
		});

	}

	export interface SalesActivity {
		body?: string | null;

		/**
		 * timestamp
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created_at?: string | null;
		created_by?: string | null;
		type?: string | null;
	}
	export interface SalesActivityFormProperties {
		body: FormControl<string | null | undefined>,

		/**
		 * timestamp
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		created_at: FormControl<string | null | undefined>,
		created_by: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateSalesActivityFormGroup() {
		return new FormGroup<SalesActivityFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<string | null | undefined>(undefined),
			created_by: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SalesActivityType { EMAIL = 'EMAIL', NOTE = 'NOTE', INCOMING_EMAIL = 'INCOMING_EMAIL', TASK = 'TASK' }

	export interface SearchEverywhereResult {
		meta?: PagingMeta;
		result?: SearchEverywhereResultResult;
	}
	export interface SearchEverywhereResultFormProperties {
	}
	export function CreateSearchEverywhereResultFormGroup() {
		return new FormGroup<SearchEverywhereResultFormProperties>({
		});

	}

	export interface SearchEverywhereResultResult {
		documents?: Array<DocumentInSearch>;
		projects?: Array<ProjectInSearch>;
		strings?: Array<StringInSearch>;
	}
	export interface SearchEverywhereResultResultFormProperties {
	}
	export function CreateSearchEverywhereResultResultFormGroup() {
		return new FormGroup<SearchEverywhereResultResultFormProperties>({
		});

	}

	export interface StringInSearch {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		file_id?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		internal_project_id?: string | null;

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		last_updated?: Date | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		project_id?: string | null;

		/** Type: float */
		search_score?: number | null;
		source?: string | null;
		status?: StringInSearchStatus | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		string_id?: string | null;
		target?: string | null;
		targets?: Array<string>;
		tm_name?: string | null;

		/** String search result typ from ZNT. Options are LOCAL_PROJECT, IMPORTED_TM. Imported TM results should probably not be visible to end users. */
		type?: StringInSearchType | null;
	}
	export interface StringInSearchFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		file_id: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		internal_project_id: FormControl<string | null | undefined>,

		/** the date-time notation as defined by RFC 3339, section 5.6, for example, 2017-07-21T17:32:28Z */
		last_updated: FormControl<Date | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		project_id: FormControl<string | null | undefined>,

		/** Type: float */
		search_score: FormControl<number | null | undefined>,
		source: FormControl<string | null | undefined>,
		status: FormControl<StringInSearchStatus | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		string_id: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
		tm_name: FormControl<string | null | undefined>,

		/** String search result typ from ZNT. Options are LOCAL_PROJECT, IMPORTED_TM. Imported TM results should probably not be visible to end users. */
		type: FormControl<StringInSearchType | null | undefined>,
	}
	export function CreateStringInSearchFormGroup() {
		return new FormGroup<StringInSearchFormProperties>({
			file_id: new FormControl<string | null | undefined>(undefined),
			internal_project_id: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
			project_id: new FormControl<string | null | undefined>(undefined),
			search_score: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<StringInSearchStatus | null | undefined>(undefined),
			string_id: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
			tm_name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<StringInSearchType | null | undefined>(undefined),
		});

	}

	export enum StringInSearchStatus { Approved = 'Approved', Translated = 'Translated' }

	export enum StringInSearchType { LOCAL_PROJECT = 'LOCAL_PROJECT', IMPORTED_TM = 'IMPORTED_TM' }

	export interface SingleString {

		/** source string content */
		content?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		file_id?: string | null;
		id?: string | null;
	}
	export interface SingleStringFormProperties {

		/** source string content */
		content: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		file_id: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateSingleStringFormGroup() {
		return new FormGroup<SingleStringFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			file_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Stats {
		client?: ClientStats;
		vendor?: VendorStats;
	}
	export interface StatsFormProperties {
	}
	export function CreateStatsFormGroup() {
		return new FormGroup<StatsFormProperties>({
		});

	}

	export interface VendorStats {
		earnings?: VendorEarningStats;
		projects?: VendorProjectStats;
		words?: VendorWordStats;
	}
	export interface VendorStatsFormProperties {
	}
	export function CreateVendorStatsFormGroup() {
		return new FormGroup<VendorStatsFormProperties>({
		});

	}

	export interface VendorEarningStats {

		/**
		 * total amount of USD that this user has earned in the platform so far.
		 * Type: float
		 */
		total?: number | null;
	}
	export interface VendorEarningStatsFormProperties {

		/**
		 * total amount of USD that this user has earned in the platform so far.
		 * Type: float
		 */
		total: FormControl<number | null | undefined>,
	}
	export function CreateVendorEarningStatsFormGroup() {
		return new FormGroup<VendorEarningStatsFormProperties>({
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VendorProjectStats {

		/**
		 * total number of projects that this user was invited to. TODO this key is to replace "total" key due to naming ambiguity.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		invited?: string | null;

		/**
		 * total number of projects that this user was invited to.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		total?: string | null;

		/**
		 * total number of projects that this user actually worked on.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		worked?: string | null;
	}
	export interface VendorProjectStatsFormProperties {

		/**
		 * total number of projects that this user was invited to. TODO this key is to replace "total" key due to naming ambiguity.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		invited: FormControl<string | null | undefined>,

		/**
		 * total number of projects that this user was invited to.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		total: FormControl<string | null | undefined>,

		/**
		 * total number of projects that this user actually worked on.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		worked: FormControl<string | null | undefined>,
	}
	export function CreateVendorProjectStatsFormGroup() {
		return new FormGroup<VendorProjectStatsFormProperties>({
			invited: new FormControl<string | null | undefined>(undefined),
			total: new FormControl<string | null | undefined>(undefined),
			worked: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VendorWordStats {

		/**
		 * total number of words that this user has approved so far.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		approved?: string | null;

		/**
		 * total number of words that this user has translated so far.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		translated?: string | null;
	}
	export interface VendorWordStatsFormProperties {

		/**
		 * total number of words that this user has approved so far.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		approved: FormControl<string | null | undefined>,

		/**
		 * total number of words that this user has translated so far.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		translated: FormControl<string | null | undefined>,
	}
	export function CreateVendorWordStatsFormGroup() {
		return new FormGroup<VendorWordStatsFormProperties>({
			approved: new FormControl<string | null | undefined>(undefined),
			translated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StringList {
		meta?: PagingMeta;
		translations?: Array<StringWithTranslations>;
	}
	export interface StringListFormProperties {
	}
	export function CreateStringListFormGroup() {
		return new FormGroup<StringListFormProperties>({
		});

	}

	export interface StringWithTranslations extends SingleString {
		translations?: {[id: string]: StringTranslation };
	}
	export interface StringWithTranslationsFormProperties extends SingleStringFormProperties {
		translations: FormControl<{[id: string]: StringTranslation } | null | undefined>,
	}
	export function CreateStringWithTranslationsFormGroup() {
		return new FormGroup<StringWithTranslationsFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			file_id: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			translations: new FormControl<{[id: string]: StringTranslation } | null | undefined>(undefined),
		});

	}

	export interface StringTranslation {

		/** source string content */
		content?: string | null;
		id?: string | null;
		state?: StringInSearchStatus | null;
	}
	export interface StringTranslationFormProperties {

		/** source string content */
		content: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		state: FormControl<StringInSearchStatus | null | undefined>,
	}
	export function CreateStringTranslationFormGroup() {
		return new FormGroup<StringTranslationFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StringInSearchStatus | null | undefined>(undefined),
		});

	}

	export enum StringTranslationState { Approved = 'Approved', Translated = 'Translated' }

	export interface StyleGuide {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		links?: DocumentLinks;
		name?: string | null;

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		uploaded_at?: string | null;
	}
	export interface StyleGuideFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/**
		 * Unix epoch time
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		uploaded_at: FormControl<string | null | undefined>,
	}
	export function CreateStyleGuideFormGroup() {
		return new FormGroup<StyleGuideFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			uploaded_at: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StyleGuideList {
		meta?: PagingMeta;
		styleguides?: Array<StyleGuide>;
	}
	export interface StyleGuideListFormProperties {
	}
	export function CreateStyleGuideListFormGroup() {
		return new FormGroup<StyleGuideListFormProperties>({
		});

	}

	export interface StyleGuideUploadRequest {

		/**
		 * You can only add one style guide, even though the name suggests multiple style guides. This may be updated in the future to support multiple style guides.
		 * Required
		 */
		styleguides: string;
	}
	export interface StyleGuideUploadRequestFormProperties {

		/**
		 * You can only add one style guide, even though the name suggests multiple style guides. This may be updated in the future to support multiple style guides.
		 * Required
		 */
		styleguides: FormControl<string | null | undefined>,
	}
	export function CreateStyleGuideUploadRequestFormGroup() {
		return new FormGroup<StyleGuideUploadRequestFormProperties>({
			styleguides: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SurveyAnswer {
		answer?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		project_id?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		question_answer_id?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		question_id?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		user_id?: string | null;
	}
	export interface SurveyAnswerFormProperties {
		answer: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		project_id: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		question_answer_id: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		question_id: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateSurveyAnswerFormGroup() {
		return new FormGroup<SurveyAnswerFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
			project_id: new FormControl<string | null | undefined>(undefined),
			question_answer_id: new FormControl<string | null | undefined>(undefined),
			question_id: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SurveyAnswers {
		answers?: Array<SurveyAnswer>;
	}
	export interface SurveyAnswersFormProperties {
	}
	export function CreateSurveyAnswersFormGroup() {
		return new FormGroup<SurveyAnswersFormProperties>({
		});

	}

	export interface SurveyQuestion {
		answers?: Array<SimpleModel>;
		question?: SurveyQuestionQuestion;
		question_answers?: Array<SimpleModel>;
	}
	export interface SurveyQuestionFormProperties {
	}
	export function CreateSurveyQuestionFormGroup() {
		return new FormGroup<SurveyQuestionFormProperties>({
		});

	}

	export interface SurveyQuestionQuestion {
		enabled?: boolean | null;
		format?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id?: string | null;
		question?: string | null;
		text?: string | null;
	}
	export interface SurveyQuestionQuestionFormProperties {
		enabled: FormControl<boolean | null | undefined>,
		format: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		id: FormControl<string | null | undefined>,
		question: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateSurveyQuestionQuestionFormGroup() {
		return new FormGroup<SurveyQuestionQuestionFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			question: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SuspendUserRequest {

		/** Suspension reason for vendor */
		reason?: string | null;
	}
	export interface SuspendUserRequestFormProperties {

		/** Suspension reason for vendor */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateSuspendUserRequestFormGroup() {
		return new FormGroup<SuspendUserRequestFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Token {
		access_token?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		expires_in?: string | null;
		refresh_token?: string | null;
		scope?: string | null;
		token_type?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		user_id?: string | null;
	}
	export interface TokenFormProperties {
		access_token: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		expires_in: FormControl<string | null | undefined>,
		refresh_token: FormControl<string | null | undefined>,
		scope: FormControl<string | null | undefined>,
		token_type: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			access_token: new FormControl<string | null | undefined>(undefined),
			expires_in: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			token_type: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TokenError extends Error {
		account_status?: TokenErrorAccount_status | null;
	}
	export interface TokenErrorFormProperties extends ErrorFormProperties {
		account_status: FormControl<TokenErrorAccount_status | null | undefined>,
	}
	export function CreateTokenErrorFormGroup() {
		return new FormGroup<TokenErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			help: new FormControl<string | null | undefined>(undefined),
			http_code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			account_status: new FormControl<TokenErrorAccount_status | null | undefined>(undefined),
		});

	}

	export enum TokenErrorAccount_status { registered = 'registered', email_confirmed = 'email_confirmed', deleted = 'deleted', suspended = 'suspended', rejected = 'rejected', approved = 'approved', resume = 'resume', webinar = 'webinar', course = 'course' }

	export interface TokenRequest {

		/**
		 * OAuth2 grant type. Supports 'client_credentials', 'password', 'refresh_token' or 'user_id'.
		 * Required
		 */
		grant_type: string;

		/** MW Account password (to be used in password grant type) */
		password?: string | null;

		/** Refresh token value for refresh token flow. */
		refresh_token?: string | null;

		/**
		 * Authorization scope. Use 'privileged' for private endpoints.
		 * Required
		 */
		scope: string;

		/**
		 * Value for user_id grant type flow.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		user_id?: string | null;

		/** MW Account email (to be used in password grant type) */
		username?: string | null;
	}
	export interface TokenRequestFormProperties {

		/**
		 * OAuth2 grant type. Supports 'client_credentials', 'password', 'refresh_token' or 'user_id'.
		 * Required
		 */
		grant_type: FormControl<string | null | undefined>,

		/** MW Account password (to be used in password grant type) */
		password: FormControl<string | null | undefined>,

		/** Refresh token value for refresh token flow. */
		refresh_token: FormControl<string | null | undefined>,

		/**
		 * Authorization scope. Use 'privileged' for private endpoints.
		 * Required
		 */
		scope: FormControl<string | null | undefined>,

		/**
		 * Value for user_id grant type flow.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		user_id: FormControl<string | null | undefined>,

		/** MW Account email (to be used in password grant type) */
		username: FormControl<string | null | undefined>,
	}
	export function CreateTokenRequestFormGroup() {
		return new FormGroup<TokenRequestFormProperties>({
			grant_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			refresh_token: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_id: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TranslationMemoryUnit {
		sourceLanguage?: string | null;
		sourceText?: string | null;
		targetLanguage?: string | null;
		targetText?: string | null;
	}
	export interface TranslationMemoryUnitFormProperties {
		sourceLanguage: FormControl<string | null | undefined>,
		sourceText: FormControl<string | null | undefined>,
		targetLanguage: FormControl<string | null | undefined>,
		targetText: FormControl<string | null | undefined>,
	}
	export function CreateTranslationMemoryUnitFormGroup() {
		return new FormGroup<TranslationMemoryUnitFormProperties>({
			sourceLanguage: new FormControl<string | null | undefined>(undefined),
			sourceText: new FormControl<string | null | undefined>(undefined),
			targetLanguage: new FormControl<string | null | undefined>(undefined),
			targetText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePaymentInfo extends Address {
		bin?: string | null;
		save_as_corporate_primary?: boolean | null;
		share_with_corporate_users?: boolean | null;
		stripeToken?: string | null;
	}
	export interface UpdatePaymentInfoFormProperties extends AddressFormProperties {
		bin: FormControl<string | null | undefined>,
		save_as_corporate_primary: FormControl<boolean | null | undefined>,
		share_with_corporate_users: FormControl<boolean | null | undefined>,
		stripeToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePaymentInfoFormGroup() {
		return new FormGroup<UpdatePaymentInfoFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
			bin: new FormControl<string | null | undefined>(undefined),
			save_as_corporate_primary: new FormControl<boolean | null | undefined>(undefined),
			share_with_corporate_users: new FormControl<boolean | null | undefined>(undefined),
			stripeToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UseAsDraftPayload {

		/** Type: double */
		fromFileId?: number | null;

		/** Type: double */
		fromManualTranslationFileId?: number | null;

		/** Type: double */
		toManualTranslationFileId?: number | null;
	}
	export interface UseAsDraftPayloadFormProperties {

		/** Type: double */
		fromFileId: FormControl<number | null | undefined>,

		/** Type: double */
		fromManualTranslationFileId: FormControl<number | null | undefined>,

		/** Type: double */
		toManualTranslationFileId: FormControl<number | null | undefined>,
	}
	export function CreateUseAsDraftPayloadFormGroup() {
		return new FormGroup<UseAsDraftPayloadFormProperties>({
			fromFileId: new FormControl<number | null | undefined>(undefined),
			fromManualTranslationFileId: new FormControl<number | null | undefined>(undefined),
			toManualTranslationFileId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UseAsRegularPayload {
		allowOriginalFilePreview?: boolean | null;
		allowReviewInManualEditor?: boolean | null;
		disableInvitations?: boolean | null;

		/** Type: double */
		fromManualTranslationFileId?: number | null;
		hideNumbers?: boolean | null;
		recreate?: boolean | null;
	}
	export interface UseAsRegularPayloadFormProperties {
		allowOriginalFilePreview: FormControl<boolean | null | undefined>,
		allowReviewInManualEditor: FormControl<boolean | null | undefined>,
		disableInvitations: FormControl<boolean | null | undefined>,

		/** Type: double */
		fromManualTranslationFileId: FormControl<number | null | undefined>,
		hideNumbers: FormControl<boolean | null | undefined>,
		recreate: FormControl<boolean | null | undefined>,
	}
	export function CreateUseAsRegularPayloadFormGroup() {
		return new FormGroup<UseAsRegularPayloadFormProperties>({
			allowOriginalFilePreview: new FormControl<boolean | null | undefined>(undefined),
			allowReviewInManualEditor: new FormControl<boolean | null | undefined>(undefined),
			disableInvitations: new FormControl<boolean | null | undefined>(undefined),
			fromManualTranslationFileId: new FormControl<number | null | undefined>(undefined),
			hideNumbers: new FormControl<boolean | null | undefined>(undefined),
			recreate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UserGroupList {
		meta?: PagingMeta;
		user_groups?: Array<UserGroup>;
	}
	export interface UserGroupListFormProperties {
	}
	export function CreateUserGroupListFormGroup() {
		return new FormGroup<UserGroupListFormProperties>({
		});

	}

	export interface UserLinks extends LinksMeta {
		login_as?: Href;
		projects?: Href;
		responsivity?: Href;
		stats?: Href;
	}
	export interface UserLinksFormProperties extends LinksMetaFormProperties {
	}
	export function CreateUserLinksFormGroup() {
		return new FormGroup<UserLinksFormProperties>({
		});

	}

	export interface UserList {
		meta?: PagingMeta;
		users?: Array<User>;
	}
	export interface UserListFormProperties {
	}
	export function CreateUserListFormGroup() {
		return new FormGroup<UserListFormProperties>({
		});

	}

	export interface UserUpdateContent extends Address {

		/** Type: DateOnly */
		birthday?: Date | null;

		/** Optional. User e-mail. */
		email?: string | null;

		/** Optional. User first name. */
		first_name?: string | null;

		/**
		 * Optional. ID of the user being updated.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id?: string | null;

		/** Optional. User last name. */
		last_name?: string | null;

		/** Notification settings */
		notifications?: UserUpdateContentNotifications;

		/** Notify new user account creation with login information and MotaWord introduction. */
		notify?: boolean | null;

		/** Optional. Vendor paypal e-mail */
		paypal_email?: string | null;

		/** Optional. Whether this vendor requires 1099 form in US for their earnings. */
		require_1099?: boolean | null;

		/** A list of user group IDs */
		user_groups?: Array<number>;
	}
	export interface UserUpdateContentFormProperties extends AddressFormProperties {

		/** Type: DateOnly */
		birthday: FormControl<Date | null | undefined>,

		/** Optional. User e-mail. */
		email: FormControl<string | null | undefined>,

		/** Optional. User first name. */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Optional. ID of the user being updated.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		id: FormControl<string | null | undefined>,

		/** Optional. User last name. */
		last_name: FormControl<string | null | undefined>,

		/** Notify new user account creation with login information and MotaWord introduction. */
		notify: FormControl<boolean | null | undefined>,

		/** Optional. Vendor paypal e-mail */
		paypal_email: FormControl<string | null | undefined>,

		/** Optional. Whether this vendor requires 1099 form in US for their earnings. */
		require_1099: FormControl<boolean | null | undefined>,
	}
	export function CreateUserUpdateContentFormGroup() {
		return new FormGroup<UserUpdateContentFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			street: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
			birthday: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			first_name: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined),
			notify: new FormControl<boolean | null | undefined>(undefined),
			paypal_email: new FormControl<string | null | undefined>(undefined),
			require_1099: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UserUpdateContentNotifications {

		/** User phone number */
		phone_number?: string | null;

		/** User sms notification setting */
		sms_enabled?: boolean | null;
	}
	export interface UserUpdateContentNotificationsFormProperties {

		/** User phone number */
		phone_number: FormControl<string | null | undefined>,

		/** User sms notification setting */
		sms_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUserUpdateContentNotificationsFormGroup() {
		return new FormGroup<UserUpdateContentNotificationsFormProperties>({
			phone_number: new FormControl<string | null | undefined>(undefined),
			sms_enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UsersReport {
		meta?: PagingMeta;
		UsersReportReport?: Array<UsersReportReport>;
	}
	export interface UsersReportFormProperties {
	}
	export function CreateUsersReportFormGroup() {
		return new FormGroup<UsersReportFormProperties>({
		});

	}

	export interface UsersReportReport {
		currency?: string | null;

		/** Type: float */
		spending?: number | null;
		user?: User;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count?: string | null;
	}
	export interface UsersReportReportFormProperties {
		currency: FormControl<string | null | undefined>,

		/** Type: float */
		spending: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		word_count: FormControl<string | null | undefined>,
	}
	export function CreateUsersReportReportFormGroup() {
		return new FormGroup<UsersReportReportFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			spending: new FormControl<number | null | undefined>(undefined),
			word_count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VendorInvitationList {
		vendors?: Array<VendorWithNeeds>;
	}
	export interface VendorInvitationListFormProperties {
	}
	export function CreateVendorInvitationListFormGroup() {
		return new FormGroup<VendorInvitationListFormProperties>({
		});

	}

	export interface VendorWithNeeds {
		matchedNeeds?: Array<FileNeedsVendor>;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId?: string | null;
	}
	export interface VendorWithNeedsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateVendorWithNeedsFormGroup() {
		return new FormGroup<VendorWithNeedsFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Currently authed vendor's role in this project. If vendor has already joined, this contains the role they joined the project with. If not joined yet, this is the role that they can join the project with. */
	export enum VendorProjectRole { translator = 'translator', proofreader = 'proofreader', both = 'both' }

	export interface VendorTag {
		color?: string | null;
		name?: string | null;
	}
	export interface VendorTagFormProperties {
		color: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateVendorTagFormGroup() {
		return new FormGroup<VendorTagFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Webhook {

		/** Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'. */
		callback_url?: string | null;
	}
	export interface WebhookFormProperties {

		/** Webhook URL. We will send POST callbacks when the status of the current project is changed. Possible status changes are, 'translated', 'proofread', 'completed'. */
		callback_url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			callback_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Available endpoints
		 * The root endpoint will provide you with an OpenAPI definition of MotaWord API.
		 * Get 
		 * @return {void} YAML representation of our OpenAPI definition.
		 */
		GetEndpoints(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download result of an async operation
		 * Download the result of an async operation that you have requested in other endpoints.
		 * Get async/download
		 * @param {string} async_request_key Async operation key
		 * @return {void} File
		 */
		DownloadAsync(async_request_key: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'async/download?async_request_key=' + (async_request_key == null ? '' : encodeURIComponent(async_request_key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get blog posts - ordered by created desc by default
		 * Get blogs
		 * @param {string} locale Article language, default `en`. When no blog article is available and `fallback=true` is specified, it falls back to `en`.
		 * @param {boolean} fallback When `true`, and no article is found in the locale, it falls back to `locale=en`.
		 * @param {string} page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {BlogArticleList} List of blog articles
		 */
		GetBlogPosts(locale: string | null | undefined, fallback: boolean | null | undefined, page: string | null | undefined, per_page: string | null | undefined): Observable<BlogArticleList> {
			return this.http.get<BlogArticleList>(this.baseUri + 'blogs?locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&fallback=' + fallback + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Clear cache by key
		 * Delete cache/{key}
		 * @param {string} key Cache key
		 * @return {OperationStatus} Operation status
		 */
		DeleteCache(key: string): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'cache/' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Returns a commission list of current client.
		 * Get commissions
		 * @return {CommissionList} Commissions for client.
		 */
		GetCommissions(): Observable<CommissionList> {
			return this.http.get<CommissionList>(this.baseUri + 'commissions', {});
		}

		/**
		 * Returns a commission list of current client.
		 * Post commissions
		 * @return {CommissionList} Commissions for client.
		 */
		GetCommissionsByFilter(requestBody: ReportFilter): Observable<CommissionList> {
			return this.http.post<CommissionList>(this.baseUri + 'commissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View continuous projects
		 * View a list of continuous projects under your account. Continuous projects are those that are constantly updated, such as a CI/CD project, software project, website translation and such.
		 * Get continuous_projects
		 * @param {GetContinuousProjectsType} type Type of continuous project.
		 * @return {ContinuousProjectsList} Newly created continuous project
		 */
		GetContinuousProjects(type: GetContinuousProjectsType | null | undefined): Observable<ContinuousProjectsList> {
			return this.http.get<ContinuousProjectsList>(this.baseUri + 'continuous_projects?type=' + type, {});
		}

		/**
		 * Create a continuous project
		 * Create a new continuous project for your software, website, CI/CD translation needs.
		 * Post continuous_projects
		 * @return {ContinuousProject} Newly created continuous project
		 */
		CreateContinuousProject(requestBody: ContinuousProject): Observable<ContinuousProject> {
			return this.http.post<ContinuousProject>(this.baseUri + 'continuous_projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a continuous project
		 * Delete an existing continuous project. Your project will be cancelled, and you will still be charged for the amount of translations we have done for you so far.
		 * Delete continuous_projects/{id}
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Continuous project deleted successfully
		 */
		DeleteContinuousProject(id: string): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'continuous_projects/' + id, {});
		}

		/**
		 * View a continuous project
		 * View the details of a continuous project.
		 * Get continuous_projects/{id}
		 * @param {string} id Continuous Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ContinuousProject} ContinuousProject model
		 */
		GetContinuousProject(id: string): Observable<ContinuousProject> {
			return this.http.get<ContinuousProject>(this.baseUri + 'continuous_projects/' + id, {});
		}

		/**
		 * Update a continuous project
		 * Update the details and settings of continuous project.
		 * Post continuous_projects/{id}
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ContinuousProject} Update continuous project operation status
		 */
		UpdateContinuousProject(id: string, requestBody: ContinuousProjectUpdateContent): Observable<ContinuousProject> {
			return this.http.post<ContinuousProject>(this.baseUri + 'continuous_projects/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get JWT token to be used in analytics dashboards
		 * Get JWT token to be used in analytics dashboards
		 * Get continuous_projects/{id}/analytics-token
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {AnalyticsToken} JWT token result
		 */
		GetAnalyticsToken(id: string): Observable<AnalyticsToken> {
			return this.http.get<AnalyticsToken>(this.baseUri + 'continuous_projects/' + id + '/analytics-token', {});
		}

		/**
		 * Save/collect analytics data from Active widget
		 * Save/collect analytics data from Active widget
		 * Post continuous_projects/{id}/collect-analytics
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Analytics data collection result
		 */
		CollectAnalytics(id: string, requestBody: AnalyticsCollection): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'continuous_projects/' + id + '/collect-analytics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Complete continuous project
		 * Complete continuous project
		 * Post continuous_projects/{id}/complete
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Operation status
		 */
		Complete(id: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'continuous_projects/' + id + '/complete', null, {});
		}

		/**
		 * Get quote for documents
		 * Get a new quote for provided documents in continuous project
		 * Post continuous_projects/{id}/documents/quote
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ProjectList} Newly created project
		 */
		GetQuoteForDocuments(id: string, requestBody: GetQuotesForDocumentsBody): Observable<ProjectList> {
			return this.http.post<ProjectList>(this.baseUri + 'continuous_projects/' + id + '/documents/quote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Complete a continuous project document
		 * Complete a continuous project document. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.
		 * Post continuous_projects/{id}/documents/{documentId}/complete
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Operation status
		 */
		CompleteContinuousDocument(id: string, documentId: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'continuous_projects/' + id + '/documents/' + documentId + '/complete', null, {});
		}

		/**
		 * Get a quote for a continuous project document
		 * Get a new quote for provided document in continuous project. Per your project settings, a continuous project document can be target language-specific or project-wide for all target languages of the project.
		 * Post continuous_projects/{id}/documents/{documentId}/quote
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ProjectList} Newly created project
		 */
		GetQuoteForDocument(id: string, documentId: string): Observable<ProjectList> {
			return this.http.post<ProjectList>(this.baseUri + 'continuous_projects/' + id + '/documents/' + documentId + '/quote', null, {});
		}

		/**
		 * Get quote for languages
		 * Get a new quote for provided target languages in continuous project
		 * Post continuous_projects/{id}/languages/quote
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ProjectList} Newly created project
		 */
		GetQuoteForLanguages(id: string, requestBody: GetQuotesForLanguagesBody): Observable<ProjectList> {
			return this.http.post<ProjectList>(this.baseUri + 'continuous_projects/' + id + '/languages/quote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Complete continuous project language
		 * Complete continuous project language
		 * Post continuous_projects/{id}/languages/{targetLanguage}/complete
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} targetLanguage Target language that you want to complete
		 * @return {OperationStatus} Operation status
		 */
		CompleteLanguage(id: string, targetLanguage: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'continuous_projects/' + id + '/languages/' + (targetLanguage == null ? '' : encodeURIComponent(targetLanguage)) + '/complete', null, {});
		}

		/**
		 * Get quote for language
		 * Get a new quote for provided target language in continuous project
		 * Post continuous_projects/{id}/languages/{targetLanguage}/quote
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} targetLanguage Target language that you want to complete
		 * @return {ProjectList} Newly created project(s)
		 */
		GetQuoteForLanguage(id: string, targetLanguage: string): Observable<ProjectList> {
			return this.http.post<ProjectList>(this.baseUri + 'continuous_projects/' + id + '/languages/' + (targetLanguage == null ? '' : encodeURIComponent(targetLanguage)) + '/quote', null, {});
		}

		/**
		 * Delete subscription for continuous project
		 * Delete subscription for continuous project
		 * Delete continuous_projects/{id}/subscription
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Subscription} Delete continuous project subscription
		 */
		DeleteSubscription(id: string): Observable<Subscription> {
			return this.http.delete<Subscription>(this.baseUri + 'continuous_projects/' + id + '/subscription', {});
		}

		/**
		 * Get subscription for continuous project
		 * Get subscription for continuous project
		 * Get continuous_projects/{id}/subscription
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Subscription} Get continuous project subscription
		 */
		GetSubscription(id: string): Observable<Subscription> {
			return this.http.get<Subscription>(this.baseUri + 'continuous_projects/' + id + '/subscription', {});
		}

		/**
		 * Create subscription for continuous project
		 * Create subscription for continuous project
		 * Post continuous_projects/{id}/subscription
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Subscription} Newly created continuous project subscription
		 */
		CreateSubscription(id: string, requestBody: Subscription): Observable<Subscription> {
			return this.http.post<Subscription>(this.baseUri + 'continuous_projects/' + id + '/subscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update subscription for continuous project
		 * Update subscription for continuous project
		 * Put continuous_projects/{id}/subscription
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Subscription} Updated continuous project subscription
		 */
		UpdateSubscription(id: string, requestBody: Subscription): Observable<Subscription> {
			return this.http.put<Subscription>(this.baseUri + 'continuous_projects/' + id + '/subscription', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update subscription payment method for continuous project
		 * Update subscription payment method for continuous project
		 * Put continuous_projects/{id}/subscription/payment
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Subscription} Updated continuous project subscription
		 */
		UpdateSubscriptionPaymentMethod(id: string, requestBody: Subscription): Observable<Subscription> {
			return this.http.put<Subscription>(this.baseUri + 'continuous_projects/' + id + '/subscription/payment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Instantly translate your content
		 * Instantly translate your content with your existing TM and MT resources. This is the primary endpoint to translate your files and content on the fly, especially in CI/CD environments. This is a complex endpoint that is configured in your Active or Continuous Project dashboards. For instance, you can configure whether to use your TM, or translate missing strings via MT and then post-edit those new translations. There are various scenarios you can establish via a set of configurations.
		 * Post continuous_projects/{id}/translate/{targetLanguage}
		 * @param {string} id Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} targetLanguage Target language that you want to instantly translate your file into.
		 * @return {InstantTranslationResult} Instant translation result. It may return a list of translated strings, or a list of translated files.
		 */
		Translate(id: string, targetLanguage: string, requestBody: InstantTranslationRequest): Observable<InstantTranslationResult> {
			return this.http.post<InstantTranslationResult>(this.baseUri + 'continuous_projects/' + id + '/translate/' + (targetLanguage == null ? '' : encodeURIComponent(targetLanguage)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View continuous documents
		 * View the documents under this continuous project
		 * Get continuous_projects/{projectId}/documents
		 * @param {string} projectId Continuous Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ContinuousProjectDocumentList} A list of continuous project document models
		 */
		GetContinuousProjectDocuments(projectId: string, filterByLanguage: string | null | undefined): Observable<ContinuousProjectDocumentList> {
			return this.http.get<ContinuousProjectDocumentList>(this.baseUri + 'continuous_projects/' + projectId + '/documents?filterByLanguage=' + (filterByLanguage == null ? '' : encodeURIComponent(filterByLanguage)), {});
		}

		/**
		 * Add a new document to your continuous project
		 * Add a new document to your continuous project. If the name already exists, it will update the existing document. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.
		 * Post continuous_projects/{projectId}/documents
		 * @param {string} projectId Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ContinuousProjectDocument} The newly added continuous project document object.
		 */
		AddDocument(projectId: string, requestBody: AddOrUpdateDocumentRequest): Observable<ContinuousProjectDocument> {
			return this.http.post<ContinuousProjectDocument>(this.baseUri + 'continuous_projects/' + projectId + '/documents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get continuous project document progress for multiple IDs
		 * Get continuous project document progress for multiple IDs
		 * Post continuous_projects/{projectId}/documents/progress
		 * @param {string} projectId Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Progress} Progress information
		 */
		PostContinuousProjectDocumentProgress(projectId: string, requestBody: ContinuousProjectDocumentProgressBody): Observable<Progress> {
			return this.http.post<Progress>(this.baseUri + 'continuous_projects/' + projectId + '/documents/progress', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of strings and its translations in the project.
		 * Post continuous_projects/{projectId}/documents/strings
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {StringList} Response for strings and their translations
		 */
		PostContinuousProjectFileStrings(projectId: string, requestBody: ContinuousProjectDocumentStringsBody): Observable<StringList> {
			return this.http.post<StringList>(this.baseUri + 'continuous_projects/' + projectId + '/documents/strings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View a continuous document
		 * View the details of a source document in continuous translation project.
		 * Get continuous_projects/{projectId}/documents/{documentId}
		 * @param {string} projectId Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID/Name
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ContinuousProjectDocument} Progress information
		 */
		GetContinuousProjectDocument(projectId: string, documentId: string): Observable<ContinuousProjectDocument> {
			return this.http.get<ContinuousProjectDocument>(this.baseUri + 'continuous_projects/' + projectId + '/documents/' + documentId, {});
		}

		/**
		 * Update the document
		 * Update source document in your continuous project. In most scenarios, this operation will also trigger auto-translation of your document, via MT and/or TM.
		 * Post continuous_projects/{projectId}/documents/{documentId}
		 * @param {string} projectId Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Continuous project document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ContinuousProjectDocument} The updated continuous project document object.
		 */
		UpdateDocument(projectId: string, documentId: string, requestBody: AddOrUpdateDocumentRequest): Observable<ContinuousProjectDocument> {
			return this.http.post<ContinuousProjectDocument>(this.baseUri + 'continuous_projects/' + projectId + '/documents/' + documentId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Monitor progress of a continuous document
		 * Monitor the translation progress of a document in a continuous project in real-time.
		 * Get continuous_projects/{projectId}/documents/{documentId}/progress
		 * @param {string} projectId Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID/Name
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Progress} Progress information
		 */
		GetContinuousProjectDocumentProgress(projectId: string, documentId: string, filterByLanguage: string | null | undefined): Observable<Progress> {
			return this.http.get<Progress>(this.baseUri + 'continuous_projects/' + projectId + '/documents/' + documentId + '/progress?filterByLanguage=' + (filterByLanguage == null ? '' : encodeURIComponent(filterByLanguage)), {});
		}

		/**
		 * View strings their translations in a continuous document
		 * View the strings from a document and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.
		 * Get continuous_projects/{projectId}/documents/{documentId}/strings
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID/Name
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {StringList} Response for strings and their translations
		 */
		GetContinuousProjectFileStrings(projectId: string, documentId: string): Observable<StringList> {
			return this.http.get<StringList>(this.baseUri + 'continuous_projects/' + projectId + '/documents/' + documentId + '/strings', {});
		}

		/**
		 * Invoices of a continuous project
		 * Get real-time access to a continuous project's invoices.
		 * Get continuous_projects/{projectId}/invoices
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ContinuousProjectInvoices} Invoices List
		 */
		GetContinuousProjectInvoices(projectId: string): Observable<ContinuousProjectInvoices> {
			return this.http.get<ContinuousProjectInvoices>(this.baseUri + 'continuous_projects/' + projectId + '/invoices', {});
		}

		/**
		 * Monitor progress and status of a continous project
		 * Monitor the translation progress of an ongoing continuous project in real-time.
		 * Get continuous_projects/{projectId}/progress
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ContinuousProjectProgress} Progress information
		 */
		GetContinuousProjectProgress(projectId: string, filterByLanguage: string | null | undefined): Observable<ContinuousProjectProgress> {
			return this.http.get<ContinuousProjectProgress>(this.baseUri + 'continuous_projects/' + projectId + '/progress?filterByLanguage=' + (filterByLanguage == null ? '' : encodeURIComponent(filterByLanguage)), {});
		}

		/**
		 * View strings and translations in continuous project
		 * View the strings and their translations in your continuous translation project, for all target languages. If you need the translated version of your source document/file, then you need to use package and download endpoints.
		 * Get continuous_projects/{projectId}/strings
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {StringList} Response for strings and their translations
		 */
		GetContinuousProjectStrings(projectId: string): Observable<StringList> {
			return this.http.get<StringList>(this.baseUri + 'continuous_projects/' + projectId + '/strings', {});
		}

		/**
		 * Clear translation cache
		 * Clear/delete continuous project translation cache.
		 * Delete continuous_projects/{projectId}/strings/cached
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} locale Locale
		 * @param {string} file_id Continuous Project File ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Operation response
		 */
		ClearTranslationCache(projectId: string, locale: string | null | undefined, file_id: string | null | undefined): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'continuous_projects/' + projectId + '/strings/cached?locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&file_id=' + file_id, {});
		}

		/**
		 * View cached strings translations in continuous project
		 * MotaWord caches your account intensively (and in a smart way) in real-time translation environments. This endpoint will return the currently cached strings and translations in your continuous translation project.
		 * Get continuous_projects/{projectId}/strings/cached
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {boolean} flatten Flatten cache results and ignore document keys
		 * @return {ContinuousProjectCache} Response for strings and their translations
		 */
		GetTranslationCache(projectId: string, flatten: boolean | null | undefined): Observable<ContinuousProjectCache> {
			return this.http.get<ContinuousProjectCache>(this.baseUri + 'continuous_projects/' + projectId + '/strings/cached?flatten=' + flatten, {});
		}

		/**
		 * Recache translations
		 * Recache translations for the continuous project.
		 * Post continuous_projects/{projectId}/strings/recache-tms
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} locale Locale
		 * @param {string} file_id Continuous Project File ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Operation response
		 */
		RecacheTranslations(projectId: string, locale: string | null | undefined, file_id: string | null | undefined): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'continuous_projects/' + projectId + '/strings/recache-tms?locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&file_id=' + file_id, null, {});
		}

		/**
		 * View Active widgets
		 * View a list of widgets in your Active project to be used in your website. Most website-specific configuration is provided via widgets.
		 * Get continuous_projects/{projectId}/widgets
		 * @param {string} projectId Continuous Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ActiveWidgetList} List of widgets
		 */
		GetActiveWidgets(projectId: string): Observable<ActiveWidgetList> {
			return this.http.get<ActiveWidgetList>(this.baseUri + 'continuous_projects/' + projectId + '/widgets', {});
		}

		/**
		 * Create a new Active widget
		 * Create a new widget for your Active project to be used in your website. Most website-specific configuration is provided via widgets. This does not create a new Active project, just a separate widget.
		 * Post continuous_projects/{projectId}/widgets
		 * @param {string} projectId Continuous project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ActiveWidget} Updated widget details
		 */
		CreateActiveWidget(projectId: string, requestBody: ActiveWidget): Observable<ActiveWidget> {
			return this.http.post<ActiveWidget>(this.baseUri + 'continuous_projects/' + projectId + '/widgets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a single widget for this Active project
		 * Delete a single widget for this Active project
		 * Delete continuous_projects/{projectId}/widgets/{widgetId}
		 * @param {string} projectId Continuous Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} widgetId Active widget ID belonging to this Continuous Project
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Delete operation result
		 */
		DeleteActiveWidget(projectId: string, widgetId: string): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'continuous_projects/' + projectId + '/widgets/' + widgetId, {});
		}

		/**
		 * View an Active widget
		 * View the details of an Active widget to be used in your website. Most website-specific configuration is provided via widgets.
		 * Get continuous_projects/{projectId}/widgets/{widgetId}
		 * @param {string} projectId Continuous Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} widgetId Active widget ID belonging to this Continuous Project
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ActiveWidget} Active widget details
		 */
		GetActiveWidget(projectId: string, widgetId: string): Observable<ActiveWidget> {
			return this.http.get<ActiveWidget>(this.baseUri + 'continuous_projects/' + projectId + '/widgets/' + widgetId, {});
		}

		/**
		 * Update Active widget settings.
		 * Update Active widget settings.
		 * Post continuous_projects/{projectId}/widgets/{widgetId}
		 * @param {string} projectId Continuous Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} widgetId Active widget ID belonging to this Continuous Project
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ActiveWidget} Updated widget details
		 */
		UpdateActiveWidget(projectId: string, widgetId: string, requestBody: ActiveWidget): Observable<ActiveWidget> {
			return this.http.post<ActiveWidget>(this.baseUri + 'continuous_projects/' + projectId + '/widgets/' + widgetId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset Active widget token
		 * Reset the public token used with your Active widget. This token is used when communicating from your environment to MotaWord systems for translation, analytics and meta.
		 * Post continuous_projects/{projectId}/widgets/{widgetId}/reset-token
		 * @param {string} projectId Continuous Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} widgetId Active widget ID belonging to this Continuous Project
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ActiveWidget} Updated widget details
		 */
		ResetActiveWidgetToken(projectId: string, widgetId: string): Observable<ActiveWidget> {
			return this.http.post<ActiveWidget>(this.baseUri + 'continuous_projects/' + projectId + '/widgets/' + widgetId + '/reset-token', null, {});
		}

		/**
		 * View your corporate account
		 * View the details of the corporate account that your user account belongs to.
		 * Get corporate
		 * @return {CorporateAccount} Corporate account details
		 */
		GetCorporate(): Observable<CorporateAccount> {
			return this.http.get<CorporateAccount>(this.baseUri + 'corporate', {});
		}

		/**
		 * View available permissions
		 * View a list of available permissions for your corporate account. They are used when assigning permissions to your corporate users.
		 * Get corporate/permissions
		 * @return {PermissionList} List of permission strings
		 */
		GetAvailableCorporatePermissions(): Observable<PermissionList> {
			return this.http.get<PermissionList>(this.baseUri + 'corporate/permissions', {});
		}

		/**
		 * View user groups
		 * View a list of user groups under my corporate account. User groups are a part of our RBAC implementation and can be used to configure complex permission scenarios.
		 * Get corporate/user-groups
		 * @return {UserGroupList} User group list
		 */
		GetCorporateUserGroups(): Observable<UserGroupList> {
			return this.http.get<UserGroupList>(this.baseUri + 'corporate/user-groups', {});
		}

		/**
		 * Create or update a corporate user group
		 * Create or update a corporate user group
		 * Post corporate/user-groups
		 * @return {UserGroup} User group list
		 */
		SaveCorporateUserGroup(requestBody: UserGroup): Observable<UserGroup> {
			return this.http.post<UserGroup>(this.baseUri + 'corporate/user-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View users
		 * View a list of users under your corporate account. This endpoint will only return information if your user account is permitted to view corporate account users, configured by your administrator.
		 * Get corporate/users
		 * @return {UserList} User list
		 */
		GetCorporateUsers(): Observable<UserList> {
			return this.http.get<UserList>(this.baseUri + 'corporate/users', {});
		}

		/**
		 * Create or update a user
		 * Create or update a user under your corporate account. This endpoint requires permissions for corporate user management, configured by your administrator.
		 * Post corporate/users
		 * @return {User} Created or updated user
		 */
		SaveCorporateUser(requestBody: UserUpdateContent): Observable<User> {
			return this.http.post<User>(this.baseUri + 'corporate/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of corporate accounts
		 * Get a list of corporate accounts
		 * Get corporates/all
		 * @return {Array<CorporateAccount>} Corporate account list
		 */
		GetCorporatesList(): Observable<Array<CorporateAccount>> {
			return this.http.get<Array<CorporateAccount>>(this.baseUri + 'corporates/all', {});
		}

		/**
		 * Get details of this corporate account
		 * Get details of this corporate account
		 * Get corporates/{corporateId}
		 * @param {string} corporateId Corporate ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {CorporateAccount} Corporate account details
		 */
		GetCorporateById(corporateId: string): Observable<CorporateAccount> {
			return this.http.get<CorporateAccount>(this.baseUri + 'corporates/' + corporateId, {});
		}

		/**
		 * Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
		 * Get a list of available permissions for this corporate account. They are used when assigning permissions to corporate users.
		 * Get corporates/{corporateId}/permissions
		 * @param {string} corporateId Corporate ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {PermissionList} List of permission strings
		 */
		GetAvailableCorporatePermissionsById(corporateId: string): Observable<PermissionList> {
			return this.http.get<PermissionList>(this.baseUri + 'corporates/' + corporateId + '/permissions', {});
		}

		/**
		 * Get a list of user groups for this corporate account
		 * Get a list of user groups for this corporate account
		 * Get corporates/{corporateId}/user-groups
		 * @param {string} corporateId Corporate ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UserGroupList} User group list
		 */
		GetCorporateUserGroupsById(corporateId: string): Observable<UserGroupList> {
			return this.http.get<UserGroupList>(this.baseUri + 'corporates/' + corporateId + '/user-groups', {});
		}

		/**
		 * Create or update a corporate user group for this corporate account
		 * Create or update a corporate user group for this corporate account
		 * Post corporates/{corporateId}/user-groups
		 * @param {string} corporateId Corporate ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UserGroup} User group list
		 */
		SaveCorporateUserGroupById(corporateId: string, requestBody: UserGroup): Observable<UserGroup> {
			return this.http.post<UserGroup>(this.baseUri + 'corporates/' + corporateId + '/user-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of users for this corporate account
		 * Get a list of users for this corporate account
		 * Get corporates/{corporateId}/users
		 * @param {string} corporateId Corporate ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UserList} User list
		 */
		GetCorporateUsersById(corporateId: string): Observable<UserList> {
			return this.http.get<UserList>(this.baseUri + 'corporates/' + corporateId + '/users', {});
		}

		/**
		 * Delete your account
		 * Delete your MotaWord account. Be careful; once deleted, you will not have access to MotaWord via API or your dashboards.
		 * Delete delete-account
		 * @return {OperationStatus} Successful operation
		 */
		DeleteAccount(): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'delete-account', {});
		}

		/**
		 * View your documents
		 * View a list of files and documents that you have translations for. This endpoint lets you view your MotaWord account as a multilingual translated file repository, without needing to go through your projects to interact with files in them.
		 * Get documents
		 * @param {boolean} recent When true, this will return the most 4 recent active documents.
		 * @param {string} language_code searches in source language of documents, in source and target languages of document's quote
		 * @param {string} page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {Array<string>} with_ Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
		 * @return {DocumentList} Document list
		 */
		GetDocuments(recent: boolean | null | undefined, search: string | null | undefined, type_filter: GetDocumentsType_filter | null | undefined, language_code: string | null | undefined, page: string | null | undefined, per_page: string | null | undefined, order_by: GetDocumentsOrder_by | null | undefined, order_type: ListOrderType | null | undefined, with_: Array<string> | null | undefined): Observable<DocumentList> {
			return this.http.get<DocumentList>(this.baseUri + 'documents?recent=' + recent + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&type_filter=' + type_filter + '&language_code=' + (language_code == null ? '' : encodeURIComponent(language_code)) + '&page=' + page + '&per_page=' + per_page + '&order_by=' + order_by + '&order_type=' + order_type + '&' + with_?.map(z => `with[]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get a list of subjects of projects
		 * Get a list of subjects of projects
		 * Get documents/subjects
		 * @return {Array<DocumentSubjects>} List of subjects of all projects.
		 */
		GetAllDocumentSubjects(): Observable<Array<DocumentSubjects>> {
			return this.http.get<Array<DocumentSubjects>>(this.baseUri + 'documents/subjects', {});
		}

		/**
		 * View a single document
		 * View a single document from your MotaWord account with its translation info.
		 * Get documents/{documentId}
		 * @param {string} documentId Document ID or filename
		 * @return {ContinuousProjectDocument} Document
		 */
		GetDocument(documentId: string): Observable<ContinuousProjectDocument> {
			return this.http.get<ContinuousProjectDocument>(this.baseUri + 'documents/' + (documentId == null ? '' : encodeURIComponent(documentId)), {});
		}

		/**
		 * View a document translation progress
		 * View the translation or proofreading progress of a document in your account. You can also track the progress of a document under the project that it was ordered with.
		 * Get documents/{documentId}/progress
		 * @param {number} documentId Document ID
		 *     Type: double
		 * @return {Progress} Progress information
		 */
		GetDocumentProgress(documentId: number): Observable<Progress> {
			return this.http.get<Progress>(this.baseUri + 'documents/' + documentId + '/progress', {});
		}

		/**
		 * Regenerate preview and return preview URL for given file
		 * Regenerate preview and return preview URL for given file
		 * Post documents/{documentId}/regenerate_preview
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {RegeneratePreviewResponse} RegeneratePreviewResponse
		 */
		RegeneratePreview(documentId: string): Observable<RegeneratePreviewResponse> {
			return this.http.post<RegeneratePreviewResponse>(this.baseUri + 'documents/' + documentId + '/regenerate_preview', null, {});
		}

		/**
		 * Find documents similar to this document.
		 * Find documents similar to this document. Optionally, include translation information.
		 * Get documents/{documentId}/similars
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Determines the number of similar documents to return.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {Array<string>} with_ Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
		 * @return {DocumentList} Document list
		 */
		GetSimilarDocuments(documentId: string, per_page: string | null | undefined, with_: Array<string> | null | undefined): Observable<DocumentList> {
			return this.http.get<DocumentList>(this.baseUri + 'documents/' + documentId + '/similars?per_page=' + per_page + '&' + with_?.map(z => `with[]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Use the translation of given source manual document as manual draft source for the given target document.
		 * Use the translation of given source manual document as manual draft source for the given target document.
		 * Post documents/{documentId}/use_as_draft
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Operation status
		 */
		UseAsDraft(documentId: string, requestBody: UseAsDraftPayload): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'documents/' + documentId + '/use_as_draft', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Use the translation of the given manual document as a regular file.
		 * Use the translation of the given manual document as a regular file.
		 * Post documents/{documentId}/use_as_regular
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Operation status
		 */
		UseAsRegular(documentId: string, requestBody: UseAsRegularPayload): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'documents/' + documentId + '/use_as_regular', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post downgrade-proofreader
		 * @return {OperationStatus} Successful operation
		 */
		DowngradeProofreader(): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'downgrade-proofreader', null, {});
		}

		/**
		 * View your vendor earnings
		 * View your vendor earnings from your translation activites. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects, as well as total earnings and string edits.
		 * Get earnings
		 * @return {Earnings} Earnings for vendors
		 */
		GetEarnings(): Observable<Earnings> {
			return this.http.get<Earnings>(this.baseUri + 'earnings', {});
		}

		/**
		 * List of supported file formats
		 * Get a list of supported formats for documents, style guides and extensions.
		 * Get formats
		 * @return {string} A list of supported formats
		 */
		GetFormats(): Observable<string> {
			return this.http.get(this.baseUri + 'formats', { responseType: 'text' });
		}

		/**
		 * Freeze account
		 * Freeze your account temporarily, especially to stop receiving project notifications.
		 * Post freeze-account
		 * @return {OperationStatus} Successful operation
		 */
		FreezeAccount(): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'freeze-account', null, {});
		}

		/**
		 * Download account glossary.
		 * Download your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.
		 * Get glossary
		 * @return {string} Glossary file streamed.
		 */
		DownloadGlobalGlossary(): Observable<string> {
			return this.http.get(this.baseUri + 'glossary', { responseType: 'text' });
		}

		/**
		 * Create or update the account glossary
		 * Update your corporate account's global glossary. This endpoint is available only for corporate account customers. This glossary will be automatically attached to each new project under your account.
		 * Post glossary
		 * @return {OperationStatus} Successful operation
		 */
		UpdateGlobalGlossary(requestBody: AccountGlossaryUploadRequest): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'glossary', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generate a new access token for MotaWord's integrations service
		 * Generate a new access token for MotaWord's integrations service
		 * Get integrations/token
		 * @return {IntegrationsToken} Token
		 */
		GetIntegrationsToken(): Observable<IntegrationsToken> {
			return this.http.get<IntegrationsToken>(this.baseUri + 'integrations/token', {});
		}

		/**
		 * Get vendor list for compiled invitation needs
		 * Get vendor list for compiled invitation needs
		 * Post invitation/vendors
		 * @return {VendorInvitationList} Invitation need grouped by vendor
		 */
		GetInvitationVendors(requestBody: Array<FileNeedsVendor>): Observable<VendorInvitationList> {
			return this.http.post<VendorInvitationList>(this.baseUri + 'invitation/vendors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of supported languages
		 * Get a list of supported languages
		 * Get languages
		 * @return {Array<Language>} A list of supported languages
		 */
		GetLanguages(): Observable<Array<Language>> {
			return this.http.get<Array<Language>>(this.baseUri + 'languages', {});
		}

		/**
		 * Log user's current location. This data is used in our Intelligent Project Manager for various data analysis, including project prioritization for vendors and account validation.
		 * Post location
		 * @return {OperationStatus} Successful operation
		 */
		LogLocation(requestBody: LocationUpdateContent): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'location', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post make-proofreader
		 * @return {OperationStatus} Successful operation
		 */
		MakeProofreader(): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'make-proofreader', null, {});
		}

		/**
		 * View your account info
		 * Get your user information, including client, corporate account and vendor account information.
		 * Get me
		 * @return {User} User summary
		 */
		GetMe(): Observable<User> {
			return this.http.get<User>(this.baseUri + 'me', {});
		}

		/**
		 * Update your account info
		 * Post me
		 * @return {User} User info
		 */
		UpdateMe(requestBody: UserUpdateContent): Observable<User> {
			return this.http.post<User>(this.baseUri + 'me', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a delivery prediction for a project
		 * Get a delivery prediction for a project
		 * Post ml/delivery-prediction
		 * @return {DeliveryPredictionResponse} Prediction and its probability
		 */
		GetDeliveryPrediction(requestBody: DeliveryPredictionPayload): Observable<DeliveryPredictionResponse> {
			return this.http.post<DeliveryPredictionResponse>(this.baseUri + 'ml/delivery-prediction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Subscribe to push notifications
		 * Subscribe to push notifications to receive project and platform notifications.
		 * Post notifications/subscribe
		 * @return {OperationStatus} Saved notification subscription information
		 */
		SubscribeNotification(requestBody: NotificationSubscription): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'notifications/subscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post notifications/unsubscribe
		 * @return {OperationStatus} Deleted notification subscription information
		 */
		UnsubscribeNotification(requestBody: NotificationSubscription): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'notifications/unsubscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends a message to chat
		 * Sends a message to the channel.
		 * Post pam/chat
		 * @return {OperationStatus} Successful operation
		 */
		PostMessage(requestBody: PamMessage): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'pam/chat', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the Pam profile of a client for this client ID
		 * Get the Pam  profile of a client for this client ID
		 * Get pam/profiles/client/{clientId}
		 * @param {string} clientId Client ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ClientProfile} Client profile
		 */
		GetClientProfileForPam(clientId: string): Observable<ClientProfile> {
			return this.http.get<ClientProfile>(this.baseUri + 'pam/profiles/client/' + clientId, {});
		}

		/**
		 * Get completion report data of a project
		 * Get completion report data of a project
		 * Get pam/projects/{projectId}/completion-report
		 * @param {string} projectId Quote ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ProjectCompletionReport} Project Completion Report
		 */
		GetProjectCompletionReportForPam(projectId: string): Observable<ProjectCompletionReport> {
			return this.http.get<ProjectCompletionReport>(this.baseUri + 'pam/projects/' + projectId + '/completion-report', {});
		}

		/**
		 * Update your account password
		 * Password should contain at least one uppercase, lowercase character and one number
		 * Post password
		 * @return {OperationStatus} Successful operation
		 */
		UpdatePassword(requestBody: PasswordUpdateContent): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View your payment and billing info
		 * Returns billing and saved credit card information for user, and their corporate account if present & allowed.
		 * Get payment
		 * @return {PaymentInfo} Returns billing and saved card information for user, and their corporate if present.
		 */
		GetPaymentInfo(): Observable<PaymentInfo> {
			return this.http.get<PaymentInfo>(this.baseUri + 'payment', {});
		}

		/**
		 * Update payment info
		 * Update your billing and saved credit card information
		 * Post payment
		 * @return {PaymentInfo} Successful operation
		 */
		UpdatePaymentInfo(requestBody: UpdatePaymentInfo): Observable<PaymentInfo> {
			return this.http.post<PaymentInfo>(this.baseUri + 'payment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset payment code
		 * Reset your corporate account's payment code to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.
		 * Post payment/reset-corporate-payment-code
		 * @return {CreditCard} Credit card content
		 */
		ResetCorporatePaymentCode(): Observable<CreditCard> {
			return this.http.post<CreditCard>(this.baseUri + 'payment/reset-corporate-payment-code', null, {});
		}

		/**
		 * Manage automatic charges on your credit card
		 * Toggle (enable/disable) automatic charges on the credit card on file.
		 * Post payment/toggle-corporate-auto-charge
		 * @return {OperationStatus} Successful operation
		 */
		ToggleCorporateAutoCharge(): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'payment/toggle-corporate-auto-charge', null, {});
		}

		/**
		 * View saved credit card
		 * Get payment/{cardId}
		 * @param {string} cardId Credit Card ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {CreditCard} Credit card content
		 */
		GetCreditCard(cardId: string): Observable<CreditCard> {
			return this.http.get<CreditCard>(this.baseUri + 'payment/' + cardId, {});
		}

		/**
		 * Delete credit card
		 * Delete payment/{cardId}/delete
		 * @param {string} cardId Credit Card ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Successful operation
		 */
		DeleteCreditCard(cardId: string): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'payment/' + cardId + '/delete', {});
		}

		/**
		 * Reset credit card payment code
		 * Reset the payment code used to bypass credit card payment. This will invalidate your current payment code and your users should be aware of this change while ordering translations.
		 * Post payment/{cardId}/reset-payment-code
		 * @param {string} cardId Credit Card ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {CreditCard} Credit card content
		 */
		ResetCardPaymentCode(cardId: string): Observable<CreditCard> {
			return this.http.post<CreditCard>(this.baseUri + 'payment/' + cardId + '/reset-payment-code', null, {});
		}

		/**
		 * View your permissions
		 * View a list of permissions that your user account is authorized for, configured either by default, or by your account administator.
		 * Get permissions
		 * @return {PermissionList} List of permission strings
		 */
		GetPermissions(): Observable<PermissionList> {
			return this.http.get<PermissionList>(this.baseUri + 'permissions', {});
		}

		/**
		 * Upload profile picture
		 * Upload a profile picture on your account. This is used where your profile is mentioned throughout the platform. Your picture is not used publicly.
		 * Post profile-picture
		 * @return {OperationStatus} Successful operation
		 */
		UploadProfilePicture(requestBody: ProfilePictureUpload): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'profile-picture', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View your translation projects
		 * View the translation projects ordered in your account. If you have the related permission (configured by your account administrator), you can view the projects of your colleagues under the same company account.
		 * Get projects
		 * @param {string} page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {Array<ProjectStatus>} status_ Filter projects by status. Accepts multiple statuses. Possible values 'pending', 'started', 'completed'
		 * @param {boolean} with_pending deprecated. use `status[]` param.
		 * @param {boolean} with_started deprecated. use `status[]` param.
		 * @param {boolean} with_completed deprecated. use `status[]` param.
		 * @param {Array<string>} with_ Include detailed information. Possible values 'client', 'vendor'
		 * @return {ProjectList} Project list
		 */
		GetProjects(page: string | null | undefined, per_page: string | null | undefined, status_: Array<ProjectStatus> | null | undefined, with_pending: boolean | null | undefined, with_started: boolean | null | undefined, with_completed: boolean | null | undefined, order_by: GetProjectsOrder_by | null | undefined, order_type: ListOrderType | null | undefined, with_: Array<string> | null | undefined): Observable<ProjectList> {
			return this.http.get<ProjectList>(this.baseUri + 'projects?page=' + page + '&per_page=' + per_page + '&' + status_?.map(z => `status[]=${z}`).join('&') + '&with_pending=' + with_pending + '&with_started=' + with_started + '&with_completed=' + with_completed + '&order_by=' + order_by + '&order_type=' + order_type + '&' + with_?.map(z => `with[]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Create a new project
		 * Create a new translation project. Projects are not launched (you are not charged) until you `/launch` the created project.
		 * Post projects
		 * @return {Project} Newly created project
		 */
		CreateProject(requestBody: NewProject): Observable<Project> {
			return this.http.post<Project>(this.baseUri + 'projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Quote Id
		 * Get Quote Id
		 * Get projects/from-internal-id/{projectId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ProjectId} QuoteId
		 */
		GetQuoteIdFromInternalId(projectId: string): Observable<ProjectId> {
			return this.http.get<ProjectId>(this.baseUri + 'projects/from-internal-id/' + projectId, {});
		}

		/**
		 * List projects as a vendor
		 * Get a list of projects that are available to you to work on as a vendor. This is not a list of projects that you ordered as a customer.
		 * Get projects/vendor
		 * @param {boolean} joined Return only projects that this user has already joined
		 * @param {boolean} completed Return only projects that have been completed. When `true`, this makes `joined` true as well.
		 * @param {string} page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ProjectList} Vendor project list
		 */
		GetVendorProjects(joined: boolean | null | undefined, completed: boolean | null | undefined, page: string | null | undefined, per_page: string | null | undefined): Observable<ProjectList> {
			return this.http.get<ProjectList>(this.baseUri + 'projects/vendor?joined=' + joined + '&completed=' + completed + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Delete your translation project
		 * If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.
		 * Delete projects/{id}
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Project canceled successfully
		 */
		DeleteProject(id: string): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'projects/' + id, {});
		}

		/**
		 * View a translation project
		 * View the details of a translation project in your account.
		 * Get projects/{id}
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {Array<string>} with_ Include detailed information. Possible values 'client', 'vendor', 'score'
		 * @return {Project} Project model
		 */
		GetProject(id: string, with_: Array<string> | null | undefined): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'projects/' + id + '?' + with_?.map(z => `with[]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Update project info and settings
		 * Put projects/{id}
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Project} Updated project
		 */
		UpdateProject(id: string, requestBody: ProjectUpdate): Observable<Project> {
			return this.http.put<Project>(this.baseUri + 'projects/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Assign a CM to the project
		 * Post projects/{id}/assign-cm
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Operation started successfully
		 */
		AssignCM(id: string, requestBody: CM): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'projects/' + id + '/assign-cm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Trigger a call to your callback URL related to this project.
		 * Trigger a call to your callback URL related to this project.
		 * Get projects/{id}/callback/{actionType}
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {TriggerCallbackActionType} actionType Callback type
		 * @return {CallbackResult} Callback result
		 */
		TriggerCallback(id: string, actionType: TriggerCallbackActionType): Observable<CallbackResult> {
			return this.http.get<CallbackResult>(this.baseUri + 'projects/' + id + '/callback/' + actionType, {});
		}

		/**
		 * Cancel your translation project
		 * If you haven't launched your translation project yet, we will delete it. If MotaWord already started working on your project, we will cancel the project and refund the volume that we haven't worked on yet.
		 * Post projects/{id}/cancel
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Project canceled successfully
		 */
		CancelProject(id: string, requestBody: CancelProjectRequest): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'projects/' + id + '/cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deliver project
		 * Deliver project to the owner of the project. You can also download your translations in `/package` and `/download` endpoints.
		 * Post projects/{id}/deliver
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Operation started successfully
		 */
		DeliverProject(id: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'projects/' + id + '/deliver', null, {});
		}

		/**
		 * Download your translated project
		 * Download the latest translation package. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.
		 * Get projects/{id}/download
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} Translation package streamed. The streamed file is always a ZIP file, except when the API client is configured for Drupal and Wordpress.
		 */
		Download(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + id + '/download', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download your translated project language
		 * Download the latest translation package for your target language. You must have requested a `/package` call beforehand and wait until the packaging status is 'completed'.
		 * Get projects/{id}/download/{language}
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} language Language code. You can download the translation of only a specific language.
		 * @return {void} Translation package streamed. The streamed file is always a ZIP file, except when the API client is configured for Drupal and Wordpress.
		 */
		DownloadLanguage(id: string, language: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + id + '/download/' + (language == null ? '' : encodeURIComponent(language)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Send a quote email
		 * Send a quote email
		 * Post projects/{id}/email-quote
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Email sent successfully
		 */
		SendQuoteEmail(id: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'projects/' + id + '/email-quote', null, {});
		}

		/**
		 * View project invoice
		 * View your invoice details for your translation project.
		 * Get projects/{id}/invoice
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Invoice} Invoice
		 */
		GetInvoice(id: string): Observable<Invoice> {
			return this.http.get<Invoice>(this.baseUri + 'projects/' + id + '/invoice', {});
		}

		/**
		 * Download project invoice (HTML)
		 * Download your project invoice as HTML. This is useful when you want to show your users the invoice in a webpage.
		 * Get projects/{id}/invoice.html
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} Invoice
		 */
		DownloadHtmlInvoice(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + id + '/invoice.html', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Download project invoice (PDF)
		 * Download your project invoice as PDF. Your invoice may be in "unpaid" status, in which case youn can see the payment instructions in the PDF file.
		 * Get projects/{id}/invoice.pdf
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} Invoice
		 */
		DownloadPdfInvoice(id: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + id + '/invoice.pdf', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Launch your translation project
		 * Launch your translation project so MotaWord can actually start working on your translation.
		 * Post projects/{id}/launch
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ProjectLaunchResponse} Project launched successfully
		 */
		LaunchProject(id: string, requestBody: ProjectPayment): Observable<ProjectLaunchResponse> {
			return this.http.post<ProjectLaunchResponse>(this.baseUri + 'projects/' + id + '/launch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Package your translated project
		 * Package the translations in your project, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project.
		 * Post projects/{id}/package
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} async If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {void} Packaged translation streamed.
		 */
		Package(id: string, async: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects/' + id + '/package?async=' + async, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Track translation packaging status
		 * Track the packaging status of your translations, by using the `key` from packaging request. Once packaging is completed, you can download your translations via `/download` endpoints.
		 * Get projects/{id}/package/check
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} key This is the package tracking key provided in the response of a /package call.
		 * @return {PackageStatus} Current status of packaging process.
		 */
		TrackPackage(id: string, key: string | null | undefined): Observable<PackageStatus> {
			return this.http.get<PackageStatus>(this.baseUri + 'projects/' + id + '/package/check?key=' + (key == null ? '' : encodeURIComponent(key)), {});
		}

		/**
		 * Package your translated project language
		 * Package the translations in your project for a specific target language, prepare translated documents and make it ready to be downloaded. Once packaged, you can download your translated project in this target language.
		 * Post projects/{id}/package/{language}
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} language Language code. You can package the translation of only a specific language.
		 * @param {string} async If you want to package and download the translation synchronously, mark this parameter as '0'. It will package the translation and then return the packaged file in the response, identical to /download call after an asynchronous /package call.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Package} Packaging status and tracking code. With the package key, you can track the progress of translation packaging.Also packaged translation streamed.
		 */
		PackageLanguage(id: string, language: string, async: string | null | undefined): Observable<Package> {
			return this.http.post<Package>(this.baseUri + 'projects/' + id + '/package/' + (language == null ? '' : encodeURIComponent(language)) + '&async=' + async, null, {});
		}

		/**
		 * View progress of a project
		 * Monitor the translation progress of an already launched project in real-time.
		 * Get projects/{id}/progress
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {boolean} raw This will return a more raw progress information for translation and proofreading. For instance, when completed, we will return 100% for both tasks by default, whereas their actual progress may be lower than 100%.
		 * @return {Progress} Progress information
		 */
		GetProgress(id: string, raw: boolean | null | undefined): Observable<Progress> {
			return this.http.get<Progress>(this.baseUri + 'projects/' + id + '/progress?raw=' + raw, {});
		}

		/**
		 * Recreate your translation project from scratch. This is a risky action, you will lose current translations.
		 * Post projects/{id}/recreate
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Project recreation process started successfully
		 */
		RecreateProject(id: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'projects/' + id + '/recreate', null, {});
		}

		/**
		 * Submit feedback report for a project
		 * Post projects/{id}/reports
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Report submitted successfully
		 */
		SubmitProjectReports(id: string, requestBody: ReportContent): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'projects/' + id + '/reports', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get sales activities for a project
		 * Get projects/{id}/sales/activities
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {SalesActivities} Activities fetched successfully
		 */
		GetSalesActivities(id: string, excludeOwner: string | null | undefined, type: SalesActivityType | null | undefined): Observable<SalesActivities> {
			return this.http.get<SalesActivities>(this.baseUri + 'projects/' + id + '/sales/activities?excludeOwner=' + (excludeOwner == null ? '' : encodeURIComponent(excludeOwner)) + '&type=' + type, {});
		}

		/**
		 * Insert sales activity for a project
		 * Post projects/{id}/sales/activities
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Acvitity inserted successfully
		 */
		InsertSalesActivity(id: string, requestBody: NewSalesActivity): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'projects/' + id + '/sales/activities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete project webhooks
		 * Delete project webhooks. Projects currently support registering only 1 webhook. This endpoint deletes the previously registered webhook.
		 * Delete projects/{id}/webhooks
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Project webhook deleted successfully
		 */
		DeleteProjectWebhook(id: string): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'projects/' + id + '/webhooks', {});
		}

		/**
		 * View project webhooks
		 * This endpoint returns Project entity which contains `callback_url` field for webhook URL. Currently projects can have only 1 webhook registered.
		 * Get projects/{id}/webhooks
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Project} Project model
		 */
		GetProjectWebhooks(id: string): Observable<Project> {
			return this.http.get<Project>(this.baseUri + 'projects/' + id + '/webhooks', {});
		}

		/**
		 * Update project webhook
		 * Update project webhook URL
		 * Post projects/{id}/webhooks
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Project} Updated project
		 */
		PostProjectWebhook(id: string, requestBody: Webhook): Observable<Project> {
			return this.http.post<Project>(this.baseUri + 'projects/' + id + '/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update project webhook
		 * Update project webhook URL
		 * Put projects/{id}/webhooks
		 * @param {string} id Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Project} Updated project
		 */
		UpdateProjectWebhook(id: string, requestBody: Webhook): Observable<Project> {
			return this.http.put<Project>(this.baseUri + 'projects/' + id + '/webhooks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Monitor project activities
		 * Get a list of real-time activities in the project, such as translation suggestion and translation approval.
		 * Get projects/{projectId}/activities
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ActivityList} A list of activity models
		 */
		GetActivities(projectId: string, page: string | null | undefined, per_page: string | null | undefined): Observable<ActivityList> {
			return this.http.get<ActivityList>(this.baseUri + 'projects/' + projectId + '/activities?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * View an activity
		 * View the details of an activity in the project.
		 * Get projects/{projectId}/activities/{activityId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} activityId Activity ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Activity} Activity model
		 */
		GetActivity(projectId: string, activityId: string): Observable<Activity> {
			return this.http.get<Activity>(this.baseUri + 'projects/' + projectId + '/activities/' + activityId, {});
		}

		/**
		 * Submit comment to an activity
		 * Submit a comment to an activity in the project, such as translation or editing.
		 * Post projects/{projectId}/activities/{activityId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} activityId Activity ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Comment} Comment model
		 */
		SubmitComment(projectId: string, activityId: string, requestBody: Comment): Observable<Comment> {
			return this.http.post<Comment>(this.baseUri + 'projects/' + projectId + '/activities/' + activityId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View activity comments
		 * View a list of comments added to this activity.
		 * Get projects/{projectId}/activities/{activityId}/comments
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} activityId Activity ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {CommentList} A list of Comment models
		 */
		GetActivityComments(projectId: string, activityId: string): Observable<CommentList> {
			return this.http.get<CommentList>(this.baseUri + 'projects/' + projectId + '/activities/' + activityId + '/comments', {});
		}

		/**
		 * View all project comments
		 * View a list of activity comments in the project.
		 * Get projects/{projectId}/comments
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {CommentList} A list of Comment models
		 */
		GetComments(projectId: string, page: string | null | undefined, per_page: string | null | undefined): Observable<CommentList> {
			return this.http.get<CommentList>(this.baseUri + 'projects/' + projectId + '/comments?page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * View project source documents
		 * Get a list of source files you uploaded to be translated in your project.
		 * Get projects/{projectId}/documents
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {Array<string>} with_ Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
		 * @return {DocumentList} A list of document models
		 */
		GetProjectDocuments(projectId: string, with_: Array<string> | null | undefined): Observable<DocumentList> {
			return this.http.get<DocumentList>(this.baseUri + 'projects/' + projectId + '/documents?' + with_?.map(z => `with[]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Upload a new document
		 * Upload a new document
		 * Post projects/{projectId}/documents
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {DocumentList} A list of successfully added new documents.
		 */
		CreateProjectDocument(projectId: string, requestBody: DocumentUpdates): Observable<DocumentList> {
			return this.http.post<DocumentList>(this.baseUri + 'projects/' + projectId + '/documents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the document
		 * Delete the document
		 * Delete projects/{projectId}/documents/{documentId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Document deleted successfully
		 */
		DeleteProjectDocument(projectId: string, documentId: string): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'projects/' + projectId + '/documents/' + documentId, {});
		}

		/**
		 * View a project source document
		 * View the details of a source file you uploaded to be translated in your project.
		 * Get projects/{projectId}/documents/{documentId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {Array<string>} with_ Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
		 * @return {Document} Document model
		 */
		GetProjectDocument(projectId: string, documentId: string, with_: Array<string> | null | undefined): Observable<Document> {
			return this.http.get<Document>(this.baseUri + 'projects/' + projectId + '/documents/' + documentId + '?' + with_?.map(z => `with[]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Update the document.
		 * Update the document. File name and contents will replaced with the new one.
		 * Post projects/{projectId}/documents/{documentId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Document} Updated document model
		 */
		UpdateProjectDocument(projectId: string, documentId: string, requestBody: DocumentUploadRequest): Observable<Document> {
			return this.http.post<Document>(this.baseUri + 'projects/' + projectId + '/documents/' + documentId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download a project source document
		 * Download an actual source file you uploaded to be translated in your project.
		 * Get projects/{projectId}/documents/{documentId}/download
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {string} Document streamed
		 */
		DownloadProjectDocument(projectId: string, documentId: string): Observable<string> {
			return this.http.get(this.baseUri + 'projects/' + projectId + '/documents/' + documentId + '/download', { responseType: 'text' });
		}

		/**
		 * View strings and translations of a document
		 * View the strings and their translations in your translation project for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.
		 * Get projects/{projectId}/documents/{documentId}/translations
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {StringList} Response for strings and their translations
		 */
		GetDocumentTranslations(projectId: string, documentId: string): Observable<StringList> {
			return this.http.get<StringList>(this.baseUri + 'projects/' + projectId + '/documents/' + documentId + '/translations', {});
		}

		/**
		 * Download translated document
		 * Download translated document in the given target language.
		 * Get projects/{projectId}/documents/{documentId}/translations/download/{language}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} language Target language code.
		 * @param {boolean} certified Download certified translation
		 * @return {void} File
		 */
		DownloadTranslatedDocumentForLanguage(projectId: string, documentId: string, language: string, certified: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'projects/' + projectId + '/documents/' + documentId + '/translations/download/' + (language == null ? '' : encodeURIComponent(language)) + '&certified=' + certified, { observe: 'response', responseType: 'text' });
		}

		/**
		 * View strings and translations of a document for target language
		 * View the strings and their translations in the given target language for the specified source document. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.
		 * Get projects/{projectId}/documents/{documentId}/translations/{language}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} documentId Document ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} language Target language code.
		 * @return {StringList} Response for strings and their translations
		 */
		GetDocumentTranslationsForLanguage(projectId: string, documentId: string, language: string): Observable<StringList> {
			return this.http.get<StringList>(this.baseUri + 'projects/' + projectId + '/documents/' + documentId + '/translations/' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * View glossaries
		 * View a list of glossaries previously uploaded to the project.
		 * Get projects/{projectId}/glossaries
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {GlossaryList} A list of glossary models
		 */
		GetGlossaries(projectId: string): Observable<GlossaryList> {
			return this.http.get<GlossaryList>(this.baseUri + 'projects/' + projectId + '/glossaries', {});
		}

		/**
		 * Upload a glossary file
		 * Upload a new glossary file to your project to be used during translation. Glossaries can be CSV or TBX files.
		 * Post projects/{projectId}/glossaries
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Glossary} Newly created glossary model.
		 */
		CreateGlossary(projectId: string, requestBody: GlossaryUploadRequest): Observable<Glossary> {
			return this.http.post<Glossary>(this.baseUri + 'projects/' + projectId + '/glossaries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a glossary
		 * Delete the existing glossary from the project.
		 * Delete projects/{projectId}/glossaries/{glossaryId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} glossaryId Glossary ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Glossary deleted successfully
		 */
		DeleteGlossary(projectId: string, glossaryId: string): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'projects/' + projectId + '/glossaries/' + glossaryId, {});
		}

		/**
		 * View a glossary
		 * View the details of a glossary file uploaded to a project.
		 * Get projects/{projectId}/glossaries/{glossaryId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} glossaryId Glossary ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Glossary} Glossary model
		 */
		GetGlossary(projectId: string, glossaryId: string): Observable<Glossary> {
			return this.http.get<Glossary>(this.baseUri + 'projects/' + projectId + '/glossaries/' + glossaryId, {});
		}

		/**
		 * Update a glossary
		 * Update the existing glossary file in the project. Public users are allowed to have only 1 glossary per project and file name and contents will replaced with the new glossary file that you are uploading via this endpoint.
		 * Put projects/{projectId}/glossaries/{glossaryId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} glossaryId Glossary ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Glossary} Updated glossary model
		 */
		UpdateGlossary(projectId: string, glossaryId: string, requestBody: GlossaryUploadRequest): Observable<Glossary> {
			return this.http.put<Glossary>(this.baseUri + 'projects/' + projectId + '/glossaries/' + glossaryId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download a glossary
		 * Download a previously uploaded glossary file.
		 * Get projects/{projectId}/glossaries/{glossaryId}/download
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} glossaryId Glossary ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {string} Glossary streamed
		 */
		DownloadGlossary(projectId: string, glossaryId: string): Observable<string> {
			return this.http.get(this.baseUri + 'projects/' + projectId + '/glossaries/' + glossaryId + '/download', { responseType: 'text' });
		}

		/**
		 * View project strings and translations
		 * View the strings and their translations in your translation project, for all target languages. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.
		 * Get projects/{projectId}/strings
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {StringList} Response for strings and their translations
		 */
		GetProjectStrings(projectId: string): Observable<StringList> {
			return this.http.get<StringList>(this.baseUri + 'projects/' + projectId + '/strings', {});
		}

		/**
		 * Download project translation memory
		 * Package and download project translation memory in TMX format
		 * Post projects/{projectId}/strings/package
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} async If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} format Translation Memory file format
		 * @return {AsyncOperationStatus} Response in TMX or async request
		 */
		PackageProjectTranslationMemory(projectId: string, async: string | null | undefined, format: string | null | undefined): Observable<AsyncOperationStatus> {
			return this.http.post<AsyncOperationStatus>(this.baseUri + 'projects/' + projectId + '/strings/package?async=' + async + '&format=' + (format == null ? '' : encodeURIComponent(format)), null, {});
		}

		/**
		 * Check translation memory packaging status
		 * Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.
		 * Get projects/{projectId}/strings/package/status
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} async_request_key Async operation key
		 * @return {AsyncOperationStatus} Async operation status. Use the key to query status of this operation.
		 */
		PackageProjectTranslationMemoryStatus(projectId: string, async_request_key: string): Observable<AsyncOperationStatus> {
			return this.http.get<AsyncOperationStatus>(this.baseUri + 'projects/' + projectId + '/strings/package/status?async_request_key=' + (async_request_key == null ? '' : encodeURIComponent(async_request_key)), {});
		}

		/**
		 * Download language-specific project translation memory
		 * Package and download project translation memory in TMX format for a specific target language.
		 * Post projects/{projectId}/strings/{languageCode}/package
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} languageCode Language Code
		 * @param {string} async If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} format Translation Memory file format
		 * @return {AsyncOperationStatus} Response in TMX or async request
		 */
		PackageProjectTranslationMemoryForLanguage(projectId: string, languageCode: string, async: string | null | undefined, format: string | null | undefined): Observable<AsyncOperationStatus> {
			return this.http.post<AsyncOperationStatus>(this.baseUri + 'projects/' + projectId + '/strings/' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '/package&async=' + async + '&format=' + (format == null ? '' : encodeURIComponent(format)), null, {});
		}

		/**
		 * Check language-specific translation memory packaging status
		 * Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.
		 * Get projects/{projectId}/strings/{languageCode}/package/status
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} languageCode Language Code
		 * @param {string} async_request_key Async operation key
		 * @return {AsyncOperationStatus} Async operation status. Use the key to query status of this operation.
		 */
		PackageProjectTranslationMemoryForLanguageStatus(projectId: string, languageCode: string, async_request_key: string): Observable<AsyncOperationStatus> {
			return this.http.get<AsyncOperationStatus>(this.baseUri + 'projects/' + projectId + '/strings/' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '/package/status&async_request_key=' + (async_request_key == null ? '' : encodeURIComponent(async_request_key)), {});
		}

		/**
		 * View strings and translations for target language
		 * View the strings and their translations in your translation project for the specified target language. The list of translations is live if your project is not completed yet. If you need the translated version of your source document/file, then you need to use package and download endpoints.
		 * Get projects/{projectId}/strings/{language}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} language Target language code
		 * @return {StringList} Response for strings and their translations
		 */
		GetProjectStringsForLanguage(projectId: string, language: string): Observable<StringList> {
			return this.http.get<StringList>(this.baseUri + 'projects/' + projectId + '/strings/' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * View style guides
		 * View a list of style guides in your project.
		 * Get projects/{projectId}/styleguides
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {Array<string>} with_ Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
		 * @return {StyleGuideList} A list of style guide models
		 */
		GetStyleGuides(projectId: string, with_: Array<string> | null | undefined): Observable<StyleGuideList> {
			return this.http.get<StyleGuideList>(this.baseUri + 'projects/' + projectId + '/styleguides?' + with_?.map(z => `with[]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Upload a new style guide
		 * Upload a new style guide
		 * Post projects/{projectId}/styleguides
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {StyleGuideList} Newly created style guide model or a list of new style guide models
		 */
		CreateStyleGuide(projectId: string, requestBody: StyleGuideUploadRequest): Observable<StyleGuideList> {
			return this.http.post<StyleGuideList>(this.baseUri + 'projects/' + projectId + '/styleguides', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a style guide
		 * Delete the existing style guide from the project.
		 * Delete projects/{projectId}/styleguides/{styleGuideId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} styleGuideId Style Guide ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Style guide deleted successfully
		 */
		DeleteStyleGuide(projectId: string, styleGuideId: string): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + 'projects/' + projectId + '/styleguides/' + styleGuideId, {});
		}

		/**
		 * View a style guide
		 * View the details of a style guide uploaded to a project
		 * Get projects/{projectId}/styleguides/{styleGuideId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} styleGuideId Style Guide ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {Array<string>} with_ Attach further information. Possible values 'preview' to fetch temporary preview URLs. This is NOT recommended to be used with list calls. Only use with[]=preview for single document/style guide calls.
		 * @return {StyleGuide} Style guide model
		 */
		GetStyleGuide(projectId: string, styleGuideId: string, with_: Array<string> | null | undefined): Observable<StyleGuide> {
			return this.http.get<StyleGuide>(this.baseUri + 'projects/' + projectId + '/styleguides/' + styleGuideId + '?' + with_?.map(z => `with[]=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Update a style guide
		 * Update the existing style guide in the project. Public users are allowed to have only 1 style guide per project and file name and contents will replaced with the new style guide that you are uploading via this endpoint.
		 * Put projects/{projectId}/styleguides/{styleGuideId}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} styleGuideId Style guide ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {StyleGuide} Updated style guide model
		 */
		UpdateStyleGuide(projectId: string, styleGuideId: string, requestBody: StyleGuideUploadRequest): Observable<StyleGuide> {
			return this.http.put<StyleGuide>(this.baseUri + 'projects/' + projectId + '/styleguides/' + styleGuideId, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download a style guide
		 * Download a previously uploaded style guide file.
		 * Get projects/{projectId}/styleguides/{styleGuideId}/download
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} styleGuideId Style Guide ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {string} Style guide streamed
		 */
		DownloadStyleGuide(projectId: string, styleGuideId: string): Observable<string> {
			return this.http.get(this.baseUri + 'projects/' + projectId + '/styleguides/' + styleGuideId + '/download', { responseType: 'text' });
		}

		/**
		 * Deprecated. Use /projects/{projectId}/strings instead.
		 * Get projects/{projectId}/translations
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {StringList} Response for strings and their translations
		 */
		GetProjectTranslations(projectId: string): Observable<StringList> {
			return this.http.get<StringList>(this.baseUri + 'projects/' + projectId + '/translations', {});
		}

		/**
		 * Deprecated. use /projects/{projectId}/strings/{language} instead.
		 * Get projects/{projectId}/translations/{language}
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} language Target language code
		 * @return {StringList} Response for strings and their translations
		 */
		GetProjectTranslationsForLanguage(projectId: string, language: string): Observable<StringList> {
			return this.http.get<StringList>(this.baseUri + 'projects/' + projectId + '/translations/' + (language == null ? '' : encodeURIComponent(language)), {});
		}

		/**
		 * Get a list of vendors.
		 * Get a list of vendors.
		 * Get projects/{projectId}/vendors
		 * @param {string} projectId Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UserList} User list
		 */
		GetProjectVendors(projectId: string): Observable<UserList> {
			return this.http.get<UserList>(this.baseUri + 'projects/' + projectId + '/vendors', {});
		}

		/**
		 * Returns available options for selected timeframe.
		 * Post reports/filter
		 * @return {FilterContents} Filter contents
		 */
		GetFilterContents(requestBody: FilterDates): Observable<FilterContents> {
			return this.http.post<FilterContents>(this.baseUri + 'reports/filter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Language pairs report
		 * View translation reports for each language pair with translations under your account. You can view company-wide language pairs if you have the user permission.
		 * Post reports/language-pairs
		 * @return {LanguagePairsReport} Language pairs stats for client and vendors
		 */
		GetLanguagePairsReport(requestBody: ReportFilter): Observable<LanguagePairsReport> {
			return this.http.post<LanguagePairsReport>(this.baseUri + 'reports/language-pairs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Projects report
		 * View projects under your account, with advanced filtering. You can view company-wide projects if you have the user permission.
		 * Post reports/projects
		 * @return {ProjectList} User stats for client and vendors
		 */
		GetProjectsReport(requestBody: ReportFilter): Observable<ProjectList> {
			return this.http.post<ProjectList>(this.baseUri + 'reports/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generate a QA report for given filter
		 * Generate a QA report for given filter
		 * Post reports/qa
		 * @return {QaWarnings} List of QA entries
		 */
		GenerateQAReport(requestBody: QaFilter): Observable<QaWarnings> {
			return this.http.post<QaWarnings>(this.baseUri + 'reports/qa', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Company users report
		 * View translation reports for each user under your company account. You need the permission to view users in your company.
		 * Post reports/users
		 * @return {UsersReport} User stats for client and vendors
		 */
		GetUsersReport(requestBody: ReportFilter): Observable<UsersReport> {
			return this.http.post<UsersReport>(this.baseUri + 'reports/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends email confirmation email for current user
		 * Post resend-email-confirmation
		 * @return {OperationStatus} When confirmation email is sent, status is `success`, or `already_confirmed` when user has already confirmed their email address.
		 */
		SendEmailConfirmation(): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'resend-email-confirmation', null, {});
		}

		/**
		 * View your vendor responsiveness
		 * View your statistical analysis of responsiveness to our translation projects, invitations, notifications and such.
		 * Get responsivity
		 * @param {GetResponsivityPeriod} period Time period to calculate your responsiveness
		 * @return {ResponsivityList} Vendor responsivity stats
		 */
		GetResponsivity(period: GetResponsivityPeriod | null | undefined): Observable<ResponsivityList> {
			return this.http.get<ResponsivityList>(this.baseUri + 'responsivity?period=' + period, {});
		}

		/**
		 * Search everything in your account
		 * Search through everything in your account, from projects to documents, from source strings to translations...
		 * Get search
		 * @param {string} query Search query term
		 * @param {Array<string>} include_ Search in these entities. Current oprions are projects, documents, strings. Can be multiple. When not provided, we'll search through all entities.
		 * @param {string} page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {SearchEverywhereResult} Search result for multiple entities and paging
		 */
		SearchEverywhere(query: string, include_: Array<string> | null | undefined, page: string | null | undefined, per_page: string | null | undefined): Observable<SearchEverywhereResult> {
			return this.http.get<SearchEverywhereResult>(this.baseUri + 'search?query=' + (query == null ? '' : encodeURIComponent(query)) + '&' + include_?.map(z => `include[]=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&per_page=' + per_page, {});
		}

		/**
		 * Reindex for search all of the client source and translation documents.
		 * Post search/documents/reindex
		 * @return {AsyncOperationStatus} Async operation status. Use the key to query status of this operation.
		 */
		ReindexDocuments(): Observable<AsyncOperationStatus> {
			return this.http.post<AsyncOperationStatus>(this.baseUri + 'search/documents/reindex', null, {});
		}

		/**
		 * Check reindex status of the client source and translation documents.
		 * Get search/documents/reindex/status
		 * @param {string} async_request_key Async operation key
		 * @return {AsyncOperationStatus} Async operation status. Use the key to query status of this operation.
		 */
		CheckDocumentsReindex(async_request_key: string): Observable<AsyncOperationStatus> {
			return this.http.get<AsyncOperationStatus>(this.baseUri + 'search/documents/reindex/status?async_request_key=' + (async_request_key == null ? '' : encodeURIComponent(async_request_key)), {});
		}

		/**
		 * View your account statistics
		 * View your client and vendor statistics.
		 * Get stats
		 * @return {Stats} Client and vendor statistics for your account
		 */
		GetStats(): Observable<Stats> {
			return this.http.get<Stats>(this.baseUri + 'stats', {});
		}

		/**
		 * Returns the total commissions stats.
		 * Get stats/commissions
		 * @return {CommissionStats} User's commission stats
		 */
		GetCommissionStats(): Observable<CommissionStats> {
			return this.http.get<CommissionStats>(this.baseUri + 'stats/commissions', {});
		}

		/**
		 * Returns the total commissions stats by report filter.
		 * Post stats/commissions
		 * @return {CommissionStats} User's commission stats
		 */
		GetCommissionStatsByFilter(requestBody: ReportFilter): Observable<CommissionStats> {
			return this.http.post<CommissionStats>(this.baseUri + 'stats/commissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View your popular language pairs
		 * Get stats/popular-pairs
		 * @return {PopularLanguagePairs} Your most ordered language pairs
		 */
		GetPopularPairs(): Observable<PopularLanguagePairs> {
			return this.http.get<PopularLanguagePairs>(this.baseUri + 'stats/popular-pairs', {});
		}

		/**
		 * View your project statistics
		 * Get stats/projects
		 * @return {ClientProjectStats} Project statistics for your account
		 */
		GetProjectStats(): Observable<ClientProjectStats> {
			return this.http.get<ClientProjectStats>(this.baseUri + 'stats/projects', {});
		}

		/**
		 * View your translation statistics
		 * Get stats/strings
		 * @return {ClientStringStats} Translation statistics for your account
		 */
		GetStringStats(): Observable<ClientStringStats> {
			return this.http.get<ClientStringStats>(this.baseUri + 'stats/strings', {});
		}

		/**
		 * View account strings (translation memory)
		 * Get a list of all strings and their translations under your account, from all projects. This is your MotaWord translation memory. If you have the related permission, this endpoint will also return strings from your company account.
		 * Get strings
		 * @param {string} source_language Source Language Code
		 * @param {string} page Requested page
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ClientStrings} List of strings in JSON
		 */
		GetStrings(source_language: string | null | undefined, page: string | null | undefined): Observable<ClientStrings> {
			return this.http.get<ClientStrings>(this.baseUri + 'strings?source_language=' + (source_language == null ? '' : encodeURIComponent(source_language)) + '&page=' + page, {});
		}

		/**
		 * Translate Strings with MT
		 * Deprecated, use instant translation mechanism for continuous projects.
		 * Post strings
		 * @return {MachineTranslatedStrings} Machine Translated Strings in JSON
		 */
		PostStrings(requestBody: DeprecatedStringTranslationContent): Observable<MachineTranslatedStrings> {
			return this.http.post<MachineTranslatedStrings>(this.baseUri + 'strings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update string translation
		 * Update the translation of a string from your account strings/translation memory.
		 * Put strings
		 * @return {OperationStatus} Translation updated by adding new translation memory unit
		 */
		UpdateTranslationMemoryUnit(requestBody: TranslationMemoryUnit): Observable<OperationStatus> {
			return this.http.put<OperationStatus>(this.baseUri + 'strings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Download account translation memory
		 * Package and download account translation memory in TMX format. If you have the related permission, this will also download your company translation memory.
		 * Post strings/{languageCode}/package
		 * @param {string} languageCode Source Language Code
		 * @param {string} async If you want to package and download the translation memory synchronously, mark this parameter as '0'. It will package the translation memory and then return the packaged file in the response, identical to async/download call after an asynchronous /package call.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} email If you don't need us to email the TMX, set this to '0'. Default is 1.
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {AsyncOperationStatus} Response in TMX or async request
		 */
		PackageUserTranslationMemory(languageCode: string, async: string | null | undefined, email: string | null | undefined): Observable<AsyncOperationStatus> {
			return this.http.post<AsyncOperationStatus>(this.baseUri + 'strings/' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '/package&async=' + async + '&email=' + email, null, {});
		}

		/**
		 * Check account translation memory packaging status
		 * Check translation memory packaging status for async packaging requests, using the key returned from strings/package call.
		 * Get strings/{languageCode}/package/status
		 * @param {string} languageCode Language Code
		 * @param {string} async_request_key Async operation key
		 * @return {AsyncOperationStatus} Async operation status. Use the key to query status of this operation.
		 */
		PackageUserTranslationMemoryForLanguageStatus(languageCode: string, async_request_key: string): Observable<AsyncOperationStatus> {
			return this.http.get<AsyncOperationStatus>(this.baseUri + 'strings/' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '/package/status&async_request_key=' + (async_request_key == null ? '' : encodeURIComponent(async_request_key)), {});
		}

		/**
		 * Download account style guide
		 * Download your account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.
		 * Get styleguide
		 * @return {string} Style guide file streamed.
		 */
		DownloadGlobalStyleGuide(): Observable<string> {
			return this.http.get(this.baseUri + 'styleguide', { responseType: 'text' });
		}

		/**
		 * Create or update the account style guide
		 * Update your corporate account's global style guide. This endpoint is available only for corporate account customers. This style guide will be automatically attached to each new project under your account.
		 * Post styleguide
		 * @return {OperationStatus} Successful operation
		 */
		UpdateGlobalStyleGuide(requestBody: AccountStyleGuideUploadRequest): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'styleguide', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get survey questions in given scope and type
		 * Get survey questions in given scope and type
		 * Get surveys/{scope}/{type}
		 * @param {string} scope Scope
		 * @param {string} type Type
		 * @param {string} attach_answers_for_project Project ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Array<SurveyQuestion>} Survey Questions
		 */
		GetQuestions(scope: string, type: string, attach_answers_for_project: string | null | undefined): Observable<Array<SurveyQuestion>> {
			return this.http.get<Array<SurveyQuestion>>(this.baseUri + 'surveys/' + (scope == null ? '' : encodeURIComponent(scope)) + '/' + (type == null ? '' : encodeURIComponent(type)) + '&attach_answers_for_project=' + attach_answers_for_project, {});
		}

		/**
		 * Post survey answers for scope and type
		 * Post survey answers for scope and type
		 * Post surveys/{scope}/{type}
		 * @param {string} scope Scope
		 * @param {string} type Type
		 * @return {OperationStatus} Survey Answers
		 */
		SubmitAnswers(scope: string, type: string, requestBody: SurveyAnswers): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'surveys/' + (scope == null ? '' : encodeURIComponent(scope)) + '/' + (type == null ? '' : encodeURIComponent(type)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * OpenAPI YAML representation of our API
		 * Get Swagger YAML
		 * Get swagger
		 * @return {void} Swagger YAML
		 */
		GetSwaggerYaml(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'swagger', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve an access token
		 * MotaWord API is using OAuth2 procedures when authenticating or authorizing your API call.
		 * Post token
		 * @return {Token} Authentication response
		 */
		GetAccessToken(requestBody: TokenRequest): Observable<Token> {
			return this.http.post<Token>(this.baseUri + 'token', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Defreeze your account
		 * Reactive your account to start receiving notifications.
		 * Post unfreeze-account
		 * @return {OperationStatus} Successful operation
		 */
		UnfreezeAccount(): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'unfreeze-account', null, {});
		}

		/**
		 * View your user groups
		 * View the user groups that your user account belongs to. This is typically configured by your account administator's dashboard.
		 * Get user-groups
		 * @return {UserGroupList} List of user groups
		 */
		GetUserGroups(): Observable<UserGroupList> {
			return this.http.get<UserGroupList>(this.baseUri + 'user-groups', {});
		}

		/**
		 * Get a list of platform users
		 * Get a list of platform users
		 * Get users
		 * @param {string} page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UserList} User list
		 */
		GetUsers(page: string | null | undefined, per_page: string | null | undefined, user_type: GetUsersUser_type | null | undefined, search: string | null | undefined, email: string | null | undefined): Observable<UserList> {
			return this.http.get<UserList>(this.baseUri + 'users?page=' + page + '&per_page=' + per_page + '&user_type=' + user_type + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&email=' + (email == null ? '' : encodeURIComponent(email)), {});
		}

		/**
		 * Create a new user
		 * Create a new platform user
		 * Post users
		 * @param {boolean} notify Send a welcome email to the user
		 * @return {User} Created user
		 */
		CreateUser(notify: boolean | null | undefined, requestBody: User): Observable<User> {
			return this.http.post<User>(this.baseUri + 'users?notify=' + notify, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of vendors available for the criteria given
		 * Get a list of vendors available for the criteria given
		 * Post users/available-vendors
		 * @param {Array<string>} with_ Include detailed information. Possible values 'user'. Requesting user info enrichment takes much longer.
		 * @return {UserList} User list
		 */
		GetAvailableVendors(with_: Array<string> | null | undefined, requestBody: AvailableVendorsFilter): Observable<UserList> {
			return this.http.post<UserList>(this.baseUri + 'users/available-vendors?' + with_?.map(z => `with[]=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Filter vendors based on provided parameters
		 * Get a list of vendors available for the criteria given
		 * Post users/filter
		 * @param {number} page The page number
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} per_page The number of items per page
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} order_by The field to order the results by
		 * @param {string} order The order to sort the results by (ascending or descending)
		 * @return {UserList} Successful response User List
		 */
		GetFilteredVendors(page: number | null | undefined, per_page: number | null | undefined, order_by: string | null | undefined, order: string | null | undefined, requestBody: FilterVendorRequest): Observable<UserList> {
			return this.http.post<UserList>(this.baseUri + 'users/filter?page=' + page + '&per_page=' + per_page + '&order_by=' + (order_by == null ? '' : encodeURIComponent(order_by)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends password reset email to the user's registered email address
		 * Post users/send-password-reminder
		 * @return {OperationStatus} Successful operation
		 */
		SendPasswordReminder(requestBody: Email): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + 'users/send-password-reminder', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns all vendor tags for vendors filter
		 * Returns all vendor tags for vendors filter
		 * Get users/tags
		 * @return {Array<VendorTag>} Successful response tag list
		 */
		GetAllVendorTags(): Observable<Array<VendorTag>> {
			return this.http.get<Array<VendorTag>>(this.baseUri + 'users/tags', {});
		}

		/**
		 * Get user information, including client or vendor specific info.
		 * Get {userId}
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {User} User summary
		 */
		GetUser(userId: string): Observable<User> {
			return this.http.get<User>(this.baseUri + userId + '', {});
		}

		/**
		 * Post {userId}
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {User} User info
		 */
		UpdateUser(userId: string, requestBody: UserUpdateContent): Observable<User> {
			return this.http.post<User>(this.baseUri + userId + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post {userId}/approve
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Vendor application of this user is approved. User is ready to work with us.
		 */
		ApproveVendorApplication(userId: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/approve', null, {});
		}

		/**
		 * Delete requester account
		 * Delete {userId}/delete-account
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Successful operation
		 */
		DeleteUserAccount(userId: string): Observable<OperationStatus> {
			return this.http.delete<OperationStatus>(this.baseUri + userId + '/delete-account', {});
		}

		/**
		 * Get a list of your documents
		 * Get a list of your documents
		 * Get {userId}/documents
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {boolean} recent When true, this will return the most 4 recent active documents.
		 * @param {string} language_code searches in source language of documents, in source and target languages of document's quote
		 * @param {string} page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {DocumentList} Document list
		 */
		GetUserDocuments(userId: string, recent: boolean | null | undefined, search: string | null | undefined, type_filter: GetDocumentsType_filter | null | undefined, language_code: string | null | undefined, page: string | null | undefined, per_page: string | null | undefined, order_by: GetDocumentsOrder_by | null | undefined, order_type: ListOrderType | null | undefined): Observable<DocumentList> {
			return this.http.get<DocumentList>(this.baseUri + userId + '/documents?recent=' + recent + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&type_filter=' + type_filter + '&language_code=' + (language_code == null ? '' : encodeURIComponent(language_code)) + '&page=' + page + '&per_page=' + per_page + '&order_by=' + order_by + '&order_type=' + order_type + '', {});
		}

		/**
		 * Post {userId}/downgrade-proofreader
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Successful operation
		 */
		DowngradeUserProofreader(userId: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/downgrade-proofreader', null, {});
		}

		/**
		 * Returns your vendor earnings. Includes real-time earnings from ongoing projects, and fixed earnings from completed projects. Also includes total earnings and string edits.
		 * Get {userId}/earnings
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Earnings} Earnings for vendors
		 */
		GetUserEarnings(userId: string): Observable<Earnings> {
			return this.http.get<Earnings>(this.baseUri + userId + '/earnings', {});
		}

		/**
		 * Freeze requester account for project notifications
		 * Post {userId}/freeze-account
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Successful operation
		 */
		FreezeUserAccount(userId: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/freeze-account', null, {});
		}

		/**
		 * Post {userId}/make-proofreader
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Successful operation
		 */
		MakeUserProofreader(userId: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/make-proofreader', null, {});
		}

		/**
		 * Post {userId}/notifications/subscribe
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Saved notification subscription information
		 */
		SubscribeUserNotification(userId: string, requestBody: NotificationSubscription): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/notifications/subscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post {userId}/notifications/unsubscribe
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Deleted notification subscription information
		 */
		UnsubscribeUserNotification(userId: string, requestBody: NotificationSubscription): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/notifications/unsubscribe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View user's payment and billing info
		 * Returns billing and saved credit card information for user, and their corporate account if present & allowed.
		 * Get {userId}/payment
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {PaymentInfo} Returns billing and saved card information for user, and their corporate if present.
		 */
		GetUserPaymentInfo(userId: string): Observable<PaymentInfo> {
			return this.http.get<PaymentInfo>(this.baseUri + userId + '/payment', {});
		}

		/**
		 * Update user payment info
		 * Update user's billing and saved credit card information
		 * Post {userId}/payment
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Successful operation
		 */
		UpdateUserPaymentInfo(userId: string, requestBody: PaymentInfo): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/payment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of permissions that this user is authorized for.
		 * Get {userId}/permissions
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {PermissionList} List of permission strings
		 */
		GetUserPermissions(userId: string): Observable<PermissionList> {
			return this.http.get<PermissionList>(this.baseUri + userId + '/permissions', {});
		}

		/**
		 * Post {userId}/profile-picture
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Successful operation
		 */
		UploadUserProfilePicture(userId: string, requestBody: ProfilePictureUpload): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/profile-picture', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of user/vendor projects
		 * Get a list of user/vendor projects
		 * Get {userId}/projects/vendor
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {boolean} joined Return only projects that this user has already joined
		 * @param {boolean} completed Return only projects that have been completed. When `true`, this makes `joined` true as well.
		 * @param {string} page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {string} per_page Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ProjectList} Vendor project list
		 */
		GetVendorProjectsByUserId(userId: string, joined: boolean | null | undefined, completed: boolean | null | undefined, page: string | null | undefined, per_page: string | null | undefined): Observable<ProjectList> {
			return this.http.get<ProjectList>(this.baseUri + userId + '/projects/vendor?joined=' + joined + '&completed=' + completed + '&page=' + page + '&per_page=' + per_page + '', {});
		}

		/**
		 * Post {userId}/reject
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Vendor application of this user is rejected.
		 */
		RejectVendorApplication(userId: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/reject', null, {});
		}

		/**
		 * Sends email confirmation email for a user
		 * Post {userId}/resend-email-confirmation
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} confirmation email has been sent
		 */
		SendUserEmailConfirmation(userId: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/resend-email-confirmation', null, {});
		}

		/**
		 * Returns a user's vendor responsivity stats
		 * Get {userId}/responsivity
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @param {GetResponsivityPeriod} period Period for calcualtion.
		 * @return {ResponsivityList} Vendor responsivity stats
		 */
		GetUserResponsivity(userId: string, period: GetResponsivityPeriod | null | undefined): Observable<ResponsivityList> {
			return this.http.get<ResponsivityList>(this.baseUri + userId + '/responsivity?period=' + period + '', {});
		}

		/**
		 * Returns a user's client and vendor statistics. This used to be called "summary" (\@deprecated).
		 * Get {userId}/stats
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {Stats} User stats for client and vendors
		 */
		GetUserStats(userId: string): Observable<Stats> {
			return this.http.get<Stats>(this.baseUri + userId + '/stats', {});
		}

		/**
		 * Returns the language pairs that the user has ordered most.
		 * Get {userId}/stats/popular-pairs
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {PopularLanguagePairs} User's most ordered language pairs
		 */
		GetUserPopularPairs(userId: string): Observable<PopularLanguagePairs> {
			return this.http.get<PopularLanguagePairs>(this.baseUri + userId + '/stats/popular-pairs', {});
		}

		/**
		 * Returns a user's project statistics.
		 * Get {userId}/stats/projects
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {ClientProjectStats} User stats for client and vendors
		 */
		GetUserProjectStats(userId: string): Observable<ClientProjectStats> {
			return this.http.get<ClientProjectStats>(this.baseUri + userId + '/stats/projects', {});
		}

		/**
		 * Post {userId}/suspend
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Suspended user account.
		 */
		SuspendUser(userId: string, requestBody: SuspendUserRequest): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/suspend', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unfreeze requester account for project notifications
		 * Post {userId}/unfreeze-account
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {OperationStatus} Successful operation
		 */
		UnfreezeUserAccount(userId: string): Observable<OperationStatus> {
			return this.http.post<OperationStatus>(this.baseUri + userId + '/unfreeze-account', null, {});
		}

		/**
		 * Returns a list of user groups that this user belongs to.
		 * Get {userId}/user-groups
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UserGroupList} List of user groups
		 */
		GetThisUserGroups(userId: string): Observable<UserGroupList> {
			return this.http.get<UserGroupList>(this.baseUri + userId + '/user-groups', {});
		}

		/**
		 * Post {userId}/user-groups
		 * @param {string} userId User ID
		 *     Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 * @return {UserGroupList} List of user groups
		 */
		UpdateUserGroup(userId: string, requestBody: ActiveWidget): Observable<UserGroupList> {
			return this.http.post<UserGroupList>(this.baseUri + userId + '/user-groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GetContinuousProjectsType { active = 'active' }

	export enum GetDocumentsType_filter { ALL = 'ALL', TEXT_DOCUMENTS = 'TEXT_DOCUMENTS', PRESENTATIONS = 'PRESENTATIONS', SPREADSHEETS = 'SPREADSHEETS', PDFS = 'PDFS', IMAGES = 'IMAGES', SUBTITLES = 'SUBTITLES', DESIGNS = 'DESIGNS', LOCALIZATION = 'LOCALIZATION', WEB = 'WEB', STYLE_GUIDES = 'STYLE_GUIDES', GLOSSARIES = 'GLOSSARIES' }

	export enum GetDocumentsOrder_by { id = 'id', updated_at = 'updated_at', created_at = 'created_at', name = 'name' }

	export enum GetProjectsOrder_by { id = 'id', status = 'status', delivery = 'delivery', price = 'price' }

	export enum TriggerCallbackActionType { translated = 'translated', proofread = 'proofread', completed = 'completed' }

	export enum GetResponsivityPeriod { monthly = 'monthly', weekly = 'weekly' }

	export enum GetUsersUser_type { vendor = 'vendor', all = 'all' }

}

