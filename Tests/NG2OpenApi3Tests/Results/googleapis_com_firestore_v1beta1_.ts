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

	export enum ValueNullValue { NULL_VALUE = 'NULL_VALUE' }


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

	export enum FieldTransformSetToServerValue { SERVER_VALUE_UNSPECIFIED = 'SERVER_VALUE_UNSPECIFIED', REQUEST_TIME = 'REQUEST_TIME' }


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

	export enum FieldFilterOp { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', LESS_THAN = 'LESS_THAN', LESS_THAN_OR_EQUAL = 'LESS_THAN_OR_EQUAL', GREATER_THAN = 'GREATER_THAN', GREATER_THAN_OR_EQUAL = 'GREATER_THAN_OR_EQUAL', EQUAL = 'EQUAL', NOT_EQUAL = 'NOT_EQUAL', ARRAY_CONTAINS = 'ARRAY_CONTAINS', IN = 'IN', ARRAY_CONTAINS_ANY = 'ARRAY_CONTAINS_ANY', NOT_IN = 'NOT_IN' }


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

	export enum UnaryFilterOp { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', IS_NAN = 'IS_NAN', IS_NULL = 'IS_NULL', IS_NOT_NAN = 'IS_NOT_NAN', IS_NOT_NULL = 'IS_NOT_NULL' }

	export enum CompositeFilterOp { OPERATOR_UNSPECIFIED = 'OPERATOR_UNSPECIFIED', AND = 'AND', OR = 'OR' }


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


	/** Metadata for the long-running operation from the RestoreDatabase request. */
	export interface GoogleFirestoreAdminV1RestoreDatabaseMetadata {

		/** The name of the backup restoring from. */
		backup?: string | null;

		/** The name of the database being restored to. */
		database?: string | null;

		/** The time the restore finished, unset for ongoing restores. */
		endTime?: string | null;

		/** The operation state of the restore. */
		operationState?: GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null;

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
		operationState: FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>,

		/** The time the restore was started. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1RestoreDatabaseMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1RestoreDatabaseMetadataFormProperties>({
			backup: new FormControl<string | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			operationState: new FormControl<GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1RestoreDatabaseMetadataOperationState { OPERATION_STATE_UNSPECIFIED = 'OPERATION_STATE_UNSPECIFIED', INITIALIZING = 'INITIALIZING', PROCESSING = 'PROCESSING', CANCELLING = 'CANCELLING', FINALIZING = 'FINALIZING', SUCCESSFUL = 'SUCCESSFUL', FAILED = 'FAILED', CANCELLED = 'CANCELLED' }


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


	/** Metadata for ExportDocuments operations. */
	export interface GoogleFirestoreAdminV1beta1ExportDocumentsMetadata {

		/** Which collection ids are being exported. */
		collectionIds?: Array<string>;

		/** The time the operation ended, either successfully or otherwise. Unset if the operation is still active. */
		endTime?: string | null;

		/** The state of the export operation. */
		operationState?: GoogleFirestoreAdminV1beta1ExportDocumentsMetadataOperationState | null;

		/** Where the entities are being exported to. */
		outputUriPrefix?: string | null;

		/** Measures the progress of a particular metric. */
		progressBytes?: GoogleFirestoreAdminV1beta1Progress;

		/** Measures the progress of a particular metric. */
		progressDocuments?: GoogleFirestoreAdminV1beta1Progress;

		/** The time that work began on the operation. */
		startTime?: string | null;
	}

	/** Metadata for ExportDocuments operations. */
	export interface GoogleFirestoreAdminV1beta1ExportDocumentsMetadataFormProperties {

		/** The time the operation ended, either successfully or otherwise. Unset if the operation is still active. */
		endTime: FormControl<string | null | undefined>,

		/** The state of the export operation. */
		operationState: FormControl<GoogleFirestoreAdminV1beta1ExportDocumentsMetadataOperationState | null | undefined>,

		/** Where the entities are being exported to. */
		outputUriPrefix: FormControl<string | null | undefined>,

		/** The time that work began on the operation. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta1ExportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1ExportDocumentsMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			operationState: new FormControl<GoogleFirestoreAdminV1beta1ExportDocumentsMetadataOperationState | null | undefined>(undefined),
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1beta1ExportDocumentsMetadataOperationState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', INITIALIZING = 'INITIALIZING', PROCESSING = 'PROCESSING', CANCELLING = 'CANCELLING', FINALIZING = 'FINALIZING', SUCCESSFUL = 'SUCCESSFUL', FAILED = 'FAILED', CANCELLED = 'CANCELLED' }


	/** Measures the progress of a particular metric. */
	export interface GoogleFirestoreAdminV1beta1Progress {

		/** An estimate of how much work has been completed. Note that this may be greater than `work_estimated`. */
		workCompleted?: string | null;

		/** An estimate of how much work needs to be performed. Zero if the work estimate is unavailable. May change as work progresses. */
		workEstimated?: string | null;
	}

	/** Measures the progress of a particular metric. */
	export interface GoogleFirestoreAdminV1beta1ProgressFormProperties {

		/** An estimate of how much work has been completed. Note that this may be greater than `work_estimated`. */
		workCompleted: FormControl<string | null | undefined>,

		/** An estimate of how much work needs to be performed. Zero if the work estimate is unavailable. May change as work progresses. */
		workEstimated: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta1ProgressFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1ProgressFormProperties>({
			workCompleted: new FormControl<string | null | undefined>(undefined),
			workEstimated: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for FirestoreAdmin.ExportDocuments. */
	export interface GoogleFirestoreAdminV1beta1ExportDocumentsRequest {

		/** Which collection ids to export. Unspecified means all collections. */
		collectionIds?: Array<string>;

		/** The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time. */
		outputUriPrefix?: string | null;
	}

	/** The request for FirestoreAdmin.ExportDocuments. */
	export interface GoogleFirestoreAdminV1beta1ExportDocumentsRequestFormProperties {

		/** The output URI. Currently only supports Google Cloud Storage URIs of the form: `gs://BUCKET_NAME[/NAMESPACE_PATH]`, where `BUCKET_NAME` is the name of the Google Cloud Storage bucket and `NAMESPACE_PATH` is an optional Google Cloud Storage namespace path. When choosing a name, be sure to consider Google Cloud Storage naming guidelines: https://cloud.google.com/storage/docs/naming. If the URI is a bucket (without a namespace path), a prefix will be generated based on the start time. */
		outputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta1ExportDocumentsRequestFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1ExportDocumentsRequestFormProperties>({
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Returned in the google.longrunning.Operation response field. */
	export interface GoogleFirestoreAdminV1beta1ExportDocumentsResponse {

		/** Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully. */
		outputUriPrefix?: string | null;
	}

	/** Returned in the google.longrunning.Operation response field. */
	export interface GoogleFirestoreAdminV1beta1ExportDocumentsResponseFormProperties {

		/** Location of the output files. This can be used to begin an import into Cloud Firestore (this project or another project) after the operation completes successfully. */
		outputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta1ExportDocumentsResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1ExportDocumentsResponseFormProperties>({
			outputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata for ImportDocuments operations. */
	export interface GoogleFirestoreAdminV1beta1ImportDocumentsMetadata {

		/** Which collection ids are being imported. */
		collectionIds?: Array<string>;

		/** The time the operation ended, either successfully or otherwise. Unset if the operation is still active. */
		endTime?: string | null;

		/** The location of the documents being imported. */
		inputUriPrefix?: string | null;

		/** The state of the import operation. */
		operationState?: GoogleFirestoreAdminV1beta1ExportDocumentsMetadataOperationState | null;

		/** Measures the progress of a particular metric. */
		progressBytes?: GoogleFirestoreAdminV1beta1Progress;

		/** Measures the progress of a particular metric. */
		progressDocuments?: GoogleFirestoreAdminV1beta1Progress;

		/** The time that work began on the operation. */
		startTime?: string | null;
	}

	/** Metadata for ImportDocuments operations. */
	export interface GoogleFirestoreAdminV1beta1ImportDocumentsMetadataFormProperties {

		/** The time the operation ended, either successfully or otherwise. Unset if the operation is still active. */
		endTime: FormControl<string | null | undefined>,

		/** The location of the documents being imported. */
		inputUriPrefix: FormControl<string | null | undefined>,

		/** The state of the import operation. */
		operationState: FormControl<GoogleFirestoreAdminV1beta1ExportDocumentsMetadataOperationState | null | undefined>,

		/** The time that work began on the operation. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta1ImportDocumentsMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1ImportDocumentsMetadataFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			inputUriPrefix: new FormControl<string | null | undefined>(undefined),
			operationState: new FormControl<GoogleFirestoreAdminV1beta1ExportDocumentsMetadataOperationState | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for FirestoreAdmin.ImportDocuments. */
	export interface GoogleFirestoreAdminV1beta1ImportDocumentsRequest {

		/** Which collection ids to import. Unspecified means all collections included in the import. */
		collectionIds?: Array<string>;

		/** Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta1.ExportDocumentsResponse.output_uri_prefix. */
		inputUriPrefix?: string | null;
	}

	/** The request for FirestoreAdmin.ImportDocuments. */
	export interface GoogleFirestoreAdminV1beta1ImportDocumentsRequestFormProperties {

		/** Location of the exported files. This must match the output_uri_prefix of an ExportDocumentsResponse from an export that has completed successfully. See: google.firestore.admin.v1beta1.ExportDocumentsResponse.output_uri_prefix. */
		inputUriPrefix: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta1ImportDocumentsRequestFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1ImportDocumentsRequestFormProperties>({
			inputUriPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An index definition. */
	export interface GoogleFirestoreAdminV1beta1Index {

		/** The collection ID to which this index applies. Required. */
		collectionId?: string | null;

		/** The fields to index. */
		fields?: Array<GoogleFirestoreAdminV1beta1IndexField>;

		/** The resource name of the index. Output only. */
		name?: string | null;

		/** The state of the index. Output only. */
		state?: GoogleFirestoreAdminV1beta1IndexState | null;
	}

	/** An index definition. */
	export interface GoogleFirestoreAdminV1beta1IndexFormProperties {

		/** The collection ID to which this index applies. Required. */
		collectionId: FormControl<string | null | undefined>,

		/** The resource name of the index. Output only. */
		name: FormControl<string | null | undefined>,

		/** The state of the index. Output only. */
		state: FormControl<GoogleFirestoreAdminV1beta1IndexState | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta1IndexFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1IndexFormProperties>({
			collectionId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleFirestoreAdminV1beta1IndexState | null | undefined>(undefined),
		});

	}


	/** A field of an index. */
	export interface GoogleFirestoreAdminV1beta1IndexField {

		/** The path of the field. Must match the field path specification described by google.firestore.v1beta1.Document.fields. Special field path `__name__` may be used by itself or at the end of a path. `__type__` may be used only at the end of path. */
		fieldPath?: string | null;

		/** The field's mode. */
		mode?: GoogleFirestoreAdminV1beta1IndexFieldMode | null;
	}

	/** A field of an index. */
	export interface GoogleFirestoreAdminV1beta1IndexFieldFormProperties {

		/** The path of the field. Must match the field path specification described by google.firestore.v1beta1.Document.fields. Special field path `__name__` may be used by itself or at the end of a path. `__type__` may be used only at the end of path. */
		fieldPath: FormControl<string | null | undefined>,

		/** The field's mode. */
		mode: FormControl<GoogleFirestoreAdminV1beta1IndexFieldMode | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta1IndexFieldFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1IndexFieldFormProperties>({
			fieldPath: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<GoogleFirestoreAdminV1beta1IndexFieldMode | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1beta1IndexFieldMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING', ARRAY_CONTAINS = 'ARRAY_CONTAINS' }

	export enum GoogleFirestoreAdminV1beta1IndexState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', CREATING = 'CREATING', READY = 'READY', ERROR = 'ERROR' }


	/** Metadata for index operations. This metadata populates the metadata field of google.longrunning.Operation. */
	export interface GoogleFirestoreAdminV1beta1IndexOperationMetadata {

		/** True if the [google.longrunning.Operation] was cancelled. If the cancellation is in progress, cancelled will be true but google.longrunning.Operation.done will be false. */
		cancelled?: boolean | null;

		/** Measures the progress of a particular metric. */
		documentProgress?: GoogleFirestoreAdminV1beta1Progress;

		/** The time the operation ended, either successfully or otherwise. Unset if the operation is still active. */
		endTime?: string | null;

		/** The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}` */
		index?: string | null;

		/** The type of index operation. */
		operationType?: GoogleFirestoreAdminV1beta1IndexOperationMetadataOperationType | null;

		/** The time that work began on the operation. */
		startTime?: string | null;
	}

	/** Metadata for index operations. This metadata populates the metadata field of google.longrunning.Operation. */
	export interface GoogleFirestoreAdminV1beta1IndexOperationMetadataFormProperties {

		/** True if the [google.longrunning.Operation] was cancelled. If the cancellation is in progress, cancelled will be true but google.longrunning.Operation.done will be false. */
		cancelled: FormControl<boolean | null | undefined>,

		/** The time the operation ended, either successfully or otherwise. Unset if the operation is still active. */
		endTime: FormControl<string | null | undefined>,

		/** The index resource that this operation is acting on. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}` */
		index: FormControl<string | null | undefined>,

		/** The type of index operation. */
		operationType: FormControl<GoogleFirestoreAdminV1beta1IndexOperationMetadataOperationType | null | undefined>,

		/** The time that work began on the operation. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta1IndexOperationMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1IndexOperationMetadataFormProperties>({
			cancelled: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<string | null | undefined>(undefined),
			operationType: new FormControl<GoogleFirestoreAdminV1beta1IndexOperationMetadataOperationType | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleFirestoreAdminV1beta1IndexOperationMetadataOperationType { OPERATION_TYPE_UNSPECIFIED = 'OPERATION_TYPE_UNSPECIFIED', CREATING_INDEX = 'CREATING_INDEX' }


	/** The response for FirestoreAdmin.ListIndexes. */
	export interface GoogleFirestoreAdminV1beta1ListIndexesResponse {

		/** The indexes. */
		indexes?: Array<GoogleFirestoreAdminV1beta1Index>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response for FirestoreAdmin.ListIndexes. */
	export interface GoogleFirestoreAdminV1beta1ListIndexesResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleFirestoreAdminV1beta1ListIndexesResponseFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1ListIndexesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The metadata message for google.cloud.location.Location.metadata. */
	export interface GoogleFirestoreAdminV1beta1LocationMetadata {
	}

	/** The metadata message for google.cloud.location.Location.metadata. */
	export interface GoogleFirestoreAdminV1beta1LocationMetadataFormProperties {
	}
	export function CreateGoogleFirestoreAdminV1beta1LocationMetadataFormGroup() {
		return new FormGroup<GoogleFirestoreAdminV1beta1LocationMetadataFormProperties>({
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

	export enum OrderDirection { DIRECTION_UNSPECIFIED = 'DIRECTION_UNSPECIFIED', ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }


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

	export enum TargetChangeTargetChangeType { NO_CHANGE = 'NO_CHANGE', ADD = 'ADD', REMOVE = 'REMOVE', CURRENT = 'CURRENT', RESET = 'RESET' }


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
		 * Post v1beta1/{database}/documents:batchGet
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {BatchGetDocumentsResponse} Successful response
		 */
		Firestore_projects_databases_documents_batchGet(database: string, requestBody: BatchGetDocumentsRequest): Observable<BatchGetDocumentsResponse> {
			return this.http.post<BatchGetDocumentsResponse>(this.baseUri + 'v1beta1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:batchGet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
		 * Post v1beta1/{database}/documents:batchWrite
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {BatchWriteResponse} Successful response
		 */
		Firestore_projects_databases_documents_batchWrite(database: string, requestBody: BatchWriteRequest): Observable<BatchWriteResponse> {
			return this.http.post<BatchWriteResponse>(this.baseUri + 'v1beta1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:batchWrite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a new transaction.
		 * Post v1beta1/{database}/documents:beginTransaction
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {BeginTransactionResponse} Successful response
		 */
		Firestore_projects_databases_documents_beginTransaction(database: string, requestBody: BeginTransactionRequest): Observable<BeginTransactionResponse> {
			return this.http.post<BeginTransactionResponse>(this.baseUri + 'v1beta1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:beginTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Commits a transaction, while optionally updating documents.
		 * Post v1beta1/{database}/documents:commit
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {CommitResponse} Successful response
		 */
		Firestore_projects_databases_documents_commit(database: string, requestBody: CommitRequest): Observable<CommitResponse> {
			return this.http.post<CommitResponse>(this.baseUri + 'v1beta1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:commit', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Listens to changes. This method is only available via gRPC or WebChannel (not REST).
		 * Post v1beta1/{database}/documents:listen
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {ListenResponse} Successful response
		 */
		Firestore_projects_databases_documents_listen(database: string, requestBody: ListenRequest): Observable<ListenResponse> {
			return this.http.post<ListenResponse>(this.baseUri + 'v1beta1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:listen', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rolls back a transaction.
		 * Post v1beta1/{database}/documents:rollback
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
		 * @return {Empty} Successful response
		 */
		Firestore_projects_databases_documents_rollback(database: string, requestBody: RollbackRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1beta1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:rollback', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
		 * Post v1beta1/{database}/documents:write
		 * @param {string} database Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message.
		 * @return {WriteResponse} Successful response
		 */
		Firestore_projects_databases_documents_write(database: string, requestBody: WriteRequest): Observable<WriteResponse> {
			return this.http.post<WriteResponse>(this.baseUri + 'v1beta1/' + (database == null ? '' : encodeURIComponent(database)) + '/documents:write', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an index.
		 * Delete v1beta1/{name}
		 * @param {string} name The index name. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
		 * @param {boolean} currentDocument_exists When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
		 * @param {string} currentDocument_updateTime When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
		 * @return {Empty} Successful response
		 */
		Firestore_projects_databases_indexes_delete(name: string, currentDocument_exists: boolean | null | undefined, currentDocument_updateTime: string | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&currentDocument_exists=' + currentDocument_exists + '&currentDocument_updateTime=' + (currentDocument_updateTime == null ? '' : encodeURIComponent(currentDocument_updateTime)), {});
		}

		/**
		 * Gets an index.
		 * Get v1beta1/{name}
		 * @param {string} name The name of the index. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
		 * @param {Array<string>} mask_fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
		 * @param {string} readTime Reads the version of the document at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
		 * @param {string} transaction Reads the document in a transaction.
		 * @return {GoogleFirestoreAdminV1beta1Index} Successful response
		 */
		Firestore_projects_databases_indexes_get(name: string, mask_fieldPaths: Array<string> | null | undefined, readTime: string | null | undefined, transaction: string | null | undefined): Observable<GoogleFirestoreAdminV1beta1Index> {
			return this.http.get<GoogleFirestoreAdminV1beta1Index>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&' + mask_fieldPaths?.map(z => `mask.fieldPaths=${encodeURIComponent(z)}`).join('&') + '&readTime=' + (readTime == null ? '' : encodeURIComponent(readTime)) + '&transaction=' + (transaction == null ? '' : encodeURIComponent(transaction)), {});
		}

		/**
		 * Updates or inserts a document.
		 * Patch v1beta1/{name}
		 * @param {string} name The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
		 * @param {boolean} currentDocument_exists When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
		 * @param {string} currentDocument_updateTime When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
		 * @param {Array<string>} mask_fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
		 * @param {Array<string>} updateMask_fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
		 * @return {Document} Successful response
		 */
		Firestore_projects_databases_documents_patch(name: string, currentDocument_exists: boolean | null | undefined, currentDocument_updateTime: string | null | undefined, mask_fieldPaths: Array<string> | null | undefined, updateMask_fieldPaths: Array<string> | null | undefined, requestBody: Document): Observable<Document> {
			return this.http.patch<Document>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + '&currentDocument_exists=' + currentDocument_exists + '&currentDocument_updateTime=' + (currentDocument_updateTime == null ? '' : encodeURIComponent(currentDocument_updateTime)) + '&' + mask_fieldPaths?.map(z => `mask.fieldPaths=${encodeURIComponent(z)}`).join('&') + '&' + updateMask_fieldPaths?.map(z => `updateMask.fieldPaths=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
		 * Post v1beta1/{name}:exportDocuments
		 * @param {string} name Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_exportDocuments(name: string, requestBody: GoogleFirestoreAdminV1beta1ExportDocumentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':exportDocuments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
		 * Post v1beta1/{name}:importDocuments
		 * @param {string} name Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_importDocuments(name: string, requestBody: GoogleFirestoreAdminV1beta1ImportDocumentsRequest): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)) + ':importDocuments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the indexes that match the specified filters.
		 * Get v1beta1/{parent}/indexes
		 * @param {string} parent The database name. For example: `projects/{project_id}/databases/{database_id}`
		 * @param {number} pageSize The standard List page size.
		 * @param {string} pageToken The standard List page token.
		 * @return {GoogleFirestoreAdminV1beta1ListIndexesResponse} Successful response
		 */
		Firestore_projects_databases_indexes_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleFirestoreAdminV1beta1ListIndexesResponse> {
			return this.http.get<GoogleFirestoreAdminV1beta1ListIndexesResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/indexes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
		 * Post v1beta1/{parent}/indexes
		 * @param {string} parent The name of the database this index will apply to. For example: `projects/{project_id}/databases/{database_id}`
		 * @return {GoogleLongrunningOperation} Successful response
		 */
		Firestore_projects_databases_indexes_create(parent: string, requestBody: GoogleFirestoreAdminV1beta1Index): Observable<GoogleLongrunningOperation> {
			return this.http.post<GoogleLongrunningOperation>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/indexes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists documents.
		 * Get v1beta1/{parent}/{collectionId}
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
			return this.http.get<ListDocumentsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&' + mask_fieldPaths?.map(z => `mask.fieldPaths=${encodeURIComponent(z)}`).join('&') + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&readTime=' + (readTime == null ? '' : encodeURIComponent(readTime)) + '&showMissing=' + showMissing + '&transaction=' + (transaction == null ? '' : encodeURIComponent(transaction)), {});
		}

		/**
		 * Creates a new document.
		 * Post v1beta1/{parent}/{collectionId}
		 * @param {string} parent Required. The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
		 * @param {string} collectionId Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`.
		 * @param {string} documentId The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service.
		 * @param {Array<string>} mask_fieldPaths The list of field paths in the mask. See Document.fields for a field path syntax reference.
		 * @return {Document} Successful response
		 */
		Firestore_projects_databases_documents_createDocument(parent: string, collectionId: string, documentId: string | null | undefined, mask_fieldPaths: Array<string> | null | undefined, requestBody: Document): Observable<Document> {
			return this.http.post<Document>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/' + (collectionId == null ? '' : encodeURIComponent(collectionId)) + '&documentId=' + (documentId == null ? '' : encodeURIComponent(documentId)) + '&' + mask_fieldPaths?.map(z => `mask.fieldPaths=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the collection IDs underneath a document.
		 * Post v1beta1/{parent}:listCollectionIds
		 * @param {string} parent Required. The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
		 * @return {ListCollectionIdsResponse} Successful response
		 */
		Firestore_projects_databases_documents_listCollectionIds(parent: string, requestBody: ListCollectionIdsRequest): Observable<ListCollectionIdsResponse> {
			return this.http.post<ListCollectionIdsResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':listCollectionIds', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
		 * Post v1beta1/{parent}:partitionQuery
		 * @param {string} parent Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents`. Document resource names are not supported; only database resource names can be specified.
		 * @return {PartitionQueryResponse} Successful response
		 */
		Firestore_projects_databases_documents_partitionQuery(parent: string, requestBody: PartitionQueryRequest): Observable<PartitionQueryResponse> {
			return this.http.post<PartitionQueryResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':partitionQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
		 * Post v1beta1/{parent}:runAggregationQuery
		 * @param {string} parent Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
		 * @return {RunAggregationQueryResponse} Successful response
		 */
		Firestore_projects_databases_documents_runAggregationQuery(parent: string, requestBody: RunAggregationQueryRequest): Observable<RunAggregationQueryResponse> {
			return this.http.post<RunAggregationQueryResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':runAggregationQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs a query.
		 * Post v1beta1/{parent}:runQuery
		 * @param {string} parent Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
		 * @return {RunQueryResponse} Successful response
		 */
		Firestore_projects_databases_documents_runQuery(parent: string, requestBody: RunQueryRequest): Observable<RunQueryResponse> {
			return this.http.post<RunQueryResponse>(this.baseUri + 'v1beta1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':runQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

