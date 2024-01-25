import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The resource model definition for a Azure Resource Manager resource with an etag. */
	export interface AzureEntityResource extends Resource {

		/** Resource Etag. */
		etag?: string | null;
	}

	/** The resource model definition for a Azure Resource Manager resource with an etag. */
	export interface AzureEntityResourceFormProperties extends ResourceFormProperties {

		/** Resource Etag. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateAzureEntityResourceFormGroup() {
		return new FormGroup<AzureEntityResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource management error additional info. */
	export interface ErrorAdditionalInfo {

		/** The additional info. */
		info?: string | null;

		/** The additional info type. */
		type?: string | null;
	}

	/** The resource management error additional info. */
	export interface ErrorAdditionalInfoFormProperties {

		/** The additional info. */
		info: FormControl<string | null | undefined>,

		/** The additional info type. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorAdditionalInfoFormGroup() {
		return new FormGroup<ErrorAdditionalInfoFormProperties>({
			info: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource management error response. */
	export interface ErrorResponse {

		/** The error additional info. */
		additionalInfo?: Array<ErrorAdditionalInfo>;

		/** The error code. */
		code?: string | null;

		/** The error details. */
		details?: Array<ErrorResponse>;

		/** The error message. */
		message?: string | null;

		/** The error target. */
		target?: string | null;
	}

	/** The resource management error response. */
	export interface ErrorResponseFormProperties {

		/** The error code. */
		code: FormControl<string | null | undefined>,

		/** The error message. */
		message: FormControl<string | null | undefined>,

		/** The error target. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identity for the resource. */
	export interface Identity {

		/** The principal ID of resource identity. */
		principalId?: string | null;

		/** The tenant ID of resource. */
		tenantId?: string | null;

		/** The identity type. */
		type?: IdentityType | null;
	}

	/** Identity for the resource. */
	export interface IdentityFormProperties {

		/** The principal ID of resource identity. */
		principalId: FormControl<string | null | undefined>,

		/** The tenant ID of resource. */
		tenantId: FormControl<string | null | undefined>,

		/** The identity type. */
		type: FormControl<IdentityType | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<IdentityType | null | undefined>(undefined),
		});

	}

	export enum IdentityType { SystemAssigned = 0 }


	/** Plan for the resource. */
	export interface Plan {

		/**
		 * A user defined name of the 3rd Party Artifact that is being procured.
		 * Required
		 */
		name: string;

		/**
		 * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
		 * Required
		 */
		product: string;

		/** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
		promotionCode?: string | null;

		/**
		 * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
		 * Required
		 */
		publisher: string;

		/** The version of the desired product/artifact. */
		version?: string | null;
	}

	/** Plan for the resource. */
	export interface PlanFormProperties {

		/**
		 * A user defined name of the 3rd Party Artifact that is being procured.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
		 * Required
		 */
		product: FormControl<string | null | undefined>,

		/** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
		promotionCode: FormControl<string | null | undefined>,

		/**
		 * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
		 * Required
		 */
		publisher: FormControl<string | null | undefined>,

		/** The version of the desired product/artifact. */
		version: FormControl<string | null | undefined>,
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			product: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			promotionCode: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResource {
	}

	/** The resource model definition for a ARM proxy resource. It will have everything other than required location and tags */
	export interface ProxyResourceFormProperties {
	}
	export function CreateProxyResourceFormGroup() {
		return new FormGroup<ProxyResourceFormProperties>({
		});

	}

	export interface Resource {

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
		id?: string | null;

		/** The name of the resource */
		name?: string | null;

		/** The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. */
		type?: string | null;
	}
	export interface ResourceFormProperties {

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
		id: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition containing the full set of allowed properties for a resource. Except properties bag, there cannot be a top level property outside of this set. */
	export interface ResourceModelWithAllowedPropertySet {

		/** The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
		etag?: string | null;

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
		id?: string | null;
		identity?: Identity;

		/** Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. */
		kind?: string | null;

		/** The geo-location where the resource lives */
		location?: string | null;

		/** The  fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. */
		managedBy?: string | null;

		/** The name of the resource */
		name?: string | null;
		plan?: Plan;
		sku?: Sku;

		/** Resource tags. */
		tags?: {[id: string]: string };

		/** The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.. */
		type?: string | null;
	}

	/** The resource model definition containing the full set of allowed properties for a resource. Except properties bag, there cannot be a top level property outside of this set. */
	export interface ResourceModelWithAllowedPropertySetFormProperties {

		/** The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.  Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19), If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields. */
		etag: FormControl<string | null | undefined>,

		/** Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
		id: FormControl<string | null | undefined>,

		/** Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.  If supported, the resource provider must validate and persist this value. */
		kind: FormControl<string | null | undefined>,

		/** The geo-location where the resource lives */
		location: FormControl<string | null | undefined>,

		/** The  fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another azure resource. If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource. */
		managedBy: FormControl<string | null | undefined>,

		/** The name of the resource */
		name: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,

		/** The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts.. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceModelWithAllowedPropertySetFormGroup() {
		return new FormGroup<ResourceModelWithAllowedPropertySetFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[-\w\._,\(\)]+$')]),
			location: new FormControl<string | null | undefined>(undefined),
			managedBy: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The resource model definition representing SKU */
	export interface Sku {

		/** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
		capacity?: number | null;

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family?: string | null;

		/**
		 * The name of the SKU. Ex - P3. It is typically a letter+number code
		 * Required
		 */
		name: string;

		/** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
		size?: string | null;

		/** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
		tier?: SkuTier | null;
	}

	/** The resource model definition representing SKU */
	export interface SkuFormProperties {

		/** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
		capacity: FormControl<number | null | undefined>,

		/** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
		family: FormControl<string | null | undefined>,

		/**
		 * The name of the SKU. Ex - P3. It is typically a letter+number code
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
		size: FormControl<string | null | undefined>,

		/** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
		tier: FormControl<SkuTier | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			capacity: new FormControl<number | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<SkuTier | null | undefined>(undefined),
		});

	}

	export enum SkuTier { Free = 0, Basic = 1, Standard = 2, Premium = 3 }


	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResource extends Resource {

		/**
		 * The geo-location where the resource lives
		 * Required
		 */
		location: string;

		/** Resource tags. */
		tags?: {[id: string]: string };
	}

	/** The resource model definition for a ARM tracked top level resource */
	export interface TrackedResourceFormProperties extends ResourceFormProperties {

		/**
		 * The geo-location where the resource lives
		 * Required
		 */
		location: FormControl<string | null | undefined>,

		/** Resource tags. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
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

