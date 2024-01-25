import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ErrorObject {
		details?: string | null;

		/** Required */
		message: string;

		/** Required */
		name: string;

		/** Required */
		url: string;
	}
	export interface ErrorObjectFormProperties {
		details: FormControl<string | null | undefined>,

		/** Required */
		message: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateErrorObjectFormGroup() {
		return new FormGroup<ErrorObjectFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StreamConfigurationObject {
		rtmp_host?: string | null;
		rtmp_key?: string | null;
		rtmp_port?: string | null;
		rtmp_url?: string | null;
	}
	export interface StreamConfigurationObjectFormProperties {
		rtmp_host: FormControl<string | null | undefined>,
		rtmp_key: FormControl<string | null | undefined>,
		rtmp_port: FormControl<string | null | undefined>,
		rtmp_url: FormControl<string | null | undefined>,
	}
	export function CreateStreamConfigurationObjectFormGroup() {
		return new FormGroup<StreamConfigurationObjectFormProperties>({
			rtmp_host: new FormControl<string | null | undefined>(undefined),
			rtmp_key: new FormControl<string | null | undefined>(undefined),
			rtmp_port: new FormControl<string | null | undefined>(undefined),
			rtmp_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UploadParameterObject {
		AWSAccessKeyId?: string | null;
		'Content-Type'?: string | null;
		Policy?: string | null;
		Signature?: string | null;
		acl?: string | null;
		action?: string | null;
		key?: string | null;
	}
	export interface UploadParameterObjectFormProperties {
		AWSAccessKeyId: FormControl<string | null | undefined>,
		'Content-Type': FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
		Signature: FormControl<string | null | undefined>,
		acl: FormControl<string | null | undefined>,
		action: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
	}
	export function CreateUploadParameterObjectFormGroup() {
		return new FormGroup<UploadParameterObjectFormProperties>({
			AWSAccessKeyId: new FormControl<string | null | undefined>(undefined),
			'Content-Type': new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
			Signature: new FormControl<string | null | undefined>(undefined),
			acl: new FormControl<string | null | undefined>(undefined),
			action: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VideoObject {

		/** Required */
		created_at: string;
		input?: string | null;
		outputs?: string | null;

		/** Required */
		state: string;

		/** Required */
		updated_at: string;

		/** Required */
		userdata: string;

		/** Required */
		video_id: string;
	}
	export interface VideoObjectFormProperties {

		/** Required */
		created_at: FormControl<string | null | undefined>,
		input: FormControl<string | null | undefined>,
		outputs: FormControl<string | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		updated_at: FormControl<string | null | undefined>,

		/** Required */
		userdata: FormControl<string | null | undefined>,

		/** Required */
		video_id: FormControl<string | null | undefined>,
	}
	export function CreateVideoObjectFormGroup() {
		return new FormGroup<VideoObjectFormProperties>({
			created_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			input: new FormControl<string | null | undefined>(undefined),
			outputs: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updated_at: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userdata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			video_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

