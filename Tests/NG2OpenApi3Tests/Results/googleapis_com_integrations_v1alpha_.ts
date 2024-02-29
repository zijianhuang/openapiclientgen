import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Registered ids for errors, as "oneof" enums. Each task or logical grouping of tasks may share the same enum. */
	export interface CrmlogErrorCode {
		commonErrorCode?: CrmlogErrorCodeCommonErrorCode | null;
	}

	/** Registered ids for errors, as "oneof" enums. Each task or logical grouping of tasks may share the same enum. */
	export interface CrmlogErrorCodeFormProperties {
		commonErrorCode: FormControl<CrmlogErrorCodeCommonErrorCode | null | undefined>,
	}
	export function CreateCrmlogErrorCodeFormGroup() {
		return new FormGroup<CrmlogErrorCodeFormProperties>({
			commonErrorCode: new FormControl<CrmlogErrorCodeCommonErrorCode | null | undefined>(undefined),
		});

	}

	export enum CrmlogErrorCodeCommonErrorCode { COMMON_ERROR_CODE_UNSPECIFIED = 'COMMON_ERROR_CODE_UNSPECIFIED', INVALID_CREDENTIALS = 'INVALID_CREDENTIALS', REQUIRED_FIELDS_MISSING = 'REQUIRED_FIELDS_MISSING', INVALID_FIELDS = 'INVALID_FIELDS', BACKEND = 'BACKEND', GENERAL = 'GENERAL', INTERNAL = 'INTERNAL', IO_ERROR = 'IO_ERROR', NOT_FOUND = 'NOT_FOUND', EVENT_BUS = 'EVENT_BUS', ALREADY_EXISTS = 'ALREADY_EXISTS', CONCORD = 'CONCORD', CONVERSION = 'CONVERSION', FLUME = 'FLUME', PERMISSION = 'PERMISSION', SALES_FORCE = 'SALES_FORCE', SPANNER = 'SPANNER', UNIMPLEMENTED = 'UNIMPLEMENTED', RELTIO = 'RELTIO', WORKFLOW_NOT_FOUND = 'WORKFLOW_NOT_FOUND', QUOTA_THROTTLED = 'QUOTA_THROTTLED', QUOTA_ENQUEUED = 'QUOTA_ENQUEUED', INVALID_QUOTA_CONFIGURATION = 'INVALID_QUOTA_CONFIGURATION', TASK_NOT_FOUND = 'TASK_NOT_FOUND', EXECUTION_TIMEOUT = 'EXECUTION_TIMEOUT', INVALID_EVENT_EXECUTION_STATE = 'INVALID_EVENT_EXECUTION_STATE', INVALID_ATTRIBUTE = 'INVALID_ATTRIBUTE', MISSING_ATTRIBUTE = 'MISSING_ATTRIBUTE', CLIENT_UNAUTHORIZED_FOR_WORKFLOW = 'CLIENT_UNAUTHORIZED_FOR_WORKFLOW', INVALID_PARAMETER = 'INVALID_PARAMETER', MISSING_PARAMETER = 'MISSING_PARAMETER', UNAUTHROIZED_WORKFLOW_EDITOR_ACTION = 'UNAUTHROIZED_WORKFLOW_EDITOR_ACTION', FAILED_PRECONDITION = 'FAILED_PRECONDITION', INVALID_CLIENT = 'INVALID_CLIENT', MISSING_CLIENT = 'MISSING_CLIENT', INVALID_WORKFLOW = 'INVALID_WORKFLOW', MISSING_QUOTA_CONFIGURATION = 'MISSING_QUOTA_CONFIGURATION', UNHANDLED_TASK_ERROR = 'UNHANDLED_TASK_ERROR', SCRIPT_TASK_RUNTIME_ERROR = 'SCRIPT_TASK_RUNTIME_ERROR', RPC = 'RPC', INVALID_PROTO = 'INVALID_PROTO', UNHANDLED_EVENTBUS_ERROR = 'UNHANDLED_EVENTBUS_ERROR', INVALID_TASK_STATE = 'INVALID_TASK_STATE', TYPED_TASK_INVALID_INPUT_OPERATION = 'TYPED_TASK_INVALID_INPUT_OPERATION', TYPED_TASK_INVALID_OUTPUT_OPERATION = 'TYPED_TASK_INVALID_OUTPUT_OPERATION', VALIDATION_ERROR = 'VALIDATION_ERROR', RESUME_ERROR = 'RESUME_ERROR', APPS_SCRIPT_EXECUTION_ERROR = 'APPS_SCRIPT_EXECUTION_ERROR', INVALID_VECTOR_USER = 'INVALID_VECTOR_USER', INFORMATICA = 'INFORMATICA', RETRYABLE_TASK_ERROR = 'RETRYABLE_TASK_ERROR', INVALID_TENANT = 'INVALID_TENANT', WRONG_TENANT = 'WRONG_TENANT', INFORMATICA_BACKEND_UNAVAILABLE = 'INFORMATICA_BACKEND_UNAVAILABLE', RPC_PERMISSION_DENIED = 'RPC_PERMISSION_DENIED', SYNC_EVENTBUS_EXECUTION_TIMEOUT = 'SYNC_EVENTBUS_EXECUTION_TIMEOUT', ASYNC_EVENTBUS_EXECUTION_TIMEOUT = 'ASYNC_EVENTBUS_EXECUTION_TIMEOUT', NOT_SUPPORTED_DATA_TYPE = 'NOT_SUPPORTED_DATA_TYPE', UNSANITIZED_USER_INPUT = 'UNSANITIZED_USER_INPUT', TRANSFORM_EXPRESSION_EVALUATION_ERROR = 'TRANSFORM_EXPRESSION_EVALUATION_ERROR', HTTP_EXCEPTION = 'HTTP_EXCEPTION', EXECUTION_CANCELLED = 'EXECUTION_CANCELLED' }

	export interface EnterpriseCrmEventbusAuthconfigAuthConfigTaskParam {

		/** Defines the credential types to be supported as Task may restrict specific types to use, e.g. Cloud SQL Task will use username/password type only. */
		allowedCredentialTypes?: Array<string>;
		allowedServiceAccountInContext?: boolean | null;

		/** UUID of the AuthConfig. */
		authConfigId?: string | null;

		/** A space-delimited list of requested scope permissions. */
		scope?: string | null;
		useServiceAccountInContext?: boolean | null;
	}
	export interface EnterpriseCrmEventbusAuthconfigAuthConfigTaskParamFormProperties {
		allowedServiceAccountInContext: FormControl<boolean | null | undefined>,

		/** UUID of the AuthConfig. */
		authConfigId: FormControl<string | null | undefined>,

		/** A space-delimited list of requested scope permissions. */
		scope: FormControl<string | null | undefined>,
		useServiceAccountInContext: FormControl<boolean | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusAuthconfigAuthConfigTaskParamFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusAuthconfigAuthConfigTaskParamFormProperties>({
			allowedServiceAccountInContext: new FormControl<boolean | null | undefined>(undefined),
			authConfigId: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			useServiceAccountInContext: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes. */
	export interface EnterpriseCrmEventbusProtoAddress {

		/** Required. */
		email?: string | null;
		name?: string | null;
		tokens?: Array<EnterpriseCrmEventbusProtoToken>;
	}

	/** Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes. */
	export interface EnterpriseCrmEventbusProtoAddressFormProperties {

		/** Required. */
		email: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoAddressFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoAddressFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoToken {
		name?: string | null;
		value?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoTokenFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoTokenFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTokenFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attributes are additional options that can be associated with each event property. For more information, see */
	export interface EnterpriseCrmEventbusProtoAttributes {

		/** Things like URL, Email, Currency, Timestamp (rather than string, int64...) */
		dataType?: EnterpriseCrmEventbusProtoAttributesDataType | null;

		/** Used for define type for values. Currently supported value types include int, string, double, array, and any proto message. */
		defaultValue?: EnterpriseCrmEventbusProtoValueType;

		/** Required for event execution. The validation will be done by the event bus when the event is triggered. */
		isRequired?: boolean | null;

		/** Used to indicate if a ParameterEntry should be converted to ParamIndexes for ST-Spanner full-text search. DEPRECATED: use searchable. */
		isSearchable?: boolean | null;

		/** The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information. */
		logSettings?: EnterpriseCrmEventbusProtoLogSettings;
		searchable?: EnterpriseCrmEventbusProtoAttributesSearchable | null;

		/** List of tasks that can view this property, if empty then all. */
		taskVisibility?: Array<string>;
	}

	/** Attributes are additional options that can be associated with each event property. For more information, see */
	export interface EnterpriseCrmEventbusProtoAttributesFormProperties {

		/** Things like URL, Email, Currency, Timestamp (rather than string, int64...) */
		dataType: FormControl<EnterpriseCrmEventbusProtoAttributesDataType | null | undefined>,

		/** Required for event execution. The validation will be done by the event bus when the event is triggered. */
		isRequired: FormControl<boolean | null | undefined>,

		/** Used to indicate if a ParameterEntry should be converted to ParamIndexes for ST-Spanner full-text search. DEPRECATED: use searchable. */
		isSearchable: FormControl<boolean | null | undefined>,
		searchable: FormControl<EnterpriseCrmEventbusProtoAttributesSearchable | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoAttributesFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoAttributesFormProperties>({
			dataType: new FormControl<EnterpriseCrmEventbusProtoAttributesDataType | null | undefined>(undefined),
			isRequired: new FormControl<boolean | null | undefined>(undefined),
			isSearchable: new FormControl<boolean | null | undefined>(undefined),
			searchable: new FormControl<EnterpriseCrmEventbusProtoAttributesSearchable | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoAttributesDataType { DATA_TYPE_UNSPECIFIED = 'DATA_TYPE_UNSPECIFIED', EMAIL = 'EMAIL', URL = 'URL', CURRENCY = 'CURRENCY', TIMESTAMP = 'TIMESTAMP', DOMAIN_NAME = 'DOMAIN_NAME' }


	/** Used for define type for values. Currently supported value types include int, string, double, array, and any proto message. */
	export interface EnterpriseCrmEventbusProtoValueType {
		booleanValue?: boolean | null;
		doubleArray?: EnterpriseCrmEventbusProtoDoubleArray;

		/** Type: double */
		doubleValue?: number | null;
		intArray?: EnterpriseCrmEventbusProtoIntArray;
		intValue?: string | null;
		protoValue?: {[id: string]: any };
		stringArray?: EnterpriseCrmEventbusProtoStringArray;
		stringValue?: string | null;
	}

	/** Used for define type for values. Currently supported value types include int, string, double, array, and any proto message. */
	export interface EnterpriseCrmEventbusProtoValueTypeFormProperties {
		booleanValue: FormControl<boolean | null | undefined>,

		/** Type: double */
		doubleValue: FormControl<number | null | undefined>,
		intValue: FormControl<string | null | undefined>,
		protoValue: FormControl<{[id: string]: any } | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoValueTypeFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoValueTypeFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
			protoValue: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoDoubleArray {
		values?: Array<number>;
	}
	export interface EnterpriseCrmEventbusProtoDoubleArrayFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoDoubleArrayFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoDoubleArrayFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoIntArray {
		values?: Array<string>;
	}
	export interface EnterpriseCrmEventbusProtoIntArrayFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoIntArrayFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoIntArrayFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoStringArray {
		values?: Array<string>;
	}
	export interface EnterpriseCrmEventbusProtoStringArrayFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoStringArrayFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoStringArrayFormProperties>({
		});

	}


	/** The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information. */
	export interface EnterpriseCrmEventbusProtoLogSettings {

		/** The name of corresponding logging field of the event property. If omitted, assumes the same name as the event property key. */
		logFieldName?: string | null;

		/** Identifies whether a field contains, or may contain, PII or sensitive data, and how to sanitize the field if it does. If a field's privacy type cannot be determined then it is sanitized (e.g., scrubbed). The specific sanitizer implementation is determined by run-time configuration and environment options (e.g., prod vs. qa). next_id: 5 */
		sanitizeOptions?: EnterpriseCrmLoggingGwsSanitizeOptions;
		seedPeriod?: EnterpriseCrmEventbusProtoLogSettingsSeedPeriod | null;
		seedScope?: EnterpriseCrmEventbusProtoLogSettingsSeedScope | null;

		/** Describes string and array limits when writing to logs. When a limit is exceeded the *shortener_type* describes how to shorten the field. next_id: 6 */
		shorteningLimits?: EnterpriseCrmLoggingGwsFieldLimits;
	}

	/** The LogSettings define the logging attributes for an event property. These attributes are used to map the property to the parameter in the log proto. Also used to define scrubbing/truncation behavior and PII information. */
	export interface EnterpriseCrmEventbusProtoLogSettingsFormProperties {

		/** The name of corresponding logging field of the event property. If omitted, assumes the same name as the event property key. */
		logFieldName: FormControl<string | null | undefined>,
		seedPeriod: FormControl<EnterpriseCrmEventbusProtoLogSettingsSeedPeriod | null | undefined>,
		seedScope: FormControl<EnterpriseCrmEventbusProtoLogSettingsSeedScope | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoLogSettingsFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoLogSettingsFormProperties>({
			logFieldName: new FormControl<string | null | undefined>(undefined),
			seedPeriod: new FormControl<EnterpriseCrmEventbusProtoLogSettingsSeedPeriod | null | undefined>(undefined),
			seedScope: new FormControl<EnterpriseCrmEventbusProtoLogSettingsSeedScope | null | undefined>(undefined),
		});

	}


	/** Identifies whether a field contains, or may contain, PII or sensitive data, and how to sanitize the field if it does. If a field's privacy type cannot be determined then it is sanitized (e.g., scrubbed). The specific sanitizer implementation is determined by run-time configuration and environment options (e.g., prod vs. qa). next_id: 5 */
	export interface EnterpriseCrmLoggingGwsSanitizeOptions {

		/** If true, the value has already been sanitized and needs no further sanitization. For instance, a D3 customer id is already an obfuscated entity and *might not* need further sanitization. */
		isAlreadySanitized?: boolean | null;

		/** To which type(s) of logs the sanitize options apply. */
		logType?: Array<string>;
		privacy?: EnterpriseCrmLoggingGwsSanitizeOptionsPrivacy | null;
		sanitizeType?: EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeType | null;
	}

	/** Identifies whether a field contains, or may contain, PII or sensitive data, and how to sanitize the field if it does. If a field's privacy type cannot be determined then it is sanitized (e.g., scrubbed). The specific sanitizer implementation is determined by run-time configuration and environment options (e.g., prod vs. qa). next_id: 5 */
	export interface EnterpriseCrmLoggingGwsSanitizeOptionsFormProperties {

		/** If true, the value has already been sanitized and needs no further sanitization. For instance, a D3 customer id is already an obfuscated entity and *might not* need further sanitization. */
		isAlreadySanitized: FormControl<boolean | null | undefined>,
		privacy: FormControl<EnterpriseCrmLoggingGwsSanitizeOptionsPrivacy | null | undefined>,
		sanitizeType: FormControl<EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeType | null | undefined>,
	}
	export function CreateEnterpriseCrmLoggingGwsSanitizeOptionsFormGroup() {
		return new FormGroup<EnterpriseCrmLoggingGwsSanitizeOptionsFormProperties>({
			isAlreadySanitized: new FormControl<boolean | null | undefined>(undefined),
			privacy: new FormControl<EnterpriseCrmLoggingGwsSanitizeOptionsPrivacy | null | undefined>(undefined),
			sanitizeType: new FormControl<EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmLoggingGwsSanitizeOptionsPrivacy { PRIVACY_TYPE_UNSPECIFIED = 'PRIVACY_TYPE_UNSPECIFIED', NOT_PII = 'NOT_PII', PII = 'PII', SPII = 'SPII', UNSURE = 'UNSURE' }

	export enum EnterpriseCrmLoggingGwsSanitizeOptionsSanitizeType { SANITIZE_TYPE_UNSPECIFIED = 'SANITIZE_TYPE_UNSPECIFIED', SCRUB = 'SCRUB', ANONYMIZE = 'ANONYMIZE', ANONYMIZE_LIMITED_REPEATABLE = 'ANONYMIZE_LIMITED_REPEATABLE', OBFUSCATE = 'OBFUSCATE', ENCRYPT = 'ENCRYPT', DO_NOT_SANITIZE = 'DO_NOT_SANITIZE' }

	export enum EnterpriseCrmEventbusProtoLogSettingsSeedPeriod { SEED_PERIOD_UNSPECIFIED = 'SEED_PERIOD_UNSPECIFIED', DAY = 'DAY', WEEK = 'WEEK', MONTH = 'MONTH' }

	export enum EnterpriseCrmEventbusProtoLogSettingsSeedScope { SEED_SCOPE_UNSPECIFIED = 'SEED_SCOPE_UNSPECIFIED', EVENT_NAME = 'EVENT_NAME', TIME_PERIOD = 'TIME_PERIOD', PARAM_NAME = 'PARAM_NAME' }


	/** Describes string and array limits when writing to logs. When a limit is exceeded the *shortener_type* describes how to shorten the field. next_id: 6 */
	export interface EnterpriseCrmLoggingGwsFieldLimits {
		logAction?: EnterpriseCrmLoggingGwsFieldLimitsLogAction | null;

		/** To which type(s) of logs the limits apply. */
		logType?: Array<string>;

		/**
		 * maximum array size. If the array exceds this size, the field (list) is truncated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxArraySize?: number | null;

		/**
		 * maximum string length. If the field exceeds this amount the field is shortened.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxStringLength?: number | null;
		shortenerType?: EnterpriseCrmLoggingGwsFieldLimitsShortenerType | null;
	}

	/** Describes string and array limits when writing to logs. When a limit is exceeded the *shortener_type* describes how to shorten the field. next_id: 6 */
	export interface EnterpriseCrmLoggingGwsFieldLimitsFormProperties {
		logAction: FormControl<EnterpriseCrmLoggingGwsFieldLimitsLogAction | null | undefined>,

		/**
		 * maximum array size. If the array exceds this size, the field (list) is truncated.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxArraySize: FormControl<number | null | undefined>,

		/**
		 * maximum string length. If the field exceeds this amount the field is shortened.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxStringLength: FormControl<number | null | undefined>,
		shortenerType: FormControl<EnterpriseCrmLoggingGwsFieldLimitsShortenerType | null | undefined>,
	}
	export function CreateEnterpriseCrmLoggingGwsFieldLimitsFormGroup() {
		return new FormGroup<EnterpriseCrmLoggingGwsFieldLimitsFormProperties>({
			logAction: new FormControl<EnterpriseCrmLoggingGwsFieldLimitsLogAction | null | undefined>(undefined),
			maxArraySize: new FormControl<number | null | undefined>(undefined),
			maxStringLength: new FormControl<number | null | undefined>(undefined),
			shortenerType: new FormControl<EnterpriseCrmLoggingGwsFieldLimitsShortenerType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmLoggingGwsFieldLimitsLogAction { LOG_ACTION_UNSPECIFIED = 'LOG_ACTION_UNSPECIFIED', DONT_LOG = 'DONT_LOG', LOG = 'LOG' }

	export enum EnterpriseCrmLoggingGwsFieldLimitsShortenerType { SHORTENER_TYPE_UNSPECIFIED = 'SHORTENER_TYPE_UNSPECIFIED', SHORTEN = 'SHORTEN', HASH = 'HASH', SHORTEN_WITH_HASH = 'SHORTEN_WITH_HASH', SHORTEN_EMAIL = 'SHORTEN_EMAIL', SHORTEN_EMAIL_WITH_HASH = 'SHORTEN_EMAIL_WITH_HASH', SHORTEN_DOMAIN = 'SHORTEN_DOMAIN' }

	export enum EnterpriseCrmEventbusProtoAttributesSearchable { UNSPECIFIED = 'UNSPECIFIED', YES = 'YES', NO = 'NO' }


	/** List of error enums for alerts. */
	export interface EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList {
		enumStrings?: Array<string>;
		filterType?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterType | null;
	}

	/** List of error enums for alerts. */
	export interface EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFormProperties {
		filterType: FormControl<EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterType | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFormProperties>({
			filterType: new FormControl<EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterType { DEFAULT_INCLUSIVE = 'DEFAULT_INCLUSIVE', EXCLUSIVE = 'EXCLUSIVE' }


	/** The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig. */
	export interface EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue {
		absolute?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		percentage?: number | null;
	}

	/** The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig. */
	export interface EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValueFormProperties {
		absolute: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoBaseAlertConfigThresholdValueFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValueFormProperties>({
			absolute: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoBaseFunction {
		functionName?: EnterpriseCrmEventbusProtoBaseFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoBaseFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoBaseFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoBaseFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoBaseFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoBaseFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoBaseFunctionFunctionName { UNSPECIFIED = 'UNSPECIFIED', NOW_IN_MILLIS = 'NOW_IN_MILLIS', INT_LIST = 'INT_LIST', ENVIRONMENT = 'ENVIRONMENT', GET_EXECUTION_ID = 'GET_EXECUTION_ID', GET_INTEGRATION_NAME = 'GET_INTEGRATION_NAME', GET_REGION = 'GET_REGION', GET_UUID = 'GET_UUID', GET_PROJECT_ID = 'GET_PROJECT_ID' }

	export interface EnterpriseCrmEventbusProtoBaseValue {
		baseFunction?: EnterpriseCrmEventbusProtoFunction;

		/** LINT.IfChange To support various types of parameter values. Next available id: 14 */
		literalValue?: EnterpriseCrmEventbusProtoParameterValueType;

		/** Start with a reference value to dereference. */
		referenceValue?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoBaseValueFormProperties {

		/** Start with a reference value to dereference. */
		referenceValue: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoBaseValueFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoBaseValueFormProperties>({
			referenceValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoFunction {
		functionType?: EnterpriseCrmEventbusProtoFunctionType;

		/** List of parameters required for the transformation. */
		parameters?: Array<EnterpriseCrmEventbusProtoTransformExpression>;
	}
	export interface EnterpriseCrmEventbusProtoFunctionFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoFunctionFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoFunctionType {
		baseFunction?: EnterpriseCrmEventbusProtoBaseFunction;
		booleanArrayFunction?: EnterpriseCrmEventbusProtoBooleanArrayFunction;
		booleanFunction?: EnterpriseCrmEventbusProtoBooleanFunction;
		doubleArrayFunction?: EnterpriseCrmEventbusProtoDoubleArrayFunction;
		doubleFunction?: EnterpriseCrmEventbusProtoDoubleFunction;
		intArrayFunction?: EnterpriseCrmEventbusProtoIntArrayFunction;
		intFunction?: EnterpriseCrmEventbusProtoIntFunction;
		jsonFunction?: EnterpriseCrmEventbusProtoJsonFunction;
		protoArrayFunction?: EnterpriseCrmEventbusProtoProtoArrayFunction;
		protoFunction?: EnterpriseCrmEventbusProtoProtoFunction;
		stringArrayFunction?: EnterpriseCrmEventbusProtoStringArrayFunction;
		stringFunction?: EnterpriseCrmEventbusProtoStringFunction;
	}
	export interface EnterpriseCrmEventbusProtoFunctionTypeFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoFunctionTypeFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoFunctionTypeFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoBooleanArrayFunction {
		functionName?: EnterpriseCrmEventbusProtoBooleanArrayFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoBooleanArrayFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoBooleanArrayFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoBooleanArrayFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoBooleanArrayFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoBooleanArrayFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoBooleanArrayFunctionFunctionName { UNSPECIFIED = 'UNSPECIFIED', GET = 'GET', APPEND = 'APPEND', SIZE = 'SIZE', TO_SET = 'TO_SET', APPEND_ALL = 'APPEND_ALL', TO_JSON = 'TO_JSON', SET = 'SET', REMOVE = 'REMOVE', REMOVE_AT = 'REMOVE_AT', CONTAINS = 'CONTAINS', FOR_EACH = 'FOR_EACH', FILTER = 'FILTER' }

	export interface EnterpriseCrmEventbusProtoBooleanFunction {
		functionName?: EnterpriseCrmEventbusProtoBooleanFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoBooleanFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoBooleanFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoBooleanFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoBooleanFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoBooleanFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoBooleanFunctionFunctionName { UNSPECIFIED = 'UNSPECIFIED', TO_JSON = 'TO_JSON', NOT = 'NOT', AND = 'AND', NAND = 'NAND', OR = 'OR', XOR = 'XOR', NOR = 'NOR', XNOR = 'XNOR', TO_STRING = 'TO_STRING', EQUALS = 'EQUALS' }

	export interface EnterpriseCrmEventbusProtoDoubleArrayFunction {
		functionName?: EnterpriseCrmEventbusProtoDoubleArrayFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoDoubleArrayFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoDoubleArrayFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoDoubleArrayFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoDoubleArrayFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoDoubleArrayFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoDoubleArrayFunctionFunctionName { UNSPECIFIED = 'UNSPECIFIED', GET = 'GET', APPEND = 'APPEND', SIZE = 'SIZE', SUM = 'SUM', AVG = 'AVG', MAX = 'MAX', MIN = 'MIN', TO_SET = 'TO_SET', APPEND_ALL = 'APPEND_ALL', TO_JSON = 'TO_JSON', SET = 'SET', REMOVE = 'REMOVE', REMOVE_AT = 'REMOVE_AT', CONTAINS = 'CONTAINS', FOR_EACH = 'FOR_EACH', FILTER = 'FILTER' }

	export interface EnterpriseCrmEventbusProtoDoubleFunction {
		functionName?: EnterpriseCrmEventbusProtoDoubleFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoDoubleFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoDoubleFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoDoubleFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoDoubleFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoDoubleFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoDoubleFunctionFunctionName { UNSPECIFIED = 'UNSPECIFIED', TO_JSON = 'TO_JSON', TO_STRING = 'TO_STRING', ADD = 'ADD', SUBTRACT = 'SUBTRACT', MULTIPLY = 'MULTIPLY', DIVIDE = 'DIVIDE', EXPONENT = 'EXPONENT', ROUND = 'ROUND', FLOOR = 'FLOOR', CEIL = 'CEIL', GREATER_THAN = 'GREATER_THAN', LESS_THAN = 'LESS_THAN', EQUALS = 'EQUALS', GREATER_THAN_EQUALS = 'GREATER_THAN_EQUALS', LESS_THAN_EQUALS = 'LESS_THAN_EQUALS', MOD = 'MOD' }

	export interface EnterpriseCrmEventbusProtoIntArrayFunction {
		functionName?: EnterpriseCrmEventbusProtoDoubleArrayFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoIntArrayFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoDoubleArrayFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoIntArrayFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoIntArrayFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoDoubleArrayFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoIntFunction {
		functionName?: EnterpriseCrmEventbusProtoIntFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoIntFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoIntFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoIntFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoIntFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoIntFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoIntFunctionFunctionName { UNSPECIFIED = 'UNSPECIFIED', ADD = 'ADD', SUBTRACT = 'SUBTRACT', MULTIPLY = 'MULTIPLY', DIVIDE = 'DIVIDE', EXPONENT = 'EXPONENT', GREATER_THAN_EQUAL_TO = 'GREATER_THAN_EQUAL_TO', GREATER_THAN = 'GREATER_THAN', LESS_THAN_EQUAL_TO = 'LESS_THAN_EQUAL_TO', LESS_THAN = 'LESS_THAN', TO_DOUBLE = 'TO_DOUBLE', TO_STRING = 'TO_STRING', EQUALS = 'EQUALS', TO_JSON = 'TO_JSON', MOD = 'MOD', EPOCH_TO_HUMAN_READABLE_TIME = 'EPOCH_TO_HUMAN_READABLE_TIME' }

	export interface EnterpriseCrmEventbusProtoJsonFunction {
		functionName?: EnterpriseCrmEventbusProtoJsonFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoJsonFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoJsonFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoJsonFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoJsonFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoJsonFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoJsonFunctionFunctionName { UNSPECIFIED = 'UNSPECIFIED', GET_PROPERTY = 'GET_PROPERTY', GET_ELEMENT = 'GET_ELEMENT', APPEND_ELEMENT = 'APPEND_ELEMENT', SIZE = 'SIZE', SET_PROPERTY = 'SET_PROPERTY', FLATTEN = 'FLATTEN', FLATTEN_ONCE = 'FLATTEN_ONCE', MERGE = 'MERGE', TO_STRING = 'TO_STRING', TO_INT = 'TO_INT', TO_DOUBLE = 'TO_DOUBLE', TO_BOOLEAN = 'TO_BOOLEAN', TO_PROTO = 'TO_PROTO', TO_STRING_ARRAY = 'TO_STRING_ARRAY', TO_INT_ARRAY = 'TO_INT_ARRAY', TO_DOUBLE_ARRAY = 'TO_DOUBLE_ARRAY', TO_PROTO_ARRAY = 'TO_PROTO_ARRAY', TO_BOOLEAN_ARRAY = 'TO_BOOLEAN_ARRAY', REMOVE_PROPERTY = 'REMOVE_PROPERTY', RESOLVE_TEMPLATE = 'RESOLVE_TEMPLATE', EQUALS = 'EQUALS', FOR_EACH = 'FOR_EACH', FILTER_ELEMENTS = 'FILTER_ELEMENTS' }

	export interface EnterpriseCrmEventbusProtoProtoArrayFunction {
		functionName?: EnterpriseCrmEventbusProtoBooleanArrayFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoProtoArrayFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoBooleanArrayFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoProtoArrayFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoProtoArrayFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoBooleanArrayFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoProtoFunction {
		functionName?: EnterpriseCrmEventbusProtoProtoFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoProtoFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoProtoFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoProtoFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoProtoFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoProtoFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoProtoFunctionFunctionName { UNSPECIFIED = 'UNSPECIFIED', GET_STRING_SUBFIELD = 'GET_STRING_SUBFIELD', GET_INT_SUBFIELD = 'GET_INT_SUBFIELD', GET_DOUBLE_SUBFIELD = 'GET_DOUBLE_SUBFIELD', GET_BOOLEAN_SUBFIELD = 'GET_BOOLEAN_SUBFIELD', GET_STRING_ARRAY_SUBFIELD = 'GET_STRING_ARRAY_SUBFIELD', GET_INT_ARRAY_SUBFIELD = 'GET_INT_ARRAY_SUBFIELD', GET_DOUBLE_ARRAY_SUBFIELD = 'GET_DOUBLE_ARRAY_SUBFIELD', GET_BOOLEAN_ARRAY_SUBFIELD = 'GET_BOOLEAN_ARRAY_SUBFIELD', GET_PROTO_ARRAY_SUBFIELD = 'GET_PROTO_ARRAY_SUBFIELD', GET_PROTO_SUBFIELD = 'GET_PROTO_SUBFIELD', TO_JSON = 'TO_JSON', GET_BYTES_SUBFIELD_AS_UTF_8_STRING = 'GET_BYTES_SUBFIELD_AS_UTF_8_STRING', GET_BYTES_SUBFIELD_AS_PROTO = 'GET_BYTES_SUBFIELD_AS_PROTO', EQUALS = 'EQUALS' }

	export interface EnterpriseCrmEventbusProtoStringArrayFunction {
		functionName?: EnterpriseCrmEventbusProtoBooleanArrayFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoStringArrayFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoBooleanArrayFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoStringArrayFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoStringArrayFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoBooleanArrayFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoStringFunction {
		functionName?: EnterpriseCrmEventbusProtoStringFunctionFunctionName | null;
	}
	export interface EnterpriseCrmEventbusProtoStringFunctionFormProperties {
		functionName: FormControl<EnterpriseCrmEventbusProtoStringFunctionFunctionName | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoStringFunctionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoStringFunctionFormProperties>({
			functionName: new FormControl<EnterpriseCrmEventbusProtoStringFunctionFunctionName | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoStringFunctionFunctionName { UNSPECIFIED = 'UNSPECIFIED', CONCAT = 'CONCAT', TO_UPPERCASE = 'TO_UPPERCASE', TO_LOWERCASE = 'TO_LOWERCASE', CONTAINS = 'CONTAINS', SPLIT = 'SPLIT', LENGTH = 'LENGTH', EQUALS = 'EQUALS', TO_INT = 'TO_INT', TO_DOUBLE = 'TO_DOUBLE', TO_BOOLEAN = 'TO_BOOLEAN', TO_BASE_64 = 'TO_BASE_64', TO_JSON = 'TO_JSON', EQUALS_IGNORE_CASE = 'EQUALS_IGNORE_CASE', REPLACE_ALL = 'REPLACE_ALL', SUBSTRING = 'SUBSTRING', RESOLVE_TEMPLATE = 'RESOLVE_TEMPLATE', DECODE_BASE64_STRING = 'DECODE_BASE64_STRING' }

	export interface EnterpriseCrmEventbusProtoTransformExpression {
		initialValue?: EnterpriseCrmEventbusProtoBaseValue;

		/** Transformations to be applied sequentially. */
		transformationFunctions?: Array<EnterpriseCrmEventbusProtoFunction>;
	}
	export interface EnterpriseCrmEventbusProtoTransformExpressionFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoTransformExpressionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTransformExpressionFormProperties>({
		});

	}


	/** LINT.IfChange To support various types of parameter values. Next available id: 14 */
	export interface EnterpriseCrmEventbusProtoParameterValueType {
		booleanArray?: EnterpriseCrmEventbusProtoBooleanParameterArray;
		booleanValue?: boolean | null;
		doubleArray?: EnterpriseCrmEventbusProtoDoubleParameterArray;

		/** Type: double */
		doubleValue?: number | null;
		intArray?: EnterpriseCrmEventbusProtoIntParameterArray;
		intValue?: string | null;
		protoArray?: EnterpriseCrmEventbusProtoProtoParameterArray;
		protoValue?: {[id: string]: any };
		serializedObjectValue?: EnterpriseCrmEventbusProtoSerializedObjectParameter;
		stringArray?: EnterpriseCrmEventbusProtoStringParameterArray;
		stringValue?: string | null;
	}

	/** LINT.IfChange To support various types of parameter values. Next available id: 14 */
	export interface EnterpriseCrmEventbusProtoParameterValueTypeFormProperties {
		booleanValue: FormControl<boolean | null | undefined>,

		/** Type: double */
		doubleValue: FormControl<number | null | undefined>,
		intValue: FormControl<string | null | undefined>,
		protoValue: FormControl<{[id: string]: any } | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoParameterValueTypeFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParameterValueTypeFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
			protoValue: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoBooleanParameterArray {
		booleanValues?: Array<boolean>;
	}
	export interface EnterpriseCrmEventbusProtoBooleanParameterArrayFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoBooleanParameterArrayFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoBooleanParameterArrayFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoDoubleParameterArray {
		doubleValues?: Array<number>;
	}
	export interface EnterpriseCrmEventbusProtoDoubleParameterArrayFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoDoubleParameterArrayFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoDoubleParameterArrayFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoIntParameterArray {
		intValues?: Array<string>;
	}
	export interface EnterpriseCrmEventbusProtoIntParameterArrayFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoIntParameterArrayFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoIntParameterArrayFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoProtoParameterArray {
		protoValues?: Array<string>;
	}
	export interface EnterpriseCrmEventbusProtoProtoParameterArrayFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoProtoParameterArrayFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoProtoParameterArrayFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoSerializedObjectParameter {
		objectValue?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoSerializedObjectParameterFormProperties {
		objectValue: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoSerializedObjectParameterFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoSerializedObjectParameterFormProperties>({
			objectValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoStringParameterArray {
		stringValues?: Array<string>;
	}
	export interface EnterpriseCrmEventbusProtoStringParameterArrayFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoStringParameterArrayFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoStringParameterArrayFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoBuganizerNotification {

		/** Whom to assign the new bug. Optional. */
		assigneeEmailAddress?: string | null;

		/** ID of the buganizer component within which to create a new issue. Required. */
		componentId?: string | null;

		/** ID of the buganizer template to use. Optional. */
		templateId?: string | null;

		/** Title of the issue to be created. Required. */
		title?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoBuganizerNotificationFormProperties {

		/** Whom to assign the new bug. Optional. */
		assigneeEmailAddress: FormControl<string | null | undefined>,

		/** ID of the buganizer component within which to create a new issue. Required. */
		componentId: FormControl<string | null | undefined>,

		/** ID of the buganizer template to use. Optional. */
		templateId: FormControl<string | null | undefined>,

		/** Title of the issue to be created. Required. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoBuganizerNotificationFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoBuganizerNotificationFormProperties>({
			assigneeEmailAddress: new FormControl<string | null | undefined>(undefined),
			componentId: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoCloudKmsConfig {

		/** Optional. The id of GCP project where the KMS key is stored. If not provided, assume the key is stored in the same GCP project defined in Client (tag 14). */
		gcpProjectId?: string | null;

		/** A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. A key exists on exactly one key ring tied to a specific location. */
		keyName?: string | null;

		/** A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. A key ring's name does not need to be unique across a Google Cloud project, but must be unique within a given location. */
		keyRingName?: string | null;

		/** Optional. Each version of a key contains key material used for encryption or signing. A key's version is represented by an integer, starting at 1. To decrypt data or verify a signature, you must use the same key version that was used to encrypt or sign the data. */
		keyVersionName?: string | null;

		/** Location name of the key ring, e.g. "us-west1". */
		locationName?: string | null;

		/** Optional. The service account used for authentication of this KMS key. If this is not provided, the service account in Client.clientSource will be used. */
		serviceAccount?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoCloudKmsConfigFormProperties {

		/** Optional. The id of GCP project where the KMS key is stored. If not provided, assume the key is stored in the same GCP project defined in Client (tag 14). */
		gcpProjectId: FormControl<string | null | undefined>,

		/** A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. A key exists on exactly one key ring tied to a specific location. */
		keyName: FormControl<string | null | undefined>,

		/** A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. A key ring's name does not need to be unique across a Google Cloud project, but must be unique within a given location. */
		keyRingName: FormControl<string | null | undefined>,

		/** Optional. Each version of a key contains key material used for encryption or signing. A key's version is represented by an integer, starting at 1. To decrypt data or verify a signature, you must use the same key version that was used to encrypt or sign the data. */
		keyVersionName: FormControl<string | null | undefined>,

		/** Location name of the key ring, e.g. "us-west1". */
		locationName: FormControl<string | null | undefined>,

		/** Optional. The service account used for authentication of this KMS key. If this is not provided, the service account in Client.clientSource will be used. */
		serviceAccount: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoCloudKmsConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoCloudKmsConfigFormProperties>({
			gcpProjectId: new FormControl<string | null | undefined>(undefined),
			keyName: new FormControl<string | null | undefined>(undefined),
			keyRingName: new FormControl<string | null | undefined>(undefined),
			keyVersionName: new FormControl<string | null | undefined>(undefined),
			locationName: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud Scheduler Trigger configuration */
	export interface EnterpriseCrmEventbusProtoCloudSchedulerConfig {

		/** Required. The cron tab of cloud scheduler trigger. */
		cronTab?: string | null;

		/** Optional. When the job was deleted from Pantheon UI, error_message will be populated when Get/List integrations */
		errorMessage?: string | null;

		/** Required. The location where associated cloud scheduler job will be created */
		location?: string | null;

		/** Required. Service account used by Cloud Scheduler to trigger the integration at scheduled time */
		serviceAccountEmail?: string | null;
	}

	/** Cloud Scheduler Trigger configuration */
	export interface EnterpriseCrmEventbusProtoCloudSchedulerConfigFormProperties {

		/** Required. The cron tab of cloud scheduler trigger. */
		cronTab: FormControl<string | null | undefined>,

		/** Optional. When the job was deleted from Pantheon UI, error_message will be populated when Get/List integrations */
		errorMessage: FormControl<string | null | undefined>,

		/** Required. The location where associated cloud scheduler job will be created */
		location: FormControl<string | null | undefined>,

		/** Required. Service account used by Cloud Scheduler to trigger the integration at scheduled time */
		serviceAccountEmail: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoCloudSchedulerConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoCloudSchedulerConfigFormProperties>({
			cronTab: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message recursively combines constituent conditions using logical AND. */
	export interface EnterpriseCrmEventbusProtoCombinedCondition {

		/** A set of individual constituent conditions. */
		conditions?: Array<EnterpriseCrmEventbusProtoCondition>;
	}

	/** This message recursively combines constituent conditions using logical AND. */
	export interface EnterpriseCrmEventbusProtoCombinedConditionFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoCombinedConditionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoCombinedConditionFormProperties>({
		});

	}


	/** Condition that uses `operator` to evaluate the key against the value. */
	export interface EnterpriseCrmEventbusProtoCondition {

		/** Key that's evaluated against the `value`. Please note the data type of the runtime value associated with the key should match the data type of `value`, else an IllegalArgumentException is thrown. */
		eventPropertyKey?: string | null;

		/** Operator used to evaluate the condition. Please note that an operator with an inappropriate key/value operand will result in IllegalArgumentException, e.g. CONTAINS with boolean key/value pair. */
		operator?: EnterpriseCrmEventbusProtoConditionOperator | null;

		/** Used for define type for values. Currently supported value types include int, string, double, array, and any proto message. */
		value?: EnterpriseCrmEventbusProtoValueType;
	}

	/** Condition that uses `operator` to evaluate the key against the value. */
	export interface EnterpriseCrmEventbusProtoConditionFormProperties {

		/** Key that's evaluated against the `value`. Please note the data type of the runtime value associated with the key should match the data type of `value`, else an IllegalArgumentException is thrown. */
		eventPropertyKey: FormControl<string | null | undefined>,

		/** Operator used to evaluate the condition. Please note that an operator with an inappropriate key/value operand will result in IllegalArgumentException, e.g. CONTAINS with boolean key/value pair. */
		operator: FormControl<EnterpriseCrmEventbusProtoConditionOperator | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoConditionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoConditionFormProperties>({
			eventPropertyKey: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<EnterpriseCrmEventbusProtoConditionOperator | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoConditionOperator { UNSET = 'UNSET', EQUALS = 'EQUALS', CONTAINS = 'CONTAINS', LESS_THAN = 'LESS_THAN', GREATER_THAN = 'GREATER_THAN', EXISTS = 'EXISTS', DOES_NOT_EXIST = 'DOES_NOT_EXIST', IS_EMPTY = 'IS_EMPTY', IS_NOT_EMPTY = 'IS_NOT_EMPTY' }


	/** Contains the combined condition calculation results. */
	export interface EnterpriseCrmEventbusProtoConditionResult {

		/** the current task number. */
		currentTaskNumber?: string | null;

		/** the next task number. */
		nextTaskNumber?: string | null;

		/** the result comes out after evaluate the combined condition. True if there's no combined condition specified. */
		result?: boolean | null;
	}

	/** Contains the combined condition calculation results. */
	export interface EnterpriseCrmEventbusProtoConditionResultFormProperties {

		/** the current task number. */
		currentTaskNumber: FormControl<string | null | undefined>,

		/** the next task number. */
		nextTaskNumber: FormControl<string | null | undefined>,

		/** the result comes out after evaluate the combined condition. True if there's no combined condition specified. */
		result: FormControl<boolean | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoConditionResultFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoConditionResultFormProperties>({
			currentTaskNumber: new FormControl<string | null | undefined>(undefined),
			nextTaskNumber: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoConnectorsConnection {

		/** Connection name Format: projects/{project}/locations/{location}/connections/{connection} */
		connectionName?: string | null;

		/** Connector version Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version} */
		connectorVersion?: string | null;

		/** Service name Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service} */
		serviceName?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoConnectorsConnectionFormProperties {

		/** Connection name Format: projects/{project}/locations/{location}/connections/{connection} */
		connectionName: FormControl<string | null | undefined>,

		/** Connector version Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version} */
		connectorVersion: FormControl<string | null | undefined>,

		/** Service name Format: projects/{project}/locations/{location}/namespaces/{namespace}/services/{service} */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoConnectorsConnectionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoConnectorsConnectionFormProperties>({
			connectionName: new FormControl<string | null | undefined>(undefined),
			connectorVersion: new FormControl<string | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfig {
		connection?: EnterpriseCrmEventbusProtoConnectorsConnection;

		/** Operation to perform using the configured connection. */
		operation?: EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfigOperation | null;
	}
	export interface EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfigFormProperties {

		/** Operation to perform using the configured connection. */
		operation: FormControl<EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfigOperation | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfigFormProperties>({
			operation: new FormControl<EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfigOperation | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoConnectorsGenericConnectorTaskConfigOperation { OPERATION_UNSPECIFIED = 'OPERATION_UNSPECIFIED', EXECUTE_ACTION = 'EXECUTE_ACTION', LIST_ENTITIES = 'LIST_ENTITIES', GET_ENTITY = 'GET_ENTITY', CREATE_ENTITY = 'CREATE_ENTITY', UPDATE_ENTITY = 'UPDATE_ENTITY', DELETE_ENTITY = 'DELETE_ENTITY' }


	/** Represents two-dimensional positions. */
	export interface EnterpriseCrmEventbusProtoCoordinate {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		x?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		y?: number | null;
	}

	/** Represents two-dimensional positions. */
	export interface EnterpriseCrmEventbusProtoCoordinateFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		x: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoCoordinateFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoCoordinateFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoCustomSuspensionRequest {

		/** Use this request to post all workflows associated with a given trigger id. Next available id: 11 */
		postToQueueWithTriggerIdRequest?: GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest;

		/** In the fired event, set the SuspensionInfo message as the value for this key. */
		suspensionInfoEventParameterKey?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoCustomSuspensionRequestFormProperties {

		/** In the fired event, set the SuspensionInfo message as the value for this key. */
		suspensionInfoEventParameterKey: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoCustomSuspensionRequestFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoCustomSuspensionRequestFormProperties>({
			suspensionInfoEventParameterKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Use this request to post all workflows associated with a given trigger id. Next available id: 11 */
	export interface GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest {

		/** Optional. If the client id is provided, then the combination of trigger id and client id is matched across all the workflows. If the client id is not provided, then workflows with matching trigger id are executed for each client id in the {@link TriggerConfig}. For Api Trigger, the client id is required and will be validated against the allowed clients. */
		clientId?: string | null;

		/** Optional. Flag to determine whether clients would suppress a warning when no ACTIVE workflows are not found. If this flag is set to be true, an error will not be thrown if the requested trigger_id or client_id is not found in any ACTIVE workflow. Otherwise, the error is always thrown. The flag is set to be false by default. */
		ignoreErrorIfNoActiveWorkflow?: boolean | null;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		parameters?: EnterpriseCrmEventbusProtoEventParameters;

		/** The request priority this request should be processed at. For internal users: */
		priority?: GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriority | null;

		/** Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. Must have no more than 36 characters and contain only alphanumeric characters and hyphens. */
		requestId?: string | null;

		/** This field is only required when using Admin Access. The resource name of target, or the parent resource name. For example: "projects/locations/integrations/*" */
		resourceName?: string | null;

		/** Optional. Time in milliseconds since epoch when the given event would be scheduled. */
		scheduledTime?: string | null;

		/** Optional. Sets test mode in {@link enterprise/crm/eventbus/event_message.proto}. */
		testMode?: boolean | null;

		/** Matched against all {@link TriggerConfig}s across all workflows. i.e. TriggerConfig.trigger_id.equals(trigger_id) Required. */
		triggerId?: string | null;

		/** Optional. If provided, the workflow_name is used to filter all the matched workflows having same trigger_id+client_id. A combination of trigger_id, client_id and workflow_name identifies a unique workflow. */
		workflowName?: string | null;
	}

	/** Use this request to post all workflows associated with a given trigger id. Next available id: 11 */
	export interface GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestFormProperties {

		/** Optional. If the client id is provided, then the combination of trigger id and client id is matched across all the workflows. If the client id is not provided, then workflows with matching trigger id are executed for each client id in the {@link TriggerConfig}. For Api Trigger, the client id is required and will be validated against the allowed clients. */
		clientId: FormControl<string | null | undefined>,

		/** Optional. Flag to determine whether clients would suppress a warning when no ACTIVE workflows are not found. If this flag is set to be true, an error will not be thrown if the requested trigger_id or client_id is not found in any ACTIVE workflow. Otherwise, the error is always thrown. The flag is set to be false by default. */
		ignoreErrorIfNoActiveWorkflow: FormControl<boolean | null | undefined>,

		/** The request priority this request should be processed at. For internal users: */
		priority: FormControl<GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriority | null | undefined>,

		/** Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. Must have no more than 36 characters and contain only alphanumeric characters and hyphens. */
		requestId: FormControl<string | null | undefined>,

		/** This field is only required when using Admin Access. The resource name of target, or the parent resource name. For example: "projects/locations/integrations/*" */
		resourceName: FormControl<string | null | undefined>,

		/** Optional. Time in milliseconds since epoch when the given event would be scheduled. */
		scheduledTime: FormControl<string | null | undefined>,

		/** Optional. Sets test mode in {@link enterprise/crm/eventbus/event_message.proto}. */
		testMode: FormControl<boolean | null | undefined>,

		/** Matched against all {@link TriggerConfig}s across all workflows. i.e. TriggerConfig.trigger_id.equals(trigger_id) Required. */
		triggerId: FormControl<string | null | undefined>,

		/** Optional. If provided, the workflow_name is used to filter all the matched workflows having same trigger_id+client_id. A combination of trigger_id, client_id and workflow_name identifies a unique workflow. */
		workflowName: FormControl<string | null | undefined>,
	}
	export function CreateGoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestFormGroup() {
		return new FormGroup<GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			ignoreErrorIfNoActiveWorkflow: new FormControl<boolean | null | undefined>(undefined),
			priority: new FormControl<GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriority | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			scheduledTime: new FormControl<string | null | undefined>(undefined),
			testMode: new FormControl<boolean | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
			workflowName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
	export interface EnterpriseCrmEventbusProtoEventParameters {

		/** Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution. */
		parameters?: Array<EnterpriseCrmEventbusProtoParameterEntry>;
	}

	/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
	export interface EnterpriseCrmEventbusProtoEventParametersFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoEventParametersFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoEventParametersFormProperties>({
		});

	}


	/** Key-value pair of EventBus parameters. */
	export interface EnterpriseCrmEventbusProtoParameterEntry {

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition. */
		key?: string | null;

		/** LINT.IfChange To support various types of parameter values. Next available id: 14 */
		value?: EnterpriseCrmEventbusProtoParameterValueType;
	}

	/** Key-value pair of EventBus parameters. */
	export interface EnterpriseCrmEventbusProtoParameterEntryFormProperties {

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoParameterEntryFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParameterEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequestPriority { UNSPCIFIED = 'UNSPCIFIED', SHEDDABLE = 'SHEDDABLE', SHEDDABLE_PLUS = 'SHEDDABLE_PLUS', CRITICAL = 'CRITICAL', CRITICAL_PLUS = 'CRITICAL_PLUS' }


	/** An error, warning, or information message associated with a workflow. */
	export interface EnterpriseCrmEventbusProtoErrorDetail {

		/** Registered ids for errors, as "oneof" enums. Each task or logical grouping of tasks may share the same enum. */
		errorCode?: CrmlogErrorCode;

		/** The full text of the error message, including any parameters that were thrown along with the exception. */
		errorMessage?: string | null;

		/** The severity of the error: ERROR|WARN|INFO. */
		severity?: EnterpriseCrmEventbusProtoErrorDetailSeverity | null;

		/**
		 * The task try-number, in which, the error occurred. If zero, the error happened at the event level.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		taskNumber?: number | null;
	}

	/** An error, warning, or information message associated with a workflow. */
	export interface EnterpriseCrmEventbusProtoErrorDetailFormProperties {

		/** The full text of the error message, including any parameters that were thrown along with the exception. */
		errorMessage: FormControl<string | null | undefined>,

		/** The severity of the error: ERROR|WARN|INFO. */
		severity: FormControl<EnterpriseCrmEventbusProtoErrorDetailSeverity | null | undefined>,

		/**
		 * The task try-number, in which, the error occurred. If zero, the error happened at the event level.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		taskNumber: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoErrorDetailFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoErrorDetailFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<EnterpriseCrmEventbusProtoErrorDetailSeverity | null | undefined>(undefined),
			taskNumber: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoErrorDetailSeverity { SEVERITY_UNSPECIFIED = 'SEVERITY_UNSPECIFIED', ERROR = 'ERROR', WARN = 'WARN', INFO = 'INFO' }


	/** LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus. */
	export interface EnterpriseCrmEventbusProtoEventBusProperties {

		/** An unordered list of property entries. */
		properties?: Array<EnterpriseCrmEventbusProtoPropertyEntry>;
	}

	/** LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus. */
	export interface EnterpriseCrmEventbusProtoEventBusPropertiesFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoEventBusPropertiesFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoEventBusPropertiesFormProperties>({
		});

	}


	/** Key-value pair of EventBus property. */
	export interface EnterpriseCrmEventbusProtoPropertyEntry {

		/** Key is used to retrieve the corresponding property value. This should be unique for a given fired event. The Tasks should be aware of the keys used while firing the events for them to be able to retrieve the values. */
		key?: string | null;

		/** Used for define type for values. Currently supported value types include int, string, double, array, and any proto message. */
		value?: EnterpriseCrmEventbusProtoValueType;
	}

	/** Key-value pair of EventBus property. */
	export interface EnterpriseCrmEventbusProtoPropertyEntryFormProperties {

		/** Key is used to retrieve the corresponding property value. This should be unique for a given fired event. The Tasks should be aware of the keys used while firing the events for them to be able to retrieve the values. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoPropertyEntryFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoPropertyEntryFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10 */
	export interface EnterpriseCrmEventbusProtoEventExecutionDetails {
		eventAttemptStats?: Array<EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats>;
		eventExecutionSnapshot?: Array<EnterpriseCrmEventbusProtoEventExecutionSnapshot>;
		eventExecutionState?: EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionState | null;

		/**
		 * Indicates the number of times the execution has restarted from the beginning.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eventRetriesFromBeginningCount?: number | null;

		/** The log file path (aka. cns address) for this event. */
		logFilePath?: string | null;

		/** The network address (aka. bns address) that indicates where the event executor is running. */
		networkAddress?: string | null;

		/** Next scheduled execution time in case the execution status was RETRY_ON_HOLD. */
		nextExecutionTime?: string | null;

		/**
		 * Used internally and shouldn't be exposed to users. A counter for the cron job to record how many times this event is in in_process state but don't have a lock consecutively/
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ryeLockUnheldCount?: number | null;
	}

	/** Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10 */
	export interface EnterpriseCrmEventbusProtoEventExecutionDetailsFormProperties {
		eventExecutionState: FormControl<EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionState | null | undefined>,

		/**
		 * Indicates the number of times the execution has restarted from the beginning.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eventRetriesFromBeginningCount: FormControl<number | null | undefined>,

		/** The log file path (aka. cns address) for this event. */
		logFilePath: FormControl<string | null | undefined>,

		/** The network address (aka. bns address) that indicates where the event executor is running. */
		networkAddress: FormControl<string | null | undefined>,

		/** Next scheduled execution time in case the execution status was RETRY_ON_HOLD. */
		nextExecutionTime: FormControl<string | null | undefined>,

		/**
		 * Used internally and shouldn't be exposed to users. A counter for the cron job to record how many times this event is in in_process state but don't have a lock consecutively/
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ryeLockUnheldCount: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoEventExecutionDetailsFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoEventExecutionDetailsFormProperties>({
			eventExecutionState: new FormControl<EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionState | null | undefined>(undefined),
			eventRetriesFromBeginningCount: new FormControl<number | null | undefined>(undefined),
			logFilePath: new FormControl<string | null | undefined>(undefined),
			networkAddress: new FormControl<string | null | undefined>(undefined),
			nextExecutionTime: new FormControl<string | null | undefined>(undefined),
			ryeLockUnheldCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats {

		/** The end time of the event execution for current attempt. */
		endTime?: string | null;

		/** The start time of the event execution for current attempt. This could be in the future if it's been scheduled. */
		startTime?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStatsFormProperties {

		/** The end time of the event execution for current attempt. */
		endTime: FormControl<string | null | undefined>,

		/** The start time of the event execution for current attempt. This could be in the future if it's been scheduled. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStatsFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStatsFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the snapshot of the event execution for a given checkpoint. Next available id: 13 */
	export interface EnterpriseCrmEventbusProtoEventExecutionSnapshot {

		/** Indicates "right after which checkpoint task's execution" this snapshot is taken. */
		checkpointTaskNumber?: string | null;

		/** All of the computed conditions that been calculated. */
		conditionResults?: Array<EnterpriseCrmEventbusProtoConditionResult>;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		diffParams?: EnterpriseCrmEventbusProtoEventParameters;

		/** Points to the event execution info this snapshot belongs to. */
		eventExecutionInfoId?: string | null;

		/** Auto-generated. Used as primary key for EventExecutionSnapshots table. */
		eventExecutionSnapshotId?: string | null;
		eventExecutionSnapshotMetadata?: EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		eventParams?: EnterpriseCrmEventbusProtoEventParameters;

		/** indicate whether snapshot exceeded maximum size before clean up */
		exceedMaxSize?: boolean | null;

		/** Indicates when this snapshot is taken. */
		snapshotTime?: string | null;

		/** All of the task execution details at the given point of time. */
		taskExecutionDetails?: Array<EnterpriseCrmEventbusProtoTaskExecutionDetails>;

		/** The task name associated with this snapshot. Could be empty. */
		taskName?: string | null;
	}

	/** Contains the snapshot of the event execution for a given checkpoint. Next available id: 13 */
	export interface EnterpriseCrmEventbusProtoEventExecutionSnapshotFormProperties {

		/** Indicates "right after which checkpoint task's execution" this snapshot is taken. */
		checkpointTaskNumber: FormControl<string | null | undefined>,

		/** Points to the event execution info this snapshot belongs to. */
		eventExecutionInfoId: FormControl<string | null | undefined>,

		/** Auto-generated. Used as primary key for EventExecutionSnapshots table. */
		eventExecutionSnapshotId: FormControl<string | null | undefined>,

		/** indicate whether snapshot exceeded maximum size before clean up */
		exceedMaxSize: FormControl<boolean | null | undefined>,

		/** Indicates when this snapshot is taken. */
		snapshotTime: FormControl<string | null | undefined>,

		/** The task name associated with this snapshot. Could be empty. */
		taskName: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoEventExecutionSnapshotFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoEventExecutionSnapshotFormProperties>({
			checkpointTaskNumber: new FormControl<string | null | undefined>(undefined),
			eventExecutionInfoId: new FormControl<string | null | undefined>(undefined),
			eventExecutionSnapshotId: new FormControl<string | null | undefined>(undefined),
			exceedMaxSize: new FormControl<boolean | null | undefined>(undefined),
			snapshotTime: new FormControl<string | null | undefined>(undefined),
			taskName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata {

		/**
		 * the event attempt number this snapshot belongs to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eventAttemptNum?: number | null;

		/**
		 * the task attempt number this snapshot belongs to. Could be empty.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		taskAttemptNum?: number | null;

		/** the task label associated with this snapshot. Could be empty. */
		taskLabel?: string | null;

		/** the task name associated with this snapshot. Could be empty. */
		taskName?: string | null;

		/** The task number associated with this snapshot. Could be empty. */
		taskNumber?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadataFormProperties {

		/**
		 * the event attempt number this snapshot belongs to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eventAttemptNum: FormControl<number | null | undefined>,

		/**
		 * the task attempt number this snapshot belongs to. Could be empty.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		taskAttemptNum: FormControl<number | null | undefined>,

		/** the task label associated with this snapshot. Could be empty. */
		taskLabel: FormControl<string | null | undefined>,

		/** the task name associated with this snapshot. Could be empty. */
		taskName: FormControl<string | null | undefined>,

		/** The task number associated with this snapshot. Could be empty. */
		taskNumber: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadataFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadataFormProperties>({
			eventAttemptNum: new FormControl<number | null | undefined>(undefined),
			taskAttemptNum: new FormControl<number | null | undefined>(undefined),
			taskLabel: new FormControl<string | null | undefined>(undefined),
			taskName: new FormControl<string | null | undefined>(undefined),
			taskNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the details of the execution of this task. Next available id: 11 */
	export interface EnterpriseCrmEventbusProtoTaskExecutionDetails {
		taskAttemptStats?: Array<EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats>;
		taskExecutionState?: EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionState | null;

		/** Pointer to the task config it used for execution. */
		taskNumber?: string | null;
	}

	/** Contains the details of the execution of this task. Next available id: 11 */
	export interface EnterpriseCrmEventbusProtoTaskExecutionDetailsFormProperties {
		taskExecutionState: FormControl<EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionState | null | undefined>,

		/** Pointer to the task config it used for execution. */
		taskNumber: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoTaskExecutionDetailsFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTaskExecutionDetailsFormProperties>({
			taskExecutionState: new FormControl<EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionState | null | undefined>(undefined),
			taskNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStats {

		/** The end time of the task execution for current attempt. */
		endTime?: string | null;

		/** The start time of the task execution for current attempt. This could be in the future if it's been scheduled. */
		startTime?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStatsFormProperties {

		/** The end time of the task execution for current attempt. */
		endTime: FormControl<string | null | undefined>,

		/** The start time of the task execution for current attempt. This could be in the future if it's been scheduled. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStatsFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskAttemptStatsFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoTaskExecutionDetailsTaskExecutionState { UNSPECIFIED = 'UNSPECIFIED', PENDING_EXECUTION = 'PENDING_EXECUTION', IN_PROCESS = 'IN_PROCESS', SUCCEED = 'SUCCEED', FAILED = 'FAILED', FATAL = 'FATAL', RETRY_ON_HOLD = 'RETRY_ON_HOLD', SKIPPED = 'SKIPPED', CANCELED = 'CANCELED', PENDING_ROLLBACK = 'PENDING_ROLLBACK', ROLLBACK_IN_PROCESS = 'ROLLBACK_IN_PROCESS', ROLLEDBACK = 'ROLLEDBACK', SUSPENDED = 'SUSPENDED' }

	export enum EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionState { UNSPECIFIED = 'UNSPECIFIED', ON_HOLD = 'ON_HOLD', IN_PROCESS = 'IN_PROCESS', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELED = 'CANCELED', RETRY_ON_HOLD = 'RETRY_ON_HOLD', SUSPENDED = 'SUSPENDED' }


	/** Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships. */
	export interface EnterpriseCrmEventbusProtoExecutionTraceInfo {

		/** Parent event execution info id that triggers the current execution through SubWorkflowExecutorTask. */
		parentEventExecutionInfoId?: string | null;

		/** Used to aggregate ExecutionTraceInfo. */
		traceId?: string | null;
	}

	/** Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships. */
	export interface EnterpriseCrmEventbusProtoExecutionTraceInfoFormProperties {

		/** Parent event execution info id that triggers the current execution through SubWorkflowExecutorTask. */
		parentEventExecutionInfoId: FormControl<string | null | undefined>,

		/** Used to aggregate ExecutionTraceInfo. */
		traceId: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoExecutionTraceInfoFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoExecutionTraceInfoFormProperties>({
			parentEventExecutionInfoId: new FormControl<string | null | undefined>(undefined),
			traceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents external traffic type and id. */
	export interface EnterpriseCrmEventbusProtoExternalTraffic {

		/** User’s GCP project id the traffic is referring to. */
		gcpProjectId?: string | null;

		/** User’s GCP project number the traffic is referring to. */
		gcpProjectNumber?: string | null;

		/** Location for the user's request. */
		location?: string | null;

		/** LINT.ThenChange(//depot/google3/enterprise/crm/eventbus/proto/product.proto:product, //depot/google3/java/com/google/enterprise/crm/integrationplatform/api/utils/ConverterUtils.java:source_to_product) */
		source?: EnterpriseCrmEventbusProtoExternalTrafficSource | null;
	}

	/** Represents external traffic type and id. */
	export interface EnterpriseCrmEventbusProtoExternalTrafficFormProperties {

		/** User’s GCP project id the traffic is referring to. */
		gcpProjectId: FormControl<string | null | undefined>,

		/** User’s GCP project number the traffic is referring to. */
		gcpProjectNumber: FormControl<string | null | undefined>,

		/** Location for the user's request. */
		location: FormControl<string | null | undefined>,

		/** LINT.ThenChange(//depot/google3/enterprise/crm/eventbus/proto/product.proto:product, //depot/google3/java/com/google/enterprise/crm/integrationplatform/api/utils/ConverterUtils.java:source_to_product) */
		source: FormControl<EnterpriseCrmEventbusProtoExternalTrafficSource | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoExternalTrafficFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoExternalTrafficFormProperties>({
			gcpProjectId: new FormControl<string | null | undefined>(undefined),
			gcpProjectNumber: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<EnterpriseCrmEventbusProtoExternalTrafficSource | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoExternalTrafficSource { SOURCE_UNSPECIFIED = 'SOURCE_UNSPECIFIED', APIGEE = 'APIGEE', SECURITY = 'SECURITY' }


	/** Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied). */
	export interface EnterpriseCrmEventbusProtoFailurePolicy {

		/** Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_WORKFLOW_WITH_BACKOFF. Defines the initial interval for backoff. */
		intervalInSeconds?: string | null;

		/**
		 * Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_WORKFLOW_WITH_BACKOFF. Defines the number of times the task will be retried if failed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumRetries?: number | null;

		/** Defines what happens to the task upon failure. */
		retryStrategy?: EnterpriseCrmEventbusProtoFailurePolicyRetryStrategy | null;
	}

	/** Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied). */
	export interface EnterpriseCrmEventbusProtoFailurePolicyFormProperties {

		/** Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_WORKFLOW_WITH_BACKOFF. Defines the initial interval for backoff. */
		intervalInSeconds: FormControl<string | null | undefined>,

		/**
		 * Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_WORKFLOW_WITH_BACKOFF. Defines the number of times the task will be retried if failed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNumRetries: FormControl<number | null | undefined>,

		/** Defines what happens to the task upon failure. */
		retryStrategy: FormControl<EnterpriseCrmEventbusProtoFailurePolicyRetryStrategy | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoFailurePolicyFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoFailurePolicyFormProperties>({
			intervalInSeconds: new FormControl<string | null | undefined>(undefined),
			maxNumRetries: new FormControl<number | null | undefined>(undefined),
			retryStrategy: new FormControl<EnterpriseCrmEventbusProtoFailurePolicyRetryStrategy | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoFailurePolicyRetryStrategy { UNSPECIFIED = 'UNSPECIFIED', IGNORE = 'IGNORE', NONE = 'NONE', FATAL = 'FATAL', FIXED_INTERVAL = 'FIXED_INTERVAL', LINEAR_BACKOFF = 'LINEAR_BACKOFF', EXPONENTIAL_BACKOFF = 'EXPONENTIAL_BACKOFF', RESTART_WORKFLOW_WITH_BACKOFF = 'RESTART_WORKFLOW_WITH_BACKOFF' }


	/** Information about the value and type of the field. */
	export interface EnterpriseCrmEventbusProtoField {

		/** By default, if the cardinality is unspecified the field is considered required while mapping. */
		cardinality?: EnterpriseCrmEventbusProtoFieldCardinality | null;

		/** LINT.IfChange To support various types of parameter values. Next available id: 14 */
		defaultValue?: EnterpriseCrmEventbusProtoParameterValueType;

		/** Specifies the data type of the field. */
		fieldType?: EnterpriseCrmEventbusProtoFieldFieldType | null;

		/** Optional. The fully qualified proto name (e.g. enterprise.crm.storage.Account). Required for output field of type PROTO_VALUE or PROTO_ARRAY. For e.g., if input field_type is BYTES and output field_type is PROTO_VALUE, then fully qualified proto type url should be provided to parse the input bytes. If field_type is *_ARRAY, then all the converted protos are of the same type. */
		protoDefPath?: string | null;

		/** This holds the reference key of the workflow or task parameter. 1. Any workflow parameter, for e.g. $workflowParam1$. 2. Any task input or output parameter, for e.g. $task1_param1$. 3. Any workflow or task parameters with subfield references, for e.g., $task1_param1.employee.id$ */
		referenceKey?: string | null;
		transformExpression?: EnterpriseCrmEventbusProtoTransformExpression;
	}

	/** Information about the value and type of the field. */
	export interface EnterpriseCrmEventbusProtoFieldFormProperties {

		/** By default, if the cardinality is unspecified the field is considered required while mapping. */
		cardinality: FormControl<EnterpriseCrmEventbusProtoFieldCardinality | null | undefined>,

		/** Specifies the data type of the field. */
		fieldType: FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>,

		/** Optional. The fully qualified proto name (e.g. enterprise.crm.storage.Account). Required for output field of type PROTO_VALUE or PROTO_ARRAY. For e.g., if input field_type is BYTES and output field_type is PROTO_VALUE, then fully qualified proto type url should be provided to parse the input bytes. If field_type is *_ARRAY, then all the converted protos are of the same type. */
		protoDefPath: FormControl<string | null | undefined>,

		/** This holds the reference key of the workflow or task parameter. 1. Any workflow parameter, for e.g. $workflowParam1$. 2. Any task input or output parameter, for e.g. $task1_param1$. 3. Any workflow or task parameters with subfield references, for e.g., $task1_param1.employee.id$ */
		referenceKey: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoFieldFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoFieldFormProperties>({
			cardinality: new FormControl<EnterpriseCrmEventbusProtoFieldCardinality | null | undefined>(undefined),
			fieldType: new FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>(undefined),
			protoDefPath: new FormControl<string | null | undefined>(undefined),
			referenceKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoFieldCardinality { UNSPECIFIED = 'UNSPECIFIED', OPTIONAL = 'OPTIONAL' }

	export enum EnterpriseCrmEventbusProtoFieldFieldType { DATA_TYPE_UNSPECIFIED = 'DATA_TYPE_UNSPECIFIED', STRING_VALUE = 'STRING_VALUE', INT_VALUE = 'INT_VALUE', DOUBLE_VALUE = 'DOUBLE_VALUE', BOOLEAN_VALUE = 'BOOLEAN_VALUE', PROTO_VALUE = 'PROTO_VALUE', SERIALIZED_OBJECT_VALUE = 'SERIALIZED_OBJECT_VALUE', STRING_ARRAY = 'STRING_ARRAY', INT_ARRAY = 'INT_ARRAY', DOUBLE_ARRAY = 'DOUBLE_ARRAY', PROTO_ARRAY = 'PROTO_ARRAY', PROTO_ENUM = 'PROTO_ENUM', BOOLEAN_ARRAY = 'BOOLEAN_ARRAY', PROTO_ENUM_ARRAY = 'PROTO_ENUM_ARRAY', BYTES = 'BYTES', BYTES_ARRAY = 'BYTES_ARRAY', NON_SERIALIZABLE_OBJECT = 'NON_SERIALIZABLE_OBJECT', JSON_VALUE = 'JSON_VALUE' }


	/** Field Mapping Config to map multiple output fields values from input fields values. */
	export interface EnterpriseCrmEventbusProtoFieldMappingConfig {
		mappedFields?: Array<EnterpriseCrmEventbusProtoMappedField>;
	}

	/** Field Mapping Config to map multiple output fields values from input fields values. */
	export interface EnterpriseCrmEventbusProtoFieldMappingConfigFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoFieldMappingConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoFieldMappingConfigFormProperties>({
		});

	}


	/** Mapped field is a pair of input field and output field. */
	export interface EnterpriseCrmEventbusProtoMappedField {

		/** Information about the value and type of the field. */
		inputField?: EnterpriseCrmEventbusProtoField;

		/** Information about the value and type of the field. */
		outputField?: EnterpriseCrmEventbusProtoField;
	}

	/** Mapped field is a pair of input field and output field. */
	export interface EnterpriseCrmEventbusProtoMappedFieldFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoMappedFieldFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoMappedFieldFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoLoopMetadata {

		/** Starting from 1, not 0. */
		currentIterationCount?: string | null;

		/** Needs to be set by the loop impl class before each iteration. The abstract loop class will append the request and response to it. Eg. The foreach Loop will clean up and set it as the current iteration element at the start of each loop. The post request and response will be appended to the value once they are available. */
		currentIterationDetail?: string | null;

		/** Add the error message when loops fail. */
		errorMsg?: string | null;

		/** Indicates where in the loop logic did it error out. */
		failureLocation?: EnterpriseCrmEventbusProtoLoopMetadataFailureLocation | null;
	}
	export interface EnterpriseCrmEventbusProtoLoopMetadataFormProperties {

		/** Starting from 1, not 0. */
		currentIterationCount: FormControl<string | null | undefined>,

		/** Needs to be set by the loop impl class before each iteration. The abstract loop class will append the request and response to it. Eg. The foreach Loop will clean up and set it as the current iteration element at the start of each loop. The post request and response will be appended to the value once they are available. */
		currentIterationDetail: FormControl<string | null | undefined>,

		/** Add the error message when loops fail. */
		errorMsg: FormControl<string | null | undefined>,

		/** Indicates where in the loop logic did it error out. */
		failureLocation: FormControl<EnterpriseCrmEventbusProtoLoopMetadataFailureLocation | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoLoopMetadataFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoLoopMetadataFormProperties>({
			currentIterationCount: new FormControl<string | null | undefined>(undefined),
			currentIterationDetail: new FormControl<string | null | undefined>(undefined),
			errorMsg: new FormControl<string | null | undefined>(undefined),
			failureLocation: new FormControl<EnterpriseCrmEventbusProtoLoopMetadataFailureLocation | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoLoopMetadataFailureLocation { UNKNOWN = 'UNKNOWN', SUBWORKFLOW = 'SUBWORKFLOW', PARAM_OVERRIDING = 'PARAM_OVERRIDING', PARAM_AGGREGATING = 'PARAM_AGGREGATING', SETTING_ITERATION_ELEMENT = 'SETTING_ITERATION_ELEMENT', GETTING_LIST_TO_ITERATE = 'GETTING_LIST_TO_ITERATE', CONDITION_EVALUATION = 'CONDITION_EVALUATION', BUILDING_REQUEST = 'BUILDING_REQUEST' }


	/** The task that is next in line to be executed, if the condition specified evaluated to true. */
	export interface EnterpriseCrmEventbusProtoNextTask {

		/** Combined condition for this task to become an eligible next task. Each of these combined_conditions are joined with logical OR. DEPRECATED: use `condition` */
		combinedConditions?: Array<EnterpriseCrmEventbusProtoCombinedCondition>;

		/** Standard filter expression for this task to become an eligible next task. */
		condition?: string | null;

		/** User-provided description intended to give more business context about the next task edge or condition. */
		description?: string | null;

		/** User-provided label that is attached to this edge in the UI. */
		label?: string | null;

		/** ID of the next task. */
		taskConfigId?: string | null;

		/** Task number of the next task. */
		taskNumber?: string | null;
	}

	/** The task that is next in line to be executed, if the condition specified evaluated to true. */
	export interface EnterpriseCrmEventbusProtoNextTaskFormProperties {

		/** Standard filter expression for this task to become an eligible next task. */
		condition: FormControl<string | null | undefined>,

		/** User-provided description intended to give more business context about the next task edge or condition. */
		description: FormControl<string | null | undefined>,

		/** User-provided label that is attached to this edge in the UI. */
		label: FormControl<string | null | undefined>,

		/** ID of the next task. */
		taskConfigId: FormControl<string | null | undefined>,

		/** Task number of the next task. */
		taskNumber: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoNextTaskFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoNextTaskFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			taskConfigId: new FormControl<string | null | undefined>(undefined),
			taskNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The teardown task that is next in line to be executed. We support only sequential execution of teardown tasks (i.e. no branching). */
	export interface EnterpriseCrmEventbusProtoNextTeardownTask {

		/** Required. Name of the next teardown task. */
		name?: string | null;
	}

	/** The teardown task that is next in line to be executed. We support only sequential execution of teardown tasks (i.e. no branching). */
	export interface EnterpriseCrmEventbusProtoNextTeardownTaskFormProperties {

		/** Required. Name of the next teardown task. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoNextTeardownTaskFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoNextTeardownTaskFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a node identifier (type + id). Next highest id: 3 */
	export interface EnterpriseCrmEventbusProtoNodeIdentifier {

		/** Configuration of the edge. */
		elementIdentifier?: string | null;

		/** Destination node where the edge ends. It can only be a task config. */
		elementType?: EnterpriseCrmEventbusProtoNodeIdentifierElementType | null;
	}

	/** Represents a node identifier (type + id). Next highest id: 3 */
	export interface EnterpriseCrmEventbusProtoNodeIdentifierFormProperties {

		/** Configuration of the edge. */
		elementIdentifier: FormControl<string | null | undefined>,

		/** Destination node where the edge ends. It can only be a task config. */
		elementType: FormControl<EnterpriseCrmEventbusProtoNodeIdentifierElementType | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoNodeIdentifierFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoNodeIdentifierFormProperties>({
			elementIdentifier: new FormControl<string | null | undefined>(undefined),
			elementType: new FormControl<EnterpriseCrmEventbusProtoNodeIdentifierElementType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoNodeIdentifierElementType { UNKNOWN_TYPE = 'UNKNOWN_TYPE', TASK_CONFIG = 'TASK_CONFIG', TRIGGER_CONFIG = 'TRIGGER_CONFIG' }

	export interface EnterpriseCrmEventbusProtoNotification {
		buganizerNotification?: EnterpriseCrmEventbusProtoBuganizerNotification;

		/** Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes. */
		emailAddress?: EnterpriseCrmEventbusProtoAddress;
		escalatorQueue?: string | null;
		pubsubTopic?: string | null;
		request?: EnterpriseCrmEventbusProtoCustomSuspensionRequest;
	}
	export interface EnterpriseCrmEventbusProtoNotificationFormProperties {
		escalatorQueue: FormControl<string | null | undefined>,
		pubsubTopic: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoNotificationFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoNotificationFormProperties>({
			escalatorQueue: new FormControl<string | null | undefined>(undefined),
			pubsubTopic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoParamSpecEntryConfig {

		/** A short phrase to describe what this parameter contains. */
		descriptivePhrase?: string | null;

		/** Detailed help text for this parameter containing information not provided elsewhere. For example, instructions on how to migrate from a deprecated parameter. */
		helpText?: string | null;

		/** Whether the default value is hidden in the UI. */
		hideDefaultValue?: boolean | null;
		inputDisplayOption?: EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOption | null;

		/** Whether this field is hidden in the UI. */
		isHidden?: boolean | null;

		/** A user-friendly label for the parameter. */
		label?: string | null;
		parameterNameOption?: EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOption | null;

		/** A user-friendly label for subSection under which the parameter will be displayed. */
		subSectionLabel?: string | null;

		/** Placeholder text which will appear in the UI input form for this parameter. */
		uiPlaceholderText?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoParamSpecEntryConfigFormProperties {

		/** A short phrase to describe what this parameter contains. */
		descriptivePhrase: FormControl<string | null | undefined>,

		/** Detailed help text for this parameter containing information not provided elsewhere. For example, instructions on how to migrate from a deprecated parameter. */
		helpText: FormControl<string | null | undefined>,

		/** Whether the default value is hidden in the UI. */
		hideDefaultValue: FormControl<boolean | null | undefined>,
		inputDisplayOption: FormControl<EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOption | null | undefined>,

		/** Whether this field is hidden in the UI. */
		isHidden: FormControl<boolean | null | undefined>,

		/** A user-friendly label for the parameter. */
		label: FormControl<string | null | undefined>,
		parameterNameOption: FormControl<EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOption | null | undefined>,

		/** A user-friendly label for subSection under which the parameter will be displayed. */
		subSectionLabel: FormControl<string | null | undefined>,

		/** Placeholder text which will appear in the UI input form for this parameter. */
		uiPlaceholderText: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoParamSpecEntryConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParamSpecEntryConfigFormProperties>({
			descriptivePhrase: new FormControl<string | null | undefined>(undefined),
			helpText: new FormControl<string | null | undefined>(undefined),
			hideDefaultValue: new FormControl<boolean | null | undefined>(undefined),
			inputDisplayOption: new FormControl<EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOption | null | undefined>(undefined),
			isHidden: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			parameterNameOption: new FormControl<EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOption | null | undefined>(undefined),
			subSectionLabel: new FormControl<string | null | undefined>(undefined),
			uiPlaceholderText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoParamSpecEntryConfigInputDisplayOption { DEFAULT = 'DEFAULT', STRING_MULTI_LINE = 'STRING_MULTI_LINE', NUMBER_SLIDER = 'NUMBER_SLIDER', BOOLEAN_TOGGLE = 'BOOLEAN_TOGGLE' }

	export enum EnterpriseCrmEventbusProtoParamSpecEntryConfigParameterNameOption { DEFAULT_NOT_PARAMETER_NAME = 'DEFAULT_NOT_PARAMETER_NAME', IS_PARAMETER_NAME = 'IS_PARAMETER_NAME', KEY_IS_PARAMETER_NAME = 'KEY_IS_PARAMETER_NAME', VALUE_IS_PARAMETER_NAME = 'VALUE_IS_PARAMETER_NAME' }

	export interface EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition {

		/** The fully-qualified proto name. This message, for example, would be "enterprise.crm.eventbus.proto.ParamSpecEntry.ProtoDefinition". */
		fullName?: string | null;

		/** Path to the proto file that contains the message type's definition. */
		path?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinitionFormProperties {

		/** The fully-qualified proto name. This message, for example, would be "enterprise.crm.eventbus.proto.ParamSpecEntry.ProtoDefinition". */
		fullName: FormControl<string | null | undefined>,

		/** Path to the proto file that contains the message type's definition. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoParamSpecEntryProtoDefinitionFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinitionFormProperties>({
			fullName: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoParamSpecEntryValidationRule {

		/** Range used to validate doubles and floats. */
		doubleRange?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange;

		/** Range used to validate longs and ints. */
		intRange?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange;

		/** Rule used to validate strings. */
		stringRegex?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex;
	}
	export interface EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoParamSpecEntryValidationRuleFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleFormProperties>({
		});

	}


	/** Range used to validate doubles and floats. */
	export interface EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange {

		/**
		 * The inclusive maximum of the acceptable range.
		 * Type: double
		 */
		max?: number | null;

		/**
		 * The inclusive minimum of the acceptable range.
		 * Type: double
		 */
		min?: number | null;
	}

	/** Range used to validate doubles and floats. */
	export interface EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRangeFormProperties {

		/**
		 * The inclusive maximum of the acceptable range.
		 * Type: double
		 */
		max: FormControl<number | null | undefined>,

		/**
		 * The inclusive minimum of the acceptable range.
		 * Type: double
		 */
		min: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRangeFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRangeFormProperties>({
			max: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Range used to validate longs and ints. */
	export interface EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRange {

		/** The inclusive maximum of the acceptable range. */
		max?: string | null;

		/** The inclusive minimum of the acceptable range. */
		min?: string | null;
	}

	/** Range used to validate longs and ints. */
	export interface EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRangeFormProperties {

		/** The inclusive maximum of the acceptable range. */
		max: FormControl<string | null | undefined>,

		/** The inclusive minimum of the acceptable range. */
		min: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRangeFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleIntRangeFormProperties>({
			max: new FormControl<string | null | undefined>(undefined),
			min: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Rule used to validate strings. */
	export interface EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex {

		/** Whether the regex matcher is applied exclusively (if true, matching values will be rejected). */
		exclusive?: boolean | null;

		/** The regex applied to the input value(s). */
		regex?: string | null;
	}

	/** Rule used to validate strings. */
	export interface EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegexFormProperties {

		/** Whether the regex matcher is applied exclusively (if true, matching values will be rejected). */
		exclusive: FormControl<boolean | null | undefined>,

		/** The regex applied to the input value(s). */
		regex: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegexFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegexFormProperties>({
			exclusive: new FormControl<boolean | null | undefined>(undefined),
			regex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified. */
	export interface EnterpriseCrmEventbusProtoParameterMap {
		entries?: Array<EnterpriseCrmEventbusProtoParameterMapEntry>;

		/** Option to specify key value type for all entries of the map. If provided then field types for all entries must conform to this. */
		keyType?: EnterpriseCrmEventbusProtoFieldFieldType | null;
		valueType?: EnterpriseCrmEventbusProtoFieldFieldType | null;
	}

	/** A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified. */
	export interface EnterpriseCrmEventbusProtoParameterMapFormProperties {

		/** Option to specify key value type for all entries of the map. If provided then field types for all entries must conform to this. */
		keyType: FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>,
		valueType: FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoParameterMapFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParameterMapFormProperties>({
			keyType: new FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>(undefined),
			valueType: new FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>(undefined),
		});

	}


	/** Entry is a pair of key and value. */
	export interface EnterpriseCrmEventbusProtoParameterMapEntry {

		/** Field represents either the key or value in an entry. */
		key?: EnterpriseCrmEventbusProtoParameterMapField;

		/** Field represents either the key or value in an entry. */
		value?: EnterpriseCrmEventbusProtoParameterMapField;
	}

	/** Entry is a pair of key and value. */
	export interface EnterpriseCrmEventbusProtoParameterMapEntryFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoParameterMapEntryFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParameterMapEntryFormProperties>({
		});

	}


	/** Field represents either the key or value in an entry. */
	export interface EnterpriseCrmEventbusProtoParameterMapField {

		/** LINT.IfChange To support various types of parameter values. Next available id: 14 */
		literalValue?: EnterpriseCrmEventbusProtoParameterValueType;

		/** Referencing one of the WF variables. */
		referenceKey?: string | null;
	}

	/** Field represents either the key or value in an entry. */
	export interface EnterpriseCrmEventbusProtoParameterMapFieldFormProperties {

		/** Referencing one of the WF variables. */
		referenceKey: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoParameterMapFieldFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoParameterMapFieldFormProperties>({
			referenceKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoScatterResponse {

		/** The error message of the failure if applicable. */
		errorMsg?: string | null;

		/** The execution ids of each Subworkflow fired by this scatter. */
		executionIds?: Array<string>;

		/** If execution is sync, this is true if the execution passed and false if it failed. If the execution is async, this is true if the WF was fired off successfully, and false if it failed to execute. The success or failure of the subworkflows executed are not captured. */
		isSuccessful?: boolean | null;

		/** A list of all the response parameters in the aggregtorMap stored with the remapped key. */
		responseParams?: Array<EnterpriseCrmEventbusProtoParameterEntry>;

		/** LINT.IfChange To support various types of parameter values. Next available id: 14 */
		scatterElement?: EnterpriseCrmEventbusProtoParameterValueType;
	}
	export interface EnterpriseCrmEventbusProtoScatterResponseFormProperties {

		/** The error message of the failure if applicable. */
		errorMsg: FormControl<string | null | undefined>,

		/** If execution is sync, this is true if the execution passed and false if it failed. If the execution is async, this is true if the WF was fired off successfully, and false if it failed to execute. The success or failure of the subworkflows executed are not captured. */
		isSuccessful: FormControl<boolean | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoScatterResponseFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoScatterResponseFormProperties>({
			errorMsg: new FormControl<string | null | undefined>(undefined),
			isSuccessful: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Policy that dictates the behavior for the task after it completes successfully. */
	export interface EnterpriseCrmEventbusProtoSuccessPolicy {

		/** State to which the execution snapshot status will be set if the task succeeds. */
		finalState?: EnterpriseCrmEventbusProtoSuccessPolicyFinalState | null;
	}

	/** Policy that dictates the behavior for the task after it completes successfully. */
	export interface EnterpriseCrmEventbusProtoSuccessPolicyFormProperties {

		/** State to which the execution snapshot status will be set if the task succeeds. */
		finalState: FormControl<EnterpriseCrmEventbusProtoSuccessPolicyFinalState | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoSuccessPolicyFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoSuccessPolicyFormProperties>({
			finalState: new FormControl<EnterpriseCrmEventbusProtoSuccessPolicyFinalState | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoSuccessPolicyFinalState { UNSPECIFIED = 'UNSPECIFIED', SUCCEEDED = 'SUCCEEDED', SUSPENDED = 'SUSPENDED' }


	/** LINT.IfChange */
	export interface EnterpriseCrmEventbusProtoSuspensionAuthPermissions {
		gaiaIdentity?: EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity;
		googleGroup?: EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity;
		loasRole?: string | null;
		mdbGroup?: string | null;
	}

	/** LINT.IfChange */
	export interface EnterpriseCrmEventbusProtoSuspensionAuthPermissionsFormProperties {
		loasRole: FormControl<string | null | undefined>,
		mdbGroup: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoSuspensionAuthPermissionsFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoSuspensionAuthPermissionsFormProperties>({
			loasRole: new FormControl<string | null | undefined>(undefined),
			mdbGroup: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentity {
		emailAddress?: string | null;
		gaiaId?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentityFormProperties {
		emailAddress: FormControl<string | null | undefined>,
		gaiaId: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentityFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoSuspensionAuthPermissionsGaiaIdentityFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			gaiaId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoSuspensionConfig {

		/** Optional information to provide recipients of the suspension in addition to the resolution URL, typically containing relevant parameter values from the originating workflow. */
		customMessage?: string | null;
		notifications?: Array<EnterpriseCrmEventbusProtoNotification>;
		suspensionExpiration?: EnterpriseCrmEventbusProtoSuspensionExpiration;

		/** Identities able to resolve this suspension. */
		whoMayResolve?: Array<EnterpriseCrmEventbusProtoSuspensionAuthPermissions>;
	}
	export interface EnterpriseCrmEventbusProtoSuspensionConfigFormProperties {

		/** Optional information to provide recipients of the suspension in addition to the resolution URL, typically containing relevant parameter values from the originating workflow. */
		customMessage: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoSuspensionConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoSuspensionConfigFormProperties>({
			customMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoSuspensionExpiration {

		/**
		 * Milliseconds after which the suspension expires, if no action taken.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expireAfterMs?: number | null;

		/** Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior. */
		liftWhenExpired?: boolean | null;

		/**
		 * Milliseconds after which the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remindAfterMs?: number | null;
	}
	export interface EnterpriseCrmEventbusProtoSuspensionExpirationFormProperties {

		/**
		 * Milliseconds after which the suspension expires, if no action taken.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expireAfterMs: FormControl<number | null | undefined>,

		/** Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior. */
		liftWhenExpired: FormControl<boolean | null | undefined>,

		/**
		 * Milliseconds after which the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		remindAfterMs: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoSuspensionExpirationFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoSuspensionExpirationFormProperties>({
			expireAfterMs: new FormControl<number | null | undefined>(undefined),
			liftWhenExpired: new FormControl<boolean | null | undefined>(undefined),
			remindAfterMs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoSuspensionResolutionInfo {
		audit?: EnterpriseCrmEventbusProtoSuspensionResolutionInfoAudit;

		/** The event data user sends as request. */
		clientId?: string | null;
		cloudKmsConfig?: EnterpriseCrmEventbusProtoCloudKmsConfig;

		/** Auto-generated. */
		createdTimestamp?: string | null;

		/** Encrypted SuspensionResolutionInfo */
		encryptedSuspensionResolutionInfo?: string | null;

		/** Required. ID of the associated execution. */
		eventExecutionInfoId?: string | null;

		/** Represents external traffic type and id. */
		externalTraffic?: EnterpriseCrmEventbusProtoExternalTraffic;

		/** Auto-generated. */
		lastModifiedTimestamp?: string | null;

		/** Which Google product the suspension belongs to. If not set, the suspension belongs to Integration Platform by default. */
		product?: EnterpriseCrmEventbusProtoSuspensionResolutionInfoProduct | null;
		status?: EnterpriseCrmEventbusProtoSuspensionResolutionInfoStatus | null;
		suspensionConfig?: EnterpriseCrmEventbusProtoSuspensionConfig;

		/** Primary key for the SuspensionResolutionInfoTable. */
		suspensionId?: string | null;

		/** Required. Task number of the associated SuspensionTask. */
		taskNumber?: string | null;

		/** Required. The name of the originating workflow. */
		workflowName?: string | null;

		/** Wrapped dek */
		wrappedDek?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoSuspensionResolutionInfoFormProperties {

		/** The event data user sends as request. */
		clientId: FormControl<string | null | undefined>,

		/** Auto-generated. */
		createdTimestamp: FormControl<string | null | undefined>,

		/** Encrypted SuspensionResolutionInfo */
		encryptedSuspensionResolutionInfo: FormControl<string | null | undefined>,

		/** Required. ID of the associated execution. */
		eventExecutionInfoId: FormControl<string | null | undefined>,

		/** Auto-generated. */
		lastModifiedTimestamp: FormControl<string | null | undefined>,

		/** Which Google product the suspension belongs to. If not set, the suspension belongs to Integration Platform by default. */
		product: FormControl<EnterpriseCrmEventbusProtoSuspensionResolutionInfoProduct | null | undefined>,
		status: FormControl<EnterpriseCrmEventbusProtoSuspensionResolutionInfoStatus | null | undefined>,

		/** Primary key for the SuspensionResolutionInfoTable. */
		suspensionId: FormControl<string | null | undefined>,

		/** Required. Task number of the associated SuspensionTask. */
		taskNumber: FormControl<string | null | undefined>,

		/** Required. The name of the originating workflow. */
		workflowName: FormControl<string | null | undefined>,

		/** Wrapped dek */
		wrappedDek: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoSuspensionResolutionInfoFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoSuspensionResolutionInfoFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			createdTimestamp: new FormControl<string | null | undefined>(undefined),
			encryptedSuspensionResolutionInfo: new FormControl<string | null | undefined>(undefined),
			eventExecutionInfoId: new FormControl<string | null | undefined>(undefined),
			lastModifiedTimestamp: new FormControl<string | null | undefined>(undefined),
			product: new FormControl<EnterpriseCrmEventbusProtoSuspensionResolutionInfoProduct | null | undefined>(undefined),
			status: new FormControl<EnterpriseCrmEventbusProtoSuspensionResolutionInfoStatus | null | undefined>(undefined),
			suspensionId: new FormControl<string | null | undefined>(undefined),
			taskNumber: new FormControl<string | null | undefined>(undefined),
			workflowName: new FormControl<string | null | undefined>(undefined),
			wrappedDek: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoSuspensionResolutionInfoAudit {
		resolvedBy?: string | null;
		resolvedByCpi?: string | null;
		timestamp?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoSuspensionResolutionInfoAuditFormProperties {
		resolvedBy: FormControl<string | null | undefined>,
		resolvedByCpi: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoSuspensionResolutionInfoAuditFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoSuspensionResolutionInfoAuditFormProperties>({
			resolvedBy: new FormControl<string | null | undefined>(undefined),
			resolvedByCpi: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoSuspensionResolutionInfoProduct { UNSPECIFIED_PRODUCT = 'UNSPECIFIED_PRODUCT', IP = 'IP', APIGEE = 'APIGEE', SECURITY = 'SECURITY' }

	export enum EnterpriseCrmEventbusProtoSuspensionResolutionInfoStatus { PENDING_UNSPECIFIED = 'PENDING_UNSPECIFIED', REJECTED = 'REJECTED', LIFTED = 'LIFTED', CANCELED = 'CANCELED' }


	/** Message to be used to configure alerting in the {@code TaskConfig} protos for tasks in an event. */
	export interface EnterpriseCrmEventbusProtoTaskAlertConfig {

		/** The period over which the metric value should be aggregated and evaluated. Format is , where integer should be a positive integer and unit should be one of (s,m,h,d,w) meaning (second, minute, hour, day, week). */
		aggregationPeriod?: string | null;

		/** Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this workflow alert. */
		alertDisabled?: boolean | null;

		/** A name to identify this alert. This will be displayed in the alert subject. If set, this name should be unique in within the scope of the containing workflow. */
		alertName?: string | null;

		/** Client associated with this alert configuration. Must be a client enabled in one of the containing workflow's triggers. */
		clientId?: string | null;

		/** Should be specified only for TASK_AVERAGE_DURATION and TASK_PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger. */
		durationThresholdMs?: string | null;

		/** List of error enums for alerts. */
		errorEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
		metricType?: EnterpriseCrmEventbusProtoTaskAlertConfigMetricType | null;

		/**
		 * For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numAggregationPeriods?: number | null;

		/** Only count final task attempts, not retries. */
		onlyFinalAttempt?: boolean | null;

		/** Link to a playbook for resolving the issue that triggered this alert. */
		playbookUrl?: string | null;

		/** The threshold type for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired. */
		thresholdType?: EnterpriseCrmEventbusProtoTaskAlertConfigThresholdType | null;

		/** The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig. */
		thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;

		/** List of error enums for alerts. */
		warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
	}

	/** Message to be used to configure alerting in the {@code TaskConfig} protos for tasks in an event. */
	export interface EnterpriseCrmEventbusProtoTaskAlertConfigFormProperties {

		/** The period over which the metric value should be aggregated and evaluated. Format is , where integer should be a positive integer and unit should be one of (s,m,h,d,w) meaning (second, minute, hour, day, week). */
		aggregationPeriod: FormControl<string | null | undefined>,

		/** Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this workflow alert. */
		alertDisabled: FormControl<boolean | null | undefined>,

		/** A name to identify this alert. This will be displayed in the alert subject. If set, this name should be unique in within the scope of the containing workflow. */
		alertName: FormControl<string | null | undefined>,

		/** Client associated with this alert configuration. Must be a client enabled in one of the containing workflow's triggers. */
		clientId: FormControl<string | null | undefined>,

		/** Should be specified only for TASK_AVERAGE_DURATION and TASK_PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger. */
		durationThresholdMs: FormControl<string | null | undefined>,
		metricType: FormControl<EnterpriseCrmEventbusProtoTaskAlertConfigMetricType | null | undefined>,

		/**
		 * For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numAggregationPeriods: FormControl<number | null | undefined>,

		/** Only count final task attempts, not retries. */
		onlyFinalAttempt: FormControl<boolean | null | undefined>,

		/** Link to a playbook for resolving the issue that triggered this alert. */
		playbookUrl: FormControl<string | null | undefined>,

		/** The threshold type for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired. */
		thresholdType: FormControl<EnterpriseCrmEventbusProtoTaskAlertConfigThresholdType | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoTaskAlertConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTaskAlertConfigFormProperties>({
			aggregationPeriod: new FormControl<string | null | undefined>(undefined),
			alertDisabled: new FormControl<boolean | null | undefined>(undefined),
			alertName: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			durationThresholdMs: new FormControl<string | null | undefined>(undefined),
			metricType: new FormControl<EnterpriseCrmEventbusProtoTaskAlertConfigMetricType | null | undefined>(undefined),
			numAggregationPeriods: new FormControl<number | null | undefined>(undefined),
			onlyFinalAttempt: new FormControl<boolean | null | undefined>(undefined),
			playbookUrl: new FormControl<string | null | undefined>(undefined),
			thresholdType: new FormControl<EnterpriseCrmEventbusProtoTaskAlertConfigThresholdType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoTaskAlertConfigMetricType { METRIC_TYPE_UNSPECIFIED = 'METRIC_TYPE_UNSPECIFIED', TASK_ERROR_RATE = 'TASK_ERROR_RATE', TASK_WARNING_RATE = 'TASK_WARNING_RATE', TASK_RATE = 'TASK_RATE', TASK_AVERAGE_DURATION = 'TASK_AVERAGE_DURATION', TASK_PERCENTILE_DURATION = 'TASK_PERCENTILE_DURATION' }

	export enum EnterpriseCrmEventbusProtoTaskAlertConfigThresholdType { UNSPECIFIED_THRESHOLD_TYPE = 'UNSPECIFIED_THRESHOLD_TYPE', EXPECTED_MIN = 'EXPECTED_MIN', EXPECTED_MAX = 'EXPECTED_MAX' }


	/** TaskMetadata are attributes that are associated to every common Task we have. */
	export interface EnterpriseCrmEventbusProtoTaskMetadata {

		/** The new task name to replace the current task if it is deprecated. Otherwise, it is the same as the current task name. */
		activeTaskName?: string | null;
		admins?: Array<EnterpriseCrmEventbusProtoTaskMetadataAdmin>;
		category?: EnterpriseCrmEventbusProtoTaskMetadataCategory | null;

		/** The Code Search link to the Task Java file. */
		codeSearchLink?: string | null;

		/** Controls whether JSON workflow parameters are validated against provided schemas before and/or after this task's execution. */
		defaultJsonValidationOption?: EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOption | null;

		/** Contains the initial configuration of the task with default values set. For now, The string should be compatible to an ASCII-proto format. */
		defaultSpec?: string | null;

		/** In a few sentences, describe the purpose and usage of the task. */
		description?: string | null;

		/** The string name to show on the task list on the Workflow editor screen. This should be a very short, one to two words name for the task. (e.g. "Send Mail") */
		descriptiveName?: string | null;

		/** Snippet of markdown documentation to embed in the RHP for this task. */
		docMarkdown?: string | null;
		externalCategory?: EnterpriseCrmEventbusProtoTaskMetadataExternalCategory | null;

		/**
		 * Sequence with which the task in specific category to be displayed in task discovery panel for external users.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		externalCategorySequence?: number | null;

		/** External-facing documention embedded in the RHP for this task. */
		externalDocHtml?: string | null;

		/** Doc link for external-facing documentation (separate from g3doc). */
		externalDocLink?: string | null;

		/** DEPRECATED: Use external_doc_html. */
		externalDocMarkdown?: string | null;

		/** URL to the associated G3 Doc for the task if available */
		g3DocLink?: string | null;

		/** URL to gstatic image icon for this task. This icon shows up on the task list panel along with the task name in the Workflow Editor screen. Use the 24p, 2x, gray color icon image format. */
		iconLink?: string | null;

		/** The deprecation status of the current task. Default value is false; */
		isDeprecated?: boolean | null;

		/** The actual class name or the annotated name of the task. Task Author should initialize this field with value from the getName() method of the Task class. */
		name?: string | null;

		/** External-facing documention for standalone IP in pantheon embedded in the RHP for this task. Non null only if different from external_doc_html */
		standaloneExternalDocHtml?: string | null;

		/** Allows author to indicate if the task is ready to use or not. If not set, then it will default to INACTIVE. */
		status?: EnterpriseCrmEventbusProtoTaskMetadataStatus | null;
		system?: EnterpriseCrmEventbusProtoTaskMetadataSystem | null;

		/** A set of tags that pertain to a particular task. This can be used to improve the searchability of tasks with several names ("REST Caller" vs. "Call REST Endpoint") or to help users find tasks based on related words. */
		tags?: Array<string>;
	}

	/** TaskMetadata are attributes that are associated to every common Task we have. */
	export interface EnterpriseCrmEventbusProtoTaskMetadataFormProperties {

		/** The new task name to replace the current task if it is deprecated. Otherwise, it is the same as the current task name. */
		activeTaskName: FormControl<string | null | undefined>,
		category: FormControl<EnterpriseCrmEventbusProtoTaskMetadataCategory | null | undefined>,

		/** The Code Search link to the Task Java file. */
		codeSearchLink: FormControl<string | null | undefined>,

		/** Controls whether JSON workflow parameters are validated against provided schemas before and/or after this task's execution. */
		defaultJsonValidationOption: FormControl<EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOption | null | undefined>,

		/** Contains the initial configuration of the task with default values set. For now, The string should be compatible to an ASCII-proto format. */
		defaultSpec: FormControl<string | null | undefined>,

		/** In a few sentences, describe the purpose and usage of the task. */
		description: FormControl<string | null | undefined>,

		/** The string name to show on the task list on the Workflow editor screen. This should be a very short, one to two words name for the task. (e.g. "Send Mail") */
		descriptiveName: FormControl<string | null | undefined>,

		/** Snippet of markdown documentation to embed in the RHP for this task. */
		docMarkdown: FormControl<string | null | undefined>,
		externalCategory: FormControl<EnterpriseCrmEventbusProtoTaskMetadataExternalCategory | null | undefined>,

		/**
		 * Sequence with which the task in specific category to be displayed in task discovery panel for external users.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		externalCategorySequence: FormControl<number | null | undefined>,

		/** External-facing documention embedded in the RHP for this task. */
		externalDocHtml: FormControl<string | null | undefined>,

		/** Doc link for external-facing documentation (separate from g3doc). */
		externalDocLink: FormControl<string | null | undefined>,

		/** DEPRECATED: Use external_doc_html. */
		externalDocMarkdown: FormControl<string | null | undefined>,

		/** URL to the associated G3 Doc for the task if available */
		g3DocLink: FormControl<string | null | undefined>,

		/** URL to gstatic image icon for this task. This icon shows up on the task list panel along with the task name in the Workflow Editor screen. Use the 24p, 2x, gray color icon image format. */
		iconLink: FormControl<string | null | undefined>,

		/** The deprecation status of the current task. Default value is false; */
		isDeprecated: FormControl<boolean | null | undefined>,

		/** The actual class name or the annotated name of the task. Task Author should initialize this field with value from the getName() method of the Task class. */
		name: FormControl<string | null | undefined>,

		/** External-facing documention for standalone IP in pantheon embedded in the RHP for this task. Non null only if different from external_doc_html */
		standaloneExternalDocHtml: FormControl<string | null | undefined>,

		/** Allows author to indicate if the task is ready to use or not. If not set, then it will default to INACTIVE. */
		status: FormControl<EnterpriseCrmEventbusProtoTaskMetadataStatus | null | undefined>,
		system: FormControl<EnterpriseCrmEventbusProtoTaskMetadataSystem | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoTaskMetadataFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTaskMetadataFormProperties>({
			activeTaskName: new FormControl<string | null | undefined>(undefined),
			category: new FormControl<EnterpriseCrmEventbusProtoTaskMetadataCategory | null | undefined>(undefined),
			codeSearchLink: new FormControl<string | null | undefined>(undefined),
			defaultJsonValidationOption: new FormControl<EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOption | null | undefined>(undefined),
			defaultSpec: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			descriptiveName: new FormControl<string | null | undefined>(undefined),
			docMarkdown: new FormControl<string | null | undefined>(undefined),
			externalCategory: new FormControl<EnterpriseCrmEventbusProtoTaskMetadataExternalCategory | null | undefined>(undefined),
			externalCategorySequence: new FormControl<number | null | undefined>(undefined),
			externalDocHtml: new FormControl<string | null | undefined>(undefined),
			externalDocLink: new FormControl<string | null | undefined>(undefined),
			externalDocMarkdown: new FormControl<string | null | undefined>(undefined),
			g3DocLink: new FormControl<string | null | undefined>(undefined),
			iconLink: new FormControl<string | null | undefined>(undefined),
			isDeprecated: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			standaloneExternalDocHtml: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<EnterpriseCrmEventbusProtoTaskMetadataStatus | null | undefined>(undefined),
			system: new FormControl<EnterpriseCrmEventbusProtoTaskMetadataSystem | null | undefined>(undefined),
		});

	}


	/** Admins are owners of a Task, and have all permissions on a particular task identified by the task name. By default, Eventbus periodically scans all task metadata and syncs (adds) any new admins defined here to Zanzibar. */
	export interface EnterpriseCrmEventbusProtoTaskMetadataAdmin {
		googleGroupEmail?: string | null;
		userEmail?: string | null;
	}

	/** Admins are owners of a Task, and have all permissions on a particular task identified by the task name. By default, Eventbus periodically scans all task metadata and syncs (adds) any new admins defined here to Zanzibar. */
	export interface EnterpriseCrmEventbusProtoTaskMetadataAdminFormProperties {
		googleGroupEmail: FormControl<string | null | undefined>,
		userEmail: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoTaskMetadataAdminFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTaskMetadataAdminFormProperties>({
			googleGroupEmail: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoTaskMetadataCategory { UNSPECIFIED_CATEGORY = 'UNSPECIFIED_CATEGORY', CUSTOM = 'CUSTOM', FLOW_CONTROL = 'FLOW_CONTROL', DATA_MANIPULATION = 'DATA_MANIPULATION', SCRIPTING = 'SCRIPTING', CONNECTOR = 'CONNECTOR', HIDDEN = 'HIDDEN', CLOUD_SYSTEMS = 'CLOUD_SYSTEMS', CUSTOM_TASK_TEMPLATE = 'CUSTOM_TASK_TEMPLATE', TASK_RECOMMENDATIONS = 'TASK_RECOMMENDATIONS' }

	export enum EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOption { UNSPECIFIED_JSON_VALIDATION_OPTION = 'UNSPECIFIED_JSON_VALIDATION_OPTION', SKIP = 'SKIP', PRE_EXECUTION = 'PRE_EXECUTION', POST_EXECUTION = 'POST_EXECUTION', PRE_POST_EXECUTION = 'PRE_POST_EXECUTION' }

	export enum EnterpriseCrmEventbusProtoTaskMetadataExternalCategory { UNSPECIFIED_EXTERNAL_CATEGORY = 'UNSPECIFIED_EXTERNAL_CATEGORY', CORE = 'CORE', CONNECTORS = 'CONNECTORS', EXTERNAL_HTTP = 'EXTERNAL_HTTP', EXTERNAL_INTEGRATION_SERVICES = 'EXTERNAL_INTEGRATION_SERVICES', EXTERNAL_CUSTOMER_ACTIONS = 'EXTERNAL_CUSTOMER_ACTIONS', EXTERNAL_FLOW_CONTROL = 'EXTERNAL_FLOW_CONTROL', EXTERNAL_WORKSPACE = 'EXTERNAL_WORKSPACE', EXTERNAL_SECURITY = 'EXTERNAL_SECURITY', EXTERNAL_DATABASES = 'EXTERNAL_DATABASES', EXTERNAL_ANALYTICS = 'EXTERNAL_ANALYTICS', EXTERNAL_BYOC = 'EXTERNAL_BYOC', EXTERNAL_BYOT = 'EXTERNAL_BYOT', EXTERNAL_ARTIFICIAL_INTELIGENCE = 'EXTERNAL_ARTIFICIAL_INTELIGENCE', EXTERNAL_DATA_MANIPULATION = 'EXTERNAL_DATA_MANIPULATION' }

	export enum EnterpriseCrmEventbusProtoTaskMetadataStatus { UNSPECIFIED_STATUS = 'UNSPECIFIED_STATUS', DEFAULT_INACTIVE = 'DEFAULT_INACTIVE', ACTIVE = 'ACTIVE' }

	export enum EnterpriseCrmEventbusProtoTaskMetadataSystem { UNSPECIFIED_SYSTEM = 'UNSPECIFIED_SYSTEM', GENERIC = 'GENERIC', BUGANIZER = 'BUGANIZER', SALESFORCE = 'SALESFORCE', CLOUD_SQL = 'CLOUD_SQL', PLX = 'PLX', SHEETS = 'SHEETS', GOOGLE_GROUPS = 'GOOGLE_GROUPS', EMAIL = 'EMAIL', SPANNER = 'SPANNER', DATA_BRIDGE = 'DATA_BRIDGE' }


	/** Task authors would use this type to configure the UI for a particular task by specifying what UI config modules should be included to compose the UI. Learn more about config module framework: */
	export interface EnterpriseCrmEventbusProtoTaskUiConfig {

		/** Configurations of included config modules. */
		taskUiModuleConfigs?: Array<EnterpriseCrmEventbusProtoTaskUiModuleConfig>;
	}

	/** Task authors would use this type to configure the UI for a particular task by specifying what UI config modules should be included to compose the UI. Learn more about config module framework: */
	export interface EnterpriseCrmEventbusProtoTaskUiConfigFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoTaskUiConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTaskUiConfigFormProperties>({
		});

	}


	/** Task author would use this type to configure a config module. */
	export interface EnterpriseCrmEventbusProtoTaskUiModuleConfig {

		/** ID of the config module. */
		moduleId?: EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleId | null;
	}

	/** Task author would use this type to configure a config module. */
	export interface EnterpriseCrmEventbusProtoTaskUiModuleConfigFormProperties {

		/** ID of the config module. */
		moduleId: FormControl<EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleId | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoTaskUiModuleConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTaskUiModuleConfigFormProperties>({
			moduleId: new FormControl<EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleId | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoTaskUiModuleConfigModuleId { UNSPECIFIED_TASK_MODULE = 'UNSPECIFIED_TASK_MODULE', LABEL = 'LABEL', ERROR_HANDLING = 'ERROR_HANDLING', TASK_PARAM_TABLE = 'TASK_PARAM_TABLE', TASK_PARAM_FORM = 'TASK_PARAM_FORM', PRECONDITION = 'PRECONDITION', SCRIPT_EDITOR = 'SCRIPT_EDITOR', RPC = 'RPC', TASK_SUMMARY = 'TASK_SUMMARY', SUSPENSION = 'SUSPENSION', RPC_TYPED = 'RPC_TYPED', SUB_WORKFLOW = 'SUB_WORKFLOW', APPS_SCRIPT_NAVIGATOR = 'APPS_SCRIPT_NAVIGATOR', SUB_WORKFLOW_FOR_EACH_LOOP = 'SUB_WORKFLOW_FOR_EACH_LOOP', FIELD_MAPPING = 'FIELD_MAPPING', README = 'README', REST_CALLER = 'REST_CALLER', SUB_WORKFLOW_SCATTER_GATHER = 'SUB_WORKFLOW_SCATTER_GATHER', CLOUD_SQL = 'CLOUD_SQL', GENERIC_CONNECTOR_TASK = 'GENERIC_CONNECTOR_TASK' }

	export interface EnterpriseCrmEventbusProtoTeardown {

		/** Required. */
		teardownTaskConfigs?: Array<EnterpriseCrmEventbusProtoTeardownTaskConfig>;
	}
	export interface EnterpriseCrmEventbusProtoTeardownFormProperties {
	}
	export function CreateEnterpriseCrmEventbusProtoTeardownFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTeardownFormProperties>({
		});

	}

	export interface EnterpriseCrmEventbusProtoTeardownTaskConfig {

		/** The creator's email address. */
		creatorEmail?: string | null;

		/** Required. Unique identifier of the teardown task within this Config. We use this field as the identifier to find next teardown tasks. */
		name?: string | null;

		/** The teardown task that is next in line to be executed. We support only sequential execution of teardown tasks (i.e. no branching). */
		nextTeardownTask?: EnterpriseCrmEventbusProtoNextTeardownTask;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		parameters?: EnterpriseCrmEventbusProtoEventParameters;

		/** LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus. */
		properties?: EnterpriseCrmEventbusProtoEventBusProperties;

		/** Required. Implementation class name. */
		teardownTaskImplementationClassName?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoTeardownTaskConfigFormProperties {

		/** The creator's email address. */
		creatorEmail: FormControl<string | null | undefined>,

		/** Required. Unique identifier of the teardown task within this Config. We use this field as the identifier to find next teardown tasks. */
		name: FormControl<string | null | undefined>,

		/** Required. Implementation class name. */
		teardownTaskImplementationClassName: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoTeardownTaskConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTeardownTaskConfigFormProperties>({
			creatorEmail: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			teardownTaskImplementationClassName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusProtoTriggerCriteria {

		/** Required. Standard filter expression, when true the workflow will be executed. If there's no trigger_criteria_task_implementation_class_name specified, the condition will be validated directly. */
		condition?: string | null;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		parameters?: EnterpriseCrmEventbusProtoEventParameters;

		/** Optional. Implementation class name. The class should implement the “TypedTask” interface. */
		triggerCriteriaTaskImplementationClassName?: string | null;
	}
	export interface EnterpriseCrmEventbusProtoTriggerCriteriaFormProperties {

		/** Required. Standard filter expression, when true the workflow will be executed. If there's no trigger_criteria_task_implementation_class_name specified, the condition will be validated directly. */
		condition: FormControl<string | null | undefined>,

		/** Optional. Implementation class name. The class should implement the “TypedTask” interface. */
		triggerCriteriaTaskImplementationClassName: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoTriggerCriteriaFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoTriggerCriteriaFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
			triggerCriteriaTaskImplementationClassName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message to be used to configure custom alerting in the {@code EventConfig} protos for an event. */
	export interface EnterpriseCrmEventbusProtoWorkflowAlertConfig {

		/** For an EXPECTED_MIN threshold, this aggregation_period must be lesser than 24 hours. */
		aggregationPeriod?: string | null;

		/** Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this workflow alert. */
		alertDisabled?: boolean | null;

		/** A name to identify this alert. This will be displayed in the alert subject. If set, this name should be unique within the scope of the workflow. */
		alertName?: string | null;

		/** Client associated with this alert configuration. */
		clientId?: string | null;

		/** Should be specified only for *AVERAGE_DURATION and *PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger. */
		durationThresholdMs?: string | null;

		/** List of error enums for alerts. */
		errorEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
		metricType?: EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricType | null;

		/**
		 * For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numAggregationPeriods?: number | null;

		/** For either events or tasks, depending on the type of alert, count only final attempts, not retries. */
		onlyFinalAttempt?: boolean | null;

		/** Link to a playbook for resolving the issue that triggered this alert. */
		playbookUrl?: string | null;

		/** The threshold type, whether lower(expected_min) or upper(expected_max), for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired. */
		thresholdType?: EnterpriseCrmEventbusProtoTaskAlertConfigThresholdType | null;

		/** The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig. */
		thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;

		/** List of error enums for alerts. */
		warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
	}

	/** Message to be used to configure custom alerting in the {@code EventConfig} protos for an event. */
	export interface EnterpriseCrmEventbusProtoWorkflowAlertConfigFormProperties {

		/** For an EXPECTED_MIN threshold, this aggregation_period must be lesser than 24 hours. */
		aggregationPeriod: FormControl<string | null | undefined>,

		/** Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this workflow alert. */
		alertDisabled: FormControl<boolean | null | undefined>,

		/** A name to identify this alert. This will be displayed in the alert subject. If set, this name should be unique within the scope of the workflow. */
		alertName: FormControl<string | null | undefined>,

		/** Client associated with this alert configuration. */
		clientId: FormControl<string | null | undefined>,

		/** Should be specified only for *AVERAGE_DURATION and *PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger. */
		durationThresholdMs: FormControl<string | null | undefined>,
		metricType: FormControl<EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricType | null | undefined>,

		/**
		 * For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numAggregationPeriods: FormControl<number | null | undefined>,

		/** For either events or tasks, depending on the type of alert, count only final attempts, not retries. */
		onlyFinalAttempt: FormControl<boolean | null | undefined>,

		/** Link to a playbook for resolving the issue that triggered this alert. */
		playbookUrl: FormControl<string | null | undefined>,

		/** The threshold type, whether lower(expected_min) or upper(expected_max), for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired. */
		thresholdType: FormControl<EnterpriseCrmEventbusProtoTaskAlertConfigThresholdType | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusProtoWorkflowAlertConfigFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusProtoWorkflowAlertConfigFormProperties>({
			aggregationPeriod: new FormControl<string | null | undefined>(undefined),
			alertDisabled: new FormControl<boolean | null | undefined>(undefined),
			alertName: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			durationThresholdMs: new FormControl<string | null | undefined>(undefined),
			metricType: new FormControl<EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricType | null | undefined>(undefined),
			numAggregationPeriods: new FormControl<number | null | undefined>(undefined),
			onlyFinalAttempt: new FormControl<boolean | null | undefined>(undefined),
			playbookUrl: new FormControl<string | null | undefined>(undefined),
			thresholdType: new FormControl<EnterpriseCrmEventbusProtoTaskAlertConfigThresholdType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricType { METRIC_TYPE_UNSPECIFIED = 'METRIC_TYPE_UNSPECIFIED', EVENT_ERROR_RATE = 'EVENT_ERROR_RATE', EVENT_WARNING_RATE = 'EVENT_WARNING_RATE', TASK_ERROR_RATE = 'TASK_ERROR_RATE', TASK_WARNING_RATE = 'TASK_WARNING_RATE', TASK_RATE = 'TASK_RATE', EVENT_RATE = 'EVENT_RATE', EVENT_AVERAGE_DURATION = 'EVENT_AVERAGE_DURATION', EVENT_PERCENTILE_DURATION = 'EVENT_PERCENTILE_DURATION', TASK_AVERAGE_DURATION = 'TASK_AVERAGE_DURATION', TASK_PERCENTILE_DURATION = 'TASK_PERCENTILE_DURATION' }


	/** Stats for the requested dimensions: QPS, duration, and error/warning rate */
	export interface EnterpriseCrmEventbusStats {
		dimensions?: EnterpriseCrmEventbusStatsDimensions;

		/**
		 * Average duration in seconds.
		 * Type: double
		 */
		durationInSeconds?: number | null;

		/**
		 * Average error rate.
		 * Type: double
		 */
		errorRate?: number | null;

		/**
		 * Queries per second.
		 * Type: double
		 */
		qps?: number | null;

		/**
		 * Average warning rate.
		 * Type: double
		 */
		warningRate?: number | null;
	}

	/** Stats for the requested dimensions: QPS, duration, and error/warning rate */
	export interface EnterpriseCrmEventbusStatsFormProperties {

		/**
		 * Average duration in seconds.
		 * Type: double
		 */
		durationInSeconds: FormControl<number | null | undefined>,

		/**
		 * Average error rate.
		 * Type: double
		 */
		errorRate: FormControl<number | null | undefined>,

		/**
		 * Queries per second.
		 * Type: double
		 */
		qps: FormControl<number | null | undefined>,

		/**
		 * Average warning rate.
		 * Type: double
		 */
		warningRate: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusStatsFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusStatsFormProperties>({
			durationInSeconds: new FormControl<number | null | undefined>(undefined),
			errorRate: new FormControl<number | null | undefined>(undefined),
			qps: new FormControl<number | null | undefined>(undefined),
			warningRate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmEventbusStatsDimensions {
		clientId?: string | null;

		/** Whether to include or exclude the enums matching the regex. */
		enumFilterType?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterType | null;
		errorEnumString?: string | null;
		retryAttempt?: EnterpriseCrmEventbusStatsDimensionsRetryAttempt | null;
		taskName?: string | null;
		taskNumber?: string | null;

		/** Stats have been or will be aggregated on set fields for any semantically-meaningful combination. */
		triggerId?: string | null;
		warningEnumString?: string | null;
		workflowId?: string | null;
		workflowName?: string | null;
	}
	export interface EnterpriseCrmEventbusStatsDimensionsFormProperties {
		clientId: FormControl<string | null | undefined>,

		/** Whether to include or exclude the enums matching the regex. */
		enumFilterType: FormControl<EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterType | null | undefined>,
		errorEnumString: FormControl<string | null | undefined>,
		retryAttempt: FormControl<EnterpriseCrmEventbusStatsDimensionsRetryAttempt | null | undefined>,
		taskName: FormControl<string | null | undefined>,
		taskNumber: FormControl<string | null | undefined>,

		/** Stats have been or will be aggregated on set fields for any semantically-meaningful combination. */
		triggerId: FormControl<string | null | undefined>,
		warningEnumString: FormControl<string | null | undefined>,
		workflowId: FormControl<string | null | undefined>,
		workflowName: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmEventbusStatsDimensionsFormGroup() {
		return new FormGroup<EnterpriseCrmEventbusStatsDimensionsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			enumFilterType: new FormControl<EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumListFilterType | null | undefined>(undefined),
			errorEnumString: new FormControl<string | null | undefined>(undefined),
			retryAttempt: new FormControl<EnterpriseCrmEventbusStatsDimensionsRetryAttempt | null | undefined>(undefined),
			taskName: new FormControl<string | null | undefined>(undefined),
			taskNumber: new FormControl<string | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
			warningEnumString: new FormControl<string | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined),
			workflowName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmEventbusStatsDimensionsRetryAttempt { UNSPECIFIED = 'UNSPECIFIED', FINAL = 'FINAL', RETRYABLE = 'RETRYABLE', CANCELED = 'CANCELED' }

	export interface EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray {
		booleanValues?: Array<boolean>;
	}
	export interface EnterpriseCrmFrontendsEventbusProtoBooleanParameterArrayFormProperties {
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoBooleanParameterArrayFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoBooleanParameterArrayFormProperties>({
		});

	}

	export interface EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray {
		doubleValues?: Array<number>;
	}
	export interface EnterpriseCrmFrontendsEventbusProtoDoubleParameterArrayFormProperties {
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoDoubleParameterArrayFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoDoubleParameterArrayFormProperties>({
		});

	}


	/** Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10 */
	export interface EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails {
		eventAttemptStats?: Array<EnterpriseCrmEventbusProtoEventExecutionDetailsEventAttemptStats>;

		/** After snapshot migration, this field will no longer be populated, but old execution snapshots will still be accessible. */
		eventExecutionSnapshot?: Array<EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot>;

		/** The execution state of this event. */
		eventExecutionState?: EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionState | null;

		/**
		 * Indicates the number of times the execution has restarted from the beginning.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eventRetriesFromBeginningCount?: number | null;

		/** The log file path (aka. cns address) for this event. */
		logFilePath?: string | null;

		/** The network address (aka. bns address) that indicates where the event executor is running. */
		networkAddress?: string | null;

		/** Next scheduled execution time in case the execution status was RETRY_ON_HOLD. */
		nextExecutionTime?: string | null;

		/**
		 * Used internally and shouldn't be exposed to users. A counter for the cron job to record how many times this event is in in_process state but don't have a lock consecutively/
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ryeLockUnheldCount?: number | null;
	}

	/** Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10 */
	export interface EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsFormProperties {

		/** The execution state of this event. */
		eventExecutionState: FormControl<EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionState | null | undefined>,

		/**
		 * Indicates the number of times the execution has restarted from the beginning.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		eventRetriesFromBeginningCount: FormControl<number | null | undefined>,

		/** The log file path (aka. cns address) for this event. */
		logFilePath: FormControl<string | null | undefined>,

		/** The network address (aka. bns address) that indicates where the event executor is running. */
		networkAddress: FormControl<string | null | undefined>,

		/** Next scheduled execution time in case the execution status was RETRY_ON_HOLD. */
		nextExecutionTime: FormControl<string | null | undefined>,

		/**
		 * Used internally and shouldn't be exposed to users. A counter for the cron job to record how many times this event is in in_process state but don't have a lock consecutively/
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ryeLockUnheldCount: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoEventExecutionDetailsFormProperties>({
			eventExecutionState: new FormControl<EnterpriseCrmEventbusProtoEventExecutionDetailsEventExecutionState | null | undefined>(undefined),
			eventRetriesFromBeginningCount: new FormControl<number | null | undefined>(undefined),
			logFilePath: new FormControl<string | null | undefined>(undefined),
			networkAddress: new FormControl<string | null | undefined>(undefined),
			nextExecutionTime: new FormControl<string | null | undefined>(undefined),
			ryeLockUnheldCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshot {

		/** Indicates "right after which checkpoint task's execution" this snapshot is taken. */
		checkpointTaskNumber?: string | null;

		/** All of the computed conditions that been calculated. */
		conditionResults?: Array<EnterpriseCrmEventbusProtoConditionResult>;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		diffParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

		/** Points to the event execution info this snapshot belongs to. */
		eventExecutionInfoId?: string | null;

		/** Auto-generated. Used as primary key for EventExecutionSnapshots table. */
		eventExecutionSnapshotId?: string | null;
		eventExecutionSnapshotMetadata?: EnterpriseCrmEventbusProtoEventExecutionSnapshotEventExecutionSnapshotMetadata;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		eventParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

		/** Indicates when this snapshot is taken. */
		snapshotTime?: string | null;

		/** All of the task execution details at the given point of time. */
		taskExecutionDetails?: Array<EnterpriseCrmEventbusProtoTaskExecutionDetails>;

		/** The task name associated with this snapshot. Could be empty. */
		taskName?: string | null;
	}
	export interface EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshotFormProperties {

		/** Indicates "right after which checkpoint task's execution" this snapshot is taken. */
		checkpointTaskNumber: FormControl<string | null | undefined>,

		/** Points to the event execution info this snapshot belongs to. */
		eventExecutionInfoId: FormControl<string | null | undefined>,

		/** Auto-generated. Used as primary key for EventExecutionSnapshots table. */
		eventExecutionSnapshotId: FormControl<string | null | undefined>,

		/** Indicates when this snapshot is taken. */
		snapshotTime: FormControl<string | null | undefined>,

		/** The task name associated with this snapshot. Could be empty. */
		taskName: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshotFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoEventExecutionSnapshotFormProperties>({
			checkpointTaskNumber: new FormControl<string | null | undefined>(undefined),
			eventExecutionInfoId: new FormControl<string | null | undefined>(undefined),
			eventExecutionSnapshotId: new FormControl<string | null | undefined>(undefined),
			snapshotTime: new FormControl<string | null | undefined>(undefined),
			taskName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
	export interface EnterpriseCrmFrontendsEventbusProtoEventParameters {

		/** Parameters are a part of Event and can be used to communicate between different tasks that are part of the same workflow execution. */
		parameters?: Array<EnterpriseCrmFrontendsEventbusProtoParameterEntry>;
	}

	/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
	export interface EnterpriseCrmFrontendsEventbusProtoEventParametersFormProperties {
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoEventParametersFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoEventParametersFormProperties>({
		});

	}


	/** Key-value pair of EventBus parameters. */
	export interface EnterpriseCrmFrontendsEventbusProtoParameterEntry {

		/** Explicitly getting the type of the parameter. */
		dataType?: EnterpriseCrmEventbusProtoFieldFieldType | null;

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the workflow definition. */
		key?: string | null;

		/** To support various types of parameter values. Next available id: 14 */
		value?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;
	}

	/** Key-value pair of EventBus parameters. */
	export interface EnterpriseCrmFrontendsEventbusProtoParameterEntryFormProperties {

		/** Explicitly getting the type of the parameter. */
		dataType: FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>,

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the workflow definition. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoParameterEntryFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoParameterEntryFormProperties>({
			dataType: new FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** To support various types of parameter values. Next available id: 14 */
	export interface EnterpriseCrmFrontendsEventbusProtoParameterValueType {
		booleanArray?: EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray;
		booleanValue?: boolean | null;
		doubleArray?: EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray;

		/** Type: double */
		doubleValue?: number | null;
		intArray?: EnterpriseCrmFrontendsEventbusProtoIntParameterArray;
		intValue?: string | null;
		jsonValue?: string | null;
		protoArray?: EnterpriseCrmFrontendsEventbusProtoProtoParameterArray;
		protoValue?: {[id: string]: any };
		serializedObjectValue?: EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter;
		stringArray?: EnterpriseCrmFrontendsEventbusProtoStringParameterArray;
		stringValue?: string | null;
	}

	/** To support various types of parameter values. Next available id: 14 */
	export interface EnterpriseCrmFrontendsEventbusProtoParameterValueTypeFormProperties {
		booleanValue: FormControl<boolean | null | undefined>,

		/** Type: double */
		doubleValue: FormControl<number | null | undefined>,
		intValue: FormControl<string | null | undefined>,
		jsonValue: FormControl<string | null | undefined>,
		protoValue: FormControl<{[id: string]: any } | null | undefined>,
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoParameterValueTypeFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoParameterValueTypeFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
			jsonValue: new FormControl<string | null | undefined>(undefined),
			protoValue: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmFrontendsEventbusProtoIntParameterArray {
		intValues?: Array<string>;
	}
	export interface EnterpriseCrmFrontendsEventbusProtoIntParameterArrayFormProperties {
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoIntParameterArrayFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoIntParameterArrayFormProperties>({
		});

	}

	export interface EnterpriseCrmFrontendsEventbusProtoProtoParameterArray {
		protoValues?: Array<string>;
	}
	export interface EnterpriseCrmFrontendsEventbusProtoProtoParameterArrayFormProperties {
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoProtoParameterArrayFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoProtoParameterArrayFormProperties>({
		});

	}

	export interface EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter {
		objectValue?: string | null;
	}
	export interface EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameterFormProperties {
		objectValue: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoSerializedObjectParameterFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameterFormProperties>({
			objectValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmFrontendsEventbusProtoStringParameterArray {
		stringValues?: Array<string>;
	}
	export interface EnterpriseCrmFrontendsEventbusProtoStringParameterArrayFormProperties {
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoStringParameterArrayFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoStringParameterArrayFormProperties>({
		});

	}


	/** Contains all the execution details for a workflow instance. Next available id: 24 */
	export interface EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo {

		/** The event data user sends as request. */
		clientId?: string | null;

		/** Auto-generated. */
		createTime?: string | null;

		/** Registered ids for errors, as "oneof" enums. Each task or logical grouping of tasks may share the same enum. */
		errorCode?: CrmlogErrorCode;

		/** Errors, warnings, and informationals associated with the workflow/task. The order in which the errors were added by the workflow/task is maintained. */
		errors?: Array<EnterpriseCrmEventbusProtoErrorDetail>;

		/** Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10 */
		eventExecutionDetails?: EnterpriseCrmFrontendsEventbusProtoEventExecutionDetails;

		/** Auto-generated primary key. */
		eventExecutionInfoId?: string | null;

		/** Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships. */
		executionTraceInfo?: EnterpriseCrmEventbusProtoExecutionTraceInfo;

		/** Auto-generated. */
		lastModifiedTime?: string | null;

		/** The ways user posts this event. */
		postMethod?: EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethod | null;

		/** Which Google product the execution_info belongs to. If not set, the execution_info belongs to Integration Platform by default. */
		product?: EnterpriseCrmEventbusProtoSuspensionResolutionInfoProduct | null;

		/** Optional. This is used to de-dup incoming request. */
		requestId?: string | null;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		requestParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		responseParams?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

		/** Workflow snapshot number. */
		snapshotNumber?: string | null;

		/** Tenant this event is created. Used to reschedule the event to correct tenant. */
		tenant?: string | null;

		/** The trigger id of the workflow trigger config. If both trigger_id and client_id is present, the workflow is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks. */
		triggerId?: string | null;

		/** Required. Pointer to the workflow it is executing. */
		workflowId?: string | null;

		/** Name of the workflow. */
		workflowName?: string | null;

		/** Time interval in seconds to schedule retry of workflow in manifold when workflow is already running */
		workflowRetryBackoffIntervalSeconds?: string | null;
	}

	/** Contains all the execution details for a workflow instance. Next available id: 24 */
	export interface EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoFormProperties {

		/** The event data user sends as request. */
		clientId: FormControl<string | null | undefined>,

		/** Auto-generated. */
		createTime: FormControl<string | null | undefined>,

		/** Auto-generated primary key. */
		eventExecutionInfoId: FormControl<string | null | undefined>,

		/** Auto-generated. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** The ways user posts this event. */
		postMethod: FormControl<EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethod | null | undefined>,

		/** Which Google product the execution_info belongs to. If not set, the execution_info belongs to Integration Platform by default. */
		product: FormControl<EnterpriseCrmEventbusProtoSuspensionResolutionInfoProduct | null | undefined>,

		/** Optional. This is used to de-dup incoming request. */
		requestId: FormControl<string | null | undefined>,

		/** Workflow snapshot number. */
		snapshotNumber: FormControl<string | null | undefined>,

		/** Tenant this event is created. Used to reschedule the event to correct tenant. */
		tenant: FormControl<string | null | undefined>,

		/** The trigger id of the workflow trigger config. If both trigger_id and client_id is present, the workflow is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks. */
		triggerId: FormControl<string | null | undefined>,

		/** Required. Pointer to the workflow it is executing. */
		workflowId: FormControl<string | null | undefined>,

		/** Name of the workflow. */
		workflowName: FormControl<string | null | undefined>,

		/** Time interval in seconds to schedule retry of workflow in manifold when workflow is already running */
		workflowRetryBackoffIntervalSeconds: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoEventExecutionInfoFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			eventExecutionInfoId: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			postMethod: new FormControl<EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethod | null | undefined>(undefined),
			product: new FormControl<EnterpriseCrmEventbusProtoSuspensionResolutionInfoProduct | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			snapshotNumber: new FormControl<string | null | undefined>(undefined),
			tenant: new FormControl<string | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined),
			workflowName: new FormControl<string | null | undefined>(undefined),
			workflowRetryBackoffIntervalSeconds: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmFrontendsEventbusProtoEventExecutionInfoPostMethod { UNSPECIFIED = 'UNSPECIFIED', POST = 'POST', POST_TO_QUEUE = 'POST_TO_QUEUE', SCHEDULE = 'SCHEDULE', POST_BY_EVENT_CONFIG_ID = 'POST_BY_EVENT_CONFIG_ID', POST_WITH_EVENT_DETAILS = 'POST_WITH_EVENT_DETAILS' }


	/** Key-value pair of EventBus task parameters. Next id: 13 */
	export interface EnterpriseCrmFrontendsEventbusProtoParamSpecEntry {

		/** The FQCN of the Java object this represents. A string, for example, would be "java.lang.String". If this is "java.lang.Object", the parameter can be of any type. */
		className?: string | null;

		/** If it is a collection of objects, this would be the FCQN of every individual element in the collection. If this is "java.lang.Object", the parameter is a collection of any type. */
		collectionElementClassName?: string | null;
		config?: EnterpriseCrmEventbusProtoParamSpecEntryConfig;

		/** The data type of the parameter. */
		dataType?: EnterpriseCrmEventbusProtoFieldFieldType | null;

		/** To support various types of parameter values. Next available id: 14 */
		defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;

		/** If set, this entry is deprecated, so further use of this parameter should be prohibited. */
		isDeprecated?: boolean | null;
		isOutput?: boolean | null;

		/** If the data_type is JSON_VALUE, then this will define its schema. */
		jsonSchema?: string | null;

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given task. These parameters must be predefined in the workflow definition. */
		key?: string | null;
		protoDef?: EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition;

		/** If set, the user must provide an input value for this parameter. */
		required?: boolean | null;
		validationRule?: EnterpriseCrmEventbusProtoParamSpecEntryValidationRule;
	}

	/** Key-value pair of EventBus task parameters. Next id: 13 */
	export interface EnterpriseCrmFrontendsEventbusProtoParamSpecEntryFormProperties {

		/** The FQCN of the Java object this represents. A string, for example, would be "java.lang.String". If this is "java.lang.Object", the parameter can be of any type. */
		className: FormControl<string | null | undefined>,

		/** If it is a collection of objects, this would be the FCQN of every individual element in the collection. If this is "java.lang.Object", the parameter is a collection of any type. */
		collectionElementClassName: FormControl<string | null | undefined>,

		/** The data type of the parameter. */
		dataType: FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>,

		/** If set, this entry is deprecated, so further use of this parameter should be prohibited. */
		isDeprecated: FormControl<boolean | null | undefined>,
		isOutput: FormControl<boolean | null | undefined>,

		/** If the data_type is JSON_VALUE, then this will define its schema. */
		jsonSchema: FormControl<string | null | undefined>,

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given task. These parameters must be predefined in the workflow definition. */
		key: FormControl<string | null | undefined>,

		/** If set, the user must provide an input value for this parameter. */
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoParamSpecEntryFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoParamSpecEntryFormProperties>({
			className: new FormControl<string | null | undefined>(undefined),
			collectionElementClassName: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>(undefined),
			isDeprecated: new FormControl<boolean | null | undefined>(undefined),
			isOutput: new FormControl<boolean | null | undefined>(undefined),
			jsonSchema: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage {
		parameters?: Array<EnterpriseCrmFrontendsEventbusProtoParamSpecEntry>;
	}
	export interface EnterpriseCrmFrontendsEventbusProtoParamSpecsMessageFormProperties {
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoParamSpecsMessageFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoParamSpecsMessageFormProperties>({
		});

	}


	/** A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified. */
	export interface EnterpriseCrmFrontendsEventbusProtoParameterMap {
		entries?: Array<EnterpriseCrmFrontendsEventbusProtoParameterMapEntry>;

		/** Option to specify key value type for all entries of the map. If provided then field types for all entries must conform to this. */
		keyType?: EnterpriseCrmEventbusProtoFieldFieldType | null;
		valueType?: EnterpriseCrmEventbusProtoFieldFieldType | null;
	}

	/** A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified. */
	export interface EnterpriseCrmFrontendsEventbusProtoParameterMapFormProperties {

		/** Option to specify key value type for all entries of the map. If provided then field types for all entries must conform to this. */
		keyType: FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>,
		valueType: FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoParameterMapFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoParameterMapFormProperties>({
			keyType: new FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>(undefined),
			valueType: new FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>(undefined),
		});

	}


	/** Entry is a pair of key and value. */
	export interface EnterpriseCrmFrontendsEventbusProtoParameterMapEntry {

		/** Field represents either the key or value in an entry. */
		key?: EnterpriseCrmFrontendsEventbusProtoParameterMapField;

		/** Field represents either the key or value in an entry. */
		value?: EnterpriseCrmFrontendsEventbusProtoParameterMapField;
	}

	/** Entry is a pair of key and value. */
	export interface EnterpriseCrmFrontendsEventbusProtoParameterMapEntryFormProperties {
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoParameterMapEntryFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoParameterMapEntryFormProperties>({
		});

	}


	/** Field represents either the key or value in an entry. */
	export interface EnterpriseCrmFrontendsEventbusProtoParameterMapField {

		/** To support various types of parameter values. Next available id: 14 */
		literalValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;

		/** Referencing one of the WF variables. */
		referenceKey?: string | null;
	}

	/** Field represents either the key or value in an entry. */
	export interface EnterpriseCrmFrontendsEventbusProtoParameterMapFieldFormProperties {

		/** Referencing one of the WF variables. */
		referenceKey: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoParameterMapFieldFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoParameterMapFieldFormProperties>({
			referenceKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Next available id: 4 */
	export interface EnterpriseCrmFrontendsEventbusProtoRollbackStrategy {

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

		/** Required. This is the name of the task that needs to be executed upon rollback of this task. */
		rollbackTaskImplementationClassName?: string | null;

		/** Required. These are the tasks numbers of the tasks whose `rollback_strategy.rollback_task_implementation_class_name` needs to be executed upon failure of this task. */
		taskNumbersToRollback?: Array<string>;
	}

	/** Next available id: 4 */
	export interface EnterpriseCrmFrontendsEventbusProtoRollbackStrategyFormProperties {

		/** Required. This is the name of the task that needs to be executed upon rollback of this task. */
		rollbackTaskImplementationClassName: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoRollbackStrategyFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoRollbackStrategyFormProperties>({
			rollbackTaskImplementationClassName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task. */
	export interface EnterpriseCrmFrontendsEventbusProtoTaskConfig {

		/** Alert configurations on error rate, warning rate, number of runs, durations, etc. */
		alertConfigs?: Array<EnterpriseCrmEventbusProtoTaskAlertConfig>;

		/** Auto-generated. */
		createTime?: string | null;

		/** The creator's email address. Auto-generated from the user's email. */
		creatorEmail?: string | null;

		/** User-provided description intended to give more business context about the task. */
		description?: string | null;

		/** If this config contains a TypedTask, allow validation to succeed if an input is read from the output of another TypedTask whose output type is declared as a superclass of the requested input type. For instance, if the previous task declares an output of type Message, any task with this flag enabled will pass validation when attempting to read any proto Message type from the resultant Event parameter. */
		disableStrictTypeValidation?: boolean | null;

		/** Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task */
		errorCatcherId?: string | null;
		externalTaskType?: EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskType | null;

		/** Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied). */
		failurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy;

		/**
		 * The number of edges leading into this TaskConfig.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		incomingEdgeCount?: number | null;

		/** If set, overrides the option configured in the Task implementation class. */
		jsonValidationOption?: EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOption | null;

		/** User-provided label that is attached to this TaskConfig in the UI. */
		label?: string | null;

		/** Auto-generated. */
		lastModifiedTime?: string | null;

		/** The set of tasks that are next in line to be executed as per the execution graph defined for the parent event, specified by `event_config_id`. Each of these next tasks are executed only if the condition associated with them evaluates to true. */
		nextTasks?: Array<EnterpriseCrmEventbusProtoNextTask>;

		/** The policy dictating the execution of the next set of tasks for the current task. */
		nextTasksExecutionPolicy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicy | null;

		/** The customized parameters the user can pass to this task. */
		parameters?: {[id: string]: EnterpriseCrmFrontendsEventbusProtoParameterEntry };

		/** Represents two-dimensional positions. */
		position?: EnterpriseCrmEventbusProtoCoordinate;

		/** Optional. Standard filter expression evaluated before execution. Independent of other conditions and tasks. Can be used to enable rollout. e.g. "rollout(5)" will only allow 5% of incoming traffic to task. */
		precondition?: string | null;

		/** Optional. User-provided label that is attached to precondition in the UI. */
		preconditionLabel?: string | null;

		/** Next available id: 4 */
		rollbackStrategy?: EnterpriseCrmFrontendsEventbusProtoRollbackStrategy;

		/** Policy that dictates the behavior for the task after it completes successfully. */
		successPolicy?: EnterpriseCrmEventbusProtoSuccessPolicy;

		/** Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied). */
		synchronousCallFailurePolicy?: EnterpriseCrmEventbusProtoFailurePolicy;

		/** Contains a task's metadata and associated information. Next available id: 7 */
		taskEntity?: EnterpriseCrmFrontendsEventbusProtoTaskEntity;

		/** The policy dictating the execution strategy of this task. */
		taskExecutionStrategy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategy | null;

		/** The name for the task. */
		taskName?: string | null;

		/** REQUIRED: the identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field `next_tasks.task_number`). */
		taskNumber?: string | null;

		/** A string template that allows user to configure task parameters (with either literal default values or tokens which will be resolved at execution time) for the task. It will eventually replace the old "parameters" field. */
		taskSpec?: string | null;

		/** Used to define task-template name if task is of type task-template */
		taskTemplateName?: string | null;

		/** Defines the type of the task */
		taskType?: EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskType | null;
	}

	/** The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task. */
	export interface EnterpriseCrmFrontendsEventbusProtoTaskConfigFormProperties {

		/** Auto-generated. */
		createTime: FormControl<string | null | undefined>,

		/** The creator's email address. Auto-generated from the user's email. */
		creatorEmail: FormControl<string | null | undefined>,

		/** User-provided description intended to give more business context about the task. */
		description: FormControl<string | null | undefined>,

		/** If this config contains a TypedTask, allow validation to succeed if an input is read from the output of another TypedTask whose output type is declared as a superclass of the requested input type. For instance, if the previous task declares an output of type Message, any task with this flag enabled will pass validation when attempting to read any proto Message type from the resultant Event parameter. */
		disableStrictTypeValidation: FormControl<boolean | null | undefined>,

		/** Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task */
		errorCatcherId: FormControl<string | null | undefined>,
		externalTaskType: FormControl<EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskType | null | undefined>,

		/**
		 * The number of edges leading into this TaskConfig.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		incomingEdgeCount: FormControl<number | null | undefined>,

		/** If set, overrides the option configured in the Task implementation class. */
		jsonValidationOption: FormControl<EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOption | null | undefined>,

		/** User-provided label that is attached to this TaskConfig in the UI. */
		label: FormControl<string | null | undefined>,

		/** Auto-generated. */
		lastModifiedTime: FormControl<string | null | undefined>,

		/** The policy dictating the execution of the next set of tasks for the current task. */
		nextTasksExecutionPolicy: FormControl<EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicy | null | undefined>,

		/** The customized parameters the user can pass to this task. */
		parameters: FormControl<{[id: string]: EnterpriseCrmFrontendsEventbusProtoParameterEntry } | null | undefined>,

		/** Optional. Standard filter expression evaluated before execution. Independent of other conditions and tasks. Can be used to enable rollout. e.g. "rollout(5)" will only allow 5% of incoming traffic to task. */
		precondition: FormControl<string | null | undefined>,

		/** Optional. User-provided label that is attached to precondition in the UI. */
		preconditionLabel: FormControl<string | null | undefined>,

		/** The policy dictating the execution strategy of this task. */
		taskExecutionStrategy: FormControl<EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategy | null | undefined>,

		/** The name for the task. */
		taskName: FormControl<string | null | undefined>,

		/** REQUIRED: the identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field `next_tasks.task_number`). */
		taskNumber: FormControl<string | null | undefined>,

		/** A string template that allows user to configure task parameters (with either literal default values or tokens which will be resolved at execution time) for the task. It will eventually replace the old "parameters" field. */
		taskSpec: FormControl<string | null | undefined>,

		/** Used to define task-template name if task is of type task-template */
		taskTemplateName: FormControl<string | null | undefined>,

		/** Defines the type of the task */
		taskType: FormControl<EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskType | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoTaskConfigFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoTaskConfigFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			creatorEmail: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			disableStrictTypeValidation: new FormControl<boolean | null | undefined>(undefined),
			errorCatcherId: new FormControl<string | null | undefined>(undefined),
			externalTaskType: new FormControl<EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskType | null | undefined>(undefined),
			incomingEdgeCount: new FormControl<number | null | undefined>(undefined),
			jsonValidationOption: new FormControl<EnterpriseCrmEventbusProtoTaskMetadataDefaultJsonValidationOption | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			lastModifiedTime: new FormControl<string | null | undefined>(undefined),
			nextTasksExecutionPolicy: new FormControl<EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicy | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: EnterpriseCrmFrontendsEventbusProtoParameterEntry } | null | undefined>(undefined),
			precondition: new FormControl<string | null | undefined>(undefined),
			preconditionLabel: new FormControl<string | null | undefined>(undefined),
			taskExecutionStrategy: new FormControl<EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategy | null | undefined>(undefined),
			taskName: new FormControl<string | null | undefined>(undefined),
			taskNumber: new FormControl<string | null | undefined>(undefined),
			taskSpec: new FormControl<string | null | undefined>(undefined),
			taskTemplateName: new FormControl<string | null | undefined>(undefined),
			taskType: new FormControl<EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskType { EXTERNAL_TASK_TYPE_UNSPECIFIED = 'EXTERNAL_TASK_TYPE_UNSPECIFIED', NORMAL_TASK = 'NORMAL_TASK', ERROR_TASK = 'ERROR_TASK' }

	export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicy { UNSPECIFIED = 'UNSPECIFIED', RUN_ALL_MATCH = 'RUN_ALL_MATCH', RUN_FIRST_MATCH = 'RUN_FIRST_MATCH' }


	/** Contains a task's metadata and associated information. Next available id: 7 */
	export interface EnterpriseCrmFrontendsEventbusProtoTaskEntity {

		/** True if the task has conflict with vpcsc */
		disabledForVpcSc?: boolean | null;

		/** TaskMetadata are attributes that are associated to every common Task we have. */
		metadata?: EnterpriseCrmEventbusProtoTaskMetadata;
		paramSpecs?: EnterpriseCrmFrontendsEventbusProtoParamSpecsMessage;

		/** Stats for the requested dimensions: QPS, duration, and error/warning rate */
		stats?: EnterpriseCrmEventbusStats;

		/** Defines the type of the task */
		taskType?: EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskType | null;

		/** Task authors would use this type to configure the UI for a particular task by specifying what UI config modules should be included to compose the UI. Learn more about config module framework: */
		uiConfig?: EnterpriseCrmEventbusProtoTaskUiConfig;
	}

	/** Contains a task's metadata and associated information. Next available id: 7 */
	export interface EnterpriseCrmFrontendsEventbusProtoTaskEntityFormProperties {

		/** True if the task has conflict with vpcsc */
		disabledForVpcSc: FormControl<boolean | null | undefined>,

		/** Defines the type of the task */
		taskType: FormControl<EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskType | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoTaskEntityFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoTaskEntityFormProperties>({
			disabledForVpcSc: new FormControl<boolean | null | undefined>(undefined),
			taskType: new FormControl<EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmFrontendsEventbusProtoTaskEntityTaskType { TASK = 'TASK', ASIS_TEMPLATE = 'ASIS_TEMPLATE', IO_TEMPLATE = 'IO_TEMPLATE' }

	export enum EnterpriseCrmFrontendsEventbusProtoTaskConfigTaskExecutionStrategy { WHEN_ALL_SUCCEED = 'WHEN_ALL_SUCCEED', WHEN_ANY_SUCCEED = 'WHEN_ANY_SUCCEED', WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED = 'WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED' }


	/** Configuration detail of a trigger. Next available id: 19 */
	export interface EnterpriseCrmFrontendsEventbusProtoTriggerConfig {

		/** An alert threshold configuration for the [trigger + client + workflow] tuple. If these values are not specified in the trigger config, default values will be populated by the system. Note that there must be exactly one alert threshold configured per [client + trigger + workflow] when published. */
		alertConfig?: Array<EnterpriseCrmEventbusProtoWorkflowAlertConfig>;

		/** Cloud Scheduler Trigger configuration */
		cloudSchedulerConfig?: EnterpriseCrmEventbusProtoCloudSchedulerConfig;

		/** User-provided description intended to give more business context about the task. */
		description?: string | null;

		/** Required. The list of client ids which are enabled to execute the workflow using this trigger. In other words, these clients have the workflow execution privledges for this trigger. For API trigger, the client id in the incoming request is validated against the list of enabled clients. For non-API triggers, one workflow execution is triggered on behalf of each enabled client. */
		enabledClients?: Array<string>;

		/** Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task */
		errorCatcherId?: string | null;

		/** The user created label for a particular trigger. */
		label?: string | null;

		/** Dictates how next tasks will be executed. */
		nextTasksExecutionPolicy?: EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicy | null;

		/** Optional. If set to true, any upcoming requests for this trigger config will be paused and the executions will be resumed later when the flag is reset. The workflow to which this trigger config belongs has to be in ACTIVE status for the executions to be paused or resumed. */
		pauseWorkflowExecutions?: boolean | null;

		/** Represents two-dimensional positions. */
		position?: EnterpriseCrmEventbusProtoCoordinate;

		/** Configurable properties of the trigger, not to be confused with workflow parameters. E.g. "name" is a property for API triggers and "subscription" is a property for Cloud Pubsub triggers. */
		properties?: {[id: string]: string };

		/** Set of tasks numbers from where the workflow execution is started by this trigger. If this is empty, then workflow is executed with default start tasks. In the list of start tasks, none of two tasks can have direct ancestor-descendant relationships (i.e. in a same workflow execution graph). */
		startTasks?: Array<EnterpriseCrmEventbusProtoNextTask>;
		triggerCriteria?: EnterpriseCrmEventbusProtoTriggerCriteria;

		/** The backend trigger ID. */
		triggerId?: string | null;

		/** Required. A number to uniquely identify each trigger config within the workflow on UI. */
		triggerNumber?: string | null;
		triggerType?: EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerType | null;
	}

	/** Configuration detail of a trigger. Next available id: 19 */
	export interface EnterpriseCrmFrontendsEventbusProtoTriggerConfigFormProperties {

		/** User-provided description intended to give more business context about the task. */
		description: FormControl<string | null | undefined>,

		/** Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task */
		errorCatcherId: FormControl<string | null | undefined>,

		/** The user created label for a particular trigger. */
		label: FormControl<string | null | undefined>,

		/** Dictates how next tasks will be executed. */
		nextTasksExecutionPolicy: FormControl<EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicy | null | undefined>,

		/** Optional. If set to true, any upcoming requests for this trigger config will be paused and the executions will be resumed later when the flag is reset. The workflow to which this trigger config belongs has to be in ACTIVE status for the executions to be paused or resumed. */
		pauseWorkflowExecutions: FormControl<boolean | null | undefined>,

		/** Configurable properties of the trigger, not to be confused with workflow parameters. E.g. "name" is a property for API triggers and "subscription" is a property for Cloud Pubsub triggers. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** The backend trigger ID. */
		triggerId: FormControl<string | null | undefined>,

		/** Required. A number to uniquely identify each trigger config within the workflow on UI. */
		triggerNumber: FormControl<string | null | undefined>,
		triggerType: FormControl<EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerType | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoTriggerConfigFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoTriggerConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			errorCatcherId: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			nextTasksExecutionPolicy: new FormControl<EnterpriseCrmFrontendsEventbusProtoTaskConfigNextTasksExecutionPolicy | null | undefined>(undefined),
			pauseWorkflowExecutions: new FormControl<boolean | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
			triggerNumber: new FormControl<string | null | undefined>(undefined),
			triggerType: new FormControl<EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerType | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmFrontendsEventbusProtoTriggerConfigTriggerType { UNKNOWN = 'UNKNOWN', CLOUD_PUBSUB = 'CLOUD_PUBSUB', GOOPS = 'GOOPS', SFDC_SYNC = 'SFDC_SYNC', CRON = 'CRON', API = 'API', MANIFOLD_TRIGGER = 'MANIFOLD_TRIGGER', DATALAYER_DATA_CHANGE = 'DATALAYER_DATA_CHANGE', SFDC_CHANNEL = 'SFDC_CHANNEL', CLOUD_PUBSUB_EXTERNAL = 'CLOUD_PUBSUB_EXTERNAL', SFDC_CDC_CHANNEL = 'SFDC_CDC_CHANNEL', SFDC_PLATFORM_EVENTS_CHANNEL = 'SFDC_PLATFORM_EVENTS_CHANNEL', CLOUD_SCHEDULER = 'CLOUD_SCHEDULER', INTEGRATION_CONNECTOR_TRIGGER = 'INTEGRATION_CONNECTOR_TRIGGER' }

	export interface EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry {

		/** Attributes are additional options that can be associated with each event property. For more information, see */
		attributes?: EnterpriseCrmEventbusProtoAttributes;

		/** Child parameters nested within this parameter. This field only applies to protobuf parameters */
		children?: Array<EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry>;

		/** The data type of the parameter. */
		dataType?: EnterpriseCrmEventbusProtoFieldFieldType | null;

		/** To support various types of parameter values. Next available id: 14 */
		defaultValue?: EnterpriseCrmFrontendsEventbusProtoParameterValueType;

		/** Specifies the input/output type for the parameter. */
		inOutType?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutType | null;

		/** Whether this parameter is a transient parameter. */
		isTransient?: boolean | null;

		/** This schema will be used to validate runtime JSON-typed values of this parameter. */
		jsonSchema?: string | null;

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the workflow definition. */
		key?: string | null;

		/** The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is "foo.bar.myName", then the name would be "myName". */
		name?: string | null;

		/** Represents a node identifier (type + id). Next highest id: 3 */
		producedBy?: EnterpriseCrmEventbusProtoNodeIdentifier;
		producer?: string | null;

		/** The name of the protobuf type if the parameter has a protobuf data type. */
		protoDefName?: string | null;

		/** If the data type is of type proto or proto array, this field needs to be populated with the fully qualified proto name. This message, for example, would be "enterprise.crm.frontends.eventbus.proto.WorkflowParameterEntry". */
		protoDefPath?: string | null;
	}
	export interface EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryFormProperties {

		/** The data type of the parameter. */
		dataType: FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>,

		/** Specifies the input/output type for the parameter. */
		inOutType: FormControl<EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutType | null | undefined>,

		/** Whether this parameter is a transient parameter. */
		isTransient: FormControl<boolean | null | undefined>,

		/** This schema will be used to validate runtime JSON-typed values of this parameter. */
		jsonSchema: FormControl<string | null | undefined>,

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the workflow definition. */
		key: FormControl<string | null | undefined>,

		/** The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is "foo.bar.myName", then the name would be "myName". */
		name: FormControl<string | null | undefined>,
		producer: FormControl<string | null | undefined>,

		/** The name of the protobuf type if the parameter has a protobuf data type. */
		protoDefName: FormControl<string | null | undefined>,

		/** If the data type is of type proto or proto array, this field needs to be populated with the fully qualified proto name. This message, for example, would be "enterprise.crm.frontends.eventbus.proto.WorkflowParameterEntry". */
		protoDefPath: FormControl<string | null | undefined>,
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryFormProperties>({
			dataType: new FormControl<EnterpriseCrmEventbusProtoFieldFieldType | null | undefined>(undefined),
			inOutType: new FormControl<EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutType | null | undefined>(undefined),
			isTransient: new FormControl<boolean | null | undefined>(undefined),
			jsonSchema: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			producer: new FormControl<string | null | undefined>(undefined),
			protoDefName: new FormControl<string | null | undefined>(undefined),
			protoDefPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutType { IN_OUT_TYPE_UNSPECIFIED = 'IN_OUT_TYPE_UNSPECIFIED', IN = 'IN', OUT = 'OUT', IN_OUT = 'IN_OUT' }


	/** LINT.IfChange This is the frontend version of WorkflowParameters. It's exactly like the backend version except that instead of flattening protobuf parameters and treating every field and subfield of a protobuf parameter as a separate parameter, the fields/subfields of a protobuf parameter will be nested as "children" (see 'children' field below) parameters of the parent parameter. Please refer to enterprise/crm/eventbus/proto/workflow_parameters.proto for more information about WorkflowParameters. */
	export interface EnterpriseCrmFrontendsEventbusProtoWorkflowParameters {

		/** Parameters are a part of Event and can be used to communiticate between different tasks that are part of the same workflow execution. */
		parameters?: Array<EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry>;
	}

	/** LINT.IfChange This is the frontend version of WorkflowParameters. It's exactly like the backend version except that instead of flattening protobuf parameters and treating every field and subfield of a protobuf parameter as a separate parameter, the fields/subfields of a protobuf parameter will be nested as "children" (see 'children' field below) parameters of the parent parameter. Please refer to enterprise/crm/eventbus/proto/workflow_parameters.proto for more information about WorkflowParameters. */
	export interface EnterpriseCrmFrontendsEventbusProtoWorkflowParametersFormProperties {
	}
	export function CreateEnterpriseCrmFrontendsEventbusProtoWorkflowParametersFormGroup() {
		return new FormGroup<EnterpriseCrmFrontendsEventbusProtoWorkflowParametersFormProperties>({
		});

	}


	/** AuthConfig defines details of a authentication type. */
	export interface GoogleCloudConnectorsV1AuthConfig {

		/** List containing additional auth configs. */
		additionalVariables?: Array<GoogleCloudConnectorsV1ConfigVariable>;

		/** Identifier key for auth config */
		authKey?: string | null;

		/** The type of authentication configured. */
		authType?: GoogleCloudConnectorsV1AuthConfigAuthType | null;

		/** Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details. */
		oauth2AuthCodeFlow?: GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow;

		/** Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details. */
		oauth2ClientCredentials?: GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials;

		/** Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details. */
		oauth2JwtBearer?: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer;

		/** Parameters to support Ssh public key Authentication. */
		sshPublicKey?: GoogleCloudConnectorsV1AuthConfigSshPublicKey;

		/** Parameters to support Username and Password Authentication. */
		userPassword?: GoogleCloudConnectorsV1AuthConfigUserPassword;
	}

	/** AuthConfig defines details of a authentication type. */
	export interface GoogleCloudConnectorsV1AuthConfigFormProperties {

		/** Identifier key for auth config */
		authKey: FormControl<string | null | undefined>,

		/** The type of authentication configured. */
		authType: FormControl<GoogleCloudConnectorsV1AuthConfigAuthType | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1AuthConfigFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1AuthConfigFormProperties>({
			authKey: new FormControl<string | null | undefined>(undefined),
			authType: new FormControl<GoogleCloudConnectorsV1AuthConfigAuthType | null | undefined>(undefined),
		});

	}


	/** ConfigVariable represents a configuration variable present in a Connection. or AuthConfig. */
	export interface GoogleCloudConnectorsV1ConfigVariable {

		/** Value is a bool. */
		boolValue?: boolean | null;

		/** Value is an integer */
		intValue?: string | null;

		/** Key of the config variable. */
		key?: string | null;

		/** Encryption Key value. */
		keyValue?: GoogleCloudConnectorsV1EncryptionKey;

		/** Secret provides a reference to entries in Secret Manager. */
		secretValue?: GoogleCloudConnectorsV1Secret;

		/** Value is a string. */
		stringValue?: string | null;
	}

	/** ConfigVariable represents a configuration variable present in a Connection. or AuthConfig. */
	export interface GoogleCloudConnectorsV1ConfigVariableFormProperties {

		/** Value is a bool. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Value is an integer */
		intValue: FormControl<string | null | undefined>,

		/** Key of the config variable. */
		key: FormControl<string | null | undefined>,

		/** Value is a string. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1ConfigVariableFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1ConfigVariableFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Encryption Key value. */
	export interface GoogleCloudConnectorsV1EncryptionKey {

		/** The [KMS key name] with which the content of the Operation is encrypted. The expected format: `projects/locations/keyRings/cryptoKeys/*`. Will be empty string if google managed. */
		kmsKeyName?: string | null;

		/** Type. */
		type?: GoogleCloudConnectorsV1EncryptionKeyType | null;
	}

	/** Encryption Key value. */
	export interface GoogleCloudConnectorsV1EncryptionKeyFormProperties {

		/** The [KMS key name] with which the content of the Operation is encrypted. The expected format: `projects/locations/keyRings/cryptoKeys/*`. Will be empty string if google managed. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Type. */
		type: FormControl<GoogleCloudConnectorsV1EncryptionKeyType | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1EncryptionKeyFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1EncryptionKeyFormProperties>({
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GoogleCloudConnectorsV1EncryptionKeyType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudConnectorsV1EncryptionKeyType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', GOOGLE_MANAGED = 'GOOGLE_MANAGED', CUSTOMER_MANAGED = 'CUSTOMER_MANAGED' }


	/** Secret provides a reference to entries in Secret Manager. */
	export interface GoogleCloudConnectorsV1Secret {

		/** The resource name of the secret version in the format, format as: `projects/secrets/versions/*`. */
		secretVersion?: string | null;
	}

	/** Secret provides a reference to entries in Secret Manager. */
	export interface GoogleCloudConnectorsV1SecretFormProperties {

		/** The resource name of the secret version in the format, format as: `projects/secrets/versions/*`. */
		secretVersion: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1SecretFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1SecretFormProperties>({
			secretVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudConnectorsV1AuthConfigAuthType { AUTH_TYPE_UNSPECIFIED = 'AUTH_TYPE_UNSPECIFIED', USER_PASSWORD = 'USER_PASSWORD', OAUTH2_JWT_BEARER = 'OAUTH2_JWT_BEARER', OAUTH2_CLIENT_CREDENTIALS = 'OAUTH2_CLIENT_CREDENTIALS', SSH_PUBLIC_KEY = 'SSH_PUBLIC_KEY', OAUTH2_AUTH_CODE_FLOW = 'OAUTH2_AUTH_CODE_FLOW' }


	/** Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details. */
	export interface GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlow {

		/** Authorization code to be exchanged for access and refresh tokens. */
		authCode?: string | null;

		/** Auth URL for Authorization Code Flow */
		authUri?: string | null;

		/** Client ID for user-provided OAuth app. */
		clientId?: string | null;

		/** Secret provides a reference to entries in Secret Manager. */
		clientSecret?: GoogleCloudConnectorsV1Secret;

		/** Whether to enable PKCE when the user performs the auth code flow. */
		enablePkce?: boolean | null;

		/** PKCE verifier to be used during the auth code exchange. */
		pkceVerifier?: string | null;

		/** Redirect URI to be provided during the auth code exchange. */
		redirectUri?: string | null;

		/** Scopes the connection will request when the user performs the auth code flow. */
		scopes?: Array<string>;
	}

	/** Parameters to support Oauth 2.0 Auth Code Grant Authentication. See https://www.rfc-editor.org/rfc/rfc6749#section-1.3.1 for more details. */
	export interface GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlowFormProperties {

		/** Authorization code to be exchanged for access and refresh tokens. */
		authCode: FormControl<string | null | undefined>,

		/** Auth URL for Authorization Code Flow */
		authUri: FormControl<string | null | undefined>,

		/** Client ID for user-provided OAuth app. */
		clientId: FormControl<string | null | undefined>,

		/** Whether to enable PKCE when the user performs the auth code flow. */
		enablePkce: FormControl<boolean | null | undefined>,

		/** PKCE verifier to be used during the auth code exchange. */
		pkceVerifier: FormControl<string | null | undefined>,

		/** Redirect URI to be provided during the auth code exchange. */
		redirectUri: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlowFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1AuthConfigOauth2AuthCodeFlowFormProperties>({
			authCode: new FormControl<string | null | undefined>(undefined),
			authUri: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			enablePkce: new FormControl<boolean | null | undefined>(undefined),
			pkceVerifier: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details. */
	export interface GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentials {

		/** The client identifier. */
		clientId?: string | null;

		/** Secret provides a reference to entries in Secret Manager. */
		clientSecret?: GoogleCloudConnectorsV1Secret;
	}

	/** Parameters to support Oauth 2.0 Client Credentials Grant Authentication. See https://tools.ietf.org/html/rfc6749#section-1.3.4 for more details. */
	export interface GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentialsFormProperties {

		/** The client identifier. */
		clientId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1AuthConfigOauth2ClientCredentialsFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1AuthConfigOauth2ClientCredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details. */
	export interface GoogleCloudConnectorsV1AuthConfigOauth2JwtBearer {

		/** Secret provides a reference to entries in Secret Manager. */
		clientKey?: GoogleCloudConnectorsV1Secret;

		/** JWT claims used for the jwt-bearer authorization grant. */
		jwtClaims?: GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims;
	}

	/** Parameters to support JSON Web Token (JWT) Profile for Oauth 2.0 Authorization Grant based authentication. See https://tools.ietf.org/html/rfc7523 for more details. */
	export interface GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerFormProperties {
	}
	export function CreateGoogleCloudConnectorsV1AuthConfigOauth2JwtBearerFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerFormProperties>({
		});

	}


	/** JWT claims used for the jwt-bearer authorization grant. */
	export interface GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaims {

		/** Value for the "aud" claim. */
		audience?: string | null;

		/** Value for the "iss" claim. */
		issuer?: string | null;

		/** Value for the "sub" claim. */
		subject?: string | null;
	}

	/** JWT claims used for the jwt-bearer authorization grant. */
	export interface GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaimsFormProperties {

		/** Value for the "aud" claim. */
		audience: FormControl<string | null | undefined>,

		/** Value for the "iss" claim. */
		issuer: FormControl<string | null | undefined>,

		/** Value for the "sub" claim. */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaimsFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1AuthConfigOauth2JwtBearerJwtClaimsFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to support Ssh public key Authentication. */
	export interface GoogleCloudConnectorsV1AuthConfigSshPublicKey {

		/** Format of SSH Client cert. */
		certType?: string | null;

		/** Secret provides a reference to entries in Secret Manager. */
		sshClientCert?: GoogleCloudConnectorsV1Secret;

		/** Secret provides a reference to entries in Secret Manager. */
		sshClientCertPass?: GoogleCloudConnectorsV1Secret;

		/** The user account used to authenticate. */
		username?: string | null;
	}

	/** Parameters to support Ssh public key Authentication. */
	export interface GoogleCloudConnectorsV1AuthConfigSshPublicKeyFormProperties {

		/** Format of SSH Client cert. */
		certType: FormControl<string | null | undefined>,

		/** The user account used to authenticate. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1AuthConfigSshPublicKeyFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1AuthConfigSshPublicKeyFormProperties>({
			certType: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Parameters to support Username and Password Authentication. */
	export interface GoogleCloudConnectorsV1AuthConfigUserPassword {

		/** Secret provides a reference to entries in Secret Manager. */
		password?: GoogleCloudConnectorsV1Secret;

		/** Username. */
		username?: string | null;
	}

	/** Parameters to support Username and Password Authentication. */
	export interface GoogleCloudConnectorsV1AuthConfigUserPasswordFormProperties {

		/** Username. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1AuthConfigUserPasswordFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1AuthConfigUserPasswordFormProperties>({
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Connection represents an instance of connector. */
	export interface GoogleCloudConnectorsV1Connection {

		/** AuthConfig defines details of a authentication type. */
		authConfig?: GoogleCloudConnectorsV1AuthConfig;

		/** Optional. Configuration for configuring the connection with an external system. */
		configVariables?: Array<GoogleCloudConnectorsV1ConfigVariable>;

		/** Output only. Connection revision. This field is only updated when the connection is created or updated by User. */
		connectionRevision?: string | null;

		/** Required. Connector version on which the connection is created. The format is: projects/locations/providers/connectors/versions/* Only global location is supported for ConnectorVersion resource. */
		connectorVersion?: string | null;

		/** Output only. Flag to mark the version indicating the launch stage. */
		connectorVersionLaunchStage?: GoogleCloudConnectorsV1ConnectionConnectorVersionLaunchStage | null;

		/** Output only. Created time. */
		createTime?: string | null;

		/** Optional. Description of the resource. */
		description?: string | null;

		/** Optional. Configuration of the Connector's destination. Only accepted for Connectors that accepts user defined destination(s). */
		destinationConfigs?: Array<GoogleCloudConnectorsV1DestinationConfig>;

		/** Output only. GCR location where the envoy image is stored. formatted like: gcr.io/{bucketName}/{imageName} */
		envoyImageLocation?: string | null;

		/** Output only. GCR location where the runtime image is stored. formatted like: gcr.io/{bucketName}/{imageName} */
		imageLocation?: string | null;

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels?: {[id: string]: string };

		/** Determines whether or no a connection is locked. If locked, a reason must be specified. */
		lockConfig?: GoogleCloudConnectorsV1LockConfig;

		/** Log configuration for the connection. */
		logConfig?: GoogleCloudConnectorsV1LogConfig;

		/** Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
		name?: string | null;

		/** Node configuration for the connection. */
		nodeConfig?: GoogleCloudConnectorsV1NodeConfig;

		/** Optional. Service account needed for runtime plane to access GCP resources. */
		serviceAccount?: string | null;

		/** Output only. The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address. e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors" */
		serviceDirectory?: string | null;

		/** SSL Configuration of a connection */
		sslConfig?: GoogleCloudConnectorsV1SslConfig;

		/** ConnectionStatus indicates the state of the connection. */
		status?: GoogleCloudConnectorsV1ConnectionStatus;

		/** Output only. This subscription type enum states the subscription type of the project. */
		subscriptionType?: GoogleCloudConnectorsV1ConnectionSubscriptionType | null;

		/** Optional. Suspended indicates if a user has suspended a connection or not. */
		suspended?: boolean | null;

		/** Output only. Updated time. */
		updateTime?: string | null;
	}

	/** Connection represents an instance of connector. */
	export interface GoogleCloudConnectorsV1ConnectionFormProperties {

		/** Output only. Connection revision. This field is only updated when the connection is created or updated by User. */
		connectionRevision: FormControl<string | null | undefined>,

		/** Required. Connector version on which the connection is created. The format is: projects/locations/providers/connectors/versions/* Only global location is supported for ConnectorVersion resource. */
		connectorVersion: FormControl<string | null | undefined>,

		/** Output only. Flag to mark the version indicating the launch stage. */
		connectorVersionLaunchStage: FormControl<GoogleCloudConnectorsV1ConnectionConnectorVersionLaunchStage | null | undefined>,

		/** Output only. Created time. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the resource. */
		description: FormControl<string | null | undefined>,

		/** Output only. GCR location where the envoy image is stored. formatted like: gcr.io/{bucketName}/{imageName} */
		envoyImageLocation: FormControl<string | null | undefined>,

		/** Output only. GCR location where the runtime image is stored. formatted like: gcr.io/{bucketName}/{imageName} */
		imageLocation: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} */
		name: FormControl<string | null | undefined>,

		/** Optional. Service account needed for runtime plane to access GCP resources. */
		serviceAccount: FormControl<string | null | undefined>,

		/** Output only. The name of the Service Directory service name. Used for Private Harpoon to resolve the ILB address. e.g. "projects/cloud-connectors-e2e-testing/locations/us-central1/namespaces/istio-system/services/istio-ingressgateway-connectors" */
		serviceDirectory: FormControl<string | null | undefined>,

		/** Output only. This subscription type enum states the subscription type of the project. */
		subscriptionType: FormControl<GoogleCloudConnectorsV1ConnectionSubscriptionType | null | undefined>,

		/** Optional. Suspended indicates if a user has suspended a connection or not. */
		suspended: FormControl<boolean | null | undefined>,

		/** Output only. Updated time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1ConnectionFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1ConnectionFormProperties>({
			connectionRevision: new FormControl<string | null | undefined>(undefined),
			connectorVersion: new FormControl<string | null | undefined>(undefined),
			connectorVersionLaunchStage: new FormControl<GoogleCloudConnectorsV1ConnectionConnectorVersionLaunchStage | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			envoyImageLocation: new FormControl<string | null | undefined>(undefined),
			imageLocation: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
			serviceDirectory: new FormControl<string | null | undefined>(undefined),
			subscriptionType: new FormControl<GoogleCloudConnectorsV1ConnectionSubscriptionType | null | undefined>(undefined),
			suspended: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudConnectorsV1ConnectionConnectorVersionLaunchStage { LAUNCH_STAGE_UNSPECIFIED = 'LAUNCH_STAGE_UNSPECIFIED', PREVIEW = 'PREVIEW', GA = 'GA', DEPRECATED = 'DEPRECATED', PRIVATE_PREVIEW = 'PRIVATE_PREVIEW' }


	/** Define the Connectors target endpoint. */
	export interface GoogleCloudConnectorsV1DestinationConfig {

		/** The destinations for the key. */
		destinations?: Array<GoogleCloudConnectorsV1Destination>;

		/** The key is the destination identifier that is supported by the Connector. */
		key?: string | null;
	}

	/** Define the Connectors target endpoint. */
	export interface GoogleCloudConnectorsV1DestinationConfigFormProperties {

		/** The key is the destination identifier that is supported by the Connector. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1DestinationConfigFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1DestinationConfigFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GoogleCloudConnectorsV1Destination {

		/** For publicly routable host. */
		host?: string | null;

		/**
		 * The port is the target port number that is accepted by the destination.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port?: number | null;

		/** PSC service attachments. Format: projects/regions/serviceAttachments/* */
		serviceAttachment?: string | null;
	}
	export interface GoogleCloudConnectorsV1DestinationFormProperties {

		/** For publicly routable host. */
		host: FormControl<string | null | undefined>,

		/**
		 * The port is the target port number that is accepted by the destination.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		port: FormControl<number | null | undefined>,

		/** PSC service attachments. Format: projects/regions/serviceAttachments/* */
		serviceAttachment: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1DestinationFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1DestinationFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			serviceAttachment: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Determines whether or no a connection is locked. If locked, a reason must be specified. */
	export interface GoogleCloudConnectorsV1LockConfig {

		/** Indicates whether or not the connection is locked. */
		locked?: boolean | null;

		/** Describes why a connection is locked. */
		reason?: string | null;
	}

	/** Determines whether or no a connection is locked. If locked, a reason must be specified. */
	export interface GoogleCloudConnectorsV1LockConfigFormProperties {

		/** Indicates whether or not the connection is locked. */
		locked: FormControl<boolean | null | undefined>,

		/** Describes why a connection is locked. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1LockConfigFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1LockConfigFormProperties>({
			locked: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Log configuration for the connection. */
	export interface GoogleCloudConnectorsV1LogConfig {

		/** Enabled represents whether logging is enabled or not for a connection. */
		enabled?: boolean | null;
	}

	/** Log configuration for the connection. */
	export interface GoogleCloudConnectorsV1LogConfigFormProperties {

		/** Enabled represents whether logging is enabled or not for a connection. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1LogConfigFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1LogConfigFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Node configuration for the connection. */
	export interface GoogleCloudConnectorsV1NodeConfig {

		/**
		 * Maximum number of nodes in the runtime nodes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNodeCount?: number | null;

		/**
		 * Minimum number of nodes in the runtime nodes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minNodeCount?: number | null;
	}

	/** Node configuration for the connection. */
	export interface GoogleCloudConnectorsV1NodeConfigFormProperties {

		/**
		 * Maximum number of nodes in the runtime nodes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxNodeCount: FormControl<number | null | undefined>,

		/**
		 * Minimum number of nodes in the runtime nodes.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minNodeCount: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1NodeConfigFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1NodeConfigFormProperties>({
			maxNodeCount: new FormControl<number | null | undefined>(undefined),
			minNodeCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** SSL Configuration of a connection */
	export interface GoogleCloudConnectorsV1SslConfig {

		/** Additional SSL related field values */
		additionalVariables?: Array<GoogleCloudConnectorsV1ConfigVariable>;

		/** Type of Client Cert (PEM/JKS/.. etc.) */
		clientCertType?: GoogleCloudConnectorsV1SslConfigClientCertType | null;

		/** Secret provides a reference to entries in Secret Manager. */
		clientCertificate?: GoogleCloudConnectorsV1Secret;

		/** Secret provides a reference to entries in Secret Manager. */
		clientPrivateKey?: GoogleCloudConnectorsV1Secret;

		/** Secret provides a reference to entries in Secret Manager. */
		clientPrivateKeyPass?: GoogleCloudConnectorsV1Secret;

		/** Secret provides a reference to entries in Secret Manager. */
		privateServerCertificate?: GoogleCloudConnectorsV1Secret;

		/** Type of Server Cert (PEM/JKS/.. etc.) */
		serverCertType?: GoogleCloudConnectorsV1SslConfigClientCertType | null;

		/** Trust Model of the SSL connection */
		trustModel?: GoogleCloudConnectorsV1SslConfigTrustModel | null;

		/** Controls the ssl type for the given connector version. */
		type?: GoogleCloudConnectorsV1SslConfigType | null;

		/** Bool for enabling SSL */
		useSsl?: boolean | null;
	}

	/** SSL Configuration of a connection */
	export interface GoogleCloudConnectorsV1SslConfigFormProperties {

		/** Type of Client Cert (PEM/JKS/.. etc.) */
		clientCertType: FormControl<GoogleCloudConnectorsV1SslConfigClientCertType | null | undefined>,

		/** Type of Server Cert (PEM/JKS/.. etc.) */
		serverCertType: FormControl<GoogleCloudConnectorsV1SslConfigClientCertType | null | undefined>,

		/** Trust Model of the SSL connection */
		trustModel: FormControl<GoogleCloudConnectorsV1SslConfigTrustModel | null | undefined>,

		/** Controls the ssl type for the given connector version. */
		type: FormControl<GoogleCloudConnectorsV1SslConfigType | null | undefined>,

		/** Bool for enabling SSL */
		useSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1SslConfigFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1SslConfigFormProperties>({
			clientCertType: new FormControl<GoogleCloudConnectorsV1SslConfigClientCertType | null | undefined>(undefined),
			serverCertType: new FormControl<GoogleCloudConnectorsV1SslConfigClientCertType | null | undefined>(undefined),
			trustModel: new FormControl<GoogleCloudConnectorsV1SslConfigTrustModel | null | undefined>(undefined),
			type: new FormControl<GoogleCloudConnectorsV1SslConfigType | null | undefined>(undefined),
			useSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudConnectorsV1SslConfigClientCertType { CERT_TYPE_UNSPECIFIED = 'CERT_TYPE_UNSPECIFIED', PEM = 'PEM' }

	export enum GoogleCloudConnectorsV1SslConfigTrustModel { PUBLIC = 'PUBLIC', PRIVATE = 'PRIVATE', INSECURE = 'INSECURE' }

	export enum GoogleCloudConnectorsV1SslConfigType { SSL_TYPE_UNSPECIFIED = 'SSL_TYPE_UNSPECIFIED', TLS = 'TLS', MTLS = 'MTLS' }


	/** ConnectionStatus indicates the state of the connection. */
	export interface GoogleCloudConnectorsV1ConnectionStatus {

		/** Description. */
		description?: string | null;

		/** State. */
		state?: GoogleCloudConnectorsV1ConnectionStatusState | null;

		/** Status provides detailed information for the state. */
		status?: string | null;
	}

	/** ConnectionStatus indicates the state of the connection. */
	export interface GoogleCloudConnectorsV1ConnectionStatusFormProperties {

		/** Description. */
		description: FormControl<string | null | undefined>,

		/** State. */
		state: FormControl<GoogleCloudConnectorsV1ConnectionStatusState | null | undefined>,

		/** Status provides detailed information for the state. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudConnectorsV1ConnectionStatusFormGroup() {
		return new FormGroup<GoogleCloudConnectorsV1ConnectionStatusFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudConnectorsV1ConnectionStatusState | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudConnectorsV1ConnectionStatusState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', ACTIVE = 'ACTIVE', INACTIVE = 'INACTIVE', DELETING = 'DELETING', UPDATING = 'UPDATING', ERROR = 'ERROR', AUTHORIZATION_REQUIRED = 'AUTHORIZATION_REQUIRED' }

	export enum GoogleCloudConnectorsV1ConnectionSubscriptionType { SUBSCRIPTION_TYPE_UNSPECIFIED = 'SUBSCRIPTION_TYPE_UNSPECIFIED', PAY_G = 'PAY_G', PAID = 'PAID' }


	/** The access token represents the authorization of a specific application to access specific parts of a user’s data. */
	export interface GoogleCloudIntegrationsV1alphaAccessToken {

		/** The access token encapsulating the security identity of a process or thread. */
		accessToken?: string | null;

		/** Required. The approximate time until the access token retrieved is valid. */
		accessTokenExpireTime?: string | null;

		/** If the access token will expire, use the refresh token to obtain another access token. */
		refreshToken?: string | null;

		/** The approximate time until the refresh token retrieved is valid. */
		refreshTokenExpireTime?: string | null;

		/** Only support "bearer" token in v1 as bearer token is the predominant type used with OAuth 2.0. */
		tokenType?: string | null;
	}

	/** The access token represents the authorization of a specific application to access specific parts of a user’s data. */
	export interface GoogleCloudIntegrationsV1alphaAccessTokenFormProperties {

		/** The access token encapsulating the security identity of a process or thread. */
		accessToken: FormControl<string | null | undefined>,

		/** Required. The approximate time until the access token retrieved is valid. */
		accessTokenExpireTime: FormControl<string | null | undefined>,

		/** If the access token will expire, use the refresh token to obtain another access token. */
		refreshToken: FormControl<string | null | undefined>,

		/** The approximate time until the refresh token retrieved is valid. */
		refreshTokenExpireTime: FormControl<string | null | undefined>,

		/** Only support "bearer" token in v1 as bearer token is the predominant type used with OAuth 2.0. */
		tokenType: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaAccessTokenFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaAccessTokenFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			accessTokenExpireTime: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
			refreshTokenExpireTime: new FormControl<string | null | undefined>(undefined),
			tokenType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Status for the execution attempt. */
	export interface GoogleCloudIntegrationsV1alphaAttemptStats {

		/** The end time of the event execution for current attempt. */
		endTime?: string | null;

		/** The start time of the event execution for current attempt. This could be in the future if it's been scheduled. */
		startTime?: string | null;
	}

	/** Status for the execution attempt. */
	export interface GoogleCloudIntegrationsV1alphaAttemptStatsFormProperties {

		/** The end time of the event execution for current attempt. */
		endTime: FormControl<string | null | undefined>,

		/** The start time of the event execution for current attempt. This could be in the future if it's been scheduled. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaAttemptStatsFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaAttemptStatsFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The AuthConfig resource use to hold channels and connection config data. */
	export interface GoogleCloudIntegrationsV1alphaAuthConfig {

		/** Certificate id for client certificate */
		certificateId?: string | null;

		/** Output only. The timestamp when the auth config is created. */
		createTime?: string | null;

		/** The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call. */
		creatorEmail?: string | null;

		/** Credential type of the encrypted credential. */
		credentialType?: GoogleCloudIntegrationsV1alphaAuthConfigCredentialType | null;

		/** Defines parameters for a single, canonical credential. */
		decryptedCredential?: GoogleCloudIntegrationsV1alphaCredential;

		/** A description of the auth config. */
		description?: string | null;

		/** The name of the auth config. */
		displayName?: string | null;

		/** Auth credential encrypted by Cloud KMS. Can be decrypted as Credential with proper KMS key. */
		encryptedCredential?: string | null;

		/** User can define the time to receive notification after which the auth config becomes invalid. Support up to 30 days. Support granularity in hours. */
		expiryNotificationDuration?: Array<string>;

		/** The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call. */
		lastModifierEmail?: string | null;

		/** Resource name of the SFDC instance projects/{project}/locations/{location}/authConfigs/{authConfig}. */
		name?: string | null;

		/** User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings. */
		overrideValidTime?: string | null;

		/** The reason / details of the current status. */
		reason?: string | null;

		/** The status of the auth config. */
		state?: GoogleCloudIntegrationsV1alphaAuthConfigState | null;

		/** Output only. The timestamp when the auth config is modified. */
		updateTime?: string | null;

		/** The time until the auth config is valid. Empty or max value is considered the auth config won't expire. */
		validTime?: string | null;

		/** The visibility of the auth config. */
		visibility?: GoogleCloudIntegrationsV1alphaAuthConfigVisibility | null;
	}

	/** The AuthConfig resource use to hold channels and connection config data. */
	export interface GoogleCloudIntegrationsV1alphaAuthConfigFormProperties {

		/** Certificate id for client certificate */
		certificateId: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the auth config is created. */
		createTime: FormControl<string | null | undefined>,

		/** The creator's email address. Generated based on the End User Credentials/LOAS role of the user making the call. */
		creatorEmail: FormControl<string | null | undefined>,

		/** Credential type of the encrypted credential. */
		credentialType: FormControl<GoogleCloudIntegrationsV1alphaAuthConfigCredentialType | null | undefined>,

		/** A description of the auth config. */
		description: FormControl<string | null | undefined>,

		/** The name of the auth config. */
		displayName: FormControl<string | null | undefined>,

		/** Auth credential encrypted by Cloud KMS. Can be decrypted as Credential with proper KMS key. */
		encryptedCredential: FormControl<string | null | undefined>,

		/** The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call. */
		lastModifierEmail: FormControl<string | null | undefined>,

		/** Resource name of the SFDC instance projects/{project}/locations/{location}/authConfigs/{authConfig}. */
		name: FormControl<string | null | undefined>,

		/** User provided expiry time to override. For the example of Salesforce, username/password credentials can be valid for 6 months depending on the instance settings. */
		overrideValidTime: FormControl<string | null | undefined>,

		/** The reason / details of the current status. */
		reason: FormControl<string | null | undefined>,

		/** The status of the auth config. */
		state: FormControl<GoogleCloudIntegrationsV1alphaAuthConfigState | null | undefined>,

		/** Output only. The timestamp when the auth config is modified. */
		updateTime: FormControl<string | null | undefined>,

		/** The time until the auth config is valid. Empty or max value is considered the auth config won't expire. */
		validTime: FormControl<string | null | undefined>,

		/** The visibility of the auth config. */
		visibility: FormControl<GoogleCloudIntegrationsV1alphaAuthConfigVisibility | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaAuthConfigFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaAuthConfigFormProperties>({
			certificateId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creatorEmail: new FormControl<string | null | undefined>(undefined),
			credentialType: new FormControl<GoogleCloudIntegrationsV1alphaAuthConfigCredentialType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			encryptedCredential: new FormControl<string | null | undefined>(undefined),
			lastModifierEmail: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			overrideValidTime: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudIntegrationsV1alphaAuthConfigState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			validTime: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<GoogleCloudIntegrationsV1alphaAuthConfigVisibility | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaAuthConfigCredentialType { CREDENTIAL_TYPE_UNSPECIFIED = 'CREDENTIAL_TYPE_UNSPECIFIED', USERNAME_AND_PASSWORD = 'USERNAME_AND_PASSWORD', API_KEY = 'API_KEY', OAUTH2_AUTHORIZATION_CODE = 'OAUTH2_AUTHORIZATION_CODE', OAUTH2_IMPLICIT = 'OAUTH2_IMPLICIT', OAUTH2_CLIENT_CREDENTIALS = 'OAUTH2_CLIENT_CREDENTIALS', OAUTH2_RESOURCE_OWNER_CREDENTIALS = 'OAUTH2_RESOURCE_OWNER_CREDENTIALS', JWT = 'JWT', AUTH_TOKEN = 'AUTH_TOKEN', SERVICE_ACCOUNT = 'SERVICE_ACCOUNT', CLIENT_CERTIFICATE_ONLY = 'CLIENT_CERTIFICATE_ONLY', OIDC_TOKEN = 'OIDC_TOKEN' }


	/** Defines parameters for a single, canonical credential. */
	export interface GoogleCloudIntegrationsV1alphaCredential {

		/** The credentials to authenticate a user agent with a server that is put in HTTP Authorization request header. */
		authToken?: GoogleCloudIntegrationsV1alphaAuthToken;

		/** Credential type associated with auth config. */
		credentialType?: GoogleCloudIntegrationsV1alphaAuthConfigCredentialType | null;

		/** Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected. */
		jwt?: GoogleCloudIntegrationsV1alphaJwt;

		/** The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens. */
		oauth2AuthorizationCode?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode;

		/** For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token. */
		oauth2ClientCredentials?: GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials;

		/** For resource owner credentials grant, the client will ask the user for their authorization credentials (ususally a username and password) and send a POST request to the authorization server. The authorization server will respond with a JSON object containing the access token. */
		oauth2ResourceOwnerCredentials?: GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials;

		/** OIDC Token */
		oidcToken?: GoogleCloudIntegrationsV1alphaOidcToken;

		/** Represents the service account which can be used to generate access token for authenticating the service call. */
		serviceAccountCredentials?: GoogleCloudIntegrationsV1alphaServiceAccountCredentials;

		/** Username and password pair. */
		usernameAndPassword?: GoogleCloudIntegrationsV1alphaUsernameAndPassword;
	}

	/** Defines parameters for a single, canonical credential. */
	export interface GoogleCloudIntegrationsV1alphaCredentialFormProperties {

		/** Credential type associated with auth config. */
		credentialType: FormControl<GoogleCloudIntegrationsV1alphaAuthConfigCredentialType | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaCredentialFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaCredentialFormProperties>({
			credentialType: new FormControl<GoogleCloudIntegrationsV1alphaAuthConfigCredentialType | null | undefined>(undefined),
		});

	}


	/** The credentials to authenticate a user agent with a server that is put in HTTP Authorization request header. */
	export interface GoogleCloudIntegrationsV1alphaAuthToken {

		/** The token for the auth type. */
		token?: string | null;

		/** Authentication type, e.g. "Basic", "Bearer", etc. */
		type?: string | null;
	}

	/** The credentials to authenticate a user agent with a server that is put in HTTP Authorization request header. */
	export interface GoogleCloudIntegrationsV1alphaAuthTokenFormProperties {

		/** The token for the auth type. */
		token: FormControl<string | null | undefined>,

		/** Authentication type, e.g. "Basic", "Bearer", etc. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaAuthTokenFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaAuthTokenFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected. */
	export interface GoogleCloudIntegrationsV1alphaJwt {

		/** The token calculated by the header, payload and signature. */
		jwt?: string | null;

		/** Identifies which algorithm is used to generate the signature. */
		jwtHeader?: string | null;

		/** Contains a set of claims. The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token. */
		jwtPayload?: string | null;

		/** User's pre-shared secret to sign the token. */
		secret?: string | null;
	}

	/** Represents JSON web token(JWT), which is a compact, URL-safe means of representing claims to be transferred between two parties, enabling the claims to be digitally signed or integrity protected. */
	export interface GoogleCloudIntegrationsV1alphaJwtFormProperties {

		/** The token calculated by the header, payload and signature. */
		jwt: FormControl<string | null | undefined>,

		/** Identifies which algorithm is used to generate the signature. */
		jwtHeader: FormControl<string | null | undefined>,

		/** Contains a set of claims. The JWT specification defines seven Registered Claim Names which are the standard fields commonly included in tokens. Custom claims are usually also included, depending on the purpose of the token. */
		jwtPayload: FormControl<string | null | undefined>,

		/** User's pre-shared secret to sign the token. */
		secret: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaJwtFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaJwtFormProperties>({
			jwt: new FormControl<string | null | undefined>(undefined),
			jwtHeader: new FormControl<string | null | undefined>(undefined),
			jwtPayload: new FormControl<string | null | undefined>(undefined),
			secret: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens. */
	export interface GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCode {

		/** The access token represents the authorization of a specific application to access specific parts of a user’s data. */
		accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;

		/** Indicates if the user has opted in Google Reauth Policy. If opted in, the refresh token will be valid for 20 hours, after which time users must re-authenticate in order to obtain a new one. */
		applyReauthPolicy?: boolean | null;

		/** The Auth Code that is used to initially retrieve the access token. */
		authCode?: string | null;

		/** The auth url endpoint to send the auth code request to. */
		authEndpoint?: string | null;

		/** A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified. */
		authParams?: GoogleCloudIntegrationsV1alphaParameterMap;

		/** The client's id. */
		clientId?: string | null;

		/** The client's secret. */
		clientSecret?: string | null;

		/** Represent how to pass parameters to fetch access token */
		requestType?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestType | null;

		/** A space-delimited list of requested scope permissions. */
		scope?: string | null;

		/** The token url endpoint to send the token request to. */
		tokenEndpoint?: string | null;

		/** A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified. */
		tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;
	}

	/** The OAuth Type where the client sends request with the client id and requested scopes to auth endpoint. User sees a consent screen and auth code is received at specified redirect url afterwards. The auth code is then combined with the client id and secret and sent to the token endpoint in exchange for the access and refresh token. The refresh token can be used to fetch new access tokens. */
	export interface GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeFormProperties {

		/** Indicates if the user has opted in Google Reauth Policy. If opted in, the refresh token will be valid for 20 hours, after which time users must re-authenticate in order to obtain a new one. */
		applyReauthPolicy: FormControl<boolean | null | undefined>,

		/** The Auth Code that is used to initially retrieve the access token. */
		authCode: FormControl<string | null | undefined>,

		/** The auth url endpoint to send the auth code request to. */
		authEndpoint: FormControl<string | null | undefined>,

		/** The client's id. */
		clientId: FormControl<string | null | undefined>,

		/** The client's secret. */
		clientSecret: FormControl<string | null | undefined>,

		/** Represent how to pass parameters to fetch access token */
		requestType: FormControl<GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestType | null | undefined>,

		/** A space-delimited list of requested scope permissions. */
		scope: FormControl<string | null | undefined>,

		/** The token url endpoint to send the token request to. */
		tokenEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeFormProperties>({
			applyReauthPolicy: new FormControl<boolean | null | undefined>(undefined),
			authCode: new FormControl<string | null | undefined>(undefined),
			authEndpoint: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			requestType: new FormControl<GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestType | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			tokenEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified. */
	export interface GoogleCloudIntegrationsV1alphaParameterMap {

		/** A list of parameter map entries. */
		entries?: Array<GoogleCloudIntegrationsV1alphaParameterMapEntry>;

		/** Option to specify key type for all entries of the map. If provided then field types for all entries must conform to this. */
		keyType?: GoogleCloudIntegrationsV1alphaParameterMapKeyType | null;

		/** Option to specify value type for all entries of the map. If provided then field types for all entries must conform to this. */
		valueType?: GoogleCloudIntegrationsV1alphaParameterMapKeyType | null;
	}

	/** A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified. */
	export interface GoogleCloudIntegrationsV1alphaParameterMapFormProperties {

		/** Option to specify key type for all entries of the map. If provided then field types for all entries must conform to this. */
		keyType: FormControl<GoogleCloudIntegrationsV1alphaParameterMapKeyType | null | undefined>,

		/** Option to specify value type for all entries of the map. If provided then field types for all entries must conform to this. */
		valueType: FormControl<GoogleCloudIntegrationsV1alphaParameterMapKeyType | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaParameterMapFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaParameterMapFormProperties>({
			keyType: new FormControl<GoogleCloudIntegrationsV1alphaParameterMapKeyType | null | undefined>(undefined),
			valueType: new FormControl<GoogleCloudIntegrationsV1alphaParameterMapKeyType | null | undefined>(undefined),
		});

	}


	/** Entry is a pair of key and value. */
	export interface GoogleCloudIntegrationsV1alphaParameterMapEntry {

		/** Field represents either the key or value in an entry. */
		key?: GoogleCloudIntegrationsV1alphaParameterMapField;

		/** Field represents either the key or value in an entry. */
		value?: GoogleCloudIntegrationsV1alphaParameterMapField;
	}

	/** Entry is a pair of key and value. */
	export interface GoogleCloudIntegrationsV1alphaParameterMapEntryFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaParameterMapEntryFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaParameterMapEntryFormProperties>({
		});

	}


	/** Field represents either the key or value in an entry. */
	export interface GoogleCloudIntegrationsV1alphaParameterMapField {

		/** The type of the parameter. */
		literalValue?: GoogleCloudIntegrationsV1alphaValueType;

		/** Referencing one of the Integration variables. */
		referenceKey?: string | null;
	}

	/** Field represents either the key or value in an entry. */
	export interface GoogleCloudIntegrationsV1alphaParameterMapFieldFormProperties {

		/** Referencing one of the Integration variables. */
		referenceKey: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaParameterMapFieldFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaParameterMapFieldFormProperties>({
			referenceKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The type of the parameter. */
	export interface GoogleCloudIntegrationsV1alphaValueType {

		/** This message only contains a field of boolean array. */
		booleanArray?: GoogleCloudIntegrationsV1alphaBooleanParameterArray;

		/** Boolean. */
		booleanValue?: boolean | null;

		/** This message only contains a field of double number array. */
		doubleArray?: GoogleCloudIntegrationsV1alphaDoubleParameterArray;

		/**
		 * Double Number.
		 * Type: double
		 */
		doubleValue?: number | null;

		/** This message only contains a field of integer array. */
		intArray?: GoogleCloudIntegrationsV1alphaIntParameterArray;

		/** Integer. */
		intValue?: string | null;

		/** Json. */
		jsonValue?: string | null;

		/** This message only contains a field of string array. */
		stringArray?: GoogleCloudIntegrationsV1alphaStringParameterArray;

		/** String. */
		stringValue?: string | null;
	}

	/** The type of the parameter. */
	export interface GoogleCloudIntegrationsV1alphaValueTypeFormProperties {

		/** Boolean. */
		booleanValue: FormControl<boolean | null | undefined>,

		/**
		 * Double Number.
		 * Type: double
		 */
		doubleValue: FormControl<number | null | undefined>,

		/** Integer. */
		intValue: FormControl<string | null | undefined>,

		/** Json. */
		jsonValue: FormControl<string | null | undefined>,

		/** String. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaValueTypeFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaValueTypeFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
			jsonValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message only contains a field of boolean array. */
	export interface GoogleCloudIntegrationsV1alphaBooleanParameterArray {

		/** Boolean array. */
		booleanValues?: Array<boolean>;
	}

	/** This message only contains a field of boolean array. */
	export interface GoogleCloudIntegrationsV1alphaBooleanParameterArrayFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaBooleanParameterArrayFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaBooleanParameterArrayFormProperties>({
		});

	}


	/** This message only contains a field of double number array. */
	export interface GoogleCloudIntegrationsV1alphaDoubleParameterArray {

		/** Double number array. */
		doubleValues?: Array<number>;
	}

	/** This message only contains a field of double number array. */
	export interface GoogleCloudIntegrationsV1alphaDoubleParameterArrayFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaDoubleParameterArrayFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaDoubleParameterArrayFormProperties>({
		});

	}


	/** This message only contains a field of integer array. */
	export interface GoogleCloudIntegrationsV1alphaIntParameterArray {

		/** Integer array. */
		intValues?: Array<string>;
	}

	/** This message only contains a field of integer array. */
	export interface GoogleCloudIntegrationsV1alphaIntParameterArrayFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaIntParameterArrayFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaIntParameterArrayFormProperties>({
		});

	}


	/** This message only contains a field of string array. */
	export interface GoogleCloudIntegrationsV1alphaStringParameterArray {

		/** String array. */
		stringValues?: Array<string>;
	}

	/** This message only contains a field of string array. */
	export interface GoogleCloudIntegrationsV1alphaStringParameterArrayFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaStringParameterArrayFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaStringParameterArrayFormProperties>({
		});

	}

	export enum GoogleCloudIntegrationsV1alphaParameterMapKeyType { INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED = 'INTEGRATION_PARAMETER_DATA_TYPE_UNSPECIFIED', STRING_VALUE = 'STRING_VALUE', INT_VALUE = 'INT_VALUE', DOUBLE_VALUE = 'DOUBLE_VALUE', BOOLEAN_VALUE = 'BOOLEAN_VALUE', STRING_ARRAY = 'STRING_ARRAY', INT_ARRAY = 'INT_ARRAY', DOUBLE_ARRAY = 'DOUBLE_ARRAY', BOOLEAN_ARRAY = 'BOOLEAN_ARRAY', JSON_VALUE = 'JSON_VALUE', PROTO_VALUE = 'PROTO_VALUE', PROTO_ARRAY = 'PROTO_ARRAY' }

	export enum GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestType { REQUEST_TYPE_UNSPECIFIED = 'REQUEST_TYPE_UNSPECIFIED', REQUEST_BODY = 'REQUEST_BODY', QUERY_PARAMETERS = 'QUERY_PARAMETERS', ENCODED_HEADER = 'ENCODED_HEADER' }


	/** For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token. */
	export interface GoogleCloudIntegrationsV1alphaOAuth2ClientCredentials {

		/** The access token represents the authorization of a specific application to access specific parts of a user’s data. */
		accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;

		/** The client's ID. */
		clientId?: string | null;

		/** The client's secret. */
		clientSecret?: string | null;

		/** Represent how to pass parameters to fetch access token */
		requestType?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestType | null;

		/** A space-delimited list of requested scope permissions. */
		scope?: string | null;

		/** The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. */
		tokenEndpoint?: string | null;

		/** A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified. */
		tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;
	}

	/** For client credentials grant, the client sends a POST request with grant_type as 'client_credentials' to the authorization server. The authorization server will respond with a JSON object containing the access token. */
	export interface GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsFormProperties {

		/** The client's ID. */
		clientId: FormControl<string | null | undefined>,

		/** The client's secret. */
		clientSecret: FormControl<string | null | undefined>,

		/** Represent how to pass parameters to fetch access token */
		requestType: FormControl<GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestType | null | undefined>,

		/** A space-delimited list of requested scope permissions. */
		scope: FormControl<string | null | undefined>,

		/** The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. */
		tokenEndpoint: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaOAuth2ClientCredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			requestType: new FormControl<GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestType | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			tokenEndpoint: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** For resource owner credentials grant, the client will ask the user for their authorization credentials (ususally a username and password) and send a POST request to the authorization server. The authorization server will respond with a JSON object containing the access token. */
	export interface GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentials {

		/** The access token represents the authorization of a specific application to access specific parts of a user’s data. */
		accessToken?: GoogleCloudIntegrationsV1alphaAccessToken;

		/** The client's ID. */
		clientId?: string | null;

		/** The client's secret. */
		clientSecret?: string | null;

		/** The user's password. */
		password?: string | null;

		/** Represent how to pass parameters to fetch access token */
		requestType?: GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestType | null;

		/** A space-delimited list of requested scope permissions. */
		scope?: string | null;

		/** The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. */
		tokenEndpoint?: string | null;

		/** A generic multi-map that holds key value pairs. They keys and values can be of any type, unless specified. */
		tokenParams?: GoogleCloudIntegrationsV1alphaParameterMap;

		/** The user's username. */
		username?: string | null;
	}

	/** For resource owner credentials grant, the client will ask the user for their authorization credentials (ususally a username and password) and send a POST request to the authorization server. The authorization server will respond with a JSON object containing the access token. */
	export interface GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsFormProperties {

		/** The client's ID. */
		clientId: FormControl<string | null | undefined>,

		/** The client's secret. */
		clientSecret: FormControl<string | null | undefined>,

		/** The user's password. */
		password: FormControl<string | null | undefined>,

		/** Represent how to pass parameters to fetch access token */
		requestType: FormControl<GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestType | null | undefined>,

		/** A space-delimited list of requested scope permissions. */
		scope: FormControl<string | null | undefined>,

		/** The token endpoint is used by the client to obtain an access token by presenting its authorization grant or refresh token. */
		tokenEndpoint: FormControl<string | null | undefined>,

		/** The user's username. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaOAuth2ResourceOwnerCredentialsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			requestType: new FormControl<GoogleCloudIntegrationsV1alphaOAuth2AuthorizationCodeRequestType | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
			tokenEndpoint: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OIDC Token */
	export interface GoogleCloudIntegrationsV1alphaOidcToken {

		/** Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. */
		audience?: string | null;

		/** The service account email to be used as the identity for the token. */
		serviceAccountEmail?: string | null;

		/** ID token obtained for the service account */
		token?: string | null;

		/** The approximate time until the token retrieved is valid. */
		tokenExpireTime?: string | null;
	}

	/** OIDC Token */
	export interface GoogleCloudIntegrationsV1alphaOidcTokenFormProperties {

		/** Audience to be used when generating OIDC token. The audience claim identifies the recipients that the JWT is intended for. */
		audience: FormControl<string | null | undefined>,

		/** The service account email to be used as the identity for the token. */
		serviceAccountEmail: FormControl<string | null | undefined>,

		/** ID token obtained for the service account */
		token: FormControl<string | null | undefined>,

		/** The approximate time until the token retrieved is valid. */
		tokenExpireTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaOidcTokenFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaOidcTokenFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			tokenExpireTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the service account which can be used to generate access token for authenticating the service call. */
	export interface GoogleCloudIntegrationsV1alphaServiceAccountCredentials {

		/** A space-delimited list of requested scope permissions. */
		scope?: string | null;

		/** Name of the service account that has the permission to make the request. */
		serviceAccount?: string | null;
	}

	/** Represents the service account which can be used to generate access token for authenticating the service call. */
	export interface GoogleCloudIntegrationsV1alphaServiceAccountCredentialsFormProperties {

		/** A space-delimited list of requested scope permissions. */
		scope: FormControl<string | null | undefined>,

		/** Name of the service account that has the permission to make the request. */
		serviceAccount: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaServiceAccountCredentialsFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaServiceAccountCredentialsFormProperties>({
			scope: new FormControl<string | null | undefined>(undefined),
			serviceAccount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Username and password pair. */
	export interface GoogleCloudIntegrationsV1alphaUsernameAndPassword {

		/** Password to be used */
		password?: string | null;

		/** Username to be used */
		username?: string | null;
	}

	/** Username and password pair. */
	export interface GoogleCloudIntegrationsV1alphaUsernameAndPasswordFormProperties {

		/** Password to be used */
		password: FormControl<string | null | undefined>,

		/** Username to be used */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaUsernameAndPasswordFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaUsernameAndPasswordFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaAuthConfigState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', VALID = 'VALID', INVALID = 'INVALID', SOFT_DELETED = 'SOFT_DELETED', EXPIRED = 'EXPIRED', UNAUTHORIZED = 'UNAUTHORIZED', UNSUPPORTED = 'UNSUPPORTED' }

	export enum GoogleCloudIntegrationsV1alphaAuthConfigVisibility { AUTH_CONFIG_VISIBILITY_UNSPECIFIED = 'AUTH_CONFIG_VISIBILITY_UNSPECIFIED', PRIVATE = 'PRIVATE', CLIENT_VISIBLE = 'CLIENT_VISIBLE' }


	/** Request for cancelling an execution. */
	export interface GoogleCloudIntegrationsV1alphaCancelExecutionRequest {
	}

	/** Request for cancelling an execution. */
	export interface GoogleCloudIntegrationsV1alphaCancelExecutionRequestFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaCancelExecutionRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaCancelExecutionRequestFormProperties>({
		});

	}


	/** Response for cancelling an execution. */
	export interface GoogleCloudIntegrationsV1alphaCancelExecutionResponse {

		/** True if cancellation performed successfully */
		isCanceled?: boolean | null;
	}

	/** Response for cancelling an execution. */
	export interface GoogleCloudIntegrationsV1alphaCancelExecutionResponseFormProperties {

		/** True if cancellation performed successfully */
		isCanceled: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaCancelExecutionResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaCancelExecutionResponseFormProperties>({
			isCanceled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The certificate definition */
	export interface GoogleCloudIntegrationsV1alphaCertificate {

		/** Status of the certificate */
		certificateStatus?: GoogleCloudIntegrationsV1alphaCertificateCertificateStatus | null;

		/** Immutable. Credential id that will be used to register with trawler INTERNAL_ONLY */
		credentialId?: string | null;

		/** Description of the certificate */
		description?: string | null;

		/** Name of the certificate */
		displayName?: string | null;

		/** Output only. Auto generated primary key */
		name?: string | null;

		/** Contains client certificate information */
		rawCertificate?: GoogleCloudIntegrationsV1alphaClientCertificate;

		/** Immutable. Requestor ID to be used to register certificate with trawler */
		requestorId?: string | null;

		/** Output only. The timestamp after which certificate will expire */
		validEndTime?: string | null;

		/** Output only. The timestamp after which certificate will be valid */
		validStartTime?: string | null;
	}

	/** The certificate definition */
	export interface GoogleCloudIntegrationsV1alphaCertificateFormProperties {

		/** Status of the certificate */
		certificateStatus: FormControl<GoogleCloudIntegrationsV1alphaCertificateCertificateStatus | null | undefined>,

		/** Immutable. Credential id that will be used to register with trawler INTERNAL_ONLY */
		credentialId: FormControl<string | null | undefined>,

		/** Description of the certificate */
		description: FormControl<string | null | undefined>,

		/** Name of the certificate */
		displayName: FormControl<string | null | undefined>,

		/** Output only. Auto generated primary key */
		name: FormControl<string | null | undefined>,

		/** Immutable. Requestor ID to be used to register certificate with trawler */
		requestorId: FormControl<string | null | undefined>,

		/** Output only. The timestamp after which certificate will expire */
		validEndTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp after which certificate will be valid */
		validStartTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaCertificateFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaCertificateFormProperties>({
			certificateStatus: new FormControl<GoogleCloudIntegrationsV1alphaCertificateCertificateStatus | null | undefined>(undefined),
			credentialId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requestorId: new FormControl<string | null | undefined>(undefined),
			validEndTime: new FormControl<string | null | undefined>(undefined),
			validStartTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaCertificateCertificateStatus { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', EXPIRED = 'EXPIRED' }


	/** Contains client certificate information */
	export interface GoogleCloudIntegrationsV1alphaClientCertificate {

		/** The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- */
		encryptedPrivateKey?: string | null;

		/** 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key. */
		passphrase?: string | null;

		/** The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- */
		sslCertificate?: string | null;
	}

	/** Contains client certificate information */
	export interface GoogleCloudIntegrationsV1alphaClientCertificateFormProperties {

		/** The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- */
		encryptedPrivateKey: FormControl<string | null | undefined>,

		/** 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key. */
		passphrase: FormControl<string | null | undefined>,

		/** The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- */
		sslCertificate: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaClientCertificateFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaClientCertificateFormProperties>({
			encryptedPrivateKey: new FormControl<string | null | undefined>(undefined),
			passphrase: new FormControl<string | null | undefined>(undefined),
			sslCertificate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud Scheduler Trigger configuration */
	export interface GoogleCloudIntegrationsV1alphaCloudSchedulerConfig {

		/** Required. The cron tab of cloud scheduler trigger. */
		cronTab?: string | null;

		/** Optional. When the job was deleted from Pantheon UI, error_message will be populated when Get/List integrations */
		errorMessage?: string | null;

		/** Required. The location where associated cloud scheduler job will be created */
		location?: string | null;

		/** Required. Service account used by Cloud Scheduler to trigger the integration at scheduled time */
		serviceAccountEmail?: string | null;
	}

	/** Cloud Scheduler Trigger configuration */
	export interface GoogleCloudIntegrationsV1alphaCloudSchedulerConfigFormProperties {

		/** Required. The cron tab of cloud scheduler trigger. */
		cronTab: FormControl<string | null | undefined>,

		/** Optional. When the job was deleted from Pantheon UI, error_message will be populated when Get/List integrations */
		errorMessage: FormControl<string | null | undefined>,

		/** Required. The location where associated cloud scheduler job will be created */
		location: FormControl<string | null | undefined>,

		/** Required. Service account used by Cloud Scheduler to trigger the integration at scheduled time */
		serviceAccountEmail: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaCloudSchedulerConfigFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaCloudSchedulerConfigFormProperties>({
			cronTab: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			serviceAccountEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of runtime connection schema. */
	export interface GoogleCloudIntegrationsV1alphaConnectionSchemaMetadata {

		/** List of actions. */
		actions?: Array<string>;

		/** List of entity names. */
		entities?: Array<string>;
	}

	/** Metadata of runtime connection schema. */
	export interface GoogleCloudIntegrationsV1alphaConnectionSchemaMetadataFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaConnectionSchemaMetadataFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaConnectionSchemaMetadataFormProperties>({
		});

	}


	/** Configuration detail of coordinate, it used for UI */
	export interface GoogleCloudIntegrationsV1alphaCoordinate {

		/**
		 * Required. X axis of the coordinate
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x?: number | null;

		/**
		 * Required. Y axis of the coordinate
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y?: number | null;
	}

	/** Configuration detail of coordinate, it used for UI */
	export interface GoogleCloudIntegrationsV1alphaCoordinateFormProperties {

		/**
		 * Required. X axis of the coordinate
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		x: FormControl<number | null | undefined>,

		/**
		 * Required. Y axis of the coordinate
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		y: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaCoordinateFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaCoordinateFormProperties>({
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request for CreateAppsScriptProject rpc call. */
	export interface GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest {

		/** The name of the Apps Script project to be created. */
		appsScriptProject?: string | null;

		/** The auth config id necessary to fetch the necessary credentials to create the project for external clients */
		authConfigId?: string | null;
	}

	/** Request for CreateAppsScriptProject rpc call. */
	export interface GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequestFormProperties {

		/** The name of the Apps Script project to be created. */
		appsScriptProject: FormControl<string | null | undefined>,

		/** The auth config id necessary to fetch the necessary credentials to create the project for external clients */
		authConfigId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequestFormProperties>({
			appsScriptProject: new FormControl<string | null | undefined>(undefined),
			authConfigId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for CreateAppsScriptProject rpc call. */
	export interface GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse {

		/** The created AppsScriptProject ID. */
		projectId?: string | null;
	}

	/** Response for CreateAppsScriptProject rpc call. */
	export interface GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponseFormProperties {

		/** The created AppsScriptProject ID. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponseFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for DownloadIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse {

		/** String representation of the integration version. */
		content?: string | null;
	}

	/** Response for DownloadIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponseFormProperties {

		/** String representation of the integration version. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponseFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing all provisioned regions for Connector Platform. */
	export interface GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse {

		/** All regions where Connector Platform is provisioned. */
		regions?: Array<string>;
	}

	/** Response containing all provisioned regions for Connector Platform. */
	export interface GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponseFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponseFormProperties>({
		});

	}


	/** Configuration detail of a error catch task */
	export interface GoogleCloudIntegrationsV1alphaErrorCatcherConfig {

		/** Optional. User-provided description intended to give more business context about the error catcher config. */
		description?: string | null;

		/** Required. An error catcher id is string representation for the error catcher config. Within a workflow, error_catcher_id uniquely identifies an error catcher config among all error catcher configs for the workflow */
		errorCatcherId?: string | null;

		/** Required. A number to uniquely identify each error catcher config within the workflow on UI. */
		errorCatcherNumber?: string | null;

		/** Optional. The user created label for a particular error catcher. Optional. */
		label?: string | null;

		/** Configuration detail of coordinate, it used for UI */
		position?: GoogleCloudIntegrationsV1alphaCoordinate;

		/** Required. The set of start tasks that are to be executed for the error catch flow */
		startErrorTasks?: Array<GoogleCloudIntegrationsV1alphaNextTask>;
	}

	/** Configuration detail of a error catch task */
	export interface GoogleCloudIntegrationsV1alphaErrorCatcherConfigFormProperties {

		/** Optional. User-provided description intended to give more business context about the error catcher config. */
		description: FormControl<string | null | undefined>,

		/** Required. An error catcher id is string representation for the error catcher config. Within a workflow, error_catcher_id uniquely identifies an error catcher config among all error catcher configs for the workflow */
		errorCatcherId: FormControl<string | null | undefined>,

		/** Required. A number to uniquely identify each error catcher config within the workflow on UI. */
		errorCatcherNumber: FormControl<string | null | undefined>,

		/** Optional. The user created label for a particular error catcher. Optional. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaErrorCatcherConfigFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaErrorCatcherConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			errorCatcherId: new FormControl<string | null | undefined>(undefined),
			errorCatcherNumber: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The task that is next in line to be executed, if the condition specified evaluated to true. */
	export interface GoogleCloudIntegrationsV1alphaNextTask {

		/** Standard filter expression for this task to become an eligible next task. */
		condition?: string | null;

		/** User-provided description intended to give additional business context about the task. */
		description?: string | null;

		/** User-provided label that is attached to this edge in the UI. */
		displayName?: string | null;

		/** ID of the next task. */
		taskConfigId?: string | null;

		/** Task number of the next task. */
		taskId?: string | null;
	}

	/** The task that is next in line to be executed, if the condition specified evaluated to true. */
	export interface GoogleCloudIntegrationsV1alphaNextTaskFormProperties {

		/** Standard filter expression for this task to become an eligible next task. */
		condition: FormControl<string | null | undefined>,

		/** User-provided description intended to give additional business context about the task. */
		description: FormControl<string | null | undefined>,

		/** User-provided label that is attached to this edge in the UI. */
		displayName: FormControl<string | null | undefined>,

		/** ID of the next task. */
		taskConfigId: FormControl<string | null | undefined>,

		/** Task number of the next task. */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaNextTaskFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaNextTaskFormProperties>({
			condition: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			taskConfigId: new FormControl<string | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. */
	export interface GoogleCloudIntegrationsV1alphaEventParameter {

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition. */
		key?: string | null;

		/** The type of the parameter. */
		value?: GoogleCloudIntegrationsV1alphaValueType;
	}

	/** This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. */
	export interface GoogleCloudIntegrationsV1alphaEventParameterFormProperties {

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaEventParameterFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaEventParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for triggering an integration using event triggers. */
	export interface GoogleCloudIntegrationsV1alphaExecuteEventRequest {

		/** -- CloudEvent Context Attributes */
		cloudEvent?: IoCloudeventsV1CloudEvent;
	}

	/** Request for triggering an integration using event triggers. */
	export interface GoogleCloudIntegrationsV1alphaExecuteEventRequestFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaExecuteEventRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaExecuteEventRequestFormProperties>({
		});

	}


	/** -- CloudEvent Context Attributes */
	export interface IoCloudeventsV1CloudEvent {

		/** Optional & Extension Attributes */
		attributes?: {[id: string]: IoCloudeventsV1CloudEventCloudEventAttributeValue };
		binaryData?: string | null;

		/** Required Attributes */
		id?: string | null;
		protoData?: {[id: string]: any };

		/** URI-reference */
		source?: string | null;
		specVersion?: string | null;
		textData?: string | null;
		type?: string | null;
	}

	/** -- CloudEvent Context Attributes */
	export interface IoCloudeventsV1CloudEventFormProperties {

		/** Optional & Extension Attributes */
		attributes: FormControl<{[id: string]: IoCloudeventsV1CloudEventCloudEventAttributeValue } | null | undefined>,
		binaryData: FormControl<string | null | undefined>,

		/** Required Attributes */
		id: FormControl<string | null | undefined>,
		protoData: FormControl<{[id: string]: any } | null | undefined>,

		/** URI-reference */
		source: FormControl<string | null | undefined>,
		specVersion: FormControl<string | null | undefined>,
		textData: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateIoCloudeventsV1CloudEventFormGroup() {
		return new FormGroup<IoCloudeventsV1CloudEventFormProperties>({
			attributes: new FormControl<{[id: string]: IoCloudeventsV1CloudEventCloudEventAttributeValue } | null | undefined>(undefined),
			binaryData: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			protoData: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
			specVersion: new FormControl<string | null | undefined>(undefined),
			textData: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IoCloudeventsV1CloudEventCloudEventAttributeValue {
		ceBoolean?: boolean | null;
		ceBytes?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ceInteger?: number | null;
		ceString?: string | null;
		ceTimestamp?: string | null;
		ceUri?: string | null;
		ceUriRef?: string | null;
	}
	export interface IoCloudeventsV1CloudEventCloudEventAttributeValueFormProperties {
		ceBoolean: FormControl<boolean | null | undefined>,
		ceBytes: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		ceInteger: FormControl<number | null | undefined>,
		ceString: FormControl<string | null | undefined>,
		ceTimestamp: FormControl<string | null | undefined>,
		ceUri: FormControl<string | null | undefined>,
		ceUriRef: FormControl<string | null | undefined>,
	}
	export function CreateIoCloudeventsV1CloudEventCloudEventAttributeValueFormGroup() {
		return new FormGroup<IoCloudeventsV1CloudEventCloudEventAttributeValueFormProperties>({
			ceBoolean: new FormControl<boolean | null | undefined>(undefined),
			ceBytes: new FormControl<string | null | undefined>(undefined),
			ceInteger: new FormControl<number | null | undefined>(undefined),
			ceString: new FormControl<string | null | undefined>(undefined),
			ceTimestamp: new FormControl<string | null | undefined>(undefined),
			ceUri: new FormControl<string | null | undefined>(undefined),
			ceUriRef: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for executing an integration. */
	export interface GoogleCloudIntegrationsV1alphaExecuteEventResponse {

		/** The id of the execution corresponding to this run of integration. */
		executionId?: string | null;
	}

	/** The response for executing an integration. */
	export interface GoogleCloudIntegrationsV1alphaExecuteEventResponseFormProperties {

		/** The id of the execution corresponding to this run of integration. */
		executionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaExecuteEventResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaExecuteEventResponseFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for executing an integration. */
	export interface GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest {

		/** Optional. Flag to determine how to should propagate errors. If this flag is set to be true, it will not throw an exception. Instead, it will return a {@link ExecuteIntegrationsResponse} with an execution id and error messages as PostWithTriggerIdExecutionException in {@link EventParameters}. The flag is set to be false by default. */
		doNotPropagateError?: boolean | null;

		/** Optional. The id of the ON_HOLD execution to be resumed. */
		executionId?: string | null;

		/** Optional. Input parameters used by integration execution. */
		inputParameters?: {[id: string]: GoogleCloudIntegrationsV1alphaValueType };

		/** Optional. Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution. */
		parameterEntries?: Array<EnterpriseCrmFrontendsEventbusProtoParameterEntry>;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		parameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

		/** Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. */
		requestId?: string | null;

		/** Required. Matched against all {@link TriggerConfig}s across all integrations. i.e. TriggerConfig.trigger_id.equals(trigger_id). The trigger_id is in the format of `api_trigger/TRIGGER_NAME`. */
		triggerId?: string | null;
	}

	/** The request for executing an integration. */
	export interface GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequestFormProperties {

		/** Optional. Flag to determine how to should propagate errors. If this flag is set to be true, it will not throw an exception. Instead, it will return a {@link ExecuteIntegrationsResponse} with an execution id and error messages as PostWithTriggerIdExecutionException in {@link EventParameters}. The flag is set to be false by default. */
		doNotPropagateError: FormControl<boolean | null | undefined>,

		/** Optional. The id of the ON_HOLD execution to be resumed. */
		executionId: FormControl<string | null | undefined>,

		/** Optional. Input parameters used by integration execution. */
		inputParameters: FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaValueType } | null | undefined>,

		/** Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. */
		requestId: FormControl<string | null | undefined>,

		/** Required. Matched against all {@link TriggerConfig}s across all integrations. i.e. TriggerConfig.trigger_id.equals(trigger_id). The trigger_id is in the format of `api_trigger/TRIGGER_NAME`. */
		triggerId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaExecuteIntegrationsRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequestFormProperties>({
			doNotPropagateError: new FormControl<boolean | null | undefined>(undefined),
			executionId: new FormControl<string | null | undefined>(undefined),
			inputParameters: new FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaValueType } | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for executing an integration. */
	export interface GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse {

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		eventParameters?: EnterpriseCrmFrontendsEventbusProtoEventParameters;

		/** Is true if any execution in the integration failed. False otherwise. */
		executionFailed?: boolean | null;

		/** The id of the execution corresponding to this run of integration. */
		executionId?: string | null;

		/** OUTPUT parameters in format of Map. Where Key is the name of the parameter. Note: Name of the system generated parameters are wrapped by backtick(`) to distinguish them from the user defined parameters. */
		outputParameters?: {[id: string]: any };

		/** Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution. */
		parameterEntries?: Array<EnterpriseCrmFrontendsEventbusProtoParameterEntry>;
	}

	/** The response for executing an integration. */
	export interface GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponseFormProperties {

		/** Is true if any execution in the integration failed. False otherwise. */
		executionFailed: FormControl<boolean | null | undefined>,

		/** The id of the execution corresponding to this run of integration. */
		executionId: FormControl<string | null | undefined>,

		/** OUTPUT parameters in format of Map. Where Key is the name of the parameter. Note: Name of the system generated parameters are wrapped by backtick(`) to distinguish them from the user defined parameters. */
		outputParameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaExecuteIntegrationsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponseFormProperties>({
			executionFailed: new FormControl<boolean | null | undefined>(undefined),
			executionId: new FormControl<string | null | undefined>(undefined),
			outputParameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The Execution resource contains detailed information of an individual integration execution. */
	export interface GoogleCloudIntegrationsV1alphaExecution {

		/** Output only. Created time of the execution. */
		createTime?: string | null;

		/** Direct sub executions of the following Execution. */
		directSubExecutions?: Array<GoogleCloudIntegrationsV1alphaExecution>;

		/** Contains the details of the execution info of this event: this includes the tasks execution details plus the event execution statistics. Next available id: 10 */
		eventExecutionDetails?: EnterpriseCrmEventbusProtoEventExecutionDetails;

		/** Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics. */
		executionDetails?: GoogleCloudIntegrationsV1alphaExecutionDetails;

		/** The ways user posts this event. */
		executionMethod?: GoogleCloudIntegrationsV1alphaExecutionExecutionMethod | null;

		/** Auto-generated primary key. */
		name?: string | null;

		/** Event parameters come in as part of the request. */
		requestParameters?: {[id: string]: GoogleCloudIntegrationsV1alphaValueType };

		/** Event parameters come in as part of the request. */
		requestParams?: Array<EnterpriseCrmFrontendsEventbusProtoParameterEntry>;

		/** Event parameters returned as part of the response. */
		responseParameters?: {[id: string]: GoogleCloudIntegrationsV1alphaValueType };

		/** Event parameters come out as part of the response. */
		responseParams?: Array<EnterpriseCrmFrontendsEventbusProtoParameterEntry>;

		/** The trigger id of the integration trigger config. If both trigger_id and client_id is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks. */
		triggerId?: string | null;

		/** Output only. Last modified time of the execution. */
		updateTime?: string | null;
	}

	/** The Execution resource contains detailed information of an individual integration execution. */
	export interface GoogleCloudIntegrationsV1alphaExecutionFormProperties {

		/** Output only. Created time of the execution. */
		createTime: FormControl<string | null | undefined>,

		/** The ways user posts this event. */
		executionMethod: FormControl<GoogleCloudIntegrationsV1alphaExecutionExecutionMethod | null | undefined>,

		/** Auto-generated primary key. */
		name: FormControl<string | null | undefined>,

		/** Event parameters come in as part of the request. */
		requestParameters: FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaValueType } | null | undefined>,

		/** Event parameters returned as part of the response. */
		responseParameters: FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaValueType } | null | undefined>,

		/** The trigger id of the integration trigger config. If both trigger_id and client_id is present, the integration is executed from the start tasks provided by the matching trigger config otherwise it is executed from the default start tasks. */
		triggerId: FormControl<string | null | undefined>,

		/** Output only. Last modified time of the execution. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaExecutionFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaExecutionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			executionMethod: new FormControl<GoogleCloudIntegrationsV1alphaExecutionExecutionMethod | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			requestParameters: new FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaValueType } | null | undefined>(undefined),
			responseParameters: new FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaValueType } | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics. */
	export interface GoogleCloudIntegrationsV1alphaExecutionDetails {

		/** List of Start and end time of the execution attempts. */
		attemptStats?: Array<GoogleCloudIntegrationsV1alphaAttemptStats>;

		/** List of snapshots taken during the execution. */
		executionSnapshots?: Array<GoogleCloudIntegrationsV1alphaExecutionSnapshot>;

		/** Status of the execution. */
		state?: GoogleCloudIntegrationsV1alphaExecutionDetailsState | null;
	}

	/** Contains the details of the execution info: this includes the tasks execution details plus the event execution statistics. */
	export interface GoogleCloudIntegrationsV1alphaExecutionDetailsFormProperties {

		/** Status of the execution. */
		state: FormControl<GoogleCloudIntegrationsV1alphaExecutionDetailsState | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaExecutionDetailsFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaExecutionDetailsFormProperties>({
			state: new FormControl<GoogleCloudIntegrationsV1alphaExecutionDetailsState | null | undefined>(undefined),
		});

	}


	/** Contains the snapshot of the execution for a given checkpoint. */
	export interface GoogleCloudIntegrationsV1alphaExecutionSnapshot {

		/** Indicates "after which checkpoint task's execution" this snapshot is taken. */
		checkpointTaskNumber?: string | null;

		/** Metadata of the execution snapshot. */
		executionSnapshotMetadata?: GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata;

		/** Parameters used during the execution. */
		params?: {[id: string]: GoogleCloudIntegrationsV1alphaValueType };

		/** All of the task execution details at the given point of time. */
		taskExecutionDetails?: Array<GoogleCloudIntegrationsV1alphaTaskExecutionDetails>;
	}

	/** Contains the snapshot of the execution for a given checkpoint. */
	export interface GoogleCloudIntegrationsV1alphaExecutionSnapshotFormProperties {

		/** Indicates "after which checkpoint task's execution" this snapshot is taken. */
		checkpointTaskNumber: FormControl<string | null | undefined>,

		/** Parameters used during the execution. */
		params: FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaValueType } | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaExecutionSnapshotFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaExecutionSnapshotFormProperties>({
			checkpointTaskNumber: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaValueType } | null | undefined>(undefined),
		});

	}


	/** Metadata of the execution snapshot. */
	export interface GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadata {

		/**
		 * the execution attempt number this snapshot belongs to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		executionAttempt?: number | null;

		/** the task name associated with this snapshot. */
		task?: string | null;

		/**
		 * the task attempt number this snapshot belongs to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		taskAttempt?: number | null;

		/** the task label associated with this snapshot. Could be empty. */
		taskLabel?: string | null;

		/** The task number associated with this snapshot. */
		taskNumber?: string | null;
	}

	/** Metadata of the execution snapshot. */
	export interface GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadataFormProperties {

		/**
		 * the execution attempt number this snapshot belongs to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		executionAttempt: FormControl<number | null | undefined>,

		/** the task name associated with this snapshot. */
		task: FormControl<string | null | undefined>,

		/**
		 * the task attempt number this snapshot belongs to.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		taskAttempt: FormControl<number | null | undefined>,

		/** the task label associated with this snapshot. Could be empty. */
		taskLabel: FormControl<string | null | undefined>,

		/** The task number associated with this snapshot. */
		taskNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadataFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaExecutionSnapshotExecutionSnapshotMetadataFormProperties>({
			executionAttempt: new FormControl<number | null | undefined>(undefined),
			task: new FormControl<string | null | undefined>(undefined),
			taskAttempt: new FormControl<number | null | undefined>(undefined),
			taskLabel: new FormControl<string | null | undefined>(undefined),
			taskNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the details of the execution of this task. */
	export interface GoogleCloudIntegrationsV1alphaTaskExecutionDetails {

		/** Status for the current task execution attempt. */
		taskAttemptStats?: Array<GoogleCloudIntegrationsV1alphaAttemptStats>;

		/** The execution state of this task. */
		taskExecutionState?: GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionState | null;

		/** Pointer to the task config it used for execution. */
		taskNumber?: string | null;
	}

	/** Contains the details of the execution of this task. */
	export interface GoogleCloudIntegrationsV1alphaTaskExecutionDetailsFormProperties {

		/** The execution state of this task. */
		taskExecutionState: FormControl<GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionState | null | undefined>,

		/** Pointer to the task config it used for execution. */
		taskNumber: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaTaskExecutionDetailsFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaTaskExecutionDetailsFormProperties>({
			taskExecutionState: new FormControl<GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionState | null | undefined>(undefined),
			taskNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaTaskExecutionDetailsTaskExecutionState { TASK_EXECUTION_STATE_UNSPECIFIED = 'TASK_EXECUTION_STATE_UNSPECIFIED', PENDING_EXECUTION = 'PENDING_EXECUTION', IN_PROCESS = 'IN_PROCESS', SUCCEED = 'SUCCEED', FAILED = 'FAILED', FATAL = 'FATAL', RETRY_ON_HOLD = 'RETRY_ON_HOLD', SKIPPED = 'SKIPPED', CANCELLED = 'CANCELLED', PENDING_ROLLBACK = 'PENDING_ROLLBACK', ROLLBACK_IN_PROCESS = 'ROLLBACK_IN_PROCESS', ROLLEDBACK = 'ROLLEDBACK', SUSPENDED = 'SUSPENDED' }

	export enum GoogleCloudIntegrationsV1alphaExecutionDetailsState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', PENDING = 'PENDING', PROCESSING = 'PROCESSING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED', CANCELLED = 'CANCELLED', RETRY_ON_HOLD = 'RETRY_ON_HOLD', SUSPENDED = 'SUSPENDED' }

	export enum GoogleCloudIntegrationsV1alphaExecutionExecutionMethod { EXECUTION_METHOD_UNSPECIFIED = 'EXECUTION_METHOD_UNSPECIFIED', POST = 'POST', POST_TO_QUEUE = 'POST_TO_QUEUE', SCHEDULE = 'SCHEDULE' }


	/** Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied). */
	export interface GoogleCloudIntegrationsV1alphaFailurePolicy {

		/** Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the initial interval in seconds for backoff. */
		intervalTime?: string | null;

		/**
		 * Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the number of times the task will be retried if failed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxRetries?: number | null;

		/** Defines what happens to the task upon failure. */
		retryStrategy?: GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategy | null;
	}

	/** Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied). */
	export interface GoogleCloudIntegrationsV1alphaFailurePolicyFormProperties {

		/** Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the initial interval in seconds for backoff. */
		intervalTime: FormControl<string | null | undefined>,

		/**
		 * Required if retry_strategy is FIXED_INTERVAL or LINEAR/EXPONENTIAL_BACKOFF/RESTART_INTEGRATION_WITH_BACKOFF. Defines the number of times the task will be retried if failed.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxRetries: FormControl<number | null | undefined>,

		/** Defines what happens to the task upon failure. */
		retryStrategy: FormControl<GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategy | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaFailurePolicyFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaFailurePolicyFormProperties>({
			intervalTime: new FormControl<string | null | undefined>(undefined),
			maxRetries: new FormControl<number | null | undefined>(undefined),
			retryStrategy: new FormControl<GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategy | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaFailurePolicyRetryStrategy { RETRY_STRATEGY_UNSPECIFIED = 'RETRY_STRATEGY_UNSPECIFIED', IGNORE = 'IGNORE', NONE = 'NONE', FATAL = 'FATAL', FIXED_INTERVAL = 'FIXED_INTERVAL', LINEAR_BACKOFF = 'LINEAR_BACKOFF', EXPONENTIAL_BACKOFF = 'EXPONENTIAL_BACKOFF', RESTART_INTEGRATION_WITH_BACKOFF = 'RESTART_INTEGRATION_WITH_BACKOFF' }


	/** Returns success or error message */
	export interface GoogleCloudIntegrationsV1alphaGenerateTokenResponse {

		/** The message that notifies the user if the request succeeded or not. */
		message?: string | null;
	}

	/** Returns success or error message */
	export interface GoogleCloudIntegrationsV1alphaGenerateTokenResponseFormProperties {

		/** The message that notifies the user if the request succeeded or not. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaGenerateTokenResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaGenerateTokenResponseFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The integration definition. */
	export interface GoogleCloudIntegrationsV1alphaIntegration {

		/** Required. If any integration version is published. */
		active?: boolean | null;

		/** Optional. */
		description?: string | null;

		/** Required. The resource name of the integration. */
		name?: string | null;

		/** Output only. Auto-generated. */
		updateTime?: string | null;
	}

	/** The integration definition. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationFormProperties {

		/** Required. If any integration version is published. */
		active: FormControl<boolean | null | undefined>,

		/** Optional. */
		description: FormControl<string | null | undefined>,

		/** Required. The resource name of the integration. */
		name: FormControl<string | null | undefined>,

		/** Output only. Auto-generated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaIntegrationFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaIntegrationFormProperties>({
			active: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message to be used to configure custom alerting in the {@code EventConfig} protos for an event. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationAlertConfig {

		/** The period over which the metric value should be aggregated and evaluated. Format is , where integer should be a positive integer and unit should be one of (s,m,h,d,w) meaning (second, minute, hour, day, week). For an EXPECTED_MIN threshold, this aggregation_period must be lesser than 24 hours. */
		aggregationPeriod?: string | null;

		/**
		 * For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		alertThreshold?: number | null;

		/** Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this integration alert. */
		disableAlert?: boolean | null;

		/** Name of the alert. This will be displayed in the alert subject. If set, this name should be unique within the scope of the integration. */
		displayName?: string | null;

		/** Should be specified only for *AVERAGE_DURATION and *PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger. */
		durationThreshold?: string | null;

		/** The type of metric. */
		metricType?: EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricType | null;

		/** For either events or tasks, depending on the type of alert, count only final attempts, not retries. */
		onlyFinalAttempt?: boolean | null;

		/** The threshold type, whether lower(expected_min) or upper(expected_max), for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired. */
		thresholdType?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdType | null;

		/** The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig. */
		thresholdValue?: GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue;
	}

	/** Message to be used to configure custom alerting in the {@code EventConfig} protos for an event. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationAlertConfigFormProperties {

		/** The period over which the metric value should be aggregated and evaluated. Format is , where integer should be a positive integer and unit should be one of (s,m,h,d,w) meaning (second, minute, hour, day, week). For an EXPECTED_MIN threshold, this aggregation_period must be lesser than 24 hours. */
		aggregationPeriod: FormControl<string | null | undefined>,

		/**
		 * For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		alertThreshold: FormControl<number | null | undefined>,

		/** Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this integration alert. */
		disableAlert: FormControl<boolean | null | undefined>,

		/** Name of the alert. This will be displayed in the alert subject. If set, this name should be unique within the scope of the integration. */
		displayName: FormControl<string | null | undefined>,

		/** Should be specified only for *AVERAGE_DURATION and *PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger. */
		durationThreshold: FormControl<string | null | undefined>,

		/** The type of metric. */
		metricType: FormControl<EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricType | null | undefined>,

		/** For either events or tasks, depending on the type of alert, count only final attempts, not retries. */
		onlyFinalAttempt: FormControl<boolean | null | undefined>,

		/** The threshold type, whether lower(expected_min) or upper(expected_max), for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired. */
		thresholdType: FormControl<GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdType | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaIntegrationAlertConfigFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaIntegrationAlertConfigFormProperties>({
			aggregationPeriod: new FormControl<string | null | undefined>(undefined),
			alertThreshold: new FormControl<number | null | undefined>(undefined),
			disableAlert: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			durationThreshold: new FormControl<string | null | undefined>(undefined),
			metricType: new FormControl<EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricType | null | undefined>(undefined),
			onlyFinalAttempt: new FormControl<boolean | null | undefined>(undefined),
			thresholdType: new FormControl<GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdType { THRESHOLD_TYPE_UNSPECIFIED = 'THRESHOLD_TYPE_UNSPECIFIED', EXPECTED_MIN = 'EXPECTED_MIN', EXPECTED_MAX = 'EXPECTED_MAX' }


	/** The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue {

		/** Absolute value threshold. */
		absolute?: string | null;

		/**
		 * Percentage threshold.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage?: number | null;
	}

	/** The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValueFormProperties {

		/** Absolute value threshold. */
		absolute: FormControl<string | null | undefined>,

		/**
		 * Percentage threshold.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		percentage: FormControl<number | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValueFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValueFormProperties>({
			absolute: new FormControl<string | null | undefined>(undefined),
			percentage: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Integration Parameter is defined in the integration config and are used to provide information about data types of the expected parameters and provide any default values if needed. They can also be used to add custom attributes. These are static in nature and should not be used for dynamic event definition. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationParameter {

		/** Type of the parameter. */
		dataType?: GoogleCloudIntegrationsV1alphaParameterMapKeyType | null;

		/** The type of the parameter. */
		defaultValue?: GoogleCloudIntegrationsV1alphaValueType;

		/** The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is "foo.bar.myName", then the name would be "myName". */
		displayName?: string | null;

		/** Specifies the input/output type for the parameter. */
		inputOutputType?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutType | null;

		/** Whether this parameter is a transient parameter. */
		isTransient?: boolean | null;

		/** This schema will be used to validate runtime JSON-typed values of this parameter. */
		jsonSchema?: string | null;

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition. */
		key?: string | null;

		/** The identifier of the node (TaskConfig/TriggerConfig) this parameter was produced by, if it is a transient param or a copy of an input param. */
		producer?: string | null;

		/** Searchable in the execution log or not. */
		searchable?: boolean | null;
	}

	/** Integration Parameter is defined in the integration config and are used to provide information about data types of the expected parameters and provide any default values if needed. They can also be used to add custom attributes. These are static in nature and should not be used for dynamic event definition. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationParameterFormProperties {

		/** Type of the parameter. */
		dataType: FormControl<GoogleCloudIntegrationsV1alphaParameterMapKeyType | null | undefined>,

		/** The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is "foo.bar.myName", then the name would be "myName". */
		displayName: FormControl<string | null | undefined>,

		/** Specifies the input/output type for the parameter. */
		inputOutputType: FormControl<EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutType | null | undefined>,

		/** Whether this parameter is a transient parameter. */
		isTransient: FormControl<boolean | null | undefined>,

		/** This schema will be used to validate runtime JSON-typed values of this parameter. */
		jsonSchema: FormControl<string | null | undefined>,

		/** Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the integration definition. */
		key: FormControl<string | null | undefined>,

		/** The identifier of the node (TaskConfig/TriggerConfig) this parameter was produced by, if it is a transient param or a copy of an input param. */
		producer: FormControl<string | null | undefined>,

		/** Searchable in the execution log or not. */
		searchable: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaIntegrationParameterFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaIntegrationParameterFormProperties>({
			dataType: new FormControl<GoogleCloudIntegrationsV1alphaParameterMapKeyType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			inputOutputType: new FormControl<EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntryInOutType | null | undefined>(undefined),
			isTransient: new FormControl<boolean | null | undefined>(undefined),
			jsonSchema: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			producer: new FormControl<string | null | undefined>(undefined),
			searchable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion {

		/** Output only. Auto-generated. */
		createTime?: string | null;

		/** Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index. */
		databasePersistencePolicy?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicy | null;

		/** Optional. The templateversion description. Permitted format is alphanumeric with underscores and no spaces. */
		description?: string | null;

		/** Optional. Error Catch Task configuration for the IntegrationTemplateVersion. It's optional. */
		errorCatcherConfigs?: Array<GoogleCloudIntegrationsV1alphaErrorCatcherConfig>;

		/** Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call. */
		lastModifierEmail?: string | null;

		/** Output only. Auto-generated primary key. Format: projects/{project}/locations/{location}/products/{product}/integrationtemplates/{integrationtemplate}/versions/{version} */
		name?: string | null;

		/** Optional. ID of the IntegrationVersion that was used to create this IntegrationTemplateVersion */
		parentIntegrationVersionId?: string | null;

		/** Output only. An increasing sequence that is set when a new snapshot is created. */
		snapshotNumber?: string | null;

		/** Optional. Generated by eventbus. User should not set it as an input. */
		status?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatus | null;

		/** Optional. Task configuration for the IntegrationTemplateVersion. It's optional, but the IntegrationTemplateVersion doesn't do anything without task_configs. */
		taskConfigs?: Array<EnterpriseCrmFrontendsEventbusProtoTaskConfig>;
		teardown?: EnterpriseCrmEventbusProtoTeardown;

		/** LINT.IfChange This is the frontend version of WorkflowParameters. It's exactly like the backend version except that instead of flattening protobuf parameters and treating every field and subfield of a protobuf parameter as a separate parameter, the fields/subfields of a protobuf parameter will be nested as "children" (see 'children' field below) parameters of the parent parameter. Please refer to enterprise/crm/eventbus/proto/workflow_parameters.proto for more information about WorkflowParameters. */
		templateParameters?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;

		/** Optional. Trigger configurations. */
		triggerConfigs?: Array<EnterpriseCrmFrontendsEventbusProtoTriggerConfig>;

		/** Output only. Auto-generated. */
		updateTime?: string | null;

		/** Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created. */
		userLabel?: string | null;
	}

	/** IntegrationTemplateVersion definition. An IntegrationTemplateVersion provides configurations required to construct an IntegrationVersion. It cannot be executed directly like an Integration. Users can create IntegrationTemplateVersions using Integrations. These Templates can be shared by users across GCP projects. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionFormProperties {

		/** Output only. Auto-generated. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index. */
		databasePersistencePolicy: FormControl<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicy | null | undefined>,

		/** Optional. The templateversion description. Permitted format is alphanumeric with underscores and no spaces. */
		description: FormControl<string | null | undefined>,

		/** Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call. */
		lastModifierEmail: FormControl<string | null | undefined>,

		/** Output only. Auto-generated primary key. Format: projects/{project}/locations/{location}/products/{product}/integrationtemplates/{integrationtemplate}/versions/{version} */
		name: FormControl<string | null | undefined>,

		/** Optional. ID of the IntegrationVersion that was used to create this IntegrationTemplateVersion */
		parentIntegrationVersionId: FormControl<string | null | undefined>,

		/** Output only. An increasing sequence that is set when a new snapshot is created. */
		snapshotNumber: FormControl<string | null | undefined>,

		/** Optional. Generated by eventbus. User should not set it as an input. */
		status: FormControl<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatus | null | undefined>,

		/** Output only. Auto-generated. */
		updateTime: FormControl<string | null | undefined>,

		/** Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created. */
		userLabel: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaIntegrationTemplateVersionFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			databasePersistencePolicy: new FormControl<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicy | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifierEmail: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentIntegrationVersionId: new FormControl<string | null | undefined>(undefined),
			snapshotNumber: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatus | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			userLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicy { DATABASE_PERSISTENCE_POLICY_UNSPECIFIED = 'DATABASE_PERSISTENCE_POLICY_UNSPECIFIED', DATABASE_PERSISTENCE_DISABLED = 'DATABASE_PERSISTENCE_DISABLED' }

	export enum GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatus { UNKNOWN = 'UNKNOWN', DRAFT = 'DRAFT', ACTIVE = 'ACTIVE', ARCHIVED = 'ARCHIVED', SNAPSHOT = 'SNAPSHOT' }


	/** The integration version definition. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationVersion {

		/** Output only. Auto-generated. */
		createTime?: string | null;

		/** Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index. */
		databasePersistencePolicy?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicy | null;

		/** Optional. The integration description. */
		description?: string | null;

		/** Optional. Error Catch Task configuration for the integration. It's optional. */
		errorCatcherConfigs?: Array<GoogleCloudIntegrationsV1alphaErrorCatcherConfig>;

		/** Optional. Parameters that are expected to be passed to the integration when an event is triggered. This consists of all the parameters that are expected in the integration execution. This gives the user the ability to provide default values, add information like PII and also provide data types of each parameter. */
		integrationParameters?: Array<GoogleCloudIntegrationsV1alphaIntegrationParameter>;

		/** LINT.IfChange This is the frontend version of WorkflowParameters. It's exactly like the backend version except that instead of flattening protobuf parameters and treating every field and subfield of a protobuf parameter as a separate parameter, the fields/subfields of a protobuf parameter will be nested as "children" (see 'children' field below) parameters of the parent parameter. Please refer to enterprise/crm/eventbus/proto/workflow_parameters.proto for more information about WorkflowParameters. */
		integrationParametersInternal?: EnterpriseCrmFrontendsEventbusProtoWorkflowParameters;

		/** Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call. */
		lastModifierEmail?: string | null;

		/** Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call. */
		lockHolder?: string | null;

		/** Output only. Auto-generated primary key. */
		name?: string | null;

		/** Optional. The origin that indicates where this integration is coming from. */
		origin?: GoogleCloudIntegrationsV1alphaIntegrationVersionOrigin | null;

		/** Optional. The id of the template which was used to create this integration_version. */
		parentTemplateId?: string | null;

		/** Optional. The run-as service account email, if set and auth config is not configured, that will be used to generate auth token to be used in Connector task, Rest caller task and Cloud function task. */
		runAsServiceAccount?: string | null;

		/** Optional. An increasing sequence that is set when a new snapshot is created. The last created snapshot can be identified by [workflow_name, org_id latest(snapshot_number)]. However, last created snapshot need not be same as the HEAD. So users should always use "HEAD" tag to identify the head. */
		snapshotNumber?: string | null;

		/** Output only. User should not set it as an input. */
		state?: GoogleCloudIntegrationsV1alphaIntegrationVersionState | null;

		/** Output only. Generated by eventbus. User should not set it as an input. */
		status?: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatus | null;

		/** Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs. */
		taskConfigs?: Array<GoogleCloudIntegrationsV1alphaTaskConfig>;

		/** Optional. Task configuration for the integration. It's optional, but the integration doesn't do anything without task_configs. */
		taskConfigsInternal?: Array<EnterpriseCrmFrontendsEventbusProtoTaskConfig>;
		teardown?: EnterpriseCrmEventbusProtoTeardown;

		/** Optional. Trigger configurations. */
		triggerConfigs?: Array<GoogleCloudIntegrationsV1alphaTriggerConfig>;

		/** Optional. Trigger configurations. */
		triggerConfigsInternal?: Array<EnterpriseCrmFrontendsEventbusProtoTriggerConfig>;

		/** Output only. Auto-generated. */
		updateTime?: string | null;

		/** Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created. */
		userLabel?: string | null;
	}

	/** The integration version definition. */
	export interface GoogleCloudIntegrationsV1alphaIntegrationVersionFormProperties {

		/** Output only. Auto-generated. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Flag to disable database persistence for execution data, including event execution info, execution export info, execution metadata index and execution param index. */
		databasePersistencePolicy: FormControl<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicy | null | undefined>,

		/** Optional. The integration description. */
		description: FormControl<string | null | undefined>,

		/** Optional. The last modifier's email address. Generated based on the End User Credentials/LOAS role of the user making the call. */
		lastModifierEmail: FormControl<string | null | undefined>,

		/** Optional. The edit lock holder's email address. Generated based on the End User Credentials/LOAS role of the user making the call. */
		lockHolder: FormControl<string | null | undefined>,

		/** Output only. Auto-generated primary key. */
		name: FormControl<string | null | undefined>,

		/** Optional. The origin that indicates where this integration is coming from. */
		origin: FormControl<GoogleCloudIntegrationsV1alphaIntegrationVersionOrigin | null | undefined>,

		/** Optional. The id of the template which was used to create this integration_version. */
		parentTemplateId: FormControl<string | null | undefined>,

		/** Optional. The run-as service account email, if set and auth config is not configured, that will be used to generate auth token to be used in Connector task, Rest caller task and Cloud function task. */
		runAsServiceAccount: FormControl<string | null | undefined>,

		/** Optional. An increasing sequence that is set when a new snapshot is created. The last created snapshot can be identified by [workflow_name, org_id latest(snapshot_number)]. However, last created snapshot need not be same as the HEAD. So users should always use "HEAD" tag to identify the head. */
		snapshotNumber: FormControl<string | null | undefined>,

		/** Output only. User should not set it as an input. */
		state: FormControl<GoogleCloudIntegrationsV1alphaIntegrationVersionState | null | undefined>,

		/** Output only. Generated by eventbus. User should not set it as an input. */
		status: FormControl<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatus | null | undefined>,

		/** Output only. Auto-generated. */
		updateTime: FormControl<string | null | undefined>,

		/** Optional. A user-defined label that annotates an integration version. Typically, this is only set when the integration version is created. */
		userLabel: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaIntegrationVersionFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaIntegrationVersionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			databasePersistencePolicy: new FormControl<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicy | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastModifierEmail: new FormControl<string | null | undefined>(undefined),
			lockHolder: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<GoogleCloudIntegrationsV1alphaIntegrationVersionOrigin | null | undefined>(undefined),
			parentTemplateId: new FormControl<string | null | undefined>(undefined),
			runAsServiceAccount: new FormControl<string | null | undefined>(undefined),
			snapshotNumber: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudIntegrationsV1alphaIntegrationVersionState | null | undefined>(undefined),
			status: new FormControl<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatus | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			userLabel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaIntegrationVersionOrigin { UNSPECIFIED = 'UNSPECIFIED', UI = 'UI', PIPER_V2 = 'PIPER_V2', PIPER_V3 = 'PIPER_V3', APPLICATION_IP_PROVISIONING = 'APPLICATION_IP_PROVISIONING' }

	export enum GoogleCloudIntegrationsV1alphaIntegrationVersionState { INTEGRATION_STATE_UNSPECIFIED = 'INTEGRATION_STATE_UNSPECIFIED', DRAFT = 'DRAFT', ACTIVE = 'ACTIVE', ARCHIVED = 'ARCHIVED', SNAPSHOT = 'SNAPSHOT' }


	/** The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task. */
	export interface GoogleCloudIntegrationsV1alphaTaskConfig {

		/** Optional. User-provided description intended to give additional business context about the task. */
		description?: string | null;

		/** Optional. User-provided label that is attached to this TaskConfig in the UI. */
		displayName?: string | null;

		/** Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task */
		errorCatcherId?: string | null;

		/** Optional. External task type of the task */
		externalTaskType?: EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskType | null;

		/** Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied). */
		failurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy;

		/** Optional. If set, overrides the option configured in the Task implementation class. */
		jsonValidationOption?: GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOption | null;

		/** Optional. The set of tasks that are next in line to be executed as per the execution graph defined for the parent event, specified by `event_config_id`. Each of these next tasks are executed only if the condition associated with them evaluates to true. */
		nextTasks?: Array<GoogleCloudIntegrationsV1alphaNextTask>;

		/** Optional. The policy dictating the execution of the next set of tasks for the current task. */
		nextTasksExecutionPolicy?: GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicy | null;

		/** Optional. The customized parameters the user can pass to this task. */
		parameters?: {[id: string]: GoogleCloudIntegrationsV1alphaEventParameter };

		/** Configuration detail of coordinate, it used for UI */
		position?: GoogleCloudIntegrationsV1alphaCoordinate;

		/** Policy that dictates the behavior for the task after it completes successfully. */
		successPolicy?: GoogleCloudIntegrationsV1alphaSuccessPolicy;

		/** Policy that defines the task retry logic and failure type. If no FailurePolicy is defined for a task, all its dependent tasks will not be executed (i.e, a `retry_strategy` of NONE will be applied). */
		synchronousCallFailurePolicy?: GoogleCloudIntegrationsV1alphaFailurePolicy;

		/** Optional. The name for the task. */
		task?: string | null;

		/** Optional. The policy dictating the execution strategy of this task. */
		taskExecutionStrategy?: GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategy | null;

		/** Required. The identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field `next_tasks.task_id`). */
		taskId?: string | null;

		/** Optional. Used to define task-template name if task is of type task-template */
		taskTemplate?: string | null;
	}

	/** The task configuration details. This is not the implementation of Task. There might be multiple TaskConfigs for the same Task. */
	export interface GoogleCloudIntegrationsV1alphaTaskConfigFormProperties {

		/** Optional. User-provided description intended to give additional business context about the task. */
		description: FormControl<string | null | undefined>,

		/** Optional. User-provided label that is attached to this TaskConfig in the UI. */
		displayName: FormControl<string | null | undefined>,

		/** Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task */
		errorCatcherId: FormControl<string | null | undefined>,

		/** Optional. External task type of the task */
		externalTaskType: FormControl<EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskType | null | undefined>,

		/** Optional. If set, overrides the option configured in the Task implementation class. */
		jsonValidationOption: FormControl<GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOption | null | undefined>,

		/** Optional. The policy dictating the execution of the next set of tasks for the current task. */
		nextTasksExecutionPolicy: FormControl<GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicy | null | undefined>,

		/** Optional. The customized parameters the user can pass to this task. */
		parameters: FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaEventParameter } | null | undefined>,

		/** Optional. The name for the task. */
		task: FormControl<string | null | undefined>,

		/** Optional. The policy dictating the execution strategy of this task. */
		taskExecutionStrategy: FormControl<GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategy | null | undefined>,

		/** Required. The identifier of this task within its parent event config, specified by the client. This should be unique among all the tasks belong to the same event config. We use this field as the identifier to find next tasks (via field `next_tasks.task_id`). */
		taskId: FormControl<string | null | undefined>,

		/** Optional. Used to define task-template name if task is of type task-template */
		taskTemplate: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaTaskConfigFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaTaskConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			errorCatcherId: new FormControl<string | null | undefined>(undefined),
			externalTaskType: new FormControl<EnterpriseCrmFrontendsEventbusProtoTaskConfigExternalTaskType | null | undefined>(undefined),
			jsonValidationOption: new FormControl<GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOption | null | undefined>(undefined),
			nextTasksExecutionPolicy: new FormControl<GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicy | null | undefined>(undefined),
			parameters: new FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaEventParameter } | null | undefined>(undefined),
			task: new FormControl<string | null | undefined>(undefined),
			taskExecutionStrategy: new FormControl<GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategy | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
			taskTemplate: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaTaskConfigJsonValidationOption { JSON_VALIDATION_OPTION_UNSPECIFIED = 'JSON_VALIDATION_OPTION_UNSPECIFIED', SKIP = 'SKIP', PRE_EXECUTION = 'PRE_EXECUTION', POST_EXECUTION = 'POST_EXECUTION', PRE_POST_EXECUTION = 'PRE_POST_EXECUTION' }

	export enum GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicy { NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED = 'NEXT_TASKS_EXECUTION_POLICY_UNSPECIFIED', RUN_ALL_MATCH = 'RUN_ALL_MATCH', RUN_FIRST_MATCH = 'RUN_FIRST_MATCH' }


	/** Policy that dictates the behavior for the task after it completes successfully. */
	export interface GoogleCloudIntegrationsV1alphaSuccessPolicy {

		/** State to which the execution snapshot status will be set if the task succeeds. */
		finalState?: GoogleCloudIntegrationsV1alphaSuccessPolicyFinalState | null;
	}

	/** Policy that dictates the behavior for the task after it completes successfully. */
	export interface GoogleCloudIntegrationsV1alphaSuccessPolicyFormProperties {

		/** State to which the execution snapshot status will be set if the task succeeds. */
		finalState: FormControl<GoogleCloudIntegrationsV1alphaSuccessPolicyFinalState | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaSuccessPolicyFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaSuccessPolicyFormProperties>({
			finalState: new FormControl<GoogleCloudIntegrationsV1alphaSuccessPolicyFinalState | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaSuccessPolicyFinalState { FINAL_STATE_UNSPECIFIED = 'FINAL_STATE_UNSPECIFIED', SUCCEEDED = 'SUCCEEDED', SUSPENDED = 'SUSPENDED' }

	export enum GoogleCloudIntegrationsV1alphaTaskConfigTaskExecutionStrategy { TASK_EXECUTION_STRATEGY_UNSPECIFIED = 'TASK_EXECUTION_STRATEGY_UNSPECIFIED', WHEN_ALL_SUCCEED = 'WHEN_ALL_SUCCEED', WHEN_ANY_SUCCEED = 'WHEN_ANY_SUCCEED', WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED = 'WHEN_ALL_TASKS_AND_CONDITIONS_SUCCEED' }


	/** Configuration detail of a trigger. */
	export interface GoogleCloudIntegrationsV1alphaTriggerConfig {

		/** Optional. An alert threshold configuration for the [trigger + client + integration] tuple. If these values are not specified in the trigger config, default values will be populated by the system. Note that there must be exactly one alert threshold configured per [client + trigger + integration] when published. */
		alertConfig?: Array<GoogleCloudIntegrationsV1alphaIntegrationAlertConfig>;

		/** Cloud Scheduler Trigger configuration */
		cloudSchedulerConfig?: GoogleCloudIntegrationsV1alphaCloudSchedulerConfig;

		/** Optional. User-provided description intended to give additional business context about the task. */
		description?: string | null;

		/** Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task */
		errorCatcherId?: string | null;

		/** Optional. The user created label for a particular trigger. */
		label?: string | null;

		/** Optional. Dictates how next tasks will be executed. */
		nextTasksExecutionPolicy?: GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicy | null;

		/** Configuration detail of coordinate, it used for UI */
		position?: GoogleCloudIntegrationsV1alphaCoordinate;

		/** Optional. Configurable properties of the trigger, not to be confused with integration parameters. E.g. "name" is a property for API triggers and "subscription" is a property for Pub/sub triggers. */
		properties?: {[id: string]: string };

		/** Optional. Set of tasks numbers from where the integration execution is started by this trigger. If this is empty, then integration is executed with default start tasks. In the list of start tasks, none of two tasks can have direct ancestor-descendant relationships (i.e. in a same integration execution graph). */
		startTasks?: Array<GoogleCloudIntegrationsV1alphaNextTask>;

		/** Optional. The backend trigger ID. */
		triggerId?: string | null;

		/** Required. A number to uniquely identify each trigger config within the integration on UI. */
		triggerNumber?: string | null;

		/** Optional. Type of trigger */
		triggerType?: GoogleCloudIntegrationsV1alphaTriggerConfigTriggerType | null;
	}

	/** Configuration detail of a trigger. */
	export interface GoogleCloudIntegrationsV1alphaTriggerConfigFormProperties {

		/** Optional. User-provided description intended to give additional business context about the task. */
		description: FormControl<string | null | undefined>,

		/** Optional. Optional Error catcher id of the error catch flow which will be executed when execution error happens in the task */
		errorCatcherId: FormControl<string | null | undefined>,

		/** Optional. The user created label for a particular trigger. */
		label: FormControl<string | null | undefined>,

		/** Optional. Dictates how next tasks will be executed. */
		nextTasksExecutionPolicy: FormControl<GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicy | null | undefined>,

		/** Optional. Configurable properties of the trigger, not to be confused with integration parameters. E.g. "name" is a property for API triggers and "subscription" is a property for Pub/sub triggers. */
		properties: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The backend trigger ID. */
		triggerId: FormControl<string | null | undefined>,

		/** Required. A number to uniquely identify each trigger config within the integration on UI. */
		triggerNumber: FormControl<string | null | undefined>,

		/** Optional. Type of trigger */
		triggerType: FormControl<GoogleCloudIntegrationsV1alphaTriggerConfigTriggerType | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaTriggerConfigFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaTriggerConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			errorCatcherId: new FormControl<string | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			nextTasksExecutionPolicy: new FormControl<GoogleCloudIntegrationsV1alphaTaskConfigNextTasksExecutionPolicy | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
			triggerNumber: new FormControl<string | null | undefined>(undefined),
			triggerType: new FormControl<GoogleCloudIntegrationsV1alphaTriggerConfigTriggerType | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaTriggerConfigTriggerType { TRIGGER_TYPE_UNSPECIFIED = 'TRIGGER_TYPE_UNSPECIFIED', CRON = 'CRON', API = 'API', SFDC_CHANNEL = 'SFDC_CHANNEL', CLOUD_PUBSUB_EXTERNAL = 'CLOUD_PUBSUB_EXTERNAL', SFDC_CDC_CHANNEL = 'SFDC_CDC_CHANNEL', CLOUD_SCHEDULER = 'CLOUD_SCHEDULER', INTEGRATION_CONNECTOR_TRIGGER = 'INTEGRATION_CONNECTOR_TRIGGER' }


	/** Request for lift Suspension */
	export interface GoogleCloudIntegrationsV1alphaLiftSuspensionRequest {

		/** User passed in suspension result and will be used to control workflow execution branching behavior by setting up corresponnding edge condition with suspension result. For example, if you want to lift the suspension, you can pass "Approved", or if you want to reject the suspension and terminate workfloe execution, you can pass "Rejected" and terminate the workflow execution with configuring the edge condition. */
		suspensionResult?: string | null;
	}

	/** Request for lift Suspension */
	export interface GoogleCloudIntegrationsV1alphaLiftSuspensionRequestFormProperties {

		/** User passed in suspension result and will be used to control workflow execution branching behavior by setting up corresponnding edge condition with suspension result. For example, if you want to lift the suspension, you can pass "Approved", or if you want to reject the suspension and terminate workfloe execution, you can pass "Rejected" and terminate the workflow execution with configuring the edge condition. */
		suspensionResult: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaLiftSuspensionRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaLiftSuspensionRequestFormProperties>({
			suspensionResult: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response of lift Suspense */
	export interface GoogleCloudIntegrationsV1alphaLiftSuspensionResponse {

		/** Execution Id that will be returned */
		eventExecutionInfoId?: string | null;
	}

	/** Response of lift Suspense */
	export interface GoogleCloudIntegrationsV1alphaLiftSuspensionResponseFormProperties {

		/** Execution Id that will be returned */
		eventExecutionInfoId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaLiftSuspensionResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaLiftSuspensionResponseFormProperties>({
			eventExecutionInfoId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for LinkAppsScriptProject rpc call. */
	export interface GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest {

		/** The id of the Apps Script project to be linked. */
		scriptId?: string | null;
	}

	/** Request for LinkAppsScriptProject rpc call. */
	export interface GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequestFormProperties {

		/** The id of the Apps Script project to be linked. */
		scriptId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequestFormProperties>({
			scriptId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for LinkAppsScriptProject rpc call. */
	export interface GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse {

		/** The id of the linked Apps Script project. */
		scriptId?: string | null;
	}

	/** Response for LinkAppsScriptProject rpc call. */
	export interface GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponseFormProperties {

		/** The id of the linked Apps Script project. */
		scriptId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponseFormProperties>({
			scriptId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to list AuthConfigs. */
	export interface GoogleCloudIntegrationsV1alphaListAuthConfigsResponse {

		/** The list of AuthConfigs retrieved. */
		authConfigs?: Array<GoogleCloudIntegrationsV1alphaAuthConfig>;

		/** The token used to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response to list AuthConfigs. */
	export interface GoogleCloudIntegrationsV1alphaListAuthConfigsResponseFormProperties {

		/** The token used to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListAuthConfigsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListAuthConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to list Certificates. */
	export interface GoogleCloudIntegrationsV1alphaListCertificatesResponse {

		/** The list of Certificates retrieved. */
		certificates?: Array<GoogleCloudIntegrationsV1alphaCertificate>;

		/** The token used to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response to list Certificates. */
	export interface GoogleCloudIntegrationsV1alphaListCertificatesResponseFormProperties {

		/** The token used to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListCertificatesResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListCertificatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing Connections listed by region. */
	export interface GoogleCloudIntegrationsV1alphaListConnectionsResponse {

		/** Connections. */
		connections?: Array<GoogleCloudConnectorsV1Connection>;

		/** Next page token. */
		nextPageToken?: string | null;
	}

	/** Response containing Connections listed by region. */
	export interface GoogleCloudIntegrationsV1alphaListConnectionsResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListConnectionsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListConnectionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing the integration execution data. */
	export interface GoogleCloudIntegrationsV1alphaListExecutionsResponse {

		/** Required. The detailed information of requested executions. */
		executionInfos?: Array<EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo>;

		/** The detailed information of requested executions */
		executions?: Array<GoogleCloudIntegrationsV1alphaExecution>;

		/** The token used to retrieve the next page results. */
		nextPageToken?: string | null;
	}

	/** Response for listing the integration execution data. */
	export interface GoogleCloudIntegrationsV1alphaListExecutionsResponseFormProperties {

		/** The token used to retrieve the next page results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListExecutionsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListExecutionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for IntegrationTemplateVersions.ListIntegrationTemplateVersions. */
	export interface GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse {

		/** The IntegrationTemplateVersions which match the request. */
		integrationTemplateVersions?: Array<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Response for IntegrationTemplateVersions.ListIntegrationTemplateVersions. */
	export interface GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for ListIntegrationVersions. */
	export interface GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse {

		/** The integrations which match the request. */
		integrationVersions?: Array<GoogleCloudIntegrationsV1alphaIntegrationVersion>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** Whether the user has no permission on the version or not. */
		noPermission?: boolean | null;
	}

	/** Response for ListIntegrationVersions. */
	export interface GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,

		/** Whether the user has no permission on the version or not. */
		noPermission: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListIntegrationVersionsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			noPermission: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response for ListIntegrations. */
	export interface GoogleCloudIntegrationsV1alphaListIntegrationsResponse {

		/** The integrations which match the request. */
		integrations?: Array<GoogleCloudIntegrationsV1alphaIntegration>;

		/** The next page token for the response. */
		nextPageToken?: string | null;
	}

	/** Response for ListIntegrations. */
	export interface GoogleCloudIntegrationsV1alphaListIntegrationsResponseFormProperties {

		/** The next page token for the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListIntegrationsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListIntegrationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing RuntimeActionSchemas for a specific Connection. */
	export interface GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse {

		/** Next page token. */
		nextPageToken?: string | null;

		/** Runtime action schemas. */
		runtimeActionSchemas?: Array<GoogleCloudIntegrationsV1alphaRuntimeActionSchema>;
	}

	/** Response for listing RuntimeActionSchemas for a specific Connection. */
	export interface GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of an action, including schemas for its inputs and outputs. */
	export interface GoogleCloudIntegrationsV1alphaRuntimeActionSchema {

		/** Name of the action. */
		action?: string | null;

		/** Input parameter schema for the action. */
		inputSchema?: string | null;

		/** Output parameter schema for the action. */
		outputSchema?: string | null;
	}

	/** Metadata of an action, including schemas for its inputs and outputs. */
	export interface GoogleCloudIntegrationsV1alphaRuntimeActionSchemaFormProperties {

		/** Name of the action. */
		action: FormControl<string | null | undefined>,

		/** Input parameter schema for the action. */
		inputSchema: FormControl<string | null | undefined>,

		/** Output parameter schema for the action. */
		outputSchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaRuntimeActionSchemaFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaRuntimeActionSchemaFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			inputSchema: new FormControl<string | null | undefined>(undefined),
			outputSchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing RuntimeEntitySchemas for a specific Connection. */
	export interface GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse {

		/** Next page token. */
		nextPageToken?: string | null;

		/** Runtime entity schemas. */
		runtimeEntitySchemas?: Array<GoogleCloudIntegrationsV1alphaRuntimeEntitySchema>;
	}

	/** Response for listing RuntimeEntitySchemas for a specific Connection. */
	export interface GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponseFormProperties {

		/** Next page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata of an entity, including a schema for its properties. */
	export interface GoogleCloudIntegrationsV1alphaRuntimeEntitySchema {

		/** The above schema, but for an array of the associated entity. */
		arrayFieldSchema?: string | null;

		/** Name of the entity. */
		entity?: string | null;

		/** List of fields in the entity. */
		fieldSchema?: string | null;
	}

	/** Metadata of an entity, including a schema for its properties. */
	export interface GoogleCloudIntegrationsV1alphaRuntimeEntitySchemaFormProperties {

		/** The above schema, but for an array of the associated entity. */
		arrayFieldSchema: FormControl<string | null | undefined>,

		/** Name of the entity. */
		entity: FormControl<string | null | undefined>,

		/** List of fields in the entity. */
		fieldSchema: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaRuntimeEntitySchemaFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaRuntimeEntitySchemaFormProperties>({
			arrayFieldSchema: new FormControl<string | null | undefined>(undefined),
			entity: new FormControl<string | null | undefined>(undefined),
			fieldSchema: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to list SfdcChannels. */
	export interface GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse {

		/** The token used to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of SfdcChannels retrieved. */
		sfdcChannels?: Array<GoogleCloudIntegrationsV1alphaSfdcChannel>;
	}

	/** Response to list SfdcChannels. */
	export interface GoogleCloudIntegrationsV1alphaListSfdcChannelsResponseFormProperties {

		/** The token used to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListSfdcChannelsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListSfdcChannelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SfdcChannel that points to a CDC or Platform Event Channel. */
	export interface GoogleCloudIntegrationsV1alphaSfdcChannel {

		/** The Channel topic defined by salesforce once an channel is opened */
		channelTopic?: string | null;

		/** Output only. Time when the channel is created */
		createTime?: string | null;

		/** Output only. Time when the channel was deleted. Empty if not deleted. */
		deleteTime?: string | null;

		/** The description for this channel */
		description?: string | null;

		/** Client level unique name/alias to easily reference a channel. */
		displayName?: string | null;

		/** Indicated if a channel has any active integrations referencing it. Set to false when the channel is created, and set to true if there is any integration published with the channel configured in it. */
		isActive?: boolean | null;

		/** Last sfdc messsage replay id for channel */
		lastReplayId?: string | null;

		/** Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}. */
		name?: string | null;

		/** Output only. Time when the channel was last updated */
		updateTime?: string | null;
	}

	/** The SfdcChannel that points to a CDC or Platform Event Channel. */
	export interface GoogleCloudIntegrationsV1alphaSfdcChannelFormProperties {

		/** The Channel topic defined by salesforce once an channel is opened */
		channelTopic: FormControl<string | null | undefined>,

		/** Output only. Time when the channel is created */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time when the channel was deleted. Empty if not deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** The description for this channel */
		description: FormControl<string | null | undefined>,

		/** Client level unique name/alias to easily reference a channel. */
		displayName: FormControl<string | null | undefined>,

		/** Indicated if a channel has any active integrations referencing it. Set to false when the channel is created, and set to true if there is any integration published with the channel configured in it. */
		isActive: FormControl<boolean | null | undefined>,

		/** Last sfdc messsage replay id for channel */
		lastReplayId: FormControl<string | null | undefined>,

		/** Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}. */
		name: FormControl<string | null | undefined>,

		/** Output only. Time when the channel was last updated */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaSfdcChannelFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaSfdcChannelFormProperties>({
			channelTopic: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			lastReplayId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to list SfdcInstances. */
	export interface GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse {

		/** The token used to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The list of SfdcInstances retrieved. */
		sfdcInstances?: Array<GoogleCloudIntegrationsV1alphaSfdcInstance>;
	}

	/** Response to list SfdcInstances. */
	export interface GoogleCloudIntegrationsV1alphaListSfdcInstancesResponseFormProperties {

		/** The token used to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListSfdcInstancesResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListSfdcInstancesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SfdcInstance resource use to hold channels and connection config data. */
	export interface GoogleCloudIntegrationsV1alphaSfdcInstance {

		/** A list of AuthConfigs that can be tried to open the channel to SFDC */
		authConfigId?: Array<string>;

		/** Output only. Time when the instance is created */
		createTime?: string | null;

		/** Output only. Time when the instance was deleted. Empty if not deleted. */
		deleteTime?: string | null;

		/** A description of the sfdc instance. */
		description?: string | null;

		/** User selected unique name/alias to easily reference an instance. */
		displayName?: string | null;

		/** Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}. */
		name?: string | null;

		/** URL used for API calls after authentication (the login authority is configured within the referenced AuthConfig). */
		serviceAuthority?: string | null;

		/** The SFDC Org Id. This is defined in salesforce. */
		sfdcOrgId?: string | null;

		/** Output only. Time when the instance was last updated */
		updateTime?: string | null;
	}

	/** The SfdcInstance resource use to hold channels and connection config data. */
	export interface GoogleCloudIntegrationsV1alphaSfdcInstanceFormProperties {

		/** Output only. Time when the instance is created */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Time when the instance was deleted. Empty if not deleted. */
		deleteTime: FormControl<string | null | undefined>,

		/** A description of the sfdc instance. */
		description: FormControl<string | null | undefined>,

		/** User selected unique name/alias to easily reference an instance. */
		displayName: FormControl<string | null | undefined>,

		/** Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}. */
		name: FormControl<string | null | undefined>,

		/** URL used for API calls after authentication (the login authority is configured within the referenced AuthConfig). */
		serviceAuthority: FormControl<string | null | undefined>,

		/** The SFDC Org Id. This is defined in salesforce. */
		sfdcOrgId: FormControl<string | null | undefined>,

		/** Output only. Time when the instance was last updated */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaSfdcInstanceFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaSfdcInstanceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serviceAuthority: new FormControl<string | null | undefined>(undefined),
			sfdcOrgId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for Suspensions.ListSuspensions. */
	export interface GoogleCloudIntegrationsV1alphaListSuspensionsResponse {

		/** Token to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The suspensions for the relevant execution which the caller has permissions to view and resolve. */
		suspensions?: Array<GoogleCloudIntegrationsV1alphaSuspension>;
	}

	/** Response for Suspensions.ListSuspensions. */
	export interface GoogleCloudIntegrationsV1alphaListSuspensionsResponseFormProperties {

		/** Token to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaListSuspensionsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaListSuspensionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A record representing a suspension. */
	export interface GoogleCloudIntegrationsV1alphaSuspension {

		/** Configurations for approving the Suspension. */
		approvalConfig?: GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig;

		/** Contains when and by whom the suspension was resolved. */
		audit?: GoogleCloudIntegrationsV1alphaSuspensionAudit;

		/** Output only. Auto-generated. */
		createTime?: string | null;

		/** Required. ID of the associated execution. */
		eventExecutionInfoId?: string | null;

		/** Required. The name of the originating integration. */
		integration?: string | null;

		/** Output only. Auto-generated. */
		lastModifyTime?: string | null;

		/** Resource name for suspensions suspension/{suspension_id} */
		name?: string | null;

		/** Required. State of this suspension, indicating what action a resolver has taken. */
		state?: GoogleCloudIntegrationsV1alphaSuspensionState | null;
		suspensionConfig?: EnterpriseCrmEventbusProtoSuspensionConfig;

		/** Required. Task id of the associated SuspensionTask. */
		taskId?: string | null;
	}

	/** A record representing a suspension. */
	export interface GoogleCloudIntegrationsV1alphaSuspensionFormProperties {

		/** Output only. Auto-generated. */
		createTime: FormControl<string | null | undefined>,

		/** Required. ID of the associated execution. */
		eventExecutionInfoId: FormControl<string | null | undefined>,

		/** Required. The name of the originating integration. */
		integration: FormControl<string | null | undefined>,

		/** Output only. Auto-generated. */
		lastModifyTime: FormControl<string | null | undefined>,

		/** Resource name for suspensions suspension/{suspension_id} */
		name: FormControl<string | null | undefined>,

		/** Required. State of this suspension, indicating what action a resolver has taken. */
		state: FormControl<GoogleCloudIntegrationsV1alphaSuspensionState | null | undefined>,

		/** Required. Task id of the associated SuspensionTask. */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaSuspensionFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaSuspensionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			eventExecutionInfoId: new FormControl<string | null | undefined>(undefined),
			integration: new FormControl<string | null | undefined>(undefined),
			lastModifyTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleCloudIntegrationsV1alphaSuspensionState | null | undefined>(undefined),
			taskId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configurations for approving the Suspension. */
	export interface GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig {

		/** Information to provide for recipients. */
		customMessage?: string | null;

		/** Email addresses to send approval request to. */
		emailAddresses?: Array<string>;

		/** Expiration configs for the approval request. */
		expiration?: GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration;
	}

	/** Configurations for approving the Suspension. */
	export interface GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigFormProperties {

		/** Information to provide for recipients. */
		customMessage: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaSuspensionApprovalConfigFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigFormProperties>({
			customMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Expiration configs for the approval request. */
	export interface GoogleCloudIntegrationsV1alphaSuspensionApprovalExpiration {

		/** Output only. Time after which the suspension expires, if no action taken. */
		expireTime?: string | null;

		/** Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior. */
		liftWhenExpired?: boolean | null;

		/** Time after the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED. */
		remindTime?: string | null;
	}

	/** Expiration configs for the approval request. */
	export interface GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationFormProperties {

		/** Output only. Time after which the suspension expires, if no action taken. */
		expireTime: FormControl<string | null | undefined>,

		/** Whether the suspension will be REJECTED or LIFTED upon expiration. REJECTED is the default behavior. */
		liftWhenExpired: FormControl<boolean | null | undefined>,

		/** Time after the previous suspension action reminder, if any, is sent using the selected notification option, for a suspension which is still PENDING_UNSPECIFIED. */
		remindTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaSuspensionApprovalExpirationFormProperties>({
			expireTime: new FormControl<string | null | undefined>(undefined),
			liftWhenExpired: new FormControl<boolean | null | undefined>(undefined),
			remindTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains when and by whom the suspension was resolved. */
	export interface GoogleCloudIntegrationsV1alphaSuspensionAudit {

		/** Time at which this suspension was resolved. */
		resolveTime?: string | null;

		/** Email address of the person who resolved this suspension. */
		resolver?: string | null;
	}

	/** Contains when and by whom the suspension was resolved. */
	export interface GoogleCloudIntegrationsV1alphaSuspensionAuditFormProperties {

		/** Time at which this suspension was resolved. */
		resolveTime: FormControl<string | null | undefined>,

		/** Email address of the person who resolved this suspension. */
		resolver: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaSuspensionAuditFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaSuspensionAuditFormProperties>({
			resolveTime: new FormControl<string | null | undefined>(undefined),
			resolver: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaSuspensionState { RESOLUTION_STATE_UNSPECIFIED = 'RESOLUTION_STATE_UNSPECIFIED', PENDING = 'PENDING', REJECTED = 'REJECTED', LIFTED = 'LIFTED' }


	/** Request for PublishIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaPublishIntegrationVersionRequest {
	}

	/** Request for PublishIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaPublishIntegrationVersionRequestFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaPublishIntegrationVersionRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaPublishIntegrationVersionRequestFormProperties>({
		});

	}


	/** Response for PublishIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponse {
	}

	/** Response for PublishIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponseFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponseFormProperties>({
		});

	}


	/** Request for [Suspensions.ResolveSuspensions]. */
	export interface GoogleCloudIntegrationsV1alphaResolveSuspensionRequest {

		/** A record representing a suspension. */
		suspension?: GoogleCloudIntegrationsV1alphaSuspension;
	}

	/** Request for [Suspensions.ResolveSuspensions]. */
	export interface GoogleCloudIntegrationsV1alphaResolveSuspensionRequestFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaResolveSuspensionRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaResolveSuspensionRequestFormProperties>({
		});

	}


	/** Response for Suspensions.ResolveSuspensions. */
	export interface GoogleCloudIntegrationsV1alphaResolveSuspensionResponse {
	}

	/** Response for Suspensions.ResolveSuspensions. */
	export interface GoogleCloudIntegrationsV1alphaResolveSuspensionResponseFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaResolveSuspensionResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaResolveSuspensionResponseFormProperties>({
		});

	}


	/** The request for scheduling an integration. */
	export interface GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest {

		/** Optional. Input parameters used by integration execution. */
		inputParameters?: {[id: string]: GoogleCloudIntegrationsV1alphaValueType };

		/** Parameters are a part of Event and can be used to communicate between different tasks that are part of the same integration execution. */
		parameterEntries?: Array<EnterpriseCrmFrontendsEventbusProtoParameterEntry>;

		/** LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see */
		parameters?: EnterpriseCrmEventbusProtoEventParameters;

		/** This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. */
		requestId?: string | null;

		/** The time that the integration should be executed. If the time is less or equal to the current time, the integration is executed immediately. */
		scheduleTime?: string | null;

		/** Required. Matched against all {@link TriggerConfig}s across all integrations. i.e. TriggerConfig.trigger_id.equals(trigger_id) */
		triggerId?: string | null;
	}

	/** The request for scheduling an integration. */
	export interface GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequestFormProperties {

		/** Optional. Input parameters used by integration execution. */
		inputParameters: FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaValueType } | null | undefined>,

		/** This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. */
		requestId: FormControl<string | null | undefined>,

		/** The time that the integration should be executed. If the time is less or equal to the current time, the integration is executed immediately. */
		scheduleTime: FormControl<string | null | undefined>,

		/** Required. Matched against all {@link TriggerConfig}s across all integrations. i.e. TriggerConfig.trigger_id.equals(trigger_id) */
		triggerId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaScheduleIntegrationsRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequestFormProperties>({
			inputParameters: new FormControl<{[id: string]: GoogleCloudIntegrationsV1alphaValueType } | null | undefined>(undefined),
			requestId: new FormControl<string | null | undefined>(undefined),
			scheduleTime: new FormControl<string | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for executing an integration. */
	export interface GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse {

		/** The execution info id for the executed integrations. */
		executionInfoIds?: Array<string>;
	}

	/** The response for executing an integration. */
	export interface GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponseFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaScheduleIntegrationsResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponseFormProperties>({
		});

	}


	/** Request for TakeoverEditLock. */
	export interface GoogleCloudIntegrationsV1alphaTakeoverEditLockRequest {
	}

	/** Request for TakeoverEditLock. */
	export interface GoogleCloudIntegrationsV1alphaTakeoverEditLockRequestFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaTakeoverEditLockRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaTakeoverEditLockRequestFormProperties>({
		});

	}


	/** Response for TakeoverEditLock. */
	export interface GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse {

		/** The integration version definition. */
		integrationVersion?: GoogleCloudIntegrationsV1alphaIntegrationVersion;
	}

	/** Response for TakeoverEditLock. */
	export interface GoogleCloudIntegrationsV1alphaTakeoverEditLockResponseFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaTakeoverEditLockResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaTakeoverEditLockResponseFormProperties>({
		});

	}


	/** Request for UnpublishIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaUnpublishIntegrationVersionRequest {
	}

	/** Request for UnpublishIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaUnpublishIntegrationVersionRequestFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaUnpublishIntegrationVersionRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaUnpublishIntegrationVersionRequestFormProperties>({
		});

	}


	/** Request for UploadIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest {

		/** The textproto of the integration_version. */
		content?: string | null;

		/** File format for upload request. */
		fileFormat?: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormat | null;
	}

	/** Request for UploadIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFormProperties {

		/** The textproto of the integration_version. */
		content: FormControl<string | null | undefined>,

		/** File format for upload request. */
		fileFormat: FormControl<GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormat | null | undefined>,
	}
	export function CreateGoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			fileFormat: new FormControl<GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormat | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormat { FILE_FORMAT_UNSPECIFIED = 'FILE_FORMAT_UNSPECIFIED', JSON = 'JSON', YAML = 'YAML' }


	/** Response for UploadIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse {

		/** The integration version definition. */
		integrationVersion?: GoogleCloudIntegrationsV1alphaIntegrationVersion;
	}

	/** Response for UploadIntegrationVersion. */
	export interface GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponseFormProperties {
	}
	export function CreateGoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponseFormGroup() {
		return new FormGroup<GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponseFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.
		 * Get v1alpha/callback:generateToken
		 * @param {string} code The auth code for the given request
		 * @param {string} gcpProjectId The gcp project id of the request
		 * @param {EnterpriseCrmEventbusProtoSuspensionResolutionInfoProduct} product Which product sends the request
		 * @param {string} redirectUri Redirect uri of the auth code request
		 * @param {string} state The auth config id for the given request
		 * @return {GoogleCloudIntegrationsV1alphaGenerateTokenResponse} Successful response
		 */
		Integrations_callback_generateToken(code: string | null | undefined, gcpProjectId: string | null | undefined, product: EnterpriseCrmEventbusProtoSuspensionResolutionInfoProduct | null | undefined, redirectUri: string | null | undefined, state: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaGenerateTokenResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaGenerateTokenResponse>(this.baseUri + 'v1alpha/callback:generateToken?code=' + (code == null ? '' : encodeURIComponent(code)) + '&gcpProjectId=' + (gcpProjectId == null ? '' : encodeURIComponent(gcpProjectId)) + '&product=' + product + '&redirectUri=' + (redirectUri == null ? '' : encodeURIComponent(redirectUri)) + '&state=' + (state == null ? '' : encodeURIComponent(state)), {});
		}

		/**
		 * Enumerates the regions for which Connector Platform is provisioned.
		 * Get v1alpha/connectorPlatformRegions:enumerate
		 * @return {GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse} Successful response
		 */
		Integrations_connectorPlatformRegions_enumerate(): Observable<GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse>(this.baseUri + 'v1alpha/connectorPlatformRegions:enumerate', {});
		}

		/**
		 * Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
		 * Post v1alpha/{integrationVersion}:takeoverEditLock
		 * @param {string} integrationVersion Required. The version to take over edit lock. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
		 * @return {GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_versions_takeoverEditLock(integrationVersion: string, requestBody: GoogleCloudIntegrationsV1alphaTakeoverEditLockRequest): Observable<GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse>(this.baseUri + 'v1alpha/' + (integrationVersion == null ? '' : encodeURIComponent(integrationVersion)) + ':takeoverEditLock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an sfdc channel.
		 * Delete v1alpha/{name}
		 * @param {string} name Required. The name that is associated with the SfdcChannel.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Integrations_projects_locations_sfdcInstances_sfdcChannels_delete(name: string): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
		 * Get v1alpha/{name}
		 * @param {string} name Required. The name that is associated with the SfdcChannel.
		 * @return {GoogleCloudIntegrationsV1alphaSfdcChannel} Successful response
		 */
		Integrations_projects_locations_sfdcInstances_sfdcChannels_get(name: string): Observable<GoogleCloudIntegrationsV1alphaSfdcChannel> {
			return this.http.get<GoogleCloudIntegrationsV1alphaSfdcChannel>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
		 * Patch v1alpha/{name}
		 * @param {string} name Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.
		 * @param {string} updateMask Field mask specifying the fields in the above SfdcChannel that have been modified and need to be updated.
		 * @param {string} clientCertificate_passphrase 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
		 * @param {string} clientCertificate_sslCertificate The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
		 * @return {GoogleCloudIntegrationsV1alphaSfdcChannel} Successful response
		 */
		Integrations_projects_locations_sfdcInstances_sfdcChannels_patch(name: string, updateMask: string | null | undefined, clientCertificate_passphrase: string | null | undefined, clientCertificate_sslCertificate: string | null | undefined, requestBody: GoogleCloudIntegrationsV1alphaSfdcChannel): Observable<GoogleCloudIntegrationsV1alphaSfdcChannel> {
			return this.http.patch<GoogleCloudIntegrationsV1alphaSfdcChannel>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)) + '&clientCertificate_passphrase=' + (clientCertificate_passphrase == null ? '' : encodeURIComponent(clientCertificate_passphrase)) + '&clientCertificate_sslCertificate=' + (clientCertificate_sslCertificate == null ? '' : encodeURIComponent(clientCertificate_sslCertificate)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancellation of an execution
		 * Post v1alpha/{name}:cancel
		 * @param {string} name Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id}
		 * @return {GoogleCloudIntegrationsV1alphaCancelExecutionResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_executions_cancel(name: string, requestBody: GoogleCloudIntegrationsV1alphaCancelExecutionRequest): Observable<GoogleCloudIntegrationsV1alphaCancelExecutionResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaCancelExecutionResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
		 * Get v1alpha/{name}:download
		 * @param {string} name Required. The version to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
		 * @param {GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormat} fileFormat File format for download request.
		 * @return {GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_versions_download(name: string, fileFormat: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequestFileFormat | null | undefined): Observable<GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':download&fileFormat=' + fileFormat, {});
		}

		/**
		 * Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
		 * Post v1alpha/{name}:execute
		 * @param {string} name Required. The integration resource name.
		 * @return {GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_execute(name: string, requestBody: GoogleCloudIntegrationsV1alphaExecuteIntegrationsRequest): Observable<GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':execute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Executes an integration on receiving events from Integration Connector triggers, Eventarc or CPS Trigger. The details about integration are derived from CloudEvent request body.
		 * Post v1alpha/{name}:executeEvent
		 * @param {string} name Required. The integration resource name. Format: projects/{gcp_project_id}/locations/{location}/integrations/{integration_id}
		 * @return {GoogleCloudIntegrationsV1alphaExecuteEventResponse} Successful response
		 */
		Integrations_projects_locations_integrations_executeEvent(name: string, requestBody: GoogleCloudIntegrationsV1alphaExecuteEventRequest): Observable<GoogleCloudIntegrationsV1alphaExecuteEventResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaExecuteEventResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':executeEvent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * * Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
		 * Post v1alpha/{name}:lift
		 * @param {string} name Required. The resource that the suspension belongs to. "projects/{project}/locations/{location}/products/{product}/integrations/{integration}/executions/{execution}/suspensions/{suspenion}" format.
		 * @return {GoogleCloudIntegrationsV1alphaLiftSuspensionResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_executions_suspensions_lift(name: string, requestBody: GoogleCloudIntegrationsV1alphaLiftSuspensionRequest): Observable<GoogleCloudIntegrationsV1alphaLiftSuspensionResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaLiftSuspensionResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':lift', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
		 * Post v1alpha/{name}:publish
		 * @param {string} name Required. The version to publish. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
		 * @return {GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_versions_publish(name: string, requestBody: GoogleCloudIntegrationsV1alphaPublishIntegrationVersionRequest): Observable<GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaPublishIntegrationVersionResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':publish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * * Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
		 * Post v1alpha/{name}:resolve
		 * @param {string} name Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}/suspensions/{suspension_id}
		 * @return {GoogleCloudIntegrationsV1alphaResolveSuspensionResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_executions_suspensions_resolve(name: string, requestBody: GoogleCloudIntegrationsV1alphaResolveSuspensionRequest): Observable<GoogleCloudIntegrationsV1alphaResolveSuspensionResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaResolveSuspensionResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':resolve', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
		 * Post v1alpha/{name}:schedule
		 * @param {string} name The integration resource name.
		 * @return {GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_schedule(name: string, requestBody: GoogleCloudIntegrationsV1alphaScheduleIntegrationsRequest): Observable<GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':schedule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
		 * Post v1alpha/{name}:unpublish
		 * @param {string} name Required. The version to deactivate. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version}
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Integrations_projects_locations_products_integrations_versions_unpublish(name: string, requestBody: GoogleCloudIntegrationsV1alphaUnpublishIntegrationVersionRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':unpublish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an Apps Script project.
		 * Post v1alpha/{parent}/appsScriptProjects
		 * @param {string} parent Required. The project that the executed integration belongs to.
		 * @return {GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse} Successful response
		 */
		Integrations_projects_locations_appsScriptProjects_create(parent: string, requestBody: GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectRequest): Observable<GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/appsScriptProjects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Links a existing Apps Script project.
		 * Post v1alpha/{parent}/appsScriptProjects:link
		 * @param {string} parent Required. The project that the executed integration belongs to.
		 * @return {GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse} Successful response
		 */
		Integrations_projects_locations_appsScriptProjects_link(parent: string, requestBody: GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectRequest): Observable<GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/appsScriptProjects:link', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
		 * Get v1alpha/{parent}/authConfigs
		 * @param {string} parent Required. The client, which owns this collection of AuthConfigs.
		 * @param {string} filter Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
		 * @param {number} pageSize The size of entries in the response. If unspecified, defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The token returned in the previous response.
		 * @param {string} readMask The mask which specifies fields that need to be returned in the AuthConfig's response.
		 * @return {GoogleCloudIntegrationsV1alphaListAuthConfigsResponse} Successful response
		 */
		Integrations_projects_locations_products_authConfigs_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListAuthConfigsResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListAuthConfigsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/authConfigs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
		 * Post v1alpha/{parent}/authConfigs
		 * @param {string} parent Required. "projects/{project}/locations/{location}" format.
		 * @param {string} clientCertificate_encryptedPrivateKey The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
		 * @param {string} clientCertificate_passphrase 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key.
		 * @param {string} clientCertificate_sslCertificate The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE-----
		 * @return {GoogleCloudIntegrationsV1alphaAuthConfig} Successful response
		 */
		Integrations_projects_locations_products_authConfigs_create(parent: string, clientCertificate_encryptedPrivateKey: string | null | undefined, clientCertificate_passphrase: string | null | undefined, clientCertificate_sslCertificate: string | null | undefined, requestBody: GoogleCloudIntegrationsV1alphaAuthConfig): Observable<GoogleCloudIntegrationsV1alphaAuthConfig> {
			return this.http.post<GoogleCloudIntegrationsV1alphaAuthConfig>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/authConfigs&clientCertificate_encryptedPrivateKey=' + (clientCertificate_encryptedPrivateKey == null ? '' : encodeURIComponent(clientCertificate_encryptedPrivateKey)) + '&clientCertificate_passphrase=' + (clientCertificate_passphrase == null ? '' : encodeURIComponent(clientCertificate_passphrase)) + '&clientCertificate_sslCertificate=' + (clientCertificate_sslCertificate == null ? '' : encodeURIComponent(clientCertificate_sslCertificate)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all the certificates that match the filter. Restrict to certificate of current client only.
		 * Get v1alpha/{parent}/certificates
		 * @param {string} parent Required. The client, which owns this collection of Certificates.
		 * @param {string} filter Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
		 * @param {number} pageSize The size of entries in the response. If unspecified, defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The token returned in the previous response.
		 * @param {string} readMask The mask which specifies fields that need to be returned in the Certificate's response.
		 * @return {GoogleCloudIntegrationsV1alphaListCertificatesResponse} Successful response
		 */
		Integrations_projects_locations_products_certificates_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListCertificatesResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListCertificatesResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificates&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
		 * Post v1alpha/{parent}/certificates
		 * @param {string} parent Required. "projects/{project}/locations/{location}" format.
		 * @return {GoogleCloudIntegrationsV1alphaCertificate} Successful response
		 */
		Integrations_projects_locations_products_certificates_create(parent: string, requestBody: GoogleCloudIntegrationsV1alphaCertificate): Observable<GoogleCloudIntegrationsV1alphaCertificate> {
			return this.http.post<GoogleCloudIntegrationsV1alphaCertificate>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/certificates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists Connections in a given project and location.
		 * Get v1alpha/{parent}/connections
		 * @param {string} parent Required. Parent resource of the Connection, of the form: `projects/locations/*`
		 * @param {string} filter Filter.
		 * @param {string} orderBy Order by parameters.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {GoogleCloudIntegrationsV1alphaListConnectionsResponse} Successful response
		 */
		Integrations_projects_locations_connections_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListConnectionsResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListConnectionsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/connections&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.
		 * Get v1alpha/{parent}/executions
		 * @param {string} parent Required. The parent resource name of the integration execution.
		 * @param {string} filter Optional. Standard filter field, we support filtering on following fields: workflow_name: the name of the integration. CreateTimestamp: the execution created time. event_execution_state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. parameter_type: the type of the parameters involved in the execution. All fields support for EQUALS, in additional: CreateTimestamp support for LESS_THAN, GREATER_THAN ParameterType support for HAS For example: "parameter_type" HAS \"string\" Also supports operators like AND, OR, NOT For example, trigger_id=\"id1\" AND workflow_name=\"testWorkflow\"
		 * @param {string} filterParams_customFilter Optional user-provided custom filter.
		 * @param {string} filterParams_endTime End timestamp.
		 * @param {Array<string>} filterParams_eventStatuses List of possible event statuses.
		 * @param {string} filterParams_executionId Execution id.
		 * @param {string} filterParams_parameterKey Param key. DEPRECATED. User parameter_pair_key instead.
		 * @param {string} filterParams_parameterPairKey Param key in the key value pair filter.
		 * @param {string} filterParams_parameterPairValue Param value in the key value pair filter.
		 * @param {string} filterParams_parameterType Param type.
		 * @param {string} filterParams_parameterValue Param value. DEPRECATED. User parameter_pair_value instead.
		 * @param {string} filterParams_startTime Start timestamp.
		 * @param {Array<string>} filterParams_taskStatuses List of possible task statuses.
		 * @param {string} filterParams_workflowName Workflow name.
		 * @param {string} orderBy Optional. The results would be returned in order you specified here. Currently supporting "last_modified_time" and "create_time".
		 * @param {number} pageSize Optional. The size of entries in the response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Optional. The token returned in the previous response.
		 * @param {string} readMask Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in event execution info will be filled and returned.
		 * @param {boolean} refreshAcl Optional. If true, the service will use the most recent acl information to list event execution infos and renew the acl cache. Note that fetching the most recent acl is synchronous, so it will increase RPC call latency.
		 * @param {boolean} truncateParams Optional. If true, the service will truncate the params to only keep the first 1000 characters of string params and empty the executions in order to make response smaller. Only works for UI and when the params fields are not filtered out.
		 * @return {GoogleCloudIntegrationsV1alphaListExecutionsResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_executions_list(parent: string, filter: string | null | undefined, filterParams_customFilter: string | null | undefined, filterParams_endTime: string | null | undefined, filterParams_eventStatuses: Array<string> | null | undefined, filterParams_executionId: string | null | undefined, filterParams_parameterKey: string | null | undefined, filterParams_parameterPairKey: string | null | undefined, filterParams_parameterPairValue: string | null | undefined, filterParams_parameterType: string | null | undefined, filterParams_parameterValue: string | null | undefined, filterParams_startTime: string | null | undefined, filterParams_taskStatuses: Array<string> | null | undefined, filterParams_workflowName: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined, refreshAcl: boolean | null | undefined, truncateParams: boolean | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListExecutionsResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListExecutionsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/executions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&filterParams_customFilter=' + (filterParams_customFilter == null ? '' : encodeURIComponent(filterParams_customFilter)) + '&filterParams_endTime=' + (filterParams_endTime == null ? '' : encodeURIComponent(filterParams_endTime)) + '&' + filterParams_eventStatuses?.map(z => `filterParams.eventStatuses=${encodeURIComponent(z)}`).join('&') + '&filterParams_executionId=' + (filterParams_executionId == null ? '' : encodeURIComponent(filterParams_executionId)) + '&filterParams_parameterKey=' + (filterParams_parameterKey == null ? '' : encodeURIComponent(filterParams_parameterKey)) + '&filterParams_parameterPairKey=' + (filterParams_parameterPairKey == null ? '' : encodeURIComponent(filterParams_parameterPairKey)) + '&filterParams_parameterPairValue=' + (filterParams_parameterPairValue == null ? '' : encodeURIComponent(filterParams_parameterPairValue)) + '&filterParams_parameterType=' + (filterParams_parameterType == null ? '' : encodeURIComponent(filterParams_parameterType)) + '&filterParams_parameterValue=' + (filterParams_parameterValue == null ? '' : encodeURIComponent(filterParams_parameterValue)) + '&filterParams_startTime=' + (filterParams_startTime == null ? '' : encodeURIComponent(filterParams_startTime)) + '&' + filterParams_taskStatuses?.map(z => `filterParams.taskStatuses=${encodeURIComponent(z)}`).join('&') + '&filterParams_workflowName=' + (filterParams_workflowName == null ? '' : encodeURIComponent(filterParams_workflowName)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)) + '&refreshAcl=' + refreshAcl + '&truncateParams=' + truncateParams, {});
		}

		/**
		 * Returns the list of all integrations in the specified project.
		 * Get v1alpha/{parent}/integrations
		 * @param {string} parent Required. Project and location from which the integrations should be listed. Format: projects/{project}
		 * @param {string} filter Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`.
		 * @param {string} orderBy The results would be returned in order you specified here. Supported sort keys are: Descending sort order by "last_modified_time", "created_time", "snapshot_number". Ascending sort order by the integration name.
		 * @param {number} pageSize The page size for the resquest.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The page token for the resquest.
		 * @return {GoogleCloudIntegrationsV1alphaListIntegrationsResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListIntegrationsResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListIntegrationsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/integrations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
		 * Get v1alpha/{parent}/runtimeActionSchemas
		 * @param {string} parent Required. Parent resource of RuntimeActionSchema. Format: projects/{project}/locations/{location}/connections/{connection}
		 * @param {string} filter Filter. Only the action field with literal equality operator is supported.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse} Successful response
		 */
		Integrations_projects_locations_connections_runtimeActionSchemas_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runtimeActionSchemas&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
		 * Get v1alpha/{parent}/runtimeEntitySchemas
		 * @param {string} parent Required. Parent resource of RuntimeEntitySchema. Format: projects/{project}/locations/{location}/connections/{connection}
		 * @param {string} filter Filter. Only the entity field with literal equality operator is supported.
		 * @param {number} pageSize Page size.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token.
		 * @return {GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse} Successful response
		 */
		Integrations_projects_locations_connections_runtimeEntitySchemas_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/runtimeEntitySchemas&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
		 * Get v1alpha/{parent}/sfdcChannels
		 * @param {string} parent Required. The client, which owns this collection of SfdcChannels.
		 * @param {string} filter Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
		 * @param {number} pageSize The size of entries in the response. If unspecified, defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The token returned in the previous response.
		 * @param {string} readMask The mask which specifies fields that need to be returned in the SfdcChannel's response.
		 * @return {GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse} Successful response
		 */
		Integrations_projects_locations_sfdcInstances_sfdcChannels_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sfdcChannels&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
		 * Post v1alpha/{parent}/sfdcChannels
		 * @param {string} parent Required. "projects/{project}/locations/{location}" format.
		 * @return {GoogleCloudIntegrationsV1alphaSfdcChannel} Successful response
		 */
		Integrations_projects_locations_sfdcInstances_sfdcChannels_create(parent: string, requestBody: GoogleCloudIntegrationsV1alphaSfdcChannel): Observable<GoogleCloudIntegrationsV1alphaSfdcChannel> {
			return this.http.post<GoogleCloudIntegrationsV1alphaSfdcChannel>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sfdcChannels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
		 * Get v1alpha/{parent}/sfdcInstances
		 * @param {string} parent Required. The client, which owns this collection of SfdcInstances.
		 * @param {string} filter Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters.
		 * @param {number} pageSize The size of entries in the response. If unspecified, defaults to 100.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The token returned in the previous response.
		 * @param {string} readMask The mask which specifies fields that need to be returned in the SfdcInstance's response.
		 * @return {GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse} Successful response
		 */
		Integrations_projects_locations_sfdcInstances_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readMask: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sfdcInstances&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readMask=' + (readMask == null ? '' : encodeURIComponent(readMask)), {});
		}

		/**
		 * Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
		 * Post v1alpha/{parent}/sfdcInstances
		 * @param {string} parent Required. "projects/{project}/locations/{location}" format.
		 * @return {GoogleCloudIntegrationsV1alphaSfdcInstance} Successful response
		 */
		Integrations_projects_locations_sfdcInstances_create(parent: string, requestBody: GoogleCloudIntegrationsV1alphaSfdcInstance): Observable<GoogleCloudIntegrationsV1alphaSfdcInstance> {
			return this.http.post<GoogleCloudIntegrationsV1alphaSfdcInstance>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sfdcInstances', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * * Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
		 * Get v1alpha/{parent}/suspensions
		 * @param {string} parent Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}
		 * @param {string} filter Standard filter field.
		 * @param {string} orderBy Field name to order by.
		 * @param {number} pageSize Maximum number of entries in the response.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Token to retrieve a specific page.
		 * @return {GoogleCloudIntegrationsV1alphaListSuspensionsResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_executions_suspensions_list(parent: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListSuspensionsResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListSuspensionsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/suspensions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Returns the list of all IntegrationTemplateVersions in the specified project.
		 * Get v1alpha/{parent}/versions
		 * @param {string} parent Required. Format: projects/{project}/location/{location}/product/{product}/integrationtemplates/{integrationtemplate}
		 * @param {string} filter Filter syntax: defined in the EBNF grammar.
		 * @param {number} pageSize The maximum number of IntegrationTemplateVersions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken A page token, received from a previous `ListIntegrationTemplateVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIntegrationTemplateVersions` must match the call that provided the page token.
		 * @return {GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse} Successful response
		 */
		Integrations_projects_locations_products_integrationtemplates_versions_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse> {
			return this.http.get<GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an IntegrationTemplateVersion.
		 * Post v1alpha/{parent}/versions
		 * @param {string} parent Required. The parent resource where this TemplateVersion will be created. Format: projects/{project}/location/{location}/product/{product}/integrationtemplates/{integrationtemplate}
		 * @param {boolean} newIntegration Set this flag to true, if draft version is to be created for a brand new integration. False, if the request is for an existing integration. For backward compatibility reasons, even if this flag is set to `false` and no existing integration is found, a new draft integration will still be created.
		 * @return {GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion} Successful response
		 */
		Integrations_projects_locations_products_integrationtemplates_versions_create(parent: string, newIntegration: boolean | null | undefined, requestBody: GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion): Observable<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion> {
			return this.http.post<GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions&newIntegration=' + newIntegration, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
		 * Post v1alpha/{parent}/versions:upload
		 * @param {string} parent Required. The version to upload. Format: projects/{project}/locations/{location}/integrations/{integration}
		 * @return {GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse} Successful response
		 */
		Integrations_projects_locations_products_integrations_versions_upload(parent: string, requestBody: GoogleCloudIntegrationsV1alphaUploadIntegrationVersionRequest): Observable<GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse> {
			return this.http.post<GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions:upload', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

