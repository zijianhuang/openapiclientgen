import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Summary of the alerts. */
	export interface AlertSummary {

		/** The number of critical alerts for the service. */
		criticalAlertCount?: number | null;

		/** The number of warning alerts for the service. */
		warningAlertCount?: number | null;
	}

	/** Summary of the alerts. */
	export interface AlertSummaryFormProperties {

		/** The number of critical alerts for the service. */
		criticalAlertCount: FormControl<number | null | undefined>,

		/** The number of warning alerts for the service. */
		warningAlertCount: FormControl<number | null | undefined>,
	}
	export function CreateAlertSummaryFormGroup() {
		return new FormGroup<AlertSummaryFormProperties>({
			criticalAlertCount: new FormControl<number | null | undefined>(undefined),
			warningAlertCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Models the base properties for health resource. */
	export interface BaseHealth {

		/** Summary of the alerts. */
		alertSummary?: AlertSummary;

		/** Health state. */
		healthState?: string | null;

		/** Namespace of the health resource. */
		namespace?: string | null;

		/** Registration ID. */
		registrationId?: string | null;

		/** Route prefix. */
		routePrefix?: string | null;
	}

	/** Models the base properties for health resource. */
	export interface BaseHealthFormProperties {

		/** Health state. */
		healthState: FormControl<string | null | undefined>,

		/** Namespace of the health resource. */
		namespace: FormControl<string | null | undefined>,

		/** Registration ID. */
		registrationId: FormControl<string | null | undefined>,

		/** Route prefix. */
		routePrefix: FormControl<string | null | undefined>,
	}
	export function CreateBaseHealthFormGroup() {
		return new FormGroup<BaseHealthFormProperties>({
			healthState: new FormControl<string | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			registrationId: new FormControl<string | null | undefined>(undefined),
			routePrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dictionary of string key-value pairs. */
	export interface Dictionary {
	}

	/** Dictionary of string key-value pairs. */
	export interface DictionaryFormProperties {
	}
	export function CreateDictionaryFormGroup() {
		return new FormGroup<DictionaryFormProperties>({
		});

	}


	/** Contains the localized display information for this particular operation / action. */
	export interface Display {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description?: string | null;

		/** The localized, friendly name for the operation. Use the name as it will be displayed to the user. */
		operation?: string | null;

		/** The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with "Microsoft" for first-party services. For example, the provider name may be"Microsoft Monitoring Insights" or "Microsoft Compute". */
		provider?: string | null;

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource?: string | null;
	}

	/** Contains the localized display information for this particular operation / action. */
	export interface DisplayFormProperties {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description: FormControl<string | null | undefined>,

		/** The localized, friendly name for the operation. Use the name as it will be displayed to the user. */
		operation: FormControl<string | null | undefined>,

		/** The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with "Microsoft" for first-party services. For example, the provider name may be"Microsoft Monitoring Insights" or "Microsoft Compute". */
		provider: FormControl<string | null | undefined>,

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateDisplayFormGroup() {
		return new FormGroup<DisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metrics for a source. */
	export interface Metrics {

		/** Name of the counter. */
		maCounterName?: string | null;

		/** Name of the usage metric. */
		name?: string | null;

		/** Time counter was observed. */
		observedTimestamp?: Date | null;

		/** The origin of the metric. */
		sourceName?: MetricsSourceName | null;

		/** Type of the source. */
		sourceType?: string | null;

		/** The unit of the metric. */
		unit?: MetricsUnit | null;

		/** Name of the usage metric. */
		value?: number | null;
	}

	/** Metrics for a source. */
	export interface MetricsFormProperties {

		/** Name of the counter. */
		maCounterName: FormControl<string | null | undefined>,

		/** Name of the usage metric. */
		name: FormControl<string | null | undefined>,

		/** Time counter was observed. */
		observedTimestamp: FormControl<Date | null | undefined>,

		/** The origin of the metric. */
		sourceName: FormControl<MetricsSourceName | null | undefined>,

		/** Type of the source. */
		sourceType: FormControl<string | null | undefined>,

		/** The unit of the metric. */
		unit: FormControl<MetricsUnit | null | undefined>,

		/** Name of the usage metric. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateMetricsFormGroup() {
		return new FormGroup<MetricsFormProperties>({
			maCounterName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			observedTimestamp: new FormControl<Date | null | undefined>(undefined),
			sourceName: new FormControl<MetricsSourceName | null | undefined>(undefined),
			sourceType: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<MetricsUnit | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum MetricsSourceName { PhysicalNode = 'PhysicalNode', VirtualMachine = 'VirtualMachine', ResourceProvider = 'ResourceProvider' }

	export enum MetricsUnit { One = 'One', Percentage = 'Percentage', B = 'B', KB = 'KB', MB = 'MB', GB = 'GB', TB = 'TB' }


	/** The origin of the metric. */
	export enum MetricsSourceType { PhysicalNode = 'PhysicalNode', VirtualMachine = 'VirtualMachine', ResourceProvider = 'ResourceProvider' }


	/** Describes the supported REST operation. */
	export interface Operation {

		/** Contains the localized display information for this particular operation / action. */
		display?: Display;

		/** The name of the operation performed on the object. The name should match the action name that appears in RBAC or the event service. */
		name?: string | null;
	}

	/** Describes the supported REST operation. */
	export interface OperationFormProperties {

		/** The name of the operation performed on the object. The name should match the action name that appears in RBAC or the event service. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Operations */
	export interface OperationList {

		/** URI to the next page of operations. */
		nextLink?: string | null;

		/** Array of operations */
		value?: Array<Operation>;
	}

	/** List of Operations */
	export interface OperationListFormProperties {

		/** URI to the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The core properties of ARM resources */
	export interface Resource {

		/** Fully qualified resource Id for the resource */
		id?: string | null;

		/** The name of the resource */
		name?: string | null;

		/** The type of the resource. */
		type?: string | null;
	}

	/** The core properties of ARM resources */
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource */
		id: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResource extends Resource {

		/** The Azure Region where the resource lives */
		location?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/** The Azure Region where the resource lives */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Metrics of resource usage. */
	export interface UsageMetrics {

		/** List of usage metrics. */
		metricsValue?: Array<Metrics>;

		/** Name of the usage metric. */
		name?: string | null;
	}

	/** Metrics of resource usage. */
	export interface UsageMetricsFormProperties {

		/** Name of the usage metric. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUsageMetricsFormGroup() {
		return new FormGroup<UsageMetricsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of support REST operations.
		 * Get providers/Microsoft.InfrastructureInsights.Admin/operations
		 * @param {string} api_version Client API Version.
		 * @return {OperationList} OK
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.InfrastructureInsights.Admin/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

