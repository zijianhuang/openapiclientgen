import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The structure representing the configureAgentResponse. */
	export interface ConfigureAgentResponse {

		/**
		 * <p/>
		 * Required
		 */
		configuration: AgentConfiguration;
	}

	/** The structure representing the configureAgentResponse. */
	export interface ConfigureAgentResponseFormProperties {
	}
	export function CreateConfigureAgentResponseFormGroup() {
		return new FormGroup<ConfigureAgentResponseFormProperties>({
		});

	}


	/** <p/> */
	export interface AgentConfiguration {

		/** Required */
		periodInSeconds: number;

		/** Required */
		shouldProfile: boolean;
	}

	/** <p/> */
	export interface AgentConfigurationFormProperties {

		/** Required */
		periodInSeconds: FormControl<number | null | undefined>,

		/** Required */
		shouldProfile: FormControl<boolean | null | undefined>,
	}
	export function CreateAgentConfigurationFormGroup() {
		return new FormGroup<AgentConfigurationFormProperties>({
			periodInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			shouldProfile: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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


	/** The structure representing the createProfilingGroupResponse. */
	export interface CreateProfilingGroupResponse {

		/**
		 * The description of a profiling group.
		 * Required
		 */
		profilingGroup: ProfilingGroupDescription;
	}

	/** The structure representing the createProfilingGroupResponse. */
	export interface CreateProfilingGroupResponseFormProperties {
	}
	export function CreateCreateProfilingGroupResponseFormGroup() {
		return new FormGroup<CreateProfilingGroupResponseFormProperties>({
		});

	}


	/** The description of a profiling group. */
	export interface ProfilingGroupDescription {

		/** <p/> */
		agentOrchestrationConfig?: AgentOrchestrationConfig;
		arn?: string | null;
		createdAt?: Date | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/** Information about the profiling status. */
		profilingStatus?: ProfilingStatus;
		updatedAt?: Date | null;
	}

	/** The description of a profiling group. */
	export interface ProfilingGroupDescriptionFormProperties {
		arn: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateProfilingGroupDescriptionFormGroup() {
		return new FormGroup<ProfilingGroupDescriptionFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[\w-]+$')]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface AgentOrchestrationConfig {

		/** Required */
		profilingEnabled: boolean;
	}

	/** <p/> */
	export interface AgentOrchestrationConfigFormProperties {

		/** Required */
		profilingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAgentOrchestrationConfigFormGroup() {
		return new FormGroup<AgentOrchestrationConfigFormProperties>({
			profilingEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the profiling status. */
	export interface ProfilingStatus {
		latestAgentOrchestratedAt?: Date | null;
		latestAgentProfileReportedAt?: Date | null;

		/** Information about the time range of the latest available aggregated profile. */
		latestAggregatedProfile?: AggregatedProfileTime;
	}

	/** Information about the profiling status. */
	export interface ProfilingStatusFormProperties {
		latestAgentOrchestratedAt: FormControl<Date | null | undefined>,
		latestAgentProfileReportedAt: FormControl<Date | null | undefined>,
	}
	export function CreateProfilingStatusFormGroup() {
		return new FormGroup<ProfilingStatusFormProperties>({
			latestAgentOrchestratedAt: new FormControl<Date | null | undefined>(undefined),
			latestAgentProfileReportedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about the time range of the latest available aggregated profile. */
	export interface AggregatedProfileTime {
		period?: AggregatedProfileTimePeriod | null;
		start?: Date | null;
	}

	/** Information about the time range of the latest available aggregated profile. */
	export interface AggregatedProfileTimeFormProperties {
		period: FormControl<AggregatedProfileTimePeriod | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreateAggregatedProfileTimeFormGroup() {
		return new FormGroup<AggregatedProfileTimeFormProperties>({
			period: new FormControl<AggregatedProfileTimePeriod | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AggregatedProfileTimePeriod { P1D = 0, PT1H = 1, PT5M = 2 }

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
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


	/** The structure representing the deleteProfilingGroupResponse. */
	export interface DeleteProfilingGroupResponse {
	}

	/** The structure representing the deleteProfilingGroupResponse. */
	export interface DeleteProfilingGroupResponseFormProperties {
	}
	export function CreateDeleteProfilingGroupResponseFormGroup() {
		return new FormGroup<DeleteProfilingGroupResponseFormProperties>({
		});

	}


	/** The structure representing the describeProfilingGroupResponse. */
	export interface DescribeProfilingGroupResponse {

		/**
		 * The description of a profiling group.
		 * Required
		 */
		profilingGroup: ProfilingGroupDescription;
	}

	/** The structure representing the describeProfilingGroupResponse. */
	export interface DescribeProfilingGroupResponseFormProperties {
	}
	export function CreateDescribeProfilingGroupResponseFormGroup() {
		return new FormGroup<DescribeProfilingGroupResponseFormProperties>({
		});

	}


	/** The structure representing the getPolicyResponse. */
	export interface GetPolicyResponse {

		/** Required */
		policy: string;

		/** Required */
		revisionId: string;
	}

	/** The structure representing the getPolicyResponse. */
	export interface GetPolicyResponseFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGetPolicyResponseFormGroup() {
		return new FormGroup<GetPolicyResponseFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the getProfileResponse. */
	export interface GetProfileResponse {

		/** Required */
		profile: string;
	}

	/** The structure representing the getProfileResponse. */
	export interface GetProfileResponseFormProperties {

		/** Required */
		profile: FormControl<string | null | undefined>,
	}
	export function CreateGetProfileResponseFormGroup() {
		return new FormGroup<GetProfileResponseFormProperties>({
			profile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the listProfileTimesResponse. */
	export interface ListProfileTimesResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		nextToken?: string | null;

		/** Required */
		profileTimes: Array<ProfileTime>;
	}

	/** The structure representing the listProfileTimesResponse. */
	export interface ListProfileTimesResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfileTimesResponseFormGroup() {
		return new FormGroup<ListProfileTimesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('^[\w-]+$')]),
		});

	}


	/** Information about the profile time. */
	export interface ProfileTime {
		start?: Date | null;
	}

	/** Information about the profile time. */
	export interface ProfileTimeFormProperties {
		start: FormControl<Date | null | undefined>,
	}
	export function CreateProfileTimeFormGroup() {
		return new FormGroup<ProfileTimeFormProperties>({
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The structure representing the listProfilingGroupsResponse. */
	export interface ListProfilingGroupsResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		nextToken?: string | null;

		/** Required */
		profilingGroupNames: Array<string>;
		profilingGroups?: Array<ProfilingGroupDescription>;
	}

	/** The structure representing the listProfilingGroupsResponse. */
	export interface ListProfilingGroupsResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProfilingGroupsResponseFormGroup() {
		return new FormGroup<ListProfilingGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('^[\w-]+$')]),
		});

	}


	/** The structure representing the postAgentProfileResponse. */
	export interface PostAgentProfileResponse {
	}

	/** The structure representing the postAgentProfileResponse. */
	export interface PostAgentProfileResponseFormProperties {
	}
	export function CreatePostAgentProfileResponseFormGroup() {
		return new FormGroup<PostAgentProfileResponseFormProperties>({
		});

	}


	/** The structure representing the putPermissionResponse. */
	export interface PutPermissionResponse {

		/** Required */
		policy: string;

		/** Required */
		revisionId: string;
	}

	/** The structure representing the putPermissionResponse. */
	export interface PutPermissionResponseFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionResponseFormGroup() {
		return new FormGroup<PutPermissionResponseFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the removePermissionResponse. */
	export interface RemovePermissionResponse {

		/** Required */
		policy: string;

		/** Required */
		revisionId: string;
	}

	/** The structure representing the removePermissionResponse. */
	export interface RemovePermissionResponseFormProperties {

		/** Required */
		policy: FormControl<string | null | undefined>,

		/** Required */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateRemovePermissionResponseFormGroup() {
		return new FormGroup<RemovePermissionResponseFormProperties>({
			policy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			revisionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the updateProfilingGroupResponse. */
	export interface UpdateProfilingGroupResponse {

		/**
		 * The description of a profiling group.
		 * Required
		 */
		profilingGroup: ProfilingGroupDescription;
	}

	/** The structure representing the updateProfilingGroupResponse. */
	export interface UpdateProfilingGroupResponseFormProperties {
	}
	export function CreateUpdateProfilingGroupResponseFormGroup() {
		return new FormGroup<UpdateProfilingGroupResponseFormProperties>({
		});

	}

	export enum ActionGroup { agentPermissions = 0 }

	export enum AggregationPeriod { P1D = 0, PT1H = 1, PT5M = 2 }


	/** The structure representing the configureAgentRequest. */
	export interface ConfigureAgentRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		fleetInstanceId?: string | null;
	}

	/** The structure representing the configureAgentRequest. */
	export interface ConfigureAgentRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		fleetInstanceId: FormControl<string | null | undefined>,
	}
	export function CreateConfigureAgentRequestFormGroup() {
		return new FormGroup<ConfigureAgentRequestFormProperties>({
			fleetInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[\w-.:/]+$')]),
		});

	}


	/** The structure representing the createProfiliingGroupRequest. */
	export interface CreateProfilingGroupRequest {

		/** <p/> */
		agentOrchestrationConfig?: AgentOrchestrationConfig;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		profilingGroupName: string;
	}

	/** The structure representing the createProfiliingGroupRequest. */
	export interface CreateProfilingGroupRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		profilingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfilingGroupRequestFormGroup() {
		return new FormGroup<CreateProfilingGroupRequestFormProperties>({
			profilingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[\w-]+$')]),
		});

	}


	/** The structure representing the deleteProfilingGroupRequest. */
	export interface DeleteProfilingGroupRequest {
	}

	/** The structure representing the deleteProfilingGroupRequest. */
	export interface DeleteProfilingGroupRequestFormProperties {
	}
	export function CreateDeleteProfilingGroupRequestFormGroup() {
		return new FormGroup<DeleteProfilingGroupRequestFormProperties>({
		});

	}


	/** The structure representing the describeProfilingGroupRequest. */
	export interface DescribeProfilingGroupRequest {
	}

	/** The structure representing the describeProfilingGroupRequest. */
	export interface DescribeProfilingGroupRequestFormProperties {
	}
	export function CreateDescribeProfilingGroupRequestFormGroup() {
		return new FormGroup<DescribeProfilingGroupRequestFormProperties>({
		});

	}


	/** The structure representing the getPolicyRequest. */
	export interface GetPolicyRequest {
	}

	/** The structure representing the getPolicyRequest. */
	export interface GetPolicyRequestFormProperties {
	}
	export function CreateGetPolicyRequestFormGroup() {
		return new FormGroup<GetPolicyRequestFormProperties>({
		});

	}


	/** The structure representing the getProfileRequest. */
	export interface GetProfileRequest {
	}

	/** The structure representing the getProfileRequest. */
	export interface GetProfileRequestFormProperties {
	}
	export function CreateGetProfileRequestFormGroup() {
		return new FormGroup<GetProfileRequestFormProperties>({
		});

	}

	export enum OrderBy { TimestampAscending = 0, TimestampDescending = 1 }


	/** The structure representing the listProfileTimesRequest. */
	export interface ListProfileTimesRequest {
	}

	/** The structure representing the listProfileTimesRequest. */
	export interface ListProfileTimesRequestFormProperties {
	}
	export function CreateListProfileTimesRequestFormGroup() {
		return new FormGroup<ListProfileTimesRequestFormProperties>({
		});

	}


	/** The structure representing the listProfilingGroupsRequest. */
	export interface ListProfilingGroupsRequest {
	}

	/** The structure representing the listProfilingGroupsRequest. */
	export interface ListProfilingGroupsRequestFormProperties {
	}
	export function CreateListProfilingGroupsRequestFormGroup() {
		return new FormGroup<ListProfilingGroupsRequestFormProperties>({
		});

	}


	/** The structure representing the postAgentProfileRequest. */
	export interface PostAgentProfileRequest {

		/** Required */
		agentProfile: string;
	}

	/** The structure representing the postAgentProfileRequest. */
	export interface PostAgentProfileRequestFormProperties {

		/** Required */
		agentProfile: FormControl<string | null | undefined>,
	}
	export function CreatePostAgentProfileRequestFormGroup() {
		return new FormGroup<PostAgentProfileRequestFormProperties>({
			agentProfile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The structure representing the putPermissionRequest. */
	export interface PutPermissionRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		principals: Array<string>;
		revisionId?: string | null;
	}

	/** The structure representing the putPermissionRequest. */
	export interface PutPermissionRequestFormProperties {
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionRequestFormGroup() {
		return new FormGroup<PutPermissionRequestFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure representing the removePermissionRequest. */
	export interface RemovePermissionRequest {
	}

	/** The structure representing the removePermissionRequest. */
	export interface RemovePermissionRequestFormProperties {
	}
	export function CreateRemovePermissionRequestFormGroup() {
		return new FormGroup<RemovePermissionRequestFormProperties>({
		});

	}


	/** The structure representing the updateProfilingGroupRequest. */
	export interface UpdateProfilingGroupRequest {

		/**
		 * <p/>
		 * Required
		 */
		agentOrchestrationConfig: AgentOrchestrationConfig;
	}

	/** The structure representing the updateProfilingGroupRequest. */
	export interface UpdateProfilingGroupRequestFormProperties {
	}
	export function CreateUpdateProfilingGroupRequestFormGroup() {
		return new FormGroup<UpdateProfilingGroupRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p/>
		 * Post profilingGroups/{profilingGroupName}/configureAgent
		 * @param {string} profilingGroupName <p/>
		 * @return {ConfigureAgentResponse} Success
		 */
		ConfigureAgent(profilingGroupName: string, requestBody: ConfigureAgentPostBody): Observable<ConfigureAgentResponse> {
			return this.http.post<ConfigureAgentResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/configureAgent', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a profiling group.
		 * Post profilingGroups#clientToken
		 * @param {string} clientToken <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p> <p>This parameter specifies a unique identifier for the new profiling group that helps ensure idempotency.</p>
		 * @return {void} 
		 */
		CreateProfilingGroup(clientToken: string, requestBody: CreateProfilingGroupPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'profilingGroups#clientToken?clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a profiling group.
		 * Delete profilingGroups/{profilingGroupName}
		 * @param {string} profilingGroupName The profiling group name to delete.
		 * @return {void} 
		 */
		DeleteProfilingGroup(profilingGroupName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes a profiling group.
		 * Get profilingGroups/{profilingGroupName}
		 * @param {string} profilingGroupName The profiling group name.
		 * @return {DescribeProfilingGroupResponse} Success
		 */
		DescribeProfilingGroup(profilingGroupName: string): Observable<DescribeProfilingGroupResponse> {
			return this.http.get<DescribeProfilingGroupResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)), {});
		}

		/**
		 * Updates a profiling group.
		 * Put profilingGroups/{profilingGroupName}
		 * @param {string} profilingGroupName The name of the profiling group to update.
		 * @return {UpdateProfilingGroupResponse} Success
		 */
		UpdateProfilingGroup(profilingGroupName: string, requestBody: UpdateProfilingGroupPutBody): Observable<UpdateProfilingGroupResponse> {
			return this.http.put<UpdateProfilingGroupResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the profiling group policy.
		 * Get profilingGroups/{profilingGroupName}/policy
		 * @param {string} profilingGroupName The name of the profiling group.
		 * @return {GetPolicyResponse} Success
		 */
		GetPolicy(profilingGroupName: string): Observable<GetPolicyResponse> {
			return this.http.get<GetPolicyResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/policy', {});
		}

		/**
		 * <p>Gets the aggregated profile of a profiling group for the specified time range. If the requested time range does not align with the available aggregated profiles, it is expanded to attain alignment. If aggregated profiles are available only for part of the period requested, the profile is returned from the earliest available to the latest within the requested time range. </p> <p>For example, if the requested time range is from 00:00 to 00:20 and the available profiles are from 00:15 to 00:25, the returned profile will be from 00:15 to 00:20. </p> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p>
		 * Get profilingGroups/{profilingGroupName}/profile
		 * @param {Date} endTime <p/> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p>
		 * @param {number} maxDepth The maximum depth of the graph.
		 * @param {string} period <p>The period of the profile to get. The time range must be in the past and not longer than one week. </p> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p>
		 * @param {string} profilingGroupName The name of the profiling group to get.
		 * @param {Date} startTime <p>The start time of the profile to get.</p> <p>You must specify exactly two of the following parameters: <code>startTime</code>, <code>period</code>, and <code>endTime</code>. </p>
		 * @return {GetProfileResponse} Success
		 */
		GetProfile(endTime: Date | null | undefined, maxDepth: number | null | undefined, period: string | null | undefined, profilingGroupName: string, startTime: Date | null | undefined): Observable<GetProfileResponse> {
			return this.http.get<GetProfileResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/profile?endTime=' + endTime?.toISOString() + '&maxDepth=' + maxDepth + '&period=' + (period == null ? '' : encodeURIComponent(period)) + '&startTime=' + startTime?.toISOString(), {});
		}

		/**
		 * List the start times of the available aggregated profiles of a profiling group for an aggregation period within the specified time range.
		 * Get profilingGroups/{profilingGroupName}/profileTimes#endTime&period&startTime
		 * @param {Date} endTime The end time of the time range from which to list the profiles.
		 * @param {number} maxResults The maximum number of profile time results returned by <code>ListProfileTimes</code> in paginated output. When this parameter is used, <code>ListProfileTimes</code> only returns <code>maxResults</code> results in a single page with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfileTimes</code> request with the returned <code>nextToken</code> value. 
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfileTimes</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @param {OrderBy} orderBy The order (ascending or descending by start time of the profile) to use when listing profiles. Defaults to <code>TIMESTAMP_DESCENDING</code>. 
		 * @param {AggregatedProfileTimePeriod} period The aggregation period.
		 * @param {string} profilingGroupName The name of the profiling group.
		 * @param {Date} startTime The start time of the time range from which to list the profiles.
		 * @return {ListProfileTimesResponse} Success
		 */
		ListProfileTimes(endTime: Date, maxResults: number | null | undefined, nextToken: string | null | undefined, orderBy: OrderBy | null | undefined, period: AggregatedProfileTimePeriod, profilingGroupName: string, startTime: Date): Observable<ListProfileTimesResponse> {
			return this.http.get<ListProfileTimesResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/profileTimes#endTime&period&startTime?endTime=' + endTime.toISOString() + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&orderBy=' + orderBy + '&period=' + period + '&startTime=' + startTime.toISOString(), {});
		}

		/**
		 * Lists profiling groups.
		 * Get profilingGroups
		 * @param {boolean} includeDescription A Boolean value indicating whether to include a description.
		 * @param {number} maxResults The maximum number of profiling groups results returned by <code>ListProfilingGroups</code> in paginated output. When this parameter is used, <code>ListProfilingGroups</code> only returns <code>maxResults</code> results in a single page along with a <code>nextToken</code> response element. The remaining results of the initial request can be seen by sending another <code>ListProfilingGroups</code> request with the returned <code>nextToken</code> value. 
		 * @param {string} nextToken <p>The <code>nextToken</code> value returned from a previous paginated <code>ListProfilingGroups</code> request where <code>maxResults</code> was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the <code>nextToken</code> value. </p> <note> <p>This token should be treated as an opaque identifier that is only used to retrieve the next items in a list and not for other programmatic purposes.</p> </note>
		 * @return {ListProfilingGroupsResponse} Success
		 */
		ListProfilingGroups(includeDescription: boolean | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListProfilingGroupsResponse> {
			return this.http.get<ListProfilingGroupsResponse>(this.baseUri + 'profilingGroups?includeDescription=' + includeDescription + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * <p/>
		 * Post profilingGroups/{profilingGroupName}/agentProfile#Content-Type
		 * @param {string} profileToken <p/>
		 * @param {string} profilingGroupName <p/>
		 * @return {void} 
		 */
		PostAgentProfile(profileToken: string | null | undefined, profilingGroupName: string, requestBody: PostAgentProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/agentProfile#Content-Type?profileToken=' + (profileToken == null ? '' : encodeURIComponent(profileToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides permission to the principals. This overwrites the existing permissions, and is not additive.
		 * Put profilingGroups/{profilingGroupName}/policy/{actionGroup}
		 * @param {ActionGroup} actionGroup The list of actions that the users and roles can perform on the profiling group.
		 * @param {string} profilingGroupName The name of the profiling group.
		 * @return {PutPermissionResponse} Success
		 */
		PutPermission(actionGroup: ActionGroup, profilingGroupName: string, requestBody: PutPermissionPutBody): Observable<PutPermissionResponse> {
			return this.http.put<PutPermissionResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/policy/' + actionGroup, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes statement for the provided action group from the policy.
		 * Delete profilingGroups/{profilingGroupName}/policy/{actionGroup}#revisionId
		 * @param {ActionGroup} actionGroup The list of actions that the users and roles can perform on the profiling group.
		 * @param {string} profilingGroupName The name of the profiling group.
		 * @param {string} revisionId A unique identifier for the current revision of the policy.
		 * @return {RemovePermissionResponse} Success
		 */
		RemovePermission(actionGroup: ActionGroup, profilingGroupName: string, revisionId: string): Observable<RemovePermissionResponse> {
			return this.http.delete<RemovePermissionResponse>(this.baseUri + 'profilingGroups/' + (profilingGroupName == null ? '' : encodeURIComponent(profilingGroupName)) + '/policy/' + actionGroup + '#revisionId&revisionId=' + (revisionId == null ? '' : encodeURIComponent(revisionId)), {});
		}
	}

	export interface ConfigureAgentPostBody {

		/**
		 * <p/>
		 * Max length: 255
		 * Min length: 1
		 */
		fleetInstanceId?: string | null;
	}
	export interface ConfigureAgentPostBodyFormProperties {

		/**
		 * <p/>
		 * Max length: 255
		 * Min length: 1
		 */
		fleetInstanceId: FormControl<string | null | undefined>,
	}
	export function CreateConfigureAgentPostBodyFormGroup() {
		return new FormGroup<ConfigureAgentPostBodyFormProperties>({
			fleetInstanceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[\w-.:/]+$')]),
		});

	}

	export interface CreateProfilingGroupPostBody {

		/** <p/> */
		agentOrchestrationConfig?: CreateProfilingGroupPostBodyAgentOrchestrationConfig;

		/**
		 * The name of the profiling group.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		profilingGroupName: string;
	}
	export interface CreateProfilingGroupPostBodyFormProperties {

		/**
		 * The name of the profiling group.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		profilingGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfilingGroupPostBodyFormGroup() {
		return new FormGroup<CreateProfilingGroupPostBodyFormProperties>({
			profilingGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1), Validators.pattern('^[\w-]+$')]),
		});

	}

	export interface CreateProfilingGroupPostBodyAgentOrchestrationConfig {
		profilingEnabled?: boolean | null;
	}
	export interface CreateProfilingGroupPostBodyAgentOrchestrationConfigFormProperties {
		profilingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateProfilingGroupPostBodyAgentOrchestrationConfigFormGroup() {
		return new FormGroup<CreateProfilingGroupPostBodyAgentOrchestrationConfigFormProperties>({
			profilingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateProfilingGroupPutBody {

		/**
		 * <p/>
		 * Required
		 */
		agentOrchestrationConfig: UpdateProfilingGroupPutBodyAgentOrchestrationConfig;
	}
	export interface UpdateProfilingGroupPutBodyFormProperties {
	}
	export function CreateUpdateProfilingGroupPutBodyFormGroup() {
		return new FormGroup<UpdateProfilingGroupPutBodyFormProperties>({
		});

	}

	export interface UpdateProfilingGroupPutBodyAgentOrchestrationConfig {
		profilingEnabled?: boolean | null;
	}
	export interface UpdateProfilingGroupPutBodyAgentOrchestrationConfigFormProperties {
		profilingEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateProfilingGroupPutBodyAgentOrchestrationConfigFormGroup() {
		return new FormGroup<UpdateProfilingGroupPutBodyAgentOrchestrationConfigFormProperties>({
			profilingEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PostAgentProfilePostBody {

		/**
		 * <p/>
		 * Required
		 */
		agentProfile: string;
	}
	export interface PostAgentProfilePostBodyFormProperties {

		/**
		 * <p/>
		 * Required
		 */
		agentProfile: FormControl<string | null | undefined>,
	}
	export function CreatePostAgentProfilePostBodyFormGroup() {
		return new FormGroup<PostAgentProfilePostBodyFormProperties>({
			agentProfile: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutPermissionPutBody {

		/**
		 * The list of role and user ARNs or the accountId that needs access (wildcards are not allowed).
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		principals: Array<string>;

		/** A unique identifier for the current revision of the policy. This is required, if a policy exists for the profiling group. This is not required when creating the policy for the first time. */
		revisionId?: string | null;
	}
	export interface PutPermissionPutBodyFormProperties {

		/** A unique identifier for the current revision of the policy. This is required, if a policy exists for the profiling group. This is not required when creating the policy for the first time. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionPutBodyFormGroup() {
		return new FormGroup<PutPermissionPutBodyFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

}

