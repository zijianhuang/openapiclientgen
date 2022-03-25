import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateAppResponse {

		/**
		 * Provides information about an application.
		 * Required
		 */
		ApplicationResponse: ApplicationResponse;
	}


	/** Provides information about an application. */
	export interface ApplicationResponse {
		Arn: string;
		Id: string;
		Name: string;
		tags?: MapOf__string;
	}

	export interface MapOf__string {
	}

	export interface BadRequestException {
	}

	export interface InternalServerErrorException {
	}

	export interface PayloadTooLargeException {
	}

	export interface ForbiddenException {
	}

	export interface NotFoundException {
	}

	export interface MethodNotAllowedException {
	}

	export interface TooManyRequestsException {
	}

	export interface CreateCampaignResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a campaign.
		 * Required
		 */
		CampaignResponse: CampaignResponse;
	}


	/** Provides information about the status, configuration, and other settings for a campaign. */
	export interface CampaignResponse {
		AdditionalTreatments?: Array<TreatmentResource>;
		ApplicationId: string;
		Arn: string;
		CreationDate: string;

		/** Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment. */
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;

		/** Provides information about the status of a campaign. */
		DefaultState?: CampaignState;
		Description?: string;
		HoldoutPercent?: number;

		/** Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign. */
		Hook?: CampaignHook;
		Id: string;
		IsPaused?: boolean;
		LastModifiedDate: string;

		/** For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns and journeys in the application can send. */
		Limits?: CampaignLimits;

		/** Specifies the message configuration settings for a campaign. */
		MessageConfiguration?: MessageConfiguration;
		Name?: string;

		/** Specifies the schedule settings for a campaign. */
		Schedule?: Schedule;
		SegmentId: string;
		SegmentVersion: number;

		/** Provides information about the status of a campaign. */
		State?: CampaignState;
		tags?: MapOf__string;

		/** Specifies the message template to use for the message, for each type of channel. */
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
		Version?: number;
	}


	/** Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign. */
	export interface TreatmentResource {

		/** Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment. */
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
		Id: string;

		/** Specifies the message configuration settings for a campaign. */
		MessageConfiguration?: MessageConfiguration;

		/** Specifies the schedule settings for a campaign. */
		Schedule?: Schedule;
		SizePercent: number;

		/** Provides information about the status of a campaign. */
		State?: CampaignState;

		/** Specifies the message template to use for the message, for each type of channel. */
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
	}


	/** Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment. */
	export interface CustomDeliveryConfiguration {
		DeliveryUri: string;
		EndpointTypes?: Array<__EndpointTypesElement>;
	}

	export enum __EndpointTypesElement { PUSH = 0, GCM = 1, APNS = 2, APNS_SANDBOX = 3, APNS_VOIP = 4, APNS_VOIP_SANDBOX = 5, ADM = 6, SMS = 7, VOICE = 8, EMAIL = 9, BAIDU = 10, CUSTOM = 11 }


	/** Specifies the message configuration settings for a campaign. */
	export interface MessageConfiguration {

		/** Specifies the content and settings for a push notification that's sent to recipients of a campaign. */
		ADMMessage?: Message;

		/** Specifies the content and settings for a push notification that's sent to recipients of a campaign. */
		APNSMessage?: Message;

		/** Specifies the content and settings for a push notification that's sent to recipients of a campaign. */
		BaiduMessage?: Message;

		/** Specifies the contents of a message that's sent through a custom channel to recipients of a campaign. */
		CustomMessage?: CampaignCustomMessage;

		/** Specifies the content and settings for a push notification that's sent to recipients of a campaign. */
		DefaultMessage?: Message;

		/** Specifies the content and "From" address for an email message that's sent to recipients of a campaign. */
		EmailMessage?: CampaignEmailMessage;

		/** Specifies the content and settings for a push notification that's sent to recipients of a campaign. */
		GCMMessage?: Message;

		/** Specifies the content and settings for an SMS message that's sent to recipients of a campaign. */
		SMSMessage?: CampaignSmsMessage;
	}


	/** Specifies the content and settings for a push notification that's sent to recipients of a campaign. */
	export interface Message {
		Action?: MessageAction;
		Body?: string;
		ImageIconUrl?: string;
		ImageSmallIconUrl?: string;
		ImageUrl?: string;
		JsonBody?: string;
		MediaUrl?: string;
		RawContent?: string;
		SilentPush?: boolean;
		TimeToLive?: number;
		Title?: string;
		Url?: string;
	}

	export enum MessageAction { OPEN_APP = 0, DEEP_LINK = 1, URL = 2 }


	/** Specifies the contents of a message that's sent through a custom channel to recipients of a campaign. */
	export interface CampaignCustomMessage {
		Data?: string;
	}


	/** Specifies the content and "From" address for an email message that's sent to recipients of a campaign. */
	export interface CampaignEmailMessage {
		Body?: string;
		FromAddress?: string;
		HtmlBody?: string;
		Title?: string;
	}


	/** Specifies the content and settings for an SMS message that's sent to recipients of a campaign. */
	export interface CampaignSmsMessage {
		Body?: string;
		MessageType?: CampaignSmsMessageMessageType;
		SenderId?: string;
	}

	export enum CampaignSmsMessageMessageType { TRANSACTIONAL = 0, PROMOTIONAL = 1 }


	/** Specifies the schedule settings for a campaign. */
	export interface Schedule {
		EndTime?: string;

		/** Specifies the settings for events that cause a campaign to be sent. */
		EventFilter?: CampaignEventFilter;
		Frequency?: ScheduleFrequency;
		IsLocalTime?: boolean;

		/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
		QuietTime?: QuietTime;
		StartTime: string;
		Timezone?: string;
	}


	/** Specifies the settings for events that cause a campaign to be sent. */
	export interface CampaignEventFilter {

		/**
		 * Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed.
		 * Required
		 */
		Dimensions: EventDimensions;
		FilterType: CampaignEventFilterFilterType;
	}


	/** Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed. */
	export interface EventDimensions {
		Attributes?: MapOfAttributeDimension;

		/** Specifies the dimension type and values for a segment dimension. */
		EventType?: SetDimension;
		Metrics?: MapOfMetricDimension;
	}

	export interface MapOfAttributeDimension {
	}


	/** Specifies the dimension type and values for a segment dimension. */
	export interface SetDimension {
		DimensionType?: SetDimensionDimensionType;
		Values: Array<string>;
	}

	export enum SetDimensionDimensionType { INCLUSIVE = 0, EXCLUSIVE = 1 }

	export interface MapOfMetricDimension {
	}

	export enum CampaignEventFilterFilterType { SYSTEM = 0, ENDPOINT = 1 }

	export enum ScheduleFrequency { ONCE = 0, HOURLY = 1, DAILY = 2, WEEKLY = 3, MONTHLY = 4, EVENT = 5 }


	/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
	export interface QuietTime {
		End?: string;
		Start?: string;
	}


	/** Provides information about the status of a campaign. */
	export interface CampaignState {
		CampaignStatus?: CampaignStateCampaignStatus;
	}

	export enum CampaignStateCampaignStatus { SCHEDULED = 0, EXECUTING = 1, PENDING_NEXT_RUN = 2, COMPLETED = 3, PAUSED = 4, DELETED = 5 }


	/** Specifies the message template to use for the message, for each type of channel. */
	export interface TemplateConfiguration {

		/** Specifies the name and version of the message template to use for the message. */
		EmailTemplate?: Template;

		/** Specifies the name and version of the message template to use for the message. */
		PushTemplate?: Template;

		/** Specifies the name and version of the message template to use for the message. */
		SMSTemplate?: Template;

		/** Specifies the name and version of the message template to use for the message. */
		VoiceTemplate?: Template;
	}


	/** Specifies the name and version of the message template to use for the message. */
	export interface Template {
		Name?: string;
		Version?: string;
	}


	/** Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign. */
	export interface CampaignHook {
		LambdaFunctionName?: string;
		Mode?: CampaignHookMode;
		WebUrl?: string;
	}

	export enum CampaignHookMode { DELIVERY = 0, FILTER = 1 }


	/** For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns and journeys in the application can send. */
	export interface CampaignLimits {
		Daily?: number;
		MaximumDuration?: number;
		MessagesPerSecond?: number;
		Total?: number;
	}


	/** Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign. */
	export interface WriteTreatmentResource {

		/** Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment. */
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;

		/** Specifies the message configuration settings for a campaign. */
		MessageConfiguration?: MessageConfiguration;

		/** Specifies the schedule settings for a campaign. */
		Schedule?: Schedule;
		SizePercent: number;

		/** Specifies the message template to use for the message, for each type of channel. */
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
	}

	export interface CreateEmailTemplateResponse {

		/**
		 * Provides information about a request to create a message template.
		 * Required
		 */
		CreateTemplateMessageBody: CreateTemplateMessageBody;
	}


	/** Provides information about a request to create a message template. */
	export interface CreateTemplateMessageBody {
		Arn?: string;
		Message?: string;
		RequestID?: string;
	}

	export interface CreateExportJobResponse {

		/**
		 * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
		 * Required
		 */
		ExportJobResponse: ExportJobResponse;
	}


	/** Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console. */
	export interface ExportJobResponse {
		ApplicationId: string;
		CompletedPieces?: number;
		CompletionDate?: string;
		CreationDate: string;

		/**
		 * Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
		 * Required
		 */
		Definition: ExportJobResource;
		FailedPieces?: number;
		Failures?: Array<string>;
		Id: string;
		JobStatus: ExportJobResponseJobStatus;
		TotalFailures?: number;
		TotalPieces?: number;
		TotalProcessed?: number;
		Type: string;
	}


	/** Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console. */
	export interface ExportJobResource {
		RoleArn: string;
		S3UrlPrefix: string;
		SegmentId?: string;
		SegmentVersion?: number;
	}

	export enum ExportJobResponseJobStatus { CREATED = 0, PREPARING_FOR_INITIALIZATION = 1, INITIALIZING = 2, PROCESSING = 3, PENDING_JOB = 4, COMPLETING = 5, COMPLETED = 6, FAILING = 7, FAILED = 8 }

	export interface CreateImportJobResponse {

		/**
		 * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
		 * Required
		 */
		ImportJobResponse: ImportJobResponse;
	}


	/** Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console. */
	export interface ImportJobResponse {
		ApplicationId: string;
		CompletedPieces?: number;
		CompletionDate?: string;
		CreationDate: string;

		/**
		 * Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
		 * Required
		 */
		Definition: ImportJobResource;
		FailedPieces?: number;
		Failures?: Array<string>;
		Id: string;
		JobStatus: ExportJobResponseJobStatus;
		TotalFailures?: number;
		TotalPieces?: number;
		TotalProcessed?: number;
		Type: string;
	}


	/** Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console. */
	export interface ImportJobResource {
		DefineSegment?: boolean;
		ExternalId?: string;
		Format: ImportJobResourceFormat;
		RegisterEndpoints?: boolean;
		RoleArn: string;
		S3Url: string;
		SegmentId?: string;
		SegmentName?: string;
	}

	export enum ImportJobResourceFormat { CSV = 0, JSON = 1 }

	export enum Format { CSV = 0, JSON = 1 }

	export interface CreateJourneyResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a journey.
		 * Required
		 */
		JourneyResponse: JourneyResponse;
	}


	/** Provides information about the status, configuration, and other settings for a journey. */
	export interface JourneyResponse {
		Activities?: MapOfActivity;
		ApplicationId: string;
		CreationDate?: string;
		Id: string;
		LastModifiedDate?: string;

		/** Specifies limits on the messages that a journey can send and the number of times participants can enter a journey. */
		Limits?: JourneyLimits;
		LocalTime?: boolean;
		Name: string;

		/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
		QuietTime?: QuietTime;
		RefreshFrequency?: string;

		/** Specifies the schedule settings for a journey. */
		Schedule?: JourneySchedule;
		StartActivity?: string;

		/** Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey. */
		StartCondition?: StartCondition;
		State?: JourneyResponseState;
		tags?: MapOf__string;
	}

	export interface MapOfActivity {
	}


	/** Specifies limits on the messages that a journey can send and the number of times participants can enter a journey. */
	export interface JourneyLimits {
		DailyCap?: number;
		EndpointReentryCap?: number;
		MessagesPerSecond?: number;
	}


	/** Specifies the schedule settings for a journey. */
	export interface JourneySchedule {
		EndTime?: Date;
		StartTime?: Date;
		Timezone?: string;
	}


	/** Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey. */
	export interface StartCondition {
		Description?: string;

		/** Specifies a segment to associate with an activity in a journey. */
		SegmentStartCondition?: SegmentCondition;
	}


	/** Specifies a segment to associate with an activity in a journey. */
	export interface SegmentCondition {
		SegmentId: string;
	}

	export enum JourneyResponseState { DRAFT = 0, ACTIVE = 1, COMPLETED = 2, CANCELLED = 3, CLOSED = 4 }

	export enum State { DRAFT = 0, ACTIVE = 1, COMPLETED = 2, CANCELLED = 3, CLOSED = 4 }

	export interface CreatePushTemplateResponse {

		/**
		 * Provides information about a request to create a message template.
		 * Required
		 */
		CreateTemplateMessageBody: CreateTemplateMessageBody;
	}


	/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
	export interface AndroidPushNotificationTemplate {
		Action?: MessageAction;
		Body?: string;
		ImageIconUrl?: string;
		ImageUrl?: string;
		RawContent?: string;
		SmallImageIconUrl?: string;
		Sound?: string;
		Title?: string;
		Url?: string;
	}


	/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel. */
	export interface APNSPushNotificationTemplate {
		Action?: MessageAction;
		Body?: string;
		MediaUrl?: string;
		RawContent?: string;
		Sound?: string;
		Title?: string;
		Url?: string;
	}


	/** Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel. */
	export interface DefaultPushNotificationTemplate {
		Action?: MessageAction;
		Body?: string;
		Sound?: string;
		Title?: string;
		Url?: string;
	}

	export interface CreateRecommenderConfigurationResponse {

		/**
		 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
		 * Required
		 */
		RecommenderConfigurationResponse: RecommenderConfigurationResponse;
	}


	/** Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model. */
	export interface RecommenderConfigurationResponse {
		Attributes?: MapOf__string;
		CreationDate: string;
		Description?: string;
		Id: string;
		LastModifiedDate: string;
		Name?: string;
		RecommendationProviderIdType?: string;
		RecommendationProviderRoleArn: string;
		RecommendationProviderUri: string;
		RecommendationTransformerUri?: string;
		RecommendationsDisplayName?: string;
		RecommendationsPerMessage?: number;
	}

	export interface CreateSegmentResponse {

		/**
		 * Provides information about the configuration, dimension, and other settings for a segment.
		 * Required
		 */
		SegmentResponse: SegmentResponse;
	}


	/** Provides information about the configuration, dimension, and other settings for a segment. */
	export interface SegmentResponse {
		ApplicationId: string;
		Arn: string;
		CreationDate: string;

		/** Specifies the dimension settings for a segment. */
		Dimensions?: SegmentDimensions;
		Id: string;

		/** Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions. */
		ImportDefinition?: SegmentImportResource;
		LastModifiedDate?: string;
		Name?: string;

		/** Specifies the settings that define the relationships between segment groups for a segment. */
		SegmentGroups?: SegmentGroupList;
		SegmentType: SegmentResponseSegmentType;
		tags?: MapOf__string;
		Version?: number;
	}


	/** Specifies the dimension settings for a segment. */
	export interface SegmentDimensions {
		Attributes?: MapOfAttributeDimension;

		/** Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active. */
		Behavior?: SegmentBehaviors;

		/** Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model. */
		Demographic?: SegmentDemographics;

		/** Specifies geographical dimension settings for a segment. */
		Location?: SegmentLocation;
		Metrics?: MapOfMetricDimension;
		UserAttributes?: MapOfAttributeDimension;
	}


	/** Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active. */
	export interface SegmentBehaviors {

		/** Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active. */
		Recency?: RecencyDimension;
	}


	/** Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active. */
	export interface RecencyDimension {
		Duration: RecencyDimensionDuration;
		RecencyType: RecencyDimensionRecencyType;
	}

	export enum RecencyDimensionDuration { HR_24 = 0, DAY_7 = 1, DAY_14 = 2, DAY_30 = 3 }

	export enum RecencyDimensionRecencyType { ACTIVE = 0, INACTIVE = 1 }


	/** Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model. */
	export interface SegmentDemographics {

		/** Specifies the dimension type and values for a segment dimension. */
		AppVersion?: SetDimension;

		/** Specifies the dimension type and values for a segment dimension. */
		Channel?: SetDimension;

		/** Specifies the dimension type and values for a segment dimension. */
		DeviceType?: SetDimension;

		/** Specifies the dimension type and values for a segment dimension. */
		Make?: SetDimension;

		/** Specifies the dimension type and values for a segment dimension. */
		Model?: SetDimension;

		/** Specifies the dimension type and values for a segment dimension. */
		Platform?: SetDimension;
	}


	/** Specifies geographical dimension settings for a segment. */
	export interface SegmentLocation {

		/** Specifies the dimension type and values for a segment dimension. */
		Country?: SetDimension;

		/** Specifies GPS-based criteria for including or excluding endpoints from a segment. */
		GPSPoint?: GPSPointDimension;
	}


	/** Specifies GPS-based criteria for including or excluding endpoints from a segment. */
	export interface GPSPointDimension {

		/**
		 * Specifies the GPS coordinates of a location.
		 * Required
		 */
		Coordinates: GPSCoordinates;
		RangeInKilometers?: number;
	}


	/** Specifies the GPS coordinates of a location. */
	export interface GPSCoordinates {
		Latitude: number;
		Longitude: number;
	}


	/** Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions. */
	export interface SegmentImportResource {
		ChannelCounts?: MapOf__integer;
		ExternalId: string;
		Format: ImportJobResourceFormat;
		RoleArn: string;
		S3Url: string;
		Size: number;
	}

	export interface MapOf__integer {
	}


	/** Specifies the settings that define the relationships between segment groups for a segment. */
	export interface SegmentGroupList {
		Groups?: Array<SegmentGroup>;
		Include?: SegmentGroupSourceType;
	}


	/** Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions. */
	export interface SegmentGroup {
		Dimensions?: Array<SegmentDimensions>;
		SourceSegments?: Array<SegmentReference>;
		SourceType?: SegmentGroupSourceType;
		Type?: SegmentGroupSourceType;
	}


	/** Specifies the segment identifier and version of a segment. */
	export interface SegmentReference {
		Id: string;
		Version?: number;
	}

	export enum SegmentGroupSourceType { ALL = 0, ANY = 1, NONE = 2 }

	export enum SegmentResponseSegmentType { DIMENSIONAL = 0, IMPORT = 1 }

	export interface CreateSmsTemplateResponse {

		/**
		 * Provides information about a request to create a message template.
		 * Required
		 */
		CreateTemplateMessageBody: CreateTemplateMessageBody;
	}

	export interface CreateVoiceTemplateResponse {

		/**
		 * Provides information about a request to create a message template.
		 * Required
		 */
		CreateTemplateMessageBody: CreateTemplateMessageBody;
	}

	export interface DeleteAdmChannelResponse {

		/**
		 * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
		 * Required
		 */
		ADMChannelResponse: ADMChannelResponse;
	}


	/** Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application. */
	export interface ADMChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Enabled?: boolean;
		HasCredential?: boolean;
		Id?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Platform: string;
		Version?: number;
	}

	export interface DeleteApnsChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
		 * Required
		 */
		APNSChannelResponse: APNSChannelResponse;
	}


	/** Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application. */
	export interface APNSChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		HasCredential?: boolean;
		HasTokenKey?: boolean;
		Id?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Platform: string;
		Version?: number;
	}

	export interface DeleteApnsSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
		 * Required
		 */
		APNSSandboxChannelResponse: APNSSandboxChannelResponse;
	}


	/** Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application. */
	export interface APNSSandboxChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		HasCredential?: boolean;
		HasTokenKey?: boolean;
		Id?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Platform: string;
		Version?: number;
	}

	export interface DeleteApnsVoipChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
		 * Required
		 */
		APNSVoipChannelResponse: APNSVoipChannelResponse;
	}


	/** Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application. */
	export interface APNSVoipChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		HasCredential?: boolean;
		HasTokenKey?: boolean;
		Id?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Platform: string;
		Version?: number;
	}

	export interface DeleteApnsVoipSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
		 * Required
		 */
		APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
	}


	/** Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application. */
	export interface APNSVoipSandboxChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		HasCredential?: boolean;
		HasTokenKey?: boolean;
		Id?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Platform: string;
		Version?: number;
	}

	export interface DeleteAppResponse {

		/**
		 * Provides information about an application.
		 * Required
		 */
		ApplicationResponse: ApplicationResponse;
	}

	export interface DeleteBaiduChannelResponse {

		/**
		 * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
		 * Required
		 */
		BaiduChannelResponse: BaiduChannelResponse;
	}


	/** Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application. */
	export interface BaiduChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Credential: string;
		Enabled?: boolean;
		HasCredential?: boolean;
		Id?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Platform: string;
		Version?: number;
	}

	export interface DeleteCampaignResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a campaign.
		 * Required
		 */
		CampaignResponse: CampaignResponse;
	}

	export interface DeleteEmailChannelResponse {

		/**
		 * Provides information about the status and settings of the email channel for an application.
		 * Required
		 */
		EmailChannelResponse: EmailChannelResponse;
	}


	/** Provides information about the status and settings of the email channel for an application. */
	export interface EmailChannelResponse {
		ApplicationId?: string;
		ConfigurationSet?: string;
		CreationDate?: string;
		Enabled?: boolean;
		FromAddress?: string;
		HasCredential?: boolean;
		Id?: string;
		Identity?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		MessagesPerSecond?: number;
		Platform: string;
		RoleArn?: string;
		Version?: number;
	}

	export interface DeleteEmailTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}


	/** Provides information about an API request or response. */
	export interface MessageBody {
		Message?: string;
		RequestID?: string;
	}

	export interface DeleteEndpointResponse {

		/**
		 * Provides information about the channel type and other settings for an endpoint.
		 * Required
		 */
		EndpointResponse: EndpointResponse;
	}


	/** Provides information about the channel type and other settings for an endpoint. */
	export interface EndpointResponse {
		Address?: string;
		ApplicationId?: string;
		Attributes?: MapOfListOf__string;
		ChannelType?: __EndpointTypesElement;
		CohortId?: string;
		CreationDate?: string;

		/** Specifies demographic information about an endpoint, such as the applicable time zone and platform. */
		Demographic?: EndpointDemographic;
		EffectiveDate?: string;
		EndpointStatus?: string;
		Id?: string;

		/** Specifies geographic information about an endpoint. */
		Location?: EndpointLocation;
		Metrics?: MapOf__double;
		OptOut?: string;
		RequestId?: string;

		/** Specifies data for one or more attributes that describe the user who's associated with an endpoint. */
		User?: EndpointUser;
	}

	export interface MapOfListOf__string {
	}


	/** Specifies demographic information about an endpoint, such as the applicable time zone and platform. */
	export interface EndpointDemographic {
		AppVersion?: string;
		Locale?: string;
		Make?: string;
		Model?: string;
		ModelVersion?: string;
		Platform?: string;
		PlatformVersion?: string;
		Timezone?: string;
	}


	/** Specifies geographic information about an endpoint. */
	export interface EndpointLocation {
		City?: string;
		Country?: string;
		Latitude?: number;
		Longitude?: number;
		PostalCode?: string;
		Region?: string;
	}

	export interface MapOf__double {
	}


	/** Specifies data for one or more attributes that describe the user who's associated with an endpoint. */
	export interface EndpointUser {
		UserAttributes?: MapOfListOf__string;
		UserId?: string;
	}

	export interface DeleteEventStreamResponse {

		/**
		 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
		 * Required
		 */
		EventStream: EventStream;
	}


	/** Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream. */
	export interface EventStream {
		ApplicationId: string;
		DestinationStreamArn: string;
		ExternalId?: string;
		LastModifiedDate?: string;
		LastUpdatedBy?: string;
		RoleArn: string;
	}

	export interface DeleteGcmChannelResponse {

		/**
		 * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
		 * Required
		 */
		GCMChannelResponse: GCMChannelResponse;
	}


	/** Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. */
	export interface GCMChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Credential: string;
		Enabled?: boolean;
		HasCredential?: boolean;
		Id?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Platform: string;
		Version?: number;
	}

	export interface DeleteJourneyResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a journey.
		 * Required
		 */
		JourneyResponse: JourneyResponse;
	}

	export interface DeletePushTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}

	export interface DeleteRecommenderConfigurationResponse {

		/**
		 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
		 * Required
		 */
		RecommenderConfigurationResponse: RecommenderConfigurationResponse;
	}

	export interface DeleteSegmentResponse {

		/**
		 * Provides information about the configuration, dimension, and other settings for a segment.
		 * Required
		 */
		SegmentResponse: SegmentResponse;
	}

	export interface DeleteSmsChannelResponse {

		/**
		 * Provides information about the status and settings of the SMS channel for an application.
		 * Required
		 */
		SMSChannelResponse: SMSChannelResponse;
	}


	/** Provides information about the status and settings of the SMS channel for an application. */
	export interface SMSChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Enabled?: boolean;
		HasCredential?: boolean;
		Id?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Platform: string;
		PromotionalMessagesPerSecond?: number;
		SenderId?: string;
		ShortCode?: string;
		TransactionalMessagesPerSecond?: number;
		Version?: number;
	}

	export interface DeleteSmsTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}

	export interface DeleteUserEndpointsResponse {

		/**
		 * Provides information about all the endpoints that are associated with a user ID.
		 * Required
		 */
		EndpointsResponse: EndpointsResponse;
	}


	/** Provides information about all the endpoints that are associated with a user ID. */
	export interface EndpointsResponse {
		Item: Array<EndpointResponse>;
	}

	export interface DeleteVoiceChannelResponse {

		/**
		 * Provides information about the status and settings of the voice channel for an application.
		 * Required
		 */
		VoiceChannelResponse: VoiceChannelResponse;
	}


	/** Provides information about the status and settings of the voice channel for an application. */
	export interface VoiceChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Enabled?: boolean;
		HasCredential?: boolean;
		Id?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Platform: string;
		Version?: number;
	}

	export interface DeleteVoiceTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}

	export interface GetAdmChannelResponse {

		/**
		 * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
		 * Required
		 */
		ADMChannelResponse: ADMChannelResponse;
	}

	export interface GetApnsChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
		 * Required
		 */
		APNSChannelResponse: APNSChannelResponse;
	}

	export interface GetApnsSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
		 * Required
		 */
		APNSSandboxChannelResponse: APNSSandboxChannelResponse;
	}

	export interface GetApnsVoipChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
		 * Required
		 */
		APNSVoipChannelResponse: APNSVoipChannelResponse;
	}

	export interface GetApnsVoipSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
		 * Required
		 */
		APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
	}

	export interface GetAppResponse {

		/**
		 * Provides information about an application.
		 * Required
		 */
		ApplicationResponse: ApplicationResponse;
	}

	export interface GetApplicationDateRangeKpiResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.
		 * Required
		 */
		ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse;
	}


	/** Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query. */
	export interface ApplicationDateRangeKpiResponse {
		ApplicationId: string;
		EndTime: Date;
		KpiName: string;

		/**
		 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
		 * Required
		 */
		KpiResult: BaseKpiResult;
		NextToken?: string;
		StartTime: Date;
	}


	/** Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey. */
	export interface BaseKpiResult {
		Rows: Array<ResultRow>;
	}


	/** Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey. */
	export interface ResultRow {
		GroupedBys: Array<ResultRowValue>;
		Values: Array<ResultRowValue>;
	}


	/** Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey. */
	export interface ResultRowValue {
		Key: string;
		Type: string;
		Value: string;
	}

	export interface GetApplicationSettingsResponse {

		/**
		 * Provides information about an application, including the default settings for an application.
		 * Required
		 */
		ApplicationSettingsResource: ApplicationSettingsResource;
	}


	/** Provides information about an application, including the default settings for an application. */
	export interface ApplicationSettingsResource {
		ApplicationId: string;

		/** Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign. */
		CampaignHook?: CampaignHook;
		LastModifiedDate?: string;

		/** For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns and journeys in the application can send. */
		Limits?: CampaignLimits;

		/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
		QuietTime?: QuietTime;
	}

	export interface GetAppsResponse {

		/**
		 * Provides information about all of your applications.
		 * Required
		 */
		ApplicationsResponse: ApplicationsResponse;
	}


	/** Provides information about all of your applications. */
	export interface ApplicationsResponse {
		Item?: Array<ApplicationResponse>;
		NextToken?: string;
	}

	export interface GetBaiduChannelResponse {

		/**
		 * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
		 * Required
		 */
		BaiduChannelResponse: BaiduChannelResponse;
	}

	export interface GetCampaignResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a campaign.
		 * Required
		 */
		CampaignResponse: CampaignResponse;
	}

	export interface GetCampaignActivitiesResponse {

		/**
		 * Provides information about the activities that were performed by a campaign.
		 * Required
		 */
		ActivitiesResponse: ActivitiesResponse;
	}


	/** Provides information about the activities that were performed by a campaign. */
	export interface ActivitiesResponse {
		Item: Array<ActivityResponse>;
		NextToken?: string;
	}


	/** Provides information about an activity that was performed by a campaign. */
	export interface ActivityResponse {
		ApplicationId: string;
		CampaignId: string;
		End?: string;
		Id: string;
		Result?: string;
		ScheduledStart?: string;
		Start?: string;
		State?: string;
		SuccessfulEndpointCount?: number;
		TimezonesCompletedCount?: number;
		TimezonesTotalCount?: number;
		TotalEndpointCount?: number;
		TreatmentId?: string;
	}

	export interface GetCampaignDateRangeKpiResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.
		 * Required
		 */
		CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse;
	}


	/** Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query. */
	export interface CampaignDateRangeKpiResponse {
		ApplicationId: string;
		CampaignId: string;
		EndTime: Date;
		KpiName: string;

		/**
		 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
		 * Required
		 */
		KpiResult: BaseKpiResult;
		NextToken?: string;
		StartTime: Date;
	}

	export interface GetCampaignVersionResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a campaign.
		 * Required
		 */
		CampaignResponse: CampaignResponse;
	}

	export interface GetCampaignVersionsResponse {

		/**
		 * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
		 * Required
		 */
		CampaignsResponse: CampaignsResponse;
	}


	/** Provides information about the configuration and other settings for all the campaigns that are associated with an application. */
	export interface CampaignsResponse {
		Item: Array<CampaignResponse>;
		NextToken?: string;
	}

	export interface GetCampaignsResponse {

		/**
		 * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
		 * Required
		 */
		CampaignsResponse: CampaignsResponse;
	}

	export interface GetChannelsResponse {

		/**
		 * Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
		 * Required
		 */
		ChannelsResponse: ChannelsResponse;
	}


	/** Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application. */
	export interface ChannelsResponse {
		Channels: MapOfChannelResponse;
	}

	export interface MapOfChannelResponse {
	}

	export interface GetEmailChannelResponse {

		/**
		 * Provides information about the status and settings of the email channel for an application.
		 * Required
		 */
		EmailChannelResponse: EmailChannelResponse;
	}

	export interface GetEmailTemplateResponse {

		/**
		 * Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.
		 * Required
		 */
		EmailTemplateResponse: EmailTemplateResponse;
	}


	/** Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel. */
	export interface EmailTemplateResponse {
		Arn?: string;
		CreationDate: string;
		DefaultSubstitutions?: string;
		HtmlPart?: string;
		LastModifiedDate: string;
		RecommenderId?: string;
		Subject?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		TemplateName: string;
		TemplateType: EmailTemplateResponseTemplateType;
		TextPart?: string;
		Version?: string;
	}

	export enum EmailTemplateResponseTemplateType { EMAIL = 0, SMS = 1, VOICE = 2, PUSH = 3 }

	export interface GetEndpointResponse {

		/**
		 * Provides information about the channel type and other settings for an endpoint.
		 * Required
		 */
		EndpointResponse: EndpointResponse;
	}

	export interface GetEventStreamResponse {

		/**
		 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
		 * Required
		 */
		EventStream: EventStream;
	}

	export interface GetExportJobResponse {

		/**
		 * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
		 * Required
		 */
		ExportJobResponse: ExportJobResponse;
	}

	export interface GetExportJobsResponse {

		/**
		 * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
		 * Required
		 */
		ExportJobsResponse: ExportJobsResponse;
	}


	/** Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file. */
	export interface ExportJobsResponse {
		Item: Array<ExportJobResponse>;
		NextToken?: string;
	}

	export interface GetGcmChannelResponse {

		/**
		 * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
		 * Required
		 */
		GCMChannelResponse: GCMChannelResponse;
	}

	export interface GetImportJobResponse {

		/**
		 * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
		 * Required
		 */
		ImportJobResponse: ImportJobResponse;
	}

	export interface GetImportJobsResponse {

		/**
		 * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
		 * Required
		 */
		ImportJobsResponse: ImportJobsResponse;
	}


	/** Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files. */
	export interface ImportJobsResponse {
		Item: Array<ImportJobResponse>;
		NextToken?: string;
	}

	export interface GetJourneyResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a journey.
		 * Required
		 */
		JourneyResponse: JourneyResponse;
	}

	export interface GetJourneyDateRangeKpiResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
		 * Required
		 */
		JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponse;
	}


	/** Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query. */
	export interface JourneyDateRangeKpiResponse {
		ApplicationId: string;
		EndTime: Date;
		JourneyId: string;
		KpiName: string;

		/**
		 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey.
		 * Required
		 */
		KpiResult: BaseKpiResult;
		NextToken?: string;
		StartTime: Date;
	}

	export interface GetJourneyExecutionActivityMetricsResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
		 * Required
		 */
		JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse;
	}


	/** Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query. */
	export interface JourneyExecutionActivityMetricsResponse {
		ActivityType: string;
		ApplicationId: string;
		JourneyActivityId: string;
		JourneyId: string;
		LastEvaluatedTime: string;
		Metrics: MapOf__string;
	}

	export interface GetJourneyExecutionMetricsResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.
		 * Required
		 */
		JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponse;
	}


	/** Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query. */
	export interface JourneyExecutionMetricsResponse {
		ApplicationId: string;
		JourneyId: string;
		LastEvaluatedTime: string;
		Metrics: MapOf__string;
	}

	export interface GetPushTemplateResponse {

		/**
		 * Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.
		 * Required
		 */
		PushNotificationTemplateResponse: PushNotificationTemplateResponse;
	}


	/** Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel. */
	export interface PushNotificationTemplateResponse {

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		ADM?: AndroidPushNotificationTemplate;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel. */
		APNS?: APNSPushNotificationTemplate;
		Arn?: string;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		Baidu?: AndroidPushNotificationTemplate;
		CreationDate: string;

		/** Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel. */
		Default?: DefaultPushNotificationTemplate;
		DefaultSubstitutions?: string;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		GCM?: AndroidPushNotificationTemplate;
		LastModifiedDate: string;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		TemplateName: string;
		TemplateType: EmailTemplateResponseTemplateType;
		Version?: string;
	}

	export interface GetRecommenderConfigurationResponse {

		/**
		 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
		 * Required
		 */
		RecommenderConfigurationResponse: RecommenderConfigurationResponse;
	}

	export interface GetRecommenderConfigurationsResponse {

		/**
		 * Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
		 * Required
		 */
		ListRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse;
	}


	/** Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account. */
	export interface ListRecommenderConfigurationsResponse {
		Item: Array<RecommenderConfigurationResponse>;
		NextToken?: string;
	}

	export interface GetSegmentResponse {

		/**
		 * Provides information about the configuration, dimension, and other settings for a segment.
		 * Required
		 */
		SegmentResponse: SegmentResponse;
	}

	export interface GetSegmentExportJobsResponse {

		/**
		 * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
		 * Required
		 */
		ExportJobsResponse: ExportJobsResponse;
	}

	export interface GetSegmentImportJobsResponse {

		/**
		 * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
		 * Required
		 */
		ImportJobsResponse: ImportJobsResponse;
	}

	export interface GetSegmentVersionResponse {

		/**
		 * Provides information about the configuration, dimension, and other settings for a segment.
		 * Required
		 */
		SegmentResponse: SegmentResponse;
	}

	export interface GetSegmentVersionsResponse {

		/**
		 * Provides information about all the segments that are associated with an application.
		 * Required
		 */
		SegmentsResponse: SegmentsResponse;
	}


	/** Provides information about all the segments that are associated with an application. */
	export interface SegmentsResponse {
		Item: Array<SegmentResponse>;
		NextToken?: string;
	}

	export interface GetSegmentsResponse {

		/**
		 * Provides information about all the segments that are associated with an application.
		 * Required
		 */
		SegmentsResponse: SegmentsResponse;
	}

	export interface GetSmsChannelResponse {

		/**
		 * Provides information about the status and settings of the SMS channel for an application.
		 * Required
		 */
		SMSChannelResponse: SMSChannelResponse;
	}

	export interface GetSmsTemplateResponse {

		/**
		 * Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
		 * Required
		 */
		SMSTemplateResponse: SMSTemplateResponse;
	}


	/** Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel. */
	export interface SMSTemplateResponse {
		Arn?: string;
		Body?: string;
		CreationDate: string;
		DefaultSubstitutions?: string;
		LastModifiedDate: string;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		TemplateName: string;
		TemplateType: EmailTemplateResponseTemplateType;
		Version?: string;
	}

	export interface GetUserEndpointsResponse {

		/**
		 * Provides information about all the endpoints that are associated with a user ID.
		 * Required
		 */
		EndpointsResponse: EndpointsResponse;
	}

	export interface GetVoiceChannelResponse {

		/**
		 * Provides information about the status and settings of the voice channel for an application.
		 * Required
		 */
		VoiceChannelResponse: VoiceChannelResponse;
	}

	export interface GetVoiceTemplateResponse {

		/**
		 * Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.
		 * Required
		 */
		VoiceTemplateResponse: VoiceTemplateResponse;
	}


	/** Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel. */
	export interface VoiceTemplateResponse {
		Arn?: string;
		Body?: string;
		CreationDate: string;
		DefaultSubstitutions?: string;
		LanguageCode?: string;
		LastModifiedDate: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		TemplateName: string;
		TemplateType: EmailTemplateResponseTemplateType;
		Version?: string;
		VoiceId?: string;
	}

	export interface ListJourneysResponse {

		/**
		 * Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
		 * Required
		 */
		JourneysResponse: JourneysResponse;
	}


	/** Provides information about the status, configuration, and other settings for all the journeys that are associated with an application. */
	export interface JourneysResponse {
		Item: Array<JourneyResponse>;
		NextToken?: string;
	}

	export interface ListTagsForResourceResponse {

		/**
		 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
		 * Required
		 */
		TagsModel: TagsModel;
	}


	/** Specifies the tags (keys and values) for an application, campaign, message template, or segment. */
	export interface TagsModel {
		tags: MapOf__string;
	}

	export interface ListTemplateVersionsResponse {

		/**
		 * Provides information about all the versions of a specific message template.
		 * Required
		 */
		TemplateVersionsResponse: TemplateVersionsResponse;
	}


	/** Provides information about all the versions of a specific message template. */
	export interface TemplateVersionsResponse {
		Item: Array<TemplateVersionResponse>;
		Message?: string;
		NextToken?: string;
		RequestID?: string;
	}


	/** Provides information about a specific version of a message template. */
	export interface TemplateVersionResponse {
		CreationDate: string;
		DefaultSubstitutions?: string;
		LastModifiedDate: string;
		TemplateDescription?: string;
		TemplateName: string;
		TemplateType: string;
		Version?: string;
	}

	export interface ListTemplatesResponse {

		/**
		 * Provides information about all the message templates that are associated with your Amazon Pinpoint account.
		 * Required
		 */
		TemplatesResponse: TemplatesResponse;
	}


	/** Provides information about all the message templates that are associated with your Amazon Pinpoint account. */
	export interface TemplatesResponse {
		Item: Array<TemplateResponse>;
		NextToken?: string;
	}


	/** Provides information about a message template that's associated with your Amazon Pinpoint account. */
	export interface TemplateResponse {
		Arn?: string;
		CreationDate: string;
		DefaultSubstitutions?: string;
		LastModifiedDate: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		TemplateName: string;
		TemplateType: EmailTemplateResponseTemplateType;
		Version?: string;
	}

	export interface PhoneNumberValidateResponse {

		/**
		 * Provides information about a phone number.
		 * Required
		 */
		NumberValidateResponse: NumberValidateResponse;
	}


	/** Provides information about a phone number. */
	export interface NumberValidateResponse {
		Carrier?: string;
		City?: string;
		CleansedPhoneNumberE164?: string;
		CleansedPhoneNumberNational?: string;
		Country?: string;
		CountryCodeIso2?: string;
		CountryCodeNumeric?: string;
		County?: string;
		OriginalCountryCodeIso2?: string;
		OriginalPhoneNumber?: string;
		PhoneType?: string;
		PhoneTypeCode?: number;
		Timezone?: string;
		ZipCode?: string;
	}

	export interface PutEventStreamResponse {

		/**
		 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
		 * Required
		 */
		EventStream: EventStream;
	}

	export interface PutEventsResponse {

		/**
		 * Provides information about endpoints and the events that they're associated with.
		 * Required
		 */
		EventsResponse: EventsResponse;
	}


	/** Provides information about endpoints and the events that they're associated with. */
	export interface EventsResponse {
		Results?: MapOfItemResponse;
	}

	export interface MapOfItemResponse {
	}

	export interface MapOfEventsBatch {
	}

	export interface RemoveAttributesResponse {

		/**
		 * Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
		 * Required
		 */
		AttributesResource: AttributesResource;
	}


	/** Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application. */
	export interface AttributesResource {
		ApplicationId: string;
		AttributeType: string;
		Attributes?: Array<string>;
	}

	export interface SendMessagesResponse {

		/**
		 * Provides information about the results of a request to send a message to an endpoint address.
		 * Required
		 */
		MessageResponse: MessageResponse;
	}


	/** Provides information about the results of a request to send a message to an endpoint address. */
	export interface MessageResponse {
		ApplicationId: string;
		EndpointResult?: MapOfEndpointMessageResult;
		RequestId?: string;
		Result?: MapOfMessageResult;
	}

	export interface MapOfEndpointMessageResult {
	}

	export interface MapOfMessageResult {
	}

	export interface MapOfAddressConfiguration {
	}

	export interface MapOfEndpointSendConfiguration {
	}


	/** Specifies the settings and content for the default message and any default messages that you tailored for specific channels. */
	export interface DirectMessageConfiguration {

		/** Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel. */
		ADMMessage?: ADMMessage;

		/** Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel. */
		APNSMessage?: APNSMessage;

		/** Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel. */
		BaiduMessage?: BaiduMessage;

		/** Specifies the default message for all channels. */
		DefaultMessage?: DefaultMessage;

		/** Specifies the default settings and content for a push notification that's sent directly to an endpoint. */
		DefaultPushNotificationMessage?: DefaultPushNotificationMessage;

		/** Specifies the default settings and content for a one-time email message that's sent directly to an endpoint. */
		EmailMessage?: EmailMessage;

		/** Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. */
		GCMMessage?: GCMMessage;

		/** Specifies the default settings for a one-time SMS message that's sent directly to an endpoint. */
		SMSMessage?: SMSMessage;

		/** Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel. */
		VoiceMessage?: VoiceMessage;
	}


	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel. */
	export interface ADMMessage {
		Action?: MessageAction;
		Body?: string;
		ConsolidationKey?: string;
		Data?: MapOf__string;
		ExpiresAfter?: string;
		IconReference?: string;
		ImageIconUrl?: string;
		ImageUrl?: string;
		MD5?: string;
		RawContent?: string;
		SilentPush?: boolean;
		SmallImageIconUrl?: string;
		Sound?: string;
		Substitutions?: MapOfListOf__string;
		Title?: string;
		Url?: string;
	}


	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel. */
	export interface APNSMessage {
		APNSPushType?: string;
		Action?: MessageAction;
		Badge?: number;
		Body?: string;
		Category?: string;
		CollapseId?: string;
		Data?: MapOf__string;
		MediaUrl?: string;
		PreferredAuthenticationMethod?: string;
		Priority?: string;
		RawContent?: string;
		SilentPush?: boolean;
		Sound?: string;
		Substitutions?: MapOfListOf__string;
		ThreadId?: string;
		TimeToLive?: number;
		Title?: string;
		Url?: string;
	}


	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel. */
	export interface BaiduMessage {
		Action?: MessageAction;
		Body?: string;
		Data?: MapOf__string;
		IconReference?: string;
		ImageIconUrl?: string;
		ImageUrl?: string;
		RawContent?: string;
		SilentPush?: boolean;
		SmallImageIconUrl?: string;
		Sound?: string;
		Substitutions?: MapOfListOf__string;
		TimeToLive?: number;
		Title?: string;
		Url?: string;
	}


	/** Specifies the default message for all channels. */
	export interface DefaultMessage {
		Body?: string;
		Substitutions?: MapOfListOf__string;
	}


	/** Specifies the default settings and content for a push notification that's sent directly to an endpoint. */
	export interface DefaultPushNotificationMessage {
		Action?: MessageAction;
		Body?: string;
		Data?: MapOf__string;
		SilentPush?: boolean;
		Substitutions?: MapOfListOf__string;
		Title?: string;
		Url?: string;
	}


	/** Specifies the default settings and content for a one-time email message that's sent directly to an endpoint. */
	export interface EmailMessage {
		Body?: string;
		FeedbackForwardingAddress?: string;
		FromAddress?: string;

		/** Specifies the contents of an email message, represented as a raw MIME message. */
		RawEmail?: RawEmail;
		ReplyToAddresses?: Array<string>;

		/** Specifies the contents of an email message, composed of a subject, a text part, and an HTML part. */
		SimpleEmail?: SimpleEmail;
		Substitutions?: MapOfListOf__string;
	}


	/** Specifies the contents of an email message, represented as a raw MIME message. */
	export interface RawEmail {
		Data?: string;
	}


	/** Specifies the contents of an email message, composed of a subject, a text part, and an HTML part. */
	export interface SimpleEmail {

		/** Specifies the subject or body of an email message, represented as textual email data and the applicable character set. */
		HtmlPart?: SimpleEmailPart;

		/** Specifies the subject or body of an email message, represented as textual email data and the applicable character set. */
		Subject?: SimpleEmailPart;

		/** Specifies the subject or body of an email message, represented as textual email data and the applicable character set. */
		TextPart?: SimpleEmailPart;
	}


	/** Specifies the subject or body of an email message, represented as textual email data and the applicable character set. */
	export interface SimpleEmailPart {
		Charset?: string;
		Data?: string;
	}


	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. */
	export interface GCMMessage {
		Action?: MessageAction;
		Body?: string;
		CollapseKey?: string;
		Data?: MapOf__string;
		IconReference?: string;
		ImageIconUrl?: string;
		ImageUrl?: string;
		Priority?: string;
		RawContent?: string;
		RestrictedPackageName?: string;
		SilentPush?: boolean;
		SmallImageIconUrl?: string;
		Sound?: string;
		Substitutions?: MapOfListOf__string;
		TimeToLive?: number;
		Title?: string;
		Url?: string;
	}


	/** Specifies the default settings for a one-time SMS message that's sent directly to an endpoint. */
	export interface SMSMessage {
		Body?: string;
		Keyword?: string;
		MediaUrl?: string;
		MessageType?: CampaignSmsMessageMessageType;
		OriginationNumber?: string;
		SenderId?: string;
		Substitutions?: MapOfListOf__string;
	}


	/** Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel. */
	export interface VoiceMessage {
		Body?: string;
		LanguageCode?: string;
		OriginationNumber?: string;
		Substitutions?: MapOfListOf__string;
		VoiceId?: string;
	}

	export interface SendUsersMessagesResponse {

		/**
		 * Provides information about which users and endpoints a message was sent to.
		 * Required
		 */
		SendUsersMessageResponse: SendUsersMessageResponse;
	}


	/** Provides information about which users and endpoints a message was sent to. */
	export interface SendUsersMessageResponse {
		ApplicationId: string;
		RequestId?: string;
		Result?: MapOfMapOfEndpointMessageResult;
	}

	export interface MapOfMapOfEndpointMessageResult {
	}

	export interface UpdateAdmChannelResponse {

		/**
		 * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
		 * Required
		 */
		ADMChannelResponse: ADMChannelResponse;
	}

	export interface UpdateApnsChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
		 * Required
		 */
		APNSChannelResponse: APNSChannelResponse;
	}

	export interface UpdateApnsSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
		 * Required
		 */
		APNSSandboxChannelResponse: APNSSandboxChannelResponse;
	}

	export interface UpdateApnsVoipChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
		 * Required
		 */
		APNSVoipChannelResponse: APNSVoipChannelResponse;
	}

	export interface UpdateApnsVoipSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
		 * Required
		 */
		APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
	}

	export interface UpdateApplicationSettingsResponse {

		/**
		 * Provides information about an application, including the default settings for an application.
		 * Required
		 */
		ApplicationSettingsResource: ApplicationSettingsResource;
	}

	export interface UpdateBaiduChannelResponse {

		/**
		 * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
		 * Required
		 */
		BaiduChannelResponse: BaiduChannelResponse;
	}

	export interface UpdateCampaignResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a campaign.
		 * Required
		 */
		CampaignResponse: CampaignResponse;
	}

	export interface UpdateEmailChannelResponse {

		/**
		 * Provides information about the status and settings of the email channel for an application.
		 * Required
		 */
		EmailChannelResponse: EmailChannelResponse;
	}

	export interface UpdateEmailTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}

	export interface UpdateEndpointResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}

	export enum ChannelType { PUSH = 0, GCM = 1, APNS = 2, APNS_SANDBOX = 3, APNS_VOIP = 4, APNS_VOIP_SANDBOX = 5, ADM = 6, SMS = 7, VOICE = 8, EMAIL = 9, BAIDU = 10, CUSTOM = 11 }

	export interface UpdateEndpointsBatchResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}


	/** Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint. */
	export interface EndpointBatchItem {
		Address?: string;
		Attributes?: MapOfListOf__string;
		ChannelType?: __EndpointTypesElement;

		/** Specifies demographic information about an endpoint, such as the applicable time zone and platform. */
		Demographic?: EndpointDemographic;
		EffectiveDate?: string;
		EndpointStatus?: string;
		Id?: string;

		/** Specifies geographic information about an endpoint. */
		Location?: EndpointLocation;
		Metrics?: MapOf__double;
		OptOut?: string;
		RequestId?: string;

		/** Specifies data for one or more attributes that describe the user who's associated with an endpoint. */
		User?: EndpointUser;
	}

	export interface UpdateGcmChannelResponse {

		/**
		 * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
		 * Required
		 */
		GCMChannelResponse: GCMChannelResponse;
	}

	export interface UpdateJourneyResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a journey.
		 * Required
		 */
		JourneyResponse: JourneyResponse;
	}

	export interface UpdateJourneyStateResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a journey.
		 * Required
		 */
		JourneyResponse: JourneyResponse;
	}

	export interface UpdatePushTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}

	export interface UpdateRecommenderConfigurationResponse {

		/**
		 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
		 * Required
		 */
		RecommenderConfigurationResponse: RecommenderConfigurationResponse;
	}

	export interface UpdateSegmentResponse {

		/**
		 * Provides information about the configuration, dimension, and other settings for a segment.
		 * Required
		 */
		SegmentResponse: SegmentResponse;
	}

	export interface UpdateSmsChannelResponse {

		/**
		 * Provides information about the status and settings of the SMS channel for an application.
		 * Required
		 */
		SMSChannelResponse: SMSChannelResponse;
	}

	export interface UpdateSmsTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}

	export interface UpdateTemplateActiveVersionResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}

	export interface UpdateVoiceChannelResponse {

		/**
		 * Provides information about the status and settings of the voice channel for an application.
		 * Required
		 */
		VoiceChannelResponse: VoiceChannelResponse;
	}

	export interface UpdateVoiceTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}


	/** Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application. */
	export interface ADMChannelRequest {
		ClientId: string;
		ClientSecret: string;
		Enabled?: boolean;
	}

	export enum Action { OPEN_APP = 0, DEEP_LINK = 1, URL = 2 }


	/** Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application. */
	export interface APNSChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}


	/** Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application. */
	export interface APNSSandboxChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}


	/** Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application. */
	export interface APNSVoipChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}


	/** Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application. */
	export interface APNSVoipSandboxChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}


	/** The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants. */
	export interface CustomMessageActivity {
		DeliveryUri?: string;
		EndpointTypes?: Array<__EndpointTypesElement>;

		/** Specifies the message content for a custom channel message that's sent to participants in a journey. */
		MessageConfig?: JourneyCustomMessage;
		NextActivity?: string;
		TemplateName?: string;
		TemplateVersion?: string;
	}


	/** Specifies the message content for a custom channel message that's sent to participants in a journey. */
	export interface JourneyCustomMessage {
		Data?: string;
	}


	/** Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify. */
	export interface ConditionalSplitActivity {

		/** Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions. */
		Condition?: Condition;

		/** Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey. */
		EvaluationWaitTime?: WaitTime;
		FalseActivity?: string;
		TrueActivity?: string;
	}


	/** Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions. */
	export interface Condition {
		Conditions?: Array<SimpleCondition>;
		Operator?: ConditionOperator;
	}


	/** Specifies a condition to evaluate for an activity in a journey. */
	export interface SimpleCondition {

		/** Specifies the conditions to evaluate for an event that applies to an activity in a journey. */
		EventCondition?: EventCondition;

		/** Specifies a segment to associate with an activity in a journey. */
		SegmentCondition?: SegmentCondition;

		/** Specifies the dimension settings for a segment. */
		SegmentDimensions?: SegmentDimensions;
	}


	/** Specifies the conditions to evaluate for an event that applies to an activity in a journey. */
	export interface EventCondition {

		/** Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed. */
		Dimensions?: EventDimensions;
		MessageActivity?: string;
	}

	export enum ConditionOperator { ALL = 0, ANY = 1 }


	/** Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey. */
	export interface WaitTime {
		WaitFor?: string;
		WaitUntil?: string;
	}


	/** Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants. */
	export interface EmailMessageActivity {

		/** Specifies the "From" address for an email message that's sent to participants in a journey. */
		MessageConfig?: JourneyEmailMessage;
		NextActivity?: string;
		TemplateName?: string;
		TemplateVersion?: string;
	}


	/** Specifies the "From" address for an email message that's sent to participants in a journey. */
	export interface JourneyEmailMessage {
		FromAddress?: string;
	}


	/** Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants. */
	export interface HoldoutActivity {
		NextActivity?: string;
		Percentage: number;
	}


	/** Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify. */
	export interface MultiConditionalSplitActivity {
		Branches?: Array<MultiConditionalBranch>;
		DefaultActivity?: string;

		/** Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey. */
		EvaluationWaitTime?: WaitTime;
	}


	/** Specifies a condition to evaluate for an activity path in a journey. */
	export interface MultiConditionalBranch {

		/** Specifies a condition to evaluate for an activity in a journey. */
		Condition?: SimpleCondition;
		NextActivity?: string;
	}


	/** Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants. */
	export interface PushMessageActivity {

		/** Specifies the message configuration for a push notification that's sent to participants in a journey. */
		MessageConfig?: JourneyPushMessage;
		NextActivity?: string;
		TemplateName?: string;
		TemplateVersion?: string;
	}


	/** Specifies the message configuration for a push notification that's sent to participants in a journey. */
	export interface JourneyPushMessage {
		TimeToLive?: string;
	}


	/** Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify. */
	export interface RandomSplitActivity {
		Branches?: Array<RandomSplitEntry>;
	}


	/** Specifies the settings for a path in a random split activity in a journey. */
	export interface RandomSplitEntry {
		NextActivity?: string;
		Percentage?: number;
	}


	/** Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants. */
	export interface SMSMessageActivity {

		/** Specifies the sender ID and message type for an SMS message that's sent to participants in a journey. */
		MessageConfig?: JourneySMSMessage;
		NextActivity?: string;
		TemplateName?: string;
		TemplateVersion?: string;
	}


	/** Specifies the sender ID and message type for an SMS message that's sent to participants in a journey. */
	export interface JourneySMSMessage {
		MessageType?: CampaignSmsMessageMessageType;
		SenderId?: string;
	}


	/** Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey. */
	export interface WaitActivity {
		NextActivity?: string;

		/** Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey. */
		WaitTime?: WaitTime;
	}


	/** Specifies the configuration and other settings for an activity in a journey. */
	export interface Activity {

		/** The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants. */
		CUSTOM?: CustomMessageActivity;

		/** Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify. */
		ConditionalSplit?: ConditionalSplitActivity;
		Description?: string;

		/** Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants. */
		EMAIL?: EmailMessageActivity;

		/** Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants. */
		Holdout?: HoldoutActivity;

		/** Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify. */
		MultiCondition?: MultiConditionalSplitActivity;

		/** Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants. */
		PUSH?: PushMessageActivity;

		/** Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify. */
		RandomSplit?: RandomSplitActivity;

		/** Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants. */
		SMS?: SMSMessageActivity;

		/** Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey. */
		Wait?: WaitActivity;
	}


	/** Specifies address-based configuration settings for a message that's sent directly to an endpoint. */
	export interface AddressConfiguration {
		BodyOverride?: string;
		ChannelType?: __EndpointTypesElement;
		Context?: MapOf__string;
		RawContent?: string;
		Substitutions?: MapOfListOf__string;
		TitleOverride?: string;
	}

	export enum AttributeType { INCLUSIVE = 0, EXCLUSIVE = 1 }


	/** Specifies attribute-based criteria for including or excluding endpoints from a segment. */
	export interface AttributeDimension {
		AttributeType?: SetDimensionDimensionType;
		Values: Array<string>;
	}


	/** Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application. */
	export interface BaiduChannelRequest {
		ApiKey: string;
		Enabled?: boolean;
		SecretKey: string;
	}

	export enum FilterType { SYSTEM = 0, ENDPOINT = 1 }

	export enum Mode { DELIVERY = 0, FILTER = 1 }

	export enum MessageType { TRANSACTIONAL = 0, PROMOTIONAL = 1 }

	export enum CampaignStatus { SCHEDULED = 0, EXECUTING = 1, PENDING_NEXT_RUN = 2, COMPLETED = 3, PAUSED = 4, DELETED = 5 }


	/** Provides information about the general settings and status of a channel for an application. */
	export interface ChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Enabled?: boolean;
		HasCredential?: boolean;
		Id?: string;
		IsArchived?: boolean;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Version?: number;
	}

	export enum Operator { ALL = 0, ANY = 1 }


	/** Specifies the display name of an application and the tags to associate with the application. */
	export interface CreateApplicationRequest {
		Name: string;
		tags?: MapOf__string;
	}

	export interface CreateAppRequest {

		/**
		 * Specifies the display name of an application and the tags to associate with the application.
		 * Required
		 */
		CreateApplicationRequest: CreateApplicationRequest;
	}


	/** Specifies the configuration and other settings for a campaign. */
	export interface WriteCampaignRequest {
		AdditionalTreatments?: Array<WriteTreatmentResource>;

		/** Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment. */
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
		Description?: string;
		HoldoutPercent?: number;

		/** Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign. */
		Hook?: CampaignHook;
		IsPaused?: boolean;

		/** For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns and journeys in the application can send. */
		Limits?: CampaignLimits;

		/** Specifies the message configuration settings for a campaign. */
		MessageConfiguration?: MessageConfiguration;
		Name?: string;

		/** Specifies the schedule settings for a campaign. */
		Schedule?: Schedule;
		SegmentId?: string;
		SegmentVersion?: number;
		tags?: MapOf__string;

		/** Specifies the message template to use for the message, for each type of channel. */
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
	}

	export interface CreateCampaignRequest {

		/**
		 * Specifies the configuration and other settings for a campaign.
		 * Required
		 */
		WriteCampaignRequest: WriteCampaignRequest;
	}


	/** Specifies the content and settings for a message template that can be used in messages that are sent through the email channel. */
	export interface EmailTemplateRequest {
		DefaultSubstitutions?: string;
		HtmlPart?: string;
		RecommenderId?: string;
		Subject?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		TextPart?: string;
	}

	export interface CreateEmailTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
		 * Required
		 */
		EmailTemplateRequest: EmailTemplateRequest;
	}


	/** Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket. */
	export interface ExportJobRequest {
		RoleArn: string;
		S3UrlPrefix: string;
		SegmentId?: string;
		SegmentVersion?: number;
	}

	export interface CreateExportJobRequest {

		/**
		 * Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
		 * Required
		 */
		ExportJobRequest: ExportJobRequest;
	}


	/** Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket. */
	export interface ImportJobRequest {
		DefineSegment?: boolean;
		ExternalId?: string;
		Format: ImportJobResourceFormat;
		RegisterEndpoints?: boolean;
		RoleArn: string;
		S3Url: string;
		SegmentId?: string;
		SegmentName?: string;
	}

	export interface CreateImportJobRequest {

		/**
		 * Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
		 * Required
		 */
		ImportJobRequest: ImportJobRequest;
	}


	/** Specifies the configuration and other settings for a journey. */
	export interface WriteJourneyRequest {
		Activities?: MapOfActivity;
		CreationDate?: string;
		LastModifiedDate?: string;

		/** Specifies limits on the messages that a journey can send and the number of times participants can enter a journey. */
		Limits?: JourneyLimits;
		LocalTime?: boolean;
		Name: string;

		/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
		QuietTime?: QuietTime;
		RefreshFrequency?: string;

		/** Specifies the schedule settings for a journey. */
		Schedule?: JourneySchedule;
		StartActivity?: string;

		/** Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey. */
		StartCondition?: StartCondition;
		State?: JourneyResponseState;
	}

	export interface CreateJourneyRequest {

		/**
		 * Specifies the configuration and other settings for a journey.
		 * Required
		 */
		WriteJourneyRequest: WriteJourneyRequest;
	}


	/** Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel. */
	export interface PushNotificationTemplateRequest {

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		ADM?: AndroidPushNotificationTemplate;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel. */
		APNS?: APNSPushNotificationTemplate;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		Baidu?: AndroidPushNotificationTemplate;

		/** Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel. */
		Default?: DefaultPushNotificationTemplate;
		DefaultSubstitutions?: string;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		GCM?: AndroidPushNotificationTemplate;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}

	export interface CreatePushTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
		 * Required
		 */
		PushNotificationTemplateRequest: PushNotificationTemplateRequest;
	}


	/** Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model. */
	export interface CreateRecommenderConfiguration {
		Attributes?: MapOf__string;
		Description?: string;
		Name?: string;
		RecommendationProviderIdType?: string;
		RecommendationProviderRoleArn: string;
		RecommendationProviderUri: string;
		RecommendationTransformerUri?: string;
		RecommendationsDisplayName?: string;
		RecommendationsPerMessage?: number;
	}

	export interface CreateRecommenderConfigurationRequest {

		/**
		 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
		 * Required
		 */
		CreateRecommenderConfiguration: CreateRecommenderConfiguration;
	}


	/** Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both. */
	export interface WriteSegmentRequest {

		/** Specifies the dimension settings for a segment. */
		Dimensions?: SegmentDimensions;
		Name?: string;

		/** Specifies the settings that define the relationships between segment groups for a segment. */
		SegmentGroups?: SegmentGroupList;
		tags?: MapOf__string;
	}

	export interface CreateSegmentRequest {

		/**
		 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
		 * Required
		 */
		WriteSegmentRequest: WriteSegmentRequest;
	}


	/** Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel. */
	export interface SMSTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}

	export interface CreateSmsTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
		 * Required
		 */
		SMSTemplateRequest: SMSTemplateRequest;
	}


	/** Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel. */
	export interface VoiceTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		LanguageCode?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		VoiceId?: string;
	}

	export interface CreateVoiceTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
		 * Required
		 */
		VoiceTemplateRequest: VoiceTemplateRequest;
	}

	export interface DeleteAdmChannelRequest {
	}

	export interface DeleteApnsChannelRequest {
	}

	export interface DeleteApnsSandboxChannelRequest {
	}

	export interface DeleteApnsVoipChannelRequest {
	}

	export interface DeleteApnsVoipSandboxChannelRequest {
	}

	export interface DeleteAppRequest {
	}

	export interface DeleteBaiduChannelRequest {
	}

	export interface DeleteCampaignRequest {
	}

	export interface DeleteEmailChannelRequest {
	}

	export interface DeleteEmailTemplateRequest {
	}

	export interface DeleteEndpointRequest {
	}

	export interface DeleteEventStreamRequest {
	}

	export interface DeleteGcmChannelRequest {
	}

	export interface DeleteJourneyRequest {
	}

	export interface DeletePushTemplateRequest {
	}

	export interface DeleteRecommenderConfigurationRequest {
	}

	export interface DeleteSegmentRequest {
	}

	export interface DeleteSmsChannelRequest {
	}

	export interface DeleteSmsTemplateRequest {
	}

	export interface DeleteUserEndpointsRequest {
	}

	export interface DeleteVoiceChannelRequest {
	}

	export interface DeleteVoiceTemplateRequest {
	}

	export enum DeliveryStatus { SUCCESSFUL = 0, THROTTLED = 1, TEMPORARY_FAILURE = 2, PERMANENT_FAILURE = 3, UNKNOWN_FAILURE = 4, OPT_OUT = 5, DUPLICATE = 6 }

	export enum DimensionType { INCLUSIVE = 0, EXCLUSIVE = 1 }

	export enum Duration { HR_24 = 0, DAY_7 = 1, DAY_14 = 2, DAY_30 = 3 }


	/** Specifies the status and settings of the email channel for an application. */
	export interface EmailChannelRequest {
		ConfigurationSet?: string;
		Enabled?: boolean;
		FromAddress: string;
		Identity: string;
		RoleArn?: string;
	}

	export enum TemplateType { EMAIL = 0, SMS = 1, VOICE = 2, PUSH = 3 }


	/** Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint. */
	export interface EndpointBatchRequest {
		Item: Array<EndpointBatchItem>;
	}


	/** Provides the status code and message that result from processing data for an endpoint. */
	export interface EndpointItemResponse {
		Message?: string;
		StatusCode?: number;
	}


	/** Provides information about the delivery status and results of sending a message directly to an endpoint. */
	export interface EndpointMessageResult {
		Address?: string;
		DeliveryStatus: DeliveryStatus;
		MessageId?: string;
		StatusCode: number;
		StatusMessage?: string;
		UpdatedToken?: string;
	}


	/** Specifies the channel type and other settings for an endpoint. */
	export interface EndpointRequest {
		Address?: string;
		Attributes?: MapOfListOf__string;
		ChannelType?: __EndpointTypesElement;

		/** Specifies demographic information about an endpoint, such as the applicable time zone and platform. */
		Demographic?: EndpointDemographic;
		EffectiveDate?: string;
		EndpointStatus?: string;

		/** Specifies geographic information about an endpoint. */
		Location?: EndpointLocation;
		Metrics?: MapOf__double;
		OptOut?: string;
		RequestId?: string;

		/** Specifies data for one or more attributes that describe the user who's associated with an endpoint. */
		User?: EndpointUser;
	}


	/** Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint. */
	export interface EndpointSendConfiguration {
		BodyOverride?: string;
		Context?: MapOf__string;
		RawContent?: string;
		Substitutions?: MapOfListOf__string;
		TitleOverride?: string;
	}


	/** Provides information about a session. */
	export interface Session {
		Duration?: number;
		Id: string;
		StartTimestamp: string;
		StopTimestamp?: string;
	}


	/** Specifies information about an event that reports data to Amazon Pinpoint. */
	export interface Event {
		AppPackageName?: string;
		AppTitle?: string;
		AppVersionCode?: string;
		Attributes?: MapOf__string;
		ClientSdkVersion?: string;
		EventType: string;
		Metrics?: MapOf__double;
		SdkName?: string;

		/** Provides information about a session. */
		Session?: Session;
		Timestamp: string;
	}


	/** Provides the status code and message that result from processing an event. */
	export interface EventItemResponse {
		Message?: string;
		StatusCode?: number;
	}


	/** Specifies the properties and attributes of an endpoint that's associated with an event. */
	export interface PublicEndpoint {
		Address?: string;
		Attributes?: MapOfListOf__string;
		ChannelType?: __EndpointTypesElement;

		/** Specifies demographic information about an endpoint, such as the applicable time zone and platform. */
		Demographic?: EndpointDemographic;
		EffectiveDate?: string;
		EndpointStatus?: string;

		/** Specifies geographic information about an endpoint. */
		Location?: EndpointLocation;
		Metrics?: MapOf__double;
		OptOut?: string;
		RequestId?: string;

		/** Specifies data for one or more attributes that describe the user who's associated with an endpoint. */
		User?: EndpointUser;
	}

	export interface MapOfEvent {
	}


	/** Specifies a batch of endpoints and events to process. */
	export interface EventsBatch {

		/**
		 * Specifies the properties and attributes of an endpoint that's associated with an event.
		 * Required
		 */
		Endpoint: PublicEndpoint;
		Events: MapOfEvent;
	}


	/** Specifies a batch of events to process. */
	export interface EventsRequest {
		BatchItem: MapOfEventsBatch;
	}

	export enum JobStatus { CREATED = 0, PREPARING_FOR_INITIALIZATION = 1, INITIALIZING = 2, PROCESSING = 3, PENDING_JOB = 4, COMPLETING = 5, COMPLETED = 6, FAILING = 7, FAILED = 8 }

	export enum Frequency { ONCE = 0, HOURLY = 1, DAILY = 2, WEEKLY = 3, MONTHLY = 4, EVENT = 5 }


	/** Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. */
	export interface GCMChannelRequest {
		ApiKey: string;
		Enabled?: boolean;
	}

	export interface GetAdmChannelRequest {
	}

	export interface GetApnsChannelRequest {
	}

	export interface GetApnsSandboxChannelRequest {
	}

	export interface GetApnsVoipChannelRequest {
	}

	export interface GetApnsVoipSandboxChannelRequest {
	}

	export interface GetAppRequest {
	}

	export interface GetApplicationDateRangeKpiRequest {
	}

	export interface GetApplicationSettingsRequest {
	}

	export interface GetAppsRequest {
	}

	export interface GetBaiduChannelRequest {
	}

	export interface GetCampaignActivitiesRequest {
	}

	export interface GetCampaignDateRangeKpiRequest {
	}

	export interface GetCampaignRequest {
	}

	export interface GetCampaignVersionRequest {
	}

	export interface GetCampaignVersionsRequest {
	}

	export interface GetCampaignsRequest {
	}

	export interface GetChannelsRequest {
	}

	export interface GetEmailChannelRequest {
	}

	export interface GetEmailTemplateRequest {
	}

	export interface GetEndpointRequest {
	}

	export interface GetEventStreamRequest {
	}

	export interface GetExportJobRequest {
	}

	export interface GetExportJobsRequest {
	}

	export interface GetGcmChannelRequest {
	}

	export interface GetImportJobRequest {
	}

	export interface GetImportJobsRequest {
	}

	export interface GetJourneyDateRangeKpiRequest {
	}

	export interface GetJourneyExecutionActivityMetricsRequest {
	}

	export interface GetJourneyExecutionMetricsRequest {
	}

	export interface GetJourneyRequest {
	}

	export interface GetPushTemplateRequest {
	}

	export interface GetRecommenderConfigurationRequest {
	}

	export interface GetRecommenderConfigurationsRequest {
	}

	export interface GetSegmentExportJobsRequest {
	}

	export interface GetSegmentImportJobsRequest {
	}

	export interface GetSegmentRequest {
	}

	export interface GetSegmentVersionRequest {
	}

	export interface GetSegmentVersionsRequest {
	}

	export interface GetSegmentsRequest {
	}

	export interface GetSmsChannelRequest {
	}

	export interface GetSmsTemplateRequest {
	}

	export interface GetUserEndpointsRequest {
	}

	export interface GetVoiceChannelRequest {
	}

	export interface GetVoiceTemplateRequest {
	}

	export enum Include { ALL = 0, ANY = 1, NONE = 2 }

	export interface MapOfEventItemResponse {
	}


	/** Provides information about the results of a request to create or update an endpoint that's associated with an event. */
	export interface ItemResponse {

		/** Provides the status code and message that result from processing data for an endpoint. */
		EndpointItemResponse?: EndpointItemResponse;
		EventsItemResponse?: MapOfEventItemResponse;
	}


	/** Changes the status of a journey. */
	export interface JourneyStateRequest {
		State?: JourneyResponseState;
	}

	export interface ListJourneysRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface ListTemplateVersionsRequest {
	}

	export interface ListTemplatesRequest {
	}


	/** Specifies the configuration and other settings for a message. */
	export interface MessageRequest {
		Addresses?: MapOfAddressConfiguration;
		Context?: MapOf__string;
		Endpoints?: MapOfEndpointSendConfiguration;

		/**
		 * Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
		 * Required
		 */
		MessageConfiguration: DirectMessageConfiguration;

		/** Specifies the message template to use for the message, for each type of channel. */
		TemplateConfiguration?: TemplateConfiguration;
		TraceId?: string;
	}


	/** Provides information about the results of sending a message directly to an endpoint address. */
	export interface MessageResult {
		DeliveryStatus: DeliveryStatus;
		MessageId?: string;
		StatusCode: number;
		StatusMessage?: string;
		UpdatedToken?: string;
	}


	/** Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints. */
	export interface MetricDimension {
		ComparisonOperator: string;
		Value: number;
	}


	/** Specifies a phone number to validate and retrieve information about. */
	export interface NumberValidateRequest {
		IsoCountryCode?: string;
		PhoneNumber?: string;
	}

	export interface PhoneNumberValidateRequest {

		/**
		 * Specifies a phone number to validate and retrieve information about.
		 * Required
		 */
		NumberValidateRequest: NumberValidateRequest;
	}


	/** Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events. */
	export interface WriteEventStream {
		DestinationStreamArn: string;
		RoleArn: string;
	}

	export interface PutEventStreamRequest {

		/**
		 * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
		 * Required
		 */
		WriteEventStream: WriteEventStream;
	}

	export interface PutEventsRequest {

		/**
		 * Specifies a batch of events to process.
		 * Required
		 */
		EventsRequest: EventsRequest;
	}

	export enum RecencyType { ACTIVE = 0, INACTIVE = 1 }


	/** Specifies one or more attributes to remove from all the endpoints that are associated with an application. */
	export interface UpdateAttributesRequest {
		Blacklist?: Array<string>;
	}

	export interface RemoveAttributesRequest {

		/**
		 * Specifies one or more attributes to remove from all the endpoints that are associated with an application.
		 * Required
		 */
		UpdateAttributesRequest: UpdateAttributesRequest;
	}


	/** Specifies the status and settings of the SMS channel for an application. */
	export interface SMSChannelRequest {
		Enabled?: boolean;
		SenderId?: string;
		ShortCode?: string;
	}

	export enum SourceType { ALL = 0, ANY = 1, NONE = 2 }

	export enum Type { ALL = 0, ANY = 1, NONE = 2 }

	export enum SegmentType { DIMENSIONAL = 0, IMPORT = 1 }

	export interface SendMessagesRequest {

		/**
		 * Specifies the configuration and other settings for a message.
		 * Required
		 */
		MessageRequest: MessageRequest;
	}


	/** Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users. */
	export interface SendUsersMessageRequest {
		Context?: MapOf__string;

		/**
		 * Specifies the settings and content for the default message and any default messages that you tailored for specific channels.
		 * Required
		 */
		MessageConfiguration: DirectMessageConfiguration;

		/** Specifies the message template to use for the message, for each type of channel. */
		TemplateConfiguration?: TemplateConfiguration;
		TraceId?: string;
		Users: MapOfEndpointSendConfiguration;
	}

	export interface SendUsersMessagesRequest {

		/**
		 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
		 * Required
		 */
		SendUsersMessageRequest: SendUsersMessageRequest;
	}

	export interface TagResourceRequest {

		/**
		 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
		 * Required
		 */
		TagsModel: TagsModel;
	}


	/** Specifies which version of a message template to use as the active version of the template. */
	export interface TemplateActiveVersionRequest {
		Version?: string;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateAdmChannelRequest {

		/**
		 * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
		 * Required
		 */
		ADMChannelRequest: ADMChannelRequest;
	}

	export interface UpdateApnsChannelRequest {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
		 * Required
		 */
		APNSChannelRequest: APNSChannelRequest;
	}

	export interface UpdateApnsSandboxChannelRequest {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
		 * Required
		 */
		APNSSandboxChannelRequest: APNSSandboxChannelRequest;
	}

	export interface UpdateApnsVoipChannelRequest {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
		 * Required
		 */
		APNSVoipChannelRequest: APNSVoipChannelRequest;
	}

	export interface UpdateApnsVoipSandboxChannelRequest {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
		 * Required
		 */
		APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequest;
	}


	/** Specifies the default settings for an application. */
	export interface WriteApplicationSettingsRequest {

		/** Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign. */
		CampaignHook?: CampaignHook;
		CloudWatchMetricsEnabled?: boolean;

		/** For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns and journeys in the application can send. */
		Limits?: CampaignLimits;

		/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
		QuietTime?: QuietTime;
	}

	export interface UpdateApplicationSettingsRequest {

		/**
		 * Specifies the default settings for an application.
		 * Required
		 */
		WriteApplicationSettingsRequest: WriteApplicationSettingsRequest;
	}

	export interface UpdateBaiduChannelRequest {

		/**
		 * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
		 * Required
		 */
		BaiduChannelRequest: BaiduChannelRequest;
	}

	export interface UpdateCampaignRequest {

		/**
		 * Specifies the configuration and other settings for a campaign.
		 * Required
		 */
		WriteCampaignRequest: WriteCampaignRequest;
	}

	export interface UpdateEmailChannelRequest {

		/**
		 * Specifies the status and settings of the email channel for an application.
		 * Required
		 */
		EmailChannelRequest: EmailChannelRequest;
	}

	export interface UpdateEmailTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
		 * Required
		 */
		EmailTemplateRequest: EmailTemplateRequest;
	}

	export interface UpdateEndpointRequest {

		/**
		 * Specifies the channel type and other settings for an endpoint.
		 * Required
		 */
		EndpointRequest: EndpointRequest;
	}

	export interface UpdateEndpointsBatchRequest {

		/**
		 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
		 * Required
		 */
		EndpointBatchRequest: EndpointBatchRequest;
	}

	export interface UpdateGcmChannelRequest {

		/**
		 * Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
		 * Required
		 */
		GCMChannelRequest: GCMChannelRequest;
	}

	export interface UpdateJourneyRequest {

		/**
		 * Specifies the configuration and other settings for a journey.
		 * Required
		 */
		WriteJourneyRequest: WriteJourneyRequest;
	}

	export interface UpdateJourneyStateRequest {

		/**
		 * Changes the status of a journey.
		 * Required
		 */
		JourneyStateRequest: JourneyStateRequest;
	}

	export interface UpdatePushTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
		 * Required
		 */
		PushNotificationTemplateRequest: PushNotificationTemplateRequest;
	}


	/** Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model. */
	export interface UpdateRecommenderConfiguration {
		Attributes?: MapOf__string;
		Description?: string;
		Name?: string;
		RecommendationProviderIdType?: string;
		RecommendationProviderRoleArn: string;
		RecommendationProviderUri: string;
		RecommendationTransformerUri?: string;
		RecommendationsDisplayName?: string;
		RecommendationsPerMessage?: number;
	}

	export interface UpdateRecommenderConfigurationRequest {

		/**
		 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
		 * Required
		 */
		UpdateRecommenderConfiguration: UpdateRecommenderConfiguration;
	}

	export interface UpdateSegmentRequest {

		/**
		 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
		 * Required
		 */
		WriteSegmentRequest: WriteSegmentRequest;
	}

	export interface UpdateSmsChannelRequest {

		/**
		 * Specifies the status and settings of the SMS channel for an application.
		 * Required
		 */
		SMSChannelRequest: SMSChannelRequest;
	}

	export interface UpdateSmsTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
		 * Required
		 */
		SMSTemplateRequest: SMSTemplateRequest;
	}

	export interface UpdateTemplateActiveVersionRequest {

		/**
		 * Specifies which version of a message template to use as the active version of the template.
		 * Required
		 */
		TemplateActiveVersionRequest: TemplateActiveVersionRequest;
	}


	/** Specifies the status and settings of the voice channel for an application. */
	export interface VoiceChannelRequest {
		Enabled?: boolean;
	}

	export interface UpdateVoiceChannelRequest {

		/**
		 * Specifies the status and settings of the voice channel for an application.
		 * Required
		 */
		VoiceChannelRequest: VoiceChannelRequest;
	}

	export interface UpdateVoiceTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
		 * Required
		 */
		VoiceTemplateRequest: VoiceTemplateRequest;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates an application.</p>
		 * Post v1/apps
		 * @return {void} 
		 */
		CreateApp(requestBody: CreateAppPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about all the applications that are associated with your Amazon Pinpoint account.
		 * Get v1/apps
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetAppsResponse} Success
		 */
		GetApps(page_size: string, token: string): Observable<GetAppsResponse> {
			return this.http.get<GetAppsResponse>(this.baseUri + 'v1/apps?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a new campaign for an application or updates the settings of an existing campaign for an application.
		 * Post v1/apps/{application_id}/campaigns
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		CreateCampaign(application_id: string, requestBody: CreateCampaignPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/campaigns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
		 * Get v1/apps/{application_id}/campaigns
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetCampaignsResponse} Success
		 */
		GetCampaigns(application_id: string, page_size: string, token: string): Observable<GetCampaignsResponse> {
			return this.http.get<GetCampaignsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/campaigns&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a message template for messages that are sent through the email channel.
		 * Post v1/templates/{template_name}/email
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @return {void} 
		 */
		CreateEmailTemplate(template_name: string, requestBody: CreateEmailTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/email', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a message template for messages that were sent through the email channel.
		 * Delete v1/templates/{template_name}/email
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		DeleteEmailTemplate(template_name: string, version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/email&version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the content and settings of a message template for messages that are sent through the email channel.
		 * Get v1/templates/{template_name}/email
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {GetEmailTemplateResponse} Success
		 */
		GetEmailTemplate(template_name: string, version: string): Observable<GetEmailTemplateResponse> {
			return this.http.get<GetEmailTemplateResponse>(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/email&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates an existing message template for messages that are sent through the email channel.
		 * Put v1/templates/{template_name}/email
		 * @param {boolean} create_new_version <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		UpdateEmailTemplate(create_new_version: boolean, template_name: string, version: string, requestBody: UpdateEmailTemplatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/email?create_new_version=' + create_new_version + '&version=' + (version == null ? '' : encodeURIComponent(version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an export job for an application.
		 * Post v1/apps/{application_id}/jobs/export
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		CreateExportJob(application_id: string, requestBody: CreateExportJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/jobs/export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the status and settings of all the export jobs for an application.
		 * Get v1/apps/{application_id}/jobs/export
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetExportJobsResponse} Success
		 */
		GetExportJobs(application_id: string, page_size: string, token: string): Observable<GetExportJobsResponse> {
			return this.http.get<GetExportJobsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/jobs/export&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates an import job for an application.
		 * Post v1/apps/{application_id}/jobs/import
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		CreateImportJob(application_id: string, requestBody: CreateImportJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/jobs/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the status and settings of all the import jobs for an application.
		 * Get v1/apps/{application_id}/jobs/import
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetImportJobsResponse} Success
		 */
		GetImportJobs(application_id: string, page_size: string, token: string): Observable<GetImportJobsResponse> {
			return this.http.get<GetImportJobsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/jobs/import&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a journey for an application.
		 * Post v1/apps/{application_id}/journeys
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		CreateJourney(application_id: string, requestBody: CreateJourneyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/journeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.
		 * Get v1/apps/{application_id}/journeys
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {ListJourneysResponse} Success
		 */
		ListJourneys(application_id: string, page_size: string, token: string): Observable<ListJourneysResponse> {
			return this.http.get<ListJourneysResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/journeys&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a message template for messages that are sent through a push notification channel.
		 * Post v1/templates/{template_name}/push
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @return {void} 
		 */
		CreatePushTemplate(template_name: string, requestBody: CreatePushTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/push', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a message template for messages that were sent through a push notification channel.
		 * Delete v1/templates/{template_name}/push
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		DeletePushTemplate(template_name: string, version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/push&version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the content and settings of a message template for messages that are sent through a push notification channel.
		 * Get v1/templates/{template_name}/push
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {GetPushTemplateResponse} Success
		 */
		GetPushTemplate(template_name: string, version: string): Observable<GetPushTemplateResponse> {
			return this.http.get<GetPushTemplateResponse>(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/push&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates an existing message template for messages that are sent through a push notification channel.
		 * Put v1/templates/{template_name}/push
		 * @param {boolean} create_new_version <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		UpdatePushTemplate(create_new_version: boolean, template_name: string, version: string, requestBody: UpdatePushTemplatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/push?create_new_version=' + create_new_version + '&version=' + (version == null ? '' : encodeURIComponent(version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an Amazon Pinpoint configuration for a recommender model.
		 * Post v1/recommenders
		 * @return {void} 
		 */
		CreateRecommenderConfiguration(requestBody: CreateRecommenderConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/recommenders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
		 * Get v1/recommenders
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetRecommenderConfigurationsResponse} Success
		 */
		GetRecommenderConfigurations(page_size: string, token: string): Observable<GetRecommenderConfigurationsResponse> {
			return this.http.get<GetRecommenderConfigurationsResponse>(this.baseUri + 'v1/recommenders?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
		 * Post v1/apps/{application_id}/segments
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		CreateSegment(application_id: string, requestBody: CreateSegmentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/segments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
		 * Get v1/apps/{application_id}/segments
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetSegmentsResponse} Success
		 */
		GetSegments(application_id: string, page_size: string, token: string): Observable<GetSegmentsResponse> {
			return this.http.get<GetSegmentsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/segments&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a message template for messages that are sent through the SMS channel.
		 * Post v1/templates/{template_name}/sms
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @return {void} 
		 */
		CreateSmsTemplate(template_name: string, requestBody: CreateSmsTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/sms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a message template for messages that were sent through the SMS channel.
		 * Delete v1/templates/{template_name}/sms
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		DeleteSmsTemplate(template_name: string, version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/sms&version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
		 * Get v1/templates/{template_name}/sms
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {GetSmsTemplateResponse} Success
		 */
		GetSmsTemplate(template_name: string, version: string): Observable<GetSmsTemplateResponse> {
			return this.http.get<GetSmsTemplateResponse>(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/sms&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates an existing message template for messages that are sent through the SMS channel.
		 * Put v1/templates/{template_name}/sms
		 * @param {boolean} create_new_version <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		UpdateSmsTemplate(create_new_version: boolean, template_name: string, version: string, requestBody: UpdateSmsTemplatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/sms?create_new_version=' + create_new_version + '&version=' + (version == null ? '' : encodeURIComponent(version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a message template for messages that are sent through the voice channel.
		 * Post v1/templates/{template_name}/voice
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @return {void} 
		 */
		CreateVoiceTemplate(template_name: string, requestBody: CreateVoiceTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/voice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a message template for messages that were sent through the voice channel.
		 * Delete v1/templates/{template_name}/voice
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		DeleteVoiceTemplate(template_name: string, version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/voice&version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the content and settings of a message template for messages that are sent through the voice channel.
		 * Get v1/templates/{template_name}/voice
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {GetVoiceTemplateResponse} Success
		 */
		GetVoiceTemplate(template_name: string, version: string): Observable<GetVoiceTemplateResponse> {
			return this.http.get<GetVoiceTemplateResponse>(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/voice&version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates an existing message template for messages that are sent through the voice channel.
		 * Put v1/templates/{template_name}/voice
		 * @param {boolean} create_new_version <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		UpdateVoiceTemplate(create_new_version: boolean, template_name: string, version: string, requestBody: UpdateVoiceTemplatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/voice?create_new_version=' + create_new_version + '&version=' + (version == null ? '' : encodeURIComponent(version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables the ADM channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/adm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteAdmChannelResponse} Success
		 */
		DeleteAdmChannel(application_id: string): Observable<DeleteAdmChannelResponse> {
			return this.http.delete<DeleteAdmChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/adm', {});
		}

		/**
		 * Retrieves information about the status and settings of the ADM channel for an application.
		 * Get v1/apps/{application_id}/channels/adm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetAdmChannelResponse} Success
		 */
		GetAdmChannel(application_id: string): Observable<GetAdmChannelResponse> {
			return this.http.get<GetAdmChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/adm', {});
		}

		/**
		 * Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.
		 * Put v1/apps/{application_id}/channels/adm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateAdmChannelResponse} Success
		 */
		UpdateAdmChannel(application_id: string, requestBody: UpdateAdmChannelPutBody): Observable<UpdateAdmChannelResponse> {
			return this.http.put<UpdateAdmChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/adm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the APNs channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/apns
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteApnsChannelResponse} Success
		 */
		DeleteApnsChannel(application_id: string): Observable<DeleteApnsChannelResponse> {
			return this.http.delete<DeleteApnsChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns', {});
		}

		/**
		 * Retrieves information about the status and settings of the APNs channel for an application.
		 * Get v1/apps/{application_id}/channels/apns
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetApnsChannelResponse} Success
		 */
		GetApnsChannel(application_id: string): Observable<GetApnsChannelResponse> {
			return this.http.get<GetApnsChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns', {});
		}

		/**
		 * Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.
		 * Put v1/apps/{application_id}/channels/apns
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateApnsChannelResponse} Success
		 */
		UpdateApnsChannel(application_id: string, requestBody: UpdateApnsChannelPutBody): Observable<UpdateApnsChannelResponse> {
			return this.http.put<UpdateApnsChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/apns_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteApnsSandboxChannelResponse} Success
		 */
		DeleteApnsSandboxChannel(application_id: string): Observable<DeleteApnsSandboxChannelResponse> {
			return this.http.delete<DeleteApnsSandboxChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns_sandbox', {});
		}

		/**
		 * Retrieves information about the status and settings of the APNs sandbox channel for an application.
		 * Get v1/apps/{application_id}/channels/apns_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetApnsSandboxChannelResponse} Success
		 */
		GetApnsSandboxChannel(application_id: string): Observable<GetApnsSandboxChannelResponse> {
			return this.http.get<GetApnsSandboxChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns_sandbox', {});
		}

		/**
		 * Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.
		 * Put v1/apps/{application_id}/channels/apns_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateApnsSandboxChannelResponse} Success
		 */
		UpdateApnsSandboxChannel(application_id: string, requestBody: UpdateApnsSandboxChannelPutBody): Observable<UpdateApnsSandboxChannelResponse> {
			return this.http.put<UpdateApnsSandboxChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns_sandbox', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/apns_voip
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteApnsVoipChannelResponse} Success
		 */
		DeleteApnsVoipChannel(application_id: string): Observable<DeleteApnsVoipChannelResponse> {
			return this.http.delete<DeleteApnsVoipChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns_voip', {});
		}

		/**
		 * Retrieves information about the status and settings of the APNs VoIP channel for an application.
		 * Get v1/apps/{application_id}/channels/apns_voip
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetApnsVoipChannelResponse} Success
		 */
		GetApnsVoipChannel(application_id: string): Observable<GetApnsVoipChannelResponse> {
			return this.http.get<GetApnsVoipChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns_voip', {});
		}

		/**
		 * Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.
		 * Put v1/apps/{application_id}/channels/apns_voip
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateApnsVoipChannelResponse} Success
		 */
		UpdateApnsVoipChannel(application_id: string, requestBody: UpdateApnsVoipChannelPutBody): Observable<UpdateApnsVoipChannelResponse> {
			return this.http.put<UpdateApnsVoipChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns_voip', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/apns_voip_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteApnsVoipSandboxChannelResponse} Success
		 */
		DeleteApnsVoipSandboxChannel(application_id: string): Observable<DeleteApnsVoipSandboxChannelResponse> {
			return this.http.delete<DeleteApnsVoipSandboxChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns_voip_sandbox', {});
		}

		/**
		 * Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
		 * Get v1/apps/{application_id}/channels/apns_voip_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetApnsVoipSandboxChannelResponse} Success
		 */
		GetApnsVoipSandboxChannel(application_id: string): Observable<GetApnsVoipSandboxChannelResponse> {
			return this.http.get<GetApnsVoipSandboxChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns_voip_sandbox', {});
		}

		/**
		 * Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.
		 * Put v1/apps/{application_id}/channels/apns_voip_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateApnsVoipSandboxChannelResponse} Success
		 */
		UpdateApnsVoipSandboxChannel(application_id: string, requestBody: UpdateApnsVoipSandboxChannelPutBody): Observable<UpdateApnsVoipSandboxChannelResponse> {
			return this.http.put<UpdateApnsVoipSandboxChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/apns_voip_sandbox', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an application.
		 * Delete v1/apps/{application_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteAppResponse} Success
		 */
		DeleteApp(application_id: string): Observable<DeleteAppResponse> {
			return this.http.delete<DeleteAppResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)), {});
		}

		/**
		 * Retrieves information about an application.
		 * Get v1/apps/{application_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetAppResponse} Success
		 */
		GetApp(application_id: string): Observable<GetAppResponse> {
			return this.http.get<GetAppResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)), {});
		}

		/**
		 * Disables the Baidu channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/baidu
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteBaiduChannelResponse} Success
		 */
		DeleteBaiduChannel(application_id: string): Observable<DeleteBaiduChannelResponse> {
			return this.http.delete<DeleteBaiduChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/baidu', {});
		}

		/**
		 * Retrieves information about the status and settings of the Baidu channel for an application.
		 * Get v1/apps/{application_id}/channels/baidu
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetBaiduChannelResponse} Success
		 */
		GetBaiduChannel(application_id: string): Observable<GetBaiduChannelResponse> {
			return this.http.get<GetBaiduChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/baidu', {});
		}

		/**
		 * Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.
		 * Put v1/apps/{application_id}/channels/baidu
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateBaiduChannelResponse} Success
		 */
		UpdateBaiduChannel(application_id: string, requestBody: UpdateBaiduChannelPutBody): Observable<UpdateBaiduChannelResponse> {
			return this.http.put<UpdateBaiduChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/baidu', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a campaign from an application.
		 * Delete v1/apps/{application_id}/campaigns/{campaign_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} campaign_id The unique identifier for the campaign.
		 * @return {DeleteCampaignResponse} Success
		 */
		DeleteCampaign(application_id: string, campaign_id: string): Observable<DeleteCampaignResponse> {
			return this.http.delete<DeleteCampaignResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/campaigns/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)), {});
		}

		/**
		 * Retrieves information about the status, configuration, and other settings for a campaign.
		 * Get v1/apps/{application_id}/campaigns/{campaign_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} campaign_id The unique identifier for the campaign.
		 * @return {GetCampaignResponse} Success
		 */
		GetCampaign(application_id: string, campaign_id: string): Observable<GetCampaignResponse> {
			return this.http.get<GetCampaignResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/campaigns/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)), {});
		}

		/**
		 * Updates the configuration and other settings for a campaign.
		 * Put v1/apps/{application_id}/campaigns/{campaign_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} campaign_id The unique identifier for the campaign.
		 * @return {UpdateCampaignResponse} Success
		 */
		UpdateCampaign(application_id: string, campaign_id: string, requestBody: UpdateCampaignPutBody): Observable<UpdateCampaignResponse> {
			return this.http.put<UpdateCampaignResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/campaigns/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the email channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/email
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteEmailChannelResponse} Success
		 */
		DeleteEmailChannel(application_id: string): Observable<DeleteEmailChannelResponse> {
			return this.http.delete<DeleteEmailChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/email', {});
		}

		/**
		 * Retrieves information about the status and settings of the email channel for an application.
		 * Get v1/apps/{application_id}/channels/email
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetEmailChannelResponse} Success
		 */
		GetEmailChannel(application_id: string): Observable<GetEmailChannelResponse> {
			return this.http.get<GetEmailChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/email', {});
		}

		/**
		 * Enables the email channel for an application or updates the status and settings of the email channel for an application.
		 * Put v1/apps/{application_id}/channels/email
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateEmailChannelResponse} Success
		 */
		UpdateEmailChannel(application_id: string, requestBody: UpdateEmailChannelPutBody): Observable<UpdateEmailChannelResponse> {
			return this.http.put<UpdateEmailChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/email', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an endpoint from an application.
		 * Delete v1/apps/{application_id}/endpoints/{endpoint_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} endpoint_id The unique identifier for the endpoint.
		 * @return {void} 
		 */
		DeleteEndpoint(application_id: string, endpoint_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/endpoints/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the settings and attributes of a specific endpoint for an application.
		 * Get v1/apps/{application_id}/endpoints/{endpoint_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} endpoint_id The unique identifier for the endpoint.
		 * @return {GetEndpointResponse} Success
		 */
		GetEndpoint(application_id: string, endpoint_id: string): Observable<GetEndpointResponse> {
			return this.http.get<GetEndpointResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/endpoints/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)), {});
		}

		/**
		 * Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
		 * Put v1/apps/{application_id}/endpoints/{endpoint_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} endpoint_id The unique identifier for the endpoint.
		 * @return {void} 
		 */
		UpdateEndpoint(application_id: string, endpoint_id: string, requestBody: UpdateEndpointPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/endpoints/' + (endpoint_id == null ? '' : encodeURIComponent(endpoint_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the event stream for an application.
		 * Delete v1/apps/{application_id}/eventstream
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteEventStreamResponse} Success
		 */
		DeleteEventStream(application_id: string): Observable<DeleteEventStreamResponse> {
			return this.http.delete<DeleteEventStreamResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/eventstream', {});
		}

		/**
		 * Retrieves information about the event stream settings for an application.
		 * Get v1/apps/{application_id}/eventstream
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetEventStreamResponse} Success
		 */
		GetEventStream(application_id: string): Observable<GetEventStreamResponse> {
			return this.http.get<GetEventStreamResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/eventstream', {});
		}

		/**
		 * Creates a new event stream for an application or updates the settings of an existing event stream for an application.
		 * Post v1/apps/{application_id}/eventstream
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {PutEventStreamResponse} Success
		 */
		PutEventStream(application_id: string, requestBody: PutEventStreamPostBody): Observable<PutEventStreamResponse> {
			return this.http.post<PutEventStreamResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/eventstream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the GCM channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/gcm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteGcmChannelResponse} Success
		 */
		DeleteGcmChannel(application_id: string): Observable<DeleteGcmChannelResponse> {
			return this.http.delete<DeleteGcmChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/gcm', {});
		}

		/**
		 * Retrieves information about the status and settings of the GCM channel for an application.
		 * Get v1/apps/{application_id}/channels/gcm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetGcmChannelResponse} Success
		 */
		GetGcmChannel(application_id: string): Observable<GetGcmChannelResponse> {
			return this.http.get<GetGcmChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/gcm', {});
		}

		/**
		 * Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.
		 * Put v1/apps/{application_id}/channels/gcm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateGcmChannelResponse} Success
		 */
		UpdateGcmChannel(application_id: string, requestBody: UpdateGcmChannelPutBody): Observable<UpdateGcmChannelResponse> {
			return this.http.put<UpdateGcmChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/gcm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a journey from an application.
		 * Delete v1/apps/{application_id}/journeys/{journey_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @return {DeleteJourneyResponse} Success
		 */
		DeleteJourney(application_id: string, journey_id: string): Observable<DeleteJourneyResponse> {
			return this.http.delete<DeleteJourneyResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/journeys/' + (journey_id == null ? '' : encodeURIComponent(journey_id)), {});
		}

		/**
		 * Retrieves information about the status, configuration, and other settings for a journey.
		 * Get v1/apps/{application_id}/journeys/{journey_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @return {GetJourneyResponse} Success
		 */
		GetJourney(application_id: string, journey_id: string): Observable<GetJourneyResponse> {
			return this.http.get<GetJourneyResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/journeys/' + (journey_id == null ? '' : encodeURIComponent(journey_id)), {});
		}

		/**
		 * Updates the configuration and other settings for a journey.
		 * Put v1/apps/{application_id}/journeys/{journey_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @return {UpdateJourneyResponse} Success
		 */
		UpdateJourney(application_id: string, journey_id: string, requestBody: UpdateJourneyPutBody): Observable<UpdateJourneyResponse> {
			return this.http.put<UpdateJourneyResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/journeys/' + (journey_id == null ? '' : encodeURIComponent(journey_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon Pinpoint configuration for a recommender model.
		 * Delete v1/recommenders/{recommender_id}
		 * @param {string} recommender_id The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteRecommenderConfigurationResponse} Success
		 */
		DeleteRecommenderConfiguration(recommender_id: string): Observable<DeleteRecommenderConfigurationResponse> {
			return this.http.delete<DeleteRecommenderConfigurationResponse>(this.baseUri + 'v1/recommenders/' + (recommender_id == null ? '' : encodeURIComponent(recommender_id)), {});
		}

		/**
		 * Retrieves information about an Amazon Pinpoint configuration for a recommender model.
		 * Get v1/recommenders/{recommender_id}
		 * @param {string} recommender_id The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.
		 * @return {GetRecommenderConfigurationResponse} Success
		 */
		GetRecommenderConfiguration(recommender_id: string): Observable<GetRecommenderConfigurationResponse> {
			return this.http.get<GetRecommenderConfigurationResponse>(this.baseUri + 'v1/recommenders/' + (recommender_id == null ? '' : encodeURIComponent(recommender_id)), {});
		}

		/**
		 * Updates an Amazon Pinpoint configuration for a recommender model.
		 * Put v1/recommenders/{recommender_id}
		 * @param {string} recommender_id The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateRecommenderConfigurationResponse} Success
		 */
		UpdateRecommenderConfiguration(recommender_id: string, requestBody: UpdateRecommenderConfigurationPutBody): Observable<UpdateRecommenderConfigurationResponse> {
			return this.http.put<UpdateRecommenderConfigurationResponse>(this.baseUri + 'v1/recommenders/' + (recommender_id == null ? '' : encodeURIComponent(recommender_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a segment from an application.
		 * Delete v1/apps/{application_id}/segments/{segment_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} segment_id The unique identifier for the segment.
		 * @return {DeleteSegmentResponse} Success
		 */
		DeleteSegment(application_id: string, segment_id: string): Observable<DeleteSegmentResponse> {
			return this.http.delete<DeleteSegmentResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/segments/' + (segment_id == null ? '' : encodeURIComponent(segment_id)), {});
		}

		/**
		 * Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
		 * Get v1/apps/{application_id}/segments/{segment_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} segment_id The unique identifier for the segment.
		 * @return {GetSegmentResponse} Success
		 */
		GetSegment(application_id: string, segment_id: string): Observable<GetSegmentResponse> {
			return this.http.get<GetSegmentResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/segments/' + (segment_id == null ? '' : encodeURIComponent(segment_id)), {});
		}

		/**
		 * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
		 * Put v1/apps/{application_id}/segments/{segment_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} segment_id The unique identifier for the segment.
		 * @return {UpdateSegmentResponse} Success
		 */
		UpdateSegment(application_id: string, segment_id: string, requestBody: UpdateSegmentPutBody): Observable<UpdateSegmentResponse> {
			return this.http.put<UpdateSegmentResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/segments/' + (segment_id == null ? '' : encodeURIComponent(segment_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the SMS channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/sms
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteSmsChannelResponse} Success
		 */
		DeleteSmsChannel(application_id: string): Observable<DeleteSmsChannelResponse> {
			return this.http.delete<DeleteSmsChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/sms', {});
		}

		/**
		 * Retrieves information about the status and settings of the SMS channel for an application.
		 * Get v1/apps/{application_id}/channels/sms
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetSmsChannelResponse} Success
		 */
		GetSmsChannel(application_id: string): Observable<GetSmsChannelResponse> {
			return this.http.get<GetSmsChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/sms', {});
		}

		/**
		 * Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.
		 * Put v1/apps/{application_id}/channels/sms
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateSmsChannelResponse} Success
		 */
		UpdateSmsChannel(application_id: string, requestBody: UpdateSmsChannelPutBody): Observable<UpdateSmsChannelResponse> {
			return this.http.put<UpdateSmsChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/sms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes all the endpoints that are associated with a specific user ID.
		 * Delete v1/apps/{application_id}/users/{user_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} user_id The unique identifier for the user.
		 * @return {void} 
		 */
		DeleteUserEndpoints(application_id: string, user_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about all the endpoints that are associated with a specific user ID.
		 * Get v1/apps/{application_id}/users/{user_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} user_id The unique identifier for the user.
		 * @return {GetUserEndpointsResponse} Success
		 */
		GetUserEndpoints(application_id: string, user_id: string): Observable<GetUserEndpointsResponse> {
			return this.http.get<GetUserEndpointsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/users/' + (user_id == null ? '' : encodeURIComponent(user_id)), {});
		}

		/**
		 * Disables the voice channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/voice
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteVoiceChannelResponse} Success
		 */
		DeleteVoiceChannel(application_id: string): Observable<DeleteVoiceChannelResponse> {
			return this.http.delete<DeleteVoiceChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/voice', {});
		}

		/**
		 * Retrieves information about the status and settings of the voice channel for an application.
		 * Get v1/apps/{application_id}/channels/voice
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetVoiceChannelResponse} Success
		 */
		GetVoiceChannel(application_id: string): Observable<GetVoiceChannelResponse> {
			return this.http.get<GetVoiceChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/voice', {});
		}

		/**
		 * Enables the voice channel for an application or updates the status and settings of the voice channel for an application.
		 * Put v1/apps/{application_id}/channels/voice
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateVoiceChannelResponse} Success
		 */
		UpdateVoiceChannel(application_id: string, requestBody: UpdateVoiceChannelPutBody): Observable<UpdateVoiceChannelResponse> {
			return this.http.put<UpdateVoiceChannelResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels/voice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves (queries) pre-aggregated data for a standard metric that applies to an application.
		 * Get v1/apps/{application_id}/kpis/daterange/{kpi_name}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {Date} end_time The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.
		 * @param {string} kpi_name The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.
		 * @param {string} next_token The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {Date} start_time The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.
		 * @return {GetApplicationDateRangeKpiResponse} Success
		 */
		GetApplicationDateRangeKpi(application_id: string, end_time: Date, kpi_name: string, next_token: string, page_size: string, start_time: Date): Observable<GetApplicationDateRangeKpiResponse> {
			return this.http.get<GetApplicationDateRangeKpiResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/kpis/daterange/' + (kpi_name == null ? '' : encodeURIComponent(kpi_name)) + '&end_time=' + end_time.toISOString() + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&start_time=' + start_time.toISOString(), {});
		}

		/**
		 * Retrieves information about the settings for an application.
		 * Get v1/apps/{application_id}/settings
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetApplicationSettingsResponse} Success
		 */
		GetApplicationSettings(application_id: string): Observable<GetApplicationSettingsResponse> {
			return this.http.get<GetApplicationSettingsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/settings', {});
		}

		/**
		 * Updates the settings for an application.
		 * Put v1/apps/{application_id}/settings
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateApplicationSettingsResponse} Success
		 */
		UpdateApplicationSettings(application_id: string, requestBody: UpdateApplicationSettingsPutBody): Observable<UpdateApplicationSettingsResponse> {
			return this.http.put<UpdateApplicationSettingsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about all the activities for a campaign.
		 * Get v1/apps/{application_id}/campaigns/{campaign_id}/activities
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} campaign_id The unique identifier for the campaign.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetCampaignActivitiesResponse} Success
		 */
		GetCampaignActivities(application_id: string, campaign_id: string, page_size: string, token: string): Observable<GetCampaignActivitiesResponse> {
			return this.http.get<GetCampaignActivitiesResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/campaigns/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/activities&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Retrieves (queries) pre-aggregated data for a standard metric that applies to a campaign.
		 * Get v1/apps/{application_id}/campaigns/{campaign_id}/kpis/daterange/{kpi_name}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} campaign_id The unique identifier for the campaign.
		 * @param {Date} end_time The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.
		 * @param {string} kpi_name The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.
		 * @param {string} next_token The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {Date} start_time The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.
		 * @return {GetCampaignDateRangeKpiResponse} Success
		 */
		GetCampaignDateRangeKpi(application_id: string, campaign_id: string, end_time: Date, kpi_name: string, next_token: string, page_size: string, start_time: Date): Observable<GetCampaignDateRangeKpiResponse> {
			return this.http.get<GetCampaignDateRangeKpiResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/campaigns/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/kpis/daterange/' + (kpi_name == null ? '' : encodeURIComponent(kpi_name)) + '&end_time=' + end_time.toISOString() + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&start_time=' + start_time.toISOString(), {});
		}

		/**
		 * Retrieves information about the status, configuration, and other settings for a specific version of a campaign.
		 * Get v1/apps/{application_id}/campaigns/{campaign_id}/versions/{version}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} campaign_id The unique identifier for the campaign.
		 * @param {string} version The unique version number (Version property) for the campaign version.
		 * @return {GetCampaignVersionResponse} Success
		 */
		GetCampaignVersion(application_id: string, campaign_id: string, version: string): Observable<GetCampaignVersionResponse> {
			return this.http.get<GetCampaignVersionResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/campaigns/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Retrieves information about the status, configuration, and other settings for all versions of a campaign.
		 * Get v1/apps/{application_id}/campaigns/{campaign_id}/versions
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} campaign_id The unique identifier for the campaign.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetCampaignVersionsResponse} Success
		 */
		GetCampaignVersions(application_id: string, campaign_id: string, page_size: string, token: string): Observable<GetCampaignVersionsResponse> {
			return this.http.get<GetCampaignVersionsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/campaigns/' + (campaign_id == null ? '' : encodeURIComponent(campaign_id)) + '/versions&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Retrieves information about the history and status of each channel for an application.
		 * Get v1/apps/{application_id}/channels
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetChannelsResponse} Success
		 */
		GetChannels(application_id: string): Observable<GetChannelsResponse> {
			return this.http.get<GetChannelsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/channels', {});
		}

		/**
		 * Retrieves information about the status and settings of a specific export job for an application.
		 * Get v1/apps/{application_id}/jobs/export/{job_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} job_id The unique identifier for the job.
		 * @return {GetExportJobResponse} Success
		 */
		GetExportJob(application_id: string, job_id: string): Observable<GetExportJobResponse> {
			return this.http.get<GetExportJobResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/jobs/export/' + (job_id == null ? '' : encodeURIComponent(job_id)), {});
		}

		/**
		 * Retrieves information about the status and settings of a specific import job for an application.
		 * Get v1/apps/{application_id}/jobs/import/{job_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} job_id The unique identifier for the job.
		 * @return {GetImportJobResponse} Success
		 */
		GetImportJob(application_id: string, job_id: string): Observable<GetImportJobResponse> {
			return this.http.get<GetImportJobResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/jobs/import/' + (job_id == null ? '' : encodeURIComponent(job_id)), {});
		}

		/**
		 * Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.
		 * Get v1/apps/{application_id}/journeys/{journey_id}/kpis/daterange/{kpi_name}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {Date} end_time The last date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-26T20:00:00Z for 8:00 PM UTC July 26, 2019.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @param {string} kpi_name The name of the metric, also referred to as a <i>key performance indicator (KPI)</i>, to retrieve data for. This value describes the associated metric and consists of two or more terms, which are comprised of lowercase alphanumeric characters, separated by a hyphen. Examples are email-open-rate and successful-delivery-rate. For a list of valid values, see the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/analytics-standard-metrics.html">Amazon Pinpoint Developer Guide</a>.
		 * @param {string} next_token The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {Date} start_time The first date and time to retrieve data for, as part of an inclusive date range that filters the query results. This value should be in extended ISO 8601 format and use Coordinated Universal Time (UTC), for example: 2019-07-19T20:00:00Z for 8:00 PM UTC July 19, 2019. This value should also be fewer than 90 days from the current day.
		 * @return {GetJourneyDateRangeKpiResponse} Success
		 */
		GetJourneyDateRangeKpi(application_id: string, end_time: Date, journey_id: string, kpi_name: string, next_token: string, page_size: string, start_time: Date): Observable<GetJourneyDateRangeKpiResponse> {
			return this.http.get<GetJourneyDateRangeKpiResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/journeys/' + (journey_id == null ? '' : encodeURIComponent(journey_id)) + '/kpis/daterange/' + (kpi_name == null ? '' : encodeURIComponent(kpi_name)) + '&end_time=' + end_time.toISOString() + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&start_time=' + start_time.toISOString(), {});
		}

		/**
		 * Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.
		 * Get v1/apps/{application_id}/journeys/{journey_id}/activities/{journey_activity_id}/execution-metrics
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_activity_id The unique identifier for the journey activity.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @param {string} next_token The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @return {GetJourneyExecutionActivityMetricsResponse} Success
		 */
		GetJourneyExecutionActivityMetrics(application_id: string, journey_activity_id: string, journey_id: string, next_token: string, page_size: string): Observable<GetJourneyExecutionActivityMetricsResponse> {
			return this.http.get<GetJourneyExecutionActivityMetricsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/journeys/' + (journey_id == null ? '' : encodeURIComponent(journey_id)) + '/activities/' + (journey_activity_id == null ? '' : encodeURIComponent(journey_activity_id)) + '/execution-metrics&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)), {});
		}

		/**
		 * Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.
		 * Get v1/apps/{application_id}/journeys/{journey_id}/execution-metrics
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @param {string} next_token The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @return {GetJourneyExecutionMetricsResponse} Success
		 */
		GetJourneyExecutionMetrics(application_id: string, journey_id: string, next_token: string, page_size: string): Observable<GetJourneyExecutionMetricsResponse> {
			return this.http.get<GetJourneyExecutionMetricsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/journeys/' + (journey_id == null ? '' : encodeURIComponent(journey_id)) + '/execution-metrics&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)), {});
		}

		/**
		 * Retrieves information about the status and settings of the export jobs for a segment.
		 * Get v1/apps/{application_id}/segments/{segment_id}/jobs/export
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} segment_id The unique identifier for the segment.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetSegmentExportJobsResponse} Success
		 */
		GetSegmentExportJobs(application_id: string, page_size: string, segment_id: string, token: string): Observable<GetSegmentExportJobsResponse> {
			return this.http.get<GetSegmentExportJobsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/segments/' + (segment_id == null ? '' : encodeURIComponent(segment_id)) + '/jobs/export&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Retrieves information about the status and settings of the import jobs for a segment.
		 * Get v1/apps/{application_id}/segments/{segment_id}/jobs/import
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} segment_id The unique identifier for the segment.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetSegmentImportJobsResponse} Success
		 */
		GetSegmentImportJobs(application_id: string, page_size: string, segment_id: string, token: string): Observable<GetSegmentImportJobsResponse> {
			return this.http.get<GetSegmentImportJobsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/segments/' + (segment_id == null ? '' : encodeURIComponent(segment_id)) + '/jobs/import&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Retrieves information about the configuration, dimension, and other settings for a specific version of a segment that's associated with an application.
		 * Get v1/apps/{application_id}/segments/{segment_id}/versions/{version}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} segment_id The unique identifier for the segment.
		 * @param {string} version The unique version number (Version property) for the campaign version.
		 * @return {GetSegmentVersionResponse} Success
		 */
		GetSegmentVersion(application_id: string, segment_id: string, version: string): Observable<GetSegmentVersionResponse> {
			return this.http.get<GetSegmentVersionResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/segments/' + (segment_id == null ? '' : encodeURIComponent(segment_id)) + '/versions/' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Retrieves information about the configuration, dimension, and other settings for all the versions of a specific segment that's associated with an application.
		 * Get v1/apps/{application_id}/segments/{segment_id}/versions
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} segment_id The unique identifier for the segment.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetSegmentVersionsResponse} Success
		 */
		GetSegmentVersions(application_id: string, page_size: string, segment_id: string, token: string): Observable<GetSegmentVersionsResponse> {
			return this.http.get<GetSegmentVersionsResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/segments/' + (segment_id == null ? '' : encodeURIComponent(segment_id)) + '/versions&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.
		 * Get v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), {});
		}

		/**
		 * Adds one or more tags (keys and values) to an application, campaign, message template, or segment.
		 * Post v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about all the versions of a specific message template.
		 * Get v1/templates/{template_name}/{template_type}/versions
		 * @param {string} next_token The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} template_type The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.
		 * @return {ListTemplateVersionsResponse} Success
		 */
		ListTemplateVersions(next_token: string, page_size: string, template_name: string, template_type: string): Observable<ListTemplateVersionsResponse> {
			return this.http.get<ListTemplateVersionsResponse>(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/' + (template_type == null ? '' : encodeURIComponent(template_type)) + '/versions?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)), {});
		}

		/**
		 * Retrieves information about all the message templates that are associated with your Amazon Pinpoint account.
		 * Get v1/templates
		 * @param {string} next_token The  string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} prefix The substring to match in the names of the message templates to include in the results. If you specify this value, Amazon Pinpoint returns only those templates whose names begin with the value that you specify.
		 * @param {string} template_type The type of message template to include in the results. Valid values are: EMAIL, PUSH, SMS, and VOICE. To include all types of templates in the results, don't include this parameter in your request.
		 * @return {ListTemplatesResponse} Success
		 */
		ListTemplates(next_token: string, page_size: string, prefix: string, template_type: string): Observable<ListTemplatesResponse> {
			return this.http.get<ListTemplatesResponse>(this.baseUri + 'v1/templates?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)) + '&template_type=' + (template_type == null ? '' : encodeURIComponent(template_type)), {});
		}

		/**
		 * Retrieves information about a phone number.
		 * Post v1/phone/number/validate
		 * @return {PhoneNumberValidateResponse} Success
		 */
		PhoneNumberValidate(requestBody: PhoneNumberValidatePostBody): Observable<PhoneNumberValidateResponse> {
			return this.http.post<PhoneNumberValidateResponse>(this.baseUri + 'v1/phone/number/validate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new event to record for endpoints, or creates or updates endpoint data that existing events are associated with.
		 * Post v1/apps/{application_id}/events
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		PutEvents(application_id: string, requestBody: PutEventsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
		 * Put v1/apps/{application_id}/attributes/{attribute_type}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} attribute_type  <p>The type of attribute or attributes to remove. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.</p></li></ul>
		 * @return {RemoveAttributesResponse} Success
		 */
		RemoveAttributes(application_id: string, attribute_type: string, requestBody: RemoveAttributesPutBody): Observable<RemoveAttributesResponse> {
			return this.http.put<RemoveAttributesResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/attributes/' + (attribute_type == null ? '' : encodeURIComponent(attribute_type)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates and sends a direct message.
		 * Post v1/apps/{application_id}/messages
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {SendMessagesResponse} Success
		 */
		SendMessages(application_id: string, requestBody: SendMessagesPostBody): Observable<SendMessagesResponse> {
			return this.http.post<SendMessagesResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates and sends a message to a list of users.
		 * Post v1/apps/{application_id}/users-messages
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {SendUsersMessagesResponse} Success
		 */
		SendUsersMessages(application_id: string, requestBody: SendUsersMessagesPostBody): Observable<SendUsersMessagesResponse> {
			return this.http.post<SendUsersMessagesResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/users-messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags (keys and values) from an application, campaign, message template, or segment.
		 * Delete v1/tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/tags/' + (resource_arn == null ? '' : encodeURIComponent(resource_arn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
		 * Put v1/apps/{application_id}/endpoints
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		UpdateEndpointsBatch(application_id: string, requestBody: UpdateEndpointsBatchPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/endpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels (stops) an active journey.
		 * Put v1/apps/{application_id}/journeys/{journey_id}/state
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @return {UpdateJourneyStateResponse} Success
		 */
		UpdateJourneyState(application_id: string, journey_id: string, requestBody: UpdateJourneyStatePutBody): Observable<UpdateJourneyStateResponse> {
			return this.http.put<UpdateJourneyStateResponse>(this.baseUri + 'v1/apps/' + (application_id == null ? '' : encodeURIComponent(application_id)) + '/journeys/' + (journey_id == null ? '' : encodeURIComponent(journey_id)) + '/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the status of a specific version of a message template to <i>active</i>.
		 * Put v1/templates/{template_name}/{template_type}/active-version
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} template_type The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.
		 * @return {UpdateTemplateActiveVersionResponse} Success
		 */
		UpdateTemplateActiveVersion(template_name: string, template_type: string, requestBody: UpdateTemplateActiveVersionPutBody): Observable<UpdateTemplateActiveVersionResponse> {
			return this.http.put<UpdateTemplateActiveVersionResponse>(this.baseUri + 'v1/templates/' + (template_name == null ? '' : encodeURIComponent(template_name)) + '/' + (template_type == null ? '' : encodeURIComponent(template_type)) + '/active-version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateAppPostBody {

		/**
		 * Specifies the display name of an application and the tags to associate with the application.
		 * Required
		 */
		CreateApplicationRequest: CreateAppPostBodyCreateApplicationRequest;
	}

	export interface CreateAppPostBodyCreateApplicationRequest {
		Name?: string;
		tags?: MapOf__string;
	}

	export interface CreateCampaignPostBody {

		/**
		 * Specifies the configuration and other settings for a campaign.
		 * Required
		 */
		WriteCampaignRequest: CreateCampaignPostBodyWriteCampaignRequest;
	}

	export interface CreateCampaignPostBodyWriteCampaignRequest {
		AdditionalTreatments?: Array<WriteTreatmentResource>;

		/** Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment. */
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
		Description?: string;
		HoldoutPercent?: number;

		/** Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign. */
		Hook?: CampaignHook;
		IsPaused?: boolean;

		/** For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns and journeys in the application can send. */
		Limits?: CampaignLimits;

		/** Specifies the message configuration settings for a campaign. */
		MessageConfiguration?: MessageConfiguration;
		Name?: string;

		/** Specifies the schedule settings for a campaign. */
		Schedule?: Schedule;
		SegmentId?: string;
		SegmentVersion?: number;
		tags?: MapOf__string;

		/** Specifies the message template to use for the message, for each type of channel. */
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
	}

	export interface CreateEmailTemplatePostBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
		 * Required
		 */
		EmailTemplateRequest: CreateEmailTemplatePostBodyEmailTemplateRequest;
	}

	export interface CreateEmailTemplatePostBodyEmailTemplateRequest {
		DefaultSubstitutions?: string;
		HtmlPart?: string;
		RecommenderId?: string;
		Subject?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		TextPart?: string;
	}

	export interface UpdateEmailTemplatePutBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
		 * Required
		 */
		EmailTemplateRequest: UpdateEmailTemplatePutBodyEmailTemplateRequest;
	}

	export interface UpdateEmailTemplatePutBodyEmailTemplateRequest {
		DefaultSubstitutions?: string;
		HtmlPart?: string;
		RecommenderId?: string;
		Subject?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		TextPart?: string;
	}

	export interface CreateExportJobPostBody {

		/**
		 * Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
		 * Required
		 */
		ExportJobRequest: CreateExportJobPostBodyExportJobRequest;
	}

	export interface CreateExportJobPostBodyExportJobRequest {
		RoleArn?: string;
		S3UrlPrefix?: string;
		SegmentId?: string;
		SegmentVersion?: number;
	}

	export interface CreateImportJobPostBody {

		/**
		 * Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
		 * Required
		 */
		ImportJobRequest: CreateImportJobPostBodyImportJobRequest;
	}

	export interface CreateImportJobPostBodyImportJobRequest {
		DefineSegment?: boolean;
		ExternalId?: string;
		Format?: ImportJobResourceFormat;
		RegisterEndpoints?: boolean;
		RoleArn?: string;
		S3Url?: string;
		SegmentId?: string;
		SegmentName?: string;
	}

	export interface CreateJourneyPostBody {

		/**
		 * Specifies the configuration and other settings for a journey.
		 * Required
		 */
		WriteJourneyRequest: CreateJourneyPostBodyWriteJourneyRequest;
	}

	export interface CreateJourneyPostBodyWriteJourneyRequest {
		Activities?: MapOfActivity;
		CreationDate?: string;
		LastModifiedDate?: string;

		/** Specifies limits on the messages that a journey can send and the number of times participants can enter a journey. */
		Limits?: JourneyLimits;
		LocalTime?: boolean;
		Name?: string;

		/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
		QuietTime?: QuietTime;
		RefreshFrequency?: string;

		/** Specifies the schedule settings for a journey. */
		Schedule?: JourneySchedule;
		StartActivity?: string;

		/** Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey. */
		StartCondition?: StartCondition;
		State?: JourneyResponseState;
	}

	export interface CreatePushTemplatePostBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
		 * Required
		 */
		PushNotificationTemplateRequest: CreatePushTemplatePostBodyPushNotificationTemplateRequest;
	}

	export interface CreatePushTemplatePostBodyPushNotificationTemplateRequest {

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		ADM?: AndroidPushNotificationTemplate;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel. */
		APNS?: APNSPushNotificationTemplate;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		Baidu?: AndroidPushNotificationTemplate;

		/** Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel. */
		Default?: DefaultPushNotificationTemplate;
		DefaultSubstitutions?: string;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		GCM?: AndroidPushNotificationTemplate;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}

	export interface UpdatePushTemplatePutBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
		 * Required
		 */
		PushNotificationTemplateRequest: UpdatePushTemplatePutBodyPushNotificationTemplateRequest;
	}

	export interface UpdatePushTemplatePutBodyPushNotificationTemplateRequest {

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		ADM?: AndroidPushNotificationTemplate;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel. */
		APNS?: APNSPushNotificationTemplate;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		Baidu?: AndroidPushNotificationTemplate;

		/** Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel. */
		Default?: DefaultPushNotificationTemplate;
		DefaultSubstitutions?: string;

		/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
		GCM?: AndroidPushNotificationTemplate;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}

	export interface CreateRecommenderConfigurationPostBody {

		/**
		 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
		 * Required
		 */
		CreateRecommenderConfiguration: CreateRecommenderConfigurationPostBodyCreateRecommenderConfiguration;
	}

	export interface CreateRecommenderConfigurationPostBodyCreateRecommenderConfiguration {
		Attributes?: MapOf__string;
		Description?: string;
		Name?: string;
		RecommendationProviderIdType?: string;
		RecommendationProviderRoleArn?: string;
		RecommendationProviderUri?: string;
		RecommendationTransformerUri?: string;
		RecommendationsDisplayName?: string;
		RecommendationsPerMessage?: number;
	}

	export interface CreateSegmentPostBody {

		/**
		 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
		 * Required
		 */
		WriteSegmentRequest: CreateSegmentPostBodyWriteSegmentRequest;
	}

	export interface CreateSegmentPostBodyWriteSegmentRequest {

		/** Specifies the dimension settings for a segment. */
		Dimensions?: SegmentDimensions;
		Name?: string;

		/** Specifies the settings that define the relationships between segment groups for a segment. */
		SegmentGroups?: SegmentGroupList;
		tags?: MapOf__string;
	}

	export interface CreateSmsTemplatePostBody {

		/**
		 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
		 * Required
		 */
		SMSTemplateRequest: CreateSmsTemplatePostBodySMSTemplateRequest;
	}

	export interface CreateSmsTemplatePostBodySMSTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}

	export interface UpdateSmsTemplatePutBody {

		/**
		 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
		 * Required
		 */
		SMSTemplateRequest: UpdateSmsTemplatePutBodySMSTemplateRequest;
	}

	export interface UpdateSmsTemplatePutBodySMSTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}

	export interface CreateVoiceTemplatePostBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
		 * Required
		 */
		VoiceTemplateRequest: CreateVoiceTemplatePostBodyVoiceTemplateRequest;
	}

	export interface CreateVoiceTemplatePostBodyVoiceTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		LanguageCode?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		VoiceId?: string;
	}

	export interface UpdateVoiceTemplatePutBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
		 * Required
		 */
		VoiceTemplateRequest: UpdateVoiceTemplatePutBodyVoiceTemplateRequest;
	}

	export interface UpdateVoiceTemplatePutBodyVoiceTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		LanguageCode?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		VoiceId?: string;
	}

	export interface UpdateAdmChannelPutBody {

		/**
		 * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
		 * Required
		 */
		ADMChannelRequest: UpdateAdmChannelPutBodyADMChannelRequest;
	}

	export interface UpdateAdmChannelPutBodyADMChannelRequest {
		ClientId?: string;
		ClientSecret?: string;
		Enabled?: boolean;
	}

	export interface UpdateApnsChannelPutBody {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
		 * Required
		 */
		APNSChannelRequest: UpdateApnsChannelPutBodyAPNSChannelRequest;
	}

	export interface UpdateApnsChannelPutBodyAPNSChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}

	export interface UpdateApnsSandboxChannelPutBody {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
		 * Required
		 */
		APNSSandboxChannelRequest: UpdateApnsSandboxChannelPutBodyAPNSSandboxChannelRequest;
	}

	export interface UpdateApnsSandboxChannelPutBodyAPNSSandboxChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}

	export interface UpdateApnsVoipChannelPutBody {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
		 * Required
		 */
		APNSVoipChannelRequest: UpdateApnsVoipChannelPutBodyAPNSVoipChannelRequest;
	}

	export interface UpdateApnsVoipChannelPutBodyAPNSVoipChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}

	export interface UpdateApnsVoipSandboxChannelPutBody {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
		 * Required
		 */
		APNSVoipSandboxChannelRequest: UpdateApnsVoipSandboxChannelPutBodyAPNSVoipSandboxChannelRequest;
	}

	export interface UpdateApnsVoipSandboxChannelPutBodyAPNSVoipSandboxChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}

	export interface UpdateBaiduChannelPutBody {

		/**
		 * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
		 * Required
		 */
		BaiduChannelRequest: UpdateBaiduChannelPutBodyBaiduChannelRequest;
	}

	export interface UpdateBaiduChannelPutBodyBaiduChannelRequest {
		ApiKey?: string;
		Enabled?: boolean;
		SecretKey?: string;
	}

	export interface UpdateCampaignPutBody {

		/**
		 * Specifies the configuration and other settings for a campaign.
		 * Required
		 */
		WriteCampaignRequest: UpdateCampaignPutBodyWriteCampaignRequest;
	}

	export interface UpdateCampaignPutBodyWriteCampaignRequest {
		AdditionalTreatments?: Array<WriteTreatmentResource>;

		/** Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment. */
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
		Description?: string;
		HoldoutPercent?: number;

		/** Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign. */
		Hook?: CampaignHook;
		IsPaused?: boolean;

		/** For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns and journeys in the application can send. */
		Limits?: CampaignLimits;

		/** Specifies the message configuration settings for a campaign. */
		MessageConfiguration?: MessageConfiguration;
		Name?: string;

		/** Specifies the schedule settings for a campaign. */
		Schedule?: Schedule;
		SegmentId?: string;
		SegmentVersion?: number;
		tags?: MapOf__string;

		/** Specifies the message template to use for the message, for each type of channel. */
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
	}

	export interface UpdateEmailChannelPutBody {

		/**
		 * Specifies the status and settings of the email channel for an application.
		 * Required
		 */
		EmailChannelRequest: UpdateEmailChannelPutBodyEmailChannelRequest;
	}

	export interface UpdateEmailChannelPutBodyEmailChannelRequest {
		ConfigurationSet?: string;
		Enabled?: boolean;
		FromAddress?: string;
		Identity?: string;
		RoleArn?: string;
	}

	export interface UpdateEndpointPutBody {

		/**
		 * Specifies the channel type and other settings for an endpoint.
		 * Required
		 */
		EndpointRequest: UpdateEndpointPutBodyEndpointRequest;
	}

	export interface UpdateEndpointPutBodyEndpointRequest {
		Address?: string;
		Attributes?: MapOfListOf__string;
		ChannelType?: __EndpointTypesElement;

		/** Specifies demographic information about an endpoint, such as the applicable time zone and platform. */
		Demographic?: EndpointDemographic;
		EffectiveDate?: string;
		EndpointStatus?: string;

		/** Specifies geographic information about an endpoint. */
		Location?: EndpointLocation;
		Metrics?: MapOf__double;
		OptOut?: string;
		RequestId?: string;

		/** Specifies data for one or more attributes that describe the user who's associated with an endpoint. */
		User?: EndpointUser;
	}

	export interface PutEventStreamPostBody {

		/**
		 * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
		 * Required
		 */
		WriteEventStream: PutEventStreamPostBodyWriteEventStream;
	}

	export interface PutEventStreamPostBodyWriteEventStream {
		DestinationStreamArn?: string;
		RoleArn?: string;
	}

	export interface UpdateGcmChannelPutBody {

		/**
		 * Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
		 * Required
		 */
		GCMChannelRequest: UpdateGcmChannelPutBodyGCMChannelRequest;
	}

	export interface UpdateGcmChannelPutBodyGCMChannelRequest {
		ApiKey?: string;
		Enabled?: boolean;
	}

	export interface UpdateJourneyPutBody {

		/**
		 * Specifies the configuration and other settings for a journey.
		 * Required
		 */
		WriteJourneyRequest: UpdateJourneyPutBodyWriteJourneyRequest;
	}

	export interface UpdateJourneyPutBodyWriteJourneyRequest {
		Activities?: MapOfActivity;
		CreationDate?: string;
		LastModifiedDate?: string;

		/** Specifies limits on the messages that a journey can send and the number of times participants can enter a journey. */
		Limits?: JourneyLimits;
		LocalTime?: boolean;
		Name?: string;

		/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
		QuietTime?: QuietTime;
		RefreshFrequency?: string;

		/** Specifies the schedule settings for a journey. */
		Schedule?: JourneySchedule;
		StartActivity?: string;

		/** Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey. */
		StartCondition?: StartCondition;
		State?: JourneyResponseState;
	}

	export interface UpdateRecommenderConfigurationPutBody {

		/**
		 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
		 * Required
		 */
		UpdateRecommenderConfiguration: UpdateRecommenderConfigurationPutBodyUpdateRecommenderConfiguration;
	}

	export interface UpdateRecommenderConfigurationPutBodyUpdateRecommenderConfiguration {
		Attributes?: MapOf__string;
		Description?: string;
		Name?: string;
		RecommendationProviderIdType?: string;
		RecommendationProviderRoleArn?: string;
		RecommendationProviderUri?: string;
		RecommendationTransformerUri?: string;
		RecommendationsDisplayName?: string;
		RecommendationsPerMessage?: number;
	}

	export interface UpdateSegmentPutBody {

		/**
		 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
		 * Required
		 */
		WriteSegmentRequest: UpdateSegmentPutBodyWriteSegmentRequest;
	}

	export interface UpdateSegmentPutBodyWriteSegmentRequest {

		/** Specifies the dimension settings for a segment. */
		Dimensions?: SegmentDimensions;
		Name?: string;

		/** Specifies the settings that define the relationships between segment groups for a segment. */
		SegmentGroups?: SegmentGroupList;
		tags?: MapOf__string;
	}

	export interface UpdateSmsChannelPutBody {

		/**
		 * Specifies the status and settings of the SMS channel for an application.
		 * Required
		 */
		SMSChannelRequest: UpdateSmsChannelPutBodySMSChannelRequest;
	}

	export interface UpdateSmsChannelPutBodySMSChannelRequest {
		Enabled?: boolean;
		SenderId?: string;
		ShortCode?: string;
	}

	export interface UpdateVoiceChannelPutBody {

		/**
		 * Specifies the status and settings of the voice channel for an application.
		 * Required
		 */
		VoiceChannelRequest: UpdateVoiceChannelPutBodyVoiceChannelRequest;
	}

	export interface UpdateVoiceChannelPutBodyVoiceChannelRequest {
		Enabled?: boolean;
	}

	export interface UpdateApplicationSettingsPutBody {

		/**
		 * Specifies the default settings for an application.
		 * Required
		 */
		WriteApplicationSettingsRequest: UpdateApplicationSettingsPutBodyWriteApplicationSettingsRequest;
	}

	export interface UpdateApplicationSettingsPutBodyWriteApplicationSettingsRequest {

		/** Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign. */
		CampaignHook?: CampaignHook;
		CloudWatchMetricsEnabled?: boolean;

		/** For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns and journeys in the application can send. */
		Limits?: CampaignLimits;

		/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
		QuietTime?: QuietTime;
	}

	export interface TagResourcePostBody {

		/**
		 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
		 * Required
		 */
		TagsModel: TagResourcePostBodyTagsModel;
	}

	export interface TagResourcePostBodyTagsModel {
		tags?: MapOf__string;
	}

	export interface PhoneNumberValidatePostBody {

		/**
		 * Specifies a phone number to validate and retrieve information about.
		 * Required
		 */
		NumberValidateRequest: PhoneNumberValidatePostBodyNumberValidateRequest;
	}

	export interface PhoneNumberValidatePostBodyNumberValidateRequest {
		IsoCountryCode?: string;
		PhoneNumber?: string;
	}

	export interface PutEventsPostBody {

		/**
		 * Specifies a batch of events to process.
		 * Required
		 */
		EventsRequest: PutEventsPostBodyEventsRequest;
	}

	export interface PutEventsPostBodyEventsRequest {
		BatchItem?: MapOfEventsBatch;
	}

	export interface RemoveAttributesPutBody {

		/**
		 * Specifies one or more attributes to remove from all the endpoints that are associated with an application.
		 * Required
		 */
		UpdateAttributesRequest: RemoveAttributesPutBodyUpdateAttributesRequest;
	}

	export interface RemoveAttributesPutBodyUpdateAttributesRequest {
		Blacklist?: Array<string>;
	}

	export interface SendMessagesPostBody {

		/**
		 * Specifies the configuration and other settings for a message.
		 * Required
		 */
		MessageRequest: SendMessagesPostBodyMessageRequest;
	}

	export interface SendMessagesPostBodyMessageRequest {
		Addresses?: MapOfAddressConfiguration;
		Context?: MapOf__string;
		Endpoints?: MapOfEndpointSendConfiguration;

		/** Specifies the settings and content for the default message and any default messages that you tailored for specific channels. */
		MessageConfiguration?: DirectMessageConfiguration;

		/** Specifies the message template to use for the message, for each type of channel. */
		TemplateConfiguration?: TemplateConfiguration;
		TraceId?: string;
	}

	export interface SendUsersMessagesPostBody {

		/**
		 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
		 * Required
		 */
		SendUsersMessageRequest: SendUsersMessagesPostBodySendUsersMessageRequest;
	}

	export interface SendUsersMessagesPostBodySendUsersMessageRequest {
		Context?: MapOf__string;

		/** Specifies the settings and content for the default message and any default messages that you tailored for specific channels. */
		MessageConfiguration?: DirectMessageConfiguration;

		/** Specifies the message template to use for the message, for each type of channel. */
		TemplateConfiguration?: TemplateConfiguration;
		TraceId?: string;
		Users?: MapOfEndpointSendConfiguration;
	}

	export interface UpdateEndpointsBatchPutBody {

		/**
		 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
		 * Required
		 */
		EndpointBatchRequest: UpdateEndpointsBatchPutBodyEndpointBatchRequest;
	}

	export interface UpdateEndpointsBatchPutBodyEndpointBatchRequest {
		Item?: Array<EndpointBatchItem>;
	}

	export interface UpdateJourneyStatePutBody {

		/**
		 * Changes the status of a journey.
		 * Required
		 */
		JourneyStateRequest: UpdateJourneyStatePutBodyJourneyStateRequest;
	}

	export interface UpdateJourneyStatePutBodyJourneyStateRequest {
		State?: JourneyResponseState;
	}

	export interface UpdateTemplateActiveVersionPutBody {

		/**
		 * Specifies which version of a message template to use as the active version of the template.
		 * Required
		 */
		TemplateActiveVersionRequest: UpdateTemplateActiveVersionPutBodyTemplateActiveVersionRequest;
	}

	export interface UpdateTemplateActiveVersionPutBodyTemplateActiveVersionRequest {
		Version?: string;
	}

}

