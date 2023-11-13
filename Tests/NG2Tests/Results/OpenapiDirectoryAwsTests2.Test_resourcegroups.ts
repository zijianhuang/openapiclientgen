import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateGroupOutput {

		/** A resource group. */
		Group?: Group | null;

		/** The query that is used to define a resource group or a search for resources. */
		ResourceQuery?: ResourceQuery | null;
		Tags?: Tags | null;
	}


	/** A resource group. */
	export interface Group {
		GroupArn: string;
		Name: string;
		Description?: string | null;
	}


	/** The query that is used to define a resource group or a search for resources. */
	export interface ResourceQuery {
		Type: ResourceQueryType;
		Query: string;
	}

	export enum ResourceQueryType { TAG_FILTERS_1_0 = 0, CLOUDFORMATION_STACK_1_0 = 1 }

	export interface Tags {
	}

	export enum QueryType { TAG_FILTERS_1_0 = 0, CLOUDFORMATION_STACK_1_0 = 1 }

	export interface BadRequestException {
	}

	export interface ForbiddenException {
	}

	export interface MethodNotAllowedException {
	}

	export interface TooManyRequestsException {
	}

	export interface InternalServerErrorException {
	}

	export interface DeleteGroupOutput {

		/** A resource group. */
		Group?: Group | null;
	}

	export interface NotFoundException {
	}

	export interface GetGroupOutput {

		/** A resource group. */
		Group?: Group | null;
	}

	export interface GetGroupQueryOutput {

		/** The underlying resource query of a resource group. Resources that match query results are part of the group. */
		GroupQuery?: GroupQuery | null;
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

	export interface GetTagsOutput {
		Arn?: string | null;
		Tags?: Tags | null;
	}

	export interface ListGroupResourcesOutput {
		ResourceIdentifiers?: Array<ResourceIdentifier> | null;
		NextToken?: string | null;
		QueryErrors?: Array<QueryError> | null;
	}


	/** The ARN of a resource, and its resource type. */
	export interface ResourceIdentifier {
		ResourceArn?: string | null;
		ResourceType?: string | null;
	}


	/** A two-part error structure that can occur in <code>ListGroupResources</code> or <code>SearchResources</code> operations on CloudFormation stack-based queries. The error occurs if the CloudFormation stack on which the query is based either does not exist, or has a status that renders the stack inactive. A <code>QueryError</code> occurrence does not necessarily mean that AWS Resource Groups could not complete the operation, but the resulting group might have no member resources. */
	export interface QueryError {
		ErrorCode?: QueryErrorErrorCode | null;
		Message?: string | null;
	}

	export enum QueryErrorErrorCode { CLOUDFORMATION_STACK_INACTIVE = 0, CLOUDFORMATION_STACK_NOT_EXISTING = 1 }


	/** A filter name and value pair that is used to obtain more specific results from a list of resources. */
	export interface ResourceFilter {
		Name: ResourceFilterName;
		Values: Array<string>;
	}

	export enum ResourceFilterName { resource_type = 0 }

	export interface UnauthorizedException {
	}

	export interface ListGroupsOutput {
		GroupIdentifiers?: Array<GroupIdentifier> | null;
		Groups?: Array<Group> | null;
		NextToken?: string | null;
	}


	/** The ARN and group name of a group. */
	export interface GroupIdentifier {
		GroupName?: string | null;
		GroupArn?: string | null;
	}


	/** A filter name and value pair that is used to obtain more specific results from a list of groups. */
	export interface GroupFilter {
		Name: GroupFilterName;
		Values: Array<string>;
	}

	export enum GroupFilterName { resource_type = 0 }

	export interface SearchResourcesOutput {
		ResourceIdentifiers?: Array<ResourceIdentifier> | null;
		NextToken?: string | null;
		QueryErrors?: Array<QueryError> | null;
	}

	export interface TagOutput {
		Arn?: string | null;
		Tags?: Tags | null;
	}

	export interface UntagOutput {
		Arn?: string | null;
		Keys?: Array<string> | null;
	}

	export interface UpdateGroupOutput {

		/** A resource group. */
		Group?: Group | null;
	}

	export interface UpdateGroupQueryOutput {

		/** The underlying resource query of a resource group. Resources that match query results are part of the group. */
		GroupQuery?: GroupQuery | null;
	}

	export interface CreateGroupInput {
		Name: string;
		Description?: string | null;

		/**
		 * The query that is used to define a resource group or a search for resources.
		 * Required
		 */
		ResourceQuery: ResourceQuery;
		Tags?: Tags | null;
	}

	export interface DeleteGroupInput {
	}

	export interface GetGroupInput {
	}

	export interface GetGroupQueryInput {
	}

	export interface GetTagsInput {
	}

	export interface ListGroupResourcesInput {
		Filters?: Array<ResourceFilter> | null;
	}

	export interface ListGroupsInput {
		Filters?: Array<GroupFilter> | null;
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

	export interface TagInput {
		Tags: Tags;
	}

	export interface UntagInput {
		Keys: Array<string>;
	}

	export interface UpdateGroupInput {
		Description?: string | null;
	}

	export interface UpdateGroupQueryInput {

		/**
		 * The query that is used to define a resource group or a search for resources.
		 * Required
		 */
		ResourceQuery: ResourceQuery;
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
		Tags?: {[id: string]: string } | null;
	}

	export interface CreateGroupPostBodyResourceQuery {
		Type?: ResourceQueryType | null;
		Query?: string | null;
	}

	export interface UpdateGroupPutBody {

		/**
		 * The description of the resource group. Descriptions can have a maximum of 511 characters, including letters, numbers, hyphens, underscores, punctuation, and spaces.
		 * Max length: 512
		 * Pattern: [\sa-zA-Z0-9_\.-]*
		 */
		Description?: string | null;
	}

	export interface UpdateGroupQueryPutBody {

		/**
		 * The query that is used to define a resource group or a search for resources.
		 * Required
		 */
		ResourceQuery: UpdateGroupQueryPutBodyResourceQuery;
	}

	export interface UpdateGroupQueryPutBodyResourceQuery {
		Type?: ResourceQueryType | null;
		Query?: string | null;
	}

	export interface TagPutBody {

		/**
		 * The tags to add to the specified resource. A tag is a string-to-string map of key-value pairs. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
		 * Required
		 */
		Tags: {[id: string]: string };
	}

	export interface UntagPatchBody {

		/**
		 * The keys of the tags to be removed.
		 * Required
		 */
		Keys: Array<string>;
	}

	export interface ListGroupResourcesPostBody {

		/** <p>Filters, formatted as ResourceFilter objects, that you want to apply to a ListGroupResources operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter resources by their type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.</p> </li> </ul> */
		Filters?: Array<ResourceFilter> | null;
	}

	export interface ListGroupsPostBody {

		/** <p>Filters, formatted as GroupFilter objects, that you want to apply to a ListGroups operation.</p> <ul> <li> <p> <code>resource-type</code> - Filter groups by resource type. Specify up to five resource types in the format AWS::ServiceCode::ResourceType. For example, AWS::EC2::Instance, or AWS::S3::Bucket.</p> </li> </ul> */
		Filters?: Array<GroupFilter> | null;
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

	export interface SearchResourcesPostBodyResourceQuery {
		Type?: ResourceQueryType | null;
		Query?: string | null;
	}

}

