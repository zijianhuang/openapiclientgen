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
		 * Get providers/Microsoft.CertificateRegistration/operations
		 * @param {string} api_version API Version
		 * @return {CertificateRegistrationProvider_ListOperationsReturn} OK
		 */
		CertificateRegistrationProvider_ListOperations(api_version: string): Observable<CertificateRegistrationProvider_ListOperationsReturn> {
			return this.http.get<CertificateRegistrationProvider_ListOperationsReturn>(this.baseUri + 'providers/Microsoft.CertificateRegistration/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export interface CertificateRegistrationProvider_ListOperationsReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		CertificateRegistrationProvider_ListOperationsReturnValue: Array<CertificateRegistrationProvider_ListOperationsReturnValue>;
	}
	export interface CertificateRegistrationProvider_ListOperationsReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateCertificateRegistrationProvider_ListOperationsReturnFormGroup() {
		return new FormGroup<CertificateRegistrationProvider_ListOperationsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateRegistrationProvider_ListOperationsReturnValue {

		/** Meta data about operation used for display in portal. */
		display?: CertificateRegistrationProvider_ListOperationsReturnValueDisplay;
		name?: string | null;
		origin?: string | null;

		/** Properties available for a Microsoft.Web resource provider operation. */
		properties?: CertificateRegistrationProvider_ListOperationsReturnValueProperties;
	}
	export interface CertificateRegistrationProvider_ListOperationsReturnValueFormProperties {
		name: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
	}
	export function CreateCertificateRegistrationProvider_ListOperationsReturnValueFormGroup() {
		return new FormGroup<CertificateRegistrationProvider_ListOperationsReturnValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateRegistrationProvider_ListOperationsReturnValueDisplay {
		description?: string | null;
		operation?: string | null;
		provider?: string | null;
		resource?: string | null;
	}
	export interface CertificateRegistrationProvider_ListOperationsReturnValueDisplayFormProperties {
		description: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
		resource: FormControl<string | null | undefined>,
	}
	export function CreateCertificateRegistrationProvider_ListOperationsReturnValueDisplayFormGroup() {
		return new FormGroup<CertificateRegistrationProvider_ListOperationsReturnValueDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateRegistrationProvider_ListOperationsReturnValueProperties {

		/** Resource metrics service provided by Microsoft.Insights resource provider. */
		serviceSpecification?: CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecification;
	}
	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesFormProperties {
	}
	export function CreateCertificateRegistrationProvider_ListOperationsReturnValuePropertiesFormGroup() {
		return new FormGroup<CertificateRegistrationProvider_ListOperationsReturnValuePropertiesFormProperties>({
		});

	}

	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecification {
		CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecifications?: Array<CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecifications>;
		CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecifications?: Array<CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecifications>;
	}
	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationFormProperties {
	}
	export function CreateCertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationFormGroup() {
		return new FormGroup<CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationFormProperties>({
		});

	}

	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecifications {
		blobDuration?: string | null;
		displayName?: string | null;
		name?: string | null;
	}
	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecificationsFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecificationsFormGroup() {
		return new FormGroup<CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecificationsFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecifications {
		aggregationType?: string | null;
		CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilities?: Array<CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilities>;
		category?: string | null;
		CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensions?: Array<CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensions>;
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
	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsFormProperties {
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
	export function CreateCertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsFormGroup() {
		return new FormGroup<CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsFormProperties>({
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

	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilities {
		blobDuration?: string | null;
		timeGrain?: string | null;
	}
	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateCertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormGroup() {
		return new FormGroup<CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensions {
		displayName?: string | null;
		internalName?: string | null;
		name?: string | null;
		toBeExportedForShoebox?: boolean | null;
	}
	export interface CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensionsFormProperties {
		displayName: FormControl<string | null | undefined>,
		internalName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		toBeExportedForShoebox: FormControl<boolean | null | undefined>,
	}
	export function CreateCertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensionsFormGroup() {
		return new FormGroup<CertificateRegistrationProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensionsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			internalName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			toBeExportedForShoebox: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

