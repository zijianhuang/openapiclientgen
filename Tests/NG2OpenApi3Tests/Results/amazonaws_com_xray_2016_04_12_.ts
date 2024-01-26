import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchGetTracesResult {
		Traces?: Array<Trace>;
		UnprocessedTraceIds?: Array<string>;
		NextToken?: string;
	}
	export interface BatchGetTracesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetTracesResultFormGroup() {
		return new FormGroup<BatchGetTracesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of segment documents with matching trace IDs. */
	export interface Trace {
		Id?: string;
		Duration?: number | null;
		LimitExceeded?: boolean | null;
		Segments?: Array<Segment>;
	}

	/** A collection of segment documents with matching trace IDs. */
	export interface TraceFormProperties {
		Id: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		LimitExceeded: FormControl<boolean | null | undefined>,
	}
	export function CreateTraceFormGroup() {
		return new FormGroup<TraceFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			LimitExceeded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with <a href="https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html">PutTraceSegments</a>, or an <code>inferred</code> segment for a downstream service, generated from a subsegment sent by the service that called it.</p> <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> */
	export interface Segment {
		Id?: string;
		Document?: string;
	}

	/** <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be compiled from documents uploaded with <a href="https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html">PutTraceSegments</a>, or an <code>inferred</code> segment for a downstream service, generated from a subsegment sent by the service that called it.</p> <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> */
	export interface SegmentFormProperties {
		Id: FormControl<string | null | undefined>,
		Document: FormControl<string | null | undefined>,
	}
	export function CreateSegmentFormGroup() {
		return new FormGroup<SegmentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Document: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvalidRequestException {
	}
	export interface InvalidRequestExceptionFormProperties {
	}
	export function CreateInvalidRequestExceptionFormGroup() {
		return new FormGroup<InvalidRequestExceptionFormProperties>({
		});

	}

	export interface ThrottledException {
	}
	export interface ThrottledExceptionFormProperties {
	}
	export function CreateThrottledExceptionFormGroup() {
		return new FormGroup<ThrottledExceptionFormProperties>({
		});

	}

	export interface CreateGroupResult {
		Group?: Group;
	}
	export interface CreateGroupResultFormProperties {
	}
	export function CreateCreateGroupResultFormGroup() {
		return new FormGroup<CreateGroupResultFormProperties>({
		});

	}


	/** Details and metadata for a group. */
	export interface Group {
		GroupName?: string;
		GroupARN?: string;
		FilterExpression?: string;
		InsightsConfiguration?: InsightsConfiguration;
	}

	/** Details and metadata for a group. */
	export interface GroupFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupARN: FormControl<string | null | undefined>,
		FilterExpression: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupARN: new FormControl<string | null | undefined>(undefined),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure containing configurations related to insights. */
	export interface InsightsConfiguration {
		InsightsEnabled?: boolean | null;
		NotificationsEnabled?: boolean | null;
	}

	/** The structure containing configurations related to insights. */
	export interface InsightsConfigurationFormProperties {
		InsightsEnabled: FormControl<boolean | null | undefined>,
		NotificationsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateInsightsConfigurationFormGroup() {
		return new FormGroup<InsightsConfigurationFormProperties>({
			InsightsEnabled: new FormControl<boolean | null | undefined>(undefined),
			NotificationsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** <p>A map that contains tag keys and tag values to attach to an Amazon Web Services X-Ray group or sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use. You cannot edit or delete system tags.</p> </li> </ul> */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>A map that contains tag keys and tag values to attach to an Amazon Web Services X-Ray group or sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use. You cannot edit or delete system tags.</p> </li> </ul> */
	export interface TagFormProperties {

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateSamplingRuleResult {
		SamplingRuleRecord?: SamplingRuleRecord;
	}
	export interface CreateSamplingRuleResultFormProperties {
	}
	export function CreateCreateSamplingRuleResultFormGroup() {
		return new FormGroup<CreateSamplingRuleResultFormProperties>({
		});

	}


	/** A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata. */
	export interface SamplingRuleRecord {
		SamplingRule?: SamplingRule;
		CreatedAt?: Date;
		ModifiedAt?: Date;
	}

	/** A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata. */
	export interface SamplingRuleRecordFormProperties {
		CreatedAt: FormControl<Date | null | undefined>,
		ModifiedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSamplingRuleRecordFormGroup() {
		return new FormGroup<SamplingRuleRecordFormProperties>({
			CreatedAt: new FormControl<Date | null | undefined>(undefined),
			ModifiedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties. */
	export interface SamplingRule {
		RuleName?: string;
		RuleARN?: string;

		/** Required */
		ResourceARN: string;

		/** Required */
		Priority: number;

		/** Required */
		FixedRate: number;

		/** Required */
		ReservoirSize: number;

		/** Required */
		ServiceName: string;

		/** Required */
		ServiceType: string;

		/** Required */
		Host: string;

		/** Required */
		HTTPMethod: string;

		/** Required */
		URLPath: string;

		/** Required */
		Version: number;
		Attributes?: AttributeMap;
	}

	/** A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties. */
	export interface SamplingRuleFormProperties {
		RuleName: FormControl<string | null | undefined>,
		RuleARN: FormControl<string | null | undefined>,

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,

		/** Required */
		Priority: FormControl<number | null | undefined>,

		/** Required */
		FixedRate: FormControl<number | null | undefined>,

		/** Required */
		ReservoirSize: FormControl<number | null | undefined>,

		/** Required */
		ServiceName: FormControl<string | null | undefined>,

		/** Required */
		ServiceType: FormControl<string | null | undefined>,

		/** Required */
		Host: FormControl<string | null | undefined>,

		/** Required */
		HTTPMethod: FormControl<string | null | undefined>,

		/** Required */
		URLPath: FormControl<string | null | undefined>,

		/** Required */
		Version: FormControl<number | null | undefined>,
	}
	export function CreateSamplingRuleFormGroup() {
		return new FormGroup<SamplingRuleFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined),
			RuleARN: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Priority: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			FixedRate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ReservoirSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ServiceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ServiceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			HTTPMethod: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			URLPath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AttributeMap {
	}
	export interface AttributeMapFormProperties {
	}
	export function CreateAttributeMapFormGroup() {
		return new FormGroup<AttributeMapFormProperties>({
		});

	}

	export interface RuleLimitExceededException {
	}
	export interface RuleLimitExceededExceptionFormProperties {
	}
	export function CreateRuleLimitExceededExceptionFormGroup() {
		return new FormGroup<RuleLimitExceededExceptionFormProperties>({
		});

	}

	export interface DeleteGroupResult {
	}
	export interface DeleteGroupResultFormProperties {
	}
	export function CreateDeleteGroupResultFormGroup() {
		return new FormGroup<DeleteGroupResultFormProperties>({
		});

	}

	export interface DeleteResourcePolicyResult {
	}
	export interface DeleteResourcePolicyResultFormProperties {
	}
	export function CreateDeleteResourcePolicyResultFormGroup() {
		return new FormGroup<DeleteResourcePolicyResultFormProperties>({
		});

	}

	export interface InvalidPolicyRevisionIdException {
	}
	export interface InvalidPolicyRevisionIdExceptionFormProperties {
	}
	export function CreateInvalidPolicyRevisionIdExceptionFormGroup() {
		return new FormGroup<InvalidPolicyRevisionIdExceptionFormProperties>({
		});

	}

	export interface DeleteSamplingRuleResult {
		SamplingRuleRecord?: SamplingRuleRecord;
	}
	export interface DeleteSamplingRuleResultFormProperties {
	}
	export function CreateDeleteSamplingRuleResultFormGroup() {
		return new FormGroup<DeleteSamplingRuleResultFormProperties>({
		});

	}

	export interface GetEncryptionConfigResult {
		EncryptionConfig?: EncryptionConfig;
	}
	export interface GetEncryptionConfigResultFormProperties {
	}
	export function CreateGetEncryptionConfigResultFormGroup() {
		return new FormGroup<GetEncryptionConfigResultFormProperties>({
		});

	}


	/** A configuration document that specifies encryption configuration settings. */
	export interface EncryptionConfig {
		KeyId?: string;
		Status?: EncryptionStatus;
		Type?: EncryptionType;
	}

	/** A configuration document that specifies encryption configuration settings. */
	export interface EncryptionConfigFormProperties {
		KeyId: FormControl<string | null | undefined>,
		Status: FormControl<EncryptionStatus | null | undefined>,
		Type: FormControl<EncryptionType | null | undefined>,
	}
	export function CreateEncryptionConfigFormGroup() {
		return new FormGroup<EncryptionConfigFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<EncryptionStatus | null | undefined>(undefined),
			Type: new FormControl<EncryptionType | null | undefined>(undefined),
		});

	}

	export enum EncryptionStatus { UPDATING = 0, ACTIVE = 1 }

	export enum EncryptionType { NONE = 0, KMS = 1 }

	export interface GetGroupResult {
		Group?: Group;
	}
	export interface GetGroupResultFormProperties {
	}
	export function CreateGetGroupResultFormGroup() {
		return new FormGroup<GetGroupResultFormProperties>({
		});

	}

	export interface GetGroupsResult {
		Groups?: Array<GroupSummary>;
		NextToken?: string;
	}
	export interface GetGroupsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupsResultFormGroup() {
		return new FormGroup<GetGroupsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details for a group without metadata. */
	export interface GroupSummary {
		GroupName?: string;
		GroupARN?: string;
		FilterExpression?: string;
		InsightsConfiguration?: InsightsConfiguration;
	}

	/** Details for a group without metadata. */
	export interface GroupSummaryFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupARN: FormControl<string | null | undefined>,
		FilterExpression: FormControl<string | null | undefined>,
	}
	export function CreateGroupSummaryFormGroup() {
		return new FormGroup<GroupSummaryFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupARN: new FormControl<string | null | undefined>(undefined),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInsightResult {
		Insight?: Insight;
	}
	export interface GetInsightResultFormProperties {
	}
	export function CreateGetInsightResultFormGroup() {
		return new FormGroup<GetInsightResultFormProperties>({
		});

	}


	/** When fault rates go outside of the expected range, X-Ray creates an insight. Insights tracks emergent issues within your applications. */
	export interface Insight {
		InsightId?: string;
		GroupARN?: string;
		GroupName?: string;

		/** <p/> */
		RootCauseServiceId?: ServiceId;
		Categories?: Array<InsightCategory>;
		State?: InsightState;
		StartTime?: Date;
		EndTime?: Date;
		Summary?: string;
		ClientRequestImpactStatistics?: RequestImpactStatistics;
		RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
		TopAnomalousServices?: Array<AnomalousService>;
	}

	/** When fault rates go outside of the expected range, X-Ray creates an insight. Insights tracks emergent issues within your applications. */
	export interface InsightFormProperties {
		InsightId: FormControl<string | null | undefined>,
		GroupARN: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		State: FormControl<InsightState | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Summary: FormControl<string | null | undefined>,
	}
	export function CreateInsightFormGroup() {
		return new FormGroup<InsightFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined),
			GroupARN: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<InsightState | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Summary: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface ServiceId {
		Name?: string;
		Names?: Array<string>;
		AccountId?: string;
		Type?: string;
	}

	/** <p/> */
	export interface ServiceIdFormProperties {
		Name: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateServiceIdFormGroup() {
		return new FormGroup<ServiceIdFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InsightCategory { FAULT = 0 }

	export enum InsightState { ACTIVE = 0, CLOSED = 1 }


	/** Statistics that describe how the incident has impacted a service. */
	export interface RequestImpactStatistics {
		FaultCount?: number | null;
		OkCount?: number | null;
		TotalCount?: number | null;
	}

	/** Statistics that describe how the incident has impacted a service. */
	export interface RequestImpactStatisticsFormProperties {
		FaultCount: FormControl<number | null | undefined>,
		OkCount: FormControl<number | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateRequestImpactStatisticsFormGroup() {
		return new FormGroup<RequestImpactStatisticsFormProperties>({
			FaultCount: new FormControl<number | null | undefined>(undefined),
			OkCount: new FormControl<number | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The service within the service graph that has anomalously high fault rates.  */
	export interface AnomalousService {

		/** <p/> */
		ServiceId?: ServiceId;
	}

	/** The service within the service graph that has anomalously high fault rates.  */
	export interface AnomalousServiceFormProperties {
	}
	export function CreateAnomalousServiceFormGroup() {
		return new FormGroup<AnomalousServiceFormProperties>({
		});

	}

	export interface GetInsightEventsResult {
		InsightEvents?: Array<InsightEvent>;
		NextToken?: string;
	}
	export interface GetInsightEventsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightEventsResultFormGroup() {
		return new FormGroup<GetInsightEventsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console. */
	export interface InsightEvent {
		Summary?: string;
		EventTime?: Date;
		ClientRequestImpactStatistics?: RequestImpactStatistics;
		RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
		TopAnomalousServices?: Array<AnomalousService>;
	}

	/** X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console. */
	export interface InsightEventFormProperties {
		Summary: FormControl<string | null | undefined>,
		EventTime: FormControl<Date | null | undefined>,
	}
	export function CreateInsightEventFormGroup() {
		return new FormGroup<InsightEventFormProperties>({
			Summary: new FormControl<string | null | undefined>(undefined),
			EventTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetInsightImpactGraphResult {
		InsightId?: string;
		StartTime?: Date;
		EndTime?: Date;
		ServiceGraphStartTime?: Date;
		ServiceGraphEndTime?: Date;
		Services?: Array<InsightImpactGraphService>;
		NextToken?: string;
	}
	export interface GetInsightImpactGraphResultFormProperties {
		InsightId: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		ServiceGraphStartTime: FormControl<Date | null | undefined>,
		ServiceGraphEndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightImpactGraphResultFormGroup() {
		return new FormGroup<GetInsightImpactGraphResultFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			ServiceGraphStartTime: new FormControl<Date | null | undefined>(undefined),
			ServiceGraphEndTime: new FormControl<Date | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.  */
	export interface InsightImpactGraphService {
		ReferenceId?: number | null;
		Type?: string;
		Name?: string;
		Names?: Array<string>;
		AccountId?: string;
		Edges?: Array<InsightImpactGraphEdge>;
	}

	/** Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.  */
	export interface InsightImpactGraphServiceFormProperties {
		ReferenceId: FormControl<number | null | undefined>,
		Type: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
	}
	export function CreateInsightImpactGraphServiceFormGroup() {
		return new FormGroup<InsightImpactGraphServiceFormProperties>({
			ReferenceId: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The connection between two service in an insight impact graph. */
	export interface InsightImpactGraphEdge {
		ReferenceId?: number | null;
	}

	/** The connection between two service in an insight impact graph. */
	export interface InsightImpactGraphEdgeFormProperties {
		ReferenceId: FormControl<number | null | undefined>,
	}
	export function CreateInsightImpactGraphEdgeFormGroup() {
		return new FormGroup<InsightImpactGraphEdgeFormProperties>({
			ReferenceId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetInsightSummariesResult {
		InsightSummaries?: Array<InsightSummary>;
		NextToken?: string;
	}
	export interface GetInsightSummariesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightSummariesResultFormGroup() {
		return new FormGroup<GetInsightSummariesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information that describes an insight. */
	export interface InsightSummary {
		InsightId?: string;
		GroupARN?: string;
		GroupName?: string;

		/** <p/> */
		RootCauseServiceId?: ServiceId;
		Categories?: Array<InsightCategory>;
		State?: InsightState;
		StartTime?: Date;
		EndTime?: Date;
		Summary?: string;
		ClientRequestImpactStatistics?: RequestImpactStatistics;
		RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;
		TopAnomalousServices?: Array<AnomalousService>;
		LastUpdateTime?: Date;
	}

	/** Information that describes an insight. */
	export interface InsightSummaryFormProperties {
		InsightId: FormControl<string | null | undefined>,
		GroupARN: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		State: FormControl<InsightState | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		Summary: FormControl<string | null | undefined>,
		LastUpdateTime: FormControl<Date | null | undefined>,
	}
	export function CreateInsightSummaryFormGroup() {
		return new FormGroup<InsightSummaryFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined),
			GroupARN: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<InsightState | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			Summary: new FormControl<string | null | undefined>(undefined),
			LastUpdateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface GetSamplingRulesResult {
		SamplingRuleRecords?: Array<SamplingRuleRecord>;
		NextToken?: string;
	}
	export interface GetSamplingRulesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSamplingRulesResultFormGroup() {
		return new FormGroup<GetSamplingRulesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSamplingStatisticSummariesResult {
		SamplingStatisticSummaries?: Array<SamplingStatisticSummary>;
		NextToken?: string;
	}
	export interface GetSamplingStatisticSummariesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSamplingStatisticSummariesResultFormGroup() {
		return new FormGroup<GetSamplingStatisticSummariesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Aggregated request sampling data for a sampling rule across all services for a 10-second window. */
	export interface SamplingStatisticSummary {
		RuleName?: string;
		Timestamp?: Date;
		RequestCount?: number | null;
		BorrowCount?: number | null;
		SampledCount?: number | null;
	}

	/** Aggregated request sampling data for a sampling rule across all services for a 10-second window. */
	export interface SamplingStatisticSummaryFormProperties {
		RuleName: FormControl<string | null | undefined>,
		Timestamp: FormControl<Date | null | undefined>,
		RequestCount: FormControl<number | null | undefined>,
		BorrowCount: FormControl<number | null | undefined>,
		SampledCount: FormControl<number | null | undefined>,
	}
	export function CreateSamplingStatisticSummaryFormGroup() {
		return new FormGroup<SamplingStatisticSummaryFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined),
			Timestamp: new FormControl<Date | null | undefined>(undefined),
			RequestCount: new FormControl<number | null | undefined>(undefined),
			BorrowCount: new FormControl<number | null | undefined>(undefined),
			SampledCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetSamplingTargetsResult {
		SamplingTargetDocuments?: Array<SamplingTargetDocument>;
		LastRuleModification?: Date;
		UnprocessedStatistics?: Array<UnprocessedStatistics>;
	}
	export interface GetSamplingTargetsResultFormProperties {
		LastRuleModification: FormControl<Date | null | undefined>,
	}
	export function CreateGetSamplingTargetsResultFormGroup() {
		return new FormGroup<GetSamplingTargetsResultFormProperties>({
			LastRuleModification: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>. */
	export interface SamplingTargetDocument {
		RuleName?: string;
		FixedRate?: number | null;
		ReservoirQuota?: number | null;
		ReservoirQuotaTTL?: Date;
		Interval?: number | null;
	}

	/** Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling results of all services that called <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>. */
	export interface SamplingTargetDocumentFormProperties {
		RuleName: FormControl<string | null | undefined>,
		FixedRate: FormControl<number | null | undefined>,
		ReservoirQuota: FormControl<number | null | undefined>,
		ReservoirQuotaTTL: FormControl<Date | null | undefined>,
		Interval: FormControl<number | null | undefined>,
	}
	export function CreateSamplingTargetDocumentFormGroup() {
		return new FormGroup<SamplingTargetDocumentFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined),
			FixedRate: new FormControl<number | null | undefined>(undefined),
			ReservoirQuota: new FormControl<number | null | undefined>(undefined),
			ReservoirQuotaTTL: new FormControl<Date | null | undefined>(undefined),
			Interval: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray could not process. */
	export interface UnprocessedStatistics {
		RuleName?: string;
		ErrorCode?: string;
		Message?: string;
	}

	/** Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray could not process. */
	export interface UnprocessedStatisticsFormProperties {
		RuleName: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedStatisticsFormGroup() {
		return new FormGroup<UnprocessedStatisticsFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>. */
	export interface SamplingStatisticsDocument {

		/** Required */
		RuleName: string;

		/** Required */
		ClientID: string;

		/** Required */
		Timestamp: Date;

		/** Required */
		RequestCount: number;

		/** Required */
		SampledCount: number;
		BorrowCount?: number | null;
	}

	/** Request sampling results for a single rule from a service. Results are for the last 10 seconds unless the service has been assigned a longer reporting interval after a previous call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>. */
	export interface SamplingStatisticsDocumentFormProperties {

		/** Required */
		RuleName: FormControl<string | null | undefined>,

		/** Required */
		ClientID: FormControl<string | null | undefined>,

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,

		/** Required */
		RequestCount: FormControl<number | null | undefined>,

		/** Required */
		SampledCount: FormControl<number | null | undefined>,
		BorrowCount: FormControl<number | null | undefined>,
	}
	export function CreateSamplingStatisticsDocumentFormGroup() {
		return new FormGroup<SamplingStatisticsDocumentFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			RequestCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			SampledCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			BorrowCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetServiceGraphResult {
		StartTime?: Date;
		EndTime?: Date;
		Services?: Array<Service>;
		ContainsOldGroupVersions?: boolean | null;
		NextToken?: string;
	}
	export interface GetServiceGraphResultFormProperties {
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		ContainsOldGroupVersions: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceGraphResultFormGroup() {
		return new FormGroup<GetServiceGraphResultFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			ContainsOldGroupVersions: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used. */
	export interface Service {
		ReferenceId?: number | null;
		Name?: string;
		Names?: Array<string>;
		Root?: boolean | null;
		AccountId?: string;
		Type?: string;
		State?: string;
		StartTime?: Date;
		EndTime?: Date;
		Edges?: Array<Edge>;
		SummaryStatistics?: ServiceStatistics;
		DurationHistogram?: Array<HistogramEntry>;
		ResponseTimeHistogram?: Array<HistogramEntry>;
	}

	/** Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used. */
	export interface ServiceFormProperties {
		ReferenceId: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Root: FormControl<boolean | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		State: FormControl<string | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
	}
	export function CreateServiceFormGroup() {
		return new FormGroup<ServiceFormProperties>({
			ReferenceId: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Root: new FormControl<boolean | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about a connection between two services. An edge can be a synchronous connection, such as typical call between client and service, or an asynchronous link, such as a Lambda function which retrieves an event from an SNS queue. */
	export interface Edge {
		ReferenceId?: number | null;
		StartTime?: Date;
		EndTime?: Date;
		SummaryStatistics?: EdgeStatistics;
		ResponseTimeHistogram?: Array<HistogramEntry>;
		Aliases?: Array<Alias>;
		EdgeType?: string;
		ReceivedEventAgeHistogram?: Array<HistogramEntry>;
	}

	/** Information about a connection between two services. An edge can be a synchronous connection, such as typical call between client and service, or an asynchronous link, such as a Lambda function which retrieves an event from an SNS queue. */
	export interface EdgeFormProperties {
		ReferenceId: FormControl<number | null | undefined>,
		StartTime: FormControl<Date | null | undefined>,
		EndTime: FormControl<Date | null | undefined>,
		EdgeType: FormControl<string | null | undefined>,
	}
	export function CreateEdgeFormGroup() {
		return new FormGroup<EdgeFormProperties>({
			ReferenceId: new FormControl<number | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined),
			EndTime: new FormControl<Date | null | undefined>(undefined),
			EdgeType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response statistics for an edge. */
	export interface EdgeStatistics {
		OkCount?: number | null;
		ErrorStatistics?: ErrorStatistics;
		FaultStatistics?: FaultStatistics;
		TotalCount?: number | null;
		TotalResponseTime?: number | null;
	}

	/** Response statistics for an edge. */
	export interface EdgeStatisticsFormProperties {
		OkCount: FormControl<number | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
		TotalResponseTime: FormControl<number | null | undefined>,
	}
	export function CreateEdgeStatisticsFormGroup() {
		return new FormGroup<EdgeStatisticsFormProperties>({
			OkCount: new FormControl<number | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
			TotalResponseTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about requests that failed with a 4xx Client Error status code. */
	export interface ErrorStatistics {
		ThrottleCount?: number | null;
		OtherCount?: number | null;
		TotalCount?: number | null;
	}

	/** Information about requests that failed with a 4xx Client Error status code. */
	export interface ErrorStatisticsFormProperties {
		ThrottleCount: FormControl<number | null | undefined>,
		OtherCount: FormControl<number | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateErrorStatisticsFormGroup() {
		return new FormGroup<ErrorStatisticsFormProperties>({
			ThrottleCount: new FormControl<number | null | undefined>(undefined),
			OtherCount: new FormControl<number | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about requests that failed with a 5xx Server Error status code. */
	export interface FaultStatistics {
		OtherCount?: number | null;
		TotalCount?: number | null;
	}

	/** Information about requests that failed with a 5xx Server Error status code. */
	export interface FaultStatisticsFormProperties {
		OtherCount: FormControl<number | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
	}
	export function CreateFaultStatisticsFormGroup() {
		return new FormGroup<FaultStatisticsFormProperties>({
			OtherCount: new FormControl<number | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis. */
	export interface HistogramEntry {
		Value?: number | null;
		Count?: number | null;
	}

	/** An entry in a histogram for a statistic. A histogram maps the range of observed values on the X axis, and the prevalence of each value on the Y axis. */
	export interface HistogramEntryFormProperties {
		Value: FormControl<number | null | undefined>,
		Count: FormControl<number | null | undefined>,
	}
	export function CreateHistogramEntryFormGroup() {
		return new FormGroup<HistogramEntryFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined),
			Count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An alias for an edge. */
	export interface Alias {
		Name?: string;
		Names?: Array<string>;
		Type?: string;
	}

	/** An alias for an edge. */
	export interface AliasFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
	}
	export function CreateAliasFormGroup() {
		return new FormGroup<AliasFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response statistics for a service. */
	export interface ServiceStatistics {
		OkCount?: number | null;
		ErrorStatistics?: ErrorStatistics;
		FaultStatistics?: FaultStatistics;
		TotalCount?: number | null;
		TotalResponseTime?: number | null;
	}

	/** Response statistics for a service. */
	export interface ServiceStatisticsFormProperties {
		OkCount: FormControl<number | null | undefined>,
		TotalCount: FormControl<number | null | undefined>,
		TotalResponseTime: FormControl<number | null | undefined>,
	}
	export function CreateServiceStatisticsFormGroup() {
		return new FormGroup<ServiceStatisticsFormProperties>({
			OkCount: new FormControl<number | null | undefined>(undefined),
			TotalCount: new FormControl<number | null | undefined>(undefined),
			TotalResponseTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTimeSeriesServiceStatisticsResult {
		TimeSeriesServiceStatistics?: Array<TimeSeriesServiceStatistics>;
		ContainsOldGroupVersions?: boolean | null;
		NextToken?: string;
	}
	export interface GetTimeSeriesServiceStatisticsResultFormProperties {
		ContainsOldGroupVersions: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTimeSeriesServiceStatisticsResultFormGroup() {
		return new FormGroup<GetTimeSeriesServiceStatisticsResultFormProperties>({
			ContainsOldGroupVersions: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of TimeSeriesStatistic structures. */
	export interface TimeSeriesServiceStatistics {
		Timestamp?: Date;

		/** Response statistics for an edge. */
		EdgeSummaryStatistics?: EdgeStatistics;

		/** Response statistics for a service. */
		ServiceSummaryStatistics?: ServiceStatistics;
		ServiceForecastStatistics?: ForecastStatistics;
		ResponseTimeHistogram?: Array<HistogramEntry>;
	}

	/** A list of TimeSeriesStatistic structures. */
	export interface TimeSeriesServiceStatisticsFormProperties {
		Timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateTimeSeriesServiceStatisticsFormGroup() {
		return new FormGroup<TimeSeriesServiceStatisticsFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created. */
	export interface ForecastStatistics {
		FaultCountHigh?: number | null;
		FaultCountLow?: number | null;
	}

	/** The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created. */
	export interface ForecastStatisticsFormProperties {
		FaultCountHigh: FormControl<number | null | undefined>,
		FaultCountLow: FormControl<number | null | undefined>,
	}
	export function CreateForecastStatisticsFormGroup() {
		return new FormGroup<ForecastStatisticsFormProperties>({
			FaultCountHigh: new FormControl<number | null | undefined>(undefined),
			FaultCountLow: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTraceGraphResult {
		Services?: Array<Service>;
		NextToken?: string;
	}
	export interface GetTraceGraphResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTraceGraphResultFormGroup() {
		return new FormGroup<GetTraceGraphResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTraceSummariesResult {
		TraceSummaries?: Array<TraceSummary>;
		ApproximateTime?: Date;
		TracesProcessedCount?: number | null;
		NextToken?: string;
	}
	export interface GetTraceSummariesResultFormProperties {
		ApproximateTime: FormControl<Date | null | undefined>,
		TracesProcessedCount: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTraceSummariesResultFormGroup() {
		return new FormGroup<GetTraceSummariesResultFormProperties>({
			ApproximateTime: new FormControl<Date | null | undefined>(undefined),
			TracesProcessedCount: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata generated from the segment documents in a trace. */
	export interface TraceSummary {
		Id?: string;
		Duration?: number | null;
		ResponseTime?: number | null;
		HasFault?: boolean | null;
		HasError?: boolean | null;
		HasThrottle?: boolean | null;
		IsPartial?: boolean | null;
		Http?: Http;
		Annotations?: Annotations;
		Users?: Array<TraceUser>;
		ServiceIds?: Array<ServiceId>;
		ResourceARNs?: Array<ResourceARNDetail>;
		InstanceIds?: Array<InstanceIdDetail>;
		AvailabilityZones?: Array<AvailabilityZoneDetail>;
		EntryPoint?: ServiceId;
		FaultRootCauses?: Array<FaultRootCause>;
		ErrorRootCauses?: Array<ErrorRootCause>;
		ResponseTimeRootCauses?: Array<ResponseTimeRootCause>;
		Revision?: number | null;
		MatchedEventTime?: Date;
	}

	/** Metadata generated from the segment documents in a trace. */
	export interface TraceSummaryFormProperties {
		Id: FormControl<string | null | undefined>,
		Duration: FormControl<number | null | undefined>,
		ResponseTime: FormControl<number | null | undefined>,
		HasFault: FormControl<boolean | null | undefined>,
		HasError: FormControl<boolean | null | undefined>,
		HasThrottle: FormControl<boolean | null | undefined>,
		IsPartial: FormControl<boolean | null | undefined>,
		Revision: FormControl<number | null | undefined>,
		MatchedEventTime: FormControl<Date | null | undefined>,
	}
	export function CreateTraceSummaryFormGroup() {
		return new FormGroup<TraceSummaryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			Duration: new FormControl<number | null | undefined>(undefined),
			ResponseTime: new FormControl<number | null | undefined>(undefined),
			HasFault: new FormControl<boolean | null | undefined>(undefined),
			HasError: new FormControl<boolean | null | undefined>(undefined),
			HasThrottle: new FormControl<boolean | null | undefined>(undefined),
			IsPartial: new FormControl<boolean | null | undefined>(undefined),
			Revision: new FormControl<number | null | undefined>(undefined),
			MatchedEventTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Information about an HTTP request. */
	export interface Http {
		HttpURL?: string;
		HttpStatus?: number | null;
		HttpMethod?: string;
		UserAgent?: string;
		ClientIp?: string;
	}

	/** Information about an HTTP request. */
	export interface HttpFormProperties {
		HttpURL: FormControl<string | null | undefined>,
		HttpStatus: FormControl<number | null | undefined>,
		HttpMethod: FormControl<string | null | undefined>,
		UserAgent: FormControl<string | null | undefined>,
		ClientIp: FormControl<string | null | undefined>,
	}
	export function CreateHttpFormGroup() {
		return new FormGroup<HttpFormProperties>({
			HttpURL: new FormControl<string | null | undefined>(undefined),
			HttpStatus: new FormControl<number | null | undefined>(undefined),
			HttpMethod: new FormControl<string | null | undefined>(undefined),
			UserAgent: new FormControl<string | null | undefined>(undefined),
			ClientIp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Annotations {
	}
	export interface AnnotationsFormProperties {
	}
	export function CreateAnnotationsFormGroup() {
		return new FormGroup<AnnotationsFormProperties>({
		});

	}


	/** Information about a user recorded in segment documents. */
	export interface TraceUser {
		UserName?: string;
		ServiceIds?: Array<ServiceId>;
	}

	/** Information about a user recorded in segment documents. */
	export interface TraceUserFormProperties {
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateTraceUserFormGroup() {
		return new FormGroup<TraceUserFormProperties>({
			UserName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of resources ARNs corresponding to the segments in a trace. */
	export interface ResourceARNDetail {
		ARN?: string;
	}

	/** A list of resources ARNs corresponding to the segments in a trace. */
	export interface ResourceARNDetailFormProperties {
		ARN: FormControl<string | null | undefined>,
	}
	export function CreateResourceARNDetailFormGroup() {
		return new FormGroup<ResourceARNDetailFormProperties>({
			ARN: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of EC2 instance IDs corresponding to the segments in a trace.  */
	export interface InstanceIdDetail {
		Id?: string;
	}

	/** A list of EC2 instance IDs corresponding to the segments in a trace.  */
	export interface InstanceIdDetailFormProperties {
		Id: FormControl<string | null | undefined>,
	}
	export function CreateInstanceIdDetailFormGroup() {
		return new FormGroup<InstanceIdDetailFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of Availability Zones corresponding to the segments in a trace. */
	export interface AvailabilityZoneDetail {
		Name?: string;
	}

	/** A list of Availability Zones corresponding to the segments in a trace. */
	export interface AvailabilityZoneDetailFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateAvailabilityZoneDetailFormGroup() {
		return new FormGroup<AvailabilityZoneDetailFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The root cause information for a trace summary fault. */
	export interface FaultRootCause {
		Services?: Array<FaultRootCauseService>;
		ClientImpacting?: boolean | null;
	}

	/** The root cause information for a trace summary fault. */
	export interface FaultRootCauseFormProperties {
		ClientImpacting: FormControl<boolean | null | undefined>,
	}
	export function CreateFaultRootCauseFormGroup() {
		return new FormGroup<FaultRootCauseFormProperties>({
			ClientImpacting: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A collection of fields identifying the services in a trace summary fault. */
	export interface FaultRootCauseService {
		Name?: string;
		Names?: Array<string>;
		Type?: string;
		AccountId?: string;
		EntityPath?: Array<FaultRootCauseEntity>;
		Inferred?: boolean | null;
	}

	/** A collection of fields identifying the services in a trace summary fault. */
	export interface FaultRootCauseServiceFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		Inferred: FormControl<boolean | null | undefined>,
	}
	export function CreateFaultRootCauseServiceFormGroup() {
		return new FormGroup<FaultRootCauseServiceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			Inferred: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A collection of segments and corresponding subsegments associated to a trace summary fault error. */
	export interface FaultRootCauseEntity {
		Name?: string;
		Exceptions?: Array<RootCauseException>;
		Remote?: boolean | null;
	}

	/** A collection of segments and corresponding subsegments associated to a trace summary fault error. */
	export interface FaultRootCauseEntityFormProperties {
		Name: FormControl<string | null | undefined>,
		Remote: FormControl<boolean | null | undefined>,
	}
	export function CreateFaultRootCauseEntityFormGroup() {
		return new FormGroup<FaultRootCauseEntityFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Remote: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The exception associated with a root cause. */
	export interface RootCauseException {
		Name?: string;
		Message?: string;
	}

	/** The exception associated with a root cause. */
	export interface RootCauseExceptionFormProperties {
		Name: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateRootCauseExceptionFormGroup() {
		return new FormGroup<RootCauseExceptionFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The root cause of a trace summary error. */
	export interface ErrorRootCause {
		Services?: Array<ErrorRootCauseService>;
		ClientImpacting?: boolean | null;
	}

	/** The root cause of a trace summary error. */
	export interface ErrorRootCauseFormProperties {
		ClientImpacting: FormControl<boolean | null | undefined>,
	}
	export function CreateErrorRootCauseFormGroup() {
		return new FormGroup<ErrorRootCauseFormProperties>({
			ClientImpacting: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A collection of fields identifying the services in a trace summary error. */
	export interface ErrorRootCauseService {
		Name?: string;
		Names?: Array<string>;
		Type?: string;
		AccountId?: string;
		EntityPath?: Array<ErrorRootCauseEntity>;
		Inferred?: boolean | null;
	}

	/** A collection of fields identifying the services in a trace summary error. */
	export interface ErrorRootCauseServiceFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		Inferred: FormControl<boolean | null | undefined>,
	}
	export function CreateErrorRootCauseServiceFormGroup() {
		return new FormGroup<ErrorRootCauseServiceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			Inferred: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A collection of segments and corresponding subsegments associated to a trace summary error. */
	export interface ErrorRootCauseEntity {
		Name?: string;
		Exceptions?: Array<RootCauseException>;
		Remote?: boolean | null;
	}

	/** A collection of segments and corresponding subsegments associated to a trace summary error. */
	export interface ErrorRootCauseEntityFormProperties {
		Name: FormControl<string | null | undefined>,
		Remote: FormControl<boolean | null | undefined>,
	}
	export function CreateErrorRootCauseEntityFormGroup() {
		return new FormGroup<ErrorRootCauseEntityFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Remote: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The root cause information for a response time warning. */
	export interface ResponseTimeRootCause {
		Services?: Array<ResponseTimeRootCauseService>;
		ClientImpacting?: boolean | null;
	}

	/** The root cause information for a response time warning. */
	export interface ResponseTimeRootCauseFormProperties {
		ClientImpacting: FormControl<boolean | null | undefined>,
	}
	export function CreateResponseTimeRootCauseFormGroup() {
		return new FormGroup<ResponseTimeRootCauseFormProperties>({
			ClientImpacting: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A collection of fields identifying the service in a response time warning. */
	export interface ResponseTimeRootCauseService {
		Name?: string;
		Names?: Array<string>;
		Type?: string;
		AccountId?: string;
		EntityPath?: Array<ResponseTimeRootCauseEntity>;
		Inferred?: boolean | null;
	}

	/** A collection of fields identifying the service in a response time warning. */
	export interface ResponseTimeRootCauseServiceFormProperties {
		Name: FormControl<string | null | undefined>,
		Type: FormControl<string | null | undefined>,
		AccountId: FormControl<string | null | undefined>,
		Inferred: FormControl<boolean | null | undefined>,
	}
	export function CreateResponseTimeRootCauseServiceFormGroup() {
		return new FormGroup<ResponseTimeRootCauseServiceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<string | null | undefined>(undefined),
			AccountId: new FormControl<string | null | undefined>(undefined),
			Inferred: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A collection of segments and corresponding subsegments associated to a response time warning. */
	export interface ResponseTimeRootCauseEntity {
		Name?: string;
		Coverage?: number | null;
		Remote?: boolean | null;
	}

	/** A collection of segments and corresponding subsegments associated to a response time warning. */
	export interface ResponseTimeRootCauseEntityFormProperties {
		Name: FormControl<string | null | undefined>,
		Coverage: FormControl<number | null | undefined>,
		Remote: FormControl<boolean | null | undefined>,
	}
	export function CreateResponseTimeRootCauseEntityFormGroup() {
		return new FormGroup<ResponseTimeRootCauseEntityFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Coverage: new FormControl<number | null | undefined>(undefined),
			Remote: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SamplingStrategyName { PartialScan = 0, FixedRate = 1 }

	export interface ListResourcePoliciesResult {
		ResourcePolicies?: Array<ResourcePolicy>;
		NextToken?: string;
	}
	export interface ListResourcePoliciesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcePoliciesResultFormGroup() {
		return new FormGroup<ListResourcePoliciesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource policy grants one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy is associated with a specific Amazon Web Services account. */
	export interface ResourcePolicy {
		PolicyName?: string;
		PolicyDocument?: string;
		PolicyRevisionId?: string;
		LastUpdatedTime?: Date;
	}

	/** A resource policy grants one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy is associated with a specific Amazon Web Services account. */
	export interface ResourcePolicyFormProperties {
		PolicyName: FormControl<string | null | undefined>,
		PolicyDocument: FormControl<string | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateResourcePolicyFormGroup() {
		return new FormGroup<ResourcePolicyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined),
			PolicyDocument: new FormControl<string | null | undefined>(undefined),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag>;
		NextToken?: string;
	}
	export interface ListTagsForResourceResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
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

	export interface PutEncryptionConfigResult {
		EncryptionConfig?: EncryptionConfig;
	}
	export interface PutEncryptionConfigResultFormProperties {
	}
	export function CreatePutEncryptionConfigResultFormGroup() {
		return new FormGroup<PutEncryptionConfigResultFormProperties>({
		});

	}

	export interface PutResourcePolicyResult {
		ResourcePolicy?: ResourcePolicy;
	}
	export interface PutResourcePolicyResultFormProperties {
	}
	export function CreatePutResourcePolicyResultFormGroup() {
		return new FormGroup<PutResourcePolicyResultFormProperties>({
		});

	}

	export interface MalformedPolicyDocumentException {
	}
	export interface MalformedPolicyDocumentExceptionFormProperties {
	}
	export function CreateMalformedPolicyDocumentExceptionFormGroup() {
		return new FormGroup<MalformedPolicyDocumentExceptionFormProperties>({
		});

	}

	export interface LockoutPreventionException {
	}
	export interface LockoutPreventionExceptionFormProperties {
	}
	export function CreateLockoutPreventionExceptionFormGroup() {
		return new FormGroup<LockoutPreventionExceptionFormProperties>({
		});

	}

	export interface PolicySizeLimitExceededException {
	}
	export interface PolicySizeLimitExceededExceptionFormProperties {
	}
	export function CreatePolicySizeLimitExceededExceptionFormGroup() {
		return new FormGroup<PolicySizeLimitExceededExceptionFormProperties>({
		});

	}

	export interface PolicyCountLimitExceededException {
	}
	export interface PolicyCountLimitExceededExceptionFormProperties {
	}
	export function CreatePolicyCountLimitExceededExceptionFormGroup() {
		return new FormGroup<PolicyCountLimitExceededExceptionFormProperties>({
		});

	}

	export interface PutTelemetryRecordsResult {
	}
	export interface PutTelemetryRecordsResultFormProperties {
	}
	export function CreatePutTelemetryRecordsResultFormGroup() {
		return new FormGroup<PutTelemetryRecordsResultFormProperties>({
		});

	}


	/** <p/> */
	export interface TelemetryRecord {

		/** Required */
		Timestamp: Date;
		SegmentsReceivedCount?: number | null;
		SegmentsSentCount?: number | null;
		SegmentsSpilloverCount?: number | null;
		SegmentsRejectedCount?: number | null;
		BackendConnectionErrors?: BackendConnectionErrors;
	}

	/** <p/> */
	export interface TelemetryRecordFormProperties {

		/** Required */
		Timestamp: FormControl<Date | null | undefined>,
		SegmentsReceivedCount: FormControl<number | null | undefined>,
		SegmentsSentCount: FormControl<number | null | undefined>,
		SegmentsSpilloverCount: FormControl<number | null | undefined>,
		SegmentsRejectedCount: FormControl<number | null | undefined>,
	}
	export function CreateTelemetryRecordFormGroup() {
		return new FormGroup<TelemetryRecordFormProperties>({
			Timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			SegmentsReceivedCount: new FormControl<number | null | undefined>(undefined),
			SegmentsSentCount: new FormControl<number | null | undefined>(undefined),
			SegmentsSpilloverCount: new FormControl<number | null | undefined>(undefined),
			SegmentsRejectedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p/> */
	export interface BackendConnectionErrors {
		TimeoutCount?: number | null;
		ConnectionRefusedCount?: number | null;
		HTTPCode4XXCount?: number | null;
		HTTPCode5XXCount?: number | null;
		UnknownHostCount?: number | null;
		OtherCount?: number | null;
	}

	/** <p/> */
	export interface BackendConnectionErrorsFormProperties {
		TimeoutCount: FormControl<number | null | undefined>,
		ConnectionRefusedCount: FormControl<number | null | undefined>,
		HTTPCode4XXCount: FormControl<number | null | undefined>,
		HTTPCode5XXCount: FormControl<number | null | undefined>,
		UnknownHostCount: FormControl<number | null | undefined>,
		OtherCount: FormControl<number | null | undefined>,
	}
	export function CreateBackendConnectionErrorsFormGroup() {
		return new FormGroup<BackendConnectionErrorsFormProperties>({
			TimeoutCount: new FormControl<number | null | undefined>(undefined),
			ConnectionRefusedCount: new FormControl<number | null | undefined>(undefined),
			HTTPCode4XXCount: new FormControl<number | null | undefined>(undefined),
			HTTPCode5XXCount: new FormControl<number | null | undefined>(undefined),
			UnknownHostCount: new FormControl<number | null | undefined>(undefined),
			OtherCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PutTraceSegmentsResult {
		UnprocessedTraceSegments?: Array<UnprocessedTraceSegment>;
	}
	export interface PutTraceSegmentsResultFormProperties {
	}
	export function CreatePutTraceSegmentsResultFormGroup() {
		return new FormGroup<PutTraceSegmentsResultFormProperties>({
		});

	}


	/** Information about a segment that failed processing. */
	export interface UnprocessedTraceSegment {
		Id?: string;
		ErrorCode?: string;
		Message?: string;
	}

	/** Information about a segment that failed processing. */
	export interface UnprocessedTraceSegmentFormProperties {
		Id: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateUnprocessedTraceSegmentFormGroup() {
		return new FormGroup<UnprocessedTraceSegmentFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
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

	export interface TooManyTagsException {
	}
	export interface TooManyTagsExceptionFormProperties {
	}
	export function CreateTooManyTagsExceptionFormGroup() {
		return new FormGroup<TooManyTagsExceptionFormProperties>({
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

	export interface UpdateGroupResult {
		Group?: Group;
	}
	export interface UpdateGroupResultFormProperties {
	}
	export function CreateUpdateGroupResultFormGroup() {
		return new FormGroup<UpdateGroupResultFormProperties>({
		});

	}

	export interface UpdateSamplingRuleResult {
		SamplingRuleRecord?: SamplingRuleRecord;
	}
	export interface UpdateSamplingRuleResultFormProperties {
	}
	export function CreateUpdateSamplingRuleResultFormGroup() {
		return new FormGroup<UpdateSamplingRuleResultFormProperties>({
		});

	}


	/** Value of a segment annotation. Has one of three value types: Number, Boolean, or String. */
	export interface AnnotationValue {
		NumberValue?: number | null;
		BooleanValue?: boolean | null;
		StringValue?: string;
	}

	/** Value of a segment annotation. Has one of three value types: Number, Boolean, or String. */
	export interface AnnotationValueFormProperties {
		NumberValue: FormControl<number | null | undefined>,
		BooleanValue: FormControl<boolean | null | undefined>,
		StringValue: FormControl<string | null | undefined>,
	}
	export function CreateAnnotationValueFormGroup() {
		return new FormGroup<AnnotationValueFormProperties>({
			NumberValue: new FormControl<number | null | undefined>(undefined),
			BooleanValue: new FormControl<boolean | null | undefined>(undefined),
			StringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a segment annotation. */
	export interface ValueWithServiceIds {
		AnnotationValue?: AnnotationValue;
		ServiceIds?: Array<ServiceId>;
	}

	/** Information about a segment annotation. */
	export interface ValueWithServiceIdsFormProperties {
	}
	export function CreateValueWithServiceIdsFormGroup() {
		return new FormGroup<ValueWithServiceIdsFormProperties>({
		});

	}

	export interface BatchGetTracesRequest {

		/** Required */
		TraceIds: Array<string>;
		NextToken?: string;
	}
	export interface BatchGetTracesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetTracesRequestFormGroup() {
		return new FormGroup<BatchGetTracesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupRequest {

		/** Required */
		GroupName: string;
		FilterExpression?: string;
		InsightsConfiguration?: InsightsConfiguration;
		Tags?: Array<Tag>;
	}
	export interface CreateGroupRequestFormProperties {

		/** Required */
		GroupName: FormControl<string | null | undefined>,
		FilterExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSamplingRuleRequest {

		/** Required */
		SamplingRule: SamplingRule;
		Tags?: Array<Tag>;
	}
	export interface CreateSamplingRuleRequestFormProperties {
	}
	export function CreateCreateSamplingRuleRequestFormGroup() {
		return new FormGroup<CreateSamplingRuleRequestFormProperties>({
		});

	}

	export interface DeleteGroupRequest {
		GroupName?: string;
		GroupARN?: string;
	}
	export interface DeleteGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteResourcePolicyRequest {

		/** Required */
		PolicyName: string;
		PolicyRevisionId?: string;
	}
	export interface DeleteResourcePolicyRequestFormProperties {

		/** Required */
		PolicyName: FormControl<string | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyRequestFormGroup() {
		return new FormGroup<DeleteResourcePolicyRequestFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSamplingRuleRequest {
		RuleName?: string;
		RuleARN?: string;
	}
	export interface DeleteSamplingRuleRequestFormProperties {
		RuleName: FormControl<string | null | undefined>,
		RuleARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSamplingRuleRequestFormGroup() {
		return new FormGroup<DeleteSamplingRuleRequestFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined),
			RuleARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEncryptionConfigRequest {
	}
	export interface GetEncryptionConfigRequestFormProperties {
	}
	export function CreateGetEncryptionConfigRequestFormGroup() {
		return new FormGroup<GetEncryptionConfigRequestFormProperties>({
		});

	}

	export interface GetGroupRequest {
		GroupName?: string;
		GroupARN?: string;
	}
	export interface GetGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupARN: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupRequestFormGroup() {
		return new FormGroup<GetGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupsRequest {
		NextToken?: string;
	}
	export interface GetGroupsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupsRequestFormGroup() {
		return new FormGroup<GetGroupsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInsightEventsRequest {

		/** Required */
		InsightId: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetInsightEventsRequestFormProperties {

		/** Required */
		InsightId: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightEventsRequestFormGroup() {
		return new FormGroup<GetInsightEventsRequestFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInsightImpactGraphRequest {

		/** Required */
		InsightId: string;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		NextToken?: string;
	}
	export interface GetInsightImpactGraphRequestFormProperties {

		/** Required */
		InsightId: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightImpactGraphRequestFormGroup() {
		return new FormGroup<GetInsightImpactGraphRequestFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetInsightRequest {

		/** Required */
		InsightId: string;
	}
	export interface GetInsightRequestFormProperties {

		/** Required */
		InsightId: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightRequestFormGroup() {
		return new FormGroup<GetInsightRequestFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetInsightSummariesRequest {
		States?: Array<InsightState>;
		GroupARN?: string;
		GroupName?: string;

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetInsightSummariesRequestFormProperties {
		GroupARN: FormControl<string | null | undefined>,
		GroupName: FormControl<string | null | undefined>,

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightSummariesRequestFormGroup() {
		return new FormGroup<GetInsightSummariesRequestFormProperties>({
			GroupARN: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSamplingRulesRequest {
		NextToken?: string;
	}
	export interface GetSamplingRulesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSamplingRulesRequestFormGroup() {
		return new FormGroup<GetSamplingRulesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSamplingStatisticSummariesRequest {
		NextToken?: string;
	}
	export interface GetSamplingStatisticSummariesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSamplingStatisticSummariesRequestFormGroup() {
		return new FormGroup<GetSamplingStatisticSummariesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSamplingTargetsRequest {

		/** Required */
		SamplingStatisticsDocuments: Array<SamplingStatisticsDocument>;
	}
	export interface GetSamplingTargetsRequestFormProperties {
	}
	export function CreateGetSamplingTargetsRequestFormGroup() {
		return new FormGroup<GetSamplingTargetsRequestFormProperties>({
		});

	}

	export interface GetServiceGraphRequest {

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		GroupName?: string;
		GroupARN?: string;
		NextToken?: string;
	}
	export interface GetServiceGraphRequestFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		GroupARN: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceGraphRequestFormGroup() {
		return new FormGroup<GetServiceGraphRequestFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupARN: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTimeSeriesServiceStatisticsRequest {

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		GroupName?: string;
		GroupARN?: string;
		EntitySelectorExpression?: string;
		Period?: number | null;
		ForecastStatistics?: boolean | null;
		NextToken?: string;
	}
	export interface GetTimeSeriesServiceStatisticsRequestFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		GroupName: FormControl<string | null | undefined>,
		GroupARN: FormControl<string | null | undefined>,
		EntitySelectorExpression: FormControl<string | null | undefined>,
		Period: FormControl<number | null | undefined>,
		ForecastStatistics: FormControl<boolean | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTimeSeriesServiceStatisticsRequestFormGroup() {
		return new FormGroup<GetTimeSeriesServiceStatisticsRequestFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupARN: new FormControl<string | null | undefined>(undefined),
			EntitySelectorExpression: new FormControl<string | null | undefined>(undefined),
			Period: new FormControl<number | null | undefined>(undefined),
			ForecastStatistics: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTraceGraphRequest {

		/** Required */
		TraceIds: Array<string>;
		NextToken?: string;
	}
	export interface GetTraceGraphRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTraceGraphRequestFormGroup() {
		return new FormGroup<GetTraceGraphRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TimeRangeType { TraceId = 0, Event = 1 }


	/** The name and value of a sampling rule to apply to a trace summary. */
	export interface SamplingStrategy {
		Name?: SamplingStrategyName;
		Value?: number | null;
	}

	/** The name and value of a sampling rule to apply to a trace summary. */
	export interface SamplingStrategyFormProperties {
		Name: FormControl<SamplingStrategyName | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateSamplingStrategyFormGroup() {
		return new FormGroup<SamplingStrategyFormProperties>({
			Name: new FormControl<SamplingStrategyName | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTraceSummariesRequest {

		/** Required */
		StartTime: Date;

		/** Required */
		EndTime: Date;
		TimeRangeType?: TimeRangeType;
		Sampling?: boolean | null;
		SamplingStrategy?: SamplingStrategy;
		FilterExpression?: string;
		NextToken?: string;
	}
	export interface GetTraceSummariesRequestFormProperties {

		/** Required */
		StartTime: FormControl<Date | null | undefined>,

		/** Required */
		EndTime: FormControl<Date | null | undefined>,
		TimeRangeType: FormControl<TimeRangeType | null | undefined>,
		Sampling: FormControl<boolean | null | undefined>,
		FilterExpression: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTraceSummariesRequestFormGroup() {
		return new FormGroup<GetTraceSummariesRequestFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TimeRangeType: new FormControl<TimeRangeType | null | undefined>(undefined),
			Sampling: new FormControl<boolean | null | undefined>(undefined),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcePoliciesRequest {
		NextToken?: string;
	}
	export interface ListResourcePoliciesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcePoliciesRequestFormGroup() {
		return new FormGroup<ListResourcePoliciesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
		NextToken?: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEncryptionConfigRequest {
		KeyId?: string;

		/** Required */
		Type: EncryptionType;
	}
	export interface PutEncryptionConfigRequestFormProperties {
		KeyId: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<EncryptionType | null | undefined>,
	}
	export function CreatePutEncryptionConfigRequestFormGroup() {
		return new FormGroup<PutEncryptionConfigRequestFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined),
			Type: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutResourcePolicyRequest {

		/** Required */
		PolicyName: string;

		/** Required */
		PolicyDocument: string;
		PolicyRevisionId?: string;
		BypassPolicyLockoutCheck?: boolean | null;
	}
	export interface PutResourcePolicyRequestFormProperties {

		/** Required */
		PolicyName: FormControl<string | null | undefined>,

		/** Required */
		PolicyDocument: FormControl<string | null | undefined>,
		PolicyRevisionId: FormControl<string | null | undefined>,
		BypassPolicyLockoutCheck: FormControl<boolean | null | undefined>,
	}
	export function CreatePutResourcePolicyRequestFormGroup() {
		return new FormGroup<PutResourcePolicyRequestFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
			BypassPolicyLockoutCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutTelemetryRecordsRequest {

		/** Required */
		TelemetryRecords: Array<TelemetryRecord>;
		EC2InstanceId?: string;
		Hostname?: string;
		ResourceARN?: string;
	}
	export interface PutTelemetryRecordsRequestFormProperties {
		EC2InstanceId: FormControl<string | null | undefined>,
		Hostname: FormControl<string | null | undefined>,
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreatePutTelemetryRecordsRequestFormGroup() {
		return new FormGroup<PutTelemetryRecordsRequestFormProperties>({
			EC2InstanceId: new FormControl<string | null | undefined>(undefined),
			Hostname: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutTraceSegmentsRequest {

		/** Required */
		TraceSegmentDocuments: Array<string>;
	}
	export interface PutTraceSegmentsRequestFormProperties {
	}
	export function CreatePutTraceSegmentsRequestFormGroup() {
		return new FormGroup<PutTraceSegmentsRequestFormProperties>({
		});

	}


	/** A document specifying changes to a sampling rule's configuration. */
	export interface SamplingRuleUpdate {
		RuleName?: string;
		RuleARN?: string;
		ResourceARN?: string;
		Priority?: number | null;
		FixedRate?: number | null;
		ReservoirSize?: number | null;
		Host?: string;
		ServiceName?: string;
		ServiceType?: string;
		HTTPMethod?: string;
		URLPath?: string;
		Attributes?: AttributeMap;
	}

	/** A document specifying changes to a sampling rule's configuration. */
	export interface SamplingRuleUpdateFormProperties {
		RuleName: FormControl<string | null | undefined>,
		RuleARN: FormControl<string | null | undefined>,
		ResourceARN: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		FixedRate: FormControl<number | null | undefined>,
		ReservoirSize: FormControl<number | null | undefined>,
		Host: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		ServiceType: FormControl<string | null | undefined>,
		HTTPMethod: FormControl<string | null | undefined>,
		URLPath: FormControl<string | null | undefined>,
	}
	export function CreateSamplingRuleUpdateFormGroup() {
		return new FormGroup<SamplingRuleUpdateFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined),
			RuleARN: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			FixedRate: new FormControl<number | null | undefined>(undefined),
			ReservoirSize: new FormControl<number | null | undefined>(undefined),
			Host: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			ServiceType: new FormControl<string | null | undefined>(undefined),
			HTTPMethod: new FormControl<string | null | undefined>(undefined),
			URLPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UntagResourceRequest {

		/** Required */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateGroupRequest {
		GroupName?: string;
		GroupARN?: string;
		FilterExpression?: string;
		InsightsConfiguration?: InsightsConfiguration;
	}
	export interface UpdateGroupRequestFormProperties {
		GroupName: FormControl<string | null | undefined>,
		GroupARN: FormControl<string | null | undefined>,
		FilterExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupRequestFormGroup() {
		return new FormGroup<UpdateGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined),
			GroupARN: new FormControl<string | null | undefined>(undefined),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateSamplingRuleRequest {

		/** Required */
		SamplingRuleUpdate: SamplingRuleUpdate;
	}
	export interface UpdateSamplingRuleRequestFormProperties {
	}
	export function CreateUpdateSamplingRuleRequestFormGroup() {
		return new FormGroup<UpdateSamplingRuleRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves a list of traces specified by ID. Each trace is a collection of segment documents that originates from a single request. Use <code>GetTraceSummaries</code> to get a list of trace IDs.
		 * Post Traces
		 * @param {string} NextToken Pagination token
		 * @return {BatchGetTracesResult} Success
		 */
		BatchGetTraces(NextToken: string | null | undefined, requestBody: BatchGetTracesPostBody): Observable<BatchGetTracesResult> {
			return this.http.post<BatchGetTracesResult>(this.baseUri + 'Traces?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a group resource with a name and a filter expression.
		 * Post CreateGroup
		 * @return {CreateGroupResult} Success
		 */
		CreateGroup(requestBody: CreateGroupPostBody): Observable<CreateGroupResult> {
			return this.http.post<CreateGroupResult>(this.baseUri + 'CreateGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a rule to control sampling behavior for instrumented applications. Services retrieve rules with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a>, and evaluate each rule in ascending order of <i>priority</i> for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
		 * Post CreateSamplingRule
		 * @return {CreateSamplingRuleResult} Success
		 */
		CreateSamplingRule(requestBody: CreateSamplingRulePostBody): Observable<CreateSamplingRuleResult> {
			return this.http.post<CreateSamplingRuleResult>(this.baseUri + 'CreateSamplingRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a group resource.
		 * Post DeleteGroup
		 * @return {DeleteGroupResult} Success
		 */
		DeleteGroup(requestBody: DeleteGroupPostBody): Observable<DeleteGroupResult> {
			return this.http.post<DeleteGroupResult>(this.baseUri + 'DeleteGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a resource policy from the target Amazon Web Services account.
		 * Post DeleteResourcePolicy
		 * @return {DeleteResourcePolicyResult} Success
		 */
		DeleteResourcePolicy(requestBody: DeleteResourcePolicyPostBody): Observable<DeleteResourcePolicyResult> {
			return this.http.post<DeleteResourcePolicyResult>(this.baseUri + 'DeleteResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a sampling rule.
		 * Post DeleteSamplingRule
		 * @return {DeleteSamplingRuleResult} Success
		 */
		DeleteSamplingRule(requestBody: DeleteSamplingRulePostBody): Observable<DeleteSamplingRuleResult> {
			return this.http.post<DeleteSamplingRuleResult>(this.baseUri + 'DeleteSamplingRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current encryption configuration for X-Ray data.
		 * Post EncryptionConfig
		 * @return {GetEncryptionConfigResult} Success
		 */
		GetEncryptionConfig(): Observable<GetEncryptionConfigResult> {
			return this.http.post<GetEncryptionConfigResult>(this.baseUri + 'EncryptionConfig', null, {});
		}

		/**
		 * Retrieves group resource details.
		 * Post GetGroup
		 * @return {GetGroupResult} Success
		 */
		GetGroup(requestBody: GetGroupPostBody): Observable<GetGroupResult> {
			return this.http.post<GetGroupResult>(this.baseUri + 'GetGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all active group details.
		 * Post Groups
		 * @param {string} NextToken Pagination token
		 * @return {GetGroupsResult} Success
		 */
		GetGroups(NextToken: string | null | undefined, requestBody: GetGroupsPostBody): Observable<GetGroupsResult> {
			return this.http.post<GetGroupsResult>(this.baseUri + 'Groups?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the summary information of an insight. This includes impact to clients and root cause services, the top anomalous services, the category, the state of the insight, and the start and end time of the insight.
		 * Post Insight
		 * @return {GetInsightResult} Success
		 */
		GetInsight(requestBody: GetInsightPostBody): Observable<GetInsightResult> {
			return this.http.post<GetInsightResult>(this.baseUri + 'Insight', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * X-Ray reevaluates insights periodically until they're resolved, and records each intermediate state as an event. You can review an insight's events in the Impact Timeline on the Inspect page in the X-Ray console.
		 * Post InsightEvents
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetInsightEventsResult} Success
		 */
		GetInsightEvents(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetInsightEventsPostBody): Observable<GetInsightEventsResult> {
			return this.http.post<GetInsightEventsResult>(this.baseUri + 'InsightEvents?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a service graph structure filtered by the specified insight. The service graph is limited to only structural information. For a complete service graph, use this API with the GetServiceGraph API.
		 * Post InsightImpactGraph
		 * @return {GetInsightImpactGraphResult} Success
		 */
		GetInsightImpactGraph(requestBody: GetInsightImpactGraphPostBody): Observable<GetInsightImpactGraphResult> {
			return this.http.post<GetInsightImpactGraphResult>(this.baseUri + 'InsightImpactGraph', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the summaries of all insights in the specified group matching the provided filter values.
		 * Post InsightSummaries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetInsightSummariesResult} Success
		 */
		GetInsightSummaries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetInsightSummariesPostBody): Observable<GetInsightSummariesResult> {
			return this.http.post<GetInsightSummariesResult>(this.baseUri + 'InsightSummaries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves all sampling rules.
		 * Post GetSamplingRules
		 * @param {string} NextToken Pagination token
		 * @return {GetSamplingRulesResult} Success
		 */
		GetSamplingRules(NextToken: string | null | undefined, requestBody: GetSamplingRulesPostBody): Observable<GetSamplingRulesResult> {
			return this.http.post<GetSamplingRulesResult>(this.baseUri + 'GetSamplingRules?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves information about recent sampling results for all sampling rules.
		 * Post SamplingStatisticSummaries
		 * @param {string} NextToken Pagination token
		 * @return {GetSamplingStatisticSummariesResult} Success
		 */
		GetSamplingStatisticSummaries(NextToken: string | null | undefined, requestBody: GetSamplingStatisticSummariesPostBody): Observable<GetSamplingStatisticSummariesResult> {
			return this.http.post<GetSamplingStatisticSummariesResult>(this.baseUri + 'SamplingStatisticSummaries?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Requests a sampling quota for rules that the service is using to sample requests.
		 * Post SamplingTargets
		 * @return {GetSamplingTargetsResult} Success
		 */
		GetSamplingTargets(requestBody: GetSamplingTargetsPostBody): Observable<GetSamplingTargetsResult> {
			return this.http.post<GetSamplingTargetsResult>(this.baseUri + 'SamplingTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a document that describes services that process incoming requests, and downstream services that they call as a result. Root services process incoming requests and make calls to downstream services. Root services are applications that use the <a href="https://docs.aws.amazon.com/xray/index.html">Amazon Web Services X-Ray SDK</a>. Downstream services can be other applications, Amazon Web Services resources, HTTP web APIs, or SQL databases.
		 * Post ServiceGraph
		 * @param {string} NextToken Pagination token
		 * @return {GetServiceGraphResult} Success
		 */
		GetServiceGraph(NextToken: string | null | undefined, requestBody: GetServiceGraphPostBody): Observable<GetServiceGraphResult> {
			return this.http.post<GetServiceGraphResult>(this.baseUri + 'ServiceGraph?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get an aggregation of service statistics defined by a specific time range.
		 * Post TimeSeriesServiceStatistics
		 * @param {string} NextToken Pagination token
		 * @return {GetTimeSeriesServiceStatisticsResult} Success
		 */
		GetTimeSeriesServiceStatistics(NextToken: string | null | undefined, requestBody: GetTimeSeriesServiceStatisticsPostBody): Observable<GetTimeSeriesServiceStatisticsResult> {
			return this.http.post<GetTimeSeriesServiceStatisticsResult>(this.baseUri + 'TimeSeriesServiceStatistics?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a service graph for one or more specific trace IDs.
		 * Post TraceGraph
		 * @param {string} NextToken Pagination token
		 * @return {GetTraceGraphResult} Success
		 */
		GetTraceGraph(NextToken: string | null | undefined, requestBody: GetTraceGraphPostBody): Observable<GetTraceGraphResult> {
			return this.http.post<GetTraceGraphResult>(this.baseUri + 'TraceGraph?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Retrieves IDs and annotations for traces available for a specified time frame using an optional filter. To get the full traces, pass the trace IDs to <code>BatchGetTraces</code>.</p> <p>A filter expression can target traced requests that hit specific service nodes or edges, have errors, or come from a known user. For example, the following filter expression targets traces that pass through <code>api.example.com</code>:</p> <p> <code>service("api.example.com")</code> </p> <p>This filter expression finds traces that have an annotation named <code>account</code> with the value <code>12345</code>:</p> <p> <code>annotation.account = "12345"</code> </p> <p>For a full list of indexed fields and keywords that you can use in filter expressions, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-console-filters.html">Using Filter Expressions</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
		 * Post TraceSummaries
		 * @param {string} NextToken Pagination token
		 * @return {GetTraceSummariesResult} Success
		 */
		GetTraceSummaries(NextToken: string | null | undefined, requestBody: GetTraceSummariesPostBody): Observable<GetTraceSummariesResult> {
			return this.http.post<GetTraceSummariesResult>(this.baseUri + 'TraceSummaries?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the list of resource policies in the target Amazon Web Services account.
		 * Post ListResourcePolicies
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcePoliciesResult} Success
		 */
		ListResourcePolicies(NextToken: string | null | undefined, requestBody: ListResourcePoliciesPostBody): Observable<ListResourcePoliciesResult> {
			return this.http.post<ListResourcePoliciesResult>(this.baseUri + 'ListResourcePolicies?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of tags that are applied to the specified Amazon Web Services X-Ray group or sampling rule.
		 * Post ListTagsForResource
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(NextToken: string | null | undefined, requestBody: ListTagsForResourcePostBody): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + 'ListTagsForResource?NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the encryption configuration for X-Ray data.
		 * Post PutEncryptionConfig
		 * @return {PutEncryptionConfigResult} Success
		 */
		PutEncryptionConfig(requestBody: PutEncryptionConfigPostBody): Observable<PutEncryptionConfigResult> {
			return this.http.post<PutEncryptionConfigResult>(this.baseUri + 'PutEncryptionConfig', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the resource policy to grant one or more Amazon Web Services services and accounts permissions to access X-Ray. Each resource policy will be associated with a specific Amazon Web Services account. Each Amazon Web Services account can have a maximum of 5 resource policies, and each policy name must be unique within that account. The maximum size of each resource policy is 5KB.
		 * Post PutResourcePolicy
		 * @return {PutResourcePolicyResult} Success
		 */
		PutResourcePolicy(requestBody: PutResourcePolicyPostBody): Observable<PutResourcePolicyResult> {
			return this.http.post<PutResourcePolicyResult>(this.baseUri + 'PutResourcePolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Used by the Amazon Web Services X-Ray daemon to upload telemetry.
		 * Post TelemetryRecords
		 * @return {PutTelemetryRecordsResult} Success
		 */
		PutTelemetryRecords(requestBody: PutTelemetryRecordsPostBody): Observable<PutTelemetryRecordsResult> {
			return this.http.post<PutTelemetryRecordsResult>(this.baseUri + 'TelemetryRecords', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Uploads segment documents to Amazon Web Services X-Ray. The <a href="https://docs.aws.amazon.com/xray/index.html">X-Ray SDK</a> generates segment documents and sends them to the X-Ray daemon, which uploads them in batches. A segment document can be a completed segment, an in-progress segment, or an array of subsegments.</p> <p>Segments must include the following fields. For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p> <p class="title"> <b>Required segment document fields</b> </p> <ul> <li> <p> <code>name</code> - The name of the service that handled the request.</p> </li> <li> <p> <code>id</code> - A 64-bit identifier for the segment, unique among segments in the same trace, in 16 hexadecimal digits.</p> </li> <li> <p> <code>trace_id</code> - A unique identifier that connects all segments and subsegments originating from a single client request.</p> </li> <li> <p> <code>start_time</code> - Time the segment or subsegment was created, in floating point seconds in epoch time, accurate to milliseconds. For example, <code>1480615200.010</code> or <code>1.480615200010E9</code>.</p> </li> <li> <p> <code>end_time</code> - Time the segment or subsegment was closed. For example, <code>1480615200.090</code> or <code>1.480615200090E9</code>. Specify either an <code>end_time</code> or <code>in_progress</code>.</p> </li> <li> <p> <code>in_progress</code> - Set to <code>true</code> instead of specifying an <code>end_time</code> to record that a segment has been started, but is not complete. Send an in-progress segment when your application receives a request that will take a long time to serve, to trace that the request was received. When the response is sent, send the complete segment to overwrite the in-progress segment.</p> </li> </ul> <p>A <code>trace_id</code> consists of three numbers separated by hyphens. For example, 1-58406520-a006649127e371903a2de979. This includes:</p> <p class="title"> <b>Trace ID Format</b> </p> <ul> <li> <p>The version number, for instance, <code>1</code>.</p> </li> <li> <p>The time of the original request, in Unix epoch time, in 8 hexadecimal digits. For example, 10:00AM December 2nd, 2016 PST in epoch time is <code>1480615200</code> seconds, or <code>58406520</code> in hexadecimal.</p> </li> <li> <p>A 96-bit identifier for the trace, globally unique, in 24 hexadecimal digits.</p> </li> </ul>
		 * Post TraceSegments
		 * @return {PutTraceSegmentsResult} Success
		 */
		PutTraceSegments(requestBody: PutTraceSegmentsPostBody): Observable<PutTraceSegmentsResult> {
			return this.http.post<PutTraceSegmentsResult>(this.baseUri + 'TraceSegments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies tags to an existing Amazon Web Services X-Ray group or sampling rule.
		 * Post TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from an Amazon Web Services X-Ray group or sampling rule. You cannot edit or delete system tags (those with an <code>aws:</code> prefix).
		 * Post UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourcePostBody): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + 'UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a group resource.
		 * Post UpdateGroup
		 * @return {UpdateGroupResult} Success
		 */
		UpdateGroup(requestBody: UpdateGroupPostBody): Observable<UpdateGroupResult> {
			return this.http.post<UpdateGroupResult>(this.baseUri + 'UpdateGroup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies a sampling rule's configuration.
		 * Post UpdateSamplingRule
		 * @return {UpdateSamplingRuleResult} Success
		 */
		UpdateSamplingRule(requestBody: UpdateSamplingRulePostBody): Observable<UpdateSamplingRuleResult> {
			return this.http.post<UpdateSamplingRuleResult>(this.baseUri + 'UpdateSamplingRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchGetTracesPostBody {

		/**
		 * Specify the trace IDs of requests for which to retrieve segments.
		 * Required
		 */
		TraceIds: Array<string>;

		/** Pagination token. */
		NextToken?: string | null;
	}
	export interface BatchGetTracesPostBodyFormProperties {

		/** Pagination token. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetTracesPostBodyFormGroup() {
		return new FormGroup<BatchGetTracesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupPostBody {

		/**
		 * The case-sensitive name of the new group. Default is a reserved name and names must be unique.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName: string;

		/** The filter expression defining criteria by which to group traces. */
		FilterExpression?: string | null;

		/** The structure containing configurations related to insights. */
		InsightsConfiguration?: CreateGroupPostBodyInsightsConfiguration;

		/**
		 * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use.</p> </li> </ul>
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateGroupPostBodyFormProperties {

		/**
		 * The case-sensitive name of the new group. Default is a reserved name and names must be unique.
		 * Required
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/** The filter expression defining criteria by which to group traces. */
		FilterExpression: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupPostBodyFormGroup() {
		return new FormGroup<CreateGroupPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateGroupPostBodyInsightsConfiguration {
		InsightsEnabled?: boolean | null;
		NotificationsEnabled?: boolean | null;
	}
	export interface CreateGroupPostBodyInsightsConfigurationFormProperties {
		InsightsEnabled: FormControl<boolean | null | undefined>,
		NotificationsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateGroupPostBodyInsightsConfigurationFormGroup() {
		return new FormGroup<CreateGroupPostBodyInsightsConfigurationFormProperties>({
			InsightsEnabled: new FormControl<boolean | null | undefined>(undefined),
			NotificationsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateSamplingRulePostBody {

		/**
		 * A sampling rule that services use to decide whether to instrument a request. Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
		 * Required
		 */
		SamplingRule: CreateSamplingRulePostBodySamplingRule;

		/**
		 * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use.</p> </li> </ul>
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateSamplingRulePostBodyFormProperties {
	}
	export function CreateCreateSamplingRulePostBodyFormGroup() {
		return new FormGroup<CreateSamplingRulePostBodyFormProperties>({
		});

	}

	export interface CreateSamplingRulePostBodySamplingRule {
		RuleName?: string;
		RuleARN?: string;
		ResourceARN?: string;
		Priority?: number | null;
		FixedRate?: number | null;
		ReservoirSize?: number | null;
		ServiceName?: string;
		ServiceType?: string;
		Host?: string;
		HTTPMethod?: string;
		URLPath?: string;
		Version?: number | null;
		Attributes?: AttributeMap;
	}
	export interface CreateSamplingRulePostBodySamplingRuleFormProperties {
		RuleName: FormControl<string | null | undefined>,
		RuleARN: FormControl<string | null | undefined>,
		ResourceARN: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		FixedRate: FormControl<number | null | undefined>,
		ReservoirSize: FormControl<number | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		ServiceType: FormControl<string | null | undefined>,
		Host: FormControl<string | null | undefined>,
		HTTPMethod: FormControl<string | null | undefined>,
		URLPath: FormControl<string | null | undefined>,
		Version: FormControl<number | null | undefined>,
	}
	export function CreateCreateSamplingRulePostBodySamplingRuleFormGroup() {
		return new FormGroup<CreateSamplingRulePostBodySamplingRuleFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined),
			RuleARN: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			FixedRate: new FormControl<number | null | undefined>(undefined),
			ReservoirSize: new FormControl<number | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			ServiceType: new FormControl<string | null | undefined>(undefined),
			Host: new FormControl<string | null | undefined>(undefined),
			HTTPMethod: new FormControl<string | null | undefined>(undefined),
			URLPath: new FormControl<string | null | undefined>(undefined),
			Version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupPostBody {

		/**
		 * The case-sensitive name of the group.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string | null;

		/**
		 * The ARN of the group that was generated on creation.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string | null;
	}
	export interface DeleteGroupPostBodyFormProperties {

		/**
		 * The case-sensitive name of the group.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The ARN of the group that was generated on creation.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteGroupPostBodyFormGroup() {
		return new FormGroup<DeleteGroupPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			GroupARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(400)]),
		});

	}

	export interface DeleteResourcePolicyPostBody {

		/**
		 * The name of the resource policy to delete.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		PolicyName: string;

		/** Specifies a specific policy revision to delete. Provide a <code>PolicyRevisionId</code> to ensure an atomic delete operation. If the provided revision id does not match the latest policy revision id, an <code>InvalidPolicyRevisionIdException</code> exception is returned. */
		PolicyRevisionId?: string | null;
	}
	export interface DeleteResourcePolicyPostBodyFormProperties {

		/**
		 * The name of the resource policy to delete.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		PolicyName: FormControl<string | null | undefined>,

		/** Specifies a specific policy revision to delete. Provide a <code>PolicyRevisionId</code> to ensure an atomic delete operation. If the provided revision id does not match the latest policy revision id, an <code>InvalidPolicyRevisionIdException</code> exception is returned. */
		PolicyRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteResourcePolicyPostBodyFormGroup() {
		return new FormGroup<DeleteResourcePolicyPostBodyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=,.@-]+')]),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteSamplingRulePostBody {

		/** The name of the sampling rule. Specify a rule by either name or ARN, but not both. */
		RuleName?: string | null;

		/** The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. */
		RuleARN?: string | null;
	}
	export interface DeleteSamplingRulePostBodyFormProperties {

		/** The name of the sampling rule. Specify a rule by either name or ARN, but not both. */
		RuleName: FormControl<string | null | undefined>,

		/** The ARN of the sampling rule. Specify a rule by either name or ARN, but not both. */
		RuleARN: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSamplingRulePostBodyFormGroup() {
		return new FormGroup<DeleteSamplingRulePostBodyFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined),
			RuleARN: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetGroupPostBody {

		/**
		 * The case-sensitive name of the group.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string | null;

		/**
		 * The ARN of the group that was generated on creation.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string | null;
	}
	export interface GetGroupPostBodyFormProperties {

		/**
		 * The case-sensitive name of the group.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The ARN of the group that was generated on creation.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupPostBodyFormGroup() {
		return new FormGroup<GetGroupPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			GroupARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(400)]),
		});

	}

	export interface GetGroupsPostBody {

		/**
		 * Pagination token.
		 * Max length: 100
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface GetGroupsPostBodyFormProperties {

		/**
		 * Pagination token.
		 * Max length: 100
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetGroupsPostBodyFormGroup() {
		return new FormGroup<GetGroupsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface GetInsightPostBody {

		/**
		 * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
		 * Required
		 */
		InsightId: string;
	}
	export interface GetInsightPostBodyFormProperties {

		/**
		 * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
		 * Required
		 */
		InsightId: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightPostBodyFormGroup() {
		return new FormGroup<GetInsightPostBodyFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}')]),
		});

	}

	export interface GetInsightEventsPostBody {

		/**
		 * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
		 * Required
		 */
		InsightId: string;

		/**
		 * Used to retrieve at most the specified value of events.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults?: number | null;

		/**
		 * Specify the pagination token returned by a previous request to retrieve the next page of events.
		 * Max length: 2000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface GetInsightEventsPostBodyFormProperties {

		/**
		 * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
		 * Required
		 */
		InsightId: FormControl<string | null | undefined>,

		/**
		 * Used to retrieve at most the specified value of events.
		 * Minimum: 1
		 * Maximum: 50
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Specify the pagination token returned by a previous request to retrieve the next page of events.
		 * Max length: 2000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightEventsPostBodyFormGroup() {
		return new FormGroup<GetInsightEventsPostBodyFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}')]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(50)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface GetInsightImpactGraphPostBody {

		/**
		 * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
		 * Required
		 */
		InsightId: string;

		/**
		 * The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value provided and can't be more than 30 days old.
		 * Required
		 */
		StartTime: Date;

		/**
		 * The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided. The time range between the start time and end time can't be more than six hours.
		 * Required
		 */
		EndTime: Date;

		/**
		 * Specify the pagination token returned by a previous request to retrieve the next page of results.
		 * Max length: 2000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface GetInsightImpactGraphPostBodyFormProperties {

		/**
		 * The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.
		 * Required
		 */
		InsightId: FormControl<string | null | undefined>,

		/**
		 * The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value provided and can't be more than 30 days old.
		 * Required
		 */
		StartTime: FormControl<Date | null | undefined>,

		/**
		 * The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided. The time range between the start time and end time can't be more than six hours.
		 * Required
		 */
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * Specify the pagination token returned by a previous request to retrieve the next page of results.
		 * Max length: 2000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightImpactGraphPostBodyFormGroup() {
		return new FormGroup<GetInsightImpactGraphPostBodyFormProperties>({
			InsightId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}')]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface GetInsightSummariesPostBody {

		/**
		 * The list of insight states.
		 * Minimum items: 0
		 * Maximum items: 1
		 */
		States?: Array<InsightState>;

		/**
		 * The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string | null;

		/**
		 * The name of the group. Required if the GroupARN isn't provided.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string | null;

		/**
		 * The beginning of the time frame in which the insights started. The start time can't be more than 30 days old.
		 * Required
		 */
		StartTime: Date;

		/**
		 * The end of the time frame in which the insights ended. The end time can't be more than 30 days old.
		 * Required
		 */
		EndTime: Date;

		/**
		 * The maximum number of results to display.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * Pagination token.
		 * Max length: 2000
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface GetInsightSummariesPostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN: FormControl<string | null | undefined>,

		/**
		 * The name of the group. Required if the GroupARN isn't provided.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The beginning of the time frame in which the insights started. The start time can't be more than 30 days old.
		 * Required
		 */
		StartTime: FormControl<Date | null | undefined>,

		/**
		 * The end of the time frame in which the insights ended. The end time can't be more than 30 days old.
		 * Required
		 */
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * The maximum number of results to display.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Pagination token.
		 * Max length: 2000
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetInsightSummariesPostBodyFormGroup() {
		return new FormGroup<GetInsightSummariesPostBodyFormProperties>({
			GroupARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(400)]),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2000)]),
		});

	}

	export interface GetSamplingRulesPostBody {

		/** Pagination token. */
		NextToken?: string | null;
	}
	export interface GetSamplingRulesPostBodyFormProperties {

		/** Pagination token. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSamplingRulesPostBodyFormGroup() {
		return new FormGroup<GetSamplingRulesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSamplingStatisticSummariesPostBody {

		/** Pagination token. */
		NextToken?: string | null;
	}
	export interface GetSamplingStatisticSummariesPostBodyFormProperties {

		/** Pagination token. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetSamplingStatisticSummariesPostBodyFormGroup() {
		return new FormGroup<GetSamplingStatisticSummariesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetSamplingTargetsPostBody {

		/**
		 * Information about rules that the service is using to sample requests.
		 * Required
		 * Maximum items: 25
		 */
		SamplingStatisticsDocuments: Array<SamplingStatisticsDocument>;
	}
	export interface GetSamplingTargetsPostBodyFormProperties {
	}
	export function CreateGetSamplingTargetsPostBodyFormGroup() {
		return new FormGroup<GetSamplingTargetsPostBodyFormProperties>({
		});

	}

	export interface GetServiceGraphPostBody {

		/**
		 * The start of the time frame for which to generate a graph.
		 * Required
		 */
		StartTime: Date;

		/**
		 * The end of the timeframe for which to generate a graph.
		 * Required
		 */
		EndTime: Date;

		/**
		 * The name of a group based on which you want to generate a graph.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string | null;

		/** Pagination token. */
		NextToken?: string | null;
	}
	export interface GetServiceGraphPostBodyFormProperties {

		/**
		 * The start of the time frame for which to generate a graph.
		 * Required
		 */
		StartTime: FormControl<Date | null | undefined>,

		/**
		 * The end of the timeframe for which to generate a graph.
		 * Required
		 */
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * The name of a group based on which you want to generate a graph.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN: FormControl<string | null | undefined>,

		/** Pagination token. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetServiceGraphPostBodyFormGroup() {
		return new FormGroup<GetServiceGraphPostBodyFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			GroupARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(400)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTimeSeriesServiceStatisticsPostBody {

		/**
		 * The start of the time frame for which to aggregate statistics.
		 * Required
		 */
		StartTime: Date;

		/**
		 * The end of the time frame for which to aggregate statistics.
		 * Required
		 */
		EndTime: Date;

		/**
		 * The case-sensitive name of the group for which to pull statistics from.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the group for which to pull statistics from.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string | null;

		/**
		 * A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned.
		 * Max length: 500
		 * Min length: 1
		 */
		EntitySelectorExpression?: string | null;

		/** Aggregation period in seconds. */
		Period?: number | null;

		/** The forecasted high and low fault count values. Forecast enabled requests require the EntitySelectorExpression ID be provided. */
		ForecastStatistics?: boolean | null;

		/** Pagination token. */
		NextToken?: string | null;
	}
	export interface GetTimeSeriesServiceStatisticsPostBodyFormProperties {

		/**
		 * The start of the time frame for which to aggregate statistics.
		 * Required
		 */
		StartTime: FormControl<Date | null | undefined>,

		/**
		 * The end of the time frame for which to aggregate statistics.
		 * Required
		 */
		EndTime: FormControl<Date | null | undefined>,

		/**
		 * The case-sensitive name of the group for which to pull statistics from.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the group for which to pull statistics from.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN: FormControl<string | null | undefined>,

		/**
		 * A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge functions. If no selector expression is specified, edge statistics are returned.
		 * Max length: 500
		 * Min length: 1
		 */
		EntitySelectorExpression: FormControl<string | null | undefined>,

		/** Aggregation period in seconds. */
		Period: FormControl<number | null | undefined>,

		/** The forecasted high and low fault count values. Forecast enabled requests require the EntitySelectorExpression ID be provided. */
		ForecastStatistics: FormControl<boolean | null | undefined>,

		/** Pagination token. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTimeSeriesServiceStatisticsPostBodyFormGroup() {
		return new FormGroup<GetTimeSeriesServiceStatisticsPostBodyFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			GroupARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(400)]),
			EntitySelectorExpression: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(500)]),
			Period: new FormControl<number | null | undefined>(undefined),
			ForecastStatistics: new FormControl<boolean | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTraceGraphPostBody {

		/**
		 * Trace IDs of requests for which to generate a service graph.
		 * Required
		 */
		TraceIds: Array<string>;

		/** Pagination token. */
		NextToken?: string | null;
	}
	export interface GetTraceGraphPostBodyFormProperties {

		/** Pagination token. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTraceGraphPostBodyFormGroup() {
		return new FormGroup<GetTraceGraphPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTraceSummariesPostBody {

		/**
		 * The start of the time frame for which to retrieve traces.
		 * Required
		 */
		StartTime: Date;

		/**
		 * The end of the time frame for which to retrieve traces.
		 * Required
		 */
		EndTime: Date;

		/** A parameter to indicate whether to query trace summaries by TraceId or Event time. */
		TimeRangeType?: TimeRangeType | null;

		/** Set to <code>true</code> to get summaries for only a subset of available traces. */
		Sampling?: boolean | null;

		/** The name and value of a sampling rule to apply to a trace summary. */
		SamplingStrategy?: GetTraceSummariesPostBodySamplingStrategy;

		/** Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements. */
		FilterExpression?: string | null;

		/** Specify the pagination token returned by a previous request to retrieve the next page of results. */
		NextToken?: string | null;
	}
	export interface GetTraceSummariesPostBodyFormProperties {

		/**
		 * The start of the time frame for which to retrieve traces.
		 * Required
		 */
		StartTime: FormControl<Date | null | undefined>,

		/**
		 * The end of the time frame for which to retrieve traces.
		 * Required
		 */
		EndTime: FormControl<Date | null | undefined>,

		/** A parameter to indicate whether to query trace summaries by TraceId or Event time. */
		TimeRangeType: FormControl<TimeRangeType | null | undefined>,

		/** Set to <code>true</code> to get summaries for only a subset of available traces. */
		Sampling: FormControl<boolean | null | undefined>,

		/** Specify a filter expression to retrieve trace summaries for services or requests that meet certain requirements. */
		FilterExpression: FormControl<string | null | undefined>,

		/** Specify the pagination token returned by a previous request to retrieve the next page of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTraceSummariesPostBodyFormGroup() {
		return new FormGroup<GetTraceSummariesPostBodyFormProperties>({
			StartTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			EndTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			TimeRangeType: new FormControl<TimeRangeType | null | undefined>(undefined),
			Sampling: new FormControl<boolean | null | undefined>(undefined),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTraceSummariesPostBodySamplingStrategy {
		Name?: SamplingStrategyName;
		Value?: number | null;
	}
	export interface GetTraceSummariesPostBodySamplingStrategyFormProperties {
		Name: FormControl<SamplingStrategyName | null | undefined>,
		Value: FormControl<number | null | undefined>,
	}
	export function CreateGetTraceSummariesPostBodySamplingStrategyFormGroup() {
		return new FormGroup<GetTraceSummariesPostBodySamplingStrategyFormProperties>({
			Name: new FormControl<SamplingStrategyName | null | undefined>(undefined),
			Value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListResourcePoliciesPostBody {

		/**
		 * Not currently supported.
		 * Max length: 100
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListResourcePoliciesPostBodyFormProperties {

		/**
		 * Not currently supported.
		 * Max length: 100
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcePoliciesPostBodyFormGroup() {
		return new FormGroup<ListResourcePoliciesPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(100)]),
		});

	}

	export interface ListTagsForResourcePostBody {

		/**
		 * The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/** A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with the current page of results as the value of this parameter to get the next page of results. */
		NextToken?: string | null;
	}
	export interface ListTagsForResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,

		/** A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with the current page of results as the value of this parameter to get the next page of results. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourcePostBodyFormGroup() {
		return new FormGroup<ListTagsForResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEncryptionConfigPostBody {

		/**
		 * <p>An Amazon Web Services KMS key in one of the following formats:</p> <ul> <li> <p> <b>Alias</b> - The name of the key. For example, <code>alias/MyKey</code>.</p> </li> <li> <p> <b>Key ID</b> - The KMS key ID of the key. For example, <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Amazon Web Services X-Ray does not support asymmetric KMS keys.</p> </li> <li> <p> <b>ARN</b> - The full Amazon Resource Name of the key ID or alias. For example, <code>arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Use this format to specify a key in a different account.</p> </li> </ul> <p>Omit this key if you set <code>Type</code> to <code>NONE</code>.</p>
		 * Max length: 3000
		 * Min length: 1
		 */
		KeyId?: string | null;

		/**
		 * The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set to <code>NONE</code> for default encryption.
		 * Required
		 */
		Type: EncryptionType;
	}
	export interface PutEncryptionConfigPostBodyFormProperties {

		/**
		 * <p>An Amazon Web Services KMS key in one of the following formats:</p> <ul> <li> <p> <b>Alias</b> - The name of the key. For example, <code>alias/MyKey</code>.</p> </li> <li> <p> <b>Key ID</b> - The KMS key ID of the key. For example, <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Amazon Web Services X-Ray does not support asymmetric KMS keys.</p> </li> <li> <p> <b>ARN</b> - The full Amazon Resource Name of the key ID or alias. For example, <code>arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Use this format to specify a key in a different account.</p> </li> </ul> <p>Omit this key if you set <code>Type</code> to <code>NONE</code>.</p>
		 * Max length: 3000
		 * Min length: 1
		 */
		KeyId: FormControl<string | null | undefined>,

		/**
		 * The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set to <code>NONE</code> for default encryption.
		 * Required
		 */
		Type: FormControl<EncryptionType | null | undefined>,
	}
	export function CreatePutEncryptionConfigPostBodyFormGroup() {
		return new FormGroup<PutEncryptionConfigPostBodyFormProperties>({
			KeyId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(3000)]),
			Type: new FormControl<EncryptionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutResourcePolicyPostBody {

		/**
		 * The name of the resource policy. Must be unique within a specific Amazon Web Services account.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		PolicyName: string;

		/**
		 * The resource policy document, which can be up to 5kb in size.
		 * Required
		 */
		PolicyDocument: string;

		/** <p>Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is created if it does not exist, or updated with an incremented revision id. The revision id is unique to each policy in the account.</p> <p>If the policy revision id does not match the latest revision id, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception. You can also provide a <code>PolicyRevisionId</code> of 0. In this case, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception if a resource policy with the same name already exists. </p> */
		PolicyRevisionId?: string | null;

		/** <p>A flag to indicate whether to bypass the resource policy lockout safety check.</p> <important> <p>Setting this value to true increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately.</p> </important> <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <code>PutResourcePolicy</code> request.</p> <p>The default value is false.</p> */
		BypassPolicyLockoutCheck?: boolean | null;
	}
	export interface PutResourcePolicyPostBodyFormProperties {

		/**
		 * The name of the resource policy. Must be unique within a specific Amazon Web Services account.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		PolicyName: FormControl<string | null | undefined>,

		/**
		 * The resource policy document, which can be up to 5kb in size.
		 * Required
		 */
		PolicyDocument: FormControl<string | null | undefined>,

		/** <p>Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is created if it does not exist, or updated with an incremented revision id. The revision id is unique to each policy in the account.</p> <p>If the policy revision id does not match the latest revision id, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception. You can also provide a <code>PolicyRevisionId</code> of 0. In this case, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception if a resource policy with the same name already exists. </p> */
		PolicyRevisionId: FormControl<string | null | undefined>,

		/** <p>A flag to indicate whether to bypass the resource policy lockout safety check.</p> <important> <p>Setting this value to true increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately.</p> </important> <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <code>PutResourcePolicy</code> request.</p> <p>The default value is false.</p> */
		BypassPolicyLockoutCheck: FormControl<boolean | null | undefined>,
	}
	export function CreatePutResourcePolicyPostBodyFormGroup() {
		return new FormGroup<PutResourcePolicyPostBodyFormProperties>({
			PolicyName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('[\w+=,.@-]+')]),
			PolicyDocument: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PolicyRevisionId: new FormControl<string | null | undefined>(undefined),
			BypassPolicyLockoutCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutTelemetryRecordsPostBody {

		/**
		 * <p/>
		 * Required
		 */
		TelemetryRecords: Array<TelemetryRecord>;

		/**
		 * <p/>
		 * Max length: 20
		 */
		EC2InstanceId?: string | null;

		/**
		 * <p/>
		 * Max length: 255
		 */
		Hostname?: string | null;

		/**
		 * <p/>
		 * Max length: 500
		 */
		ResourceARN?: string | null;
	}
	export interface PutTelemetryRecordsPostBodyFormProperties {

		/**
		 * <p/>
		 * Max length: 20
		 */
		EC2InstanceId: FormControl<string | null | undefined>,

		/**
		 * <p/>
		 * Max length: 255
		 */
		Hostname: FormControl<string | null | undefined>,

		/**
		 * <p/>
		 * Max length: 500
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreatePutTelemetryRecordsPostBodyFormGroup() {
		return new FormGroup<PutTelemetryRecordsPostBodyFormProperties>({
			EC2InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(20)]),
			Hostname: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255)]),
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(500)]),
		});

	}

	export interface PutTraceSegmentsPostBody {

		/**
		 * A string containing a JSON document defining one or more segments or subsegments.
		 * Required
		 */
		TraceSegmentDocuments: Array<string>;
	}
	export interface PutTraceSegmentsPostBodyFormProperties {
	}
	export function CreatePutTraceSegmentsPostBodyFormGroup() {
		return new FormGroup<PutTraceSegmentsPostBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group or sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>The following restrictions apply to tags:</p> <ul> <li> <p>Maximum number of user-applied tags per resource: 50</p> </li> <li> <p>Maximum tag key length: 128 Unicode characters</p> </li> <li> <p>Maximum tag value length: 256 Unicode characters</p> </li> <li> <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . : / = + - and @</p> </li> <li> <p>Tag keys and values are case sensitive.</p> </li> <li> <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use. You cannot edit or delete system tags.</p> </li> </ul>
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

	export interface UntagResourcePostBody {

		/**
		 * The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: string;

		/**
		 * Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.
		 * Required
		 * Minimum items: 0
		 * Maximum items: 200
		 */
		TagKeys: Array<string>;
	}
	export interface UntagResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourcePostBodyFormGroup() {
		return new FormGroup<UntagResourcePostBodyFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011)]),
		});

	}

	export interface UpdateGroupPostBody {

		/**
		 * The case-sensitive name of the group.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName?: string | null;

		/**
		 * The ARN that was generated upon creation.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN?: string | null;

		/** The updated filter expression defining criteria by which to group traces. */
		FilterExpression?: string | null;

		/** The structure containing configurations related to insights. */
		InsightsConfiguration?: UpdateGroupPostBodyInsightsConfiguration;
	}
	export interface UpdateGroupPostBodyFormProperties {

		/**
		 * The case-sensitive name of the group.
		 * Max length: 32
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * The ARN that was generated upon creation.
		 * Max length: 400
		 * Min length: 1
		 */
		GroupARN: FormControl<string | null | undefined>,

		/** The updated filter expression defining criteria by which to group traces. */
		FilterExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupPostBodyFormGroup() {
		return new FormGroup<UpdateGroupPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(32)]),
			GroupARN: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(400)]),
			FilterExpression: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupPostBodyInsightsConfiguration {
		InsightsEnabled?: boolean | null;
		NotificationsEnabled?: boolean | null;
	}
	export interface UpdateGroupPostBodyInsightsConfigurationFormProperties {
		InsightsEnabled: FormControl<boolean | null | undefined>,
		NotificationsEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateGroupPostBodyInsightsConfigurationFormGroup() {
		return new FormGroup<UpdateGroupPostBodyInsightsConfigurationFormProperties>({
			InsightsEnabled: new FormControl<boolean | null | undefined>(undefined),
			NotificationsEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateSamplingRulePostBody {

		/**
		 * A document specifying changes to a sampling rule's configuration.
		 * Required
		 */
		SamplingRuleUpdate: UpdateSamplingRulePostBodySamplingRuleUpdate;
	}
	export interface UpdateSamplingRulePostBodyFormProperties {
	}
	export function CreateUpdateSamplingRulePostBodyFormGroup() {
		return new FormGroup<UpdateSamplingRulePostBodyFormProperties>({
		});

	}

	export interface UpdateSamplingRulePostBodySamplingRuleUpdate {
		RuleName?: string;
		RuleARN?: string;
		ResourceARN?: string;
		Priority?: number | null;
		FixedRate?: number | null;
		ReservoirSize?: number | null;
		Host?: string;
		ServiceName?: string;
		ServiceType?: string;
		HTTPMethod?: string;
		URLPath?: string;
		Attributes?: AttributeMap;
	}
	export interface UpdateSamplingRulePostBodySamplingRuleUpdateFormProperties {
		RuleName: FormControl<string | null | undefined>,
		RuleARN: FormControl<string | null | undefined>,
		ResourceARN: FormControl<string | null | undefined>,
		Priority: FormControl<number | null | undefined>,
		FixedRate: FormControl<number | null | undefined>,
		ReservoirSize: FormControl<number | null | undefined>,
		Host: FormControl<string | null | undefined>,
		ServiceName: FormControl<string | null | undefined>,
		ServiceType: FormControl<string | null | undefined>,
		HTTPMethod: FormControl<string | null | undefined>,
		URLPath: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSamplingRulePostBodySamplingRuleUpdateFormGroup() {
		return new FormGroup<UpdateSamplingRulePostBodySamplingRuleUpdateFormProperties>({
			RuleName: new FormControl<string | null | undefined>(undefined),
			RuleARN: new FormControl<string | null | undefined>(undefined),
			ResourceARN: new FormControl<string | null | undefined>(undefined),
			Priority: new FormControl<number | null | undefined>(undefined),
			FixedRate: new FormControl<number | null | undefined>(undefined),
			ReservoirSize: new FormControl<number | null | undefined>(undefined),
			Host: new FormControl<string | null | undefined>(undefined),
			ServiceName: new FormControl<string | null | undefined>(undefined),
			ServiceType: new FormControl<string | null | undefined>(undefined),
			HTTPMethod: new FormControl<string | null | undefined>(undefined),
			URLPath: new FormControl<string | null | undefined>(undefined),
		});

	}

}

