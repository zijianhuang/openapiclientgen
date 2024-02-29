import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateDefaultViewOutput {
		ViewArn?: string;
	}
	export interface AssociateDefaultViewOutputFormProperties {
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDefaultViewOutputFormGroup() {
		return new FormGroup<AssociateDefaultViewOutputFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface BatchGetViewOutput {
		Errors?: Array<BatchGetViewError>;
		Views?: Array<View>;
	}
	export interface BatchGetViewOutputFormProperties {
	}
	export function CreateBatchGetViewOutputFormGroup() {
		return new FormGroup<BatchGetViewOutputFormProperties>({
		});

	}


	/** A collection of error messages for any views that Amazon Web Services Resource Explorer couldn't retrieve details. */
	export interface BatchGetViewError {

		/** Required */
		ErrorMessage: string;

		/** Required */
		ViewArn: string;
	}

	/** A collection of error messages for any views that Amazon Web Services Resource Explorer couldn't retrieve details. */
	export interface BatchGetViewErrorFormProperties {

		/** Required */
		ErrorMessage: FormControl<string | null | undefined>,

		/** Required */
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetViewErrorFormGroup() {
		return new FormGroup<BatchGetViewErrorFormProperties>({
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ViewArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A view is a structure that defines a set of filters that provide a view into the information in the Amazon Web Services Resource Explorer index. The filters specify which information from the index is visible to the users of the view. For example, you can specify filters that include only resources that are tagged with the key "ENV" and the value "DEVELOPMENT" in the results returned by this view. You could also create a second view that includes only resources that are tagged with "ENV" and "PRODUCTION". */
	export interface View {
		Filters?: SearchFilter;
		IncludedProperties?: Array<IncludedProperty>;
		LastUpdatedAt?: Date;
		Owner?: string;
		Scope?: string;
		ViewArn?: string;
	}

	/** A view is a structure that defines a set of filters that provide a view into the information in the Amazon Web Services Resource Explorer index. The filters specify which information from the index is visible to the users of the view. For example, you can specify filters that include only resources that are tagged with the key "ENV" and the value "DEVELOPMENT" in the results returned by this view. You could also create a second view that includes only resources that are tagged with "ENV" and "PRODUCTION". */
	export interface ViewFormProperties {
		LastUpdatedAt: FormControl<Date | null | undefined>,
		Owner: FormControl<string | null | undefined>,
		Scope: FormControl<string | null | undefined>,
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateViewFormGroup() {
		return new FormGroup<ViewFormProperties>({
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			Owner: new FormControl<string | null | undefined>(undefined),
			Scope: new FormControl<string | null | undefined>(undefined),
			ViewArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A search filter defines which resources can be part of a search query result set. */
	export interface SearchFilter {

		/** Required */
		FilterString: string;
	}

	/** A search filter defines which resources can be part of a search query result set. */
	export interface SearchFilterFormProperties {

		/** Required */
		FilterString: FormControl<string | null | undefined>,
	}
	export function CreateSearchFilterFormGroup() {
		return new FormGroup<SearchFilterFormProperties>({
			FilterString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about an additional property that describes a resource, that you can optionally include in the view. This lets you view that property in search results, and filter your search results based on the value of the property. */
	export interface IncludedProperty {

		/** Required */
		Name: string;
	}

	/** Information about an additional property that describes a resource, that you can optionally include in the view. This lets you view that property in search results, and filter your search results based on the value of the property. */
	export interface IncludedPropertyFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateIncludedPropertyFormGroup() {
		return new FormGroup<IncludedPropertyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateIndexOutput {
		Arn?: string;
		CreatedAt?: Date;
		State?: IndexState;
	}
	export interface CreateIndexOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		State: FormControl<IndexState | null | undefined>,
	}
	export function CreateCreateIndexOutputFormGroup() {
		return new FormGroup<CreateIndexOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<IndexState | null | undefined>(undefined),
		});

	}

	export enum IndexState { CREATING = 'CREATING', ACTIVE = 'ACTIVE', DELETING = 'DELETING', DELETED = 'DELETED', UPDATING = 'UPDATING' }

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface CreateViewOutput {
		View?: View;
	}
	export interface CreateViewOutputFormProperties {
	}
	export function CreateCreateViewOutputFormGroup() {
		return new FormGroup<CreateViewOutputFormProperties>({
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

	export interface DeleteIndexOutput {
		Arn?: string;
		LastUpdatedAt?: Date;
		State?: IndexState;
	}
	export interface DeleteIndexOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		State: FormControl<IndexState | null | undefined>,
	}
	export function CreateDeleteIndexOutputFormGroup() {
		return new FormGroup<DeleteIndexOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<IndexState | null | undefined>(undefined),
		});

	}

	export interface DeleteViewOutput {
		ViewArn?: string;
	}
	export interface DeleteViewOutputFormProperties {
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteViewOutputFormGroup() {
		return new FormGroup<DeleteViewOutputFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDefaultViewOutput {
		ViewArn?: string;
	}
	export interface GetDefaultViewOutputFormProperties {
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateGetDefaultViewOutputFormGroup() {
		return new FormGroup<GetDefaultViewOutputFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetIndexOutput {
		Arn?: string;
		CreatedAt?: Date;
		LastUpdatedAt?: Date;
		ReplicatingFrom?: Array<string>;
		ReplicatingTo?: Array<string>;
		State?: IndexState;
		Tags?: TagMap;
		Type?: IndexType;
	}
	export interface GetIndexOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedAt: FormControl<Date | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		State: FormControl<IndexState | null | undefined>,
		Type: FormControl<IndexType | null | undefined>,
	}
	export function CreateGetIndexOutputFormGroup() {
		return new FormGroup<GetIndexOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<IndexState | null | undefined>(undefined),
			Type: new FormControl<IndexType | null | undefined>(undefined),
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

	export enum IndexType { LOCAL = 'LOCAL', AGGREGATOR = 'AGGREGATOR' }

	export interface GetViewOutput {
		Tags?: TagMap;
		View?: View;
	}
	export interface GetViewOutputFormProperties {
	}
	export function CreateGetViewOutputFormGroup() {
		return new FormGroup<GetViewOutputFormProperties>({
		});

	}

	export interface ListIndexesOutput {
		Indexes?: Array<Index>;
		NextToken?: string;
	}
	export interface ListIndexesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListIndexesOutputFormGroup() {
		return new FormGroup<ListIndexesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>An index is the data store used by Amazon Web Services Resource Explorer to hold information about your Amazon Web Services resources that the service discovers. Creating an index in an Amazon Web Services Region turns on Resource Explorer and lets it discover your resources.</p> <p>By default, an index is <i>local</i>, meaning that it contains information about resources in only the same Region as the index. However, you can promote the index of one Region in the account by calling <a>UpdateIndexType</a> to convert it into an aggregator index. The aggregator index receives a replicated copy of the index information from all other Regions where Resource Explorer is turned on. This allows search operations in that Region to return results from all Regions in the account.</p> */
	export interface Index {
		Arn?: string;
		Region?: string;
		Type?: IndexType;
	}

	/** <p>An index is the data store used by Amazon Web Services Resource Explorer to hold information about your Amazon Web Services resources that the service discovers. Creating an index in an Amazon Web Services Region turns on Resource Explorer and lets it discover your resources.</p> <p>By default, an index is <i>local</i>, meaning that it contains information about resources in only the same Region as the index. However, you can promote the index of one Region in the account by calling <a>UpdateIndexType</a> to convert it into an aggregator index. The aggregator index receives a replicated copy of the index information from all other Regions where Resource Explorer is turned on. This allows search operations in that Region to return results from all Regions in the account.</p> */
	export interface IndexFormProperties {
		Arn: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		Type: FormControl<IndexType | null | undefined>,
	}
	export function CreateIndexFormGroup() {
		return new FormGroup<IndexFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<IndexType | null | undefined>(undefined),
		});

	}

	export interface ListSupportedResourceTypesOutput {
		NextToken?: string;
		ResourceTypes?: Array<SupportedResourceType>;
	}
	export interface ListSupportedResourceTypesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSupportedResourceTypesOutputFormGroup() {
		return new FormGroup<ListSupportedResourceTypesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that describes a resource type supported by Amazon Web Services Resource Explorer. */
	export interface SupportedResourceType {
		ResourceType?: string;
		Service?: string;
	}

	/** A structure that describes a resource type supported by Amazon Web Services Resource Explorer. */
	export interface SupportedResourceTypeFormProperties {
		ResourceType: FormControl<string | null | undefined>,
		Service: FormControl<string | null | undefined>,
	}
	export function CreateSupportedResourceTypeFormGroup() {
		return new FormGroup<SupportedResourceTypeFormProperties>({
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
		});

	}

	export interface ListViewsOutput {
		NextToken?: string;
		Views?: Array<string>;
	}
	export interface ListViewsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListViewsOutputFormGroup() {
		return new FormGroup<ListViewsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchOutput {
		Count?: ResourceCount;
		NextToken?: string;
		Resources?: Array<Resource>;
		ViewArn?: string;
	}
	export interface SearchOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateSearchOutputFormGroup() {
		return new FormGroup<SearchOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			ViewArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about the number of results that match the query. At this time, Amazon Web Services Resource Explorer doesn't count more than 1,000 matches for any query. This structure provides information about whether the query exceeded this limit.</p> <p>This field is included in every page when you paginate the results.</p> */
	export interface ResourceCount {
		Complete?: boolean | null;
		TotalResources?: number | null;
	}

	/** <p>Information about the number of results that match the query. At this time, Amazon Web Services Resource Explorer doesn't count more than 1,000 matches for any query. This structure provides information about whether the query exceeded this limit.</p> <p>This field is included in every page when you paginate the results.</p> */
	export interface ResourceCountFormProperties {
		Complete: FormControl<boolean | null | undefined>,
		TotalResources: FormControl<number | null | undefined>,
	}
	export function CreateResourceCountFormGroup() {
		return new FormGroup<ResourceCountFormProperties>({
			Complete: new FormControl<boolean | null | undefined>(undefined),
			TotalResources: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A resource in Amazon Web Services that Amazon Web Services Resource Explorer has discovered, and for which it has stored information in the index of the Amazon Web Services Region that contains the resource. */
	export interface Resource {
		Arn?: string;
		LastReportedAt?: Date;
		OwningAccountId?: string;
		Properties?: Array<ResourceProperty>;
		Region?: string;
		ResourceType?: string;
		Service?: string;
	}

	/** A resource in Amazon Web Services that Amazon Web Services Resource Explorer has discovered, and for which it has stored information in the index of the Amazon Web Services Region that contains the resource. */
	export interface ResourceFormProperties {
		Arn: FormControl<string | null | undefined>,
		LastReportedAt: FormControl<Date | null | undefined>,
		OwningAccountId: FormControl<string | null | undefined>,
		Region: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
		Service: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			LastReportedAt: new FormControl<Date | null | undefined>(undefined),
			OwningAccountId: new FormControl<string | null | undefined>(undefined),
			Region: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
			Service: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that describes a property of a resource. */
	export interface ResourceProperty {
		Data?: Document;
		LastReportedAt?: Date;
		Name?: string;
	}

	/** A structure that describes a property of a resource. */
	export interface ResourcePropertyFormProperties {
		LastReportedAt: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateResourcePropertyFormGroup() {
		return new FormGroup<ResourcePropertyFormProperties>({
			LastReportedAt: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Document {
	}
	export interface DocumentFormProperties {
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
		});

	}

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export interface UpdateIndexTypeOutput {
		Arn?: string;
		LastUpdatedAt?: Date;
		State?: IndexState;
		Type?: IndexType;
	}
	export interface UpdateIndexTypeOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		LastUpdatedAt: FormControl<Date | null | undefined>,
		State: FormControl<IndexState | null | undefined>,
		Type: FormControl<IndexType | null | undefined>,
	}
	export function CreateUpdateIndexTypeOutputFormGroup() {
		return new FormGroup<UpdateIndexTypeOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			LastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<IndexState | null | undefined>(undefined),
			Type: new FormControl<IndexType | null | undefined>(undefined),
		});

	}

	export interface UpdateViewOutput {
		View?: View;
	}
	export interface UpdateViewOutputFormProperties {
	}
	export function CreateUpdateViewOutputFormGroup() {
		return new FormGroup<UpdateViewOutputFormProperties>({
		});

	}

	export interface AssociateDefaultViewInput {

		/** Required */
		ViewArn: string;
	}
	export interface AssociateDefaultViewInputFormProperties {

		/** Required */
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDefaultViewInputFormGroup() {
		return new FormGroup<AssociateDefaultViewInputFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchGetViewInput {
		ViewArns?: Array<string>;
	}
	export interface BatchGetViewInputFormProperties {
	}
	export function CreateBatchGetViewInputFormGroup() {
		return new FormGroup<BatchGetViewInputFormProperties>({
		});

	}

	export interface CreateIndexInput {
		ClientToken?: string;
		Tags?: TagMap;
	}
	export interface CreateIndexInputFormProperties {
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateIndexInputFormGroup() {
		return new FormGroup<CreateIndexInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateViewInput {
		ClientToken?: string;
		Filters?: SearchFilter;
		IncludedProperties?: Array<IncludedProperty>;
		Tags?: TagMap;

		/** Required */
		ViewName: string;
	}
	export interface CreateViewInputFormProperties {
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		ViewName: FormControl<string | null | undefined>,
	}
	export function CreateCreateViewInputFormGroup() {
		return new FormGroup<CreateViewInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ViewName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteIndexInput {

		/** Required */
		Arn: string;
	}
	export interface DeleteIndexInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIndexInputFormGroup() {
		return new FormGroup<DeleteIndexInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteViewInput {

		/** Required */
		ViewArn: string;
	}
	export interface DeleteViewInputFormProperties {

		/** Required */
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteViewInputFormGroup() {
		return new FormGroup<DeleteViewInputFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetViewInput {

		/** Required */
		ViewArn: string;
	}
	export interface GetViewInputFormProperties {

		/** Required */
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateGetViewInputFormGroup() {
		return new FormGroup<GetViewInputFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListIndexesInput {
		MaxResults?: number | null;
		NextToken?: string;
		Regions?: Array<string>;
		Type?: IndexType;
	}
	export interface ListIndexesInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Type: FormControl<IndexType | null | undefined>,
	}
	export function CreateListIndexesInputFormGroup() {
		return new FormGroup<ListIndexesInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<IndexType | null | undefined>(undefined),
		});

	}

	export interface ListSupportedResourceTypesInput {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListSupportedResourceTypesInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSupportedResourceTypesInputFormGroup() {
		return new FormGroup<ListSupportedResourceTypesInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export interface ListViewsInput {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListViewsInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListViewsInputFormGroup() {
		return new FormGroup<ListViewsInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchInput {
		MaxResults?: number | null;
		NextToken?: string;

		/** Required */
		QueryString: string;
		ViewArn?: string;
	}
	export interface SearchInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		QueryString: FormControl<string | null | undefined>,
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateSearchInputFormGroup() {
		return new FormGroup<SearchInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ViewArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceInput {
		Tags?: TagMap;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	export interface UpdateIndexTypeInput {

		/** Required */
		Arn: string;

		/** Required */
		Type: IndexType;
	}
	export interface UpdateIndexTypeInputFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<IndexType | null | undefined>,
	}
	export function CreateUpdateIndexTypeInputFormGroup() {
		return new FormGroup<UpdateIndexTypeInputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<IndexType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateViewInput {
		Filters?: SearchFilter;
		IncludedProperties?: Array<IncludedProperty>;

		/** Required */
		ViewArn: string;
	}
	export interface UpdateViewInputFormProperties {

		/** Required */
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateViewInputFormGroup() {
		return new FormGroup<UpdateViewInputFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Sets the specified view as the default for the Amazon Web Services Region in which you call this operation. When a user performs a <a>Search</a> that doesn't explicitly specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for searches performed in this Amazon Web Services Region.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>
		 * Post AssociateDefaultView
		 * @return {AssociateDefaultViewOutput} Success
		 */
		AssociateDefaultView(requestBody: AssociateDefaultViewPostBody): Observable<AssociateDefaultViewOutput> {
			return this.http.post<AssociateDefaultViewOutput>(this.baseUri + 'AssociateDefaultView', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves details about a list of views.
		 * Post BatchGetView
		 * @return {BatchGetViewOutput} Success
		 */
		BatchGetView(requestBody: BatchGetViewPostBody): Observable<BatchGetViewOutput> {
			return this.http.post<BatchGetViewOutput>(this.baseUri + 'BatchGetView', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Turns on Amazon Web Services Resource Explorer in the Amazon Web Services Region in which you called this operation by creating an index. Resource Explorer begins discovering the resources in this Region and stores the details about the resources in the index so that they can be queried by using the <a>Search</a> operation. You can create only one index in a Region.</p> <note> <p>This operation creates only a <i>local</i> index. To promote the local index in one Amazon Web Services Region into the aggregator index for the Amazon Web Services account, use the <a>UpdateIndexType</a> operation. For more information, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> </note> <p>For more details about what happens when you turn on Resource Explorer in an Amazon Web Services Region, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-service-activate.html">Turn on Resource Explorer to index your resources in an Amazon Web Services Region</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>If this is the first Amazon Web Services Region in which you've created an index for Resource Explorer, then this operation also <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">creates a service-linked role</a> in your Amazon Web Services account that allows Resource Explorer to enumerate your resources to populate the index.</p> <ul> <li> <p> <b>Action</b>: <code>resource-explorer-2:CreateIndex</code> </p> <p> <b>Resource</b>: The ARN of the index (as it will exist after the operation completes) in the Amazon Web Services Region and account in which you're trying to create the index. Use the wildcard character (<code>*</code>) at the end of the string to match the eventual UUID. For example, the following <code>Resource</code> element restricts the role or user to creating an index in only the <code>us-east-2</code> Region of the specified account.</p> <p> <code>"Resource": "arn:aws:resource-explorer-2:us-west-2:<i>&lt;account-id&gt;</i>:index/*"</code> </p> <p>Alternatively, you can use <code>"Resource": "*"</code> to allow the role or user to create an index in any Region.</p> </li> <li> <p> <b>Action</b>: <code>iam:CreateServiceLinkedRole</code> </p> <p> <b>Resource</b>: No specific resource (*). </p> <p>This permission is required only the first time you create an index to turn on Resource Explorer in the account. Resource Explorer uses this to create the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/security_iam_service-linked-roles.html">service-linked role needed to index the resources in your account</a>. Resource Explorer uses the same service-linked role for all additional indexes you create afterwards.</p> </li> </ul>
		 * Post CreateIndex
		 * @return {CreateIndexOutput} Success
		 */
		CreateIndex(requestBody: CreateIndexPostBody): Observable<CreateIndexOutput> {
			return this.http.post<CreateIndexOutput>(this.baseUri + 'CreateIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a view that users can query by using the <a>Search</a> operation. Results from queries that you make using this view include only resources that match the view's <code>Filters</code>. For more information about Amazon Web Services Resource Explorer views, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-views.html">Managing views</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <p>Only the principals with an IAM identity-based policy that grants <code>Allow</code> to the <code>Search</code> action on a <code>Resource</code> with the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of this view can <a>Search</a> using views you create with this operation.</p>
		 * Post CreateView
		 * @return {CreateViewOutput} Success
		 */
		CreateView(requestBody: CreateViewPostBody): Observable<CreateViewOutput> {
			return this.http.post<CreateViewOutput>(this.baseUri + 'CreateView', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified index and turns off Amazon Web Services Resource Explorer in the specified Amazon Web Services Region. When you delete an index, Resource Explorer stops discovering and indexing resources in that Region. Resource Explorer also deletes all views in that Region. These actions occur as asynchronous background tasks. You can check to see when the actions are complete by using the <a>GetIndex</a> operation and checking the <code>Status</code> response value.</p> <note> <p>If the index you delete is the aggregator index for the Amazon Web Services account, you must wait 24 hours before you can promote another local index to be the aggregator index for the account. Users can't perform account-wide searches using Resource Explorer until another aggregator index is configured.</p> </note>
		 * Post DeleteIndex
		 * @return {DeleteIndexOutput} Success
		 */
		DeleteIndex(requestBody: DeleteIndexPostBody): Observable<DeleteIndexOutput> {
			return this.http.post<DeleteIndexOutput>(this.baseUri + 'DeleteIndex', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes the specified view.</p> <p>If the specified view is the default view for its Amazon Web Services Region, then all <a>Search</a> operations in that Region must explicitly specify the view to use until you configure a new default by calling the <a>AssociateDefaultView</a> operation.</p>
		 * Post DeleteView
		 * @return {DeleteViewOutput} Success
		 */
		DeleteView(requestBody: DeleteViewPostBody): Observable<DeleteViewOutput> {
			return this.http.post<DeleteViewOutput>(this.baseUri + 'DeleteView', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>After you call this operation, the affected Amazon Web Services Region no longer has a default view. All <a>Search</a> operations in that Region must explicitly specify a view or the operation fails. You can configure a new default by calling the <a>AssociateDefaultView</a> operation.</p> <p>If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every <code>Search</code> operation performed in that Region.</p>
		 * Post DisassociateDefaultView
		 * @return {void} Success
		 */
		DisassociateDefaultView(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'DisassociateDefaultView', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the Amazon Resource Name (ARN) of the view that is the default for the Amazon Web Services Region in which you call this operation. You can then call <a>GetView</a> to retrieve the details of that view.
		 * Post GetDefaultView
		 * @return {GetDefaultViewOutput} Success
		 */
		GetDefaultView(): Observable<GetDefaultViewOutput> {
			return this.http.post<GetDefaultViewOutput>(this.baseUri + 'GetDefaultView', null, {});
		}

		/**
		 * Retrieves details about the Amazon Web Services Resource Explorer index in the Amazon Web Services Region in which you invoked the operation.
		 * Post GetIndex
		 * @return {GetIndexOutput} Success
		 */
		GetIndex(): Observable<GetIndexOutput> {
			return this.http.post<GetIndexOutput>(this.baseUri + 'GetIndex', null, {});
		}

		/**
		 * Retrieves details of the specified view.
		 * Post GetView
		 * @return {GetViewOutput} Success
		 */
		GetView(requestBody: GetViewPostBody): Observable<GetViewOutput> {
			return this.http.post<GetViewOutput>(this.baseUri + 'GetView', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all of the indexes in Amazon Web Services Regions that are currently collecting resource information for Amazon Web Services Resource Explorer.
		 * Post ListIndexes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIndexesOutput} Success
		 */
		ListIndexes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListIndexesPostBody): Observable<ListIndexesOutput> {
			return this.http.post<ListIndexesOutput>(this.baseUri + 'ListIndexes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all resource types currently supported by Amazon Web Services Resource Explorer.
		 * Post ListSupportedResourceTypes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSupportedResourceTypesOutput} Success
		 */
		ListSupportedResourceTypes(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListSupportedResourceTypesPostBody): Observable<ListSupportedResourceTypesOutput> {
			return this.http.post<ListSupportedResourceTypesOutput>(this.baseUri + 'ListSupportedResourceTypes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the tags that are attached to the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view or index that you want to attach tags to.
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds one or more tag key and value pairs to an Amazon Web Services Resource Explorer view or index.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the view or index that you want to attach tags to.
		 * @return {TagResourceOutput} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource names (ARNs)</a> of the views available in the Amazon Web Services Region in which you call this operation.</p> <note> <p>Always check the <code>NextToken</code> response parameter for a <code>null</code> value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The <code>NextToken</code> response parameter value is <code>null</code> <i>only</i> when there are no more results to display.</p> </note>
		 * Post ListViews
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListViewsOutput} Success
		 */
		ListViews(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListViewsPostBody): Observable<ListViewsOutput> {
			return this.http.post<ListViewsOutput>(this.baseUri + 'ListViews?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Searches for resources and displays details about all resources that match the specified criteria. You must specify a query string.</p> <p>All search queries must use a view. If you don't explicitly specify a view, then Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation. The results are the logical intersection of the results that match both the <code>QueryString</code> parameter supplied to this operation and the <code>SearchFilter</code> parameter attached to the view.</p> <p>For the complete syntax supported by the <code>QueryString</code> parameter, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/APIReference/about-query-syntax.html">Search query syntax reference for Resource Explorer</a>.</p> <p>If your search results are empty, or are missing results that you think should be there, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/troubleshooting_search.html">Troubleshooting Resource Explorer search</a>.</p>
		 * Post Search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchOutput} Success
		 */
		Search(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchPostBody): Observable<SearchOutput> {
			return this.http.post<SearchOutput>(this.baseUri + 'Search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tag key and value pairs from an Amazon Web Services Resource Explorer view or index.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the view or index that you want to remove tags from.
		 * @param {Array<string>} tagKeys A list of the keys for the tags that you want to remove from the specified view or index.
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceOutput> {
			return this.http.delete<UntagResourceOutput>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * <p>Changes the type of the index from one of the following types to the other. For more information about indexes and the role they perform in Amazon Web Services Resource Explorer, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search by creating an aggregator index</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.</p> <ul> <li> <p> <b> <code>AGGREGATOR</code> index type</b> </p> <p>The index contains information about resources from all Amazon Web Services Regions in the Amazon Web Services account in which you've created a Resource Explorer index. Resource information from all other Regions is replicated to this Region's index.</p> <p>When you change the index type to <code>AGGREGATOR</code>, Resource Explorer turns on replication of all discovered resource information from the other Amazon Web Services Regions in your account to this index. You can then, from this Region only, perform resource search queries that span all Amazon Web Services Regions in the Amazon Web Services account. Turning on replication from all other Regions is performed by asynchronous background tasks. You can check the status of the asynchronous tasks by using the <a>GetIndex</a> operation. When the asynchronous tasks complete, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. After that, you can start to see results from other Amazon Web Services Regions in query results. However, it can take several hours for replication from all other Regions to complete.</p> <important> <p>You can have only one aggregator index per Amazon Web Services account. Before you can promote a different index to be the aggregator index for the account, you must first demote the existing aggregator index to type <code>LOCAL</code>.</p> </important> </li> <li> <p> <b> <code>LOCAL</code> index type</b> </p> <p>The index contains information about resources in only the Amazon Web Services Region in which the index exists. If an aggregator index in another Region exists, then information in this local index is replicated to the aggregator index.</p> <p>When you change the index type to <code>LOCAL</code>, Resource Explorer turns off the replication of resource information from all other Amazon Web Services Regions in the Amazon Web Services account to this Region. The aggregator index remains in the <code>UPDATING</code> state until all replication with other Regions successfully stops. You can check the status of the asynchronous task by using the <a>GetIndex</a> operation. When Resource Explorer successfully stops all replication with other Regions, the <code>Status</code> response of that operation changes from <code>UPDATING</code> to <code>ACTIVE</code>. Separately, the resource information from other Regions that was previously stored in the index is deleted within 30 days by another background task. Until that asynchronous task completes, some results from other Regions can continue to appear in search results.</p> <important> <p>After you demote an aggregator index to a local index, you must wait 24 hours before you can promote another index to be the new aggregator index for the account.</p> </important> </li> </ul>
		 * Post UpdateIndexType
		 * @return {UpdateIndexTypeOutput} Success
		 */
		UpdateIndexType(requestBody: UpdateIndexTypePostBody): Observable<UpdateIndexTypeOutput> {
			return this.http.post<UpdateIndexTypeOutput>(this.baseUri + 'UpdateIndexType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies some of the details of a view. You can change the filter string and the list of included properties. You can't change the name of the view.
		 * Post UpdateView
		 * @return {UpdateViewOutput} Success
		 */
		UpdateView(requestBody: UpdateViewPostBody): Observable<UpdateViewOutput> {
			return this.http.post<UpdateViewOutput>(this.baseUri + 'UpdateView', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateDefaultViewPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view to set as the default for the Amazon Web Services Region and Amazon Web Services account in which you call this operation. The specified view must already exist in the called Region.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		ViewArn: string;
	}
	export interface AssociateDefaultViewPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view to set as the default for the Amazon Web Services Region and Amazon Web Services account in which you call this operation. The specified view must already exist in the called Region.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateAssociateDefaultViewPostBodyFormGroup() {
		return new FormGroup<AssociateDefaultViewPostBodyFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

	export interface BatchGetViewPostBody {

		/**
		 * A list of <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource names (ARNs)</a> that identify the views you want details for.
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		ViewArns?: Array<string>;
	}
	export interface BatchGetViewPostBodyFormProperties {
	}
	export function CreateBatchGetViewPostBodyFormGroup() {
		return new FormGroup<BatchGetViewPostBodyFormProperties>({
		});

	}

	export interface CreateIndexPostBody {

		/** This value helps ensure idempotency. Resource Explorer uses this value to prevent the accidental creation of duplicate versions. We recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type value</a> to ensure the uniqueness of your views. */
		ClientToken?: string | null;

		/** The specified tags are attached only to the index created in this Amazon Web Services Region. The tags aren't attached to any of the resources listed in the index. */
		Tags?: {[id: string]: string };
	}
	export interface CreateIndexPostBodyFormProperties {

		/** This value helps ensure idempotency. Resource Explorer uses this value to prevent the accidental creation of duplicate versions. We recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type value</a> to ensure the uniqueness of your views. */
		ClientToken: FormControl<string | null | undefined>,

		/** The specified tags are attached only to the index created in this Amazon Web Services Region. The tags aren't attached to any of the resources listed in the index. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateIndexPostBodyFormGroup() {
		return new FormGroup<CreateIndexPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateViewPostBody {

		/**
		 * This value helps ensure idempotency. Resource Explorer uses this value to prevent the accidental creation of duplicate versions. We recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type value</a> to ensure the uniqueness of your views.
		 * Min length: 1
		 * Max length: 2048
		 */
		ClientToken?: string | null;

		/** A search filter defines which resources can be part of a search query result set. */
		Filters?: CreateViewPostBodyFilters;

		/** <p>Specifies optional fields that you want included in search results from this view. It is a list of objects that each describe a field to include.</p> <p>The default is an empty list, with no optional fields included in the results.</p> */
		IncludedProperties?: Array<IncludedProperty>;

		/** Tag key and value pairs that are attached to the view. */
		Tags?: {[id: string]: string };

		/**
		 * <p>The name of the new view. This name appears in the list of views in Resource Explorer.</p> <p>The name must be no more than 64 characters long, and can include letters, digits, and the dash (-) character. The name must be unique within its Amazon Web Services Region.</p>
		 * Required
		 */
		ViewName: string;
	}
	export interface CreateViewPostBodyFormProperties {

		/**
		 * This value helps ensure idempotency. Resource Explorer uses this value to prevent the accidental creation of duplicate versions. We recommend that you generate a <a href="https://wikipedia.org/wiki/Universally_unique_identifier">UUID-type value</a> to ensure the uniqueness of your views.
		 * Min length: 1
		 * Max length: 2048
		 */
		ClientToken: FormControl<string | null | undefined>,

		/** Tag key and value pairs that are attached to the view. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * <p>The name of the new view. This name appears in the list of views in Resource Explorer.</p> <p>The name must be no more than 64 characters long, and can include letters, digits, and the dash (-) character. The name must be unique within its Amazon Web Services Region.</p>
		 * Required
		 */
		ViewName: FormControl<string | null | undefined>,
	}
	export function CreateCreateViewPostBodyFormGroup() {
		return new FormGroup<CreateViewPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			ViewName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[a-zA-Z0-9\-]{1,64}$')]),
		});

	}

	export interface CreateViewPostBodyFilters {
		FilterString?: string;
	}
	export interface CreateViewPostBodyFiltersFormProperties {
		FilterString: FormControl<string | null | undefined>,
	}
	export function CreateCreateViewPostBodyFiltersFormGroup() {
		return new FormGroup<CreateViewPostBodyFiltersFormProperties>({
			FilterString: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteIndexPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index that you want to delete.
		 * Required
		 */
		Arn: string;
	}
	export interface DeleteIndexPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index that you want to delete.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteIndexPostBodyFormGroup() {
		return new FormGroup<DeleteIndexPostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteViewPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you want to delete.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		ViewArn: string;
	}
	export interface DeleteViewPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you want to delete.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteViewPostBodyFormGroup() {
		return new FormGroup<DeleteViewPostBodyFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

	export interface GetViewPostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you want information about.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		ViewArn: string;
	}
	export interface GetViewPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you want information about.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateGetViewPostBodyFormGroup() {
		return new FormGroup<GetViewPostBodyFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

	export interface ListIndexesPostBody {

		/**
		 * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken?: string | null;

		/**
		 * If specified, limits the response to only information about the index in the specified list of Amazon Web Services Regions.
		 * Minimum items: 0
		 * Maximum items: 20
		 */
		Regions?: Array<string>;

		/** <p>If specified, limits the output to only indexes of the specified Type, either <code>LOCAL</code> or <code>AGGREGATOR</code>.</p> <p>Use this option to discover the aggregator index for your account.</p> */
		Type?: IndexType | null;
	}
	export interface ListIndexesPostBodyFormProperties {

		/**
		 * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken: FormControl<string | null | undefined>,

		/** <p>If specified, limits the output to only indexes of the specified Type, either <code>LOCAL</code> or <code>AGGREGATOR</code>.</p> <p>Use this option to discover the aggregator index for your account.</p> */
		Type: FormControl<IndexType | null | undefined>,
	}
	export function CreateListIndexesPostBodyFormGroup() {
		return new FormGroup<ListIndexesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			Type: new FormControl<IndexType | null | undefined>(undefined),
		});

	}

	export interface ListSupportedResourceTypesPostBody {

		/**
		 * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/** The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. */
		NextToken?: string | null;
	}
	export interface ListSupportedResourceTypesPostBodyFormProperties {

		/**
		 * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSupportedResourceTypesPostBodyFormGroup() {
		return new FormGroup<ListSupportedResourceTypesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/** A list of tag key and value pairs that you want to attach to the specified view or index. */
		Tags?: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/** A list of tag key and value pairs that you want to attach to the specified view or index. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface ListViewsPostBody {

		/**
		 * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults?: number | null;

		/** The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. */
		NextToken?: string | null;
	}
	export interface ListViewsPostBodyFormProperties {

		/**
		 * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
		 * Minimum: 1
		 * Maximum: 20
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListViewsPostBodyFormGroup() {
		return new FormGroup<ListViewsPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(20)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchPostBody {

		/**
		 * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/**
		 * The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken?: string | null;

		/**
		 * <p>A string that includes keywords and filters that specify the resources that you want to include in the results.</p> <p>For the complete syntax supported by the <code>QueryString</code> parameter, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html">Search query syntax reference for Resource Explorer</a>.</p> <p>The search is completely case insensitive. You can specify an empty string to return all results up to the limit of 1,000 total results.</p> <note> <p>The operation can return only the first 1,000 results. If the resource you want is not included, then use a different value for <code>QueryString</code> to refine the results.</p> </note>
		 * Required
		 * Min length: 0
		 * Max length: 1011
		 */
		QueryString: string;

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view to use for the query. If you don't specify a value for this parameter, then the operation automatically uses the default view for the Amazon Web Services Region in which you called this operation. If the Region either doesn't have a default view or if you don't have permission to use the default view, then the operation fails with a <code>401 Unauthorized</code> exception.
		 * Min length: 0
		 * Max length: 1000
		 */
		ViewArn?: string | null;
	}
	export interface SearchPostBodyFormProperties {

		/**
		 * <p>The maximum number of results that you want included on each page of the response. If you do not include this parameter, it defaults to a value appropriate to the operation. If additional items exist beyond those included in the current response, the <code>NextToken</code> response element is present and has a value (is not null). Include that value as the <code>NextToken</code> request parameter in the next call to the operation to get the next part of the results.</p> <note> <p>An API operation can return fewer results than the maximum even when there are more results available. You should check <code>NextToken</code> after every operation to ensure that you receive all of the results.</p> </note>
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The parameter for receiving additional results if you receive a <code>NextToken</code> response in a previous request. A <code>NextToken</code> response indicates that more output is available. Set this parameter to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from.
		 * Min length: 1
		 * Max length: 2048
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * <p>A string that includes keywords and filters that specify the resources that you want to include in the results.</p> <p>For the complete syntax supported by the <code>QueryString</code> parameter, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/using-search-query-syntax.html">Search query syntax reference for Resource Explorer</a>.</p> <p>The search is completely case insensitive. You can specify an empty string to return all results up to the limit of 1,000 total results.</p> <note> <p>The operation can return only the first 1,000 results. If the resource you want is not included, then use a different value for <code>QueryString</code> to refine the results.</p> </note>
		 * Required
		 * Min length: 0
		 * Max length: 1011
		 */
		QueryString: FormControl<string | null | undefined>,

		/**
		 * Specifies the <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view to use for the query. If you don't specify a value for this parameter, then the operation automatically uses the default view for the Amazon Web Services Region in which you called this operation. If the Region either doesn't have a default view or if you don't have permission to use the default view, then the operation fails with a <code>401 Unauthorized</code> exception.
		 * Min length: 0
		 * Max length: 1000
		 */
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateSearchPostBodyFormGroup() {
		return new FormGroup<SearchPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048)]),
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1011)]),
			ViewArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
		});

	}

	export interface UpdateIndexTypePostBody {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index that you want to update.
		 * Required
		 */
		Arn: string;

		/**
		 * The type of the index. To understand the difference between <code>LOCAL</code> and <code>AGGREGATOR</code>, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.
		 * Required
		 */
		Type: IndexType;
	}
	export interface UpdateIndexTypePostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the index that you want to update.
		 * Required
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * The type of the index. To understand the difference between <code>LOCAL</code> and <code>AGGREGATOR</code>, see <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">Turning on cross-Region search</a> in the <i>Amazon Web Services Resource Explorer User Guide</i>.
		 * Required
		 */
		Type: FormControl<IndexType | null | undefined>,
	}
	export function CreateUpdateIndexTypePostBodyFormGroup() {
		return new FormGroup<UpdateIndexTypePostBodyFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<IndexType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateViewPostBody {

		/** A search filter defines which resources can be part of a search query result set. */
		Filters?: UpdateViewPostBodyFilters;

		/** <p>Specifies optional fields that you want included in search results from this view. It is a list of objects that each describe a field to include.</p> <p>The default is an empty list, with no optional fields included in the results.</p> */
		IncludedProperties?: Array<IncludedProperty>;

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you want to modify.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		ViewArn: string;
	}
	export interface UpdateViewPostBodyFormProperties {

		/**
		 * The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon resource name (ARN)</a> of the view that you want to modify.
		 * Required
		 * Min length: 1
		 * Max length: 1011
		 */
		ViewArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateViewPostBodyFormGroup() {
		return new FormGroup<UpdateViewPostBodyFormProperties>({
			ViewArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

	export interface UpdateViewPostBodyFilters {
		FilterString?: string;
	}
	export interface UpdateViewPostBodyFiltersFormProperties {
		FilterString: FormControl<string | null | undefined>,
	}
	export function CreateUpdateViewPostBodyFiltersFormGroup() {
		return new FormGroup<UpdateViewPostBodyFiltersFormProperties>({
			FilterString: new FormControl<string | null | undefined>(undefined),
		});

	}

}

