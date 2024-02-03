import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The details of the error. */
	export interface ErrorDetails {

		/** One of a server-defined set of error codes. */
		code?: string | null;

		/** A human-readable representation of the error. */
		message?: string | null;

		/** (Optional) The target of the error. */
		target?: string | null;
	}

	/** The details of the error. */
	export interface ErrorDetailsFormProperties {

		/** One of a server-defined set of error codes. */
		code: FormControl<string | null | undefined>,

		/** A human-readable representation of the error. */
		message: FormControl<string | null | undefined>,

		/** (Optional) The target of the error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error object. */
	export interface ErrorResponse {

		/** The details of the error. */
		error?: ErrorDetails;
	}

	/** The error object. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** The management group details. */
	export interface ManagementGroup {

		/** The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000 */
		id?: string | null;

		/** The name of the management group. E.g. 20000000-0000-0000-0000-000000000000 */
		name?: string | null;

		/** The generic properties of a management group. */
		properties?: ManagementGroupProperties;

		/** The type of the resource. E.g. /providers/Microsoft.Management/managementGroups */
		type?: string | null;
	}

	/** The management group details. */
	export interface ManagementGroupFormProperties {

		/** The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000 */
		id: FormControl<string | null | undefined>,

		/** The name of the management group. E.g. 20000000-0000-0000-0000-000000000000 */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. E.g. /providers/Microsoft.Management/managementGroups */
		type: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupFormGroup() {
		return new FormGroup<ManagementGroupFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The generic properties of a management group. */
	export interface ManagementGroupProperties {

		/** The details properties of a management group. */
		details?: ManagementGroupDetailsProperties;

		/** The friendly name of the management group. */
		displayName?: string | null;

		/** The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000 */
		tenantId?: string | null;
	}

	/** The generic properties of a management group. */
	export interface ManagementGroupPropertiesFormProperties {

		/** The friendly name of the management group. */
		displayName: FormControl<string | null | undefined>,

		/** The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000 */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupPropertiesFormGroup() {
		return new FormGroup<ManagementGroupPropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details properties of a management group. */
	export interface ManagementGroupDetailsProperties {

		/** (Optional) The type of the management group. */
		managementGroupType?: ManagementGroupDetailsPropertiesManagementGroupType | null;

		/** (Optional) The ID of the parent management group. */
		parent?: ParentGroupInfo;

		/** The identity of the principal or process that updated the object. */
		updatedBy?: string | null;

		/** The date and time when this object was last updated. */
		updatedTime?: Date | null;

		/** The version number of the object. */
		version?: string | null;
	}

	/** The details properties of a management group. */
	export interface ManagementGroupDetailsPropertiesFormProperties {

		/** (Optional) The type of the management group. */
		managementGroupType: FormControl<ManagementGroupDetailsPropertiesManagementGroupType | null | undefined>,

		/** The identity of the principal or process that updated the object. */
		updatedBy: FormControl<string | null | undefined>,

		/** The date and time when this object was last updated. */
		updatedTime: FormControl<Date | null | undefined>,

		/** The version number of the object. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupDetailsPropertiesFormGroup() {
		return new FormGroup<ManagementGroupDetailsPropertiesFormProperties>({
			managementGroupType: new FormControl<ManagementGroupDetailsPropertiesManagementGroupType | null | undefined>(undefined),
			updatedBy: new FormControl<string | null | undefined>(undefined),
			updatedTime: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ManagementGroupDetailsPropertiesManagementGroupType { Enrollment = 'Enrollment', Department = 'Department', Account = 'Account', Subscription = 'Subscription' }


	/** The unique identifier (ID) of a management group. */
	export interface ManagementGroupChildInfo {

		/** The ID of the child resource (management group or subscription). E.g. /providers/Microsoft.Management/managementGroups/40000000-0000-0000-0000-000000000000 */
		childId?: string | null;

		/** (Optional) The type of the management group. */
		childType?: ManagementGroupDetailsPropertiesManagementGroupType | null;

		/** The friendly name of the child resource. */
		displayName?: string | null;

		/** (Optional) The AAD Tenant ID associated with the child resource. */
		tenantId?: string | null;
	}

	/** The unique identifier (ID) of a management group. */
	export interface ManagementGroupChildInfoFormProperties {

		/** The ID of the child resource (management group or subscription). E.g. /providers/Microsoft.Management/managementGroups/40000000-0000-0000-0000-000000000000 */
		childId: FormControl<string | null | undefined>,

		/** (Optional) The type of the management group. */
		childType: FormControl<ManagementGroupDetailsPropertiesManagementGroupType | null | undefined>,

		/** The friendly name of the child resource. */
		displayName: FormControl<string | null | undefined>,

		/** (Optional) The AAD Tenant ID associated with the child resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupChildInfoFormGroup() {
		return new FormGroup<ManagementGroupChildInfoFormProperties>({
			childId: new FormControl<string | null | undefined>(undefined),
			childType: new FormControl<ManagementGroupDetailsPropertiesManagementGroupType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The management group. */
	export interface ManagementGroupInfo {

		/** The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000 */
		id?: string | null;

		/** The name of the management group. E.g. 20000000-0000-0000-0000-000000000000 */
		name?: string | null;

		/** The generic properties of a management group. */
		properties?: ManagementGroupInfoProperties;

		/** The type of the resource. E.g. /providers/Microsoft.Management/managementGroups */
		type?: string | null;
	}

	/** The management group. */
	export interface ManagementGroupInfoFormProperties {

		/** The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000 */
		id: FormControl<string | null | undefined>,

		/** The name of the management group. E.g. 20000000-0000-0000-0000-000000000000 */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. E.g. /providers/Microsoft.Management/managementGroups */
		type: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupInfoFormGroup() {
		return new FormGroup<ManagementGroupInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The generic properties of a management group. */
	export interface ManagementGroupInfoProperties {

		/** The friendly name of the management group. */
		displayName?: string | null;

		/** The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000 */
		tenantId?: string | null;
	}

	/** The generic properties of a management group. */
	export interface ManagementGroupInfoPropertiesFormProperties {

		/** The friendly name of the management group. */
		displayName: FormControl<string | null | undefined>,

		/** The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000 */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupInfoPropertiesFormGroup() {
		return new FormGroup<ManagementGroupInfoPropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of listing management groups. */
	export interface ManagementGroupListResult {

		/** The URL to the next page of results. */
		nextLink?: string | null;

		/** The list of management groups. */
		value?: Array<ManagementGroupInfo>;
	}

	/** The result of listing management groups. */
	export interface ManagementGroupListResultFormProperties {

		/** The URL to the next page of results. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupListResultFormGroup() {
		return new FormGroup<ManagementGroupListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The generic properties of a management group. */
	export interface ManagementGroupPropertiesWithChildren {

		/** The list of children. */
		children?: Array<ManagementGroupChildInfo>;

		/** The details properties of a management group. */
		details?: ManagementGroupDetailsProperties;

		/** The friendly name of the management group. */
		displayName?: string | null;

		/** The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000 */
		tenantId?: string | null;
	}

	/** The generic properties of a management group. */
	export interface ManagementGroupPropertiesWithChildrenFormProperties {

		/** The friendly name of the management group. */
		displayName: FormControl<string | null | undefined>,

		/** The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000 */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupPropertiesWithChildrenFormGroup() {
		return new FormGroup<ManagementGroupPropertiesWithChildrenFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The generic properties of a management group. */
	export interface ManagementGroupPropertiesWithHierarchy {

		/** The list of children. */
		children?: Array<ManagementGroupRecursiveChildInfo>;

		/** The details properties of a management group. */
		details?: ManagementGroupDetailsProperties;

		/** The friendly name of the management group. */
		displayName?: string | null;

		/** The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000 */
		tenantId?: string | null;
	}

	/** The generic properties of a management group. */
	export interface ManagementGroupPropertiesWithHierarchyFormProperties {

		/** The friendly name of the management group. */
		displayName: FormControl<string | null | undefined>,

		/** The AAD Tenant ID associated with the management group. E.g. 10000000-0000-0000-0000-000000000000 */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupPropertiesWithHierarchyFormGroup() {
		return new FormGroup<ManagementGroupPropertiesWithHierarchyFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The unique identifier (ID) of a management group. */
	export interface ManagementGroupRecursiveChildInfo {

		/** The ID of the child resource (management group or subscription). E.g. /providers/Microsoft.Management/managementGroups/40000000-0000-0000-0000-000000000000 */
		childId?: string | null;

		/** (Optional) The type of the management group. */
		childType?: ManagementGroupDetailsPropertiesManagementGroupType | null;

		/** The list of children. */
		children?: Array<ManagementGroupRecursiveChildInfo>;

		/** The friendly name of the child resource. */
		displayName?: string | null;

		/** (Optional) The AAD Tenant ID associated with the child resource. */
		tenantId?: string | null;
	}

	/** The unique identifier (ID) of a management group. */
	export interface ManagementGroupRecursiveChildInfoFormProperties {

		/** The ID of the child resource (management group or subscription). E.g. /providers/Microsoft.Management/managementGroups/40000000-0000-0000-0000-000000000000 */
		childId: FormControl<string | null | undefined>,

		/** (Optional) The type of the management group. */
		childType: FormControl<ManagementGroupDetailsPropertiesManagementGroupType | null | undefined>,

		/** The friendly name of the child resource. */
		displayName: FormControl<string | null | undefined>,

		/** (Optional) The AAD Tenant ID associated with the child resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupRecursiveChildInfoFormGroup() {
		return new FormGroup<ManagementGroupRecursiveChildInfoFormProperties>({
			childId: new FormControl<string | null | undefined>(undefined),
			childType: new FormControl<ManagementGroupDetailsPropertiesManagementGroupType | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Optional) The type of the management group. */
	export enum ManagementGroupType { Enrollment = 'Enrollment', Department = 'Department', Account = 'Account', Subscription = 'Subscription' }


	/** The management group details. */
	export interface ManagementGroupWithChildren {

		/** The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000 */
		id?: string | null;

		/** The name of the management group. E.g. 20000000-0000-0000-0000-000000000000 */
		name?: string | null;

		/** The generic properties of a management group. */
		properties?: ManagementGroupPropertiesWithChildren;

		/** The type of the resource. E.g. /providers/Microsoft.Management/managementGroups */
		type?: string | null;
	}

	/** The management group details. */
	export interface ManagementGroupWithChildrenFormProperties {

		/** The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000 */
		id: FormControl<string | null | undefined>,

		/** The name of the management group. E.g. 20000000-0000-0000-0000-000000000000 */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. E.g. /providers/Microsoft.Management/managementGroups */
		type: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupWithChildrenFormGroup() {
		return new FormGroup<ManagementGroupWithChildrenFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The management group details. */
	export interface ManagementGroupWithHierarchy {

		/** The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000 */
		id?: string | null;

		/** The name of the management group. E.g. 20000000-0000-0000-0000-000000000000 */
		name?: string | null;

		/** The generic properties of a management group. */
		properties?: ManagementGroupPropertiesWithHierarchy;

		/** The type of the resource. E.g. /providers/Microsoft.Management/managementGroups */
		type?: string | null;
	}

	/** The management group details. */
	export interface ManagementGroupWithHierarchyFormProperties {

		/** The ID of the management group. E.g. /providers/Microsoft.Management/managementGroups/20000000-0000-0000-0000-000000000000 */
		id: FormControl<string | null | undefined>,

		/** The name of the management group. E.g. 20000000-0000-0000-0000-000000000000 */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. E.g. /providers/Microsoft.Management/managementGroups */
		type: FormControl<string | null | undefined>,
	}
	export function CreateManagementGroupWithHierarchyFormGroup() {
		return new FormGroup<ManagementGroupWithHierarchyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Management REST API operation. */
	export interface Operation {

		/** The object that represents the operation. */
		display?: any;

		/** Operation name: {provider}/{resource}/{operation}. */
		name?: string | null;
	}

	/** A Management REST API operation. */
	export interface OperationFormProperties {

		/** The object that represents the operation. */
		display: FormControl<any | null | undefined>,

		/** Operation name: {provider}/{resource}/{operation}. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			display: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result listing  operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResult {

		/** URL to get the next set of operation list results if there are any. */
		nextLink?: string | null;

		/** List of management operations supported by the Microsoft.Management resource provider. */
		value?: Array<Operation>;
	}

	/** Result listing  operations. It contains a list of operations and a URL link to get the next set of results. */
	export interface OperationListResultFormProperties {

		/** URL to get the next set of operation list results if there are any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListResultFormGroup() {
		return new FormGroup<OperationListResultFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** (Optional) The ID of the parent management group. */
	export interface ParentGroupInfo {

		/** The friendly name of the management group. */
		displayName?: string | null;

		/** The ID of the parent management group. E.g. /providers/Microsoft.Management/managementGroups/30000000-0000-0000-0000-000000000000 */
		parentId?: string | null;
	}

	/** (Optional) The ID of the parent management group. */
	export interface ParentGroupInfoFormProperties {

		/** The friendly name of the management group. */
		displayName: FormControl<string | null | undefined>,

		/** The ID of the parent management group. E.g. /providers/Microsoft.Management/managementGroups/30000000-0000-0000-0000-000000000000 */
		parentId: FormControl<string | null | undefined>,
	}
	export function CreateParentGroupInfoFormGroup() {
		return new FormGroup<ParentGroupInfoFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			parentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List management groups for the authenticated user.
		 * Get providers/Microsoft.Management/managementGroups
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2017-08-31-preview.
		 * @param {string} skiptoken Page continuation token is only used if a previous operation returned a partial result. 
		 * If a previous response contains a nextLink element, the value of the nextLink element will include a token parameter that specifies a starting point to use for subsequent calls.
		 * @return {ManagementGroupListResult} OK
		 */
		ManagementGroups_List(api_version: string, skiptoken: string | null | undefined): Observable<ManagementGroupListResult> {
			return this.http.get<ManagementGroupListResult>(this.baseUri + 'providers/Microsoft.Management/managementGroups?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&skiptoken=' + (skiptoken == null ? '' : encodeURIComponent(skiptoken)), {});
		}

		/**
		 * Get the details of the management group.
		 * Get providers/Microsoft.Management/managementGroups/{groupId}
		 * @param {string} groupId Management Group ID.
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2017-08-31-preview.
		 * @param {ManagementGroups_GetExpand} expand The $expand=children query string parameter allows clients to request inclusion of children in the response payload.
		 * @param {boolean} recurse The $recurse=true query string parameter allows clients to request inclusion of entire hierarchy in the response payload.
		 * @return {ManagementGroupWithHierarchy} OK
		 */
		ManagementGroups_Get(groupId: string, api_version: string, expand: ManagementGroups_GetExpand | null | undefined, recurse: boolean | null | undefined): Observable<ManagementGroupWithHierarchy> {
			return this.http.get<ManagementGroupWithHierarchy>(this.baseUri + 'providers/Microsoft.Management/managementGroups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)) + '&expand=' + expand + '&recurse=' + recurse, {});
		}

		/**
		 * Lists all of the available management REST API operations.
		 * Get providers/Microsoft.Management/operations
		 * @param {string} api_version Version of the API to be used with the client request. The current version is 2017-08-31-preview.
		 * @return {OperationListResult} OK. The request has succeeded.
		 */
		Operations_List(api_version: string): Observable<OperationListResult> {
			return this.http.get<OperationListResult>(this.baseUri + 'providers/Microsoft.Management/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

	export enum ManagementGroups_GetExpand { children = 'children' }

}

