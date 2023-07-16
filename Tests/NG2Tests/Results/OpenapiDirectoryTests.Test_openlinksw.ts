import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface ActionDescription {

		/**
		 * A unique one word identifier for the action.
		 * Required
		 */
		action_id: string;

		/** A short description of the action. */
		description?: string;
		entry_point: EntryPoint;
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
		response: ActionHelp;
		status: ActionHelpResponseStatus;
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
		response: ActionDescription;
		status: ActionHelpResponseStatus;
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
		response: ServiceDescription;
		status: ActionHelpResponseStatus;
	}

	export interface ServiceDescription {

		/** A short description of the service. */
		description?: string;

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

	export interface ErrorModel {

		/** The path of the REST API method reporting the error */
		api?: string;

		/** The name of the REST API method reporting the error */
		method?: string;

		/** A message describing the error */
		response?: string;
		status?: ErrorModelStatus;
	}

	export enum ErrorModelStatus { error = 0 }

	export interface ExecBody {

		/** An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value. */
		action_specific_property1?: string;

		/** An example action specific property. There may be 0, 1 or more action specific properties, each holding an action specific parameter value. */
		action_specific_property2?: string;

		/** The media type of the data associated with osdb:body_data_raw or osdb:body_data_src_url. In the case of osdb:body_data_raw, this is the media type before base64 encoding. */
		osdb_body_data_encoding?: string;

		/** Input data for the action (e.g. CSV data). The data must be base64 encoded by the client. Alternatively, clients can use osdb:body_data_src_url to supply the input data via a web-accessible document. */
		osdb_body_data_raw?: string;

		/** URL of a resource containing input data for the action (e.g. CSV data). Clients can instead use osdb:body_data_raw to supply the input data directly. */
		osdb_body_data_src_url?: string;

		/** An OSDB-specific parameter controlling the action output type. If omitted, the native action output is returned. */
		osdb_output_type?: ExecBodyOsdb_output_type;

		/** Preferred response MIME type. This must be an output MIME type supported natively by the action or, if 'osdb:output_type' is set to 'generate_rdf', a Virtuoso Sponger output format. i.e. 'application/ld+json', 'text/turtle' or 'application/rdf+xml'. */
		osdb_response_format?: string;
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
		response: Array<ActionDescription>;
		status: ActionHelpResponseStatus;
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
		response: Array<ServiceDescription>;
		status: ActionHelpResponseStatus;
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
		response: LoginResponseResponse;
		status: ActionHelpResponseStatus;
	}

	export interface LoginResponseResponse {

		/**
		 * The WebID of the user who has logged in.
		 * Required
		 */
		user: string;
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
		response: LogoutResponseResponse;
		status: ActionHelpResponseStatus;
	}

	export interface LogoutResponseResponse {

		/**
		 * The WebID of the user who has logged out.
		 * Required
		 */
		user: string;
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
		service_moniker?: string;
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
		status: ActionHelpResponseStatus;
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
		status: ActionHelpResponseStatus;
	}

}

