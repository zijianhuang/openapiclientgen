import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The information type keyword. */
	export interface InformationProtectionKeyword {

		/** Indicates whether the keyword can be applied on numeric types or not. */
		canBeNumeric?: boolean | null;

		/** Indicates whether the keyword is custom or not. */
		custom?: boolean | null;

		/** Indicates whether the keyword is excluded or not. */
		excluded?: boolean | null;

		/** The keyword pattern. */
		pattern?: string | null;
	}

	/** The information type keyword. */
	export interface InformationProtectionKeywordFormProperties {

		/** Indicates whether the keyword can be applied on numeric types or not. */
		canBeNumeric: FormControl<boolean | null | undefined>,

		/** Indicates whether the keyword is custom or not. */
		custom: FormControl<boolean | null | undefined>,

		/** Indicates whether the keyword is excluded or not. */
		excluded: FormControl<boolean | null | undefined>,

		/** The keyword pattern. */
		pattern: FormControl<string | null | undefined>,
	}
	export function CreateInformationProtectionKeywordFormGroup() {
		return new FormGroup<InformationProtectionKeywordFormProperties>({
			canBeNumeric: new FormControl<boolean | null | undefined>(undefined),
			custom: new FormControl<boolean | null | undefined>(undefined),
			excluded: new FormControl<boolean | null | undefined>(undefined),
			pattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information protection policy. */
	export interface InformationProtectionPolicy {

		/** describes properties of an information protection policy. */
		properties?: InformationProtectionPolicyProperties;
	}

	/** Information protection policy. */
	export interface InformationProtectionPolicyFormProperties {
	}
	export function CreateInformationProtectionPolicyFormGroup() {
		return new FormGroup<InformationProtectionPolicyFormProperties>({
		});

	}


	/** describes properties of an information protection policy. */
	export interface InformationProtectionPolicyProperties {

		/** The sensitivity information types. */
		informationTypes?: {[id: string]: InformationType };

		/** Dictionary of sensitivity labels. */
		labels?: {[id: string]: SensitivityLabel };

		/** Describes the last UTC time the policy was modified. */
		lastModifiedUtc?: Date | null;
	}

	/** describes properties of an information protection policy. */
	export interface InformationProtectionPolicyPropertiesFormProperties {

		/** The sensitivity information types. */
		informationTypes: FormControl<{[id: string]: InformationType } | null | undefined>,

		/** Dictionary of sensitivity labels. */
		labels: FormControl<{[id: string]: SensitivityLabel } | null | undefined>,

		/** Describes the last UTC time the policy was modified. */
		lastModifiedUtc: FormControl<Date | null | undefined>,
	}
	export function CreateInformationProtectionPolicyPropertiesFormGroup() {
		return new FormGroup<InformationProtectionPolicyPropertiesFormProperties>({
			informationTypes: new FormControl<{[id: string]: InformationType } | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: SensitivityLabel } | null | undefined>(undefined),
			lastModifiedUtc: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The information type. */
	export interface InformationType {

		/** Indicates whether the information type is custom or not. */
		custom?: boolean | null;

		/** The name of the information type. */
		displayName?: string | null;

		/** Indicates whether the information type is enabled or not. */
		enabled?: boolean | null;

		/** The information type keywords. */
		keywords?: Array<InformationProtectionKeyword>;

		/** The order of the information type. */
		order?: number | null;

		/** The recommended label id to be associated with this information type. */
		recommendedLabelId?: string | null;
	}

	/** The information type. */
	export interface InformationTypeFormProperties {

		/** Indicates whether the information type is custom or not. */
		custom: FormControl<boolean | null | undefined>,

		/** The name of the information type. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates whether the information type is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,

		/** The order of the information type. */
		order: FormControl<number | null | undefined>,

		/** The recommended label id to be associated with this information type. */
		recommendedLabelId: FormControl<string | null | undefined>,
	}
	export function CreateInformationTypeFormGroup() {
		return new FormGroup<InformationTypeFormProperties>({
			custom: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			recommendedLabelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The sensitivity label. */
	export interface SensitivityLabel {

		/** The name of the sensitivity label. */
		displayName?: string | null;

		/** Indicates whether the label is enabled or not. */
		enabled?: boolean | null;

		/** The order of the sensitivity label. */
		order?: number | null;
	}

	/** The sensitivity label. */
	export interface SensitivityLabelFormProperties {

		/** The name of the sensitivity label. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates whether the label is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,

		/** The order of the sensitivity label. */
		order: FormControl<number | null | undefined>,
	}
	export function CreateSensitivityLabelFormGroup() {
		return new FormGroup<SensitivityLabelFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information protection policies response. */
	export interface InformationProtectionPolicyList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** List of information protection policies. */
		value?: Array<InformationProtectionPolicy>;
	}

	/** Information protection policies response. */
	export interface InformationProtectionPolicyListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateInformationProtectionPolicyListFormGroup() {
		return new FormGroup<InformationProtectionPolicyListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Information protection policies of a specific management group.
		 * Get {scope}/providers/Microsoft.Security/informationProtectionPolicies
		 * @param {string} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @return {InformationProtectionPolicyList} OK
		 */
		InformationProtectionPolicies_List(api_version: string, scope: string): Observable<InformationProtectionPolicyList> {
			return this.http.get<InformationProtectionPolicyList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/informationProtectionPolicies?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Details of the information protection policy.
		 * Get {scope}/providers/Microsoft.Security/informationProtectionPolicies/{informationProtectionPolicyName}
		 * @param {string} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @param {InformationProtectionPolicies_GetInformationProtectionPolicyName} informationProtectionPolicyName Name of the information protection policy.
		 * @return {InformationProtectionPolicy} OK
		 */
		InformationProtectionPolicies_Get(api_version: string, scope: string, informationProtectionPolicyName: InformationProtectionPolicies_GetInformationProtectionPolicyName): Observable<InformationProtectionPolicy> {
			return this.http.get<InformationProtectionPolicy>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/informationProtectionPolicies/' + informationProtectionPolicyName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', {});
		}

		/**
		 * Details of the information protection policy.
		 * Put {scope}/providers/Microsoft.Security/informationProtectionPolicies/{informationProtectionPolicyName}
		 * @param {string} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @param {InformationProtectionPolicies_GetInformationProtectionPolicyName} informationProtectionPolicyName Name of the information protection policy.
		 * @return {InformationProtectionPolicy} OK
		 */
		InformationProtectionPolicies_CreateOrUpdate(api_version: string, scope: string, informationProtectionPolicyName: InformationProtectionPolicies_GetInformationProtectionPolicyName): Observable<InformationProtectionPolicy> {
			return this.http.put<InformationProtectionPolicy>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/informationProtectionPolicies/' + informationProtectionPolicyName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '', null, {});
		}
	}

	export enum InformationProtectionPolicies_GetInformationProtectionPolicyName { effective = 'effective', custom = 'custom' }

}

