import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelQueryResponse {
		CancellationMessage?: string;
	}
	export interface CancelQueryResponseFormProperties {
		CancellationMessage: FormControl<string | null | undefined>,
	}
	export function CreateCancelQueryResponseFormGroup() {
		return new FormGroup<CancelQueryResponseFormProperties>({
			CancellationMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelQueryRequest {

		/** Required */
		QueryId: string;
	}
	export interface CancelQueryRequestFormProperties {

		/** Required */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateCancelQueryRequestFormGroup() {
		return new FormGroup<CancelQueryRequestFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface InvalidEndpointException {
	}
	export interface InvalidEndpointExceptionFormProperties {
	}
	export function CreateInvalidEndpointExceptionFormGroup() {
		return new FormGroup<InvalidEndpointExceptionFormProperties>({
		});

	}

	export interface CreateScheduledQueryResponse {

		/** Required */
		Arn: string;
	}
	export interface CreateScheduledQueryResponseFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateCreateScheduledQueryResponseFormGroup() {
		return new FormGroup<CreateScheduledQueryResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateScheduledQueryRequest {

		/** Required */
		Name: string;

		/** Required */
		QueryString: string;

		/** Required */
		ScheduleConfiguration: ScheduleConfiguration;

		/** Required */
		NotificationConfiguration: NotificationConfiguration;
		TargetConfiguration?: TargetConfiguration;
		ClientToken?: string;

		/** Required */
		ScheduledQueryExecutionRoleArn: string;
		Tags?: Array<Tag>;
		KmsKeyId?: string;

		/** Required */
		ErrorReportConfiguration: ErrorReportConfiguration;
	}
	export interface CreateScheduledQueryRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		QueryString: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,

		/** Required */
		ScheduledQueryExecutionRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateCreateScheduledQueryRequestFormGroup() {
		return new FormGroup<CreateScheduledQueryRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			ScheduledQueryExecutionRoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration of the schedule of the query. */
	export interface ScheduleConfiguration {

		/** Required */
		ScheduleExpression: string;
	}

	/** Configuration of the schedule of the query. */
	export interface ScheduleConfigurationFormProperties {

		/** Required */
		ScheduleExpression: FormControl<string | null | undefined>,
	}
	export function CreateScheduleConfigurationFormGroup() {
		return new FormGroup<ScheduleConfigurationFormProperties>({
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Notification configuration for a scheduled query. A notification is sent by Timestream when a scheduled query is created, its state is updated or when it is deleted.  */
	export interface NotificationConfiguration {

		/** Required */
		SnsConfiguration: SnsConfiguration;
	}

	/** Notification configuration for a scheduled query. A notification is sent by Timestream when a scheduled query is created, its state is updated or when it is deleted.  */
	export interface NotificationConfigurationFormProperties {
	}
	export function CreateNotificationConfigurationFormGroup() {
		return new FormGroup<NotificationConfigurationFormProperties>({
		});

	}


	/** Details on SNS that are required to send the notification. */
	export interface SnsConfiguration {

		/** Required */
		TopicArn: string;
	}

	/** Details on SNS that are required to send the notification. */
	export interface SnsConfigurationFormProperties {

		/** Required */
		TopicArn: FormControl<string | null | undefined>,
	}
	export function CreateSnsConfigurationFormGroup() {
		return new FormGroup<SnsConfigurationFormProperties>({
			TopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration used for writing the output of a query. */
	export interface TargetConfiguration {

		/** Required */
		TimestreamConfiguration: TimestreamConfiguration;
	}

	/** Configuration used for writing the output of a query. */
	export interface TargetConfigurationFormProperties {
	}
	export function CreateTargetConfigurationFormGroup() {
		return new FormGroup<TargetConfigurationFormProperties>({
		});

	}


	/**  Configuration to write data into Timestream database and table. This configuration allows the user to map the query result select columns into the destination table columns.  */
	export interface TimestreamConfiguration {

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		TimeColumn: string;

		/** Required */
		DimensionMappings: Array<DimensionMapping>;
		MultiMeasureMappings?: MultiMeasureMappings;
		MixedMeasureMappings?: Array<MixedMeasureMapping>;
		MeasureNameColumn?: string;
	}

	/**  Configuration to write data into Timestream database and table. This configuration allows the user to map the query result select columns into the destination table columns.  */
	export interface TimestreamConfigurationFormProperties {

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		TimeColumn: FormControl<string | null | undefined>,
		MeasureNameColumn: FormControl<string | null | undefined>,
	}
	export function CreateTimestreamConfigurationFormGroup() {
		return new FormGroup<TimestreamConfigurationFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimeColumn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MeasureNameColumn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This type is used to map column(s) from the query result to a dimension in the destination table. */
	export interface DimensionMapping {

		/** Required */
		Name: string;

		/** Required */
		DimensionValueType: DimensionValueType;
	}

	/** This type is used to map column(s) from the query result to a dimension in the destination table. */
	export interface DimensionMappingFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		DimensionValueType: FormControl<DimensionValueType | null | undefined>,
	}
	export function CreateDimensionMappingFormGroup() {
		return new FormGroup<DimensionMappingFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DimensionValueType: new FormControl<DimensionValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DimensionValueType { VARCHAR = 0 }


	/** Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table. */
	export interface MultiMeasureMappings {
		TargetMultiMeasureName?: string;

		/** Required */
		MultiMeasureAttributeMappings: Array<MultiMeasureAttributeMapping>;
	}

	/** Only one of MixedMeasureMappings or MultiMeasureMappings is to be provided. MultiMeasureMappings can be used to ingest data as multi measures in the derived table. */
	export interface MultiMeasureMappingsFormProperties {
		TargetMultiMeasureName: FormControl<string | null | undefined>,
	}
	export function CreateMultiMeasureMappingsFormGroup() {
		return new FormGroup<MultiMeasureMappingsFormProperties>({
			TargetMultiMeasureName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Attribute mapping for MULTI value measures. */
	export interface MultiMeasureAttributeMapping {

		/** Required */
		SourceColumn: string;
		TargetMultiMeasureAttributeName?: string;

		/** Required */
		MeasureValueType: ScalarMeasureValueType;
	}

	/** Attribute mapping for MULTI value measures. */
	export interface MultiMeasureAttributeMappingFormProperties {

		/** Required */
		SourceColumn: FormControl<string | null | undefined>,
		TargetMultiMeasureAttributeName: FormControl<string | null | undefined>,

		/** Required */
		MeasureValueType: FormControl<ScalarMeasureValueType | null | undefined>,
	}
	export function CreateMultiMeasureAttributeMappingFormGroup() {
		return new FormGroup<MultiMeasureAttributeMappingFormProperties>({
			SourceColumn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TargetMultiMeasureAttributeName: new FormControl<string | null | undefined>(undefined),
			MeasureValueType: new FormControl<ScalarMeasureValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ScalarMeasureValueType { BIGINT = 0, BOOLEAN = 1, DOUBLE = 2, VARCHAR = 3, TIMESTAMP = 4 }


	/** MixedMeasureMappings are mappings that can be used to ingest data into a mixture of narrow and multi measures in the derived table. */
	export interface MixedMeasureMapping {
		MeasureName?: string;
		SourceColumn?: string;
		TargetMeasureName?: string;

		/** Required */
		MeasureValueType: MeasureValueType;
		MultiMeasureAttributeMappings?: Array<MultiMeasureAttributeMapping>;
	}

	/** MixedMeasureMappings are mappings that can be used to ingest data into a mixture of narrow and multi measures in the derived table. */
	export interface MixedMeasureMappingFormProperties {
		MeasureName: FormControl<string | null | undefined>,
		SourceColumn: FormControl<string | null | undefined>,
		TargetMeasureName: FormControl<string | null | undefined>,

		/** Required */
		MeasureValueType: FormControl<MeasureValueType | null | undefined>,
	}
	export function CreateMixedMeasureMappingFormGroup() {
		return new FormGroup<MixedMeasureMappingFormProperties>({
			MeasureName: new FormControl<string | null | undefined>(undefined),
			SourceColumn: new FormControl<string | null | undefined>(undefined),
			TargetMeasureName: new FormControl<string | null | undefined>(undefined),
			MeasureValueType: new FormControl<MeasureValueType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MeasureValueType { BIGINT = 0, BOOLEAN = 1, DOUBLE = 2, VARCHAR = 3, MULTI = 4 }


	/** A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize databases and/or tables, for example, by purpose, owner, or environment.  */
	export interface Tag {

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize databases and/or tables, for example, by purpose, owner, or environment.  */
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


	/** Configuration required for error reporting. */
	export interface ErrorReportConfiguration {

		/** Required */
		S3Configuration: S3Configuration;
	}

	/** Configuration required for error reporting. */
	export interface ErrorReportConfigurationFormProperties {
	}
	export function CreateErrorReportConfigurationFormGroup() {
		return new FormGroup<ErrorReportConfigurationFormProperties>({
		});

	}


	/** Details on S3 location for error reports that result from running a query.  */
	export interface S3Configuration {

		/** Required */
		BucketName: string;
		ObjectKeyPrefix?: string;
		EncryptionOption?: S3EncryptionOption;
	}

	/** Details on S3 location for error reports that result from running a query.  */
	export interface S3ConfigurationFormProperties {

		/** Required */
		BucketName: FormControl<string | null | undefined>,
		ObjectKeyPrefix: FormControl<string | null | undefined>,
		EncryptionOption: FormControl<S3EncryptionOption | null | undefined>,
	}
	export function CreateS3ConfigurationFormGroup() {
		return new FormGroup<S3ConfigurationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ObjectKeyPrefix: new FormControl<string | null | undefined>(undefined),
			EncryptionOption: new FormControl<S3EncryptionOption | null | undefined>(undefined),
		});

	}

	export enum S3EncryptionOption { SSE_S3 = 0, SSE_KMS = 1 }

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface DeleteScheduledQueryRequest {

		/** Required */
		ScheduledQueryArn: string;
	}
	export interface DeleteScheduledQueryRequestFormProperties {

		/** Required */
		ScheduledQueryArn: FormControl<string | null | undefined>,
	}
	export function CreateDeleteScheduledQueryRequestFormGroup() {
		return new FormGroup<DeleteScheduledQueryRequestFormProperties>({
			ScheduledQueryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface DescribeEndpointsResponse {

		/** Required */
		Endpoints: Array<Endpoint>;
	}
	export interface DescribeEndpointsResponseFormProperties {
	}
	export function CreateDescribeEndpointsResponseFormGroup() {
		return new FormGroup<DescribeEndpointsResponseFormProperties>({
		});

	}


	/** Represents an available endpoint against which to make API calls against, as well as the TTL for that endpoint. */
	export interface Endpoint {

		/** Required */
		Address: string;

		/** Required */
		CachePeriodInMinutes: number;
	}

	/** Represents an available endpoint against which to make API calls against, as well as the TTL for that endpoint. */
	export interface EndpointFormProperties {

		/** Required */
		Address: FormControl<string | null | undefined>,

		/** Required */
		CachePeriodInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateEndpointFormGroup() {
		return new FormGroup<EndpointFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CachePeriodInMinutes: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeEndpointsRequest {
	}
	export interface DescribeEndpointsRequestFormProperties {
	}
	export function CreateDescribeEndpointsRequestFormGroup() {
		return new FormGroup<DescribeEndpointsRequestFormProperties>({
		});

	}

	export interface DescribeScheduledQueryResponse {

		/** Required */
		ScheduledQuery: ScheduledQueryDescription;
	}
	export interface DescribeScheduledQueryResponseFormProperties {
	}
	export function CreateDescribeScheduledQueryResponseFormGroup() {
		return new FormGroup<DescribeScheduledQueryResponseFormProperties>({
		});

	}


	/** Structure that describes scheduled query. */
	export interface ScheduledQueryDescription {

		/** Required */
		Arn: string;

		/** Required */
		Name: string;

		/** Required */
		QueryString: string;
		CreationTime?: Date;

		/** Required */
		State: ScheduledQueryState;
		PreviousInvocationTime?: Date;
		NextInvocationTime?: Date;

		/** Required */
		ScheduleConfiguration: ScheduleConfiguration;

		/** Required */
		NotificationConfiguration: NotificationConfiguration;
		TargetConfiguration?: TargetConfiguration;
		ScheduledQueryExecutionRoleArn?: string;
		KmsKeyId?: string;
		ErrorReportConfiguration?: ErrorReportConfiguration;
		LastRunSummary?: ScheduledQueryRunSummary;
		RecentlyFailedRuns?: Array<ScheduledQueryRunSummary>;
	}

	/** Structure that describes scheduled query. */
	export interface ScheduledQueryDescriptionFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		QueryString: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		State: FormControl<ScheduledQueryState | null | undefined>,
		PreviousInvocationTime: FormControl<Date | null | undefined>,
		NextInvocationTime: FormControl<Date | null | undefined>,
		ScheduledQueryExecutionRoleArn: FormControl<string | null | undefined>,
		KmsKeyId: FormControl<string | null | undefined>,
	}
	export function CreateScheduledQueryDescriptionFormGroup() {
		return new FormGroup<ScheduledQueryDescriptionFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<ScheduledQueryState | null | undefined>(undefined, [Validators.required]),
			PreviousInvocationTime: new FormControl<Date | null | undefined>(undefined),
			NextInvocationTime: new FormControl<Date | null | undefined>(undefined),
			ScheduledQueryExecutionRoleArn: new FormControl<string | null | undefined>(undefined),
			KmsKeyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduledQueryState { ENABLED = 0, DISABLED = 1 }


	/** Run summary for the scheduled query */
	export interface ScheduledQueryRunSummary {
		InvocationTime?: Date;
		TriggerTime?: Date;
		RunStatus?: ScheduledQueryRunStatus;
		ExecutionStats?: ExecutionStats;
		ErrorReportLocation?: ErrorReportLocation;
		FailureReason?: string;
	}

	/** Run summary for the scheduled query */
	export interface ScheduledQueryRunSummaryFormProperties {
		InvocationTime: FormControl<Date | null | undefined>,
		TriggerTime: FormControl<Date | null | undefined>,
		RunStatus: FormControl<ScheduledQueryRunStatus | null | undefined>,
		FailureReason: FormControl<string | null | undefined>,
	}
	export function CreateScheduledQueryRunSummaryFormGroup() {
		return new FormGroup<ScheduledQueryRunSummaryFormProperties>({
			InvocationTime: new FormControl<Date | null | undefined>(undefined),
			TriggerTime: new FormControl<Date | null | undefined>(undefined),
			RunStatus: new FormControl<ScheduledQueryRunStatus | null | undefined>(undefined),
			FailureReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScheduledQueryRunStatus { AUTO_TRIGGER_SUCCESS = 0, AUTO_TRIGGER_FAILURE = 1, MANUAL_TRIGGER_SUCCESS = 2, MANUAL_TRIGGER_FAILURE = 3 }


	/** Statistics for a single scheduled query run. */
	export interface ExecutionStats {
		ExecutionTimeInMillis?: number | null;
		DataWrites?: number | null;
		BytesMetered?: number | null;
		RecordsIngested?: number | null;
		QueryResultRows?: number | null;
	}

	/** Statistics for a single scheduled query run. */
	export interface ExecutionStatsFormProperties {
		ExecutionTimeInMillis: FormControl<number | null | undefined>,
		DataWrites: FormControl<number | null | undefined>,
		BytesMetered: FormControl<number | null | undefined>,
		RecordsIngested: FormControl<number | null | undefined>,
		QueryResultRows: FormControl<number | null | undefined>,
	}
	export function CreateExecutionStatsFormGroup() {
		return new FormGroup<ExecutionStatsFormProperties>({
			ExecutionTimeInMillis: new FormControl<number | null | undefined>(undefined),
			DataWrites: new FormControl<number | null | undefined>(undefined),
			BytesMetered: new FormControl<number | null | undefined>(undefined),
			RecordsIngested: new FormControl<number | null | undefined>(undefined),
			QueryResultRows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This contains the location of the error report for a single scheduled query call.  */
	export interface ErrorReportLocation {
		S3ReportLocation?: S3ReportLocation;
	}

	/** This contains the location of the error report for a single scheduled query call.  */
	export interface ErrorReportLocationFormProperties {
	}
	export function CreateErrorReportLocationFormGroup() {
		return new FormGroup<ErrorReportLocationFormProperties>({
		});

	}


	/**  S3 report location for the scheduled query run. */
	export interface S3ReportLocation {
		BucketName?: string;
		ObjectKey?: string;
	}

	/**  S3 report location for the scheduled query run. */
	export interface S3ReportLocationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ObjectKey: FormControl<string | null | undefined>,
	}
	export function CreateS3ReportLocationFormGroup() {
		return new FormGroup<S3ReportLocationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ObjectKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeScheduledQueryRequest {

		/** Required */
		ScheduledQueryArn: string;
	}
	export interface DescribeScheduledQueryRequestFormProperties {

		/** Required */
		ScheduledQueryArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScheduledQueryRequestFormGroup() {
		return new FormGroup<DescribeScheduledQueryRequestFormProperties>({
			ScheduledQueryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExecuteScheduledQueryRequest {

		/** Required */
		ScheduledQueryArn: string;

		/** Required */
		InvocationTime: Date;
		ClientToken?: string;
	}
	export interface ExecuteScheduledQueryRequestFormProperties {

		/** Required */
		ScheduledQueryArn: FormControl<string | null | undefined>,

		/** Required */
		InvocationTime: FormControl<Date | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
	}
	export function CreateExecuteScheduledQueryRequestFormGroup() {
		return new FormGroup<ExecuteScheduledQueryRequestFormProperties>({
			ScheduledQueryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			InvocationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListScheduledQueriesResponse {

		/** Required */
		ScheduledQueries: Array<ScheduledQuery>;
		NextToken?: string;
	}
	export interface ListScheduledQueriesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScheduledQueriesResponseFormGroup() {
		return new FormGroup<ListScheduledQueriesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Scheduled Query */
	export interface ScheduledQuery {

		/** Required */
		Arn: string;

		/** Required */
		Name: string;
		CreationTime?: Date;

		/** Required */
		State: ScheduledQueryState;
		PreviousInvocationTime?: Date;
		NextInvocationTime?: Date;
		ErrorReportConfiguration?: ErrorReportConfiguration;
		TargetDestination?: TargetDestination;
		LastRunStatus?: ScheduledQueryRunStatus;
	}

	/** Scheduled Query */
	export interface ScheduledQueryFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,

		/** Required */
		State: FormControl<ScheduledQueryState | null | undefined>,
		PreviousInvocationTime: FormControl<Date | null | undefined>,
		NextInvocationTime: FormControl<Date | null | undefined>,
		LastRunStatus: FormControl<ScheduledQueryRunStatus | null | undefined>,
	}
	export function CreateScheduledQueryFormGroup() {
		return new FormGroup<ScheduledQueryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<ScheduledQueryState | null | undefined>(undefined, [Validators.required]),
			PreviousInvocationTime: new FormControl<Date | null | undefined>(undefined),
			NextInvocationTime: new FormControl<Date | null | undefined>(undefined),
			LastRunStatus: new FormControl<ScheduledQueryRunStatus | null | undefined>(undefined),
		});

	}


	/** Destination details to write data for a target data source. Current supported data source is Timestream. */
	export interface TargetDestination {
		TimestreamDestination?: TimestreamDestination;
	}

	/** Destination details to write data for a target data source. Current supported data source is Timestream. */
	export interface TargetDestinationFormProperties {
	}
	export function CreateTargetDestinationFormGroup() {
		return new FormGroup<TargetDestinationFormProperties>({
		});

	}


	/** Destination for scheduled query. */
	export interface TimestreamDestination {
		DatabaseName?: string;
		TableName?: string;
	}

	/** Destination for scheduled query. */
	export interface TimestreamDestinationFormProperties {
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateTimestreamDestinationFormGroup() {
		return new FormGroup<TimestreamDestinationFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListScheduledQueriesRequest {
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListScheduledQueriesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListScheduledQueriesRequestFormGroup() {
		return new FormGroup<ListScheduledQueriesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/** Required */
		Tags: Array<Tag>;
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

	export interface ListTagsForResourceRequest {

		/** Required */
		ResourceARN: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/** Required */
		ResourceARN: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrepareQueryResponse {

		/** Required */
		QueryString: string;

		/** Required */
		Columns: Array<SelectColumn>;

		/** Required */
		Parameters: Array<ParameterMapping>;
	}
	export interface PrepareQueryResponseFormProperties {

		/** Required */
		QueryString: FormControl<string | null | undefined>,
	}
	export function CreatePrepareQueryResponseFormGroup() {
		return new FormGroup<PrepareQueryResponseFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Details of the column that is returned by the query.  */
	export interface SelectColumn {
		Name?: string;

		/** Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries. */
		Type?: Type;
		DatabaseName?: string;
		TableName?: string;
		Aliased?: boolean | null;
	}

	/** Details of the column that is returned by the query.  */
	export interface SelectColumnFormProperties {
		Name: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		Aliased: FormControl<boolean | null | undefined>,
	}
	export function CreateSelectColumnFormGroup() {
		return new FormGroup<SelectColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			Aliased: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries. */
	export interface Type {
		ScalarType?: ScalarType;
		ArrayColumnInfo?: ColumnInfo;
		TimeSeriesMeasureValueColumnInfo?: ColumnInfo;
		RowColumnInfo?: Array<ColumnInfo>;
	}

	/** Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries. */
	export interface TypeFormProperties {
		ScalarType: FormControl<ScalarType | null | undefined>,
	}
	export function CreateTypeFormGroup() {
		return new FormGroup<TypeFormProperties>({
			ScalarType: new FormControl<ScalarType | null | undefined>(undefined),
		});

	}

	export enum ScalarType { VARCHAR = 0, BOOLEAN = 1, BIGINT = 2, DOUBLE = 3, TIMESTAMP = 4, DATE = 5, TIME = 6, INTERVAL_DAY_TO_SECOND = 7, INTERVAL_YEAR_TO_MONTH = 8, UNKNOWN = 9, INTEGER = 10 }


	/**  Contains the metadata for query results such as the column names, data types, and other attributes.  */
	export interface ColumnInfo {
		Name?: string;

		/** Required */
		Type: Type;
	}

	/**  Contains the metadata for query results such as the column names, data types, and other attributes.  */
	export interface ColumnInfoFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateColumnInfoFormGroup() {
		return new FormGroup<ColumnInfoFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Mapping for named parameters. */
	export interface ParameterMapping {

		/** Required */
		Name: string;

		/**
		 * Contains the data type of a column in a query result set. The data type can be scalar or complex. The supported scalar data types are integers, Boolean, string, double, timestamp, date, time, and intervals. The supported complex data types are arrays, rows, and timeseries.
		 * Required
		 */
		Type: Type;
	}

	/** Mapping for named parameters. */
	export interface ParameterMappingFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateParameterMappingFormGroup() {
		return new FormGroup<ParameterMappingFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PrepareQueryRequest {

		/** Required */
		QueryString: string;
		ValidateOnly?: boolean | null;
	}
	export interface PrepareQueryRequestFormProperties {

		/** Required */
		QueryString: FormControl<string | null | undefined>,
		ValidateOnly: FormControl<boolean | null | undefined>,
	}
	export function CreatePrepareQueryRequestFormGroup() {
		return new FormGroup<PrepareQueryRequestFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidateOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface QueryResponse {

		/** Required */
		QueryId: string;
		NextToken?: string;

		/** Required */
		Rows: Array<Row>;

		/** Required */
		ColumnInfo: Array<ColumnInfo>;
		QueryStatus?: QueryStatus;
	}
	export interface QueryResponseFormProperties {

		/** Required */
		QueryId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateQueryResponseFormGroup() {
		return new FormGroup<QueryResponseFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single row in the query results. */
	export interface Row {

		/** Required */
		Data: Array<Datum>;
	}

	/** Represents a single row in the query results. */
	export interface RowFormProperties {
	}
	export function CreateRowFormGroup() {
		return new FormGroup<RowFormProperties>({
		});

	}


	/**  Datum represents a single data point in a query result.  */
	export interface Datum {
		ScalarValue?: string;
		TimeSeriesValue?: Array<TimeSeriesDataPoint>;
		ArrayValue?: Array<Datum>;
		RowValue?: Row;
		NullValue?: boolean | null;
	}

	/**  Datum represents a single data point in a query result.  */
	export interface DatumFormProperties {
		ScalarValue: FormControl<string | null | undefined>,
		NullValue: FormControl<boolean | null | undefined>,
	}
	export function CreateDatumFormGroup() {
		return new FormGroup<DatumFormProperties>({
			ScalarValue: new FormControl<string | null | undefined>(undefined),
			NullValue: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The timeseries data type represents the values of a measure over time. A time series is an array of rows of timestamps and measure values, with rows sorted in ascending order of time. A TimeSeriesDataPoint is a single data point in the time series. It represents a tuple of (time, measure value) in a time series.  */
	export interface TimeSeriesDataPoint {

		/** Required */
		Time: string;

		/** Required */
		Value: Datum;
	}

	/** The timeseries data type represents the values of a measure over time. A time series is an array of rows of timestamps and measure values, with rows sorted in ascending order of time. A TimeSeriesDataPoint is a single data point in the time series. It represents a tuple of (time, measure value) in a time series.  */
	export interface TimeSeriesDataPointFormProperties {

		/** Required */
		Time: FormControl<string | null | undefined>,
	}
	export function CreateTimeSeriesDataPointFormGroup() {
		return new FormGroup<TimeSeriesDataPointFormProperties>({
			Time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the status of the query, including progress and bytes scanned. */
	export interface QueryStatus {
		ProgressPercentage?: number | null;
		CumulativeBytesScanned?: number | null;
		CumulativeBytesMetered?: number | null;
	}

	/** Information about the status of the query, including progress and bytes scanned. */
	export interface QueryStatusFormProperties {
		ProgressPercentage: FormControl<number | null | undefined>,
		CumulativeBytesScanned: FormControl<number | null | undefined>,
		CumulativeBytesMetered: FormControl<number | null | undefined>,
	}
	export function CreateQueryStatusFormGroup() {
		return new FormGroup<QueryStatusFormProperties>({
			ProgressPercentage: new FormControl<number | null | undefined>(undefined),
			CumulativeBytesScanned: new FormControl<number | null | undefined>(undefined),
			CumulativeBytesMetered: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QueryRequest {

		/** Required */
		QueryString: string;
		ClientToken?: string;
		NextToken?: string;
		MaxRows?: number | null;
	}
	export interface QueryRequestFormProperties {

		/** Required */
		QueryString: FormControl<string | null | undefined>,
		ClientToken: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxRows: FormControl<number | null | undefined>,
	}
	export function CreateQueryRequestFormGroup() {
		return new FormGroup<QueryRequestFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientToken: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxRows: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface QueryExecutionException {
	}
	export interface QueryExecutionExceptionFormProperties {
	}
	export function CreateQueryExecutionExceptionFormGroup() {
		return new FormGroup<QueryExecutionExceptionFormProperties>({
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

	export interface UntagResourceResponse {
	}
	export interface UntagResourceResponseFormProperties {
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
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

	export interface UpdateScheduledQueryRequest {

		/** Required */
		ScheduledQueryArn: string;

		/** Required */
		State: ScheduledQueryState;
	}
	export interface UpdateScheduledQueryRequestFormProperties {

		/** Required */
		ScheduledQueryArn: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<ScheduledQueryState | null | undefined>,
	}
	export function CreateUpdateScheduledQueryRequestFormGroup() {
		return new FormGroup<UpdateScheduledQueryRequestFormProperties>({
			ScheduledQueryArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			State: new FormControl<ScheduledQueryState | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels a query that has been issued. Cancellation is provided only if the query has not completed running before the cancellation request was issued. Because cancellation is an idempotent operation, subsequent cancellation requests will return a <code>CancellationMessage</code>, indicating that the query has already been canceled. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.cancel-query.html">code sample</a> for details.
		 * Post #X-Amz-Target=Timestream_20181101.CancelQuery
		 * @return {CancelQueryResponse} Success
		 */
		CancelQuery(requestBody: CancelQueryRequest): Observable<CancelQueryResponse> {
			return this.http.post<CancelQueryResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.CancelQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a scheduled query that will be run on your behalf at the configured schedule. Timestream assumes the execution role provided as part of the <code>ScheduledQueryExecutionRoleArn</code> parameter to run the query. You can use the <code>NotificationConfiguration</code> parameter to configure notification for your scheduled query operations.
		 * Post #X-Amz-Target=Timestream_20181101.CreateScheduledQuery
		 * @return {CreateScheduledQueryResponse} Success
		 */
		CreateScheduledQuery(requestBody: CreateScheduledQueryRequest): Observable<CreateScheduledQueryResponse> {
			return this.http.post<CreateScheduledQueryResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.CreateScheduledQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a given scheduled query. This is an irreversible operation.
		 * Post #X-Amz-Target=Timestream_20181101.DeleteScheduledQuery
		 * @return {void} Success
		 */
		DeleteScheduledQuery(requestBody: DeleteScheduledQueryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Timestream_20181101.DeleteScheduledQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against. This API is available through both Write and Query.</p> <p>Because the Timestream SDKs are designed to transparently work with the service’s architecture, including the management and mapping of the service endpoints, <i>it is not recommended that you use this API unless</i>:</p> <ul> <li> <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream </a> </p> </li> <li> <p>Your application uses a programming language that does not yet have SDK support</p> </li> <li> <p>You require better control over the client-side implementation</p> </li> </ul> <p>For detailed information on how and when to use and implement DescribeEndpoints, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>
		 * Post #X-Amz-Target=Timestream_20181101.DescribeEndpoints
		 * @return {DescribeEndpointsResponse} Success
		 */
		DescribeEndpoints(requestBody: DescribeEndpointsRequest): Observable<DescribeEndpointsResponse> {
			return this.http.post<DescribeEndpointsResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.DescribeEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides detailed information about a scheduled query.
		 * Post #X-Amz-Target=Timestream_20181101.DescribeScheduledQuery
		 * @return {DescribeScheduledQueryResponse} Success
		 */
		DescribeScheduledQuery(requestBody: DescribeScheduledQueryRequest): Observable<DescribeScheduledQueryResponse> {
			return this.http.post<DescribeScheduledQueryResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.DescribeScheduledQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * You can use this API to run a scheduled query manually.
		 * Post #X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery
		 * @return {void} Success
		 */
		ExecuteScheduledQuery(requestBody: ExecuteScheduledQueryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Timestream_20181101.ExecuteScheduledQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a list of all scheduled queries in the caller's Amazon account and Region. <code>ListScheduledQueries</code> is eventually consistent.
		 * Post #X-Amz-Target=Timestream_20181101.ListScheduledQueries
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListScheduledQueriesResponse} Success
		 */
		ListScheduledQueries(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListScheduledQueriesRequest): Observable<ListScheduledQueriesResponse> {
			return this.http.post<ListScheduledQueriesResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.ListScheduledQueries?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all tags on a Timestream query resource.
		 * Post #X-Amz-Target=Timestream_20181101.ListTagsForResource
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.ListTagsForResource?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A synchronous operation that allows you to submit a query with parameters to be stored by Timestream for later running. Timestream only supports using this operation with the <code>PrepareQueryRequest$ValidateOnly</code> set to <code>true</code>.
		 * Post #X-Amz-Target=Timestream_20181101.PrepareQuery
		 * @return {PrepareQueryResponse} Success
		 */
		PrepareQuery(requestBody: PrepareQueryRequest): Observable<PrepareQueryResponse> {
			return this.http.post<PrepareQueryResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.PrepareQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> <code>Query</code> is a synchronous operation that enables you to run a query against your Amazon Timestream data. <code>Query</code> will time out after 60 seconds. You must update the default timeout in the SDK to support a timeout of 60 seconds. See the <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.run-query.html">code sample</a> for details. </p> <p>Your query request will fail in the following cases:</p> <ul> <li> <p> If you submit a <code>Query</code> request with the same client token outside of the 5-minute idempotency window. </p> </li> <li> <p> If you submit a <code>Query</code> request with the same client token, but change other parameters, within the 5-minute idempotency window. </p> </li> <li> <p> If the size of the row (including the query metadata) exceeds 1 MB, then the query will fail with the following error message: </p> <p> <code>Query aborted as max page response size has been exceeded by the output result row</code> </p> </li> <li> <p> If the IAM principal of the query initiator and the result reader are not the same and/or the query initiator and the result reader do not have the same query string in the query requests, the query will fail with an <code>Invalid pagination token</code> error. </p> </li> </ul>
		 * Post #X-Amz-Target=Timestream_20181101.Query
		 * @param {string} MaxRows Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {QueryResponse} Success
		 */
		Query(MaxRows: string | null | undefined, NextToken: string | null | undefined, requestBody: QueryRequest): Observable<QueryResponse> {
			return this.http.post<QueryResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.Query?MaxRows=' + (MaxRows == null ? '' : encodeURIComponent(MaxRows)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associate a set of tags with a Timestream resource. You can then activate these user-defined tags so that they appear on the Billing and Cost Management console for cost allocation tracking.
		 * Post #X-Amz-Target=Timestream_20181101.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the association of tags from a Timestream query resource.
		 * Post #X-Amz-Target=Timestream_20181101.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=Timestream_20181101.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a scheduled query.
		 * Post #X-Amz-Target=Timestream_20181101.UpdateScheduledQuery
		 * @return {void} Success
		 */
		UpdateScheduledQuery(requestBody: UpdateScheduledQueryRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=Timestream_20181101.UpdateScheduledQuery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum CancelQueryX_Amz_Target { 'Timestream_20181101.CancelQuery' = 0 }

	export enum CreateScheduledQueryX_Amz_Target { 'Timestream_20181101.CreateScheduledQuery' = 0 }

	export enum DeleteScheduledQueryX_Amz_Target { 'Timestream_20181101.DeleteScheduledQuery' = 0 }

	export enum DescribeEndpointsX_Amz_Target { 'Timestream_20181101.DescribeEndpoints' = 0 }

	export enum DescribeScheduledQueryX_Amz_Target { 'Timestream_20181101.DescribeScheduledQuery' = 0 }

	export enum ExecuteScheduledQueryX_Amz_Target { 'Timestream_20181101.ExecuteScheduledQuery' = 0 }

	export enum ListScheduledQueriesX_Amz_Target { 'Timestream_20181101.ListScheduledQueries' = 0 }

	export enum ListTagsForResourceX_Amz_Target { 'Timestream_20181101.ListTagsForResource' = 0 }

	export enum PrepareQueryX_Amz_Target { 'Timestream_20181101.PrepareQuery' = 0 }

	export enum QueryX_Amz_Target { 'Timestream_20181101.Query' = 0 }

	export enum TagResourceX_Amz_Target { 'Timestream_20181101.TagResource' = 0 }

	export enum UntagResourceX_Amz_Target { 'Timestream_20181101.UntagResource' = 0 }

	export enum UpdateScheduledQueryX_Amz_Target { 'Timestream_20181101.UpdateScheduledQuery' = 0 }

}

