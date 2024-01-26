import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * Semantics controls the interpretation of the query string by the
	 * server, and can be used to override the default semantics assigned
	 * in the corpus definition.
	 *  - DEFAULT: Use corpus-assigned semantics.  This is the most common setting.
	 *  - QUERY: Use query semantics.  This is also common.
	 *  - RESPONSE: Use response semantics.  Usage of this is rare.
	 */
	export enum CorpusKeySemantics { DEFAULT = 0, QUERY = 1, RESPONSE = 2 }


	/** Configuration options to apply to the reranking. */
	export interface QueryRequestRerankingConfig {
		rerankerId?: number | null;
	}

	/** Configuration options to apply to the reranking. */
	export interface QueryRequestRerankingConfigFormProperties {
		rerankerId: FormControl<number | null | undefined>,
	}
	export function CreateQueryRequestRerankingConfigFormGroup() {
		return new FormGroup<QueryRequestRerankingConfigFormProperties>({
			rerankerId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdminCorpus {
		customDimensions?: Array<AdminDimension>;

		/** A description for the corpus. */
		description?: string | null;

		/** The time at which the corpus was provisioned. */
		dtProvision?: string | null;

		/** Whether the corpus is enabled for use or not. */
		enabled?: boolean | null;

		/**
		 * This is an advanced setting for changing the underlying model type.  The
		 * default value is "1", which is Vectara's high-performing global model.
		 * Underlying models may be swapped for some paying customers by contacting
		 * our support team.
		 */
		encoderId?: string | null;

		/** Encryption is on by default and cannot be turned off. */
		encrypted?: boolean | null;
		filterAttributes?: Array<AdminFilterAttribute>;

		/** The Corpus ID. */
		id?: number | null;

		/** An optional maximum size of the metadata that each document can contain. */
		metadataMaxBytes?: number | null;

		/** The name of the corpus. */
		name?: string | null;

		/**
		 * The default query encoder is designed for normal question-answering types
		 * of queries when the text contains the answer.  Swapping the index encoder
		 * is generally rare, but can be used to help directly match questions to
		 * questions.  This can be useful if you have a FAQ dataset and you want to
		 * directly match the user question to the question in the FAQ.
		 */
		swapIenc?: boolean | null;
		swapQenc?: boolean | null;

		/**
		 * When a corpus is "textless", Vectara does not store the original text.
		 * Instead, Vectara converts the text to vectors and only retains metadata.
		 */
		textless?: boolean | null;
	}
	export interface AdminCorpusFormProperties {

		/** A description for the corpus. */
		description: FormControl<string | null | undefined>,

		/** The time at which the corpus was provisioned. */
		dtProvision: FormControl<string | null | undefined>,

		/** Whether the corpus is enabled for use or not. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * This is an advanced setting for changing the underlying model type.  The
		 * default value is "1", which is Vectara's high-performing global model.
		 * Underlying models may be swapped for some paying customers by contacting
		 * our support team.
		 */
		encoderId: FormControl<string | null | undefined>,

		/** Encryption is on by default and cannot be turned off. */
		encrypted: FormControl<boolean | null | undefined>,

		/** The Corpus ID. */
		id: FormControl<number | null | undefined>,

		/** An optional maximum size of the metadata that each document can contain. */
		metadataMaxBytes: FormControl<number | null | undefined>,

		/** The name of the corpus. */
		name: FormControl<string | null | undefined>,

		/**
		 * The default query encoder is designed for normal question-answering types
		 * of queries when the text contains the answer.  Swapping the index encoder
		 * is generally rare, but can be used to help directly match questions to
		 * questions.  This can be useful if you have a FAQ dataset and you want to
		 * directly match the user question to the question in the FAQ.
		 */
		swapIenc: FormControl<boolean | null | undefined>,
		swapQenc: FormControl<boolean | null | undefined>,

		/**
		 * When a corpus is "textless", Vectara does not store the original text.
		 * Instead, Vectara converts the text to vectors and only retains metadata.
		 */
		textless: FormControl<boolean | null | undefined>,
	}
	export function CreateAdminCorpusFormGroup() {
		return new FormGroup<AdminCorpusFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			dtProvision: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			encoderId: new FormControl<string | null | undefined>(undefined),
			encrypted: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			metadataMaxBytes: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			swapIenc: new FormControl<boolean | null | undefined>(undefined),
			swapQenc: new FormControl<boolean | null | undefined>(undefined),
			textless: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * A custom dimension is additional numeric metadata that you want to affect
	 * Vectara's scoring.  For example, these could be "number of stars" ratings,
	 * or other business metrics like a product's margins that you want to use
	 * to boost where a result is in the list.
	 */
	export interface AdminDimension {

		/** A description for the custom dimension. */
		description?: string | null;

		/** The default value to give to documents for this custom dimension. */
		indexingDefault?: number | null;

		/**
		 * The name of the custom dimension.  The maximum length of the name is
		 * 8 characters.
		 */
		name?: string | null;

		/**
		 * The default weight to give this dimension when running queries. A value of
		 * 0.0, for example, gives it no weight at all.
		 */
		servingDefault?: number | null;
	}

	/**
	 * A custom dimension is additional numeric metadata that you want to affect
	 * Vectara's scoring.  For example, these could be "number of stars" ratings,
	 * or other business metrics like a product's margins that you want to use
	 * to boost where a result is in the list.
	 */
	export interface AdminDimensionFormProperties {

		/** A description for the custom dimension. */
		description: FormControl<string | null | undefined>,

		/** The default value to give to documents for this custom dimension. */
		indexingDefault: FormControl<number | null | undefined>,

		/**
		 * The name of the custom dimension.  The maximum length of the name is
		 * 8 characters.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The default weight to give this dimension when running queries. A value of
		 * 0.0, for example, gives it no weight at all.
		 */
		servingDefault: FormControl<number | null | undefined>,
	}
	export function CreateAdminDimensionFormGroup() {
		return new FormGroup<AdminDimensionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			indexingDefault: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			servingDefault: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines metadata fields that can be used in predicate queries. */
	export interface AdminFilterAttribute {

		/** An optional description. */
		description?: string | null;

		/** Whether the field is indexed for maximum query speed. */
		indexed?: boolean | null;
		level?: AdminFilterAttributeLevel | null;

		/** Name of the field, as seen in metadata. */
		name?: string | null;
		type?: AdminFilterAttributeType | null;
	}

	/** Defines metadata fields that can be used in predicate queries. */
	export interface AdminFilterAttributeFormProperties {

		/** An optional description. */
		description: FormControl<string | null | undefined>,

		/** Whether the field is indexed for maximum query speed. */
		indexed: FormControl<boolean | null | undefined>,
		level: FormControl<AdminFilterAttributeLevel | null | undefined>,

		/** Name of the field, as seen in metadata. */
		name: FormControl<string | null | undefined>,
		type: FormControl<AdminFilterAttributeType | null | undefined>,
	}
	export function CreateAdminFilterAttributeFormGroup() {
		return new FormGroup<AdminFilterAttributeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			indexed: new FormControl<boolean | null | undefined>(undefined),
			level: new FormControl<AdminFilterAttributeLevel | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AdminFilterAttributeType | null | undefined>(undefined),
		});

	}

	export enum AdminFilterAttributeLevel { FILTER_ATTRIBUTE_LEVEL__UNDEFINED = 0, FILTER_ATTRIBUTE_LEVEL__DOCUMENT = 1, FILTER_ATTRIBUTE_LEVEL__DOCUMENT_PART = 2 }

	export enum AdminFilterAttributeType { FILTER_ATTRIBUTE_TYPE__UNDEFINED = 0, FILTER_ATTRIBUTE_TYPE__INTEGER = 1, FILTER_ATTRIBUTE_TYPE__INTEGER_LIST = 2, FILTER_ATTRIBUTE_TYPE__REAL = 3, FILTER_ATTRIBUTE_TYPE__REAL_LIST = 4, FILTER_ATTRIBUTE_TYPE__TEXT = 5, FILTER_ATTRIBUTE_TYPE__TEXT_LIST = 6 }

	export interface AdminCreateCorpusRequest {
		corpus?: AdminCorpus;
	}
	export interface AdminCreateCorpusRequestFormProperties {
	}
	export function CreateAdminCreateCorpusRequestFormGroup() {
		return new FormGroup<AdminCreateCorpusRequestFormProperties>({
		});

	}

	export interface AdminCreateCorpusResponse {

		/** The Corpus ID that was created. */
		corpusId?: number | null;
		status?: ComvectaraStatus;
	}
	export interface AdminCreateCorpusResponseFormProperties {

		/** The Corpus ID that was created. */
		corpusId: FormControl<number | null | undefined>,
	}
	export function CreateAdminCreateCorpusResponseFormGroup() {
		return new FormGroup<AdminCreateCorpusResponseFormProperties>({
			corpusId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ComvectaraStatus {
		code?: ComvectaraStatusCode | null;
		statusDetail?: string | null;
	}
	export interface ComvectaraStatusFormProperties {
		code: FormControl<ComvectaraStatusCode | null | undefined>,
		statusDetail: FormControl<string | null | undefined>,
	}
	export function CreateComvectaraStatusFormGroup() {
		return new FormGroup<ComvectaraStatusFormProperties>({
			code: new FormControl<ComvectaraStatusCode | null | undefined>(undefined),
			statusDetail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ComvectaraStatusCode { OK = 0, FAILURE = 1, UNKNOWN = 2, INVALID_ARGUMENT = 3, DEADLINE_EXCEEDED = 4, ALREADY_EXISTS = 5, PERMISSION_DENIED = 6, RESOURCE_EXHAUSTED = 7, FAILED_PRECONDITION = 8, ABORTED = 9, OUT_OF_RANGE = 10, UNIMPLEMENTED = 11, INTERNAL = 12, UNAVAILABLE = 13, DATA_LOSS = 14, UNAUTHENTICATED = 15, BAD_REQUEST = 16, UNAUTHORIZED = 17, FORBIDDEN = 18, NOT_FOUND = 19, METHOD_NOT_ALLOWED = 20, CONFLICT = 21, UNSUPPORTED_MEDIA_TYPE = 22, TOO_MANY_REQUESTS = 23, INTERNAL_SERVER_ERROR = 24, NOT_IMPLEMENTED = 25, SERVICE_UNAVAILABLE = 26, INSUFFICIENT_STORAGE = 27, UNPARSEABLE_RESPONSE = 28, DISABLED_CUSTOMER = 29, INVALID_CUSTOMER_ID = 30, DISABLED_CORPUS = 31, INVALID_CORPUS_ID = 32, DISABLED_API_KEY = 33, EXPIRED_API_KEY = 34, INVALID_API_KEY = 35, CMK_INACCESSIBLE = 36, QRY__DISABLED_CORPUS = 37, QRY__DOCUMENT_DB_FAILURE = 38, QRY__ENCODER_FAILURE = 39, QRY__INTERRUPTED = 40, QRY__INVALID_CORPUS = 41, QRY__INVALID_START = 42, QRY__INVALID_NUM_RESULTS = 43, QRY__INVALID_CONTEXT = 44, QRY__MISSING_QUERY = 45, QRY__MISSING_CORPUS = 46, QRY__TIMEOUT = 47, QRY__TOO_MANY_CORPORA = 48, QRY__TOO_MANY_QUERIES = 49, QRY__VECTOR_INDEX_FAILURE = 50, QRY__INVALID_DIMENSION = 51, QRY__INVALID_CLIENTKEY = 52, QRY__DECRYPTION_FAILURE = 53, QRY__INVALID_RERANKER = 54, QRY__PARTIAL_RERANK = 55, QRY__RERANK_FAILURE = 56, QRY__TOO_MANY_RESULT_ROWS = 57, QRY__PARTIAL_RETRIEVAL = 58, CX_SPECS__INVALID_JSON = 59, CX_SPECS__UNREGISTERED_TYPE = 60, CX_SPECS__MISSING_SPEC = 61, CX_SPECS__MISSING_TYPE = 62, CX_SPECS__UNPARSEABLE_SPEC = 63, ADM__INVALID_CUSTOMER_ID = 64, ADM__INVALID_CORPUS_ID = 65, ADM__INVALID_ENCODER_ID = 66, ADM__INVALID_ROLE_ID = 67, ADM__ROLE_ALREADY_EXISTS = 68, ADM__ONLY_ONE_OWNER_SUPPORTED = 69, ADM__INVALID_PERMISSION = 70, ADM__ROLECREATION_FAILURE = 71, ADM__USER_EMAIL_NOT_AVAIALBLE = 72, ADM__USERNAME_NOT_AVAILABLE = 73, ADM__SIGNUP_MISSING_NAME = 74, ADM__SIGNUP_MISSING_ORG = 75, ADM__SIGNUP_MISSING_EMAIL = 76, ADM__SIGNUP_MISSING_PAYMENT = 77, ADM__SIGNUP_MISSING_PLAN = 78, ADM__SIGNUP_MISSING_PASSWORD = 79, ADM__SIGNUP_INVALID_NAME = 80, ADM__SIGNUP_INVALID_ORG = 81, ADM__SIGNUP_INVALID_EMAIL = 82, ADM__SIGNUP_INVALID_PAYMENT = 83, ADM__SIGNUP_INVALID_PLAN = 84, ADM__SIGNUP_INVALID_PASSWORD = 85, ADM__SIGNUP_INVALID_ACCOUNT_ALIAS = 86, ADM__SIGNUP_INVALID_EMAIL_VALIDATION_CODE = 87, ADM__SIGNUP_MISSING_COUNTRY_CODE = 88, ADM__SIGNUP_ROOT_EMAIL_NOT_AVAILABLE = 89, ADM__CUST_MARK_DELETE_FAILED = 90, ADM__CUST_FAISS_DEALLOC_FAILED = 91, ADM__CORPUS_LIMIT_REACHED = 92, ADM__STRIPE_CARD_DECLINED = 93, ADM__STRIPE_PROCESSING_ERROR = 94, ADM__EMAIL_VALIDATION_REQUEST_NOT_FOUND = 95, ADM__EMAIL_NOT_VALIDATED = 96, ADM__CHANGE_PLAN__NO_CURRENT_PLAN = 97, ADM__CHANGE_PLAN__REQUIRES_MANUAL_CHANGE = 98, ADM__CHANGE_PLAN__INVALID_PLAN_ID = 99, ADM__CHANGE_PLAN__NO_PAYMENT_SOURCE = 100, ADM__CHANGE_PLAN__INVALID_EFFECTIVE_DATE = 101, ADM__CHANGE_PLAN__CONFLICTING_CHANGE = 102, SCM__MISCONFIGURED_CONNECTION = 103, STATS_DB_READ_FAILURE = 104, VDB__TEXT_READ_FAILURE = 105, REBUILD__LOW_RECALL = 106, REBUILD__INDEX_UPLOAD_FAILURE = 107, REBUILD__UPDATE_JOURNAL_FAILURE = 108, REBUILD__UPDATE_FAISSPARAMS_FAILURE = 109, REBUILD__NO_DATA = 110, REBUILD__EVALUATION = 111, IDX__TRANSIENT_PARTIAL_DELETION_FAILURE = 112, IDX__PERMANENT_PARTIAL_DELETION_FAILURE = 113 }

	export interface AdminDeleteCorpusRequest {

		/** The Corpus ID to be deleted. */
		corpusId?: number | null;

		/** The Customer ID that contains the corpus to be deleted. */
		customerId?: number | null;
	}
	export interface AdminDeleteCorpusRequestFormProperties {

		/** The Corpus ID to be deleted. */
		corpusId: FormControl<number | null | undefined>,

		/** The Customer ID that contains the corpus to be deleted. */
		customerId: FormControl<number | null | undefined>,
	}
	export function CreateAdminDeleteCorpusRequestFormGroup() {
		return new FormGroup<AdminDeleteCorpusRequestFormProperties>({
			corpusId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdminDeleteCorpusResponse {
		status?: ComvectaraStatus;
	}
	export interface AdminDeleteCorpusResponseFormProperties {
	}
	export function CreateAdminDeleteCorpusResponseFormGroup() {
		return new FormGroup<AdminDeleteCorpusResponseFormProperties>({
		});

	}

	export interface AdminListCorporaRequest {

		/** A regex to match corpora against. */
		filter?: string | null;

		/** The maximum results to return. */
		numResults?: number | null;

		/** A key that is passed in to retrieve a specific page of results. */
		pageKey?: string | null;
	}
	export interface AdminListCorporaRequestFormProperties {

		/** A regex to match corpora against. */
		filter: FormControl<string | null | undefined>,

		/** The maximum results to return. */
		numResults: FormControl<number | null | undefined>,

		/** A key that is passed in to retrieve a specific page of results. */
		pageKey: FormControl<string | null | undefined>,
	}
	export function CreateAdminListCorporaRequestFormGroup() {
		return new FormGroup<AdminListCorporaRequestFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			numResults: new FormControl<number | null | undefined>(undefined),
			pageKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdminListCorporaResponse {
		corpus?: Array<AdminCorpus>;

		/**
		 * A key that is passed into a subsequent result in order to
		 * retrieve the next page of results.
		 */
		pageKey?: string | null;
		status?: ComvectaraStatus;
	}
	export interface AdminListCorporaResponseFormProperties {

		/**
		 * A key that is passed into a subsequent result in order to
		 * retrieve the next page of results.
		 */
		pageKey: FormControl<string | null | undefined>,
	}
	export function CreateAdminListCorporaResponseFormGroup() {
		return new FormGroup<AdminListCorporaResponseFormProperties>({
			pageKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdminResetCorpusRequest {

		/** The Corpus ID to be reset. */
		corpusId?: number | null;

		/** The Customer ID that contains the corpus to be reset. */
		customerId?: number | null;
	}
	export interface AdminResetCorpusRequestFormProperties {

		/** The Corpus ID to be reset. */
		corpusId: FormControl<number | null | undefined>,

		/** The Customer ID that contains the corpus to be reset. */
		customerId: FormControl<number | null | undefined>,
	}
	export function CreateAdminResetCorpusRequestFormGroup() {
		return new FormGroup<AdminResetCorpusRequestFormProperties>({
			corpusId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AdminResetCorpusResponse {
		status?: ComvectaraStatus;
	}
	export interface AdminResetCorpusResponseFormProperties {
	}
	export function CreateAdminResetCorpusResponseFormGroup() {
		return new FormGroup<AdminResetCorpusResponseFormProperties>({
		});

	}

	export interface GooglerpcStatus {
		code?: number | null;
		details?: Array<ProtobufAny>;
		message?: string | null;
	}
	export interface GooglerpcStatusFormProperties {
		code: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateGooglerpcStatusFormGroup() {
		return new FormGroup<GooglerpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * `Any` contains an arbitrary serialized protocol buffer message along with a
	 * URL that describes the type of the serialized message.
	 * Protobuf library provides support to pack/unpack Any values in the form
	 * of utility functions or additional generated methods of the Any type.
	 * Example 1: Pack and unpack a message in C++.
	 *     Foo foo = ...;
	 *     Any any;
	 *     any.PackFrom(foo);
	 *     ...
	 *     if (any.UnpackTo(&foo)) {
	 *       ...
	 *     }
	 * Example 2: Pack and unpack a message in Java.
	 *     Foo foo = ...;
	 *     Any any = Any.pack(foo);
	 *     ...
	 *     if (any.is(Foo.class)) {
	 *       foo = any.unpack(Foo.class);
	 *     }
	 * Example 3: Pack and unpack a message in Python.
	 *     foo = Foo(...)
	 *     any = Any()
	 *     any.Pack(foo)
	 *     ...
	 *     if any.Is(Foo.DESCRIPTOR):
	 *       any.Unpack(foo)
	 *       ...
	 * Example 4: Pack and unpack a message in Go
	 *      foo := &pb.Foo{...}
	 *      any, err := anypb.New(foo)
	 *      if err != nil {
	 *        ...
	 *      }
	 *      ...
	 *      foo := &pb.Foo{}
	 *      if err := any.UnmarshalTo(foo); err != nil {
	 *        ...
	 *      }
	 * The pack methods provided by protobuf library will by default use
	 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
	 * methods only use the fully qualified type name after the last '/'
	 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
	 * name "y.z".
	 * JSON
	 * The JSON representation of an `Any` value uses the regular
	 * representation of the deserialized, embedded message, with an
	 * additional field `@type` which contains the type URL. Example:
	 *     package google.profile;
	 *     message Person {
	 *       string first_name = 1;
	 *       string last_name = 2;
	 *     }
	 *     {
	 *       "@type": "type.googleapis.com/google.profile.Person",
	 *       "firstName": <string>,
	 *       "lastName": <string>
	 *     }
	 * If the embedded message type is well-known and has a custom JSON
	 * representation, that representation will be embedded adding a field
	 * `value` which holds the custom JSON in addition to the `@type`
	 * field. Example (for message [google.protobuf.Duration][]):
	 *     {
	 *       "@type": "type.googleapis.com/google.protobuf.Duration",
	 *       "value": "1.212s"
	 *     }
	 */
	export interface ProtobufAny {

		/**
		 * A URL/resource name that uniquely identifies the type of the serialized
		 * protocol buffer message. This string must contain at least
		 * one "/" character. The last segment of the URL's path must represent
		 * the fully qualified name of the type (as in
		 * `path/google.protobuf.Duration`). The name should be in a canonical form
		 * (e.g., leading "." is not accepted).
		 * In practice, teams usually precompile into the binary all types that they
		 * expect it to use in the context of Any. However, for URLs which use the
		 * scheme `http`, `https`, or no scheme, one can optionally set up a type
		 * server that maps type URLs to message definitions as follows:
		 * * If no scheme is provided, `https` is assumed.
		 * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
		 * value in binary format, or produce an error.
		 * * Applications are allowed to cache lookup results based on the
		 * URL, or have them precompiled into a binary to avoid any
		 * lookup. Therefore, binary compatibility needs to be preserved
		 * on changes to types. (Use versioned type names to manage
		 * breaking changes.)
		 * Note: this functionality is not currently available in the official
		 * protobuf release, and it is not used for type URLs beginning with
		 * type.googleapis.com.
		 * Schemes other than `http`, `https` (or the empty scheme) might be
		 * used with implementation specific semantics.
		 */
		typeUrl?: string | null;

		/** Must be a valid serialized protocol buffer of the above specified type. */
		value?: string | null;
	}

	/**
	 * `Any` contains an arbitrary serialized protocol buffer message along with a
	 * URL that describes the type of the serialized message.
	 * Protobuf library provides support to pack/unpack Any values in the form
	 * of utility functions or additional generated methods of the Any type.
	 * Example 1: Pack and unpack a message in C++.
	 *     Foo foo = ...;
	 *     Any any;
	 *     any.PackFrom(foo);
	 *     ...
	 *     if (any.UnpackTo(&foo)) {
	 *       ...
	 *     }
	 * Example 2: Pack and unpack a message in Java.
	 *     Foo foo = ...;
	 *     Any any = Any.pack(foo);
	 *     ...
	 *     if (any.is(Foo.class)) {
	 *       foo = any.unpack(Foo.class);
	 *     }
	 * Example 3: Pack and unpack a message in Python.
	 *     foo = Foo(...)
	 *     any = Any()
	 *     any.Pack(foo)
	 *     ...
	 *     if any.Is(Foo.DESCRIPTOR):
	 *       any.Unpack(foo)
	 *       ...
	 * Example 4: Pack and unpack a message in Go
	 *      foo := &pb.Foo{...}
	 *      any, err := anypb.New(foo)
	 *      if err != nil {
	 *        ...
	 *      }
	 *      ...
	 *      foo := &pb.Foo{}
	 *      if err := any.UnmarshalTo(foo); err != nil {
	 *        ...
	 *      }
	 * The pack methods provided by protobuf library will by default use
	 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
	 * methods only use the fully qualified type name after the last '/'
	 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
	 * name "y.z".
	 * JSON
	 * The JSON representation of an `Any` value uses the regular
	 * representation of the deserialized, embedded message, with an
	 * additional field `@type` which contains the type URL. Example:
	 *     package google.profile;
	 *     message Person {
	 *       string first_name = 1;
	 *       string last_name = 2;
	 *     }
	 *     {
	 *       "@type": "type.googleapis.com/google.profile.Person",
	 *       "firstName": <string>,
	 *       "lastName": <string>
	 *     }
	 * If the embedded message type is well-known and has a custom JSON
	 * representation, that representation will be embedded adding a field
	 * `value` which holds the custom JSON in addition to the `@type`
	 * field. Example (for message [google.protobuf.Duration][]):
	 *     {
	 *       "@type": "type.googleapis.com/google.protobuf.Duration",
	 *       "value": "1.212s"
	 *     }
	 */
	export interface ProtobufAnyFormProperties {

		/**
		 * A URL/resource name that uniquely identifies the type of the serialized
		 * protocol buffer message. This string must contain at least
		 * one "/" character. The last segment of the URL's path must represent
		 * the fully qualified name of the type (as in
		 * `path/google.protobuf.Duration`). The name should be in a canonical form
		 * (e.g., leading "." is not accepted).
		 * In practice, teams usually precompile into the binary all types that they
		 * expect it to use in the context of Any. However, for URLs which use the
		 * scheme `http`, `https`, or no scheme, one can optionally set up a type
		 * server that maps type URLs to message definitions as follows:
		 * * If no scheme is provided, `https` is assumed.
		 * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
		 * value in binary format, or produce an error.
		 * * Applications are allowed to cache lookup results based on the
		 * URL, or have them precompiled into a binary to avoid any
		 * lookup. Therefore, binary compatibility needs to be preserved
		 * on changes to types. (Use versioned type names to manage
		 * breaking changes.)
		 * Note: this functionality is not currently available in the official
		 * protobuf release, and it is not used for type URLs beginning with
		 * type.googleapis.com.
		 * Schemes other than `http`, `https` (or the empty scheme) might be
		 * used with implementation specific semantics.
		 */
		typeUrl: FormControl<string | null | undefined>,

		/** Must be a valid serialized protocol buffer of the above specified type. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateProtobufAnyFormGroup() {
		return new FormGroup<ProtobufAnyFormProperties>({
			typeUrl: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A section within a structured document. */
	export interface IndexingSection {

		/**
		 * A list of custom dimension values that are included in the generated
		 * representation of all subsections (i.e. sections contains by this section).
		 */
		customDims?: Array<VectaraindexingCustomDimension>;

		/**
		 * Optionally, the unique ID of this section. If set, it will be returned as
		 * metadata in query results.
		 */
		id?: number | null;

		/**
		 * Metadata about this section. This should be a json string. It is passed
		 * through the system, without being used at indexing time. It can be
		 * retrieved at query time.
		 */
		metadataJson?: string | null;

		/** A list of subsections. */
		section?: Array<IndexingSection>;

		/** The text of the section. This should never be empty. */
		text?: string | null;

		/** Optionally, the title of the section. This may be empty. */
		title?: string | null;
	}

	/** A section within a structured document. */
	export interface IndexingSectionFormProperties {

		/**
		 * Optionally, the unique ID of this section. If set, it will be returned as
		 * metadata in query results.
		 */
		id: FormControl<number | null | undefined>,

		/**
		 * Metadata about this section. This should be a json string. It is passed
		 * through the system, without being used at indexing time. It can be
		 * retrieved at query time.
		 */
		metadataJson: FormControl<string | null | undefined>,

		/** The text of the section. This should never be empty. */
		text: FormControl<string | null | undefined>,

		/** Optionally, the title of the section. This may be empty. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateIndexingSectionFormGroup() {
		return new FormGroup<IndexingSectionFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			metadataJson: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value of a custom dimension. A valid list of custom dimensions is defined ahead of time for a corpus. */
	export interface VectaraindexingCustomDimension {

		/** The name of the dimension. */
		name?: string | null;

		/** The value of the dimension. */
		value?: number | null;
	}

	/** The value of a custom dimension. A valid list of custom dimensions is defined ahead of time for a corpus. */
	export interface VectaraindexingCustomDimensionFormProperties {

		/** The name of the dimension. */
		name: FormControl<string | null | undefined>,

		/** The value of the dimension. */
		value: FormControl<number | null | undefined>,
	}
	export function CreateVectaraindexingCustomDimensionFormGroup() {
		return new FormGroup<VectaraindexingCustomDimensionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServingAttribute {
		name?: string | null;
		value?: string | null;
	}
	export interface ServingAttributeFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateServingAttributeFormGroup() {
		return new FormGroup<ServingAttributeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServingBatchQueryRequest {
		query?: Array<ServingQueryRequest>;
	}
	export interface ServingBatchQueryRequestFormProperties {
	}
	export function CreateServingBatchQueryRequestFormGroup() {
		return new FormGroup<ServingBatchQueryRequestFormProperties>({
		});

	}

	export interface ServingQueryRequest {
		corpusKey?: Array<ServingCorpusKey>;

		/** The number of results to return. */
		numResults?: number | null;

		/** The query text to use from the end user. */
		query?: string | null;

		/** Configuration options to apply to the reranking. */
		rerankingConfig?: QueryRequestRerankingConfig;
		start?: number | null;
	}
	export interface ServingQueryRequestFormProperties {

		/** The number of results to return. */
		numResults: FormControl<number | null | undefined>,

		/** The query text to use from the end user. */
		query: FormControl<string | null | undefined>,
		start: FormControl<number | null | undefined>,
	}
	export function CreateServingQueryRequestFormGroup() {
		return new FormGroup<ServingQueryRequestFormProperties>({
			numResults: new FormControl<number | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServingCorpusKey {

		/** The Corpus ID. */
		corpusId?: number | null;

		/** The Customer ID. */
		customerId?: number | null;

		/** Weights on custom dimensions for the corpus. */
		dim?: Array<VectaraservingCustomDimension>;
		metadataFilter?: string | null;

		/**
		 * Semantics controls the interpretation of the query string by the
		 * server, and can be used to override the default semantics assigned
		 * in the corpus definition.
		 * - DEFAULT: Use corpus-assigned semantics.  This is the most common setting.
		 * - QUERY: Use query semantics.  This is also common.
		 * - RESPONSE: Use response semantics.  Usage of this is rare.
		 */
		semantics?: CorpusKeySemantics | null;
	}
	export interface ServingCorpusKeyFormProperties {

		/** The Corpus ID. */
		corpusId: FormControl<number | null | undefined>,

		/** The Customer ID. */
		customerId: FormControl<number | null | undefined>,
		metadataFilter: FormControl<string | null | undefined>,

		/**
		 * Semantics controls the interpretation of the query string by the
		 * server, and can be used to override the default semantics assigned
		 * in the corpus definition.
		 * - DEFAULT: Use corpus-assigned semantics.  This is the most common setting.
		 * - QUERY: Use query semantics.  This is also common.
		 * - RESPONSE: Use response semantics.  Usage of this is rare.
		 */
		semantics: FormControl<CorpusKeySemantics | null | undefined>,
	}
	export function CreateServingCorpusKeyFormGroup() {
		return new FormGroup<ServingCorpusKeyFormProperties>({
			corpusId: new FormControl<number | null | undefined>(undefined),
			customerId: new FormControl<number | null | undefined>(undefined),
			metadataFilter: new FormControl<string | null | undefined>(undefined),
			semantics: new FormControl<CorpusKeySemantics | null | undefined>(undefined),
		});

	}


	/** Defined the weight of a custom dimension at query time. */
	export interface VectaraservingCustomDimension {
		name?: string | null;
		weight?: number | null;
	}

	/** Defined the weight of a custom dimension at query time. */
	export interface VectaraservingCustomDimensionFormProperties {
		name: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
	}
	export function CreateVectaraservingCustomDimensionFormGroup() {
		return new FormGroup<VectaraservingCustomDimensionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServingBatchQueryResponse {

		/** Basic performance metrics that can be attached to a server response. */
		metrics?: ServingPerformanceMetrics;
		responseSet?: Array<ServingResponseSet>;
		status?: Array<ComvectaraStatus>;
	}
	export interface ServingBatchQueryResponseFormProperties {
	}
	export function CreateServingBatchQueryResponseFormGroup() {
		return new FormGroup<ServingBatchQueryResponseFormProperties>({
		});

	}


	/** Basic performance metrics that can be attached to a server response. */
	export interface ServingPerformanceMetrics {

		/** How long it took to encode the query. */
		queryEncodeMs?: number | null;

		/** How long it took to rerank the results. */
		rerankMs?: number | null;

		/** How long it took to retrieve relevant results. */
		retrievalMs?: number | null;

		/** How long it took to retrieve user data. */
		userdataRetrievalMs?: number | null;
	}

	/** Basic performance metrics that can be attached to a server response. */
	export interface ServingPerformanceMetricsFormProperties {

		/** How long it took to encode the query. */
		queryEncodeMs: FormControl<number | null | undefined>,

		/** How long it took to rerank the results. */
		rerankMs: FormControl<number | null | undefined>,

		/** How long it took to retrieve relevant results. */
		retrievalMs: FormControl<number | null | undefined>,

		/** How long it took to retrieve user data. */
		userdataRetrievalMs: FormControl<number | null | undefined>,
	}
	export function CreateServingPerformanceMetricsFormGroup() {
		return new FormGroup<ServingPerformanceMetricsFormProperties>({
			queryEncodeMs: new FormControl<number | null | undefined>(undefined),
			rerankMs: new FormControl<number | null | undefined>(undefined),
			retrievalMs: new FormControl<number | null | undefined>(undefined),
			userdataRetrievalMs: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ServingResponseSet {
		document?: Array<ServingResponseSetDocument>;
		response?: Array<ServingResponse>;

		/** Potentially multiple warnings. */
		status?: Array<ComvectaraStatus>;
	}
	export interface ServingResponseSetFormProperties {
	}
	export function CreateServingResponseSetFormGroup() {
		return new FormGroup<ServingResponseSetFormProperties>({
		});

	}

	export interface ServingResponseSetDocument {
		id?: string | null;
		metadata?: Array<ServingAttribute>;
	}
	export interface ServingResponseSetDocumentFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateServingResponseSetDocumentFormGroup() {
		return new FormGroup<ServingResponseSetDocumentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ServingResponse {
		corpusKey?: ServingCorpusKey;

		/** Use this ID to find the document in the ResponseSet. */
		documentIndex?: number | null;
		metadata?: Array<ServingAttribute>;

		/** The score used for ranking results.  The higher the score, the better the match. */
		score?: number | null;
		text?: string | null;
	}
	export interface ServingResponseFormProperties {

		/** Use this ID to find the document in the ResponseSet. */
		documentIndex: FormControl<number | null | undefined>,

		/** The score used for ranking results.  The higher the score, the better the match. */
		score: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateServingResponseFormGroup() {
		return new FormGroup<ServingResponseFormProperties>({
			documentIndex: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to delete a document from an index. */
	export interface VectaraDeleteDocumentRequest {

		/** The Corpus ID that contains the document. */
		corpusId?: string | null;

		/** The Customer ID to issue the request for. */
		customerId?: string | null;

		/** The Document ID to be deleted. */
		documentId?: string | null;
	}

	/** Request to delete a document from an index. */
	export interface VectaraDeleteDocumentRequestFormProperties {

		/** The Corpus ID that contains the document. */
		corpusId: FormControl<string | null | undefined>,

		/** The Customer ID to issue the request for. */
		customerId: FormControl<string | null | undefined>,

		/** The Document ID to be deleted. */
		documentId: FormControl<string | null | undefined>,
	}
	export function CreateVectaraDeleteDocumentRequestFormGroup() {
		return new FormGroup<VectaraDeleteDocumentRequestFormProperties>({
			corpusId: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			documentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VectaraDeleteDocumentResponse {
	}
	export interface VectaraDeleteDocumentResponseFormProperties {
	}
	export function CreateVectaraDeleteDocumentResponseFormGroup() {
		return new FormGroup<VectaraDeleteDocumentResponseFormProperties>({
		});

	}

	export interface VectaraIndexDocumentRequest {
		corpusId?: string | null;
		customerId?: string | null;

		/** A document to index. */
		document?: VectaraindexingDocument;
	}
	export interface VectaraIndexDocumentRequestFormProperties {
		corpusId: FormControl<string | null | undefined>,
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateVectaraIndexDocumentRequestFormGroup() {
		return new FormGroup<VectaraIndexDocumentRequestFormProperties>({
			corpusId: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A document to index. */
	export interface VectaraindexingDocument {

		/**
		 * A list of custom dimension values that are included in the generated
		 * representation of all sections.
		 */
		customDims?: Array<VectaraindexingCustomDimension>;

		/** An optional description for the document. */
		description?: string | null;

		/** Client assigned document ID to this document. */
		documentId?: string | null;

		/**
		 * Metadata about the document. This should be a json string, and it can be
		 * retrieved at query time.
		 */
		metadataJson?: string | null;

		/**
		 * The actual content of the document, structured as a repeating list
		 * of sections.
		 */
		section?: Array<IndexingSection>;

		/** The title of the document. */
		title?: string | null;
	}

	/** A document to index. */
	export interface VectaraindexingDocumentFormProperties {

		/** An optional description for the document. */
		description: FormControl<string | null | undefined>,

		/** Client assigned document ID to this document. */
		documentId: FormControl<string | null | undefined>,

		/**
		 * Metadata about the document. This should be a json string, and it can be
		 * retrieved at query time.
		 */
		metadataJson: FormControl<string | null | undefined>,

		/** The title of the document. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateVectaraindexingDocumentFormGroup() {
		return new FormGroup<VectaraindexingDocumentFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			documentId: new FormControl<string | null | undefined>(undefined),
			metadataJson: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VectaraIndexDocumentResponse {
		quotaConsumed?: VectaraStorageQuota;
		status?: ComvectaraStatus;
	}
	export interface VectaraIndexDocumentResponseFormProperties {
	}
	export function CreateVectaraIndexDocumentResponseFormGroup() {
		return new FormGroup<VectaraIndexDocumentResponseFormProperties>({
		});

	}

	export interface VectaraStorageQuota {

		/** The number of chars from the document that consumed the storage quota. */
		numChars?: string | null;

		/**
		 * The number of chars in the metadata of the document that consumed the
		 * storage quota.
		 */
		numMetadataChars?: string | null;
	}
	export interface VectaraStorageQuotaFormProperties {

		/** The number of chars from the document that consumed the storage quota. */
		numChars: FormControl<string | null | undefined>,

		/**
		 * The number of chars in the metadata of the document that consumed the
		 * storage quota.
		 */
		numMetadataChars: FormControl<string | null | undefined>,
	}
	export function CreateVectaraStorageQuotaFormGroup() {
		return new FormGroup<VectaraStorageQuotaFormProperties>({
			numChars: new FormControl<string | null | undefined>(undefined),
			numMetadataChars: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VectaraStatusCode { OK = 0, FAILURE = 1, UNKNOWN = 2, INVALID_ARGUMENT = 3, DEADLINE_EXCEEDED = 4, ALREADY_EXISTS = 5, PERMISSION_DENIED = 6, RESOURCE_EXHAUSTED = 7, FAILED_PRECONDITION = 8, ABORTED = 9, OUT_OF_RANGE = 10, UNIMPLEMENTED = 11, INTERNAL = 12, UNAVAILABLE = 13, DATA_LOSS = 14, UNAUTHENTICATED = 15, BAD_REQUEST = 16, UNAUTHORIZED = 17, FORBIDDEN = 18, NOT_FOUND = 19, METHOD_NOT_ALLOWED = 20, CONFLICT = 21, UNSUPPORTED_MEDIA_TYPE = 22, TOO_MANY_REQUESTS = 23, INTERNAL_SERVER_ERROR = 24, NOT_IMPLEMENTED = 25, SERVICE_UNAVAILABLE = 26, INSUFFICIENT_STORAGE = 27, UNPARSEABLE_RESPONSE = 28, DISABLED_CUSTOMER = 29, INVALID_CUSTOMER_ID = 30, DISABLED_CORPUS = 31, INVALID_CORPUS_ID = 32, DISABLED_API_KEY = 33, EXPIRED_API_KEY = 34, INVALID_API_KEY = 35, CMK_INACCESSIBLE = 36, QRY__DISABLED_CORPUS = 37, QRY__DOCUMENT_DB_FAILURE = 38, QRY__ENCODER_FAILURE = 39, QRY__INTERRUPTED = 40, QRY__INVALID_CORPUS = 41, QRY__INVALID_START = 42, QRY__INVALID_NUM_RESULTS = 43, QRY__INVALID_CONTEXT = 44, QRY__MISSING_QUERY = 45, QRY__MISSING_CORPUS = 46, QRY__TIMEOUT = 47, QRY__TOO_MANY_CORPORA = 48, QRY__TOO_MANY_QUERIES = 49, QRY__VECTOR_INDEX_FAILURE = 50, QRY__INVALID_DIMENSION = 51, QRY__INVALID_CLIENTKEY = 52, QRY__DECRYPTION_FAILURE = 53, QRY__INVALID_RERANKER = 54, QRY__PARTIAL_RERANK = 55, QRY__RERANK_FAILURE = 56, QRY__TOO_MANY_RESULT_ROWS = 57, QRY__PARTIAL_RETRIEVAL = 58, CX_SPECS__INVALID_JSON = 59, CX_SPECS__UNREGISTERED_TYPE = 60, CX_SPECS__MISSING_SPEC = 61, CX_SPECS__MISSING_TYPE = 62, CX_SPECS__UNPARSEABLE_SPEC = 63, ADM__INVALID_CUSTOMER_ID = 64, ADM__INVALID_CORPUS_ID = 65, ADM__INVALID_ENCODER_ID = 66, ADM__INVALID_ROLE_ID = 67, ADM__ROLE_ALREADY_EXISTS = 68, ADM__ONLY_ONE_OWNER_SUPPORTED = 69, ADM__INVALID_PERMISSION = 70, ADM__ROLECREATION_FAILURE = 71, ADM__USER_EMAIL_NOT_AVAIALBLE = 72, ADM__USERNAME_NOT_AVAILABLE = 73, ADM__SIGNUP_MISSING_NAME = 74, ADM__SIGNUP_MISSING_ORG = 75, ADM__SIGNUP_MISSING_EMAIL = 76, ADM__SIGNUP_MISSING_PAYMENT = 77, ADM__SIGNUP_MISSING_PLAN = 78, ADM__SIGNUP_MISSING_PASSWORD = 79, ADM__SIGNUP_INVALID_NAME = 80, ADM__SIGNUP_INVALID_ORG = 81, ADM__SIGNUP_INVALID_EMAIL = 82, ADM__SIGNUP_INVALID_PAYMENT = 83, ADM__SIGNUP_INVALID_PLAN = 84, ADM__SIGNUP_INVALID_PASSWORD = 85, ADM__SIGNUP_INVALID_ACCOUNT_ALIAS = 86, ADM__SIGNUP_INVALID_EMAIL_VALIDATION_CODE = 87, ADM__SIGNUP_MISSING_COUNTRY_CODE = 88, ADM__SIGNUP_ROOT_EMAIL_NOT_AVAILABLE = 89, ADM__CUST_MARK_DELETE_FAILED = 90, ADM__CUST_FAISS_DEALLOC_FAILED = 91, ADM__CORPUS_LIMIT_REACHED = 92, ADM__STRIPE_CARD_DECLINED = 93, ADM__STRIPE_PROCESSING_ERROR = 94, ADM__EMAIL_VALIDATION_REQUEST_NOT_FOUND = 95, ADM__EMAIL_NOT_VALIDATED = 96, ADM__CHANGE_PLAN__NO_CURRENT_PLAN = 97, ADM__CHANGE_PLAN__REQUIRES_MANUAL_CHANGE = 98, ADM__CHANGE_PLAN__INVALID_PLAN_ID = 99, ADM__CHANGE_PLAN__NO_PAYMENT_SOURCE = 100, ADM__CHANGE_PLAN__INVALID_EFFECTIVE_DATE = 101, ADM__CHANGE_PLAN__CONFLICTING_CHANGE = 102, SCM__MISCONFIGURED_CONNECTION = 103, STATS_DB_READ_FAILURE = 104, VDB__TEXT_READ_FAILURE = 105, REBUILD__LOW_RECALL = 106, REBUILD__INDEX_UPLOAD_FAILURE = 107, REBUILD__UPDATE_JOURNAL_FAILURE = 108, REBUILD__UPDATE_FAISSPARAMS_FAILURE = 109, REBUILD__NO_DATA = 110, REBUILD__EVALUATION = 111, IDX__TRANSIENT_PARTIAL_DELETION_FAILURE = 112, IDX__PERMANENT_PARTIAL_DELETION_FAILURE = 113 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Create Corpus
		 * Post v1/create-corpus
		 * @return {AdminCreateCorpusResponse} A successful response.
		 */
		CreateCorpus(requestBody: AdminCreateCorpusRequest): Observable<AdminCreateCorpusResponse> {
			return this.http.post<AdminCreateCorpusResponse>(this.baseUri + 'v1/create-corpus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete Corpus
		 * Post v1/delete-corpus
		 * @return {AdminDeleteCorpusResponse} A successful response.
		 */
		DeleteCorpus(requestBody: AdminDeleteCorpusRequest): Observable<AdminDeleteCorpusResponse> {
			return this.http.post<AdminDeleteCorpusResponse>(this.baseUri + 'v1/delete-corpus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete
		 * Post v1/delete-doc
		 * @return {VectaraDeleteDocumentResponse} A successful response.
		 */
		Delete(requestBody: VectaraDeleteDocumentRequest): Observable<VectaraDeleteDocumentResponse> {
			return this.http.post<VectaraDeleteDocumentResponse>(this.baseUri + 'v1/delete-doc', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Index
		 * Post v1/index
		 * @return {VectaraIndexDocumentResponse} A successful response.
		 */
		Index(requestBody: VectaraIndexDocumentRequest): Observable<VectaraIndexDocumentResponse> {
			return this.http.post<VectaraIndexDocumentResponse>(this.baseUri + 'v1/index', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List Corpora
		 * Post v1/list-corpora
		 * @return {AdminListCorporaResponse} A successful response.
		 */
		ListCorpora(requestBody: AdminListCorporaRequest): Observable<AdminListCorporaResponse> {
			return this.http.post<AdminListCorporaResponse>(this.baseUri + 'v1/list-corpora', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query
		 * Post v1/query
		 * @return {ServingBatchQueryResponse} A successful response.
		 */
		Query(requestBody: ServingBatchQueryRequest): Observable<ServingBatchQueryResponse> {
			return this.http.post<ServingBatchQueryResponse>(this.baseUri + 'v1/query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reset Corpus
		 * Post v1/reset-corpus
		 * @return {AdminResetCorpusResponse} A successful response.
		 */
		ResetCorpus(requestBody: AdminResetCorpusRequest): Observable<AdminResetCorpusResponse> {
			return this.http.post<AdminResetCorpusResponse>(this.baseUri + 'v1/reset-corpus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stream Query
		 * Post v1/stream-query
		 * @return {StreamQueryReturn} A successful response.(streaming responses)
		 */
		StreamQuery(requestBody: ServingBatchQueryRequest): Observable<StreamQueryReturn> {
			return this.http.post<StreamQueryReturn>(this.baseUri + 'v1/stream-query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface StreamQueryReturn {
		error?: GooglerpcStatus;
		result?: ServingResponseSet;
	}
	export interface StreamQueryReturnFormProperties {
	}
	export function CreateStreamQueryReturnFormGroup() {
		return new FormGroup<StreamQueryReturnFormProperties>({
		});

	}

}

