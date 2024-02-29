import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetRecordResponse {

		/** Required */
		Records: Array<BatchGetRecordResultDetail>;

		/** Required */
		Errors: Array<BatchGetRecordError>;

		/** Required */
		UnprocessedIdentifiers: Array<BatchGetRecordIdentifier>;
	}
	export interface BatchGetRecordResponseFormProperties {
	}
	export function CreateBatchGetRecordResponseFormGroup() {
		return new FormGroup<BatchGetRecordResponseFormProperties>({
		});

	}


	/** The output of records that have been retrieved in a batch. */
	export interface BatchGetRecordResultDetail {

		/** Required */
		FeatureGroupName: string;

		/** Required */
		RecordIdentifierValueAsString: string;

		/** Required */
		Record: Array<FeatureValue>;
		ExpiresAt?: string;
	}

	/** The output of records that have been retrieved in a batch. */
	export interface BatchGetRecordResultDetailFormProperties {

		/** Required */
		FeatureGroupName: FormControl<string | null | undefined>,

		/** Required */
		RecordIdentifierValueAsString: FormControl<string | null | undefined>,
		ExpiresAt: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetRecordResultDetailFormGroup() {
		return new FormGroup<BatchGetRecordResultDetailFormProperties>({
			FeatureGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecordIdentifierValueAsString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ExpiresAt: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value associated with a feature. */
	export interface FeatureValue {

		/** Required */
		FeatureName: string;

		/** Required */
		ValueAsString: string;
	}

	/** The value associated with a feature. */
	export interface FeatureValueFormProperties {

		/** Required */
		FeatureName: FormControl<string | null | undefined>,

		/** Required */
		ValueAsString: FormControl<string | null | undefined>,
	}
	export function CreateFeatureValueFormGroup() {
		return new FormGroup<FeatureValueFormProperties>({
			FeatureName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValueAsString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The error that has occurred when attempting to retrieve a batch of Records. */
	export interface BatchGetRecordError {

		/** Required */
		FeatureGroupName: string;

		/** Required */
		RecordIdentifierValueAsString: string;

		/** Required */
		ErrorCode: string;

		/** Required */
		ErrorMessage: string;
	}

	/** The error that has occurred when attempting to retrieve a batch of Records. */
	export interface BatchGetRecordErrorFormProperties {

		/** Required */
		FeatureGroupName: FormControl<string | null | undefined>,

		/** Required */
		RecordIdentifierValueAsString: FormControl<string | null | undefined>,

		/** Required */
		ErrorCode: FormControl<string | null | undefined>,

		/** Required */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetRecordErrorFormGroup() {
		return new FormGroup<BatchGetRecordErrorFormProperties>({
			FeatureGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecordIdentifierValueAsString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The identifier that identifies the batch of Records you are retrieving in a batch. */
	export interface BatchGetRecordIdentifier {

		/** Required */
		FeatureGroupName: string;

		/** Required */
		RecordIdentifiersValueAsString: Array<string>;
		FeatureNames?: Array<string>;
	}

	/** The identifier that identifies the batch of Records you are retrieving in a batch. */
	export interface BatchGetRecordIdentifierFormProperties {

		/** Required */
		FeatureGroupName: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetRecordIdentifierFormGroup() {
		return new FormGroup<BatchGetRecordIdentifierFormProperties>({
			FeatureGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValidationError {
	}
	export interface ValidationErrorFormProperties {
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
		});

	}

	export interface InternalFailure {
	}
	export interface InternalFailureFormProperties {
	}
	export function CreateInternalFailureFormGroup() {
		return new FormGroup<InternalFailureFormProperties>({
		});

	}

	export interface ServiceUnavailable {
	}
	export interface ServiceUnavailableFormProperties {
	}
	export function CreateServiceUnavailableFormGroup() {
		return new FormGroup<ServiceUnavailableFormProperties>({
		});

	}

	export interface AccessForbidden {
	}
	export interface AccessForbiddenFormProperties {
	}
	export function CreateAccessForbiddenFormGroup() {
		return new FormGroup<AccessForbiddenFormProperties>({
		});

	}

	export enum TargetStore { OnlineStore = 'OnlineStore', OfflineStore = 'OfflineStore' }

	export interface GetRecordResponse {
		Record?: Array<FeatureValue>;
		ExpiresAt?: string;
	}
	export interface GetRecordResponseFormProperties {
		ExpiresAt: FormControl<string | null | undefined>,
	}
	export function CreateGetRecordResponseFormGroup() {
		return new FormGroup<GetRecordResponseFormProperties>({
			ExpiresAt: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFound {
	}
	export interface ResourceNotFoundFormProperties {
	}
	export function CreateResourceNotFoundFormGroup() {
		return new FormGroup<ResourceNotFoundFormProperties>({
		});

	}

	export enum TtlDurationUnit { Seconds = 'Seconds', Minutes = 'Minutes', Hours = 'Hours', Days = 'Days', Weeks = 'Weeks' }

	export enum ExpirationTimeResponse { Enabled = 'Enabled', Disabled = 'Disabled' }

	export interface BatchGetRecordRequest {

		/** Required */
		Identifiers: Array<BatchGetRecordIdentifier>;
		ExpirationTimeResponse?: ExpirationTimeResponse;
	}
	export interface BatchGetRecordRequestFormProperties {
		ExpirationTimeResponse: FormControl<ExpirationTimeResponse | null | undefined>,
	}
	export function CreateBatchGetRecordRequestFormGroup() {
		return new FormGroup<BatchGetRecordRequestFormProperties>({
			ExpirationTimeResponse: new FormControl<ExpirationTimeResponse | null | undefined>(undefined),
		});

	}

	export enum DeletionMode { SoftDelete = 'SoftDelete', HardDelete = 'HardDelete' }

	export interface DeleteRecordRequest {
	}
	export interface DeleteRecordRequestFormProperties {
	}
	export function CreateDeleteRecordRequestFormGroup() {
		return new FormGroup<DeleteRecordRequestFormProperties>({
		});

	}

	export interface GetRecordRequest {
	}
	export interface GetRecordRequestFormProperties {
	}
	export function CreateGetRecordRequestFormGroup() {
		return new FormGroup<GetRecordRequestFormProperties>({
		});

	}


	/** Time to live duration, where the record is hard deleted after the expiration time is reached; <code>ExpiresAt</code> = <code>EventTime</code> + <code>TtlDuration</code>. For information on HardDelete, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html">DeleteRecord</a> API in the Amazon SageMaker API Reference guide. */
	export interface TtlDuration {

		/** Required */
		Unit: TtlDurationUnit;

		/** Required */
		Value: number;
	}

	/** Time to live duration, where the record is hard deleted after the expiration time is reached; <code>ExpiresAt</code> = <code>EventTime</code> + <code>TtlDuration</code>. For information on HardDelete, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html">DeleteRecord</a> API in the Amazon SageMaker API Reference guide. */
	export interface TtlDurationFormProperties {

		/** Required */
		Unit: FormControl<TtlDurationUnit | null | undefined>,

		/** Required */
		Value: FormControl<number | null | undefined>,
	}
	export function CreateTtlDurationFormGroup() {
		return new FormGroup<TtlDurationFormProperties>({
			Unit: new FormControl<TtlDurationUnit | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutRecordRequest {

		/** Required */
		Record: Array<FeatureValue>;
		TargetStores?: Array<TargetStore>;
		TtlDuration?: TtlDuration;
	}
	export interface PutRecordRequestFormProperties {
	}
	export function CreatePutRecordRequestFormGroup() {
		return new FormGroup<PutRecordRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a batch of <code>Records</code> from a <code>FeatureGroup</code>.
		 * Post BatchGetRecord
		 * @return {BatchGetRecordResponse} Success
		 */
		BatchGetRecord(requestBody: BatchGetRecordPostBody): Observable<BatchGetRecordResponse> {
			return this.http.post<BatchGetRecordResponse>(this.baseUri + 'BatchGetRecord', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a <code>Record</code> from a <code>FeatureGroup</code> in the <code>OnlineStore</code>. Feature Store supports both <code>SoftDelete</code> and <code>HardDelete</code>. For <code>SoftDelete</code> (default), feature columns are set to <code>null</code> and the record is no longer retrievable by <code>GetRecord</code> or <code>BatchGetRecord</code>. For <code>HardDelete</code>, the complete <code>Record</code> is removed from the <code>OnlineStore</code>. In both cases, Feature Store appends the deleted record marker to the <code>OfflineStore</code> with feature values set to <code>null</code>, <code>is_deleted</code> value set to <code>True</code>, and <code>EventTime</code> set to the delete input <code>EventTime</code>.</p> <p>Note that the <code>EventTime</code> specified in <code>DeleteRecord</code> should be set later than the <code>EventTime</code> of the existing record in the <code>OnlineStore</code> for that <code>RecordIdentifer</code>. If it is not, the deletion does not occur:</p> <ul> <li> <p>For <code>SoftDelete</code>, the existing (undeleted) record remains in the <code>OnlineStore</code>, though the delete record marker is still written to the <code>OfflineStore</code>.</p> </li> <li> <p> <code>HardDelete</code> returns <code>EventTime</code>: <code>400 ValidationException</code> to indicate that the delete operation failed. No delete record marker is written to the <code>OfflineStore</code>.</p> </li> </ul>
		 * Delete FeatureGroup/{FeatureGroupName}#RecordIdentifierValueAsString&EventTime
		 * @param {string} FeatureGroupName The name or Amazon Resource Name (ARN) of the feature group to delete the record from. 
		 *     Min length: 1    Max length: 150
		 * @param {string} RecordIdentifierValueAsString The value for the <code>RecordIdentifier</code> that uniquely identifies the record, in string format. 
		 *     Max length: 358400
		 * @param {string} EventTime Timestamp indicating when the deletion event occurred. <code>EventTime</code> can be used to query data at a certain point in time.
		 *     Max length: 358400
		 * @param {Array<TargetStore>} TargetStores A list of stores from which you're deleting the record. By default, Feature Store deletes the record from all of the stores that you're using for the <code>FeatureGroup</code>.
		 *     Minimum items: 1    Maximum items: 2
		 * @param {DeletionMode} DeletionMode The name of the deletion mode for deleting the record. By default, the deletion mode is set to <code>SoftDelete</code>.
		 * @return {void} Success
		 */
		DeleteRecord(FeatureGroupName: string, RecordIdentifierValueAsString: string, EventTime: string, TargetStores: Array<TargetStore> | null | undefined, DeletionMode: DeletionMode | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'FeatureGroup/' + (FeatureGroupName == null ? '' : encodeURIComponent(FeatureGroupName)) + '#RecordIdentifierValueAsString&EventTime&RecordIdentifierValueAsString=' + (RecordIdentifierValueAsString == null ? '' : encodeURIComponent(RecordIdentifierValueAsString)) + '&EventTime=' + (EventTime == null ? '' : encodeURIComponent(EventTime)) + '&' + TargetStores?.map(z => `TargetStores=${z}`).join('&') + '&DeletionMode=' + DeletionMode, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Use for <code>OnlineStore</code> serving from a <code>FeatureStore</code>. Only the latest records stored in the <code>OnlineStore</code> can be retrieved. If no Record with <code>RecordIdentifierValue</code> is found, then an empty result is returned.
		 * Get FeatureGroup/{FeatureGroupName}#RecordIdentifierValueAsString
		 * @param {string} FeatureGroupName The name or Amazon Resource Name (ARN) of the feature group from which you want to retrieve a record.
		 *     Min length: 1    Max length: 150
		 * @param {string} RecordIdentifierValueAsString The value that corresponds to <code>RecordIdentifier</code> type and uniquely identifies the record in the <code>FeatureGroup</code>. 
		 *     Max length: 358400
		 * @param {Array<string>} FeatureName List of names of Features to be retrieved. If not specified, the latest value for all the Features are returned.
		 *     Minimum items: 1
		 * @param {ExpirationTimeResponse} ExpirationTimeResponse Parameter to request <code>ExpiresAt</code> in response. If <code>Enabled</code>, <code>GetRecord</code> will return the value of <code>ExpiresAt</code>, if it is not null. If <code>Disabled</code> and null, <code>GetRecord</code> will return null.
		 * @return {GetRecordResponse} Success
		 */
		GetRecord(FeatureGroupName: string, RecordIdentifierValueAsString: string, FeatureName: Array<string> | null | undefined, ExpirationTimeResponse: ExpirationTimeResponse | null | undefined): Observable<GetRecordResponse> {
			return this.http.get<GetRecordResponse>(this.baseUri + 'FeatureGroup/' + (FeatureGroupName == null ? '' : encodeURIComponent(FeatureGroupName)) + '#RecordIdentifierValueAsString&RecordIdentifierValueAsString=' + (RecordIdentifierValueAsString == null ? '' : encodeURIComponent(RecordIdentifierValueAsString)) + '&' + FeatureName?.map(z => `FeatureName=${encodeURIComponent(z)}`).join('&') + '&ExpirationTimeResponse=' + ExpirationTimeResponse, {});
		}

		/**
		 * <p>The <code>PutRecord</code> API is used to ingest a list of <code>Records</code> into your feature group. </p> <p>If a new record’s <code>EventTime</code> is greater, the new record is written to both the <code>OnlineStore</code> and <code>OfflineStore</code>. Otherwise, the record is a historic record and it is written only to the <code>OfflineStore</code>. </p> <p>You can specify the ingestion to be applied to the <code>OnlineStore</code>, <code>OfflineStore</code>, or both by using the <code>TargetStores</code> request parameter. </p> <p>You can set the ingested record to expire at a given time to live (TTL) duration after the record’s event time, <code>ExpiresAt</code> = <code>EventTime</code> + <code>TtlDuration</code>, by specifying the <code>TtlDuration</code> parameter. A record level <code>TtlDuration</code> is set when specifying the <code>TtlDuration</code> parameter using the <code>PutRecord</code> API call. If the input <code>TtlDuration</code> is <code>null</code> or unspecified, <code>TtlDuration</code> is set to the default feature group level <code>TtlDuration</code>. A record level <code>TtlDuration</code> supersedes the group level <code>TtlDuration</code>.</p>
		 * Put FeatureGroup/{FeatureGroupName}
		 * @param {string} FeatureGroupName The name or Amazon Resource Name (ARN) of the feature group that you want to insert the record into.
		 *     Min length: 1    Max length: 150
		 * @return {void} Success
		 */
		PutRecord(FeatureGroupName: string, requestBody: PutRecordPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'FeatureGroup/' + (FeatureGroupName == null ? '' : encodeURIComponent(FeatureGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface BatchGetRecordPostBody {

		/**
		 * A list containing the name or Amazon Resource Name (ARN) of the <code>FeatureGroup</code>, the list of names of <code>Feature</code>s to be retrieved, and the corresponding <code>RecordIdentifier</code> values as strings.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Identifiers: Array<BatchGetRecordIdentifier>;

		/** Parameter to request <code>ExpiresAt</code> in response. If <code>Enabled</code>, <code>BatchGetRecord</code> will return the value of <code>ExpiresAt</code>, if it is not null. If <code>Disabled</code> and null, <code>BatchGetRecord</code> will return null. */
		ExpirationTimeResponse?: ExpirationTimeResponse | null;
	}
	export interface BatchGetRecordPostBodyFormProperties {

		/** Parameter to request <code>ExpiresAt</code> in response. If <code>Enabled</code>, <code>BatchGetRecord</code> will return the value of <code>ExpiresAt</code>, if it is not null. If <code>Disabled</code> and null, <code>BatchGetRecord</code> will return null. */
		ExpirationTimeResponse: FormControl<ExpirationTimeResponse | null | undefined>,
	}
	export function CreateBatchGetRecordPostBodyFormGroup() {
		return new FormGroup<BatchGetRecordPostBodyFormProperties>({
			ExpirationTimeResponse: new FormControl<ExpirationTimeResponse | null | undefined>(undefined),
		});

	}

	export interface PutRecordPutBody {

		/**
		 * <p>List of FeatureValues to be inserted. This will be a full over-write. If you only want to update few of the feature values, do the following:</p> <ul> <li> <p>Use <code>GetRecord</code> to retrieve the latest record.</p> </li> <li> <p>Update the record returned from <code>GetRecord</code>. </p> </li> <li> <p>Use <code>PutRecord</code> to update feature values.</p> </li> </ul>
		 * Required
		 * Minimum items: 1
		 */
		Record: Array<FeatureValue>;

		/**
		 * A list of stores to which you're adding the record. By default, Feature Store adds the record to all of the stores that you're using for the <code>FeatureGroup</code>.
		 * Minimum items: 1
		 * Maximum items: 2
		 */
		TargetStores?: Array<TargetStore>;

		/** Time to live duration, where the record is hard deleted after the expiration time is reached; <code>ExpiresAt</code> = <code>EventTime</code> + <code>TtlDuration</code>. For information on HardDelete, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html">DeleteRecord</a> API in the Amazon SageMaker API Reference guide. */
		TtlDuration?: PutRecordPutBodyTtlDuration;
	}
	export interface PutRecordPutBodyFormProperties {
	}
	export function CreatePutRecordPutBodyFormGroup() {
		return new FormGroup<PutRecordPutBodyFormProperties>({
		});

	}

	export interface PutRecordPutBodyTtlDuration {
		Unit?: TtlDurationUnit;
		Value?: number | null;
	}
	export interface PutRecordPutBodyTtlDurationFormProperties {
		Unit: FormControl<TtlDurationUnit | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreatePutRecordPutBodyTtlDurationFormGroup() {
		return new FormGroup<PutRecordPutBodyTtlDurationFormProperties>({
			Unit: new FormControl<TtlDurationUnit | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

}

