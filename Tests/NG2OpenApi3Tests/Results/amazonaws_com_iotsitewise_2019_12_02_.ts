import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface ResourceAlreadyExistsException {
	}
	export interface ResourceAlreadyExistsExceptionFormProperties {
	}
	export function CreateResourceAlreadyExistsExceptionFormGroup() {
		return new FormGroup<ResourceAlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface ConflictingOperationException {
	}
	export interface ConflictingOperationExceptionFormProperties {
	}
	export function CreateConflictingOperationExceptionFormGroup() {
		return new FormGroup<ConflictingOperationExceptionFormProperties>({
		});

	}

	export interface BatchAssociateProjectAssetsResponse {
		errors?: Array<AssetErrorDetails>;
	}
	export interface BatchAssociateProjectAssetsResponseFormProperties {
	}
	export function CreateBatchAssociateProjectAssetsResponseFormGroup() {
		return new FormGroup<BatchAssociateProjectAssetsResponseFormProperties>({
		});

	}


	/** Contains error details for the requested associate project asset action. */
	export interface AssetErrorDetails {

		/** Required */
		assetId: string;

		/** Required */
		code: AssetErrorCode;

		/** Required */
		message: string;
	}

	/** Contains error details for the requested associate project asset action. */
	export interface AssetErrorDetailsFormProperties {

		/** Required */
		assetId: FormControl<string | null | undefined>,

		/** Required */
		code: FormControl<AssetErrorCode | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateAssetErrorDetailsFormGroup() {
		return new FormGroup<AssetErrorDetailsFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			code: new FormControl<AssetErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssetErrorCode { INTERNAL_FAILURE = 0 }

	export interface BatchDisassociateProjectAssetsResponse {
		errors?: Array<AssetErrorDetails>;
	}
	export interface BatchDisassociateProjectAssetsResponseFormProperties {
	}
	export function CreateBatchDisassociateProjectAssetsResponseFormGroup() {
		return new FormGroup<BatchDisassociateProjectAssetsResponseFormProperties>({
		});

	}

	export interface BatchGetAssetPropertyAggregatesResponse {

		/** Required */
		errorEntries: Array<BatchGetAssetPropertyAggregatesErrorEntry>;

		/** Required */
		successEntries: Array<BatchGetAssetPropertyAggregatesSuccessEntry>;

		/** Required */
		skippedEntries: Array<BatchGetAssetPropertyAggregatesSkippedEntry>;
		nextToken?: string;
	}
	export interface BatchGetAssetPropertyAggregatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyAggregatesResponseFormGroup() {
		return new FormGroup<BatchGetAssetPropertyAggregatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains error information for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API. */
	export interface BatchGetAssetPropertyAggregatesErrorEntry {

		/** Required */
		errorCode: BatchGetAssetPropertyAggregatesErrorCode;

		/** Required */
		errorMessage: string;

		/** Required */
		entryId: string;
	}

	/** Contains error information for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API. */
	export interface BatchGetAssetPropertyAggregatesErrorEntryFormProperties {

		/** Required */
		errorCode: FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,

		/** Required */
		entryId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyAggregatesErrorEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyAggregatesErrorEntryFormProperties>({
			errorCode: new FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BatchGetAssetPropertyAggregatesErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, AccessDeniedException = 2 }


	/** Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API. */
	export interface BatchGetAssetPropertyAggregatesSuccessEntry {

		/** Required */
		entryId: string;

		/** Required */
		aggregatedValues: Array<AggregatedValue>;
	}

	/** Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API. */
	export interface BatchGetAssetPropertyAggregatesSuccessEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyAggregatesSuccessEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyAggregatesSuccessEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains aggregated asset property values (for example, average, minimum, and maximum). */
	export interface AggregatedValue {

		/** Required */
		timestamp: Date;
		quality?: Quality;

		/** Required */
		value: Aggregates;
	}

	/** Contains aggregated asset property values (for example, average, minimum, and maximum). */
	export interface AggregatedValueFormProperties {

		/** Required */
		timestamp: FormControl<Date | null | undefined>,
		quality: FormControl<Quality | null | undefined>,
	}
	export function CreateAggregatedValueFormGroup() {
		return new FormGroup<AggregatedValueFormProperties>({
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			quality: new FormControl<Quality | null | undefined>(undefined),
		});

	}

	export enum Quality { GOOD = 0, BAD = 1, UNCERTAIN = 2 }


	/** Contains the (pre-calculated) aggregate values for an asset property. */
	export interface Aggregates {
		average?: number | null;
		count?: number | null;
		maximum?: number | null;
		minimum?: number | null;
		sum?: number | null;
		standardDeviation?: number | null;
	}

	/** Contains the (pre-calculated) aggregate values for an asset property. */
	export interface AggregatesFormProperties {
		average: FormControl<number | null | undefined>,
		count: FormControl<number | null | undefined>,
		maximum: FormControl<number | null | undefined>,
		minimum: FormControl<number | null | undefined>,
		sum: FormControl<number | null | undefined>,
		standardDeviation: FormControl<number | null | undefined>,
	}
	export function CreateAggregatesFormGroup() {
		return new FormGroup<AggregatesFormProperties>({
			average: new FormControl<number | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			sum: new FormControl<number | null | undefined>(undefined),
			standardDeviation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> request. */
	export interface BatchGetAssetPropertyAggregatesSkippedEntry {

		/** Required */
		entryId: string;

		/** Required */
		completionStatus: BatchEntryCompletionStatus;
		errorInfo?: BatchGetAssetPropertyAggregatesErrorInfo;
	}

	/** Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> request. */
	export interface BatchGetAssetPropertyAggregatesSkippedEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,

		/** Required */
		completionStatus: FormControl<BatchEntryCompletionStatus | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyAggregatesSkippedEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyAggregatesSkippedEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			completionStatus: new FormControl<BatchEntryCompletionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BatchEntryCompletionStatus { SUCCESS = 0, ERROR = 1 }


	/** Contains the error code and the timestamp for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API. */
	export interface BatchGetAssetPropertyAggregatesErrorInfo {

		/** Required */
		errorCode: BatchGetAssetPropertyAggregatesErrorCode;

		/** Required */
		errorTimestamp: Date;
	}

	/** Contains the error code and the timestamp for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API. */
	export interface BatchGetAssetPropertyAggregatesErrorInfoFormProperties {

		/** Required */
		errorCode: FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>,

		/** Required */
		errorTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyAggregatesErrorInfoFormGroup() {
		return new FormGroup<BatchGetAssetPropertyAggregatesErrorInfoFormProperties>({
			errorCode: new FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>(undefined, [Validators.required]),
			errorTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains information for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> */
	export interface BatchGetAssetPropertyAggregatesEntry {

		/** Required */
		entryId: string;
		assetId?: string;
		propertyId?: string;
		propertyAlias?: string;

		/** Required */
		aggregateTypes: Array<AggregateType>;

		/** Required */
		resolution: string;

		/** Required */
		startDate: Date;

		/** Required */
		endDate: Date;
		qualities?: Array<Quality>;
		timeOrdering?: TimeOrdering;
	}

	/** <p>Contains information for an asset property aggregate entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> */
	export interface BatchGetAssetPropertyAggregatesEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,
		assetId: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,
		propertyAlias: FormControl<string | null | undefined>,

		/** Required */
		resolution: FormControl<string | null | undefined>,

		/** Required */
		startDate: FormControl<Date | null | undefined>,

		/** Required */
		endDate: FormControl<Date | null | undefined>,
		timeOrdering: FormControl<TimeOrdering | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyAggregatesEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyAggregatesEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetId: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			propertyAlias: new FormControl<string | null | undefined>(undefined),
			resolution: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			endDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			timeOrdering: new FormControl<TimeOrdering | null | undefined>(undefined),
		});

	}

	export enum AggregateType { AVERAGE = 0, COUNT = 1, MAXIMUM = 2, MINIMUM = 3, SUM = 4, STANDARD_DEVIATION = 5 }

	export enum TimeOrdering { ASCENDING = 0, DESCENDING = 1 }

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface BatchGetAssetPropertyValueResponse {

		/** Required */
		errorEntries: Array<BatchGetAssetPropertyValueErrorEntry>;

		/** Required */
		successEntries: Array<BatchGetAssetPropertyValueSuccessEntry>;

		/** Required */
		skippedEntries: Array<BatchGetAssetPropertyValueSkippedEntry>;
		nextToken?: string;
	}
	export interface BatchGetAssetPropertyValueResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueResponseFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains error information for an asset property value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API. */
	export interface BatchGetAssetPropertyValueErrorEntry {

		/** Required */
		errorCode: BatchGetAssetPropertyAggregatesErrorCode;

		/** Required */
		errorMessage: string;

		/** Required */
		entryId: string;
	}

	/** Contains error information for an asset property value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API. */
	export interface BatchGetAssetPropertyValueErrorEntryFormProperties {

		/** Required */
		errorCode: FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,

		/** Required */
		entryId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueErrorEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueErrorEntryFormProperties>({
			errorCode: new FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API. */
	export interface BatchGetAssetPropertyValueSuccessEntry {

		/** Required */
		entryId: string;

		/** Contains asset property value information. */
		assetPropertyValue?: AssetPropertyValue;
	}

	/** Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API. */
	export interface BatchGetAssetPropertyValueSuccessEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueSuccessEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueSuccessEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains asset property value information. */
	export interface AssetPropertyValue {

		/** Required */
		value: Variant;

		/** Required */
		timestamp: TimeInNanos;
		quality?: Quality;
	}

	/** Contains asset property value information. */
	export interface AssetPropertyValueFormProperties {
		quality: FormControl<Quality | null | undefined>,
	}
	export function CreateAssetPropertyValueFormGroup() {
		return new FormGroup<AssetPropertyValueFormProperties>({
			quality: new FormControl<Quality | null | undefined>(undefined),
		});

	}


	/** Contains an asset property value (of a single type only). */
	export interface Variant {
		stringValue?: string;
		integerValue?: number | null;
		doubleValue?: number | null;
		booleanValue?: boolean | null;
	}

	/** Contains an asset property value (of a single type only). */
	export interface VariantFormProperties {
		stringValue: FormControl<string | null | undefined>,
		integerValue: FormControl<number | null | undefined>,
		doubleValue: FormControl<number | null | undefined>,
		booleanValue: FormControl<boolean | null | undefined>,
	}
	export function CreateVariantFormGroup() {
		return new FormGroup<VariantFormProperties>({
			stringValue: new FormControl<string | null | undefined>(undefined),
			integerValue: new FormControl<number | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains a timestamp with optional nanosecond granularity. */
	export interface TimeInNanos {

		/** Required */
		timeInSeconds: number;
		offsetInNanos?: number | null;
	}

	/** Contains a timestamp with optional nanosecond granularity. */
	export interface TimeInNanosFormProperties {

		/** Required */
		timeInSeconds: FormControl<number | null | undefined>,
		offsetInNanos: FormControl<number | null | undefined>,
	}
	export function CreateTimeInNanosFormGroup() {
		return new FormGroup<TimeInNanosFormProperties>({
			timeInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			offsetInNanos: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request. */
	export interface BatchGetAssetPropertyValueSkippedEntry {

		/** Required */
		entryId: string;

		/** Required */
		completionStatus: BatchEntryCompletionStatus;
		errorInfo?: BatchGetAssetPropertyValueErrorInfo;
	}

	/** Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request. */
	export interface BatchGetAssetPropertyValueSkippedEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,

		/** Required */
		completionStatus: FormControl<BatchEntryCompletionStatus | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueSkippedEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueSkippedEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			completionStatus: new FormControl<BatchEntryCompletionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The error information, such as the error code and the timestamp. */
	export interface BatchGetAssetPropertyValueErrorInfo {

		/** Required */
		errorCode: BatchGetAssetPropertyAggregatesErrorCode;

		/** Required */
		errorTimestamp: Date;
	}

	/** The error information, such as the error code and the timestamp. */
	export interface BatchGetAssetPropertyValueErrorInfoFormProperties {

		/** Required */
		errorCode: FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>,

		/** Required */
		errorTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueErrorInfoFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueErrorInfoFormProperties>({
			errorCode: new FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>(undefined, [Validators.required]),
			errorTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains information for an asset property value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> */
	export interface BatchGetAssetPropertyValueEntry {

		/** Required */
		entryId: string;
		assetId?: string;
		propertyId?: string;
		propertyAlias?: string;
	}

	/** <p>Contains information for an asset property value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> */
	export interface BatchGetAssetPropertyValueEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,
		assetId: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,
		propertyAlias: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetId: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			propertyAlias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetAssetPropertyValueHistoryResponse {

		/** Required */
		errorEntries: Array<BatchGetAssetPropertyValueHistoryErrorEntry>;

		/** Required */
		successEntries: Array<BatchGetAssetPropertyValueHistorySuccessEntry>;

		/** Required */
		skippedEntries: Array<BatchGetAssetPropertyValueHistorySkippedEntry>;
		nextToken?: string;
	}
	export interface BatchGetAssetPropertyValueHistoryResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueHistoryResponseFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueHistoryResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of the errors (if any) associated with the batch request. Each error entry contains the <code>entryId</code> of the entry that failed. */
	export interface BatchGetAssetPropertyValueHistoryErrorEntry {

		/** Required */
		errorCode: BatchGetAssetPropertyAggregatesErrorCode;

		/** Required */
		errorMessage: string;

		/** Required */
		entryId: string;
	}

	/** A list of the errors (if any) associated with the batch request. Each error entry contains the <code>entryId</code> of the entry that failed. */
	export interface BatchGetAssetPropertyValueHistoryErrorEntryFormProperties {

		/** Required */
		errorCode: FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,

		/** Required */
		entryId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueHistoryErrorEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueHistoryErrorEntryFormProperties>({
			errorCode: new FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API. */
	export interface BatchGetAssetPropertyValueHistorySuccessEntry {

		/** Required */
		entryId: string;

		/** Required */
		assetPropertyValueHistory: Array<AssetPropertyValue>;
	}

	/** Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API. */
	export interface BatchGetAssetPropertyValueHistorySuccessEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueHistorySuccessEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueHistorySuccessEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> request. */
	export interface BatchGetAssetPropertyValueHistorySkippedEntry {

		/** Required */
		entryId: string;

		/** Required */
		completionStatus: BatchEntryCompletionStatus;
		errorInfo?: BatchGetAssetPropertyValueHistoryErrorInfo;
	}

	/** Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> request. */
	export interface BatchGetAssetPropertyValueHistorySkippedEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,

		/** Required */
		completionStatus: FormControl<BatchEntryCompletionStatus | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueHistorySkippedEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueHistorySkippedEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			completionStatus: new FormControl<BatchEntryCompletionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The error information, such as the error code and the timestamp. */
	export interface BatchGetAssetPropertyValueHistoryErrorInfo {

		/** Required */
		errorCode: BatchGetAssetPropertyAggregatesErrorCode;

		/** Required */
		errorTimestamp: Date;
	}

	/** The error information, such as the error code and the timestamp. */
	export interface BatchGetAssetPropertyValueHistoryErrorInfoFormProperties {

		/** Required */
		errorCode: FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>,

		/** Required */
		errorTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueHistoryErrorInfoFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueHistoryErrorInfoFormProperties>({
			errorCode: new FormControl<BatchGetAssetPropertyAggregatesErrorCode | null | undefined>(undefined, [Validators.required]),
			errorTimestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains information for an asset property historical value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> */
	export interface BatchGetAssetPropertyValueHistoryEntry {

		/** Required */
		entryId: string;
		assetId?: string;
		propertyId?: string;
		propertyAlias?: string;
		startDate?: Date;
		endDate?: Date;
		qualities?: Array<Quality>;
		timeOrdering?: TimeOrdering;
	}

	/** <p>Contains information for an asset property historical value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> */
	export interface BatchGetAssetPropertyValueHistoryEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,
		assetId: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,
		propertyAlias: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		timeOrdering: FormControl<TimeOrdering | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueHistoryEntryFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueHistoryEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetId: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			propertyAlias: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			timeOrdering: new FormControl<TimeOrdering | null | undefined>(undefined),
		});

	}

	export interface BatchPutAssetPropertyValueResponse {

		/** Required */
		errorEntries: Array<BatchPutAssetPropertyErrorEntry>;
	}
	export interface BatchPutAssetPropertyValueResponseFormProperties {
	}
	export function CreateBatchPutAssetPropertyValueResponseFormGroup() {
		return new FormGroup<BatchPutAssetPropertyValueResponseFormProperties>({
		});

	}


	/** Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API. */
	export interface BatchPutAssetPropertyErrorEntry {

		/** Required */
		entryId: string;

		/** Required */
		errors: Array<BatchPutAssetPropertyError>;
	}

	/** Contains error information for asset property value entries that are associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API. */
	export interface BatchPutAssetPropertyErrorEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutAssetPropertyErrorEntryFormGroup() {
		return new FormGroup<BatchPutAssetPropertyErrorEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains error information from updating a batch of asset property values. */
	export interface BatchPutAssetPropertyError {

		/** Required */
		errorCode: BatchPutAssetPropertyValueErrorCode;

		/** Required */
		errorMessage: string;

		/** Required */
		timestamps: Array<TimeInNanos>;
	}

	/** Contains error information from updating a batch of asset property values. */
	export interface BatchPutAssetPropertyErrorFormProperties {

		/** Required */
		errorCode: FormControl<BatchPutAssetPropertyValueErrorCode | null | undefined>,

		/** Required */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchPutAssetPropertyErrorFormGroup() {
		return new FormGroup<BatchPutAssetPropertyErrorFormProperties>({
			errorCode: new FormControl<BatchPutAssetPropertyValueErrorCode | null | undefined>(undefined, [Validators.required]),
			errorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BatchPutAssetPropertyValueErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, InternalFailureException = 2, ServiceUnavailableException = 3, ThrottlingException = 4, LimitExceededException = 5, ConflictingOperationException = 6, TimestampOutOfRangeException = 7, AccessDeniedException = 8 }


	/** Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API operation. */
	export interface PutAssetPropertyValueEntry {

		/** Required */
		entryId: string;
		assetId?: string;
		propertyId?: string;
		propertyAlias?: string;

		/** Required */
		propertyValues: Array<AssetPropertyValue>;
	}

	/** Contains a list of value updates for an asset property in the list of asset entries consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API operation. */
	export interface PutAssetPropertyValueEntryFormProperties {

		/** Required */
		entryId: FormControl<string | null | undefined>,
		assetId: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,
		propertyAlias: FormControl<string | null | undefined>,
	}
	export function CreatePutAssetPropertyValueEntryFormGroup() {
		return new FormGroup<PutAssetPropertyValueEntryFormProperties>({
			entryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetId: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			propertyAlias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAccessPolicyResponse {

		/** Required */
		accessPolicyId: string;

		/** Required */
		accessPolicyArn: string;
	}
	export interface CreateAccessPolicyResponseFormProperties {

		/** Required */
		accessPolicyId: FormControl<string | null | undefined>,

		/** Required */
		accessPolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPolicyResponseFormGroup() {
		return new FormGroup<CreateAccessPolicyResponseFormProperties>({
			accessPolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accessPolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information for a user identity in an access policy. */
	export interface UserIdentity {

		/** Required */
		id: string;
	}

	/** Contains information for a user identity in an access policy. */
	export interface UserIdentityFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information for a group identity in an access policy. */
	export interface GroupIdentity {

		/** Required */
		id: string;
	}

	/** Contains information for a group identity in an access policy. */
	export interface GroupIdentityFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGroupIdentityFormGroup() {
		return new FormGroup<GroupIdentityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about an Identity and Access Management user. */
	export interface IAMUserIdentity {

		/** Required */
		arn: string;
	}

	/** Contains information about an Identity and Access Management user. */
	export interface IAMUserIdentityFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateIAMUserIdentityFormGroup() {
		return new FormGroup<IAMUserIdentityFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about an Identity and Access Management role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>IAM User Guide</i>. */
	export interface IAMRoleIdentity {

		/** Required */
		arn: string;
	}

	/** Contains information about an Identity and Access Management role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>IAM User Guide</i>. */
	export interface IAMRoleIdentityFormProperties {

		/** Required */
		arn: FormControl<string | null | undefined>,
	}
	export function CreateIAMRoleIdentityFormGroup() {
		return new FormGroup<IAMRoleIdentityFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifies an IoT SiteWise Monitor portal. */
	export interface PortalResource {

		/** Required */
		id: string;
	}

	/** Identifies an IoT SiteWise Monitor portal. */
	export interface PortalResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePortalResourceFormGroup() {
		return new FormGroup<PortalResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifies a specific IoT SiteWise Monitor project. */
	export interface ProjectResource {

		/** Required */
		id: string;
	}

	/** Identifies a specific IoT SiteWise Monitor project. */
	export interface ProjectResourceFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateProjectResourceFormGroup() {
		return new FormGroup<ProjectResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateAssetResponse {

		/** Required */
		assetId: string;

		/** Required */
		assetArn: string;

		/** Required */
		assetStatus: AssetStatus;
	}
	export interface CreateAssetResponseFormProperties {

		/** Required */
		assetId: FormControl<string | null | undefined>,

		/** Required */
		assetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetResponseFormGroup() {
		return new FormGroup<CreateAssetResponseFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface AssetStatus {

		/** Required */
		state: AssetState;
		error?: ErrorDetails;
	}

	/** Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface AssetStatusFormProperties {

		/** Required */
		state: FormControl<AssetState | null | undefined>,
	}
	export function CreateAssetStatusFormGroup() {
		return new FormGroup<AssetStatusFormProperties>({
			state: new FormControl<AssetState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssetState { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, FAILED = 4 }


	/** Contains the details of an IoT SiteWise error. */
	export interface ErrorDetails {

		/** Required */
		code: ErrorCode;

		/** Required */
		message: string;
		details?: Array<DetailedError>;
	}

	/** Contains the details of an IoT SiteWise error. */
	export interface ErrorDetailsFormProperties {

		/** Required */
		code: FormControl<ErrorCode | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ErrorCode { VALIDATION_ERROR = 0, INTERNAL_FAILURE = 1 }


	/** Contains detailed error information.  */
	export interface DetailedError {

		/** Required */
		code: DetailedErrorCode;

		/** Required */
		message: string;
	}

	/** Contains detailed error information.  */
	export interface DetailedErrorFormProperties {

		/** Required */
		code: FormControl<DetailedErrorCode | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateDetailedErrorFormGroup() {
		return new FormGroup<DetailedErrorFormProperties>({
			code: new FormControl<DetailedErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DetailedErrorCode { INCOMPATIBLE_COMPUTE_LOCATION = 0, INCOMPATIBLE_FORWARDING_CONFIGURATION = 1 }

	export interface CreateAssetModelResponse {

		/** Required */
		assetModelId: string;

		/** Required */
		assetModelArn: string;

		/** Required */
		assetModelStatus: AssetModelStatus;
	}
	export interface CreateAssetModelResponseFormProperties {

		/** Required */
		assetModelId: FormControl<string | null | undefined>,

		/** Required */
		assetModelArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetModelResponseFormGroup() {
		return new FormGroup<CreateAssetModelResponseFormProperties>({
			assetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface AssetModelStatus {

		/** Required */
		state: AssetModelState;
		error?: ErrorDetails;
	}

	/** Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface AssetModelStatusFormProperties {

		/** Required */
		state: FormControl<AssetModelState | null | undefined>,
	}
	export function CreateAssetModelStatusFormGroup() {
		return new FormGroup<AssetModelStatusFormProperties>({
			state: new FormControl<AssetModelState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AssetModelState { CREATING = 0, ACTIVE = 1, UPDATING = 2, PROPAGATING = 3, DELETING = 4, FAILED = 5 }


	/** Contains an asset model property definition. This property definition is applied to all assets created from the asset model. */
	export interface AssetModelPropertyDefinition {

		/** Required */
		name: string;

		/** Required */
		dataType: PropertyDataType;
		dataTypeSpec?: string;
		unit?: string;

		/** Required */
		type: PropertyType;
	}

	/** Contains an asset model property definition. This property definition is applied to all assets created from the asset model. */
	export interface AssetModelPropertyDefinitionFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<PropertyDataType | null | undefined>,
		dataTypeSpec: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateAssetModelPropertyDefinitionFormGroup() {
		return new FormGroup<AssetModelPropertyDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataType: new FormControl<PropertyDataType | null | undefined>(undefined, [Validators.required]),
			dataTypeSpec: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PropertyDataType { STRING = 0, INTEGER = 1, DOUBLE = 2, BOOLEAN = 3, STRUCT = 4 }


	/** Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>. */
	export interface PropertyType {
		attribute?: Attribute;
		measurement?: Measurement;
		transform?: Transform;
		metric?: Metric;
	}

	/** Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>. */
	export interface PropertyTypeFormProperties {
	}
	export function CreatePropertyTypeFormGroup() {
		return new FormGroup<PropertyTypeFormProperties>({
		});

	}


	/** Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface Attribute {
		defaultValue?: string;
	}

	/** Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface AttributeFormProperties {
		defaultValue: FormControl<string | null | undefined>,
	}
	export function CreateAttributeFormGroup() {
		return new FormGroup<AttributeFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an asset measurement property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface Measurement {
		processingConfig?: MeasurementProcessingConfig;
	}

	/** Contains an asset measurement property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface MeasurementFormProperties {
	}
	export function CreateMeasurementFormGroup() {
		return new FormGroup<MeasurementFormProperties>({
		});

	}


	/** The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud. */
	export interface MeasurementProcessingConfig {

		/** Required */
		forwardingConfig: ForwardingConfig;
	}

	/** The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud. */
	export interface MeasurementProcessingConfigFormProperties {
	}
	export function CreateMeasurementProcessingConfigFormGroup() {
		return new FormGroup<MeasurementProcessingConfigFormProperties>({
		});

	}


	/** The forwarding configuration for a given property. */
	export interface ForwardingConfig {

		/** Required */
		state: ForwardingConfigState;
	}

	/** The forwarding configuration for a given property. */
	export interface ForwardingConfigFormProperties {

		/** Required */
		state: FormControl<ForwardingConfigState | null | undefined>,
	}
	export function CreateForwardingConfigFormGroup() {
		return new FormGroup<ForwardingConfigFormProperties>({
			state: new FormControl<ForwardingConfigState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ForwardingConfigState { DISABLED = 0, ENABLED = 1 }


	/** <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p> */
	export interface Transform {

		/** Required */
		expression: string;

		/** Required */
		variables: Array<ExpressionVariable>;
		processingConfig?: TransformProcessingConfig;
	}

	/** <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p> */
	export interface TransformFormProperties {

		/** Required */
		expression: FormControl<string | null | undefined>,
	}
	export function CreateTransformFormGroup() {
		return new FormGroup<TransformFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains expression variable information. */
	export interface ExpressionVariable {

		/** Required */
		name: string;

		/** Required */
		value: VariableValue;
	}

	/** Contains expression variable information. */
	export interface ExpressionVariableFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateExpressionVariableFormGroup() {
		return new FormGroup<ExpressionVariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifies a property value used in an expression. */
	export interface VariableValue {

		/** Required */
		propertyId: string;
		hierarchyId?: string;
	}

	/** Identifies a property value used in an expression. */
	export interface VariableValueFormProperties {

		/** Required */
		propertyId: FormControl<string | null | undefined>,
		hierarchyId: FormControl<string | null | undefined>,
	}
	export function CreateVariableValueFormGroup() {
		return new FormGroup<VariableValueFormProperties>({
			propertyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hierarchyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud. */
	export interface TransformProcessingConfig {

		/** Required */
		computeLocation: ComputeLocation;

		/** The forwarding configuration for a given property. */
		forwardingConfig?: ForwardingConfig;
	}

	/** The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud. */
	export interface TransformProcessingConfigFormProperties {

		/** Required */
		computeLocation: FormControl<ComputeLocation | null | undefined>,
	}
	export function CreateTransformProcessingConfigFormGroup() {
		return new FormGroup<TransformProcessingConfigFormProperties>({
			computeLocation: new FormControl<ComputeLocation | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComputeLocation { EDGE = 0, CLOUD = 1 }


	/** <p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>IoT SiteWise User Guide</i>.</p> */
	export interface Metric {

		/** Required */
		expression: string;

		/** Required */
		variables: Array<ExpressionVariable>;

		/** Required */
		window: MetricWindow;
		processingConfig?: MetricProcessingConfig;
	}

	/** <p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>IoT SiteWise User Guide</i>.</p> */
	export interface MetricFormProperties {

		/** Required */
		expression: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on). */
	export interface MetricWindow {
		tumbling?: TumblingWindow;
	}

	/** Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on). */
	export interface MetricWindowFormProperties {
	}
	export function CreateMetricWindowFormGroup() {
		return new FormGroup<MetricWindowFormProperties>({
		});

	}


	/** <p>Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time window. You can use this window in metrics to aggregate data from properties and other assets.</p> <p>You can use <code>m</code>, <code>h</code>, <code>d</code>, and <code>w</code> when you specify an interval or offset. Note that <code>m</code> represents minutes, <code>h</code> represents hours, <code>d</code> represents days, and <code>w</code> represents weeks. You can also use <code>s</code> to represent seconds in <code>offset</code>.</p> <p>The <code>interval</code> and <code>offset</code> parameters support the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>. For example, <code>PT5S</code> represents 5 seconds, <code>PT5M</code> represents 5 minutes, and <code>PT5H</code> represents 5 hours.</p> */
	export interface TumblingWindow {

		/** Required */
		interval: string;
		offset?: string;
	}

	/** <p>Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time window. You can use this window in metrics to aggregate data from properties and other assets.</p> <p>You can use <code>m</code>, <code>h</code>, <code>d</code>, and <code>w</code> when you specify an interval or offset. Note that <code>m</code> represents minutes, <code>h</code> represents hours, <code>d</code> represents days, and <code>w</code> represents weeks. You can also use <code>s</code> to represent seconds in <code>offset</code>.</p> <p>The <code>interval</code> and <code>offset</code> parameters support the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>. For example, <code>PT5S</code> represents 5 seconds, <code>PT5M</code> represents 5 minutes, and <code>PT5H</code> represents 5 hours.</p> */
	export interface TumblingWindowFormProperties {

		/** Required */
		interval: FormControl<string | null | undefined>,
		offset: FormControl<string | null | undefined>,
	}
	export function CreateTumblingWindowFormGroup() {
		return new FormGroup<TumblingWindowFormProperties>({
			interval: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud. */
	export interface MetricProcessingConfig {

		/** Required */
		computeLocation: ComputeLocation;
	}

	/** The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud. */
	export interface MetricProcessingConfigFormProperties {

		/** Required */
		computeLocation: FormControl<ComputeLocation | null | undefined>,
	}
	export function CreateMetricProcessingConfigFormGroup() {
		return new FormGroup<MetricProcessingConfigFormProperties>({
			computeLocation: new FormControl<ComputeLocation | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy. */
	export interface AssetModelHierarchyDefinition {

		/** Required */
		name: string;

		/** Required */
		childAssetModelId: string;
	}

	/** Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy. */
	export interface AssetModelHierarchyDefinitionFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		childAssetModelId: FormControl<string | null | undefined>,
	}
	export function CreateAssetModelHierarchyDefinitionFormGroup() {
		return new FormGroup<AssetModelHierarchyDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			childAssetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model. */
	export interface AssetModelCompositeModelDefinition {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		type: string;

		/** The asset property definitions for this composite model. */
		properties?: any;
	}

	/** Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model. */
	export interface AssetModelCompositeModelDefinitionFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** The asset property definitions for this composite model. */
		properties: FormControl<any | null | undefined>,
	}
	export function CreateAssetModelCompositeModelDefinitionFormGroup() {
		return new FormGroup<AssetModelCompositeModelDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface CreateBulkImportJobResponse {

		/** Required */
		jobId: string;

		/** Required */
		jobName: string;

		/** Required */
		jobStatus: JobStatus;
	}
	export interface CreateBulkImportJobResponseFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		jobStatus: FormControl<JobStatus | null | undefined>,
	}
	export function CreateCreateBulkImportJobResponseFormGroup() {
		return new FormGroup<CreateBulkImportJobResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum JobStatus { PENDING = 0, CANCELLED = 1, RUNNING = 2, COMPLETED = 3, FAILED = 4, COMPLETED_WITH_FAILURES = 5 }


	/** The file in Amazon S3 where your data is saved.  */
	export interface File {

		/** Required */
		bucket: string;

		/** Required */
		key: string;
		versionId?: string;
	}

	/** The file in Amazon S3 where your data is saved.  */
	export interface FileFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
		versionId: FormControl<string | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			versionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The file format of the data. */
	export interface FileFormat {
		csv?: Csv;
	}

	/** The file format of the data. */
	export interface FileFormatFormProperties {
	}
	export function CreateFileFormatFormGroup() {
		return new FormGroup<FileFormatFormProperties>({
		});

	}


	/** A .csv file. */
	export interface Csv {
		columnNames?: Array<ColumnName>;
	}

	/** A .csv file. */
	export interface CsvFormProperties {
	}
	export function CreateCsvFormGroup() {
		return new FormGroup<CsvFormProperties>({
		});

	}

	export enum ColumnName { ALIAS = 0, ASSET_ID = 1, PROPERTY_ID = 2, DATA_TYPE = 3, TIMESTAMP_SECONDS = 4, TIMESTAMP_NANO_OFFSET = 5, QUALITY = 6, VALUE = 7 }

	export interface CreateDashboardResponse {

		/** Required */
		dashboardId: string;

		/** Required */
		dashboardArn: string;
	}
	export interface CreateDashboardResponseFormProperties {

		/** Required */
		dashboardId: FormControl<string | null | undefined>,

		/** Required */
		dashboardArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDashboardResponseFormGroup() {
		return new FormGroup<CreateDashboardResponseFormProperties>({
			dashboardId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dashboardArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGatewayResponse {

		/** Required */
		gatewayId: string;

		/** Required */
		gatewayArn: string;
	}
	export interface CreateGatewayResponseFormProperties {

		/** Required */
		gatewayId: FormControl<string | null | undefined>,

		/** Required */
		gatewayArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayResponseFormGroup() {
		return new FormGroup<CreateGatewayResponseFormProperties>({
			gatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details for a gateway that runs on IoT Greengrass. To create a gateway that runs on IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface Greengrass {

		/** Required */
		groupArn: string;
	}

	/** Contains details for a gateway that runs on IoT Greengrass. To create a gateway that runs on IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface GreengrassFormProperties {

		/** Required */
		groupArn: FormControl<string | null | undefined>,
	}
	export function CreateGreengrassFormGroup() {
		return new FormGroup<GreengrassFormProperties>({
			groupArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html">Greengrass device role</a> must use the <code>AWSIoTSiteWiseEdgeAccess</code> policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html">Using IoT SiteWise at the edge</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface GreengrassV2 {

		/** Required */
		coreDeviceThingName: string;
	}

	/** Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html">Greengrass device role</a> must use the <code>AWSIoTSiteWiseEdgeAccess</code> policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html">Using IoT SiteWise at the edge</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface GreengrassV2FormProperties {

		/** Required */
		coreDeviceThingName: FormControl<string | null | undefined>,
	}
	export function CreateGreengrassV2FormGroup() {
		return new FormGroup<GreengrassV2FormProperties>({
			coreDeviceThingName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePortalResponse {

		/** Required */
		portalId: string;

		/** Required */
		portalArn: string;

		/** Required */
		portalStartUrl: string;

		/** Required */
		portalStatus: PortalStatus;

		/** Required */
		ssoApplicationId: string;
	}
	export interface CreatePortalResponseFormProperties {

		/** Required */
		portalId: FormControl<string | null | undefined>,

		/** Required */
		portalArn: FormControl<string | null | undefined>,

		/** Required */
		portalStartUrl: FormControl<string | null | undefined>,

		/** Required */
		ssoApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortalResponseFormGroup() {
		return new FormGroup<CreatePortalResponseFormProperties>({
			portalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalStartUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ssoApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about the current status of a portal. */
	export interface PortalStatus {

		/** Required */
		state: PortalState;
		error?: MonitorErrorDetails;
	}

	/** Contains information about the current status of a portal. */
	export interface PortalStatusFormProperties {

		/** Required */
		state: FormControl<PortalState | null | undefined>,
	}
	export function CreatePortalStatusFormGroup() {
		return new FormGroup<PortalStatusFormProperties>({
			state: new FormControl<PortalState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PortalState { CREATING = 0, UPDATING = 1, DELETING = 2, ACTIVE = 3, FAILED = 4 }


	/** Contains IoT SiteWise Monitor error details. */
	export interface MonitorErrorDetails {
		code?: MonitorErrorCode;
		message?: string;
	}

	/** Contains IoT SiteWise Monitor error details. */
	export interface MonitorErrorDetailsFormProperties {
		code: FormControl<MonitorErrorCode | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateMonitorErrorDetailsFormGroup() {
		return new FormGroup<MonitorErrorDetailsFormProperties>({
			code: new FormControl<MonitorErrorCode | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MonitorErrorCode { INTERNAL_FAILURE = 0, VALIDATION_ERROR = 1, LIMIT_EXCEEDED = 2 }

	export enum ImageFileType { PNG = 0 }

	export interface CreateProjectResponse {

		/** Required */
		projectId: string;

		/** Required */
		projectArn: string;
	}
	export interface CreateProjectResponseFormProperties {

		/** Required */
		projectId: FormControl<string | null | undefined>,

		/** Required */
		projectArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectResponseFormGroup() {
		return new FormGroup<CreateProjectResponseFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAccessPolicyResponse {
	}
	export interface DeleteAccessPolicyResponseFormProperties {
	}
	export function CreateDeleteAccessPolicyResponseFormGroup() {
		return new FormGroup<DeleteAccessPolicyResponseFormProperties>({
		});

	}

	export interface DeleteAssetResponse {

		/** Required */
		assetStatus: AssetStatus;
	}
	export interface DeleteAssetResponseFormProperties {
	}
	export function CreateDeleteAssetResponseFormGroup() {
		return new FormGroup<DeleteAssetResponseFormProperties>({
		});

	}

	export interface DeleteAssetModelResponse {

		/** Required */
		assetModelStatus: AssetModelStatus;
	}
	export interface DeleteAssetModelResponseFormProperties {
	}
	export function CreateDeleteAssetModelResponseFormGroup() {
		return new FormGroup<DeleteAssetModelResponseFormProperties>({
		});

	}

	export interface DeleteDashboardResponse {
	}
	export interface DeleteDashboardResponseFormProperties {
	}
	export function CreateDeleteDashboardResponseFormGroup() {
		return new FormGroup<DeleteDashboardResponseFormProperties>({
		});

	}

	export interface DeletePortalResponse {

		/** Required */
		portalStatus: PortalStatus;
	}
	export interface DeletePortalResponseFormProperties {
	}
	export function CreateDeletePortalResponseFormGroup() {
		return new FormGroup<DeletePortalResponseFormProperties>({
		});

	}

	export interface DeleteProjectResponse {
	}
	export interface DeleteProjectResponseFormProperties {
	}
	export function CreateDeleteProjectResponseFormGroup() {
		return new FormGroup<DeleteProjectResponseFormProperties>({
		});

	}

	export interface DescribeAccessPolicyResponse {

		/** Required */
		accessPolicyId: string;

		/** Required */
		accessPolicyArn: string;

		/** Required */
		accessPolicyIdentity: Identity;

		/** Required */
		accessPolicyResource: Resource;

		/** Required */
		accessPolicyPermission: Permission;

		/** Required */
		accessPolicyCreationDate: Date;

		/** Required */
		accessPolicyLastUpdateDate: Date;
	}
	export interface DescribeAccessPolicyResponseFormProperties {

		/** Required */
		accessPolicyId: FormControl<string | null | undefined>,

		/** Required */
		accessPolicyArn: FormControl<string | null | undefined>,

		/** Required */
		accessPolicyPermission: FormControl<Permission | null | undefined>,

		/** Required */
		accessPolicyCreationDate: FormControl<Date | null | undefined>,

		/** Required */
		accessPolicyLastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeAccessPolicyResponseFormGroup() {
		return new FormGroup<DescribeAccessPolicyResponseFormProperties>({
			accessPolicyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accessPolicyArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			accessPolicyPermission: new FormControl<Permission | null | undefined>(undefined, [Validators.required]),
			accessPolicyCreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			accessPolicyLastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note> */
	export interface Identity {
		user?: UserIdentity;
		group?: GroupIdentity;
		iamUser?: IAMUserIdentity;
		iamRole?: IAMRoleIdentity;
	}

	/** <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note> */
	export interface IdentityFormProperties {
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
		});

	}


	/** Contains an IoT SiteWise Monitor resource ID for a portal or project. */
	export interface Resource {
		portal?: PortalResource;
		project?: ProjectResource;
	}

	/** Contains an IoT SiteWise Monitor resource ID for a portal or project. */
	export interface ResourceFormProperties {
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
		});

	}

	export enum Permission { ADMINISTRATOR = 0, VIEWER = 1 }

	export interface DescribeAssetResponse {

		/** Required */
		assetId: string;

		/** Required */
		assetArn: string;

		/** Required */
		assetName: string;

		/** Required */
		assetModelId: string;

		/** Required */
		assetProperties: Array<AssetProperty>;

		/** Required */
		assetHierarchies: Array<AssetHierarchy>;
		assetCompositeModels?: Array<AssetCompositeModel>;

		/** Required */
		assetCreationDate: Date;

		/** Required */
		assetLastUpdateDate: Date;

		/** Required */
		assetStatus: AssetStatus;
		assetDescription?: string;
	}
	export interface DescribeAssetResponseFormProperties {

		/** Required */
		assetId: FormControl<string | null | undefined>,

		/** Required */
		assetArn: FormControl<string | null | undefined>,

		/** Required */
		assetName: FormControl<string | null | undefined>,

		/** Required */
		assetModelId: FormControl<string | null | undefined>,

		/** Required */
		assetCreationDate: FormControl<Date | null | undefined>,

		/** Required */
		assetLastUpdateDate: FormControl<Date | null | undefined>,
		assetDescription: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssetResponseFormGroup() {
		return new FormGroup<DescribeAssetResponseFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetCreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			assetLastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			assetDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains asset property information. */
	export interface AssetProperty {

		/** Required */
		id: string;

		/** Required */
		name: string;
		alias?: string;
		notification?: PropertyNotification;

		/** Required */
		dataType: PropertyDataType;
		dataTypeSpec?: string;
		unit?: string;
	}

	/** Contains asset property information. */
	export interface AssetPropertyFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<PropertyDataType | null | undefined>,
		dataTypeSpec: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertyFormGroup() {
		return new FormGroup<AssetPropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alias: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<PropertyDataType | null | undefined>(undefined, [Validators.required]),
			dataTypeSpec: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface PropertyNotification {

		/** Required */
		topic: string;

		/** Required */
		state: PropertyNotificationState;
	}

	/** Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>. */
	export interface PropertyNotificationFormProperties {

		/** Required */
		topic: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<PropertyNotificationState | null | undefined>,
	}
	export function CreatePropertyNotificationFormGroup() {
		return new FormGroup<PropertyNotificationFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<PropertyNotificationState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PropertyNotificationState { ENABLED = 0, DISABLED = 1 }


	/** Describes an asset hierarchy that contains a hierarchy's name and ID. */
	export interface AssetHierarchy {
		id?: string;

		/** Required */
		name: string;
	}

	/** Describes an asset hierarchy that contains a hierarchy's name and ID. */
	export interface AssetHierarchyFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAssetHierarchyFormGroup() {
		return new FormGroup<AssetHierarchyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model. */
	export interface AssetCompositeModel {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		type: string;

		/**
		 * The asset properties that this composite model defines.
		 * Required
		 */
		properties: any;
		id?: string;
	}

	/** Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model. */
	export interface AssetCompositeModelFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/**
		 * The asset properties that this composite model defines.
		 * Required
		 */
		properties: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateAssetCompositeModelFormGroup() {
		return new FormGroup<AssetCompositeModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAssetModelResponse {

		/** Required */
		assetModelId: string;

		/** Required */
		assetModelArn: string;

		/** Required */
		assetModelName: string;

		/** Required */
		assetModelDescription: string;

		/** Required */
		assetModelProperties: Array<AssetModelProperty>;

		/** Required */
		assetModelHierarchies: Array<AssetModelHierarchy>;
		assetModelCompositeModels?: Array<AssetModelCompositeModel>;

		/** Required */
		assetModelCreationDate: Date;

		/** Required */
		assetModelLastUpdateDate: Date;

		/** Required */
		assetModelStatus: AssetModelStatus;
	}
	export interface DescribeAssetModelResponseFormProperties {

		/** Required */
		assetModelId: FormControl<string | null | undefined>,

		/** Required */
		assetModelArn: FormControl<string | null | undefined>,

		/** Required */
		assetModelName: FormControl<string | null | undefined>,

		/** Required */
		assetModelDescription: FormControl<string | null | undefined>,

		/** Required */
		assetModelCreationDate: FormControl<Date | null | undefined>,

		/** Required */
		assetModelLastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeAssetModelResponseFormGroup() {
		return new FormGroup<DescribeAssetModelResponseFormProperties>({
			assetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelCreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			assetModelLastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about an asset model property. */
	export interface AssetModelProperty {
		id?: string;

		/** Required */
		name: string;

		/** Required */
		dataType: PropertyDataType;
		dataTypeSpec?: string;
		unit?: string;

		/** Required */
		type: PropertyType;
	}

	/** Contains information about an asset model property. */
	export interface AssetModelPropertyFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<PropertyDataType | null | undefined>,
		dataTypeSpec: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateAssetModelPropertyFormGroup() {
		return new FormGroup<AssetModelPropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataType: new FormControl<PropertyDataType | null | undefined>(undefined, [Validators.required]),
			dataTypeSpec: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy. */
	export interface AssetModelHierarchy {
		id?: string;

		/** Required */
		name: string;

		/** Required */
		childAssetModelId: string;
	}

	/** Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy. */
	export interface AssetModelHierarchyFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		childAssetModelId: FormControl<string | null | undefined>,
	}
	export function CreateAssetModelHierarchyFormGroup() {
		return new FormGroup<AssetModelHierarchyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			childAssetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model. */
	export interface AssetModelCompositeModel {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		type: string;

		/** The asset property definitions for this composite model. */
		properties?: any;
		id?: string;
	}

	/** Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model. */
	export interface AssetModelCompositeModelFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** The asset property definitions for this composite model. */
		properties: FormControl<any | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateAssetModelCompositeModelFormGroup() {
		return new FormGroup<AssetModelCompositeModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAssetPropertyResponse {

		/** Required */
		assetId: string;

		/** Required */
		assetName: string;

		/** Required */
		assetModelId: string;
		assetProperty?: Property;
		compositeModel?: CompositeModelProperty;
	}
	export interface DescribeAssetPropertyResponseFormProperties {

		/** Required */
		assetId: FormControl<string | null | undefined>,

		/** Required */
		assetName: FormControl<string | null | undefined>,

		/** Required */
		assetModelId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeAssetPropertyResponseFormGroup() {
		return new FormGroup<DescribeAssetPropertyResponseFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains asset property information. */
	export interface Property {

		/** Required */
		id: string;

		/** Required */
		name: string;
		alias?: string;
		notification?: PropertyNotification;

		/** Required */
		dataType: PropertyDataType;
		unit?: string;
		type?: PropertyType;
	}

	/** Contains asset property information. */
	export interface PropertyFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<PropertyDataType | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreatePropertyFormGroup() {
		return new FormGroup<PropertyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			alias: new FormControl<string | null | undefined>(undefined),
			dataType: new FormControl<PropertyDataType | null | undefined>(undefined, [Validators.required]),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a composite model property on an asset. */
	export interface CompositeModelProperty {

		/** Required */
		name: string;

		/** Required */
		type: string;

		/**
		 * Contains asset property information.
		 * Required
		 */
		assetProperty: Property;
		id?: string;
	}

	/** Contains information about a composite model property on an asset. */
	export interface CompositeModelPropertyFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateCompositeModelPropertyFormGroup() {
		return new FormGroup<CompositeModelPropertyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeBulkImportJobResponse {

		/** Required */
		jobId: string;

		/** Required */
		jobName: string;

		/** Required */
		jobStatus: JobStatus;

		/** Required */
		jobRoleArn: string;

		/** Required */
		files: Array<File>;

		/** Required */
		errorReportLocation: ErrorReportLocation;

		/** Required */
		jobConfiguration: JobConfiguration;

		/** Required */
		jobCreationDate: Date;

		/** Required */
		jobLastUpdateDate: Date;
	}
	export interface DescribeBulkImportJobResponseFormProperties {

		/** Required */
		jobId: FormControl<string | null | undefined>,

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		jobStatus: FormControl<JobStatus | null | undefined>,

		/** Required */
		jobRoleArn: FormControl<string | null | undefined>,

		/** Required */
		jobCreationDate: FormControl<Date | null | undefined>,

		/** Required */
		jobLastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeBulkImportJobResponseFormGroup() {
		return new FormGroup<DescribeBulkImportJobResponseFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobStatus: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
			jobRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobCreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			jobLastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Amazon S3 destination where errors associated with the job creation request are saved. */
	export interface ErrorReportLocation {

		/** Required */
		bucket: string;

		/** Required */
		prefix: string;
	}

	/** The Amazon S3 destination where errors associated with the job creation request are saved. */
	export interface ErrorReportLocationFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateErrorReportLocationFormGroup() {
		return new FormGroup<ErrorReportLocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains the configuration information of a job, such as the file format used to save data in Amazon S3. */
	export interface JobConfiguration {

		/** Required */
		fileFormat: FileFormat;
	}

	/** Contains the configuration information of a job, such as the file format used to save data in Amazon S3. */
	export interface JobConfigurationFormProperties {
	}
	export function CreateJobConfigurationFormGroup() {
		return new FormGroup<JobConfigurationFormProperties>({
		});

	}

	export interface DescribeDashboardResponse {

		/** Required */
		dashboardId: string;

		/** Required */
		dashboardArn: string;

		/** Required */
		dashboardName: string;

		/** Required */
		projectId: string;
		dashboardDescription?: string;

		/** Required */
		dashboardDefinition: string;

		/** Required */
		dashboardCreationDate: Date;

		/** Required */
		dashboardLastUpdateDate: Date;
	}
	export interface DescribeDashboardResponseFormProperties {

		/** Required */
		dashboardId: FormControl<string | null | undefined>,

		/** Required */
		dashboardArn: FormControl<string | null | undefined>,

		/** Required */
		dashboardName: FormControl<string | null | undefined>,

		/** Required */
		projectId: FormControl<string | null | undefined>,
		dashboardDescription: FormControl<string | null | undefined>,

		/** Required */
		dashboardDefinition: FormControl<string | null | undefined>,

		/** Required */
		dashboardCreationDate: FormControl<Date | null | undefined>,

		/** Required */
		dashboardLastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeDashboardResponseFormGroup() {
		return new FormGroup<DescribeDashboardResponseFormProperties>({
			dashboardId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dashboardArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dashboardName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dashboardDescription: new FormControl<string | null | undefined>(undefined),
			dashboardDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dashboardCreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			dashboardLastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDefaultEncryptionConfigurationResponse {

		/** Required */
		encryptionType: EncryptionType;
		kmsKeyArn?: string;

		/** Required */
		configurationStatus: ConfigurationStatus;
	}
	export interface DescribeDefaultEncryptionConfigurationResponseFormProperties {

		/** Required */
		encryptionType: FormControl<EncryptionType | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDefaultEncryptionConfigurationResponseFormGroup() {
		return new FormGroup<DescribeDefaultEncryptionConfigurationResponseFormProperties>({
			encryptionType: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EncryptionType { SITEWISE_DEFAULT_ENCRYPTION = 0, KMS_BASED_ENCRYPTION = 1 }


	/** Contains current status information for the configuration. */
	export interface ConfigurationStatus {

		/** Required */
		state: ConfigurationState;
		error?: ConfigurationErrorDetails;
	}

	/** Contains current status information for the configuration. */
	export interface ConfigurationStatusFormProperties {

		/** Required */
		state: FormControl<ConfigurationState | null | undefined>,
	}
	export function CreateConfigurationStatusFormGroup() {
		return new FormGroup<ConfigurationStatusFormProperties>({
			state: new FormControl<ConfigurationState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ConfigurationState { ACTIVE = 0, UPDATE_IN_PROGRESS = 1, UPDATE_FAILED = 2 }


	/** Contains the details of an IoT SiteWise configuration error. */
	export interface ConfigurationErrorDetails {

		/** Required */
		code: ErrorCode;

		/** Required */
		message: string;
	}

	/** Contains the details of an IoT SiteWise configuration error. */
	export interface ConfigurationErrorDetailsFormProperties {

		/** Required */
		code: FormControl<ErrorCode | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,
	}
	export function CreateConfigurationErrorDetailsFormGroup() {
		return new FormGroup<ConfigurationErrorDetailsFormProperties>({
			code: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeGatewayResponse {

		/** Required */
		gatewayId: string;

		/** Required */
		gatewayName: string;

		/** Required */
		gatewayArn: string;
		gatewayPlatform?: GatewayPlatform;

		/** Required */
		gatewayCapabilitySummaries: Array<GatewayCapabilitySummary>;

		/** Required */
		creationDate: Date;

		/** Required */
		lastUpdateDate: Date;
	}
	export interface DescribeGatewayResponseFormProperties {

		/** Required */
		gatewayId: FormControl<string | null | undefined>,

		/** Required */
		gatewayName: FormControl<string | null | undefined>,

		/** Required */
		gatewayArn: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeGatewayResponseFormGroup() {
		return new FormGroup<DescribeGatewayResponseFormProperties>({
			gatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gatewayArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains a gateway's platform information. */
	export interface GatewayPlatform {
		greengrass?: Greengrass;
		greengrassV2?: GreengrassV2;
	}

	/** Contains a gateway's platform information. */
	export interface GatewayPlatformFormProperties {
	}
	export function CreateGatewayPlatformFormGroup() {
		return new FormGroup<GatewayPlatformFormProperties>({
		});

	}


	/** Contains a summary of a gateway capability configuration. */
	export interface GatewayCapabilitySummary {

		/** Required */
		capabilityNamespace: string;

		/** Required */
		capabilitySyncStatus: CapabilitySyncStatus;
	}

	/** Contains a summary of a gateway capability configuration. */
	export interface GatewayCapabilitySummaryFormProperties {

		/** Required */
		capabilityNamespace: FormControl<string | null | undefined>,

		/** Required */
		capabilitySyncStatus: FormControl<CapabilitySyncStatus | null | undefined>,
	}
	export function CreateGatewayCapabilitySummaryFormGroup() {
		return new FormGroup<GatewayCapabilitySummaryFormProperties>({
			capabilityNamespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			capabilitySyncStatus: new FormControl<CapabilitySyncStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CapabilitySyncStatus { IN_SYNC = 0, OUT_OF_SYNC = 1, SYNC_FAILED = 2, UNKNOWN = 3 }

	export interface DescribeGatewayCapabilityConfigurationResponse {

		/** Required */
		gatewayId: string;

		/** Required */
		capabilityNamespace: string;

		/** Required */
		capabilityConfiguration: string;

		/** Required */
		capabilitySyncStatus: CapabilitySyncStatus;
	}
	export interface DescribeGatewayCapabilityConfigurationResponseFormProperties {

		/** Required */
		gatewayId: FormControl<string | null | undefined>,

		/** Required */
		capabilityNamespace: FormControl<string | null | undefined>,

		/** Required */
		capabilityConfiguration: FormControl<string | null | undefined>,

		/** Required */
		capabilitySyncStatus: FormControl<CapabilitySyncStatus | null | undefined>,
	}
	export function CreateDescribeGatewayCapabilityConfigurationResponseFormGroup() {
		return new FormGroup<DescribeGatewayCapabilityConfigurationResponseFormProperties>({
			gatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			capabilityNamespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			capabilityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			capabilitySyncStatus: new FormControl<CapabilitySyncStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeLoggingOptionsResponse {

		/** Required */
		loggingOptions: LoggingOptions;
	}
	export interface DescribeLoggingOptionsResponseFormProperties {
	}
	export function CreateDescribeLoggingOptionsResponseFormGroup() {
		return new FormGroup<DescribeLoggingOptionsResponseFormProperties>({
		});

	}


	/** Contains logging options. */
	export interface LoggingOptions {

		/** Required */
		level: LoggingLevel;
	}

	/** Contains logging options. */
	export interface LoggingOptionsFormProperties {

		/** Required */
		level: FormControl<LoggingLevel | null | undefined>,
	}
	export function CreateLoggingOptionsFormGroup() {
		return new FormGroup<LoggingOptionsFormProperties>({
			level: new FormControl<LoggingLevel | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LoggingLevel { ERROR = 0, INFO = 1, OFF = 2 }

	export interface DescribePortalResponse {

		/** Required */
		portalId: string;

		/** Required */
		portalArn: string;

		/** Required */
		portalName: string;
		portalDescription?: string;

		/** Required */
		portalClientId: string;

		/** Required */
		portalStartUrl: string;

		/** Required */
		portalContactEmail: string;

		/** Required */
		portalStatus: PortalStatus;

		/** Required */
		portalCreationDate: Date;

		/** Required */
		portalLastUpdateDate: Date;
		portalLogoImageLocation?: ImageLocation;
		roleArn?: string;
		portalAuthMode?: AuthMode;
		notificationSenderEmail?: string;
		alarms?: Alarms;
	}
	export interface DescribePortalResponseFormProperties {

		/** Required */
		portalId: FormControl<string | null | undefined>,

		/** Required */
		portalArn: FormControl<string | null | undefined>,

		/** Required */
		portalName: FormControl<string | null | undefined>,
		portalDescription: FormControl<string | null | undefined>,

		/** Required */
		portalClientId: FormControl<string | null | undefined>,

		/** Required */
		portalStartUrl: FormControl<string | null | undefined>,

		/** Required */
		portalContactEmail: FormControl<string | null | undefined>,

		/** Required */
		portalCreationDate: FormControl<Date | null | undefined>,

		/** Required */
		portalLastUpdateDate: FormControl<Date | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
		portalAuthMode: FormControl<AuthMode | null | undefined>,
		notificationSenderEmail: FormControl<string | null | undefined>,
	}
	export function CreateDescribePortalResponseFormGroup() {
		return new FormGroup<DescribePortalResponseFormProperties>({
			portalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalDescription: new FormControl<string | null | undefined>(undefined),
			portalClientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalStartUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalContactEmail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalCreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			portalLastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined),
			portalAuthMode: new FormControl<AuthMode | null | undefined>(undefined),
			notificationSenderEmail: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an image that is uploaded to IoT SiteWise and available at a URL. */
	export interface ImageLocation {

		/** Required */
		id: string;

		/** Required */
		url: string;
	}

	/** Contains an image that is uploaded to IoT SiteWise and available at a URL. */
	export interface ImageLocationFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateImageLocationFormGroup() {
		return new FormGroup<ImageLocationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AuthMode { IAM = 0, SSO = 1 }


	/** Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>. */
	export interface Alarms {

		/** Required */
		alarmRoleArn: string;
		notificationLambdaArn?: string;
	}

	/** Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>. */
	export interface AlarmsFormProperties {

		/** Required */
		alarmRoleArn: FormControl<string | null | undefined>,
		notificationLambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateAlarmsFormGroup() {
		return new FormGroup<AlarmsFormProperties>({
			alarmRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			notificationLambdaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeProjectResponse {

		/** Required */
		projectId: string;

		/** Required */
		projectArn: string;

		/** Required */
		projectName: string;

		/** Required */
		portalId: string;
		projectDescription?: string;

		/** Required */
		projectCreationDate: Date;

		/** Required */
		projectLastUpdateDate: Date;
	}
	export interface DescribeProjectResponseFormProperties {

		/** Required */
		projectId: FormControl<string | null | undefined>,

		/** Required */
		projectArn: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,

		/** Required */
		portalId: FormControl<string | null | undefined>,
		projectDescription: FormControl<string | null | undefined>,

		/** Required */
		projectCreationDate: FormControl<Date | null | undefined>,

		/** Required */
		projectLastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeProjectResponseFormGroup() {
		return new FormGroup<DescribeProjectResponseFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectDescription: new FormControl<string | null | undefined>(undefined),
			projectCreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			projectLastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeStorageConfigurationResponse {

		/** Required */
		storageType: StorageType;
		multiLayerStorage?: MultiLayerStorage;
		disassociatedDataStorage?: PropertyNotificationState;
		retentionPeriod?: RetentionPeriod;

		/**
		 * Contains current status information for the configuration.
		 * Required
		 */
		configurationStatus: ConfigurationStatus;
		lastUpdateDate?: Date;
	}
	export interface DescribeStorageConfigurationResponseFormProperties {

		/** Required */
		storageType: FormControl<StorageType | null | undefined>,
		disassociatedDataStorage: FormControl<PropertyNotificationState | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeStorageConfigurationResponseFormGroup() {
		return new FormGroup<DescribeStorageConfigurationResponseFormProperties>({
			storageType: new FormControl<StorageType | null | undefined>(undefined, [Validators.required]),
			disassociatedDataStorage: new FormControl<PropertyNotificationState | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum StorageType { SITEWISE_DEFAULT_STORAGE = 0, MULTI_LAYER_STORAGE = 1 }


	/** Contains information about the storage destination. */
	export interface MultiLayerStorage {

		/** Required */
		customerManagedS3Storage: CustomerManagedS3Storage;
	}

	/** Contains information about the storage destination. */
	export interface MultiLayerStorageFormProperties {
	}
	export function CreateMultiLayerStorageFormGroup() {
		return new FormGroup<MultiLayerStorageFormProperties>({
		});

	}


	/** Contains information about a customer managed Amazon S3 bucket. */
	export interface CustomerManagedS3Storage {

		/** Required */
		s3ResourceArn: string;

		/** Required */
		roleArn: string;
	}

	/** Contains information about a customer managed Amazon S3 bucket. */
	export interface CustomerManagedS3StorageFormProperties {

		/** Required */
		s3ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCustomerManagedS3StorageFormGroup() {
		return new FormGroup<CustomerManagedS3StorageFormProperties>({
			s3ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier. */
	export interface RetentionPeriod {
		numberOfDays?: number | null;
		unlimited?: boolean | null;
	}

	/** How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier. */
	export interface RetentionPeriodFormProperties {
		numberOfDays: FormControl<number | null | undefined>,
		unlimited: FormControl<boolean | null | undefined>,
	}
	export function CreateRetentionPeriodFormGroup() {
		return new FormGroup<RetentionPeriodFormProperties>({
			numberOfDays: new FormControl<number | null | undefined>(undefined),
			unlimited: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeTimeSeriesResponse {
		assetId?: string;
		propertyId?: string;
		alias?: string;

		/** Required */
		timeSeriesId: string;

		/** Required */
		dataType: PropertyDataType;
		dataTypeSpec?: string;

		/** Required */
		timeSeriesCreationDate: Date;

		/** Required */
		timeSeriesLastUpdateDate: Date;

		/** Required */
		timeSeriesArn: string;
	}
	export interface DescribeTimeSeriesResponseFormProperties {
		assetId: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,

		/** Required */
		timeSeriesId: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<PropertyDataType | null | undefined>,
		dataTypeSpec: FormControl<string | null | undefined>,

		/** Required */
		timeSeriesCreationDate: FormControl<Date | null | undefined>,

		/** Required */
		timeSeriesLastUpdateDate: FormControl<Date | null | undefined>,

		/** Required */
		timeSeriesArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTimeSeriesResponseFormGroup() {
		return new FormGroup<DescribeTimeSeriesResponseFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			timeSeriesId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataType: new FormControl<PropertyDataType | null | undefined>(undefined, [Validators.required]),
			dataTypeSpec: new FormControl<string | null | undefined>(undefined),
			timeSeriesCreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			timeSeriesLastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			timeSeriesArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetAssetPropertyAggregatesResponse {

		/** Required */
		aggregatedValues: Array<AggregatedValue>;
		nextToken?: string;
	}
	export interface GetAssetPropertyAggregatesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAssetPropertyAggregatesResponseFormGroup() {
		return new FormGroup<GetAssetPropertyAggregatesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAssetPropertyValueResponse {
		propertyValue?: AssetPropertyValue;
	}
	export interface GetAssetPropertyValueResponseFormProperties {
	}
	export function CreateGetAssetPropertyValueResponseFormGroup() {
		return new FormGroup<GetAssetPropertyValueResponseFormProperties>({
		});

	}

	export interface GetAssetPropertyValueHistoryResponse {

		/** Required */
		assetPropertyValueHistory: Array<AssetPropertyValue>;
		nextToken?: string;
	}
	export interface GetAssetPropertyValueHistoryResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetAssetPropertyValueHistoryResponseFormGroup() {
		return new FormGroup<GetAssetPropertyValueHistoryResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInterpolatedAssetPropertyValuesResponse {

		/** Required */
		interpolatedAssetPropertyValues: Array<InterpolatedAssetPropertyValue>;
		nextToken?: string;
	}
	export interface GetInterpolatedAssetPropertyValuesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInterpolatedAssetPropertyValuesResponseFormGroup() {
		return new FormGroup<GetInterpolatedAssetPropertyValuesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about an interpolated asset property value. */
	export interface InterpolatedAssetPropertyValue {

		/**
		 * Contains a timestamp with optional nanosecond granularity.
		 * Required
		 */
		timestamp: TimeInNanos;

		/**
		 * Contains an asset property value (of a single type only).
		 * Required
		 */
		value: Variant;
	}

	/** Contains information about an interpolated asset property value. */
	export interface InterpolatedAssetPropertyValueFormProperties {
	}
	export function CreateInterpolatedAssetPropertyValueFormGroup() {
		return new FormGroup<InterpolatedAssetPropertyValueFormProperties>({
		});

	}

	export interface ListAccessPoliciesResponse {

		/** Required */
		accessPolicySummaries: Array<AccessPolicySummary>;
		nextToken?: string;
	}
	export interface ListAccessPoliciesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccessPoliciesResponseFormGroup() {
		return new FormGroup<ListAccessPoliciesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource. */
	export interface AccessPolicySummary {

		/** Required */
		id: string;

		/** Required */
		identity: Identity;

		/** Required */
		resource: Resource;

		/** Required */
		permission: Permission;
		creationDate?: Date;
		lastUpdateDate?: Date;
	}

	/** Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource. */
	export interface AccessPolicySummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		permission: FormControl<Permission | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateAccessPolicySummaryFormGroup() {
		return new FormGroup<AccessPolicySummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			permission: new FormControl<Permission | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListAssetModelPropertiesResponse {

		/** Required */
		assetModelPropertySummaries: Array<AssetModelPropertySummary>;
		nextToken?: string;
	}
	export interface ListAssetModelPropertiesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssetModelPropertiesResponseFormGroup() {
		return new FormGroup<ListAssetModelPropertiesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of a property associated with a model. */
	export interface AssetModelPropertySummary {
		id?: string;

		/** Required */
		name: string;

		/** Required */
		dataType: PropertyDataType;
		dataTypeSpec?: string;
		unit?: string;

		/**
		 * Contains a property type, which can be one of <code>attribute</code>, <code>measurement</code>, <code>metric</code>, or <code>transform</code>.
		 * Required
		 */
		type: PropertyType;
		assetModelCompositeModelId?: string;
	}

	/** Contains a summary of a property associated with a model. */
	export interface AssetModelPropertySummaryFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<PropertyDataType | null | undefined>,
		dataTypeSpec: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
		assetModelCompositeModelId: FormControl<string | null | undefined>,
	}
	export function CreateAssetModelPropertySummaryFormGroup() {
		return new FormGroup<AssetModelPropertySummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataType: new FormControl<PropertyDataType | null | undefined>(undefined, [Validators.required]),
			dataTypeSpec: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			assetModelCompositeModelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssetModelsResponse {

		/** Required */
		assetModelSummaries: Array<AssetModelSummary>;
		nextToken?: string;
	}
	export interface ListAssetModelsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssetModelsResponseFormGroup() {
		return new FormGroup<ListAssetModelsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of an asset model. */
	export interface AssetModelSummary {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		description: string;

		/** Required */
		creationDate: Date;

		/** Required */
		lastUpdateDate: Date;

		/** Required */
		status: AssetModelStatus;
	}

	/** Contains a summary of an asset model. */
	export interface AssetModelSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateAssetModelSummaryFormGroup() {
		return new FormGroup<AssetModelSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListAssetPropertiesResponse {

		/** Required */
		assetPropertySummaries: Array<AssetPropertySummary>;
		nextToken?: string;
	}
	export interface ListAssetPropertiesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssetPropertiesResponseFormGroup() {
		return new FormGroup<ListAssetPropertiesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of a property associated with an asset. */
	export interface AssetPropertySummary {
		id?: string;
		alias?: string;
		unit?: string;

		/** Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>. */
		notification?: PropertyNotification;
		assetCompositeModelId?: string;
	}

	/** Contains a summary of a property associated with an asset. */
	export interface AssetPropertySummaryFormProperties {
		id: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
		assetCompositeModelId: FormControl<string | null | undefined>,
	}
	export function CreateAssetPropertySummaryFormGroup() {
		return new FormGroup<AssetPropertySummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
			assetCompositeModelId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssetRelationshipsResponse {

		/** Required */
		assetRelationshipSummaries: Array<AssetRelationshipSummary>;
		nextToken?: string;
	}
	export interface ListAssetRelationshipsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssetRelationshipsResponseFormGroup() {
		return new FormGroup<ListAssetRelationshipsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about assets that are related to one another. */
	export interface AssetRelationshipSummary {
		hierarchyInfo?: AssetHierarchyInfo;

		/** Required */
		relationshipType: AssetRelationshipType;
	}

	/** Contains information about assets that are related to one another. */
	export interface AssetRelationshipSummaryFormProperties {

		/** Required */
		relationshipType: FormControl<AssetRelationshipType | null | undefined>,
	}
	export function CreateAssetRelationshipSummaryFormGroup() {
		return new FormGroup<AssetRelationshipSummaryFormProperties>({
			relationshipType: new FormControl<AssetRelationshipType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains information about a parent asset and a child asset that are related through an asset hierarchy. */
	export interface AssetHierarchyInfo {
		parentAssetId?: string;
		childAssetId?: string;
	}

	/** Contains information about a parent asset and a child asset that are related through an asset hierarchy. */
	export interface AssetHierarchyInfoFormProperties {
		parentAssetId: FormControl<string | null | undefined>,
		childAssetId: FormControl<string | null | undefined>,
	}
	export function CreateAssetHierarchyInfoFormGroup() {
		return new FormGroup<AssetHierarchyInfoFormProperties>({
			parentAssetId: new FormControl<string | null | undefined>(undefined),
			childAssetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssetRelationshipType { HIERARCHY = 0 }

	export interface ListAssetsResponse {

		/** Required */
		assetSummaries: Array<AssetSummary>;
		nextToken?: string;
	}
	export interface ListAssetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssetsResponseFormGroup() {
		return new FormGroup<ListAssetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of an asset. */
	export interface AssetSummary {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		assetModelId: string;

		/** Required */
		creationDate: Date;

		/** Required */
		lastUpdateDate: Date;

		/** Required */
		status: AssetStatus;

		/** Required */
		hierarchies: Array<AssetHierarchy>;
		description?: string;
	}

	/** Contains a summary of an asset. */
	export interface AssetSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		assetModelId: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdateDate: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateAssetSummaryFormGroup() {
		return new FormGroup<AssetSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssociatedAssetsResponse {

		/** Required */
		assetSummaries: Array<AssociatedAssetsSummary>;
		nextToken?: string;
	}
	export interface ListAssociatedAssetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAssociatedAssetsResponseFormGroup() {
		return new FormGroup<ListAssociatedAssetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of an associated asset. */
	export interface AssociatedAssetsSummary {

		/** Required */
		id: string;

		/** Required */
		arn: string;

		/** Required */
		name: string;

		/** Required */
		assetModelId: string;

		/** Required */
		creationDate: Date;

		/** Required */
		lastUpdateDate: Date;

		/** Required */
		status: AssetStatus;

		/** Required */
		hierarchies: Array<AssetHierarchy>;
		description?: string;
	}

	/** Contains a summary of an associated asset. */
	export interface AssociatedAssetsSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		assetModelId: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdateDate: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateAssociatedAssetsSummaryFormGroup() {
		return new FormGroup<AssociatedAssetsSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBulkImportJobsResponse {

		/** Required */
		jobSummaries: Array<JobSummary>;
		nextToken?: string;
	}
	export interface ListBulkImportJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBulkImportJobsResponseFormGroup() {
		return new FormGroup<ListBulkImportJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a job summary information. */
	export interface JobSummary {

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		status: JobStatus;
	}

	/** Contains a job summary information. */
	export interface JobSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<JobStatus | null | undefined>,
	}
	export function CreateJobSummaryFormGroup() {
		return new FormGroup<JobSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<JobStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDashboardsResponse {

		/** Required */
		dashboardSummaries: Array<DashboardSummary>;
		nextToken?: string;
	}
	export interface ListDashboardsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDashboardsResponseFormGroup() {
		return new FormGroup<ListDashboardsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a dashboard summary. */
	export interface DashboardSummary {

		/** Required */
		id: string;

		/** Required */
		name: string;
		description?: string;
		creationDate?: Date;
		lastUpdateDate?: Date;
	}

	/** Contains a dashboard summary. */
	export interface DashboardSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateDashboardSummaryFormGroup() {
		return new FormGroup<DashboardSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListGatewaysResponse {

		/** Required */
		gatewaySummaries: Array<GatewaySummary>;
		nextToken?: string;
	}
	export interface ListGatewaysResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGatewaysResponseFormGroup() {
		return new FormGroup<ListGatewaysResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of a gateway. */
	export interface GatewaySummary {

		/** Required */
		gatewayId: string;

		/** Required */
		gatewayName: string;

		/** Contains a gateway's platform information. */
		gatewayPlatform?: GatewayPlatform;
		gatewayCapabilitySummaries?: Array<GatewayCapabilitySummary>;

		/** Required */
		creationDate: Date;

		/** Required */
		lastUpdateDate: Date;
	}

	/** Contains a summary of a gateway. */
	export interface GatewaySummaryFormProperties {

		/** Required */
		gatewayId: FormControl<string | null | undefined>,

		/** Required */
		gatewayName: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,

		/** Required */
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateGatewaySummaryFormGroup() {
		return new FormGroup<GatewaySummaryFormProperties>({
			gatewayId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListPortalsResponse {
		portalSummaries?: Array<PortalSummary>;
		nextToken?: string;
	}
	export interface ListPortalsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPortalsResponseFormGroup() {
		return new FormGroup<ListPortalsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a portal summary. */
	export interface PortalSummary {

		/** Required */
		id: string;

		/** Required */
		name: string;
		description?: string;

		/** Required */
		startUrl: string;
		creationDate?: Date;
		lastUpdateDate?: Date;
		roleArn?: string;

		/**
		 * Contains information about the current status of a portal.
		 * Required
		 */
		status: PortalStatus;
	}

	/** Contains a portal summary. */
	export interface PortalSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		startUrl: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreatePortalSummaryFormGroup() {
		return new FormGroup<PortalSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			startUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProjectAssetsResponse {

		/** Required */
		assetIds: Array<string>;
		nextToken?: string;
	}
	export interface ListProjectAssetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectAssetsResponseFormGroup() {
		return new FormGroup<ListProjectAssetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProjectsResponse {

		/** Required */
		projectSummaries: Array<ProjectSummary>;
		nextToken?: string;
	}
	export interface ListProjectsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResponseFormGroup() {
		return new FormGroup<ListProjectsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains project summary information. */
	export interface ProjectSummary {

		/** Required */
		id: string;

		/** Required */
		name: string;
		description?: string;
		creationDate?: Date;
		lastUpdateDate?: Date;
	}

	/** Contains project summary information. */
	export interface ProjectSummaryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		creationDate: FormControl<Date | null | undefined>,
		lastUpdateDate: FormControl<Date | null | undefined>,
	}
	export function CreateProjectSummaryFormGroup() {
		return new FormGroup<ProjectSummaryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			creationDate: new FormControl<Date | null | undefined>(undefined),
			lastUpdateDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface ListTimeSeriesResponse {

		/** Required */
		TimeSeriesSummaries: Array<TimeSeriesSummary>;
		nextToken?: string;
	}
	export interface ListTimeSeriesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTimeSeriesResponseFormGroup() {
		return new FormGroup<ListTimeSeriesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of a time series (data stream). */
	export interface TimeSeriesSummary {
		assetId?: string;
		propertyId?: string;
		alias?: string;

		/** Required */
		timeSeriesId: string;

		/** Required */
		dataType: PropertyDataType;
		dataTypeSpec?: string;

		/** Required */
		timeSeriesCreationDate: Date;

		/** Required */
		timeSeriesLastUpdateDate: Date;

		/** Required */
		timeSeriesArn: string;
	}

	/** Contains a summary of a time series (data stream). */
	export interface TimeSeriesSummaryFormProperties {
		assetId: FormControl<string | null | undefined>,
		propertyId: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,

		/** Required */
		timeSeriesId: FormControl<string | null | undefined>,

		/** Required */
		dataType: FormControl<PropertyDataType | null | undefined>,
		dataTypeSpec: FormControl<string | null | undefined>,

		/** Required */
		timeSeriesCreationDate: FormControl<Date | null | undefined>,

		/** Required */
		timeSeriesLastUpdateDate: FormControl<Date | null | undefined>,

		/** Required */
		timeSeriesArn: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesSummaryFormGroup() {
		return new FormGroup<TimeSeriesSummaryFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined),
			propertyId: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			timeSeriesId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataType: new FormControl<PropertyDataType | null | undefined>(undefined, [Validators.required]),
			dataTypeSpec: new FormControl<string | null | undefined>(undefined),
			timeSeriesCreationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			timeSeriesLastUpdateDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			timeSeriesArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutDefaultEncryptionConfigurationResponse {

		/** Required */
		encryptionType: EncryptionType;
		kmsKeyArn?: string;

		/** Required */
		configurationStatus: ConfigurationStatus;
	}
	export interface PutDefaultEncryptionConfigurationResponseFormProperties {

		/** Required */
		encryptionType: FormControl<EncryptionType | null | undefined>,
		kmsKeyArn: FormControl<string | null | undefined>,
	}
	export function CreatePutDefaultEncryptionConfigurationResponseFormGroup() {
		return new FormGroup<PutDefaultEncryptionConfigurationResponseFormProperties>({
			encryptionType: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			kmsKeyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutLoggingOptionsResponse {
	}
	export interface PutLoggingOptionsResponseFormProperties {
	}
	export function CreatePutLoggingOptionsResponseFormGroup() {
		return new FormGroup<PutLoggingOptionsResponseFormProperties>({
		});

	}

	export interface PutStorageConfigurationResponse {

		/** Required */
		storageType: StorageType;
		multiLayerStorage?: MultiLayerStorage;
		disassociatedDataStorage?: PropertyNotificationState;

		/** How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier. */
		retentionPeriod?: RetentionPeriod;

		/**
		 * Contains current status information for the configuration.
		 * Required
		 */
		configurationStatus: ConfigurationStatus;
	}
	export interface PutStorageConfigurationResponseFormProperties {

		/** Required */
		storageType: FormControl<StorageType | null | undefined>,
		disassociatedDataStorage: FormControl<PropertyNotificationState | null | undefined>,
	}
	export function CreatePutStorageConfigurationResponseFormGroup() {
		return new FormGroup<PutStorageConfigurationResponseFormProperties>({
			storageType: new FormControl<StorageType | null | undefined>(undefined, [Validators.required]),
			disassociatedDataStorage: new FormControl<PropertyNotificationState | null | undefined>(undefined),
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateAccessPolicyResponse {
	}
	export interface UpdateAccessPolicyResponseFormProperties {
	}
	export function CreateUpdateAccessPolicyResponseFormGroup() {
		return new FormGroup<UpdateAccessPolicyResponseFormProperties>({
		});

	}

	export interface UpdateAssetResponse {

		/** Required */
		assetStatus: AssetStatus;
	}
	export interface UpdateAssetResponseFormProperties {
	}
	export function CreateUpdateAssetResponseFormGroup() {
		return new FormGroup<UpdateAssetResponseFormProperties>({
		});

	}

	export interface UpdateAssetModelResponse {

		/** Required */
		assetModelStatus: AssetModelStatus;
	}
	export interface UpdateAssetModelResponseFormProperties {
	}
	export function CreateUpdateAssetModelResponseFormGroup() {
		return new FormGroup<UpdateAssetModelResponseFormProperties>({
		});

	}

	export interface UpdateDashboardResponse {
	}
	export interface UpdateDashboardResponseFormProperties {
	}
	export function CreateUpdateDashboardResponseFormGroup() {
		return new FormGroup<UpdateDashboardResponseFormProperties>({
		});

	}

	export interface UpdateGatewayCapabilityConfigurationResponse {

		/** Required */
		capabilityNamespace: string;

		/** Required */
		capabilitySyncStatus: CapabilitySyncStatus;
	}
	export interface UpdateGatewayCapabilityConfigurationResponseFormProperties {

		/** Required */
		capabilityNamespace: FormControl<string | null | undefined>,

		/** Required */
		capabilitySyncStatus: FormControl<CapabilitySyncStatus | null | undefined>,
	}
	export function CreateUpdateGatewayCapabilityConfigurationResponseFormGroup() {
		return new FormGroup<UpdateGatewayCapabilityConfigurationResponseFormProperties>({
			capabilityNamespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			capabilitySyncStatus: new FormControl<CapabilitySyncStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePortalResponse {

		/** Required */
		portalStatus: PortalStatus;
	}
	export interface UpdatePortalResponseFormProperties {
	}
	export function CreateUpdatePortalResponseFormGroup() {
		return new FormGroup<UpdatePortalResponseFormProperties>({
		});

	}


	/** Contains an image file. */
	export interface ImageFile {

		/** Required */
		data: string;

		/** Required */
		type: ImageFileType;
	}

	/** Contains an image file. */
	export interface ImageFileFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ImageFileType | null | undefined>,
	}
	export function CreateImageFileFormGroup() {
		return new FormGroup<ImageFileFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ImageFileType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProjectResponse {
	}
	export interface UpdateProjectResponseFormProperties {
	}
	export function CreateUpdateProjectResponseFormGroup() {
		return new FormGroup<UpdateProjectResponseFormProperties>({
		});

	}

	export interface AssociateAssetsRequest {

		/** Required */
		hierarchyId: string;

		/** Required */
		childAssetId: string;
		clientToken?: string;
	}
	export interface AssociateAssetsRequestFormProperties {

		/** Required */
		hierarchyId: FormControl<string | null | undefined>,

		/** Required */
		childAssetId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAssetsRequestFormGroup() {
		return new FormGroup<AssociateAssetsRequestFormProperties>({
			hierarchyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			childAssetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateTimeSeriesToAssetPropertyRequest {
		clientToken?: string;
	}
	export interface AssociateTimeSeriesToAssetPropertyRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTimeSeriesToAssetPropertyRequestFormGroup() {
		return new FormGroup<AssociateTimeSeriesToAssetPropertyRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchAssociateProjectAssetsRequest {

		/** Required */
		assetIds: Array<string>;
		clientToken?: string;
	}
	export interface BatchAssociateProjectAssetsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateProjectAssetsRequestFormGroup() {
		return new FormGroup<BatchAssociateProjectAssetsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchDisassociateProjectAssetsRequest {

		/** Required */
		assetIds: Array<string>;
		clientToken?: string;
	}
	export interface BatchDisassociateProjectAssetsRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateProjectAssetsRequestFormGroup() {
		return new FormGroup<BatchDisassociateProjectAssetsRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGetAssetPropertyAggregatesRequest {

		/** Required */
		entries: Array<BatchGetAssetPropertyAggregatesEntry>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface BatchGetAssetPropertyAggregatesRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyAggregatesRequestFormGroup() {
		return new FormGroup<BatchGetAssetPropertyAggregatesRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BatchGetAssetPropertyValueErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, AccessDeniedException = 2 }

	export enum BatchGetAssetPropertyValueHistoryErrorCode { ResourceNotFoundException = 0, InvalidRequestException = 1, AccessDeniedException = 2 }

	export interface BatchGetAssetPropertyValueHistoryRequest {

		/** Required */
		entries: Array<BatchGetAssetPropertyValueHistoryEntry>;
		nextToken?: string;
		maxResults?: number | null;
	}
	export interface BatchGetAssetPropertyValueHistoryRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueHistoryRequestFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueHistoryRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BatchGetAssetPropertyValueRequest {

		/** Required */
		entries: Array<BatchGetAssetPropertyValueEntry>;
		nextToken?: string;
	}
	export interface BatchGetAssetPropertyValueRequestFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueRequestFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueRequestFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchPutAssetPropertyValueRequest {

		/** Required */
		entries: Array<PutAssetPropertyValueEntry>;
	}
	export interface BatchPutAssetPropertyValueRequestFormProperties {
	}
	export function CreateBatchPutAssetPropertyValueRequestFormGroup() {
		return new FormGroup<BatchPutAssetPropertyValueRequestFormProperties>({
		});

	}

	export interface CreateAccessPolicyRequest {

		/** Required */
		accessPolicyIdentity: Identity;

		/** Required */
		accessPolicyResource: Resource;

		/** Required */
		accessPolicyPermission: Permission;
		clientToken?: string;
		tags?: TagMap;
	}
	export interface CreateAccessPolicyRequestFormProperties {

		/** Required */
		accessPolicyPermission: FormControl<Permission | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAccessPolicyRequestFormGroup() {
		return new FormGroup<CreateAccessPolicyRequestFormProperties>({
			accessPolicyPermission: new FormControl<Permission | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssetModelRequest {

		/** Required */
		assetModelName: string;
		assetModelDescription?: string;
		assetModelProperties?: Array<AssetModelPropertyDefinition>;
		assetModelHierarchies?: Array<AssetModelHierarchyDefinition>;
		assetModelCompositeModels?: Array<AssetModelCompositeModelDefinition>;
		clientToken?: string;
		tags?: TagMap;
	}
	export interface CreateAssetModelRequestFormProperties {

		/** Required */
		assetModelName: FormControl<string | null | undefined>,
		assetModelDescription: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetModelRequestFormGroup() {
		return new FormGroup<CreateAssetModelRequestFormProperties>({
			assetModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateAssetRequest {

		/** Required */
		assetName: string;

		/** Required */
		assetModelId: string;
		clientToken?: string;
		tags?: TagMap;
		assetDescription?: string;
	}
	export interface CreateAssetRequestFormProperties {

		/** Required */
		assetName: FormControl<string | null | undefined>,

		/** Required */
		assetModelId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		assetDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetRequestFormGroup() {
		return new FormGroup<CreateAssetRequestFormProperties>({
			assetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			assetDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBulkImportJobRequest {

		/** Required */
		jobName: string;

		/** Required */
		jobRoleArn: string;

		/** Required */
		files: Array<File>;

		/** Required */
		errorReportLocation: ErrorReportLocation;

		/** Required */
		jobConfiguration: JobConfiguration;
	}
	export interface CreateBulkImportJobRequestFormProperties {

		/** Required */
		jobName: FormControl<string | null | undefined>,

		/** Required */
		jobRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBulkImportJobRequestFormGroup() {
		return new FormGroup<CreateBulkImportJobRequestFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDashboardRequest {

		/** Required */
		projectId: string;

		/** Required */
		dashboardName: string;
		dashboardDescription?: string;

		/** Required */
		dashboardDefinition: string;
		clientToken?: string;
		tags?: TagMap;
	}
	export interface CreateDashboardRequestFormProperties {

		/** Required */
		projectId: FormControl<string | null | undefined>,

		/** Required */
		dashboardName: FormControl<string | null | undefined>,
		dashboardDescription: FormControl<string | null | undefined>,

		/** Required */
		dashboardDefinition: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDashboardRequestFormGroup() {
		return new FormGroup<CreateDashboardRequestFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dashboardName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dashboardDescription: new FormControl<string | null | undefined>(undefined),
			dashboardDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGatewayRequest {

		/** Required */
		gatewayName: string;

		/** Required */
		gatewayPlatform: GatewayPlatform;
		tags?: TagMap;
	}
	export interface CreateGatewayRequestFormProperties {

		/** Required */
		gatewayName: FormControl<string | null | undefined>,
	}
	export function CreateCreateGatewayRequestFormGroup() {
		return new FormGroup<CreateGatewayRequestFormProperties>({
			gatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatePortalRequest {

		/** Required */
		portalName: string;
		portalDescription?: string;

		/** Required */
		portalContactEmail: string;
		clientToken?: string;
		portalLogoImageFile?: ImageFile;

		/** Required */
		roleArn: string;
		tags?: TagMap;
		portalAuthMode?: AuthMode;
		notificationSenderEmail?: string;
		alarms?: Alarms;
	}
	export interface CreatePortalRequestFormProperties {

		/** Required */
		portalName: FormControl<string | null | undefined>,
		portalDescription: FormControl<string | null | undefined>,

		/** Required */
		portalContactEmail: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		portalAuthMode: FormControl<AuthMode | null | undefined>,
		notificationSenderEmail: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortalRequestFormGroup() {
		return new FormGroup<CreatePortalRequestFormProperties>({
			portalName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalDescription: new FormControl<string | null | undefined>(undefined),
			portalContactEmail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalAuthMode: new FormControl<AuthMode | null | undefined>(undefined),
			notificationSenderEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProjectRequest {

		/** Required */
		portalId: string;

		/** Required */
		projectName: string;
		projectDescription?: string;
		clientToken?: string;
		tags?: TagMap;
	}
	export interface CreateProjectRequestFormProperties {

		/** Required */
		portalId: FormControl<string | null | undefined>,

		/** Required */
		projectName: FormControl<string | null | undefined>,
		projectDescription: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			portalId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteAccessPolicyRequest {
	}
	export interface DeleteAccessPolicyRequestFormProperties {
	}
	export function CreateDeleteAccessPolicyRequestFormGroup() {
		return new FormGroup<DeleteAccessPolicyRequestFormProperties>({
		});

	}

	export interface DeleteAssetModelRequest {
	}
	export interface DeleteAssetModelRequestFormProperties {
	}
	export function CreateDeleteAssetModelRequestFormGroup() {
		return new FormGroup<DeleteAssetModelRequestFormProperties>({
		});

	}

	export interface DeleteAssetRequest {
	}
	export interface DeleteAssetRequestFormProperties {
	}
	export function CreateDeleteAssetRequestFormGroup() {
		return new FormGroup<DeleteAssetRequestFormProperties>({
		});

	}

	export interface DeleteDashboardRequest {
	}
	export interface DeleteDashboardRequestFormProperties {
	}
	export function CreateDeleteDashboardRequestFormGroup() {
		return new FormGroup<DeleteDashboardRequestFormProperties>({
		});

	}

	export interface DeleteGatewayRequest {
	}
	export interface DeleteGatewayRequestFormProperties {
	}
	export function CreateDeleteGatewayRequestFormGroup() {
		return new FormGroup<DeleteGatewayRequestFormProperties>({
		});

	}

	export interface DeletePortalRequest {
	}
	export interface DeletePortalRequestFormProperties {
	}
	export function CreateDeletePortalRequestFormGroup() {
		return new FormGroup<DeletePortalRequestFormProperties>({
		});

	}

	export interface DeleteProjectRequest {
	}
	export interface DeleteProjectRequestFormProperties {
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
		});

	}

	export interface DeleteTimeSeriesRequest {
		clientToken?: string;
	}
	export interface DeleteTimeSeriesRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTimeSeriesRequestFormGroup() {
		return new FormGroup<DeleteTimeSeriesRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeAccessPolicyRequest {
	}
	export interface DescribeAccessPolicyRequestFormProperties {
	}
	export function CreateDescribeAccessPolicyRequestFormGroup() {
		return new FormGroup<DescribeAccessPolicyRequestFormProperties>({
		});

	}

	export interface DescribeAssetModelRequest {
	}
	export interface DescribeAssetModelRequestFormProperties {
	}
	export function CreateDescribeAssetModelRequestFormGroup() {
		return new FormGroup<DescribeAssetModelRequestFormProperties>({
		});

	}

	export interface DescribeAssetPropertyRequest {
	}
	export interface DescribeAssetPropertyRequestFormProperties {
	}
	export function CreateDescribeAssetPropertyRequestFormGroup() {
		return new FormGroup<DescribeAssetPropertyRequestFormProperties>({
		});

	}

	export interface DescribeAssetRequest {
	}
	export interface DescribeAssetRequestFormProperties {
	}
	export function CreateDescribeAssetRequestFormGroup() {
		return new FormGroup<DescribeAssetRequestFormProperties>({
		});

	}

	export interface DescribeBulkImportJobRequest {
	}
	export interface DescribeBulkImportJobRequestFormProperties {
	}
	export function CreateDescribeBulkImportJobRequestFormGroup() {
		return new FormGroup<DescribeBulkImportJobRequestFormProperties>({
		});

	}

	export interface DescribeDashboardRequest {
	}
	export interface DescribeDashboardRequestFormProperties {
	}
	export function CreateDescribeDashboardRequestFormGroup() {
		return new FormGroup<DescribeDashboardRequestFormProperties>({
		});

	}

	export interface DescribeDefaultEncryptionConfigurationRequest {
	}
	export interface DescribeDefaultEncryptionConfigurationRequestFormProperties {
	}
	export function CreateDescribeDefaultEncryptionConfigurationRequestFormGroup() {
		return new FormGroup<DescribeDefaultEncryptionConfigurationRequestFormProperties>({
		});

	}

	export interface DescribeGatewayCapabilityConfigurationRequest {
	}
	export interface DescribeGatewayCapabilityConfigurationRequestFormProperties {
	}
	export function CreateDescribeGatewayCapabilityConfigurationRequestFormGroup() {
		return new FormGroup<DescribeGatewayCapabilityConfigurationRequestFormProperties>({
		});

	}

	export interface DescribeGatewayRequest {
	}
	export interface DescribeGatewayRequestFormProperties {
	}
	export function CreateDescribeGatewayRequestFormGroup() {
		return new FormGroup<DescribeGatewayRequestFormProperties>({
		});

	}

	export interface DescribeLoggingOptionsRequest {
	}
	export interface DescribeLoggingOptionsRequestFormProperties {
	}
	export function CreateDescribeLoggingOptionsRequestFormGroup() {
		return new FormGroup<DescribeLoggingOptionsRequestFormProperties>({
		});

	}

	export interface DescribePortalRequest {
	}
	export interface DescribePortalRequestFormProperties {
	}
	export function CreateDescribePortalRequestFormGroup() {
		return new FormGroup<DescribePortalRequestFormProperties>({
		});

	}

	export interface DescribeProjectRequest {
	}
	export interface DescribeProjectRequestFormProperties {
	}
	export function CreateDescribeProjectRequestFormGroup() {
		return new FormGroup<DescribeProjectRequestFormProperties>({
		});

	}

	export interface DescribeStorageConfigurationRequest {
	}
	export interface DescribeStorageConfigurationRequestFormProperties {
	}
	export function CreateDescribeStorageConfigurationRequestFormGroup() {
		return new FormGroup<DescribeStorageConfigurationRequestFormProperties>({
		});

	}

	export enum DisassociatedDataStorageState { ENABLED = 0, DISABLED = 1 }

	export interface DescribeTimeSeriesRequest {
	}
	export interface DescribeTimeSeriesRequestFormProperties {
	}
	export function CreateDescribeTimeSeriesRequestFormGroup() {
		return new FormGroup<DescribeTimeSeriesRequestFormProperties>({
		});

	}

	export interface DisassociateAssetsRequest {

		/** Required */
		hierarchyId: string;

		/** Required */
		childAssetId: string;
		clientToken?: string;
	}
	export interface DisassociateAssetsRequestFormProperties {

		/** Required */
		hierarchyId: FormControl<string | null | undefined>,

		/** Required */
		childAssetId: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAssetsRequestFormGroup() {
		return new FormGroup<DisassociateAssetsRequestFormProperties>({
			hierarchyId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			childAssetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateTimeSeriesFromAssetPropertyRequest {
		clientToken?: string;
	}
	export interface DisassociateTimeSeriesFromAssetPropertyRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateTimeSeriesFromAssetPropertyRequestFormGroup() {
		return new FormGroup<DisassociateTimeSeriesFromAssetPropertyRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetAssetPropertyAggregatesRequest {
	}
	export interface GetAssetPropertyAggregatesRequestFormProperties {
	}
	export function CreateGetAssetPropertyAggregatesRequestFormGroup() {
		return new FormGroup<GetAssetPropertyAggregatesRequestFormProperties>({
		});

	}

	export interface GetAssetPropertyValueHistoryRequest {
	}
	export interface GetAssetPropertyValueHistoryRequestFormProperties {
	}
	export function CreateGetAssetPropertyValueHistoryRequestFormGroup() {
		return new FormGroup<GetAssetPropertyValueHistoryRequestFormProperties>({
		});

	}

	export interface GetAssetPropertyValueRequest {
	}
	export interface GetAssetPropertyValueRequestFormProperties {
	}
	export function CreateGetAssetPropertyValueRequestFormGroup() {
		return new FormGroup<GetAssetPropertyValueRequestFormProperties>({
		});

	}

	export interface GetInterpolatedAssetPropertyValuesRequest {
	}
	export interface GetInterpolatedAssetPropertyValuesRequestFormProperties {
	}
	export function CreateGetInterpolatedAssetPropertyValuesRequestFormGroup() {
		return new FormGroup<GetInterpolatedAssetPropertyValuesRequestFormProperties>({
		});

	}

	export enum IdentityType { USER = 0, GROUP = 1, IAM = 2 }


	/** <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul> */
	export interface Image {
		id?: string;

		/** Contains an image file. */
		file?: ImageFile;
	}

	/** <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul> */
	export interface ImageFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceType { PORTAL = 0, PROJECT = 1 }

	export interface ListAccessPoliciesRequest {
	}
	export interface ListAccessPoliciesRequestFormProperties {
	}
	export function CreateListAccessPoliciesRequestFormGroup() {
		return new FormGroup<ListAccessPoliciesRequestFormProperties>({
		});

	}

	export enum ListAssetModelPropertiesFilter { ALL = 0, BASE = 1 }

	export interface ListAssetModelPropertiesRequest {
	}
	export interface ListAssetModelPropertiesRequestFormProperties {
	}
	export function CreateListAssetModelPropertiesRequestFormGroup() {
		return new FormGroup<ListAssetModelPropertiesRequestFormProperties>({
		});

	}

	export interface ListAssetModelsRequest {
	}
	export interface ListAssetModelsRequestFormProperties {
	}
	export function CreateListAssetModelsRequestFormGroup() {
		return new FormGroup<ListAssetModelsRequestFormProperties>({
		});

	}

	export enum ListAssetPropertiesFilter { ALL = 0, BASE = 1 }

	export interface ListAssetPropertiesRequest {
	}
	export interface ListAssetPropertiesRequestFormProperties {
	}
	export function CreateListAssetPropertiesRequestFormGroup() {
		return new FormGroup<ListAssetPropertiesRequestFormProperties>({
		});

	}

	export enum TraversalType { PATH_TO_ROOT = 0 }

	export interface ListAssetRelationshipsRequest {
	}
	export interface ListAssetRelationshipsRequestFormProperties {
	}
	export function CreateListAssetRelationshipsRequestFormGroup() {
		return new FormGroup<ListAssetRelationshipsRequestFormProperties>({
		});

	}

	export enum ListAssetsFilter { ALL = 0, TOP_LEVEL = 1 }

	export interface ListAssetsRequest {
	}
	export interface ListAssetsRequestFormProperties {
	}
	export function CreateListAssetsRequestFormGroup() {
		return new FormGroup<ListAssetsRequestFormProperties>({
		});

	}

	export enum TraversalDirection { PARENT = 0, CHILD = 1 }

	export interface ListAssociatedAssetsRequest {
	}
	export interface ListAssociatedAssetsRequestFormProperties {
	}
	export function CreateListAssociatedAssetsRequestFormGroup() {
		return new FormGroup<ListAssociatedAssetsRequestFormProperties>({
		});

	}

	export enum ListBulkImportJobsFilter { ALL = 0, PENDING = 1, RUNNING = 2, CANCELLED = 3, FAILED = 4, COMPLETED_WITH_FAILURES = 5, COMPLETED = 6 }

	export interface ListBulkImportJobsRequest {
	}
	export interface ListBulkImportJobsRequestFormProperties {
	}
	export function CreateListBulkImportJobsRequestFormGroup() {
		return new FormGroup<ListBulkImportJobsRequestFormProperties>({
		});

	}

	export interface ListDashboardsRequest {
	}
	export interface ListDashboardsRequestFormProperties {
	}
	export function CreateListDashboardsRequestFormGroup() {
		return new FormGroup<ListDashboardsRequestFormProperties>({
		});

	}

	export interface ListGatewaysRequest {
	}
	export interface ListGatewaysRequestFormProperties {
	}
	export function CreateListGatewaysRequestFormGroup() {
		return new FormGroup<ListGatewaysRequestFormProperties>({
		});

	}

	export interface ListPortalsRequest {
	}
	export interface ListPortalsRequestFormProperties {
	}
	export function CreateListPortalsRequestFormGroup() {
		return new FormGroup<ListPortalsRequestFormProperties>({
		});

	}

	export interface ListProjectAssetsRequest {
	}
	export interface ListProjectAssetsRequestFormProperties {
	}
	export function CreateListProjectAssetsRequestFormGroup() {
		return new FormGroup<ListProjectAssetsRequestFormProperties>({
		});

	}

	export interface ListProjectsRequest {
	}
	export interface ListProjectsRequestFormProperties {
	}
	export function CreateListProjectsRequestFormGroup() {
		return new FormGroup<ListProjectsRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export enum ListTimeSeriesType { ASSOCIATED = 0, DISASSOCIATED = 1 }

	export interface ListTimeSeriesRequest {
	}
	export interface ListTimeSeriesRequestFormProperties {
	}
	export function CreateListTimeSeriesRequestFormGroup() {
		return new FormGroup<ListTimeSeriesRequestFormProperties>({
		});

	}

	export interface PutDefaultEncryptionConfigurationRequest {

		/** Required */
		encryptionType: EncryptionType;
		kmsKeyId?: string;
	}
	export interface PutDefaultEncryptionConfigurationRequestFormProperties {

		/** Required */
		encryptionType: FormControl<EncryptionType | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreatePutDefaultEncryptionConfigurationRequestFormGroup() {
		return new FormGroup<PutDefaultEncryptionConfigurationRequestFormProperties>({
			encryptionType: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutLoggingOptionsRequest {

		/** Required */
		loggingOptions: LoggingOptions;
	}
	export interface PutLoggingOptionsRequestFormProperties {
	}
	export function CreatePutLoggingOptionsRequestFormGroup() {
		return new FormGroup<PutLoggingOptionsRequestFormProperties>({
		});

	}

	export interface PutStorageConfigurationRequest {

		/** Required */
		storageType: StorageType;
		multiLayerStorage?: MultiLayerStorage;
		disassociatedDataStorage?: PropertyNotificationState;

		/** How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier. */
		retentionPeriod?: RetentionPeriod;
	}
	export interface PutStorageConfigurationRequestFormProperties {

		/** Required */
		storageType: FormControl<StorageType | null | undefined>,
		disassociatedDataStorage: FormControl<PropertyNotificationState | null | undefined>,
	}
	export function CreatePutStorageConfigurationRequestFormGroup() {
		return new FormGroup<PutStorageConfigurationRequestFormProperties>({
			storageType: new FormControl<StorageType | null | undefined>(undefined, [Validators.required]),
			disassociatedDataStorage: new FormControl<PropertyNotificationState | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateAccessPolicyRequest {

		/** Required */
		accessPolicyIdentity: Identity;

		/** Required */
		accessPolicyResource: Resource;

		/** Required */
		accessPolicyPermission: Permission;
		clientToken?: string;
	}
	export interface UpdateAccessPolicyRequestFormProperties {

		/** Required */
		accessPolicyPermission: FormControl<Permission | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccessPolicyRequestFormGroup() {
		return new FormGroup<UpdateAccessPolicyRequestFormProperties>({
			accessPolicyPermission: new FormControl<Permission | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssetModelRequest {

		/** Required */
		assetModelName: string;
		assetModelDescription?: string;
		assetModelProperties?: Array<AssetModelProperty>;
		assetModelHierarchies?: Array<AssetModelHierarchy>;
		assetModelCompositeModels?: Array<AssetModelCompositeModel>;
		clientToken?: string;
	}
	export interface UpdateAssetModelRequestFormProperties {

		/** Required */
		assetModelName: FormControl<string | null | undefined>,
		assetModelDescription: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetModelRequestFormGroup() {
		return new FormGroup<UpdateAssetModelRequestFormProperties>({
			assetModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			assetModelDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssetPropertyRequest {
		propertyAlias?: string;
		propertyNotificationState?: PropertyNotificationState;
		clientToken?: string;
		propertyUnit?: string;
	}
	export interface UpdateAssetPropertyRequestFormProperties {
		propertyAlias: FormControl<string | null | undefined>,
		propertyNotificationState: FormControl<PropertyNotificationState | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		propertyUnit: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetPropertyRequestFormGroup() {
		return new FormGroup<UpdateAssetPropertyRequestFormProperties>({
			propertyAlias: new FormControl<string | null | undefined>(undefined),
			propertyNotificationState: new FormControl<PropertyNotificationState | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
			propertyUnit: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateAssetRequest {

		/** Required */
		assetName: string;
		clientToken?: string;
		assetDescription?: string;
	}
	export interface UpdateAssetRequestFormProperties {

		/** Required */
		assetName: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		assetDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetRequestFormGroup() {
		return new FormGroup<UpdateAssetRequestFormProperties>({
			assetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			assetDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDashboardRequest {

		/** Required */
		dashboardName: string;
		dashboardDescription?: string;

		/** Required */
		dashboardDefinition: string;
		clientToken?: string;
	}
	export interface UpdateDashboardRequestFormProperties {

		/** Required */
		dashboardName: FormControl<string | null | undefined>,
		dashboardDescription: FormControl<string | null | undefined>,

		/** Required */
		dashboardDefinition: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDashboardRequestFormGroup() {
		return new FormGroup<UpdateDashboardRequestFormProperties>({
			dashboardName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dashboardDescription: new FormControl<string | null | undefined>(undefined),
			dashboardDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGatewayCapabilityConfigurationRequest {

		/** Required */
		capabilityNamespace: string;

		/** Required */
		capabilityConfiguration: string;
	}
	export interface UpdateGatewayCapabilityConfigurationRequestFormProperties {

		/** Required */
		capabilityNamespace: FormControl<string | null | undefined>,

		/** Required */
		capabilityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayCapabilityConfigurationRequestFormGroup() {
		return new FormGroup<UpdateGatewayCapabilityConfigurationRequestFormProperties>({
			capabilityNamespace: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			capabilityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateGatewayRequest {

		/** Required */
		gatewayName: string;
	}
	export interface UpdateGatewayRequestFormProperties {

		/** Required */
		gatewayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayRequestFormGroup() {
		return new FormGroup<UpdateGatewayRequestFormProperties>({
			gatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePortalRequest {

		/** Required */
		portalName: string;
		portalDescription?: string;

		/** Required */
		portalContactEmail: string;

		/** <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul> */
		portalLogoImage?: Image;

		/** Required */
		roleArn: string;
		clientToken?: string;
		notificationSenderEmail?: string;
		alarms?: Alarms;
	}
	export interface UpdatePortalRequestFormProperties {

		/** Required */
		portalName: FormControl<string | null | undefined>,
		portalDescription: FormControl<string | null | undefined>,

		/** Required */
		portalContactEmail: FormControl<string | null | undefined>,

		/** Required */
		roleArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
		notificationSenderEmail: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortalRequestFormGroup() {
		return new FormGroup<UpdatePortalRequestFormProperties>({
			portalName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			portalDescription: new FormControl<string | null | undefined>(undefined),
			portalContactEmail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			notificationSenderEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectRequest {

		/** Required */
		projectName: string;
		projectDescription?: string;
		clientToken?: string;
	}
	export interface UpdateProjectRequestFormProperties {

		/** Required */
		projectName: FormControl<string | null | undefined>,
		projectDescription: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectRequestFormGroup() {
		return new FormGroup<UpdateProjectRequestFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			projectDescription: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Associates a child asset with the given parent asset through a hierarchy defined in the parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the <i>IoT SiteWise User Guide</i>.
		 * Post assets/{assetId}/associate
		 * @param {string} assetId The ID of the parent asset.
		 * @return {void} Success
		 */
		AssociateAssets(assetId: string, requestBody: AssociateAssetsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/associate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a time series (data stream) with an asset property.
		 * Post timeseries/associate/#alias&assetId&propertyId
		 * @param {string} alias The alias that identifies the time series.
		 * @param {string} assetId The ID of the asset in which the asset property was created.
		 * @param {string} propertyId The ID of the asset property.
		 * @return {void} Success
		 */
		AssociateTimeSeriesToAssetProperty(alias: string, assetId: string, propertyId: string, requestBody: AssociateTimeSeriesToAssetPropertyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'timeseries/associate/#alias&assetId&propertyId?alias=' + (alias == null ? '' : encodeURIComponent(alias)) + '&assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Associates a group (batch) of assets with an IoT SiteWise Monitor project.
		 * Post projects/{projectId}/assets/associate
		 * @param {string} projectId The ID of the project to which to associate the assets.
		 * @return {BatchAssociateProjectAssetsResponse} Success
		 */
		BatchAssociateProjectAssets(projectId: string, requestBody: BatchAssociateProjectAssetsPostBody): Observable<BatchAssociateProjectAssetsResponse> {
			return this.http.post<BatchAssociateProjectAssetsResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/assets/associate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.
		 * Post projects/{projectId}/assets/disassociate
		 * @param {string} projectId The ID of the project from which to disassociate the assets.
		 * @return {BatchDisassociateProjectAssetsResponse} Success
		 */
		BatchDisassociateProjectAssets(projectId: string, requestBody: BatchDisassociateProjectAssetsPostBody): Observable<BatchDisassociateProjectAssetsResponse> {
			return this.http.post<BatchDisassociateProjectAssetsResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/assets/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets aggregated values (for example, average, minimum, and maximum) for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.
		 * Post properties/batch/aggregates
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {BatchGetAssetPropertyAggregatesResponse} Success
		 */
		BatchGetAssetPropertyAggregates(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: BatchGetAssetPropertyAggregatesPostBody): Observable<BatchGetAssetPropertyAggregatesResponse> {
			return this.http.post<BatchGetAssetPropertyAggregatesResponse>(this.baseUri + 'properties/batch/aggregates?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the current value for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.
		 * Post properties/batch/latest
		 * @param {string} nextToken Pagination token
		 * @return {BatchGetAssetPropertyValueResponse} Success
		 */
		BatchGetAssetPropertyValue(nextToken: string | null | undefined, requestBody: BatchGetAssetPropertyValuePostBody): Observable<BatchGetAssetPropertyValueResponse> {
			return this.http.post<BatchGetAssetPropertyValueResponse>(this.baseUri + 'properties/batch/latest?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the historical values for one or more asset properties. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.
		 * Post properties/batch/history
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {BatchGetAssetPropertyValueHistoryResponse} Success
		 */
		BatchGetAssetPropertyValueHistory(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: BatchGetAssetPropertyValueHistoryPostBody): Observable<BatchGetAssetPropertyValueHistoryResponse> {
			return this.http.post<BatchGetAssetPropertyValueHistoryResponse>(this.baseUri + 'properties/batch/history?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul> <important> <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps outside of the inclusive range of [-7 days, +10 minutes] and returns a <code>TimestampOutOfRangeException</code> error.</p> <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>, then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p> </important> <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the <i>IoT SiteWise User Guide</i>.</p>
		 * Post properties
		 * @return {BatchPutAssetPropertyValueResponse} Success
		 */
		BatchPutAssetPropertyValue(requestBody: BatchPutAssetPropertyValuePostBody): Observable<BatchPutAssetPropertyValueResponse> {
			return this.http.post<BatchPutAssetPropertyValueResponse>(this.baseUri + 'properties', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
		 * Post access-policies
		 * @return {void} 
		 */
		CreateAccessPolicy(requestBody: CreateAccessPolicyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'access-policies', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of access policies for an identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).
		 * Get access-policies
		 * @param {IdentityType} identityType The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required if you specify <code>identityId</code>.
		 * @param {string} identityId The ID of the identity. This parameter is required if you specify <code>USER</code> or <code>GROUP</code> for <code>identityType</code>.
		 * @param {ResourceType} resourceType The type of resource (portal or project). This parameter is required if you specify <code>resourceId</code>.
		 * @param {string} resourceId The ID of the resource. This parameter is required if you specify <code>resourceType</code>.
		 * @param {string} iamArn The ARN of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the <i>IAM User Guide</i>. This parameter is required if you specify <code>IAM</code> for <code>identityType</code>.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
		 * @return {ListAccessPoliciesResponse} Success
		 */
		ListAccessPolicies(identityType: IdentityType | null | undefined, identityId: string | null | undefined, resourceType: ResourceType | null | undefined, resourceId: string | null | undefined, iamArn: string | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAccessPoliciesResponse> {
			return this.http.get<ListAccessPoliciesResponse>(this.baseUri + 'access-policies?identityType=' + identityType + '&identityId=' + (identityId == null ? '' : encodeURIComponent(identityId)) + '&resourceType=' + resourceType + '&resourceId=' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '&iamArn=' + (iamArn == null ? '' : encodeURIComponent(iamArn)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the <i>IoT SiteWise User Guide</i>.
		 * Post assets
		 * @return {void} 
		 */
		CreateAsset(requestBody: CreateAssetPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'assets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves a paginated list of asset summaries.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List assets based on a specific asset model.</p> </li> <li> <p>List top-level assets.</p> </li> </ul> <p>You can't use this operation to list all assets. To retrieve summaries for all of your assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all assets for each asset model.</p>
		 * Get assets
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
		 * @param {string} assetModelId The ID of the asset model by which to filter the list of assets. This parameter is required if you choose <code>ALL</code> for <code>filter</code>.
		 * @param {ListAssetsFilter} filter <p>The filter for the requested list of assets. Choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all assets for a given asset model ID. The <code>assetModelId</code> parameter is required if you filter by <code>ALL</code>.</p> </li> <li> <p> <code>TOP_LEVEL</code> – The list includes only top-level assets in the asset hierarchy tree.</p> </li> </ul> <p>Default: <code>ALL</code> </p>
		 * @return {ListAssetsResponse} Success
		 */
		ListAssets(nextToken: string | null | undefined, maxResults: number | null | undefined, assetModelId: string | null | undefined, filter: ListAssetsFilter | null | undefined): Observable<ListAssetsResponse> {
			return this.http.get<ListAssetsResponse>(this.baseUri + 'assets?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&assetModelId=' + (assetModelId == null ? '' : encodeURIComponent(assetModelId)) + '&filter=' + filter, {});
		}

		/**
		 * Creates an asset model from specified property and hierarchy definitions. You create assets from asset models. With asset models, you can easily create assets of the same type that have standardized definitions. Each asset created from a model inherits the asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the <i>IoT SiteWise User Guide</i>.
		 * Post asset-models
		 * @return {void} 
		 */
		CreateAssetModel(requestBody: CreateAssetModelPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'asset-models', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of summaries of all asset models.
		 * Get asset-models
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
		 * @return {ListAssetModelsResponse} Success
		 */
		ListAssetModels(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssetModelsResponse> {
			return this.http.get<ListAssetModelsResponse>(this.baseUri + 'asset-models?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Defines a job to ingest data to IoT SiteWise from Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/CreateBulkImportJob.html">Create a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p> <important> <p>You must enable IoT SiteWise to export data to Amazon S3 before you create a bulk import job. For more information about how to configure storage settings, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_PutStorageConfiguration.html">PutStorageConfiguration</a>.</p> </important>
		 * Post jobs
		 * @return {void} 
		 */
		CreateBulkImportJob(requestBody: CreateBulkImportJobPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'jobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of bulk import job requests. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ListBulkImportJobs.html">List bulk import jobs (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
		 * Get jobs
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to return for each paginated request.
		 * @param {ListBulkImportJobsFilter} filter You can use a filter to select the bulk import jobs that you want to retrieve.
		 * @return {ListBulkImportJobsResponse} Success
		 */
		ListBulkImportJobs(nextToken: string | null | undefined, maxResults: number | null | undefined, filter: ListBulkImportJobsFilter | null | undefined): Observable<ListBulkImportJobsResponse> {
			return this.http.get<ListBulkImportJobsResponse>(this.baseUri + 'jobs?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&filter=' + filter, {});
		}

		/**
		 * Creates a dashboard in an IoT SiteWise Monitor project.
		 * Post dashboards
		 * @return {void} 
		 */
		CreateDashboard(requestBody: CreateDashboardPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dashboards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the <i>IoT SiteWise User Guide</i>.
		 * Post 20200301/gateways
		 * @return {void} 
		 */
		CreateGateway(requestBody: CreateGatewayPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '20200301/gateways', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of gateways.
		 * Get 20200301/gateways
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
		 * @return {ListGatewaysResponse} Success
		 */
		ListGateways(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListGatewaysResponse> {
			return this.http.get<ListGatewaysResponse>(this.baseUri + '20200301/gateways?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses IAM Identity Center or IAM to authenticate portal users and manage user permissions.</p> <note> <p>Before you can sign in to a new portal, you must add at least one identity to that portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal administrators</a> in the <i>IoT SiteWise User Guide</i>.</p> </note>
		 * Post portals
		 * @return {void} 
		 */
		CreatePortal(requestBody: CreatePortalPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'portals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a paginated list of IoT SiteWise Monitor portals.
		 * Get portals
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
		 * @return {ListPortalsResponse} Success
		 */
		ListPortals(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListPortalsResponse> {
			return this.http.get<ListPortalsResponse>(this.baseUri + 'portals?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Creates a project in the specified portal.</p> <note> <p>Make sure that the project name and description don't contain confidential information.</p> </note>
		 * Post projects
		 * @return {void} 
		 */
		CreateProject(requestBody: CreateProjectPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an access policy that grants the specified identity access to the specified IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor resource.
		 * Delete access-policies/{accessPolicyId}
		 * @param {string} accessPolicyId The ID of the access policy to be deleted.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeleteAccessPolicy(accessPolicyId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'access-policies/' + (accessPolicyId == null ? '' : encodeURIComponent(accessPolicyId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.
		 * Get access-policies/{accessPolicyId}
		 * @param {string} accessPolicyId The ID of the access policy.
		 * @return {DescribeAccessPolicyResponse} Success
		 */
		DescribeAccessPolicy(accessPolicyId: string): Observable<DescribeAccessPolicyResponse> {
			return this.http.get<DescribeAccessPolicyResponse>(this.baseUri + 'access-policies/' + (accessPolicyId == null ? '' : encodeURIComponent(accessPolicyId)), {});
		}

		/**
		 * Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor portal or project resource.
		 * Put access-policies/{accessPolicyId}
		 * @param {string} accessPolicyId The ID of the access policy.
		 * @return {UpdateAccessPolicyResponse} Success
		 */
		UpdateAccessPolicy(accessPolicyId: string, requestBody: UpdateAccessPolicyPutBody): Observable<UpdateAccessPolicyResponse> {
			return this.http.put<UpdateAccessPolicyResponse>(this.baseUri + 'access-policies/' + (accessPolicyId == null ? '' : encodeURIComponent(accessPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>. </p> <note> <p>You can't delete an asset that's associated to another asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p> </note>
		 * Delete assets/{assetId}
		 * @param {string} assetId The ID of the asset to delete.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeleteAsset(assetId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an asset.
		 * Get assets/{assetId}
		 * @param {string} assetId The ID of the asset.
		 * @param {boolean} excludeProperties  Whether or not to exclude asset properties from the response. 
		 * @return {DescribeAssetResponse} Success
		 */
		DescribeAsset(assetId: string, excludeProperties: boolean | null | undefined): Observable<DescribeAssetResponse> {
			return this.http.get<DescribeAssetResponse>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&excludeProperties=' + excludeProperties, {});
		}

		/**
		 * Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.
		 * Put assets/{assetId}
		 * @param {string} assetId The ID of the asset to update.
		 * @return {void} 
		 */
		UpdateAsset(assetId: string, requestBody: UpdateAssetPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes an asset model. This action can't be undone. You must delete all assets created from an asset model before you can delete the model. Also, you can't delete an asset model if a parent asset model exists that contains a property formula expression that depends on the asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the <i>IoT SiteWise User Guide</i>.
		 * Delete asset-models/{assetModelId}
		 * @param {string} assetModelId The ID of the asset model to delete.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeleteAssetModel(assetModelId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'asset-models/' + (assetModelId == null ? '' : encodeURIComponent(assetModelId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about an asset model.
		 * Get asset-models/{assetModelId}
		 * @param {string} assetModelId The ID of the asset model.
		 * @param {boolean} excludeProperties  Whether or not to exclude asset model properties from the response. 
		 * @return {DescribeAssetModelResponse} Success
		 */
		DescribeAssetModel(assetModelId: string, excludeProperties: boolean | null | undefined): Observable<DescribeAssetModelResponse> {
			return this.http.get<DescribeAssetModelResponse>(this.baseUri + 'asset-models/' + (assetModelId == null ? '' : encodeURIComponent(assetModelId)) + '&excludeProperties=' + excludeProperties, {});
		}

		/**
		 * <p>Updates an asset model and all of the assets that were created from the model. Each asset created from the model inherits the updated asset model's property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the <i>IoT SiteWise User Guide</i>.</p> <important> <p>This operation overwrites the existing model with the provided model. To avoid deleting your asset model's properties or hierarchies, you must include their IDs and definitions in the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p> <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every asset associated with that hierarchy. You can't change the type or data type of an existing property.</p> </important>
		 * Put asset-models/{assetModelId}
		 * @param {string} assetModelId The ID of the asset model to update.
		 * @return {void} 
		 */
		UpdateAssetModel(assetModelId: string, requestBody: UpdateAssetModelPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'asset-models/' + (assetModelId == null ? '' : encodeURIComponent(assetModelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a dashboard from IoT SiteWise Monitor.
		 * Delete dashboards/{dashboardId}
		 * @param {string} dashboardId The ID of the dashboard to delete.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeleteDashboard(dashboardId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dashboards/' + (dashboardId == null ? '' : encodeURIComponent(dashboardId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a dashboard.
		 * Get dashboards/{dashboardId}
		 * @param {string} dashboardId The ID of the dashboard.
		 * @return {DescribeDashboardResponse} Success
		 */
		DescribeDashboard(dashboardId: string): Observable<DescribeDashboardResponse> {
			return this.http.get<DescribeDashboardResponse>(this.baseUri + 'dashboards/' + (dashboardId == null ? '' : encodeURIComponent(dashboardId)), {});
		}

		/**
		 * Updates an IoT SiteWise Monitor dashboard.
		 * Put dashboards/{dashboardId}
		 * @param {string} dashboardId The ID of the dashboard to update.
		 * @return {UpdateDashboardResponse} Success
		 */
		UpdateDashboard(dashboardId: string, requestBody: UpdateDashboardPutBody): Observable<UpdateDashboardResponse> {
			return this.http.put<UpdateDashboardResponse>(this.baseUri + 'dashboards/' + (dashboardId == null ? '' : encodeURIComponent(dashboardId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain in your gateway's file system.
		 * Delete 20200301/gateways/{gatewayId}
		 * @param {string} gatewayId The ID of the gateway to delete.
		 * @return {void} Success
		 */
		DeleteGateway(gatewayId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + '20200301/gateways/' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a gateway.
		 * Get 20200301/gateways/{gatewayId}
		 * @param {string} gatewayId The ID of the gateway device.
		 * @return {DescribeGatewayResponse} Success
		 */
		DescribeGateway(gatewayId: string): Observable<DescribeGatewayResponse> {
			return this.http.get<DescribeGatewayResponse>(this.baseUri + '20200301/gateways/' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)), {});
		}

		/**
		 * Updates a gateway's name.
		 * Put 20200301/gateways/{gatewayId}
		 * @param {string} gatewayId The ID of the gateway to update.
		 * @return {void} Success
		 */
		UpdateGateway(gatewayId: string, requestBody: UpdateGatewayPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + '20200301/gateways/' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a portal from IoT SiteWise Monitor.
		 * Delete portals/{portalId}
		 * @param {string} portalId The ID of the portal to delete.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeletePortal(portalId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'portals/' + (portalId == null ? '' : encodeURIComponent(portalId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a portal.
		 * Get portals/{portalId}
		 * @param {string} portalId The ID of the portal.
		 * @return {DescribePortalResponse} Success
		 */
		DescribePortal(portalId: string): Observable<DescribePortalResponse> {
			return this.http.get<DescribePortalResponse>(this.baseUri + 'portals/' + (portalId == null ? '' : encodeURIComponent(portalId)), {});
		}

		/**
		 * Updates an IoT SiteWise Monitor portal.
		 * Put portals/{portalId}
		 * @param {string} portalId The ID of the portal to update.
		 * @return {void} 
		 */
		UpdatePortal(portalId: string, requestBody: UpdatePortalPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'portals/' + (portalId == null ? '' : encodeURIComponent(portalId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a project from IoT SiteWise Monitor.
		 * Delete projects/{projectId}
		 * @param {string} projectId The ID of the project.
		 * @param {string} clientToken A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * @return {void} 
		 */
		DeleteProject(projectId: string, clientToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a project.
		 * Get projects/{projectId}
		 * @param {string} projectId The ID of the project.
		 * @return {DescribeProjectResponse} Success
		 */
		DescribeProject(projectId: string): Observable<DescribeProjectResponse> {
			return this.http.get<DescribeProjectResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), {});
		}

		/**
		 * Updates an IoT SiteWise Monitor project.
		 * Put projects/{projectId}
		 * @param {string} projectId The ID of the project to update.
		 * @return {UpdateProjectResponse} Success
		 */
		UpdateProject(projectId: string, requestBody: UpdateProjectPutBody): Observable<UpdateProjectResponse> {
			return this.http.put<UpdateProjectResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a time series (data stream). If you delete a time series that's associated with an asset property, the asset property still exists, but the time series will no longer be associated with this asset property.</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>
		 * Post timeseries/delete/
		 * @param {string} alias The alias that identifies the time series.
		 * @param {string} assetId The ID of the asset in which the asset property was created.
		 * @param {string} propertyId The ID of the asset property.
		 * @return {void} Success
		 */
		DeleteTimeSeries(alias: string | null | undefined, assetId: string | null | undefined, propertyId: string | null | undefined, requestBody: DeleteTimeSeriesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'timeseries/delete/?alias=' + (alias == null ? '' : encodeURIComponent(alias)) + '&assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Retrieves information about an asset property.</p> <note> <p>When you call this operation for an attribute property, this response includes the default attribute value that you define in the asset model. If you update the default value in the model, this operation's response includes the new default value.</p> </note> <p>This operation doesn't return the value of the asset property. To get the value of an asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
		 * Get assets/{assetId}/properties/{propertyId}
		 * @param {string} assetId The ID of the asset.
		 * @param {string} propertyId The ID of the asset property.
		 * @return {DescribeAssetPropertyResponse} Success
		 */
		DescribeAssetProperty(assetId: string, propertyId: string): Observable<DescribeAssetPropertyResponse> {
			return this.http.get<DescribeAssetPropertyResponse>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/properties/' + (propertyId == null ? '' : encodeURIComponent(propertyId)), {});
		}

		/**
		 * <p>Updates an asset property's alias and notification state.</p> <important> <p>This operation overwrites the property's existing alias and notification state. To keep your existing property's alias or notification state, you must include the existing values in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p> </important>
		 * Put assets/{assetId}/properties/{propertyId}
		 * @param {string} assetId The ID of the asset to be updated.
		 * @param {string} propertyId The ID of the asset property to be updated.
		 * @return {void} Success
		 */
		UpdateAssetProperty(assetId: string, propertyId: string, requestBody: UpdateAssetPropertyPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/properties/' + (propertyId == null ? '' : encodeURIComponent(propertyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves information about a bulk import job request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/DescribeBulkImportJob.html">Describe a bulk import job (CLI)</a> in the <i>Amazon Simple Storage Service User Guide</i>.
		 * Get jobs/{jobId}
		 * @param {string} jobId The ID of the job.
		 * @return {DescribeBulkImportJobResponse} Success
		 */
		DescribeBulkImportJob(jobId: string): Observable<DescribeBulkImportJobResponse> {
			return this.http.get<DescribeBulkImportJobResponse>(this.baseUri + 'jobs/' + (jobId == null ? '' : encodeURIComponent(jobId)), {});
		}

		/**
		 * Retrieves information about the default encryption configuration for the Amazon Web Services account in the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
		 * Get configuration/account/encryption
		 * @return {DescribeDefaultEncryptionConfigurationResponse} Success
		 */
		DescribeDefaultEncryptionConfiguration(): Observable<DescribeDefaultEncryptionConfigurationResponse> {
			return this.http.get<DescribeDefaultEncryptionConfigurationResponse>(this.baseUri + 'configuration/account/encryption', {});
		}

		/**
		 * Sets the default encryption configuration for the Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the <i>IoT SiteWise User Guide</i>.
		 * Post configuration/account/encryption
		 * @return {PutDefaultEncryptionConfigurationResponse} Success
		 */
		PutDefaultEncryptionConfiguration(requestBody: PutDefaultEncryptionConfigurationPostBody): Observable<PutDefaultEncryptionConfigurationResponse> {
			return this.http.post<PutDefaultEncryptionConfigurationResponse>(this.baseUri + 'configuration/account/encryption', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about a gateway capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
		 * Get 20200301/gateways/{gatewayId}/capability/{capabilityNamespace}
		 * @param {string} gatewayId The ID of the gateway that defines the capability configuration.
		 * @param {string} capabilityNamespace The namespace of the capability configuration. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.
		 * @return {DescribeGatewayCapabilityConfigurationResponse} Success
		 */
		DescribeGatewayCapabilityConfiguration(gatewayId: string, capabilityNamespace: string): Observable<DescribeGatewayCapabilityConfigurationResponse> {
			return this.http.get<DescribeGatewayCapabilityConfigurationResponse>(this.baseUri + '20200301/gateways/' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)) + '/capability/' + (capabilityNamespace == null ? '' : encodeURIComponent(capabilityNamespace)), {});
		}

		/**
		 * Retrieves the current IoT SiteWise logging options.
		 * Get logging
		 * @return {DescribeLoggingOptionsResponse} Success
		 */
		DescribeLoggingOptions(): Observable<DescribeLoggingOptionsResponse> {
			return this.http.get<DescribeLoggingOptionsResponse>(this.baseUri + 'logging', {});
		}

		/**
		 * Sets logging options for IoT SiteWise.
		 * Put logging
		 * @return {PutLoggingOptionsResponse} Success
		 */
		PutLoggingOptions(requestBody: PutLoggingOptionsPutBody): Observable<PutLoggingOptionsResponse> {
			return this.http.put<PutLoggingOptionsResponse>(this.baseUri + 'logging', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about the storage configuration for IoT SiteWise.
		 * Get configuration/account/storage
		 * @return {DescribeStorageConfigurationResponse} Success
		 */
		DescribeStorageConfiguration(): Observable<DescribeStorageConfigurationResponse> {
			return this.http.get<DescribeStorageConfigurationResponse>(this.baseUri + 'configuration/account/storage', {});
		}

		/**
		 * Configures storage settings for IoT SiteWise.
		 * Post configuration/account/storage
		 * @return {PutStorageConfigurationResponse} Success
		 */
		PutStorageConfiguration(requestBody: PutStorageConfigurationPostBody): Observable<PutStorageConfigurationResponse> {
			return this.http.post<PutStorageConfigurationResponse>(this.baseUri + 'configuration/account/storage', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves information about a time series (data stream).</p> <p>To identify a time series, do one of the following:</p> <ul> <li> <p>If the time series isn't associated with an asset property, specify the <code>alias</code> of the time series.</p> </li> <li> <p>If the time series is associated with an asset property, specify one of the following: </p> <ul> <li> <p>The <code>alias</code> of the time series.</p> </li> <li> <p>The <code>assetId</code> and <code>propertyId</code> that identifies the asset property.</p> </li> </ul> </li> </ul>
		 * Get timeseries/describe/
		 * @param {string} alias The alias that identifies the time series.
		 * @param {string} assetId The ID of the asset in which the asset property was created.
		 * @param {string} propertyId The ID of the asset property.
		 * @return {DescribeTimeSeriesResponse} Success
		 */
		DescribeTimeSeries(alias: string | null | undefined, assetId: string | null | undefined, propertyId: string | null | undefined): Observable<DescribeTimeSeriesResponse> {
			return this.http.get<DescribeTimeSeriesResponse>(this.baseUri + 'timeseries/describe/?alias=' + (alias == null ? '' : encodeURIComponent(alias)) + '&assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)), {});
		}

		/**
		 * Disassociates a child asset from the given parent asset through a hierarchy defined in the parent asset's model.
		 * Post assets/{assetId}/disassociate
		 * @param {string} assetId The ID of the parent asset from which to disassociate the child asset.
		 * @return {void} Success
		 */
		DisassociateAssets(assetId: string, requestBody: DisassociateAssetsPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/disassociate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Disassociates a time series (data stream) from an asset property.
		 * Post timeseries/disassociate/#alias&assetId&propertyId
		 * @param {string} alias The alias that identifies the time series.
		 * @param {string} assetId The ID of the asset in which the asset property was created.
		 * @param {string} propertyId The ID of the asset property.
		 * @return {void} Success
		 */
		DisassociateTimeSeriesFromAssetProperty(alias: string, assetId: string, propertyId: string, requestBody: DisassociateTimeSeriesFromAssetPropertyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'timeseries/disassociate/#alias&assetId&propertyId?alias=' + (alias == null ? '' : encodeURIComponent(alias)) + '&assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
		 * Get properties/aggregates#aggregateTypes&resolution&startDate&endDate
		 * @param {string} assetId The ID of the asset.
		 * @param {string} propertyId The ID of the asset property.
		 * @param {string} propertyAlias The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.
		 * @param {Array<AggregateType>} aggregateTypes The data aggregating function.
		 * @param {string} resolution The time interval over which to aggregate data.
		 * @param {Array<Quality>} qualities The quality by which to filter asset data.
		 * @param {Date} startDate The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
		 * @param {Date} endDate The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
		 * @param {TimeOrdering} timeOrdering <p>The chronological sorting order of the requested information.</p> <p>Default: <code>ASCENDING</code> </p>
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is equal to 1 MB.</p> </li> <li> <p>The number of data points in the result set is equal to the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 250.</p> </li> </ul>
		 * @return {GetAssetPropertyAggregatesResponse} Success
		 */
		GetAssetPropertyAggregates(assetId: string | null | undefined, propertyId: string | null | undefined, propertyAlias: string | null | undefined, aggregateTypes: Array<AggregateType>, resolution: string, qualities: Array<Quality> | null | undefined, startDate: Date, endDate: Date, timeOrdering: TimeOrdering | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetAssetPropertyAggregatesResponse> {
			return this.http.get<GetAssetPropertyAggregatesResponse>(this.baseUri + 'properties/aggregates#aggregateTypes&resolution&startDate&endDate?assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)) + '&propertyAlias=' + (propertyAlias == null ? '' : encodeURIComponent(propertyAlias)) + '&' + aggregateTypes.map(z => `aggregateTypes=${z}`).join('&') + '&resolution=' + (resolution == null ? '' : encodeURIComponent(resolution)) + '&' + qualities?.map(z => `qualities=${z}`).join('&') + '&startDate=' + startDate.toISOString() + '&endDate=' + endDate.toISOString() + '&timeOrdering=' + timeOrdering + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying current values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
		 * Get properties/latest
		 * @param {string} assetId The ID of the asset.
		 * @param {string} propertyId The ID of the asset property.
		 * @param {string} propertyAlias The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.
		 * @return {GetAssetPropertyValueResponse} Success
		 */
		GetAssetPropertyValue(assetId: string | null | undefined, propertyId: string | null | undefined, propertyAlias: string | null | undefined): Observable<GetAssetPropertyValueResponse> {
			return this.http.get<GetAssetPropertyValueResponse>(this.baseUri + 'properties/latest?assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)) + '&propertyAlias=' + (propertyAlias == null ? '' : encodeURIComponent(propertyAlias)), {});
		}

		/**
		 * <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying historical values</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
		 * Get properties/history
		 * @param {string} assetId The ID of the asset.
		 * @param {string} propertyId The ID of the asset property.
		 * @param {string} propertyAlias The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.
		 * @param {Date} startDate The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
		 * @param {Date} endDate The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
		 * @param {Array<Quality>} qualities The quality by which to filter asset data.
		 * @param {TimeOrdering} timeOrdering <p>The chronological sorting order of the requested information.</p> <p>Default: <code>ASCENDING</code> </p>
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is equal to 4 MB.</p> </li> <li> <p>The number of data points in the result set is equal to the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 20000.</p> </li> </ul>
		 * @return {GetAssetPropertyValueHistoryResponse} Success
		 */
		GetAssetPropertyValueHistory(assetId: string | null | undefined, propertyId: string | null | undefined, propertyAlias: string | null | undefined, startDate: Date | null | undefined, endDate: Date | null | undefined, qualities: Array<Quality> | null | undefined, timeOrdering: TimeOrdering | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<GetAssetPropertyValueHistoryResponse> {
			return this.http.get<GetAssetPropertyValueHistoryResponse>(this.baseUri + 'properties/history?assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)) + '&propertyAlias=' + (propertyAlias == null ? '' : encodeURIComponent(propertyAlias)) + '&startDate=' + startDate?.toISOString() + '&endDate=' + endDate?.toISOString() + '&' + qualities?.map(z => `qualities=${z}`).join('&') + '&timeOrdering=' + timeOrdering + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Get interpolated values for an asset property for a specified time interval, during a period of time. If your time series is missing data points during the specified time interval, you can use interpolation to estimate the missing data.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.</p> <p>To identify an asset property, you must specify one of the following:</p> <ul> <li> <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p> </li> <li> <p>A <code>propertyAlias</code>, which is a data stream alias (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p> </li> </ul>
		 * Get properties/interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type
		 * @param {string} assetId The ID of the asset.
		 * @param {string} propertyId The ID of the asset property.
		 * @param {string} propertyAlias The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.
		 * @param {number} startTimeInSeconds The exclusive start of the range from which to interpolate data, expressed in seconds in Unix epoch time.
		 * @param {number} startTimeOffsetInNanos The nanosecond offset converted from <code>startTimeInSeconds</code>.
		 * @param {number} endTimeInSeconds The inclusive end of the range from which to interpolate data, expressed in seconds in Unix epoch time.
		 * @param {number} endTimeOffsetInNanos The nanosecond offset converted from <code>endTimeInSeconds</code>.
		 * @param {Quality} quality The quality of the asset property value. You can use this parameter as a filter to choose only the asset property values that have a specific quality.
		 * @param {number} intervalInSeconds The time interval in seconds over which to interpolate data. Each interval starts when the previous one ends.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to return for each paginated request. If not specified, the default value is 10.
		 * @param {string} type <p>The interpolation type.</p> <p>Valid values: <code>LINEAR_INTERPOLATION | LOCF_INTERPOLATION</code> </p> <ul> <li> <p> <code>LINEAR_INTERPOLATION</code> – Estimates missing data using <a href="https://en.wikipedia.org/wiki/Linear_interpolation">linear interpolation</a>.</p> <p>For example, you can use this operation to return the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the first interpolated value on July 2, 2021, at 9 AM, the second interpolated value on July 3, 2021, at 9 AM, and so on.</p> </li> <li> <p> <code>LOCF_INTERPOLATION</code> – Estimates missing data using last observation carried forward interpolation</p> <p>If no data point is found for an interval, IoT SiteWise returns the last observed data point for the previous interval and carries forward this interpolated value until a new data point is found.</p> <p>For example, you can get the state of an on-off valve every 24 hours over a duration of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the last observed data point between July 1, 2021, at 9 AM and July 2, 2021, at 9 AM as the first interpolated value. If a data point isn't found after 9 AM on July 2, 2021, IoT SiteWise uses the same interpolated value for the rest of the days.</p> </li> </ul>
		 * @param {number} intervalWindowInSeconds <p>The query interval for the window, in seconds. IoT SiteWise computes each interpolated value by using data points from the timestamp of each interval, minus the window to the timestamp of each interval plus the window. If not specified, the window ranges between the start time minus the interval and the end time plus the interval.</p> <note> <ul> <li> <p>If you specify a value for the <code>intervalWindowInSeconds</code> parameter, the value for the <code>type</code> parameter must be <code>LINEAR_INTERPOLATION</code>.</p> </li> <li> <p>If a data point isn't found during the specified query window, IoT SiteWise won't return an interpolated value for the interval. This indicates that there's a gap in the ingested data points.</p> </li> </ul> </note> <p>For example, you can get the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts on July 1, 2021, at 9 AM with a window of 2 hours, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 2, 2021 to compute the first interpolated value. Next, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 3, 2021 to compute the second interpolated value, and so on. </p>
		 * @return {GetInterpolatedAssetPropertyValuesResponse} Success
		 */
		GetInterpolatedAssetPropertyValues(assetId: string | null | undefined, propertyId: string | null | undefined, propertyAlias: string | null | undefined, startTimeInSeconds: number, startTimeOffsetInNanos: number | null | undefined, endTimeInSeconds: number, endTimeOffsetInNanos: number | null | undefined, quality: Quality, intervalInSeconds: number, nextToken: string | null | undefined, maxResults: number | null | undefined, type: string, intervalWindowInSeconds: number | null | undefined): Observable<GetInterpolatedAssetPropertyValuesResponse> {
			return this.http.get<GetInterpolatedAssetPropertyValuesResponse>(this.baseUri + 'properties/interpolated#startTimeInSeconds&endTimeInSeconds&quality&intervalInSeconds&type?assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&propertyId=' + (propertyId == null ? '' : encodeURIComponent(propertyId)) + '&propertyAlias=' + (propertyAlias == null ? '' : encodeURIComponent(propertyAlias)) + '&startTimeInSeconds=' + startTimeInSeconds + '&startTimeOffsetInNanos=' + startTimeOffsetInNanos + '&endTimeInSeconds=' + endTimeInSeconds + '&endTimeOffsetInNanos=' + endTimeOffsetInNanos + '&quality=' + quality + '&intervalInSeconds=' + intervalInSeconds + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '&intervalWindowInSeconds=' + intervalWindowInSeconds, {});
		}

		/**
		 * Retrieves a paginated list of properties associated with an asset model. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
		 * Get asset-models/{assetModelId}/properties
		 * @param {string} assetModelId The ID of the asset model.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to return for each paginated request. If not specified, the default value is 50.
		 * @param {ListAssetModelPropertiesFilter} filter <p> Filters the requested list of asset model properties. You can choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all asset model properties for a given asset model ID. </p> </li> <li> <p> <code>BASE</code> – The list includes only base asset model properties for a given asset model ID. </p> </li> </ul> <p>Default: <code>BASE</code> </p>
		 * @return {ListAssetModelPropertiesResponse} Success
		 */
		ListAssetModelProperties(assetModelId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, filter: ListAssetModelPropertiesFilter | null | undefined): Observable<ListAssetModelPropertiesResponse> {
			return this.http.get<ListAssetModelPropertiesResponse>(this.baseUri + 'asset-models/' + (assetModelId == null ? '' : encodeURIComponent(assetModelId)) + '/properties&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&filter=' + filter, {});
		}

		/**
		 * Retrieves a paginated list of properties associated with an asset. If you update properties associated with the model before you finish listing all the properties, you need to start all over again.
		 * Get assets/{assetId}/properties
		 * @param {string} assetId The ID of the asset.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to return for each paginated request. If not specified, the default value is 50.
		 * @param {ListAssetModelPropertiesFilter} filter <p> Filters the requested list of asset properties. You can choose one of the following options:</p> <ul> <li> <p> <code>ALL</code> – The list includes all asset properties for a given asset model ID. </p> </li> <li> <p> <code>BASE</code> – The list includes only base asset properties for a given asset model ID. </p> </li> </ul> <p>Default: <code>BASE</code> </p>
		 * @return {ListAssetPropertiesResponse} Success
		 */
		ListAssetProperties(assetId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, filter: ListAssetModelPropertiesFilter | null | undefined): Observable<ListAssetPropertiesResponse> {
			return this.http.get<ListAssetPropertiesResponse>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/properties&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&filter=' + filter, {});
		}

		/**
		 * Retrieves a paginated list of asset relationships for an asset. You can use this operation to identify an asset's root asset and all associated assets between that asset and its root.
		 * Get assets/{assetId}/assetRelationships#traversalType
		 * @param {string} assetId The ID of the asset.
		 * @param {TraversalType} traversalType <p>The type of traversal to use to identify asset relationships. Choose the following option:</p> <ul> <li> <p> <code>PATH_TO_ROOT</code> – Identify the asset's parent assets up to the root asset. The asset that you specify in <code>assetId</code> is the first result in the list of <code>assetRelationshipSummaries</code>, and the root asset is the last result.</p> </li> </ul>
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to return for each paginated request.
		 * @return {ListAssetRelationshipsResponse} Success
		 */
		ListAssetRelationships(assetId: string, traversalType: TraversalType, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssetRelationshipsResponse> {
			return this.http.get<ListAssetRelationshipsResponse>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/assetRelationships#traversalType&traversalType=' + traversalType + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * <p>Retrieves a paginated list of associated assets.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p>List child assets associated to a parent asset by a hierarchy that you specify.</p> </li> <li> <p>List an asset's parent asset.</p> </li> </ul>
		 * Get assets/{assetId}/hierarchies
		 * @param {string} assetId The ID of the asset to query.
		 * @param {string} hierarchyId <p>The ID of the hierarchy by which child assets are associated to the asset. To find a hierarchy ID, use the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html">DescribeAsset</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a> operations. This parameter is required if you choose <code>CHILD</code> for <code>traversalDirection</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
		 * @param {TraversalDirection} traversalDirection <p>The direction to list associated assets. Choose one of the following options:</p> <ul> <li> <p> <code>CHILD</code> – The list includes all child assets associated to the asset. The <code>hierarchyId</code> parameter is required if you choose <code>CHILD</code>.</p> </li> <li> <p> <code>PARENT</code> – The list includes the asset's parent asset.</p> </li> </ul> <p>Default: <code>CHILD</code> </p>
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
		 * @return {ListAssociatedAssetsResponse} Success
		 */
		ListAssociatedAssets(assetId: string, hierarchyId: string | null | undefined, traversalDirection: TraversalDirection | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListAssociatedAssetsResponse> {
			return this.http.get<ListAssociatedAssetsResponse>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)) + '/hierarchies&hierarchyId=' + (hierarchyId == null ? '' : encodeURIComponent(hierarchyId)) + '&traversalDirection=' + traversalDirection + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.
		 * Get dashboards#projectId
		 * @param {string} projectId The ID of the project.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
		 * @return {ListDashboardsResponse} Success
		 */
		ListDashboards(projectId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDashboardsResponse> {
			return this.http.get<ListDashboardsResponse>(this.baseUri + 'dashboards#projectId?projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.
		 * Get projects/{projectId}/assets
		 * @param {string} projectId The ID of the project.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
		 * @return {ListProjectAssetsResponse} Success
		 */
		ListProjectAssets(projectId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListProjectAssetsResponse> {
			return this.http.get<ListProjectAssetsResponse>(this.baseUri + 'projects/' + (projectId == null ? '' : encodeURIComponent(projectId)) + '/assets&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.
		 * Get projects#portalId
		 * @param {string} portalId The ID of the portal.
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults <p>The maximum number of results to return for each paginated request.</p> <p>Default: 50</p>
		 * @return {ListProjectsResponse} Success
		 */
		ListProjects(portalId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListProjectsResponse> {
			return this.http.get<ListProjectsResponse>(this.baseUri + 'projects#portalId?portalId=' + (portalId == null ? '' : encodeURIComponent(portalId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Retrieves the list of tags for an IoT SiteWise resource.
		 * Get tags#resourceArn
		 * @param {string} resourceArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation updates the tag's value.
		 * Post tags#resourceArn
		 * @param {string} resourceArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a paginated list of time series (data streams).
		 * Get timeseries/
		 * @param {string} nextToken The token to be used for the next set of paginated results.
		 * @param {number} maxResults The maximum number of results to return for each paginated request.
		 * @param {string} assetId The ID of the asset in which the asset property was created.
		 * @param {string} aliasPrefix The alias prefix of the time series.
		 * @param {ListTimeSeriesType} timeSeriesType <p>The type of the time series. The time series type can be one of the following values:</p> <ul> <li> <p> <code>ASSOCIATED</code> – The time series is associated with an asset property.</p> </li> <li> <p> <code>DISASSOCIATED</code> – The time series isn't associated with any asset property.</p> </li> </ul>
		 * @return {ListTimeSeriesResponse} Success
		 */
		ListTimeSeries(nextToken: string | null | undefined, maxResults: number | null | undefined, assetId: string | null | undefined, aliasPrefix: string | null | undefined, timeSeriesType: ListTimeSeriesType | null | undefined): Observable<ListTimeSeriesResponse> {
			return this.http.get<ListTimeSeriesResponse>(this.baseUri + 'timeseries/?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&assetId=' + (assetId == null ? '' : encodeURIComponent(assetId)) + '&aliasPrefix=' + (aliasPrefix == null ? '' : encodeURIComponent(aliasPrefix)) + '&timeSeriesType=' + timeSeriesType, {});
		}

		/**
		 * Removes a tag from an IoT SiteWise resource.
		 * Delete tags#resourceArn&tagKeys
		 * @param {string} resourceArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.
		 * @param {Array<string>} tagKeys A list of keys for tags to remove from the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags#resourceArn&tagKeys?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates a gateway capability configuration or defines a new capability configuration. Each gateway capability defines data sources for a gateway. A capability configuration can contain multiple data source configurations. If you define OPC-UA sources for a gateway in the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.
		 * Post 20200301/gateways/{gatewayId}/capability
		 * @param {string} gatewayId The ID of the gateway to be updated.
		 * @return {void} 
		 */
		UpdateGatewayCapabilityConfiguration(gatewayId: string, requestBody: UpdateGatewayCapabilityConfigurationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '20200301/gateways/' + (gatewayId == null ? '' : encodeURIComponent(gatewayId)) + '/capability', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface AssociateAssetsPostBody {

		/**
		 * The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		hierarchyId: string;

		/**
		 * The ID of the child asset to be associated.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		childAssetId: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface AssociateAssetsPostBodyFormProperties {

		/**
		 * The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		hierarchyId: FormControl<string | null | undefined>,

		/**
		 * The ID of the child asset to be associated.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		childAssetId: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateAssetsPostBodyFormGroup() {
		return new FormGroup<AssociateAssetsPostBodyFormProperties>({
			hierarchyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
			childAssetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface AssociateTimeSeriesToAssetPropertyPostBody {

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface AssociateTimeSeriesToAssetPropertyPostBodyFormProperties {

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateTimeSeriesToAssetPropertyPostBodyFormGroup() {
		return new FormGroup<AssociateTimeSeriesToAssetPropertyPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface BatchAssociateProjectAssetsPostBody {

		/**
		 * The IDs of the assets to be associated to the project.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		assetIds: Array<string>;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface BatchAssociateProjectAssetsPostBodyFormProperties {

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchAssociateProjectAssetsPostBodyFormGroup() {
		return new FormGroup<BatchAssociateProjectAssetsPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface BatchDisassociateProjectAssetsPostBody {

		/**
		 * The IDs of the assets to be disassociated from the project.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		assetIds: Array<string>;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface BatchDisassociateProjectAssetsPostBodyFormProperties {

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchDisassociateProjectAssetsPostBodyFormGroup() {
		return new FormGroup<BatchDisassociateProjectAssetsPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface BatchGetAssetPropertyAggregatesPostBody {

		/**
		 * The list of asset property aggregate entries for the batch get request. You can specify up to 16 entries per request.
		 * Required
		 */
		entries: Array<BatchGetAssetPropertyAggregatesEntry>;

		/**
		 * The token to be used for the next set of paginated results.
		 * Max length: 4096
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is equal to 1 MB.</p> </li> <li> <p>The number of data points in the result set is equal to the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p> </li> </ul>
		 * Minimum: 1
		 */
		maxResults?: number | null;
	}
	export interface BatchGetAssetPropertyAggregatesPostBodyFormProperties {

		/**
		 * The token to be used for the next set of paginated results.
		 * Max length: 4096
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is equal to 1 MB.</p> </li> <li> <p>The number of data points in the result set is equal to the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p> </li> </ul>
		 * Minimum: 1
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyAggregatesPostBodyFormGroup() {
		return new FormGroup<BatchGetAssetPropertyAggregatesPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[A-Za-z0-9+/=]+')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface BatchGetAssetPropertyValuePostBody {

		/**
		 * The list of asset property value entries for the batch get request. You can specify up to 128 entries per request.
		 * Required
		 */
		entries: Array<BatchGetAssetPropertyValueEntry>;

		/**
		 * The token to be used for the next set of paginated results.
		 * Max length: 4096
		 * Min length: 1
		 */
		nextToken?: string | null;
	}
	export interface BatchGetAssetPropertyValuePostBodyFormProperties {

		/**
		 * The token to be used for the next set of paginated results.
		 * Max length: 4096
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValuePostBodyFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValuePostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[A-Za-z0-9+/=]+')]),
		});

	}

	export interface BatchGetAssetPropertyValueHistoryPostBody {

		/**
		 * The list of asset property historical value entries for the batch get request. You can specify up to 16 entries per request.
		 * Required
		 */
		entries: Array<BatchGetAssetPropertyValueHistoryEntry>;

		/**
		 * The token to be used for the next set of paginated results.
		 * Max length: 4096
		 * Min length: 1
		 */
		nextToken?: string | null;

		/**
		 * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is equal to 4 MB.</p> </li> <li> <p>The number of data points in the result set is equal to the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 20000.</p> </li> </ul>
		 * Minimum: 1
		 */
		maxResults?: number | null;
	}
	export interface BatchGetAssetPropertyValueHistoryPostBodyFormProperties {

		/**
		 * The token to be used for the next set of paginated results.
		 * Max length: 4096
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,

		/**
		 * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.</p> <ul> <li> <p>The size of the result set is equal to 4 MB.</p> </li> <li> <p>The number of data points in the result set is equal to the value of <code>maxResults</code>. The maximum value of <code>maxResults</code> is 20000.</p> </li> </ul>
		 * Minimum: 1
		 */
		maxResults: FormControl<number | null | undefined>,
	}
	export function CreateBatchGetAssetPropertyValueHistoryPostBodyFormGroup() {
		return new FormGroup<BatchGetAssetPropertyValueHistoryPostBodyFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4096), Validators.pattern('[A-Za-z0-9+/=]+')]),
			maxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface BatchPutAssetPropertyValuePostBody {

		/**
		 * The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.
		 * Required
		 */
		entries: Array<PutAssetPropertyValueEntry>;
	}
	export interface BatchPutAssetPropertyValuePostBodyFormProperties {
	}
	export function CreateBatchPutAssetPropertyValuePostBodyFormGroup() {
		return new FormGroup<BatchPutAssetPropertyValuePostBodyFormProperties>({
		});

	}

	export interface CreateAccessPolicyPostBody {

		/**
		 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>
		 * Required
		 */
		accessPolicyIdentity: CreateAccessPolicyPostBodyAccessPolicyIdentity;

		/**
		 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
		 * Required
		 */
		accessPolicyResource: CreateAccessPolicyPostBodyAccessPolicyResource;

		/**
		 * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
		 * Required
		 */
		accessPolicyPermission: Permission;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;

		/** A list of key-value pairs that contain metadata for the access policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateAccessPolicyPostBodyFormProperties {

		/**
		 * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
		 * Required
		 */
		accessPolicyPermission: FormControl<Permission | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the access policy. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAccessPolicyPostBodyFormGroup() {
		return new FormGroup<CreateAccessPolicyPostBodyFormProperties>({
			accessPolicyPermission: new FormControl<Permission | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateAccessPolicyPostBodyAccessPolicyIdentity {
		user?: UserIdentity;
		group?: GroupIdentity;
		iamUser?: IAMUserIdentity;
		iamRole?: IAMRoleIdentity;
	}
	export interface CreateAccessPolicyPostBodyAccessPolicyIdentityFormProperties {
	}
	export function CreateCreateAccessPolicyPostBodyAccessPolicyIdentityFormGroup() {
		return new FormGroup<CreateAccessPolicyPostBodyAccessPolicyIdentityFormProperties>({
		});

	}

	export interface CreateAccessPolicyPostBodyAccessPolicyResource {
		portal?: PortalResource;
		project?: ProjectResource;
	}
	export interface CreateAccessPolicyPostBodyAccessPolicyResourceFormProperties {
	}
	export function CreateCreateAccessPolicyPostBodyAccessPolicyResourceFormGroup() {
		return new FormGroup<CreateAccessPolicyPostBodyAccessPolicyResourceFormProperties>({
		});

	}

	export interface CreateAssetPostBody {

		/**
		 * A friendly name for the asset.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		assetName: string;

		/**
		 * The ID of the asset model from which to create the asset.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		assetModelId: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;

		/** A list of key-value pairs that contain metadata for the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };

		/**
		 * A description for the asset.
		 * Max length: 2048
		 * Min length: 1
		 */
		assetDescription?: string | null;
	}
	export interface CreateAssetPostBodyFormProperties {

		/**
		 * A friendly name for the asset.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		assetName: FormControl<string | null | undefined>,

		/**
		 * The ID of the asset model from which to create the asset.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		assetModelId: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A description for the asset.
		 * Max length: 2048
		 * Min length: 1
		 */
		assetDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateAssetPostBodyFormGroup() {
		return new FormGroup<CreateAssetPostBodyFormProperties>({
			assetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			assetModelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			assetDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
		});

	}

	export interface CreateAssetModelPostBody {

		/**
		 * A unique, friendly name for the asset model.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		assetModelName: string;

		/**
		 * A description for the asset model.
		 * Max length: 2048
		 * Min length: 1
		 */
		assetModelDescription?: string | null;

		/** <p>The property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p> */
		assetModelProperties?: Array<AssetModelPropertyDefinition>;

		/** <p>The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p> */
		assetModelHierarchies?: Array<AssetModelHierarchyDefinition>;

		/** The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model. */
		assetModelCompositeModels?: Array<AssetModelCompositeModelDefinition>;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;

		/** A list of key-value pairs that contain metadata for the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateAssetModelPostBodyFormProperties {

		/**
		 * A unique, friendly name for the asset model.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		assetModelName: FormControl<string | null | undefined>,

		/**
		 * A description for the asset model.
		 * Max length: 2048
		 * Min length: 1
		 */
		assetModelDescription: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateAssetModelPostBodyFormGroup() {
		return new FormGroup<CreateAssetModelPostBodyFormProperties>({
			assetModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			assetModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateBulkImportJobPostBody {

		/**
		 * The unique name that helps identify the job request.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		jobName: string;

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		jobRoleArn: string;

		/**
		 * The files in the specified Amazon S3 bucket that contain your data.
		 * Required
		 */
		files: Array<File>;

		/**
		 * The Amazon S3 destination where errors associated with the job creation request are saved.
		 * Required
		 */
		errorReportLocation: CreateBulkImportJobPostBodyErrorReportLocation;

		/**
		 * Contains the configuration information of a job, such as the file format used to save data in Amazon S3.
		 * Required
		 */
		jobConfiguration: CreateBulkImportJobPostBodyJobConfiguration;
	}
	export interface CreateBulkImportJobPostBodyFormProperties {

		/**
		 * The unique name that helps identify the job request.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		jobName: FormControl<string | null | undefined>,

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		jobRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateBulkImportJobPostBodyFormGroup() {
		return new FormGroup<CreateBulkImportJobPostBodyFormProperties>({
			jobName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			jobRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('.*')]),
		});

	}

	export interface CreateBulkImportJobPostBodyErrorReportLocation {
		bucket?: string;
		prefix?: string;
	}
	export interface CreateBulkImportJobPostBodyErrorReportLocationFormProperties {
		bucket: FormControl<string | null | undefined>,
		prefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateBulkImportJobPostBodyErrorReportLocationFormGroup() {
		return new FormGroup<CreateBulkImportJobPostBodyErrorReportLocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBulkImportJobPostBodyJobConfiguration {
		fileFormat?: FileFormat;
	}
	export interface CreateBulkImportJobPostBodyJobConfigurationFormProperties {
	}
	export function CreateCreateBulkImportJobPostBodyJobConfigurationFormGroup() {
		return new FormGroup<CreateBulkImportJobPostBodyJobConfigurationFormProperties>({
		});

	}

	export interface CreateDashboardPostBody {

		/**
		 * The ID of the project in which to create the dashboard.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		projectId: string;

		/**
		 * A friendly name for the dashboard.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		dashboardName: string;

		/**
		 * A description for the dashboard.
		 * Max length: 2048
		 * Min length: 1
		 */
		dashboardDescription?: string | null;

		/**
		 * The dashboard definition specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 204800
		 * Min length: 0
		 */
		dashboardDefinition: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;

		/** A list of key-value pairs that contain metadata for the dashboard. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateDashboardPostBodyFormProperties {

		/**
		 * The ID of the project in which to create the dashboard.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * A friendly name for the dashboard.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		dashboardName: FormControl<string | null | undefined>,

		/**
		 * A description for the dashboard.
		 * Max length: 2048
		 * Min length: 1
		 */
		dashboardDescription: FormControl<string | null | undefined>,

		/**
		 * The dashboard definition specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 204800
		 * Min length: 0
		 */
		dashboardDefinition: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the dashboard. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDashboardPostBodyFormGroup() {
		return new FormGroup<CreateDashboardPostBodyFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
			dashboardName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			dashboardDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			dashboardDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(204800), Validators.pattern('.+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateGatewayPostBody {

		/**
		 * A unique, friendly name for the gateway.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		gatewayName: string;

		/**
		 * Contains a gateway's platform information.
		 * Required
		 */
		gatewayPlatform: CreateGatewayPostBodyGatewayPlatform;

		/** A list of key-value pairs that contain metadata for the gateway. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateGatewayPostBodyFormProperties {

		/**
		 * A unique, friendly name for the gateway.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		gatewayName: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the gateway. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateGatewayPostBodyFormGroup() {
		return new FormGroup<CreateGatewayPostBodyFormProperties>({
			gatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateGatewayPostBodyGatewayPlatform {
		greengrass?: Greengrass;
		greengrassV2?: GreengrassV2;
	}
	export interface CreateGatewayPostBodyGatewayPlatformFormProperties {
	}
	export function CreateCreateGatewayPostBodyGatewayPlatformFormGroup() {
		return new FormGroup<CreateGatewayPostBodyGatewayPlatformFormProperties>({
		});

	}

	export interface CreatePortalPostBody {

		/**
		 * A friendly name for the portal.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		portalName: string;

		/**
		 * A description for the portal.
		 * Max length: 2048
		 * Min length: 1
		 */
		portalDescription?: string | null;

		/**
		 * The Amazon Web Services administrator's contact email address.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		portalContactEmail: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;

		/** Contains an image file. */
		portalLogoImageFile?: CreatePortalPostBodyPortalLogoImageFile;

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		roleArn: string;

		/** A list of key-value pairs that contain metadata for the portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };

		/** <p>The service to use to authenticate users to the portal. Choose from the following options:</p> <ul> <li> <p> <code>SSO</code> – The portal uses IAM Identity Center (successor to Single Sign-On) to authenticate users and manage user permissions. Before you can create a portal that uses IAM Identity Center, you must enable IAM Identity Center. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso">Enabling IAM Identity Center</a> in the <i>IoT SiteWise User Guide</i>. This option is only available in Amazon Web Services Regions other than the China Regions.</p> </li> <li> <p> <code>IAM</code> – The portal uses Identity and Access Management to authenticate users and manage user permissions.</p> </li> </ul> <p>You can't change this value after you create a portal.</p> <p>Default: <code>SSO</code> </p> */
		portalAuthMode?: AuthMode | null;

		/**
		 * <p>The email address that sends alarm notifications.</p> <important> <p>If you use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">IoT Events managed Lambda function</a> to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify the sender email address in Amazon SES</a>.</p> </important>
		 * Max length: 255
		 * Min length: 1
		 */
		notificationSenderEmail?: string | null;

		/** Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>. */
		alarms?: CreatePortalPostBodyAlarms;
	}
	export interface CreatePortalPostBodyFormProperties {

		/**
		 * A friendly name for the portal.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		portalName: FormControl<string | null | undefined>,

		/**
		 * A description for the portal.
		 * Max length: 2048
		 * Min length: 1
		 */
		portalDescription: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services administrator's contact email address.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		portalContactEmail: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** <p>The service to use to authenticate users to the portal. Choose from the following options:</p> <ul> <li> <p> <code>SSO</code> – The portal uses IAM Identity Center (successor to Single Sign-On) to authenticate users and manage user permissions. Before you can create a portal that uses IAM Identity Center, you must enable IAM Identity Center. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso">Enabling IAM Identity Center</a> in the <i>IoT SiteWise User Guide</i>. This option is only available in Amazon Web Services Regions other than the China Regions.</p> </li> <li> <p> <code>IAM</code> – The portal uses Identity and Access Management to authenticate users and manage user permissions.</p> </li> </ul> <p>You can't change this value after you create a portal.</p> <p>Default: <code>SSO</code> </p> */
		portalAuthMode: FormControl<AuthMode | null | undefined>,

		/**
		 * <p>The email address that sends alarm notifications.</p> <important> <p>If you use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">IoT Events managed Lambda function</a> to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify the sender email address in Amazon SES</a>.</p> </important>
		 * Max length: 255
		 * Min length: 1
		 */
		notificationSenderEmail: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortalPostBodyFormGroup() {
		return new FormGroup<CreatePortalPostBodyFormProperties>({
			portalName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			portalDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			portalContactEmail: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[^@]+@[^@]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('.*')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			portalAuthMode: new FormControl<AuthMode | null | undefined>(undefined),
			notificationSenderEmail: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[^@]+@[^@]+')]),
		});

	}

	export interface CreatePortalPostBodyPortalLogoImageFile {
		data?: string;
		type?: ImageFileType;
	}
	export interface CreatePortalPostBodyPortalLogoImageFileFormProperties {
		data: FormControl<string | null | undefined>,
		type: FormControl<ImageFileType | null | undefined>,
	}
	export function CreateCreatePortalPostBodyPortalLogoImageFileFormGroup() {
		return new FormGroup<CreatePortalPostBodyPortalLogoImageFileFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ImageFileType | null | undefined>(undefined),
		});

	}

	export interface CreatePortalPostBodyAlarms {
		alarmRoleArn?: string;
		notificationLambdaArn?: string;
	}
	export interface CreatePortalPostBodyAlarmsFormProperties {
		alarmRoleArn: FormControl<string | null | undefined>,
		notificationLambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePortalPostBodyAlarmsFormGroup() {
		return new FormGroup<CreatePortalPostBodyAlarmsFormProperties>({
			alarmRoleArn: new FormControl<string | null | undefined>(undefined),
			notificationLambdaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProjectPostBody {

		/**
		 * The ID of the portal in which to create the project.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		portalId: string;

		/**
		 * A friendly name for the project.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		projectName: string;

		/**
		 * A description for the project.
		 * Max length: 2048
		 * Min length: 1
		 */
		projectDescription?: string | null;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;

		/** A list of key-value pairs that contain metadata for the project. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags?: {[id: string]: string };
	}
	export interface CreateProjectPostBodyFormProperties {

		/**
		 * The ID of the portal in which to create the project.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		portalId: FormControl<string | null | undefined>,

		/**
		 * A friendly name for the project.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		projectName: FormControl<string | null | undefined>,

		/**
		 * A description for the project.
		 * Max length: 2048
		 * Min length: 1
		 */
		projectDescription: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,

		/** A list of key-value pairs that contain metadata for the project. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateProjectPostBodyFormGroup() {
		return new FormGroup<CreateProjectPostBodyFormProperties>({
			portalId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			projectDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdateAccessPolicyPutBody {

		/**
		 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p> <note> <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p> </note>
		 * Required
		 */
		accessPolicyIdentity: UpdateAccessPolicyPutBodyAccessPolicyIdentity;

		/**
		 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
		 * Required
		 */
		accessPolicyResource: UpdateAccessPolicyPutBodyAccessPolicyResource;

		/**
		 * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
		 * Required
		 */
		accessPolicyPermission: Permission;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface UpdateAccessPolicyPutBodyFormProperties {

		/**
		 * The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.
		 * Required
		 */
		accessPolicyPermission: FormControl<Permission | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAccessPolicyPutBodyFormGroup() {
		return new FormGroup<UpdateAccessPolicyPutBodyFormProperties>({
			accessPolicyPermission: new FormControl<Permission | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface UpdateAccessPolicyPutBodyAccessPolicyIdentity {
		user?: UserIdentity;
		group?: GroupIdentity;
		iamUser?: IAMUserIdentity;
		iamRole?: IAMRoleIdentity;
	}
	export interface UpdateAccessPolicyPutBodyAccessPolicyIdentityFormProperties {
	}
	export function CreateUpdateAccessPolicyPutBodyAccessPolicyIdentityFormGroup() {
		return new FormGroup<UpdateAccessPolicyPutBodyAccessPolicyIdentityFormProperties>({
		});

	}

	export interface UpdateAccessPolicyPutBodyAccessPolicyResource {
		portal?: PortalResource;
		project?: ProjectResource;
	}
	export interface UpdateAccessPolicyPutBodyAccessPolicyResourceFormProperties {
	}
	export function CreateUpdateAccessPolicyPutBodyAccessPolicyResourceFormGroup() {
		return new FormGroup<UpdateAccessPolicyPutBodyAccessPolicyResourceFormProperties>({
		});

	}

	export interface UpdateAssetPutBody {

		/**
		 * A friendly name for the asset.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		assetName: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;

		/**
		 * A description for the asset.
		 * Max length: 2048
		 * Min length: 1
		 */
		assetDescription?: string | null;
	}
	export interface UpdateAssetPutBodyFormProperties {

		/**
		 * A friendly name for the asset.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		assetName: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * A description for the asset.
		 * Max length: 2048
		 * Min length: 1
		 */
		assetDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetPutBodyFormGroup() {
		return new FormGroup<UpdateAssetPutBodyFormProperties>({
			assetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
			assetDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
		});

	}

	export interface UpdateAssetModelPutBody {

		/**
		 * A unique, friendly name for the asset model.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		assetModelName: string;

		/**
		 * A description for the asset model.
		 * Max length: 2048
		 * Min length: 1
		 */
		assetModelDescription?: string | null;

		/** <p>The updated property definitions of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 200 properties per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p> */
		assetModelProperties?: Array<AssetModelProperty>;

		/** <p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>You can specify up to 10 hierarchies per asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p> */
		assetModelHierarchies?: Array<AssetModelHierarchy>;

		/** The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties. Each composite model has a type that defines the properties that the composite model supports. Use composite asset models to define alarms on this asset model. */
		assetModelCompositeModels?: Array<AssetModelCompositeModel>;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface UpdateAssetModelPutBodyFormProperties {

		/**
		 * A unique, friendly name for the asset model.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		assetModelName: FormControl<string | null | undefined>,

		/**
		 * A description for the asset model.
		 * Max length: 2048
		 * Min length: 1
		 */
		assetModelDescription: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetModelPutBodyFormGroup() {
		return new FormGroup<UpdateAssetModelPutBodyFormProperties>({
			assetModelName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			assetModelDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface UpdateDashboardPutBody {

		/**
		 * A new friendly name for the dashboard.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		dashboardName: string;

		/**
		 * A new description for the dashboard.
		 * Max length: 2048
		 * Min length: 1
		 */
		dashboardDescription?: string | null;

		/**
		 * The new dashboard definition, as specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 204800
		 * Min length: 0
		 */
		dashboardDefinition: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface UpdateDashboardPutBodyFormProperties {

		/**
		 * A new friendly name for the dashboard.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		dashboardName: FormControl<string | null | undefined>,

		/**
		 * A new description for the dashboard.
		 * Max length: 2048
		 * Min length: 1
		 */
		dashboardDescription: FormControl<string | null | undefined>,

		/**
		 * The new dashboard definition, as specified in a JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 204800
		 * Min length: 0
		 */
		dashboardDefinition: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDashboardPutBodyFormGroup() {
		return new FormGroup<UpdateDashboardPutBodyFormProperties>({
			dashboardName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			dashboardDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			dashboardDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(204800), Validators.pattern('.+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface UpdateGatewayPutBody {

		/**
		 * A unique, friendly name for the gateway.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		gatewayName: string;
	}
	export interface UpdateGatewayPutBodyFormProperties {

		/**
		 * A unique, friendly name for the gateway.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		gatewayName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayPutBodyFormGroup() {
		return new FormGroup<UpdateGatewayPutBodyFormProperties>({
			gatewayName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
		});

	}

	export interface UpdatePortalPutBody {

		/**
		 * A new friendly name for the portal.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		portalName: string;

		/**
		 * A new description for the portal.
		 * Max length: 2048
		 * Min length: 1
		 */
		portalDescription?: string | null;

		/**
		 * The Amazon Web Services administrator's contact email address.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		portalContactEmail: string;

		/** <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul> */
		portalLogoImage?: UpdatePortalPutBodyPortalLogoImage;

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		roleArn: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;

		/**
		 * The email address that sends alarm notifications.
		 * Max length: 255
		 * Min length: 1
		 */
		notificationSenderEmail?: string | null;

		/** Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>. */
		alarms?: UpdatePortalPutBodyAlarms;
	}
	export interface UpdatePortalPutBodyFormProperties {

		/**
		 * A new friendly name for the portal.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		portalName: FormControl<string | null | undefined>,

		/**
		 * A new description for the portal.
		 * Max length: 2048
		 * Min length: 1
		 */
		portalDescription: FormControl<string | null | undefined>,

		/**
		 * The Amazon Web Services administrator's contact email address.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		portalContactEmail: FormControl<string | null | undefined>,

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		roleArn: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The email address that sends alarm notifications.
		 * Max length: 255
		 * Min length: 1
		 */
		notificationSenderEmail: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortalPutBodyFormGroup() {
		return new FormGroup<UpdatePortalPutBodyFormProperties>({
			portalName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			portalDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			portalContactEmail: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[^@]+@[^@]+')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1600), Validators.pattern('.*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
			notificationSenderEmail: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[^@]+@[^@]+')]),
		});

	}

	export interface UpdatePortalPutBodyPortalLogoImage {
		id?: string;

		/** Contains an image file. */
		file?: ImageFile;
	}
	export interface UpdatePortalPutBodyPortalLogoImageFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortalPutBodyPortalLogoImageFormGroup() {
		return new FormGroup<UpdatePortalPutBodyPortalLogoImageFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePortalPutBodyAlarms {
		alarmRoleArn?: string;
		notificationLambdaArn?: string;
	}
	export interface UpdatePortalPutBodyAlarmsFormProperties {
		alarmRoleArn: FormControl<string | null | undefined>,
		notificationLambdaArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePortalPutBodyAlarmsFormGroup() {
		return new FormGroup<UpdatePortalPutBodyAlarmsFormProperties>({
			alarmRoleArn: new FormControl<string | null | undefined>(undefined),
			notificationLambdaArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectPutBody {

		/**
		 * A new friendly name for the project.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		projectName: string;

		/**
		 * A new description for the project.
		 * Max length: 2048
		 * Min length: 1
		 */
		projectDescription?: string | null;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface UpdateProjectPutBodyFormProperties {

		/**
		 * A new friendly name for the project.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		projectName: FormControl<string | null | undefined>,

		/**
		 * A new description for the project.
		 * Max length: 2048
		 * Min length: 1
		 */
		projectDescription: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectPutBodyFormGroup() {
		return new FormGroup<UpdateProjectPutBodyFormProperties>({
			projectName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			projectDescription: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface DeleteTimeSeriesPostBody {

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface DeleteTimeSeriesPostBodyFormProperties {

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTimeSeriesPostBodyFormGroup() {
		return new FormGroup<DeleteTimeSeriesPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface UpdateAssetPropertyPutBody {

		/**
		 * <p>The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the alias is removed from the property.</p>
		 * Min length: 1
		 */
		propertyAlias?: string | null;

		/** <p>The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p> */
		propertyNotificationState?: PropertyNotificationState | null;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;

		/**
		 * The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the <code>assetModelProperty</code> in the asset model.
		 * Max length: 256
		 * Min length: 1
		 */
		propertyUnit?: string | null;
	}
	export interface UpdateAssetPropertyPutBodyFormProperties {

		/**
		 * <p>The alias that identifies the property, such as an OPC-UA server data stream path (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the alias is removed from the property.</p>
		 * Min length: 1
		 */
		propertyAlias: FormControl<string | null | undefined>,

		/** <p>The MQTT notification state (enabled or disabled) for this asset property. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p> <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p> */
		propertyNotificationState: FormControl<PropertyNotificationState | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the <code>assetModelProperty</code> in the asset model.
		 * Max length: 256
		 * Min length: 1
		 */
		propertyUnit: FormControl<string | null | undefined>,
	}
	export function CreateUpdateAssetPropertyPutBodyFormGroup() {
		return new FormGroup<UpdateAssetPropertyPutBodyFormProperties>({
			propertyAlias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
			propertyNotificationState: new FormControl<PropertyNotificationState | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
			propertyUnit: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(256), Validators.pattern('[^\u0000-\u001F\u007F]+')]),
		});

	}

	export interface PutDefaultEncryptionConfigurationPostBody {

		/**
		 * The type of encryption used for the encryption configuration.
		 * Required
		 */
		encryptionType: EncryptionType;

		/**
		 * The Key ID of the customer managed key used for KMS encryption. This is required if you use <code>KMS_BASED_ENCRYPTION</code>.
		 * Max length: 2048
		 * Min length: 1
		 */
		kmsKeyId?: string | null;
	}
	export interface PutDefaultEncryptionConfigurationPostBodyFormProperties {

		/**
		 * The type of encryption used for the encryption configuration.
		 * Required
		 */
		encryptionType: FormControl<EncryptionType | null | undefined>,

		/**
		 * The Key ID of the customer managed key used for KMS encryption. This is required if you use <code>KMS_BASED_ENCRYPTION</code>.
		 * Max length: 2048
		 * Min length: 1
		 */
		kmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreatePutDefaultEncryptionConfigurationPostBodyFormGroup() {
		return new FormGroup<PutDefaultEncryptionConfigurationPostBodyFormProperties>({
			encryptionType: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
		});

	}

	export interface PutLoggingOptionsPutBody {

		/**
		 * Contains logging options.
		 * Required
		 */
		loggingOptions: PutLoggingOptionsPutBodyLoggingOptions;
	}
	export interface PutLoggingOptionsPutBodyFormProperties {
	}
	export function CreatePutLoggingOptionsPutBodyFormGroup() {
		return new FormGroup<PutLoggingOptionsPutBodyFormProperties>({
		});

	}

	export interface PutLoggingOptionsPutBodyLoggingOptions {
		level?: LoggingLevel;
	}
	export interface PutLoggingOptionsPutBodyLoggingOptionsFormProperties {
		level: FormControl<LoggingLevel | null | undefined>,
	}
	export function CreatePutLoggingOptionsPutBodyLoggingOptionsFormGroup() {
		return new FormGroup<PutLoggingOptionsPutBodyLoggingOptionsFormProperties>({
			level: new FormControl<LoggingLevel | null | undefined>(undefined),
		});

	}

	export interface PutStorageConfigurationPostBody {

		/**
		 * <p>The storage tier that you specified for your data. The <code>storageType</code> parameter can be one of the following values:</p> <ul> <li> <p> <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.</p> </li> <li> <p> <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.</p> </li> </ul>
		 * Required
		 */
		storageType: StorageType;

		/** Contains information about the storage destination. */
		multiLayerStorage?: PutStorageConfigurationPostBodyMultiLayerStorage;

		/** <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The <code>disassociatedDataStorage</code> can be one of the following values:</p> <ul> <li> <p> <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p> <important> <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p> </important> </li> <li> <p> <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a> in the <i>IoT SiteWise User Guide</i>.</p> */
		disassociatedDataStorage?: PropertyNotificationState | null;

		/** How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier. */
		retentionPeriod?: PutStorageConfigurationPostBodyRetentionPeriod;
	}
	export interface PutStorageConfigurationPostBodyFormProperties {

		/**
		 * <p>The storage tier that you specified for your data. The <code>storageType</code> parameter can be one of the following values:</p> <ul> <li> <p> <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier. The hot tier is a service-managed database.</p> </li> <li> <p> <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier. The cold tier is a customer-managed Amazon S3 bucket.</p> </li> </ul>
		 * Required
		 */
		storageType: FormControl<StorageType | null | undefined>,

		/** <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties. The <code>disassociatedDataStorage</code> can be one of the following values:</p> <ul> <li> <p> <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p> <important> <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p> </important> </li> <li> <p> <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a> in the <i>IoT SiteWise User Guide</i>.</p> */
		disassociatedDataStorage: FormControl<PropertyNotificationState | null | undefined>,
	}
	export function CreatePutStorageConfigurationPostBodyFormGroup() {
		return new FormGroup<PutStorageConfigurationPostBodyFormProperties>({
			storageType: new FormControl<StorageType | null | undefined>(undefined, [Validators.required]),
			disassociatedDataStorage: new FormControl<PropertyNotificationState | null | undefined>(undefined),
		});

	}

	export interface PutStorageConfigurationPostBodyMultiLayerStorage {
		customerManagedS3Storage?: CustomerManagedS3Storage;
	}
	export interface PutStorageConfigurationPostBodyMultiLayerStorageFormProperties {
	}
	export function CreatePutStorageConfigurationPostBodyMultiLayerStorageFormGroup() {
		return new FormGroup<PutStorageConfigurationPostBodyMultiLayerStorageFormProperties>({
		});

	}

	export interface PutStorageConfigurationPostBodyRetentionPeriod {
		numberOfDays?: number | null;
		unlimited?: boolean | null;
	}
	export interface PutStorageConfigurationPostBodyRetentionPeriodFormProperties {
		numberOfDays: FormControl<number | null | undefined>,
		unlimited: FormControl<boolean | null | undefined>,
	}
	export function CreatePutStorageConfigurationPostBodyRetentionPeriodFormGroup() {
		return new FormGroup<PutStorageConfigurationPostBodyRetentionPeriodFormProperties>({
			numberOfDays: new FormControl<number | null | undefined>(undefined),
			unlimited: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DisassociateAssetsPostBody {

		/**
		 * The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		hierarchyId: string;

		/**
		 * The ID of the child asset to disassociate.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		childAssetId: string;

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface DisassociateAssetsPostBodyFormProperties {

		/**
		 * The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings of assets to be formed that all come from the same asset model. You can use the hierarchy ID to identify the correct asset to disassociate. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		hierarchyId: FormControl<string | null | undefined>,

		/**
		 * The ID of the child asset to disassociate.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		childAssetId: FormControl<string | null | undefined>,

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateAssetsPostBodyFormGroup() {
		return new FormGroup<DisassociateAssetsPostBodyFormProperties>({
			hierarchyId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
			childAssetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36), Validators.pattern('^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface DisassociateTimeSeriesFromAssetPropertyPostBody {

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken?: string | null;
	}
	export interface DisassociateTimeSeriesFromAssetPropertyPostBodyFormProperties {

		/**
		 * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
		 * Max length: 64
		 * Min length: 36
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisassociateTimeSeriesFromAssetPropertyPostBodyFormGroup() {
		return new FormGroup<DisassociateTimeSeriesFromAssetPropertyPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(36), Validators.maxLength(64), Validators.pattern('\S{36,64}')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A list of key-value pairs that contain metadata for the resource. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateGatewayCapabilityConfigurationPostBody {

		/**
		 * The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		capabilityNamespace: string;

		/**
		 * The JSON document that defines the configuration for the gateway capability. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 104857600
		 * Min length: 1
		 */
		capabilityConfiguration: string;
	}
	export interface UpdateGatewayCapabilityConfigurationPostBodyFormProperties {

		/**
		 * The namespace of the gateway capability configuration to be updated. For example, if you configure OPC-UA sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as <code>1</code>.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		capabilityNamespace: FormControl<string | null | undefined>,

		/**
		 * The JSON document that defines the configuration for the gateway capability. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.
		 * Required
		 * Max length: 104857600
		 * Min length: 1
		 */
		capabilityConfiguration: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGatewayCapabilityConfigurationPostBodyFormGroup() {
		return new FormGroup<UpdateGatewayCapabilityConfigurationPostBodyFormProperties>({
			capabilityNamespace: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512), Validators.pattern('^[a-zA-Z]+:[a-zA-Z]+:[0-9]+$')]),
			capabilityConfiguration: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(104857600)]),
		});

	}

}

