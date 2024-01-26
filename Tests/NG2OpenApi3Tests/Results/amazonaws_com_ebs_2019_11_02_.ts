import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CompleteSnapshotResponse {
		Status?: Status;
	}
	export interface CompleteSnapshotResponseFormProperties {
		Status: FormControl<Status | null | undefined>,
	}
	export function CreateCompleteSnapshotResponseFormGroup() {
		return new FormGroup<CompleteSnapshotResponseFormProperties>({
			Status: new FormControl<Status | null | undefined>(undefined),
		});

	}

	export enum Status { completed = 0, pending = 1, error = 2 }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface RequestThrottledException {
	}
	export interface RequestThrottledExceptionFormProperties {
	}
	export function CreateRequestThrottledExceptionFormGroup() {
		return new FormGroup<RequestThrottledExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface GetSnapshotBlockResponse {
		BlockData?: string;
	}
	export interface GetSnapshotBlockResponseFormProperties {
		BlockData: FormControl<string | null | undefined>,
	}
	export function CreateGetSnapshotBlockResponseFormGroup() {
		return new FormGroup<GetSnapshotBlockResponseFormProperties>({
			BlockData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChangedBlocksResponse {
		ChangedBlocks?: Array<ChangedBlock>;
		ExpiryTime?: Date;
		VolumeSize?: number | null;
		BlockSize?: number | null;
		NextToken?: string;
	}
	export interface ListChangedBlocksResponseFormProperties {
		ExpiryTime: FormControl<Date | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		BlockSize: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangedBlocksResponseFormGroup() {
		return new FormGroup<ListChangedBlocksResponseFormProperties>({
			ExpiryTime: new FormControl<Date | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			BlockSize: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of the same volume/snapshot lineage. */
	export interface ChangedBlock {
		BlockIndex?: number | null;
		FirstBlockToken?: string;
		SecondBlockToken?: string;
	}

	/** A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of the same volume/snapshot lineage. */
	export interface ChangedBlockFormProperties {
		BlockIndex: FormControl<number | null | undefined>,
		FirstBlockToken: FormControl<string | null | undefined>,
		SecondBlockToken: FormControl<string | null | undefined>,
	}
	export function CreateChangedBlockFormGroup() {
		return new FormGroup<ChangedBlockFormProperties>({
			BlockIndex: new FormControl<number | null | undefined>(undefined),
			FirstBlockToken: new FormControl<string | null | undefined>(undefined),
			SecondBlockToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSnapshotBlocksResponse {
		Blocks?: Array<Block>;
		ExpiryTime?: Date;
		VolumeSize?: number | null;
		BlockSize?: number | null;
		NextToken?: string;
	}
	export interface ListSnapshotBlocksResponseFormProperties {
		ExpiryTime: FormControl<Date | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		BlockSize: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSnapshotBlocksResponseFormGroup() {
		return new FormGroup<ListSnapshotBlocksResponseFormProperties>({
			ExpiryTime: new FormControl<Date | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			BlockSize: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A block of data in an Amazon Elastic Block Store snapshot. */
	export interface Block {
		BlockIndex?: number | null;
		BlockToken?: string;
	}

	/** A block of data in an Amazon Elastic Block Store snapshot. */
	export interface BlockFormProperties {
		BlockIndex: FormControl<number | null | undefined>,
		BlockToken: FormControl<string | null | undefined>,
	}
	export function CreateBlockFormGroup() {
		return new FormGroup<BlockFormProperties>({
			BlockIndex: new FormControl<number | null | undefined>(undefined),
			BlockToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutSnapshotBlockResponse {
	}
	export interface PutSnapshotBlockResponseFormProperties {
	}
	export function CreatePutSnapshotBlockResponseFormGroup() {
		return new FormGroup<PutSnapshotBlockResponseFormProperties>({
		});

	}

	export interface StartSnapshotResponse {
		Description?: string;
		SnapshotId?: string;
		OwnerId?: string;
		Status?: Status;
		StartTime?: Date;
		VolumeSize?: number | null;
		BlockSize?: number | null;
		Tags?: Array<Tag>;
		ParentSnapshotId?: string;
		KmsKeyArn?: string;
		SseType?: SSEType;
	}
	export interface StartSnapshotResponseFormProperties {
		Description: FormControl<string | null | undefined>,
		SnapshotId: FormControl<string | null | undefined>,
		OwnerId: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		BlockSize: FormControl<number | null | undefined>,
		ParentSnapshotId: FormControl<string | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		SseType: FormControl<SSEType | null | undefined>,
	}
	export function CreateStartSnapshotResponseFormGroup() {
		return new FormGroup<StartSnapshotResponseFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			SnapshotId: new FormControl<string | null | undefined>(undefined),
			OwnerId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			BlockSize: new FormControl<number | null | undefined>(undefined),
			ParentSnapshotId: new FormControl<string | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			SseType: new FormControl<SSEType | null | undefined>(undefined),
		});

	}


	/** Describes a tag. */
	export interface Tag {
		Key?: string;
		Value?: string;
	}

	/** Describes a tag. */
	export interface TagFormProperties {
		Key: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SSEType { 'sse-ebs' = 0, 'sse-kms' = 1, none = 2 }

	export interface ConcurrentLimitExceededException {
	}
	export interface ConcurrentLimitExceededExceptionFormProperties {
	}
	export function CreateConcurrentLimitExceededExceptionFormGroup() {
		return new FormGroup<ConcurrentLimitExceededExceptionFormProperties>({
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export enum ChecksumAggregationMethod { LINEAR = 0 }

	export enum ChecksumAlgorithm { SHA256 = 0 }

	export interface CompleteSnapshotRequest {
	}
	export interface CompleteSnapshotRequestFormProperties {
	}
	export function CreateCompleteSnapshotRequestFormGroup() {
		return new FormGroup<CompleteSnapshotRequestFormProperties>({
		});

	}

	export interface GetSnapshotBlockRequest {
	}
	export interface GetSnapshotBlockRequestFormProperties {
	}
	export function CreateGetSnapshotBlockRequestFormGroup() {
		return new FormGroup<GetSnapshotBlockRequestFormProperties>({
		});

	}

	export interface ListChangedBlocksRequest {
	}
	export interface ListChangedBlocksRequestFormProperties {
	}
	export function CreateListChangedBlocksRequestFormGroup() {
		return new FormGroup<ListChangedBlocksRequestFormProperties>({
		});

	}

	export interface ListSnapshotBlocksRequest {
	}
	export interface ListSnapshotBlocksRequestFormProperties {
	}
	export function CreateListSnapshotBlocksRequestFormGroup() {
		return new FormGroup<ListSnapshotBlocksRequestFormProperties>({
		});

	}

	export interface PutSnapshotBlockRequest {

		/** Required */
		BlockData: string;
	}
	export interface PutSnapshotBlockRequestFormProperties {

		/** Required */
		BlockData: FormControl<string | null | undefined>,
	}
	export function CreatePutSnapshotBlockRequestFormGroup() {
		return new FormGroup<PutSnapshotBlockRequestFormProperties>({
			BlockData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSnapshotRequest {

		/** Required */
		VolumeSize: number;
		ParentSnapshotId?: string;
		Tags?: Array<Tag>;
		Description?: string;
		ClientToken?: string;
		Encrypted?: boolean | null;
		KmsKeyArn?: string;
		Timeout?: number | null;
	}
	export interface StartSnapshotRequestFormProperties {

		/** Required */
		VolumeSize: FormControl<number | null | undefined>,
		ParentSnapshotId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		Encrypted: FormControl<boolean | null | undefined>,
		KmsKeyArn: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateStartSnapshotRequestFormGroup() {
		return new FormGroup<StartSnapshotRequestFormProperties>({
			VolumeSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ParentSnapshotId: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to <code>completed</code>. You cannot write new blocks to a snapshot after it has been completed.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		 * Post snapshots/completion/{snapshotId}#x-amz-ChangedBlocksCount
		 * @param {string} snapshotId The ID of the snapshot.
		 * @return {void} 
		 */
		CompleteSnapshot(snapshotId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'snapshots/completion/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '#x-amz-ChangedBlocksCount', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Returns the data in a block in an Amazon Elastic Block Store snapshot.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		 * Get snapshots/{snapshotId}/blocks/{blockIndex}#blockToken
		 * @param {string} snapshotId <p>The ID of the snapshot containing the block from which to get data.</p> <important> <p>If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
		 * @param {number} blockIndex The block index of the block in which to read the data. A block index is a logical index in units of <code>512</code> KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/<code>524288</code>). The logical offset of the data must be <code>512</code> KiB aligned.
		 * @param {string} blockToken The block token of the block from which to get data. You can obtain the <code>BlockToken</code> by running the <code>ListChangedBlocks</code> or <code>ListSnapshotBlocks</code> operations.
		 * @return {GetSnapshotBlockResponse} Success
		 */
		GetSnapshotBlock(snapshotId: string, blockIndex: number, blockToken: string): Observable<GetSnapshotBlockResponse> {
			return this.http.get<GetSnapshotBlockResponse>(this.baseUri + 'snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '/blocks/' + blockIndex + '#blockToken&blockToken=' + (blockToken == null ? '' : encodeURIComponent(blockToken)), {});
		}

		/**
		 * <p>Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		 * Get snapshots/{secondSnapshotId}/changedblocks
		 * @param {string} firstSnapshotId <p>The ID of the first snapshot to use for the comparison.</p> <important> <p>The <code>FirstSnapshotID</code> parameter must be specified with a <code>SecondSnapshotId</code> parameter; otherwise, an error occurs.</p> </important>
		 * @param {string} secondSnapshotId <p>The ID of the second snapshot to use for the comparison.</p> <important> <p>The <code>SecondSnapshotId</code> parameter must be specified with a <code>FirstSnapshotID</code> parameter; otherwise, an error occurs.</p> </important>
		 * @param {string} pageToken <p>The token to request the next page of results.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>
		 * @param {number} maxResults <p>The maximum number of blocks to be returned by the request.</p> <p>Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than <b>MaxResults</b> or an empty array of blocks.</p> <p>To retrieve the next set of blocks from the snapshot, make another request with the returned <b>NextToken</b> value. The value of <b>NextToken</b> is <code>null</code> when there are no more blocks to return.</p>
		 * @param {number} startingBlockIndex <p>The block index from which the comparison should start.</p> <p>The list in the response will start from this block index or the next valid block index in the snapshots.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChangedBlocksResponse} Success
		 */
		ListChangedBlocks(firstSnapshotId: string | null | undefined, secondSnapshotId: string, pageToken: string | null | undefined, maxResults: number | null | undefined, startingBlockIndex: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChangedBlocksResponse> {
			return this.http.get<ListChangedBlocksResponse>(this.baseUri + 'snapshots/' + (secondSnapshotId == null ? '' : encodeURIComponent(secondSnapshotId)) + '/changedblocks?firstSnapshotId=' + (firstSnapshotId == null ? '' : encodeURIComponent(firstSnapshotId)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&maxResults=' + maxResults + '&startingBlockIndex=' + startingBlockIndex + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Returns information about the blocks in an Amazon Elastic Block Store snapshot.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		 * Get snapshots/{snapshotId}/blocks
		 * @param {string} snapshotId The ID of the snapshot from which to get block indexes and block tokens.
		 * @param {string} pageToken <p>The token to request the next page of results.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>
		 * @param {number} maxResults <p>The maximum number of blocks to be returned by the request.</p> <p>Even if additional blocks can be retrieved from the snapshot, the request can return less blocks than <b>MaxResults</b> or an empty array of blocks.</p> <p>To retrieve the next set of blocks from the snapshot, make another request with the returned <b>NextToken</b> value. The value of <b>NextToken</b> is <code>null</code> when there are no more blocks to return.</p>
		 * @param {number} startingBlockIndex <p>The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot.</p> <p>If you specify <b>NextToken</b>, then <b>StartingBlockIndex</b> is ignored.</p>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSnapshotBlocksResponse} Success
		 */
		ListSnapshotBlocks(snapshotId: string, pageToken: string | null | undefined, maxResults: number | null | undefined, startingBlockIndex: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSnapshotBlocksResponse> {
			return this.http.get<ListSnapshotBlocksResponse>(this.baseUri + 'snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '/blocks&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&maxResults=' + maxResults + '&startingBlockIndex=' + startingBlockIndex + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the <code>pending</code> state.</p> <p>Data written to a snapshot must be aligned with 512-KiB sectors.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		 * Put snapshots/{snapshotId}/blocks/{blockIndex}#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm
		 * @param {string} snapshotId <p>The ID of the snapshot.</p> <important> <p>If the specified snapshot is encrypted, you must have permission to use the KMS key that was used to encrypt the snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>..</p> </important>
		 * @param {number} blockIndex The block index of the block in which to write the data. A block index is a logical index in units of <code>512</code> KiB blocks. To identify the block index, divide the logical offset of the data in the logical volume by the block size (logical offset of data/<code>524288</code>). The logical offset of the data must be <code>512</code> KiB aligned.
		 * @return {void} 
		 */
		PutSnapshotBlock(snapshotId: string, blockIndex: number, requestBody: PutSnapshotBlockPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '/blocks/' + blockIndex + '#x-amz-Data-Length&x-amz-Checksum&x-amz-Checksum-Algorithm', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates a new Amazon EBS snapshot. The new snapshot enters the <code>pending</code> state after the request completes. </p> <p>After creating the snapshot, use <a href="https://docs.aws.amazon.com/ebs/latest/APIReference/API_PutSnapshotBlock.html"> PutSnapshotBlock</a> to write blocks of data to the snapshot.</p> <note> <p>You should always retry requests that receive server (<code>5xx</code>) error responses, and <code>ThrottlingException</code> and <code>RequestThrottledException</code> client error responses. For more information see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/error-retries.html">Error retries</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </note>
		 * Post snapshots
		 * @return {void} 
		 */
		StartSnapshot(requestBody: StartSnapshotPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'snapshots', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface PutSnapshotBlockPutBody {

		/**
		 * <p>The data to write to the block.</p> <p>The block data is not signed as part of the Signature Version 4 signing process. As a result, you must generate and provide a Base64-encoded SHA256 checksum for the block data using the <b>x-amz-Checksum</b> header. Also, you must specify the checksum algorithm using the <b>x-amz-Checksum-Algorithm</b> header. The checksum that you provide is part of the Signature Version 4 signing process. It is validated against a checksum generated by Amazon EBS to ensure the validity and authenticity of the data. If the checksums do not correspond, the request fails. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapis-using-checksums"> Using checksums with the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
		 * Required
		 */
		BlockData: string;
	}
	export interface PutSnapshotBlockPutBodyFormProperties {

		/**
		 * <p>The data to write to the block.</p> <p>The block data is not signed as part of the Signature Version 4 signing process. As a result, you must generate and provide a Base64-encoded SHA256 checksum for the block data using the <b>x-amz-Checksum</b> header. Also, you must specify the checksum algorithm using the <b>x-amz-Checksum-Algorithm</b> header. The checksum that you provide is part of the Signature Version 4 signing process. It is validated against a checksum generated by Amazon EBS to ensure the validity and authenticity of the data. If the checksums do not correspond, the request fails. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-accessing-snapshot.html#ebsapis-using-checksums"> Using checksums with the EBS direct APIs</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
		 * Required
		 */
		BlockData: FormControl<string | null | undefined>,
	}
	export function CreatePutSnapshotBlockPutBodyFormGroup() {
		return new FormGroup<PutSnapshotBlockPutBodyFormProperties>({
			BlockData: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSnapshotPostBody {

		/**
		 * The size of the volume, in GiB. The maximum size is <code>65536</code> GiB (64 TiB).
		 * Required
		 * Minimum: 1
		 */
		VolumeSize: number;

		/**
		 * <p>The ID of the parent snapshot. If there is no parent snapshot, or if you are creating the first snapshot for an on-premises volume, omit this parameter.</p> <p>You can't specify <b>ParentSnapshotId</b> and <b>Encrypted</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>If you specify an encrypted parent snapshot, you must have permission to use the KMS key that was used to encrypt the parent snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
		 * Max length: 64
		 * Min length: 1
		 */
		ParentSnapshotId?: string | null;

		/** The tags to apply to the snapshot. */
		Tags?: Array<Tag>;

		/**
		 * A description for the snapshot.
		 * Max length: 255
		 */
		Description?: string | null;

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-direct-api-idempotency.html"> Idempotency for StartSnapshot API</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
		 * Max length: 255
		 */
		ClientToken?: string | null;

		/** <p>Indicates whether to encrypt the snapshot.</p> <p>You can't specify <b>Encrypted</b> and <b> ParentSnapshotId</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important> */
		Encrypted?: boolean | null;

		/**
		 * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to be used to encrypt the snapshot.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyArn?: string | null;

		/**
		 * <p>The amount of time (in minutes) after which the snapshot is automatically cancelled if:</p> <ul> <li> <p>No blocks are written to the snapshot.</p> </li> <li> <p>The snapshot is not completed after writing the last block of data.</p> </li> </ul> <p>If no value is specified, the timeout defaults to <code>60</code> minutes.</p>
		 * Minimum: 10
		 * Maximum: 4320
		 */
		Timeout?: number | null;
	}
	export interface StartSnapshotPostBodyFormProperties {

		/**
		 * The size of the volume, in GiB. The maximum size is <code>65536</code> GiB (64 TiB).
		 * Required
		 * Minimum: 1
		 */
		VolumeSize: FormControl<number | null | undefined>,

		/**
		 * <p>The ID of the parent snapshot. If there is no parent snapshot, or if you are creating the first snapshot for an on-premises volume, omit this parameter.</p> <p>You can't specify <b>ParentSnapshotId</b> and <b>Encrypted</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>If you specify an encrypted parent snapshot, you must have permission to use the KMS key that was used to encrypt the parent snapshot. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
		 * Max length: 64
		 * Min length: 1
		 */
		ParentSnapshotId: FormControl<string | null | undefined>,

		/**
		 * A description for the snapshot.
		 * Max length: 255
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully. The subsequent retries with the same client token return the result from the original successful request and they have no additional effect.</p> <p>If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-direct-api-idempotency.html"> Idempotency for StartSnapshot API</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
		 * Max length: 255
		 */
		ClientToken: FormControl<string | null | undefined>,

		/** <p>Indicates whether to encrypt the snapshot.</p> <p>You can't specify <b>Encrypted</b> and <b> ParentSnapshotId</b> in the same request. If you specify both parameters, the request fails with <code>ValidationException</code>.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important> */
		Encrypted: FormControl<boolean | null | undefined>,

		/**
		 * <p>The Amazon Resource Name (ARN) of the Key Management Service (KMS) key to be used to encrypt the snapshot.</p> <p>The encryption status of the snapshot depends on the values that you specify for <b>Encrypted</b>, <b>KmsKeyArn</b>, and <b>ParentSnapshotId</b>, and whether your Amazon Web Services account is enabled for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default"> encryption by default</a>. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapis-using-encryption.html"> Using encryption</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <important> <p>To create an encrypted snapshot, you must have permission to use the KMS key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebsapi-permissions.html#ebsapi-kms-permissions"> Permissions to use Key Management Service keys</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> </important>
		 * Max length: 2048
		 * Min length: 1
		 */
		KmsKeyArn: FormControl<string | null | undefined>,

		/**
		 * <p>The amount of time (in minutes) after which the snapshot is automatically cancelled if:</p> <ul> <li> <p>No blocks are written to the snapshot.</p> </li> <li> <p>The snapshot is not completed after writing the last block of data.</p> </li> </ul> <p>If no value is specified, the timeout defaults to <code>60</code> minutes.</p>
		 * Minimum: 10
		 * Maximum: 4320
		 */
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateStartSnapshotPostBodyFormGroup() {
		return new FormGroup<StartSnapshotPostBodyFormProperties>({
			VolumeSize: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			ParentSnapshotId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^snap-[0-9a-f]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('^[\S\s]+$')]),
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.pattern('^[\S]+$')]),
			Encrypted: new FormControl<boolean | null | undefined>(undefined),
			KmsKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('arn:aws[a-z\-]*:kms:.*:[0-9]{12}:key/.*')]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(10), Validators.max(4320)]),
		});

	}

}

