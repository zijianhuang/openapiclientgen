import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateSnapshotOutput {
	}
	export interface CreateSnapshotOutputFormProperties {
	}
	export function CreateCreateSnapshotOutputFormGroup() {
		return new FormGroup<CreateSnapshotOutputFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
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

	export interface DeleteAppOutput {
	}
	export interface DeleteAppOutputFormProperties {
	}
	export function CreateDeleteAppOutputFormGroup() {
		return new FormGroup<DeleteAppOutputFormProperties>({
		});

	}

	export interface DeleteSimulationOutput {
	}
	export interface DeleteSimulationOutputFormProperties {
	}
	export function CreateDeleteSimulationOutputFormGroup() {
		return new FormGroup<DeleteSimulationOutputFormProperties>({
		});

	}

	export interface DescribeAppOutput {
		Description?: string;
		Domain?: string;
		EndpointInfo?: SimulationAppEndpointInfo;

		/** Options that apply when the app starts. These options override default behavior. */
		LaunchOverrides?: LaunchOverrides;
		Name?: string;
		Simulation?: string;
		Status?: SimulationAppStatus;
		TargetStatus?: SimulationAppTargetStatus;
	}
	export interface DescribeAppOutputFormProperties {
		Description: FormControl<string | null | undefined>,
		Domain: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Simulation: FormControl<string | null | undefined>,
		Status: FormControl<SimulationAppStatus | null | undefined>,
		TargetStatus: FormControl<SimulationAppTargetStatus | null | undefined>,
	}
	export function CreateDescribeAppOutputFormGroup() {
		return new FormGroup<DescribeAppOutputFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Simulation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<SimulationAppStatus | null | undefined>(undefined),
			TargetStatus: new FormControl<SimulationAppTargetStatus | null | undefined>(undefined),
		});

	}


	/** Information about the network endpoint that you can use to connect to your custom or service app. For more information about SimSpace Weaver apps, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_apps">Key concepts: Apps</a> in the <i>SimSpace Weaver User Guide</i>.. */
	export interface SimulationAppEndpointInfo {
		Address?: string;
		IngressPortMappings?: Array<SimulationAppPortMapping>;
	}

	/** Information about the network endpoint that you can use to connect to your custom or service app. For more information about SimSpace Weaver apps, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_apps">Key concepts: Apps</a> in the <i>SimSpace Weaver User Guide</i>.. */
	export interface SimulationAppEndpointInfoFormProperties {
		Address: FormControl<string | null | undefined>,
	}
	export function CreateSimulationAppEndpointInfoFormGroup() {
		return new FormGroup<SimulationAppEndpointInfoFormProperties>({
			Address: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of TCP/UDP ports for a custom or service app. */
	export interface SimulationAppPortMapping {
		Actual?: number | null;
		Declared?: number | null;
	}

	/** A collection of TCP/UDP ports for a custom or service app. */
	export interface SimulationAppPortMappingFormProperties {
		Actual: FormControl<number | null | undefined>,
		Declared: FormControl<number | null | undefined>,
	}
	export function CreateSimulationAppPortMappingFormGroup() {
		return new FormGroup<SimulationAppPortMappingFormProperties>({
			Actual: new FormControl<number | null | undefined>(undefined),
			Declared: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Options that apply when the app starts. These options override default behavior. */
	export interface LaunchOverrides {
		LaunchCommands?: Array<string>;
	}

	/** Options that apply when the app starts. These options override default behavior. */
	export interface LaunchOverridesFormProperties {
	}
	export function CreateLaunchOverridesFormGroup() {
		return new FormGroup<LaunchOverridesFormProperties>({
		});

	}

	export enum SimulationAppStatus { STARTING = 'STARTING', STARTED = 'STARTED', STOPPING = 'STOPPING', STOPPED = 'STOPPED', ERROR = 'ERROR', UNKNOWN = 'UNKNOWN' }

	export enum SimulationAppTargetStatus { UNKNOWN = 'UNKNOWN', STARTED = 'STARTED', STOPPED = 'STOPPED' }

	export interface DescribeSimulationOutput {
		Arn?: string;
		CreationTime?: Date;
		Description?: string;
		ExecutionId?: string;
		LiveSimulationState?: LiveSimulationState;
		LoggingConfiguration?: LoggingConfiguration;
		MaximumDuration?: string;
		Name?: string;
		RoleArn?: string;
		SchemaError?: string;
		SchemaS3Location?: S3Location;

		/** A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip files and schema file. For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"> <i>Amazon Simple Storage Service User Guide</i> </a>. */
		SnapshotS3Location?: S3Location;
		StartError?: string;
		Status?: SimulationStatus;
		TargetStatus?: SimulationTargetStatus;
	}
	export interface DescribeSimulationOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		ExecutionId: FormControl<string | null | undefined>,
		MaximumDuration: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SchemaError: FormControl<string | null | undefined>,
		StartError: FormControl<string | null | undefined>,
		Status: FormControl<SimulationStatus | null | undefined>,
		TargetStatus: FormControl<SimulationTargetStatus | null | undefined>,
	}
	export function CreateDescribeSimulationOutputFormGroup() {
		return new FormGroup<DescribeSimulationOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			ExecutionId: new FormControl<string | null | undefined>(undefined),
			MaximumDuration: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SchemaError: new FormControl<string | null | undefined>(undefined),
			StartError: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<SimulationStatus | null | undefined>(undefined),
			TargetStatus: new FormControl<SimulationTargetStatus | null | undefined>(undefined),
		});

	}


	/** A collection of additional state information, such as domain and clock configuration. */
	export interface LiveSimulationState {
		Clocks?: Array<SimulationClock>;
		Domains?: Array<Domain>;
	}

	/** A collection of additional state information, such as domain and clock configuration. */
	export interface LiveSimulationStateFormProperties {
	}
	export function CreateLiveSimulationStateFormGroup() {
		return new FormGroup<LiveSimulationStateFormProperties>({
		});

	}


	/** Status information about the simulation clock. */
	export interface SimulationClock {
		Status?: ClockStatus;
		TargetStatus?: SimulationAppTargetStatus;
	}

	/** Status information about the simulation clock. */
	export interface SimulationClockFormProperties {
		Status: FormControl<ClockStatus | null | undefined>,
		TargetStatus: FormControl<SimulationAppTargetStatus | null | undefined>,
	}
	export function CreateSimulationClockFormGroup() {
		return new FormGroup<SimulationClockFormProperties>({
			Status: new FormControl<ClockStatus | null | undefined>(undefined),
			TargetStatus: new FormControl<SimulationAppTargetStatus | null | undefined>(undefined),
		});

	}

	export enum ClockStatus { UNKNOWN = 'UNKNOWN', STARTING = 'STARTING', STARTED = 'STARTED', STOPPING = 'STOPPING', STOPPED = 'STOPPED' }


	/** <p>A collection of app instances that run the same executable app code and have the same launch options and commands.</p> <p>For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_domains">Key concepts: Domains</a> in the <i>SimSpace Weaver User Guide</i>.</p> */
	export interface Domain {
		Lifecycle?: LifecycleManagementStrategy;
		Name?: string;
	}

	/** <p>A collection of app instances that run the same executable app code and have the same launch options and commands.</p> <p>For more information about domains, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/what-is_key-concepts.html#what-is_key-concepts_domains">Key concepts: Domains</a> in the <i>SimSpace Weaver User Guide</i>.</p> */
	export interface DomainFormProperties {
		Lifecycle: FormControl<LifecycleManagementStrategy | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDomainFormGroup() {
		return new FormGroup<DomainFormProperties>({
			Lifecycle: new FormControl<LifecycleManagementStrategy | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LifecycleManagementStrategy { Unknown = 'Unknown', PerWorker = 'PerWorker', BySpatialSubdivision = 'BySpatialSubdivision', ByRequest = 'ByRequest' }


	/** The logging configuration for a simulation. */
	export interface LoggingConfiguration {
		Destinations?: Array<LogDestination>;
	}

	/** The logging configuration for a simulation. */
	export interface LoggingConfigurationFormProperties {
	}
	export function CreateLoggingConfigurationFormGroup() {
		return new FormGroup<LoggingConfigurationFormProperties>({
		});

	}


	/** The location where SimSpace Weaver sends simulation log data. */
	export interface LogDestination {
		CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
	}

	/** The location where SimSpace Weaver sends simulation log data. */
	export interface LogDestinationFormProperties {
	}
	export function CreateLogDestinationFormGroup() {
		return new FormGroup<LogDestinationFormProperties>({
		});

	}


	/** The Amazon CloudWatch Logs log group for the simulation. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>. */
	export interface CloudWatchLogsLogGroup {
		LogGroupArn?: string;
	}

	/** The Amazon CloudWatch Logs log group for the simulation. For more information about log groups, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working with log groups and log streams</a> in the <i>Amazon CloudWatch Logs User Guide</i>. */
	export interface CloudWatchLogsLogGroupFormProperties {
		LogGroupArn: FormControl<string | null | undefined>,
	}
	export function CreateCloudWatchLogsLogGroupFormGroup() {
		return new FormGroup<CloudWatchLogsLogGroupFormProperties>({
			LogGroupArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip files and schema file. For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"> <i>Amazon Simple Storage Service User Guide</i> </a>. */
	export interface S3Location {
		BucketName?: string;
		ObjectKey?: string;
	}

	/** A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip files and schema file. For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"> <i>Amazon Simple Storage Service User Guide</i> </a>. */
	export interface S3LocationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ObjectKey: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ObjectKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SimulationStatus { UNKNOWN = 'UNKNOWN', STARTING = 'STARTING', STARTED = 'STARTED', STOPPING = 'STOPPING', STOPPED = 'STOPPED', FAILED = 'FAILED', DELETING = 'DELETING', DELETED = 'DELETED', SNAPSHOT_IN_PROGRESS = 'SNAPSHOT_IN_PROGRESS' }

	export enum SimulationTargetStatus { UNKNOWN = 'UNKNOWN', STARTED = 'STARTED', STOPPED = 'STOPPED', DELETED = 'DELETED' }

	export interface ListAppsOutput {
		Apps?: Array<SimulationAppMetadata>;
		NextToken?: string;
	}
	export interface ListAppsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListAppsOutputFormGroup() {
		return new FormGroup<ListAppsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of metadata about the app. */
	export interface SimulationAppMetadata {
		Domain?: string;
		Name?: string;
		Simulation?: string;
		Status?: SimulationAppStatus;
		TargetStatus?: SimulationAppTargetStatus;
	}

	/** A collection of metadata about the app. */
	export interface SimulationAppMetadataFormProperties {
		Domain: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Simulation: FormControl<string | null | undefined>,
		Status: FormControl<SimulationAppStatus | null | undefined>,
		TargetStatus: FormControl<SimulationAppTargetStatus | null | undefined>,
	}
	export function CreateSimulationAppMetadataFormGroup() {
		return new FormGroup<SimulationAppMetadataFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Simulation: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<SimulationAppStatus | null | undefined>(undefined),
			TargetStatus: new FormControl<SimulationAppTargetStatus | null | undefined>(undefined),
		});

	}

	export interface ListSimulationsOutput {
		NextToken?: string;
		Simulations?: Array<SimulationMetadata>;
	}
	export interface ListSimulationsOutputFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSimulationsOutputFormGroup() {
		return new FormGroup<ListSimulationsOutputFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of data about the simulation. */
	export interface SimulationMetadata {
		Arn?: string;
		CreationTime?: Date;
		Name?: string;
		Status?: SimulationStatus;
		TargetStatus?: SimulationTargetStatus;
	}

	/** A collection of data about the simulation. */
	export interface SimulationMetadataFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Status: FormControl<SimulationStatus | null | undefined>,
		TargetStatus: FormControl<SimulationTargetStatus | null | undefined>,
	}
	export function CreateSimulationMetadataFormGroup() {
		return new FormGroup<SimulationMetadataFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<SimulationStatus | null | undefined>(undefined),
			TargetStatus: new FormControl<SimulationTargetStatus | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceOutput {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceOutputFormProperties {
	}
	export function CreateListTagsForResourceOutputFormGroup() {
		return new FormGroup<ListTagsForResourceOutputFormProperties>({
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

	export interface StartAppOutput {
		Domain?: string;
		Name?: string;
		Simulation?: string;
	}
	export interface StartAppOutputFormProperties {
		Domain: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStartAppOutputFormGroup() {
		return new FormGroup<StartAppOutputFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Simulation: new FormControl<string | null | undefined>(undefined),
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

	export interface StartClockOutput {
	}
	export interface StartClockOutputFormProperties {
	}
	export function CreateStartClockOutputFormGroup() {
		return new FormGroup<StartClockOutputFormProperties>({
		});

	}

	export interface StartSimulationOutput {
		Arn?: string;
		CreationTime?: Date;
		ExecutionId?: string;
	}
	export interface StartSimulationOutputFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ExecutionId: FormControl<string | null | undefined>,
	}
	export function CreateStartSimulationOutputFormGroup() {
		return new FormGroup<StartSimulationOutputFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ExecutionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopAppOutput {
	}
	export interface StopAppOutputFormProperties {
	}
	export function CreateStopAppOutputFormGroup() {
		return new FormGroup<StopAppOutputFormProperties>({
		});

	}

	export interface StopClockOutput {
	}
	export interface StopClockOutputFormProperties {
	}
	export function CreateStopClockOutputFormGroup() {
		return new FormGroup<StopClockOutputFormProperties>({
		});

	}

	export interface StopSimulationOutput {
	}
	export interface StopSimulationOutputFormProperties {
	}
	export function CreateStopSimulationOutputFormGroup() {
		return new FormGroup<StopSimulationOutputFormProperties>({
		});

	}

	export interface TagResourceOutput {
	}
	export interface TagResourceOutputFormProperties {
	}
	export function CreateTagResourceOutputFormGroup() {
		return new FormGroup<TagResourceOutputFormProperties>({
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

	export interface UntagResourceOutput {
	}
	export interface UntagResourceOutputFormProperties {
	}
	export function CreateUntagResourceOutputFormGroup() {
		return new FormGroup<UntagResourceOutputFormProperties>({
		});

	}

	export enum ClockTargetStatus { UNKNOWN = 'UNKNOWN', STARTED = 'STARTED', STOPPED = 'STOPPED' }


	/** An Amazon S3 bucket and optional folder (object key prefix) where SimSpace Weaver creates a file. */
	export interface S3Destination {
		BucketName?: string;
		ObjectKeyPrefix?: string;
	}

	/** An Amazon S3 bucket and optional folder (object key prefix) where SimSpace Weaver creates a file. */
	export interface S3DestinationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ObjectKeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateS3DestinationFormGroup() {
		return new FormGroup<S3DestinationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ObjectKeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateSnapshotInput {

		/** Required */
		Destination: S3Destination;

		/** Required */
		Simulation: string;
	}
	export interface CreateSnapshotInputFormProperties {

		/** Required */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotInputFormGroup() {
		return new FormGroup<CreateSnapshotInputFormProperties>({
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAppInput {
	}
	export interface DeleteAppInputFormProperties {
	}
	export function CreateDeleteAppInputFormGroup() {
		return new FormGroup<DeleteAppInputFormProperties>({
		});

	}

	export interface DeleteSimulationInput {
	}
	export interface DeleteSimulationInputFormProperties {
	}
	export function CreateDeleteSimulationInputFormGroup() {
		return new FormGroup<DeleteSimulationInputFormProperties>({
		});

	}

	export interface DescribeAppInput {
	}
	export interface DescribeAppInputFormProperties {
	}
	export function CreateDescribeAppInputFormGroup() {
		return new FormGroup<DescribeAppInputFormProperties>({
		});

	}

	export interface DescribeSimulationInput {
	}
	export interface DescribeSimulationInputFormProperties {
	}
	export function CreateDescribeSimulationInputFormGroup() {
		return new FormGroup<DescribeSimulationInputFormProperties>({
		});

	}

	export interface ListAppsInput {
	}
	export interface ListAppsInputFormProperties {
	}
	export function CreateListAppsInputFormGroup() {
		return new FormGroup<ListAppsInputFormProperties>({
		});

	}

	export interface ListSimulationsInput {
	}
	export interface ListSimulationsInputFormProperties {
	}
	export function CreateListSimulationsInputFormGroup() {
		return new FormGroup<ListSimulationsInputFormProperties>({
		});

	}

	export interface ListTagsForResourceInput {
	}
	export interface ListTagsForResourceInputFormProperties {
	}
	export function CreateListTagsForResourceInputFormGroup() {
		return new FormGroup<ListTagsForResourceInputFormProperties>({
		});

	}

	export interface StartAppInput {
		ClientToken?: string;
		Description?: string;

		/** Required */
		Domain: string;

		/** Options that apply when the app starts. These options override default behavior. */
		LaunchOverrides?: LaunchOverrides;

		/** Required */
		Name: string;

		/** Required */
		Simulation: string;
	}
	export interface StartAppInputFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Domain: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStartAppInputFormGroup() {
		return new FormGroup<StartAppInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartClockInput {

		/** Required */
		Simulation: string;
	}
	export interface StartClockInputFormProperties {

		/** Required */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStartClockInputFormGroup() {
		return new FormGroup<StartClockInputFormProperties>({
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartSimulationInput {
		ClientToken?: string;
		Description?: string;
		MaximumDuration?: string;

		/** Required */
		Name: string;

		/** Required */
		RoleArn: string;
		SchemaS3Location?: S3Location;
		SnapshotS3Location?: S3Location;
		Tags?: TagMap;
	}
	export interface StartSimulationInputFormProperties {
		ClientToken: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		MaximumDuration: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateStartSimulationInputFormGroup() {
		return new FormGroup<StartSimulationInputFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			MaximumDuration: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopAppInput {

		/** Required */
		App: string;

		/** Required */
		Domain: string;

		/** Required */
		Simulation: string;
	}
	export interface StopAppInputFormProperties {

		/** Required */
		App: FormControl<string | null | undefined>,

		/** Required */
		Domain: FormControl<string | null | undefined>,

		/** Required */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStopAppInputFormGroup() {
		return new FormGroup<StopAppInputFormProperties>({
			App: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopClockInput {

		/** Required */
		Simulation: string;
	}
	export interface StopClockInputFormProperties {

		/** Required */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStopClockInputFormGroup() {
		return new FormGroup<StopClockInputFormProperties>({
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopSimulationInput {

		/** Required */
		Simulation: string;
	}
	export interface StopSimulationInputFormProperties {

		/** Required */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStopSimulationInputFormGroup() {
		return new FormGroup<StopSimulationInputFormProperties>({
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TagResourceInput {

		/** Required */
		Tags: TagMap;
	}
	export interface TagResourceInputFormProperties {
	}
	export function CreateTagResourceInputFormGroup() {
		return new FormGroup<TagResourceInputFormProperties>({
		});

	}

	export interface UntagResourceInput {
	}
	export interface UntagResourceInputFormProperties {
	}
	export function CreateUntagResourceInputFormGroup() {
		return new FormGroup<UntagResourceInputFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Creates a snapshot of the specified simulation. A snapshot is a file that contains simulation state data at a specific time. The state data saved in a snapshot includes entity data from the State Fabric, the simulation configuration specified in the schema, and the clock tick number. You can use the snapshot to initialize a new simulation. For more information about snapshots, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/working-with_snapshots.html">Snapshots</a> in the <i>SimSpace Weaver User Guide</i>. </p> <p>You specify a <code>Destination</code> when you create a snapshot. The <code>Destination</code> is the name of an Amazon S3 bucket and an optional <code>ObjectKeyPrefix</code>. The <code>ObjectKeyPrefix</code> is usually the name of a folder in the bucket. SimSpace Weaver creates a <code>snapshot</code> folder inside the <code>Destination</code> and places the snapshot file there.</p> <p>The snapshot file is an Amazon S3 object. It has an object key with the form: <code> <i>object-key-prefix</i>/snapshot/<i>simulation-name</i>-<i>YYMMdd</i>-<i>HHmm</i>-<i>ss</i>.zip</code>, where: </p> <ul> <li> <p> <code> <i>YY</i> </code> is the 2-digit year</p> </li> <li> <p> <code> <i>MM</i> </code> is the 2-digit month</p> </li> <li> <p> <code> <i>dd</i> </code> is the 2-digit day of the month</p> </li> <li> <p> <code> <i>HH</i> </code> is the 2-digit hour (24-hour clock)</p> </li> <li> <p> <code> <i>mm</i> </code> is the 2-digit minutes</p> </li> <li> <p> <code> <i>ss</i> </code> is the 2-digit seconds</p> </li> </ul>
		 * Post createsnapshot
		 * @return {CreateSnapshotOutput} Success
		 */
		CreateSnapshot(requestBody: CreateSnapshotPostBody): Observable<CreateSnapshotOutput> {
			return this.http.post<CreateSnapshotOutput>(this.baseUri + 'createsnapshot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the instance of the given custom app.
		 * Delete deleteapp#app&domain&simulation
		 * @param {string} app The name of the app.
		 *     Min length: 1    Max length: 64
		 * @param {string} domain The name of the domain of the app.
		 *     Min length: 1    Max length: 64
		 * @param {string} simulation The name of the simulation of the app.
		 *     Min length: 1    Max length: 64
		 * @return {DeleteAppOutput} Success
		 */
		DeleteApp(app: string, domain: string, simulation: string): Observable<DeleteAppOutput> {
			return this.http.delete<DeleteAppOutput>(this.baseUri + 'deleteapp#app&domain&simulation?app=' + (app == null ? '' : encodeURIComponent(app)) + '&domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&simulation=' + (simulation == null ? '' : encodeURIComponent(simulation)), {});
		}

		/**
		 * <p>Deletes all SimSpace Weaver resources assigned to the given simulation.</p> <note> <p>Your simulation uses resources in other Amazon Web Services. This API operation doesn't delete resources in other Amazon Web Services.</p> </note>
		 * Delete deletesimulation#simulation
		 * @param {string} simulation The name of the simulation.
		 *     Min length: 1    Max length: 64
		 * @return {DeleteSimulationOutput} Success
		 */
		DeleteSimulation(simulation: string): Observable<DeleteSimulationOutput> {
			return this.http.delete<DeleteSimulationOutput>(this.baseUri + 'deletesimulation#simulation?simulation=' + (simulation == null ? '' : encodeURIComponent(simulation)), {});
		}

		/**
		 * Returns the state of the given custom app.
		 * Get describeapp#app&domain&simulation
		 * @param {string} app The name of the app.
		 *     Min length: 1    Max length: 256
		 * @param {string} domain The name of the domain of the app.
		 *     Min length: 1    Max length: 64
		 * @param {string} simulation The name of the simulation of the app.
		 *     Min length: 1    Max length: 64
		 * @return {DescribeAppOutput} Success
		 */
		DescribeApp(app: string, domain: string, simulation: string): Observable<DescribeAppOutput> {
			return this.http.get<DescribeAppOutput>(this.baseUri + 'describeapp#app&domain&simulation?app=' + (app == null ? '' : encodeURIComponent(app)) + '&domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&simulation=' + (simulation == null ? '' : encodeURIComponent(simulation)), {});
		}

		/**
		 * Returns the current state of the given simulation.
		 * Get describesimulation#simulation
		 * @param {string} simulation The name of the simulation.
		 *     Min length: 1    Max length: 64
		 * @return {DescribeSimulationOutput} Success
		 */
		DescribeSimulation(simulation: string): Observable<DescribeSimulationOutput> {
			return this.http.get<DescribeSimulationOutput>(this.baseUri + 'describesimulation#simulation?simulation=' + (simulation == null ? '' : encodeURIComponent(simulation)), {});
		}

		/**
		 * Lists all custom apps or service apps for the given simulation and domain.
		 * Get listapps#simulation
		 * @param {string} domain The name of the domain that you want to list apps for.
		 *     Min length: 1    Max length: 64
		 * @param {number} maxResults The maximum number of apps to list.
		 *     Minimum: 1
		 * @param {string} nextToken If SimSpace Weaver returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an <i>HTTP 400 ValidationException</i> error.
		 * @param {string} simulation The name of the simulation that you want to list apps for.
		 *     Min length: 1    Max length: 64
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAppsOutput} Success
		 */
		ListApps(domain: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, simulation: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListAppsOutput> {
			return this.http.get<ListAppsOutput>(this.baseUri + 'listapps#simulation?domain=' + (domain == null ? '' : encodeURIComponent(domain)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&simulation=' + (simulation == null ? '' : encodeURIComponent(simulation)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the SimSpace Weaver simulations in the Amazon Web Services account used to make the API call.
		 * Get listsimulations
		 * @param {number} maxResults The maximum number of simulations to list.
		 *     Minimum: 1
		 * @param {string} nextToken If SimSpace Weaver returns <code>nextToken</code>, then there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page, call the operation again using the returned token. Keep all other arguments unchanged. If no results remain, then <code>nextToken</code> is set to <code>null</code>. Each pagination token expires after 24 hours. If you provide a token that isn't valid, then you receive an <i>HTTP 400 ValidationException</i> error.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSimulationsOutput} Success
		 */
		ListSimulations(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSimulationsOutput> {
			return this.http.get<ListSimulationsOutput>(this.baseUri + 'listsimulations?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all tags on a SimSpace Weaver resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 *     Min length: 0    Max length: 1600
		 * @return {ListTagsForResourceOutput} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceOutput> {
			return this.http.get<ListTagsForResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Adds tags to a SimSpace Weaver resource. For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want to add tags to. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 *     Min length: 0    Max length: 1600
		 * @return {TagResourceOutput} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceOutput> {
			return this.http.post<TagResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a custom app with the configuration specified in the simulation schema.
		 * Post startapp
		 * @return {StartAppOutput} Success
		 */
		StartApp(requestBody: StartAppPostBody): Observable<StartAppOutput> {
			return this.http.post<StartAppOutput>(this.baseUri + 'startapp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the simulation clock.
		 * Post startclock
		 * @return {StartClockOutput} Success
		 */
		StartClock(requestBody: StartClockPostBody): Observable<StartClockOutput> {
			return this.http.post<StartClockOutput>(this.baseUri + 'startclock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a simulation with the given name. You must choose to start your simulation from a schema or from a snapshot. For more information about the schema, see the <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/schema-reference.html">schema reference</a> in the <i>SimSpace Weaver User Guide</i>. For more information about snapshots, see <a href="https://docs.aws.amazon.com/simspaceweaver/latest/userguide/working-with_snapshots.html">Snapshots</a> in the <i>SimSpace Weaver User Guide</i>.
		 * Post startsimulation
		 * @return {StartSimulationOutput} Success
		 */
		StartSimulation(requestBody: StartSimulationPostBody): Observable<StartSimulationOutput> {
			return this.http.post<StartSimulationOutput>(this.baseUri + 'startsimulation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the given custom app and shuts down all of its allocated compute resources.
		 * Post stopapp
		 * @return {StopAppOutput} Success
		 */
		StopApp(requestBody: StopAppPostBody): Observable<StopAppOutput> {
			return this.http.post<StopAppOutput>(this.baseUri + 'stopapp', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the simulation clock.
		 * Post stopclock
		 * @return {StopClockOutput} Success
		 */
		StopClock(requestBody: StopClockPostBody): Observable<StopClockOutput> {
			return this.http.post<StopClockOutput>(this.baseUri + 'stopclock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Stops the given simulation.</p> <important> <p>You can't restart a simulation after you stop it. If you want to restart a simulation, then you must stop it, delete it, and start a new instance of it.</p> </important>
		 * Post stopsimulation
		 * @return {StopSimulationOutput} Success
		 */
		StopSimulation(requestBody: StopSimulationPostBody): Observable<StopSimulationOutput> {
			return this.http.post<StopSimulationOutput>(this.baseUri + 'stopsimulation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes tags from a SimSpace Weaver resource. For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want to remove tags from. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
		 *     Min length: 0    Max length: 1600
		 * @param {Array<string>} tagKeys A list of tag keys to remove from the resource.
		 *     Minimum items: 1    Maximum items: 50
		 * @return {UntagResourceOutput} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceOutput> {
			return this.http.delete<UntagResourceOutput>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateSnapshotPostBody {

		/**
		 * An Amazon S3 bucket and optional folder (object key prefix) where SimSpace Weaver creates a file.
		 * Required
		 */
		Destination: CreateSnapshotPostBodyDestination;

		/**
		 * The name of the simulation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: string;
	}
	export interface CreateSnapshotPostBodyFormProperties {

		/**
		 * The name of the simulation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotPostBodyFormGroup() {
		return new FormGroup<CreateSnapshotPostBodyFormProperties>({
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
		});

	}

	export interface CreateSnapshotPostBodyDestination {
		BucketName?: string;
		ObjectKeyPrefix?: string;
	}
	export interface CreateSnapshotPostBodyDestinationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ObjectKeyPrefix: FormControl<string | null | undefined>,
	}
	export function CreateCreateSnapshotPostBodyDestinationFormGroup() {
		return new FormGroup<CreateSnapshotPostBodyDestinationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ObjectKeyPrefix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * A list of tags to apply to the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * A list of tags to apply to the resource.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartAppPostBody {

		/**
		 * A value that you provide to ensure that repeated calls to this API operation using the same parameters complete only once. A <code>ClientToken</code> is also known as an <i>idempotency token</i>. A <code>ClientToken</code> expires after 24 hours.
		 * Min length: 32
		 * Max length: 128
		 */
		ClientToken?: string | null;

		/**
		 * The description of the app.
		 * Min length: 0
		 * Max length: 500
		 */
		Description?: string | null;

		/**
		 * The name of the domain of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Domain: string;

		/** Options that apply when the app starts. These options override default behavior. */
		LaunchOverrides?: StartAppPostBodyLaunchOverrides;

		/**
		 * The name of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Name: string;

		/**
		 * The name of the simulation of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: string;
	}
	export interface StartAppPostBodyFormProperties {

		/**
		 * A value that you provide to ensure that repeated calls to this API operation using the same parameters complete only once. A <code>ClientToken</code> is also known as an <i>idempotency token</i>. A <code>ClientToken</code> expires after 24 hours.
		 * Min length: 32
		 * Max length: 128
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the app.
		 * Min length: 0
		 * Max length: 500
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The name of the domain of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Domain: FormControl<string | null | undefined>,

		/**
		 * The name of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The name of the simulation of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStartAppPostBodyFormGroup() {
		return new FormGroup<StartAppPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
		});

	}

	export interface StartAppPostBodyLaunchOverrides {
		LaunchCommands?: Array<string>;
	}
	export interface StartAppPostBodyLaunchOverridesFormProperties {
	}
	export function CreateStartAppPostBodyLaunchOverridesFormGroup() {
		return new FormGroup<StartAppPostBodyLaunchOverridesFormProperties>({
		});

	}

	export interface StartClockPostBody {

		/**
		 * The name of the simulation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: string;
	}
	export interface StartClockPostBodyFormProperties {

		/**
		 * The name of the simulation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStartClockPostBodyFormGroup() {
		return new FormGroup<StartClockPostBodyFormProperties>({
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
		});

	}

	export interface StartSimulationPostBody {

		/**
		 * A value that you provide to ensure that repeated calls to this API operation using the same parameters complete only once. A <code>ClientToken</code> is also known as an <i>idempotency token</i>. A <code>ClientToken</code> expires after 24 hours.
		 * Min length: 32
		 * Max length: 128
		 */
		ClientToken?: string | null;

		/**
		 * The description of the simulation.
		 * Min length: 0
		 * Max length: 500
		 */
		Description?: string | null;

		/**
		 * The maximum running time of the simulation, specified as a number of minutes (m or M), hours (h or H), or days (d or D). The simulation stops when it reaches this limit. The maximum value is <code>14D</code>, or its equivalent in the other units. The default value is <code>14D</code>. A value equivalent to <code>0</code> makes the simulation immediately transition to <code>Stopping</code> as soon as it reaches <code>Started</code>.
		 * Min length: 2
		 * Max length: 6
		 */
		MaximumDuration?: string | null;

		/**
		 * The name of the simulation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Name: string;

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that the simulation assumes to perform actions. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>Identity and Access Management User Guide</i>.
		 * Required
		 * Min length: 0
		 * Max length: 1600
		 */
		RoleArn: string;

		/** A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip files and schema file. For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"> <i>Amazon Simple Storage Service User Guide</i> </a>. */
		SchemaS3Location?: StartSimulationPostBodySchemaS3Location;

		/** A location in Amazon Simple Storage Service (Amazon S3) where SimSpace Weaver stores simulation data, such as your app .zip files and schema file. For more information about Amazon S3, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"> <i>Amazon Simple Storage Service User Guide</i> </a>. */
		SnapshotS3Location?: StartSimulationPostBodySnapshotS3Location;

		/** A list of tags for the simulation. For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. */
		Tags?: {[id: string]: string };
	}
	export interface StartSimulationPostBodyFormProperties {

		/**
		 * A value that you provide to ensure that repeated calls to this API operation using the same parameters complete only once. A <code>ClientToken</code> is also known as an <i>idempotency token</i>. A <code>ClientToken</code> expires after 24 hours.
		 * Min length: 32
		 * Max length: 128
		 */
		ClientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the simulation.
		 * Min length: 0
		 * Max length: 500
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The maximum running time of the simulation, specified as a number of minutes (m or M), hours (h or H), or days (d or D). The simulation stops when it reaches this limit. The maximum value is <code>14D</code>, or its equivalent in the other units. The default value is <code>14D</code>. A value equivalent to <code>0</code> makes the simulation immediately transition to <code>Stopping</code> as soon as it reaches <code>Started</code>.
		 * Min length: 2
		 * Max length: 6
		 */
		MaximumDuration: FormControl<string | null | undefined>,

		/**
		 * The name of the simulation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that the simulation assumes to perform actions. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>. For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the <i>Identity and Access Management User Guide</i>.
		 * Required
		 * Min length: 0
		 * Max length: 1600
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** A list of tags for the simulation. For more information about tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a> in the <i>Amazon Web Services General Reference</i>. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartSimulationPostBodyFormGroup() {
		return new FormGroup<StartSimulationPostBodyFormProperties>({
			ClientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(32), Validators.maxLength(128), Validators.pattern('^[a-zA-Z0-9-]+$')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			MaximumDuration: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(6), Validators.pattern('^\d{1,5}[mhdMHD]$')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1600), Validators.pattern('^arn:(?:aws|aws-cn|aws-us-gov):iam::(\d{12})?:role\/(.+)$')]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartSimulationPostBodySchemaS3Location {
		BucketName?: string;
		ObjectKey?: string;
	}
	export interface StartSimulationPostBodySchemaS3LocationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ObjectKey: FormControl<string | null | undefined>,
	}
	export function CreateStartSimulationPostBodySchemaS3LocationFormGroup() {
		return new FormGroup<StartSimulationPostBodySchemaS3LocationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ObjectKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartSimulationPostBodySnapshotS3Location {
		BucketName?: string;
		ObjectKey?: string;
	}
	export interface StartSimulationPostBodySnapshotS3LocationFormProperties {
		BucketName: FormControl<string | null | undefined>,
		ObjectKey: FormControl<string | null | undefined>,
	}
	export function CreateStartSimulationPostBodySnapshotS3LocationFormGroup() {
		return new FormGroup<StartSimulationPostBodySnapshotS3LocationFormProperties>({
			BucketName: new FormControl<string | null | undefined>(undefined),
			ObjectKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopAppPostBody {

		/**
		 * The name of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		App: string;

		/**
		 * The name of the domain of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Domain: string;

		/**
		 * The name of the simulation of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: string;
	}
	export interface StopAppPostBodyFormProperties {

		/**
		 * The name of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		App: FormControl<string | null | undefined>,

		/**
		 * The name of the domain of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Domain: FormControl<string | null | undefined>,

		/**
		 * The name of the simulation of the app.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStopAppPostBodyFormGroup() {
		return new FormGroup<StopAppPostBodyFormProperties>({
			App: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
		});

	}

	export interface StopClockPostBody {

		/**
		 * The name of the simulation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: string;
	}
	export interface StopClockPostBodyFormProperties {

		/**
		 * The name of the simulation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStopClockPostBodyFormGroup() {
		return new FormGroup<StopClockPostBodyFormProperties>({
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
		});

	}

	export interface StopSimulationPostBody {

		/**
		 * The name of the simulation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: string;
	}
	export interface StopSimulationPostBodyFormProperties {

		/**
		 * The name of the simulation.
		 * Required
		 * Min length: 1
		 * Max length: 64
		 */
		Simulation: FormControl<string | null | undefined>,
	}
	export function CreateStopSimulationPostBodyFormGroup() {
		return new FormGroup<StopSimulationPostBodyFormProperties>({
			Simulation: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(64), Validators.pattern('^[a-zA-Z0-9_.-]+$')]),
		});

	}

}

