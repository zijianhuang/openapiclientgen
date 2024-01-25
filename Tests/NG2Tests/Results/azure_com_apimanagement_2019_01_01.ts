import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Error Field contract. */
	export interface ErrorFieldContract {

		/** Property level error code. */
		code?: string | null;

		/** Human-readable representation of property-level error. */
		message?: string | null;

		/** Property name. */
		target?: string | null;
	}

	/** Error Field contract. */
	export interface ErrorFieldContractFormProperties {

		/** Property level error code. */
		code: FormControl<string | null | undefined>,

		/** Human-readable representation of property-level error. */
		message: FormControl<string | null | undefined>,

		/** Property name. */
		target: FormControl<string | null | undefined>,
	}
	export function CreateErrorFieldContractFormGroup() {
		return new FormGroup<ErrorFieldContractFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error Response. */
	export interface ErrorResponse {

		/** Error Body contract. */
		error?: ErrorResponseBody;
	}

	/** Error Response. */
	export interface ErrorResponseFormProperties {
	}
	export function CreateErrorResponseFormGroup() {
		return new FormGroup<ErrorResponseFormProperties>({
		});

	}


	/** Error Body contract. */
	export interface ErrorResponseBody {

		/** Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. */
		code?: string | null;

		/** The list of invalid fields send in request, in case of validation error. */
		details?: Array<ErrorFieldContract>;

		/** Human-readable representation of the error. */
		message?: string | null;
	}

	/** Error Body contract. */
	export interface ErrorResponseBodyFormProperties {

		/** Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. */
		code: FormControl<string | null | undefined>,

		/** Human-readable representation of the error. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorResponseBodyFormGroup() {
		return new FormGroup<ErrorResponseBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Region profile. */
	export interface RegionContract {

		/** whether Region is deleted. */
		isDeleted?: boolean | null;

		/** whether Region is the master region. */
		isMasterRegion?: boolean | null;

		/** Region name. */
		name?: string | null;
	}

	/** Region profile. */
	export interface RegionContractFormProperties {

		/** whether Region is deleted. */
		isDeleted: FormControl<boolean | null | undefined>,

		/** whether Region is the master region. */
		isMasterRegion: FormControl<boolean | null | undefined>,

		/** Region name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRegionContractFormGroup() {
		return new FormGroup<RegionContractFormProperties>({
			isDeleted: new FormControl<boolean | null | undefined>(undefined),
			isMasterRegion: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Lists Regions operation response details. */
	export interface RegionListResult {

		/** Total record count number across all pages. */
		count?: number | null;

		/** Next page link if any. */
		nextLink?: string | null;

		/** Lists of Regions. */
		value?: Array<RegionContract>;
	}

	/** Lists Regions operation response details. */
	export interface RegionListResultFormProperties {

		/** Total record count number across all pages. */
		count: FormControl<number | null | undefined>,

		/** Next page link if any. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateRegionListResultFormGroup() {
		return new FormGroup<RegionListResultFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Resource definition. */
	export interface Resource {

		/** Resource ID. */
		id?: string | null;

		/** Resource name. */
		name?: string | null;

		/** Resource type for API Management resource. */
		type?: string | null;
	}

	/** The Resource definition. */
	export interface ResourceFormProperties {

		/** Resource ID. */
		id: FormControl<string | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,

		/** Resource type for API Management resource. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

