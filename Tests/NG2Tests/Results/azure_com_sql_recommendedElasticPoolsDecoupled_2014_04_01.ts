import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface RecommendedElasticPool {
	}
	export interface RecommendedElasticPoolFormProperties {
	}
	export function CreateRecommendedElasticPoolFormGroup() {
		return new FormGroup<RecommendedElasticPoolFormProperties>({
		});

	}


	/** Represents the response to a list recommended elastic pool metrics request. */
	export interface RecommendedElasticPoolListMetricsResult {

		/**
		 * The list of recommended elastic pools metrics.
		 * Required
		 */
		value: Array<RecommendedElasticPoolMetric>;
	}

	/** Represents the response to a list recommended elastic pool metrics request. */
	export interface RecommendedElasticPoolListMetricsResultFormProperties {
	}
	export function CreateRecommendedElasticPoolListMetricsResultFormGroup() {
		return new FormGroup<RecommendedElasticPoolListMetricsResultFormProperties>({
		});

	}


	/** Represents recommended elastic pool metric. */
	export interface RecommendedElasticPoolMetric {

		/** The time of metric (ISO8601 format). */
		dateTime?: Date | null;

		/**
		 * Gets or sets the DTUs (Database Transaction Units). See https://azure.microsoft.com/documentation/articles/sql-database-what-is-a-dtu/
		 * Type: double
		 */
		dtu?: number | null;

		/**
		 * Gets or sets size in gigabytes.
		 * Type: double
		 */
		sizeGB?: number | null;
	}

	/** Represents recommended elastic pool metric. */
	export interface RecommendedElasticPoolMetricFormProperties {

		/** The time of metric (ISO8601 format). */
		dateTime: FormControl<Date | null | undefined>,

		/**
		 * Gets or sets the DTUs (Database Transaction Units). See https://azure.microsoft.com/documentation/articles/sql-database-what-is-a-dtu/
		 * Type: double
		 */
		dtu: FormControl<number | null | undefined>,

		/**
		 * Gets or sets size in gigabytes.
		 * Type: double
		 */
		sizeGB: FormControl<number | null | undefined>,
	}
	export function CreateRecommendedElasticPoolMetricFormGroup() {
		return new FormGroup<RecommendedElasticPoolMetricFormProperties>({
			dateTime: new FormControl<Date | null | undefined>(undefined),
			dtu: new FormControl<number | null | undefined>(undefined),
			sizeGB: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents the response to a list recommended elastic pool request. */
	export interface RecommendedElasticPoolListResult {

		/**
		 * The list of recommended elastic pools hosted in the server.
		 * Required
		 */
		value: Array<RecommendedElasticPool>;
	}

	/** Represents the response to a list recommended elastic pool request. */
	export interface RecommendedElasticPoolListResultFormProperties {
	}
	export function CreateRecommendedElasticPoolListResultFormGroup() {
		return new FormGroup<RecommendedElasticPoolListResultFormProperties>({
		});

	}


	/** Represents the properties of a recommended elastic pool. */
	export interface RecommendedElasticPoolProperties {

		/**
		 * The maximum DTU for the database.
		 * Type: double
		 */
		databaseDtuMax?: number | null;

		/**
		 * The minimum DTU for the database.
		 * Type: double
		 */
		databaseDtuMin?: number | null;

		/** The edition of the recommended elastic pool. The ElasticPoolEdition enumeration contains all the valid editions. */
		databaseEdition?: RecommendedElasticPoolPropertiesDatabaseEdition | null;

		/** The list of databases in this pool. Expanded property */
		RecommendedElasticPoolPropertiesDatabases?: Array<RecommendedElasticPoolPropertiesDatabases>;

		/**
		 * The DTU for the recommended elastic pool.
		 * Type: double
		 */
		dtu?: number | null;

		/**
		 * Gets maximum observed DTU.
		 * Type: double
		 */
		maxObservedDtu?: number | null;

		/**
		 * Gets maximum observed storage in megabytes.
		 * Type: double
		 */
		maxObservedStorageMB?: number | null;

		/** The list of databases housed in the server. Expanded property */
		metrics?: Array<RecommendedElasticPoolMetric>;

		/** The observation period start (ISO8601 format). */
		observationPeriodEnd?: Date | null;

		/** The observation period start (ISO8601 format). */
		observationPeriodStart?: Date | null;

		/**
		 * Gets storage size in megabytes.
		 * Type: double
		 */
		storageMB?: number | null;
	}

	/** Represents the properties of a recommended elastic pool. */
	export interface RecommendedElasticPoolPropertiesFormProperties {

		/**
		 * The maximum DTU for the database.
		 * Type: double
		 */
		databaseDtuMax: FormControl<number | null | undefined>,

		/**
		 * The minimum DTU for the database.
		 * Type: double
		 */
		databaseDtuMin: FormControl<number | null | undefined>,

		/** The edition of the recommended elastic pool. The ElasticPoolEdition enumeration contains all the valid editions. */
		databaseEdition: FormControl<RecommendedElasticPoolPropertiesDatabaseEdition | null | undefined>,

		/**
		 * The DTU for the recommended elastic pool.
		 * Type: double
		 */
		dtu: FormControl<number | null | undefined>,

		/**
		 * Gets maximum observed DTU.
		 * Type: double
		 */
		maxObservedDtu: FormControl<number | null | undefined>,

		/**
		 * Gets maximum observed storage in megabytes.
		 * Type: double
		 */
		maxObservedStorageMB: FormControl<number | null | undefined>,

		/** The observation period start (ISO8601 format). */
		observationPeriodEnd: FormControl<Date | null | undefined>,

		/** The observation period start (ISO8601 format). */
		observationPeriodStart: FormControl<Date | null | undefined>,

		/**
		 * Gets storage size in megabytes.
		 * Type: double
		 */
		storageMB: FormControl<number | null | undefined>,
	}
	export function CreateRecommendedElasticPoolPropertiesFormGroup() {
		return new FormGroup<RecommendedElasticPoolPropertiesFormProperties>({
			databaseDtuMax: new FormControl<number | null | undefined>(undefined),
			databaseDtuMin: new FormControl<number | null | undefined>(undefined),
			databaseEdition: new FormControl<RecommendedElasticPoolPropertiesDatabaseEdition | null | undefined>(undefined),
			dtu: new FormControl<number | null | undefined>(undefined),
			maxObservedDtu: new FormControl<number | null | undefined>(undefined),
			maxObservedStorageMB: new FormControl<number | null | undefined>(undefined),
			observationPeriodEnd: new FormControl<Date | null | undefined>(undefined),
			observationPeriodStart: new FormControl<Date | null | undefined>(undefined),
			storageMB: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RecommendedElasticPoolPropertiesDatabaseEdition { Basic = 'Basic', Standard = 'Standard', Premium = 'Premium', GeneralPurpose = 'GeneralPurpose', BusinessCritical = 'BusinessCritical' }

	export interface RecommendedElasticPoolPropertiesDatabases {

		/**
		 * Resource location.
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}
	export interface RecommendedElasticPoolPropertiesDatabasesFormProperties {

		/**
		 * Resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRecommendedElasticPoolPropertiesDatabasesFormGroup() {
		return new FormGroup<RecommendedElasticPoolPropertiesDatabasesFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns recommended elastic pools.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recommendedElasticPools
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @return {RecommendedElasticPoolListResult} OK
		 */
		RecommendedElasticPools_ListByServer(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string): Observable<RecommendedElasticPoolListResult> {
			return this.http.get<RecommendedElasticPoolListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/recommendedElasticPools?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a recommended elastic pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recommendedElasticPools/{recommendedElasticPoolName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
		 * @return {RecommendedElasticPool} OK
		 */
		RecommendedElasticPools_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, recommendedElasticPoolName: string): Observable<RecommendedElasticPool> {
			return this.http.get<RecommendedElasticPool>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/recommendedElasticPools/' + (recommendedElasticPoolName == null ? '' : encodeURIComponent(recommendedElasticPoolName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns recommended elastic pool metrics.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/recommendedElasticPools/{recommendedElasticPoolName}/metrics
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} recommendedElasticPoolName The name of the recommended elastic pool to be retrieved.
		 * @return {RecommendedElasticPoolListMetricsResult} OK
		 */
		RecommendedElasticPools_ListMetrics(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, recommendedElasticPoolName: string): Observable<RecommendedElasticPoolListMetricsResult> {
			return this.http.get<RecommendedElasticPoolListMetricsResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/recommendedElasticPools/' + (recommendedElasticPoolName == null ? '' : encodeURIComponent(recommendedElasticPoolName)) + '/metrics?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

