import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateAppResponse {

		/**
		 * Provides information about an application.
		 * Required
		 */
		ApplicationResponse: ApplicationResponse;
	}
	export interface CreateAppResponseFormProperties {
	}
	export function CreateCreateAppResponseFormGroup() {
		return new FormGroup<CreateAppResponseFormProperties>({
		});

	}


	/** Provides information about an application. */
	export interface ApplicationResponse {

		/** Required */
		Arn: string;

		/** Required */
		Id: string;

		/** Required */
		Name: string;
		tags?: MapOf__string;
		CreationDate?: string;
	}

	/** Provides information about an application. */
	export interface ApplicationResponseFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
	}
	export function CreateApplicationResponseFormGroup() {
		return new FormGroup<ApplicationResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOf__string {
	}
	export interface MapOf__stringFormProperties {
	}
	export function CreateMapOf__stringFormGroup() {
		return new FormGroup<MapOf__stringFormProperties>({
		});

	}

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
		});

	}

	export interface PayloadTooLargeException {
	}
	export interface PayloadTooLargeExceptionFormProperties {
	}
	export function CreatePayloadTooLargeExceptionFormGroup() {
		return new FormGroup<PayloadTooLargeExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface MethodNotAllowedException {
	}
	export interface MethodNotAllowedExceptionFormProperties {
	}
	export function CreateMethodNotAllowedExceptionFormGroup() {
		return new FormGroup<MethodNotAllowedExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface CreateCampaignResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a campaign.
		 * Required
		 */
		CampaignResponse: CampaignResponse;
	}
	export interface CreateCampaignResponseFormProperties {
	}
	export function CreateCreateCampaignResponseFormGroup() {
		return new FormGroup<CreateCampaignResponseFormProperties>({
		});

	}


	/** Provides information about the status, configuration, and other settings for a campaign. */
	export interface CampaignResponse {
		AdditionalTreatments?: Array<TreatmentResource>;

		/** Required */
		ApplicationId: string;

		/** Required */
		Arn: string;

		/** Required */
		CreationDate: string;
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
		DefaultState?: CampaignState;
		Description?: string;
		HoldoutPercent?: number | null;
		Hook?: CampaignHook;

		/** Required */
		Id: string;
		IsPaused?: boolean | null;

		/** Required */
		LastModifiedDate: string;
		Limits?: CampaignLimits;
		MessageConfiguration?: MessageConfiguration;
		Name?: string;
		Schedule?: Schedule;

		/** Required */
		SegmentId: string;

		/** Required */
		SegmentVersion: number;
		State?: CampaignState;
		tags?: MapOf__string;
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
		Version?: number | null;
		Priority?: number | null;
	}

	/** Provides information about the status, configuration, and other settings for a campaign. */
	export interface CampaignResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		HoldoutPercent: FormControl<number | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		IsPaused: FormControl<boolean | null | undefined>,

		/** Required */
		LastModifiedDate: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		SegmentId: FormControl<string | null | undefined>,

		/** Required */
		SegmentVersion: FormControl<number | null | undefined>,
		TreatmentDescription: FormControl<string | null | undefined>,
		TreatmentName: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateCampaignResponseFormGroup() {
		return new FormGroup<CampaignResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			HoldoutPercent: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IsPaused: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			SegmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SegmentVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TreatmentDescription: new FormControl<string | null | undefined>(undefined),
			TreatmentName: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign. */
	export interface TreatmentResource {
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;

		/** Required */
		Id: string;
		MessageConfiguration?: MessageConfiguration;
		Schedule?: Schedule;

		/** Required */
		SizePercent: number;
		State?: CampaignState;
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
	}

	/** Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign. */
	export interface TreatmentResourceFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		SizePercent: FormControl<number | null | undefined>,
		TreatmentDescription: FormControl<string | null | undefined>,
		TreatmentName: FormControl<string | null | undefined>,
	}
	export function CreateTreatmentResourceFormGroup() {
		return new FormGroup<TreatmentResourceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SizePercent: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TreatmentDescription: new FormControl<string | null | undefined>(undefined),
			TreatmentName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment. */
	export interface CustomDeliveryConfiguration {

		/** Required */
		DeliveryUri: string;
		EndpointTypes?: Array<__EndpointTypesElement>;
	}

	/** Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment. */
	export interface CustomDeliveryConfigurationFormProperties {

		/** Required */
		DeliveryUri: FormControl<string | null | undefined>,
	}
	export function CreateCustomDeliveryConfigurationFormGroup() {
		return new FormGroup<CustomDeliveryConfigurationFormProperties>({
			DeliveryUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum __EndpointTypesElement { PUSH = 0, GCM = 1, APNS = 2, APNS_SANDBOX = 3, APNS_VOIP = 4, APNS_VOIP_SANDBOX = 5, ADM = 6, SMS = 7, VOICE = 8, EMAIL = 9, BAIDU = 10, CUSTOM = 11, IN_APP = 12 }


	/** Specifies the message configuration settings for a campaign. */
	export interface MessageConfiguration {
		ADMMessage?: Message;
		APNSMessage?: Message;
		BaiduMessage?: Message;
		CustomMessage?: CampaignCustomMessage;
		DefaultMessage?: Message;
		EmailMessage?: CampaignEmailMessage;
		GCMMessage?: Message;
		SMSMessage?: CampaignSmsMessage;
		InAppMessage?: CampaignInAppMessage;
	}

	/** Specifies the message configuration settings for a campaign. */
	export interface MessageConfigurationFormProperties {
	}
	export function CreateMessageConfigurationFormGroup() {
		return new FormGroup<MessageConfigurationFormProperties>({
		});

	}


	/** Specifies the content and settings for a push notification that's sent to recipients of a campaign. */
	export interface Message {
		Action?: Action;
		Body?: string;
		ImageIconUrl?: string;
		ImageSmallIconUrl?: string;
		ImageUrl?: string;
		JsonBody?: string;
		MediaUrl?: string;
		RawContent?: string;
		SilentPush?: boolean | null;
		TimeToLive?: number | null;
		Title?: string;
		Url?: string;
	}

	/** Specifies the content and settings for a push notification that's sent to recipients of a campaign. */
	export interface MessageFormProperties {
		Action: FormControl<Action | null | undefined>,
		Body: FormControl<string | null | undefined>,
		ImageIconUrl: FormControl<string | null | undefined>,
		ImageSmallIconUrl: FormControl<string | null | undefined>,
		ImageUrl: FormControl<string | null | undefined>,
		JsonBody: FormControl<string | null | undefined>,
		MediaUrl: FormControl<string | null | undefined>,
		RawContent: FormControl<string | null | undefined>,
		SilentPush: FormControl<boolean | null | undefined>,
		TimeToLive: FormControl<number | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateMessageFormGroup() {
		return new FormGroup<MessageFormProperties>({
			Action: new FormControl<Action | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			ImageIconUrl: new FormControl<string | null | undefined>(undefined),
			ImageSmallIconUrl: new FormControl<string | null | undefined>(undefined),
			ImageUrl: new FormControl<string | null | undefined>(undefined),
			JsonBody: new FormControl<string | null | undefined>(undefined),
			MediaUrl: new FormControl<string | null | undefined>(undefined),
			RawContent: new FormControl<string | null | undefined>(undefined),
			SilentPush: new FormControl<boolean | null | undefined>(undefined),
			TimeToLive: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Action { OPEN_APP = 0, DEEP_LINK = 1, URL = 2 }


	/** Specifies the contents of a message that's sent through a custom channel to recipients of a campaign. */
	export interface CampaignCustomMessage {
		Data?: string;
	}

	/** Specifies the contents of a message that's sent through a custom channel to recipients of a campaign. */
	export interface CampaignCustomMessageFormProperties {
		Data: FormControl<string | null | undefined>,
	}
	export function CreateCampaignCustomMessageFormGroup() {
		return new FormGroup<CampaignCustomMessageFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the content and "From" address for an email message that's sent to recipients of a campaign. */
	export interface CampaignEmailMessage {
		Body?: string;
		FromAddress?: string;
		HtmlBody?: string;
		Title?: string;
	}

	/** Specifies the content and "From" address for an email message that's sent to recipients of a campaign. */
	export interface CampaignEmailMessageFormProperties {
		Body: FormControl<string | null | undefined>,
		FromAddress: FormControl<string | null | undefined>,
		HtmlBody: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
	}
	export function CreateCampaignEmailMessageFormGroup() {
		return new FormGroup<CampaignEmailMessageFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			FromAddress: new FormControl<string | null | undefined>(undefined),
			HtmlBody: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the content and settings for an SMS message that's sent to recipients of a campaign. */
	export interface CampaignSmsMessage {
		Body?: string;
		MessageType?: MessageType;
		OriginationNumber?: string;
		SenderId?: string;
		EntityId?: string;
		TemplateId?: string;
	}

	/** Specifies the content and settings for an SMS message that's sent to recipients of a campaign. */
	export interface CampaignSmsMessageFormProperties {
		Body: FormControl<string | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
		OriginationNumber: FormControl<string | null | undefined>,
		SenderId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
	}
	export function CreateCampaignSmsMessageFormGroup() {
		return new FormGroup<CampaignSmsMessageFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			OriginationNumber: new FormControl<string | null | undefined>(undefined),
			SenderId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			TemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessageType { TRANSACTIONAL = 0, PROMOTIONAL = 1 }


	/** In-app message configuration. */
	export interface CampaignInAppMessage {
		Body?: string;
		Content?: Array<InAppMessageContent>;
		CustomConfig?: MapOf__string;
		Layout?: Layout;
	}

	/** In-app message configuration. */
	export interface CampaignInAppMessageFormProperties {
		Body: FormControl<string | null | undefined>,
		Layout: FormControl<Layout | null | undefined>,
	}
	export function CreateCampaignInAppMessageFormGroup() {
		return new FormGroup<CampaignInAppMessageFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			Layout: new FormControl<Layout | null | undefined>(undefined),
		});

	}


	/** The configuration for the message content. */
	export interface InAppMessageContent {
		BackgroundColor?: string;
		BodyConfig?: InAppMessageBodyConfig;
		HeaderConfig?: InAppMessageHeaderConfig;
		ImageUrl?: string;
		PrimaryBtn?: InAppMessageButton;
		SecondaryBtn?: InAppMessageButton;
	}

	/** The configuration for the message content. */
	export interface InAppMessageContentFormProperties {
		BackgroundColor: FormControl<string | null | undefined>,
		ImageUrl: FormControl<string | null | undefined>,
	}
	export function CreateInAppMessageContentFormGroup() {
		return new FormGroup<InAppMessageContentFormProperties>({
			BackgroundColor: new FormControl<string | null | undefined>(undefined),
			ImageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Text config for Message Body. */
	export interface InAppMessageBodyConfig {

		/** Required */
		Alignment: Alignment;

		/** Required */
		Body: string;

		/** Required */
		TextColor: string;
	}

	/** Text config for Message Body. */
	export interface InAppMessageBodyConfigFormProperties {

		/** Required */
		Alignment: FormControl<Alignment | null | undefined>,

		/** Required */
		Body: FormControl<string | null | undefined>,

		/** Required */
		TextColor: FormControl<string | null | undefined>,
	}
	export function CreateInAppMessageBodyConfigFormGroup() {
		return new FormGroup<InAppMessageBodyConfigFormProperties>({
			Alignment: new FormControl<Alignment | null | undefined>(undefined, [Validators.required]),
			Body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextColor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Alignment { LEFT = 0, CENTER = 1, RIGHT = 2 }


	/** Text config for Message Header. */
	export interface InAppMessageHeaderConfig {

		/** Required */
		Alignment: Alignment;

		/** Required */
		Header: string;

		/** Required */
		TextColor: string;
	}

	/** Text config for Message Header. */
	export interface InAppMessageHeaderConfigFormProperties {

		/** Required */
		Alignment: FormControl<Alignment | null | undefined>,

		/** Required */
		Header: FormControl<string | null | undefined>,

		/** Required */
		TextColor: FormControl<string | null | undefined>,
	}
	export function CreateInAppMessageHeaderConfigFormGroup() {
		return new FormGroup<InAppMessageHeaderConfigFormProperties>({
			Alignment: new FormControl<Alignment | null | undefined>(undefined, [Validators.required]),
			Header: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextColor: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Button Config for an in-app message. */
	export interface InAppMessageButton {
		Android?: OverrideButtonConfiguration;
		DefaultConfig?: DefaultButtonConfiguration;
		IOS?: OverrideButtonConfiguration;
		Web?: OverrideButtonConfiguration;
	}

	/** Button Config for an in-app message. */
	export interface InAppMessageButtonFormProperties {
	}
	export function CreateInAppMessageButtonFormGroup() {
		return new FormGroup<InAppMessageButtonFormProperties>({
		});

	}


	/** Override button configuration. */
	export interface OverrideButtonConfiguration {

		/** Required */
		ButtonAction: ButtonAction;
		Link?: string;
	}

	/** Override button configuration. */
	export interface OverrideButtonConfigurationFormProperties {

		/** Required */
		ButtonAction: FormControl<ButtonAction | null | undefined>,
		Link: FormControl<string | null | undefined>,
	}
	export function CreateOverrideButtonConfigurationFormGroup() {
		return new FormGroup<OverrideButtonConfigurationFormProperties>({
			ButtonAction: new FormControl<ButtonAction | null | undefined>(undefined, [Validators.required]),
			Link: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ButtonAction { LINK = 0, DEEP_LINK = 1, CLOSE = 2 }


	/** Default button configuration. */
	export interface DefaultButtonConfiguration {
		BackgroundColor?: string;
		BorderRadius?: number | null;

		/** Required */
		ButtonAction: ButtonAction;
		Link?: string;

		/** Required */
		Text: string;
		TextColor?: string;
	}

	/** Default button configuration. */
	export interface DefaultButtonConfigurationFormProperties {
		BackgroundColor: FormControl<string | null | undefined>,
		BorderRadius: FormControl<number | null | undefined>,

		/** Required */
		ButtonAction: FormControl<ButtonAction | null | undefined>,
		Link: FormControl<string | null | undefined>,

		/** Required */
		Text: FormControl<string | null | undefined>,
		TextColor: FormControl<string | null | undefined>,
	}
	export function CreateDefaultButtonConfigurationFormGroup() {
		return new FormGroup<DefaultButtonConfigurationFormProperties>({
			BackgroundColor: new FormControl<string | null | undefined>(undefined),
			BorderRadius: new FormControl<number | null | undefined>(undefined),
			ButtonAction: new FormControl<ButtonAction | null | undefined>(undefined, [Validators.required]),
			Link: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TextColor: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Layout { BOTTOM_BANNER = 0, TOP_BANNER = 1, OVERLAYS = 2, MOBILE_FEED = 3, MIDDLE_BANNER = 4, CAROUSEL = 5 }


	/** Specifies the schedule settings for a campaign. */
	export interface Schedule {
		EndTime?: string;
		EventFilter?: CampaignEventFilter;
		Frequency?: Frequency;
		IsLocalTime?: boolean | null;
		QuietTime?: QuietTime;

		/** Required */
		StartTime: string;
		Timezone?: string;
	}

	/** Specifies the schedule settings for a campaign. */
	export interface ScheduleFormProperties {
		EndTime: FormControl<string | null | undefined>,
		Frequency: FormControl<Frequency | null | undefined>,
		IsLocalTime: FormControl<boolean | null | undefined>,

		/** Required */
		StartTime: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			EndTime: new FormControl<string | null | undefined>(undefined),
			Frequency: new FormControl<Frequency | null | undefined>(undefined),
			IsLocalTime: new FormControl<boolean | null | undefined>(undefined),
			StartTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timezone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for events that cause a campaign to be sent. */
	export interface CampaignEventFilter {

		/** Required */
		Dimensions: EventDimensions;

		/** Required */
		FilterType: FilterType;
	}

	/** Specifies the settings for events that cause a campaign to be sent. */
	export interface CampaignEventFilterFormProperties {

		/** Required */
		FilterType: FormControl<FilterType | null | undefined>,
	}
	export function CreateCampaignEventFilterFormGroup() {
		return new FormGroup<CampaignEventFilterFormProperties>({
			FilterType: new FormControl<FilterType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed. */
	export interface EventDimensions {
		Attributes?: MapOfAttributeDimension;
		EventType?: SetDimension;
		Metrics?: MapOfMetricDimension;
	}

	/** Specifies the dimensions for an event filter that determines when a campaign is sent or a journey activity is performed. */
	export interface EventDimensionsFormProperties {
	}
	export function CreateEventDimensionsFormGroup() {
		return new FormGroup<EventDimensionsFormProperties>({
		});

	}

	export interface MapOfAttributeDimension {
	}
	export interface MapOfAttributeDimensionFormProperties {
	}
	export function CreateMapOfAttributeDimensionFormGroup() {
		return new FormGroup<MapOfAttributeDimensionFormProperties>({
		});

	}


	/** Specifies the dimension type and values for a segment dimension. */
	export interface SetDimension {
		DimensionType?: DimensionType;

		/** Required */
		Values: Array<string>;
	}

	/** Specifies the dimension type and values for a segment dimension. */
	export interface SetDimensionFormProperties {
		DimensionType: FormControl<DimensionType | null | undefined>,
	}
	export function CreateSetDimensionFormGroup() {
		return new FormGroup<SetDimensionFormProperties>({
			DimensionType: new FormControl<DimensionType | null | undefined>(undefined),
		});

	}

	export enum DimensionType { INCLUSIVE = 0, EXCLUSIVE = 1 }

	export interface MapOfMetricDimension {
	}
	export interface MapOfMetricDimensionFormProperties {
	}
	export function CreateMapOfMetricDimensionFormGroup() {
		return new FormGroup<MapOfMetricDimensionFormProperties>({
		});

	}

	export enum FilterType { SYSTEM = 0, ENDPOINT = 1 }

	export enum Frequency { ONCE = 0, HOURLY = 1, DAILY = 2, WEEKLY = 3, MONTHLY = 4, EVENT = 5, IN_APP_EVENT = 6 }


	/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
	export interface QuietTime {
		End?: string;
		Start?: string;
	}

	/** Specifies the start and end times that define a time range when messages aren't sent to endpoints. */
	export interface QuietTimeFormProperties {
		End: FormControl<string | null | undefined>,
		Start: FormControl<string | null | undefined>,
	}
	export function CreateQuietTimeFormGroup() {
		return new FormGroup<QuietTimeFormProperties>({
			End: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the status of a campaign. */
	export interface CampaignState {
		CampaignStatus?: CampaignStatus;
	}

	/** Provides information about the status of a campaign. */
	export interface CampaignStateFormProperties {
		CampaignStatus: FormControl<CampaignStatus | null | undefined>,
	}
	export function CreateCampaignStateFormGroup() {
		return new FormGroup<CampaignStateFormProperties>({
			CampaignStatus: new FormControl<CampaignStatus | null | undefined>(undefined),
		});

	}

	export enum CampaignStatus { SCHEDULED = 0, EXECUTING = 1, PENDING_NEXT_RUN = 2, COMPLETED = 3, PAUSED = 4, DELETED = 5, INVALID = 6 }


	/** Specifies the message template to use for the message, for each type of channel. */
	export interface TemplateConfiguration {
		EmailTemplate?: Template;
		PushTemplate?: Template;
		SMSTemplate?: Template;
		VoiceTemplate?: Template;
		InAppTemplate?: Template;
	}

	/** Specifies the message template to use for the message, for each type of channel. */
	export interface TemplateConfigurationFormProperties {
	}
	export function CreateTemplateConfigurationFormGroup() {
		return new FormGroup<TemplateConfigurationFormProperties>({
		});

	}


	/** Specifies the name and version of the message template to use for the message. */
	export interface Template {
		Name?: string;
		Version?: string;
	}

	/** Specifies the name and version of the message template to use for the message. */
	export interface TemplateFormProperties {
		Name: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign. */
	export interface CampaignHook {
		LambdaFunctionName?: string;
		Mode?: Mode;
		WebUrl?: string;
	}

	/** Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign. */
	export interface CampaignHookFormProperties {
		LambdaFunctionName: FormControl<string | null | undefined>,
		Mode: FormControl<Mode | null | undefined>,
		WebUrl: FormControl<string | null | undefined>,
	}
	export function CreateCampaignHookFormGroup() {
		return new FormGroup<CampaignHookFormProperties>({
			LambdaFunctionName: new FormControl<string | null | undefined>(undefined),
			Mode: new FormControl<Mode | null | undefined>(undefined),
			WebUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Mode { DELIVERY = 0, FILTER = 1 }


	/** For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send. */
	export interface CampaignLimits {
		Daily?: number | null;
		MaximumDuration?: number | null;
		MessagesPerSecond?: number | null;
		Total?: number | null;
		Session?: number | null;
	}

	/** For a campaign, specifies limits on the messages that the campaign can send. For an application, specifies the default limits for messages that campaigns in the application can send. */
	export interface CampaignLimitsFormProperties {
		Daily: FormControl<number | null | undefined>,
		MaximumDuration: FormControl<number | null | undefined>,
		MessagesPerSecond: FormControl<number | null | undefined>,
		Total: FormControl<number | null | undefined>,
		Session: FormControl<number | null | undefined>,
	}
	export function CreateCampaignLimitsFormGroup() {
		return new FormGroup<CampaignLimitsFormProperties>({
			Daily: new FormControl<number | null | undefined>(undefined),
			MaximumDuration: new FormControl<number | null | undefined>(undefined),
			MessagesPerSecond: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
			Session: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign. */
	export interface WriteTreatmentResource {
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
		MessageConfiguration?: MessageConfiguration;
		Schedule?: Schedule;

		/** Required */
		SizePercent: number;
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
	}

	/** Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign. */
	export interface WriteTreatmentResourceFormProperties {

		/** Required */
		SizePercent: FormControl<number | null | undefined>,
		TreatmentDescription: FormControl<string | null | undefined>,
		TreatmentName: FormControl<string | null | undefined>,
	}
	export function CreateWriteTreatmentResourceFormGroup() {
		return new FormGroup<WriteTreatmentResourceFormProperties>({
			SizePercent: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			TreatmentDescription: new FormControl<string | null | undefined>(undefined),
			TreatmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEmailTemplateResponse {

		/**
		 * Provides information about a request to create a message template.
		 * Required
		 */
		CreateTemplateMessageBody: CreateTemplateMessageBody;
	}
	export interface CreateEmailTemplateResponseFormProperties {
	}
	export function CreateCreateEmailTemplateResponseFormGroup() {
		return new FormGroup<CreateEmailTemplateResponseFormProperties>({
		});

	}


	/** Provides information about a request to create a message template. */
	export interface CreateTemplateMessageBody {
		Arn?: string;
		Message?: string;
		RequestID?: string;
	}

	/** Provides information about a request to create a message template. */
	export interface CreateTemplateMessageBodyFormProperties {
		Arn: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		RequestID: FormControl<string | null | undefined>,
	}
	export function CreateCreateTemplateMessageBodyFormGroup() {
		return new FormGroup<CreateTemplateMessageBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			RequestID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateExportJobResponse {

		/**
		 * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
		 * Required
		 */
		ExportJobResponse: ExportJobResponse;
	}
	export interface CreateExportJobResponseFormProperties {
	}
	export function CreateCreateExportJobResponseFormGroup() {
		return new FormGroup<CreateExportJobResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console. */
	export interface ExportJobResponse {

		/** Required */
		ApplicationId: string;
		CompletedPieces?: number | null;
		CompletionDate?: string;

		/** Required */
		CreationDate: string;

		/** Required */
		Definition: ExportJobResource;
		FailedPieces?: number | null;
		Failures?: Array<string>;

		/** Required */
		Id: string;

		/** Required */
		JobStatus: JobStatus;
		TotalFailures?: number | null;
		TotalPieces?: number | null;
		TotalProcessed?: number | null;

		/** Required */
		Type: string;
	}

	/** Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console. */
	export interface ExportJobResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
		CompletedPieces: FormControl<number | null | undefined>,
		CompletionDate: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,
		FailedPieces: FormControl<number | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		JobStatus: FormControl<JobStatus | null | undefined>,
		TotalFailures: FormControl<number | null | undefined>,
		TotalPieces: FormControl<number | null | undefined>,
		TotalProcessed: FormControl<number | null | undefined>,

		/** Required */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateExportJobResponseFormGroup() {
		return new FormGroup<ExportJobResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CompletedPieces: new FormControl<number | null | undefined>(undefined),
			CompletionDate: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FailedPieces: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			TotalFailures: new FormControl<number | null | undefined>(undefined),
			TotalPieces: new FormControl<number | null | undefined>(undefined),
			TotalProcessed: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console. */
	export interface ExportJobResource {

		/** Required */
		RoleArn: string;

		/** Required */
		S3UrlPrefix: string;
		SegmentId?: string;
		SegmentVersion?: number | null;
	}

	/** Provides information about the resource settings for a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console. */
	export interface ExportJobResourceFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		S3UrlPrefix: FormControl<string | null | undefined>,
		SegmentId: FormControl<string | null | undefined>,
		SegmentVersion: FormControl<number | null | undefined>,
	}
	export function CreateExportJobResourceFormGroup() {
		return new FormGroup<ExportJobResourceFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3UrlPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SegmentId: new FormControl<string | null | undefined>(undefined),
			SegmentVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum JobStatus { CREATED = 0, PREPARING_FOR_INITIALIZATION = 1, INITIALIZING = 2, PROCESSING = 3, PENDING_JOB = 4, COMPLETING = 5, COMPLETED = 6, FAILING = 7, FAILED = 8 }

	export interface CreateImportJobResponse {

		/**
		 * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
		 * Required
		 */
		ImportJobResponse: ImportJobResponse;
	}
	export interface CreateImportJobResponseFormProperties {
	}
	export function CreateCreateImportJobResponseFormGroup() {
		return new FormGroup<CreateImportJobResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console. */
	export interface ImportJobResponse {

		/** Required */
		ApplicationId: string;
		CompletedPieces?: number | null;
		CompletionDate?: string;

		/** Required */
		CreationDate: string;

		/** Required */
		Definition: ImportJobResource;
		FailedPieces?: number | null;
		Failures?: Array<string>;

		/** Required */
		Id: string;

		/** Required */
		JobStatus: JobStatus;
		TotalFailures?: number | null;
		TotalPieces?: number | null;
		TotalProcessed?: number | null;

		/** Required */
		Type: string;
	}

	/** Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console. */
	export interface ImportJobResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
		CompletedPieces: FormControl<number | null | undefined>,
		CompletionDate: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,
		FailedPieces: FormControl<number | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		JobStatus: FormControl<JobStatus | null | undefined>,
		TotalFailures: FormControl<number | null | undefined>,
		TotalPieces: FormControl<number | null | undefined>,
		TotalProcessed: FormControl<number | null | undefined>,

		/** Required */
		Type: FormControl<string | null | undefined>,
	}
	export function CreateImportJobResponseFormGroup() {
		return new FormGroup<ImportJobResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CompletedPieces: new FormControl<number | null | undefined>(undefined),
			CompletionDate: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FailedPieces: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			TotalFailures: new FormControl<number | null | undefined>(undefined),
			TotalPieces: new FormControl<number | null | undefined>(undefined),
			TotalProcessed: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console. */
	export interface ImportJobResource {
		DefineSegment?: boolean | null;
		ExternalId?: string;

		/** Required */
		Format: Format;
		RegisterEndpoints?: boolean | null;

		/** Required */
		RoleArn: string;

		/** Required */
		S3Url: string;
		SegmentId?: string;
		SegmentName?: string;
	}

	/** Provides information about the resource settings for a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console. */
	export interface ImportJobResourceFormProperties {
		DefineSegment: FormControl<boolean | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<Format | null | undefined>,
		RegisterEndpoints: FormControl<boolean | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		S3Url: FormControl<string | null | undefined>,
		SegmentId: FormControl<string | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
	}
	export function CreateImportJobResourceFormGroup() {
		return new FormGroup<ImportJobResourceFormProperties>({
			DefineSegment: new FormControl<boolean | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
			RegisterEndpoints: new FormControl<boolean | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SegmentId: new FormControl<string | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Format { CSV = 0, JSON = 1 }

	export interface CreateInAppTemplateResponse {

		/**
		 * Provides information about a request to create a message template.
		 * Required
		 */
		TemplateCreateMessageBody: TemplateCreateMessageBody;
	}
	export interface CreateInAppTemplateResponseFormProperties {
	}
	export function CreateCreateInAppTemplateResponseFormGroup() {
		return new FormGroup<CreateInAppTemplateResponseFormProperties>({
		});

	}


	/** Provides information about a request to create a message template. */
	export interface TemplateCreateMessageBody {
		Arn?: string;
		Message?: string;
		RequestID?: string;
	}

	/** Provides information about a request to create a message template. */
	export interface TemplateCreateMessageBodyFormProperties {
		Arn: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
		RequestID: FormControl<string | null | undefined>,
	}
	export function CreateTemplateCreateMessageBodyFormGroup() {
		return new FormGroup<TemplateCreateMessageBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
			RequestID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJourneyResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a journey.
		 * Required
		 */
		JourneyResponse: JourneyResponse;
	}
	export interface CreateJourneyResponseFormProperties {
	}
	export function CreateCreateJourneyResponseFormGroup() {
		return new FormGroup<CreateJourneyResponseFormProperties>({
		});

	}


	/** Provides information about the status, configuration, and other settings for a journey. */
	export interface JourneyResponse {
		Activities?: MapOfActivity;

		/** Required */
		ApplicationId: string;
		CreationDate?: string;

		/** Required */
		Id: string;
		LastModifiedDate?: string;
		Limits?: JourneyLimits;
		LocalTime?: boolean | null;

		/** Required */
		Name: string;
		QuietTime?: QuietTime;
		RefreshFrequency?: string;
		Schedule?: JourneySchedule;
		StartActivity?: string;
		StartCondition?: StartCondition;
		State?: State;
		tags?: MapOf__string;
		WaitForQuietTime?: boolean | null;
		RefreshOnSegmentUpdate?: boolean | null;
		JourneyChannelSettings?: JourneyChannelSettings;
		SendingSchedule?: boolean | null;
		OpenHours?: OpenHours;
		ClosedDays?: ClosedDays;
		TimezoneEstimationMethods?: Array<__TimezoneEstimationMethodsElement>;
	}

	/** Provides information about the status, configuration, and other settings for a journey. */
	export interface JourneyResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		LocalTime: FormControl<boolean | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		RefreshFrequency: FormControl<string | null | undefined>,
		StartActivity: FormControl<string | null | undefined>,
		State: FormControl<State | null | undefined>,
		WaitForQuietTime: FormControl<boolean | null | undefined>,
		RefreshOnSegmentUpdate: FormControl<boolean | null | undefined>,
		SendingSchedule: FormControl<boolean | null | undefined>,
	}
	export function CreateJourneyResponseFormGroup() {
		return new FormGroup<JourneyResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			LocalTime: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RefreshFrequency: new FormControl<string | null | undefined>(undefined),
			StartActivity: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
			WaitForQuietTime: new FormControl<boolean | null | undefined>(undefined),
			RefreshOnSegmentUpdate: new FormControl<boolean | null | undefined>(undefined),
			SendingSchedule: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MapOfActivity {
	}
	export interface MapOfActivityFormProperties {
	}
	export function CreateMapOfActivityFormGroup() {
		return new FormGroup<MapOfActivityFormProperties>({
		});

	}


	/** Specifies limits on the messages that a journey can send and the number of times participants can enter a journey. */
	export interface JourneyLimits {
		DailyCap?: number | null;
		EndpointReentryCap?: number | null;
		MessagesPerSecond?: number | null;
		EndpointReentryInterval?: string;
		TimeframeCap?: JourneyTimeframeCap;
		TotalCap?: number | null;
	}

	/** Specifies limits on the messages that a journey can send and the number of times participants can enter a journey. */
	export interface JourneyLimitsFormProperties {
		DailyCap: FormControl<number | null | undefined>,
		EndpointReentryCap: FormControl<number | null | undefined>,
		MessagesPerSecond: FormControl<number | null | undefined>,
		EndpointReentryInterval: FormControl<string | null | undefined>,
		TotalCap: FormControl<number | null | undefined>,
	}
	export function CreateJourneyLimitsFormGroup() {
		return new FormGroup<JourneyLimitsFormProperties>({
			DailyCap: new FormControl<number | null | undefined>(undefined),
			EndpointReentryCap: new FormControl<number | null | undefined>(undefined),
			MessagesPerSecond: new FormControl<number | null | undefined>(undefined),
			EndpointReentryInterval: new FormControl<string | null | undefined>(undefined),
			TotalCap: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The number of messages that can be sent to an endpoint during the specified timeframe for all journeys. */
	export interface JourneyTimeframeCap {
		Cap?: number | null;
		Days?: number | null;
	}

	/** The number of messages that can be sent to an endpoint during the specified timeframe for all journeys. */
	export interface JourneyTimeframeCapFormProperties {
		Cap: FormControl<number | null | undefined>,
		Days: FormControl<number | null | undefined>,
	}
	export function CreateJourneyTimeframeCapFormGroup() {
		return new FormGroup<JourneyTimeframeCapFormProperties>({
			Cap: new FormControl<number | null | undefined>(undefined),
			Days: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the schedule settings for a journey. */
	export interface JourneySchedule {
		EndTime?: Date;
		StartTime?: Date;
		Timezone?: string;
	}

	/** Specifies the schedule settings for a journey. */
	export interface JourneyScheduleFormProperties {
		EndTime: FormControl<Date | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
	}
	export function CreateJourneyScheduleFormGroup() {
		return new FormGroup<JourneyScheduleFormProperties>({
			EndTime: new FormControl<Date | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey. */
	export interface StartCondition {
		Description?: string;

		/** Specifies the settings for an event that causes a journey activity to start. */
		EventStartCondition?: EventStartCondition;
		SegmentStartCondition?: SegmentCondition;
	}

	/** Specifies the conditions for the first activity in a journey. This activity and its conditions determine which users are participants in a journey. */
	export interface StartConditionFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateStartConditionFormGroup() {
		return new FormGroup<StartConditionFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for an event that causes a journey activity to start. */
	export interface EventStartCondition {

		/** Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed. */
		EventFilter?: EventFilter;
		SegmentId?: string | null;
	}

	/** Specifies the settings for an event that causes a journey activity to start. */
	export interface EventStartConditionFormProperties {
		SegmentId: FormControl<string | null | undefined>,
	}
	export function CreateEventStartConditionFormGroup() {
		return new FormGroup<EventStartConditionFormProperties>({
			SegmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed. */
	export interface EventFilter {

		/** Required */
		Dimensions: EventDimensions;

		/** Required */
		FilterType: FilterType;
	}

	/** Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed. */
	export interface EventFilterFormProperties {

		/** Required */
		FilterType: FormControl<FilterType | null | undefined>,
	}
	export function CreateEventFilterFormGroup() {
		return new FormGroup<EventFilterFormProperties>({
			FilterType: new FormControl<FilterType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a segment to associate with an activity in a journey. */
	export interface SegmentCondition {

		/** Required */
		SegmentId: string;
	}

	/** Specifies a segment to associate with an activity in a journey. */
	export interface SegmentConditionFormProperties {

		/** Required */
		SegmentId: FormControl<string | null | undefined>,
	}
	export function CreateSegmentConditionFormGroup() {
		return new FormGroup<SegmentConditionFormProperties>({
			SegmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum State { DRAFT = 0, ACTIVE = 1, COMPLETED = 2, CANCELLED = 3, CLOSED = 4, PAUSED = 5 }


	/** The channel-specific configurations for the journey. */
	export interface JourneyChannelSettings {
		ConnectCampaignArn?: string;
		ConnectCampaignExecutionRoleArn?: string;
	}

	/** The channel-specific configurations for the journey. */
	export interface JourneyChannelSettingsFormProperties {
		ConnectCampaignArn: FormControl<string | null | undefined>,
		ConnectCampaignExecutionRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateJourneyChannelSettingsFormGroup() {
		return new FormGroup<JourneyChannelSettingsFormProperties>({
			ConnectCampaignArn: new FormControl<string | null | undefined>(undefined),
			ConnectCampaignExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the times when message are allowed to be sent to endpoints. */
	export interface OpenHours {
		EMAIL?: MapOfListOfOpenHoursRules;
		SMS?: MapOfListOfOpenHoursRules;
		PUSH?: MapOfListOfOpenHoursRules;
		VOICE?: MapOfListOfOpenHoursRules;
		CUSTOM?: MapOfListOfOpenHoursRules;
	}

	/** Specifies the times when message are allowed to be sent to endpoints. */
	export interface OpenHoursFormProperties {
	}
	export function CreateOpenHoursFormGroup() {
		return new FormGroup<OpenHoursFormProperties>({
		});

	}

	export interface MapOfListOfOpenHoursRules {
	}
	export interface MapOfListOfOpenHoursRulesFormProperties {
	}
	export function CreateMapOfListOfOpenHoursRulesFormGroup() {
		return new FormGroup<MapOfListOfOpenHoursRulesFormProperties>({
		});

	}


	/** The time when a journey will not send messages. QuietTime should be configured first and SendingSchedule should be set to true. */
	export interface ClosedDays {
		EMAIL?: Array<string>;
		SMS?: Array<string>;
		PUSH?: Array<string>;
		VOICE?: Array<string>;
		CUSTOM?: Array<string>;
	}

	/** The time when a journey will not send messages. QuietTime should be configured first and SendingSchedule should be set to true. */
	export interface ClosedDaysFormProperties {
	}
	export function CreateClosedDaysFormGroup() {
		return new FormGroup<ClosedDaysFormProperties>({
		});

	}

	export enum __TimezoneEstimationMethodsElement { PHONE_NUMBER = 0, POSTAL_CODE = 1 }

	export interface CreatePushTemplateResponse {

		/**
		 * Provides information about a request to create a message template.
		 * Required
		 */
		CreateTemplateMessageBody: CreateTemplateMessageBody;
	}
	export interface CreatePushTemplateResponseFormProperties {
	}
	export function CreateCreatePushTemplateResponseFormGroup() {
		return new FormGroup<CreatePushTemplateResponseFormProperties>({
		});

	}


	/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
	export interface AndroidPushNotificationTemplate {
		Action?: Action;
		Body?: string;
		ImageIconUrl?: string;
		ImageUrl?: string;
		RawContent?: string;
		SmallImageIconUrl?: string;
		Sound?: string;
		Title?: string;
		Url?: string;
	}

	/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel. */
	export interface AndroidPushNotificationTemplateFormProperties {
		Action: FormControl<Action | null | undefined>,
		Body: FormControl<string | null | undefined>,
		ImageIconUrl: FormControl<string | null | undefined>,
		ImageUrl: FormControl<string | null | undefined>,
		RawContent: FormControl<string | null | undefined>,
		SmallImageIconUrl: FormControl<string | null | undefined>,
		Sound: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateAndroidPushNotificationTemplateFormGroup() {
		return new FormGroup<AndroidPushNotificationTemplateFormProperties>({
			Action: new FormControl<Action | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			ImageIconUrl: new FormControl<string | null | undefined>(undefined),
			ImageUrl: new FormControl<string | null | undefined>(undefined),
			RawContent: new FormControl<string | null | undefined>(undefined),
			SmallImageIconUrl: new FormControl<string | null | undefined>(undefined),
			Sound: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel. */
	export interface APNSPushNotificationTemplate {
		Action?: Action;
		Body?: string;
		MediaUrl?: string;
		RawContent?: string;
		Sound?: string;
		Title?: string;
		Url?: string;
	}

	/** Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel. */
	export interface APNSPushNotificationTemplateFormProperties {
		Action: FormControl<Action | null | undefined>,
		Body: FormControl<string | null | undefined>,
		MediaUrl: FormControl<string | null | undefined>,
		RawContent: FormControl<string | null | undefined>,
		Sound: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateAPNSPushNotificationTemplateFormGroup() {
		return new FormGroup<APNSPushNotificationTemplateFormProperties>({
			Action: new FormControl<Action | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			MediaUrl: new FormControl<string | null | undefined>(undefined),
			RawContent: new FormControl<string | null | undefined>(undefined),
			Sound: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel. */
	export interface DefaultPushNotificationTemplate {
		Action?: Action;
		Body?: string;
		Sound?: string;
		Title?: string;
		Url?: string;
	}

	/** Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel. */
	export interface DefaultPushNotificationTemplateFormProperties {
		Action: FormControl<Action | null | undefined>,
		Body: FormControl<string | null | undefined>,
		Sound: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateDefaultPushNotificationTemplateFormGroup() {
		return new FormGroup<DefaultPushNotificationTemplateFormProperties>({
			Action: new FormControl<Action | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			Sound: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRecommenderConfigurationResponse {

		/**
		 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
		 * Required
		 */
		RecommenderConfigurationResponse: RecommenderConfigurationResponse;
	}
	export interface CreateRecommenderConfigurationResponseFormProperties {
	}
	export function CreateCreateRecommenderConfigurationResponseFormGroup() {
		return new FormGroup<CreateRecommenderConfigurationResponseFormProperties>({
		});

	}


	/** Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model. */
	export interface RecommenderConfigurationResponse {
		Attributes?: MapOf__string;

		/** Required */
		CreationDate: string;
		Description?: string;

		/** Required */
		Id: string;

		/** Required */
		LastModifiedDate: string;
		Name?: string;
		RecommendationProviderIdType?: string;

		/** Required */
		RecommendationProviderRoleArn: string;

		/** Required */
		RecommendationProviderUri: string;
		RecommendationTransformerUri?: string;
		RecommendationsDisplayName?: string;
		RecommendationsPerMessage?: number | null;
	}

	/** Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model. */
	export interface RecommenderConfigurationResponseFormProperties {

		/** Required */
		CreationDate: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedDate: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RecommendationProviderIdType: FormControl<string | null | undefined>,

		/** Required */
		RecommendationProviderRoleArn: FormControl<string | null | undefined>,

		/** Required */
		RecommendationProviderUri: FormControl<string | null | undefined>,
		RecommendationTransformerUri: FormControl<string | null | undefined>,
		RecommendationsDisplayName: FormControl<string | null | undefined>,
		RecommendationsPerMessage: FormControl<number | null | undefined>,
	}
	export function CreateRecommenderConfigurationResponseFormGroup() {
		return new FormGroup<RecommenderConfigurationResponseFormProperties>({
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderIdType: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommendationProviderUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommendationTransformerUri: new FormControl<string | null | undefined>(undefined),
			RecommendationsDisplayName: new FormControl<string | null | undefined>(undefined),
			RecommendationsPerMessage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateSegmentResponse {

		/**
		 * Provides information about the configuration, dimension, and other settings for a segment.
		 * Required
		 */
		SegmentResponse: SegmentResponse;
	}
	export interface CreateSegmentResponseFormProperties {
	}
	export function CreateCreateSegmentResponseFormGroup() {
		return new FormGroup<CreateSegmentResponseFormProperties>({
		});

	}


	/** Provides information about the configuration, dimension, and other settings for a segment. */
	export interface SegmentResponse {

		/** Required */
		ApplicationId: string;

		/** Required */
		Arn: string;

		/** Required */
		CreationDate: string;
		Dimensions?: SegmentDimensions;

		/** Required */
		Id: string;
		ImportDefinition?: SegmentImportResource;
		LastModifiedDate?: string;
		Name?: string;
		SegmentGroups?: SegmentGroupList;

		/** Required */
		SegmentType: SegmentType;
		tags?: MapOf__string;
		Version?: number | null;
	}

	/** Provides information about the configuration, dimension, and other settings for a segment. */
	export interface SegmentResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,

		/** Required */
		SegmentType: FormControl<SegmentType | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateSegmentResponseFormGroup() {
		return new FormGroup<SegmentResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SegmentType: new FormControl<SegmentType | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the dimension settings for a segment. */
	export interface SegmentDimensions {
		Attributes?: MapOfAttributeDimension;
		Behavior?: SegmentBehaviors;
		Demographic?: SegmentDemographics;
		Location?: SegmentLocation;
		Metrics?: MapOfMetricDimension;
		UserAttributes?: MapOfAttributeDimension;
	}

	/** Specifies the dimension settings for a segment. */
	export interface SegmentDimensionsFormProperties {
	}
	export function CreateSegmentDimensionsFormGroup() {
		return new FormGroup<SegmentDimensionsFormProperties>({
		});

	}


	/** Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active. */
	export interface SegmentBehaviors {
		Recency?: RecencyDimension;
	}

	/** Specifies dimension settings for including or excluding endpoints from a segment based on how recently an endpoint was active. */
	export interface SegmentBehaviorsFormProperties {
	}
	export function CreateSegmentBehaviorsFormGroup() {
		return new FormGroup<SegmentBehaviorsFormProperties>({
		});

	}


	/** Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active. */
	export interface RecencyDimension {

		/** Required */
		Duration: Duration;

		/** Required */
		RecencyType: RecencyType;
	}

	/** Specifies criteria for including or excluding endpoints from a segment based on how recently an endpoint was active. */
	export interface RecencyDimensionFormProperties {

		/** Required */
		Duration: FormControl<Duration | null | undefined>,

		/** Required */
		RecencyType: FormControl<RecencyType | null | undefined>,
	}
	export function CreateRecencyDimensionFormGroup() {
		return new FormGroup<RecencyDimensionFormProperties>({
			Duration: new FormControl<Duration | null | undefined>(undefined, [Validators.required]),
			RecencyType: new FormControl<RecencyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Duration { HR_24 = 0, DAY_7 = 1, DAY_14 = 2, DAY_30 = 3 }

	export enum RecencyType { ACTIVE = 0, INACTIVE = 1 }


	/** Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model. */
	export interface SegmentDemographics {
		AppVersion?: SetDimension;
		Channel?: SetDimension;
		DeviceType?: SetDimension;
		Make?: SetDimension;
		Model?: SetDimension;
		Platform?: SetDimension;
	}

	/** Specifies demographic-based dimension settings for including or excluding endpoints from a segment. These settings derive from characteristics of endpoint devices, such as platform, make, and model. */
	export interface SegmentDemographicsFormProperties {
	}
	export function CreateSegmentDemographicsFormGroup() {
		return new FormGroup<SegmentDemographicsFormProperties>({
		});

	}


	/** Specifies geographical dimension settings for a segment. */
	export interface SegmentLocation {
		Country?: SetDimension;
		GPSPoint?: GPSPointDimension;
	}

	/** Specifies geographical dimension settings for a segment. */
	export interface SegmentLocationFormProperties {
	}
	export function CreateSegmentLocationFormGroup() {
		return new FormGroup<SegmentLocationFormProperties>({
		});

	}


	/** Specifies GPS-based criteria for including or excluding endpoints from a segment. */
	export interface GPSPointDimension {

		/** Required */
		Coordinates: GPSCoordinates;
		RangeInKilometers?: number | null;
	}

	/** Specifies GPS-based criteria for including or excluding endpoints from a segment. */
	export interface GPSPointDimensionFormProperties {
		RangeInKilometers: FormControl<number | null | undefined>,
	}
	export function CreateGPSPointDimensionFormGroup() {
		return new FormGroup<GPSPointDimensionFormProperties>({
			RangeInKilometers: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the GPS coordinates of a location. */
	export interface GPSCoordinates {

		/** Required */
		Latitude: number;

		/** Required */
		Longitude: number;
	}

	/** Specifies the GPS coordinates of a location. */
	export interface GPSCoordinatesFormProperties {

		/** Required */
		Latitude: FormControl<number | null | undefined>,

		/** Required */
		Longitude: FormControl<number | null | undefined>,
	}
	export function CreateGPSCoordinatesFormGroup() {
		return new FormGroup<GPSCoordinatesFormProperties>({
			Latitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Longitude: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions. */
	export interface SegmentImportResource {
		ChannelCounts?: MapOf__integer;

		/** Required */
		ExternalId: string;

		/** Required */
		Format: Format;

		/** Required */
		RoleArn: string;

		/** Required */
		S3Url: string;

		/** Required */
		Size: number;
	}

	/** Provides information about the import job that created a segment. An import job is a job that creates a user segment by importing endpoint definitions. */
	export interface SegmentImportResourceFormProperties {

		/** Required */
		ExternalId: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<Format | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		S3Url: FormControl<string | null | undefined>,

		/** Required */
		Size: FormControl<number | null | undefined>,
	}
	export function CreateSegmentImportResourceFormGroup() {
		return new FormGroup<SegmentImportResourceFormProperties>({
			ExternalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MapOf__integer {
	}
	export interface MapOf__integerFormProperties {
	}
	export function CreateMapOf__integerFormGroup() {
		return new FormGroup<MapOf__integerFormProperties>({
		});

	}


	/** Specifies the settings that define the relationships between segment groups for a segment. */
	export interface SegmentGroupList {
		Groups?: Array<SegmentGroup>;
		Include?: SourceType;
	}

	/** Specifies the settings that define the relationships between segment groups for a segment. */
	export interface SegmentGroupListFormProperties {
		Include: FormControl<SourceType | null | undefined>,
	}
	export function CreateSegmentGroupListFormGroup() {
		return new FormGroup<SegmentGroupListFormProperties>({
			Include: new FormControl<SourceType | null | undefined>(undefined),
		});

	}


	/** Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions. */
	export interface SegmentGroup {
		Dimensions?: Array<SegmentDimensions>;
		SourceSegments?: Array<SegmentReference>;
		SourceType?: SourceType;
		Type?: SourceType;
	}

	/** Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions. */
	export interface SegmentGroupFormProperties {
		SourceType: FormControl<SourceType | null | undefined>,
		Type: FormControl<SourceType | null | undefined>,
	}
	export function CreateSegmentGroupFormGroup() {
		return new FormGroup<SegmentGroupFormProperties>({
			SourceType: new FormControl<SourceType | null | undefined>(undefined),
			Type: new FormControl<SourceType | null | undefined>(undefined),
		});

	}


	/** Specifies the segment identifier and version of a segment. */
	export interface SegmentReference {

		/** Required */
		Id: string;
		Version?: number | null;
	}

	/** Specifies the segment identifier and version of a segment. */
	export interface SegmentReferenceFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateSegmentReferenceFormGroup() {
		return new FormGroup<SegmentReferenceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum SourceType { ALL = 0, ANY = 1, NONE = 2 }

	export enum SegmentType { DIMENSIONAL = 0, IMPORT = 1 }

	export interface CreateSmsTemplateResponse {

		/**
		 * Provides information about a request to create a message template.
		 * Required
		 */
		CreateTemplateMessageBody: CreateTemplateMessageBody;
	}
	export interface CreateSmsTemplateResponseFormProperties {
	}
	export function CreateCreateSmsTemplateResponseFormGroup() {
		return new FormGroup<CreateSmsTemplateResponseFormProperties>({
		});

	}

	export interface CreateVoiceTemplateResponse {

		/**
		 * Provides information about a request to create a message template.
		 * Required
		 */
		CreateTemplateMessageBody: CreateTemplateMessageBody;
	}
	export interface CreateVoiceTemplateResponseFormProperties {
	}
	export function CreateCreateVoiceTemplateResponseFormGroup() {
		return new FormGroup<CreateVoiceTemplateResponseFormProperties>({
		});

	}

	export interface DeleteAdmChannelResponse {

		/**
		 * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
		 * Required
		 */
		ADMChannelResponse: ADMChannelResponse;
	}
	export interface DeleteAdmChannelResponseFormProperties {
	}
	export function CreateDeleteAdmChannelResponseFormGroup() {
		return new FormGroup<DeleteAdmChannelResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application. */
	export interface ADMChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Enabled?: boolean | null;
		HasCredential?: boolean | null;
		Id?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;

		/** Required */
		Platform: string;
		Version?: number | null;
	}

	/** Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application. */
	export interface ADMChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateADMChannelResponseFormGroup() {
		return new FormGroup<ADMChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteApnsChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
		 * Required
		 */
		APNSChannelResponse: APNSChannelResponse;
	}
	export interface DeleteApnsChannelResponseFormProperties {
	}
	export function CreateDeleteApnsChannelResponseFormGroup() {
		return new FormGroup<DeleteApnsChannelResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application. */
	export interface APNSChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		HasCredential?: boolean | null;
		HasTokenKey?: boolean | null;
		Id?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;

		/** Required */
		Platform: string;
		Version?: number | null;
	}

	/** Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application. */
	export interface APNSChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		HasTokenKey: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateAPNSChannelResponseFormGroup() {
		return new FormGroup<APNSChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			HasTokenKey: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteApnsSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
		 * Required
		 */
		APNSSandboxChannelResponse: APNSSandboxChannelResponse;
	}
	export interface DeleteApnsSandboxChannelResponseFormProperties {
	}
	export function CreateDeleteApnsSandboxChannelResponseFormGroup() {
		return new FormGroup<DeleteApnsSandboxChannelResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application. */
	export interface APNSSandboxChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		HasCredential?: boolean | null;
		HasTokenKey?: boolean | null;
		Id?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;

		/** Required */
		Platform: string;
		Version?: number | null;
	}

	/** Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application. */
	export interface APNSSandboxChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		HasTokenKey: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateAPNSSandboxChannelResponseFormGroup() {
		return new FormGroup<APNSSandboxChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			HasTokenKey: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteApnsVoipChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
		 * Required
		 */
		APNSVoipChannelResponse: APNSVoipChannelResponse;
	}
	export interface DeleteApnsVoipChannelResponseFormProperties {
	}
	export function CreateDeleteApnsVoipChannelResponseFormGroup() {
		return new FormGroup<DeleteApnsVoipChannelResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application. */
	export interface APNSVoipChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		HasCredential?: boolean | null;
		HasTokenKey?: boolean | null;
		Id?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;

		/** Required */
		Platform: string;
		Version?: number | null;
	}

	/** Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application. */
	export interface APNSVoipChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		HasTokenKey: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateAPNSVoipChannelResponseFormGroup() {
		return new FormGroup<APNSVoipChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			HasTokenKey: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteApnsVoipSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
		 * Required
		 */
		APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
	}
	export interface DeleteApnsVoipSandboxChannelResponseFormProperties {
	}
	export function CreateDeleteApnsVoipSandboxChannelResponseFormGroup() {
		return new FormGroup<DeleteApnsVoipSandboxChannelResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application. */
	export interface APNSVoipSandboxChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		HasCredential?: boolean | null;
		HasTokenKey?: boolean | null;
		Id?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;

		/** Required */
		Platform: string;
		Version?: number | null;
	}

	/** Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application. */
	export interface APNSVoipSandboxChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		HasTokenKey: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateAPNSVoipSandboxChannelResponseFormGroup() {
		return new FormGroup<APNSVoipSandboxChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			HasTokenKey: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteAppResponse {

		/**
		 * Provides information about an application.
		 * Required
		 */
		ApplicationResponse: ApplicationResponse;
	}
	export interface DeleteAppResponseFormProperties {
	}
	export function CreateDeleteAppResponseFormGroup() {
		return new FormGroup<DeleteAppResponseFormProperties>({
		});

	}

	export interface DeleteBaiduChannelResponse {

		/**
		 * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
		 * Required
		 */
		BaiduChannelResponse: BaiduChannelResponse;
	}
	export interface DeleteBaiduChannelResponseFormProperties {
	}
	export function CreateDeleteBaiduChannelResponseFormGroup() {
		return new FormGroup<DeleteBaiduChannelResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application. */
	export interface BaiduChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;

		/** Required */
		Credential: string;
		Enabled?: boolean | null;
		HasCredential?: boolean | null;
		Id?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;

		/** Required */
		Platform: string;
		Version?: number | null;
	}

	/** Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application. */
	export interface BaiduChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,

		/** Required */
		Credential: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateBaiduChannelResponseFormGroup() {
		return new FormGroup<BaiduChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Credential: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteCampaignResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a campaign.
		 * Required
		 */
		CampaignResponse: CampaignResponse;
	}
	export interface DeleteCampaignResponseFormProperties {
	}
	export function CreateDeleteCampaignResponseFormGroup() {
		return new FormGroup<DeleteCampaignResponseFormProperties>({
		});

	}

	export interface DeleteEmailChannelResponse {

		/**
		 * Provides information about the status and settings of the email channel for an application.
		 * Required
		 */
		EmailChannelResponse: EmailChannelResponse;
	}
	export interface DeleteEmailChannelResponseFormProperties {
	}
	export function CreateDeleteEmailChannelResponseFormGroup() {
		return new FormGroup<DeleteEmailChannelResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of the email channel for an application. */
	export interface EmailChannelResponse {
		ApplicationId?: string;
		ConfigurationSet?: string;
		CreationDate?: string;
		Enabled?: boolean | null;
		FromAddress?: string;
		HasCredential?: boolean | null;
		Id?: string;
		Identity?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		MessagesPerSecond?: number | null;

		/** Required */
		Platform: string;
		RoleArn?: string;
		Version?: number | null;
	}

	/** Provides information about the status and settings of the email channel for an application. */
	export interface EmailChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ConfigurationSet: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		FromAddress: FormControl<string | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		Identity: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		MessagesPerSecond: FormControl<number | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateEmailChannelResponseFormGroup() {
		return new FormGroup<EmailChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ConfigurationSet: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			FromAddress: new FormControl<string | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			Identity: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			MessagesPerSecond: new FormControl<number | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteEmailTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface DeleteEmailTemplateResponseFormProperties {
	}
	export function CreateDeleteEmailTemplateResponseFormGroup() {
		return new FormGroup<DeleteEmailTemplateResponseFormProperties>({
		});

	}


	/** Provides information about an API request or response. */
	export interface MessageBody {
		Message?: string;
		RequestID?: string;
	}

	/** Provides information about an API request or response. */
	export interface MessageBodyFormProperties {
		Message: FormControl<string | null | undefined>,
		RequestID: FormControl<string | null | undefined>,
	}
	export function CreateMessageBodyFormGroup() {
		return new FormGroup<MessageBodyFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			RequestID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteEndpointResponse {

		/**
		 * Provides information about the channel type and other settings for an endpoint.
		 * Required
		 */
		EndpointResponse: EndpointResponse;
	}
	export interface DeleteEndpointResponseFormProperties {
	}
	export function CreateDeleteEndpointResponseFormGroup() {
		return new FormGroup<DeleteEndpointResponseFormProperties>({
		});

	}


	/** Provides information about the channel type and other settings for an endpoint. */
	export interface EndpointResponse {
		Address?: string;
		ApplicationId?: string;
		Attributes?: MapOfListOf__string;
		ChannelType?: __EndpointTypesElement;
		CohortId?: string;
		CreationDate?: string;
		Demographic?: EndpointDemographic;
		EffectiveDate?: string;
		EndpointStatus?: string;
		Id?: string;
		Location?: EndpointLocation;
		Metrics?: MapOf__double;
		OptOut?: string;
		RequestId?: string;
		User?: EndpointUser;
	}

	/** Provides information about the channel type and other settings for an endpoint. */
	export interface EndpointResponseFormProperties {
		Address: FormControl<string | null | undefined>,
		ApplicationId: FormControl<string | null | undefined>,
		ChannelType: FormControl<__EndpointTypesElement | null | undefined>,
		CohortId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		EffectiveDate: FormControl<string | null | undefined>,
		EndpointStatus: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		OptOut: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateEndpointResponseFormGroup() {
		return new FormGroup<EndpointResponseFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ChannelType: new FormControl<__EndpointTypesElement | null | undefined>(undefined),
			CohortId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			EffectiveDate: new FormControl<string | null | undefined>(undefined),
			EndpointStatus: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			OptOut: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOfListOf__string {
	}
	export interface MapOfListOf__stringFormProperties {
	}
	export function CreateMapOfListOf__stringFormGroup() {
		return new FormGroup<MapOfListOf__stringFormProperties>({
		});

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

	/** Specifies demographic information about an endpoint, such as the applicable time zone and platform. */
	export interface EndpointDemographicFormProperties {
		AppVersion: FormControl<string | null | undefined>,
		Locale: FormControl<string | null | undefined>,
		Make: FormControl<string | null | undefined>,
		Model: FormControl<string | null | undefined>,
		ModelVersion: FormControl<string | null | undefined>,
		Platform: FormControl<string | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
	}
	export function CreateEndpointDemographicFormGroup() {
		return new FormGroup<EndpointDemographicFormProperties>({
			AppVersion: new FormControl<string | null | undefined>(undefined),
			Locale: new FormControl<string | null | undefined>(undefined),
			Make: new FormControl<string | null | undefined>(undefined),
			Model: new FormControl<string | null | undefined>(undefined),
			ModelVersion: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies geographic information about an endpoint. */
	export interface EndpointLocation {
		City?: string;
		Country?: string;
		Latitude?: number | null;
		Longitude?: number | null;
		PostalCode?: string;
		Region?: string;
	}

	/** Specifies geographic information about an endpoint. */
	export interface EndpointLocationFormProperties {
		City: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		Latitude: FormControl<number | null | undefined>,
		Longitude: FormControl<number | null | undefined>,
		PostalCode: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
	}
	export function CreateEndpointLocationFormGroup() {
		return new FormGroup<EndpointLocationFormProperties>({
			City: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			Latitude: new FormControl<number | null | undefined>(undefined),
			Longitude: new FormControl<number | null | undefined>(undefined),
			PostalCode: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOf__double {
	}
	export interface MapOf__doubleFormProperties {
	}
	export function CreateMapOf__doubleFormGroup() {
		return new FormGroup<MapOf__doubleFormProperties>({
		});

	}


	/** Specifies data for one or more attributes that describe the user who's associated with an endpoint. */
	export interface EndpointUser {
		UserAttributes?: MapOfListOf__string;
		UserId?: string;
	}

	/** Specifies data for one or more attributes that describe the user who's associated with an endpoint. */
	export interface EndpointUserFormProperties {
		UserId: FormControl<string | null | undefined>,
	}
	export function CreateEndpointUserFormGroup() {
		return new FormGroup<EndpointUserFormProperties>({
			UserId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteEventStreamResponse {

		/**
		 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
		 * Required
		 */
		EventStream: EventStream;
	}
	export interface DeleteEventStreamResponseFormProperties {
	}
	export function CreateDeleteEventStreamResponseFormGroup() {
		return new FormGroup<DeleteEventStreamResponseFormProperties>({
		});

	}


	/** Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream. */
	export interface EventStream {

		/** Required */
		ApplicationId: string;

		/** Required */
		DestinationStreamArn: string;
		ExternalId?: string;
		LastModifiedDate?: string;
		LastUpdatedBy?: string;

		/** Required */
		RoleArn: string;
	}

	/** Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream. */
	export interface EventStreamFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		DestinationStreamArn: FormControl<string | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		LastUpdatedBy: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateEventStreamFormGroup() {
		return new FormGroup<EventStreamFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DestinationStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			LastUpdatedBy: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteGcmChannelResponse {

		/**
		 * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
		 * Required
		 */
		GCMChannelResponse: GCMChannelResponse;
	}
	export interface DeleteGcmChannelResponseFormProperties {
	}
	export function CreateDeleteGcmChannelResponseFormGroup() {
		return new FormGroup<DeleteGcmChannelResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. */
	export interface GCMChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Credential?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		HasCredential?: boolean | null;
		HasFcmServiceCredentials?: boolean | null;
		Id?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;

		/** Required */
		Platform: string;
		Version?: number | null;
	}

	/** Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. */
	export interface GCMChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		Credential: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		HasFcmServiceCredentials: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateGCMChannelResponseFormGroup() {
		return new FormGroup<GCMChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Credential: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			HasFcmServiceCredentials: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteInAppTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface DeleteInAppTemplateResponseFormProperties {
	}
	export function CreateDeleteInAppTemplateResponseFormGroup() {
		return new FormGroup<DeleteInAppTemplateResponseFormProperties>({
		});

	}

	export interface DeleteJourneyResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a journey.
		 * Required
		 */
		JourneyResponse: JourneyResponse;
	}
	export interface DeleteJourneyResponseFormProperties {
	}
	export function CreateDeleteJourneyResponseFormGroup() {
		return new FormGroup<DeleteJourneyResponseFormProperties>({
		});

	}

	export interface DeletePushTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface DeletePushTemplateResponseFormProperties {
	}
	export function CreateDeletePushTemplateResponseFormGroup() {
		return new FormGroup<DeletePushTemplateResponseFormProperties>({
		});

	}

	export interface DeleteRecommenderConfigurationResponse {

		/**
		 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
		 * Required
		 */
		RecommenderConfigurationResponse: RecommenderConfigurationResponse;
	}
	export interface DeleteRecommenderConfigurationResponseFormProperties {
	}
	export function CreateDeleteRecommenderConfigurationResponseFormGroup() {
		return new FormGroup<DeleteRecommenderConfigurationResponseFormProperties>({
		});

	}

	export interface DeleteSegmentResponse {

		/**
		 * Provides information about the configuration, dimension, and other settings for a segment.
		 * Required
		 */
		SegmentResponse: SegmentResponse;
	}
	export interface DeleteSegmentResponseFormProperties {
	}
	export function CreateDeleteSegmentResponseFormGroup() {
		return new FormGroup<DeleteSegmentResponseFormProperties>({
		});

	}

	export interface DeleteSmsChannelResponse {

		/**
		 * Provides information about the status and settings of the SMS channel for an application.
		 * Required
		 */
		SMSChannelResponse: SMSChannelResponse;
	}
	export interface DeleteSmsChannelResponseFormProperties {
	}
	export function CreateDeleteSmsChannelResponseFormGroup() {
		return new FormGroup<DeleteSmsChannelResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of the SMS channel for an application. */
	export interface SMSChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Enabled?: boolean | null;
		HasCredential?: boolean | null;
		Id?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;

		/** Required */
		Platform: string;
		PromotionalMessagesPerSecond?: number | null;
		SenderId?: string;
		ShortCode?: string;
		TransactionalMessagesPerSecond?: number | null;
		Version?: number | null;
	}

	/** Provides information about the status and settings of the SMS channel for an application. */
	export interface SMSChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
		PromotionalMessagesPerSecond: FormControl<number | null | undefined>,
		SenderId: FormControl<string | null | undefined>,
		ShortCode: FormControl<string | null | undefined>,
		TransactionalMessagesPerSecond: FormControl<number | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateSMSChannelResponseFormGroup() {
		return new FormGroup<SMSChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PromotionalMessagesPerSecond: new FormControl<number | null | undefined>(undefined),
			SenderId: new FormControl<string | null | undefined>(undefined),
			ShortCode: new FormControl<string | null | undefined>(undefined),
			TransactionalMessagesPerSecond: new FormControl<number | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteSmsTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface DeleteSmsTemplateResponseFormProperties {
	}
	export function CreateDeleteSmsTemplateResponseFormGroup() {
		return new FormGroup<DeleteSmsTemplateResponseFormProperties>({
		});

	}

	export interface DeleteUserEndpointsResponse {

		/**
		 * Provides information about all the endpoints that are associated with a user ID.
		 * Required
		 */
		EndpointsResponse: EndpointsResponse;
	}
	export interface DeleteUserEndpointsResponseFormProperties {
	}
	export function CreateDeleteUserEndpointsResponseFormGroup() {
		return new FormGroup<DeleteUserEndpointsResponseFormProperties>({
		});

	}


	/** Provides information about all the endpoints that are associated with a user ID. */
	export interface EndpointsResponse {

		/** Required */
		Item: Array<EndpointResponse>;
	}

	/** Provides information about all the endpoints that are associated with a user ID. */
	export interface EndpointsResponseFormProperties {
	}
	export function CreateEndpointsResponseFormGroup() {
		return new FormGroup<EndpointsResponseFormProperties>({
		});

	}

	export interface DeleteVoiceChannelResponse {

		/**
		 * Provides information about the status and settings of the voice channel for an application.
		 * Required
		 */
		VoiceChannelResponse: VoiceChannelResponse;
	}
	export interface DeleteVoiceChannelResponseFormProperties {
	}
	export function CreateDeleteVoiceChannelResponseFormGroup() {
		return new FormGroup<DeleteVoiceChannelResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of the voice channel for an application. */
	export interface VoiceChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Enabled?: boolean | null;
		HasCredential?: boolean | null;
		Id?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;

		/** Required */
		Platform: string;
		Version?: number | null;
	}

	/** Provides information about the status and settings of the voice channel for an application. */
	export interface VoiceChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,

		/** Required */
		Platform: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateVoiceChannelResponseFormGroup() {
		return new FormGroup<VoiceChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Platform: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteVoiceTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface DeleteVoiceTemplateResponseFormProperties {
	}
	export function CreateDeleteVoiceTemplateResponseFormGroup() {
		return new FormGroup<DeleteVoiceTemplateResponseFormProperties>({
		});

	}

	export interface GetAdmChannelResponse {

		/**
		 * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
		 * Required
		 */
		ADMChannelResponse: ADMChannelResponse;
	}
	export interface GetAdmChannelResponseFormProperties {
	}
	export function CreateGetAdmChannelResponseFormGroup() {
		return new FormGroup<GetAdmChannelResponseFormProperties>({
		});

	}

	export interface GetApnsChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
		 * Required
		 */
		APNSChannelResponse: APNSChannelResponse;
	}
	export interface GetApnsChannelResponseFormProperties {
	}
	export function CreateGetApnsChannelResponseFormGroup() {
		return new FormGroup<GetApnsChannelResponseFormProperties>({
		});

	}

	export interface GetApnsSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
		 * Required
		 */
		APNSSandboxChannelResponse: APNSSandboxChannelResponse;
	}
	export interface GetApnsSandboxChannelResponseFormProperties {
	}
	export function CreateGetApnsSandboxChannelResponseFormGroup() {
		return new FormGroup<GetApnsSandboxChannelResponseFormProperties>({
		});

	}

	export interface GetApnsVoipChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
		 * Required
		 */
		APNSVoipChannelResponse: APNSVoipChannelResponse;
	}
	export interface GetApnsVoipChannelResponseFormProperties {
	}
	export function CreateGetApnsVoipChannelResponseFormGroup() {
		return new FormGroup<GetApnsVoipChannelResponseFormProperties>({
		});

	}

	export interface GetApnsVoipSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
		 * Required
		 */
		APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
	}
	export interface GetApnsVoipSandboxChannelResponseFormProperties {
	}
	export function CreateGetApnsVoipSandboxChannelResponseFormGroup() {
		return new FormGroup<GetApnsVoipSandboxChannelResponseFormProperties>({
		});

	}

	export interface GetAppResponse {

		/**
		 * Provides information about an application.
		 * Required
		 */
		ApplicationResponse: ApplicationResponse;
	}
	export interface GetAppResponseFormProperties {
	}
	export function CreateGetAppResponseFormGroup() {
		return new FormGroup<GetAppResponseFormProperties>({
		});

	}

	export interface GetApplicationDateRangeKpiResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query.
		 * Required
		 */
		ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse;
	}
	export interface GetApplicationDateRangeKpiResponseFormProperties {
	}
	export function CreateGetApplicationDateRangeKpiResponseFormGroup() {
		return new FormGroup<GetApplicationDateRangeKpiResponseFormProperties>({
		});

	}


	/** Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query. */
	export interface ApplicationDateRangeKpiResponse {

		/** Required */
		ApplicationId: string;

		/** Required */
		EndTime: Date;

		/** Required */
		KpiName: string;

		/** Required */
		KpiResult: BaseKpiResult;
		NextToken?: string;

		/** Required */
		StartTime: Date;
	}

	/** Provides the results of a query that retrieved the data for a standard metric that applies to an application, and provides information about that query. */
	export interface ApplicationDateRangeKpiResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		KpiName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateApplicationDateRangeKpiResponseFormGroup() {
		return new FormGroup<ApplicationDateRangeKpiResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			KpiName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey. */
	export interface BaseKpiResult {

		/** Required */
		Rows: Array<ResultRow>;
	}

	/** Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey. */
	export interface BaseKpiResultFormProperties {
	}
	export function CreateBaseKpiResultFormGroup() {
		return new FormGroup<BaseKpiResultFormProperties>({
		});

	}


	/** Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey. */
	export interface ResultRow {

		/** Required */
		GroupedBys: Array<ResultRowValue>;

		/** Required */
		Values: Array<ResultRowValue>;
	}

	/** Provides the results of a query that retrieved the data for a standard metric that applies to an application, campaign, or journey. */
	export interface ResultRowFormProperties {
	}
	export function CreateResultRowFormGroup() {
		return new FormGroup<ResultRowFormProperties>({
		});

	}


	/** Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey. */
	export interface ResultRowValue {

		/** Required */
		Key: string;

		/** Required */
		Type: string;

		/** Required */
		Value: string;
	}

	/** Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey. */
	export interface ResultRowValueFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateResultRowValueFormGroup() {
		return new FormGroup<ResultRowValueFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetApplicationSettingsResponse {

		/**
		 * Provides information about an application, including the default settings for an application.
		 * Required
		 */
		ApplicationSettingsResource: ApplicationSettingsResource;
	}
	export interface GetApplicationSettingsResponseFormProperties {
	}
	export function CreateGetApplicationSettingsResponseFormGroup() {
		return new FormGroup<GetApplicationSettingsResponseFormProperties>({
		});

	}


	/** Provides information about an application, including the default settings for an application. */
	export interface ApplicationSettingsResource {

		/** Required */
		ApplicationId: string;
		CampaignHook?: CampaignHook;
		LastModifiedDate?: string;
		Limits?: CampaignLimits;
		QuietTime?: QuietTime;
		JourneyLimits?: ApplicationSettingsJourneyLimits;
	}

	/** Provides information about an application, including the default settings for an application. */
	export interface ApplicationSettingsResourceFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
	}
	export function CreateApplicationSettingsResourceFormGroup() {
		return new FormGroup<ApplicationSettingsResourceFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The default sending limits for journeys in the application. To override these limits and define custom limits for a specific journey, use the Journey resource. */
	export interface ApplicationSettingsJourneyLimits {
		DailyCap?: number | null;
		TimeframeCap?: JourneyTimeframeCap;
		TotalCap?: number | null;
	}

	/** The default sending limits for journeys in the application. To override these limits and define custom limits for a specific journey, use the Journey resource. */
	export interface ApplicationSettingsJourneyLimitsFormProperties {
		DailyCap: FormControl<number | null | undefined>,
		TotalCap: FormControl<number | null | undefined>,
	}
	export function CreateApplicationSettingsJourneyLimitsFormGroup() {
		return new FormGroup<ApplicationSettingsJourneyLimitsFormProperties>({
			DailyCap: new FormControl<number | null | undefined>(undefined),
			TotalCap: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetAppsResponse {

		/**
		 * Provides information about all of your applications.
		 * Required
		 */
		ApplicationsResponse: ApplicationsResponse;
	}
	export interface GetAppsResponseFormProperties {
	}
	export function CreateGetAppsResponseFormGroup() {
		return new FormGroup<GetAppsResponseFormProperties>({
		});

	}


	/** Provides information about all of your applications. */
	export interface ApplicationsResponse {
		Item?: Array<ApplicationResponse>;
		NextToken?: string;
	}

	/** Provides information about all of your applications. */
	export interface ApplicationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateApplicationsResponseFormGroup() {
		return new FormGroup<ApplicationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBaiduChannelResponse {

		/**
		 * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
		 * Required
		 */
		BaiduChannelResponse: BaiduChannelResponse;
	}
	export interface GetBaiduChannelResponseFormProperties {
	}
	export function CreateGetBaiduChannelResponseFormGroup() {
		return new FormGroup<GetBaiduChannelResponseFormProperties>({
		});

	}

	export interface GetCampaignResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a campaign.
		 * Required
		 */
		CampaignResponse: CampaignResponse;
	}
	export interface GetCampaignResponseFormProperties {
	}
	export function CreateGetCampaignResponseFormGroup() {
		return new FormGroup<GetCampaignResponseFormProperties>({
		});

	}

	export interface GetCampaignActivitiesResponse {

		/**
		 * Provides information about the activities that were performed by a campaign.
		 * Required
		 */
		ActivitiesResponse: ActivitiesResponse;
	}
	export interface GetCampaignActivitiesResponseFormProperties {
	}
	export function CreateGetCampaignActivitiesResponseFormGroup() {
		return new FormGroup<GetCampaignActivitiesResponseFormProperties>({
		});

	}


	/** Provides information about the activities that were performed by a campaign. */
	export interface ActivitiesResponse {

		/** Required */
		Item: Array<ActivityResponse>;
		NextToken?: string;
	}

	/** Provides information about the activities that were performed by a campaign. */
	export interface ActivitiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateActivitiesResponseFormGroup() {
		return new FormGroup<ActivitiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about an activity that was performed by a campaign. */
	export interface ActivityResponse {

		/** Required */
		ApplicationId: string;

		/** Required */
		CampaignId: string;
		End?: string;

		/** Required */
		Id: string;
		Result?: string;
		ScheduledStart?: string;
		Start?: string;
		State?: string;
		SuccessfulEndpointCount?: number | null;
		TimezonesCompletedCount?: number | null;
		TimezonesTotalCount?: number | null;
		TotalEndpointCount?: number | null;
		TreatmentId?: string;
		ExecutionMetrics?: MapOf__string;
	}

	/** Provides information about an activity that was performed by a campaign. */
	export interface ActivityResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		CampaignId: FormControl<string | null | undefined>,
		End: FormControl<string | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,
		Result: FormControl<string | null | undefined>,
		ScheduledStart: FormControl<string | null | undefined>,
		Start: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		SuccessfulEndpointCount: FormControl<number | null | undefined>,
		TimezonesCompletedCount: FormControl<number | null | undefined>,
		TimezonesTotalCount: FormControl<number | null | undefined>,
		TotalEndpointCount: FormControl<number | null | undefined>,
		TreatmentId: FormControl<string | null | undefined>,
	}
	export function CreateActivityResponseFormGroup() {
		return new FormGroup<ActivityResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CampaignId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			End: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Result: new FormControl<string | null | undefined>(undefined),
			ScheduledStart: new FormControl<string | null | undefined>(undefined),
			Start: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			SuccessfulEndpointCount: new FormControl<number | null | undefined>(undefined),
			TimezonesCompletedCount: new FormControl<number | null | undefined>(undefined),
			TimezonesTotalCount: new FormControl<number | null | undefined>(undefined),
			TotalEndpointCount: new FormControl<number | null | undefined>(undefined),
			TreatmentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCampaignDateRangeKpiResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query.
		 * Required
		 */
		CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse;
	}
	export interface GetCampaignDateRangeKpiResponseFormProperties {
	}
	export function CreateGetCampaignDateRangeKpiResponseFormGroup() {
		return new FormGroup<GetCampaignDateRangeKpiResponseFormProperties>({
		});

	}


	/** Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query. */
	export interface CampaignDateRangeKpiResponse {

		/** Required */
		ApplicationId: string;

		/** Required */
		CampaignId: string;

		/** Required */
		EndTime: Date;

		/** Required */
		KpiName: string;

		/** Required */
		KpiResult: BaseKpiResult;
		NextToken?: string;

		/** Required */
		StartTime: Date;
	}

	/** Provides the results of a query that retrieved the data for a standard metric that applies to a campaign, and provides information about that query. */
	export interface CampaignDateRangeKpiResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		CampaignId: FormControl<string | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		KpiName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateCampaignDateRangeKpiResponseFormGroup() {
		return new FormGroup<CampaignDateRangeKpiResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CampaignId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			KpiName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetCampaignVersionResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a campaign.
		 * Required
		 */
		CampaignResponse: CampaignResponse;
	}
	export interface GetCampaignVersionResponseFormProperties {
	}
	export function CreateGetCampaignVersionResponseFormGroup() {
		return new FormGroup<GetCampaignVersionResponseFormProperties>({
		});

	}

	export interface GetCampaignVersionsResponse {

		/**
		 * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
		 * Required
		 */
		CampaignsResponse: CampaignsResponse;
	}
	export interface GetCampaignVersionsResponseFormProperties {
	}
	export function CreateGetCampaignVersionsResponseFormGroup() {
		return new FormGroup<GetCampaignVersionsResponseFormProperties>({
		});

	}


	/** Provides information about the configuration and other settings for all the campaigns that are associated with an application. */
	export interface CampaignsResponse {

		/** Required */
		Item: Array<CampaignResponse>;
		NextToken?: string;
	}

	/** Provides information about the configuration and other settings for all the campaigns that are associated with an application. */
	export interface CampaignsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateCampaignsResponseFormGroup() {
		return new FormGroup<CampaignsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCampaignsResponse {

		/**
		 * Provides information about the configuration and other settings for all the campaigns that are associated with an application.
		 * Required
		 */
		CampaignsResponse: CampaignsResponse;
	}
	export interface GetCampaignsResponseFormProperties {
	}
	export function CreateGetCampaignsResponseFormGroup() {
		return new FormGroup<GetCampaignsResponseFormProperties>({
		});

	}

	export interface GetChannelsResponse {

		/**
		 * Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.
		 * Required
		 */
		ChannelsResponse: ChannelsResponse;
	}
	export interface GetChannelsResponseFormProperties {
	}
	export function CreateGetChannelsResponseFormGroup() {
		return new FormGroup<GetChannelsResponseFormProperties>({
		});

	}


	/** Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application. */
	export interface ChannelsResponse {

		/** Required */
		Channels: MapOfChannelResponse;
	}

	/** Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application. */
	export interface ChannelsResponseFormProperties {
	}
	export function CreateChannelsResponseFormGroup() {
		return new FormGroup<ChannelsResponseFormProperties>({
		});

	}

	export interface MapOfChannelResponse {
	}
	export interface MapOfChannelResponseFormProperties {
	}
	export function CreateMapOfChannelResponseFormGroup() {
		return new FormGroup<MapOfChannelResponseFormProperties>({
		});

	}

	export interface GetEmailChannelResponse {

		/**
		 * Provides information about the status and settings of the email channel for an application.
		 * Required
		 */
		EmailChannelResponse: EmailChannelResponse;
	}
	export interface GetEmailChannelResponseFormProperties {
	}
	export function CreateGetEmailChannelResponseFormGroup() {
		return new FormGroup<GetEmailChannelResponseFormProperties>({
		});

	}

	export interface GetEmailTemplateResponse {

		/**
		 * Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel.
		 * Required
		 */
		EmailTemplateResponse: EmailTemplateResponse;
	}
	export interface GetEmailTemplateResponseFormProperties {
	}
	export function CreateGetEmailTemplateResponseFormGroup() {
		return new FormGroup<GetEmailTemplateResponseFormProperties>({
		});

	}


	/** Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel. */
	export interface EmailTemplateResponse {
		Arn?: string;

		/** Required */
		CreationDate: string;
		DefaultSubstitutions?: string;
		HtmlPart?: string;

		/** Required */
		LastModifiedDate: string;
		RecommenderId?: string;
		Subject?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;

		/** Required */
		TemplateName: string;

		/** Required */
		TemplateType: TemplateType;
		TextPart?: string;
		Version?: string;
	}

	/** Provides information about the content and settings for a message template that can be used in messages that are sent through the email channel. */
	export interface EmailTemplateResponseFormProperties {
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,
		HtmlPart: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedDate: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,

		/** Required */
		TemplateType: FormControl<TemplateType | null | undefined>,
		TextPart: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateEmailTemplateResponseFormGroup() {
		return new FormGroup<EmailTemplateResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			HtmlPart: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
			TextPart: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TemplateType { EMAIL = 0, SMS = 1, VOICE = 2, PUSH = 3, INAPP = 4 }

	export interface GetEndpointResponse {

		/**
		 * Provides information about the channel type and other settings for an endpoint.
		 * Required
		 */
		EndpointResponse: EndpointResponse;
	}
	export interface GetEndpointResponseFormProperties {
	}
	export function CreateGetEndpointResponseFormGroup() {
		return new FormGroup<GetEndpointResponseFormProperties>({
		});

	}

	export interface GetEventStreamResponse {

		/**
		 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
		 * Required
		 */
		EventStream: EventStream;
	}
	export interface GetEventStreamResponseFormProperties {
	}
	export function CreateGetEventStreamResponseFormGroup() {
		return new FormGroup<GetEventStreamResponseFormProperties>({
		});

	}

	export interface GetExportJobResponse {

		/**
		 * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
		 * Required
		 */
		ExportJobResponse: ExportJobResponse;
	}
	export interface GetExportJobResponseFormProperties {
	}
	export function CreateGetExportJobResponseFormGroup() {
		return new FormGroup<GetExportJobResponseFormProperties>({
		});

	}

	export interface GetExportJobsResponse {

		/**
		 * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
		 * Required
		 */
		ExportJobsResponse: ExportJobsResponse;
	}
	export interface GetExportJobsResponseFormProperties {
	}
	export function CreateGetExportJobsResponseFormGroup() {
		return new FormGroup<GetExportJobsResponseFormProperties>({
		});

	}


	/** Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file. */
	export interface ExportJobsResponse {

		/** Required */
		Item: Array<ExportJobResponse>;
		NextToken?: string;
	}

	/** Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file. */
	export interface ExportJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateExportJobsResponseFormGroup() {
		return new FormGroup<ExportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGcmChannelResponse {

		/**
		 * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
		 * Required
		 */
		GCMChannelResponse: GCMChannelResponse;
	}
	export interface GetGcmChannelResponseFormProperties {
	}
	export function CreateGetGcmChannelResponseFormGroup() {
		return new FormGroup<GetGcmChannelResponseFormProperties>({
		});

	}

	export interface GetImportJobResponse {

		/**
		 * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
		 * Required
		 */
		ImportJobResponse: ImportJobResponse;
	}
	export interface GetImportJobResponseFormProperties {
	}
	export function CreateGetImportJobResponseFormGroup() {
		return new FormGroup<GetImportJobResponseFormProperties>({
		});

	}

	export interface GetImportJobsResponse {

		/**
		 * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
		 * Required
		 */
		ImportJobsResponse: ImportJobsResponse;
	}
	export interface GetImportJobsResponseFormProperties {
	}
	export function CreateGetImportJobsResponseFormGroup() {
		return new FormGroup<GetImportJobsResponseFormProperties>({
		});

	}


	/** Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files. */
	export interface ImportJobsResponse {

		/** Required */
		Item: Array<ImportJobResponse>;
		NextToken?: string;
	}

	/** Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files. */
	export interface ImportJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateImportJobsResponseFormGroup() {
		return new FormGroup<ImportJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInAppMessagesResponse {

		/**
		 * Get in-app messages response object.
		 * Required
		 */
		InAppMessagesResponse: InAppMessagesResponse;
	}
	export interface GetInAppMessagesResponseFormProperties {
	}
	export function CreateGetInAppMessagesResponseFormGroup() {
		return new FormGroup<GetInAppMessagesResponseFormProperties>({
		});

	}


	/** Get in-app messages response object. */
	export interface InAppMessagesResponse {
		InAppMessageCampaigns?: Array<InAppMessageCampaign>;
	}

	/** Get in-app messages response object. */
	export interface InAppMessagesResponseFormProperties {
	}
	export function CreateInAppMessagesResponseFormGroup() {
		return new FormGroup<InAppMessagesResponseFormProperties>({
		});

	}


	/** Targeted in-app message campaign. */
	export interface InAppMessageCampaign {
		CampaignId?: string;
		DailyCap?: number | null;
		InAppMessage?: InAppMessage;
		Priority?: number | null;
		Schedule?: InAppCampaignSchedule;
		SessionCap?: number | null;
		TotalCap?: number | null;
		TreatmentId?: string;
	}

	/** Targeted in-app message campaign. */
	export interface InAppMessageCampaignFormProperties {
		CampaignId: FormControl<string | null | undefined>,
		DailyCap: FormControl<number | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		SessionCap: FormControl<number | null | undefined>,
		TotalCap: FormControl<number | null | undefined>,
		TreatmentId: FormControl<string | null | undefined>,
	}
	export function CreateInAppMessageCampaignFormGroup() {
		return new FormGroup<InAppMessageCampaignFormProperties>({
			CampaignId: new FormControl<string | null | undefined>(undefined),
			DailyCap: new FormControl<number | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			SessionCap: new FormControl<number | null | undefined>(undefined),
			TotalCap: new FormControl<number | null | undefined>(undefined),
			TreatmentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides all fields required for building an in-app message. */
	export interface InAppMessage {
		Content?: Array<InAppMessageContent>;
		CustomConfig?: MapOf__string;
		Layout?: Layout;
	}

	/** Provides all fields required for building an in-app message. */
	export interface InAppMessageFormProperties {
		Layout: FormControl<Layout | null | undefined>,
	}
	export function CreateInAppMessageFormGroup() {
		return new FormGroup<InAppMessageFormProperties>({
			Layout: new FormControl<Layout | null | undefined>(undefined),
		});

	}


	/** Schedule of the campaign. */
	export interface InAppCampaignSchedule {
		EndDate?: string;
		EventFilter?: CampaignEventFilter;
		QuietTime?: QuietTime;
	}

	/** Schedule of the campaign. */
	export interface InAppCampaignScheduleFormProperties {
		EndDate: FormControl<string | null | undefined>,
	}
	export function CreateInAppCampaignScheduleFormGroup() {
		return new FormGroup<InAppCampaignScheduleFormProperties>({
			EndDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInAppTemplateResponse {

		/**
		 * In-App Template Response.
		 * Required
		 */
		InAppTemplateResponse: InAppTemplateResponse;
	}
	export interface GetInAppTemplateResponseFormProperties {
	}
	export function CreateGetInAppTemplateResponseFormGroup() {
		return new FormGroup<GetInAppTemplateResponseFormProperties>({
		});

	}


	/** In-App Template Response. */
	export interface InAppTemplateResponse {
		Arn?: string;
		Content?: Array<InAppMessageContent>;

		/** Required */
		CreationDate: string;
		CustomConfig?: MapOf__string;

		/** Required */
		LastModifiedDate: string;
		Layout?: Layout;
		tags?: MapOf__string;
		TemplateDescription?: string;

		/** Required */
		TemplateName: string;

		/** Required */
		TemplateType: TemplateType;
		Version?: string;
	}

	/** In-App Template Response. */
	export interface InAppTemplateResponseFormProperties {
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedDate: FormControl<string | null | undefined>,
		Layout: FormControl<Layout | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,

		/** Required */
		TemplateType: FormControl<TemplateType | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateInAppTemplateResponseFormGroup() {
		return new FormGroup<InAppTemplateResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Layout: new FormControl<Layout | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetJourneyResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a journey.
		 * Required
		 */
		JourneyResponse: JourneyResponse;
	}
	export interface GetJourneyResponseFormProperties {
	}
	export function CreateGetJourneyResponseFormGroup() {
		return new FormGroup<GetJourneyResponseFormProperties>({
		});

	}

	export interface GetJourneyDateRangeKpiResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query.
		 * Required
		 */
		JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponse;
	}
	export interface GetJourneyDateRangeKpiResponseFormProperties {
	}
	export function CreateGetJourneyDateRangeKpiResponseFormGroup() {
		return new FormGroup<GetJourneyDateRangeKpiResponseFormProperties>({
		});

	}


	/** Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query. */
	export interface JourneyDateRangeKpiResponse {

		/** Required */
		ApplicationId: string;

		/** Required */
		EndTime: Date;

		/** Required */
		JourneyId: string;

		/** Required */
		KpiName: string;

		/** Required */
		KpiResult: BaseKpiResult;
		NextToken?: string;

		/** Required */
		StartTime: Date;
	}

	/** Provides the results of a query that retrieved the data for a standard engagement metric that applies to a journey, and provides information about that query. */
	export interface JourneyDateRangeKpiResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,

		/** Required */
		JourneyId: FormControl<string | null | undefined>,

		/** Required */
		KpiName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,
	}
	export function CreateJourneyDateRangeKpiResponseFormGroup() {
		return new FormGroup<JourneyDateRangeKpiResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			JourneyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KpiName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetJourneyExecutionActivityMetricsResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
		 * Required
		 */
		JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse;
	}
	export interface GetJourneyExecutionActivityMetricsResponseFormProperties {
	}
	export function CreateGetJourneyExecutionActivityMetricsResponseFormGroup() {
		return new FormGroup<GetJourneyExecutionActivityMetricsResponseFormProperties>({
		});

	}


	/** Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query. */
	export interface JourneyExecutionActivityMetricsResponse {

		/** Required */
		ActivityType: string;

		/** Required */
		ApplicationId: string;

		/** Required */
		JourneyActivityId: string;

		/** Required */
		JourneyId: string;

		/** Required */
		LastEvaluatedTime: string;

		/** Required */
		Metrics: MapOf__string;
	}

	/** Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query. */
	export interface JourneyExecutionActivityMetricsResponseFormProperties {

		/** Required */
		ActivityType: FormControl<string | null | undefined>,

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		JourneyActivityId: FormControl<string | null | undefined>,

		/** Required */
		JourneyId: FormControl<string | null | undefined>,

		/** Required */
		LastEvaluatedTime: FormControl<string | null | undefined>,
	}
	export function CreateJourneyExecutionActivityMetricsResponseFormGroup() {
		return new FormGroup<JourneyExecutionActivityMetricsResponseFormProperties>({
			ActivityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JourneyActivityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JourneyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastEvaluatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetJourneyExecutionMetricsResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.
		 * Required
		 */
		JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponse;
	}
	export interface GetJourneyExecutionMetricsResponseFormProperties {
	}
	export function CreateGetJourneyExecutionMetricsResponseFormGroup() {
		return new FormGroup<GetJourneyExecutionMetricsResponseFormProperties>({
		});

	}


	/** Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query. */
	export interface JourneyExecutionMetricsResponse {

		/** Required */
		ApplicationId: string;

		/** Required */
		JourneyId: string;

		/** Required */
		LastEvaluatedTime: string;

		/** Required */
		Metrics: MapOf__string;
	}

	/** Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query. */
	export interface JourneyExecutionMetricsResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		JourneyId: FormControl<string | null | undefined>,

		/** Required */
		LastEvaluatedTime: FormControl<string | null | undefined>,
	}
	export function CreateJourneyExecutionMetricsResponseFormGroup() {
		return new FormGroup<JourneyExecutionMetricsResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JourneyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastEvaluatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetJourneyRunExecutionActivityMetricsResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity for a particular journey run, and provides information about that query.
		 * Required
		 */
		JourneyRunExecutionActivityMetricsResponse: JourneyRunExecutionActivityMetricsResponse;
	}
	export interface GetJourneyRunExecutionActivityMetricsResponseFormProperties {
	}
	export function CreateGetJourneyRunExecutionActivityMetricsResponseFormGroup() {
		return new FormGroup<GetJourneyRunExecutionActivityMetricsResponseFormProperties>({
		});

	}


	/** Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity for a particular journey run, and provides information about that query. */
	export interface JourneyRunExecutionActivityMetricsResponse {

		/** Required */
		ActivityType: string;

		/** Required */
		ApplicationId: string;

		/** Required */
		JourneyActivityId: string;

		/** Required */
		JourneyId: string;

		/** Required */
		LastEvaluatedTime: string;

		/** Required */
		Metrics: MapOf__string;

		/** Required */
		RunId: string;
	}

	/** Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity for a particular journey run, and provides information about that query. */
	export interface JourneyRunExecutionActivityMetricsResponseFormProperties {

		/** Required */
		ActivityType: FormControl<string | null | undefined>,

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		JourneyActivityId: FormControl<string | null | undefined>,

		/** Required */
		JourneyId: FormControl<string | null | undefined>,

		/** Required */
		LastEvaluatedTime: FormControl<string | null | undefined>,

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateJourneyRunExecutionActivityMetricsResponseFormGroup() {
		return new FormGroup<JourneyRunExecutionActivityMetricsResponseFormProperties>({
			ActivityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JourneyActivityId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JourneyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastEvaluatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetJourneyRunExecutionMetricsResponse {

		/**
		 * Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey run, and provides information about that query.
		 * Required
		 */
		JourneyRunExecutionMetricsResponse: JourneyRunExecutionMetricsResponse;
	}
	export interface GetJourneyRunExecutionMetricsResponseFormProperties {
	}
	export function CreateGetJourneyRunExecutionMetricsResponseFormGroup() {
		return new FormGroup<GetJourneyRunExecutionMetricsResponseFormProperties>({
		});

	}


	/** Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey run, and provides information about that query. */
	export interface JourneyRunExecutionMetricsResponse {

		/** Required */
		ApplicationId: string;

		/** Required */
		JourneyId: string;

		/** Required */
		LastEvaluatedTime: string;

		/** Required */
		Metrics: MapOf__string;

		/** Required */
		RunId: string;
	}

	/** Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey run, and provides information about that query. */
	export interface JourneyRunExecutionMetricsResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		JourneyId: FormControl<string | null | undefined>,

		/** Required */
		LastEvaluatedTime: FormControl<string | null | undefined>,

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateJourneyRunExecutionMetricsResponseFormGroup() {
		return new FormGroup<JourneyRunExecutionMetricsResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JourneyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastEvaluatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetJourneyRunsResponse {

		/**
		 * Provides information from all runs of a journey.
		 * Required
		 */
		JourneyRunsResponse: JourneyRunsResponse;
	}
	export interface GetJourneyRunsResponseFormProperties {
	}
	export function CreateGetJourneyRunsResponseFormGroup() {
		return new FormGroup<GetJourneyRunsResponseFormProperties>({
		});

	}


	/** Provides information from all runs of a journey. */
	export interface JourneyRunsResponse {

		/** Required */
		Item: Array<JourneyRunResponse>;
		NextToken?: string;
	}

	/** Provides information from all runs of a journey. */
	export interface JourneyRunsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateJourneyRunsResponseFormGroup() {
		return new FormGroup<JourneyRunsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information from a specified run of a journey. */
	export interface JourneyRunResponse {

		/** Required */
		CreationTime: string;

		/** Required */
		LastUpdateTime: string;

		/** Required */
		RunId: string;

		/** Required */
		Status: JourneyRunStatus;
	}

	/** Provides information from a specified run of a journey. */
	export interface JourneyRunResponseFormProperties {

		/** Required */
		CreationTime: FormControl<string | null | undefined>,

		/** Required */
		LastUpdateTime: FormControl<string | null | undefined>,

		/** Required */
		RunId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<JourneyRunStatus | null | undefined>,
	}
	export function CreateJourneyRunResponseFormGroup() {
		return new FormGroup<JourneyRunResponseFormProperties>({
			CreationTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LastUpdateTime: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<JourneyRunStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JourneyRunStatus { SCHEDULED = 0, RUNNING = 1, COMPLETED = 2, CANCELLED = 3 }

	export interface GetPushTemplateResponse {

		/**
		 * Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel.
		 * Required
		 */
		PushNotificationTemplateResponse: PushNotificationTemplateResponse;
	}
	export interface GetPushTemplateResponseFormProperties {
	}
	export function CreateGetPushTemplateResponseFormGroup() {
		return new FormGroup<GetPushTemplateResponseFormProperties>({
		});

	}


	/** Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel. */
	export interface PushNotificationTemplateResponse {
		ADM?: AndroidPushNotificationTemplate;
		APNS?: APNSPushNotificationTemplate;
		Arn?: string;
		Baidu?: AndroidPushNotificationTemplate;

		/** Required */
		CreationDate: string;
		Default?: DefaultPushNotificationTemplate;
		DefaultSubstitutions?: string;
		GCM?: AndroidPushNotificationTemplate;

		/** Required */
		LastModifiedDate: string;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;

		/** Required */
		TemplateName: string;

		/** Required */
		TemplateType: TemplateType;
		Version?: string;
	}

	/** Provides information about the content and settings for a message template that can be used in messages that are sent through a push notification channel. */
	export interface PushNotificationTemplateResponseFormProperties {
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedDate: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,

		/** Required */
		TemplateType: FormControl<TemplateType | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreatePushNotificationTemplateResponseFormGroup() {
		return new FormGroup<PushNotificationTemplateResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetRecommenderConfigurationResponse {

		/**
		 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
		 * Required
		 */
		RecommenderConfigurationResponse: RecommenderConfigurationResponse;
	}
	export interface GetRecommenderConfigurationResponseFormProperties {
	}
	export function CreateGetRecommenderConfigurationResponseFormGroup() {
		return new FormGroup<GetRecommenderConfigurationResponseFormProperties>({
		});

	}

	export interface GetRecommenderConfigurationsResponse {

		/**
		 * Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account.
		 * Required
		 */
		ListRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse;
	}
	export interface GetRecommenderConfigurationsResponseFormProperties {
	}
	export function CreateGetRecommenderConfigurationsResponseFormGroup() {
		return new FormGroup<GetRecommenderConfigurationsResponseFormProperties>({
		});

	}


	/** Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account. */
	export interface ListRecommenderConfigurationsResponse {

		/** Required */
		Item: Array<RecommenderConfigurationResponse>;
		NextToken?: string;
	}

	/** Provides information about all the recommender model configurations that are associated with your Amazon Pinpoint account. */
	export interface ListRecommenderConfigurationsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecommenderConfigurationsResponseFormGroup() {
		return new FormGroup<ListRecommenderConfigurationsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSegmentResponse {

		/**
		 * Provides information about the configuration, dimension, and other settings for a segment.
		 * Required
		 */
		SegmentResponse: SegmentResponse;
	}
	export interface GetSegmentResponseFormProperties {
	}
	export function CreateGetSegmentResponseFormGroup() {
		return new FormGroup<GetSegmentResponseFormProperties>({
		});

	}

	export interface GetSegmentExportJobsResponse {

		/**
		 * Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.
		 * Required
		 */
		ExportJobsResponse: ExportJobsResponse;
	}
	export interface GetSegmentExportJobsResponseFormProperties {
	}
	export function CreateGetSegmentExportJobsResponseFormGroup() {
		return new FormGroup<GetSegmentExportJobsResponseFormProperties>({
		});

	}

	export interface GetSegmentImportJobsResponse {

		/**
		 * Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.
		 * Required
		 */
		ImportJobsResponse: ImportJobsResponse;
	}
	export interface GetSegmentImportJobsResponseFormProperties {
	}
	export function CreateGetSegmentImportJobsResponseFormGroup() {
		return new FormGroup<GetSegmentImportJobsResponseFormProperties>({
		});

	}

	export interface GetSegmentVersionResponse {

		/**
		 * Provides information about the configuration, dimension, and other settings for a segment.
		 * Required
		 */
		SegmentResponse: SegmentResponse;
	}
	export interface GetSegmentVersionResponseFormProperties {
	}
	export function CreateGetSegmentVersionResponseFormGroup() {
		return new FormGroup<GetSegmentVersionResponseFormProperties>({
		});

	}

	export interface GetSegmentVersionsResponse {

		/**
		 * Provides information about all the segments that are associated with an application.
		 * Required
		 */
		SegmentsResponse: SegmentsResponse;
	}
	export interface GetSegmentVersionsResponseFormProperties {
	}
	export function CreateGetSegmentVersionsResponseFormGroup() {
		return new FormGroup<GetSegmentVersionsResponseFormProperties>({
		});

	}


	/** Provides information about all the segments that are associated with an application. */
	export interface SegmentsResponse {

		/** Required */
		Item: Array<SegmentResponse>;
		NextToken?: string;
	}

	/** Provides information about all the segments that are associated with an application. */
	export interface SegmentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSegmentsResponseFormGroup() {
		return new FormGroup<SegmentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSegmentsResponse {

		/**
		 * Provides information about all the segments that are associated with an application.
		 * Required
		 */
		SegmentsResponse: SegmentsResponse;
	}
	export interface GetSegmentsResponseFormProperties {
	}
	export function CreateGetSegmentsResponseFormGroup() {
		return new FormGroup<GetSegmentsResponseFormProperties>({
		});

	}

	export interface GetSmsChannelResponse {

		/**
		 * Provides information about the status and settings of the SMS channel for an application.
		 * Required
		 */
		SMSChannelResponse: SMSChannelResponse;
	}
	export interface GetSmsChannelResponseFormProperties {
	}
	export function CreateGetSmsChannelResponseFormGroup() {
		return new FormGroup<GetSmsChannelResponseFormProperties>({
		});

	}

	export interface GetSmsTemplateResponse {

		/**
		 * Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
		 * Required
		 */
		SMSTemplateResponse: SMSTemplateResponse;
	}
	export interface GetSmsTemplateResponseFormProperties {
	}
	export function CreateGetSmsTemplateResponseFormGroup() {
		return new FormGroup<GetSmsTemplateResponseFormProperties>({
		});

	}


	/** Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel. */
	export interface SMSTemplateResponse {
		Arn?: string;
		Body?: string;

		/** Required */
		CreationDate: string;
		DefaultSubstitutions?: string;

		/** Required */
		LastModifiedDate: string;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;

		/** Required */
		TemplateName: string;

		/** Required */
		TemplateType: TemplateType;
		Version?: string;
	}

	/** Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel. */
	export interface SMSTemplateResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Body: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedDate: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,

		/** Required */
		TemplateType: FormControl<TemplateType | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateSMSTemplateResponseFormGroup() {
		return new FormGroup<SMSTemplateResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserEndpointsResponse {

		/**
		 * Provides information about all the endpoints that are associated with a user ID.
		 * Required
		 */
		EndpointsResponse: EndpointsResponse;
	}
	export interface GetUserEndpointsResponseFormProperties {
	}
	export function CreateGetUserEndpointsResponseFormGroup() {
		return new FormGroup<GetUserEndpointsResponseFormProperties>({
		});

	}

	export interface GetVoiceChannelResponse {

		/**
		 * Provides information about the status and settings of the voice channel for an application.
		 * Required
		 */
		VoiceChannelResponse: VoiceChannelResponse;
	}
	export interface GetVoiceChannelResponseFormProperties {
	}
	export function CreateGetVoiceChannelResponseFormGroup() {
		return new FormGroup<GetVoiceChannelResponseFormProperties>({
		});

	}

	export interface GetVoiceTemplateResponse {

		/**
		 * Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel.
		 * Required
		 */
		VoiceTemplateResponse: VoiceTemplateResponse;
	}
	export interface GetVoiceTemplateResponseFormProperties {
	}
	export function CreateGetVoiceTemplateResponseFormGroup() {
		return new FormGroup<GetVoiceTemplateResponseFormProperties>({
		});

	}


	/** Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel. */
	export interface VoiceTemplateResponse {
		Arn?: string;
		Body?: string;

		/** Required */
		CreationDate: string;
		DefaultSubstitutions?: string;
		LanguageCode?: string;

		/** Required */
		LastModifiedDate: string;
		tags?: MapOf__string;
		TemplateDescription?: string;

		/** Required */
		TemplateName: string;

		/** Required */
		TemplateType: TemplateType;
		Version?: string;
		VoiceId?: string;
	}

	/** Provides information about the content and settings for a message template that can be used in messages that are sent through the voice channel. */
	export interface VoiceTemplateResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Body: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedDate: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,

		/** Required */
		TemplateType: FormControl<TemplateType | null | undefined>,
		Version: FormControl<string | null | undefined>,
		VoiceId: FormControl<string | null | undefined>,
	}
	export function CreateVoiceTemplateResponseFormGroup() {
		return new FormGroup<VoiceTemplateResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
			VoiceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJourneysResponse {

		/**
		 * Provides information about the status, configuration, and other settings for all the journeys that are associated with an application.
		 * Required
		 */
		JourneysResponse: JourneysResponse;
	}
	export interface ListJourneysResponseFormProperties {
	}
	export function CreateListJourneysResponseFormGroup() {
		return new FormGroup<ListJourneysResponseFormProperties>({
		});

	}


	/** Provides information about the status, configuration, and other settings for all the journeys that are associated with an application. */
	export interface JourneysResponse {

		/** Required */
		Item: Array<JourneyResponse>;
		NextToken?: string;
	}

	/** Provides information about the status, configuration, and other settings for all the journeys that are associated with an application. */
	export interface JourneysResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateJourneysResponseFormGroup() {
		return new FormGroup<JourneysResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/**
		 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
		 * Required
		 */
		TagsModel: TagsModel;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** Specifies the tags (keys and values) for an application, campaign, message template, or segment. */
	export interface TagsModel {

		/** Required */
		tags: MapOf__string;
	}

	/** Specifies the tags (keys and values) for an application, campaign, message template, or segment. */
	export interface TagsModelFormProperties {
	}
	export function CreateTagsModelFormGroup() {
		return new FormGroup<TagsModelFormProperties>({
		});

	}

	export interface ListTemplateVersionsResponse {

		/**
		 * Provides information about all the versions of a specific message template.
		 * Required
		 */
		TemplateVersionsResponse: TemplateVersionsResponse;
	}
	export interface ListTemplateVersionsResponseFormProperties {
	}
	export function CreateListTemplateVersionsResponseFormGroup() {
		return new FormGroup<ListTemplateVersionsResponseFormProperties>({
		});

	}


	/** Provides information about all the versions of a specific message template. */
	export interface TemplateVersionsResponse {

		/** Required */
		Item: Array<TemplateVersionResponse>;
		Message?: string;
		NextToken?: string;
		RequestID?: string;
	}

	/** Provides information about all the versions of a specific message template. */
	export interface TemplateVersionsResponseFormProperties {
		Message: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		RequestID: FormControl<string | null | undefined>,
	}
	export function CreateTemplateVersionsResponseFormGroup() {
		return new FormGroup<TemplateVersionsResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			RequestID: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a specific version of a message template. */
	export interface TemplateVersionResponse {

		/** Required */
		CreationDate: string;
		DefaultSubstitutions?: string;

		/** Required */
		LastModifiedDate: string;
		TemplateDescription?: string;

		/** Required */
		TemplateName: string;

		/** Required */
		TemplateType: string;
		Version?: string;
	}

	/** Provides information about a specific version of a message template. */
	export interface TemplateVersionResponseFormProperties {

		/** Required */
		CreationDate: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedDate: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,

		/** Required */
		TemplateType: FormControl<string | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateTemplateVersionResponseFormGroup() {
		return new FormGroup<TemplateVersionResponseFormProperties>({
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTemplatesResponse {

		/**
		 * Provides information about all the message templates that are associated with your Amazon Pinpoint account.
		 * Required
		 */
		TemplatesResponse: TemplatesResponse;
	}
	export interface ListTemplatesResponseFormProperties {
	}
	export function CreateListTemplatesResponseFormGroup() {
		return new FormGroup<ListTemplatesResponseFormProperties>({
		});

	}


	/** Provides information about all the message templates that are associated with your Amazon Pinpoint account. */
	export interface TemplatesResponse {

		/** Required */
		Item: Array<TemplateResponse>;
		NextToken?: string;
	}

	/** Provides information about all the message templates that are associated with your Amazon Pinpoint account. */
	export interface TemplatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateTemplatesResponseFormGroup() {
		return new FormGroup<TemplatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a message template that's associated with your Amazon Pinpoint account. */
	export interface TemplateResponse {
		Arn?: string;

		/** Required */
		CreationDate: string;
		DefaultSubstitutions?: string;

		/** Required */
		LastModifiedDate: string;
		tags?: MapOf__string;
		TemplateDescription?: string;

		/** Required */
		TemplateName: string;

		/** Required */
		TemplateType: TemplateType;
		Version?: string;
	}

	/** Provides information about a message template that's associated with your Amazon Pinpoint account. */
	export interface TemplateResponseFormProperties {
		Arn: FormControl<string | null | undefined>,

		/** Required */
		CreationDate: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,

		/** Required */
		LastModifiedDate: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,

		/** Required */
		TemplateName: FormControl<string | null | undefined>,

		/** Required */
		TemplateType: FormControl<TemplateType | null | undefined>,
		Version: FormControl<string | null | undefined>,
	}
	export function CreateTemplateResponseFormGroup() {
		return new FormGroup<TemplateResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateType: new FormControl<TemplateType | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneNumberValidateResponse {

		/**
		 * Provides information about a phone number.
		 * Required
		 */
		NumberValidateResponse: NumberValidateResponse;
	}
	export interface PhoneNumberValidateResponseFormProperties {
	}
	export function CreatePhoneNumberValidateResponseFormGroup() {
		return new FormGroup<PhoneNumberValidateResponseFormProperties>({
		});

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
		PhoneTypeCode?: number | null;
		Timezone?: string;
		ZipCode?: string;
	}

	/** Provides information about a phone number. */
	export interface NumberValidateResponseFormProperties {
		Carrier: FormControl<string | null | undefined>,
		City: FormControl<string | null | undefined>,
		CleansedPhoneNumberE164: FormControl<string | null | undefined>,
		CleansedPhoneNumberNational: FormControl<string | null | undefined>,
		Country: FormControl<string | null | undefined>,
		CountryCodeIso2: FormControl<string | null | undefined>,
		CountryCodeNumeric: FormControl<string | null | undefined>,
		County: FormControl<string | null | undefined>,
		OriginalCountryCodeIso2: FormControl<string | null | undefined>,
		OriginalPhoneNumber: FormControl<string | null | undefined>,
		PhoneType: FormControl<string | null | undefined>,
		PhoneTypeCode: FormControl<number | null | undefined>,
		Timezone: FormControl<string | null | undefined>,
		ZipCode: FormControl<string | null | undefined>,
	}
	export function CreateNumberValidateResponseFormGroup() {
		return new FormGroup<NumberValidateResponseFormProperties>({
			Carrier: new FormControl<string | null | undefined>(undefined),
			City: new FormControl<string | null | undefined>(undefined),
			CleansedPhoneNumberE164: new FormControl<string | null | undefined>(undefined),
			CleansedPhoneNumberNational: new FormControl<string | null | undefined>(undefined),
			Country: new FormControl<string | null | undefined>(undefined),
			CountryCodeIso2: new FormControl<string | null | undefined>(undefined),
			CountryCodeNumeric: new FormControl<string | null | undefined>(undefined),
			County: new FormControl<string | null | undefined>(undefined),
			OriginalCountryCodeIso2: new FormControl<string | null | undefined>(undefined),
			OriginalPhoneNumber: new FormControl<string | null | undefined>(undefined),
			PhoneType: new FormControl<string | null | undefined>(undefined),
			PhoneTypeCode: new FormControl<number | null | undefined>(undefined),
			Timezone: new FormControl<string | null | undefined>(undefined),
			ZipCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEventStreamResponse {

		/**
		 * Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
		 * Required
		 */
		EventStream: EventStream;
	}
	export interface PutEventStreamResponseFormProperties {
	}
	export function CreatePutEventStreamResponseFormGroup() {
		return new FormGroup<PutEventStreamResponseFormProperties>({
		});

	}

	export interface PutEventsResponse {

		/**
		 * Provides information about endpoints and the events that they're associated with.
		 * Required
		 */
		EventsResponse: EventsResponse;
	}
	export interface PutEventsResponseFormProperties {
	}
	export function CreatePutEventsResponseFormGroup() {
		return new FormGroup<PutEventsResponseFormProperties>({
		});

	}


	/** Provides information about endpoints and the events that they're associated with. */
	export interface EventsResponse {
		Results?: MapOfItemResponse;
	}

	/** Provides information about endpoints and the events that they're associated with. */
	export interface EventsResponseFormProperties {
	}
	export function CreateEventsResponseFormGroup() {
		return new FormGroup<EventsResponseFormProperties>({
		});

	}

	export interface MapOfItemResponse {
	}
	export interface MapOfItemResponseFormProperties {
	}
	export function CreateMapOfItemResponseFormGroup() {
		return new FormGroup<MapOfItemResponseFormProperties>({
		});

	}

	export interface MapOfEventsBatch {
	}
	export interface MapOfEventsBatchFormProperties {
	}
	export function CreateMapOfEventsBatchFormGroup() {
		return new FormGroup<MapOfEventsBatchFormProperties>({
		});

	}

	export interface RemoveAttributesResponse {

		/**
		 * Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
		 * Required
		 */
		AttributesResource: AttributesResource;
	}
	export interface RemoveAttributesResponseFormProperties {
	}
	export function CreateRemoveAttributesResponseFormGroup() {
		return new FormGroup<RemoveAttributesResponseFormProperties>({
		});

	}


	/** Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application. */
	export interface AttributesResource {

		/** Required */
		ApplicationId: string;

		/** Required */
		AttributeType: string;
		Attributes?: Array<string>;
	}

	/** Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application. */
	export interface AttributesResourceFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		AttributeType: FormControl<string | null | undefined>,
	}
	export function CreateAttributesResourceFormGroup() {
		return new FormGroup<AttributesResourceFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			AttributeType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendMessagesResponse {

		/**
		 * Provides information about the results of a request to send a message to an endpoint address.
		 * Required
		 */
		MessageResponse: MessageResponse;
	}
	export interface SendMessagesResponseFormProperties {
	}
	export function CreateSendMessagesResponseFormGroup() {
		return new FormGroup<SendMessagesResponseFormProperties>({
		});

	}


	/** Provides information about the results of a request to send a message to an endpoint address. */
	export interface MessageResponse {

		/** Required */
		ApplicationId: string;
		EndpointResult?: MapOfEndpointMessageResult;
		RequestId?: string;
		Result?: MapOfMessageResult;
	}

	/** Provides information about the results of a request to send a message to an endpoint address. */
	export interface MessageResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateMessageResponseFormGroup() {
		return new FormGroup<MessageResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOfEndpointMessageResult {
	}
	export interface MapOfEndpointMessageResultFormProperties {
	}
	export function CreateMapOfEndpointMessageResultFormGroup() {
		return new FormGroup<MapOfEndpointMessageResultFormProperties>({
		});

	}

	export interface MapOfMessageResult {
	}
	export interface MapOfMessageResultFormProperties {
	}
	export function CreateMapOfMessageResultFormGroup() {
		return new FormGroup<MapOfMessageResultFormProperties>({
		});

	}

	export interface MapOfAddressConfiguration {
	}
	export interface MapOfAddressConfigurationFormProperties {
	}
	export function CreateMapOfAddressConfigurationFormGroup() {
		return new FormGroup<MapOfAddressConfigurationFormProperties>({
		});

	}

	export interface MapOfEndpointSendConfiguration {
	}
	export interface MapOfEndpointSendConfigurationFormProperties {
	}
	export function CreateMapOfEndpointSendConfigurationFormGroup() {
		return new FormGroup<MapOfEndpointSendConfigurationFormProperties>({
		});

	}


	/** Specifies the settings and content for the default message and any default messages that you tailored for specific channels. */
	export interface DirectMessageConfiguration {
		ADMMessage?: ADMMessage;
		APNSMessage?: APNSMessage;
		BaiduMessage?: BaiduMessage;
		DefaultMessage?: DefaultMessage;
		DefaultPushNotificationMessage?: DefaultPushNotificationMessage;
		EmailMessage?: EmailMessage;
		GCMMessage?: GCMMessage;
		SMSMessage?: SMSMessage;
		VoiceMessage?: VoiceMessage;
	}

	/** Specifies the settings and content for the default message and any default messages that you tailored for specific channels. */
	export interface DirectMessageConfigurationFormProperties {
	}
	export function CreateDirectMessageConfigurationFormGroup() {
		return new FormGroup<DirectMessageConfigurationFormProperties>({
		});

	}


	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel. */
	export interface ADMMessage {
		Action?: Action;
		Body?: string;
		ConsolidationKey?: string;
		Data?: MapOf__string;
		ExpiresAfter?: string;
		IconReference?: string;
		ImageIconUrl?: string;
		ImageUrl?: string;
		MD5?: string;
		RawContent?: string;
		SilentPush?: boolean | null;
		SmallImageIconUrl?: string;
		Sound?: string;
		Substitutions?: MapOfListOf__string;
		Title?: string;
		Url?: string;
	}

	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the ADM (Amazon Device Messaging) channel. */
	export interface ADMMessageFormProperties {
		Action: FormControl<Action | null | undefined>,
		Body: FormControl<string | null | undefined>,
		ConsolidationKey: FormControl<string | null | undefined>,
		ExpiresAfter: FormControl<string | null | undefined>,
		IconReference: FormControl<string | null | undefined>,
		ImageIconUrl: FormControl<string | null | undefined>,
		ImageUrl: FormControl<string | null | undefined>,
		MD5: FormControl<string | null | undefined>,
		RawContent: FormControl<string | null | undefined>,
		SilentPush: FormControl<boolean | null | undefined>,
		SmallImageIconUrl: FormControl<string | null | undefined>,
		Sound: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateADMMessageFormGroup() {
		return new FormGroup<ADMMessageFormProperties>({
			Action: new FormControl<Action | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			ConsolidationKey: new FormControl<string | null | undefined>(undefined),
			ExpiresAfter: new FormControl<string | null | undefined>(undefined),
			IconReference: new FormControl<string | null | undefined>(undefined),
			ImageIconUrl: new FormControl<string | null | undefined>(undefined),
			ImageUrl: new FormControl<string | null | undefined>(undefined),
			MD5: new FormControl<string | null | undefined>(undefined),
			RawContent: new FormControl<string | null | undefined>(undefined),
			SilentPush: new FormControl<boolean | null | undefined>(undefined),
			SmallImageIconUrl: new FormControl<string | null | undefined>(undefined),
			Sound: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel. */
	export interface APNSMessage {
		APNSPushType?: string;
		Action?: Action;
		Badge?: number | null;
		Body?: string;
		Category?: string;
		CollapseId?: string;
		Data?: MapOf__string;
		MediaUrl?: string;
		PreferredAuthenticationMethod?: string;
		Priority?: string;
		RawContent?: string;
		SilentPush?: boolean | null;
		Sound?: string;
		Substitutions?: MapOfListOf__string;
		ThreadId?: string;
		TimeToLive?: number | null;
		Title?: string;
		Url?: string;
	}

	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel. */
	export interface APNSMessageFormProperties {
		APNSPushType: FormControl<string | null | undefined>,
		Action: FormControl<Action | null | undefined>,
		Badge: FormControl<number | null | undefined>,
		Body: FormControl<string | null | undefined>,
		Category: FormControl<string | null | undefined>,
		CollapseId: FormControl<string | null | undefined>,
		MediaUrl: FormControl<string | null | undefined>,
		PreferredAuthenticationMethod: FormControl<string | null | undefined>,
		Priority: FormControl<string | null | undefined>,
		RawContent: FormControl<string | null | undefined>,
		SilentPush: FormControl<boolean | null | undefined>,
		Sound: FormControl<string | null | undefined>,
		ThreadId: FormControl<string | null | undefined>,
		TimeToLive: FormControl<number | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateAPNSMessageFormGroup() {
		return new FormGroup<APNSMessageFormProperties>({
			APNSPushType: new FormControl<string | null | undefined>(undefined),
			Action: new FormControl<Action | null | undefined>(undefined),
			Badge: new FormControl<number | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			Category: new FormControl<string | null | undefined>(undefined),
			CollapseId: new FormControl<string | null | undefined>(undefined),
			MediaUrl: new FormControl<string | null | undefined>(undefined),
			PreferredAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<string | null | undefined>(undefined),
			RawContent: new FormControl<string | null | undefined>(undefined),
			SilentPush: new FormControl<boolean | null | undefined>(undefined),
			Sound: new FormControl<string | null | undefined>(undefined),
			ThreadId: new FormControl<string | null | undefined>(undefined),
			TimeToLive: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel. */
	export interface BaiduMessage {
		Action?: Action;
		Body?: string;
		Data?: MapOf__string;
		IconReference?: string;
		ImageIconUrl?: string;
		ImageUrl?: string;
		RawContent?: string;
		SilentPush?: boolean | null;
		SmallImageIconUrl?: string;
		Sound?: string;
		Substitutions?: MapOfListOf__string;
		TimeToLive?: number | null;
		Title?: string;
		Url?: string;
	}

	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel. */
	export interface BaiduMessageFormProperties {
		Action: FormControl<Action | null | undefined>,
		Body: FormControl<string | null | undefined>,
		IconReference: FormControl<string | null | undefined>,
		ImageIconUrl: FormControl<string | null | undefined>,
		ImageUrl: FormControl<string | null | undefined>,
		RawContent: FormControl<string | null | undefined>,
		SilentPush: FormControl<boolean | null | undefined>,
		SmallImageIconUrl: FormControl<string | null | undefined>,
		Sound: FormControl<string | null | undefined>,
		TimeToLive: FormControl<number | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateBaiduMessageFormGroup() {
		return new FormGroup<BaiduMessageFormProperties>({
			Action: new FormControl<Action | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			IconReference: new FormControl<string | null | undefined>(undefined),
			ImageIconUrl: new FormControl<string | null | undefined>(undefined),
			ImageUrl: new FormControl<string | null | undefined>(undefined),
			RawContent: new FormControl<string | null | undefined>(undefined),
			SilentPush: new FormControl<boolean | null | undefined>(undefined),
			SmallImageIconUrl: new FormControl<string | null | undefined>(undefined),
			Sound: new FormControl<string | null | undefined>(undefined),
			TimeToLive: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the default message for all channels. */
	export interface DefaultMessage {
		Body?: string;
		Substitutions?: MapOfListOf__string;
	}

	/** Specifies the default message for all channels. */
	export interface DefaultMessageFormProperties {
		Body: FormControl<string | null | undefined>,
	}
	export function CreateDefaultMessageFormGroup() {
		return new FormGroup<DefaultMessageFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the default settings and content for a push notification that's sent directly to an endpoint. */
	export interface DefaultPushNotificationMessage {
		Action?: Action;
		Body?: string;
		Data?: MapOf__string;
		SilentPush?: boolean | null;
		Substitutions?: MapOfListOf__string;
		Title?: string;
		Url?: string;
	}

	/** Specifies the default settings and content for a push notification that's sent directly to an endpoint. */
	export interface DefaultPushNotificationMessageFormProperties {
		Action: FormControl<Action | null | undefined>,
		Body: FormControl<string | null | undefined>,
		SilentPush: FormControl<boolean | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateDefaultPushNotificationMessageFormGroup() {
		return new FormGroup<DefaultPushNotificationMessageFormProperties>({
			Action: new FormControl<Action | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			SilentPush: new FormControl<boolean | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the default settings and content for a one-time email message that's sent directly to an endpoint. */
	export interface EmailMessage {
		Body?: string;
		FeedbackForwardingAddress?: string;
		FromAddress?: string;
		RawEmail?: RawEmail;
		ReplyToAddresses?: Array<string>;
		SimpleEmail?: SimpleEmail;
		Substitutions?: MapOfListOf__string;
	}

	/** Specifies the default settings and content for a one-time email message that's sent directly to an endpoint. */
	export interface EmailMessageFormProperties {
		Body: FormControl<string | null | undefined>,
		FeedbackForwardingAddress: FormControl<string | null | undefined>,
		FromAddress: FormControl<string | null | undefined>,
	}
	export function CreateEmailMessageFormGroup() {
		return new FormGroup<EmailMessageFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			FeedbackForwardingAddress: new FormControl<string | null | undefined>(undefined),
			FromAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the contents of an email message, represented as a raw MIME message. */
	export interface RawEmail {
		Data?: string;
	}

	/** Specifies the contents of an email message, represented as a raw MIME message. */
	export interface RawEmailFormProperties {
		Data: FormControl<string | null | undefined>,
	}
	export function CreateRawEmailFormGroup() {
		return new FormGroup<RawEmailFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the contents of an email message, composed of a subject, a text part, and an HTML part. */
	export interface SimpleEmail {
		HtmlPart?: SimpleEmailPart;
		Subject?: SimpleEmailPart;
		TextPart?: SimpleEmailPart;
	}

	/** Specifies the contents of an email message, composed of a subject, a text part, and an HTML part. */
	export interface SimpleEmailFormProperties {
	}
	export function CreateSimpleEmailFormGroup() {
		return new FormGroup<SimpleEmailFormProperties>({
		});

	}


	/** Specifies the subject or body of an email message, represented as textual email data and the applicable character set. */
	export interface SimpleEmailPart {
		Charset?: string;
		Data?: string;
	}

	/** Specifies the subject or body of an email message, represented as textual email data and the applicable character set. */
	export interface SimpleEmailPartFormProperties {
		Charset: FormControl<string | null | undefined>,
		Data: FormControl<string | null | undefined>,
	}
	export function CreateSimpleEmailPartFormGroup() {
		return new FormGroup<SimpleEmailPartFormProperties>({
			Charset: new FormControl<string | null | undefined>(undefined),
			Data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. */
	export interface GCMMessage {
		Action?: Action;
		Body?: string;
		CollapseKey?: string;
		Data?: MapOf__string;
		IconReference?: string;
		ImageIconUrl?: string;
		ImageUrl?: string;
		PreferredAuthenticationMethod?: string;
		Priority?: string;
		RawContent?: string;
		RestrictedPackageName?: string;
		SilentPush?: boolean | null;
		SmallImageIconUrl?: string;
		Sound?: string;
		Substitutions?: MapOfListOf__string;
		TimeToLive?: number | null;
		Title?: string;
		Url?: string;
	}

	/** Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. */
	export interface GCMMessageFormProperties {
		Action: FormControl<Action | null | undefined>,
		Body: FormControl<string | null | undefined>,
		CollapseKey: FormControl<string | null | undefined>,
		IconReference: FormControl<string | null | undefined>,
		ImageIconUrl: FormControl<string | null | undefined>,
		ImageUrl: FormControl<string | null | undefined>,
		PreferredAuthenticationMethod: FormControl<string | null | undefined>,
		Priority: FormControl<string | null | undefined>,
		RawContent: FormControl<string | null | undefined>,
		RestrictedPackageName: FormControl<string | null | undefined>,
		SilentPush: FormControl<boolean | null | undefined>,
		SmallImageIconUrl: FormControl<string | null | undefined>,
		Sound: FormControl<string | null | undefined>,
		TimeToLive: FormControl<number | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Url: FormControl<string | null | undefined>,
	}
	export function CreateGCMMessageFormGroup() {
		return new FormGroup<GCMMessageFormProperties>({
			Action: new FormControl<Action | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			CollapseKey: new FormControl<string | null | undefined>(undefined),
			IconReference: new FormControl<string | null | undefined>(undefined),
			ImageIconUrl: new FormControl<string | null | undefined>(undefined),
			ImageUrl: new FormControl<string | null | undefined>(undefined),
			PreferredAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<string | null | undefined>(undefined),
			RawContent: new FormControl<string | null | undefined>(undefined),
			RestrictedPackageName: new FormControl<string | null | undefined>(undefined),
			SilentPush: new FormControl<boolean | null | undefined>(undefined),
			SmallImageIconUrl: new FormControl<string | null | undefined>(undefined),
			Sound: new FormControl<string | null | undefined>(undefined),
			TimeToLive: new FormControl<number | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the default settings for a one-time SMS message that's sent directly to an endpoint. */
	export interface SMSMessage {
		Body?: string;
		Keyword?: string;
		MediaUrl?: string;
		MessageType?: MessageType;
		OriginationNumber?: string;
		SenderId?: string;
		Substitutions?: MapOfListOf__string;
		EntityId?: string;
		TemplateId?: string;
	}

	/** Specifies the default settings for a one-time SMS message that's sent directly to an endpoint. */
	export interface SMSMessageFormProperties {
		Body: FormControl<string | null | undefined>,
		Keyword: FormControl<string | null | undefined>,
		MediaUrl: FormControl<string | null | undefined>,
		MessageType: FormControl<MessageType | null | undefined>,
		OriginationNumber: FormControl<string | null | undefined>,
		SenderId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
	}
	export function CreateSMSMessageFormGroup() {
		return new FormGroup<SMSMessageFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			Keyword: new FormControl<string | null | undefined>(undefined),
			MediaUrl: new FormControl<string | null | undefined>(undefined),
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			OriginationNumber: new FormControl<string | null | undefined>(undefined),
			SenderId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			TemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel. */
	export interface VoiceMessage {
		Body?: string;
		LanguageCode?: string;
		OriginationNumber?: string;
		Substitutions?: MapOfListOf__string;
		VoiceId?: string;
	}

	/** Specifies the settings for a one-time voice message that's sent directly to an endpoint through the voice channel. */
	export interface VoiceMessageFormProperties {
		Body: FormControl<string | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
		OriginationNumber: FormControl<string | null | undefined>,
		VoiceId: FormControl<string | null | undefined>,
	}
	export function CreateVoiceMessageFormGroup() {
		return new FormGroup<VoiceMessageFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			OriginationNumber: new FormControl<string | null | undefined>(undefined),
			VoiceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendOTPMessageResponse {

		/**
		 * Provides information about the results of a request to send a message to an endpoint address.
		 * Required
		 */
		MessageResponse: MessageResponse;
	}
	export interface SendOTPMessageResponseFormProperties {
	}
	export function CreateSendOTPMessageResponseFormGroup() {
		return new FormGroup<SendOTPMessageResponseFormProperties>({
		});

	}

	export interface SendUsersMessagesResponse {

		/**
		 * Provides information about which users and endpoints a message was sent to.
		 * Required
		 */
		SendUsersMessageResponse: SendUsersMessageResponse;
	}
	export interface SendUsersMessagesResponseFormProperties {
	}
	export function CreateSendUsersMessagesResponseFormGroup() {
		return new FormGroup<SendUsersMessagesResponseFormProperties>({
		});

	}


	/** Provides information about which users and endpoints a message was sent to. */
	export interface SendUsersMessageResponse {

		/** Required */
		ApplicationId: string;
		RequestId?: string;
		Result?: MapOfMapOfEndpointMessageResult;
	}

	/** Provides information about which users and endpoints a message was sent to. */
	export interface SendUsersMessageResponseFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateSendUsersMessageResponseFormGroup() {
		return new FormGroup<SendUsersMessageResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOfMapOfEndpointMessageResult {
	}
	export interface MapOfMapOfEndpointMessageResultFormProperties {
	}
	export function CreateMapOfMapOfEndpointMessageResultFormGroup() {
		return new FormGroup<MapOfMapOfEndpointMessageResultFormProperties>({
		});

	}

	export interface UpdateAdmChannelResponse {

		/**
		 * Provides information about the status and settings of the ADM (Amazon Device Messaging) channel for an application.
		 * Required
		 */
		ADMChannelResponse: ADMChannelResponse;
	}
	export interface UpdateAdmChannelResponseFormProperties {
	}
	export function CreateUpdateAdmChannelResponseFormGroup() {
		return new FormGroup<UpdateAdmChannelResponseFormProperties>({
		});

	}

	export interface UpdateApnsChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) channel for an application.
		 * Required
		 */
		APNSChannelResponse: APNSChannelResponse;
	}
	export interface UpdateApnsChannelResponseFormProperties {
	}
	export function CreateUpdateApnsChannelResponseFormGroup() {
		return new FormGroup<UpdateApnsChannelResponseFormProperties>({
		});

	}

	export interface UpdateApnsSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
		 * Required
		 */
		APNSSandboxChannelResponse: APNSSandboxChannelResponse;
	}
	export interface UpdateApnsSandboxChannelResponseFormProperties {
	}
	export function CreateUpdateApnsSandboxChannelResponseFormGroup() {
		return new FormGroup<UpdateApnsSandboxChannelResponseFormProperties>({
		});

	}

	export interface UpdateApnsVoipChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
		 * Required
		 */
		APNSVoipChannelResponse: APNSVoipChannelResponse;
	}
	export interface UpdateApnsVoipChannelResponseFormProperties {
	}
	export function CreateUpdateApnsVoipChannelResponseFormGroup() {
		return new FormGroup<UpdateApnsVoipChannelResponseFormProperties>({
		});

	}

	export interface UpdateApnsVoipSandboxChannelResponse {

		/**
		 * Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
		 * Required
		 */
		APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
	}
	export interface UpdateApnsVoipSandboxChannelResponseFormProperties {
	}
	export function CreateUpdateApnsVoipSandboxChannelResponseFormGroup() {
		return new FormGroup<UpdateApnsVoipSandboxChannelResponseFormProperties>({
		});

	}

	export interface UpdateApplicationSettingsResponse {

		/**
		 * Provides information about an application, including the default settings for an application.
		 * Required
		 */
		ApplicationSettingsResource: ApplicationSettingsResource;
	}
	export interface UpdateApplicationSettingsResponseFormProperties {
	}
	export function CreateUpdateApplicationSettingsResponseFormGroup() {
		return new FormGroup<UpdateApplicationSettingsResponseFormProperties>({
		});

	}

	export interface UpdateBaiduChannelResponse {

		/**
		 * Provides information about the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
		 * Required
		 */
		BaiduChannelResponse: BaiduChannelResponse;
	}
	export interface UpdateBaiduChannelResponseFormProperties {
	}
	export function CreateUpdateBaiduChannelResponseFormGroup() {
		return new FormGroup<UpdateBaiduChannelResponseFormProperties>({
		});

	}

	export interface UpdateCampaignResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a campaign.
		 * Required
		 */
		CampaignResponse: CampaignResponse;
	}
	export interface UpdateCampaignResponseFormProperties {
	}
	export function CreateUpdateCampaignResponseFormGroup() {
		return new FormGroup<UpdateCampaignResponseFormProperties>({
		});

	}

	export interface UpdateEmailChannelResponse {

		/**
		 * Provides information about the status and settings of the email channel for an application.
		 * Required
		 */
		EmailChannelResponse: EmailChannelResponse;
	}
	export interface UpdateEmailChannelResponseFormProperties {
	}
	export function CreateUpdateEmailChannelResponseFormGroup() {
		return new FormGroup<UpdateEmailChannelResponseFormProperties>({
		});

	}

	export interface UpdateEmailTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface UpdateEmailTemplateResponseFormProperties {
	}
	export function CreateUpdateEmailTemplateResponseFormGroup() {
		return new FormGroup<UpdateEmailTemplateResponseFormProperties>({
		});

	}

	export interface UpdateEndpointResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface UpdateEndpointResponseFormProperties {
	}
	export function CreateUpdateEndpointResponseFormGroup() {
		return new FormGroup<UpdateEndpointResponseFormProperties>({
		});

	}

	export enum ChannelType { PUSH = 0, GCM = 1, APNS = 2, APNS_SANDBOX = 3, APNS_VOIP = 4, APNS_VOIP_SANDBOX = 5, ADM = 6, SMS = 7, VOICE = 8, EMAIL = 9, BAIDU = 10, CUSTOM = 11, IN_APP = 12 }

	export interface UpdateEndpointsBatchResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface UpdateEndpointsBatchResponseFormProperties {
	}
	export function CreateUpdateEndpointsBatchResponseFormGroup() {
		return new FormGroup<UpdateEndpointsBatchResponseFormProperties>({
		});

	}


	/** Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint. */
	export interface EndpointBatchItem {
		Address?: string;
		Attributes?: MapOfListOf__string;
		ChannelType?: __EndpointTypesElement;
		Demographic?: EndpointDemographic;
		EffectiveDate?: string;
		EndpointStatus?: string;
		Id?: string;
		Location?: EndpointLocation;
		Metrics?: MapOf__double;
		OptOut?: string;
		RequestId?: string;
		User?: EndpointUser;
	}

	/** Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint. */
	export interface EndpointBatchItemFormProperties {
		Address: FormControl<string | null | undefined>,
		ChannelType: FormControl<__EndpointTypesElement | null | undefined>,
		EffectiveDate: FormControl<string | null | undefined>,
		EndpointStatus: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		OptOut: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateEndpointBatchItemFormGroup() {
		return new FormGroup<EndpointBatchItemFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			ChannelType: new FormControl<__EndpointTypesElement | null | undefined>(undefined),
			EffectiveDate: new FormControl<string | null | undefined>(undefined),
			EndpointStatus: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			OptOut: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGcmChannelResponse {

		/**
		 * Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
		 * Required
		 */
		GCMChannelResponse: GCMChannelResponse;
	}
	export interface UpdateGcmChannelResponseFormProperties {
	}
	export function CreateUpdateGcmChannelResponseFormGroup() {
		return new FormGroup<UpdateGcmChannelResponseFormProperties>({
		});

	}

	export interface UpdateInAppTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface UpdateInAppTemplateResponseFormProperties {
	}
	export function CreateUpdateInAppTemplateResponseFormGroup() {
		return new FormGroup<UpdateInAppTemplateResponseFormProperties>({
		});

	}

	export interface UpdateJourneyResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a journey.
		 * Required
		 */
		JourneyResponse: JourneyResponse;
	}
	export interface UpdateJourneyResponseFormProperties {
	}
	export function CreateUpdateJourneyResponseFormGroup() {
		return new FormGroup<UpdateJourneyResponseFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface UpdateJourneyStateResponse {

		/**
		 * Provides information about the status, configuration, and other settings for a journey.
		 * Required
		 */
		JourneyResponse: JourneyResponse;
	}
	export interface UpdateJourneyStateResponseFormProperties {
	}
	export function CreateUpdateJourneyStateResponseFormGroup() {
		return new FormGroup<UpdateJourneyStateResponseFormProperties>({
		});

	}

	export interface UpdatePushTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface UpdatePushTemplateResponseFormProperties {
	}
	export function CreateUpdatePushTemplateResponseFormGroup() {
		return new FormGroup<UpdatePushTemplateResponseFormProperties>({
		});

	}

	export interface UpdateRecommenderConfigurationResponse {

		/**
		 * Provides information about Amazon Pinpoint configuration settings for retrieving and processing data from a recommender model.
		 * Required
		 */
		RecommenderConfigurationResponse: RecommenderConfigurationResponse;
	}
	export interface UpdateRecommenderConfigurationResponseFormProperties {
	}
	export function CreateUpdateRecommenderConfigurationResponseFormGroup() {
		return new FormGroup<UpdateRecommenderConfigurationResponseFormProperties>({
		});

	}

	export interface UpdateSegmentResponse {

		/**
		 * Provides information about the configuration, dimension, and other settings for a segment.
		 * Required
		 */
		SegmentResponse: SegmentResponse;
	}
	export interface UpdateSegmentResponseFormProperties {
	}
	export function CreateUpdateSegmentResponseFormGroup() {
		return new FormGroup<UpdateSegmentResponseFormProperties>({
		});

	}

	export interface UpdateSmsChannelResponse {

		/**
		 * Provides information about the status and settings of the SMS channel for an application.
		 * Required
		 */
		SMSChannelResponse: SMSChannelResponse;
	}
	export interface UpdateSmsChannelResponseFormProperties {
	}
	export function CreateUpdateSmsChannelResponseFormGroup() {
		return new FormGroup<UpdateSmsChannelResponseFormProperties>({
		});

	}

	export interface UpdateSmsTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface UpdateSmsTemplateResponseFormProperties {
	}
	export function CreateUpdateSmsTemplateResponseFormGroup() {
		return new FormGroup<UpdateSmsTemplateResponseFormProperties>({
		});

	}

	export interface UpdateTemplateActiveVersionResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface UpdateTemplateActiveVersionResponseFormProperties {
	}
	export function CreateUpdateTemplateActiveVersionResponseFormGroup() {
		return new FormGroup<UpdateTemplateActiveVersionResponseFormProperties>({
		});

	}

	export interface UpdateVoiceChannelResponse {

		/**
		 * Provides information about the status and settings of the voice channel for an application.
		 * Required
		 */
		VoiceChannelResponse: VoiceChannelResponse;
	}
	export interface UpdateVoiceChannelResponseFormProperties {
	}
	export function CreateUpdateVoiceChannelResponseFormGroup() {
		return new FormGroup<UpdateVoiceChannelResponseFormProperties>({
		});

	}

	export interface UpdateVoiceTemplateResponse {

		/**
		 * Provides information about an API request or response.
		 * Required
		 */
		MessageBody: MessageBody;
	}
	export interface UpdateVoiceTemplateResponseFormProperties {
	}
	export function CreateUpdateVoiceTemplateResponseFormGroup() {
		return new FormGroup<UpdateVoiceTemplateResponseFormProperties>({
		});

	}

	export interface VerifyOTPMessageResponse {

		/**
		 * Verify OTP Message Response.
		 * Required
		 */
		VerificationResponse: VerificationResponse;
	}
	export interface VerifyOTPMessageResponseFormProperties {
	}
	export function CreateVerifyOTPMessageResponseFormGroup() {
		return new FormGroup<VerifyOTPMessageResponseFormProperties>({
		});

	}


	/** Verify OTP Message Response. */
	export interface VerificationResponse {
		Valid?: boolean | null;
	}

	/** Verify OTP Message Response. */
	export interface VerificationResponseFormProperties {
		Valid: FormControl<boolean | null | undefined>,
	}
	export function CreateVerificationResponseFormGroup() {
		return new FormGroup<VerificationResponseFormProperties>({
			Valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application. */
	export interface ADMChannelRequest {

		/** Required */
		ClientId: string;

		/** Required */
		ClientSecret: string;
		Enabled?: boolean | null;
	}

	/** Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application. */
	export interface ADMChannelRequestFormProperties {

		/** Required */
		ClientId: FormControl<string | null | undefined>,

		/** Required */
		ClientSecret: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateADMChannelRequestFormGroup() {
		return new FormGroup<ADMChannelRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application. */
	export interface APNSChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}

	/** Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application. */
	export interface APNSChannelRequestFormProperties {
		BundleId: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		TeamId: FormControl<string | null | undefined>,
		TokenKey: FormControl<string | null | undefined>,
		TokenKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAPNSChannelRequestFormGroup() {
		return new FormGroup<APNSChannelRequestFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<string | null | undefined>(undefined),
			TokenKey: new FormControl<string | null | undefined>(undefined),
			TokenKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application. */
	export interface APNSSandboxChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}

	/** Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application. */
	export interface APNSSandboxChannelRequestFormProperties {
		BundleId: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		TeamId: FormControl<string | null | undefined>,
		TokenKey: FormControl<string | null | undefined>,
		TokenKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAPNSSandboxChannelRequestFormGroup() {
		return new FormGroup<APNSSandboxChannelRequestFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<string | null | undefined>(undefined),
			TokenKey: new FormControl<string | null | undefined>(undefined),
			TokenKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application. */
	export interface APNSVoipChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}

	/** Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application. */
	export interface APNSVoipChannelRequestFormProperties {
		BundleId: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		TeamId: FormControl<string | null | undefined>,
		TokenKey: FormControl<string | null | undefined>,
		TokenKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAPNSVoipChannelRequestFormGroup() {
		return new FormGroup<APNSVoipChannelRequestFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<string | null | undefined>(undefined),
			TokenKey: new FormControl<string | null | undefined>(undefined),
			TokenKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application. */
	export interface APNSVoipSandboxChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}

	/** Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application. */
	export interface APNSVoipSandboxChannelRequestFormProperties {
		BundleId: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		TeamId: FormControl<string | null | undefined>,
		TokenKey: FormControl<string | null | undefined>,
		TokenKeyId: FormControl<string | null | undefined>,
	}
	export function CreateAPNSVoipSandboxChannelRequestFormGroup() {
		return new FormGroup<APNSVoipSandboxChannelRequestFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<string | null | undefined>(undefined),
			TokenKey: new FormControl<string | null | undefined>(undefined),
			TokenKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants. */
	export interface CustomMessageActivity {
		DeliveryUri?: string;
		EndpointTypes?: Array<__EndpointTypesElement>;
		MessageConfig?: JourneyCustomMessage;
		NextActivity?: string;
		TemplateName?: string;
		TemplateVersion?: string;
	}

	/** The settings for a custom message activity. This type of activity calls an AWS Lambda function or web hook that sends messages to participants. */
	export interface CustomMessageActivityFormProperties {
		DeliveryUri: FormControl<string | null | undefined>,
		NextActivity: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		TemplateVersion: FormControl<string | null | undefined>,
	}
	export function CreateCustomMessageActivityFormGroup() {
		return new FormGroup<CustomMessageActivityFormProperties>({
			DeliveryUri: new FormControl<string | null | undefined>(undefined),
			NextActivity: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			TemplateVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the message content for a custom channel message that's sent to participants in a journey. */
	export interface JourneyCustomMessage {
		Data?: string;
	}

	/** Specifies the message content for a custom channel message that's sent to participants in a journey. */
	export interface JourneyCustomMessageFormProperties {
		Data: FormControl<string | null | undefined>,
	}
	export function CreateJourneyCustomMessageFormGroup() {
		return new FormGroup<JourneyCustomMessageFormProperties>({
			Data: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p> <note><p>To create yes/no split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note> */
	export interface ConditionalSplitActivity {
		Condition?: Condition;
		EvaluationWaitTime?: WaitTime;
		FalseActivity?: string;
		TrueActivity?: string;
	}

	/** <p>Specifies the settings for a yes/no split activity in a journey. This type of activity sends participants down one of two paths in a journey, based on conditions that you specify.</p> <note><p>To create yes/no split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note> */
	export interface ConditionalSplitActivityFormProperties {
		FalseActivity: FormControl<string | null | undefined>,
		TrueActivity: FormControl<string | null | undefined>,
	}
	export function CreateConditionalSplitActivityFormGroup() {
		return new FormGroup<ConditionalSplitActivityFormProperties>({
			FalseActivity: new FormControl<string | null | undefined>(undefined),
			TrueActivity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions. */
	export interface Condition {
		Conditions?: Array<SimpleCondition>;
		Operator?: Operator;
	}

	/** Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions. */
	export interface ConditionFormProperties {
		Operator: FormControl<Operator | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			Operator: new FormControl<Operator | null | undefined>(undefined),
		});

	}


	/** Specifies a condition to evaluate for an activity in a journey. */
	export interface SimpleCondition {
		EventCondition?: EventCondition;
		SegmentCondition?: SegmentCondition;
		SegmentDimensions?: SegmentDimensions;
	}

	/** Specifies a condition to evaluate for an activity in a journey. */
	export interface SimpleConditionFormProperties {
	}
	export function CreateSimpleConditionFormGroup() {
		return new FormGroup<SimpleConditionFormProperties>({
		});

	}


	/** Specifies the conditions to evaluate for an event that applies to an activity in a journey. */
	export interface EventCondition {
		Dimensions?: EventDimensions;
		MessageActivity?: string;
	}

	/** Specifies the conditions to evaluate for an event that applies to an activity in a journey. */
	export interface EventConditionFormProperties {
		MessageActivity: FormControl<string | null | undefined>,
	}
	export function CreateEventConditionFormGroup() {
		return new FormGroup<EventConditionFormProperties>({
			MessageActivity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Operator { ALL = 0, ANY = 1 }


	/** Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey. */
	export interface WaitTime {
		WaitFor?: string;
		WaitUntil?: string;
	}

	/** Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey. */
	export interface WaitTimeFormProperties {
		WaitFor: FormControl<string | null | undefined>,
		WaitUntil: FormControl<string | null | undefined>,
	}
	export function CreateWaitTimeFormGroup() {
		return new FormGroup<WaitTimeFormProperties>({
			WaitFor: new FormControl<string | null | undefined>(undefined),
			WaitUntil: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants. */
	export interface EmailMessageActivity {
		MessageConfig?: JourneyEmailMessage;
		NextActivity?: string;
		TemplateName?: string;
		TemplateVersion?: string;
	}

	/** Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants. */
	export interface EmailMessageActivityFormProperties {
		NextActivity: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		TemplateVersion: FormControl<string | null | undefined>,
	}
	export function CreateEmailMessageActivityFormGroup() {
		return new FormGroup<EmailMessageActivityFormProperties>({
			NextActivity: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			TemplateVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the "From" address for an email message that's sent to participants in a journey. */
	export interface JourneyEmailMessage {
		FromAddress?: string;
	}

	/** Specifies the "From" address for an email message that's sent to participants in a journey. */
	export interface JourneyEmailMessageFormProperties {
		FromAddress: FormControl<string | null | undefined>,
	}
	export function CreateJourneyEmailMessageFormGroup() {
		return new FormGroup<JourneyEmailMessageFormProperties>({
			FromAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants. */
	export interface HoldoutActivity {
		NextActivity?: string;

		/** Required */
		Percentage: number;
	}

	/** Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants. */
	export interface HoldoutActivityFormProperties {
		NextActivity: FormControl<string | null | undefined>,

		/** Required */
		Percentage: FormControl<number | null | undefined>,
	}
	export function CreateHoldoutActivityFormGroup() {
		return new FormGroup<HoldoutActivityFormProperties>({
			NextActivity: new FormControl<string | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p> <note><p>To create multivariate split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note> */
	export interface MultiConditionalSplitActivity {
		Branches?: Array<MultiConditionalBranch>;
		DefaultActivity?: string;
		EvaluationWaitTime?: WaitTime;
	}

	/** <p>Specifies the settings for a multivariate split activity in a journey. This type of activity sends participants down one of as many as five paths (including a default <i>Else</i> path) in a journey, based on conditions that you specify.</p> <note><p>To create multivariate split activities that send participants down different paths based on push notification events (such as Open or Received events), your mobile app has to specify the User ID and Endpoint ID values. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/integrate.html">Integrating Amazon Pinpoint with your application</a> in the <i>Amazon Pinpoint Developer Guide</i>.</p></note> */
	export interface MultiConditionalSplitActivityFormProperties {
		DefaultActivity: FormControl<string | null | undefined>,
	}
	export function CreateMultiConditionalSplitActivityFormGroup() {
		return new FormGroup<MultiConditionalSplitActivityFormProperties>({
			DefaultActivity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a condition to evaluate for an activity path in a journey. */
	export interface MultiConditionalBranch {
		Condition?: SimpleCondition;
		NextActivity?: string;
	}

	/** Specifies a condition to evaluate for an activity path in a journey. */
	export interface MultiConditionalBranchFormProperties {
		NextActivity: FormControl<string | null | undefined>,
	}
	export function CreateMultiConditionalBranchFormGroup() {
		return new FormGroup<MultiConditionalBranchFormProperties>({
			NextActivity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants. */
	export interface PushMessageActivity {
		MessageConfig?: JourneyPushMessage;
		NextActivity?: string;
		TemplateName?: string;
		TemplateVersion?: string;
	}

	/** Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants. */
	export interface PushMessageActivityFormProperties {
		NextActivity: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		TemplateVersion: FormControl<string | null | undefined>,
	}
	export function CreatePushMessageActivityFormGroup() {
		return new FormGroup<PushMessageActivityFormProperties>({
			NextActivity: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			TemplateVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the message configuration for a push notification that's sent to participants in a journey. */
	export interface JourneyPushMessage {
		TimeToLive?: string;
	}

	/** Specifies the message configuration for a push notification that's sent to participants in a journey. */
	export interface JourneyPushMessageFormProperties {
		TimeToLive: FormControl<string | null | undefined>,
	}
	export function CreateJourneyPushMessageFormGroup() {
		return new FormGroup<JourneyPushMessageFormProperties>({
			TimeToLive: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify. */
	export interface RandomSplitActivity {
		Branches?: Array<RandomSplitEntry>;
	}

	/** Specifies the settings for a random split activity in a journey. This type of activity randomly sends specified percentages of participants down one of as many as five paths in a journey, based on conditions that you specify. */
	export interface RandomSplitActivityFormProperties {
	}
	export function CreateRandomSplitActivityFormGroup() {
		return new FormGroup<RandomSplitActivityFormProperties>({
		});

	}


	/** Specifies the settings for a path in a random split activity in a journey. */
	export interface RandomSplitEntry {
		NextActivity?: string;
		Percentage?: number | null;
	}

	/** Specifies the settings for a path in a random split activity in a journey. */
	export interface RandomSplitEntryFormProperties {
		NextActivity: FormControl<string | null | undefined>,
		Percentage: FormControl<number | null | undefined>,
	}
	export function CreateRandomSplitEntryFormGroup() {
		return new FormGroup<RandomSplitEntryFormProperties>({
			NextActivity: new FormControl<string | null | undefined>(undefined),
			Percentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants. */
	export interface SMSMessageActivity {
		MessageConfig?: JourneySMSMessage;
		NextActivity?: string;
		TemplateName?: string;
		TemplateVersion?: string;
	}

	/** Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants. */
	export interface SMSMessageActivityFormProperties {
		NextActivity: FormControl<string | null | undefined>,
		TemplateName: FormControl<string | null | undefined>,
		TemplateVersion: FormControl<string | null | undefined>,
	}
	export function CreateSMSMessageActivityFormGroup() {
		return new FormGroup<SMSMessageActivityFormProperties>({
			NextActivity: new FormControl<string | null | undefined>(undefined),
			TemplateName: new FormControl<string | null | undefined>(undefined),
			TemplateVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the sender ID and message type for an SMS message that's sent to participants in a journey. */
	export interface JourneySMSMessage {
		MessageType?: MessageType;
		OriginationNumber?: string;
		SenderId?: string;
		EntityId?: string;
		TemplateId?: string;
	}

	/** Specifies the sender ID and message type for an SMS message that's sent to participants in a journey. */
	export interface JourneySMSMessageFormProperties {
		MessageType: FormControl<MessageType | null | undefined>,
		OriginationNumber: FormControl<string | null | undefined>,
		SenderId: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
	}
	export function CreateJourneySMSMessageFormGroup() {
		return new FormGroup<JourneySMSMessageFormProperties>({
			MessageType: new FormControl<MessageType | null | undefined>(undefined),
			OriginationNumber: new FormControl<string | null | undefined>(undefined),
			SenderId: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			TemplateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey. */
	export interface WaitActivity {
		NextActivity?: string;
		WaitTime?: WaitTime;
	}

	/** Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey. */
	export interface WaitActivityFormProperties {
		NextActivity: FormControl<string | null | undefined>,
	}
	export function CreateWaitActivityFormGroup() {
		return new FormGroup<WaitActivityFormProperties>({
			NextActivity: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContactCenterActivity {
		NextActivity?: string;
	}
	export interface ContactCenterActivityFormProperties {
		NextActivity: FormControl<string | null | undefined>,
	}
	export function CreateContactCenterActivityFormGroup() {
		return new FormGroup<ContactCenterActivityFormProperties>({
			NextActivity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the configuration and other settings for an activity in a journey. */
	export interface Activity {
		CUSTOM?: CustomMessageActivity;
		ConditionalSplit?: ConditionalSplitActivity;
		Description?: string;
		EMAIL?: EmailMessageActivity;
		Holdout?: HoldoutActivity;
		MultiCondition?: MultiConditionalSplitActivity;
		PUSH?: PushMessageActivity;
		RandomSplit?: RandomSplitActivity;
		SMS?: SMSMessageActivity;
		Wait?: WaitActivity;
		ContactCenter?: ContactCenterActivity;
	}

	/** Specifies the configuration and other settings for an activity in a journey. */
	export interface ActivityFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

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

	/** Specifies address-based configuration settings for a message that's sent directly to an endpoint. */
	export interface AddressConfigurationFormProperties {
		BodyOverride: FormControl<string | null | undefined>,
		ChannelType: FormControl<__EndpointTypesElement | null | undefined>,
		RawContent: FormControl<string | null | undefined>,
		TitleOverride: FormControl<string | null | undefined>,
	}
	export function CreateAddressConfigurationFormGroup() {
		return new FormGroup<AddressConfigurationFormProperties>({
			BodyOverride: new FormControl<string | null | undefined>(undefined),
			ChannelType: new FormControl<__EndpointTypesElement | null | undefined>(undefined),
			RawContent: new FormControl<string | null | undefined>(undefined),
			TitleOverride: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AttributeType { INCLUSIVE = 0, EXCLUSIVE = 1, CONTAINS = 2, BEFORE = 3, AFTER = 4, ON = 5, BETWEEN = 6 }


	/** Specifies attribute-based criteria for including or excluding endpoints from a segment. */
	export interface AttributeDimension {
		AttributeType?: AttributeType;

		/** Required */
		Values: Array<string>;
	}

	/** Specifies attribute-based criteria for including or excluding endpoints from a segment. */
	export interface AttributeDimensionFormProperties {
		AttributeType: FormControl<AttributeType | null | undefined>,
	}
	export function CreateAttributeDimensionFormGroup() {
		return new FormGroup<AttributeDimensionFormProperties>({
			AttributeType: new FormControl<AttributeType | null | undefined>(undefined),
		});

	}


	/** Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application. */
	export interface BaiduChannelRequest {

		/** Required */
		ApiKey: string;
		Enabled?: boolean | null;

		/** Required */
		SecretKey: string;
	}

	/** Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application. */
	export interface BaiduChannelRequestFormProperties {

		/** Required */
		ApiKey: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		SecretKey: FormControl<string | null | undefined>,
	}
	export function CreateBaiduChannelRequestFormGroup() {
		return new FormGroup<BaiduChannelRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			SecretKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides information about the general settings and status of a channel for an application. */
	export interface ChannelResponse {
		ApplicationId?: string;
		CreationDate?: string;
		Enabled?: boolean | null;
		HasCredential?: boolean | null;
		Id?: string;
		IsArchived?: boolean | null;
		LastModifiedBy?: string;
		LastModifiedDate?: string;
		Version?: number | null;
	}

	/** Provides information about the general settings and status of a channel for an application. */
	export interface ChannelResponseFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		CreationDate: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		HasCredential: FormControl<boolean | null | undefined>,
		Id: FormControl<string | null | undefined>,
		IsArchived: FormControl<boolean | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateChannelResponseFormGroup() {
		return new FormGroup<ChannelResponseFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			CreationDate: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			HasCredential: new FormControl<boolean | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			IsArchived: new FormControl<boolean | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the display name of an application and the tags to associate with the application. */
	export interface CreateApplicationRequest {

		/** Required */
		Name: string;
		tags?: MapOf__string;
	}

	/** Specifies the display name of an application and the tags to associate with the application. */
	export interface CreateApplicationRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAppRequest {

		/**
		 * Specifies the display name of an application and the tags to associate with the application.
		 * Required
		 */
		CreateApplicationRequest: CreateApplicationRequest;
	}
	export interface CreateAppRequestFormProperties {
	}
	export function CreateCreateAppRequestFormGroup() {
		return new FormGroup<CreateAppRequestFormProperties>({
		});

	}


	/** Specifies the configuration and other settings for a campaign. */
	export interface WriteCampaignRequest {
		AdditionalTreatments?: Array<WriteTreatmentResource>;
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
		Description?: string;
		HoldoutPercent?: number | null;
		Hook?: CampaignHook;
		IsPaused?: boolean | null;
		Limits?: CampaignLimits;
		MessageConfiguration?: MessageConfiguration;
		Name?: string;
		Schedule?: Schedule;
		SegmentId?: string;
		SegmentVersion?: number | null;
		tags?: MapOf__string;
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
		Priority?: number | null;
	}

	/** Specifies the configuration and other settings for a campaign. */
	export interface WriteCampaignRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		HoldoutPercent: FormControl<number | null | undefined>,
		IsPaused: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SegmentId: FormControl<string | null | undefined>,
		SegmentVersion: FormControl<number | null | undefined>,
		TreatmentDescription: FormControl<string | null | undefined>,
		TreatmentName: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateWriteCampaignRequestFormGroup() {
		return new FormGroup<WriteCampaignRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			HoldoutPercent: new FormControl<number | null | undefined>(undefined),
			IsPaused: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SegmentId: new FormControl<string | null | undefined>(undefined),
			SegmentVersion: new FormControl<number | null | undefined>(undefined),
			TreatmentDescription: new FormControl<string | null | undefined>(undefined),
			TreatmentName: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateCampaignRequest {

		/**
		 * Specifies the configuration and other settings for a campaign.
		 * Required
		 */
		WriteCampaignRequest: WriteCampaignRequest;
	}
	export interface CreateCampaignRequestFormProperties {
	}
	export function CreateCreateCampaignRequestFormGroup() {
		return new FormGroup<CreateCampaignRequestFormProperties>({
		});

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

	/** Specifies the content and settings for a message template that can be used in messages that are sent through the email channel. */
	export interface EmailTemplateRequestFormProperties {
		DefaultSubstitutions: FormControl<string | null | undefined>,
		HtmlPart: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
		TextPart: FormControl<string | null | undefined>,
	}
	export function CreateEmailTemplateRequestFormGroup() {
		return new FormGroup<EmailTemplateRequestFormProperties>({
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			HtmlPart: new FormControl<string | null | undefined>(undefined),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			TextPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEmailTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
		 * Required
		 */
		EmailTemplateRequest: EmailTemplateRequest;
	}
	export interface CreateEmailTemplateRequestFormProperties {
	}
	export function CreateCreateEmailTemplateRequestFormGroup() {
		return new FormGroup<CreateEmailTemplateRequestFormProperties>({
		});

	}


	/** Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket. */
	export interface ExportJobRequest {

		/** Required */
		RoleArn: string;

		/** Required */
		S3UrlPrefix: string;
		SegmentId?: string;
		SegmentVersion?: number | null;
	}

	/** Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket. */
	export interface ExportJobRequestFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		S3UrlPrefix: FormControl<string | null | undefined>,
		SegmentId: FormControl<string | null | undefined>,
		SegmentVersion: FormControl<number | null | undefined>,
	}
	export function CreateExportJobRequestFormGroup() {
		return new FormGroup<ExportJobRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3UrlPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SegmentId: new FormControl<string | null | undefined>(undefined),
			SegmentVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateExportJobRequest {

		/**
		 * Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
		 * Required
		 */
		ExportJobRequest: ExportJobRequest;
	}
	export interface CreateExportJobRequestFormProperties {
	}
	export function CreateCreateExportJobRequestFormGroup() {
		return new FormGroup<CreateExportJobRequestFormProperties>({
		});

	}


	/** Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket. */
	export interface ImportJobRequest {
		DefineSegment?: boolean | null;
		ExternalId?: string;

		/** Required */
		Format: Format;
		RegisterEndpoints?: boolean | null;

		/** Required */
		RoleArn: string;

		/** Required */
		S3Url: string;
		SegmentId?: string;
		SegmentName?: string;
	}

	/** Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket. */
	export interface ImportJobRequestFormProperties {
		DefineSegment: FormControl<boolean | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,

		/** Required */
		Format: FormControl<Format | null | undefined>,
		RegisterEndpoints: FormControl<boolean | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		S3Url: FormControl<string | null | undefined>,
		SegmentId: FormControl<string | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
	}
	export function CreateImportJobRequestFormGroup() {
		return new FormGroup<ImportJobRequestFormProperties>({
			DefineSegment: new FormControl<boolean | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<Format | null | undefined>(undefined, [Validators.required]),
			RegisterEndpoints: new FormControl<boolean | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			S3Url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SegmentId: new FormControl<string | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateImportJobRequest {

		/**
		 * Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
		 * Required
		 */
		ImportJobRequest: ImportJobRequest;
	}
	export interface CreateImportJobRequestFormProperties {
	}
	export function CreateCreateImportJobRequestFormGroup() {
		return new FormGroup<CreateImportJobRequestFormProperties>({
		});

	}


	/** InApp Template Request. */
	export interface InAppTemplateRequest {
		Content?: Array<InAppMessageContent>;
		CustomConfig?: MapOf__string;
		Layout?: Layout;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}

	/** InApp Template Request. */
	export interface InAppTemplateRequestFormProperties {
		Layout: FormControl<Layout | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreateInAppTemplateRequestFormGroup() {
		return new FormGroup<InAppTemplateRequestFormProperties>({
			Layout: new FormControl<Layout | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateInAppTemplateRequest {

		/**
		 * InApp Template Request.
		 * Required
		 */
		InAppTemplateRequest: InAppTemplateRequest;
	}
	export interface CreateInAppTemplateRequestFormProperties {
	}
	export function CreateCreateInAppTemplateRequestFormGroup() {
		return new FormGroup<CreateInAppTemplateRequestFormProperties>({
		});

	}


	/** Specifies the configuration and other settings for a journey. */
	export interface WriteJourneyRequest {
		Activities?: MapOfActivity;
		CreationDate?: string;
		LastModifiedDate?: string;
		Limits?: JourneyLimits;
		LocalTime?: boolean | null;

		/** Required */
		Name: string;
		QuietTime?: QuietTime;
		RefreshFrequency?: string;
		Schedule?: JourneySchedule;
		StartActivity?: string;
		StartCondition?: StartCondition;
		State?: State;
		WaitForQuietTime?: boolean | null;
		RefreshOnSegmentUpdate?: boolean | null;
		JourneyChannelSettings?: JourneyChannelSettings;
		SendingSchedule?: boolean | null;
		OpenHours?: OpenHours;
		ClosedDays?: ClosedDays;
		TimezoneEstimationMethods?: Array<__TimezoneEstimationMethodsElement>;
	}

	/** Specifies the configuration and other settings for a journey. */
	export interface WriteJourneyRequestFormProperties {
		CreationDate: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		LocalTime: FormControl<boolean | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		RefreshFrequency: FormControl<string | null | undefined>,
		StartActivity: FormControl<string | null | undefined>,
		State: FormControl<State | null | undefined>,
		WaitForQuietTime: FormControl<boolean | null | undefined>,
		RefreshOnSegmentUpdate: FormControl<boolean | null | undefined>,
		SendingSchedule: FormControl<boolean | null | undefined>,
	}
	export function CreateWriteJourneyRequestFormGroup() {
		return new FormGroup<WriteJourneyRequestFormProperties>({
			CreationDate: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			LocalTime: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RefreshFrequency: new FormControl<string | null | undefined>(undefined),
			StartActivity: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
			WaitForQuietTime: new FormControl<boolean | null | undefined>(undefined),
			RefreshOnSegmentUpdate: new FormControl<boolean | null | undefined>(undefined),
			SendingSchedule: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateJourneyRequest {

		/**
		 * Specifies the configuration and other settings for a journey.
		 * Required
		 */
		WriteJourneyRequest: WriteJourneyRequest;
	}
	export interface CreateJourneyRequestFormProperties {
	}
	export function CreateCreateJourneyRequestFormGroup() {
		return new FormGroup<CreateJourneyRequestFormProperties>({
		});

	}


	/** Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel. */
	export interface PushNotificationTemplateRequest {
		ADM?: AndroidPushNotificationTemplate;
		APNS?: APNSPushNotificationTemplate;
		Baidu?: AndroidPushNotificationTemplate;
		Default?: DefaultPushNotificationTemplate;
		DefaultSubstitutions?: string;
		GCM?: AndroidPushNotificationTemplate;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}

	/** Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel. */
	export interface PushNotificationTemplateRequestFormProperties {
		DefaultSubstitutions: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreatePushNotificationTemplateRequestFormGroup() {
		return new FormGroup<PushNotificationTemplateRequestFormProperties>({
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePushTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
		 * Required
		 */
		PushNotificationTemplateRequest: PushNotificationTemplateRequest;
	}
	export interface CreatePushTemplateRequestFormProperties {
	}
	export function CreateCreatePushTemplateRequestFormGroup() {
		return new FormGroup<CreatePushTemplateRequestFormProperties>({
		});

	}


	/** Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model. */
	export interface CreateRecommenderConfiguration {
		Attributes?: MapOf__string;
		Description?: string;
		Name?: string;
		RecommendationProviderIdType?: string;

		/** Required */
		RecommendationProviderRoleArn: string;

		/** Required */
		RecommendationProviderUri: string;
		RecommendationTransformerUri?: string;
		RecommendationsDisplayName?: string;
		RecommendationsPerMessage?: number | null;
	}

	/** Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model. */
	export interface CreateRecommenderConfigurationFormProperties {
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RecommendationProviderIdType: FormControl<string | null | undefined>,

		/** Required */
		RecommendationProviderRoleArn: FormControl<string | null | undefined>,

		/** Required */
		RecommendationProviderUri: FormControl<string | null | undefined>,
		RecommendationTransformerUri: FormControl<string | null | undefined>,
		RecommendationsDisplayName: FormControl<string | null | undefined>,
		RecommendationsPerMessage: FormControl<number | null | undefined>,
	}
	export function CreateCreateRecommenderConfigurationFormGroup() {
		return new FormGroup<CreateRecommenderConfigurationFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderIdType: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommendationProviderUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommendationTransformerUri: new FormControl<string | null | undefined>(undefined),
			RecommendationsDisplayName: new FormControl<string | null | undefined>(undefined),
			RecommendationsPerMessage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateRecommenderConfigurationRequest {

		/**
		 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
		 * Required
		 */
		CreateRecommenderConfiguration: CreateRecommenderConfiguration;
	}
	export interface CreateRecommenderConfigurationRequestFormProperties {
	}
	export function CreateCreateRecommenderConfigurationRequestFormGroup() {
		return new FormGroup<CreateRecommenderConfigurationRequestFormProperties>({
		});

	}


	/** Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both. */
	export interface WriteSegmentRequest {
		Dimensions?: SegmentDimensions;
		Name?: string;
		SegmentGroups?: SegmentGroupList;
		tags?: MapOf__string;
	}

	/** Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both. */
	export interface WriteSegmentRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateWriteSegmentRequestFormGroup() {
		return new FormGroup<WriteSegmentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSegmentRequest {

		/**
		 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
		 * Required
		 */
		WriteSegmentRequest: WriteSegmentRequest;
	}
	export interface CreateSegmentRequestFormProperties {
	}
	export function CreateCreateSegmentRequestFormGroup() {
		return new FormGroup<CreateSegmentRequestFormProperties>({
		});

	}


	/** Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel. */
	export interface SMSTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}

	/** Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel. */
	export interface SMSTemplateRequestFormProperties {
		Body: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreateSMSTemplateRequestFormGroup() {
		return new FormGroup<SMSTemplateRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSmsTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
		 * Required
		 */
		SMSTemplateRequest: SMSTemplateRequest;
	}
	export interface CreateSmsTemplateRequestFormProperties {
	}
	export function CreateCreateSmsTemplateRequestFormGroup() {
		return new FormGroup<CreateSmsTemplateRequestFormProperties>({
		});

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

	/** Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel. */
	export interface VoiceTemplateRequestFormProperties {
		Body: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
		VoiceId: FormControl<string | null | undefined>,
	}
	export function CreateVoiceTemplateRequestFormGroup() {
		return new FormGroup<VoiceTemplateRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			VoiceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVoiceTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
		 * Required
		 */
		VoiceTemplateRequest: VoiceTemplateRequest;
	}
	export interface CreateVoiceTemplateRequestFormProperties {
	}
	export function CreateCreateVoiceTemplateRequestFormGroup() {
		return new FormGroup<CreateVoiceTemplateRequestFormProperties>({
		});

	}

	export interface DeleteAdmChannelRequest {
	}
	export interface DeleteAdmChannelRequestFormProperties {
	}
	export function CreateDeleteAdmChannelRequestFormGroup() {
		return new FormGroup<DeleteAdmChannelRequestFormProperties>({
		});

	}

	export interface DeleteApnsChannelRequest {
	}
	export interface DeleteApnsChannelRequestFormProperties {
	}
	export function CreateDeleteApnsChannelRequestFormGroup() {
		return new FormGroup<DeleteApnsChannelRequestFormProperties>({
		});

	}

	export interface DeleteApnsSandboxChannelRequest {
	}
	export interface DeleteApnsSandboxChannelRequestFormProperties {
	}
	export function CreateDeleteApnsSandboxChannelRequestFormGroup() {
		return new FormGroup<DeleteApnsSandboxChannelRequestFormProperties>({
		});

	}

	export interface DeleteApnsVoipChannelRequest {
	}
	export interface DeleteApnsVoipChannelRequestFormProperties {
	}
	export function CreateDeleteApnsVoipChannelRequestFormGroup() {
		return new FormGroup<DeleteApnsVoipChannelRequestFormProperties>({
		});

	}

	export interface DeleteApnsVoipSandboxChannelRequest {
	}
	export interface DeleteApnsVoipSandboxChannelRequestFormProperties {
	}
	export function CreateDeleteApnsVoipSandboxChannelRequestFormGroup() {
		return new FormGroup<DeleteApnsVoipSandboxChannelRequestFormProperties>({
		});

	}

	export interface DeleteAppRequest {
	}
	export interface DeleteAppRequestFormProperties {
	}
	export function CreateDeleteAppRequestFormGroup() {
		return new FormGroup<DeleteAppRequestFormProperties>({
		});

	}

	export interface DeleteBaiduChannelRequest {
	}
	export interface DeleteBaiduChannelRequestFormProperties {
	}
	export function CreateDeleteBaiduChannelRequestFormGroup() {
		return new FormGroup<DeleteBaiduChannelRequestFormProperties>({
		});

	}

	export interface DeleteCampaignRequest {
	}
	export interface DeleteCampaignRequestFormProperties {
	}
	export function CreateDeleteCampaignRequestFormGroup() {
		return new FormGroup<DeleteCampaignRequestFormProperties>({
		});

	}

	export interface DeleteEmailChannelRequest {
	}
	export interface DeleteEmailChannelRequestFormProperties {
	}
	export function CreateDeleteEmailChannelRequestFormGroup() {
		return new FormGroup<DeleteEmailChannelRequestFormProperties>({
		});

	}

	export interface DeleteEmailTemplateRequest {
	}
	export interface DeleteEmailTemplateRequestFormProperties {
	}
	export function CreateDeleteEmailTemplateRequestFormGroup() {
		return new FormGroup<DeleteEmailTemplateRequestFormProperties>({
		});

	}

	export interface DeleteEndpointRequest {
	}
	export interface DeleteEndpointRequestFormProperties {
	}
	export function CreateDeleteEndpointRequestFormGroup() {
		return new FormGroup<DeleteEndpointRequestFormProperties>({
		});

	}

	export interface DeleteEventStreamRequest {
	}
	export interface DeleteEventStreamRequestFormProperties {
	}
	export function CreateDeleteEventStreamRequestFormGroup() {
		return new FormGroup<DeleteEventStreamRequestFormProperties>({
		});

	}

	export interface DeleteGcmChannelRequest {
	}
	export interface DeleteGcmChannelRequestFormProperties {
	}
	export function CreateDeleteGcmChannelRequestFormGroup() {
		return new FormGroup<DeleteGcmChannelRequestFormProperties>({
		});

	}

	export interface DeleteInAppTemplateRequest {
	}
	export interface DeleteInAppTemplateRequestFormProperties {
	}
	export function CreateDeleteInAppTemplateRequestFormGroup() {
		return new FormGroup<DeleteInAppTemplateRequestFormProperties>({
		});

	}

	export interface DeleteJourneyRequest {
	}
	export interface DeleteJourneyRequestFormProperties {
	}
	export function CreateDeleteJourneyRequestFormGroup() {
		return new FormGroup<DeleteJourneyRequestFormProperties>({
		});

	}

	export interface DeletePushTemplateRequest {
	}
	export interface DeletePushTemplateRequestFormProperties {
	}
	export function CreateDeletePushTemplateRequestFormGroup() {
		return new FormGroup<DeletePushTemplateRequestFormProperties>({
		});

	}

	export interface DeleteRecommenderConfigurationRequest {
	}
	export interface DeleteRecommenderConfigurationRequestFormProperties {
	}
	export function CreateDeleteRecommenderConfigurationRequestFormGroup() {
		return new FormGroup<DeleteRecommenderConfigurationRequestFormProperties>({
		});

	}

	export interface DeleteSegmentRequest {
	}
	export interface DeleteSegmentRequestFormProperties {
	}
	export function CreateDeleteSegmentRequestFormGroup() {
		return new FormGroup<DeleteSegmentRequestFormProperties>({
		});

	}

	export interface DeleteSmsChannelRequest {
	}
	export interface DeleteSmsChannelRequestFormProperties {
	}
	export function CreateDeleteSmsChannelRequestFormGroup() {
		return new FormGroup<DeleteSmsChannelRequestFormProperties>({
		});

	}

	export interface DeleteSmsTemplateRequest {
	}
	export interface DeleteSmsTemplateRequestFormProperties {
	}
	export function CreateDeleteSmsTemplateRequestFormGroup() {
		return new FormGroup<DeleteSmsTemplateRequestFormProperties>({
		});

	}

	export interface DeleteUserEndpointsRequest {
	}
	export interface DeleteUserEndpointsRequestFormProperties {
	}
	export function CreateDeleteUserEndpointsRequestFormGroup() {
		return new FormGroup<DeleteUserEndpointsRequestFormProperties>({
		});

	}

	export interface DeleteVoiceChannelRequest {
	}
	export interface DeleteVoiceChannelRequestFormProperties {
	}
	export function CreateDeleteVoiceChannelRequestFormGroup() {
		return new FormGroup<DeleteVoiceChannelRequestFormProperties>({
		});

	}

	export interface DeleteVoiceTemplateRequest {
	}
	export interface DeleteVoiceTemplateRequestFormProperties {
	}
	export function CreateDeleteVoiceTemplateRequestFormGroup() {
		return new FormGroup<DeleteVoiceTemplateRequestFormProperties>({
		});

	}

	export enum DeliveryStatus { SUCCESSFUL = 0, THROTTLED = 1, TEMPORARY_FAILURE = 2, PERMANENT_FAILURE = 3, UNKNOWN_FAILURE = 4, OPT_OUT = 5, DUPLICATE = 6 }


	/** Specifies the status and settings of the email channel for an application. */
	export interface EmailChannelRequest {
		ConfigurationSet?: string;
		Enabled?: boolean | null;

		/** Required */
		FromAddress: string;

		/** Required */
		Identity: string;
		RoleArn?: string;
	}

	/** Specifies the status and settings of the email channel for an application. */
	export interface EmailChannelRequestFormProperties {
		ConfigurationSet: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,

		/** Required */
		FromAddress: FormControl<string | null | undefined>,

		/** Required */
		Identity: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateEmailChannelRequestFormGroup() {
		return new FormGroup<EmailChannelRequestFormProperties>({
			ConfigurationSet: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			FromAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Identity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint. */
	export interface EndpointBatchRequest {

		/** Required */
		Item: Array<EndpointBatchItem>;
	}

	/** Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint. */
	export interface EndpointBatchRequestFormProperties {
	}
	export function CreateEndpointBatchRequestFormGroup() {
		return new FormGroup<EndpointBatchRequestFormProperties>({
		});

	}


	/** Provides the status code and message that result from processing data for an endpoint. */
	export interface EndpointItemResponse {
		Message?: string;
		StatusCode?: number | null;
	}

	/** Provides the status code and message that result from processing data for an endpoint. */
	export interface EndpointItemResponseFormProperties {
		Message: FormControl<string | null | undefined>,
		StatusCode: FormControl<number | null | undefined>,
	}
	export function CreateEndpointItemResponseFormGroup() {
		return new FormGroup<EndpointItemResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Provides information about the delivery status and results of sending a message directly to an endpoint. */
	export interface EndpointMessageResult {
		Address?: string;

		/** Required */
		DeliveryStatus: DeliveryStatus;
		MessageId?: string;

		/** Required */
		StatusCode: number;
		StatusMessage?: string;
		UpdatedToken?: string;
	}

	/** Provides information about the delivery status and results of sending a message directly to an endpoint. */
	export interface EndpointMessageResultFormProperties {
		Address: FormControl<string | null | undefined>,

		/** Required */
		DeliveryStatus: FormControl<DeliveryStatus | null | undefined>,
		MessageId: FormControl<string | null | undefined>,

		/** Required */
		StatusCode: FormControl<number | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		UpdatedToken: FormControl<string | null | undefined>,
	}
	export function CreateEndpointMessageResultFormGroup() {
		return new FormGroup<EndpointMessageResultFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			DeliveryStatus: new FormControl<DeliveryStatus | null | undefined>(undefined, [Validators.required]),
			MessageId: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			UpdatedToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the channel type and other settings for an endpoint. */
	export interface EndpointRequest {
		Address?: string;
		Attributes?: MapOfListOf__string;
		ChannelType?: __EndpointTypesElement;
		Demographic?: EndpointDemographic;
		EffectiveDate?: string;
		EndpointStatus?: string;
		Location?: EndpointLocation;
		Metrics?: MapOf__double;
		OptOut?: string;
		RequestId?: string;
		User?: EndpointUser;
	}

	/** Specifies the channel type and other settings for an endpoint. */
	export interface EndpointRequestFormProperties {
		Address: FormControl<string | null | undefined>,
		ChannelType: FormControl<__EndpointTypesElement | null | undefined>,
		EffectiveDate: FormControl<string | null | undefined>,
		EndpointStatus: FormControl<string | null | undefined>,
		OptOut: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateEndpointRequestFormGroup() {
		return new FormGroup<EndpointRequestFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			ChannelType: new FormControl<__EndpointTypesElement | null | undefined>(undefined),
			EffectiveDate: new FormControl<string | null | undefined>(undefined),
			EndpointStatus: new FormControl<string | null | undefined>(undefined),
			OptOut: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint. */
	export interface EndpointSendConfiguration {
		BodyOverride?: string;
		Context?: MapOf__string;
		RawContent?: string;
		Substitutions?: MapOfListOf__string;
		TitleOverride?: string;
	}

	/** Specifies the content, including message variables and attributes, to use in a message that's sent directly to an endpoint. */
	export interface EndpointSendConfigurationFormProperties {
		BodyOverride: FormControl<string | null | undefined>,
		RawContent: FormControl<string | null | undefined>,
		TitleOverride: FormControl<string | null | undefined>,
	}
	export function CreateEndpointSendConfigurationFormGroup() {
		return new FormGroup<EndpointSendConfigurationFormProperties>({
			BodyOverride: new FormControl<string | null | undefined>(undefined),
			RawContent: new FormControl<string | null | undefined>(undefined),
			TitleOverride: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about a session. */
	export interface Session {
		Duration?: number | null;

		/** Required */
		Id: string;

		/** Required */
		StartTimestamp: string;
		StopTimestamp?: string;
	}

	/** Provides information about a session. */
	export interface SessionFormProperties {
		Duration: FormControl<number | null | undefined>,

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		StartTimestamp: FormControl<string | null | undefined>,
		StopTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateSessionFormGroup() {
		return new FormGroup<SessionFormProperties>({
			Duration: new FormControl<number | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTimestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StopTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies information about an event that reports data to Amazon Pinpoint. */
	export interface Event {
		AppPackageName?: string;
		AppTitle?: string;
		AppVersionCode?: string;
		Attributes?: MapOf__string;
		ClientSdkVersion?: string;

		/** Required */
		EventType: string;
		Metrics?: MapOf__double;
		SdkName?: string;
		Session?: Session;

		/** Required */
		Timestamp: string;
	}

	/** Specifies information about an event that reports data to Amazon Pinpoint. */
	export interface EventFormProperties {
		AppPackageName: FormControl<string | null | undefined>,
		AppTitle: FormControl<string | null | undefined>,
		AppVersionCode: FormControl<string | null | undefined>,
		ClientSdkVersion: FormControl<string | null | undefined>,

		/** Required */
		EventType: FormControl<string | null | undefined>,
		SdkName: FormControl<string | null | undefined>,

		/** Required */
		Timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			AppPackageName: new FormControl<string | null | undefined>(undefined),
			AppTitle: new FormControl<string | null | undefined>(undefined),
			AppVersionCode: new FormControl<string | null | undefined>(undefined),
			ClientSdkVersion: new FormControl<string | null | undefined>(undefined),
			EventType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SdkName: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Provides the status code and message that result from processing an event. */
	export interface EventItemResponse {
		Message?: string;
		StatusCode?: number | null;
	}

	/** Provides the status code and message that result from processing an event. */
	export interface EventItemResponseFormProperties {
		Message: FormControl<string | null | undefined>,
		StatusCode: FormControl<number | null | undefined>,
	}
	export function CreateEventItemResponseFormGroup() {
		return new FormGroup<EventItemResponseFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the properties and attributes of an endpoint that's associated with an event. */
	export interface PublicEndpoint {
		Address?: string;
		Attributes?: MapOfListOf__string;
		ChannelType?: __EndpointTypesElement;
		Demographic?: EndpointDemographic;
		EffectiveDate?: string;
		EndpointStatus?: string;
		Location?: EndpointLocation;
		Metrics?: MapOf__double;
		OptOut?: string;
		RequestId?: string;
		User?: EndpointUser;
	}

	/** Specifies the properties and attributes of an endpoint that's associated with an event. */
	export interface PublicEndpointFormProperties {
		Address: FormControl<string | null | undefined>,
		ChannelType: FormControl<__EndpointTypesElement | null | undefined>,
		EffectiveDate: FormControl<string | null | undefined>,
		EndpointStatus: FormControl<string | null | undefined>,
		OptOut: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreatePublicEndpointFormGroup() {
		return new FormGroup<PublicEndpointFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			ChannelType: new FormControl<__EndpointTypesElement | null | undefined>(undefined),
			EffectiveDate: new FormControl<string | null | undefined>(undefined),
			EndpointStatus: new FormControl<string | null | undefined>(undefined),
			OptOut: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MapOfEvent {
	}
	export interface MapOfEventFormProperties {
	}
	export function CreateMapOfEventFormGroup() {
		return new FormGroup<MapOfEventFormProperties>({
		});

	}


	/** Specifies a batch of endpoints and events to process. */
	export interface EventsBatch {

		/** Required */
		Endpoint: PublicEndpoint;

		/** Required */
		Events: MapOfEvent;
	}

	/** Specifies a batch of endpoints and events to process. */
	export interface EventsBatchFormProperties {
	}
	export function CreateEventsBatchFormGroup() {
		return new FormGroup<EventsBatchFormProperties>({
		});

	}


	/** Specifies a batch of events to process. */
	export interface EventsRequest {

		/** Required */
		BatchItem: MapOfEventsBatch;
	}

	/** Specifies a batch of events to process. */
	export interface EventsRequestFormProperties {
	}
	export function CreateEventsRequestFormGroup() {
		return new FormGroup<EventsRequestFormProperties>({
		});

	}


	/** Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. */
	export interface GCMChannelRequest {
		ApiKey?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		ServiceJson?: string;
	}

	/** Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service. */
	export interface GCMChannelRequestFormProperties {
		ApiKey: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		ServiceJson: FormControl<string | null | undefined>,
	}
	export function CreateGCMChannelRequestFormGroup() {
		return new FormGroup<GCMChannelRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			ServiceJson: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAdmChannelRequest {
	}
	export interface GetAdmChannelRequestFormProperties {
	}
	export function CreateGetAdmChannelRequestFormGroup() {
		return new FormGroup<GetAdmChannelRequestFormProperties>({
		});

	}

	export interface GetApnsChannelRequest {
	}
	export interface GetApnsChannelRequestFormProperties {
	}
	export function CreateGetApnsChannelRequestFormGroup() {
		return new FormGroup<GetApnsChannelRequestFormProperties>({
		});

	}

	export interface GetApnsSandboxChannelRequest {
	}
	export interface GetApnsSandboxChannelRequestFormProperties {
	}
	export function CreateGetApnsSandboxChannelRequestFormGroup() {
		return new FormGroup<GetApnsSandboxChannelRequestFormProperties>({
		});

	}

	export interface GetApnsVoipChannelRequest {
	}
	export interface GetApnsVoipChannelRequestFormProperties {
	}
	export function CreateGetApnsVoipChannelRequestFormGroup() {
		return new FormGroup<GetApnsVoipChannelRequestFormProperties>({
		});

	}

	export interface GetApnsVoipSandboxChannelRequest {
	}
	export interface GetApnsVoipSandboxChannelRequestFormProperties {
	}
	export function CreateGetApnsVoipSandboxChannelRequestFormGroup() {
		return new FormGroup<GetApnsVoipSandboxChannelRequestFormProperties>({
		});

	}

	export interface GetAppRequest {
	}
	export interface GetAppRequestFormProperties {
	}
	export function CreateGetAppRequestFormGroup() {
		return new FormGroup<GetAppRequestFormProperties>({
		});

	}

	export interface GetApplicationDateRangeKpiRequest {
	}
	export interface GetApplicationDateRangeKpiRequestFormProperties {
	}
	export function CreateGetApplicationDateRangeKpiRequestFormGroup() {
		return new FormGroup<GetApplicationDateRangeKpiRequestFormProperties>({
		});

	}

	export interface GetApplicationSettingsRequest {
	}
	export interface GetApplicationSettingsRequestFormProperties {
	}
	export function CreateGetApplicationSettingsRequestFormGroup() {
		return new FormGroup<GetApplicationSettingsRequestFormProperties>({
		});

	}

	export interface GetAppsRequest {
	}
	export interface GetAppsRequestFormProperties {
	}
	export function CreateGetAppsRequestFormGroup() {
		return new FormGroup<GetAppsRequestFormProperties>({
		});

	}

	export interface GetBaiduChannelRequest {
	}
	export interface GetBaiduChannelRequestFormProperties {
	}
	export function CreateGetBaiduChannelRequestFormGroup() {
		return new FormGroup<GetBaiduChannelRequestFormProperties>({
		});

	}

	export interface GetCampaignActivitiesRequest {
	}
	export interface GetCampaignActivitiesRequestFormProperties {
	}
	export function CreateGetCampaignActivitiesRequestFormGroup() {
		return new FormGroup<GetCampaignActivitiesRequestFormProperties>({
		});

	}

	export interface GetCampaignDateRangeKpiRequest {
	}
	export interface GetCampaignDateRangeKpiRequestFormProperties {
	}
	export function CreateGetCampaignDateRangeKpiRequestFormGroup() {
		return new FormGroup<GetCampaignDateRangeKpiRequestFormProperties>({
		});

	}

	export interface GetCampaignRequest {
	}
	export interface GetCampaignRequestFormProperties {
	}
	export function CreateGetCampaignRequestFormGroup() {
		return new FormGroup<GetCampaignRequestFormProperties>({
		});

	}

	export interface GetCampaignVersionRequest {
	}
	export interface GetCampaignVersionRequestFormProperties {
	}
	export function CreateGetCampaignVersionRequestFormGroup() {
		return new FormGroup<GetCampaignVersionRequestFormProperties>({
		});

	}

	export interface GetCampaignVersionsRequest {
	}
	export interface GetCampaignVersionsRequestFormProperties {
	}
	export function CreateGetCampaignVersionsRequestFormGroup() {
		return new FormGroup<GetCampaignVersionsRequestFormProperties>({
		});

	}

	export interface GetCampaignsRequest {
	}
	export interface GetCampaignsRequestFormProperties {
	}
	export function CreateGetCampaignsRequestFormGroup() {
		return new FormGroup<GetCampaignsRequestFormProperties>({
		});

	}

	export interface GetChannelsRequest {
	}
	export interface GetChannelsRequestFormProperties {
	}
	export function CreateGetChannelsRequestFormGroup() {
		return new FormGroup<GetChannelsRequestFormProperties>({
		});

	}

	export interface GetEmailChannelRequest {
	}
	export interface GetEmailChannelRequestFormProperties {
	}
	export function CreateGetEmailChannelRequestFormGroup() {
		return new FormGroup<GetEmailChannelRequestFormProperties>({
		});

	}

	export interface GetEmailTemplateRequest {
	}
	export interface GetEmailTemplateRequestFormProperties {
	}
	export function CreateGetEmailTemplateRequestFormGroup() {
		return new FormGroup<GetEmailTemplateRequestFormProperties>({
		});

	}

	export interface GetEndpointRequest {
	}
	export interface GetEndpointRequestFormProperties {
	}
	export function CreateGetEndpointRequestFormGroup() {
		return new FormGroup<GetEndpointRequestFormProperties>({
		});

	}

	export interface GetEventStreamRequest {
	}
	export interface GetEventStreamRequestFormProperties {
	}
	export function CreateGetEventStreamRequestFormGroup() {
		return new FormGroup<GetEventStreamRequestFormProperties>({
		});

	}

	export interface GetExportJobRequest {
	}
	export interface GetExportJobRequestFormProperties {
	}
	export function CreateGetExportJobRequestFormGroup() {
		return new FormGroup<GetExportJobRequestFormProperties>({
		});

	}

	export interface GetExportJobsRequest {
	}
	export interface GetExportJobsRequestFormProperties {
	}
	export function CreateGetExportJobsRequestFormGroup() {
		return new FormGroup<GetExportJobsRequestFormProperties>({
		});

	}

	export interface GetGcmChannelRequest {
	}
	export interface GetGcmChannelRequestFormProperties {
	}
	export function CreateGetGcmChannelRequestFormGroup() {
		return new FormGroup<GetGcmChannelRequestFormProperties>({
		});

	}

	export interface GetImportJobRequest {
	}
	export interface GetImportJobRequestFormProperties {
	}
	export function CreateGetImportJobRequestFormGroup() {
		return new FormGroup<GetImportJobRequestFormProperties>({
		});

	}

	export interface GetImportJobsRequest {
	}
	export interface GetImportJobsRequestFormProperties {
	}
	export function CreateGetImportJobsRequestFormGroup() {
		return new FormGroup<GetImportJobsRequestFormProperties>({
		});

	}

	export interface GetInAppMessagesRequest {
	}
	export interface GetInAppMessagesRequestFormProperties {
	}
	export function CreateGetInAppMessagesRequestFormGroup() {
		return new FormGroup<GetInAppMessagesRequestFormProperties>({
		});

	}

	export interface GetInAppTemplateRequest {
	}
	export interface GetInAppTemplateRequestFormProperties {
	}
	export function CreateGetInAppTemplateRequestFormGroup() {
		return new FormGroup<GetInAppTemplateRequestFormProperties>({
		});

	}

	export interface GetJourneyDateRangeKpiRequest {
	}
	export interface GetJourneyDateRangeKpiRequestFormProperties {
	}
	export function CreateGetJourneyDateRangeKpiRequestFormGroup() {
		return new FormGroup<GetJourneyDateRangeKpiRequestFormProperties>({
		});

	}

	export interface GetJourneyExecutionActivityMetricsRequest {
	}
	export interface GetJourneyExecutionActivityMetricsRequestFormProperties {
	}
	export function CreateGetJourneyExecutionActivityMetricsRequestFormGroup() {
		return new FormGroup<GetJourneyExecutionActivityMetricsRequestFormProperties>({
		});

	}

	export interface GetJourneyExecutionMetricsRequest {
	}
	export interface GetJourneyExecutionMetricsRequestFormProperties {
	}
	export function CreateGetJourneyExecutionMetricsRequestFormGroup() {
		return new FormGroup<GetJourneyExecutionMetricsRequestFormProperties>({
		});

	}

	export interface GetJourneyRequest {
	}
	export interface GetJourneyRequestFormProperties {
	}
	export function CreateGetJourneyRequestFormGroup() {
		return new FormGroup<GetJourneyRequestFormProperties>({
		});

	}

	export interface GetJourneyRunExecutionActivityMetricsRequest {
	}
	export interface GetJourneyRunExecutionActivityMetricsRequestFormProperties {
	}
	export function CreateGetJourneyRunExecutionActivityMetricsRequestFormGroup() {
		return new FormGroup<GetJourneyRunExecutionActivityMetricsRequestFormProperties>({
		});

	}

	export interface GetJourneyRunExecutionMetricsRequest {
	}
	export interface GetJourneyRunExecutionMetricsRequestFormProperties {
	}
	export function CreateGetJourneyRunExecutionMetricsRequestFormGroup() {
		return new FormGroup<GetJourneyRunExecutionMetricsRequestFormProperties>({
		});

	}

	export interface GetJourneyRunsRequest {
	}
	export interface GetJourneyRunsRequestFormProperties {
	}
	export function CreateGetJourneyRunsRequestFormGroup() {
		return new FormGroup<GetJourneyRunsRequestFormProperties>({
		});

	}

	export interface GetPushTemplateRequest {
	}
	export interface GetPushTemplateRequestFormProperties {
	}
	export function CreateGetPushTemplateRequestFormGroup() {
		return new FormGroup<GetPushTemplateRequestFormProperties>({
		});

	}

	export interface GetRecommenderConfigurationRequest {
	}
	export interface GetRecommenderConfigurationRequestFormProperties {
	}
	export function CreateGetRecommenderConfigurationRequestFormGroup() {
		return new FormGroup<GetRecommenderConfigurationRequestFormProperties>({
		});

	}

	export interface GetRecommenderConfigurationsRequest {
	}
	export interface GetRecommenderConfigurationsRequestFormProperties {
	}
	export function CreateGetRecommenderConfigurationsRequestFormGroup() {
		return new FormGroup<GetRecommenderConfigurationsRequestFormProperties>({
		});

	}

	export interface GetSegmentExportJobsRequest {
	}
	export interface GetSegmentExportJobsRequestFormProperties {
	}
	export function CreateGetSegmentExportJobsRequestFormGroup() {
		return new FormGroup<GetSegmentExportJobsRequestFormProperties>({
		});

	}

	export interface GetSegmentImportJobsRequest {
	}
	export interface GetSegmentImportJobsRequestFormProperties {
	}
	export function CreateGetSegmentImportJobsRequestFormGroup() {
		return new FormGroup<GetSegmentImportJobsRequestFormProperties>({
		});

	}

	export interface GetSegmentRequest {
	}
	export interface GetSegmentRequestFormProperties {
	}
	export function CreateGetSegmentRequestFormGroup() {
		return new FormGroup<GetSegmentRequestFormProperties>({
		});

	}

	export interface GetSegmentVersionRequest {
	}
	export interface GetSegmentVersionRequestFormProperties {
	}
	export function CreateGetSegmentVersionRequestFormGroup() {
		return new FormGroup<GetSegmentVersionRequestFormProperties>({
		});

	}

	export interface GetSegmentVersionsRequest {
	}
	export interface GetSegmentVersionsRequestFormProperties {
	}
	export function CreateGetSegmentVersionsRequestFormGroup() {
		return new FormGroup<GetSegmentVersionsRequestFormProperties>({
		});

	}

	export interface GetSegmentsRequest {
	}
	export interface GetSegmentsRequestFormProperties {
	}
	export function CreateGetSegmentsRequestFormGroup() {
		return new FormGroup<GetSegmentsRequestFormProperties>({
		});

	}

	export interface GetSmsChannelRequest {
	}
	export interface GetSmsChannelRequestFormProperties {
	}
	export function CreateGetSmsChannelRequestFormGroup() {
		return new FormGroup<GetSmsChannelRequestFormProperties>({
		});

	}

	export interface GetSmsTemplateRequest {
	}
	export interface GetSmsTemplateRequestFormProperties {
	}
	export function CreateGetSmsTemplateRequestFormGroup() {
		return new FormGroup<GetSmsTemplateRequestFormProperties>({
		});

	}

	export interface GetUserEndpointsRequest {
	}
	export interface GetUserEndpointsRequestFormProperties {
	}
	export function CreateGetUserEndpointsRequestFormGroup() {
		return new FormGroup<GetUserEndpointsRequestFormProperties>({
		});

	}

	export interface GetVoiceChannelRequest {
	}
	export interface GetVoiceChannelRequestFormProperties {
	}
	export function CreateGetVoiceChannelRequestFormGroup() {
		return new FormGroup<GetVoiceChannelRequestFormProperties>({
		});

	}

	export interface GetVoiceTemplateRequest {
	}
	export interface GetVoiceTemplateRequestFormProperties {
	}
	export function CreateGetVoiceTemplateRequestFormGroup() {
		return new FormGroup<GetVoiceTemplateRequestFormProperties>({
		});

	}

	export enum Include { ALL = 0, ANY = 1, NONE = 2 }

	export interface MapOfEventItemResponse {
	}
	export interface MapOfEventItemResponseFormProperties {
	}
	export function CreateMapOfEventItemResponseFormGroup() {
		return new FormGroup<MapOfEventItemResponseFormProperties>({
		});

	}


	/** Provides information about the results of a request to create or update an endpoint that's associated with an event. */
	export interface ItemResponse {
		EndpointItemResponse?: EndpointItemResponse;
		EventsItemResponse?: MapOfEventItemResponse;
	}

	/** Provides information about the results of a request to create or update an endpoint that's associated with an event. */
	export interface ItemResponseFormProperties {
	}
	export function CreateItemResponseFormGroup() {
		return new FormGroup<ItemResponseFormProperties>({
		});

	}


	/** Changes the status of a journey. */
	export interface JourneyStateRequest {
		State?: State;
	}

	/** Changes the status of a journey. */
	export interface JourneyStateRequestFormProperties {
		State: FormControl<State | null | undefined>,
	}
	export function CreateJourneyStateRequestFormGroup() {
		return new FormGroup<JourneyStateRequestFormProperties>({
			State: new FormControl<State | null | undefined>(undefined),
		});

	}

	export interface ListJourneysRequest {
	}
	export interface ListJourneysRequestFormProperties {
	}
	export function CreateListJourneysRequestFormGroup() {
		return new FormGroup<ListJourneysRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface ListTemplateVersionsRequest {
	}
	export interface ListTemplateVersionsRequestFormProperties {
	}
	export function CreateListTemplateVersionsRequestFormGroup() {
		return new FormGroup<ListTemplateVersionsRequestFormProperties>({
		});

	}

	export interface ListTemplatesRequest {
	}
	export interface ListTemplatesRequestFormProperties {
	}
	export function CreateListTemplatesRequestFormGroup() {
		return new FormGroup<ListTemplatesRequestFormProperties>({
		});

	}


	/** Specifies the configuration and other settings for a message. */
	export interface MessageRequest {
		Addresses?: MapOfAddressConfiguration;
		Context?: MapOf__string;
		Endpoints?: MapOfEndpointSendConfiguration;

		/** Required */
		MessageConfiguration: DirectMessageConfiguration;
		TemplateConfiguration?: TemplateConfiguration;
		TraceId?: string;
	}

	/** Specifies the configuration and other settings for a message. */
	export interface MessageRequestFormProperties {
		TraceId: FormControl<string | null | undefined>,
	}
	export function CreateMessageRequestFormGroup() {
		return new FormGroup<MessageRequestFormProperties>({
			TraceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the results of sending a message directly to an endpoint address. */
	export interface MessageResult {

		/** Required */
		DeliveryStatus: DeliveryStatus;
		MessageId?: string;

		/** Required */
		StatusCode: number;
		StatusMessage?: string;
		UpdatedToken?: string;
	}

	/** Provides information about the results of sending a message directly to an endpoint address. */
	export interface MessageResultFormProperties {

		/** Required */
		DeliveryStatus: FormControl<DeliveryStatus | null | undefined>,
		MessageId: FormControl<string | null | undefined>,

		/** Required */
		StatusCode: FormControl<number | null | undefined>,
		StatusMessage: FormControl<string | null | undefined>,
		UpdatedToken: FormControl<string | null | undefined>,
	}
	export function CreateMessageResultFormGroup() {
		return new FormGroup<MessageResultFormProperties>({
			DeliveryStatus: new FormControl<DeliveryStatus | null | undefined>(undefined, [Validators.required]),
			MessageId: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			StatusMessage: new FormControl<string | null | undefined>(undefined),
			UpdatedToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints. */
	export interface MetricDimension {

		/** Required */
		ComparisonOperator: string;

		/** Required */
		Value: number;
	}

	/** Specifies metric-based criteria for including or excluding endpoints from a segment. These criteria derive from custom metrics that you define for endpoints. */
	export interface MetricDimensionFormProperties {

		/** Required */
		ComparisonOperator: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateMetricDimensionFormGroup() {
		return new FormGroup<MetricDimensionFormProperties>({
			ComparisonOperator: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Specifies a phone number to validate and retrieve information about. */
	export interface NumberValidateRequest {
		IsoCountryCode?: string;
		PhoneNumber?: string;
	}

	/** Specifies a phone number to validate and retrieve information about. */
	export interface NumberValidateRequestFormProperties {
		IsoCountryCode: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateNumberValidateRequestFormGroup() {
		return new FormGroup<NumberValidateRequestFormProperties>({
			IsoCountryCode: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PhoneNumberValidateRequest {

		/**
		 * Specifies a phone number to validate and retrieve information about.
		 * Required
		 */
		NumberValidateRequest: NumberValidateRequest;
	}
	export interface PhoneNumberValidateRequestFormProperties {
	}
	export function CreatePhoneNumberValidateRequestFormGroup() {
		return new FormGroup<PhoneNumberValidateRequestFormProperties>({
		});

	}


	/** Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events. */
	export interface WriteEventStream {

		/** Required */
		DestinationStreamArn: string;

		/** Required */
		RoleArn: string;
	}

	/** Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events. */
	export interface WriteEventStreamFormProperties {

		/** Required */
		DestinationStreamArn: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateWriteEventStreamFormGroup() {
		return new FormGroup<WriteEventStreamFormProperties>({
			DestinationStreamArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutEventStreamRequest {

		/**
		 * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
		 * Required
		 */
		WriteEventStream: WriteEventStream;
	}
	export interface PutEventStreamRequestFormProperties {
	}
	export function CreatePutEventStreamRequestFormGroup() {
		return new FormGroup<PutEventStreamRequestFormProperties>({
		});

	}

	export interface PutEventsRequest {

		/**
		 * Specifies a batch of events to process.
		 * Required
		 */
		EventsRequest: EventsRequest;
	}
	export interface PutEventsRequestFormProperties {
	}
	export function CreatePutEventsRequestFormGroup() {
		return new FormGroup<PutEventsRequestFormProperties>({
		});

	}


	/** Specifies one or more attributes to remove from all the endpoints that are associated with an application. */
	export interface UpdateAttributesRequest {
		Blacklist?: Array<string>;
	}

	/** Specifies one or more attributes to remove from all the endpoints that are associated with an application. */
	export interface UpdateAttributesRequestFormProperties {
	}
	export function CreateUpdateAttributesRequestFormGroup() {
		return new FormGroup<UpdateAttributesRequestFormProperties>({
		});

	}

	export interface RemoveAttributesRequest {

		/**
		 * Specifies one or more attributes to remove from all the endpoints that are associated with an application.
		 * Required
		 */
		UpdateAttributesRequest: UpdateAttributesRequest;
	}
	export interface RemoveAttributesRequestFormProperties {
	}
	export function CreateRemoveAttributesRequestFormGroup() {
		return new FormGroup<RemoveAttributesRequestFormProperties>({
		});

	}


	/** Specifies the status and settings of the SMS channel for an application. */
	export interface SMSChannelRequest {
		Enabled?: boolean | null;
		SenderId?: string;
		ShortCode?: string;
	}

	/** Specifies the status and settings of the SMS channel for an application. */
	export interface SMSChannelRequestFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		SenderId: FormControl<string | null | undefined>,
		ShortCode: FormControl<string | null | undefined>,
	}
	export function CreateSMSChannelRequestFormGroup() {
		return new FormGroup<SMSChannelRequestFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			SenderId: new FormControl<string | null | undefined>(undefined),
			ShortCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Type { ALL = 0, ANY = 1, NONE = 2 }

	export interface SendMessagesRequest {

		/**
		 * Specifies the configuration and other settings for a message.
		 * Required
		 */
		MessageRequest: MessageRequest;
	}
	export interface SendMessagesRequestFormProperties {
	}
	export function CreateSendMessagesRequestFormGroup() {
		return new FormGroup<SendMessagesRequestFormProperties>({
		});

	}


	/** Send OTP message request parameters. */
	export interface SendOTPMessageRequestParameters {
		AllowedAttempts?: number | null;

		/** Required */
		BrandName: string;

		/** Required */
		Channel: string;
		CodeLength?: number | null;

		/** Required */
		DestinationIdentity: string;
		EntityId?: string;
		Language?: string;

		/** Required */
		OriginationIdentity: string;

		/** Required */
		ReferenceId: string;
		TemplateId?: string;
		ValidityPeriod?: number | null;
	}

	/** Send OTP message request parameters. */
	export interface SendOTPMessageRequestParametersFormProperties {
		AllowedAttempts: FormControl<number | null | undefined>,

		/** Required */
		BrandName: FormControl<string | null | undefined>,

		/** Required */
		Channel: FormControl<string | null | undefined>,
		CodeLength: FormControl<number | null | undefined>,

		/** Required */
		DestinationIdentity: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		Language: FormControl<string | null | undefined>,

		/** Required */
		OriginationIdentity: FormControl<string | null | undefined>,

		/** Required */
		ReferenceId: FormControl<string | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
		ValidityPeriod: FormControl<number | null | undefined>,
	}
	export function CreateSendOTPMessageRequestParametersFormGroup() {
		return new FormGroup<SendOTPMessageRequestParametersFormProperties>({
			AllowedAttempts: new FormControl<number | null | undefined>(undefined),
			BrandName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Channel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CodeLength: new FormControl<number | null | undefined>(undefined),
			DestinationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityId: new FormControl<string | null | undefined>(undefined),
			Language: new FormControl<string | null | undefined>(undefined),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReferenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TemplateId: new FormControl<string | null | undefined>(undefined),
			ValidityPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SendOTPMessageRequest {

		/**
		 * Send OTP message request parameters.
		 * Required
		 */
		SendOTPMessageRequestParameters: SendOTPMessageRequestParameters;
	}
	export interface SendOTPMessageRequestFormProperties {
	}
	export function CreateSendOTPMessageRequestFormGroup() {
		return new FormGroup<SendOTPMessageRequestFormProperties>({
		});

	}


	/** Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users. */
	export interface SendUsersMessageRequest {
		Context?: MapOf__string;

		/** Required */
		MessageConfiguration: DirectMessageConfiguration;
		TemplateConfiguration?: TemplateConfiguration;
		TraceId?: string;

		/** Required */
		Users: MapOfEndpointSendConfiguration;
	}

	/** Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users. */
	export interface SendUsersMessageRequestFormProperties {
		TraceId: FormControl<string | null | undefined>,
	}
	export function CreateSendUsersMessageRequestFormGroup() {
		return new FormGroup<SendUsersMessageRequestFormProperties>({
			TraceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendUsersMessagesRequest {

		/**
		 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
		 * Required
		 */
		SendUsersMessageRequest: SendUsersMessageRequest;
	}
	export interface SendUsersMessagesRequestFormProperties {
	}
	export function CreateSendUsersMessagesRequestFormGroup() {
		return new FormGroup<SendUsersMessagesRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/**
		 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
		 * Required
		 */
		TagsModel: TagsModel;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}


	/** Specifies which version of a message template to use as the active version of the template. */
	export interface TemplateActiveVersionRequest {
		Version?: string;
	}

	/** Specifies which version of a message template to use as the active version of the template. */
	export interface TemplateActiveVersionRequestFormProperties {
		Version: FormControl<string | null | undefined>,
	}
	export function CreateTemplateActiveVersionRequestFormGroup() {
		return new FormGroup<TemplateActiveVersionRequestFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateAdmChannelRequest {

		/**
		 * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
		 * Required
		 */
		ADMChannelRequest: ADMChannelRequest;
	}
	export interface UpdateAdmChannelRequestFormProperties {
	}
	export function CreateUpdateAdmChannelRequestFormGroup() {
		return new FormGroup<UpdateAdmChannelRequestFormProperties>({
		});

	}

	export interface UpdateApnsChannelRequest {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
		 * Required
		 */
		APNSChannelRequest: APNSChannelRequest;
	}
	export interface UpdateApnsChannelRequestFormProperties {
	}
	export function CreateUpdateApnsChannelRequestFormGroup() {
		return new FormGroup<UpdateApnsChannelRequestFormProperties>({
		});

	}

	export interface UpdateApnsSandboxChannelRequest {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
		 * Required
		 */
		APNSSandboxChannelRequest: APNSSandboxChannelRequest;
	}
	export interface UpdateApnsSandboxChannelRequestFormProperties {
	}
	export function CreateUpdateApnsSandboxChannelRequestFormGroup() {
		return new FormGroup<UpdateApnsSandboxChannelRequestFormProperties>({
		});

	}

	export interface UpdateApnsVoipChannelRequest {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
		 * Required
		 */
		APNSVoipChannelRequest: APNSVoipChannelRequest;
	}
	export interface UpdateApnsVoipChannelRequestFormProperties {
	}
	export function CreateUpdateApnsVoipChannelRequestFormGroup() {
		return new FormGroup<UpdateApnsVoipChannelRequestFormProperties>({
		});

	}

	export interface UpdateApnsVoipSandboxChannelRequest {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
		 * Required
		 */
		APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequest;
	}
	export interface UpdateApnsVoipSandboxChannelRequestFormProperties {
	}
	export function CreateUpdateApnsVoipSandboxChannelRequestFormGroup() {
		return new FormGroup<UpdateApnsVoipSandboxChannelRequestFormProperties>({
		});

	}


	/** Specifies the default settings for an application. */
	export interface WriteApplicationSettingsRequest {
		CampaignHook?: CampaignHook;
		CloudWatchMetricsEnabled?: boolean | null;
		EventTaggingEnabled?: boolean | null;
		Limits?: CampaignLimits;
		QuietTime?: QuietTime;
		JourneyLimits?: ApplicationSettingsJourneyLimits;
	}

	/** Specifies the default settings for an application. */
	export interface WriteApplicationSettingsRequestFormProperties {
		CloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,
		EventTaggingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateWriteApplicationSettingsRequestFormGroup() {
		return new FormGroup<WriteApplicationSettingsRequestFormProperties>({
			CloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			EventTaggingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationSettingsRequest {

		/**
		 * Specifies the default settings for an application.
		 * Required
		 */
		WriteApplicationSettingsRequest: WriteApplicationSettingsRequest;
	}
	export interface UpdateApplicationSettingsRequestFormProperties {
	}
	export function CreateUpdateApplicationSettingsRequestFormGroup() {
		return new FormGroup<UpdateApplicationSettingsRequestFormProperties>({
		});

	}

	export interface UpdateBaiduChannelRequest {

		/**
		 * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
		 * Required
		 */
		BaiduChannelRequest: BaiduChannelRequest;
	}
	export interface UpdateBaiduChannelRequestFormProperties {
	}
	export function CreateUpdateBaiduChannelRequestFormGroup() {
		return new FormGroup<UpdateBaiduChannelRequestFormProperties>({
		});

	}

	export interface UpdateCampaignRequest {

		/**
		 * Specifies the configuration and other settings for a campaign.
		 * Required
		 */
		WriteCampaignRequest: WriteCampaignRequest;
	}
	export interface UpdateCampaignRequestFormProperties {
	}
	export function CreateUpdateCampaignRequestFormGroup() {
		return new FormGroup<UpdateCampaignRequestFormProperties>({
		});

	}

	export interface UpdateEmailChannelRequest {

		/**
		 * Specifies the status and settings of the email channel for an application.
		 * Required
		 */
		EmailChannelRequest: EmailChannelRequest;
	}
	export interface UpdateEmailChannelRequestFormProperties {
	}
	export function CreateUpdateEmailChannelRequestFormGroup() {
		return new FormGroup<UpdateEmailChannelRequestFormProperties>({
		});

	}

	export interface UpdateEmailTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
		 * Required
		 */
		EmailTemplateRequest: EmailTemplateRequest;
	}
	export interface UpdateEmailTemplateRequestFormProperties {
	}
	export function CreateUpdateEmailTemplateRequestFormGroup() {
		return new FormGroup<UpdateEmailTemplateRequestFormProperties>({
		});

	}

	export interface UpdateEndpointRequest {

		/**
		 * Specifies the channel type and other settings for an endpoint.
		 * Required
		 */
		EndpointRequest: EndpointRequest;
	}
	export interface UpdateEndpointRequestFormProperties {
	}
	export function CreateUpdateEndpointRequestFormGroup() {
		return new FormGroup<UpdateEndpointRequestFormProperties>({
		});

	}

	export interface UpdateEndpointsBatchRequest {

		/**
		 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
		 * Required
		 */
		EndpointBatchRequest: EndpointBatchRequest;
	}
	export interface UpdateEndpointsBatchRequestFormProperties {
	}
	export function CreateUpdateEndpointsBatchRequestFormGroup() {
		return new FormGroup<UpdateEndpointsBatchRequestFormProperties>({
		});

	}

	export interface UpdateGcmChannelRequest {

		/**
		 * Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
		 * Required
		 */
		GCMChannelRequest: GCMChannelRequest;
	}
	export interface UpdateGcmChannelRequestFormProperties {
	}
	export function CreateUpdateGcmChannelRequestFormGroup() {
		return new FormGroup<UpdateGcmChannelRequestFormProperties>({
		});

	}

	export interface UpdateInAppTemplateRequest {

		/**
		 * InApp Template Request.
		 * Required
		 */
		InAppTemplateRequest: InAppTemplateRequest;
	}
	export interface UpdateInAppTemplateRequestFormProperties {
	}
	export function CreateUpdateInAppTemplateRequestFormGroup() {
		return new FormGroup<UpdateInAppTemplateRequestFormProperties>({
		});

	}

	export interface UpdateJourneyRequest {

		/**
		 * Specifies the configuration and other settings for a journey.
		 * Required
		 */
		WriteJourneyRequest: WriteJourneyRequest;
	}
	export interface UpdateJourneyRequestFormProperties {
	}
	export function CreateUpdateJourneyRequestFormGroup() {
		return new FormGroup<UpdateJourneyRequestFormProperties>({
		});

	}

	export interface UpdateJourneyStateRequest {

		/**
		 * Changes the status of a journey.
		 * Required
		 */
		JourneyStateRequest: JourneyStateRequest;
	}
	export interface UpdateJourneyStateRequestFormProperties {
	}
	export function CreateUpdateJourneyStateRequestFormGroup() {
		return new FormGroup<UpdateJourneyStateRequestFormProperties>({
		});

	}

	export interface UpdatePushTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
		 * Required
		 */
		PushNotificationTemplateRequest: PushNotificationTemplateRequest;
	}
	export interface UpdatePushTemplateRequestFormProperties {
	}
	export function CreateUpdatePushTemplateRequestFormGroup() {
		return new FormGroup<UpdatePushTemplateRequestFormProperties>({
		});

	}


	/** Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model. */
	export interface UpdateRecommenderConfiguration {
		Attributes?: MapOf__string;
		Description?: string;
		Name?: string;
		RecommendationProviderIdType?: string;

		/** Required */
		RecommendationProviderRoleArn: string;

		/** Required */
		RecommendationProviderUri: string;
		RecommendationTransformerUri?: string;
		RecommendationsDisplayName?: string;
		RecommendationsPerMessage?: number | null;
	}

	/** Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model. */
	export interface UpdateRecommenderConfigurationFormProperties {
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RecommendationProviderIdType: FormControl<string | null | undefined>,

		/** Required */
		RecommendationProviderRoleArn: FormControl<string | null | undefined>,

		/** Required */
		RecommendationProviderUri: FormControl<string | null | undefined>,
		RecommendationTransformerUri: FormControl<string | null | undefined>,
		RecommendationsDisplayName: FormControl<string | null | undefined>,
		RecommendationsPerMessage: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRecommenderConfigurationFormGroup() {
		return new FormGroup<UpdateRecommenderConfigurationFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderIdType: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommendationProviderUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecommendationTransformerUri: new FormControl<string | null | undefined>(undefined),
			RecommendationsDisplayName: new FormControl<string | null | undefined>(undefined),
			RecommendationsPerMessage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateRecommenderConfigurationRequest {

		/**
		 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
		 * Required
		 */
		UpdateRecommenderConfiguration: UpdateRecommenderConfiguration;
	}
	export interface UpdateRecommenderConfigurationRequestFormProperties {
	}
	export function CreateUpdateRecommenderConfigurationRequestFormGroup() {
		return new FormGroup<UpdateRecommenderConfigurationRequestFormProperties>({
		});

	}

	export interface UpdateSegmentRequest {

		/**
		 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
		 * Required
		 */
		WriteSegmentRequest: WriteSegmentRequest;
	}
	export interface UpdateSegmentRequestFormProperties {
	}
	export function CreateUpdateSegmentRequestFormGroup() {
		return new FormGroup<UpdateSegmentRequestFormProperties>({
		});

	}

	export interface UpdateSmsChannelRequest {

		/**
		 * Specifies the status and settings of the SMS channel for an application.
		 * Required
		 */
		SMSChannelRequest: SMSChannelRequest;
	}
	export interface UpdateSmsChannelRequestFormProperties {
	}
	export function CreateUpdateSmsChannelRequestFormGroup() {
		return new FormGroup<UpdateSmsChannelRequestFormProperties>({
		});

	}

	export interface UpdateSmsTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
		 * Required
		 */
		SMSTemplateRequest: SMSTemplateRequest;
	}
	export interface UpdateSmsTemplateRequestFormProperties {
	}
	export function CreateUpdateSmsTemplateRequestFormGroup() {
		return new FormGroup<UpdateSmsTemplateRequestFormProperties>({
		});

	}

	export interface UpdateTemplateActiveVersionRequest {

		/**
		 * Specifies which version of a message template to use as the active version of the template.
		 * Required
		 */
		TemplateActiveVersionRequest: TemplateActiveVersionRequest;
	}
	export interface UpdateTemplateActiveVersionRequestFormProperties {
	}
	export function CreateUpdateTemplateActiveVersionRequestFormGroup() {
		return new FormGroup<UpdateTemplateActiveVersionRequestFormProperties>({
		});

	}


	/** Specifies the status and settings of the voice channel for an application. */
	export interface VoiceChannelRequest {
		Enabled?: boolean | null;
	}

	/** Specifies the status and settings of the voice channel for an application. */
	export interface VoiceChannelRequestFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateVoiceChannelRequestFormGroup() {
		return new FormGroup<VoiceChannelRequestFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateVoiceChannelRequest {

		/**
		 * Specifies the status and settings of the voice channel for an application.
		 * Required
		 */
		VoiceChannelRequest: VoiceChannelRequest;
	}
	export interface UpdateVoiceChannelRequestFormProperties {
	}
	export function CreateUpdateVoiceChannelRequestFormGroup() {
		return new FormGroup<UpdateVoiceChannelRequestFormProperties>({
		});

	}

	export interface UpdateVoiceTemplateRequest {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
		 * Required
		 */
		VoiceTemplateRequest: VoiceTemplateRequest;
	}
	export interface UpdateVoiceTemplateRequestFormProperties {
	}
	export function CreateUpdateVoiceTemplateRequestFormGroup() {
		return new FormGroup<UpdateVoiceTemplateRequestFormProperties>({
		});

	}


	/** Verify OTP message request. */
	export interface VerifyOTPMessageRequestParameters {

		/** Required */
		DestinationIdentity: string;

		/** Required */
		Otp: string;

		/** Required */
		ReferenceId: string;
	}

	/** Verify OTP message request. */
	export interface VerifyOTPMessageRequestParametersFormProperties {

		/** Required */
		DestinationIdentity: FormControl<string | null | undefined>,

		/** Required */
		Otp: FormControl<string | null | undefined>,

		/** Required */
		ReferenceId: FormControl<string | null | undefined>,
	}
	export function CreateVerifyOTPMessageRequestParametersFormGroup() {
		return new FormGroup<VerifyOTPMessageRequestParametersFormProperties>({
			DestinationIdentity: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Otp: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ReferenceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface VerifyOTPMessageRequest {

		/**
		 * Verify OTP message request.
		 * Required
		 */
		VerifyOTPMessageRequestParameters: VerifyOTPMessageRequestParameters;
	}
	export interface VerifyOTPMessageRequestFormProperties {
	}
	export function CreateVerifyOTPMessageRequestFormGroup() {
		return new FormGroup<VerifyOTPMessageRequestFormProperties>({
		});

	}

	export enum DayOfWeek { MONDAY = 0, TUESDAY = 1, WEDNESDAY = 2, THURSDAY = 3, FRIDAY = 4, SATURDAY = 5, SUNDAY = 6 }


	/** Specifies the start and end time for OpenHours. */
	export interface OpenHoursRule {
		StartTime?: string;
		EndTime?: string;
	}

	/** Specifies the start and end time for OpenHours. */
	export interface OpenHoursRuleFormProperties {
		StartTime: FormControl<string | null | undefined>,
		EndTime: FormControl<string | null | undefined>,
	}
	export function CreateOpenHoursRuleFormGroup() {
		return new FormGroup<OpenHoursRuleFormProperties>({
			StartTime: new FormControl<string | null | undefined>(undefined),
			EndTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the rule settings for when messages can't be sent. */
	export interface ClosedDaysRule {
		Name?: string;
		StartDateTime?: string;
		EndDateTime?: string;
	}

	/** Specifies the rule settings for when messages can't be sent. */
	export interface ClosedDaysRuleFormProperties {
		Name: FormControl<string | null | undefined>,
		StartDateTime: FormControl<string | null | undefined>,
		EndDateTime: FormControl<string | null | undefined>,
	}
	export function CreateClosedDaysRuleFormGroup() {
		return new FormGroup<ClosedDaysRuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			StartDateTime: new FormControl<string | null | undefined>(undefined),
			EndDateTime: new FormControl<string | null | undefined>(undefined),
		});

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
		GetApps(page_size: string | null | undefined, token: string | null | undefined): Observable<GetAppsResponse> {
			return this.http.get<GetAppsResponse>(this.baseUri + 'v1/apps?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a new campaign for an application or updates the settings of an existing campaign for an application.
		 * Post v1/apps/{application_id}/campaigns
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		CreateCampaign(application_id: string, requestBody: CreateCampaignPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/{application_id}/campaigns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the status, configuration, and other settings for all the campaigns that are associated with an application.
		 * Get v1/apps/{application_id}/campaigns
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetCampaignsResponse} Success
		 */
		GetCampaigns(application_id: string, page_size: string | null | undefined, token: string | null | undefined): Observable<GetCampaignsResponse> {
			return this.http.get<GetCampaignsResponse>(this.baseUri + 'v1/apps/{application_id}/campaigns?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a message template for messages that are sent through the email channel.
		 * Post v1/templates/{template_name}/email
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @return {void} 
		 */
		CreateEmailTemplate(template_name: string, requestBody: CreateEmailTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/templates/{template_name}/email', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a message template for messages that were sent through the email channel.
		 * Delete v1/templates/{template_name}/email
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		DeleteEmailTemplate(template_name: string, version: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/templates/{template_name}/email?version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the content and settings of a message template for messages that are sent through the email channel.
		 * Get v1/templates/{template_name}/email
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {GetEmailTemplateResponse} Success
		 */
		GetEmailTemplate(template_name: string, version: string | null | undefined): Observable<GetEmailTemplateResponse> {
			return this.http.get<GetEmailTemplateResponse>(this.baseUri + 'v1/templates/{template_name}/email?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates an existing message template for messages that are sent through the email channel.
		 * Put v1/templates/{template_name}/email
		 * @param {boolean} create_new_version <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		UpdateEmailTemplate(create_new_version: boolean | null | undefined, template_name: string, version: string | null | undefined, requestBody: UpdateEmailTemplatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/templates/{template_name}/email?create_new_version=' + create_new_version + '&version=' + (version == null ? '' : encodeURIComponent(version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an export job for an application.
		 * Post v1/apps/{application_id}/jobs/export
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		CreateExportJob(application_id: string, requestBody: CreateExportJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/{application_id}/jobs/export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the status and settings of all the export jobs for an application.
		 * Get v1/apps/{application_id}/jobs/export
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetExportJobsResponse} Success
		 */
		GetExportJobs(application_id: string, page_size: string | null | undefined, token: string | null | undefined): Observable<GetExportJobsResponse> {
			return this.http.get<GetExportJobsResponse>(this.baseUri + 'v1/apps/{application_id}/jobs/export?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates an import job for an application.
		 * Post v1/apps/{application_id}/jobs/import
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		CreateImportJob(application_id: string, requestBody: CreateImportJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/{application_id}/jobs/import', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the status and settings of all the import jobs for an application.
		 * Get v1/apps/{application_id}/jobs/import
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetImportJobsResponse} Success
		 */
		GetImportJobs(application_id: string, page_size: string | null | undefined, token: string | null | undefined): Observable<GetImportJobsResponse> {
			return this.http.get<GetImportJobsResponse>(this.baseUri + 'v1/apps/{application_id}/jobs/import?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a new message template for messages using the in-app message channel.
		 * Post v1/templates/{template_name}/inapp
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @return {void} 
		 */
		CreateInAppTemplate(template_name: string, requestBody: CreateInAppTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/templates/{template_name}/inapp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a message template for messages sent using the in-app message channel.
		 * Delete v1/templates/{template_name}/inapp
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		DeleteInAppTemplate(template_name: string, version: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/templates/{template_name}/inapp?version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the content and settings of a message template for messages sent through the in-app channel.
		 * Get v1/templates/{template_name}/inapp
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {GetInAppTemplateResponse} Success
		 */
		GetInAppTemplate(template_name: string, version: string | null | undefined): Observable<GetInAppTemplateResponse> {
			return this.http.get<GetInAppTemplateResponse>(this.baseUri + 'v1/templates/{template_name}/inapp?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates an existing message template for messages sent through the in-app message channel.
		 * Put v1/templates/{template_name}/inapp
		 * @param {boolean} create_new_version <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		UpdateInAppTemplate(create_new_version: boolean | null | undefined, template_name: string, version: string | null | undefined, requestBody: UpdateInAppTemplatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/templates/{template_name}/inapp?create_new_version=' + create_new_version + '&version=' + (version == null ? '' : encodeURIComponent(version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a journey for an application.
		 * Post v1/apps/{application_id}/journeys
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		CreateJourney(application_id: string, requestBody: CreateJourneyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/{application_id}/journeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the status, configuration, and other settings for all the journeys that are associated with an application.
		 * Get v1/apps/{application_id}/journeys
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {ListJourneysResponse} Success
		 */
		ListJourneys(application_id: string, page_size: string | null | undefined, token: string | null | undefined): Observable<ListJourneysResponse> {
			return this.http.get<ListJourneysResponse>(this.baseUri + 'v1/apps/{application_id}/journeys?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a message template for messages that are sent through a push notification channel.
		 * Post v1/templates/{template_name}/push
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @return {void} 
		 */
		CreatePushTemplate(template_name: string, requestBody: CreatePushTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/templates/{template_name}/push', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a message template for messages that were sent through a push notification channel.
		 * Delete v1/templates/{template_name}/push
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		DeletePushTemplate(template_name: string, version: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/templates/{template_name}/push?version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the content and settings of a message template for messages that are sent through a push notification channel.
		 * Get v1/templates/{template_name}/push
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {GetPushTemplateResponse} Success
		 */
		GetPushTemplate(template_name: string, version: string | null | undefined): Observable<GetPushTemplateResponse> {
			return this.http.get<GetPushTemplateResponse>(this.baseUri + 'v1/templates/{template_name}/push?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates an existing message template for messages that are sent through a push notification channel.
		 * Put v1/templates/{template_name}/push
		 * @param {boolean} create_new_version <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		UpdatePushTemplate(create_new_version: boolean | null | undefined, template_name: string, version: string | null | undefined, requestBody: UpdatePushTemplatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/templates/{template_name}/push?create_new_version=' + create_new_version + '&version=' + (version == null ? '' : encodeURIComponent(version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		GetRecommenderConfigurations(page_size: string | null | undefined, token: string | null | undefined): Observable<GetRecommenderConfigurationsResponse> {
			return this.http.get<GetRecommenderConfigurationsResponse>(this.baseUri + 'v1/recommenders?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
		 * Post v1/apps/{application_id}/segments
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		CreateSegment(application_id: string, requestBody: CreateSegmentPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/apps/{application_id}/segments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the configuration, dimension, and other settings for all the segments that are associated with an application.
		 * Get v1/apps/{application_id}/segments
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetSegmentsResponse} Success
		 */
		GetSegments(application_id: string, page_size: string | null | undefined, token: string | null | undefined): Observable<GetSegmentsResponse> {
			return this.http.get<GetSegmentsResponse>(this.baseUri + 'v1/apps/{application_id}/segments?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Creates a message template for messages that are sent through the SMS channel.
		 * Post v1/templates/{template_name}/sms
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @return {void} 
		 */
		CreateSmsTemplate(template_name: string, requestBody: CreateSmsTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/templates/{template_name}/sms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a message template for messages that were sent through the SMS channel.
		 * Delete v1/templates/{template_name}/sms
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		DeleteSmsTemplate(template_name: string, version: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/templates/{template_name}/sms?version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the content and settings of a message template for messages that are sent through the SMS channel.
		 * Get v1/templates/{template_name}/sms
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {GetSmsTemplateResponse} Success
		 */
		GetSmsTemplate(template_name: string, version: string | null | undefined): Observable<GetSmsTemplateResponse> {
			return this.http.get<GetSmsTemplateResponse>(this.baseUri + 'v1/templates/{template_name}/sms?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates an existing message template for messages that are sent through the SMS channel.
		 * Put v1/templates/{template_name}/sms
		 * @param {boolean} create_new_version <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		UpdateSmsTemplate(create_new_version: boolean | null | undefined, template_name: string, version: string | null | undefined, requestBody: UpdateSmsTemplatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/templates/{template_name}/sms?create_new_version=' + create_new_version + '&version=' + (version == null ? '' : encodeURIComponent(version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a message template for messages that are sent through the voice channel.
		 * Post v1/templates/{template_name}/voice
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @return {void} 
		 */
		CreateVoiceTemplate(template_name: string, requestBody: CreateVoiceTemplatePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/templates/{template_name}/voice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a message template for messages that were sent through the voice channel.
		 * Delete v1/templates/{template_name}/voice
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		DeleteVoiceTemplate(template_name: string, version: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/templates/{template_name}/voice?version=' + (version == null ? '' : encodeURIComponent(version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the content and settings of a message template for messages that are sent through the voice channel.
		 * Get v1/templates/{template_name}/voice
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {GetVoiceTemplateResponse} Success
		 */
		GetVoiceTemplate(template_name: string, version: string | null | undefined): Observable<GetVoiceTemplateResponse> {
			return this.http.get<GetVoiceTemplateResponse>(this.baseUri + 'v1/templates/{template_name}/voice?version=' + (version == null ? '' : encodeURIComponent(version)), {});
		}

		/**
		 * Updates an existing message template for messages that are sent through the voice channel.
		 * Put v1/templates/{template_name}/voice
		 * @param {boolean} create_new_version <p>Specifies whether to save the updates as a new version of the message template. Valid values are: true, save the updates as a new version; and, false, save the updates to (overwrite) the latest existing version of the template.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint saves the updates to (overwrites) the latest existing version of the template. If you specify a value of true for this parameter, don't specify a value for the version parameter. Otherwise, an error will occur.</p>
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} version <p>The unique identifier for the version of the message template to update, retrieve information about, or delete. To retrieve identifiers and other information for all the versions of a template, use the <link  linkend="templates-template-name-template-type-versions">Template Versions</link> resource.</p> <p>If specified, this value must match the identifier for an existing template version. If specified for an update operation, this value must match the identifier for the latest existing version of the template. This restriction helps ensure that race conditions don't occur.</p> <p>If you don't specify a value for this parameter, Amazon Pinpoint does the following:</p> <ul><li><p>For a get operation, retrieves information about the active version of the template.</p></li> <li><p>For an update operation, saves the updates to (overwrites) the latest existing version of the template, if the create-new-version parameter isn't used or is set to false.</p></li> <li><p>For a delete operation, deletes the template, including all versions of the template.</p></li></ul>
		 * @return {void} 
		 */
		UpdateVoiceTemplate(create_new_version: boolean | null | undefined, template_name: string, version: string | null | undefined, requestBody: UpdateVoiceTemplatePutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/templates/{template_name}/voice?create_new_version=' + create_new_version + '&version=' + (version == null ? '' : encodeURIComponent(version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disables the ADM channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/adm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteAdmChannelResponse} Success
		 */
		DeleteAdmChannel(application_id: string): Observable<DeleteAdmChannelResponse> {
			return this.http.delete<DeleteAdmChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/adm', {});
		}

		/**
		 * Retrieves information about the status and settings of the ADM channel for an application.
		 * Get v1/apps/{application_id}/channels/adm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetAdmChannelResponse} Success
		 */
		GetAdmChannel(application_id: string): Observable<GetAdmChannelResponse> {
			return this.http.get<GetAdmChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/adm', {});
		}

		/**
		 * Enables the ADM channel for an application or updates the status and settings of the ADM channel for an application.
		 * Put v1/apps/{application_id}/channels/adm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateAdmChannelResponse} Success
		 */
		UpdateAdmChannel(application_id: string, requestBody: UpdateAdmChannelPutBody): Observable<UpdateAdmChannelResponse> {
			return this.http.put<UpdateAdmChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/adm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the APNs channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/apns
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteApnsChannelResponse} Success
		 */
		DeleteApnsChannel(application_id: string): Observable<DeleteApnsChannelResponse> {
			return this.http.delete<DeleteApnsChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns', {});
		}

		/**
		 * Retrieves information about the status and settings of the APNs channel for an application.
		 * Get v1/apps/{application_id}/channels/apns
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetApnsChannelResponse} Success
		 */
		GetApnsChannel(application_id: string): Observable<GetApnsChannelResponse> {
			return this.http.get<GetApnsChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns', {});
		}

		/**
		 * Enables the APNs channel for an application or updates the status and settings of the APNs channel for an application.
		 * Put v1/apps/{application_id}/channels/apns
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateApnsChannelResponse} Success
		 */
		UpdateApnsChannel(application_id: string, requestBody: UpdateApnsChannelPutBody): Observable<UpdateApnsChannelResponse> {
			return this.http.put<UpdateApnsChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the APNs sandbox channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/apns_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteApnsSandboxChannelResponse} Success
		 */
		DeleteApnsSandboxChannel(application_id: string): Observable<DeleteApnsSandboxChannelResponse> {
			return this.http.delete<DeleteApnsSandboxChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns_sandbox', {});
		}

		/**
		 * Retrieves information about the status and settings of the APNs sandbox channel for an application.
		 * Get v1/apps/{application_id}/channels/apns_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetApnsSandboxChannelResponse} Success
		 */
		GetApnsSandboxChannel(application_id: string): Observable<GetApnsSandboxChannelResponse> {
			return this.http.get<GetApnsSandboxChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns_sandbox', {});
		}

		/**
		 * Enables the APNs sandbox channel for an application or updates the status and settings of the APNs sandbox channel for an application.
		 * Put v1/apps/{application_id}/channels/apns_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateApnsSandboxChannelResponse} Success
		 */
		UpdateApnsSandboxChannel(application_id: string, requestBody: UpdateApnsSandboxChannelPutBody): Observable<UpdateApnsSandboxChannelResponse> {
			return this.http.put<UpdateApnsSandboxChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns_sandbox', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/apns_voip
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteApnsVoipChannelResponse} Success
		 */
		DeleteApnsVoipChannel(application_id: string): Observable<DeleteApnsVoipChannelResponse> {
			return this.http.delete<DeleteApnsVoipChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns_voip', {});
		}

		/**
		 * Retrieves information about the status and settings of the APNs VoIP channel for an application.
		 * Get v1/apps/{application_id}/channels/apns_voip
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetApnsVoipChannelResponse} Success
		 */
		GetApnsVoipChannel(application_id: string): Observable<GetApnsVoipChannelResponse> {
			return this.http.get<GetApnsVoipChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns_voip', {});
		}

		/**
		 * Enables the APNs VoIP channel for an application or updates the status and settings of the APNs VoIP channel for an application.
		 * Put v1/apps/{application_id}/channels/apns_voip
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateApnsVoipChannelResponse} Success
		 */
		UpdateApnsVoipChannel(application_id: string, requestBody: UpdateApnsVoipChannelPutBody): Observable<UpdateApnsVoipChannelResponse> {
			return this.http.put<UpdateApnsVoipChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns_voip', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the APNs VoIP sandbox channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/apns_voip_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteApnsVoipSandboxChannelResponse} Success
		 */
		DeleteApnsVoipSandboxChannel(application_id: string): Observable<DeleteApnsVoipSandboxChannelResponse> {
			return this.http.delete<DeleteApnsVoipSandboxChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns_voip_sandbox', {});
		}

		/**
		 * Retrieves information about the status and settings of the APNs VoIP sandbox channel for an application.
		 * Get v1/apps/{application_id}/channels/apns_voip_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetApnsVoipSandboxChannelResponse} Success
		 */
		GetApnsVoipSandboxChannel(application_id: string): Observable<GetApnsVoipSandboxChannelResponse> {
			return this.http.get<GetApnsVoipSandboxChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns_voip_sandbox', {});
		}

		/**
		 * Enables the APNs VoIP sandbox channel for an application or updates the status and settings of the APNs VoIP sandbox channel for an application.
		 * Put v1/apps/{application_id}/channels/apns_voip_sandbox
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateApnsVoipSandboxChannelResponse} Success
		 */
		UpdateApnsVoipSandboxChannel(application_id: string, requestBody: UpdateApnsVoipSandboxChannelPutBody): Observable<UpdateApnsVoipSandboxChannelResponse> {
			return this.http.put<UpdateApnsVoipSandboxChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/apns_voip_sandbox', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an application.
		 * Delete v1/apps/{application_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteAppResponse} Success
		 */
		DeleteApp(application_id: string): Observable<DeleteAppResponse> {
			return this.http.delete<DeleteAppResponse>(this.baseUri + 'v1/apps/{application_id}', {});
		}

		/**
		 * Retrieves information about an application.
		 * Get v1/apps/{application_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetAppResponse} Success
		 */
		GetApp(application_id: string): Observable<GetAppResponse> {
			return this.http.get<GetAppResponse>(this.baseUri + 'v1/apps/{application_id}', {});
		}

		/**
		 * Disables the Baidu channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/baidu
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteBaiduChannelResponse} Success
		 */
		DeleteBaiduChannel(application_id: string): Observable<DeleteBaiduChannelResponse> {
			return this.http.delete<DeleteBaiduChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/baidu', {});
		}

		/**
		 * Retrieves information about the status and settings of the Baidu channel for an application.
		 * Get v1/apps/{application_id}/channels/baidu
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetBaiduChannelResponse} Success
		 */
		GetBaiduChannel(application_id: string): Observable<GetBaiduChannelResponse> {
			return this.http.get<GetBaiduChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/baidu', {});
		}

		/**
		 * Enables the Baidu channel for an application or updates the status and settings of the Baidu channel for an application.
		 * Put v1/apps/{application_id}/channels/baidu
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateBaiduChannelResponse} Success
		 */
		UpdateBaiduChannel(application_id: string, requestBody: UpdateBaiduChannelPutBody): Observable<UpdateBaiduChannelResponse> {
			return this.http.put<UpdateBaiduChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/baidu', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a campaign from an application.
		 * Delete v1/apps/{application_id}/campaigns/{campaign_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} campaign_id The unique identifier for the campaign.
		 * @return {DeleteCampaignResponse} Success
		 */
		DeleteCampaign(application_id: string, campaign_id: string): Observable<DeleteCampaignResponse> {
			return this.http.delete<DeleteCampaignResponse>(this.baseUri + 'v1/apps/{application_id}/campaigns/{campaign_id}', {});
		}

		/**
		 * Retrieves information about the status, configuration, and other settings for a campaign.
		 * Get v1/apps/{application_id}/campaigns/{campaign_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} campaign_id The unique identifier for the campaign.
		 * @return {GetCampaignResponse} Success
		 */
		GetCampaign(application_id: string, campaign_id: string): Observable<GetCampaignResponse> {
			return this.http.get<GetCampaignResponse>(this.baseUri + 'v1/apps/{application_id}/campaigns/{campaign_id}', {});
		}

		/**
		 * Updates the configuration and other settings for a campaign.
		 * Put v1/apps/{application_id}/campaigns/{campaign_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} campaign_id The unique identifier for the campaign.
		 * @return {UpdateCampaignResponse} Success
		 */
		UpdateCampaign(application_id: string, campaign_id: string, requestBody: UpdateCampaignPutBody): Observable<UpdateCampaignResponse> {
			return this.http.put<UpdateCampaignResponse>(this.baseUri + 'v1/apps/{application_id}/campaigns/{campaign_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the email channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/email
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteEmailChannelResponse} Success
		 */
		DeleteEmailChannel(application_id: string): Observable<DeleteEmailChannelResponse> {
			return this.http.delete<DeleteEmailChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/email', {});
		}

		/**
		 * Retrieves information about the status and settings of the email channel for an application.
		 * Get v1/apps/{application_id}/channels/email
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetEmailChannelResponse} Success
		 */
		GetEmailChannel(application_id: string): Observable<GetEmailChannelResponse> {
			return this.http.get<GetEmailChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/email', {});
		}

		/**
		 * Enables the email channel for an application or updates the status and settings of the email channel for an application.
		 * Put v1/apps/{application_id}/channels/email
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateEmailChannelResponse} Success
		 */
		UpdateEmailChannel(application_id: string, requestBody: UpdateEmailChannelPutBody): Observable<UpdateEmailChannelResponse> {
			return this.http.put<UpdateEmailChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/email', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an endpoint from an application.
		 * Delete v1/apps/{application_id}/endpoints/{endpoint_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} endpoint_id The unique identifier for the endpoint.
		 * @return {void} 
		 */
		DeleteEndpoint(application_id: string, endpoint_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/{application_id}/endpoints/{endpoint_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about the settings and attributes of a specific endpoint for an application.
		 * Get v1/apps/{application_id}/endpoints/{endpoint_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} endpoint_id The unique identifier for the endpoint.
		 * @return {GetEndpointResponse} Success
		 */
		GetEndpoint(application_id: string, endpoint_id: string): Observable<GetEndpointResponse> {
			return this.http.get<GetEndpointResponse>(this.baseUri + 'v1/apps/{application_id}/endpoints/{endpoint_id}', {});
		}

		/**
		 * Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
		 * Put v1/apps/{application_id}/endpoints/{endpoint_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} endpoint_id The unique identifier for the endpoint.
		 * @return {void} 
		 */
		UpdateEndpoint(application_id: string, endpoint_id: string, requestBody: UpdateEndpointPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/apps/{application_id}/endpoints/{endpoint_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the event stream for an application.
		 * Delete v1/apps/{application_id}/eventstream
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteEventStreamResponse} Success
		 */
		DeleteEventStream(application_id: string): Observable<DeleteEventStreamResponse> {
			return this.http.delete<DeleteEventStreamResponse>(this.baseUri + 'v1/apps/{application_id}/eventstream', {});
		}

		/**
		 * Retrieves information about the event stream settings for an application.
		 * Get v1/apps/{application_id}/eventstream
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetEventStreamResponse} Success
		 */
		GetEventStream(application_id: string): Observable<GetEventStreamResponse> {
			return this.http.get<GetEventStreamResponse>(this.baseUri + 'v1/apps/{application_id}/eventstream', {});
		}

		/**
		 * Creates a new event stream for an application or updates the settings of an existing event stream for an application.
		 * Post v1/apps/{application_id}/eventstream
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {PutEventStreamResponse} Success
		 */
		PutEventStream(application_id: string, requestBody: PutEventStreamPostBody): Observable<PutEventStreamResponse> {
			return this.http.post<PutEventStreamResponse>(this.baseUri + 'v1/apps/{application_id}/eventstream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the GCM channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/gcm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteGcmChannelResponse} Success
		 */
		DeleteGcmChannel(application_id: string): Observable<DeleteGcmChannelResponse> {
			return this.http.delete<DeleteGcmChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/gcm', {});
		}

		/**
		 * Retrieves information about the status and settings of the GCM channel for an application.
		 * Get v1/apps/{application_id}/channels/gcm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetGcmChannelResponse} Success
		 */
		GetGcmChannel(application_id: string): Observable<GetGcmChannelResponse> {
			return this.http.get<GetGcmChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/gcm', {});
		}

		/**
		 * Enables the GCM channel for an application or updates the status and settings of the GCM channel for an application.
		 * Put v1/apps/{application_id}/channels/gcm
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateGcmChannelResponse} Success
		 */
		UpdateGcmChannel(application_id: string, requestBody: UpdateGcmChannelPutBody): Observable<UpdateGcmChannelResponse> {
			return this.http.put<UpdateGcmChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/gcm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a journey from an application.
		 * Delete v1/apps/{application_id}/journeys/{journey_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @return {DeleteJourneyResponse} Success
		 */
		DeleteJourney(application_id: string, journey_id: string): Observable<DeleteJourneyResponse> {
			return this.http.delete<DeleteJourneyResponse>(this.baseUri + 'v1/apps/{application_id}/journeys/{journey_id}', {});
		}

		/**
		 * Retrieves information about the status, configuration, and other settings for a journey.
		 * Get v1/apps/{application_id}/journeys/{journey_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @return {GetJourneyResponse} Success
		 */
		GetJourney(application_id: string, journey_id: string): Observable<GetJourneyResponse> {
			return this.http.get<GetJourneyResponse>(this.baseUri + 'v1/apps/{application_id}/journeys/{journey_id}', {});
		}

		/**
		 * Updates the configuration and other settings for a journey.
		 * Put v1/apps/{application_id}/journeys/{journey_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @return {UpdateJourneyResponse} Success
		 */
		UpdateJourney(application_id: string, journey_id: string, requestBody: UpdateJourneyPutBody): Observable<UpdateJourneyResponse> {
			return this.http.put<UpdateJourneyResponse>(this.baseUri + 'v1/apps/{application_id}/journeys/{journey_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Amazon Pinpoint configuration for a recommender model.
		 * Delete v1/recommenders/{recommender_id}
		 * @param {string} recommender_id The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteRecommenderConfigurationResponse} Success
		 */
		DeleteRecommenderConfiguration(recommender_id: string): Observable<DeleteRecommenderConfigurationResponse> {
			return this.http.delete<DeleteRecommenderConfigurationResponse>(this.baseUri + 'v1/recommenders/{recommender_id}', {});
		}

		/**
		 * Retrieves information about an Amazon Pinpoint configuration for a recommender model.
		 * Get v1/recommenders/{recommender_id}
		 * @param {string} recommender_id The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.
		 * @return {GetRecommenderConfigurationResponse} Success
		 */
		GetRecommenderConfiguration(recommender_id: string): Observable<GetRecommenderConfigurationResponse> {
			return this.http.get<GetRecommenderConfigurationResponse>(this.baseUri + 'v1/recommenders/{recommender_id}', {});
		}

		/**
		 * Updates an Amazon Pinpoint configuration for a recommender model.
		 * Put v1/recommenders/{recommender_id}
		 * @param {string} recommender_id The unique identifier for the recommender model configuration. This identifier is displayed as the <b>Recommender ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateRecommenderConfigurationResponse} Success
		 */
		UpdateRecommenderConfiguration(recommender_id: string, requestBody: UpdateRecommenderConfigurationPutBody): Observable<UpdateRecommenderConfigurationResponse> {
			return this.http.put<UpdateRecommenderConfigurationResponse>(this.baseUri + 'v1/recommenders/{recommender_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a segment from an application.
		 * Delete v1/apps/{application_id}/segments/{segment_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} segment_id The unique identifier for the segment.
		 * @return {DeleteSegmentResponse} Success
		 */
		DeleteSegment(application_id: string, segment_id: string): Observable<DeleteSegmentResponse> {
			return this.http.delete<DeleteSegmentResponse>(this.baseUri + 'v1/apps/{application_id}/segments/{segment_id}', {});
		}

		/**
		 * Retrieves information about the configuration, dimension, and other settings for a specific segment that's associated with an application.
		 * Get v1/apps/{application_id}/segments/{segment_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} segment_id The unique identifier for the segment.
		 * @return {GetSegmentResponse} Success
		 */
		GetSegment(application_id: string, segment_id: string): Observable<GetSegmentResponse> {
			return this.http.get<GetSegmentResponse>(this.baseUri + 'v1/apps/{application_id}/segments/{segment_id}', {});
		}

		/**
		 * Creates a new segment for an application or updates the configuration, dimension, and other settings for an existing segment that's associated with an application.
		 * Put v1/apps/{application_id}/segments/{segment_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} segment_id The unique identifier for the segment.
		 * @return {UpdateSegmentResponse} Success
		 */
		UpdateSegment(application_id: string, segment_id: string, requestBody: UpdateSegmentPutBody): Observable<UpdateSegmentResponse> {
			return this.http.put<UpdateSegmentResponse>(this.baseUri + 'v1/apps/{application_id}/segments/{segment_id}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disables the SMS channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/sms
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteSmsChannelResponse} Success
		 */
		DeleteSmsChannel(application_id: string): Observable<DeleteSmsChannelResponse> {
			return this.http.delete<DeleteSmsChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/sms', {});
		}

		/**
		 * Retrieves information about the status and settings of the SMS channel for an application.
		 * Get v1/apps/{application_id}/channels/sms
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetSmsChannelResponse} Success
		 */
		GetSmsChannel(application_id: string): Observable<GetSmsChannelResponse> {
			return this.http.get<GetSmsChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/sms', {});
		}

		/**
		 * Enables the SMS channel for an application or updates the status and settings of the SMS channel for an application.
		 * Put v1/apps/{application_id}/channels/sms
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateSmsChannelResponse} Success
		 */
		UpdateSmsChannel(application_id: string, requestBody: UpdateSmsChannelPutBody): Observable<UpdateSmsChannelResponse> {
			return this.http.put<UpdateSmsChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/sms', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes all the endpoints that are associated with a specific user ID.
		 * Delete v1/apps/{application_id}/users/{user_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} user_id The unique identifier for the user.
		 * @return {void} 
		 */
		DeleteUserEndpoints(application_id: string, user_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/apps/{application_id}/users/{user_id}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about all the endpoints that are associated with a specific user ID.
		 * Get v1/apps/{application_id}/users/{user_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} user_id The unique identifier for the user.
		 * @return {GetUserEndpointsResponse} Success
		 */
		GetUserEndpoints(application_id: string, user_id: string): Observable<GetUserEndpointsResponse> {
			return this.http.get<GetUserEndpointsResponse>(this.baseUri + 'v1/apps/{application_id}/users/{user_id}', {});
		}

		/**
		 * Disables the voice channel for an application and deletes any existing settings for the channel.
		 * Delete v1/apps/{application_id}/channels/voice
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {DeleteVoiceChannelResponse} Success
		 */
		DeleteVoiceChannel(application_id: string): Observable<DeleteVoiceChannelResponse> {
			return this.http.delete<DeleteVoiceChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/voice', {});
		}

		/**
		 * Retrieves information about the status and settings of the voice channel for an application.
		 * Get v1/apps/{application_id}/channels/voice
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetVoiceChannelResponse} Success
		 */
		GetVoiceChannel(application_id: string): Observable<GetVoiceChannelResponse> {
			return this.http.get<GetVoiceChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/voice', {});
		}

		/**
		 * Enables the voice channel for an application or updates the status and settings of the voice channel for an application.
		 * Put v1/apps/{application_id}/channels/voice
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateVoiceChannelResponse} Success
		 */
		UpdateVoiceChannel(application_id: string, requestBody: UpdateVoiceChannelPutBody): Observable<UpdateVoiceChannelResponse> {
			return this.http.put<UpdateVoiceChannelResponse>(this.baseUri + 'v1/apps/{application_id}/channels/voice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		GetApplicationDateRangeKpi(application_id: string, end_time: Date | null | undefined, kpi_name: string, next_token: string | null | undefined, page_size: string | null | undefined, start_time: Date | null | undefined): Observable<GetApplicationDateRangeKpiResponse> {
			return this.http.get<GetApplicationDateRangeKpiResponse>(this.baseUri + 'v1/apps/{application_id}/kpis/daterange/{kpi_name}?end_time=' + end_time?.toISOString() + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&start_time=' + start_time?.toISOString(), {});
		}

		/**
		 * Retrieves information about the settings for an application.
		 * Get v1/apps/{application_id}/settings
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetApplicationSettingsResponse} Success
		 */
		GetApplicationSettings(application_id: string): Observable<GetApplicationSettingsResponse> {
			return this.http.get<GetApplicationSettingsResponse>(this.baseUri + 'v1/apps/{application_id}/settings', {});
		}

		/**
		 * Updates the settings for an application.
		 * Put v1/apps/{application_id}/settings
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {UpdateApplicationSettingsResponse} Success
		 */
		UpdateApplicationSettings(application_id: string, requestBody: UpdateApplicationSettingsPutBody): Observable<UpdateApplicationSettingsResponse> {
			return this.http.put<UpdateApplicationSettingsResponse>(this.baseUri + 'v1/apps/{application_id}/settings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
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
		GetCampaignActivities(application_id: string, campaign_id: string, page_size: string | null | undefined, token: string | null | undefined): Observable<GetCampaignActivitiesResponse> {
			return this.http.get<GetCampaignActivitiesResponse>(this.baseUri + 'v1/apps/{application_id}/campaigns/{campaign_id}/activities?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
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
		GetCampaignDateRangeKpi(application_id: string, campaign_id: string, end_time: Date | null | undefined, kpi_name: string, next_token: string | null | undefined, page_size: string | null | undefined, start_time: Date | null | undefined): Observable<GetCampaignDateRangeKpiResponse> {
			return this.http.get<GetCampaignDateRangeKpiResponse>(this.baseUri + 'v1/apps/{application_id}/campaigns/{campaign_id}/kpis/daterange/{kpi_name}?end_time=' + end_time?.toISOString() + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&start_time=' + start_time?.toISOString(), {});
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
			return this.http.get<GetCampaignVersionResponse>(this.baseUri + 'v1/apps/{application_id}/campaigns/{campaign_id}/versions/' + (version == null ? '' : encodeURIComponent(version)), {});
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
		GetCampaignVersions(application_id: string, campaign_id: string, page_size: string | null | undefined, token: string | null | undefined): Observable<GetCampaignVersionsResponse> {
			return this.http.get<GetCampaignVersionsResponse>(this.baseUri + 'v1/apps/{application_id}/campaigns/{campaign_id}/versions?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Retrieves information about the history and status of each channel for an application.
		 * Get v1/apps/{application_id}/channels
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {GetChannelsResponse} Success
		 */
		GetChannels(application_id: string): Observable<GetChannelsResponse> {
			return this.http.get<GetChannelsResponse>(this.baseUri + 'v1/apps/{application_id}/channels', {});
		}

		/**
		 * Retrieves information about the status and settings of a specific export job for an application.
		 * Get v1/apps/{application_id}/jobs/export/{job_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} job_id The unique identifier for the job.
		 * @return {GetExportJobResponse} Success
		 */
		GetExportJob(application_id: string, job_id: string): Observable<GetExportJobResponse> {
			return this.http.get<GetExportJobResponse>(this.baseUri + 'v1/apps/{application_id}/jobs/export/{job_id}', {});
		}

		/**
		 * Retrieves information about the status and settings of a specific import job for an application.
		 * Get v1/apps/{application_id}/jobs/import/{job_id}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} job_id The unique identifier for the job.
		 * @return {GetImportJobResponse} Success
		 */
		GetImportJob(application_id: string, job_id: string): Observable<GetImportJobResponse> {
			return this.http.get<GetImportJobResponse>(this.baseUri + 'v1/apps/{application_id}/jobs/import/{job_id}', {});
		}

		/**
		 * Retrieves the in-app messages targeted for the provided endpoint ID.
		 * Get v1/apps/{application_id}/endpoints/{endpoint_id}/inappmessages
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} endpoint_id The unique identifier for the endpoint.
		 * @return {GetInAppMessagesResponse} Success
		 */
		GetInAppMessages(application_id: string, endpoint_id: string): Observable<GetInAppMessagesResponse> {
			return this.http.get<GetInAppMessagesResponse>(this.baseUri + 'v1/apps/{application_id}/endpoints/{endpoint_id}/inappmessages', {});
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
		GetJourneyDateRangeKpi(application_id: string, end_time: Date | null | undefined, journey_id: string, kpi_name: string, next_token: string | null | undefined, page_size: string | null | undefined, start_time: Date | null | undefined): Observable<GetJourneyDateRangeKpiResponse> {
			return this.http.get<GetJourneyDateRangeKpiResponse>(this.baseUri + 'v1/apps/{application_id}/journeys/{journey_id}/kpis/daterange/{kpi_name}?end_time=' + end_time?.toISOString() + '&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&start_time=' + start_time?.toISOString(), {});
		}

		/**
		 * Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.
		 * Get v1/apps/{application_id}/journeys/{journey_id}/activities/{journey_activity_id}/execution-metrics
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_activity_id The unique identifier for the journey activity.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @param {string} next_token The <code/> string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @return {GetJourneyExecutionActivityMetricsResponse} Success
		 */
		GetJourneyExecutionActivityMetrics(application_id: string, journey_activity_id: string, journey_id: string, next_token: string | null | undefined, page_size: string | null | undefined): Observable<GetJourneyExecutionActivityMetricsResponse> {
			return this.http.get<GetJourneyExecutionActivityMetricsResponse>(this.baseUri + 'v1/apps/{application_id}/journeys/{journey_id}/activities/{journey_activity_id}/execution-metrics?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)), {});
		}

		/**
		 * Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.
		 * Get v1/apps/{application_id}/journeys/{journey_id}/execution-metrics
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @param {string} next_token The <code/> string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @return {GetJourneyExecutionMetricsResponse} Success
		 */
		GetJourneyExecutionMetrics(application_id: string, journey_id: string, next_token: string | null | undefined, page_size: string | null | undefined): Observable<GetJourneyExecutionMetricsResponse> {
			return this.http.get<GetJourneyExecutionMetricsResponse>(this.baseUri + 'v1/apps/{application_id}/journeys/{journey_id}/execution-metrics?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)), {});
		}

		/**
		 * Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey activity.
		 * Get v1/apps/{application_id}/journeys/{journey_id}/runs/{run_id}/activities/{journey_activity_id}/execution-metrics
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_activity_id The unique identifier for the journey activity.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @param {string} next_token The <code/> string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} run_id The unique identifier for the journey run.
		 * @return {GetJourneyRunExecutionActivityMetricsResponse} Success
		 */
		GetJourneyRunExecutionActivityMetrics(application_id: string, journey_activity_id: string, journey_id: string, next_token: string | null | undefined, page_size: string | null | undefined, run_id: string): Observable<GetJourneyRunExecutionActivityMetricsResponse> {
			return this.http.get<GetJourneyRunExecutionActivityMetricsResponse>(this.baseUri + 'v1/apps/{application_id}/journeys/{journey_id}/runs/{run_id}/activities/{journey_activity_id}/execution-metrics?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)), {});
		}

		/**
		 * Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey.
		 * Get v1/apps/{application_id}/journeys/{journey_id}/runs/{run_id}/execution-metrics
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @param {string} next_token The <code/> string that specifies which page of results to return in a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} run_id The unique identifier for the journey run.
		 * @return {GetJourneyRunExecutionMetricsResponse} Success
		 */
		GetJourneyRunExecutionMetrics(application_id: string, journey_id: string, next_token: string | null | undefined, page_size: string | null | undefined, run_id: string): Observable<GetJourneyRunExecutionMetricsResponse> {
			return this.http.get<GetJourneyRunExecutionMetricsResponse>(this.baseUri + 'v1/apps/{application_id}/journeys/{journey_id}/runs/{run_id}/execution-metrics?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)), {});
		}

		/**
		 * Provides information about the runs of a journey.
		 * Get v1/apps/{application_id}/journeys/{journey_id}/runs
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @param {string} page_size The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
		 * @param {string} token The NextToken string that specifies which page of results to return in a paginated response.
		 * @return {GetJourneyRunsResponse} Success
		 */
		GetJourneyRuns(application_id: string, journey_id: string, page_size: string | null | undefined, token: string | null | undefined): Observable<GetJourneyRunsResponse> {
			return this.http.get<GetJourneyRunsResponse>(this.baseUri + 'v1/apps/{application_id}/journeys/{journey_id}/runs?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
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
		GetSegmentExportJobs(application_id: string, page_size: string | null | undefined, segment_id: string, token: string | null | undefined): Observable<GetSegmentExportJobsResponse> {
			return this.http.get<GetSegmentExportJobsResponse>(this.baseUri + 'v1/apps/{application_id}/segments/{segment_id}/jobs/export?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
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
		GetSegmentImportJobs(application_id: string, page_size: string | null | undefined, segment_id: string, token: string | null | undefined): Observable<GetSegmentImportJobsResponse> {
			return this.http.get<GetSegmentImportJobsResponse>(this.baseUri + 'v1/apps/{application_id}/segments/{segment_id}/jobs/import?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
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
			return this.http.get<GetSegmentVersionResponse>(this.baseUri + 'v1/apps/{application_id}/segments/{segment_id}/versions/' + (version == null ? '' : encodeURIComponent(version)), {});
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
		GetSegmentVersions(application_id: string, page_size: string | null | undefined, segment_id: string, token: string | null | undefined): Observable<GetSegmentVersionsResponse> {
			return this.http.get<GetSegmentVersionsResponse>(this.baseUri + 'v1/apps/{application_id}/segments/{segment_id}/versions?page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)) + '&token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Retrieves all the tags (keys and values) that are associated with an application, campaign, message template, or segment.
		 * Get v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resource_arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'v1/tags/{resource_arn}', {});
		}

		/**
		 * Adds one or more tags (keys and values) to an application, campaign, message template, or segment.
		 * Post v1/tags/{resource_arn}
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @return {void} 
		 */
		TagResource(resource_arn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/tags/{resource_arn}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		ListTemplateVersions(next_token: string | null | undefined, page_size: string | null | undefined, template_name: string, template_type: string): Observable<ListTemplateVersionsResponse> {
			return this.http.get<ListTemplateVersionsResponse>(this.baseUri + 'v1/templates/{template_name}/{template_type}/versions?next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&page_size=' + (page_size == null ? '' : encodeURIComponent(page_size)), {});
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
		ListTemplates(next_token: string | null | undefined, page_size: string | null | undefined, prefix: string | null | undefined, template_type: string | null | undefined): Observable<ListTemplatesResponse> {
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
			return this.http.post(this.baseUri + 'v1/apps/{application_id}/events', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes one or more attributes, of the same attribute type, from all the endpoints that are associated with an application.
		 * Put v1/apps/{application_id}/attributes/{attribute_type}
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} attribute_type  <p>The type of attribute or attributes to remove. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.</p></li></ul>
		 * @return {RemoveAttributesResponse} Success
		 */
		RemoveAttributes(application_id: string, attribute_type: string, requestBody: RemoveAttributesPutBody): Observable<RemoveAttributesResponse> {
			return this.http.put<RemoveAttributesResponse>(this.baseUri + 'v1/apps/{application_id}/attributes/{attribute_type}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates and sends a direct message.
		 * Post v1/apps/{application_id}/messages
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {SendMessagesResponse} Success
		 */
		SendMessages(application_id: string, requestBody: SendMessagesPostBody): Observable<SendMessagesResponse> {
			return this.http.post<SendMessagesResponse>(this.baseUri + 'v1/apps/{application_id}/messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Send an OTP message
		 * Post v1/apps/{application_id}/otp
		 * @param {string} application_id The unique ID of your Amazon Pinpoint application.
		 * @return {SendOTPMessageResponse} Success
		 */
		SendOTPMessage(application_id: string, requestBody: SendOTPMessagePostBody): Observable<SendOTPMessageResponse> {
			return this.http.post<SendOTPMessageResponse>(this.baseUri + 'v1/apps/{application_id}/otp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates and sends a message to a list of users.
		 * Post v1/apps/{application_id}/users-messages
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {SendUsersMessagesResponse} Success
		 */
		SendUsersMessages(application_id: string, requestBody: SendUsersMessagesPostBody): Observable<SendUsersMessagesResponse> {
			return this.http.post<SendUsersMessagesResponse>(this.baseUri + 'v1/apps/{application_id}/users-messages', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags (keys and values) from an application, campaign, message template, or segment.
		 * Delete v1/tags/{resource_arn}#tagKeys
		 * @param {string} resource_arn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The key of the tag to remove from the resource. To remove multiple tags, append the tagKeys parameter and argument for each additional tag to remove, separated by an ampersand (&amp;).
		 * @return {void} 
		 */
		UntagResource(resource_arn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/tags/{resource_arn}#tagKeys?' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.
		 * Put v1/apps/{application_id}/endpoints
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @return {void} 
		 */
		UpdateEndpointsBatch(application_id: string, requestBody: UpdateEndpointsBatchPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/apps/{application_id}/endpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancels (stops) an active journey.
		 * Put v1/apps/{application_id}/journeys/{journey_id}/state
		 * @param {string} application_id The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console.
		 * @param {string} journey_id The unique identifier for the journey.
		 * @return {UpdateJourneyStateResponse} Success
		 */
		UpdateJourneyState(application_id: string, journey_id: string, requestBody: UpdateJourneyStatePutBody): Observable<UpdateJourneyStateResponse> {
			return this.http.put<UpdateJourneyStateResponse>(this.baseUri + 'v1/apps/{application_id}/journeys/{journey_id}/state', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Changes the status of a specific version of a message template to <i>active</i>.
		 * Put v1/templates/{template_name}/{template_type}/active-version
		 * @param {string} template_name The name of the message template. A template name must start with an alphanumeric character and can contain a maximum of 128 characters. The characters can be alphanumeric characters, underscores (_), or hyphens (-). Template names are case sensitive.
		 * @param {string} template_type The type of channel that the message template is designed for. Valid values are: EMAIL, PUSH, SMS, and VOICE.
		 * @return {UpdateTemplateActiveVersionResponse} Success
		 */
		UpdateTemplateActiveVersion(template_name: string, template_type: string, requestBody: UpdateTemplateActiveVersionPutBody): Observable<UpdateTemplateActiveVersionResponse> {
			return this.http.put<UpdateTemplateActiveVersionResponse>(this.baseUri + 'v1/templates/{template_name}/{template_type}/active-version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verify an OTP
		 * Post v1/apps/{application_id}/verify-otp
		 * @param {string} application_id The unique ID of your Amazon Pinpoint application.
		 * @return {VerifyOTPMessageResponse} Success
		 */
		VerifyOTPMessage(application_id: string, requestBody: VerifyOTPMessagePostBody): Observable<VerifyOTPMessageResponse> {
			return this.http.post<VerifyOTPMessageResponse>(this.baseUri + 'v1/apps/{application_id}/verify-otp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateAppPostBody {

		/**
		 * Specifies the display name of an application and the tags to associate with the application.
		 * Required
		 */
		CreateApplicationRequest: CreateAppPostBodyCreateApplicationRequest;
	}
	export interface CreateAppPostBodyFormProperties {
	}
	export function CreateCreateAppPostBodyFormGroup() {
		return new FormGroup<CreateAppPostBodyFormProperties>({
		});

	}

	export interface CreateAppPostBodyCreateApplicationRequest {
		Name?: string;
		tags?: MapOf__string;
	}
	export interface CreateAppPostBodyCreateApplicationRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateAppPostBodyCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateAppPostBodyCreateApplicationRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCampaignPostBody {

		/**
		 * Specifies the configuration and other settings for a campaign.
		 * Required
		 */
		WriteCampaignRequest: CreateCampaignPostBodyWriteCampaignRequest;
	}
	export interface CreateCampaignPostBodyFormProperties {
	}
	export function CreateCreateCampaignPostBodyFormGroup() {
		return new FormGroup<CreateCampaignPostBodyFormProperties>({
		});

	}

	export interface CreateCampaignPostBodyWriteCampaignRequest {
		AdditionalTreatments?: Array<WriteTreatmentResource>;
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
		Description?: string;
		HoldoutPercent?: number | null;
		Hook?: CampaignHook;
		IsPaused?: boolean | null;
		Limits?: CampaignLimits;
		MessageConfiguration?: MessageConfiguration;
		Name?: string;
		Schedule?: Schedule;
		SegmentId?: string;
		SegmentVersion?: number | null;
		tags?: MapOf__string;
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
		Priority?: number | null;
	}
	export interface CreateCampaignPostBodyWriteCampaignRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		HoldoutPercent: FormControl<number | null | undefined>,
		IsPaused: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SegmentId: FormControl<string | null | undefined>,
		SegmentVersion: FormControl<number | null | undefined>,
		TreatmentDescription: FormControl<string | null | undefined>,
		TreatmentName: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateCreateCampaignPostBodyWriteCampaignRequestFormGroup() {
		return new FormGroup<CreateCampaignPostBodyWriteCampaignRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			HoldoutPercent: new FormControl<number | null | undefined>(undefined),
			IsPaused: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SegmentId: new FormControl<string | null | undefined>(undefined),
			SegmentVersion: new FormControl<number | null | undefined>(undefined),
			TreatmentDescription: new FormControl<string | null | undefined>(undefined),
			TreatmentName: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateEmailTemplatePostBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
		 * Required
		 */
		EmailTemplateRequest: CreateEmailTemplatePostBodyEmailTemplateRequest;
	}
	export interface CreateEmailTemplatePostBodyFormProperties {
	}
	export function CreateCreateEmailTemplatePostBodyFormGroup() {
		return new FormGroup<CreateEmailTemplatePostBodyFormProperties>({
		});

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
	export interface CreateEmailTemplatePostBodyEmailTemplateRequestFormProperties {
		DefaultSubstitutions: FormControl<string | null | undefined>,
		HtmlPart: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
		TextPart: FormControl<string | null | undefined>,
	}
	export function CreateCreateEmailTemplatePostBodyEmailTemplateRequestFormGroup() {
		return new FormGroup<CreateEmailTemplatePostBodyEmailTemplateRequestFormProperties>({
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			HtmlPart: new FormControl<string | null | undefined>(undefined),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			TextPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEmailTemplatePutBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
		 * Required
		 */
		EmailTemplateRequest: UpdateEmailTemplatePutBodyEmailTemplateRequest;
	}
	export interface UpdateEmailTemplatePutBodyFormProperties {
	}
	export function CreateUpdateEmailTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateEmailTemplatePutBodyFormProperties>({
		});

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
	export interface UpdateEmailTemplatePutBodyEmailTemplateRequestFormProperties {
		DefaultSubstitutions: FormControl<string | null | undefined>,
		HtmlPart: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
		TextPart: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEmailTemplatePutBodyEmailTemplateRequestFormGroup() {
		return new FormGroup<UpdateEmailTemplatePutBodyEmailTemplateRequestFormProperties>({
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			HtmlPart: new FormControl<string | null | undefined>(undefined),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			TextPart: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateExportJobPostBody {

		/**
		 * Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
		 * Required
		 */
		ExportJobRequest: CreateExportJobPostBodyExportJobRequest;
	}
	export interface CreateExportJobPostBodyFormProperties {
	}
	export function CreateCreateExportJobPostBodyFormGroup() {
		return new FormGroup<CreateExportJobPostBodyFormProperties>({
		});

	}

	export interface CreateExportJobPostBodyExportJobRequest {
		RoleArn?: string;
		S3UrlPrefix?: string;
		SegmentId?: string;
		SegmentVersion?: number | null;
	}
	export interface CreateExportJobPostBodyExportJobRequestFormProperties {
		RoleArn: FormControl<string | null | undefined>,
		S3UrlPrefix: FormControl<string | null | undefined>,
		SegmentId: FormControl<string | null | undefined>,
		SegmentVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateExportJobPostBodyExportJobRequestFormGroup() {
		return new FormGroup<CreateExportJobPostBodyExportJobRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined),
			S3UrlPrefix: new FormControl<string | null | undefined>(undefined),
			SegmentId: new FormControl<string | null | undefined>(undefined),
			SegmentVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateImportJobPostBody {

		/**
		 * Specifies the settings for a job that imports endpoint definitions from an Amazon Simple Storage Service (Amazon S3) bucket.
		 * Required
		 */
		ImportJobRequest: CreateImportJobPostBodyImportJobRequest;
	}
	export interface CreateImportJobPostBodyFormProperties {
	}
	export function CreateCreateImportJobPostBodyFormGroup() {
		return new FormGroup<CreateImportJobPostBodyFormProperties>({
		});

	}

	export interface CreateImportJobPostBodyImportJobRequest {
		DefineSegment?: boolean | null;
		ExternalId?: string;
		Format?: Format;
		RegisterEndpoints?: boolean | null;
		RoleArn?: string;
		S3Url?: string;
		SegmentId?: string;
		SegmentName?: string;
	}
	export interface CreateImportJobPostBodyImportJobRequestFormProperties {
		DefineSegment: FormControl<boolean | null | undefined>,
		ExternalId: FormControl<string | null | undefined>,
		Format: FormControl<Format | null | undefined>,
		RegisterEndpoints: FormControl<boolean | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		S3Url: FormControl<string | null | undefined>,
		SegmentId: FormControl<string | null | undefined>,
		SegmentName: FormControl<string | null | undefined>,
	}
	export function CreateCreateImportJobPostBodyImportJobRequestFormGroup() {
		return new FormGroup<CreateImportJobPostBodyImportJobRequestFormProperties>({
			DefineSegment: new FormControl<boolean | null | undefined>(undefined),
			ExternalId: new FormControl<string | null | undefined>(undefined),
			Format: new FormControl<Format | null | undefined>(undefined),
			RegisterEndpoints: new FormControl<boolean | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			S3Url: new FormControl<string | null | undefined>(undefined),
			SegmentId: new FormControl<string | null | undefined>(undefined),
			SegmentName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateInAppTemplatePostBody {

		/**
		 * InApp Template Request.
		 * Required
		 */
		InAppTemplateRequest: CreateInAppTemplatePostBodyInAppTemplateRequest;
	}
	export interface CreateInAppTemplatePostBodyFormProperties {
	}
	export function CreateCreateInAppTemplatePostBodyFormGroup() {
		return new FormGroup<CreateInAppTemplatePostBodyFormProperties>({
		});

	}

	export interface CreateInAppTemplatePostBodyInAppTemplateRequest {
		Content?: Array<InAppMessageContent>;
		CustomConfig?: MapOf__string;
		Layout?: Layout;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}
	export interface CreateInAppTemplatePostBodyInAppTemplateRequestFormProperties {
		Layout: FormControl<Layout | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateInAppTemplatePostBodyInAppTemplateRequestFormGroup() {
		return new FormGroup<CreateInAppTemplatePostBodyInAppTemplateRequestFormProperties>({
			Layout: new FormControl<Layout | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateInAppTemplatePutBody {

		/**
		 * InApp Template Request.
		 * Required
		 */
		InAppTemplateRequest: UpdateInAppTemplatePutBodyInAppTemplateRequest;
	}
	export interface UpdateInAppTemplatePutBodyFormProperties {
	}
	export function CreateUpdateInAppTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateInAppTemplatePutBodyFormProperties>({
		});

	}

	export interface UpdateInAppTemplatePutBodyInAppTemplateRequest {
		Content?: Array<InAppMessageContent>;
		CustomConfig?: MapOf__string;
		Layout?: Layout;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}
	export interface UpdateInAppTemplatePutBodyInAppTemplateRequestFormProperties {
		Layout: FormControl<Layout | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateInAppTemplatePutBodyInAppTemplateRequestFormGroup() {
		return new FormGroup<UpdateInAppTemplatePutBodyInAppTemplateRequestFormProperties>({
			Layout: new FormControl<Layout | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateJourneyPostBody {

		/**
		 * Specifies the configuration and other settings for a journey.
		 * Required
		 */
		WriteJourneyRequest: CreateJourneyPostBodyWriteJourneyRequest;
	}
	export interface CreateJourneyPostBodyFormProperties {
	}
	export function CreateCreateJourneyPostBodyFormGroup() {
		return new FormGroup<CreateJourneyPostBodyFormProperties>({
		});

	}

	export interface CreateJourneyPostBodyWriteJourneyRequest {
		Activities?: MapOfActivity;
		CreationDate?: string;
		LastModifiedDate?: string;
		Limits?: JourneyLimits;
		LocalTime?: boolean | null;
		Name?: string;
		QuietTime?: QuietTime;
		RefreshFrequency?: string;
		Schedule?: JourneySchedule;
		StartActivity?: string;
		StartCondition?: StartCondition;
		State?: State;
		WaitForQuietTime?: boolean | null;
		RefreshOnSegmentUpdate?: boolean | null;
		JourneyChannelSettings?: JourneyChannelSettings;
		SendingSchedule?: boolean | null;
		OpenHours?: OpenHours;
		ClosedDays?: ClosedDays;
		TimezoneEstimationMethods?: Array<__TimezoneEstimationMethodsElement>;
	}
	export interface CreateJourneyPostBodyWriteJourneyRequestFormProperties {
		CreationDate: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		LocalTime: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RefreshFrequency: FormControl<string | null | undefined>,
		StartActivity: FormControl<string | null | undefined>,
		State: FormControl<State | null | undefined>,
		WaitForQuietTime: FormControl<boolean | null | undefined>,
		RefreshOnSegmentUpdate: FormControl<boolean | null | undefined>,
		SendingSchedule: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateJourneyPostBodyWriteJourneyRequestFormGroup() {
		return new FormGroup<CreateJourneyPostBodyWriteJourneyRequestFormProperties>({
			CreationDate: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			LocalTime: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RefreshFrequency: new FormControl<string | null | undefined>(undefined),
			StartActivity: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
			WaitForQuietTime: new FormControl<boolean | null | undefined>(undefined),
			RefreshOnSegmentUpdate: new FormControl<boolean | null | undefined>(undefined),
			SendingSchedule: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreatePushTemplatePostBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
		 * Required
		 */
		PushNotificationTemplateRequest: CreatePushTemplatePostBodyPushNotificationTemplateRequest;
	}
	export interface CreatePushTemplatePostBodyFormProperties {
	}
	export function CreateCreatePushTemplatePostBodyFormGroup() {
		return new FormGroup<CreatePushTemplatePostBodyFormProperties>({
		});

	}

	export interface CreatePushTemplatePostBodyPushNotificationTemplateRequest {
		ADM?: AndroidPushNotificationTemplate;
		APNS?: APNSPushNotificationTemplate;
		Baidu?: AndroidPushNotificationTemplate;
		Default?: DefaultPushNotificationTemplate;
		DefaultSubstitutions?: string;
		GCM?: AndroidPushNotificationTemplate;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}
	export interface CreatePushTemplatePostBodyPushNotificationTemplateRequestFormProperties {
		DefaultSubstitutions: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreatePushTemplatePostBodyPushNotificationTemplateRequestFormGroup() {
		return new FormGroup<CreatePushTemplatePostBodyPushNotificationTemplateRequestFormProperties>({
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePushTemplatePutBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through a push notification channel.
		 * Required
		 */
		PushNotificationTemplateRequest: UpdatePushTemplatePutBodyPushNotificationTemplateRequest;
	}
	export interface UpdatePushTemplatePutBodyFormProperties {
	}
	export function CreateUpdatePushTemplatePutBodyFormGroup() {
		return new FormGroup<UpdatePushTemplatePutBodyFormProperties>({
		});

	}

	export interface UpdatePushTemplatePutBodyPushNotificationTemplateRequest {
		ADM?: AndroidPushNotificationTemplate;
		APNS?: APNSPushNotificationTemplate;
		Baidu?: AndroidPushNotificationTemplate;
		Default?: DefaultPushNotificationTemplate;
		DefaultSubstitutions?: string;
		GCM?: AndroidPushNotificationTemplate;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}
	export interface UpdatePushTemplatePutBodyPushNotificationTemplateRequestFormProperties {
		DefaultSubstitutions: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePushTemplatePutBodyPushNotificationTemplateRequestFormGroup() {
		return new FormGroup<UpdatePushTemplatePutBodyPushNotificationTemplateRequestFormProperties>({
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRecommenderConfigurationPostBody {

		/**
		 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
		 * Required
		 */
		CreateRecommenderConfiguration: CreateRecommenderConfigurationPostBodyCreateRecommenderConfiguration;
	}
	export interface CreateRecommenderConfigurationPostBodyFormProperties {
	}
	export function CreateCreateRecommenderConfigurationPostBodyFormGroup() {
		return new FormGroup<CreateRecommenderConfigurationPostBodyFormProperties>({
		});

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
		RecommendationsPerMessage?: number | null;
	}
	export interface CreateRecommenderConfigurationPostBodyCreateRecommenderConfigurationFormProperties {
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RecommendationProviderIdType: FormControl<string | null | undefined>,
		RecommendationProviderRoleArn: FormControl<string | null | undefined>,
		RecommendationProviderUri: FormControl<string | null | undefined>,
		RecommendationTransformerUri: FormControl<string | null | undefined>,
		RecommendationsDisplayName: FormControl<string | null | undefined>,
		RecommendationsPerMessage: FormControl<number | null | undefined>,
	}
	export function CreateCreateRecommenderConfigurationPostBodyCreateRecommenderConfigurationFormGroup() {
		return new FormGroup<CreateRecommenderConfigurationPostBodyCreateRecommenderConfigurationFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderIdType: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderRoleArn: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderUri: new FormControl<string | null | undefined>(undefined),
			RecommendationTransformerUri: new FormControl<string | null | undefined>(undefined),
			RecommendationsDisplayName: new FormControl<string | null | undefined>(undefined),
			RecommendationsPerMessage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateSegmentPostBody {

		/**
		 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
		 * Required
		 */
		WriteSegmentRequest: CreateSegmentPostBodyWriteSegmentRequest;
	}
	export interface CreateSegmentPostBodyFormProperties {
	}
	export function CreateCreateSegmentPostBodyFormGroup() {
		return new FormGroup<CreateSegmentPostBodyFormProperties>({
		});

	}

	export interface CreateSegmentPostBodyWriteSegmentRequest {
		Dimensions?: SegmentDimensions;
		Name?: string;
		SegmentGroups?: SegmentGroupList;
		tags?: MapOf__string;
	}
	export interface CreateSegmentPostBodyWriteSegmentRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSegmentPostBodyWriteSegmentRequestFormGroup() {
		return new FormGroup<CreateSegmentPostBodyWriteSegmentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSmsTemplatePostBody {

		/**
		 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
		 * Required
		 */
		SMSTemplateRequest: CreateSmsTemplatePostBodySMSTemplateRequest;
	}
	export interface CreateSmsTemplatePostBodyFormProperties {
	}
	export function CreateCreateSmsTemplatePostBodyFormGroup() {
		return new FormGroup<CreateSmsTemplatePostBodyFormProperties>({
		});

	}

	export interface CreateSmsTemplatePostBodySMSTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}
	export interface CreateSmsTemplatePostBodySMSTemplateRequestFormProperties {
		Body: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateSmsTemplatePostBodySMSTemplateRequestFormGroup() {
		return new FormGroup<CreateSmsTemplatePostBodySMSTemplateRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSmsTemplatePutBody {

		/**
		 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
		 * Required
		 */
		SMSTemplateRequest: UpdateSmsTemplatePutBodySMSTemplateRequest;
	}
	export interface UpdateSmsTemplatePutBodyFormProperties {
	}
	export function CreateUpdateSmsTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateSmsTemplatePutBodyFormProperties>({
		});

	}

	export interface UpdateSmsTemplatePutBodySMSTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		RecommenderId?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
	}
	export interface UpdateSmsTemplatePutBodySMSTemplateRequestFormProperties {
		Body: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,
		RecommenderId: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSmsTemplatePutBodySMSTemplateRequestFormGroup() {
		return new FormGroup<UpdateSmsTemplatePutBodySMSTemplateRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			RecommenderId: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateVoiceTemplatePostBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
		 * Required
		 */
		VoiceTemplateRequest: CreateVoiceTemplatePostBodyVoiceTemplateRequest;
	}
	export interface CreateVoiceTemplatePostBodyFormProperties {
	}
	export function CreateCreateVoiceTemplatePostBodyFormGroup() {
		return new FormGroup<CreateVoiceTemplatePostBodyFormProperties>({
		});

	}

	export interface CreateVoiceTemplatePostBodyVoiceTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		LanguageCode?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		VoiceId?: string;
	}
	export interface CreateVoiceTemplatePostBodyVoiceTemplateRequestFormProperties {
		Body: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
		VoiceId: FormControl<string | null | undefined>,
	}
	export function CreateCreateVoiceTemplatePostBodyVoiceTemplateRequestFormGroup() {
		return new FormGroup<CreateVoiceTemplatePostBodyVoiceTemplateRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			VoiceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVoiceTemplatePutBody {

		/**
		 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
		 * Required
		 */
		VoiceTemplateRequest: UpdateVoiceTemplatePutBodyVoiceTemplateRequest;
	}
	export interface UpdateVoiceTemplatePutBodyFormProperties {
	}
	export function CreateUpdateVoiceTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateVoiceTemplatePutBodyFormProperties>({
		});

	}

	export interface UpdateVoiceTemplatePutBodyVoiceTemplateRequest {
		Body?: string;
		DefaultSubstitutions?: string;
		LanguageCode?: string;
		tags?: MapOf__string;
		TemplateDescription?: string;
		VoiceId?: string;
	}
	export interface UpdateVoiceTemplatePutBodyVoiceTemplateRequestFormProperties {
		Body: FormControl<string | null | undefined>,
		DefaultSubstitutions: FormControl<string | null | undefined>,
		LanguageCode: FormControl<string | null | undefined>,
		TemplateDescription: FormControl<string | null | undefined>,
		VoiceId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVoiceTemplatePutBodyVoiceTemplateRequestFormGroup() {
		return new FormGroup<UpdateVoiceTemplatePutBodyVoiceTemplateRequestFormProperties>({
			Body: new FormControl<string | null | undefined>(undefined),
			DefaultSubstitutions: new FormControl<string | null | undefined>(undefined),
			LanguageCode: new FormControl<string | null | undefined>(undefined),
			TemplateDescription: new FormControl<string | null | undefined>(undefined),
			VoiceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAdmChannelPutBody {

		/**
		 * Specifies the status and settings of the ADM (Amazon Device Messaging) channel for an application.
		 * Required
		 */
		ADMChannelRequest: UpdateAdmChannelPutBodyADMChannelRequest;
	}
	export interface UpdateAdmChannelPutBodyFormProperties {
	}
	export function CreateUpdateAdmChannelPutBodyFormGroup() {
		return new FormGroup<UpdateAdmChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateAdmChannelPutBodyADMChannelRequest {
		ClientId?: string;
		ClientSecret?: string;
		Enabled?: boolean | null;
	}
	export interface UpdateAdmChannelPutBodyADMChannelRequestFormProperties {
		ClientId: FormControl<string | null | undefined>,
		ClientSecret: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateAdmChannelPutBodyADMChannelRequestFormGroup() {
		return new FormGroup<UpdateAdmChannelPutBodyADMChannelRequestFormProperties>({
			ClientId: new FormControl<string | null | undefined>(undefined),
			ClientSecret: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateApnsChannelPutBody {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) channel for an application.
		 * Required
		 */
		APNSChannelRequest: UpdateApnsChannelPutBodyAPNSChannelRequest;
	}
	export interface UpdateApnsChannelPutBodyFormProperties {
	}
	export function CreateUpdateApnsChannelPutBodyFormGroup() {
		return new FormGroup<UpdateApnsChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateApnsChannelPutBodyAPNSChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}
	export interface UpdateApnsChannelPutBodyAPNSChannelRequestFormProperties {
		BundleId: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		TeamId: FormControl<string | null | undefined>,
		TokenKey: FormControl<string | null | undefined>,
		TokenKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApnsChannelPutBodyAPNSChannelRequestFormGroup() {
		return new FormGroup<UpdateApnsChannelPutBodyAPNSChannelRequestFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<string | null | undefined>(undefined),
			TokenKey: new FormControl<string | null | undefined>(undefined),
			TokenKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApnsSandboxChannelPutBody {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) sandbox channel for an application.
		 * Required
		 */
		APNSSandboxChannelRequest: UpdateApnsSandboxChannelPutBodyAPNSSandboxChannelRequest;
	}
	export interface UpdateApnsSandboxChannelPutBodyFormProperties {
	}
	export function CreateUpdateApnsSandboxChannelPutBodyFormGroup() {
		return new FormGroup<UpdateApnsSandboxChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateApnsSandboxChannelPutBodyAPNSSandboxChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}
	export interface UpdateApnsSandboxChannelPutBodyAPNSSandboxChannelRequestFormProperties {
		BundleId: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		TeamId: FormControl<string | null | undefined>,
		TokenKey: FormControl<string | null | undefined>,
		TokenKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApnsSandboxChannelPutBodyAPNSSandboxChannelRequestFormGroup() {
		return new FormGroup<UpdateApnsSandboxChannelPutBodyAPNSSandboxChannelRequestFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<string | null | undefined>(undefined),
			TokenKey: new FormControl<string | null | undefined>(undefined),
			TokenKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApnsVoipChannelPutBody {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP channel for an application.
		 * Required
		 */
		APNSVoipChannelRequest: UpdateApnsVoipChannelPutBodyAPNSVoipChannelRequest;
	}
	export interface UpdateApnsVoipChannelPutBodyFormProperties {
	}
	export function CreateUpdateApnsVoipChannelPutBodyFormGroup() {
		return new FormGroup<UpdateApnsVoipChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateApnsVoipChannelPutBodyAPNSVoipChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}
	export interface UpdateApnsVoipChannelPutBodyAPNSVoipChannelRequestFormProperties {
		BundleId: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		TeamId: FormControl<string | null | undefined>,
		TokenKey: FormControl<string | null | undefined>,
		TokenKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApnsVoipChannelPutBodyAPNSVoipChannelRequestFormGroup() {
		return new FormGroup<UpdateApnsVoipChannelPutBodyAPNSVoipChannelRequestFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<string | null | undefined>(undefined),
			TokenKey: new FormControl<string | null | undefined>(undefined),
			TokenKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateApnsVoipSandboxChannelPutBody {

		/**
		 * Specifies the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.
		 * Required
		 */
		APNSVoipSandboxChannelRequest: UpdateApnsVoipSandboxChannelPutBodyAPNSVoipSandboxChannelRequest;
	}
	export interface UpdateApnsVoipSandboxChannelPutBodyFormProperties {
	}
	export function CreateUpdateApnsVoipSandboxChannelPutBodyFormGroup() {
		return new FormGroup<UpdateApnsVoipSandboxChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateApnsVoipSandboxChannelPutBodyAPNSVoipSandboxChannelRequest {
		BundleId?: string;
		Certificate?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		PrivateKey?: string;
		TeamId?: string;
		TokenKey?: string;
		TokenKeyId?: string;
	}
	export interface UpdateApnsVoipSandboxChannelPutBodyAPNSVoipSandboxChannelRequestFormProperties {
		BundleId: FormControl<string | null | undefined>,
		Certificate: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		TeamId: FormControl<string | null | undefined>,
		TokenKey: FormControl<string | null | undefined>,
		TokenKeyId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApnsVoipSandboxChannelPutBodyAPNSVoipSandboxChannelRequestFormGroup() {
		return new FormGroup<UpdateApnsVoipSandboxChannelPutBodyAPNSVoipSandboxChannelRequestFormProperties>({
			BundleId: new FormControl<string | null | undefined>(undefined),
			Certificate: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			TeamId: new FormControl<string | null | undefined>(undefined),
			TokenKey: new FormControl<string | null | undefined>(undefined),
			TokenKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateBaiduChannelPutBody {

		/**
		 * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
		 * Required
		 */
		BaiduChannelRequest: UpdateBaiduChannelPutBodyBaiduChannelRequest;
	}
	export interface UpdateBaiduChannelPutBodyFormProperties {
	}
	export function CreateUpdateBaiduChannelPutBodyFormGroup() {
		return new FormGroup<UpdateBaiduChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateBaiduChannelPutBodyBaiduChannelRequest {
		ApiKey?: string;
		Enabled?: boolean | null;
		SecretKey?: string;
	}
	export interface UpdateBaiduChannelPutBodyBaiduChannelRequestFormProperties {
		ApiKey: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		SecretKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBaiduChannelPutBodyBaiduChannelRequestFormGroup() {
		return new FormGroup<UpdateBaiduChannelPutBodyBaiduChannelRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			SecretKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateCampaignPutBody {

		/**
		 * Specifies the configuration and other settings for a campaign.
		 * Required
		 */
		WriteCampaignRequest: UpdateCampaignPutBodyWriteCampaignRequest;
	}
	export interface UpdateCampaignPutBodyFormProperties {
	}
	export function CreateUpdateCampaignPutBodyFormGroup() {
		return new FormGroup<UpdateCampaignPutBodyFormProperties>({
		});

	}

	export interface UpdateCampaignPutBodyWriteCampaignRequest {
		AdditionalTreatments?: Array<WriteTreatmentResource>;
		CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
		Description?: string;
		HoldoutPercent?: number | null;
		Hook?: CampaignHook;
		IsPaused?: boolean | null;
		Limits?: CampaignLimits;
		MessageConfiguration?: MessageConfiguration;
		Name?: string;
		Schedule?: Schedule;
		SegmentId?: string;
		SegmentVersion?: number | null;
		tags?: MapOf__string;
		TemplateConfiguration?: TemplateConfiguration;
		TreatmentDescription?: string;
		TreatmentName?: string;
		Priority?: number | null;
	}
	export interface UpdateCampaignPutBodyWriteCampaignRequestFormProperties {
		Description: FormControl<string | null | undefined>,
		HoldoutPercent: FormControl<number | null | undefined>,
		IsPaused: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		SegmentId: FormControl<string | null | undefined>,
		SegmentVersion: FormControl<number | null | undefined>,
		TreatmentDescription: FormControl<string | null | undefined>,
		TreatmentName: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
	}
	export function CreateUpdateCampaignPutBodyWriteCampaignRequestFormGroup() {
		return new FormGroup<UpdateCampaignPutBodyWriteCampaignRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			HoldoutPercent: new FormControl<number | null | undefined>(undefined),
			IsPaused: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			SegmentId: new FormControl<string | null | undefined>(undefined),
			SegmentVersion: new FormControl<number | null | undefined>(undefined),
			TreatmentDescription: new FormControl<string | null | undefined>(undefined),
			TreatmentName: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateEmailChannelPutBody {

		/**
		 * Specifies the status and settings of the email channel for an application.
		 * Required
		 */
		EmailChannelRequest: UpdateEmailChannelPutBodyEmailChannelRequest;
	}
	export interface UpdateEmailChannelPutBodyFormProperties {
	}
	export function CreateUpdateEmailChannelPutBodyFormGroup() {
		return new FormGroup<UpdateEmailChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateEmailChannelPutBodyEmailChannelRequest {
		ConfigurationSet?: string;
		Enabled?: boolean | null;
		FromAddress?: string;
		Identity?: string;
		RoleArn?: string;
	}
	export interface UpdateEmailChannelPutBodyEmailChannelRequestFormProperties {
		ConfigurationSet: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		FromAddress: FormControl<string | null | undefined>,
		Identity: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEmailChannelPutBodyEmailChannelRequestFormGroup() {
		return new FormGroup<UpdateEmailChannelPutBodyEmailChannelRequestFormProperties>({
			ConfigurationSet: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			FromAddress: new FormControl<string | null | undefined>(undefined),
			Identity: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEndpointPutBody {

		/**
		 * Specifies the channel type and other settings for an endpoint.
		 * Required
		 */
		EndpointRequest: UpdateEndpointPutBodyEndpointRequest;
	}
	export interface UpdateEndpointPutBodyFormProperties {
	}
	export function CreateUpdateEndpointPutBodyFormGroup() {
		return new FormGroup<UpdateEndpointPutBodyFormProperties>({
		});

	}

	export interface UpdateEndpointPutBodyEndpointRequest {
		Address?: string;
		Attributes?: MapOfListOf__string;
		ChannelType?: __EndpointTypesElement;
		Demographic?: EndpointDemographic;
		EffectiveDate?: string;
		EndpointStatus?: string;
		Location?: EndpointLocation;
		Metrics?: MapOf__double;
		OptOut?: string;
		RequestId?: string;
		User?: EndpointUser;
	}
	export interface UpdateEndpointPutBodyEndpointRequestFormProperties {
		Address: FormControl<string | null | undefined>,
		ChannelType: FormControl<__EndpointTypesElement | null | undefined>,
		EffectiveDate: FormControl<string | null | undefined>,
		EndpointStatus: FormControl<string | null | undefined>,
		OptOut: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEndpointPutBodyEndpointRequestFormGroup() {
		return new FormGroup<UpdateEndpointPutBodyEndpointRequestFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
			ChannelType: new FormControl<__EndpointTypesElement | null | undefined>(undefined),
			EffectiveDate: new FormControl<string | null | undefined>(undefined),
			EndpointStatus: new FormControl<string | null | undefined>(undefined),
			OptOut: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEventStreamPostBody {

		/**
		 * Specifies the Amazon Resource Name (ARN) of an event stream to publish events to and the AWS Identity and Access Management (IAM) role to use when publishing those events.
		 * Required
		 */
		WriteEventStream: PutEventStreamPostBodyWriteEventStream;
	}
	export interface PutEventStreamPostBodyFormProperties {
	}
	export function CreatePutEventStreamPostBodyFormGroup() {
		return new FormGroup<PutEventStreamPostBodyFormProperties>({
		});

	}

	export interface PutEventStreamPostBodyWriteEventStream {
		DestinationStreamArn?: string;
		RoleArn?: string;
	}
	export interface PutEventStreamPostBodyWriteEventStreamFormProperties {
		DestinationStreamArn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutEventStreamPostBodyWriteEventStreamFormGroup() {
		return new FormGroup<PutEventStreamPostBodyWriteEventStreamFormProperties>({
			DestinationStreamArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGcmChannelPutBody {

		/**
		 * Specifies the status and settings of the GCM channel for an application. This channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
		 * Required
		 */
		GCMChannelRequest: UpdateGcmChannelPutBodyGCMChannelRequest;
	}
	export interface UpdateGcmChannelPutBodyFormProperties {
	}
	export function CreateUpdateGcmChannelPutBodyFormGroup() {
		return new FormGroup<UpdateGcmChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateGcmChannelPutBodyGCMChannelRequest {
		ApiKey?: string;
		DefaultAuthenticationMethod?: string;
		Enabled?: boolean | null;
		ServiceJson?: string;
	}
	export interface UpdateGcmChannelPutBodyGCMChannelRequestFormProperties {
		ApiKey: FormControl<string | null | undefined>,
		DefaultAuthenticationMethod: FormControl<string | null | undefined>,
		Enabled: FormControl<boolean | null | undefined>,
		ServiceJson: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGcmChannelPutBodyGCMChannelRequestFormGroup() {
		return new FormGroup<UpdateGcmChannelPutBodyGCMChannelRequestFormProperties>({
			ApiKey: new FormControl<string | null | undefined>(undefined),
			DefaultAuthenticationMethod: new FormControl<string | null | undefined>(undefined),
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			ServiceJson: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateJourneyPutBody {

		/**
		 * Specifies the configuration and other settings for a journey.
		 * Required
		 */
		WriteJourneyRequest: UpdateJourneyPutBodyWriteJourneyRequest;
	}
	export interface UpdateJourneyPutBodyFormProperties {
	}
	export function CreateUpdateJourneyPutBodyFormGroup() {
		return new FormGroup<UpdateJourneyPutBodyFormProperties>({
		});

	}

	export interface UpdateJourneyPutBodyWriteJourneyRequest {
		Activities?: MapOfActivity;
		CreationDate?: string;
		LastModifiedDate?: string;
		Limits?: JourneyLimits;
		LocalTime?: boolean | null;
		Name?: string;
		QuietTime?: QuietTime;
		RefreshFrequency?: string;
		Schedule?: JourneySchedule;
		StartActivity?: string;
		StartCondition?: StartCondition;
		State?: State;
		WaitForQuietTime?: boolean | null;
		RefreshOnSegmentUpdate?: boolean | null;
		JourneyChannelSettings?: JourneyChannelSettings;
		SendingSchedule?: boolean | null;
		OpenHours?: OpenHours;
		ClosedDays?: ClosedDays;
		TimezoneEstimationMethods?: Array<__TimezoneEstimationMethodsElement>;
	}
	export interface UpdateJourneyPutBodyWriteJourneyRequestFormProperties {
		CreationDate: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		LocalTime: FormControl<boolean | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RefreshFrequency: FormControl<string | null | undefined>,
		StartActivity: FormControl<string | null | undefined>,
		State: FormControl<State | null | undefined>,
		WaitForQuietTime: FormControl<boolean | null | undefined>,
		RefreshOnSegmentUpdate: FormControl<boolean | null | undefined>,
		SendingSchedule: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateJourneyPutBodyWriteJourneyRequestFormGroup() {
		return new FormGroup<UpdateJourneyPutBodyWriteJourneyRequestFormProperties>({
			CreationDate: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			LocalTime: new FormControl<boolean | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RefreshFrequency: new FormControl<string | null | undefined>(undefined),
			StartActivity: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<State | null | undefined>(undefined),
			WaitForQuietTime: new FormControl<boolean | null | undefined>(undefined),
			RefreshOnSegmentUpdate: new FormControl<boolean | null | undefined>(undefined),
			SendingSchedule: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateRecommenderConfigurationPutBody {

		/**
		 * Specifies Amazon Pinpoint configuration settings for retrieving and processing recommendation data from a recommender model.
		 * Required
		 */
		UpdateRecommenderConfiguration: UpdateRecommenderConfigurationPutBodyUpdateRecommenderConfiguration;
	}
	export interface UpdateRecommenderConfigurationPutBodyFormProperties {
	}
	export function CreateUpdateRecommenderConfigurationPutBodyFormGroup() {
		return new FormGroup<UpdateRecommenderConfigurationPutBodyFormProperties>({
		});

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
		RecommendationsPerMessage?: number | null;
	}
	export interface UpdateRecommenderConfigurationPutBodyUpdateRecommenderConfigurationFormProperties {
		Description: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RecommendationProviderIdType: FormControl<string | null | undefined>,
		RecommendationProviderRoleArn: FormControl<string | null | undefined>,
		RecommendationProviderUri: FormControl<string | null | undefined>,
		RecommendationTransformerUri: FormControl<string | null | undefined>,
		RecommendationsDisplayName: FormControl<string | null | undefined>,
		RecommendationsPerMessage: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRecommenderConfigurationPutBodyUpdateRecommenderConfigurationFormGroup() {
		return new FormGroup<UpdateRecommenderConfigurationPutBodyUpdateRecommenderConfigurationFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderIdType: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderRoleArn: new FormControl<string | null | undefined>(undefined),
			RecommendationProviderUri: new FormControl<string | null | undefined>(undefined),
			RecommendationTransformerUri: new FormControl<string | null | undefined>(undefined),
			RecommendationsDisplayName: new FormControl<string | null | undefined>(undefined),
			RecommendationsPerMessage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateSegmentPutBody {

		/**
		 * Specifies the configuration, dimension, and other settings for a segment. A WriteSegmentRequest object can include a Dimensions object or a SegmentGroups object, but not both.
		 * Required
		 */
		WriteSegmentRequest: UpdateSegmentPutBodyWriteSegmentRequest;
	}
	export interface UpdateSegmentPutBodyFormProperties {
	}
	export function CreateUpdateSegmentPutBodyFormGroup() {
		return new FormGroup<UpdateSegmentPutBodyFormProperties>({
		});

	}

	export interface UpdateSegmentPutBodyWriteSegmentRequest {
		Dimensions?: SegmentDimensions;
		Name?: string;
		SegmentGroups?: SegmentGroupList;
		tags?: MapOf__string;
	}
	export interface UpdateSegmentPutBodyWriteSegmentRequestFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSegmentPutBodyWriteSegmentRequestFormGroup() {
		return new FormGroup<UpdateSegmentPutBodyWriteSegmentRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSmsChannelPutBody {

		/**
		 * Specifies the status and settings of the SMS channel for an application.
		 * Required
		 */
		SMSChannelRequest: UpdateSmsChannelPutBodySMSChannelRequest;
	}
	export interface UpdateSmsChannelPutBodyFormProperties {
	}
	export function CreateUpdateSmsChannelPutBodyFormGroup() {
		return new FormGroup<UpdateSmsChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateSmsChannelPutBodySMSChannelRequest {
		Enabled?: boolean | null;
		SenderId?: string;
		ShortCode?: string;
	}
	export interface UpdateSmsChannelPutBodySMSChannelRequestFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
		SenderId: FormControl<string | null | undefined>,
		ShortCode: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSmsChannelPutBodySMSChannelRequestFormGroup() {
		return new FormGroup<UpdateSmsChannelPutBodySMSChannelRequestFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
			SenderId: new FormControl<string | null | undefined>(undefined),
			ShortCode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateVoiceChannelPutBody {

		/**
		 * Specifies the status and settings of the voice channel for an application.
		 * Required
		 */
		VoiceChannelRequest: UpdateVoiceChannelPutBodyVoiceChannelRequest;
	}
	export interface UpdateVoiceChannelPutBodyFormProperties {
	}
	export function CreateUpdateVoiceChannelPutBodyFormGroup() {
		return new FormGroup<UpdateVoiceChannelPutBodyFormProperties>({
		});

	}

	export interface UpdateVoiceChannelPutBodyVoiceChannelRequest {
		Enabled?: boolean | null;
	}
	export interface UpdateVoiceChannelPutBodyVoiceChannelRequestFormProperties {
		Enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateVoiceChannelPutBodyVoiceChannelRequestFormGroup() {
		return new FormGroup<UpdateVoiceChannelPutBodyVoiceChannelRequestFormProperties>({
			Enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationSettingsPutBody {

		/**
		 * Specifies the default settings for an application.
		 * Required
		 */
		WriteApplicationSettingsRequest: UpdateApplicationSettingsPutBodyWriteApplicationSettingsRequest;
	}
	export interface UpdateApplicationSettingsPutBodyFormProperties {
	}
	export function CreateUpdateApplicationSettingsPutBodyFormGroup() {
		return new FormGroup<UpdateApplicationSettingsPutBodyFormProperties>({
		});

	}

	export interface UpdateApplicationSettingsPutBodyWriteApplicationSettingsRequest {
		CampaignHook?: CampaignHook;
		CloudWatchMetricsEnabled?: boolean | null;
		EventTaggingEnabled?: boolean | null;
		Limits?: CampaignLimits;
		QuietTime?: QuietTime;
		JourneyLimits?: ApplicationSettingsJourneyLimits;
	}
	export interface UpdateApplicationSettingsPutBodyWriteApplicationSettingsRequestFormProperties {
		CloudWatchMetricsEnabled: FormControl<boolean | null | undefined>,
		EventTaggingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateApplicationSettingsPutBodyWriteApplicationSettingsRequestFormGroup() {
		return new FormGroup<UpdateApplicationSettingsPutBodyWriteApplicationSettingsRequestFormProperties>({
			CloudWatchMetricsEnabled: new FormControl<boolean | null | undefined>(undefined),
			EventTaggingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
		 * Required
		 */
		TagsModel: TagResourcePostBodyTagsModel;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface TagResourcePostBodyTagsModel {
		tags?: MapOf__string;
	}
	export interface TagResourcePostBodyTagsModelFormProperties {
	}
	export function CreateTagResourcePostBodyTagsModelFormGroup() {
		return new FormGroup<TagResourcePostBodyTagsModelFormProperties>({
		});

	}

	export interface PhoneNumberValidatePostBody {

		/**
		 * Specifies a phone number to validate and retrieve information about.
		 * Required
		 */
		NumberValidateRequest: PhoneNumberValidatePostBodyNumberValidateRequest;
	}
	export interface PhoneNumberValidatePostBodyFormProperties {
	}
	export function CreatePhoneNumberValidatePostBodyFormGroup() {
		return new FormGroup<PhoneNumberValidatePostBodyFormProperties>({
		});

	}

	export interface PhoneNumberValidatePostBodyNumberValidateRequest {
		IsoCountryCode?: string;
		PhoneNumber?: string;
	}
	export interface PhoneNumberValidatePostBodyNumberValidateRequestFormProperties {
		IsoCountryCode: FormControl<string | null | undefined>,
		PhoneNumber: FormControl<string | null | undefined>,
	}
	export function CreatePhoneNumberValidatePostBodyNumberValidateRequestFormGroup() {
		return new FormGroup<PhoneNumberValidatePostBodyNumberValidateRequestFormProperties>({
			IsoCountryCode: new FormControl<string | null | undefined>(undefined),
			PhoneNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEventsPostBody {

		/**
		 * Specifies a batch of events to process.
		 * Required
		 */
		EventsRequest: PutEventsPostBodyEventsRequest;
	}
	export interface PutEventsPostBodyFormProperties {
	}
	export function CreatePutEventsPostBodyFormGroup() {
		return new FormGroup<PutEventsPostBodyFormProperties>({
		});

	}

	export interface PutEventsPostBodyEventsRequest {
		BatchItem?: MapOfEventsBatch;
	}
	export interface PutEventsPostBodyEventsRequestFormProperties {
	}
	export function CreatePutEventsPostBodyEventsRequestFormGroup() {
		return new FormGroup<PutEventsPostBodyEventsRequestFormProperties>({
		});

	}

	export interface RemoveAttributesPutBody {

		/**
		 * Specifies one or more attributes to remove from all the endpoints that are associated with an application.
		 * Required
		 */
		UpdateAttributesRequest: RemoveAttributesPutBodyUpdateAttributesRequest;
	}
	export interface RemoveAttributesPutBodyFormProperties {
	}
	export function CreateRemoveAttributesPutBodyFormGroup() {
		return new FormGroup<RemoveAttributesPutBodyFormProperties>({
		});

	}

	export interface RemoveAttributesPutBodyUpdateAttributesRequest {
		Blacklist?: Array<string>;
	}
	export interface RemoveAttributesPutBodyUpdateAttributesRequestFormProperties {
	}
	export function CreateRemoveAttributesPutBodyUpdateAttributesRequestFormGroup() {
		return new FormGroup<RemoveAttributesPutBodyUpdateAttributesRequestFormProperties>({
		});

	}

	export interface SendMessagesPostBody {

		/**
		 * Specifies the configuration and other settings for a message.
		 * Required
		 */
		MessageRequest: SendMessagesPostBodyMessageRequest;
	}
	export interface SendMessagesPostBodyFormProperties {
	}
	export function CreateSendMessagesPostBodyFormGroup() {
		return new FormGroup<SendMessagesPostBodyFormProperties>({
		});

	}

	export interface SendMessagesPostBodyMessageRequest {
		Addresses?: MapOfAddressConfiguration;
		Context?: MapOf__string;
		Endpoints?: MapOfEndpointSendConfiguration;
		MessageConfiguration?: DirectMessageConfiguration;
		TemplateConfiguration?: TemplateConfiguration;
		TraceId?: string;
	}
	export interface SendMessagesPostBodyMessageRequestFormProperties {
		TraceId: FormControl<string | null | undefined>,
	}
	export function CreateSendMessagesPostBodyMessageRequestFormGroup() {
		return new FormGroup<SendMessagesPostBodyMessageRequestFormProperties>({
			TraceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SendOTPMessagePostBody {

		/**
		 * Send OTP message request parameters.
		 * Required
		 */
		SendOTPMessageRequestParameters: SendOTPMessagePostBodySendOTPMessageRequestParameters;
	}
	export interface SendOTPMessagePostBodyFormProperties {
	}
	export function CreateSendOTPMessagePostBodyFormGroup() {
		return new FormGroup<SendOTPMessagePostBodyFormProperties>({
		});

	}

	export interface SendOTPMessagePostBodySendOTPMessageRequestParameters {
		AllowedAttempts?: number | null;
		BrandName?: string;
		Channel?: string;
		CodeLength?: number | null;
		DestinationIdentity?: string;
		EntityId?: string;
		Language?: string;
		OriginationIdentity?: string;
		ReferenceId?: string;
		TemplateId?: string;
		ValidityPeriod?: number | null;
	}
	export interface SendOTPMessagePostBodySendOTPMessageRequestParametersFormProperties {
		AllowedAttempts: FormControl<number | null | undefined>,
		BrandName: FormControl<string | null | undefined>,
		Channel: FormControl<string | null | undefined>,
		CodeLength: FormControl<number | null | undefined>,
		DestinationIdentity: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		Language: FormControl<string | null | undefined>,
		OriginationIdentity: FormControl<string | null | undefined>,
		ReferenceId: FormControl<string | null | undefined>,
		TemplateId: FormControl<string | null | undefined>,
		ValidityPeriod: FormControl<number | null | undefined>,
	}
	export function CreateSendOTPMessagePostBodySendOTPMessageRequestParametersFormGroup() {
		return new FormGroup<SendOTPMessagePostBodySendOTPMessageRequestParametersFormProperties>({
			AllowedAttempts: new FormControl<number | null | undefined>(undefined),
			BrandName: new FormControl<string | null | undefined>(undefined),
			Channel: new FormControl<string | null | undefined>(undefined),
			CodeLength: new FormControl<number | null | undefined>(undefined),
			DestinationIdentity: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			Language: new FormControl<string | null | undefined>(undefined),
			OriginationIdentity: new FormControl<string | null | undefined>(undefined),
			ReferenceId: new FormControl<string | null | undefined>(undefined),
			TemplateId: new FormControl<string | null | undefined>(undefined),
			ValidityPeriod: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SendUsersMessagesPostBody {

		/**
		 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
		 * Required
		 */
		SendUsersMessageRequest: SendUsersMessagesPostBodySendUsersMessageRequest;
	}
	export interface SendUsersMessagesPostBodyFormProperties {
	}
	export function CreateSendUsersMessagesPostBodyFormGroup() {
		return new FormGroup<SendUsersMessagesPostBodyFormProperties>({
		});

	}

	export interface SendUsersMessagesPostBodySendUsersMessageRequest {
		Context?: MapOf__string;
		MessageConfiguration?: DirectMessageConfiguration;
		TemplateConfiguration?: TemplateConfiguration;
		TraceId?: string;
		Users?: MapOfEndpointSendConfiguration;
	}
	export interface SendUsersMessagesPostBodySendUsersMessageRequestFormProperties {
		TraceId: FormControl<string | null | undefined>,
	}
	export function CreateSendUsersMessagesPostBodySendUsersMessageRequestFormGroup() {
		return new FormGroup<SendUsersMessagesPostBodySendUsersMessageRequestFormProperties>({
			TraceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEndpointsBatchPutBody {

		/**
		 * Specifies a batch of endpoints to create or update and the settings and attributes to set or change for each endpoint.
		 * Required
		 */
		EndpointBatchRequest: UpdateEndpointsBatchPutBodyEndpointBatchRequest;
	}
	export interface UpdateEndpointsBatchPutBodyFormProperties {
	}
	export function CreateUpdateEndpointsBatchPutBodyFormGroup() {
		return new FormGroup<UpdateEndpointsBatchPutBodyFormProperties>({
		});

	}

	export interface UpdateEndpointsBatchPutBodyEndpointBatchRequest {
		Item?: Array<EndpointBatchItem>;
	}
	export interface UpdateEndpointsBatchPutBodyEndpointBatchRequestFormProperties {
	}
	export function CreateUpdateEndpointsBatchPutBodyEndpointBatchRequestFormGroup() {
		return new FormGroup<UpdateEndpointsBatchPutBodyEndpointBatchRequestFormProperties>({
		});

	}

	export interface UpdateJourneyStatePutBody {

		/**
		 * Changes the status of a journey.
		 * Required
		 */
		JourneyStateRequest: UpdateJourneyStatePutBodyJourneyStateRequest;
	}
	export interface UpdateJourneyStatePutBodyFormProperties {
	}
	export function CreateUpdateJourneyStatePutBodyFormGroup() {
		return new FormGroup<UpdateJourneyStatePutBodyFormProperties>({
		});

	}

	export interface UpdateJourneyStatePutBodyJourneyStateRequest {
		State?: State;
	}
	export interface UpdateJourneyStatePutBodyJourneyStateRequestFormProperties {
		State: FormControl<State | null | undefined>,
	}
	export function CreateUpdateJourneyStatePutBodyJourneyStateRequestFormGroup() {
		return new FormGroup<UpdateJourneyStatePutBodyJourneyStateRequestFormProperties>({
			State: new FormControl<State | null | undefined>(undefined),
		});

	}

	export interface UpdateTemplateActiveVersionPutBody {

		/**
		 * Specifies which version of a message template to use as the active version of the template.
		 * Required
		 */
		TemplateActiveVersionRequest: UpdateTemplateActiveVersionPutBodyTemplateActiveVersionRequest;
	}
	export interface UpdateTemplateActiveVersionPutBodyFormProperties {
	}
	export function CreateUpdateTemplateActiveVersionPutBodyFormGroup() {
		return new FormGroup<UpdateTemplateActiveVersionPutBodyFormProperties>({
		});

	}

	export interface UpdateTemplateActiveVersionPutBodyTemplateActiveVersionRequest {
		Version?: string;
	}
	export interface UpdateTemplateActiveVersionPutBodyTemplateActiveVersionRequestFormProperties {
		Version: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTemplateActiveVersionPutBodyTemplateActiveVersionRequestFormGroup() {
		return new FormGroup<UpdateTemplateActiveVersionPutBodyTemplateActiveVersionRequestFormProperties>({
			Version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VerifyOTPMessagePostBody {

		/**
		 * Verify OTP message request.
		 * Required
		 */
		VerifyOTPMessageRequestParameters: VerifyOTPMessagePostBodyVerifyOTPMessageRequestParameters;
	}
	export interface VerifyOTPMessagePostBodyFormProperties {
	}
	export function CreateVerifyOTPMessagePostBodyFormGroup() {
		return new FormGroup<VerifyOTPMessagePostBodyFormProperties>({
		});

	}

	export interface VerifyOTPMessagePostBodyVerifyOTPMessageRequestParameters {
		DestinationIdentity?: string;
		Otp?: string;
		ReferenceId?: string;
	}
	export interface VerifyOTPMessagePostBodyVerifyOTPMessageRequestParametersFormProperties {
		DestinationIdentity: FormControl<string | null | undefined>,
		Otp: FormControl<string | null | undefined>,
		ReferenceId: FormControl<string | null | undefined>,
	}
	export function CreateVerifyOTPMessagePostBodyVerifyOTPMessageRequestParametersFormGroup() {
		return new FormGroup<VerifyOTPMessagePostBodyVerifyOTPMessageRequestParametersFormProperties>({
			DestinationIdentity: new FormControl<string | null | undefined>(undefined),
			Otp: new FormControl<string | null | undefined>(undefined),
			ReferenceId: new FormControl<string | null | undefined>(undefined),
		});

	}

}

