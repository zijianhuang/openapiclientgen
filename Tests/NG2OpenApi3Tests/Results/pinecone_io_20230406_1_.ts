import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Collection {

		/**
		 * The unique name of a collection.
		 * Required
		 */
		name: string;

		/** Required */
		size: number;

		/**
		 * The current status of a collection.
		 * Required
		 */
		status: string;
	}
	export interface CollectionFormProperties {

		/**
		 * The unique name of a collection.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		size: FormControl<number | null | undefined>,

		/**
		 * The current status of a collection.
		 * Required
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateCollectionFormGroup() {
		return new FormGroup<CollectionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CollectionDefinition {

		/**
		 * The unique name of a collection.
		 * Required
		 */
		name: string;

		/**
		 * The unique name of an index.
		 * Required
		 * Max length: 45
		 * Min length: 1
		 */
		source: string;
	}
	export interface CollectionDefinitionFormProperties {

		/**
		 * The unique name of a collection.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The unique name of an index.
		 * Required
		 * Max length: 45
		 * Min length: 1
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateCollectionDefinitionFormGroup() {
		return new FormGroup<CollectionDefinitionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(45)]),
		});

	}

	export interface DeleteRequest {
		deleteAll?: boolean | null;

		/** If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/. */
		filter?: VectorFilter;

		/** Max length: 1000 */
		ids?: Array<string>;

		/** An index namespace name */
		namespace?: string | null;
	}
	export interface DeleteRequestFormProperties {
		deleteAll: FormControl<boolean | null | undefined>,

		/** An index namespace name */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRequestFormGroup() {
		return new FormGroup<DeleteRequestFormProperties>({
			deleteAll: new FormControl<boolean | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/. */
	export interface VectorFilter {
	}

	/** If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/. */
	export interface VectorFilterFormProperties {
	}
	export function CreateVectorFilterFormGroup() {
		return new FormGroup<VectorFilterFormProperties>({
		});

	}

	export interface DeleteResponse {
	}
	export interface DeleteResponseFormProperties {
	}
	export function CreateDeleteResponseFormGroup() {
		return new FormGroup<DeleteResponseFormProperties>({
		});

	}

	export interface DescribeIndexStatsRequest {

		/** If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/. */
		filter?: VectorFilter;
	}
	export interface DescribeIndexStatsRequestFormProperties {
	}
	export function CreateDescribeIndexStatsRequestFormGroup() {
		return new FormGroup<DescribeIndexStatsRequestFormProperties>({
		});

	}

	export interface DescribeIndexStatsResponse {

		/**
		 * The number of dimensions in the vector representation
		 * Minimum: 1
		 * Maximum: 20000
		 */
		dimension?: number | null;

		/** The fullness of the index, regardless of whether a metadata filter expression was passed. The granularity of this metric is 10%. */
		indexFullness?: number | null;
		namespaces?: {[id: string]: IndexNamespaceStats };
		totalVectorCount?: number | null;
	}
	export interface DescribeIndexStatsResponseFormProperties {

		/**
		 * The number of dimensions in the vector representation
		 * Minimum: 1
		 * Maximum: 20000
		 */
		dimension: FormControl<number | null | undefined>,

		/** The fullness of the index, regardless of whether a metadata filter expression was passed. The granularity of this metric is 10%. */
		indexFullness: FormControl<number | null | undefined>,
		namespaces: FormControl<{[id: string]: IndexNamespaceStats } | null | undefined>,
		totalVectorCount: FormControl<number | null | undefined>,
	}
	export function CreateDescribeIndexStatsResponseFormGroup() {
		return new FormGroup<DescribeIndexStatsResponseFormProperties>({
			dimension: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20000)]),
			indexFullness: new FormControl<number | null | undefined>(undefined),
			namespaces: new FormControl<{[id: string]: IndexNamespaceStats } | null | undefined>(undefined),
			totalVectorCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IndexNamespaceStats {
		vectorCount?: number | null;
	}
	export interface IndexNamespaceStatsFormProperties {
		vectorCount: FormControl<number | null | undefined>,
	}
	export function CreateIndexNamespaceStatsFormGroup() {
		return new FormGroup<IndexNamespaceStatsFormProperties>({
			vectorCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Environment { 'us-west1-gcp' = 'us-west1-gcp', 'us-west4-gcp' = 'us-west4-gcp', 'us-central1-gcp' = 'us-central1-gcp', 'us-east1-gcp' = 'us-east1-gcp', 'us-east4-gcp' = 'us-east4-gcp', 'eu-west1-gcp' = 'eu-west1-gcp', 'us-east1-aws' = 'us-east1-aws' }

	export interface FetchRequest {

		/**
		 * Required
		 * Max length: 1000
		 */
		ids: Array<string>;

		/** An index namespace name */
		namespace?: string | null;
	}
	export interface FetchRequestFormProperties {

		/** An index namespace name */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateFetchRequestFormGroup() {
		return new FormGroup<FetchRequestFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FetchResponse {

		/** An index namespace name */
		namespace?: string | null;
		vectors?: {[id: string]: Array<number> };
	}
	export interface FetchResponseFormProperties {

		/** An index namespace name */
		namespace: FormControl<string | null | undefined>,
		vectors: FormControl<{[id: string]: Array<number> } | null | undefined>,
	}
	export function CreateFetchResponseFormGroup() {
		return new FormGroup<FetchResponseFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
			vectors: new FormControl<{[id: string]: Array<number> } | null | undefined>(undefined),
		});

	}

	export interface Index {
		database?: IndexDatabase;
		status?: IndexStatus;
	}
	export interface IndexFormProperties {
	}
	export function CreateIndexFormGroup() {
		return new FormGroup<IndexFormProperties>({
		});

	}

	export interface IndexDatabase {

		/**
		 * The number of dimensions in the vector representation
		 * Minimum: 1
		 * Maximum: 20000
		 */
		dimension?: number | null;

		/** The vector similarity metric of the index */
		metric?: IndexDatabaseMetric | null;

		/**
		 * The unique name of an index.
		 * Max length: 45
		 * Min length: 1
		 */
		name?: string | null;

		/** The pod type */
		pod_type?: IndexDatabasePod_type | null;

		/** Minimum: 1 */
		pods?: number | null;

		/** Minimum: 1 */
		replicas?: number | null;

		/** Minimum: 1 */
		shards?: number | null;
	}
	export interface IndexDatabaseFormProperties {

		/**
		 * The number of dimensions in the vector representation
		 * Minimum: 1
		 * Maximum: 20000
		 */
		dimension: FormControl<number | null | undefined>,

		/** The vector similarity metric of the index */
		metric: FormControl<IndexDatabaseMetric | null | undefined>,

		/**
		 * The unique name of an index.
		 * Max length: 45
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** The pod type */
		pod_type: FormControl<IndexDatabasePod_type | null | undefined>,

		/** Minimum: 1 */
		pods: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		replicas: FormControl<number | null | undefined>,

		/** Minimum: 1 */
		shards: FormControl<number | null | undefined>,
	}
	export function CreateIndexDatabaseFormGroup() {
		return new FormGroup<IndexDatabaseFormProperties>({
			dimension: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20000)]),
			metric: new FormControl<IndexDatabaseMetric | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(45)]),
			pod_type: new FormControl<IndexDatabasePod_type | null | undefined>(undefined),
			pods: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			replicas: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			shards: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export enum IndexDatabaseMetric { euclidean = 'euclidean', cosine = 'cosine', dotproduct = 'dotproduct' }

	export enum IndexDatabasePod_type { 's1.x1' = 's1.x1', 's1.x2' = 's1.x2', 's1.x4' = 's1.x4', 's1.x8' = 's1.x8', 'p1.x1' = 'p1.x1', 'p1.x2' = 'p1.x2', 'p1.x4' = 'p1.x4', 'p1.x8' = 'p1.x8', 'p2.x1' = 'p2.x1', 'p2.x2' = 'p2.x2', 'p2.x4' = 'p2.x4', 'p2.x8' = 'p2.x8' }

	export interface IndexStatus {
		host?: string | null;
		port?: number | null;
		ready?: boolean | null;

		/** The current status of a index. */
		state?: IndexStatusState | null;
	}
	export interface IndexStatusFormProperties {
		host: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		ready: FormControl<boolean | null | undefined>,

		/** The current status of a index. */
		state: FormControl<IndexStatusState | null | undefined>,
	}
	export function CreateIndexStatusFormGroup() {
		return new FormGroup<IndexStatusFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			ready: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<IndexStatusState | null | undefined>(undefined),
		});

	}

	export enum IndexStatusState { Initializing = 'Initializing', ScalingUp = 'ScalingUp', ScalingDown = 'ScalingDown', Terminating = 'Terminating', Ready = 'Ready' }

	export interface IndexConfiguration {

		/** The pod type */
		pod_type?: IndexDatabasePod_type | null;

		/**
		 * The desired number of replicas for the index.
		 * Minimum: 1
		 */
		replicas?: number | null;
	}
	export interface IndexConfigurationFormProperties {

		/** The pod type */
		pod_type: FormControl<IndexDatabasePod_type | null | undefined>,

		/**
		 * The desired number of replicas for the index.
		 * Minimum: 1
		 */
		replicas: FormControl<number | null | undefined>,
	}
	export function CreateIndexConfigurationFormGroup() {
		return new FormGroup<IndexConfigurationFormProperties>({
			pod_type: new FormControl<IndexDatabasePod_type | null | undefined>(undefined),
			replicas: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface IndexDefinition {

		/**
		 * The number of dimensions in the vector representation
		 * Required
		 * Minimum: 1
		 * Maximum: 20000
		 */
		dimension: number;

		/** Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. */
		metadata_config?: IndexMetadataConfig;

		/** The vector similarity metric of the index */
		metric?: IndexDatabaseMetric | null;

		/**
		 * The unique name of an index.
		 * Required
		 * Max length: 45
		 * Min length: 1
		 */
		name: string;

		/** The pod type */
		pod_type?: IndexDatabasePod_type | null;

		/**
		 * The number of pods for the index to use,including replicas.
		 * Minimum: 1
		 */
		pods?: number | null;

		/**
		 * The number of replicas. Replicas duplicate your index. They provide higher availability and throughput.
		 * Minimum: 1
		 */
		replicas?: number | null;

		/** The unique name of a collection. */
		source_collection?: string | null;
	}
	export interface IndexDefinitionFormProperties {

		/**
		 * The number of dimensions in the vector representation
		 * Required
		 * Minimum: 1
		 * Maximum: 20000
		 */
		dimension: FormControl<number | null | undefined>,

		/** The vector similarity metric of the index */
		metric: FormControl<IndexDatabaseMetric | null | undefined>,

		/**
		 * The unique name of an index.
		 * Required
		 * Max length: 45
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** The pod type */
		pod_type: FormControl<IndexDatabasePod_type | null | undefined>,

		/**
		 * The number of pods for the index to use,including replicas.
		 * Minimum: 1
		 */
		pods: FormControl<number | null | undefined>,

		/**
		 * The number of replicas. Replicas duplicate your index. They provide higher availability and throughput.
		 * Minimum: 1
		 */
		replicas: FormControl<number | null | undefined>,

		/** The unique name of a collection. */
		source_collection: FormControl<string | null | undefined>,
	}
	export function CreateIndexDefinitionFormGroup() {
		return new FormGroup<IndexDefinitionFormProperties>({
			dimension: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(20000)]),
			metric: new FormControl<IndexDatabaseMetric | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(45)]),
			pod_type: new FormControl<IndexDatabasePod_type | null | undefined>(undefined),
			pods: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			replicas: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			source_collection: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. */
	export interface IndexMetadataConfig {

		/** Min length: 0 */
		indexed?: Array<string>;
	}

	/** Configuration for the behavior of Pinecone's internal metadata index. By default, all metadata is indexed; when metadata_config is present, only specified metadata fields are indexed. */
	export interface IndexMetadataConfigFormProperties {
	}
	export function CreateIndexMetadataConfigFormGroup() {
		return new FormGroup<IndexMetadataConfigFormProperties>({
		});

	}


	/** The vector similarity metric of the index */
	export enum IndexMetric { euclidean = 'euclidean', cosine = 'cosine', dotproduct = 'dotproduct' }


	/** The current status of a index. */
	export enum IndexState { Initializing = 'Initializing', ScalingUp = 'ScalingUp', ScalingDown = 'ScalingDown', Terminating = 'Terminating', Ready = 'Ready' }


	/** The pod type */
	export enum PodType { 's1.x1' = 's1.x1', 's1.x2' = 's1.x2', 's1.x4' = 's1.x4', 's1.x8' = 's1.x8', 'p1.x1' = 'p1.x1', 'p1.x2' = 'p1.x2', 'p1.x4' = 'p1.x4', 'p1.x8' = 'p1.x8', 'p2.x1' = 'p2.x1', 'p2.x2' = 'p2.x2', 'p2.x4' = 'p2.x4', 'p2.x8' = 'p2.x8' }

	export interface QueryMatch {

		/**
		 * The unique ID of a vector
		 * Required
		 */
		id: string;
		metadata?: VectorMetadata;
		score?: number | null;

		/** Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length. */
		sparseValues?: SparseVectorData;

		/** Vector dense data. This should be the same length as the dimension of the index being queried. */
		values?: Array<number>;
	}
	export interface QueryMatchFormProperties {

		/**
		 * The unique ID of a vector
		 * Required
		 */
		id: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
	}
	export function CreateQueryMatchFormGroup() {
		return new FormGroup<QueryMatchFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VectorMetadata {
	}
	export interface VectorMetadataFormProperties {
	}
	export function CreateVectorMetadataFormGroup() {
		return new FormGroup<VectorMetadataFormProperties>({
		});

	}


	/** Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length. */
	export interface SparseVectorData {

		/**
		 * The indices of the sparse data.
		 * Required
		 */
		indices: Array<number>;

		/**
		 * The corresponding values of the sparse data, which must be the same length as the indices.
		 * Required
		 */
		values: Array<number>;
	}

	/** Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length. */
	export interface SparseVectorDataFormProperties {
	}
	export function CreateSparseVectorDataFormGroup() {
		return new FormGroup<SparseVectorDataFormProperties>({
		});

	}

	export interface QueryRequest {

		/** If this parameter is present, the operation only affects vectors that satisfy the filter. See https://www.pinecone.io/docs/metadata-filtering/. */
		filter?: VectorFilter;

		/** The unique ID of a vector */
		id?: string | null;
		includeMetadata?: boolean | null;
		includeValues?: boolean | null;

		/** An index namespace name */
		namespace?: string | null;

		/** Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length. */
		sparseVector?: SparseVectorData;

		/**
		 * The number of results to return for each query.
		 * Required
		 * Minimum: 0
		 * Maximum: 10000
		 */
		topK: number;

		/** Vector dense data. This should be the same length as the dimension of the index being queried. */
		vector?: Array<number>;
	}
	export interface QueryRequestFormProperties {

		/** The unique ID of a vector */
		id: FormControl<string | null | undefined>,
		includeMetadata: FormControl<boolean | null | undefined>,
		includeValues: FormControl<boolean | null | undefined>,

		/** An index namespace name */
		namespace: FormControl<string | null | undefined>,

		/**
		 * The number of results to return for each query.
		 * Required
		 * Minimum: 0
		 * Maximum: 10000
		 */
		topK: FormControl<number | null | undefined>,
	}
	export function CreateQueryRequestFormGroup() {
		return new FormGroup<QueryRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			includeMetadata: new FormControl<boolean | null | undefined>(undefined),
			includeValues: new FormControl<boolean | null | undefined>(undefined),
			namespace: new FormControl<string | null | undefined>(undefined),
			topK: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(10000)]),
		});

	}

	export interface QueryResponse {
		matches?: Array<QueryMatch>;

		/** An index namespace name */
		namespace?: string | null;
	}
	export interface QueryResponseFormProperties {

		/** An index namespace name */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateQueryResponseFormGroup() {
		return new FormGroup<QueryResponseFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRequest {

		/**
		 * The vector's unique ID
		 * Required
		 */
		id: string;

		/** An index namespace name */
		namespace?: string | null;
		setMetadata?: VectorMetadata;

		/** Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length. */
		sparseValues?: SparseVectorData;

		/** Vector dense data. This should be the same length as the dimension of the index being queried. */
		values?: Array<number>;
	}
	export interface UpdateRequestFormProperties {

		/**
		 * The vector's unique ID
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** An index namespace name */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRequestFormGroup() {
		return new FormGroup<UpdateRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateResponse {
	}
	export interface UpdateResponseFormProperties {
	}
	export function CreateUpdateResponseFormGroup() {
		return new FormGroup<UpdateResponseFormProperties>({
		});

	}

	export interface UpsertRequest {

		/** An index namespace name */
		namespace?: string | null;

		/**
		 * Required
		 * Max length: 100
		 */
		vectors: Array<UpsertVector>;
	}
	export interface UpsertRequestFormProperties {

		/** An index namespace name */
		namespace: FormControl<string | null | undefined>,
	}
	export function CreateUpsertRequestFormGroup() {
		return new FormGroup<UpsertRequestFormProperties>({
			namespace: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpsertVector {

		/** The unique ID of a vector */
		id?: string | null;
		metadata?: VectorMetadata;

		/** Vector sparse data. Represented as a list of indices and a list of corresponded values, which must be the same length. */
		sparseValues?: SparseVectorData;

		/** Vector dense data. This should be the same length as the dimension of the index being queried. */
		values?: Array<number>;
	}
	export interface UpsertVectorFormProperties {

		/** The unique ID of a vector */
		id: FormControl<string | null | undefined>,
	}
	export function CreateUpsertVectorFormGroup() {
		return new FormGroup<UpsertVectorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpsertResponse {
		upsertedCount?: number | null;
	}
	export interface UpsertResponseFormProperties {
		upsertedCount: FormControl<number | null | undefined>,
	}
	export function CreateUpsertResponseFormGroup() {
		return new FormGroup<UpsertResponseFormProperties>({
			upsertedCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List collections
		 * This operation returns a list of your Pinecone collections.
		 * Get collections
		 * @return {Array<string>} This operation returns a list of all the collections in your current project.
		 */
		List_collections(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'collections', {});
		}

		/**
		 * Create collection
		 * This operation creates a Pinecone collection.
		 * Post collections
		 * @return {void} 
		 */
		Create_collection(requestBody: CollectionDefinition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'collections', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Collection
		 * This operation deletes an existing collection.
		 * Delete collections/{collectionName}
		 * @return {void} 
		 */
		Delete_collection(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'collections/{collectionName}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe collection
		 * Get a description of a collection.
		 * Get collections/{collectionName}
		 * @return {Collection} This operation returns a list of all the collections in your current project.
		 */
		Describe_collection(): Observable<Collection> {
			return this.http.get<Collection>(this.baseUri + 'collections/{collectionName}', {});
		}

		/**
		 * List indexes
		 * This operation returns a list of your Pinecone indexes.
		 * Get databases
		 * @return {Array<string>} This operation returns a list of all the indexes that you have previously created, and which are associated with the given API key
		 */
		List_indexes(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'databases', {});
		}

		/**
		 * Create index
		 * This operation creates a Pinecone index. You can use it to specify the measure of similarity, the dimension of vectors to be stored in the index, the numbers of replicas to use, and more.
		 * Post databases
		 * @return {void} 
		 */
		Create_index(requestBody: IndexDefinition): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'databases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Index
		 * This operation deletes an existing index.
		 * Delete databases/{indexName}
		 * @return {void} 
		 */
		Delete_index(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'databases/{indexName}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe index
		 * Get a description of an index.
		 * Get databases/{indexName}
		 * @return {Index} This operation returns a list of all the collections in your current project.
		 */
		Describe_index(): Observable<Index> {
			return this.http.get<Index>(this.baseUri + 'databases/{indexName}', {});
		}

		/**
		 * Configure index
		 * This operation specifies the pod type and number of replicas for an index.
		 * Patch databases/{indexName}
		 * @return {void} 
		 */
		Configure_index(requestBody: IndexConfiguration): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'databases/{indexName}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Describe Index Stats
		 * The `DescribeIndexStats` operation returns statistics about the index's contents, including the vector count per namespace and the number of dimensions.
		 * Post describe_index_stats
		 * @return {DescribeIndexStatsResponse} A successful response
		 */
		DescribeIndexStats(requestBody: DescribeIndexStatsRequest): Observable<DescribeIndexStatsResponse> {
			return this.http.post<DescribeIndexStatsResponse>(this.baseUri + 'describe_index_stats', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Query
		 * The `Query` operation searches a namespace, using a query vector. It retrieves the ids of the most similar items in a namespace, along with their similarity scores.
		 * Post query
		 * @return {QueryResponse} A successful response
		 */
		Query(requestBody: QueryRequest): Observable<QueryResponse> {
			return this.http.post<QueryResponse>(this.baseUri + 'query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete
		 * The `Delete` operation deletes vectors, by id, from a single namespace. You can delete items by their id, from a single namespace.
		 * Post vectors/delete
		 * @return {DeleteResponse} A successful response
		 */
		Delete(requestBody: DeleteRequest): Observable<DeleteResponse> {
			return this.http.post<DeleteResponse>(this.baseUri + 'vectors/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch
		 * The `Fetch` operation looks up and returns vectors, by ID, from a single namespace. The returned vectors include the vector data and/or metadata.
		 * Post vectors/fetch
		 * @return {FetchResponse} A successful response
		 */
		Fetch(requestBody: FetchRequest): Observable<FetchResponse> {
			return this.http.post<FetchResponse>(this.baseUri + 'vectors/fetch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Fetch
		 * The `Update` operation updates vector in a namespace. If a value is included, it will overwrite the previous value. If a set_metadata is included, the values of the fields specified in it will be added or overwrite the previous value.
		 * Post vectors/update
		 * @return {UpdateResponse} A successful response
		 */
		Update(requestBody: UpdateRequest): Observable<UpdateResponse> {
			return this.http.post<UpdateResponse>(this.baseUri + 'vectors/update', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Upsert
		 * The Upsert operation writes vectors into a namespace. If a new value is upserted for an existing vector id, it will overwrite the previous value.
		 * Post vectors/upsert
		 * @return {UpsertResponse} A successful response
		 */
		Upsert(requestBody: UpsertRequest): Observable<UpsertResponse> {
			return this.http.post<UpsertResponse>(this.baseUri + 'vectors/upsert', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

