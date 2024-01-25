import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Access to be allowed or denied. */
	export enum Access { Allow = 0, Deny = 1 }


	/** VPN client authentication method. */
	export enum AuthenticationMethod { EAPTLS = 0, EAPMSCHAPv2 = 1 }


	/** The response body contains the status of the specified asynchronous operation, indicating whether it has succeeded, is in progress, or has failed. Note that this status is distinct from the HTTP status code returned for the Get Operation Status operation itself. If the asynchronous operation succeeded, the response body includes the HTTP status code for the successful request. If the asynchronous operation failed, the response body includes the HTTP status code for the failed request and error information regarding the failure. */
	export interface AzureAsyncOperationResult {

		/** Common error representation. */
		error?: Error;

		/** Status of the Azure async operation. */
		status?: AzureAsyncOperationResultStatus | null;
	}

	/** The response body contains the status of the specified asynchronous operation, indicating whether it has succeeded, is in progress, or has failed. Note that this status is distinct from the HTTP status code returned for the Get Operation Status operation itself. If the asynchronous operation succeeded, the response body includes the HTTP status code for the successful request. If the asynchronous operation failed, the response body includes the HTTP status code for the failed request and error information regarding the failure. */
	export interface AzureAsyncOperationResultFormProperties {

		/** Status of the Azure async operation. */
		status: FormControl<AzureAsyncOperationResultStatus | null | undefined>,
	}
	export function CreateAzureAsyncOperationResultFormGroup() {
		return new FormGroup<AzureAsyncOperationResultFormProperties>({
			status: new FormControl<AzureAsyncOperationResultStatus | null | undefined>(undefined),
		});

	}

	export enum AzureAsyncOperationResultStatus { InProgress = 0, Succeeded = 1, Failed = 2 }


	/** An error response from the service. */
	export interface CloudError {

		/** An error response from the service. */
		error?: CloudErrorBody;
	}

	/** An error response from the service. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** An error response from the service. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A list of additional details about the error. */
		details?: Array<CloudErrorBody>;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;

		/** The target of the particular error. For example, the name of the property in error. */
		target?: string | null;
	}

	/** An error response from the service. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,

		/** The target of the particular error. For example, the name of the property in error. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common error representation. */
	export interface Error {

		/** Error code. */
		code?: string | null;

		/** Error details. */
		details?: Array<ErrorDetails>;

		/** Inner error message. */
		innerError?: string | null;

		/** Error message. */
		message?: string | null;

		/** Error target. */
		target?: string | null;
	}

	/** Common error representation. */
	export interface ErrorFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Inner error message. */
		innerError: FormControl<string | null | undefined>,

		/** Error message. */
		message: FormControl<string | null | undefined>,

		/** Error target. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			innerError: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common error details representation. */
	export interface ErrorDetails {

		/** Error code. */
		code?: string | null;

		/** Error message. */
		message?: string | null;

		/** Error target. */
		target?: string | null;
	}

	/** Common error details representation. */
	export interface ErrorDetailsFormProperties {

		/** Error code. */
		code: FormControl<string | null | undefined>,

		/** Error message. */
		message: FormControl<string | null | undefined>,

		/** Error target. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailsFormGroup() {
		return new FormGroup<ErrorDetailsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** IP address allocation method. */
	export enum IPAllocationMethod { Static = 0, Dynamic = 1 }


	/** IP address version. */
	export enum IPVersion { IPv4 = 0, IPv6 = 1 }


	/** Identity for the resource. */
	export interface ManagedServiceIdentity {

		/** The principal id of the system assigned identity. This property will only be provided for a system assigned identity. */
		principalId?: string | null;

		/** The tenant id of the system assigned identity. This property will only be provided for a system assigned identity. */
		tenantId?: string | null;

		/** The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. */
		type?: ManagedServiceIdentityType | null;

		/** The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities?: {[id: string]: ManagedServiceIdentityUserAssignedIdentities };
	}

	/** Identity for the resource. */
	export interface ManagedServiceIdentityFormProperties {

		/** The principal id of the system assigned identity. This property will only be provided for a system assigned identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant id of the system assigned identity. This property will only be provided for a system assigned identity. */
		tenantId: FormControl<string | null | undefined>,

		/** The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. */
		type: FormControl<ManagedServiceIdentityType | null | undefined>,

		/** The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
		userAssignedIdentities: FormControl<{[id: string]: ManagedServiceIdentityUserAssignedIdentities } | null | undefined>,
	}
	export function CreateManagedServiceIdentityFormGroup() {
		return new FormGroup<ManagedServiceIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ManagedServiceIdentityType | null | undefined>(undefined),
			userAssignedIdentities: new FormControl<{[id: string]: ManagedServiceIdentityUserAssignedIdentities } | null | undefined>(undefined),
		});

	}

	export enum ManagedServiceIdentityType { SystemAssigned = 0, UserAssigned = 1, 'SystemAssigned, UserAssigned' = 2, None = 3 }

	export interface ManagedServiceIdentityUserAssignedIdentities {

		/** The client id of user assigned identity. */
		clientId?: string | null;

		/** The principal id of user assigned identity. */
		principalId?: string | null;
	}
	export interface ManagedServiceIdentityUserAssignedIdentitiesFormProperties {

		/** The client id of user assigned identity. */
		clientId: FormControl<string | null | undefined>,

		/** The principal id of user assigned identity. */
		principalId: FormControl<string | null | undefined>,
	}
	export function CreateManagedServiceIdentityUserAssignedIdentitiesFormGroup() {
		return new FormGroup<ManagedServiceIdentityUserAssignedIdentitiesFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined),
			principalId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The current provisioning state. */
	export enum ProvisioningState { Succeeded = 0, Updating = 1, Deleting = 2, Failed = 3 }


	/** Common resource representation. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource location. */
		location?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** Resource type. */
		type?: string | null;
	}

	/** Common resource representation. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource location. */
		location: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reference to another subresource. */
	export interface SubResource {

		/** Resource ID. */
		id?: string | null;
	}

	/** Reference to another subresource. */
	export interface SubResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSubResourceFormGroup() {
		return new FormGroup<SubResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Tags object for patch operations. */
	export interface TagsObject {

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** Tags object for patch operations. */
	export interface TagsObjectFormProperties {

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagsObjectFormGroup() {
		return new FormGroup<TagsObjectFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

