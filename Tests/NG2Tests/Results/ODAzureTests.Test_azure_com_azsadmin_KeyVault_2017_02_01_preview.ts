import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the localized display information for this particular operation / action. */
	export interface Display {

		/** The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise it will be used in tool tips and detailed views. */
		description?: string | null;

		/** The localized friendly name for the operation, as it should be shown to the user. */
		operation?: string | null;

		/** The localized friendly form of the resource provider name; it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute." */
		provider?: string | null;

		/** The localized friendly form of the resource type related to this action/operation; it should match the public documentation for the resource provider. */
		resource?: string | null;
	}

	/** Contains the localized display information for this particular operation / action. */
	export interface DisplayFormProperties {

		/** The localized friendly description for the operation, as it should be shown to the user. It should be thorough, yet concise it will be used in tool tips and detailed views. */
		description: FormControl<string | null | undefined>,

		/** The localized friendly name for the operation, as it should be shown to the user. */
		operation: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource provider name; it is expected to also include the publisher/company responsible. It should use Title Casing and begin with "Microsoft" for 1st party services. e.g. "Microsoft Monitoring Insights" or "Microsoft Compute." */
		provider: FormControl<string | null | undefined>,

		/** The localized friendly form of the resource type related to this action/operation; it should match the public documentation for the resource provider. */
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


	/** Describes the supported rest operation. */
	export interface Operation {

		/** Contains the localized display information for this particular operation / action. */
		display?: Display;

		/** The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service. */
		name?: string | null;
	}

	/** Describes the supported rest operation. */
	export interface OperationFormProperties {

		/** The name of the operation being performed on this particular object. It should match the action name that appears in RBAC / the event service. */
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


	/** Base Resource Object */
	export interface Resource {

		/** URI of the resource. */
		id?: string | null;

		/** Location where resource is location. */
		location?: string | null;

		/** Name of the resource. */
		name?: string | null;

		/** List of key value pairs. */
		tags?: {[id: string]: string };

		/** Type of resource. */
		type?: string | null;
	}

	/** Base Resource Object */
	export interface ResourceFormProperties {

		/** URI of the resource. */
		id: FormControl<string | null | undefined>,

		/** Location where resource is location. */
		location: FormControl<string | null | undefined>,

		/** Name of the resource. */
		name: FormControl<string | null | undefined>,

		/** List of key value pairs. */
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
		 * Get the list of support rest operations.
		 * Get providers/Microsoft.KeyVault.Admin/operations
		 * @param {string} api_version Client Api Version.
		 * @return {OperationList} OK
		 */
		Operations_List(api_version: string): Observable<OperationList> {
			return this.http.get<OperationList>(this.baseUri + 'providers/Microsoft.KeyVault.Admin/operations?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

