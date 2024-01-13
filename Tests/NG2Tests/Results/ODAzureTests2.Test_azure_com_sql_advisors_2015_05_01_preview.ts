import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Database, Server or Elastic Pool Advisor. */
	export interface Advisor {

		/** Resource kind. */
		kind?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Properties for a Database, Server or Elastic Pool Advisor. */
		properties?: AdvisorProperties;
	}

	/** Database, Server or Elastic Pool Advisor. */
	export interface AdvisorFormProperties {

		/** Resource kind. */
		kind: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateAdvisorFormGroup() {
		return new FormGroup<AdvisorFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for a Database, Server or Elastic Pool Advisor. */
	export interface AdvisorProperties {

		/** Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'. */
		advisorStatus?: AdvisorPropertiesAdvisorStatus | null;

		/**
		 * Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
		 * Required
		 */
		autoExecuteStatus: AdvisorPropertiesAutoExecuteStatus;

		/** Gets the resource from which current value of auto-execute status is inherited. Auto-execute status can be set on (and inherited from) different levels in the resource hierarchy. Possible values are 'Subscription', 'Server', 'ElasticPool', 'Database' and 'Default' (when status is not explicitly set on any level). */
		autoExecuteStatusInheritedFrom?: AdvisorPropertiesAutoExecuteStatusInheritedFrom | null;

		/** Gets the time when the current resource was analyzed for recommendations by this advisor. */
		lastChecked?: Date | null;

		/** Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available),LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc. */
		recommendationsStatus?: string | null;

		/** Gets the recommended actions for this advisor. */
		recommendedActions?: Array<RecommendedAction>;
	}

	/** Properties for a Database, Server or Elastic Pool Advisor. */
	export interface AdvisorPropertiesFormProperties {

		/** Gets the status of availability of this advisor to customers. Possible values are 'GA', 'PublicPreview', 'LimitedPublicPreview' and 'PrivatePreview'. */
		advisorStatus: FormControl<AdvisorPropertiesAdvisorStatus | null | undefined>,

		/**
		 * Gets the auto-execute status (whether to let the system execute the recommendations) of this advisor. Possible values are 'Enabled' and 'Disabled'
		 * Required
		 */
		autoExecuteStatus: FormControl<AdvisorPropertiesAutoExecuteStatus | null | undefined>,

		/** Gets the resource from which current value of auto-execute status is inherited. Auto-execute status can be set on (and inherited from) different levels in the resource hierarchy. Possible values are 'Subscription', 'Server', 'ElasticPool', 'Database' and 'Default' (when status is not explicitly set on any level). */
		autoExecuteStatusInheritedFrom: FormControl<AdvisorPropertiesAutoExecuteStatusInheritedFrom | null | undefined>,

		/** Gets the time when the current resource was analyzed for recommendations by this advisor. */
		lastChecked: FormControl<Date | null | undefined>,

		/** Gets that status of recommendations for this advisor and reason for not having any recommendations. Possible values include, but are not limited to, 'Ok' (Recommendations available),LowActivity (not enough workload to analyze), 'DbSeemsTuned' (Database is doing well), etc. */
		recommendationsStatus: FormControl<string | null | undefined>,
	}
	export function CreateAdvisorPropertiesFormGroup() {
		return new FormGroup<AdvisorPropertiesFormProperties>({
			advisorStatus: new FormControl<AdvisorPropertiesAdvisorStatus | null | undefined>(undefined),
			autoExecuteStatus: new FormControl<AdvisorPropertiesAutoExecuteStatus | null | undefined>(undefined, [Validators.required]),
			autoExecuteStatusInheritedFrom: new FormControl<AdvisorPropertiesAutoExecuteStatusInheritedFrom | null | undefined>(undefined),
			lastChecked: new FormControl<Date | null | undefined>(undefined),
			recommendationsStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdvisorPropertiesAdvisorStatus { GA = 0, PublicPreview = 1, LimitedPublicPreview = 2, PrivatePreview = 3 }

	export enum AdvisorPropertiesAutoExecuteStatus { Enabled = 0, Disabled = 1, Default = 2 }

	export enum AdvisorPropertiesAutoExecuteStatusInheritedFrom { Default = 0, Subscription = 1, Server = 2, ElasticPool = 3, Database = 4 }


	/** Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedAction {

		/** Resource kind. */
		kind?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Properties for a Database, Server or Elastic Pool Recommended Action. */
		properties?: RecommendedActionProperties;
	}

	/** Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionFormProperties {

		/** Resource kind. */
		kind: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateRecommendedActionFormGroup() {
		return new FormGroup<RecommendedActionFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties for a Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionProperties {

		/** Gets additional details specific to this recommended action. */
		details?: {[id: string]: any };

		/** Contains error information for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
		errorDetails?: RecommendedActionErrorInfo;

		/** Gets the estimated impact info for this recommended action e.g., Estimated CPU gain, Estimated Disk Space change */
		estimatedImpact?: Array<RecommendedActionImpactRecord>;

		/** Gets the time taken for applying this recommended action on user resource. e.g., time taken for index creation */
		executeActionDuration?: string | null;

		/** Gets if approval for applying this recommended action was given by user/system. */
		executeActionInitiatedBy?: RecommendedActionPropertiesExecuteActionInitiatedBy | null;

		/** Gets the time when this recommended action was approved for execution. */
		executeActionInitiatedTime?: Date | null;

		/** Gets the time when system started applying this recommended action on the user resource. e.g., index creation start time */
		executeActionStartTime?: Date | null;

		/** Contains information for manual implementation for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
		implementationDetails?: RecommendedActionImplementationInfo;

		/** Gets if this recommended action was suggested some time ago but user chose to ignore this and system added a new recommended action again. */
		isArchivedAction?: boolean | null;

		/** Gets if this recommended action is actionable by user */
		isExecutableAction?: boolean | null;

		/** Gets if changes applied by this recommended action can be reverted by user */
		isRevertableAction?: boolean | null;

		/** Gets time when this recommended action was last refreshed. */
		lastRefresh?: Date | null;

		/** Gets the linked objects, if any. */
		linkedObjects?: Array<string>;

		/** Gets the observed/actual impact info for this recommended action e.g., Actual CPU gain, Actual Disk Space change */
		observedImpact?: Array<RecommendedActionImpactRecord>;

		/** Gets the reason for recommending this action. e.g., DuplicateIndex */
		recommendationReason?: string | null;

		/** Gets the time taken for reverting changes of this recommended action on user resource. e.g., time taken for dropping the created index. */
		revertActionDuration?: string | null;

		/** Gets if approval for reverting this recommended action was given by user/system. */
		revertActionInitiatedBy?: RecommendedActionPropertiesExecuteActionInitiatedBy | null;

		/** Gets the time when this recommended action was approved for revert. */
		revertActionInitiatedTime?: Date | null;

		/** Gets the time when system started reverting changes of this recommended action on user resource. e.g., time when index drop is executed. */
		revertActionStartTime?: Date | null;

		/** Gets the impact of this recommended action. Possible values are 1 - Low impact, 2 - Medium Impact and 3 - High Impact */
		score?: number | null;

		/**
		 * Contains information of current state for an Azure SQL Database, Server or Elastic Pool Recommended Action.
		 * Required
		 */
		state: RecommendedActionStateInfo;

		/** Gets the time series info of metrics for this recommended action e.g., CPU consumption time series */
		timeSeries?: Array<RecommendedActionMetricInfo>;

		/** Gets the time since when this recommended action is valid. */
		validSince?: Date | null;
	}

	/** Properties for a Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionPropertiesFormProperties {

		/** Gets additional details specific to this recommended action. */
		details: FormControl<{[id: string]: any } | null | undefined>,

		/** Gets the time taken for applying this recommended action on user resource. e.g., time taken for index creation */
		executeActionDuration: FormControl<string | null | undefined>,

		/** Gets if approval for applying this recommended action was given by user/system. */
		executeActionInitiatedBy: FormControl<RecommendedActionPropertiesExecuteActionInitiatedBy | null | undefined>,

		/** Gets the time when this recommended action was approved for execution. */
		executeActionInitiatedTime: FormControl<Date | null | undefined>,

		/** Gets the time when system started applying this recommended action on the user resource. e.g., index creation start time */
		executeActionStartTime: FormControl<Date | null | undefined>,

		/** Gets if this recommended action was suggested some time ago but user chose to ignore this and system added a new recommended action again. */
		isArchivedAction: FormControl<boolean | null | undefined>,

		/** Gets if this recommended action is actionable by user */
		isExecutableAction: FormControl<boolean | null | undefined>,

		/** Gets if changes applied by this recommended action can be reverted by user */
		isRevertableAction: FormControl<boolean | null | undefined>,

		/** Gets time when this recommended action was last refreshed. */
		lastRefresh: FormControl<Date | null | undefined>,

		/** Gets the reason for recommending this action. e.g., DuplicateIndex */
		recommendationReason: FormControl<string | null | undefined>,

		/** Gets the time taken for reverting changes of this recommended action on user resource. e.g., time taken for dropping the created index. */
		revertActionDuration: FormControl<string | null | undefined>,

		/** Gets if approval for reverting this recommended action was given by user/system. */
		revertActionInitiatedBy: FormControl<RecommendedActionPropertiesExecuteActionInitiatedBy | null | undefined>,

		/** Gets the time when this recommended action was approved for revert. */
		revertActionInitiatedTime: FormControl<Date | null | undefined>,

		/** Gets the time when system started reverting changes of this recommended action on user resource. e.g., time when index drop is executed. */
		revertActionStartTime: FormControl<Date | null | undefined>,

		/** Gets the impact of this recommended action. Possible values are 1 - Low impact, 2 - Medium Impact and 3 - High Impact */
		score: FormControl<number | null | undefined>,

		/** Gets the time since when this recommended action is valid. */
		validSince: FormControl<Date | null | undefined>,
	}
	export function CreateRecommendedActionPropertiesFormGroup() {
		return new FormGroup<RecommendedActionPropertiesFormProperties>({
			details: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			executeActionDuration: new FormControl<string | null | undefined>(undefined),
			executeActionInitiatedBy: new FormControl<RecommendedActionPropertiesExecuteActionInitiatedBy | null | undefined>(undefined),
			executeActionInitiatedTime: new FormControl<Date | null | undefined>(undefined),
			executeActionStartTime: new FormControl<Date | null | undefined>(undefined),
			isArchivedAction: new FormControl<boolean | null | undefined>(undefined),
			isExecutableAction: new FormControl<boolean | null | undefined>(undefined),
			isRevertableAction: new FormControl<boolean | null | undefined>(undefined),
			lastRefresh: new FormControl<Date | null | undefined>(undefined),
			recommendationReason: new FormControl<string | null | undefined>(undefined),
			revertActionDuration: new FormControl<string | null | undefined>(undefined),
			revertActionInitiatedBy: new FormControl<RecommendedActionPropertiesExecuteActionInitiatedBy | null | undefined>(undefined),
			revertActionInitiatedTime: new FormControl<Date | null | undefined>(undefined),
			revertActionStartTime: new FormControl<Date | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			validSince: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Contains error information for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionErrorInfo {

		/** Gets the reason why the recommended action was put to error state. e.g., DatabaseHasQdsOff, IndexAlreadyExists */
		errorCode?: string | null;

		/** Gets whether the error could be ignored and recommended action could be retried. Possible values are: Yes/No */
		isRetryable?: RecommendedActionErrorInfoIsRetryable | null;
	}

	/** Contains error information for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionErrorInfoFormProperties {

		/** Gets the reason why the recommended action was put to error state. e.g., DatabaseHasQdsOff, IndexAlreadyExists */
		errorCode: FormControl<string | null | undefined>,

		/** Gets whether the error could be ignored and recommended action could be retried. Possible values are: Yes/No */
		isRetryable: FormControl<RecommendedActionErrorInfoIsRetryable | null | undefined>,
	}
	export function CreateRecommendedActionErrorInfoFormGroup() {
		return new FormGroup<RecommendedActionErrorInfoFormProperties>({
			errorCode: new FormControl<string | null | undefined>(undefined),
			isRetryable: new FormControl<RecommendedActionErrorInfoIsRetryable | null | undefined>(undefined),
		});

	}

	export enum RecommendedActionErrorInfoIsRetryable { Yes = 0, No = 1 }


	/** Contains information of estimated or observed impact on various metrics for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionImpactRecord {

		/** Gets the absolute value of this dimension if applicable. e.g., Number of Queries affected */
		absoluteValue?: number | null;

		/** Gets the absolute change in the value of this dimension. e.g., Absolute Disk space change in Megabytes */
		changeValueAbsolute?: number | null;

		/** Gets the relative change in the value of this dimension. e.g., Relative Disk space change in Percentage */
		changeValueRelative?: number | null;

		/** Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected. */
		dimensionName?: string | null;

		/** Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected. */
		unit?: string | null;
	}

	/** Contains information of estimated or observed impact on various metrics for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionImpactRecordFormProperties {

		/** Gets the absolute value of this dimension if applicable. e.g., Number of Queries affected */
		absoluteValue: FormControl<number | null | undefined>,

		/** Gets the absolute change in the value of this dimension. e.g., Absolute Disk space change in Megabytes */
		changeValueAbsolute: FormControl<number | null | undefined>,

		/** Gets the relative change in the value of this dimension. e.g., Relative Disk space change in Percentage */
		changeValueRelative: FormControl<number | null | undefined>,

		/** Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected. */
		dimensionName: FormControl<string | null | undefined>,

		/** Gets the name of the impact dimension. e.g., CPUChange, DiskSpaceChange, NumberOfQueriesAffected. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateRecommendedActionImpactRecordFormGroup() {
		return new FormGroup<RecommendedActionImpactRecordFormProperties>({
			absoluteValue: new FormControl<number | null | undefined>(undefined),
			changeValueAbsolute: new FormControl<number | null | undefined>(undefined),
			changeValueRelative: new FormControl<number | null | undefined>(undefined),
			dimensionName: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RecommendedActionPropertiesExecuteActionInitiatedBy { User = 0, System = 1 }


	/** Contains information for manual implementation for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionImplementationInfo {

		/** Gets the method in which this recommended action can be manually implemented. e.g., TSql, AzurePowerShell. */
		method?: RecommendedActionImplementationInfoMethod | null;

		/** Gets the manual implementation script. e.g., T-SQL script that could be executed on the database. */
		script?: string | null;
	}

	/** Contains information for manual implementation for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionImplementationInfoFormProperties {

		/** Gets the method in which this recommended action can be manually implemented. e.g., TSql, AzurePowerShell. */
		method: FormControl<RecommendedActionImplementationInfoMethod | null | undefined>,

		/** Gets the manual implementation script. e.g., T-SQL script that could be executed on the database. */
		script: FormControl<string | null | undefined>,
	}
	export function CreateRecommendedActionImplementationInfoFormGroup() {
		return new FormGroup<RecommendedActionImplementationInfoFormProperties>({
			method: new FormControl<RecommendedActionImplementationInfoMethod | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RecommendedActionImplementationInfoMethod { TSql = 0, AzurePowerShell = 1 }


	/** Contains information of current state for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionStateInfo {

		/** Gets who initiated the execution of this recommended action. Possible Value are: User    -> When user explicitly notified system to apply the recommended action. System  -> When auto-execute status of this advisor was set to 'Enabled', in which case the system applied it. */
		actionInitiatedBy?: RecommendedActionPropertiesExecuteActionInitiatedBy | null;

		/**
		 * Current state the recommended action is in. Some commonly used states are: Active      -> recommended action is active and no action has been taken yet. Pending     -> recommended action is approved for and is awaiting execution. Executing   -> recommended action is being applied on the user database. Verifying   -> recommended action was applied and is being verified of its usefulness by the system. Success     -> recommended action was applied and improvement found during verification. Pending Revert  -> verification found little or no improvement so recommended action is queued for revert or user has manually reverted. Reverting   -> changes made while applying recommended action are being reverted on the user database. Reverted    -> successfully reverted the changes made by recommended action on user database. Ignored     -> user explicitly ignored/discarded the recommended action.
		 * Required
		 */
		currentValue: RecommendedActionStateInfoCurrentValue;

		/** Gets the time when the state was last modified */
		lastModified?: Date | null;
	}

	/** Contains information of current state for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionStateInfoFormProperties {

		/** Gets who initiated the execution of this recommended action. Possible Value are: User    -> When user explicitly notified system to apply the recommended action. System  -> When auto-execute status of this advisor was set to 'Enabled', in which case the system applied it. */
		actionInitiatedBy: FormControl<RecommendedActionPropertiesExecuteActionInitiatedBy | null | undefined>,

		/**
		 * Current state the recommended action is in. Some commonly used states are: Active      -> recommended action is active and no action has been taken yet. Pending     -> recommended action is approved for and is awaiting execution. Executing   -> recommended action is being applied on the user database. Verifying   -> recommended action was applied and is being verified of its usefulness by the system. Success     -> recommended action was applied and improvement found during verification. Pending Revert  -> verification found little or no improvement so recommended action is queued for revert or user has manually reverted. Reverting   -> changes made while applying recommended action are being reverted on the user database. Reverted    -> successfully reverted the changes made by recommended action on user database. Ignored     -> user explicitly ignored/discarded the recommended action.
		 * Required
		 */
		currentValue: FormControl<RecommendedActionStateInfoCurrentValue | null | undefined>,

		/** Gets the time when the state was last modified */
		lastModified: FormControl<Date | null | undefined>,
	}
	export function CreateRecommendedActionStateInfoFormGroup() {
		return new FormGroup<RecommendedActionStateInfoFormProperties>({
			actionInitiatedBy: new FormControl<RecommendedActionPropertiesExecuteActionInitiatedBy | null | undefined>(undefined),
			currentValue: new FormControl<RecommendedActionStateInfoCurrentValue | null | undefined>(undefined, [Validators.required]),
			lastModified: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum RecommendedActionStateInfoCurrentValue { Active = 0, Pending = 1, Executing = 2, Verifying = 3, PendingRevert = 4, RevertCancelled = 5, Reverting = 6, Reverted = 7, Ignored = 8, Expired = 9, Monitoring = 10, Resolved = 11, Success = 12, Error = 13 }


	/** Contains time series of various impacted metrics for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionMetricInfo {

		/** Gets the name of the metric. e.g., CPU, Number of Queries. */
		metricName?: string | null;

		/** Gets the start time of time interval given by this MetricInfo. */
		startTime?: Date | null;

		/** Gets the duration of time interval for the value given by this MetricInfo. e.g., PT1H (1 hour) */
		timeGrain?: string | null;

		/** Gets the unit in which metric is measured. e.g., DTU, Frequency */
		unit?: string | null;

		/** Gets the value of the metric in the time interval given by this MetricInfo. */
		value?: number | null;
	}

	/** Contains time series of various impacted metrics for an Azure SQL Database, Server or Elastic Pool Recommended Action. */
	export interface RecommendedActionMetricInfoFormProperties {

		/** Gets the name of the metric. e.g., CPU, Number of Queries. */
		metricName: FormControl<string | null | undefined>,

		/** Gets the start time of time interval given by this MetricInfo. */
		startTime: FormControl<Date | null | undefined>,

		/** Gets the duration of time interval for the value given by this MetricInfo. e.g., PT1H (1 hour) */
		timeGrain: FormControl<string | null | undefined>,

		/** Gets the unit in which metric is measured. e.g., DTU, Frequency */
		unit: FormControl<string | null | undefined>,

		/** Gets the value of the metric in the time interval given by this MetricInfo. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateRecommendedActionMetricInfoFormGroup() {
		return new FormGroup<RecommendedActionMetricInfoFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			timeGrain: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets a list of server advisors.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advisors
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {Array<Advisor>} Successfully retrieved the list of server advisors.
		 */
		ServerAdvisors_ListByServer(resourceGroupName: string, serverName: string, subscriptionId: string, api_version: string): Observable<Array<Advisor>> {
			return this.http.get<Array<Advisor>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/advisors&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a server advisor.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advisors/{advisorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} advisorName The name of the Server Advisor.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {Advisor} Successfully retrieved details of specified server advisor.
		 */
		ServerAdvisors_Get(resourceGroupName: string, serverName: string, advisorName: string, subscriptionId: string, api_version: string): Observable<Advisor> {
			return this.http.get<Advisor>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a server advisor.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/advisors/{advisorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} advisorName The name of the Server Advisor.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {Advisor} requestBody The requested advisor resource state.
		 * @return {Advisor} Successfully updated the specified server advisor.
		 */
		ServerAdvisors_Update(resourceGroupName: string, serverName: string, advisorName: string, subscriptionId: string, api_version: string, requestBody: Advisor): Observable<Advisor> {
			return this.http.patch<Advisor>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of database advisors.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {Array<Advisor>} Successfully retrieved the list of database advisors.
		 */
		DatabaseAdvisors_ListByDatabase(resourceGroupName: string, serverName: string, databaseName: string, subscriptionId: string, api_version: string): Observable<Array<Advisor>> {
			return this.http.get<Array<Advisor>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/advisors&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a database advisor.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors/{advisorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} advisorName The name of the Database Advisor.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {Advisor} Successfully retrieved details of specified database advisor.
		 */
		DatabaseAdvisors_Get(resourceGroupName: string, serverName: string, databaseName: string, advisorName: string, subscriptionId: string, api_version: string): Observable<Advisor> {
			return this.http.get<Advisor>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a database advisor.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors/{advisorName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} advisorName The name of the Database Advisor.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {Advisor} requestBody The requested advisor resource state.
		 * @return {Advisor} Successfully updated the specified database advisor.
		 */
		DatabaseAdvisors_Update(resourceGroupName: string, serverName: string, databaseName: string, advisorName: string, subscriptionId: string, api_version: string, requestBody: Advisor): Observable<Advisor> {
			return this.http.patch<Advisor>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets list of Database Recommended Actions.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors/{advisorName}/recommendedActions
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} advisorName The name of the Database Advisor.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {Array<RecommendedAction>} Successfully retrieved the list of database recommended actions.
		 */
		DatabaseRecommendedActions_ListByDatabaseAdvisor(resourceGroupName: string, serverName: string, databaseName: string, advisorName: string, subscriptionId: string, api_version: string): Observable<Array<RecommendedAction>> {
			return this.http.get<Array<RecommendedAction>>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '/recommendedActions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a database recommended action.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors/{advisorName}/recommendedActions/{recommendedActionName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} advisorName The name of the Database Advisor.
		 * @param {string} recommendedActionName The name of Database Recommended Action.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @return {RecommendedAction} Successfully retrieved details of specified database recommended action.
		 */
		DatabaseRecommendedActions_Get(resourceGroupName: string, serverName: string, databaseName: string, advisorName: string, recommendedActionName: string, subscriptionId: string, api_version: string): Observable<RecommendedAction> {
			return this.http.get<RecommendedAction>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '/recommendedActions/' + (recommendedActionName == null ? '' : encodeURIComponent(recommendedActionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Updates a database recommended action.
		 * Patch subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/advisors/{advisorName}/recommendedActions/{recommendedActionName}
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database.
		 * @param {string} advisorName The name of the Database Advisor.
		 * @param {string} recommendedActionName The name of Database Recommended Action.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} api_version The API version to use for the request.
		 * @param {RecommendedAction} requestBody The requested recommended action resource state.
		 * @return {RecommendedAction} Successfully updated the specified database recommended action.
		 */
		DatabaseRecommendedActions_Update(resourceGroupName: string, serverName: string, databaseName: string, advisorName: string, recommendedActionName: string, subscriptionId: string, api_version: string, requestBody: RecommendedAction): Observable<RecommendedAction> {
			return this.http.patch<RecommendedAction>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/advisors/' + (advisorName == null ? '' : encodeURIComponent(advisorName)) + '/recommendedActions/' + (recommendedActionName == null ? '' : encodeURIComponent(recommendedActionName)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

