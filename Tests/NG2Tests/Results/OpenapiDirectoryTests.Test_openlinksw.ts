import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActionDescription {

		/**
		 * A unique one word identifier for the action.
		 * Required
		 */
		action_id: string;

		/** A short description of the action. */
		description?: string | null;

		/** Required */
		entry_point: EntryPoint;
	}
	export interface ActionDescriptionFormProperties {

		/**
		 * A unique one word identifier for the action.
		 * Required
		 */
		action_id: FormControl<string | null | undefined>,

		/** A short description of the action. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateActionDescriptionFormGroup() {
		return new FormGroup<ActionDescriptionFormProperties>({
			action_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EntryPoint {

		/**
		 * The supported MIME type(s) for an EntryPoint response.
		 * Required
		 */
		content_types: Array<string>;

		/**
		 * A short description of the action. Optional - may be null.
		 * Required
		 */
		description: string;

		/**
		 * The supported MIME type(s) for an EntryPoint request. Null if not applicable.
		 * Required
		 */
		encoding_types: Array<string>;

		/**
		 * The HTTP method used by the EntryPoint.
		 * Required
		 */
		http_method: EntryPointHttp_method;

		/**
		 * A word or short phrase to be used as the action's display name. Optional - may be null.
		 * Required
		 */
		name: string;

		/**
		 * Descriptions of the EntryPoint parameters. Null if not applicable.
		 * Required
		 */
		parameters: Array<EntryPointParameter>;

		/**
		 * The EntryPoint URL. It will be non-null if url_template is null.
		 * Required
		 */
		url: string;

		/**
		 * The EntryPoint's URL template. Only required if the entry point URL is parameterized. Property 'url' will be null if url_template is non-null.
		 * Required
		 */
		url_template: string;
	}
	export interface EntryPointFormProperties {

		/**
		 * A short description of the action. Optional - may be null.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The HTTP method used by the EntryPoint.
		 * Required
		 */
		http_method: FormControl<EntryPointHttp_method | null | undefined>,

		/**
		 * A word or short phrase to be used as the action's display name. Optional - may be null.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The EntryPoint URL. It will be non-null if url_template is null.
		 * Required
		 */
		url: FormControl<string | null | undefined>,

		/**
		 * The EntryPoint's URL template. Only required if the entry point URL is parameterized. Property 'url' will be null if url_template is non-null.
		 * Required
		 */
		url_template: FormControl<string | null | undefined>,
	}
	export function CreateEntryPointFormGroup() {
		return new FormGroup<EntryPointFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			http_method: new FormControl<EntryPointHttp_method | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url_template: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EntryPointHttp_method { GET = 0, PUT = 1, POST = 2, DELETE = 3 }

	export interface EntryPointParameter {

		/**
		 * A short description of the parameter for use in the OSDB Action Console. Optional - may be null.
		 * Required
		 */
		description: string;

		/**
		 * The parameter's display name in the OSDB Action Console. Optional - may be null.
		 * Required
		 */
		display_name: string;

		/**
		 * The parameter name as present in the HTTP request. e.g. the key name in a query string key-value pair.
		 * Required
		 */
		parameter_name: string;

		/**
		 * If the parameter accepts only a limited set of values, the allowed set of values. Null if not applicable.
		 * Required
		 */
		permitted_values: Array<string>;

		/**
		 * A flag indicating if the parameter is optional.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		required: number;

		/**
		 * The type of the parameter, indicating its location in the HTTP request.
		 * Required
		 */
		type: EntryPointParameterType;
	}
	export interface EntryPointParameterFormProperties {

		/**
		 * A short description of the parameter for use in the OSDB Action Console. Optional - may be null.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The parameter's display name in the OSDB Action Console. Optional - may be null.
		 * Required
		 */
		display_name: FormControl<string | null | undefined>,

		/**
		 * The parameter name as present in the HTTP request. e.g. the key name in a query string key-value pair.
		 * Required
		 */
		parameter_name: FormControl<string | null | undefined>,

		/**
		 * A flag indicating if the parameter is optional.
		 * Required
		 * Minimum: 0
		 * Maximum: 1
		 */
		required: FormControl<number | null | undefined>,

		/**
		 * The type of the parameter, indicating its location in the HTTP request.
		 * Required
		 */
		type: FormControl<EntryPointParameterType | null | undefined>,
	}
	export function CreateEntryPointParameterFormGroup() {
		return new FormGroup<EntryPointParameterFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			display_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parameter_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			required: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1)]),
			type: new FormControl<EntryPointParameterType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum EntryPointParameterType { query = 0, header = 1, uri = 2, path = 3, body = 4 }

	export interface ActionHelp {

		/**
		 * A unique one word identifier for the action.
		 * Required
		 */
		action_id: string;

		/**
		 * The help text for the action.
		 * Required
		 */
		help_text: string;

		/**
		 * A unique one word identifier for the service.
		 * Required
		 */
		service_id: string;
	}
	export interface ActionHelpFormProperties {

		/**
		 * A unique one word identifier for the action.
		 * Required
		 */
		action_id: FormControl<string | null | undefined>,

		/**
		 * The help text for the action.
		 * Required
		 */
		help_text: FormControl<string | null | undefined>,

		/**
		 * A unique one word identifier for the service.
		 * Required
		 */
		service_id: FormControl<string | null | undefined>,
	}
	export function CreateActionHelpFormGroup() {
		return new FormGroup<ActionHelpFormProperties>({
			action_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			help_text: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ActionHelpResponse {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: string;

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: string;

		/** Required */
		response: ActionHelp;

		/** Required */
		status: ActionHelpResponseStatus;
	}
	export interface ActionHelpResponseFormProperties {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: FormControl<string | null | undefined>,

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ActionHelpResponseStatus | null | undefined>,
	}
	export function CreateActionHelpResponseFormGroup() {
		return new FormGroup<ActionHelpResponseFormProperties>({
			api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionHelpResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ActionHelpResponseStatus { success = 0 }

	export interface DescribeActionResponse {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: string;

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: string;

		/** Required */
		response: ActionDescription;

		/** Required */
		status: ActionHelpResponseStatus;
	}
	export interface DescribeActionResponseFormProperties {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: FormControl<string | null | undefined>,

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ActionHelpResponseStatus | null | undefined>,
	}
	export function CreateDescribeActionResponseFormGroup() {
		return new FormGroup<DescribeActionResponseFormProperties>({
			api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionHelpResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeServiceResponse {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: string;

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: string;

		/** Required */
		response: ServiceDescription;

		/** Required */
		status: ActionHelpResponseStatus;
	}
	export interface DescribeServiceResponseFormProperties {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: FormControl<string | null | undefined>,

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ActionHelpResponseStatus | null | undefined>,
	}
	export function CreateDescribeServiceResponseFormGroup() {
		return new FormGroup<DescribeServiceResponseFormProperties>({
			api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionHelpResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ServiceDescription {

		/** A short description of the service. */
		description?: string | null;

		/**
		 * The URI of the source service description document used to load the service into OSDB.
		 * Required
		 */
		import_source_uri: string;

		/**
		 * A unique one word identifier for the service.
		 * Required
		 */
		service_id: string;

		/**
		 * A word or phrase naming the service.
		 * Required
		 */
		service_name: string;
	}
	export interface ServiceDescriptionFormProperties {

		/** A short description of the service. */
		description: FormControl<string | null | undefined>,

		/**
		 * The URI of the source service description document used to load the service into OSDB.
		 * Required
		 */
		import_source_uri: FormControl<string | null | undefined>,

		/**
		 * A unique one word identifier for the service.
		 * Required
		 */
		service_id: FormControl<string | null | undefined>,

		/**
		 * A word or phrase naming the service.
		 * Required
		 */
		service_name: FormControl<string | null | undefined>,
	}
	export function CreateServiceDescriptionFormGroup() {
		return new FormGroup<ServiceDescriptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			import_source_uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ErrorModel {

		/** The path of the REST API method reporting the error */
		api?: string | null;

		/** The name of the REST API method reporting the error */
		method?: string | null;

		/** A message describing the error */
		response?: string | null;
		status?: ErrorModelStatus | null;
	}
	export interface ErrorModelFormProperties {

		/** The path of the REST API method reporting the error */
		api: FormControl<string | null | undefined>,

		/** The name of the REST API method reporting the error */
		method: FormControl<string | null | undefined>,

		/** A message describing the error */
		response: FormControl<string | null | undefined>,
		status: FormControl<ErrorModelStatus | null | undefined>,
	}
	export function CreateErrorModelFormGroup() {
		return new FormGroup<ErrorModelFormProperties>({
			api: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ErrorModelStatus | null | undefined>(undefined),
		});

	}

	export enum ErrorModelStatus { error = 0 }

	export interface ExecBody {

		/** An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value. */
		action_specific_property1?: string | null;

		/** An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value. */
		action_specific_property2?: string | null;

		/** The media type of the data associated with osdb:body_data_raw or osdb:body_data_src_url. In the case of osdb:body_data_raw, this is the media type before base64 encoding. */
		'osdb:body_data_encoding'?: string | null;

		/** Input data for the action (e.g. CSV data). The data must be base64 encoded by the client. Alternatively, clients can use osdb:body_data_src_url to supply the input data via a web-accessible document. */
		'osdb:body_data_raw'?: string | null;

		/** URL of a resource containing input data for the action (e.g. CSV data). Clients can instead use osdb:body_data_raw to supply the input data directly. */
		'osdb:body_data_src_url'?: string | null;

		/** An OSDB-specific parameter controlling the action output type. If omitted, the native action output is returned. */
		'osdb:output_type'?: ExecBodyOsdb_output_type | null;

		/** Preferred response MIME type. This must be an output MIME type supported natively by the action or, if 'osdb:output_type' is set to 'generate_rdf', a Virtuoso Sponger output format. i.e. 'application/ld+json', 'text/turtle' or 'application/rdf+xml'. */
		'osdb:response_format'?: string | null;
	}
	export interface ExecBodyFormProperties {

		/** An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value. */
		action_specific_property1: FormControl<string | null | undefined>,

		/** An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value. */
		action_specific_property2: FormControl<string | null | undefined>,

		/** The media type of the data associated with osdb:body_data_raw or osdb:body_data_src_url. In the case of osdb:body_data_raw, this is the media type before base64 encoding. */
		'osdb:body_data_encoding': FormControl<string | null | undefined>,

		/** Input data for the action (e.g. CSV data). The data must be base64 encoded by the client. Alternatively, clients can use osdb:body_data_src_url to supply the input data via a web-accessible document. */
		'osdb:body_data_raw': FormControl<string | null | undefined>,

		/** URL of a resource containing input data for the action (e.g. CSV data). Clients can instead use osdb:body_data_raw to supply the input data directly. */
		'osdb:body_data_src_url': FormControl<string | null | undefined>,

		/** An OSDB-specific parameter controlling the action output type. If omitted, the native action output is returned. */
		'osdb:output_type': FormControl<ExecBodyOsdb_output_type | null | undefined>,

		/** Preferred response MIME type. This must be an output MIME type supported natively by the action or, if 'osdb:output_type' is set to 'generate_rdf', a Virtuoso Sponger output format. i.e. 'application/ld+json', 'text/turtle' or 'application/rdf+xml'. */
		'osdb:response_format': FormControl<string | null | undefined>,
	}
	export function CreateExecBodyFormGroup() {
		return new FormGroup<ExecBodyFormProperties>({
			action_specific_property1: new FormControl<string | null | undefined>(undefined),
			action_specific_property2: new FormControl<string | null | undefined>(undefined),
			'osdb:body_data_encoding': new FormControl<string | null | undefined>(undefined),
			'osdb:body_data_raw': new FormControl<string | null | undefined>(undefined),
			'osdb:body_data_src_url': new FormControl<string | null | undefined>(undefined),
			'osdb:output_type': new FormControl<ExecBodyOsdb_output_type | null | undefined>(undefined),
			'osdb:response_format': new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecBodyOsdb_output_type { url_only = 0, generate_rdf = 1, display_rdf = 2 }

	export interface ListActionsResponse {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: string;

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: string;

		/** Required */
		response: Array<ActionDescription>;

		/** Required */
		status: ActionHelpResponseStatus;
	}
	export interface ListActionsResponseFormProperties {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: FormControl<string | null | undefined>,

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ActionHelpResponseStatus | null | undefined>,
	}
	export function CreateListActionsResponseFormGroup() {
		return new FormGroup<ListActionsResponseFormProperties>({
			api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionHelpResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListServicesResponse {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: string;

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: string;

		/** Required */
		response: Array<ServiceDescription>;

		/** Required */
		status: ActionHelpResponseStatus;
	}
	export interface ListServicesResponseFormProperties {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: FormControl<string | null | undefined>,

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ActionHelpResponseStatus | null | undefined>,
	}
	export function CreateListServicesResponseFormGroup() {
		return new FormGroup<ListServicesResponseFormProperties>({
			api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionHelpResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LoginResponse {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: string;

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: string;

		/** Required */
		response: LoginResponseResponse;

		/** Required */
		status: ActionHelpResponseStatus;
	}
	export interface LoginResponseFormProperties {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: FormControl<string | null | undefined>,

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ActionHelpResponseStatus | null | undefined>,
	}
	export function CreateLoginResponseFormGroup() {
		return new FormGroup<LoginResponseFormProperties>({
			api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionHelpResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LoginResponseResponse {

		/**
		 * The WebID of the user who has logged in.
		 * Required
		 */
		user: string;
	}
	export interface LoginResponseResponseFormProperties {

		/**
		 * The WebID of the user who has logged in.
		 * Required
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateLoginResponseResponseFormGroup() {
		return new FormGroup<LoginResponseResponseFormProperties>({
			user: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LogoutResponse {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: string;

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: string;

		/** Required */
		response: LogoutResponseResponse;

		/** Required */
		status: ActionHelpResponseStatus;
	}
	export interface LogoutResponseFormProperties {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: FormControl<string | null | undefined>,

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ActionHelpResponseStatus | null | undefined>,
	}
	export function CreateLogoutResponseFormGroup() {
		return new FormGroup<LogoutResponseFormProperties>({
			api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionHelpResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LogoutResponseResponse {

		/**
		 * The WebID of the user who has logged out.
		 * Required
		 */
		user: string;
	}
	export interface LogoutResponseResponseFormProperties {

		/**
		 * The WebID of the user who has logged out.
		 * Required
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateLogoutResponseResponseFormGroup() {
		return new FormGroup<LogoutResponseResponseFormProperties>({
			user: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List actions
		 * Returns an array of action descriptions for the actions supported by the given service
		 * Get api/v1/actions/{serviceId}
		 * @param {string} serviceId Service ID of the service for which actions are to be listed
		 * @return {ListActionsResponse} An array of action descriptions for the actions supported by the given service.
		 */
		ListActions(serviceId: string): Observable<ListActionsResponse> {
			return this.http.get<ListActionsResponse>(this.baseUri + 'api/v1/actions/' + (serviceId == null ? '' : encodeURIComponent(serviceId)), {});
		}

		/**
		 * Describe action
		 * Returns a description of a given service action.
		 * Get api/v1/actions/{serviceId}/{actionId}
		 * @param {string} serviceId Service ID of the service supporting the action.
		 * @param {string} actionId Action ID of the action to describe.
		 * @return {DescribeActionResponse} A single action description
		 */
		DescribeAction(serviceId: string, actionId: string): Observable<DescribeActionResponse> {
			return this.http.get<DescribeActionResponse>(this.baseUri + 'api/v1/actions/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/' + (actionId == null ? '' : encodeURIComponent(actionId)), {});
		}

		/**
		 * Execute action
		 * Executes a registered service action and returns any output from the action.
		 * The data returned in the POST response body may be:
		 * * the raw action output,
		 * * a URL encapsulating the action request which executes the action when dereferenced  (only for actions using GET),
		 * * RDF generated from the action output,
		 * * a URL to an RDF viewer's display of the generated RDF.
		 * Any parameters required by the action are supplied as a JSON object in the POST body. The parameter types supported are: "query", "header", "uri", "path" and "body".  The parameter type determines where a supplied parameter value is inserted into the HTTP request constructed by OSDB to invoke the target service action. In addition to native parameters required by the service action, 'Execute action' accepts some OSDB-specific parameters.<br/><br/>
		 * **Examples**
		 * * ```curl -ik -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```
		 * * ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"generate_rdf", "osdb:response_format":"application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```
		 * * ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"display_rdf" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```
		 * * ```curl -ik -X POST -d '{ "q":"skiing", "osdb:response_format": "application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec```
		 * * ```curl -ik -X POST -d '{ "q":"skiing", "osdb:output_type": "url_only" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec```
		 * * ```curl -ik -X POST -d '{ "Content-Location": "http://demo.openlinksw.co.uk/pubs", "osdb:body_data_src_url": "http://ods-qa.openlinksw.com/DAV/home/osdb/pubs.csv", "extractor": "csv", "osdb:response_format": "application/rdf+xml", "osdb:body_data_encoding": "text/csv" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/csv_transformer/transform/exec```
		 * Post api/v1/actions/{serviceId}/{actionId}/exec
		 * @param {string} serviceId Service ID of the service supporting the action.
		 * @param {string} actionId Action ID of the action to execute.
		 * @param {ExecBody} requestBody Any parameters required by the action are supplied as a JSON object in the request body. The properties of this object depend on the service action being invoked.
		 * @return {void} 
		 */
		ExecuteAction(serviceId: string, actionId: string, requestBody: ExecBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/actions/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/' + (actionId == null ? '' : encodeURIComponent(actionId)) + '/exec', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Action help
		 * Returns the help text for a given service action
		 * Get api/v1/actions/{serviceId}/{actionId}/help
		 * @param {string} serviceId Service ID of the service supporting the action.
		 * @param {string} actionId Action ID of the action for which help text is being requested.
		 * @return {ActionHelpResponse} Action help text
		 */
		ActionHelp(serviceId: string, actionId: string): Observable<ActionHelpResponse> {
			return this.http.get<ActionHelpResponse>(this.baseUri + 'api/v1/actions/' + (serviceId == null ? '' : encodeURIComponent(serviceId)) + '/' + (actionId == null ? '' : encodeURIComponent(actionId)) + '/help', {});
		}

		/**
		 * Login
		 * Logs a user into the OSDB server, authenticating them by their WebID and returning an OSDB session ID in cookie osdb.sid
		 * Get api/v1/login
		 * @return {LoginResponse} Confirmation of a successful OSDB login.
		 */
		Login(): Observable<LoginResponse> {
			return this.http.get<LoginResponse>(this.baseUri + 'api/v1/login', {});
		}

		/**
		 * Logout
		 * Logs a user out of the OSDB server, ending their OSDB session
		 * Get api/v1/logout
		 * @return {LogoutResponse} Confirmation of a successful OSDB logout.
		 */
		Logout(): Observable<LogoutResponse> {
			return this.http.get<LogoutResponse>(this.baseUri + 'api/v1/logout', {});
		}

		/**
		 * List services
		 * Returns descriptions of all services registered with the OSDB server.
		 * Get api/v1/services
		 * @return {ListServicesResponse} An array of service descriptions for all services registered with the OSDB server
		 */
		ListServices(): Observable<ListServicesResponse> {
			return this.http.get<ListServicesResponse>(this.baseUri + 'api/v1/services', {});
		}

		/**
		 * Load service
		 * Loads a service description into the OSDB Service Registry
		 * Post api/v1/services
		 * @param {LoadServicePostBody} requestBody Service to register with OSDB
		 * @return {LoadServiceReturn} loadService response
		 */
		LoadService(requestBody: LoadServicePostBody): Observable<LoadServiceReturn> {
			return this.http.post<LoadServiceReturn>(this.baseUri + 'api/v1/services', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Unload service
		 * Removes a service description from the OSDB Service Registry
		 * Delete api/v1/services/{serviceId}
		 * @param {string} serviceId Service ID of the service to be unloaded
		 * @return {UnloadServiceReturn} unloadService response
		 */
		UnloadService(serviceId: string): Observable<UnloadServiceReturn> {
			return this.http.delete<UnloadServiceReturn>(this.baseUri + 'api/v1/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)), {});
		}

		/**
		 * Describe service
		 * Returns a description of a given service
		 * Get api/v1/services/{serviceId}
		 * @param {string} serviceId Service ID of the service to describe.
		 * @return {DescribeServiceResponse} A single service description
		 */
		DescribeService(serviceId: string): Observable<DescribeServiceResponse> {
			return this.http.get<DescribeServiceResponse>(this.baseUri + 'api/v1/services/' + (serviceId == null ? '' : encodeURIComponent(serviceId)), {});
		}
	}

	export interface LoadServicePostBody {

		/**
		 * The URL of the resource containing the service description to load.
		 * Required
		 */
		service_description_url: string;

		/** Service ID to be used to uniquely identify the service. (Optional: Required for anonymous services or to override the service name in the service description.) */
		service_moniker?: string | null;
	}
	export interface LoadServicePostBodyFormProperties {

		/**
		 * The URL of the resource containing the service description to load.
		 * Required
		 */
		service_description_url: FormControl<string | null | undefined>,

		/** Service ID to be used to uniquely identify the service. (Optional: Required for anonymous services or to override the service name in the service description.) */
		service_moniker: FormControl<string | null | undefined>,
	}
	export function CreateLoadServicePostBodyFormGroup() {
		return new FormGroup<LoadServicePostBodyFormProperties>({
			service_description_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			service_moniker: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LoadServiceReturn {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: string;

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: string;

		/**
		 * Confirmation message
		 * Required
		 */
		response: string;

		/** Required */
		status: ActionHelpResponseStatus;
	}
	export interface LoadServiceReturnFormProperties {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: FormControl<string | null | undefined>,

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/**
		 * Confirmation message
		 * Required
		 */
		response: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ActionHelpResponseStatus | null | undefined>,
	}
	export function CreateLoadServiceReturnFormGroup() {
		return new FormGroup<LoadServiceReturnFormProperties>({
			api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			response: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionHelpResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UnloadServiceReturn {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: string;

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: string;

		/**
		 * Confirmation message
		 * Required
		 */
		response: string;

		/** Required */
		status: ActionHelpResponseStatus;
	}
	export interface UnloadServiceReturnFormProperties {

		/**
		 * The path of the REST API method
		 * Required
		 */
		api: FormControl<string | null | undefined>,

		/**
		 * The name of the REST API method
		 * Required
		 */
		method: FormControl<string | null | undefined>,

		/**
		 * Confirmation message
		 * Required
		 */
		response: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ActionHelpResponseStatus | null | undefined>,
	}
	export function CreateUnloadServiceReturnFormGroup() {
		return new FormGroup<UnloadServiceReturnFormProperties>({
			api: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			method: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			response: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ActionHelpResponseStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

}

