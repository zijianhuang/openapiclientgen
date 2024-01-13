import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Schema of the Data property of an EventGridEvent for an Microsoft.Resources.ResourceActionCancel event. This is raised when a resource action operation is canceled. */
	export interface ResourceActionCancelData {

		/** The requested authorization for the operation. */
		authorization?: string | null;

		/** The properties of the claims. */
		claims?: string | null;

		/** An operation ID used for troubleshooting. */
		correlationId?: string | null;

		/** The details of the operation. */
		httpRequest?: string | null;

		/** The operation that was performed. */
		operationName?: string | null;

		/** The resource group of the resource. */
		resourceGroup?: string | null;

		/** The resource provider performing the operation. */
		resourceProvider?: string | null;

		/** The URI of the resource in the operation. */
		resourceUri?: string | null;

		/** The status of the operation. */
		status?: string | null;

		/** The subscription ID of the resource. */
		subscriptionId?: string | null;

		/** The tenant ID of the resource. */
		tenantId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an Microsoft.Resources.ResourceActionCancel event. This is raised when a resource action operation is canceled. */
	export interface ResourceActionCancelDataFormProperties {

		/** The requested authorization for the operation. */
		authorization: FormControl<string | null | undefined>,

		/** The properties of the claims. */
		claims: FormControl<string | null | undefined>,

		/** An operation ID used for troubleshooting. */
		correlationId: FormControl<string | null | undefined>,

		/** The details of the operation. */
		httpRequest: FormControl<string | null | undefined>,

		/** The operation that was performed. */
		operationName: FormControl<string | null | undefined>,

		/** The resource group of the resource. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource provider performing the operation. */
		resourceProvider: FormControl<string | null | undefined>,

		/** The URI of the resource in the operation. */
		resourceUri: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,

		/** The subscription ID of the resource. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The tenant ID of the resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateResourceActionCancelDataFormGroup() {
		return new FormGroup<ResourceActionCancelDataFormProperties>({
			authorization: new FormControl<string | null | undefined>(undefined),
			claims: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpRequest: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceProvider: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceActionFailure event. This is raised when a resource action operation fails. */
	export interface ResourceActionFailureData {

		/** The requested authorization for the operation. */
		authorization?: string | null;

		/** The properties of the claims. */
		claims?: string | null;

		/** An operation ID used for troubleshooting. */
		correlationId?: string | null;

		/** The details of the operation. */
		httpRequest?: string | null;

		/** The operation that was performed. */
		operationName?: string | null;

		/** The resource group of the resource. */
		resourceGroup?: string | null;

		/** The resource provider performing the operation. */
		resourceProvider?: string | null;

		/** The URI of the resource in the operation. */
		resourceUri?: string | null;

		/** The status of the operation. */
		status?: string | null;

		/** The subscription ID of the resource. */
		subscriptionId?: string | null;

		/** The tenant ID of the resource. */
		tenantId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceActionFailure event. This is raised when a resource action operation fails. */
	export interface ResourceActionFailureDataFormProperties {

		/** The requested authorization for the operation. */
		authorization: FormControl<string | null | undefined>,

		/** The properties of the claims. */
		claims: FormControl<string | null | undefined>,

		/** An operation ID used for troubleshooting. */
		correlationId: FormControl<string | null | undefined>,

		/** The details of the operation. */
		httpRequest: FormControl<string | null | undefined>,

		/** The operation that was performed. */
		operationName: FormControl<string | null | undefined>,

		/** The resource group of the resource. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource provider performing the operation. */
		resourceProvider: FormControl<string | null | undefined>,

		/** The URI of the resource in the operation. */
		resourceUri: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,

		/** The subscription ID of the resource. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The tenant ID of the resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateResourceActionFailureDataFormGroup() {
		return new FormGroup<ResourceActionFailureDataFormProperties>({
			authorization: new FormControl<string | null | undefined>(undefined),
			claims: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpRequest: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceProvider: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceActionSuccess event. This is raised when a resource action operation succeeds. */
	export interface ResourceActionSuccessData {

		/** The requested authorization for the operation. */
		authorization?: string | null;

		/** The properties of the claims. */
		claims?: string | null;

		/** An operation ID used for troubleshooting. */
		correlationId?: string | null;

		/** The details of the operation. */
		httpRequest?: string | null;

		/** The operation that was performed. */
		operationName?: string | null;

		/** The resource group of the resource. */
		resourceGroup?: string | null;

		/** The resource provider performing the operation. */
		resourceProvider?: string | null;

		/** The URI of the resource in the operation. */
		resourceUri?: string | null;

		/** The status of the operation. */
		status?: string | null;

		/** The subscription ID of the resource. */
		subscriptionId?: string | null;

		/** The tenant ID of the resource. */
		tenantId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceActionSuccess event. This is raised when a resource action operation succeeds. */
	export interface ResourceActionSuccessDataFormProperties {

		/** The requested authorization for the operation. */
		authorization: FormControl<string | null | undefined>,

		/** The properties of the claims. */
		claims: FormControl<string | null | undefined>,

		/** An operation ID used for troubleshooting. */
		correlationId: FormControl<string | null | undefined>,

		/** The details of the operation. */
		httpRequest: FormControl<string | null | undefined>,

		/** The operation that was performed. */
		operationName: FormControl<string | null | undefined>,

		/** The resource group of the resource. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource provider performing the operation. */
		resourceProvider: FormControl<string | null | undefined>,

		/** The URI of the resource in the operation. */
		resourceUri: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,

		/** The subscription ID of the resource. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The tenant ID of the resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateResourceActionSuccessDataFormGroup() {
		return new FormGroup<ResourceActionSuccessDataFormProperties>({
			authorization: new FormControl<string | null | undefined>(undefined),
			claims: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpRequest: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceProvider: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for an Microsoft.Resources.ResourceDeleteCancel event. This is raised when a resource delete operation is canceled. */
	export interface ResourceDeleteCancelData {

		/** The requested authorization for the operation. */
		authorization?: string | null;

		/** The properties of the claims. */
		claims?: string | null;

		/** An operation ID used for troubleshooting. */
		correlationId?: string | null;

		/** The details of the operation. */
		httpRequest?: string | null;

		/** The operation that was performed. */
		operationName?: string | null;

		/** The resource group of the resource. */
		resourceGroup?: string | null;

		/** The resource provider performing the operation. */
		resourceProvider?: string | null;

		/** The URI of the resource in the operation. */
		resourceUri?: string | null;

		/** The status of the operation. */
		status?: string | null;

		/** The subscription ID of the resource. */
		subscriptionId?: string | null;

		/** The tenant ID of the resource. */
		tenantId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for an Microsoft.Resources.ResourceDeleteCancel event. This is raised when a resource delete operation is canceled. */
	export interface ResourceDeleteCancelDataFormProperties {

		/** The requested authorization for the operation. */
		authorization: FormControl<string | null | undefined>,

		/** The properties of the claims. */
		claims: FormControl<string | null | undefined>,

		/** An operation ID used for troubleshooting. */
		correlationId: FormControl<string | null | undefined>,

		/** The details of the operation. */
		httpRequest: FormControl<string | null | undefined>,

		/** The operation that was performed. */
		operationName: FormControl<string | null | undefined>,

		/** The resource group of the resource. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource provider performing the operation. */
		resourceProvider: FormControl<string | null | undefined>,

		/** The URI of the resource in the operation. */
		resourceUri: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,

		/** The subscription ID of the resource. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The tenant ID of the resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateResourceDeleteCancelDataFormGroup() {
		return new FormGroup<ResourceDeleteCancelDataFormProperties>({
			authorization: new FormControl<string | null | undefined>(undefined),
			claims: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpRequest: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceProvider: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceDeleteFailure event. This is raised when a resource delete operation fails. */
	export interface ResourceDeleteFailureData {

		/** The requested authorization for the operation. */
		authorization?: string | null;

		/** The properties of the claims. */
		claims?: string | null;

		/** An operation ID used for troubleshooting. */
		correlationId?: string | null;

		/** The details of the operation. */
		httpRequest?: string | null;

		/** The operation that was performed. */
		operationName?: string | null;

		/** The resource group of the resource. */
		resourceGroup?: string | null;

		/** The resource provider performing the operation. */
		resourceProvider?: string | null;

		/** The URI of the resource in the operation. */
		resourceUri?: string | null;

		/** The status of the operation. */
		status?: string | null;

		/** The subscription ID of the resource. */
		subscriptionId?: string | null;

		/** The tenant ID of the resource. */
		tenantId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceDeleteFailure event. This is raised when a resource delete operation fails. */
	export interface ResourceDeleteFailureDataFormProperties {

		/** The requested authorization for the operation. */
		authorization: FormControl<string | null | undefined>,

		/** The properties of the claims. */
		claims: FormControl<string | null | undefined>,

		/** An operation ID used for troubleshooting. */
		correlationId: FormControl<string | null | undefined>,

		/** The details of the operation. */
		httpRequest: FormControl<string | null | undefined>,

		/** The operation that was performed. */
		operationName: FormControl<string | null | undefined>,

		/** The resource group of the resource. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource provider performing the operation. */
		resourceProvider: FormControl<string | null | undefined>,

		/** The URI of the resource in the operation. */
		resourceUri: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,

		/** The subscription ID of the resource. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The tenant ID of the resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateResourceDeleteFailureDataFormGroup() {
		return new FormGroup<ResourceDeleteFailureDataFormProperties>({
			authorization: new FormControl<string | null | undefined>(undefined),
			claims: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpRequest: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceProvider: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceDeleteSuccess event. This is raised when a resource delete operation succeeds. */
	export interface ResourceDeleteSuccessData {

		/** The requested authorization for the operation. */
		authorization?: string | null;

		/** The properties of the claims. */
		claims?: string | null;

		/** An operation ID used for troubleshooting. */
		correlationId?: string | null;

		/** The details of the operation. */
		httpRequest?: string | null;

		/** The operation that was performed. */
		operationName?: string | null;

		/** The resource group of the resource. */
		resourceGroup?: string | null;

		/** The resource provider performing the operation. */
		resourceProvider?: string | null;

		/** The URI of the resource in the operation. */
		resourceUri?: string | null;

		/** The status of the operation. */
		status?: string | null;

		/** The subscription ID of the resource. */
		subscriptionId?: string | null;

		/** The tenant ID of the resource. */
		tenantId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceDeleteSuccess event. This is raised when a resource delete operation succeeds. */
	export interface ResourceDeleteSuccessDataFormProperties {

		/** The requested authorization for the operation. */
		authorization: FormControl<string | null | undefined>,

		/** The properties of the claims. */
		claims: FormControl<string | null | undefined>,

		/** An operation ID used for troubleshooting. */
		correlationId: FormControl<string | null | undefined>,

		/** The details of the operation. */
		httpRequest: FormControl<string | null | undefined>,

		/** The operation that was performed. */
		operationName: FormControl<string | null | undefined>,

		/** The resource group of the resource. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource provider performing the operation. */
		resourceProvider: FormControl<string | null | undefined>,

		/** The URI of the resource in the operation. */
		resourceUri: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,

		/** The subscription ID of the resource. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The tenant ID of the resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateResourceDeleteSuccessDataFormGroup() {
		return new FormGroup<ResourceDeleteSuccessDataFormProperties>({
			authorization: new FormControl<string | null | undefined>(undefined),
			claims: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpRequest: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceProvider: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceWriteCancel event. This is raised when a resource create or update operation is canceled. */
	export interface ResourceWriteCancelData {

		/** The requested authorization for the operation. */
		authorization?: string | null;

		/** The properties of the claims. */
		claims?: string | null;

		/** An operation ID used for troubleshooting. */
		correlationId?: string | null;

		/** The details of the operation. */
		httpRequest?: string | null;

		/** The operation that was performed. */
		operationName?: string | null;

		/** The resource group of the resource. */
		resourceGroup?: string | null;

		/** The resource provider performing the operation. */
		resourceProvider?: string | null;

		/** The URI of the resource in the operation. */
		resourceUri?: string | null;

		/** The status of the operation. */
		status?: string | null;

		/** The subscription ID of the resource. */
		subscriptionId?: string | null;

		/** The tenant ID of the resource. */
		tenantId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceWriteCancel event. This is raised when a resource create or update operation is canceled. */
	export interface ResourceWriteCancelDataFormProperties {

		/** The requested authorization for the operation. */
		authorization: FormControl<string | null | undefined>,

		/** The properties of the claims. */
		claims: FormControl<string | null | undefined>,

		/** An operation ID used for troubleshooting. */
		correlationId: FormControl<string | null | undefined>,

		/** The details of the operation. */
		httpRequest: FormControl<string | null | undefined>,

		/** The operation that was performed. */
		operationName: FormControl<string | null | undefined>,

		/** The resource group of the resource. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource provider performing the operation. */
		resourceProvider: FormControl<string | null | undefined>,

		/** The URI of the resource in the operation. */
		resourceUri: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,

		/** The subscription ID of the resource. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The tenant ID of the resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateResourceWriteCancelDataFormGroup() {
		return new FormGroup<ResourceWriteCancelDataFormProperties>({
			authorization: new FormControl<string | null | undefined>(undefined),
			claims: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpRequest: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceProvider: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceWriteFailure event. This is raised when a resource create or update operation fails. */
	export interface ResourceWriteFailureData {

		/** The requested authorization for the operation. */
		authorization?: string | null;

		/** The properties of the claims. */
		claims?: string | null;

		/** An operation ID used for troubleshooting. */
		correlationId?: string | null;

		/** The details of the operation. */
		httpRequest?: string | null;

		/** The operation that was performed. */
		operationName?: string | null;

		/** The resource group of the resource. */
		resourceGroup?: string | null;

		/** The resource provider performing the operation. */
		resourceProvider?: string | null;

		/** The URI of the resource in the operation. */
		resourceUri?: string | null;

		/** The status of the operation. */
		status?: string | null;

		/** The subscription ID of the resource. */
		subscriptionId?: string | null;

		/** The tenant ID of the resource. */
		tenantId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceWriteFailure event. This is raised when a resource create or update operation fails. */
	export interface ResourceWriteFailureDataFormProperties {

		/** The requested authorization for the operation. */
		authorization: FormControl<string | null | undefined>,

		/** The properties of the claims. */
		claims: FormControl<string | null | undefined>,

		/** An operation ID used for troubleshooting. */
		correlationId: FormControl<string | null | undefined>,

		/** The details of the operation. */
		httpRequest: FormControl<string | null | undefined>,

		/** The operation that was performed. */
		operationName: FormControl<string | null | undefined>,

		/** The resource group of the resource. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource provider performing the operation. */
		resourceProvider: FormControl<string | null | undefined>,

		/** The URI of the resource in the operation. */
		resourceUri: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,

		/** The subscription ID of the resource. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The tenant ID of the resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateResourceWriteFailureDataFormGroup() {
		return new FormGroup<ResourceWriteFailureDataFormProperties>({
			authorization: new FormControl<string | null | undefined>(undefined),
			claims: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpRequest: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceProvider: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceWriteSuccess event. This is raised when a resource create or update operation succeeds. */
	export interface ResourceWriteSuccessData {

		/** The requested authorization for the operation. */
		authorization?: string | null;

		/** The properties of the claims. */
		claims?: string | null;

		/** An operation ID used for troubleshooting. */
		correlationId?: string | null;

		/** The details of the operation. */
		httpRequest?: string | null;

		/** The operation that was performed. */
		operationName?: string | null;

		/** The resource group of the resource. */
		resourceGroup?: string | null;

		/** The resource provider performing the operation. */
		resourceProvider?: string | null;

		/** The URI of the resource in the operation. */
		resourceUri?: string | null;

		/** The status of the operation. */
		status?: string | null;

		/** The subscription ID of the resource. */
		subscriptionId?: string | null;

		/** The tenant ID of the resource. */
		tenantId?: string | null;
	}

	/** Schema of the Data property of an EventGridEvent for a Microsoft.Resources.ResourceWriteSuccess event. This is raised when a resource create or update operation succeeds. */
	export interface ResourceWriteSuccessDataFormProperties {

		/** The requested authorization for the operation. */
		authorization: FormControl<string | null | undefined>,

		/** The properties of the claims. */
		claims: FormControl<string | null | undefined>,

		/** An operation ID used for troubleshooting. */
		correlationId: FormControl<string | null | undefined>,

		/** The details of the operation. */
		httpRequest: FormControl<string | null | undefined>,

		/** The operation that was performed. */
		operationName: FormControl<string | null | undefined>,

		/** The resource group of the resource. */
		resourceGroup: FormControl<string | null | undefined>,

		/** The resource provider performing the operation. */
		resourceProvider: FormControl<string | null | undefined>,

		/** The URI of the resource in the operation. */
		resourceUri: FormControl<string | null | undefined>,

		/** The status of the operation. */
		status: FormControl<string | null | undefined>,

		/** The subscription ID of the resource. */
		subscriptionId: FormControl<string | null | undefined>,

		/** The tenant ID of the resource. */
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateResourceWriteSuccessDataFormGroup() {
		return new FormGroup<ResourceWriteSuccessDataFormProperties>({
			authorization: new FormControl<string | null | undefined>(undefined),
			claims: new FormControl<string | null | undefined>(undefined),
			correlationId: new FormControl<string | null | undefined>(undefined),
			httpRequest: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceProvider: new FormControl<string | null | undefined>(undefined),
			resourceUri: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

