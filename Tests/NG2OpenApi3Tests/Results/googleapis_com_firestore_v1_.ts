import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines an aggregation that produces a single result. */
	export interface Aggregation {

		/** Optional. Optional name of the field to store the result of the aggregation into. If not provided, Firestore will pick a default name following the format `field_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS field_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS field_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to document field name limitations. */
		alias?: string | null;

		/** Average of the values of the requested field. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns `NULL`. * Always returns the result as a double. */
		avg?: Avg;

		/** Count of documents that match the query. The `COUNT(*)` aggregation function operates on the entire document so it does not require a field reference. */
		count?: Count;

		/** Sum of the values of the requested field. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns 0. * Returns a 64-bit integer if all aggregated numbers are integers and the sum result does not overflow. Otherwise, the result is returned as a double. Note that even if all the aggregated values are integers, the result is returned as a double if it cannot fit within a 64-bit signed integer. When this occurs, the returned value will lose precision. * When underflow occurs, floating-point aggregation is non-deterministic. This means that running the same query repeatedly without any changes to the underlying values could produce slightly different results each time. In those cases, values should be stored as integers over floating-point numbers. */
		sum?: Sum;
	}

	/** Defines an aggregation that produces a single result. */
	export interface AggregationFormProperties {

		/** Optional. Optional name of the field to store the result of the aggregation into. If not provided, Firestore will pick a default name following the format `field_`. For example: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2), COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) OVER ( ... ); ``` becomes: ``` AGGREGATE COUNT_UP_TO(1) AS count_up_to_1, COUNT_UP_TO(2) AS field_1, COUNT_UP_TO(3) AS count_up_to_3, COUNT(*) AS field_2 OVER ( ... ); ``` Requires: * Must be unique across all aggregation aliases. * Conform to document field name limitations. */
		alias: FormControl<string | null | undefined>,
	}
	export function CreateAggregationFormGroup() {
		return new FormGroup<AggregationFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Average of the values of the requested field. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns `NULL`. * Always returns the result as a double. */
	export interface Avg {

		/** A reference to a field in a document, ex: `stats.operations`. */
		field?: FieldReference;
	}

	/** Average of the values of the requested field. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns `NULL`. * Always returns the result as a double. */
	export interface AvgFormProperties {
	}
	export function CreateAvgFormGroup() {
		return new FormGroup<AvgFormProperties>({
		});

	}


	/** A reference to a field in a document, ex: `stats.operations`. */
	export interface FieldReference {

		/** A reference to a field in a document. Requires: * MUST be a dot-delimited (`.`) string of segments, where each segment conforms to document field name limitations. */
		fieldPath?: string | null;
	}

	/** A reference to a field in a document, ex: `stats.operations`. */
	export interface FieldReferenceFormProperties {

		/** A reference to a field in a document. Requires: * MUST be a dot-delimited (`.`) string of segments, where each segment conforms to document field name limitations. */
		fieldPath: FormControl<string | null | undefined>,
	}
	export function CreateFieldReferenceFormGroup() {
		return new FormGroup<FieldReferenceFormProperties>({
			fieldPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Count of documents that match the query. The `COUNT(*)` aggregation function operates on the entire document so it does not require a field reference. */
	export interface Count {

		/** Optional. Optional constraint on the maximum number of documents to count. This provides a way to set an upper bound on the number of documents to scan, limiting latency, and cost. Unspecified is interpreted as no bound. High-Level Example: ``` AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); ``` Requires: * Must be greater than zero when present. */
		upTo?: string | null;
	}

	/** Count of documents that match the query. The `COUNT(*)` aggregation function operates on the entire document so it does not require a field reference. */
	export interface CountFormProperties {

		/** Optional. Optional constraint on the maximum number of documents to count. This provides a way to set an upper bound on the number of documents to scan, limiting latency, and cost. Unspecified is interpreted as no bound. High-Level Example: ``` AGGREGATE COUNT_UP_TO(1000) OVER ( SELECT * FROM k ); ``` Requires: * Must be greater than zero when present. */
		upTo: FormControl<string | null | undefined>,
	}
	export function CreateCountFormGroup() {
		return new FormGroup<CountFormProperties>({
			upTo: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sum of the values of the requested field. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns 0. * Returns a 64-bit integer if all aggregated numbers are integers and the sum result does not overflow. Otherwise, the result is returned as a double. Note that even if all the aggregated values are integers, the result is returned as a double if it cannot fit within a 64-bit signed integer. When this occurs, the returned value will lose precision. * When underflow occurs, floating-point aggregation is non-deterministic. This means that running the same query repeatedly without any changes to the underlying values could produce slightly different results each time. In those cases, values should be stored as integers over floating-point numbers. */
	export interface Sum {

		/** A reference to a field in a document, ex: `stats.operations`. */
		field?: FieldReference;
	}

	/** Sum of the values of the requested field. * Only numeric values will be aggregated. All non-numeric values including `NULL` are skipped. * If the aggregated values contain `NaN`, returns `NaN`. Infinity math follows IEEE-754 standards. * If the aggregated value set is empty, returns 0. * Returns a 64-bit integer if all aggregated numbers are integers and the sum result does not overflow. Otherwise, the result is returned as a double. Note that even if all the aggregated values are integers, the result is returned as a double if it cannot fit within a 64-bit signed integer. When this occurs, the returned value will lose precision. * When underflow occurs, floating-point aggregation is non-deterministic. This means that running the same query repeatedly without any changes to the underlying values could produce slightly different results each time. In those cases, values should be stored as integers over floating-point numbers. */
	export interface SumFormProperties {
	}
	export function CreateSumFormGroup() {
		return new FormGroup<SumFormProperties>({
		});

	}


	/** The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result. */
	export interface AggregationResult {

		/** The result of the aggregation functions, ex: `COUNT(*) AS total_docs`. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query. */
		aggregateFields?: {[id: string]: Value };
	}

	/** The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result. */
	export interface AggregationResultFormProperties {

		/** The result of the aggregation functions, ex: `COUNT(*) AS total_docs`. The key is the alias assigned to the aggregation function on input and the size of this map equals the number of aggregation functions in the query. */
		aggregateFields: FormControl<{[id: string]: Value } | null | undefined>,
	}
	export function CreateAggregationResultFormGroup() {
		return new FormGroup<AggregationResultFormProperties>({
			aggregateFields: new FormControl<{[id: string]: Value } | null | undefined>(undefined),
		});

	}


	/** A message that can hold any of the supported value types. */
	export interface Value {

		/** An array value. */
		arrayValue?: ArrayValue;

		/** A boolean value. */
		booleanValue?: boolean | null;

		/** A bytes value. Must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes are considered by queries. */
		bytesValue?: string | null;

		/** A double value. */
		doubleValue?: number | null;

		/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
		geoPointValue?: LatLng;

		/** An integer value. */
		integerValue?: string | null;

		/** A map value. */
		mapValue?: MapValue;

		/** A null value. */
		nullValue?: ValueNullValue | null;

		/** A reference to a document. For example: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
		referenceValue?: string | null;

		/** A string value. The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes of the UTF-8 representation are considered by queries. */
		stringValue?: string | null;

		/** A timestamp value. Precise only to microseconds. When stored, any additional precision is rounded down. */
		timestampValue?: string | null;
	}

	/** A message that can hold any of the supported value types. */
	export interface ValueFormProperties {

		/** A boolean value. */
		booleanValue: FormControl<boolean | null | undefined>,

		/** A bytes value. Must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes are considered by queries. */
		bytesValue: FormControl<string | null | undefined>,

		/** A double value. */
		doubleValue: FormControl<number | null | undefined>,

		/** An integer value. */
		integerValue: FormControl<string | null | undefined>,

		/** A null value. */
		nullValue: FormControl<ValueNullValue | null | undefined>,

		/** A reference to a document. For example: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
		referenceValue: FormControl<string | null | undefined>,

		/** A string value. The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes. Only the first 1,500 bytes of the UTF-8 representation are considered by queries. */
		stringValue: FormControl<string | null | undefined>,

		/** A timestamp value. Precise only to microseconds. When stored, any additional precision is rounded down. */
		timestampValue: FormControl<string | null | undefined>,
	}
	export function CreateValueFormGroup() {
		return new FormGroup<ValueFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			bytesValue: new FormControl<string | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			integerValue: new FormControl<string | null | undefined>(undefined),
			nullValue: new FormControl<ValueNullValue | null | undefined>(undefined),
			referenceValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			timestampValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An array value. */
	export interface ArrayValue {

		/** Values in the array. */
		values?: Array<Value>;
	}

	/** An array value. */
	export interface ArrayValueFormProperties {
	}
	export function CreateArrayValueFormGroup() {
		return new FormGroup<ArrayValueFormProperties>({
		});

	}


	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLng {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude?: number | null;

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude?: number | null;
	}

	/** An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges. */
	export interface LatLngFormProperties {

		/** The latitude in degrees. It must be in the range [-90.0, +90.0]. */
		latitude: FormControl<number | null | undefined>,

		/** The longitude in degrees. It must be in the range [-180.0, +180.0]. */
		longitude: FormControl<number | null | undefined>,
	}
	export function CreateLatLngFormGroup() {
		return new FormGroup<LatLngFormProperties>({
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A map value. */
	export interface MapValue {

		/** The map's fields. The map keys represent field names. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. */
		fields?: {[id: string]: Value };
	}

	/** A map value. */
	export interface MapValueFormProperties {

		/** The map's fields. The map keys represent field names. Field names matching the regular expression `__.*__` are reserved. Reserved field names are forbidden except in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. */
		fields: FormControl<{[id: string]: Value } | null | undefined>,
	}
	export function CreateMapValueFormGroup() {
		return new FormGroup<MapValueFormProperties>({
			fields: new FormControl<{[id: string]: Value } | null | undefined>(undefined),
		});

	}

	export enum ValueNullValue { NULL_VALUE = 0 }


	/** The request for Firestore.BatchGetDocuments. */
	export interface BatchGetDocumentsRequest {

		/** The names of the documents to retrieve. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided. */
		documents?: Array<string>;

		/** A set of field paths on a document. Used to restrict a get or update operation on a document to a subset of its fields. This is different from standard field masks, as this is always scoped to a Document, and takes in account the dynamic nature of Value. */
		mask?: DocumentMask;

		/** Options for creating a new transaction. */
		newTransaction?: TransactionOptions;

		/** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime?: string | null;

		/** Reads documents in a transaction. */
		transaction?: string | null;
	}

	/** The request for Firestore.BatchGetDocuments. */
	export interface BatchGetDocumentsRequestFormProperties {

		/** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime: FormControl<string | null | undefined>,

		/** Reads documents in a transaction. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetDocumentsRequestFormGroup() {
		return new FormGroup<BatchGetDocumentsRequestFormProperties>({
			readTime: new FormControl<string | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of field paths on a document. Used to restrict a get or update operation on a document to a subset of its fields. This is different from standard field masks, as this is always scoped to a Document, and takes in account the dynamic nature of Value. */
	export interface DocumentMask {

		/** The list of field paths in the mask. See Document.fields for a field path syntax reference. */
		fieldPaths?: Array<string>;
	}

	/** A set of field paths on a document. Used to restrict a get or update operation on a document to a subset of its fields. This is different from standard field masks, as this is always scoped to a Document, and takes in account the dynamic nature of Value. */
	export interface DocumentMaskFormProperties {
	}
	export function CreateDocumentMaskFormGroup() {
		return new FormGroup<DocumentMaskFormProperties>({
		});

	}


	/** Options for creating a new transaction. */
	export interface TransactionOptions {

		/** Options for a transaction that can only be used to read documents. */
		readOnly?: ReadOnly;

		/** Options for a transaction that can be used to read and write documents. Firestore does not allow 3rd party auth requests to create read-write. transactions. */
		readWrite?: ReadWrite;
	}

	/** Options for creating a new transaction. */
	export interface TransactionOptionsFormProperties {
	}
	export function CreateTransactionOptionsFormGroup() {
		return new FormGroup<TransactionOptionsFormProperties>({
		});

	}


	/** Options for a transaction that can only be used to read documents. */
	export interface ReadOnly {

		/** Reads documents at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime?: string | null;
	}

	/** Options for a transaction that can only be used to read documents. */
	export interface ReadOnlyFormProperties {

		/** Reads documents at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime: FormControl<string | null | undefined>,
	}
	export function CreateReadOnlyFormGroup() {
		return new FormGroup<ReadOnlyFormProperties>({
			readTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for a transaction that can be used to read and write documents. Firestore does not allow 3rd party auth requests to create read-write. transactions. */
	export interface ReadWrite {

		/** An optional transaction to retry. */
		retryTransaction?: string | null;
	}

	/** Options for a transaction that can be used to read and write documents. Firestore does not allow 3rd party auth requests to create read-write. transactions. */
	export interface ReadWriteFormProperties {

		/** An optional transaction to retry. */
		retryTransaction: FormControl<string | null | undefined>,
	}
	export function CreateReadWriteFormGroup() {
		return new FormGroup<ReadWriteFormProperties>({
			retryTransaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The streamed response for Firestore.BatchGetDocuments. */
	export interface BatchGetDocumentsResponse {

		/** A Firestore document. Must not exceed 1 MiB - 4 bytes. */
		found?: Document;

		/** A document name that was requested but does not exist. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
		missing?: string | null;

		/** The time at which the document was read. This may be monotically increasing, in this case the previous documents in the result stream are guaranteed not to have changed between their read_time and this one. */
		readTime?: string | null;

		/** The transaction that was started as part of this request. Will only be set in the first response, and only if BatchGetDocumentsRequest.new_transaction was set in the request. */
		transaction?: string | null;
	}

	/** The streamed response for Firestore.BatchGetDocuments. */
	export interface BatchGetDocumentsResponseFormProperties {

		/** A document name that was requested but does not exist. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
		missing: FormControl<string | null | undefined>,

		/** The time at which the document was read. This may be monotically increasing, in this case the previous documents in the result stream are guaranteed not to have changed between their read_time and this one. */
		readTime: FormControl<string | null | undefined>,

		/** The transaction that was started as part of this request. Will only be set in the first response, and only if BatchGetDocumentsRequest.new_transaction was set in the request. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetDocumentsResponseFormGroup() {
		return new FormGroup<BatchGetDocumentsResponseFormProperties>({
			missing: new FormControl<string | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Firestore document. Must not exceed 1 MiB - 4 bytes. */
	export interface Document {

		/** Output only. The time at which the document was created. This value increases monotonically when a document is deleted then recreated. It can also be compared to values from other documents and the `read_time` of a query. */
		createTime?: string | null;
		fields?: {[id: string]: Value };

		/** The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
		name?: string | null;

		/** Output only. The time at which the document was last changed. This value is initially set to the `create_time` then increases monotonically with each change to the document. It can also be compared to values from other documents and the `read_time` of a query. */
		updateTime?: string | null;
	}

	/** A Firestore document. Must not exceed 1 MiB - 4 bytes. */
	export interface DocumentFormProperties {

		/** Output only. The time at which the document was created. This value increases monotonically when a document is deleted then recreated. It can also be compared to values from other documents and the `read_time` of a query. */
		createTime: FormControl<string | null | undefined>,
		fields: FormControl<{[id: string]: Value } | null | undefined>,

		/** The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The time at which the document was last changed. This value is initially set to the `create_time` then increases monotonically with each change to the document. It can also be compared to values from other documents and the `read_time` of a query. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			fields: new FormControl<{[id: string]: Value } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Firestore.BatchWrite. */
	export interface BatchWriteRequest {

		/** Labels associated with this batch write. */
		labels?: {[id: string]: string };

		/** The writes to apply. Method does not apply writes atomically and does not guarantee ordering. Each write succeeds or fails independently. You cannot write to the same document more than once per request. */
		writes?: Array<Write>;
	}

	/** The request for Firestore.BatchWrite. */
	export interface BatchWriteRequestFormProperties {

		/** Labels associated with this batch write. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateBatchWriteRequestFormGroup() {
		return new FormGroup<BatchWriteRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** A write on a document. */
	export interface Write {

		/** A precondition on a document, used for conditional operations. */
		currentDocument?: Precondition;

		/** A document name to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
		delete?: string | null;

		/** A transformation of a document. */
		transform?: DocumentTransform;

		/** A Firestore document. Must not exceed 1 MiB - 4 bytes. */
		update?: Document;

		/** A set of field paths on a document. Used to restrict a get or update operation on a document to a subset of its fields. This is different from standard field masks, as this is always scoped to a Document, and takes in account the dynamic nature of Value. */
		updateMask?: DocumentMask;

		/** The transforms to perform after update. This field can be set only when the operation is `update`. If present, this write is equivalent to performing `update` and `transform` to the same document atomically and in order. */
		updateTransforms?: Array<FieldTransform>;
	}

	/** A write on a document. */
	export interface WriteFormProperties {

		/** A document name to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. */
		delete: FormControl<string | null | undefined>,
	}
	export function CreateWriteFormGroup() {
		return new FormGroup<WriteFormProperties>({
			delete: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A precondition on a document, used for conditional operations. */
	export interface Precondition {

		/** When set to `true`, the target document must exist. When set to `false`, the target document must not exist. */
		exists?: boolean | null;

		/** When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned. */
		updateTime?: string | null;
	}

	/** A precondition on a document, used for conditional operations. */
	export interface PreconditionFormProperties {

		/** When set to `true`, the target document must exist. When set to `false`, the target document must not exist. */
		exists: FormControl<boolean | null | undefined>,

		/** When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePreconditionFormGroup() {
		return new FormGroup<PreconditionFormProperties>({
			exists: new FormControl<boolean | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A transformation of a document. */
	export interface DocumentTransform {

		/** The name of the document to transform. */
		document?: string | null;

		/** The list of transformations to apply to the fields of the document, in order. This must not be empty. */
		fieldTransforms?: Array<FieldTransform>;
	}

	/** A transformation of a document. */
	export interface DocumentTransformFormProperties {

		/** The name of the document to transform. */
		document: FormControl<string | null | undefined>,
	}
	export function CreateDocumentTransformFormGroup() {
		return new FormGroup<DocumentTransformFormProperties>({
			document: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A transformation of a field of the document. */
	export interface FieldTransform {

		/** An array value. */
		appendMissingElements?: ArrayValue;

		/** The path of the field. See Document.fields for the field path syntax reference. */
		fieldPath?: string | null;

		/** A message that can hold any of the supported value types. */
		increment?: Value;

		/** A message that can hold any of the supported value types. */
		maximum?: Value;

		/** A message that can hold any of the supported value types. */
		minimum?: Value;

		/** An array value. */
		removeAllFromArray?: ArrayValue;

		/** Sets the field to the given server value. */
		setToServerValue?: FieldTransformSetToServerValue | null;
	}

	/** A transformation of a field of the document. */
	export interface FieldTransformFormProperties {

		/** The path of the field. See Document.fields for the field path syntax reference. */
		fieldPath: FormControl<string | null | undefined>,

		/** Sets the field to the given server value. */
		setToServerValue: FormControl<FieldTransformSetToServerValue | null | undefined>,
	}
	export function CreateFieldTransformFormGroup() {
		return new FormGroup<FieldTransformFormProperties>({
			fieldPath: new FormControl<string | null | undefined>(undefined),
			setToServerValue: new FormControl<FieldTransformSetToServerValue | null | undefined>(undefined),
		});

	}

	export enum FieldTransformSetToServerValue { SERVER_VALUE_UNSPECIFIED = 0, REQUEST_TIME = 1 }


	/** The response from Firestore.BatchWrite. */
	export interface BatchWriteResponse {

		/** The status of applying the writes. This i-th write status corresponds to the i-th write in the request. */
		status?: Array<Status>;

		/** The result of applying the writes. This i-th write result corresponds to the i-th write in the request. */
		writeResults?: Array<WriteResult>;
	}

	/** The response from Firestore.BatchWrite. */
	export interface BatchWriteResponseFormProperties {
	}
	export function CreateBatchWriteResponseFormGroup() {
		return new FormGroup<BatchWriteResponseFormProperties>({
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of applying a write. */
	export interface WriteResult {

		/** The results of applying each DocumentTransform.FieldTransform, in the same order. */
		transformResults?: Array<Value>;

		/** The last update time of the document after applying the write. Not set after a `delete`. If the write did not actually change the document, this will be the previous update_time. */
		updateTime?: string | null;
	}

	/** The result of applying a write. */
	export interface WriteResultFormProperties {

		/** The last update time of the document after applying the write. Not set after a `delete`. If the write did not actually change the document, this will be the previous update_time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateWriteResultFormGroup() {
		return new FormGroup<WriteResultFormProperties>({
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Firestore.BeginTransaction. */
	export interface BeginTransactionRequest {

		/** Options for creating a new transaction. */
		options?: TransactionOptions;
	}

	/** The request for Firestore.BeginTransaction. */
	export interface BeginTransactionRequestFormProperties {
	}
	export function CreateBeginTransactionRequestFormGroup() {
		return new FormGroup<BeginTransactionRequestFormProperties>({
		});

	}


	/** The response for Firestore.BeginTransaction. */
	export interface BeginTransactionResponse {

		/** The transaction that was started. */
		transaction?: string | null;
	}

	/** The response for Firestore.BeginTransaction. */
	export interface BeginTransactionResponseFormProperties {

		/** The transaction that was started. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateBeginTransactionResponseFormGroup() {
		return new FormGroup<BeginTransactionResponseFormProperties>({
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A sequence of bits, encoded in a byte array. Each byte in the `bitmap` byte array stores 8 bits of the sequence. The only exception is the last byte, which may store 8 _or fewer_ bits. The `padding` defines the number of bits of the last byte to be ignored as "padding". The values of these "padding" bits are unspecified and must be ignored. To retrieve the first bit, bit 0, calculate: `(bitmap[0] & 0x01) != 0`. To retrieve the second bit, bit 1, calculate: `(bitmap[0] & 0x02) != 0`. To retrieve the third bit, bit 2, calculate: `(bitmap[0] & 0x04) != 0`. To retrieve the fourth bit, bit 3, calculate: `(bitmap[0] & 0x08) != 0`. To retrieve bit n, calculate: `(bitmap[n / 8] & (0x01 << (n % 8))) != 0`. The "size" of a `BitSequence` (the number of bits it contains) is calculated by this formula: `(bitmap.length * 8) - padding`. */
	export interface BitSequence {

		/** The bytes that encode the bit sequence. May have a length of zero. */
		bitmap?: string | null;

		/** The number of bits of the last byte in `bitmap` to ignore as "padding". If the length of `bitmap` is zero, then this value must be `0`. Otherwise, this value must be between 0 and 7, inclusive. */
		padding?: number | null;
	}

	/** A sequence of bits, encoded in a byte array. Each byte in the `bitmap` byte array stores 8 bits of the sequence. The only exception is the last byte, which may store 8 _or fewer_ bits. The `padding` defines the number of bits of the last byte to be ignored as "padding". The values of these "padding" bits are unspecified and must be ignored. To retrieve the first bit, bit 0, calculate: `(bitmap[0] & 0x01) != 0`. To retrieve the second bit, bit 1, calculate: `(bitmap[0] & 0x02) != 0`. To retrieve the third bit, bit 2, calculate: `(bitmap[0] & 0x04) != 0`. To retrieve the fourth bit, bit 3, calculate: `(bitmap[0] & 0x08) != 0`. To retrieve bit n, calculate: `(bitmap[n / 8] & (0x01 << (n % 8))) != 0`. The "size" of a `BitSequence` (the number of bits it contains) is calculated by this formula: `(bitmap.length * 8) - padding`. */
	export interface BitSequenceFormProperties {

		/** The bytes that encode the bit sequence. May have a length of zero. */
		bitmap: FormControl<string | null | undefined>,

		/** The number of bits of the last byte in `bitmap` to ignore as "padding". If the length of `bitmap` is zero, then this value must be `0`. Otherwise, this value must be between 0 and 7, inclusive. */
		padding: FormControl<number | null | undefined>,
	}
	export function CreateBitSequenceFormGroup() {
		return new FormGroup<BitSequenceFormProperties>({
			bitmap: new FormControl<string | null | undefined>(undefined),
			padding: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A bloom filter (https://en.wikipedia.org/wiki/Bloom_filter). The bloom filter hashes the entries with MD5 and treats the resulting 128-bit hash as 2 distinct 64-bit hash values, interpreted as unsigned integers using 2's complement encoding. These two hash values, named `h1` and `h2`, are then used to compute the `hash_count` hash values using the formula, starting at `i=0`: h(i) = h1 + (i * h2) These resulting values are then taken modulo the number of bits in the bloom filter to get the bits of the bloom filter to test for the given entry. */
	export interface BloomFilter {

		/** A sequence of bits, encoded in a byte array. Each byte in the `bitmap` byte array stores 8 bits of the sequence. The only exception is the last byte, which may store 8 _or fewer_ bits. The `padding` defines the number of bits of the last byte to be ignored as "padding". The values of these "padding" bits are unspecified and must be ignored. To retrieve the first bit, bit 0, calculate: `(bitmap[0] & 0x01) != 0`. To retrieve the second bit, bit 1, calculate: `(bitmap[0] & 0x02) != 0`. To retrieve the third bit, bit 2, calculate: `(bitmap[0] & 0x04) != 0`. To retrieve the fourth bit, bit 3, calculate: `(bitmap[0] & 0x08) != 0`. To retrieve bit n, calculate: `(bitmap[n / 8] & (0x01 << (n % 8))) != 0`. The "size" of a `BitSequence` (the number of bits it contains) is calculated by this formula: `(bitmap.length * 8) - padding`. */
		bits?: BitSequence;

		/** The number of hashes used by the algorithm. */
		hashCount?: number | null;
	}

	/** A bloom filter (https://en.wikipedia.org/wiki/Bloom_filter). The bloom filter hashes the entries with MD5 and treats the resulting 128-bit hash as 2 distinct 64-bit hash values, interpreted as unsigned integers using 2's complement encoding. These two hash values, named `h1` and `h2`, are then used to compute the `hash_count` hash values using the formula, starting at `i=0`: h(i) = h1 + (i * h2) These resulting values are then taken modulo the number of bits in the bloom filter to get the bits of the bloom filter to test for the given entry. */
	export interface BloomFilterFormProperties {

		/** The number of hashes used by the algorithm. */
		hashCount: FormControl<number | null | undefined>,
	}
	export function CreateBloomFilterFormGroup() {
		return new FormGroup<BloomFilterFormProperties>({
			hashCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A selection of a collection, such as `messages as m1`. */
	export interface CollectionSelector {

		/** When false, selects only collections that are immediate children of the `parent` specified in the containing `RunQueryRequest`. When true, selects all descendant collections. */
		allDescendants?: boolean | null;

		/** The collection ID. When set, selects only collections with this ID. */
		collectionId?: string | null;
	}

	/** A selection of a collection, such as `messages as m1`. */
	export interface CollectionSelectorFormProperties {

		/** When false, selects only collections that are immediate children of the `parent` specified in the containing `RunQueryRequest`. When true, selects all descendant collections. */
		allDescendants: FormControl<boolean | null | undefined>,

		/** The collection ID. When set, selects only collections with this ID. */
		collectionId: FormControl<string | null | undefined>,
	}
	export function CreateCollectionSelectorFormGroup() {
		return new FormGroup<CollectionSelectorFormProperties>({
			allDescendants: new FormControl<boolean | null | undefined>(undefined),
			collectionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Firestore.Commit. */
	export interface CommitRequest {

		/** If set, applies all writes in this transaction, and commits it. */
		transaction?: string | null;

		/** The writes to apply. Always executed atomically and in order. */
		writes?: Array<Write>;
	}

	/** The request for Firestore.Commit. */
	export interface CommitRequestFormProperties {

		/** If set, applies all writes in this transaction, and commits it. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateCommitRequestFormGroup() {
		return new FormGroup<CommitRequestFormProperties>({
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Firestore.Commit. */
	export interface CommitResponse {

		/** The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the commit. */
		commitTime?: string | null;

		/** The result of applying the writes. This i-th write result corresponds to the i-th write in the request. */
		writeResults?: Array<WriteResult>;
	}

	/** The response for Firestore.Commit. */
	export interface CommitResponseFormProperties {

		/** The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the commit. */
		commitTime: FormControl<string | null | undefined>,
	}
	export function CreateCommitResponseFormGroup() {
		return new FormGroup<CommitResponseFormProperties>({
			commitTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter that merges multiple other filters using the given operator. */
	export interface CompositeFilter {

		/** The list of filters to combine. Requires: * At least one filter is present. */
		filters?: Array<Filter>;

		/** The operator for combining multiple filters. */
		op?: CompositeFilterOp | null;
	}

	/** A filter that merges multiple other filters using the given operator. */
	export interface CompositeFilterFormProperties {

		/** The operator for combining multiple filters. */
		op: FormControl<CompositeFilterOp | null | undefined>,
	}
	export function CreateCompositeFilterFormGroup() {
		return new FormGroup<CompositeFilterFormProperties>({
			op: new FormControl<CompositeFilterOp | null | undefined>(undefined),
		});

	}


	/** A filter. */
	export interface Filter {

		/** A filter that merges multiple other filters using the given operator. */
		compositeFilter?: CompositeFilter;

		/** A filter on a specific field. */
		fieldFilter?: FieldFilter;

		/** A filter with a single operand. */
		unaryFilter?: UnaryFilter;
	}

	/** A filter. */
	export interface FilterFormProperties {
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
		});

	}


	/** A filter on a specific field. */
	export interface FieldFilter {

		/** A reference to a field in a document, ex: `stats.operations`. */
		field?: FieldReference;

		/** The operator to filter by. */
		op?: FieldFilterOp | null;

		/** A message that can hold any of the supported value types. */
		value?: Value;
	}

	/** A filter on a specific field. */
	export interface FieldFilterFormProperties {

		/** The operator to filter by. */
		op: FormControl<FieldFilterOp | null | undefined>,
	}
	export function CreateFieldFilterFormGroup() {
		return new FormGroup<FieldFilterFormProperties>({
			op: new FormControl<FieldFilterOp | null | undefined>(undefined),
		});

	}

	export enum FieldFilterOp { OPERATOR_UNSPECIFIED = 0, LESS_THAN = 1, LESS_THAN_OR_EQUAL = 2, GREATER_THAN = 3, GREATER_THAN_OR_EQUAL = 4, EQUAL = 5, NOT_EQUAL = 6, ARRAY_CONTAINS = 7, IN = 8, ARRAY_CONTAINS_ANY = 9, NOT_IN = 10 }


	/** A filter with a single operand. */
	export interface UnaryFilter {

		/** A reference to a field in a document, ex: `stats.operations`. */
		field?: FieldReference;

		/** The unary operator to apply. */
		op?: UnaryFilterOp | null;
	}

	/** A filter with a single operand. */
	export interface UnaryFilterFormProperties {

		/** The unary operator to apply. */
		op: FormControl<UnaryFilterOp | null | undefined>,
	}
	export function CreateUnaryFilterFormGroup() {
		return new FormGroup<UnaryFilterFormProperties>({
			op: new FormControl<UnaryFilterOp | null | undefined>(undefined),
		});

	}

	export enum UnaryFilterOp { OPERATOR_UNSPECIFIED = 0, IS_NAN = 1, IS_NULL = 2, IS_NOT_NAN = 3, IS_NOT_NULL = 4 }

	export enum CompositeFilterOp { OPERATOR_UNSPECIFIED = 0, AND = 1, OR = 2 }


	/** A position in a query result set. */
	export interface Cursor {

		/** If the position is just before or just after the given values, relative to the sort order defined by the query. */
		before?: boolean | null;

		/** The values that represent a position, in the order they appear in the order by clause of a query. Can contain fewer values than specified in the order by clause. */
		values?: Array<Value>;
	}

	/** A position in a query result set. */
	export interface CursorFormProperties {

		/** If the position is just before or just after the given values, relative to the sort order defined by the query. */
		before: FormControl<boolean | null | undefined>,
	}
	export function CreateCursorFormGroup() {
		return new FormGroup<CursorFormProperties>({
			before: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected. */
	export interface DocumentChange {

		/** A Firestore document. Must not exceed 1 MiB - 4 bytes. */
		document?: Document;

		/** A set of target IDs for targets that no longer match this document. */
		removedTargetIds?: Array<number>;

		/** A set of target IDs of targets that match this document. */
		targetIds?: Array<number>;
	}

	/** A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected. */
	export interface DocumentChangeFormProperties {
	}
	export function CreateDocumentChangeFormGroup() {
		return new FormGroup<DocumentChangeFormProperties>({
		});

	}


	/** A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected. */
	export interface DocumentDelete {

		/** The resource name of the Document that was deleted. */
		document?: string | null;

		/** The read timestamp at which the delete was observed. Greater or equal to the `commit_time` of the delete. */
		readTime?: string | null;

		/** A set of target IDs for targets that previously matched this entity. */
		removedTargetIds?: Array<number>;
	}

	/** A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected. */
	export interface DocumentDeleteFormProperties {

		/** The resource name of the Document that was deleted. */
		document: FormControl<string | null | undefined>,

		/** The read timestamp at which the delete was observed. Greater or equal to the `commit_time` of the delete. */
		readTime: FormControl<string | null | undefined>,
	}
	export function CreateDocumentDeleteFormGroup() {
		return new FormGroup<DocumentDeleteFormProperties>({
			document: new FormControl<string | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Document has been removed from the view of the targets. Sent if the document is no longer relevant to a target and is out of view. Can be sent instead of a DocumentDelete or a DocumentChange if the server can not send the new value of the document. Multiple DocumentRemove messages may be returned for the same logical write or delete, if multiple targets are affected. */
	export interface DocumentRemove {

		/** The resource name of the Document that has gone out of view. */
		document?: string | null;

		/** The read timestamp at which the remove was observed. Greater or equal to the `commit_time` of the change/delete/remove. */
		readTime?: string | null;

		/** A set of target IDs for targets that previously matched this document. */
		removedTargetIds?: Array<number>;
	}

	/** A Document has been removed from the view of the targets. Sent if the document is no longer relevant to a target and is out of view. Can be sent instead of a DocumentDelete or a DocumentChange if the server can not send the new value of the document. Multiple DocumentRemove messages may be returned for the same logical write or delete, if multiple targets are affected. */
	export interface DocumentRemoveFormProperties {

		/** The resource name of the Document that has gone out of view. */
		document: FormControl<string | null | undefined>,

		/** The read timestamp at which the remove was observed. Greater or equal to the `commit_time` of the change/delete/remove. */
		readTime: FormControl<string | null | undefined>,
	}
	export function CreateDocumentRemoveFormGroup() {
		return new FormGroup<DocumentRemoveFormProperties>({
			document: new FormControl<string | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A target specified by a set of documents names. */
	export interface DocumentsTarget {

		/** The names of the documents to retrieve. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. The request will fail if any of the document is not a child resource of the given `database`. Duplicate names will be elided. */
		documents?: Array<string>;
	}

	/** A target specified by a set of documents names. */
	export interface DocumentsTargetFormProperties {
	}
	export function CreateDocumentsTargetFormGroup() {
		return new FormGroup<DocumentsTargetFormProperties>({
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


	/** A digest of all the documents that match a given target. */
	export interface ExistenceFilter {

		/** The total count of documents that match target_id. If different from the count of documents in the client that match, the client must manually determine which documents no longer match the target. The client can use the `unchanged_names` bloom filter to assist with this determination by testing ALL the document names against the filter; if the document name is NOT in the filter, it means the document no longer matches the target. */
		count?: number | null;

		/** The target ID to which this filter applies. */
		targetId?: number | null;

		/** A bloom filter (https://en.wikipedia.org/wiki/Bloom_filter). The bloom filter hashes the entries with MD5 and treats the resulting 128-bit hash as 2 distinct 64-bit hash values, interpreted as unsigned integers using 2's complement encoding. These two hash values, named `h1` and `h2`, are then used to compute the `hash_count` hash values using the formula, starting at `i=0`: h(i) = h1 + (i * h2) These resulting values are then taken modulo the number of bits in the bloom filter to get the bits of the bloom filter to test for the given entry. */
		unchangedNames?: BloomFilter;
	}

	/** A digest of all the documents that match a given target. */
	export interface ExistenceFilterFormProperties {

		/** The total count of documents that match target_id. If different from the count of documents in the client that match, the client must manually determine which documents no longer match the target. The client can use the `unchanged_names` bloom filter to assist with this determination by testing ALL the document names against the filter; if the document name is NOT in the filter, it means the document no longer matches the target. */
		count: FormControl<number | null | undefined>,

		/** The target ID to which this filter applies. */
		targetId: FormControl<number | null | undefined>,
	}
	export function CreateExistenceFilterFormGroup() {
		return new FormGroup<ExistenceFilterFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			targetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Backup of a Cloud Firestore Database. The backup contains all documents and index configurations for the given database at a specific point in time. */
	export interface GoogleFirestoreAdminV1Backup {

		/** Output only. Name of the Firestore database that the backup is from. Format is `projects/{project}/databases/{database}`. */
		database?: string | null;

		/** Output only. The system-generated UUID4 for the Firestore database that the backup is from. */
		databaseUid?: string | null;

		/** Output only. The timestamp at which this backup expires. */
		expireTime?: string | null;

		/** Output only. The unique resource name of the Backup. Format is `projects/{project}/locations/{location}/backups/{backup}`. */
		name?: string | null;

		/** Output only. The backup contains an externally consistent copy of the database at this time. */
		snapshotTime?: string | null;

		/** Output only. The current state of the backup. */
		state?: GoogleFirestoreAdminV1BackupState | null;

		/** Backup specific statistics. */
		stats?: GoogleFirestoreAdminV1Stats;
	}

	/** A Backup of a Cloud Firestore Database. The backup contains all documents and index configurations for the given database at a specific point in time. */
	export interface GoogleFirestoreAdminV1BackupFormProperties {

		/** Output only. Name of the Firestore database that the backup is from. Format is `projects/{project}/databases/{database}`. */
		database: FormControl<string | null | undefined>,

		/** Output only. The system-generated UUID4 for the Firestore database that the backup is from. */
		databaseUid: FormControl<string | null | undefined>,

		/** Output only. The timestamp at which this backup expires. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The unique resource name of the Backup. Format is `projects/{project}/locations/{location}/backups/{backup}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. The backup contains an externally consistent copy of the database at this time. */
		snapshotTime: FormControl<string | null | undefined>,

		/** Output only. The current state of the backup. */
		state: FormControl<GoogleFirestoreAdminV1BackupState | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1BackupFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1BackupFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			databaseUid: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			snapshotTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleFirestoreAdminV1BackupState | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1BackupState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, NOT_AVAILABLE = 3 }


	/** Backup specific statistics. */
	export interface GoogleFirestoreAdminV1Stats {

		/** Output only. The total number of documents contained in the backup. */
		documentCount?: string | null;

		/** Output only. The total number of index entries contained in the backup. */
		indexCount?: string | null;

		/** Output only. Summation of the size of all documents and index entries in the backup, measured in bytes. */
		sizeBytes?: string | null;
	}

	/** Backup specific statistics. */
	export interface GoogleFirestoreAdminV1StatsFormProperties {

		/** Output only. The total number of documents contained in the backup. */
		documentCount: FormControl<string | null | undefined>,

		/** Output only. The total number of index entries contained in the backup. */
		indexCount: FormControl<string | null | undefined>,

		/** Output only. Summation of the size of all documents and index entries in the backup, measured in bytes. */
		sizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1StatsFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1StatsFormProperties>({
			documentCount: new FormControl<string | null | undefined>(undefined),
			indexCount: new FormControl<string | null | undefined>(undefined),
			sizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A backup schedule for a Cloud Firestore Database. This resource is owned by the database it is backing up, and is deleted along with the database. The actual backups are not though. */
	export interface GoogleFirestoreAdminV1BackupSchedule {

		/** Output only. The timestamp at which this backup schedule was created and effective since. No backups will be created for this schedule before this time. */
		createTime?: string | null;

		/** Represent a recurring schedule that runs at a specific time every day. The time zone is UTC. */
		dailyRecurrence?: GoogleFirestoreAdminV1DailyRecurrence;

		/** Output only. The unique backup schedule identifier across all locations and databases for the given project. This will be auto-assigned. Format is `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}` */
		name?: string | null;

		/** At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. */
		retention?: string | null;

		/** Output only. The timestamp at which this backup schedule was most recently updated. When a backup schedule is first created, this is the same as create_time. */
		updateTime?: string | null;

		/** Represents a recurring schedule that runs on a specified day of the week. The time zone is UTC. */
		weeklyRecurrence?: GoogleFirestoreAdminV1WeeklyRecurrence;
	}

	/** A backup schedule for a Cloud Firestore Database. This resource is owned by the database it is backing up, and is deleted along with the database. The actual backups are not though. */
	export interface GoogleFirestoreAdminV1BackupScheduleFormProperties {

		/** Output only. The timestamp at which this backup schedule was created and effective since. No backups will be created for this schedule before this time. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The unique backup schedule identifier across all locations and databases for the given project. This will be auto-assigned. Format is `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}` */
		name: FormControl<string | null | undefined>,

		/** At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days. */
		retention: FormControl<string | null | undefined>,

		/** Output only. The timestamp at which this backup schedule was most recently updated. When a backup schedule is first created, this is the same as create_time. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1BackupScheduleFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1BackupScheduleFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			retention: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represent a recurring schedule that runs at a specific time every day. The time zone is UTC. */
	export interface GoogleFirestoreAdminV1DailyRecurrence {
	}

	/** Represent a recurring schedule that runs at a specific time every day. The time zone is UTC. */
	export interface GoogleFirestoreAdminV1DailyRecurrenceFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1DailyRecurrenceFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1DailyRecurrenceFormProperties>({
		});

	}


	/** Represents a recurring schedule that runs on a specified day of the week. The time zone is UTC. */
	export interface GoogleFirestoreAdminV1WeeklyRecurrence {

		/** The day of week to run. DAY_OF_WEEK_UNSPECIFIED is not allowed. */
		day?: GoogleFirestoreAdminV1WeeklyRecurrenceDay | null;
	}

	/** Represents a recurring schedule that runs on a specified day of the week. The time zone is UTC. */
	export interface GoogleFirestoreAdminV1WeeklyRecurrenceFormProperties {

		/** The day of week to run. DAY_OF_WEEK_UNSPECIFIED is not allowed. */
		day: FormControl<GoogleFirestoreAdminV1WeeklyRecurrenceDay | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1WeeklyRecurrenceFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1WeeklyRecurrenceFormProperties>({
			day: new FormControl<GoogleFirestoreAdminV1WeeklyRecurrenceDay | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1WeeklyRecurrenceDay { DAY_OF_WEEK_UNSPECIFIED = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6, SUNDAY = 7 }


	/** Metadata related to the create database operation. */
	export interface GoogleFirestoreAdminV1CreateDatabaseMetadata {
	}

	/** Metadata related to the create database operation. */
	export interface GoogleFirestoreAdminV1CreateDatabaseMetadataFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1CreateDatabaseMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1CreateDatabaseMetadataFormProperties>({
		});

	}


	/** A Cloud Firestore Database. */
	export interface GoogleFirestoreAdminV1Database {

		/** The App Engine integration mode to use for this database. */
		appEngineIntegrationMode?: GoogleFirestoreAdminV1DatabaseAppEngineIntegrationMode | null;

		/** The concurrency control mode to use for this database. */
		concurrencyMode?: GoogleFirestoreAdminV1DatabaseConcurrencyMode | null;

		/** Output only. The timestamp at which this database was created. Databases created before 2016 do not populate create_time. */
		createTime?: string | null;

		/** State of delete protection for the database. */
		deleteProtectionState?: GoogleFirestoreAdminV1DatabaseDeleteProtectionState | null;

		/** Output only. The earliest timestamp at which older versions of the data can be read from the database. See [version_retention_period] above; this field is populated with `now - version_retention_period`. This value is continuously updated, and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery. */
		earliestVersionTime?: string | null;

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag?: string | null;

		/** Output only. The key_prefix for this database. This key_prefix is used, in combination with the project id ("~") to construct the application id that is returned from the Cloud Datastore APIs in Google App Engine first generation runtimes. This value may be empty in which case the appid to use for URL-encoded keys is the project_id (eg: foo instead of v~foo). */
		keyPrefix?: string | null;

		/** The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. */
		locationId?: string | null;

		/** The resource name of the Database. Format: `projects/{project}/databases/{database}` */
		name?: string | null;

		/** Whether to enable the PITR feature on this database. */
		pointInTimeRecoveryEnablement?: GoogleFirestoreAdminV1DatabasePointInTimeRecoveryEnablement | null;

		/** The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. */
		type?: GoogleFirestoreAdminV1DatabaseType | null;

		/** Output only. The system-generated UUID4 for this Database. */
		uid?: string | null;

		/** Output only. The timestamp at which this database was most recently updated. Note this only includes updates to the database resource and not data contained by the database. */
		updateTime?: string | null;

		/** Output only. The period during which past versions of data are retained in the database. Any read or query can specify a `read_time` within this window, and will read the state of the database at that time. If the PITR feature is enabled, the retention period is 7 days. Otherwise, the retention period is 1 hour. */
		versionRetentionPeriod?: string | null;
	}

	/** A Cloud Firestore Database. */
	export interface GoogleFirestoreAdminV1DatabaseFormProperties {

		/** The App Engine integration mode to use for this database. */
		appEngineIntegrationMode: FormControl<GoogleFirestoreAdminV1DatabaseAppEngineIntegrationMode | null | undefined>,

		/** The concurrency control mode to use for this database. */
		concurrencyMode: FormControl<GoogleFirestoreAdminV1DatabaseConcurrencyMode | null | undefined>,

		/** Output only. The timestamp at which this database was created. Databases created before 2016 do not populate create_time. */
		createTime: FormControl<string | null | undefined>,

		/** State of delete protection for the database. */
		deleteProtectionState: FormControl<GoogleFirestoreAdminV1DatabaseDeleteProtectionState | null | undefined>,

		/** Output only. The earliest timestamp at which older versions of the data can be read from the database. See [version_retention_period] above; this field is populated with `now - version_retention_period`. This value is continuously updated, and becomes stale the moment it is queried. If you are using this value to recover data, make sure to account for the time from the moment when the value is queried to the moment when you initiate the recovery. */
		earliestVersionTime: FormControl<string | null | undefined>,

		/** This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The key_prefix for this database. This key_prefix is used, in combination with the project id ("~") to construct the application id that is returned from the Cloud Datastore APIs in Google App Engine first generation runtimes. This value may be empty in which case the appid to use for URL-encoded keys is the project_id (eg: foo instead of v~foo). */
		keyPrefix: FormControl<string | null | undefined>,

		/** The location of the database. Available locations are listed at https://cloud.google.com/firestore/docs/locations. */
		locationId: FormControl<string | null | undefined>,

		/** The resource name of the Database. Format: `projects/{project}/databases/{database}` */
		name: FormControl<string | null | undefined>,

		/** Whether to enable the PITR feature on this database. */
		pointInTimeRecoveryEnablement: FormControl<GoogleFirestoreAdminV1DatabasePointInTimeRecoveryEnablement | null | undefined>,

		/** The type of the database. See https://cloud.google.com/datastore/docs/firestore-or-datastore for information about how to choose. */
		type: FormControl<GoogleFirestoreAdminV1DatabaseType | null | undefined>,

		/** Output only. The system-generated UUID4 for this Database. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The timestamp at which this database was most recently updated. Note this only includes updates to the database resource and not data contained by the database. */
		updateTime: FormControl<string | null | undefined>,

		/** Output only. The period during which past versions of data are retained in the database. Any read or query can specify a `read_time` within this window, and will read the state of the database at that time. If the PITR feature is enabled, the retention period is 7 days. Otherwise, the retention period is 1 hour. */
		versionRetentionPeriod: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1DatabaseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1DatabaseFormProperties>({
			appEngineIntegrationMode: new FormControl<GoogleFirestoreAdminV1DatabaseAppEngineIntegrationMode | null | undefined>(undefined),
			concurrencyMode: new FormControl<GoogleFirestoreAdminV1DatabaseConcurrencyMode | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteProtectionState: new FormControl<GoogleFirestoreAdminV1DatabaseDeleteProtectionState | null | undefined>(undefined),
			earliestVersionTime: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			keyPrefix: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pointInTimeRecoveryEnablement: new FormControl<GoogleFirestoreAdminV1DatabasePointInTimeRecoveryEnablement | null | undefined>(undefined),
			type: new FormControl<GoogleFirestoreAdminV1DatabaseType | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			versionRetentionPeriod: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1DatabaseAppEngineIntegrationMode { APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED = 0, ENABLED = 1, DISABLED = 2 }

	export enum GoogleFirestoreAdminV1DatabaseConcurrencyMode { CONCURRENCY_MODE_UNSPECIFIED = 0, OPTIMISTIC = 1, PESSIMISTIC = 2, OPTIMISTIC_WITH_ENTITY_GROUPS = 3 }

	export enum GoogleFirestoreAdminV1DatabaseDeleteProtectionState { DELETE_PROTECTION_STATE_UNSPECIFIED = 0, DELETE_PROTECTION_DISABLED = 1, DELETE_PROTECTION_ENABLED = 2 }

	export enum GoogleFirestoreAdminV1DatabasePointInTimeRecoveryEnablement { POINT_IN_TIME_RECOVERY_ENABLEMENT_UNSPECIFIED = 0, POINT_IN_TIME_RECOVERY_ENABLED = 1, POINT_IN_TIME_RECOVERY_DISABLED = 2 }

	export enum GoogleFirestoreAdminV1DatabaseType { DATABASE_TYPE_UNSPECIFIED = 0, FIRESTORE_NATIVE = 1, DATASTORE_MODE = 2 }


	/** A consistent snapshot of a database at a specific point in time. */
	export interface GoogleFirestoreAdminV1DatabaseSnapshot {

		/** Required. A name of the form `projects/{project_id}/databases/{database_id}` */
		database?: string | null;

		/** Required. The timestamp at which the database snapshot is taken. The requested timestamp must be a whole minute within the PITR window. */
		snapshotTime?: string | null;
	}

	/** A consistent snapshot of a database at a specific point in time. */
	export interface GoogleFirestoreAdminV1DatabaseSnapshotFormProperties {

		/** Required. A name of the form `projects/{project_id}/databases/{database_id}` */
		database: FormControl<string | null | undefined>,

		/** Required. The timestamp at which the database snapshot is taken. The requested timestamp must be a whole minute within the PITR window. */
		snapshotTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1DatabaseSnapshotFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1DatabaseSnapshotFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			snapshotTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the delete database operation. */
	export interface GoogleFirestoreAdminV1DeleteDatabaseMetadata {
	}

	/** Metadata related to the delete database operation. */
	export interface GoogleFirestoreAdminV1DeleteDatabaseMetadataFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1DeleteDatabaseMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1DeleteDatabaseMetadataFormProperties>({
		});

	}


	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.ExportDocuments. */
	export interface GoogleFirestoreAdminV1ExportDocumentsMetadata {

		/** Which collection ids are being exported. */
		collectionIds?: Array<string>;

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime?: string | null;

		/** Which namespace ids are being exported. */
		namespaceIds?: Array<string>;

		/** The state of the export operation. */
		operationState?: GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null;

		/** Where the documents are being exported to. */
		outputUriPrefix?: string | null;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressBytes?: GoogleFirestoreAdminV1Progress;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressDocuments?: GoogleFirestoreAdminV1Progress;

		/** The timestamp that corresponds to the version of the database that is being exported. If unspecified, there are no guarantees about the consistency of the documents being exported. */
		snapshotTime?: string | null;

		/** The time this operation started. */
		startTime?: string | null;
	}

	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.ExportDocuments. */
	export interface GoogleFirestoreAdminV1ExportDocumentsMetadataFormProperties {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime: FormControl<string | null | undefined>,

		/** The state of the export operation. */
		operationState: FormControl<GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null | undefined>,

		/** Where the documents are being exported to. */
		outputUriPrefix: FormControl<string | null | undefined>,

		/** The timestamp that corresponds to the version of the database that is being exported. If unspecified, there are no guarantees about the consistency of the documents being exported. */
		snapshotTime: FormControl<string | null | undefined>,

		/** The time this operation started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1ExportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ExportDocumentsMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			operationState: new FormControl<GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null | undefined>(undefined),
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
			snapshotTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState { OPERATION_STATE_UNSPECIFIED = 0, INITIALIZING = 1, PROCESSING = 2, CANCELLING = 3, FINALIZING = 4, SUCCESSFUL = 5, FAILED = 6, CANCELLED = 7 }


	/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
	export interface GoogleFirestoreAdminV1Progress {

		/** The amount of work completed. */
		completedWork?: string | null;

		/** The amount of work estimated. */
		estimatedWork?: string | null;
	}

	/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
	export interface GoogleFirestoreAdminV1ProgressFormProperties {

		/** The amount of work completed. */
		completedWork: FormControl<string | null | undefined>,

		/** The amount of work estimated. */
		estimatedWork: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1ProgressFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ProgressFormProperties>({
			completedWork: new FormControl<string | null | undefined>(undefined),
			estimatedWork: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for FirestoreAdmin.ExportDocuments. */
	export interface GoogleFirestoreAdminV1ExportDocumentsRequest {

		/** Which collection ids to export. Unspecified means all collections. */
		collectionIds?: Array<string>;

		/** An empty list represents all namespaces. This is the preferred usage for databases that don't use namespaces. An empty string element represents the default namespace. This should be used if the database has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
		namespaceIds?: Array<string>;

		/** The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time. */
		outputUriPrefix?: string | null;

		/** The timestamp that corresponds to the version of the database to be exported. The timestamp must be in the past, rounded to the minute and not older than earliestVersionTime. If specified, then the exported documents will represent a consistent view of the database at the provided time. Otherwise, there are no guarantees about the consistency of the exported documents. */
		snapshotTime?: string | null;
	}

	/** The request for FirestoreAdmin.ExportDocuments. */
	export interface GoogleFirestoreAdminV1ExportDocumentsRequestFormProperties {

		/** The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time. */
		outputUriPrefix: FormControl<string | null | undefined>,

		/** The timestamp that corresponds to the version of the database to be exported. The timestamp must be in the past, rounded to the minute and not older than earliestVersionTime. If specified, then the exported documents will represent a consistent view of the database at the provided time. Otherwise, there are no guarantees about the consistency of the exported documents. */
		snapshotTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1ExportDocumentsRequestFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ExportDocumentsRequestFormProperties>({
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
			snapshotTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returned in the google.longrunning.Operation response field. */
	export interface GoogleFirestoreAdminV1ExportDocumentsResponse {

		/** Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully. */
		outputUriPrefix?: string | null;
	}

	/** Returned in the google.longrunning.Operation response field. */
	export interface GoogleFirestoreAdminV1ExportDocumentsResponseFormProperties {

		/** Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully. */
		outputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1ExportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ExportDocumentsResponseFormProperties>({
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id. */
	export interface GoogleFirestoreAdminV1Field {

		/** The index configuration for this field. */
		indexConfig?: GoogleFirestoreAdminV1IndexConfig;

		/** Required. A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration. */
		name?: string | null;

		/** The TTL (time-to-live) configuration for documents that have this `Field` set. Storing a timestamp value into a TTL-enabled field will be treated as the document's absolute expiration time. Timestamp values in the past indicate that the document is eligible for immediate expiration. Using any other data type or leaving the field absent will disable expiration for the individual document. */
		ttlConfig?: GoogleFirestoreAdminV1TtlConfig;
	}

	/** Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id. */
	export interface GoogleFirestoreAdminV1FieldFormProperties {

		/** Required. A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1FieldFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1FieldFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The index configuration for this field. */
	export interface GoogleFirestoreAdminV1IndexConfig {

		/** Output only. Specifies the resource name of the `Field` from which this field's index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false). */
		ancestorField?: string | null;

		/** The indexes supported for this field. */
		indexes?: Array<GoogleFirestoreAdminV1Index>;

		/** Output only When true, the `Field`'s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`. */
		reverting?: boolean | null;

		/** Output only. When true, the `Field`'s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`'s index configuration is defined explicitly. */
		usesAncestorConfig?: boolean | null;
	}

	/** The index configuration for this field. */
	export interface GoogleFirestoreAdminV1IndexConfigFormProperties {

		/** Output only. Specifies the resource name of the `Field` from which this field's index configuration is set (when `uses_ancestor_config` is true), or from which it *would* be set if this field had no index configuration (when `uses_ancestor_config` is false). */
		ancestorField: FormControl<string | null | undefined>,

		/** Output only When true, the `Field`'s index configuration is in the process of being reverted. Once complete, the index config will transition to the same state as the field specified by `ancestor_field`, at which point `uses_ancestor_config` will be `true` and `reverting` will be `false`. */
		reverting: FormControl<boolean | null | undefined>,

		/** Output only. When true, the `Field`'s index configuration is set from the configuration specified by the `ancestor_field`. When false, the `Field`'s index configuration is defined explicitly. */
		usesAncestorConfig: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1IndexConfigFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1IndexConfigFormProperties>({
			ancestorField: new FormControl<string | null | undefined>(undefined),
			reverting: new FormControl<boolean | null | undefined>(undefined),
			usesAncestorConfig: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Cloud Firestore indexes enable simple and complex queries against documents in a database. */
	export interface GoogleFirestoreAdminV1Index {

		/** The API scope supported by this index. */
		apiScope?: GoogleFirestoreAdminV1IndexApiScope | null;

		/** The fields supported by this index. For composite indexes, this requires a minimum of 2 and a maximum of 100 fields. The last field entry is always for the field path `__name__`. If, on creation, `__name__` was not specified as the last field, it will be added automatically with the same direction as that of the last field defined. If the final field in a composite index is not directional, the `__name__` will be ordered ASCENDING (unless explicitly specified). For single field indexes, this will always be exactly one entry with a field path equal to the field path of the associated field. */
		fields?: Array<GoogleFirestoreAdminV1IndexField>;

		/** Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty. */
		name?: string | null;

		/** Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index. */
		queryScope?: GoogleFirestoreAdminV1IndexQueryScope | null;

		/** Output only. The serving state of the index. */
		state?: GoogleFirestoreAdminV1IndexState | null;
	}

	/** Cloud Firestore indexes enable simple and complex queries against documents in a database. */
	export interface GoogleFirestoreAdminV1IndexFormProperties {

		/** The API scope supported by this index. */
		apiScope: FormControl<GoogleFirestoreAdminV1IndexApiScope | null | undefined>,

		/** Output only. A server defined name for this index. The form of this name for composite indexes will be: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}` For single field indexes, this field will be empty. */
		name: FormControl<string | null | undefined>,

		/** Indexes with a collection query scope specified allow queries against a collection that is the child of a specific document, specified at query time, and that has the same collection id. Indexes with a collection group query scope specified allow queries against all collections descended from a specific document, specified at query time, and that have the same collection id as this index. */
		queryScope: FormControl<GoogleFirestoreAdminV1IndexQueryScope | null | undefined>,

		/** Output only. The serving state of the index. */
		state: FormControl<GoogleFirestoreAdminV1IndexState | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1IndexFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1IndexFormProperties>({
			apiScope: new FormControl<GoogleFirestoreAdminV1IndexApiScope | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			queryScope: new FormControl<GoogleFirestoreAdminV1IndexQueryScope | null | undefined>(undefined),
			state: new FormControl<GoogleFirestoreAdminV1IndexState | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1IndexApiScope { ANY_API = 0, DATASTORE_MODE_API = 1 }


	/** A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed. */
	export interface GoogleFirestoreAdminV1IndexField {

		/** Indicates that this field supports operations on `array_value`s. */
		arrayConfig?: GoogleFirestoreAdminV1IndexFieldArrayConfig | null;

		/** Can be __name__. For single field indexes, this must match the name of the field or may be omitted. */
		fieldPath?: string | null;

		/** Indicates that this field supports ordering by the specified order or comparing using =, !=, <, <=, >, >=. */
		order?: GoogleFirestoreAdminV1IndexFieldOrder | null;

		/** The index configuration to support vector search operations */
		vectorConfig?: GoogleFirestoreAdminV1VectorConfig;
	}

	/** A field in an index. The field_path describes which field is indexed, the value_mode describes how the field value is indexed. */
	export interface GoogleFirestoreAdminV1IndexFieldFormProperties {

		/** Indicates that this field supports operations on `array_value`s. */
		arrayConfig: FormControl<GoogleFirestoreAdminV1IndexFieldArrayConfig | null | undefined>,

		/** Can be __name__. For single field indexes, this must match the name of the field or may be omitted. */
		fieldPath: FormControl<string | null | undefined>,

		/** Indicates that this field supports ordering by the specified order or comparing using =, !=, <, <=, >, >=. */
		order: FormControl<GoogleFirestoreAdminV1IndexFieldOrder | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1IndexFieldFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1IndexFieldFormProperties>({
			arrayConfig: new FormControl<GoogleFirestoreAdminV1IndexFieldArrayConfig | null | undefined>(undefined),
			fieldPath: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<GoogleFirestoreAdminV1IndexFieldOrder | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1IndexFieldArrayConfig { ARRAY_CONFIG_UNSPECIFIED = 0, CONTAINS = 1 }

	export enum GoogleFirestoreAdminV1IndexFieldOrder { ORDER_UNSPECIFIED = 0, ASCENDING = 1, DESCENDING = 2 }


	/** The index configuration to support vector search operations */
	export interface GoogleFirestoreAdminV1VectorConfig {

		/** Required. The vector dimension this configuration applies to. The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. */
		dimension?: number | null;

		/** An index that stores vectors in a flat data structure, and supports exhaustive search. */
		flat?: GoogleFirestoreAdminV1FlatIndex;
	}

	/** The index configuration to support vector search operations */
	export interface GoogleFirestoreAdminV1VectorConfigFormProperties {

		/** Required. The vector dimension this configuration applies to. The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. */
		dimension: FormControl<number | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1VectorConfigFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1VectorConfigFormProperties>({
			dimension: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An index that stores vectors in a flat data structure, and supports exhaustive search. */
	export interface GoogleFirestoreAdminV1FlatIndex {
	}

	/** An index that stores vectors in a flat data structure, and supports exhaustive search. */
	export interface GoogleFirestoreAdminV1FlatIndexFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1FlatIndexFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1FlatIndexFormProperties>({
		});

	}

	export enum GoogleFirestoreAdminV1IndexQueryScope { QUERY_SCOPE_UNSPECIFIED = 0, COLLECTION = 1, COLLECTION_GROUP = 2, COLLECTION_RECURSIVE = 3 }

	export enum GoogleFirestoreAdminV1IndexState { STATE_UNSPECIFIED = 0, CREATING = 1, READY = 2, NEEDS_REPAIR = 3 }


	/** The TTL (time-to-live) configuration for documents that have this `Field` set. Storing a timestamp value into a TTL-enabled field will be treated as the document's absolute expiration time. Timestamp values in the past indicate that the document is eligible for immediate expiration. Using any other data type or leaving the field absent will disable expiration for the individual document. */
	export interface GoogleFirestoreAdminV1TtlConfig {

		/** Output only. The state of the TTL configuration. */
		state?: GoogleFirestoreAdminV1TtlConfigState | null;
	}

	/** The TTL (time-to-live) configuration for documents that have this `Field` set. Storing a timestamp value into a TTL-enabled field will be treated as the document's absolute expiration time. Timestamp values in the past indicate that the document is eligible for immediate expiration. Using any other data type or leaving the field absent will disable expiration for the individual document. */
	export interface GoogleFirestoreAdminV1TtlConfigFormProperties {

		/** Output only. The state of the TTL configuration. */
		state: FormControl<GoogleFirestoreAdminV1TtlConfigState | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1TtlConfigFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1TtlConfigFormProperties>({
			state: new FormControl<GoogleFirestoreAdminV1TtlConfigState | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1TtlConfigState { STATE_UNSPECIFIED = 0, CREATING = 1, ACTIVE = 2, NEEDS_REPAIR = 3 }


	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField. */
	export interface GoogleFirestoreAdminV1FieldOperationMetadata {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime?: string | null;

		/** The field resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` */
		field?: string | null;

		/** A list of IndexConfigDelta, which describe the intent of this operation. */
		indexConfigDeltas?: Array<GoogleFirestoreAdminV1IndexConfigDelta>;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressBytes?: GoogleFirestoreAdminV1Progress;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressDocuments?: GoogleFirestoreAdminV1Progress;

		/** The time this operation started. */
		startTime?: string | null;

		/** The state of the operation. */
		state?: GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null;

		/** Information about a TTL configuration change. */
		ttlConfigDelta?: GoogleFirestoreAdminV1TtlConfigDelta;
	}

	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.UpdateField. */
	export interface GoogleFirestoreAdminV1FieldOperationMetadataFormProperties {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime: FormControl<string | null | undefined>,

		/** The field resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` */
		field: FormControl<string | null | undefined>,

		/** The time this operation started. */
		startTime: FormControl<string | null | undefined>,

		/** The state of the operation. */
		state: FormControl<GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1FieldOperationMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1FieldOperationMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null | undefined>(undefined),
		});

	}


	/** Information about an index configuration change. */
	export interface GoogleFirestoreAdminV1IndexConfigDelta {

		/** Specifies how the index is changing. */
		changeType?: GoogleFirestoreAdminV1IndexConfigDeltaChangeType | null;

		/** Cloud Firestore indexes enable simple and complex queries against documents in a database. */
		index?: GoogleFirestoreAdminV1Index;
	}

	/** Information about an index configuration change. */
	export interface GoogleFirestoreAdminV1IndexConfigDeltaFormProperties {

		/** Specifies how the index is changing. */
		changeType: FormControl<GoogleFirestoreAdminV1IndexConfigDeltaChangeType | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1IndexConfigDeltaFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1IndexConfigDeltaFormProperties>({
			changeType: new FormControl<GoogleFirestoreAdminV1IndexConfigDeltaChangeType | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1IndexConfigDeltaChangeType { CHANGE_TYPE_UNSPECIFIED = 0, ADD = 1, REMOVE = 2 }


	/** Information about a TTL configuration change. */
	export interface GoogleFirestoreAdminV1TtlConfigDelta {

		/** Specifies how the TTL configuration is changing. */
		changeType?: GoogleFirestoreAdminV1IndexConfigDeltaChangeType | null;
	}

	/** Information about a TTL configuration change. */
	export interface GoogleFirestoreAdminV1TtlConfigDeltaFormProperties {

		/** Specifies how the TTL configuration is changing. */
		changeType: FormControl<GoogleFirestoreAdminV1IndexConfigDeltaChangeType | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1TtlConfigDeltaFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1TtlConfigDeltaFormProperties>({
			changeType: new FormControl<GoogleFirestoreAdminV1IndexConfigDeltaChangeType | null | undefined>(undefined),
		});

	}


	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments. */
	export interface GoogleFirestoreAdminV1ImportDocumentsMetadata {

		/** Which collection ids are being imported. */
		collectionIds?: Array<string>;

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime?: string | null;

		/** The location of the documents being imported. */
		inputUriPrefix?: string | null;

		/** Which namespace ids are being imported. */
		namespaceIds?: Array<string>;

		/** The state of the import operation. */
		operationState?: GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressBytes?: GoogleFirestoreAdminV1Progress;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressDocuments?: GoogleFirestoreAdminV1Progress;

		/** The time this operation started. */
		startTime?: string | null;
	}

	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.ImportDocuments. */
	export interface GoogleFirestoreAdminV1ImportDocumentsMetadataFormProperties {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime: FormControl<string | null | undefined>,

		/** The location of the documents being imported. */
		inputUriPrefix: FormControl<string | null | undefined>,

		/** The state of the import operation. */
		operationState: FormControl<GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null | undefined>,

		/** The time this operation started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1ImportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ImportDocumentsMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			inputUriPrefix: new FormControl<string | null | undefined>(undefined),
			operationState: new FormControl<GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for FirestoreAdmin.ImportDocuments. */
	export interface GoogleFirestoreAdminV1ImportDocumentsRequest {

		/** Which collection ids to import. Unspecified means all collections included in the import. */
		collectionIds?: Array<string>;

		/** Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1.ExportDocumentsResponse.output_uri_prefix. */
		inputUriPrefix?: string | null;

		/** An empty list represents all namespaces. This is the preferred usage for databases that don't use namespaces. An empty string element represents the default namespace. This should be used if the database has data in non-default namespaces, but doesn't want to include them. Each namespace in this list must be unique. */
		namespaceIds?: Array<string>;
	}

	/** The request for FirestoreAdmin.ImportDocuments. */
	export interface GoogleFirestoreAdminV1ImportDocumentsRequestFormProperties {

		/** Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1.ExportDocumentsResponse.output_uri_prefix. */
		inputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1ImportDocumentsRequestFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ImportDocumentsRequestFormProperties>({
			inputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.CreateIndex. */
	export interface GoogleFirestoreAdminV1IndexOperationMetadata {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime?: string | null;

		/** The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` */
		index?: string | null;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressBytes?: GoogleFirestoreAdminV1Progress;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressDocuments?: GoogleFirestoreAdminV1Progress;

		/** The time this operation started. */
		startTime?: string | null;

		/** The state of the operation. */
		state?: GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null;
	}

	/** Metadata for google.longrunning.Operation results from FirestoreAdmin.CreateIndex. */
	export interface GoogleFirestoreAdminV1IndexOperationMetadataFormProperties {

		/** The time this operation completed. Will be unset if operation still in progress. */
		endTime: FormControl<string | null | undefined>,

		/** The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` */
		index: FormControl<string | null | undefined>,

		/** The time this operation started. */
		startTime: FormControl<string | null | undefined>,

		/** The state of the operation. */
		state: FormControl<GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1IndexOperationMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1IndexOperationMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null | undefined>(undefined),
		});

	}


	/** The response for FirestoreAdmin.ListBackupSchedules. */
	export interface GoogleFirestoreAdminV1ListBackupSchedulesResponse {

		/** List of all backup schedules. */
		backupSchedules?: Array<GoogleFirestoreAdminV1BackupSchedule>;
	}

	/** The response for FirestoreAdmin.ListBackupSchedules. */
	export interface GoogleFirestoreAdminV1ListBackupSchedulesResponseFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1ListBackupSchedulesResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ListBackupSchedulesResponseFormProperties>({
		});

	}


	/** The response for FirestoreAdmin.ListBackups. */
	export interface GoogleFirestoreAdminV1ListBackupsResponse {

		/** List of all backups for the project. Ordered by `location ASC, create_time DESC, name ASC`. */
		backups?: Array<GoogleFirestoreAdminV1Backup>;

		/** List of locations that existing backups were not able to be fetched from. Instead of failing the entire requests when a single location is unreachable, this response returns a partial result set and list of locations unable to be reached here. The request can be retried against a single location to get a concrete error. */
		unreachable?: Array<string>;
	}

	/** The response for FirestoreAdmin.ListBackups. */
	export interface GoogleFirestoreAdminV1ListBackupsResponseFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1ListBackupsResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ListBackupsResponseFormProperties>({
		});

	}


	/** The list of databases for a project. */
	export interface GoogleFirestoreAdminV1ListDatabasesResponse {

		/** The databases in the project. */
		databases?: Array<GoogleFirestoreAdminV1Database>;

		/** In the event that data about individual databases cannot be listed they will be recorded here. An example entry might be: projects/some_project/locations/some_location This can happen if the Cloud Region that the Database resides in is currently unavailable. In this case we can't fetch all the details about the database. You may be able to get a more detailed error message (or possibly fetch the resource) by sending a 'Get' request for the resource or a 'List' request for the specific location. */
		unreachable?: Array<string>;
	}

	/** The list of databases for a project. */
	export interface GoogleFirestoreAdminV1ListDatabasesResponseFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1ListDatabasesResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ListDatabasesResponseFormProperties>({
		});

	}


	/** The response for FirestoreAdmin.ListFields. */
	export interface GoogleFirestoreAdminV1ListFieldsResponse {

		/** The requested fields. */
		fields?: Array<GoogleFirestoreAdminV1Field>;

		/** A page token that may be used to request another page of results. If blank, this is the last page. */
		nextPageToken?: string | null;
	}

	/** The response for FirestoreAdmin.ListFields. */
	export interface GoogleFirestoreAdminV1ListFieldsResponseFormProperties {

		/** A page token that may be used to request another page of results. If blank, this is the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1ListFieldsResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ListFieldsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for FirestoreAdmin.ListIndexes. */
	export interface GoogleFirestoreAdminV1ListIndexesResponse {

		/** The requested indexes. */
		indexes?: Array<GoogleFirestoreAdminV1Index>;

		/** A page token that may be used to request another page of results. If blank, this is the last page. */
		nextPageToken?: string | null;
	}

	/** The response for FirestoreAdmin.ListIndexes. */
	export interface GoogleFirestoreAdminV1ListIndexesResponseFormProperties {

		/** A page token that may be used to request another page of results. If blank, this is the last page. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1ListIndexesResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1ListIndexesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata message for google.cloud.location.Location.metadata. */
	export interface GoogleFirestoreAdminV1LocationMetadata {
	}

	/** The metadata message for google.cloud.location.Location.metadata. */
	export interface GoogleFirestoreAdminV1LocationMetadataFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1LocationMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1LocationMetadataFormProperties>({
		});

	}


	/** Metadata for the long-running operation from the RestoreDatabase request. */
	export interface GoogleFirestoreAdminV1RestoreDatabaseMetadata {

		/** The name of the backup restoring from. */
		backup?: string | null;

		/** The name of the database being restored to. */
		database?: string | null;

		/** The time the restore finished, unset for ongoing restores. */
		endTime?: string | null;

		/** The operation state of the restore. */
		operationState?: GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null;

		/** Describes the progress of the operation. Unit of work is generic and must be interpreted based on where Progress is used. */
		progressPercentage?: GoogleFirestoreAdminV1Progress;

		/** The time the restore was started. */
		startTime?: string | null;
	}

	/** Metadata for the long-running operation from the RestoreDatabase request. */
	export interface GoogleFirestoreAdminV1RestoreDatabaseMetadataFormProperties {

		/** The name of the backup restoring from. */
		backup: FormControl<string | null | undefined>,

		/** The name of the database being restored to. */
		database: FormControl<string | null | undefined>,

		/** The time the restore finished, unset for ongoing restores. */
		endTime: FormControl<string | null | undefined>,

		/** The operation state of the restore. */
		operationState: FormControl<GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null | undefined>,

		/** The time the restore was started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1RestoreDatabaseMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1RestoreDatabaseMetadataFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			operationState: new FormControl<GoogleFirestoreAdminV1ExportDocumentsMetadataOperationState | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for FirestoreAdmin.RestoreDatabase. */
	export interface GoogleFirestoreAdminV1RestoreDatabaseRequest {

		/** Backup to restore from. Must be from the same project as the parent. Format is: `projects/{project_id}/locations/{location}/backups/{backup}` */
		backup?: string | null;

		/** Required. The ID to use for the database, which will become the final component of the database's resource name. This database id must not be associated with an existing database. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. "(default)" database id is also valid. */
		databaseId?: string | null;

		/** A consistent snapshot of a database at a specific point in time. */
		databaseSnapshot?: GoogleFirestoreAdminV1DatabaseSnapshot;
	}

	/** The request message for FirestoreAdmin.RestoreDatabase. */
	export interface GoogleFirestoreAdminV1RestoreDatabaseRequestFormProperties {

		/** Backup to restore from. Must be from the same project as the parent. Format is: `projects/{project_id}/locations/{location}/backups/{backup}` */
		backup: FormControl<string | null | undefined>,

		/** Required. The ID to use for the database, which will become the final component of the database's resource name. This database id must not be associated with an existing database. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. "(default)" database id is also valid. */
		databaseId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1RestoreDatabaseRequestFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1RestoreDatabaseRequestFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			databaseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata related to the update database operation. */
	export interface GoogleFirestoreAdminV1UpdateDatabaseMetadata {
	}

	/** Metadata related to the update database operation. */
	export interface GoogleFirestoreAdminV1UpdateDatabaseMetadataFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1UpdateDatabaseMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1UpdateDatabaseMetadataFormProperties>({
		});

	}


	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface GoogleLongrunningCancelOperationRequestFormProperties {
	}
	export function CreateGoogleLongrunningCancelOperationRequestFormGroup() {
		return new FormGroup<GoogleLongrunningCancelOperationRequestFormProperties>({
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<GoogleLongrunningOperation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface GoogleLongrunningListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleLongrunningListOperationsResponseFormGroup() {
		return new FormGroup<GoogleLongrunningListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface GoogleLongrunningOperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateGoogleLongrunningOperationFormGroup() {
		return new FormGroup<GoogleLongrunningOperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The request for Firestore.ListCollectionIds. */
	export interface ListCollectionIdsRequest {

		/** The maximum number of results to return. */
		pageSize?: number | null;

		/** A page token. Must be a value from ListCollectionIdsResponse. */
		pageToken?: string | null;

		/** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime?: string | null;
	}

	/** The request for Firestore.ListCollectionIds. */
	export interface ListCollectionIdsRequestFormProperties {

		/** The maximum number of results to return. */
		pageSize: FormControl<number | null | undefined>,

		/** A page token. Must be a value from ListCollectionIdsResponse. */
		pageToken: FormControl<string | null | undefined>,

		/** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime: FormControl<string | null | undefined>,
	}
	export function CreateListCollectionIdsRequestFormGroup() {
		return new FormGroup<ListCollectionIdsRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from Firestore.ListCollectionIds. */
	export interface ListCollectionIdsResponse {

		/** The collection ids. */
		collectionIds?: Array<string>;

		/** A page token that may be used to continue the list. */
		nextPageToken?: string | null;
	}

	/** The response from Firestore.ListCollectionIds. */
	export interface ListCollectionIdsResponseFormProperties {

		/** A page token that may be used to continue the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCollectionIdsResponseFormGroup() {
		return new FormGroup<ListCollectionIdsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Firestore.ListDocuments. */
	export interface ListDocumentsResponse {

		/** The Documents found. */
		documents?: Array<Document>;

		/** A token to retrieve the next page of documents. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** The response for Firestore.ListDocuments. */
	export interface ListDocumentsResponseFormProperties {

		/** A token to retrieve the next page of documents. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDocumentsResponseFormGroup() {
		return new FormGroup<ListDocumentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponse {

		/** A list of locations that matches the specified filter in the request. */
		locations?: Array<Location>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for Locations.ListLocations. */
	export interface ListLocationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLocationsResponseFormGroup() {
		return new FormGroup<ListLocationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that represents a Google Cloud location. */
	export interface Location {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName?: string | null;

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels?: {[id: string]: string };

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId?: string | null;

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata?: {[id: string]: any };

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name?: string | null;
	}

	/** A resource that represents a Google Cloud location. */
	export interface LocationFormProperties {

		/** The friendly name for this location, typically a nearby city name. For example, "Tokyo". */
		displayName: FormControl<string | null | undefined>,

		/** Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"} */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The canonical id for this location. For example: `"us-east1"`. */
		locationId: FormControl<string | null | undefined>,

		/** Service-specific metadata. For example the available capacity at the given location. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"` */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request for Firestore.Listen */
	export interface ListenRequest {

		/** A specification of a set of documents to listen to. */
		addTarget?: Target;

		/** Labels associated with this target change. */
		labels?: {[id: string]: string };

		/** The ID of a target to remove from this stream. */
		removeTarget?: number | null;
	}

	/** A request for Firestore.Listen */
	export interface ListenRequestFormProperties {

		/** Labels associated with this target change. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The ID of a target to remove from this stream. */
		removeTarget: FormControl<number | null | undefined>,
	}
	export function CreateListenRequestFormGroup() {
		return new FormGroup<ListenRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			removeTarget: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A specification of a set of documents to listen to. */
	export interface Target {

		/** A target specified by a set of documents names. */
		documents?: DocumentsTarget;

		/** The number of documents that last matched the query at the resume token or read time. This value is only relevant when a `resume_type` is provided. This value being present and greater than zero signals that the client wants `ExistenceFilter.unchanged_names` to be included in the response. */
		expectedCount?: number | null;

		/** If the target should be removed once it is current and consistent. */
		once?: boolean | null;

		/** A target specified by a query. */
		query?: QueryTarget;

		/** Start listening after a specific `read_time`. The client must know the state of matching documents at this time. */
		readTime?: string | null;

		/** A resume token from a prior TargetChange for an identical target. Using a resume token with a different target is unsupported and may fail. */
		resumeToken?: string | null;

		/** The target ID that identifies the target on the stream. Must be a positive number and non-zero. If `target_id` is 0 (or unspecified), the server will assign an ID for this target and return that in a `TargetChange::ADD` event. Once a target with `target_id=0` is added, all subsequent targets must also have `target_id=0`. If an `AddTarget` request with `target_id != 0` is sent to the server after a target with `target_id=0` is added, the server will immediately send a response with a `TargetChange::Remove` event. Note that if the client sends multiple `AddTarget` requests without an ID, the order of IDs returned in `TargetChage.target_ids` are undefined. Therefore, clients should provide a target ID instead of relying on the server to assign one. If `target_id` is non-zero, there must not be an existing active target on this stream with the same ID. */
		targetId?: number | null;
	}

	/** A specification of a set of documents to listen to. */
	export interface TargetFormProperties {

		/** The number of documents that last matched the query at the resume token or read time. This value is only relevant when a `resume_type` is provided. This value being present and greater than zero signals that the client wants `ExistenceFilter.unchanged_names` to be included in the response. */
		expectedCount: FormControl<number | null | undefined>,

		/** If the target should be removed once it is current and consistent. */
		once: FormControl<boolean | null | undefined>,

		/** Start listening after a specific `read_time`. The client must know the state of matching documents at this time. */
		readTime: FormControl<string | null | undefined>,

		/** A resume token from a prior TargetChange for an identical target. Using a resume token with a different target is unsupported and may fail. */
		resumeToken: FormControl<string | null | undefined>,

		/** The target ID that identifies the target on the stream. Must be a positive number and non-zero. If `target_id` is 0 (or unspecified), the server will assign an ID for this target and return that in a `TargetChange::ADD` event. Once a target with `target_id=0` is added, all subsequent targets must also have `target_id=0`. If an `AddTarget` request with `target_id != 0` is sent to the server after a target with `target_id=0` is added, the server will immediately send a response with a `TargetChange::Remove` event. Note that if the client sends multiple `AddTarget` requests without an ID, the order of IDs returned in `TargetChage.target_ids` are undefined. Therefore, clients should provide a target ID instead of relying on the server to assign one. If `target_id` is non-zero, there must not be an existing active target on this stream with the same ID. */
		targetId: FormControl<number | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			expectedCount: new FormControl<number | null | undefined>(undefined),
			once: new FormControl<boolean | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
			resumeToken: new FormControl<string | null | undefined>(undefined),
			targetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A target specified by a query. */
	export interface QueryTarget {

		/** The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` */
		parent?: string | null;

		/** A Firestore query. */
		structuredQuery?: StructuredQuery;
	}

	/** A target specified by a query. */
	export interface QueryTargetFormProperties {

		/** The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` */
		parent: FormControl<string | null | undefined>,
	}
	export function CreateQueryTargetFormGroup() {
		return new FormGroup<QueryTargetFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Firestore query. */
	export interface StructuredQuery {

		/** A position in a query result set. */
		endAt?: Cursor;

		/** The collections to query. */
		from?: Array<CollectionSelector>;

		/** The maximum number of results to return. Applies after all other constraints. Requires: * The value must be greater than or equal to zero if specified. */
		limit?: number | null;

		/** The number of documents to skip before returning the first result. This applies after the constraints specified by the `WHERE`, `START AT`, & `END AT` but before the `LIMIT` clause. Requires: * The value must be greater than or equal to zero if specified. */
		offset?: number | null;

		/** The order to apply to the query results. Firestore allows callers to provide a full ordering, a partial ordering, or no ordering at all. In all cases, Firestore guarantees a stable ordering through the following rules: * The `order_by` is required to reference all fields used with an inequality filter. * All fields that are required to be in the `order_by` but are not already present are appended in lexicographical ordering of the field name. * If an order on `__name__` is not specified, it is appended by default. Fields are appended with the same sort direction as the last order specified, or 'ASCENDING' if no order was specified. For example: * `ORDER BY a` becomes `ORDER BY a ASC, __name__ ASC` * `ORDER BY a DESC` becomes `ORDER BY a DESC, __name__ DESC` * `WHERE a > 1` becomes `WHERE a > 1 ORDER BY a ASC, __name__ ASC` * `WHERE __name__ > ... AND a > 1` becomes `WHERE __name__ > ... AND a > 1 ORDER BY a ASC, __name__ ASC` */
		orderBy?: Array<Order>;

		/** The projection of document's fields to return. */
		select?: Projection;

		/** A position in a query result set. */
		startAt?: Cursor;

		/** A filter. */
		where?: Filter;
	}

	/** A Firestore query. */
	export interface StructuredQueryFormProperties {

		/** The maximum number of results to return. Applies after all other constraints. Requires: * The value must be greater than or equal to zero if specified. */
		limit: FormControl<number | null | undefined>,

		/** The number of documents to skip before returning the first result. This applies after the constraints specified by the `WHERE`, `START AT`, & `END AT` but before the `LIMIT` clause. Requires: * The value must be greater than or equal to zero if specified. */
		offset: FormControl<number | null | undefined>,
	}
	export function CreateStructuredQueryFormGroup() {
		return new FormGroup<StructuredQueryFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An order on a field. */
	export interface Order {

		/** The direction to order by. Defaults to `ASCENDING`. */
		direction?: OrderDirection | null;

		/** A reference to a field in a document, ex: `stats.operations`. */
		field?: FieldReference;
	}

	/** An order on a field. */
	export interface OrderFormProperties {

		/** The direction to order by. Defaults to `ASCENDING`. */
		direction: FormControl<OrderDirection | null | undefined>,
	}
	export function CreateOrderFormGroup() {
		return new FormGroup<OrderFormProperties>({
			direction: new FormControl<OrderDirection | null | undefined>(undefined),
		});

	}

	export enum OrderDirection { DIRECTION_UNSPECIFIED = 0, ASCENDING = 1, DESCENDING = 2 }


	/** The projection of document's fields to return. */
	export interface Projection {

		/** The fields to return. If empty, all fields are returned. To only return the name of the document, use `['__name__']`. */
		fields?: Array<FieldReference>;
	}

	/** The projection of document's fields to return. */
	export interface ProjectionFormProperties {
	}
	export function CreateProjectionFormGroup() {
		return new FormGroup<ProjectionFormProperties>({
		});

	}


	/** The response for Firestore.Listen. */
	export interface ListenResponse {

		/** A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected. */
		documentChange?: DocumentChange;

		/** A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected. */
		documentDelete?: DocumentDelete;

		/** A Document has been removed from the view of the targets. Sent if the document is no longer relevant to a target and is out of view. Can be sent instead of a DocumentDelete or a DocumentChange if the server can not send the new value of the document. Multiple DocumentRemove messages may be returned for the same logical write or delete, if multiple targets are affected. */
		documentRemove?: DocumentRemove;

		/** A digest of all the documents that match a given target. */
		filter?: ExistenceFilter;

		/** Targets being watched have changed. */
		targetChange?: TargetChange;
	}

	/** The response for Firestore.Listen. */
	export interface ListenResponseFormProperties {
	}
	export function CreateListenResponseFormGroup() {
		return new FormGroup<ListenResponseFormProperties>({
		});

	}


	/** Targets being watched have changed. */
	export interface TargetChange {

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		cause?: Status;

		/** The consistent `read_time` for the given `target_ids` (omitted when the target_ids are not at a consistent snapshot). The stream is guaranteed to send a `read_time` with `target_ids` empty whenever the entire stream reaches a new consistent snapshot. ADD, CURRENT, and RESET messages are guaranteed to (eventually) result in a new consistent snapshot (while NO_CHANGE and REMOVE messages are not). For a given stream, `read_time` is guaranteed to be monotonically increasing. */
		readTime?: string | null;

		/** A token that can be used to resume the stream for the given `target_ids`, or all targets if `target_ids` is empty. Not set on every target change. */
		resumeToken?: string | null;

		/** The type of change that occurred. */
		targetChangeType?: TargetChangeTargetChangeType | null;

		/** The target IDs of targets that have changed. If empty, the change applies to all targets. The order of the target IDs is not defined. */
		targetIds?: Array<number>;
	}

	/** Targets being watched have changed. */
	export interface TargetChangeFormProperties {

		/** The consistent `read_time` for the given `target_ids` (omitted when the target_ids are not at a consistent snapshot). The stream is guaranteed to send a `read_time` with `target_ids` empty whenever the entire stream reaches a new consistent snapshot. ADD, CURRENT, and RESET messages are guaranteed to (eventually) result in a new consistent snapshot (while NO_CHANGE and REMOVE messages are not). For a given stream, `read_time` is guaranteed to be monotonically increasing. */
		readTime: FormControl<string | null | undefined>,

		/** A token that can be used to resume the stream for the given `target_ids`, or all targets if `target_ids` is empty. Not set on every target change. */
		resumeToken: FormControl<string | null | undefined>,

		/** The type of change that occurred. */
		targetChangeType: FormControl<TargetChangeTargetChangeType | null | undefined>,
	}
	export function CreateTargetChangeFormGroup() {
		return new FormGroup<TargetChangeFormProperties>({
			readTime: new FormControl<string | null | undefined>(undefined),
			resumeToken: new FormControl<string | null | undefined>(undefined),
			targetChangeType: new FormControl<TargetChangeTargetChangeType | null | undefined>(undefined),
		});

	}

	export enum TargetChangeTargetChangeType { NO_CHANGE = 0, ADD = 1, REMOVE = 2, CURRENT = 3, RESET = 4 }


	/** The request for Firestore.PartitionQuery. */
	export interface PartitionQueryRequest {

		/** The maximum number of partitions to return in this call, subject to `partition_count`. For example, if `partition_count` = 10 and `page_size` = 8, the first call to PartitionQuery will return up to 8 partitions and a `next_page_token` if more results exist. A second call to PartitionQuery will return up to 2 partitions, to complete the total of 10 specified in `partition_count`. */
		pageSize?: number | null;

		/** The `next_page_token` value returned from a previous call to PartitionQuery that may be used to get an additional set of results. There are no ordering guarantees between sets of results. Thus, using multiple sets of results will require merging the different result sets. For example, two subsequent calls using a page_token may return: * cursor B, cursor M, cursor Q * cursor A, cursor U, cursor W To obtain a complete result set ordered with respect to the results of the query supplied to PartitionQuery, the results sets should be merged: cursor A, cursor B, cursor M, cursor Q, cursor U, cursor W */
		pageToken?: string | null;

		/** The desired maximum number of partition points. The partitions may be returned across multiple pages of results. The number must be positive. The actual number of partitions returned may be fewer. For example, this may be set to one fewer than the number of parallel queries to be run, or in running a data pipeline job, one fewer than the number of workers or compute instances available. */
		partitionCount?: string | null;

		/** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime?: string | null;

		/** A Firestore query. */
		structuredQuery?: StructuredQuery;
	}

	/** The request for Firestore.PartitionQuery. */
	export interface PartitionQueryRequestFormProperties {

		/** The maximum number of partitions to return in this call, subject to `partition_count`. For example, if `partition_count` = 10 and `page_size` = 8, the first call to PartitionQuery will return up to 8 partitions and a `next_page_token` if more results exist. A second call to PartitionQuery will return up to 2 partitions, to complete the total of 10 specified in `partition_count`. */
		pageSize: FormControl<number | null | undefined>,

		/** The `next_page_token` value returned from a previous call to PartitionQuery that may be used to get an additional set of results. There are no ordering guarantees between sets of results. Thus, using multiple sets of results will require merging the different result sets. For example, two subsequent calls using a page_token may return: * cursor B, cursor M, cursor Q * cursor A, cursor U, cursor W To obtain a complete result set ordered with respect to the results of the query supplied to PartitionQuery, the results sets should be merged: cursor A, cursor B, cursor M, cursor Q, cursor U, cursor W */
		pageToken: FormControl<string | null | undefined>,

		/** The desired maximum number of partition points. The partitions may be returned across multiple pages of results. The number must be positive. The actual number of partitions returned may be fewer. For example, this may be set to one fewer than the number of parallel queries to be run, or in running a data pipeline job, one fewer than the number of workers or compute instances available. */
		partitionCount: FormControl<string | null | undefined>,

		/** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime: FormControl<string | null | undefined>,
	}
	export function CreatePartitionQueryRequestFormGroup() {
		return new FormGroup<PartitionQueryRequestFormProperties>({
			pageSize: new FormControl<number | null | undefined>(undefined),
			pageToken: new FormControl<string | null | undefined>(undefined),
			partitionCount: new FormControl<string | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Firestore.PartitionQuery. */
	export interface PartitionQueryResponse {

		/** A page token that may be used to request an additional set of results, up to the number specified by `partition_count` in the PartitionQuery request. If blank, there are no more results. */
		nextPageToken?: string | null;

		/** Partition results. Each partition is a split point that can be used by RunQuery as a starting or end point for the query results. The RunQuery requests must be made with the same query supplied to this PartitionQuery request. The partition cursors will be ordered according to same ordering as the results of the query supplied to PartitionQuery. For example, if a PartitionQuery request returns partition cursors A and B, running the following three queries will return the entire result set of the original query: * query, end_at A * query, start_at A, end_at B * query, start_at B An empty result may indicate that the query has too few results to be partitioned, or that the query is not yet supported for partitioning. */
		partitions?: Array<Cursor>;
	}

	/** The response for Firestore.PartitionQuery. */
	export interface PartitionQueryResponseFormProperties {

		/** A page token that may be used to request an additional set of results, up to the number specified by `partition_count` in the PartitionQuery request. If blank, there are no more results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreatePartitionQueryResponseFormGroup() {
		return new FormGroup<PartitionQueryResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Firestore.Rollback. */
	export interface RollbackRequest {

		/** Required. The transaction to roll back. */
		transaction?: string | null;
	}

	/** The request for Firestore.Rollback. */
	export interface RollbackRequestFormProperties {

		/** Required. The transaction to roll back. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateRollbackRequestFormGroup() {
		return new FormGroup<RollbackRequestFormProperties>({
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Firestore.RunAggregationQuery. */
	export interface RunAggregationQueryRequest {

		/** Options for creating a new transaction. */
		newTransaction?: TransactionOptions;

		/** Executes the query at the given timestamp. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime?: string | null;

		/** Firestore query for running an aggregation over a StructuredQuery. */
		structuredAggregationQuery?: StructuredAggregationQuery;

		/** Run the aggregation within an already active transaction. The value here is the opaque transaction ID to execute the query in. */
		transaction?: string | null;
	}

	/** The request for Firestore.RunAggregationQuery. */
	export interface RunAggregationQueryRequestFormProperties {

		/** Executes the query at the given timestamp. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime: FormControl<string | null | undefined>,

		/** Run the aggregation within an already active transaction. The value here is the opaque transaction ID to execute the query in. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateRunAggregationQueryRequestFormGroup() {
		return new FormGroup<RunAggregationQueryRequestFormProperties>({
			readTime: new FormControl<string | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Firestore query for running an aggregation over a StructuredQuery. */
	export interface StructuredAggregationQuery {

		/** Optional. Series of aggregations to apply over the results of the `structured_query`. Requires: * A minimum of one and maximum of five aggregations per query. */
		aggregations?: Array<Aggregation>;

		/** A Firestore query. */
		structuredQuery?: StructuredQuery;
	}

	/** Firestore query for running an aggregation over a StructuredQuery. */
	export interface StructuredAggregationQueryFormProperties {
	}
	export function CreateStructuredAggregationQueryFormGroup() {
		return new FormGroup<StructuredAggregationQueryFormProperties>({
		});

	}


	/** The response for Firestore.RunAggregationQuery. */
	export interface RunAggregationQueryResponse {

		/** The time at which the aggregate result was computed. This is always monotonically increasing; in this case, the previous AggregationResult in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `result` will be sent, and this represents the time at which the query was run. */
		readTime?: string | null;

		/** The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result. */
		result?: AggregationResult;

		/** The transaction that was started as part of this request. Only present on the first response when the request requested to start a new transaction. */
		transaction?: string | null;
	}

	/** The response for Firestore.RunAggregationQuery. */
	export interface RunAggregationQueryResponseFormProperties {

		/** The time at which the aggregate result was computed. This is always monotonically increasing; in this case, the previous AggregationResult in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `result` will be sent, and this represents the time at which the query was run. */
		readTime: FormControl<string | null | undefined>,

		/** The transaction that was started as part of this request. Only present on the first response when the request requested to start a new transaction. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateRunAggregationQueryResponseFormGroup() {
		return new FormGroup<RunAggregationQueryResponseFormProperties>({
			readTime: new FormControl<string | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Firestore.RunQuery. */
	export interface RunQueryRequest {

		/** Options for creating a new transaction. */
		newTransaction?: TransactionOptions;

		/** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime?: string | null;

		/** A Firestore query. */
		structuredQuery?: StructuredQuery;

		/** Run the query within an already active transaction. The value here is the opaque transaction ID to execute the query in. */
		transaction?: string | null;
	}

	/** The request for Firestore.RunQuery. */
	export interface RunQueryRequestFormProperties {

		/** Reads documents as they were at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. */
		readTime: FormControl<string | null | undefined>,

		/** Run the query within an already active transaction. The value here is the opaque transaction ID to execute the query in. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateRunQueryRequestFormGroup() {
		return new FormGroup<RunQueryRequestFormProperties>({
			readTime: new FormControl<string | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Firestore.RunQuery. */
	export interface RunQueryResponse {

		/** A Firestore document. Must not exceed 1 MiB - 4 bytes. */
		document?: Document;

		/** If present, Firestore has completely finished the request and no more documents will be returned. */
		done?: boolean | null;

		/** The time at which the document was read. This may be monotonically increasing; in this case, the previous documents in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `document` will be sent, and this represents the time at which the query was run. */
		readTime?: string | null;

		/** The number of results that have been skipped due to an offset between the last response and the current response. */
		skippedResults?: number | null;

		/** The transaction that was started as part of this request. Can only be set in the first response, and only if RunQueryRequest.new_transaction was set in the request. If set, no other fields will be set in this response. */
		transaction?: string | null;
	}

	/** The response for Firestore.RunQuery. */
	export interface RunQueryResponseFormProperties {

		/** If present, Firestore has completely finished the request and no more documents will be returned. */
		done: FormControl<boolean | null | undefined>,

		/** The time at which the document was read. This may be monotonically increasing; in this case, the previous documents in the result stream are guaranteed not to have changed between their `read_time` and this one. If the query returns no results, a response with `read_time` and no `document` will be sent, and this represents the time at which the query was run. */
		readTime: FormControl<string | null | undefined>,

		/** The number of results that have been skipped due to an offset between the last response and the current response. */
		skippedResults: FormControl<number | null | undefined>,

		/** The transaction that was started as part of this request. Can only be set in the first response, and only if RunQueryRequest.new_transaction was set in the request. If set, no other fields will be set in this response. */
		transaction: FormControl<string | null | undefined>,
	}
	export function CreateRunQueryResponseFormGroup() {
		return new FormGroup<RunQueryResponseFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			readTime: new FormControl<string | null | undefined>(undefined),
			skippedResults: new FormControl<number | null | undefined>(undefined),
			transaction: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for Firestore.Write. The first request creates a stream, or resumes an existing one from a token. When creating a new stream, the server replies with a response containing only an ID and a token, to use in the next request. When resuming a stream, the server first streams any responses later than the given token, then a response containing only an up-to-date token, to use in the next request. */
	export interface WriteRequest {

		/** Labels associated with this write request. */
		labels?: {[id: string]: string };

		/** The ID of the write stream to resume. This may only be set in the first message. When left empty, a new write stream will be created. */
		streamId?: string | null;

		/** A stream token that was previously sent by the server. The client should set this field to the token from the most recent WriteResponse it has received. This acknowledges that the client has received responses up to this token. After sending this token, earlier tokens may not be used anymore. The server may close the stream if there are too many unacknowledged responses. Leave this field unset when creating a new stream. To resume a stream at a specific point, set this field and the `stream_id` field. Leave this field unset when creating a new stream. */
		streamToken?: string | null;

		/** The writes to apply. Always executed atomically and in order. This must be empty on the first request. This may be empty on the last request. This must not be empty on all other requests. */
		writes?: Array<Write>;
	}

	/** The request for Firestore.Write. The first request creates a stream, or resumes an existing one from a token. When creating a new stream, the server replies with a response containing only an ID and a token, to use in the next request. When resuming a stream, the server first streams any responses later than the given token, then a response containing only an up-to-date token, to use in the next request. */
	export interface WriteRequestFormProperties {

		/** Labels associated with this write request. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The ID of the write stream to resume. This may only be set in the first message. When left empty, a new write stream will be created. */
		streamId: FormControl<string | null | undefined>,

		/** A stream token that was previously sent by the server. The client should set this field to the token from the most recent WriteResponse it has received. This acknowledges that the client has received responses up to this token. After sending this token, earlier tokens may not be used anymore. The server may close the stream if there are too many unacknowledged responses. Leave this field unset when creating a new stream. To resume a stream at a specific point, set this field and the `stream_id` field. Leave this field unset when creating a new stream. */
		streamToken: FormControl<string | null | undefined>,
	}
	export function CreateWriteRequestFormGroup() {
		return new FormGroup<WriteRequestFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
			streamToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response for Firestore.Write. */
	export interface WriteResponse {

		/** The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the write. */
		commitTime?: string | null;

		/** The ID of the stream. Only set on the first message, when a new stream was created. */
		streamId?: string | null;

		/** A token that represents the position of this response in the stream. This can be used by a client to resume the stream at this point. This field is always set. */
		streamToken?: string | null;

		/** The result of applying the writes. This i-th write result corresponds to the i-th write in the request. */
		writeResults?: Array<WriteResult>;
	}

	/** The response for Firestore.Write. */
	export interface WriteResponseFormProperties {

		/** The time at which the commit occurred. Any read with an equal or greater `read_time` is guaranteed to see the effects of the write. */
		commitTime: FormControl<string | null | undefined>,

		/** The ID of the stream. Only set on the first message, when a new stream was created. */
		streamId: FormControl<string | null | undefined>,

		/** A token that represents the position of this response in the stream. This can be used by a client to resume the stream at this point. This field is always set. */
		streamToken: FormControl<string | null | undefined>,
	}
	export function CreateWriteResponseFormGroup() {
		return new FormGroup<WriteResponseFormProperties>({
			commitTime: new FormControl<string | null | undefined>(undefined),
			streamId: new FormControl<string | null | undefined>(undefined),
			streamToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
		 * Post v1/{database}/documents:batchGet
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {BatchGetDocumentsResponse} Successful response
		 */
		Firestore_projects_databases_documents_batchGet(database: string, requestBody: BatchGetDocumentsRequest): Observable<BatchGetDocumentsResponse> {
			return this.http.post<BatchGetDocumentsResponse>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:batchGet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
		 * Post v1/{database}/documents:batchWrite
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {BatchWriteResponse} Successful response
		 */
		Firestore_projects_databases_documents_batchWrite(database: string, requestBody: BatchWriteRequest): Observable<BatchWriteResponse> {
			return this.http.post<BatchWriteResponse>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:batchWrite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a new transaction.
		 * Post v1/{database}/documents:beginTransaction
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {BeginTransactionResponse} Successful response
		 */
		Firestore_projects_databases_documents_beginTransaction(database: string, requestBody: BeginTransactionRequest): Observable<BeginTransactionResponse> {
			return this.http.post<BeginTransactionResponse>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:beginTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Commits a transaction, while optionally updating documents.
		 * Post v1/{database}/documents:commit
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {CommitResponse} Successful response
		 */
		Firestore_projects_databases_documents_commit(database: string, requestBody: CommitRequest): Observable<CommitResponse> {
			return this.http.post<CommitResponse>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Listens to changes. This method is only available via gRPC or WebChannel (not REST).
		 * Post v1/{database}/documents:listen
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {ListenResponse} Successful response
		 */
		Firestore_projects_databases_documents_listen(database: string, requestBody: ListenRequest): Observable<ListenResponse> {
			return this.http.post<ListenResponse>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:listen', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rolls back a transaction.
		 * Post v1/{database}/documents:rollback
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {Empty} Successful response
		 */
		Firestore_projects_databases_documents_rollback(database: string, requestBody: RollbackRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
		 * Post v1/{database}/documents:write
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message.
		 * @return {WriteResponse} Successful response
		 */
		Firestore_projects_databases_documents_write(database: string, requestBody: WriteRequest): Observable<WriteResponse> {
			return this.http.post<WriteResponse>(this.baseUri + 'v1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:write', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a backup.
		 * Delete v1/{name}
		 * @param {string} name Required. Name of the backup to delete. format is `projects/{project}/locations/{location}/backups/{backup}`.
		 * @param {boolean} currentDocument_exists When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
		 * @param {string} currentDocument_updateTime When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
		 * @return {Empty} Successful response
		 */
		Firestore_projects_locations_backups_delete(name: string, currentDocument_exists: boolean | null | undefined, currentDocument_updateTime: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&currentDocument_exists=' + currentDocument_exists + '&currentDocument_updateTime=' + (currentDocument_updateTime == null ? '' : encodeURIComponent(currentDocument_updateTime)), {});
		}

		/**
		 * Gets information about a backup.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the backup to fetch. Format is `projects/{project}/locations/{location}/backups/{backup}`.
		 * @param {Array<string>} mask_fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
		 * @param {string} readTime Reads the version of the document at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
		 * @param {string} transaction Reads the document in a transaction.
		 * @return {GoogleFirestoreAdminV1Backup} Successful response
		 */
		Firestore_projects_locations_backups_get(name: string, mask_fieldPaths: Array<string> | null | undefined, readTime: string | null | undefined, transaction: string | null | undefined): Observable<GoogleFirestoreAdminV1Backup> {
			return this.http.get<GoogleFirestoreAdminV1Backup>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&' + mask_fieldPaths?.map(z => `mask.fieldPaths=${encodeURIComponent(z)}`).join('&') + '&readTime=' + (readTime == null ? '' : encodeURIComponent(readTime)) + '&transaction=' + (transaction == null ? '' : encodeURIComponent(transaction)), {});
		}

		/**
		 * Updates or inserts a document.
		 * Patch v1/{name}
		 * @param {string} name The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
		 * @param {boolean} currentDocument_exists When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
		 * @param {string} currentDocument_updateTime When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
		 * @param {Array<string>} mask_fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
		 * @param {Array<string>} updateMask_fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
		 * @return {Document} Successful response
		 */
		Firestore_projects_databases_documents_patch(name: string, currentDocument_exists: boolean | null | undefined, currentDocument_updateTime: string | null | undefined, mask_fieldPaths: Array<string> | null | undefined, updateMask_fieldPaths: Array<string> | null | undefined, requestBody: Document): Observable<Document> {
			return this.http.patch<Document>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&currentDocument_exists=' + currentDocument_exists + '&currentDocument_updateTime=' + (currentDocument_updateTime == null ? '' : encodeURIComponent(currentDocument_updateTime)) + '&' + mask_fieldPaths?.map(z => `mask.fieldPaths=${encodeURIComponent(z)}`).join('&') + '&' + updateMask_fieldPaths?.map(z => `updateMask.fieldPaths=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists information about the supported locations for this service.
		 * Get v1/{name}/locations
		 * @param {string} name The resource that owns the locations collection, if applicable.
		 * @param {string} filter A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
		 * @param {number} pageSize The maximum number of results to return. If not set, the service selects a default.
		 * @param {string} pageToken A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
		 * @return {ListLocationsResponse} Successful response
		 */
		Firestore_projects_locations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLocationsResponse> {
			return this.http.get<ListLocationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/locations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/{name}/operations
		 * @param {string} name The name of the operation's parent resource.
		 * @param {string} filter The standard list filter.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {GoogleLongrunningListOperationsResponse} Successful response
		 */
		Firestore_projects_databases_operations_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleLongrunningListOperationsResponse> {
			return this.http.get<GoogleLongrunningListOperationsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/operations&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
		 * Post v1/{name}:cancel
		 * @param {string} name The name of the operation resource to be cancelled.
		 * @return {Empty} Successful response
		 */
		Firestore_projects_databases_operations_cancel(name: string, requestBody: GoogleLongrunningCancelOperationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
		 * Post v1/{name}:exportDocuments
		 * @param {string} name Required. Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_exportDocuments(name: string, requestBody: GoogleFirestoreAdminV1ExportDocumentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':exportDocuments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
		 * Post v1/{name}:importDocuments
		 * @param {string} name Required. Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_importDocuments(name: string, requestBody: GoogleFirestoreAdminV1ImportDocumentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':importDocuments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List backup schedules.
		 * Get v1/{parent}/backupSchedules
		 * @param {string} parent Required. The parent database. Format is `projects/{project}/databases/{database}`.
		 * @return {GoogleFirestoreAdminV1ListBackupSchedulesResponse} Successful response
		 */
		Firestore_projects_databases_backupSchedules_list(parent: string): Observable<GoogleFirestoreAdminV1ListBackupSchedulesResponse> {
			return this.http.get<GoogleFirestoreAdminV1ListBackupSchedulesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backupSchedules', {});
		}

		/**
		 * Creates a backup schedule on a database. At most two backup schedules can be configured on a database, one daily backup schedule with retention up to 7 days and one weekly backup schedule with retention up to 14 weeks.
		 * Post v1/{parent}/backupSchedules
		 * @param {string} parent Required. The parent database. Format `projects/{project}/databases/{database}`
		 * @return {GoogleFirestoreAdminV1BackupSchedule} Successful response
		 */
		Firestore_projects_databases_backupSchedules_create(parent: string, requestBody: GoogleFirestoreAdminV1BackupSchedule): Observable<GoogleFirestoreAdminV1BackupSchedule> {
			return this.http.post<GoogleFirestoreAdminV1BackupSchedule>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backupSchedules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the backups.
		 * Get v1/{parent}/backups
		 * @param {string} parent Required. The location to list backups from. Format is `projects/{project}/locations/{location}`. Use `{location} = '-'` to list backups from all locations for the given project. This allows listing backups from a single location or from all locations.
		 * @return {GoogleFirestoreAdminV1ListBackupsResponse} Successful response
		 */
		Firestore_projects_locations_backups_list(parent: string): Observable<GoogleFirestoreAdminV1ListBackupsResponse> {
			return this.http.get<GoogleFirestoreAdminV1ListBackupsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/backups', {});
		}

		/**
		 * List all the databases in the project.
		 * Get v1/{parent}/databases
		 * @param {string} parent Required. A parent name of the form `projects/{project_id}`
		 * @return {GoogleFirestoreAdminV1ListDatabasesResponse} Successful response
		 */
		Firestore_projects_databases_list(parent: string): Observable<GoogleFirestoreAdminV1ListDatabasesResponse> {
			return this.http.get<GoogleFirestoreAdminV1ListDatabasesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases', {});
		}

		/**
		 * Create a database.
		 * Post v1/{parent}/databases
		 * @param {string} parent Required. A parent name of the form `projects/{project_id}`
		 * @param {string} databaseId Required. The ID to use for the database, which will become the final component of the database's resource name. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. "(default)" database id is also valid.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_create(parent: string, databaseId: string | null | undefined, requestBody: GoogleFirestoreAdminV1Database): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases&databaseId=' + (databaseId == null ? '' : encodeURIComponent(databaseId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new database by restoring from an existing backup. The new database must be in the same cloud region or multi-region location as the existing backup. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing backup. The long-running operation can be used to track the progress of the restore, with the Operation's metadata field type being the RestoreDatabaseMetadata. The response type is the Database if the restore was successful. The new database is not readable or writeable until the LRO has completed.
		 * Post v1/{parent}/databases:restore
		 * @param {string} parent Required. The project to restore the database in. Format is `projects/{project_id}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_restore(parent: string, requestBody: GoogleFirestoreAdminV1RestoreDatabaseRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/databases:restore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false or `ttlConfig:*`.
		 * Get v1/{parent}/fields
		 * @param {string} parent Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
		 * @param {string} filter The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with a filter that includes `indexConfig.usesAncestorConfig:false` .
		 * @param {number} pageSize The number of results to return.
		 * @param {string} pageToken A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.
		 * @return {GoogleFirestoreAdminV1ListFieldsResponse} Successful response
		 */
		Firestore_projects_databases_collectionGroups_fields_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirestoreAdminV1ListFieldsResponse> {
			return this.http.get<GoogleFirestoreAdminV1ListFieldsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/fields&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists composite indexes.
		 * Get v1/{parent}/indexes
		 * @param {string} parent Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
		 * @param {string} filter The filter to apply to list results.
		 * @param {number} pageSize The number of results to return.
		 * @param {string} pageToken A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.
		 * @return {GoogleFirestoreAdminV1ListIndexesResponse} Successful response
		 */
		Firestore_projects_databases_collectionGroups_indexes_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirestoreAdminV1ListIndexesResponse> {
			return this.http.get<GoogleFirestoreAdminV1ListIndexesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/indexes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
		 * Post v1/{parent}/indexes
		 * @param {string} parent Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_collectionGroups_indexes_create(parent: string, requestBody: GoogleFirestoreAdminV1Index): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/indexes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists documents.
		 * Get v1/{parent}/{collectionId}
		 * @param {string} parent Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
		 * @param {string} collectionId Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`.
		 * @param {Array<string>} mask_fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
		 * @param {string} orderBy Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`.
		 * @param {number} pageSize Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value.
		 * @param {string} pageToken Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token.
		 * @param {string} readTime Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
		 * @param {boolean} showMissing If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`.
		 * @param {string} transaction Perform the read as part of an already active transaction.
		 * @return {ListDocumentsResponse} Successful response
		 */
		Firestore_projects_databases_documents_listDocuments(parent: string, collectionId: string, mask_fieldPaths: Array<string> | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, readTime: string | null | undefined, showMissing: boolean | null | undefined, transaction: string | null | undefined): Observable<ListDocumentsResponse> {
			return this.http.get<ListDocumentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&' + mask_fieldPaths?.map(z => `mask.fieldPaths=${encodeURIComponent(z)}`).join('&') + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readTime=' + (readTime == null ? '' : encodeURIComponent(readTime)) + '&showMissing=' + showMissing + '&transaction=' + (transaction == null ? '' : encodeURIComponent(transaction)), {});
		}

		/**
		 * Creates a new document.
		 * Post v1/{parent}/{collectionId}
		 * @param {string} parent Required. The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
		 * @param {string} collectionId Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`.
		 * @param {string} documentId The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service.
		 * @param {Array<string>} mask_fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
		 * @return {Document} Successful response
		 */
		Firestore_projects_databases_documents_createDocument(parent: string, collectionId: string, documentId: string | null | undefined, mask_fieldPaths: Array<string> | null | undefined, requestBody: Document): Observable<Document> {
			return this.http.post<Document>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&documentId=' + (documentId == null ? '' : encodeURIComponent(documentId)) + '&' + mask_fieldPaths?.map(z => `mask.fieldPaths=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the collection IDs underneath a document.
		 * Post v1/{parent}:listCollectionIds
		 * @param {string} parent Required. The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
		 * @return {ListCollectionIdsResponse} Successful response
		 */
		Firestore_projects_databases_documents_listCollectionIds(parent: string, requestBody: ListCollectionIdsRequest): Observable<ListCollectionIdsResponse> {
			return this.http.post<ListCollectionIdsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':listCollectionIds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
		 * Post v1/{parent}:partitionQuery
		 * @param {string} parent Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents`. Document resource names are not supported; only database resource names can be specified.
		 * @return {PartitionQueryResponse} Successful response
		 */
		Firestore_projects_databases_documents_partitionQuery(parent: string, requestBody: PartitionQueryRequest): Observable<PartitionQueryResponse> {
			return this.http.post<PartitionQueryResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':partitionQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
		 * Post v1/{parent}:runAggregationQuery
		 * @param {string} parent Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
		 * @return {RunAggregationQueryResponse} Successful response
		 */
		Firestore_projects_databases_documents_runAggregationQuery(parent: string, requestBody: RunAggregationQueryRequest): Observable<RunAggregationQueryResponse> {
			return this.http.post<RunAggregationQueryResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':runAggregationQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs a query.
		 * Post v1/{parent}:runQuery
		 * @param {string} parent Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
		 * @return {RunQueryResponse} Successful response
		 */
		Firestore_projects_databases_documents_runQuery(parent: string, requestBody: RunQueryRequest): Observable<RunQueryResponse> {
			return this.http.post<RunQueryResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':runQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

