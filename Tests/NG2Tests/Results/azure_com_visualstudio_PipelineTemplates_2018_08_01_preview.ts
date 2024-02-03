import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Defines a pipeline template input. */
	export interface InputDescriptor {

		/** Description of what this input is used for. */
		description?: string | null;

		/**
		 * Identifier for the input.
		 * Required
		 */
		id: string;

		/** Possible values that this input can take. */
		possibleValues?: Array<InputValue>;

		/**
		 * Data type of the input.
		 * Required
		 */
		type: InputDescriptorType;
	}

	/** Defines a pipeline template input. */
	export interface InputDescriptorFormProperties {

		/** Description of what this input is used for. */
		description: FormControl<string | null | undefined>,

		/**
		 * Identifier for the input.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Data type of the input.
		 * Required
		 */
		type: FormControl<InputDescriptorType | null | undefined>,
	}
	export function CreateInputDescriptorFormGroup() {
		return new FormGroup<InputDescriptorFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<InputDescriptorType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Value for an input. */
	export interface InputValue {

		/** Display text to show for the value of an input. */
		displayValue?: string | null;

		/** Value to store for an input. */
		value?: string | null;
	}

	/** Value for an input. */
	export interface InputValueFormProperties {

		/** Display text to show for the value of an input. */
		displayValue: FormControl<string | null | undefined>,

		/** Value to store for an input. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateInputValueFormGroup() {
		return new FormGroup<InputValueFormProperties>({
			displayValue: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InputDescriptorType { String = 'String', SecureString = 'SecureString', Int = 'Int', Bool = 'Bool', Authorization = 'Authorization' }


	/** Defines a pipeline template resource. */
	export interface PipelineTemplate {

		/** Description of the pipeline which this template enables. */
		description?: string | null;

		/**
		 * Unique id of pipeline template.
		 * Required
		 */
		id: string;

		/** Inputs required by this template to create pipeline. */
		inputs?: Array<InputDescriptor>;
	}

	/** Defines a pipeline template resource. */
	export interface PipelineTemplateFormProperties {

		/** Description of the pipeline which this template enables. */
		description: FormControl<string | null | undefined>,

		/**
		 * Unique id of pipeline template.
		 * Required
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreatePipelineTemplateFormGroup() {
		return new FormGroup<PipelineTemplateFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The response to pipeline template resource list GET request. */
	export interface PipelineTemplateResourceListResult {

		/** Array of resource details. */
		value?: Array<PipelineTemplate>;
	}

	/** The response to pipeline template resource list GET request. */
	export interface PipelineTemplateResourceListResultFormProperties {
	}
	export function CreatePipelineTemplateResourceListResultFormGroup() {
		return new FormGroup<PipelineTemplateResourceListResultFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * PipelineTemplates_List
		 * Gets all pipeline templates which can be used to configure a CI/CD pipeline in a new or an existing Team Services project.
		 * Get providers/microsoft.visualstudio/pipelineTemplates
		 * @param {string} api_version API Version
		 * @return {PipelineTemplateResourceListResult} The operation succeeded. The response is a list of all pipeline templates which can be used to configure a CI/CD pipeline in a new or an existing Team Services project.
		 */
		PipelineTemplates_List(api_version: string): Observable<PipelineTemplateResourceListResult> {
			return this.http.get<PipelineTemplateResourceListResult>(this.baseUri + 'providers/microsoft.visualstudio/pipelineTemplates?api_version=' + (api_version == null ? '' : encodeURIComponent(api_version)), {});
		}
	}

}

