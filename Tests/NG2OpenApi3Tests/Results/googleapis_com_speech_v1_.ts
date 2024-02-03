import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ABNFGrammar {

		/** All declarations and rules of an ABNF grammar broken up into multiple strings that will end up concatenated. */
		abnfStrings?: Array<string>;
	}
	export interface ABNFGrammarFormProperties {
	}
	export function CreateABNFGrammarFormGroup() {
		return new FormGroup<ABNFGrammarFormProperties>({
		});

	}


	/** An item of the class. */
	export interface ClassItem {

		/** The class item's value. */
		value?: string | null;
	}

	/** An item of the class. */
	export interface ClassItemFormProperties {

		/** The class item's value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateClassItemFormGroup() {
		return new FormGroup<ClassItemFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message sent by the client for the `CreateCustomClass` method. */
	export interface CreateCustomClassRequest {

		/** A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases. */
		customClass?: CustomClass;

		/** Required. The ID to use for the custom class, which will become the final component of the custom class' resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters. */
		customClassId?: string | null;
	}

	/** Message sent by the client for the `CreateCustomClass` method. */
	export interface CreateCustomClassRequestFormProperties {

		/** Required. The ID to use for the custom class, which will become the final component of the custom class' resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters. */
		customClassId: FormControl<string | null | undefined>,
	}
	export function CreateCreateCustomClassRequestFormGroup() {
		return new FormGroup<CreateCustomClassRequestFormProperties>({
			customClassId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases. */
	export interface CustomClass {

		/** Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations. This field is not used. */
		annotations?: {[id: string]: string };

		/** If this custom class is a resource, the custom_class_id is the resource id of the CustomClass. Case sensitive. */
		customClassId?: string | null;

		/** Output only. The time at which this resource was requested for deletion. This field is not used. */
		deleteTime?: string | null;

		/** Output only. User-settable, human-readable name for the CustomClass. Must be 63 characters or less. This field is not used. */
		displayName?: string | null;

		/** Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is not used. */
		etag?: string | null;

		/** Output only. The time at which this resource will be purged. This field is not used. */
		expireTime?: string | null;

		/** A collection of class items. */
		items?: Array<ClassItem>;

		/** Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which the content of the ClassItem is encrypted. The expected format is `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. */
		kmsKeyName?: string | null;

		/** Output only. The [KMS key version name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which content of the ClassItem is encrypted. The expected format is `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}`. */
		kmsKeyVersionName?: string | null;

		/** The resource name of the custom class. */
		name?: string | null;

		/** Output only. Whether or not this CustomClass is in the process of being updated. This field is not used. */
		reconciling?: boolean | null;

		/** Output only. The CustomClass lifecycle state. This field is not used. */
		state?: CustomClassState | null;

		/** Output only. System-assigned unique identifier for the CustomClass. This field is not used. */
		uid?: string | null;
	}

	/** A set of words or phrases that represents a common concept likely to appear in your audio, for example a list of passenger ship names. CustomClass items can be substituted into placeholders that you set in PhraseSet phrases. */
	export interface CustomClassFormProperties {

		/** Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations. This field is not used. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** If this custom class is a resource, the custom_class_id is the resource id of the CustomClass. Case sensitive. */
		customClassId: FormControl<string | null | undefined>,

		/** Output only. The time at which this resource was requested for deletion. This field is not used. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. User-settable, human-readable name for the CustomClass. Must be 63 characters or less. This field is not used. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is not used. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The time at which this resource will be purged. This field is not used. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which the content of the ClassItem is encrypted. The expected format is `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Output only. The [KMS key version name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which content of the ClassItem is encrypted. The expected format is `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}`. */
		kmsKeyVersionName: FormControl<string | null | undefined>,

		/** The resource name of the custom class. */
		name: FormControl<string | null | undefined>,

		/** Output only. Whether or not this CustomClass is in the process of being updated. This field is not used. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The CustomClass lifecycle state. This field is not used. */
		state: FormControl<CustomClassState | null | undefined>,

		/** Output only. System-assigned unique identifier for the CustomClass. This field is not used. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateCustomClassFormGroup() {
		return new FormGroup<CustomClassFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			customClassId: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			kmsKeyVersionName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<CustomClassState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CustomClassState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETED = 'DELETED' }


	/** Message sent by the client for the `CreatePhraseSet` method. */
	export interface CreatePhraseSetRequest {

		/** Provides "hints" to the speech recognizer to favor specific words and phrases in the results. */
		phraseSet?: PhraseSet;

		/** Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters. */
		phraseSetId?: string | null;
	}

	/** Message sent by the client for the `CreatePhraseSet` method. */
	export interface CreatePhraseSetRequestFormProperties {

		/** Required. The ID to use for the phrase set, which will become the final component of the phrase set's resource name. This value should restrict to letters, numbers, and hyphens, with the first character a letter, the last a letter or a number, and be 4-63 characters. */
		phraseSetId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePhraseSetRequestFormGroup() {
		return new FormGroup<CreatePhraseSetRequestFormProperties>({
			phraseSetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides "hints" to the speech recognizer to favor specific words and phrases in the results. */
	export interface PhraseSet {

		/** Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations. This field is not used. */
		annotations?: {[id: string]: string };

		/** Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 (exclusive) and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests. */
		boost?: number | null;

		/** Output only. The time at which this resource was requested for deletion. This field is not used. */
		deleteTime?: string | null;

		/** Output only. User-settable, human-readable name for the PhraseSet. Must be 63 characters or less. This field is not used. */
		displayName?: string | null;

		/** Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is not used. */
		etag?: string | null;

		/** Output only. The time at which this resource will be purged. This field is not used. */
		expireTime?: string | null;

		/** Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which the content of the PhraseSet is encrypted. The expected format is `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. */
		kmsKeyName?: string | null;

		/** Output only. The [KMS key version name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which content of the PhraseSet is encrypted. The expected format is `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}`. */
		kmsKeyVersionName?: string | null;

		/** The resource name of the phrase set. */
		name?: string | null;

		/** A list of word and phrases. */
		phrases?: Array<Phrase>;

		/** Output only. Whether or not this PhraseSet is in the process of being updated. This field is not used. */
		reconciling?: boolean | null;

		/** Output only. The CustomClass lifecycle state. This field is not used. */
		state?: CustomClassState | null;

		/** Output only. System-assigned unique identifier for the PhraseSet. This field is not used. */
		uid?: string | null;
	}

	/** Provides "hints" to the speech recognizer to favor specific words and phrases in the results. */
	export interface PhraseSetFormProperties {

		/** Output only. Allows users to store small amounts of arbitrary data. Both the key and the value must be 63 characters or less each. At most 100 annotations. This field is not used. */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 (exclusive) and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests. */
		boost: FormControl<number | null | undefined>,

		/** Output only. The time at which this resource was requested for deletion. This field is not used. */
		deleteTime: FormControl<string | null | undefined>,

		/** Output only. User-settable, human-readable name for the PhraseSet. Must be 63 characters or less. This field is not used. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. This checksum is computed by the server based on the value of other fields. This may be sent on update, undelete, and delete requests to ensure the client has an up-to-date value before proceeding. This field is not used. */
		etag: FormControl<string | null | undefined>,

		/** Output only. The time at which this resource will be purged. This field is not used. */
		expireTime: FormControl<string | null | undefined>,

		/** Output only. The [KMS key name](https://cloud.google.com/kms/docs/resource-hierarchy#keys) with which the content of the PhraseSet is encrypted. The expected format is `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}`. */
		kmsKeyName: FormControl<string | null | undefined>,

		/** Output only. The [KMS key version name](https://cloud.google.com/kms/docs/resource-hierarchy#key_versions) with which content of the PhraseSet is encrypted. The expected format is `projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}/cryptoKeyVersions/{crypto_key_version}`. */
		kmsKeyVersionName: FormControl<string | null | undefined>,

		/** The resource name of the phrase set. */
		name: FormControl<string | null | undefined>,

		/** Output only. Whether or not this PhraseSet is in the process of being updated. This field is not used. */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The CustomClass lifecycle state. This field is not used. */
		state: FormControl<CustomClassState | null | undefined>,

		/** Output only. System-assigned unique identifier for the PhraseSet. This field is not used. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreatePhraseSetFormGroup() {
		return new FormGroup<PhraseSetFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			boost: new FormControl<number | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			expireTime: new FormControl<string | null | undefined>(undefined),
			kmsKeyName: new FormControl<string | null | undefined>(undefined),
			kmsKeyVersionName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<CustomClassState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A phrases containing words and phrase "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech-to-text/quotas#content). List items can also include pre-built or custom classes containing groups of words that represent common concepts that occur in natural language. For example, rather than providing a phrase hint for every month of the year (e.g. "i was born in january", "i was born in febuary", ...), use the pre-built `$MONTH` class improves the likelihood of correctly transcribing audio that includes months (e.g. "i was born in $month"). To refer to pre-built classes, use the class' symbol prepended with `$` e.g. `$MONTH`. To refer to custom classes that were defined inline in the request, set the class's `custom_class_id` to a string unique to all class resources and inline classes. Then use the class' id wrapped in $`{...}` e.g. "${my-months}". To refer to custom classes resources, use the class' id wrapped in `${}` (e.g. `${my-months}`). Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value. */
	export interface Phrase {

		/** Hint Boost. Overrides the boost set at the phrase set level. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests. */
		boost?: number | null;

		/** The phrase itself. */
		value?: string | null;
	}

	/** A phrases containing words and phrase "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech-to-text/quotas#content). List items can also include pre-built or custom classes containing groups of words that represent common concepts that occur in natural language. For example, rather than providing a phrase hint for every month of the year (e.g. "i was born in january", "i was born in febuary", ...), use the pre-built `$MONTH` class improves the likelihood of correctly transcribing audio that includes months (e.g. "i was born in $month"). To refer to pre-built classes, use the class' symbol prepended with `$` e.g. `$MONTH`. To refer to custom classes that were defined inline in the request, set the class's `custom_class_id` to a string unique to all class resources and inline classes. Then use the class' id wrapped in $`{...}` e.g. "${my-months}". To refer to custom classes resources, use the class' id wrapped in `${}` (e.g. `${my-months}`). Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value. */
	export interface PhraseFormProperties {

		/** Hint Boost. Overrides the boost set at the phrase set level. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case as well as adding phrases both with and without boost to your requests. */
		boost: FormControl<number | null | undefined>,

		/** The phrase itself. */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePhraseFormGroup() {
		return new FormGroup<PhraseFormProperties>({
			boost: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
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


	/** A single replacement configuration. */
	export interface Entry {

		/** Whether the search is case sensitive. */
		caseSensitive?: boolean | null;

		/** What to replace with. Max length is 100 characters. */
		replace?: string | null;

		/** What to replace. Max length is 100 characters. */
		search?: string | null;
	}

	/** A single replacement configuration. */
	export interface EntryFormProperties {

		/** Whether the search is case sensitive. */
		caseSensitive: FormControl<boolean | null | undefined>,

		/** What to replace with. Max length is 100 characters. */
		replace: FormControl<string | null | undefined>,

		/** What to replace. Max length is 100 characters. */
		search: FormControl<string | null | undefined>,
	}
	export function CreateEntryFormGroup() {
		return new FormGroup<EntryFormProperties>({
			caseSensitive: new FormControl<boolean | null | undefined>(undefined),
			replace: new FormControl<string | null | undefined>(undefined),
			search: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message returned to the client by the `ListCustomClasses` method. */
	export interface ListCustomClassesResponse {

		/** The custom classes. */
		customClasses?: Array<CustomClass>;

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;
	}

	/** Message returned to the client by the `ListCustomClasses` method. */
	export interface ListCustomClassesResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCustomClassesResponseFormGroup() {
		return new FormGroup<ListCustomClassesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponse {

		/** The standard List next-page token. */
		nextPageToken?: string | null;

		/** A list of operations that matches the specified filter in the request. */
		operations?: Array<Operation>;
	}

	/** The response message for Operations.ListOperations. */
	export interface ListOperationsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOperationsResponseFormGroup() {
		return new FormGroup<ListOperationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

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
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
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


	/** Message returned to the client by the `ListPhraseSet` method. */
	export interface ListPhraseSetResponse {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken?: string | null;

		/** The phrase set. */
		phraseSets?: Array<PhraseSet>;
	}

	/** Message returned to the client by the `ListPhraseSet` method. */
	export interface ListPhraseSetResponseFormProperties {

		/** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPhraseSetResponseFormGroup() {
		return new FormGroup<ListPhraseSetResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the progress of a long-running `LongRunningRecognize` call. It is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface LongRunningRecognizeMetadata {

		/** Time of the most recent processing update. */
		lastUpdateTime?: string | null;

		/** Approximate percentage of audio processed thus far. Guaranteed to be 100 when the audio is fully processed and the results are available. */
		progressPercent?: number | null;

		/** Time when the request was received. */
		startTime?: string | null;

		/** Output only. The URI of the audio file being transcribed. Empty if the audio was sent as byte content. */
		uri?: string | null;
	}

	/** Describes the progress of a long-running `LongRunningRecognize` call. It is included in the `metadata` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface LongRunningRecognizeMetadataFormProperties {

		/** Time of the most recent processing update. */
		lastUpdateTime: FormControl<string | null | undefined>,

		/** Approximate percentage of audio processed thus far. Guaranteed to be 100 when the audio is fully processed and the results are available. */
		progressPercent: FormControl<number | null | undefined>,

		/** Time when the request was received. */
		startTime: FormControl<string | null | undefined>,

		/** Output only. The URI of the audio file being transcribed. Empty if the audio was sent as byte content. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateLongRunningRecognizeMetadataFormGroup() {
		return new FormGroup<LongRunningRecognizeMetadataFormProperties>({
			lastUpdateTime: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The top-level message sent by the client for the `LongRunningRecognize` method. */
	export interface LongRunningRecognizeRequest {

		/** Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content). */
		audio?: RecognitionAudio;

		/** Provides information to the recognizer that specifies how to process the request. */
		config?: RecognitionConfig;

		/** Specifies an optional destination for the recognition results. */
		outputConfig?: TranscriptOutputConfig;
	}

	/** The top-level message sent by the client for the `LongRunningRecognize` method. */
	export interface LongRunningRecognizeRequestFormProperties {
	}
	export function CreateLongRunningRecognizeRequestFormGroup() {
		return new FormGroup<LongRunningRecognizeRequestFormProperties>({
		});

	}


	/** Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content). */
	export interface RecognitionAudio {

		/** The audio data bytes encoded as specified in `RecognitionConfig`. Note: as with all bytes fields, proto buffers use a pure binary representation, whereas JSON representations use base64. */
		content?: string | null;

		/** URI that points to a file that contains audio data bytes as specified in `RecognitionConfig`. The file must not be compressed (for example, gzip). Currently, only Google Cloud Storage URIs are supported, which must be specified in the following format: `gs://bucket_name/object_name` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/reference-uris). */
		uri?: string | null;
	}

	/** Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content). */
	export interface RecognitionAudioFormProperties {

		/** The audio data bytes encoded as specified in `RecognitionConfig`. Note: as with all bytes fields, proto buffers use a pure binary representation, whereas JSON representations use base64. */
		content: FormControl<string | null | undefined>,

		/** URI that points to a file that contains audio data bytes as specified in `RecognitionConfig`. The file must not be compressed (for example, gzip). Currently, only Google Cloud Storage URIs are supported, which must be specified in the following format: `gs://bucket_name/object_name` (other URI formats return google.rpc.Code.INVALID_ARGUMENT). For more information, see [Request URIs](https://cloud.google.com/storage/docs/reference-uris). */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateRecognitionAudioFormGroup() {
		return new FormGroup<RecognitionAudioFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information to the recognizer that specifies how to process the request. */
	export interface RecognitionConfig {

		/** Speech adaptation configuration. */
		adaptation?: SpeechAdaptation;

		/** A list of up to 3 additional [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tags, listing possible alternative languages of the supplied audio. See [Language Support](https://cloud.google.com/speech-to-text/docs/languages) for a list of the currently supported language codes. If alternative languages are listed, recognition result will contain recognition in the most likely language detected including the main language_code. The recognition result will include the language tag of the language detected in the audio. Note: This feature is only supported for Voice Command and Voice Search use cases and performance may vary for other use cases (e.g., phone call transcription). */
		alternativeLanguageCodes?: Array<string>;

		/** The number of channels in the input audio data. ONLY set this for MULTI-CHANNEL recognition. Valid values for LINEAR16, OGG_OPUS and FLAC are `1`-`8`. Valid value for MULAW, AMR, AMR_WB and SPEEX_WITH_HEADER_BYTE is only `1`. If `0` or omitted, defaults to one channel (mono). Note: We only recognize the first channel by default. To perform independent recognition on each channel set `enable_separate_recognition_per_channel` to 'true'. */
		audioChannelCount?: number | null;

		/** Config to enable speaker diarization. */
		diarizationConfig?: SpeakerDiarizationConfig;

		/** If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default 'false' value does not add punctuation to result hypotheses. */
		enableAutomaticPunctuation?: boolean | null;

		/** This needs to be set to `true` explicitly and `audio_channel_count` > 1 to get each channel recognized separately. The recognition result will contain a `channel_tag` field to state which channel that result belongs to. If this is not true, we will only recognize the first channel. The request is billed cumulatively for all channels recognized: `audio_channel_count` multiplied by the length of the audio. */
		enableSeparateRecognitionPerChannel?: boolean | null;

		/** The spoken emoji behavior for the call If not set, uses default behavior based on model of choice If 'true', adds spoken emoji formatting for the request. This will replace spoken emojis with the corresponding Unicode symbols in the final transcript. If 'false', spoken emojis are not replaced. */
		enableSpokenEmojis?: boolean | null;

		/** The spoken punctuation behavior for the call If not set, uses default behavior based on model of choice e.g. command_and_search will enable spoken punctuation by default If 'true', replaces spoken punctuation with the corresponding symbols in the request. For example, "how are you question mark" becomes "how are you?". See https://cloud.google.com/speech-to-text/docs/spoken-punctuation for support. If 'false', spoken punctuation is not replaced. */
		enableSpokenPunctuation?: boolean | null;

		/** If `true`, the top result includes a list of words and the confidence for those words. If `false`, no word-level confidence information is returned. The default is `false`. */
		enableWordConfidence?: boolean | null;

		/** If `true`, the top result includes a list of words and the start and end time offsets (timestamps) for those words. If `false`, no word-level time offset information is returned. The default is `false`. */
		enableWordTimeOffsets?: boolean | null;

		/** Encoding of audio data sent in all `RecognitionAudio` messages. This field is optional for `FLAC` and `WAV` audio files and required for all other audio formats. For details, see AudioEncoding. */
		encoding?: RecognitionConfigEncoding | null;

		/** Required. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See [Language Support](https://cloud.google.com/speech-to-text/docs/languages) for a list of the currently supported language codes. */
		languageCode?: string | null;

		/** Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of `SpeechRecognitionAlternative` messages within each `SpeechRecognitionResult`. The server may return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of one. If omitted, will return a maximum of one. */
		maxAlternatives?: number | null;

		/** Description of audio data to be recognized. */
		metadata?: RecognitionMetadata;

		/** Which model to select for the given request. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then we auto-select a model based on the parameters in the RecognitionConfig. *Model* *Description* latest_long Best for long form content like media or conversation. latest_short Best for short form content like commands or single shot directed speech. command_and_search Best for short queries such as voice commands or voice search. phone_call Best for audio that originated from a phone call (typically recorded at an 8khz sampling rate). video Best for audio that originated from video or includes multiple speakers. Ideally the audio is recorded at a 16khz or greater sampling rate. This is a premium model that costs more than the standard rate. default Best for audio that is not one of the specific audio models. For example, long-form audio. Ideally the audio is high-fidelity, recorded at a 16khz or greater sampling rate. medical_conversation Best for audio that originated from a conversation between a medical provider and patient. medical_dictation Best for audio that originated from dictation notes by a medical provider. */
		model?: string | null;

		/** If set to `true`, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. "f***". If set to `false` or omitted, profanities won't be filtered out. */
		profanityFilter?: boolean | null;

		/** Sample rate in Hertz of the audio data sent in all `RecognitionAudio` messages. Valid values are: 8000-48000. 16000 is optimal. For best results, set the sampling rate of the audio source to 16000 Hz. If that's not possible, use the native sample rate of the audio source (instead of re-sampling). This field is optional for FLAC and WAV audio files, but is required for all other audio formats. For details, see AudioEncoding. */
		sampleRateHertz?: number | null;

		/** Array of SpeechContext. A means to provide context to assist the speech recognition. For more information, see [speech adaptation](https://cloud.google.com/speech-to-text/docs/adaptation). */
		speechContexts?: Array<SpeechContext>;

		/** Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts. */
		transcriptNormalization?: TranscriptNormalization;

		/** Set to true to use an enhanced model for speech recognition. If `use_enhanced` is set to true and the `model` field is not set, then an appropriate enhanced model is chosen if an enhanced model exists for the audio. If `use_enhanced` is true and an enhanced version of the specified model does not exist, then the speech is recognized using the standard version of the specified model. */
		useEnhanced?: boolean | null;
	}

	/** Provides information to the recognizer that specifies how to process the request. */
	export interface RecognitionConfigFormProperties {

		/** The number of channels in the input audio data. ONLY set this for MULTI-CHANNEL recognition. Valid values for LINEAR16, OGG_OPUS and FLAC are `1`-`8`. Valid value for MULAW, AMR, AMR_WB and SPEEX_WITH_HEADER_BYTE is only `1`. If `0` or omitted, defaults to one channel (mono). Note: We only recognize the first channel by default. To perform independent recognition on each channel set `enable_separate_recognition_per_channel` to 'true'. */
		audioChannelCount: FormControl<number | null | undefined>,

		/** If 'true', adds punctuation to recognition result hypotheses. This feature is only available in select languages. Setting this for requests in other languages has no effect at all. The default 'false' value does not add punctuation to result hypotheses. */
		enableAutomaticPunctuation: FormControl<boolean | null | undefined>,

		/** This needs to be set to `true` explicitly and `audio_channel_count` > 1 to get each channel recognized separately. The recognition result will contain a `channel_tag` field to state which channel that result belongs to. If this is not true, we will only recognize the first channel. The request is billed cumulatively for all channels recognized: `audio_channel_count` multiplied by the length of the audio. */
		enableSeparateRecognitionPerChannel: FormControl<boolean | null | undefined>,

		/** The spoken emoji behavior for the call If not set, uses default behavior based on model of choice If 'true', adds spoken emoji formatting for the request. This will replace spoken emojis with the corresponding Unicode symbols in the final transcript. If 'false', spoken emojis are not replaced. */
		enableSpokenEmojis: FormControl<boolean | null | undefined>,

		/** The spoken punctuation behavior for the call If not set, uses default behavior based on model of choice e.g. command_and_search will enable spoken punctuation by default If 'true', replaces spoken punctuation with the corresponding symbols in the request. For example, "how are you question mark" becomes "how are you?". See https://cloud.google.com/speech-to-text/docs/spoken-punctuation for support. If 'false', spoken punctuation is not replaced. */
		enableSpokenPunctuation: FormControl<boolean | null | undefined>,

		/** If `true`, the top result includes a list of words and the confidence for those words. If `false`, no word-level confidence information is returned. The default is `false`. */
		enableWordConfidence: FormControl<boolean | null | undefined>,

		/** If `true`, the top result includes a list of words and the start and end time offsets (timestamps) for those words. If `false`, no word-level time offset information is returned. The default is `false`. */
		enableWordTimeOffsets: FormControl<boolean | null | undefined>,

		/** Encoding of audio data sent in all `RecognitionAudio` messages. This field is optional for `FLAC` and `WAV` audio files and required for all other audio formats. For details, see AudioEncoding. */
		encoding: FormControl<RecognitionConfigEncoding | null | undefined>,

		/** Required. The language of the supplied audio as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US". See [Language Support](https://cloud.google.com/speech-to-text/docs/languages) for a list of the currently supported language codes. */
		languageCode: FormControl<string | null | undefined>,

		/** Maximum number of recognition hypotheses to be returned. Specifically, the maximum number of `SpeechRecognitionAlternative` messages within each `SpeechRecognitionResult`. The server may return fewer than `max_alternatives`. Valid values are `0`-`30`. A value of `0` or `1` will return a maximum of one. If omitted, will return a maximum of one. */
		maxAlternatives: FormControl<number | null | undefined>,

		/** Which model to select for the given request. Select the model best suited to your domain to get best results. If a model is not explicitly specified, then we auto-select a model based on the parameters in the RecognitionConfig. *Model* *Description* latest_long Best for long form content like media or conversation. latest_short Best for short form content like commands or single shot directed speech. command_and_search Best for short queries such as voice commands or voice search. phone_call Best for audio that originated from a phone call (typically recorded at an 8khz sampling rate). video Best for audio that originated from video or includes multiple speakers. Ideally the audio is recorded at a 16khz or greater sampling rate. This is a premium model that costs more than the standard rate. default Best for audio that is not one of the specific audio models. For example, long-form audio. Ideally the audio is high-fidelity, recorded at a 16khz or greater sampling rate. medical_conversation Best for audio that originated from a conversation between a medical provider and patient. medical_dictation Best for audio that originated from dictation notes by a medical provider. */
		model: FormControl<string | null | undefined>,

		/** If set to `true`, the server will attempt to filter out profanities, replacing all but the initial character in each filtered word with asterisks, e.g. "f***". If set to `false` or omitted, profanities won't be filtered out. */
		profanityFilter: FormControl<boolean | null | undefined>,

		/** Sample rate in Hertz of the audio data sent in all `RecognitionAudio` messages. Valid values are: 8000-48000. 16000 is optimal. For best results, set the sampling rate of the audio source to 16000 Hz. If that's not possible, use the native sample rate of the audio source (instead of re-sampling). This field is optional for FLAC and WAV audio files, but is required for all other audio formats. For details, see AudioEncoding. */
		sampleRateHertz: FormControl<number | null | undefined>,

		/** Set to true to use an enhanced model for speech recognition. If `use_enhanced` is set to true and the `model` field is not set, then an appropriate enhanced model is chosen if an enhanced model exists for the audio. If `use_enhanced` is true and an enhanced version of the specified model does not exist, then the speech is recognized using the standard version of the specified model. */
		useEnhanced: FormControl<boolean | null | undefined>,
	}
	export function CreateRecognitionConfigFormGroup() {
		return new FormGroup<RecognitionConfigFormProperties>({
			audioChannelCount: new FormControl<number | null | undefined>(undefined),
			enableAutomaticPunctuation: new FormControl<boolean | null | undefined>(undefined),
			enableSeparateRecognitionPerChannel: new FormControl<boolean | null | undefined>(undefined),
			enableSpokenEmojis: new FormControl<boolean | null | undefined>(undefined),
			enableSpokenPunctuation: new FormControl<boolean | null | undefined>(undefined),
			enableWordConfidence: new FormControl<boolean | null | undefined>(undefined),
			enableWordTimeOffsets: new FormControl<boolean | null | undefined>(undefined),
			encoding: new FormControl<RecognitionConfigEncoding | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			maxAlternatives: new FormControl<number | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			profanityFilter: new FormControl<boolean | null | undefined>(undefined),
			sampleRateHertz: new FormControl<number | null | undefined>(undefined),
			useEnhanced: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Speech adaptation configuration. */
	export interface SpeechAdaptation {
		abnfGrammar?: ABNFGrammar;

		/** A collection of custom classes. To specify the classes inline, leave the class' `name` blank and fill in the rest of its fields, giving it a unique `custom_class_id`. Refer to the inline defined class in phrase hints by its `custom_class_id`. */
		customClasses?: Array<CustomClass>;

		/** A collection of phrase set resource names to use. */
		phraseSetReferences?: Array<string>;

		/** A collection of phrase sets. To specify the hints inline, leave the phrase set's `name` blank and fill in the rest of its fields. Any phrase set can use any custom class. */
		phraseSets?: Array<PhraseSet>;
	}

	/** Speech adaptation configuration. */
	export interface SpeechAdaptationFormProperties {
	}
	export function CreateSpeechAdaptationFormGroup() {
		return new FormGroup<SpeechAdaptationFormProperties>({
		});

	}


	/** Config to enable speaker diarization. */
	export interface SpeakerDiarizationConfig {

		/** If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_label provided in the WordInfo. */
		enableSpeakerDiarization?: boolean | null;

		/** Maximum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 6. */
		maxSpeakerCount?: number | null;

		/** Minimum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 2. */
		minSpeakerCount?: number | null;

		/** Output only. Unused. */
		speakerTag?: number | null;
	}

	/** Config to enable speaker diarization. */
	export interface SpeakerDiarizationConfigFormProperties {

		/** If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_label provided in the WordInfo. */
		enableSpeakerDiarization: FormControl<boolean | null | undefined>,

		/** Maximum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 6. */
		maxSpeakerCount: FormControl<number | null | undefined>,

		/** Minimum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 2. */
		minSpeakerCount: FormControl<number | null | undefined>,

		/** Output only. Unused. */
		speakerTag: FormControl<number | null | undefined>,
	}
	export function CreateSpeakerDiarizationConfigFormGroup() {
		return new FormGroup<SpeakerDiarizationConfigFormProperties>({
			enableSpeakerDiarization: new FormControl<boolean | null | undefined>(undefined),
			maxSpeakerCount: new FormControl<number | null | undefined>(undefined),
			minSpeakerCount: new FormControl<number | null | undefined>(undefined),
			speakerTag: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum RecognitionConfigEncoding { ENCODING_UNSPECIFIED = 'ENCODING_UNSPECIFIED', LINEAR16 = 'LINEAR16', FLAC = 'FLAC', MULAW = 'MULAW', AMR = 'AMR', AMR_WB = 'AMR_WB', OGG_OPUS = 'OGG_OPUS', SPEEX_WITH_HEADER_BYTE = 'SPEEX_WITH_HEADER_BYTE', MP3 = 'MP3', WEBM_OPUS = 'WEBM_OPUS' }


	/** Description of audio data to be recognized. */
	export interface RecognitionMetadata {

		/** Description of the content. Eg. "Recordings of federal supreme court hearings from 2012". */
		audioTopic?: string | null;

		/** The industry vertical to which this speech recognition request most closely applies. This is most indicative of the topics contained in the audio. Use the 6-digit NAICS code to identify the industry vertical - see https://www.naics.com/search/. */
		industryNaicsCodeOfAudio?: number | null;

		/** The use case most closely describing the audio content to be recognized. */
		interactionType?: RecognitionMetadataInteractionType | null;

		/** The audio type that most closely describes the audio being recognized. */
		microphoneDistance?: RecognitionMetadataMicrophoneDistance | null;

		/** The original media the speech was recorded on. */
		originalMediaType?: RecognitionMetadataOriginalMediaType | null;

		/** Mime type of the original audio file. For example `audio/m4a`, `audio/x-alaw-basic`, `audio/mp3`, `audio/3gpp`. A list of possible audio mime types is maintained at http://www.iana.org/assignments/media-types/media-types.xhtml#audio */
		originalMimeType?: string | null;

		/** The device used to make the recording. Examples 'Nexus 5X' or 'Polycom SoundStation IP 6000' or 'POTS' or 'VoIP' or 'Cardioid Microphone'. */
		recordingDeviceName?: string | null;

		/** The type of device the speech was recorded with. */
		recordingDeviceType?: RecognitionMetadataRecordingDeviceType | null;
	}

	/** Description of audio data to be recognized. */
	export interface RecognitionMetadataFormProperties {

		/** Description of the content. Eg. "Recordings of federal supreme court hearings from 2012". */
		audioTopic: FormControl<string | null | undefined>,

		/** The industry vertical to which this speech recognition request most closely applies. This is most indicative of the topics contained in the audio. Use the 6-digit NAICS code to identify the industry vertical - see https://www.naics.com/search/. */
		industryNaicsCodeOfAudio: FormControl<number | null | undefined>,

		/** The use case most closely describing the audio content to be recognized. */
		interactionType: FormControl<RecognitionMetadataInteractionType | null | undefined>,

		/** The audio type that most closely describes the audio being recognized. */
		microphoneDistance: FormControl<RecognitionMetadataMicrophoneDistance | null | undefined>,

		/** The original media the speech was recorded on. */
		originalMediaType: FormControl<RecognitionMetadataOriginalMediaType | null | undefined>,

		/** Mime type of the original audio file. For example `audio/m4a`, `audio/x-alaw-basic`, `audio/mp3`, `audio/3gpp`. A list of possible audio mime types is maintained at http://www.iana.org/assignments/media-types/media-types.xhtml#audio */
		originalMimeType: FormControl<string | null | undefined>,

		/** The device used to make the recording. Examples 'Nexus 5X' or 'Polycom SoundStation IP 6000' or 'POTS' or 'VoIP' or 'Cardioid Microphone'. */
		recordingDeviceName: FormControl<string | null | undefined>,

		/** The type of device the speech was recorded with. */
		recordingDeviceType: FormControl<RecognitionMetadataRecordingDeviceType | null | undefined>,
	}
	export function CreateRecognitionMetadataFormGroup() {
		return new FormGroup<RecognitionMetadataFormProperties>({
			audioTopic: new FormControl<string | null | undefined>(undefined),
			industryNaicsCodeOfAudio: new FormControl<number | null | undefined>(undefined),
			interactionType: new FormControl<RecognitionMetadataInteractionType | null | undefined>(undefined),
			microphoneDistance: new FormControl<RecognitionMetadataMicrophoneDistance | null | undefined>(undefined),
			originalMediaType: new FormControl<RecognitionMetadataOriginalMediaType | null | undefined>(undefined),
			originalMimeType: new FormControl<string | null | undefined>(undefined),
			recordingDeviceName: new FormControl<string | null | undefined>(undefined),
			recordingDeviceType: new FormControl<RecognitionMetadataRecordingDeviceType | null | undefined>(undefined),
		});

	}

	export enum RecognitionMetadataInteractionType { INTERACTION_TYPE_UNSPECIFIED = 'INTERACTION_TYPE_UNSPECIFIED', DISCUSSION = 'DISCUSSION', PRESENTATION = 'PRESENTATION', PHONE_CALL = 'PHONE_CALL', VOICEMAIL = 'VOICEMAIL', PROFESSIONALLY_PRODUCED = 'PROFESSIONALLY_PRODUCED', VOICE_SEARCH = 'VOICE_SEARCH', VOICE_COMMAND = 'VOICE_COMMAND', DICTATION = 'DICTATION' }

	export enum RecognitionMetadataMicrophoneDistance { MICROPHONE_DISTANCE_UNSPECIFIED = 'MICROPHONE_DISTANCE_UNSPECIFIED', NEARFIELD = 'NEARFIELD', MIDFIELD = 'MIDFIELD', FARFIELD = 'FARFIELD' }

	export enum RecognitionMetadataOriginalMediaType { ORIGINAL_MEDIA_TYPE_UNSPECIFIED = 'ORIGINAL_MEDIA_TYPE_UNSPECIFIED', AUDIO = 'AUDIO', VIDEO = 'VIDEO' }

	export enum RecognitionMetadataRecordingDeviceType { RECORDING_DEVICE_TYPE_UNSPECIFIED = 'RECORDING_DEVICE_TYPE_UNSPECIFIED', SMARTPHONE = 'SMARTPHONE', PC = 'PC', PHONE_LINE = 'PHONE_LINE', VEHICLE = 'VEHICLE', OTHER_OUTDOOR_DEVICE = 'OTHER_OUTDOOR_DEVICE', OTHER_INDOOR_DEVICE = 'OTHER_INDOOR_DEVICE' }


	/** Provides "hints" to the speech recognizer to favor specific words and phrases in the results. */
	export interface SpeechContext {

		/** Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case. */
		boost?: number | null;

		/** A list of strings containing words and phrases "hints" so that the speech recognition is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, for example, if specific commands are typically spoken by the user. This can also be used to add additional words to the vocabulary of the recognizer. See [usage limits](https://cloud.google.com/speech-to-text/quotas#content). List items can also be set to classes for groups of words that represent common concepts that occur in natural language. For example, rather than providing phrase hints for every month of the year, using the $MONTH class improves the likelihood of correctly transcribing audio that includes months. */
		phrases?: Array<string>;
	}

	/** Provides "hints" to the speech recognizer to favor specific words and phrases in the results. */
	export interface SpeechContextFormProperties {

		/** Hint Boost. Positive value will increase the probability that a specific phrase will be recognized over other similar sounding phrases. The higher the boost, the higher the chance of false positive recognition as well. Negative boost values would correspond to anti-biasing. Anti-biasing is not enabled, so negative boost will simply be ignored. Though `boost` can accept a wide range of positive values, most use cases are best served with values between 0 and 20. We recommend using a binary search approach to finding the optimal value for your use case. */
		boost: FormControl<number | null | undefined>,
	}
	export function CreateSpeechContextFormGroup() {
		return new FormGroup<SpeechContextFormProperties>({
			boost: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts. */
	export interface TranscriptNormalization {

		/** A list of replacement entries. We will perform replacement with one entry at a time. For example, the second entry in ["cat" => "dog", "mountain cat" => "mountain dog"] will never be applied because we will always process the first entry before it. At most 100 entries. */
		entries?: Array<Entry>;
	}

	/** Transcription normalization configuration. Use transcription normalization to automatically replace parts of the transcript with phrases of your choosing. For StreamingRecognize, this normalization only applies to stable partial transcripts (stability > 0.8) and final transcripts. */
	export interface TranscriptNormalizationFormProperties {
	}
	export function CreateTranscriptNormalizationFormGroup() {
		return new FormGroup<TranscriptNormalizationFormProperties>({
		});

	}


	/** Specifies an optional destination for the recognition results. */
	export interface TranscriptOutputConfig {

		/** Specifies a Cloud Storage URI for the recognition results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist. */
		gcsUri?: string | null;
	}

	/** Specifies an optional destination for the recognition results. */
	export interface TranscriptOutputConfigFormProperties {

		/** Specifies a Cloud Storage URI for the recognition results. Must be specified in the format: `gs://bucket_name/object_name`, and the bucket must already exist. */
		gcsUri: FormControl<string | null | undefined>,
	}
	export function CreateTranscriptOutputConfigFormGroup() {
		return new FormGroup<TranscriptOutputConfigFormProperties>({
			gcsUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The only message returned to the client by the `LongRunningRecognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages. It is included in the `result.response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface LongRunningRecognizeResponse {

		/** Specifies an optional destination for the recognition results. */
		outputConfig?: TranscriptOutputConfig;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		outputError?: Status;

		/** The ID associated with the request. This is a unique ID specific only to the given request. */
		requestId?: string | null;

		/** Sequential list of transcription results corresponding to sequential portions of audio. */
		results?: Array<SpeechRecognitionResult>;

		/** Information on speech adaptation use in results */
		speechAdaptationInfo?: SpeechAdaptationInfo;

		/** When available, billed audio seconds for the corresponding request. */
		totalBilledTime?: string | null;
	}

	/** The only message returned to the client by the `LongRunningRecognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages. It is included in the `result.response` field of the `Operation` returned by the `GetOperation` call of the `google::longrunning::Operations` service. */
	export interface LongRunningRecognizeResponseFormProperties {

		/** The ID associated with the request. This is a unique ID specific only to the given request. */
		requestId: FormControl<string | null | undefined>,

		/** When available, billed audio seconds for the corresponding request. */
		totalBilledTime: FormControl<string | null | undefined>,
	}
	export function CreateLongRunningRecognizeResponseFormGroup() {
		return new FormGroup<LongRunningRecognizeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			totalBilledTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A speech recognition result corresponding to a portion of the audio. */
	export interface SpeechRecognitionResult {

		/** May contain one or more recognition hypotheses (up to the maximum specified in `max_alternatives`). These alternatives are ordered in terms of accuracy, with the top (first) alternative being the most probable, as ranked by the recognizer. */
		alternatives?: Array<SpeechRecognitionAlternative>;

		/** For multi-channel audio, this is the channel number corresponding to the recognized result for the audio from that channel. For audio_channel_count = N, its output values can range from '1' to 'N'. */
		channelTag?: number | null;

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode?: string | null;

		/** Time offset of the end of this result relative to the beginning of the audio. */
		resultEndTime?: string | null;
	}

	/** A speech recognition result corresponding to a portion of the audio. */
	export interface SpeechRecognitionResultFormProperties {

		/** For multi-channel audio, this is the channel number corresponding to the recognized result for the audio from that channel. For audio_channel_count = N, its output values can range from '1' to 'N'. */
		channelTag: FormControl<number | null | undefined>,

		/** Output only. The [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag of the language in this result. This language code was detected to have the most likelihood of being spoken in the audio. */
		languageCode: FormControl<string | null | undefined>,

		/** Time offset of the end of this result relative to the beginning of the audio. */
		resultEndTime: FormControl<string | null | undefined>,
	}
	export function CreateSpeechRecognitionResultFormGroup() {
		return new FormGroup<SpeechRecognitionResultFormProperties>({
			channelTag: new FormControl<number | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			resultEndTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface SpeechRecognitionAlternative {

		/** The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Transcript text representing the words that the user spoke. In languages that use spaces to separate words, the transcript might have a leading space if it isn't the first result. You can concatenate each result to obtain the full transcript without using a separator. */
		transcript?: string | null;

		/** A list of word-specific information for each recognized word. Note: When `enable_speaker_diarization` is true, you will see all the words from the beginning of the audio. */
		words?: Array<WordInfo>;
	}

	/** Alternative hypotheses (a.k.a. n-best list). */
	export interface SpeechRecognitionAlternativeFormProperties {

		/** The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Transcript text representing the words that the user spoke. In languages that use spaces to separate words, the transcript might have a leading space if it isn't the first result. You can concatenate each result to obtain the full transcript without using a separator. */
		transcript: FormControl<string | null | undefined>,
	}
	export function CreateSpeechRecognitionAlternativeFormGroup() {
		return new FormGroup<SpeechRecognitionAlternativeFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			transcript: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Word-specific information for recognized words. */
	export interface WordInfo {

		/** The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime?: string | null;

		/** Output only. A label value assigned for every unique speaker within the audio. This field specifies which speaker was detected to have spoken this word. For some models, like medical_conversation this can be actual speaker role, for example "patient" or "provider", but generally this would be a number identifying a speaker. This field is only set if enable_speaker_diarization = 'true' and only for the top alternative. */
		speakerLabel?: string | null;

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from '1' to diarization_speaker_count. speaker_tag is set if enable_speaker_diarization = 'true' and only for the top alternative. Note: Use speaker_label instead. */
		speakerTag?: number | null;

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime?: string | null;

		/** The word corresponding to this set of information. */
		word?: string | null;
	}

	/** Word-specific information for recognized words. */
	export interface WordInfoFormProperties {

		/** The confidence estimate between 0.0 and 1.0. A higher number indicates an estimated greater likelihood that the recognized words are correct. This field is set only for the top alternative of a non-streaming result or, of a streaming result where `is_final=true`. This field is not guaranteed to be accurate and users should not rely on it to be always provided. The default of 0.0 is a sentinel value indicating `confidence` was not set. */
		confidence: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the end of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		endTime: FormControl<string | null | undefined>,

		/** Output only. A label value assigned for every unique speaker within the audio. This field specifies which speaker was detected to have spoken this word. For some models, like medical_conversation this can be actual speaker role, for example "patient" or "provider", but generally this would be a number identifying a speaker. This field is only set if enable_speaker_diarization = 'true' and only for the top alternative. */
		speakerLabel: FormControl<string | null | undefined>,

		/** Output only. A distinct integer value is assigned for every speaker within the audio. This field specifies which one of those speakers was detected to have spoken this word. Value ranges from '1' to diarization_speaker_count. speaker_tag is set if enable_speaker_diarization = 'true' and only for the top alternative. Note: Use speaker_label instead. */
		speakerTag: FormControl<number | null | undefined>,

		/** Time offset relative to the beginning of the audio, and corresponding to the start of the spoken word. This field is only set if `enable_word_time_offsets=true` and only in the top hypothesis. This is an experimental feature and the accuracy of the time offset can vary. */
		startTime: FormControl<string | null | undefined>,

		/** The word corresponding to this set of information. */
		word: FormControl<string | null | undefined>,
	}
	export function CreateWordInfoFormGroup() {
		return new FormGroup<WordInfoFormProperties>({
			confidence: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			speakerLabel: new FormControl<string | null | undefined>(undefined),
			speakerTag: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			word: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information on speech adaptation use in results */
	export interface SpeechAdaptationInfo {

		/** Whether there was a timeout when applying speech adaptation. If true, adaptation had no effect in the response transcript. */
		adaptationTimeout?: boolean | null;

		/** If set, returns a message specifying which part of the speech adaptation request timed out. */
		timeoutMessage?: string | null;
	}

	/** Information on speech adaptation use in results */
	export interface SpeechAdaptationInfoFormProperties {

		/** Whether there was a timeout when applying speech adaptation. If true, adaptation had no effect in the response transcript. */
		adaptationTimeout: FormControl<boolean | null | undefined>,

		/** If set, returns a message specifying which part of the speech adaptation request timed out. */
		timeoutMessage: FormControl<string | null | undefined>,
	}
	export function CreateSpeechAdaptationInfoFormGroup() {
		return new FormGroup<SpeechAdaptationInfoFormProperties>({
			adaptationTimeout: new FormControl<boolean | null | undefined>(undefined),
			timeoutMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The top-level message sent by the client for the `Recognize` method. */
	export interface RecognizeRequest {

		/** Contains audio data in the encoding specified in the `RecognitionConfig`. Either `content` or `uri` must be supplied. Supplying both or neither returns google.rpc.Code.INVALID_ARGUMENT. See [content limits](https://cloud.google.com/speech-to-text/quotas#content). */
		audio?: RecognitionAudio;

		/** Provides information to the recognizer that specifies how to process the request. */
		config?: RecognitionConfig;
	}

	/** The top-level message sent by the client for the `Recognize` method. */
	export interface RecognizeRequestFormProperties {
	}
	export function CreateRecognizeRequestFormGroup() {
		return new FormGroup<RecognizeRequestFormProperties>({
		});

	}


	/** The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages. */
	export interface RecognizeResponse {

		/** The ID associated with the request. This is a unique ID specific only to the given request. */
		requestId?: string | null;

		/** Sequential list of transcription results corresponding to sequential portions of audio. */
		results?: Array<SpeechRecognitionResult>;

		/** Information on speech adaptation use in results */
		speechAdaptationInfo?: SpeechAdaptationInfo;

		/** When available, billed audio seconds for the corresponding request. */
		totalBilledTime?: string | null;

		/** Whether request used legacy asr models (was not automatically migrated to use conformer models). */
		usingLegacyModels?: boolean | null;
	}

	/** The only message returned to the client by the `Recognize` method. It contains the result as zero or more sequential `SpeechRecognitionResult` messages. */
	export interface RecognizeResponseFormProperties {

		/** The ID associated with the request. This is a unique ID specific only to the given request. */
		requestId: FormControl<string | null | undefined>,

		/** When available, billed audio seconds for the corresponding request. */
		totalBilledTime: FormControl<string | null | undefined>,

		/** Whether request used legacy asr models (was not automatically migrated to use conformer models). */
		usingLegacyModels: FormControl<boolean | null | undefined>,
	}
	export function CreateRecognizeResponseFormGroup() {
		return new FormGroup<RecognizeResponseFormProperties>({
			requestId: new FormControl<string | null | undefined>(undefined),
			totalBilledTime: new FormControl<string | null | undefined>(undefined),
			usingLegacyModels: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
		 * Get v1/operations
		 * @param {string} filter The standard list filter.
		 * @param {string} name The name of the operation's parent resource.
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @return {ListOperationsResponse} Successful response
		 */
		Speech_operations_list(filter: string | null | undefined, name: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOperationsResponse> {
			return this.http.get<ListOperationsResponse>(this.baseUri + 'v1/operations?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
		 * Get v1/operations/{name}
		 * @param {string} name The name of the operation resource.
		 * @return {Operation} Successful response
		 */
		Speech_operations_get(name: string): Observable<Operation> {
			return this.http.get<Operation>(this.baseUri + 'v1/operations/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).
		 * Post v1/speech:longrunningrecognize
		 * @return {Operation} Successful response
		 */
		Speech_speech_longrunningrecognize(requestBody: LongRunningRecognizeRequest): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/speech:longrunningrecognize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs synchronous speech recognition: receive results after all audio has been sent and processed.
		 * Post v1/speech:recognize
		 * @return {RecognizeResponse} Successful response
		 */
		Speech_speech_recognize(requestBody: RecognizeRequest): Observable<RecognizeResponse> {
			return this.http.post<RecognizeResponse>(this.baseUri + 'v1/speech:recognize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a phrase set.
		 * Delete v1/{name}
		 * @param {string} name Required. The name of the phrase set to delete. Format: `projects/{project}/locations/{location}/phraseSets/{phrase_set}`
		 * @return {Empty} Successful response
		 */
		Speech_projects_locations_phraseSets_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get a phrase set.
		 * Get v1/{name}
		 * @param {string} name Required. The name of the phrase set to retrieve. Format: `projects/{project}/locations/{location}/phraseSets/{phrase_set}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
		 * @return {PhraseSet} Successful response
		 */
		Speech_projects_locations_phraseSets_get(name: string): Observable<PhraseSet> {
			return this.http.get<PhraseSet>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update a phrase set.
		 * Patch v1/{name}
		 * @param {string} name The resource name of the phrase set.
		 * @param {string} updateMask The list of fields to be updated.
		 * @return {PhraseSet} Successful response
		 */
		Speech_projects_locations_phraseSets_patch(name: string, updateMask: string | null | undefined, requestBody: PhraseSet): Observable<PhraseSet> {
			return this.http.patch<PhraseSet>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List custom classes.
		 * Get v1/{parent}/customClasses
		 * @param {string} parent Required. The parent, which owns this collection of custom classes. Format: `projects/{project}/locations/{location}/customClasses` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
		 * @param {number} pageSize The maximum number of custom classes to return. The service may return fewer than this value. If unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListCustomClass` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomClass` must match the call that provided the page token.
		 * @return {ListCustomClassesResponse} Successful response
		 */
		Speech_projects_locations_customClasses_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCustomClassesResponse> {
			return this.http.get<ListCustomClassesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customClasses&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a custom class.
		 * Post v1/{parent}/customClasses
		 * @param {string} parent Required. The parent resource where this custom class will be created. Format: `projects/{project}/locations/{location}/customClasses` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
		 * @return {CustomClass} Successful response
		 */
		Speech_projects_locations_customClasses_create(parent: string, requestBody: CreateCustomClassRequest): Observable<CustomClass> {
			return this.http.post<CustomClass>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/customClasses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List phrase sets.
		 * Get v1/{parent}/phraseSets
		 * @param {string} parent Required. The parent, which owns this collection of phrase set. Format: `projects/{project}/locations/{location}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
		 * @param {number} pageSize The maximum number of phrase sets to return. The service may return fewer than this value. If unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
		 * @param {string} pageToken A page token, received from a previous `ListPhraseSet` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPhraseSet` must match the call that provided the page token.
		 * @return {ListPhraseSetResponse} Successful response
		 */
		Speech_projects_locations_phraseSets_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPhraseSetResponse> {
			return this.http.get<ListPhraseSetResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/phraseSets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
		 * Post v1/{parent}/phraseSets
		 * @param {string} parent Required. The parent resource where this phrase set will be created. Format: `projects/{project}/locations/{location}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value.
		 * @return {PhraseSet} Successful response
		 */
		Speech_projects_locations_phraseSets_create(parent: string, requestBody: CreatePhraseSetRequest): Observable<PhraseSet> {
			return this.http.post<PhraseSet>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/phraseSets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

