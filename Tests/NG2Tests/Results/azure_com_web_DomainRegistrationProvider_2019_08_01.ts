import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
		 * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the resource provider
		 * Get providers/Microsoft.DomainRegistration/operations
		 * @param {string} api_version API Version
		 * @return {DomainRegistrationProvider_ListOperationsReturn} OK
		 */
		DomainRegistrationProvider_ListOperations(api_version: string): Observable<DomainRegistrationProvider_ListOperationsReturn> {
			return this.http.get<DomainRegistrationProvider_ListOperationsReturn>(this.baseUri + 'providers/Microsoft.DomainRegistration/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export interface DomainRegistrationProvider_ListOperationsReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		DomainRegistrationProvider_ListOperationsReturnValue: Array<DomainRegistrationProvider_ListOperationsReturnValue>;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnValue {

		/** Meta data about operation used for display in portal. */
		display?: DomainRegistrationProvider_ListOperationsReturnValueDisplay;
		name?: string | null;
		origin?: string | null;

		/** Properties available for a Microsoft.Web resource provider operation. */
		properties?: DomainRegistrationProvider_ListOperationsReturnValueProperties;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnValueFormProperties {
		name: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnValueFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnValueDisplay {
		description?: string | null;
		operation?: string | null;
		provider?: string | null;
		resource?: string | null;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnValueDisplayFormProperties {
		description: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
		resource: FormControl<string | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnValueDisplayFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnValueDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnValueProperties {

		/** Resource metrics service provided by Microsoft.Insights resource provider. */
		serviceSpecification?: DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecification;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesFormProperties {
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnValuePropertiesFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnValuePropertiesFormProperties>({
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecification {
		DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecifications?: Array<DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecifications>;
		DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecifications?: Array<DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecifications>;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationFormProperties {
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationFormProperties>({
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecifications {
		blobDuration?: string | null;
		displayName?: string | null;
		name?: string | null;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecificationsFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecificationsFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecificationsFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecifications {
		aggregationType?: string | null;
		DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilities?: Array<DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilities>;
		category?: string | null;
		DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensions?: Array<DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensions>;
		displayDescription?: string | null;
		displayName?: string | null;
		enableRegionalMdmAccount?: boolean | null;
		fillGapWithZero?: boolean | null;
		isInternal?: boolean | null;
		metricFilterPattern?: string | null;
		name?: string | null;
		sourceMdmAccount?: string | null;
		sourceMdmNamespace?: string | null;
		supportedTimeGrainTypes?: Array<string>;
		supportsInstanceLevelAggregation?: boolean | null;
		unit?: string | null;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsFormProperties {
		aggregationType: FormControl<string | null | undefined>,
		category: FormControl<string | null | undefined>,
		displayDescription: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		enableRegionalMdmAccount: FormControl<boolean | null | undefined>,
		fillGapWithZero: FormControl<boolean | null | undefined>,
		isInternal: FormControl<boolean | null | undefined>,
		metricFilterPattern: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		sourceMdmAccount: FormControl<string | null | undefined>,
		sourceMdmNamespace: FormControl<string | null | undefined>,
		supportsInstanceLevelAggregation: FormControl<boolean | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsFormProperties>({
			aggregationType: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<string | null | undefined>(undefined),
			displayDescription: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enableRegionalMdmAccount: new FormControl<boolean | null | undefined>(undefined),
			fillGapWithZero: new FormControl<boolean | null | undefined>(undefined),
			isInternal: new FormControl<boolean | null | undefined>(undefined),
			metricFilterPattern: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceMdmAccount: new FormControl<string | null | undefined>(undefined),
			sourceMdmNamespace: new FormControl<string | null | undefined>(undefined),
			supportsInstanceLevelAggregation: new FormControl<boolean | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilities {
		blobDuration?: string | null;
		timeGrain?: string | null;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensions {
		displayName?: string | null;
		internalName?: string | null;
		name?: string | null;
		toBeExportedForShoebox?: boolean | null;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensionsFormProperties {
		displayName: FormControl<string | null | undefined>,
		internalName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		toBeExportedForShoebox: FormControl<boolean | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensionsFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensionsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			internalName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			toBeExportedForShoebox: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

