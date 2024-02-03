import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Regulatory compliance assessment details and state */
	export interface RegulatoryComplianceAssessment {

		/** Regulatory compliance assessment data */
		properties?: RegulatoryComplianceAssessmentProperties;
	}

	/** Regulatory compliance assessment details and state */
	export interface RegulatoryComplianceAssessmentFormProperties {
	}
	export function CreateRegulatoryComplianceAssessmentFormGroup() {
		return new FormGroup<RegulatoryComplianceAssessmentFormProperties>({
		});

	}


	/** Regulatory compliance assessment data */
	export interface RegulatoryComplianceAssessmentProperties {

		/** Link to more detailed assessment results data. The response type will be according to the assessmentType field */
		assessmentDetailsLink?: string | null;

		/** The expected type of assessment contained in the AssessmentDetailsLink */
		assessmentType?: string | null;

		/** The description of the regulatory compliance assessment */
		description?: string | null;

		/** The given assessment's related resources count with failed state. */
		failedResources?: number | null;

		/** The given assessment's related resources count with passed state. */
		passedResources?: number | null;

		/** The given assessment's related resources count with skipped state. */
		skippedResources?: number | null;

		/** Aggregative state based on the assessment's scanned resources states */
		state?: RegulatoryComplianceAssessmentPropertiesState | null;

		/** The given assessment's related resources count with unsupported state. */
		unsupportedResources?: number | null;
	}

	/** Regulatory compliance assessment data */
	export interface RegulatoryComplianceAssessmentPropertiesFormProperties {

		/** Link to more detailed assessment results data. The response type will be according to the assessmentType field */
		assessmentDetailsLink: FormControl<string | null | undefined>,

		/** The expected type of assessment contained in the AssessmentDetailsLink */
		assessmentType: FormControl<string | null | undefined>,

		/** The description of the regulatory compliance assessment */
		description: FormControl<string | null | undefined>,

		/** The given assessment's related resources count with failed state. */
		failedResources: FormControl<number | null | undefined>,

		/** The given assessment's related resources count with passed state. */
		passedResources: FormControl<number | null | undefined>,

		/** The given assessment's related resources count with skipped state. */
		skippedResources: FormControl<number | null | undefined>,

		/** Aggregative state based on the assessment's scanned resources states */
		state: FormControl<RegulatoryComplianceAssessmentPropertiesState | null | undefined>,

		/** The given assessment's related resources count with unsupported state. */
		unsupportedResources: FormControl<number | null | undefined>,
	}
	export function CreateRegulatoryComplianceAssessmentPropertiesFormGroup() {
		return new FormGroup<RegulatoryComplianceAssessmentPropertiesFormProperties>({
			assessmentDetailsLink: new FormControl<string | null | undefined>(undefined),
			assessmentType: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			failedResources: new FormControl<number | null | undefined>(undefined),
			passedResources: new FormControl<number | null | undefined>(undefined),
			skippedResources: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<RegulatoryComplianceAssessmentPropertiesState | null | undefined>(undefined),
			unsupportedResources: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RegulatoryComplianceAssessmentPropertiesState { Passed = 'Passed', Failed = 'Failed', Skipped = 'Skipped', Unsupported = 'Unsupported' }


	/** List of regulatory compliance assessment response */
	export interface RegulatoryComplianceAssessmentList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** Required */
		value: Array<RegulatoryComplianceAssessment>;
	}

	/** List of regulatory compliance assessment response */
	export interface RegulatoryComplianceAssessmentListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRegulatoryComplianceAssessmentListFormGroup() {
		return new FormGroup<RegulatoryComplianceAssessmentListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Regulatory compliance control details and state */
	export interface RegulatoryComplianceControl {

		/** Regulatory compliance control data */
		properties?: RegulatoryComplianceControlProperties;
	}

	/** Regulatory compliance control details and state */
	export interface RegulatoryComplianceControlFormProperties {
	}
	export function CreateRegulatoryComplianceControlFormGroup() {
		return new FormGroup<RegulatoryComplianceControlFormProperties>({
		});

	}


	/** Regulatory compliance control data */
	export interface RegulatoryComplianceControlProperties {

		/** The description of the regulatory compliance control */
		description?: string | null;

		/** The number of supported regulatory compliance assessments of the given control with a failed state */
		failedAssessments?: number | null;

		/** The number of supported regulatory compliance assessments of the given control with a passed state */
		passedAssessments?: number | null;

		/** The number of supported regulatory compliance assessments of the given control with a skipped state */
		skippedAssessments?: number | null;

		/** Aggregative state based on the control's supported assessments states */
		state?: RegulatoryComplianceAssessmentPropertiesState | null;
	}

	/** Regulatory compliance control data */
	export interface RegulatoryComplianceControlPropertiesFormProperties {

		/** The description of the regulatory compliance control */
		description: FormControl<string | null | undefined>,

		/** The number of supported regulatory compliance assessments of the given control with a failed state */
		failedAssessments: FormControl<number | null | undefined>,

		/** The number of supported regulatory compliance assessments of the given control with a passed state */
		passedAssessments: FormControl<number | null | undefined>,

		/** The number of supported regulatory compliance assessments of the given control with a skipped state */
		skippedAssessments: FormControl<number | null | undefined>,

		/** Aggregative state based on the control's supported assessments states */
		state: FormControl<RegulatoryComplianceAssessmentPropertiesState | null | undefined>,
	}
	export function CreateRegulatoryComplianceControlPropertiesFormGroup() {
		return new FormGroup<RegulatoryComplianceControlPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			failedAssessments: new FormControl<number | null | undefined>(undefined),
			passedAssessments: new FormControl<number | null | undefined>(undefined),
			skippedAssessments: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<RegulatoryComplianceAssessmentPropertiesState | null | undefined>(undefined),
		});

	}


	/** List of regulatory compliance controls response */
	export interface RegulatoryComplianceControlList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/**
		 * List of regulatory compliance controls
		 * Required
		 */
		value: Array<RegulatoryComplianceControl>;
	}

	/** List of regulatory compliance controls response */
	export interface RegulatoryComplianceControlListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRegulatoryComplianceControlListFormGroup() {
		return new FormGroup<RegulatoryComplianceControlListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Regulatory compliance standard details and state */
	export interface RegulatoryComplianceStandard {

		/** Regulatory compliance standard data */
		properties?: RegulatoryComplianceStandardProperties;
	}

	/** Regulatory compliance standard details and state */
	export interface RegulatoryComplianceStandardFormProperties {
	}
	export function CreateRegulatoryComplianceStandardFormGroup() {
		return new FormGroup<RegulatoryComplianceStandardFormProperties>({
		});

	}


	/** Regulatory compliance standard data */
	export interface RegulatoryComplianceStandardProperties {

		/** The number of supported regulatory compliance controls of the given standard with a failed state */
		failedControls?: number | null;

		/** The number of supported regulatory compliance controls of the given standard with a passed state */
		passedControls?: number | null;

		/** The number of supported regulatory compliance controls of the given standard with a skipped state */
		skippedControls?: number | null;

		/** Aggregative state based on the standard's supported controls states */
		state?: RegulatoryComplianceAssessmentPropertiesState | null;

		/** The number of regulatory compliance controls of the given standard which are unsupported by automated assessments */
		unsupportedControls?: number | null;
	}

	/** Regulatory compliance standard data */
	export interface RegulatoryComplianceStandardPropertiesFormProperties {

		/** The number of supported regulatory compliance controls of the given standard with a failed state */
		failedControls: FormControl<number | null | undefined>,

		/** The number of supported regulatory compliance controls of the given standard with a passed state */
		passedControls: FormControl<number | null | undefined>,

		/** The number of supported regulatory compliance controls of the given standard with a skipped state */
		skippedControls: FormControl<number | null | undefined>,

		/** Aggregative state based on the standard's supported controls states */
		state: FormControl<RegulatoryComplianceAssessmentPropertiesState | null | undefined>,

		/** The number of regulatory compliance controls of the given standard which are unsupported by automated assessments */
		unsupportedControls: FormControl<number | null | undefined>,
	}
	export function CreateRegulatoryComplianceStandardPropertiesFormGroup() {
		return new FormGroup<RegulatoryComplianceStandardPropertiesFormProperties>({
			failedControls: new FormControl<number | null | undefined>(undefined),
			passedControls: new FormControl<number | null | undefined>(undefined),
			skippedControls: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<RegulatoryComplianceAssessmentPropertiesState | null | undefined>(undefined),
			unsupportedControls: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** List of regulatory compliance standards response */
	export interface RegulatoryComplianceStandardList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** Required */
		value: Array<RegulatoryComplianceStandard>;
	}

	/** List of regulatory compliance standards response */
	export interface RegulatoryComplianceStandardListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRegulatoryComplianceStandardListFormGroup() {
		return new FormGroup<RegulatoryComplianceStandardListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Supported regulatory compliance standards details and state
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} filter OData filter. Optional.
		 * @return {RegulatoryComplianceStandardList} OK
		 */
		RegulatoryComplianceStandards_List(api_version: string, subscriptionId: string, filter: string | null | undefined): Observable<RegulatoryComplianceStandardList> {
			return this.http.get<RegulatoryComplianceStandardList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/regulatoryComplianceStandards?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Supported regulatory compliance details state for selected standard
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} regulatoryComplianceStandardName Name of the regulatory compliance standard object
		 * @return {RegulatoryComplianceStandard} OK
		 */
		RegulatoryComplianceStandards_Get(api_version: string, subscriptionId: string, regulatoryComplianceStandardName: string): Observable<RegulatoryComplianceStandard> {
			return this.http.get<RegulatoryComplianceStandard>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/regulatoryComplianceStandards/' + (regulatoryComplianceStandardName == null ? '' : encodeURIComponent(regulatoryComplianceStandardName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * All supported regulatory compliance controls details and state for selected standard
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} regulatoryComplianceStandardName Name of the regulatory compliance standard object
		 * @param {string} filter OData filter. Optional.
		 * @return {RegulatoryComplianceControlList} OK
		 */
		RegulatoryComplianceControls_List(api_version: string, subscriptionId: string, regulatoryComplianceStandardName: string, filter: string | null | undefined): Observable<RegulatoryComplianceControlList> {
			return this.http.get<RegulatoryComplianceControlList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/regulatoryComplianceStandards/' + (regulatoryComplianceStandardName == null ? '' : encodeURIComponent(regulatoryComplianceStandardName)) + '/regulatoryComplianceControls?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Selected regulatory compliance control details and state
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} regulatoryComplianceStandardName Name of the regulatory compliance standard object
		 * @param {string} regulatoryComplianceControlName Name of the regulatory compliance control object
		 * @return {RegulatoryComplianceControl} OK
		 */
		RegulatoryComplianceControls_Get(api_version: string, subscriptionId: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string): Observable<RegulatoryComplianceControl> {
			return this.http.get<RegulatoryComplianceControl>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/regulatoryComplianceStandards/' + (regulatoryComplianceStandardName == null ? '' : encodeURIComponent(regulatoryComplianceStandardName)) + '/regulatoryComplianceControls/' + (regulatoryComplianceControlName == null ? '' : encodeURIComponent(regulatoryComplianceControlName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Details and state of assessments mapped to selected regulatory compliance control
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}/regulatoryComplianceAssessments
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} regulatoryComplianceStandardName Name of the regulatory compliance standard object
		 * @param {string} regulatoryComplianceControlName Name of the regulatory compliance control object
		 * @param {string} filter OData filter. Optional.
		 * @return {RegulatoryComplianceAssessmentList} OK
		 */
		RegulatoryComplianceAssessments_List(api_version: string, subscriptionId: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, filter: string | null | undefined): Observable<RegulatoryComplianceAssessmentList> {
			return this.http.get<RegulatoryComplianceAssessmentList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/regulatoryComplianceStandards/' + (regulatoryComplianceStandardName == null ? '' : encodeURIComponent(regulatoryComplianceStandardName)) + '/regulatoryComplianceControls/' + (regulatoryComplianceControlName == null ? '' : encodeURIComponent(regulatoryComplianceControlName)) + '/regulatoryComplianceAssessments?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), {});
		}

		/**
		 * Supported regulatory compliance details and state for selected assessment
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/regulatoryComplianceStandards/{regulatoryComplianceStandardName}/regulatoryComplianceControls/{regulatoryComplianceControlName}/regulatoryComplianceAssessments/{regulatoryComplianceAssessmentName}
		 * @param {string} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} regulatoryComplianceStandardName Name of the regulatory compliance standard object
		 * @param {string} regulatoryComplianceControlName Name of the regulatory compliance control object
		 * @param {string} regulatoryComplianceAssessmentName Name of the regulatory compliance assessment object
		 * @return {RegulatoryComplianceAssessment} OK
		 */
		RegulatoryComplianceAssessments_Get(api_version: string, subscriptionId: string, regulatoryComplianceStandardName: string, regulatoryComplianceControlName: string, regulatoryComplianceAssessmentName: string): Observable<RegulatoryComplianceAssessment> {
			return this.http.get<RegulatoryComplianceAssessment>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/regulatoryComplianceStandards/' + (regulatoryComplianceStandardName == null ? '' : encodeURIComponent(regulatoryComplianceStandardName)) + '/regulatoryComplianceControls/' + (regulatoryComplianceControlName == null ? '' : encodeURIComponent(regulatoryComplianceControlName)) + '/regulatoryComplianceAssessments/' + (regulatoryComplianceAssessmentName == null ? '' : encodeURIComponent(regulatoryComplianceAssessmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

