import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ElasticPoolActivity {
	}
	export interface ElasticPoolActivityFormProperties {
	}
	export function CreateElasticPoolActivityFormGroup() {
		return new FormGroup<ElasticPoolActivityFormProperties>({
		});

	}


	/** Represents the response to a list elastic pool activity request. */
	export interface ElasticPoolActivityListResult {

		/**
		 * The list of elastic pool activities.
		 * Required
		 */
		value: Array<ElasticPoolActivity>;
	}

	/** Represents the response to a list elastic pool activity request. */
	export interface ElasticPoolActivityListResultFormProperties {
	}
	export function CreateElasticPoolActivityListResultFormGroup() {
		return new FormGroup<ElasticPoolActivityListResultFormProperties>({
		});

	}


	/** Represents the properties of an elastic pool. */
	export interface ElasticPoolActivityProperties {

		/** The name of the elastic pool. */
		elasticPoolName?: string | null;

		/** The time the operation finished (ISO8601 format). */
		endTime?: Date | null;

		/**
		 * The error code if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode?: number | null;

		/** The error message if available. */
		errorMessage?: string | null;

		/**
		 * The error severity if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorSeverity?: number | null;

		/** The operation name. */
		operation?: string | null;

		/** The unique operation ID. */
		operationId?: string | null;

		/**
		 * The percentage complete if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentComplete?: number | null;

		/**
		 * The requested per database DTU cap.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDatabaseDtuCap?: number | null;

		/**
		 * The requested per database DTU guarantee.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDatabaseDtuGuarantee?: number | null;

		/**
		 * The requested max DTU per database if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDatabaseDtuMax?: number | null;

		/**
		 * The requested min DTU per database if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDatabaseDtuMin?: number | null;

		/**
		 * The requested DTU for the pool if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDtu?: number | null;

		/**
		 * The requested DTU guarantee.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDtuGuarantee?: number | null;

		/** The requested name for the elastic pool if available. */
		requestedElasticPoolName?: string | null;

		/**
		 * The requested storage limit for the pool in GB if available.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		requestedStorageLimitInGB?: string | null;

		/**
		 * The requested storage limit in MB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedStorageLimitInMB?: number | null;

		/** The name of the server the elastic pool is in. */
		serverName?: string | null;

		/** The time the operation started (ISO8601 format). */
		startTime?: Date | null;

		/** The current state of the operation. */
		state?: string | null;
	}

	/** Represents the properties of an elastic pool. */
	export interface ElasticPoolActivityPropertiesFormProperties {

		/** The name of the elastic pool. */
		elasticPoolName: FormControl<string | null | undefined>,

		/** The time the operation finished (ISO8601 format). */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The error code if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode: FormControl<number | null | undefined>,

		/** The error message if available. */
		errorMessage: FormControl<string | null | undefined>,

		/**
		 * The error severity if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorSeverity: FormControl<number | null | undefined>,

		/** The operation name. */
		operation: FormControl<string | null | undefined>,

		/** The unique operation ID. */
		operationId: FormControl<string | null | undefined>,

		/**
		 * The percentage complete if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentComplete: FormControl<number | null | undefined>,

		/**
		 * The requested per database DTU cap.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDatabaseDtuCap: FormControl<number | null | undefined>,

		/**
		 * The requested per database DTU guarantee.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDatabaseDtuGuarantee: FormControl<number | null | undefined>,

		/**
		 * The requested max DTU per database if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDatabaseDtuMax: FormControl<number | null | undefined>,

		/**
		 * The requested min DTU per database if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDatabaseDtuMin: FormControl<number | null | undefined>,

		/**
		 * The requested DTU for the pool if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDtu: FormControl<number | null | undefined>,

		/**
		 * The requested DTU guarantee.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedDtuGuarantee: FormControl<number | null | undefined>,

		/** The requested name for the elastic pool if available. */
		requestedElasticPoolName: FormControl<string | null | undefined>,

		/**
		 * The requested storage limit for the pool in GB if available.
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		requestedStorageLimitInGB: FormControl<string | null | undefined>,

		/**
		 * The requested storage limit in MB.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		requestedStorageLimitInMB: FormControl<number | null | undefined>,

		/** The name of the server the elastic pool is in. */
		serverName: FormControl<string | null | undefined>,

		/** The time the operation started (ISO8601 format). */
		startTime: FormControl<Date | null | undefined>,

		/** The current state of the operation. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateElasticPoolActivityPropertiesFormGroup() {
		return new FormGroup<ElasticPoolActivityPropertiesFormProperties>({
			elasticPoolName: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			errorCode: new FormControl<number | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			errorSeverity: new FormControl<number | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			requestedDatabaseDtuCap: new FormControl<number | null | undefined>(undefined),
			requestedDatabaseDtuGuarantee: new FormControl<number | null | undefined>(undefined),
			requestedDatabaseDtuMax: new FormControl<number | null | undefined>(undefined),
			requestedDatabaseDtuMin: new FormControl<number | null | undefined>(undefined),
			requestedDtu: new FormControl<number | null | undefined>(undefined),
			requestedDtuGuarantee: new FormControl<number | null | undefined>(undefined),
			requestedElasticPoolName: new FormControl<string | null | undefined>(undefined),
			requestedStorageLimitInGB: new FormControl<string | null | undefined>(undefined),
			requestedStorageLimitInMB: new FormControl<number | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ElasticPoolDatabaseActivity {
	}
	export interface ElasticPoolDatabaseActivityFormProperties {
	}
	export function CreateElasticPoolDatabaseActivityFormGroup() {
		return new FormGroup<ElasticPoolDatabaseActivityFormProperties>({
		});

	}


	/** Represents the response to a list elastic pool database activity request. */
	export interface ElasticPoolDatabaseActivityListResult {

		/**
		 * The list of elastic pool database activities.
		 * Required
		 */
		value: Array<ElasticPoolDatabaseActivity>;
	}

	/** Represents the response to a list elastic pool database activity request. */
	export interface ElasticPoolDatabaseActivityListResultFormProperties {
	}
	export function CreateElasticPoolDatabaseActivityListResultFormGroup() {
		return new FormGroup<ElasticPoolDatabaseActivityListResultFormProperties>({
		});

	}


	/** Represents the properties of an elastic pool database activity. */
	export interface ElasticPoolDatabaseActivityProperties {

		/** The name of the current elastic pool the database is in if available. */
		currentElasticPoolName?: string | null;

		/** The name of the current service objective if available. */
		currentServiceObjective?: string | null;

		/** The database name. */
		databaseName?: string | null;

		/** The time the operation finished (ISO8601 format). */
		endTime?: Date | null;

		/**
		 * The error code if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode?: number | null;

		/** The error message if available. */
		errorMessage?: string | null;

		/**
		 * The error severity if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorSeverity?: number | null;

		/** The operation name. */
		operation?: string | null;

		/** The unique operation ID. */
		operationId?: string | null;

		/**
		 * The percentage complete if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentComplete?: number | null;

		/** The name for the elastic pool the database is moving into if available. */
		requestedElasticPoolName?: string | null;

		/** The name of the requested service objective if available. */
		requestedServiceObjective?: string | null;

		/** The name of the server the elastic pool is in. */
		serverName?: string | null;

		/** The time the operation started (ISO8601 format). */
		startTime?: Date | null;

		/** The current state of the operation. */
		state?: string | null;
	}

	/** Represents the properties of an elastic pool database activity. */
	export interface ElasticPoolDatabaseActivityPropertiesFormProperties {

		/** The name of the current elastic pool the database is in if available. */
		currentElasticPoolName: FormControl<string | null | undefined>,

		/** The name of the current service objective if available. */
		currentServiceObjective: FormControl<string | null | undefined>,

		/** The database name. */
		databaseName: FormControl<string | null | undefined>,

		/** The time the operation finished (ISO8601 format). */
		endTime: FormControl<Date | null | undefined>,

		/**
		 * The error code if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorCode: FormControl<number | null | undefined>,

		/** The error message if available. */
		errorMessage: FormControl<string | null | undefined>,

		/**
		 * The error severity if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorSeverity: FormControl<number | null | undefined>,

		/** The operation name. */
		operation: FormControl<string | null | undefined>,

		/** The unique operation ID. */
		operationId: FormControl<string | null | undefined>,

		/**
		 * The percentage complete if available.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentComplete: FormControl<number | null | undefined>,

		/** The name for the elastic pool the database is moving into if available. */
		requestedElasticPoolName: FormControl<string | null | undefined>,

		/** The name of the requested service objective if available. */
		requestedServiceObjective: FormControl<string | null | undefined>,

		/** The name of the server the elastic pool is in. */
		serverName: FormControl<string | null | undefined>,

		/** The time the operation started (ISO8601 format). */
		startTime: FormControl<Date | null | undefined>,

		/** The current state of the operation. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateElasticPoolDatabaseActivityPropertiesFormGroup() {
		return new FormGroup<ElasticPoolDatabaseActivityPropertiesFormProperties>({
			currentElasticPoolName: new FormControl<string | null | undefined>(undefined),
			currentServiceObjective: new FormControl<string | null | undefined>(undefined),
			databaseName: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			errorCode: new FormControl<number | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			errorSeverity: new FormControl<number | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			requestedElasticPoolName: new FormControl<string | null | undefined>(undefined),
			requestedServiceObjective: new FormControl<string | null | undefined>(undefined),
			serverName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The impact of an operation, both in absolute and relative terms. */
	export interface OperationImpact {

		/**
		 * The absolute impact to dimension.
		 * Type: double
		 */
		changeValueAbsolute?: number | null;

		/**
		 * The relative impact to dimension (null if not applicable)
		 * Type: double
		 */
		changeValueRelative?: number | null;

		/** The name of the impact dimension. */
		name?: string | null;

		/** The unit in which estimated impact to dimension is measured. */
		unit?: string | null;
	}

	/** The impact of an operation, both in absolute and relative terms. */
	export interface OperationImpactFormProperties {

		/**
		 * The absolute impact to dimension.
		 * Type: double
		 */
		changeValueAbsolute: FormControl<number | null | undefined>,

		/**
		 * The relative impact to dimension (null if not applicable)
		 * Type: double
		 */
		changeValueRelative: FormControl<number | null | undefined>,

		/** The name of the impact dimension. */
		name: FormControl<string | null | undefined>,

		/** The unit in which estimated impact to dimension is measured. */
		unit: FormControl<string | null | undefined>,
	}
	export function CreateOperationImpactFormGroup() {
		return new FormGroup<OperationImpactFormProperties>({
			changeValueAbsolute: new FormControl<number | null | undefined>(undefined),
			changeValueRelative: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RecommendedIndex {
	}
	export interface RecommendedIndexFormProperties {
	}
	export function CreateRecommendedIndexFormGroup() {
		return new FormGroup<RecommendedIndexFormProperties>({
		});

	}


	/** Represents the properties of a database recommended index. */
	export interface RecommendedIndexProperties {

		/** The proposed index action. You can create a missing index, drop an unused index, or rebuild an existing index to improve its performance. */
		action?: RecommendedIndexPropertiesAction | null;

		/** Columns over which to build index */
		columns?: Array<string>;

		/** The UTC datetime showing when this resource was created (ISO8601 format). */
		created?: Date | null;

		/** The estimated impact of doing recommended index action. */
		estimatedImpact?: Array<OperationImpact>;

		/** The list of column names to be included in the index */
		includedColumns?: Array<string>;

		/** The full build index script */
		indexScript?: string | null;

		/** The type of index (CLUSTERED, NONCLUSTERED, COLUMNSTORE, CLUSTERED COLUMNSTORE) */
		indexType?: RecommendedIndexPropertiesIndexType | null;

		/** The UTC datetime of when was this resource last changed (ISO8601 format). */
		lastModified?: Date | null;

		/** The values reported after index action is complete. */
		reportedImpact?: Array<OperationImpact>;

		/** The schema where table to build index over resides */
		schema?: string | null;

		/** The current recommendation state. */
		state?: RecommendedIndexPropertiesState | null;

		/** The table on which to build index. */
		table?: string | null;
	}

	/** Represents the properties of a database recommended index. */
	export interface RecommendedIndexPropertiesFormProperties {

		/** The proposed index action. You can create a missing index, drop an unused index, or rebuild an existing index to improve its performance. */
		action: FormControl<RecommendedIndexPropertiesAction | null | undefined>,

		/** The UTC datetime showing when this resource was created (ISO8601 format). */
		created: FormControl<Date | null | undefined>,

		/** The full build index script */
		indexScript: FormControl<string | null | undefined>,

		/** The type of index (CLUSTERED, NONCLUSTERED, COLUMNSTORE, CLUSTERED COLUMNSTORE) */
		indexType: FormControl<RecommendedIndexPropertiesIndexType | null | undefined>,

		/** The UTC datetime of when was this resource last changed (ISO8601 format). */
		lastModified: FormControl<Date | null | undefined>,

		/** The schema where table to build index over resides */
		schema: FormControl<string | null | undefined>,

		/** The current recommendation state. */
		state: FormControl<RecommendedIndexPropertiesState | null | undefined>,

		/** The table on which to build index. */
		table: FormControl<string | null | undefined>,
	}
	export function CreateRecommendedIndexPropertiesFormGroup() {
		return new FormGroup<RecommendedIndexPropertiesFormProperties>({
			action: new FormControl<RecommendedIndexPropertiesAction | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			indexScript: new FormControl<string | null | undefined>(undefined),
			indexType: new FormControl<RecommendedIndexPropertiesIndexType | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			schema: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<RecommendedIndexPropertiesState | null | undefined>(undefined),
			table: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RecommendedIndexPropertiesAction { Create = 'Create', Drop = 'Drop', Rebuild = 'Rebuild' }

	export enum RecommendedIndexPropertiesIndexType { CLUSTERED = 'CLUSTERED', NONCLUSTERED = 'NONCLUSTERED', COLUMNSTORE = 'COLUMNSTORE', 'CLUSTERED COLUMNSTORE' = 'CLUSTERED COLUMNSTORE' }

	export enum RecommendedIndexPropertiesState { Active = 'Active', Pending = 'Pending', Executing = 'Executing', Verifying = 'Verifying', 'Pending Revert' = 'Pending Revert', Reverting = 'Reverting', Reverted = 'Reverted', Ignored = 'Ignored', Expired = 'Expired', Blocked = 'Blocked', Success = 'Success' }

	export interface ServiceTierAdvisor {
	}
	export interface ServiceTierAdvisorFormProperties {
	}
	export function CreateServiceTierAdvisorFormGroup() {
		return new FormGroup<ServiceTierAdvisorFormProperties>({
		});

	}


	/** Represents the response to a list service tier advisor request. */
	export interface ServiceTierAdvisorListResult {

		/**
		 * The list of service tier advisors for specified database.
		 * Required
		 */
		value: Array<ServiceTierAdvisor>;
	}

	/** Represents the response to a list service tier advisor request. */
	export interface ServiceTierAdvisorListResultFormProperties {
	}
	export function CreateServiceTierAdvisorListResultFormGroup() {
		return new FormGroup<ServiceTierAdvisorListResultFormProperties>({
		});

	}


	/** Represents the properties of a Service Tier Advisor. */
	export interface ServiceTierAdvisorProperties {

		/**
		 * The activeTimeRatio for service tier advisor.
		 * Type: double
		 */
		activeTimeRatio?: number | null;

		/**
		 * Gets or sets avgDtu for service tier advisor.
		 * Type: double
		 */
		avgDtu?: number | null;

		/**
		 * Gets or sets confidence for service tier advisor.
		 * Type: double
		 */
		confidence?: number | null;

		/** Gets or sets currentServiceLevelObjective for service tier advisor. */
		currentServiceLevelObjective?: string | null;

		/** Gets or sets currentServiceLevelObjectiveId for service tier advisor. */
		currentServiceLevelObjectiveId?: string | null;

		/** Gets or sets databaseSizeBasedRecommendationServiceLevelObjective for service tier advisor. */
		databaseSizeBasedRecommendationServiceLevelObjective?: string | null;

		/** Gets or sets databaseSizeBasedRecommendationServiceLevelObjectiveId for service tier advisor. */
		databaseSizeBasedRecommendationServiceLevelObjectiveId?: string | null;

		/** Gets or sets disasterPlanBasedRecommendationServiceLevelObjective for service tier advisor. */
		disasterPlanBasedRecommendationServiceLevelObjective?: string | null;

		/** Gets or sets disasterPlanBasedRecommendationServiceLevelObjectiveId for service tier advisor. */
		disasterPlanBasedRecommendationServiceLevelObjectiveId?: string | null;

		/**
		 * Gets or sets maxDtu for service tier advisor.
		 * Type: double
		 */
		maxDtu?: number | null;

		/**
		 * Gets or sets maxSizeInGB for service tier advisor.
		 * Type: double
		 */
		maxSizeInGB?: number | null;

		/**
		 * Gets or sets minDtu for service tier advisor.
		 * Type: double
		 */
		minDtu?: number | null;

		/** The observation period start (ISO8601 format). */
		observationPeriodEnd?: Date | null;

		/** The observation period start (ISO8601 format). */
		observationPeriodStart?: Date | null;

		/** Gets or sets overallRecommendationServiceLevelObjective for service tier advisor. */
		overallRecommendationServiceLevelObjective?: string | null;

		/** Gets or sets overallRecommendationServiceLevelObjectiveId for service tier advisor. */
		overallRecommendationServiceLevelObjectiveId?: string | null;

		/** Gets or sets serviceLevelObjectiveUsageMetrics for the service tier advisor. */
		serviceLevelObjectiveUsageMetrics?: Array<SloUsageMetric>;

		/** Gets or sets usageBasedRecommendationServiceLevelObjective for service tier advisor. */
		usageBasedRecommendationServiceLevelObjective?: string | null;

		/** Gets or sets usageBasedRecommendationServiceLevelObjectiveId for service tier advisor. */
		usageBasedRecommendationServiceLevelObjectiveId?: string | null;
	}

	/** Represents the properties of a Service Tier Advisor. */
	export interface ServiceTierAdvisorPropertiesFormProperties {

		/**
		 * The activeTimeRatio for service tier advisor.
		 * Type: double
		 */
		activeTimeRatio: FormControl<number | null | undefined>,

		/**
		 * Gets or sets avgDtu for service tier advisor.
		 * Type: double
		 */
		avgDtu: FormControl<number | null | undefined>,

		/**
		 * Gets or sets confidence for service tier advisor.
		 * Type: double
		 */
		confidence: FormControl<number | null | undefined>,

		/** Gets or sets currentServiceLevelObjective for service tier advisor. */
		currentServiceLevelObjective: FormControl<string | null | undefined>,

		/** Gets or sets currentServiceLevelObjectiveId for service tier advisor. */
		currentServiceLevelObjectiveId: FormControl<string | null | undefined>,

		/** Gets or sets databaseSizeBasedRecommendationServiceLevelObjective for service tier advisor. */
		databaseSizeBasedRecommendationServiceLevelObjective: FormControl<string | null | undefined>,

		/** Gets or sets databaseSizeBasedRecommendationServiceLevelObjectiveId for service tier advisor. */
		databaseSizeBasedRecommendationServiceLevelObjectiveId: FormControl<string | null | undefined>,

		/** Gets or sets disasterPlanBasedRecommendationServiceLevelObjective for service tier advisor. */
		disasterPlanBasedRecommendationServiceLevelObjective: FormControl<string | null | undefined>,

		/** Gets or sets disasterPlanBasedRecommendationServiceLevelObjectiveId for service tier advisor. */
		disasterPlanBasedRecommendationServiceLevelObjectiveId: FormControl<string | null | undefined>,

		/**
		 * Gets or sets maxDtu for service tier advisor.
		 * Type: double
		 */
		maxDtu: FormControl<number | null | undefined>,

		/**
		 * Gets or sets maxSizeInGB for service tier advisor.
		 * Type: double
		 */
		maxSizeInGB: FormControl<number | null | undefined>,

		/**
		 * Gets or sets minDtu for service tier advisor.
		 * Type: double
		 */
		minDtu: FormControl<number | null | undefined>,

		/** The observation period start (ISO8601 format). */
		observationPeriodEnd: FormControl<Date | null | undefined>,

		/** The observation period start (ISO8601 format). */
		observationPeriodStart: FormControl<Date | null | undefined>,

		/** Gets or sets overallRecommendationServiceLevelObjective for service tier advisor. */
		overallRecommendationServiceLevelObjective: FormControl<string | null | undefined>,

		/** Gets or sets overallRecommendationServiceLevelObjectiveId for service tier advisor. */
		overallRecommendationServiceLevelObjectiveId: FormControl<string | null | undefined>,

		/** Gets or sets usageBasedRecommendationServiceLevelObjective for service tier advisor. */
		usageBasedRecommendationServiceLevelObjective: FormControl<string | null | undefined>,

		/** Gets or sets usageBasedRecommendationServiceLevelObjectiveId for service tier advisor. */
		usageBasedRecommendationServiceLevelObjectiveId: FormControl<string | null | undefined>,
	}
	export function CreateServiceTierAdvisorPropertiesFormGroup() {
		return new FormGroup<ServiceTierAdvisorPropertiesFormProperties>({
			activeTimeRatio: new FormControl<number | null | undefined>(undefined),
			avgDtu: new FormControl<number | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			currentServiceLevelObjective: new FormControl<string | null | undefined>(undefined),
			currentServiceLevelObjectiveId: new FormControl<string | null | undefined>(undefined),
			databaseSizeBasedRecommendationServiceLevelObjective: new FormControl<string | null | undefined>(undefined),
			databaseSizeBasedRecommendationServiceLevelObjectiveId: new FormControl<string | null | undefined>(undefined),
			disasterPlanBasedRecommendationServiceLevelObjective: new FormControl<string | null | undefined>(undefined),
			disasterPlanBasedRecommendationServiceLevelObjectiveId: new FormControl<string | null | undefined>(undefined),
			maxDtu: new FormControl<number | null | undefined>(undefined),
			maxSizeInGB: new FormControl<number | null | undefined>(undefined),
			minDtu: new FormControl<number | null | undefined>(undefined),
			observationPeriodEnd: new FormControl<Date | null | undefined>(undefined),
			observationPeriodStart: new FormControl<Date | null | undefined>(undefined),
			overallRecommendationServiceLevelObjective: new FormControl<string | null | undefined>(undefined),
			overallRecommendationServiceLevelObjectiveId: new FormControl<string | null | undefined>(undefined),
			usageBasedRecommendationServiceLevelObjective: new FormControl<string | null | undefined>(undefined),
			usageBasedRecommendationServiceLevelObjectiveId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Slo Usage Metric. */
	export interface SloUsageMetric {

		/**
		 * Gets or sets inRangeTimeRatio for SLO usage metric.
		 * Type: double
		 */
		inRangeTimeRatio?: number | null;

		/** The serviceLevelObjective for SLO usage metric. */
		serviceLevelObjective?: SloUsageMetricServiceLevelObjective | null;

		/** The serviceLevelObjectiveId for SLO usage metric. */
		serviceLevelObjectiveId?: string | null;
	}

	/** A Slo Usage Metric. */
	export interface SloUsageMetricFormProperties {

		/**
		 * Gets or sets inRangeTimeRatio for SLO usage metric.
		 * Type: double
		 */
		inRangeTimeRatio: FormControl<number | null | undefined>,

		/** The serviceLevelObjective for SLO usage metric. */
		serviceLevelObjective: FormControl<SloUsageMetricServiceLevelObjective | null | undefined>,

		/** The serviceLevelObjectiveId for SLO usage metric. */
		serviceLevelObjectiveId: FormControl<string | null | undefined>,
	}
	export function CreateSloUsageMetricFormGroup() {
		return new FormGroup<SloUsageMetricFormProperties>({
			inRangeTimeRatio: new FormControl<number | null | undefined>(undefined),
			serviceLevelObjective: new FormControl<SloUsageMetricServiceLevelObjective | null | undefined>(undefined),
			serviceLevelObjectiveId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SloUsageMetricServiceLevelObjective { System = 'System', System0 = 'System0', System1 = 'System1', System2 = 'System2', System3 = 'System3', System4 = 'System4', System2L = 'System2L', System3L = 'System3L', System4L = 'System4L', Free = 'Free', Basic = 'Basic', S0 = 'S0', S1 = 'S1', S2 = 'S2', S3 = 'S3', S4 = 'S4', S6 = 'S6', S7 = 'S7', S9 = 'S9', S12 = 'S12', P1 = 'P1', P2 = 'P2', P3 = 'P3', P4 = 'P4', P6 = 'P6', P11 = 'P11', P15 = 'P15', PRS1 = 'PRS1', PRS2 = 'PRS2', PRS4 = 'PRS4', PRS6 = 'PRS6', DW100 = 'DW100', DW200 = 'DW200', DW300 = 'DW300', DW400 = 'DW400', DW500 = 'DW500', DW600 = 'DW600', DW1000 = 'DW1000', DW1200 = 'DW1200', DW1000c = 'DW1000c', DW1500 = 'DW1500', DW1500c = 'DW1500c', DW2000 = 'DW2000', DW2000c = 'DW2000c', DW3000 = 'DW3000', DW2500c = 'DW2500c', DW3000c = 'DW3000c', DW6000 = 'DW6000', DW5000c = 'DW5000c', DW6000c = 'DW6000c', DW7500c = 'DW7500c', DW10000c = 'DW10000c', DW15000c = 'DW15000c', DW30000c = 'DW30000c', DS100 = 'DS100', DS200 = 'DS200', DS300 = 'DS300', DS400 = 'DS400', DS500 = 'DS500', DS600 = 'DS600', DS1000 = 'DS1000', DS1200 = 'DS1200', DS1500 = 'DS1500', DS2000 = 'DS2000', ElasticPool = 'ElasticPool' }

	export interface TransparentDataEncryption {
	}
	export interface TransparentDataEncryptionFormProperties {
	}
	export function CreateTransparentDataEncryptionFormGroup() {
		return new FormGroup<TransparentDataEncryptionFormProperties>({
		});

	}

	export interface TransparentDataEncryptionActivity {
	}
	export interface TransparentDataEncryptionActivityFormProperties {
	}
	export function CreateTransparentDataEncryptionActivityFormGroup() {
		return new FormGroup<TransparentDataEncryptionActivityFormProperties>({
		});

	}


	/** Represents the response to a list database transparent data encryption activity request. */
	export interface TransparentDataEncryptionActivityListResult {

		/**
		 * The list of database transparent data encryption activities.
		 * Required
		 */
		value: Array<TransparentDataEncryptionActivity>;
	}

	/** Represents the response to a list database transparent data encryption activity request. */
	export interface TransparentDataEncryptionActivityListResultFormProperties {
	}
	export function CreateTransparentDataEncryptionActivityListResultFormGroup() {
		return new FormGroup<TransparentDataEncryptionActivityListResultFormProperties>({
		});

	}


	/** Represents the properties of a database transparent data encryption Scan. */
	export interface TransparentDataEncryptionActivityProperties {

		/**
		 * The percent complete of the transparent data encryption scan for a database.
		 * Type: float
		 */
		percentComplete?: number | null;

		/** The status of the database. */
		status?: TransparentDataEncryptionActivityPropertiesStatus | null;
	}

	/** Represents the properties of a database transparent data encryption Scan. */
	export interface TransparentDataEncryptionActivityPropertiesFormProperties {

		/**
		 * The percent complete of the transparent data encryption scan for a database.
		 * Type: float
		 */
		percentComplete: FormControl<number | null | undefined>,

		/** The status of the database. */
		status: FormControl<TransparentDataEncryptionActivityPropertiesStatus | null | undefined>,
	}
	export function CreateTransparentDataEncryptionActivityPropertiesFormGroup() {
		return new FormGroup<TransparentDataEncryptionActivityPropertiesFormProperties>({
			percentComplete: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<TransparentDataEncryptionActivityPropertiesStatus | null | undefined>(undefined),
		});

	}

	export enum TransparentDataEncryptionActivityPropertiesStatus { Encrypting = 'Encrypting', Decrypting = 'Decrypting' }


	/** Represents the properties of a database transparent data encryption. */
	export interface TransparentDataEncryptionProperties {

		/** The status of the database transparent data encryption. */
		status?: TransparentDataEncryptionPropertiesStatus | null;
	}

	/** Represents the properties of a database transparent data encryption. */
	export interface TransparentDataEncryptionPropertiesFormProperties {

		/** The status of the database transparent data encryption. */
		status: FormControl<TransparentDataEncryptionPropertiesStatus | null | undefined>,
	}
	export function CreateTransparentDataEncryptionPropertiesFormGroup() {
		return new FormGroup<TransparentDataEncryptionPropertiesFormProperties>({
			status: new FormControl<TransparentDataEncryptionPropertiesStatus | null | undefined>(undefined),
		});

	}

	export enum TransparentDataEncryptionPropertiesStatus { Enabled = 'Enabled', Disabled = 'Disabled' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns service tier advisors for specified database.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/serviceTierAdvisors
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of database.
		 * @return {ServiceTierAdvisorListResult} OK
		 */
		ServiceTierAdvisors_ListByDatabase(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string): Observable<ServiceTierAdvisorListResult> {
			return this.http.get<ServiceTierAdvisorListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/serviceTierAdvisors?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a service tier advisor.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/serviceTierAdvisors/{serviceTierAdvisorName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of database.
		 * @param {string} serviceTierAdvisorName The name of service tier advisor.
		 * @return {ServiceTierAdvisor} OK
		 */
		ServiceTierAdvisors_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, serviceTierAdvisorName: string): Observable<ServiceTierAdvisor> {
			return this.http.get<ServiceTierAdvisor>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/serviceTierAdvisors/' + (serviceTierAdvisorName == null ? '' : encodeURIComponent(serviceTierAdvisorName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets a database's transparent data encryption configuration.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database for which the transparent data encryption applies.
		 * @param {TransparentDataEncryptions_GetTransparentDataEncryptionName} transparentDataEncryptionName The name of the transparent data encryption configuration.
		 * @return {TransparentDataEncryption} OK
		 */
		TransparentDataEncryptions_Get(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, transparentDataEncryptionName: TransparentDataEncryptions_GetTransparentDataEncryptionName): Observable<TransparentDataEncryption> {
			return this.http.get<TransparentDataEncryption>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/transparentDataEncryption/' + transparentDataEncryptionName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates or updates a database's transparent data encryption configuration.
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName}
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database for which setting the transparent data encryption applies.
		 * @param {TransparentDataEncryptions_GetTransparentDataEncryptionName} transparentDataEncryptionName The name of the transparent data encryption configuration.
		 * @param {TransparentDataEncryption} requestBody The required parameters for creating or updating transparent data encryption.
		 * @return {TransparentDataEncryption} OK
		 */
		TransparentDataEncryptions_CreateOrUpdate(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, transparentDataEncryptionName: TransparentDataEncryptions_GetTransparentDataEncryptionName, requestBody: TransparentDataEncryption): Observable<TransparentDataEncryption> {
			return this.http.put<TransparentDataEncryption>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/transparentDataEncryption/' + transparentDataEncryptionName + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a database's transparent data encryption operation result.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName}/operationResults
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} databaseName The name of the database for which the transparent data encryption applies.
		 * @param {TransparentDataEncryptions_GetTransparentDataEncryptionName} transparentDataEncryptionName The name of the transparent data encryption configuration.
		 * @return {TransparentDataEncryptionActivityListResult} OK
		 */
		TransparentDataEncryptionActivities_ListByConfiguration(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, databaseName: string, transparentDataEncryptionName: TransparentDataEncryptions_GetTransparentDataEncryptionName): Observable<TransparentDataEncryptionActivityListResult> {
			return this.http.get<TransparentDataEncryptionActivityListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/databases/' + (databaseName == null ? '' : encodeURIComponent(databaseName)) + '/transparentDataEncryption/' + transparentDataEncryptionName + '/operationResults?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns elastic pool activities.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/elasticPoolActivity
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool for which to get the current activity.
		 * @return {ElasticPoolActivityListResult} OK
		 */
		ElasticPoolActivities_ListByElasticPool(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, elasticPoolName: string): Observable<ElasticPoolActivityListResult> {
			return this.http.get<ElasticPoolActivityListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '/elasticPoolActivity?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Returns activity on databases inside of an elastic pool.
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/elasticPoolDatabaseActivity
		 * @param {string} api_version The API version to use for the request.
		 * @param {string} subscriptionId The subscription ID that identifies an Azure subscription.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} serverName The name of the server.
		 * @param {string} elasticPoolName The name of the elastic pool.
		 * @return {ElasticPoolDatabaseActivityListResult} OK
		 */
		ElasticPoolDatabaseActivities_ListByElasticPool(api_version: string, subscriptionId: string, resourceGroupName: string, serverName: string, elasticPoolName: string): Observable<ElasticPoolDatabaseActivityListResult> {
			return this.http.get<ElasticPoolDatabaseActivityListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Sql/servers/' + (serverName == null ? '' : encodeURIComponent(serverName)) + '/elasticPools/' + (elasticPoolName == null ? '' : encodeURIComponent(elasticPoolName)) + '/elasticPoolDatabaseActivity?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum TransparentDataEncryptions_GetTransparentDataEncryptionName { current = 'current' }

}

