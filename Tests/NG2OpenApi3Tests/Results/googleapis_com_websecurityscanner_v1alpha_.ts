import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Scan authentication configuration. */
	export interface Authentication {

		/** Describes authentication configuration that uses a custom account. */
		customAccount?: CustomAccount;

		/** Describes authentication configuration that uses a Google account. */
		googleAccount?: GoogleAccount;
	}

	/** Scan authentication configuration. */
	export interface AuthenticationFormProperties {
	}
	export function CreateAuthenticationFormGroup() {
		return new FormGroup<AuthenticationFormProperties>({
		});

	}


	/** Describes authentication configuration that uses a custom account. */
	export interface CustomAccount {

		/** Required. The login form URL of the website. */
		loginUrl?: string | null;

		/** Required. Input only. The password of the custom account. The credential is stored encrypted and not returned in any response nor included in audit logs. */
		password?: string | null;

		/** Required. The user name of the custom account. */
		username?: string | null;
	}

	/** Describes authentication configuration that uses a custom account. */
	export interface CustomAccountFormProperties {

		/** Required. The login form URL of the website. */
		loginUrl: FormControl<string | null | undefined>,

		/** Required. Input only. The password of the custom account. The credential is stored encrypted and not returned in any response nor included in audit logs. */
		password: FormControl<string | null | undefined>,

		/** Required. The user name of the custom account. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCustomAccountFormGroup() {
		return new FormGroup<CustomAccountFormProperties>({
			loginUrl: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes authentication configuration that uses a Google account. */
	export interface GoogleAccount {

		/** Required. Input only. The password of the Google account. The credential is stored encrypted and not returned in any response nor included in audit logs. */
		password?: string | null;

		/** Required. The user name of the Google account. */
		username?: string | null;
	}

	/** Describes authentication configuration that uses a Google account. */
	export interface GoogleAccountFormProperties {

		/** Required. Input only. The password of the Google account. The credential is stored encrypted and not returned in any response nor included in audit logs. */
		password: FormControl<string | null | undefined>,

		/** Required. The user name of the Google account. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAccountFormGroup() {
		return new FormGroup<GoogleAccountFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against. */
	export interface CrawledUrl {

		/** Output only. The body of the request that was used to visit the URL. */
		body?: string | null;

		/** Output only. The http method of the request that was used to visit the URL, in uppercase. */
		httpMethod?: string | null;

		/** Output only. The URL that was crawled. */
		url?: string | null;
	}

	/** A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against. */
	export interface CrawledUrlFormProperties {

		/** Output only. The body of the request that was used to visit the URL. */
		body: FormControl<string | null | undefined>,

		/** Output only. The http method of the request that was used to visit the URL, in uppercase. */
		httpMethod: FormControl<string | null | undefined>,

		/** Output only. The URL that was crawled. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCrawledUrlFormGroup() {
		return new FormGroup<CrawledUrlFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			httpMethod: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** A Finding resource represents a vulnerability instance identified during a ScanRun. */
	export interface Finding {

		/** The body of the request that triggered the vulnerability. */
		body?: string | null;

		/** The description of the vulnerability. */
		description?: string | null;

		/** The URL where the browser lands when the vulnerability is detected. */
		finalUrl?: string | null;

		/** The type of the Finding. */
		findingType?: FindingFindingType | null;

		/** If the vulnerability was originated from nested IFrame, the immediate parent IFrame is reported. */
		frameUrl?: string | null;

		/** The URL produced by the server-side fuzzer and used in the request that triggered the vulnerability. */
		fuzzedUrl?: string | null;

		/** The http method of the request that triggered the vulnerability, in uppercase. */
		httpMethod?: string | null;

		/** The resource name of the Finding. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}'. The finding IDs are generated by the system. */
		name?: string | null;

		/** Information reported for an outdated library. */
		outdatedLibrary?: OutdatedLibrary;

		/** The URL containing human-readable payload that user can leverage to reproduce the vulnerability. */
		reproductionUrl?: string | null;

		/** The tracking ID uniquely identifies a vulnerability instance across multiple ScanRuns. */
		trackingId?: string | null;

		/** Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc. */
		violatingResource?: ViolatingResource;

		/** Information about vulnerable or missing HTTP Headers. */
		vulnerableHeaders?: VulnerableHeaders;

		/** Information about vulnerable request parameters. */
		vulnerableParameters?: VulnerableParameters;

		/** Information reported for an XSS. */
		xss?: Xss;
	}

	/** A Finding resource represents a vulnerability instance identified during a ScanRun. */
	export interface FindingFormProperties {

		/** The body of the request that triggered the vulnerability. */
		body: FormControl<string | null | undefined>,

		/** The description of the vulnerability. */
		description: FormControl<string | null | undefined>,

		/** The URL where the browser lands when the vulnerability is detected. */
		finalUrl: FormControl<string | null | undefined>,

		/** The type of the Finding. */
		findingType: FormControl<FindingFindingType | null | undefined>,

		/** If the vulnerability was originated from nested IFrame, the immediate parent IFrame is reported. */
		frameUrl: FormControl<string | null | undefined>,

		/** The URL produced by the server-side fuzzer and used in the request that triggered the vulnerability. */
		fuzzedUrl: FormControl<string | null | undefined>,

		/** The http method of the request that triggered the vulnerability, in uppercase. */
		httpMethod: FormControl<string | null | undefined>,

		/** The resource name of the Finding. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}'. The finding IDs are generated by the system. */
		name: FormControl<string | null | undefined>,

		/** The URL containing human-readable payload that user can leverage to reproduce the vulnerability. */
		reproductionUrl: FormControl<string | null | undefined>,

		/** The tracking ID uniquely identifies a vulnerability instance across multiple ScanRuns. */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			finalUrl: new FormControl<string | null | undefined>(undefined),
			findingType: new FormControl<FindingFindingType | null | undefined>(undefined),
			frameUrl: new FormControl<string | null | undefined>(undefined),
			fuzzedUrl: new FormControl<string | null | undefined>(undefined),
			httpMethod: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reproductionUrl: new FormControl<string | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingFindingType { FINDING_TYPE_UNSPECIFIED = 'FINDING_TYPE_UNSPECIFIED', MIXED_CONTENT = 'MIXED_CONTENT', OUTDATED_LIBRARY = 'OUTDATED_LIBRARY', ROSETTA_FLASH = 'ROSETTA_FLASH', XSS_CALLBACK = 'XSS_CALLBACK', XSS_ERROR = 'XSS_ERROR', CLEAR_TEXT_PASSWORD = 'CLEAR_TEXT_PASSWORD', INVALID_CONTENT_TYPE = 'INVALID_CONTENT_TYPE', XSS_ANGULAR_CALLBACK = 'XSS_ANGULAR_CALLBACK', INVALID_HEADER = 'INVALID_HEADER', MISSPELLED_SECURITY_HEADER_NAME = 'MISSPELLED_SECURITY_HEADER_NAME', MISMATCHING_SECURITY_HEADER_VALUES = 'MISMATCHING_SECURITY_HEADER_VALUES', ACCESSIBLE_GIT_REPOSITORY = 'ACCESSIBLE_GIT_REPOSITORY', ACCESSIBLE_SVN_REPOSITORY = 'ACCESSIBLE_SVN_REPOSITORY', ACCESSIBLE_ENV_FILE = 'ACCESSIBLE_ENV_FILE' }


	/** Information reported for an outdated library. */
	export interface OutdatedLibrary {

		/** URLs to learn more information about the vulnerabilities in the library. */
		learnMoreUrls?: Array<string>;

		/** The name of the outdated library. */
		libraryName?: string | null;

		/** The version number. */
		version?: string | null;
	}

	/** Information reported for an outdated library. */
	export interface OutdatedLibraryFormProperties {

		/** The name of the outdated library. */
		libraryName: FormControl<string | null | undefined>,

		/** The version number. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateOutdatedLibraryFormGroup() {
		return new FormGroup<OutdatedLibraryFormProperties>({
			libraryName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc. */
	export interface ViolatingResource {

		/** The MIME type of this resource. */
		contentType?: string | null;

		/** URL of this violating resource. */
		resourceUrl?: string | null;
	}

	/** Information regarding any resource causing the vulnerability such as JavaScript sources, image, audio files, etc. */
	export interface ViolatingResourceFormProperties {

		/** The MIME type of this resource. */
		contentType: FormControl<string | null | undefined>,

		/** URL of this violating resource. */
		resourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateViolatingResourceFormGroup() {
		return new FormGroup<ViolatingResourceFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about vulnerable or missing HTTP Headers. */
	export interface VulnerableHeaders {

		/** List of vulnerable headers. */
		headers?: Array<Header>;

		/** List of missing headers. */
		missingHeaders?: Array<Header>;
	}

	/** Information about vulnerable or missing HTTP Headers. */
	export interface VulnerableHeadersFormProperties {
	}
	export function CreateVulnerableHeadersFormGroup() {
		return new FormGroup<VulnerableHeadersFormProperties>({
		});

	}


	/** Describes a HTTP Header. */
	export interface Header {

		/** Header name. */
		name?: string | null;

		/** Header value. */
		value?: string | null;
	}

	/** Describes a HTTP Header. */
	export interface HeaderFormProperties {

		/** Header name. */
		name: FormControl<string | null | undefined>,

		/** Header value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHeaderFormGroup() {
		return new FormGroup<HeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about vulnerable request parameters. */
	export interface VulnerableParameters {

		/** The vulnerable parameter names. */
		parameterNames?: Array<string>;
	}

	/** Information about vulnerable request parameters. */
	export interface VulnerableParametersFormProperties {
	}
	export function CreateVulnerableParametersFormGroup() {
		return new FormGroup<VulnerableParametersFormProperties>({
		});

	}


	/** Information reported for an XSS. */
	export interface Xss {

		/** An error message generated by a javascript breakage. */
		errorMessage?: string | null;

		/** Stack traces leading to the point where the XSS occurred. */
		stackTraces?: Array<string>;
	}

	/** Information reported for an XSS. */
	export interface XssFormProperties {

		/** An error message generated by a javascript breakage. */
		errorMessage: FormControl<string | null | undefined>,
	}
	export function CreateXssFormGroup() {
		return new FormGroup<XssFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun. */
	export interface FindingTypeStats {

		/** The count of findings belonging to this finding type. */
		findingCount?: number | null;

		/** The finding type associated with the stats. */
		findingType?: FindingFindingType | null;
	}

	/** A FindingTypeStats resource represents stats regarding a specific FindingType of Findings under a given ScanRun. */
	export interface FindingTypeStatsFormProperties {

		/** The count of findings belonging to this finding type. */
		findingCount: FormControl<number | null | undefined>,

		/** The finding type associated with the stats. */
		findingType: FormControl<FindingFindingType | null | undefined>,
	}
	export function CreateFindingTypeStatsFormGroup() {
		return new FormGroup<FindingTypeStatsFormProperties>({
			findingCount: new FormControl<number | null | undefined>(undefined),
			findingType: new FormControl<FindingFindingType | null | undefined>(undefined),
		});

	}


	/** Response for the `ListCrawledUrls` method. */
	export interface ListCrawledUrlsResponse {

		/** The list of CrawledUrls returned. */
		crawledUrls?: Array<CrawledUrl>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Response for the `ListCrawledUrls` method. */
	export interface ListCrawledUrlsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCrawledUrlsResponseFormGroup() {
		return new FormGroup<ListCrawledUrlsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListFindingTypeStats` method. */
	export interface ListFindingTypeStatsResponse {

		/** The list of FindingTypeStats returned. */
		findingTypeStats?: Array<FindingTypeStats>;
	}

	/** Response for the `ListFindingTypeStats` method. */
	export interface ListFindingTypeStatsResponseFormProperties {
	}
	export function CreateListFindingTypeStatsResponseFormGroup() {
		return new FormGroup<ListFindingTypeStatsResponseFormProperties>({
		});

	}


	/** Response for the `ListFindings` method. */
	export interface ListFindingsResponse {

		/** The list of Findings returned. */
		findings?: Array<Finding>;

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;
	}

	/** Response for the `ListFindings` method. */
	export interface ListFindingsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsResponseFormGroup() {
		return new FormGroup<ListFindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListScanConfigs` method. */
	export interface ListScanConfigsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of ScanConfigs returned. */
		scanConfigs?: Array<ScanConfig>;
	}

	/** Response for the `ListScanConfigs` method. */
	export interface ListScanConfigsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListScanConfigsResponseFormGroup() {
		return new FormGroup<ListScanConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ScanConfig resource contains the configurations to launch a scan. next id: 12 */
	export interface ScanConfig {

		/** Scan authentication configuration. */
		authentication?: Authentication;

		/** The excluded URL patterns as described in https://cloud.google.com/security-command-center/docs/how-to-use-web-security-scanner#excluding_urls */
		blacklistPatterns?: Array<string>;

		/** Required. The user provided display name of the ScanConfig. */
		displayName?: string | null;

		/** A ScanRun is a output-only resource representing an actual run of the scan. */
		latestRun?: ScanRun;

		/** The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. If the field is unspecified or its value is set 0, server will default to 15. Other values outside of [5, 20] range will be rejected with INVALID_ARGUMENT error. */
		maxQps?: number | null;

		/** The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system. */
		name?: string | null;

		/** Scan schedule configuration. */
		schedule?: Schedule;

		/** Required. The starting URLs from which the scanner finds site pages. */
		startingUrls?: Array<string>;

		/** Set of Google Cloud platforms targeted by the scan. If empty, APP_ENGINE will be used as a default. */
		targetPlatforms?: Array<string>;

		/** The user agent used during scanning. */
		userAgent?: ScanConfigUserAgent | null;
	}

	/** A ScanConfig resource contains the configurations to launch a scan. next id: 12 */
	export interface ScanConfigFormProperties {

		/** Required. The user provided display name of the ScanConfig. */
		displayName: FormControl<string | null | undefined>,

		/** The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively. If the field is unspecified or its value is set 0, server will default to 15. Other values outside of [5, 20] range will be rejected with INVALID_ARGUMENT error. */
		maxQps: FormControl<number | null | undefined>,

		/** The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system. */
		name: FormControl<string | null | undefined>,

		/** The user agent used during scanning. */
		userAgent: FormControl<ScanConfigUserAgent | null | undefined>,
	}
	export function CreateScanConfigFormGroup() {
		return new FormGroup<ScanConfigFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			maxQps: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<ScanConfigUserAgent | null | undefined>(undefined),
		});

	}


	/** A ScanRun is a output-only resource representing an actual run of the scan. */
	export interface ScanRun {

		/** The time at which the ScanRun reached termination state - that the ScanRun is either finished or stopped by user. */
		endTime?: string | null;

		/** The execution state of the ScanRun. */
		executionState?: ScanRunExecutionState | null;

		/** Whether the scan run has found any vulnerabilities. */
		hasVulnerabilities?: boolean | null;

		/** The resource name of the ScanRun. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. The ScanRun IDs are generated by the system. */
		name?: string | null;

		/** The percentage of total completion ranging from 0 to 100. If the scan is in queue, the value is 0. If the scan is running, the value ranges from 0 to 100. If the scan is finished, the value is 100. */
		progressPercent?: number | null;

		/** The result state of the ScanRun. This field is only available after the execution state reaches "FINISHED". */
		resultState?: ScanRunResultState | null;

		/** The time at which the ScanRun started. */
		startTime?: string | null;

		/** The number of URLs crawled during this ScanRun. If the scan is in progress, the value represents the number of URLs crawled up to now. */
		urlsCrawledCount?: string | null;

		/** The number of URLs tested during this ScanRun. If the scan is in progress, the value represents the number of URLs tested up to now. The number of URLs tested is usually larger than the number URLS crawled because typically a crawled URL is tested with multiple test payloads. */
		urlsTestedCount?: string | null;
	}

	/** A ScanRun is a output-only resource representing an actual run of the scan. */
	export interface ScanRunFormProperties {

		/** The time at which the ScanRun reached termination state - that the ScanRun is either finished or stopped by user. */
		endTime: FormControl<string | null | undefined>,

		/** The execution state of the ScanRun. */
		executionState: FormControl<ScanRunExecutionState | null | undefined>,

		/** Whether the scan run has found any vulnerabilities. */
		hasVulnerabilities: FormControl<boolean | null | undefined>,

		/** The resource name of the ScanRun. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'. The ScanRun IDs are generated by the system. */
		name: FormControl<string | null | undefined>,

		/** The percentage of total completion ranging from 0 to 100. If the scan is in queue, the value is 0. If the scan is running, the value ranges from 0 to 100. If the scan is finished, the value is 100. */
		progressPercent: FormControl<number | null | undefined>,

		/** The result state of the ScanRun. This field is only available after the execution state reaches "FINISHED". */
		resultState: FormControl<ScanRunResultState | null | undefined>,

		/** The time at which the ScanRun started. */
		startTime: FormControl<string | null | undefined>,

		/** The number of URLs crawled during this ScanRun. If the scan is in progress, the value represents the number of URLs crawled up to now. */
		urlsCrawledCount: FormControl<string | null | undefined>,

		/** The number of URLs tested during this ScanRun. If the scan is in progress, the value represents the number of URLs tested up to now. The number of URLs tested is usually larger than the number URLS crawled because typically a crawled URL is tested with multiple test payloads. */
		urlsTestedCount: FormControl<string | null | undefined>,
	}
	export function CreateScanRunFormGroup() {
		return new FormGroup<ScanRunFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			executionState: new FormControl<ScanRunExecutionState | null | undefined>(undefined),
			hasVulnerabilities: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			resultState: new FormControl<ScanRunResultState | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			urlsCrawledCount: new FormControl<string | null | undefined>(undefined),
			urlsTestedCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScanRunExecutionState { EXECUTION_STATE_UNSPECIFIED = 'EXECUTION_STATE_UNSPECIFIED', QUEUED = 'QUEUED', SCANNING = 'SCANNING', FINISHED = 'FINISHED' }

	export enum ScanRunResultState { RESULT_STATE_UNSPECIFIED = 'RESULT_STATE_UNSPECIFIED', SUCCESS = 'SUCCESS', ERROR = 'ERROR', KILLED = 'KILLED' }


	/** Scan schedule configuration. */
	export interface Schedule {

		/** Required. The duration of time between executions in days. */
		intervalDurationDays?: number | null;

		/** A timestamp indicates when the next run will be scheduled. The value is refreshed by the server after each run. If unspecified, it will default to current server time, which means the scan will be scheduled to start immediately. */
		scheduleTime?: string | null;
	}

	/** Scan schedule configuration. */
	export interface ScheduleFormProperties {

		/** Required. The duration of time between executions in days. */
		intervalDurationDays: FormControl<number | null | undefined>,

		/** A timestamp indicates when the next run will be scheduled. The value is refreshed by the server after each run. If unspecified, it will default to current server time, which means the scan will be scheduled to start immediately. */
		scheduleTime: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			intervalDurationDays: new FormControl<number | null | undefined>(undefined),
			scheduleTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScanConfigUserAgent { USER_AGENT_UNSPECIFIED = 'USER_AGENT_UNSPECIFIED', CHROME_LINUX = 'CHROME_LINUX', CHROME_ANDROID = 'CHROME_ANDROID', SAFARI_IPHONE = 'SAFARI_IPHONE' }


	/** Response for the `ListScanRuns` method. */
	export interface ListScanRunsResponse {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken?: string | null;

		/** The list of ScanRuns returned. */
		scanRuns?: Array<ScanRun>;
	}

	/** Response for the `ListScanRuns` method. */
	export interface ListScanRunsResponseFormProperties {

		/** Token to retrieve the next page of results, or empty if there are no more results in the list. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListScanRunsResponseFormGroup() {
		return new FormGroup<ListScanRunsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request for the `StartScanRun` method. */
	export interface StartScanRunRequest {
	}

	/** Request for the `StartScanRun` method. */
	export interface StartScanRunRequestFormProperties {
	}
	export function CreateStartScanRunRequestFormGroup() {
		return new FormGroup<StartScanRunRequestFormProperties>({
		});

	}


	/** Request for the `StopScanRun` method. */
	export interface StopScanRunRequest {
	}

	/** Request for the `StopScanRun` method. */
	export interface StopScanRunRequestFormProperties {
	}
	export function CreateStopScanRunRequestFormGroup() {
		return new FormGroup<StopScanRunRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes an existing ScanConfig and its child resources.
		 * Delete v1alpha/{name}
		 * @param {string} name Required. The resource name of the ScanConfig to be deleted. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
		 * @return {Empty} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Gets a Finding.
		 * Get v1alpha/{name}
		 * @param {string} name Required. The resource name of the Finding to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'.
		 * @return {Finding} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_findings_get(name: string): Observable<Finding> {
			return this.http.get<Finding>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates a ScanConfig. This method support partial update of a ScanConfig.
		 * Patch v1alpha/{name}
		 * @param {string} name The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.
		 * @param {string} updateMask Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * @return {ScanConfig} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_patch(name: string, updateMask: string | null | undefined, requestBody: ScanConfig): Observable<ScanConfig> {
			return this.http.patch<ScanConfig>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Start a ScanRun according to the given ScanConfig.
		 * Post v1alpha/{name}:start
		 * @param {string} name Required. The resource name of the ScanConfig to be used. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
		 * @return {ScanRun} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_start(name: string, requestBody: StartScanRunRequest): Observable<ScanRun> {
			return this.http.post<ScanRun>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a ScanRun. The stopped ScanRun is returned.
		 * Post v1alpha/{name}:stop
		 * @param {string} name Required. The resource name of the ScanRun to be stopped. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
		 * @return {ScanRun} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_stop(name: string, requestBody: StopScanRunRequest): Observable<ScanRun> {
			return this.http.post<ScanRun>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List CrawledUrls under a given ScanRun.
		 * Get v1alpha/{parent}/crawledUrls
		 * @param {string} parent Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
		 * @param {number} pageSize The maximum number of CrawledUrls to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
		 * @param {string} pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
		 * @return {ListCrawledUrlsResponse} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_crawledUrls_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCrawledUrlsResponse> {
			return this.http.get<ListCrawledUrlsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/crawledUrls&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all FindingTypeStats under a given ScanRun.
		 * Get v1alpha/{parent}/findingTypeStats
		 * @param {string} parent Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
		 * @return {ListFindingTypeStatsResponse} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_findingTypeStats_list(parent: string): Observable<ListFindingTypeStatsResponse> {
			return this.http.get<ListFindingTypeStatsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/findingTypeStats', {});
		}

		/**
		 * List Findings under a given ScanRun.
		 * Get v1alpha/{parent}/findings
		 * @param {string} parent Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
		 * @param {string} filter Required. The filter expression. The expression must be in the format: . Supported field: 'finding_type'. Supported operator: '='.
		 * @param {number} pageSize The maximum number of Findings to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
		 * @param {string} pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
		 * @return {ListFindingsResponse} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_findings_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFindingsResponse> {
			return this.http.get<ListFindingsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/findings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists ScanConfigs under a given project.
		 * Get v1alpha/{parent}/scanConfigs
		 * @param {string} parent Required. The parent resource name, which should be a project resource name in the format 'projects/{projectId}'.
		 * @param {number} pageSize The maximum number of ScanConfigs to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
		 * @param {string} pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
		 * @return {ListScanConfigsResponse} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListScanConfigsResponse> {
			return this.http.get<ListScanConfigsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scanConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a new ScanConfig.
		 * Post v1alpha/{parent}/scanConfigs
		 * @param {string} parent Required. The parent resource name where the scan is created, which should be a project resource name in the format 'projects/{projectId}'.
		 * @return {ScanConfig} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_create(parent: string, requestBody: ScanConfig): Observable<ScanConfig> {
			return this.http.post<ScanConfig>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scanConfigs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
		 * Get v1alpha/{parent}/scanRuns
		 * @param {string} parent Required. The parent resource name, which should be a scan resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}'.
		 * @param {number} pageSize The maximum number of ScanRuns to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
		 * @param {string} pageToken A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
		 * @return {ListScanRunsResponse} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListScanRunsResponse> {
			return this.http.get<ListScanRunsResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scanRuns&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

}

