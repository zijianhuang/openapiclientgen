import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateRescoreExecutionPlanResponse {

		/** Required */
		Id: string;

		/** Required */
		Arn: string;
	}
	export interface CreateRescoreExecutionPlanResponseFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateRescoreExecutionPlanResponseFormGroup() {
		return new FormGroup<CreateRescoreExecutionPlanResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRescoreExecutionPlanRequest {

		/** Required */
		Name: string;
		Description?: string;
		CapacityUnits?: CapacityUnitsConfiguration;
		Tags?: Array<Tag>;
		ClientToken?: string;
	}
	export interface CreateRescoreExecutionPlanRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateRescoreExecutionPlanRequestFormGroup() {
		return new FormGroup<CreateRescoreExecutionPlanRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sets additional capacity units configured for your rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can add and remove capacity units to fit your usage requirements. */
	export interface CapacityUnitsConfiguration {

		/** Required */
		RescoreCapacityUnits: number;
	}

	/** Sets additional capacity units configured for your rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can add and remove capacity units to fit your usage requirements. */
	export interface CapacityUnitsConfigurationFormProperties {

		/** Required */
		RescoreCapacityUnits: FormControl<number | null | undefined>,
	}
	export function CreateCapacityUnitsConfigurationFormGroup() {
		return new FormGroup<CapacityUnitsConfigurationFormProperties>({
			RescoreCapacityUnits: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A key-value pair that identifies or categorizes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can also use a tag to help control access to a rescore execution plan. A tag key and value can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A key-value pair that identifies or categorizes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can also use a tag to help control access to a rescore execution plan. A tag key and value can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. */
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface DeleteRescoreExecutionPlanRequest {

		/** Required */
		Id: string;
	}
	export interface DeleteRescoreExecutionPlanRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRescoreExecutionPlanRequestFormGroup() {
		return new FormGroup<DeleteRescoreExecutionPlanRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DescribeRescoreExecutionPlanResponse {
		Id?: string;
		Arn?: string;
		Name?: string;
		Description?: string;
		CapacityUnits?: CapacityUnitsConfiguration;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		Status?: RescoreExecutionPlanStatus;
		ErrorMessage?: string;
	}
	export interface DescribeRescoreExecutionPlanResponseFormProperties {
		Id: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<RescoreExecutionPlanStatus | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRescoreExecutionPlanResponseFormGroup() {
		return new FormGroup<DescribeRescoreExecutionPlanResponseFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<RescoreExecutionPlanStatus | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RescoreExecutionPlanStatus { CREATING = 'CREATING', UPDATING = 'UPDATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', FAILED = 'FAILED' }

	export interface DescribeRescoreExecutionPlanRequest {

		/** Required */
		Id: string;
	}
	export interface DescribeRescoreExecutionPlanRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRescoreExecutionPlanRequestFormGroup() {
		return new FormGroup<DescribeRescoreExecutionPlanRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListRescoreExecutionPlansResponse {
		SummaryItems?: Array<RescoreExecutionPlanSummary>;
		NextToken?: string;
	}
	export interface ListRescoreExecutionPlansResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRescoreExecutionPlansResponseFormGroup() {
		return new FormGroup<ListRescoreExecutionPlansResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary information for a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. */
	export interface RescoreExecutionPlanSummary {
		Name?: string;
		Id?: string;
		CreatedAt?: Date;
		UpdatedAt?: Date;
		Status?: RescoreExecutionPlanStatus;
	}

	/** Summary information for a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. */
	export interface RescoreExecutionPlanSummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		Id: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		UpdatedAt: FormControl<Date | null | undefined>,
		Status: FormControl<RescoreExecutionPlanStatus | null | undefined>,
	}
	export function CreateRescoreExecutionPlanSummaryFormGroup() {
		return new FormGroup<RescoreExecutionPlanSummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			UpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<RescoreExecutionPlanStatus | null | undefined>(undefined),
		});

	}

	export interface ListRescoreExecutionPlansRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListRescoreExecutionPlansRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListRescoreExecutionPlansRequestFormGroup() {
		return new FormGroup<ListRescoreExecutionPlansRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** If the action is successful, the service sends back an HTTP 200 response. */
	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
	}

	/** If the action is successful, the service sends back an HTTP 200 response. */
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}


	/** The request information for listing tags associated with a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. */
	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
	}

	/** The request information for listing tags associated with a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. */
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ResourceUnavailableException {
	}
	export interface ResourceUnavailableExceptionFormProperties {
	}
	export function CreateResourceUnavailableExceptionFormGroup() {
		return new FormGroup<ResourceUnavailableExceptionFormProperties>({
		});

	}

	export interface RescoreResult {
		RescoreId?: string;
		ResultItems?: Array<RescoreResultItem>;
	}
	export interface RescoreResultFormProperties {
		RescoreId: FormControl<string | null | undefined>,
	}
	export function CreateRescoreResultFormGroup() {
		return new FormGroup<RescoreResultFormProperties>({
			RescoreId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A result item for a document with a new relevancy score. */
	export interface RescoreResultItem {
		DocumentId?: string;
		Score?: number;
	}

	/** A result item for a document with a new relevancy score. */
	export interface RescoreResultItemFormProperties {
		DocumentId: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateRescoreResultItemFormGroup() {
		return new FormGroup<RescoreResultItemFormProperties>({
			DocumentId: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RescoreRequest {

		/** Required */
		RescoreExecutionPlanId: string;

		/** Required */
		SearchQuery: string;

		/** Required */
		Documents: Array<Document>;
	}
	export interface RescoreRequestFormProperties {

		/** Required */
		RescoreExecutionPlanId: FormControl<string | null | undefined>,

		/** Required */
		SearchQuery: FormControl<string | null | undefined>,
	}
	export function CreateRescoreRequestFormGroup() {
		return new FormGroup<RescoreRequestFormProperties>({
			RescoreExecutionPlanId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			SearchQuery: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about a document from a search service such as OpenSearch (self managed). Amazon Kendra Intelligent Ranking uses this information to rank and score on. */
	export interface Document {

		/** Required */
		Id: string;
		GroupId?: string;
		Title?: string;
		Body?: string;
		TokenizedTitle?: Array<string>;
		TokenizedBody?: Array<string>;

		/** Required */
		OriginalScore: number;
	}

	/** Information about a document from a search service such as OpenSearch (self managed). Amazon Kendra Intelligent Ranking uses this information to rank and score on. */
	export interface DocumentFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		GroupId: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		Body: FormControl<string | null | undefined>,

		/** Required */
		OriginalScore: FormControl<number | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			GroupId: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			Body: new FormControl<string | null | undefined>(undefined),
			OriginalScore: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface TagResourceResponse {
	}

	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}


	/** The request information for tagging a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. */
	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}

	/** The request information for tagging a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. */
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface UntagResourceResponse {
	}

	/** If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body. */
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}


	/** The request information to remove a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. */
	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}

	/** The request information to remove a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. */
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRescoreExecutionPlanRequest {

		/** Required */
		Id: string;
		Name?: string;
		Description?: string;
		CapacityUnits?: CapacityUnitsConfiguration;
	}
	export interface UpdateRescoreExecutionPlanRequestFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRescoreExecutionPlanRequestFormGroup() {
		return new FormGroup<UpdateRescoreExecutionPlanRequestFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You set the number of capacity units that you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.</p> <p>For an example of using the <code>CreateRescoreExecutionPlan</code> API, including using the Python and Java SDKs, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/search-service-rerank.html">Semantically ranking a search service's results</a>.</p>
		 * Post #X-Amz-Target=AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan
		 * @return {CreateRescoreExecutionPlanResponse} Success
		 */
		CreateRescoreExecutionPlan(requestBody: CreateRescoreExecutionPlanRequest): Observable<CreateRescoreExecutionPlanResponse> {
			return this.http.post<CreateRescoreExecutionPlanResponse>(this.baseUri + '#X-Amz-Target=AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
		 * Post #X-Amz-Target=AWSKendraRerankingFrontendService.DeleteRescoreExecutionPlan
		 * @return {void} Success
		 */
		DeleteRescoreExecutionPlan(requestBody: DeleteRescoreExecutionPlanRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraRerankingFrontendService.DeleteRescoreExecutionPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets information about a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
		 * Post #X-Amz-Target=AWSKendraRerankingFrontendService.DescribeRescoreExecutionPlan
		 * @return {DescribeRescoreExecutionPlanResponse} Success
		 */
		DescribeRescoreExecutionPlan(requestBody: DescribeRescoreExecutionPlanRequest): Observable<DescribeRescoreExecutionPlanResponse> {
			return this.http.post<DescribeRescoreExecutionPlanResponse>(this.baseUri + '#X-Amz-Target=AWSKendraRerankingFrontendService.DescribeRescoreExecutionPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists your rescore execution plans. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API.
		 * Post #X-Amz-Target=AWSKendraRerankingFrontendService.ListRescoreExecutionPlans
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRescoreExecutionPlansResponse} Success
		 */
		ListRescoreExecutionPlans(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListRescoreExecutionPlansRequest): Observable<ListRescoreExecutionPlansResponse> {
			return this.http.post<ListRescoreExecutionPlansResponse>(this.baseUri + '#X-Amz-Target=AWSKendraRerankingFrontendService.ListRescoreExecutionPlans?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a list of tags associated with a specified resource. A rescore execution plan is an example of a resource that can have tags associated with it.
		 * Post #X-Amz-Target=AWSKendraRerankingFrontendService.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraRerankingFrontendService.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Rescores or re-ranks search results from a search service such as OpenSearch (self managed). You use the semantic search capabilities of Amazon Kendra Intelligent Ranking to improve the search service's results.
		 * Post #X-Amz-Target=AWSKendraRerankingFrontendService.Rescore
		 * @return {RescoreResult} Success
		 */
		Rescore(requestBody: RescoreRequest): Observable<RescoreResult> {
			return this.http.post<RescoreResult>(this.baseUri + '#X-Amz-Target=AWSKendraRerankingFrontendService.Rescore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds a specified tag to a specified rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. If the tag already exists, the existing value is replaced with the new value.
		 * Post #X-Amz-Target=AWSKendraRerankingFrontendService.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraRerankingFrontendService.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag from a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> operation.
		 * Post #X-Amz-Target=AWSKendraRerankingFrontendService.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSKendraRerankingFrontendService.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a rescore execution plan. A rescore execution plan is an Amazon Kendra Intelligent Ranking resource used for provisioning the <code>Rescore</code> API. You can update the number of capacity units you require for Amazon Kendra Intelligent Ranking to rescore or re-rank a search service's results.
		 * Post #X-Amz-Target=AWSKendraRerankingFrontendService.UpdateRescoreExecutionPlan
		 * @return {void} Success
		 */
		UpdateRescoreExecutionPlan(requestBody: UpdateRescoreExecutionPlanRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSKendraRerankingFrontendService.UpdateRescoreExecutionPlan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum CreateRescoreExecutionPlanX_Amz_Target { 'AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan' = 'AWSKendraRerankingFrontendService.CreateRescoreExecutionPlan' }

	export enum DeleteRescoreExecutionPlanX_Amz_Target { 'AWSKendraRerankingFrontendService.DeleteRescoreExecutionPlan' = 'AWSKendraRerankingFrontendService.DeleteRescoreExecutionPlan' }

	export enum DescribeRescoreExecutionPlanX_Amz_Target { 'AWSKendraRerankingFrontendService.DescribeRescoreExecutionPlan' = 'AWSKendraRerankingFrontendService.DescribeRescoreExecutionPlan' }

	export enum ListRescoreExecutionPlansX_Amz_Target { 'AWSKendraRerankingFrontendService.ListRescoreExecutionPlans' = 'AWSKendraRerankingFrontendService.ListRescoreExecutionPlans' }

	export enum ListTagsForResourceX_Amz_Target { 'AWSKendraRerankingFrontendService.ListTagsForResource' = 'AWSKendraRerankingFrontendService.ListTagsForResource' }

	export enum RescoreX_Amz_Target { 'AWSKendraRerankingFrontendService.Rescore' = 'AWSKendraRerankingFrontendService.Rescore' }

	export enum TagResourceX_Amz_Target { 'AWSKendraRerankingFrontendService.TagResource' = 'AWSKendraRerankingFrontendService.TagResource' }

	export enum UntagResourceX_Amz_Target { 'AWSKendraRerankingFrontendService.UntagResource' = 'AWSKendraRerankingFrontendService.UntagResource' }

	export enum UpdateRescoreExecutionPlanX_Amz_Target { 'AWSKendraRerankingFrontendService.UpdateRescoreExecutionPlan' = 'AWSKendraRerankingFrontendService.UpdateRescoreExecutionPlan' }

}

