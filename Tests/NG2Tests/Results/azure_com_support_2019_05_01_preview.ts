import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Input of CheckNameAvailability API. */
	export interface CheckNameAvailabilityInput {

		/**
		 * The resource name to validate
		 * Required
		 */
		name: string;

		/**
		 * The type of resource
		 * Required
		 */
		type: CheckNameAvailabilityInputType;
	}

	/** Input of CheckNameAvailability API. */
	export interface CheckNameAvailabilityInputFormProperties {

		/**
		 * The resource name to validate
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of resource
		 * Required
		 */
		type: FormControl<CheckNameAvailabilityInputType | null | undefined>,
	}
	export function CreateCheckNameAvailabilityInputFormGroup() {
		return new FormGroup<CheckNameAvailabilityInputFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckNameAvailabilityInputType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckNameAvailabilityInputType { 'Microsoft.Support/supportTickets' = 'Microsoft.Support/supportTickets', 'Microsoft.Support/communications' = 'Microsoft.Support/communications' }


	/** Output of check name availability API. */
	export interface CheckNameAvailabilityOutput {

		/** The detailed error message describing why the name is not available. */
		message?: string | null;

		/** Indicates whether the name is available. */
		nameAvailable?: boolean | null;

		/** The reason why the name is not available. */
		reason?: string | null;
	}

	/** Output of check name availability API. */
	export interface CheckNameAvailabilityOutputFormProperties {

		/** The detailed error message describing why the name is not available. */
		message: FormControl<string | null | undefined>,

		/** Indicates whether the name is available. */
		nameAvailable: FormControl<boolean | null | undefined>,

		/** The reason why the name is not available. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateCheckNameAvailabilityOutputFormGroup() {
		return new FormGroup<CheckNameAvailabilityOutputFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			nameAvailable: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object that represents Communication resource */
	export interface CommunicationDetails {

		/** Id of the resource */
		id?: string | null;

		/** Name of the resource */
		name?: string | null;

		/** Describes the properties of a communication resource. */
		properties?: CommunicationDetailsProperties;

		/** Type of the resource 'Microsoft.Support/communications' */
		type?: string | null;
	}

	/** Object that represents Communication resource */
	export interface CommunicationDetailsFormProperties {

		/** Id of the resource */
		id: FormControl<string | null | undefined>,

		/** Name of the resource */
		name: FormControl<string | null | undefined>,

		/** Type of the resource 'Microsoft.Support/communications' */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCommunicationDetailsFormGroup() {
		return new FormGroup<CommunicationDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a communication resource. */
	export interface CommunicationDetailsProperties {

		/**
		 * Body of the communication
		 * Required
		 */
		body: string;

		/** Direction of communication */
		communicationDirection?: CommunicationDetailsPropertiesCommunicationDirection | null;

		/** Communication type */
		communicationType?: CommunicationDetailsPropertiesCommunicationType | null;

		/** Time in UTC (ISO 8601 format) when the communication was created. */
		createdDate?: Date | null;

		/** Email address of the sender */
		sender?: string | null;

		/**
		 * Subject of the communication
		 * Required
		 */
		subject: string;
	}

	/** Describes the properties of a communication resource. */
	export interface CommunicationDetailsPropertiesFormProperties {

		/**
		 * Body of the communication
		 * Required
		 */
		body: FormControl<string | null | undefined>,

		/** Direction of communication */
		communicationDirection: FormControl<CommunicationDetailsPropertiesCommunicationDirection | null | undefined>,

		/** Communication type */
		communicationType: FormControl<CommunicationDetailsPropertiesCommunicationType | null | undefined>,

		/** Time in UTC (ISO 8601 format) when the communication was created. */
		createdDate: FormControl<Date | null | undefined>,

		/** Email address of the sender */
		sender: FormControl<string | null | undefined>,

		/**
		 * Subject of the communication
		 * Required
		 */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateCommunicationDetailsPropertiesFormGroup() {
		return new FormGroup<CommunicationDetailsPropertiesFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			communicationDirection: new FormControl<CommunicationDetailsPropertiesCommunicationDirection | null | undefined>(undefined),
			communicationType: new FormControl<CommunicationDetailsPropertiesCommunicationType | null | undefined>(undefined),
			createdDate: new FormControl<Date | null | undefined>(undefined),
			sender: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CommunicationDetailsPropertiesCommunicationDirection { inbound = 'inbound', outbound = 'outbound' }

	export enum CommunicationDetailsPropertiesCommunicationType { web = 'web', phone = 'phone' }


	/** Collection of Communication resources. */
	export interface CommunicationsListResult {

		/** The URI to fetch the next page of Communication resources. */
		nextLink?: string | null;

		/** List of Communication resources. */
		value?: Array<CommunicationDetails>;
	}

	/** Collection of Communication resources. */
	export interface CommunicationsListResultFormProperties {

		/** The URI to fetch the next page of Communication resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCommunicationsListResultFormGroup() {
		return new FormGroup<CommunicationsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contact information associated with support ticket. */
	export interface ContactProfile {

		/** Additional email addresses listed will be copied on any correspondence about the support ticket. */
		additionalEmailAddresses?: Array<string>;

		/**
		 * Country of the user. This is the ISO 3166-1 alpha-3 code.
		 * Required
		 */
		country: string;

		/**
		 * First name.
		 * Required
		 */
		firstName: string;

		/**
		 * Last name.
		 * Required
		 */
		lastName: string;

		/** Phone number. This is required if preferred contact method is phone. */
		phoneNumber?: string | null;

		/**
		 * Preferred contact method.
		 * Required
		 */
		preferredContactMethod: ContactProfilePreferredContactMethod;

		/**
		 * Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. Learn more at <a  target='_blank' href='https://azure.microsoft.com/support/plans/response/'>Azure Severity and responsiveness</a>. Use the standard language-country code. Valid values are 'en-us' for English, 'zh-hans' for Chinese, 'es-es' for Spanish, 'fr-fr' for French, 'ja-jp' for Japanese, 'ko-kr' for Korean, 'ru-ru' for Russian, 'pt-br' for Portuguese, 'it-it' for Italian, 'zh-tw' for Chinese and 'de-de' for German.
		 * Required
		 */
		preferredSupportLanguage: string;

		/**
		 * Time zone of the user. This is the name of the time zone from <a  target='_blank' href='https://support.microsoft.com/en-us/help/973627/microsoft-time-zone-index-values'>Microsoft Time Zone Index Values</a>.
		 * Required
		 */
		preferredTimeZone: string;

		/**
		 * Primary email address.
		 * Required
		 */
		primaryEmailAddress: string;
	}

	/** Contact information associated with support ticket. */
	export interface ContactProfileFormProperties {

		/**
		 * Country of the user. This is the ISO 3166-1 alpha-3 code.
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * First name.
		 * Required
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * Last name.
		 * Required
		 */
		lastName: FormControl<string | null | undefined>,

		/** Phone number. This is required if preferred contact method is phone. */
		phoneNumber: FormControl<string | null | undefined>,

		/**
		 * Preferred contact method.
		 * Required
		 */
		preferredContactMethod: FormControl<ContactProfilePreferredContactMethod | null | undefined>,

		/**
		 * Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. Learn more at <a  target='_blank' href='https://azure.microsoft.com/support/plans/response/'>Azure Severity and responsiveness</a>. Use the standard language-country code. Valid values are 'en-us' for English, 'zh-hans' for Chinese, 'es-es' for Spanish, 'fr-fr' for French, 'ja-jp' for Japanese, 'ko-kr' for Korean, 'ru-ru' for Russian, 'pt-br' for Portuguese, 'it-it' for Italian, 'zh-tw' for Chinese and 'de-de' for German.
		 * Required
		 */
		preferredSupportLanguage: FormControl<string | null | undefined>,

		/**
		 * Time zone of the user. This is the name of the time zone from <a  target='_blank' href='https://support.microsoft.com/en-us/help/973627/microsoft-time-zone-index-values'>Microsoft Time Zone Index Values</a>.
		 * Required
		 */
		preferredTimeZone: FormControl<string | null | undefined>,

		/**
		 * Primary email address.
		 * Required
		 */
		primaryEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateContactProfileFormGroup() {
		return new FormGroup<ContactProfileFormProperties>({
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			preferredContactMethod: new FormControl<ContactProfilePreferredContactMethod | null | undefined>(undefined, [Validators.required]),
			preferredSupportLanguage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preferredTimeZone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			primaryEmailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ContactProfilePreferredContactMethod { email = 'email', phone = 'phone' }


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

		/** The target of the error. */
		target?: string | null;
	}

	/** The api error details. */
	export interface ServiceErrorFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateServiceErrorFormGroup() {
		return new FormGroup<ServiceErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error details. */
	export interface ServiceErrorDetail {

		/** The error code. */
		code?: string | null;

		/** The error message. */
		message?: string | null;

		/** The target of the error. */
		target?: string | null;
	}

	/** The error details. */
	export interface ServiceErrorDetailFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The target of the error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateServiceErrorDetailFormGroup() {
		return new FormGroup<ServiceErrorDetailFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The operation supported by Microsoft Support RP. */
	export interface Operation {

		/** The object that describes the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation} */
		name?: string | null;
	}

	/** The operation supported by Microsoft Support RP. */
	export interface OperationFormProperties {

		/** The object that describes the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The list of operations supported by Microsoft Support resource provider. */
	export interface OperationsListResult {

		/** The list of operations supported by Microsoft Support resource provider. */
		value?: Array<Operation>;
	}

	/** The list of operations supported by Microsoft Support resource provider. */
	export interface OperationsListResultFormProperties {
	}
	export function CreateOperationsListResultFormGroup() {
		return new FormGroup<OperationsListResultFormProperties>({
		});

	}


	/** ProblemClassification resource object */
	export interface ProblemClassification {

		/** Id of the resource */
		id?: string | null;

		/** Name of the resource */
		name?: string | null;

		/** Details about a problem classification available for an Azure service */
		properties?: ProblemClassificationProperties;

		/** Type of the resource 'Microsoft.Support/problemClassification' */
		type?: string | null;
	}

	/** ProblemClassification resource object */
	export interface ProblemClassificationFormProperties {

		/** Id of the resource */
		id: FormControl<string | null | undefined>,

		/** Name of the resource */
		name: FormControl<string | null | undefined>,

		/** Type of the resource 'Microsoft.Support/problemClassification' */
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemClassificationFormGroup() {
		return new FormGroup<ProblemClassificationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about a problem classification available for an Azure service */
	export interface ProblemClassificationProperties {

		/** Localized name of problem classification. */
		displayName?: string | null;
	}

	/** Details about a problem classification available for an Azure service */
	export interface ProblemClassificationPropertiesFormProperties {

		/** Localized name of problem classification. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateProblemClassificationPropertiesFormGroup() {
		return new FormGroup<ProblemClassificationPropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of ProblemClassification resources */
	export interface ProblemClassificationsListResult {

		/** List of ProblemClassification resources */
		value?: Array<ProblemClassification>;
	}

	/** Collection of ProblemClassification resources */
	export interface ProblemClassificationsListResultFormProperties {
	}
	export function CreateProblemClassificationsListResultFormGroup() {
		return new FormGroup<ProblemClassificationsListResultFormProperties>({
		});

	}


	/** This property is required for providing the region and new quota limits */
	export interface QuotaChangeRequest {

		/** Payload of the quota increase request. */
		payload?: string | null;

		/** Region for which the quota increase request is being made. */
		region?: string | null;
	}

	/** This property is required for providing the region and new quota limits */
	export interface QuotaChangeRequestFormProperties {

		/** Payload of the quota increase request. */
		payload: FormControl<string | null | undefined>,

		/** Region for which the quota increase request is being made. */
		region: FormControl<string | null | undefined>,
	}
	export function CreateQuotaChangeRequestFormGroup() {
		return new FormGroup<QuotaChangeRequestFormProperties>({
			payload: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional set of information required for quota increase support ticket for certain quota types, e.g.: Virtual machine cores. Get complete details about Quota payload support request along with examples at <a target='' href='https://aka.ms/supportrpquotarequestpayload'>Support quota request</a>. */
	export interface QuotaTicketDetails {

		/** Required for certain quota types when there is a sub type that you are requesting quota increase for. Example: Batch */
		quotaChangeRequestSubType?: string | null;

		/** Quota change request version */
		quotaChangeRequestVersion?: string | null;

		/** This property is required for providing the region and new quota limits. */
		quotaChangeRequests?: Array<QuotaChangeRequest>;
	}

	/** Additional set of information required for quota increase support ticket for certain quota types, e.g.: Virtual machine cores. Get complete details about Quota payload support request along with examples at <a target='' href='https://aka.ms/supportrpquotarequestpayload'>Support quota request</a>. */
	export interface QuotaTicketDetailsFormProperties {

		/** Required for certain quota types when there is a sub type that you are requesting quota increase for. Example: Batch */
		quotaChangeRequestSubType: FormControl<string | null | undefined>,

		/** Quota change request version */
		quotaChangeRequestVersion: FormControl<string | null | undefined>,
	}
	export function CreateQuotaTicketDetailsFormGroup() {
		return new FormGroup<QuotaTicketDetailsFormProperties>({
			quotaChangeRequestSubType: new FormControl<string | null | undefined>(undefined),
			quotaChangeRequestVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object that represents a Service resource. */
	export interface Service {

		/** Id of the resource */
		id?: string | null;

		/** Name of the resource */
		name?: string | null;

		/** Details about Azure service available for support ticket creation */
		properties?: ServiceProperties;

		/** Type of the resource 'Microsoft.Support/services' */
		type?: string | null;
	}

	/** Object that represents a Service resource. */
	export interface ServiceFormProperties {

		/** Id of the resource */
		id: FormControl<string | null | undefined>,

		/** Name of the resource */
		name: FormControl<string | null | undefined>,

		/** Type of the resource 'Microsoft.Support/services' */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about Azure service available for support ticket creation */
	export interface ServiceProperties {

		/** Localized name of Azure service */
		displayName?: string | null;
	}

	/** Details about Azure service available for support ticket creation */
	export interface ServicePropertiesFormProperties {

		/** Localized name of Azure service */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateServicePropertiesFormGroup() {
		return new FormGroup<ServicePropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Service Level Agreement details for a support ticket. */
	export interface ServiceLevelAgreement {

		/** Time in UTC (ISO 8601 format) when service level agreement expires. */
		expirationTime?: Date | null;

		/**
		 * Service Level Agreement in minutes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		slaMinutes?: number | null;

		/** Time in UTC (ISO 8601 format) when service level agreement starts. */
		startTime?: Date | null;
	}

	/** Service Level Agreement details for a support ticket. */
	export interface ServiceLevelAgreementFormProperties {

		/** Time in UTC (ISO 8601 format) when service level agreement expires. */
		expirationTime: FormControl<Date | null | undefined>,

		/**
		 * Service Level Agreement in minutes
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		slaMinutes: FormControl<number | null | undefined>,

		/** Time in UTC (ISO 8601 format) when service level agreement starts. */
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateServiceLevelAgreementFormGroup() {
		return new FormGroup<ServiceLevelAgreementFormProperties>({
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			slaMinutes: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Collection of Service resources. */
	export interface ServicesListResult {

		/** List of Service resources */
		value?: Array<Service>;
	}

	/** Collection of Service resources. */
	export interface ServicesListResultFormProperties {
	}
	export function CreateServicesListResultFormGroup() {
		return new FormGroup<ServicesListResultFormProperties>({
		});

	}


	/** Support engineer information. */
	export interface SupportEngineer {

		/** Email address of the Azure Support engineer assigned to the support ticket. */
		emailAddress?: string | null;
	}

	/** Support engineer information. */
	export interface SupportEngineerFormProperties {

		/** Email address of the Azure Support engineer assigned to the support ticket. */
		emailAddress: FormControl<string | null | undefined>,
	}
	export function CreateSupportEngineerFormGroup() {
		return new FormGroup<SupportEngineerFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object that represents SupportTicketDetails resource */
	export interface SupportTicketDetails {

		/** Id of the resource */
		id?: string | null;

		/** Name of the resource */
		name?: string | null;

		/** Describes the properties of a support ticket. */
		properties?: SupportTicketDetailsProperties;

		/** Type of the resource 'Microsoft.Support/supportTickets' */
		type?: string | null;
	}

	/** Object that represents SupportTicketDetails resource */
	export interface SupportTicketDetailsFormProperties {

		/** Id of the resource */
		id: FormControl<string | null | undefined>,

		/** Name of the resource */
		name: FormControl<string | null | undefined>,

		/** Type of the resource 'Microsoft.Support/supportTickets' */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSupportTicketDetailsFormGroup() {
		return new FormGroup<SupportTicketDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the properties of a support ticket. */
	export interface SupportTicketDetailsProperties {

		/**
		 * Contact information associated with support ticket.
		 * Required
		 */
		contactDetails: ContactProfile;

		/** Time in UTC (ISO 8601 format) when support ticket was created. */
		createdDate?: Date | null;

		/**
		 * Detailed description of the question or issue.
		 * Required
		 */
		description: string;

		/** Enrollment ID associated with the support ticket. */
		enrollmentId?: string | null;

		/** Time in UTC (ISO 8601 format) when support ticket was last modified. */
		modifiedDate?: Date | null;

		/** Localized name of problem classification. */
		problemClassificationDisplayName?: string | null;

		/**
		 * Each Azure service has its own set of issue category called problem classification that corresponds to the type of problem you're experiencing. This parameter is the resource id of ProblemClassification resource.
		 * Required
		 */
		problemClassificationId: string;

		/** Time in UTC (ISO 8601 format) when the problem started. */
		problemStartTime?: Date | null;

		/** Indicates if this issue is a production outage. */
		productionOutage?: boolean | null;

		/** Additional set of information required for quota increase support ticket for certain quota types, e.g.: Virtual machine cores. Get complete details about Quota payload support request along with examples at <a target='' href='https://aka.ms/supportrpquotarequestpayload'>Support quota request</a>. */
		quotaTicketDetails?: QuotaTicketDetails;

		/** Indicates if this requires a 24x7 response from Azure. */
		require24X7Response?: boolean | null;

		/** Localized name of Azure service. */
		serviceDisplayName?: string | null;

		/**
		 * This is the resource id of the Azure service resource associated with the support ticket.
		 * Required
		 */
		serviceId: string;

		/** Service Level Agreement details for a support ticket. */
		serviceLevelAgreement?: ServiceLevelAgreement;

		/**
		 * A value that indicates the urgency of the case, which in turn determines the response time according to the service level agreement of the technical support plan you have with Azure.
		 * Required
		 */
		severity: SupportTicketDetailsPropertiesSeverity;

		/** Status of the support ticket. */
		status?: string | null;

		/** Support engineer information. */
		supportEngineer?: SupportEngineer;

		/** Support plan type associated with the support ticket. */
		supportPlanType?: string | null;

		/** System generated support ticket id that is unique. */
		supportTicketId?: string | null;

		/** Additional information for technical support ticket. */
		technicalTicketDetails?: TechnicalTicketDetails;

		/**
		 * Title of the support ticket.
		 * Required
		 */
		title: string;
	}

	/** Describes the properties of a support ticket. */
	export interface SupportTicketDetailsPropertiesFormProperties {

		/** Time in UTC (ISO 8601 format) when support ticket was created. */
		createdDate: FormControl<Date | null | undefined>,

		/**
		 * Detailed description of the question or issue.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/** Enrollment ID associated with the support ticket. */
		enrollmentId: FormControl<string | null | undefined>,

		/** Time in UTC (ISO 8601 format) when support ticket was last modified. */
		modifiedDate: FormControl<Date | null | undefined>,

		/** Localized name of problem classification. */
		problemClassificationDisplayName: FormControl<string | null | undefined>,

		/**
		 * Each Azure service has its own set of issue category called problem classification that corresponds to the type of problem you're experiencing. This parameter is the resource id of ProblemClassification resource.
		 * Required
		 */
		problemClassificationId: FormControl<string | null | undefined>,

		/** Time in UTC (ISO 8601 format) when the problem started. */
		problemStartTime: FormControl<Date | null | undefined>,

		/** Indicates if this issue is a production outage. */
		productionOutage: FormControl<boolean | null | undefined>,

		/** Indicates if this requires a 24x7 response from Azure. */
		require24X7Response: FormControl<boolean | null | undefined>,

		/** Localized name of Azure service. */
		serviceDisplayName: FormControl<string | null | undefined>,

		/**
		 * This is the resource id of the Azure service resource associated with the support ticket.
		 * Required
		 */
		serviceId: FormControl<string | null | undefined>,

		/**
		 * A value that indicates the urgency of the case, which in turn determines the response time according to the service level agreement of the technical support plan you have with Azure.
		 * Required
		 */
		severity: FormControl<SupportTicketDetailsPropertiesSeverity | null | undefined>,

		/** Status of the support ticket. */
		status: FormControl<string | null | undefined>,

		/** Support plan type associated with the support ticket. */
		supportPlanType: FormControl<string | null | undefined>,

		/** System generated support ticket id that is unique. */
		supportTicketId: FormControl<string | null | undefined>,

		/**
		 * Title of the support ticket.
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSupportTicketDetailsPropertiesFormGroup() {
		return new FormGroup<SupportTicketDetailsPropertiesFormProperties>({
			createdDate: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enrollmentId: new FormControl<string | null | undefined>(undefined),
			modifiedDate: new FormControl<Date | null | undefined>(undefined),
			problemClassificationDisplayName: new FormControl<string | null | undefined>(undefined),
			problemClassificationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			problemStartTime: new FormControl<Date | null | undefined>(undefined),
			productionOutage: new FormControl<boolean | null | undefined>(undefined),
			require24X7Response: new FormControl<boolean | null | undefined>(undefined),
			serviceDisplayName: new FormControl<string | null | undefined>(undefined),
			serviceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			severity: new FormControl<SupportTicketDetailsPropertiesSeverity | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined),
			supportPlanType: new FormControl<string | null | undefined>(undefined),
			supportTicketId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SupportTicketDetailsPropertiesSeverity { minimal = 'minimal', moderate = 'moderate', critical = 'critical' }


	/** Additional information for technical support ticket. */
	export interface TechnicalTicketDetails {

		/** This is the resource id of the Azure service resource (For example: A virtual machine resource or an HDInsight resource) for which the support ticket is created. */
		resourceId?: string | null;
	}

	/** Additional information for technical support ticket. */
	export interface TechnicalTicketDetailsFormProperties {

		/** This is the resource id of the Azure service resource (For example: A virtual machine resource or an HDInsight resource) for which the support ticket is created. */
		resourceId: FormControl<string | null | undefined>,
	}
	export function CreateTechnicalTicketDetailsFormGroup() {
		return new FormGroup<TechnicalTicketDetailsFormProperties>({
			resourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object that represents a collection of SupportTicket resources. */
	export interface SupportTicketsListResult {

		/** The URI to fetch the next page of SupportTicket resources. */
		nextLink?: string | null;

		/** List of SupportTicket resources. */
		value?: Array<SupportTicketDetails>;
	}

	/** Object that represents a collection of SupportTicket resources. */
	export interface SupportTicketsListResultFormProperties {

		/** The URI to fetch the next page of SupportTicket resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSupportTicketsListResultFormGroup() {
		return new FormGroup<SupportTicketsListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contact information associated with the support ticket. */
	export interface UpdateContactProfile {

		/** Email addresses listed will be copied on any correspondence about the support ticket */
		additionalEmailAddresses?: Array<string>;

		/** Country of the user. This is the ISO 3166-1 alpha-3 code. */
		country?: string | null;

		/** First name */
		firstName?: string | null;

		/** Last name */
		lastName?: string | null;

		/** Phone number. This is required if preferred contact method is phone. */
		phoneNumber?: string | null;

		/** Preferred contact method */
		preferredContactMethod?: ContactProfilePreferredContactMethod | null;

		/** Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. Learn more at <a  target='_blank' href='https://azure.microsoft.com/support/plans/response/'>Azure Severity and responsiveness</a>. Use the standard language-country code. Valid values are 'en-us' for English, 'zh-hans' for Chinese, 'es-es' for Spanish, 'fr-fr' for French, 'ja-jp' for Japanese, 'ko-kr' for Korean, 'ru-ru' for Russian, 'pt-br' for Portuguese, 'it-it' for Italian, 'zh-tw' for Chinese and 'de-de' for German. */
		preferredSupportLanguage?: string | null;

		/** Time zone of the user. This is the name of the time zone from <a  target='_blank' href='https://support.microsoft.com/en-us/help/973627/microsoft-time-zone-index-values'>Microsoft Time Zone Index Values</a>. */
		preferredTimeZone?: string | null;

		/** Primary email address */
		primaryEmailAddress?: string | null;
	}

	/** Contact information associated with the support ticket. */
	export interface UpdateContactProfileFormProperties {

		/** Country of the user. This is the ISO 3166-1 alpha-3 code. */
		country: FormControl<string | null | undefined>,

		/** First name */
		firstName: FormControl<string | null | undefined>,

		/** Last name */
		lastName: FormControl<string | null | undefined>,

		/** Phone number. This is required if preferred contact method is phone. */
		phoneNumber: FormControl<string | null | undefined>,

		/** Preferred contact method */
		preferredContactMethod: FormControl<ContactProfilePreferredContactMethod | null | undefined>,

		/** Preferred language of support from Azure. Support languages vary based on the severity you choose for your support ticket. Learn more at <a  target='_blank' href='https://azure.microsoft.com/support/plans/response/'>Azure Severity and responsiveness</a>. Use the standard language-country code. Valid values are 'en-us' for English, 'zh-hans' for Chinese, 'es-es' for Spanish, 'fr-fr' for French, 'ja-jp' for Japanese, 'ko-kr' for Korean, 'ru-ru' for Russian, 'pt-br' for Portuguese, 'it-it' for Italian, 'zh-tw' for Chinese and 'de-de' for German. */
		preferredSupportLanguage: FormControl<string | null | undefined>,

		/** Time zone of the user. This is the name of the time zone from <a  target='_blank' href='https://support.microsoft.com/en-us/help/973627/microsoft-time-zone-index-values'>Microsoft Time Zone Index Values</a>. */
		preferredTimeZone: FormControl<string | null | undefined>,

		/** Primary email address */
		primaryEmailAddress: FormControl<string | null | undefined>,
	}
	export function CreateUpdateContactProfileFormGroup() {
		return new FormGroup<UpdateContactProfileFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			preferredContactMethod: new FormControl<ContactProfilePreferredContactMethod | null | undefined>(undefined),
			preferredSupportLanguage: new FormControl<string | null | undefined>(undefined),
			preferredTimeZone: new FormControl<string | null | undefined>(undefined),
			primaryEmailAddress: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates severity and contact details in the support ticket. */
	export interface UpdateSupportTicket {

		/** Contact information associated with the support ticket. */
		contactDetails?: UpdateContactProfile;

		/** Severity level */
		severity?: SupportTicketDetailsPropertiesSeverity | null;
	}

	/** Updates severity and contact details in the support ticket. */
	export interface UpdateSupportTicketFormProperties {

		/** Severity level */
		severity: FormControl<SupportTicketDetailsPropertiesSeverity | null | undefined>,
	}
	export function CreateUpdateSupportTicketFormGroup() {
		return new FormGroup<UpdateSupportTicketFormProperties>({
			severity: new FormControl<SupportTicketDetailsPropertiesSeverity | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This lists all the available Microsoft Support REST API operations.
		 * Get providers/Microsoft.Support/operations
		 * @param {string} api_version Api version
		 * @return {OperationsListResult} Successfully retrieved list of operations.
		 */
		Operations_List(api_version: string): Observable<OperationsListResult> {
			return this.http.get<OperationsListResult>(this.baseUri + 'providers/Microsoft.Support/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the Azure services available for support ticket creation. Here are the Service Ids for **Billing**, **Subscription Management**, and **Service and subscription limits (Quotas)** issues: <br/><table><tr><td><u>Issue type</u></td><td><u>Service Id</u></td></tr><tr><td>Billing</td><td>'/providers/Microsoft.Support/services/517f2da6-78fd-0498-4e22-ad26996b1dfc'</td></tr><tr><td>Subscription Management</td><td>'/providers/Microsoft.Support/services/f3dc5421-79ef-1efa-41a5-42bf3cbb52c6'</td></tr><tr><td>Quota</td><td>'/providers/Microsoft.Support/services/06bfd9d3-516b-d5c6-5802-169c800dec89'</td></tr></table> <br/><br/> For **Technical** issues, select the Service Id that maps to the Azure service/product as displayed in the **Services** drop-down list on the Azure portal's <a target='_blank' href='https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/overview'>New support request</a> page. <br/><br/> Always use the service and it's corresponding problem classification(s) obtained programmatically for support ticket creation. This practice ensures that you always have the most recent set of service and problem classification Ids.
		 * Get providers/Microsoft.Support/services
		 * @param {string} api_version Api version
		 * @return {ServicesListResult} Successfully retrieved list of Azure services available for support.
		 */
		Services_List(api_version: string): Observable<ServicesListResult> {
			return this.http.get<ServicesListResult>(this.baseUri + 'providers/Microsoft.Support/services?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a specific Azure service for support ticket creation.
		 * Get providers/Microsoft.Support/services/{serviceName}
		 * @param {string} serviceName Name of Azure service
		 * @param {string} api_version Api version
		 * @return {Service} Successfully retrieved Azure service for support ticket creation.
		 */
		Services_Get(serviceName: string, api_version: string): Observable<Service> {
			return this.http.get<Service>(this.baseUri + 'providers/Microsoft.Support/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Lists all the problem classifications (categories) available for a specific Azure service.<br/><br/> Always use the service and problem classifications obtained programmatically. This practice ensures that you always have the most recent set of service and problem classification Ids.
		 * Get providers/Microsoft.Support/services/{serviceName}/problemClassifications
		 * @param {string} serviceName Name of Azure service for which the problem classifications need to be retrieved.
		 * @param {string} api_version Api version
		 * @return {ProblemClassificationsListResult} Successfully retrieved list of problem classifications for the specified Azure service.
		 */
		ProblemClassifications_List(serviceName: string, api_version: string): Observable<ProblemClassificationsListResult> {
			return this.http.get<ProblemClassificationsListResult>(this.baseUri + 'providers/Microsoft.Support/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/problemClassifications&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets the details of a specific problem classification for a specific Azure service.
		 * Get providers/Microsoft.Support/services/{serviceName}/problemClassifications/{problemClassificationName}
		 * @param {string} serviceName Name of Azure service available for support.
		 * @param {string} problemClassificationName Name of problem classification.
		 * @param {string} api_version Api version
		 * @return {ProblemClassification} Successfully retrieved problem classification details.
		 */
		ProblemClassifications_Get(serviceName: string, problemClassificationName: string, api_version: string): Observable<ProblemClassification> {
			return this.http.get<ProblemClassification>(this.baseUri + 'providers/Microsoft.Support/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + '/problemClassifications/' + (problemClassificationName == null ? '' : encodeURIComponent(problemClassificationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Check the availability of a resource name. This API should to be used to check the uniqueness of the name for support ticket creation for the selected subscription.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Support/checkNameAvailability
		 * @param {string} subscriptionId Azure subscription id
		 * @param {string} api_version Api version
		 * @param {CheckNameAvailabilityInput} requestBody Input to check.
		 * @return {CheckNameAvailabilityOutput} OK. The request has succeeded.
		 */
		SupportTickets_CheckNameAvailability(subscriptionId: string, api_version: string, requestBody: CheckNameAvailabilityInput): Observable<CheckNameAvailabilityOutput> {
			return this.http.post<CheckNameAvailabilityOutput>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Support/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the support tickets for an Azure subscription. <br/><br/>You can also filter the support tickets by <i>Status</i> or <i>CreatedDate</i> using the $filter parameter. Output will be a paged result with <i>nextLink</i>, using which you can retrieve the next set of support tickets. <br/><br/>Support ticket data is available for 12 months after ticket creation. If a ticket was created more than 12 months ago, a request for data might cause an error.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets
		 * @param {number} top The number of values to return in the collection. Default is 25 and max is 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. We support 'odata v4.0' filter semantics. <a target='_blank' href='https://docs.microsoft.com/odata/concepts/queryoptions-overview'>Learn more</a> <br/><i>Status</i> filter can only be used with 'eq' operator. For <i>CreatedDate</i> filter, the supported operators are 'gt' and 'ge'. When using both filters, combine them using the logical 'AND'.
		 * @param {string} subscriptionId Azure subscription id
		 * @param {string} api_version Api version
		 * @return {SupportTicketsListResult} Successfully retrieved support tickets.
		 */
		SupportTickets_List(top: number | null | undefined, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<SupportTicketsListResult> {
			return this.http.get<SupportTicketsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Support/supportTickets?top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets details for a specific support ticket in an Azure subscription. <br/><br/>Support ticket data is available for 12 months after ticket creation. If a ticket was created more than 12 months ago, a request for data might cause an error.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}
		 * @param {string} supportTicketName Support ticket name
		 * @param {string} subscriptionId Azure subscription id
		 * @param {string} api_version Api version
		 * @return {SupportTicketDetails} Successfully retrieved support ticket.
		 */
		SupportTickets_Get(supportTicketName: string, subscriptionId: string, api_version: string): Observable<SupportTicketDetails> {
			return this.http.get<SupportTicketDetails>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Support/supportTickets/' + (supportTicketName == null ? '' : encodeURIComponent(supportTicketName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates a new support ticket for Quota increase, Technical, Billing, and Subscription Management issues for the specified subscription. <br/><br/>A paid technical support plan is required to create a support ticket using this API. <a href='https://aka.ms/supportticketAPI'>Learn more</a> <br/><br/> Use the Services API to map the right Service Id to the issue type. For example: For billing tickets set *serviceId* to *'/providers/Microsoft.Support/services/517f2da6-78fd-0498-4e22-ad26996b1dfc'*. <br/> For Technical issues, the Service id will map to the Azure service you want to raise a support ticket for. <br/><br/>Always call the Services and ProblemClassifications API to get the most recent set of services and problem categories required for support ticket creation.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}
		 * @param {string} supportTicketName Support ticket name.
		 * @param {string} subscriptionId Azure subscription id
		 * @param {string} api_version Api version
		 * @param {SupportTicketDetails} requestBody Support ticket request payload.
		 * @return {SupportTicketDetails} OK - SupportTicket created successfully
		 */
		SupportTickets_Create(supportTicketName: string, subscriptionId: string, api_version: string, requestBody: SupportTicketDetails): Observable<SupportTicketDetails> {
			return this.http.put<SupportTicketDetails>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Support/supportTickets/' + (supportTicketName == null ? '' : encodeURIComponent(supportTicketName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This API allows you to update the severity level or your contact information in the support ticket. <br/><br/> Note: The severity levels cannot be changed if a support ticket is actively being worked upon by an Azure support engineer. In such a case, contact your support engineer to request severity update by adding a new communication using the Communications API.
		 * Patch subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}
		 * @param {string} supportTicketName Support ticket name
		 * @param {string} subscriptionId Azure subscription id
		 * @param {string} api_version Api version
		 * @param {UpdateSupportTicket} requestBody UpdateSupportTicket object
		 * @return {SupportTicketDetails} Successfully updated support ticket.
		 */
		SupportTickets_Update(supportTicketName: string, subscriptionId: string, api_version: string, requestBody: UpdateSupportTicket): Observable<SupportTicketDetails> {
			return this.http.patch<SupportTicketDetails>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Support/supportTickets/' + (supportTicketName == null ? '' : encodeURIComponent(supportTicketName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check the availability of a resource name. This API should to be used to check the uniqueness of the name for adding a new communication to the support ticket.
		 * Post subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/checkNameAvailability
		 * @param {string} supportTicketName Support ticket name
		 * @param {string} subscriptionId Azure subscription id
		 * @param {string} api_version Api version
		 * @param {CheckNameAvailabilityInput} requestBody Input to check
		 * @return {CheckNameAvailabilityOutput} OK. The request has succeeded.
		 */
		Communications_CheckNameAvailability(supportTicketName: string, subscriptionId: string, api_version: string, requestBody: CheckNameAvailabilityInput): Observable<CheckNameAvailabilityOutput> {
			return this.http.post<CheckNameAvailabilityOutput>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Support/supportTickets/' + (supportTicketName == null ? '' : encodeURIComponent(supportTicketName)) + '/checkNameAvailability&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all communications (attachments not included) for a support ticket. <br/></br> You can also filter support ticket communications by <i>CreatedDate</i>�or <i>CommunicationType</i> using the $filter parameter. The only type of communication supported today is <i>Web</i>. Output will be a paged result with <i>nextLink</i>, using which you can retrieve the next set of Communication results. <br/><br/> Support ticket data is available for 12 months after ticket creation. If a ticket was created more than 12 months ago, a request for data might cause an error.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications
		 * @param {string} supportTicketName Support ticket name
		 * @param {number} top The number of values to return in the collection. Default is 10 and max is 10.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} filter The filter to apply on the operation. You can filter by communicationType and createdDate properties. CommunicationType supports Equals ('eq') operator and createdDate supports Greater Than ('gt') and Greater Than or Equals ('ge') operators. You may combine the CommunicationType and CreatedDate filters by Logical And ('and') operator.
		 * @param {string} subscriptionId Azure subscription id
		 * @param {string} api_version Api version
		 * @return {CommunicationsListResult} Successfully retrieved communications for a support ticket.
		 */
		Communications_List(supportTicketName: string, top: number | null | undefined, filter: string | null | undefined, subscriptionId: string, api_version: string): Observable<CommunicationsListResult> {
			return this.http.get<CommunicationsListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Support/supportTickets/' + (supportTicketName == null ? '' : encodeURIComponent(supportTicketName)) + '/communications&top=' + top + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns details of a specific communication in a support ticket.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName}
		 * @param {string} supportTicketName Support ticket name
		 * @param {string} communicationName Communication name
		 * @param {string} subscriptionId Azure subscription id
		 * @param {string} api_version Api version
		 * @return {CommunicationDetails} Successfully retrieved communication details.
		 */
		Communications_Get(supportTicketName: string, communicationName: string, subscriptionId: string, api_version: string): Observable<CommunicationDetails> {
			return this.http.get<CommunicationDetails>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Support/supportTickets/' + (supportTicketName == null ? '' : encodeURIComponent(supportTicketName)) + '/communications/' + (communicationName == null ? '' : encodeURIComponent(communicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Adds a new customer communication to an Azure support ticket. Adding attachments are not currently supported via the API. <br/>To add a file to a support ticket, visit the <a target='_blank' href='https://portal.azure.com/#blade/Microsoft_Azure_Support/HelpAndSupportBlade/managesupportrequest'>Manage support ticket</a> page in the Azure portal, select the support ticket, and use the file upload control to add a new file.
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Support/supportTickets/{supportTicketName}/communications/{communicationName}
		 * @param {string} supportTicketName Support ticket name
		 * @param {string} communicationName Communication name
		 * @param {string} subscriptionId Azure subscription id
		 * @param {string} api_version Api version
		 * @param {CommunicationDetails} requestBody Communication object
		 * @return {CommunicationDetails} OK - Communication created successfully.
		 */
		Communications_Create(supportTicketName: string, communicationName: string, subscriptionId: string, api_version: string, requestBody: CommunicationDetails): Observable<CommunicationDetails> {
			return this.http.put<CommunicationDetails>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Support/supportTickets/' + (supportTicketName == null ? '' : encodeURIComponent(supportTicketName)) + '/communications/' + (communicationName == null ? '' : encodeURIComponent(communicationName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

