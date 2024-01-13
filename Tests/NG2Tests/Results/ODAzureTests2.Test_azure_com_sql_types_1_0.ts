import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** ARM proxy resource. */
	export interface ProxyResource {
	}

	/** ARM proxy resource. */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}


	/** ARM resource. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type. */
		type?: string | null;
	}

	/** ARM resource. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Azure Active Directory identity configuration for a resource. */
	export interface ResourceIdentity {

		/** The Azure Active Directory principal id. */
		principalId?: string | null;

		/** The Azure Active Directory tenant id. */
		tenantId?: string | null;

		/** The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. */
		type?: ResourceIdentityType | null;
	}

	/** Azure Active Directory identity configuration for a resource. */
	export interface ResourceIdentityFormProperties {

		/** The Azure Active Directory principal id. */
		principalId: FormControl<string | null | undefined>,

		/** The Azure Active Directory tenant id. */
		tenantId: FormControl<string | null | undefined>,

		/** The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource. */
		type: FormControl<ResourceIdentityType | null | undefined>,
	}
	export function CreateResourceIdentityFormGroup() {
		return new FormGroup<ResourceIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ResourceIdentityType | null | undefined>(undefined),
		});

	}

	export enum ResourceIdentityType { SystemAssigned = 0 }


	/** An ARM Resource SKU. */
	export interface Sku {

		/** Capacity of the particular SKU. */
		capacity?: number | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: string;

		/** Size of the particular SKU */
		size?: string | null;

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier?: string | null;
	}

	/** An ARM Resource SKU. */
	export interface SkuFormProperties {

		/** Capacity of the particular SKU. */
		capacity: FormControl<number | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU, typically, a letter + Number code, e.g. P3.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Size of the particular SKU */
		size: FormControl<string | null | undefined>,

		/** The tier or edition of the particular SKU, e.g. Basic, Premium. */
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ARM tracked top level resource. */
	export interface TrackedResource {

		/**
		 * Resource location.
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** ARM tracked top level resource. */
	export interface TrackedResourceFormProperties {

		/**
		 * Resource location.
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			location: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

