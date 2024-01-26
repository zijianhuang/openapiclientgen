import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Importer-Exporter Code (IEC) Verification API.
		 * Description of Importer-Exporter Code (IEC) Verification API.
		 * Get v1/iec/{iec}
		 * @param {string} iec Importer-Exporter code
		 * @return {Importer_Exporter_Code_Verification_APIReturn} successful operation
		 */
		Importer_Exporter_Code_Verification_API(iec: string): Observable<Importer_Exporter_Code_Verification_APIReturn> {
			return this.http.get<Importer_Exporter_Code_Verification_APIReturn>(this.baseUri + 'v1/iec/' + (iec == null ? '' : encodeURIComponent(iec)), {});
		}
	}

	export interface Importer_Exporter_Code_Verification_APIReturn {

		/**
		 * Required
		 * Min length: 1
		 */
		addressLine1: string;

		/** Required */
		addressLine2: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Importer_Exporter_Code_Verification_APIReturnBranch: Array<Importer_Exporter_Code_Verification_APIReturnBranch>;

		/**
		 * Required
		 * Min length: 1
		 */
		city: string;

		/** Required */
		dataAsOn: Date;

		/**
		 * Required
		 * Minimum items: 1
		 */
		Importer_Exporter_Code_Verification_APIReturnDirectors: Array<Importer_Exporter_Code_Verification_APIReturnDirectors>;

		/**
		 * Required
		 * Min length: 1
		 */
		entityName: string;

		/**
		 * Required
		 * Min length: 1
		 */
		exporterType: string;

		/**
		 * Required
		 * Min length: 1
		 */
		iec: string;

		/**
		 * Required
		 * Min length: 1
		 */
		iecIssueDate: string;

		/** Required */
		iecModificationDate: string;

		/**
		 * Required
		 * Min length: 0
		 */
		iecStatus: string;

		/**
		 * Required
		 * Min length: 1
		 */
		natureOfConcern: string;

		/**
		 * Required
		 * Min length: 1
		 */
		pan: string;

		/**
		 * Required
		 * Min length: 1
		 */
		pin: string;

		/**
		 * Required
		 * Min length: 1
		 */
		state: string;
	}
	export interface Importer_Exporter_Code_Verification_APIReturnFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		addressLine1: FormControl<string | null | undefined>,

		/** Required */
		addressLine2: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		city: FormControl<string | null | undefined>,

		/** Required */
		dataAsOn: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		entityName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		exporterType: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		iec: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		iecIssueDate: FormControl<string | null | undefined>,

		/** Required */
		iecModificationDate: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 0
		 */
		iecStatus: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		natureOfConcern: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		pan: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		pin: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateImporter_Exporter_Code_Verification_APIReturnFormGroup() {
		return new FormGroup<Importer_Exporter_Code_Verification_APIReturnFormProperties>({
			addressLine1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			addressLine2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			dataAsOn: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			entityName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			exporterType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			iec: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			iecIssueDate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			iecModificationDate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			iecStatus: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0)]),
			natureOfConcern: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			pan: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			pin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface Importer_Exporter_Code_Verification_APIReturnBranch {

		/**
		 * Required
		 * Min length: 1
		 */
		badd1: string;

		/** Required */
		badd2: string;

		/**
		 * Required
		 * Min length: 1
		 */
		branchCode: string;

		/**
		 * Required
		 * Min length: 1
		 */
		city: string;

		/**
		 * Required
		 * Min length: 1
		 */
		pin: string;

		/**
		 * Required
		 * Min length: 1
		 */
		state: string;
	}
	export interface Importer_Exporter_Code_Verification_APIReturnBranchFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		badd1: FormControl<string | null | undefined>,

		/** Required */
		badd2: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		branchCode: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		pin: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		state: FormControl<string | null | undefined>,
	}
	export function CreateImporter_Exporter_Code_Verification_APIReturnBranchFormGroup() {
		return new FormGroup<Importer_Exporter_Code_Verification_APIReturnBranchFormProperties>({
			badd1: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			badd2: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			branchCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			pin: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface Importer_Exporter_Code_Verification_APIReturnDirectors {

		/**
		 * Required
		 * Min length: 1
		 */
		name: string;
	}
	export interface Importer_Exporter_Code_Verification_APIReturnDirectorsFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateImporter_Exporter_Code_Verification_APIReturnDirectorsFormGroup() {
		return new FormGroup<Importer_Exporter_Code_Verification_APIReturnDirectorsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

}

