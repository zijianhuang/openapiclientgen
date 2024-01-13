import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Bot resource definition */
	export interface Bot {

		/** The parameters to provide for the Bot. */
		properties?: BotProperties;
	}

	/** Bot resource definition */
	export interface BotFormProperties {
	}
	export function CreateBotFormGroup() {
		return new FormGroup<BotFormProperties>({
		});

	}


	/** Bot channel resource definition */
	export interface BotChannel {

		/** Channel definition */
		properties?: Channel;
	}

	/** Bot channel resource definition */
	export interface BotChannelFormProperties {
	}
	export function CreateBotChannelFormGroup() {
		return new FormGroup<BotChannelFormProperties>({
		});

	}


	/** Channel definition */
	export interface Channel {

		/**
		 * The channel name
		 * Required
		 */
		channelName: string;
	}

	/** Channel definition */
	export interface ChannelFormProperties {

		/**
		 * The channel name
		 * Required
		 */
		channelName: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			channelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The parameters to provide for the Bot. */
	export interface BotProperties {

		/** Collection of channels for which the bot is configured */
		configuredChannels?: Array<string>;

		/** The description of the bot */
		description?: string | null;

		/** The Application Insights key */
		developerAppInsightKey?: string | null;

		/** The Application Insights Api Key */
		developerAppInsightsApiKey?: string | null;

		/** The Application Insights App Id */
		developerAppInsightsApplicationId?: string | null;

		/**
		 * The Name of the bot
		 * Required
		 */
		displayName: string;

		/** Collection of channels for which the bot is enabled */
		enabledChannels?: Array<string>;

		/**
		 * The bot's endpoint
		 * Required
		 */
		endpoint: string;

		/** The bot's endpoint version */
		endpointVersion?: string | null;

		/** The Icon Url of the bot */
		iconUrl?: string | null;

		/** Collection of LUIS App Ids */
		luisAppIds?: Array<string>;

		/** The LUIS Key */
		luisKey?: string | null;

		/**
		 * Microsoft App Id for the bot
		 * Required
		 */
		msaAppId: string;
	}

	/** The parameters to provide for the Bot. */
	export interface BotPropertiesFormProperties {

		/** The description of the bot */
		description: FormControl<string | null | undefined>,

		/** The Application Insights key */
		developerAppInsightKey: FormControl<string | null | undefined>,

		/** The Application Insights Api Key */
		developerAppInsightsApiKey: FormControl<string | null | undefined>,

		/** The Application Insights App Id */
		developerAppInsightsApplicationId: FormControl<string | null | undefined>,

		/**
		 * The Name of the bot
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/**
		 * The bot's endpoint
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/** The bot's endpoint version */
		endpointVersion: FormControl<string | null | undefined>,

		/** The Icon Url of the bot */
		iconUrl: FormControl<string | null | undefined>,

		/** The LUIS Key */
		luisKey: FormControl<string | null | undefined>,

		/**
		 * Microsoft App Id for the bot
		 * Required
		 */
		msaAppId: FormControl<string | null | undefined>,
	}
	export function CreateBotPropertiesFormGroup() {
		return new FormGroup<BotPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			developerAppInsightKey: new FormControl<string | null | undefined>(undefined),
			developerAppInsightsApiKey: new FormControl<string | null | undefined>(undefined),
			developerAppInsightsApplicationId: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpointVersion: new FormControl<string | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			luisKey: new FormControl<string | null | undefined>(undefined),
			msaAppId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The list of  bot service operation response. */
	export interface BotResponseList {

		/** The link used to get the next page of bot service resources. */
		nextLink?: string | null;

		/** Gets the list of bot service results and their properties. */
		value?: Array<Bot>;
	}

	/** The list of  bot service operation response. */
	export interface BotResponseListFormProperties {

		/** The link used to get the next page of bot service resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateBotResponseListFormGroup() {
		return new FormGroup<BotResponseListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of bot service channel operation response. */
	export interface ChannelResponseList {

		/** The link used to get the next page of bot service channel resources. */
		nextLink?: string | null;

		/** Gets the list of bot service channel results and their properties. */
		value?: Array<BotChannel>;
	}

	/** The list of bot service channel operation response. */
	export interface ChannelResponseListFormProperties {

		/** The link used to get the next page of bot service channel resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateChannelResponseListFormGroup() {
		return new FormGroup<ChannelResponseListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request body for a request to Bot Service Management to check availability of a bot name. */
	export interface CheckNameAvailabilityRequestBody {

		/** the name of the bot for which availability needs to be checked. */
		name?: string | null;

		/** the type of the bot for which availability needs to be checked */
		type?: string | null;
	}

	/** The request body for a request to Bot Service Management to check availability of a bot name. */
	export interface CheckNameAvailabilityRequestBodyFormProperties {

		/** the name of the bot for which availability needs to be checked. */
		name: FormControl<string | null | undefined>,

		/** the type of the bot for which availability needs to be checked */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCheckNameAvailabilityRequestBodyFormGroup() {
		return new FormGroup<CheckNameAvailabilityRequestBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response body returned for a request to Bot Service Management to check availability of a bot name. */
	export interface CheckNameAvailabilityResponseBody {

		/** additional message from the bot management api showing why a bot name is not available */
		message?: string | null;

		/** indicates if the bot name is valid. */
		valid?: boolean | null;
	}

	/** The response body returned for a request to Bot Service Management to check availability of a bot name. */
	export interface CheckNameAvailabilityResponseBodyFormProperties {

		/** additional message from the bot management api showing why a bot name is not available */
		message: FormControl<string | null | undefined>,

		/** indicates if the bot name is valid. */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckNameAvailabilityResponseBodyFormGroup() {
		return new FormGroup<CheckNameAvailabilityResponseBodyFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The display name of a connection Item Setting registered with the Bot */
	export interface ConnectionItemName {

		/** Connection Item name that has been added in the API */
		name?: string | null;
	}

	/** The display name of a connection Item Setting registered with the Bot */
	export interface ConnectionItemNameFormProperties {

		/** Connection Item name that has been added in the API */
		name: FormControl<string | null | undefined>,
	}
	export function CreateConnectionItemNameFormGroup() {
		return new FormGroup<ConnectionItemNameFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Bot channel resource definition */
	export interface ConnectionSetting {

		/** Properties for a Connection Setting Item */
		properties?: ConnectionSettingProperties;
	}

	/** Bot channel resource definition */
	export interface ConnectionSettingFormProperties {
	}
	export function CreateConnectionSettingFormGroup() {
		return new FormGroup<ConnectionSettingFormProperties>({
		});

	}


	/** Extra Parameter in a Connection Setting Properties to indicate service provider specific properties */
	export interface ConnectionSettingParameter {

		/** Key for the Connection Setting Parameter. */
		key?: string | null;

		/** Value associated with the Connection Setting Parameter. */
		value?: string | null;
	}

	/** Extra Parameter in a Connection Setting Properties to indicate service provider specific properties */
	export interface ConnectionSettingParameterFormProperties {

		/** Key for the Connection Setting Parameter. */
		key: FormControl<string | null | undefined>,

		/** Value associated with the Connection Setting Parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateConnectionSettingParameterFormGroup() {
		return new FormGroup<ConnectionSettingParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for a Connection Setting Item */
	export interface ConnectionSettingProperties {

		/** Client Id associated with the Connection Setting. */
		clientId?: string | null;

		/** Client Secret associated with the Connection Setting */
		clientSecret?: string | null;

		/** Service Provider Parameters associated with the Connection Setting */
		parameters?: Array<ConnectionSettingParameter>;

		/** Scopes associated with the Connection Setting */
		scopes?: string | null;

		/** Service Provider Display Name associated with the Connection Setting */
		serviceProviderDisplayName?: string | null;

		/** Service Provider Id associated with the Connection Setting */
		serviceProviderId?: string | null;

		/** Setting Id set by the service for the Connection Setting. */
		settingId?: string | null;
	}

	/** Properties for a Connection Setting Item */
	export interface ConnectionSettingPropertiesFormProperties {

		/** Client Id associated with the Connection Setting. */
		clientId: FormControl<string | null | undefined>,

		/** Client Secret associated with the Connection Setting */
		clientSecret: FormControl<string | null | undefined>,

		/** Scopes associated with the Connection Setting */
		scopes: FormControl<string | null | undefined>,

		/** Service Provider Display Name associated with the Connection Setting */
		serviceProviderDisplayName: FormControl<string | null | undefined>,

		/** Service Provider Id associated with the Connection Setting */
		serviceProviderId: FormControl<string | null | undefined>,

		/** Setting Id set by the service for the Connection Setting. */
		settingId: FormControl<string | null | undefined>,
	}
	export function CreateConnectionSettingPropertiesFormGroup() {
		return new FormGroup<ConnectionSettingPropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			scopes: new FormControl<string | null | undefined>(undefined),
			serviceProviderDisplayName: new FormControl<string | null | undefined>(undefined),
			serviceProviderId: new FormControl<string | null | undefined>(undefined),
			settingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of bot service connection settings response. */
	export interface ConnectionSettingResponseList {

		/** The link used to get the next page of bot service connection setting resources. */
		nextLink?: string | null;

		/** Gets the list of bot service connection settings and their properties. */
		value?: Array<ConnectionSetting>;
	}

	/** The list of bot service connection settings response. */
	export interface ConnectionSettingResponseListFormProperties {

		/** The link used to get the next page of bot service connection setting resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateConnectionSettingResponseListFormGroup() {
		return new FormGroup<ConnectionSettingResponseListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Direct Line channel definition */
	export interface DirectLineChannel {

		/** The parameters to provide for the Direct Line channel. */
		properties?: DirectLineChannelProperties;
	}

	/** Direct Line channel definition */
	export interface DirectLineChannelFormProperties {
	}
	export function CreateDirectLineChannelFormGroup() {
		return new FormGroup<DirectLineChannelFormProperties>({
		});

	}


	/** The parameters to provide for the Direct Line channel. */
	export interface DirectLineChannelProperties {

		/** The list of Direct Line sites */
		sites?: Array<DirectLineSite>;
	}

	/** The parameters to provide for the Direct Line channel. */
	export interface DirectLineChannelPropertiesFormProperties {
	}
	export function CreateDirectLineChannelPropertiesFormGroup() {
		return new FormGroup<DirectLineChannelPropertiesFormProperties>({
		});

	}


	/** A site for the Direct Line channel */
	export interface DirectLineSite {

		/**
		 * Whether this site is enabled for DirectLine channel.
		 * Required
		 */
		isEnabled: boolean;

		/** Whether this site is enabled for authentication with Bot Framework. */
		isSecureSiteEnabled?: boolean | null;

		/**
		 * Whether this site is enabled for Bot Framework V1 protocol.
		 * Required
		 */
		isV1Enabled: boolean;

		/**
		 * Whether this site is enabled for Bot Framework V1 protocol.
		 * Required
		 */
		isV3Enabled: boolean;

		/** Primary key. Value only returned through POST to the action Channel List API, otherwise empty. */
		key?: string | null;

		/** Secondary key. Value only returned through POST to the action Channel List API, otherwise empty. */
		key2?: string | null;

		/** Site Id */
		siteId?: string | null;

		/**
		 * Site name
		 * Required
		 */
		siteName: string;

		/** List of Trusted Origin URLs for this site. This field is applicable only if isSecureSiteEnabled is True. */
		trustedOrigins?: Array<string>;
	}

	/** A site for the Direct Line channel */
	export interface DirectLineSiteFormProperties {

		/**
		 * Whether this site is enabled for DirectLine channel.
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Whether this site is enabled for authentication with Bot Framework. */
		isSecureSiteEnabled: FormControl<boolean | null | undefined>,

		/**
		 * Whether this site is enabled for Bot Framework V1 protocol.
		 * Required
		 */
		isV1Enabled: FormControl<boolean | null | undefined>,

		/**
		 * Whether this site is enabled for Bot Framework V1 protocol.
		 * Required
		 */
		isV3Enabled: FormControl<boolean | null | undefined>,

		/** Primary key. Value only returned through POST to the action Channel List API, otherwise empty. */
		key: FormControl<string | null | undefined>,

		/** Secondary key. Value only returned through POST to the action Channel List API, otherwise empty. */
		key2: FormControl<string | null | undefined>,

		/** Site Id */
		siteId: FormControl<string | null | undefined>,

		/**
		 * Site name
		 * Required
		 */
		siteName: FormControl<string | null | undefined>,
	}
	export function CreateDirectLineSiteFormGroup() {
		return new FormGroup<DirectLineSiteFormProperties>({
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isSecureSiteEnabled: new FormControl<boolean | null | undefined>(undefined),
			isV1Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isV3Enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined),
			key2: new FormControl<string | null | undefined>(undefined),
			siteId: new FormControl<string | null | undefined>(undefined),
			siteName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Email channel definition */
	export interface EmailChannel {

		/** The parameters to provide for the Email channel. */
		properties?: EmailChannelProperties;
	}

	/** Email channel definition */
	export interface EmailChannelFormProperties {
	}
	export function CreateEmailChannelFormGroup() {
		return new FormGroup<EmailChannelFormProperties>({
		});

	}


	/** The parameters to provide for the Email channel. */
	export interface EmailChannelProperties {

		/**
		 * The email address
		 * Required
		 */
		emailAddress: string;

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: boolean;

		/**
		 * The password for the email address. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		password: string;
	}

	/** The parameters to provide for the Email channel. */
	export interface EmailChannelPropertiesFormProperties {

		/**
		 * The email address
		 * Required
		 */
		emailAddress: FormControl<string | null | undefined>,

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/**
		 * The password for the email address. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		password: FormControl<string | null | undefined>,
	}
	export function CreateEmailChannelPropertiesFormGroup() {
		return new FormGroup<EmailChannelPropertiesFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Enterprise Channel resource definition */
	export interface EnterpriseChannel {

		/** The parameters to provide for the Enterprise Channel. */
		properties?: EnterpriseChannelProperties;
	}

	/** Enterprise Channel resource definition */
	export interface EnterpriseChannelFormProperties {
	}
	export function CreateEnterpriseChannelFormGroup() {
		return new FormGroup<EnterpriseChannelFormProperties>({
		});

	}


	/** A request to Bot Service Management to check availability of an Enterprise Channel name. */
	export interface EnterpriseChannelCheckNameAvailabilityRequest {

		/** The name of the Enterprise Channel for which availability needs to be checked. */
		name?: string | null;
	}

	/** A request to Bot Service Management to check availability of an Enterprise Channel name. */
	export interface EnterpriseChannelCheckNameAvailabilityRequestFormProperties {

		/** The name of the Enterprise Channel for which availability needs to be checked. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseChannelCheckNameAvailabilityRequestFormGroup() {
		return new FormGroup<EnterpriseChannelCheckNameAvailabilityRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to Bot Service Management to check availability of an Enterprise Channel name. */
	export interface EnterpriseChannelCheckNameAvailabilityResponse {

		/** Additional information about why a bot name is not available. */
		message?: string | null;

		/** Indicates if the Enterprise Channel name is valid. */
		valid?: boolean | null;
	}

	/** A request to Bot Service Management to check availability of an Enterprise Channel name. */
	export interface EnterpriseChannelCheckNameAvailabilityResponseFormProperties {

		/** Additional information about why a bot name is not available. */
		message: FormControl<string | null | undefined>,

		/** Indicates if the Enterprise Channel name is valid. */
		valid: FormControl<boolean | null | undefined>,
	}
	export function CreateEnterpriseChannelCheckNameAvailabilityResponseFormGroup() {
		return new FormGroup<EnterpriseChannelCheckNameAvailabilityResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			valid: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The properties specific to an Enterprise Channel Node. */
	export interface EnterpriseChannelNode {

		/**
		 * The location of the Enterprise Channel Node.
		 * Required
		 */
		azureLocation: string;

		/**
		 * The sku of the Enterprise Channel Node.
		 * Required
		 */
		azureSku: string;

		/** Id of Enterprise Channel Node. This is generated by the Bot Framework. */
		id?: string | null;

		/**
		 * The name of the Enterprise Channel Node.
		 * Required
		 */
		name: string;

		/** The current state of the Enterprise Channel Node. */
		state?: EnterpriseChannelNodeState | null;
	}

	/** The properties specific to an Enterprise Channel Node. */
	export interface EnterpriseChannelNodeFormProperties {

		/**
		 * The location of the Enterprise Channel Node.
		 * Required
		 */
		azureLocation: FormControl<string | null | undefined>,

		/**
		 * The sku of the Enterprise Channel Node.
		 * Required
		 */
		azureSku: FormControl<string | null | undefined>,

		/** Id of Enterprise Channel Node. This is generated by the Bot Framework. */
		id: FormControl<string | null | undefined>,

		/**
		 * The name of the Enterprise Channel Node.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The current state of the Enterprise Channel Node. */
		state: FormControl<EnterpriseChannelNodeState | null | undefined>,
	}
	export function CreateEnterpriseChannelNodeFormGroup() {
		return new FormGroup<EnterpriseChannelNodeFormProperties>({
			azureLocation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			azureSku: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<EnterpriseChannelNodeState | null | undefined>(undefined),
		});

	}

	export enum EnterpriseChannelNodeState { Creating = 0, CreateFailed = 1, Started = 2, Starting = 3, StartFailed = 4, Stopped = 5, Stopping = 6, StopFailed = 7, Deleting = 8, DeleteFailed = 9 }


	/** The parameters to provide for the Enterprise Channel. */
	export interface EnterpriseChannelProperties {

		/**
		 * The nodes associated with the Enterprise Channel.
		 * Required
		 */
		nodes: Array<EnterpriseChannelNode>;

		/** The current state of the Enterprise Channel. */
		state?: EnterpriseChannelNodeState | null;
	}

	/** The parameters to provide for the Enterprise Channel. */
	export interface EnterpriseChannelPropertiesFormProperties {

		/** The current state of the Enterprise Channel. */
		state: FormControl<EnterpriseChannelNodeState | null | undefined>,
	}
	export function CreateEnterpriseChannelPropertiesFormGroup() {
		return new FormGroup<EnterpriseChannelPropertiesFormProperties>({
			state: new FormControl<EnterpriseChannelNodeState | null | undefined>(undefined),
		});

	}


	/** The list of  bot service operation response. */
	export interface EnterpriseChannelResponseList {

		/** The link used to get the next page of bot service resources. */
		nextLink?: string | null;

		/** The list of Enterprise Channels and their properties. */
		value?: Array<EnterpriseChannel>;
	}

	/** The list of  bot service operation response. */
	export interface EnterpriseChannelResponseListFormProperties {

		/** The link used to get the next page of bot service resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseChannelResponseListFormGroup() {
		return new FormGroup<EnterpriseChannelResponseListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Bot Service error object. */
	export interface Error {

		/** Bot Service error body. */
		error?: ErrorBody;
	}

	/** Bot Service error object. */
	export interface ErrorFormProperties {
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
		});

	}


	/** Bot Service error body. */
	export interface ErrorBody {

		/**
		 * error code
		 * Required
		 */
		code: string;

		/**
		 * error message
		 * Required
		 */
		message: string;
	}

	/** Bot Service error body. */
	export interface ErrorBodyFormProperties {

		/**
		 * error code
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * error message
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorBodyFormGroup() {
		return new FormGroup<ErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Facebook channel definition */
	export interface FacebookChannel {

		/** The parameters to provide for the Facebook channel. */
		properties?: FacebookChannelProperties;
	}

	/** Facebook channel definition */
	export interface FacebookChannelFormProperties {
	}
	export function CreateFacebookChannelFormGroup() {
		return new FormGroup<FacebookChannelFormProperties>({
		});

	}


	/** The parameters to provide for the Facebook channel. */
	export interface FacebookChannelProperties {

		/**
		 * Facebook application id
		 * Required
		 */
		appId: string;

		/**
		 * Facebook application secret. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		appSecret: string;

		/** Callback Url */
		callbackUrl?: string | null;

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: boolean;

		/** The list of Facebook pages */
		pages?: Array<FacebookPage>;

		/** Verify token. Value only returned through POST to the action Channel List API, otherwise empty. */
		verifyToken?: string | null;
	}

	/** The parameters to provide for the Facebook channel. */
	export interface FacebookChannelPropertiesFormProperties {

		/**
		 * Facebook application id
		 * Required
		 */
		appId: FormControl<string | null | undefined>,

		/**
		 * Facebook application secret. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		appSecret: FormControl<string | null | undefined>,

		/** Callback Url */
		callbackUrl: FormControl<string | null | undefined>,

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Verify token. Value only returned through POST to the action Channel List API, otherwise empty. */
		verifyToken: FormControl<string | null | undefined>,
	}
	export function CreateFacebookChannelPropertiesFormGroup() {
		return new FormGroup<FacebookChannelPropertiesFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			callbackUrl: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			verifyToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Facebook page for Facebook channel registration */
	export interface FacebookPage {

		/**
		 * Facebook application access token. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		accessToken: string;

		/**
		 * Page id
		 * Required
		 */
		id: string;
	}

	/** A Facebook page for Facebook channel registration */
	export interface FacebookPageFormProperties {

		/**
		 * Facebook application access token. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		accessToken: FormControl<string | null | undefined>,

		/**
		 * Page id
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateFacebookPageFormGroup() {
		return new FormGroup<FacebookPageFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Kik channel definition */
	export interface KikChannel {

		/** The parameters to provide for the Kik channel. */
		properties?: KikChannelProperties;
	}

	/** Kik channel definition */
	export interface KikChannelFormProperties {
	}
	export function CreateKikChannelFormGroup() {
		return new FormGroup<KikChannelFormProperties>({
		});

	}


	/** The parameters to provide for the Kik channel. */
	export interface KikChannelProperties {

		/**
		 * Kik API key. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		apiKey: string;

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: boolean;

		/** Whether this channel is validated for the bot */
		isValidated?: boolean | null;

		/**
		 * The Kik user name
		 * Required
		 */
		userName: string;
	}

	/** The parameters to provide for the Kik channel. */
	export interface KikChannelPropertiesFormProperties {

		/**
		 * Kik API key. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		apiKey: FormControl<string | null | undefined>,

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Whether this channel is validated for the bot */
		isValidated: FormControl<boolean | null | undefined>,

		/**
		 * The Kik user name
		 * Required
		 */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateKikChannelPropertiesFormGroup() {
		return new FormGroup<KikChannelPropertiesFormProperties>({
			apiKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isValidated: new FormControl<boolean | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Indicates the type of bot service */
	export enum Kind { sdk = 0, designer = 1, bot = 2, function = 3 }


	/** Microsoft Teams channel definition */
	export interface MsTeamsChannel {

		/** The parameters to provide for the Microsoft Teams channel. */
		properties?: MsTeamsChannelProperties;
	}

	/** Microsoft Teams channel definition */
	export interface MsTeamsChannelFormProperties {
	}
	export function CreateMsTeamsChannelFormGroup() {
		return new FormGroup<MsTeamsChannelFormProperties>({
		});

	}


	/** The parameters to provide for the Microsoft Teams channel. */
	export interface MsTeamsChannelProperties {

		/** Webhook for Microsoft Teams channel calls */
		callingWebHook?: string | null;

		/** Enable calling for Microsoft Teams channel */
		enableCalling?: boolean | null;

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: boolean;
	}

	/** The parameters to provide for the Microsoft Teams channel. */
	export interface MsTeamsChannelPropertiesFormProperties {

		/** Webhook for Microsoft Teams channel calls */
		callingWebHook: FormControl<string | null | undefined>,

		/** Enable calling for Microsoft Teams channel */
		enableCalling: FormControl<boolean | null | undefined>,

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateMsTeamsChannelPropertiesFormGroup() {
		return new FormGroup<MsTeamsChannelPropertiesFormProperties>({
			callingWebHook: new FormControl<string | null | undefined>(undefined),
			enableCalling: new FormControl<boolean | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The operation supported by Bot Service Management. */
	export interface OperationDisplayInfo {

		/** The description of the operation. */
		description?: string | null;

		/** The action that users can perform, based on their permission level. */
		operation?: string | null;

		/** Service provider: Microsoft Bot Service. */
		provider?: string | null;

		/** Resource on which the operation is performed. */
		resource?: string | null;
	}

	/** The operation supported by Bot Service Management. */
	export interface OperationDisplayInfoFormProperties {

		/** The description of the operation. */
		description: FormControl<string | null | undefined>,

		/** The action that users can perform, based on their permission level. */
		operation: FormControl<string | null | undefined>,

		/** Service provider: Microsoft Bot Service. */
		provider: FormControl<string | null | undefined>,

		/** Resource on which the operation is performed. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateOperationDisplayInfoFormGroup() {
		return new FormGroup<OperationDisplayInfoFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operations supported by Bot Service Management. */
	export interface OperationEntity {

		/** The operation supported by Bot Service Management. */
		display?: OperationDisplayInfo;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;

		/** The origin of the operation. */
		origin?: string | null;

		/** Additional properties. */
		properties?: string | null;
	}

	/** The operations supported by Bot Service Management. */
	export interface OperationEntityFormProperties {

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,

		/** The origin of the operation. */
		origin: FormControl<string | null | undefined>,

		/** Additional properties. */
		properties: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityFormGroup() {
		return new FormGroup<OperationEntityFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of bot service operation response. */
	export interface OperationEntityListResult {

		/** The link used to get the next page of operations. */
		nextLink?: string | null;

		/** The list of operations. */
		value?: Array<OperationEntity>;
	}

	/** The list of bot service operation response. */
	export interface OperationEntityListResultFormProperties {

		/** The link used to get the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationEntityListResultFormGroup() {
		return new FormGroup<OperationEntityListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure resource */
	export interface Resource {

		/** Entity Tag */
		etag?: string | null;

		/** Specifies the resource ID. */
		id?: string | null;

		/** Indicates the type of bot service */
		kind?: Kind | null;

		/** Specifies the location of the resource. */
		location?: string | null;

		/** Specifies the name of the resource. */
		name?: string | null;

		/** The SKU of the cognitive services account. */
		sku?: Sku;

		/** Contains resource tags defined as key/value pairs. */
		tags?: {[id: string]: string };

		/** Specifies the type of the resource. */
		type?: string | null;
	}

	/** Azure resource */
	export interface ResourceFormProperties {

		/** Entity Tag */
		etag: FormControl<string | null | undefined>,

		/** Specifies the resource ID. */
		id: FormControl<string | null | undefined>,

		/** Indicates the type of bot service */
		kind: FormControl<Kind | null | undefined>,

		/** Specifies the location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Specifies the name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Contains resource tags defined as key/value pairs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Specifies the type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<Kind | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service Provider Definition */
	export interface ServiceProvider {

		/** The Object used to describe a Service Provider supported by Bot Service */
		properties?: ServiceProviderProperties;
	}

	/** Service Provider Definition */
	export interface ServiceProviderFormProperties {
	}
	export function CreateServiceProviderFormGroup() {
		return new FormGroup<ServiceProviderFormProperties>({
		});

	}


	/** Extra Parameters specific to each Service Provider */
	export interface ServiceProviderParameter {

		/** Default Name for the Service Provider */
		default?: string | null;

		/** Description of the Service Provider */
		description?: string | null;

		/** Display Name of the Service Provider */
		displayName?: string | null;

		/** Help Url for the  Service Provider */
		helpUrl?: string | null;

		/** Name of the Service Provider */
		name?: string | null;

		/** Type of the Service Provider */
		type?: string | null;
	}

	/** Extra Parameters specific to each Service Provider */
	export interface ServiceProviderParameterFormProperties {

		/** Default Name for the Service Provider */
		default: FormControl<string | null | undefined>,

		/** Description of the Service Provider */
		description: FormControl<string | null | undefined>,

		/** Display Name of the Service Provider */
		displayName: FormControl<string | null | undefined>,

		/** Help Url for the  Service Provider */
		helpUrl: FormControl<string | null | undefined>,

		/** Name of the Service Provider */
		name: FormControl<string | null | undefined>,

		/** Type of the Service Provider */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServiceProviderParameterFormGroup() {
		return new FormGroup<ServiceProviderParameterFormProperties>({
			default: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			helpUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Object used to describe a Service Provider supported by Bot Service */
	export interface ServiceProviderProperties {

		/** Display Name of the Service Provider */
		devPortalUrl?: string | null;

		/** Display Name of the Service Provider */
		displayName?: string | null;

		/** Display Name of the Service Provider */
		iconUrl?: string | null;

		/** Id for Service Provider */
		id?: string | null;

		/** The list of parameters for the Service Provider */
		parameters?: Array<ServiceProviderParameter>;

		/** Display Name of the Service Provider */
		serviceProviderName?: string | null;
	}

	/** The Object used to describe a Service Provider supported by Bot Service */
	export interface ServiceProviderPropertiesFormProperties {

		/** Display Name of the Service Provider */
		devPortalUrl: FormControl<string | null | undefined>,

		/** Display Name of the Service Provider */
		displayName: FormControl<string | null | undefined>,

		/** Display Name of the Service Provider */
		iconUrl: FormControl<string | null | undefined>,

		/** Id for Service Provider */
		id: FormControl<string | null | undefined>,

		/** Display Name of the Service Provider */
		serviceProviderName: FormControl<string | null | undefined>,
	}
	export function CreateServiceProviderPropertiesFormGroup() {
		return new FormGroup<ServiceProviderPropertiesFormProperties>({
			devPortalUrl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			iconUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			serviceProviderName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of bot service providers response. */
	export interface ServiceProviderResponseList {

		/** The link used to get the next page of bot service providers. */
		nextLink?: string | null;

		/** Gets the list of bot service providers and their properties. */
		value?: Array<ServiceProvider>;
	}

	/** The list of bot service providers response. */
	export interface ServiceProviderResponseListFormProperties {

		/** The link used to get the next page of bot service providers. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateServiceProviderResponseListFormGroup() {
		return new FormGroup<ServiceProviderResponseListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SKU of the cognitive services account. */
	export interface Sku {

		/**
		 * The name of SKU.
		 * Required
		 */
		name: SkuName;

		/** Gets the sku tier. This is based on the SKU name. */
		tier?: SkuTier | null;
	}

	/** The SKU of the cognitive services account. */
	export interface SkuFormProperties {

		/**
		 * The name of SKU.
		 * Required
		 */
		name: FormControl<SkuName | null | undefined>,

		/** Gets the sku tier. This is based on the SKU name. */
		tier: FormControl<SkuTier | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<SkuName | null | undefined>(undefined, [Validators.required]),
			tier: new FormControl<SkuTier | null | undefined>(undefined),
		});

	}

	export enum SkuName { F0 = 0, S1 = 1 }

	export enum SkuTier { Free = 0, Standard = 1 }


	/** Skype channel definition */
	export interface SkypeChannel {

		/** The parameters to provide for the Microsoft Teams channel. */
		properties?: SkypeChannelProperties;
	}

	/** Skype channel definition */
	export interface SkypeChannelFormProperties {
	}
	export function CreateSkypeChannelFormGroup() {
		return new FormGroup<SkypeChannelFormProperties>({
		});

	}


	/** The parameters to provide for the Microsoft Teams channel. */
	export interface SkypeChannelProperties {

		/** Calling web hook for Skype channel */
		callingWebHook?: string | null;

		/** Enable calling for Skype channel */
		enableCalling?: boolean | null;

		/** Enable groups for Skype channel */
		enableGroups?: boolean | null;

		/** Enable media cards for Skype channel */
		enableMediaCards?: boolean | null;

		/** Enable messaging for Skype channel */
		enableMessaging?: boolean | null;

		/** Enable screen sharing for Skype channel */
		enableScreenSharing?: boolean | null;

		/** Enable video for Skype channel */
		enableVideo?: boolean | null;

		/** Group mode for Skype channel */
		groupsMode?: string | null;

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: boolean;
	}

	/** The parameters to provide for the Microsoft Teams channel. */
	export interface SkypeChannelPropertiesFormProperties {

		/** Calling web hook for Skype channel */
		callingWebHook: FormControl<string | null | undefined>,

		/** Enable calling for Skype channel */
		enableCalling: FormControl<boolean | null | undefined>,

		/** Enable groups for Skype channel */
		enableGroups: FormControl<boolean | null | undefined>,

		/** Enable media cards for Skype channel */
		enableMediaCards: FormControl<boolean | null | undefined>,

		/** Enable messaging for Skype channel */
		enableMessaging: FormControl<boolean | null | undefined>,

		/** Enable screen sharing for Skype channel */
		enableScreenSharing: FormControl<boolean | null | undefined>,

		/** Enable video for Skype channel */
		enableVideo: FormControl<boolean | null | undefined>,

		/** Group mode for Skype channel */
		groupsMode: FormControl<string | null | undefined>,

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateSkypeChannelPropertiesFormGroup() {
		return new FormGroup<SkypeChannelPropertiesFormProperties>({
			callingWebHook: new FormControl<string | null | undefined>(undefined),
			enableCalling: new FormControl<boolean | null | undefined>(undefined),
			enableGroups: new FormControl<boolean | null | undefined>(undefined),
			enableMediaCards: new FormControl<boolean | null | undefined>(undefined),
			enableMessaging: new FormControl<boolean | null | undefined>(undefined),
			enableScreenSharing: new FormControl<boolean | null | undefined>(undefined),
			enableVideo: new FormControl<boolean | null | undefined>(undefined),
			groupsMode: new FormControl<string | null | undefined>(undefined),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Slack channel definition */
	export interface SlackChannel {

		/** The parameters to provide for the Slack channel. */
		properties?: SlackChannelProperties;
	}

	/** Slack channel definition */
	export interface SlackChannelFormProperties {
	}
	export function CreateSlackChannelFormGroup() {
		return new FormGroup<SlackChannelFormProperties>({
		});

	}


	/** The parameters to provide for the Slack channel. */
	export interface SlackChannelProperties {

		/**
		 * The Slack client id
		 * Required
		 */
		clientId: string;

		/**
		 * The Slack client secret. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		clientSecret: string;

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: boolean;

		/** Whether this channel is validated for the bot */
		isValidated?: boolean | null;

		/** The Slack landing page Url */
		landingPageUrl?: string | null;

		/** The Sms auth token */
		lastSubmissionId?: string | null;

		/** The Slack redirect action */
		redirectAction?: string | null;

		/** Whether to register the settings before OAuth validation is performed. Recommended to True. */
		registerBeforeOAuthFlow?: boolean | null;

		/**
		 * The Slack verification token. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		verificationToken: string;
	}

	/** The parameters to provide for the Slack channel. */
	export interface SlackChannelPropertiesFormProperties {

		/**
		 * The Slack client id
		 * Required
		 */
		clientId: FormControl<string | null | undefined>,

		/**
		 * The Slack client secret. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		clientSecret: FormControl<string | null | undefined>,

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Whether this channel is validated for the bot */
		isValidated: FormControl<boolean | null | undefined>,

		/** The Slack landing page Url */
		landingPageUrl: FormControl<string | null | undefined>,

		/** The Sms auth token */
		lastSubmissionId: FormControl<string | null | undefined>,

		/** The Slack redirect action */
		redirectAction: FormControl<string | null | undefined>,

		/** Whether to register the settings before OAuth validation is performed. Recommended to True. */
		registerBeforeOAuthFlow: FormControl<boolean | null | undefined>,

		/**
		 * The Slack verification token. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		verificationToken: FormControl<string | null | undefined>,
	}
	export function CreateSlackChannelPropertiesFormGroup() {
		return new FormGroup<SlackChannelPropertiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isValidated: new FormControl<boolean | null | undefined>(undefined),
			landingPageUrl: new FormControl<string | null | undefined>(undefined),
			lastSubmissionId: new FormControl<string | null | undefined>(undefined),
			redirectAction: new FormControl<string | null | undefined>(undefined),
			registerBeforeOAuthFlow: new FormControl<boolean | null | undefined>(undefined),
			verificationToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Sms channel definition */
	export interface SmsChannel {

		/** The parameters to provide for the Sms channel. */
		properties?: SmsChannelProperties;
	}

	/** Sms channel definition */
	export interface SmsChannelFormProperties {
	}
	export function CreateSmsChannelFormGroup() {
		return new FormGroup<SmsChannelFormProperties>({
		});

	}


	/** The parameters to provide for the Sms channel. */
	export interface SmsChannelProperties {

		/**
		 * The Sms account SID. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		accountSID: string;

		/**
		 * The Sms auth token. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		authToken: string;

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: boolean;

		/** Whether this channel is validated for the bot */
		isValidated?: boolean | null;

		/**
		 * The Sms phone
		 * Required
		 */
		phone: string;
	}

	/** The parameters to provide for the Sms channel. */
	export interface SmsChannelPropertiesFormProperties {

		/**
		 * The Sms account SID. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		accountSID: FormControl<string | null | undefined>,

		/**
		 * The Sms auth token. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		authToken: FormControl<string | null | undefined>,

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Whether this channel is validated for the bot */
		isValidated: FormControl<boolean | null | undefined>,

		/**
		 * The Sms phone
		 * Required
		 */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateSmsChannelPropertiesFormGroup() {
		return new FormGroup<SmsChannelPropertiesFormProperties>({
			accountSID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			authToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isValidated: new FormControl<boolean | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Telegram channel definition */
	export interface TelegramChannel {

		/** The parameters to provide for the Telegram channel. */
		properties?: TelegramChannelProperties;
	}

	/** Telegram channel definition */
	export interface TelegramChannelFormProperties {
	}
	export function CreateTelegramChannelFormGroup() {
		return new FormGroup<TelegramChannelFormProperties>({
		});

	}


	/** The parameters to provide for the Telegram channel. */
	export interface TelegramChannelProperties {

		/**
		 * The Telegram access token. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		accessToken: string;

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: boolean;

		/** Whether this channel is validated for the bot */
		isValidated?: boolean | null;
	}

	/** The parameters to provide for the Telegram channel. */
	export interface TelegramChannelPropertiesFormProperties {

		/**
		 * The Telegram access token. Value only returned through POST to the action Channel List API, otherwise empty.
		 * Required
		 */
		accessToken: FormControl<string | null | undefined>,

		/**
		 * Whether this channel is enabled for the bot
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Whether this channel is validated for the bot */
		isValidated: FormControl<boolean | null | undefined>,
	}
	export function CreateTelegramChannelPropertiesFormGroup() {
		return new FormGroup<TelegramChannelPropertiesFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isValidated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Web Chat channel definition */
	export interface WebChatChannel {

		/** The parameters to provide for the Web Chat channel. */
		properties?: WebChatChannelProperties;
	}

	/** Web Chat channel definition */
	export interface WebChatChannelFormProperties {
	}
	export function CreateWebChatChannelFormGroup() {
		return new FormGroup<WebChatChannelFormProperties>({
		});

	}


	/** The parameters to provide for the Web Chat channel. */
	export interface WebChatChannelProperties {

		/** The list of Web Chat sites */
		sites?: Array<WebChatSite>;

		/** Web chat control embed code */
		webChatEmbedCode?: string | null;
	}

	/** The parameters to provide for the Web Chat channel. */
	export interface WebChatChannelPropertiesFormProperties {

		/** Web chat control embed code */
		webChatEmbedCode: FormControl<string | null | undefined>,
	}
	export function CreateWebChatChannelPropertiesFormGroup() {
		return new FormGroup<WebChatChannelPropertiesFormProperties>({
			webChatEmbedCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A site for the Webchat channel */
	export interface WebChatSite {

		/**
		 * Whether this site is enabled for preview versions of Webchat
		 * Required
		 */
		enablePreview: boolean;

		/**
		 * Whether this site is enabled for DirectLine channel
		 * Required
		 */
		isEnabled: boolean;

		/** Primary key. Value only returned through POST to the action Channel List API, otherwise empty. */
		key?: string | null;

		/** Secondary key. Value only returned through POST to the action Channel List API, otherwise empty. */
		key2?: string | null;

		/** Site Id */
		siteId?: string | null;

		/**
		 * Site name
		 * Required
		 */
		siteName: string;
	}

	/** A site for the Webchat channel */
	export interface WebChatSiteFormProperties {

		/**
		 * Whether this site is enabled for preview versions of Webchat
		 * Required
		 */
		enablePreview: FormControl<boolean | null | undefined>,

		/**
		 * Whether this site is enabled for DirectLine channel
		 * Required
		 */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Primary key. Value only returned through POST to the action Channel List API, otherwise empty. */
		key: FormControl<string | null | undefined>,

		/** Secondary key. Value only returned through POST to the action Channel List API, otherwise empty. */
		key2: FormControl<string | null | undefined>,

		/** Site Id */
		siteId: FormControl<string | null | undefined>,

		/**
		 * Site name
		 * Required
		 */
		siteName: FormControl<string | null | undefined>,
	}
	export function CreateWebChatSiteFormGroup() {
		return new FormGroup<WebChatSiteFormProperties>({
			enablePreview: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined),
			key2: new FormControl<string | null | undefined>(undefined),
			siteId: new FormControl<string | null | undefined>(undefined),
			siteName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Check whether an Enterprise Channel name is available.
		 * Post providers/Microsoft.BotService/checkEnterpriseChannelNameAvailability
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {EnterpriseChannelCheckNameAvailabilityRequest} requestBody The parameters to provide for the Enterprise Channel check name availability request.
		 * @return {EnterpriseChannelCheckNameAvailabilityResponse} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses. If a resource provider does not support paging, it should return the same body but leave nextLink empty for future compatibility.
		 * For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section.
		 */
		EnterpriseChannels_CheckNameAvailability(api_version: string, requestBody: EnterpriseChannelCheckNameAvailabilityRequest): Observable<EnterpriseChannelCheckNameAvailabilityResponse> {
			return this.http.post<EnterpriseChannelCheckNameAvailabilityResponse>(this.baseUri + 'providers/Microsoft.BotService/checkEnterpriseChannelNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check whether a bot name is available.
		 * Post providers/Microsoft.BotService/checkNameAvailability
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {CheckNameAvailabilityRequestBody} requestBody The request body parameters to provide for the check name availability request
		 * @return {CheckNameAvailabilityResponseBody} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses. If a resource provider does not support paging, it should return the same body but leave nextLink empty for future compatibility.
		 * For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section. 
		 */
		Bots_GetCheckNameAvailability(api_version: string, requestBody: CheckNameAvailabilityRequestBody): Observable<CheckNameAvailabilityResponseBody> {
			return this.http.post<CheckNameAvailabilityResponseBody>(this.baseUri + 'providers/Microsoft.BotService/checkNameAvailability?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the available BotService operations.
		 * Get providers/Microsoft.BotService/operations
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {OperationEntityListResult} OK.
		 */
		Operations_List(api_version: string): Observable<OperationEntityListResult> {
			return this.http.get<OperationEntityListResult>(this.baseUri + 'providers/Microsoft.BotService/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns all the resources of a particular type belonging to a subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.BotService/botServices
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {BotResponseList} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses. If a resource provider does not support paging, it should return the same body but leave nextLink empty for future compatibility.
		 * For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section. 
		 */
		Bots_List(api_version: string, subscriptionId: string): Observable<BotResponseList> {
			return this.http.get<BotResponseList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.BotService/botServices?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists the available Service Providers for creating Connection Settings
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.BotService/listAuthServiceProviders
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {ServiceProviderResponseList} If resource is retrieved successfully, the service should return 200 (OK).
		 */
		BotConnection_ListServiceProviders(api_version: string, subscriptionId: string): Observable<ServiceProviderResponseList> {
			return this.http.post<ServiceProviderResponseList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.BotService/listAuthServiceProviders?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Returns all the resources of a particular type belonging to a resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {BotResponseList} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses here. If a resource provider does not support paging, it should return the same body (JSON object with “value” property) but omit nextLink entirely (or set to null, *not* empty string) for future compatibility.
		 * The nextLink should be implemented using following query parameters:
		 * · skipToken: opaque token that allows the resource provider to skip resources already enumerated. This value is defined and returned by the RP after first request via nextLink.
		 * · top: the optional client query parameter which defines the maximum number of records to be returned by the server.
		 * Implementation details:
		 * · NextLink may include all the query parameters (specifically OData $filter) used by the client in the first query. 
		 * · Server may return less records than requested with nextLink. Returning zero records with NextLink is an acceptable response. 
		 * Clients must fetch records until the nextLink is not returned back / null. Clients should never rely on number of returned records to determinate if pagination is completed.
		 */
		Bots_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<BotResponseList> {
			return this.http.get<BotResponseList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a BotService specified by the parameters.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {Bot} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		Bots_Get(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string): Observable<Bot> {
			return this.http.get<Bot>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a Bot Service. Bot Service is a resource group wide resource type.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {Bot} requestBody The parameters to provide for the created bot.
		 * @return {Bot} If resource is created successfully or already existed, the service should return 200 (OK).
		 */
		Bots_Create(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string, requestBody: Bot): Observable<Bot> {
			return this.http.put<Bot>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Bot Service from the resource group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {void} A 200 (OK) should be returned if the object exists and was deleted successfully;
		 */
		Bots_Delete(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Bot Service
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {Bot} requestBody The parameters to provide for the created bot.
		 * @return {Bot} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		Bots_Update(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string, requestBody: Bot): Observable<Bot> {
			return this.http.patch<Bot>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a Connection Setting registration for a Bot Service
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} connectionName The name of the Bot Service Connection Setting resource
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {ConnectionSetting} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		BotConnection_Get(resourceGroupName: string, resourceName: string, connectionName: string, api_version: string, subscriptionId: string): Observable<ConnectionSetting> {
			return this.http.get<ConnectionSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/Connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Register a new Auth Connection for a Bot Service
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} connectionName The name of the Bot Service Connection Setting resource
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {ConnectionSetting} requestBody The parameters to provide for creating the Connection Setting.
		 * @return {ConnectionSetting} If resource is created successfully or already existed, the service should return 200 (OK).
		 */
		BotConnection_Create(resourceGroupName: string, resourceName: string, connectionName: string, api_version: string, subscriptionId: string, requestBody: ConnectionSetting): Observable<ConnectionSetting> {
			return this.http.put<ConnectionSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/Connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Connection Setting registration for a Bot Service
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} connectionName The name of the Bot Service Connection Setting resource
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {void} A 200 (OK) should be returned if the object exists and was deleted successfully;
		 */
		BotConnection_Delete(resourceGroupName: string, resourceName: string, connectionName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/Connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Connection Setting registration for a Bot Service
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} connectionName The name of the Bot Service Connection Setting resource
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {ConnectionSetting} requestBody The parameters to provide for updating the Connection Setting.
		 * @return {ConnectionSetting} If resource is created successfully or already existed, the service should return 200 (OK).
		 */
		BotConnection_Update(resourceGroupName: string, resourceName: string, connectionName: string, api_version: string, subscriptionId: string, requestBody: ConnectionSetting): Observable<ConnectionSetting> {
			return this.http.patch<ConnectionSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/Connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a Connection Setting registration for a Bot Service
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/Connections/{connectionName}/listWithSecrets
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} connectionName The name of the Bot Service Connection Setting resource
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {ConnectionSetting} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		BotConnection_ListWithSecrets(resourceGroupName: string, resourceName: string, connectionName: string, api_version: string, subscriptionId: string): Observable<ConnectionSetting> {
			return this.http.post<ConnectionSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/Connections/' + (connectionName == null ? '' : encodeURIComponent(connectionName)) + '/listWithSecrets&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Returns all the Channel registrations of a particular BotService resource
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ChannelResponseList} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses here. If a resource provider does not support paging, it should return the same body (JSON object with “value” property) but omit nextLink entirely (or set to null, *not* empty string) for future compatibility.
		 * The nextLink should be implemented using following query parameters:
		 * · skipToken: opaque token that allows the resource provider to skip resources already enumerated. This value is defined and returned by the RP after first request via nextLink.
		 * · top: the optional client query parameter which defines the maximum number of records to be returned by the server.
		 * Implementation details:
		 * · NextLink may include all the query parameters (specifically OData $filter) used by the client in the first query. 
		 * · Server may return less records than requested with nextLink. Returning zero records with NextLink is an acceptable response. 
		 * Clients must fetch records until the nextLink is not returned back / null. Clients should never rely on number of returned records to determinate if pagination is completed.
		 */
		Channels_ListByResourceGroup(resourceGroupName: string, resourceName: string, subscriptionId: string, api_version: string): Observable<ChannelResponseList> {
			return this.http.get<ChannelResponseList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/channels&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns a BotService Channel registration specified by the parameters.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} channelName The name of the Bot resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {BotChannel} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		Channels_Get(resourceGroupName: string, resourceName: string, channelName: string, api_version: string, subscriptionId: string): Observable<BotChannel> {
			return this.http.get<BotChannel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a Channel registration for a Bot Service
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {Channels_CreateChannelName} channelName The name of the Channel resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {BotChannel} requestBody The parameters to provide for the created bot.
		 * @return {BotChannel} If resource is created successfully or already existed, the service should return 200 (OK).
		 */
		Channels_Create(resourceGroupName: string, resourceName: string, channelName: Channels_CreateChannelName, api_version: string, subscriptionId: string, requestBody: BotChannel): Observable<BotChannel> {
			return this.http.put<BotChannel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/channels/' + channelName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Channel registration from a Bot Service
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} channelName The name of the Bot resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {void} A 200 (OK) should be returned if the object exists and was deleted successfully;
		 */
		Channels_Delete(resourceGroupName: string, resourceName: string, channelName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/channels/' + (channelName == null ? '' : encodeURIComponent(channelName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Channel registration for a Bot Service
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {Channels_CreateChannelName} channelName The name of the Channel resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {BotChannel} requestBody The parameters to provide for the created bot.
		 * @return {BotChannel} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		Channels_Update(resourceGroupName: string, resourceName: string, channelName: Channels_CreateChannelName, api_version: string, subscriptionId: string, requestBody: BotChannel): Observable<BotChannel> {
			return this.http.patch<BotChannel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/channels/' + channelName + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists a Channel registration for a Bot Service including secrets
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/channels/{channelName}/listChannelWithKeys
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {Channels_CreateChannelName} channelName The name of the Channel resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {BotChannel} If resource is retrieved successfully, the service should return 200 (OK).
		 */
		Channels_ListWithKeys(resourceGroupName: string, resourceName: string, channelName: Channels_CreateChannelName, api_version: string, subscriptionId: string): Observable<BotChannel> {
			return this.http.post<BotChannel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/channels/' + channelName + '/listChannelWithKeys&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), null, {});
		}

		/**
		 * Returns all the Connection Settings registered to a particular BotService resource
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName}/connections
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {ConnectionSettingResponseList} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses here. If a resource provider does not support paging, it should return the same body (JSON object with “value” property) but omit nextLink entirely (or set to null, *not* empty string) for future compatibility.
		 * The nextLink should be implemented using following query parameters:
		 * · skipToken: opaque token that allows the resource provider to skip resources already enumerated. This value is defined and returned by the RP after first request via nextLink.
		 * · top: the optional client query parameter which defines the maximum number of records to be returned by the server.
		 * Implementation details:
		 * · NextLink may include all the query parameters (specifically OData $filter) used by the client in the first query. 
		 * · Server may return less records than requested with nextLink. Returning zero records with NextLink is an acceptable response. 
		 * Clients must fetch records until the nextLink is not returned back / null. Clients should never rely on number of returned records to determinate if pagination is completed.
		 */
		BotConnection_ListByBotService(resourceGroupName: string, resourceName: string, subscriptionId: string, api_version: string): Observable<ConnectionSettingResponseList> {
			return this.http.get<ConnectionSettingResponseList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/botServices/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/connections&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns all the resources of a particular type belonging to a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/enterpriseChannels
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @return {EnterpriseChannelResponseList} The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code.
		 * The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses here. If a resource provider does not support paging, it should return the same body (JSON object with “value” property) but omit nextLink entirely (or set to null, *not* empty string) for future compatibility.
		 * The nextLink should be implemented using following query parameters:
		 * · skipToken: opaque token that allows the resource provider to skip resources already enumerated. This value is defined and returned by the RP after first request via nextLink.
		 * · top: the optional client query parameter which defines the maximum number of records to be returned by the server.
		 * Implementation details:
		 * · NextLink may include all the query parameters (specifically OData $filter) used by the client in the first query. 
		 * · Server may return less records than requested with nextLink. Returning zero records with NextLink is an acceptable response. 
		 * Clients must fetch records until the nextLink is not returned back / null. Clients should never rely on number of returned records to determinate if pagination is completed.
		 */
		EnterpriseChannels_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<EnterpriseChannelResponseList> {
			return this.http.get<EnterpriseChannelResponseList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/enterpriseChannels&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns an Enterprise Channel specified by the parameters.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/enterpriseChannels/{resourceName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {EnterpriseChannel} The resource provider should return 200 (OK) to indicate that the operation completed successfully. 
		 */
		EnterpriseChannels_Get(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string): Observable<EnterpriseChannel> {
			return this.http.get<EnterpriseChannel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/enterpriseChannels/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an Enterprise Channel.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/enterpriseChannels/{resourceName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {EnterpriseChannel} requestBody The parameters to provide for the new Enterprise Channel.
		 * @return {EnterpriseChannel} If resource is created successfully or already existed, the service should return 200 (OK).
		 */
		EnterpriseChannels_Create(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string, requestBody: EnterpriseChannel): Observable<EnterpriseChannel> {
			return this.http.put<EnterpriseChannel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/enterpriseChannels/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an Enterprise Channel from the resource group
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/enterpriseChannels/{resourceName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @return {void} A 200 (OK) should be returned if the object exists and was deleted successfully;
		 */
		EnterpriseChannels_Delete(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/enterpriseChannels/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an Enterprise Channel.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/enterpriseChannels/{resourceName}
		 * @param {string} resourceGroupName The name of the Bot resource group in the user subscription.
		 * @param {string} resourceName The name of the Bot resource.
		 * @param {string} api_version Version of the API to be used with the client request.
		 * @param {string} subscriptionId Azure Subscription ID.
		 * @param {EnterpriseChannel} requestBody The parameters to provide to update the Enterprise Channel.
		 * @return {EnterpriseChannel} If resource is created successfully or already existed, the service should return 200 (OK).
		 */
		EnterpriseChannels_Update(resourceGroupName: string, resourceName: string, api_version: string, subscriptionId: string, requestBody: EnterpriseChannel): Observable<EnterpriseChannel> {
			return this.http.patch<EnterpriseChannel>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.BotService/enterpriseChannels/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Channels_CreateChannelName { FacebookChannel = 0, EmailChannel = 1, KikChannel = 2, TelegramChannel = 3, SlackChannel = 4, MsTeamsChannel = 5, SkypeChannel = 6, WebChatChannel = 7, DirectLineChannel = 8, SmsChannel = 9 }

}

