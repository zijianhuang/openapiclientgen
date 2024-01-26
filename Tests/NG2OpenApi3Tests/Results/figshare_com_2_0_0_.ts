import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account {

		/**
		 * Account activity status
		 * Required
		 */
		active: number;

		/**
		 * Date when account was created
		 * Required
		 */
		created_date: string;

		/**
		 * User email
		 * Required
		 */
		email: string;

		/**
		 * First Name
		 * Required
		 */
		first_name: string;

		/**
		 * Account group id
		 * Required
		 */
		group_id: number;

		/**
		 * Account id
		 * Required
		 */
		id: number;

		/**
		 * Account institution
		 * Required
		 */
		institution_id: number;

		/**
		 * Account institution user id
		 * Required
		 */
		institution_user_id: string;

		/**
		 * Last Name
		 * Required
		 */
		last_name: string;

		/**
		 * Maximum upload size for account
		 * Required
		 */
		maximum_file_size: number;

		/**
		 * Date of last account modification
		 * Required
		 */
		modified_date: string;

		/**
		 * True if a quota request is pending
		 * Required
		 */
		pending_quota_request: boolean;

		/**
		 * Account quota
		 * Required
		 */
		quota: number;

		/**
		 * Account total used quota
		 * Required
		 */
		used_quota: number;

		/**
		 * Account used private quota
		 * Required
		 */
		used_quota_private: number;

		/**
		 * Account public used quota
		 * Required
		 */
		used_quota_public: number;
	}
	export interface AccountFormProperties {

		/**
		 * Account activity status
		 * Required
		 */
		active: FormControl<number | null | undefined>,

		/**
		 * Date when account was created
		 * Required
		 */
		created_date: FormControl<string | null | undefined>,

		/**
		 * User email
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * First Name
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Account group id
		 * Required
		 */
		group_id: FormControl<number | null | undefined>,

		/**
		 * Account id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Account institution
		 * Required
		 */
		institution_id: FormControl<number | null | undefined>,

		/**
		 * Account institution user id
		 * Required
		 */
		institution_user_id: FormControl<string | null | undefined>,

		/**
		 * Last Name
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,

		/**
		 * Maximum upload size for account
		 * Required
		 */
		maximum_file_size: FormControl<number | null | undefined>,

		/**
		 * Date of last account modification
		 * Required
		 */
		modified_date: FormControl<string | null | undefined>,

		/**
		 * True if a quota request is pending
		 * Required
		 */
		pending_quota_request: FormControl<boolean | null | undefined>,

		/**
		 * Account quota
		 * Required
		 */
		quota: FormControl<number | null | undefined>,

		/**
		 * Account total used quota
		 * Required
		 */
		used_quota: FormControl<number | null | undefined>,

		/**
		 * Account used private quota
		 * Required
		 */
		used_quota_private: FormControl<number | null | undefined>,

		/**
		 * Account public used quota
		 * Required
		 */
		used_quota_public: FormControl<number | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			active: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			created_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			institution_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			institution_user_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maximum_file_size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			modified_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pending_quota_request: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			quota: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			used_quota: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			used_quota_private: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			used_quota_public: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccountCreate {

		/**
		 * Email of account
		 * Required
		 * Max length: 150
		 * Min length: 3
		 */
		email: string;

		/**
		 * First Name
		 * Required
		 * Max length: 30
		 */
		first_name: string;

		/** Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups */
		group_id?: number | null;

		/**
		 * Institution user id
		 * Max length: 50
		 */
		institution_user_id?: string | null;

		/** Is account active */
		is_active?: boolean | null;

		/**
		 * Last Name
		 * Max length: 30
		 */
		last_name?: string | null;

		/** Account quota */
		quota?: number | null;

		/**
		 * Symplectic user id
		 * Max length: 50
		 */
		symplectic_user_id?: string | null;
	}
	export interface AccountCreateFormProperties {

		/**
		 * Email of account
		 * Required
		 * Max length: 150
		 * Min length: 3
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * First Name
		 * Required
		 * Max length: 30
		 */
		first_name: FormControl<string | null | undefined>,

		/** Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups */
		group_id: FormControl<number | null | undefined>,

		/**
		 * Institution user id
		 * Max length: 50
		 */
		institution_user_id: FormControl<string | null | undefined>,

		/** Is account active */
		is_active: FormControl<boolean | null | undefined>,

		/**
		 * Last Name
		 * Max length: 30
		 */
		last_name: FormControl<string | null | undefined>,

		/** Account quota */
		quota: FormControl<number | null | undefined>,

		/**
		 * Symplectic user id
		 * Max length: 50
		 */
		symplectic_user_id: FormControl<string | null | undefined>,
	}
	export function CreateAccountCreateFormGroup() {
		return new FormGroup<AccountCreateFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(150)]),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(30)]),
			group_id: new FormControl<number | null | undefined>(undefined),
			institution_user_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
			is_active: new FormControl<boolean | null | undefined>(undefined),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(30)]),
			quota: new FormControl<number | null | undefined>(undefined),
			symplectic_user_id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(50)]),
		});

	}

	export interface AccountGroupRoles {
	}
	export interface AccountGroupRolesFormProperties {
	}
	export function CreateAccountGroupRolesFormGroup() {
		return new FormGroup<AccountGroupRolesFormProperties>({
		});

	}

	export interface AccountGroupRolesCreate {
	}
	export interface AccountGroupRolesCreateFormProperties {
	}
	export function CreateAccountGroupRolesCreateFormGroup() {
		return new FormGroup<AccountGroupRolesCreateFormProperties>({
		});

	}

	export interface AccountReport {

		/**
		 * The ID of the account which generated this report.
		 * Required
		 */
		account_id: number;

		/**
		 * Date when the AccountReport was requested
		 * Required
		 */
		created_date: string;

		/**
		 * The download link for the generated XLSX
		 * Required
		 */
		download_url: string;

		/**
		 * The group ID that was used to filter the report, if any.
		 * Required
		 */
		group_id: number;

		/**
		 * A unique ID for the AccountRecord
		 * Required
		 */
		id: number;

		/**
		 * Status of the report
		 * Required
		 */
		status: AccountReportStatus;
	}
	export interface AccountReportFormProperties {

		/**
		 * The ID of the account which generated this report.
		 * Required
		 */
		account_id: FormControl<number | null | undefined>,

		/**
		 * Date when the AccountReport was requested
		 * Required
		 */
		created_date: FormControl<string | null | undefined>,

		/**
		 * The download link for the generated XLSX
		 * Required
		 */
		download_url: FormControl<string | null | undefined>,

		/**
		 * The group ID that was used to filter the report, if any.
		 * Required
		 */
		group_id: FormControl<number | null | undefined>,

		/**
		 * A unique ID for the AccountRecord
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Status of the report
		 * Required
		 */
		status: FormControl<AccountReportStatus | null | undefined>,
	}
	export function CreateAccountReportFormGroup() {
		return new FormGroup<AccountReportFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			created_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			download_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AccountReportStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccountReportStatus { missing = 0, pending = 1, done = 2 }

	export interface AccountUpdate {

		/**
		 * Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
		 * Required
		 */
		group_id: number;

		/**
		 * Is account active
		 * Required
		 */
		is_active: boolean;
	}
	export interface AccountUpdateFormProperties {

		/**
		 * Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups
		 * Required
		 */
		group_id: FormControl<number | null | undefined>,

		/**
		 * Is account active
		 * Required
		 */
		is_active: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountUpdateFormGroup() {
		return new FormGroup<AccountUpdateFormProperties>({
			group_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			is_active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Article {

		/**
		 * Type of article identifier
		 * Required
		 */
		defined_type: number;

		/**
		 * Name of the article type identifier
		 * Required
		 */
		defined_type_name: string;

		/**
		 * DOI
		 * Required
		 */
		doi: string;

		/**
		 * Group ID
		 * Required
		 */
		group_id: number;

		/**
		 * Handle
		 * Required
		 */
		handle: string;

		/**
		 * Unique identifier for article
		 * Required
		 */
		id: number;

		/**
		 * Posted date
		 * Required
		 */
		published_date: string;

		/**
		 * Thumbnail image
		 * Required
		 */
		thumb: string;

		/** Required */
		timeline: Timeline;

		/**
		 * Title of article
		 * Required
		 */
		title: string;

		/**
		 * Api endpoint for article
		 * Required
		 */
		url: string;

		/**
		 * Private Api endpoint for article
		 * Required
		 */
		url_private_api: string;

		/**
		 * Private site endpoint for article
		 * Required
		 */
		url_private_html: string;

		/**
		 * Public Api endpoint for article
		 * Required
		 */
		url_public_api: string;

		/**
		 * Public site endpoint for article
		 * Required
		 */
		url_public_html: string;
	}
	export interface ArticleFormProperties {

		/**
		 * Type of article identifier
		 * Required
		 */
		defined_type: FormControl<number | null | undefined>,

		/**
		 * Name of the article type identifier
		 * Required
		 */
		defined_type_name: FormControl<string | null | undefined>,

		/**
		 * DOI
		 * Required
		 */
		doi: FormControl<string | null | undefined>,

		/**
		 * Group ID
		 * Required
		 */
		group_id: FormControl<number | null | undefined>,

		/**
		 * Handle
		 * Required
		 */
		handle: FormControl<string | null | undefined>,

		/**
		 * Unique identifier for article
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Posted date
		 * Required
		 */
		published_date: FormControl<string | null | undefined>,

		/**
		 * Thumbnail image
		 * Required
		 */
		thumb: FormControl<string | null | undefined>,

		/**
		 * Title of article
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Api endpoint for article
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Private Api endpoint for article
		 * Required
		 */
		url_private_api: FormControl<string | null | undefined>,

		/**
		 * Private site endpoint for article
		 * Required
		 */
		url_private_html: FormControl<string | null | undefined>,

		/**
		 * Public Api endpoint for article
		 * Required
		 */
		url_public_api: FormControl<string | null | undefined>,

		/**
		 * Public site endpoint for article
		 * Required
		 */
		url_public_html: FormControl<string | null | undefined>,
	}
	export function CreateArticleFormGroup() {
		return new FormGroup<ArticleFormProperties>({
			defined_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			defined_type_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			doi: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			handle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			published_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			thumb: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_private_api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_private_html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_public_api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_public_html: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Timeline {

		/**
		 * Posted date
		 * Required
		 */
		posted: string;

		/**
		 * Revision date from curation (if curated)
		 * Required
		 */
		revision: string;

		/**
		 * Submission date in curation (if curated)
		 * Required
		 */
		submission: string;
	}
	export interface TimelineFormProperties {

		/**
		 * Posted date
		 * Required
		 */
		posted: FormControl<string | null | undefined>,

		/**
		 * Revision date from curation (if curated)
		 * Required
		 */
		revision: FormControl<string | null | undefined>,

		/**
		 * Submission date in curation (if curated)
		 * Required
		 */
		submission: FormControl<string | null | undefined>,
	}
	export function CreateTimelineFormGroup() {
		return new FormGroup<TimelineFormProperties>({
			posted: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revision: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			submission: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArticleComplete {

		/**
		 * List of article authors
		 * Required
		 */
		authors: Array<Author>;

		/**
		 * List of custom fields values
		 * Required
		 */
		custom_fields: Array<CustomArticleField>;

		/**
		 * List of embargo options
		 * Required
		 */
		embargo_options: Array<GroupEmbargoOptions>;

		/**
		 * Article public url
		 * Required
		 */
		figshare_url: string;

		/**
		 * List of article files
		 * Required
		 */
		files: Array<PublicFile>;

		/**
		 * Article DOI
		 * Required
		 */
		resource_doi: string;

		/**
		 * Article resource title
		 * Required
		 */
		resource_title: string;
	}
	export interface ArticleCompleteFormProperties {

		/**
		 * Article public url
		 * Required
		 */
		figshare_url: FormControl<string | null | undefined>,

		/**
		 * Article DOI
		 * Required
		 */
		resource_doi: FormControl<string | null | undefined>,

		/**
		 * Article resource title
		 * Required
		 */
		resource_title: FormControl<string | null | undefined>,
	}
	export function CreateArticleCompleteFormGroup() {
		return new FormGroup<ArticleCompleteFormProperties>({
			figshare_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_doi: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Author {

		/**
		 * Author full name
		 * Required
		 */
		full_name: string;

		/**
		 * Author id
		 * Required
		 */
		id: number;

		/**
		 * True if author has published items
		 * Required
		 */
		is_active: boolean;

		/**
		 * Author Orcid
		 * Required
		 */
		orcid_id: string;

		/**
		 * Author url name
		 * Required
		 */
		url_name: string;
	}
	export interface AuthorFormProperties {

		/**
		 * Author full name
		 * Required
		 */
		full_name: FormControl<string | null | undefined>,

		/**
		 * Author id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * True if author has published items
		 * Required
		 */
		is_active: FormControl<boolean | null | undefined>,

		/**
		 * Author Orcid
		 * Required
		 */
		orcid_id: FormControl<string | null | undefined>,

		/**
		 * Author url name
		 * Required
		 */
		url_name: FormControl<string | null | undefined>,
	}
	export function CreateAuthorFormGroup() {
		return new FormGroup<AuthorFormProperties>({
			full_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			is_active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			orcid_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomArticleField {

		/**
		 * True if field completion is mandatory
		 * Required
		 */
		is_mandatory: boolean;

		/**
		 * Custom  metadata name
		 * Required
		 */
		name: string;

		/**
		 * Custom metadata value
		 * Required
		 */
		value: string;
	}
	export interface CustomArticleFieldFormProperties {

		/**
		 * True if field completion is mandatory
		 * Required
		 */
		is_mandatory: FormControl<boolean | null | undefined>,

		/**
		 * Custom  metadata name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Custom metadata value
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCustomArticleFieldFormGroup() {
		return new FormGroup<CustomArticleFieldFormProperties>({
			is_mandatory: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GroupEmbargoOptions {

		/**
		 * Embargo option id
		 * Required
		 */
		id: number;

		/**
		 * IP range name; value appears if type is ip_range
		 * Required
		 */
		ip_name: string;

		/**
		 * Embargo permission type
		 * Required
		 */
		type: GroupEmbargoOptionsType;
	}
	export interface GroupEmbargoOptionsFormProperties {

		/**
		 * Embargo option id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * IP range name; value appears if type is ip_range
		 * Required
		 */
		ip_name: FormControl<string | null | undefined>,

		/**
		 * Embargo permission type
		 * Required
		 */
		type: FormControl<GroupEmbargoOptionsType | null | undefined>,
	}
	export function CreateGroupEmbargoOptionsFormGroup() {
		return new FormGroup<GroupEmbargoOptionsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ip_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<GroupEmbargoOptionsType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GroupEmbargoOptionsType { logged_in = 0, ip_range = 1, administrator = 2 }

	export interface PublicFile {

		/**
		 * File computed md5
		 * Required
		 */
		computed_md5: string;

		/**
		 * Url for file download
		 * Required
		 */
		download_url: string;

		/**
		 * File id
		 * Required
		 */
		id: number;

		/**
		 * True if file is hosted somewhere else
		 * Required
		 */
		is_link_only: boolean;

		/**
		 * File name
		 * Required
		 */
		name: string;

		/**
		 * File size
		 * Required
		 */
		size: number;

		/**
		 * File supplied md5
		 * Required
		 */
		supplied_md5: string;
	}
	export interface PublicFileFormProperties {

		/**
		 * File computed md5
		 * Required
		 */
		computed_md5: FormControl<string | null | undefined>,

		/**
		 * Url for file download
		 * Required
		 */
		download_url: FormControl<string | null | undefined>,

		/**
		 * File id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * True if file is hosted somewhere else
		 * Required
		 */
		is_link_only: FormControl<boolean | null | undefined>,

		/**
		 * File name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * File size
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * File supplied md5
		 * Required
		 */
		supplied_md5: FormControl<string | null | undefined>,
	}
	export function CreatePublicFileFormGroup() {
		return new FormGroup<PublicFileFormProperties>({
			computed_md5: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			download_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			is_link_only: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			supplied_md5: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArticleCompletePrivate {

		/**
		 * ID of the account owning the article
		 * Required
		 */
		account_id: number;

		/**
		 * Group resource id
		 * Required
		 */
		group_resource_id: string;
	}
	export interface ArticleCompletePrivateFormProperties {

		/**
		 * ID of the account owning the article
		 * Required
		 */
		account_id: FormControl<number | null | undefined>,

		/**
		 * Group resource id
		 * Required
		 */
		group_resource_id: FormControl<string | null | undefined>,
	}
	export function CreateArticleCompletePrivateFormGroup() {
		return new FormGroup<ArticleCompletePrivateFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			group_resource_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArticleConfidentiality {

		/**
		 * True if article is confidential
		 * Required
		 */
		is_confidential: boolean;

		/**
		 * Reason for confidentiality
		 * Required
		 */
		reason: string;
	}
	export interface ArticleConfidentialityFormProperties {

		/**
		 * True if article is confidential
		 * Required
		 */
		is_confidential: FormControl<boolean | null | undefined>,

		/**
		 * Reason for confidentiality
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateArticleConfidentialityFormGroup() {
		return new FormGroup<ArticleConfidentialityFormProperties>({
			is_confidential: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArticleCreate {

		/** List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint. */
		authors?: Array<string>;

		/** List of category ids to be associated with the article(e.g [1, 23, 33, 66]) */
		categories?: Array<number>;

		/** List of category source ids to be associated with the article, supersedes the categories property */
		categories_by_source_id?: Array<string>;

		/** List of key, values pairs to be associated with the article */
		custom_fields?: string | null;

		/** List of custom fields values, supersedes custom_fields parameter */
		custom_fields_list?: Array<CustomArticleFieldAdd>;

		/** <b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code> */
		defined_type?: string | null;

		/**
		 * The article description. In a publisher case, usually this is the remote article description
		 * Max length: 10000
		 */
		description?: string | null;

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		doi?: string | null;

		/** Grant number or funding authority */
		funding?: string | null;

		/** Funding creation / update items */
		funding_list?: Array<FundingCreate>;

		/** Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups */
		group_id?: number | null;

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		handle?: string | null;

		/** True if article has no files */
		is_metadata_record?: boolean | null;

		/** List of tags to be associated with the article. Tags can be used instead */
		keywords?: Array<string>;

		/** License id for this article. */
		license?: number | null;

		/** Article metadata reason */
		metadata_reason?: string | null;

		/** List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"]) */
		references?: Array<string>;

		/** Not applicable to regular users. In a publisher case, this is the publisher article DOI. */
		resource_doi?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article title. */
		resource_title?: string | null;

		/** List of tags to be associated with the article. Keywords can be used instead */
		tags?: Array<string>;
		timeline?: TimelineUpdate;

		/**
		 * Title of article
		 * Required
		 * Max length: 1000
		 * Min length: 3
		 */
		title: string;
	}
	export interface ArticleCreateFormProperties {

		/** List of key, values pairs to be associated with the article */
		custom_fields: FormControl<string | null | undefined>,

		/** <b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code> */
		defined_type: FormControl<string | null | undefined>,

		/**
		 * The article description. In a publisher case, usually this is the remote article description
		 * Max length: 10000
		 */
		description: FormControl<string | null | undefined>,

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		doi: FormControl<string | null | undefined>,

		/** Grant number or funding authority */
		funding: FormControl<string | null | undefined>,

		/** Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups */
		group_id: FormControl<number | null | undefined>,

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		handle: FormControl<string | null | undefined>,

		/** True if article has no files */
		is_metadata_record: FormControl<boolean | null | undefined>,

		/** License id for this article. */
		license: FormControl<number | null | undefined>,

		/** Article metadata reason */
		metadata_reason: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article DOI. */
		resource_doi: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article title. */
		resource_title: FormControl<string | null | undefined>,

		/**
		 * Title of article
		 * Required
		 * Max length: 1000
		 * Min length: 3
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateArticleCreateFormGroup() {
		return new FormGroup<ArticleCreateFormProperties>({
			custom_fields: new FormControl<string | null | undefined>(undefined),
			defined_type: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000)]),
			doi: new FormControl<string | null | undefined>(undefined),
			funding: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<number | null | undefined>(undefined),
			handle: new FormControl<string | null | undefined>(undefined),
			is_metadata_record: new FormControl<boolean | null | undefined>(undefined),
			license: new FormControl<number | null | undefined>(undefined),
			metadata_reason: new FormControl<string | null | undefined>(undefined),
			resource_doi: new FormControl<string | null | undefined>(undefined),
			resource_title: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]),
		});

	}

	export interface CustomArticleFieldAdd {

		/**
		 * Custom  metadata name
		 * Required
		 */
		name: string;

		/**
		 * Custom metadata value
		 * Required
		 */
		value: any;
	}
	export interface CustomArticleFieldAddFormProperties {

		/**
		 * Custom  metadata name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Custom metadata value
		 * Required
		 */
		value: FormControl<any | null | undefined>,
	}
	export function CreateCustomArticleFieldAddFormGroup() {
		return new FormGroup<CustomArticleFieldAddFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FundingCreate {

		/** A funding ID as returned by the Funding Search endpoint */
		id?: number | null;

		/** The title of the new user created funding */
		title?: string | null;
	}
	export interface FundingCreateFormProperties {

		/** A funding ID as returned by the Funding Search endpoint */
		id: FormControl<number | null | undefined>,

		/** The title of the new user created funding */
		title: FormControl<string | null | undefined>,
	}
	export function CreateFundingCreateFormGroup() {
		return new FormGroup<FundingCreateFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimelineUpdate {

		/** Online posted date */
		firstOnline?: string | null;

		/** Date when the item was accepted for publication */
		publisherAcceptance?: string | null;

		/** Publish date */
		publisherPublication?: string | null;
	}
	export interface TimelineUpdateFormProperties {

		/** Online posted date */
		firstOnline: FormControl<string | null | undefined>,

		/** Date when the item was accepted for publication */
		publisherAcceptance: FormControl<string | null | undefined>,

		/** Publish date */
		publisherPublication: FormControl<string | null | undefined>,
	}
	export function CreateTimelineUpdateFormGroup() {
		return new FormGroup<TimelineUpdateFormProperties>({
			firstOnline: new FormControl<string | null | undefined>(undefined),
			publisherAcceptance: new FormControl<string | null | undefined>(undefined),
			publisherPublication: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ArticleDOI {

		/**
		 * Reserved DOI
		 * Required
		 */
		doi: string;
	}
	export interface ArticleDOIFormProperties {

		/**
		 * Reserved DOI
		 * Required
		 */
		doi: FormControl<string | null | undefined>,
	}
	export function CreateArticleDOIFormGroup() {
		return new FormGroup<ArticleDOIFormProperties>({
			doi: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArticleEmbargo {

		/**
		 * Date when embargo lifts
		 * Required
		 */
		embargo_date: string;

		/**
		 * List of embargo permissions that are associated with the article. If the type is logged_in and the group_ids list is empty, then the whole institution can see the article; if there are multiple group_ids, then only users that are under those groups can see the article.
		 * Required
		 */
		embargo_options: Array<string>;

		/**
		 * Reason for embargo
		 * Required
		 */
		embargo_reason: string;

		/**
		 * Title for embargo
		 * Required
		 */
		embargo_title: string;

		/**
		 * Embargo type
		 * Required
		 */
		embargo_type: string;

		/**
		 * True if embargoed
		 * Required
		 */
		is_embargoed: boolean;
	}
	export interface ArticleEmbargoFormProperties {

		/**
		 * Date when embargo lifts
		 * Required
		 */
		embargo_date: FormControl<string | null | undefined>,

		/**
		 * Reason for embargo
		 * Required
		 */
		embargo_reason: FormControl<string | null | undefined>,

		/**
		 * Title for embargo
		 * Required
		 */
		embargo_title: FormControl<string | null | undefined>,

		/**
		 * Embargo type
		 * Required
		 */
		embargo_type: FormControl<string | null | undefined>,

		/**
		 * True if embargoed
		 * Required
		 */
		is_embargoed: FormControl<boolean | null | undefined>,
	}
	export function CreateArticleEmbargoFormGroup() {
		return new FormGroup<ArticleEmbargoFormProperties>({
			embargo_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			embargo_reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			embargo_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			embargo_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_embargoed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArticleEmbargoUpdater {

		/**
		 * Date when the embargo expires and the article gets published, '0' value will set up permanent embargo
		 * Required
		 */
		embargo_date: string;

		/** List of embargo permissions to be associated with the article. The list must contain `id` and can also contain `group_ids`(a field that only applies to 'logged_in' permissions). The new list replaces old options in the database, and an empty list removes all permissions for this article. Administration permission has to be set up alone but logged in and IP range permissions can be set up together. */
		embargo_options?: Array<string>;

		/** Reason for setting embargo */
		embargo_reason?: string | null;

		/** Title for embargo */
		embargo_title?: string | null;

		/**
		 * Embargo can be enabled at the article or the file level. Possible values: article, file
		 * Required
		 */
		embargo_type: ArticleEmbargoUpdaterEmbargo_type;

		/**
		 * Embargo status
		 * Required
		 */
		is_embargoed: boolean;
	}
	export interface ArticleEmbargoUpdaterFormProperties {

		/**
		 * Date when the embargo expires and the article gets published, '0' value will set up permanent embargo
		 * Required
		 */
		embargo_date: FormControl<string | null | undefined>,

		/** Reason for setting embargo */
		embargo_reason: FormControl<string | null | undefined>,

		/** Title for embargo */
		embargo_title: FormControl<string | null | undefined>,

		/**
		 * Embargo can be enabled at the article or the file level. Possible values: article, file
		 * Required
		 */
		embargo_type: FormControl<ArticleEmbargoUpdaterEmbargo_type | null | undefined>,

		/**
		 * Embargo status
		 * Required
		 */
		is_embargoed: FormControl<boolean | null | undefined>,
	}
	export function CreateArticleEmbargoUpdaterFormGroup() {
		return new FormGroup<ArticleEmbargoUpdaterFormProperties>({
			embargo_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			embargo_reason: new FormControl<string | null | undefined>(undefined),
			embargo_title: new FormControl<string | null | undefined>(undefined),
			embargo_type: new FormControl<ArticleEmbargoUpdaterEmbargo_type | null | undefined>(undefined, [Validators.required]),
			is_embargoed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ArticleEmbargoUpdaterEmbargo_type { article = 0, file = 1 }

	export interface ArticleHandle {

		/**
		 * Reserved Handle
		 * Required
		 */
		handle: string;
	}
	export interface ArticleHandleFormProperties {

		/**
		 * Reserved Handle
		 * Required
		 */
		handle: FormControl<string | null | undefined>,
	}
	export function CreateArticleHandleFormGroup() {
		return new FormGroup<ArticleHandleFormProperties>({
			handle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArticleProjectCreate {

		/** List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint. */
		authors?: Array<string>;

		/** List of category ids to be associated with the article(e.g [1, 23, 33, 66]) */
		categories?: Array<number>;

		/** List of category source ids to be associated with the article, supersedes the categories property */
		categories_by_source_id?: Array<string>;

		/** List of key, values pairs to be associated with the article */
		custom_fields?: string | null;

		/** List of custom fields values, supersedes custom_fields parameter */
		custom_fields_list?: Array<CustomArticleFieldAdd>;

		/** <b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code> */
		defined_type?: string | null;

		/**
		 * The article description. In a publisher case, usually this is the remote article description
		 * Max length: 10000
		 */
		description?: string | null;

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		doi?: string | null;

		/** Grant number or funding authority */
		funding?: string | null;

		/** Funding creation / update items */
		funding_list?: Array<FundingCreate>;

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		handle?: string | null;

		/** List of tags to be associated with the article. Tags can be used instead */
		keywords?: Array<string>;

		/** License id for this article. */
		license?: number | null;

		/** List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"]) */
		references?: Array<string>;

		/** Not applicable to regular users. In a publisher case, this is the publisher article DOI. */
		resource_doi?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article title. */
		resource_title?: string | null;

		/** List of tags to be associated with the article. Keywords can be used instead */
		tags?: Array<string>;
		timeline?: TimelineUpdate;

		/**
		 * Title of article
		 * Required
		 * Max length: 1000
		 * Min length: 3
		 */
		title: string;
	}
	export interface ArticleProjectCreateFormProperties {

		/** List of key, values pairs to be associated with the article */
		custom_fields: FormControl<string | null | undefined>,

		/** <b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code> */
		defined_type: FormControl<string | null | undefined>,

		/**
		 * The article description. In a publisher case, usually this is the remote article description
		 * Max length: 10000
		 */
		description: FormControl<string | null | undefined>,

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		doi: FormControl<string | null | undefined>,

		/** Grant number or funding authority */
		funding: FormControl<string | null | undefined>,

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		handle: FormControl<string | null | undefined>,

		/** License id for this article. */
		license: FormControl<number | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article DOI. */
		resource_doi: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article title. */
		resource_title: FormControl<string | null | undefined>,

		/**
		 * Title of article
		 * Required
		 * Max length: 1000
		 * Min length: 3
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateArticleProjectCreateFormGroup() {
		return new FormGroup<ArticleProjectCreateFormProperties>({
			custom_fields: new FormControl<string | null | undefined>(undefined),
			defined_type: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000)]),
			doi: new FormControl<string | null | undefined>(undefined),
			funding: new FormControl<string | null | undefined>(undefined),
			handle: new FormControl<string | null | undefined>(undefined),
			license: new FormControl<number | null | undefined>(undefined),
			resource_doi: new FormControl<string | null | undefined>(undefined),
			resource_title: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]),
		});

	}

	export interface ArticleSearch {

		/** Only return articles with this doi */
		doi?: string | null;

		/** Only return articles with this handle */
		handle?: string | null;

		/** Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model */
		item_type?: number | null;

		/** The field by which to order */
		order?: ArticleSearchOrder | null;

		/** Only return articles in this project */
		project_id?: number | null;

		/** Only return articles with this resource_doi */
		resource_doi?: string | null;
	}
	export interface ArticleSearchFormProperties {

		/** Only return articles with this doi */
		doi: FormControl<string | null | undefined>,

		/** Only return articles with this handle */
		handle: FormControl<string | null | undefined>,

		/** Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model */
		item_type: FormControl<number | null | undefined>,

		/** The field by which to order */
		order: FormControl<ArticleSearchOrder | null | undefined>,

		/** Only return articles in this project */
		project_id: FormControl<number | null | undefined>,

		/** Only return articles with this resource_doi */
		resource_doi: FormControl<string | null | undefined>,
	}
	export function CreateArticleSearchFormGroup() {
		return new FormGroup<ArticleSearchFormProperties>({
			doi: new FormControl<string | null | undefined>(undefined),
			handle: new FormControl<string | null | undefined>(undefined),
			item_type: new FormControl<number | null | undefined>(undefined),
			order: new FormControl<ArticleSearchOrder | null | undefined>(undefined),
			project_id: new FormControl<number | null | undefined>(undefined),
			resource_doi: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArticleSearchOrder { published_date = 0, modified_date = 1, views = 2, shares = 3, downloads = 4, cites = 5 }

	export interface ArticleUpdate {

		/** List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint. */
		authors?: Array<string>;

		/** List of category ids to be associated with the article(e.g [1, 23, 33, 66]) */
		categories?: Array<number>;

		/** List of category source ids to be associated with the article, supersedes the categories property */
		categories_by_source_id?: Array<string>;

		/** List of key, values pairs to be associated with the article */
		custom_fields?: string | null;

		/** List of custom fields values, supersedes custom_fields parameter */
		custom_fields_list?: Array<CustomArticleFieldAdd>;

		/** <b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code> */
		defined_type?: string | null;

		/**
		 * The article description. In a publisher case, usually this is the remote article description
		 * Max length: 10000
		 */
		description?: string | null;

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		doi?: string | null;

		/** Grant number or funding authority */
		funding?: string | null;

		/** Funding creation / update items */
		funding_list?: Array<FundingCreate>;

		/** Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups */
		group_id?: number | null;

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		handle?: string | null;

		/** True if article has no files */
		is_metadata_record?: boolean | null;

		/** List of tags to be associated with the article. Tags can be used instead */
		keywords?: Array<string>;

		/** License id for this article. */
		license?: number | null;

		/** Article metadata reason */
		metadata_reason?: string | null;

		/** List of links to be associated with the article (e.g ["http://link1", "http://link2", "http://link3"]) */
		references?: Array<string>;

		/** Not applicable to regular users. In a publisher case, this is the publisher article DOI. */
		resource_doi?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article title. */
		resource_title?: string | null;

		/** List of tags to be associated with the article. Keywords can be used instead */
		tags?: Array<string>;
		timeline?: TimelineUpdate;

		/**
		 * Title of article
		 * Max length: 1000
		 * Min length: 3
		 */
		title?: string | null;
	}
	export interface ArticleUpdateFormProperties {

		/** List of key, values pairs to be associated with the article */
		custom_fields: FormControl<string | null | undefined>,

		/** <b>One of:</b> <code>figure</code> <code>online resource</code> <code>preprint</code> <code>book</code> <code>conference contribution</code> <code>media</code> <code>dataset</code> <code>poster</code> <code>journal contribution</code> <code>presentation</code> <code>thesis</code> <code>software</code> */
		defined_type: FormControl<string | null | undefined>,

		/**
		 * The article description. In a publisher case, usually this is the remote article description
		 * Max length: 10000
		 */
		description: FormControl<string | null | undefined>,

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		doi: FormControl<string | null | undefined>,

		/** Grant number or funding authority */
		funding: FormControl<string | null | undefined>,

		/** Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups */
		group_id: FormControl<number | null | undefined>,

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		handle: FormControl<string | null | undefined>,

		/** True if article has no files */
		is_metadata_record: FormControl<boolean | null | undefined>,

		/** License id for this article. */
		license: FormControl<number | null | undefined>,

		/** Article metadata reason */
		metadata_reason: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article DOI. */
		resource_doi: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article title. */
		resource_title: FormControl<string | null | undefined>,

		/**
		 * Title of article
		 * Max length: 1000
		 * Min length: 3
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateArticleUpdateFormGroup() {
		return new FormGroup<ArticleUpdateFormProperties>({
			custom_fields: new FormControl<string | null | undefined>(undefined),
			defined_type: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000)]),
			doi: new FormControl<string | null | undefined>(undefined),
			funding: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<number | null | undefined>(undefined),
			handle: new FormControl<string | null | undefined>(undefined),
			is_metadata_record: new FormControl<boolean | null | undefined>(undefined),
			license: new FormControl<number | null | undefined>(undefined),
			metadata_reason: new FormControl<string | null | undefined>(undefined),
			resource_doi: new FormControl<string | null | undefined>(undefined),
			resource_title: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(1000)]),
		});

	}

	export interface ArticleVersions {

		/**
		 * Api endpoint for the item version
		 * Required
		 */
		url: string;

		/**
		 * Version number
		 * Required
		 */
		version: number;
	}
	export interface ArticleVersionsFormProperties {

		/**
		 * Api endpoint for the item version
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * Version number
		 * Required
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateArticleVersionsFormGroup() {
		return new FormGroup<ArticleVersionsFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArticleWithProject {

		/**
		 * Project id for this article.
		 * Required
		 */
		project_id: number;
	}
	export interface ArticleWithProjectFormProperties {

		/**
		 * Project id for this article.
		 * Required
		 */
		project_id: FormControl<number | null | undefined>,
	}
	export function CreateArticleWithProjectFormGroup() {
		return new FormGroup<ArticleWithProjectFormProperties>({
			project_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ArticlesCreator {

		/**
		 * List of article ids
		 * Required
		 */
		articles: Array<number>;
	}
	export interface ArticlesCreatorFormProperties {
	}
	export function CreateArticlesCreatorFormGroup() {
		return new FormGroup<ArticlesCreatorFormProperties>({
		});

	}

	export interface AuthorComplete {

		/**
		 * First Name
		 * Required
		 */
		first_name: string;

		/**
		 * Group id
		 * Required
		 */
		group_id: number;

		/**
		 * Institution id
		 * Required
		 */
		institution_id: number;

		/**
		 * if 1 then the author has published items
		 * Required
		 */
		is_public: number;

		/**
		 * Job title
		 * Required
		 */
		job_title: string;

		/**
		 * Last Name
		 * Required
		 */
		last_name: string;
	}
	export interface AuthorCompleteFormProperties {

		/**
		 * First Name
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Group id
		 * Required
		 */
		group_id: FormControl<number | null | undefined>,

		/**
		 * Institution id
		 * Required
		 */
		institution_id: FormControl<number | null | undefined>,

		/**
		 * if 1 then the author has published items
		 * Required
		 */
		is_public: FormControl<number | null | undefined>,

		/**
		 * Job title
		 * Required
		 */
		job_title: FormControl<string | null | undefined>,

		/**
		 * Last Name
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,
	}
	export function CreateAuthorCompleteFormGroup() {
		return new FormGroup<AuthorCompleteFormProperties>({
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			institution_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			is_public: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			job_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AuthorsCreator {

		/**
		 * List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.
		 * Required
		 */
		authors: Array<string>;
	}
	export interface AuthorsCreatorFormProperties {
	}
	export function CreateAuthorsCreatorFormGroup() {
		return new FormGroup<AuthorsCreatorFormProperties>({
		});

	}

	export interface CategoriesCreator {

		/**
		 * List of category ids
		 * Required
		 */
		categories: Array<number>;
	}
	export interface CategoriesCreatorFormProperties {
	}
	export function CreateCategoriesCreatorFormGroup() {
		return new FormGroup<CategoriesCreatorFormProperties>({
		});

	}

	export interface Category {

		/**
		 * Category id
		 * Required
		 */
		id: number;

		/**
		 * Parent category
		 * Required
		 */
		parent_id: number;

		/**
		 * Path to all ancestor ids
		 * Required
		 */
		path: string;

		/**
		 * ID in original standard taxonomy
		 * Required
		 */
		source_id: string;

		/**
		 * Internal id of taxonomy the category is part of
		 * Required
		 */
		taxonomy_id: number;

		/**
		 * Category title
		 * Required
		 */
		title: string;
	}
	export interface CategoryFormProperties {

		/**
		 * Category id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Parent category
		 * Required
		 */
		parent_id: FormControl<number | null | undefined>,

		/**
		 * Path to all ancestor ids
		 * Required
		 */
		path: FormControl<string | null | undefined>,

		/**
		 * ID in original standard taxonomy
		 * Required
		 */
		source_id: FormControl<string | null | undefined>,

		/**
		 * Internal id of taxonomy the category is part of
		 * Required
		 */
		taxonomy_id: FormControl<number | null | undefined>,

		/**
		 * Category title
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			parent_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			taxonomy_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Collaborator {

		/**
		 * Collaborator name
		 * Required
		 */
		name: string;

		/**
		 * Collaborator role
		 * Required
		 */
		role_name: string;

		/**
		 * Collaborator id
		 * Required
		 */
		user_id: number;
	}
	export interface CollaboratorFormProperties {

		/**
		 * Collaborator name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Collaborator role
		 * Required
		 */
		role_name: FormControl<string | null | undefined>,

		/**
		 * Collaborator id
		 * Required
		 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateCollaboratorFormGroup() {
		return new FormGroup<CollaboratorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Collection {

		/**
		 * Collection DOI
		 * Required
		 */
		doi: string;

		/**
		 * Collection Handle
		 * Required
		 */
		handle: string;

		/**
		 * Collection id
		 * Required
		 */
		id: number;

		/**
		 * Date when collection was published
		 * Required
		 */
		published_date: string;

		/** Required */
		timeline: Timeline;

		/**
		 * Collection title
		 * Required
		 */
		title: string;

		/**
		 * Api endpoint
		 * Required
		 */
		url: string;
	}
	export interface CollectionFormProperties {

		/**
		 * Collection DOI
		 * Required
		 */
		doi: FormControl<string | null | undefined>,

		/**
		 * Collection Handle
		 * Required
		 */
		handle: FormControl<string | null | undefined>,

		/**
		 * Collection id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Date when collection was published
		 * Required
		 */
		published_date: FormControl<string | null | undefined>,

		/**
		 * Collection title
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Api endpoint
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCollectionFormGroup() {
		return new FormGroup<CollectionFormProperties>({
			doi: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			handle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			published_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CollectionComplete {

		/**
		 * Number of articles in collection
		 * Required
		 */
		articles_count: number;

		/**
		 * List of collection authors
		 * Required
		 */
		authors: Array<Author>;

		/**
		 * List of collection categories
		 * Required
		 */
		categories: Array<Category>;

		/**
		 * Collection citation
		 * Required
		 */
		citation: string;

		/**
		 * Date when collection was created
		 * Required
		 */
		created_date: string;

		/**
		 * Collection custom fields
		 * Required
		 */
		custom_fields: Array<CustomArticleField>;

		/**
		 * Collection description
		 * Required
		 */
		description: string;

		/**
		 * Full Collection funding information
		 * Required
		 */
		funding: Array<FundingInformation>;

		/**
		 * Collection group
		 * Required
		 */
		group_id: number;

		/**
		 * Collection group resource id
		 * Required
		 */
		group_resource_id: string;

		/**
		 * Collection institution
		 * Required
		 */
		institution_id: number;

		/**
		 * Date when collection was last modified
		 * Required
		 */
		modified_date: string;

		/**
		 * True if collection is published
		 * Required
		 */
		public: boolean;

		/**
		 * List of collection references
		 * Required
		 */
		references: Array<string>;

		/**
		 * Collection resource doi
		 * Required
		 */
		resource_doi: string;

		/**
		 * Collection resource id
		 * Required
		 */
		resource_id: string;

		/**
		 * Collection resource link
		 * Required
		 */
		resource_link: string;

		/**
		 * Collection resource title
		 * Required
		 */
		resource_title: string;

		/**
		 * Collection resource version
		 * Required
		 */
		resource_version: number;

		/**
		 * List of collection tags
		 * Required
		 */
		tags: Array<string>;

		/** Required */
		timeline: Timeline;

		/**
		 * Collection version
		 * Required
		 */
		version: number;
	}
	export interface CollectionCompleteFormProperties {

		/**
		 * Number of articles in collection
		 * Required
		 */
		articles_count: FormControl<number | null | undefined>,

		/**
		 * Collection citation
		 * Required
		 */
		citation: FormControl<string | null | undefined>,

		/**
		 * Date when collection was created
		 * Required
		 */
		created_date: FormControl<string | null | undefined>,

		/**
		 * Collection description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Collection group
		 * Required
		 */
		group_id: FormControl<number | null | undefined>,

		/**
		 * Collection group resource id
		 * Required
		 */
		group_resource_id: FormControl<string | null | undefined>,

		/**
		 * Collection institution
		 * Required
		 */
		institution_id: FormControl<number | null | undefined>,

		/**
		 * Date when collection was last modified
		 * Required
		 */
		modified_date: FormControl<string | null | undefined>,

		/**
		 * True if collection is published
		 * Required
		 */
		public: FormControl<boolean | null | undefined>,

		/**
		 * Collection resource doi
		 * Required
		 */
		resource_doi: FormControl<string | null | undefined>,

		/**
		 * Collection resource id
		 * Required
		 */
		resource_id: FormControl<string | null | undefined>,

		/**
		 * Collection resource link
		 * Required
		 */
		resource_link: FormControl<string | null | undefined>,

		/**
		 * Collection resource title
		 * Required
		 */
		resource_title: FormControl<string | null | undefined>,

		/**
		 * Collection resource version
		 * Required
		 */
		resource_version: FormControl<number | null | undefined>,

		/**
		 * Collection version
		 * Required
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateCollectionCompleteFormGroup() {
		return new FormGroup<CollectionCompleteFormProperties>({
			articles_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			citation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			group_resource_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			institution_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			modified_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			resource_doi: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface FundingInformation {

		/**
		 * Funder's name
		 * Required
		 */
		funder_name: string;

		/**
		 * The grant code
		 * Required
		 */
		grant_code: string;

		/**
		 * Funding id
		 * Required
		 */
		id: number;

		/**
		 * Return whether the grant has been introduced manually
		 * Required
		 */
		is_user_defined: boolean;

		/**
		 * The funding name
		 * Required
		 */
		title: string;

		/**
		 * The grant url
		 * Required
		 */
		url: string;
	}
	export interface FundingInformationFormProperties {

		/**
		 * Funder's name
		 * Required
		 */
		funder_name: FormControl<string | null | undefined>,

		/**
		 * The grant code
		 * Required
		 */
		grant_code: FormControl<string | null | undefined>,

		/**
		 * Funding id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Return whether the grant has been introduced manually
		 * Required
		 */
		is_user_defined: FormControl<boolean | null | undefined>,

		/**
		 * The funding name
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * The grant url
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateFundingInformationFormGroup() {
		return new FormGroup<FundingInformationFormProperties>({
			funder_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			grant_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			is_user_defined: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CollectionCompletePrivate {

		/**
		 * ID of the account owning the collection
		 * Required
		 */
		account_id: number;

		/**
		 * Number of articles in collection
		 * Required
		 */
		articles_count: number;

		/**
		 * List of collection authors
		 * Required
		 */
		authors: Array<Author>;

		/**
		 * List of collection categories
		 * Required
		 */
		categories: Array<Category>;

		/**
		 * Collection citation
		 * Required
		 */
		citation: string;

		/**
		 * Date when collection was created
		 * Required
		 */
		created_date: string;

		/**
		 * Collection custom fields
		 * Required
		 */
		custom_fields: Array<CustomArticleField>;

		/**
		 * Collection description
		 * Required
		 */
		description: string;

		/**
		 * Full Collection funding information
		 * Required
		 */
		funding: Array<FundingInformation>;

		/**
		 * Collection group
		 * Required
		 */
		group_id: number;

		/**
		 * Collection group resource id
		 * Required
		 */
		group_resource_id: string;

		/**
		 * Collection institution
		 * Required
		 */
		institution_id: number;

		/**
		 * Date when collection was last modified
		 * Required
		 */
		modified_date: string;

		/**
		 * True if collection is published
		 * Required
		 */
		public: boolean;

		/**
		 * List of collection references
		 * Required
		 */
		references: Array<string>;

		/**
		 * Collection resource doi
		 * Required
		 */
		resource_doi: string;

		/**
		 * Collection resource id
		 * Required
		 */
		resource_id: string;

		/**
		 * Collection resource link
		 * Required
		 */
		resource_link: string;

		/**
		 * Collection resource title
		 * Required
		 */
		resource_title: string;

		/**
		 * Collection resource version
		 * Required
		 */
		resource_version: number;

		/**
		 * List of collection tags
		 * Required
		 */
		tags: Array<string>;

		/** Required */
		timeline: Timeline;

		/**
		 * Collection version
		 * Required
		 */
		version: number;
	}
	export interface CollectionCompletePrivateFormProperties {

		/**
		 * ID of the account owning the collection
		 * Required
		 */
		account_id: FormControl<number | null | undefined>,

		/**
		 * Number of articles in collection
		 * Required
		 */
		articles_count: FormControl<number | null | undefined>,

		/**
		 * Collection citation
		 * Required
		 */
		citation: FormControl<string | null | undefined>,

		/**
		 * Date when collection was created
		 * Required
		 */
		created_date: FormControl<string | null | undefined>,

		/**
		 * Collection description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Collection group
		 * Required
		 */
		group_id: FormControl<number | null | undefined>,

		/**
		 * Collection group resource id
		 * Required
		 */
		group_resource_id: FormControl<string | null | undefined>,

		/**
		 * Collection institution
		 * Required
		 */
		institution_id: FormControl<number | null | undefined>,

		/**
		 * Date when collection was last modified
		 * Required
		 */
		modified_date: FormControl<string | null | undefined>,

		/**
		 * True if collection is published
		 * Required
		 */
		public: FormControl<boolean | null | undefined>,

		/**
		 * Collection resource doi
		 * Required
		 */
		resource_doi: FormControl<string | null | undefined>,

		/**
		 * Collection resource id
		 * Required
		 */
		resource_id: FormControl<string | null | undefined>,

		/**
		 * Collection resource link
		 * Required
		 */
		resource_link: FormControl<string | null | undefined>,

		/**
		 * Collection resource title
		 * Required
		 */
		resource_title: FormControl<string | null | undefined>,

		/**
		 * Collection resource version
		 * Required
		 */
		resource_version: FormControl<number | null | undefined>,

		/**
		 * Collection version
		 * Required
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateCollectionCompletePrivateFormGroup() {
		return new FormGroup<CollectionCompletePrivateFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			articles_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			citation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			group_resource_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			institution_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			modified_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			resource_doi: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_link: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource_version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CollectionCreate {

		/** List of articles to be associated with the collection */
		articles?: Array<number>;

		/** List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint. */
		authors?: Array<string>;

		/** List of category ids to be associated with the collection(e.g [1, 23, 33, 66]) */
		categories?: Array<number>;

		/** List of category source ids to be associated with the collection, supersedes the categories property */
		categories_by_source_id?: Array<string>;

		/** List of key, values pairs to be associated with the collection */
		custom_fields?: string | null;

		/** List of custom fields values, supersedes custom_fields parameter */
		custom_fields_list?: Array<CustomArticleFieldAdd>;

		/**
		 * The collection description. In a publisher case, usually this is the remote collection description
		 * Max length: 10000
		 */
		description?: string | null;

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		doi?: string | null;

		/** Grant number or funding authority */
		funding?: string | null;

		/** Funding creation / update items */
		funding_list?: Array<FundingCreate>;

		/** Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups */
		group_id?: number | null;

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		handle?: string | null;

		/** List of tags to be associated with the collection. Tags can be used instead */
		keywords?: Array<string>;

		/** List of links to be associated with the collection (e.g ["http://link1", "http://link2", "http://link3"]) */
		references?: Array<string>;

		/** Not applicable to regular users. In a publisher case, this is the publisher article DOI. */
		resource_doi?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article id */
		resource_id?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article link */
		resource_link?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article title. */
		resource_title?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article version */
		resource_version?: number | null;

		/** List of tags to be associated with the collection. Keywords can be used instead */
		tags?: Array<string>;
		timeline?: TimelineUpdate;

		/**
		 * Title of collection
		 * Required
		 * Max length: 1000
		 * Min length: 3
		 */
		title: string;
	}
	export interface CollectionCreateFormProperties {

		/** List of key, values pairs to be associated with the collection */
		custom_fields: FormControl<string | null | undefined>,

		/**
		 * The collection description. In a publisher case, usually this is the remote collection description
		 * Max length: 10000
		 */
		description: FormControl<string | null | undefined>,

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		doi: FormControl<string | null | undefined>,

		/** Grant number or funding authority */
		funding: FormControl<string | null | undefined>,

		/** Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups */
		group_id: FormControl<number | null | undefined>,

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		handle: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article DOI. */
		resource_doi: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article id */
		resource_id: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article link */
		resource_link: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article title. */
		resource_title: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article version */
		resource_version: FormControl<number | null | undefined>,

		/**
		 * Title of collection
		 * Required
		 * Max length: 1000
		 * Min length: 3
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCollectionCreateFormGroup() {
		return new FormGroup<CollectionCreateFormProperties>({
			custom_fields: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000)]),
			doi: new FormControl<string | null | undefined>(undefined),
			funding: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<number | null | undefined>(undefined),
			handle: new FormControl<string | null | undefined>(undefined),
			resource_doi: new FormControl<string | null | undefined>(undefined),
			resource_id: new FormControl<string | null | undefined>(undefined),
			resource_link: new FormControl<string | null | undefined>(undefined),
			resource_title: new FormControl<string | null | undefined>(undefined),
			resource_version: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]),
		});

	}

	export interface CollectionDOI {

		/**
		 * Reserved DOI
		 * Required
		 */
		doi: string;
	}
	export interface CollectionDOIFormProperties {

		/**
		 * Reserved DOI
		 * Required
		 */
		doi: FormControl<string | null | undefined>,
	}
	export function CreateCollectionDOIFormGroup() {
		return new FormGroup<CollectionDOIFormProperties>({
			doi: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CollectionHandle {

		/**
		 * Reserved Handle
		 * Required
		 */
		handle: string;
	}
	export interface CollectionHandleFormProperties {

		/**
		 * Reserved Handle
		 * Required
		 */
		handle: FormControl<string | null | undefined>,
	}
	export function CreateCollectionHandleFormGroup() {
		return new FormGroup<CollectionHandleFormProperties>({
			handle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CollectionPrivateLinkCreator {

		/** Date when this private link should expire - optional. By default private links expire in 365 days. */
		expires_date?: string | null;

		/** Optional, default true. Set to false to give private link users editing rights for this collection. */
		read_only?: boolean | null;
	}
	export interface CollectionPrivateLinkCreatorFormProperties {

		/** Date when this private link should expire - optional. By default private links expire in 365 days. */
		expires_date: FormControl<string | null | undefined>,

		/** Optional, default true. Set to false to give private link users editing rights for this collection. */
		read_only: FormControl<boolean | null | undefined>,
	}
	export function CreateCollectionPrivateLinkCreatorFormGroup() {
		return new FormGroup<CollectionPrivateLinkCreatorFormProperties>({
			expires_date: new FormControl<string | null | undefined>(undefined),
			read_only: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CollectionSearch {

		/** Only return collections with this doi */
		doi?: string | null;

		/** Only return collections with this handle */
		handle?: string | null;

		/** The field by which to order. */
		order?: CollectionSearchOrder | null;

		/** Only return collections with this resource_doi */
		resource_doi?: string | null;
	}
	export interface CollectionSearchFormProperties {

		/** Only return collections with this doi */
		doi: FormControl<string | null | undefined>,

		/** Only return collections with this handle */
		handle: FormControl<string | null | undefined>,

		/** The field by which to order. */
		order: FormControl<CollectionSearchOrder | null | undefined>,

		/** Only return collections with this resource_doi */
		resource_doi: FormControl<string | null | undefined>,
	}
	export function CreateCollectionSearchFormGroup() {
		return new FormGroup<CollectionSearchFormProperties>({
			doi: new FormControl<string | null | undefined>(undefined),
			handle: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<CollectionSearchOrder | null | undefined>(undefined),
			resource_doi: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CollectionSearchOrder { published_date = 0, modified_date = 1, views = 2, shares = 3, cites = 4 }

	export interface CollectionUpdate {

		/** List of articles to be associated with the collection */
		articles?: Array<number>;

		/** List of authors to be associated with the collection. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint. */
		authors?: Array<string>;

		/** List of category ids to be associated with the collection (e.g [1, 23, 33, 66]) */
		categories?: Array<number>;

		/** List of category source ids to be associated with the article, supersedes the categories property */
		categories_by_source_id?: Array<string>;

		/** List of key, values pairs to be associated with the collection */
		custom_fields?: string | null;

		/** List of custom fields values, supersedes custom_fields parameter */
		custom_fields_list?: Array<CustomArticleFieldAdd>;

		/**
		 * The collection description. In a publisher case, usually this is the remote collection description
		 * Max length: 10000
		 */
		description?: string | null;

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		doi?: string | null;

		/** Grant number or funding authority */
		funding?: string | null;

		/** Funding creation / update items */
		funding_list?: Array<FundingCreate>;

		/** Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups */
		group_id?: number | null;

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		handle?: string | null;

		/** List of tags to be associated with the collection. Tags can be used instead */
		keywords?: Array<string>;

		/** List of links to be associated with the collection (e.g ["http://link1", "http://link2", "http://link3"]) */
		references?: Array<string>;

		/** Not applicable to regular users. In a publisher case, this is the publisher article DOI. */
		resource_doi?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article id */
		resource_id?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article link */
		resource_link?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article title. */
		resource_title?: string | null;

		/** Not applicable to regular users. In a publisher case, this is the publisher article version */
		resource_version?: number | null;

		/** List of tags to be associated with the collection. Keywords can be used instead */
		tags?: Array<string>;
		timeline?: TimelineUpdate;

		/**
		 * Title of collection
		 * Max length: 1000
		 * Min length: 3
		 */
		title?: string | null;
	}
	export interface CollectionUpdateFormProperties {

		/** List of key, values pairs to be associated with the collection */
		custom_fields: FormControl<string | null | undefined>,

		/**
		 * The collection description. In a publisher case, usually this is the remote collection description
		 * Max length: 10000
		 */
		description: FormControl<string | null | undefined>,

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting DOIs. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		doi: FormControl<string | null | undefined>,

		/** Grant number or funding authority */
		funding: FormControl<string | null | undefined>,

		/** Not applicable to regular users. This field is reserved to institutions/publishers with access to assign to specific groups */
		group_id: FormControl<number | null | undefined>,

		/** Not applicable for regular users. In an institutional case, make sure your group supports setting Handles. This setting is applied by figshare via opening a ticket through our support/helpdesk system. */
		handle: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article DOI. */
		resource_doi: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article id */
		resource_id: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article link */
		resource_link: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article title. */
		resource_title: FormControl<string | null | undefined>,

		/** Not applicable to regular users. In a publisher case, this is the publisher article version */
		resource_version: FormControl<number | null | undefined>,

		/**
		 * Title of collection
		 * Max length: 1000
		 * Min length: 3
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCollectionUpdateFormGroup() {
		return new FormGroup<CollectionUpdateFormProperties>({
			custom_fields: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000)]),
			doi: new FormControl<string | null | undefined>(undefined),
			funding: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<number | null | undefined>(undefined),
			handle: new FormControl<string | null | undefined>(undefined),
			resource_doi: new FormControl<string | null | undefined>(undefined),
			resource_id: new FormControl<string | null | undefined>(undefined),
			resource_link: new FormControl<string | null | undefined>(undefined),
			resource_title: new FormControl<string | null | undefined>(undefined),
			resource_version: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(1000)]),
		});

	}

	export interface CollectionVersions {

		/**
		 * Version number
		 * Required
		 */
		id: number;

		/**
		 * Api endpoint for the collection version
		 * Required
		 */
		url: string;
	}
	export interface CollectionVersionsFormProperties {

		/**
		 * Version number
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Api endpoint for the collection version
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCollectionVersionsFormGroup() {
		return new FormGroup<CollectionVersionsFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CommonSearch {

		/** only return collections from this group */
		group?: number | null;

		/** only return collections from this institution */
		institution?: number | null;

		/**
		 * Number of results included on a page. Used for pagination with query
		 * Minimum: 1
		 * Maximum: 1000
		 */
		limit?: number | null;

		/** Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD */
		modified_since?: string | null;

		/**
		 * Where to start the listing(the offset of the first result). Used for pagination with limit
		 * Minimum: 0
		 * Maximum: 5000
		 */
		offset?: number | null;

		/** Direction of ordering */
		order_direction?: CommonSearchOrder_direction | null;

		/**
		 * Page number. Used for pagination with page_size
		 * Minimum: 1
		 * Maximum: 5000
		 */
		page?: number | null;

		/**
		 * The number of results included on a page. Used for pagination with page
		 * Minimum: 1
		 * Maximum: 1000
		 */
		page_size?: number | null;

		/** Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD */
		published_since?: string | null;

		/** Search term */
		search_for?: string | null;
	}
	export interface CommonSearchFormProperties {

		/** only return collections from this group */
		group: FormControl<number | null | undefined>,

		/** only return collections from this institution */
		institution: FormControl<number | null | undefined>,

		/**
		 * Number of results included on a page. Used for pagination with query
		 * Minimum: 1
		 * Maximum: 1000
		 */
		limit: FormControl<number | null | undefined>,

		/** Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD */
		modified_since: FormControl<string | null | undefined>,

		/**
		 * Where to start the listing(the offset of the first result). Used for pagination with limit
		 * Minimum: 0
		 * Maximum: 5000
		 */
		offset: FormControl<number | null | undefined>,

		/** Direction of ordering */
		order_direction: FormControl<CommonSearchOrder_direction | null | undefined>,

		/**
		 * Page number. Used for pagination with page_size
		 * Minimum: 1
		 * Maximum: 5000
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * The number of results included on a page. Used for pagination with page
		 * Minimum: 1
		 * Maximum: 1000
		 */
		page_size: FormControl<number | null | undefined>,

		/** Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD */
		published_since: FormControl<string | null | undefined>,

		/** Search term */
		search_for: FormControl<string | null | undefined>,
	}
	export function CreateCommonSearchFormGroup() {
		return new FormGroup<CommonSearchFormProperties>({
			group: new FormControl<number | null | undefined>(undefined),
			institution: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			modified_since: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(5000)]),
			order_direction: new FormControl<CommonSearchOrder_direction | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5000)]),
			page_size: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			published_since: new FormControl<string | null | undefined>(undefined),
			search_for: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommonSearchOrder_direction { asc = 0, desc = 1 }

	export interface ConfidentialityCreator {

		/**
		 * Reason for confidentiality
		 * Required
		 */
		reason: string;
	}
	export interface ConfidentialityCreatorFormProperties {

		/**
		 * Reason for confidentiality
		 * Required
		 */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateConfidentialityCreatorFormGroup() {
		return new FormGroup<ConfidentialityCreatorFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateProjectResponse {

		/**
		 * Figshare ID of the entity
		 * Required
		 */
		entity_id: number;

		/**
		 * Url for entity
		 * Required
		 */
		location: string;
	}
	export interface CreateProjectResponseFormProperties {

		/**
		 * Figshare ID of the entity
		 * Required
		 */
		entity_id: FormControl<number | null | undefined>,

		/**
		 * Url for entity
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectResponseFormGroup() {
		return new FormGroup<CreateProjectResponseFormProperties>({
			entity_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Curation {

		/**
		 * The ID of the account of the owner of the article of this review.
		 * Required
		 */
		account_id: number;

		/**
		 * The ID of the article of this review.
		 * Required
		 */
		article_id: number;

		/**
		 * The ID of the account to which this review is assigned.
		 * Required
		 */
		assigned_to: number;

		/**
		 * The number of comments in the review.
		 * Required
		 */
		comments_count: number;

		/**
		 * The creation date of the review.
		 * Required
		 */
		created_date: string;

		/**
		 * The group in which the article is present.
		 * Required
		 */
		group_id: number;

		/**
		 * The review id
		 * Required
		 */
		id: number;

		/**
		 * The date the review has been modified.
		 * Required
		 */
		modified_date: string;

		/**
		 * The last time a comment has been added to the review.
		 * Required
		 */
		review_date: string;

		/**
		 * The status of the review.
		 * Required
		 */
		status: CurationStatus;

		/**
		 * The Version number of the article in review.
		 * Required
		 */
		version: number;
	}
	export interface CurationFormProperties {

		/**
		 * The ID of the account of the owner of the article of this review.
		 * Required
		 */
		account_id: FormControl<number | null | undefined>,

		/**
		 * The ID of the article of this review.
		 * Required
		 */
		article_id: FormControl<number | null | undefined>,

		/**
		 * The ID of the account to which this review is assigned.
		 * Required
		 */
		assigned_to: FormControl<number | null | undefined>,

		/**
		 * The number of comments in the review.
		 * Required
		 */
		comments_count: FormControl<number | null | undefined>,

		/**
		 * The creation date of the review.
		 * Required
		 */
		created_date: FormControl<string | null | undefined>,

		/**
		 * The group in which the article is present.
		 * Required
		 */
		group_id: FormControl<number | null | undefined>,

		/**
		 * The review id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The date the review has been modified.
		 * Required
		 */
		modified_date: FormControl<string | null | undefined>,

		/**
		 * The last time a comment has been added to the review.
		 * Required
		 */
		review_date: FormControl<string | null | undefined>,

		/**
		 * The status of the review.
		 * Required
		 */
		status: FormControl<CurationStatus | null | undefined>,

		/**
		 * The Version number of the article in review.
		 * Required
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateCurationFormGroup() {
		return new FormGroup<CurationFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			article_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			assigned_to: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			comments_count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			created_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			modified_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			review_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<CurationStatus | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CurationStatus { pending = 0, approved = 1, rejected = 2, closed = 3 }

	export interface CurationComment {

		/**
		 * The ID of the account which generated this comment.
		 * Required
		 */
		account_id: number;

		/**
		 * The ID of the comment.
		 * Required
		 */
		id: number;

		/**
		 * The value/content of the comment.
		 * Required
		 */
		text: string;

		/**
		 * The ID of the account which generated this comment.
		 * Required
		 */
		type: CurationCommentType;
	}
	export interface CurationCommentFormProperties {

		/**
		 * The ID of the account which generated this comment.
		 * Required
		 */
		account_id: FormControl<number | null | undefined>,

		/**
		 * The ID of the comment.
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The value/content of the comment.
		 * Required
		 */
		text: FormControl<string | null | undefined>,

		/**
		 * The ID of the account which generated this comment.
		 * Required
		 */
		type: FormControl<CurationCommentType | null | undefined>,
	}
	export function CreateCurationCommentFormGroup() {
		return new FormGroup<CurationCommentFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CurationCommentType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CurationCommentType { comment = 0, approved = 1, rejected = 2, closed = 3 }

	export interface CurationCommentCreate {

		/**
		 * The contents/value of the comment
		 * Required
		 * Max length: 2000
		 * Min length: 1
		 */
		text: string;
	}
	export interface CurationCommentCreateFormProperties {

		/**
		 * The contents/value of the comment
		 * Required
		 * Max length: 2000
		 * Min length: 1
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateCurationCommentCreateFormGroup() {
		return new FormGroup<CurationCommentCreateFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface CurationDetail {

		/** Required */
		item: ArticleComplete;
	}
	export interface CurationDetailFormProperties {
	}
	export function CreateCurationDetailFormGroup() {
		return new FormGroup<CurationDetailFormProperties>({
		});

	}

	export interface ErrorMessage {

		/** A machine friendly error code, used by the dev team to identify the error. */
		code?: number | null;

		/** A human friendly message explaining the error. */
		message?: string | null;
	}
	export interface ErrorMessageFormProperties {

		/** A machine friendly error code, used by the dev team to identify the error. */
		code: FormControl<number | null | undefined>,

		/** A human friendly message explaining the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorMessageFormGroup() {
		return new FormGroup<ErrorMessageFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FileCreator {

		/** Url for an existing file that will not be uploaded to Figshare */
		link?: string | null;

		/** MD5 sum pre-computed on client side. */
		md5?: string | null;

		/** File name including the extension; can be omitted only for linked files. */
		name?: string | null;

		/** File size in bytes; can be omitted only for linked files. */
		size?: number | null;
	}
	export interface FileCreatorFormProperties {

		/** Url for an existing file that will not be uploaded to Figshare */
		link: FormControl<string | null | undefined>,

		/** MD5 sum pre-computed on client side. */
		md5: FormControl<string | null | undefined>,

		/** File name including the extension; can be omitted only for linked files. */
		name: FormControl<string | null | undefined>,

		/** File size in bytes; can be omitted only for linked files. */
		size: FormControl<number | null | undefined>,
	}
	export function CreateFileCreatorFormGroup() {
		return new FormGroup<FileCreatorFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
			md5: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FileId {

		/** File ID */
		file_id?: number | null;
	}
	export interface FileIdFormProperties {

		/** File ID */
		file_id: FormControl<number | null | undefined>,
	}
	export function CreateFileIdFormGroup() {
		return new FormGroup<FileIdFormProperties>({
			file_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FundingSearch {

		/** Search term */
		search_for?: string | null;
	}
	export interface FundingSearchFormProperties {

		/** Search term */
		search_for: FormControl<string | null | undefined>,
	}
	export function CreateFundingSearchFormGroup() {
		return new FormGroup<FundingSearchFormProperties>({
			search_for: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Group {

		/**
		 * HR code associated with group, if code exists
		 * Required
		 */
		association_criteria: string;

		/**
		 * Group id
		 * Required
		 */
		id: number;

		/**
		 * Group name
		 * Required
		 */
		name: string;

		/**
		 * Parent group if any
		 * Required
		 */
		parent_id: number;

		/**
		 * Group resource id
		 * Required
		 */
		resource_id: string;
	}
	export interface GroupFormProperties {

		/**
		 * HR code associated with group, if code exists
		 * Required
		 */
		association_criteria: FormControl<string | null | undefined>,

		/**
		 * Group id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Group name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Parent group if any
		 * Required
		 */
		parent_id: FormControl<number | null | undefined>,

		/**
		 * Group resource id
		 * Required
		 */
		resource_id: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			association_criteria: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			resource_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Institution {

		/**
		 * Institution domain
		 * Required
		 */
		domain: string;

		/**
		 * Institution id
		 * Required
		 */
		id: number;

		/**
		 * Institution name
		 * Required
		 */
		name: string;
	}
	export interface InstitutionFormProperties {

		/**
		 * Institution domain
		 * Required
		 */
		domain: FormControl<string | null | undefined>,

		/**
		 * Institution id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Institution name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInstitutionFormGroup() {
		return new FormGroup<InstitutionFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InstitutionAccountsSearch {

		/** filter by email */
		email?: string | null;

		/** filter by institution_user_id */
		institution_user_id?: string | null;

		/**
		 * Filter by active status
		 * Minimum: 0
		 * Maximum: 1
		 */
		is_active?: number | null;

		/**
		 * Number of results included on a page. Used for pagination with query
		 * Minimum: 1
		 * Maximum: 1000
		 */
		limit?: number | null;

		/**
		 * Where to start the listing(the offset of the first result). Used for pagination with limit
		 * Minimum: 0
		 * Maximum: 5000
		 */
		offset?: number | null;

		/**
		 * Page number. Used for pagination with page_size
		 * Minimum: 1
		 * Maximum: 5000
		 */
		page?: number | null;

		/**
		 * The number of results included on a page. Used for pagination with page
		 * Minimum: 1
		 * Maximum: 1000
		 */
		page_size?: number | null;

		/** Search term */
		search_for?: string | null;
	}
	export interface InstitutionAccountsSearchFormProperties {

		/** filter by email */
		email: FormControl<string | null | undefined>,

		/** filter by institution_user_id */
		institution_user_id: FormControl<string | null | undefined>,

		/**
		 * Filter by active status
		 * Minimum: 0
		 * Maximum: 1
		 */
		is_active: FormControl<number | null | undefined>,

		/**
		 * Number of results included on a page. Used for pagination with query
		 * Minimum: 1
		 * Maximum: 1000
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Where to start the listing(the offset of the first result). Used for pagination with limit
		 * Minimum: 0
		 * Maximum: 5000
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * Page number. Used for pagination with page_size
		 * Minimum: 1
		 * Maximum: 5000
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * The number of results included on a page. Used for pagination with page
		 * Minimum: 1
		 * Maximum: 1000
		 */
		page_size: FormControl<number | null | undefined>,

		/** Search term */
		search_for: FormControl<string | null | undefined>,
	}
	export function CreateInstitutionAccountsSearchFormGroup() {
		return new FormGroup<InstitutionAccountsSearchFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			institution_user_id: new FormControl<string | null | undefined>(undefined),
			is_active: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(1)]),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(5000)]),
			page: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5000)]),
			page_size: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			search_for: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ItemType {

		/**
		 * The string identifying the icon of the item type.
		 * Required
		 */
		icon: string;

		/**
		 * The ID of the item type.
		 * Required
		 * Minimum: 1
		 */
		id: number;

		/**
		 * The selectable status
		 * Required
		 */
		is_selectable: boolean;

		/**
		 * The name of the item type
		 * Required
		 */
		name: string;

		/**
		 * The description of the item type.
		 * Required
		 */
		public_description: string;

		/**
		 * The string identifier of the item type.
		 * Required
		 */
		string_id: string;

		/**
		 * The URL name of the item type.
		 * Required
		 */
		url_name: string;
	}
	export interface ItemTypeFormProperties {

		/**
		 * The string identifying the icon of the item type.
		 * Required
		 */
		icon: FormControl<string | null | undefined>,

		/**
		 * The ID of the item type.
		 * Required
		 * Minimum: 1
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * The selectable status
		 * Required
		 */
		is_selectable: FormControl<boolean | null | undefined>,

		/**
		 * The name of the item type
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The description of the item type.
		 * Required
		 */
		public_description: FormControl<string | null | undefined>,

		/**
		 * The string identifier of the item type.
		 * Required
		 */
		string_id: FormControl<string | null | undefined>,

		/**
		 * The URL name of the item type.
		 * Required
		 */
		url_name: FormControl<string | null | undefined>,
	}
	export function CreateItemTypeFormGroup() {
		return new FormGroup<ItemTypeFormProperties>({
			icon: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			is_selectable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			string_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface License {

		/**
		 * License name
		 * Required
		 */
		name: string;

		/**
		 * License url
		 * Required
		 */
		url: string;

		/**
		 * License value
		 * Required
		 */
		value: number;
	}
	export interface LicenseFormProperties {

		/**
		 * License name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * License url
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * License value
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateLicenseFormGroup() {
		return new FormGroup<LicenseFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Location {

		/**
		 * Url for item
		 * Required
		 */
		location: string;
	}
	export interface LocationFormProperties {

		/**
		 * Url for item
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LocationWarnings {

		/**
		 * Figshare ID of the entity
		 * Required
		 */
		entity_id: number;

		/**
		 * Url for entity
		 * Required
		 */
		location: string;

		/**
		 * Issues encountered during the operation
		 * Required
		 */
		warnings: Array<string>;
	}
	export interface LocationWarningsFormProperties {

		/**
		 * Figshare ID of the entity
		 * Required
		 */
		entity_id: FormControl<number | null | undefined>,

		/**
		 * Url for entity
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateLocationWarningsFormGroup() {
		return new FormGroup<LocationWarningsFormProperties>({
			entity_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LocationWarningsUpdate {

		/**
		 * Url for entity
		 * Required
		 */
		location: string;

		/**
		 * Issues encountered during the operation
		 * Required
		 */
		warnings: Array<string>;
	}
	export interface LocationWarningsUpdateFormProperties {

		/**
		 * Url for entity
		 * Required
		 */
		location: FormControl<string | null | undefined>,
	}
	export function CreateLocationWarningsUpdateFormGroup() {
		return new FormGroup<LocationWarningsUpdateFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrivateArticleSearch {

		/** only return collections with this resource_id */
		resource_id?: string | null;
	}
	export interface PrivateArticleSearchFormProperties {

		/** only return collections with this resource_id */
		resource_id: FormControl<string | null | undefined>,
	}
	export function CreatePrivateArticleSearchFormGroup() {
		return new FormGroup<PrivateArticleSearchFormProperties>({
			resource_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrivateAuthorsSearch {

		/** Return only authors in this group or subgroups of the group */
		group_id?: number | null;

		/** Return only authors associated to this institution */
		institution_id?: number | null;

		/** Return only active authors if True */
		is_active?: boolean | null;

		/** Return only authors that have published items if True */
		is_public?: boolean | null;

		/**
		 * Number of results included on a page. Used for pagination with query
		 * Minimum: 1
		 * Maximum: 1000
		 */
		limit?: number | null;

		/**
		 * Where to start the listing(the offset of the first result). Used for pagination with limit
		 * Minimum: 0
		 * Maximum: 5000
		 */
		offset?: number | null;

		/** Orcid of author */
		orcid?: string | null;

		/** The field by which to order. Default varies by endpoint/resource. */
		order?: ArticleSearchOrder | null;

		/** Direction of ordering */
		order_direction?: CommonSearchOrder_direction | null;

		/**
		 * Page number. Used for pagination with page_size
		 * Minimum: 1
		 * Maximum: 5000
		 */
		page?: number | null;

		/**
		 * The number of results included on a page. Used for pagination with page
		 * Minimum: 1
		 * Maximum: 1000
		 */
		page_size?: number | null;

		/** Search term */
		search_for?: string | null;
	}
	export interface PrivateAuthorsSearchFormProperties {

		/** Return only authors in this group or subgroups of the group */
		group_id: FormControl<number | null | undefined>,

		/** Return only authors associated to this institution */
		institution_id: FormControl<number | null | undefined>,

		/** Return only active authors if True */
		is_active: FormControl<boolean | null | undefined>,

		/** Return only authors that have published items if True */
		is_public: FormControl<boolean | null | undefined>,

		/**
		 * Number of results included on a page. Used for pagination with query
		 * Minimum: 1
		 * Maximum: 1000
		 */
		limit: FormControl<number | null | undefined>,

		/**
		 * Where to start the listing(the offset of the first result). Used for pagination with limit
		 * Minimum: 0
		 * Maximum: 5000
		 */
		offset: FormControl<number | null | undefined>,

		/** Orcid of author */
		orcid: FormControl<string | null | undefined>,

		/** The field by which to order. Default varies by endpoint/resource. */
		order: FormControl<ArticleSearchOrder | null | undefined>,

		/** Direction of ordering */
		order_direction: FormControl<CommonSearchOrder_direction | null | undefined>,

		/**
		 * Page number. Used for pagination with page_size
		 * Minimum: 1
		 * Maximum: 5000
		 */
		page: FormControl<number | null | undefined>,

		/**
		 * The number of results included on a page. Used for pagination with page
		 * Minimum: 1
		 * Maximum: 1000
		 */
		page_size: FormControl<number | null | undefined>,

		/** Search term */
		search_for: FormControl<string | null | undefined>,
	}
	export function CreatePrivateAuthorsSearchFormGroup() {
		return new FormGroup<PrivateAuthorsSearchFormProperties>({
			group_id: new FormControl<number | null | undefined>(undefined),
			institution_id: new FormControl<number | null | undefined>(undefined),
			is_active: new FormControl<boolean | null | undefined>(undefined),
			is_public: new FormControl<boolean | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(5000)]),
			orcid: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<ArticleSearchOrder | null | undefined>(undefined),
			order_direction: new FormControl<CommonSearchOrder_direction | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(5000)]),
			page_size: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			search_for: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrivateCollectionSearch {

		/** only return collections with this resource_id */
		resource_id?: string | null;
	}
	export interface PrivateCollectionSearchFormProperties {

		/** only return collections with this resource_id */
		resource_id: FormControl<string | null | undefined>,
	}
	export function CreatePrivateCollectionSearchFormGroup() {
		return new FormGroup<PrivateCollectionSearchFormProperties>({
			resource_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrivateFile {

		/**
		 * True if the file is attached to a public item version
		 * Required
		 */
		is_attached_to_public_version: boolean;

		/**
		 * File preview state
		 * Required
		 */
		preview_state: string;

		/**
		 * Status for file upload
		 * Required
		 */
		status: string;

		/**
		 * Token for file upload
		 * Required
		 */
		upload_token: string;

		/**
		 * Upload url for file
		 * Required
		 */
		upload_url: string;

		/**
		 * File viewer type
		 * Required
		 */
		viewer_type: string;
	}
	export interface PrivateFileFormProperties {

		/**
		 * True if the file is attached to a public item version
		 * Required
		 */
		is_attached_to_public_version: FormControl<boolean | null | undefined>,

		/**
		 * File preview state
		 * Required
		 */
		preview_state: FormControl<string | null | undefined>,

		/**
		 * Status for file upload
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * Token for file upload
		 * Required
		 */
		upload_token: FormControl<string | null | undefined>,

		/**
		 * Upload url for file
		 * Required
		 */
		upload_url: FormControl<string | null | undefined>,

		/**
		 * File viewer type
		 * Required
		 */
		viewer_type: FormControl<string | null | undefined>,
	}
	export function CreatePrivateFileFormGroup() {
		return new FormGroup<PrivateFileFormProperties>({
			is_attached_to_public_version: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			preview_state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upload_token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			upload_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			viewer_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrivateLink {

		/**
		 * Date when link will expire
		 * Required
		 */
		expires_date: string;

		/**
		 * HTML url for private link
		 * Required
		 */
		html_location: string;

		/**
		 * Private link id
		 * Required
		 */
		id: string;

		/**
		 * True if private link is active
		 * Required
		 */
		is_active: boolean;
	}
	export interface PrivateLinkFormProperties {

		/**
		 * Date when link will expire
		 * Required
		 */
		expires_date: FormControl<string | null | undefined>,

		/**
		 * HTML url for private link
		 * Required
		 */
		html_location: FormControl<string | null | undefined>,

		/**
		 * Private link id
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * True if private link is active
		 * Required
		 */
		is_active: FormControl<boolean | null | undefined>,
	}
	export function CreatePrivateLinkFormGroup() {
		return new FormGroup<PrivateLinkFormProperties>({
			expires_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			html_location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			is_active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrivateLinkCreator {

		/** Date when this private link should expire - optional. By default private links expire in 365 days. */
		expires_date?: string | null;

		/** Optional, default true. Set to false to give private link users editing rights for this collection. */
		read_only?: boolean | null;
	}
	export interface PrivateLinkCreatorFormProperties {

		/** Date when this private link should expire - optional. By default private links expire in 365 days. */
		expires_date: FormControl<string | null | undefined>,

		/** Optional, default true. Set to false to give private link users editing rights for this collection. */
		read_only: FormControl<boolean | null | undefined>,
	}
	export function CreatePrivateLinkCreatorFormGroup() {
		return new FormGroup<PrivateLinkCreatorFormProperties>({
			expires_date: new FormControl<string | null | undefined>(undefined),
			read_only: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PrivateLinkResponse {

		/**
		 * HTML url for private link
		 * Required
		 */
		html_location: string;

		/**
		 * Url for private link
		 * Required
		 */
		location: string;

		/**
		 * Token for private link
		 * Required
		 */
		token: string;
	}
	export interface PrivateLinkResponseFormProperties {

		/**
		 * HTML url for private link
		 * Required
		 */
		html_location: FormControl<string | null | undefined>,

		/**
		 * Url for private link
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/**
		 * Token for private link
		 * Required
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreatePrivateLinkResponseFormGroup() {
		return new FormGroup<PrivateLinkResponseFormProperties>({
			html_location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Project {

		/**
		 * Project id
		 * Required
		 */
		id: number;

		/**
		 * Date when project was published
		 * Required
		 */
		published_date: string;

		/**
		 * Project title
		 * Required
		 */
		title: string;

		/**
		 * Api endpoint
		 * Required
		 */
		url: string;
	}
	export interface ProjectFormProperties {

		/**
		 * Project id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Date when project was published
		 * Required
		 */
		published_date: FormControl<string | null | undefined>,

		/**
		 * Project title
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/**
		 * Api endpoint
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			published_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProjectArticle {

		/**
		 * List of categories selected for the article
		 * Required
		 */
		categories: Array<Category>;

		/**
		 * Article citation
		 * Required
		 */
		citation: string;

		/**
		 * Confidentiality reason
		 * Required
		 */
		confidential_reason: string;

		/**
		 * Date when article was created
		 * Required
		 */
		created_date: string;

		/**
		 * Article description
		 * Required
		 */
		description: string;

		/**
		 * Date when embargo lifts
		 * Required
		 */
		embargo_date: string;

		/**
		 * Reason for embargo
		 * Required
		 */
		embargo_reason: string;

		/**
		 * Title for embargo
		 * Required
		 */
		embargo_title: string;

		/**
		 * Article embargo
		 * Required
		 */
		embargo_type: string;

		/**
		 * Article funding
		 * Required
		 */
		funding: string;

		/** Required */
		funding_list: Array<number>;

		/**
		 * True if any files are linked to the article
		 * Required
		 */
		has_linked_file: boolean;

		/**
		 * True if article is active
		 * Required
		 */
		is_active: boolean;

		/**
		 * Article Confidentiality
		 * Required
		 */
		is_confidential: boolean;

		/**
		 * True if article is embargoed
		 * Required
		 */
		is_embargoed: boolean;

		/**
		 * True if article has no files
		 * Required
		 */
		is_metadata_record: boolean;

		/**
		 * True if article is published
		 * Required
		 */
		is_public: boolean;

		/** Required */
		license: License;

		/**
		 * Article metadata reason
		 * Required
		 */
		metadata_reason: string;

		/**
		 * Date when article was last modified
		 * Required
		 */
		modified_date: string;

		/**
		 * List of references
		 * Required
		 */
		references: Array<string>;

		/**
		 * Article size
		 * Required
		 */
		size: number;

		/**
		 * Article status
		 * Required
		 */
		status: string;

		/**
		 * List of article tags
		 * Required
		 */
		tags: Array<string>;

		/**
		 * Article version
		 * Required
		 */
		version: number;
	}
	export interface ProjectArticleFormProperties {

		/**
		 * Article citation
		 * Required
		 */
		citation: FormControl<string | null | undefined>,

		/**
		 * Confidentiality reason
		 * Required
		 */
		confidential_reason: FormControl<string | null | undefined>,

		/**
		 * Date when article was created
		 * Required
		 */
		created_date: FormControl<string | null | undefined>,

		/**
		 * Article description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Date when embargo lifts
		 * Required
		 */
		embargo_date: FormControl<string | null | undefined>,

		/**
		 * Reason for embargo
		 * Required
		 */
		embargo_reason: FormControl<string | null | undefined>,

		/**
		 * Title for embargo
		 * Required
		 */
		embargo_title: FormControl<string | null | undefined>,

		/**
		 * Article embargo
		 * Required
		 */
		embargo_type: FormControl<string | null | undefined>,

		/**
		 * Article funding
		 * Required
		 */
		funding: FormControl<string | null | undefined>,

		/**
		 * True if any files are linked to the article
		 * Required
		 */
		has_linked_file: FormControl<boolean | null | undefined>,

		/**
		 * True if article is active
		 * Required
		 */
		is_active: FormControl<boolean | null | undefined>,

		/**
		 * Article Confidentiality
		 * Required
		 */
		is_confidential: FormControl<boolean | null | undefined>,

		/**
		 * True if article is embargoed
		 * Required
		 */
		is_embargoed: FormControl<boolean | null | undefined>,

		/**
		 * True if article has no files
		 * Required
		 */
		is_metadata_record: FormControl<boolean | null | undefined>,

		/**
		 * True if article is published
		 * Required
		 */
		is_public: FormControl<boolean | null | undefined>,

		/**
		 * Article metadata reason
		 * Required
		 */
		metadata_reason: FormControl<string | null | undefined>,

		/**
		 * Date when article was last modified
		 * Required
		 */
		modified_date: FormControl<string | null | undefined>,

		/**
		 * Article size
		 * Required
		 */
		size: FormControl<number | null | undefined>,

		/**
		 * Article status
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * Article version
		 * Required
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateProjectArticleFormGroup() {
		return new FormGroup<ProjectArticleFormProperties>({
			citation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			confidential_reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			embargo_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			embargo_reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			embargo_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			embargo_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			funding: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			has_linked_file: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_confidential: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_embargoed: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_metadata_record: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_public: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			metadata_reason: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modified_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProjectCollaborator {

		/**
		 * Collaborator name
		 * Required
		 */
		name: string;

		/**
		 * Collaborator role
		 * Required
		 */
		role_name: string;

		/**
		 * Status of collaborator invitation
		 * Required
		 */
		status: string;

		/**
		 * Collaborator id
		 * Required
		 */
		user_id: number;
	}
	export interface ProjectCollaboratorFormProperties {

		/**
		 * Collaborator name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Collaborator role
		 * Required
		 */
		role_name: FormControl<string | null | undefined>,

		/**
		 * Status of collaborator invitation
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * Collaborator id
		 * Required
		 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateProjectCollaboratorFormGroup() {
		return new FormGroup<ProjectCollaboratorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProjectCollaboratorInvite {

		/** Text sent when inviting the user to the project */
		comment?: string | null;

		/** Collaborator email */
		email?: string | null;

		/**
		 * Role of the the collaborator inside the project
		 * Required
		 */
		role_name: ProjectCollaboratorInviteRole_name;

		/** User id of the collaborator */
		user_id?: number | null;
	}
	export interface ProjectCollaboratorInviteFormProperties {

		/** Text sent when inviting the user to the project */
		comment: FormControl<string | null | undefined>,

		/** Collaborator email */
		email: FormControl<string | null | undefined>,

		/**
		 * Role of the the collaborator inside the project
		 * Required
		 */
		role_name: FormControl<ProjectCollaboratorInviteRole_name | null | undefined>,

		/** User id of the collaborator */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateProjectCollaboratorInviteFormGroup() {
		return new FormGroup<ProjectCollaboratorInviteFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			role_name: new FormControl<ProjectCollaboratorInviteRole_name | null | undefined>(undefined, [Validators.required]),
			user_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ProjectCollaboratorInviteRole_name { viewer = 0, collaborator = 1 }

	export interface ProjectComplete {

		/**
		 * List of project collaborators
		 * Required
		 */
		collaborators: Array<Collaborator>;

		/**
		 * Project description
		 * Required
		 */
		description: string;

		/**
		 * Project public url
		 * Required
		 */
		figshare_url: string;

		/**
		 * Project funding
		 * Required
		 */
		funding: string;

		/**
		 * Full Project funding information
		 * Required
		 */
		funding_list: Array<FundingInformation>;
	}
	export interface ProjectCompleteFormProperties {

		/**
		 * Project description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Project public url
		 * Required
		 */
		figshare_url: FormControl<string | null | undefined>,

		/**
		 * Project funding
		 * Required
		 */
		funding: FormControl<string | null | undefined>,
	}
	export function CreateProjectCompleteFormGroup() {
		return new FormGroup<ProjectCompleteFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			figshare_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			funding: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProjectCompletePrivate {

		/**
		 * ID of the account owning the project
		 * Required
		 */
		account_id: number;

		/**
		 * List of project collaborators
		 * Required
		 */
		collaborators: Array<Collaborator>;

		/**
		 * Date when project was created
		 * Required
		 */
		created_date: string;

		/**
		 * Collection custom fields
		 * Required
		 */
		custom_fields: Array<CustomArticleField>;

		/**
		 * Project description
		 * Required
		 */
		description: string;

		/**
		 * Project public url
		 * Required
		 */
		figshare_url: string;

		/**
		 * Project funding
		 * Required
		 */
		funding: string;

		/**
		 * Full Project funding information
		 * Required
		 */
		funding_list: Array<FundingInformation>;

		/**
		 * Group of project if any
		 * Required
		 */
		group_id: number;

		/**
		 * Date when project was last modified
		 * Required
		 */
		modified_date: string;

		/**
		 * Project quota
		 * Required
		 */
		quota: number;

		/**
		 * Project used quota
		 * Required
		 */
		used_quota: number;

		/**
		 * Project private quota used
		 * Required
		 */
		used_quota_private: number;

		/**
		 * Project public quota used
		 * Required
		 */
		used_quota_public: number;
	}
	export interface ProjectCompletePrivateFormProperties {

		/**
		 * ID of the account owning the project
		 * Required
		 */
		account_id: FormControl<number | null | undefined>,

		/**
		 * Date when project was created
		 * Required
		 */
		created_date: FormControl<string | null | undefined>,

		/**
		 * Project description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Project public url
		 * Required
		 */
		figshare_url: FormControl<string | null | undefined>,

		/**
		 * Project funding
		 * Required
		 */
		funding: FormControl<string | null | undefined>,

		/**
		 * Group of project if any
		 * Required
		 */
		group_id: FormControl<number | null | undefined>,

		/**
		 * Date when project was last modified
		 * Required
		 */
		modified_date: FormControl<string | null | undefined>,

		/**
		 * Project quota
		 * Required
		 */
		quota: FormControl<number | null | undefined>,

		/**
		 * Project used quota
		 * Required
		 */
		used_quota: FormControl<number | null | undefined>,

		/**
		 * Project private quota used
		 * Required
		 */
		used_quota_private: FormControl<number | null | undefined>,

		/**
		 * Project public quota used
		 * Required
		 */
		used_quota_public: FormControl<number | null | undefined>,
	}
	export function CreateProjectCompletePrivateFormGroup() {
		return new FormGroup<ProjectCompletePrivateFormProperties>({
			account_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			created_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			figshare_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			funding: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			group_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			modified_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quota: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			used_quota: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			used_quota_private: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			used_quota_public: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProjectCreate {

		/** List of key, values pairs to be associated with the project */
		custom_fields?: string | null;

		/** List of custom fields values, supersedes custom_fields parameter */
		custom_fields_list?: Array<CustomArticleFieldAdd>;

		/**
		 * Project description
		 * Max length: 10000
		 */
		description?: string | null;

		/** Grant number or organization(s) that funded this project. Up to 2000 characters permitted. */
		funding?: string | null;

		/** Funding creation / update items */
		funding_list?: Array<FundingCreate>;

		/** Only if project type is group. */
		group_id?: number | null;

		/**
		 * The title for this project - mandatory. 3 - 1000 characters.
		 * Required
		 * Max length: 1000
		 * Min length: 3
		 */
		title: string;
	}
	export interface ProjectCreateFormProperties {

		/** List of key, values pairs to be associated with the project */
		custom_fields: FormControl<string | null | undefined>,

		/**
		 * Project description
		 * Max length: 10000
		 */
		description: FormControl<string | null | undefined>,

		/** Grant number or organization(s) that funded this project. Up to 2000 characters permitted. */
		funding: FormControl<string | null | undefined>,

		/** Only if project type is group. */
		group_id: FormControl<number | null | undefined>,

		/**
		 * The title for this project - mandatory. 3 - 1000 characters.
		 * Required
		 * Max length: 1000
		 * Min length: 3
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateProjectCreateFormGroup() {
		return new FormGroup<ProjectCreateFormProperties>({
			custom_fields: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000)]),
			funding: new FormControl<string | null | undefined>(undefined),
			group_id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(1000)]),
		});

	}

	export interface ProjectNote {

		/**
		 * Note Abstract - short/truncated content
		 * Required
		 */
		abstract: string;

		/**
		 * Date when note was created
		 * Required
		 */
		created_date: string;

		/**
		 * Project note id
		 * Required
		 */
		id: number;

		/**
		 * Date when note was last modified
		 * Required
		 */
		modified_date: string;

		/**
		 * User who wrote the note
		 * Required
		 */
		user_id: number;

		/**
		 * Username of the one who wrote the note
		 * Required
		 */
		user_name: string;
	}
	export interface ProjectNoteFormProperties {

		/**
		 * Note Abstract - short/truncated content
		 * Required
		 */
		abstract: FormControl<string | null | undefined>,

		/**
		 * Date when note was created
		 * Required
		 */
		created_date: FormControl<string | null | undefined>,

		/**
		 * Project note id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Date when note was last modified
		 * Required
		 */
		modified_date: FormControl<string | null | undefined>,

		/**
		 * User who wrote the note
		 * Required
		 */
		user_id: FormControl<number | null | undefined>,

		/**
		 * Username of the one who wrote the note
		 * Required
		 */
		user_name: FormControl<string | null | undefined>,
	}
	export function CreateProjectNoteFormGroup() {
		return new FormGroup<ProjectNoteFormProperties>({
			abstract: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			created_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			modified_date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			user_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			user_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProjectNoteCreate {

		/**
		 * Text of the note
		 * Required
		 * Min length: 3
		 */
		text: string;
	}
	export interface ProjectNoteCreateFormProperties {

		/**
		 * Text of the note
		 * Required
		 * Min length: 3
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateProjectNoteCreateFormGroup() {
		return new FormGroup<ProjectNoteCreateFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3)]),
		});

	}

	export interface ProjectNotePrivate {

		/**
		 * Full text of note
		 * Required
		 */
		text: string;
	}
	export interface ProjectNotePrivateFormProperties {

		/**
		 * Full text of note
		 * Required
		 */
		text: FormControl<string | null | undefined>,
	}
	export function CreateProjectNotePrivateFormGroup() {
		return new FormGroup<ProjectNotePrivateFormProperties>({
			text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ProjectPrivate {

		/**
		 * Role inside this project
		 * Required
		 */
		role: ProjectPrivateRole;

		/**
		 * Project storage type
		 * Required
		 */
		storage: ProjectPrivateStorage;
	}
	export interface ProjectPrivateFormProperties {

		/**
		 * Role inside this project
		 * Required
		 */
		role: FormControl<ProjectPrivateRole | null | undefined>,

		/**
		 * Project storage type
		 * Required
		 */
		storage: FormControl<ProjectPrivateStorage | null | undefined>,
	}
	export function CreateProjectPrivateFormGroup() {
		return new FormGroup<ProjectPrivateFormProperties>({
			role: new FormControl<ProjectPrivateRole | null | undefined>(undefined, [Validators.required]),
			storage: new FormControl<ProjectPrivateStorage | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ProjectPrivateRole { Owner = 0, Collaborator = 1, Viewer = 2 }

	export enum ProjectPrivateStorage { individual = 0, group = 1 }

	export interface ProjectUpdate {

		/** List of key, values pairs to be associated with the project */
		custom_fields?: string | null;

		/** List of custom fields values, supersedes custom_fields parameter */
		custom_fields_list?: Array<CustomArticleFieldAdd>;

		/**
		 * Project description
		 * Max length: 10000
		 */
		description?: string | null;

		/** Grant number or organization(s) that funded this project. Up to 2000 characters permitted. */
		funding?: string | null;

		/** Funding creation / update items */
		funding_list?: Array<FundingCreate>;

		/**
		 * The title for this project - mandatory. 3 - 1000 characters.
		 * Max length: 1000
		 * Min length: 3
		 */
		title?: string | null;
	}
	export interface ProjectUpdateFormProperties {

		/** List of key, values pairs to be associated with the project */
		custom_fields: FormControl<string | null | undefined>,

		/**
		 * Project description
		 * Max length: 10000
		 */
		description: FormControl<string | null | undefined>,

		/** Grant number or organization(s) that funded this project. Up to 2000 characters permitted. */
		funding: FormControl<string | null | undefined>,

		/**
		 * The title for this project - mandatory. 3 - 1000 characters.
		 * Max length: 1000
		 * Min length: 3
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateProjectUpdateFormGroup() {
		return new FormGroup<ProjectUpdateFormProperties>({
			custom_fields: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(10000)]),
			funding: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(3), Validators.maxLength(1000)]),
		});

	}

	export interface ProjectsSearch {

		/** The field by which to order. */
		order?: ProjectsSearchOrder | null;
	}
	export interface ProjectsSearchFormProperties {

		/** The field by which to order. */
		order: FormControl<ProjectsSearchOrder | null | undefined>,
	}
	export function CreateProjectsSearchFormGroup() {
		return new FormGroup<ProjectsSearchFormProperties>({
			order: new FormControl<ProjectsSearchOrder | null | undefined>(undefined),
		});

	}

	export enum ProjectsSearchOrder { published_date = 0, modified_date = 1, views = 2 }

	export interface Resource {

		/** DOI of resource item */
		doi?: string | null;

		/**
		 * ID of resource item
		 * Max length: 255
		 */
		id?: string | null;

		/**
		 * Link of resource item
		 * Max length: 255
		 */
		link?: string | null;

		/**
		 * Status of resource item
		 * Max length: 100
		 */
		status?: string | null;

		/**
		 * Title of resource item
		 * Max length: 1000
		 */
		title?: string | null;

		/** Version of resource item */
		version?: number | null;
	}
	export interface ResourceFormProperties {

		/** DOI of resource item */
		doi: FormControl<string | null | undefined>,

		/**
		 * ID of resource item
		 * Max length: 255
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Link of resource item
		 * Max length: 255
		 */
		link: FormControl<string | null | undefined>,

		/**
		 * Status of resource item
		 * Max length: 100
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * Title of resource item
		 * Max length: 1000
		 */
		title: FormControl<string | null | undefined>,

		/** Version of resource item */
		version: FormControl<number | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			doi: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			link: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(100)]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000)]),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ResponseMessage {

		/**
		 * Response message text
		 * Required
		 */
		message: string;
	}
	export interface ResponseMessageFormProperties {

		/**
		 * Response message text
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateResponseMessageFormGroup() {
		return new FormGroup<ResponseMessageFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Role {

		/**
		 * Role category
		 * Required
		 */
		category: string;

		/**
		 * Role description
		 * Required
		 */
		description: string;

		/**
		 * Role id
		 * Required
		 */
		id: number;

		/**
		 * Role name
		 * Required
		 */
		name: string;
	}
	export interface RoleFormProperties {

		/**
		 * Role category
		 * Required
		 */
		category: FormControl<string | null | undefined>,

		/**
		 * Role description
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Role id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Role name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRoleFormGroup() {
		return new FormGroup<RoleFormProperties>({
			category: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShortAccount {

		/**
		 * Account activity status
		 * Required
		 */
		active: number;

		/**
		 * User email
		 * Required
		 */
		email: string;

		/**
		 * First Name
		 * Required
		 */
		first_name: string;

		/**
		 * Account id
		 * Required
		 */
		id: number;

		/**
		 * Account institution
		 * Required
		 */
		institution_id: number;

		/**
		 * Account institution user id
		 * Required
		 */
		institution_user_id: string;

		/**
		 * Last Name
		 * Required
		 */
		last_name: string;

		/**
		 * ORCID iD associated to account
		 * Required
		 */
		orcid_id: string;

		/**
		 * Total storage available to account, in bytes
		 * Required
		 */
		quota: number;

		/**
		 * Storage used by the account, in bytes
		 * Required
		 */
		used_quota: number;

		/**
		 * User id associated with account, useful for example for adding the account as an author to an item
		 * Required
		 */
		user_id: number;
	}
	export interface ShortAccountFormProperties {

		/**
		 * Account activity status
		 * Required
		 */
		active: FormControl<number | null | undefined>,

		/**
		 * User email
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * First Name
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Account id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Account institution
		 * Required
		 */
		institution_id: FormControl<number | null | undefined>,

		/**
		 * Account institution user id
		 * Required
		 */
		institution_user_id: FormControl<string | null | undefined>,

		/**
		 * Last Name
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,

		/**
		 * ORCID iD associated to account
		 * Required
		 */
		orcid_id: FormControl<string | null | undefined>,

		/**
		 * Total storage available to account, in bytes
		 * Required
		 */
		quota: FormControl<number | null | undefined>,

		/**
		 * Storage used by the account, in bytes
		 * Required
		 */
		used_quota: FormControl<number | null | undefined>,

		/**
		 * User id associated with account, useful for example for adding the account as an author to an item
		 * Required
		 */
		user_id: FormControl<number | null | undefined>,
	}
	export function CreateShortAccountFormGroup() {
		return new FormGroup<ShortAccountFormProperties>({
			active: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			institution_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			institution_user_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orcid_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			quota: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			used_quota: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			user_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ShortCustomField {

		/**
		 * Custom field type
		 * Required
		 */
		field_type: ShortCustomFieldField_type;

		/**
		 * Custom field id
		 * Required
		 */
		id: number;

		/**
		 * Custom field name
		 * Required
		 */
		name: string;
	}
	export interface ShortCustomFieldFormProperties {

		/**
		 * Custom field type
		 * Required
		 */
		field_type: FormControl<ShortCustomFieldField_type | null | undefined>,

		/**
		 * Custom field id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Custom field name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateShortCustomFieldFormGroup() {
		return new FormGroup<ShortCustomFieldFormProperties>({
			field_type: new FormControl<ShortCustomFieldField_type | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ShortCustomFieldField_type { text = 0, textarea = 1, dropdown = 2, url = 3, email = 4, date = 5, dropdown_large_list = 6 }

	export interface UploadFilePart {

		/** Indexes on byte range. zero-based and inclusive */
		endOffset?: number | null;

		/** When a part is being uploaded it is being locked, by setting the locked flag to true. No changes/uploads can happen on this part from other requests. */
		locked?: boolean | null;

		/** File part id */
		partNo?: number | null;

		/** Indexes on byte range. zero-based and inclusive */
		startOffset?: number | null;

		/** part status */
		status?: UploadFilePartStatus | null;
	}
	export interface UploadFilePartFormProperties {

		/** Indexes on byte range. zero-based and inclusive */
		endOffset: FormControl<number | null | undefined>,

		/** When a part is being uploaded it is being locked, by setting the locked flag to true. No changes/uploads can happen on this part from other requests. */
		locked: FormControl<boolean | null | undefined>,

		/** File part id */
		partNo: FormControl<number | null | undefined>,

		/** Indexes on byte range. zero-based and inclusive */
		startOffset: FormControl<number | null | undefined>,

		/** part status */
		status: FormControl<UploadFilePartStatus | null | undefined>,
	}
	export function CreateUploadFilePartFormGroup() {
		return new FormGroup<UploadFilePartFormProperties>({
			endOffset: new FormControl<number | null | undefined>(undefined),
			locked: new FormControl<boolean | null | undefined>(undefined),
			partNo: new FormControl<number | null | undefined>(undefined),
			startOffset: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<UploadFilePartStatus | null | undefined>(undefined),
		});

	}

	export enum UploadFilePartStatus { PENDING = 0, COMPLETE = 1 }

	export interface UploadInfo {

		/** md5 provided on upload initialization */
		md5?: string | null;

		/** name of file on upload server */
		name?: string | null;

		/** Uploads parts */
		parts?: Array<UploadFilePart>;

		/** size of file in bytes */
		size?: number | null;

		/** Upload status */
		status?: UploadInfoStatus | null;

		/** token received after initializing a file upload */
		token?: string | null;
	}
	export interface UploadInfoFormProperties {

		/** md5 provided on upload initialization */
		md5: FormControl<string | null | undefined>,

		/** name of file on upload server */
		name: FormControl<string | null | undefined>,

		/** size of file in bytes */
		size: FormControl<number | null | undefined>,

		/** Upload status */
		status: FormControl<UploadInfoStatus | null | undefined>,

		/** token received after initializing a file upload */
		token: FormControl<string | null | undefined>,
	}
	export function CreateUploadInfoFormGroup() {
		return new FormGroup<UploadInfoFormProperties>({
			md5: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<UploadInfoStatus | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UploadInfoStatus { PENDING = 0, COMPLETED = 1, ABORTED = 2 }

	export interface User {

		/**
		 * First Name
		 * Required
		 */
		first_name: string;

		/**
		 * User id
		 * Required
		 */
		id: number;

		/**
		 * Account activity status
		 * Required
		 */
		is_active: boolean;

		/**
		 * Account public status
		 * Required
		 */
		is_public: boolean;

		/**
		 * User Job title
		 * Required
		 */
		job_title: string;

		/**
		 * Last Name
		 * Required
		 */
		last_name: string;

		/**
		 * Full Name
		 * Required
		 */
		name: string;

		/**
		 * Orcid associated to this User
		 * Required
		 */
		orcid_id: string;

		/**
		 * Name that appears in website url
		 * Required
		 */
		url_name: string;
	}
	export interface UserFormProperties {

		/**
		 * First Name
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/**
		 * User id
		 * Required
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Account activity status
		 * Required
		 */
		is_active: FormControl<boolean | null | undefined>,

		/**
		 * Account public status
		 * Required
		 */
		is_public: FormControl<boolean | null | undefined>,

		/**
		 * User Job title
		 * Required
		 */
		job_title: FormControl<string | null | undefined>,

		/**
		 * Last Name
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,

		/**
		 * Full Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Orcid associated to this User
		 * Required
		 */
		orcid_id: FormControl<string | null | undefined>,

		/**
		 * Name that appears in website url
		 * Required
		 */
		url_name: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			is_active: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			is_public: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			job_title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orcid_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AuthorsCreator2 {

		/**
		 * List of authors to be associated with the article. The list can contain the following fields: id, name, first_name, last_name, email, orcid_id. If an id is supplied, it will take priority and everything else will be ignored. No more than 10 authors. For adding more authors use the specific authors endpoint.
		 * Required
		 */
		authors: Array<string>;
	}
	export interface AuthorsCreator2FormProperties {
	}
	export function CreateAuthorsCreator2FormGroup() {
		return new FormGroup<AuthorsCreator2FormProperties>({
		});

	}

	export interface CategoriesCreator2 {

		/**
		 * List of category ids
		 * Required
		 */
		categories: Array<number>;
	}
	export interface CategoriesCreator2FormProperties {
	}
	export function CreateCategoriesCreator2FormGroup() {
		return new FormGroup<CategoriesCreator2FormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Private Account information
		 * Account information for token/personal token
		 * Get account
		 * @return {Account} OK. Account representation
		 */
		Private_account(): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'account', {});
		}

		/**
		 * Private Articles
		 * Get Own Articles
		 * Get account/articles
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @return {Array<Article>} OK. An array of articles belonging to the account
		 */
		Private_articles_list(page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + 'account/articles?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create new Article
		 * Create a new Article by sending article information
		 * Post account/articles
		 * @param {ArticleCreate} requestBody Article description
		 * @return {void} 
		 */
		Private_article_create(requestBody: ArticleCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/articles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Account Article Report
		 * Return status on all reports generated for the account from the oauth credentials
		 * Get account/articles/export
		 * @param {number} group_id A group ID to filter by
		 * @return {Array<AccountReport>} OK. An array of account report entries
		 */
		Account_article_report(group_id: number | null | undefined): Observable<Array<AccountReport>> {
			return this.http.get<Array<AccountReport>>(this.baseUri + 'account/articles/export?group_id=' + group_id, {});
		}

		/**
		 * Initiate a new Report
		 * Initiate a new Article Report for this Account. There is a limit of 1 report per day.
		 * Post account/articles/export
		 * @return {AccountReport} OK. AccountReport created.
		 */
		Account_article_report_generate(): Observable<AccountReport> {
			return this.http.post<AccountReport>(this.baseUri + 'account/articles/export', null, {});
		}

		/**
		 * Private Articles search
		 * Returns a list of private articles filtered by the search parameters
		 * Post account/articles/search
		 * @param {PrivateArticleSearch} requestBody Search Parameters
		 * @return {Array<ArticleWithProject>} OK. An array of articles
		 */
		Private_articles_search(requestBody: PrivateArticleSearch): Observable<Array<ArticleWithProject>> {
			return this.http.post<Array<ArticleWithProject>>(this.baseUri + 'account/articles/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete article
		 * Delete an article
		 * Delete account/articles/{article_id}
		 * @return {void} 
		 */
		Private_article_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/articles/{article_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Article details
		 * View a private article
		 * Get account/articles/{article_id}
		 * @return {ArticleCompletePrivate} OK. Article representation
		 */
		Private_article_details(): Observable<ArticleCompletePrivate> {
			return this.http.get<ArticleCompletePrivate>(this.baseUri + 'account/articles/{article_id}', {});
		}

		/**
		 * Update article
		 * Updating an article by passing body parameters; request can also be made with the PATCH method.
		 * Put account/articles/{article_id}
		 * @param {ArticleUpdate} requestBody Article description
		 * @return {void} 
		 */
		Private_article_update(requestBody: ArticleUpdate): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/articles/{article_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List article authors
		 * List article authors
		 * Get account/articles/{article_id}/authors
		 * @return {Array<Author>} OK. Authors list for article
		 */
		Private_article_authors_list(): Observable<Array<Author>> {
			return this.http.get<Array<Author>>(this.baseUri + 'account/articles/{article_id}/authors', {});
		}

		/**
		 * Add article authors
		 * Associate new authors with the article. This will add new authors to the list of already associated authors
		 * Post account/articles/{article_id}/authors
		 * @param {AuthorsCreator} requestBody Authors description
		 * @return {void} 
		 */
		Private_article_authors_add(requestBody: AuthorsCreator): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/articles/{article_id}/authors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace article authors
		 * Associate new authors with the article. This will remove all already associated authors and add these new ones
		 * Put account/articles/{article_id}/authors
		 * @param {AuthorsCreator} requestBody Authors description
		 * @return {void} 
		 */
		Private_article_authors_replace(requestBody: AuthorsCreator): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/articles/{article_id}/authors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete article author
		 * De-associate author from article
		 * Delete account/articles/{article_id}/authors/{author_id}
		 * @param {number} article_id Article unique identifier
		 * @param {number} author_id Article Author unique identifier
		 * @return {void} 
		 */
		Private_article_author_delete(article_id: number, author_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/articles/' + article_id + '/authors/' + author_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List article categories
		 * List article categories
		 * Get account/articles/{article_id}/categories
		 * @return {Array<Category>} OK. Article categories
		 */
		Private_article_categories_list(): Observable<Array<Category>> {
			return this.http.get<Array<Category>>(this.baseUri + 'account/articles/{article_id}/categories', {});
		}

		/**
		 * Add article categories
		 * Associate new categories with the article. This will add new categories to the list of already associated categories
		 * Post account/articles/{article_id}/categories
		 * @return {void} 
		 */
		Private_article_categories_add(requestBody: CategoriesCreator): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/articles/{article_id}/categories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace article categories
		 * Associate new categories with the article. This will remove all already associated categories and add these new ones
		 * Put account/articles/{article_id}/categories
		 * @return {void} 
		 */
		Private_article_categories_replace(requestBody: CategoriesCreator): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/articles/{article_id}/categories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete article category
		 * De-associate category from article
		 * Delete account/articles/{article_id}/categories/{category_id}
		 * @param {number} article_id Article unique identifier
		 * @param {number} category_id Category unique identifier
		 * @return {void} 
		 */
		Private_article_category_delete(article_id: number, category_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/articles/' + article_id + '/categories/' + category_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete article confidentiality
		 * Delete confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
		 * Delete account/articles/{article_id}/confidentiality
		 * @return {void} 
		 */
		Private_article_confidentiality_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/articles/{article_id}/confidentiality', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Article confidentiality details
		 * View confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
		 * Get account/articles/{article_id}/confidentiality
		 * @return {ArticleConfidentiality} OK. Article categories
		 */
		Private_article_confidentiality_details(): Observable<ArticleConfidentiality> {
			return this.http.get<ArticleConfidentiality>(this.baseUri + 'account/articles/{article_id}/confidentiality', {});
		}

		/**
		 * Update article confidentiality
		 * Update confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
		 * Put account/articles/{article_id}/confidentiality
		 * @return {void} 
		 */
		Private_article_confidentiality_update(requestBody: ConfidentialityCreator): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/articles/{article_id}/confidentiality', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Article Embargo
		 * Will lift the embargo for the specified article
		 * Delete account/articles/{article_id}/embargo
		 * @return {void} 
		 */
		Private_article_embargo_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/articles/{article_id}/embargo', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Article Embargo Details
		 * View a private article embargo details
		 * Get account/articles/{article_id}/embargo
		 * @return {ArticleEmbargo} OK. Embargo for article
		 */
		Private_article_embargo_details(): Observable<ArticleEmbargo> {
			return this.http.get<ArticleEmbargo>(this.baseUri + 'account/articles/{article_id}/embargo', {});
		}

		/**
		 * Update Article Embargo
		 * Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.
		 * Put account/articles/{article_id}/embargo
		 * @param {ArticleEmbargoUpdater} requestBody Embargo description
		 * @return {void} 
		 */
		Private_article_embargo_update(requestBody: ArticleEmbargoUpdater): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/articles/{article_id}/embargo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List article files
		 * List private files
		 * Get account/articles/{article_id}/files
		 * @return {Array<PrivateFile>} OK. Article files list
		 */
		Private_article_files_list(): Observable<Array<PrivateFile>> {
			return this.http.get<Array<PrivateFile>>(this.baseUri + 'account/articles/{article_id}/files', {});
		}

		/**
		 * Initiate Upload
		 * Initiate a new file upload within the article. Either use the link property to point to an existing file that resides elsewhere and will not be uploaded to Figshare or use the other 3 parameters (md5, name, size).
		 * Post account/articles/{article_id}/files
		 * @return {void} 
		 */
		Private_article_upload_initiate(requestBody: FileCreator): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/articles/{article_id}/files', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * File Delete
		 * Complete file upload
		 * Delete account/articles/{article_id}/files/{file_id}
		 * @return {void} 
		 */
		Private_article_file_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/articles/{article_id}/files/{file_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Single File
		 * View details of file for specified article
		 * Get account/articles/{article_id}/files/{file_id}
		 * @return {PrivateFile} OK. Article private file
		 */
		Private_article_file(): Observable<PrivateFile> {
			return this.http.get<PrivateFile>(this.baseUri + 'account/articles/{article_id}/files/{file_id}', {});
		}

		/**
		 * Complete Upload
		 * Complete file upload
		 * Post account/articles/{article_id}/files/{file_id}
		 * @return {void} 
		 */
		Private_article_upload_complete(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/articles/{article_id}/files/{file_id}', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List private links
		 * List private links
		 * Get account/articles/{article_id}/private_links
		 * @return {Array<PrivateLink>} OK. Article private links
		 */
		Private_article_private_link(): Observable<Array<PrivateLink>> {
			return this.http.get<Array<PrivateLink>>(this.baseUri + 'account/articles/{article_id}/private_links', {});
		}

		/**
		 * Create private link
		 * Create new private link for this article
		 * Post account/articles/{article_id}/private_links
		 * @return {void} 
		 */
		Private_article_private_link_create(requestBody: PrivateLinkCreator): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/articles/{article_id}/private_links', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable private link
		 * Disable/delete private link for this article
		 * Delete account/articles/{article_id}/private_links/{link_id}
		 * @return {void} 
		 */
		Private_article_private_link_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/articles/{article_id}/private_links/{link_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update private link
		 * Update existing private link for this article
		 * Put account/articles/{article_id}/private_links/{link_id}
		 * @return {void} 
		 */
		Private_article_private_link_update(requestBody: PrivateLinkCreator): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/articles/{article_id}/private_links/{link_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Article Publish
		 * - If the whole article is under embargo, it will not be published immediately, but when the embargo expires or is lifted.
		 * - When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.
		 * Post account/articles/{article_id}/publish
		 * @param {number} article_id Article unique identifier
		 * @return {void} 
		 */
		Private_article_publish(article_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/articles/' + article_id + '/publish', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Article Reserve DOI
		 * Reserve DOI for article
		 * Post account/articles/{article_id}/reserve_doi
		 * @param {number} article_id Article unique identifier
		 * @return {ArticleDOI} OK
		 */
		Private_article_reserve_doi(article_id: number): Observable<ArticleDOI> {
			return this.http.post<ArticleDOI>(this.baseUri + 'account/articles/' + article_id + '/reserve_doi', null, {});
		}

		/**
		 * Private Article Reserve Handle
		 * Reserve Handle for article
		 * Post account/articles/{article_id}/reserve_handle
		 * @param {number} article_id Article unique identifier
		 * @return {ArticleHandle} OK
		 */
		Private_article_reserve_handle(article_id: number): Observable<ArticleHandle> {
			return this.http.post<ArticleHandle>(this.baseUri + 'account/articles/' + article_id + '/reserve_handle', null, {});
		}

		/**
		 * Private Article Resource
		 * Edit article resource data.
		 * Post account/articles/{article_id}/resource
		 * @param {number} article_id Article unique identifier
		 * @param {Resource} requestBody Resource data
		 * @return {void} 
		 */
		Private_article_resource(article_id: number, requestBody: Resource): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/articles/' + article_id + '/resource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update article version
		 * Updating an article version by passing body parameters; request can also be made with the PATCH method.
		 * Put account/articles/{article_id}/versions/{version_id}/
		 * @param {number} article_id Article unique identifier
		 * @param {number} version_id Article version identifier
		 * @param {ArticleUpdate} requestBody Article description
		 * @return {void} 
		 */
		Article_version_update(article_id: number, version_id: number, requestBody: ArticleUpdate): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/articles/' + article_id + '/versions/' + version_id + '/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update article version thumbnail
		 * For a given public article version update the article thumbnail by choosing one of the associated files
		 * Put account/articles/{article_id}/versions/{version_id}/update_thumb
		 * @param {number} article_id Article unique identifier
		 * @param {number} version_id Article version identifier
		 * @param {FileId} requestBody File ID
		 * @return {void} 
		 */
		Article_version_update_thumb(article_id: number, version_id: number, requestBody: FileId): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/articles/' + article_id + '/versions/' + version_id + '/update_thumb', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search Authors
		 * Search for authors
		 * Post account/authors/search
		 * @param {PrivateAuthorsSearch} requestBody Search Parameters
		 * @return {Array<Author>} OK. An array of authors
		 */
		Private_authors_search(requestBody: PrivateAuthorsSearch): Observable<Array<Author>> {
			return this.http.post<Array<Author>>(this.baseUri + 'account/authors/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Author details
		 * View author details
		 * Get account/authors/{author_id}
		 * @return {AuthorComplete} OK. Article representation
		 */
		Private_author_details(): Observable<AuthorComplete> {
			return this.http.get<AuthorComplete>(this.baseUri + 'account/authors/{author_id}', {});
		}

		/**
		 * Private Account Categories
		 * List institution categories (including parent Categories)
		 * Get account/categories
		 * @return {Array<Category>} OK. An array of categories
		 */
		Private_categories_list(): Observable<Array<Category>> {
			return this.http.get<Array<Category>>(this.baseUri + 'account/categories', {});
		}

		/**
		 * Private Collections List
		 * List private collections
		 * Get account/collections
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @param {CollectionSearchOrder} order The field by which to order. Default varies by endpoint/resource.
		 * @return {Array<Collection>} OK. An array of collections
		 */
		Private_collections_list(page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined, order: CollectionSearchOrder | null | undefined, order_direction: CommonSearchOrder_direction | null | undefined): Observable<Array<Collection>> {
			return this.http.get<Array<Collection>>(this.baseUri + 'account/collections?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset + '&order=' + order + '&order_direction=' + order_direction, {});
		}

		/**
		 * Create collection
		 * Create a new Collection by sending collection information
		 * Post account/collections
		 * @param {CollectionCreate} requestBody Collection description
		 * @return {void} 
		 */
		Private_collection_create(requestBody: CollectionCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Collections Search
		 * Returns a list of private Collections
		 * Post account/collections/search
		 * @param {PrivateCollectionSearch} requestBody Search Parameters
		 * @return {Array<Collection>} OK. An array of collections
		 */
		Private_collections_search(requestBody: PrivateCollectionSearch): Observable<Array<Collection>> {
			return this.http.post<Array<Collection>>(this.baseUri + 'account/collections/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete collection
		 * Delete n collection
		 * Delete account/collections/{collection_id}
		 * @return {void} 
		 */
		Private_collection_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/collections/{collection_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Collection details
		 * View a collection
		 * Get account/collections/{collection_id}
		 * @return {CollectionCompletePrivate} OK. Collection representation
		 */
		Private_collection_details(): Observable<CollectionCompletePrivate> {
			return this.http.get<CollectionCompletePrivate>(this.baseUri + 'account/collections/{collection_id}', {});
		}

		/**
		 * Update collection
		 * Update collection details; request can also be made with the PATCH method.
		 * Put account/collections/{collection_id}
		 * @param {CollectionUpdate} requestBody Collection description
		 * @return {void} 
		 */
		Private_collection_update(requestBody: CollectionUpdate): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/collections/{collection_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List collection articles
		 * List collection articles
		 * Get account/collections/{collection_id}/articles
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @return {Array<Article>} OK. Articles List
		 */
		Private_collection_articles_list(page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + 'account/collections/{collection_id}/articles?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Add collection articles
		 * Associate new articles with the collection. This will add new articles to the list of already associated articles
		 * Post account/collections/{collection_id}/articles
		 * @param {ArticlesCreator} requestBody Articles list
		 * @return {void} 
		 */
		Private_collection_articles_add(requestBody: ArticlesCreator): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/collections/{collection_id}/articles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace collection articles
		 * Associate new articles with the collection. This will remove all already associated articles and add these new ones
		 * Put account/collections/{collection_id}/articles
		 * @param {ArticlesCreator} requestBody Articles List
		 * @return {void} 
		 */
		Private_collection_articles_replace(requestBody: ArticlesCreator): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/collections/{collection_id}/articles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete collection article
		 * De-associate article from collection
		 * Delete account/collections/{collection_id}/articles/{article_id}
		 * @param {number} collection_id Collection unique identifier
		 * @param {number} article_id Collection article unique identifier
		 * @return {void} 
		 */
		Private_collection_article_delete(collection_id: number, article_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/collections/' + collection_id + '/articles/' + article_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List collection authors
		 * List collection authors
		 * Get account/collections/{collection_id}/authors
		 * @return {Array<Author>} OK. Embargo for article
		 */
		Private_collection_authors_list(): Observable<Array<Author>> {
			return this.http.get<Array<Author>>(this.baseUri + 'account/collections/{collection_id}/authors', {});
		}

		/**
		 * Add collection authors
		 * Associate new authors with the collection. This will add new authors to the list of already associated authors
		 * Post account/collections/{collection_id}/authors
		 * @param {AuthorsCreator2} requestBody List of authors
		 * @return {void} 
		 */
		Private_collection_authors_add(requestBody: AuthorsCreator2): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/collections/{collection_id}/authors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace collection authors
		 * Associate new authors with the collection. This will remove all already associated authors and add these new ones
		 * Put account/collections/{collection_id}/authors
		 * @param {AuthorsCreator2} requestBody List of authors
		 * @return {void} 
		 */
		Private_collection_authors_replace(requestBody: AuthorsCreator2): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/collections/{collection_id}/authors', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete collection author
		 * Delete collection author
		 * Delete account/collections/{collection_id}/authors/{author_id}
		 * @param {number} collection_id Collection unique identifier
		 * @param {number} author_id Collection Author unique identifier
		 * @return {void} 
		 */
		Private_collection_author_delete(collection_id: number, author_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/collections/' + collection_id + '/authors/' + author_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List collection categories
		 * List collection categories
		 * Get account/collections/{collection_id}/categories
		 * @return {Array<Category>} OK. Categories list
		 */
		Private_collection_categories_list(): Observable<Array<Category>> {
			return this.http.get<Array<Category>>(this.baseUri + 'account/collections/{collection_id}/categories', {});
		}

		/**
		 * Add collection categories
		 * Associate new categories with the collection. This will add new categories to the list of already associated categories
		 * Post account/collections/{collection_id}/categories
		 * @param {CategoriesCreator2} requestBody Categories list
		 * @return {void} 
		 */
		Private_collection_categories_add(requestBody: CategoriesCreator2): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/collections/{collection_id}/categories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace collection categories
		 * Associate new categories with the collection. This will remove all already associated categories and add these new ones
		 * Put account/collections/{collection_id}/categories
		 * @param {CategoriesCreator2} requestBody Categories list
		 * @return {void} 
		 */
		Private_collection_categories_replace(requestBody: CategoriesCreator2): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/collections/{collection_id}/categories', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete collection category
		 * De-associate category from collection
		 * Delete account/collections/{collection_id}/categories/{category_id}
		 * @param {number} collection_id Collection unique identifier
		 * @param {number} category_id Collection category unique identifier
		 * @return {void} 
		 */
		Private_collection_category_delete(collection_id: number, category_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/collections/' + collection_id + '/categories/' + category_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List collection private links
		 * List article private links
		 * Get account/collections/{collection_id}/private_links
		 * @return {Array<PrivateLink>} OK. Collection private links
		 */
		Private_collection_private_links_list(): Observable<Array<PrivateLink>> {
			return this.http.get<Array<PrivateLink>>(this.baseUri + 'account/collections/{collection_id}/private_links', {});
		}

		/**
		 * Create collection private link
		 * Create new private link
		 * Post account/collections/{collection_id}/private_links
		 * @return {void} 
		 */
		Private_collection_private_link_create(requestBody: CollectionPrivateLinkCreator): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/collections/{collection_id}/private_links', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable private link
		 * Disable/delete private link for this collection
		 * Delete account/collections/{collection_id}/private_links/{link_id}
		 * @return {void} 
		 */
		Private_collection_private_link_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/collections/{collection_id}/private_links/{link_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update collection private link
		 * Update existing private link for this collection
		 * Put account/collections/{collection_id}/private_links/{link_id}
		 * @return {void} 
		 */
		Private_collection_private_link_update(requestBody: CollectionPrivateLinkCreator): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/collections/{collection_id}/private_links/{link_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Collection Publish
		 * When a collection is published, a new public version will be generated. Any further updates to the collection will affect the private collection data. In order to make these changes publicly visible, an explicit publish operation is needed.
		 * Post account/collections/{collection_id}/publish
		 * @param {number} collection_id Collection Unique identifier
		 * @return {void} 
		 */
		Private_collection_publish(collection_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/collections/' + collection_id + '/publish', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Collection Reserve DOI
		 * Reserve DOI for collection
		 * Post account/collections/{collection_id}/reserve_doi
		 * @param {number} collection_id Collection Unique identifier
		 * @return {CollectionDOI} OK
		 */
		Private_collection_reserve_doi(collection_id: number): Observable<CollectionDOI> {
			return this.http.post<CollectionDOI>(this.baseUri + 'account/collections/' + collection_id + '/reserve_doi', null, {});
		}

		/**
		 * Private Collection Reserve Handle
		 * Reserve Handle for collection
		 * Post account/collections/{collection_id}/reserve_handle
		 * @param {number} collection_id Collection Unique identifier
		 * @return {CollectionHandle} OK
		 */
		Private_collection_reserve_handle(collection_id: number): Observable<CollectionHandle> {
			return this.http.post<CollectionHandle>(this.baseUri + 'account/collections/' + collection_id + '/reserve_handle', null, {});
		}

		/**
		 * Private Collection Resource
		 * Edit collection resource data.
		 * Post account/collections/{collection_id}/resource
		 * @param {number} collection_id Collection unique identifier
		 * @param {Resource} requestBody Resource data
		 * @return {void} 
		 */
		Private_collection_resource(collection_id: number, requestBody: Resource): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/collections/' + collection_id + '/resource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Search Funding
		 * Search for fundings
		 * Post account/funding/search
		 * @param {FundingSearch} requestBody Search Parameters
		 * @return {Array<FundingInformation>} OK. An array of funding information
		 */
		Private_funding_search(requestBody: FundingSearch): Observable<Array<FundingInformation>> {
			return this.http.post<Array<FundingInformation>>(this.baseUri + 'account/funding/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Private Account Institutions
		 * Account institution details
		 * Get account/institution
		 * @return {Institution} OK. An array of institutions
		 */
		Private_institution_details(): Observable<Institution> {
			return this.http.get<Institution>(this.baseUri + 'account/institution', {});
		}

		/**
		 * Private Account Institution Accounts
		 * Returns the accounts for which the account has administrative privileges (assigned and inherited).
		 * Get account/institution/accounts
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @param {number} is_active Filter by active status
		 * @param {string} institution_user_id Filter by institution_user_id
		 * @param {string} email Filter by email
		 * @param {number} id_lte Retrieve accounts with an ID lower or equal to the specified value
		 * @param {number} id_gte Retrieve accounts with an ID greater or equal to the specified value
		 * @return {Array<ShortAccount>} OK. An array of Accounts
		 */
		Private_institution_accounts_list(page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined, is_active: number | null | undefined, institution_user_id: string | null | undefined, email: string | null | undefined, id_lte: number | null | undefined, id_gte: number | null | undefined): Observable<Array<ShortAccount>> {
			return this.http.get<Array<ShortAccount>>(this.baseUri + 'account/institution/accounts?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset + '&is_active=' + is_active + '&institution_user_id=' + (institution_user_id == null ? '' : encodeURIComponent(institution_user_id)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&id_lte=' + id_lte + '&id_gte=' + id_gte, {});
		}

		/**
		 * Create new Institution Account
		 * Create a new Account by sending account information
		 * Post account/institution/accounts
		 * @param {AccountCreate} requestBody Account description
		 * @return {void} 
		 */
		Private_institution_accounts_create(requestBody: AccountCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/institution/accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Account Institution Accounts Search
		 * Returns the accounts for which the account has administrative privileges (assigned and inherited).
		 * Post account/institution/accounts/search
		 * @param {InstitutionAccountsSearch} requestBody Search Parameters
		 * @return {Array<ShortAccount>} OK. An array of Accounts
		 */
		Private_institution_accounts_search(requestBody: InstitutionAccountsSearch): Observable<Array<ShortAccount>> {
			return this.http.post<Array<ShortAccount>>(this.baseUri + 'account/institution/accounts/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update Institution Account
		 * Update Institution Account
		 * Put account/institution/accounts/{account_id}
		 * @param {number} account_id Account identifier the user is associated to
		 * @param {AccountUpdate} requestBody Account description
		 * @return {void} 
		 */
		Private_institution_accounts_update(account_id: number, requestBody: AccountUpdate): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/institution/accounts/' + account_id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Institution Articles
		 * Get Articles from own institution. User must be administrator of the institution
		 * Get account/institution/articles
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @param {ArticleSearchOrder} order The field by which to order. Default varies by endpoint/resource.
		 * @param {string} published_since Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
		 * @param {string} modified_since Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
		 * @param {number} status only return collections with this status
		 * @param {string} resource_doi only return collections with this resource_doi
		 * @param {number} item_type Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model
		 * @return {Array<Article>} OK. An array of articles belonging to the institution
		 */
		Private_institution_articles(page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined, order: ArticleSearchOrder | null | undefined, order_direction: CommonSearchOrder_direction | null | undefined, published_since: string | null | undefined, modified_since: string | null | undefined, status: number | null | undefined, resource_doi: string | null | undefined, item_type: number | null | undefined): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + 'account/institution/articles?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset + '&order=' + order + '&order_direction=' + order_direction + '&published_since=' + (published_since == null ? '' : encodeURIComponent(published_since)) + '&modified_since=' + (modified_since == null ? '' : encodeURIComponent(modified_since)) + '&status=' + status + '&resource_doi=' + (resource_doi == null ? '' : encodeURIComponent(resource_doi)) + '&item_type=' + item_type, {});
		}

		/**
		 * Private account institution group custom fields
		 * Returns the custom fields in the group the user belongs to, or the ones in the group specified, if the user has access.
		 * Get account/institution/custom_fields
		 * @param {number} group_id Group_id
		 * @return {Array<ShortCustomField>} OK. An array of custom fields
		 */
		Custom_fields_list(group_id: number | null | undefined): Observable<Array<ShortCustomField>> {
			return this.http.get<Array<ShortCustomField>>(this.baseUri + 'account/institution/custom_fields?group_id=' + group_id, {});
		}

		/**
		 * Private Account Institution embargo options
		 * Account institution embargo options details
		 * Get account/institution/embargo_options
		 * @return {Array<GroupEmbargoOptions>} OK. An array of embargo options
		 */
		Private_institution_embargo_options_details(): Observable<Array<GroupEmbargoOptions>> {
			return this.http.get<Array<GroupEmbargoOptions>>(this.baseUri + 'account/institution/embargo_options', {});
		}

		/**
		 * Private Account Institution Groups
		 * Returns the groups for which the account has administrative privileges (assigned and inherited).
		 * Get account/institution/groups
		 * @return {Array<Group>} OK. An array of Groups
		 */
		Private_institution_groups_list(): Observable<Array<Group>> {
			return this.http.get<Array<Group>>(this.baseUri + 'account/institution/groups', {});
		}

		/**
		 * Private Account Institution Group Embargo Options
		 * Account institution group embargo options details
		 * Get account/institution/groups/{group_id}/embargo_options
		 * @param {number} group_id Group identifier
		 * @return {Array<GroupEmbargoOptions>} OK. An array of embargo options
		 */
		Private_group_embargo_options_details(group_id: number): Observable<Array<GroupEmbargoOptions>> {
			return this.http.get<Array<GroupEmbargoOptions>>(this.baseUri + 'account/institution/groups/' + group_id + '/embargo_options', {});
		}

		/**
		 * Institution Curation Review
		 * Retrieve a certain curation review by its ID
		 * Get account/institution/review/{curation_id}
		 * @return {CurationDetail} OK. A curation review.
		 */
		Account_institution_curation(): Observable<CurationDetail> {
			return this.http.get<CurationDetail>(this.baseUri + 'account/institution/review/{curation_id}', {});
		}

		/**
		 * Institution Curation Review Comments
		 * Retrieve a certain curation review's comments.
		 * Get account/institution/review/{curation_id}/comments
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @return {CurationComment} OK. A curation review's comments.
		 */
		Account_institution_curation_comments(limit: number | null | undefined, offset: number | null | undefined): Observable<CurationComment> {
			return this.http.get<CurationComment>(this.baseUri + 'account/institution/review/{curation_id}/comments?limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * POST Institution Curation Review Comment
		 * Add a new comment to the review.
		 * Post account/institution/review/{curation_id}/comments
		 * @param {CurationCommentCreate} requestBody The content/value of the comment.
		 * @return {void} OK.
		 */
		InstitutionsPost(requestBody: CurationCommentCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/institution/review/{curation_id}/comments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Institution Curation Reviews
		 * Retrieve a list of curation reviews for this institution
		 * Get account/institution/reviews
		 * @param {number} group_id Filter by the group ID
		 * @param {number} article_id Retrieve the reviews for this article
		 * @param {CurationStatus} status Filter by the status of the review
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @return {Curation} OK. A list of curation reviews.
		 */
		Account_institution_curations(group_id: number | null | undefined, article_id: number | null | undefined, status: CurationStatus | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<Curation> {
			return this.http.get<Curation>(this.baseUri + 'account/institution/reviews?group_id=' + group_id + '&article_id=' + article_id + '&status=' + status + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Private Account Institution Roles
		 * Returns the roles available for groups and the institution group.
		 * Get account/institution/roles
		 * @return {Array<Role>} OK. An array of Roles
		 */
		Private_institution_roles_list(): Observable<Array<Role>> {
			return this.http.get<Array<Role>>(this.baseUri + 'account/institution/roles', {});
		}

		/**
		 * List Institution Account Group Roles
		 * List Institution Account Group Roles
		 * Get account/institution/roles/{account_id}
		 * @return {AccountGroupRoles} OK. Account Group Roles
		 */
		Private_institution_account_group_roles(): Observable<AccountGroupRoles> {
			return this.http.get<AccountGroupRoles>(this.baseUri + 'account/institution/roles/{account_id}', {});
		}

		/**
		 * Add Institution Account Group Roles
		 * Add Institution Account Group Roles
		 * Post account/institution/roles/{account_id}
		 * @param {AccountGroupRolesCreate} requestBody Account description
		 * @return {void} 
		 */
		Private_institution_account_group_roles_create(requestBody: AccountGroupRolesCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/institution/roles/{account_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Institution Account Group Role
		 * Delete Institution Account Group Role
		 * Delete account/institution/roles/{account_id}/{group_id}/{role_id}
		 * @param {number} account_id Account identifier for which to remove the role
		 * @param {number} group_id Group identifier for which to remove the role
		 * @param {number} role_id Role identifier
		 * @return {void} 
		 */
		Private_institution_account_group_role_delete(account_id: number, group_id: number, role_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/institution/roles/' + account_id + '/' + group_id + '/' + role_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Account Institution User
		 * Retrieve institution user information using the account_id
		 * Get account/institution/users/{account_id}
		 * @param {number} account_id Account identifier the user is associated to
		 * @return {User} OK. User representation
		 */
		Private_account_institution_user(account_id: number): Observable<User> {
			return this.http.get<User>(this.baseUri + 'account/institution/users/' + account_id, {});
		}

		/**
		 * Private Account Licenses
		 * This is a private endpoint that requires OAuth. It will return a list with figshare public licenses AND licenses defined for account's institution.
		 * Get account/licenses
		 * @return {Array<License>} OK. An array of personal licenses
		 */
		Private_licenses_list(): Observable<Array<License>> {
			return this.http.get<Array<License>>(this.baseUri + 'account/licenses', {});
		}

		/**
		 * Private Projects
		 * List private projects
		 * Get account/projects
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @param {ProjectsSearchOrder} order The field by which to order.
		 * @param {Private_projects_listStorage} storage only return collections from this institution
		 * @param {string} roles Any combination of owner, collaborator, viewer separated by comma. Examples: "owner" or "owner,collaborator".
		 * @return {Array<ProjectPrivate>} OK. An array of projects
		 */
		Private_projects_list(page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined, order: ProjectsSearchOrder | null | undefined, order_direction: CommonSearchOrder_direction | null | undefined, storage: Private_projects_listStorage | null | undefined, roles: string | null | undefined): Observable<Array<ProjectPrivate>> {
			return this.http.get<Array<ProjectPrivate>>(this.baseUri + 'account/projects?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset + '&order=' + order + '&order_direction=' + order_direction + '&storage=' + storage + '&roles=' + (roles == null ? '' : encodeURIComponent(roles)), {});
		}

		/**
		 * Create project
		 * Create a new project
		 * Post account/projects
		 * @param {ProjectCreate} requestBody Project  description
		 * @return {void} 
		 */
		Private_project_create(requestBody: ProjectCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Projects search
		 * Search inside the private projects
		 * Post account/projects/search
		 * @param {ProjectsSearch} requestBody Search Parameters
		 * @return {Array<ProjectPrivate>} OK. An array of projects
		 */
		Private_projects_search(requestBody: ProjectsSearch): Observable<Array<ProjectPrivate>> {
			return this.http.post<Array<ProjectPrivate>>(this.baseUri + 'account/projects/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete project
		 * A project can be deleted only if: - it is not public - it does not have public articles.
		 * When an individual project is deleted, all the articles are moved to my data of each owner.
		 * When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.
		 * Delete account/projects/{project_id}
		 * @return {void} 
		 */
		Private_project_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/projects/{project_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * View project details
		 * View a private project
		 * Get account/projects/{project_id}
		 * @return {ProjectCompletePrivate} OK. Project representation
		 */
		Private_project_details(): Observable<ProjectCompletePrivate> {
			return this.http.get<ProjectCompletePrivate>(this.baseUri + 'account/projects/{project_id}', {});
		}

		/**
		 * Update project
		 * Updating an project by passing body parameters; request can also be made with the PATCH method.
		 * Put account/projects/{project_id}
		 * @param {ProjectUpdate} requestBody Project description
		 * @return {void} 
		 */
		Private_project_update(requestBody: ProjectUpdate): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/projects/{project_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List project articles
		 * List project articles
		 * Get account/projects/{project_id}/articles
		 * @return {Array<Article>} OK. List of articles
		 */
		Private_project_articles_list(): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + 'account/projects/{project_id}/articles', {});
		}

		/**
		 * Create project article
		 * Create a new Article and associate it with this project
		 * Post account/projects/{project_id}/articles
		 * @param {ArticleProjectCreate} requestBody Article description
		 * @return {void} 
		 */
		Private_project_articles_create(requestBody: ArticleProjectCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/projects/{project_id}/articles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete project article
		 * Delete project article
		 * Delete account/projects/{project_id}/articles/{article_id}
		 * @return {void} 
		 */
		Private_project_article_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/projects/{project_id}/articles/{article_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Project article details
		 * Project article details
		 * Get account/projects/{project_id}/articles/{article_id}
		 * @return {ProjectArticle} OK. Article representation
		 */
		Private_project_article_details(): Observable<ProjectArticle> {
			return this.http.get<ProjectArticle>(this.baseUri + 'account/projects/{project_id}/articles/{article_id}', {});
		}

		/**
		 * Project article list files
		 * List article files
		 * Get account/projects/{project_id}/articles/{article_id}/files
		 * @param {number} project_id Project unique identifier
		 * @param {number} article_id Project Article unique identifier
		 * @return {Array<PrivateFile>} OK. List of files
		 */
		Private_project_article_files(project_id: number, article_id: number): Observable<Array<PrivateFile>> {
			return this.http.get<Array<PrivateFile>>(this.baseUri + 'account/projects/' + project_id + '/articles/' + article_id + '/files', {});
		}

		/**
		 * Project article file details
		 * Project article file details
		 * Get account/projects/{project_id}/articles/{article_id}/files/{file_id}
		 * @param {number} project_id Project unique identifier
		 * @param {number} article_id Project Article unique identifier
		 * @param {number} file_id File unique identifier
		 * @return {PrivateFile} OK. File representation
		 */
		Private_project_article_file(project_id: number, article_id: number, file_id: number): Observable<PrivateFile> {
			return this.http.get<PrivateFile>(this.baseUri + 'account/projects/' + project_id + '/articles/' + article_id + '/files/' + file_id, {});
		}

		/**
		 * List project collaborators
		 * List Project collaborators and invited users
		 * Get account/projects/{project_id}/collaborators
		 * @return {Array<ProjectCollaborator>} OK. List of Collaborators
		 */
		Private_project_collaborators_list(): Observable<Array<ProjectCollaborator>> {
			return this.http.get<Array<ProjectCollaborator>>(this.baseUri + 'account/projects/{project_id}/collaborators', {});
		}

		/**
		 * Invite project collaborators
		 * Invite users to collaborate on project or view the project
		 * Post account/projects/{project_id}/collaborators
		 * @param {ProjectCollaboratorInvite} requestBody viewer or collaborator role. User user_id or email of user
		 * @return {void} 
		 */
		Private_project_collaborators_invite(requestBody: ProjectCollaboratorInvite): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/projects/{project_id}/collaborators', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove project collaborator
		 * Remove project collaborator
		 * Delete account/projects/{project_id}/collaborators/{user_id}
		 * @param {number} project_id Project unique identifier
		 * @param {number} user_id User unique identifier
		 * @return {void} 
		 */
		Private_project_collaborator__Delete(project_id: number, user_id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/projects/' + project_id + '/collaborators/' + user_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Project Leave
		 * Please note: project's owner cannot leave the project.
		 * Post account/projects/{project_id}/leave
		 * @param {number} project_id Project unique identifier
		 * @return {void} 
		 */
		Private_project_leave(project_id: number): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/projects/' + project_id + '/leave', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List project notes
		 * List project notes
		 * Get account/projects/{project_id}/notes
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @return {Array<ProjectNote>} OK. List of project notes
		 */
		Private_project_notes_list(page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<Array<ProjectNote>> {
			return this.http.get<Array<ProjectNote>>(this.baseUri + 'account/projects/{project_id}/notes?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Create project note
		 * Create a new project note
		 * Post account/projects/{project_id}/notes
		 * @param {ProjectNoteCreate} requestBody Note message
		 * @return {void} 
		 */
		Private_project_notes_create(requestBody: ProjectNoteCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'account/projects/{project_id}/notes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete project note
		 * Delete account/projects/{project_id}/notes/{note_id}
		 * @return {void} 
		 */
		Private_project_note_delete(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'account/projects/{project_id}/notes/{note_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Project note details
		 * Get account/projects/{project_id}/notes/{note_id}
		 * @return {ProjectNotePrivate} OK. Note representation
		 */
		Private_project_note(): Observable<ProjectNotePrivate> {
			return this.http.get<ProjectNotePrivate>(this.baseUri + 'account/projects/{project_id}/notes/{note_id}', {});
		}

		/**
		 * Update project note
		 * Put account/projects/{project_id}/notes/{note_id}
		 * @param {ProjectNoteCreate} requestBody Note message
		 * @return {void} 
		 */
		Private_project_note_update(requestBody: ProjectNoteCreate): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'account/projects/{project_id}/notes/{note_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Private Project Publish
		 * Publish a project. Possible after all items inside it are public
		 * Post account/projects/{project_id}/publish
		 * @param {number} project_id Project unique identifier
		 * @return {ResponseMessage} OK
		 */
		Private_project_publish(project_id: number): Observable<ResponseMessage> {
			return this.http.post<ResponseMessage>(this.baseUri + 'account/projects/' + project_id + '/publish', null, {});
		}

		/**
		 * Public Articles
		 * Returns a list of public articles
		 * Get articles
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @param {ArticleSearchOrder} order The field by which to order. Default varies by endpoint/resource.
		 * @param {number} institution only return articles from this institution
		 * @param {string} published_since Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
		 * @param {string} modified_since Filter by article modified date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
		 * @param {number} group only return articles from this group
		 * @param {string} resource_doi only return articles with this resource_doi
		 * @param {number} item_type Only return articles with the respective type. Mapping for item_type is: 1 - Figure, 2 - Media, 3 - Dataset, 5 - Poster, 6 - Journal contribution, 7 - Presentation, 8 - Thesis, 9 - Software, 11 - Online resource, 12 - Preprint, 13 - Book, 14 - Conference contribution, 15 - Chapter, 16 - Peer review, 17 - Educational resource, 18 - Report, 19 - Standard, 20 - Composition, 21 - Funding, 22 - Physical object, 23 - Data management plan, 24 - Workflow, 25 - Monograph, 26 - Performance, 27 - Event, 28 - Service, 29 - Model
		 * @param {string} doi only return articles with this doi
		 * @param {string} handle only return articles with this handle
		 * @return {Array<Article>} OK. An array of articles
		 */
		Articles_list(page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined, order: ArticleSearchOrder | null | undefined, order_direction: CommonSearchOrder_direction | null | undefined, institution: number | null | undefined, published_since: string | null | undefined, modified_since: string | null | undefined, group: number | null | undefined, resource_doi: string | null | undefined, item_type: number | null | undefined, doi: string | null | undefined, handle: string | null | undefined): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + 'articles?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset + '&order=' + order + '&order_direction=' + order_direction + '&institution=' + institution + '&published_since=' + (published_since == null ? '' : encodeURIComponent(published_since)) + '&modified_since=' + (modified_since == null ? '' : encodeURIComponent(modified_since)) + '&group=' + group + '&resource_doi=' + (resource_doi == null ? '' : encodeURIComponent(resource_doi)) + '&item_type=' + item_type + '&doi=' + (doi == null ? '' : encodeURIComponent(doi)) + '&handle=' + (handle == null ? '' : encodeURIComponent(handle)), {});
		}

		/**
		 * Public Articles Search
		 * Returns a list of public articles, filtered by the search parameters
		 * Post articles/search
		 * @param {ArticleSearch} requestBody Search Parameters
		 * @return {Array<ArticleWithProject>} OK. An array of articles
		 */
		Articles_search(requestBody: ArticleSearch): Observable<Array<ArticleWithProject>> {
			return this.http.post<Array<ArticleWithProject>>(this.baseUri + 'articles/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * View article details
		 * View an article
		 * Get articles/{article_id}
		 * @param {number} article_id Article Unique identifier
		 * @return {ArticleComplete} OK. Article representation
		 */
		Article_details(article_id: number): Observable<ArticleComplete> {
			return this.http.get<ArticleComplete>(this.baseUri + 'articles/' + article_id, {});
		}

		/**
		 * List article files
		 * Files list for article
		 * Get articles/{article_id}/files
		 * @param {number} article_id Article Unique identifier
		 * @return {Array<PublicFile>} OK. List of article files
		 */
		Article_files(article_id: number): Observable<Array<PublicFile>> {
			return this.http.get<Array<PublicFile>>(this.baseUri + 'articles/' + article_id + '/files', {});
		}

		/**
		 * Article file details
		 * File by id
		 * Get articles/{article_id}/files/{file_id}
		 * @param {number} article_id Article Unique identifier
		 * @param {number} file_id File Unique identifier
		 * @return {PublicFile} OK. File representation
		 */
		Article_file_details(article_id: number, file_id: number): Observable<PublicFile> {
			return this.http.get<PublicFile>(this.baseUri + 'articles/' + article_id + '/files/' + file_id, {});
		}

		/**
		 * List article versions
		 * List public article versions
		 * Get articles/{article_id}/versions
		 * @param {number} article_id Article Unique identifier
		 * @return {Array<ArticleVersions>} OK. Article version representations
		 */
		Article_versions(article_id: number): Observable<Array<ArticleVersions>> {
			return this.http.get<Array<ArticleVersions>>(this.baseUri + 'articles/' + article_id + '/versions', {});
		}

		/**
		 * Article details for version
		 * Article with specified version
		 * Get articles/{article_id}/versions/{v_number}
		 * @param {number} article_id Article Unique identifier
		 * @param {number} v_number Article Version Number
		 * @return {ArticleComplete} OK. Article representation
		 */
		Article_version_details(article_id: number, v_number: number): Observable<ArticleComplete> {
			return this.http.get<ArticleComplete>(this.baseUri + 'articles/' + article_id + '/versions/' + v_number, {});
		}

		/**
		 * Public Article Confidentiality for article version
		 * Confidentiality for article version. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
		 * Get articles/{article_id}/versions/{v_number}/confidentiality
		 * @param {number} article_id Article Unique identifier
		 * @param {number} v_number Version Number
		 * @return {ArticleConfidentiality} OK. Confidentiality representation
		 */
		Article_version_confidentiality(article_id: number, v_number: number): Observable<ArticleConfidentiality> {
			return this.http.get<ArticleConfidentiality>(this.baseUri + 'articles/' + article_id + '/versions/' + v_number + '/confidentiality', {});
		}

		/**
		 * Public Article Embargo for article version
		 * Embargo for article version
		 * Get articles/{article_id}/versions/{v_number}/embargo
		 * @param {number} article_id Article Unique identifier
		 * @param {number} v_number Version Number
		 * @return {ArticleEmbargo} OK. Embargo representation
		 */
		Article_version_embargo(article_id: number, v_number: number): Observable<ArticleEmbargo> {
			return this.http.get<ArticleEmbargo>(this.baseUri + 'articles/' + article_id + '/versions/' + v_number + '/embargo', {});
		}

		/**
		 * Public Categories
		 * Returns a list of public categories
		 * Get categories
		 * @return {Array<Category>} OK. An array of categories
		 */
		Categories_list(): Observable<Array<Category>> {
			return this.http.get<Array<Category>>(this.baseUri + 'categories', {});
		}

		/**
		 * Public Collections
		 * Returns a list of public collections
		 * Get collections
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @param {CollectionSearchOrder} order The field by which to order. Default varies by endpoint/resource.
		 * @param {number} institution only return collections from this institution
		 * @param {string} published_since Filter by collection publishing date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD
		 * @param {string} modified_since Filter by collection modified date. Will only return collections published after the date. date(ISO 8601) YYYY-MM-DD
		 * @param {number} group only return collections from this group
		 * @param {string} resource_doi only return collections with this resource_doi
		 * @param {string} doi only return collections with this doi
		 * @param {string} handle only return collections with this handle
		 * @return {Array<Collection>} OK. An array of collections
		 */
		Collections_list(page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined, order: CollectionSearchOrder | null | undefined, order_direction: CommonSearchOrder_direction | null | undefined, institution: number | null | undefined, published_since: string | null | undefined, modified_since: string | null | undefined, group: number | null | undefined, resource_doi: string | null | undefined, doi: string | null | undefined, handle: string | null | undefined): Observable<Array<Collection>> {
			return this.http.get<Array<Collection>>(this.baseUri + 'collections?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset + '&order=' + order + '&order_direction=' + order_direction + '&institution=' + institution + '&published_since=' + (published_since == null ? '' : encodeURIComponent(published_since)) + '&modified_since=' + (modified_since == null ? '' : encodeURIComponent(modified_since)) + '&group=' + group + '&resource_doi=' + (resource_doi == null ? '' : encodeURIComponent(resource_doi)) + '&doi=' + (doi == null ? '' : encodeURIComponent(doi)) + '&handle=' + (handle == null ? '' : encodeURIComponent(handle)), {});
		}

		/**
		 * Public Collections Search
		 * Returns a list of public collections
		 * Post collections/search
		 * @param {CollectionSearch} requestBody Search Parameters
		 * @return {Array<Collection>} OK. An array of collections
		 */
		Collections_search(requestBody: CollectionSearch): Observable<Array<Collection>> {
			return this.http.post<Array<Collection>>(this.baseUri + 'collections/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Collection details
		 * View a collection
		 * Get collections/{collection_id}
		 * @param {number} collection_id Collection Unique identifier
		 * @return {CollectionComplete} OK. Collection representation
		 */
		Collection_details(collection_id: number): Observable<CollectionComplete> {
			return this.http.get<CollectionComplete>(this.baseUri + 'collections/' + collection_id, {});
		}

		/**
		 * Public Collection Articles
		 * Returns a list of public collection articles
		 * Get collections/{collection_id}/articles
		 * @param {number} collection_id Collection Unique identifier
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @return {Array<Article>} OK. An array of articles belonging to the collection
		 */
		Collection_articles(collection_id: number, page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + 'collections/' + collection_id + '/articles?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset, {});
		}

		/**
		 * Collection Versions list
		 * Returns a list of public collection Versions
		 * Get collections/{collection_id}/versions
		 * @param {number} collection_id Collection Unique identifier
		 * @return {Array<CollectionVersions>} OK. An array of versions
		 */
		Collection_versions(collection_id: number): Observable<Array<CollectionVersions>> {
			return this.http.get<Array<CollectionVersions>>(this.baseUri + 'collections/' + collection_id + '/versions', {});
		}

		/**
		 * Collection Version details
		 * View details for a certain version of a collection
		 * Get collections/{collection_id}/versions/{version_id}
		 * @param {number} collection_id Collection Unique identifier
		 * @param {number} version_id Version Number
		 * @return {CollectionComplete} OK. Collection for that version
		 */
		Collection_version_details(collection_id: number, version_id: number): Observable<CollectionComplete> {
			return this.http.get<CollectionComplete>(this.baseUri + 'collections/' + collection_id + '/versions/' + version_id, {});
		}

		/**
		 * Public File Download
		 * Starts the download of a file
		 * Get file/download/{file_id}
		 * @return {void} OK
		 */
		File_download(file_id: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'file/download/' + file_id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Public Licenses
		 * Returns a list of articles belonging to the institution
		 * Get institutions/{institution_string_id}/articles/filter-by
		 * @return {Array<Article>} OK. An array of articles
		 */
		Institution_articles(institution_string_id: string, resource_id: string, filename: string): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + 'institutions/' + (institution_string_id == null ? '' : encodeURIComponent(institution_string_id)) + '/articles/filter-by&resource_id=' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '&filename=' + (filename == null ? '' : encodeURIComponent(filename)), {});
		}

		/**
		 * Item Types
		 * Returns the list of Item Types of the requested group. If no user is authenticated, returns the item types available for Figshare.
		 * Get item_types
		 * @param {number} group_id Identifier of the group for which the item types are requested
		 * @return {Array<ItemType>} OK. An array of item types
		 */
		Item_types_list(group_id: number | null | undefined): Observable<Array<ItemType>> {
			return this.http.get<Array<ItemType>>(this.baseUri + 'item_types?group_id=' + group_id, {});
		}

		/**
		 * Public Licenses
		 * Returns a list of public licenses
		 * Get licenses
		 * @return {Array<License>} OK. An array of licenses
		 */
		Licenses_list(): Observable<Array<License>> {
			return this.http.get<Array<License>>(this.baseUri + 'licenses', {});
		}

		/**
		 * Public Projects
		 * Returns a list of public projects
		 * Get projects
		 * @param {number} page Page number. Used for pagination with page_size
		 * @param {number} page_size The number of results included on a page. Used for pagination with page
		 * @param {number} limit Number of results included on a page. Used for pagination with query
		 * @param {number} offset Where to start the listing(the offset of the first result). Used for pagination with limit
		 * @param {ProjectsSearchOrder} order The field by which to order. Default varies by endpoint/resource.
		 * @param {number} institution only return collections from this institution
		 * @param {string} published_since Filter by article publishing date. Will only return articles published after the date. date(ISO 8601) YYYY-MM-DD
		 * @param {number} group only return collections from this group
		 * @return {Array<Project>} OK. An array of projects
		 */
		Projects_list(page: number | null | undefined, page_size: number | null | undefined, limit: number | null | undefined, offset: number | null | undefined, order: ProjectsSearchOrder | null | undefined, order_direction: CommonSearchOrder_direction | null | undefined, institution: number | null | undefined, published_since: string | null | undefined, group: number | null | undefined): Observable<Array<Project>> {
			return this.http.get<Array<Project>>(this.baseUri + 'projects?page=' + page + '&page_size=' + page_size + '&limit=' + limit + '&offset=' + offset + '&order=' + order + '&order_direction=' + order_direction + '&institution=' + institution + '&published_since=' + (published_since == null ? '' : encodeURIComponent(published_since)) + '&group=' + group, {});
		}

		/**
		 * Public Projects Search
		 * Returns a list of public articles
		 * Post projects/search
		 * @param {ProjectsSearch} requestBody Search Parameters
		 * @return {Array<Project>} OK. An array of projects
		 */
		Projects_search(requestBody: ProjectsSearch): Observable<Array<Project>> {
			return this.http.post<Array<Project>>(this.baseUri + 'projects/search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Public Project
		 * View a project
		 * Get projects/{project_id}
		 * @param {number} project_id Project Unique identifier
		 * @return {ProjectComplete} OK. Project representation
		 */
		Project_details(project_id: number): Observable<ProjectComplete> {
			return this.http.get<ProjectComplete>(this.baseUri + 'projects/' + project_id, {});
		}

		/**
		 * Public Project Articles
		 * List articles in project
		 * Get projects/{project_id}/articles
		 * @param {number} project_id Project Unique identifier
		 * @return {Array<Article>} OK. Project articles list
		 */
		Project_articles(project_id: number): Observable<Array<Article>> {
			return this.http.get<Array<Article>>(this.baseUri + 'projects/' + project_id + '/articles', {});
		}
	}

	export enum Private_projects_listStorage { group = 0, individual = 1 }

}

