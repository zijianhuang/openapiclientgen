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
		display?: DomainRegistrationProvider_ListOperationsReturnDisplay;
		name?: string | null;
		origin?: string | null;

		/** Properties available for a Microsoft.Web resource provider operation. */
		properties?: DomainRegistrationProvider_ListOperationsReturnProperties;
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

	export interface DomainRegistrationProvider_ListOperationsReturnDisplay {
		description?: string | null;
		operation?: string | null;
		provider?: string | null;
		resource?: string | null;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnDisplayFormProperties {
		description: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
		resource: FormControl<string | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnDisplayFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnProperties {

		/** Resource metrics service provided by Microsoft.Insights resource provider. */
		serviceSpecification?: DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecification;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesFormProperties {
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnPropertiesFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnPropertiesFormProperties>({
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecification {
		DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationLogSpecifications?: Array<DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationLogSpecifications>;
		DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecifications?: Array<DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecifications>;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationFormProperties {
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationFormProperties>({
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationLogSpecifications {
		blobDuration?: string | null;
		displayName?: string | null;
		name?: string | null;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationLogSpecificationsFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationLogSpecificationsFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationLogSpecificationsFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecifications {
		aggregationType?: string | null;
		DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsAvailabilities?: Array<DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsAvailabilities>;
		category?: string | null;
		DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsDimensions?: Array<DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsDimensions>;
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
	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsFormProperties {
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
	export function CreateDomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsFormProperties>({
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

	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsAvailabilities {
		blobDuration?: string | null;
		timeGrain?: string | null;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsDimensions {
		displayName?: string | null;
		internalName?: string | null;
		name?: string | null;
		toBeExportedForShoebox?: boolean | null;
	}
	export interface DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsDimensionsFormProperties {
		displayName: FormControl<string | null | undefined>,
		internalName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		toBeExportedForShoebox: FormControl<boolean | null | undefined>,
	}
	export function CreateDomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsDimensionsFormGroup() {
		return new FormGroup<DomainRegistrationProvider_ListOperationsReturnPropertiesServiceSpecificationMetricSpecificationsDimensionsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			internalName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			toBeExportedForShoebox: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

