import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Details of the sub-assessment */
	export interface AdditionalData {

		/**
		 * Sub-assessment resource type
		 * Required
		 */
		assessedResourceType: AdditionalDataAssessedResourceType;
	}

	/** Details of the sub-assessment */
	export interface AdditionalDataFormProperties {

		/**
		 * Sub-assessment resource type
		 * Required
		 */
		assessedResourceType: FormControl<AdditionalDataAssessedResourceType | null | undefined>,
	}
	export function CreateAdditionalDataFormGroup() {
		return new FormGroup<AdditionalDataFormProperties>({
			assessedResourceType: new FormControl<AdditionalDataAssessedResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AdditionalDataAssessedResourceType { SqlServerVulnerability = 0, ContainerRegistryVulnerability = 1, ServerVulnerability = 2 }


	/** CVE details */
	export interface CVE {

		/** Link url */
		link?: string | null;

		/** CVE title */
		title?: string | null;
	}

	/** CVE details */
	export interface CVEFormProperties {

		/** Link url */
		link: FormControl<string | null | undefined>,

		/** CVE title */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCVEFormGroup() {
		return new FormGroup<CVEFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** CVSS details */
	export interface CVSS {

		/** CVSS base */
		base?: number | null;
	}

	/** CVSS details */
	export interface CVSSFormProperties {

		/** CVSS base */
		base: FormControl<number | null | undefined>,
	}
	export function CreateCVSSFormGroup() {
		return new FormGroup<CVSSFormProperties>({
			base: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional context fields for container registry Vulnerability assessment */
	export interface ContainerRegistryVulnerabilityProperties {

		/** List of CVEs */
		cve?: Array<CVE>;

		/** Dictionary from cvss version to cvss details object */
		cvss?: {[id: string]: CVSS };

		/** Digest of the vulnerable image */
		imageDigest?: string | null;

		/** Indicates whether a patch is available or not */
		patchable?: boolean | null;

		/** Published time */
		publishedTime?: Date | null;

		/** Name of the repository which the vulnerable image belongs to */
		repositoryName?: string | null;

		/** Vulnerability Type. e.g: Vulnerability, Potential Vulnerability, Information Gathered, Vulnerability */
		type?: string | null;
		vendorReferences?: Array<VendorReference>;
	}

	/** Additional context fields for container registry Vulnerability assessment */
	export interface ContainerRegistryVulnerabilityPropertiesFormProperties {

		/** Dictionary from cvss version to cvss details object */
		cvss: FormControl<{[id: string]: CVSS } | null | undefined>,

		/** Digest of the vulnerable image */
		imageDigest: FormControl<string | null | undefined>,

		/** Indicates whether a patch is available or not */
		patchable: FormControl<boolean | null | undefined>,

		/** Published time */
		publishedTime: FormControl<Date | null | undefined>,

		/** Name of the repository which the vulnerable image belongs to */
		repositoryName: FormControl<string | null | undefined>,

		/** Vulnerability Type. e.g: Vulnerability, Potential Vulnerability, Information Gathered, Vulnerability */
		type: FormControl<string | null | undefined>,
	}
	export function CreateContainerRegistryVulnerabilityPropertiesFormGroup() {
		return new FormGroup<ContainerRegistryVulnerabilityPropertiesFormProperties>({
			cvss: new FormControl<{[id: string]: CVSS } | null | undefined>(undefined),
			imageDigest: new FormControl<string | null | undefined>(undefined),
			patchable: new FormControl<boolean | null | undefined>(undefined),
			publishedTime: new FormControl<Date | null | undefined>(undefined),
			repositoryName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Vendor reference */
	export interface VendorReference {

		/** Link url */
		link?: string | null;

		/** Link title */
		title?: string | null;
	}

	/** Vendor reference */
	export interface VendorReferenceFormProperties {

		/** Link url */
		link: FormControl<string | null | undefined>,

		/** Link title */
		title: FormControl<string | null | undefined>,
	}
	export function CreateVendorReferenceFormGroup() {
		return new FormGroup<VendorReferenceFormProperties>({
			link: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Security sub-assessment on a resource */
	export interface SecuritySubAssessment {

		/** Describes properties of an sub-assessment. */
		properties?: SecuritySubAssessmentProperties;
	}

	/** Security sub-assessment on a resource */
	export interface SecuritySubAssessmentFormProperties {
	}
	export function CreateSecuritySubAssessmentFormGroup() {
		return new FormGroup<SecuritySubAssessmentFormProperties>({
		});

	}


	/** Describes properties of an sub-assessment. */
	export interface SecuritySubAssessmentProperties {

		/** Details of the sub-assessment */
		additionalData?: AdditionalData;

		/** Category of the sub-assessment */
		category?: string | null;

		/** Human readable description of the assessment status */
		description?: string | null;

		/** User friendly display name of the sub-assessment */
		displayName?: string | null;

		/** Vulnerability ID */
		id?: string | null;

		/** Description of the impact of this sub-assessment */
		impact?: string | null;

		/** Information on how to remediate this sub-assessment */
		remediation?: string | null;

		/** Details of the resource that was assessed */
		resourceDetails?: SecuritySubAssessmentPropertiesResourceDetails;

		/** Status of the sub-assessment */
		status?: SubAssessmentStatus;

		/** The date and time the sub-assessment was generated */
		timeGenerated?: Date | null;
	}

	/** Describes properties of an sub-assessment. */
	export interface SecuritySubAssessmentPropertiesFormProperties {

		/** Category of the sub-assessment */
		category: FormControl<string | null | undefined>,

		/** Human readable description of the assessment status */
		description: FormControl<string | null | undefined>,

		/** User friendly display name of the sub-assessment */
		displayName: FormControl<string | null | undefined>,

		/** Vulnerability ID */
		id: FormControl<string | null | undefined>,

		/** Description of the impact of this sub-assessment */
		impact: FormControl<string | null | undefined>,

		/** Information on how to remediate this sub-assessment */
		remediation: FormControl<string | null | undefined>,

		/** The date and time the sub-assessment was generated */
		timeGenerated: FormControl<Date | null | undefined>,
	}
	export function CreateSecuritySubAssessmentPropertiesFormGroup() {
		return new FormGroup<SecuritySubAssessmentPropertiesFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			impact: new FormControl<string | null | undefined>(undefined),
			remediation: new FormControl<string | null | undefined>(undefined),
			timeGenerated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SecuritySubAssessmentPropertiesResourceDetails {

		/**
		 * The platform where the assessed resource resides
		 * Required
		 */
		source: SecuritySubAssessmentPropertiesResourceDetailsSource;
	}
	export interface SecuritySubAssessmentPropertiesResourceDetailsFormProperties {

		/**
		 * The platform where the assessed resource resides
		 * Required
		 */
		source: FormControl<SecuritySubAssessmentPropertiesResourceDetailsSource | null | undefined>,
	}
	export function CreateSecuritySubAssessmentPropertiesResourceDetailsFormGroup() {
		return new FormGroup<SecuritySubAssessmentPropertiesResourceDetailsFormProperties>({
			source: new FormControl<SecuritySubAssessmentPropertiesResourceDetailsSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SecuritySubAssessmentPropertiesResourceDetailsSource { Azure = 0, OnPremise = 1 }


	/** Status of the sub-assessment */
	export interface SubAssessmentStatus {

		/** Programmatic code for the cause of the assessment status */
		cause?: string | null;

		/** Programmatic code for the status of the assessment */
		code?: SubAssessmentStatusCode | null;

		/** Human readable description of the assessment status */
		description?: string | null;

		/** The sub-assessment severity level */
		severity?: SubAssessmentStatusSeverity | null;
	}

	/** Status of the sub-assessment */
	export interface SubAssessmentStatusFormProperties {

		/** Programmatic code for the cause of the assessment status */
		cause: FormControl<string | null | undefined>,

		/** Programmatic code for the status of the assessment */
		code: FormControl<SubAssessmentStatusCode | null | undefined>,

		/** Human readable description of the assessment status */
		description: FormControl<string | null | undefined>,

		/** The sub-assessment severity level */
		severity: FormControl<SubAssessmentStatusSeverity | null | undefined>,
	}
	export function CreateSubAssessmentStatusFormGroup() {
		return new FormGroup<SubAssessmentStatusFormProperties>({
			cause: new FormControl<string | null | undefined>(undefined),
			code: new FormControl<SubAssessmentStatusCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<SubAssessmentStatusSeverity | null | undefined>(undefined),
		});

	}

	export enum SubAssessmentStatusCode { Healthy = 0, Unhealthy = 1, NotApplicable = 2 }

	export enum SubAssessmentStatusSeverity { Low = 0, Medium = 1, High = 2 }


	/** List of security sub-assessments */
	export interface SecuritySubAssessmentList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;
		value?: Array<SecuritySubAssessment>;
	}

	/** List of security sub-assessments */
	export interface SecuritySubAssessmentListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSecuritySubAssessmentListFormGroup() {
		return new FormGroup<SecuritySubAssessmentListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional context fields for server vulnerability assessment */
	export interface ServerVulnerabilityProperties {

		/** List of CVEs */
		cve?: Array<CVE>;

		/** Dictionary from cvss version to cvss details object */
		cvss?: {[id: string]: CVSS };

		/** Indicates whether a patch is available or not */
		patchable?: boolean | null;

		/** Published time */
		publishedTime?: Date | null;

		/** Threat name */
		threat?: string | null;

		/** Vulnerability Type. e.g: Vulnerability, Potential Vulnerability, Information Gathered */
		type?: string | null;
		vendorReferences?: Array<VendorReference>;
	}

	/** Additional context fields for server vulnerability assessment */
	export interface ServerVulnerabilityPropertiesFormProperties {

		/** Dictionary from cvss version to cvss details object */
		cvss: FormControl<{[id: string]: CVSS } | null | undefined>,

		/** Indicates whether a patch is available or not */
		patchable: FormControl<boolean | null | undefined>,

		/** Published time */
		publishedTime: FormControl<Date | null | undefined>,

		/** Threat name */
		threat: FormControl<string | null | undefined>,

		/** Vulnerability Type. e.g: Vulnerability, Potential Vulnerability, Information Gathered */
		type: FormControl<string | null | undefined>,
	}
	export function CreateServerVulnerabilityPropertiesFormGroup() {
		return new FormGroup<ServerVulnerabilityPropertiesFormProperties>({
			cvss: new FormControl<{[id: string]: CVSS } | null | undefined>(undefined),
			patchable: new FormControl<boolean | null | undefined>(undefined),
			publishedTime: new FormControl<Date | null | undefined>(undefined),
			threat: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the resource that was assessed */
	export interface SqlServerVulnerabilityProperties {

		/** The T-SQL query that runs on your SQL database to perform the particular check */
		query?: string | null;

		/** The resource type the sub assessment refers to in its resource details */
		type?: string | null;
	}

	/** Details of the resource that was assessed */
	export interface SqlServerVulnerabilityPropertiesFormProperties {

		/** The T-SQL query that runs on your SQL database to perform the particular check */
		query: FormControl<string | null | undefined>,

		/** The resource type the sub assessment refers to in its resource details */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerVulnerabilityPropertiesFormGroup() {
		return new FormGroup<SqlServerVulnerabilityPropertiesFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get security sub-assessments on all your scanned resources inside a scope
		 * Get {scope}/providers/Microsoft.Security/assessments/{assessmentName}/subAssessments
		 * @param {string} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @param {string} assessmentName The Assessment Key - Unique key for the assessment type
		 * @return {SecuritySubAssessmentList} OK
		 */
		SubAssessments_List(api_version: string, scope: string, assessmentName: string): Observable<SecuritySubAssessmentList> {
			return this.http.get<SecuritySubAssessmentList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/assessments/' + (assessmentName == null ? '' : encodeURIComponent(assessmentName)) + '/subAssessments?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get a security sub-assessment on your scanned resource
		 * Get {scope}/providers/Microsoft.Security/assessments/{assessmentName}/subAssessments/{subAssessmentName}
		 * @param {string} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @param {string} assessmentName The Assessment Key - Unique key for the assessment type
		 * @param {string} subAssessmentName The Sub-Assessment Key - Unique key for the sub-assessment type
		 * @return {SecuritySubAssessment} OK
		 */
		SubAssessments_Get(api_version: string, scope: string, assessmentName: string, subAssessmentName: string): Observable<SecuritySubAssessment> {
			return this.http.get<SecuritySubAssessment>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/assessments/' + (assessmentName == null ? '' : encodeURIComponent(assessmentName)) + '/subAssessments/' + (subAssessmentName == null ? '' : encodeURIComponent(subAssessmentName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Get security sub-assessments on all your scanned resources inside a subscription scope
		 * Get {scope}/providers/Microsoft.Security/subAssessments
		 * @param {string} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @return {SecuritySubAssessmentList} OK
		 */
		SubAssessments_ListAll(api_version: string, scope: string): Observable<SecuritySubAssessmentList> {
			return this.http.get<SecuritySubAssessmentList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/subAssessments?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

}

