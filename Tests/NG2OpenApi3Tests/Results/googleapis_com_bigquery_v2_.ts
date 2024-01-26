import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows. */
	export interface AggregateClassificationMetrics {

		/** Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric. */
		accuracy?: number | null;

		/** The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric. */
		f1Score?: number | null;

		/** Logarithmic Loss. For multiclass this is a macro-averaged metric. */
		logLoss?: number | null;

		/** Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier. */
		precision?: number | null;

		/** Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric. */
		recall?: number | null;

		/** Area Under a ROC Curve. For multiclass this is a macro-averaged metric. */
		rocAuc?: number | null;

		/** Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classfication models this is the confidence threshold. */
		threshold?: number | null;
	}

	/** Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows. */
	export interface AggregateClassificationMetricsFormProperties {

		/** Accuracy is the fraction of predictions given the correct label. For multiclass this is a micro-averaged metric. */
		accuracy: FormControl<number | null | undefined>,

		/** The F1 score is an average of recall and precision. For multiclass this is a macro-averaged metric. */
		f1Score: FormControl<number | null | undefined>,

		/** Logarithmic Loss. For multiclass this is a macro-averaged metric. */
		logLoss: FormControl<number | null | undefined>,

		/** Precision is the fraction of actual positive predictions that had positive actual labels. For multiclass this is a macro-averaged metric treating each class as a binary classifier. */
		precision: FormControl<number | null | undefined>,

		/** Recall is the fraction of actual positive labels that were given a positive prediction. For multiclass this is a macro-averaged metric. */
		recall: FormControl<number | null | undefined>,

		/** Area Under a ROC Curve. For multiclass this is a macro-averaged metric. */
		rocAuc: FormControl<number | null | undefined>,

		/** Threshold at which the metrics are computed. For binary classification models this is the positive class threshold. For multi-class classfication models this is the confidence threshold. */
		threshold: FormControl<number | null | undefined>,
	}
	export function CreateAggregateClassificationMetricsFormGroup() {
		return new FormGroup<AggregateClassificationMetricsFormProperties>({
			accuracy: new FormControl<number | null | undefined>(undefined),
			f1Score: new FormControl<number | null | undefined>(undefined),
			logLoss: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			recall: new FormControl<number | null | undefined>(undefined),
			rocAuc: new FormControl<number | null | undefined>(undefined),
			threshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents privacy policy associated with "aggregation threshold" method. */
	export interface AggregationThresholdPolicy {

		/** Optional. The privacy unit column(s) associated with this policy. For now, only one column per data source object (table, view) is allowed as a privacy unit column. Representing as a repeated field in metadata for extensibility to multiple columns in future. Duplicates and Repeated struct fields are not allowed. For nested fields, use dot notation ("outer.inner") */
		privacyUnitColumns?: Array<string>;

		/** Optional. The threshold for the "aggregation threshold" policy. */
		threshold?: string | null;
	}

	/** Represents privacy policy associated with "aggregation threshold" method. */
	export interface AggregationThresholdPolicyFormProperties {

		/** Optional. The threshold for the "aggregation threshold" policy. */
		threshold: FormControl<string | null | undefined>,
	}
	export function CreateAggregationThresholdPolicyFormGroup() {
		return new FormGroup<AggregationThresholdPolicyFormProperties>({
			threshold: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Input/output argument of a function or a stored procedure. */
	export interface Argument {

		/** Optional. Defaults to FIXED_TYPE. */
		argumentKind?: ArgumentArgumentKind | null;

		/** The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } } */
		dataType?: StandardSqlDataType;

		/** Optional. Whether the argument is an aggregate function parameter. Must be Unset for routine types other than AGGREGATE_FUNCTION. For AGGREGATE_FUNCTION, if set to false, it is equivalent to adding "NOT AGGREGATE" clause in DDL; Otherwise, it is equivalent to omitting "NOT AGGREGATE" clause in DDL. */
		isAggregate?: boolean | null;

		/** Optional. Specifies whether the argument is input or output. Can be set for procedures only. */
		mode?: ArgumentMode | null;

		/** Optional. The name of this argument. Can be absent for function return argument. */
		name?: string | null;
	}

	/** Input/output argument of a function or a stored procedure. */
	export interface ArgumentFormProperties {

		/** Optional. Defaults to FIXED_TYPE. */
		argumentKind: FormControl<ArgumentArgumentKind | null | undefined>,

		/** Optional. Whether the argument is an aggregate function parameter. Must be Unset for routine types other than AGGREGATE_FUNCTION. For AGGREGATE_FUNCTION, if set to false, it is equivalent to adding "NOT AGGREGATE" clause in DDL; Otherwise, it is equivalent to omitting "NOT AGGREGATE" clause in DDL. */
		isAggregate: FormControl<boolean | null | undefined>,

		/** Optional. Specifies whether the argument is input or output. Can be set for procedures only. */
		mode: FormControl<ArgumentMode | null | undefined>,

		/** Optional. The name of this argument. Can be absent for function return argument. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateArgumentFormGroup() {
		return new FormGroup<ArgumentFormProperties>({
			argumentKind: new FormControl<ArgumentArgumentKind | null | undefined>(undefined),
			isAggregate: new FormControl<boolean | null | undefined>(undefined),
			mode: new FormControl<ArgumentMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ArgumentArgumentKind { ARGUMENT_KIND_UNSPECIFIED = 0, FIXED_TYPE = 1, ANY_TYPE = 2 }


	/** The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } } */
	export interface StandardSqlDataType {

		/** The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } } */
		arrayElementType?: StandardSqlDataType;

		/** The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } } */
		rangeElementType?: StandardSqlDataType;

		/** The representation of a SQL STRUCT type. */
		structType?: StandardSqlStructType;

		/** Required. The top level type of this field. Can be any GoogleSQL data type (e.g., "INT64", "DATE", "ARRAY"). */
		typeKind?: StandardSqlDataTypeTypeKind | null;
	}

	/** The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } } */
	export interface StandardSqlDataTypeFormProperties {

		/** Required. The top level type of this field. Can be any GoogleSQL data type (e.g., "INT64", "DATE", "ARRAY"). */
		typeKind: FormControl<StandardSqlDataTypeTypeKind | null | undefined>,
	}
	export function CreateStandardSqlDataTypeFormGroup() {
		return new FormGroup<StandardSqlDataTypeFormProperties>({
			typeKind: new FormControl<StandardSqlDataTypeTypeKind | null | undefined>(undefined),
		});

	}


	/** The representation of a SQL STRUCT type. */
	export interface StandardSqlStructType {

		/** Fields within the struct. */
		fields?: Array<StandardSqlField>;
	}

	/** The representation of a SQL STRUCT type. */
	export interface StandardSqlStructTypeFormProperties {
	}
	export function CreateStandardSqlStructTypeFormGroup() {
		return new FormGroup<StandardSqlStructTypeFormProperties>({
		});

	}


	/** A field or a column. */
	export interface StandardSqlField {

		/** Optional. The name of this field. Can be absent for struct fields. */
		name?: string | null;

		/** The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } } */
		type?: StandardSqlDataType;
	}

	/** A field or a column. */
	export interface StandardSqlFieldFormProperties {

		/** Optional. The name of this field. Can be absent for struct fields. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateStandardSqlFieldFormGroup() {
		return new FormGroup<StandardSqlFieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StandardSqlDataTypeTypeKind { TYPE_KIND_UNSPECIFIED = 0, INT64 = 1, BOOL = 2, FLOAT64 = 3, STRING = 4, BYTES = 5, TIMESTAMP = 6, DATE = 7, TIME = 8, DATETIME = 9, INTERVAL = 10, GEOGRAPHY = 11, NUMERIC = 12, BIGNUMERIC = 13, JSON = 14, ARRAY = 15, STRUCT = 16, RANGE = 17 }

	export enum ArgumentMode { MODE_UNSPECIFIED = 0, IN = 1, OUT = 2, INOUT = 3 }


	/** Arima coefficients. */
	export interface ArimaCoefficients {

		/** Auto-regressive coefficients, an array of double. */
		autoRegressiveCoefficients?: Array<number>;

		/** Intercept coefficient, just a double not an array. */
		interceptCoefficient?: number | null;

		/** Moving-average coefficients, an array of double. */
		movingAverageCoefficients?: Array<number>;
	}

	/** Arima coefficients. */
	export interface ArimaCoefficientsFormProperties {

		/** Intercept coefficient, just a double not an array. */
		interceptCoefficient: FormControl<number | null | undefined>,
	}
	export function CreateArimaCoefficientsFormGroup() {
		return new FormGroup<ArimaCoefficientsFormProperties>({
			interceptCoefficient: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** ARIMA model fitting metrics. */
	export interface ArimaFittingMetrics {

		/** AIC. */
		aic?: number | null;

		/** Log-likelihood. */
		logLikelihood?: number | null;

		/** Variance. */
		variance?: number | null;
	}

	/** ARIMA model fitting metrics. */
	export interface ArimaFittingMetricsFormProperties {

		/** AIC. */
		aic: FormControl<number | null | undefined>,

		/** Log-likelihood. */
		logLikelihood: FormControl<number | null | undefined>,

		/** Variance. */
		variance: FormControl<number | null | undefined>,
	}
	export function CreateArimaFittingMetricsFormGroup() {
		return new FormGroup<ArimaFittingMetricsFormProperties>({
			aic: new FormControl<number | null | undefined>(undefined),
			logLikelihood: new FormControl<number | null | undefined>(undefined),
			variance: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Model evaluation metrics for ARIMA forecasting models. */
	export interface ArimaForecastingMetrics {

		/** Arima model fitting metrics. */
		arimaFittingMetrics?: Array<ArimaFittingMetrics>;

		/** Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case. */
		arimaSingleModelForecastingMetrics?: Array<ArimaSingleModelForecastingMetrics>;

		/** Whether Arima model fitted with drift or not. It is always false when d is not 1. */
		hasDrift?: Array<boolean>;

		/** Non-seasonal order. */
		nonSeasonalOrder?: Array<ArimaOrder>;

		/** Seasonal periods. Repeated because multiple periods are supported for one time series. */
		seasonalPeriods?: Array<string>;

		/** Id to differentiate different time series for the large-scale case. */
		timeSeriesId?: Array<string>;
	}

	/** Model evaluation metrics for ARIMA forecasting models. */
	export interface ArimaForecastingMetricsFormProperties {
	}
	export function CreateArimaForecastingMetricsFormGroup() {
		return new FormGroup<ArimaForecastingMetricsFormProperties>({
		});

	}


	/** Model evaluation metrics for a single ARIMA forecasting model. */
	export interface ArimaSingleModelForecastingMetrics {

		/** ARIMA model fitting metrics. */
		arimaFittingMetrics?: ArimaFittingMetrics;

		/** Is arima model fitted with drift or not. It is always false when d is not 1. */
		hasDrift?: boolean | null;

		/** If true, holiday_effect is a part of time series decomposition result. */
		hasHolidayEffect?: boolean | null;

		/** If true, spikes_and_dips is a part of time series decomposition result. */
		hasSpikesAndDips?: boolean | null;

		/** If true, step_changes is a part of time series decomposition result. */
		hasStepChanges?: boolean | null;

		/** Arima order, can be used for both non-seasonal and seasonal parts. */
		nonSeasonalOrder?: ArimaOrder;

		/** Seasonal periods. Repeated because multiple periods are supported for one time series. */
		seasonalPeriods?: Array<string>;

		/** The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used. */
		timeSeriesId?: string | null;

		/** The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns. */
		timeSeriesIds?: Array<string>;
	}

	/** Model evaluation metrics for a single ARIMA forecasting model. */
	export interface ArimaSingleModelForecastingMetricsFormProperties {

		/** Is arima model fitted with drift or not. It is always false when d is not 1. */
		hasDrift: FormControl<boolean | null | undefined>,

		/** If true, holiday_effect is a part of time series decomposition result. */
		hasHolidayEffect: FormControl<boolean | null | undefined>,

		/** If true, spikes_and_dips is a part of time series decomposition result. */
		hasSpikesAndDips: FormControl<boolean | null | undefined>,

		/** If true, step_changes is a part of time series decomposition result. */
		hasStepChanges: FormControl<boolean | null | undefined>,

		/** The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used. */
		timeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateArimaSingleModelForecastingMetricsFormGroup() {
		return new FormGroup<ArimaSingleModelForecastingMetricsFormProperties>({
			hasDrift: new FormControl<boolean | null | undefined>(undefined),
			hasHolidayEffect: new FormControl<boolean | null | undefined>(undefined),
			hasSpikesAndDips: new FormControl<boolean | null | undefined>(undefined),
			hasStepChanges: new FormControl<boolean | null | undefined>(undefined),
			timeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Arima order, can be used for both non-seasonal and seasonal parts. */
	export interface ArimaOrder {

		/** Order of the differencing part. */
		d?: string | null;

		/** Order of the autoregressive part. */
		p?: string | null;

		/** Order of the moving-average part. */
		q?: string | null;
	}

	/** Arima order, can be used for both non-seasonal and seasonal parts. */
	export interface ArimaOrderFormProperties {

		/** Order of the differencing part. */
		d: FormControl<string | null | undefined>,

		/** Order of the autoregressive part. */
		p: FormControl<string | null | undefined>,

		/** Order of the moving-average part. */
		q: FormControl<string | null | undefined>,
	}
	export function CreateArimaOrderFormGroup() {
		return new FormGroup<ArimaOrderFormProperties>({
			d: new FormControl<string | null | undefined>(undefined),
			p: new FormControl<string | null | undefined>(undefined),
			q: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Arima model information. */
	export interface ArimaModelInfo {

		/** Arima coefficients. */
		arimaCoefficients?: ArimaCoefficients;

		/** ARIMA model fitting metrics. */
		arimaFittingMetrics?: ArimaFittingMetrics;

		/** Whether Arima model fitted with drift or not. It is always false when d is not 1. */
		hasDrift?: boolean | null;

		/** If true, holiday_effect is a part of time series decomposition result. */
		hasHolidayEffect?: boolean | null;

		/** If true, spikes_and_dips is a part of time series decomposition result. */
		hasSpikesAndDips?: boolean | null;

		/** If true, step_changes is a part of time series decomposition result. */
		hasStepChanges?: boolean | null;

		/** Arima order, can be used for both non-seasonal and seasonal parts. */
		nonSeasonalOrder?: ArimaOrder;

		/** Seasonal periods. Repeated because multiple periods are supported for one time series. */
		seasonalPeriods?: Array<string>;

		/** The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used. */
		timeSeriesId?: string | null;

		/** The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns. */
		timeSeriesIds?: Array<string>;
	}

	/** Arima model information. */
	export interface ArimaModelInfoFormProperties {

		/** Whether Arima model fitted with drift or not. It is always false when d is not 1. */
		hasDrift: FormControl<boolean | null | undefined>,

		/** If true, holiday_effect is a part of time series decomposition result. */
		hasHolidayEffect: FormControl<boolean | null | undefined>,

		/** If true, spikes_and_dips is a part of time series decomposition result. */
		hasSpikesAndDips: FormControl<boolean | null | undefined>,

		/** If true, step_changes is a part of time series decomposition result. */
		hasStepChanges: FormControl<boolean | null | undefined>,

		/** The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used. */
		timeSeriesId: FormControl<string | null | undefined>,
	}
	export function CreateArimaModelInfoFormGroup() {
		return new FormGroup<ArimaModelInfoFormProperties>({
			hasDrift: new FormControl<boolean | null | undefined>(undefined),
			hasHolidayEffect: new FormControl<boolean | null | undefined>(undefined),
			hasSpikesAndDips: new FormControl<boolean | null | undefined>(undefined),
			hasStepChanges: new FormControl<boolean | null | undefined>(undefined),
			timeSeriesId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Auto-)arima fitting result. Wrap everything in ArimaResult for easier refactoring if we want to use model-specific iteration results. */
	export interface ArimaResult {

		/** This message is repeated because there are multiple arima models fitted in auto-arima. For non-auto-arima model, its size is one. */
		arimaModelInfo?: Array<ArimaModelInfo>;

		/** Seasonal periods. Repeated because multiple periods are supported for one time series. */
		seasonalPeriods?: Array<string>;
	}

	/** (Auto-)arima fitting result. Wrap everything in ArimaResult for easier refactoring if we want to use model-specific iteration results. */
	export interface ArimaResultFormProperties {
	}
	export function CreateArimaResultFormGroup() {
		return new FormGroup<ArimaResultFormProperties>({
		});

	}


	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfig {

		/** The configuration for logging of each type of permission. */
		auditLogConfigs?: Array<AuditLogConfig>;

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service?: string | null;
	}

	/** Specifies the audit configuration for a service. The configuration determines which permission types are logged, and what identities, if any, are exempted from logging. An AuditConfig must have one or more AuditLogConfigs. If there are AuditConfigs for both `allServices` and a specific service, the union of the two AuditConfigs is used for that service: the log_types specified in each AuditConfig are enabled, and the exempted_members in each AuditLogConfig are exempted. Example Policy with multiple AuditConfigs: { "audit_configs": [ { "service": "allServices", "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" }, { "log_type": "ADMIN_READ" } ] }, { "service": "sampleservice.googleapis.com", "audit_log_configs": [ { "log_type": "DATA_READ" }, { "log_type": "DATA_WRITE", "exempted_members": [ "user:aliya@example.com" ] } ] } ] } For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ logging. It also exempts `jose@example.com` from DATA_READ logging, and `aliya@example.com` from DATA_WRITE logging. */
	export interface AuditConfigFormProperties {

		/** Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a special value that covers all services. */
		service: FormControl<string | null | undefined>,
	}
	export function CreateAuditConfigFormGroup() {
		return new FormGroup<AuditConfigFormProperties>({
			service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfig {

		/** Specifies the identities that do not cause logging for this type of permission. Follows the same format of Binding.members. */
		exemptedMembers?: Array<string>;

		/** The log type that this config enables. */
		logType?: AuditLogConfigLogType | null;
	}

	/** Provides the configuration for logging a type of permissions. Example: { "audit_log_configs": [ { "log_type": "DATA_READ", "exempted_members": [ "user:jose@example.com" ] }, { "log_type": "DATA_WRITE" } ] } This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting jose@example.com from DATA_READ logging. */
	export interface AuditLogConfigFormProperties {

		/** The log type that this config enables. */
		logType: FormControl<AuditLogConfigLogType | null | undefined>,
	}
	export function CreateAuditLogConfigFormGroup() {
		return new FormGroup<AuditLogConfigFormProperties>({
			logType: new FormControl<AuditLogConfigLogType | null | undefined>(undefined),
		});

	}

	export enum AuditLogConfigLogType { LOG_TYPE_UNSPECIFIED = 0, ADMIN_READ = 1, DATA_WRITE = 2, DATA_READ = 3 }

	export interface AvroOptions {

		/** [Optional] If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). */
		useAvroLogicalTypes?: boolean | null;
	}
	export interface AvroOptionsFormProperties {

		/** [Optional] If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). */
		useAvroLogicalTypes: FormControl<boolean | null | undefined>,
	}
	export function CreateAvroOptionsFormGroup() {
		return new FormGroup<AvroOptionsFormProperties>({
			useAvroLogicalTypes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface BiEngineReason {

		/** [Output-only] High-level BI Engine reason for partial or disabled acceleration. */
		code?: string | null;

		/** [Output-only] Free form human-readable reason for partial or disabled acceleration. */
		message?: string | null;
	}
	export interface BiEngineReasonFormProperties {

		/** [Output-only] High-level BI Engine reason for partial or disabled acceleration. */
		code: FormControl<string | null | undefined>,

		/** [Output-only] Free form human-readable reason for partial or disabled acceleration. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateBiEngineReasonFormGroup() {
		return new FormGroup<BiEngineReasonFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BiEngineStatistics {

		/** [Output-only] Specifies which mode of BI Engine acceleration was performed (if any). */
		accelerationMode?: string | null;

		/** [Output-only] Specifies which mode of BI Engine acceleration was performed (if any). */
		biEngineMode?: string | null;

		/** In case of DISABLED or PARTIAL bi_engine_mode, these contain the explanatory reasons as to why BI Engine could not accelerate. In case the full query was accelerated, this field is not populated. */
		biEngineReasons?: Array<BiEngineReason>;
	}
	export interface BiEngineStatisticsFormProperties {

		/** [Output-only] Specifies which mode of BI Engine acceleration was performed (if any). */
		accelerationMode: FormControl<string | null | undefined>,

		/** [Output-only] Specifies which mode of BI Engine acceleration was performed (if any). */
		biEngineMode: FormControl<string | null | undefined>,
	}
	export function CreateBiEngineStatisticsFormGroup() {
		return new FormGroup<BiEngineStatisticsFormProperties>({
			accelerationMode: new FormControl<string | null | undefined>(undefined),
			biEngineMode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigLakeConfiguration {

		/** [Required] Required and immutable. Credential reference for accessing external storage system. Normalized as project_id.location_id.connection_id. */
		connectionId?: string | null;

		/** [Required] Required and immutable. Open source file format that the table data is stored in. Currently only PARQUET is supported. */
		fileFormat?: string | null;

		/** [Required] Required and immutable. Fully qualified location prefix of the external folder where data is stored. Normalized to standard format: "gs:////". Starts with "gs://" rather than "/bigstore/". Ends with "/". Does not contain "*". See also BigLakeStorageMetadata on how it is used. */
		storageUri?: string | null;

		/** [Required] Required and immutable. Open source file format that the table data is stored in. Currently only PARQUET is supported. */
		tableFormat?: string | null;
	}
	export interface BigLakeConfigurationFormProperties {

		/** [Required] Required and immutable. Credential reference for accessing external storage system. Normalized as project_id.location_id.connection_id. */
		connectionId: FormControl<string | null | undefined>,

		/** [Required] Required and immutable. Open source file format that the table data is stored in. Currently only PARQUET is supported. */
		fileFormat: FormControl<string | null | undefined>,

		/** [Required] Required and immutable. Fully qualified location prefix of the external folder where data is stored. Normalized to standard format: "gs:////". Starts with "gs://" rather than "/bigstore/". Ends with "/". Does not contain "*". See also BigLakeStorageMetadata on how it is used. */
		storageUri: FormControl<string | null | undefined>,

		/** [Required] Required and immutable. Open source file format that the table data is stored in. Currently only PARQUET is supported. */
		tableFormat: FormControl<string | null | undefined>,
	}
	export function CreateBigLakeConfigurationFormGroup() {
		return new FormGroup<BigLakeConfigurationFormProperties>({
			connectionId: new FormControl<string | null | undefined>(undefined),
			fileFormat: new FormControl<string | null | undefined>(undefined),
			storageUri: new FormControl<string | null | undefined>(undefined),
			tableFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigQueryModelTraining {

		/** [Output-only, Beta] Index of current ML training iteration. Updated during create model query job to show job progress. */
		currentIteration?: number | null;

		/** [Output-only, Beta] Expected number of iterations for the create model query job specified as num_iterations in the input query. The actual total number of iterations may be less than this number due to early stop. */
		expectedTotalIterations?: string | null;
	}
	export interface BigQueryModelTrainingFormProperties {

		/** [Output-only, Beta] Index of current ML training iteration. Updated during create model query job to show job progress. */
		currentIteration: FormControl<number | null | undefined>,

		/** [Output-only, Beta] Expected number of iterations for the create model query job specified as num_iterations in the input query. The actual total number of iterations may be less than this number due to early stop. */
		expectedTotalIterations: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryModelTrainingFormGroup() {
		return new FormGroup<BigQueryModelTrainingFormProperties>({
			currentIteration: new FormControl<number | null | undefined>(undefined),
			expectedTotalIterations: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigtableColumn {

		/** [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels. */
		encoding?: string | null;

		/** [Optional] If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries. */
		fieldName?: string | null;

		/** [Optional] If this is set, only the latest version of value in this column are exposed. 'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels. */
		onlyReadLatest?: boolean | null;

		/** [Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64 encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as field_name. */
		qualifierEncoded?: string | null;
		qualifierString?: string | null;

		/** [Optional] The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels. */
		type?: string | null;
	}
	export interface BigtableColumnFormProperties {

		/** [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels. */
		encoding: FormControl<string | null | undefined>,

		/** [Optional] If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries. */
		fieldName: FormControl<string | null | undefined>,

		/** [Optional] If this is set, only the latest version of value in this column are exposed. 'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels. */
		onlyReadLatest: FormControl<boolean | null | undefined>,

		/** [Required] Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifier_string field. Otherwise, a base-64 encoded value must be set to qualifier_encoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as field_name. */
		qualifierEncoded: FormControl<string | null | undefined>,
		qualifierString: FormControl<string | null | undefined>,

		/** [Optional] The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBigtableColumnFormGroup() {
		return new FormGroup<BigtableColumnFormProperties>({
			encoding: new FormControl<string | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
			onlyReadLatest: new FormControl<boolean | null | undefined>(undefined),
			qualifierEncoded: new FormControl<string | null | undefined>(undefined),
			qualifierString: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigtableColumnFamily {

		/** [Optional] Lists of columns that should be exposed as individual fields as opposed to a list of (column name, value) pairs. All columns whose qualifier matches a qualifier in this list can be accessed as .. Other columns can be accessed as a list through .Column field. */
		columns?: Array<BigtableColumn>;

		/** [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it. */
		encoding?: string | null;

		/** Identifier of the column family. */
		familyId?: string | null;

		/** [Optional] If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column. */
		onlyReadLatest?: boolean | null;

		/** [Optional] The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it. */
		type?: string | null;
	}
	export interface BigtableColumnFamilyFormProperties {

		/** [Optional] The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it. */
		encoding: FormControl<string | null | undefined>,

		/** Identifier of the column family. */
		familyId: FormControl<string | null | undefined>,

		/** [Optional] If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column. */
		onlyReadLatest: FormControl<boolean | null | undefined>,

		/** [Optional] The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive) - BYTES STRING INTEGER FLOAT BOOLEAN Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBigtableColumnFamilyFormGroup() {
		return new FormGroup<BigtableColumnFamilyFormProperties>({
			encoding: new FormControl<string | null | undefined>(undefined),
			familyId: new FormControl<string | null | undefined>(undefined),
			onlyReadLatest: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BigtableOptions {

		/** [Optional] List of column families to expose in the table schema along with their types. This list restricts the column families that can be referenced in queries and specifies their value types. You can use this list to do type conversions - see the 'type' field for more details. If you leave this list empty, all column families are present in the table schema and their values are read as BYTES. During a query only the column families referenced in that query are read from Bigtable. */
		columnFamilies?: Array<BigtableColumnFamily>;

		/** [Optional] If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false. */
		ignoreUnspecifiedColumnFamilies?: boolean | null;

		/** [Optional] If field is true, then the rowkey column families will be read and converted to string. Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false. */
		readRowkeyAsString?: boolean | null;
	}
	export interface BigtableOptionsFormProperties {

		/** [Optional] If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false. */
		ignoreUnspecifiedColumnFamilies: FormControl<boolean | null | undefined>,

		/** [Optional] If field is true, then the rowkey column families will be read and converted to string. Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false. */
		readRowkeyAsString: FormControl<boolean | null | undefined>,
	}
	export function CreateBigtableOptionsFormGroup() {
		return new FormGroup<BigtableOptionsFormProperties>({
			ignoreUnspecifiedColumnFamilies: new FormControl<boolean | null | undefined>(undefined),
			readRowkeyAsString: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Evaluation metrics for binary classification/classifier models. */
	export interface BinaryClassificationMetrics {

		/** Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows. */
		aggregateClassificationMetrics?: AggregateClassificationMetrics;

		/** Binary confusion matrix at multiple thresholds. */
		binaryConfusionMatrixList?: Array<BinaryConfusionMatrix>;

		/** Label representing the negative class. */
		negativeLabel?: string | null;

		/** Label representing the positive class. */
		positiveLabel?: string | null;
	}

	/** Evaluation metrics for binary classification/classifier models. */
	export interface BinaryClassificationMetricsFormProperties {

		/** Label representing the negative class. */
		negativeLabel: FormControl<string | null | undefined>,

		/** Label representing the positive class. */
		positiveLabel: FormControl<string | null | undefined>,
	}
	export function CreateBinaryClassificationMetricsFormGroup() {
		return new FormGroup<BinaryClassificationMetricsFormProperties>({
			negativeLabel: new FormControl<string | null | undefined>(undefined),
			positiveLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Confusion matrix for binary classification models. */
	export interface BinaryConfusionMatrix {

		/** The fraction of predictions given the correct label. */
		accuracy?: number | null;

		/** The equally weighted average of recall and precision. */
		f1Score?: number | null;

		/** Number of false samples predicted as false. */
		falseNegatives?: string | null;

		/** Number of false samples predicted as true. */
		falsePositives?: string | null;

		/** Threshold value used when computing each of the following metric. */
		positiveClassThreshold?: number | null;

		/** The fraction of actual positive predictions that had positive actual labels. */
		precision?: number | null;

		/** The fraction of actual positive labels that were given a positive prediction. */
		recall?: number | null;

		/** Number of true samples predicted as false. */
		trueNegatives?: string | null;

		/** Number of true samples predicted as true. */
		truePositives?: string | null;
	}

	/** Confusion matrix for binary classification models. */
	export interface BinaryConfusionMatrixFormProperties {

		/** The fraction of predictions given the correct label. */
		accuracy: FormControl<number | null | undefined>,

		/** The equally weighted average of recall and precision. */
		f1Score: FormControl<number | null | undefined>,

		/** Number of false samples predicted as false. */
		falseNegatives: FormControl<string | null | undefined>,

		/** Number of false samples predicted as true. */
		falsePositives: FormControl<string | null | undefined>,

		/** Threshold value used when computing each of the following metric. */
		positiveClassThreshold: FormControl<number | null | undefined>,

		/** The fraction of actual positive predictions that had positive actual labels. */
		precision: FormControl<number | null | undefined>,

		/** The fraction of actual positive labels that were given a positive prediction. */
		recall: FormControl<number | null | undefined>,

		/** Number of true samples predicted as false. */
		trueNegatives: FormControl<string | null | undefined>,

		/** Number of true samples predicted as true. */
		truePositives: FormControl<string | null | undefined>,
	}
	export function CreateBinaryConfusionMatrixFormGroup() {
		return new FormGroup<BinaryConfusionMatrixFormProperties>({
			accuracy: new FormControl<number | null | undefined>(undefined),
			f1Score: new FormControl<number | null | undefined>(undefined),
			falseNegatives: new FormControl<string | null | undefined>(undefined),
			falsePositives: new FormControl<string | null | undefined>(undefined),
			positiveClassThreshold: new FormControl<number | null | undefined>(undefined),
			precision: new FormControl<number | null | undefined>(undefined),
			recall: new FormControl<number | null | undefined>(undefined),
			trueNegatives: new FormControl<string | null | undefined>(undefined),
			truePositives: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Associates `members`, or principals, with a `role`. */
	export interface Binding {

		/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
		condition?: Expr;

		/** Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding. */
		members?: Array<string>;

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role?: string | null;
	}

	/** Associates `members`, or principals, with a `role`. */
	export interface BindingFormProperties {

		/** Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`. */
		role: FormControl<string | null | undefined>,
	}
	export function CreateBindingFormGroup() {
		return new FormGroup<BindingFormProperties>({
			role: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface Expr {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description?: string | null;

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression?: string | null;

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location?: string | null;

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title?: string | null;
	}

	/** Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information. */
	export interface ExprFormProperties {

		/** Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI. */
		description: FormControl<string | null | undefined>,

		/** Textual representation of an expression in Common Expression Language syntax. */
		expression: FormControl<string | null | undefined>,

		/** Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. */
		location: FormControl<string | null | undefined>,

		/** Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateExprFormGroup() {
		return new FormGroup<ExprFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expression: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BqmlIterationResult {

		/** [Output-only, Beta] Time taken to run the training iteration in milliseconds. */
		durationMs?: string | null;

		/** [Output-only, Beta] Eval loss computed on the eval data at the end of the iteration. The eval loss is used for early stopping to avoid overfitting. No eval loss if eval_split_method option is specified as no_split or auto_split with input data size less than 500 rows. */
		evalLoss?: number | null;

		/** [Output-only, Beta] Index of the ML training iteration, starting from zero for each training run. */
		index?: number | null;

		/** [Output-only, Beta] Learning rate used for this iteration, it varies for different training iterations if learn_rate_strategy option is not constant. */
		learnRate?: number | null;

		/** [Output-only, Beta] Training loss computed on the training data at the end of the iteration. The training loss function is defined by model type. */
		trainingLoss?: number | null;
	}
	export interface BqmlIterationResultFormProperties {

		/** [Output-only, Beta] Time taken to run the training iteration in milliseconds. */
		durationMs: FormControl<string | null | undefined>,

		/** [Output-only, Beta] Eval loss computed on the eval data at the end of the iteration. The eval loss is used for early stopping to avoid overfitting. No eval loss if eval_split_method option is specified as no_split or auto_split with input data size less than 500 rows. */
		evalLoss: FormControl<number | null | undefined>,

		/** [Output-only, Beta] Index of the ML training iteration, starting from zero for each training run. */
		index: FormControl<number | null | undefined>,

		/** [Output-only, Beta] Learning rate used for this iteration, it varies for different training iterations if learn_rate_strategy option is not constant. */
		learnRate: FormControl<number | null | undefined>,

		/** [Output-only, Beta] Training loss computed on the training data at the end of the iteration. The training loss function is defined by model type. */
		trainingLoss: FormControl<number | null | undefined>,
	}
	export function CreateBqmlIterationResultFormGroup() {
		return new FormGroup<BqmlIterationResultFormProperties>({
			durationMs: new FormControl<string | null | undefined>(undefined),
			evalLoss: new FormControl<number | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			learnRate: new FormControl<number | null | undefined>(undefined),
			trainingLoss: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BqmlTrainingRun {

		/** [Output-only, Beta] List of each iteration results. */
		iterationResults?: Array<BqmlIterationResult>;

		/** [Output-only, Beta] Training run start time in milliseconds since the epoch. */
		startTime?: Date | null;

		/** [Output-only, Beta] Different state applicable for a training run. IN PROGRESS: Training run is in progress. FAILED: Training run ended due to a non-retryable failure. SUCCEEDED: Training run successfully completed. CANCELLED: Training run cancelled by the user. */
		state?: string | null;

		/** [Output-only, Beta] Training options used by this training run. These options are mutable for subsequent training runs. Default values are explicitly stored for options not specified in the input query of the first training run. For subsequent training runs, any option not explicitly specified in the input query will be copied from the previous training run. */
		trainingOptions?: BqmlTrainingRunTrainingOptions;
	}
	export interface BqmlTrainingRunFormProperties {

		/** [Output-only, Beta] Training run start time in milliseconds since the epoch. */
		startTime: FormControl<Date | null | undefined>,

		/** [Output-only, Beta] Different state applicable for a training run. IN PROGRESS: Training run is in progress. FAILED: Training run ended due to a non-retryable failure. SUCCEEDED: Training run successfully completed. CANCELLED: Training run cancelled by the user. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateBqmlTrainingRunFormGroup() {
		return new FormGroup<BqmlTrainingRunFormProperties>({
			startTime: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BqmlTrainingRunTrainingOptions {
		earlyStop?: boolean | null;
		l1Reg?: number | null;
		l2Reg?: number | null;
		learnRate?: number | null;
		learnRateStrategy?: string | null;
		lineSearchInitLearnRate?: number | null;
		maxIteration?: string | null;
		minRelProgress?: number | null;
		warmStart?: boolean | null;
	}
	export interface BqmlTrainingRunTrainingOptionsFormProperties {
		earlyStop: FormControl<boolean | null | undefined>,
		l1Reg: FormControl<number | null | undefined>,
		l2Reg: FormControl<number | null | undefined>,
		learnRate: FormControl<number | null | undefined>,
		learnRateStrategy: FormControl<string | null | undefined>,
		lineSearchInitLearnRate: FormControl<number | null | undefined>,
		maxIteration: FormControl<string | null | undefined>,
		minRelProgress: FormControl<number | null | undefined>,
		warmStart: FormControl<boolean | null | undefined>,
	}
	export function CreateBqmlTrainingRunTrainingOptionsFormGroup() {
		return new FormGroup<BqmlTrainingRunTrainingOptionsFormProperties>({
			earlyStop: new FormControl<boolean | null | undefined>(undefined),
			l1Reg: new FormControl<number | null | undefined>(undefined),
			l2Reg: new FormControl<number | null | undefined>(undefined),
			learnRate: new FormControl<number | null | undefined>(undefined),
			learnRateStrategy: new FormControl<string | null | undefined>(undefined),
			lineSearchInitLearnRate: new FormControl<number | null | undefined>(undefined),
			maxIteration: new FormControl<string | null | undefined>(undefined),
			minRelProgress: new FormControl<number | null | undefined>(undefined),
			warmStart: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Representative value of a categorical feature. */
	export interface CategoricalValue {

		/** Counts of all categories for the categorical feature. If there are more than ten categories, we return top ten (by count) and return one more CategoryCount with category "_OTHER_" and count as aggregate counts of remaining categories. */
		categoryCounts?: Array<CategoryCount>;
	}

	/** Representative value of a categorical feature. */
	export interface CategoricalValueFormProperties {
	}
	export function CreateCategoricalValueFormGroup() {
		return new FormGroup<CategoricalValueFormProperties>({
		});

	}


	/** Represents the count of a single category within the cluster. */
	export interface CategoryCount {

		/** The name of category. */
		category?: string | null;

		/** The count of training samples matching the category within the cluster. */
		count?: string | null;
	}

	/** Represents the count of a single category within the cluster. */
	export interface CategoryCountFormProperties {

		/** The name of category. */
		category: FormControl<string | null | undefined>,

		/** The count of training samples matching the category within the cluster. */
		count: FormControl<string | null | undefined>,
	}
	export function CreateCategoryCountFormGroup() {
		return new FormGroup<CategoryCountFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CloneDefinition {
		baseTableReference?: TableReference;

		/** [Required] The time at which the base table was cloned. This value is reported in the JSON response using RFC3339 format. */
		cloneTime?: Date | null;
	}
	export interface CloneDefinitionFormProperties {

		/** [Required] The time at which the base table was cloned. This value is reported in the JSON response using RFC3339 format. */
		cloneTime: FormControl<Date | null | undefined>,
	}
	export function CreateCloneDefinitionFormGroup() {
		return new FormGroup<CloneDefinitionFormProperties>({
			cloneTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface TableReference {

		/** [Required] The ID of the dataset containing this table. */
		datasetId?: string | null;

		/** [Required] The ID of the project containing this table. */
		projectId?: string | null;

		/** [Required] The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		tableId?: string | null;
	}
	export interface TableReferenceFormProperties {

		/** [Required] The ID of the dataset containing this table. */
		datasetId: FormControl<string | null | undefined>,

		/** [Required] The ID of the project containing this table. */
		projectId: FormControl<string | null | undefined>,

		/** [Required] The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateTableReferenceFormGroup() {
		return new FormGroup<TableReferenceFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message containing the information about one cluster. */
	export interface Cluster {

		/** Centroid id. */
		centroidId?: string | null;

		/** Count of training data rows that were assigned to this cluster. */
		count?: string | null;

		/** Values of highly variant features for this cluster. */
		featureValues?: Array<FeatureValue>;
	}

	/** Message containing the information about one cluster. */
	export interface ClusterFormProperties {

		/** Centroid id. */
		centroidId: FormControl<string | null | undefined>,

		/** Count of training data rows that were assigned to this cluster. */
		count: FormControl<string | null | undefined>,
	}
	export function CreateClusterFormGroup() {
		return new FormGroup<ClusterFormProperties>({
			centroidId: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Representative value of a single feature within the cluster. */
	export interface FeatureValue {

		/** Representative value of a categorical feature. */
		categoricalValue?: CategoricalValue;

		/** The feature column name. */
		featureColumn?: string | null;

		/** The numerical feature value. This is the centroid value for this feature. */
		numericalValue?: number | null;
	}

	/** Representative value of a single feature within the cluster. */
	export interface FeatureValueFormProperties {

		/** The feature column name. */
		featureColumn: FormControl<string | null | undefined>,

		/** The numerical feature value. This is the centroid value for this feature. */
		numericalValue: FormControl<number | null | undefined>,
	}
	export function CreateFeatureValueFormGroup() {
		return new FormGroup<FeatureValueFormProperties>({
			featureColumn: new FormControl<string | null | undefined>(undefined),
			numericalValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a single cluster for clustering model. */
	export interface ClusterInfo {

		/** Centroid id. */
		centroidId?: string | null;

		/** Cluster radius, the average distance from centroid to each point assigned to the cluster. */
		clusterRadius?: number | null;

		/** Cluster size, the total number of points assigned to the cluster. */
		clusterSize?: string | null;
	}

	/** Information about a single cluster for clustering model. */
	export interface ClusterInfoFormProperties {

		/** Centroid id. */
		centroidId: FormControl<string | null | undefined>,

		/** Cluster radius, the average distance from centroid to each point assigned to the cluster. */
		clusterRadius: FormControl<number | null | undefined>,

		/** Cluster size, the total number of points assigned to the cluster. */
		clusterSize: FormControl<string | null | undefined>,
	}
	export function CreateClusterInfoFormGroup() {
		return new FormGroup<ClusterInfoFormProperties>({
			centroidId: new FormControl<string | null | undefined>(undefined),
			clusterRadius: new FormControl<number | null | undefined>(undefined),
			clusterSize: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Clustering {

		/** [Repeated] One or more fields on which data should be clustered. Only top-level, non-repeated, simple-type fields are supported. When you cluster a table using multiple columns, the order of columns you specify is important. The order of the specified columns determines the sort order of the data. */
		fields?: Array<string>;
	}
	export interface ClusteringFormProperties {
	}
	export function CreateClusteringFormGroup() {
		return new FormGroup<ClusteringFormProperties>({
		});

	}


	/** Evaluation metrics for clustering models. */
	export interface ClusteringMetrics {

		/** Information for all clusters. */
		clusters?: Array<Cluster>;

		/** Davies-Bouldin index. */
		daviesBouldinIndex?: number | null;

		/** Mean of squared distances between each sample to its cluster centroid. */
		meanSquaredDistance?: number | null;
	}

	/** Evaluation metrics for clustering models. */
	export interface ClusteringMetricsFormProperties {

		/** Davies-Bouldin index. */
		daviesBouldinIndex: FormControl<number | null | undefined>,

		/** Mean of squared distances between each sample to its cluster centroid. */
		meanSquaredDistance: FormControl<number | null | undefined>,
	}
	export function CreateClusteringMetricsFormGroup() {
		return new FormGroup<ClusteringMetricsFormProperties>({
			daviesBouldinIndex: new FormControl<number | null | undefined>(undefined),
			meanSquaredDistance: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Confusion matrix for multi-class classification models. */
	export interface ConfusionMatrix {

		/** Confidence threshold used when computing the entries of the confusion matrix. */
		confidenceThreshold?: number | null;

		/** One row per actual label. */
		rows?: Array<Row>;
	}

	/** Confusion matrix for multi-class classification models. */
	export interface ConfusionMatrixFormProperties {

		/** Confidence threshold used when computing the entries of the confusion matrix. */
		confidenceThreshold: FormControl<number | null | undefined>,
	}
	export function CreateConfusionMatrixFormGroup() {
		return new FormGroup<ConfusionMatrixFormProperties>({
			confidenceThreshold: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A single row in the confusion matrix. */
	export interface Row {

		/** The original label of this row. */
		actualLabel?: string | null;

		/** Info describing predicted label distribution. */
		entries?: Array<Entry>;
	}

	/** A single row in the confusion matrix. */
	export interface RowFormProperties {

		/** The original label of this row. */
		actualLabel: FormControl<string | null | undefined>,
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
			actualLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single entry in the confusion matrix. */
	export interface Entry {

		/** Number of items being predicted as this label. */
		itemCount?: string | null;

		/** The predicted label. For confidence_threshold > 0, we will also add an entry indicating the number of items under the confidence threshold. */
		predictedLabel?: string | null;
	}

	/** A single entry in the confusion matrix. */
	export interface EntryFormProperties {

		/** Number of items being predicted as this label. */
		itemCount: FormControl<string | null | undefined>,

		/** The predicted label. For confidence_threshold > 0, we will also add an entry indicating the number of items under the confidence threshold. */
		predictedLabel: FormControl<string | null | undefined>,
	}
	export function CreateEntryFormGroup() {
		return new FormGroup<EntryFormProperties>({
			itemCount: new FormControl<string | null | undefined>(undefined),
			predictedLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConnectionProperty {

		/** [Required] Name of the connection property to set. */
		key?: string | null;

		/** [Required] Value of the connection property. */
		value?: string | null;
	}
	export interface ConnectionPropertyFormProperties {

		/** [Required] Name of the connection property to set. */
		key: FormControl<string | null | undefined>,

		/** [Required] Value of the connection property. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateConnectionPropertyFormGroup() {
		return new FormGroup<ConnectionPropertyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CsvOptions {

		/** [Optional] Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. */
		allowJaggedRows?: boolean | null;

		/** [Optional] Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false. */
		allowQuotedNewlines?: boolean | null;

		/** [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties. */
		encoding?: string | null;

		/** [Optional] The separator for fields in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (','). */
		fieldDelimiter?: string | null;

		/** [Optional] An custom string that will represent a NULL value in CSV import data. */
		nullMarker?: string | null;

		/** [Optional] Preserves the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\x00' to '\x1F') when loading from CSV. Only applicable to CSV, ignored for other formats. */
		preserveAsciiControlCharacters?: boolean | null;

		/** [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. */
		quote?: string | null;

		/** [Optional] The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema. */
		skipLeadingRows?: string | null;
	}
	export interface CsvOptionsFormProperties {

		/** [Optional] Indicates if BigQuery should accept rows that are missing trailing optional columns. If true, BigQuery treats missing trailing columns as null values. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. */
		allowJaggedRows: FormControl<boolean | null | undefined>,

		/** [Optional] Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false. */
		allowQuotedNewlines: FormControl<boolean | null | undefined>,

		/** [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties. */
		encoding: FormControl<string | null | undefined>,

		/** [Optional] The separator for fields in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (','). */
		fieldDelimiter: FormControl<string | null | undefined>,

		/** [Optional] An custom string that will represent a NULL value in CSV import data. */
		nullMarker: FormControl<string | null | undefined>,

		/** [Optional] Preserves the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\x00' to '\x1F') when loading from CSV. Only applicable to CSV, ignored for other formats. */
		preserveAsciiControlCharacters: FormControl<boolean | null | undefined>,

		/** [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. */
		quote: FormControl<string | null | undefined>,

		/** [Optional] The number of rows at the top of a CSV file that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. When autodetect is on, the behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema. */
		skipLeadingRows: FormControl<string | null | undefined>,
	}
	export function CreateCsvOptionsFormGroup() {
		return new FormGroup<CsvOptionsFormProperties>({
			allowJaggedRows: new FormControl<boolean | null | undefined>(undefined),
			allowQuotedNewlines: new FormControl<boolean | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			fieldDelimiter: new FormControl<string | null | undefined>(undefined),
			nullMarker: new FormControl<string | null | undefined>(undefined),
			preserveAsciiControlCharacters: new FormControl<boolean | null | undefined>(undefined),
			quote: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.?')]),
			skipLeadingRows: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataMaskingStatistics {

		/** [Output-only] [Preview] Whether any accessed data was protected by data masking. The actual evaluation is done by accessStats.masked_field_count > 0. Since this is only used for the discovery_doc generation purpose, as long as the type (boolean) matches, client library can leverage this. The actual evaluation of the variable is done else-where. */
		dataMaskingApplied?: boolean | null;
	}
	export interface DataMaskingStatisticsFormProperties {

		/** [Output-only] [Preview] Whether any accessed data was protected by data masking. The actual evaluation is done by accessStats.masked_field_count > 0. Since this is only used for the discovery_doc generation purpose, as long as the type (boolean) matches, client library can leverage this. The actual evaluation of the variable is done else-where. */
		dataMaskingApplied: FormControl<boolean | null | undefined>,
	}
	export function CreateDataMaskingStatisticsFormGroup() {
		return new FormGroup<DataMaskingStatisticsFormProperties>({
			dataMaskingApplied: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Data split result. This contains references to the training and evaluation data tables that were used to train the model. */
	export interface DataSplitResult {
		evaluationTable?: TableReference;
		testTable?: TableReference;
		trainingTable?: TableReference;
	}

	/** Data split result. This contains references to the training and evaluation data tables that were used to train the model. */
	export interface DataSplitResultFormProperties {
	}
	export function CreateDataSplitResultFormGroup() {
		return new FormGroup<DataSplitResultFormProperties>({
		});

	}

	export interface Dataset {

		/** [Optional] An array of objects that define dataset access for one or more entities. You can set this property when inserting or updating a dataset in order to control who is allowed to access the data. If unspecified at dataset creation time, BigQuery adds default dataset access for the following entities: access.specialGroup: projectReaders; access.role: READER; access.specialGroup: projectWriters; access.role: WRITER; access.specialGroup: projectOwners; access.role: OWNER; access.userByEmail: [dataset creator email]; access.role: OWNER; */
		DatasetAccess?: Array<DatasetAccess>;

		/** [Output-only] The time when this dataset was created, in milliseconds since the epoch. */
		creationTime?: string | null;
		datasetReference?: DatasetReference;

		/** [Output-only] The default collation of the dataset. */
		defaultCollation?: string | null;
		defaultEncryptionConfiguration?: EncryptionConfiguration;

		/** [Optional] The default partition expiration for all partitioned tables in the dataset, in milliseconds. Once this property is set, all newly-created partitioned tables in the dataset will have an expirationMs property in the timePartitioning settings set to this value, and changing the value will only affect new tables, not existing ones. The storage in a partition will have an expiration time of its partition time plus this value. Setting this property overrides the use of defaultTableExpirationMs for partitioned tables: only one of defaultTableExpirationMs and defaultPartitionExpirationMs will be used for any new partitioned table. If you provide an explicit timePartitioning.expirationMs when creating or updating a partitioned table, that value takes precedence over the default partition expiration time indicated by this property. */
		defaultPartitionExpirationMs?: string | null;

		/** [Output-only] The default rounding mode of the dataset. */
		defaultRoundingMode?: string | null;

		/** [Optional] The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property. */
		defaultTableExpirationMs?: string | null;

		/** [Optional] A user-friendly description of the dataset. */
		description?: string | null;

		/** [Output-only] A hash of the resource. */
		etag?: string | null;
		externalDatasetReference?: ExternalDatasetReference;

		/** [Optional] A descriptive name for the dataset. */
		friendlyName?: string | null;

		/** [Output-only] The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field. */
		id?: string | null;

		/** [Optional] Indicates if table names are case insensitive in the dataset. */
		isCaseInsensitive?: boolean | null;

		/** [Output-only] The resource type. */
		kind?: string | null;

		/** The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See Creating and Updating Dataset Labels for more information. */
		labels?: {[id: string]: string };

		/** [Output-only] The date when this dataset or any of its tables was last modified, in milliseconds since the epoch. */
		lastModifiedTime?: string | null;

		/** The geographic location where the dataset should reside. The default value is US. See details at https://cloud.google.com/bigquery/docs/locations. */
		location?: string | null;

		/** [Optional] Number of hours for the max time travel for all tables in the dataset. */
		maxTimeTravelHours?: string | null;

		/** [Output-only] Reserved for future use. */
		satisfiesPzs?: boolean | null;

		/** [Output-only] A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource. */
		selfLink?: string | null;

		/** [Optional] Storage billing model to be used for all tables in the dataset. Can be set to PHYSICAL. Default is LOGICAL. */
		storageBillingModel?: string | null;

		/** [Optional]The tags associated with this dataset. Tag keys are globally unique. */
		DatasetTags?: Array<DatasetTags>;
	}
	export interface DatasetFormProperties {

		/** [Output-only] The time when this dataset was created, in milliseconds since the epoch. */
		creationTime: FormControl<string | null | undefined>,

		/** [Output-only] The default collation of the dataset. */
		defaultCollation: FormControl<string | null | undefined>,

		/** [Optional] The default partition expiration for all partitioned tables in the dataset, in milliseconds. Once this property is set, all newly-created partitioned tables in the dataset will have an expirationMs property in the timePartitioning settings set to this value, and changing the value will only affect new tables, not existing ones. The storage in a partition will have an expiration time of its partition time plus this value. Setting this property overrides the use of defaultTableExpirationMs for partitioned tables: only one of defaultTableExpirationMs and defaultPartitionExpirationMs will be used for any new partitioned table. If you provide an explicit timePartitioning.expirationMs when creating or updating a partitioned table, that value takes precedence over the default partition expiration time indicated by this property. */
		defaultPartitionExpirationMs: FormControl<string | null | undefined>,

		/** [Output-only] The default rounding mode of the dataset. */
		defaultRoundingMode: FormControl<string | null | undefined>,

		/** [Optional] The default lifetime of all tables in the dataset, in milliseconds. The minimum value is 3600000 milliseconds (one hour). Once this property is set, all newly-created tables in the dataset will have an expirationTime property set to the creation time plus the value in this property, and changing the value will only affect new tables, not existing ones. When the expirationTime for a given table is reached, that table will be deleted automatically. If a table's expirationTime is modified or removed before the table expires, or if you provide an explicit expirationTime when creating a table, that value takes precedence over the default expiration time indicated by this property. */
		defaultTableExpirationMs: FormControl<string | null | undefined>,

		/** [Optional] A user-friendly description of the dataset. */
		description: FormControl<string | null | undefined>,

		/** [Output-only] A hash of the resource. */
		etag: FormControl<string | null | undefined>,

		/** [Optional] A descriptive name for the dataset. */
		friendlyName: FormControl<string | null | undefined>,

		/** [Output-only] The fully-qualified unique name of the dataset in the format projectId:datasetId. The dataset name without the project name is given in the datasetId field. When creating a new dataset, leave this field blank, and instead specify the datasetId field. */
		id: FormControl<string | null | undefined>,

		/** [Optional] Indicates if table names are case insensitive in the dataset. */
		isCaseInsensitive: FormControl<boolean | null | undefined>,

		/** [Output-only] The resource type. */
		kind: FormControl<string | null | undefined>,

		/** The labels associated with this dataset. You can use these to organize and group your datasets. You can set this property when inserting or updating a dataset. See Creating and Updating Dataset Labels for more information. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** [Output-only] The date when this dataset or any of its tables was last modified, in milliseconds since the epoch. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** The geographic location where the dataset should reside. The default value is US. See details at https://cloud.google.com/bigquery/docs/locations. */
		location: FormControl<string | null | undefined>,

		/** [Optional] Number of hours for the max time travel for all tables in the dataset. */
		maxTimeTravelHours: FormControl<string | null | undefined>,

		/** [Output-only] Reserved for future use. */
		satisfiesPzs: FormControl<boolean | null | undefined>,

		/** [Output-only] A URL that can be used to access the resource again. You can use this URL in Get or Update requests to the resource. */
		selfLink: FormControl<string | null | undefined>,

		/** [Optional] Storage billing model to be used for all tables in the dataset. Can be set to PHYSICAL. Default is LOGICAL. */
		storageBillingModel: FormControl<string | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			defaultCollation: new FormControl<string | null | undefined>(undefined),
			defaultPartitionExpirationMs: new FormControl<string | null | undefined>(undefined),
			defaultRoundingMode: new FormControl<string | null | undefined>(undefined),
			defaultTableExpirationMs: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isCaseInsensitive: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			maxTimeTravelHours: new FormControl<string | null | undefined>(undefined),
			satisfiesPzs: new FormControl<boolean | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			storageBillingModel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasetAccess {
		dataset?: DatasetAccessEntry;

		/** [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN". */
		domain?: string | null;

		/** [Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP". */
		groupByEmail?: string | null;

		/** [Pick one] Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. */
		iamMember?: string | null;

		/** [Required] An IAM role ID that should be granted to the user, group, or domain specified in this access entry. The following legacy mappings will be applied: OWNER  roles/bigquery.dataOwner WRITER  roles/bigquery.dataEditor READER  roles/bigquery.dataViewer This field will accept any of the above formats, but will return only the legacy format. For example, if you set this field to "roles/bigquery.dataOwner", it will be returned back as "OWNER". */
		role?: string | null;
		routine?: RoutineReference;

		/** [Pick one] A special group to grant access to. Possible values include: projectOwners: Owners of the enclosing project. projectReaders: Readers of the enclosing project. projectWriters: Writers of the enclosing project. allAuthenticatedUsers: All authenticated BigQuery users. Maps to similarly-named IAM members. */
		specialGroup?: string | null;

		/** [Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member "user:EMAIL" or "serviceAccount:EMAIL". */
		userByEmail?: string | null;
		view?: TableReference;
	}
	export interface DatasetAccessFormProperties {

		/** [Pick one] A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. Example: "example.com". Maps to IAM policy member "domain:DOMAIN". */
		domain: FormControl<string | null | undefined>,

		/** [Pick one] An email address of a Google Group to grant access to. Maps to IAM policy member "group:GROUP". */
		groupByEmail: FormControl<string | null | undefined>,

		/** [Pick one] Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. */
		iamMember: FormControl<string | null | undefined>,

		/** [Required] An IAM role ID that should be granted to the user, group, or domain specified in this access entry. The following legacy mappings will be applied: OWNER  roles/bigquery.dataOwner WRITER  roles/bigquery.dataEditor READER  roles/bigquery.dataViewer This field will accept any of the above formats, but will return only the legacy format. For example, if you set this field to "roles/bigquery.dataOwner", it will be returned back as "OWNER". */
		role: FormControl<string | null | undefined>,

		/** [Pick one] A special group to grant access to. Possible values include: projectOwners: Owners of the enclosing project. projectReaders: Readers of the enclosing project. projectWriters: Writers of the enclosing project. allAuthenticatedUsers: All authenticated BigQuery users. Maps to similarly-named IAM members. */
		specialGroup: FormControl<string | null | undefined>,

		/** [Pick one] An email address of a user to grant access to. For example: fred@example.com. Maps to IAM policy member "user:EMAIL" or "serviceAccount:EMAIL". */
		userByEmail: FormControl<string | null | undefined>,
	}
	export function CreateDatasetAccessFormGroup() {
		return new FormGroup<DatasetAccessFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined),
			groupByEmail: new FormControl<string | null | undefined>(undefined),
			iamMember: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
			specialGroup: new FormControl<string | null | undefined>(undefined),
			userByEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasetAccessEntry {
		dataset?: DatasetReference;
		targetTypes?: Array<string>;
	}
	export interface DatasetAccessEntryFormProperties {
	}
	export function CreateDatasetAccessEntryFormGroup() {
		return new FormGroup<DatasetAccessEntryFormProperties>({
		});

	}

	export interface DatasetReference {

		/** [Required] A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		datasetId?: string | null;

		/** [Optional] The ID of the project containing this dataset. */
		projectId?: string | null;
	}
	export interface DatasetReferenceFormProperties {

		/** [Required] A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		datasetId: FormControl<string | null | undefined>,

		/** [Optional] The ID of the project containing this dataset. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateDatasetReferenceFormGroup() {
		return new FormGroup<DatasetReferenceFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RoutineReference {

		/** Required. The ID of the dataset containing this routine. */
		datasetId?: string | null;

		/** Required. The ID of the project containing this routine. */
		projectId?: string | null;

		/** Required. The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters. */
		routineId?: string | null;
	}
	export interface RoutineReferenceFormProperties {

		/** Required. The ID of the dataset containing this routine. */
		datasetId: FormControl<string | null | undefined>,

		/** Required. The ID of the project containing this routine. */
		projectId: FormControl<string | null | undefined>,

		/** Required. The ID of the routine. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters. */
		routineId: FormControl<string | null | undefined>,
	}
	export function CreateRoutineReferenceFormGroup() {
		return new FormGroup<RoutineReferenceFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			routineId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EncryptionConfiguration {

		/** Optional. Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. */
		kmsKeyName?: string | null;
	}
	export interface EncryptionConfigurationFormProperties {

		/** Optional. Describes the Cloud KMS encryption key that will be used to protect destination BigQuery table. The BigQuery Service Account associated with your project requires access to this encryption key. */
		kmsKeyName: FormControl<string | null | undefined>,
	}
	export function CreateEncryptionConfigurationFormGroup() {
		return new FormGroup<EncryptionConfigurationFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExternalDatasetReference {

		/** [Required] The connection id that is used to access the external_source. Format: projects/{project_id}/locations/{location_id}/connections/{connection_id} */
		connection?: string | null;

		/** [Required] External source that backs this dataset. */
		externalSource?: string | null;
	}
	export interface ExternalDatasetReferenceFormProperties {

		/** [Required] The connection id that is used to access the external_source. Format: projects/{project_id}/locations/{location_id}/connections/{connection_id} */
		connection: FormControl<string | null | undefined>,

		/** [Required] External source that backs this dataset. */
		externalSource: FormControl<string | null | undefined>,
	}
	export function CreateExternalDatasetReferenceFormGroup() {
		return new FormGroup<ExternalDatasetReferenceFormProperties>({
			connection: new FormControl<string | null | undefined>(undefined),
			externalSource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasetTags {

		/** [Required] The namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is org id. */
		tagKey?: string | null;

		/** [Required] Friendly short name of the tag value, e.g. "production". */
		tagValue?: string | null;
	}
	export interface DatasetTagsFormProperties {

		/** [Required] The namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is org id. */
		tagKey: FormControl<string | null | undefined>,

		/** [Required] Friendly short name of the tag value, e.g. "production". */
		tagValue: FormControl<string | null | undefined>,
	}
	export function CreateDatasetTagsFormGroup() {
		return new FormGroup<DatasetTagsFormProperties>({
			tagKey: new FormControl<string | null | undefined>(undefined),
			tagValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasetList {

		/** An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project. */
		DatasetListDatasets?: Array<DatasetListDatasets>;

		/** A hash value of the results page. You can use this property to determine if the page has changed since the last request. */
		etag?: string | null;

		/** The list type. This property always returns the value "bigquery#datasetList". */
		kind?: string | null;

		/** A token that can be used to request the next results page. This property is omitted on the final results page. */
		nextPageToken?: string | null;
	}
	export interface DatasetListFormProperties {

		/** A hash value of the results page. You can use this property to determine if the page has changed since the last request. */
		etag: FormControl<string | null | undefined>,

		/** The list type. This property always returns the value "bigquery#datasetList". */
		kind: FormControl<string | null | undefined>,

		/** A token that can be used to request the next results page. This property is omitted on the final results page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateDatasetListFormGroup() {
		return new FormGroup<DatasetListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DatasetListDatasets {
		datasetReference?: DatasetReference;

		/** A descriptive name for the dataset, if one exists. */
		friendlyName?: string | null;

		/** The fully-qualified, unique, opaque ID of the dataset. */
		id?: string | null;

		/** The resource type. This property always returns the value "bigquery#dataset". */
		kind?: string | null;

		/** The labels associated with this dataset. You can use these to organize and group your datasets. */
		labels?: {[id: string]: string };

		/** The geographic location where the data resides. */
		location?: string | null;
	}
	export interface DatasetListDatasetsFormProperties {

		/** A descriptive name for the dataset, if one exists. */
		friendlyName: FormControl<string | null | undefined>,

		/** The fully-qualified, unique, opaque ID of the dataset. */
		id: FormControl<string | null | undefined>,

		/** The resource type. This property always returns the value "bigquery#dataset". */
		kind: FormControl<string | null | undefined>,

		/** The labels associated with this dataset. You can use these to organize and group your datasets. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The geographic location where the data resides. */
		location: FormControl<string | null | undefined>,
	}
	export function CreateDatasetListDatasetsFormGroup() {
		return new FormGroup<DatasetListDatasetsFormProperties>({
			friendlyName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DestinationTableProperties {

		/** [Optional] The description for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current description is provided, the job will fail. */
		description?: string | null;

		/** [Internal] This field is for Google internal use only. */
		expirationTime?: Date | null;

		/** [Optional] The friendly name for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current friendly name is provided, the job will fail. */
		friendlyName?: string | null;

		/** [Optional] The labels associated with this table. You can use these to organize and group your tables. This will only be used if the destination table is newly created. If the table already exists and labels are different than the current labels are provided, the job will fail. */
		labels?: {[id: string]: string };
	}
	export interface DestinationTablePropertiesFormProperties {

		/** [Optional] The description for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current description is provided, the job will fail. */
		description: FormControl<string | null | undefined>,

		/** [Internal] This field is for Google internal use only. */
		expirationTime: FormControl<Date | null | undefined>,

		/** [Optional] The friendly name for the destination table. This will only be used if the destination table is newly created. If the table already exists and a value different than the current friendly name is provided, the job will fail. */
		friendlyName: FormControl<string | null | undefined>,

		/** [Optional] The labels associated with this table. You can use these to organize and group your tables. This will only be used if the destination table is newly created. If the table already exists and labels are different than the current labels are provided, the job will fail. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDestinationTablePropertiesFormGroup() {
		return new FormGroup<DestinationTablePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<Date | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Model evaluation metrics for dimensionality reduction models. */
	export interface DimensionalityReductionMetrics {

		/** Total percentage of variance explained by the selected principal components. */
		totalExplainedVarianceRatio?: number | null;
	}

	/** Model evaluation metrics for dimensionality reduction models. */
	export interface DimensionalityReductionMetricsFormProperties {

		/** Total percentage of variance explained by the selected principal components. */
		totalExplainedVarianceRatio: FormControl<number | null | undefined>,
	}
	export function CreateDimensionalityReductionMetricsFormGroup() {
		return new FormGroup<DimensionalityReductionMetricsFormProperties>({
			totalExplainedVarianceRatio: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DmlStatistics {

		/** Number of deleted Rows. populated by DML DELETE, MERGE and TRUNCATE statements. */
		deletedRowCount?: string | null;

		/** Number of inserted Rows. Populated by DML INSERT and MERGE statements. */
		insertedRowCount?: string | null;

		/** Number of updated Rows. Populated by DML UPDATE and MERGE statements. */
		updatedRowCount?: string | null;
	}
	export interface DmlStatisticsFormProperties {

		/** Number of deleted Rows. populated by DML DELETE, MERGE and TRUNCATE statements. */
		deletedRowCount: FormControl<string | null | undefined>,

		/** Number of inserted Rows. Populated by DML INSERT and MERGE statements. */
		insertedRowCount: FormControl<string | null | undefined>,

		/** Number of updated Rows. Populated by DML UPDATE and MERGE statements. */
		updatedRowCount: FormControl<string | null | undefined>,
	}
	export function CreateDmlStatisticsFormGroup() {
		return new FormGroup<DmlStatisticsFormProperties>({
			deletedRowCount: new FormControl<string | null | undefined>(undefined),
			insertedRowCount: new FormControl<string | null | undefined>(undefined),
			updatedRowCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Discrete candidates of a double hyperparameter. */
	export interface DoubleCandidates {

		/** Candidates for the double parameter in increasing order. */
		candidates?: Array<number>;
	}

	/** Discrete candidates of a double hyperparameter. */
	export interface DoubleCandidatesFormProperties {
	}
	export function CreateDoubleCandidatesFormGroup() {
		return new FormGroup<DoubleCandidatesFormProperties>({
		});

	}


	/** Search space for a double hyperparameter. */
	export interface DoubleHparamSearchSpace {

		/** Discrete candidates of a double hyperparameter. */
		candidates?: DoubleCandidates;

		/** Range of a double hyperparameter. */
		range?: DoubleRange;
	}

	/** Search space for a double hyperparameter. */
	export interface DoubleHparamSearchSpaceFormProperties {
	}
	export function CreateDoubleHparamSearchSpaceFormGroup() {
		return new FormGroup<DoubleHparamSearchSpaceFormProperties>({
		});

	}


	/** Range of a double hyperparameter. */
	export interface DoubleRange {

		/** Max value of the double parameter. */
		max?: number | null;

		/** Min value of the double parameter. */
		min?: number | null;
	}

	/** Range of a double hyperparameter. */
	export interface DoubleRangeFormProperties {

		/** Max value of the double parameter. */
		max: FormControl<number | null | undefined>,

		/** Min value of the double parameter. */
		min: FormControl<number | null | undefined>,
	}
	export function CreateDoubleRangeFormGroup() {
		return new FormGroup<DoubleRangeFormProperties>({
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ErrorProto {

		/** Debugging information. This property is internal to Google and should not be used. */
		debugInfo?: string | null;

		/** Specifies where the error occurred, if present. */
		location?: string | null;

		/** A human-readable description of the error. */
		message?: string | null;

		/** A short error code that summarizes the error. */
		reason?: string | null;
	}
	export interface ErrorProtoFormProperties {

		/** Debugging information. This property is internal to Google and should not be used. */
		debugInfo: FormControl<string | null | undefined>,

		/** Specifies where the error occurred, if present. */
		location: FormControl<string | null | undefined>,

		/** A human-readable description of the error. */
		message: FormControl<string | null | undefined>,

		/** A short error code that summarizes the error. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateErrorProtoFormGroup() {
		return new FormGroup<ErrorProtoFormProperties>({
			debugInfo: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models. */
	export interface EvaluationMetrics {

		/** Model evaluation metrics for ARIMA forecasting models. */
		arimaForecastingMetrics?: ArimaForecastingMetrics;

		/** Evaluation metrics for binary classification/classifier models. */
		binaryClassificationMetrics?: BinaryClassificationMetrics;

		/** Evaluation metrics for clustering models. */
		clusteringMetrics?: ClusteringMetrics;

		/** Model evaluation metrics for dimensionality reduction models. */
		dimensionalityReductionMetrics?: DimensionalityReductionMetrics;

		/** Evaluation metrics for multi-class classification/classifier models. */
		multiClassClassificationMetrics?: MultiClassClassificationMetrics;

		/** Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit. */
		rankingMetrics?: RankingMetrics;

		/** Evaluation metrics for regression and explicit feedback type matrix factorization models. */
		regressionMetrics?: RegressionMetrics;
	}

	/** Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models. */
	export interface EvaluationMetricsFormProperties {
	}
	export function CreateEvaluationMetricsFormGroup() {
		return new FormGroup<EvaluationMetricsFormProperties>({
		});

	}


	/** Evaluation metrics for multi-class classification/classifier models. */
	export interface MultiClassClassificationMetrics {

		/** Aggregate metrics for classification/classifier models. For multi-class models, the metrics are either macro-averaged or micro-averaged. When macro-averaged, the metrics are calculated for each label and then an unweighted average is taken of those values. When micro-averaged, the metric is calculated globally by counting the total number of correctly predicted rows. */
		aggregateClassificationMetrics?: AggregateClassificationMetrics;

		/** Confusion matrix at different thresholds. */
		confusionMatrixList?: Array<ConfusionMatrix>;
	}

	/** Evaluation metrics for multi-class classification/classifier models. */
	export interface MultiClassClassificationMetricsFormProperties {
	}
	export function CreateMultiClassClassificationMetricsFormGroup() {
		return new FormGroup<MultiClassClassificationMetricsFormProperties>({
		});

	}


	/** Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit. */
	export interface RankingMetrics {

		/** Determines the goodness of a ranking by computing the percentile rank from the predicted confidence and dividing it by the original rank. */
		averageRank?: number | null;

		/** Calculates a precision per user for all the items by ranking them and then averages all the precisions across all the users. */
		meanAveragePrecision?: number | null;

		/** Similar to the mean squared error computed in regression and explicit recommendation models except instead of computing the rating directly, the output from evaluate is computed against a preference which is 1 or 0 depending on if the rating exists or not. */
		meanSquaredError?: number | null;

		/** A metric to determine the goodness of a ranking calculated from the predicted confidence by comparing it to an ideal rank measured by the original ratings. */
		normalizedDiscountedCumulativeGain?: number | null;
	}

	/** Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit. */
	export interface RankingMetricsFormProperties {

		/** Determines the goodness of a ranking by computing the percentile rank from the predicted confidence and dividing it by the original rank. */
		averageRank: FormControl<number | null | undefined>,

		/** Calculates a precision per user for all the items by ranking them and then averages all the precisions across all the users. */
		meanAveragePrecision: FormControl<number | null | undefined>,

		/** Similar to the mean squared error computed in regression and explicit recommendation models except instead of computing the rating directly, the output from evaluate is computed against a preference which is 1 or 0 depending on if the rating exists or not. */
		meanSquaredError: FormControl<number | null | undefined>,

		/** A metric to determine the goodness of a ranking calculated from the predicted confidence by comparing it to an ideal rank measured by the original ratings. */
		normalizedDiscountedCumulativeGain: FormControl<number | null | undefined>,
	}
	export function CreateRankingMetricsFormGroup() {
		return new FormGroup<RankingMetricsFormProperties>({
			averageRank: new FormControl<number | null | undefined>(undefined),
			meanAveragePrecision: new FormControl<number | null | undefined>(undefined),
			meanSquaredError: new FormControl<number | null | undefined>(undefined),
			normalizedDiscountedCumulativeGain: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Evaluation metrics for regression and explicit feedback type matrix factorization models. */
	export interface RegressionMetrics {

		/** Mean absolute error. */
		meanAbsoluteError?: number | null;

		/** Mean squared error. */
		meanSquaredError?: number | null;

		/** Mean squared log error. */
		meanSquaredLogError?: number | null;

		/** Median absolute error. */
		medianAbsoluteError?: number | null;

		/** R^2 score. This corresponds to r2_score in ML.EVALUATE. */
		rSquared?: number | null;
	}

	/** Evaluation metrics for regression and explicit feedback type matrix factorization models. */
	export interface RegressionMetricsFormProperties {

		/** Mean absolute error. */
		meanAbsoluteError: FormControl<number | null | undefined>,

		/** Mean squared error. */
		meanSquaredError: FormControl<number | null | undefined>,

		/** Mean squared log error. */
		meanSquaredLogError: FormControl<number | null | undefined>,

		/** Median absolute error. */
		medianAbsoluteError: FormControl<number | null | undefined>,

		/** R^2 score. This corresponds to r2_score in ML.EVALUATE. */
		rSquared: FormControl<number | null | undefined>,
	}
	export function CreateRegressionMetricsFormGroup() {
		return new FormGroup<RegressionMetricsFormProperties>({
			meanAbsoluteError: new FormControl<number | null | undefined>(undefined),
			meanSquaredError: new FormControl<number | null | undefined>(undefined),
			meanSquaredLogError: new FormControl<number | null | undefined>(undefined),
			medianAbsoluteError: new FormControl<number | null | undefined>(undefined),
			rSquared: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExplainQueryStage {

		/** Number of parallel input segments completed. */
		completedParallelInputs?: string | null;

		/** Milliseconds the average shard spent on CPU-bound tasks. */
		computeMsAvg?: string | null;

		/** Milliseconds the slowest shard spent on CPU-bound tasks. */
		computeMsMax?: string | null;

		/** Relative amount of time the average shard spent on CPU-bound tasks. */
		computeRatioAvg?: number | null;

		/** Relative amount of time the slowest shard spent on CPU-bound tasks. */
		computeRatioMax?: number | null;

		/** Stage end time represented as milliseconds since epoch. */
		endMs?: string | null;

		/** Unique ID for stage within plan. */
		id?: string | null;

		/** IDs for stages that are inputs to this stage. */
		inputStages?: Array<string>;

		/** Human-readable name for stage. */
		name?: string | null;

		/** Number of parallel input segments to be processed. */
		parallelInputs?: string | null;

		/** Milliseconds the average shard spent reading input. */
		readMsAvg?: string | null;

		/** Milliseconds the slowest shard spent reading input. */
		readMsMax?: string | null;

		/** Relative amount of time the average shard spent reading input. */
		readRatioAvg?: number | null;

		/** Relative amount of time the slowest shard spent reading input. */
		readRatioMax?: number | null;

		/** Number of records read into the stage. */
		recordsRead?: string | null;

		/** Number of records written by the stage. */
		recordsWritten?: string | null;

		/** Total number of bytes written to shuffle. */
		shuffleOutputBytes?: string | null;

		/** Total number of bytes written to shuffle and spilled to disk. */
		shuffleOutputBytesSpilled?: string | null;

		/** Slot-milliseconds used by the stage. */
		slotMs?: string | null;

		/** Stage start time represented as milliseconds since epoch. */
		startMs?: string | null;

		/** Current status for the stage. */
		status?: string | null;

		/** List of operations within the stage in dependency order (approximately chronological). */
		steps?: Array<ExplainQueryStep>;

		/** Milliseconds the average shard spent waiting to be scheduled. */
		waitMsAvg?: string | null;

		/** Milliseconds the slowest shard spent waiting to be scheduled. */
		waitMsMax?: string | null;

		/** Relative amount of time the average shard spent waiting to be scheduled. */
		waitRatioAvg?: number | null;

		/** Relative amount of time the slowest shard spent waiting to be scheduled. */
		waitRatioMax?: number | null;

		/** Milliseconds the average shard spent on writing output. */
		writeMsAvg?: string | null;

		/** Milliseconds the slowest shard spent on writing output. */
		writeMsMax?: string | null;

		/** Relative amount of time the average shard spent on writing output. */
		writeRatioAvg?: number | null;

		/** Relative amount of time the slowest shard spent on writing output. */
		writeRatioMax?: number | null;
	}
	export interface ExplainQueryStageFormProperties {

		/** Number of parallel input segments completed. */
		completedParallelInputs: FormControl<string | null | undefined>,

		/** Milliseconds the average shard spent on CPU-bound tasks. */
		computeMsAvg: FormControl<string | null | undefined>,

		/** Milliseconds the slowest shard spent on CPU-bound tasks. */
		computeMsMax: FormControl<string | null | undefined>,

		/** Relative amount of time the average shard spent on CPU-bound tasks. */
		computeRatioAvg: FormControl<number | null | undefined>,

		/** Relative amount of time the slowest shard spent on CPU-bound tasks. */
		computeRatioMax: FormControl<number | null | undefined>,

		/** Stage end time represented as milliseconds since epoch. */
		endMs: FormControl<string | null | undefined>,

		/** Unique ID for stage within plan. */
		id: FormControl<string | null | undefined>,

		/** Human-readable name for stage. */
		name: FormControl<string | null | undefined>,

		/** Number of parallel input segments to be processed. */
		parallelInputs: FormControl<string | null | undefined>,

		/** Milliseconds the average shard spent reading input. */
		readMsAvg: FormControl<string | null | undefined>,

		/** Milliseconds the slowest shard spent reading input. */
		readMsMax: FormControl<string | null | undefined>,

		/** Relative amount of time the average shard spent reading input. */
		readRatioAvg: FormControl<number | null | undefined>,

		/** Relative amount of time the slowest shard spent reading input. */
		readRatioMax: FormControl<number | null | undefined>,

		/** Number of records read into the stage. */
		recordsRead: FormControl<string | null | undefined>,

		/** Number of records written by the stage. */
		recordsWritten: FormControl<string | null | undefined>,

		/** Total number of bytes written to shuffle. */
		shuffleOutputBytes: FormControl<string | null | undefined>,

		/** Total number of bytes written to shuffle and spilled to disk. */
		shuffleOutputBytesSpilled: FormControl<string | null | undefined>,

		/** Slot-milliseconds used by the stage. */
		slotMs: FormControl<string | null | undefined>,

		/** Stage start time represented as milliseconds since epoch. */
		startMs: FormControl<string | null | undefined>,

		/** Current status for the stage. */
		status: FormControl<string | null | undefined>,

		/** Milliseconds the average shard spent waiting to be scheduled. */
		waitMsAvg: FormControl<string | null | undefined>,

		/** Milliseconds the slowest shard spent waiting to be scheduled. */
		waitMsMax: FormControl<string | null | undefined>,

		/** Relative amount of time the average shard spent waiting to be scheduled. */
		waitRatioAvg: FormControl<number | null | undefined>,

		/** Relative amount of time the slowest shard spent waiting to be scheduled. */
		waitRatioMax: FormControl<number | null | undefined>,

		/** Milliseconds the average shard spent on writing output. */
		writeMsAvg: FormControl<string | null | undefined>,

		/** Milliseconds the slowest shard spent on writing output. */
		writeMsMax: FormControl<string | null | undefined>,

		/** Relative amount of time the average shard spent on writing output. */
		writeRatioAvg: FormControl<number | null | undefined>,

		/** Relative amount of time the slowest shard spent on writing output. */
		writeRatioMax: FormControl<number | null | undefined>,
	}
	export function CreateExplainQueryStageFormGroup() {
		return new FormGroup<ExplainQueryStageFormProperties>({
			completedParallelInputs: new FormControl<string | null | undefined>(undefined),
			computeMsAvg: new FormControl<string | null | undefined>(undefined),
			computeMsMax: new FormControl<string | null | undefined>(undefined),
			computeRatioAvg: new FormControl<number | null | undefined>(undefined),
			computeRatioMax: new FormControl<number | null | undefined>(undefined),
			endMs: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parallelInputs: new FormControl<string | null | undefined>(undefined),
			readMsAvg: new FormControl<string | null | undefined>(undefined),
			readMsMax: new FormControl<string | null | undefined>(undefined),
			readRatioAvg: new FormControl<number | null | undefined>(undefined),
			readRatioMax: new FormControl<number | null | undefined>(undefined),
			recordsRead: new FormControl<string | null | undefined>(undefined),
			recordsWritten: new FormControl<string | null | undefined>(undefined),
			shuffleOutputBytes: new FormControl<string | null | undefined>(undefined),
			shuffleOutputBytesSpilled: new FormControl<string | null | undefined>(undefined),
			slotMs: new FormControl<string | null | undefined>(undefined),
			startMs: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			waitMsAvg: new FormControl<string | null | undefined>(undefined),
			waitMsMax: new FormControl<string | null | undefined>(undefined),
			waitRatioAvg: new FormControl<number | null | undefined>(undefined),
			waitRatioMax: new FormControl<number | null | undefined>(undefined),
			writeMsAvg: new FormControl<string | null | undefined>(undefined),
			writeMsMax: new FormControl<string | null | undefined>(undefined),
			writeRatioAvg: new FormControl<number | null | undefined>(undefined),
			writeRatioMax: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ExplainQueryStep {

		/** Machine-readable operation type. */
		kind?: string | null;

		/** Human-readable stage descriptions. */
		substeps?: Array<string>;
	}
	export interface ExplainQueryStepFormProperties {

		/** Machine-readable operation type. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateExplainQueryStepFormGroup() {
		return new FormGroup<ExplainQueryStepFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Explanation for a single feature. */
	export interface Explanation {

		/** Attribution of feature. */
		attribution?: number | null;

		/** The full feature name. For non-numerical features, will be formatted like `.`. Overall size of feature name will always be truncated to first 120 characters. */
		featureName?: string | null;
	}

	/** Explanation for a single feature. */
	export interface ExplanationFormProperties {

		/** Attribution of feature. */
		attribution: FormControl<number | null | undefined>,

		/** The full feature name. For non-numerical features, will be formatted like `.`. Overall size of feature name will always be truncated to first 120 characters. */
		featureName: FormControl<string | null | undefined>,
	}
	export function CreateExplanationFormGroup() {
		return new FormGroup<ExplanationFormProperties>({
			attribution: new FormControl<number | null | undefined>(undefined),
			featureName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExternalDataConfiguration {

		/** Try to detect schema and format options automatically. Any option specified explicitly will be honored. */
		autodetect?: boolean | null;
		avroOptions?: AvroOptions;
		bigtableOptions?: BigtableOptions;

		/** [Optional] The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats. */
		compression?: string | null;

		/** [Optional, Trusted Tester] Connection for external data source. */
		connectionId?: string | null;
		csvOptions?: CsvOptions;

		/** [Optional] Defines the list of possible SQL data types to which the source decimal values are converted. This list and the precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC, and STRING, a type is picked if it is in the specified list and if it supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a value exceeds the supported range when reading the data, an error will be thrown. Example: Suppose the value of this field is ["NUMERIC", "BIGNUMERIC"]. If (precision,scale) is: (38,9) -> NUMERIC; (39,9) -> BIGNUMERIC (NUMERIC cannot hold 30 integer digits); (38,10) -> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits); (76,38) -> BIGNUMERIC; (77,38) -> BIGNUMERIC (error if value exeeds supported range). This field cannot contain duplicate types. The order of the types in this field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as ["NUMERIC", "BIGNUMERIC"] and NUMERIC always takes precedence over BIGNUMERIC. Defaults to ["NUMERIC", "STRING"] for ORC and ["NUMERIC"] for the other file formats. */
		decimalTargetTypes?: Array<string>;

		/** [Optional] Specifies how source URIs are interpreted for constructing the file set to load. By default source URIs are expanded against the underlying storage. Other options include specifying manifest files. Only applicable to object storage systems. */
		fileSetSpecType?: string | null;
		googleSheetsOptions?: GoogleSheetsOptions;
		hivePartitioningOptions?: HivePartitioningOptions;

		/** [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored. */
		ignoreUnknownValues?: boolean | null;
		jsonOptions?: JsonOptions;

		/** [Optional] The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. This is only valid for CSV, JSON, and Google Sheets. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats. */
		maxBadRecords?: number | null;

		/** [Optional] Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. */
		metadataCacheMode?: string | null;

		/** ObjectMetadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the source_uris. If ObjectMetadata is set, source_format should be omitted. Currently SIMPLE is the only supported Object Metadata type. */
		objectMetadata?: string | null;
		parquetOptions?: ParquetOptions;

		/** [Optional] Provide a referencing file with the expected table schema. Enabled for the format: AVRO, PARQUET, ORC. */
		referenceFileSchemaUri?: string | null;
		schema?: TableSchema;

		/** [Required] The data format. For CSV files, specify "CSV". For Google sheets, specify "GOOGLE_SHEETS". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro files, specify "AVRO". For Google Cloud Datastore backups, specify "DATASTORE_BACKUP". [Beta] For Google Cloud Bigtable, specify "BIGTABLE". */
		sourceFormat?: string | null;

		/** [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups, exactly one URI can be specified. Also, the '*' wildcard character is not allowed. */
		sourceUris?: Array<string>;
	}
	export interface ExternalDataConfigurationFormProperties {

		/** Try to detect schema and format options automatically. Any option specified explicitly will be honored. */
		autodetect: FormControl<boolean | null | undefined>,

		/** [Optional] The compression type of the data source. Possible values include GZIP and NONE. The default value is NONE. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats. */
		compression: FormControl<string | null | undefined>,

		/** [Optional, Trusted Tester] Connection for external data source. */
		connectionId: FormControl<string | null | undefined>,

		/** [Optional] Specifies how source URIs are interpreted for constructing the file set to load. By default source URIs are expanded against the underlying storage. Other options include specifying manifest files. Only applicable to object storage systems. */
		fileSetSpecType: FormControl<string | null | undefined>,

		/** [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names Google Cloud Bigtable: This setting is ignored. Google Cloud Datastore backups: This setting is ignored. Avro: This setting is ignored. */
		ignoreUnknownValues: FormControl<boolean | null | undefined>,

		/** [Optional] The maximum number of bad records that BigQuery can ignore when reading data. If the number of bad records exceeds this value, an invalid error is returned in the job result. This is only valid for CSV, JSON, and Google Sheets. The default value is 0, which requires that all records are valid. This setting is ignored for Google Cloud Bigtable, Google Cloud Datastore backups and Avro formats. */
		maxBadRecords: FormControl<number | null | undefined>,

		/** [Optional] Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source. */
		metadataCacheMode: FormControl<string | null | undefined>,

		/** ObjectMetadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the source_uris. If ObjectMetadata is set, source_format should be omitted. Currently SIMPLE is the only supported Object Metadata type. */
		objectMetadata: FormControl<string | null | undefined>,

		/** [Optional] Provide a referencing file with the expected table schema. Enabled for the format: AVRO, PARQUET, ORC. */
		referenceFileSchemaUri: FormControl<string | null | undefined>,

		/** [Required] The data format. For CSV files, specify "CSV". For Google sheets, specify "GOOGLE_SHEETS". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro files, specify "AVRO". For Google Cloud Datastore backups, specify "DATASTORE_BACKUP". [Beta] For Google Cloud Bigtable, specify "BIGTABLE". */
		sourceFormat: FormControl<string | null | undefined>,
	}
	export function CreateExternalDataConfigurationFormGroup() {
		return new FormGroup<ExternalDataConfigurationFormProperties>({
			autodetect: new FormControl<boolean | null | undefined>(undefined),
			compression: new FormControl<string | null | undefined>(undefined),
			connectionId: new FormControl<string | null | undefined>(undefined),
			fileSetSpecType: new FormControl<string | null | undefined>(undefined),
			ignoreUnknownValues: new FormControl<boolean | null | undefined>(undefined),
			maxBadRecords: new FormControl<number | null | undefined>(undefined),
			metadataCacheMode: new FormControl<string | null | undefined>(undefined),
			objectMetadata: new FormControl<string | null | undefined>(undefined),
			referenceFileSchemaUri: new FormControl<string | null | undefined>(undefined),
			sourceFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleSheetsOptions {

		/** [Optional] Range of a sheet to query from. Only used when non-empty. Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20 */
		range?: string | null;

		/** [Optional] The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema. */
		skipLeadingRows?: string | null;
	}
	export interface GoogleSheetsOptionsFormProperties {

		/** [Optional] Range of a sheet to query from. Only used when non-empty. Typical format: sheet_name!top_left_cell_id:bottom_right_cell_id For example: sheet1!A1:B20 */
		range: FormControl<string | null | undefined>,

		/** [Optional] The number of rows at the top of a sheet that BigQuery will skip when reading the data. The default value is 0. This property is useful if you have header rows that should be skipped. When autodetect is on, behavior is the following: * skipLeadingRows unspecified - Autodetect tries to detect headers in the first row. If they are not detected, the row is read as data. Otherwise data is read starting from the second row. * skipLeadingRows is 0 - Instructs autodetect that there are no headers and data should be read starting from the first row. * skipLeadingRows = N > 0 - Autodetect skips N-1 rows and tries to detect headers in row N. If headers are not detected, row N is just skipped. Otherwise row N is used to extract column names for the detected schema. */
		skipLeadingRows: FormControl<string | null | undefined>,
	}
	export function CreateGoogleSheetsOptionsFormGroup() {
		return new FormGroup<GoogleSheetsOptionsFormProperties>({
			range: new FormControl<string | null | undefined>(undefined),
			skipLeadingRows: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HivePartitioningOptions {

		/** [Output-only] For permanent external tables, this field is populated with the hive partition keys in the order they were inferred. The types of the partition keys can be deduced by checking the table schema (which will include the partition keys). Not every API will populate this field in the output. For example, Tables.Get will populate it, but Tables.List will not contain this field. */
		fields?: Array<string>;

		/** [Optional] When set, what mode of hive partitioning to use when reading data. The following modes are supported. (1) AUTO: automatically infer partition key name(s) and type(s). (2) STRINGS: automatically infer partition key name(s). All types are interpreted as strings. (3) CUSTOM: partition key schema is encoded in the source URI prefix. Not all storage formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error. Currently supported types include: AVRO, CSV, JSON, ORC and Parquet. */
		mode?: string | null;

		/** [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. Note that this field should only be true when creating a permanent external table or querying a temporary external table. Hive-partitioned loads with requirePartitionFilter explicitly set to true will fail. */
		requirePartitionFilter?: boolean | null;

		/** [Optional] When hive partition detection is requested, a common prefix for all source uris should be supplied. The prefix must end immediately before the partition key encoding begins. For example, consider files following this data layout. gs://bucket/path_to_table/dt=2019-01-01/country=BR/id=7/file.avro gs://bucket/path_to_table/dt=2018-12-31/country=CA/id=3/file.avro When hive partitioning is requested with either AUTO or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/ (trailing slash does not matter). */
		sourceUriPrefix?: string | null;
	}
	export interface HivePartitioningOptionsFormProperties {

		/** [Optional] When set, what mode of hive partitioning to use when reading data. The following modes are supported. (1) AUTO: automatically infer partition key name(s) and type(s). (2) STRINGS: automatically infer partition key name(s). All types are interpreted as strings. (3) CUSTOM: partition key schema is encoded in the source URI prefix. Not all storage formats support hive partitioning. Requesting hive partitioning on an unsupported format will lead to an error. Currently supported types include: AVRO, CSV, JSON, ORC and Parquet. */
		mode: FormControl<string | null | undefined>,

		/** [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. Note that this field should only be true when creating a permanent external table or querying a temporary external table. Hive-partitioned loads with requirePartitionFilter explicitly set to true will fail. */
		requirePartitionFilter: FormControl<boolean | null | undefined>,

		/** [Optional] When hive partition detection is requested, a common prefix for all source uris should be supplied. The prefix must end immediately before the partition key encoding begins. For example, consider files following this data layout. gs://bucket/path_to_table/dt=2019-01-01/country=BR/id=7/file.avro gs://bucket/path_to_table/dt=2018-12-31/country=CA/id=3/file.avro When hive partitioning is requested with either AUTO or STRINGS detection, the common prefix can be either of gs://bucket/path_to_table or gs://bucket/path_to_table/ (trailing slash does not matter). */
		sourceUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateHivePartitioningOptionsFormGroup() {
		return new FormGroup<HivePartitioningOptionsFormProperties>({
			mode: new FormControl<string | null | undefined>(undefined),
			requirePartitionFilter: new FormControl<boolean | null | undefined>(undefined),
			sourceUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JsonOptions {

		/** [Optional] The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. */
		encoding?: string | null;
	}
	export interface JsonOptionsFormProperties {

		/** [Optional] The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8. */
		encoding: FormControl<string | null | undefined>,
	}
	export function CreateJsonOptionsFormGroup() {
		return new FormGroup<JsonOptionsFormProperties>({
			encoding: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ParquetOptions {

		/** [Optional] Indicates whether to use schema inference specifically for Parquet LIST logical type. */
		enableListInference?: boolean | null;

		/** [Optional] Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. */
		enumAsString?: boolean | null;
	}
	export interface ParquetOptionsFormProperties {

		/** [Optional] Indicates whether to use schema inference specifically for Parquet LIST logical type. */
		enableListInference: FormControl<boolean | null | undefined>,

		/** [Optional] Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default. */
		enumAsString: FormControl<boolean | null | undefined>,
	}
	export function CreateParquetOptionsFormGroup() {
		return new FormGroup<ParquetOptionsFormProperties>({
			enableListInference: new FormControl<boolean | null | undefined>(undefined),
			enumAsString: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TableSchema {

		/** Describes the fields in a table. */
		fields?: Array<TableFieldSchema>;
	}
	export interface TableSchemaFormProperties {
	}
	export function CreateTableSchemaFormGroup() {
		return new FormGroup<TableSchemaFormProperties>({
		});

	}

	export interface TableFieldSchema {

		/** [Optional] The categories attached to this field, used for field-level access control. */
		categories?: TableFieldSchemaCategories;

		/** Optional. Collation specification of the field. It only can be set on string type field. */
		collation?: string | null;

		/** Optional. A SQL expression to specify the default value for this field. It can only be set for top level fields (columns). You can use struct or array expression to specify default value for the entire struct or array. The valid SQL expressions are: - Literals for all data types, including STRUCT and ARRAY. - Following functions: - CURRENT_TIMESTAMP - CURRENT_TIME - CURRENT_DATE - CURRENT_DATETIME - GENERATE_UUID - RAND - SESSION_USER - ST_GEOGPOINT - Struct or array composed with the above allowed functions, for example, [CURRENT_DATE(), DATE '2020-01-01'] */
		defaultValueExpression?: string | null;

		/** [Optional] The field description. The maximum length is 1,024 characters. */
		description?: string | null;

		/** [Optional] Describes the nested schema fields if the type property is set to RECORD. */
		fields?: Array<TableFieldSchema>;

		/** [Optional] Maximum length of values of this field for STRINGS or BYTES. If max_length is not specified, no maximum length constraint is imposed on this field. If type = "STRING", then max_length represents the maximum UTF-8 length of strings in this field. If type = "BYTES", then max_length represents the maximum number of bytes in this field. It is invalid to set this field if type ≠ "STRING" and ≠ "BYTES". */
		maxLength?: string | null;

		/** [Optional] The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE. */
		mode?: string | null;

		/** [Required] The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 300 characters. */
		name?: string | null;
		policyTags?: TableFieldSchemaPolicyTags;

		/** [Optional] Precision (maximum number of total digits in base 10) and scale (maximum number of digits in the fractional part in base 10) constraints for values of this field for NUMERIC or BIGNUMERIC. It is invalid to set precision or scale if type ≠ "NUMERIC" and ≠ "BIGNUMERIC". If precision and scale are not specified, no value range constraint is imposed on this field insofar as values are permitted by the type. Values of this NUMERIC or BIGNUMERIC field must be in this range when: - Precision (P) and scale (S) are specified: [-10P-S + 10-S, 10P-S - 10-S] - Precision (P) is specified but not scale (and thus scale is interpreted to be equal to zero): [-10P + 1, 10P - 1]. Acceptable values for precision and scale if both are specified: - If type = "NUMERIC": 1 ≤ precision - scale ≤ 29 and 0 ≤ scale ≤ 9. - If type = "BIGNUMERIC": 1 ≤ precision - scale ≤ 38 and 0 ≤ scale ≤ 38. Acceptable values for precision if only precision is specified but not scale (and thus scale is interpreted to be equal to zero): - If type = "NUMERIC": 1 ≤ precision ≤ 29. - If type = "BIGNUMERIC": 1 ≤ precision ≤ 38. If scale is specified but not precision, then it is invalid. */
		precision?: string | null;

		/** Optional. The subtype of the RANGE, if the type of this field is RANGE. If the type is RANGE, this field is required. Possible values for the field element type of a RANGE include: - DATE - DATETIME - TIMESTAMP */
		rangeElementType?: TableFieldSchemaRangeElementType;

		/** Optional. Rounding Mode specification of the field. It only can be set on NUMERIC or BIGNUMERIC type fields. */
		roundingMode?: string | null;

		/** [Optional] See documentation for precision. */
		scale?: string | null;

		/** [Required] The field data type. Possible values include STRING, BYTES, INTEGER, INT64 (same as INTEGER), FLOAT, FLOAT64 (same as FLOAT), NUMERIC, BIGNUMERIC, BOOLEAN, BOOL (same as BOOLEAN), TIMESTAMP, DATE, TIME, DATETIME, INTERVAL, RECORD (where RECORD indicates that the field contains a nested schema) or STRUCT (same as RECORD). */
		type?: string | null;
	}
	export interface TableFieldSchemaFormProperties {

		/** Optional. Collation specification of the field. It only can be set on string type field. */
		collation: FormControl<string | null | undefined>,

		/** Optional. A SQL expression to specify the default value for this field. It can only be set for top level fields (columns). You can use struct or array expression to specify default value for the entire struct or array. The valid SQL expressions are: - Literals for all data types, including STRUCT and ARRAY. - Following functions: - CURRENT_TIMESTAMP - CURRENT_TIME - CURRENT_DATE - CURRENT_DATETIME - GENERATE_UUID - RAND - SESSION_USER - ST_GEOGPOINT - Struct or array composed with the above allowed functions, for example, [CURRENT_DATE(), DATE '2020-01-01'] */
		defaultValueExpression: FormControl<string | null | undefined>,

		/** [Optional] The field description. The maximum length is 1,024 characters. */
		description: FormControl<string | null | undefined>,

		/** [Optional] Maximum length of values of this field for STRINGS or BYTES. If max_length is not specified, no maximum length constraint is imposed on this field. If type = "STRING", then max_length represents the maximum UTF-8 length of strings in this field. If type = "BYTES", then max_length represents the maximum number of bytes in this field. It is invalid to set this field if type ≠ "STRING" and ≠ "BYTES". */
		maxLength: FormControl<string | null | undefined>,

		/** [Optional] The field mode. Possible values include NULLABLE, REQUIRED and REPEATED. The default value is NULLABLE. */
		mode: FormControl<string | null | undefined>,

		/** [Required] The field name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 300 characters. */
		name: FormControl<string | null | undefined>,

		/** [Optional] Precision (maximum number of total digits in base 10) and scale (maximum number of digits in the fractional part in base 10) constraints for values of this field for NUMERIC or BIGNUMERIC. It is invalid to set precision or scale if type ≠ "NUMERIC" and ≠ "BIGNUMERIC". If precision and scale are not specified, no value range constraint is imposed on this field insofar as values are permitted by the type. Values of this NUMERIC or BIGNUMERIC field must be in this range when: - Precision (P) and scale (S) are specified: [-10P-S + 10-S, 10P-S - 10-S] - Precision (P) is specified but not scale (and thus scale is interpreted to be equal to zero): [-10P + 1, 10P - 1]. Acceptable values for precision and scale if both are specified: - If type = "NUMERIC": 1 ≤ precision - scale ≤ 29 and 0 ≤ scale ≤ 9. - If type = "BIGNUMERIC": 1 ≤ precision - scale ≤ 38 and 0 ≤ scale ≤ 38. Acceptable values for precision if only precision is specified but not scale (and thus scale is interpreted to be equal to zero): - If type = "NUMERIC": 1 ≤ precision ≤ 29. - If type = "BIGNUMERIC": 1 ≤ precision ≤ 38. If scale is specified but not precision, then it is invalid. */
		precision: FormControl<string | null | undefined>,

		/** Optional. Rounding Mode specification of the field. It only can be set on NUMERIC or BIGNUMERIC type fields. */
		roundingMode: FormControl<string | null | undefined>,

		/** [Optional] See documentation for precision. */
		scale: FormControl<string | null | undefined>,

		/** [Required] The field data type. Possible values include STRING, BYTES, INTEGER, INT64 (same as INTEGER), FLOAT, FLOAT64 (same as FLOAT), NUMERIC, BIGNUMERIC, BOOLEAN, BOOL (same as BOOLEAN), TIMESTAMP, DATE, TIME, DATETIME, INTERVAL, RECORD (where RECORD indicates that the field contains a nested schema) or STRUCT (same as RECORD). */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTableFieldSchemaFormGroup() {
		return new FormGroup<TableFieldSchemaFormProperties>({
			collation: new FormControl<string | null | undefined>(undefined),
			defaultValueExpression: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			maxLength: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			precision: new FormControl<string | null | undefined>(undefined),
			roundingMode: new FormControl<string | null | undefined>(undefined),
			scale: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableFieldSchemaCategories {

		/** A list of category resource names. For example, "projects/1/taxonomies/2/categories/3". At most 5 categories are allowed. */
		names?: Array<string>;
	}
	export interface TableFieldSchemaCategoriesFormProperties {
	}
	export function CreateTableFieldSchemaCategoriesFormGroup() {
		return new FormGroup<TableFieldSchemaCategoriesFormProperties>({
		});

	}

	export interface TableFieldSchemaPolicyTags {

		/** A list of category resource names. For example, "projects/1/location/eu/taxonomies/2/policyTags/3". At most 1 policy tag is allowed. */
		names?: Array<string>;
	}
	export interface TableFieldSchemaPolicyTagsFormProperties {
	}
	export function CreateTableFieldSchemaPolicyTagsFormGroup() {
		return new FormGroup<TableFieldSchemaPolicyTagsFormProperties>({
		});

	}

	export interface TableFieldSchemaRangeElementType {

		/** The field element type of a RANGE */
		type?: string | null;
	}
	export interface TableFieldSchemaRangeElementTypeFormProperties {

		/** The field element type of a RANGE */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTableFieldSchemaRangeElementTypeFormGroup() {
		return new FormGroup<TableFieldSchemaRangeElementTypeFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequest {

		/** Encapsulates settings provided to GetIamPolicy. */
		options?: GetPolicyOptions;
	}

	/** Request message for `GetIamPolicy` method. */
	export interface GetIamPolicyRequestFormProperties {
	}
	export function CreateGetIamPolicyRequestFormGroup() {
		return new FormGroup<GetIamPolicyRequestFormProperties>({
		});

	}


	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptions {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion?: number | null;
	}

	/** Encapsulates settings provided to GetIamPolicy. */
	export interface GetPolicyOptionsFormProperties {

		/** Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		requestedPolicyVersion: FormControl<number | null | undefined>,
	}
	export function CreateGetPolicyOptionsFormGroup() {
		return new FormGroup<GetPolicyOptionsFormProperties>({
			requestedPolicyVersion: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetQueryResultsResponse {

		/** Whether the query result was fetched from the query cache. */
		cacheHit?: boolean | null;

		/** [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. */
		errors?: Array<ErrorProto>;

		/** A hash of this response. */
		etag?: string | null;

		/** Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available. */
		jobComplete?: boolean | null;
		jobReference?: JobReference;

		/** The resource type of the response. */
		kind?: string | null;

		/** [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. */
		numDmlAffectedRows?: string | null;

		/** A token used for paging results. */
		pageToken?: string | null;

		/** An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. Present only when the query completes successfully. */
		rows?: Array<TableRow>;
		schema?: TableSchema;

		/** The total number of bytes processed for this query. */
		totalBytesProcessed?: string | null;

		/** The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully. */
		totalRows?: string | null;
	}
	export interface GetQueryResultsResponseFormProperties {

		/** Whether the query result was fetched from the query cache. */
		cacheHit: FormControl<boolean | null | undefined>,

		/** A hash of this response. */
		etag: FormControl<string | null | undefined>,

		/** Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available. */
		jobComplete: FormControl<boolean | null | undefined>,

		/** The resource type of the response. */
		kind: FormControl<string | null | undefined>,

		/** [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. */
		numDmlAffectedRows: FormControl<string | null | undefined>,

		/** A token used for paging results. */
		pageToken: FormControl<string | null | undefined>,

		/** The total number of bytes processed for this query. */
		totalBytesProcessed: FormControl<string | null | undefined>,

		/** The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. Present only when the query completes successfully. */
		totalRows: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryResultsResponseFormGroup() {
		return new FormGroup<GetQueryResultsResponseFormProperties>({
			cacheHit: new FormControl<boolean | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			jobComplete: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			numDmlAffectedRows: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			totalBytesProcessed: new FormControl<string | null | undefined>(undefined),
			totalRows: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobReference {

		/** [Required] The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters. */
		jobId?: string | null;

		/** The geographic location of the job. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location. */
		location?: string | null;

		/** [Required] The ID of the project containing this job. */
		projectId?: string | null;
	}
	export interface JobReferenceFormProperties {

		/** [Required] The ID of the job. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-). The maximum length is 1,024 characters. */
		jobId: FormControl<string | null | undefined>,

		/** The geographic location of the job. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location. */
		location: FormControl<string | null | undefined>,

		/** [Required] The ID of the project containing this job. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateJobReferenceFormGroup() {
		return new FormGroup<JobReferenceFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableRow {

		/** Represents a single row in the result set, consisting of one or more fields. */
		f?: Array<TableCell>;
	}
	export interface TableRowFormProperties {
	}
	export function CreateTableRowFormGroup() {
		return new FormGroup<TableRowFormProperties>({
		});

	}

	export interface TableCell {
		v?: any;
	}
	export interface TableCellFormProperties {
		v: FormControl<any | null | undefined>,
	}
	export function CreateTableCellFormGroup() {
		return new FormGroup<TableCellFormProperties>({
			v: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface GetServiceAccountResponse {

		/** The service account email address. */
		email?: string | null;

		/** The resource type of the response. */
		kind?: string | null;
	}
	export interface GetServiceAccountResponseFormProperties {

		/** The service account email address. */
		email: FormControl<string | null | undefined>,

		/** The resource type of the response. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceAccountResponseFormGroup() {
		return new FormGroup<GetServiceAccountResponseFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Global explanations containing the top most important features after training. */
	export interface GlobalExplanation {

		/** Class label for this set of global explanations. Will be empty/null for binary logistic and linear regression models. Sorted alphabetically in descending order. */
		classLabel?: string | null;

		/** A list of the top global explanations. Sorted by absolute value of attribution in descending order. */
		explanations?: Array<Explanation>;
	}

	/** Global explanations containing the top most important features after training. */
	export interface GlobalExplanationFormProperties {

		/** Class label for this set of global explanations. Will be empty/null for binary logistic and linear regression models. Sorted alphabetically in descending order. */
		classLabel: FormControl<string | null | undefined>,
	}
	export function CreateGlobalExplanationFormGroup() {
		return new FormGroup<GlobalExplanationFormProperties>({
			classLabel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Hyperparameter search spaces. These should be a subset of training_options. */
	export interface HparamSearchSpaces {

		/** Search space for string and enum. */
		activationFn?: StringHparamSearchSpace;

		/** Search space for an int hyperparameter. */
		batchSize?: IntHparamSearchSpace;

		/** Search space for string and enum. */
		boosterType?: StringHparamSearchSpace;

		/** Search space for a double hyperparameter. */
		colsampleBylevel?: DoubleHparamSearchSpace;

		/** Search space for a double hyperparameter. */
		colsampleBynode?: DoubleHparamSearchSpace;

		/** Search space for a double hyperparameter. */
		colsampleBytree?: DoubleHparamSearchSpace;

		/** Search space for string and enum. */
		dartNormalizeType?: StringHparamSearchSpace;

		/** Search space for a double hyperparameter. */
		dropout?: DoubleHparamSearchSpace;

		/** Search space for int array. */
		hiddenUnits?: IntArrayHparamSearchSpace;

		/** Search space for a double hyperparameter. */
		l1Reg?: DoubleHparamSearchSpace;

		/** Search space for a double hyperparameter. */
		l2Reg?: DoubleHparamSearchSpace;

		/** Search space for a double hyperparameter. */
		learnRate?: DoubleHparamSearchSpace;

		/** Search space for an int hyperparameter. */
		maxTreeDepth?: IntHparamSearchSpace;

		/** Search space for a double hyperparameter. */
		minSplitLoss?: DoubleHparamSearchSpace;

		/** Search space for an int hyperparameter. */
		minTreeChildWeight?: IntHparamSearchSpace;

		/** Search space for an int hyperparameter. */
		numClusters?: IntHparamSearchSpace;

		/** Search space for an int hyperparameter. */
		numFactors?: IntHparamSearchSpace;

		/** Search space for an int hyperparameter. */
		numParallelTree?: IntHparamSearchSpace;

		/** Search space for string and enum. */
		optimizer?: StringHparamSearchSpace;

		/** Search space for a double hyperparameter. */
		subsample?: DoubleHparamSearchSpace;

		/** Search space for string and enum. */
		treeMethod?: StringHparamSearchSpace;

		/** Search space for a double hyperparameter. */
		walsAlpha?: DoubleHparamSearchSpace;
	}

	/** Hyperparameter search spaces. These should be a subset of training_options. */
	export interface HparamSearchSpacesFormProperties {
	}
	export function CreateHparamSearchSpacesFormGroup() {
		return new FormGroup<HparamSearchSpacesFormProperties>({
		});

	}


	/** Search space for string and enum. */
	export interface StringHparamSearchSpace {

		/** Canididates for the string or enum parameter in lower case. */
		candidates?: Array<string>;
	}

	/** Search space for string and enum. */
	export interface StringHparamSearchSpaceFormProperties {
	}
	export function CreateStringHparamSearchSpaceFormGroup() {
		return new FormGroup<StringHparamSearchSpaceFormProperties>({
		});

	}


	/** Search space for an int hyperparameter. */
	export interface IntHparamSearchSpace {

		/** Discrete candidates of an int hyperparameter. */
		candidates?: IntCandidates;

		/** Range of an int hyperparameter. */
		range?: IntRange;
	}

	/** Search space for an int hyperparameter. */
	export interface IntHparamSearchSpaceFormProperties {
	}
	export function CreateIntHparamSearchSpaceFormGroup() {
		return new FormGroup<IntHparamSearchSpaceFormProperties>({
		});

	}


	/** Discrete candidates of an int hyperparameter. */
	export interface IntCandidates {

		/** Candidates for the int parameter in increasing order. */
		candidates?: Array<string>;
	}

	/** Discrete candidates of an int hyperparameter. */
	export interface IntCandidatesFormProperties {
	}
	export function CreateIntCandidatesFormGroup() {
		return new FormGroup<IntCandidatesFormProperties>({
		});

	}


	/** Range of an int hyperparameter. */
	export interface IntRange {

		/** Max value of the int parameter. */
		max?: string | null;

		/** Min value of the int parameter. */
		min?: string | null;
	}

	/** Range of an int hyperparameter. */
	export interface IntRangeFormProperties {

		/** Max value of the int parameter. */
		max: FormControl<string | null | undefined>,

		/** Min value of the int parameter. */
		min: FormControl<string | null | undefined>,
	}
	export function CreateIntRangeFormGroup() {
		return new FormGroup<IntRangeFormProperties>({
			max: new FormControl<string | null | undefined>(undefined),
			min: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Search space for int array. */
	export interface IntArrayHparamSearchSpace {

		/** Candidates for the int array parameter. */
		candidates?: Array<IntArray>;
	}

	/** Search space for int array. */
	export interface IntArrayHparamSearchSpaceFormProperties {
	}
	export function CreateIntArrayHparamSearchSpaceFormGroup() {
		return new FormGroup<IntArrayHparamSearchSpaceFormProperties>({
		});

	}


	/** An array of int. */
	export interface IntArray {

		/** Elements in the int array. */
		elements?: Array<string>;
	}

	/** An array of int. */
	export interface IntArrayFormProperties {
	}
	export function CreateIntArrayFormGroup() {
		return new FormGroup<IntArrayFormProperties>({
		});

	}


	/** Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models. */
	export interface HparamTuningTrial {

		/** Ending time of the trial. */
		endTimeMs?: string | null;

		/** Error message for FAILED and INFEASIBLE trial. */
		errorMessage?: string | null;

		/** Loss computed on the eval data at the end of trial. */
		evalLoss?: number | null;

		/** Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models. */
		evaluationMetrics?: EvaluationMetrics;

		/** Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models. */
		hparamTuningEvaluationMetrics?: EvaluationMetrics;

		/** Options used in model training. */
		hparams?: TrainingOptions;

		/** Starting time of the trial. */
		startTimeMs?: string | null;

		/** The status of the trial. */
		status?: HparamTuningTrialStatus | null;

		/** Loss computed on the training data at the end of trial. */
		trainingLoss?: number | null;

		/** 1-based index of the trial. */
		trialId?: string | null;
	}

	/** Training info of a trial in [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models. */
	export interface HparamTuningTrialFormProperties {

		/** Ending time of the trial. */
		endTimeMs: FormControl<string | null | undefined>,

		/** Error message for FAILED and INFEASIBLE trial. */
		errorMessage: FormControl<string | null | undefined>,

		/** Loss computed on the eval data at the end of trial. */
		evalLoss: FormControl<number | null | undefined>,

		/** Starting time of the trial. */
		startTimeMs: FormControl<string | null | undefined>,

		/** The status of the trial. */
		status: FormControl<HparamTuningTrialStatus | null | undefined>,

		/** Loss computed on the training data at the end of trial. */
		trainingLoss: FormControl<number | null | undefined>,

		/** 1-based index of the trial. */
		trialId: FormControl<string | null | undefined>,
	}
	export function CreateHparamTuningTrialFormGroup() {
		return new FormGroup<HparamTuningTrialFormProperties>({
			endTimeMs: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			evalLoss: new FormControl<number | null | undefined>(undefined),
			startTimeMs: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<HparamTuningTrialStatus | null | undefined>(undefined),
			trainingLoss: new FormControl<number | null | undefined>(undefined),
			trialId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options used in model training. */
	export interface TrainingOptions {

		/** Activation function of the neural nets. */
		activationFn?: string | null;

		/** If true, detect step changes and make data adjustment in the input time series. */
		adjustStepChanges?: boolean | null;

		/** Whether to use approximate feature contribution method in XGBoost model explanation for global explain. */
		approxGlobalFeatureContrib?: boolean | null;

		/** Whether to enable auto ARIMA or not. */
		autoArima?: boolean | null;

		/** The max value of the sum of non-seasonal p and q. */
		autoArimaMaxOrder?: string | null;

		/** The min value of the sum of non-seasonal p and q. */
		autoArimaMinOrder?: string | null;

		/** Whether to calculate class weights automatically based on the popularity of each label. */
		autoClassWeights?: boolean | null;

		/** Batch size for dnn models. */
		batchSize?: string | null;

		/** Booster type for boosted tree models. */
		boosterType?: TrainingOptionsBoosterType | null;

		/** Budget in hours for AutoML training. */
		budgetHours?: number | null;

		/** Whether or not p-value test should be computed for this model. Only available for linear and logistic regression models. */
		calculatePValues?: boolean | null;

		/** Categorical feature encoding method. */
		categoryEncodingMethod?: TrainingOptionsCategoryEncodingMethod | null;

		/** If true, clean spikes and dips in the input time series. */
		cleanSpikesAndDips?: boolean | null;

		/** Enums for color space, used for processing images in Object Table. See more details at https://www.tensorflow.org/io/tutorials/colorspace. */
		colorSpace?: TrainingOptionsColorSpace | null;

		/** Subsample ratio of columns for each level for boosted tree models. */
		colsampleBylevel?: number | null;

		/** Subsample ratio of columns for each node(split) for boosted tree models. */
		colsampleBynode?: number | null;

		/** Subsample ratio of columns when constructing each tree for boosted tree models. */
		colsampleBytree?: number | null;

		/** Type of normalization algorithm for boosted tree models using dart booster. */
		dartNormalizeType?: TrainingOptionsDartNormalizeType | null;

		/** The data frequency of a time series. */
		dataFrequency?: TrainingOptionsDataFrequency | null;

		/** The column to split data with. This column won't be used as a feature. 1. When data_split_method is CUSTOM, the corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding column are used as training data, and the rest are eval data. It respects the order in Orderable data types: https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data-type-properties */
		dataSplitColumn?: string | null;

		/** The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format should be double. Accurate to two decimal places. Default value is 0.2. */
		dataSplitEvalFraction?: number | null;

		/** The data split type for training and evaluation, e.g. RANDOM. */
		dataSplitMethod?: TrainingOptionsDataSplitMethod | null;

		/** If true, perform decompose time series and save the results. */
		decomposeTimeSeries?: boolean | null;

		/** Distance type for clustering models. */
		distanceType?: TrainingOptionsDistanceType | null;

		/** Dropout probability for dnn models. */
		dropout?: number | null;

		/** Whether to stop early when the loss doesn't improve significantly any more (compared to min_relative_progress). Used only for iterative training algorithms. */
		earlyStop?: boolean | null;

		/** If true, enable global explanation during training. */
		enableGlobalExplain?: boolean | null;

		/** Feedback type that specifies which algorithm to run for matrix factorization. */
		feedbackType?: TrainingOptionsFeedbackType | null;

		/** Whether the model should include intercept during model training. */
		fitIntercept?: boolean | null;

		/** Hidden units for dnn models. */
		hiddenUnits?: Array<string>;

		/** The geographical region based on which the holidays are considered in time series modeling. If a valid value is specified, then holiday effects modeling is enabled. */
		holidayRegion?: TrainingOptionsHolidayRegion | null;

		/** A list of geographical regions that are used for time series modeling. */
		holidayRegions?: Array<TrainingOptionsHolidayRegion>;

		/** The number of periods ahead that need to be forecasted. */
		horizon?: string | null;

		/** The target evaluation metrics to optimize the hyperparameters for. */
		hparamTuningObjectives?: Array<string>;

		/** Include drift when fitting an ARIMA model. */
		includeDrift?: boolean | null;

		/** Specifies the initial learning rate for the line search learn rate strategy. */
		initialLearnRate?: number | null;

		/** Name of input label columns in training data. */
		inputLabelColumns?: Array<string>;

		/** Name of the instance weight column for training data. This column isn't be used as a feature. */
		instanceWeightColumn?: string | null;

		/** Number of integral steps for the integrated gradients explain method. */
		integratedGradientsNumSteps?: string | null;

		/** Item column specified for matrix factorization models. */
		itemColumn?: string | null;

		/** The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM. */
		kmeansInitializationColumn?: string | null;

		/** The method used to initialize the centroids for kmeans algorithm. */
		kmeansInitializationMethod?: TrainingOptionsKmeansInitializationMethod | null;

		/** L1 regularization coefficient to activations. */
		l1RegActivation?: number | null;

		/** L1 regularization coefficient. */
		l1Regularization?: number | null;

		/** L2 regularization coefficient. */
		l2Regularization?: number | null;

		/** Weights associated with each label class, for rebalancing the training data. Only applicable for classification models. */
		labelClassWeights?: {[id: string]: number };

		/** Learning rate in training. Used only for iterative training algorithms. */
		learnRate?: number | null;

		/** The strategy to determine learn rate for the current iteration. */
		learnRateStrategy?: TrainingOptionsLearnRateStrategy | null;

		/** Type of loss function used during training run. */
		lossType?: TrainingOptionsLossType | null;

		/** The maximum number of iterations in training. Used only for iterative training algorithms. */
		maxIterations?: string | null;

		/** Maximum number of trials to run in parallel. */
		maxParallelTrials?: string | null;

		/** The maximum number of time points in a time series that can be used in modeling the trend component of the time series. Don't use this option with the `timeSeriesLengthFraction` or `minTimeSeriesLength` options. */
		maxTimeSeriesLength?: string | null;

		/** Maximum depth of a tree for boosted tree models. */
		maxTreeDepth?: string | null;

		/** When early_stop is true, stops training when accuracy improvement is less than 'min_relative_progress'. Used only for iterative training algorithms. */
		minRelativeProgress?: number | null;

		/** Minimum split loss for boosted tree models. */
		minSplitLoss?: number | null;

		/** The minimum number of time points in a time series that are used in modeling the trend component of the time series. If you use this option you must also set the `timeSeriesLengthFraction` option. This training option ensures that enough time points are available when you use `timeSeriesLengthFraction` in trend modeling. This is particularly important when forecasting multiple time series in a single query using `timeSeriesIdColumn`. If the total number of time points is less than the `minTimeSeriesLength` value, then the query uses all available time points. */
		minTimeSeriesLength?: string | null;

		/** Minimum sum of instance weight needed in a child for boosted tree models. */
		minTreeChildWeight?: string | null;

		/** The model registry. */
		modelRegistry?: TrainingOptionsModelRegistry | null;

		/** Google Cloud Storage URI from which the model was imported. Only applicable for imported models. */
		modelUri?: string | null;

		/** Arima order, can be used for both non-seasonal and seasonal parts. */
		nonSeasonalOrder?: ArimaOrder;

		/** Number of clusters for clustering models. */
		numClusters?: string | null;

		/** Num factors specified for matrix factorization models. */
		numFactors?: string | null;

		/** Number of parallel trees constructed during each iteration for boosted tree models. */
		numParallelTree?: string | null;

		/** Number of principal components to keep in the PCA model. Must be <= the number of features. */
		numPrincipalComponents?: string | null;

		/** Number of trials to run this hyperparameter tuning job. */
		numTrials?: string | null;

		/** Optimization strategy for training linear regression models. */
		optimizationStrategy?: TrainingOptionsOptimizationStrategy | null;

		/** Optimizer used for training the neural nets. */
		optimizer?: string | null;

		/** The minimum ratio of cumulative explained variance that needs to be given by the PCA model. */
		pcaExplainedVarianceRatio?: number | null;

		/** The solver for PCA. */
		pcaSolver?: TrainingOptionsPcaSolver | null;

		/** Number of paths for the sampled Shapley explain method. */
		sampledShapleyNumPaths?: string | null;

		/** If true, scale the feature values by dividing the feature standard deviation. Currently only apply to PCA. */
		scaleFeatures?: boolean | null;

		/** Whether to standardize numerical features. Default to true. */
		standardizeFeatures?: boolean | null;

		/** Subsample fraction of the training data to grow tree to prevent overfitting for boosted tree models. */
		subsample?: number | null;

		/** Based on the selected TF version, the corresponding docker image is used to train external models. */
		tfVersion?: string | null;

		/** Column to be designated as time series data for ARIMA model. */
		timeSeriesDataColumn?: string | null;

		/** The time series id column that was used during ARIMA model training. */
		timeSeriesIdColumn?: string | null;

		/** The time series id columns that were used during ARIMA model training. */
		timeSeriesIdColumns?: Array<string>;

		/** The fraction of the interpolated length of the time series that's used to model the time series trend component. All of the time points of the time series are used to model the non-trend component. This training option accelerates modeling training without sacrificing much forecasting accuracy. You can use this option with `minTimeSeriesLength` but not with `maxTimeSeriesLength`. */
		timeSeriesLengthFraction?: number | null;

		/** Column to be designated as time series timestamp for ARIMA model. */
		timeSeriesTimestampColumn?: string | null;

		/** Tree construction algorithm for boosted tree models. */
		treeMethod?: TrainingOptionsTreeMethod | null;

		/** Smoothing window size for the trend component. When a positive value is specified, a center moving average smoothing is applied on the history trend. When the smoothing window is out of the boundary at the beginning or the end of the trend, the first element or the last element is padded to fill the smoothing window before the average is applied. */
		trendSmoothingWindowSize?: string | null;

		/** User column specified for matrix factorization models. */
		userColumn?: string | null;

		/** The version aliases to apply in Vertex AI model registry. Always overwrite if the version aliases exists in a existing model. */
		vertexAiModelVersionAliases?: Array<string>;

		/** Hyperparameter for matrix factoration when implicit feedback type is specified. */
		walsAlpha?: number | null;

		/** Whether to train a model from the last checkpoint. */
		warmStart?: boolean | null;

		/** User-selected XGBoost versions for training of XGBoost models. */
		xgboostVersion?: string | null;
	}

	/** Options used in model training. */
	export interface TrainingOptionsFormProperties {

		/** Activation function of the neural nets. */
		activationFn: FormControl<string | null | undefined>,

		/** If true, detect step changes and make data adjustment in the input time series. */
		adjustStepChanges: FormControl<boolean | null | undefined>,

		/** Whether to use approximate feature contribution method in XGBoost model explanation for global explain. */
		approxGlobalFeatureContrib: FormControl<boolean | null | undefined>,

		/** Whether to enable auto ARIMA or not. */
		autoArima: FormControl<boolean | null | undefined>,

		/** The max value of the sum of non-seasonal p and q. */
		autoArimaMaxOrder: FormControl<string | null | undefined>,

		/** The min value of the sum of non-seasonal p and q. */
		autoArimaMinOrder: FormControl<string | null | undefined>,

		/** Whether to calculate class weights automatically based on the popularity of each label. */
		autoClassWeights: FormControl<boolean | null | undefined>,

		/** Batch size for dnn models. */
		batchSize: FormControl<string | null | undefined>,

		/** Booster type for boosted tree models. */
		boosterType: FormControl<TrainingOptionsBoosterType | null | undefined>,

		/** Budget in hours for AutoML training. */
		budgetHours: FormControl<number | null | undefined>,

		/** Whether or not p-value test should be computed for this model. Only available for linear and logistic regression models. */
		calculatePValues: FormControl<boolean | null | undefined>,

		/** Categorical feature encoding method. */
		categoryEncodingMethod: FormControl<TrainingOptionsCategoryEncodingMethod | null | undefined>,

		/** If true, clean spikes and dips in the input time series. */
		cleanSpikesAndDips: FormControl<boolean | null | undefined>,

		/** Enums for color space, used for processing images in Object Table. See more details at https://www.tensorflow.org/io/tutorials/colorspace. */
		colorSpace: FormControl<TrainingOptionsColorSpace | null | undefined>,

		/** Subsample ratio of columns for each level for boosted tree models. */
		colsampleBylevel: FormControl<number | null | undefined>,

		/** Subsample ratio of columns for each node(split) for boosted tree models. */
		colsampleBynode: FormControl<number | null | undefined>,

		/** Subsample ratio of columns when constructing each tree for boosted tree models. */
		colsampleBytree: FormControl<number | null | undefined>,

		/** Type of normalization algorithm for boosted tree models using dart booster. */
		dartNormalizeType: FormControl<TrainingOptionsDartNormalizeType | null | undefined>,

		/** The data frequency of a time series. */
		dataFrequency: FormControl<TrainingOptionsDataFrequency | null | undefined>,

		/** The column to split data with. This column won't be used as a feature. 1. When data_split_method is CUSTOM, the corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding column are used as training data, and the rest are eval data. It respects the order in Orderable data types: https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data-type-properties */
		dataSplitColumn: FormControl<string | null | undefined>,

		/** The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format should be double. Accurate to two decimal places. Default value is 0.2. */
		dataSplitEvalFraction: FormControl<number | null | undefined>,

		/** The data split type for training and evaluation, e.g. RANDOM. */
		dataSplitMethod: FormControl<TrainingOptionsDataSplitMethod | null | undefined>,

		/** If true, perform decompose time series and save the results. */
		decomposeTimeSeries: FormControl<boolean | null | undefined>,

		/** Distance type for clustering models. */
		distanceType: FormControl<TrainingOptionsDistanceType | null | undefined>,

		/** Dropout probability for dnn models. */
		dropout: FormControl<number | null | undefined>,

		/** Whether to stop early when the loss doesn't improve significantly any more (compared to min_relative_progress). Used only for iterative training algorithms. */
		earlyStop: FormControl<boolean | null | undefined>,

		/** If true, enable global explanation during training. */
		enableGlobalExplain: FormControl<boolean | null | undefined>,

		/** Feedback type that specifies which algorithm to run for matrix factorization. */
		feedbackType: FormControl<TrainingOptionsFeedbackType | null | undefined>,

		/** Whether the model should include intercept during model training. */
		fitIntercept: FormControl<boolean | null | undefined>,

		/** The geographical region based on which the holidays are considered in time series modeling. If a valid value is specified, then holiday effects modeling is enabled. */
		holidayRegion: FormControl<TrainingOptionsHolidayRegion | null | undefined>,

		/** The number of periods ahead that need to be forecasted. */
		horizon: FormControl<string | null | undefined>,

		/** Include drift when fitting an ARIMA model. */
		includeDrift: FormControl<boolean | null | undefined>,

		/** Specifies the initial learning rate for the line search learn rate strategy. */
		initialLearnRate: FormControl<number | null | undefined>,

		/** Name of the instance weight column for training data. This column isn't be used as a feature. */
		instanceWeightColumn: FormControl<string | null | undefined>,

		/** Number of integral steps for the integrated gradients explain method. */
		integratedGradientsNumSteps: FormControl<string | null | undefined>,

		/** Item column specified for matrix factorization models. */
		itemColumn: FormControl<string | null | undefined>,

		/** The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM. */
		kmeansInitializationColumn: FormControl<string | null | undefined>,

		/** The method used to initialize the centroids for kmeans algorithm. */
		kmeansInitializationMethod: FormControl<TrainingOptionsKmeansInitializationMethod | null | undefined>,

		/** L1 regularization coefficient to activations. */
		l1RegActivation: FormControl<number | null | undefined>,

		/** L1 regularization coefficient. */
		l1Regularization: FormControl<number | null | undefined>,

		/** L2 regularization coefficient. */
		l2Regularization: FormControl<number | null | undefined>,

		/** Weights associated with each label class, for rebalancing the training data. Only applicable for classification models. */
		labelClassWeights: FormControl<{[id: string]: number } | null | undefined>,

		/** Learning rate in training. Used only for iterative training algorithms. */
		learnRate: FormControl<number | null | undefined>,

		/** The strategy to determine learn rate for the current iteration. */
		learnRateStrategy: FormControl<TrainingOptionsLearnRateStrategy | null | undefined>,

		/** Type of loss function used during training run. */
		lossType: FormControl<TrainingOptionsLossType | null | undefined>,

		/** The maximum number of iterations in training. Used only for iterative training algorithms. */
		maxIterations: FormControl<string | null | undefined>,

		/** Maximum number of trials to run in parallel. */
		maxParallelTrials: FormControl<string | null | undefined>,

		/** The maximum number of time points in a time series that can be used in modeling the trend component of the time series. Don't use this option with the `timeSeriesLengthFraction` or `minTimeSeriesLength` options. */
		maxTimeSeriesLength: FormControl<string | null | undefined>,

		/** Maximum depth of a tree for boosted tree models. */
		maxTreeDepth: FormControl<string | null | undefined>,

		/** When early_stop is true, stops training when accuracy improvement is less than 'min_relative_progress'. Used only for iterative training algorithms. */
		minRelativeProgress: FormControl<number | null | undefined>,

		/** Minimum split loss for boosted tree models. */
		minSplitLoss: FormControl<number | null | undefined>,

		/** The minimum number of time points in a time series that are used in modeling the trend component of the time series. If you use this option you must also set the `timeSeriesLengthFraction` option. This training option ensures that enough time points are available when you use `timeSeriesLengthFraction` in trend modeling. This is particularly important when forecasting multiple time series in a single query using `timeSeriesIdColumn`. If the total number of time points is less than the `minTimeSeriesLength` value, then the query uses all available time points. */
		minTimeSeriesLength: FormControl<string | null | undefined>,

		/** Minimum sum of instance weight needed in a child for boosted tree models. */
		minTreeChildWeight: FormControl<string | null | undefined>,

		/** The model registry. */
		modelRegistry: FormControl<TrainingOptionsModelRegistry | null | undefined>,

		/** Google Cloud Storage URI from which the model was imported. Only applicable for imported models. */
		modelUri: FormControl<string | null | undefined>,

		/** Number of clusters for clustering models. */
		numClusters: FormControl<string | null | undefined>,

		/** Num factors specified for matrix factorization models. */
		numFactors: FormControl<string | null | undefined>,

		/** Number of parallel trees constructed during each iteration for boosted tree models. */
		numParallelTree: FormControl<string | null | undefined>,

		/** Number of principal components to keep in the PCA model. Must be <= the number of features. */
		numPrincipalComponents: FormControl<string | null | undefined>,

		/** Number of trials to run this hyperparameter tuning job. */
		numTrials: FormControl<string | null | undefined>,

		/** Optimization strategy for training linear regression models. */
		optimizationStrategy: FormControl<TrainingOptionsOptimizationStrategy | null | undefined>,

		/** Optimizer used for training the neural nets. */
		optimizer: FormControl<string | null | undefined>,

		/** The minimum ratio of cumulative explained variance that needs to be given by the PCA model. */
		pcaExplainedVarianceRatio: FormControl<number | null | undefined>,

		/** The solver for PCA. */
		pcaSolver: FormControl<TrainingOptionsPcaSolver | null | undefined>,

		/** Number of paths for the sampled Shapley explain method. */
		sampledShapleyNumPaths: FormControl<string | null | undefined>,

		/** If true, scale the feature values by dividing the feature standard deviation. Currently only apply to PCA. */
		scaleFeatures: FormControl<boolean | null | undefined>,

		/** Whether to standardize numerical features. Default to true. */
		standardizeFeatures: FormControl<boolean | null | undefined>,

		/** Subsample fraction of the training data to grow tree to prevent overfitting for boosted tree models. */
		subsample: FormControl<number | null | undefined>,

		/** Based on the selected TF version, the corresponding docker image is used to train external models. */
		tfVersion: FormControl<string | null | undefined>,

		/** Column to be designated as time series data for ARIMA model. */
		timeSeriesDataColumn: FormControl<string | null | undefined>,

		/** The time series id column that was used during ARIMA model training. */
		timeSeriesIdColumn: FormControl<string | null | undefined>,

		/** The fraction of the interpolated length of the time series that's used to model the time series trend component. All of the time points of the time series are used to model the non-trend component. This training option accelerates modeling training without sacrificing much forecasting accuracy. You can use this option with `minTimeSeriesLength` but not with `maxTimeSeriesLength`. */
		timeSeriesLengthFraction: FormControl<number | null | undefined>,

		/** Column to be designated as time series timestamp for ARIMA model. */
		timeSeriesTimestampColumn: FormControl<string | null | undefined>,

		/** Tree construction algorithm for boosted tree models. */
		treeMethod: FormControl<TrainingOptionsTreeMethod | null | undefined>,

		/** Smoothing window size for the trend component. When a positive value is specified, a center moving average smoothing is applied on the history trend. When the smoothing window is out of the boundary at the beginning or the end of the trend, the first element or the last element is padded to fill the smoothing window before the average is applied. */
		trendSmoothingWindowSize: FormControl<string | null | undefined>,

		/** User column specified for matrix factorization models. */
		userColumn: FormControl<string | null | undefined>,

		/** Hyperparameter for matrix factoration when implicit feedback type is specified. */
		walsAlpha: FormControl<number | null | undefined>,

		/** Whether to train a model from the last checkpoint. */
		warmStart: FormControl<boolean | null | undefined>,

		/** User-selected XGBoost versions for training of XGBoost models. */
		xgboostVersion: FormControl<string | null | undefined>,
	}
	export function CreateTrainingOptionsFormGroup() {
		return new FormGroup<TrainingOptionsFormProperties>({
			activationFn: new FormControl<string | null | undefined>(undefined),
			adjustStepChanges: new FormControl<boolean | null | undefined>(undefined),
			approxGlobalFeatureContrib: new FormControl<boolean | null | undefined>(undefined),
			autoArima: new FormControl<boolean | null | undefined>(undefined),
			autoArimaMaxOrder: new FormControl<string | null | undefined>(undefined),
			autoArimaMinOrder: new FormControl<string | null | undefined>(undefined),
			autoClassWeights: new FormControl<boolean | null | undefined>(undefined),
			batchSize: new FormControl<string | null | undefined>(undefined),
			boosterType: new FormControl<TrainingOptionsBoosterType | null | undefined>(undefined),
			budgetHours: new FormControl<number | null | undefined>(undefined),
			calculatePValues: new FormControl<boolean | null | undefined>(undefined),
			categoryEncodingMethod: new FormControl<TrainingOptionsCategoryEncodingMethod | null | undefined>(undefined),
			cleanSpikesAndDips: new FormControl<boolean | null | undefined>(undefined),
			colorSpace: new FormControl<TrainingOptionsColorSpace | null | undefined>(undefined),
			colsampleBylevel: new FormControl<number | null | undefined>(undefined),
			colsampleBynode: new FormControl<number | null | undefined>(undefined),
			colsampleBytree: new FormControl<number | null | undefined>(undefined),
			dartNormalizeType: new FormControl<TrainingOptionsDartNormalizeType | null | undefined>(undefined),
			dataFrequency: new FormControl<TrainingOptionsDataFrequency | null | undefined>(undefined),
			dataSplitColumn: new FormControl<string | null | undefined>(undefined),
			dataSplitEvalFraction: new FormControl<number | null | undefined>(undefined),
			dataSplitMethod: new FormControl<TrainingOptionsDataSplitMethod | null | undefined>(undefined),
			decomposeTimeSeries: new FormControl<boolean | null | undefined>(undefined),
			distanceType: new FormControl<TrainingOptionsDistanceType | null | undefined>(undefined),
			dropout: new FormControl<number | null | undefined>(undefined),
			earlyStop: new FormControl<boolean | null | undefined>(undefined),
			enableGlobalExplain: new FormControl<boolean | null | undefined>(undefined),
			feedbackType: new FormControl<TrainingOptionsFeedbackType | null | undefined>(undefined),
			fitIntercept: new FormControl<boolean | null | undefined>(undefined),
			holidayRegion: new FormControl<TrainingOptionsHolidayRegion | null | undefined>(undefined),
			horizon: new FormControl<string | null | undefined>(undefined),
			includeDrift: new FormControl<boolean | null | undefined>(undefined),
			initialLearnRate: new FormControl<number | null | undefined>(undefined),
			instanceWeightColumn: new FormControl<string | null | undefined>(undefined),
			integratedGradientsNumSteps: new FormControl<string | null | undefined>(undefined),
			itemColumn: new FormControl<string | null | undefined>(undefined),
			kmeansInitializationColumn: new FormControl<string | null | undefined>(undefined),
			kmeansInitializationMethod: new FormControl<TrainingOptionsKmeansInitializationMethod | null | undefined>(undefined),
			l1RegActivation: new FormControl<number | null | undefined>(undefined),
			l1Regularization: new FormControl<number | null | undefined>(undefined),
			l2Regularization: new FormControl<number | null | undefined>(undefined),
			labelClassWeights: new FormControl<{[id: string]: number } | null | undefined>(undefined),
			learnRate: new FormControl<number | null | undefined>(undefined),
			learnRateStrategy: new FormControl<TrainingOptionsLearnRateStrategy | null | undefined>(undefined),
			lossType: new FormControl<TrainingOptionsLossType | null | undefined>(undefined),
			maxIterations: new FormControl<string | null | undefined>(undefined),
			maxParallelTrials: new FormControl<string | null | undefined>(undefined),
			maxTimeSeriesLength: new FormControl<string | null | undefined>(undefined),
			maxTreeDepth: new FormControl<string | null | undefined>(undefined),
			minRelativeProgress: new FormControl<number | null | undefined>(undefined),
			minSplitLoss: new FormControl<number | null | undefined>(undefined),
			minTimeSeriesLength: new FormControl<string | null | undefined>(undefined),
			minTreeChildWeight: new FormControl<string | null | undefined>(undefined),
			modelRegistry: new FormControl<TrainingOptionsModelRegistry | null | undefined>(undefined),
			modelUri: new FormControl<string | null | undefined>(undefined),
			numClusters: new FormControl<string | null | undefined>(undefined),
			numFactors: new FormControl<string | null | undefined>(undefined),
			numParallelTree: new FormControl<string | null | undefined>(undefined),
			numPrincipalComponents: new FormControl<string | null | undefined>(undefined),
			numTrials: new FormControl<string | null | undefined>(undefined),
			optimizationStrategy: new FormControl<TrainingOptionsOptimizationStrategy | null | undefined>(undefined),
			optimizer: new FormControl<string | null | undefined>(undefined),
			pcaExplainedVarianceRatio: new FormControl<number | null | undefined>(undefined),
			pcaSolver: new FormControl<TrainingOptionsPcaSolver | null | undefined>(undefined),
			sampledShapleyNumPaths: new FormControl<string | null | undefined>(undefined),
			scaleFeatures: new FormControl<boolean | null | undefined>(undefined),
			standardizeFeatures: new FormControl<boolean | null | undefined>(undefined),
			subsample: new FormControl<number | null | undefined>(undefined),
			tfVersion: new FormControl<string | null | undefined>(undefined),
			timeSeriesDataColumn: new FormControl<string | null | undefined>(undefined),
			timeSeriesIdColumn: new FormControl<string | null | undefined>(undefined),
			timeSeriesLengthFraction: new FormControl<number | null | undefined>(undefined),
			timeSeriesTimestampColumn: new FormControl<string | null | undefined>(undefined),
			treeMethod: new FormControl<TrainingOptionsTreeMethod | null | undefined>(undefined),
			trendSmoothingWindowSize: new FormControl<string | null | undefined>(undefined),
			userColumn: new FormControl<string | null | undefined>(undefined),
			walsAlpha: new FormControl<number | null | undefined>(undefined),
			warmStart: new FormControl<boolean | null | undefined>(undefined),
			xgboostVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TrainingOptionsBoosterType { BOOSTER_TYPE_UNSPECIFIED = 0, GBTREE = 1, DART = 2 }

	export enum TrainingOptionsCategoryEncodingMethod { ENCODING_METHOD_UNSPECIFIED = 0, ONE_HOT_ENCODING = 1, LABEL_ENCODING = 2, DUMMY_ENCODING = 3 }

	export enum TrainingOptionsColorSpace { COLOR_SPACE_UNSPECIFIED = 0, RGB = 1, HSV = 2, YIQ = 3, YUV = 4, GRAYSCALE = 5 }

	export enum TrainingOptionsDartNormalizeType { DART_NORMALIZE_TYPE_UNSPECIFIED = 0, TREE = 1, FOREST = 2 }

	export enum TrainingOptionsDataFrequency { DATA_FREQUENCY_UNSPECIFIED = 0, AUTO_FREQUENCY = 1, YEARLY = 2, QUARTERLY = 3, MONTHLY = 4, WEEKLY = 5, DAILY = 6, HOURLY = 7, PER_MINUTE = 8 }

	export enum TrainingOptionsDataSplitMethod { DATA_SPLIT_METHOD_UNSPECIFIED = 0, RANDOM = 1, CUSTOM = 2, SEQUENTIAL = 3, NO_SPLIT = 4, AUTO_SPLIT = 5 }

	export enum TrainingOptionsDistanceType { DISTANCE_TYPE_UNSPECIFIED = 0, EUCLIDEAN = 1, COSINE = 2 }

	export enum TrainingOptionsFeedbackType { FEEDBACK_TYPE_UNSPECIFIED = 0, IMPLICIT = 1, EXPLICIT = 2 }

	export enum TrainingOptionsHolidayRegion { HOLIDAY_REGION_UNSPECIFIED = 0, GLOBAL = 1, NA = 2, JAPAC = 3, EMEA = 4, LAC = 5, AE = 6, AR = 7, AT = 8, AU = 9, BE = 10, BR = 11, CA = 12, CH = 13, CL = 14, CN = 15, CO = 16, CS = 17, CZ = 18, DE = 19, DK = 20, DZ = 21, EC = 22, EE = 23, EG = 24, ES = 25, FI = 26, FR = 27, GB = 28, GR = 29, HK = 30, HU = 31, ID = 32, IE = 33, IL = 34, IN = 35, IR = 36, IT = 37, JP = 38, KR = 39, LV = 40, MA = 41, MX = 42, MY = 43, NG = 44, NL = 45, NO = 46, NZ = 47, PE = 48, PH = 49, PK = 50, PL = 51, PT = 52, RO = 53, RS = 54, RU = 55, SA = 56, SE = 57, SG = 58, SI = 59, SK = 60, TH = 61, TR = 62, TW = 63, UA = 64, US = 65, VE = 66, VN = 67, ZA = 68 }

	export enum TrainingOptionsKmeansInitializationMethod { KMEANS_INITIALIZATION_METHOD_UNSPECIFIED = 0, RANDOM = 1, CUSTOM = 2, KMEANS_PLUS_PLUS = 3 }

	export enum TrainingOptionsLearnRateStrategy { LEARN_RATE_STRATEGY_UNSPECIFIED = 0, LINE_SEARCH = 1, CONSTANT = 2 }

	export enum TrainingOptionsLossType { LOSS_TYPE_UNSPECIFIED = 0, MEAN_SQUARED_LOSS = 1, MEAN_LOG_LOSS = 2 }

	export enum TrainingOptionsModelRegistry { MODEL_REGISTRY_UNSPECIFIED = 0, VERTEX_AI = 1 }

	export enum TrainingOptionsOptimizationStrategy { OPTIMIZATION_STRATEGY_UNSPECIFIED = 0, BATCH_GRADIENT_DESCENT = 1, NORMAL_EQUATION = 2 }

	export enum TrainingOptionsPcaSolver { UNSPECIFIED = 0, FULL = 1, RANDOMIZED = 2, AUTO = 3 }

	export enum TrainingOptionsTreeMethod { TREE_METHOD_UNSPECIFIED = 0, AUTO = 1, EXACT = 2, APPROX = 3, HIST = 4 }

	export enum HparamTuningTrialStatus { TRIAL_STATUS_UNSPECIFIED = 0, NOT_STARTED = 1, RUNNING = 2, SUCCEEDED = 3, FAILED = 4, INFEASIBLE = 5, STOPPED_EARLY = 6 }

	export interface IndexUnusedReason {
		baseTable?: TableReference;

		/** [Output-only] Specifies the high-level reason for the scenario when no search index was used. */
		code?: string | null;

		/** [Output-only] Specifies the name of the unused search index, if available. */
		indexName?: string | null;

		/** [Output-only] Free form human-readable reason for the scenario when no search index was used. */
		message?: string | null;
	}
	export interface IndexUnusedReasonFormProperties {

		/** [Output-only] Specifies the high-level reason for the scenario when no search index was used. */
		code: FormControl<string | null | undefined>,

		/** [Output-only] Specifies the name of the unused search index, if available. */
		indexName: FormControl<string | null | undefined>,

		/** [Output-only] Free form human-readable reason for the scenario when no search index was used. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateIndexUnusedReasonFormGroup() {
		return new FormGroup<IndexUnusedReasonFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			indexName: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IterationResult {

		/** Time taken to run the iteration in milliseconds. */
		durationMs?: string | null;

		/** Loss computed on the eval data at the end of iteration. */
		evalLoss?: number | null;

		/** Index of the iteration, 0 based. */
		index?: number | null;

		/** Learn rate used for this iteration. */
		learnRate?: number | null;

		/** Loss computed on the training data at the end of iteration. */
		trainingLoss?: number | null;
	}
	export interface IterationResultFormProperties {

		/** Time taken to run the iteration in milliseconds. */
		durationMs: FormControl<string | null | undefined>,

		/** Loss computed on the eval data at the end of iteration. */
		evalLoss: FormControl<number | null | undefined>,

		/** Index of the iteration, 0 based. */
		index: FormControl<number | null | undefined>,

		/** Learn rate used for this iteration. */
		learnRate: FormControl<number | null | undefined>,

		/** Loss computed on the training data at the end of iteration. */
		trainingLoss: FormControl<number | null | undefined>,
	}
	export function CreateIterationResultFormGroup() {
		return new FormGroup<IterationResultFormProperties>({
			durationMs: new FormControl<string | null | undefined>(undefined),
			evalLoss: new FormControl<number | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			learnRate: new FormControl<number | null | undefined>(undefined),
			trainingLoss: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Job {
		configuration?: JobConfiguration;

		/** [Output-only] A hash of this resource. */
		etag?: string | null;

		/** [Output-only] Opaque ID field of the job */
		id?: string | null;

		/** [Output-only] If set, it provides the reason why a Job was created. If not set, it should be treated as the default: REQUESTED. This feature is not yet available. Jobs will always be created. */
		jobCreationReason?: any;
		jobReference?: JobReference;

		/** [Output-only] The type of the resource. */
		kind?: string | null;

		/** [Output-only] A URL that can be used to access this resource again. */
		selfLink?: string | null;
		statistics?: JobStatistics;
		status?: JobStatus;

		/** [Output-only] Email address of the user who ran the job. */
		user_email?: string | null;
	}
	export interface JobFormProperties {

		/** [Output-only] A hash of this resource. */
		etag: FormControl<string | null | undefined>,

		/** [Output-only] Opaque ID field of the job */
		id: FormControl<string | null | undefined>,

		/** [Output-only] If set, it provides the reason why a Job was created. If not set, it should be treated as the default: REQUESTED. This feature is not yet available. Jobs will always be created. */
		jobCreationReason: FormControl<any | null | undefined>,

		/** [Output-only] The type of the resource. */
		kind: FormControl<string | null | undefined>,

		/** [Output-only] A URL that can be used to access this resource again. */
		selfLink: FormControl<string | null | undefined>,

		/** [Output-only] Email address of the user who ran the job. */
		user_email: FormControl<string | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			jobCreationReason: new FormControl<any | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			user_email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobConfiguration {
		copy?: JobConfigurationTableCopy;

		/** [Optional] If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined. */
		dryRun?: boolean | null;
		extract?: JobConfigurationExtract;

		/** [Optional] Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. */
		jobTimeoutMs?: string | null;

		/** [Output-only] The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN. */
		jobType?: string | null;

		/** The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. */
		labels?: {[id: string]: string };
		load?: JobConfigurationLoad;
		query?: JobConfigurationQuery;
	}
	export interface JobConfigurationFormProperties {

		/** [Optional] If set, don't actually run this job. A valid query will return a mostly empty response with some processing statistics, while an invalid query will return the same error it would if it wasn't a dry run. Behavior of non-query jobs is undefined. */
		dryRun: FormControl<boolean | null | undefined>,

		/** [Optional] Job timeout in milliseconds. If this time limit is exceeded, BigQuery may attempt to terminate the job. */
		jobTimeoutMs: FormControl<string | null | undefined>,

		/** [Output-only] The type of the job. Can be QUERY, LOAD, EXTRACT, COPY or UNKNOWN. */
		jobType: FormControl<string | null | undefined>,

		/** The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateJobConfigurationFormGroup() {
		return new FormGroup<JobConfigurationFormProperties>({
			dryRun: new FormControl<boolean | null | undefined>(undefined),
			jobTimeoutMs: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface JobConfigurationTableCopy {

		/** [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion. */
		createDisposition?: string | null;
		destinationEncryptionConfiguration?: EncryptionConfiguration;

		/** [Optional] The time when the destination table expires. Expired tables will be deleted and their storage reclaimed. */
		destinationExpirationTime?: any;
		destinationTable?: TableReference;

		/** [Optional] Supported operation types in table copy job. */
		operationType?: string | null;
		sourceTable?: TableReference;

		/** [Pick one] Source tables to copy. */
		sourceTables?: Array<TableReference>;

		/** [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. */
		writeDisposition?: string | null;
	}
	export interface JobConfigurationTableCopyFormProperties {

		/** [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion. */
		createDisposition: FormControl<string | null | undefined>,

		/** [Optional] The time when the destination table expires. Expired tables will be deleted and their storage reclaimed. */
		destinationExpirationTime: FormControl<any | null | undefined>,

		/** [Optional] Supported operation types in table copy job. */
		operationType: FormControl<string | null | undefined>,

		/** [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. */
		writeDisposition: FormControl<string | null | undefined>,
	}
	export function CreateJobConfigurationTableCopyFormGroup() {
		return new FormGroup<JobConfigurationTableCopyFormProperties>({
			createDisposition: new FormControl<string | null | undefined>(undefined),
			destinationExpirationTime: new FormControl<any | null | undefined>(undefined),
			operationType: new FormControl<string | null | undefined>(undefined),
			writeDisposition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobConfigurationExtract {

		/** [Optional] The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE. The default value is NONE. DEFLATE and SNAPPY are only supported for Avro. Not applicable when extracting models. */
		compression?: string | null;

		/** [Optional] The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON, PARQUET or AVRO for tables and ML_TF_SAVED_MODEL or ML_XGBOOST_BOOSTER for models. The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV. The default value for models is ML_TF_SAVED_MODEL. */
		destinationFormat?: string | null;

		/** [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written. */
		destinationUri?: string | null;

		/** [Pick one] A list of fully-qualified Google Cloud Storage URIs where the extracted table should be written. */
		destinationUris?: Array<string>;

		/** [Optional] Delimiter to use between fields in the exported data. Default is ','. Not applicable when extracting models. */
		fieldDelimiter?: string | null;

		/** [Optional] Whether to print out a header row in the results. Default is true. Not applicable when extracting models. */
		printHeader?: boolean | null;
		sourceModel?: ModelReference;
		sourceTable?: TableReference;

		/** [Optional] If destinationFormat is set to "AVRO", this flag indicates whether to enable extracting applicable column types (such as TIMESTAMP) to their corresponding AVRO logical types (timestamp-micros), instead of only using their raw types (avro-long). Not applicable when extracting models. */
		useAvroLogicalTypes?: boolean | null;
	}
	export interface JobConfigurationExtractFormProperties {

		/** [Optional] The compression type to use for exported files. Possible values include GZIP, DEFLATE, SNAPPY, and NONE. The default value is NONE. DEFLATE and SNAPPY are only supported for Avro. Not applicable when extracting models. */
		compression: FormControl<string | null | undefined>,

		/** [Optional] The exported file format. Possible values include CSV, NEWLINE_DELIMITED_JSON, PARQUET or AVRO for tables and ML_TF_SAVED_MODEL or ML_XGBOOST_BOOSTER for models. The default value for tables is CSV. Tables with nested or repeated fields cannot be exported as CSV. The default value for models is ML_TF_SAVED_MODEL. */
		destinationFormat: FormControl<string | null | undefined>,

		/** [Pick one] DEPRECATED: Use destinationUris instead, passing only one URI as necessary. The fully-qualified Google Cloud Storage URI where the extracted table should be written. */
		destinationUri: FormControl<string | null | undefined>,

		/** [Optional] Delimiter to use between fields in the exported data. Default is ','. Not applicable when extracting models. */
		fieldDelimiter: FormControl<string | null | undefined>,

		/** [Optional] Whether to print out a header row in the results. Default is true. Not applicable when extracting models. */
		printHeader: FormControl<boolean | null | undefined>,

		/** [Optional] If destinationFormat is set to "AVRO", this flag indicates whether to enable extracting applicable column types (such as TIMESTAMP) to their corresponding AVRO logical types (timestamp-micros), instead of only using their raw types (avro-long). Not applicable when extracting models. */
		useAvroLogicalTypes: FormControl<boolean | null | undefined>,
	}
	export function CreateJobConfigurationExtractFormGroup() {
		return new FormGroup<JobConfigurationExtractFormProperties>({
			compression: new FormControl<string | null | undefined>(undefined),
			destinationFormat: new FormControl<string | null | undefined>(undefined),
			destinationUri: new FormControl<string | null | undefined>(undefined),
			fieldDelimiter: new FormControl<string | null | undefined>(undefined),
			printHeader: new FormControl<boolean | null | undefined>(undefined),
			useAvroLogicalTypes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ModelReference {

		/** Required. The ID of the dataset containing this model. */
		datasetId?: string | null;

		/** Required. The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		modelId?: string | null;

		/** Required. The ID of the project containing this model. */
		projectId?: string | null;
	}
	export interface ModelReferenceFormProperties {

		/** Required. The ID of the dataset containing this model. */
		datasetId: FormControl<string | null | undefined>,

		/** Required. The ID of the model. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. */
		modelId: FormControl<string | null | undefined>,

		/** Required. The ID of the project containing this model. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateModelReferenceFormGroup() {
		return new FormGroup<ModelReferenceFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			modelId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobConfigurationLoad {

		/** [Optional] Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats. */
		allowJaggedRows?: boolean | null;

		/** Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false. */
		allowQuotedNewlines?: boolean | null;

		/** [Optional] Indicates if we should automatically infer the options and schema for CSV and JSON sources. */
		autodetect?: boolean | null;
		clustering?: Clustering;

		/** Connection properties. */
		connectionProperties?: Array<ConnectionProperty>;

		/** [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion. */
		createDisposition?: string | null;

		/** If true, creates a new session, where session id will be a server generated random id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs the load job in non-session mode. */
		createSession?: boolean | null;

		/** [Optional] Defines the list of possible SQL data types to which the source decimal values are converted. This list and the precision and the scale parameters of the decimal field determine the target type. In the order of NUMERIC, BIGNUMERIC, and STRING, a type is picked if it is in the specified list and if it supports the precision and the scale. STRING supports all precision and scale values. If none of the listed types supports the precision and the scale, the type supporting the widest range in the specified list is picked, and if a value exceeds the supported range when reading the data, an error will be thrown. Example: Suppose the value of this field is ["NUMERIC", "BIGNUMERIC"]. If (precision,scale) is: (38,9) -> NUMERIC; (39,9) -> BIGNUMERIC (NUMERIC cannot hold 30 integer digits); (38,10) -> BIGNUMERIC (NUMERIC cannot hold 10 fractional digits); (76,38) -> BIGNUMERIC; (77,38) -> BIGNUMERIC (error if value exeeds supported range). This field cannot contain duplicate types. The order of the types in this field is ignored. For example, ["BIGNUMERIC", "NUMERIC"] is the same as ["NUMERIC", "BIGNUMERIC"] and NUMERIC always takes precedence over BIGNUMERIC. Defaults to ["NUMERIC", "STRING"] for ORC and ["NUMERIC"] for the other file formats. */
		decimalTargetTypes?: Array<string>;
		destinationEncryptionConfiguration?: EncryptionConfiguration;
		destinationTable?: TableReference;
		destinationTableProperties?: DestinationTableProperties;

		/** [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties. */
		encoding?: string | null;

		/** [Optional] The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character. To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (','). */
		fieldDelimiter?: string | null;

		/** [Optional] Specifies how source URIs are interpreted for constructing the file set to load. By default source URIs are expanded against the underlying storage. Other options include specifying manifest files. Only applicable to object storage systems. */
		fileSetSpecType?: string | null;
		hivePartitioningOptions?: HivePartitioningOptions;

		/** [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names */
		ignoreUnknownValues?: boolean | null;

		/** [Optional] If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON. For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited GeoJSON: set to GEOJSON. */
		jsonExtension?: string | null;

		/** [Optional] The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. This is only valid for CSV and JSON. The default value is 0, which requires that all records are valid. */
		maxBadRecords?: number | null;

		/** [Optional] Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value. */
		nullMarker?: string | null;
		parquetOptions?: ParquetOptions;

		/** [Optional] Preserves the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\x00' to '\x1F') when loading from CSV. Only applicable to CSV, ignored for other formats. */
		preserveAsciiControlCharacters?: boolean | null;

		/** If sourceFormat is set to "DATASTORE_BACKUP", indicates which entity properties to load into BigQuery from a Cloud Datastore backup. Property names are case sensitive and must be top-level properties. If no properties are specified, BigQuery loads all properties. If any named property isn't found in the Cloud Datastore backup, an invalid error is returned in the job result. */
		projectionFields?: Array<string>;

		/** [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. */
		quote?: string | null;
		rangePartitioning?: RangePartitioning;

		/** User provided referencing file with the expected reader schema, Available for the format: AVRO, PARQUET, ORC. */
		referenceFileSchemaUri?: string | null;
		schema?: TableSchema;

		/** [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT". */
		schemaInline?: string | null;

		/** [Deprecated] The format of the schemaInline property. */
		schemaInlineFormat?: string | null;

		/** Allows the schema of the destination table to be updated as a side effect of the load job if a schema is autodetected or supplied in the job configuration. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable. */
		schemaUpdateOptions?: Array<string>;

		/** [Optional] The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. */
		skipLeadingRows?: number | null;

		/** [Optional] The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET". For orc, specify "ORC". The default value is CSV. */
		sourceFormat?: string | null;

		/** [Required] The fully-qualified URIs that point to your data in Google Cloud. For Google Cloud Storage URIs: Each URI can contain one '*' wildcard character and it must come after the 'bucket' name. Size limits related to load jobs apply to external data sources. For Google Cloud Bigtable URIs: Exactly one URI can be specified and it has be a fully specified and valid HTTPS URL for a Google Cloud Bigtable table. For Google Cloud Datastore backups: Exactly one URI can be specified. Also, the '*' wildcard character is not allowed. */
		sourceUris?: Array<string>;
		timePartitioning?: TimePartitioning;

		/** [Optional] If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). */
		useAvroLogicalTypes?: boolean | null;

		/** [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. */
		writeDisposition?: string | null;
	}
	export interface JobConfigurationLoadFormProperties {

		/** [Optional] Accept rows that are missing trailing optional columns. The missing values are treated as nulls. If false, records with missing trailing columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. Only applicable to CSV, ignored for other formats. */
		allowJaggedRows: FormControl<boolean | null | undefined>,

		/** Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false. */
		allowQuotedNewlines: FormControl<boolean | null | undefined>,

		/** [Optional] Indicates if we should automatically infer the options and schema for CSV and JSON sources. */
		autodetect: FormControl<boolean | null | undefined>,

		/** [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion. */
		createDisposition: FormControl<string | null | undefined>,

		/** If true, creates a new session, where session id will be a server generated random id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs the load job in non-session mode. */
		createSession: FormControl<boolean | null | undefined>,

		/** [Optional] The character encoding of the data. The supported values are UTF-8 or ISO-8859-1. The default value is UTF-8. BigQuery decodes the data after the raw, binary data has been split using the values of the quote and fieldDelimiter properties. */
		encoding: FormControl<string | null | undefined>,

		/** [Optional] The separator for fields in a CSV file. The separator can be any ISO-8859-1 single-byte character. To use a character in the range 128-255, you must encode the character as UTF8. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. BigQuery also supports the escape sequence "\t" to specify a tab separator. The default value is a comma (','). */
		fieldDelimiter: FormControl<string | null | undefined>,

		/** [Optional] Specifies how source URIs are interpreted for constructing the file set to load. By default source URIs are expanded against the underlying storage. Other options include specifying manifest files. Only applicable to object storage systems. */
		fileSetSpecType: FormControl<string | null | undefined>,

		/** [Optional] Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false. The sourceFormat property determines what BigQuery treats as an extra value: CSV: Trailing columns JSON: Named values that don't match any column names */
		ignoreUnknownValues: FormControl<boolean | null | undefined>,

		/** [Optional] If sourceFormat is set to newline-delimited JSON, indicates whether it should be processed as a JSON variant such as GeoJSON. For a sourceFormat other than JSON, omit this field. If the sourceFormat is newline-delimited JSON: - for newline-delimited GeoJSON: set to GEOJSON. */
		jsonExtension: FormControl<string | null | undefined>,

		/** [Optional] The maximum number of bad records that BigQuery can ignore when running the job. If the number of bad records exceeds this value, an invalid error is returned in the job result. This is only valid for CSV and JSON. The default value is 0, which requires that all records are valid. */
		maxBadRecords: FormControl<number | null | undefined>,

		/** [Optional] Specifies a string that represents a null value in a CSV file. For example, if you specify "\N", BigQuery interprets "\N" as a null value when loading a CSV file. The default value is the empty string. If you set this property to a custom value, BigQuery throws an error if an empty string is present for all data types except for STRING and BYTE. For STRING and BYTE columns, BigQuery interprets the empty string as an empty value. */
		nullMarker: FormControl<string | null | undefined>,

		/** [Optional] Preserves the embedded ASCII control characters (the first 32 characters in the ASCII-table, from '\x00' to '\x1F') when loading from CSV. Only applicable to CSV, ignored for other formats. */
		preserveAsciiControlCharacters: FormControl<boolean | null | undefined>,

		/** [Optional] The value that is used to quote data sections in a CSV file. BigQuery converts the string to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split the data in its raw, binary state. The default value is a double-quote ('"'). If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allowQuotedNewlines property to true. */
		quote: FormControl<string | null | undefined>,

		/** User provided referencing file with the expected reader schema, Available for the format: AVRO, PARQUET, ORC. */
		referenceFileSchemaUri: FormControl<string | null | undefined>,

		/** [Deprecated] The inline schema. For CSV schemas, specify as "Field1:Type1[,Field2:Type2]*". For example, "foo:STRING, bar:INTEGER, baz:FLOAT". */
		schemaInline: FormControl<string | null | undefined>,

		/** [Deprecated] The format of the schemaInline property. */
		schemaInlineFormat: FormControl<string | null | undefined>,

		/** [Optional] The number of rows at the top of a CSV file that BigQuery will skip when loading the data. The default value is 0. This property is useful if you have header rows in the file that should be skipped. */
		skipLeadingRows: FormControl<number | null | undefined>,

		/** [Optional] The format of the data files. For CSV files, specify "CSV". For datastore backups, specify "DATASTORE_BACKUP". For newline-delimited JSON, specify "NEWLINE_DELIMITED_JSON". For Avro, specify "AVRO". For parquet, specify "PARQUET". For orc, specify "ORC". The default value is CSV. */
		sourceFormat: FormControl<string | null | undefined>,

		/** [Optional] If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER). */
		useAvroLogicalTypes: FormControl<boolean | null | undefined>,

		/** [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_APPEND. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. */
		writeDisposition: FormControl<string | null | undefined>,
	}
	export function CreateJobConfigurationLoadFormGroup() {
		return new FormGroup<JobConfigurationLoadFormProperties>({
			allowJaggedRows: new FormControl<boolean | null | undefined>(undefined),
			allowQuotedNewlines: new FormControl<boolean | null | undefined>(undefined),
			autodetect: new FormControl<boolean | null | undefined>(undefined),
			createDisposition: new FormControl<string | null | undefined>(undefined),
			createSession: new FormControl<boolean | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			fieldDelimiter: new FormControl<string | null | undefined>(undefined),
			fileSetSpecType: new FormControl<string | null | undefined>(undefined),
			ignoreUnknownValues: new FormControl<boolean | null | undefined>(undefined),
			jsonExtension: new FormControl<string | null | undefined>(undefined),
			maxBadRecords: new FormControl<number | null | undefined>(undefined),
			nullMarker: new FormControl<string | null | undefined>(undefined),
			preserveAsciiControlCharacters: new FormControl<boolean | null | undefined>(undefined),
			quote: new FormControl<string | null | undefined>(undefined, [Validators.pattern('.?')]),
			referenceFileSchemaUri: new FormControl<string | null | undefined>(undefined),
			schemaInline: new FormControl<string | null | undefined>(undefined),
			schemaInlineFormat: new FormControl<string | null | undefined>(undefined),
			skipLeadingRows: new FormControl<number | null | undefined>(undefined),
			sourceFormat: new FormControl<string | null | undefined>(undefined),
			useAvroLogicalTypes: new FormControl<boolean | null | undefined>(undefined),
			writeDisposition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RangePartitioning {

		/** [TrustedTester] [Required] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED field. The only supported type is INTEGER/INT64. */
		field?: string | null;

		/** [TrustedTester] [Required] Defines the ranges for range partitioning. */
		range?: RangePartitioningRange;
	}
	export interface RangePartitioningFormProperties {

		/** [TrustedTester] [Required] The table is partitioned by this field. The field must be a top-level NULLABLE/REQUIRED field. The only supported type is INTEGER/INT64. */
		field: FormControl<string | null | undefined>,
	}
	export function CreateRangePartitioningFormGroup() {
		return new FormGroup<RangePartitioningFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RangePartitioningRange {

		/** [TrustedTester] [Required] The end of range partitioning, exclusive. */
		end?: string | null;

		/** [TrustedTester] [Required] The width of each interval. */
		interval?: string | null;

		/** [TrustedTester] [Required] The start of range partitioning, inclusive. */
		start?: string | null;
	}
	export interface RangePartitioningRangeFormProperties {

		/** [TrustedTester] [Required] The end of range partitioning, exclusive. */
		end: FormControl<string | null | undefined>,

		/** [TrustedTester] [Required] The width of each interval. */
		interval: FormControl<string | null | undefined>,

		/** [TrustedTester] [Required] The start of range partitioning, inclusive. */
		start: FormControl<string | null | undefined>,
	}
	export function CreateRangePartitioningRangeFormGroup() {
		return new FormGroup<RangePartitioningRangeFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			interval: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TimePartitioning {

		/** [Optional] Number of milliseconds for which to keep the storage for partitions in the table. The storage in a partition will have an expiration time of its partition time plus this value. */
		expirationMs?: string | null;

		/** [Beta] [Optional] If not set, the table is partitioned by pseudo column, referenced via either '_PARTITIONTIME' as TIMESTAMP type, or '_PARTITIONDATE' as DATE type. If field is specified, the table is instead partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED. */
		field?: string | null;
		requirePartitionFilter?: boolean | null;

		/** [Required] The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. When the type is not specified, the default behavior is DAY. */
		type?: string | null;
	}
	export interface TimePartitioningFormProperties {

		/** [Optional] Number of milliseconds for which to keep the storage for partitions in the table. The storage in a partition will have an expiration time of its partition time plus this value. */
		expirationMs: FormControl<string | null | undefined>,

		/** [Beta] [Optional] If not set, the table is partitioned by pseudo column, referenced via either '_PARTITIONTIME' as TIMESTAMP type, or '_PARTITIONDATE' as DATE type. If field is specified, the table is instead partitioned by this field. The field must be a top-level TIMESTAMP or DATE field. Its mode must be NULLABLE or REQUIRED. */
		field: FormControl<string | null | undefined>,
		requirePartitionFilter: FormControl<boolean | null | undefined>,

		/** [Required] The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively. When the type is not specified, the default behavior is DAY. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTimePartitioningFormGroup() {
		return new FormGroup<TimePartitioningFormProperties>({
			expirationMs: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			requirePartitionFilter: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobConfigurationQuery {

		/** [Optional] If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed maximum response size. */
		allowLargeResults?: boolean | null;
		clustering?: Clustering;

		/** Connection properties. */
		connectionProperties?: Array<ConnectionProperty>;

		/** [Optional] Specifies whether the query should be executed as a continuous query. The default value is false. */
		continuous?: boolean | null;

		/** [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion. */
		createDisposition?: string | null;

		/** If true, creates a new session, where session id will be a server generated random id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs query in non-session mode. */
		createSession?: boolean | null;
		defaultDataset?: DatasetReference;
		destinationEncryptionConfiguration?: EncryptionConfiguration;
		destinationTable?: TableReference;

		/** [Optional] If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened. */
		flattenResults?: boolean | null;

		/** [Optional] Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge). If unspecified, this will be set to your project default. */
		maximumBillingTier?: number | null;

		/** [Optional] Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default. */
		maximumBytesBilled?: string | null;

		/** Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query. */
		parameterMode?: string | null;

		/** [Deprecated] This property is deprecated. */
		preserveNulls?: boolean | null;

		/** [Optional] Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE. */
		priority?: string | null;

		/** [Required] SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL. */
		query?: string | null;

		/** Query parameters for standard SQL queries. */
		queryParameters?: Array<QueryParameter>;
		rangePartitioning?: RangePartitioning;

		/** Allows the schema of the destination table to be updated as a side effect of the query job. Schema update options are supported in two cases: when writeDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination table is a partition of a table, specified by partition decorators. For normal tables, WRITE_TRUNCATE will always overwrite the schema. One or more of the following values are specified: ALLOW_FIELD_ADDITION: allow adding a nullable field to the schema. ALLOW_FIELD_RELAXATION: allow relaxing a required field in the original schema to nullable. */
		schemaUpdateOptions?: Array<string>;

		/** [Optional] If querying an external data source outside of BigQuery, describes the data format, location and other properties of the data source. By defining these properties, the data source can then be queried as if it were a standard BigQuery table. */
		tableDefinitions?: {[id: string]: ExternalDataConfiguration };
		timePartitioning?: TimePartitioning;

		/** Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false. */
		useLegacySql?: boolean | null;

		/** [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified. The default value is true. */
		useQueryCache?: boolean | null;

		/** Describes user-defined function resources used in the query. */
		userDefinedFunctionResources?: Array<UserDefinedFunctionResource>;

		/** [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. */
		writeDisposition?: string | null;
	}
	export interface JobConfigurationQueryFormProperties {

		/** [Optional] If true and query uses legacy SQL dialect, allows the query to produce arbitrarily large result tables at a slight cost in performance. Requires destinationTable to be set. For standard SQL queries, this flag is ignored and large results are always allowed. However, you must still set destinationTable when result size exceeds the allowed maximum response size. */
		allowLargeResults: FormControl<boolean | null | undefined>,

		/** [Optional] Specifies whether the query should be executed as a continuous query. The default value is false. */
		continuous: FormControl<boolean | null | undefined>,

		/** [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion. */
		createDisposition: FormControl<string | null | undefined>,

		/** If true, creates a new session, where session id will be a server generated random id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs query in non-session mode. */
		createSession: FormControl<boolean | null | undefined>,

		/** [Optional] If true and query uses legacy SQL dialect, flattens all nested and repeated fields in the query results. allowLargeResults must be true if this is set to false. For standard SQL queries, this flag is ignored and results are never flattened. */
		flattenResults: FormControl<boolean | null | undefined>,

		/** [Optional] Limits the billing tier for this job. Queries that have resource usage beyond this tier will fail (without incurring a charge). If unspecified, this will be set to your project default. */
		maximumBillingTier: FormControl<number | null | undefined>,

		/** [Optional] Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default. */
		maximumBytesBilled: FormControl<string | null | undefined>,

		/** Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query. */
		parameterMode: FormControl<string | null | undefined>,

		/** [Deprecated] This property is deprecated. */
		preserveNulls: FormControl<boolean | null | undefined>,

		/** [Optional] Specifies a priority for the query. Possible values include INTERACTIVE and BATCH. The default value is INTERACTIVE. */
		priority: FormControl<string | null | undefined>,

		/** [Required] SQL query text to execute. The useLegacySql field can be used to indicate whether the query uses legacy SQL or standard SQL. */
		query: FormControl<string | null | undefined>,

		/** [Optional] If querying an external data source outside of BigQuery, describes the data format, location and other properties of the data source. By defining these properties, the data source can then be queried as if it were a standard BigQuery table. */
		tableDefinitions: FormControl<{[id: string]: ExternalDataConfiguration } | null | undefined>,

		/** Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false. */
		useLegacySql: FormControl<boolean | null | undefined>,

		/** [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. Moreover, the query cache is only available when a query does not have a destination table specified. The default value is true. */
		useQueryCache: FormControl<boolean | null | undefined>,

		/** [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data and uses the schema from the query result. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion. */
		writeDisposition: FormControl<string | null | undefined>,
	}
	export function CreateJobConfigurationQueryFormGroup() {
		return new FormGroup<JobConfigurationQueryFormProperties>({
			allowLargeResults: new FormControl<boolean | null | undefined>(undefined),
			continuous: new FormControl<boolean | null | undefined>(undefined),
			createDisposition: new FormControl<string | null | undefined>(undefined),
			createSession: new FormControl<boolean | null | undefined>(undefined),
			flattenResults: new FormControl<boolean | null | undefined>(undefined),
			maximumBillingTier: new FormControl<number | null | undefined>(undefined),
			maximumBytesBilled: new FormControl<string | null | undefined>(undefined),
			parameterMode: new FormControl<string | null | undefined>(undefined),
			preserveNulls: new FormControl<boolean | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			tableDefinitions: new FormControl<{[id: string]: ExternalDataConfiguration } | null | undefined>(undefined),
			useLegacySql: new FormControl<boolean | null | undefined>(undefined),
			useQueryCache: new FormControl<boolean | null | undefined>(undefined),
			writeDisposition: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryParameter {

		/** [Optional] If unset, this is a positional parameter. Otherwise, should be unique within a query. */
		name?: string | null;
		parameterType?: QueryParameterType;
		parameterValue?: QueryParameterValue;
	}
	export interface QueryParameterFormProperties {

		/** [Optional] If unset, this is a positional parameter. Otherwise, should be unique within a query. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateQueryParameterFormGroup() {
		return new FormGroup<QueryParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryParameterType {
		arrayType?: QueryParameterType;

		/** [Optional] The types of the fields of this struct, in order, if this is a struct. */
		QueryParameterTypeStructTypes?: Array<QueryParameterTypeStructTypes>;

		/** [Required] The top level type of this field. */
		type?: string | null;
	}
	export interface QueryParameterTypeFormProperties {

		/** [Required] The top level type of this field. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateQueryParameterTypeFormGroup() {
		return new FormGroup<QueryParameterTypeFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryParameterTypeStructTypes {

		/** [Optional] Human-oriented description of the field. */
		description?: string | null;

		/** [Optional] The name of this field. */
		name?: string | null;
		type?: QueryParameterType;
	}
	export interface QueryParameterTypeStructTypesFormProperties {

		/** [Optional] Human-oriented description of the field. */
		description: FormControl<string | null | undefined>,

		/** [Optional] The name of this field. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateQueryParameterTypeStructTypesFormGroup() {
		return new FormGroup<QueryParameterTypeStructTypesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryParameterValue {

		/** [Optional] The array values, if this is an array type. */
		arrayValues?: Array<QueryParameterValue>;

		/** [Optional] The struct field values, in order of the struct type's declaration. */
		structValues?: {[id: string]: QueryParameterValue };

		/** [Optional] The value of this value, if a simple scalar type. */
		value?: string | null;
	}
	export interface QueryParameterValueFormProperties {

		/** [Optional] The struct field values, in order of the struct type's declaration. */
		structValues: FormControl<{[id: string]: QueryParameterValue } | null | undefined>,

		/** [Optional] The value of this value, if a simple scalar type. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateQueryParameterValueFormGroup() {
		return new FormGroup<QueryParameterValueFormProperties>({
			structValues: new FormControl<{[id: string]: QueryParameterValue } | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of Standard SQL should leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional information on migrating, see: https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions */
	export interface UserDefinedFunctionResource {

		/** [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code. */
		inlineCode?: string | null;

		/** [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path). */
		resourceUri?: string | null;
	}

	/** This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of Standard SQL should leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional information on migrating, see: https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions */
	export interface UserDefinedFunctionResourceFormProperties {

		/** [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code. */
		inlineCode: FormControl<string | null | undefined>,

		/** [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path). */
		resourceUri: FormControl<string | null | undefined>,
	}
	export function CreateUserDefinedFunctionResourceFormGroup() {
		return new FormGroup<UserDefinedFunctionResourceFormProperties>({
			inlineCode: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobStatistics {

		/** [TrustedTester] [Output-only] Job progress (0.0 -> 1.0) for LOAD and EXTRACT jobs. */
		completionRatio?: number | null;
		copy?: JobStatistics5;

		/** [Output-only] Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs. */
		creationTime?: string | null;
		dataMaskingStatistics?: DataMaskingStatistics;

		/** [Output-only] End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state. */
		endTime?: string | null;
		extract?: JobStatistics4;
		load?: JobStatistics3;

		/** [Output-only] Number of child jobs executed. */
		numChildJobs?: string | null;

		/** [Output-only] If this is a child job, the id of the parent. */
		parentJobId?: string | null;
		query?: JobStatistics2;

		/** [Output-only] Quotas which delayed this job's start time. */
		quotaDeferments?: Array<string>;

		/** [Output-only] Job resource usage breakdown by reservation. */
		JobStatisticsReservationUsage?: Array<JobStatisticsReservationUsage>;

		/** [Output-only] Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job. */
		reservation_id?: string | null;
		rowLevelSecurityStatistics?: RowLevelSecurityStatistics;
		scriptStatistics?: ScriptStatistics;
		sessionInfo?: SessionInfo;

		/** [Output-only] Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE. */
		startTime?: string | null;

		/** [Output-only] [Deprecated] Use the bytes processed in the query statistics instead. */
		totalBytesProcessed?: string | null;

		/** [Output-only] Slot-milliseconds for the job. */
		totalSlotMs?: string | null;
		transactionInfo?: TransactionInfo;
	}
	export interface JobStatisticsFormProperties {

		/** [TrustedTester] [Output-only] Job progress (0.0 -> 1.0) for LOAD and EXTRACT jobs. */
		completionRatio: FormControl<number | null | undefined>,

		/** [Output-only] Creation time of this job, in milliseconds since the epoch. This field will be present on all jobs. */
		creationTime: FormControl<string | null | undefined>,

		/** [Output-only] End time of this job, in milliseconds since the epoch. This field will be present whenever a job is in the DONE state. */
		endTime: FormControl<string | null | undefined>,

		/** [Output-only] Number of child jobs executed. */
		numChildJobs: FormControl<string | null | undefined>,

		/** [Output-only] If this is a child job, the id of the parent. */
		parentJobId: FormControl<string | null | undefined>,

		/** [Output-only] Name of the primary reservation assigned to this job. Note that this could be different than reservations reported in the reservation usage field if parent reservations were used to execute this job. */
		reservation_id: FormControl<string | null | undefined>,

		/** [Output-only] Start time of this job, in milliseconds since the epoch. This field will be present when the job transitions from the PENDING state to either RUNNING or DONE. */
		startTime: FormControl<string | null | undefined>,

		/** [Output-only] [Deprecated] Use the bytes processed in the query statistics instead. */
		totalBytesProcessed: FormControl<string | null | undefined>,

		/** [Output-only] Slot-milliseconds for the job. */
		totalSlotMs: FormControl<string | null | undefined>,
	}
	export function CreateJobStatisticsFormGroup() {
		return new FormGroup<JobStatisticsFormProperties>({
			completionRatio: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			numChildJobs: new FormControl<string | null | undefined>(undefined),
			parentJobId: new FormControl<string | null | undefined>(undefined),
			reservation_id: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			totalBytesProcessed: new FormControl<string | null | undefined>(undefined),
			totalSlotMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobStatistics5 {

		/** [Output-only] Number of logical bytes copied to the destination table. */
		copiedLogicalBytes?: string | null;

		/** [Output-only] Number of rows copied to the destination table. */
		copiedRows?: string | null;
	}
	export interface JobStatistics5FormProperties {

		/** [Output-only] Number of logical bytes copied to the destination table. */
		copiedLogicalBytes: FormControl<string | null | undefined>,

		/** [Output-only] Number of rows copied to the destination table. */
		copiedRows: FormControl<string | null | undefined>,
	}
	export function CreateJobStatistics5FormGroup() {
		return new FormGroup<JobStatistics5FormProperties>({
			copiedLogicalBytes: new FormControl<string | null | undefined>(undefined),
			copiedRows: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobStatistics4 {

		/** [Output-only] Number of files per destination URI or URI pattern specified in the extract configuration. These values will be in the same order as the URIs specified in the 'destinationUris' field. */
		destinationUriFileCounts?: Array<string>;

		/** [Output-only] Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing purposes. */
		inputBytes?: string | null;
	}
	export interface JobStatistics4FormProperties {

		/** [Output-only] Number of user bytes extracted into the result. This is the byte count as computed by BigQuery for billing purposes. */
		inputBytes: FormControl<string | null | undefined>,
	}
	export function CreateJobStatistics4FormGroup() {
		return new FormGroup<JobStatistics4FormProperties>({
			inputBytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobStatistics3 {

		/** [Output-only] The number of bad records encountered. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data. */
		badRecords?: string | null;

		/** [Output-only] Number of bytes of source data in a load job. */
		inputFileBytes?: string | null;

		/** [Output-only] Number of source files in a load job. */
		inputFiles?: string | null;

		/** [Output-only] Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change. */
		outputBytes?: string | null;

		/** [Output-only] Number of rows imported in a load job. Note that while an import job is in the running state, this value may change. */
		outputRows?: string | null;
	}
	export interface JobStatistics3FormProperties {

		/** [Output-only] The number of bad records encountered. Note that if the job has failed because of more bad records encountered than the maximum allowed in the load job configuration, then this number can be less than the total number of bad records present in the input data. */
		badRecords: FormControl<string | null | undefined>,

		/** [Output-only] Number of bytes of source data in a load job. */
		inputFileBytes: FormControl<string | null | undefined>,

		/** [Output-only] Number of source files in a load job. */
		inputFiles: FormControl<string | null | undefined>,

		/** [Output-only] Size of the loaded data in bytes. Note that while a load job is in the running state, this value may change. */
		outputBytes: FormControl<string | null | undefined>,

		/** [Output-only] Number of rows imported in a load job. Note that while an import job is in the running state, this value may change. */
		outputRows: FormControl<string | null | undefined>,
	}
	export function CreateJobStatistics3FormGroup() {
		return new FormGroup<JobStatistics3FormProperties>({
			badRecords: new FormControl<string | null | undefined>(undefined),
			inputFileBytes: new FormControl<string | null | undefined>(undefined),
			inputFiles: new FormControl<string | null | undefined>(undefined),
			outputBytes: new FormControl<string | null | undefined>(undefined),
			outputRows: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobStatistics2 {
		biEngineStatistics?: BiEngineStatistics;

		/** [Output only] Billing tier for the job. */
		billingTier?: number | null;

		/** [Output only] Whether the query result was fetched from the query cache. */
		cacheHit?: boolean | null;

		/** [Output only] [Preview] The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW ACCESS POLICIES queries. */
		ddlAffectedRowAccessPolicyCount?: string | null;
		ddlDestinationTable?: TableReference;

		/** The DDL operation performed, possibly dependent on the pre-existence of the DDL target. Possible values (new values might be added in the future): "CREATE": The query created the DDL target. "SKIP": No-op. Example cases: the query is CREATE TABLE IF NOT EXISTS while the table already exists, or the query is DROP TABLE IF EXISTS while the table does not exist. "REPLACE": The query replaced the DDL target. Example case: the query is CREATE OR REPLACE TABLE, and the table already exists. "DROP": The query deleted the DDL target. */
		ddlOperationPerformed?: string | null;
		ddlTargetDataset?: DatasetReference;
		ddlTargetRoutine?: RoutineReference;
		ddlTargetRowAccessPolicy?: RowAccessPolicyReference;
		ddlTargetTable?: TableReference;
		dmlStats?: DmlStatistics;

		/** [Output only] The original estimate of bytes processed for the job. */
		estimatedBytesProcessed?: string | null;
		mlStatistics?: MlStatistics;
		modelTraining?: BigQueryModelTraining;

		/** [Output only, Beta] Deprecated; do not use. */
		modelTrainingCurrentIteration?: number | null;

		/** [Output only, Beta] Deprecated; do not use. */
		modelTrainingExpectedTotalIteration?: string | null;

		/** [Output only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. */
		numDmlAffectedRows?: string | null;

		/** [Output only] Describes execution plan for the query. */
		queryPlan?: Array<ExplainQueryStage>;

		/** [Output only] Referenced routines (persistent user-defined functions and stored procedures) for the job. */
		referencedRoutines?: Array<RoutineReference>;

		/** [Output only] Referenced tables for the job. Queries that reference more than 50 tables will not have a complete list. */
		referencedTables?: Array<TableReference>;

		/** [Output only] Job resource usage breakdown by reservation. */
		JobStatistics2ReservationUsage?: Array<JobStatistics2ReservationUsage>;
		schema?: TableSchema;
		searchStatistics?: SearchStatistics;
		sparkStatistics?: SparkStatistics;

		/** The type of query statement, if valid. Possible values (new values might be added in the future): "SELECT": SELECT query. "INSERT": INSERT query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "UPDATE": UPDATE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "DELETE": DELETE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "MERGE": MERGE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "ALTER_TABLE": ALTER TABLE query. "ALTER_VIEW": ALTER VIEW query. "ASSERT": ASSERT condition AS 'description'. "CREATE_FUNCTION": CREATE FUNCTION query. "CREATE_MODEL": CREATE [OR REPLACE] MODEL ... AS SELECT ... . "CREATE_PROCEDURE": CREATE PROCEDURE query. "CREATE_TABLE": CREATE [OR REPLACE] TABLE without AS SELECT. "CREATE_TABLE_AS_SELECT": CREATE [OR REPLACE] TABLE ... AS SELECT ... . "CREATE_VIEW": CREATE [OR REPLACE] VIEW ... AS SELECT ... . "DROP_FUNCTION" : DROP FUNCTION query. "DROP_PROCEDURE": DROP PROCEDURE query. "DROP_TABLE": DROP TABLE query. "DROP_VIEW": DROP VIEW query. */
		statementType?: string | null;

		/** [Output only] [Beta] Describes a timeline of job execution. */
		timeline?: Array<QueryTimelineSample>;

		/** [Output only] Total bytes billed for the job. */
		totalBytesBilled?: string | null;

		/** [Output only] Total bytes processed for the job. */
		totalBytesProcessed?: string | null;

		/** [Output only] For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost. */
		totalBytesProcessedAccuracy?: string | null;

		/** [Output only] Total number of partitions processed from all partitioned tables referenced in the job. */
		totalPartitionsProcessed?: string | null;

		/** [Output only] Slot-milliseconds for the job. */
		totalSlotMs?: string | null;

		/** [Output-only] Total bytes transferred for cross-cloud queries such as Cross Cloud Transfer and CREATE TABLE AS SELECT (CTAS). */
		transferredBytes?: string | null;

		/** Standard SQL only: list of undeclared query parameters detected during a dry run validation. */
		undeclaredQueryParameters?: Array<QueryParameter>;
	}
	export interface JobStatistics2FormProperties {

		/** [Output only] Billing tier for the job. */
		billingTier: FormControl<number | null | undefined>,

		/** [Output only] Whether the query result was fetched from the query cache. */
		cacheHit: FormControl<boolean | null | undefined>,

		/** [Output only] [Preview] The number of row access policies affected by a DDL statement. Present only for DROP ALL ROW ACCESS POLICIES queries. */
		ddlAffectedRowAccessPolicyCount: FormControl<string | null | undefined>,

		/** The DDL operation performed, possibly dependent on the pre-existence of the DDL target. Possible values (new values might be added in the future): "CREATE": The query created the DDL target. "SKIP": No-op. Example cases: the query is CREATE TABLE IF NOT EXISTS while the table already exists, or the query is DROP TABLE IF EXISTS while the table does not exist. "REPLACE": The query replaced the DDL target. Example case: the query is CREATE OR REPLACE TABLE, and the table already exists. "DROP": The query deleted the DDL target. */
		ddlOperationPerformed: FormControl<string | null | undefined>,

		/** [Output only] The original estimate of bytes processed for the job. */
		estimatedBytesProcessed: FormControl<string | null | undefined>,

		/** [Output only, Beta] Deprecated; do not use. */
		modelTrainingCurrentIteration: FormControl<number | null | undefined>,

		/** [Output only, Beta] Deprecated; do not use. */
		modelTrainingExpectedTotalIteration: FormControl<string | null | undefined>,

		/** [Output only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. */
		numDmlAffectedRows: FormControl<string | null | undefined>,

		/** The type of query statement, if valid. Possible values (new values might be added in the future): "SELECT": SELECT query. "INSERT": INSERT query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "UPDATE": UPDATE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "DELETE": DELETE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "MERGE": MERGE query; see https://cloud.google.com/bigquery/docs/reference/standard-sql/data-manipulation-language. "ALTER_TABLE": ALTER TABLE query. "ALTER_VIEW": ALTER VIEW query. "ASSERT": ASSERT condition AS 'description'. "CREATE_FUNCTION": CREATE FUNCTION query. "CREATE_MODEL": CREATE [OR REPLACE] MODEL ... AS SELECT ... . "CREATE_PROCEDURE": CREATE PROCEDURE query. "CREATE_TABLE": CREATE [OR REPLACE] TABLE without AS SELECT. "CREATE_TABLE_AS_SELECT": CREATE [OR REPLACE] TABLE ... AS SELECT ... . "CREATE_VIEW": CREATE [OR REPLACE] VIEW ... AS SELECT ... . "DROP_FUNCTION" : DROP FUNCTION query. "DROP_PROCEDURE": DROP PROCEDURE query. "DROP_TABLE": DROP TABLE query. "DROP_VIEW": DROP VIEW query. */
		statementType: FormControl<string | null | undefined>,

		/** [Output only] Total bytes billed for the job. */
		totalBytesBilled: FormControl<string | null | undefined>,

		/** [Output only] Total bytes processed for the job. */
		totalBytesProcessed: FormControl<string | null | undefined>,

		/** [Output only] For dry-run jobs, totalBytesProcessed is an estimate and this field specifies the accuracy of the estimate. Possible values can be: UNKNOWN: accuracy of the estimate is unknown. PRECISE: estimate is precise. LOWER_BOUND: estimate is lower bound of what the query would cost. UPPER_BOUND: estimate is upper bound of what the query would cost. */
		totalBytesProcessedAccuracy: FormControl<string | null | undefined>,

		/** [Output only] Total number of partitions processed from all partitioned tables referenced in the job. */
		totalPartitionsProcessed: FormControl<string | null | undefined>,

		/** [Output only] Slot-milliseconds for the job. */
		totalSlotMs: FormControl<string | null | undefined>,

		/** [Output-only] Total bytes transferred for cross-cloud queries such as Cross Cloud Transfer and CREATE TABLE AS SELECT (CTAS). */
		transferredBytes: FormControl<string | null | undefined>,
	}
	export function CreateJobStatistics2FormGroup() {
		return new FormGroup<JobStatistics2FormProperties>({
			billingTier: new FormControl<number | null | undefined>(undefined),
			cacheHit: new FormControl<boolean | null | undefined>(undefined),
			ddlAffectedRowAccessPolicyCount: new FormControl<string | null | undefined>(undefined),
			ddlOperationPerformed: new FormControl<string | null | undefined>(undefined),
			estimatedBytesProcessed: new FormControl<string | null | undefined>(undefined),
			modelTrainingCurrentIteration: new FormControl<number | null | undefined>(undefined),
			modelTrainingExpectedTotalIteration: new FormControl<string | null | undefined>(undefined),
			numDmlAffectedRows: new FormControl<string | null | undefined>(undefined),
			statementType: new FormControl<string | null | undefined>(undefined),
			totalBytesBilled: new FormControl<string | null | undefined>(undefined),
			totalBytesProcessed: new FormControl<string | null | undefined>(undefined),
			totalBytesProcessedAccuracy: new FormControl<string | null | undefined>(undefined),
			totalPartitionsProcessed: new FormControl<string | null | undefined>(undefined),
			totalSlotMs: new FormControl<string | null | undefined>(undefined),
			transferredBytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RowAccessPolicyReference {

		/** Required. The ID of the dataset containing this row access policy. */
		datasetId?: string | null;

		/** Required. The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters. */
		policyId?: string | null;

		/** Required. The ID of the project containing this row access policy. */
		projectId?: string | null;

		/** Required. The ID of the table containing this row access policy. */
		tableId?: string | null;
	}
	export interface RowAccessPolicyReferenceFormProperties {

		/** Required. The ID of the dataset containing this row access policy. */
		datasetId: FormControl<string | null | undefined>,

		/** Required. The ID of the row access policy. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 256 characters. */
		policyId: FormControl<string | null | undefined>,

		/** Required. The ID of the project containing this row access policy. */
		projectId: FormControl<string | null | undefined>,

		/** Required. The ID of the table containing this row access policy. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateRowAccessPolicyReferenceFormGroup() {
		return new FormGroup<RowAccessPolicyReferenceFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			policyId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MlStatistics {

		/** Results for all completed iterations. */
		iterationResults?: Array<IterationResult>;

		/** Maximum number of iterations specified as max_iterations in the 'CREATE MODEL' query. The actual number of iterations may be less than this number due to early stop. */
		maxIterations?: string | null;
	}
	export interface MlStatisticsFormProperties {

		/** Maximum number of iterations specified as max_iterations in the 'CREATE MODEL' query. The actual number of iterations may be less than this number due to early stop. */
		maxIterations: FormControl<string | null | undefined>,
	}
	export function CreateMlStatisticsFormGroup() {
		return new FormGroup<MlStatisticsFormProperties>({
			maxIterations: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobStatistics2ReservationUsage {

		/** [Output only] Reservation name or "unreserved" for on-demand resources usage. */
		name?: string | null;

		/** [Output only] Slot-milliseconds the job spent in the given reservation. */
		slotMs?: string | null;
	}
	export interface JobStatistics2ReservationUsageFormProperties {

		/** [Output only] Reservation name or "unreserved" for on-demand resources usage. */
		name: FormControl<string | null | undefined>,

		/** [Output only] Slot-milliseconds the job spent in the given reservation. */
		slotMs: FormControl<string | null | undefined>,
	}
	export function CreateJobStatistics2ReservationUsageFormGroup() {
		return new FormGroup<JobStatistics2ReservationUsageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			slotMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchStatistics {

		/** When index_usage_mode is UNUSED or PARTIALLY_USED, this field explains why index was not used in all or part of the search query. If index_usage_mode is FULLLY_USED, this field is not populated. */
		indexUnusedReasons?: Array<IndexUnusedReason>;

		/** Specifies index usage mode for the query. */
		indexUsageMode?: string | null;
	}
	export interface SearchStatisticsFormProperties {

		/** Specifies index usage mode for the query. */
		indexUsageMode: FormControl<string | null | undefined>,
	}
	export function CreateSearchStatisticsFormGroup() {
		return new FormGroup<SearchStatisticsFormProperties>({
			indexUsageMode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SparkStatistics {

		/** [Output-only] Endpoints generated for the Spark job. */
		endpoints?: {[id: string]: string };
		loggingInfo?: SparkLoggingInfo;

		/** [Output-only] Spark job id if a Spark job is created successfully. */
		sparkJobId?: string | null;

		/** [Output-only] Location where the Spark job is executed. */
		sparkJobLocation?: string | null;
	}
	export interface SparkStatisticsFormProperties {

		/** [Output-only] Endpoints generated for the Spark job. */
		endpoints: FormControl<{[id: string]: string } | null | undefined>,

		/** [Output-only] Spark job id if a Spark job is created successfully. */
		sparkJobId: FormControl<string | null | undefined>,

		/** [Output-only] Location where the Spark job is executed. */
		sparkJobLocation: FormControl<string | null | undefined>,
	}
	export function CreateSparkStatisticsFormGroup() {
		return new FormGroup<SparkStatisticsFormProperties>({
			endpoints: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			sparkJobId: new FormControl<string | null | undefined>(undefined),
			sparkJobLocation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SparkLoggingInfo {

		/** [Output-only] Project ID used for logging */
		projectId?: string | null;

		/** [Output-only] Resource type used for logging */
		resourceType?: string | null;
	}
	export interface SparkLoggingInfoFormProperties {

		/** [Output-only] Project ID used for logging */
		projectId: FormControl<string | null | undefined>,

		/** [Output-only] Resource type used for logging */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateSparkLoggingInfoFormGroup() {
		return new FormGroup<SparkLoggingInfoFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryTimelineSample {

		/** Total number of units currently being processed by workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample. */
		activeUnits?: string | null;

		/** Total parallel units of work completed by this query. */
		completedUnits?: string | null;

		/** Milliseconds elapsed since the start of query execution. */
		elapsedMs?: string | null;

		/** Units of work that can be scheduled immediately. Providing additional slots for these units of work will speed up the query, provided no other query in the reservation needs additional slots. */
		estimatedRunnableUnits?: string | null;

		/** Total units of work remaining for the query. This number can be revised (increased or decreased) while the query is running. */
		pendingUnits?: string | null;

		/** Cumulative slot-ms consumed by the query. */
		totalSlotMs?: string | null;
	}
	export interface QueryTimelineSampleFormProperties {

		/** Total number of units currently being processed by workers. This does not correspond directly to slot usage. This is the largest value observed since the last sample. */
		activeUnits: FormControl<string | null | undefined>,

		/** Total parallel units of work completed by this query. */
		completedUnits: FormControl<string | null | undefined>,

		/** Milliseconds elapsed since the start of query execution. */
		elapsedMs: FormControl<string | null | undefined>,

		/** Units of work that can be scheduled immediately. Providing additional slots for these units of work will speed up the query, provided no other query in the reservation needs additional slots. */
		estimatedRunnableUnits: FormControl<string | null | undefined>,

		/** Total units of work remaining for the query. This number can be revised (increased or decreased) while the query is running. */
		pendingUnits: FormControl<string | null | undefined>,

		/** Cumulative slot-ms consumed by the query. */
		totalSlotMs: FormControl<string | null | undefined>,
	}
	export function CreateQueryTimelineSampleFormGroup() {
		return new FormGroup<QueryTimelineSampleFormProperties>({
			activeUnits: new FormControl<string | null | undefined>(undefined),
			completedUnits: new FormControl<string | null | undefined>(undefined),
			elapsedMs: new FormControl<string | null | undefined>(undefined),
			estimatedRunnableUnits: new FormControl<string | null | undefined>(undefined),
			pendingUnits: new FormControl<string | null | undefined>(undefined),
			totalSlotMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobStatisticsReservationUsage {

		/** [Output-only] Reservation name or "unreserved" for on-demand resources usage. */
		name?: string | null;

		/** [Output-only] Slot-milliseconds the job spent in the given reservation. */
		slotMs?: string | null;
	}
	export interface JobStatisticsReservationUsageFormProperties {

		/** [Output-only] Reservation name or "unreserved" for on-demand resources usage. */
		name: FormControl<string | null | undefined>,

		/** [Output-only] Slot-milliseconds the job spent in the given reservation. */
		slotMs: FormControl<string | null | undefined>,
	}
	export function CreateJobStatisticsReservationUsageFormGroup() {
		return new FormGroup<JobStatisticsReservationUsageFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			slotMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RowLevelSecurityStatistics {

		/** [Output-only] [Preview] Whether any accessed data was protected by row access policies. */
		rowLevelSecurityApplied?: boolean | null;
	}
	export interface RowLevelSecurityStatisticsFormProperties {

		/** [Output-only] [Preview] Whether any accessed data was protected by row access policies. */
		rowLevelSecurityApplied: FormControl<boolean | null | undefined>,
	}
	export function CreateRowLevelSecurityStatisticsFormGroup() {
		return new FormGroup<RowLevelSecurityStatisticsFormProperties>({
			rowLevelSecurityApplied: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ScriptStatistics {

		/** [Output-only] Whether this child job was a statement or expression. */
		evaluationKind?: string | null;

		/** Stack trace showing the line/column/procedure name of each frame on the stack at the point where the current evaluation happened. The leaf frame is first, the primary script is last. Never empty. */
		stackFrames?: Array<ScriptStackFrame>;
	}
	export interface ScriptStatisticsFormProperties {

		/** [Output-only] Whether this child job was a statement or expression. */
		evaluationKind: FormControl<string | null | undefined>,
	}
	export function CreateScriptStatisticsFormGroup() {
		return new FormGroup<ScriptStatisticsFormProperties>({
			evaluationKind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ScriptStackFrame {

		/** [Output-only] One-based end column. */
		endColumn?: number | null;

		/** [Output-only] One-based end line. */
		endLine?: number | null;

		/** [Output-only] Name of the active procedure, empty if in a top-level script. */
		procedureId?: string | null;

		/** [Output-only] One-based start column. */
		startColumn?: number | null;

		/** [Output-only] One-based start line. */
		startLine?: number | null;

		/** [Output-only] Text of the current statement/expression. */
		text?: string | null;
	}
	export interface ScriptStackFrameFormProperties {

		/** [Output-only] One-based end column. */
		endColumn: FormControl<number | null | undefined>,

		/** [Output-only] One-based end line. */
		endLine: FormControl<number | null | undefined>,

		/** [Output-only] Name of the active procedure, empty if in a top-level script. */
		procedureId: FormControl<string | null | undefined>,

		/** [Output-only] One-based start column. */
		startColumn: FormControl<number | null | undefined>,

		/** [Output-only] One-based start line. */
		startLine: FormControl<number | null | undefined>,

		/** [Output-only] Text of the current statement/expression. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateScriptStackFrameFormGroup() {
		return new FormGroup<ScriptStackFrameFormProperties>({
			endColumn: new FormControl<number | null | undefined>(undefined),
			endLine: new FormControl<number | null | undefined>(undefined),
			procedureId: new FormControl<string | null | undefined>(undefined),
			startColumn: new FormControl<number | null | undefined>(undefined),
			startLine: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SessionInfo {

		/** [Output-only] // [Preview] Id of the session. */
		sessionId?: string | null;
	}
	export interface SessionInfoFormProperties {

		/** [Output-only] // [Preview] Id of the session. */
		sessionId: FormControl<string | null | undefined>,
	}
	export function CreateSessionInfoFormGroup() {
		return new FormGroup<SessionInfoFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TransactionInfo {

		/** [Output-only] // [Alpha] Id of the transaction. */
		transactionId?: string | null;
	}
	export interface TransactionInfoFormProperties {

		/** [Output-only] // [Alpha] Id of the transaction. */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateTransactionInfoFormGroup() {
		return new FormGroup<TransactionInfoFormProperties>({
			transactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobStatus {
		errorResult?: ErrorProto;

		/** [Output-only] The first errors encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. */
		errors?: Array<ErrorProto>;

		/** [Output-only] Running state of the job. */
		state?: string | null;
	}
	export interface JobStatusFormProperties {

		/** [Output-only] Running state of the job. */
		state: FormControl<string | null | undefined>,
	}
	export function CreateJobStatusFormGroup() {
		return new FormGroup<JobStatusFormProperties>({
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobCancelResponse {
		job?: Job;

		/** The resource type of the response. */
		kind?: string | null;
	}
	export interface JobCancelResponseFormProperties {

		/** The resource type of the response. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateJobCancelResponseFormGroup() {
		return new FormGroup<JobCancelResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reason about why a Job was created from a [`jobs.query`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query) method when used with `JOB_CREATION_OPTIONAL` Job creation mode. For [`jobs.insert`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/insert) method calls it will always be `REQUESTED`. This feature is not yet available. Jobs will always be created. */
	export interface JobCreationReason {

		/** Output only. Specifies the high level reason why a Job was created. */
		code?: JobCreationReasonCode | null;
	}

	/** Reason about why a Job was created from a [`jobs.query`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query) method when used with `JOB_CREATION_OPTIONAL` Job creation mode. For [`jobs.insert`](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/insert) method calls it will always be `REQUESTED`. This feature is not yet available. Jobs will always be created. */
	export interface JobCreationReasonFormProperties {

		/** Output only. Specifies the high level reason why a Job was created. */
		code: FormControl<JobCreationReasonCode | null | undefined>,
	}
	export function CreateJobCreationReasonFormGroup() {
		return new FormGroup<JobCreationReasonFormProperties>({
			code: new FormControl<JobCreationReasonCode | null | undefined>(undefined),
		});

	}

	export enum JobCreationReasonCode { CODE_UNSPECIFIED = 0, REQUESTED = 1, LONG_RUNNING = 2, LARGE_RESULTS = 3, OTHER = 4 }

	export interface JobList {

		/** A hash of this page of results. */
		etag?: string | null;

		/** List of jobs that were requested. */
		JobListJobs?: Array<JobListJobs>;

		/** The resource type of the response. */
		kind?: string | null;

		/** A token to request the next page of results. */
		nextPageToken?: string | null;
	}
	export interface JobListFormProperties {

		/** A hash of this page of results. */
		etag: FormControl<string | null | undefined>,

		/** The resource type of the response. */
		kind: FormControl<string | null | undefined>,

		/** A token to request the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateJobListFormGroup() {
		return new FormGroup<JobListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JobListJobs {
		configuration?: JobConfiguration;
		errorResult?: ErrorProto;

		/** Unique opaque ID of the job. */
		id?: string | null;
		jobReference?: JobReference;

		/** The resource type. */
		kind?: string | null;

		/** Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or failed. */
		state?: string | null;
		statistics?: JobStatistics;
		status?: JobStatus;

		/** [Full-projection-only] Email address of the user who ran the job. */
		user_email?: string | null;
	}
	export interface JobListJobsFormProperties {

		/** Unique opaque ID of the job. */
		id: FormControl<string | null | undefined>,

		/** The resource type. */
		kind: FormControl<string | null | undefined>,

		/** Running state of the job. When the state is DONE, errorResult can be checked to determine whether the job succeeded or failed. */
		state: FormControl<string | null | undefined>,

		/** [Full-projection-only] Email address of the user who ran the job. */
		user_email: FormControl<string | null | undefined>,
	}
	export function CreateJobListJobsFormGroup() {
		return new FormGroup<JobListJobsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			user_email: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single JSON object. */
	export interface JsonObject {
	}

	/** Represents a single JSON object. */
	export interface JsonObjectFormProperties {
	}
	export function CreateJsonObjectFormGroup() {
		return new FormGroup<JsonObjectFormProperties>({
		});

	}

	export interface JsonValue {
	}
	export interface JsonValueFormProperties {
	}
	export function CreateJsonValueFormGroup() {
		return new FormGroup<JsonValueFormProperties>({
		});

	}


	/** Response format for a single page when listing BigQuery ML models. */
	export interface ListModelsResponse {

		/** Models in the requested dataset. Only the following fields are populated: model_reference, model_type, creation_time, last_modified_time and labels. */
		models?: Array<Model>;

		/** A token to request the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response format for a single page when listing BigQuery ML models. */
	export interface ListModelsResponseFormProperties {

		/** A token to request the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListModelsResponseFormGroup() {
		return new FormGroup<ListModelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Model {

		/** The best trial_id across all training runs. */
		bestTrialId?: string | null;

		/** Output only. The time when this model was created, in millisecs since the epoch. */
		creationTime?: string | null;

		/** Output only. The default trial_id to use in TVFs when the trial_id is not passed in. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the best trial ID. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the smallest trial ID among all Pareto optimal trials. */
		defaultTrialId?: string | null;

		/** Optional. A user-friendly description of this model. */
		description?: string | null;
		encryptionConfiguration?: EncryptionConfiguration;

		/** Output only. A hash of this resource. */
		etag?: string | null;

		/** Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models. */
		expirationTime?: string | null;

		/** Output only. Input feature columns for the model inference. If the model is trained with TRANSFORM clause, these are the input of the TRANSFORM clause. */
		featureColumns?: Array<StandardSqlField>;

		/** Optional. A descriptive name for this model. */
		friendlyName?: string | null;

		/** Hyperparameter search spaces. These should be a subset of training_options. */
		hparamSearchSpaces?: HparamSearchSpaces;

		/** Output only. Trials of a [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) model sorted by trial_id. */
		hparamTrials?: Array<HparamTuningTrial>;

		/** Output only. Label columns that were used to train this model. The output of the model will have a "predicted_" prefix to these columns. */
		labelColumns?: Array<StandardSqlField>;

		/** The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. */
		labels?: {[id: string]: string };

		/** Output only. The time when this model was last modified, in millisecs since the epoch. */
		lastModifiedTime?: string | null;

		/** Output only. The geographic location where the model resides. This value is inherited from the dataset. */
		location?: string | null;
		modelReference?: ModelReference;

		/** Output only. Type of the model resource. */
		modelType?: ModelModelType | null;

		/** Output only. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it only contains the best trial. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, it contains all Pareto optimal trials sorted by trial_id. */
		optimalTrialIds?: Array<string>;

		/** Remote Model Info */
		remoteModelInfo?: RemoteModelInfo;

		/** Information for all training runs in increasing order of start_time. */
		trainingRuns?: Array<TrainingRun>;

		/** Output only. This field will be populated if a TRANSFORM clause was used to train a model. TRANSFORM clause (if used) takes feature_columns as input and outputs transform_columns. transform_columns then are used to train the model. */
		transformColumns?: Array<TransformColumn>;
	}
	export interface ModelFormProperties {

		/** The best trial_id across all training runs. */
		bestTrialId: FormControl<string | null | undefined>,

		/** Output only. The time when this model was created, in millisecs since the epoch. */
		creationTime: FormControl<string | null | undefined>,

		/** Output only. The default trial_id to use in TVFs when the trial_id is not passed in. For single-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the best trial ID. For multi-objective [hyperparameter tuning](/bigquery-ml/docs/reference/standard-sql/bigqueryml-syntax-hp-tuning-overview) models, this is the smallest trial ID among all Pareto optimal trials. */
		defaultTrialId: FormControl<string | null | undefined>,

		/** Optional. A user-friendly description of this model. */
		description: FormControl<string | null | undefined>,

		/** Output only. A hash of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Optional. The time when this model expires, in milliseconds since the epoch. If not present, the model will persist indefinitely. Expired models will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created models. */
		expirationTime: FormControl<string | null | undefined>,

		/** Optional. A descriptive name for this model. */
		friendlyName: FormControl<string | null | undefined>,

		/** The labels associated with this model. You can use these to organize and group your models. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The time when this model was last modified, in millisecs since the epoch. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** Output only. The geographic location where the model resides. This value is inherited from the dataset. */
		location: FormControl<string | null | undefined>,

		/** Output only. Type of the model resource. */
		modelType: FormControl<ModelModelType | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			bestTrialId: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			defaultTrialId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<ModelModelType | null | undefined>(undefined),
		});

	}

	export enum ModelModelType { MODEL_TYPE_UNSPECIFIED = 0, LINEAR_REGRESSION = 1, LOGISTIC_REGRESSION = 2, KMEANS = 3, MATRIX_FACTORIZATION = 4, DNN_CLASSIFIER = 5, TENSORFLOW = 6, DNN_REGRESSOR = 7, XGBOOST = 8, BOOSTED_TREE_REGRESSOR = 9, BOOSTED_TREE_CLASSIFIER = 10, ARIMA = 11, AUTOML_REGRESSOR = 12, AUTOML_CLASSIFIER = 13, PCA = 14, DNN_LINEAR_COMBINED_CLASSIFIER = 15, DNN_LINEAR_COMBINED_REGRESSOR = 16, AUTOENCODER = 17, ARIMA_PLUS = 18, ARIMA_PLUS_XREG = 19, RANDOM_FOREST_REGRESSOR = 20, RANDOM_FOREST_CLASSIFIER = 21, TENSORFLOW_LITE = 22, ONNX = 23 }


	/** Remote Model Info */
	export interface RemoteModelInfo {

		/** Output only. Fully qualified name of the user-provided connection object of the remote model. Format: ```"projects/{project_id}/locations/{location_id}/connections/{connection_id}"``` */
		connection?: string | null;

		/** Output only. The endpoint for remote model. */
		endpoint?: string | null;

		/** Output only. Max number of rows in each batch sent to the remote service. If unset, the number of rows in each batch is set dynamically. */
		maxBatchingRows?: string | null;

		/** Output only. The model version for LLM. */
		remoteModelVersion?: string | null;

		/** Output only. The remote service type for remote model. */
		remoteServiceType?: RemoteModelInfoRemoteServiceType | null;

		/** Output only. The name of the speech recognizer to use for speech recognition. The expected format is `projects/{project}/locations/{location}/recognizers/{recognizer}`. Customers can specify this field at model creation. If not specified, a default recognizer `projects/{model project}/locations/global/recognizers/_` will be used. See more details at [recognizers](https://cloud.google.com/speech-to-text/v2/docs/reference/rest/v2/projects.locations.recognizers) */
		speechRecognizer?: string | null;
	}

	/** Remote Model Info */
	export interface RemoteModelInfoFormProperties {

		/** Output only. Fully qualified name of the user-provided connection object of the remote model. Format: ```"projects/{project_id}/locations/{location_id}/connections/{connection_id}"``` */
		connection: FormControl<string | null | undefined>,

		/** Output only. The endpoint for remote model. */
		endpoint: FormControl<string | null | undefined>,

		/** Output only. Max number of rows in each batch sent to the remote service. If unset, the number of rows in each batch is set dynamically. */
		maxBatchingRows: FormControl<string | null | undefined>,

		/** Output only. The model version for LLM. */
		remoteModelVersion: FormControl<string | null | undefined>,

		/** Output only. The remote service type for remote model. */
		remoteServiceType: FormControl<RemoteModelInfoRemoteServiceType | null | undefined>,

		/** Output only. The name of the speech recognizer to use for speech recognition. The expected format is `projects/{project}/locations/{location}/recognizers/{recognizer}`. Customers can specify this field at model creation. If not specified, a default recognizer `projects/{model project}/locations/global/recognizers/_` will be used. See more details at [recognizers](https://cloud.google.com/speech-to-text/v2/docs/reference/rest/v2/projects.locations.recognizers) */
		speechRecognizer: FormControl<string | null | undefined>,
	}
	export function CreateRemoteModelInfoFormGroup() {
		return new FormGroup<RemoteModelInfoFormProperties>({
			connection: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			maxBatchingRows: new FormControl<string | null | undefined>(undefined),
			remoteModelVersion: new FormControl<string | null | undefined>(undefined),
			remoteServiceType: new FormControl<RemoteModelInfoRemoteServiceType | null | undefined>(undefined),
			speechRecognizer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RemoteModelInfoRemoteServiceType { REMOTE_SERVICE_TYPE_UNSPECIFIED = 0, CLOUD_AI_TRANSLATE_V3 = 1, CLOUD_AI_VISION_V1 = 2, CLOUD_AI_NATURAL_LANGUAGE_V1 = 3, CLOUD_AI_SPEECH_TO_TEXT_V2 = 4 }


	/** Information about a single training query run for the model. */
	export interface TrainingRun {

		/** Output only. Global explanation contains the explanation of top features on the class level. Applies to classification models only. */
		classLevelGlobalExplanations?: Array<GlobalExplanation>;

		/** Data split result. This contains references to the training and evaluation data tables that were used to train the model. */
		dataSplitResult?: DataSplitResult;

		/** Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models. */
		evaluationMetrics?: EvaluationMetrics;

		/** Global explanations containing the top most important features after training. */
		modelLevelGlobalExplanation?: GlobalExplanation;

		/** Output only. Output of each iteration run, results.size() <= max_iterations. */
		results?: Array<IterationResult>;

		/** Output only. The start time of this training run. */
		startTime?: string | null;

		/** Options used in model training. */
		trainingOptions?: TrainingOptions;

		/** Output only. The start time of this training run, in milliseconds since epoch. */
		trainingStartTime?: string | null;

		/** The model id in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run. */
		vertexAiModelId?: string | null;

		/** Output only. The model version in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run. */
		vertexAiModelVersion?: string | null;
	}

	/** Information about a single training query run for the model. */
	export interface TrainingRunFormProperties {

		/** Output only. The start time of this training run. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The start time of this training run, in milliseconds since epoch. */
		trainingStartTime: FormControl<string | null | undefined>,

		/** The model id in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run. */
		vertexAiModelId: FormControl<string | null | undefined>,

		/** Output only. The model version in the [Vertex AI Model Registry](https://cloud.google.com/vertex-ai/docs/model-registry/introduction) for this training run. */
		vertexAiModelVersion: FormControl<string | null | undefined>,
	}
	export function CreateTrainingRunFormGroup() {
		return new FormGroup<TrainingRunFormProperties>({
			startTime: new FormControl<string | null | undefined>(undefined),
			trainingStartTime: new FormControl<string | null | undefined>(undefined),
			vertexAiModelId: new FormControl<string | null | undefined>(undefined),
			vertexAiModelVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a single transform column. */
	export interface TransformColumn {

		/** Output only. Name of the column. */
		name?: string | null;

		/** Output only. The SQL expression used in the column transform. */
		transformSql?: string | null;

		/** The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } } */
		type?: StandardSqlDataType;
	}

	/** Information about a single transform column. */
	export interface TransformColumnFormProperties {

		/** Output only. Name of the column. */
		name: FormControl<string | null | undefined>,

		/** Output only. The SQL expression used in the column transform. */
		transformSql: FormControl<string | null | undefined>,
	}
	export function CreateTransformColumnFormGroup() {
		return new FormGroup<TransformColumnFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			transformSql: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the format of a single result page when listing routines. */
	export interface ListRoutinesResponse {

		/** A token to request the next page of results. */
		nextPageToken?: string | null;

		/** Routines in the requested dataset. Unless read_mask is set in the request, only the following fields are populated: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, language, and remote_function_options. */
		routines?: Array<Routine>;
	}

	/** Describes the format of a single result page when listing routines. */
	export interface ListRoutinesResponseFormProperties {

		/** A token to request the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRoutinesResponseFormGroup() {
		return new FormGroup<ListRoutinesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A user-defined function or a stored procedure. */
	export interface Routine {

		/** Optional. */
		arguments?: Array<Argument>;

		/** Output only. The time when this routine was created, in milliseconds since the epoch. */
		creationTime?: string | null;

		/** Optional. If set to `DATA_MASKING`, the function is validated and made available as a masking function. For more information, see [Create custom masking routines](https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask). */
		dataGovernanceType?: RoutineDataGovernanceType | null;

		/** Required. The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))` The definition_body is `concat(x, "\n", y)` (\n is not replaced with linebreak). If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'` The definition_body is `return "\n";\n` Note that both \n are replaced with linebreaks. */
		definitionBody?: string | null;

		/** Optional. The description of the routine, if defined. */
		description?: string | null;

		/** Optional. The determinism level of the JavaScript UDF, if defined. */
		determinismLevel?: RoutineDeterminismLevel | null;

		/** Output only. A hash of this resource. */
		etag?: string | null;

		/** Optional. If language = "JAVASCRIPT", this field stores the path of the imported JAVASCRIPT libraries. */
		importedLibraries?: Array<string>;

		/** Optional. Defaults to "SQL" if remote_function_options field is absent, not set otherwise. */
		language?: RoutineLanguage | null;

		/** Output only. The time when this routine was last modified, in milliseconds since the epoch. */
		lastModifiedTime?: string | null;

		/** Options for a remote user-defined function. */
		remoteFunctionOptions?: RemoteFunctionOptions;

		/** A table type */
		returnTableType?: StandardSqlTableType;

		/** The data type of a variable such as a function argument. Examples include: * INT64: `{"typeKind": "INT64"}` * ARRAY: { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "STRING"} } * STRUCT>: { "typeKind": "STRUCT", "structType": { "fields": [ { "name": "x", "type": {"typeKind": "STRING"} }, { "name": "y", "type": { "typeKind": "ARRAY", "arrayElementType": {"typeKind": "DATE"} } } ] } } */
		returnType?: StandardSqlDataType;
		routineReference?: RoutineReference;

		/** Required. The type of routine. */
		routineType?: RoutineRoutineType | null;

		/** Optional. The security mode of the routine, if defined. If not defined, the security mode is automatically determined from the routine's configuration. */
		securityMode?: RoutineSecurityMode | null;

		/** Options for a user-defined Spark routine. */
		sparkOptions?: SparkOptions;

		/** Optional. Can be set for procedures only. If true (default), the definition body will be validated in the creation and the updates of the procedure. For procedures with an argument of ANY TYPE, the definition body validtion is not supported at creation/update time, and thus this field must be set to false explicitly. */
		strictMode?: boolean | null;
	}

	/** A user-defined function or a stored procedure. */
	export interface RoutineFormProperties {

		/** Output only. The time when this routine was created, in milliseconds since the epoch. */
		creationTime: FormControl<string | null | undefined>,

		/** Optional. If set to `DATA_MASKING`, the function is validated and made available as a masking function. For more information, see [Create custom masking routines](https://cloud.google.com/bigquery/docs/user-defined-functions#custom-mask). */
		dataGovernanceType: FormControl<RoutineDataGovernanceType | null | undefined>,

		/** Required. The body of the routine. For functions, this is the expression in the AS clause. If language=SQL, it is the substring inside (but excluding) the parentheses. For example, for the function created with the following statement: `CREATE FUNCTION JoinLines(x string, y string) as (concat(x, "\n", y))` The definition_body is `concat(x, "\n", y)` (\n is not replaced with linebreak). If language=JAVASCRIPT, it is the evaluated string in the AS clause. For example, for the function created with the following statement: `CREATE FUNCTION f() RETURNS STRING LANGUAGE js AS 'return "\n";\n'` The definition_body is `return "\n";\n` Note that both \n are replaced with linebreaks. */
		definitionBody: FormControl<string | null | undefined>,

		/** Optional. The description of the routine, if defined. */
		description: FormControl<string | null | undefined>,

		/** Optional. The determinism level of the JavaScript UDF, if defined. */
		determinismLevel: FormControl<RoutineDeterminismLevel | null | undefined>,

		/** Output only. A hash of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Optional. Defaults to "SQL" if remote_function_options field is absent, not set otherwise. */
		language: FormControl<RoutineLanguage | null | undefined>,

		/** Output only. The time when this routine was last modified, in milliseconds since the epoch. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** Required. The type of routine. */
		routineType: FormControl<RoutineRoutineType | null | undefined>,

		/** Optional. The security mode of the routine, if defined. If not defined, the security mode is automatically determined from the routine's configuration. */
		securityMode: FormControl<RoutineSecurityMode | null | undefined>,

		/** Optional. Can be set for procedures only. If true (default), the definition body will be validated in the creation and the updates of the procedure. For procedures with an argument of ANY TYPE, the definition body validtion is not supported at creation/update time, and thus this field must be set to false explicitly. */
		strictMode: FormControl<boolean | null | undefined>,
	}
	export function CreateRoutineFormGroup() {
		return new FormGroup<RoutineFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			dataGovernanceType: new FormControl<RoutineDataGovernanceType | null | undefined>(undefined),
			definitionBody: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			determinismLevel: new FormControl<RoutineDeterminismLevel | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<RoutineLanguage | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			routineType: new FormControl<RoutineRoutineType | null | undefined>(undefined),
			securityMode: new FormControl<RoutineSecurityMode | null | undefined>(undefined),
			strictMode: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum RoutineDataGovernanceType { DATA_GOVERNANCE_TYPE_UNSPECIFIED = 0, DATA_MASKING = 1 }

	export enum RoutineDeterminismLevel { DETERMINISM_LEVEL_UNSPECIFIED = 0, DETERMINISTIC = 1, NOT_DETERMINISTIC = 2 }

	export enum RoutineLanguage { LANGUAGE_UNSPECIFIED = 0, SQL = 1, JAVASCRIPT = 2, PYTHON = 3, JAVA = 4, SCALA = 5 }


	/** Options for a remote user-defined function. */
	export interface RemoteFunctionOptions {

		/** Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. Format: ```"projects/{projectId}/locations/{locationId}/connections/{connectionId}"``` */
		connection?: string | null;

		/** Endpoint of the user-provided remote service, e.g. ```https://us-east1-my_gcf_project.cloudfunctions.net/remote_add``` */
		endpoint?: string | null;

		/** Max number of rows in each batch sent to the remote service. If absent or if 0, BigQuery dynamically decides the number of rows in a batch. */
		maxBatchingRows?: string | null;

		/** User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. The total number of bytes of keys and values must be less than 8KB. */
		userDefinedContext?: {[id: string]: string };
	}

	/** Options for a remote user-defined function. */
	export interface RemoteFunctionOptionsFormProperties {

		/** Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. Format: ```"projects/{projectId}/locations/{locationId}/connections/{connectionId}"``` */
		connection: FormControl<string | null | undefined>,

		/** Endpoint of the user-provided remote service, e.g. ```https://us-east1-my_gcf_project.cloudfunctions.net/remote_add``` */
		endpoint: FormControl<string | null | undefined>,

		/** Max number of rows in each batch sent to the remote service. If absent or if 0, BigQuery dynamically decides the number of rows in a batch. */
		maxBatchingRows: FormControl<string | null | undefined>,

		/** User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. The total number of bytes of keys and values must be less than 8KB. */
		userDefinedContext: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateRemoteFunctionOptionsFormGroup() {
		return new FormGroup<RemoteFunctionOptionsFormProperties>({
			connection: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			maxBatchingRows: new FormControl<string | null | undefined>(undefined),
			userDefinedContext: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A table type */
	export interface StandardSqlTableType {

		/** The columns in this table type */
		columns?: Array<StandardSqlField>;
	}

	/** A table type */
	export interface StandardSqlTableTypeFormProperties {
	}
	export function CreateStandardSqlTableTypeFormGroup() {
		return new FormGroup<StandardSqlTableTypeFormProperties>({
		});

	}

	export enum RoutineRoutineType { ROUTINE_TYPE_UNSPECIFIED = 0, SCALAR_FUNCTION = 1, PROCEDURE = 2, TABLE_VALUED_FUNCTION = 3, AGGREGATE_FUNCTION = 4 }

	export enum RoutineSecurityMode { SECURITY_MODE_UNSPECIFIED = 0, DEFINER = 1, INVOKER = 2 }


	/** Options for a user-defined Spark routine. */
	export interface SparkOptions {

		/** Archive files to be extracted into the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html). */
		archiveUris?: Array<string>;

		/** Fully qualified name of the user-provided Spark connection object. Format: ```"projects/{project_id}/locations/{location_id}/connections/{connection_id}"``` */
		connection?: string | null;

		/** Custom container image for the runtime environment. */
		containerImage?: string | null;

		/** Files to be placed in the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html). */
		fileUris?: Array<string>;

		/** JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html). */
		jarUris?: Array<string>;

		/** The fully qualified name of a class in jar_uris, for example, com.example.wordcount. Exactly one of main_class and main_jar_uri field should be set for Java/Scala language type. */
		mainClass?: string | null;

		/** The main file/jar URI of the Spark application. Exactly one of the definition_body field and the main_file_uri field must be set for Python. Exactly one of main_class and main_file_uri field should be set for Java/Scala language type. */
		mainFileUri?: string | null;

		/** Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. For more information, see [Apache Spark](https://spark.apache.org/docs/latest/index.html) and the [procedure option list](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#procedure_option_list). */
		properties?: {[id: string]: string };

		/** Python files to be placed on the PYTHONPATH for PySpark application. Supported file types: `.py`, `.egg`, and `.zip`. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html). */
		pyFileUris?: Array<string>;

		/** Runtime version. If not specified, the default runtime version is used. */
		runtimeVersion?: string | null;
	}

	/** Options for a user-defined Spark routine. */
	export interface SparkOptionsFormProperties {

		/** Fully qualified name of the user-provided Spark connection object. Format: ```"projects/{project_id}/locations/{location_id}/connections/{connection_id}"``` */
		connection: FormControl<string | null | undefined>,

		/** Custom container image for the runtime environment. */
		containerImage: FormControl<string | null | undefined>,

		/** The fully qualified name of a class in jar_uris, for example, com.example.wordcount. Exactly one of main_class and main_jar_uri field should be set for Java/Scala language type. */
		mainClass: FormControl<string | null | undefined>,

		/** The main file/jar URI of the Spark application. Exactly one of the definition_body field and the main_file_uri field must be set for Python. Exactly one of main_class and main_file_uri field should be set for Java/Scala language type. */
		mainFileUri: FormControl<string | null | undefined>,

		/** Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. For more information, see [Apache Spark](https://spark.apache.org/docs/latest/index.html) and the [procedure option list](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#procedure_option_list). */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Runtime version. If not specified, the default runtime version is used. */
		runtimeVersion: FormControl<string | null | undefined>,
	}
	export function CreateSparkOptionsFormGroup() {
		return new FormGroup<SparkOptionsFormProperties>({
			connection: new FormControl<string | null | undefined>(undefined),
			containerImage: new FormControl<string | null | undefined>(undefined),
			mainClass: new FormControl<string | null | undefined>(undefined),
			mainFileUri: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			runtimeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the ListRowAccessPolicies method. */
	export interface ListRowAccessPoliciesResponse {

		/** A token to request the next page of results. */
		nextPageToken?: string | null;

		/** Row access policies on the requested table. */
		rowAccessPolicies?: Array<RowAccessPolicy>;
	}

	/** Response message for the ListRowAccessPolicies method. */
	export interface ListRowAccessPoliciesResponseFormProperties {

		/** A token to request the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListRowAccessPoliciesResponseFormGroup() {
		return new FormGroup<ListRowAccessPoliciesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy. */
	export interface RowAccessPolicy {

		/** Output only. The time when this row access policy was created, in milliseconds since the epoch. */
		creationTime?: string | null;

		/** Output only. A hash of this resource. */
		etag?: string | null;

		/** Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions are not supported. Examples: region="EU" date_field = CAST('2019-9-27' as DATE) nullable_field is not NULL numeric_field BETWEEN 1.0 AND 5.0 */
		filterPredicate?: string | null;

		/** Output only. The time when this row access policy was last modified, in milliseconds since the epoch. */
		lastModifiedTime?: string | null;
		rowAccessPolicyReference?: RowAccessPolicyReference;
	}

	/** Represents access on a subset of rows on the specified table, defined by its filter predicate. Access to the subset of rows is controlled by its IAM policy. */
	export interface RowAccessPolicyFormProperties {

		/** Output only. The time when this row access policy was created, in milliseconds since the epoch. */
		creationTime: FormControl<string | null | undefined>,

		/** Output only. A hash of this resource. */
		etag: FormControl<string | null | undefined>,

		/** Required. A SQL boolean expression that represents the rows defined by this row access policy, similar to the boolean expression in a WHERE clause of a SELECT query on a table. References to other tables, routines, and temporary functions are not supported. Examples: region="EU" date_field = CAST('2019-9-27' as DATE) nullable_field is not NULL numeric_field BETWEEN 1.0 AND 5.0 */
		filterPredicate: FormControl<string | null | undefined>,

		/** Output only. The time when this row access policy was last modified, in milliseconds since the epoch. */
		lastModifiedTime: FormControl<string | null | undefined>,
	}
	export function CreateRowAccessPolicyFormGroup() {
		return new FormGroup<RowAccessPolicyFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			filterPredicate: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** BigQuery-specific metadata about a location. This will be set on google.cloud.location.Location.metadata in Cloud Location API responses. */
	export interface LocationMetadata {

		/** The legacy BigQuery location ID, e.g. “EU” for the “europe” location. This is for any API consumers that need the legacy “US” and “EU” locations. */
		legacyLocationId?: string | null;
	}

	/** BigQuery-specific metadata about a location. This will be set on google.cloud.location.Location.metadata in Cloud Location API responses. */
	export interface LocationMetadataFormProperties {

		/** The legacy BigQuery location ID, e.g. “EU” for the “europe” location. This is for any API consumers that need the legacy “US” and “EU” locations. */
		legacyLocationId: FormControl<string | null | undefined>,
	}
	export function CreateLocationMetadataFormGroup() {
		return new FormGroup<LocationMetadataFormProperties>({
			legacyLocationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MaterializedViewDefinition {

		/** [Optional] Allow non incremental materialized view definition. The default value is "false". */
		allowNonIncrementalDefinition?: boolean | null;

		/** [Optional] [TrustedTester] Enable automatic refresh of the materialized view when the base table is updated. The default value is "true". */
		enableRefresh?: boolean | null;

		/** [Output-only] [TrustedTester] The time when this materialized view was last modified, in milliseconds since the epoch. */
		lastRefreshTime?: string | null;

		/** [Optional] Max staleness of data that could be returned when materizlized view is queried (formatted as Google SQL Interval type). */
		maxStaleness?: string | null;

		/** [Required] A query whose result is persisted. */
		query?: string | null;

		/** [Optional] [TrustedTester] The maximum frequency at which this materialized view will be refreshed. The default value is "1800000" (30 minutes). */
		refreshIntervalMs?: string | null;
	}
	export interface MaterializedViewDefinitionFormProperties {

		/** [Optional] Allow non incremental materialized view definition. The default value is "false". */
		allowNonIncrementalDefinition: FormControl<boolean | null | undefined>,

		/** [Optional] [TrustedTester] Enable automatic refresh of the materialized view when the base table is updated. The default value is "true". */
		enableRefresh: FormControl<boolean | null | undefined>,

		/** [Output-only] [TrustedTester] The time when this materialized view was last modified, in milliseconds since the epoch. */
		lastRefreshTime: FormControl<string | null | undefined>,

		/** [Optional] Max staleness of data that could be returned when materizlized view is queried (formatted as Google SQL Interval type). */
		maxStaleness: FormControl<string | null | undefined>,

		/** [Required] A query whose result is persisted. */
		query: FormControl<string | null | undefined>,

		/** [Optional] [TrustedTester] The maximum frequency at which this materialized view will be refreshed. The default value is "1800000" (30 minutes). */
		refreshIntervalMs: FormControl<string | null | undefined>,
	}
	export function CreateMaterializedViewDefinitionFormGroup() {
		return new FormGroup<MaterializedViewDefinitionFormProperties>({
			allowNonIncrementalDefinition: new FormControl<boolean | null | undefined>(undefined),
			enableRefresh: new FormControl<boolean | null | undefined>(undefined),
			lastRefreshTime: new FormControl<string | null | undefined>(undefined),
			maxStaleness: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			refreshIntervalMs: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ModelDefinition {

		/** [Output-only, Beta] Model options used for the first training run. These options are immutable for subsequent training runs. Default values are used for any options not specified in the input query. */
		modelOptions?: ModelDefinitionModelOptions;

		/** [Output-only, Beta] Information about ml training runs, each training run comprises of multiple iterations and there may be multiple training runs for the model if warm start is used or if a user decides to continue a previously cancelled query. */
		trainingRuns?: Array<BqmlTrainingRun>;
	}
	export interface ModelDefinitionFormProperties {
	}
	export function CreateModelDefinitionFormGroup() {
		return new FormGroup<ModelDefinitionFormProperties>({
		});

	}

	export interface ModelDefinitionModelOptions {
		labels?: Array<string>;
		lossType?: string | null;
		modelType?: string | null;
	}
	export interface ModelDefinitionModelOptionsFormProperties {
		lossType: FormControl<string | null | undefined>,
		modelType: FormControl<string | null | undefined>,
	}
	export function CreateModelDefinitionModelOptionsFormGroup() {
		return new FormGroup<ModelDefinitionModelOptionsFormProperties>({
			lossType: new FormControl<string | null | undefined>(undefined),
			modelType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface Policy {

		/** Specifies cloud audit logging configuration for this policy. */
		auditConfigs?: Array<AuditConfig>;

		/** Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`. */
		bindings?: Array<Binding>;

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag?: string | null;

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version?: number | null;
	}

	/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
	export interface PolicyFormProperties {

		/** `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. */
		etag: FormControl<string | null | undefined>,

		/** Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). */
		version: FormControl<number | null | undefined>,
	}
	export function CreatePolicyFormGroup() {
		return new FormGroup<PolicyFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Principal component infos, used only for eigen decomposition based models, e.g., PCA. Ordered by explained_variance in the descending order. */
	export interface PrincipalComponentInfo {

		/** The explained_variance is pre-ordered in the descending order to compute the cumulative explained variance ratio. */
		cumulativeExplainedVarianceRatio?: number | null;

		/** Explained variance by this principal component, which is simply the eigenvalue. */
		explainedVariance?: number | null;

		/** Explained_variance over the total explained variance. */
		explainedVarianceRatio?: number | null;

		/** Id of the principal component. */
		principalComponentId?: string | null;
	}

	/** Principal component infos, used only for eigen decomposition based models, e.g., PCA. Ordered by explained_variance in the descending order. */
	export interface PrincipalComponentInfoFormProperties {

		/** The explained_variance is pre-ordered in the descending order to compute the cumulative explained variance ratio. */
		cumulativeExplainedVarianceRatio: FormControl<number | null | undefined>,

		/** Explained variance by this principal component, which is simply the eigenvalue. */
		explainedVariance: FormControl<number | null | undefined>,

		/** Explained_variance over the total explained variance. */
		explainedVarianceRatio: FormControl<number | null | undefined>,

		/** Id of the principal component. */
		principalComponentId: FormControl<string | null | undefined>,
	}
	export function CreatePrincipalComponentInfoFormGroup() {
		return new FormGroup<PrincipalComponentInfoFormProperties>({
			cumulativeExplainedVarianceRatio: new FormControl<number | null | undefined>(undefined),
			explainedVariance: new FormControl<number | null | undefined>(undefined),
			explainedVarianceRatio: new FormControl<number | null | undefined>(undefined),
			principalComponentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents privacy policy that contains the privacy requirements specified by the data owner. Currently, this is only supported on views. */
	export interface PrivacyPolicy {

		/** Represents privacy policy associated with "aggregation threshold" method. */
		aggregationThresholdPolicy?: AggregationThresholdPolicy;
	}

	/** Represents privacy policy that contains the privacy requirements specified by the data owner. Currently, this is only supported on views. */
	export interface PrivacyPolicyFormProperties {
	}
	export function CreatePrivacyPolicyFormGroup() {
		return new FormGroup<PrivacyPolicyFormProperties>({
		});

	}

	export interface ProjectList {

		/** A hash of the page of results */
		etag?: string | null;

		/** The type of list. */
		kind?: string | null;

		/** A token to request the next page of results. */
		nextPageToken?: string | null;

		/** Projects to which you have at least READ access. */
		ProjectListProjects?: Array<ProjectListProjects>;

		/** The total number of projects in the list. */
		totalItems?: number | null;
	}
	export interface ProjectListFormProperties {

		/** A hash of the page of results */
		etag: FormControl<string | null | undefined>,

		/** The type of list. */
		kind: FormControl<string | null | undefined>,

		/** A token to request the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of projects in the list. */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateProjectListFormGroup() {
		return new FormGroup<ProjectListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProjectListProjects {

		/** A descriptive name for this project. */
		friendlyName?: string | null;

		/** An opaque ID of this project. */
		id?: string | null;

		/** The resource type. */
		kind?: string | null;

		/** The numeric ID of this project. */
		numericId?: string | null;
		projectReference?: ProjectReference;
	}
	export interface ProjectListProjectsFormProperties {

		/** A descriptive name for this project. */
		friendlyName: FormControl<string | null | undefined>,

		/** An opaque ID of this project. */
		id: FormControl<string | null | undefined>,

		/** The resource type. */
		kind: FormControl<string | null | undefined>,

		/** The numeric ID of this project. */
		numericId: FormControl<string | null | undefined>,
	}
	export function CreateProjectListProjectsFormGroup() {
		return new FormGroup<ProjectListProjectsFormProperties>({
			friendlyName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			numericId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectReference {

		/** [Required] ID of the project. Can be either the numeric ID or the assigned ID of the project. */
		projectId?: string | null;
	}
	export interface ProjectReferenceFormProperties {

		/** [Required] ID of the project. Can be either the numeric ID or the assigned ID of the project. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateProjectReferenceFormGroup() {
		return new FormGroup<ProjectReferenceFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QueryRequest {

		/** Connection properties. */
		connectionProperties?: Array<ConnectionProperty>;

		/** [Optional] Specifies whether the query should be executed as a continuous query. The default value is false. */
		continuous?: boolean | null;

		/** If true, creates a new session, where session id will be a server generated random id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs query in non-session mode. */
		createSession?: boolean | null;
		defaultDataset?: DatasetReference;

		/** [Optional] If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false. */
		dryRun?: boolean | null;

		/** Optional. If not set, jobs are always required. If set, the query request will follow the behavior described JobCreationMode. This feature is not yet available. Jobs will always be created. */
		jobCreationMode?: string | null;

		/** The resource type of the request. */
		kind?: string | null;

		/** The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. */
		labels?: {[id: string]: string };

		/** The geographic location where the job should run. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location. */
		location?: string | null;

		/** [Optional] The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies. */
		maxResults?: number | null;

		/** [Optional] Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default. */
		maximumBytesBilled?: string | null;

		/** Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query. */
		parameterMode?: string | null;

		/** [Deprecated] This property is deprecated. */
		preserveNulls?: boolean | null;

		/** [Required] A query string, following the BigQuery query syntax, of the query to execute. Example: "SELECT count(f1) FROM [myProjectId:myDatasetId.myTableId]". */
		query?: string | null;

		/** Query parameters for Standard SQL queries. */
		queryParameters?: Array<QueryParameter>;

		/** A unique user provided identifier to ensure idempotent behavior for queries. Note that this is different from the job_id. It has the following properties: 1. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended. 2. Read only queries can ignore this token since they are nullipotent by definition. 3. For the purposes of idempotency ensured by the request_id, a request is considered duplicate of another only if they have the same request_id and are actually duplicates. When determining whether a request is a duplicate of the previous request, all parameters in the request that may affect the behavior are considered. For example, query, connection_properties, query_parameters, use_legacy_sql are parameters that affect the result and are considered when determining whether a request is a duplicate, but properties like timeout_ms don't affect the result and are thus not considered. Dry run query requests are never considered duplicate of another request. 4. When a duplicate mutating query request is detected, it returns: a. the results of the mutation if it completes successfully within the timeout. b. the running operation if it is still in progress at the end of the timeout. 5. Its lifetime is limited to 15 minutes. In other words, if two requests are sent with the same request_id, but more than 15 minutes apart, idempotency is not guaranteed. */
		requestId?: string | null;

		/** [Optional] How long to wait for the query to complete, in milliseconds, before the request times out and returns. Note that this is only a timeout for the request, not the query. If the query takes longer to run than the timeout value, the call returns without any results and with the 'jobComplete' flag set to false. You can call GetQueryResults() to wait for the query to complete and read the results. The default value is 10000 milliseconds (10 seconds). */
		timeoutMs?: number | null;

		/** Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false. */
		useLegacySql?: boolean | null;

		/** [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true. */
		useQueryCache?: boolean | null;
	}
	export interface QueryRequestFormProperties {

		/** [Optional] Specifies whether the query should be executed as a continuous query. The default value is false. */
		continuous: FormControl<boolean | null | undefined>,

		/** If true, creates a new session, where session id will be a server generated random id. If false, runs query with an existing session_id passed in ConnectionProperty, otherwise runs query in non-session mode. */
		createSession: FormControl<boolean | null | undefined>,

		/** [Optional] If set to true, BigQuery doesn't run the job. Instead, if the query is valid, BigQuery returns statistics about the job such as how many bytes would be processed. If the query is invalid, an error returns. The default value is false. */
		dryRun: FormControl<boolean | null | undefined>,

		/** Optional. If not set, jobs are always required. If set, the query request will follow the behavior described JobCreationMode. This feature is not yet available. Jobs will always be created. */
		jobCreationMode: FormControl<string | null | undefined>,

		/** The resource type of the request. */
		kind: FormControl<string | null | undefined>,

		/** The labels associated with this job. You can use these to organize and group your jobs. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The geographic location where the job should run. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location. */
		location: FormControl<string | null | undefined>,

		/** [Optional] The maximum number of rows of data to return per page of results. Setting this flag to a small value such as 1000 and then paging through results might improve reliability when the query result set is large. In addition to this limit, responses are also limited to 10 MB. By default, there is no maximum row count, and only the byte limit applies. */
		maxResults: FormControl<number | null | undefined>,

		/** [Optional] Limits the bytes billed for this job. Queries that will have bytes billed beyond this limit will fail (without incurring a charge). If unspecified, this will be set to your project default. */
		maximumBytesBilled: FormControl<string | null | undefined>,

		/** Standard SQL only. Set to POSITIONAL to use positional (?) query parameters or to NAMED to use named (@myparam) query parameters in this query. */
		parameterMode: FormControl<string | null | undefined>,

		/** [Deprecated] This property is deprecated. */
		preserveNulls: FormControl<boolean | null | undefined>,

		/** [Required] A query string, following the BigQuery query syntax, of the query to execute. Example: "SELECT count(f1) FROM [myProjectId:myDatasetId.myTableId]". */
		query: FormControl<string | null | undefined>,

		/** A unique user provided identifier to ensure idempotent behavior for queries. Note that this is different from the job_id. It has the following properties: 1. It is case-sensitive, limited to up to 36 ASCII characters. A UUID is recommended. 2. Read only queries can ignore this token since they are nullipotent by definition. 3. For the purposes of idempotency ensured by the request_id, a request is considered duplicate of another only if they have the same request_id and are actually duplicates. When determining whether a request is a duplicate of the previous request, all parameters in the request that may affect the behavior are considered. For example, query, connection_properties, query_parameters, use_legacy_sql are parameters that affect the result and are considered when determining whether a request is a duplicate, but properties like timeout_ms don't affect the result and are thus not considered. Dry run query requests are never considered duplicate of another request. 4. When a duplicate mutating query request is detected, it returns: a. the results of the mutation if it completes successfully within the timeout. b. the running operation if it is still in progress at the end of the timeout. 5. Its lifetime is limited to 15 minutes. In other words, if two requests are sent with the same request_id, but more than 15 minutes apart, idempotency is not guaranteed. */
		requestId: FormControl<string | null | undefined>,

		/** [Optional] How long to wait for the query to complete, in milliseconds, before the request times out and returns. Note that this is only a timeout for the request, not the query. If the query takes longer to run than the timeout value, the call returns without any results and with the 'jobComplete' flag set to false. You can call GetQueryResults() to wait for the query to complete and read the results. The default value is 10000 milliseconds (10 seconds). */
		timeoutMs: FormControl<number | null | undefined>,

		/** Specifies whether to use BigQuery's legacy SQL dialect for this query. The default value is true. If set to false, the query will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ When useLegacySql is set to false, the value of flattenResults is ignored; query will be run as if flattenResults is false. */
		useLegacySql: FormControl<boolean | null | undefined>,

		/** [Optional] Whether to look for the result in the query cache. The query cache is a best-effort cache that will be flushed whenever tables in the query are modified. The default value is true. */
		useQueryCache: FormControl<boolean | null | undefined>,
	}
	export function CreateQueryRequestFormGroup() {
		return new FormGroup<QueryRequestFormProperties>({
			continuous: new FormControl<boolean | null | undefined>(undefined),
			createSession: new FormControl<boolean | null | undefined>(undefined),
			dryRun: new FormControl<boolean | null | undefined>(undefined),
			jobCreationMode: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			maximumBytesBilled: new FormControl<string | null | undefined>(undefined),
			parameterMode: new FormControl<string | null | undefined>(undefined),
			preserveNulls: new FormControl<boolean | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			timeoutMs: new FormControl<number | null | undefined>(undefined),
			useLegacySql: new FormControl<boolean | null | undefined>(undefined),
			useQueryCache: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface QueryResponse {

		/** Whether the query result was fetched from the query cache. */
		cacheHit?: boolean | null;
		dmlStats?: DmlStatistics;

		/** [Output-only] The first errors or warnings encountered during the running of the job. The final message includes the number of errors that caused the process to stop. Errors here do not necessarily mean that the job has completed or was unsuccessful. */
		errors?: Array<ErrorProto>;

		/** Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available. */
		jobComplete?: boolean | null;

		/** Optional. Only relevant when a job_reference is present in the response. If job_reference is not present it will always be unset. When job_reference is present, this field should be interpreted as follows: If set, it will provide the reason of why a Job was created. If not set, it should be treated as the default: REQUESTED. This feature is not yet available. Jobs will always be created. */
		jobCreationReason?: any;
		jobReference?: JobReference;

		/** The resource type. */
		kind?: string | null;

		/** [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. */
		numDmlAffectedRows?: string | null;

		/** A token used for paging results. */
		pageToken?: string | null;

		/** Query ID for the completed query. This ID will be auto-generated. This field is not yet available and it is currently not guaranteed to be populated. */
		queryId?: string | null;

		/** An object with as many results as can be contained within the maximum permitted reply size. To get any additional rows, you can call GetQueryResults and specify the jobReference returned above. */
		rows?: Array<TableRow>;
		schema?: TableSchema;
		sessionInfo?: SessionInfo;

		/** The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run. */
		totalBytesProcessed?: string | null;

		/** The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. */
		totalRows?: string | null;
	}
	export interface QueryResponseFormProperties {

		/** Whether the query result was fetched from the query cache. */
		cacheHit: FormControl<boolean | null | undefined>,

		/** Whether the query has completed or not. If rows or totalRows are present, this will always be true. If this is false, totalRows will not be available. */
		jobComplete: FormControl<boolean | null | undefined>,

		/** Optional. Only relevant when a job_reference is present in the response. If job_reference is not present it will always be unset. When job_reference is present, this field should be interpreted as follows: If set, it will provide the reason of why a Job was created. If not set, it should be treated as the default: REQUESTED. This feature is not yet available. Jobs will always be created. */
		jobCreationReason: FormControl<any | null | undefined>,

		/** The resource type. */
		kind: FormControl<string | null | undefined>,

		/** [Output-only] The number of rows affected by a DML statement. Present only for DML statements INSERT, UPDATE or DELETE. */
		numDmlAffectedRows: FormControl<string | null | undefined>,

		/** A token used for paging results. */
		pageToken: FormControl<string | null | undefined>,

		/** Query ID for the completed query. This ID will be auto-generated. This field is not yet available and it is currently not guaranteed to be populated. */
		queryId: FormControl<string | null | undefined>,

		/** The total number of bytes processed for this query. If this query was a dry run, this is the number of bytes that would be processed if the query were run. */
		totalBytesProcessed: FormControl<string | null | undefined>,

		/** The total number of rows in the complete query result set, which can be more than the number of rows in this single page of results. */
		totalRows: FormControl<string | null | undefined>,
	}
	export function CreateQueryResponseFormGroup() {
		return new FormGroup<QueryResponseFormProperties>({
			cacheHit: new FormControl<boolean | null | undefined>(undefined),
			jobComplete: new FormControl<boolean | null | undefined>(undefined),
			jobCreationReason: new FormControl<any | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			numDmlAffectedRows: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			queryId: new FormControl<string | null | undefined>(undefined),
			totalBytesProcessed: new FormControl<string | null | undefined>(undefined),
			totalRows: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequest {

		/** An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/). */
		policy?: Policy;

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask?: string | null;
	}

	/** Request message for `SetIamPolicy` method. */
	export interface SetIamPolicyRequestFormProperties {

		/** OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only the fields in the mask will be modified. If no mask is provided, the following default mask is used: `paths: "bindings, etag"` */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateSetIamPolicyRequestFormGroup() {
		return new FormGroup<SetIamPolicyRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SnapshotDefinition {
		baseTableReference?: TableReference;

		/** [Required] The time at which the base table was snapshot. This value is reported in the JSON response using RFC3339 format. */
		snapshotTime?: Date | null;
	}
	export interface SnapshotDefinitionFormProperties {

		/** [Required] The time at which the base table was snapshot. This value is reported in the JSON response using RFC3339 format. */
		snapshotTime: FormControl<Date | null | undefined>,
	}
	export function CreateSnapshotDefinitionFormGroup() {
		return new FormGroup<SnapshotDefinitionFormProperties>({
			snapshotTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Streamingbuffer {

		/** [Output-only] A lower-bound estimate of the number of bytes currently in the streaming buffer. */
		estimatedBytes?: string | null;

		/** [Output-only] A lower-bound estimate of the number of rows currently in the streaming buffer. */
		estimatedRows?: string | null;

		/** [Output-only] Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available. */
		oldestEntryTime?: string | null;
	}
	export interface StreamingbufferFormProperties {

		/** [Output-only] A lower-bound estimate of the number of bytes currently in the streaming buffer. */
		estimatedBytes: FormControl<string | null | undefined>,

		/** [Output-only] A lower-bound estimate of the number of rows currently in the streaming buffer. */
		estimatedRows: FormControl<string | null | undefined>,

		/** [Output-only] Contains the timestamp of the oldest entry in the streaming buffer, in milliseconds since the epoch, if the streaming buffer is available. */
		oldestEntryTime: FormControl<string | null | undefined>,
	}
	export function CreateStreamingbufferFormGroup() {
		return new FormGroup<StreamingbufferFormProperties>({
			estimatedBytes: new FormControl<string | null | undefined>(undefined),
			estimatedRows: new FormControl<string | null | undefined>(undefined),
			oldestEntryTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Table {
		biglakeConfiguration?: BigLakeConfiguration;
		cloneDefinition?: CloneDefinition;
		clustering?: Clustering;

		/** [Output-only] The time when this table was created, in milliseconds since the epoch. */
		creationTime?: string | null;

		/** [Output-only] The default collation of the table. */
		defaultCollation?: string | null;

		/** [Output-only] The default rounding mode of the table. */
		defaultRoundingMode?: string | null;

		/** [Optional] A user-friendly description of this table. */
		description?: string | null;
		encryptionConfiguration?: EncryptionConfiguration;

		/** [Output-only] A hash of the table metadata. Used to ensure there were no concurrent modifications to the resource when attempting an update. Not guaranteed to change when the table contents or the fields numRows, numBytes, numLongTermBytes or lastModifiedTime change. */
		etag?: string | null;

		/** [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables. */
		expirationTime?: string | null;
		externalDataConfiguration?: ExternalDataConfiguration;

		/** [Optional] A descriptive name for this table. */
		friendlyName?: string | null;

		/** [Output-only] An opaque ID uniquely identifying the table. */
		id?: string | null;

		/** [Output-only] The type of the resource. */
		kind?: string | null;

		/** The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. */
		labels?: {[id: string]: string };

		/** [Output-only] The time when this table was last modified, in milliseconds since the epoch. */
		lastModifiedTime?: string | null;

		/** [Output-only] The geographic location where the table resides. This value is inherited from the dataset. */
		location?: string | null;
		materializedView?: MaterializedViewDefinition;

		/** [Optional] Max staleness of data that could be returned when table or materialized view is queried (formatted as Google SQL Interval type). */
		maxStaleness?: string | null;
		model?: ModelDefinition;

		/** [Output-only] Number of logical bytes that are less than 90 days old. */
		numActiveLogicalBytes?: string | null;

		/** [Output-only] Number of physical bytes less than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. */
		numActivePhysicalBytes?: string | null;

		/** [Output-only] The size of this table in bytes, excluding any data in the streaming buffer. */
		numBytes?: string | null;

		/** [Output-only] The number of bytes in the table that are considered "long-term storage". */
		numLongTermBytes?: string | null;

		/** [Output-only] Number of logical bytes that are more than 90 days old. */
		numLongTermLogicalBytes?: string | null;

		/** [Output-only] Number of physical bytes more than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. */
		numLongTermPhysicalBytes?: string | null;

		/** [Output-only] The number of partitions present in the table or materialized view. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. */
		numPartitions?: string | null;

		/** [Output-only] [TrustedTester] The physical size of this table in bytes, excluding any data in the streaming buffer. This includes compression and storage used for time travel. */
		numPhysicalBytes?: string | null;

		/** [Output-only] The number of rows of data in this table, excluding any data in the streaming buffer. */
		numRows?: string | null;

		/** [Output-only] Number of physical bytes used by time travel storage (deleted or changed data). This data is not kept in real time, and might be delayed by a few seconds to a few minutes. */
		numTimeTravelPhysicalBytes?: string | null;

		/** [Output-only] Total number of logical bytes in the table or materialized view. */
		numTotalLogicalBytes?: string | null;

		/** [Output-only] The physical size of this table in bytes. This also includes storage used for time travel. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. */
		numTotalPhysicalBytes?: string | null;
		rangePartitioning?: RangePartitioning;

		/** [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. */
		requirePartitionFilter?: boolean | null;

		/** [Optional] The tags associated with this table. Tag keys are globally unique. See additional information on [tags](https://cloud.google.com/iam/docs/tags-access-control#definitions). An object containing a list of "key": value pairs. The key is the namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is parent id. The value is the friendly short name of the tag value, e.g. "production". */
		resourceTags?: {[id: string]: string };
		schema?: TableSchema;

		/** [Output-only] A URL that can be used to access this resource again. */
		selfLink?: string | null;
		snapshotDefinition?: SnapshotDefinition;
		streamingBuffer?: Streamingbuffer;
		tableConstraints?: TableConstraints;
		tableReference?: TableReference;
		timePartitioning?: TimePartitioning;

		/** [Output-only] Describes the table type. The following values are supported: TABLE: A normal BigQuery table. VIEW: A virtual table defined by a SQL query. SNAPSHOT: An immutable, read-only table that is a copy of another table. [TrustedTester] MATERIALIZED_VIEW: SQL query whose result is persisted. EXTERNAL: A table that references data stored in an external storage system, such as Google Cloud Storage. The default value is TABLE. */
		type?: string | null;
		view?: ViewDefinition;
	}
	export interface TableFormProperties {

		/** [Output-only] The time when this table was created, in milliseconds since the epoch. */
		creationTime: FormControl<string | null | undefined>,

		/** [Output-only] The default collation of the table. */
		defaultCollation: FormControl<string | null | undefined>,

		/** [Output-only] The default rounding mode of the table. */
		defaultRoundingMode: FormControl<string | null | undefined>,

		/** [Optional] A user-friendly description of this table. */
		description: FormControl<string | null | undefined>,

		/** [Output-only] A hash of the table metadata. Used to ensure there were no concurrent modifications to the resource when attempting an update. Not guaranteed to change when the table contents or the fields numRows, numBytes, numLongTermBytes or lastModifiedTime change. */
		etag: FormControl<string | null | undefined>,

		/** [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables. */
		expirationTime: FormControl<string | null | undefined>,

		/** [Optional] A descriptive name for this table. */
		friendlyName: FormControl<string | null | undefined>,

		/** [Output-only] An opaque ID uniquely identifying the table. */
		id: FormControl<string | null | undefined>,

		/** [Output-only] The type of the resource. */
		kind: FormControl<string | null | undefined>,

		/** The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** [Output-only] The time when this table was last modified, in milliseconds since the epoch. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** [Output-only] The geographic location where the table resides. This value is inherited from the dataset. */
		location: FormControl<string | null | undefined>,

		/** [Optional] Max staleness of data that could be returned when table or materialized view is queried (formatted as Google SQL Interval type). */
		maxStaleness: FormControl<string | null | undefined>,

		/** [Output-only] Number of logical bytes that are less than 90 days old. */
		numActiveLogicalBytes: FormControl<string | null | undefined>,

		/** [Output-only] Number of physical bytes less than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. */
		numActivePhysicalBytes: FormControl<string | null | undefined>,

		/** [Output-only] The size of this table in bytes, excluding any data in the streaming buffer. */
		numBytes: FormControl<string | null | undefined>,

		/** [Output-only] The number of bytes in the table that are considered "long-term storage". */
		numLongTermBytes: FormControl<string | null | undefined>,

		/** [Output-only] Number of logical bytes that are more than 90 days old. */
		numLongTermLogicalBytes: FormControl<string | null | undefined>,

		/** [Output-only] Number of physical bytes more than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. */
		numLongTermPhysicalBytes: FormControl<string | null | undefined>,

		/** [Output-only] The number of partitions present in the table or materialized view. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. */
		numPartitions: FormControl<string | null | undefined>,

		/** [Output-only] [TrustedTester] The physical size of this table in bytes, excluding any data in the streaming buffer. This includes compression and storage used for time travel. */
		numPhysicalBytes: FormControl<string | null | undefined>,

		/** [Output-only] The number of rows of data in this table, excluding any data in the streaming buffer. */
		numRows: FormControl<string | null | undefined>,

		/** [Output-only] Number of physical bytes used by time travel storage (deleted or changed data). This data is not kept in real time, and might be delayed by a few seconds to a few minutes. */
		numTimeTravelPhysicalBytes: FormControl<string | null | undefined>,

		/** [Output-only] Total number of logical bytes in the table or materialized view. */
		numTotalLogicalBytes: FormControl<string | null | undefined>,

		/** [Output-only] The physical size of this table in bytes. This also includes storage used for time travel. This data is not kept in real time, and might be delayed by a few seconds to a few minutes. */
		numTotalPhysicalBytes: FormControl<string | null | undefined>,

		/** [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified. */
		requirePartitionFilter: FormControl<boolean | null | undefined>,

		/** [Optional] The tags associated with this table. Tag keys are globally unique. See additional information on [tags](https://cloud.google.com/iam/docs/tags-access-control#definitions). An object containing a list of "key": value pairs. The key is the namespaced friendly name of the tag key, e.g. "12345/environment" where 12345 is parent id. The value is the friendly short name of the tag value, e.g. "production". */
		resourceTags: FormControl<{[id: string]: string } | null | undefined>,

		/** [Output-only] A URL that can be used to access this resource again. */
		selfLink: FormControl<string | null | undefined>,

		/** [Output-only] Describes the table type. The following values are supported: TABLE: A normal BigQuery table. VIEW: A virtual table defined by a SQL query. SNAPSHOT: An immutable, read-only table that is a copy of another table. [TrustedTester] MATERIALIZED_VIEW: SQL query whose result is persisted. EXTERNAL: A table that references data stored in an external storage system, such as Google Cloud Storage. The default value is TABLE. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			defaultCollation: new FormControl<string | null | undefined>(undefined),
			defaultRoundingMode: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			maxStaleness: new FormControl<string | null | undefined>(undefined),
			numActiveLogicalBytes: new FormControl<string | null | undefined>(undefined),
			numActivePhysicalBytes: new FormControl<string | null | undefined>(undefined),
			numBytes: new FormControl<string | null | undefined>(undefined),
			numLongTermBytes: new FormControl<string | null | undefined>(undefined),
			numLongTermLogicalBytes: new FormControl<string | null | undefined>(undefined),
			numLongTermPhysicalBytes: new FormControl<string | null | undefined>(undefined),
			numPartitions: new FormControl<string | null | undefined>(undefined),
			numPhysicalBytes: new FormControl<string | null | undefined>(undefined),
			numRows: new FormControl<string | null | undefined>(undefined),
			numTimeTravelPhysicalBytes: new FormControl<string | null | undefined>(undefined),
			numTotalLogicalBytes: new FormControl<string | null | undefined>(undefined),
			numTotalPhysicalBytes: new FormControl<string | null | undefined>(undefined),
			requirePartitionFilter: new FormControl<boolean | null | undefined>(undefined),
			resourceTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			selfLink: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableConstraints {

		/** [Optional] The foreign keys of the tables. */
		TableConstraintsForeignKeys?: Array<TableConstraintsForeignKeys>;

		/** [Optional] The primary key of the table. */
		primaryKey?: TableConstraintsPrimaryKey;
	}
	export interface TableConstraintsFormProperties {
	}
	export function CreateTableConstraintsFormGroup() {
		return new FormGroup<TableConstraintsFormProperties>({
		});

	}

	export interface TableConstraintsForeignKeys {
		TableConstraintsForeignKeysColumnReferences?: Array<TableConstraintsForeignKeysColumnReferences>;
		name?: string | null;
		referencedTable?: TableConstraintsForeignKeysReferencedTable;
	}
	export interface TableConstraintsForeignKeysFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateTableConstraintsForeignKeysFormGroup() {
		return new FormGroup<TableConstraintsForeignKeysFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableConstraintsForeignKeysColumnReferences {
		referencedColumn?: string | null;
		referencingColumn?: string | null;
	}
	export interface TableConstraintsForeignKeysColumnReferencesFormProperties {
		referencedColumn: FormControl<string | null | undefined>,
		referencingColumn: FormControl<string | null | undefined>,
	}
	export function CreateTableConstraintsForeignKeysColumnReferencesFormGroup() {
		return new FormGroup<TableConstraintsForeignKeysColumnReferencesFormProperties>({
			referencedColumn: new FormControl<string | null | undefined>(undefined),
			referencingColumn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableConstraintsForeignKeysReferencedTable {
		datasetId?: string | null;
		projectId?: string | null;
		tableId?: string | null;
	}
	export interface TableConstraintsForeignKeysReferencedTableFormProperties {
		datasetId: FormControl<string | null | undefined>,
		projectId: FormControl<string | null | undefined>,
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateTableConstraintsForeignKeysReferencedTableFormGroup() {
		return new FormGroup<TableConstraintsForeignKeysReferencedTableFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableConstraintsPrimaryKey {
		columns?: Array<string>;
	}
	export interface TableConstraintsPrimaryKeyFormProperties {
	}
	export function CreateTableConstraintsPrimaryKeyFormGroup() {
		return new FormGroup<TableConstraintsPrimaryKeyFormProperties>({
		});

	}

	export interface ViewDefinition {

		/** [Required] A query that BigQuery executes when the view is referenced. */
		query?: string | null;

		/** True if the column names are explicitly specified. For example by using the 'CREATE VIEW v(c1, c2) AS ...' syntax. Can only be set using BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ */
		useExplicitColumnNames?: boolean | null;

		/** Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ Queries and views that reference this view must use the same flag value. */
		useLegacySql?: boolean | null;

		/** Describes user-defined function resources used in the query. */
		userDefinedFunctionResources?: Array<UserDefinedFunctionResource>;
	}
	export interface ViewDefinitionFormProperties {

		/** [Required] A query that BigQuery executes when the view is referenced. */
		query: FormControl<string | null | undefined>,

		/** True if the column names are explicitly specified. For example by using the 'CREATE VIEW v(c1, c2) AS ...' syntax. Can only be set using BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ */
		useExplicitColumnNames: FormControl<boolean | null | undefined>,

		/** Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL: https://cloud.google.com/bigquery/sql-reference/ Queries and views that reference this view must use the same flag value. */
		useLegacySql: FormControl<boolean | null | undefined>,
	}
	export function CreateViewDefinitionFormGroup() {
		return new FormGroup<ViewDefinitionFormProperties>({
			query: new FormControl<string | null | undefined>(undefined),
			useExplicitColumnNames: new FormControl<boolean | null | undefined>(undefined),
			useLegacySql: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TableDataInsertAllRequest {

		/** [Optional] Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors. */
		ignoreUnknownValues?: boolean | null;

		/** The resource type of the response. */
		kind?: string | null;

		/** The rows to insert. */
		TableDataInsertAllRequestRows?: Array<TableDataInsertAllRequestRows>;

		/** [Optional] Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist. */
		skipInvalidRows?: boolean | null;

		/** If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables. */
		templateSuffix?: string | null;
	}
	export interface TableDataInsertAllRequestFormProperties {

		/** [Optional] Accept rows that contain values that do not match the schema. The unknown values are ignored. Default is false, which treats unknown values as errors. */
		ignoreUnknownValues: FormControl<boolean | null | undefined>,

		/** The resource type of the response. */
		kind: FormControl<string | null | undefined>,

		/** [Optional] Insert all valid rows of a request, even if invalid rows exist. The default value is false, which causes the entire request to fail if any invalid rows exist. */
		skipInvalidRows: FormControl<boolean | null | undefined>,

		/** If specified, treats the destination table as a base template, and inserts the rows into an instance table named "{destination}{templateSuffix}". BigQuery will manage creation of the instance table, using the schema of the base template table. See https://cloud.google.com/bigquery/streaming-data-into-bigquery#template-tables for considerations when working with templates tables. */
		templateSuffix: FormControl<string | null | undefined>,
	}
	export function CreateTableDataInsertAllRequestFormGroup() {
		return new FormGroup<TableDataInsertAllRequestFormProperties>({
			ignoreUnknownValues: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			skipInvalidRows: new FormControl<boolean | null | undefined>(undefined),
			templateSuffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableDataInsertAllRequestRows {

		/** [Optional] A unique ID for each row. BigQuery uses this property to detect duplicate insertion requests on a best-effort basis. */
		insertId?: string | null;

		/** Represents a single JSON object. */
		json?: JsonObject;
	}
	export interface TableDataInsertAllRequestRowsFormProperties {

		/** [Optional] A unique ID for each row. BigQuery uses this property to detect duplicate insertion requests on a best-effort basis. */
		insertId: FormControl<string | null | undefined>,
	}
	export function CreateTableDataInsertAllRequestRowsFormGroup() {
		return new FormGroup<TableDataInsertAllRequestRowsFormProperties>({
			insertId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableDataInsertAllResponse {

		/** An array of errors for rows that were not inserted. */
		TableDataInsertAllResponseInsertErrors?: Array<TableDataInsertAllResponseInsertErrors>;

		/** The resource type of the response. */
		kind?: string | null;
	}
	export interface TableDataInsertAllResponseFormProperties {

		/** The resource type of the response. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateTableDataInsertAllResponseFormGroup() {
		return new FormGroup<TableDataInsertAllResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableDataInsertAllResponseInsertErrors {

		/** Error information for the row indicated by the index property. */
		errors?: Array<ErrorProto>;

		/** The index of the row that error applies to. */
		index?: number | null;
	}
	export interface TableDataInsertAllResponseInsertErrorsFormProperties {

		/** The index of the row that error applies to. */
		index: FormControl<number | null | undefined>,
	}
	export function CreateTableDataInsertAllResponseInsertErrorsFormGroup() {
		return new FormGroup<TableDataInsertAllResponseInsertErrorsFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TableDataList {

		/** A hash of this page of results. */
		etag?: string | null;

		/** The resource type of the response. */
		kind?: string | null;

		/** A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing. */
		pageToken?: string | null;

		/** Rows of results. */
		rows?: Array<TableRow>;

		/** The total number of rows in the complete table. */
		totalRows?: string | null;
	}
	export interface TableDataListFormProperties {

		/** A hash of this page of results. */
		etag: FormControl<string | null | undefined>,

		/** The resource type of the response. */
		kind: FormControl<string | null | undefined>,

		/** A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing. */
		pageToken: FormControl<string | null | undefined>,

		/** The total number of rows in the complete table. */
		totalRows: FormControl<string | null | undefined>,
	}
	export function CreateTableDataListFormGroup() {
		return new FormGroup<TableDataListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			totalRows: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableList {

		/** A hash of this page of results. */
		etag?: string | null;

		/** The type of list. */
		kind?: string | null;

		/** A token to request the next page of results. */
		nextPageToken?: string | null;

		/** Tables in the requested dataset. */
		TableListTables?: Array<TableListTables>;

		/** The total number of tables in the dataset. */
		totalItems?: number | null;
	}
	export interface TableListFormProperties {

		/** A hash of this page of results. */
		etag: FormControl<string | null | undefined>,

		/** The type of list. */
		kind: FormControl<string | null | undefined>,

		/** A token to request the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,

		/** The total number of tables in the dataset. */
		totalItems: FormControl<number | null | undefined>,
	}
	export function CreateTableListFormGroup() {
		return new FormGroup<TableListFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			totalItems: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TableListTables {
		clustering?: Clustering;

		/** The time when this table was created, in milliseconds since the epoch. */
		creationTime?: string | null;

		/** [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. */
		expirationTime?: string | null;

		/** The user-friendly name for this table. */
		friendlyName?: string | null;

		/** An opaque ID of the table */
		id?: string | null;

		/** The resource type. */
		kind?: string | null;

		/** The labels associated with this table. You can use these to organize and group your tables. */
		labels?: {[id: string]: string };
		rangePartitioning?: RangePartitioning;
		tableReference?: TableReference;
		timePartitioning?: TimePartitioning;

		/** The type of table. Possible values are: TABLE, VIEW. */
		type?: string | null;

		/** Additional details for a view. */
		view?: TableListTablesView;
	}
	export interface TableListTablesFormProperties {

		/** The time when this table was created, in milliseconds since the epoch. */
		creationTime: FormControl<string | null | undefined>,

		/** [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. */
		expirationTime: FormControl<string | null | undefined>,

		/** The user-friendly name for this table. */
		friendlyName: FormControl<string | null | undefined>,

		/** An opaque ID of the table */
		id: FormControl<string | null | undefined>,

		/** The resource type. */
		kind: FormControl<string | null | undefined>,

		/** The labels associated with this table. You can use these to organize and group your tables. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of table. Possible values are: TABLE, VIEW. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTableListTablesFormGroup() {
		return new FormGroup<TableListTablesFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			expirationTime: new FormControl<string | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableListTablesView {

		/** True if view is defined in legacy SQL dialect, false if in standard SQL. */
		useLegacySql?: boolean | null;
	}
	export interface TableListTablesViewFormProperties {

		/** True if view is defined in legacy SQL dialect, false if in standard SQL. */
		useLegacySql: FormControl<boolean | null | undefined>,
	}
	export function CreateTableListTablesViewFormGroup() {
		return new FormGroup<TableListTablesViewFormProperties>({
			useLegacySql: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequest {

		/** The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions). */
		permissions?: Array<string>;
	}

	/** Request message for `TestIamPermissions` method. */
	export interface TestIamPermissionsRequestFormProperties {
	}
	export function CreateTestIamPermissionsRequestFormGroup() {
		return new FormGroup<TestIamPermissionsRequestFormProperties>({
		});

	}


	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponse {

		/** A subset of `TestPermissionsRequest.permissions` that the caller is allowed. */
		permissions?: Array<string>;
	}

	/** Response message for `TestIamPermissions` method. */
	export interface TestIamPermissionsResponseFormProperties {
	}
	export function CreateTestIamPermissionsResponseFormGroup() {
		return new FormGroup<TestIamPermissionsResponseFormProperties>({
		});

	}


	/** Statistics for a vector search query. Populated as part of JobStatistics2. */
	export interface VectorSearchStatistics {

		/** When `indexUsageMode` is `UNUSED` or `PARTIALLY_USED`, this field explains why indexes were not used in all or part of the vector search query. If `indexUsageMode` is `FULLY_USED`, this field is not populated. */
		indexUnusedReasons?: Array<IndexUnusedReason>;

		/** Specifies the index usage mode for the query. */
		indexUsageMode?: VectorSearchStatisticsIndexUsageMode | null;
	}

	/** Statistics for a vector search query. Populated as part of JobStatistics2. */
	export interface VectorSearchStatisticsFormProperties {

		/** Specifies the index usage mode for the query. */
		indexUsageMode: FormControl<VectorSearchStatisticsIndexUsageMode | null | undefined>,
	}
	export function CreateVectorSearchStatisticsFormGroup() {
		return new FormGroup<VectorSearchStatisticsFormProperties>({
			indexUsageMode: new FormControl<VectorSearchStatisticsIndexUsageMode | null | undefined>(undefined),
		});

	}

	export enum VectorSearchStatisticsIndexUsageMode { INDEX_USAGE_MODE_UNSPECIFIED = 0, UNUSED = 1, PARTIALLY_USED = 2, FULLY_USED = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all projects to which you have been granted any project role.
		 * Get projects
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @return {ProjectList} Successful response
		 */
		Bigquery_projects_list(maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ProjectList> {
			return this.http.get<ProjectList>(this.baseUri + 'projects?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all datasets in the specified project to which you have been granted the READER dataset role.
		 * Get projects/{projectId}/datasets
		 * @param {string} projectId Project ID of the datasets to be listed
		 * @param {boolean} all Whether to list all datasets, including hidden ones
		 * @param {string} filter An expression for filtering the results of the request by label. The syntax is "labels.<name>[:<value>]". Multiple filters can be ANDed together by connecting with a space. Example: "labels.department:receiving labels.active". See Filtering datasets using labels for details.
		 * @param {number} maxResults The maximum number of results to return
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @return {DatasetList} Successful response
		 */
		Bigquery_datasets_list(projectId: string, all: boolean | null | undefined, filter: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<DatasetList> {
			return this.http.get<DatasetList>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets&all=' + all + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new empty dataset.
		 * Post projects/{projectId}/datasets
		 * @param {string} projectId Project ID of the new dataset
		 * @return {Dataset} Successful response
		 */
		Bigquery_datasets_insert(projectId: string, requestBody: Dataset): Observable<Dataset> {
			return this.http.post<Dataset>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the dataset specified by the datasetId value. Before you can delete a dataset, you must delete all its tables, either manually or by specifying deleteContents. Immediately after deletion, you can create another dataset with the same name.
		 * Delete projects/{projectId}/datasets/{datasetId}
		 * @param {string} projectId Project ID of the dataset being deleted
		 * @param {string} datasetId Dataset ID of dataset being deleted
		 * @param {boolean} deleteContents If True, delete all the tables in the dataset. If False and the dataset contains tables, the request will fail. Default is False
		 * @return {void} Successful response
		 */
		Bigquery_datasets_delete(projectId: string, datasetId: string, deleteContents: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '&deleteContents=' + deleteContents, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the dataset specified by datasetID.
		 * Get projects/{projectId}/datasets/{datasetId}
		 * @param {string} projectId Project ID of the requested dataset
		 * @param {string} datasetId Dataset ID of the requested dataset
		 * @param {string} datasetView Specifies the view that determines which dataset information is returned. By default, metadata and ACL information are returned. Allowed values: METADATA, ACL, FULL.
		 * @return {Dataset} Successful response
		 */
		Bigquery_datasets_get(projectId: string, datasetId: string, datasetView: string | null | undefined): Observable<Dataset> {
			return this.http.get<Dataset>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '&datasetView=' + (datasetView == null ? '' : encodeURIComponent(datasetView)), {});
		}

		/**
		 * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource. This method supports patch semantics.
		 * Patch projects/{projectId}/datasets/{datasetId}
		 * @param {string} projectId Project ID of the dataset being updated
		 * @param {string} datasetId Dataset ID of the dataset being updated
		 * @return {Dataset} Successful response
		 */
		Bigquery_datasets_patch(projectId: string, datasetId: string, requestBody: Dataset): Observable<Dataset> {
			return this.http.patch<Dataset>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information in an existing dataset. The update method replaces the entire dataset resource, whereas the patch method only replaces fields that are provided in the submitted dataset resource.
		 * Put projects/{projectId}/datasets/{datasetId}
		 * @param {string} projectId Project ID of the dataset being updated
		 * @param {string} datasetId Dataset ID of the dataset being updated
		 * @return {Dataset} Successful response
		 */
		Bigquery_datasets_update(projectId: string, datasetId: string, requestBody: Dataset): Observable<Dataset> {
			return this.http.put<Dataset>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all models in the specified dataset. Requires the READER dataset role. After retrieving the list of models, you can get information about a particular model by calling the models.get method.
		 * Get projects/{projectId}/datasets/{datasetId}/models
		 * @param {string} projectId Required. Project ID of the models to list.
		 * @param {string} datasetId Required. Dataset ID of the models to list.
		 * @param {number} maxResults The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
		 * @param {string} pageToken Page token, returned by a previous call to request the next page of results
		 * @return {ListModelsResponse} Successful response
		 */
		Bigquery_models_list(projectId: string, datasetId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<ListModelsResponse> {
			return this.http.get<ListModelsResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/models&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes the model specified by modelId from the dataset.
		 * Delete projects/{projectId}/datasets/{datasetId}/models/{modelId}
		 * @param {string} projectId Required. Project ID of the model to delete.
		 * @param {string} datasetId Required. Dataset ID of the model to delete.
		 * @param {string} modelId Required. Model ID of the model to delete.
		 * @return {void} Successful response
		 */
		Bigquery_models_delete(projectId: string, datasetId: string, modelId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified model resource by model ID.
		 * Get projects/{projectId}/datasets/{datasetId}/models/{modelId}
		 * @param {string} projectId Required. Project ID of the requested model.
		 * @param {string} datasetId Required. Dataset ID of the requested model.
		 * @param {string} modelId Required. Model ID of the requested model.
		 * @return {Model} Successful response
		 */
		Bigquery_models_get(projectId: string, datasetId: string, modelId: string): Observable<Model> {
			return this.http.get<Model>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), {});
		}

		/**
		 * Patch specific fields in the specified model.
		 * Patch projects/{projectId}/datasets/{datasetId}/models/{modelId}
		 * @param {string} projectId Required. Project ID of the model to patch.
		 * @param {string} datasetId Required. Dataset ID of the model to patch.
		 * @param {string} modelId Required. Model ID of the model to patch.
		 * @return {Model} Successful response
		 */
		Bigquery_models_patch(projectId: string, datasetId: string, modelId: string, requestBody: Model): Observable<Model> {
			return this.http.patch<Model>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/models/' + (modelId == null ? '' : encodeURIComponent(modelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all routines in the specified dataset. Requires the READER dataset role.
		 * Get projects/{projectId}/datasets/{datasetId}/routines
		 * @param {string} projectId Required. Project ID of the routines to list
		 * @param {string} datasetId Required. Dataset ID of the routines to list
		 * @param {string} filter If set, then only the Routines matching this filter are returned. The supported format is `routineType:{RoutineType}`, where `{RoutineType}` is a RoutineType enum. For example: `routineType:SCALAR_FUNCTION`.
		 * @param {number} maxResults The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @param {string} readMask If set, then only the Routine fields in the field mask, as well as project_id, dataset_id and routine_id, are returned in the response. If unset, then the following Routine fields are returned: etag, project_id, dataset_id, routine_id, routine_type, creation_time, last_modified_time, and language.
		 * @return {ListRoutinesResponse} Successful response
		 */
		Bigquery_routines_list(projectId: string, datasetId: string, filter: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<ListRoutinesResponse> {
			return this.http.get<ListRoutinesResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/routines&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Creates a new routine in the dataset.
		 * Post projects/{projectId}/datasets/{datasetId}/routines
		 * @param {string} projectId Required. Project ID of the new routine
		 * @param {string} datasetId Required. Dataset ID of the new routine
		 * @return {Routine} Successful response
		 */
		Bigquery_routines_insert(projectId: string, datasetId: string, requestBody: Routine): Observable<Routine> {
			return this.http.post<Routine>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/routines', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the routine specified by routineId from the dataset.
		 * Delete projects/{projectId}/datasets/{datasetId}/routines/{routineId}
		 * @param {string} projectId Required. Project ID of the routine to delete
		 * @param {string} datasetId Required. Dataset ID of the routine to delete
		 * @param {string} routineId Required. Routine ID of the routine to delete
		 * @return {void} Successful response
		 */
		Bigquery_routines_delete(projectId: string, datasetId: string, routineId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/routines/' + (routineId == null ? '' : encodeURIComponent(routineId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified routine resource by routine ID.
		 * Get projects/{projectId}/datasets/{datasetId}/routines/{routineId}
		 * @param {string} projectId Required. Project ID of the requested routine
		 * @param {string} datasetId Required. Dataset ID of the requested routine
		 * @param {string} routineId Required. Routine ID of the requested routine
		 * @param {string} readMask If set, only the Routine fields in the field mask are returned in the response. If unset, all Routine fields are returned.
		 * @return {Routine} Successful response
		 */
		Bigquery_routines_get(projectId: string, datasetId: string, routineId: string, readMask: string | null | undefined): Observable<Routine> {
			return this.http.get<Routine>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/routines/' + (routineId == null ? '' : encodeURIComponent(routineId)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Updates information in an existing routine. The update method replaces the entire Routine resource.
		 * Put projects/{projectId}/datasets/{datasetId}/routines/{routineId}
		 * @param {string} projectId Required. Project ID of the routine to update
		 * @param {string} datasetId Required. Dataset ID of the routine to update
		 * @param {string} routineId Required. Routine ID of the routine to update
		 * @return {Routine} Successful response
		 */
		Bigquery_routines_update(projectId: string, datasetId: string, routineId: string, requestBody: Routine): Observable<Routine> {
			return this.http.put<Routine>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/routines/' + (routineId == null ? '' : encodeURIComponent(routineId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tables in the specified dataset. Requires the READER dataset role.
		 * Get projects/{projectId}/datasets/{datasetId}/tables
		 * @param {string} projectId Project ID of the tables to list
		 * @param {string} datasetId Dataset ID of the tables to list
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @return {TableList} Successful response
		 */
		Bigquery_tables_list(projectId: string, datasetId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<TableList> {
			return this.http.get<TableList>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new, empty table in the dataset.
		 * Post projects/{projectId}/datasets/{datasetId}/tables
		 * @param {string} projectId Project ID of the new table
		 * @param {string} datasetId Dataset ID of the new table
		 * @return {Table} Successful response
		 */
		Bigquery_tables_insert(projectId: string, datasetId: string, requestBody: Table): Observable<Table> {
			return this.http.post<Table>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the table specified by tableId from the dataset. If the table contains data, all the data will be deleted.
		 * Delete projects/{projectId}/datasets/{datasetId}/tables/{tableId}
		 * @param {string} projectId Project ID of the table to delete
		 * @param {string} datasetId Dataset ID of the table to delete
		 * @param {string} tableId Table ID of the table to delete
		 * @return {void} Successful response
		 */
		Bigquery_tables_delete(projectId: string, datasetId: string, tableId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the specified table resource by table ID. This method does not return the data in the table, it only returns the table resource, which describes the structure of this table.
		 * Get projects/{projectId}/datasets/{datasetId}/tables/{tableId}
		 * @param {string} projectId Project ID of the requested table
		 * @param {string} datasetId Dataset ID of the requested table
		 * @param {string} tableId Table ID of the requested table
		 * @param {string} selectedFields List of fields to return (comma-separated). If unspecified, all fields are returned
		 * @param {Bigquery_tables_getView} view Specifies the view that determines which table information is returned. By default, basic table information and storage statistics (STORAGE_STATS) are returned.
		 * @return {Table} Successful response
		 */
		Bigquery_tables_get(projectId: string, datasetId: string, tableId: string, selectedFields: string | null | undefined, view: Bigquery_tables_getView | null | undefined): Observable<Table> {
			return this.http.get<Table>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '&selectedFields=' + (selectedFields == null ? '' : encodeURIComponent(selectedFields)) + '&view=' + view, {});
		}

		/**
		 * Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource. This method supports patch semantics.
		 * Patch projects/{projectId}/datasets/{datasetId}/tables/{tableId}
		 * @param {string} projectId Project ID of the table to update
		 * @param {string} datasetId Dataset ID of the table to update
		 * @param {string} tableId Table ID of the table to update
		 * @param {boolean} autodetect_schema When true will autodetect schema, else will keep original schema
		 * @return {Table} Successful response
		 */
		Bigquery_tables_patch(projectId: string, datasetId: string, tableId: string, autodetect_schema: boolean | null | undefined, requestBody: Table): Observable<Table> {
			return this.http.patch<Table>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '&autodetect_schema=' + autodetect_schema, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates information in an existing table. The update method replaces the entire table resource, whereas the patch method only replaces fields that are provided in the submitted table resource.
		 * Put projects/{projectId}/datasets/{datasetId}/tables/{tableId}
		 * @param {string} projectId Project ID of the table to update
		 * @param {string} datasetId Dataset ID of the table to update
		 * @param {string} tableId Table ID of the table to update
		 * @param {boolean} autodetect_schema When true will autodetect schema, else will keep original schema
		 * @return {Table} Successful response
		 */
		Bigquery_tables_update(projectId: string, datasetId: string, tableId: string, autodetect_schema: boolean | null | undefined, requestBody: Table): Observable<Table> {
			return this.http.put<Table>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '&autodetect_schema=' + autodetect_schema, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves table data from a specified set of rows. Requires the READER dataset role.
		 * Get projects/{projectId}/datasets/{datasetId}/tables/{tableId}/data
		 * @param {string} projectId Project ID of the table to read
		 * @param {string} datasetId Dataset ID of the table to read
		 * @param {string} tableId Table ID of the table to read
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} pageToken Page token, returned by a previous call, identifying the result set
		 * @param {string} selectedFields List of fields to return (comma-separated). If unspecified, all fields are returned
		 * @param {string} startIndex Zero-based index of the starting row to read
		 * @return {TableDataList} Successful response
		 */
		Bigquery_tabledata_list(projectId: string, datasetId: string, tableId: string, maxResults: number | null | undefined, pageToken: string | null | undefined, selectedFields: string | null | undefined, startIndex: string | null | undefined): Observable<TableDataList> {
			return this.http.get<TableDataList>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/data&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&selectedFields=' + (selectedFields == null ? '' : encodeURIComponent(selectedFields)) + '&startIndex=' + (startIndex == null ? '' : encodeURIComponent(startIndex)), {});
		}

		/**
		 * Streams data into BigQuery one record at a time without needing to run a load job. Requires the WRITER dataset role.
		 * Post projects/{projectId}/datasets/{datasetId}/tables/{tableId}/insertAll
		 * @param {string} projectId Project ID of the destination table.
		 * @param {string} datasetId Dataset ID of the destination table.
		 * @param {string} tableId Table ID of the destination table.
		 * @return {TableDataInsertAllResponse} Successful response
		 */
		Bigquery_tabledata_insertAll(projectId: string, datasetId: string, tableId: string, requestBody: TableDataInsertAllRequest): Observable<TableDataInsertAllResponse> {
			return this.http.post<TableDataInsertAllResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/insertAll', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all row access policies on the specified table.
		 * Get projects/{projectId}/datasets/{datasetId}/tables/{tableId}/rowAccessPolicies
		 * @param {string} projectId Required. Project ID of the row access policies to list.
		 * @param {string} datasetId Required. Dataset ID of row access policies to list.
		 * @param {string} tableId Required. Table ID of the table to list row access policies.
		 * @param {number} pageSize The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results.
		 * @return {ListRowAccessPoliciesResponse} Successful response
		 */
		Bigquery_rowAccessPolicies_list(projectId: string, datasetId: string, tableId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListRowAccessPoliciesResponse> {
			return this.http.get<ListRowAccessPoliciesResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/tables/' + (tableId == null ? '' : encodeURIComponent(tableId)) + '/rowAccessPolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all jobs that you started in the specified project. Job information is available for a six month period after creation. The job list is sorted in reverse chronological order, by job creation time. Requires the Can View project role, or the Is Owner project role if you set the allUsers property.
		 * Get projects/{projectId}/jobs
		 * @param {string} projectId Project ID of the jobs to list
		 * @param {boolean} allUsers Whether to display jobs owned by all users in the project. Default false
		 * @param {string} maxCreationTime Max value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created before or at this timestamp are returned
		 * @param {number} maxResults Maximum number of results to return
		 * @param {string} minCreationTime Min value for job creation time, in milliseconds since the POSIX epoch. If set, only jobs created after or at this timestamp are returned
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @param {string} parentJobId If set, retrieves only jobs whose parent is this job. Otherwise, retrieves only jobs which have no parent
		 * @param {Bigquery_jobs_listProjection} projection Restrict information returned to a set of selected fields
		 * @param {Array<string>} stateFilter Filter for job state
		 * @return {JobList} Successful response
		 */
		Bigquery_jobs_list(projectId: string, allUsers: boolean | null | undefined, maxCreationTime: string | null | undefined, maxResults: number | null | undefined, minCreationTime: string | null | undefined, pageToken: string | null | undefined, parentJobId: string | null | undefined, projection: Bigquery_jobs_listProjection | null | undefined, stateFilter: Array<string> | null | undefined): Observable<JobList> {
			return this.http.get<JobList>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs&allUsers=' + allUsers + '&maxCreationTime=' + (maxCreationTime == null ? '' : encodeURIComponent(maxCreationTime)) + '&maxResults=' + maxResults + '&minCreationTime=' + (minCreationTime == null ? '' : encodeURIComponent(minCreationTime)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parentJobId=' + (parentJobId == null ? '' : encodeURIComponent(parentJobId)) + '&projection=' + projection + '&' + stateFilter?.map(z => `stateFilter=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns information about a specific job. Job information is available for a six month period after creation. Requires that you're the person who ran the job, or have the Is Owner project role.
		 * Get projects/{projectId}/jobs/{jobId}
		 * @param {string} projectId [Required] Project ID of the requested job
		 * @param {string} jobId [Required] Job ID of the requested job
		 * @param {string} location The geographic location of the job. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
		 * @return {Job} Successful response
		 */
		Bigquery_jobs_get(projectId: string, jobId: string, location: string | null | undefined): Observable<Job> {
			return this.http.get<Job>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)), {});
		}

		/**
		 * Requests that a job be cancelled. This call will return immediately, and the client will need to poll for the job status to see if the cancel completed successfully. Cancelled jobs may still incur costs.
		 * Post projects/{projectId}/jobs/{jobId}/cancel
		 * @param {string} projectId [Required] Project ID of the job to cancel
		 * @param {string} jobId [Required] Job ID of the job to cancel
		 * @param {string} location The geographic location of the job. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
		 * @return {JobCancelResponse} Successful response
		 */
		Bigquery_jobs_cancel(projectId: string, jobId: string, location: string | null | undefined): Observable<JobCancelResponse> {
			return this.http.post<JobCancelResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/cancel&location=' + (location == null ? '' : encodeURIComponent(location)), null, {});
		}

		/**
		 * Requests the deletion of the metadata of a job. This call returns when the job's metadata is deleted.
		 * Delete projects/{projectId}/jobs/{jobId}/delete
		 * @param {string} projectId Required. Project ID of the job for which metadata is to be deleted.
		 * @param {string} jobId Required. Job ID of the job for which metadata is to be deleted. If this is a parent job which has child jobs, the metadata from all child jobs will be deleted as well. Direct deletion of the metadata of child jobs is not allowed.
		 * @param {string} location The geographic location of the job. Required. See details at: https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
		 * @return {void} Successful response
		 */
		Bigquery_jobs_delete(projectId: string, jobId: string, location: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '/delete&location=' + (location == null ? '' : encodeURIComponent(location)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Runs a BigQuery SQL query synchronously and returns query results if the query completes within a specified timeout.
		 * Post projects/{projectId}/queries
		 * @param {string} projectId Project ID of the project billed for the query
		 * @return {QueryResponse} Successful response
		 */
		Bigquery_jobs_query(projectId: string, requestBody: QueryRequest): Observable<QueryResponse> {
			return this.http.post<QueryResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/queries', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the results of a query job.
		 * Get projects/{projectId}/queries/{jobId}
		 * @param {string} projectId [Required] Project ID of the query job
		 * @param {string} jobId [Required] Job ID of the query job
		 * @param {string} location The geographic location where the job should run. Required except for US and EU. See details at https://cloud.google.com/bigquery/docs/locations#specifying_your_location.
		 * @param {number} maxResults Maximum number of results to read
		 * @param {string} pageToken Page token, returned by a previous call, to request the next page of results
		 * @param {string} startIndex Zero-based index of the starting row
		 * @param {number} timeoutMs How long to wait for the query to complete, in milliseconds, before returning. Default is 10 seconds. If the timeout passes before the job completes, the 'jobComplete' field in the response will be false
		 * @return {GetQueryResultsResponse} Successful response
		 */
		Bigquery_jobs_getQueryResults(projectId: string, jobId: string, location: string | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined, startIndex: string | null | undefined, timeoutMs: number | null | undefined): Observable<GetQueryResultsResponse> {
			return this.http.get<GetQueryResultsResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/queries/' + (jobId == null ? '' : encodeURIComponent(jobId)) + '&location=' + (location == null ? '' : encodeURIComponent(location)) + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&startIndex=' + (startIndex == null ? '' : encodeURIComponent(startIndex)) + '&timeoutMs=' + timeoutMs, {});
		}

		/**
		 * Returns the email address of the service account for your project used for interactions with Google Cloud KMS.
		 * Get projects/{projectId}/serviceAccount
		 * @param {string} projectId Project ID for which the service account is requested.
		 * @return {GetServiceAccountResponse} Successful response
		 */
		Bigquery_projects_getServiceAccount(projectId: string): Observable<GetServiceAccountResponse> {
			return this.http.get<GetServiceAccountResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/serviceAccount', {});
		}

		/**
		 * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
		 * Post {resource}:getIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Bigquery_tables_getIamPolicy(resource: string, requestBody: GetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + (resource == null ? '' : encodeURIComponent(resource)) + ':getIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
		 * Post {resource}:setIamPolicy
		 * @param {string} resource REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {Policy} Successful response
		 */
		Bigquery_tables_setIamPolicy(resource: string, requestBody: SetIamPolicyRequest): Observable<Policy> {
			return this.http.post<Policy>(this.baseUri + (resource == null ? '' : encodeURIComponent(resource)) + ':setIamPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
		 * Post {resource}:testIamPermissions
		 * @param {string} resource REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
		 * @return {TestIamPermissionsResponse} Successful response
		 */
		Bigquery_tables_testIamPermissions(resource: string, requestBody: TestIamPermissionsRequest): Observable<TestIamPermissionsResponse> {
			return this.http.post<TestIamPermissionsResponse>(this.baseUri + (resource == null ? '' : encodeURIComponent(resource)) + ':testIamPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Bigquery_tables_getView { BASIC = 0, FULL = 1, STORAGE_STATS = 2, TABLE_METADATA_VIEW_UNSPECIFIED = 3 }

	export enum Bigquery_jobs_listProjection { full = 0, minimal = 1 }

}

