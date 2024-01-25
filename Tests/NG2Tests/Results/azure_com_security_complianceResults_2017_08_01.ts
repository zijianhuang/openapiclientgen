import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** a compliance result */
	export interface ComplianceResult {

		/** Compliance result data */
		properties?: ComplianceResultProperties;
	}

	/** a compliance result */
	export interface ComplianceResultFormProperties {
	}
	export function CreateComplianceResultFormGroup() {
		return new FormGroup<ComplianceResultFormProperties>({
		});

	}


	/** Compliance result data */
	export interface ComplianceResultProperties {

		/** The status of the resource regarding a single assessment */
		resourceStatus?: ComplianceResultPropertiesResourceStatus | null;
	}

	/** Compliance result data */
	export interface ComplianceResultPropertiesFormProperties {

		/** The status of the resource regarding a single assessment */
		resourceStatus: FormControl<ComplianceResultPropertiesResourceStatus | null | undefined>,
	}
	export function CreateComplianceResultPropertiesFormGroup() {
		return new FormGroup<ComplianceResultPropertiesFormProperties>({
			resourceStatus: new FormControl<ComplianceResultPropertiesResourceStatus | null | undefined>(undefined),
		});

	}

	export enum ComplianceResultPropertiesResourceStatus { Healthy = 0, NotApplicable = 1, OffByPolicy = 2, NotHealthy = 3 }


	/** List of compliance results response */
	export interface ComplianceResultList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/**
		 * List of compliance results
		 * Required
		 */
		value: Array<ComplianceResult>;
	}

	/** List of compliance results response */
	export interface ComplianceResultListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateComplianceResultListFormGroup() {
		return new FormGroup<ComplianceResultListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Security Compliance Result
		 * Get {resourceId}/providers/Microsoft.Security/complianceResults/{complianceResultName}
		 * @param {string} api_version API version for the operation
		 * @param {string} resourceId The identifier of the resource.
		 * @param {string} complianceResultName name of the desired assessment compliance result
		 * @return {ComplianceResult} OK
		 */
		ComplianceResults_Get(api_version: string, resourceId: string, complianceResultName: string): Observable<ComplianceResult> {
			return this.http.get<ComplianceResult>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/providers/Microsoft.Security/complianceResults/' + (complianceResultName == null ? '' : encodeURIComponent(complianceResultName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Security compliance results in the subscription
		 * Get {scope}/providers/Microsoft.Security/complianceResults
		 * @param {string} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @return {ComplianceResultList} OK
		 */
		ComplianceResults_List(api_version: string, scope: string): Observable<ComplianceResultList> {
			return this.http.get<ComplianceResultList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/complianceResults?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}
	}

}

