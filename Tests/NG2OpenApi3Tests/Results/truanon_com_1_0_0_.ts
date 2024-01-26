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
		 * Get Profile
		 * get_profile Private API: Request confirmed profile data for your unique member ID
		 * Get api/get_profile
		 * @param {string} id This is your unique username or member ID
		 * @param {string} service The service name given to you by TruAnon
		 * @return {void} 
		 */
		GetProfile(id: string | null | undefined, service: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/get_profile?id=' + (id == null ? '' : encodeURIComponent(id)) + '&service=' + (service == null ? '' : encodeURIComponent(service)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Token
		 * request_token Private API: Request a Proof token to let the member confirm in a popup interface
		 * {"id":"qjgblv72bzzio","type":"Proof","active":true,"name":"New Proof"}
		 * Step 2. Create a verifyProfile Public Web link: Use the Proof token id as the token argument in your public URL used to open a new target popup. This activity is where members may confirm immediately.
		 * https://staging.truanon.com/verifyProfile?id=john_doe&service=securecannabisalliance&token=qjgblv72bzzio
		 * Get api/request_token
		 * @param {string} id This is your unique username or member ID
		 * @param {string} service The service name given to you by TruAnon
		 * @return {void} 
		 */
		GetToken(id: string | null | undefined, service: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/request_token?id=' + (id == null ? '' : encodeURIComponent(id)) + '&service=' + (service == null ? '' : encodeURIComponent(service)), { observe: 'response', responseType: 'text' });
		}
	}

}

