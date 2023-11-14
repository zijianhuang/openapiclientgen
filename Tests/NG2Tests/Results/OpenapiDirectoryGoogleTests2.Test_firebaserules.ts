import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Arg matchers for the mock function. */
	export interface Arg {

		/**
		 * A generic empty message that you can re-use to avoid defining duplicated
		 * empty messages in your APIs. A typical example is to use it as the request
		 * or the response type of an API method. For instance:
		 * service Foo {
		 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
		 * }
		 * The JSON representation for `Empty` is empty JSON object `{}`.
		 */
		anyValue?: Empty | null;

		/** Argument exactly matches value provided. */
		exactValue?: any | null;
	}


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


	/**
	 * Describes where in a file an expression is found and what it was
	 * evaluated to over the course of its use.
	 */
	export interface ExpressionReport {

		/** Subexpressions */
		children?: Array<ExpressionReport> | null;

		/**
		 * Position in the `Source` content including its line, column number, and an
		 * index of the `File` in the `Source` message. Used for debug purposes.
		 */
		sourcePosition?: SourcePosition | null;

		/** Values that this expression evaluated to when encountered. */
		values?: Array<ValueCount> | null;
	}


	/**
	 * Position in the `Source` content including its line, column number, and an
	 * index of the `File` in the `Source` message. Used for debug purposes.
	 */
	export interface SourcePosition {

		/** First column on the source line associated with the source fragment. */
		column?: number | null;

		/** Start position relative to the beginning of the file. */
		currentOffset?: number | null;

		/** End position relative to the beginning of the file. */
		endOffset?: number | null;

		/** Name of the `File`. */
		fileName?: string | null;

		/** Line number of the source fragment. 1-based. */
		line?: number | null;
	}


	/**
	 * Tuple for how many times an Expression was evaluated to a particular
	 * ExpressionValue.
	 */
	export interface ValueCount {

		/** The amount of times that expression returned. */
		count?: number | null;

		/** The return value of the expression */
		value?: any | null;
	}


	/** `File` containing source content. */
	export interface File {

		/** Textual Content. */
		content?: string | null;

		/** Fingerprint (e.g. github sha) associated with the `File`. */
		fingerprint?: string | null;

		/** File name. */
		name?: string | null;
	}


	/**
	 * Represents a service-defined function call that was invoked during test
	 * execution.
	 */
	export interface FunctionCall {

		/** The arguments that were provided to the function. */
		args?: Array<string> | null;

		/** Name of the function invoked. */
		function?: string | null;
	}


	/**
	 * Mock function definition.
	 * Mocks must refer to a function declared by the target service. The type of
	 * the function args and result will be inferred at test time. If either the
	 * arg or result values are not compatible with function type declaration, the
	 * request will be considered invalid.
	 * More than one `FunctionMock` may be provided for a given function name so
	 * long as the `Arg` matchers are distinct. There may be only one function
	 * for a given overload where all `Arg` values are `Arg.any_value`.
	 */
	export interface FunctionMock {

		/**
		 * The list of `Arg` values to match. The order in which the arguments are
		 * provided is the order in which they must appear in the function
		 * invocation.
		 */
		args?: Array<Arg> | null;

		/**
		 * The name of the function.
		 * The function name must match one provided by a service declaration.
		 */
		function?: string | null;

		/** Possible result values from the function mock invocation. */
		result?: Result | null;
	}


	/** Possible result values from the function mock invocation. */
	export interface Result {

		/**
		 * A generic empty message that you can re-use to avoid defining duplicated
		 * empty messages in your APIs. A typical example is to use it as the request
		 * or the response type of an API method. For instance:
		 * service Foo {
		 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
		 * }
		 * The JSON representation for `Empty` is empty JSON object `{}`.
		 */
		undefined?: Empty | null;

		/**
		 * The result is an actual value. The type of the value must match that
		 * of the type declared by the service.
		 */
		value?: any | null;
	}


	/** The response for FirebaseRulesService.GetReleaseExecutable */
	export interface GetReleaseExecutableResponse {

		/** Executable view of the `Ruleset` referenced by the `Release`. */
		executable?: string | null;

		/** The Rules runtime version of the executable. */
		executableVersion?: GetReleaseExecutableResponseExecutableVersion | null;

		/** `Language` used to generate the executable bytes. */
		language?: GetReleaseExecutableResponseLanguage | null;

		/** `Ruleset` name associated with the `Release` executable. */
		rulesetName?: string | null;

		/**
		 * Optional, indicates the freshness of the result. The response is
		 * guaranteed to be the latest within an interval up to the
		 * sync_time (inclusive).
		 */
		syncTime?: string | null;

		/** Timestamp for the most recent `Release.update_time`. */
		updateTime?: string | null;
	}

	export enum GetReleaseExecutableResponseExecutableVersion { RELEASE_EXECUTABLE_VERSION_UNSPECIFIED = 0, FIREBASE_RULES_EXECUTABLE_V1 = 1, FIREBASE_RULES_EXECUTABLE_V2 = 2 }

	export enum GetReleaseExecutableResponseLanguage { LANGUAGE_UNSPECIFIED = 0, FIREBASE_RULES = 1, EVENT_FLOW_TRIGGERS = 2 }


	/** Issues include warnings, errors, and deprecation notices. */
	export interface Issue {

		/** Short error description. */
		description?: string | null;

		/** The severity of the issue. */
		severity?: IssueSeverity | null;

		/**
		 * Position in the `Source` content including its line, column number, and an
		 * index of the `File` in the `Source` message. Used for debug purposes.
		 */
		sourcePosition?: SourcePosition | null;
	}

	export enum IssueSeverity { SEVERITY_UNSPECIFIED = 0, DEPRECATION = 1, WARNING = 2, ERROR = 3 }


	/** The response for FirebaseRulesService.ListReleases. */
	export interface ListReleasesResponse {

		/**
		 * The pagination token to retrieve the next page of results. If the value is
		 * empty, no further results remain.
		 */
		nextPageToken?: string | null;

		/** List of `Release` instances. */
		releases?: Array<Release> | null;
	}


	/**
	 * `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a
	 * `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
	 */
	export interface Release {

		/**
		 * Time the release was created.
		 * Output only.
		 */
		createTime?: string | null;

		/**
		 * Resource name for the `Release`.
		 * `Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2`
		 * which affords developers a great deal of flexibility in mapping the name
		 * to the style that best fits their existing development practices. For
		 * example, a name could refer to an environment, an app, a version, or some
		 * combination of three.
		 * In the table below, for the project name `projects/foo`, the following
		 * relative release paths show how flat and structured names might be chosen
		 * to match a desired development / deployment strategy.
		 * Use Case     | Flat Name           | Structured Name
		 * -------------|---------------------|----------------
		 * Environments | releases/qa         | releases/qa
		 * Apps         | releases/app1_qa    | releases/app1/qa
		 * Versions     | releases/app1_v2_qa | releases/app1/v2/qa
		 * The delimiter between the release name path elements can be almost anything
		 * and it should work equally well with the release name list filter, but in
		 * many ways the structured paths provide a clearer picture of the
		 * relationship between `Release` instances.
		 * Format: `projects/{project_id}/releases/{release_id}`
		 */
		name?: string | null;

		/**
		 * Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must
		 * exist the `Release` to be created.
		 */
		rulesetName?: string | null;

		/**
		 * Time the release was updated.
		 * Output only.
		 */
		updateTime?: string | null;
	}


	/** The response for FirebaseRulesService.ListRulesets. */
	export interface ListRulesetsResponse {

		/**
		 * The pagination token to retrieve the next page of results. If the value is
		 * empty, no further results remain.
		 */
		nextPageToken?: string | null;

		/** List of `Ruleset` instances. */
		rulesets?: Array<Ruleset> | null;
	}


	/**
	 * `Ruleset` is an immutable copy of `Source` with a globally unique identifier
	 * and a creation time.
	 */
	export interface Ruleset {

		/**
		 * Time the `Ruleset` was created.
		 * Output only.
		 */
		createTime?: string | null;

		/** Metadata for a Ruleset. */
		metadata?: Metadata | null;

		/**
		 * Name of the `Ruleset`. The ruleset_id is auto generated by the service.
		 * Format: `projects/{project_id}/rulesets/{ruleset_id}`
		 * Output only.
		 */
		name?: string | null;

		/** `Source` is one or more `File` messages comprising a logical set of rules. */
		source?: Source | null;
	}


	/** Metadata for a Ruleset. */
	export interface Metadata {

		/**
		 * Services that this ruleset has declarations for (e.g.,
		 * "cloud.firestore"). There may be 0+ of these.
		 */
		services?: Array<string> | null;
	}


	/** `Source` is one or more `File` messages comprising a logical set of rules. */
	export interface Source {

		/** `File` set constituting the `Source` bundle. */
		files?: Array<File> | null;
	}


	/**
	 * `TestCase` messages provide the request context and an expectation as to
	 * whether the given context will be allowed or denied. Test cases may specify
	 * the `request`, `resource`, and `function_mocks` to mock a function call to
	 * a service-provided function.
	 * The `request` object represents context present at request-time.
	 * The `resource` is the value of the target resource as it appears in
	 * persistent storage before the request is executed.
	 */
	export interface TestCase {

		/** Test expectation. */
		expectation?: TestCaseExpectation | null;

		/** Specifies what should be included in the response. */
		expressionReportLevel?: TestCaseExpressionReportLevel | null;

		/**
		 * Optional function mocks for service-defined functions. If not set, any
		 * service defined function is expected to return an error, which may or may
		 * not influence the test outcome.
		 */
		functionMocks?: Array<FunctionMock> | null;

		/** Specifies whether paths (such as request.path) are encoded and how. */
		pathEncoding?: TestCasePathEncoding | null;

		/**
		 * Request context.
		 * The exact format of the request context is service-dependent. See the
		 * appropriate service documentation for information about the supported
		 * fields and types on the request. Minimally, all services support the
		 * following fields and types:
		 * Request field  | Type
		 * ---------------|-----------------
		 * auth.uid       | `string`
		 * auth.token     | `map<string, string>`
		 * headers        | `map<string, string>`
		 * method         | `string`
		 * params         | `map<string, string>`
		 * path           | `string`
		 * time           | `google.protobuf.Timestamp`
		 * If the request value is not well-formed for the service, the request will
		 * be rejected as an invalid argument.
		 */
		request?: any | null;

		/**
		 * Optional resource value as it appears in persistent storage before the
		 * request is fulfilled.
		 * The resource type depends on the `request.path` value.
		 */
		resource?: any | null;
	}

	export enum TestCaseExpectation { EXPECTATION_UNSPECIFIED = 0, ALLOW = 1, DENY = 2 }

	export enum TestCaseExpressionReportLevel { LEVEL_UNSPECIFIED = 0, NONE = 1, FULL = 2, VISITED = 3 }

	export enum TestCasePathEncoding { ENCODING_UNSPECIFIED = 0, URL_ENCODED = 1, PLAIN = 2 }


	/**
	 * Test result message containing the state of the test as well as a
	 * description and source position for test failures.
	 */
	export interface TestResult {

		/**
		 * Debug messages related to test execution issues encountered during
		 * evaluation.
		 * Debug messages may be related to too many or too few invocations of
		 * function mocks or to runtime errors that occur during evaluation.
		 * For example: ```Unable to read variable [name: "resource"]```
		 */
		debugMessages?: Array<string> | null;

		/**
		 * Position in the `Source` content including its line, column number, and an
		 * index of the `File` in the `Source` message. Used for debug purposes.
		 */
		errorPosition?: SourcePosition | null;

		/**
		 * The mapping from expression in the ruleset AST to the values they were
		 * evaluated to. Partially-nested to mirror AST structure. Note that this
		 * field is actually tracking expressions and not permission statements in
		 * contrast to the "visited_expressions" field above. Literal expressions
		 * are omitted.
		 */
		expressionReports?: Array<ExpressionReport> | null;

		/**
		 * The set of function calls made to service-defined methods.
		 * Function calls are included in the order in which they are encountered
		 * during evaluation, are provided for both mocked and unmocked functions,
		 * and included on the response regardless of the test `state`.
		 */
		functionCalls?: Array<FunctionCall> | null;

		/** State of the test. */
		state?: TestResultState | null;

		/**
		 * The set of visited permission expressions for a given test. This returns
		 * the positions and evaluation results of all visited permission
		 * expressions which were relevant to the test case, e.g.
		 * ```
		 * match /path {
		 * allow read if: <expr>
		 * }
		 * ```
		 * For a detailed report of the intermediate evaluation states, see the
		 * `expression_reports` field
		 */
		visitedExpressions?: Array<VisitedExpression> | null;
	}

	export enum TestResultState { STATE_UNSPECIFIED = 0, SUCCESS = 1, FAILURE = 2 }


	/** Store the position and access outcome for an expression visited in rules. */
	export interface VisitedExpression {

		/**
		 * Position in the `Source` content including its line, column number, and an
		 * index of the `File` in the `Source` message. Used for debug purposes.
		 */
		sourcePosition?: SourcePosition | null;

		/** The evaluated value for the visited expression, e.g. true/false */
		value?: any | null;
	}


	/** The request for FirebaseRulesService.TestRuleset. */
	export interface TestRulesetRequest {

		/** `Source` is one or more `File` messages comprising a logical set of rules. */
		source?: Source | null;

		/**
		 * `TestSuite` is a collection of `TestCase` instances that validate the logical
		 * correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within
		 * a `TestRuleset` invocation or as part of a `Release` object as a pre-release
		 * check.
		 */
		testSuite?: TestSuite | null;
	}


	/**
	 * `TestSuite` is a collection of `TestCase` instances that validate the logical
	 * correctness of a `Ruleset`. The `TestSuite` may be referenced in-line within
	 * a `TestRuleset` invocation or as part of a `Release` object as a pre-release
	 * check.
	 */
	export interface TestSuite {

		/** Collection of test cases associated with the `TestSuite`. */
		testCases?: Array<TestCase> | null;
	}


	/** The response for FirebaseRulesService.TestRuleset. */
	export interface TestRulesetResponse {

		/**
		 * Syntactic and semantic `Source` issues of varying severity. Issues of
		 * `ERROR` severity will prevent tests from executing.
		 */
		issues?: Array<Issue> | null;

		/**
		 * The set of test results given the test cases in the `TestSuite`.
		 * The results will appear in the same order as the test cases appear in the
		 * `TestSuite`.
		 */
		testResults?: Array<TestResult> | null;
	}


	/** The request for FirebaseRulesService.UpdateReleasePatch. */
	export interface UpdateReleaseRequest {

		/**
		 * `Release` is a named reference to a `Ruleset`. Once a `Release` refers to a
		 * `Ruleset`, rules-enabled services will be able to enforce the `Ruleset`.
		 */
		release?: Release | null;

		/** Specifies which fields to update. */
		updateMask?: string | null;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete a `Ruleset` by resource name.
		 * If the `Ruleset` is referenced by a `Release` the operation will fail.
		 * Delete v1/{name}
		 * @param {string} name Resource name for the ruleset to delete.
		 * Format: `projects/{project_id}/rulesets/{ruleset_id}`
		 * @return {void} Successful response
		 */
		Firebaserules_projects_rulesets_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a `Ruleset` by name including the full `Source` contents.
		 * Get v1/{name}
		 * @param {string} name Resource name for the ruleset to get.
		 * Format: `projects/{project_id}/rulesets/{ruleset_id}`
		 * @return {void} Successful response
		 */
		Firebaserules_projects_rulesets_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a `Release` via PATCH.
		 * Only updates to the `ruleset_name` and `test_suite_name` fields will be
		 * honored. `Release` rename is not supported. To create a `Release` use the
		 * CreateRelease method.
		 * Patch v1/{name}
		 * @param {string} name Resource name for the project which owns this `Release`.
		 * Format: `projects/{project_id}`
		 * @return {void} Successful response
		 */
		Firebaserules_projects_releases_patch(name: string, requestBody: UpdateReleaseRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List the `Release` values for a project. This list may optionally be
		 * filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any
		 * combination thereof.
		 * Get v1/{name}/releases
		 * @param {string} name Resource name for the project.
		 * Format: `projects/{project_id}`
		 * @param {string} filter `Release` filter. The list method supports filters with restrictions on the
		 * `Release.name`, `Release.ruleset_name`, and `Release.test_suite_name`.
		 * Example 1: A filter of 'name=prod*' might return `Release`s with names
		 * within 'projects/foo' prefixed with 'prod':
		 * Name                          | Ruleset Name
		 * ------------------------------|-------------
		 * projects/foo/releases/prod    | projects/foo/rulesets/uuid1234
		 * projects/foo/releases/prod/v1 | projects/foo/rulesets/uuid1234
		 * projects/foo/releases/prod/v2 | projects/foo/rulesets/uuid8888
		 * Example 2: A filter of `name=prod* ruleset_name=uuid1234` would return only
		 * `Release` instances for 'projects/foo' with names prefixed with 'prod'
		 * referring to the same `Ruleset` name of 'uuid1234':
		 * Name                          | Ruleset Name
		 * ------------------------------|-------------
		 * projects/foo/releases/prod    | projects/foo/rulesets/1234
		 * projects/foo/releases/prod/v1 | projects/foo/rulesets/1234
		 * In the examples, the filter parameters refer to the search filters are
		 * relative to the project. Fully qualified prefixed may also be used. e.g.
		 * `test_suite_name=projects/foo/testsuites/uuid1`
		 * @param {number} pageSize Page size to load. Maximum of 100. Defaults to 10.
		 * Note: `page_size` is just a hint and the service may choose to load fewer
		 * than `page_size` results due to the size of the output. To traverse all of
		 * the releases, the caller should iterate until the `page_token` on the
		 * response is empty.
		 * @param {string} pageToken Next page token for the next batch of `Release` instances.
		 * @return {void} Successful response
		 */
		Firebaserules_projects_releases_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/releases&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a `Release`.
		 * Release names should reflect the developer's deployment practices. For
		 * example, the release name may include the environment name, application
		 * name, application version, or any other name meaningful to the developer.
		 * Once a `Release` refers to a `Ruleset`, the rules can be enforced by
		 * Firebase Rules-enabled services.
		 * More than one `Release` may be 'live' concurrently. Consider the following
		 * three `Release` names for `projects/foo` and the `Ruleset` to which they
		 * refer.
		 * Release Name                    | Ruleset Name
		 * --------------------------------|-------------
		 * projects/foo/releases/prod      | projects/foo/rulesets/uuid123
		 * projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123
		 * projects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456
		 * The table reflects the `Ruleset` rollout in progress. The `prod` and
		 * `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23`
		 * refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be
		 * updated using the UpdateRelease method.
		 * Post v1/{name}/releases
		 * @param {string} name Resource name for the project which owns this `Release`.
		 * Format: `projects/{project_id}`
		 * @return {void} Successful response
		 */
		Firebaserules_projects_releases_create(name: string, requestBody: Release): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/releases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List `Ruleset` metadata only and optionally filter the results by `Ruleset`
		 * name.
		 * The full `Source` contents of a `Ruleset` may be retrieved with
		 * GetRuleset.
		 * Get v1/{name}/rulesets
		 * @param {string} name Resource name for the project.
		 * Format: `projects/{project_id}`
		 * @param {string} filter `Ruleset` filter. The list method supports filters with restrictions on
		 * `Ruleset.name`.
		 * Filters on `Ruleset.create_time` should use the `date` function which
		 * parses strings that conform to the RFC 3339 date/time specifications.
		 * Example: `create_time > date("2017-01-01T00:00:00Z") AND name=UUID-*`
		 * @param {number} pageSize Page size to load. Maximum of 100. Defaults to 10.
		 * Note: `page_size` is just a hint and the service may choose to load less
		 * than `page_size` due to the size of the output. To traverse all of the
		 * releases, caller should iterate until the `page_token` is empty.
		 * @param {string} pageToken Next page token for loading the next batch of `Ruleset` instances.
		 * @return {void} Successful response
		 */
		Firebaserules_projects_rulesets_list(name: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/rulesets&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a `Ruleset` from `Source`.
		 * The `Ruleset` is given a unique generated name which is returned to the
		 * caller. `Source` containing syntactic or semantics errors will result in an
		 * error response indicating the first error encountered. For a detailed view
		 * of `Source` issues, use TestRuleset.
		 * Post v1/{name}/rulesets
		 * @param {string} name Resource name for Project which owns this `Ruleset`.
		 * Format: `projects/{project_id}`
		 * @return {void} Successful response
		 */
		Firebaserules_projects_rulesets_create(name: string, requestBody: Ruleset): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/rulesets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the `Release` executable to use when enforcing rules.
		 * Get v1/{name}:getExecutable
		 * @param {string} name Resource name of the `Release`.
		 * Format: `projects/{project_id}/releases/{release_id}`
		 * @param {GetReleaseExecutableResponseExecutableVersion} executableVersion The requested runtime executable version.
		 * Defaults to FIREBASE_RULES_EXECUTABLE_V1.
		 * @return {void} Successful response
		 */
		Firebaserules_projects_releases_getExecutable(name: string, executableVersion: GetReleaseExecutableResponseExecutableVersion | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':getExecutable&executableVersion=' + executableVersion, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Test `Source` for syntactic and semantic correctness. Issues present, if
		 * any, will be returned to the caller with a description, severity, and
		 * source location.
		 * The test method may be executed with `Source` or a `Ruleset` name.
		 * Passing `Source` is useful for unit testing new rules. Passing a `Ruleset`
		 * name is useful for regression testing an existing rule.
		 * The following is an example of `Source` that permits users to upload images
		 * to a bucket bearing their user id and matching the correct metadata:
		 * _*Example*_
		 * // Users are allowed to subscribe and unsubscribe to the blog.
		 * service firebase.storage {
		 * match /users/{userId}/images/{imageName} {
		 * allow write: if userId == request.auth.uid
		 * && (imageName.matches('*.png$')
		 * || imageName.matches('*.jpg$'))
		 * && resource.mimeType.matches('^image/')
		 * }
		 * }
		 * Post v1/{name}:test
		 * @param {string} name Tests may either provide `source` or a `Ruleset` resource name.
		 * For tests against `source`, the resource name must refer to the project:
		 * Format: `projects/{project_id}`
		 * For tests against a `Ruleset`, this must be the `Ruleset` resource name:
		 * Format: `projects/{project_id}/rulesets/{ruleset_id}`
		 * @return {void} Successful response
		 */
		Firebaserules_projects_test(name: string, requestBody: TestRulesetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':test', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

