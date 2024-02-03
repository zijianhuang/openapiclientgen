import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Application {

		/** A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html). */
		_links?: Links;
		id?: ApplicationBase;

		/** The Nexmo product that you access with this application. */
		keys?: Keys;

		/**
		 * The Nexmo product that you access with this application.
		 * Required
		 */
		messages: Messages;

		/** Required */
		name: ApplicationBase;

		/**
		 * The Nexmo product that you access with this application.
		 * Required
		 */
		voice: Voice;
	}
	export interface ApplicationFormProperties {
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
		});

	}


	/** A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html). */
	export interface Links {

		/** The link URL. */
		href?: string | null;
	}

	/** A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html). */
	export interface LinksFormProperties {

		/** The link URL. */
		href: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApplicationBase {

		/** The ID allocated to your application by Nexmo. */
		id?: string | null;

		/** The name of your application */
		name?: string | null;
	}
	export interface ApplicationBaseFormProperties {

		/** The ID allocated to your application by Nexmo. */
		id: FormControl<string | null | undefined>,

		/** The name of your application */
		name: FormControl<string | null | undefined>,
	}
	export function CreateApplicationBaseFormGroup() {
		return new FormGroup<ApplicationBaseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Nexmo product that you access with this application. */
	export interface Keys {

		/** The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token). */
		public_key?: string | null;
	}

	/** The Nexmo product that you access with this application. */
	export interface KeysFormProperties {

		/** The public key used to validate the [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token). */
		public_key: FormControl<string | null | undefined>,
	}
	export function CreateKeysFormGroup() {
		return new FormGroup<KeysFormProperties>({
			public_key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The Nexmo product that you access with this application. */
	export interface Messages {
		MessagesWebhooks?: Array<MessagesWebhooks>;
	}

	/** The Nexmo product that you access with this application. */
	export interface MessagesFormProperties {
	}
	export function CreateMessagesFormGroup() {
		return new FormGroup<MessagesFormProperties>({
		});

	}

	export interface MessagesWebhooks {

		/**
		 * `inbound_url`: The URL where inbound messages are delivered. `status_url`: The URL where message status is delivered.
		 * Required
		 */
		endpoint: string;

		/** Required */
		endpoint_type: MessagesWebhooksEndpoint_type;

		/**
		 * The HTTP method used to send data to the `inbound_url` or `status_url`. Default is POST.
		 * Required
		 */
		http_method: MessagesWebhooksHttp_method;
	}
	export interface MessagesWebhooksFormProperties {

		/**
		 * `inbound_url`: The URL where inbound messages are delivered. `status_url`: The URL where message status is delivered.
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/** Required */
		endpoint_type: FormControl<MessagesWebhooksEndpoint_type | null | undefined>,

		/**
		 * The HTTP method used to send data to the `inbound_url` or `status_url`. Default is POST.
		 * Required
		 */
		http_method: FormControl<MessagesWebhooksHttp_method | null | undefined>,
	}
	export function CreateMessagesWebhooksFormGroup() {
		return new FormGroup<MessagesWebhooksFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpoint_type: new FormControl<MessagesWebhooksEndpoint_type | null | undefined>(undefined, [Validators.required]),
			http_method: new FormControl<MessagesWebhooksHttp_method | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MessagesWebhooksEndpoint_type { inbound_url = 'inbound_url', status_url = 'status_url' }

	export enum MessagesWebhooksHttp_method { GET = 'GET', POST = 'POST' }


	/** The Nexmo product that you access with this application. */
	export interface Voice {
		VoiceWebhooks?: Array<VoiceWebhooks>;
	}

	/** The Nexmo product that you access with this application. */
	export interface VoiceFormProperties {
	}
	export function CreateVoiceFormGroup() {
		return new FormGroup<VoiceFormProperties>({
		});

	}

	export interface VoiceWebhooks {

		/**
		 * `answer_url`: The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to answer_url. `event_url`: Nexmo sends event information asynchronously to this URL when status changes.
		 * Required
		 */
		endpoint: string;

		/** Required */
		endpoint_type: VoiceWebhooksEndpoint_type;

		/**
		 * The HTTP method used to send event information to the `event_url` or `answer_url`.
		 * Required
		 */
		http_method: MessagesWebhooksHttp_method;
	}
	export interface VoiceWebhooksFormProperties {

		/**
		 * `answer_url`: The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to answer_url. `event_url`: Nexmo sends event information asynchronously to this URL when status changes.
		 * Required
		 */
		endpoint: FormControl<string | null | undefined>,

		/** Required */
		endpoint_type: FormControl<VoiceWebhooksEndpoint_type | null | undefined>,

		/**
		 * The HTTP method used to send event information to the `event_url` or `answer_url`.
		 * Required
		 */
		http_method: FormControl<MessagesWebhooksHttp_method | null | undefined>,
	}
	export function CreateVoiceWebhooksFormGroup() {
		return new FormGroup<VoiceWebhooksFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endpoint_type: new FormControl<VoiceWebhooksEndpoint_type | null | undefined>(undefined, [Validators.required]),
			http_method: new FormControl<MessagesWebhooksHttp_method | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VoiceWebhooksEndpoint_type { answer_url = 'answer_url', event_url = 'event_url' }

	export interface ApplicationCreated extends Application {
		keys?: KeysWithPrivateKey;
	}
	export interface ApplicationCreatedFormProperties extends ApplicationFormProperties {
	}
	export function CreateApplicationCreatedFormGroup() {
		return new FormGroup<ApplicationCreatedFormProperties>({
		});

	}

	export interface Applications {

		/** Required */
		_embedded: ApplicationsBase;

		/**
		 * A series of links between resources in this API in the following [HAL specification](http://stateless.co/hal_specification.html).
		 * Required
		 */
		_links: Links;

		/** Required */
		count: ApplicationsBase;

		/** Required */
		page_index: ApplicationsBase;

		/** Required */
		page_size: ApplicationsBase;
	}
	export interface ApplicationsFormProperties {
	}
	export function CreateApplicationsFormGroup() {
		return new FormGroup<ApplicationsFormProperties>({
		});

	}

	export interface ApplicationsBase {
		_embedded?: ApplicationsBase_embedded;

		/** The number of items associated with your account. */
		count?: number | null;

		/** The offset from the first page. */
		page_index?: number | null;

		/** The number of items returned on each call to this endpoint. The default is 10 records. */
		page_size?: number | null;
	}
	export interface ApplicationsBaseFormProperties {

		/** The number of items associated with your account. */
		count: FormControl<number | null | undefined>,

		/** The offset from the first page. */
		page_index: FormControl<number | null | undefined>,

		/** The number of items returned on each call to this endpoint. The default is 10 records. */
		page_size: FormControl<number | null | undefined>,
	}
	export function CreateApplicationsBaseFormGroup() {
		return new FormGroup<ApplicationsBaseFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			page_index: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ApplicationsBase_embedded {

		/** The collection of your applications. Each object contains information about an an individual application. The public_key is not included in the application information. */
		applications?: Array<Application>;
	}
	export interface ApplicationsBase_embeddedFormProperties {
	}
	export function CreateApplicationsBase_embeddedFormGroup() {
		return new FormGroup<ApplicationsBase_embeddedFormProperties>({
		});

	}

	export interface KeysWithPrivateKey extends Keys {

		/** The private key you use to generate the JSON Web Token (JWT) that authenticates your requests to Messages API. */
		private_key?: string | null;
	}
	export interface KeysWithPrivateKeyFormProperties extends KeysFormProperties {

		/** The private key you use to generate the JSON Web Token (JWT) that authenticates your requests to Messages API. */
		private_key: FormControl<string | null | undefined>,
	}
	export function CreateKeysWithPrivateKeyFormGroup() {
		return new FormGroup<KeysWithPrivateKeyFormProperties>({
			public_key: new FormControl<string | null | undefined>(undefined),
			private_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve all Applications
		 * You use a `GET` request to retrieve details of all applications associated with your account.
		 * Get 
		 * @param {string} api_key You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * @param {string} api_secret You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * @param {number} page_size Set the number of items returned on each call to this endpoint. The default is 10 records.
		 * @param {number} page_index Set the offset from the first page. The default value is `0`.
		 * @return {Applications} OK
		 */
		RetrieveApplications(api_key: string, api_secret: string, page_size: number | null | undefined, page_index: number | null | undefined): Observable<Applications> {
			return this.http.get<Applications>(this.baseUri + '?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&api_secret=' + (api_secret == null ? '' : encodeURIComponent(api_secret)) + '&page_size=' + page_size + '&page_index=' + page_index, {});
		}

		/**
		 * Create Application
		 * You use a `POST` request to create a new application.
		 * Post 
		 * @return {void} 
		 */
		CreateApplication(requestBody: CreateApplicationPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Destroy Application
		 * You use a `DELETE` request to delete a single application.
		 * Delete {app_id}
		 * @param {string} app_id The ID allocated to your application by Nexmo.
		 * @return {void} 
		 */
		DeleteApplication(app_id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (app_id == null ? '' : encodeURIComponent(app_id)) + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve Application
		 * You use a `GET` request to retrieve details about a single application.
		 * Get {app_id}
		 * @param {string} api_key You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * @param {string} api_secret You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * @param {string} app_id The ID allocated to your application by Nexmo.
		 * @return {Application} OK
		 */
		RetrieveApplication(api_key: string, api_secret: string, app_id: string): Observable<Application> {
			return this.http.get<Application>(this.baseUri + (app_id == null ? '' : encodeURIComponent(app_id)) + '?api_key=' + (api_key == null ? '' : encodeURIComponent(api_key)) + '&api_secret=' + (api_secret == null ? '' : encodeURIComponent(api_secret)) + '', {});
		}

		/**
		 * Update Application
		 * You use a `PUT` request to update an existing application.
		 * Put {app_id}
		 * @param {string} app_id The ID allocated to your application by Nexmo.
		 * @return {Application} OK
		 */
		UpdateApplication(app_id: string, requestBody: UpdateApplicationPutBody): Observable<Application> {
			return this.http.put<Application>(this.baseUri + (app_id == null ? '' : encodeURIComponent(app_id)) + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateApplicationPostBody {

		/** The HTTP method used to make the request to `answer_url`. The default value is `GET`. */
		answer_method?: string | null;

		/** The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`. Required for inbound calls only. */
		answer_url?: string | null;

		/**
		 * You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * Required
		 */
		api_key: string;

		/**
		 * You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * Required
		 */
		api_secret: string;

		/** The HTTP method used to send event information to `event_url`. The default value is `POST`. For `voice` type applications only. */
		event_method?: string | null;

		/** Nexmo sends event information asynchronously to this URL when status changes for `voice` applications. Always required for `voice` applications. */
		event_url?: string | null;

		/** The HTTP method used to send event information to `inbound_url`. The default value is `POST`. For `messages` type applications only. */
		inbound_method?: string | null;

		/** Nexmo sends a request to this URL when an inbound message is received. Required for `messages` type applications only. */
		inbound_url?: string | null;

		/**
		 * The name of your application.
		 * Required
		 */
		name: string;

		/** The HTTP method used to send event information to `status_url`. The default value is `POST`. For `messages` type applications only. */
		status_method?: string | null;

		/** Nexmo sends event information asynchronously to this URL when status changes. Required for `messages` type applications only. */
		status_url?: string | null;

		/**
		 * The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported.
		 * Required
		 */
		type: CreateApplicationPostBodyType;
	}
	export interface CreateApplicationPostBodyFormProperties {

		/** The HTTP method used to make the request to `answer_url`. The default value is `GET`. */
		answer_method: FormControl<string | null | undefined>,

		/** The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`. Required for inbound calls only. */
		answer_url: FormControl<string | null | undefined>,

		/**
		 * You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * Required
		 */
		api_key: FormControl<string | null | undefined>,

		/**
		 * You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * Required
		 */
		api_secret: FormControl<string | null | undefined>,

		/** The HTTP method used to send event information to `event_url`. The default value is `POST`. For `voice` type applications only. */
		event_method: FormControl<string | null | undefined>,

		/** Nexmo sends event information asynchronously to this URL when status changes for `voice` applications. Always required for `voice` applications. */
		event_url: FormControl<string | null | undefined>,

		/** The HTTP method used to send event information to `inbound_url`. The default value is `POST`. For `messages` type applications only. */
		inbound_method: FormControl<string | null | undefined>,

		/** Nexmo sends a request to this URL when an inbound message is received. Required for `messages` type applications only. */
		inbound_url: FormControl<string | null | undefined>,

		/**
		 * The name of your application.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The HTTP method used to send event information to `status_url`. The default value is `POST`. For `messages` type applications only. */
		status_method: FormControl<string | null | undefined>,

		/** Nexmo sends event information asynchronously to this URL when status changes. Required for `messages` type applications only. */
		status_url: FormControl<string | null | undefined>,

		/**
		 * The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported.
		 * Required
		 */
		type: FormControl<CreateApplicationPostBodyType | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyFormProperties>({
			answer_method: new FormControl<string | null | undefined>(undefined),
			answer_url: new FormControl<string | null | undefined>(undefined),
			api_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			api_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			event_method: new FormControl<string | null | undefined>(undefined),
			event_url: new FormControl<string | null | undefined>(undefined),
			inbound_method: new FormControl<string | null | undefined>(undefined),
			inbound_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status_method: new FormControl<string | null | undefined>(undefined),
			status_url: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<CreateApplicationPostBodyType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateApplicationPostBodyType { voice = 'voice', messages = 'messages' }

	export interface UpdateApplicationPutBody {

		/** The HTTP method used to make the request to `answer_url`. The default value is `GET`. */
		answer_method?: string | null;

		/** The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`. */
		answer_url?: string | null;

		/**
		 * You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * Required
		 */
		api_key: string;

		/**
		 * You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * Required
		 */
		api_secret: string;

		/** The HTTP method used to send event information to `event_url`. The default value is POST. */
		event_method?: string | null;

		/** Nexmo sends event information asynchronously to this URL when status changes. */
		event_url?: string | null;

		/**
		 * The name of your application.
		 * Required
		 */
		name: string;

		/**
		 * The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported. You  can't change the type of application.
		 * Required
		 */
		type: CreateApplicationPostBodyType;
	}
	export interface UpdateApplicationPutBodyFormProperties {

		/** The HTTP method used to make the request to `answer_url`. The default value is `GET`. */
		answer_method: FormControl<string | null | undefined>,

		/** The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to `answer_url`. */
		answer_url: FormControl<string | null | undefined>,

		/**
		 * You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * Required
		 */
		api_key: FormControl<string | null | undefined>,

		/**
		 * You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview)
		 * Required
		 */
		api_secret: FormControl<string | null | undefined>,

		/** The HTTP method used to send event information to `event_url`. The default value is POST. */
		event_method: FormControl<string | null | undefined>,

		/** Nexmo sends event information asynchronously to this URL when status changes. */
		event_url: FormControl<string | null | undefined>,

		/**
		 * The name of your application.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The Nexmo product or products that you access with this application. Currently `voice` and `messages` application types are supported. You  can't change the type of application.
		 * Required
		 */
		type: FormControl<CreateApplicationPostBodyType | null | undefined>,
	}
	export function CreateUpdateApplicationPutBodyFormGroup() {
		return new FormGroup<UpdateApplicationPutBodyFormProperties>({
			answer_method: new FormControl<string | null | undefined>(undefined),
			answer_url: new FormControl<string | null | undefined>(undefined),
			api_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			api_secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			event_method: new FormControl<string | null | undefined>(undefined),
			event_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CreateApplicationPostBodyType | null | undefined>(undefined, [Validators.required]),
		});

	}

}

