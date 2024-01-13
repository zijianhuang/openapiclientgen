import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The actions for auto quota increase. */
	export interface Actions {

		/** The email actions for auto quota increase. */
		emailActions?: any;

		/** The phone actions for auto quota increase. */
		phoneActions?: any;
	}

	/** The actions for auto quota increase. */
	export interface ActionsFormProperties {

		/** The email actions for auto quota increase. */
		emailActions: FormControl<any | null | undefined>,

		/** The phone actions for auto quota increase. */
		phoneActions: FormControl<any | null | undefined>,
	}
	export function CreateActionsFormGroup() {
		return new FormGroup<ActionsFormProperties>({
			emailActions: new FormControl<any | null | undefined>(undefined),
			phoneActions: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The Auto quota increase state. */
	export enum AqiState { enabled = 0, disabled = 1 }


	/** Auto Quota Increase settings. */
	export interface AutoQuotaIncreaseDetail {

		/** The subscription Id. */
		id?: string | null;

		/** The name of the auto quota increase. */
		name?: string | null;

		/** Actions for auto quota increase. */
		properties?: AutoQuotaIncreaseSettings;

		/** The type of the resource */
		type?: string | null;
	}

	/** Auto Quota Increase settings. */
	export interface AutoQuotaIncreaseDetailFormProperties {

		/** The subscription Id. */
		id: FormControl<string | null | undefined>,

		/** The name of the auto quota increase. */
		name: FormControl<string | null | undefined>,

		/** The type of the resource */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAutoQuotaIncreaseDetailFormGroup() {
		return new FormGroup<AutoQuotaIncreaseDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Actions for auto quota increase. */
	export interface AutoQuotaIncreaseSettings {

		/** The actions for auto quota increase. */
		onFailure?: Actions;

		/** The actions for auto quota increase. */
		onSuccess?: Actions;

		/** Settings for auto quota increase. */
		settings?: AqiSettings;

		/** The SupportRequest action. */
		supportTicketAction?: SupportRequestAction;
	}

	/** Actions for auto quota increase. */
	export interface AutoQuotaIncreaseSettingsFormProperties {
	}
	export function CreateAutoQuotaIncreaseSettingsFormGroup() {
		return new FormGroup<AutoQuotaIncreaseSettingsFormProperties>({
		});

	}


	/** Settings for auto quota increase. */
	export interface AqiSettings {

		/** The Auto quota increase state. */
		autoQuotaIncreaseState?: AqiState;
	}

	/** Settings for auto quota increase. */
	export interface AqiSettingsFormProperties {

		/** The Auto quota increase state. */
		autoQuotaIncreaseState: FormControl<AqiState | null | undefined>,
	}
	export function CreateAqiSettingsFormGroup() {
		return new FormGroup<AqiSettingsFormProperties>({
			autoQuotaIncreaseState: new FormControl<AqiState | null | undefined>(undefined),
		});

	}


	/** The SupportRequest action. */
	export interface SupportRequestAction {

		/** The alternate email address of the recipient. */
		alternateEmailAddresses?: Array<string>;

		/** The Auto quota increase state. */
		autoQuotaIncreaseState?: AqiState;

		/** The country of the recipient. */
		country?: string | null;

		/** The first name of the recipient. */
		firstName?: string | null;

		/** The last name of the recipient. */
		lastName?: string | null;

		/** The phone number of the recipient. */
		phoneNumber?: string | null;

		/** The contact method. */
		preferredContactMethod?: ContactMethod;

		/** The primary email addresses of the recipients. */
		primaryEmailAddress?: string | null;

		/** The Severity types. */
		severity?: SeverityTypes;

		/** The support language. */
		supportLanguage?: string | null;
	}

	/** The SupportRequest action. */
	export interface SupportRequestActionFormProperties {

		/** The Auto quota increase state. */
		autoQuotaIncreaseState: FormControl<AqiState | null | undefined>,

		/** The country of the recipient. */
		country: FormControl<string | null | undefined>,

		/** The first name of the recipient. */
		firstName: FormControl<string | null | undefined>,

		/** The last name of the recipient. */
		lastName: FormControl<string | null | undefined>,

		/** The phone number of the recipient. */
		phoneNumber: FormControl<string | null | undefined>,

		/** The contact method. */
		preferredContactMethod: FormControl<ContactMethod | null | undefined>,

		/** The primary email addresses of the recipients. */
		primaryEmailAddress: FormControl<string | null | undefined>,

		/** The Severity types. */
		severity: FormControl<SeverityTypes | null | undefined>,

		/** The support language. */
		supportLanguage: FormControl<string | null | undefined>,
	}
	export function CreateSupportRequestActionFormGroup() {
		return new FormGroup<SupportRequestActionFormProperties>({
			autoQuotaIncreaseState: new FormControl<AqiState | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			preferredContactMethod: new FormControl<ContactMethod | null | undefined>(undefined),
			primaryEmailAddress: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<SeverityTypes | null | undefined>(undefined),
			supportLanguage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The contact method. */
	export enum ContactMethod { Email = 0, Phone = 1 }


	/** Quota change requests information. */
	export interface CreateGenericQuotaRequestParameters {

		/** Quota change requests. */
		value?: Array<CurrentQuotaLimitBase>;
	}

	/** Quota change requests information. */
	export interface CreateGenericQuotaRequestParametersFormProperties {
	}
	export function CreateCreateGenericQuotaRequestParametersFormGroup() {
		return new FormGroup<CreateGenericQuotaRequestParametersFormProperties>({
		});

	}


	/** Quota limits. */
	export interface CurrentQuotaLimitBase {

		/** The current resource usages information. */
		currentValue?: number | null;

		/** The quota limit. */
		limit?: number | null;

		/** Name of the resource provide by the resource Provider. Please use this name property for quotaRequests. */
		name?: any;

		/** Additional properties for the specific resource provider. */
		properties?: string | null;

		/** The quota period over which the usage values are summarized, such as - P1D (Per one day), PT1M (Per one minute), PT1S (Per one second). This parameter is optional because, for some resources like compute, the period doesn’t matter. */
		quotaPeriod?: string | null;

		/** The resource types. */
		resourceType?: ResourceTypesName;

		/** The units of the limit, such as - Count, Bytes, etc. Use the unit field provided in the Get quota response. */
		unit?: string | null;
	}

	/** Quota limits. */
	export interface CurrentQuotaLimitBaseFormProperties {

		/** The current resource usages information. */
		currentValue: FormControl<number | null | undefined>,

		/** The quota limit. */
		limit: FormControl<number | null | undefined>,

		/** Name of the resource provide by the resource Provider. Please use this name property for quotaRequests. */
		name: FormControl<any | null | undefined>,

		/** Additional properties for the specific resource provider. */
		properties: FormControl<string | null | undefined>,

		/** The quota period over which the usage values are summarized, such as - P1D (Per one day), PT1M (Per one minute), PT1S (Per one second). This parameter is optional because, for some resources like compute, the period doesn’t matter. */
		quotaPeriod: FormControl<string | null | undefined>,

		/** The resource types. */
		resourceType: FormControl<ResourceTypesName | null | undefined>,

		/** The units of the limit, such as - Count, Bytes, etc. Use the unit field provided in the Get quota response. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateCurrentQuotaLimitBaseFormGroup() {
		return new FormGroup<CurrentQuotaLimitBaseFormProperties>({
			currentValue: new FormControl<number | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<any | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			quotaPeriod: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<ResourceTypesName | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Quota limits. */
	export interface CurrentQuotaLimit {

		/** The quota request status details. */
		properties?: QuotaRequestStatusDetails;

		/** Quota limits. */
		quotaInformation?: CurrentQuotaLimitBase;
	}

	/** Quota limits. */
	export interface CurrentQuotaLimitFormProperties {
	}
	export function CreateCurrentQuotaLimitFormGroup() {
		return new FormGroup<CurrentQuotaLimitFormProperties>({
		});

	}


	/** The quota request status details. */
	export interface QuotaRequestStatusDetails {

		/** A user friendly message. */
		message?: string | null;

		/** The quota request status. */
		provisioningState?: QuotaRequestState;
	}

	/** The quota request status details. */
	export interface QuotaRequestStatusDetailsFormProperties {

		/** A user friendly message. */
		message: FormControl<string | null | undefined>,

		/** The quota request status. */
		provisioningState: FormControl<QuotaRequestState | null | undefined>,
	}
	export function CreateQuotaRequestStatusDetailsFormGroup() {
		return new FormGroup<QuotaRequestStatusDetailsFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<QuotaRequestState | null | undefined>(undefined),
		});

	}


	/** Email Action. */
	export interface EmailAction {

		/** The email address for the action. */
		emailAddress?: string | null;
	}

	/** Email Action. */
	export interface EmailActionFormProperties {

		/** The email address for the action. */
		emailAddress: FormControl<string | null | undefined>,
	}
	export function CreateEmailActionFormGroup() {
		return new FormGroup<EmailActionFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The email actions. */
	export interface EmailActions {

		/** The list of actions based on the success or failure of automatic quota increase action. */
		value?: Array<EmailAction>;
	}

	/** The email actions. */
	export interface EmailActionsFormProperties {
	}
	export function CreateEmailActionsFormGroup() {
		return new FormGroup<EmailActionsFormProperties>({
		});

	}


	/** The api error. */
	export interface ExceptionResponse {

		/** The api error details. */
		error?: ServiceError;
	}

	/** The api error. */
	export interface ExceptionResponseFormProperties {
	}
	export function CreateExceptionResponseFormGroup() {
		return new FormGroup<ExceptionResponseFormProperties>({
		});

	}


	/** The api error details. */
	export interface ServiceError {

		/** The error code. */
		code?: string | null;

		/** The list of error details. */
		details?: Array<ServiceErrorDetail>;

		/** The error message. */
		message?: string | null;
	}

	/** The api error details. */
	export interface ServiceErrorFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateServiceErrorFormGroup() {
		return new FormGroup<ServiceErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error details. */
	export interface ServiceErrorDetail {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;
	}

	/** The error details. */
	export interface ServiceErrorDetailFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateServiceErrorDetailFormGroup() {
		return new FormGroup<ServiceErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The actions for auto quota increase. */
	export interface OnFailure {

		/** The email actions for auto quota increase. */
		emailActions?: any;

		/** The phone actions for auto quota increase. */
		phoneActions?: any;
	}

	/** The actions for auto quota increase. */
	export interface OnFailureFormProperties {

		/** The email actions for auto quota increase. */
		emailActions: FormControl<any | null | undefined>,

		/** The phone actions for auto quota increase. */
		phoneActions: FormControl<any | null | undefined>,
	}
	export function CreateOnFailureFormGroup() {
		return new FormGroup<OnFailureFormProperties>({
			emailActions: new FormControl<any | null | undefined>(undefined),
			phoneActions: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** The actions for auto quota increase. */
	export interface OnSuccess {

		/** The email actions for auto quota increase. */
		emailActions?: any;

		/** The phone actions for auto quota increase. */
		phoneActions?: any;
	}

	/** The actions for auto quota increase. */
	export interface OnSuccessFormProperties {

		/** The email actions for auto quota increase. */
		emailActions: FormControl<any | null | undefined>,

		/** The phone actions for auto quota increase. */
		phoneActions: FormControl<any | null | undefined>,
	}
	export function CreateOnSuccessFormGroup() {
		return new FormGroup<OnSuccessFormProperties>({
			emailActions: new FormControl<any | null | undefined>(undefined),
			phoneActions: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Phone Action. */
	export interface PhoneAction {

		/** The phone number for the action. */
		phoneNumber?: string | null;

		/** The contact method. */
		preferredChannel?: ContactMethod;
	}

	/** Phone Action. */
	export interface PhoneActionFormProperties {

		/** The phone number for the action. */
		phoneNumber: FormControl<string | null | undefined>,

		/** The contact method. */
		preferredChannel: FormControl<ContactMethod | null | undefined>,
	}
	export function CreatePhoneActionFormGroup() {
		return new FormGroup<PhoneActionFormProperties>({
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			preferredChannel: new FormControl<ContactMethod | null | undefined>(undefined),
		});

	}


	/** Quota limits. */
	export interface QuotaLimits {

		/** The uri to fetch the next page of quota limits. When there are no more pages, this is null. */
		nextLink?: string | null;

		/** List of Quota limits. */
		value?: Array<CurrentQuotaLimitBase>;
	}

	/** Quota limits. */
	export interface QuotaLimitsFormProperties {

		/** The uri to fetch the next page of quota limits. When there are no more pages, this is null. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateQuotaLimitsFormGroup() {
		return new FormGroup<QuotaLimitsFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Quota limits request response. */
	export interface QuotaLimitsResponse {

		/** The uri to fetch the next page of quota limits. When there are no more pages, this is null. */
		nextLink?: string | null;

		/** List of Quota limits with the quota request status. */
		value?: Array<CurrentQuotaLimit>;
	}

	/** Quota limits request response. */
	export interface QuotaLimitsResponseFormProperties {

		/** The uri to fetch the next page of quota limits. When there are no more pages, this is null. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateQuotaLimitsResponseFormGroup() {
		return new FormGroup<QuotaLimitsResponseFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the quota Request. */
	export interface QuotaRequestDetails {

		/** The quota request Id. */
		id?: string | null;

		/** The name of the quota request. */
		name?: string | null;

		/** The details of quota request. */
		properties?: QuotaRequestProperties;

		/** Type of resource. "Microsoft.Capacity/ServiceLimits" */
		type?: string | null;
	}

	/** The details of the quota Request. */
	export interface QuotaRequestDetailsFormProperties {

		/** The quota request Id. */
		id: FormControl<string | null | undefined>,

		/** The name of the quota request. */
		name: FormControl<string | null | undefined>,

		/** Type of resource. "Microsoft.Capacity/ServiceLimits" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateQuotaRequestDetailsFormGroup() {
		return new FormGroup<QuotaRequestDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of quota request. */
	export interface QuotaRequestProperties {

		/** User friendly status message. */
		message?: string | null;

		/** The quota request status. */
		provisioningState?: QuotaRequestState;

		/** The quota request submit time. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard. */
		requestSubmitTime?: Date | null;

		/** The quotaRequests. */
		value?: Array<SubRequest>;
	}

	/** The details of quota request. */
	export interface QuotaRequestPropertiesFormProperties {

		/** User friendly status message. */
		message: FormControl<string | null | undefined>,

		/** The quota request status. */
		provisioningState: FormControl<QuotaRequestState | null | undefined>,

		/** The quota request submit time. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard. */
		requestSubmitTime: FormControl<Date | null | undefined>,
	}
	export function CreateQuotaRequestPropertiesFormGroup() {
		return new FormGroup<QuotaRequestPropertiesFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<QuotaRequestState | null | undefined>(undefined),
			requestSubmitTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The sub-request submitted with the quota request. */
	export interface SubRequest {

		/** The Resource limit. */
		limit?: number | null;

		/** User friendly status message. */
		message?: string | null;

		/** The Resource name. */
		name?: any;

		/** The quota request status. */
		provisioningState?: QuotaRequestState;

		/** Resource type for which the quota check was made. */
		resourceType?: string | null;

		/** Sub request id for individual request. */
		subRequestId?: string | null;

		/** The units of the limit, such as - Count, Bytes, etc. Use the unit field provided in the Get quota response. */
		unit?: string | null;
	}

	/** The sub-request submitted with the quota request. */
	export interface SubRequestFormProperties {

		/** The Resource limit. */
		limit: FormControl<number | null | undefined>,

		/** User friendly status message. */
		message: FormControl<string | null | undefined>,

		/** The Resource name. */
		name: FormControl<any | null | undefined>,

		/** The quota request status. */
		provisioningState: FormControl<QuotaRequestState | null | undefined>,

		/** Resource type for which the quota check was made. */
		resourceType: FormControl<string | null | undefined>,

		/** Sub request id for individual request. */
		subRequestId: FormControl<string | null | undefined>,

		/** The units of the limit, such as - Count, Bytes, etc. Use the unit field provided in the Get quota response. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateSubRequestFormGroup() {
		return new FormGroup<SubRequestFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<any | null | undefined>(undefined),
			provisioningState: new FormControl<QuotaRequestState | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			subRequestId: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Quota requests information. */
	export interface QuotaRequestDetailsList {

		/** The uri to fetch the next page of quota limits. When there are no more pages, this is null. */
		nextLink?: string | null;

		/** The quota Requests. */
		value?: Array<QuotaRequestDetails>;
	}

	/** Quota requests information. */
	export interface QuotaRequestDetailsListFormProperties {

		/** The uri to fetch the next page of quota limits. When there are no more pages, this is null. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateQuotaRequestDetailsListFormGroup() {
		return new FormGroup<QuotaRequestDetailsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Quota submit request response */
	export interface QuotaRequestOneResourceSubmitResponse {

		/** The quota request Id. */
		id?: string | null;

		/** The name of the quota request. */
		name?: string | null;

		/** The details of quota request. */
		properties?: QuotaRequestOneResourceProperties;

		/** Type of resource. "Microsoft.Capacity/ServiceLimits" */
		type?: string | null;
	}

	/** Quota submit request response */
	export interface QuotaRequestOneResourceSubmitResponseFormProperties {

		/** The quota request Id. */
		id: FormControl<string | null | undefined>,

		/** The name of the quota request. */
		name: FormControl<string | null | undefined>,

		/** Type of resource. "Microsoft.Capacity/ServiceLimits" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateQuotaRequestOneResourceSubmitResponseFormGroup() {
		return new FormGroup<QuotaRequestOneResourceSubmitResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of quota request. */
	export interface QuotaRequestOneResourceProperties {

		/** User friendly status message. */
		message?: string | null;

		/** Quota limits. */
		properties?: CurrentQuotaLimitBase;

		/** The quota request status. */
		provisioningState?: QuotaRequestState;

		/** The quota request submit time. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard. */
		requestSubmitTime?: Date | null;
	}

	/** The details of quota request. */
	export interface QuotaRequestOneResourcePropertiesFormProperties {

		/** User friendly status message. */
		message: FormControl<string | null | undefined>,

		/** The quota request status. */
		provisioningState: FormControl<QuotaRequestState | null | undefined>,

		/** The quota request submit time. The date conforms to the following format: yyyy-MM-ddTHH:mm:ssZ as specified by the ISO 8601 standard. */
		requestSubmitTime: FormControl<Date | null | undefined>,
	}
	export function CreateQuotaRequestOneResourcePropertiesFormGroup() {
		return new FormGroup<QuotaRequestOneResourcePropertiesFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<QuotaRequestState | null | undefined>(undefined),
			requestSubmitTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The quota request status. */
	export enum QuotaRequestState { Accepted = 0, Invalid = 1, Succeeded = 2, Failed = 3, InProgress = 4 }


	/** Quota submit request response */
	export interface QuotaRequestSubmitResponse {

		/** The quota request Id. */
		id?: string | null;

		/** The name of the quota request. */
		name?: string | null;

		/** The details of quota request. */
		properties?: QuotaRequestProperties;

		/** Type of resource. "Microsoft.Capacity/serviceLimits" */
		type?: string | null;
	}

	/** Quota submit request response */
	export interface QuotaRequestSubmitResponseFormProperties {

		/** The quota request Id. */
		id: FormControl<string | null | undefined>,

		/** The name of the quota request. */
		name: FormControl<string | null | undefined>,

		/** Type of resource. "Microsoft.Capacity/serviceLimits" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateQuotaRequestSubmitResponseFormGroup() {
		return new FormGroup<QuotaRequestSubmitResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The quota request submit response with request id. */
	export interface QuotaRequestSubmitResponse201 {

		/** The quota request id. Please use the requestId to check the request status. */
		id?: string | null;

		/** The operation Id */
		name?: string | null;

		/** The quota request status details. */
		properties?: QuotaRequestStatusDetails;

		/** The resource type */
		type?: string | null;
	}

	/** The quota request submit response with request id. */
	export interface QuotaRequestSubmitResponse201FormProperties {

		/** The quota request id. Please use the requestId to check the request status. */
		id: FormControl<string | null | undefined>,

		/** The operation Id */
		name: FormControl<string | null | undefined>,

		/** The resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateQuotaRequestSubmitResponse201FormGroup() {
		return new FormGroup<QuotaRequestSubmitResponse201FormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource types. */
	export enum ResourceTypesName { standard = 0, dedicated = 1, shared = 2, serviceSpecific = 3 }


	/** The Severity types. */
	export enum SeverityTypes { Critical = 0, Moderate = 1, Minimal = 2 }


	/** The support contact types. */
	export enum SupportContactTypes { email = 0, phone = 1, chat = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * For the specified subscription, gets the Auto Quota Increase enrollment status.
		 * Gets the Auto Quota Increase enrollment details for the specified subscription.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Capacity/autoQuotaIncrease
		 * @param {string} subscriptionId Azure subscription id.
		 * @param {string} api_version Api version.
		 * @return {AutoQuotaIncreaseDetail} Ok. Returning the properties of auto quota increase .
		 */
		AutoQuotaIncrease_GetProperties(subscriptionId: string, api_version: string): Observable<AutoQuotaIncreaseDetail> {
			return this.http.get<AutoQuotaIncreaseDetail>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Capacity/autoQuotaIncrease&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * For the specified subscription, sets the Auto Quota Increase enrollment properties.
		 * Sets the Auto Quota Increase enrollment properties for the specified subscription.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Capacity/autoQuotaIncrease
		 * @param {string} subscriptionId Azure subscription id.
		 * @param {string} api_version Api version.
		 * @param {AutoQuotaIncreaseDetail} requestBody Auto Quota increase request payload.
		 * @return {AutoQuotaIncreaseDetail} Ok. Returning the updated status of auto quota increase request.
		 */
		AutoQuotaIncrease_Create(subscriptionId: string, api_version: string, requestBody: AutoQuotaIncreaseDetail): Observable<AutoQuotaIncreaseDetail> {
			return this.http.put<AutoQuotaIncreaseDetail>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Capacity/autoQuotaIncrease&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the current quota limit and usages for all the resources by the resource provider at the specified location.
		 * This API gets the current quota limits and usages for the resource provider for the specified location. This response can be used to submit quotaRequests.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimits
		 * @param {string} subscriptionId Azure subscription id.
		 * @param {string} providerId Azure resource Provider id.
		 * @param {string} location Azure region.
		 * @param {string} api_version Api version.
		 * @return {QuotaLimits} OK. Quota information will be returned as response with pagination.
		 */
		Quotas_listStatus(subscriptionId: string, providerId: string, location: string, api_version: string): Observable<QuotaLimits> {
			return this.http.get<QuotaLimits>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Capacity/resourceProviders/' + (providerId == null ? '' : encodeURIComponent(providerId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/serviceLimits&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the current quota limit and usages for the resource provider for the specified location for the specific resource in the parameter.
		 * This API gets the current quota limit and usages for the specific resource for resource provider for the specified location. This response can be used to submit quotaRequests.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimits/{resourceName}
		 * @param {string} subscriptionId Azure subscription id.
		 * @param {string} providerId Azure resource Provider id.
		 * @param {string} location Azure region.
		 * @param {string} api_version Api version.
		 * @param {string} resourceName The Resource name for the specific resource provider, such as SKU name for Microsoft.Compute, pool for Microsoft.Batch.
		 * @return {CurrentQuotaLimitBase} OK. Quota information will be returned as response with pagination.
		 */
		Quota_listStatus(subscriptionId: string, providerId: string, location: string, api_version: string, resourceName: string): Observable<CurrentQuotaLimitBase> {
			return this.http.get<CurrentQuotaLimitBase>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Capacity/resourceProviders/' + (providerId == null ? '' : encodeURIComponent(providerId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/serviceLimits/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Submits a Quota Request for a resource provider at the specified location for the specific resource in the parameter.
		 * Submits Quota change request for a resource provider for the specified location for the specific resource in the parameter. To use, first make a Get request to get quota information. This information consists of a list of resources and information regarding those resources. For all the resources in that list which require an update to their quotas, update their limit fields in the response from the Get request to their new values. Then, submit this updated JSON object to this quota request API. This will update the quota to the values specified. The location header in the response will be used to track the status of the quota request. Please check the provisioningState field in the response.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimits/{resourceName}
		 * @param {string} subscriptionId Azure subscription id.
		 * @param {string} providerId Azure resource Provider id.
		 * @param {string} location Azure region.
		 * @param {string} resourceName The Resource name for the specific resource provider, such as SKU name for Microsoft.Compute, pool for Microsoft.Batch.
		 * @param {string} api_version Api version.
		 * @param {CurrentQuotaLimitBase} requestBody Quota requests payload.
		 * @return {QuotaRequestOneResourceSubmitResponse} OK. Returns Quota requests details.
		 */
		QuotaRequest_Create(subscriptionId: string, providerId: string, location: string, resourceName: string, api_version: string, requestBody: CurrentQuotaLimitBase): Observable<QuotaRequestOneResourceSubmitResponse> {
			return this.http.put<QuotaRequestOneResourceSubmitResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Capacity/resourceProviders/' + (providerId == null ? '' : encodeURIComponent(providerId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/serviceLimits/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Submits a Quota Request for a resource provider at the specified location for the specific resource in the parameter.
		 * Submits Quota change request for a resource provider for the specified location for the specific resource in the parameter. To use, first make a Get request to get quota information. This information consists of a list of resources and information regarding those resources. For all the resources in that list which require an update to their quotas, update their limit fields in the response from the Get request to their new values. Then, submit this updated JSON object to this quota request API. This will update the quota to the values specified. The location header in the response will be used to track the status of the quota request. Please check the provisioningState field in the response.
		 * Patch subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimits/{resourceName}
		 * @param {string} subscriptionId Azure subscription id.
		 * @param {string} providerId Azure resource Provider id.
		 * @param {string} location Azure region.
		 * @param {string} resourceName The Resource name for the specific resource provider, such as SKU name for Microsoft.Compute, pool for Microsoft.Batch.
		 * @param {string} api_version Api version.
		 * @param {CurrentQuotaLimitBase} requestBody Quota requests payload.
		 * @return {QuotaRequestOneResourceSubmitResponse} OK. Returns Quota requests details.
		 */
		QuotaRequest_Update(subscriptionId: string, providerId: string, location: string, resourceName: string, api_version: string, requestBody: CurrentQuotaLimitBase): Observable<QuotaRequestOneResourceSubmitResponse> {
			return this.http.patch<QuotaRequestOneResourceSubmitResponse>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Capacity/resourceProviders/' + (providerId == null ? '' : encodeURIComponent(providerId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/serviceLimits/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * For the specified location and resource Provider, gets the quota requests under the subscription over the time
		 * period of one year ago from now to one year back, based on the filter specified.
		 * For the specified location and Resource provider gets the current quota requests under the subscription over the time period of one year ago from now to one year back. oData filter can be used to select quota requests.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimitsRequests
		 * @param {string} subscriptionId Azure subscription id.
		 * @param {string} api_version Api version.
		 * @param {string} providerId Azure resource Provider id.
		 * @param {string} location Azure region.
		 * @param {string} filter | Field                    | Supported operators  
		 * |---------------------|------------------------
		 * |requestSubmitTime | ge, le, eq, gt, lt
		 * @param {number} top Number of records to return.
		 * @param {string} skiptoken Skiptoken is only used if a previous operation returned a partial result. If a previous response contains a nextLink element, the value of the nextLink element will include a skiptoken parameter that specifies a starting point to use for subsequent calls
		 * @return {QuotaRequestDetailsList} Ok. Sending Quota request status and details
		 */
		QuotaRequests_ListStatus(subscriptionId: string, api_version: string, providerId: string, location: string, filter: string | null | undefined, top: number | null | undefined, skiptoken: string | null | undefined): Observable<QuotaRequestDetailsList> {
			return this.http.get<QuotaRequestDetailsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Capacity/resourceProviders/' + (providerId == null ? '' : encodeURIComponent(providerId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/serviceLimitsRequests&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&top=' + top + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * Gets the Quota request status by requestId, for the specified resource provider at specified location.
		 * Gets the QuotaRequest details and status by the quota requestId for the resources for the resource provider at a specific location. The requestId is returned as response to the Put requests for serviceLimits.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Capacity/resourceProviders/{providerId}/locations/{location}/serviceLimitsRequests/{id}
		 * @param {string} subscriptionId Azure subscription id.
		 * @param {string} api_version Api version.
		 * @param {string} providerId Azure resource Provider id.
		 * @param {string} location Azure region.
		 * @param {string} id Quota Request id.
		 * @return {QuotaRequestDetails} Ok. Returning the status for the quota request .
		 */
		QuotaRequests_GetStatus(subscriptionId: string, api_version: string, providerId: string, location: string, id: string): Observable<QuotaRequestDetails> {
			return this.http.get<QuotaRequestDetails>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Capacity/resourceProviders/' + (providerId == null ? '' : encodeURIComponent(providerId)) + '/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/serviceLimitsRequests/' + (id == null ? '' : encodeURIComponent(id)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

