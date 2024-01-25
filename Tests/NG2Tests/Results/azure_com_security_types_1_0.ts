import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The ASC location of the subscription is in the "name" field */
	export interface AscLocation {

		/** An empty set of properties */
		properties?: AscLocationProperties;
	}

	/** The ASC location of the subscription is in the "name" field */
	export interface AscLocationFormProperties {
	}
	export function CreateAscLocationFormGroup() {
		return new FormGroup<AscLocationFormProperties>({
		});

	}


	/** An empty set of properties */
	export interface AscLocationProperties {
	}

	/** An empty set of properties */
	export interface AscLocationPropertiesFormProperties {
	}
	export function CreateAscLocationPropertiesFormGroup() {
		return new FormGroup<AscLocationPropertiesFormProperties>({
		});

	}


	/** List of locations where ASC saves your data */
	export interface AscLocationList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;
		value?: Array<AscLocation>;
	}

	/** List of locations where ASC saves your data */
	export interface AscLocationListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAscLocationListFormGroup() {
		return new FormGroup<AscLocationListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the Azure resource that was assessed */
	export interface AzureResourceDetails {

		/** Azure resource Id of the assessed resource */
		id?: string | null;
	}

	/** Details of the Azure resource that was assessed */
	export interface AzureResourceDetailsFormProperties {

		/** Azure resource Id of the assessed resource */
		id: FormControl<string | null | undefined>,
	}
	export function CreateAzureResourceDetailsFormGroup() {
		return new FormGroup<AzureResourceDetailsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response structure. */
	export interface CloudError {

		/** Error details. */
		error?: CloudErrorBody;
	}

	/** Error response structure. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** Error details. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;
	}

	/** Error details. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Entity tag is used for comparing two or more entities from the same requested resource. */
	export interface ETag {

		/** Entity tag is used for comparing two or more entities from the same requested resource. */
		etag?: string | null;
	}

	/** Entity tag is used for comparing two or more entities from the same requested resource. */
	export interface ETagFormProperties {

		/** Entity tag is used for comparing two or more entities from the same requested resource. */
		etag: FormControl<string | null | undefined>,
	}
	export function CreateETagFormGroup() {
		return new FormGroup<ETagFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Azure resource with kind */
	export interface Kind {

		/** Kind of the resource */
		kind?: string | null;
	}

	/** Describes an Azure resource with kind */
	export interface KindFormProperties {

		/** Kind of the resource */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateKindFormGroup() {
		return new FormGroup<KindFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Azure resource with location */
	export interface Location {

		/** Location where the resource is stored */
		location?: string | null;
	}

	/** Describes an Azure resource with location */
	export interface LocationFormProperties {

		/** Location where the resource is stored */
		location: FormControl<string | null | undefined>,
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the On Premise resource that was assessed */
	export interface OnPremiseResourceDetails {

		/**
		 * The name of the machine
		 * Required
		 */
		machineName: string;

		/**
		 * The oms agent Id installed on the machine
		 * Required
		 */
		sourceComputerId: string;

		/**
		 * The unique Id of the machine
		 * Required
		 */
		vmuuid: string;

		/**
		 * Azure resource Id of the workspace the machine is attached to
		 * Required
		 */
		workspaceId: string;
	}

	/** Details of the On Premise resource that was assessed */
	export interface OnPremiseResourceDetailsFormProperties {

		/**
		 * The name of the machine
		 * Required
		 */
		machineName: FormControl<string | null | undefined>,

		/**
		 * The oms agent Id installed on the machine
		 * Required
		 */
		sourceComputerId: FormControl<string | null | undefined>,

		/**
		 * The unique Id of the machine
		 * Required
		 */
		vmuuid: FormControl<string | null | undefined>,

		/**
		 * Azure resource Id of the workspace the machine is attached to
		 * Required
		 */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateOnPremiseResourceDetailsFormGroup() {
		return new FormGroup<OnPremiseResourceDetailsFormProperties>({
			machineName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceComputerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vmuuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes an Azure resource. */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource type */
		type?: string | null;
	}

	/** Describes an Azure resource. */
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details of the resource that was assessed */
	export interface ResourceDetails {

		/**
		 * The platform where the assessed resource resides
		 * Required
		 */
		source: ResourceDetailsSource;
	}

	/** Details of the resource that was assessed */
	export interface ResourceDetailsFormProperties {

		/**
		 * The platform where the assessed resource resides
		 * Required
		 */
		source: FormControl<ResourceDetailsSource | null | undefined>,
	}
	export function CreateResourceDetailsFormGroup() {
		return new FormGroup<ResourceDetailsFormProperties>({
			source: new FormControl<ResourceDetailsSource | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceDetailsSource { Azure = 0, OnPremise = 1 }


	/** A list of key value pairs that describe the resource. */
	export interface Tags {

		/** A list of key value pairs that describe the resource. */
		tags?: {[id: string]: string };
	}

	/** A list of key value pairs that describe the resource. */
	export interface TagsFormProperties {

		/** A list of key value pairs that describe the resource. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Describes an Azure tracked resource. */
	export interface TrackedResource {
	}

	/** Describes an Azure tracked resource. */
	export interface TrackedResourceFormProperties {
	}
	export function CreateTrackedResourceFormGroup() {
		return new FormGroup<TrackedResourceFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

