import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** AccessCredentials includes the OAuth access token, and the other fields returned along with it. */
	export interface AccessCredentials {

		/** OAuth access token. */
		accessToken?: string | null;

		/** Duration till the access token expires. */
		expiresIn?: string | null;

		/** OAuth refresh token. */
		refreshToken?: string | null;
	}

	/** AccessCredentials includes the OAuth access token, and the other fields returned along with it. */
	export interface AccessCredentialsFormProperties {

		/** OAuth access token. */
		accessToken: FormControl<string | null | undefined>,

		/** Duration till the access token expires. */
		expiresIn: FormControl<string | null | undefined>,

		/** OAuth refresh token. */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateAccessCredentialsFormGroup() {
		return new FormGroup<AccessCredentialsFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			expiresIn: new FormControl<string | null | undefined>(undefined),
			refreshToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Action message contains metadata information about a single action present in the external system. */
	export interface Action {

		/** Brief Description of action */
		description?: string | null;

		/** Display Name of action to be shown on client side */
		displayName?: string | null;

		/** JsonSchema representation of schema metadata */
		inputJsonSchema?: JsonSchema;

		/** List containing input parameter metadata. */
		inputParameters?: Array<InputParameter>;

		/** Name of the action. */
		name?: string | null;

		/** JsonSchema representation of schema metadata */
		resultJsonSchema?: JsonSchema;

		/** List containing the metadata of result fields. */
		resultMetadata?: Array<ResultMetadata>;
	}

	/** Action message contains metadata information about a single action present in the external system. */
	export interface ActionFormProperties {

		/** Brief Description of action */
		description: FormControl<string | null | undefined>,

		/** Display Name of action to be shown on client side */
		displayName: FormControl<string | null | undefined>,

		/** Name of the action. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** JsonSchema representation of schema metadata */
	export interface JsonSchema {

		/** Additional details apart from standard json schema fields, this gives flexibility to store metadata about the schema */
		additionalDetails?: {[id: string]: any };

		/** A description of this schema. */
		description?: string | null;

		/** Possible values for an enumeration. This works in conjunction with `type` to represent types with a fixed set of legal values */
		enum?: Array<string>;

		/** Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format */
		format?: string | null;

		/** JsonSchema representation of schema metadata */
		items?: JsonSchema;

		/** JDBC datatype of the field. */
		jdbcType?: JsonSchemaJdbcType | null;

		/** The child schemas, applicable only if this is of type `object`. The key is the name of the property and the value is the json schema that describes that property */
		properties?: {[id: string]: JsonSchema };

		/** Whether this property is required. */
		required?: Array<string>;

		/** JSON Schema Validation: A Vocabulary for Structural Validation of JSON */
		type?: Array<string>;
	}

	/** JsonSchema representation of schema metadata */
	export interface JsonSchemaFormProperties {

		/** Additional details apart from standard json schema fields, this gives flexibility to store metadata about the schema */
		additionalDetails: FormControl<{[id: string]: any } | null | undefined>,

		/** A description of this schema. */
		description: FormControl<string | null | undefined>,

		/** Format of the value as per https://json-schema.org/understanding-json-schema/reference/string.html#format */
		format: FormControl<string | null | undefined>,

		/** JDBC datatype of the field. */
		jdbcType: FormControl<JsonSchemaJdbcType | null | undefined>,

		/** The child schemas, applicable only if this is of type `object`. The key is the name of the property and the value is the json schema that describes that property */
		properties: FormControl<{[id: string]: JsonSchema } | null | undefined>,
	}
	export function CreateJsonSchemaFormGroup() {
		return new FormGroup<JsonSchemaFormProperties>({
			additionalDetails: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			jdbcType: new FormControl<JsonSchemaJdbcType | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: JsonSchema } | null | undefined>(undefined),
		});

	}

	export enum JsonSchemaJdbcType { DATA_TYPE_UNSPECIFIED = 'DATA_TYPE_UNSPECIFIED', INT = 'INT', SMALLINT = 'SMALLINT', DOUBLE = 'DOUBLE', DATE = 'DATE', DATETIME = 'DATETIME', TIME = 'TIME', STRING = 'STRING', LONG = 'LONG', BOOLEAN = 'BOOLEAN', DECIMAL = 'DECIMAL', UUID = 'UUID', BLOB = 'BLOB', BIT = 'BIT', TINYINT = 'TINYINT', INTEGER = 'INTEGER', BIGINT = 'BIGINT', FLOAT = 'FLOAT', REAL = 'REAL', NUMERIC = 'NUMERIC', CHAR = 'CHAR', VARCHAR = 'VARCHAR', LONGVARCHAR = 'LONGVARCHAR', TIMESTAMP = 'TIMESTAMP', NCHAR = 'NCHAR', NVARCHAR = 'NVARCHAR', LONGNVARCHAR = 'LONGNVARCHAR', NULL = 'NULL', OTHER = 'OTHER', JAVA_OBJECT = 'JAVA_OBJECT', DISTINCT = 'DISTINCT', STRUCT = 'STRUCT', ARRAY = 'ARRAY', CLOB = 'CLOB', REF = 'REF', DATALINK = 'DATALINK', ROWID = 'ROWID', BINARY = 'BINARY', VARBINARY = 'VARBINARY', LONGVARBINARY = 'LONGVARBINARY', NCLOB = 'NCLOB', SQLXML = 'SQLXML', REF_CURSOR = 'REF_CURSOR', TIME_WITH_TIMEZONE = 'TIME_WITH_TIMEZONE', TIMESTAMP_WITH_TIMEZONE = 'TIMESTAMP_WITH_TIMEZONE' }


	/** Input Parameter message contains metadata about the parameters required for executing an Action. */
	export interface InputParameter {

		/** The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields. */
		additionalDetails?: {[id: string]: any };

		/** The data type of the Parameter */
		dataType?: JsonSchemaJdbcType | null;

		/** The following field specifies the default value of the Parameter provided by the external system if a value is not provided. */
		defaultValue?: any;

		/** A brief description of the Parameter. */
		description?: string | null;

		/** JsonSchema representation of schema metadata */
		jsonSchema?: JsonSchema;

		/** Name of the Parameter. */
		name?: string | null;

		/** Specifies whether a null value is allowed. */
		nullable?: boolean | null;
	}

	/** Input Parameter message contains metadata about the parameters required for executing an Action. */
	export interface InputParameterFormProperties {

		/** The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields. */
		additionalDetails: FormControl<{[id: string]: any } | null | undefined>,

		/** The data type of the Parameter */
		dataType: FormControl<JsonSchemaJdbcType | null | undefined>,

		/** The following field specifies the default value of the Parameter provided by the external system if a value is not provided. */
		defaultValue: FormControl<any | null | undefined>,

		/** A brief description of the Parameter. */
		description: FormControl<string | null | undefined>,

		/** Name of the Parameter. */
		name: FormControl<string | null | undefined>,

		/** Specifies whether a null value is allowed. */
		nullable: FormControl<boolean | null | undefined>,
	}
	export function CreateInputParameterFormGroup() {
		return new FormGroup<InputParameterFormProperties>({
			additionalDetails: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			dataType: new FormControl<JsonSchemaJdbcType | null | undefined>(undefined),
			defaultValue: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nullable: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Result Metadata message contains metadata about the result returned after executing an Action. */
	export interface ResultMetadata {

		/** The data type of the metadata field */
		dataType?: JsonSchemaJdbcType | null;

		/** A brief description of the metadata field. */
		description?: string | null;

		/** JsonSchema representation of schema metadata */
		jsonSchema?: JsonSchema;

		/** Name of the metadata field. */
		name?: string | null;
	}

	/** Result Metadata message contains metadata about the result returned after executing an Action. */
	export interface ResultMetadataFormProperties {

		/** The data type of the metadata field */
		dataType: FormControl<JsonSchemaJdbcType | null | undefined>,

		/** A brief description of the metadata field. */
		description: FormControl<string | null | undefined>,

		/** Name of the metadata field. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateResultMetadataFormGroup() {
		return new FormGroup<ResultMetadataFormProperties>({
			dataType: new FormControl<JsonSchemaJdbcType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response containing status of the connector for readiness prober. */
	export interface CheckReadinessResponse {
		status?: string | null;
	}

	/** Response containing status of the connector for readiness prober. */
	export interface CheckReadinessResponseFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreateCheckReadinessResponseFormGroup() {
		return new FormGroup<CheckReadinessResponseFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of the connector. */
	export interface CheckStatusResponse {

		/** When the connector is not in ACTIVE state, the description must be populated to specify the reason why it's not in ACTIVE state. */
		description?: string | null;

		/** State of the connector. */
		state?: CheckStatusResponseState | null;
	}

	/** The status of the connector. */
	export interface CheckStatusResponseFormProperties {

		/** When the connector is not in ACTIVE state, the description must be populated to specify the reason why it's not in ACTIVE state. */
		description: FormControl<string | null | undefined>,

		/** State of the connector. */
		state: FormControl<CheckStatusResponseState | null | undefined>,
	}
	export function CreateCheckStatusResponseFormGroup() {
		return new FormGroup<CheckStatusResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CheckStatusResponseState | null | undefined>(undefined),
		});

	}

	export enum CheckStatusResponseState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', ERROR = 'ERROR', AUTH_ERROR = 'AUTH_ERROR' }


	/** Time window specified for daily operations. */
	export interface DailyCycle {

		/** Output only. Duration of the time window, set by service producer. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Time window specified for daily operations. */
	export interface DailyCycleFormProperties {

		/** Output only. Duration of the time window, set by service producer. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateDailyCycleFormGroup() {
		return new FormGroup<DailyCycleFormProperties>({
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours?: number | null;

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes?: number | null;

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hours: FormControl<number | null | undefined>,

		/**
		 * Minutes of hour of day. Must be from 0 to 59.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minutes: FormControl<number | null | undefined>,

		/**
		 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date. */
	export interface DenyMaintenancePeriod {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		time?: TimeOfDay;
	}

	/** DenyMaintenancePeriod definition. Maintenance is forbidden within the deny period. The start_date must be less than the end_date. */
	export interface DenyMaintenancePeriodFormProperties {
	}
	export function CreateDenyMaintenancePeriodFormGroup() {
		return new FormGroup<DenyMaintenancePeriodFormProperties>({
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** 'Entity row'/ 'Entity' refers to a single row of an entity type. */
	export interface Entity {

		/** Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field. */
		fields?: {[id: string]: any };

		/** Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id} */
		name?: string | null;
	}

	/** 'Entity row'/ 'Entity' refers to a single row of an entity type. */
	export interface EntityFormProperties {

		/** Fields of the entity. The key is name of the field and the value contains the applicable `google.protobuf.Value` entry for this field. */
		fields: FormControl<{[id: string]: any } | null | undefined>,

		/** Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id} */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			fields: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** EntityType message contains metadata information about a single entity type present in the external system. */
	export interface EntityType {

		/** List containing metadata information about each field of the entity type. */
		fields?: Array<Field>;

		/** JsonSchema representation of schema metadata */
		jsonSchema?: JsonSchema;

		/** The name of the entity type. */
		name?: string | null;
	}

	/** EntityType message contains metadata information about a single entity type present in the external system. */
	export interface EntityTypeFormProperties {

		/** The name of the entity type. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateEntityTypeFormGroup() {
		return new FormGroup<EntityTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message contains EntityType's Field metadata. */
	export interface Field {

		/** The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields. */
		additionalDetails?: {[id: string]: any };

		/** The data type of the Field. */
		dataType?: JsonSchemaJdbcType | null;

		/** The following field specifies the default value of the Field provided by the external system if a value is not provided. */
		defaultValue?: any;

		/** A brief description of the Field. */
		description?: string | null;

		/** JsonSchema representation of schema metadata */
		jsonSchema?: JsonSchema;

		/** The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity. */
		key?: boolean | null;

		/** Name of the Field. */
		name?: string | null;

		/** Specifies whether a null value is allowed. */
		nullable?: boolean | null;
		reference?: Reference;
	}

	/** Message contains EntityType's Field metadata. */
	export interface FieldFormProperties {

		/** The following map contains fields that are not explicitly mentioned above,this give connectors the flexibility to add new metadata fields. */
		additionalDetails: FormControl<{[id: string]: any } | null | undefined>,

		/** The data type of the Field. */
		dataType: FormControl<JsonSchemaJdbcType | null | undefined>,

		/** The following field specifies the default value of the Field provided by the external system if a value is not provided. */
		defaultValue: FormControl<any | null | undefined>,

		/** A brief description of the Field. */
		description: FormControl<string | null | undefined>,

		/** The following boolean field specifies if the current Field acts as a primary key or id if the parent is of type entity. */
		key: FormControl<boolean | null | undefined>,

		/** Name of the Field. */
		name: FormControl<string | null | undefined>,

		/** Specifies whether a null value is allowed. */
		nullable: FormControl<boolean | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			additionalDetails: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			dataType: new FormControl<JsonSchemaJdbcType | null | undefined>(undefined),
			defaultValue: new FormControl<any | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			nullable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Reference {

		/** Name of the reference field. */
		name?: string | null;

		/** Name of reference entity type. */
		type?: string | null;
	}
	export interface ReferenceFormProperties {

		/** Name of the reference field. */
		name: FormControl<string | null | undefined>,

		/** Name of reference entity type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateReferenceFormGroup() {
		return new FormGroup<ReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ExchangeAuthCodeRequest currently includes no fields. */
	export interface ExchangeAuthCodeRequest {
	}

	/** ExchangeAuthCodeRequest currently includes no fields. */
	export interface ExchangeAuthCodeRequestFormProperties {
	}
	export function CreateExchangeAuthCodeRequestFormGroup() {
		return new FormGroup<ExchangeAuthCodeRequestFormProperties>({
		});

	}


	/** ExchangeAuthCodeResponse includes the returned access token and its associated credentials. */
	export interface ExchangeAuthCodeResponse {

		/** AccessCredentials includes the OAuth access token, and the other fields returned along with it. */
		accessCredentials?: AccessCredentials;
	}

	/** ExchangeAuthCodeResponse includes the returned access token and its associated credentials. */
	export interface ExchangeAuthCodeResponseFormProperties {
	}
	export function CreateExchangeAuthCodeResponseFormGroup() {
		return new FormGroup<ExchangeAuthCodeResponseFormProperties>({
		});

	}


	/** Request message for ActionService.ExecuteAction */
	export interface ExecuteActionRequest {

		/** Parameters for executing the action. The parameters can be key/value pairs or nested structs. */
		parameters?: {[id: string]: any };
	}

	/** Request message for ActionService.ExecuteAction */
	export interface ExecuteActionRequestFormProperties {

		/** Parameters for executing the action. The parameters can be key/value pairs or nested structs. */
		parameters: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateExecuteActionRequestFormGroup() {
		return new FormGroup<ExecuteActionRequestFormProperties>({
			parameters: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Response message for ActionService.ExecuteAction */
	export interface ExecuteActionResponse {

		/** In the case of successful invocation of the specified action, the results Struct contains values based on the response of the action invoked. 1. If the action execution produces any entities as a result, they are returned as an array of Structs with the 'key' being the field name and the 'value' being the value of that field in each result row. { 'results': [{'key': 'value'}, ...] } */
		results?: Array<string>;
	}

	/** Response message for ActionService.ExecuteAction */
	export interface ExecuteActionResponseFormProperties {
	}
	export function CreateExecuteActionResponseFormGroup() {
		return new FormGroup<ExecuteActionResponseFormProperties>({
		});

	}


	/** An execute sql query request containing the query and the connection to execute it on. */
	export interface ExecuteSqlQueryRequest {

		/** A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`. */
		query?: Query;
	}

	/** An execute sql query request containing the query and the connection to execute it on. */
	export interface ExecuteSqlQueryRequestFormProperties {
	}
	export function CreateExecuteSqlQueryRequestFormGroup() {
		return new FormGroup<ExecuteSqlQueryRequestFormProperties>({
		});

	}


	/** A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`. */
	export interface Query {

		/** Sets the limit for the maximum number of rows returned after the query execution. */
		maxRows?: string | null;

		/** Required. Sql query to execute. */
		query?: string | null;

		/** In the struct, the value corresponds to the value of query parameter and date type corresponds to the date type of the query parameter. */
		queryParameters?: Array<QueryParameter>;

		/** Sets the number of seconds the driver will wait for a query to execute. */
		timeout?: string | null;
	}

	/** A wrapper around the SQL query statement. This is needed so that the JSON representation of ExecuteSqlQueryRequest has the following format: `{"query":"select *"}`. */
	export interface QueryFormProperties {

		/** Sets the limit for the maximum number of rows returned after the query execution. */
		maxRows: FormControl<string | null | undefined>,

		/** Required. Sql query to execute. */
		query: FormControl<string | null | undefined>,

		/** Sets the number of seconds the driver will wait for a query to execute. */
		timeout: FormControl<string | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			maxRows: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			timeout: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Query parameter definition */
	export interface QueryParameter {
		dataType?: JsonSchemaJdbcType | null;
		value?: any;
	}

	/** Query parameter definition */
	export interface QueryParameterFormProperties {
		dataType: FormControl<JsonSchemaJdbcType | null | undefined>,
		value: FormControl<any | null | undefined>,
	}
	export function CreateQueryParameterFormGroup() {
		return new FormGroup<QueryParameterFormProperties>({
			dataType: new FormControl<JsonSchemaJdbcType | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** A response returned by the connection after executing the sql query. */
	export interface ExecuteSqlQueryResponse {

		/** In the case of successful execution of the query the response contains results returned by the external system. For example, the result rows of the query are contained in the 'results' Struct list - "results": [ { "field1": "val1", "field2": "val2",.. },.. ] Each Struct row can contain fields any type of like nested Structs or lists. */
		results?: Array<string>;
	}

	/** A response returned by the connection after executing the sql query. */
	export interface ExecuteSqlQueryResponseFormProperties {
	}
	export function CreateExecuteSqlQueryResponseFormGroup() {
		return new FormGroup<ExecuteSqlQueryResponseFormProperties>({
		});

	}


	/** Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange */
	export interface Instance {

		/** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
		consumerDefinedName?: string | null;

		/** Output only. Timestamp when the resource was created. */
		createTime?: string | null;

		/** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
		instanceType?: string | null;

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels?: {[id: string]: string };

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set. */
		maintenancePolicyNames?: {[id: string]: string };

		/** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
		maintenanceSchedules?: {[id: string]: MaintenanceSchedule };

		/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
		maintenanceSettings?: MaintenanceSettings;

		/** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
		name?: string | null;

		/** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
		notificationParameters?: {[id: string]: NotificationParameter };

		/** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
		producerMetadata?: {[id: string]: string };

		/** Output only. The list of data plane resources provisioned for this instance, e.g. compute VMs. See go/get-instance-metadata. */
		provisionedResources?: Array<ProvisionedResource>;

		/** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
		slmInstanceTemplate?: string | null;

		/** SloMetadata contains resources required for proper SLO classification of the instance. */
		sloMetadata?: SloMetadata;

		/** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
		softwareVersions?: {[id: string]: string };

		/** Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). */
		state?: InstanceState | null;

		/** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
		tenantProjectId?: string | null;

		/** Output only. Timestamp when the resource was last modified. */
		updateTime?: string | null;
	}

	/** Instance represents the interface for SLM services to actuate the state of control plane resources. Example Instance in JSON, where consumer-project-number=123456, producer-project-id=cloud-sql: ```json Instance: { "name": "projects/123456/locations/us-east1/instances/prod-instance", "create_time": { "seconds": 1526406431, }, "labels": { "env": "prod", "foo": "bar" }, "state": READY, "software_versions": { "software_update": "cloud-sql-09-28-2018", }, "maintenance_policy_names": { "UpdatePolicy": "projects/123456/locations/us-east1/maintenancePolicies/prod-update-policy", } "tenant_project_id": "cloud-sql-test-tenant", "producer_metadata": { "cloud-sql-tier": "basic", "cloud-sql-instance-size": "1G", }, "provisioned_resources": [ { "resource-type": "compute-instance", "resource-url": "https://www.googleapis.com/compute/v1/projects/cloud-sql/zones/us-east1-b/instances/vm-1", } ], "maintenance_schedules": { "csa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, }, "ncsa_rollout": { "start_time": { "seconds": 1526406431, }, "end_time": { "seconds": 1535406431, }, } }, "consumer_defined_name": "my-sql-instance1", } ``` LINT.IfChange */
	export interface InstanceFormProperties {

		/** consumer_defined_name is the name of the instance set by the service consumers. Generally this is different from the `name` field which reperesents the system-assigned id of the instance which the service consumers do not recognize. This is a required field for tenants onboarding to Maintenance Window notifications (go/slm-rollout-maintenance-policies#prerequisites). */
		consumerDefinedName: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. The instance_type of this instance of format: projects/{project_number}/locations/{location_id}/instanceTypes/{instance_type_id}. Instance Type represents a high-level tier or SKU of the service that this instance belong to. When enabled(eg: Maintenance Rollout), Rollout uses 'instance_type' along with 'software_versions' to determine whether instance needs an update or not. */
		instanceType: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the referenced policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_settings.maintenance_policies is set. */
		maintenancePolicyNames: FormControl<{[id: string]: string } | null | undefined>,

		/** The MaintenanceSchedule contains the scheduling information of published maintenance schedule with same key as software_versions. */
		maintenanceSchedules: FormControl<{[id: string]: MaintenanceSchedule } | null | undefined>,

		/** Unique name of the resource. It uses the form: `projects/{project_number}/locations/{location_id}/instances/{instance_id}` Note: This name is passed, stored and logged across the rollout system. So use of consumer project_id or any other consumer PII in the name is strongly discouraged for wipeout (go/wipeout) compliance. See go/elysium/project_ids#storage-guidance for more details. */
		name: FormControl<string | null | undefined>,

		/** Optional. notification_parameter are information that service producers may like to include that is not relevant to Rollout. This parameter will only be passed to Gamma and Cloud Logging for notification/logging purpose. */
		notificationParameters: FormControl<{[id: string]: NotificationParameter } | null | undefined>,

		/** Output only. Custom string attributes used primarily to expose producer-specific information in monitoring dashboards. See go/get-instance-metadata. */
		producerMetadata: FormControl<{[id: string]: string } | null | undefined>,

		/** Link to the SLM instance template. Only populated when updating SLM instances via SSA's Actuation service adaptor. Service producers with custom control plane (e.g. Cloud SQL) doesn't need to populate this field. Instead they should use software_versions. */
		slmInstanceTemplate: FormControl<string | null | undefined>,

		/** Software versions that are used to deploy this instance. This can be mutated by rollout services. */
		softwareVersions: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. Current lifecycle state of the resource (e.g. if it's being created or ready to use). */
		state: FormControl<InstanceState | null | undefined>,

		/** Output only. ID of the associated GCP tenant project. See go/get-instance-metadata. */
		tenantProjectId: FormControl<string | null | undefined>,

		/** Output only. Timestamp when the resource was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			consumerDefinedName: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maintenancePolicyNames: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			maintenanceSchedules: new FormControl<{[id: string]: MaintenanceSchedule } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notificationParameters: new FormControl<{[id: string]: NotificationParameter } | null | undefined>(undefined),
			producerMetadata: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			slmInstanceTemplate: new FormControl<string | null | undefined>(undefined),
			softwareVersions: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			state: new FormControl<InstanceState | null | undefined>(undefined),
			tenantProjectId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule */
	export interface MaintenanceSchedule {

		/** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
		canReschedule?: boolean | null;

		/** The scheduled end time for the maintenance. */
		endTime?: string | null;

		/** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
		rolloutManagementPolicy?: string | null;

		/** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
		scheduleDeadlineTime?: string | null;

		/** The scheduled start time for the maintenance. */
		startTime?: string | null;
	}

	/** Maintenance schedule which is exposed to customer and potentially end user, indicating published upcoming future maintenance schedule */
	export interface MaintenanceScheduleFormProperties {

		/** This field is deprecated, and will be always set to true since reschedule can happen multiple times now. This field should not be removed until all service producers remove this for their customers. */
		canReschedule: FormControl<boolean | null | undefined>,

		/** The scheduled end time for the maintenance. */
		endTime: FormControl<string | null | undefined>,

		/** The rollout management policy this maintenance schedule is associated with. When doing reschedule update request, the reschedule should be against this given policy. */
		rolloutManagementPolicy: FormControl<string | null | undefined>,

		/** schedule_deadline_time is the time deadline any schedule start time cannot go beyond, including reschedule. It's normally the initial schedule start time plus maintenance window length (1 day or 1 week). Maintenance cannot be scheduled to start beyond this deadline. */
		scheduleDeadlineTime: FormControl<string | null | undefined>,

		/** The scheduled start time for the maintenance. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenanceScheduleFormGroup() {
		return new FormGroup<MaintenanceScheduleFormProperties>({
			canReschedule: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			rolloutManagementPolicy: new FormControl<string | null | undefined>(undefined),
			scheduleDeadlineTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
	export interface MaintenanceSettings {

		/** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
		exclude?: boolean | null;

		/** Optional. If the update call is triggered from rollback, set the value as true. */
		isRollback?: boolean | null;

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
		maintenancePolicies?: {[id: string]: MaintenancePolicy };
	}

	/** Maintenance settings associated with instance. Allows service producers and end users to assign settings that controls maintenance on this instance. */
	export interface MaintenanceSettingsFormProperties {

		/** Optional. Exclude instance from maintenance. When true, rollout service will not attempt maintenance on the instance. Rollout service will include the instance in reported rollout progress as not attempted. */
		exclude: FormControl<boolean | null | undefined>,

		/** Optional. If the update call is triggered from rollback, set the value as true. */
		isRollback: FormControl<boolean | null | undefined>,

		/** Optional. The MaintenancePolicies that have been attached to the instance. The key must be of the type name of the oneof policy name defined in MaintenancePolicy, and the embedded policy must define the same policy type. For details, please refer to go/mr-user-guide. Should not be set if maintenance_policy_names is set. If only the name is needed, then only populate MaintenancePolicy.name. */
		maintenancePolicies: FormControl<{[id: string]: MaintenancePolicy } | null | undefined>,
	}
	export function CreateMaintenanceSettingsFormGroup() {
		return new FormGroup<MaintenanceSettingsFormProperties>({
			exclude: new FormControl<boolean | null | undefined>(undefined),
			isRollback: new FormControl<boolean | null | undefined>(undefined),
			maintenancePolicies: new FormControl<{[id: string]: MaintenancePolicy } | null | undefined>(undefined),
		});

	}


	/** LINT.IfChange Defines policies to service maintenance events. */
	export interface MaintenancePolicy {

		/** Output only. The time when the resource was created. */
		createTime?: string | null;

		/** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description?: string | null;

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels?: {[id: string]: string };

		/** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
		name?: string | null;

		/** Optional. The state of the policy. */
		state?: MaintenancePolicyState | null;

		/** Maintenance policy applicable to instance updates. */
		updatePolicy?: UpdatePolicy;

		/** Output only. The time when the resource was updated. */
		updateTime?: string | null;
	}

	/** LINT.IfChange Defines policies to service maintenance events. */
	export interface MaintenancePolicyFormProperties {

		/** Output only. The time when the resource was created. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512. */
		description: FormControl<string | null | undefined>,

		/** Optional. Resource labels to represent user provided metadata. Each label is a key-value pair, where both the key and the value are arbitrary strings provided by the user. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. MaintenancePolicy name using the form: `projects/{project_id}/locations/{location_id}/maintenancePolicies/{maintenance_policy_id}` where {project_id} refers to a GCP consumer project ID, {location_id} refers to a GCP region/zone, {maintenance_policy_id} must be 1-63 characters long and match the regular expression `[a-z0-9]([-a-z0-9]*[a-z0-9])?`. */
		name: FormControl<string | null | undefined>,

		/** Optional. The state of the policy. */
		state: FormControl<MaintenancePolicyState | null | undefined>,

		/** Output only. The time when the resource was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateMaintenancePolicyFormGroup() {
		return new FormGroup<MaintenancePolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<MaintenancePolicyState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MaintenancePolicyState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', READY = 'READY', DELETING = 'DELETING' }


	/** Maintenance policy applicable to instance updates. */
	export interface UpdatePolicy {

		/** Optional. Relative scheduling channel applied to resource. */
		channel?: UpdatePolicyChannel | null;

		/** Deny Maintenance Period that is applied to resource to indicate when maintenance is forbidden. The protocol supports zero-to-many such periods, but the current SLM Rollout implementation only supports zero-to-one. */
		denyMaintenancePeriods?: Array<DenyMaintenancePeriod>;

		/** MaintenanceWindow definition. */
		window?: MaintenanceWindow;
	}

	/** Maintenance policy applicable to instance updates. */
	export interface UpdatePolicyFormProperties {

		/** Optional. Relative scheduling channel applied to resource. */
		channel: FormControl<UpdatePolicyChannel | null | undefined>,
	}
	export function CreateUpdatePolicyFormGroup() {
		return new FormGroup<UpdatePolicyFormProperties>({
			channel: new FormControl<UpdatePolicyChannel | null | undefined>(undefined),
		});

	}

	export enum UpdatePolicyChannel { UPDATE_CHANNEL_UNSPECIFIED = 'UPDATE_CHANNEL_UNSPECIFIED', EARLIER = 'EARLIER', LATER = 'LATER', WEEK1 = 'WEEK1', WEEK2 = 'WEEK2', WEEK5 = 'WEEK5' }


	/** MaintenanceWindow definition. */
	export interface MaintenanceWindow {

		/** Time window specified for daily operations. */
		dailyCycle?: DailyCycle;

		/** Time window specified for weekly operations. */
		weeklyCycle?: WeeklyCycle;
	}

	/** MaintenanceWindow definition. */
	export interface MaintenanceWindowFormProperties {
	}
	export function CreateMaintenanceWindowFormGroup() {
		return new FormGroup<MaintenanceWindowFormProperties>({
		});

	}


	/** Time window specified for weekly operations. */
	export interface WeeklyCycle {

		/** User can specify multiple windows in a week. Minimum of 1 window. */
		schedule?: Array<Schedule>;
	}

	/** Time window specified for weekly operations. */
	export interface WeeklyCycleFormProperties {
	}
	export function CreateWeeklyCycleFormGroup() {
		return new FormGroup<WeeklyCycleFormProperties>({
		});

	}


	/** Configure the schedule. */
	export interface Schedule {

		/** Allows to define schedule that runs specified day of the week. */
		day?: ScheduleDay | null;

		/** Output only. Duration of the time window, set by service producer. */
		duration?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Configure the schedule. */
	export interface ScheduleFormProperties {

		/** Allows to define schedule that runs specified day of the week. */
		day: FormControl<ScheduleDay | null | undefined>,

		/** Output only. Duration of the time window, set by service producer. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			day: new FormControl<ScheduleDay | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduleDay { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


	/** Contains notification related data. */
	export interface NotificationParameter {

		/** Optional. Array of string values. e.g. instance's replica information. */
		values?: Array<string>;
	}

	/** Contains notification related data. */
	export interface NotificationParameterFormProperties {
	}
	export function CreateNotificationParameterFormGroup() {
		return new FormGroup<NotificationParameterFormProperties>({
		});

	}


	/** Describes provisioned dataplane resources. */
	export interface ProvisionedResource {

		/** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
		resourceType?: string | null;

		/** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
		resourceUrl?: string | null;
	}

	/** Describes provisioned dataplane resources. */
	export interface ProvisionedResourceFormProperties {

		/** Type of the resource. This can be either a GCP resource or a custom one (e.g. another cloud provider's VM). For GCP compute resources use singular form of the names listed in GCP compute API documentation (https://cloud.google.com/compute/docs/reference/rest/v1/), prefixed with 'compute-', for example: 'compute-instance', 'compute-disk', 'compute-autoscaler'. */
		resourceType: FormControl<string | null | undefined>,

		/** URL identifying the resource, e.g. "https://www.googleapis.com/compute/v1/projects/...)". */
		resourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateProvisionedResourceFormGroup() {
		return new FormGroup<ProvisionedResourceFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** SloMetadata contains resources required for proper SLO classification of the instance. */
	export interface SloMetadata {

		/** Optional. List of nodes. Some producers need to use per-node metadata to calculate SLO. This field allows such producers to publish per-node SLO meta data, which will be consumed by SSA Eligibility Exporter and published in the form of per node metric to Monarch. */
		nodes?: Array<NodeSloMetadata>;

		/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
		perSliEligibility?: PerSliSloEligibility;

		/** Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. */
		tier?: string | null;
	}

	/** SloMetadata contains resources required for proper SLO classification of the instance. */
	export interface SloMetadataFormProperties {

		/** Name of the SLO tier the Instance belongs to. This name will be expected to match the tiers specified in the service SLO configuration. Field is mandatory and must not be empty. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSloMetadataFormGroup() {
		return new FormGroup<SloMetadataFormProperties>({
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information. */
	export interface NodeSloMetadata {

		/** The location of the node, if different from instance location. */
		location?: string | null;

		/** The id of the node. This should be equal to SaasInstanceNode.node_id. */
		nodeId?: string | null;

		/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
		perSliEligibility?: PerSliSloEligibility;
	}

	/** Node information for custom per-node SLO implementations. SSA does not support per-node SLO, but producers can populate per-node information in SloMetadata for custom precomputations. SSA Eligibility Exporter will emit per-node metric based on this information. */
	export interface NodeSloMetadataFormProperties {

		/** The location of the node, if different from instance location. */
		location: FormControl<string | null | undefined>,

		/** The id of the node. This should be equal to SaasInstanceNode.node_id. */
		nodeId: FormControl<string | null | undefined>,
	}
	export function CreateNodeSloMetadataFormGroup() {
		return new FormGroup<NodeSloMetadataFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			nodeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
	export interface PerSliSloEligibility {

		/** An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. */
		eligibilities?: {[id: string]: SloEligibility };
	}

	/** PerSliSloEligibility is a mapping from an SLI name to eligibility. */
	export interface PerSliSloEligibilityFormProperties {

		/** An entry in the eligibilities map specifies an eligibility for a particular SLI for the given instance. The SLI key in the name must be a valid SLI name specified in the Eligibility Exporter binary flags otherwise an error will be emitted by Eligibility Exporter and the oncaller will be alerted. If an SLI has been defined in the binary flags but the eligibilities map does not contain it, the corresponding SLI time series will not be emitted by the Eligibility Exporter. This ensures a smooth rollout and compatibility between the data produced by different versions of the Eligibility Exporters. If eligibilities map contains a key for an SLI which has not been declared in the binary flags, there will be an error message emitted in the Eligibility Exporter log and the metric for the SLI in question will not be emitted. */
		eligibilities: FormControl<{[id: string]: SloEligibility } | null | undefined>,
	}
	export function CreatePerSliSloEligibilityFormGroup() {
		return new FormGroup<PerSliSloEligibilityFormProperties>({
			eligibilities: new FormControl<{[id: string]: SloEligibility } | null | undefined>(undefined),
		});

	}


	/** SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason. */
	export interface SloEligibility {

		/** Whether an instance is eligible or ineligible. */
		eligible?: boolean | null;

		/** User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. */
		reason?: string | null;
	}

	/** SloEligibility is a tuple containing eligibility value: true if an instance is eligible for SLO calculation or false if it should be excluded from all SLO-related calculations along with a user-defined reason. */
	export interface SloEligibilityFormProperties {

		/** Whether an instance is eligible or ineligible. */
		eligible: FormControl<boolean | null | undefined>,

		/** User-defined reason for the current value of instance eligibility. Usually, this can be directly mapped to the internal state. An empty reason is allowed. */
		reason: FormControl<string | null | undefined>,
	}
	export function CreateSloEligibilityFormGroup() {
		return new FormGroup<SloEligibilityFormProperties>({
			eligible: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InstanceState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', UPDATING = 'UPDATING', REPAIRING = 'REPAIRING', DELETING = 'DELETING', ERROR = 'ERROR' }


	/** Response message for ActionService.ListActions */
	export interface ListActionsResponse {

		/** List of action metadata. */
		actions?: Array<Action>;

		/** Next page token if more actions available. */
		nextPageToken?: string | null;

		/** List of actions which contain unsupported Datatypes. Check datatype.proto for more information. */
		unsupportedActionNames?: Array<string>;
	}

	/** Response message for ActionService.ListActions */
	export interface ListActionsResponseFormProperties {

		/** Next page token if more actions available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListActionsResponseFormGroup() {
		return new FormGroup<ListActionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for EntityService.ListEntities */
	export interface ListEntitiesResponse {

		/** List containing entity rows. */
		entities?: Array<Entity>;

		/** Next page token if more records are available. */
		nextPageToken?: string | null;
	}

	/** Response message for EntityService.ListEntities */
	export interface ListEntitiesResponseFormProperties {

		/** Next page token if more records are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntitiesResponseFormGroup() {
		return new FormGroup<ListEntitiesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for EntityService.ListEntityTypes */
	export interface ListEntityTypesResponse {

		/** Next page token if more entity types available. */
		nextPageToken?: string | null;

		/** List of metadata related to all entity types. */
		types?: Array<EntityType>;

		/** List of entity type names which contain unsupported Datatypes. Check datatype.proto for more information. */
		unsupportedTypeNames?: Array<string>;
	}

	/** Response message for EntityService.ListEntityTypes */
	export interface ListEntityTypesResponseFormProperties {

		/** Next page token if more entity types available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntityTypesResponseFormGroup() {
		return new FormGroup<ListEntityTypesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** RefreshAccessTokenRequest currently includes no fields. */
	export interface RefreshAccessTokenRequest {
	}

	/** RefreshAccessTokenRequest currently includes no fields. */
	export interface RefreshAccessTokenRequestFormProperties {
	}
	export function CreateRefreshAccessTokenRequestFormGroup() {
		return new FormGroup<RefreshAccessTokenRequestFormProperties>({
		});

	}


	/** RefreshAccessTokenResponse includes the returned access token and its associated credentials. */
	export interface RefreshAccessTokenResponse {

		/** AccessCredentials includes the OAuth access token, and the other fields returned along with it. */
		accessCredentials?: AccessCredentials;
	}

	/** RefreshAccessTokenResponse includes the returned access token and its associated credentials. */
	export interface RefreshAccessTokenResponseFormProperties {
	}
	export function CreateRefreshAccessTokenResponseFormGroup() {
		return new FormGroup<RefreshAccessTokenResponseFormProperties>({
		});

	}


	/** Response message for EntityService.UpdateEntitiesWithConditions */
	export interface UpdateEntitiesWithConditionsResponse {

		/** Response returned by the external system. */
		response?: {[id: string]: any };
	}

	/** Response message for EntityService.UpdateEntitiesWithConditions */
	export interface UpdateEntitiesWithConditionsResponseFormProperties {

		/** Response returned by the external system. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateUpdateEntitiesWithConditionsResponseFormGroup() {
		return new FormGroup<UpdateEntitiesWithConditionsResponseFormProperties>({
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select * from Account a, Order o where a.Id = o.AccountId'.
		 * Post v2/{connection}:executeSqlQuery
		 * @param {string} connection Required. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection}
		 * @return {ExecuteSqlQueryResponse} Successful response
		 */
		Connectors_projects_locations_connections_executeSqlQuery(connection: string, requestBody: ExecuteSqlQueryRequest): Observable<ExecuteSqlQueryResponse> {
			return this.http.post<ExecuteSqlQueryResponse>(this.baseUri + 'v2/' + (connection == null ? '' : encodeURIComponent(connection)) + ':executeSqlQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes entities based on conditions specified in the request and not on entity id.
		 * Post v2/{entityType}/entities:deleteEntitiesWithConditions
		 * @param {string} entityType Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}
		 * @param {string} conditions Required. Conditions to be used when deleting entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.
		 * @return {Empty} Successful response
		 */
		Connectors_projects_locations_connections_entityTypes_entities_deleteEntitiesWithConditions(entityType: string, conditions: string | null | undefined): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2/' + (entityType == null ? '' : encodeURIComponent(entityType)) + '/entities:deleteEntitiesWithConditions&conditions=' + (conditions == null ? '' : encodeURIComponent(conditions)), null, {});
		}

		/**
		 * Updates entities based on conditions specified in the request and not on entity id.
		 * Post v2/{entityType}/entities:updateEntitiesWithConditions
		 * @param {string} entityType Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}
		 * @param {string} conditions Required. Conditions to be used when updating entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be.
		 * @return {UpdateEntitiesWithConditionsResponse} Successful response
		 */
		Connectors_projects_locations_connections_entityTypes_entities_updateEntitiesWithConditions(entityType: string, conditions: string | null | undefined, requestBody: Entity): Observable<UpdateEntitiesWithConditionsResponse> {
			return this.http.post<UpdateEntitiesWithConditionsResponse>(this.baseUri + 'v2/' + (entityType == null ? '' : encodeURIComponent(entityType)) + '/entities:updateEntitiesWithConditions&conditions=' + (conditions == null ? '' : encodeURIComponent(conditions)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing entity row matching the entity type and entity id specified in the request.
		 * Delete v2/{name}
		 * @param {string} name Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}
		 * @return {Empty} Successful response
		 */
		Connectors_projects_locations_connections_entityTypes_entities_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a single entity row matching the entity type and entity id specified in the request.
		 * Get v2/{name}
		 * @param {string} name Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}
		 * @return {Entity} Successful response
		 */
		Connectors_projects_locations_connections_entityTypes_entities_get(name: string): Observable<Entity> {
			return this.http.get<Entity>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.
		 * Patch v2/{name}
		 * @param {string} name Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id}
		 * @return {Entity} Successful response
		 */
		Connectors_projects_locations_connections_entityTypes_entities_patch(name: string, requestBody: Entity): Observable<Entity> {
			return this.http.patch<Entity>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reports readiness status of the connector. Similar logic to GetStatus but modified for kubernetes health check to understand.
		 * Get v2/{name}:checkReadiness
		 * @return {CheckReadinessResponse} Successful response
		 */
		Connectors_projects_locations_connections_checkReadiness(name: string): Observable<CheckReadinessResponse> {
			return this.http.get<CheckReadinessResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':checkReadiness', {});
		}

		/**
		 * Reports the status of the connection. Note that when the connection is in a state that is not ACTIVE, the implementation of this RPC method must return a Status with the corresponding State instead of returning a gRPC status code that is not "OK", which indicates that ConnectionStatus itself, not the connection, failed.
		 * Get v2/{name}:checkStatus
		 * @return {CheckStatusResponse} Successful response
		 */
		Connectors_projects_locations_connections_checkStatus(name: string): Observable<CheckStatusResponse> {
			return this.http.get<CheckStatusResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':checkStatus', {});
		}

		/**
		 * ExchangeAuthCode exchanges the OAuth authorization code (and other necessary data) for an access token (and associated credentials).
		 * Post v2/{name}:exchangeAuthCode
		 * @return {ExchangeAuthCodeResponse} Successful response
		 */
		Connectors_projects_locations_connections_exchangeAuthCode(name: string, requestBody: ExchangeAuthCodeRequest): Observable<ExchangeAuthCodeResponse> {
			return this.http.post<ExchangeAuthCodeResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':exchangeAuthCode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.
		 * Post v2/{name}:execute
		 * @param {string} name Required. Resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}/actions/{action}
		 * @return {ExecuteActionResponse} Successful response
		 */
		Connectors_projects_locations_connections_actions_execute(name: string, requestBody: ExecuteActionRequest): Observable<ExecuteActionResponse> {
			return this.http.post<ExecuteActionResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':execute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * RefreshAccessToken exchanges the OAuth refresh token (and other necessary data) for a new access token (and new associated credentials).
		 * Post v2/{name}:refreshAccessToken
		 * @return {RefreshAccessTokenResponse} Successful response
		 */
		Connectors_projects_locations_connections_refreshAccessToken(name: string, requestBody: RefreshAccessTokenRequest): Observable<RefreshAccessTokenResponse> {
			return this.http.post<RefreshAccessTokenResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':refreshAccessToken', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the schema of all the actions supported by the connector.
		 * Get v2/{parent}/actions
		 * @param {string} parent Required. Parent resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}
		 * @param {number} pageSize Number of Actions to return. Defaults to 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token, return from a previous ListActions call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of actions.
		 * @param {Connectors_projects_locations_connections_actions_listView} view Specifies which fields of the Action are returned in the response.
		 * @return {ListActionsResponse} Successful response
		 */
		Connectors_projects_locations_connections_actions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Connectors_projects_locations_connections_actions_listView | null | undefined): Observable<ListActionsResponse> {
			return this.http.get<ListActionsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/actions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.
		 * Get v2/{parent}/entities
		 * @param {string} parent Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}
		 * @param {string} conditions Conditions to be used when listing entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported.
		 * @param {number} pageSize Number of entity rows to return. Defaults page size = 25. Max page size = 200.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token value if available from a previous request.
		 * @param {Array<string>} sortBy List of 'sort_by' columns to use when returning the results.
		 * @return {ListEntitiesResponse} Successful response
		 */
		Connectors_projects_locations_connections_entityTypes_entities_list(parent: string, conditions: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, sortBy: Array<string> | null | undefined): Observable<ListEntitiesResponse> {
			return this.http.get<ListEntitiesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entities&conditions=' + (conditions == null ? '' : encodeURIComponent(conditions)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + sortBy?.map(z => `sortBy=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.
		 * Post v2/{parent}/entities
		 * @param {string} parent Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}
		 * @return {Entity} Successful response
		 */
		Connectors_projects_locations_connections_entityTypes_entities_create(parent: string, requestBody: Entity): Observable<Entity> {
			return this.http.post<Entity>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entities', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists metadata related to all entity types present in the external system.
		 * Get v2/{parent}/entityTypes
		 * @param {string} parent Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}
		 * @param {number} pageSize Number of entity types to return. Defaults to 25.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken Page token, return from a previous ListEntityTypes call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of entity types.
		 * @param {Connectors_projects_locations_connections_entityTypes_listView} view Specifies which fields of the Entity Type are returned in the response.
		 * @return {ListEntityTypesResponse} Successful response
		 */
		Connectors_projects_locations_connections_entityTypes_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Connectors_projects_locations_connections_entityTypes_listView | null | undefined): Observable<ListEntityTypesResponse> {
			return this.http.get<ListEntityTypesResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/entityTypes&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}
	}

	export enum Connectors_projects_locations_connections_actions_listView { ACTION_VIEW_UNSPECIFIED = 'ACTION_VIEW_UNSPECIFIED', ACTION_VIEW_BASIC = 'ACTION_VIEW_BASIC', ACTION_VIEW_FULL = 'ACTION_VIEW_FULL' }

	export enum Connectors_projects_locations_connections_entityTypes_listView { ENTITY_TYPE_VIEW_UNSPECIFIED = 'ENTITY_TYPE_VIEW_UNSPECIFIED', ENTITY_TYPE_VIEW_BASIC = 'ENTITY_TYPE_VIEW_BASIC', ENTITY_TYPE_VIEW_FULL = 'ENTITY_TYPE_VIEW_FULL' }

}

