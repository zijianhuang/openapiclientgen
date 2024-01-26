import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Country {

		/** Required */
		value: string;
	}
	export interface CountryFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreatenewsessionRequest {

		/** Required */
		public: Public;
	}
	export interface CreatenewsessionRequestFormProperties {
	}
	export function CreateCreatenewsessionRequestFormGroup() {
		return new FormGroup<CreatenewsessionRequestFormProperties>({
		});

	}

	export interface Public {

		/** Required */
		country: Country;

		/** Required */
		postalCode: PostalCode;
	}
	export interface PublicFormProperties {
	}
	export function CreatePublicFormGroup() {
		return new FormGroup<PublicFormProperties>({
		});

	}

	export interface PostalCode {

		/** Required */
		value: string;
	}
	export interface PostalCodeFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePostalCodeFormGroup() {
		return new FormGroup<PostalCodeFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EditsessionRequest {

		/** Required */
		public: Public1;
	}
	export interface EditsessionRequestFormProperties {
	}
	export function CreateEditsessionRequestFormGroup() {
		return new FormGroup<EditsessionRequestFormProperties>({
		});

	}

	export interface Public1 {

		/** Required */
		newValue: NewValue;
	}
	export interface Public1FormProperties {
	}
	export function CreatePublic1FormGroup() {
		return new FormGroup<Public1FormProperties>({
		});

	}

	export interface NewValue {

		/** Required */
		value: string;
	}
	export interface NewValueFormProperties {

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateNewValueFormGroup() {
		return new FormGroup<NewValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModifysessiongettingspecificparametersRequest {

		/** Required */
		public: Public;
	}
	export interface ModifysessiongettingspecificparametersRequestFormProperties {
	}
	export function CreateModifysessiongettingspecificparametersRequestFormGroup() {
		return new FormGroup<ModifysessiongettingspecificparametersRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get Segment
		 * You can add certain public fields in the query string and the system will attempt to fulfill it. Values such as `cultureInfo` and `utm` are overwriteable, just keep in mind such changes will not be reflected in the client's session.
		 * If you wish to change the value on the session (and thus be reflected on the segment without special query strings), then use the PATCH request to session.
		 * Get segments
		 * @return {void} 
		 */
		GetSegment(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'segments', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Session
		 * Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`. So if you wish to recover the data sent on the previous request, it should be `public.country,public.postalCode`.
		 * > The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.
		 * > If you want to retrieve all keys from Session Manager, you can use the wildcard operator (`*`) in your request (i.e. `?items=*`).
		 * Get sessions
		 * @param {string} items Items are the keys of the values you wish to get. It follows the format `namespace1.key1,namespace2.key2`
		 * @return {void} 
		 */
		GetSession(items: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'sessions?items=' + (items == null ? '' : encodeURIComponent(items)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Edit session
		 * This works exactly the same as the POST create session, but when the request is sent with a vtex_session cookie, it retrieves the session first and then applies the changes instead of generating a new one.
		 * As with the `POST` method, only keys inside the public namespace on the body are considered, and query parameters are automatically added to the public namespace.
		 * > The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.
		 * Patch sessions
		 * @return {void} 
		 */
		Editsession(requestBody: EditsessionRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create new session
		 * The response should contain a session cookie. Further `POST` or `PATCH` requests will edit the existing session rather than creating a new one. All parameters in the body that are not within the public namespace will be ignored. Query string items will automatically be added to the public namespace. Cookies relevant to the session manager execution are also recorded.
		 * > The sessions API uses the `vtex_session` cookie to store the data required to identify the user and the session. This cookie is stored in the user's browser when the session is created and sent automatically in every request to that domain. You will have to reproduce that in order for it to work outside of a browser environment.
		 * Post sessions
		 * @return {void} 
		 */
		Createnewsession(requestBody: CreatenewsessionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sessions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

