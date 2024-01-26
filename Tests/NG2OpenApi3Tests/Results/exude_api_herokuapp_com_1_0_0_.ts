import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ExudeBean {
		data?: string | null;
		links?: Array<string>;
	}
	export interface ExudeBeanFormProperties {
		data: FormControl<string | null | undefined>,
	}
	export function CreateExudeBeanFormGroup() {
		return new FormGroup<ExudeBeanFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExudeResponseBean {
		data?: string | null;
	}
	export interface ExudeResponseBeanFormProperties {
		data: FormControl<string | null | undefined>,
	}
	export function CreateExudeResponseBeanFormGroup() {
		return new FormGroup<ExudeResponseBeanFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}
	}

}

