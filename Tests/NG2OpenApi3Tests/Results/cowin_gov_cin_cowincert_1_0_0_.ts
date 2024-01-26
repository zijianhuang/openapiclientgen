import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CertificateRequest {
		beneficiaryId?: string | null;
		mobile?: string | null;
	}
	export interface CertificateRequestFormProperties {
		beneficiaryId: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
	}
	export function CreateCertificateRequestFormGroup() {
		return new FormGroup<CertificateRequestFormProperties>({
			beneficiaryId: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Download the certificate in pdf format
		 * Post pdf/certificate
		 * @return {void} 
		 */
		GetCertificatePdf(requestBody: CertificateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'pdf/certificate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

