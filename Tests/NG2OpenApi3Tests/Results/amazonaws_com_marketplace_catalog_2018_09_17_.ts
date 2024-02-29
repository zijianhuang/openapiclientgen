import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelChangeSetResponse {
		ChangeSetId?: string;
		ChangeSetArn?: string;
	}
	export interface CancelChangeSetResponseFormProperties {
		ChangeSetId: FormControl<string | null | undefined>,
		ChangeSetArn: FormControl<string | null | undefined>,
	}
	export function CreateCancelChangeSetResponseFormGroup() {
		return new FormGroup<CancelChangeSetResponseFormProperties>({
			ChangeSetId: new FormControl<string | null | undefined>(undefined),
			ChangeSetArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
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

	export interface ResourceInUseException {
	}
	export interface ResourceInUseExceptionFormProperties {
	}
	export function CreateResourceInUseExceptionFormGroup() {
		return new FormGroup<ResourceInUseExceptionFormProperties>({
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

	export interface DeleteResourcePolicyResponse {
	}
	export interface DeleteResourcePolicyResponseFormProperties {
	}
	export function CreateDeleteResourcePolicyResponseFormGroup() {
		return new FormGroup<DeleteResourcePolicyResponseFormProperties>({
		});

	}

	export interface DescribeChangeSetResponse {
		ChangeSetId?: string;
		ChangeSetArn?: string;
		ChangeSetName?: string;
		StartTime?: string;
		EndTime?: string;
		Status?: ChangeStatus;
		FailureCode?: FailureCode;
		FailureDescription?: string;
		ChangeSet?: Array<ChangeSummary>;
	}
	export interface DescribeChangeSetResponseFormProperties {
		ChangeSetId: FormControl<string | null | undefined>,
		ChangeSetArn: FormControl<string | null | undefined>,
		ChangeSetName: FormControl<string | null | undefined>,
		StartTime: FormControl<string | null | undefined>,
		EndTime: FormControl<string | null | undefined>,
		Status: FormControl<ChangeStatus | null | undefined>,
		FailureCode: FormControl<FailureCode | null | undefined>,
		FailureDescription: FormControl<string | null | undefined>,
	}
	export function CreateDescribeChangeSetResponseFormGroup() {
		return new FormGroup<DescribeChangeSetResponseFormProperties>({
			ChangeSetId: new FormControl<string | null | undefined>(undefined),
			ChangeSetArn: new FormControl<string | null | undefined>(undefined),
			ChangeSetName: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<string | null | undefined>(undefined),
			EndTime: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ChangeStatus | null | undefined>(undefined),
			FailureCode: new FormControl<FailureCode | null | undefined>(undefined),
			FailureDescription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ChangeStatus { PREPARING = 'PREPARING', APPLYING = 'APPLYING', SUCCEEDED = 'SUCCEEDED', CANCELLED = 'CANCELLED', FAILED = 'FAILED' }

	export enum FailureCode { CLIENT_ERROR = 'CLIENT_ERROR', SERVER_FAULT = 'SERVER_FAULT' }


	/** This object is a container for common summary information about the change. The summary doesn't contain the whole change structure. */
	export interface ChangeSummary {
		ChangeType?: string;
		Entity?: Entity;
		Details?: string;
		ErrorDetailList?: Array<ErrorDetail>;
		ChangeName?: string;
	}

	/** This object is a container for common summary information about the change. The summary doesn't contain the whole change structure. */
	export interface ChangeSummaryFormProperties {
		ChangeType: FormControl<string | null | undefined>,
		Details: FormControl<string | null | undefined>,
		ChangeName: FormControl<string | null | undefined>,
	}
	export function CreateChangeSummaryFormGroup() {
		return new FormGroup<ChangeSummaryFormProperties>({
			ChangeType: new FormControl<string | null | undefined>(undefined),
			Details: new FormControl<string | null | undefined>(undefined),
			ChangeName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer.  */
	export interface Entity {

		/** Required */
		Type: string;
		Identifier?: string;
	}

	/** An entity contains data that describes your product, its supported features, and how it can be used or launched by your customer.  */
	export interface EntityFormProperties {

		/** Required */
		Type: FormControl<string | null | undefined>,
		Identifier: FormControl<string | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Identifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the error. */
	export interface ErrorDetail {
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Details about the error. */
	export interface ErrorDetailFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEntityResponse {
		EntityType?: string;
		EntityIdentifier?: string;
		EntityArn?: string;
		LastModifiedDate?: string;
		Details?: string;
	}
	export interface DescribeEntityResponseFormProperties {
		EntityType: FormControl<string | null | undefined>,
		EntityIdentifier: FormControl<string | null | undefined>,
		EntityArn: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		Details: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEntityResponseFormGroup() {
		return new FormGroup<DescribeEntityResponseFormProperties>({
			EntityType: new FormControl<string | null | undefined>(undefined),
			EntityIdentifier: new FormControl<string | null | undefined>(undefined),
			EntityArn: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotSupportedException {
	}
	export interface ResourceNotSupportedExceptionFormProperties {
	}
	export function CreateResourceNotSupportedExceptionFormGroup() {
		return new FormGroup<ResourceNotSupportedExceptionFormProperties>({
		});

	}

	export interface GetResourcePolicyResponse {
		Policy?: string;
	}
	export interface GetResourcePolicyResponseFormProperties {
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateGetResourcePolicyResponseFormGroup() {
		return new FormGroup<GetResourcePolicyResponseFormProperties>({
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListChangeSetsResponse {
		ChangeSetSummaryList?: Array<ChangeSetSummaryListItem>;
		NextToken?: string;
	}
	export interface ListChangeSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangeSetsResponseFormGroup() {
		return new FormGroup<ListChangeSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called. */
	export interface ChangeSetSummaryListItem {
		ChangeSetId?: string;
		ChangeSetArn?: string;
		ChangeSetName?: string;
		StartTime?: string;
		EndTime?: string;
		Status?: ChangeStatus;
		EntityIdList?: Array<string>;
		FailureCode?: FailureCode;
	}

	/** A summary of a change set returned in a list of change sets when the <code>ListChangeSets</code> action is called. */
	export interface ChangeSetSummaryListItemFormProperties {
		ChangeSetId: FormControl<string | null | undefined>,
		ChangeSetArn: FormControl<string | null | undefined>,
		ChangeSetName: FormControl<string | null | undefined>,
		StartTime: FormControl<string | null | undefined>,
		EndTime: FormControl<string | null | undefined>,
		Status: FormControl<ChangeStatus | null | undefined>,
		FailureCode: FormControl<FailureCode | null | undefined>,
	}
	export function CreateChangeSetSummaryListItemFormGroup() {
		return new FormGroup<ChangeSetSummaryListItemFormProperties>({
			ChangeSetId: new FormControl<string | null | undefined>(undefined),
			ChangeSetArn: new FormControl<string | null | undefined>(undefined),
			ChangeSetName: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<string | null | undefined>(undefined),
			EndTime: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<ChangeStatus | null | undefined>(undefined),
			FailureCode: new FormControl<FailureCode | null | undefined>(undefined),
		});

	}


	/** A filter object, used to optionally filter results from calls to the <code>ListEntities</code> and <code>ListChangeSets</code> actions. */
	export interface Filter {
		Name?: string;
		ValueList?: Array<string>;
	}

	/** A filter object, used to optionally filter results from calls to the <code>ListEntities</code> and <code>ListChangeSets</code> actions. */
	export interface FilterFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateFilterFormGroup() {
		return new FormGroup<FilterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SortOrder { ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }

	export interface ListEntitiesResponse {
		EntitySummaryList?: Array<EntitySummary>;
		NextToken?: string;
	}
	export interface ListEntitiesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEntitiesResponseFormGroup() {
		return new FormGroup<ListEntitiesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities. */
	export interface EntitySummary {
		Name?: string;
		EntityType?: string;
		EntityId?: string;
		EntityArn?: string;
		LastModifiedDate?: string;
		Visibility?: string;
	}

	/** This object is a container for common summary information about the entity. The summary doesn't contain the whole entity structure, but it does contain information common across all entities. */
	export interface EntitySummaryFormProperties {
		Name: FormControl<string | null | undefined>,
		EntityType: FormControl<string | null | undefined>,
		EntityId: FormControl<string | null | undefined>,
		EntityArn: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<string | null | undefined>,
		Visibility: FormControl<string | null | undefined>,
	}
	export function CreateEntitySummaryFormGroup() {
		return new FormGroup<EntitySummaryFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			EntityType: new FormControl<string | null | undefined>(undefined),
			EntityId: new FormControl<string | null | undefined>(undefined),
			EntityArn: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<string | null | undefined>(undefined),
			Visibility: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		ResourceArn?: string;
		Tags?: Array<Tag>;
	}
	export interface ListTagsForResourceResponseFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of objects specifying each key name and value. */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A list of objects specifying each key name and value. */
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

	export interface PutResourcePolicyResponse {
	}
	export interface PutResourcePolicyResponseFormProperties {
	}
	export function CreatePutResourcePolicyResponseFormGroup() {
		return new FormGroup<PutResourcePolicyResponseFormProperties>({
		});

	}

	export interface StartChangeSetResponse {
		ChangeSetId?: string;
		ChangeSetArn?: string;
	}
	export interface StartChangeSetResponseFormProperties {
		ChangeSetId: FormControl<string | null | undefined>,
		ChangeSetArn: FormControl<string | null | undefined>,
	}
	export function CreateStartChangeSetResponseFormGroup() {
		return new FormGroup<StartChangeSetResponseFormProperties>({
			ChangeSetId: new FormControl<string | null | undefined>(undefined),
			ChangeSetArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>. */
	export interface Change {

		/** Required */
		ChangeType: string;

		/** Required */
		Entity: Entity;
		EntityTags?: Array<Tag>;

		/** Required */
		Details: string;
		ChangeName?: string;
	}

	/** An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>. */
	export interface ChangeFormProperties {

		/** Required */
		ChangeType: FormControl<string | null | undefined>,

		/** Required */
		Details: FormControl<string | null | undefined>,
		ChangeName: FormControl<string | null | undefined>,
	}
	export function CreateChangeFormGroup() {
		return new FormGroup<ChangeFormProperties>({
			ChangeType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Details: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeName: new FormControl<string | null | undefined>(undefined),
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

	export interface CancelChangeSetRequest {
	}
	export interface CancelChangeSetRequestFormProperties {
	}
	export function CreateCancelChangeSetRequestFormGroup() {
		return new FormGroup<CancelChangeSetRequestFormProperties>({
		});

	}

	export interface DeleteResourcePolicyRequest {
	}
	export interface DeleteResourcePolicyRequestFormProperties {
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
		});

	}

	export interface DescribeChangeSetRequest {
	}
	export interface DescribeChangeSetRequestFormProperties {
	}
	export function CreateDescribeChangeSetRequestFormGroup() {
		return new FormGroup<DescribeChangeSetRequestFormProperties>({
		});

	}

	export interface DescribeEntityRequest {
	}
	export interface DescribeEntityRequestFormProperties {
	}
	export function CreateDescribeEntityRequestFormGroup() {
		return new FormGroup<DescribeEntityRequestFormProperties>({
		});

	}

	export interface GetResourcePolicyRequest {
	}
	export interface GetResourcePolicyRequestFormProperties {
	}
	export function CreateGetResourcePolicyRequestFormGroup() {
		return new FormGroup<GetResourcePolicyRequestFormProperties>({
		});

	}


	/** An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
	export interface Sort {
		SortBy?: string;
		SortOrder?: SortOrder;
	}

	/** An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
	export interface SortFormProperties {
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateSortFormGroup() {
		return new FormGroup<SortFormProperties>({
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListChangeSetsRequest {

		/** Required */
		Catalog: string;
		FilterList?: Array<Filter>;
		Sort?: Sort;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListChangeSetsRequestFormProperties {

		/** Required */
		Catalog: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangeSetsRequestFormGroup() {
		return new FormGroup<ListChangeSetsRequestFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OwnershipType { SELF = 'SELF', SHARED = 'SHARED' }

	export interface ListEntitiesRequest {

		/** Required */
		Catalog: string;

		/** Required */
		EntityType: string;
		FilterList?: Array<Filter>;
		Sort?: Sort;
		NextToken?: string;
		MaxResults?: number | null;
		OwnershipType?: OwnershipType | null;
	}
	export interface ListEntitiesRequestFormProperties {

		/** Required */
		Catalog: FormControl<string | null | undefined>,

		/** Required */
		EntityType: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		OwnershipType: FormControl<OwnershipType | null | undefined>,
	}
	export function CreateListEntitiesRequestFormGroup() {
		return new FormGroup<ListEntitiesRequestFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EntityType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			OwnershipType: new FormControl<OwnershipType | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Policy: string;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,

		/** Required */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartChangeSetRequest {

		/** Required */
		Catalog: string;

		/** Required */
		ChangeSet: Array<Change>;
		ChangeSetName?: string;
		ClientRequestToken?: string;
		ChangeSetTags?: Array<Tag>;
	}
	export interface StartChangeSetRequestFormProperties {

		/** Required */
		Catalog: FormControl<string | null | undefined>,
		ChangeSetName: FormControl<string | null | undefined>,
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartChangeSetRequestFormGroup() {
		return new FormGroup<StartChangeSetRequestFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ChangeSetName: new FormControl<string | null | undefined>(undefined),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceArn: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Used to cancel an open change request. Must be sent before the status of the request changes to <code>APPLYING</code>, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.
		 * Patch CancelChangeSet#catalog&changeSetId
		 * @param {string} catalog Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code>.
		 *     Min length: 1    Max length: 64
		 * @param {string} changeSetId Required. The unique identifier of the <code>StartChangeSet</code> request that you want to cancel.
		 *     Min length: 1    Max length: 255
		 * @return {CancelChangeSetResponse} Success
		 */
		CancelChangeSet(catalog: string, changeSetId: string): Observable<CancelChangeSetResponse> {
			return this.http.patch<CancelChangeSetResponse>(this.baseUri + 'CancelChangeSet#catalog&changeSetId?catalog=' + (catalog == null ? '' : encodeURIComponent(catalog)) + '&changeSetId=' + (changeSetId == null ? '' : encodeURIComponent(changeSetId)), null, {});
		}

		/**
		 * Deletes a resource-based policy on an Entity that is identified by its resource ARN.
		 * Delete DeleteResourcePolicy#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the Entity resource that is associated with the resource policy.
		 *     Min length: 1    Max length: 255
		 * @return {DeleteResourcePolicyResponse} Success
		 */
		DeleteResourcePolicy(resourceArn: string): Observable<DeleteResourcePolicyResponse> {
			return this.http.delete<DeleteResourcePolicyResponse>(this.baseUri + 'DeleteResourcePolicy#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Provides information about a given change set.
		 * Get DescribeChangeSet#catalog&changeSetId
		 * @param {string} catalog Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code> 
		 *     Min length: 1    Max length: 64
		 * @param {string} changeSetId Required. The unique identifier for the <code>StartChangeSet</code> request that you want to describe the details for.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeChangeSetResponse} Success
		 */
		DescribeChangeSet(catalog: string, changeSetId: string): Observable<DescribeChangeSetResponse> {
			return this.http.get<DescribeChangeSetResponse>(this.baseUri + 'DescribeChangeSet#catalog&changeSetId?catalog=' + (catalog == null ? '' : encodeURIComponent(catalog)) + '&changeSetId=' + (changeSetId == null ? '' : encodeURIComponent(changeSetId)), {});
		}

		/**
		 * Returns the metadata and content of the entity.
		 * Get DescribeEntity#catalog&entityId
		 * @param {string} catalog Required. The catalog related to the request. Fixed value: <code>AWSMarketplace</code> 
		 *     Min length: 1    Max length: 64
		 * @param {string} entityId Required. The unique ID of the entity to describe.
		 *     Min length: 1    Max length: 255
		 * @return {DescribeEntityResponse} Success
		 */
		DescribeEntity(catalog: string, entityId: string): Observable<DescribeEntityResponse> {
			return this.http.get<DescribeEntityResponse>(this.baseUri + 'DescribeEntity#catalog&entityId?catalog=' + (catalog == null ? '' : encodeURIComponent(catalog)) + '&entityId=' + (entityId == null ? '' : encodeURIComponent(entityId)), {});
		}

		/**
		 * Gets a resource-based policy of an Entity that is identified by its resource ARN.
		 * Get GetResourcePolicy#resourceArn
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the Entity resource that is associated with the resource policy.
		 *     Min length: 1    Max length: 255
		 * @return {GetResourcePolicyResponse} Success
		 */
		GetResourcePolicy(resourceArn: string): Observable<GetResourcePolicyResponse> {
			return this.http.get<GetResourcePolicyResponse>(this.baseUri + 'GetResourcePolicy#resourceArn?resourceArn=' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Returns the list of change sets owned by the account being used to make the call. You can filter this list by providing any combination of <code>entityId</code>, <code>ChangeSetName</code>, and status. If you provide more than one filter, the API operation applies a logical AND between the filters.</p> <p>You can describe a change during the 60-day request history retention period for API calls.</p>
		 * Post ListChangeSets
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListChangeSetsResponse} Success
		 */
		ListChangeSets(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListChangeSetsPostBody): Observable<ListChangeSetsResponse> {
			return this.http.post<ListChangeSetsResponse>(this.baseUri + 'ListChangeSets?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides the list of entities of a given type.
		 * Post ListEntities
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListEntitiesResponse} Success
		 */
		ListEntities(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListEntitiesPostBody): Observable<ListEntitiesResponse> {
			return this.http.post<ListEntitiesResponse>(this.baseUri + 'ListEntities?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all tags that have been added to a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).
		 * Post ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourcePostBody): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + 'ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attaches a resource-based policy to an Entity. Examples of an entity include: <code>AmiProduct</code> and <code>ContainerProduct</code>.
		 * Post PutResourcePolicy
		 * @return {PutResourcePolicyResponse} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyPostBody): Observable<PutResourcePolicyResponse> {
			return this.http.post<PutResourcePolicyResponse>(this.baseUri + 'PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows you to request changes for your entities. Within a single <code>ChangeSet</code>, you can't start the same change type against the same entity multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities targeted by the different changes are locked until the change set has completed (either succeeded, cancelled, or failed). If you try to start a change set containing a change against an entity that is already locked, you will receive a <code>ResourceInUseException</code> error.</p> <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same change type (<code>AddRevisions</code>) against the same entity (<code>entity-id@1</code>).</p> <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>. For information on change types for single-AMI products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/ami-products.html#working-with-single-AMI-products">Working with single-AMI products</a>. Als, for more information on change types available for container-based products, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/container-products.html#working-with-container-products">Working with container products</a>.</p>
		 * Post StartChangeSet
		 * @return {StartChangeSetResponse} Success
		 */
		StartChangeSet(requestBody: StartChangeSetPostBody): Observable<StartChangeSetResponse> {
			return this.http.post<StartChangeSetResponse>(this.baseUri + 'StartChangeSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Tags a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).
		 * Post TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag or list of tags from a resource (either an <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#catalog-api-entities">entity</a> or <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets">change set</a>).
		 * Post UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + 'UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface ListChangeSetsPostBody {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Catalog: string;

		/**
		 * An array of filter objects.
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		FilterList?: Array<Filter>;

		/** An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
		Sort?: ListChangeSetsPostBodySort;

		/**
		 * The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;

		/**
		 * The token value retrieved from a previous call to access the next page of results.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken?: string | null;
	}
	export interface ListChangeSetsPostBodyFormProperties {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Catalog: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results returned by a single call. This value must be provided in the next call to retrieve the next set of results. By default, this value is 20.
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The token value retrieved from a previous call to access the next page of results.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangeSetsPostBodyFormGroup() {
		return new FormGroup<ListChangeSetsPostBodyFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z]+$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[\w+=.:@\-\/]$')]),
		});

	}

	export interface ListChangeSetsPostBodySort {
		SortBy?: string;
		SortOrder?: SortOrder;
	}
	export interface ListChangeSetsPostBodySortFormProperties {
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListChangeSetsPostBodySortFormGroup() {
		return new FormGroup<ListChangeSetsPostBodySortFormProperties>({
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListEntitiesPostBody {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Catalog: string;

		/**
		 * The type of entities to retrieve.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		EntityType: string;

		/**
		 * An array of filter objects. Each filter object contains two attributes, <code>filterName</code> and <code>filterValues</code>.
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		FilterList?: Array<Filter>;

		/** An object that contains two attributes, <code>SortBy</code> and <code>SortOrder</code>. */
		Sort?: ListEntitiesPostBodySort;

		/**
		 * The value of the next token, if it exists. Null if there are no more results.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken?: string | null;

		/**
		 * Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;
		OwnershipType?: OwnershipType | null;
	}
	export interface ListEntitiesPostBodyFormProperties {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Catalog: FormControl<string | null | undefined>,

		/**
		 * The type of entities to retrieve.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		EntityType: FormControl<string | null | undefined>,

		/**
		 * The value of the next token, if it exists. Null if there are no more results.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Specifies the upper limit of the elements on a single page. If a value isn't provided, the default value is 20.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,
		OwnershipType: FormControl<OwnershipType | null | undefined>,
	}
	export function CreateListEntitiesPostBodyFormGroup() {
		return new FormGroup<ListEntitiesPostBodyFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z]+$')]),
			EntityType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+$')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('^[\w+=.:@\-\/]$')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			OwnershipType: new FormControl<OwnershipType | null | undefined>(undefined),
		});

	}

	export interface ListEntitiesPostBodySort {
		SortBy?: string;
		SortOrder?: SortOrder;
	}
	export interface ListEntitiesPostBodySortFormProperties {
		SortBy: FormControl<string | null | undefined>,
		SortOrder: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListEntitiesPostBodySortFormGroup() {
		return new FormGroup<ListEntitiesPostBodySortFormProperties>({
			SortBy: new FormControl<string | null | undefined>(undefined),
			SortOrder: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourcePostBody {

		/**
		 * Required. The Amazon Resource Name (ARN) associated with the resource you want to list tags on.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ResourceArn: string;
	}
	export interface ListTagsForResourcePostBodyFormProperties {

		/**
		 * Required. The Amazon Resource Name (ARN) associated with the resource you want to list tags on.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourcePostBodyFormGroup() {
		return new FormGroup<ListTagsForResourcePostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^arn:[\w+=/,.@-]+:aws-marketplace:[\w+=/,.@-]*:[0-9]+:[\w+=,.@-]+(/[\w+=,.@-]+)*$')]),
		});

	}

	export interface PutResourcePolicyPostBody {

		/**
		 * The Amazon Resource Name (ARN) of the Entity resource you want to associate with a resource policy.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ResourceArn: string;

		/**
		 * The policy document to set; formatted in JSON.
		 * Required
		 * Min length: 1
		 * Max length: 10240
		 */
		Policy: string;
	}
	export interface PutResourcePolicyPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the Entity resource you want to associate with a resource policy.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/**
		 * The policy document to set; formatted in JSON.
		 * Required
		 * Min length: 1
		 * Max length: 10240
		 */
		Policy: FormControl<string | null | undefined>,
	}
	export function CreatePutResourcePolicyPostBodyFormGroup() {
		return new FormGroup<PutResourcePolicyPostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^arn:[\w+=/,.@-]+:aws-marketplace:[\w+=/,.@-]*:[0-9]+:[\w+=,.@-]+(/[\w+=,.@-]+)*$')]),
			Policy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(10240), Validators.pattern('^[\u0009\u000A\u000D\u0020-\u00FF]+$')]),
		});

	}

	export interface StartChangeSetPostBody {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Catalog: string;

		/**
		 * Array of <code>change</code> object.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ChangeSet: Array<Change>;

		/**
		 * Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets.
		 * Min length: 1
		 * Max length: 100
		 */
		ChangeSetName?: string | null;

		/**
		 * A unique token to identify the request to ensure idempotency.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken?: string | null;

		/**
		 * A list of objects specifying each key name and value for the <code>ChangeSetTags</code> property.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		ChangeSetTags?: Array<Tag>;
	}
	export interface StartChangeSetPostBodyFormProperties {

		/**
		 * The catalog related to the request. Fixed value: <code>AWSMarketplace</code>
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Catalog: FormControl<string | null | undefined>,

		/**
		 * Optional case sensitive string of up to 100 ASCII characters. The change set name can be used to filter the list of change sets.
		 * Min length: 1
		 * Max length: 100
		 */
		ChangeSetName: FormControl<string | null | undefined>,

		/**
		 * A unique token to identify the request to ensure idempotency.
		 * Min length: 1
		 * Max length: 64
		 */
		ClientRequestToken: FormControl<string | null | undefined>,
	}
	export function CreateStartChangeSetPostBodyFormGroup() {
		return new FormGroup<StartChangeSetPostBodyFormProperties>({
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z]+$')]),
			ChangeSetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100), Validators.pattern('^[\w\s+=.:@-]+$')]),
			ClientRequestToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[!-~]+$')]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Required. The Amazon Resource Name (ARN) associated with the resource you want to tag.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ResourceArn: string;

		/**
		 * Required. A list of objects specifying each key name and value. Number of objects allowed: 1-50.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * Required. The Amazon Resource Name (ARN) associated with the resource you want to tag.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^arn:[\w+=/,.@-]+:aws-marketplace:[\w+=/,.@-]*:[0-9]+:[\w+=,.@-]+(/[\w+=,.@-]+)*$')]),
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * Required. The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ResourceArn: string;

		/**
		 * Required. A list of key names of tags to be removed. Number of strings allowed: 0-256.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * Required. The Amazon Resource Name (ARN) associated with the resource you want to remove the tag from.
		 * Required
		 * Min length: 1
		 * Max length: 255
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^arn:[\w+=/,.@-]+:aws-marketplace:[\w+=/,.@-]*:[0-9]+:[\w+=,.@-]+(/[\w+=,.@-]+)*$')]),
		});

	}

}

