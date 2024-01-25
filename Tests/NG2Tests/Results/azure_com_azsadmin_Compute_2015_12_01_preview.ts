import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the localized display information for this particular operation or action. */
	export interface Display {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description?: string | null;

		/** The localized, friendly name for the operation. Use the name as it will displayed to the user. */
		operation?: string | null;

		/** The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with "Microsoft" for first-party services. For example, the provider name may be"Microsoft Monitoring Insights" or "Microsoft Compute." */
		provider?: string | null;

		/** The localized, friendly version of the resource type related to this action or operation; the resource type should match the public documentation for the resource provider. */
		resource?: string | null;
	}

	/** Contains the localized display information for this particular operation or action. */
	export interface DisplayFormProperties {

		/** The localized, friendly description for the operation. The description will be displayed to the user. It should be thorough and concise for used in both tooltips and detailed views. */
		description: FormControl<string | null | undefined>,

		/** The localized, friendly name for the operation. Use the name as it will displayed to the user. */
		operation: FormControl<string | null | undefined>,

		/** The localized, friendly version of the resource provider name. The provider name is expected to include the name of the publisher or company responsible. The provider name format should use title case and begin with "Microsoft" for first-party services. For example, the provider name may be"Microsoft Monitoring Insights" or "Microsoft Compute." */
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

		/** Contains the localized display information for this particular operation or action. */
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


	/** List of Operations */
	export interface OperationList {

		/** URI to the next page of operations. */
		nextLink?: string | null;

		/** Array of operations */
		value?: Array<Operation>;
	}

	/** List of Operations */
	export interface OperationListFormProperties {

		/** URI to the next page of operations. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateOperationListFormGroup() {
		return new FormGroup<OperationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The provisioning state of the resource. */
	export enum ProvisioningState { Creating = 0, Failed = 1, Succeeded = 2, Canceled = 3 }


	/** Base resource object. */
	export interface Resource {

		/** ID of the resource. */
		id?: string | null;

		/** Location of the resource. */
		location?: string | null;

		/** Name of the resource. */
		name?: string | null;

		/** Type of Resource. */
		type?: string | null;
	}

	/** Base resource object. */
	export interface ResourceFormProperties {

		/** ID of the resource. */
		id: FormControl<string | null | undefined>,

		/** Location of the resource. */
		location: FormControl<string | null | undefined>,

		/** Name of the resource. */
		name: FormControl<string | null | undefined>,

		/** Type of Resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns the list of supported REST operations.
		 * Get providers/Microsoft.Compute.Admin/operations
		 * @param {string} api_version Client API Version.
		 * @return {OperationList} OK
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.Compute.Admin/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

