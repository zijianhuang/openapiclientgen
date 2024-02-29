import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiCredentials {
		key?: string | null;
		serial?: string | null;
	}
	export interface ApiCredentialsFormProperties {
		key: FormControl<string | null | undefined>,
		serial: FormControl<string | null | undefined>,
	}
	export function CreateApiCredentialsFormGroup() {
		return new FormGroup<ApiCredentialsFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			serial: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiKey {
		key?: string | null;
	}
	export interface ApiKeyFormProperties {
		key: FormControl<string | null | undefined>,
	}
	export function CreateApiKeyFormGroup() {
		return new FormGroup<ApiKeyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CountOf {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count?: number | null;
	}
	export interface CountOfFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		count: FormControl<number | null | undefined>,
	}
	export function CreateCountOfFormGroup() {
		return new FormGroup<CountOfFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CurrentKey {
		current?: boolean | null;
	}
	export interface CurrentKeyFormProperties {
		current: FormControl<boolean | null | undefined>,
	}
	export function CreateCurrentKeyFormGroup() {
		return new FormGroup<CurrentKeyFormProperties>({
			current: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Expiry {
		expires?: Date | null;
		time?: string | null;
	}
	export interface ExpiryFormProperties {
		expires: FormControl<Date | null | undefined>,
		time: FormControl<string | null | undefined>,
	}
	export function CreateExpiryFormGroup() {
		return new FormGroup<ExpiryFormProperties>({
			expires: new FormControl<Date | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FindCredentials {
		key?: string | null;
		serial?: string | null;
	}
	export interface FindCredentialsFormProperties {
		key: FormControl<string | null | undefined>,
		serial: FormControl<string | null | undefined>,
	}
	export function CreateFindCredentialsFormGroup() {
		return new FormGroup<FindCredentialsFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			serial: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface KeyView {

		/**
		 * Required
		 * Min length: 1
		 */
		action: string;

		/** Required */
		callbackOnModify: boolean;

		/**
		 * Min length: 0
		 * Max length: 800
		 */
		callbackUrl?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		commenced: Date;
		created?: Date | null;
		current?: boolean | null;
		custom?: any;

		/**
		 * Required
		 * Min length: 1
		 */
		frequency: string;

		/**
		 * Min length: 0
		 * Max length: 80
		 */
		name?: string | null;
		serial?: string | null;
		updated?: Date | null;
	}
	export interface KeyViewFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		action: FormControl<string | null | undefined>,

		/** Required */
		callbackOnModify: FormControl<boolean | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 800
		 */
		callbackUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		commenced: FormControl<Date | null | undefined>,
		created: FormControl<Date | null | undefined>,
		current: FormControl<boolean | null | undefined>,
		custom: FormControl<any | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		frequency: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 80
		 */
		name: FormControl<string | null | undefined>,
		serial: FormControl<string | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateKeyViewFormGroup() {
		return new FormGroup<KeyViewFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			callbackOnModify: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(800)]),
			commenced: new FormControl<Date | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			created: new FormControl<Date | null | undefined>(undefined),
			current: new FormControl<boolean | null | undefined>(undefined),
			custom: new FormControl<any | null | undefined>(undefined),
			frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(80)]),
			serial: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ProductCreateModify {
		custom?: any;
		key?: string | null;
		name?: string | null;
		serial?: string | null;
	}
	export interface ProductCreateModifyFormProperties {
		custom: FormControl<any | null | undefined>,
		key: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		serial: FormControl<string | null | undefined>,
	}
	export function CreateProductCreateModifyFormGroup() {
		return new FormGroup<ProductCreateModifyFormProperties>({
			custom: new FormControl<any | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serial: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductView {
		created?: Date | null;
		custom?: any;

		/**
		 * Min length: 0
		 * Max length: 80
		 */
		name?: string | null;
		serial?: string | null;
		subscriptions?: Array<SubscriptionView>;
		updated?: Date | null;
	}
	export interface ProductViewFormProperties {
		created: FormControl<Date | null | undefined>,
		custom: FormControl<any | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 80
		 */
		name: FormControl<string | null | undefined>,
		serial: FormControl<string | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateProductViewFormGroup() {
		return new FormGroup<ProductViewFormProperties>({
			created: new FormControl<Date | null | undefined>(undefined),
			custom: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(80)]),
			serial: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SubscriptionView {

		/**
		 * Required
		 * Min length: 1
		 */
		action: string;

		/** Required */
		callbackOnModify: boolean;

		/**
		 * Min length: 0
		 * Max length: 800
		 */
		callbackUrl?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		commenced: Date;
		created?: Date | null;
		custom?: any;

		/**
		 * Required
		 * Min length: 1
		 */
		frequency: string;
		keys?: Array<KeyView>;

		/**
		 * Min length: 0
		 * Max length: 80
		 */
		name?: string | null;
		updated?: Date | null;
	}
	export interface SubscriptionViewFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		action: FormControl<string | null | undefined>,

		/** Required */
		callbackOnModify: FormControl<boolean | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 800
		 */
		callbackUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		commenced: FormControl<Date | null | undefined>,
		created: FormControl<Date | null | undefined>,
		custom: FormControl<any | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		frequency: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 80
		 */
		name: FormControl<string | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateSubscriptionViewFormGroup() {
		return new FormGroup<SubscriptionViewFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			callbackOnModify: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(800)]),
			commenced: new FormControl<Date | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			created: new FormControl<Date | null | undefined>(undefined),
			custom: new FormControl<any | null | undefined>(undefined),
			frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(80)]),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SubscriptionCreateModify {

		/**
		 * Required
		 * Min length: 1
		 */
		action: string;
		callbackOnModify?: boolean | null;

		/**
		 * Min length: 0
		 * Max length: 800
		 */
		callbackUrl?: string | null;
		custom?: any;

		/**
		 * Required
		 * Min length: 1
		 */
		frequency: string;
		key?: string | null;

		/**
		 * Min length: 0
		 * Max length: 80
		 */
		name?: string | null;
		serial?: string | null;
		startFrom?: string | null;
	}
	export interface SubscriptionCreateModifyFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		action: FormControl<string | null | undefined>,
		callbackOnModify: FormControl<boolean | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 800
		 */
		callbackUrl: FormControl<string | null | undefined>,
		custom: FormControl<any | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		frequency: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,

		/**
		 * Min length: 0
		 * Max length: 80
		 */
		name: FormControl<string | null | undefined>,
		serial: FormControl<string | null | undefined>,
		startFrom: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionCreateModifyFormGroup() {
		return new FormGroup<SubscriptionCreateModifyFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			callbackOnModify: new FormControl<boolean | null | undefined>(undefined),
			callbackUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(800)]),
			custom: new FormControl<any | null | undefined>(undefined),
			frequency: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(80)]),
			serial: new FormControl<string | null | undefined>(undefined),
			startFrom: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get v1/KeysApi/Current/{serial}
		 */
		KeysApi_Current(serial: string): Observable<CurrentKey> {
			return this.http.get<CurrentKey>(this.baseUri + 'v1/KeysApi/Current/' + (serial == null ? '' : encodeURIComponent(serial)), {});
		}

		/**
		 * Get v1/KeysApi/Custom/{serial}
		 * @return {void} 
		 */
		KeysApi_Custom(serial: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/KeysApi/Custom/' + (serial == null ? '' : encodeURIComponent(serial)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get v1/KeysApi/Expiry/{serial}
		 */
		KeysApi_Expiry(serial: string): Observable<Expiry> {
			return this.http.get<Expiry>(this.baseUri + 'v1/KeysApi/Expiry/' + (serial == null ? '' : encodeURIComponent(serial)), {});
		}

		/**
		 * Get v1/KeysApi/Find/{serial}
		 */
		KeysApi_Find(serial: string): Observable<KeyView> {
			return this.http.get<KeyView>(this.baseUri + 'v1/KeysApi/Find/' + (serial == null ? '' : encodeURIComponent(serial)), {});
		}

		/**
		 * Patch v1/ProductsApi
		 * @return {void} 
		 */
		ProductsApi_PatchProduct(requestBody: ProductCreateModify): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/ProductsApi', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/ProductsApi
		 * @return {void} 
		 */
		ProductsApi_PatchProduct2(requestBody: ProductCreateModify): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/ProductsApi', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/ProductsApi/Count
		 */
		ProductsApi_Count(requestBody: ApiKey): Observable<CountOf> {
			return this.http.post<CountOf>(this.baseUri + 'v1/ProductsApi/Count', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1/ProductsApi/Find
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ProductsApi_Find(page: number | null | undefined, requestBody: FindCredentials): Observable<ProductView> {
			return this.http.post<ProductView>(this.baseUri + 'v1/ProductsApi/Find?page=' + page, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1/ProductsApi/List
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 */
		ProductsApi_List(page: number | null | undefined, requestBody: ApiKey): Observable<Array<ProductView>> {
			return this.http.post<Array<ProductView>>(this.baseUri + 'v1/ProductsApi/List?page=' + page, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1/ProductsApi/Save
		 * @return {void} 
		 */
		ProductsApi_Save(requestBody: ProductCreateModify): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/ProductsApi/Save', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/ProductsApi/{serial}
		 * @return {void} 
		 */
		ProductsApi_DeleteProduct(serial: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/ProductsApi/' + (serial == null ? '' : encodeURIComponent(serial)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/ProductsApi/{serial}
		 * @return {void} 
		 */
		ProductsApi_DeleteProduct2(serial: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/ProductsApi/' + (serial == null ? '' : encodeURIComponent(serial)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/SubscriptionsApi
		 * @return {void} 
		 */
		SubscriptionsApi_PutSubscription2(requestBody: SubscriptionCreateModify): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/SubscriptionsApi', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put v1/SubscriptionsApi
		 * @return {void} 
		 */
		SubscriptionsApi_PutSubscription(requestBody: SubscriptionCreateModify): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/SubscriptionsApi', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/SubscriptionsApi/Count
		 */
		SubscriptionsApi_Count(requestBody: ApiCredentials): Observable<CountOf> {
			return this.http.post<CountOf>(this.baseUri + 'v1/SubscriptionsApi/Count', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Patch v1/SubscriptionsApi/Disable
		 * @return {void} 
		 */
		SubscriptionsApi_Disable(requestBody: FindCredentials): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/SubscriptionsApi/Disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/SubscriptionsApi/Disable
		 * @return {void} 
		 */
		SubscriptionsApi_Disable2(requestBody: FindCredentials): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/SubscriptionsApi/Disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch v1/SubscriptionsApi/Enable
		 * @return {void} 
		 */
		SubscriptionsApi_Enable(requestBody: FindCredentials): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/SubscriptionsApi/Enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/SubscriptionsApi/Enable
		 * @return {void} 
		 */
		SubscriptionsApi_Enable2(requestBody: FindCredentials): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/SubscriptionsApi/Enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/SubscriptionsApi/Find
		 */
		SubscriptionsApi_Find(requestBody: FindCredentials): Observable<SubscriptionView> {
			return this.http.post<SubscriptionView>(this.baseUri + 'v1/SubscriptionsApi/Find', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1/SubscriptionsApi/List
		 * @param {number} page Type: int, -2,147,483,648 to 2,147,483,647
		 */
		SubscriptionsApi_List(page: number | null | undefined, requestBody: FindCredentials): Observable<Array<SubscriptionView>> {
			return this.http.post<Array<SubscriptionView>>(this.baseUri + 'v1/SubscriptionsApi/List?page=' + page, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Post v1/SubscriptionsApi/Save
		 * @return {void} 
		 */
		SubscriptionsApi_Save(requestBody: SubscriptionCreateModify): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/SubscriptionsApi/Save', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete v1/SubscriptionsApi/{serial}
		 * @return {void} 
		 */
		SubscriptionsApi_DeleteSubscription(serial: string, keep: boolean): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/SubscriptionsApi/' + (serial == null ? '' : encodeURIComponent(serial)) + '&keep=' + keep, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/SubscriptionsApi/{serial}
		 * @return {void} 
		 */
		SubscriptionsApi_DeleteSubscription2(serial: string, keep: boolean): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/SubscriptionsApi/' + (serial == null ? '' : encodeURIComponent(serial)) + '&keep=' + keep, null, { observe: 'response', responseType: 'text' });
		}
	}

}

