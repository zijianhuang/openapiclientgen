import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Security assessment metadata */
	export interface SecurityAssessmentMetadata {

		/** Describes properties of an assessment metadata. */
		properties?: SecurityAssessmentMetadataProperties;
	}

	/** Security assessment metadata */
	export interface SecurityAssessmentMetadataFormProperties {
	}
	export function CreateSecurityAssessmentMetadataFormGroup() {
		return new FormGroup<SecurityAssessmentMetadataFormProperties>({
		});

	}


	/** Describes properties of an assessment metadata. */
	export interface SecurityAssessmentMetadataProperties {

		/**
		 * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
		 * Required
		 */
		assessmentType: SecurityAssessmentMetadataPropertiesAssessmentType;
		category?: Array<string>;

		/** Human readable description of the assessment */
		description?: string | null;

		/**
		 * User friendly display name of the assessment
		 * Required
		 */
		displayName: string;

		/** The implementation effort required to remediate this assessment */
		implementationEffort?: SecurityAssessmentMetadataPropertiesImplementationEffort | null;

		/** Describes the partner that created the assessment */
		partnerData?: SecurityAssessmentMetadataPartnerData;

		/** Azure resource ID of the policy definition that turns this assessment calculation on */
		policyDefinitionId?: string | null;

		/** True if this assessment is in preview release status */
		preview?: boolean | null;

		/** Human readable description of what you should do to mitigate this security issue */
		remediationDescription?: string | null;

		/**
		 * The severity level of the assessment
		 * Required
		 */
		severity: SecurityAssessmentMetadataPropertiesSeverity;
		threats?: Array<string>;

		/** The user impact of the assessment */
		userImpact?: SecurityAssessmentMetadataPropertiesImplementationEffort | null;
	}

	/** Describes properties of an assessment metadata. */
	export interface SecurityAssessmentMetadataPropertiesFormProperties {

		/**
		 * BuiltIn if the assessment based on built-in Azure Policy definition, Custom if the assessment based on custom Azure Policy definition
		 * Required
		 */
		assessmentType: FormControl<SecurityAssessmentMetadataPropertiesAssessmentType | null | undefined>,

		/** Human readable description of the assessment */
		description: FormControl<string | null | undefined>,

		/**
		 * User friendly display name of the assessment
		 * Required
		 */
		displayName: FormControl<string | null | undefined>,

		/** The implementation effort required to remediate this assessment */
		implementationEffort: FormControl<SecurityAssessmentMetadataPropertiesImplementationEffort | null | undefined>,

		/** Azure resource ID of the policy definition that turns this assessment calculation on */
		policyDefinitionId: FormControl<string | null | undefined>,

		/** True if this assessment is in preview release status */
		preview: FormControl<boolean | null | undefined>,

		/** Human readable description of what you should do to mitigate this security issue */
		remediationDescription: FormControl<string | null | undefined>,

		/**
		 * The severity level of the assessment
		 * Required
		 */
		severity: FormControl<SecurityAssessmentMetadataPropertiesSeverity | null | undefined>,

		/** The user impact of the assessment */
		userImpact: FormControl<SecurityAssessmentMetadataPropertiesImplementationEffort | null | undefined>,
	}
	export function CreateSecurityAssessmentMetadataPropertiesFormGroup() {
		return new FormGroup<SecurityAssessmentMetadataPropertiesFormProperties>({
			assessmentType: new FormControl<SecurityAssessmentMetadataPropertiesAssessmentType | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			implementationEffort: new FormControl<SecurityAssessmentMetadataPropertiesImplementationEffort | null | undefined>(undefined),
			policyDefinitionId: new FormControl<string | null | undefined>(undefined),
			preview: new FormControl<boolean | null | undefined>(undefined),
			remediationDescription: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<SecurityAssessmentMetadataPropertiesSeverity | null | undefined>(undefined, [Validators.required]),
			userImpact: new FormControl<SecurityAssessmentMetadataPropertiesImplementationEffort | null | undefined>(undefined),
		});

	}

	export enum SecurityAssessmentMetadataPropertiesAssessmentType { BuiltIn = 'BuiltIn', CustomPolicy = 'CustomPolicy', CustomerManaged = 'CustomerManaged', VerifiedPartner = 'VerifiedPartner' }

	export enum SecurityAssessmentMetadataPropertiesImplementationEffort { Low = 'Low', Moderate = 'Moderate', High = 'High' }


	/** Describes the partner that created the assessment */
	export interface SecurityAssessmentMetadataPartnerData {

		/** Name of the company of the partner */
		partnerName?: string | null;

		/** Name of the product of the partner that created the assessment */
		productName?: string | null;

		/** Secret to authenticate the partner and verify it created the assessment - write only */
		secret?: string | null;
	}

	/** Describes the partner that created the assessment */
	export interface SecurityAssessmentMetadataPartnerDataFormProperties {

		/** Name of the company of the partner */
		partnerName: FormControl<string | null | undefined>,

		/** Name of the product of the partner that created the assessment */
		productName: FormControl<string | null | undefined>,

		/** Secret to authenticate the partner and verify it created the assessment - write only */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateSecurityAssessmentMetadataPartnerDataFormGroup() {
		return new FormGroup<SecurityAssessmentMetadataPartnerDataFormProperties>({
			partnerName: new FormControl<string | null | undefined>(undefined),
			productName: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SecurityAssessmentMetadataPropertiesSeverity { Low = 'Low', Medium = 'Medium', High = 'High' }


	/** List of security assessment metadata */
	export interface SecurityAssessmentMetadataList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;
		value?: Array<SecurityAssessmentMetadata>;
	}

	/** List of security assessment metadata */
	export interface SecurityAssessmentMetadataListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSecurityAssessmentMetadataListFormGroup() {
		return new FormGroup<SecurityAssessmentMetadataListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get metadata information on all assessment types
		 * Get providers/Microsoft.Security/assessmentMetadata
		 * @param {string} api_version API version for the operation
		 * @return {SecurityAssessmentMetadataList} OK
		 */
		AssessmentsMetadata_List(api_version: string): Observable<SecurityAssessmentMetadataList> {
			return this.http.get<SecurityAssessmentMetadataList>(this.baseUri + 'providers/Microsoft.Security/assessmentMetadata?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get metadata information on an assessment type
		 * Get providers/Microsoft.Security/assessmentMetadata/{assessmentMetadataName}
		 * @param {string} api_version API version for the operation
		 * @param {string} assessmentMetadataName The Assessment Key - Unique key for the assessment type
		 * @return {SecurityAssessmentMetadata} OK
		 */
		AssessmentsMetadata_Get(api_version: string, assessmentMetadataName: string): Observable<SecurityAssessmentMetadata> {
			return this.http.get<SecurityAssessmentMetadata>(this.baseUri + 'providers/Microsoft.Security/assessmentMetadata/' + (assessmentMetadataName == null ? '' : encodeURIComponent(assessmentMetadataName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get metadata information on all assessment types in a specific subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/assessmentMetadata
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {SecurityAssessmentMetadataList} OK
		 */
		AssessmentsMetadataSubscription_List(api_version: string, subscriptionId: string): Observable<SecurityAssessmentMetadataList> {
			return this.http.get<SecurityAssessmentMetadataList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/assessmentMetadata?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get metadata information on an assessment type in a specific subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/assessmentMetadata/{assessmentMetadataName}
		 * @param {string} api_version API version for the operation
		 * @param {string} assessmentMetadataName The Assessment Key - Unique key for the assessment type
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {SecurityAssessmentMetadata} OK
		 */
		AssessmentsMetadataSubscription_Get(api_version: string, assessmentMetadataName: string, subscriptionId: string): Observable<SecurityAssessmentMetadata> {
			return this.http.get<SecurityAssessmentMetadata>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/assessmentMetadata/' + (assessmentMetadataName == null ? '' : encodeURIComponent(assessmentMetadataName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Create metadata information on an assessment type in a specific subscription
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Security/assessmentMetadata/{assessmentMetadataName}
		 * @param {string} api_version API version for the operation
		 * @param {string} assessmentMetadataName The Assessment Key - Unique key for the assessment type
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {SecurityAssessmentMetadata} requestBody AssessmentMetadata object
		 * @return {SecurityAssessmentMetadata} OK
		 */
		AssessmentsMetadataSubscription_Create(api_version: string, assessmentMetadataName: string, subscriptionId: string, requestBody: SecurityAssessmentMetadata): Observable<SecurityAssessmentMetadata> {
			return this.http.put<SecurityAssessmentMetadata>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/assessmentMetadata/' + (assessmentMetadataName == null ? '' : encodeURIComponent(assessmentMetadataName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete metadata information on an assessment type in a specific subscription, will cause the deletion of all the assessments of that type in that subscription
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Security/assessmentMetadata/{assessmentMetadataName}
		 * @param {string} api_version API version for the operation
		 * @param {string} assessmentMetadataName The Assessment Key - Unique key for the assessment type
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {void} OK
		 */
		AssessmentsMetadataSubscription_Delete(api_version: string, assessmentMetadataName: string, subscriptionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/assessmentMetadata/' + (assessmentMetadataName == null ? '' : encodeURIComponent(assessmentMetadataName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}
	}

}

