import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** A login credential mapped to a user identity. For password credentials, the username to present for Basic auth is the user's username from the user record */
	export interface AccessCredential {

		/** The timestamp of creation of the credential */
		created_at?: string | null;

		/**
		 * The type of credential
		 * Required
		 */
		type: AccessCredentialType;

		/**
		 * The credential value (e.g. the password)
		 * Required
		 */
		value: string;
	}

	/** A login credential mapped to a user identity. For password credentials, the username to present for Basic auth is the user's username from the user record */
	export interface AccessCredentialFormProperties {

		/** The timestamp of creation of the credential */
		created_at: FormControl<string | null | undefined>,

		/**
		 * The type of credential
		 * Required
		 */
		type: FormControl<AccessCredentialType | null | undefined>,

		/**
		 * The credential value (e.g. the password)
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAccessCredentialFormGroup() {
		return new FormGroup<AccessCredentialFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AccessCredentialType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AccessCredentialType { password = 'password' }


	/** Account information */
	export interface Account {

		/** The timestamp when the account was created */
		created_at?: Date | null;

		/** Optional email address associated with the account */
		email?: string | null;

		/** The timestamp of the last update to the account metadata itself (not users or creds) */
		last_updated?: Date | null;

		/**
		 * The account identifier, not updatable after creation
		 * Required
		 */
		name: string;

		/** State of the account. Disabled accounts prevent member users from logging in, deleting accounts are disabled and pending deletion and will be removed once all owned resources are garbage collected by the system */
		state?: AccountState | null;

		/** The user type (admin vs user). If not specified in a POST request, 'user' is default */
		type?: AccountType | null;
	}

	/** Account information */
	export interface AccountFormProperties {

		/** The timestamp when the account was created */
		created_at: FormControl<Date | null | undefined>,

		/** Optional email address associated with the account */
		email: FormControl<string | null | undefined>,

		/** The timestamp of the last update to the account metadata itself (not users or creds) */
		last_updated: FormControl<Date | null | undefined>,

		/**
		 * The account identifier, not updatable after creation
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** State of the account. Disabled accounts prevent member users from logging in, deleting accounts are disabled and pending deletion and will be removed once all owned resources are garbage collected by the system */
		state: FormControl<AccountState | null | undefined>,

		/** The user type (admin vs user). If not specified in a POST request, 'user' is default */
		type: FormControl<AccountType | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<AccountState | null | undefined>(undefined),
			type: new FormControl<AccountType | null | undefined>(undefined),
		});

	}

	export enum AccountState { enabled = 'enabled', disabled = 'disabled', deleting = 'deleting' }

	export enum AccountType { user = 'user', admin = 'admin', service = 'service' }


	/** An account to create/add to the system. If already exists will return 400. */
	export interface AccountCreationRequest {

		/** An optional email to associate with the account for contact purposes */
		email?: string | null;

		/**
		 * The account name to use. This will identify the account and must be globally unique in the system.
		 * Required
		 */
		name: string;
	}

	/** An account to create/add to the system. If already exists will return 400. */
	export interface AccountCreationRequestFormProperties {

		/** An optional email to associate with the account for contact purposes */
		email: FormControl<string | null | undefined>,

		/**
		 * The account name to use. This will identify the account and must be globally unique in the system.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAccountCreationRequestFormGroup() {
		return new FormGroup<AccountCreationRequestFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9@.!#$+-=^_`~;]{1,126}[a-zA-Z0-9]$')]),
		});

	}


	/** A summary of account status */
	export interface AccountStatus {

		/** The status of the account */
		state?: AccountStatusState | null;
	}

	/** A summary of account status */
	export interface AccountStatusFormProperties {

		/** The status of the account */
		state: FormControl<AccountStatusState | null | undefined>,
	}
	export function CreateAccountStatusFormGroup() {
		return new FormGroup<AccountStatusFormProperties>({
			state: new FormControl<AccountStatusState | null | undefined>(undefined),
		});

	}

	export enum AccountStatusState { enabled = 'enabled', disabled = 'disabled' }


	/** The result of adding a single digest to the archive */
	export interface AnalysisArchiveAddResult {

		/** Details on the status, e.g. the error message */
		detail?: string | null;

		/** The image digest requested to be added */
		digest?: string | null;

		/** The status of the archive add operation. Typically either 'archived' or 'error' */
		status?: AnalysisArchiveAddResultStatus | null;
	}

	/** The result of adding a single digest to the archive */
	export interface AnalysisArchiveAddResultFormProperties {

		/** Details on the status, e.g. the error message */
		detail: FormControl<string | null | undefined>,

		/** The image digest requested to be added */
		digest: FormControl<string | null | undefined>,

		/** The status of the archive add operation. Typically either 'archived' or 'error' */
		status: FormControl<AnalysisArchiveAddResultStatus | null | undefined>,
	}
	export function CreateAnalysisArchiveAddResultFormGroup() {
		return new FormGroup<AnalysisArchiveAddResultFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AnalysisArchiveAddResultStatus | null | undefined>(undefined),
		});

	}

	export enum AnalysisArchiveAddResultStatus { archived = 'archived', archiving = 'archiving', error = 'error' }


	/** A rule for auto-archiving image analysis by time and/or tag-history */
	export interface AnalysisArchiveTransitionRule {

		/** Matches if the analysis is strictly older than this number of days */
		analysis_age_days?: number | null;
		created_at?: Date | null;

		/** Which Images to exclude from auto-archiving logic */
		exclude?: AnalysisArchiveTransitionRuleExclude;
		last_updated?: Date | null;

		/** This is the maximum number of image analyses an account can have. Can only be set on system_global rules */
		max_images_per_account?: number | null;

		/** Unique identifier for archive rule */
		rule_id?: string | null;

		/** A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field */
		selector?: ImageSelector;

		/** True if the rule applies to all accounts in the system. This is only available to admin users to update/modify, but all users with permission to list rules can see them */
		system_global?: boolean | null;

		/** Number of images mapped to the tag that are newer */
		tag_versions_newer?: number | null;

		/**
		 * The type of transition to make. If "archive", then archive an image from the working set and remove it from the working set. If "delete", then match against archived images and delete from the archive if match.
		 * Required
		 */
		transition: AnalysisArchiveTransitionRuleTransition;
	}

	/** A rule for auto-archiving image analysis by time and/or tag-history */
	export interface AnalysisArchiveTransitionRuleFormProperties {

		/** Matches if the analysis is strictly older than this number of days */
		analysis_age_days: FormControl<number | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		last_updated: FormControl<Date | null | undefined>,

		/** This is the maximum number of image analyses an account can have. Can only be set on system_global rules */
		max_images_per_account: FormControl<number | null | undefined>,

		/** Unique identifier for archive rule */
		rule_id: FormControl<string | null | undefined>,

		/** True if the rule applies to all accounts in the system. This is only available to admin users to update/modify, but all users with permission to list rules can see them */
		system_global: FormControl<boolean | null | undefined>,

		/** Number of images mapped to the tag that are newer */
		tag_versions_newer: FormControl<number | null | undefined>,

		/**
		 * The type of transition to make. If "archive", then archive an image from the working set and remove it from the working set. If "delete", then match against archived images and delete from the archive if match.
		 * Required
		 */
		transition: FormControl<AnalysisArchiveTransitionRuleTransition | null | undefined>,
	}
	export function CreateAnalysisArchiveTransitionRuleFormGroup() {
		return new FormGroup<AnalysisArchiveTransitionRuleFormProperties>({
			analysis_age_days: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
			max_images_per_account: new FormControl<number | null | undefined>(undefined),
			rule_id: new FormControl<string | null | undefined>(undefined),
			system_global: new FormControl<boolean | null | undefined>(undefined),
			tag_versions_newer: new FormControl<number | null | undefined>(undefined),
			transition: new FormControl<AnalysisArchiveTransitionRuleTransition | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Which Images to exclude from auto-archiving logic */
	export interface AnalysisArchiveTransitionRuleExclude {

		/** How long the image selected will be excluded from the archive transition */
		expiration_days?: number | null;

		/** A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field */
		selector?: ImageSelector;
	}

	/** Which Images to exclude from auto-archiving logic */
	export interface AnalysisArchiveTransitionRuleExcludeFormProperties {

		/** How long the image selected will be excluded from the archive transition */
		expiration_days: FormControl<number | null | undefined>,
	}
	export function CreateAnalysisArchiveTransitionRuleExcludeFormGroup() {
		return new FormGroup<AnalysisArchiveTransitionRuleExcludeFormProperties>({
			expiration_days: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field */
	export interface ImageSelector {

		/** The registry section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "docker.io" */
		registry?: string | null;

		/** The repository section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "anchore/anchore-engine" */
		repository?: string | null;

		/** The tag-only section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "latest" */
		tag?: string | null;
	}

	/** A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field */
	export interface ImageSelectorFormProperties {

		/** The registry section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "docker.io" */
		registry: FormControl<string | null | undefined>,

		/** The repository section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "anchore/anchore-engine" */
		repository: FormControl<string | null | undefined>,

		/** The tag-only section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "latest" */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateImageSelectorFormGroup() {
		return new FormGroup<ImageSelectorFormProperties>({
			registry: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnalysisArchiveTransitionRuleTransition { archive = 'archive', delete = 'delete' }


	/** Summary of the transition rule set */
	export interface AnalysisArchiveRulesSummary {

		/** The number of rules for this account */
		count?: number | null;

		/** The newest last_updated timestamp from the set of rules */
		last_updated?: Date | null;
	}

	/** Summary of the transition rule set */
	export interface AnalysisArchiveRulesSummaryFormProperties {

		/** The number of rules for this account */
		count: FormControl<number | null | undefined>,

		/** The newest last_updated timestamp from the set of rules */
		last_updated: FormControl<Date | null | undefined>,
	}
	export function CreateAnalysisArchiveRulesSummaryFormGroup() {
		return new FormGroup<AnalysisArchiveRulesSummaryFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** An image reference in the analysis archive for the purposes of loading analysis from the archive into th working set */
	export interface AnalysisArchiveSource {

		/**
		 * The image digest identify the analysis. Archived analyses are based on digest, tag records are restored as analysis is restored.
		 * Required
		 */
		digest: string;
	}

	/** An image reference in the analysis archive for the purposes of loading analysis from the archive into th working set */
	export interface AnalysisArchiveSourceFormProperties {

		/**
		 * The image digest identify the analysis. Archived analyses are based on digest, tag records are restored as analysis is restored.
		 * Required
		 */
		digest: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisArchiveSourceFormGroup() {
		return new FormGroup<AnalysisArchiveSourceFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^sha256:[a-fA-F0-9]{64}$')]),
		});

	}


	/** A summarization of the analysis archive, including size, counts, etc. This archive stores image analysis only, never the actual image content or layers. */
	export interface AnalysisArchiveSummary {

		/** The timestamp of the most recent archived image */
		last_updated?: Date | null;

		/** The total sum of all the bytes stored to the backing storage. Accounts for anchore-applied compression, but not compression by the underlying storage system. */
		total_data_bytes?: number | null;

		/** The number of unique images (digests) in the archive */
		total_image_count?: number | null;

		/** The number of tag records (registry/repo:tag pull strings) in the archive. This may include repeated tags but will always have a unique tag->digest mapping per record. */
		total_tag_count?: number | null;
	}

	/** A summarization of the analysis archive, including size, counts, etc. This archive stores image analysis only, never the actual image content or layers. */
	export interface AnalysisArchiveSummaryFormProperties {

		/** The timestamp of the most recent archived image */
		last_updated: FormControl<Date | null | undefined>,

		/** The total sum of all the bytes stored to the backing storage. Accounts for anchore-applied compression, but not compression by the underlying storage system. */
		total_data_bytes: FormControl<number | null | undefined>,

		/** The number of unique images (digests) in the archive */
		total_image_count: FormControl<number | null | undefined>,

		/** The number of tag records (registry/repo:tag pull strings) in the archive. This may include repeated tags but will always have a unique tag->digest mapping per record. */
		total_tag_count: FormControl<number | null | undefined>,
	}
	export function CreateAnalysisArchiveSummaryFormGroup() {
		return new FormGroup<AnalysisArchiveSummaryFormProperties>({
			last_updated: new FormControl<Date | null | undefined>(undefined),
			total_data_bytes: new FormControl<number | null | undefined>(undefined),
			total_image_count: new FormControl<number | null | undefined>(undefined),
			total_tag_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A rule for auto-archiving image analysis by time and/or tag-history */
	export interface AnalysisArchiveTransitionHistory {
		created_at?: Date | null;
		imageDigest?: string | null;
		last_updated?: Date | null;
		rule_id?: string | null;
		transition?: AnalysisArchiveTransitionRuleTransition | null;

		/** The task that created & updated this entry */
		transition_task_id?: string | null;
	}

	/** A rule for auto-archiving image analysis by time and/or tag-history */
	export interface AnalysisArchiveTransitionHistoryFormProperties {
		created_at: FormControl<Date | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
		last_updated: FormControl<Date | null | undefined>,
		rule_id: FormControl<string | null | undefined>,
		transition: FormControl<AnalysisArchiveTransitionRuleTransition | null | undefined>,

		/** The task that created & updated this entry */
		transition_task_id: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisArchiveTransitionHistoryFormGroup() {
		return new FormGroup<AnalysisArchiveTransitionHistoryFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
			rule_id: new FormControl<string | null | undefined>(undefined),
			transition: new FormControl<AnalysisArchiveTransitionRuleTransition | null | undefined>(undefined),
			transition_task_id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evaluation Results for an entity (current or last) */
	export interface AnalysisUpdateEval {
		analysis_status?: string | null;
		annotations?: string | null;
		image_digest?: string | null;
	}

	/** Evaluation Results for an entity (current or last) */
	export interface AnalysisUpdateEvalFormProperties {
		analysis_status: FormControl<string | null | undefined>,
		annotations: FormControl<string | null | undefined>,
		image_digest: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisUpdateEvalFormGroup() {
		return new FormGroup<AnalysisUpdateEvalFormProperties>({
			analysis_status: new FormControl<string | null | undefined>(undefined),
			annotations: new FormControl<string | null | undefined>(undefined),
			image_digest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnalysisUpdateNotification extends NotificationBase {
		data?: AnalysisUpdateNotificationData;
	}
	export interface AnalysisUpdateNotificationFormProperties extends NotificationBaseFormProperties {
	}
	export function CreateAnalysisUpdateNotificationFormGroup() {
		return new FormGroup<AnalysisUpdateNotificationFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined),
			dataId: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<number | null | undefined>(undefined),
			max_tries: new FormControl<number | null | undefined>(undefined),
			queueId: new FormControl<string | null | undefined>(undefined),
			record_state_key: new FormControl<string | null | undefined>(undefined),
			record_state_val: new FormControl<string | null | undefined>(undefined),
			tries: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnalysisUpdateNotificationData extends BaseNotificationData {
		notification_payload?: AnalysisUpdateNotificationPayload;
	}
	export interface AnalysisUpdateNotificationDataFormProperties extends BaseNotificationDataFormProperties {
	}
	export function CreateAnalysisUpdateNotificationDataFormGroup() {
		return new FormGroup<AnalysisUpdateNotificationDataFormProperties>({
			notification_type: new FormControl<string | null | undefined>(undefined),
			notification_user: new FormControl<string | null | undefined>(undefined),
			notification_user_email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnalysisUpdateNotificationPayload extends GenericNotificationPayload {

		/** List of Corresponding Image Annotations */
		annotations?: string | null;

		/** Evaluation Results for an entity (current or last) */
		curr_eval?: AnalysisUpdateEval;

		/** Evaluation Results for an entity (current or last) */
		last_eval?: AnalysisUpdateEval;
	}
	export interface AnalysisUpdateNotificationPayloadFormProperties extends GenericNotificationPayloadFormProperties {

		/** List of Corresponding Image Annotations */
		annotations: FormControl<string | null | undefined>,
	}
	export function CreateAnalysisUpdateNotificationPayloadFormGroup() {
		return new FormGroup<AnalysisUpdateNotificationPayloadFormProperties>({
			notificationId: new FormControl<string | null | undefined>(undefined),
			subscription_key: new FormControl<string | null | undefined>(undefined),
			subscription_type: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			annotations: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of an anchore error code (name, description) */
	export interface AnchoreErrorCode {

		/** Description of the error code */
		description?: string | null;

		/** Error code name */
		name?: string | null;
	}

	/** A description of an anchore error code (name, description) */
	export interface AnchoreErrorCodeFormProperties {

		/** Description of the error code */
		description: FormControl<string | null | undefined>,

		/** Error code name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAnchoreErrorCodeFormGroup() {
		return new FormGroup<AnchoreErrorCodeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A unique image in the engine. May have multiple tags or references. Unique to an image content across registries or repositories. */
	export interface AnchoreImage {

		/** A state value for the current status of the analysis progress of the image */
		analysis_status?: AnchoreImageAnalysis_status | null;
		annotations?: string | null;
		created_at?: Date | null;
		imageDigest?: string | null;

		/** A metadata content record for a specific image, containing different content type entries */
		image_content?: ImageContent;

		/** Details specific to an image reference and type such as tag and image source */
		image_detail?: Array<ImageDetail>;

		/** State of the image */
		image_status?: AnchoreImageImage_status | null;
		last_updated?: Date | null;

		/** The version of the record, used for internal schema updates and data migrations. */
		record_version?: string | null;
		userId?: string | null;
	}

	/** A unique image in the engine. May have multiple tags or references. Unique to an image content across registries or repositories. */
	export interface AnchoreImageFormProperties {

		/** A state value for the current status of the analysis progress of the image */
		analysis_status: FormControl<AnchoreImageAnalysis_status | null | undefined>,
		annotations: FormControl<string | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,

		/** State of the image */
		image_status: FormControl<AnchoreImageImage_status | null | undefined>,
		last_updated: FormControl<Date | null | undefined>,

		/** The version of the record, used for internal schema updates and data migrations. */
		record_version: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateAnchoreImageFormGroup() {
		return new FormGroup<AnchoreImageFormProperties>({
			analysis_status: new FormControl<AnchoreImageAnalysis_status | null | undefined>(undefined),
			annotations: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			image_status: new FormControl<AnchoreImageImage_status | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
			record_version: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnchoreImageAnalysis_status { not_analyzed = 'not_analyzed', analyzing = 'analyzing', analyzed = 'analyzed', analysis_failed = 'analysis_failed' }


	/** A metadata content record for a specific image, containing different content type entries */
	export interface ImageContent {
	}

	/** A metadata content record for a specific image, containing different content type entries */
	export interface ImageContentFormProperties {
	}
	export function CreateImageContentFormGroup() {
		return new FormGroup<ImageContentFormProperties>({
		});

	}


	/** A metadata detail record for a specific image. Multiple detail records may map a single catalog image. */
	export interface ImageDetail {
		created_at?: Date | null;
		dockerfile?: string | null;

		/** Full docker-pullable digest string including the registry url and repository necessary get the image */
		fulldigest?: string | null;

		/** Full docker-pullable tag string referencing the image */
		fulltag?: string | null;

		/** The parent Anchore Image record to which this detail maps */
		imageDigest?: string | null;
		imageId?: string | null;
		last_updated?: Date | null;
		registry?: string | null;
		repo?: string | null;
		userId?: string | null;
	}

	/** A metadata detail record for a specific image. Multiple detail records may map a single catalog image. */
	export interface ImageDetailFormProperties {
		created_at: FormControl<Date | null | undefined>,
		dockerfile: FormControl<string | null | undefined>,

		/** Full docker-pullable digest string including the registry url and repository necessary get the image */
		fulldigest: FormControl<string | null | undefined>,

		/** Full docker-pullable tag string referencing the image */
		fulltag: FormControl<string | null | undefined>,

		/** The parent Anchore Image record to which this detail maps */
		imageDigest: FormControl<string | null | undefined>,
		imageId: FormControl<string | null | undefined>,
		last_updated: FormControl<Date | null | undefined>,
		registry: FormControl<string | null | undefined>,
		repo: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateImageDetailFormGroup() {
		return new FormGroup<ImageDetailFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			dockerfile: new FormControl<string | null | undefined>(undefined),
			fulldigest: new FormControl<string | null | undefined>(undefined),
			fulltag: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
			registry: new FormControl<string | null | undefined>(undefined),
			repo: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnchoreImageImage_status { active = 'active', inactive = 'inactive', disabled = 'disabled' }


	/** A unique image in the engine. */
	export interface AnchoreImageTagSummary {
		analysis_status?: string | null;
		analyzed_at?: number | null;
		created_at?: number | null;
		fulltag?: string | null;
		imageDigest?: string | null;
		imageId?: string | null;
		image_status?: string | null;
		parentDigest?: string | null;
		tag_detected_at?: number | null;
	}

	/** A unique image in the engine. */
	export interface AnchoreImageTagSummaryFormProperties {
		analysis_status: FormControl<string | null | undefined>,
		analyzed_at: FormControl<number | null | undefined>,
		created_at: FormControl<number | null | undefined>,
		fulltag: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
		imageId: FormControl<string | null | undefined>,
		image_status: FormControl<string | null | undefined>,
		parentDigest: FormControl<string | null | undefined>,
		tag_detected_at: FormControl<number | null | undefined>,
	}
	export function CreateAnchoreImageTagSummaryFormGroup() {
		return new FormGroup<AnchoreImageTagSummaryFormProperties>({
			analysis_status: new FormControl<string | null | undefined>(undefined),
			analyzed_at: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<number | null | undefined>(undefined),
			fulltag: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			imageId: new FormControl<string | null | undefined>(undefined),
			image_status: new FormControl<string | null | undefined>(undefined),
			parentDigest: new FormControl<string | null | undefined>(undefined),
			tag_detected_at: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Simple key/value pairs where the value may be optional */
	export interface Annotations {
	}

	/** Simple key/value pairs where the value may be optional */
	export interface AnnotationsFormProperties {
	}
	export function CreateAnnotationsFormGroup() {
		return new FormGroup<AnnotationsFormProperties>({
		});

	}


	/** Generic HTTP API error response */
	export interface ApiErrorResponse {
		code?: number | null;

		/** Details structure for additional information about the error if available. Content and structure will be error specific. */
		detail?: string | null;
		error_type?: string | null;
		message?: string | null;
	}

	/** Generic HTTP API error response */
	export interface ApiErrorResponseFormProperties {
		code: FormControl<number | null | undefined>,

		/** Details structure for additional information about the error if available. Content and structure will be error specific. */
		detail: FormControl<string | null | undefined>,
		error_type: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateApiErrorResponseFormGroup() {
		return new FormGroup<ApiErrorResponseFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			error_type: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summarization of the available archives, a place to for long-term storage of audit, analysis, or other data to remove it from the system's working set but keep it available. */
	export interface ArchiveSummary {

		/** A summarization of the analysis archive, including size, counts, etc. This archive stores image analysis only, never the actual image content or layers. */
		images?: AnalysisArchiveSummary;

		/** Summary of the transition rule set */
		rules?: AnalysisArchiveRulesSummary;
	}

	/** A summarization of the available archives, a place to for long-term storage of audit, analysis, or other data to remove it from the system's working set but keep it available. */
	export interface ArchiveSummaryFormProperties {
	}
	export function CreateArchiveSummaryFormGroup() {
		return new FormGroup<ArchiveSummaryFormProperties>({
		});

	}

	export interface ArchivedAnalysis {
		analyzed_at?: Date | null;

		/** User provided annotations as key-value pairs */
		annotations?: string | null;

		/** The size, in bytes, of the analysis archive file */
		archive_size_bytes?: number | null;
		created_at?: Date | null;

		/** The image digest (digest of the manifest describing the image, per docker spec) */
		imageDigest?: string | null;

		/** List of tags associated with the image digest */
		image_detail?: Array<TagEntry>;
		last_updated?: Date | null;

		/** The digest of a parent manifest (for manifest-list images) */
		parentDigest?: string | null;

		/** The archival status */
		status?: ArchivedAnalysisStatus | null;
	}
	export interface ArchivedAnalysisFormProperties {
		analyzed_at: FormControl<Date | null | undefined>,

		/** User provided annotations as key-value pairs */
		annotations: FormControl<string | null | undefined>,

		/** The size, in bytes, of the analysis archive file */
		archive_size_bytes: FormControl<number | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** The image digest (digest of the manifest describing the image, per docker spec) */
		imageDigest: FormControl<string | null | undefined>,
		last_updated: FormControl<Date | null | undefined>,

		/** The digest of a parent manifest (for manifest-list images) */
		parentDigest: FormControl<string | null | undefined>,

		/** The archival status */
		status: FormControl<ArchivedAnalysisStatus | null | undefined>,
	}
	export function CreateArchivedAnalysisFormGroup() {
		return new FormGroup<ArchivedAnalysisFormProperties>({
			analyzed_at: new FormControl<Date | null | undefined>(undefined),
			annotations: new FormControl<string | null | undefined>(undefined),
			archive_size_bytes: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
			parentDigest: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ArchivedAnalysisStatus | null | undefined>(undefined),
		});

	}


	/** A docker-pullable tag value as well as deconstructed components */
	export interface TagEntry {

		/** The timestamp at which the Anchore Engine detected this tag was mapped to the image digest. Does not necessarily indicate when the tag was actually pushed to the registry. */
		detected_at?: Date | null;

		/** The pullable string for the tag. E.g. "docker.io/library/node:latest" */
		pullstring?: string | null;

		/** The registry hostname:port section of the pull string */
		registry?: string | null;

		/** The repository section of the pull string */
		repository?: string | null;

		/** The tag-only section of the pull string */
		tag?: string | null;
	}

	/** A docker-pullable tag value as well as deconstructed components */
	export interface TagEntryFormProperties {

		/** The timestamp at which the Anchore Engine detected this tag was mapped to the image digest. Does not necessarily indicate when the tag was actually pushed to the registry. */
		detected_at: FormControl<Date | null | undefined>,

		/** The pullable string for the tag. E.g. "docker.io/library/node:latest" */
		pullstring: FormControl<string | null | undefined>,

		/** The registry hostname:port section of the pull string */
		registry: FormControl<string | null | undefined>,

		/** The repository section of the pull string */
		repository: FormControl<string | null | undefined>,

		/** The tag-only section of the pull string */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateTagEntryFormGroup() {
		return new FormGroup<TagEntryFormProperties>({
			detected_at: new FormControl<Date | null | undefined>(undefined),
			pullstring: new FormControl<string | null | undefined>(undefined),
			registry: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArchivedAnalysisStatus { archiving = 'archiving', archived = 'archived', deleting = 'deleting', deleted = 'deleted' }


	/** Every notification has a payload, which follows this basic structure */
	export interface BaseNotificationData {
		notification_type?: string | null;
		notification_user?: string | null;
		notification_user_email?: string | null;
	}

	/** Every notification has a payload, which follows this basic structure */
	export interface BaseNotificationDataFormProperties {
		notification_type: FormControl<string | null | undefined>,
		notification_user: FormControl<string | null | undefined>,
		notification_user_email: FormControl<string | null | undefined>,
	}
	export function CreateBaseNotificationDataFormGroup() {
		return new FormGroup<BaseNotificationDataFormProperties>({
			notification_type: new FormControl<string | null | undefined>(undefined),
			notification_user: new FormControl<string | null | undefined>(undefined),
			notification_user_email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CVSSV2Scores {
		base_score?: number | null;
		exploitability_score?: number | null;
		impact_score?: number | null;
	}
	export interface CVSSV2ScoresFormProperties {
		base_score: FormControl<number | null | undefined>,
		exploitability_score: FormControl<number | null | undefined>,
		impact_score: FormControl<number | null | undefined>,
	}
	export function CreateCVSSV2ScoresFormGroup() {
		return new FormGroup<CVSSV2ScoresFormProperties>({
			base_score: new FormControl<number | null | undefined>(undefined),
			exploitability_score: new FormControl<number | null | undefined>(undefined),
			impact_score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CVSSV3Scores {
		base_score?: number | null;
		exploitability_score?: number | null;
		impact_score?: number | null;
	}
	export interface CVSSV3ScoresFormProperties {
		base_score: FormControl<number | null | undefined>,
		exploitability_score: FormControl<number | null | undefined>,
		impact_score: FormControl<number | null | undefined>,
	}
	export function CreateCVSSV3ScoresFormGroup() {
		return new FormGroup<CVSSV3ScoresFormProperties>({
			base_score: new FormControl<number | null | undefined>(undefined),
			exploitability_score: new FormControl<number | null | undefined>(undefined),
			impact_score: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** File content listings from images */
	export interface ContentFilesResponse {
		ContentFilesResponseContent?: Array<ContentFilesResponseContent>;
		content_type?: string | null;
		imageDigest?: string | null;
	}

	/** File content listings from images */
	export interface ContentFilesResponseFormProperties {
		content_type: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateContentFilesResponseFormGroup() {
		return new FormGroup<ContentFilesResponseFormProperties>({
			content_type: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContentFilesResponseContent {
		filename?: string | null;
		gid?: number | null;
		linkdest?: string | null;
		mode?: string | null;
		sha256?: string | null;
		size?: number | null;
		type?: string | null;
		uid?: number | null;
	}
	export interface ContentFilesResponseContentFormProperties {
		filename: FormControl<string | null | undefined>,
		gid: FormControl<number | null | undefined>,
		linkdest: FormControl<string | null | undefined>,
		mode: FormControl<string | null | undefined>,
		sha256: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
		uid: FormControl<number | null | undefined>,
	}
	export function CreateContentFilesResponseContentFormGroup() {
		return new FormGroup<ContentFilesResponseContentFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
			gid: new FormControl<number | null | undefined>(undefined),
			linkdest: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			sha256: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Java package content listings from images */
	export interface ContentJAVAPackageResponse {
		ContentJAVAPackageResponseContent?: Array<ContentJAVAPackageResponseContent>;
		content_type?: string | null;
		imageDigest?: string | null;
	}

	/** Java package content listings from images */
	export interface ContentJAVAPackageResponseFormProperties {
		content_type: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateContentJAVAPackageResponseFormGroup() {
		return new FormGroup<ContentJAVAPackageResponseFormProperties>({
			content_type: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContentJAVAPackageResponseContent {

		/** A list of Common Platform Enumerations that may uniquely identify the package */
		cpes?: Array<string>;
		'implementation-version'?: string | null;
		location?: string | null;
		'maven-version'?: string | null;
		origin?: string | null;
		package?: string | null;
		'specification-version'?: string | null;
		type?: string | null;
	}
	export interface ContentJAVAPackageResponseContentFormProperties {
		'implementation-version': FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		'maven-version': FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
		package: FormControl<string | null | undefined>,
		'specification-version': FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateContentJAVAPackageResponseContentFormGroup() {
		return new FormGroup<ContentJAVAPackageResponseContentFormProperties>({
			'implementation-version': new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			'maven-version': new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			'specification-version': new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Malware listing response */
	export interface ContentMalwareResponse {

		/** List of malware scan results, one per scanner configured to run */
		content?: Array<MalwareScan>;
		content_type?: string | null;
		imageDigest?: string | null;
	}

	/** Malware listing response */
	export interface ContentMalwareResponseFormProperties {
		content_type: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateContentMalwareResponseFormGroup() {
		return new FormGroup<ContentMalwareResponseFormProperties>({
			content_type: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single scan from a scanner */
	export interface MalwareScan {

		/** Indicates if the scanner is enabled */
		enabled?: boolean | null;
		MalwareScanFindings?: Array<MalwareScanFindings>;

		/** Open schema for scanner-specific metadata related to the scan result */
		metadata?: string | null;

		/** The name of the scanner that produced the finding */
		scanner?: string | null;
	}

	/** A single scan from a scanner */
	export interface MalwareScanFormProperties {

		/** Indicates if the scanner is enabled */
		enabled: FormControl<boolean | null | undefined>,

		/** Open schema for scanner-specific metadata related to the scan result */
		metadata: FormControl<string | null | undefined>,

		/** The name of the scanner that produced the finding */
		scanner: FormControl<string | null | undefined>,
	}
	export function CreateMalwareScanFormGroup() {
		return new FormGroup<MalwareScanFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			scanner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MalwareScanFindings {

		/** A path for a file in the image's rootfs */
		path?: string | null;

		/** The malware signature found at the path */
		signature?: string | null;
	}
	export interface MalwareScanFindingsFormProperties {

		/** A path for a file in the image's rootfs */
		path: FormControl<string | null | undefined>,

		/** The malware signature found at the path */
		signature: FormControl<string | null | undefined>,
	}
	export function CreateMalwareScanFindingsFormGroup() {
		return new FormGroup<MalwareScanFindingsFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Package content listings from images */
	export interface ContentPackageResponse {
		ContentPackageResponseContent?: Array<ContentPackageResponseContent>;
		content_type?: string | null;
		imageDigest?: string | null;
	}

	/** Package content listings from images */
	export interface ContentPackageResponseFormProperties {
		content_type: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateContentPackageResponseFormGroup() {
		return new FormGroup<ContentPackageResponseFormProperties>({
			content_type: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContentPackageResponseContent {

		/** A list of Common Platform Enumerations that may uniquely identify the package */
		cpes?: Array<string>;

		/** Deprecated in favor of the 'licenses' field" */
		license?: string | null;
		licenses?: Array<string>;
		location?: string | null;
		origin?: string | null;
		package?: string | null;
		size?: string | null;
		type?: string | null;
		version?: string | null;
	}
	export interface ContentPackageResponseContentFormProperties {

		/** Deprecated in favor of the 'licenses' field" */
		license: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
		package: FormControl<string | null | undefined>,
		size: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateContentPackageResponseContentFormGroup() {
		return new FormGroup<ContentPackageResponseContentFormProperties>({
			license: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Generic wrapper for content listings from images */
	export interface ContentResponse {
		content?: Array<string>;
		content_type?: string | null;
		imageDigest?: string | null;
	}

	/** Generic wrapper for content listings from images */
	export interface ContentResponseFormProperties {
		content_type: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateContentResponseFormGroup() {
		return new FormGroup<ContentResponseFormProperties>({
			content_type: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Image deletion response containing status and details */
	export interface DeleteImageResponse {
		detail?: string | null;

		/** Required */
		digest: string;

		/**
		 * Current status of the image deletion
		 * Required
		 */
		status: DeleteImageResponseStatus;
	}

	/** Image deletion response containing status and details */
	export interface DeleteImageResponseFormProperties {
		detail: FormControl<string | null | undefined>,

		/** Required */
		digest: FormControl<string | null | undefined>,

		/**
		 * Current status of the image deletion
		 * Required
		 */
		status: FormControl<DeleteImageResponseStatus | null | undefined>,
	}
	export function CreateDeleteImageResponseFormGroup() {
		return new FormGroup<DeleteImageResponseFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DeleteImageResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeleteImageResponseStatus { not_found = 'not_found', deleting = 'deleting', delete_failed = 'delete_failed' }


	/** A collection of event subcategories */
	export interface EventCategory {
		category?: string | null;
		description?: string | null;
		subcategories?: Array<EventSubcategory>;
	}

	/** A collection of event subcategories */
	export interface EventCategoryFormProperties {
		category: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateEventCategoryFormGroup() {
		return new FormGroup<EventCategoryFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of events related to each other */
	export interface EventSubcategory {
		description?: string | null;
		events?: Array<EventDescription>;
		name?: string | null;
	}

	/** A collection of events related to each other */
	export interface EventSubcategoryFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateEventSubcategoryFormGroup() {
		return new FormGroup<EventSubcategoryFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of an event type */
	export interface EventDescription {

		/** The message associated with the event type */
		message?: string | null;

		/** The event type. The last component of the fully-qualified event_type (category.subcategory.event) */
		name?: string | null;

		/** The type of resource this event is generated from */
		resource_type?: string | null;

		/** The fully qualified event type as would be seen in the event payload */
		type?: string | null;
	}

	/** A description of an event type */
	export interface EventDescriptionFormProperties {

		/** The message associated with the event type */
		message: FormControl<string | null | undefined>,

		/** The event type. The last component of the fully-qualified event_type (category.subcategory.event) */
		name: FormControl<string | null | undefined>,

		/** The type of resource this event is generated from */
		resource_type: FormControl<string | null | undefined>,

		/** The fully qualified event type as would be seen in the event payload */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEventDescriptionFormGroup() {
		return new FormGroup<EventDescriptionFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			resource_type: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A record of occurance of an asynchronous event triggered either by system or by user activity */
	export interface EventResponse {
		created_at?: Date | null;
		event?: EventResponseEvent;
		generated_uuid?: string | null;
	}

	/** A record of occurance of an asynchronous event triggered either by system or by user activity */
	export interface EventResponseFormProperties {
		created_at: FormControl<Date | null | undefined>,
		generated_uuid: FormControl<string | null | undefined>,
	}
	export function CreateEventResponseFormGroup() {
		return new FormGroup<EventResponseFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			generated_uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventResponseEvent {
		category?: string | null;
		details?: string | null;
		level?: string | null;
		message?: string | null;
		resource?: EventResponseEventResource;
		source?: EventResponseEventSource;
		timestamp?: Date | null;
		type?: string | null;
	}
	export interface EventResponseEventFormProperties {
		category: FormControl<string | null | undefined>,
		details: FormControl<string | null | undefined>,
		level: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateEventResponseEventFormGroup() {
		return new FormGroup<EventResponseEventFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventResponseEventResource {
		id?: string | null;
		type?: string | null;
		user_id?: string | null;
	}
	export interface EventResponseEventResourceFormProperties {
		id: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateEventResponseEventResourceFormGroup() {
		return new FormGroup<EventResponseEventResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			user_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EventResponseEventSource {
		base_url?: string | null;
		hostid?: string | null;
		request_id?: string | null;
		servicename?: string | null;
	}
	export interface EventResponseEventSourceFormProperties {
		base_url: FormControl<string | null | undefined>,
		hostid: FormControl<string | null | undefined>,
		request_id: FormControl<string | null | undefined>,
		servicename: FormControl<string | null | undefined>,
	}
	export function CreateEventResponseEventSourceFormGroup() {
		return new FormGroup<EventResponseEventSourceFormProperties>({
			base_url: new FormControl<string | null | undefined>(undefined),
			hostid: new FormControl<string | null | undefined>(undefined),
			request_id: new FormControl<string | null | undefined>(undefined),
			servicename: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response envelope for paginated listing of events */
	export interface EventsList {

		/** Number of events in this page */
		item_count?: number | null;

		/** Boolean flag, True indicates there are more events and False otherwise */
		next_page?: boolean | null;

		/** Page number of this result set */
		page?: number | null;

		/** List of events */
		results?: Array<EventResponse>;
	}

	/** Response envelope for paginated listing of events */
	export interface EventsListFormProperties {

		/** Number of events in this page */
		item_count: FormControl<number | null | undefined>,

		/** Boolean flag, True indicates there are more events and False otherwise */
		next_page: FormControl<boolean | null | undefined>,

		/** Page number of this result set */
		page: FormControl<number | null | undefined>,
	}
	export function CreateEventsListFormGroup() {
		return new FormGroup<EventsListFormProperties>({
			item_count: new FormControl<number | null | undefined>(undefined),
			next_page: new FormControl<boolean | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FeedGroupMetadata {
		created_at?: Date | null;
		last_sync?: Date | null;
		name?: string | null;
		record_count?: number | null;
	}
	export interface FeedGroupMetadataFormProperties {
		created_at: FormControl<Date | null | undefined>,
		last_sync: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		record_count: FormControl<number | null | undefined>,
	}
	export function CreateFeedGroupMetadataFormGroup() {
		return new FormGroup<FeedGroupMetadataFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			last_sync: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			record_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata on a single feed based on what the engine finds from querying the endpoints */
	export interface FeedMetadata {

		/** Date the metadata record was created in engine (first seen on source) */
		created_at?: Date | null;
		groups?: Array<FeedGroupMetadata>;
		last_full_sync?: Date | null;

		/** name of the feed */
		name?: string | null;

		/** Date the metadata was last updated */
		updated_at?: Date | null;
	}

	/** Metadata on a single feed based on what the engine finds from querying the endpoints */
	export interface FeedMetadataFormProperties {

		/** Date the metadata record was created in engine (first seen on source) */
		created_at: FormControl<Date | null | undefined>,
		last_full_sync: FormControl<Date | null | undefined>,

		/** name of the feed */
		name: FormControl<string | null | undefined>,

		/** Date the metadata was last updated */
		updated_at: FormControl<Date | null | undefined>,
	}
	export function CreateFeedMetadataFormGroup() {
		return new FormGroup<FeedMetadataFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			last_full_sync: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updated_at: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The result of a sync of a single feed */
	export interface FeedSyncResult {

		/** The name of the feed synced */
		feed?: string | null;

		/** Array of group sync results */
		groups?: Array<GroupSyncResult>;

		/** The result of the sync operations, either co */
		status?: GroupSyncResultStatus | null;

		/** The duratin, in seconds, of the sync of the feed, the sum of all the group syncs */
		total_time_seconds?: number | null;
	}

	/** The result of a sync of a single feed */
	export interface FeedSyncResultFormProperties {

		/** The name of the feed synced */
		feed: FormControl<string | null | undefined>,

		/** The result of the sync operations, either co */
		status: FormControl<GroupSyncResultStatus | null | undefined>,

		/** The duratin, in seconds, of the sync of the feed, the sum of all the group syncs */
		total_time_seconds: FormControl<number | null | undefined>,
	}
	export function CreateFeedSyncResultFormGroup() {
		return new FormGroup<FeedSyncResultFormProperties>({
			feed: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GroupSyncResultStatus | null | undefined>(undefined),
			total_time_seconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GroupSyncResult {

		/** The name of the group */
		group?: string | null;
		status?: GroupSyncResultStatus | null;

		/** The duration of the group sync in seconds */
		total_time_seconds?: number | null;

		/** The number of images updated by the this group sync, across all accounts. This is typically only non-zero for vulnerability feeds which update images' vulnerability results during the sync. */
		updated_image_count?: number | null;

		/** The number of feed data records synced down as either updates or new records */
		updated_record_count?: number | null;
	}
	export interface GroupSyncResultFormProperties {

		/** The name of the group */
		group: FormControl<string | null | undefined>,
		status: FormControl<GroupSyncResultStatus | null | undefined>,

		/** The duration of the group sync in seconds */
		total_time_seconds: FormControl<number | null | undefined>,

		/** The number of images updated by the this group sync, across all accounts. This is typically only non-zero for vulnerability feeds which update images' vulnerability results during the sync. */
		updated_image_count: FormControl<number | null | undefined>,

		/** The number of feed data records synced down as either updates or new records */
		updated_record_count: FormControl<number | null | undefined>,
	}
	export function CreateGroupSyncResultFormGroup() {
		return new FormGroup<GroupSyncResultFormProperties>({
			group: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GroupSyncResultStatus | null | undefined>(undefined),
			total_time_seconds: new FormControl<number | null | undefined>(undefined),
			updated_image_count: new FormControl<number | null | undefined>(undefined),
			updated_record_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GroupSyncResultStatus { success = 'success', failure = 'failure' }


	/** The retrieved file entry including content (b64 encoded) */
	export interface FileContentSearchResult {
		matches?: Array<RegexContentMatch>;
		path?: string | null;
	}

	/** The retrieved file entry including content (b64 encoded) */
	export interface FileContentSearchResultFormProperties {
		path: FormControl<string | null | undefined>,
	}
	export function CreateFileContentSearchResultFormGroup() {
		return new FormGroup<FileContentSearchResultFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Match of a named regex on a file */
	export interface RegexContentMatch {

		/** A list of line numbers in the file that matched the regex */
		lines?: Array<number>;

		/** The name associated with the regular expression */
		name?: string | null;

		/** The regular expression used for the match */
		regex?: string | null;
	}

	/** Match of a named regex on a file */
	export interface RegexContentMatchFormProperties {

		/** The name associated with the regular expression */
		name: FormControl<string | null | undefined>,

		/** The regular expression used for the match */
		regex: FormControl<string | null | undefined>,
	}
	export function CreateRegexContentMatchFormGroup() {
		return new FormGroup<RegexContentMatchFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A description of the set of gates available in this engine and the triggers and parameters supported */
	export interface GateSpec {

		/** Description of the gate */
		description?: string | null;

		/** Gate name, as it would appear in a policy document */
		name?: string | null;

		/** State of the gate and transitively all triggers it contains if not 'active' */
		state?: GateSpecState | null;

		/** The name of another trigger that supercedes this on functionally if this is deprecated */
		superceded_by?: string | null;

		/** List of the triggers that can fire for this Gate */
		triggers?: Array<TriggerSpec>;
	}

	/** A description of the set of gates available in this engine and the triggers and parameters supported */
	export interface GateSpecFormProperties {

		/** Description of the gate */
		description: FormControl<string | null | undefined>,

		/** Gate name, as it would appear in a policy document */
		name: FormControl<string | null | undefined>,

		/** State of the gate and transitively all triggers it contains if not 'active' */
		state: FormControl<GateSpecState | null | undefined>,

		/** The name of another trigger that supercedes this on functionally if this is deprecated */
		superceded_by: FormControl<string | null | undefined>,
	}
	export function CreateGateSpecFormGroup() {
		return new FormGroup<GateSpecFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GateSpecState | null | undefined>(undefined),
			superceded_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GateSpecState { active = 'active', deprecated = 'deprecated', eol = 'eol' }


	/** Definition of a trigger and its parameters */
	export interface TriggerSpec {

		/** Trigger description for what it tests and when it will fire during evaluation */
		description?: string | null;

		/** Name of the trigger as it would appear in a policy document */
		name?: string | null;

		/** The list of parameters that are valid for this trigger */
		parameters?: Array<TriggerParamSpec>;

		/** State of the trigger */
		state?: GateSpecState | null;

		/** The name of another trigger that supercedes this on functionally if this is deprecated */
		superceded_by?: string | null;
	}

	/** Definition of a trigger and its parameters */
	export interface TriggerSpecFormProperties {

		/** Trigger description for what it tests and when it will fire during evaluation */
		description: FormControl<string | null | undefined>,

		/** Name of the trigger as it would appear in a policy document */
		name: FormControl<string | null | undefined>,

		/** State of the trigger */
		state: FormControl<GateSpecState | null | undefined>,

		/** The name of another trigger that supercedes this on functionally if this is deprecated */
		superceded_by: FormControl<string | null | undefined>,
	}
	export function CreateTriggerSpecFormGroup() {
		return new FormGroup<TriggerSpecFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GateSpecState | null | undefined>(undefined),
			superceded_by: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TriggerParamSpec {
		description?: string | null;

		/** An example value for the parameter (encoded as a string if the parameter is an object or list type) */
		example?: string | null;

		/** Parameter name as it appears in policy document */
		name?: string | null;

		/** Is this a required parameter or optional */
		required?: boolean | null;

		/** State of the trigger parameter */
		state?: GateSpecState | null;

		/** The name of another trigger that supercedes this on functionally if this is deprecated */
		superceded_by?: string | null;

		/** If present, a definition for validation of input. Typically a jsonschema object that can be used to validate an input against. */
		validator?: string | null;
	}
	export interface TriggerParamSpecFormProperties {
		description: FormControl<string | null | undefined>,

		/** An example value for the parameter (encoded as a string if the parameter is an object or list type) */
		example: FormControl<string | null | undefined>,

		/** Parameter name as it appears in policy document */
		name: FormControl<string | null | undefined>,

		/** Is this a required parameter or optional */
		required: FormControl<boolean | null | undefined>,

		/** State of the trigger parameter */
		state: FormControl<GateSpecState | null | undefined>,

		/** The name of another trigger that supercedes this on functionally if this is deprecated */
		superceded_by: FormControl<string | null | undefined>,

		/** If present, a definition for validation of input. Typically a jsonschema object that can be used to validate an input against. */
		validator: FormControl<string | null | undefined>,
	}
	export function CreateTriggerParamSpecFormGroup() {
		return new FormGroup<TriggerParamSpecFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			example: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<GateSpecState | null | undefined>(undefined),
			superceded_by: new FormControl<string | null | undefined>(undefined),
			validator: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parent class for Notification Payloads */
	export interface GenericNotificationPayload {
		notificationId?: string | null;
		subscription_key?: string | null;
		subscription_type?: string | null;
		userId?: string | null;
	}

	/** Parent class for Notification Payloads */
	export interface GenericNotificationPayloadFormProperties {
		notificationId: FormControl<string | null | undefined>,
		subscription_key: FormControl<string | null | undefined>,
		subscription_type: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateGenericNotificationPayloadFormGroup() {
		return new FormGroup<GenericNotificationPayloadFormProperties>({
			notificationId: new FormControl<string | null | undefined>(undefined),
			subscription_key: new FormControl<string | null | undefined>(undefined),
			subscription_type: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Analysis report json to be imported */
	export interface ImageAnalysisReport {
	}

	/** Analysis report json to be imported */
	export interface ImageAnalysisReportFormProperties {
	}
	export function CreateImageAnalysisReportFormGroup() {
		return new FormGroup<ImageAnalysisReportFormProperties>({
		});

	}


	/** A request to add an image to be watched and analyzed by the engine. Optionally include the dockerfile content. Either source, digest or tag must be present. */
	export interface ImageAnalysisRequest {

		/** Annotations to be associated with the added image in key/value form */
		annotations?: string | null;

		/** Optional override of the image creation time, only honored when both tag and digest are also supplied  e.g. 2018-10-17T18:14:00Z. Deprecated in favor of the 'source' field */
		created_at?: Date | null;

		/** A digest string for an image, maybe a pull string or just a digest. e.g. nginx@sha256:123 or sha256:abc123. If a pull string, it must have same regisry/repo as the tag field. Deprecated in favor of the 'source' field */
		digest?: string | null;

		/** Base64 encoded content of the dockerfile for the image, if available. Deprecated in favor of the 'source' field. */
		dockerfile?: string | null;

		/** Optional. The type of image this is adding, defaults to "docker". This can be ommitted until multiple image types are supported. */
		image_type?: string | null;

		/** A set of analysis source types. Only one may be set in any given request. */
		source?: ImageSource;

		/** Full pullable tag reference for image. e.g. docker.io/nginx:latest. Deprecated in favor of the 'source' field */
		tag?: string | null;
	}

	/** A request to add an image to be watched and analyzed by the engine. Optionally include the dockerfile content. Either source, digest or tag must be present. */
	export interface ImageAnalysisRequestFormProperties {

		/** Annotations to be associated with the added image in key/value form */
		annotations: FormControl<string | null | undefined>,

		/** Optional override of the image creation time, only honored when both tag and digest are also supplied  e.g. 2018-10-17T18:14:00Z. Deprecated in favor of the 'source' field */
		created_at: FormControl<Date | null | undefined>,

		/** A digest string for an image, maybe a pull string or just a digest. e.g. nginx@sha256:123 or sha256:abc123. If a pull string, it must have same regisry/repo as the tag field. Deprecated in favor of the 'source' field */
		digest: FormControl<string | null | undefined>,

		/** Base64 encoded content of the dockerfile for the image, if available. Deprecated in favor of the 'source' field. */
		dockerfile: FormControl<string | null | undefined>,

		/** Optional. The type of image this is adding, defaults to "docker". This can be ommitted until multiple image types are supported. */
		image_type: FormControl<string | null | undefined>,

		/** Full pullable tag reference for image. e.g. docker.io/nginx:latest. Deprecated in favor of the 'source' field */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateImageAnalysisRequestFormGroup() {
		return new FormGroup<ImageAnalysisRequestFormProperties>({
			annotations: new FormControl<string | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined),
			dockerfile: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9+/=]+$')]),
			image_type: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of analysis source types. Only one may be set in any given request. */
	export interface ImageSource {

		/** An image reference in the analysis archive for the purposes of loading analysis from the archive into th working set */
		archive?: AnalysisArchiveSource;

		/** An image reference using a digest in a registry, includes some extra tag and timestamp info in addition to the pull string to allow proper tag history reconstruction. */
		digest?: RegistryDigestSource;
		import?: ImageImportManifest;

		/** An image reference using a tag in a registry, this is the most common source type. */
		tag?: RegistryTagSource;
	}

	/** A set of analysis source types. Only one may be set in any given request. */
	export interface ImageSourceFormProperties {
	}
	export function CreateImageSourceFormGroup() {
		return new FormGroup<ImageSourceFormProperties>({
		});

	}


	/** An image reference using a digest in a registry, includes some extra tag and timestamp info in addition to the pull string to allow proper tag history reconstruction. */
	export interface RegistryDigestSource {

		/** Optional override of the image creation time to support proper tag history construction in cases of out-of-order analysis compared to registry history for the tag */
		creation_timestamp_override?: Date | null;

		/** Base64 encoded content of the dockerfile used to build the image, if available. */
		dockerfile?: string | null;

		/**
		 * A digest-based pullstring (e.g. docker.io/nginx@sha256:123abc)
		 * Required
		 */
		pullstring: string;

		/**
		 * A valid docker tag reference (e.g. docker.io/nginx:latest) that will be associated with the image but not used to pull the image.
		 * Required
		 */
		tag: string;
	}

	/** An image reference using a digest in a registry, includes some extra tag and timestamp info in addition to the pull string to allow proper tag history reconstruction. */
	export interface RegistryDigestSourceFormProperties {

		/** Optional override of the image creation time to support proper tag history construction in cases of out-of-order analysis compared to registry history for the tag */
		creation_timestamp_override: FormControl<Date | null | undefined>,

		/** Base64 encoded content of the dockerfile used to build the image, if available. */
		dockerfile: FormControl<string | null | undefined>,

		/**
		 * A digest-based pullstring (e.g. docker.io/nginx@sha256:123abc)
		 * Required
		 */
		pullstring: FormControl<string | null | undefined>,

		/**
		 * A valid docker tag reference (e.g. docker.io/nginx:latest) that will be associated with the image but not used to pull the image.
		 * Required
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateRegistryDigestSourceFormGroup() {
		return new FormGroup<RegistryDigestSourceFormProperties>({
			creation_timestamp_override: new FormControl<Date | null | undefined>(undefined),
			dockerfile: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9+/=]+$')]),
			pullstring: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImageImportManifest {

		/**
		 * Digest of content to use in the final import
		 * Required
		 */
		contents: ImportContentDigests;

		/** Required */
		digest: string;

		/** An "imageId" as used by Docker if available */
		local_image_id?: string | null;

		/** Required */
		operation_uuid: string;

		/** The digest of the images's manifest-list parent if it was accessed from a multi-arch tag where the tag pointed to a manifest-list. This allows preservation of that relationship in the data */
		parent_digest?: string | null;

		/** Required */
		tags: Array<string>;
	}
	export interface ImageImportManifestFormProperties {

		/** Required */
		digest: FormControl<string | null | undefined>,

		/** An "imageId" as used by Docker if available */
		local_image_id: FormControl<string | null | undefined>,

		/** Required */
		operation_uuid: FormControl<string | null | undefined>,

		/** The digest of the images's manifest-list parent if it was accessed from a multi-arch tag where the tag pointed to a manifest-list. This allows preservation of that relationship in the data */
		parent_digest: FormControl<string | null | undefined>,
	}
	export function CreateImageImportManifestFormGroup() {
		return new FormGroup<ImageImportManifestFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			local_image_id: new FormControl<string | null | undefined>(undefined),
			operation_uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_digest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Digest of content to use in the final import */
	export interface ImportContentDigests {

		/** Digest for reference content for dockerfile */
		dockerfile?: string | null;

		/**
		 * Digest for reference content for image config
		 * Required
		 */
		image_config: string;

		/**
		 * Digest to reference content for the image manifest
		 * Required
		 */
		manifest: string;

		/**
		 * Digest to use for the packages content
		 * Required
		 */
		packages: string;

		/** Digest for reference content for parent manifest */
		parent_manifest?: string | null;
	}

	/** Digest of content to use in the final import */
	export interface ImportContentDigestsFormProperties {

		/** Digest for reference content for dockerfile */
		dockerfile: FormControl<string | null | undefined>,

		/**
		 * Digest for reference content for image config
		 * Required
		 */
		image_config: FormControl<string | null | undefined>,

		/**
		 * Digest to reference content for the image manifest
		 * Required
		 */
		manifest: FormControl<string | null | undefined>,

		/**
		 * Digest to use for the packages content
		 * Required
		 */
		packages: FormControl<string | null | undefined>,

		/** Digest for reference content for parent manifest */
		parent_manifest: FormControl<string | null | undefined>,
	}
	export function CreateImportContentDigestsFormGroup() {
		return new FormGroup<ImportContentDigestsFormProperties>({
			dockerfile: new FormControl<string | null | undefined>(undefined),
			image_config: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			manifest: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			packages: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parent_manifest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An image reference using a tag in a registry, this is the most common source type. */
	export interface RegistryTagSource {

		/** Base64 encoded content of the dockerfile used to build the image, if available. */
		dockerfile?: string | null;

		/**
		 * A docker pull string (e.g. docker.io/nginx:latest, or docker.io/nginx@sha256:abd) to retrieve the image
		 * Required
		 */
		pullstring: string;
	}

	/** An image reference using a tag in a registry, this is the most common source type. */
	export interface RegistryTagSourceFormProperties {

		/** Base64 encoded content of the dockerfile used to build the image, if available. */
		dockerfile: FormControl<string | null | undefined>,

		/**
		 * A docker pull string (e.g. docker.io/nginx:latest, or docker.io/nginx@sha256:abd) to retrieve the image
		 * Required
		 */
		pullstring: FormControl<string | null | undefined>,
	}
	export function CreateRegistryTagSourceFormGroup() {
		return new FormGroup<RegistryTagSourceFormProperties>({
			dockerfile: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[a-zA-Z0-9+/=]+$')]),
			pullstring: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImageContentDeleteResponse {
	}
	export interface ImageContentDeleteResponseFormProperties {
	}
	export function CreateImageContentDeleteResponseFormGroup() {
		return new FormGroup<ImageContentDeleteResponseFormProperties>({
		});

	}


	/** Filter for an image list by id, tag, or digest, but not both */
	export interface ImageFilter {
		digest?: string | null;
		tag?: string | null;
	}

	/** Filter for an image list by id, tag, or digest, but not both */
	export interface ImageFilterFormProperties {
		digest: FormControl<string | null | undefined>,
		tag: FormControl<string | null | undefined>,
	}
	export function CreateImageFilterFormGroup() {
		return new FormGroup<ImageFilterFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageImportContentResponse {
		created_at?: Date | null;
		digest?: string | null;
	}
	export interface ImageImportContentResponseFormProperties {
		created_at: FormControl<Date | null | undefined>,
		digest: FormControl<string | null | undefined>,
	}
	export function CreateImageImportContentResponseFormGroup() {
		return new FormGroup<ImageImportContentResponseFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An import record, creating a unique identifier for referencing the operation as well as its state */
	export interface ImageImportOperation {
		created_at?: Date | null;
		expires_at?: Date | null;
		status?: ImageImportOperationStatus | null;
		uuid?: string | null;
	}

	/** An import record, creating a unique identifier for referencing the operation as well as its state */
	export interface ImageImportOperationFormProperties {
		created_at: FormControl<Date | null | undefined>,
		expires_at: FormControl<Date | null | undefined>,
		status: FormControl<ImageImportOperationStatus | null | undefined>,
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateImageImportOperationFormGroup() {
		return new FormGroup<ImageImportOperationFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			expires_at: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ImageImportOperationStatus | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImageImportOperationStatus { pending = 'pending', queued = 'queued', processing = 'processing', complete = 'complete', failed = 'failed', expired = 'expired' }

	export interface ImagePackageManifest {
		artifactRelationships?: Array<ImportPackageRelationship>;

		/** Required */
		artifacts: Array<ImportPackage>;
		descriptor?: ImportDescriptor;

		/** Required */
		distro: ImportDistribution;
		schema?: ImportSchema;

		/** Required */
		source: ImportSource;
	}
	export interface ImagePackageManifestFormProperties {
	}
	export function CreateImagePackageManifestFormGroup() {
		return new FormGroup<ImagePackageManifestFormProperties>({
		});

	}

	export interface ImportPackageRelationship {

		/** Required */
		child: string;
		metadata?: string | null;

		/** Required */
		parent: string;

		/** Required */
		type: string;
	}
	export interface ImportPackageRelationshipFormProperties {

		/** Required */
		child: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Required */
		parent: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImportPackageRelationshipFormGroup() {
		return new FormGroup<ImportPackageRelationshipFormProperties>({
			child: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
			parent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportPackage {

		/** Required */
		cpes: Array<string>;
		foundBy?: string | null;
		id?: string | null;

		/** Required */
		language: string;

		/** Required */
		licenses: Array<string>;

		/** Required */
		locations: Array<ImportPackageLocation>;
		metadata?: string | null;

		/** Required */
		metadataType: string;

		/** Required */
		name: string;
		purl?: string | null;

		/** Required */
		type: string;

		/** Required */
		version: string;
	}
	export interface ImportPackageFormProperties {
		foundBy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		language: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Required */
		metadataType: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		purl: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateImportPackageFormGroup() {
		return new FormGroup<ImportPackageFormProperties>({
			foundBy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
			metadataType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			purl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportPackageLocation {
		layerID?: string | null;

		/** Required */
		path: string;
	}
	export interface ImportPackageLocationFormProperties {
		layerID: FormControl<string | null | undefined>,

		/** Required */
		path: FormControl<string | null | undefined>,
	}
	export function CreateImportPackageLocationFormGroup() {
		return new FormGroup<ImportPackageLocationFormProperties>({
			layerID: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportDescriptor {

		/** Required */
		name: string;

		/** Required */
		version: string;
	}
	export interface ImportDescriptorFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateImportDescriptorFormGroup() {
		return new FormGroup<ImportDescriptorFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportDistribution {

		/** Required */
		idLike: string;

		/** Required */
		name: string;

		/** Required */
		version: string;
	}
	export interface ImportDistributionFormProperties {

		/** Required */
		idLike: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateImportDistributionFormGroup() {
		return new FormGroup<ImportDistributionFormProperties>({
			idLike: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportSchema {

		/** Required */
		url: string;

		/** Required */
		version: string;
	}
	export interface ImportSchemaFormProperties {

		/** Required */
		url: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateImportSchemaFormGroup() {
		return new FormGroup<ImportSchemaFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportSource {

		/** Required */
		target: any;

		/** Required */
		type: string;
	}
	export interface ImportSourceFormProperties {

		/** Required */
		target: FormControl<any | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImportSourceFormGroup() {
		return new FormGroup<ImportSourceFormProperties>({
			target: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A reference to an image */
	export interface ImageRef {

		/** Required */
		type: ImageRefType;

		/** Required */
		value: string;
	}

	/** A reference to an image */
	export interface ImageRefFormProperties {

		/** Required */
		type: FormControl<ImageRefType | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateImageRefFormGroup() {
		return new FormGroup<ImageRefFormProperties>({
			type: new FormControl<ImageRefType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ImageRefType { tag = 'tag', digest = 'digest', id = 'id' }


	/** A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest */
	export interface ImageReference {

		/** Timestamp, in rfc3339 format, indicating when the image state became 'analyzed' in Anchore Engine. */
		analyzed_at?: string | null;

		/** The image digest */
		digest?: string | null;

		/** The image id if available */
		id?: string | null;
		tag_history?: Array<TagEntry>;
	}

	/** A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest */
	export interface ImageReferenceFormProperties {

		/** Timestamp, in rfc3339 format, indicating when the image state became 'analyzed' in Anchore Engine. */
		analyzed_at: FormControl<string | null | undefined>,

		/** The image digest */
		digest: FormControl<string | null | undefined>,

		/** The image id if available */
		id: FormControl<string | null | undefined>,
	}
	export function CreateImageReferenceFormGroup() {
		return new FormGroup<ImageReferenceFormProperties>({
			analyzed_at: new FormControl<string | null | undefined>(undefined),
			digest: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImageSelectionRule {
		id?: string | null;

		/**
		 * A reference to an image
		 * Required
		 */
		image: ImageRef;

		/** Required */
		name: string;

		/** Required */
		registry: string;

		/** Required */
		repository: string;
	}
	export interface ImageSelectionRuleFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		registry: FormControl<string | null | undefined>,

		/** Required */
		repository: FormControl<string | null | undefined>,
	}
	export function CreateImageSelectionRuleFormGroup() {
		return new FormGroup<ImageSelectionRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			registry: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repository: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An image record that contains packages */
	export interface ImageWithPackages {

		/** A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest */
		image?: ImageReference;
		packages?: Array<PackageReference>;
	}

	/** An image record that contains packages */
	export interface ImageWithPackagesFormProperties {
	}
	export function CreateImageWithPackagesFormGroup() {
		return new FormGroup<ImageWithPackagesFormProperties>({
		});

	}


	/** A record of a software item which is vulnerable or carries a fix for a vulnerability */
	export interface PackageReference {

		/** Package name */
		name?: string | null;

		/** Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...) */
		type?: string | null;

		/** A version for the package. If null, then references all versions */
		version?: string | null;

		/** Whether a vendor will or will not fix a vulnerabitlity */
		will_not_fix?: boolean | null;
	}

	/** A record of a software item which is vulnerable or carries a fix for a vulnerability */
	export interface PackageReferenceFormProperties {

		/** Package name */
		name: FormControl<string | null | undefined>,

		/** Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...) */
		type: FormControl<string | null | undefined>,

		/** A version for the package. If null, then references all versions */
		version: FormControl<string | null | undefined>,

		/** Whether a vendor will or will not fix a vulnerabitlity */
		will_not_fix: FormControl<boolean | null | undefined>,
	}
	export function CreatePackageReferenceFormGroup() {
		return new FormGroup<PackageReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
			will_not_fix: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LocalAnalysisSource {
		digest?: string | null;
	}
	export interface LocalAnalysisSourceFormProperties {
		digest: FormControl<string | null | undefined>,
	}
	export function CreateLocalAnalysisSourceFormGroup() {
		return new FormGroup<LocalAnalysisSourceFormProperties>({
			digest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MappingRule {
		id?: string | null;

		/**
		 * A reference to an image
		 * Required
		 */
		image: ImageRef;

		/** Required */
		name: string;

		/** Optional single policy to evalute, if set will override any value in policy_ids, for backwards compatibility. Generally, policy_ids should be used even with a array of length 1. */
		policy_id?: string | null;

		/** List of policyIds to evaluate in order, to completion */
		policy_ids?: Array<string>;

		/** Required */
		registry: string;

		/** Required */
		repository: string;
		whitelist_ids?: Array<string>;
	}
	export interface MappingRuleFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Optional single policy to evalute, if set will override any value in policy_ids, for backwards compatibility. Generally, policy_ids should be used even with a array of length 1. */
		policy_id: FormControl<string | null | undefined>,

		/** Required */
		registry: FormControl<string | null | undefined>,

		/** Required */
		repository: FormControl<string | null | undefined>,
	}
	export function CreateMappingRuleFormGroup() {
		return new FormGroup<MappingRuleFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			policy_id: new FormControl<string | null | undefined>(undefined),
			registry: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repository: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Generic wrapper for metadata listings from images */
	export interface MetadataResponse {
		imageDigest?: string | null;
		metadata?: any;
		metadata_type?: string | null;
	}

	/** Generic wrapper for metadata listings from images */
	export interface MetadataResponseFormProperties {
		imageDigest: FormControl<string | null | undefined>,
		metadata: FormControl<any | null | undefined>,
		metadata_type: FormControl<string | null | undefined>,
	}
	export function CreateMetadataResponseFormGroup() {
		return new FormGroup<MetadataResponseFormProperties>({
			imageDigest: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<any | null | undefined>(undefined),
			metadata_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NativeSbom {
	}
	export interface NativeSbomFormProperties {
	}
	export function CreateNativeSbomFormGroup() {
		return new FormGroup<NativeSbomFormProperties>({
		});

	}


	/** base object for Notifications (every notification has this basic structure) */
	export interface NotificationBase {
		created_at?: number | null;
		dataId?: string | null;
		last_updated?: number | null;
		max_tries?: number | null;
		queueId?: string | null;
		record_state_key?: string | null;
		record_state_val?: string | null;
		tries?: number | null;
		userId?: string | null;
	}

	/** base object for Notifications (every notification has this basic structure) */
	export interface NotificationBaseFormProperties {
		created_at: FormControl<number | null | undefined>,
		dataId: FormControl<string | null | undefined>,
		last_updated: FormControl<number | null | undefined>,
		max_tries: FormControl<number | null | undefined>,
		queueId: FormControl<string | null | undefined>,
		record_state_key: FormControl<string | null | undefined>,
		record_state_val: FormControl<string | null | undefined>,
		tries: FormControl<number | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateNotificationBaseFormGroup() {
		return new FormGroup<NotificationBaseFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined),
			dataId: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<number | null | undefined>(undefined),
			max_tries: new FormControl<number | null | undefined>(undefined),
			queueId: new FormControl<string | null | undefined>(undefined),
			record_state_key: new FormControl<string | null | undefined>(undefined),
			record_state_val: new FormControl<string | null | undefined>(undefined),
			tries: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NvdDataObject {
		cvss_v2?: CVSSV2Scores;
		cvss_v3?: CVSSV3Scores;

		/** NVD Vulnerability ID */
		id?: string | null;
	}
	export interface NvdDataObjectFormProperties {

		/** NVD Vulnerability ID */
		id: FormControl<string | null | undefined>,
	}
	export function CreateNvdDataObjectFormGroup() {
		return new FormGroup<NvdDataObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pagination wrapped list of images that match some filter */
	export interface PaginatedImageList extends PaginationProperties {
		images?: Array<ImageWithPackages>;
	}

	/** Pagination wrapped list of images that match some filter */
	export interface PaginatedImageListFormProperties extends PaginationPropertiesFormProperties {
	}
	export function CreatePaginatedImageListFormGroup() {
		return new FormGroup<PaginatedImageListFormProperties>({
			next_page: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<string | null | undefined>(undefined),
			returned_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A paginated listing of vulnerability records sorted by ID in descending order */
	export interface PaginatedVulnerabilityList extends PaginationProperties {

		/** The listing of matching vulnerabilities for the query subject to pagination */
		vulnerabilities?: Array<StandaloneVulnerability>;
	}

	/** A paginated listing of vulnerability records sorted by ID in descending order */
	export interface PaginatedVulnerabilityListFormProperties extends PaginationPropertiesFormProperties {
	}
	export function CreatePaginatedVulnerabilityListFormGroup() {
		return new FormGroup<PaginatedVulnerabilityListFormProperties>({
			next_page: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<string | null | undefined>(undefined),
			returned_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single vulnerability record in a single namespace, the unique key is the combination of the id and namespace */
	export interface StandaloneVulnerability {

		/** The array of packages (typically packages) that are vulnerable-to or provide fixes-for this vulnerability */
		affected_packages?: Array<PackageReference>;

		/** Description of the vulnerability if available */
		description?: string | null;

		/** Vulnerability identifier. May be CVE-X, RHSA-X, etc. Not necessarily unique across namespaces */
		id?: string | null;

		/** URL for the upstream CVE record in the reporting source (e.g. ubuntu security tracker) */
		link?: string | null;

		/** The namespace for the vulnerability record to avoid conflicts for the same id in different distros or sources (e.g. deb vs ubuntu for same CVE) */
		namespace?: string | null;

		/** List of Nvd Data objects */
		nvd_data?: Array<NvdDataObject>;

		/** List of references including */
		references?: Array<VulnerabilityReference>;

		/** Severity label specific to the namepsace */
		severity?: StandaloneVulnerabilitySeverity | null;

		/** List of Vendor Data objects */
		vendor_data?: Array<VendorDataObject>;
	}

	/** A single vulnerability record in a single namespace, the unique key is the combination of the id and namespace */
	export interface StandaloneVulnerabilityFormProperties {

		/** Description of the vulnerability if available */
		description: FormControl<string | null | undefined>,

		/** Vulnerability identifier. May be CVE-X, RHSA-X, etc. Not necessarily unique across namespaces */
		id: FormControl<string | null | undefined>,

		/** URL for the upstream CVE record in the reporting source (e.g. ubuntu security tracker) */
		link: FormControl<string | null | undefined>,

		/** The namespace for the vulnerability record to avoid conflicts for the same id in different distros or sources (e.g. deb vs ubuntu for same CVE) */
		namespace: FormControl<string | null | undefined>,

		/** Severity label specific to the namepsace */
		severity: FormControl<StandaloneVulnerabilitySeverity | null | undefined>,
	}
	export function CreateStandaloneVulnerabilityFormGroup() {
		return new FormGroup<StandaloneVulnerabilityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<StandaloneVulnerabilitySeverity | null | undefined>(undefined),
		});

	}


	/** An external link/reference */
	export interface VulnerabilityReference {

		/** The reference source */
		source?: string | null;
		tags?: Array<string>;

		/** The reference url */
		url?: string | null;
	}

	/** An external link/reference */
	export interface VulnerabilityReferenceFormProperties {

		/** The reference source */
		source: FormControl<string | null | undefined>,

		/** The reference url */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityReferenceFormGroup() {
		return new FormGroup<VulnerabilityReferenceFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StandaloneVulnerabilitySeverity { Unknown = 'Unknown', Negligible = 'Negligible', Low = 'Low', Medium = 'Medium', High = 'High', Critical = 'Critical' }

	export interface VendorDataObject {
		cvss_v2?: CVSSV2Scores;
		cvss_v3?: CVSSV3Scores;

		/** Vendor Vulnerability ID */
		id?: string | null;
	}
	export interface VendorDataObjectFormProperties {

		/** Vendor Vulnerability ID */
		id: FormControl<string | null | undefined>,
	}
	export function CreateVendorDataObjectFormGroup() {
		return new FormGroup<VendorDataObjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pagination wrapped list of images with vulnerabilties that match some filter */
	export interface PaginatedVulnerableImageList extends PaginationProperties {
		images?: Array<VulnerableImage>;
	}

	/** Pagination wrapped list of images with vulnerabilties that match some filter */
	export interface PaginatedVulnerableImageListFormProperties extends PaginationPropertiesFormProperties {
	}
	export function CreatePaginatedVulnerableImageListFormGroup() {
		return new FormGroup<PaginatedVulnerableImageListFormProperties>({
			next_page: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<string | null | undefined>(undefined),
			returned_count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A record of an image vulnerable to some known vulnerability. Includes vulnerable package information */
	export interface VulnerableImage {
		affected_packages?: Array<VulnerablePackageReference>;

		/** A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest */
		image?: ImageReference;
	}

	/** A record of an image vulnerable to some known vulnerability. Includes vulnerable package information */
	export interface VulnerableImageFormProperties {
	}
	export function CreateVulnerableImageFormGroup() {
		return new FormGroup<VulnerableImageFormProperties>({
		});

	}


	/** A record of a software item which is vulnerable or carries a fix for a vulnerability */
	export interface VulnerablePackageReference {

		/** Package name */
		name?: string | null;

		/** Vulnerability namespace of affected package */
		namespace?: string | null;

		/** Severity of vulnerability affecting package */
		severity?: string | null;

		/** Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...) */
		type?: string | null;

		/** A version for the package. If null, then references all versions */
		version?: string | null;
	}

	/** A record of a software item which is vulnerable or carries a fix for a vulnerability */
	export interface VulnerablePackageReferenceFormProperties {

		/** Package name */
		name: FormControl<string | null | undefined>,

		/** Vulnerability namespace of affected package */
		namespace: FormControl<string | null | undefined>,

		/** Severity of vulnerability affecting package */
		severity: FormControl<string | null | undefined>,

		/** Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...) */
		type: FormControl<string | null | undefined>,

		/** A version for the package. If null, then references all versions */
		version: FormControl<string | null | undefined>,
	}
	export function CreateVulnerablePackageReferenceFormGroup() {
		return new FormGroup<VulnerablePackageReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for common pagination handling to be included in any wrapping object that needs pagination elements */
	export interface PaginationProperties {

		/** True if additional pages exist (page + 1) or False if this is the last page */
		next_page?: string | null;

		/** The page number returned (should match the requested page query string param) */
		page?: string | null;

		/** The number of items sent in this response */
		returned_count?: number | null;
	}

	/** Properties for common pagination handling to be included in any wrapping object that needs pagination elements */
	export interface PaginationPropertiesFormProperties {

		/** True if additional pages exist (page + 1) or False if this is the last page */
		next_page: FormControl<string | null | undefined>,

		/** The page number returned (should match the requested page query string param) */
		page: FormControl<string | null | undefined>,

		/** The number of items sent in this response */
		returned_count: FormControl<number | null | undefined>,
	}
	export function CreatePaginationPropertiesFormGroup() {
		return new FormGroup<PaginationPropertiesFormProperties>({
			next_page: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<string | null | undefined>(undefined),
			returned_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Policy {
		comment?: string | null;

		/** Required */
		id: string;
		name?: string | null;
		rules?: Array<PolicyRule>;

		/** Required */
		version: string;
	}
	export interface PolicyFormProperties {
		comment: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A rule that defines and decision value if the match is found true for a given image. */
	export interface PolicyRule {

		/** Required */
		action: PolicyRuleAction;

		/** Required */
		gate: string;
		id?: string | null;
		PolicyRuleParams?: Array<PolicyRuleParams>;

		/** Required */
		trigger: string;
	}

	/** A rule that defines and decision value if the match is found true for a given image. */
	export interface PolicyRuleFormProperties {

		/** Required */
		action: FormControl<PolicyRuleAction | null | undefined>,

		/** Required */
		gate: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		trigger: FormControl<string | null | undefined>,
	}
	export function CreatePolicyRuleFormGroup() {
		return new FormGroup<PolicyRuleFormProperties>({
			action: new FormControl<PolicyRuleAction | null | undefined>(undefined, [Validators.required]),
			gate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			trigger: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PolicyRuleAction { GO = 'GO', STOP = 'STOP', WARN = 'WARN' }

	export interface PolicyRuleParams {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}
	export interface PolicyRuleParamsFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePolicyRuleParamsFormGroup() {
		return new FormGroup<PolicyRuleParamsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A bundle containing a set of policies, whitelists, and rules for mapping them to specific images */
	export interface PolicyBundle {

		/** List of mapping rules that define which images should always result in a STOP/FAIL policy result regardless of policy content or presence in whitelisted_images */
		blacklisted_images?: Array<ImageSelectionRule>;

		/** Description of the bundle, human readable */
		comment?: string | null;

		/**
		 * Id of the bundle
		 * Required
		 */
		id: string;

		/**
		 * Mapping rules for defining which policy and whitelist(s) to apply to an image based on a match of the image tag or id. Evaluated in order.
		 * Required
		 */
		mappings: Array<MappingRule>;

		/** Human readable name for the bundle */
		name?: string | null;

		/**
		 * Policies which define the go/stop/warn status of an image using rule matches on image properties
		 * Required
		 */
		policies: Array<Policy>;

		/**
		 * Version id for this bundle format
		 * Required
		 */
		version: string;

		/** List of mapping rules that define which images should always be passed (unless also on the blacklist), regardless of policy result. */
		whitelisted_images?: Array<ImageSelectionRule>;

		/** Whitelists which define which policy matches to disregard explicitly in the final policy decision */
		whitelists?: Array<Whitelist>;
	}

	/** A bundle containing a set of policies, whitelists, and rules for mapping them to specific images */
	export interface PolicyBundleFormProperties {

		/** Description of the bundle, human readable */
		comment: FormControl<string | null | undefined>,

		/**
		 * Id of the bundle
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Human readable name for the bundle */
		name: FormControl<string | null | undefined>,

		/**
		 * Version id for this bundle format
		 * Required
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePolicyBundleFormGroup() {
		return new FormGroup<PolicyBundleFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A collection of whitelist items to match a policy evaluation against. */
	export interface Whitelist {
		comment?: string | null;

		/** Required */
		id: string;
		items?: Array<WhitelistItem>;
		name?: string | null;

		/** Required */
		version: string;
	}

	/** A collection of whitelist items to match a policy evaluation against. */
	export interface WhitelistFormProperties {
		comment: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateWhitelistFormGroup() {
		return new FormGroup<WhitelistFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifies a specific gate and trigger match from a policy against an image and indicates it should be ignored in final policy decisions */
	export interface WhitelistItem {
		expires_on?: Date | null;

		/** Required */
		gate: string;
		id?: string | null;

		/** Required */
		trigger_id: string;
	}

	/** Identifies a specific gate and trigger match from a policy against an image and indicates it should be ignored in final policy decisions */
	export interface WhitelistItemFormProperties {
		expires_on: FormControl<Date | null | undefined>,

		/** Required */
		gate: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		trigger_id: FormControl<string | null | undefined>,
	}
	export function CreateWhitelistItemFormGroup() {
		return new FormGroup<WhitelistItemFormProperties>({
			expires_on: new FormControl<Date | null | undefined>(undefined, [Validators.pattern('^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:\:\d+)?[A-Z]?$')]),
			gate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			trigger_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A policy bundle plus some metadata */
	export interface PolicyBundleRecord {

		/** True if the bundle is currently defined to be used automatically */
		active?: boolean | null;
		created_at?: Date | null;
		last_updated?: Date | null;

		/** The bundle's identifier */
		policyId?: string | null;

		/** Source location of where the policy bundle originated */
		policy_source?: string | null;

		/** A bundle containing a set of policies, whitelists, and rules for mapping them to specific images */
		policybundle?: PolicyBundle;

		/** UserId of the user that owns the bundle */
		userId?: string | null;
	}

	/** A policy bundle plus some metadata */
	export interface PolicyBundleRecordFormProperties {

		/** True if the bundle is currently defined to be used automatically */
		active: FormControl<boolean | null | undefined>,
		created_at: FormControl<Date | null | undefined>,
		last_updated: FormControl<Date | null | undefined>,

		/** The bundle's identifier */
		policyId: FormControl<string | null | undefined>,

		/** Source location of where the policy bundle originated */
		policy_source: FormControl<string | null | undefined>,

		/** UserId of the user that owns the bundle */
		userId: FormControl<string | null | undefined>,
	}
	export function CreatePolicyBundleRecordFormGroup() {
		return new FormGroup<PolicyBundleRecordFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
			policyId: new FormControl<string | null | undefined>(undefined),
			policy_source: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyEvalNotification extends NotificationBase {
		data?: PolicyEvalNotificationData;
	}
	export interface PolicyEvalNotificationFormProperties extends NotificationBaseFormProperties {
	}
	export function CreatePolicyEvalNotificationFormGroup() {
		return new FormGroup<PolicyEvalNotificationFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined),
			dataId: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<number | null | undefined>(undefined),
			max_tries: new FormControl<number | null | undefined>(undefined),
			queueId: new FormControl<string | null | undefined>(undefined),
			record_state_key: new FormControl<string | null | undefined>(undefined),
			record_state_val: new FormControl<string | null | undefined>(undefined),
			tries: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyEvalNotificationData extends BaseNotificationData {
		notification_payload?: PolicyEvalNotificationPayload;
	}
	export interface PolicyEvalNotificationDataFormProperties extends BaseNotificationDataFormProperties {
	}
	export function CreatePolicyEvalNotificationDataFormGroup() {
		return new FormGroup<PolicyEvalNotificationDataFormProperties>({
			notification_type: new FormControl<string | null | undefined>(undefined),
			notification_user: new FormControl<string | null | undefined>(undefined),
			notification_user_email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyEvalNotificationPayload extends GenericNotificationPayload {

		/** List of Corresponding Image Annotations */
		annotations?: string | null;

		/** The Current Policy Evaluation result */
		curr_eval?: string | null;

		/** The Previous Policy Evaluation result */
		last_eval?: string | null;
	}
	export interface PolicyEvalNotificationPayloadFormProperties extends GenericNotificationPayloadFormProperties {

		/** List of Corresponding Image Annotations */
		annotations: FormControl<string | null | undefined>,

		/** The Current Policy Evaluation result */
		curr_eval: FormControl<string | null | undefined>,

		/** The Previous Policy Evaluation result */
		last_eval: FormControl<string | null | undefined>,
	}
	export function CreatePolicyEvalNotificationPayloadFormGroup() {
		return new FormGroup<PolicyEvalNotificationPayloadFormProperties>({
			notificationId: new FormControl<string | null | undefined>(undefined),
			subscription_key: new FormControl<string | null | undefined>(undefined),
			subscription_type: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			annotations: new FormControl<string | null | undefined>(undefined),
			curr_eval: new FormControl<string | null | undefined>(undefined),
			last_eval: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evaluation response object */
	export interface PolicyEvaluation {
	}

	/** Evaluation response object */
	export interface PolicyEvaluationFormProperties {
	}
	export function CreatePolicyEvaluationFormGroup() {
		return new FormGroup<PolicyEvaluationFormProperties>({
		});

	}


	/** A registry entry describing the endpoint and credentials for a registry to pull images from */
	export interface RegistryConfiguration {
		created_at?: Date | null;
		last_upated?: Date | null;

		/** hostname:port string for accessing the registry, as would be used in a docker pull operation */
		registry?: string | null;

		/** human readable name associated with registry record */
		registry_name?: string | null;

		/** Type of registry */
		registry_type?: string | null;

		/** Username portion of credential to use for this registry */
		registry_user?: string | null;

		/** Use TLS/SSL verification for the registry URL */
		registry_verify?: boolean | null;

		/** Engine user that owns this registry entry */
		userId?: string | null;
	}

	/** A registry entry describing the endpoint and credentials for a registry to pull images from */
	export interface RegistryConfigurationFormProperties {
		created_at: FormControl<Date | null | undefined>,
		last_upated: FormControl<Date | null | undefined>,

		/** hostname:port string for accessing the registry, as would be used in a docker pull operation */
		registry: FormControl<string | null | undefined>,

		/** human readable name associated with registry record */
		registry_name: FormControl<string | null | undefined>,

		/** Type of registry */
		registry_type: FormControl<string | null | undefined>,

		/** Username portion of credential to use for this registry */
		registry_user: FormControl<string | null | undefined>,

		/** Use TLS/SSL verification for the registry URL */
		registry_verify: FormControl<boolean | null | undefined>,

		/** Engine user that owns this registry entry */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateRegistryConfigurationFormGroup() {
		return new FormGroup<RegistryConfigurationFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			last_upated: new FormControl<Date | null | undefined>(undefined),
			registry: new FormControl<string | null | undefined>(undefined),
			registry_name: new FormControl<string | null | undefined>(undefined),
			registry_type: new FormControl<string | null | undefined>(undefined),
			registry_user: new FormControl<string | null | undefined>(undefined),
			registry_verify: new FormControl<boolean | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A registry record describing the endpoint and credentials for a registry */
	export interface RegistryConfigurationRequest {

		/** hostname:port string for accessing the registry, as would be used in a docker pull operation. May include some or all of a repository and wildcards (e.g. docker.io/library/* or gcr.io/myproject/myrepository) */
		registry?: string | null;

		/** human readable name associated with registry record */
		registry_name?: string | null;

		/** Password portion of credential to use for this registry */
		registry_pass?: string | null;

		/** Type of registry */
		registry_type?: string | null;

		/** Username portion of credential to use for this registry */
		registry_user?: string | null;

		/** Use TLS/SSL verification for the registry URL */
		registry_verify?: boolean | null;
	}

	/** A registry record describing the endpoint and credentials for a registry */
	export interface RegistryConfigurationRequestFormProperties {

		/** hostname:port string for accessing the registry, as would be used in a docker pull operation. May include some or all of a repository and wildcards (e.g. docker.io/library/* or gcr.io/myproject/myrepository) */
		registry: FormControl<string | null | undefined>,

		/** human readable name associated with registry record */
		registry_name: FormControl<string | null | undefined>,

		/** Password portion of credential to use for this registry */
		registry_pass: FormControl<string | null | undefined>,

		/** Type of registry */
		registry_type: FormControl<string | null | undefined>,

		/** Username portion of credential to use for this registry */
		registry_user: FormControl<string | null | undefined>,

		/** Use TLS/SSL verification for the registry URL */
		registry_verify: FormControl<boolean | null | undefined>,
	}
	export function CreateRegistryConfigurationRequestFormGroup() {
		return new FormGroup<RegistryConfigurationRequestFormProperties>({
			registry: new FormControl<string | null | undefined>(undefined),
			registry_name: new FormControl<string | null | undefined>(undefined),
			registry_pass: new FormControl<string | null | undefined>(undefined),
			registry_type: new FormControl<string | null | undefined>(undefined),
			registry_user: new FormControl<string | null | undefined>(undefined),
			registry_verify: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The retrieved file entry including content (b64 encoded) */
	export interface RetrievedFile {
		b64_content?: string | null;
		path?: string | null;
	}

	/** The retrieved file entry including content (b64 encoded) */
	export interface RetrievedFileFormProperties {
		b64_content: FormControl<string | null | undefined>,
		path: FormControl<string | null | undefined>,
	}
	export function CreateRetrievedFileFormGroup() {
		return new FormGroup<RetrievedFileFormProperties>({
			b64_content: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The retrieved file entry including content (b64 encoded) */
	export interface SecretSearchResult {
		matches?: Array<RegexContentMatch>;
		path?: string | null;
	}

	/** The retrieved file entry including content (b64 encoded) */
	export interface SecretSearchResultFormProperties {
		path: FormControl<string | null | undefined>,
	}
	export function CreateSecretSearchResultFormGroup() {
		return new FormGroup<SecretSearchResultFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A service status record */
	export interface Service {

		/** The url to reach the service, including port as needed */
		base_url?: string | null;

		/** The unique id of the host on which the service is executing */
		hostid?: string | null;

		/** System status response */
		service_detail?: StatusResponse;

		/** Registered service name */
		servicename?: string | null;
		status?: boolean | null;

		/** A state indicating the condition of the service. Normal operation is 'registered' */
		status_message?: string | null;

		/** The version of the service as reported by the service implementation on registration */
		version?: string | null;
	}

	/** A service status record */
	export interface ServiceFormProperties {

		/** The url to reach the service, including port as needed */
		base_url: FormControl<string | null | undefined>,

		/** The unique id of the host on which the service is executing */
		hostid: FormControl<string | null | undefined>,

		/** Registered service name */
		servicename: FormControl<string | null | undefined>,
		status: FormControl<boolean | null | undefined>,

		/** A state indicating the condition of the service. Normal operation is 'registered' */
		status_message: FormControl<string | null | undefined>,

		/** The version of the service as reported by the service implementation on registration */
		version: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			base_url: new FormControl<string | null | undefined>(undefined),
			hostid: new FormControl<string | null | undefined>(undefined),
			servicename: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<boolean | null | undefined>(undefined),
			status_message: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** System status response */
	export interface StatusResponse {
		available?: boolean | null;
		busy?: boolean | null;
		db_version?: string | null;
		detail?: string | null;
		message?: string | null;
		up?: boolean | null;
		version?: string | null;
	}

	/** System status response */
	export interface StatusResponseFormProperties {
		available: FormControl<boolean | null | undefined>,
		busy: FormControl<boolean | null | undefined>,
		db_version: FormControl<string | null | undefined>,
		detail: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		up: FormControl<boolean | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateStatusResponseFormGroup() {
		return new FormGroup<StatusResponseFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			busy: new FormControl<boolean | null | undefined>(undefined),
			db_version: new FormControl<string | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			up: new FormControl<boolean | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Version information for a service */
	export interface ServiceVersion {

		/** Api Version string */
		api?: ServiceVersionApi;
		db?: ServiceVersionDb;
		service?: ServiceVersionService;
	}

	/** Version information for a service */
	export interface ServiceVersionFormProperties {
	}
	export function CreateServiceVersionFormGroup() {
		return new FormGroup<ServiceVersionFormProperties>({
		});

	}

	export interface ServiceVersionApi {

		/** Semantic version of the api */
		version?: string | null;
	}
	export interface ServiceVersionApiFormProperties {

		/** Semantic version of the api */
		version: FormControl<string | null | undefined>,
	}
	export function CreateServiceVersionApiFormGroup() {
		return new FormGroup<ServiceVersionApiFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceVersionDb {

		/** Semantic version of the db schema */
		schema_version?: string | null;
	}
	export interface ServiceVersionDbFormProperties {

		/** Semantic version of the db schema */
		schema_version: FormControl<string | null | undefined>,
	}
	export function CreateServiceVersionDbFormGroup() {
		return new FormGroup<ServiceVersionDbFormProperties>({
			schema_version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServiceVersionService {

		/** Semantic Version string of the service implementation */
		version?: string | null;
	}
	export interface ServiceVersionServiceFormProperties {

		/** Semantic Version string of the service implementation */
		version: FormControl<string | null | undefined>,
	}
	export function CreateServiceVersionServiceFormGroup() {
		return new FormGroup<ServiceVersionServiceFormProperties>({
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Subscription entry */
	export interface Subscription {

		/** Is the subscription currently active */
		active?: boolean | null;

		/** the unique id for this subscription record */
		subscription_id?: string | null;

		/** The key value that the subscription references. E.g. a tag value or a repo name. */
		subscription_key?: string | null;

		/** The type of the subscription */
		subscription_type?: string | null;

		/** The value of the subscription target */
		subscription_value?: string | null;

		/** The userId of the subscribed user */
		userId?: string | null;
	}

	/** Subscription entry */
	export interface SubscriptionFormProperties {

		/** Is the subscription currently active */
		active: FormControl<boolean | null | undefined>,

		/** the unique id for this subscription record */
		subscription_id: FormControl<string | null | undefined>,

		/** The key value that the subscription references. E.g. a tag value or a repo name. */
		subscription_key: FormControl<string | null | undefined>,

		/** The type of the subscription */
		subscription_type: FormControl<string | null | undefined>,

		/** The value of the subscription target */
		subscription_value: FormControl<string | null | undefined>,

		/** The userId of the subscribed user */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			subscription_id: new FormControl<string | null | undefined>(undefined),
			subscription_key: new FormControl<string | null | undefined>(undefined),
			subscription_type: new FormControl<string | null | undefined>(undefined),
			subscription_value: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subscription entry to add to the system */
	export interface SubscriptionRequest {
		subscription_key?: string | null;
		subscription_type?: string | null;
		subscription_value?: string | null;
	}

	/** A subscription entry to add to the system */
	export interface SubscriptionRequestFormProperties {
		subscription_key: FormControl<string | null | undefined>,
		subscription_type: FormControl<string | null | undefined>,
		subscription_value: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionRequestFormGroup() {
		return new FormGroup<SubscriptionRequestFormProperties>({
			subscription_key: new FormControl<string | null | undefined>(undefined),
			subscription_type: new FormControl<string | null | undefined>(undefined),
			subscription_value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A modification to a subscription entry to change its status or value */
	export interface SubscriptionUpdate {

		/** Toggle the subscription processing on or off */
		active?: boolean | null;

		/** The new subscription value, e.g. the new tag to be subscribed to */
		subscription_value?: string | null;
	}

	/** A modification to a subscription entry to change its status or value */
	export interface SubscriptionUpdateFormProperties {

		/** Toggle the subscription processing on or off */
		active: FormControl<boolean | null | undefined>,

		/** The new subscription value, e.g. the new tag to be subscribed to */
		subscription_value: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionUpdateFormGroup() {
		return new FormGroup<SubscriptionUpdateFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			subscription_value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** System status response */
	export interface SystemStatusResponse {

		/** A list of service objects */
		service_states?: Array<Service>;
	}

	/** System status response */
	export interface SystemStatusResponseFormProperties {
	}
	export function CreateSystemStatusResponseFormGroup() {
		return new FormGroup<SystemStatusResponseFormProperties>({
		});

	}

	export interface TagUpdateNotification extends NotificationBase {
		data?: TagUpdateNotificationData;
	}
	export interface TagUpdateNotificationFormProperties extends NotificationBaseFormProperties {
	}
	export function CreateTagUpdateNotificationFormGroup() {
		return new FormGroup<TagUpdateNotificationFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined),
			dataId: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<number | null | undefined>(undefined),
			max_tries: new FormControl<number | null | undefined>(undefined),
			queueId: new FormControl<string | null | undefined>(undefined),
			record_state_key: new FormControl<string | null | undefined>(undefined),
			record_state_val: new FormControl<string | null | undefined>(undefined),
			tries: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagUpdateNotificationData extends BaseNotificationData {
		notification_payload?: TagUpdateNotificationPayload;
	}
	export interface TagUpdateNotificationDataFormProperties extends BaseNotificationDataFormProperties {
	}
	export function CreateTagUpdateNotificationDataFormGroup() {
		return new FormGroup<TagUpdateNotificationDataFormProperties>({
			notification_type: new FormControl<string | null | undefined>(undefined),
			notification_user: new FormControl<string | null | undefined>(undefined),
			notification_user_email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagUpdateNotificationPayload extends GenericNotificationPayload {

		/** List of Corresponding Image Annotations */
		annotations?: string | null;

		/** A list containing the current image digest */
		curr_eval?: Array<string>;

		/** A list containing the previous image digests */
		last_eval?: Array<string>;
	}
	export interface TagUpdateNotificationPayloadFormProperties extends GenericNotificationPayloadFormProperties {

		/** List of Corresponding Image Annotations */
		annotations: FormControl<string | null | undefined>,
	}
	export function CreateTagUpdateNotificationPayloadFormGroup() {
		return new FormGroup<TagUpdateNotificationPayloadFormProperties>({
			notificationId: new FormControl<string | null | undefined>(undefined),
			subscription_key: new FormControl<string | null | undefined>(undefined),
			subscription_type: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			annotations: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TokenResponse {

		/**
		 * The token content
		 * Required
		 */
		token: string;
	}
	export interface TokenResponseFormProperties {

		/**
		 * The token content
		 * Required
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreateTokenResponseFormGroup() {
		return new FormGroup<TokenResponseFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A username for authenticating with one or more types of credentials. User type defines the expected credentials allowed for the user. Native users have passwords, External users have no credential internally. Internal users are service/system users for inter-service communication. */
	export interface User {

		/** The timestampt the user record was created */
		created_at?: Date | null;

		/** The timestamp of the last update to this record */
		last_updated?: Date | null;

		/** If the user is external, this is the source that the user was initialized from. All other user types have this set to null */
		source?: string | null;

		/** The user's type */
		type?: UserType | null;

		/**
		 * The username to authenticate with
		 * Required
		 */
		username: string;
	}

	/** A username for authenticating with one or more types of credentials. User type defines the expected credentials allowed for the user. Native users have passwords, External users have no credential internally. Internal users are service/system users for inter-service communication. */
	export interface UserFormProperties {

		/** The timestampt the user record was created */
		created_at: FormControl<Date | null | undefined>,

		/** The timestamp of the last update to this record */
		last_updated: FormControl<Date | null | undefined>,

		/** If the user is external, this is the source that the user was initialized from. All other user types have this set to null */
		source: FormControl<string | null | undefined>,

		/** The user's type */
		type: FormControl<UserType | null | undefined>,

		/**
		 * The username to authenticate with
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			created_at: new FormControl<Date | null | undefined>(undefined),
			last_updated: new FormControl<Date | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UserType | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum UserType { native = 'native', internal = 'internal', external = 'external' }


	/** A payload for creating a new user, includes the username and password in a single request */
	export interface UserCreationRequest {

		/**
		 * The initial password for the user, must be at least 6 characters, up to 128
		 * Required
		 */
		password: string;

		/**
		 * The username to create
		 * Required
		 */
		username: string;
	}

	/** A payload for creating a new user, includes the username and password in a single request */
	export interface UserCreationRequestFormProperties {

		/**
		 * The initial password for the user, must be at least 6 characters, up to 128
		 * Required
		 */
		password: FormControl<string | null | undefined>,

		/**
		 * The username to create
		 * Required
		 */
		username: FormControl<string | null | undefined>,
	}
	export function CreateUserCreationRequestFormGroup() {
		return new FormGroup<UserCreationRequestFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('.{6,128}$')]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9@.!#$+-=^_`~;]{1,126}[a-zA-Z0-9]$')]),
		});

	}


	/** The results of the comparing two vulnerability records during an update */
	export interface VulnDiffResult {
		added?: Array<string>;
		removed?: Array<string>;
		updated?: Array<string>;
	}

	/** The results of the comparing two vulnerability records during an update */
	export interface VulnDiffResultFormProperties {
	}
	export function CreateVulnDiffResultFormGroup() {
		return new FormGroup<VulnDiffResultFormProperties>({
		});

	}

	export interface VulnUpdateNotification extends NotificationBase {
		data?: VulnUpdateNotificationData;
	}
	export interface VulnUpdateNotificationFormProperties extends NotificationBaseFormProperties {
	}
	export function CreateVulnUpdateNotificationFormGroup() {
		return new FormGroup<VulnUpdateNotificationFormProperties>({
			created_at: new FormControl<number | null | undefined>(undefined),
			dataId: new FormControl<string | null | undefined>(undefined),
			last_updated: new FormControl<number | null | undefined>(undefined),
			max_tries: new FormControl<number | null | undefined>(undefined),
			queueId: new FormControl<string | null | undefined>(undefined),
			record_state_key: new FormControl<string | null | undefined>(undefined),
			record_state_val: new FormControl<string | null | undefined>(undefined),
			tries: new FormControl<number | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VulnUpdateNotificationData extends BaseNotificationData {
		notification_payload?: VulnUpdateNotificationPayload;
	}
	export interface VulnUpdateNotificationDataFormProperties extends BaseNotificationDataFormProperties {
	}
	export function CreateVulnUpdateNotificationDataFormGroup() {
		return new FormGroup<VulnUpdateNotificationDataFormProperties>({
			notification_type: new FormControl<string | null | undefined>(undefined),
			notification_user: new FormControl<string | null | undefined>(undefined),
			notification_user_email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VulnUpdateNotificationPayload extends GenericNotificationPayload {

		/** List of Corresponding Image Annotations */
		annotations?: string | null;

		/** The results of the comparing two vulnerability records during an update */
		diff_vulnerability_result?: VulnDiffResult;
		imageDigest?: string | null;
	}
	export interface VulnUpdateNotificationPayloadFormProperties extends GenericNotificationPayloadFormProperties {

		/** List of Corresponding Image Annotations */
		annotations: FormControl<string | null | undefined>,
		imageDigest: FormControl<string | null | undefined>,
	}
	export function CreateVulnUpdateNotificationPayloadFormGroup() {
		return new FormGroup<VulnUpdateNotificationPayloadFormProperties>({
			notificationId: new FormControl<string | null | undefined>(undefined),
			subscription_key: new FormControl<string | null | undefined>(undefined),
			subscription_type: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
			annotations: new FormControl<string | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Vulnerability {

		/** The name of the feed where vulnerability match was made */
		feed?: string | null;

		/** The name of the feed group where vulnerability match was made */
		feed_group?: string | null;

		/** The package containing a fix, if available */
		fix?: string | null;

		/** List of Nvd Data objects */
		nvd_data?: Array<NvdDataObject>;

		/** The package name and version that are vulnerable in the image */
		package?: string | null;

		/** The CPE string (if applicable) describing the package to vulnerability match */
		package_cpe?: string | null;

		/** The name of the vulnerable package artifact */
		package_name?: string | null;

		/** The location (if applicable) of the vulnerable package in the container filesystem */
		package_path?: string | null;

		/** The type of vulnerable package */
		package_type?: string | null;

		/** The version of the vulnerable package artifact */
		package_version?: string | null;

		/** The severity of the vulnerability */
		severity?: string | null;

		/** The url for more information about the vulnerability */
		url?: string | null;

		/** List of Vendor Data objects */
		vendor_data?: Array<VendorDataObject>;

		/** The vulnerability identifier, such as CVE-2017-100, or RHSA-2017123 */
		vuln?: string | null;

		/** Whether a vendor will fix or not fix the vulnerability */
		will_not_fix?: boolean | null;
	}
	export interface VulnerabilityFormProperties {

		/** The name of the feed where vulnerability match was made */
		feed: FormControl<string | null | undefined>,

		/** The name of the feed group where vulnerability match was made */
		feed_group: FormControl<string | null | undefined>,

		/** The package containing a fix, if available */
		fix: FormControl<string | null | undefined>,

		/** The package name and version that are vulnerable in the image */
		package: FormControl<string | null | undefined>,

		/** The CPE string (if applicable) describing the package to vulnerability match */
		package_cpe: FormControl<string | null | undefined>,

		/** The name of the vulnerable package artifact */
		package_name: FormControl<string | null | undefined>,

		/** The location (if applicable) of the vulnerable package in the container filesystem */
		package_path: FormControl<string | null | undefined>,

		/** The type of vulnerable package */
		package_type: FormControl<string | null | undefined>,

		/** The version of the vulnerable package artifact */
		package_version: FormControl<string | null | undefined>,

		/** The severity of the vulnerability */
		severity: FormControl<string | null | undefined>,

		/** The url for more information about the vulnerability */
		url: FormControl<string | null | undefined>,

		/** The vulnerability identifier, such as CVE-2017-100, or RHSA-2017123 */
		vuln: FormControl<string | null | undefined>,

		/** Whether a vendor will fix or not fix the vulnerability */
		will_not_fix: FormControl<boolean | null | undefined>,
	}
	export function CreateVulnerabilityFormGroup() {
		return new FormGroup<VulnerabilityFormProperties>({
			feed: new FormControl<string | null | undefined>(undefined),
			feed_group: new FormControl<string | null | undefined>(undefined),
			fix: new FormControl<string | null | undefined>(undefined),
			package: new FormControl<string | null | undefined>(undefined),
			package_cpe: new FormControl<string | null | undefined>(undefined),
			package_name: new FormControl<string | null | undefined>(undefined),
			package_path: new FormControl<string | null | undefined>(undefined),
			package_type: new FormControl<string | null | undefined>(undefined),
			package_version: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			vuln: new FormControl<string | null | undefined>(undefined),
			will_not_fix: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** envelope containing list of vulnerabilities */
	export interface VulnerabilityResponse {
		imageDigest?: string | null;

		/** List of Vulnerability objects */
		vulnerabilities?: Array<Vulnerability>;
		vulnerability_type?: string | null;
	}

	/** envelope containing list of vulnerabilities */
	export interface VulnerabilityResponseFormProperties {
		imageDigest: FormControl<string | null | undefined>,
		vulnerability_type: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityResponseFormGroup() {
		return new FormGroup<VulnerabilityResponseFormProperties>({
			imageDigest: new FormControl<string | null | undefined>(undefined),
			vulnerability_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Simple status check
		 * Get 
		 * @return {string} Version check response, returns the api version prefix (e.g. 'v1')
		 */
		Ping(): Observable<string> {
			return this.http.get(this.baseUri + '', { responseType: 'text' });
		}

		/**
		 * List the account for the authenticated user
		 * Get account
		 * @return {Account} User details for caller's user
		 */
		Get_users_account(): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'account', {});
		}

		/**
		 * List user summaries. Only available to the system admin user.
		 * Get accounts
		 * @param {AccountState} state Filter accounts by state
		 * @return {Array<Account>} Accound summary listing
		 */
		List_accounts(state: AccountState | null | undefined): Observable<Array<Account>> {
			return this.http.get<Array<Account>>(this.baseUri + 'accounts?state=' + state, {});
		}

		/**
		 * Create a new user. Only avaialble to admin user.
		 * Post accounts
		 * @return {Account} Account Record
		 */
		Create_account(requestBody: AccountCreationRequest): Observable<Account> {
			return this.http.post<Account>(this.baseUri + 'accounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the specified account, only allowed if the account is in the disabled state. All users will be deleted along with the account and all resources will be garbage collected
		 * Delete accounts/{accountname}
		 * @return {void} 
		 */
		Delete_account(accountname: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get info about an user. Only available to admin user. Uses the main user Id, not a username.
		 * Get accounts/{accountname}
		 * @return {Account} Get user information
		 */
		Get_account(accountname: string): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)), {});
		}

		/**
		 * Update the state of an account to either enabled or disabled. For deletion use the DELETE route
		 * Put accounts/{accountname}/state
		 * @return {AccountStatus} Updated state of the account
		 */
		Update_account_state(accountname: string, requestBody: AccountStatus): Observable<AccountStatus> {
			return this.http.put<AccountStatus>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List accounts for the user
		 * Get accounts/{accountname}/users
		 * @return {Array<User>} User listing
		 */
		List_users(accountname: string): Observable<Array<User>> {
			return this.http.get<Array<User>>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users', {});
		}

		/**
		 * Create a new user
		 * Post accounts/{accountname}/users
		 * @return {User} Credential summary
		 */
		Create_user(accountname: string, requestBody: UserCreationRequest): Observable<User> {
			return this.http.post<User>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a specific user credential by username of the credential. Cannot be the credential used to authenticate the request.
		 * Delete accounts/{accountname}/users/{username}
		 * @return {void} 
		 */
		Delete_user(accountname: string, username: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific user in the specified account
		 * Get accounts/{accountname}/users/{username}
		 * @return {User} User record
		 */
		Get_account_user(accountname: string, username: string): Observable<User> {
			return this.http.get<User>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users/' + (username == null ? '' : encodeURIComponent(username)), {});
		}

		/**
		 * Delete a credential by type
		 * Delete accounts/{accountname}/users/{username}/credentials
		 * @return {void} 
		 */
		Delete_user_credential(accountname: string, username: string, credential_type: AccessCredentialType): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users/' + (username == null ? '' : encodeURIComponent(username)) + '/credentials&credential_type=' + credential_type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get current credential summary
		 * Get accounts/{accountname}/users/{username}/credentials
		 * @return {Array<AccessCredential>} User credential listing
		 */
		List_user_credentials(accountname: string, username: string): Observable<Array<AccessCredential>> {
			return this.http.get<Array<AccessCredential>>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users/' + (username == null ? '' : encodeURIComponent(username)) + '/credentials', {});
		}

		/**
		 * add/replace credential
		 * Post accounts/{accountname}/users/{username}/credentials
		 * @return {User} Add a credential, overwritting if already exists
		 */
		Create_user_credential(accountname: string, username: string, requestBody: AccessCredential): Observable<User> {
			return this.http.post<User>(this.baseUri + 'accounts/' + (accountname == null ? '' : encodeURIComponent(accountname)) + '/users/' + (username == null ? '' : encodeURIComponent(username)) + '/credentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get archives
		 * @return {ArchiveSummary} Archive summary listing
		 */
		List_archives(): Observable<ArchiveSummary> {
			return this.http.get<ArchiveSummary>(this.baseUri + 'archives', {});
		}

		/**
		 * Get archives/images
		 * @return {Array<ArchivedAnalysis>} Image analysis archive listing for the requesting account (not the whole system)
		 */
		List_analysis_archive(): Observable<Array<ArchivedAnalysis>> {
			return this.http.get<Array<ArchivedAnalysis>>(this.baseUri + 'archives/images', {});
		}

		/**
		 * Post archives/images
		 * @return {Array<AnalysisArchiveAddResult>} Archive statuses
		 */
		Archive_image_analysis(requestBody: Array<string>): Observable<Array<AnalysisArchiveAddResult>> {
			return this.http.post<Array<AnalysisArchiveAddResult>>(this.baseUri + 'archives/images', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs a synchronous archive deletion
		 * Delete archives/images/{imageDigest}
		 * @return {void} ArchivdImageAnalysis successfully deleted
		 */
		Delete_archived_analysis(imageDigest: string, force: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'archives/images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '&force=' + force, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the archive metadata record identifying the image and tags for the analysis in the archive.
		 * Get archives/images/{imageDigest}
		 * @param {string} imageDigest The image digest to identify the image analysis
		 * @return {ArchivedAnalysis} Archived Image
		 */
		Get_archived_analysis(imageDigest: string): Observable<ArchivedAnalysis> {
			return this.http.get<ArchivedAnalysis>(this.baseUri + 'archives/images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)), {});
		}

		/**
		 * Get archives/rules
		 * @param {boolean} system_global If true include system global rules (owned by admin) even for non-admin users. Defaults to true if not set. Can be set to false to exclude globals
		 * @return {Array<AnalysisArchiveTransitionRule>} Archive transition rules
		 */
		List_analysis_archive_rules(system_global: boolean | null | undefined): Observable<Array<AnalysisArchiveTransitionRule>> {
			return this.http.get<Array<AnalysisArchiveTransitionRule>>(this.baseUri + 'archives/rules?system_global=' + system_global, {});
		}

		/**
		 * Post archives/rules
		 * @return {AnalysisArchiveTransitionRule} Archive transition rule
		 */
		Create_analysis_archive_rule(requestBody: AnalysisArchiveTransitionRule): Observable<AnalysisArchiveTransitionRule> {
			return this.http.post<AnalysisArchiveTransitionRule>(this.baseUri + 'archives/rules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete archives/rules/{ruleId}
		 * @return {void} Analysis archive rule succesfuly deleted
		 */
		Delete_analysis_archive_rule(ruleId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'archives/rules/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get archives/rules/{ruleId}
		 * @return {AnalysisArchiveTransitionRule} Archive transition rule
		 */
		Get_analysis_archive_rule(ruleId: string): Observable<AnalysisArchiveTransitionRule> {
			return this.http.get<AnalysisArchiveTransitionRule>(this.baseUri + 'archives/rules/' + (ruleId == null ? '' : encodeURIComponent(ruleId)), {});
		}

		/**
		 * List Event Types
		 * Returns list of event types in the category hierarchy
		 * Get event_types
		 * @return {Array<EventCategory>} List of event types
		 */
		List_event_types(): Observable<Array<EventCategory>> {
			return this.http.get<Array<EventCategory>>(this.baseUri + 'event_types', {});
		}

		/**
		 * Delete Events
		 * Delete all or a subset of events filtered using the optional query parameters
		 * Delete events
		 * @param {string} before Delete events that occurred before the timestamp
		 * @param {string} since Delete events that occurred after the timestamp
		 * @param {string} level Delete events that match the level - INFO or ERROR
		 * @return {Array<string>} List of deleted event IDs
		 */
		Delete_events(before: string | null | undefined, since: string | null | undefined, level: string | null | undefined): Observable<Array<string>> {
			return this.http.delete<Array<string>>(this.baseUri + 'events?before=' + (before == null ? '' : encodeURIComponent(before)) + '&since=' + (since == null ? '' : encodeURIComponent(since)) + '&level=' + (level == null ? '' : encodeURIComponent(level)), {});
		}

		/**
		 * List Events
		 * Returns a paginated list of events in the descending order of their occurrence. Optional query parameters may be used for filtering results
		 * Get events
		 * @param {string} source_servicename Filter events by the originating service
		 * @param {string} source_hostid Filter events by the originating host ID
		 * @param {string} event_type Filter events by a prefix match on the event type (e.g. "user.image.")
		 * @param {string} resource_type Filter events by the type of resource - tag, imageDigest, repository etc
		 * @param {string} resource_id Filter events by the id of the resource
		 * @param {string} level Filter events by the level - INFO or ERROR
		 * @param {string} since Return events that occurred after the timestamp
		 * @param {string} before Return events that occurred before the timestamp
		 * @param {number} page Pagination controls - return the nth page of results. Defaults to first page if left empty
		 * @param {number} limit Number of events in the result set. Defaults to 100 if left empty
		 * @return {EventsList} Paginated list of event records and the next token
		 */
		List_events(source_servicename: string | null | undefined, source_hostid: string | null | undefined, event_type: string | null | undefined, resource_type: string | null | undefined, resource_id: string | null | undefined, level: string | null | undefined, since: string | null | undefined, before: string | null | undefined, page: number | null | undefined, limit: number | null | undefined): Observable<EventsList> {
			return this.http.get<EventsList>(this.baseUri + 'events?source_servicename=' + (source_servicename == null ? '' : encodeURIComponent(source_servicename)) + '&source_hostid=' + (source_hostid == null ? '' : encodeURIComponent(source_hostid)) + '&event_type=' + (event_type == null ? '' : encodeURIComponent(event_type)) + '&resource_type=' + (resource_type == null ? '' : encodeURIComponent(resource_type)) + '&resource_id=' + (resource_id == null ? '' : encodeURIComponent(resource_id)) + '&level=' + (level == null ? '' : encodeURIComponent(level)) + '&since=' + (since == null ? '' : encodeURIComponent(since)) + '&before=' + (before == null ? '' : encodeURIComponent(before)) + '&page=' + page + '&limit=' + limit, {});
		}

		/**
		 * Delete Event
		 * Delete an event by its event ID
		 * Delete events/{eventId}
		 * @param {string} eventId Event ID of the event to be deleted
		 * @return {void} Delete success
		 */
		Delete_event(eventId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Event
		 * Lookup an event by its event ID
		 * Get events/{eventId}
		 * @param {string} eventId Event ID of the event for lookup
		 * @return {EventResponse} Single event record
		 */
		Get_event(eventId: string): Observable<EventResponse> {
			return this.http.get<EventResponse>(this.baseUri + 'events/' + (eventId == null ? '' : encodeURIComponent(eventId)), {});
		}

		/**
		 * Health check, returns 200 and no body if service is running
		 * Get health
		 * @return {void} Empty body on success
		 */
		Health_check(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Bulk mark images for deletion
		 * Delete analysis for image digests in the list asynchronously
		 * Delete images
		 * @return {Array<DeleteImageResponse>} successful operation
		 */
		Delete_images_async(imageDigests: Array<string>, force: boolean | null | undefined): Observable<Array<DeleteImageResponse>> {
			return this.http.delete<Array<DeleteImageResponse>>(this.baseUri + 'images?' + imageDigests.map(z => `imageDigests=${encodeURIComponent(z)}`).join('&') + '&force=' + force, {});
		}

		/**
		 * List all visible images
		 * List all images visible to the user
		 * Get images
		 * @param {boolean} history Include image history in the response
		 * @param {string} fulltag Full docker-pull string to filter results by (e.g. docker.io/library/nginx:latest, or myhost.com:5000/testimages:v1.1.1)
		 * @param {List_imagesImage_status} image_status Filter by image_status value on the record. Default if omitted is 'active'.
		 * @param {List_imagesAnalysis_status} analysis_status Filter by analysis_status value on the record.
		 * @return {Array<AnchoreImage>} successful operation
		 */
		List_images(history: boolean | null | undefined, fulltag: string | null | undefined, image_status: List_imagesImage_status | null | undefined, analysis_status: List_imagesAnalysis_status | null | undefined): Observable<Array<AnchoreImage>> {
			return this.http.get<Array<AnchoreImage>>(this.baseUri + 'images?history=' + history + '&fulltag=' + (fulltag == null ? '' : encodeURIComponent(fulltag)) + '&image_status=' + image_status + '&analysis_status=' + analysis_status, {});
		}

		/**
		 * Submit a new image for analysis by the engine
		 * Creates a new analysis task that is executed asynchronously
		 * Post images
		 * @param {boolean} force Override any existing entry in the system
		 * @param {boolean} autosubscribe Instruct engine to automatically begin watching the added tag for updates from registry
		 * @return {Array<AnchoreImage>} Successfully added image to analysis queue
		 */
		Add_image(force: boolean | null | undefined, autosubscribe: boolean | null | undefined, requestBody: ImageAnalysisRequest): Observable<Array<AnchoreImage>> {
			return this.http.post<Array<AnchoreImage>>(this.baseUri + 'images?force=' + force + '&autosubscribe=' + autosubscribe, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete image by docker imageId
		 * Delete images/by_id/{imageId}
		 * @return {DeleteImageResponse} Image deletion success
		 */
		Delete_image_by_imageId(imageId: string, force: boolean | null | undefined): Observable<DeleteImageResponse> {
			return this.http.delete<DeleteImageResponse>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '&force=' + force, {});
		}

		/**
		 * Lookup image by docker imageId
		 * Get images/by_id/{imageId}
		 * @return {Array<AnchoreImage>} Image lookup success
		 */
		Get_image_by_imageId(imageId: string): Observable<Array<AnchoreImage>> {
			return this.http.get<Array<AnchoreImage>>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)), {});
		}

		/**
		 * Check policy evaluation status for image
		 * Get the policy evaluation for the given image
		 * Get images/by_id/{imageId}/check
		 * @return {Array<PolicyEvaluation>} Policy evaluation success
		 */
		Get_image_policy_check_by_imageId(imageId: string, policyId: string | null | undefined, tag: string, detail: boolean | null | undefined, history: boolean | null | undefined): Observable<Array<PolicyEvaluation>> {
			return this.http.get<Array<PolicyEvaluation>>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/check&policyId=' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&detail=' + detail + '&history=' + history, {});
		}

		/**
		 * List image content types
		 * Get images/by_id/{imageId}/content
		 * @return {Array<string>} Content of specified type from the image
		 */
		List_image_content_by_imageid(imageId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/content', {});
		}

		/**
		 * Get the content of an image by type files
		 * Get images/by_id/{imageId}/content/files
		 * @return {ContentFilesResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_imageId_files(imageId: string): Observable<ContentFilesResponse> {
			return this.http.get<ContentFilesResponse>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/content/files', {});
		}

		/**
		 * Get the content of an image by type java
		 * Get images/by_id/{imageId}/content/java
		 * @return {ContentJAVAPackageResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_imageId_javapackage(imageId: string): Observable<ContentJAVAPackageResponse> {
			return this.http.get<ContentJAVAPackageResponse>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/content/java', {});
		}

		/**
		 * Get the content of an image by type
		 * Get images/by_id/{imageId}/content/{ctype}
		 * @return {ContentPackageResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_imageId(imageId: string, ctype: string): Observable<ContentPackageResponse> {
			return this.http.get<ContentPackageResponse>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/content/' + (ctype == null ? '' : encodeURIComponent(ctype)), {});
		}

		/**
		 * Get vulnerability types
		 * Get images/by_id/{imageId}/vuln
		 * @return {Array<string>} Vulnerability listing for the image
		 */
		Get_image_vulnerability_types_by_imageId(imageId: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/vuln', {});
		}

		/**
		 * Get vulnerabilities by type
		 * Get images/by_id/{imageId}/vuln/{vtype}
		 * @return {VulnerabilityResponse} Vulnerability listing for the image
		 */
		Get_image_vulnerabilities_by_type_imageId(imageId: string, vtype: string): Observable<VulnerabilityResponse> {
			return this.http.get<VulnerabilityResponse>(this.baseUri + 'images/by_id/' + (imageId == null ? '' : encodeURIComponent(imageId)) + '/vuln/' + (vtype == null ? '' : encodeURIComponent(vtype)), {});
		}

		/**
		 * Delete an image analysis
		 * Delete images/{imageDigest}
		 * @return {DeleteImageResponse} Image deletion success
		 */
		Delete_image(imageDigest: string, force: boolean | null | undefined): Observable<DeleteImageResponse> {
			return this.http.delete<DeleteImageResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '&force=' + force, {});
		}

		/**
		 * Get image metadata
		 * Get images/{imageDigest}
		 * @return {Array<AnchoreImage>} Image lookup success
		 */
		Get_image(imageDigest: string): Observable<Array<AnchoreImage>> {
			return this.http.get<Array<AnchoreImage>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)), {});
		}

		/**
		 * Return a list of analyzer artifacts of the specified type
		 * Get images/{imageDigest}/artifacts/file_content_search
		 * @return {Array<FileContentSearchResult>} List of file metadata objects
		 */
		List_file_content_search_results(imageDigest: string): Observable<Array<FileContentSearchResult>> {
			return this.http.get<Array<FileContentSearchResult>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/artifacts/file_content_search', {});
		}

		/**
		 * Return a list of analyzer artifacts of the specified type
		 * Get images/{imageDigest}/artifacts/retrieved_files
		 * @return {Array<RetrievedFile>} List of file metadata objects
		 */
		List_retrieved_files(imageDigest: string): Observable<Array<RetrievedFile>> {
			return this.http.get<Array<RetrievedFile>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/artifacts/retrieved_files', {});
		}

		/**
		 * Return a list of analyzer artifacts of the specified type
		 * Get images/{imageDigest}/artifacts/secret_search
		 * @return {Array<SecretSearchResult>} List of file metadata objects
		 */
		List_secret_search_results(imageDigest: string): Observable<Array<SecretSearchResult>> {
			return this.http.get<Array<SecretSearchResult>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/artifacts/secret_search', {});
		}

		/**
		 * Check policy evaluation status for image
		 * Get the policy evaluation for the given image
		 * Get images/{imageDigest}/check
		 * @return {Array<PolicyEvaluation>} Policy evaluation success
		 */
		Get_image_policy_check(imageDigest: string, policyId: string | null | undefined, tag: string, detail: boolean | null | undefined, history: boolean | null | undefined, interactive: boolean | null | undefined): Observable<Array<PolicyEvaluation>> {
			return this.http.get<Array<PolicyEvaluation>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/check&policyId=' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)) + '&detail=' + detail + '&history=' + history + '&interactive=' + interactive, {});
		}

		/**
		 * List image content types
		 * Get images/{imageDigest}/content
		 * @return {Array<string>} Content listing for the image
		 */
		List_image_content(imageDigest: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/content', {});
		}

		/**
		 * Get the content of an image by type files
		 * Get images/{imageDigest}/content/files
		 * @return {ContentFilesResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_files(imageDigest: string): Observable<ContentFilesResponse> {
			return this.http.get<ContentFilesResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/content/files', {});
		}

		/**
		 * Get the content of an image by type java
		 * Get images/{imageDigest}/content/java
		 * @return {ContentJAVAPackageResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_javapackage(imageDigest: string): Observable<ContentJAVAPackageResponse> {
			return this.http.get<ContentJAVAPackageResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/content/java', {});
		}

		/**
		 * Get the content of an image by type malware
		 * Get images/{imageDigest}/content/malware
		 * @return {ContentMalwareResponse} Content of specified type from the image
		 */
		Get_image_content_by_type_malware(imageDigest: string): Observable<ContentMalwareResponse> {
			return this.http.get<ContentMalwareResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/content/malware', {});
		}

		/**
		 * Get the content of an image by type
		 * Get images/{imageDigest}/content/{ctype}
		 * @return {ContentPackageResponse} Content of specified type from the image
		 */
		Get_image_content_by_type(imageDigest: string, ctype: string): Observable<ContentPackageResponse> {
			return this.http.get<ContentPackageResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/content/' + (ctype == null ? '' : encodeURIComponent(ctype)), {});
		}

		/**
		 * List image metadata types
		 * Get images/{imageDigest}/metadata
		 * @return {Array<string>} Metadata listing for the image
		 */
		List_image_metadata(imageDigest: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/metadata', {});
		}

		/**
		 * Get the metadata of an image by type
		 * Get images/{imageDigest}/metadata/{mtype}
		 * @return {MetadataResponse} Metadata of specified type from the image
		 */
		Get_image_metadata_by_type(imageDigest: string, mtype: string): Observable<MetadataResponse> {
			return this.http.get<MetadataResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/metadata/' + (mtype == null ? '' : encodeURIComponent(mtype)), {});
		}

		/**
		 * Get image sbom in the native Anchore format
		 * Get images/{imageDigest}/sboms/native
		 * @return {void} Image lookup success
		 */
		Get_image_sbom_native(imageDigest: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/sboms/native', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get vulnerability types
		 * Get images/{imageDigest}/vuln
		 * @return {Array<string>} Vulnerability listing for the image
		 */
		Get_image_vulnerability_types(imageDigest: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/vuln', {});
		}

		/**
		 * Get vulnerabilities by type
		 * Get images/{imageDigest}/vuln/{vtype}
		 * @param {boolean} vendor_only Filter results to include only vulnerabilities that are not marked as invalid by upstream OS vendor data. When set to true, it will filter out all vulnerabilities where `will_not_fix` is False. If false all vulnerabilities are returned regardless of `will_not_fix`
		 * @return {VulnerabilityResponse} Vulnerability listing for the image
		 */
		Get_image_vulnerabilities_by_type(imageDigest: string, vtype: string, force_refresh: boolean | null | undefined, vendor_only: boolean | null | undefined): Observable<VulnerabilityResponse> {
			return this.http.get<VulnerabilityResponse>(this.baseUri + 'images/' + (imageDigest == null ? '' : encodeURIComponent(imageDigest)) + '/vuln/' + (vtype == null ? '' : encodeURIComponent(vtype)) + '&force_refresh=' + force_refresh + '&vendor_only=' + vendor_only, {});
		}

		/**
		 * Lists in-progress imports
		 * Get imports/images
		 * @return {Array<ImageImportOperation>} success
		 */
		List_operations(): Observable<Array<ImageImportOperation>> {
			return this.http.get<Array<ImageImportOperation>>(this.baseUri + 'imports/images', {});
		}

		/**
		 * Begin the import of an image analyzed by Syft into the system
		 * Post imports/images
		 * @return {ImageImportOperation} success
		 */
		Create_operation(): Observable<ImageImportOperation> {
			return this.http.post<ImageImportOperation>(this.baseUri + 'imports/images', null, {});
		}

		/**
		 * Invalidate operation ID so it can be garbage collected
		 * Delete imports/images/{operation_id}
		 * @return {ImageImportOperation} success
		 */
		Invalidate_operation(operation_id: string): Observable<ImageImportOperation> {
			return this.http.delete<ImageImportOperation>(this.baseUri + 'imports/images/' + (operation_id == null ? '' : encodeURIComponent(operation_id)), {});
		}

		/**
		 * Get detail on a single import
		 * Get imports/images/{operation_id}
		 * @return {ImageImportOperation} success
		 */
		Get_operation(operation_id: string): Observable<ImageImportOperation> {
			return this.http.get<ImageImportOperation>(this.baseUri + 'imports/images/' + (operation_id == null ? '' : encodeURIComponent(operation_id)), {});
		}

		/**
		 * List uploaded dockerfiles
		 * Get imports/images/{operation_id}/dockerfile
		 * @return {Array<string>} success
		 */
		List_import_dockerfiles(operation_id: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'imports/images/' + (operation_id == null ? '' : encodeURIComponent(operation_id)) + '/dockerfile', {});
		}

		/**
		 * List uploaded image configs
		 * Get imports/images/{operation_id}/image_config
		 * @return {Array<string>} success
		 */
		List_import_image_configs(operation_id: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'imports/images/' + (operation_id == null ? '' : encodeURIComponent(operation_id)) + '/image_config', {});
		}

		/**
		 * Import a docker or OCI image config to associate with the image
		 * Post imports/images/{operation_id}/image_config
		 * @return {ImageImportContentResponse} success
		 */
		Import_image_config(operation_id: string, requestBody: string): Observable<ImageImportContentResponse> {
			return this.http.post<ImageImportContentResponse>(this.baseUri + 'imports/images/' + (operation_id == null ? '' : encodeURIComponent(operation_id)) + '/image_config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List uploaded image manifests
		 * Get imports/images/{operation_id}/manifest
		 * @return {Array<string>} success
		 */
		List_import_image_manifests(operation_id: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'imports/images/' + (operation_id == null ? '' : encodeURIComponent(operation_id)) + '/manifest', {});
		}

		/**
		 * List uploaded package manifests
		 * Get imports/images/{operation_id}/packages
		 * @return {Array<string>} success
		 */
		List_import_packages(operation_id: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'imports/images/' + (operation_id == null ? '' : encodeURIComponent(operation_id)) + '/packages', {});
		}

		/**
		 * Begin the import of an image analyzed by Syft into the system
		 * Post imports/images/{operation_id}/packages
		 * @return {ImageImportContentResponse} success
		 */
		Import_image_packages(operation_id: string, requestBody: ImagePackageManifest): Observable<ImageImportContentResponse> {
			return this.http.post<ImageImportContentResponse>(this.baseUri + 'imports/images/' + (operation_id == null ? '' : encodeURIComponent(operation_id)) + '/packages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List uploaded parent manifests (manifest lists for a tag)
		 * Get imports/images/{operation_id}/parent_manifest
		 * @return {Array<string>} success
		 */
		List_import_parent_manifests(operation_id: string): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'imports/images/' + (operation_id == null ? '' : encodeURIComponent(operation_id)) + '/parent_manifest', {});
		}

		/**
		 * List policies
		 * List all saved policy bundles
		 * Get policies
		 * @param {boolean} detail Include policy bundle detail in the form of the full bundle content for each entry
		 * @return {Array<PolicyBundleRecord>} Policy listing
		 */
		List_policies(detail: boolean | null | undefined): Observable<Array<PolicyBundleRecord>> {
			return this.http.get<Array<PolicyBundleRecord>>(this.baseUri + 'policies?detail=' + detail, {});
		}

		/**
		 * Add a new policy
		 * Adds a new policy bundle to the system
		 * Post policies
		 * @return {PolicyBundleRecord} Saved bundle
		 */
		Add_policy(requestBody: PolicyBundle): Observable<PolicyBundleRecord> {
			return this.http.post<PolicyBundleRecord>(this.baseUri + 'policies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete policy
		 * Delete the specified policy
		 * Delete policies/{policyId}
		 * @return {void} Delete success
		 */
		Delete_policy(policyId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'policies/' + (policyId == null ? '' : encodeURIComponent(policyId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get specific policy
		 * Get the policy bundle content
		 * Get policies/{policyId}
		 * @param {boolean} detail Include policy bundle detail in the form of the full bundle content for each entry
		 * @return {Array<PolicyBundleRecord>} A list with a single fetched policy bundle record
		 */
		Get_policy(policyId: string, detail: boolean | null | undefined): Observable<Array<PolicyBundleRecord>> {
			return this.http.get<Array<PolicyBundleRecord>>(this.baseUri + 'policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&detail=' + detail, {});
		}

		/**
		 * Update policy
		 * Update/replace and existing policy
		 * Put policies/{policyId}
		 * @param {boolean} active Mark policy as active
		 * @return {Array<PolicyBundleRecord>} A list with a single updated policy bundle record
		 */
		Update_policy(policyId: string, active: boolean | null | undefined, requestBody: PolicyBundleRecord): Observable<Array<PolicyBundleRecord>> {
			return this.http.put<Array<PolicyBundleRecord>>(this.baseUri + 'policies/' + (policyId == null ? '' : encodeURIComponent(policyId)) + '&active=' + active, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List of images containing given package
		 * Filterable query interface to search for images containing specified package
		 * Get query/images/by_package
		 * @param {string} name Name of package to search for (e.g. sed)
		 * @param {string} package_type Type of package to filter on (e.g. dpkg)
		 * @param {string} version Version of named package to filter on (e.g. 4.4-1)
		 * @param {string} page The page of results to fetch. Pages start at 1
		 * @param {number} limit Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page
		 * @return {PaginatedImageList} Image listing
		 */
		Query_images_by_package(name: string, package_type: string | null | undefined, version: string | null | undefined, page: string | null | undefined, limit: number | null | undefined): Observable<PaginatedImageList> {
			return this.http.get<PaginatedImageList>(this.baseUri + 'query/images/by_package?name=' + (name == null ? '' : encodeURIComponent(name)) + '&package_type=' + (package_type == null ? '' : encodeURIComponent(package_type)) + '&version=' + (version == null ? '' : encodeURIComponent(version)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit, {});
		}

		/**
		 * List images vulnerable to the specific vulnerability ID.
		 * Returns a listing of images and their respective packages vulnerable to the given vulnerability ID
		 * Get query/images/by_vulnerability
		 * @param {string} vulnerability_id The ID of the vulnerability to search for within all images stored in anchore-engine (e.g. CVE-1999-0001)
		 * @param {string} namespace Filter results to images within the given vulnerability namespace (e.g. debian:8, ubuntu:14.04)
		 * @param {string} affected_package Filter results to images with vulnable packages with the given package name (e.g. libssl)
		 * @param {StandaloneVulnerabilitySeverity} severity Filter results to vulnerable package/vulnerability with the given severity
		 * @param {boolean} vendor_only Filter results to include only vulnerabilities that are not marked as invalid by upstream OS vendor data
		 * @param {number} page The page of results to fetch. Pages start at 1
		 * @param {number} limit Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page
		 * @return {PaginatedVulnerableImageList} Image lookup success
		 */
		Query_images_by_vulnerability(vulnerability_id: string, namespace: string | null | undefined, affected_package: string | null | undefined, severity: StandaloneVulnerabilitySeverity | null | undefined, vendor_only: boolean | null | undefined, page: number | null | undefined, limit: number | null | undefined): Observable<PaginatedVulnerableImageList> {
			return this.http.get<PaginatedVulnerableImageList>(this.baseUri + 'query/images/by_vulnerability?vulnerability_id=' + (vulnerability_id == null ? '' : encodeURIComponent(vulnerability_id)) + '&namespace=' + (namespace == null ? '' : encodeURIComponent(namespace)) + '&affected_package=' + (affected_package == null ? '' : encodeURIComponent(affected_package)) + '&severity=' + severity + '&vendor_only=' + vendor_only + '&page=' + page + '&limit=' + limit, {});
		}

		/**
		 * Listing information about given vulnerability
		 * List (w/filters) vulnerability records known by the system, with affected packages information if present
		 * Get query/vulnerabilities
		 * @param {Array<string>} id The ID of the vulnerability (e.g. CVE-1999-0001)
		 * @param {string} affected_package Filter results by specified package name (e.g. sed)
		 * @param {string} affected_package_version Filter results by specified package version (e.g. 4.4-1)
		 * @param {string} page The page of results to fetch. Pages start at 1
		 * @param {number} limit Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page
		 * @param {Array<string>} namespace Namespace(s) to filter vulnerability records by
		 * @return {PaginatedVulnerabilityList} Vulnerability listing paginated
		 */
		Query_vulnerabilities(id: Array<string>, affected_package: string | null | undefined, affected_package_version: string | null | undefined, page: string | null | undefined, limit: number | null | undefined, namespace: Array<string> | null | undefined): Observable<PaginatedVulnerabilityList> {
			return this.http.get<PaginatedVulnerabilityList>(this.baseUri + 'query/vulnerabilities?' + id.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&affected_package=' + (affected_package == null ? '' : encodeURIComponent(affected_package)) + '&affected_package_version=' + (affected_package_version == null ? '' : encodeURIComponent(affected_package_version)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&limit=' + limit + '&' + namespace?.map(z => `namespace=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * List configured registries
		 * List all configured registries the system can/will watch
		 * Get registries
		 * @return {Array<RegistryConfiguration>} Registry listing
		 */
		List_registries(): Observable<Array<RegistryConfiguration>> {
			return this.http.get<Array<RegistryConfiguration>>(this.baseUri + 'registries', {});
		}

		/**
		 * Add a new registry
		 * Adds a new registry to the system
		 * Post registries
		 * @param {boolean} validate flag to determine whether or not to validate registry/credential at registry add time
		 * @return {Array<RegistryConfiguration>} Saved registry configuration
		 */
		Create_registry(validate: boolean | null | undefined, requestBody: RegistryConfigurationRequest): Observable<Array<RegistryConfiguration>> {
			return this.http.post<Array<RegistryConfiguration>>(this.baseUri + 'registries?validate=' + validate, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a registry configuration
		 * Delete a registry configuration record from the system. Does not remove any images.
		 * Delete registries/{registry}
		 * @return {void} Delete success
		 */
		Delete_registry(registry: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'registries/' + (registry == null ? '' : encodeURIComponent(registry)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific registry configuration
		 * Get information on a specific registry
		 * Get registries/{registry}
		 * @return {Array<RegistryConfiguration>} Registry configuration
		 */
		Get_registry(registry: string): Observable<Array<RegistryConfiguration>> {
			return this.http.get<Array<RegistryConfiguration>>(this.baseUri + 'registries/' + (registry == null ? '' : encodeURIComponent(registry)), {});
		}

		/**
		 * Update/replace a registry configuration
		 * Replaces an existing registry record with the given record
		 * Put registries/{registry}
		 * @param {boolean} validate flag to determine whether or not to validate registry/credential at registry update time
		 * @return {Array<RegistryConfiguration>} Updated registry configuration
		 */
		Update_registry(registry: string, validate: boolean | null | undefined, requestBody: RegistryConfigurationRequest): Observable<Array<RegistryConfiguration>> {
			return this.http.put<Array<RegistryConfiguration>>(this.baseUri + 'registries/' + (registry == null ? '' : encodeURIComponent(registry)) + '&validate=' + validate, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add repository to watch
		 * Post repositories
		 * @param {string} repository full repository to add e.g. docker.io/library/alpine
		 * @param {boolean} autosubscribe flag to enable/disable auto tag_update activation when new images from a repo are added
		 * @param {boolean} dryrun flag to return tags in the repository without actually watching the repository, default is false
		 * @return {Array<Subscription>} Repository and discovered tags added
		 */
		Add_repository(repository: string, autosubscribe: boolean | null | undefined, dryrun: boolean | null | undefined): Observable<Array<Subscription>> {
			return this.http.post<Array<Subscription>>(this.baseUri + 'repositories?repository=' + (repository == null ? '' : encodeURIComponent(repository)) + '&autosubscribe=' + autosubscribe + '&dryrun=' + dryrun, null, {});
		}

		/**
		 * Service status
		 * Get the API service status
		 * Get status
		 * @return {StatusResponse} Status listing
		 */
		Get_status(): Observable<StatusResponse> {
			return this.http.get<StatusResponse>(this.baseUri + 'status', {});
		}

		/**
		 * List all subscriptions
		 * Get subscriptions
		 * @param {string} subscription_key filter only subscriptions matching key
		 * @param {string} subscription_type filter only subscriptions matching type
		 * @return {Array<Subscription>} Subscription listing
		 */
		List_subscriptions(subscription_key: string | null | undefined, subscription_type: string | null | undefined): Observable<Array<Subscription>> {
			return this.http.get<Array<Subscription>>(this.baseUri + 'subscriptions?subscription_key=' + (subscription_key == null ? '' : encodeURIComponent(subscription_key)) + '&subscription_type=' + (subscription_type == null ? '' : encodeURIComponent(subscription_type)), {});
		}

		/**
		 * Add a subscription of a specific type
		 * Create a new subscription to watch a tag and get notifications of changes
		 * Post subscriptions
		 * @return {Array<Subscription>} Subscription add success
		 */
		Add_subscription(requestBody: SubscriptionRequest): Observable<Array<Subscription>> {
			return this.http.post<Array<Subscription>>(this.baseUri + 'subscriptions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete subscriptions of a specific type
		 * Delete subscriptions/{subscriptionId}
		 * @return {void} Delete success
		 */
		Delete_subscription(subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a specific subscription set
		 * Get subscriptions/{subscriptionId}
		 * @return {Array<Subscription>} Filtered subscription list by type
		 */
		Get_subscription(subscriptionId: string): Observable<Array<Subscription>> {
			return this.http.get<Array<Subscription>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), {});
		}

		/**
		 * Update an existing and specific subscription
		 * Put subscriptions/{subscriptionId}
		 * @return {Array<Subscription>} Subscription add success
		 */
		Update_subscription(subscriptionId: string, requestBody: SubscriptionUpdate): Observable<Array<Subscription>> {
			return this.http.put<Array<Subscription>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all visible image digests and tags
		 * List all image tags visible to the user
		 * Get summaries/imagetags
		 * @param {Array<List_imagesImage_status>} image_status Filter images in one or more states such as active, deleting. Defaults to active images only if unspecified
		 * @return {Array<AnchoreImageTagSummary>} successful operation
		 */
		List_imagetags(image_status: Array<List_imagesImage_status> | null | undefined): Observable<Array<AnchoreImageTagSummary>> {
			return this.http.get<Array<AnchoreImageTagSummary>>(this.baseUri + 'summaries/imagetags?' + image_status?.map(z => `image_status=${z}`).join('&'), {});
		}

		/**
		 * System status
		 * Get the system status including queue lengths
		 * Get system
		 * @return {SystemStatusResponse} Status listing
		 */
		Get_service_detail(): Observable<SystemStatusResponse> {
			return this.http.get<SystemStatusResponse>(this.baseUri + 'system', {});
		}

		/**
		 * Describe anchore engine error codes.
		 * Describe anchore engine error codes.
		 * Get system/error_codes
		 * @return {Array<AnchoreErrorCode>} Error Codes Description
		 */
		Describe_error_codes(): Observable<Array<AnchoreErrorCode>> {
			return this.http.get<Array<AnchoreErrorCode>>(this.baseUri + 'system/error_codes', {});
		}

		/**
		 * list feeds operations and information
		 * Return a list of feed and their groups along with update and record count information. This data reflects the state of the policy engine, not the upstream feed service itself.
		 * Get system/feeds
		 * @return {Array<FeedMetadata>} success
		 */
		Get_system_feeds(): Observable<Array<FeedMetadata>> {
			return this.http.get<Array<FeedMetadata>>(this.baseUri + 'system/feeds', {});
		}

		/**
		 * trigger feeds operations
		 * Execute a synchronous feed sync operation. The response will block until complete, then return the result summary.
		 * Post system/feeds
		 * @param {boolean} flush instruct system to flush existing data feeds records from anchore-engine
		 * @param {boolean} sync instruct system to re-sync data feeds
		 * @return {Array<FeedSyncResult>} Feeds operation success
		 */
		Post_system_feeds(flush: boolean | null | undefined, sync: boolean | null | undefined): Observable<Array<FeedSyncResult>> {
			return this.http.post<Array<FeedSyncResult>>(this.baseUri + 'system/feeds?flush=' + flush + '&sync=' + sync, null, {});
		}

		/**
		 * Delete the groups and data for the feed and disable the feed itself
		 * Delete system/feeds/{feed}
		 * @return {void} Successfully deleted
		 */
		Delete_feed(feed: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'system/feeds/' + (feed == null ? '' : encodeURIComponent(feed)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable the feed so that it does not sync on subsequent sync operations
		 * Put system/feeds/{feed}
		 * @return {FeedMetadata} FeedInfo
		 */
		Toggle_feed_enabled(feed: string, enabled: boolean): Observable<FeedMetadata> {
			return this.http.put<FeedMetadata>(this.baseUri + 'system/feeds/' + (feed == null ? '' : encodeURIComponent(feed)) + '&enabled=' + enabled, null, {});
		}

		/**
		 * Delete the group data and disable the group itself
		 * Delete system/feeds/{feed}/{group}
		 * @return {void} Successfully deleted
		 */
		Delete_feed_group(feed: string, group: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'system/feeds/' + (feed == null ? '' : encodeURIComponent(feed)) + '/' + (group == null ? '' : encodeURIComponent(group)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Disable a specific group within a feed to not sync
		 * Put system/feeds/{feed}/{group}
		 * @return {Array<FeedMetadata>} FeedInfo listing
		 */
		Toggle_group_enabled(feed: string, group: string, enabled: boolean): Observable<Array<FeedMetadata>> {
			return this.http.put<Array<FeedMetadata>>(this.baseUri + 'system/feeds/' + (feed == null ? '' : encodeURIComponent(feed)) + '/' + (group == null ? '' : encodeURIComponent(group)) + '&enabled=' + enabled, null, {});
		}

		/**
		 * Describe the policy language spec implemented by this service.
		 * Get the policy language spec for this service
		 * Get system/policy_spec
		 * @return {Array<GateSpec>} Policy Language Description
		 */
		Describe_policy(): Observable<Array<GateSpec>> {
			return this.http.get<Array<GateSpec>>(this.baseUri + 'system/policy_spec', {});
		}

		/**
		 * List system services
		 * Get system/services
		 * @return {Array<Service>} Service listing
		 */
		List_services(): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'system/services', {});
		}

		/**
		 * Get a service configuration and state
		 * Get system/services/{servicename}
		 * @return {Array<Service>} Service Info
		 */
		Get_services_by_name(servicename: string): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'system/services/' + (servicename == null ? '' : encodeURIComponent(servicename)), {});
		}

		/**
		 * Delete the service config
		 * Delete system/services/{servicename}/{hostid}
		 * @return {void} Delete success
		 */
		Delete_service(servicename: string, hostid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'system/services/' + (servicename == null ? '' : encodeURIComponent(servicename)) + '/' + (hostid == null ? '' : encodeURIComponent(hostid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get service config for a specific host
		 * Get system/services/{servicename}/{hostid}
		 * @return {Array<Service>} Listing of registered services
		 */
		Get_services_by_name_and_host(servicename: string, hostid: string): Observable<Array<Service>> {
			return this.http.get<Array<Service>>(this.baseUri + 'system/services/' + (servicename == null ? '' : encodeURIComponent(servicename)) + '/' + (hostid == null ? '' : encodeURIComponent(hostid)), {});
		}

		/**
		 * Adds the capabilities to test a webhook delivery for the given notification type
		 * Loads the Webhook configuration for webhook_type, and sends the notification out as a test
		 * Post system/webhooks/{webhook_type}/test
		 * @param {string} webhook_type The Webhook Type that we should test
		 * @param {Test_webhookNotification_type} notification_type What kind of Notification to send
		 * @return {void} The Webhook was sent successfully. Schemas may be found under Models (PolicyEvalNotification, TagUpdateNotification, VulnUpdateNotification, AnalysisUpdateNotification)
		 */
		Test_webhook(webhook_type: string, notification_type: Test_webhookNotification_type | null | undefined): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'system/webhooks/' + (webhook_type == null ? '' : encodeURIComponent(webhook_type)) + '/test&notification_type=' + notification_type, null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List authenticated user info
		 * Get user
		 * @return {User} User details for caller's user
		 */
		Get_user(): Observable<User> {
			return this.http.get<User>(this.baseUri + 'user', {});
		}

		/**
		 * Get current credential summary
		 * Get user/credentials
		 * @return {Array<AccessCredential>} User credential listing
		 */
		Get_credentials(): Observable<Array<AccessCredential>> {
			return this.http.get<Array<AccessCredential>>(this.baseUri + 'user/credentials', {});
		}

		/**
		 * add/replace credential
		 * Post user/credentials
		 * @return {User} Add a credential, overwritting if already exists
		 */
		Add_credential(requestBody: AccessCredential): Observable<User> {
			return this.http.post<User>(this.baseUri + 'user/credentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the version object for the service, including db schema version info
		 * Get version
		 * @return {ServiceVersion} Version object describing version state
		 */
		Version_check(): Observable<ServiceVersion> {
			return this.http.get<ServiceVersion>(this.baseUri + 'version', {});
		}
	}

	export enum List_imagesImage_status { all = 'all', active = 'active', deleting = 'deleting' }

	export enum List_imagesAnalysis_status { not_analyzed = 'not_analyzed', analyzed = 'analyzed', analyzing = 'analyzing', analysis_failed = 'analysis_failed' }

	export enum Test_webhookNotification_type { tag_update = 'tag_update', analysis_update = 'analysis_update', vuln_update = 'vuln_update', policy_eval = 'policy_eval' }

}

