import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Application stack. */
	export interface ApplicationStack {

		/** Application stack dependency. */
		dependency?: string | null;

		/** Application stack display name. */
		display?: string | null;

		/** List of frameworks associated with application stack. */
		frameworks?: Array<ApplicationStack>;

		/** List of major versions available. */
		majorVersions?: Array<StackMajorVersion>;

		/** Application stack name. */
		name?: string | null;
	}

	/** Application stack. */
	export interface ApplicationStackFormProperties {

		/** Application stack dependency. */
		dependency: FormControl<string | null | undefined>,

		/** Application stack display name. */
		display: FormControl<string | null | undefined>,

		/** Application stack name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateApplicationStackFormGroup() {
		return new FormGroup<ApplicationStackFormProperties>({
			dependency: new FormControl<string | null | undefined>(undefined),
			display: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Application stack major version. */
	export interface StackMajorVersion {

		/** <code>true</code> if this supports Application Insights; otherwise, <code>false</code>. */
		applicationInsights?: boolean | null;

		/** Application stack major version (display only). */
		displayVersion?: string | null;

		/** <code>true</code> if this is the default major version; otherwise, <code>false</code>. */
		isDefault?: boolean | null;

		/** <code>true</code> if this stack has been deprecated, otherwise <code>false</code>. */
		isDeprecated?: boolean | null;

		/** <code>true</code> if this stack should be hidden for new customers on portal, otherwise <code>false</code>. */
		isHidden?: boolean | null;

		/** <code>true</code> if this stack is in Preview, otherwise <code>false</code>. */
		isPreview?: boolean | null;

		/** Minor versions associated with the major version. */
		minorVersions?: Array<StackMinorVersion>;

		/** Application stack major version (runtime only). */
		runtimeVersion?: string | null;
	}

	/** Application stack major version. */
	export interface StackMajorVersionFormProperties {

		/** <code>true</code> if this supports Application Insights; otherwise, <code>false</code>. */
		applicationInsights: FormControl<boolean | null | undefined>,

		/** Application stack major version (display only). */
		displayVersion: FormControl<string | null | undefined>,

		/** <code>true</code> if this is the default major version; otherwise, <code>false</code>. */
		isDefault: FormControl<boolean | null | undefined>,

		/** <code>true</code> if this stack has been deprecated, otherwise <code>false</code>. */
		isDeprecated: FormControl<boolean | null | undefined>,

		/** <code>true</code> if this stack should be hidden for new customers on portal, otherwise <code>false</code>. */
		isHidden: FormControl<boolean | null | undefined>,

		/** <code>true</code> if this stack is in Preview, otherwise <code>false</code>. */
		isPreview: FormControl<boolean | null | undefined>,

		/** Application stack major version (runtime only). */
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateStackMajorVersionFormGroup() {
		return new FormGroup<StackMajorVersionFormProperties>({
			applicationInsights: new FormControl<boolean | null | undefined>(undefined),
			displayVersion: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isDeprecated: new FormControl<boolean | null | undefined>(undefined),
			isHidden: new FormControl<boolean | null | undefined>(undefined),
			isPreview: new FormControl<boolean | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Application stack minor version. */
	export interface StackMinorVersion {

		/** Application stack minor version (display only). */
		displayVersion?: string | null;

		/** <code>true</code> if this is the default minor version; otherwise, <code>false</code>. */
		isDefault?: boolean | null;

		/** <code>true</code> if this supports Remote Debugging, otherwise <code>false</code>. */
		isRemoteDebuggingEnabled?: boolean | null;

		/** Application stack minor version (runtime only). */
		runtimeVersion?: string | null;
	}

	/** Application stack minor version. */
	export interface StackMinorVersionFormProperties {

		/** Application stack minor version (display only). */
		displayVersion: FormControl<string | null | undefined>,

		/** <code>true</code> if this is the default minor version; otherwise, <code>false</code>. */
		isDefault: FormControl<boolean | null | undefined>,

		/** <code>true</code> if this supports Remote Debugging, otherwise <code>false</code>. */
		isRemoteDebuggingEnabled: FormControl<boolean | null | undefined>,

		/** Application stack minor version (runtime only). */
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateStackMinorVersionFormGroup() {
		return new FormGroup<StackMinorVersionFormProperties>({
			displayVersion: new FormControl<string | null | undefined>(undefined),
			isDefault: new FormControl<boolean | null | undefined>(undefined),
			isRemoteDebuggingEnabled: new FormControl<boolean | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection of Application Stacks */
	export interface ApplicationStackCollection {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		value: Array<ApplicationStackResource>;
	}

	/** Collection of Application Stacks */
	export interface ApplicationStackCollectionFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateApplicationStackCollectionFormGroup() {
		return new FormGroup<ApplicationStackCollectionFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM resource for a ApplicationStack. */
	export interface ApplicationStackResource {

		/** Application stack. */
		properties?: ApplicationStack;
	}

	/** ARM resource for a ApplicationStack. */
	export interface ApplicationStackResourceFormProperties {
	}
	export function CreateApplicationStackResourceFormGroup() {
		return new FormGroup<ApplicationStackResourceFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get available application frameworks and their versions
		 * Description for Get available application frameworks and their versions
		 * Get providers/Microsoft.Web/availableStacks
		 * @param {string} api_version API Version
		 * @return {ApplicationStackCollection} OK
		 */
		Provider_GetAvailableStacks(osTypeSelected: Provider_GetAvailableStacksOsTypeSelected | null | undefined, api_version: string): Observable<ApplicationStackCollection> {
			return this.http.get<ApplicationStackCollection>(this.baseUri + 'providers/Microsoft.Web/availableStacks?osTypeSelected=' + osTypeSelected + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric definitions
		 * Description for Gets all available operations for the Microsoft.Web resource provider. Also exposes resource metric definitions
		 * Get providers/Microsoft.Web/operations
		 * @param {string} api_version API Version
		 * @return {Provider_ListOperationsReturn} OK
		 */
		Provider_ListOperations(api_version: string): Observable<Provider_ListOperationsReturn> {
			return this.http.get<Provider_ListOperationsReturn>(this.baseUri + 'providers/Microsoft.Web/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Get available application frameworks and their versions
		 * Description for Get available application frameworks and their versions
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Web/availableStacks
		 * @param {string} subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
		 * @param {string} api_version API Version
		 * @return {ApplicationStackCollection} OK
		 */
		Provider_GetAvailableStacksOnPrem(osTypeSelected: Provider_GetAvailableStacksOsTypeSelected | null | undefined, subscriptionId: string, api_version: string): Observable<ApplicationStackCollection> {
			return this.http.get<ApplicationStackCollection>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Web/availableStacks?osTypeSelected=' + osTypeSelected + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum Provider_GetAvailableStacksOsTypeSelected { Windows = 0, Linux = 1, WindowsFunctions = 2, LinuxFunctions = 3 }

	export interface Provider_ListOperationsReturn {

		/** Link to next page of resources. */
		nextLink?: string | null;

		/**
		 * Collection of resources.
		 * Required
		 */
		Provider_ListOperationsReturnValue: Array<Provider_ListOperationsReturnValue>;
	}
	export interface Provider_ListOperationsReturnFormProperties {

		/** Link to next page of resources. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateProvider_ListOperationsReturnFormGroup() {
		return new FormGroup<Provider_ListOperationsReturnFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Provider_ListOperationsReturnValue {

		/** Meta data about operation used for display in portal. */
		display?: Provider_ListOperationsReturnValueDisplay;
		name?: string | null;
		origin?: string | null;

		/** Properties available for a Microsoft.Web resource provider operation. */
		properties?: Provider_ListOperationsReturnValueProperties;
	}
	export interface Provider_ListOperationsReturnValueFormProperties {
		name: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
	}
	export function CreateProvider_ListOperationsReturnValueFormGroup() {
		return new FormGroup<Provider_ListOperationsReturnValueFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Provider_ListOperationsReturnValueDisplay {
		description?: string | null;
		operation?: string | null;
		provider?: string | null;
		resource?: string | null;
	}
	export interface Provider_ListOperationsReturnValueDisplayFormProperties {
		description: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
		resource: FormControl<string | null | undefined>,
	}
	export function CreateProvider_ListOperationsReturnValueDisplayFormGroup() {
		return new FormGroup<Provider_ListOperationsReturnValueDisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Provider_ListOperationsReturnValueProperties {

		/** Resource metrics service provided by Microsoft.Insights resource provider. */
		serviceSpecification?: Provider_ListOperationsReturnValuePropertiesServiceSpecification;
	}
	export interface Provider_ListOperationsReturnValuePropertiesFormProperties {
	}
	export function CreateProvider_ListOperationsReturnValuePropertiesFormGroup() {
		return new FormGroup<Provider_ListOperationsReturnValuePropertiesFormProperties>({
		});

	}

	export interface Provider_ListOperationsReturnValuePropertiesServiceSpecification {
		Provider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecifications?: Array<Provider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecifications>;
		Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecifications?: Array<Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecifications>;
	}
	export interface Provider_ListOperationsReturnValuePropertiesServiceSpecificationFormProperties {
	}
	export function CreateProvider_ListOperationsReturnValuePropertiesServiceSpecificationFormGroup() {
		return new FormGroup<Provider_ListOperationsReturnValuePropertiesServiceSpecificationFormProperties>({
		});

	}

	export interface Provider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecifications {
		blobDuration?: string | null;
		displayName?: string | null;
		name?: string | null;
	}
	export interface Provider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecificationsFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateProvider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecificationsFormGroup() {
		return new FormGroup<Provider_ListOperationsReturnValuePropertiesServiceSpecificationLogSpecificationsFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecifications {
		aggregationType?: string | null;
		Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilities?: Array<Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilities>;
		category?: string | null;
		Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensions?: Array<Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensions>;
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
	export interface Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsFormProperties {
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
	export function CreateProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsFormGroup() {
		return new FormGroup<Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsFormProperties>({
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

	export interface Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilities {
		blobDuration?: string | null;
		timeGrain?: string | null;
	}
	export interface Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		timeGrain: FormControl<string | null | undefined>,
	}
	export function CreateProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormGroup() {
		return new FormGroup<Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsAvailabilitiesFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensions {
		displayName?: string | null;
		internalName?: string | null;
		name?: string | null;
		toBeExportedForShoebox?: boolean | null;
	}
	export interface Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensionsFormProperties {
		displayName: FormControl<string | null | undefined>,
		internalName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		toBeExportedForShoebox: FormControl<boolean | null | undefined>,
	}
	export function CreateProvider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensionsFormGroup() {
		return new FormGroup<Provider_ListOperationsReturnValuePropertiesServiceSpecificationMetricSpecificationsDimensionsFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			internalName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			toBeExportedForShoebox: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

