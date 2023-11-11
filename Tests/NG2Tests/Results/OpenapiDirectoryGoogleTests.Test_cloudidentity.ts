import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * An EntityKey uniquely identifies an Entity. Namespaces are used to provide
	 * isolation for IDs. A single ID can be reused across namespaces but the
	 * combination of a namespace and an ID must be unique.
	 */
	export interface EntityKey {

		/**
		 * The ID of the entity within the given namespace. The ID must be unique
		 * within its namespace.
		 */
		id?: string | null;

		/**
		 * Namespaces provide isolation for IDs, so an ID only needs to be unique
		 * within its namespace.
		 * Namespaces are currently only created as part of IdentitySource creation
		 * from Admin Console. A namespace `"identitysources/{identity_source_id}"` is
		 * created corresponding to every Identity Source `identity_source_id`.
		 */
		namespace?: string | null;
	}


	/** Resource representing a Group. */
	export interface Group {

		/**
		 * Output only. The time when the Group was created.
		 * Output only.
		 */
		createTime?: string | null;

		/**
		 * An extended description to help users determine the purpose of a Group. For
		 * example, you can include information about who should join the Group, the
		 * types of messages to send to the Group, links to FAQs about the Group, or
		 * related Groups. Maximum length is 4,096 characters.
		 */
		description?: string | null;

		/** The Group's display name. */
		displayName?: string | null;

		/**
		 * An EntityKey uniquely identifies an Entity. Namespaces are used to provide
		 * isolation for IDs. A single ID can be reused across namespaces but the
		 * combination of a namespace and an ID must be unique.
		 */
		groupKey?: EntityKey | null;

		/**
		 * Required. `Required`. Labels for Group resource.
		 * For creating Groups under a namespace, set label key to
		 * 'labels/system/groups/external' and label value as empty.
		 */
		labels?: {[id: string]: string } | null;

		/**
		 * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
		 * Group in the format: `groups/{group_id}`, where group_id is the unique ID
		 * assigned to the Group.
		 * Must be left blank while creating a Group.
		 */
		name?: string | null;

		/**
		 * Required. Immutable. The entity under which this Group resides in Cloud Identity resource
		 * hierarchy. Must be set when creating a Group, read-only afterwards.
		 * Currently allowed types: `identitysources`.
		 */
		parent?: string | null;

		/**
		 * Output only. The time when the Group was last updated.
		 * Output only.
		 */
		updateTime?: string | null;
	}


	/** Response message for ListGroups operation. */
	export interface ListGroupsResponse {

		/**
		 * Groups returned in response to list request.
		 * The results are not sorted.
		 */
		groups?: Array<Group> | null;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results available for listing.
		 */
		nextPageToken?: string | null;
	}

	export interface ListMembershipsResponse {

		/** List of Memberships. */
		memberships?: Array<Membership> | null;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results available for listing.
		 */
		nextPageToken?: string | null;
	}


	/** Resource representing a Membership within a Group */
	export interface Membership {

		/** Output only. Creation timestamp of the Membership. Output only. */
		createTime?: string | null;

		/**
		 * Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
		 * Membership in the format: `groups/{group_id}/memberships/{member_id}`,
		 * where group_id is the unique ID assigned to the Group to which Membership
		 * belongs to, and member_id is the unique ID assigned to the member
		 * Must be left blank while creating a Membership.
		 */
		name?: string | null;

		/**
		 * An EntityKey uniquely identifies an Entity. Namespaces are used to provide
		 * isolation for IDs. A single ID can be reused across namespaces but the
		 * combination of a namespace and an ID must be unique.
		 */
		preferredMemberKey?: EntityKey | null;

		/**
		 * Roles for a member within the Group.
		 * Currently supported MembershipRoles: `"MEMBER"`.
		 */
		roles?: Array<MembershipRole> | null;

		/** Output only. Last updated timestamp of the Membership. Output only. */
		updateTime?: string | null;
	}


	/** Resource representing a role within a Membership. */
	export interface MembershipRole {

		/**
		 * MembershipRole in string format.
		 * Currently supported MembershipRoles: `"MEMBER"`.
		 */
		name?: string | null;
	}

	export interface LookupGroupNameResponse {

		/**
		 * [Resource name](https://cloud.google.com/apis/design/resource_names) of the
		 * Group in the format: `groups/{group_id}`, where `group_id` is the unique ID
		 * assigned to the Group.
		 */
		name?: string | null;
	}

	export interface LookupMembershipNameResponse {

		/**
		 * [Resource name](https://cloud.google.com/apis/design/resource_names) of the
		 * Membership being looked up.
		 * Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is
		 * the unique ID assigned to the Group to which Membership belongs to, and
		 * `member_id` is the unique ID assigned to the member.
		 */
		name?: string | null;
	}


	/**
	 * This resource represents a long-running operation that is the result of a
	 * network API call.
	 */
	export interface Operation {

		/**
		 * If the value is `false`, it means the operation is still in progress.
		 * If `true`, the operation is completed, and either `error` or `response` is
		 * available.
		 */
		done?: boolean | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		error?: Status | null;

		/**
		 * Service-specific metadata associated with the operation.  It typically
		 * contains progress information and common metadata such as create time.
		 * Some services might not provide such metadata.  Any method that returns a
		 * long-running operation should document the metadata type, if any.
		 */
		metadata?: {[id: string]: any } | null;

		/**
		 * The server-assigned name, which is only unique within the same service that
		 * originally returns it. If you use the default HTTP mapping, the
		 * `name` should be a resource name ending with `operations/{unique_id}`.
		 */
		name?: string | null;

		/**
		 * The normal response of the operation in case of success.  If the original
		 * method returns no data on success, such as `Delete`, the response is
		 * `google.protobuf.Empty`.  If the original method is standard
		 * `Get`/`Create`/`Update`, the response should be the resource.  For other
		 * methods, the response should have the type `XxxResponse`, where `Xxx`
		 * is the original method name.  For example, if the original method name
		 * is `TakeSnapshot()`, the inferred response type is
		 * `TakeSnapshotResponse`.
		 */
		response?: {[id: string]: any } | null;
	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string> | null;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	export interface SearchGroupsResponse {

		/** List of Groups satisfying the search query. */
		groups?: Array<Group> | null;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results available for specified query.
		 */
		nextPageToken?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists groups within a customer or a domain.
		 * Get v1/groups
		 * @param {number} pageSize The default page size is 200 (max 1000) for the BASIC view, and 50
		 * (max 500) for the FULL view.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @param {string} parent Required. Customer ID to list all groups from.
		 * @param {Cloudidentity_groups_listView} view Group resource view to be returned. Defaults to [View.BASIC]().
		 * @return {void} Successful response
		 */
		Cloudidentity_groups_list(pageSize: number, pageToken: string, parent: string, view: Cloudidentity_groups_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/groups?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&parent=' + (parent == null ? '' : encodeURIComponent(parent)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Group.
		 * Post v1/groups
		 * @return {void} Successful response
		 */
		Cloudidentity_groups_create(requestBody: Group): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Looks up [resource
		 * name](https://cloud.google.com/apis/design/resource_names) of a Group by
		 * its EntityKey.
		 * Get v1/groups:lookup
		 * @param {string} groupKey_id The ID of the entity within the given namespace. The ID must be unique
		 * within its namespace.
		 * @param {string} groupKey_namespace Namespaces provide isolation for IDs, so an ID only needs to be unique
		 * within its namespace.
		 * Namespaces are currently only created as part of IdentitySource creation
		 * from Admin Console. A namespace `"identitysources/{identity_source_id}"` is
		 * created corresponding to every Identity Source `identity_source_id`.
		 * @return {void} Successful response
		 */
		Cloudidentity_groups_lookup(groupKey_id: string, groupKey_namespace: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/groups:lookup?groupKey_id=' + (groupKey_id == null ? '' : encodeURIComponent(groupKey_id)) + '&groupKey_namespace=' + (groupKey_namespace == null ? '' : encodeURIComponent(groupKey_namespace)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Searches for Groups.
		 * Get v1/groups:search
		 * @param {number} pageSize The default page size is 200 (max 1000) for the BASIC view, and 50
		 * (max 500) for the FULL view.
		 * @param {string} pageToken The next_page_token value returned from a previous search request, if any.
		 * @param {string} query Required. `Required`. Query string for performing search on groups. Users can search
		 * on parent and label attributes of groups.
		 * EXACT match ('==') is supported on parent, and CONTAINS match ('in') is
		 * supported on labels.
		 * @param {Cloudidentity_groups_listView} view Group resource view to be returned. Defaults to [View.BASIC]().
		 * @return {void} Successful response
		 */
		Cloudidentity_groups_search(pageSize: number, pageToken: string, query: string, view: Cloudidentity_groups_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/groups:search?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a Membership.
		 * Delete v1/{name}
		 * @param {string} name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
		 * Membership to be deleted.
		 * Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is
		 * the unique ID assigned to the Group to which Membership belongs to, and
		 * member_id is the unique ID assigned to the member.
		 * @return {void} Successful response
		 */
		Cloudidentity_groups_memberships_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves a Membership.
		 * Get v1/{name}
		 * @param {string} name Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
		 * Membership to be retrieved.
		 * Format: `groups/{group_id}/memberships/{member_id}`, where `group_id` is
		 * the unique id assigned to the Group to which Membership belongs to, and
		 * `member_id` is the unique ID assigned to the member.
		 * @return {void} Successful response
		 */
		Cloudidentity_groups_memberships_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Group.
		 * Patch v1/{name}
		 * @param {string} name Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
		 * Group in the format: `groups/{group_id}`, where group_id is the unique ID
		 * assigned to the Group.
		 * Must be left blank while creating a Group.
		 * @param {string} updateMask Required. Editable fields: `display_name`, `description`
		 * @return {void} Successful response
		 */
		Cloudidentity_groups_patch(name: string, updateMask: string, requestBody: Group): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists Memberships within a Group.
		 * Get v1/{parent}/memberships
		 * @param {string} parent Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
		 * Group to list Memberships within.
		 * Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to
		 * the Group.
		 * @param {number} pageSize The default page size is 200 (max 1000) for the BASIC view, and 50
		 * (max 500) for the FULL view.
		 * @param {string} pageToken The next_page_token value returned from a previous list request, if any.
		 * @param {Cloudidentity_groups_listView} view Membership resource view to be returned. Defaults to View.BASIC.
		 * @return {void} Successful response
		 */
		Cloudidentity_groups_memberships_list(parent: string, pageSize: number, pageToken: string, view: Cloudidentity_groups_listView): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Membership.
		 * Post v1/{parent}/memberships
		 * @param {string} parent Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
		 * Group to create Membership within. Format: `groups/{group_id}`, where
		 * `group_id` is the unique ID assigned to the Group.
		 * @return {void} Successful response
		 */
		Cloudidentity_groups_memberships_create(parent: string, requestBody: Membership): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Looks up [resource
		 * name](https://cloud.google.com/apis/design/resource_names) of a Membership
		 * within a Group by member's EntityKey.
		 * Get v1/{parent}/memberships:lookup
		 * @param {string} parent Required. [Resource name](https://cloud.google.com/apis/design/resource_names) of the
		 * Group to lookup Membership within.
		 * Format: `groups/{group_id}`, where `group_id` is the unique ID assigned to
		 * the Group.
		 * @param {string} memberKey_id The ID of the entity within the given namespace. The ID must be unique
		 * within its namespace.
		 * @param {string} memberKey_namespace Namespaces provide isolation for IDs, so an ID only needs to be unique
		 * within its namespace.
		 * Namespaces are currently only created as part of IdentitySource creation
		 * from Admin Console. A namespace `"identitysources/{identity_source_id}"` is
		 * created corresponding to every Identity Source `identity_source_id`.
		 * @return {void} Successful response
		 */
		Cloudidentity_groups_memberships_lookup(parent: string, memberKey_id: string, memberKey_namespace: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/memberships:lookup&memberKey_id=' + (memberKey_id == null ? '' : encodeURIComponent(memberKey_id)) + '&memberKey_namespace=' + (memberKey_namespace == null ? '' : encodeURIComponent(memberKey_namespace)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Cloudidentity_groups_listView { VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

}

