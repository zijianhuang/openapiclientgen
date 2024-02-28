import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes how data from an input is serialized or how data is serialized when written to an output in Avro format. */
	export interface AvroSerialization extends Serialization {

		/** The properties that are associated with the Avro serialization type. */
		properties?: AvroSerializationProperties;
	}

	/** Describes how data from an input is serialized or how data is serialized when written to an output in Avro format. */
	export interface AvroSerializationFormProperties extends SerializationFormProperties {
	}
	export function CreateAvroSerializationFormGroup() {
		return new FormGroup<AvroSerializationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with the Avro serialization type. */
	export interface AvroSerializationProperties {
	}

	/** The properties that are associated with the Avro serialization type. */
	export interface AvroSerializationPropertiesFormProperties {
	}
	export function CreateAvroSerializationPropertiesFormGroup() {
		return new FormGroup<AvroSerializationPropertiesFormProperties>({
		});

	}


	/** The properties that are associated with a blob data source. */
	export interface BlobDataSourceProperties {

		/** The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests. */
		container?: string | null;

		/** The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead. */
		dateFormat?: string | null;

		/** The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example. */
		pathPattern?: string | null;

		/** A list of one or more Azure Storage accounts. Required on PUT (CreateOrReplace) requests. */
		storageAccounts?: Array<StorageAccount>;

		/** The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead. */
		timeFormat?: string | null;
	}

	/** The properties that are associated with a blob data source. */
	export interface BlobDataSourcePropertiesFormProperties {

		/** The name of a container within the associated Storage account. This container contains either the blob(s) to be read from or written to. Required on PUT (CreateOrReplace) requests. */
		container: FormControl<string | null | undefined>,

		/** The date format. Wherever {date} appears in pathPattern, the value of this property is used as the date format instead. */
		dateFormat: FormControl<string | null | undefined>,

		/** The blob path pattern. Not a regular expression. It represents a pattern against which blob names will be matched to determine whether or not they should be included as input or output to the job. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a more detailed explanation and example. */
		pathPattern: FormControl<string | null | undefined>,

		/** The time format. Wherever {time} appears in pathPattern, the value of this property is used as the time format instead. */
		timeFormat: FormControl<string | null | undefined>,
	}
	export function CreateBlobDataSourcePropertiesFormGroup() {
		return new FormGroup<BlobDataSourcePropertiesFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
			dateFormat: new FormControl<string | null | undefined>(undefined),
			pathPattern: new FormControl<string | null | undefined>(undefined),
			timeFormat: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with an Azure Storage account */
	export interface StorageAccount {

		/** The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. */
		accountKey?: string | null;

		/** The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. */
		accountName?: string | null;
	}

	/** The properties that are associated with an Azure Storage account */
	export interface StorageAccountFormProperties {

		/** The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. */
		accountKey: FormControl<string | null | undefined>,

		/** The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. */
		accountName: FormControl<string | null | undefined>,
	}
	export function CreateStorageAccountFormGroup() {
		return new FormGroup<StorageAccountFormProperties>({
			accountKey: new FormControl<string | null | undefined>(undefined),
			accountName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a blob input data source that contains reference data. */
	export interface BlobReferenceInputDataSource extends ReferenceInputDataSource {

		/** The properties that are associated with a blob input containing reference data. */
		properties?: BlobReferenceInputDataSourceProperties;
	}

	/** Describes a blob input data source that contains reference data. */
	export interface BlobReferenceInputDataSourceFormProperties extends ReferenceInputDataSourceFormProperties {
	}
	export function CreateBlobReferenceInputDataSourceFormGroup() {
		return new FormGroup<BlobReferenceInputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a blob input containing reference data. */
	export interface BlobReferenceInputDataSourceProperties {
	}

	/** The properties that are associated with a blob input containing reference data. */
	export interface BlobReferenceInputDataSourcePropertiesFormProperties {
	}
	export function CreateBlobReferenceInputDataSourcePropertiesFormGroup() {
		return new FormGroup<BlobReferenceInputDataSourcePropertiesFormProperties>({
		});

	}


	/** Describes a blob input data source that contains stream data. */
	export interface BlobStreamInputDataSource extends StreamInputDataSource {

		/** The properties that are associated with a blob input containing stream data. */
		properties?: BlobStreamInputDataSourceProperties;
	}

	/** Describes a blob input data source that contains stream data. */
	export interface BlobStreamInputDataSourceFormProperties extends StreamInputDataSourceFormProperties {
	}
	export function CreateBlobStreamInputDataSourceFormGroup() {
		return new FormGroup<BlobStreamInputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a blob input containing stream data. */
	export interface BlobStreamInputDataSourceProperties extends BlobDataSourceProperties {

		/**
		 * The partition count of the blob input data source. Range 1 - 256.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sourcePartitionCount?: number | null;
	}

	/** The properties that are associated with a blob input containing stream data. */
	export interface BlobStreamInputDataSourcePropertiesFormProperties extends BlobDataSourcePropertiesFormProperties {

		/**
		 * The partition count of the blob input data source. Range 1 - 256.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		sourcePartitionCount: FormControl<number | null | undefined>,
	}
	export function CreateBlobStreamInputDataSourcePropertiesFormGroup() {
		return new FormGroup<BlobStreamInputDataSourcePropertiesFormProperties>({
			container: new FormControl<string | null | undefined>(undefined),
			dateFormat: new FormControl<string | null | undefined>(undefined),
			pathPattern: new FormControl<string | null | undefined>(undefined),
			timeFormat: new FormControl<string | null | undefined>(undefined),
			sourcePartitionCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describes how data from an input is serialized or how data is serialized when written to an output in CSV format. */
	export interface CsvSerialization extends Serialization {

		/** The properties that are associated with the CSV serialization type. */
		properties?: CsvSerializationProperties;
	}

	/** Describes how data from an input is serialized or how data is serialized when written to an output in CSV format. */
	export interface CsvSerializationFormProperties extends SerializationFormProperties {
	}
	export function CreateCsvSerializationFormGroup() {
		return new FormGroup<CsvSerializationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with the CSV serialization type. */
	export interface CsvSerializationProperties {

		/** Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. */
		encoding?: CsvSerializationPropertiesEncoding | null;

		/** Specifies the delimiter that will be used to separate comma-separated value (CSV) records. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a list of supported values. Required on PUT (CreateOrReplace) requests. */
		fieldDelimiter?: string | null;
	}

	/** The properties that are associated with the CSV serialization type. */
	export interface CsvSerializationPropertiesFormProperties {

		/** Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. */
		encoding: FormControl<CsvSerializationPropertiesEncoding | null | undefined>,

		/** Specifies the delimiter that will be used to separate comma-separated value (CSV) records. See https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-input or https://docs.microsoft.com/en-us/rest/api/streamanalytics/stream-analytics-output for a list of supported values. Required on PUT (CreateOrReplace) requests. */
		fieldDelimiter: FormControl<string | null | undefined>,
	}
	export function CreateCsvSerializationPropertiesFormGroup() {
		return new FormGroup<CsvSerializationPropertiesFormProperties>({
			encoding: new FormControl<CsvSerializationPropertiesEncoding | null | undefined>(undefined),
			fieldDelimiter: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CsvSerializationPropertiesEncoding { UTF8 = 'UTF8' }


	/** Condition applicable to the resource, or to the job overall, that warrant customer attention. */
	export interface DiagnosticCondition {

		/** The opaque diagnostic code. */
		code?: string | null;

		/** The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request. */
		message?: string | null;

		/** The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time. */
		since?: string | null;
	}

	/** Condition applicable to the resource, or to the job overall, that warrant customer attention. */
	export interface DiagnosticConditionFormProperties {

		/** The opaque diagnostic code. */
		code: FormControl<string | null | undefined>,

		/** The human-readable message describing the condition in detail. Localized in the Accept-Language of the client request. */
		message: FormControl<string | null | undefined>,

		/** The UTC timestamp of when the condition started. Customers should be able to find a corresponding event in the ops log around this time. */
		since: FormControl<string | null | undefined>,
	}
	export function CreateDiagnosticConditionFormGroup() {
		return new FormGroup<DiagnosticConditionFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			since: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention. */
	export interface Diagnostics {

		/** A collection of zero or more conditions applicable to the resource, or to the job overall, that warrant customer attention. */
		conditions?: Array<DiagnosticCondition>;
	}

	/** Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention. */
	export interface DiagnosticsFormProperties {
	}
	export function CreateDiagnosticsFormGroup() {
		return new FormGroup<DiagnosticsFormProperties>({
		});

	}


	/** Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. */
	export enum Encoding { UTF8 = 'UTF8' }


	/** Describes the error that occurred. */
	export interface ErrorResponse {

		/** Error code associated with the error that occurred. */
		code?: string | null;

		/** Describes the error in detail. */
		message?: string | null;
	}

	/** Describes the error that occurred. */
	export interface ErrorResponseFormProperties {

		/** Error code associated with the error that occurred. */
		code: FormControl<string | null | undefined>,

		/** Describes the error in detail. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The common properties that are associated with Event Hub data sources. */
	export interface EventHubDataSourceProperties extends ServiceBusDataSourceProperties {

		/** The name of the Event Hub. Required on PUT (CreateOrReplace) requests. */
		eventHubName?: string | null;
	}

	/** The common properties that are associated with Event Hub data sources. */
	export interface EventHubDataSourcePropertiesFormProperties extends ServiceBusDataSourcePropertiesFormProperties {

		/** The name of the Event Hub. Required on PUT (CreateOrReplace) requests. */
		eventHubName: FormControl<string | null | undefined>,
	}
	export function CreateEventHubDataSourcePropertiesFormGroup() {
		return new FormGroup<EventHubDataSourcePropertiesFormProperties>({
			serviceBusNamespace: new FormControl<string | null | undefined>(undefined),
			sharedAccessPolicyKey: new FormControl<string | null | undefined>(undefined),
			sharedAccessPolicyName: new FormControl<string | null | undefined>(undefined),
			eventHubName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Event Hub input data source that contains stream data. */
	export interface EventHubStreamInputDataSource extends StreamInputDataSource {

		/** The properties that are associated with a Event Hub input containing stream data. */
		properties?: EventHubStreamInputDataSourceProperties;
	}

	/** Describes an Event Hub input data source that contains stream data. */
	export interface EventHubStreamInputDataSourceFormProperties extends StreamInputDataSourceFormProperties {
	}
	export function CreateEventHubStreamInputDataSourceFormGroup() {
		return new FormGroup<EventHubStreamInputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a Event Hub input containing stream data. */
	export interface EventHubStreamInputDataSourceProperties extends EventHubDataSourceProperties {

		/** The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group. */
		consumerGroupName?: string | null;
	}

	/** The properties that are associated with a Event Hub input containing stream data. */
	export interface EventHubStreamInputDataSourcePropertiesFormProperties extends EventHubDataSourcePropertiesFormProperties {

		/** The name of an Event Hub Consumer Group that should be used to read events from the Event Hub. Specifying distinct consumer group names for multiple inputs allows each of those inputs to receive the same events from the Event Hub. If not specified, the input uses the Event Hub’s default consumer group. */
		consumerGroupName: FormControl<string | null | undefined>,
	}
	export function CreateEventHubStreamInputDataSourcePropertiesFormGroup() {
		return new FormGroup<EventHubStreamInputDataSourcePropertiesFormProperties>({
			serviceBusNamespace: new FormControl<string | null | undefined>(undefined),
			sharedAccessPolicyKey: new FormControl<string | null | undefined>(undefined),
			sharedAccessPolicyName: new FormControl<string | null | undefined>(undefined),
			eventHubName: new FormControl<string | null | undefined>(undefined),
			consumerGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An input object, containing all information associated with the named input. All inputs are contained under a streaming job. */
	export interface Input extends SubResource {

		/** The properties that are associated with an input. */
		properties?: InputProperties;
	}

	/** An input object, containing all information associated with the named input. All inputs are contained under a streaming job. */
	export interface InputFormProperties extends SubResourceFormProperties {
	}
	export function CreateInputFormGroup() {
		return new FormGroup<InputFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Object containing a list of inputs under a streaming job. */
	export interface InputListResult {

		/** The link (url) to the next page of results. */
		nextLink?: string | null;

		/** A list of inputs under a streaming job. Populated by a 'List' operation. */
		value?: Array<Input>;
	}

	/** Object containing a list of inputs under a streaming job. */
	export interface InputListResultFormProperties {

		/** The link (url) to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateInputListResultFormGroup() {
		return new FormGroup<InputListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with an input. */
	export interface InputProperties {

		/** Describes conditions applicable to the Input, Output, or the job overall, that warrant customer attention. */
		diagnostics?: Diagnostics;

		/** The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. */
		etag?: string | null;

		/** Describes how data from an input is serialized or how data is serialized when written to an output. */
		serialization?: Serialization;

		/** Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests. */
		type?: string | null;
	}

	/** The properties that are associated with an input. */
	export interface InputPropertiesFormProperties {

		/** The current entity tag for the input. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency. */
		etag: FormControl<string | null | undefined>,

		/** Indicates whether the input is a source of reference data or stream data. Required on PUT (CreateOrReplace) requests. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateInputPropertiesFormGroup() {
		return new FormGroup<InputPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an IoT Hub input data source that contains stream data. */
	export interface IoTHubStreamInputDataSource extends StreamInputDataSource {

		/** The properties that are associated with a IoT Hub input containing stream data. */
		properties?: IoTHubStreamInputDataSourceProperties;
	}

	/** Describes an IoT Hub input data source that contains stream data. */
	export interface IoTHubStreamInputDataSourceFormProperties extends StreamInputDataSourceFormProperties {
	}
	export function CreateIoTHubStreamInputDataSourceFormGroup() {
		return new FormGroup<IoTHubStreamInputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with a IoT Hub input containing stream data. */
	export interface IoTHubStreamInputDataSourceProperties {

		/** The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hub’s default consumer group. */
		consumerGroupName?: string | null;

		/** The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.). */
		endpoint?: string | null;

		/** The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests. */
		iotHubNamespace?: string | null;

		/** The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. */
		sharedAccessPolicyKey?: string | null;

		/** The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests. */
		sharedAccessPolicyName?: string | null;
	}

	/** The properties that are associated with a IoT Hub input containing stream data. */
	export interface IoTHubStreamInputDataSourcePropertiesFormProperties {

		/** The name of an IoT Hub Consumer Group that should be used to read events from the IoT Hub. If not specified, the input uses the Iot Hub’s default consumer group. */
		consumerGroupName: FormControl<string | null | undefined>,

		/** The IoT Hub endpoint to connect to (ie. messages/events, messages/operationsMonitoringEvents, etc.). */
		endpoint: FormControl<string | null | undefined>,

		/** The name or the URI of the IoT Hub. Required on PUT (CreateOrReplace) requests. */
		iotHubNamespace: FormControl<string | null | undefined>,

		/** The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. */
		sharedAccessPolicyKey: FormControl<string | null | undefined>,

		/** The shared access policy name for the IoT Hub. This policy must contain at least the Service connect permission. Required on PUT (CreateOrReplace) requests. */
		sharedAccessPolicyName: FormControl<string | null | undefined>,
	}
	export function CreateIoTHubStreamInputDataSourcePropertiesFormGroup() {
		return new FormGroup<IoTHubStreamInputDataSourcePropertiesFormProperties>({
			consumerGroupName: new FormControl<string | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
			iotHubNamespace: new FormControl<string | null | undefined>(undefined),
			sharedAccessPolicyKey: new FormControl<string | null | undefined>(undefined),
			sharedAccessPolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. */
	export enum JsonOutputSerializationFormat { LineSeparated = 'LineSeparated', Array = 'Array' }


	/** Describes how data from an input is serialized or how data is serialized when written to an output in JSON format. */
	export interface JsonSerialization extends Serialization {

		/** The properties that are associated with the JSON serialization type. */
		properties?: JsonSerializationProperties;
	}

	/** Describes how data from an input is serialized or how data is serialized when written to an output in JSON format. */
	export interface JsonSerializationFormProperties extends SerializationFormProperties {
	}
	export function CreateJsonSerializationFormGroup() {
		return new FormGroup<JsonSerializationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with the JSON serialization type. */
	export interface JsonSerializationProperties {

		/** Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. */
		encoding?: CsvSerializationPropertiesEncoding | null;

		/** Specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. */
		format?: JsonOutputSerializationFormat | null;
	}

	/** The properties that are associated with the JSON serialization type. */
	export interface JsonSerializationPropertiesFormProperties {

		/** Specifies the encoding of the incoming data in the case of input and the encoding of outgoing data in the case of output. */
		encoding: FormControl<CsvSerializationPropertiesEncoding | null | undefined>,

		/** Specifies the format of the JSON the output will be written in. The currently supported values are 'lineSeparated' indicating the output will be formatted by having each JSON object separated by a new line and 'array' indicating the output will be formatted as an array of JSON objects. */
		format: FormControl<JsonOutputSerializationFormat | null | undefined>,
	}
	export function CreateJsonSerializationPropertiesFormGroup() {
		return new FormGroup<JsonSerializationPropertiesFormProperties>({
			encoding: new FormControl<CsvSerializationPropertiesEncoding | null | undefined>(undefined),
			format: new FormControl<JsonOutputSerializationFormat | null | undefined>(undefined),
		});

	}


	/** Describes an input data source that contains reference data. */
	export interface ReferenceInputDataSource {

		/** Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests. */
		type?: string | null;
	}

	/** Describes an input data source that contains reference data. */
	export interface ReferenceInputDataSourceFormProperties {

		/** Indicates the type of input data source containing reference data. Required on PUT (CreateOrReplace) requests. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateReferenceInputDataSourceFormGroup() {
		return new FormGroup<ReferenceInputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with an input containing reference data. */
	export interface ReferenceInputProperties extends InputProperties {

		/** Describes an input data source that contains reference data. */
		datasource?: ReferenceInputDataSource;
	}

	/** The properties that are associated with an input containing reference data. */
	export interface ReferenceInputPropertiesFormProperties extends InputPropertiesFormProperties {
	}
	export function CreateReferenceInputPropertiesFormGroup() {
		return new FormGroup<ReferenceInputPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the status of the test operation along with error information, if applicable. */
	export interface ResourceTestStatus {

		/** Describes the error that occurred. */
		error?: ErrorResponse;

		/** The status of the test operation. */
		status?: string | null;
	}

	/** Describes the status of the test operation along with error information, if applicable. */
	export interface ResourceTestStatusFormProperties {

		/** The status of the test operation. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateResourceTestStatusFormGroup() {
		return new FormGroup<ResourceTestStatusFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes how data from an input is serialized or how data is serialized when written to an output. */
	export interface Serialization {

		/** Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests. */
		type?: string | null;
	}

	/** Describes how data from an input is serialized or how data is serialized when written to an output. */
	export interface SerializationFormProperties {

		/** Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSerializationFormGroup() {
		return new FormGroup<SerializationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The common properties that are associated with Service Bus data sources (Queues, Topics, Event Hubs, etc.). */
	export interface ServiceBusDataSourceProperties {

		/** The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. */
		serviceBusNamespace?: string | null;

		/** The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. */
		sharedAccessPolicyKey?: string | null;

		/** The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. */
		sharedAccessPolicyName?: string | null;
	}

	/** The common properties that are associated with Service Bus data sources (Queues, Topics, Event Hubs, etc.). */
	export interface ServiceBusDataSourcePropertiesFormProperties {

		/** The namespace that is associated with the desired Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. */
		serviceBusNamespace: FormControl<string | null | undefined>,

		/** The shared access policy key for the specified shared access policy. Required on PUT (CreateOrReplace) requests. */
		sharedAccessPolicyKey: FormControl<string | null | undefined>,

		/** The shared access policy name for the Event Hub, Service Bus Queue, Service Bus Topic, etc. Required on PUT (CreateOrReplace) requests. */
		sharedAccessPolicyName: FormControl<string | null | undefined>,
	}
	export function CreateServiceBusDataSourcePropertiesFormGroup() {
		return new FormGroup<ServiceBusDataSourcePropertiesFormProperties>({
			serviceBusNamespace: new FormControl<string | null | undefined>(undefined),
			sharedAccessPolicyKey: new FormControl<string | null | undefined>(undefined),
			sharedAccessPolicyName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an input data source that contains stream data. */
	export interface StreamInputDataSource {

		/** Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests. */
		type?: string | null;
	}

	/** Describes an input data source that contains stream data. */
	export interface StreamInputDataSourceFormProperties {

		/** Indicates the type of input data source containing stream data. Required on PUT (CreateOrReplace) requests. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateStreamInputDataSourceFormGroup() {
		return new FormGroup<StreamInputDataSourceFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties that are associated with an input containing stream data. */
	export interface StreamInputProperties extends InputProperties {

		/** Describes an input data source that contains stream data. */
		datasource?: StreamInputDataSource;
	}

	/** The properties that are associated with an input containing stream data. */
	export interface StreamInputPropertiesFormProperties extends InputPropertiesFormProperties {
	}
	export function CreateStreamInputPropertiesFormGroup() {
		return new FormGroup<StreamInputPropertiesFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The base sub-resource model definition. */
	export interface SubResource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource type */
		type?: string | null;
	}

	/** The base sub-resource model definition. */
	export interface SubResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all of the inputs under the specified streaming job.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs
		 * @param {string} select The $select OData query parameter. This is a comma-separated list of structural properties to include in the response, or "*" to include all properties. By default, all properties are returned except diagnostics. Currently only accepts '*' as a valid value.
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @return {InputListResult} Successfully listed the inputs under the specified streaming job.
		 */
		Inputs_ListByStreamingJob(select: string | null | undefined, api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string): Observable<InputListResult> {
			return this.http.get<InputListResult>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/inputs?select=' + (select == null ? '' : encodeURIComponent(select)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Gets details about the specified input.
		 * Get subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} inputName The name of the input.
		 * @return {Input} Successfully retrieved the specified input.
		 */
		Inputs_Get(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, inputName: string): Observable<Input> {
			return this.http.get<Input>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}

		/**
		 * Creates an input or replaces an already existing input under an existing streaming job.
		 * Put subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} inputName The name of the input.
		 * @param {Input} requestBody The definition of the input that will be used to create a new input or replace the existing one under the streaming job.
		 * @return {Input} The input was successfully created or replaced.
		 */
		Inputs_CreateOrReplace(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, inputName: string, requestBody: Input): Observable<Input> {
			return this.http.put<Input>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an input from the streaming job.
		 * Delete subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} inputName The name of the input.
		 * @return {void} The input was successfully deleted.
		 */
		Inputs_Delete(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, inputName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an existing input under an existing streaming job. This can be used to partially update (ie. update one or two properties) an input without affecting the rest the job or input definition.
		 * Patch subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} inputName The name of the input.
		 * @param {Input} requestBody An Input object. The properties specified here will overwrite the corresponding properties in the existing input (ie. Those properties will be updated). Any properties that are set to null here will mean that the corresponding property in the existing input will remain the same and not change as a result of this PATCH operation.
		 * @return {Input} The input was successfully updated.
		 */
		Inputs_Update(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, inputName: string, requestBody: Input): Observable<Input> {
			return this.http.patch<Input>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)) + '?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tests whether an input’s datasource is reachable and usable by the Azure Stream Analytics service.
		 * Post subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/inputs/{inputName}/test
		 * @param {string} api_version Client Api Version.
		 * @param {string} subscriptionId GUID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
		 * @param {string} resourceGroupName The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
		 * @param {string} jobName The name of the streaming job.
		 * @param {string} inputName The name of the input.
		 * @param {Input} requestBody If the input specified does not already exist, this parameter must contain the full input definition intended to be tested. If the input specified already exists, this parameter can be left null to test the existing input as is or if specified, the properties specified will overwrite the corresponding properties in the existing input (exactly like a PATCH operation) and the resulting input will be tested.
		 * @return {ResourceTestStatus} The test operation completed successfully.
		 */
		Inputs_Test(api_version: string, subscriptionId: string, resourceGroupName: string, jobName: string, inputName: string, requestBody: Input): Observable<ResourceTestStatus> {
			return this.http.post<ResourceTestStatus>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourcegroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.StreamAnalytics/streamingjobs/' + (jobName == null ? '' : encodeURIComponent(jobName)) + '/inputs/' + (inputName == null ? '' : encodeURIComponent(inputName)) + '/test?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

