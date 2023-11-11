import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** The Content resource. */
	export interface Content {

		/**
		 * The list of script project files.
		 * One of the files is a script manifest; it must be named "appsscript",
		 * must have type of JSON, and include the manifest configurations for the
		 * project.
		 */
		files?: Array<File> | null;

		/** The script project's Drive ID. */
		scriptId?: string | null;
	}


	/**
	 * An individual file within a script project.
	 * A file is a third-party source code created by one or more
	 * developers. It can be a server-side JS code, HTML, or a
	 * configuration file. Each script project can contain multiple files.
	 */
	export interface File {

		/**
		 * Creation date timestamp.
		 * This read-only field is only visible to users who have WRITER
		 * permission for the script project.
		 */
		createTime?: string | null;

		/** A set of functions. No duplicates are permitted. */
		functionSet?: GoogleAppsScriptTypeFunctionSet | null;

		/** A simple user profile resource. */
		lastModifyUser?: GoogleAppsScriptTypeUser | null;

		/**
		 * The name of the file. The file extension is not part of the file
		 * name, which can be identified from the type field.
		 */
		name?: string | null;

		/** The file content. */
		source?: string | null;

		/** The type of the file. */
		type?: FileType | null;

		/**
		 * Last modified date timestamp.
		 * This read-only field is only visible to users who have WRITER
		 * permission for the script project.
		 */
		updateTime?: string | null;
	}


	/** A set of functions. No duplicates are permitted. */
	export interface GoogleAppsScriptTypeFunctionSet {

		/** A list of functions composing the set. */
		values?: Array<GoogleAppsScriptTypeFunction> | null;
	}


	/** Represents a function in a script project. */
	export interface GoogleAppsScriptTypeFunction {

		/** The function name in the script project. */
		name?: string | null;
	}


	/** A simple user profile resource. */
	export interface GoogleAppsScriptTypeUser {

		/** The user's domain. */
		domain?: string | null;

		/** The user's identifying email address. */
		email?: string | null;

		/** The user's display name. */
		name?: string | null;

		/** The user's photo. */
		photoUrl?: string | null;
	}

	export enum FileType { ENUM_TYPE_UNSPECIFIED = 0, SERVER_JS = 1, HTML = 2, JSON = 3 }


	/** Request to create a script project. */
	export interface CreateProjectRequest {

		/**
		 * The Drive ID of a parent file that the created script project is bound to.
		 * This is usually the ID of a Google Doc, Google Sheet, Google Form, or
		 * Google Slides file. If not set, a standalone script project is created.
		 */
		parentId?: string | null;

		/** The title for the project. */
		title?: string | null;
	}


	/** Representation of a single script deployment. */
	export interface Deployment {

		/** Metadata the defines how a deployment is configured. */
		deploymentConfig?: DeploymentConfig | null;

		/** The deployment ID for this deployment. */
		deploymentId?: string | null;

		/** The deployment's entry points. */
		entryPoints?: Array<EntryPoint> | null;

		/** Last modified date time stamp. */
		updateTime?: string | null;
	}


	/** Metadata the defines how a deployment is configured. */
	export interface DeploymentConfig {

		/** The description for this deployment. */
		description?: string | null;

		/** The manifest file name for this deployment. */
		manifestFileName?: string | null;

		/** The script project's Drive ID. */
		scriptId?: string | null;

		/** The version number on which this deployment is based. */
		versionNumber?: number | null;
	}


	/** A configuration that defines how a deployment is accessed externally. */
	export interface EntryPoint {

		/** An add-on entry point. */
		addOn?: GoogleAppsScriptTypeAddOnEntryPoint | null;

		/** The type of the entry point. */
		entryPointType?: EntryPointEntryPointType | null;

		/** An API executable entry point. */
		executionApi?: GoogleAppsScriptTypeExecutionApiEntryPoint | null;

		/** A web application entry point. */
		webApp?: GoogleAppsScriptTypeWebAppEntryPoint | null;
	}


	/** An add-on entry point. */
	export interface GoogleAppsScriptTypeAddOnEntryPoint {

		/** The add-on's required list of supported container types. */
		addOnType?: GoogleAppsScriptTypeAddOnEntryPointAddOnType | null;

		/** The add-on's optional description. */
		description?: string | null;

		/** The add-on's optional help URL. */
		helpUrl?: string | null;

		/** The add-on's required post install tip URL. */
		postInstallTipUrl?: string | null;

		/** The add-on's optional report issue URL. */
		reportIssueUrl?: string | null;

		/** The add-on's required title. */
		title?: string | null;
	}

	export enum GoogleAppsScriptTypeAddOnEntryPointAddOnType { UNKNOWN_ADDON_TYPE = 0, GMAIL = 1, DATA_STUDIO = 2 }

	export enum EntryPointEntryPointType { ENTRY_POINT_TYPE_UNSPECIFIED = 0, WEB_APP = 1, EXECUTION_API = 2, ADD_ON = 3 }


	/** An API executable entry point. */
	export interface GoogleAppsScriptTypeExecutionApiEntryPoint {

		/** API executable entry point configuration. */
		entryPointConfig?: GoogleAppsScriptTypeExecutionApiConfig | null;
	}


	/** API executable entry point configuration. */
	export interface GoogleAppsScriptTypeExecutionApiConfig {

		/** Who has permission to run the API executable. */
		access?: GoogleAppsScriptTypeExecutionApiConfigAccess | null;
	}

	export enum GoogleAppsScriptTypeExecutionApiConfigAccess { UNKNOWN_ACCESS = 0, MYSELF = 1, DOMAIN = 2, ANYONE = 3, ANYONE_ANONYMOUS = 4 }


	/** A web application entry point. */
	export interface GoogleAppsScriptTypeWebAppEntryPoint {

		/** Web app entry point configuration. */
		entryPointConfig?: GoogleAppsScriptTypeWebAppConfig | null;

		/** The URL for the web application. */
		url?: string | null;
	}


	/** Web app entry point configuration. */
	export interface GoogleAppsScriptTypeWebAppConfig {

		/** Who has permission to run the web app. */
		access?: GoogleAppsScriptTypeExecutionApiConfigAccess | null;

		/** Who to execute the web app as. */
		executeAs?: GoogleAppsScriptTypeWebAppConfigExecuteAs | null;
	}

	export enum GoogleAppsScriptTypeWebAppConfigExecuteAs { UNKNOWN_EXECUTE_AS = 0, USER_ACCESSING = 1, USER_DEPLOYING = 2 }


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}


	/** The response for executing or debugging a function in an Apps Script project. */
	export interface ExecuteStreamResponse {

		/** The result of an execution. */
		result?: ScriptExecutionResult | null;
	}


	/** The result of an execution. */
	export interface ScriptExecutionResult {

		/**
		 * `Value` represents a dynamically typed value which is the outcome of an
		 * executed script.
		 */
		returnValue?: Value | null;
	}


	/**
	 * `Value` represents a dynamically typed value which is the outcome of an
	 * executed script.
	 */
	export interface Value {

		/** Represents a boolean value. */
		boolValue?: boolean | null;

		/** Represents raw byte values. */
		bytesValue?: string | null;

		/** Represents a date in ms since the epoch. */
		dateValue?: string | null;

		/** `ListValue` is a wrapper around a repeated field of values. */
		listValue?: ListValue | null;

		/** Represents a null value. */
		nullValue?: ValueNullValue | null;

		/** Represents a double value. */
		numberValue?: number | null;

		/** Represents a structured proto value. */
		protoValue?: {[id: string]: any } | null;

		/** Represents a string value. */
		stringValue?: string | null;

		/**
		 * `Struct` represents a structured data value, consisting of fields which map
		 * to dynamically typed values.
		 */
		structValue?: Struct | null;
	}


	/** `ListValue` is a wrapper around a repeated field of values. */
	export interface ListValue {

		/** Repeated field of dynamically typed values. */
		values?: Array<Value> | null;
	}

	export enum ValueNullValue { NULL_VALUE = 0 }


	/**
	 * `Struct` represents a structured data value, consisting of fields which map
	 * to dynamically typed values.
	 */
	export interface Struct {

		/** Unordered map of dynamically typed values. */
		fields?: {[id: string]: Value } | null;
	}


	/**
	 * An object that provides information about the nature of an error resulting
	 * from an attempted execution of a script function using the Apps Script API.
	 * If a run call
	 * succeeds but the script function (or Apps Script itself) throws an exception,
	 * the response body's error field
	 * contains a
	 * Status object. The `Status` object's `details` field
	 * contains an array with a single one of these `ExecutionError` objects.
	 */
	export interface ExecutionError {

		/**
		 * The error message thrown by Apps Script, usually localized into the user's
		 * language.
		 */
		errorMessage?: string | null;

		/**
		 * The error type, for example `TypeError` or `ReferenceError`. If the error
		 * type is unavailable, this field is not included.
		 */
		errorType?: string | null;

		/**
		 * An array of objects that provide a stack trace through the script to show
		 * where the execution failed, with the deepest call first.
		 */
		scriptStackTraceElements?: Array<ScriptStackTraceElement> | null;
	}


	/** A stack trace through the script that shows where the execution failed. */
	export interface ScriptStackTraceElement {

		/** The name of the function that failed. */
		function?: string | null;

		/** The line number where the script failed. */
		lineNumber?: number | null;
	}


	/**
	 * A request to run the function in a script. The script is identified by the
	 * specified `script_id`. Executing a function on a script returns results
	 * based on the implementation of the script.
	 */
	export interface ExecutionRequest {

		/**
		 * If `true` and the user is an owner of the script, the script runs at the
		 * most recently saved version rather than the version deployed for use with
		 * the Apps Script API. Optional; default is `false`.
		 */
		devMode?: boolean | null;

		/**
		 * The name of the function to execute in the given script. The name does not
		 * include parentheses or parameters. It can reference a function in an
		 * included library such as `Library.libFunction1`.
		 */
		function?: string | null;

		/**
		 * The parameters to be passed to the function being executed. The object type
		 * for each parameter should match the expected type in Apps Script.
		 * Parameters cannot be Apps Script-specific object types (such as a
		 * `Document` or a `Calendar`); they can only be primitive types such as
		 * `string`, `number`, `array`, `object`, or `boolean`. Optional.
		 */
		parameters?: Array<string> | null;

		/**
		 * <b>Deprecated</b>. For use with Android add-ons only. An ID that represents
		 * the user's current session in the Android app for Google Docs or Sheets,
		 * included as extra data in the
		 * [Intent](https://developer.android.com/guide/components/intents-filters.html)
		 * that launches the add-on. When an Android add-on is run with a session
		 * state, it gains the privileges of a
		 * [bound](https://developers.google.com/apps-script/guides/bound)
		 * script&mdash;that is, it can access information like the user's current
		 * cursor position (in Docs) or selected cell (in Sheets). To retrieve the
		 * state, call
		 * `Intent.getStringExtra("com.google.android.apps.docs.addons.SessionState")`.
		 * Optional.
		 */
		sessionState?: string | null;
	}


	/**
	 * An object that provides the return value of a function executed using the
	 * Apps Script API. If the script function returns successfully, the response
	 * body's response field contains this
	 * `ExecutionResponse` object.
	 */
	export interface ExecutionResponse {

		/**
		 * The return value of the script function. The type matches the object type
		 * returned in Apps Script. Functions called using the Apps Script API cannot
		 * return Apps Script-specific objects (such as a `Document` or a `Calendar`);
		 * they can only return primitive types such as a `string`, `number`, `array`,
		 * `object`, or `boolean`.
		 */
		result?: any | null;
	}


	/**
	 * Representation of a single script process execution that was started from
	 * the script editor, a trigger, an application, or using the Apps Script API.
	 * This is distinct from the `Operation`
	 * resource, which only represents executions started via the Apps Script API.
	 */
	export interface GoogleAppsScriptTypeProcess {

		/** Duration the execution spent executing. */
		duration?: string | null;

		/** Name of the function the started the execution. */
		functionName?: string | null;

		/** The executions status. */
		processStatus?: GoogleAppsScriptTypeProcessProcessStatus | null;

		/** The executions type. */
		processType?: GoogleAppsScriptTypeProcessProcessType | null;

		/** Name of the script being executed. */
		projectName?: string | null;

		/** Time the execution started. */
		startTime?: string | null;

		/** The executing users access level to the script. */
		userAccessLevel?: GoogleAppsScriptTypeProcessUserAccessLevel | null;
	}

	export enum GoogleAppsScriptTypeProcessProcessStatus { PROCESS_STATUS_UNSPECIFIED = 0, RUNNING = 1, PAUSED = 2, COMPLETED = 3, CANCELED = 4, FAILED = 5, TIMED_OUT = 6, UNKNOWN = 7, DELAYED = 8 }

	export enum GoogleAppsScriptTypeProcessProcessType { PROCESS_TYPE_UNSPECIFIED = 0, ADD_ON = 1, EXECUTION_API = 2, TIME_DRIVEN = 3, TRIGGER = 4, WEBAPP = 5, EDITOR = 6, SIMPLE_TRIGGER = 7, MENU = 8, BATCH_TASK = 9 }

	export enum GoogleAppsScriptTypeProcessUserAccessLevel { USER_ACCESS_LEVEL_UNSPECIFIED = 0, NONE = 1, READ = 2, WRITE = 3, OWNER = 4 }


	/** Response with the list of deployments for the specified Apps Script project. */
	export interface ListDeploymentsResponse {

		/** The list of deployments. */
		deployments?: Array<Deployment> | null;

		/**
		 * The token that can be used in the next call to get the next page of
		 * results.
		 */
		nextPageToken?: string | null;
	}


	/**
	 * Response with the list of
	 * Process resources.
	 */
	export interface ListScriptProcessesResponse {

		/**
		 * Token for the next page of results. If empty, there are no more pages
		 * remaining.
		 */
		nextPageToken?: string | null;

		/** List of processes matching request parameters. */
		processes?: Array<GoogleAppsScriptTypeProcess> | null;
	}


	/**
	 * Response with the list of
	 * Process resources.
	 */
	export interface ListUserProcessesResponse {

		/**
		 * Token for the next page of results. If empty, there are no more pages
		 * remaining.
		 */
		nextPageToken?: string | null;

		/** List of processes matching request parameters. */
		processes?: Array<GoogleAppsScriptTypeProcess> | null;
	}


	/** Response with the list of the versions for the specified script project. */
	export interface ListVersionsResponse {

		/**
		 * The token use to fetch the next page of records. if not exist in the
		 * response, that means no more versions to list.
		 */
		nextPageToken?: string | null;

		/** The list of versions. */
		versions?: Array<Version> | null;
	}


	/**
	 * A resource representing a script project version. A version is a "snapshot"
	 * of a script project and is similar to a read-only branched release. When
	 * creating deployments, the version to use must be specified.
	 */
	export interface Version {

		/** When the version was created. */
		createTime?: string | null;

		/** The description for this version. */
		description?: string | null;

		/** The script project's Drive ID. */
		scriptId?: string | null;

		/**
		 * The incremental ID that is created by Apps Script when a version is
		 * created. This is system assigned number and is immutable once created.
		 */
		versionNumber?: number | null;
	}


	/**
	 * Resource containing usage stats for a given script, based on the supplied
	 * filter and mask present in the request.
	 */
	export interface Metrics {

		/** Number of active users. */
		activeUsers?: Array<MetricsValue> | null;

		/** Number of failed executions. */
		failedExecutions?: Array<MetricsValue> | null;

		/** Number of total executions. */
		totalExecutions?: Array<MetricsValue> | null;
	}


	/** Metrics value that holds number of executions counted. */
	export interface MetricsValue {

		/** Required field indicating the end time of the interval. */
		endTime?: string | null;

		/** Required field indicating the start time of the interval. */
		startTime?: string | null;

		/** Indicates the number of executions counted. */
		value?: string | null;
	}


	/**
	 * A representation of an execution of an Apps Script function started with run. The execution response does not arrive until the function finishes executing. The maximum execution runtime is listed in the [Apps Script quotas guide](/apps-script/guides/services/quotas#current_limitations). <p>After execution has started, it can have one of four outcomes:</p> <ul> <li> If the script function returns successfully, the
	 *   response field contains an
	 *   ExecutionResponse object
	 *   with the function's return value in the object's `result` field.</li>
	 * <li> If the script function (or Apps Script itself) throws an exception, the
	 *   error field contains a
	 *   Status object. The `Status` object's `details`
	 *   field contains an array with a single
	 *   ExecutionError object that
	 *   provides information about the nature of the error.</li>
	 * <li> If the execution has not yet completed,
	 *   the done field is `false` and
	 *   the neither the `response` nor `error` fields are present.</li>
	 * <li> If the `run` call itself fails (for example, because of a
	 *   malformed request or an authorization error), the method returns an HTTP
	 *   response code in the 4XX range with a different format for the response
	 *   body. Client libraries automatically convert a 4XX response into an
	 *   exception class.</li>
	 * </ul>
	 */
	export interface Operation {

		/** This field indicates whether the script execution has completed. A completed execution has a populated `response` field containing the ExecutionResponse from function that was executed. */
		done?: boolean | null;

		/** If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object. */
		error?: Status | null;

		/** If the script function returns successfully, this field contains an ExecutionResponse object with the function's return value. */
		response?: {[id: string]: any } | null;
	}


	/** If a `run` call succeeds but the script function (or Apps Script itself) throws an exception, the response body's error field contains this `Status` object. */
	export interface Status {

		/** The status code. For this API, this value either: <ul> <li> 10, indicating a `SCRIPT_TIMEOUT` error,</li> <li> 3, indicating an `INVALID_ARGUMENT` error, or</li> <li> 1, indicating a `CANCELLED` execution.</li> </ul> */
		code?: number | null;

		/** An array that contains a single ExecutionError object that provides information about the nature of the error. */
		details?: Array<string> | null;

		/** A developer-facing error message, which is in English. Any user-facing error message is localized and sent in the details field, or localized by the client. */
		message?: string | null;
	}


	/** The script project resource. */
	export interface Project {

		/** When the script was created. */
		createTime?: string | null;

		/** A simple user profile resource. */
		creator?: GoogleAppsScriptTypeUser | null;

		/** A simple user profile resource. */
		lastModifyUser?: GoogleAppsScriptTypeUser | null;

		/**
		 * The parent's Drive ID that the script will be attached to. This is usually
		 * the ID of a Google Document or Google Sheet. This filed is optional, and
		 * if not set, a stand-alone script will be created.
		 */
		parentId?: string | null;

		/** The script project's Drive ID. */
		scriptId?: string | null;

		/** The title for the project. */
		title?: string | null;

		/** When the script was last updated. */
		updateTime?: string | null;
	}


	/** Request with deployment information to update an existing deployment. */
	export interface UpdateDeploymentRequest {

		/** Metadata the defines how a deployment is configured. */
		deploymentConfig?: DeploymentConfig | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List information about processes made by or on behalf of a user,
		 * such as process type and current status.
		 * Get v1/processes
		 * @param {number} pageSize The maximum number of returned processes per page of results. Defaults to
		 * 50.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This
		 * should be set to the value of `nextPageToken` from a previous response.
		 * @param {string} userProcessFilter_deploymentId Optional field used to limit returned processes to those originating from
		 * projects with a specific deployment ID.
		 * @param {string} userProcessFilter_endTime Optional field used to limit returned processes to those that completed
		 * on or before the given timestamp.
		 * @param {string} userProcessFilter_functionName Optional field used to limit returned processes to those originating from
		 * a script function with the given function name.
		 * @param {string} userProcessFilter_projectName Optional field used to limit returned processes to those originating from
		 * projects with project names containing a specific string.
		 * @param {string} userProcessFilter_scriptId Optional field used to limit returned processes to those originating from
		 * projects with a specific script ID.
		 * @param {string} userProcessFilter_startTime Optional field used to limit returned processes to those that were
		 * started on or after the given timestamp.
		 * @param {Array<GoogleAppsScriptTypeProcessProcessStatus>} userProcessFilter_statuses Optional field used to limit returned processes to those having one of
		 * the specified process statuses.
		 * @param {Array<GoogleAppsScriptTypeProcessProcessType>} userProcessFilter_types Optional field used to limit returned processes to those having one of
		 * the specified process types.
		 * @param {Array<GoogleAppsScriptTypeProcessUserAccessLevel>} userProcessFilter_userAccessLevels Optional field used to limit returned processes to those having one of
		 * the specified user access levels.
		 * @return {void} Successful response
		 */
		Script_processes_list(pageSize: number, pageToken: string, userProcessFilter_deploymentId: string, userProcessFilter_endTime: string, userProcessFilter_functionName: string, userProcessFilter_projectName: string, userProcessFilter_scriptId: string, userProcessFilter_startTime: string, userProcessFilter_statuses: Array<GoogleAppsScriptTypeProcessProcessStatus>, userProcessFilter_types: Array<GoogleAppsScriptTypeProcessProcessType>, userProcessFilter_userAccessLevels: Array<GoogleAppsScriptTypeProcessUserAccessLevel>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/processes?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&userProcessFilter_deploymentId=' + (userProcessFilter_deploymentId == null ? '' : encodeURIComponent(userProcessFilter_deploymentId)) + '&userProcessFilter_endTime=' + (userProcessFilter_endTime == null ? '' : encodeURIComponent(userProcessFilter_endTime)) + '&userProcessFilter_functionName=' + (userProcessFilter_functionName == null ? '' : encodeURIComponent(userProcessFilter_functionName)) + '&userProcessFilter_projectName=' + (userProcessFilter_projectName == null ? '' : encodeURIComponent(userProcessFilter_projectName)) + '&userProcessFilter_scriptId=' + (userProcessFilter_scriptId == null ? '' : encodeURIComponent(userProcessFilter_scriptId)) + '&userProcessFilter_startTime=' + (userProcessFilter_startTime == null ? '' : encodeURIComponent(userProcessFilter_startTime)) + '&' + userProcessFilter_statuses.map(z => `userProcessFilter_statuses=${z}`).join('&') + '&' + userProcessFilter_types.map(z => `userProcessFilter_types=${z}`).join('&') + '&' + userProcessFilter_userAccessLevels.map(z => `userProcessFilter_userAccessLevels=${z}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List information about a script's executed processes, such as process type
		 * and current status.
		 * Get v1/processes:listScriptProcesses
		 * @param {number} pageSize The maximum number of returned processes per page of results. Defaults to
		 * 50.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This
		 * should be set to the value of `nextPageToken` from a previous response.
		 * @param {string} scriptId The script ID of the project whose processes are listed.
		 * @param {string} scriptProcessFilter_deploymentId Optional field used to limit returned processes to those originating from
		 * projects with a specific deployment ID.
		 * @param {string} scriptProcessFilter_endTime Optional field used to limit returned processes to those that completed
		 * on or before the given timestamp.
		 * @param {string} scriptProcessFilter_functionName Optional field used to limit returned processes to those originating from
		 * a script function with the given function name.
		 * @param {string} scriptProcessFilter_startTime Optional field used to limit returned processes to those that were
		 * started on or after the given timestamp.
		 * @param {Array<GoogleAppsScriptTypeProcessProcessStatus>} scriptProcessFilter_statuses Optional field used to limit returned processes to those having one of
		 * the specified process statuses.
		 * @param {Array<GoogleAppsScriptTypeProcessProcessType>} scriptProcessFilter_types Optional field used to limit returned processes to those having one of
		 * the specified process types.
		 * @param {Array<GoogleAppsScriptTypeProcessUserAccessLevel>} scriptProcessFilter_userAccessLevels Optional field used to limit returned processes to those having one of
		 * the specified user access levels.
		 * @return {void} Successful response
		 */
		Script_processes_listScriptProcesses(pageSize: number, pageToken: string, scriptId: string, scriptProcessFilter_deploymentId: string, scriptProcessFilter_endTime: string, scriptProcessFilter_functionName: string, scriptProcessFilter_startTime: string, scriptProcessFilter_statuses: Array<GoogleAppsScriptTypeProcessProcessStatus>, scriptProcessFilter_types: Array<GoogleAppsScriptTypeProcessProcessType>, scriptProcessFilter_userAccessLevels: Array<GoogleAppsScriptTypeProcessUserAccessLevel>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/processes:listScriptProcesses?pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&scriptId=' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '&scriptProcessFilter_deploymentId=' + (scriptProcessFilter_deploymentId == null ? '' : encodeURIComponent(scriptProcessFilter_deploymentId)) + '&scriptProcessFilter_endTime=' + (scriptProcessFilter_endTime == null ? '' : encodeURIComponent(scriptProcessFilter_endTime)) + '&scriptProcessFilter_functionName=' + (scriptProcessFilter_functionName == null ? '' : encodeURIComponent(scriptProcessFilter_functionName)) + '&scriptProcessFilter_startTime=' + (scriptProcessFilter_startTime == null ? '' : encodeURIComponent(scriptProcessFilter_startTime)) + '&' + scriptProcessFilter_statuses.map(z => `scriptProcessFilter_statuses=${z}`).join('&') + '&' + scriptProcessFilter_types.map(z => `scriptProcessFilter_types=${z}`).join('&') + '&' + scriptProcessFilter_userAccessLevels.map(z => `scriptProcessFilter_userAccessLevels=${z}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new, empty script project with no script files and a base
		 * manifest file.
		 * Post v1/projects
		 * @return {void} Successful response
		 */
		Script_projects_create(requestBody: CreateProjectRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a script project's metadata.
		 * Get v1/projects/{scriptId}
		 * @param {string} scriptId The script project's Drive ID.
		 * @return {void} Successful response
		 */
		Script_projects_get(scriptId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the content of the script project, including the code source and
		 * metadata for each script file.
		 * Get v1/projects/{scriptId}/content
		 * @param {string} scriptId The script project's Drive ID.
		 * @param {number} versionNumber The version number of the project to retrieve. If not provided, the
		 * project's HEAD version is returned.
		 * @return {void} Successful response
		 */
		Script_projects_getContent(scriptId: string, versionNumber: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/content&versionNumber=' + versionNumber, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the content of the specified script project.
		 * This content is stored as the HEAD version, and is used when the script is
		 * executed as a trigger, in the script editor, in add-on preview mode, or as
		 * a web app or Apps Script API in development mode. This clears all the
		 * existing files in the project.
		 * Put v1/projects/{scriptId}/content
		 * @param {string} scriptId The script project's Drive ID.
		 * @return {void} Successful response
		 */
		Script_projects_updateContent(scriptId: string, requestBody: Content): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/content', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the deployments of an Apps Script project.
		 * Get v1/projects/{scriptId}/deployments
		 * @param {string} scriptId The script project's Drive ID.
		 * @param {number} pageSize The maximum number of deployments on each returned page. Defaults to 50.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This
		 * should be set to the value of `nextPageToken` from a previous response.
		 * @return {void} Successful response
		 */
		Script_projects_deployments_list(scriptId: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/deployments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a deployment of an Apps Script project.
		 * Post v1/projects/{scriptId}/deployments
		 * @param {string} scriptId The script project's Drive ID.
		 * @return {void} Successful response
		 */
		Script_projects_deployments_create(scriptId: string, requestBody: DeploymentConfig): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a deployment of an Apps Script project.
		 * Delete v1/projects/{scriptId}/deployments/{deploymentId}
		 * @param {string} scriptId The script project's Drive ID.
		 * @param {string} deploymentId The deployment ID to be undeployed.
		 * @return {void} Successful response
		 */
		Script_projects_deployments_delete(scriptId: string, deploymentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a deployment of an Apps Script project.
		 * Get v1/projects/{scriptId}/deployments/{deploymentId}
		 * @param {string} scriptId The script project's Drive ID.
		 * @param {string} deploymentId The deployment ID.
		 * @return {void} Successful response
		 */
		Script_projects_deployments_get(scriptId: string, deploymentId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a deployment of an Apps Script project.
		 * Put v1/projects/{scriptId}/deployments/{deploymentId}
		 * @param {string} scriptId The script project's Drive ID.
		 * @param {string} deploymentId The deployment ID for this deployment.
		 * @return {void} Successful response
		 */
		Script_projects_deployments_update(scriptId: string, deploymentId: string, requestBody: UpdateDeploymentRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get metrics data for scripts, such as number of executions and
		 * active users.
		 * Get v1/projects/{scriptId}/metrics
		 * @param {string} scriptId Required field indicating the script to get metrics for.
		 * @param {string} metricsFilter_deploymentId Optional field indicating a specific deployment to retrieve metrics from.
		 * @param {Script_projects_getMetricsMetricsGranularity} metricsGranularity Required field indicating what granularity of metrics are returned.
		 * @return {void} Successful response
		 */
		Script_projects_getMetrics(scriptId: string, metricsFilter_deploymentId: string, metricsGranularity: Script_projects_getMetricsMetricsGranularity): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/metrics&metricsFilter_deploymentId=' + (metricsFilter_deploymentId == null ? '' : encodeURIComponent(metricsFilter_deploymentId)) + '&metricsGranularity=' + metricsGranularity, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List the versions of a script project.
		 * Get v1/projects/{scriptId}/versions
		 * @param {string} scriptId The script project's Drive ID.
		 * @param {number} pageSize The maximum number of versions on each returned page. Defaults to 50.
		 * @param {string} pageToken The token for continuing a previous list request on the next page. This
		 * should be set to the value of `nextPageToken` from a previous response.
		 * @return {void} Successful response
		 */
		Script_projects_versions_list(scriptId: string, pageSize: number, pageToken: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/versions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new immutable version using the current code, with a unique
		 * version number.
		 * Post v1/projects/{scriptId}/versions
		 * @param {string} scriptId The script project's Drive ID.
		 * @return {void} Successful response
		 */
		Script_projects_versions_create(scriptId: string, requestBody: Version): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a version of a script project.
		 * Get v1/projects/{scriptId}/versions/{versionNumber}
		 * @param {string} scriptId The script project's Drive ID.
		 * @param {number} versionNumber The version number.
		 * @return {void} Successful response
		 */
		Script_projects_versions_get(scriptId: string, versionNumber: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/projects/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + '/versions/' + versionNumber, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Runs a function in an Apps Script project. The script project must be
		 * deployed for use with the Apps Script API and the calling application must
		 * share the same Cloud Platform project.
		 * This method requires authorization with an OAuth 2.0 token that includes at
		 * least one of the scopes listed in the
		 * [Authorization](#authorization-scopes) section; script projects that do not
		 * require authorization cannot be executed through this API. To find the
		 * correct scopes to include in the authentication token, open the project in
		 * the script editor, then select **File > Project properties** and click the
		 * **Scopes** tab.
		 * The error `403, PERMISSION_DENIED: The caller does not have permission`
		 * indicates that the Cloud Platform project used to authorize the request is
		 * not the same as the one used by the script.
		 * Post v1/scripts/{scriptId}:run
		 * @param {string} scriptId The script ID of the script to be executed. To find the script ID, open
		 * the project in the script editor and select **File > Project properties**.
		 * @return {void} Successful response
		 */
		Script_scripts_run(scriptId: string, requestBody: ExecutionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/scripts/' + (scriptId == null ? '' : encodeURIComponent(scriptId)) + ':run', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Script_projects_getMetricsMetricsGranularity { UNSPECIFIED_GRANULARITY = 0, WEEKLY = 1, DAILY = 2 }

}

