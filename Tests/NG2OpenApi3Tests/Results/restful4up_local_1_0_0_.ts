import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Apply_yara_rule {

		/** error message, if YARA failed */
		error_message?: string | null;

		/**
		 * is operation success
		 * Required
		 */
		is_success: boolean;

		/** matched YARA rules */
		matched_yara_rules?: Array<string>;

		/**
		 * Yara command executed
		 * Required
		 */
		yara_command: string;
	}
	export interface Apply_yara_ruleFormProperties {

		/** error message, if YARA failed */
		error_message: FormControl<string | null | undefined>,

		/**
		 * is operation success
		 * Required
		 */
		is_success: FormControl<boolean | null | undefined>,

		/**
		 * Yara command executed
		 * Required
		 */
		yara_command: FormControl<string | null | undefined>,
	}
	export function CreateApply_yara_ruleFormGroup() {
		return new FormGroup<Apply_yara_ruleFormProperties>({
			error_message: new FormControl<string | null | undefined>(undefined),
			is_success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			yara_command: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Error {

		/** Required */
		message: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface ErrorFormProperties {

		/** Required */
		message: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Yara {

		/**
		 * Yara rule meta data section
		 * Required
		 */
		meta: YaraMeta;

		/**
		 * Yara rule name
		 * Required
		 */
		name: string;

		/**
		 * Yara rule string section
		 * Required
		 */
		strings: Array<string>;
	}
	export interface YaraFormProperties {

		/**
		 * Yara rule name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateYaraFormGroup() {
		return new FormGroup<YaraFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface YaraMeta {

		/**
		 * Date of the YARA rule created
		 * Required
		 */
		date: string;

		/**
		 * MD5 check sum
		 * Required
		 */
		md5sum: string;

		/**
		 * SHA 256 check sum
		 * Required
		 */
		sha256sum: string;

		/**
		 * SHA 512 check sum
		 * Required
		 */
		sha512sum: string;
	}
	export interface YaraMetaFormProperties {

		/**
		 * Date of the YARA rule created
		 * Required
		 */
		date: FormControl<string | null | undefined>,

		/**
		 * MD5 check sum
		 * Required
		 */
		md5sum: FormControl<string | null | undefined>,

		/**
		 * SHA 256 check sum
		 * Required
		 */
		sha256sum: FormControl<string | null | undefined>,

		/**
		 * SHA 512 check sum
		 * Required
		 */
		sha512sum: FormControl<string | null | undefined>,
	}
	export function CreateYaraMetaFormGroup() {
		return new FormGroup<YaraMetaFormProperties>({
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			md5sum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sha256sum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sha512sum: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

