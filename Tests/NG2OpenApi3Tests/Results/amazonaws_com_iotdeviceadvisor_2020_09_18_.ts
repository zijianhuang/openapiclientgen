import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateSuiteDefinitionResponse {
		suiteDefinitionId?: string;
		suiteDefinitionArn?: string;
		suiteDefinitionName?: string;
		createdAt?: Date;
	}
	export interface CreateSuiteDefinitionResponseFormProperties {
		suiteDefinitionId: FormControl<string | null | undefined>,
		suiteDefinitionArn: FormControl<string | null | undefined>,
		suiteDefinitionName: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateSuiteDefinitionResponseFormGroup() {
		return new FormGroup<CreateSuiteDefinitionResponseFormProperties>({
			suiteDefinitionId: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionArn: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionName: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information of a test device. A thing ARN, certificate ARN or device role ARN is required. */
	export interface DeviceUnderTest {
		thingArn?: string;
		certificateArn?: string;
		deviceRoleArn?: string;
	}

	/** Information of a test device. A thing ARN, certificate ARN or device role ARN is required. */
	export interface DeviceUnderTestFormProperties {
		thingArn: FormControl<string | null | undefined>,
		certificateArn: FormControl<string | null | undefined>,
		deviceRoleArn: FormControl<string | null | undefined>,
	}
	export function CreateDeviceUnderTestFormGroup() {
		return new FormGroup<DeviceUnderTestFormProperties>({
			thingArn: new FormControl<string | null | undefined>(undefined),
			certificateArn: new FormControl<string | null | undefined>(undefined),
			deviceRoleArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Protocol { MqttV3_1_1 = 'MqttV3_1_1', MqttV5 = 'MqttV5', MqttV3_1_1_OverWebSocket = 'MqttV3_1_1_OverWebSocket', MqttV5_OverWebSocket = 'MqttV5_OverWebSocket' }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface DeleteSuiteDefinitionResponse {
	}
	export interface DeleteSuiteDefinitionResponseFormProperties {
	}
	export function CreateDeleteSuiteDefinitionResponseFormGroup() {
		return new FormGroup<DeleteSuiteDefinitionResponseFormProperties>({
		});

	}

	export interface GetEndpointResponse {
		endpoint?: string;
	}
	export interface GetEndpointResponseFormProperties {
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateGetEndpointResponseFormGroup() {
		return new FormGroup<GetEndpointResponseFormProperties>({
			endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
		});

	}

	export interface GetSuiteDefinitionResponse {
		suiteDefinitionId?: string;
		suiteDefinitionArn?: string;
		suiteDefinitionVersion?: string;
		latestVersion?: string;
		suiteDefinitionConfiguration?: SuiteDefinitionConfiguration;
		createdAt?: Date;
		lastModifiedAt?: Date;
		tags?: TagMap;
	}
	export interface GetSuiteDefinitionResponseFormProperties {
		suiteDefinitionId: FormControl<string | null | undefined>,
		suiteDefinitionArn: FormControl<string | null | undefined>,
		suiteDefinitionVersion: FormControl<string | null | undefined>,
		latestVersion: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastModifiedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetSuiteDefinitionResponseFormGroup() {
		return new FormGroup<GetSuiteDefinitionResponseFormProperties>({
			suiteDefinitionId: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionArn: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionVersion: new FormControl<string | null | undefined>(undefined),
			latestVersion: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastModifiedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Gets the suite definition configuration. */
	export interface SuiteDefinitionConfiguration {

		/** Required */
		suiteDefinitionName: string;
		devices?: Array<DeviceUnderTest>;
		intendedForQualification?: boolean | null;
		isLongDurationTest?: boolean | null;

		/** Required */
		rootGroup: string;

		/** Required */
		devicePermissionRoleArn: string;
		protocol?: Protocol;
	}

	/** Gets the suite definition configuration. */
	export interface SuiteDefinitionConfigurationFormProperties {

		/** Required */
		suiteDefinitionName: FormControl<string | null | undefined>,
		intendedForQualification: FormControl<boolean | null | undefined>,
		isLongDurationTest: FormControl<boolean | null | undefined>,

		/** Required */
		rootGroup: FormControl<string | null | undefined>,

		/** Required */
		devicePermissionRoleArn: FormControl<string | null | undefined>,
		protocol: FormControl<Protocol | null | undefined>,
	}
	export function CreateSuiteDefinitionConfigurationFormGroup() {
		return new FormGroup<SuiteDefinitionConfigurationFormProperties>({
			suiteDefinitionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			intendedForQualification: new FormControl<boolean | null | undefined>(undefined),
			isLongDurationTest: new FormControl<boolean | null | undefined>(undefined),
			rootGroup: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			devicePermissionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			protocol: new FormControl<Protocol | null | undefined>(undefined),
		});

	}

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface GetSuiteRunResponse {
		suiteDefinitionId?: string;
		suiteDefinitionVersion?: string;
		suiteRunId?: string;
		suiteRunArn?: string;
		suiteRunConfiguration?: SuiteRunConfiguration;
		testResult?: TestResult;
		startTime?: Date;
		endTime?: Date;
		status?: Status;
		errorReason?: string;
		tags?: TagMap;
	}
	export interface GetSuiteRunResponseFormProperties {
		suiteDefinitionId: FormControl<string | null | undefined>,
		suiteDefinitionVersion: FormControl<string | null | undefined>,
		suiteRunId: FormControl<string | null | undefined>,
		suiteRunArn: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		status: FormControl<Status | null | undefined>,
		errorReason: FormControl<string | null | undefined>,
	}
	export function CreateGetSuiteRunResponseFormGroup() {
		return new FormGroup<GetSuiteRunResponseFormProperties>({
			suiteDefinitionId: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionVersion: new FormControl<string | null | undefined>(undefined),
			suiteRunId: new FormControl<string | null | undefined>(undefined),
			suiteRunArn: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<Status | null | undefined>(undefined),
			errorReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Gets suite run configuration. */
	export interface SuiteRunConfiguration {

		/** Required */
		primaryDevice: DeviceUnderTest;
		selectedTestList?: Array<string>;
		parallelRun?: boolean | null;
	}

	/** Gets suite run configuration. */
	export interface SuiteRunConfigurationFormProperties {
		parallelRun: FormControl<boolean | null | undefined>,
	}
	export function CreateSuiteRunConfigurationFormGroup() {
		return new FormGroup<SuiteRunConfigurationFormProperties>({
			parallelRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Show each group result. */
	export interface TestResult {
		groups?: Array<GroupResult>;
	}

	/** Show each group result. */
	export interface TestResultFormProperties {
	}
	export function CreateTestResultFormGroup() {
		return new FormGroup<TestResultFormProperties>({
		});

	}


	/** Show Group Result. */
	export interface GroupResult {
		groupId?: string;
		groupName?: string;
		tests?: Array<TestCaseRun>;
	}

	/** Show Group Result. */
	export interface GroupResultFormProperties {
		groupId: FormControl<string | null | undefined>,
		groupName: FormControl<string | null | undefined>,
	}
	export function CreateGroupResultFormGroup() {
		return new FormGroup<GroupResultFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
			groupName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides the test case run. */
	export interface TestCaseRun {
		testCaseRunId?: string;
		testCaseDefinitionId?: string;
		testCaseDefinitionName?: string;
		status?: Status;
		startTime?: Date;
		endTime?: Date;
		logUrl?: string;
		warnings?: string;
		failure?: string;
		testScenarios?: Array<TestCaseScenario>;
	}

	/** Provides the test case run. */
	export interface TestCaseRunFormProperties {
		testCaseRunId: FormControl<string | null | undefined>,
		testCaseDefinitionId: FormControl<string | null | undefined>,
		testCaseDefinitionName: FormControl<string | null | undefined>,
		status: FormControl<Status | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		endTime: FormControl<Date | null | undefined>,
		logUrl: FormControl<string | null | undefined>,
		warnings: FormControl<string | null | undefined>,
		failure: FormControl<string | null | undefined>,
	}
	export function CreateTestCaseRunFormGroup() {
		return new FormGroup<TestCaseRunFormProperties>({
			testCaseRunId: new FormControl<string | null | undefined>(undefined),
			testCaseDefinitionId: new FormControl<string | null | undefined>(undefined),
			testCaseDefinitionName: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<Status | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			endTime: new FormControl<Date | null | undefined>(undefined),
			logUrl: new FormControl<string | null | undefined>(undefined),
			warnings: new FormControl<string | null | undefined>(undefined),
			failure: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Status { PASS = 'PASS', FAIL = 'FAIL', CANCELED = 'CANCELED', PENDING = 'PENDING', RUNNING = 'RUNNING', STOPPING = 'STOPPING', STOPPED = 'STOPPED', PASS_WITH_WARNINGS = 'PASS_WITH_WARNINGS', ERROR = 'ERROR' }


	/** Provides test case scenario. */
	export interface TestCaseScenario {
		testCaseScenarioId?: string;
		testCaseScenarioType?: TestCaseScenarioType;
		status?: Status;
		failure?: string;
		systemMessage?: string;
	}

	/** Provides test case scenario. */
	export interface TestCaseScenarioFormProperties {
		testCaseScenarioId: FormControl<string | null | undefined>,
		testCaseScenarioType: FormControl<TestCaseScenarioType | null | undefined>,
		status: FormControl<Status | null | undefined>,
		failure: FormControl<string | null | undefined>,
		systemMessage: FormControl<string | null | undefined>,
	}
	export function CreateTestCaseScenarioFormGroup() {
		return new FormGroup<TestCaseScenarioFormProperties>({
			testCaseScenarioId: new FormControl<string | null | undefined>(undefined),
			testCaseScenarioType: new FormControl<TestCaseScenarioType | null | undefined>(undefined),
			status: new FormControl<Status | null | undefined>(undefined),
			failure: new FormControl<string | null | undefined>(undefined),
			systemMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TestCaseScenarioType { Advanced = 'Advanced', Basic = 'Basic' }

	export interface GetSuiteRunReportResponse {
		qualificationReportDownloadUrl?: string;
	}
	export interface GetSuiteRunReportResponseFormProperties {
		qualificationReportDownloadUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetSuiteRunReportResponseFormGroup() {
		return new FormGroup<GetSuiteRunReportResponseFormProperties>({
			qualificationReportDownloadUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListSuiteDefinitionsResponse {
		suiteDefinitionInformationList?: Array<SuiteDefinitionInformation>;
		nextToken?: string;
	}
	export interface ListSuiteDefinitionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSuiteDefinitionsResponseFormGroup() {
		return new FormGroup<ListSuiteDefinitionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the suite definition. */
	export interface SuiteDefinitionInformation {
		suiteDefinitionId?: string;
		suiteDefinitionName?: string;
		defaultDevices?: Array<DeviceUnderTest>;
		intendedForQualification?: boolean | null;
		isLongDurationTest?: boolean | null;
		protocol?: Protocol;
		createdAt?: Date;
	}

	/** Information about the suite definition. */
	export interface SuiteDefinitionInformationFormProperties {
		suiteDefinitionId: FormControl<string | null | undefined>,
		suiteDefinitionName: FormControl<string | null | undefined>,
		intendedForQualification: FormControl<boolean | null | undefined>,
		isLongDurationTest: FormControl<boolean | null | undefined>,
		protocol: FormControl<Protocol | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateSuiteDefinitionInformationFormGroup() {
		return new FormGroup<SuiteDefinitionInformationFormProperties>({
			suiteDefinitionId: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionName: new FormControl<string | null | undefined>(undefined),
			intendedForQualification: new FormControl<boolean | null | undefined>(undefined),
			isLongDurationTest: new FormControl<boolean | null | undefined>(undefined),
			protocol: new FormControl<Protocol | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListSuiteRunsResponse {
		suiteRunsList?: Array<SuiteRunInformation>;
		nextToken?: string;
	}
	export interface ListSuiteRunsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSuiteRunsResponseFormGroup() {
		return new FormGroup<ListSuiteRunsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Information about the suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SuiteRunInformation</a> action.</p> */
	export interface SuiteRunInformation {
		suiteDefinitionId?: string;
		suiteDefinitionVersion?: string;
		suiteDefinitionName?: string;
		suiteRunId?: string;
		createdAt?: Date;
		startedAt?: Date;
		endAt?: Date;
		status?: Status;
		passed?: number | null;
		failed?: number | null;
	}

	/** <p>Information about the suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">SuiteRunInformation</a> action.</p> */
	export interface SuiteRunInformationFormProperties {
		suiteDefinitionId: FormControl<string | null | undefined>,
		suiteDefinitionVersion: FormControl<string | null | undefined>,
		suiteDefinitionName: FormControl<string | null | undefined>,
		suiteRunId: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		startedAt: FormControl<Date | null | undefined>,
		endAt: FormControl<Date | null | undefined>,
		status: FormControl<Status | null | undefined>,
		passed: FormControl<number | null | undefined>,
		failed: FormControl<number | null | undefined>,
	}
	export function CreateSuiteRunInformationFormGroup() {
		return new FormGroup<SuiteRunInformationFormProperties>({
			suiteDefinitionId: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionVersion: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionName: new FormControl<string | null | undefined>(undefined),
			suiteRunId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			endAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<Status | null | undefined>(undefined),
			passed: new FormControl<number | null | undefined>(undefined),
			failed: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface StartSuiteRunResponse {
		suiteRunId?: string;
		suiteRunArn?: string;
		createdAt?: Date;
		endpoint?: string;
	}
	export interface StartSuiteRunResponseFormProperties {
		suiteRunId: FormControl<string | null | undefined>,
		suiteRunArn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		endpoint: FormControl<string | null | undefined>,
	}
	export function CreateStartSuiteRunResponseFormGroup() {
		return new FormGroup<StartSuiteRunResponseFormProperties>({
			suiteRunId: new FormControl<string | null | undefined>(undefined),
			suiteRunArn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			endpoint: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface StopSuiteRunResponse {
	}
	export interface StopSuiteRunResponseFormProperties {
	}
	export function CreateStopSuiteRunResponseFormGroup() {
		return new FormGroup<StopSuiteRunResponseFormProperties>({
		});

	}

	export interface TagResourceResponse {
	}
	export interface TagResourceResponseFormProperties {
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
		});

	}

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
		});

	}

	export interface UpdateSuiteDefinitionResponse {
		suiteDefinitionId?: string;
		suiteDefinitionArn?: string;
		suiteDefinitionName?: string;
		suiteDefinitionVersion?: string;
		createdAt?: Date;
		lastUpdatedAt?: Date;
	}
	export interface UpdateSuiteDefinitionResponseFormProperties {
		suiteDefinitionId: FormControl<string | null | undefined>,
		suiteDefinitionArn: FormControl<string | null | undefined>,
		suiteDefinitionName: FormControl<string | null | undefined>,
		suiteDefinitionVersion: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		lastUpdatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateSuiteDefinitionResponseFormGroup() {
		return new FormGroup<UpdateSuiteDefinitionResponseFormProperties>({
			suiteDefinitionId: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionArn: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionName: new FormControl<string | null | undefined>(undefined),
			suiteDefinitionVersion: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AuthenticationMethod { X509ClientCertificate = 'X509ClientCertificate', SignatureVersion4 = 'SignatureVersion4' }

	export interface CreateSuiteDefinitionRequest {

		/** Required */
		suiteDefinitionConfiguration: SuiteDefinitionConfiguration;
		tags?: TagMap;
	}
	export interface CreateSuiteDefinitionRequestFormProperties {
	}
	export function CreateCreateSuiteDefinitionRequestFormGroup() {
		return new FormGroup<CreateSuiteDefinitionRequestFormProperties>({
		});

	}

	export interface DeleteSuiteDefinitionRequest {
	}
	export interface DeleteSuiteDefinitionRequestFormProperties {
	}
	export function CreateDeleteSuiteDefinitionRequestFormGroup() {
		return new FormGroup<DeleteSuiteDefinitionRequestFormProperties>({
		});

	}

	export interface GetEndpointRequest {
	}
	export interface GetEndpointRequestFormProperties {
	}
	export function CreateGetEndpointRequestFormGroup() {
		return new FormGroup<GetEndpointRequestFormProperties>({
		});

	}

	export interface GetSuiteDefinitionRequest {
	}
	export interface GetSuiteDefinitionRequestFormProperties {
	}
	export function CreateGetSuiteDefinitionRequestFormGroup() {
		return new FormGroup<GetSuiteDefinitionRequestFormProperties>({
		});

	}

	export interface GetSuiteRunReportRequest {
	}
	export interface GetSuiteRunReportRequestFormProperties {
	}
	export function CreateGetSuiteRunReportRequestFormGroup() {
		return new FormGroup<GetSuiteRunReportRequestFormProperties>({
		});

	}

	export interface GetSuiteRunRequest {
	}
	export interface GetSuiteRunRequestFormProperties {
	}
	export function CreateGetSuiteRunRequestFormGroup() {
		return new FormGroup<GetSuiteRunRequestFormProperties>({
		});

	}

	export enum SuiteRunStatus { PASS = 'PASS', FAIL = 'FAIL', CANCELED = 'CANCELED', PENDING = 'PENDING', RUNNING = 'RUNNING', STOPPING = 'STOPPING', STOPPED = 'STOPPED', PASS_WITH_WARNINGS = 'PASS_WITH_WARNINGS', ERROR = 'ERROR' }

	export interface ListSuiteDefinitionsRequest {
	}
	export interface ListSuiteDefinitionsRequestFormProperties {
	}
	export function CreateListSuiteDefinitionsRequestFormGroup() {
		return new FormGroup<ListSuiteDefinitionsRequestFormProperties>({
		});

	}

	export interface ListSuiteRunsRequest {
	}
	export interface ListSuiteRunsRequestFormProperties {
	}
	export function CreateListSuiteRunsRequestFormGroup() {
		return new FormGroup<ListSuiteRunsRequestFormProperties>({
		});

	}

	export interface ListTagsForResourceRequest {
	}
	export interface ListTagsForResourceRequestFormProperties {
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
		});

	}

	export interface StartSuiteRunRequest {
		suiteDefinitionVersion?: string;

		/** Required */
		suiteRunConfiguration: SuiteRunConfiguration;
		tags?: TagMap;
	}
	export interface StartSuiteRunRequestFormProperties {
		suiteDefinitionVersion: FormControl<string | null | undefined>,
	}
	export function CreateStartSuiteRunRequestFormGroup() {
		return new FormGroup<StartSuiteRunRequestFormProperties>({
			suiteDefinitionVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopSuiteRunRequest {
	}
	export interface StopSuiteRunRequestFormProperties {
	}
	export function CreateStopSuiteRunRequestFormGroup() {
		return new FormGroup<StopSuiteRunRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		tags: TagMap;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export enum TestCaseScenarioStatus { PASS = 'PASS', FAIL = 'FAIL', CANCELED = 'CANCELED', PENDING = 'PENDING', RUNNING = 'RUNNING', STOPPING = 'STOPPING', STOPPED = 'STOPPED', PASS_WITH_WARNINGS = 'PASS_WITH_WARNINGS', ERROR = 'ERROR' }

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateSuiteDefinitionRequest {

		/** Required */
		suiteDefinitionConfiguration: SuiteDefinitionConfiguration;
	}
	export interface UpdateSuiteDefinitionRequestFormProperties {
	}
	export function CreateUpdateSuiteDefinitionRequestFormGroup() {
		return new FormGroup<UpdateSuiteDefinitionRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateSuiteDefinition</a> action.</p>
		 * Post suiteDefinitions
		 * @return {CreateSuiteDefinitionResponse} Success
		 */
		CreateSuiteDefinition(requestBody: CreateSuiteDefinitionPostBody): Observable<CreateSuiteDefinitionResponse> {
			return this.http.post<CreateSuiteDefinitionResponse>(this.baseUri + 'suiteDefinitions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the Device Advisor test suites you have created.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteDefinitions</a> action.</p>
		 * Get suiteDefinitions
		 * @param {number} maxResults The maximum number of results to return at once.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} nextToken A token used to get the next set of results.
		 *     Max length: 2000
		 * @return {ListSuiteDefinitionsResponse} Success
		 */
		ListSuiteDefinitions(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSuiteDefinitionsResponse> {
			return this.http.get<ListSuiteDefinitionsResponse>(this.baseUri + 'suiteDefinitions?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Deletes a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DeleteSuiteDefinition</a> action.</p>
		 * Delete suiteDefinitions/{suiteDefinitionId}
		 * @param {string} suiteDefinitionId Suite definition ID of the test suite to be deleted.
		 *     Min length: 12    Max length: 36
		 * @return {DeleteSuiteDefinitionResponse} Success
		 */
		DeleteSuiteDefinition(suiteDefinitionId: string): Observable<DeleteSuiteDefinitionResponse> {
			return this.http.delete<DeleteSuiteDefinitionResponse>(this.baseUri + 'suiteDefinitions/' + (suiteDefinitionId == null ? '' : encodeURIComponent(suiteDefinitionId)), {});
		}

		/**
		 * <p>Gets information about a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteDefinition</a> action.</p>
		 * Get suiteDefinitions/{suiteDefinitionId}
		 * @param {string} suiteDefinitionId Suite definition ID of the test suite to get.
		 *     Min length: 12    Max length: 36
		 * @param {string} suiteDefinitionVersion Suite definition version of the test suite to get.
		 *     Min length: 2    Max length: 255
		 * @return {GetSuiteDefinitionResponse} Success
		 */
		GetSuiteDefinition(suiteDefinitionId: string, suiteDefinitionVersion: string | null | undefined): Observable<GetSuiteDefinitionResponse> {
			return this.http.get<GetSuiteDefinitionResponse>(this.baseUri + 'suiteDefinitions/' + (suiteDefinitionId == null ? '' : encodeURIComponent(suiteDefinitionId)) + '&suiteDefinitionVersion=' + (suiteDefinitionVersion == null ? '' : encodeURIComponent(suiteDefinitionVersion)), {});
		}

		/**
		 * <p>Updates a Device Advisor test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UpdateSuiteDefinition</a> action.</p>
		 * Patch suiteDefinitions/{suiteDefinitionId}
		 * @param {string} suiteDefinitionId Suite definition ID of the test suite to be updated.
		 *     Min length: 12    Max length: 36
		 * @return {UpdateSuiteDefinitionResponse} Success
		 */
		UpdateSuiteDefinition(suiteDefinitionId: string, requestBody: UpdateSuiteDefinitionPatchBody): Observable<UpdateSuiteDefinitionResponse> {
			return this.http.patch<UpdateSuiteDefinitionResponse>(this.baseUri + 'suiteDefinitions/' + (suiteDefinitionId == null ? '' : encodeURIComponent(suiteDefinitionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about an Device Advisor endpoint.
		 * Get endpoint
		 * @param {string} thingArn The thing ARN of the device. This is an optional parameter.
		 *     Min length: 20    Max length: 2048
		 * @param {string} certificateArn The certificate ARN of the device. This is an optional parameter.
		 *     Min length: 20    Max length: 2048
		 * @param {string} deviceRoleArn The device role ARN of the device. This is an optional parameter.
		 *     Min length: 20    Max length: 2048
		 * @param {AuthenticationMethod} authenticationMethod The authentication method used during the device connection.
		 * @return {GetEndpointResponse} Success
		 */
		GetEndpoint(thingArn: string | null | undefined, certificateArn: string | null | undefined, deviceRoleArn: string | null | undefined, authenticationMethod: AuthenticationMethod | null | undefined): Observable<GetEndpointResponse> {
			return this.http.get<GetEndpointResponse>(this.baseUri + 'endpoint?thingArn=' + (thingArn == null ? '' : encodeURIComponent(thingArn)) + '&certificateArn=' + (certificateArn == null ? '' : encodeURIComponent(certificateArn)) + '&deviceRoleArn=' + (deviceRoleArn == null ? '' : encodeURIComponent(deviceRoleArn)) + '&authenticationMethod=' + authenticationMethod, {});
		}

		/**
		 * <p>Gets information about a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRun</a> action.</p>
		 * Get suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}
		 * @param {string} suiteDefinitionId Suite definition ID for the test suite run.
		 *     Min length: 12    Max length: 36
		 * @param {string} suiteRunId Suite run ID for the test suite run.
		 *     Min length: 12    Max length: 36
		 * @return {GetSuiteRunResponse} Success
		 */
		GetSuiteRun(suiteDefinitionId: string, suiteRunId: string): Observable<GetSuiteRunResponse> {
			return this.http.get<GetSuiteRunResponse>(this.baseUri + 'suiteDefinitions/' + (suiteDefinitionId == null ? '' : encodeURIComponent(suiteDefinitionId)) + '/suiteRuns/' + (suiteRunId == null ? '' : encodeURIComponent(suiteRunId)), {});
		}

		/**
		 * <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">GetSuiteRunReport</a> action.</p>
		 * Get suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/report
		 * @param {string} suiteDefinitionId Suite definition ID of the test suite.
		 *     Min length: 12    Max length: 36
		 * @param {string} suiteRunId Suite run ID of the test suite run.
		 *     Min length: 12    Max length: 36
		 * @return {GetSuiteRunReportResponse} Success
		 */
		GetSuiteRunReport(suiteDefinitionId: string, suiteRunId: string): Observable<GetSuiteRunReportResponse> {
			return this.http.get<GetSuiteRunReportResponse>(this.baseUri + 'suiteDefinitions/' + (suiteDefinitionId == null ? '' : encodeURIComponent(suiteDefinitionId)) + '/suiteRuns/' + (suiteRunId == null ? '' : encodeURIComponent(suiteRunId)) + '/report', {});
		}

		/**
		 * <p>Lists runs of the specified Device Advisor test suite. You can list all runs of the test suite, or the runs of a specific version of the test suite.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListSuiteRuns</a> action.</p>
		 * Get suiteRuns
		 * @param {string} suiteDefinitionId Lists the test suite runs of the specified test suite based on suite definition ID.
		 *     Min length: 12    Max length: 36
		 * @param {string} suiteDefinitionVersion Must be passed along with <code>suiteDefinitionId</code>. Lists the test suite runs of the specified test suite based on suite definition version.
		 *     Min length: 2    Max length: 255
		 * @param {number} maxResults The maximum number of results to return at once.
		 *     Minimum: 1    Maximum: 50
		 * @param {string} nextToken A token to retrieve the next set of results.
		 *     Max length: 2000
		 * @return {ListSuiteRunsResponse} Success
		 */
		ListSuiteRuns(suiteDefinitionId: string | null | undefined, suiteDefinitionVersion: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSuiteRunsResponse> {
			return this.http.get<ListSuiteRunsResponse>(this.baseUri + 'suiteRuns?suiteDefinitionId=' + (suiteDefinitionId == null ? '' : encodeURIComponent(suiteDefinitionId)) + '&suiteDefinitionVersion=' + (suiteDefinitionVersion == null ? '' : encodeURIComponent(suiteDefinitionVersion)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p>Lists the tags attached to an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ListTagsForResource</a> action.</p>
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The resource ARN of the IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.
		 *     Min length: 20    Max length: 2048
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TagResource</a> action.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.
		 *     Min length: 20    Max length: 2048
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Starts a Device Advisor test suite run.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StartSuiteRun</a> action.</p>
		 * Post suiteDefinitions/{suiteDefinitionId}/suiteRuns
		 * @param {string} suiteDefinitionId Suite definition ID of the test suite.
		 *     Min length: 12    Max length: 36
		 * @return {StartSuiteRunResponse} Success
		 */
		StartSuiteRun(suiteDefinitionId: string, requestBody: StartSuiteRunPostBody): Observable<StartSuiteRunResponse> {
			return this.http.post<StartSuiteRunResponse>(this.baseUri + 'suiteDefinitions/' + (suiteDefinitionId == null ? '' : encodeURIComponent(suiteDefinitionId)) + '/suiteRuns', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops a Device Advisor test suite run that is currently running.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">StopSuiteRun</a> action.</p>
		 * Post suiteDefinitions/{suiteDefinitionId}/suiteRuns/{suiteRunId}/stop
		 * @param {string} suiteDefinitionId Suite definition ID of the test suite run to be stopped.
		 *     Min length: 12    Max length: 36
		 * @param {string} suiteRunId Suite run ID of the test suite run to be stopped.
		 *     Min length: 12    Max length: 36
		 * @return {StopSuiteRunResponse} Success
		 */
		StopSuiteRun(suiteDefinitionId: string, suiteRunId: string): Observable<StopSuiteRunResponse> {
			return this.http.post<StopSuiteRunResponse>(this.baseUri + 'suiteDefinitions/' + (suiteDefinitionId == null ? '' : encodeURIComponent(suiteDefinitionId)) + '/suiteRuns/' + (suiteRunId == null ? '' : encodeURIComponent(suiteRunId)) + '/stop', null, {});
		}

		/**
		 * <p>Removes tags from an IoT Device Advisor resource.</p> <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">UntagResource</a> action.</p>
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The resource ARN of an IoT Device Advisor resource. This can be SuiteDefinition ARN or SuiteRun ARN.
		 *     Min length: 20    Max length: 2048
		 * @param {Array<string>} tagKeys List of tag keys to remove from the IoT Device Advisor resource.
		 *     Minimum items: 0    Maximum items: 50
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateSuiteDefinitionPostBody {

		/**
		 * Gets the suite definition configuration.
		 * Required
		 */
		suiteDefinitionConfiguration: CreateSuiteDefinitionPostBodySuiteDefinitionConfiguration;

		/** The tags to be attached to the suite definition. */
		tags?: {[id: string]: string };
	}
	export interface CreateSuiteDefinitionPostBodyFormProperties {

		/** The tags to be attached to the suite definition. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateSuiteDefinitionPostBodyFormGroup() {
		return new FormGroup<CreateSuiteDefinitionPostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSuiteDefinitionPostBodySuiteDefinitionConfiguration {
		suiteDefinitionName?: string;
		devices?: Array<DeviceUnderTest>;
		intendedForQualification?: boolean | null;
		isLongDurationTest?: boolean | null;
		rootGroup?: string;
		devicePermissionRoleArn?: string;
		protocol?: Protocol;
	}
	export interface CreateSuiteDefinitionPostBodySuiteDefinitionConfigurationFormProperties {
		suiteDefinitionName: FormControl<string | null | undefined>,
		intendedForQualification: FormControl<boolean | null | undefined>,
		isLongDurationTest: FormControl<boolean | null | undefined>,
		rootGroup: FormControl<string | null | undefined>,
		devicePermissionRoleArn: FormControl<string | null | undefined>,
		protocol: FormControl<Protocol | null | undefined>,
	}
	export function CreateCreateSuiteDefinitionPostBodySuiteDefinitionConfigurationFormGroup() {
		return new FormGroup<CreateSuiteDefinitionPostBodySuiteDefinitionConfigurationFormProperties>({
			suiteDefinitionName: new FormControl<string | null | undefined>(undefined),
			intendedForQualification: new FormControl<boolean | null | undefined>(undefined),
			isLongDurationTest: new FormControl<boolean | null | undefined>(undefined),
			rootGroup: new FormControl<string | null | undefined>(undefined),
			devicePermissionRoleArn: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<Protocol | null | undefined>(undefined),
		});

	}

	export interface UpdateSuiteDefinitionPatchBody {

		/**
		 * Gets the suite definition configuration.
		 * Required
		 */
		suiteDefinitionConfiguration: UpdateSuiteDefinitionPatchBodySuiteDefinitionConfiguration;
	}
	export interface UpdateSuiteDefinitionPatchBodyFormProperties {
	}
	export function CreateUpdateSuiteDefinitionPatchBodyFormGroup() {
		return new FormGroup<UpdateSuiteDefinitionPatchBodyFormProperties>({
		});

	}

	export interface UpdateSuiteDefinitionPatchBodySuiteDefinitionConfiguration {
		suiteDefinitionName?: string;
		devices?: Array<DeviceUnderTest>;
		intendedForQualification?: boolean | null;
		isLongDurationTest?: boolean | null;
		rootGroup?: string;
		devicePermissionRoleArn?: string;
		protocol?: Protocol;
	}
	export interface UpdateSuiteDefinitionPatchBodySuiteDefinitionConfigurationFormProperties {
		suiteDefinitionName: FormControl<string | null | undefined>,
		intendedForQualification: FormControl<boolean | null | undefined>,
		isLongDurationTest: FormControl<boolean | null | undefined>,
		rootGroup: FormControl<string | null | undefined>,
		devicePermissionRoleArn: FormControl<string | null | undefined>,
		protocol: FormControl<Protocol | null | undefined>,
	}
	export function CreateUpdateSuiteDefinitionPatchBodySuiteDefinitionConfigurationFormGroup() {
		return new FormGroup<UpdateSuiteDefinitionPatchBodySuiteDefinitionConfigurationFormProperties>({
			suiteDefinitionName: new FormControl<string | null | undefined>(undefined),
			intendedForQualification: new FormControl<boolean | null | undefined>(undefined),
			isLongDurationTest: new FormControl<boolean | null | undefined>(undefined),
			rootGroup: new FormControl<string | null | undefined>(undefined),
			devicePermissionRoleArn: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<Protocol | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to be attached to the IoT Device Advisor resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to be attached to the IoT Device Advisor resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSuiteRunPostBody {

		/**
		 * Suite definition version of the test suite.
		 * Min length: 2
		 * Max length: 255
		 */
		suiteDefinitionVersion?: string | null;

		/**
		 * Gets suite run configuration.
		 * Required
		 */
		suiteRunConfiguration: StartSuiteRunPostBodySuiteRunConfiguration;

		/** The tags to be attached to the suite run. */
		tags?: {[id: string]: string };
	}
	export interface StartSuiteRunPostBodyFormProperties {

		/**
		 * Suite definition version of the test suite.
		 * Min length: 2
		 * Max length: 255
		 */
		suiteDefinitionVersion: FormControl<string | null | undefined>,

		/** The tags to be attached to the suite run. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartSuiteRunPostBodyFormGroup() {
		return new FormGroup<StartSuiteRunPostBodyFormProperties>({
			suiteDefinitionVersion: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(255)]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartSuiteRunPostBodySuiteRunConfiguration {
		primaryDevice?: DeviceUnderTest;
		selectedTestList?: Array<string>;
		parallelRun?: boolean | null;
	}
	export interface StartSuiteRunPostBodySuiteRunConfigurationFormProperties {
		parallelRun: FormControl<boolean | null | undefined>,
	}
	export function CreateStartSuiteRunPostBodySuiteRunConfigurationFormGroup() {
		return new FormGroup<StartSuiteRunPostBodySuiteRunConfigurationFormProperties>({
			parallelRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

