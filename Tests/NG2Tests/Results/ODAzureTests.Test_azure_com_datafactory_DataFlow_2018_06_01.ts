import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Azure Data Factory nested object which contains a flow with data movements and transformations. */
	export interface DataFlow {

		/** List of tags that can be used for describing the data flow. */
		annotations?: Array<string>;

		/** The description of the data flow. */
		description?: string | null;

		/** The folder that this data flow is in. If not specified, Data flow will appear at the root level. */
		folder?: DataFlowFolder;

		/** Type of data flow. */
		type?: string | null;
	}

	/** Azure Data Factory nested object which contains a flow with data movements and transformations. */
	export interface DataFlowFormProperties {

		/** The description of the data flow. */
		description: FormControl<string | null | undefined>,

		/** Type of data flow. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowFormGroup() {
		return new FormGroup<DataFlowFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DataFlowFolder {

		/** The name of the folder that this data flow is in. */
		name?: string | null;
	}
	export interface DataFlowFolderFormProperties {

		/** The name of the folder that this data flow is in. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDataFlowFolderFormGroup() {
		return new FormGroup<DataFlowFolderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Transformation for data flow sink. */
	export interface DataFlowSink extends Transformation {

		/** Dataset reference type. */
		dataset?: any;
	}

	/** Transformation for data flow sink. */
	export interface DataFlowSinkFormProperties extends TransformationFormProperties {

		/** Dataset reference type. */
		dataset: FormControl<any | null | undefined>,
	}
	export function CreateDataFlowSinkFormGroup() {
		return new FormGroup<DataFlowSinkFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataset: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Transformation for data flow source. */
	export interface DataFlowSource extends Transformation {

		/** Dataset reference type. */
		dataset?: any;
	}

	/** Transformation for data flow source. */
	export interface DataFlowSourceFormProperties extends TransformationFormProperties {

		/** Dataset reference type. */
		dataset: FormControl<any | null | undefined>,
	}
	export function CreateDataFlowSourceFormGroup() {
		return new FormGroup<DataFlowSourceFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataset: new FormControl<any | null | undefined>(undefined),
		});

	}


	/** Mapping data flow. */
	export interface MappingDataFlow {

		/** Mapping data flow type properties. */
		typeProperties?: MappingDataFlowTypeProperties;
	}

	/** Mapping data flow. */
	export interface MappingDataFlowFormProperties {
	}
	export function CreateMappingDataFlowFormGroup() {
		return new FormGroup<MappingDataFlowFormProperties>({
		});

	}


	/** Mapping data flow type properties. */
	export interface MappingDataFlowTypeProperties {

		/** DataFlow script. */
		script?: string | null;

		/** List of sinks in data flow. */
		sinks?: Array<DataFlowSink>;

		/** List of sources in data flow. */
		sources?: Array<DataFlowSource>;

		/** List of transformations in data flow. */
		transformations?: Array<Transformation>;
	}

	/** Mapping data flow type properties. */
	export interface MappingDataFlowTypePropertiesFormProperties {

		/** DataFlow script. */
		script: FormControl<string | null | undefined>,
	}
	export function CreateMappingDataFlowTypePropertiesFormGroup() {
		return new FormGroup<MappingDataFlowTypePropertiesFormProperties>({
			script: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data flow transformation. */
	export interface Transformation {

		/** Transformation description. */
		description?: string | null;

		/**
		 * Transformation name.
		 * Required
		 */
		name: string;
	}

	/** A data flow transformation. */
	export interface TransformationFormProperties {

		/** Transformation description. */
		description: FormControl<string | null | undefined>,

		/**
		 * Transformation name.
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTransformationFormGroup() {
		return new FormGroup<TransformationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

