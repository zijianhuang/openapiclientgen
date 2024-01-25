import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the localized display information for this particular operation / action. */
	export interface Display {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description?: string | null;

		/** The localized, friendly name for the operation. Use the name as it will be displayed to the user. */
		operation?: string | null;

		/** The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute.". */
		provider?: string | null;

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource?: string | null;
	}

	/** Contains the localized display information for this particular operation / action. */
	export interface DisplayFormProperties {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description: FormControl<string | null | undefined>,

		/** The localized, friendly name for the operation. Use the name as it will be displayed to the user. */
		operation: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource provider name – it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute.". */
		provider: FormControl<string | null | undefined>,

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateDisplayFormGroup() {
		return new FormGroup<DisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the supported REST operation. */
	export interface Operation {

		/** Contains the localized display information for this particular operation / action. */
		display?: Display;

		/** The name of the operation being performed on this particular object. This name should match the name that appears in RBAC or the event service. */
		name?: string | null;
	}

	/** Describes the supported REST operation. */
	export interface OperationFormProperties {

		/** The name of the operation being performed on this particular object. This name should match the name that appears in RBAC or the event service. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pageable list of supported operations objects. */
	export interface OperationList {

		/** URI to next page. */
		nextLink?: string | null;

		/** List of supported operations. */
		value?: Array<Operation>;
	}

	/** A pageable list of supported operations objects. */
	export interface OperationListFormProperties {

		/** URI to next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provisioning status of the resource. */
	export interface ProvisioningState {

		/** Provisioning status of the resource. */
		properties?: ProvisioningStateProperties;
	}

	/** Provisioning status of the resource. */
	export interface ProvisioningStateFormProperties {
	}
	export function CreateProvisioningStateFormGroup() {
		return new FormGroup<ProvisioningStateFormProperties>({
		});

	}


	/** Provisioning status of the resource. */
	export interface ProvisioningStateProperties {

		/** Provisioning status of the resource. */
		provisioningState?: string | null;
	}

	/** Provisioning status of the resource. */
	export interface ProvisioningStatePropertiesFormProperties {

		/** Provisioning status of the resource. */
		provisioningState: FormControl<string | null | undefined>,
	}
	export function CreateProvisioningStatePropertiesFormGroup() {
		return new FormGroup<ProvisioningStatePropertiesFormProperties>({
			provisioningState: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Base resource object. */
	export interface Resource {

		/** URI of the resource. */
		id?: string | null;

		/** The region where the resource is located. */
		location?: string | null;

		/** Name of the resource. */
		name?: string | null;

		/** List of key-value pairs. */
		tags?: {[id: string]: string };

		/** Type of resource. */
		type?: string | null;
	}

	/** Base resource object. */
	export interface ResourceFormProperties {

		/** URI of the resource. */
		id: FormControl<string | null | undefined>,

		/** The region where the resource is located. */
		location: FormControl<string | null | undefined>,

		/** Name of the resource. */
		name: FormControl<string | null | undefined>,

		/** List of key-value pairs. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** Type of resource. */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of support REST operations.
		 * Get providers/Microsoft.Fabric.Admin/operations
		 * @param {string} api_version Client API Version.
		 * @return {OperationList} OK
		 */
		Fabric_ListOperations(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.Fabric.Admin/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

