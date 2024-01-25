import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetSnapshotBlockResponse {
		BlockData?: string | null;
	}
	export interface GetSnapshotBlockResponseFormProperties {
		BlockData: FormControl<string | null | undefined>,
	}
	export function CreateGetSnapshotBlockResponseFormGroup() {
		return new FormGroup<GetSnapshotBlockResponseFormProperties>({
			BlockData: new FormControl<string | null | undefined>(undefined),
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

	export interface ListChangedBlocksResponse {
		ChangedBlocks?: Array<ChangedBlock>;
		ExpiryTime?: Date | null;
		VolumeSize?: number | null;
		BlockSize?: number | null;

		/** Max length: 256 */
		NextToken?: string | null;
	}
	export interface ListChangedBlocksResponseFormProperties {
		ExpiryTime: FormControl<Date | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		BlockSize: FormControl<number | null | undefined>,

		/** Max length: 256 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangedBlocksResponseFormGroup() {
		return new FormGroup<ListChangedBlocksResponseFormProperties>({
			ExpiryTime: new FormControl<Date | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			BlockSize: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[A-Za-z0-9+/=]+$')]),
		});

	}


	/** A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of the same volume/snapshot lineage. */
	export interface ChangedBlock {
		BlockIndex?: number | null;

		/** Max length: 256 */
		FirstBlockToken?: string | null;

		/** Max length: 256 */
		SecondBlockToken?: string | null;
	}

	/** A block of data in an Amazon Elastic Block Store snapshot that is different from another snapshot of the same volume/snapshot lineage. */
	export interface ChangedBlockFormProperties {
		BlockIndex: FormControl<number | null | undefined>,

		/** Max length: 256 */
		FirstBlockToken: FormControl<string | null | undefined>,

		/** Max length: 256 */
		SecondBlockToken: FormControl<string | null | undefined>,
	}
	export function CreateChangedBlockFormGroup() {
		return new FormGroup<ChangedBlockFormProperties>({
			BlockIndex: new FormControl<number | null | undefined>(undefined),
			FirstBlockToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[A-Za-z0-9+/=]+$')]),
			SecondBlockToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[A-Za-z0-9+/=]+$')]),
		});

	}

	export interface ListSnapshotBlocksResponse {
		Blocks?: Array<Block>;
		ExpiryTime?: Date | null;
		VolumeSize?: number | null;
		BlockSize?: number | null;

		/** Max length: 256 */
		NextToken?: string | null;
	}
	export interface ListSnapshotBlocksResponseFormProperties {
		ExpiryTime: FormControl<Date | null | undefined>,
		VolumeSize: FormControl<number | null | undefined>,
		BlockSize: FormControl<number | null | undefined>,

		/** Max length: 256 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSnapshotBlocksResponseFormGroup() {
		return new FormGroup<ListSnapshotBlocksResponseFormProperties>({
			ExpiryTime: new FormControl<Date | null | undefined>(undefined),
			VolumeSize: new FormControl<number | null | undefined>(undefined),
			BlockSize: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[A-Za-z0-9+/=]+$')]),
		});

	}


	/** A block of data in an Amazon Elastic Block Store snapshot. */
	export interface Block {
		BlockIndex?: number | null;

		/** Max length: 256 */
		BlockToken?: string | null;
	}

	/** A block of data in an Amazon Elastic Block Store snapshot. */
	export interface BlockFormProperties {
		BlockIndex: FormControl<number | null | undefined>,

		/** Max length: 256 */
		BlockToken: FormControl<string | null | undefined>,
	}
	export function CreateBlockFormGroup() {
		return new FormGroup<BlockFormProperties>({
			BlockIndex: new FormControl<number | null | undefined>(undefined),
			BlockToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.pattern('^[A-Za-z0-9+/=]+$')]),
		});

	}

	export enum ChecksumAlgorithm { SHA256 = 0 }

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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the data in a block in an Amazon Elastic Block Store snapshot.
		 * Get snapshots/{snapshotId}/blocks/{blockIndex}#blockToken
		 * @param {string} snapshotId The ID of the snapshot containing the block from which to get data.
		 * @param {number} blockIndex <p>The block index of the block from which to get data.</p> <p>Obtain the <code>BlockIndex</code> by running the <code>ListChangedBlocks</code> or <code>ListSnapshotBlocks</code> operations.</p>
		 * @param {string} blockToken <p>The block token of the block from which to get data.</p> <p>Obtain the <code>BlockToken</code> by running the <code>ListChangedBlocks</code> or <code>ListSnapshotBlocks</code> operations.</p>
		 * @return {GetSnapshotBlockResponse} Success
		 */
		GetSnapshotBlock(snapshotId: string, blockIndex: number, blockToken: string): Observable<GetSnapshotBlockResponse> {
			return this.http.get<GetSnapshotBlockResponse>(this.baseUri + 'snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '/blocks/' + blockIndex + '#blockToken&blockToken=' + (blockToken == null ? '' : encodeURIComponent(blockToken)), {});
		}

		/**
		 * Returns the block indexes and block tokens for blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage.
		 * Get snapshots/{secondSnapshotId}/changedblocks
		 * @param {string} firstSnapshotId <p>The ID of the first snapshot to use for the comparison.</p> <important> <p>The <code>FirstSnapshotID</code> parameter must be specified with a <code>SecondSnapshotId</code> parameter; otherwise, an error occurs.</p> </important>
		 * @param {string} secondSnapshotId <p>The ID of the second snapshot to use for the comparison.</p> <important> <p>The <code>SecondSnapshotId</code> parameter must be specified with a <code>FirstSnapshotID</code> parameter; otherwise, an error occurs.</p> </important>
		 * @param {string} pageToken The token to request the next page of results.
		 * @param {number} maxResults The number of results to return.
		 * @param {number} startingBlockIndex <p>The block index from which the comparison should start.</p> <p>The list in the response will start from this block index or the next valid block index in the snapshots.</p>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChangedBlocksResponse} Success
		 */
		ListChangedBlocks(firstSnapshotId: string | null | undefined, secondSnapshotId: string, pageToken: string | null | undefined, maxResults: number | null | undefined, startingBlockIndex: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListChangedBlocksResponse> {
			return this.http.get<ListChangedBlocksResponse>(this.baseUri + 'snapshots/' + (secondSnapshotId == null ? '' : encodeURIComponent(secondSnapshotId)) + '/changedblocks?firstSnapshotId=' + (firstSnapshotId == null ? '' : encodeURIComponent(firstSnapshotId)) + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&maxResults=' + maxResults + '&startingBlockIndex=' + startingBlockIndex + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Returns the block indexes and block tokens for blocks in an Amazon Elastic Block Store snapshot.
		 * Get snapshots/{snapshotId}/blocks
		 * @param {string} snapshotId The ID of the snapshot from which to get block indexes and block tokens.
		 * @param {string} pageToken The token to request the next page of results.
		 * @param {number} maxResults The number of results to return.
		 * @param {number} startingBlockIndex The block index from which the list should start. The list in the response will start from this block index or the next valid block index in the snapshot.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSnapshotBlocksResponse} Success
		 */
		ListSnapshotBlocks(snapshotId: string, pageToken: string | null | undefined, maxResults: number | null | undefined, startingBlockIndex: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSnapshotBlocksResponse> {
			return this.http.get<ListSnapshotBlocksResponse>(this.baseUri + 'snapshots/' + (snapshotId == null ? '' : encodeURIComponent(snapshotId)) + '/blocks&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&maxResults=' + maxResults + '&startingBlockIndex=' + startingBlockIndex + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}
	}

}

