import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreatePipelineResponse {
		Pipeline?: Pipeline;
	}
	export interface CreatePipelineResponseFormProperties {
	}
	export function CreateCreatePipelineResponseFormGroup() {
		return new FormGroup<CreatePipelineResponseFormProperties>({
		});

	}


	/** Information about an existing OpenSearch Ingestion pipeline. */
	export interface Pipeline {
		PipelineName?: string;
		PipelineArn?: string;
		MinUnits?: number | null;
		MaxUnits?: number | null;
		Status?: PipelineStatus;
		StatusReason?: PipelineStatusReason;
		PipelineConfigurationBody?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		IngestEndpointUrls?: Array<string>;
		LogPublishingOptions?: LogPublishingOptions;
		VpcEndpoints?: Array<VpcEndpoint>;
	}

	/** Information about an existing OpenSearch Ingestion pipeline. */
	export interface PipelineFormProperties {
		PipelineName: FormControl<string | null | undefined>,
		PipelineArn: FormControl<string | null | undefined>,
		MinUnits: FormControl<number | null | undefined>,
		MaxUnits: FormControl<number | null | undefined>,
		Status: FormControl<PipelineStatus | null | undefined>,
		PipelineConfigurationBody: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePipelineFormGroup() {
		return new FormGroup<PipelineFormProperties>({
			PipelineName: new FormControl<string | null | undefined>(undefined),
			PipelineArn: new FormControl<string | null | undefined>(undefined),
			MinUnits: new FormControl<number | null | undefined>(undefined),
			MaxUnits: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<PipelineStatus | null | undefined>(undefined),
			PipelineConfigurationBody: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PipelineStatus { CREATING = 0, ACTIVE = 1, UPDATING = 2, DELETING = 3, CREATE_FAILED = 4, UPDATE_FAILED = 5, STARTING = 6, START_FAILED = 7, STOPPING = 8, STOPPED = 9 }


	/** Information about a pipeline's current status. */
	export interface PipelineStatusReason {
		Description?: string;
	}

	/** Information about a pipeline's current status. */
	export interface PipelineStatusReasonFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePipelineStatusReasonFormGroup() {
		return new FormGroup<PipelineStatusReasonFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the values required to configure logging for the pipeline. If you don't specify these values, OpenSearch Ingestion will not publish logs from your application to CloudWatch Logs. */
	export interface LogPublishingOptions {
		IsLoggingEnabled?: boolean | null;
		CloudWatchLogDestination?: CloudWatchLogDestination;
	}

	/** Container for the values required to configure logging for the pipeline. If you don't specify these values, OpenSearch Ingestion will not publish logs from your application to CloudWatch Logs. */
	export interface LogPublishingOptionsFormProperties {
		IsLoggingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateLogPublishingOptionsFormGroup() {
		return new FormGroup<LogPublishingOptionsFormProperties>({
			IsLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch. */
	export interface CloudWatchLogDestination {

		/** Required */
		LogGroup: string;
	}

	/** The destination for OpenSearch Ingestion logs sent to Amazon CloudWatch. */
	export interface CloudWatchLogDestinationFormProperties {

		/** Required */
		LogGroup: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogDestinationFormGroup() {
		return new FormGroup<CloudWatchLogDestinationFormProperties>({
			LogGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An OpenSearch Ingestion-managed VPC endpoint that will access one or more pipelines. */
	export interface VpcEndpoint {
		VpcEndpointId?: string;
		VpcId?: string;
		VpcOptions?: VpcOptions;
	}

	/** An OpenSearch Ingestion-managed VPC endpoint that will access one or more pipelines. */
	export interface VpcEndpointFormProperties {
		VpcEndpointId: FormControl<string | null | undefined>,
		VpcId: FormControl<string | null | undefined>,
	}
	export function CreateVpcEndpointFormGroup() {
		return new FormGroup<VpcEndpointFormProperties>({
			VpcEndpointId: new FormControl<string | null | undefined>(undefined),
			VpcId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options that specify the subnets and security groups for an OpenSearch Ingestion VPC endpoint. */
	export interface VpcOptions {

		/** Required */
		SubnetIds: Array<string>;
		SecurityGroupIds?: Array<string>;
	}

	/** Options that specify the subnets and security groups for an OpenSearch Ingestion VPC endpoint. */
	export interface VpcOptionsFormProperties {
	}
	export function CreateVpcOptionsFormGroup() {
		return new FormGroup<VpcOptionsFormProperties>({
		});

	}


	/** A tag (key-value pair) for an OpenSearch Ingestion pipeline. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A tag (key-value pair) for an OpenSearch Ingestion pipeline. */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface DeletePipelineResponse {
	}
	export interface DeletePipelineResponseFormProperties {
	}
	export function CreateDeletePipelineResponseFormGroup() {
		return new FormGroup<DeletePipelineResponseFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface GetPipelineResponse {
		Pipeline?: Pipeline;
	}
	export interface GetPipelineResponseFormProperties {
	}
	export function CreateGetPipelineResponseFormGroup() {
		return new FormGroup<GetPipelineResponseFormProperties>({
		});

	}

	export interface GetPipelineBlueprintResponse {
		Blueprint?: PipelineBlueprint;
	}
	export interface GetPipelineBlueprintResponseFormProperties {
	}
	export function CreateGetPipelineBlueprintResponseFormGroup() {
		return new FormGroup<GetPipelineBlueprintResponseFormProperties>({
		});

	}


	/** Container for information about an OpenSearch Ingestion blueprint. */
	export interface PipelineBlueprint {
		BlueprintName?: string;
		PipelineConfigurationBody?: string;
	}

	/** Container for information about an OpenSearch Ingestion blueprint. */
	export interface PipelineBlueprintFormProperties {
		BlueprintName: FormControl<string | null | undefined>,
		PipelineConfigurationBody: FormControl<string | null | undefined>,
	}
	export function CreatePipelineBlueprintFormGroup() {
		return new FormGroup<PipelineBlueprintFormProperties>({
			BlueprintName: new FormControl<string | null | undefined>(undefined),
			PipelineConfigurationBody: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetPipelineChangeProgressResponse {
		ChangeProgressStatuses?: Array<ChangeProgressStatus>;
	}
	export interface GetPipelineChangeProgressResponseFormProperties {
	}
	export function CreateGetPipelineChangeProgressResponseFormGroup() {
		return new FormGroup<GetPipelineChangeProgressResponseFormProperties>({
		});

	}


	/** The progress details of a pipeline configuration change. */
	export interface ChangeProgressStatus {
		StartTime?: Date;
		Status?: ChangeProgressStatuses;
		TotalNumberOfStages?: number | null;
		ChangeProgressStages?: Array<ChangeProgressStage>;
	}

	/** The progress details of a pipeline configuration change. */
	export interface ChangeProgressStatusFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		Status: FormControl<ChangeProgressStatuses | null | undefined>,
		TotalNumberOfStages: FormControl<number | null | undefined>,
	}
	export function CreateChangeProgressStatusFormGroup() {
		return new FormGroup<ChangeProgressStatusFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<ChangeProgressStatuses | null | undefined>(undefined),
			TotalNumberOfStages: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ChangeProgressStatuses { PENDING = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3 }


	/** Progress details for a specific stage of a pipeline configuration change. */
	export interface ChangeProgressStage {
		Name?: string;
		Status?: ChangeProgressStatuses;
		Description?: string;
		LastUpdatedAt?: Date;
	}

	/** Progress details for a specific stage of a pipeline configuration change. */
	export interface ChangeProgressStageFormProperties {
		Name: FormControl<string | null | undefined>,
		Status: FormControl<ChangeProgressStatuses | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateChangeProgressStageFormGroup() {
		return new FormGroup<ChangeProgressStageFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ChangeProgressStatuses | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListPipelineBlueprintsResponse {
		Blueprints?: Array<PipelineBlueprintSummary>;
	}
	export interface ListPipelineBlueprintsResponseFormProperties {
	}
	export function CreateListPipelineBlueprintsResponseFormGroup() {
		return new FormGroup<ListPipelineBlueprintsResponseFormProperties>({
		});

	}


	/** A summary of an OpenSearch Ingestion blueprint. */
	export interface PipelineBlueprintSummary {
		BlueprintName?: string;
	}

	/** A summary of an OpenSearch Ingestion blueprint. */
	export interface PipelineBlueprintSummaryFormProperties {
		BlueprintName: FormControl<string | null | undefined>,
	}
	export function CreatePipelineBlueprintSummaryFormGroup() {
		return new FormGroup<PipelineBlueprintSummaryFormProperties>({
			BlueprintName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidPaginationTokenException {
	}
	export interface InvalidPaginationTokenExceptionFormProperties {
	}
	export function CreateInvalidPaginationTokenExceptionFormGroup() {
		return new FormGroup<InvalidPaginationTokenExceptionFormProperties>({
		});

	}

	export interface ListPipelinesResponse {
		NextToken?: string;
		Pipelines?: Array<PipelineSummary>;
	}
	export interface ListPipelinesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPipelinesResponseFormGroup() {
		return new FormGroup<ListPipelinesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for an OpenSearch Ingestion pipeline. */
	export interface PipelineSummary {
		Status?: PipelineStatus;

		/** Information about a pipeline's current status. */
		StatusReason?: PipelineStatusReason;
		PipelineName?: string;
		PipelineArn?: string;
		MinUnits?: number | null;
		MaxUnits?: number | null;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
	}

	/** Summary information for an OpenSearch Ingestion pipeline. */
	export interface PipelineSummaryFormProperties {
		Status: FormControl<PipelineStatus | null | undefined>,
		PipelineName: FormControl<string | null | undefined>,
		PipelineArn: FormControl<string | null | undefined>,
		MinUnits: FormControl<number | null | undefined>,
		MaxUnits: FormControl<number | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreatePipelineSummaryFormGroup() {
		return new FormGroup<PipelineSummaryFormProperties>({
			Status: new FormControl<PipelineStatus | null | undefined>(undefined),
			PipelineName: new FormControl<string | null | undefined>(undefined),
			PipelineArn: new FormControl<string | null | undefined>(undefined),
			MinUnits: new FormControl<number | null | undefined>(undefined),
			MaxUnits: new FormControl<number | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface StartPipelineResponse {

		/** Information about an existing OpenSearch Ingestion pipeline. */
		Pipeline?: Pipeline;
	}
	export interface StartPipelineResponseFormProperties {
	}
	export function CreateStartPipelineResponseFormGroup() {
		return new FormGroup<StartPipelineResponseFormProperties>({
		});

	}

	export interface StopPipelineResponse {

		/** Information about an existing OpenSearch Ingestion pipeline. */
		Pipeline?: Pipeline;
	}
	export interface StopPipelineResponseFormProperties {
	}
	export function CreateStopPipelineResponseFormGroup() {
		return new FormGroup<StopPipelineResponseFormProperties>({
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdatePipelineResponse {
		Pipeline?: Pipeline;
	}
	export interface UpdatePipelineResponseFormProperties {
	}
	export function CreateUpdatePipelineResponseFormGroup() {
		return new FormGroup<UpdatePipelineResponseFormProperties>({
		});

	}

	export interface ValidatePipelineResponse {
		isValid?: boolean | null;
		Errors?: Array<ValidationMessage>;
	}
	export interface ValidatePipelineResponseFormProperties {
		isValid: FormControl<boolean | null | undefined>,
	}
	export function CreateValidatePipelineResponseFormGroup() {
		return new FormGroup<ValidatePipelineResponseFormProperties>({
			isValid: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A validation message associated with a <code>ValidatePipeline</code> request in OpenSearch Ingestion. */
	export interface ValidationMessage {
		Message?: string;
	}

	/** A validation message associated with a <code>ValidatePipeline</code> request in OpenSearch Ingestion. */
	export interface ValidationMessageFormProperties {
		Message: FormControl<string | null | undefined>,
	}
	export function CreateValidationMessageFormGroup() {
		return new FormGroup<ValidationMessageFormProperties>({
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChangeProgressStageStatuses { PENDING = 0, IN_PROGRESS = 1, COMPLETED = 2, FAILED = 3 }

	export interface CreatePipelineRequest {

		/** Required */
		PipelineName: string;

		/** Required */
		MinUnits: number;

		/** Required */
		MaxUnits: number;

		/** Required */
		PipelineConfigurationBody: string;
		LogPublishingOptions?: LogPublishingOptions;
		VpcOptions?: VpcOptions;
		Tags?: Array<Tag>;
	}
	export interface CreatePipelineRequestFormProperties {

		/** Required */
		PipelineName: FormControl<string | null | undefined>,

		/** Required */
		MinUnits: FormControl<number | null | undefined>,

		/** Required */
		MaxUnits: FormControl<number | null | undefined>,

		/** Required */
		PipelineConfigurationBody: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelineRequestFormGroup() {
		return new FormGroup<CreatePipelineRequestFormProperties>({
			PipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MinUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			MaxUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			PipelineConfigurationBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeletePipelineRequest {
	}
	export interface DeletePipelineRequestFormProperties {
	}
	export function CreateDeletePipelineRequestFormGroup() {
		return new FormGroup<DeletePipelineRequestFormProperties>({
		});

	}

	export interface GetPipelineBlueprintRequest {
	}
	export interface GetPipelineBlueprintRequestFormProperties {
	}
	export function CreateGetPipelineBlueprintRequestFormGroup() {
		return new FormGroup<GetPipelineBlueprintRequestFormProperties>({
		});

	}

	export interface GetPipelineChangeProgressRequest {
	}
	export interface GetPipelineChangeProgressRequestFormProperties {
	}
	export function CreateGetPipelineChangeProgressRequestFormGroup() {
		return new FormGroup<GetPipelineChangeProgressRequestFormProperties>({
		});

	}

	export interface GetPipelineRequest {
	}
	export interface GetPipelineRequestFormProperties {
	}
	export function CreateGetPipelineRequestFormGroup() {
		return new FormGroup<GetPipelineRequestFormProperties>({
		});

	}

	export interface ListPipelineBlueprintsRequest {
	}
	export interface ListPipelineBlueprintsRequestFormProperties {
	}
	export function CreateListPipelineBlueprintsRequestFormGroup() {
		return new FormGroup<ListPipelineBlueprintsRequestFormProperties>({
		});

	}

	export interface ListPipelinesRequest {
	}
	export interface ListPipelinesRequestFormProperties {
	}
	export function CreateListPipelinesRequestFormGroup() {
		return new FormGroup<ListPipelinesRequestFormProperties>({
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

	export interface StartPipelineRequest {
	}
	export interface StartPipelineRequestFormProperties {
	}
	export function CreateStartPipelineRequestFormGroup() {
		return new FormGroup<StartPipelineRequestFormProperties>({
		});

	}

	export interface StopPipelineRequest {
	}
	export interface StopPipelineRequestFormProperties {
	}
	export function CreateStopPipelineRequestFormGroup() {
		return new FormGroup<StopPipelineRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdatePipelineRequest {
		MinUnits?: number | null;
		MaxUnits?: number | null;
		PipelineConfigurationBody?: string;
		LogPublishingOptions?: LogPublishingOptions;
	}
	export interface UpdatePipelineRequestFormProperties {
		MinUnits: FormControl<number | null | undefined>,
		MaxUnits: FormControl<number | null | undefined>,
		PipelineConfigurationBody: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipelineRequestFormGroup() {
		return new FormGroup<UpdatePipelineRequestFormProperties>({
			MinUnits: new FormControl<number | null | undefined>(undefined),
			MaxUnits: new FormControl<number | null | undefined>(undefined),
			PipelineConfigurationBody: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ValidatePipelineRequest {

		/** Required */
		PipelineConfigurationBody: string;
	}
	export interface ValidatePipelineRequestFormProperties {

		/** Required */
		PipelineConfigurationBody: FormControl<string | null | undefined>,
	}
	export function CreateValidatePipelineRequestFormGroup() {
		return new FormGroup<ValidatePipelineRequestFormProperties>({
			PipelineConfigurationBody: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates an OpenSearch Ingestion pipeline. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html">Creating Amazon OpenSearch Ingestion pipelines</a>.
		 * Post 2022-01-01/osis/createPipeline
		 * @return {CreatePipelineResponse} Success
		 */
		CreatePipeline(requestBody: CreatePipelinePostBody): Observable<CreatePipelineResponse> {
			return this.http.post<CreatePipelineResponse>(this.baseUri + '2022-01-01/osis/createPipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an OpenSearch Ingestion pipeline. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/delete-pipeline.html">Deleting Amazon OpenSearch Ingestion pipelines</a>.
		 * Delete 2022-01-01/osis/deletePipeline/{PipelineName}
		 * @param {string} PipelineName The name of the pipeline to delete.
		 * @return {DeletePipelineResponse} Success
		 */
		DeletePipeline(PipelineName: string): Observable<DeletePipelineResponse> {
			return this.http.delete<DeletePipelineResponse>(this.baseUri + '2022-01-01/osis/deletePipeline/' + (PipelineName == null ? '' : encodeURIComponent(PipelineName)), {});
		}

		/**
		 * Retrieves information about an OpenSearch Ingestion pipeline.
		 * Get 2022-01-01/osis/getPipeline/{PipelineName}
		 * @param {string} PipelineName The name of the pipeline to get information about.
		 * @return {GetPipelineResponse} Success
		 */
		GetPipeline(PipelineName: string): Observable<GetPipelineResponse> {
			return this.http.get<GetPipelineResponse>(this.baseUri + '2022-01-01/osis/getPipeline/' + (PipelineName == null ? '' : encodeURIComponent(PipelineName)), {});
		}

		/**
		 * Retrieves information about a specific blueprint for OpenSearch Ingestion. Blueprints are templates for the configuration needed for a <code>CreatePipeline</code> request. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html#pipeline-blueprint">Using blueprints to create a pipeline</a>.
		 * Get 2022-01-01/osis/getPipelineBlueprint/{BlueprintName}
		 * @param {string} BlueprintName The name of the blueprint to retrieve.
		 * @return {GetPipelineBlueprintResponse} Success
		 */
		GetPipelineBlueprint(BlueprintName: string): Observable<GetPipelineBlueprintResponse> {
			return this.http.get<GetPipelineBlueprintResponse>(this.baseUri + '2022-01-01/osis/getPipelineBlueprint/' + (BlueprintName == null ? '' : encodeURIComponent(BlueprintName)), {});
		}

		/**
		 * <p>Returns progress information for the current change happening on an OpenSearch Ingestion pipeline. Currently, this operation only returns information when a pipeline is being created.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html#get-pipeline-progress">Tracking the status of pipeline creation</a>.</p>
		 * Get 2022-01-01/osis/getPipelineChangeProgress/{PipelineName}
		 * @param {string} PipelineName The name of the pipeline.
		 * @return {GetPipelineChangeProgressResponse} Success
		 */
		GetPipelineChangeProgress(PipelineName: string): Observable<GetPipelineChangeProgressResponse> {
			return this.http.get<GetPipelineChangeProgressResponse>(this.baseUri + '2022-01-01/osis/getPipelineChangeProgress/' + (PipelineName == null ? '' : encodeURIComponent(PipelineName)), {});
		}

		/**
		 * Retrieves a list of all available blueprints for Data Prepper. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html#pipeline-blueprint">Using blueprints to create a pipeline</a>.
		 * Post 2022-01-01/osis/listPipelineBlueprints
		 * @return {ListPipelineBlueprintsResponse} Success
		 */
		ListPipelineBlueprints(): Observable<ListPipelineBlueprintsResponse> {
			return this.http.post<ListPipelineBlueprintsResponse>(this.baseUri + '2022-01-01/osis/listPipelineBlueprints', null, {});
		}

		/**
		 * Lists all OpenSearch Ingestion pipelines in the current Amazon Web Services account and Region. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/list-pipeline.html">Viewing Amazon OpenSearch Ingestion pipelines</a>.
		 * Get 2022-01-01/osis/listPipelines
		 * @param {number} maxResults An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to get the next page of results.
		 * @param {string} nextToken If your initial <code>ListPipelines</code> operation returns a <code>nextToken</code>, you can include the returned <code>nextToken</code> in subsequent <code>ListPipelines</code> operations, which returns results in the next page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPipelinesResponse} Success
		 */
		ListPipelines(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPipelinesResponse> {
			return this.http.get<ListPipelinesResponse>(this.baseUri + '2022-01-01/osis/listPipelines?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all resource tags associated with an OpenSearch Ingestion pipeline. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-pipeline.html">Tagging Amazon OpenSearch Ingestion pipelines</a>.
		 * Get 2022-01-01/osis/listTagsForResource/#arn
		 * @param {string} arn The Amazon Resource Name (ARN) of the pipeline to retrieve tags for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(arn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + '2022-01-01/osis/listTagsForResource/#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), {});
		}

		/**
		 * Starts an OpenSearch Ingestion pipeline. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/pipeline--stop-start.html#pipeline--start">Starting an OpenSearch Ingestion pipeline</a>.
		 * Put 2022-01-01/osis/startPipeline/{PipelineName}
		 * @param {string} PipelineName The name of the pipeline to start.
		 * @return {StartPipelineResponse} Success
		 */
		StartPipeline(PipelineName: string): Observable<StartPipelineResponse> {
			return this.http.put<StartPipelineResponse>(this.baseUri + '2022-01-01/osis/startPipeline/' + (PipelineName == null ? '' : encodeURIComponent(PipelineName)), null, {});
		}

		/**
		 * Stops an OpenSearch Ingestion pipeline. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/pipeline--stop-start.html#pipeline--stop">Stopping an OpenSearch Ingestion pipeline</a>.
		 * Put 2022-01-01/osis/stopPipeline/{PipelineName}
		 * @param {string} PipelineName The name of the pipeline to stop.
		 * @return {StopPipelineResponse} Success
		 */
		StopPipeline(PipelineName: string): Observable<StopPipelineResponse> {
			return this.http.put<StopPipelineResponse>(this.baseUri + '2022-01-01/osis/stopPipeline/' + (PipelineName == null ? '' : encodeURIComponent(PipelineName)), null, {});
		}

		/**
		 * Tags an OpenSearch Ingestion pipeline. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-pipeline.html">Tagging Amazon OpenSearch Ingestion pipelines</a>.
		 * Post 2022-01-01/osis/tagResource/#arn
		 * @param {string} arn The Amazon Resource Name (ARN) of the pipeline to tag.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(arn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '2022-01-01/osis/tagResource/#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from an OpenSearch Ingestion pipeline. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/tag-pipeline.html">Tagging Amazon OpenSearch Ingestion pipelines</a>.
		 * Post 2022-01-01/osis/untagResource/#arn
		 * @param {string} arn The Amazon Resource Name (ARN) of the pipeline to remove tags from.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(arn: string, requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '2022-01-01/osis/untagResource/#arn?arn=' + (arn == null ? '' : encodeURIComponent(arn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates an OpenSearch Ingestion pipeline. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/update-pipeline.html">Updating Amazon OpenSearch Ingestion pipelines</a>.
		 * Put 2022-01-01/osis/updatePipeline/{PipelineName}
		 * @param {string} PipelineName The name of the pipeline to update.
		 * @return {UpdatePipelineResponse} Success
		 */
		UpdatePipeline(PipelineName: string, requestBody: UpdatePipelinePutBody): Observable<UpdatePipelineResponse> {
			return this.http.put<UpdatePipelineResponse>(this.baseUri + '2022-01-01/osis/updatePipeline/' + (PipelineName == null ? '' : encodeURIComponent(PipelineName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks whether an OpenSearch Ingestion pipeline configuration is valid prior to creation. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/creating-pipeline.html">Creating Amazon OpenSearch Ingestion pipelines</a>.
		 * Post 2022-01-01/osis/validatePipeline
		 * @return {ValidatePipelineResponse} Success
		 */
		ValidatePipeline(requestBody: ValidatePipelinePostBody): Observable<ValidatePipelineResponse> {
			return this.http.post<ValidatePipelineResponse>(this.baseUri + '2022-01-01/osis/validatePipeline', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreatePipelinePostBody {

		/**
		 * The name of the OpenSearch Ingestion pipeline to create. Pipeline names are unique across the pipelines owned by an account within an Amazon Web Services Region.
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		PipelineName: string;

		/**
		 * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
		 * Required
		 * Minimum: 1
		 * Maximum: 96
		 */
		MinUnits: number;

		/**
		 * The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
		 * Required
		 * Minimum: 1
		 * Maximum: 96
		 */
		MaxUnits: number;

		/**
		 * The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with <code>\n</code>.
		 * Required
		 * Max length: 24000
		 * Min length: 1
		 */
		PipelineConfigurationBody: string;

		/** Container for the values required to configure logging for the pipeline. If you don't specify these values, OpenSearch Ingestion will not publish logs from your application to CloudWatch Logs. */
		LogPublishingOptions?: CreatePipelinePostBodyLogPublishingOptions;

		/** Options that specify the subnets and security groups for an OpenSearch Ingestion VPC endpoint. */
		VpcOptions?: CreatePipelinePostBodyVpcOptions;

		/** List of tags to add to the pipeline upon creation. */
		Tags?: Array<Tag>;
	}
	export interface CreatePipelinePostBodyFormProperties {

		/**
		 * The name of the OpenSearch Ingestion pipeline to create. Pipeline names are unique across the pipelines owned by an account within an Amazon Web Services Region.
		 * Required
		 * Max length: 28
		 * Min length: 3
		 */
		PipelineName: FormControl<string | null | undefined>,

		/**
		 * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
		 * Required
		 * Minimum: 1
		 * Maximum: 96
		 */
		MinUnits: FormControl<number | null | undefined>,

		/**
		 * The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
		 * Required
		 * Minimum: 1
		 * Maximum: 96
		 */
		MaxUnits: FormControl<number | null | undefined>,

		/**
		 * The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with <code>\n</code>.
		 * Required
		 * Max length: 24000
		 * Min length: 1
		 */
		PipelineConfigurationBody: FormControl<string | null | undefined>,
	}
	export function CreateCreatePipelinePostBodyFormGroup() {
		return new FormGroup<CreatePipelinePostBodyFormProperties>({
			PipelineName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(3), Validators.maxLength(28), Validators.pattern('[a-z][a-z0-9\-]+')]),
			MinUnits: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(96)]),
			MaxUnits: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(96)]),
			PipelineConfigurationBody: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(24000)]),
		});

	}

	export interface CreatePipelinePostBodyLogPublishingOptions {
		IsLoggingEnabled?: boolean | null;
		CloudWatchLogDestination?: CloudWatchLogDestination;
	}
	export interface CreatePipelinePostBodyLogPublishingOptionsFormProperties {
		IsLoggingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreatePipelinePostBodyLogPublishingOptionsFormGroup() {
		return new FormGroup<CreatePipelinePostBodyLogPublishingOptionsFormProperties>({
			IsLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreatePipelinePostBodyVpcOptions {
		SubnetIds?: Array<string>;
		SecurityGroupIds?: Array<string>;
	}
	export interface CreatePipelinePostBodyVpcOptionsFormProperties {
	}
	export function CreateCreatePipelinePostBodyVpcOptionsFormGroup() {
		return new FormGroup<CreatePipelinePostBodyVpcOptionsFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The list of key-value tags to add to the pipeline.
		 * Required
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * The tag keys to remove.
		 * Required
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
		});

	}

	export interface UpdatePipelinePutBody {

		/**
		 * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
		 * Minimum: 1
		 * Maximum: 96
		 */
		MinUnits?: number | null;

		/**
		 * The maximum pipeline capacity, in Ingestion Compute Units (ICUs)
		 * Minimum: 1
		 * Maximum: 96
		 */
		MaxUnits?: number | null;

		/**
		 * The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with <code>\n</code>.
		 * Max length: 24000
		 * Min length: 1
		 */
		PipelineConfigurationBody?: string | null;

		/** Container for the values required to configure logging for the pipeline. If you don't specify these values, OpenSearch Ingestion will not publish logs from your application to CloudWatch Logs. */
		LogPublishingOptions?: UpdatePipelinePutBodyLogPublishingOptions;
	}
	export interface UpdatePipelinePutBodyFormProperties {

		/**
		 * The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
		 * Minimum: 1
		 * Maximum: 96
		 */
		MinUnits: FormControl<number | null | undefined>,

		/**
		 * The maximum pipeline capacity, in Ingestion Compute Units (ICUs)
		 * Minimum: 1
		 * Maximum: 96
		 */
		MaxUnits: FormControl<number | null | undefined>,

		/**
		 * The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with <code>\n</code>.
		 * Max length: 24000
		 * Min length: 1
		 */
		PipelineConfigurationBody: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePipelinePutBodyFormGroup() {
		return new FormGroup<UpdatePipelinePutBodyFormProperties>({
			MinUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(96)]),
			MaxUnits: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(96)]),
			PipelineConfigurationBody: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(24000)]),
		});

	}

	export interface UpdatePipelinePutBodyLogPublishingOptions {
		IsLoggingEnabled?: boolean | null;
		CloudWatchLogDestination?: CloudWatchLogDestination;
	}
	export interface UpdatePipelinePutBodyLogPublishingOptionsFormProperties {
		IsLoggingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePipelinePutBodyLogPublishingOptionsFormGroup() {
		return new FormGroup<UpdatePipelinePutBodyLogPublishingOptionsFormProperties>({
			IsLoggingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ValidatePipelinePostBody {

		/**
		 * The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with <code>\n</code>.
		 * Required
		 * Max length: 24000
		 * Min length: 1
		 */
		PipelineConfigurationBody: string;
	}
	export interface ValidatePipelinePostBodyFormProperties {

		/**
		 * The pipeline configuration in YAML format. The command accepts the pipeline configuration as a string or within a .yaml file. If you provide the configuration as a string, each new line must be escaped with <code>\n</code>.
		 * Required
		 * Max length: 24000
		 * Min length: 1
		 */
		PipelineConfigurationBody: FormControl<string | null | undefined>,
	}
	export function CreateValidatePipelinePostBodyFormGroup() {
		return new FormGroup<ValidatePipelinePostBodyFormProperties>({
			PipelineConfigurationBody: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(24000)]),
		});

	}

}

