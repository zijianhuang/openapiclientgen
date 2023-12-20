import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateGroupOutput {

		/** A resource group. */
		Group?: Group;

		/** The query that is used to define a resource group or a search for resources. */
		ResourceQuery?: ResourceQuery;
		Tags?: Tags;
	}
	export interface CreateGroupOutputFormProperties {
	}
	export function CreateCreateGroupOutputFormGroup() {
		return new FormGroup<CreateGroupOutputFormProperties>({
		});

	}


	/** A resource group. */
	export interface Group {
		GroupArn: string;
		Name: string;
		Description?: string | null;
	}

	/** A resource group. */
	export interface GroupFormProperties {
		GroupArn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			GroupArn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The query that is used to define a resource group or a search for resources. */
	export interface ResourceQuery {
		Type: ResourceQueryType;
		Query: string;
	}

	/** The query that is used to define a resource group or a search for resources. */
	export interface ResourceQueryFormProperties {
		Type: FormControl<ResourceQueryType | null | undefined>,
		Query: FormControl<string | null | undefined>,
	}
	export function CreateResourceQueryFormGroup() {
		return new FormGroup<ResourceQueryFormProperties>({
			Type: new FormControl<ResourceQueryType | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ResourceQueryType { TAG_FILTERS_1_0 = 0, CLOUDFORMATION_STACK_1_0 = 1 }

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
		});

	}

	export enum QueryType { TAG_FILTERS_1_0 = 0, CLOUDFORMATION_STACK_1_0 = 1 }

	export interface BadRequestException {
	}
	export interface BadRequestExceptionFormProperties {
	}
	export function CreateBadRequestExceptionFormGroup() {
		return new FormGroup<BadRequestExceptionFormProperties>({
		});

	}

	export interface ForbiddenException {
	}
	export interface ForbiddenExceptionFormProperties {
	}
	export function CreateForbiddenExceptionFormGroup() {
		return new FormGroup<ForbiddenExceptionFormProperties>({
		});

	}

	export interface MethodNotAllowedException {
	}
	export interface MethodNotAllowedExceptionFormProperties {
	}
	export function CreateMethodNotAllowedExceptionFormGroup() {
		return new FormGroup<MethodNotAllowedExceptionFormProperties>({
		});

	}

	export interface TooManyRequestsException {
	}
	export interface TooManyRequestsExceptionFormProperties {
	}
	export function CreateTooManyRequestsExceptionFormGroup() {
		return new FormGroup<TooManyRequestsExceptionFormProperties>({
		});

	}

	export interface InternalServerErrorException {
	}
	export interface InternalServerErrorExceptionFormProperties {
	}
	export function CreateInternalServerErrorExceptionFormGroup() {
		return new FormGroup<InternalServerErrorExceptionFormProperties>({
		});

	}

	export interface DeleteGroupOutput {

		/** A resource group. */
		Group?: Group;
	}
	export interface DeleteGroupOutputFormProperties {
	}
	export function CreateDeleteGroupOutputFormGroup() {
		return new FormGroup<DeleteGroupOutputFormProperties>({
		});

	}

	export interface NotFoundException {
	}
	export interface NotFoundExceptionFormProperties {
	}
	export function CreateNotFoundExceptionFormGroup() {
		return new FormGroup<NotFoundExceptionFormProperties>({
		});

	}

	export interface GetGroupOutput {

		/** A resource group. */
		Group?: Group;
	}
	export interface GetGroupOutputFormProperties {
	}
	export function CreateGetGroupOutputFormGroup() {
		return new FormGroup<GetGroupOutputFormProperties>({
		});

	}

	export interface GetGroupQueryOutput {

		/** The underlying resource query of a resource group. Resources that match query results are part of the group. */
		GroupQuery?: GroupQuery;
	}
	export interface GetGroupQueryOutputFormProperties {
	}
	export function CreateGetGroupQueryOutputFormGroup() {
		return new FormGroup<GetGroupQueryOutputFormProperties>({
		});

	}


	/** The underlying resource query of a resource group. Resources that match query results are part of the group. */
	export interface GroupQuery {
		GroupName: string;

		/**
		 * The query that is used to define a resource group or a search for resources.
		 * Required
		 */
		ResourceQuery: ResourceQuery;
	}

	/** The underlying resource query of a resource group. Resources that match query results are part of the group. */
	export interface GroupQueryFormProperties {
		GroupName: FormControl<string | null | undefined>,
	}
	export function CreateGroupQueryFormGroup() {
		return new FormGroup<GroupQueryFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTagsOutput {
		Arn?: string | null;
		Tags?: Tags;
	}
	export interface GetTagsOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateGetTagsOutputFormGroup() {
		return new FormGroup<GetTagsOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGroupResourcesOutput {
		ResourceIdentifiers?: Array<ResourceIdentifier>;
		NextToken?: string | null;
		QueryErrors?: Array<QueryError>;
	}
	export interface ListGroupResourcesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupResourcesOutputFormGroup() {
		return new FormGroup<ListGroupResourcesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ARN of a resource, and its resource type. */
	export interface ResourceIdentifier {
		ResourceArn?: string | null;
		ResourceType?: string | null;
	}

	/** The ARN of a resource, and its resource type. */
	export interface ResourceIdentifierFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		ResourceType: FormControl<string | null | undefined>,
	}
	export function CreateResourceIdentifierFormGroup() {
		return new FormGroup<ResourceIdentifierFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A two-part error structure that can occur in <code>ListGroupResources</code> or <code>SearchResources</code> operations on CloudFormation stack-based queries. The error occurs if the CloudFormation stack on which the query is based either does not exist, or has a status that renders the stack inactive. A <code>QueryError</code> occurrence does not necessarily mean that AWS Resource Groups could not complete the operation, but the resulting group might have no member resources. */
	export interface QueryError {
		ErrorCode?: QueryErrorErrorCode | null;
		Message?: string | null;
	}

	/** A two-part error structure that can occur in <code>ListGroupResources</code> or <code>SearchResources</code> operations on CloudFormation stack-based queries. The error occurs if the CloudFormation stack on which the query is based either does not exist, or has a status that renders the stack inactive. A <code>QueryError</code> occurrence does not necessarily mean that AWS Resource Groups could not complete the operation, but the resulting group might have no member resources. */
	export interface QueryErrorFormProperties {
		ErrorCode: FormControl<QueryErrorErrorCode | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateQueryErrorFormGroup() {
		return new FormGroup<QueryErrorFormProperties>({
			ErrorCode: new FormControl<QueryErrorErrorCode | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QueryErrorErrorCode { CLOUDFORMATION_STACK_INACTIVE = 0, CLOUDFORMATION_STACK_NOT_EXISTING = 1 }


	/** A filter name and value pair that is used to obtain more specific results from a list of resources. */
	export interface ResourceFilter {
		Name: ResourceFilterName;
		Values: Array<string>;
	}

	/** A filter name and value pair that is used to obtain more specific results from a list of resources. */
	export interface ResourceFilterFormProperties {
		Name: FormControl<ResourceFilterName | null | undefined>,
	}
	export function CreateResourceFilterFormGroup() {
		return new FormGroup<ResourceFilterFormProperties>({
			Name: new FormControl<ResourceFilterName | null | undefined>(undefined),
		});

	}

	export enum ResourceFilterName { resource_type = 0 }

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface ListGroupsOutput {
		GroupIdentifiers?: Array<GroupIdentifier>;
		Groups?: Array<Group>;
		NextToken?: string | null;
	}
	export interface ListGroupsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListGroupsOutputFormGroup() {
		return new FormGroup<ListGroupsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The ARN and group name of a group. */
	export interface GroupIdentifier {
		GroupName?: string | null;
		GroupArn?: string | null;
	}

	/** The ARN and group name of a group. */
	export interface GroupIdentifierFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupArn: FormControl<string | null | undefined>,
	}
	export function CreateGroupIdentifierFormGroup() {
		return new FormGroup<GroupIdentifierFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter name and value pair that is used to obtain more specific results from a list of groups. */
	export interface GroupFilter {
		Name: GroupFilterName;
		Values: Array<string>;
	}

	/** A filter name and value pair that is used to obtain more specific results from a list of groups. */
	export interface GroupFilterFormProperties {
		Name: FormControl<GroupFilterName | null | undefined>,
	}
	export function CreateGroupFilterFormGroup() {
		return new FormGroup<GroupFilterFormProperties>({
			Name: new FormControl<GroupFilterName | null | undefined>(undefined),
		});

	}

	export enum GroupFilterName { resource_type = 0 }

	export interface SearchResourcesOutput {
		ResourceIdentifiers?: Array<ResourceIdentifier>;
		NextToken?: string | null;
		QueryErrors?: Array<QueryError>;
	}
	export interface SearchResourcesOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesOutputFormGroup() {
		return new FormGroup<SearchResourcesOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagOutput {
		Arn?: string | null;
		Tags?: Tags;
	}
	export interface TagOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTagOutputFormGroup() {
		return new FormGroup<TagOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UntagOutput {
		Arn?: string | null;
		Keys?: Array<string>;
	}
	export interface UntagOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateUntagOutputFormGroup() {
		return new FormGroup<UntagOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupOutput {

		/** A resource group. */
		Group?: Group;
	}
	export interface UpdateGroupOutputFormProperties {
	}
	export function CreateUpdateGroupOutputFormGroup() {
		return new FormGroup<UpdateGroupOutputFormProperties>({
		});

	}

	export interface UpdateGroupQueryOutput {

		/** The underlying resource query of a resource group. Resources that match query results are part of the group. */
		GroupQuery?: GroupQuery;
	}
	export interface UpdateGroupQueryOutputFormProperties {
	}
	export function CreateUpdateGroupQueryOutputFormGroup() {
		return new FormGroup<UpdateGroupQueryOutputFormProperties>({
		});

	}

	export interface CreateGroupInput {
		Name: string;
		Description?: string | null;

		/**
		 * The query that is used to define a resource group or a search for resources.
		 * Required
		 */
		ResourceQuery: ResourceQuery;
		Tags?: Tags;
	}
	export interface CreateGroupInputFormProperties {
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupInputFormGroup() {
		return new FormGroup<CreateGroupInputFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupInput {
	}
	export interface DeleteGroupInputFormProperties {
	}
	export function CreateDeleteGroupInputFormGroup() {
		return new FormGroup<DeleteGroupInputFormProperties>({
		});

	}

	export interface GetGroupInput {
	}
	export interface GetGroupInputFormProperties {
	}
	export function CreateGetGroupInputFormGroup() {
		return new FormGroup<GetGroupInputFormProperties>({
		});

	}

	export interface GetGroupQueryInput {
	}
	export interface GetGroupQueryInputFormProperties {
	}
	export function CreateGetGroupQueryInputFormGroup() {
		return new FormGroup<GetGroupQueryInputFormProperties>({
		});

	}

	export interface GetTagsInput {
	}
	export interface GetTagsInputFormProperties {
	}
	export function CreateGetTagsInputFormGroup() {
		return new FormGroup<GetTagsInputFormProperties>({
		});

	}

	export interface ListGroupResourcesInput {
		Filters?: Array<ResourceFilter>;
	}
	export interface ListGroupResourcesInputFormProperties {
	}
	export function CreateListGroupResourcesInputFormGroup() {
		return new FormGroup<ListGroupResourcesInputFormProperties>({
		});

	}

	export interface ListGroupsInput {
		Filters?: Array<GroupFilter>;
	}
	export interface ListGroupsInputFormProperties {
	}
	export function CreateListGroupsInputFormGroup() {
		return new FormGroup<ListGroupsInputFormProperties>({
		});

	}

	export enum QueryErrorCode { CLOUDFORMATION_STACK_INACTIVE = 0, CLOUDFORMATION_STACK_NOT_EXISTING = 1 }

	export interface SearchResourcesInput {

		/**
		 * The query that is used to define a resource group or a search for resources.
		 * Required
		 */
		ResourceQuery: ResourceQuery;
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface SearchResourcesInputFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesInputFormGroup() {
		return new FormGroup<SearchResourcesInputFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagInput {
		Tags: Tags;
	}
	export interface TagInputFormProperties {
	}
	export function CreateTagInputFormGroup() {
		return new FormGroup<TagInputFormProperties>({
		});

	}

	export interface UntagInput {
		Keys: Array<string>;
	}
	export interface UntagInputFormProperties {
	}
	export function CreateUntagInputFormGroup() {
		return new FormGroup<UntagInputFormProperties>({
		});

	}

	export interface UpdateGroupInput {
		Description?: string | null;
	}
	export interface UpdateGroupInputFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupInputFormGroup() {
		return new FormGroup<UpdateGroupInputFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupQueryInput {

		/**
		 * The query that is used to define a resource group or a search for resources.
		 * Required
		 */
		ResourceQuery: ResourceQuery;
	}
	export interface UpdateGroupQueryInputFormProperties {
	}
	export function CreateUpdateGroupQueryInputFormGroup() {
		return new FormGroup<UpdateGroupQueryInputFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a group with a specified name, description, and resource query.
		 * Post groups
		 * @return {CreateGroupOutput} Success
		 */
		CreateGroup(requestBody: CreateGroupPostBody): Observable<CreateGroupOutput> {
			return this.http.post<CreateGroupOutput>(this.baseUri + 'groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specified resource group. Deleting a resource group does not delete resources that are members of the group; it only deletes the group structure.
		 * Delete groups/{GroupName}
		 * @param {string} GroupName The name of the resource group to delete.
		 * @return {DeleteGroupOutput} Success
		 */
		DeleteGroup(GroupName: string): Observable<DeleteGroupOutput> {
			return this.http.delete<DeleteGroupOutput>(this.baseUri + 'groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)), {});
		}

		/**
		 * Returns information about a specified resource group.
		 * Get groups/{GroupName}
		 * @param {string} GroupName The name of the resource group.
		 * @return {GetGroupOutput} Success
		 */
		GetGroup(GroupName: string): Observable<GetGroupOutput> {
			return this.http.get<GetGroupOutput>(this.baseUri + 'groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)), {});
		}

		/**
		 * Updates an existing group with a new or changed description. You cannot update the name of a resource group.
		 * Put groups/{GroupName}
		 * @param {string} GroupName The name of the resource group for which you want to update its description.
		 * @return {UpdateGroupOutput} Success
		 */
		UpdateGroup(GroupName: string, requestBody: UpdateGroupPutBody): Observable<UpdateGroupOutput> {
			return this.http.put<UpdateGroupOutput>(this.baseUri + 'groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the resource query associated with the specified resource group.
		 * Get groups/{GroupName}/query
		 * @param {string} GroupName The name of the resource group.
		 * @return {GetGroupQueryOutput} Success
		 */
		GetGroupQuery(GroupName: string): Observable<GetGroupQueryOutput> {
			return this.http.get<GetGroupQueryOutput>(this.baseUri + 'groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '/query', {});
		}

		/**
		 * Updates the resource query of a group.
		 * Put groups/{GroupName}/query
		 * @param {string} GroupName The name of the resource group for which you want to edit the query.
		 * @return {UpdateGroupQueryOutput} Success
		 */
		UpdateGroupQuery(GroupName: string, requestBody: UpdateGroupQueryPutBody): Observable<UpdateGroupQueryOutput> {
			return this.http.put<UpdateGroupQueryOutput>(this.baseUri + 'groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '/query', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tags that are associated with a resource group, specified by an ARN.
		 * Get resources/{Arn}/tags
		 * @param {string} Arn The ARN of the resource group for which you want a list of tags. The resource must exist within the account you are using.
		 * @return {GetTagsOutput} Success
		 */
		GetTags(Arn: string): Observable<GetTagsOutput> {
			return this.http.get<GetTagsOutput>(this.baseUri + 'resources/' + (Arn == null ? '' : encodeURIComponent(Arn)) + '/tags', {});
		}

		/**
		 * Adds tags to a resource group with the specified ARN. Existing tags on a resource group are not changed if they are not specified in the request parameters.
		 * Put resources/{Arn}/tags
		 * @param {string} Arn The ARN of the resource to which to add tags.
		 * @return {TagOutput} Success
		 */
		Tag(Arn: string, requestBody: TagPutBody): Observable<TagOutput> {
			return this.http.put<TagOutput>(this.baseUri + 'resources/' + (Arn == null ? '' : encodeURIComponent(Arn)) + '/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes specified tags from a specified resource.
		 * Patch resources/{Arn}/tags
		 * @param {string} Arn The ARN of the resource from which to remove tags.
		 * @return {UntagOutput} Success
		 */
		Untag(Arn: string, requestBody: UntagPatchBody): Observable<UntagOutput> {
			return this.http.patch<UntagOutput>(this.baseUri + 'resources/' + (Arn == null ? '' : encodeURIComponent(Arn)) + '/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of ARNs of resources that are members of a specified resource group.
		 * Post groups/{GroupName}/resource-identifiers-list
		 * @param {string} GroupName The name of the resource group.
		 * @param {number} maxResults The maximum number of group member ARNs that are returned in a single call by ListGroupResources, in paginated output. By default, this number is 50.
		 * @param {string} nextToken The NextToken value that is returned in a paginated ListGroupResources request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupResourcesOutput} Success
		 */
		ListGroupResources(GroupName: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupResourcesPostBody): Observable<ListGroupResourcesOutput> {
			return this.http.post<ListGroupResourcesOutput>(this.baseUri + 'groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '/resource-identifiers-list&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of existing resource groups in your account.
		 * Post groups-list
		 * @param {number} maxResults The maximum number of resource group results that are returned by ListGroups in paginated output. By default, this number is 50.
		 * @param {string} nextToken The NextToken value that is returned in a paginated <code>ListGroups</code> request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListGroupsOutput} Success
		 */
		ListGroups(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListGroupsPostBody): Observable<ListGroupsOutput> {
			return this.http.post<ListGroupsOutput>(this.baseUri + 'groups-list?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of AWS resource identifiers that matches a specified query. The query uses the same format as a resource query in a CreateGroup or UpdateGroupQuery operation.
		 * Post resources/search
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchResourcesOutput} Success
		 */
		SearchResources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchResourcesPostBody): Observable<SearchResourcesOutput> {
			return this.http.post<SearchResourcesOutput>(this.baseUri + 'resources/search?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateGroupPostBody {

		/**
		 * The name of the group, which is the identifier of the group in other operations. A resource group name cannot be updated after it is created. A resource group name can have a maximum of 128 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name must be unique within your account.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\.-]+
		 */
		Name: string;

		/**
		 * The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores, punctuation, and spaces.
		 * Max length: 512
		 * Pattern: [\sa-zA-Z0-9_\.-]*
		 */
		Description?: string | null;

		/**
		 * The query that is used to define a resource group or a search for resources.
		 * Required
		 */
		ResourceQuery: CreateGroupPostBodyResourceQuery;

		/** The tags to add to the group. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
		Tags?: {[id: string]: string };
	}
	export interface CreateGroupPostBodyFormProperties {

		/**
		 * The name of the group, which is the identifier of the group in other operations. A resource group name cannot be updated after it is created. A resource group name can have a maximum of 128 characters, including letters, numbers, hyphens, dots, and underscores. The name cannot start with <code>AWS</code> or <code>aws</code>; these are reserved. A resource group name must be unique within your account.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 * Pattern: [a-zA-Z0-9_\.-]+
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores, punctuation, and spaces.
		 * Max length: 512
		 * Pattern: [\sa-zA-Z0-9_\.-]*
		 */
		Description: FormControl<string | null | undefined>,

		/** The tags to add to the group. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateGroupPostBodyFormGroup() {
		return new FormGroup<CreateGroupPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateGroupPostBodyResourceQuery {
		Type?: ResourceQueryType | null;
		Query?: string | null;
	}
	export interface CreateGroupPostBodyResourceQueryFormProperties {
		Type: FormControl<ResourceQueryType | null | undefined>,
		Query: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupPostBodyResourceQueryFormGroup() {
		return new FormGroup<CreateGroupPostBodyResourceQueryFormProperties>({
			Type: new FormControl<ResourceQueryType | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupPutBody {

		/**
		 * The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores, punctuation, and spaces.
		 * Max length: 512
		 * Pattern: [\sa-zA-Z0-9_\.-]*
		 */
		Description?: string | null;
	}
	export interface UpdateGroupPutBodyFormProperties {

		/**
		 * The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores, punctuation, and spaces.
		 * Max length: 512
		 * Pattern: [\sa-zA-Z0-9_\.-]*
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupPutBodyFormGroup() {
		return new FormGroup<UpdateGroupPutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupQueryPutBody {

		/**
		 * The query that is used to define a resource group or a search for resources.
		 * Required
		 */
		ResourceQuery: UpdateGroupQueryPutBodyResourceQuery;
	}
	export interface UpdateGroupQueryPutBodyFormProperties {
	}
	export function CreateUpdateGroupQueryPutBodyFormGroup() {
		return new FormGroup<UpdateGroupQueryPutBodyFormProperties>({
		});

	}

	export interface UpdateGroupQueryPutBodyResourceQuery {
		Type?: ResourceQueryType | null;
		Query?: string | null;
	}
	export interface UpdateGroupQueryPutBodyResourceQueryFormProperties {
		Type: FormControl<ResourceQueryType | null | undefined>,
		Query: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupQueryPutBodyResourceQueryFormGroup() {
		return new FormGroup<UpdateGroupQueryPutBodyResourceQueryFormProperties>({
			Type: new FormControl<ResourceQueryType | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagPutBody {

		/**
		 * The tags to add to the specified resource. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagPutBodyFormProperties {

		/**
		 * The tags to add to the specified resource. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagPutBodyFormGroup() {
		return new FormGroup<TagPutBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UntagPatchBody {

		/**
		 * The keys of the tags to be removed.
		 * Required
		 */
		Keys: Array<string>;
	}
	export interface UntagPatchBodyFormProperties {
	}
	export function CreateUntagPatchBodyFormGroup() {
		return new FormGroup<UntagPatchBodyFormProperties>({
		});

	}

	export interface ListGroupResourcesPostBody {

		/** <p>Filters, formatted as ResourceFilter objects, that you want to apply to a ListGroupResources operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter resources by their type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.</p> </li> </ul> */
		Filters?: Array<ResourceFilter>;
	}
	export interface ListGroupResourcesPostBodyFormProperties {
	}
	export function CreateListGroupResourcesPostBodyFormGroup() {
		return new FormGroup<ListGroupResourcesPostBodyFormProperties>({
		});

	}

	export interface ListGroupsPostBody {

		/** <p>Filters, formatted as GroupFilter objects, that you want to apply to a ListGroups operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter groups by resource type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.</p> </li> </ul> */
		Filters?: Array<GroupFilter>;
	}
	export interface ListGroupsPostBodyFormProperties {
	}
	export function CreateListGroupsPostBodyFormGroup() {
		return new FormGroup<ListGroupsPostBodyFormProperties>({
		});

	}

	export interface SearchResourcesPostBody {

		/**
		 * The query that is used to define a resource group or a search for resources.
		 * Required
		 */
		ResourceQuery: SearchResourcesPostBodyResourceQuery;

		/**
		 * The maximum number of group member ARNs returned by <code>SearchResources</code> in paginated output. By default, this number is 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/**
		 * The NextToken value that is returned in a paginated <code>SearchResources</code> request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.
		 * Max length: 8192
		 * Min length: 0
		 * Pattern: ^[a-zA-Z0-9+/]*={0,2}$
		 */
		NextToken?: string | null;
	}
	export interface SearchResourcesPostBodyFormProperties {

		/**
		 * The maximum number of group member ARNs returned by <code>SearchResources</code> in paginated output. By default, this number is 50.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The NextToken value that is returned in a paginated <code>SearchResources</code> request. To get the next page of results, run the call again, add the NextToken parameter, and specify the NextToken value.
		 * Max length: 8192
		 * Min length: 0
		 * Pattern: ^[a-zA-Z0-9+/]*={0,2}$
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesPostBodyFormGroup() {
		return new FormGroup<SearchResourcesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchResourcesPostBodyResourceQuery {
		Type?: ResourceQueryType | null;
		Query?: string | null;
	}
	export interface SearchResourcesPostBodyResourceQueryFormProperties {
		Type: FormControl<ResourceQueryType | null | undefined>,
		Query: FormControl<string | null | undefined>,
	}
	export function CreateSearchResourcesPostBodyResourceQueryFormGroup() {
		return new FormGroup<SearchResourcesPostBodyResourceQueryFormProperties>({
			Type: new FormControl<ResourceQueryType | null | undefined>(undefined),
			Query: new FormControl<string | null | undefined>(undefined),
		});

	}

}

