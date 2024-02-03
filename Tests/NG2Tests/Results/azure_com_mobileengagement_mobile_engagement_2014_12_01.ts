import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Used to target devices who received an announcement. */
	export interface AnnouncementFeedbackCriterion extends Criterion {

		/** Action that was performed on the announcement. */
		action?: AnnouncementFeedbackCriterionAction | null;

		/** The unique identifier of the announcement. */
		'content-id'?: number | null;
	}

	/** Used to target devices who received an announcement. */
	export interface AnnouncementFeedbackCriterionFormProperties extends CriterionFormProperties {

		/** Action that was performed on the announcement. */
		action: FormControl<AnnouncementFeedbackCriterionAction | null | undefined>,

		/** The unique identifier of the announcement. */
		'content-id': FormControl<number | null | undefined>,
	}
	export function CreateAnnouncementFeedbackCriterionFormGroup() {
		return new FormGroup<AnnouncementFeedbackCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			action: new FormControl<AnnouncementFeedbackCriterionAction | null | undefined>(undefined),
			'content-id': new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnnouncementFeedbackCriterionAction { pushed = 'pushed', replied = 'replied', actioned = 'actioned', exited = 'exited' }

	export interface ApiError {
		error?: ApiErrorError;
	}
	export interface ApiErrorFormProperties {
	}
	export function CreateApiErrorFormGroup() {
		return new FormGroup<ApiErrorFormProperties>({
		});

	}

	export interface ApiErrorError {
		code?: string | null;
		message?: string | null;
	}
	export interface ApiErrorErrorFormProperties {
		code: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateApiErrorErrorFormGroup() {
		return new FormGroup<ApiErrorErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Mobile Engagement App resource. */
	export interface App extends Resource {
		properties?: AppProperties;
	}

	/** The Mobile Engagement App resource. */
	export interface AppFormProperties extends ResourceFormProperties {
	}
	export function CreateAppFormGroup() {
		return new FormGroup<AppFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The AppCollection resource. */
	export interface AppCollection extends Resource {
		properties?: AppCollectionProperties;
	}

	/** The AppCollection resource. */
	export interface AppCollectionFormProperties extends ResourceFormProperties {
	}
	export function CreateAppCollectionFormGroup() {
		return new FormGroup<AppCollectionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list AppCollections operation response. */
	export interface AppCollectionListResult {

		/** When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages. */
		nextLink?: string | null;

		/** The list of AppCollections and their properties. */
		value?: Array<AppCollection>;
	}

	/** The list AppCollections operation response. */
	export interface AppCollectionListResultFormProperties {

		/** When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppCollectionListResultFormGroup() {
		return new FormGroup<AppCollectionListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppCollectionNameAvailability {

		/** Available. */
		available?: boolean | null;

		/** Name. */
		name?: string | null;

		/** UnavailabilityReason. */
		unavailabilityReason?: string | null;
	}
	export interface AppCollectionNameAvailabilityFormProperties {

		/** Available. */
		available: FormControl<boolean | null | undefined>,

		/** Name. */
		name: FormControl<string | null | undefined>,

		/** UnavailabilityReason. */
		unavailabilityReason: FormControl<string | null | undefined>,
	}
	export function CreateAppCollectionNameAvailabilityFormGroup() {
		return new FormGroup<AppCollectionNameAvailabilityFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			unavailabilityReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppCollectionProperties {

		/** Mobile Engagement AppCollection Properties. */
		provisioningState?: AppCollectionPropertiesProvisioningState | null;
	}
	export interface AppCollectionPropertiesFormProperties {

		/** Mobile Engagement AppCollection Properties. */
		provisioningState: FormControl<AppCollectionPropertiesProvisioningState | null | undefined>,
	}
	export function CreateAppCollectionPropertiesFormGroup() {
		return new FormGroup<AppCollectionPropertiesFormProperties>({
			provisioningState: new FormControl<AppCollectionPropertiesProvisioningState | null | undefined>(undefined),
		});

	}

	export enum AppCollectionPropertiesProvisioningState { Creating = 'Creating', Succeeded = 'Succeeded' }


	/**
	 * Send only to users who have some app info set. This is a special filter that is automatically added if your campaign contains appInfo parameters. It is not intended to be public and should not be used as it could be removed or replaced by the API.
	 */
	export interface AppInfoFilter extends Filter {

		/** An array containing all the required appInfo. */
		appInfo?: Array<string>;
	}

	/**
	 * Send only to users who have some app info set. This is a special filter that is automatically added if your campaign contains appInfo parameters. It is not intended to be public and should not be used as it could be removed or replaced by the API.
	 */
	export interface AppInfoFilterFormProperties extends FilterFormProperties {
	}
	export function CreateAppInfoFilterFormGroup() {
		return new FormGroup<AppInfoFilterFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list Apps operation response. */
	export interface AppListResult {

		/** When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages. */
		nextLink?: string | null;

		/** The list of Apps and their properties. */
		value?: Array<App>;
	}

	/** The list Apps operation response. */
	export interface AppListResultFormProperties {

		/** When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAppListResultFormGroup() {
		return new FormGroup<AppListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AppProperties {

		/** The state of the application. */
		appState?: string | null;

		/** The application unique identifier. */
		backendId?: string | null;

		/** The platform of the app. */
		platform?: string | null;
	}
	export interface AppPropertiesFormProperties {

		/** The state of the application. */
		appState: FormControl<string | null | undefined>,

		/** The application unique identifier. */
		backendId: FormControl<string | null | undefined>,

		/** The platform of the app. */
		platform: FormControl<string | null | undefined>,
	}
	export function CreateAppPropertiesFormGroup() {
		return new FormGroup<AppPropertiesFormProperties>({
			appState: new FormControl<string | null | undefined>(undefined),
			backendId: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to target devices based on the version of the application they are using. */
	export interface ApplicationVersionCriterion extends Criterion {

		/** The application version. */
		name?: string | null;
	}

	/** Used to target devices based on the version of the application they are using. */
	export interface ApplicationVersionCriterionFormProperties extends CriterionFormProperties {

		/** The application version. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateApplicationVersionCriterionFormGroup() {
		return new FormGroup<ApplicationVersionCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Target devices based on a boolean tag value. */
	export interface BooleanTagCriterion extends Criterion {

		/** The name of the custom tag. */
		name?: string | null;

		/** A custom boolean value to match. */
		value?: boolean | null;
	}

	/** Target devices based on a boolean tag value. */
	export interface BooleanTagCriterionFormProperties extends CriterionFormProperties {

		/** The name of the custom tag. */
		name: FormControl<string | null | undefined>,

		/** A custom boolean value to match. */
		value: FormControl<boolean | null | undefined>,
	}
	export function CreateBooleanTagCriterionFormGroup() {
		return new FormGroup<BooleanTagCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Campaign extends CampaignLocalization {

		/**
		 * Specify which users will be targeted by this campaign. By default, all users will be targeted. If you set `pushMode` property to `manual`, the only thing you can specify in the audience is the push quota filter. An audience is a boolean expression made of criteria (variables) operators (`not`, `and` or `or`) and parenthesis. Additionally, a set of filters can be added to an audience. 65535 bytes max as per JSON encoding.
		 */
		audience?: CampaignAudience;

		/**
		 * Category of the campaign. Categories can be used on the application side to customize campaigns.
		 * Max length: 64
		 */
		category?: string | null;

		/**
		 * Announcements/polls only. Array containing the list of activities in which the campaign can be delivered. deliveryTime must be set to session. If the platform is iOS, this option can also be set if deliveryTime is set to any. In that case, if the campaign is received when the application is launched, it will be delivered only in the specified list of activities.
		 */
		deliveryActivities?: Array<string>;

		/**
		 * Announcements/polls only. Defines when the campaign should be delivered. Valid values are: * `any`: Campaign will be delivered as soon as possible. * `background`: iOS only. Campaign will be only delivered when the application is in background (out of app). * `session`: Campaign will be delivered when the application is running.
		 */
		deliveryTime?: CampaignDeliveryTime | null;

		/**
		 * The date at which the campaign should be finished. The date shall conform to the following format: `yyyy-MM-ddTHH:mm:ssZ`. Example: `2011-11-21 15:23Z`
		 */
		endTime?: string | null;

		/**
		 * Push campaigns can be localized using an optional JSON object. The JSON key is a two-character language code as specified by the ISO 639-1 standard. The corresponding value is an object containing the localizable properties.
		 */
		localization?: {[id: string]: CampaignLocalization };

		/**
		 * Unique name of the campaign.
		 * Max length: 64
		 */
		name?: string | null;

		/**
		 * A flag indicating whether or not you want the native Apple Push notification to update the badge icon to the number of unread messages. The `deliveryTime` property must be set to `any` or `background`.
		 */
		notificationBadge?: boolean | null;

		/** A flag indicating whether or not you want the notification to be closeable. */
		notificationCloseable?: boolean | null;

		/** A flag indicating whether or not you want to display the resource icon in notification content. */
		notificationIcon?: boolean | null;

		/**
		 * * `Android`: A flag indicating whether or not you want the system notification to make a sound. The `notificationType` property must be set to `system`. * `iOS`: A flag indicating whether or not you want the native Apple Push notification to make a sound. The `deliveryTime` property must be set to `any` or `background`. This will play the 'default' sound. If you want to play a custom sound, see the `notificationOptions` property. * `Windows`: A flag indicating whether or not you want the native Windows Notification Service to make a sound. The `deliveryTime` property must be set to `any`.
		 */
		notificationSound?: boolean | null;

		/**
		 * Android only. Defines how the notification should be displayed. Valid values are: * `system`: Display the notification using a standard system notification. * `popup`: Display the notification using a in-app banner notification.
		 */
		notificationType?: CampaignNotificationType | null;

		/** Android only. A flag indicating whether or not you want the system notification to make a vibration. The notificationType property must be set to system. */
		notificationVibrate?: boolean | null;

		/**
		 * Announcements/polls only. Defines how the campaign is pushed. Valid values are: * `real-time`: Never ending campaign, the campaign will be delivered  to your existing users and also to your new users. * `one-shot`: In this mode, the campaign will be delivered only to your existing users (campaign will stop after that). * `manual`: In this mode, the campaign will not be pushed automatically to devices. You will have to use the Push campaign command to push the campaign to your end-users. Campaigns can be pushed multiple times to the same device.
		 */
		pushMode?: CampaignPushMode | null;

		/** Poll questions. */
		questions?: Array<PollQuestion>;

		/**
		 * The date at which the campaign should be started. The date shall conform to the following format: `yyyy-MM-ddTHH:mm:ssZ`. * If you set pushMode property to manual, this attribute will be ignored. * If you set pushMode property to one-shot, then the timezone attribute must be specified. Example: `2011-11-21 15:23Z`
		 */
		startTime?: string | null;

		/**
		 * The id of the time zone to use for the startTime and endTime dates. If not provided, the two date attributes will be expressed using the device timezone. Example: America/Los_Angeles
		 */
		timezone?: string | null;

		/**
		 * Applicable only to announcements and data pushes. Type of announcement. Valid values are: * `text/plain`: Text-only announcement: `body` property should only contain plain text. * `text/html`: HTML announcement: `body` attribute can contain HTML code. * `only_notif`: Notification-only announcement. With this kind of announcements, the `body`, `title`, `actionButtonText` and `exitButtonText` are ignored. Type of data push. Valid values are: * `text/plain`: Text only data push: `body` property must be plain text. * `text/base64`: Base 64 data push: `body` property must be encoded in base 64.
		 */
		type?: CampaignType | null;
	}
	export interface CampaignFormProperties extends CampaignLocalizationFormProperties {

		/**
		 * Category of the campaign. Categories can be used on the application side to customize campaigns.
		 * Max length: 64
		 */
		category: FormControl<string | null | undefined>,

		/**
		 * Announcements/polls only. Defines when the campaign should be delivered. Valid values are: * `any`: Campaign will be delivered as soon as possible. * `background`: iOS only. Campaign will be only delivered when the application is in background (out of app). * `session`: Campaign will be delivered when the application is running.
		 */
		deliveryTime: FormControl<CampaignDeliveryTime | null | undefined>,

		/**
		 * The date at which the campaign should be finished. The date shall conform to the following format: `yyyy-MM-ddTHH:mm:ssZ`. Example: `2011-11-21 15:23Z`
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * Push campaigns can be localized using an optional JSON object. The JSON key is a two-character language code as specified by the ISO 639-1 standard. The corresponding value is an object containing the localizable properties.
		 */
		localization: FormControl<{[id: string]: CampaignLocalization } | null | undefined>,

		/**
		 * Unique name of the campaign.
		 * Max length: 64
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A flag indicating whether or not you want the native Apple Push notification to update the badge icon to the number of unread messages. The `deliveryTime` property must be set to `any` or `background`.
		 */
		notificationBadge: FormControl<boolean | null | undefined>,

		/** A flag indicating whether or not you want the notification to be closeable. */
		notificationCloseable: FormControl<boolean | null | undefined>,

		/** A flag indicating whether or not you want to display the resource icon in notification content. */
		notificationIcon: FormControl<boolean | null | undefined>,

		/**
		 * * `Android`: A flag indicating whether or not you want the system notification to make a sound. The `notificationType` property must be set to `system`. * `iOS`: A flag indicating whether or not you want the native Apple Push notification to make a sound. The `deliveryTime` property must be set to `any` or `background`. This will play the 'default' sound. If you want to play a custom sound, see the `notificationOptions` property. * `Windows`: A flag indicating whether or not you want the native Windows Notification Service to make a sound. The `deliveryTime` property must be set to `any`.
		 */
		notificationSound: FormControl<boolean | null | undefined>,

		/**
		 * Android only. Defines how the notification should be displayed. Valid values are: * `system`: Display the notification using a standard system notification. * `popup`: Display the notification using a in-app banner notification.
		 */
		notificationType: FormControl<CampaignNotificationType | null | undefined>,

		/** Android only. A flag indicating whether or not you want the system notification to make a vibration. The notificationType property must be set to system. */
		notificationVibrate: FormControl<boolean | null | undefined>,

		/**
		 * Announcements/polls only. Defines how the campaign is pushed. Valid values are: * `real-time`: Never ending campaign, the campaign will be delivered  to your existing users and also to your new users. * `one-shot`: In this mode, the campaign will be delivered only to your existing users (campaign will stop after that). * `manual`: In this mode, the campaign will not be pushed automatically to devices. You will have to use the Push campaign command to push the campaign to your end-users. Campaigns can be pushed multiple times to the same device.
		 */
		pushMode: FormControl<CampaignPushMode | null | undefined>,

		/**
		 * The date at which the campaign should be started. The date shall conform to the following format: `yyyy-MM-ddTHH:mm:ssZ`. * If you set pushMode property to manual, this attribute will be ignored. * If you set pushMode property to one-shot, then the timezone attribute must be specified. Example: `2011-11-21 15:23Z`
		 */
		startTime: FormControl<string | null | undefined>,

		/**
		 * The id of the time zone to use for the startTime and endTime dates. If not provided, the two date attributes will be expressed using the device timezone. Example: America/Los_Angeles
		 */
		timezone: FormControl<string | null | undefined>,

		/**
		 * Applicable only to announcements and data pushes. Type of announcement. Valid values are: * `text/plain`: Text-only announcement: `body` property should only contain plain text. * `text/html`: HTML announcement: `body` attribute can contain HTML code. * `only_notif`: Notification-only announcement. With this kind of announcements, the `body`, `title`, `actionButtonText` and `exitButtonText` are ignored. Type of data push. Valid values are: * `text/plain`: Text only data push: `body` property must be plain text. * `text/base64`: Base 64 data push: `body` property must be encoded in base 64.
		 */
		type: FormControl<CampaignType | null | undefined>,
	}
	export function CreateCampaignFormGroup() {
		return new FormGroup<CampaignFormProperties>({
			actionButtonText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			actionUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			body: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535)]),
			exitButtonText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			notificationImage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535)]),
			notificationMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4000)]),
			notificationTitle: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			payload: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			category: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			deliveryTime: new FormControl<CampaignDeliveryTime | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			localization: new FormControl<{[id: string]: CampaignLocalization } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			notificationBadge: new FormControl<boolean | null | undefined>(undefined),
			notificationCloseable: new FormControl<boolean | null | undefined>(undefined),
			notificationIcon: new FormControl<boolean | null | undefined>(undefined),
			notificationSound: new FormControl<boolean | null | undefined>(undefined),
			notificationType: new FormControl<CampaignNotificationType | null | undefined>(undefined),
			notificationVibrate: new FormControl<boolean | null | undefined>(undefined),
			pushMode: new FormControl<CampaignPushMode | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CampaignType | null | undefined>(undefined),
		});

	}

	export interface CampaignAudience {

		/** Criteria by name. */
		criteria?: {[id: string]: Criterion };

		/**
		 * Boolean expression made of criteria (variables) operators (`not`, `and` or `or`) and parenthesis. Criterion names in the audience expression must start with a capital letter and can only contain alphanumeric (A-Z,a-z,0-9) and underscore (_) characters.
		 */
		expression?: string | null;

		/** Global filters applied to all devices. */
		filters?: Array<Filter>;
	}
	export interface CampaignAudienceFormProperties {

		/** Criteria by name. */
		criteria: FormControl<{[id: string]: Criterion } | null | undefined>,

		/**
		 * Boolean expression made of criteria (variables) operators (`not`, `and` or `or`) and parenthesis. Criterion names in the audience expression must start with a capital letter and can only contain alphanumeric (A-Z,a-z,0-9) and underscore (_) characters.
		 */
		expression: FormControl<string | null | undefined>,
	}
	export function CreateCampaignAudienceFormGroup() {
		return new FormGroup<CampaignAudienceFormProperties>({
			criteria: new FormControl<{[id: string]: Criterion } | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Criterion {

		/** Required */
		type: string;
	}
	export interface CriterionFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCriterionFormGroup() {
		return new FormGroup<CriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Filter {

		/** Required */
		type: string;
	}
	export interface FilterFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CampaignDeliveryTime { any = 'any', background = 'background', session = 'session' }

	export enum CampaignNotificationType { system = 'system', popup = 'popup' }

	export enum CampaignPushMode { 'real-time' = 'real-time', 'one-shot' = 'one-shot', manual = 'manual' }

	export interface PollQuestion extends PollQuestionLocalization {

		/** List of possible choices for this question. */
		choices?: Array<PollQuestionChoice>;

		/** Unique identifier of the question. */
		id?: number | null;

		/**
		 * Poll questions can be localized using an optional JSON object. The JSON key is a two-character language code as specified by the ISO 639-1 standard. The corresponding value is an object containing the localizable property title.
		 */
		localization?: {[id: string]: PollQuestionLocalization };
	}
	export interface PollQuestionFormProperties extends PollQuestionLocalizationFormProperties {

		/** Unique identifier of the question. */
		id: FormControl<number | null | undefined>,

		/**
		 * Poll questions can be localized using an optional JSON object. The JSON key is a two-character language code as specified by the ISO 639-1 standard. The corresponding value is an object containing the localizable property title.
		 */
		localization: FormControl<{[id: string]: PollQuestionLocalization } | null | undefined>,
	}
	export function CreatePollQuestionFormGroup() {
		return new FormGroup<PollQuestionFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			id: new FormControl<number | null | undefined>(undefined),
			localization: new FormControl<{[id: string]: PollQuestionLocalization } | null | undefined>(undefined),
		});

	}

	export interface PollQuestionChoice extends PollQuestionChoiceLocalization {

		/** Unique identifier of the choice. */
		id?: number | null;

		/** A flag indicating if this choice is the default choice for the associated question. Only one choice in the array can have this value set to true. */
		isDefault?: boolean | null;

		/**
		 * Poll choices can be localized using an optional JSON object. The JSON key is a two-character language code as specified by the ISO 639-1 standard. The corresponding value is an object containing the localizable property title.
		 */
		localization?: {[id: string]: PollQuestionChoiceLocalization };
	}
	export interface PollQuestionChoiceFormProperties extends PollQuestionChoiceLocalizationFormProperties {

		/** Unique identifier of the choice. */
		id: FormControl<number | null | undefined>,

		/** A flag indicating if this choice is the default choice for the associated question. Only one choice in the array can have this value set to true. */
		isDefault: FormControl<boolean | null | undefined>,

		/**
		 * Poll choices can be localized using an optional JSON object. The JSON key is a two-character language code as specified by the ISO 639-1 standard. The corresponding value is an object containing the localizable property title.
		 */
		localization: FormControl<{[id: string]: PollQuestionChoiceLocalization } | null | undefined>,
	}
	export function CreatePollQuestionChoiceFormGroup() {
		return new FormGroup<PollQuestionChoiceFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			id: new FormControl<number | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			localization: new FormControl<{[id: string]: PollQuestionChoiceLocalization } | null | undefined>(undefined),
		});

	}

	export enum CampaignType { 'text/plain' = 'text/plain', 'text/html' = 'text/html', only_notif = 'only_notif', 'text/base64' = 'text/base64' }

	export interface CampaignListResult extends CampaignStateResult {

		/**
		 * The date at which the campaign was activated (Not present if not yet activated). The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
		 */
		activatedDate?: Date | null;

		/**
		 * The date at which the campaign should be finished if specified. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard. Applicable only to announcements and polls.
		 */
		endTime?: Date | null;

		/**
		 * The date at which the campaign was finished (Not present if not yet finished). The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
		 */
		finishedDate?: Date | null;

		/** Name of the campaign. */
		name?: string | null;

		/**
		 * The date at which the campaign should be started if specified. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard. Applicable only to announcements and polls.
		 */
		startTime?: Date | null;

		/**
		 * The id of the time zone to use for the `startTime` and `endTime` dates. If not provided, the two date attributes are referencing to the device timezone. Applicable only to announcements and polls.
		 */
		timezone?: string | null;
	}
	export interface CampaignListResultFormProperties extends CampaignStateResultFormProperties {

		/**
		 * The date at which the campaign was activated (Not present if not yet activated). The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
		 */
		activatedDate: FormControl<Date | null | undefined>,

		/**
		 * The date at which the campaign should be finished if specified. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard. Applicable only to announcements and polls.
		 */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The date at which the campaign was finished (Not present if not yet finished). The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
		 */
		finishedDate: FormControl<Date | null | undefined>,

		/** Name of the campaign. */
		name: FormControl<string | null | undefined>,

		/**
		 * The date at which the campaign should be started if specified. The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard. Applicable only to announcements and polls.
		 */
		startTime: FormControl<Date | null | undefined>,

		/**
		 * The id of the time zone to use for the `startTime` and `endTime` dates. If not provided, the two date attributes are referencing to the device timezone. Applicable only to announcements and polls.
		 */
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateCampaignListResultFormGroup() {
		return new FormGroup<CampaignListResultFormProperties>({
			state: new FormControl<CampaignResultState | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			activatedDate: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			finishedDate: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CampaignLocalization {

		/**
		 * Text of the action button for text/web announcements and polls (answer button).
		 * Max length: 64
		 */
		actionButtonText?: string | null;

		/**
		 * URL to launch when the announcement is actioned.
		 * Max length: 2000
		 */
		actionUrl?: string | null;

		/**
		 * Body of the text/web announcement, poll or data push. This field supports appInfo markers.
		 * Max length: 65535
		 */
		body?: string | null;

		/**
		 * Text of the exit button for text/web announcements and polls.
		 * Max length: 64
		 */
		exitButtonText?: string | null;

		/**
		 * Optional image encoded in base 64. Usually included in the right part of in app notifications (or as a banner if there is neither text nor content icon). For Android system notifications, the image is used as the large icon (displayed only on Android 3+).
		 * Max length: 65535
		 */
		notificationImage?: string | null;

		/**
		 * Message of the notification. This field supports appInfo markers.
		 * Max length: 4000
		 */
		notificationMessage?: string | null;
		notificationOptions?: NotificationOptions;

		/**
		 * Title of the notification. This field supports appInfo markers.
		 * Max length: 2000
		 */
		notificationTitle?: string | null;

		/** Native push payload. */
		payload?: string | null;

		/**
		 * Title of the announcement or poll. This field supports appInfo markers.
		 * Max length: 128
		 */
		title?: string | null;
	}
	export interface CampaignLocalizationFormProperties {

		/**
		 * Text of the action button for text/web announcements and polls (answer button).
		 * Max length: 64
		 */
		actionButtonText: FormControl<string | null | undefined>,

		/**
		 * URL to launch when the announcement is actioned.
		 * Max length: 2000
		 */
		actionUrl: FormControl<string | null | undefined>,

		/**
		 * Body of the text/web announcement, poll or data push. This field supports appInfo markers.
		 * Max length: 65535
		 */
		body: FormControl<string | null | undefined>,

		/**
		 * Text of the exit button for text/web announcements and polls.
		 * Max length: 64
		 */
		exitButtonText: FormControl<string | null | undefined>,

		/**
		 * Optional image encoded in base 64. Usually included in the right part of in app notifications (or as a banner if there is neither text nor content icon). For Android system notifications, the image is used as the large icon (displayed only on Android 3+).
		 * Max length: 65535
		 */
		notificationImage: FormControl<string | null | undefined>,

		/**
		 * Message of the notification. This field supports appInfo markers.
		 * Max length: 4000
		 */
		notificationMessage: FormControl<string | null | undefined>,

		/**
		 * Title of the notification. This field supports appInfo markers.
		 * Max length: 2000
		 */
		notificationTitle: FormControl<string | null | undefined>,

		/** Native push payload. */
		payload: FormControl<string | null | undefined>,

		/**
		 * Title of the announcement or poll. This field supports appInfo markers.
		 * Max length: 128
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCampaignLocalizationFormGroup() {
		return new FormGroup<CampaignLocalizationFormProperties>({
			actionButtonText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			actionUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			body: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535)]),
			exitButtonText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			notificationImage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535)]),
			notificationMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4000)]),
			notificationTitle: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			payload: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
		});

	}

	export interface CampaignPushParameters {
		data?: Campaign;

		/**
		 * Device identifiers to push as a JSON array of strings. Note that if you want to push the same campaign several times to the same device, you need to make several API calls.
		 * Required
		 */
		deviceIds: Array<string>;
	}
	export interface CampaignPushParametersFormProperties {
	}
	export function CreateCampaignPushParametersFormGroup() {
		return new FormGroup<CampaignPushParametersFormProperties>({
		});

	}

	export interface CampaignPushResult {

		/**
		 * A JSON array containing all identifiers that have been rejected. A device can be rejected for the following reasons: * The device hasn’t reported any session yet. * The device is over quota (if a push quota filter is applied on your campaign). Please note that if the request parameters are valid but all the specified devices are rejected, the status code is still `200` with a response including all the devices as being rejected.
		 */
		invalidDeviceIds?: Array<string>;
	}
	export interface CampaignPushResultFormProperties {
	}
	export function CreateCampaignPushResultFormGroup() {
		return new FormGroup<CampaignPushResultFormProperties>({
		});

	}

	export interface CampaignResult extends Campaign {

		/**
		 * The date at which the campaign was activated (Not present if not yet activated). The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
		 */
		activatedDate?: Date | null;

		/**
		 * The date at which the campaign was finished (Not present if not yet finished). The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
		 */
		finishedDate?: Date | null;

		/** Campaign identifier. */
		id?: number | null;

		/** State of the campaign, or 'queued' when testing a campaign. */
		state?: CampaignResultState | null;
	}
	export interface CampaignResultFormProperties extends CampaignFormProperties {

		/**
		 * The date at which the campaign was activated (Not present if not yet activated). The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
		 */
		activatedDate: FormControl<Date | null | undefined>,

		/**
		 * The date at which the campaign was finished (Not present if not yet finished). The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard.
		 */
		finishedDate: FormControl<Date | null | undefined>,

		/** Campaign identifier. */
		id: FormControl<number | null | undefined>,

		/** State of the campaign, or 'queued' when testing a campaign. */
		state: FormControl<CampaignResultState | null | undefined>,
	}
	export function CreateCampaignResultFormGroup() {
		return new FormGroup<CampaignResultFormProperties>({
			actionButtonText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			actionUrl: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			body: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535)]),
			exitButtonText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			notificationImage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(65535)]),
			notificationMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4000)]),
			notificationTitle: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			payload: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128)]),
			category: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			deliveryTime: new FormControl<CampaignDeliveryTime | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			localization: new FormControl<{[id: string]: CampaignLocalization } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			notificationBadge: new FormControl<boolean | null | undefined>(undefined),
			notificationCloseable: new FormControl<boolean | null | undefined>(undefined),
			notificationIcon: new FormControl<boolean | null | undefined>(undefined),
			notificationSound: new FormControl<boolean | null | undefined>(undefined),
			notificationType: new FormControl<CampaignNotificationType | null | undefined>(undefined),
			notificationVibrate: new FormControl<boolean | null | undefined>(undefined),
			pushMode: new FormControl<CampaignPushMode | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			timezone: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CampaignType | null | undefined>(undefined),
			activatedDate: new FormControl<Date | null | undefined>(undefined),
			finishedDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<CampaignResultState | null | undefined>(undefined),
		});

	}

	export enum CampaignResultState { draft = 'draft', scheduled = 'scheduled', 'in-progress' = 'in-progress', finished = 'finished', queued = 'queued' }

	export interface CampaignState {

		/** State of the campaign, or 'queued' when testing a campaign. */
		state?: CampaignResultState | null;
	}
	export interface CampaignStateFormProperties {

		/** State of the campaign, or 'queued' when testing a campaign. */
		state: FormControl<CampaignResultState | null | undefined>,
	}
	export function CreateCampaignStateFormGroup() {
		return new FormGroup<CampaignStateFormProperties>({
			state: new FormControl<CampaignResultState | null | undefined>(undefined),
		});

	}

	export interface CampaignStateResult extends CampaignState {

		/**
		 * Campaign identifier.
		 * Required
		 */
		id: number;
	}
	export interface CampaignStateResultFormProperties extends CampaignStateFormProperties {

		/**
		 * Campaign identifier.
		 * Required
		 */
		id: FormControl<number | null | undefined>,
	}
	export function CreateCampaignStateResultFormGroup() {
		return new FormGroup<CampaignStateResultFormProperties>({
			state: new FormControl<CampaignResultState | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CampaignStatisticsResult {

		/** Poll specific statistics. */
		answers?: {[id: string]: any };

		/** Number of times the campaign’s content view was actioned (Not present in case of a notification-only announcement or a native-push). */
		'content-actioned'?: number | null;

		/** Number of times the campaign’s content view was displayed (Not present in case of a notification-only announcement, a data-push or a native-push). */
		'content-displayed'?: number | null;

		/** Number of times the campaign’s content view was exited (Not present in case of a notification-only announcement or a native-push). */
		'content-exited'?: number | null;

		/** Number of times the campaign was received by the application (Not present in case of a native-push). */
		delivered?: number | null;

		/** Number of times the campaign was dropped by the application. It can happen if the SDK failed to parse the campaign payload or if an error occurred while trying to notify the end-user (Not present in case of a native-push). */
		dropped?: number | null;

		/** Number of times the in-app notification was actioned (Not present in case of a data-push or a native-push). */
		'in-app-notification-actioned'?: number | null;

		/** Number of times the in-app notification was displayed (Not present in case of a data-push or a native-push). */
		'in-app-notification-displayed'?: number | null;

		/** Number of times the in-app notification was exited (Not present in case of a data-push or a native-push). */
		'in-app-notification-exited'?: number | null;

		/** Number of pushes performed. */
		pushed?: number | null;

		/** Total number of native pushes. Information only available on Android, iOS, Windows Phone and Windows applications. */
		'pushed-native'?: number | null;

		/** Number of ADM pushes (available only on Android applications). */
		'pushed-native-adm'?: number | null;

		/** Number of C2DM/GCM pushes (available only on Android applications). */
		'pushed-native-google'?: number | null;

		/** Number of times the campaign was registered to be pushed. */
		queued?: number | null;

		/** Number of times the system notification (On Android it corresponds to a status bar notification. On iOS, it is the Apple Push notification) was actioned. */
		'system-notification-actioned'?: number | null;

		/** Number of times the system notification was displayed (Not present in case of a data-push or a native-push). On Android it corresponds to a status bar notification. */
		'system-notification-displayed'?: number | null;

		/** Number of times the system notification was exited (Not present in case of a data-push or a native-push). */
		'system-notification-exited'?: number | null;
	}
	export interface CampaignStatisticsResultFormProperties {

		/** Poll specific statistics. */
		answers: FormControl<{[id: string]: any } | null | undefined>,

		/** Number of times the campaign’s content view was actioned (Not present in case of a notification-only announcement or a native-push). */
		'content-actioned': FormControl<number | null | undefined>,

		/** Number of times the campaign’s content view was displayed (Not present in case of a notification-only announcement, a data-push or a native-push). */
		'content-displayed': FormControl<number | null | undefined>,

		/** Number of times the campaign’s content view was exited (Not present in case of a notification-only announcement or a native-push). */
		'content-exited': FormControl<number | null | undefined>,

		/** Number of times the campaign was received by the application (Not present in case of a native-push). */
		delivered: FormControl<number | null | undefined>,

		/** Number of times the campaign was dropped by the application. It can happen if the SDK failed to parse the campaign payload or if an error occurred while trying to notify the end-user (Not present in case of a native-push). */
		dropped: FormControl<number | null | undefined>,

		/** Number of times the in-app notification was actioned (Not present in case of a data-push or a native-push). */
		'in-app-notification-actioned': FormControl<number | null | undefined>,

		/** Number of times the in-app notification was displayed (Not present in case of a data-push or a native-push). */
		'in-app-notification-displayed': FormControl<number | null | undefined>,

		/** Number of times the in-app notification was exited (Not present in case of a data-push or a native-push). */
		'in-app-notification-exited': FormControl<number | null | undefined>,

		/** Number of pushes performed. */
		pushed: FormControl<number | null | undefined>,

		/** Total number of native pushes. Information only available on Android, iOS, Windows Phone and Windows applications. */
		'pushed-native': FormControl<number | null | undefined>,

		/** Number of ADM pushes (available only on Android applications). */
		'pushed-native-adm': FormControl<number | null | undefined>,

		/** Number of C2DM/GCM pushes (available only on Android applications). */
		'pushed-native-google': FormControl<number | null | undefined>,

		/** Number of times the campaign was registered to be pushed. */
		queued: FormControl<number | null | undefined>,

		/** Number of times the system notification (On Android it corresponds to a status bar notification. On iOS, it is the Apple Push notification) was actioned. */
		'system-notification-actioned': FormControl<number | null | undefined>,

		/** Number of times the system notification was displayed (Not present in case of a data-push or a native-push). On Android it corresponds to a status bar notification. */
		'system-notification-displayed': FormControl<number | null | undefined>,

		/** Number of times the system notification was exited (Not present in case of a data-push or a native-push). */
		'system-notification-exited': FormControl<number | null | undefined>,
	}
	export function CreateCampaignStatisticsResultFormGroup() {
		return new FormGroup<CampaignStatisticsResultFormProperties>({
			answers: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			'content-actioned': new FormControl<number | null | undefined>(undefined),
			'content-displayed': new FormControl<number | null | undefined>(undefined),
			'content-exited': new FormControl<number | null | undefined>(undefined),
			delivered: new FormControl<number | null | undefined>(undefined),
			dropped: new FormControl<number | null | undefined>(undefined),
			'in-app-notification-actioned': new FormControl<number | null | undefined>(undefined),
			'in-app-notification-displayed': new FormControl<number | null | undefined>(undefined),
			'in-app-notification-exited': new FormControl<number | null | undefined>(undefined),
			pushed: new FormControl<number | null | undefined>(undefined),
			'pushed-native': new FormControl<number | null | undefined>(undefined),
			'pushed-native-adm': new FormControl<number | null | undefined>(undefined),
			'pushed-native-google': new FormControl<number | null | undefined>(undefined),
			queued: new FormControl<number | null | undefined>(undefined),
			'system-notification-actioned': new FormControl<number | null | undefined>(undefined),
			'system-notification-displayed': new FormControl<number | null | undefined>(undefined),
			'system-notification-exited': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CampaignTestNewParameters extends CampaignTestSavedParameters {

		/** Required */
		data: Campaign;
	}
	export interface CampaignTestNewParametersFormProperties extends CampaignTestSavedParametersFormProperties {
	}
	export function CreateCampaignTestNewParametersFormGroup() {
		return new FormGroup<CampaignTestNewParametersFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lang: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CampaignTestSavedParameters {

		/**
		 * Device identifier (as returned by the SDK).
		 * Required
		 */
		deviceId: string;

		/** The language to test expressed using ISO 639-1 code. The default language of the campaign will be used if the parameter is not provided. */
		lang?: string | null;
	}
	export interface CampaignTestSavedParametersFormProperties {

		/**
		 * Device identifier (as returned by the SDK).
		 * Required
		 */
		deviceId: FormControl<string | null | undefined>,

		/** The language to test expressed using ISO 639-1 code. The default language of the campaign will be used if the parameter is not provided. */
		lang: FormControl<string | null | undefined>,
	}
	export function CreateCampaignTestSavedParametersFormGroup() {
		return new FormGroup<CampaignTestSavedParametersFormProperties>({
			deviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lang: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The campaigns list result. */
	export interface CampaignsListResult {

		/** When using `top` parameter and if partial results are returned, this property describes a URI path to get the next results. This property is not set when reaching the last page. */
		nextLink?: string | null;

		/** The list of campaigns. */
		value?: Array<CampaignListResult>;
	}

	/** The campaigns list result. */
	export interface CampaignsListResultFormProperties {

		/** When using `top` parameter and if partial results are returned, this property describes a URI path to get the next results. This property is not set when reaching the last page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCampaignsListResultFormGroup() {
		return new FormGroup<CampaignsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to target devices based on their carrier country. */
	export interface CarrierCountryCriterion extends Criterion {

		/** Two-characters country code (ISO 3166-1). */
		name?: string | null;
	}

	/** Used to target devices based on their carrier country. */
	export interface CarrierCountryCriterionFormProperties extends CriterionFormProperties {

		/** Two-characters country code (ISO 3166-1). */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCarrierCountryCriterionFormGroup() {
		return new FormGroup<CarrierCountryCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to target devices based on their carrier name. */
	export interface CarrierNameCriterion extends Criterion {

		/** Carrier name value. */
		name?: string | null;
	}

	/** Used to target devices based on their carrier name. */
	export interface CarrierNameCriterionFormProperties extends CriterionFormProperties {

		/** Carrier name value. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCarrierNameCriterionFormGroup() {
		return new FormGroup<CarrierNameCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to target devices who received a data push. */
	export interface DatapushFeedbackCriterion extends Criterion {

		/**
		 * Action that was performed on the data push (action depends on the return value in the callbacks you declared in the client code).
		 */
		action?: AnnouncementFeedbackCriterionAction | null;

		/** The unique identifier of the data push. */
		'content-id'?: number | null;
	}

	/** Used to target devices who received a data push. */
	export interface DatapushFeedbackCriterionFormProperties extends CriterionFormProperties {

		/**
		 * Action that was performed on the data push (action depends on the return value in the callbacks you declared in the client code).
		 */
		action: FormControl<AnnouncementFeedbackCriterionAction | null | undefined>,

		/** The unique identifier of the data push. */
		'content-id': FormControl<number | null | undefined>,
	}
	export function CreateDatapushFeedbackCriterionFormGroup() {
		return new FormGroup<DatapushFeedbackCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			action: new FormControl<AnnouncementFeedbackCriterionAction | null | undefined>(undefined),
			'content-id': new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Target devices based on a date tag value. */
	export interface DateTagCriterion extends Criterion {

		/** The name of the custom tag. */
		name?: string | null;

		/** comparison operator: `EQ` (equal to), `LT` (less than), `GT` (greater than), `LE` (less than or equal to) or `GE` (greater than or equal to). */
		op?: DateTagCriterionOp | null;

		/**
		 * It can be either: * an absolute date using yyyy-MM-dd format (e.g. 1969-12-07 stands for 7 Dec 1969). * an offset in days relative to the current day (`TODAY` + `value`).
		 */
		value?: Date | null;
	}

	/** Target devices based on a date tag value. */
	export interface DateTagCriterionFormProperties extends CriterionFormProperties {

		/** The name of the custom tag. */
		name: FormControl<string | null | undefined>,

		/** comparison operator: `EQ` (equal to), `LT` (less than), `GT` (greater than), `LE` (less than or equal to) or `GE` (greater than or equal to). */
		op: FormControl<DateTagCriterionOp | null | undefined>,

		/**
		 * It can be either: * an absolute date using yyyy-MM-dd format (e.g. 1969-12-07 stands for 7 Dec 1969). * an offset in days relative to the current day (`TODAY` + `value`).
		 */
		value: FormControl<Date | null | undefined>,
	}
	export function CreateDateTagCriterionFormGroup() {
		return new FormGroup<DateTagCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			op: new FormControl<DateTagCriterionOp | null | undefined>(undefined),
			value: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DateTagCriterionOp { EQ = 'EQ', LT = 'LT', GT = 'GT', LE = 'LE', GE = 'GE' }

	export interface Device {

		/** Also known as tags, a key-value set as a JSON object. */
		appInfo?: {[id: string]: string };

		/**
		 * The device result.
		 * Required
		 */
		deviceId: string;
		info?: DeviceInfo;
		location?: DeviceLocation;
		meta?: DeviceMeta;
	}
	export interface DeviceFormProperties {

		/** Also known as tags, a key-value set as a JSON object. */
		appInfo: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The device result.
		 * Required
		 */
		deviceId: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			appInfo: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceInfo {

		/** Android API level. */
		androidAPILevel?: number | null;

		/** Application version code. */
		applicationVersionCode?: number | null;

		/** Application version name. */
		applicationVersionName?: string | null;

		/** Carrier country. */
		carrierCountry?: string | null;

		/** Carrier name. */
		carrierName?: string | null;

		/** Firmware name. */
		firmwareName?: string | null;

		/** Firmware version. */
		firmwareVersion?: string | null;

		/** Locale code. */
		locale?: string | null;

		/** Network sub-type. */
		networkSubtype?: string | null;

		/** Network type. */
		networkType?: string | null;

		/** Phone manufacturer */
		phoneManufacturer?: string | null;

		/** Phone model. */
		phoneModel?: string | null;

		/** SDK version. */
		serviceVersion?: string | null;

		/** The offset in minutes from UTC for the device time zone, including daylight savings time. */
		timeZoneOffset?: number | null;
	}
	export interface DeviceInfoFormProperties {

		/** Android API level. */
		androidAPILevel: FormControl<number | null | undefined>,

		/** Application version code. */
		applicationVersionCode: FormControl<number | null | undefined>,

		/** Application version name. */
		applicationVersionName: FormControl<string | null | undefined>,

		/** Carrier country. */
		carrierCountry: FormControl<string | null | undefined>,

		/** Carrier name. */
		carrierName: FormControl<string | null | undefined>,

		/** Firmware name. */
		firmwareName: FormControl<string | null | undefined>,

		/** Firmware version. */
		firmwareVersion: FormControl<string | null | undefined>,

		/** Locale code. */
		locale: FormControl<string | null | undefined>,

		/** Network sub-type. */
		networkSubtype: FormControl<string | null | undefined>,

		/** Network type. */
		networkType: FormControl<string | null | undefined>,

		/** Phone manufacturer */
		phoneManufacturer: FormControl<string | null | undefined>,

		/** Phone model. */
		phoneModel: FormControl<string | null | undefined>,

		/** SDK version. */
		serviceVersion: FormControl<string | null | undefined>,

		/** The offset in minutes from UTC for the device time zone, including daylight savings time. */
		timeZoneOffset: FormControl<number | null | undefined>,
	}
	export function CreateDeviceInfoFormGroup() {
		return new FormGroup<DeviceInfoFormProperties>({
			androidAPILevel: new FormControl<number | null | undefined>(undefined),
			applicationVersionCode: new FormControl<number | null | undefined>(undefined),
			applicationVersionName: new FormControl<string | null | undefined>(undefined),
			carrierCountry: new FormControl<string | null | undefined>(undefined),
			carrierName: new FormControl<string | null | undefined>(undefined),
			firmwareName: new FormControl<string | null | undefined>(undefined),
			firmwareVersion: new FormControl<string | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			networkSubtype: new FormControl<string | null | undefined>(undefined),
			networkType: new FormControl<string | null | undefined>(undefined),
			phoneManufacturer: new FormControl<string | null | undefined>(undefined),
			phoneModel: new FormControl<string | null | undefined>(undefined),
			serviceVersion: new FormControl<string | null | undefined>(undefined),
			timeZoneOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeviceLocation {

		/** The ISO 3166 two-letter country code. */
		countrycode?: string | null;

		/** A locality within the administrative region, such as a town or city. */
		locality?: string | null;

		/** An administrative region of the nation, such as a state or province. */
		region?: string | null;
	}
	export interface DeviceLocationFormProperties {

		/** The ISO 3166 two-letter country code. */
		countrycode: FormControl<string | null | undefined>,

		/** A locality within the administrative region, such as a town or city. */
		locality: FormControl<string | null | undefined>,

		/** An administrative region of the nation, such as a state or province. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateDeviceLocationFormGroup() {
		return new FormGroup<DeviceLocationFormProperties>({
			countrycode: new FormControl<string | null | undefined>(undefined),
			locality: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to target devices based on the device manufacturer. */
	export interface DeviceManufacturerCriterion extends Criterion {

		/** The device manufacturer. */
		name?: string | null;
	}

	/** Used to target devices based on the device manufacturer. */
	export interface DeviceManufacturerCriterionFormProperties extends CriterionFormProperties {

		/** The device manufacturer. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeviceManufacturerCriterionFormGroup() {
		return new FormGroup<DeviceManufacturerCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceMeta {

		/** First time the device used the application in milliseconds since January 1st, 1970 UTC. */
		firstSeen?: number | null;

		/** Timestamp corresponding to the info object in milliseconds since January 1st, 1970 UTC. */
		lastInfo?: number | null;

		/** Timestamp corresponding to the location object in milliseconds since January 1st, 1970 UTC. */
		lastLocation?: number | null;

		/** Last time the device used the application in milliseconds since January 1st, 1970 UTC. */
		lastSeen?: number | null;

		/** Boolean indicating if native push notifications (like Android’s GCM or Apple’s APNS) are enabled for the application. This boolean is set to true when the application registers successfully to the native push service, and set to false when the native push service reports to Mobile Engagement that the application can no longer be pushed (which means that it has been uninstalled). This report is performed a few hours after Mobile Engagement has tried to perform a native push to a device on which the application has been uninstalled. */
		nativePushEnabled?: boolean | null;
	}
	export interface DeviceMetaFormProperties {

		/** First time the device used the application in milliseconds since January 1st, 1970 UTC. */
		firstSeen: FormControl<number | null | undefined>,

		/** Timestamp corresponding to the info object in milliseconds since January 1st, 1970 UTC. */
		lastInfo: FormControl<number | null | undefined>,

		/** Timestamp corresponding to the location object in milliseconds since January 1st, 1970 UTC. */
		lastLocation: FormControl<number | null | undefined>,

		/** Last time the device used the application in milliseconds since January 1st, 1970 UTC. */
		lastSeen: FormControl<number | null | undefined>,

		/** Boolean indicating if native push notifications (like Android’s GCM or Apple’s APNS) are enabled for the application. This boolean is set to true when the application registers successfully to the native push service, and set to false when the native push service reports to Mobile Engagement that the application can no longer be pushed (which means that it has been uninstalled). This report is performed a few hours after Mobile Engagement has tried to perform a native push to a device on which the application has been uninstalled. */
		nativePushEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDeviceMetaFormGroup() {
		return new FormGroup<DeviceMetaFormProperties>({
			firstSeen: new FormControl<number | null | undefined>(undefined),
			lastInfo: new FormControl<number | null | undefined>(undefined),
			lastLocation: new FormControl<number | null | undefined>(undefined),
			lastSeen: new FormControl<number | null | undefined>(undefined),
			nativePushEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Used to target devices based on the device model. */
	export interface DeviceModelCriterion extends Criterion {

		/** The device model. */
		name?: string | null;
	}

	/** Used to target devices based on the device model. */
	export interface DeviceModelCriterionFormProperties extends CriterionFormProperties {

		/** The device model. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeviceModelCriterionFormGroup() {
		return new FormGroup<DeviceModelCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceQueryResult {

		/** Also known as tags, a key-value set as a JSON object. */
		appInfo?: {[id: string]: string };

		/**
		 * The device result.
		 * Required
		 */
		deviceId: string;
		meta?: DeviceMeta;
	}
	export interface DeviceQueryResultFormProperties {

		/** Also known as tags, a key-value set as a JSON object. */
		appInfo: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The device result.
		 * Required
		 */
		deviceId: FormControl<string | null | undefined>,
	}
	export function CreateDeviceQueryResultFormGroup() {
		return new FormGroup<DeviceQueryResultFormProperties>({
			appInfo: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			deviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceTagsParameters {

		/** If this parameter is `true`, tags with a null value will be deleted. */
		deleteOnNull?: boolean | null;

		/**
		 * A JSON object describing the set of tags to record for a set of users. Each key is a device/user identifier, each value is itself a key/value set: the tags to set for the specified device/user identifier.
		 * Required
		 */
		tags: any;
	}
	export interface DeviceTagsParametersFormProperties {

		/** If this parameter is `true`, tags with a null value will be deleted. */
		deleteOnNull: FormControl<boolean | null | undefined>,

		/**
		 * A JSON object describing the set of tags to record for a set of users. Each key is a device/user identifier, each value is itself a key/value set: the tags to set for the specified device/user identifier.
		 * Required
		 */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateDeviceTagsParametersFormGroup() {
		return new FormGroup<DeviceTagsParametersFormProperties>({
			deleteOnNull: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceTagsResult {

		/**
		 * A JSON array containing all identifiers that have been rejected. Please note that if the request parameters are valid but all the specified devices are rejected, the status code is still `200` with a response including all the devices as being rejected.
		 * Required
		 */
		invalidIds: Array<string>;
	}
	export interface DeviceTagsResultFormProperties {
	}
	export function CreateDeviceTagsResultFormGroup() {
		return new FormGroup<DeviceTagsResultFormProperties>({
		});

	}


	/** The campaigns list result. */
	export interface DevicesQueryResult {

		/** If partial results are returned, this property describes a URI path to get the next result page. */
		nextLink?: string | null;

		/** The list of devices. */
		value?: Array<DeviceQueryResult>;
	}

	/** The campaigns list result. */
	export interface DevicesQueryResultFormProperties {

		/** If partial results are returned, this property describes a URI path to get the next result page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDevicesQueryResultFormGroup() {
		return new FormGroup<DevicesQueryResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Send only to users who have used the app in the last {threshold} days. */
	export interface EngageActiveUsersFilter extends Filter {

		/** An integer value representing the threshold to apply on this filter. */
		threshold?: number | null;
	}

	/** Send only to users who have used the app in the last {threshold} days. */
	export interface EngageActiveUsersFilterFormProperties extends FilterFormProperties {

		/** An integer value representing the threshold to apply on this filter. */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateEngageActiveUsersFilterFormGroup() {
		return new FormGroup<EngageActiveUsersFilterFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Send only to users who haven't used the app in the last {threshold} days. */
	export interface EngageIdleUsersFilter extends Filter {

		/** An integer value representing the threshold to apply on this filter. */
		threshold?: number | null;
	}

	/** Send only to users who haven't used the app in the last {threshold} days. */
	export interface EngageIdleUsersFilterFormProperties extends FilterFormProperties {

		/** An integer value representing the threshold to apply on this filter. */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateEngageIdleUsersFilterFormGroup() {
		return new FormGroup<EngageIdleUsersFilterFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Send only to users whose first app use is less than {threshold} days old. */
	export interface EngageNewUsersFilter extends Filter {

		/** An integer value representing the threshold to apply on this filter. */
		threshold?: number | null;
	}

	/** Send only to users whose first app use is less than {threshold} days old. */
	export interface EngageNewUsersFilterFormProperties extends FilterFormProperties {

		/** An integer value representing the threshold to apply on this filter. */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateEngageNewUsersFilterFormGroup() {
		return new FormGroup<EngageNewUsersFilterFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Send only to users whose first app use is more than {threshold} days old. */
	export interface EngageOldUsersFilter extends Filter {

		/** An integer value representing the threshold to apply on this filter. */
		threshold?: number | null;
	}

	/** Send only to users whose first app use is more than {threshold} days old. */
	export interface EngageOldUsersFilterFormProperties extends FilterFormProperties {

		/** An integer value representing the threshold to apply on this filter. */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateEngageOldUsersFilterFormGroup() {
		return new FormGroup<EngageOldUsersFilterFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Send only to a maximum of max users. */
	export interface EngageSubsetFilter extends Filter {

		/** An integer value representing the maximum users that should be pushed. */
		max?: number | null;
	}

	/** Send only to a maximum of max users. */
	export interface EngageSubsetFilterFormProperties extends FilterFormProperties {

		/** An integer value representing the maximum users that should be pushed. */
		max: FormControl<number | null | undefined>,
	}
	export function CreateEngageSubsetFilterFormGroup() {
		return new FormGroup<EngageSubsetFilterFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			max: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used to target devices based on their firmware version. */
	export interface FirmwareVersionCriterion extends Criterion {

		/** Firmware version. */
		name?: string | null;
	}

	/** Used to target devices based on their firmware version. */
	export interface FirmwareVersionCriterionFormProperties extends CriterionFormProperties {

		/** Firmware version. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFirmwareVersionCriterionFormGroup() {
		return new FormGroup<FirmwareVersionCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Used to target devices based on a specific region. A center point (defined by a latitude and longitude) and a radius form the boundary for the region. This criterion will be met when the user crosses the boundaries of the region.
	 */
	export interface GeoFencingCriterion extends Criterion {

		/** Number of minutes before device location is considered to be expired. */
		expiration?: number | null;

		/** The latitude of the central point of the region. */
		lat?: number | null;

		/** The longitude of the central point of the region. */
		lon?: number | null;

		/** The radius of the central point of the region, in meters. */
		radius?: number | null;
	}

	/**
	 * Used to target devices based on a specific region. A center point (defined by a latitude and longitude) and a radius form the boundary for the region. This criterion will be met when the user crosses the boundaries of the region.
	 */
	export interface GeoFencingCriterionFormProperties extends CriterionFormProperties {

		/** Number of minutes before device location is considered to be expired. */
		expiration: FormControl<number | null | undefined>,

		/** The latitude of the central point of the region. */
		lat: FormControl<number | null | undefined>,

		/** The longitude of the central point of the region. */
		lon: FormControl<number | null | undefined>,

		/** The radius of the central point of the region, in meters. */
		radius: FormControl<number | null | undefined>,
	}
	export function CreateGeoFencingCriterionFormGroup() {
		return new FormGroup<GeoFencingCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiration: new FormControl<number | null | undefined>(undefined),
			lat: new FormControl<number | null | undefined>(undefined),
			lon: new FormControl<number | null | undefined>(undefined),
			radius: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Target devices based on an integer tag value. */
	export interface IntegerTagCriterion extends Criterion {

		/** The name of the custom tag. */
		name?: string | null;

		/** comparison operator: `EQ` (equal to), `LT` (less than), `GT` (greater than), `LE` (less than or equal to) or `GE` (greater than or equal to). */
		op?: DateTagCriterionOp | null;

		/** A custom integer value to match. */
		value?: number | null;
	}

	/** Target devices based on an integer tag value. */
	export interface IntegerTagCriterionFormProperties extends CriterionFormProperties {

		/** The name of the custom tag. */
		name: FormControl<string | null | undefined>,

		/** comparison operator: `EQ` (equal to), `LT` (less than), `GT` (greater than), `LE` (less than or equal to) or `GE` (greater than or equal to). */
		op: FormControl<DateTagCriterionOp | null | undefined>,

		/** A custom integer value to match. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateIntegerTagCriterionFormGroup() {
		return new FormGroup<IntegerTagCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			op: new FormControl<DateTagCriterionOp | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used to target devices based on the language of their device. */
	export interface LanguageCriterion extends Criterion {

		/** Two character language code (ISO 639-1). */
		name?: string | null;
	}

	/** Used to target devices based on the language of their device. */
	export interface LanguageCriterionFormProperties extends CriterionFormProperties {

		/** Two character language code (ISO 639-1). */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLanguageCriterionFormGroup() {
		return new FormGroup<LanguageCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to target devices based on their last know area. */
	export interface LocationCriterion extends Criterion {

		/**
		 * Two character country code where the user is located (ISO 3166-1).
		 * Required
		 */
		country: string;

		/** A locality within the administrative region, such as a town or city. */
		locality?: string | null;

		/** An administrative region of the country, such as a state or province. */
		region?: string | null;
	}

	/** Used to target devices based on their last know area. */
	export interface LocationCriterionFormProperties extends CriterionFormProperties {

		/**
		 * Two character country code where the user is located (ISO 3166-1).
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/** A locality within the administrative region, such as a town or city. */
		locality: FormControl<string | null | undefined>,

		/** An administrative region of the country, such as a state or province. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateLocationCriterionFormGroup() {
		return new FormGroup<LocationCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locality: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Engage only users with native push enabled. */
	export interface NativePushEnabledFilter {
	}

	/** Engage only users with native push enabled. */
	export interface NativePushEnabledFilterFormProperties {
	}
	export function CreateNativePushEnabledFilterFormGroup() {
		return new FormGroup<NativePushEnabledFilterFormProperties>({
		});

	}


	/** Used to target devices based their network type. */
	export interface NetworkTypeCriterion extends Criterion {

		/** The network type (Wifi, Mobile...). */
		name?: string | null;
	}

	/** Used to target devices based their network type. */
	export interface NetworkTypeCriterionFormProperties extends CriterionFormProperties {

		/** The network type (Wifi, Mobile...). */
		name: FormControl<string | null | undefined>,
	}
	export function CreateNetworkTypeCriterionFormGroup() {
		return new FormGroup<NetworkTypeCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotificationOptions {

		/**
		 * The action text is the title of the right button of the alert or the value of the unlock slider, where the value replaces 'unlock' in 'slide to unlock'. 'View' (localized to the preferred language) is used as the default value. The `deliveryTime` property must be set to `any` or `background`.
		 */
		actionText?: string | null;

		/**
		 * URL of a remote image displayed in expanded notifications on
		 * Android 4.1+ devices with the following constraints:
		 * * The URL length is limited to 2000 characters.
		 * * The image size must be less than 4 MiB.
		 * * The following MIME types are supported:
		 * ** image/png
		 * ** image/jpeg
		 * ** image/gif
		 * ** image/webp
		 * ** image/bmp
		 * ** image/x-bmp
		 * ** image/x-ms-bmp
		 * * URL scheme must be HTTP or HTTPS (with valid SSL certificate).
		 * * Incompatible with `bigText`, only one of the fields can be set.
		 * * The `notificationType` property must be set to `system`.
		 * Max length: 2000
		 */
		bigPicture?: string | null;

		/**
		 * Android 4.1+ only. Multi line message shown in expanded notifications on Android 4.1+ devices. The `notificationType` property must be set to `system`.
		 * Max length: 4000
		 */
		bigText?: string | null;

		/**
		 * iOS only. The name of a sound file in the application bundle. The sound in this file is played as an alert. If the sound file doesn’t exist or default is specified as the value, the default alert sound is played. The audio must be in one of the audio data formats that are compatible with system sounds. The `deliveryTime` property must be set to `any` or `background`.
		 */
		sound?: string | null;
	}
	export interface NotificationOptionsFormProperties {

		/**
		 * The action text is the title of the right button of the alert or the value of the unlock slider, where the value replaces 'unlock' in 'slide to unlock'. 'View' (localized to the preferred language) is used as the default value. The `deliveryTime` property must be set to `any` or `background`.
		 */
		actionText: FormControl<string | null | undefined>,

		/**
		 * URL of a remote image displayed in expanded notifications on
		 * Android 4.1+ devices with the following constraints:
		 * * The URL length is limited to 2000 characters.
		 * * The image size must be less than 4 MiB.
		 * * The following MIME types are supported:
		 * ** image/png
		 * ** image/jpeg
		 * ** image/gif
		 * ** image/webp
		 * ** image/bmp
		 * ** image/x-bmp
		 * ** image/x-ms-bmp
		 * * URL scheme must be HTTP or HTTPS (with valid SSL certificate).
		 * * Incompatible with `bigText`, only one of the fields can be set.
		 * * The `notificationType` property must be set to `system`.
		 * Max length: 2000
		 */
		bigPicture: FormControl<string | null | undefined>,

		/**
		 * Android 4.1+ only. Multi line message shown in expanded notifications on Android 4.1+ devices. The `notificationType` property must be set to `system`.
		 * Max length: 4000
		 */
		bigText: FormControl<string | null | undefined>,

		/**
		 * iOS only. The name of a sound file in the application bundle. The sound in this file is played as an alert. If the sound file doesn’t exist or default is specified as the value, the default alert sound is played. The audio must be in one of the audio data formats that are compatible with system sounds. The `deliveryTime` property must be set to `any` or `background`.
		 */
		sound: FormControl<string | null | undefined>,
	}
	export function CreateNotificationOptionsFormGroup() {
		return new FormGroup<NotificationOptionsFormProperties>({
			actionText: new FormControl<string | null | undefined>(undefined),
			bigPicture: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2000)]),
			bigText: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4000)]),
			sound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to target devices who answered X to a given question. */
	export interface PollAnswerFeedbackCriterion extends Criterion {

		/** The unique identifier of the choice. */
		'choice-id'?: number | null;

		/** The unique identifier of the poll. */
		'content-id'?: number | null;
	}

	/** Used to target devices who answered X to a given question. */
	export interface PollAnswerFeedbackCriterionFormProperties extends CriterionFormProperties {

		/** The unique identifier of the choice. */
		'choice-id': FormControl<number | null | undefined>,

		/** The unique identifier of the poll. */
		'content-id': FormControl<number | null | undefined>,
	}
	export function CreatePollAnswerFeedbackCriterionFormGroup() {
		return new FormGroup<PollAnswerFeedbackCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'choice-id': new FormControl<number | null | undefined>(undefined),
			'content-id': new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Used to target devices who received a poll. */
	export interface PollFeedbackCriterion extends Criterion {

		/** Action that was performed on the poll. */
		action?: AnnouncementFeedbackCriterionAction | null;

		/** The unique identifier of the poll. */
		'content-id'?: number | null;
	}

	/** Used to target devices who received a poll. */
	export interface PollFeedbackCriterionFormProperties extends CriterionFormProperties {

		/** Action that was performed on the poll. */
		action: FormControl<AnnouncementFeedbackCriterionAction | null | undefined>,

		/** The unique identifier of the poll. */
		'content-id': FormControl<number | null | undefined>,
	}
	export function CreatePollFeedbackCriterionFormGroup() {
		return new FormGroup<PollFeedbackCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			action: new FormControl<AnnouncementFeedbackCriterionAction | null | undefined>(undefined),
			'content-id': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PollQuestionChoiceLocalization {

		/**
		 * Title of the choice.
		 * Max length: 256
		 */
		title?: string | null;
	}
	export interface PollQuestionChoiceLocalizationFormProperties {

		/**
		 * Title of the choice.
		 * Max length: 256
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePollQuestionChoiceLocalizationFormGroup() {
		return new FormGroup<PollQuestionChoiceLocalizationFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}

	export interface PollQuestionLocalization {

		/**
		 * Title of the question.
		 * Max length: 256
		 */
		title?: string | null;
	}
	export interface PollQuestionLocalizationFormProperties {

		/**
		 * Title of the question.
		 * Max length: 256
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePollQuestionLocalizationFormGroup() {
		return new FormGroup<PollQuestionLocalizationFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** Engage only users for whom the push quota is not reached. */
	export interface PushQuotaFilter {
	}

	/** Engage only users for whom the push quota is not reached. */
	export interface PushQuotaFilterFormProperties {
	}
	export function CreatePushQuotaFilterFormGroup() {
		return new FormGroup<PushQuotaFilterFormProperties>({
		});

	}

	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Resource name */
		name?: string | null;

		/** Resource tags */
		tags?: {[id: string]: string };

		/** Resource type */
		type?: string | null;
	}
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to target devices based on the screen resolution of their device. */
	export interface ScreenSizeCriterion extends Criterion {

		/** Screen size using the following format WIDTH**x**HEIGHT. */
		name?: string | null;
	}

	/** Used to target devices based on the screen resolution of their device. */
	export interface ScreenSizeCriterionFormProperties extends CriterionFormProperties {

		/** Screen size using the following format WIDTH**x**HEIGHT. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateScreenSizeCriterionFormGroup() {
		return new FormGroup<ScreenSizeCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Target devices based on an existing segment. */
	export interface SegmentCriterion extends Criterion {

		/** If value is true, the criterion will target users that are NOT part of the segment. */
		exclude?: boolean | null;

		/** Segment identifier. */
		id?: number | null;
	}

	/** Target devices based on an existing segment. */
	export interface SegmentCriterionFormProperties extends CriterionFormProperties {

		/** If value is true, the criterion will target users that are NOT part of the segment. */
		exclude: FormControl<boolean | null | undefined>,

		/** Segment identifier. */
		id: FormControl<number | null | undefined>,
	}
	export function CreateSegmentCriterionFormGroup() {
		return new FormGroup<SegmentCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			exclude: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Target devices based on a string tag value. */
	export interface StringTagCriterion extends Criterion {

		/** The name of the custom tag. */
		name?: string | null;

		/** A custom string to match for tag value (? and * characters can be used to perform wildcard matching). */
		value?: string | null;
	}

	/** Target devices based on a string tag value. */
	export interface StringTagCriterionFormProperties extends CriterionFormProperties {

		/** The name of the custom tag. */
		name: FormControl<string | null | undefined>,

		/** A custom string to match for tag value (? and * characters can be used to perform wildcard matching). */
		value: FormControl<string | null | undefined>,
	}
	export function CreateStringTagCriterionFormGroup() {
		return new FormGroup<StringTagCriterionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SupportedPlatformsListResult {

		/** List of supported platforms. */
		platforms?: Array<string>;
	}
	export interface SupportedPlatformsListResultFormProperties {
	}
	export function CreateSupportedPlatformsListResultFormGroup() {
		return new FormGroup<SupportedPlatformsListResultFormProperties>({
		});

	}

	export interface DateRangeExportTaskParameter {

		/** Required */
		containerUrl: string;

		/** A description of the export task. */
		description?: string | null;

		/**
		 * A date as defined by full-date in RFC3339.
		 * Required
		 */
		endDate: Date;

		/**
		 * The format of exported data.
		 * Required
		 */
		exportFormat: DateRangeExportTaskParameterExportFormat;

		/**
		 * A date as defined by full-date in RFC3339.
		 * Required
		 */
		startDate: Date;
	}
	export interface DateRangeExportTaskParameterFormProperties {

		/** Required */
		containerUrl: FormControl<string | null | undefined>,

		/** A description of the export task. */
		description: FormControl<string | null | undefined>,

		/**
		 * A date as defined by full-date in RFC3339.
		 * Required
		 */
		endDate: FormControl<Date | null | undefined>,

		/**
		 * The format of exported data.
		 * Required
		 */
		exportFormat: FormControl<DateRangeExportTaskParameterExportFormat | null | undefined>,

		/**
		 * A date as defined by full-date in RFC3339.
		 * Required
		 */
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateDateRangeExportTaskParameterFormGroup() {
		return new FormGroup<DateRangeExportTaskParameterFormProperties>({
			containerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			exportFormat: new FormControl<DateRangeExportTaskParameterExportFormat | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DateRangeExportTaskParameterExportFormat { JsonBlob = 'JsonBlob', CsvBlob = 'CsvBlob' }


	/** The format of exported data. */
	export enum ExportFormat { JsonBlob = 'JsonBlob', CsvBlob = 'CsvBlob' }


	/** Options to control export generation. */
	export interface ExportOptions {
		exportUserId?: boolean | null;
	}

	/** Options to control export generation. */
	export interface ExportOptionsFormProperties {
		exportUserId: FormControl<boolean | null | undefined>,
	}
	export function CreateExportOptionsFormGroup() {
		return new FormGroup<ExportOptionsFormProperties>({
			exportUserId: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The state of an export task. */
	export enum ExportState { Queued = 'Queued', Started = 'Started', Succeeded = 'Succeeded', Failed = 'Failed' }


	/** Gets a paged list of ExportTasks. */
	export interface ExportTaskListResult {

		/** When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages. */
		nextLink?: string | null;

		/**
		 * The list of export tasks.
		 * Required
		 */
		value: Array<ExportTaskResult>;
	}

	/** Gets a paged list of ExportTasks. */
	export interface ExportTaskListResultFormProperties {

		/** When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateExportTaskListResultFormGroup() {
		return new FormGroup<ExportTaskListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportTaskResult {

		/** The RFC3339 date-time the export task was completed. */
		dateCompleted?: Date | null;

		/**
		 * The RFC3339 date-time the export task was created.
		 * Required
		 */
		dateCreated: Date;

		/** A description of the export task. */
		description?: string | null;

		/** Details of errors encountered during the export, if any. */
		errorDetails?: string | null;

		/**
		 * The type of export.
		 * Required
		 */
		exportType: ExportTaskResultExportType;

		/**
		 * Unique identifier of the export task.
		 * Required
		 */
		id: string;

		/**
		 * The state of an export task.
		 * Required
		 */
		state: ExportState;
	}
	export interface ExportTaskResultFormProperties {

		/** The RFC3339 date-time the export task was completed. */
		dateCompleted: FormControl<Date | null | undefined>,

		/**
		 * The RFC3339 date-time the export task was created.
		 * Required
		 */
		dateCreated: FormControl<Date | null | undefined>,

		/** A description of the export task. */
		description: FormControl<string | null | undefined>,

		/** Details of errors encountered during the export, if any. */
		errorDetails: FormControl<string | null | undefined>,

		/**
		 * The type of export.
		 * Required
		 */
		exportType: FormControl<ExportTaskResultExportType | null | undefined>,

		/**
		 * Unique identifier of the export task.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The state of an export task.
		 * Required
		 */
		state: FormControl<ExportState | null | undefined>,
	}
	export function CreateExportTaskResultFormGroup() {
		return new FormGroup<ExportTaskResultFormProperties>({
			dateCompleted: new FormControl<Date | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			errorDetails: new FormControl<string | null | undefined>(undefined),
			exportType: new FormControl<ExportTaskResultExportType | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<ExportState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ExportTaskResultExportType { Activity = 'Activity', Tag = 'Tag', Crash = 'Crash', Error = 'Error', Event = 'Event', Job = 'Job', Session = 'Session', Token = 'Token', Push = 'Push' }

	export interface ExportTaskParameter {

		/** Required */
		containerUrl: string;

		/** A description of the export task. */
		description?: string | null;

		/**
		 * The format of exported data.
		 * Required
		 */
		exportFormat: DateRangeExportTaskParameterExportFormat;
	}
	export interface ExportTaskParameterFormProperties {

		/** Required */
		containerUrl: FormControl<string | null | undefined>,

		/** A description of the export task. */
		description: FormControl<string | null | undefined>,

		/**
		 * The format of exported data.
		 * Required
		 */
		exportFormat: FormControl<DateRangeExportTaskParameterExportFormat | null | undefined>,
	}
	export function CreateExportTaskParameterFormGroup() {
		return new FormGroup<ExportTaskParameterFormProperties>({
			containerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			exportFormat: new FormControl<DateRangeExportTaskParameterExportFormat | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The type of export. */
	export enum ExportType { Activity = 'Activity', Tag = 'Tag', Crash = 'Crash', Error = 'Error', Event = 'Event', Job = 'Job', Session = 'Session', Token = 'Token', Push = 'Push' }

	export interface FeedbackByCampaignParameter {

		/**
		 * A list of campaign identifiers.
		 * Required
		 * Minimum items: 1
		 */
		campaignIds: Array<number>;

		/**
		 * Campaign type.
		 * Required
		 */
		campaignType: FeedbackByCampaignParameterCampaignType;

		/** Required */
		containerUrl: string;

		/** A description of the export task. */
		description?: string | null;

		/**
		 * The format of exported data.
		 * Required
		 */
		exportFormat: DateRangeExportTaskParameterExportFormat;
	}
	export interface FeedbackByCampaignParameterFormProperties {

		/**
		 * Campaign type.
		 * Required
		 */
		campaignType: FormControl<FeedbackByCampaignParameterCampaignType | null | undefined>,

		/** Required */
		containerUrl: FormControl<string | null | undefined>,

		/** A description of the export task. */
		description: FormControl<string | null | undefined>,

		/**
		 * The format of exported data.
		 * Required
		 */
		exportFormat: FormControl<DateRangeExportTaskParameterExportFormat | null | undefined>,
	}
	export function CreateFeedbackByCampaignParameterFormGroup() {
		return new FormGroup<FeedbackByCampaignParameterFormProperties>({
			campaignType: new FormControl<FeedbackByCampaignParameterCampaignType | null | undefined>(undefined, [Validators.required]),
			containerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			exportFormat: new FormControl<DateRangeExportTaskParameterExportFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FeedbackByCampaignParameterCampaignType { Announcement = 'Announcement', DataPush = 'DataPush', NativePush = 'NativePush', Poll = 'Poll' }

	export interface FeedbackByDateRangeParameter {

		/**
		 * Campaign type.
		 * Required
		 */
		campaignType: FeedbackByCampaignParameterCampaignType;

		/**
		 * A date time as defined by date-time in RFC3339.
		 * Required
		 */
		campaignWindowEnd: Date;

		/**
		 * A date time as defined by date-time in RFC3339.
		 * Required
		 */
		campaignWindowStart: Date;

		/** Required */
		containerUrl: string;

		/** A description of the export task. */
		description?: string | null;

		/**
		 * The format of exported data.
		 * Required
		 */
		exportFormat: DateRangeExportTaskParameterExportFormat;
	}
	export interface FeedbackByDateRangeParameterFormProperties {

		/**
		 * Campaign type.
		 * Required
		 */
		campaignType: FormControl<FeedbackByCampaignParameterCampaignType | null | undefined>,

		/**
		 * A date time as defined by date-time in RFC3339.
		 * Required
		 */
		campaignWindowEnd: FormControl<Date | null | undefined>,

		/**
		 * A date time as defined by date-time in RFC3339.
		 * Required
		 */
		campaignWindowStart: FormControl<Date | null | undefined>,

		/** Required */
		containerUrl: FormControl<string | null | undefined>,

		/** A description of the export task. */
		description: FormControl<string | null | undefined>,

		/**
		 * The format of exported data.
		 * Required
		 */
		exportFormat: FormControl<DateRangeExportTaskParameterExportFormat | null | undefined>,
	}
	export function CreateFeedbackByDateRangeParameterFormGroup() {
		return new FormGroup<FeedbackByDateRangeParameterFormProperties>({
			campaignType: new FormControl<FeedbackByCampaignParameterCampaignType | null | undefined>(undefined, [Validators.required]),
			campaignWindowEnd: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			campaignWindowStart: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			containerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			exportFormat: new FormControl<DateRangeExportTaskParameterExportFormat | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ImportTask {

		/** A shared Access Signature (SAS) Storage URI where the job results will be retrieved from. */
		storageUrl?: string | null;
	}
	export interface ImportTaskFormProperties {

		/** A shared Access Signature (SAS) Storage URI where the job results will be retrieved from. */
		storageUrl: FormControl<string | null | undefined>,
	}
	export function CreateImportTaskFormGroup() {
		return new FormGroup<ImportTaskFormProperties>({
			storageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gets a paged list of import tasks. */
	export interface ImportTaskListResult {

		/** When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages. */
		nextLink?: string | null;

		/** The list of import task. */
		value?: Array<ImportTaskResult>;
	}

	/** Gets a paged list of import tasks. */
	export interface ImportTaskListResultFormProperties {

		/** When the results are paged, the nextLink is the URI for the next page of results. This property is empty when there are no additional pages. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateImportTaskListResultFormGroup() {
		return new FormGroup<ImportTaskListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ImportTaskResult extends ImportTask {

		/**
		 * The date at which the import job completed (Not present if not yet completed).
		 * The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
		 */
		dateCompleted?: Date | null;

		/**
		 * The date at which the import job was created.
		 * The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
		 */
		dateCreated?: Date | null;

		/** Details of any errors encountered during the import, if any. */
		errorDetails?: string | null;

		/** Unique identifier of the import task. */
		id?: string | null;

		/** The current state of the import task. */
		state?: ExportState | null;
	}
	export interface ImportTaskResultFormProperties extends ImportTaskFormProperties {

		/**
		 * The date at which the import job completed (Not present if not yet completed).
		 * The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
		 */
		dateCompleted: FormControl<Date | null | undefined>,

		/**
		 * The date at which the import job was created.
		 * The date conforms to the following format: `yyyy-MM-ddTHH:mm:ssZ` as specified by the ISO 8601 standard.
		 */
		dateCreated: FormControl<Date | null | undefined>,

		/** Details of any errors encountered during the import, if any. */
		errorDetails: FormControl<string | null | undefined>,

		/** Unique identifier of the import task. */
		id: FormControl<string | null | undefined>,

		/** The current state of the import task. */
		state: FormControl<ExportState | null | undefined>,
	}
	export function CreateImportTaskResultFormGroup() {
		return new FormGroup<ImportTaskResultFormProperties>({
			storageUrl: new FormControl<string | null | undefined>(undefined),
			dateCompleted: new FormControl<Date | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			errorDetails: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<ExportState | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists app collections in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.MobileEngagement/appCollections
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {AppCollectionListResult} 
		 */
		AppCollections_List(subscriptionId: string, api_version: string): Observable<AppCollectionListResult> {
			return this.http.get<AppCollectionListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MobileEngagement/appCollections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Checks availability of an app collection name in the Engagement domain.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.MobileEngagement/checkAppCollectionNameAvailability
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {AppCollectionNameAvailability} 
		 */
		AppCollections_CheckNameAvailability(subscriptionId: string, api_version: string, requestBody: AppCollectionNameAvailability): Observable<AppCollectionNameAvailability> {
			return this.http.post<AppCollectionNameAvailability>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MobileEngagement/checkAppCollectionNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists supported platforms for Engagement applications.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.MobileEngagement/supportedPlatforms
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @return {SupportedPlatformsListResult} 
		 */
		SupportedPlatforms_List(subscriptionId: string, api_version: string): Observable<SupportedPlatformsListResult> {
			return this.http.get<SupportedPlatformsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.MobileEngagement/supportedPlatforms&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists apps in an appCollection.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} api_version Client Api Version.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @return {AppListResult} 
		 */
		Apps_List(subscriptionId: string, api_version: string, resourceGroupName: string, appCollection: string): Observable<AppListResult> {
			return this.http.get<AppListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the list of campaigns.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {number} skip Control paging of campaigns, start results at the given offset, defaults to 0 (1st page of data).
		 * @param {number} top Control paging of campaigns, number of campaigns to return with each call. It returns all campaigns by default. When specifying $top parameter, the response contains a `nextLink` property describing the path to get the next page if there are more results.
		 * @param {string} filter Filter can be used to restrict the results to campaigns matching a specific state. The syntax is `$filter=state eq 'draft'`. Valid state values are: draft, scheduled, in-progress, and finished. Only the eq operator and the state property are supported.
		 * @param {string} orderby Sort results by an expression which looks like `$orderby=id asc` (this example is actually the default behavior). The syntax is orderby={property} {direction} or just orderby={property}. The available sorting properties are id, name, state, activatedDate, and finishedDate. The available directions are asc (for ascending order) and desc (for descending order). When not specified the asc direction is used. Only one property at a time can be used for sorting.
		 * @param {string} search Restrict results to campaigns matching the optional `search` expression. This currently performs the search based on the name on the campaign only, case insensitive. If the campaign contains the value of the `search` parameter anywhere in the name, it matches.
		 * @return {CampaignsListResult} Success, campaigns are returned as JSON.
		 */
		Campaigns_List(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, kind: Campaigns_ListKind, skip: number | null | undefined, top: number | null | undefined, filter: string | null | undefined, orderby: string | null | undefined, search: string | null | undefined): Observable<CampaignsListResult> {
			return this.http.get<CampaignsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/campaigns/' + kind + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skip=' + skip + '&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), {});
		}

		/**
		 * Create a push campaign (announcement, poll, data push or native push).
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {string} api_version Client Api Version.
		 * @param {Campaign} requestBody Parameters supplied to the Update Campaign operation.
		 * @return {void} 
		 */
		Campaigns_Create(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, kind: Campaigns_ListKind, api_version: string, requestBody: Campaign): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/campaigns/' + kind + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Test a new campaign on a set of devices.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}/test
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {CampaignTestNewParameters} requestBody Parameters supplied to the Test Campaign operation.
		 * @return {CampaignState} Test campaign queued successfully.
		 */
		Campaigns_TestNew(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, kind: Campaigns_ListKind, requestBody: CampaignTestNewParameters): Observable<CampaignState> {
			return this.http.post<CampaignState>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/campaigns/' + kind + '/test&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The Get campaign operation retrieves information about a previously created campaign.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}/{id}
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {number} id Campaign identifier.
		 * @return {CampaignResult} Success, campaign is returned.
		 */
		Campaigns_Get(kind: Campaigns_ListKind, id: number): Observable<CampaignResult> {
			return this.http.get<CampaignResult>(this.baseUri + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/' + kind + '/' + id, {});
		}

		/**
		 * Update an existing push campaign (announcement, poll, data push or native push).
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}/{id}
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {number} id Campaign identifier.
		 * @param {Campaign} requestBody Parameters supplied to the Update Campaign operation.
		 * @return {CampaignStateResult} Updated successfully.
		 */
		Campaigns_Update(kind: Campaigns_ListKind, id: number, requestBody: Campaign): Observable<CampaignStateResult> {
			return this.http.put<CampaignStateResult>(this.baseUri + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/' + kind + '/' + id, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a campaign previously created by a call to Create campaign.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}/{id}
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {number} id Campaign identifier.
		 * @return {void} Deleted successfully.
		 */
		Campaigns_Delete(kind: Campaigns_ListKind, id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/' + kind + '/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Activate a campaign previously created by a call to Create campaign.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}/{id}/activate
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {number} id Campaign identifier.
		 * @param {string} api_version Client Api Version.
		 * @return {CampaignStateResult} Activated successfully.
		 */
		Campaigns_Activate(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, kind: Campaigns_ListKind, id: number, api_version: string): Observable<CampaignStateResult> {
			return this.http.post<CampaignStateResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/campaigns/' + kind + '/' + id + '/activate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Finish a push campaign previously activated by a call to Activate campaign.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}/{id}/finish
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {number} id Campaign identifier.
		 * @param {string} api_version Client Api Version.
		 * @return {CampaignStateResult} Finished successfully.
		 */
		Campaigns_Finish(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, kind: Campaigns_ListKind, id: number, api_version: string): Observable<CampaignStateResult> {
			return this.http.post<CampaignStateResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/campaigns/' + kind + '/' + id + '/finish&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Push a previously saved campaign (created with Create campaign) to a set of devices.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}/{id}/push
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {number} id Campaign identifier.
		 * @param {CampaignPushParameters} requestBody Parameters supplied to the Push Campaign operation.
		 * @return {CampaignPushResult} OK, response body includes rejected devices.
		 */
		Campaigns_Push(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, kind: Campaigns_ListKind, id: number, requestBody: CampaignPushParameters): Observable<CampaignPushResult> {
			return this.http.post<CampaignPushResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/campaigns/' + kind + '/' + id + '/push&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get all the campaign statistics.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}/{id}/statistics
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {number} id Campaign identifier.
		 * @return {CampaignStatisticsResult} Success, statistics are returned as JSON.
		 */
		Campaigns_GetStatistics(kind: Campaigns_ListKind, id: number): Observable<CampaignStatisticsResult> {
			return this.http.get<CampaignStatisticsResult>(this.baseUri + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/' + kind + '/' + id + '/statistics', {});
		}

		/**
		 * Suspend a push campaign previously activated by a call to Activate campaign.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}/{id}/suspend
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {number} id Campaign identifier.
		 * @param {string} api_version Client Api Version.
		 * @return {CampaignStateResult} Suspended successfully.
		 */
		Campaigns_Suspend(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, kind: Campaigns_ListKind, id: number, api_version: string): Observable<CampaignStateResult> {
			return this.http.post<CampaignStateResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/campaigns/' + kind + '/' + id + '/suspend&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Test an existing campaign (created with Create campaign) on a set of devices.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaigns/{kind}/{id}/test
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {number} id Campaign identifier.
		 * @param {string} api_version Client Api Version.
		 * @param {CampaignTestSavedParameters} requestBody Parameters supplied to the Test Campaign operation.
		 * @return {CampaignStateResult} Test campaign queued successfully.
		 */
		Campaigns_TestSaved(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, kind: Campaigns_ListKind, id: number, api_version: string, requestBody: CampaignTestSavedParameters): Observable<CampaignStateResult> {
			return this.http.post<CampaignStateResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/campaigns/' + kind + '/' + id + '/test&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The Get campaign operation retrieves information about a previously created campaign.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/campaignsByName/{kind}/{name}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {Campaigns_ListKind} kind Campaign kind.
		 * @param {string} name Campaign name.
		 * @param {string} api_version Client Api Version.
		 * @return {CampaignResult} Success, campaign is returned.
		 */
		Campaigns_GetByName(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, kind: Campaigns_ListKind, name: string, api_version: string): Observable<CampaignResult> {
			return this.http.get<CampaignResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/campaignsByName/' + kind + '/' + (name == null ? '' : encodeURIComponent(name)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Query the information associated to the devices running an application.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @param {number} top Number of devices to return with each call. Defaults to 100 and cannot return more. Passing a greater value is ignored. The response contains a `nextLink` property describing the URI path to get the next page of results if not all results could be returned at once.
		 * @param {string} select By default all `meta` and `appInfo` properties are returned, this property is used to restrict the output to the desired properties. It also excludes all devices from the output that have none of the selected properties. In other terms, only devices having at least one of the selected property being set is part of the results. Examples: - `$select=appInfo` : select all devices having at least 1 appInfo, return them all and don’t return any meta property. - `$select=meta` : return only meta properties in the output. - `$select=appInfo,meta/firstSeen,meta/lastSeen` : return all `appInfo`, plus meta object containing only firstSeen and lastSeen properties. The format is thus a comma separated list of properties to select. Use `appInfo` to select all appInfo properties, `meta` to select all meta properties. Use `appInfo/{key}` and `meta/{key}` to select specific appInfo and meta properties.
		 * @param {string} filter Filter can be used to reduce the number of results. Filter is a boolean expression that can look like the following examples: * `$filter=deviceId gt 'abcdef0123456789abcdef0123456789'` * `$filter=lastModified le 1447284263690L` * `$filter=(deviceId ge 'abcdef0123456789abcdef0123456789') and (deviceId lt 'bacdef0123456789abcdef0123456789') and (lastModified gt 1447284263690L)` The first example is used automatically for paging when returning the `nextLink` property. The filter expression is a combination of checks on some properties that can be compared to their value. The available operators are: * `gt`  : greater than * `ge`  : greater than or equals * `lt`  : less than * `le`  : less than or equals * `and` : to add multiple checks (all checks must pass), optional parentheses can be used. The properties that can be used in the expression are the following: * `deviceId {operator} '{deviceIdValue}'` : a lexicographical comparison is made on the deviceId value, use single quotes for the value. * `lastModified {operator} {number}L` : returns only meta properties or appInfo properties whose last value modification timestamp compared to the specified value is matching (value is milliseconds since January 1st, 1970 UTC). Please note the `L` character after the number of milliseconds, its required when the number of milliseconds exceeds `2^31 - 1` (which is always the case for recent timestamps). Using `lastModified` excludes all devices from the output that have no property matching the timestamp criteria, like `$select`. Please note that the internal value of `lastModified` timestamp for a given property is never part of the results.
		 * @return {DevicesQueryResult} If successful, the response has a 200 status code and a JSON object describing a collection of devices in the body.
		 */
		Devices_List(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, top: number | null | undefined, select: string | null | undefined, filter: string | null | undefined): Observable<DevicesQueryResult> {
			return this.http.get<DevicesQueryResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&top=' + top + '&select=' + (select == null ? '' : encodeURIComponent(select)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Get the list of export tasks.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @param {number} skip Control paging of export tasks, start results at the given offset, defaults to 0 (1st page of data).
		 * @param {number} top Control paging of export tasks, number of export tasks to return with each call. By default, it returns all export tasks with a default paging of 20.
		 * The response contains a `nextLink` property describing the path to get the next page if there are more results.
		 * The maximum paging limit for $top is 40.
		 * @param {string} orderby Sort results by an expression which looks like `$orderby=taskId asc` (default when not specified).
		 * The syntax is orderby={property} {direction} or just orderby={property}.
		 * Properties that can be specified for sorting: taskId, errorDetails, dateCreated, taskStatus, and dateCreated.
		 * The available directions are asc (for ascending order) and desc (for descending order).
		 * When not specified the asc direction is used.
		 * Only one orderby property can be specified.
		 * @return {ExportTaskListResult} Success. Returns a list of export task statuses.
		 */
		ExportTasks_List(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, skip: number | null | undefined, top: number | null | undefined, orderby: string | null | undefined): Observable<ExportTaskListResult> {
			return this.http.get<ExportTaskListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skip=' + skip + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)), {});
		}

		/**
		 * Creates a task to export activities.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/activities
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ExportTasks_CreateActivitiesTask(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: DateRangeExportTaskParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/activities&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a task to export crashes.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/crashes
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ExportTasks_CreateCrashesTask(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: DateRangeExportTaskParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/crashes&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a task to export errors.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/errors
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ExportTasks_CreateErrorsTask(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: DateRangeExportTaskParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/errors&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a task to export events.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/events
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ExportTasks_CreateEventsTask(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: DateRangeExportTaskParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/events&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a task to export push campaign data for a set of campaigns.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/feedbackByCampaign
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ExportTasks_CreateFeedbackTaskByCampaign(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: FeedbackByCampaignParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/feedbackByCampaign&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a task to export push campaign data for a date range.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/feedbackByDate
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ExportTasks_CreateFeedbackTaskByDateRange(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: FeedbackByDateRangeParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/feedbackByDate&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a task to export jobs.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/jobs
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ExportTasks_CreateJobsTask(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: DateRangeExportTaskParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/jobs&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a task to export sessions.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/sessions
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ExportTasks_CreateSessionsTask(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: DateRangeExportTaskParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/sessions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a task to export tags.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/tags
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ExportTasks_CreateTagsTask(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: ExportTaskParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/tags&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a task to export tags.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/tokens
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ExportTasks_CreateTokensTask(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: ExportTaskParameter): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/tokens&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a previously created export task.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/exportTasks/{id}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @param {string} id Export task identifier.
		 * @return {ExportTaskResult} Success. The status of the export task is returned.
		 */
		ExportTasks_Get(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, id: string): Observable<ExportTaskResult> {
			return this.http.get<ExportTaskResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/exportTasks/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get the list of import jobs.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/importTasks
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @param {number} skip Control paging of import jobs, start results at the given offset, defaults to 0 (1st page of data).
		 * @param {number} top Control paging of import jobs, number of import jobs to return with each call. By default, it returns all import jobs with a default paging of 20.
		 * The response contains a `nextLink` property describing the path to get the next page if there are more results.
		 * The maximum paging limit for $top is 40.
		 * @param {string} orderby Sort results by an expression which looks like `$orderby=jobId asc` (default when not specified).
		 * The syntax is orderby={property} {direction} or just orderby={property}.
		 * Properties that can be specified for sorting: jobId, errorDetails, dateCreated, jobStatus, and dateCreated.
		 * The available directions are asc (for ascending order) and desc (for descending order).
		 * When not specified the asc direction is used.
		 * Only one orderby property can be specified.
		 * @return {ImportTaskListResult} Success, import jobs are returned as JSON.
		 */
		ImportTasks_List(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, skip: number | null | undefined, top: number | null | undefined, orderby: string | null | undefined): Observable<ImportTaskListResult> {
			return this.http.get<ImportTaskListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/importTasks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skip=' + skip + '&top=' + top + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)), {});
		}

		/**
		 * Creates a job to import the specified data to a storageUrl.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/importTasks
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {void} 
		 */
		ImportTasks_Create(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: ImportTask): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/importTasks&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * The Get import job operation retrieves information about a previously created import job.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/importTasks/{id}
		 * @param {string} id Import job identifier.
		 * @return {ImportTaskResult} Success, import job is returned.
		 */
		ImportTasks_Get(id: string): Observable<ImportTaskResult> {
			return this.http.get<ImportTaskResult>(this.baseUri + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/importTasks/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Update the tags registered for a set of devices running an application. Updates are performed asynchronously, meaning that a few seconds are needed before the modifications appear in the results of the Get device command.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/tag
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {DeviceTagsResult} Success, invalid device identifiers are returned.
		 */
		Devices_TagByDeviceId(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: DeviceTagsParameters): Observable<DeviceTagsResult> {
			return this.http.post<DeviceTagsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/tag&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the information associated to a device running an application.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/devices/{deviceId}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @param {string} deviceId Device identifier.
		 * @return {Device} Success, device is returned.
		 */
		Devices_GetByDeviceId(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, deviceId: string): Observable<Device> {
			return this.http.get<Device>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/devices/' + (deviceId == null ? '' : encodeURIComponent(deviceId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Update the tags registered for a set of users running an application. Updates are performed asynchronously, meaning that a few seconds are needed before the modifications appear in the results of the Get device command.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/users/tag
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @return {DeviceTagsResult} Success, invalid user identifiers are returned.
		 */
		Devices_TagByUserId(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, requestBody: DeviceTagsParameters): Observable<DeviceTagsResult> {
			return this.http.post<DeviceTagsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/users/tag&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the information associated to a device running an application using the user identifier.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileEngagement/appcollections/{appCollection}/apps/{appName}/users/{userId}
		 * @param {string} subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} appCollection Application collection.
		 * @param {string} appName Application resource name.
		 * @param {string} api_version Client Api Version.
		 * @param {string} userId User identifier.
		 * @return {Device} Success, device is returned.
		 */
		Devices_GetByUserId(subscriptionId: string, resourceGroupName: string, appCollection: string, appName: string, api_version: string, userId: string): Observable<Device> {
			return this.http.get<Device>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.MobileEngagement/appcollections/' + (appCollection == null ? '' : encodeURIComponent(appCollection)) + '/apps/' + (appName == null ? '' : encodeURIComponent(appName)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum Campaigns_ListKind { announcements = 'announcements', polls = 'polls', dataPushes = 'dataPushes', nativePushes = 'nativePushes' }

}

