import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Compliance of a scope */
	export interface Compliance {

		/** The Compliance score (percentage) of a Subscription is a sum of all Resources' Compliances under the given Subscription. A Resource Compliance is defined as the compliant ('healthy') Policy Definitions out of all Policy Definitions applicable to a given resource. */
		properties?: ComplianceProperties;
	}

	/** Compliance of a scope */
	export interface ComplianceFormProperties {
	}
	export function CreateComplianceFormGroup() {
		return new FormGroup<ComplianceFormProperties>({
		});

	}


	/** The Compliance score (percentage) of a Subscription is a sum of all Resources' Compliances under the given Subscription. A Resource Compliance is defined as the compliant ('healthy') Policy Definitions out of all Policy Definitions applicable to a given resource. */
	export interface ComplianceProperties {

		/** An array of segment, which is the actually the compliance assessment. */
		assessmentResult?: Array<ComplianceSegment>;

		/** The timestamp when the Compliance calculation was conducted. */
		assessmentTimestampUtcDate?: Date | null;

		/**
		 * The resource count of the given subscription for which the Compliance calculation was conducted (needed for Management Group Compliance calculation).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resourceCount?: number | null;
	}

	/** The Compliance score (percentage) of a Subscription is a sum of all Resources' Compliances under the given Subscription. A Resource Compliance is defined as the compliant ('healthy') Policy Definitions out of all Policy Definitions applicable to a given resource. */
	export interface CompliancePropertiesFormProperties {

		/** The timestamp when the Compliance calculation was conducted. */
		assessmentTimestampUtcDate: FormControl<Date | null | undefined>,

		/**
		 * The resource count of the given subscription for which the Compliance calculation was conducted (needed for Management Group Compliance calculation).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resourceCount: FormControl<number | null | undefined>,
	}
	export function CreateCompliancePropertiesFormGroup() {
		return new FormGroup<CompliancePropertiesFormProperties>({
			assessmentTimestampUtcDate: new FormControl<Date | null | undefined>(undefined),
			resourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A segment of a compliance assessment. */
	export interface ComplianceSegment {

		/**
		 * The size (%) of the segment.
		 * Type: double
		 */
		percentage?: number | null;

		/** The segment type, e.g. compliant, non-compliance, insufficient coverage, N/A, etc. */
		segmentType?: string | null;
	}

	/** A segment of a compliance assessment. */
	export interface ComplianceSegmentFormProperties {

		/**
		 * The size (%) of the segment.
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** The segment type, e.g. compliant, non-compliance, insufficient coverage, N/A, etc. */
		segmentType: FormControl<string | null | undefined>,
	}
	export function CreateComplianceSegmentFormGroup() {
		return new FormGroup<ComplianceSegmentFormProperties>({
			percentage: new FormControl<number | null | undefined>(undefined),
			segmentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Compliance objects response */
	export interface ComplianceList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** List of Compliance objects */
		value?: Array<Compliance>;
	}

	/** List of Compliance objects response */
	export interface ComplianceListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateComplianceListFormGroup() {
		return new FormGroup<ComplianceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * The Compliance scores of the specific management group.
		 * Get {scope}/providers/Microsoft.Security/compliances
		 * @param {string} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @return {ComplianceList} OK
		 */
		Compliances_List(api_version: string, scope: string): Observable<ComplianceList> {
			return this.http.get<ComplianceList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/compliances?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Details of a specific Compliance.
		 * Get {scope}/providers/Microsoft.Security/compliances/{complianceName}
		 * @param {string} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @param {string} complianceName name of the Compliance
		 * @return {Compliance} OK
		 */
		Compliances_Get(api_version: string, scope: string, complianceName: string): Observable<Compliance> {
			return this.http.get<Compliance>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/compliances/' + (complianceName == null ? '' : encodeURIComponent(complianceName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

}

