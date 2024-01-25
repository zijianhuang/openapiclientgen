import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Display {
		description?: string | null;
		operation?: string | null;
		provider?: string | null;
		publisher?: string | null;
		resource?: string | null;
	}
	export interface DisplayFormProperties {
		description: FormControl<string | null | undefined>,
		operation: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
		publisher: FormControl<string | null | undefined>,
		resource: FormControl<string | null | undefined>,
	}
	export function CreateDisplayFormGroup() {
		return new FormGroup<DisplayFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LogSpecification {
		blobDuration?: string | null;
		displayName?: string | null;
		name?: string | null;
	}
	export interface LogSpecificationFormProperties {
		blobDuration: FormControl<string | null | undefined>,
		displayName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLogSpecificationFormGroup() {
		return new FormGroup<LogSpecificationFormProperties>({
			blobDuration: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Operation {
		display?: Display;

		/** Required */
		isDataAction: boolean;
		name?: string | null;
		origin?: string | null;
		properties?: Properties;
	}
	export interface OperationFormProperties {

		/** Required */
		isDataAction: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		origin: FormControl<string | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			isDataAction: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			origin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Properties {
		serviceSpecification?: ServiceSpecification;
	}
	export interface PropertiesFormProperties {
	}
	export function CreatePropertiesFormGroup() {
		return new FormGroup<PropertiesFormProperties>({
		});

	}

	export interface ServiceSpecification {
		logSpecifications?: Array<LogSpecification>;
	}
	export interface ServiceSpecificationFormProperties {
	}
	export function CreateServiceSpecificationFormGroup() {
		return new FormGroup<ServiceSpecificationFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get providers/Microsoft.DynamicsTelemetry/operations
		 * @return {Array<Operation>} OK
		 */
		Operations_List(): Observable<Array<Operation>> {
			return this.http.get<Array<Operation>>(this.baseUri + 'providers/Microsoft.DynamicsTelemetry/operations', {});
		}
	}

}

