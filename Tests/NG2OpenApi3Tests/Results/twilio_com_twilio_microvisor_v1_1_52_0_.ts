import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Microvisorv1account_config {
		date_updated?: Date | null;

		/** The config key; up to 100 characters. */
		key?: string | null;

		/** The absolute URL of the Config. */
		url?: string | null;

		/** The config value; up to 4096 characters. */
		value?: string | null;
	}
	export interface Microvisorv1account_configFormProperties {
		date_updated: FormControl<Date | null | undefined>,

		/** The config key; up to 100 characters. */
		key: FormControl<string | null | undefined>,

		/** The absolute URL of the Config. */
		url: FormControl<string | null | undefined>,

		/** The config value; up to 4096 characters. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMicrovisorv1account_configFormGroup() {
		return new FormGroup<Microvisorv1account_configFormProperties>({
			date_updated: new FormControl<Date | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Microvisorv1account_secret {
		date_rotated?: Date | null;

		/** The secret key; up to 100 characters. */
		key?: string | null;

		/** The absolute URL of the Secret. */
		url?: string | null;
	}
	export interface Microvisorv1account_secretFormProperties {
		date_rotated: FormControl<Date | null | undefined>,

		/** The secret key; up to 100 characters. */
		key: FormControl<string | null | undefined>,

		/** The absolute URL of the Secret. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMicrovisorv1account_secretFormGroup() {
		return new FormGroup<Microvisorv1account_secretFormProperties>({
			date_rotated: new FormControl<Date | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Microvisorv1app {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** The date that this App was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date that this App was last updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** App manifest hash represented as `hash_algorithm:hash_value`. */
		hash?: string | null;
		links?: string | null;

		/**
		 * A 34-character string that uniquely identifies this App.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** A developer-defined string that uniquely identifies the App. This value must be unique for all Apps on this Account. The `unique_name` value may be used as an alternative to the `sid` in the URL path to address the resource. */
		unique_name?: string | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Microvisorv1appFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date that this App was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date that this App was last updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** App manifest hash represented as `hash_algorithm:hash_value`. */
		hash: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,

		/**
		 * A 34-character string that uniquely identifies this App.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** A developer-defined string that uniquely identifies the App. This value must be unique for all Apps on this Account. The `unique_name` value may be used as an alternative to the `sid` in the URL path to address the resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMicrovisorv1appFormGroup() {
		return new FormGroup<Microvisorv1appFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KA[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Microvisorv1appapp_manifest {

		/**
		 * A 34-character string that uniquely identifies this App.
		 * Max length: 34
		 * Min length: 34
		 */
		app_sid?: string | null;

		/** The base-64 encoded manifest */
		encoded_bytes?: string | null;

		/** App manifest hash represented as `hash_algorithm:hash_value`. */
		hash?: string | null;

		/** The absolute URL of this Manifest. */
		url?: string | null;
	}
	export interface Microvisorv1appapp_manifestFormProperties {

		/**
		 * A 34-character string that uniquely identifies this App.
		 * Max length: 34
		 * Min length: 34
		 */
		app_sid: FormControl<string | null | undefined>,

		/** The base-64 encoded manifest */
		encoded_bytes: FormControl<string | null | undefined>,

		/** App manifest hash represented as `hash_algorithm:hash_value`. */
		hash: FormControl<string | null | undefined>,

		/** The absolute URL of this Manifest. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMicrovisorv1appapp_manifestFormGroup() {
		return new FormGroup<Microvisorv1appapp_manifestFormProperties>({
			app_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^KA[0-9a-fA-F]{32}$')]),
			encoded_bytes: new FormControl<string | null | undefined>(undefined),
			hash: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Microvisorv1device {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid?: string | null;

		/** Information about the target App and the App reported by this Device. Contains the properties `target_sid`, `date_targeted`, `update_status` (one of `up-to-date`, `pending` and `error`), `update_error_code`, `reported_sid` and `date_reported`. */
		app?: any;

		/** The date that this Device was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date that this Device was last updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The absolute URLs of related resources. */
		links?: string | null;

		/** Object specifying whether application logging is enabled for this Device. Contains the properties `enabled` and `date_expires`. */
		logging?: any;

		/**
		 * A 34-character string that uniquely identifies this Device.
		 * Max length: 34
		 * Min length: 34
		 */
		sid?: string | null;

		/** A developer-defined string that uniquely identifies the Device. This value must be unique for all Devices on this Account. The `unique_name` value may be used as an alternative to the `sid` in the URL path to address the resource. */
		unique_name?: string | null;

		/** The URL of this resource. */
		url?: string | null;
	}
	export interface Microvisorv1deviceFormProperties {

		/**
		 * The unique SID identifier of the Account.
		 * Max length: 34
		 * Min length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** Information about the target App and the App reported by this Device. Contains the properties `target_sid`, `date_targeted`, `update_status` (one of `up-to-date`, `pending` and `error`), `update_error_code`, `reported_sid` and `date_reported`. */
		app: FormControl<any | null | undefined>,

		/** The date that this Device was created, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date that this Device was last updated, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The absolute URLs of related resources. */
		links: FormControl<string | null | undefined>,

		/** Object specifying whether application logging is enabled for this Device. Contains the properties `enabled` and `date_expires`. */
		logging: FormControl<any | null | undefined>,

		/**
		 * A 34-character string that uniquely identifies this Device.
		 * Max length: 34
		 * Min length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** A developer-defined string that uniquely identifies the Device. This value must be unique for all Devices on this Account. The `unique_name` value may be used as an alternative to the `sid` in the URL path to address the resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The URL of this resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMicrovisorv1deviceFormGroup() {
		return new FormGroup<Microvisorv1deviceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			app: new FormControl<any | null | undefined>(undefined),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			logging: new FormControl<any | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UV[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Microvisorv1devicedevice_config {
		date_updated?: Date | null;

		/**
		 * A 34-character string that uniquely identifies the parent Device.
		 * Max length: 34
		 * Min length: 34
		 */
		device_sid?: string | null;

		/** The config key; up to 100 characters. */
		key?: string | null;

		/** The absolute URL of the Config. */
		url?: string | null;

		/** The config value; up to 4096 characters. */
		value?: string | null;
	}
	export interface Microvisorv1devicedevice_configFormProperties {
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * A 34-character string that uniquely identifies the parent Device.
		 * Max length: 34
		 * Min length: 34
		 */
		device_sid: FormControl<string | null | undefined>,

		/** The config key; up to 100 characters. */
		key: FormControl<string | null | undefined>,

		/** The absolute URL of the Config. */
		url: FormControl<string | null | undefined>,

		/** The config value; up to 4096 characters. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMicrovisorv1devicedevice_configFormGroup() {
		return new FormGroup<Microvisorv1devicedevice_configFormProperties>({
			date_updated: new FormControl<Date | null | undefined>(undefined),
			device_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UV[0-9a-fA-F]{32}$')]),
			key: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Microvisorv1devicedevice_secret {
		date_rotated?: Date | null;

		/**
		 * A 34-character string that uniquely identifies the parent Device.
		 * Max length: 34
		 * Min length: 34
		 */
		device_sid?: string | null;

		/** The secret key; up to 100 characters. */
		key?: string | null;

		/** The absolute URL of the Secret. */
		url?: string | null;
	}
	export interface Microvisorv1devicedevice_secretFormProperties {
		date_rotated: FormControl<Date | null | undefined>,

		/**
		 * A 34-character string that uniquely identifies the parent Device.
		 * Max length: 34
		 * Min length: 34
		 */
		device_sid: FormControl<string | null | undefined>,

		/** The secret key; up to 100 characters. */
		key: FormControl<string | null | undefined>,

		/** The absolute URL of the Secret. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateMicrovisorv1devicedevice_secretFormGroup() {
		return new FormGroup<Microvisorv1devicedevice_secretFormProperties>({
			date_rotated: new FormControl<Date | null | undefined>(undefined),
			device_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^UV[0-9a-fA-F]{32}$')]),
			key: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of all Apps for an Account.
		 * Get v1/Apps
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListAppReturn} OK
		 */
		ListApp(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListAppReturn> {
			return this.http.get<ListAppReturn>(this.baseUri + 'v1/Apps?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve the Manifest for an App.
		 * Get v1/Apps/{AppSid}/Manifest
		 * @param {string} AppSid A 34-character string that uniquely identifies this App.
		 * @return {Microvisorv1appapp_manifest} OK
		 */
		FetchAppManifest(AppSid: string): Observable<Microvisorv1appapp_manifest> {
			return this.http.get<Microvisorv1appapp_manifest>(this.baseUri + 'v1/Apps/' + (AppSid == null ? '' : encodeURIComponent(AppSid)) + '/Manifest', {});
		}

		/**
		 * Delete a specific App.
		 * Delete v1/Apps/{Sid}
		 * @param {string} Sid A 34-character string that uniquely identifies this App.
		 * @return {void} 
		 */
		DeleteApp(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Apps/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch a specific App.
		 * Get v1/Apps/{Sid}
		 * @param {string} Sid A 34-character string that uniquely identifies this App.
		 * @return {Microvisorv1app} OK
		 */
		FetchApp(Sid: string): Observable<Microvisorv1app> {
			return this.http.get<Microvisorv1app>(this.baseUri + 'v1/Apps/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Configs for an Account.
		 * Get v1/Configs
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListAccountConfigReturn} OK
		 */
		ListAccountConfig(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListAccountConfigReturn> {
			return this.http.get<ListAccountConfigReturn>(this.baseUri + 'v1/Configs?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a config for an Account.
		 * Delete v1/Configs/{Key}
		 * @param {string} Key The config key; up to 100 characters.
		 * @return {void} 
		 */
		DeleteAccountConfig(Key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Configs/' + (Key == null ? '' : encodeURIComponent(Key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a Config for an Account.
		 * Get v1/Configs/{Key}
		 * @param {string} Key The config key; up to 100 characters.
		 * @return {Microvisorv1account_config} OK
		 */
		FetchAccountConfig(Key: string): Observable<Microvisorv1account_config> {
			return this.http.get<Microvisorv1account_config>(this.baseUri + 'v1/Configs/' + (Key == null ? '' : encodeURIComponent(Key)), {});
		}

		/**
		 * Retrieve a list of all Devices registered with the Account.
		 * Get v1/Devices
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListDeviceReturn} OK
		 */
		ListDevice(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListDeviceReturn> {
			return this.http.get<ListDeviceReturn>(this.baseUri + 'v1/Devices?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a list of all Configs for a Device.
		 * Get v1/Devices/{DeviceSid}/Configs
		 * @param {string} DeviceSid A 34-character string that uniquely identifies the Device.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListDeviceConfigReturn} OK
		 */
		ListDeviceConfig(DeviceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListDeviceConfigReturn> {
			return this.http.get<ListDeviceConfigReturn>(this.baseUri + 'v1/Devices/' + (DeviceSid == null ? '' : encodeURIComponent(DeviceSid)) + '/Configs&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a config for a Microvisor Device.
		 * Delete v1/Devices/{DeviceSid}/Configs/{Key}
		 * @param {string} DeviceSid A 34-character string that uniquely identifies the Device.
		 * @param {string} Key The config key; up to 100 characters.
		 * @return {void} 
		 */
		DeleteDeviceConfig(DeviceSid: string, Key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Devices/' + (DeviceSid == null ? '' : encodeURIComponent(DeviceSid)) + '/Configs/' + (Key == null ? '' : encodeURIComponent(Key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a Config for a Device.
		 * Get v1/Devices/{DeviceSid}/Configs/{Key}
		 * @param {string} DeviceSid A 34-character string that uniquely identifies the Device.
		 * @param {string} Key The config key; up to 100 characters.
		 * @return {Microvisorv1devicedevice_config} OK
		 */
		FetchDeviceConfig(DeviceSid: string, Key: string): Observable<Microvisorv1devicedevice_config> {
			return this.http.get<Microvisorv1devicedevice_config>(this.baseUri + 'v1/Devices/' + (DeviceSid == null ? '' : encodeURIComponent(DeviceSid)) + '/Configs/' + (Key == null ? '' : encodeURIComponent(Key)), {});
		}

		/**
		 * Retrieve a list of all Secrets for a Device.
		 * Get v1/Devices/{DeviceSid}/Secrets
		 * @param {string} DeviceSid A 34-character string that uniquely identifies the Device.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListDeviceSecretReturn} OK
		 */
		ListDeviceSecret(DeviceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListDeviceSecretReturn> {
			return this.http.get<ListDeviceSecretReturn>(this.baseUri + 'v1/Devices/' + (DeviceSid == null ? '' : encodeURIComponent(DeviceSid)) + '/Secrets&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a secret for a Microvisor Device.
		 * Delete v1/Devices/{DeviceSid}/Secrets/{Key}
		 * @param {string} DeviceSid A 34-character string that uniquely identifies the Device.
		 * @param {string} Key The secret key; up to 100 characters.
		 * @return {void} 
		 */
		DeleteDeviceSecret(DeviceSid: string, Key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Devices/' + (DeviceSid == null ? '' : encodeURIComponent(DeviceSid)) + '/Secrets/' + (Key == null ? '' : encodeURIComponent(Key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a Secret for a Device.
		 * Get v1/Devices/{DeviceSid}/Secrets/{Key}
		 * @param {string} DeviceSid A 34-character string that uniquely identifies the Device.
		 * @param {string} Key The secret key; up to 100 characters.
		 * @return {Microvisorv1devicedevice_secret} OK
		 */
		FetchDeviceSecret(DeviceSid: string, Key: string): Observable<Microvisorv1devicedevice_secret> {
			return this.http.get<Microvisorv1devicedevice_secret>(this.baseUri + 'v1/Devices/' + (DeviceSid == null ? '' : encodeURIComponent(DeviceSid)) + '/Secrets/' + (Key == null ? '' : encodeURIComponent(Key)), {});
		}

		/**
		 * Fetch a specific Device.
		 * Get v1/Devices/{Sid}
		 * @param {string} Sid A 34-character string that uniquely identifies this Device.
		 * @return {Microvisorv1device} OK
		 */
		FetchDevice(Sid: string): Observable<Microvisorv1device> {
			return this.http.get<Microvisorv1device>(this.baseUri + 'v1/Devices/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Secrets for an Account.
		 * Get v1/Secrets
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 * @param {number} Page The page index. This value is simply for client state.
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListAccountSecretReturn} OK
		 */
		ListAccountSecret(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListAccountSecretReturn> {
			return this.http.get<ListAccountSecretReturn>(this.baseUri + 'v1/Secrets?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a secret for an Account.
		 * Delete v1/Secrets/{Key}
		 * @param {string} Key The secret key; up to 100 characters.
		 * @return {void} 
		 */
		DeleteAccountSecret(Key: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Secrets/' + (Key == null ? '' : encodeURIComponent(Key)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a Secret for an Account.
		 * Get v1/Secrets/{Key}
		 * @param {string} Key The secret key; up to 100 characters.
		 * @return {Microvisorv1account_secret} OK
		 */
		FetchAccountSecret(Key: string): Observable<Microvisorv1account_secret> {
			return this.http.get<Microvisorv1account_secret>(this.baseUri + 'v1/Secrets/' + (Key == null ? '' : encodeURIComponent(Key)), {});
		}
	}

	export interface ListAppReturn {
		apps?: Array<Microvisorv1app>;
		meta?: ListAppReturnMeta;
	}
	export interface ListAppReturnFormProperties {
	}
	export function CreateListAppReturnFormGroup() {
		return new FormGroup<ListAppReturnFormProperties>({
		});

	}

	export interface ListAppReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListAppReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListAppReturnMetaFormGroup() {
		return new FormGroup<ListAppReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountConfigReturn {
		configs?: Array<Microvisorv1account_config>;
		meta?: ListAccountConfigReturnMeta;
	}
	export interface ListAccountConfigReturnFormProperties {
	}
	export function CreateListAccountConfigReturnFormGroup() {
		return new FormGroup<ListAccountConfigReturnFormProperties>({
		});

	}

	export interface ListAccountConfigReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListAccountConfigReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListAccountConfigReturnMetaFormGroup() {
		return new FormGroup<ListAccountConfigReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeviceReturn {
		devices?: Array<Microvisorv1device>;
		meta?: ListDeviceReturnMeta;
	}
	export interface ListDeviceReturnFormProperties {
	}
	export function CreateListDeviceReturnFormGroup() {
		return new FormGroup<ListDeviceReturnFormProperties>({
		});

	}

	export interface ListDeviceReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListDeviceReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceReturnMetaFormGroup() {
		return new FormGroup<ListDeviceReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeviceConfigReturn {
		configs?: Array<Microvisorv1devicedevice_config>;
		meta?: ListDeviceConfigReturnMeta;
	}
	export interface ListDeviceConfigReturnFormProperties {
	}
	export function CreateListDeviceConfigReturnFormGroup() {
		return new FormGroup<ListDeviceConfigReturnFormProperties>({
		});

	}

	export interface ListDeviceConfigReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListDeviceConfigReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceConfigReturnMetaFormGroup() {
		return new FormGroup<ListDeviceConfigReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeviceSecretReturn {
		meta?: ListDeviceSecretReturnMeta;
		secrets?: Array<Microvisorv1devicedevice_secret>;
	}
	export interface ListDeviceSecretReturnFormProperties {
	}
	export function CreateListDeviceSecretReturnFormGroup() {
		return new FormGroup<ListDeviceSecretReturnFormProperties>({
		});

	}

	export interface ListDeviceSecretReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListDeviceSecretReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListDeviceSecretReturnMetaFormGroup() {
		return new FormGroup<ListDeviceSecretReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAccountSecretReturn {
		meta?: ListAccountSecretReturnMeta;
		secrets?: Array<Microvisorv1account_secret>;
	}
	export interface ListAccountSecretReturnFormProperties {
	}
	export function CreateListAccountSecretReturnFormGroup() {
		return new FormGroup<ListAccountSecretReturnFormProperties>({
		});

	}

	export interface ListAccountSecretReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;
		page?: number | null;
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListAccountSecretReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,
		page: FormControl<number | null | undefined>,
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListAccountSecretReturnMetaFormGroup() {
		return new FormGroup<ListAccountSecretReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

