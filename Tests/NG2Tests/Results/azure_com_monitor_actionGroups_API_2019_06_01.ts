import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An Azure action group. */
	export interface ActionGroup {

		/** The list of ARM role receivers that are part of this action group. Roles are Azure RBAC roles and only built-in roles are supported. */
		armRoleReceivers?: Array<ArmRoleReceiver>;

		/** The list of AutomationRunbook receivers that are part of this action group. */
		automationRunbookReceivers?: Array<AutomationRunbookReceiver>;

		/** The list of AzureAppPush receivers that are part of this action group. */
		azureAppPushReceivers?: Array<AzureAppPushReceiver>;

		/** The list of azure function receivers that are part of this action group. */
		azureFunctionReceivers?: Array<AzureFunctionReceiver>;

		/** The list of email receivers that are part of this action group. */
		emailReceivers?: Array<EmailReceiver>;

		/**
		 * Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
		 * Required
		 */
		enabled: boolean;

		/**
		 * The short name of the action group. This will be used in SMS messages.
		 * Required
		 * Max length: 12
		 */
		groupShortName: string;

		/** The list of ITSM receivers that are part of this action group. */
		itsmReceivers?: Array<ItsmReceiver>;

		/** The list of logic app receivers that are part of this action group. */
		logicAppReceivers?: Array<LogicAppReceiver>;

		/** The list of SMS receivers that are part of this action group. */
		smsReceivers?: Array<SmsReceiver>;

		/** The list of voice receivers that are part of this action group. */
		voiceReceivers?: Array<VoiceReceiver>;

		/** The list of webhook receivers that are part of this action group. */
		webhookReceivers?: Array<WebhookReceiver>;
	}

	/** An Azure action group. */
	export interface ActionGroupFormProperties {

		/**
		 * Indicates whether this action group is enabled. If an action group is not enabled, then none of its receivers will receive communications.
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The short name of the action group. This will be used in SMS messages.
		 * Required
		 * Max length: 12
		 */
		groupShortName: FormControl<string | null | undefined>,
	}
	export function CreateActionGroupFormGroup() {
		return new FormGroup<ActionGroupFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			groupShortName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(12)]),
		});

	}


	/** An arm role receiver. */
	export interface ArmRoleReceiver {

		/**
		 * The name of the arm role receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: string;

		/**
		 * The arm role id.
		 * Required
		 */
		roleId: string;

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: boolean;
	}

	/** An arm role receiver. */
	export interface ArmRoleReceiverFormProperties {

		/**
		 * The name of the arm role receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The arm role id.
		 * Required
		 */
		roleId: FormControl<string | null | undefined>,

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: FormControl<boolean | null | undefined>,
	}
	export function CreateArmRoleReceiverFormGroup() {
		return new FormGroup<ArmRoleReceiverFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useCommonAlertSchema: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Azure Automation Runbook notification receiver. */
	export interface AutomationRunbookReceiver {

		/**
		 * The Azure automation account Id which holds this runbook and authenticate to Azure resource.
		 * Required
		 */
		automationAccountId: string;

		/**
		 * Indicates whether this instance is global runbook.
		 * Required
		 */
		isGlobalRunbook: boolean;

		/** Indicates name of the webhook. */
		name?: string | null;

		/**
		 * The name for this runbook.
		 * Required
		 */
		runbookName: string;

		/** The URI where webhooks should be sent. */
		serviceUri?: string | null;

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: boolean;

		/**
		 * The resource id for webhook linked to this runbook.
		 * Required
		 */
		webhookResourceId: string;
	}

	/** The Azure Automation Runbook notification receiver. */
	export interface AutomationRunbookReceiverFormProperties {

		/**
		 * The Azure automation account Id which holds this runbook and authenticate to Azure resource.
		 * Required
		 */
		automationAccountId: FormControl<string | null | undefined>,

		/**
		 * Indicates whether this instance is global runbook.
		 * Required
		 */
		isGlobalRunbook: FormControl<boolean | null | undefined>,

		/** Indicates name of the webhook. */
		name: FormControl<string | null | undefined>,

		/**
		 * The name for this runbook.
		 * Required
		 */
		runbookName: FormControl<string | null | undefined>,

		/** The URI where webhooks should be sent. */
		serviceUri: FormControl<string | null | undefined>,

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: FormControl<boolean | null | undefined>,

		/**
		 * The resource id for webhook linked to this runbook.
		 * Required
		 */
		webhookResourceId: FormControl<string | null | undefined>,
	}
	export function CreateAutomationRunbookReceiverFormGroup() {
		return new FormGroup<AutomationRunbookReceiverFormProperties>({
			automationAccountId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isGlobalRunbook: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			runbookName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			serviceUri: new FormControl<string | null | undefined>(undefined),
			useCommonAlertSchema: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			webhookResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Azure mobile App push notification receiver. */
	export interface AzureAppPushReceiver {

		/**
		 * The email address registered for the Azure mobile app.
		 * Required
		 */
		emailAddress: string;

		/**
		 * The name of the Azure mobile app push receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: string;
	}

	/** The Azure mobile App push notification receiver. */
	export interface AzureAppPushReceiverFormProperties {

		/**
		 * The email address registered for the Azure mobile app.
		 * Required
		 */
		emailAddress: FormControl<string | null | undefined>,

		/**
		 * The name of the Azure mobile app push receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAzureAppPushReceiverFormGroup() {
		return new FormGroup<AzureAppPushReceiverFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An azure function receiver. */
	export interface AzureFunctionReceiver {

		/**
		 * The azure resource id of the function app.
		 * Required
		 */
		functionAppResourceId: string;

		/**
		 * The function name in the function app.
		 * Required
		 */
		functionName: string;

		/**
		 * The http trigger url where http request sent to.
		 * Required
		 */
		httpTriggerUrl: string;

		/**
		 * The name of the azure function receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: string;

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: boolean;
	}

	/** An azure function receiver. */
	export interface AzureFunctionReceiverFormProperties {

		/**
		 * The azure resource id of the function app.
		 * Required
		 */
		functionAppResourceId: FormControl<string | null | undefined>,

		/**
		 * The function name in the function app.
		 * Required
		 */
		functionName: FormControl<string | null | undefined>,

		/**
		 * The http trigger url where http request sent to.
		 * Required
		 */
		httpTriggerUrl: FormControl<string | null | undefined>,

		/**
		 * The name of the azure function receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: FormControl<boolean | null | undefined>,
	}
	export function CreateAzureFunctionReceiverFormGroup() {
		return new FormGroup<AzureFunctionReceiverFormProperties>({
			functionAppResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			functionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			httpTriggerUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useCommonAlertSchema: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An email receiver. */
	export interface EmailReceiver {

		/**
		 * The email address of this receiver.
		 * Required
		 */
		emailAddress: string;

		/**
		 * The name of the email receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: string;

		/** Indicates the status of the receiver. Receivers that are not Enabled will not receive any communications. */
		status?: EmailReceiverStatus | null;

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: boolean;
	}

	/** An email receiver. */
	export interface EmailReceiverFormProperties {

		/**
		 * The email address of this receiver.
		 * Required
		 */
		emailAddress: FormControl<string | null | undefined>,

		/**
		 * The name of the email receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Indicates the status of the receiver. Receivers that are not Enabled will not receive any communications. */
		status: FormControl<EmailReceiverStatus | null | undefined>,

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: FormControl<boolean | null | undefined>,
	}
	export function CreateEmailReceiverFormGroup() {
		return new FormGroup<EmailReceiverFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<EmailReceiverStatus | null | undefined>(undefined),
			useCommonAlertSchema: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EmailReceiverStatus { NotSpecified = 0, Enabled = 1, Disabled = 2 }


	/** An Itsm receiver. */
	export interface ItsmReceiver {

		/**
		 * Unique identification of ITSM connection among multiple defined in above workspace.
		 * Required
		 */
		connectionId: string;

		/**
		 * The name of the Itsm receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: string;

		/**
		 * Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope'
		 * Required
		 */
		region: string;

		/**
		 * JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
		 * Required
		 */
		ticketConfiguration: string;

		/**
		 * OMS LA instance identifier.
		 * Required
		 */
		workspaceId: string;
	}

	/** An Itsm receiver. */
	export interface ItsmReceiverFormProperties {

		/**
		 * Unique identification of ITSM connection among multiple defined in above workspace.
		 * Required
		 */
		connectionId: FormControl<string | null | undefined>,

		/**
		 * The name of the Itsm receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Region in which workspace resides. Supported values:'centralindia','japaneast','southeastasia','australiasoutheast','uksouth','westcentralus','canadacentral','eastus','westeurope'
		 * Required
		 */
		region: FormControl<string | null | undefined>,

		/**
		 * JSON blob for the configurations of the ITSM action. CreateMultipleWorkItems option will be part of this blob as well.
		 * Required
		 */
		ticketConfiguration: FormControl<string | null | undefined>,

		/**
		 * OMS LA instance identifier.
		 * Required
		 */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateItsmReceiverFormGroup() {
		return new FormGroup<ItsmReceiverFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ticketConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A logic app receiver. */
	export interface LogicAppReceiver {

		/**
		 * The callback url where http request sent to.
		 * Required
		 */
		callbackUrl: string;

		/**
		 * The name of the logic app receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: string;

		/**
		 * The azure resource id of the logic app receiver.
		 * Required
		 */
		resourceId: string;

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: boolean;
	}

	/** A logic app receiver. */
	export interface LogicAppReceiverFormProperties {

		/**
		 * The callback url where http request sent to.
		 * Required
		 */
		callbackUrl: FormControl<string | null | undefined>,

		/**
		 * The name of the logic app receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The azure resource id of the logic app receiver.
		 * Required
		 */
		resourceId: FormControl<string | null | undefined>,

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: FormControl<boolean | null | undefined>,
	}
	export function CreateLogicAppReceiverFormGroup() {
		return new FormGroup<LogicAppReceiverFormProperties>({
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			useCommonAlertSchema: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An SMS receiver. */
	export interface SmsReceiver {

		/**
		 * The country code of the SMS receiver.
		 * Required
		 */
		countryCode: string;

		/**
		 * The name of the SMS receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: string;

		/**
		 * The phone number of the SMS receiver.
		 * Required
		 */
		phoneNumber: string;

		/** Indicates the status of the receiver. Receivers that are not Enabled will not receive any communications. */
		status?: EmailReceiverStatus | null;
	}

	/** An SMS receiver. */
	export interface SmsReceiverFormProperties {

		/**
		 * The country code of the SMS receiver.
		 * Required
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * The name of the SMS receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The phone number of the SMS receiver.
		 * Required
		 */
		phoneNumber: FormControl<string | null | undefined>,

		/** Indicates the status of the receiver. Receivers that are not Enabled will not receive any communications. */
		status: FormControl<EmailReceiverStatus | null | undefined>,
	}
	export function CreateSmsReceiverFormGroup() {
		return new FormGroup<SmsReceiverFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<EmailReceiverStatus | null | undefined>(undefined),
		});

	}


	/** A voice receiver. */
	export interface VoiceReceiver {

		/**
		 * The country code of the voice receiver.
		 * Required
		 */
		countryCode: string;

		/**
		 * The name of the voice receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: string;

		/**
		 * The phone number of the voice receiver.
		 * Required
		 */
		phoneNumber: string;
	}

	/** A voice receiver. */
	export interface VoiceReceiverFormProperties {

		/**
		 * The country code of the voice receiver.
		 * Required
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * The name of the voice receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The phone number of the voice receiver.
		 * Required
		 */
		phoneNumber: FormControl<string | null | undefined>,
	}
	export function CreateVoiceReceiverFormGroup() {
		return new FormGroup<VoiceReceiverFormProperties>({
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phoneNumber: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A webhook receiver. */
	export interface WebhookReceiver {

		/** Indicates the identifier uri for aad auth. */
		identifierUri?: string | null;

		/**
		 * The name of the webhook receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: string;

		/** Indicates the webhook app object Id for aad auth. */
		objectId?: string | null;

		/**
		 * The URI where webhooks should be sent.
		 * Required
		 */
		serviceUri: string;

		/** Indicates the tenant id for aad auth. */
		tenantId?: string | null;

		/** Indicates whether or not use AAD authentication. */
		useAadAuth?: boolean | null;

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: boolean;
	}

	/** A webhook receiver. */
	export interface WebhookReceiverFormProperties {

		/** Indicates the identifier uri for aad auth. */
		identifierUri: FormControl<string | null | undefined>,

		/**
		 * The name of the webhook receiver. Names must be unique across all receivers within an action group.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Indicates the webhook app object Id for aad auth. */
		objectId: FormControl<string | null | undefined>,

		/**
		 * The URI where webhooks should be sent.
		 * Required
		 */
		serviceUri: FormControl<string | null | undefined>,

		/** Indicates the tenant id for aad auth. */
		tenantId: FormControl<string | null | undefined>,

		/** Indicates whether or not use AAD authentication. */
		useAadAuth: FormControl<boolean | null | undefined>,

		/**
		 * Indicates whether to use common alert schema.
		 * Required
		 */
		useCommonAlertSchema: FormControl<boolean | null | undefined>,
	}
	export function CreateWebhookReceiverFormGroup() {
		return new FormGroup<WebhookReceiverFormProperties>({
			identifierUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			objectId: new FormControl<string | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tenantId: new FormControl<string | null | undefined>(undefined),
			useAadAuth: new FormControl<boolean | null | undefined>(undefined),
			useCommonAlertSchema: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A list of action groups. */
	export interface ActionGroupList {

		/** Provides the link to retrieve the next set of elements. */
		nextLink?: string | null;

		/** The list of action groups. */
		value?: Array<ActionGroupResource>;
	}

	/** A list of action groups. */
	export interface ActionGroupListFormProperties {

		/** Provides the link to retrieve the next set of elements. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateActionGroupListFormGroup() {
		return new FormGroup<ActionGroupListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An action group resource. */
	export interface ActionGroupResource extends Resource {

		/** An Azure action group. */
		properties?: ActionGroup;
	}

	/** An action group resource. */
	export interface ActionGroupResourceFormProperties extends ResourceFormProperties {
	}
	export function CreateActionGroupResourceFormGroup() {
		return new FormGroup<ActionGroupResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Azure action group for patch operations. */
	export interface ActionGroupPatch {

		/** Indicates whether this action group is enabled. If an action group is not enabled, then none of its actions will be activated. */
		enabled?: boolean | null;
	}

	/** An Azure action group for patch operations. */
	export interface ActionGroupPatchFormProperties {

		/** Indicates whether this action group is enabled. If an action group is not enabled, then none of its actions will be activated. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateActionGroupPatchFormGroup() {
		return new FormGroup<ActionGroupPatchFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An action group object for the body of patch operations. */
	export interface ActionGroupPatchBody {

		/** An Azure action group for patch operations. */
		properties?: ActionGroupPatch;

		/** Resource tags */
		tags?: any;
	}

	/** An action group object for the body of patch operations. */
	export interface ActionGroupPatchBodyFormProperties {

		/** Resource tags */
		tags: FormControl<any | null | undefined>,
	}
	export function CreateActionGroupPatchBodyFormGroup() {
		return new FormGroup<ActionGroupPatchBodyFormProperties>({
			tags: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Describes a receiver that should be resubscribed. */
	export interface EnableRequest {

		/**
		 * The name of the receiver to resubscribe.
		 * Required
		 */
		receiverName: string;
	}

	/** Describes a receiver that should be resubscribed. */
	export interface EnableRequestFormProperties {

		/**
		 * The name of the receiver to resubscribe.
		 * Required
		 */
		receiverName: FormControl<string | null | undefined>,
	}
	export function CreateEnableRequestFormGroup() {
		return new FormGroup<EnableRequestFormProperties>({
			receiverName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the format of Error response. */
	export interface ErrorResponse {

		/** Error code */
		code?: string | null;

		/** Error message indicating why the operation failed. */
		message?: string | null;
	}

	/** Describes the format of Error response. */
	export interface ErrorResponseFormProperties {

		/** Error code */
		code: FormControl<string | null | undefined>,

		/** Error message indicating why the operation failed. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates the status of the receiver. Receivers that are not Enabled will not receive any communications. */
	export enum ReceiverStatus { NotSpecified = 0, Enabled = 1, Disabled = 2 }


	/** An azure resource object */
	export interface Resource {

		/** Azure resource Id */
		id?: string | null;

		/**
		 * Resource location
		 * Required
		 */
		location: string;

		/** Azure resource name */
		name?: string | null;

		/** Resource tags */
		tags?: any;

		/** Azure resource type */
		type?: string | null;
	}

	/** An azure resource object */
	export interface ResourceFormProperties {

		/** Azure resource Id */
		id: FormControl<string | null | undefined>,

		/**
		 * Resource location
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Azure resource name */
		name: FormControl<string | null | undefined>,

		/** Resource tags */
		tags: FormControl<any | null | undefined>,

		/** Azure resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<any | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a list of all action groups in a subscription.
		 * Get subscriptions/{subscriptionId}/providers/microsoft.insights/actionGroups
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {ActionGroupList} The request succeeded.
		 */
		ActionGroups_ListBySubscriptionId(subscriptionId: string, api_version: string): Observable<ActionGroupList> {
			return this.http.get<ActionGroupList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/microsoft.insights/actionGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get a list of all action groups in a resource group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {ActionGroupList} The request succeeded.
		 */
		ActionGroups_ListByResourceGroup(resourceGroupName: string, subscriptionId: string, api_version: string): Observable<ActionGroupList> {
			return this.http.get<ActionGroupList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/actionGroups&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get an action group.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} actionGroupName The name of the action group.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {ActionGroupResource} The request succeeded.
		 */
		ActionGroups_Get(resourceGroupName: string, actionGroupName: string, subscriptionId: string, api_version: string): Observable<ActionGroupResource> {
			return this.http.get<ActionGroupResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/actionGroups/' + (actionGroupName == null ? '' : encodeURIComponent(actionGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create a new action group or update an existing one.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} actionGroupName The name of the action group.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @param {ActionGroupResource} requestBody The action group to create or use for the update.
		 * @return {ActionGroupResource} An existing action group was successfully updated.
		 */
		ActionGroups_CreateOrUpdate(resourceGroupName: string, actionGroupName: string, subscriptionId: string, api_version: string, requestBody: ActionGroupResource): Observable<ActionGroupResource> {
			return this.http.put<ActionGroupResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/actionGroups/' + (actionGroupName == null ? '' : encodeURIComponent(actionGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an action group.
		 * Delete subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} actionGroupName The name of the action group.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @return {void} The action group was successfully deleted.
		 */
		ActionGroups_Delete(resourceGroupName: string, actionGroupName: string, subscriptionId: string, api_version: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/actionGroups/' + (actionGroupName == null ? '' : encodeURIComponent(actionGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing action group's tags. To update other fields use the CreateOrUpdate method.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} actionGroupName The name of the action group.
		 * @param {string} api_version Client Api Version.
		 * @param {ActionGroupPatchBody} requestBody Parameters supplied to the operation.
		 * @return {ActionGroupResource} An existing action group was successfully updated.
		 */
		ActionGroups_Update(subscriptionId: string, resourceGroupName: string, actionGroupName: string, api_version: string, requestBody: ActionGroupPatchBody): Observable<ActionGroupResource> {
			return this.http.patch<ActionGroupResource>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/actionGroups/' + (actionGroupName == null ? '' : encodeURIComponent(actionGroupName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable a receiver in an action group. This changes the receiver's status from Disabled to Enabled. This operation is only supported for Email or SMS receivers.
		 * Post subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/microsoft.insights/actionGroups/{actionGroupName}/subscribe
		 * @param {string} resourceGroupName The name of the resource group.
		 * @param {string} actionGroupName The name of the action group.
		 * @param {string} subscriptionId The Azure subscription Id.
		 * @param {string} api_version Client Api Version.
		 * @param {EnableRequest} requestBody The receiver to re-enable.
		 * @return {void} The receiver was successfully enabled.
		 */
		ActionGroups_EnableReceiver(resourceGroupName: string, actionGroupName: string, subscriptionId: string, api_version: string, requestBody: EnableRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/microsoft.insights/actionGroups/' + (actionGroupName == null ? '' : encodeURIComponent(actionGroupName)) + '/subscribe&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

