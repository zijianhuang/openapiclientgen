import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface _200_OK {
		dkimKeys?: Array<string>;

		/** Required */
		status: _200_OKStatus;
	}
	export interface _200_OKFormProperties {

		/** Required */
		status: FormControl<_200_OKStatus | null | undefined>,
	}
	export function Create_200_OKFormGroup() {
		return new FormGroup<_200_OKFormProperties>({
			status: new FormControl<_200_OKStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum _200_OKStatus { emailNotFound = 'emailNotFound', emailNotVerified = 'emailNotVerified', created = 'created' }

	export interface _401_Unauthorized {

		/** Required */
		status: _401_UnauthorizedStatus;

		/** Required */
		title: _401_UnauthorizedTitle;

		/** Required */
		traceId: string;

		/** Required */
		type: _401_UnauthorizedType;
	}
	export interface _401_UnauthorizedFormProperties {

		/** Required */
		status: FormControl<_401_UnauthorizedStatus | null | undefined>,

		/** Required */
		title: FormControl<_401_UnauthorizedTitle | null | undefined>,

		/** Required */
		traceId: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<_401_UnauthorizedType | null | undefined>,
	}
	export function Create_401_UnauthorizedFormGroup() {
		return new FormGroup<_401_UnauthorizedFormProperties>({
			status: new FormControl<_401_UnauthorizedStatus | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<_401_UnauthorizedTitle | null | undefined>(undefined, [Validators.required]),
			traceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^00-[0-9a-f]{32}-[0-9a-f]{16}-00$')]),
			type: new FormControl<_401_UnauthorizedType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum _401_UnauthorizedStatus { _401 = 0 }

	export enum _401_UnauthorizedTitle { Unauthorized = 'Unauthorized' }

	export enum _401_UnauthorizedType { 'https://tools.ietf.org/html/rfc7235#section-3.1' = 'https://tools.ietf.org/html/rfc7235#section-3.1' }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Generate DKIM keys
		 * Create DKIM keys for sender that was setup in VTEX mail servers
		 * Post api/mail-service/pvt/providers/{EmailProvider}/dkim
		 * @param {string} EmailProvider E-mail address for sender that was setup in VTEX mail servers
		 * @return {_200_OK} OK
		 */
		CreateDKIM(EmailProvider: string): Observable<_200_OK> {
			return this.http.post<_200_OK>(this.baseUri + 'api/mail-service/pvt/providers/' + (EmailProvider == null ? '' : encodeURIComponent(EmailProvider)) + '/dkim', null, {});
		}
	}

}

