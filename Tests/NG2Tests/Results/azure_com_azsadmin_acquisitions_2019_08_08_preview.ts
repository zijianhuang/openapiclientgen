import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The acquisition of the page BLOB. */
	export interface Acquisition {

		/** The ID of page BLOB acquisition. */
		acquisitionid?: string | null;

		/** The name of the page BLOB. */
		blob?: string | null;

		/** The container associated with the page BLOB. */
		container?: string | null;

		/** The file path of the page BLOB file on storage cluster. */
		filePath?: string | null;

		/** The file path unc of the page BLOB file on storage cluster. */
		filePathUnc?: string | null;

		/** The maximum size of the page BLOB. */
		maximumblobsize?: number | null;

		/** The status of page BLOB acquisition. */
		status?: AcquisitionStatus | null;

		/** The storage account that holds the page BLOB. */
		storageaccount?: string | null;

		/** ID of the subscription associated with the page BLOB. */
		susbcriptionid?: string | null;
	}

	/** The acquisition of the page BLOB. */
	export interface AcquisitionFormProperties {

		/** The ID of page BLOB acquisition. */
		acquisitionid: FormControl<string | null | undefined>,

		/** The name of the page BLOB. */
		blob: FormControl<string | null | undefined>,

		/** The container associated with the page BLOB. */
		container: FormControl<string | null | undefined>,

		/** The file path of the page BLOB file on storage cluster. */
		filePath: FormControl<string | null | undefined>,

		/** The file path unc of the page BLOB file on storage cluster. */
		filePathUnc: FormControl<string | null | undefined>,

		/** The maximum size of the page BLOB. */
		maximumblobsize: FormControl<number | null | undefined>,

		/** The status of page BLOB acquisition. */
		status: FormControl<AcquisitionStatus | null | undefined>,

		/** The storage account that holds the page BLOB. */
		storageaccount: FormControl<string | null | undefined>,

		/** ID of the subscription associated with the page BLOB. */
		susbcriptionid: FormControl<string | null | undefined>,
	}
	export function CreateAcquisitionFormGroup() {
		return new FormGroup<AcquisitionFormProperties>({
			acquisitionid: new FormControl<string | null | undefined>(undefined),
			blob: new FormControl<string | null | undefined>(undefined),
			container: new FormControl<string | null | undefined>(undefined),
			filePath: new FormControl<string | null | undefined>(undefined),
			filePathUnc: new FormControl<string | null | undefined>(undefined),
			maximumblobsize: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AcquisitionStatus | null | undefined>(undefined),
			storageaccount: new FormControl<string | null | undefined>(undefined),
			susbcriptionid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AcquisitionStatus { Unknown = 'Unknown', NotAcquired = 'NotAcquired', Pending = 'Pending', Success = 'Success', Failed = 'Failed' }


	/** The list of page BLOB acquisitions. */
	export interface AcquisitionList {

		/** List of acquisitions. */
		value?: Array<Acquisition>;
	}

	/** The list of page BLOB acquisitions. */
	export interface AcquisitionListFormProperties {
	}
	export function CreateAcquisitionListFormGroup() {
		return new FormGroup<AcquisitionListFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of BLOB acquisitions.
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Storage.Admin/locations/{location}/acquisitions
		 * @param {string} subscriptionId Subscription Id.
		 * @param {string} location Resource location.
		 * @param {string} api_version REST Api Version.
		 * @return {AcquisitionList} OK -- The list of acquisitions has been returned.
		 */
		Acquisitions_List(subscriptionId: string, location: string, api_version: string): Observable<AcquisitionList> {
			return this.http.get<AcquisitionList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Storage.Admin/locations/' + (location == null ? '' : encodeURIComponent(location)) + '/acquisitions&api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

