import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateCreatedArtifactResult {
	}
	export interface AssociateCreatedArtifactResultFormProperties {
	}
	export function CreateAssociateCreatedArtifactResultFormGroup() {
		return new FormGroup<AssociateCreatedArtifactResultFormProperties>({
		});

	}

	export interface AssociateCreatedArtifactRequest {

		/** Required */
		ProgressUpdateStream: string;

		/** Required */
		MigrationTaskName: string;

		/** Required */
		CreatedArtifact: CreatedArtifact;
		DryRun?: boolean | null;
	}
	export interface AssociateCreatedArtifactRequestFormProperties {

		/** Required */
		ProgressUpdateStream: FormControl<string | null | undefined>,

		/** Required */
		MigrationTaskName: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociateCreatedArtifactRequestFormGroup() {
		return new FormGroup<AssociateCreatedArtifactRequestFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.). */
	export interface CreatedArtifact {

		/** Required */
		Name: string;
		Description?: string;
	}

	/** An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.). */
	export interface CreatedArtifactFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreatedArtifactFormGroup() {
		return new FormGroup<CreatedArtifactFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
		});

	}

	export interface DryRunOperation {
	}
	export interface DryRunOperationFormProperties {
	}
	export function CreateDryRunOperationFormGroup() {
		return new FormGroup<DryRunOperationFormProperties>({
		});

	}

	export interface UnauthorizedOperation {
	}
	export interface UnauthorizedOperationFormProperties {
	}
	export function CreateUnauthorizedOperationFormGroup() {
		return new FormGroup<UnauthorizedOperationFormProperties>({
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
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

	export interface HomeRegionNotSetException {
	}
	export interface HomeRegionNotSetExceptionFormProperties {
	}
	export function CreateHomeRegionNotSetExceptionFormGroup() {
		return new FormGroup<HomeRegionNotSetExceptionFormProperties>({
		});

	}

	export interface AssociateDiscoveredResourceResult {
	}
	export interface AssociateDiscoveredResourceResultFormProperties {
	}
	export function CreateAssociateDiscoveredResourceResultFormGroup() {
		return new FormGroup<AssociateDiscoveredResourceResultFormProperties>({
		});

	}

	export interface AssociateDiscoveredResourceRequest {

		/** Required */
		ProgressUpdateStream: string;

		/** Required */
		MigrationTaskName: string;

		/** Required */
		DiscoveredResource: DiscoveredResource;
		DryRun?: boolean | null;
	}
	export interface AssociateDiscoveredResourceRequestFormProperties {

		/** Required */
		ProgressUpdateStream: FormControl<string | null | undefined>,

		/** Required */
		MigrationTaskName: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateAssociateDiscoveredResourceRequestFormGroup() {
		return new FormGroup<AssociateDiscoveredResourceRequestFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Object representing the on-premises resource being migrated. */
	export interface DiscoveredResource {

		/** Required */
		ConfigurationId: string;
		Description?: string;
	}

	/** Object representing the on-premises resource being migrated. */
	export interface DiscoveredResourceFormProperties {

		/** Required */
		ConfigurationId: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
	}
	export function CreateDiscoveredResourceFormGroup() {
		return new FormGroup<DiscoveredResourceFormProperties>({
			ConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyErrorException {
	}
	export interface PolicyErrorExceptionFormProperties {
	}
	export function CreatePolicyErrorExceptionFormGroup() {
		return new FormGroup<PolicyErrorExceptionFormProperties>({
		});

	}

	export interface CreateProgressUpdateStreamResult {
	}
	export interface CreateProgressUpdateStreamResultFormProperties {
	}
	export function CreateCreateProgressUpdateStreamResultFormGroup() {
		return new FormGroup<CreateProgressUpdateStreamResultFormProperties>({
		});

	}

	export interface CreateProgressUpdateStreamRequest {

		/** Required */
		ProgressUpdateStreamName: string;
		DryRun?: boolean | null;
	}
	export interface CreateProgressUpdateStreamRequestFormProperties {

		/** Required */
		ProgressUpdateStreamName: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateProgressUpdateStreamRequestFormGroup() {
		return new FormGroup<CreateProgressUpdateStreamRequestFormProperties>({
			ProgressUpdateStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteProgressUpdateStreamResult {
	}
	export interface DeleteProgressUpdateStreamResultFormProperties {
	}
	export function CreateDeleteProgressUpdateStreamResultFormGroup() {
		return new FormGroup<DeleteProgressUpdateStreamResultFormProperties>({
		});

	}

	export interface DeleteProgressUpdateStreamRequest {

		/** Required */
		ProgressUpdateStreamName: string;
		DryRun?: boolean | null;
	}
	export interface DeleteProgressUpdateStreamRequestFormProperties {

		/** Required */
		ProgressUpdateStreamName: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteProgressUpdateStreamRequestFormGroup() {
		return new FormGroup<DeleteProgressUpdateStreamRequestFormProperties>({
			ProgressUpdateStreamName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeApplicationStateResult {
		ApplicationStatus?: ApplicationStatus;
		LastUpdatedTime?: Date;
	}
	export interface DescribeApplicationStateResultFormProperties {
		ApplicationStatus: FormControl<ApplicationStatus | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeApplicationStateResultFormGroup() {
		return new FormGroup<DescribeApplicationStateResultFormProperties>({
			ApplicationStatus: new FormControl<ApplicationStatus | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum ApplicationStatus { NOT_STARTED = 0, IN_PROGRESS = 1, COMPLETED = 2 }

	export interface DescribeApplicationStateRequest {

		/** Required */
		ApplicationId: string;
	}
	export interface DescribeApplicationStateRequestFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeApplicationStateRequestFormGroup() {
		return new FormGroup<DescribeApplicationStateRequestFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeMigrationTaskResult {
		MigrationTask?: MigrationTask;
	}
	export interface DescribeMigrationTaskResultFormProperties {
	}
	export function CreateDescribeMigrationTaskResultFormGroup() {
		return new FormGroup<DescribeMigrationTaskResultFormProperties>({
		});

	}


	/** Represents a migration task in a migration tool. */
	export interface MigrationTask {
		ProgressUpdateStream?: string;
		MigrationTaskName?: string;
		Task?: Task;
		UpdateDateTime?: Date;
		ResourceAttributeList?: Array<ResourceAttribute>;
	}

	/** Represents a migration task in a migration tool. */
	export interface MigrationTaskFormProperties {
		ProgressUpdateStream: FormControl<string | null | undefined>,
		MigrationTaskName: FormControl<string | null | undefined>,
		UpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateMigrationTaskFormGroup() {
		return new FormGroup<MigrationTaskFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined),
			UpdateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Task object encapsulating task information. */
	export interface Task {

		/** Required */
		Status: Status;
		StatusDetail?: string;
		ProgressPercent?: number | null;
	}

	/** Task object encapsulating task information. */
	export interface TaskFormProperties {

		/** Required */
		Status: FormControl<Status | null | undefined>,
		StatusDetail: FormControl<string | null | undefined>,
		ProgressPercent: FormControl<number | null | undefined>,
	}
	export function CreateTaskFormGroup() {
		return new FormGroup<TaskFormProperties>({
			Status: new FormControl<Status | null | undefined>(undefined, [Validators.required]),
			StatusDetail: new FormControl<string | null | undefined>(undefined),
			ProgressPercent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Status { NOT_STARTED = 0, IN_PROGRESS = 1, FAILED = 2, COMPLETED = 3 }


	/** <p>Attribute associated with a resource.</p> <p>Note the corresponding format required per type listed below:</p> <dl> <dt>IPV4</dt> <dd> <p> <code>x.x.x.x</code> </p> <p> <i>where x is an integer in the range [0,255]</i> </p> </dd> <dt>IPV6</dt> <dd> <p> <code>y : y : y : y : y : y : y : y</code> </p> <p> <i>where y is a hexadecimal between 0 and FFFF. [0, FFFF]</i> </p> </dd> <dt>MAC_ADDRESS</dt> <dd> <p> <code>^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$</code> </p> </dd> <dt>FQDN</dt> <dd> <p> <code>^[^&lt;&gt;{}\\\\/?,=\\p{Cntrl}]{1,256}$</code> </p> </dd> </dl> */
	export interface ResourceAttribute {

		/** Required */
		Type: ResourceAttributeType;

		/** Required */
		Value: string;
	}

	/** <p>Attribute associated with a resource.</p> <p>Note the corresponding format required per type listed below:</p> <dl> <dt>IPV4</dt> <dd> <p> <code>x.x.x.x</code> </p> <p> <i>where x is an integer in the range [0,255]</i> </p> </dd> <dt>IPV6</dt> <dd> <p> <code>y : y : y : y : y : y : y : y</code> </p> <p> <i>where y is a hexadecimal between 0 and FFFF. [0, FFFF]</i> </p> </dd> <dt>MAC_ADDRESS</dt> <dd> <p> <code>^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$</code> </p> </dd> <dt>FQDN</dt> <dd> <p> <code>^[^&lt;&gt;{}\\\\/?,=\\p{Cntrl}]{1,256}$</code> </p> </dd> </dl> */
	export interface ResourceAttributeFormProperties {

		/** Required */
		Type: FormControl<ResourceAttributeType | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateResourceAttributeFormGroup() {
		return new FormGroup<ResourceAttributeFormProperties>({
			Type: new FormControl<ResourceAttributeType | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceAttributeType { IPV4_ADDRESS = 0, IPV6_ADDRESS = 1, MAC_ADDRESS = 2, FQDN = 3, VM_MANAGER_ID = 4, VM_MANAGED_OBJECT_REFERENCE = 5, VM_NAME = 6, VM_PATH = 7, BIOS_ID = 8, MOTHERBOARD_SERIAL_NUMBER = 9 }

	export interface DescribeMigrationTaskRequest {

		/** Required */
		ProgressUpdateStream: string;

		/** Required */
		MigrationTaskName: string;
	}
	export interface DescribeMigrationTaskRequestFormProperties {

		/** Required */
		ProgressUpdateStream: FormControl<string | null | undefined>,

		/** Required */
		MigrationTaskName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeMigrationTaskRequestFormGroup() {
		return new FormGroup<DescribeMigrationTaskRequestFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DisassociateCreatedArtifactResult {
	}
	export interface DisassociateCreatedArtifactResultFormProperties {
	}
	export function CreateDisassociateCreatedArtifactResultFormGroup() {
		return new FormGroup<DisassociateCreatedArtifactResultFormProperties>({
		});

	}

	export interface DisassociateCreatedArtifactRequest {

		/** Required */
		ProgressUpdateStream: string;

		/** Required */
		MigrationTaskName: string;

		/** Required */
		CreatedArtifactName: string;
		DryRun?: boolean | null;
	}
	export interface DisassociateCreatedArtifactRequestFormProperties {

		/** Required */
		ProgressUpdateStream: FormControl<string | null | undefined>,

		/** Required */
		MigrationTaskName: FormControl<string | null | undefined>,

		/** Required */
		CreatedArtifactName: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateDisassociateCreatedArtifactRequestFormGroup() {
		return new FormGroup<DisassociateCreatedArtifactRequestFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			CreatedArtifactName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DisassociateDiscoveredResourceResult {
	}
	export interface DisassociateDiscoveredResourceResultFormProperties {
	}
	export function CreateDisassociateDiscoveredResourceResultFormGroup() {
		return new FormGroup<DisassociateDiscoveredResourceResultFormProperties>({
		});

	}

	export interface DisassociateDiscoveredResourceRequest {

		/** Required */
		ProgressUpdateStream: string;

		/** Required */
		MigrationTaskName: string;

		/** Required */
		ConfigurationId: string;
		DryRun?: boolean | null;
	}
	export interface DisassociateDiscoveredResourceRequestFormProperties {

		/** Required */
		ProgressUpdateStream: FormControl<string | null | undefined>,

		/** Required */
		MigrationTaskName: FormControl<string | null | undefined>,

		/** Required */
		ConfigurationId: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateDisassociateDiscoveredResourceRequestFormGroup() {
		return new FormGroup<DisassociateDiscoveredResourceRequestFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ConfigurationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ImportMigrationTaskResult {
	}
	export interface ImportMigrationTaskResultFormProperties {
	}
	export function CreateImportMigrationTaskResultFormGroup() {
		return new FormGroup<ImportMigrationTaskResultFormProperties>({
		});

	}

	export interface ImportMigrationTaskRequest {

		/** Required */
		ProgressUpdateStream: string;

		/** Required */
		MigrationTaskName: string;
		DryRun?: boolean | null;
	}
	export interface ImportMigrationTaskRequestFormProperties {

		/** Required */
		ProgressUpdateStream: FormControl<string | null | undefined>,

		/** Required */
		MigrationTaskName: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateImportMigrationTaskRequestFormGroup() {
		return new FormGroup<ImportMigrationTaskRequestFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ListApplicationStatesResult {
		ApplicationStateList?: Array<ApplicationState>;
		NextToken?: string;
	}
	export interface ListApplicationStatesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationStatesResultFormGroup() {
		return new FormGroup<ListApplicationStatesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent. */
	export interface ApplicationState {
		ApplicationId?: string;
		ApplicationStatus?: ApplicationStatus;
		LastUpdatedTime?: Date;
	}

	/** The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent. */
	export interface ApplicationStateFormProperties {
		ApplicationId: FormControl<string | null | undefined>,
		ApplicationStatus: FormControl<ApplicationStatus | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateApplicationStateFormGroup() {
		return new FormGroup<ApplicationStateFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined),
			ApplicationStatus: new FormControl<ApplicationStatus | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListApplicationStatesRequest {
		ApplicationIds?: Array<string>;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListApplicationStatesRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListApplicationStatesRequestFormGroup() {
		return new FormGroup<ListApplicationStatesRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListCreatedArtifactsResult {
		NextToken?: string;
		CreatedArtifactList?: Array<CreatedArtifact>;
	}
	export interface ListCreatedArtifactsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCreatedArtifactsResultFormGroup() {
		return new FormGroup<ListCreatedArtifactsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListCreatedArtifactsRequest {

		/** Required */
		ProgressUpdateStream: string;

		/** Required */
		MigrationTaskName: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListCreatedArtifactsRequestFormProperties {

		/** Required */
		ProgressUpdateStream: FormControl<string | null | undefined>,

		/** Required */
		MigrationTaskName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListCreatedArtifactsRequestFormGroup() {
		return new FormGroup<ListCreatedArtifactsRequestFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListDiscoveredResourcesResult {
		NextToken?: string;
		DiscoveredResourceList?: Array<DiscoveredResource>;
	}
	export interface ListDiscoveredResourcesResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDiscoveredResourcesResultFormGroup() {
		return new FormGroup<ListDiscoveredResourcesResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDiscoveredResourcesRequest {

		/** Required */
		ProgressUpdateStream: string;

		/** Required */
		MigrationTaskName: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDiscoveredResourcesRequestFormProperties {

		/** Required */
		ProgressUpdateStream: FormControl<string | null | undefined>,

		/** Required */
		MigrationTaskName: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDiscoveredResourcesRequestFormGroup() {
		return new FormGroup<ListDiscoveredResourcesRequestFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListMigrationTasksResult {
		NextToken?: string;
		MigrationTaskSummaryList?: Array<MigrationTaskSummary>;
	}
	export interface ListMigrationTasksResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListMigrationTasksResultFormGroup() {
		return new FormGroup<ListMigrationTasksResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task. */
	export interface MigrationTaskSummary {
		ProgressUpdateStream?: string;
		MigrationTaskName?: string;
		Status?: Status;
		ProgressPercent?: number | null;
		StatusDetail?: string;
		UpdateDateTime?: Date;
	}

	/** MigrationTaskSummary includes <code>MigrationTaskName</code>, <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>, and <code>UpdateDateTime</code> for each task. */
	export interface MigrationTaskSummaryFormProperties {
		ProgressUpdateStream: FormControl<string | null | undefined>,
		MigrationTaskName: FormControl<string | null | undefined>,
		Status: FormControl<Status | null | undefined>,
		ProgressPercent: FormControl<number | null | undefined>,
		StatusDetail: FormControl<string | null | undefined>,
		UpdateDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateMigrationTaskSummaryFormGroup() {
		return new FormGroup<MigrationTaskSummaryFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<Status | null | undefined>(undefined),
			ProgressPercent: new FormControl<number | null | undefined>(undefined),
			StatusDetail: new FormControl<string | null | undefined>(undefined),
			UpdateDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListMigrationTasksRequest {
		NextToken?: string;
		MaxResults?: number | null;
		ResourceName?: string;
	}
	export interface ListMigrationTasksRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		ResourceName: FormControl<string | null | undefined>,
	}
	export function CreateListMigrationTasksRequestFormGroup() {
		return new FormGroup<ListMigrationTasksRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			ResourceName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProgressUpdateStreamsResult {
		ProgressUpdateStreamSummaryList?: Array<ProgressUpdateStreamSummary>;
		NextToken?: string;
	}
	export interface ListProgressUpdateStreamsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProgressUpdateStreamsResultFormGroup() {
		return new FormGroup<ListProgressUpdateStreamsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Summary of the AWS resource used for access control that is implicitly linked to your AWS account. */
	export interface ProgressUpdateStreamSummary {
		ProgressUpdateStreamName?: string;
	}

	/** Summary of the AWS resource used for access control that is implicitly linked to your AWS account. */
	export interface ProgressUpdateStreamSummaryFormProperties {
		ProgressUpdateStreamName: FormControl<string | null | undefined>,
	}
	export function CreateProgressUpdateStreamSummaryFormGroup() {
		return new FormGroup<ProgressUpdateStreamSummaryFormProperties>({
			ProgressUpdateStreamName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListProgressUpdateStreamsRequest {
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListProgressUpdateStreamsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListProgressUpdateStreamsRequestFormGroup() {
		return new FormGroup<ListProgressUpdateStreamsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface NotifyApplicationStateResult {
	}
	export interface NotifyApplicationStateResultFormProperties {
	}
	export function CreateNotifyApplicationStateResultFormGroup() {
		return new FormGroup<NotifyApplicationStateResultFormProperties>({
		});

	}

	export interface NotifyApplicationStateRequest {

		/** Required */
		ApplicationId: string;

		/** Required */
		Status: ApplicationStatus;
		UpdateDateTime?: Date;
		DryRun?: boolean | null;
	}
	export interface NotifyApplicationStateRequestFormProperties {

		/** Required */
		ApplicationId: FormControl<string | null | undefined>,

		/** Required */
		Status: FormControl<ApplicationStatus | null | undefined>,
		UpdateDateTime: FormControl<Date | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateNotifyApplicationStateRequestFormGroup() {
		return new FormGroup<NotifyApplicationStateRequestFormProperties>({
			ApplicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Status: new FormControl<ApplicationStatus | null | undefined>(undefined, [Validators.required]),
			UpdateDateTime: new FormControl<Date | null | undefined>(undefined),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface NotifyMigrationTaskStateResult {
	}
	export interface NotifyMigrationTaskStateResultFormProperties {
	}
	export function CreateNotifyMigrationTaskStateResultFormGroup() {
		return new FormGroup<NotifyMigrationTaskStateResultFormProperties>({
		});

	}

	export interface NotifyMigrationTaskStateRequest {

		/** Required */
		ProgressUpdateStream: string;

		/** Required */
		MigrationTaskName: string;

		/** Required */
		Task: Task;

		/** Required */
		UpdateDateTime: Date;

		/** Required */
		NextUpdateSeconds: number;
		DryRun?: boolean | null;
	}
	export interface NotifyMigrationTaskStateRequestFormProperties {

		/** Required */
		ProgressUpdateStream: FormControl<string | null | undefined>,

		/** Required */
		MigrationTaskName: FormControl<string | null | undefined>,

		/** Required */
		UpdateDateTime: FormControl<Date | null | undefined>,

		/** Required */
		NextUpdateSeconds: FormControl<number | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateNotifyMigrationTaskStateRequestFormGroup() {
		return new FormGroup<NotifyMigrationTaskStateRequestFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UpdateDateTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			NextUpdateSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutResourceAttributesResult {
	}
	export interface PutResourceAttributesResultFormProperties {
	}
	export function CreatePutResourceAttributesResultFormGroup() {
		return new FormGroup<PutResourceAttributesResultFormProperties>({
		});

	}

	export interface PutResourceAttributesRequest {

		/** Required */
		ProgressUpdateStream: string;

		/** Required */
		MigrationTaskName: string;

		/** Required */
		ResourceAttributeList: Array<ResourceAttribute>;
		DryRun?: boolean | null;
	}
	export interface PutResourceAttributesRequestFormProperties {

		/** Required */
		ProgressUpdateStream: FormControl<string | null | undefined>,

		/** Required */
		MigrationTaskName: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreatePutResourceAttributesRequestFormGroup() {
		return new FormGroup<PutResourceAttributesRequestFormProperties>({
			ProgressUpdateStream: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			MigrationTaskName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Associates a created artifact of an AWS cloud resource, the target receiving the migration, with the migration task performed by a migration tool. This API has the following traits:</p> <ul> <li> <p>Migration tools can call the <code>AssociateCreatedArtifact</code> operation to indicate which AWS artifact is associated with a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or DMS endpoint, etc.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact
		 * @return {AssociateCreatedArtifactResult} Success
		 */
		AssociateCreatedArtifact(requestBody: AssociateCreatedArtifactRequest): Observable<AssociateCreatedArtifactResult> {
			return this.http.post<AssociateCreatedArtifactResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.AssociateCreatedArtifact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Associates a discovered resource ID from Application Discovery Service with a migration task.
		 * Post #X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource
		 * @return {AssociateDiscoveredResourceResult} Success
		 */
		AssociateDiscoveredResource(requestBody: AssociateDiscoveredResourceRequest): Observable<AssociateDiscoveredResourceResult> {
			return this.http.post<AssociateDiscoveredResourceResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.AssociateDiscoveredResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a progress update stream which is an AWS resource used for access control as well as a namespace for migration task names that is implicitly linked to your AWS account. It must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
		 * Post #X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream
		 * @return {CreateProgressUpdateStreamResult} Success
		 */
		CreateProgressUpdateStream(requestBody: CreateProgressUpdateStreamRequest): Observable<CreateProgressUpdateStreamResult> {
			return this.http.post<CreateProgressUpdateStreamResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.CreateProgressUpdateStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deletes a progress update stream, including all of its tasks, which was previously created as an AWS resource used for access control. This API has the following traits:</p> <ul> <li> <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the stream name (same as a <code>CreateProgressUpdateStream</code> call).</p> </li> <li> <p>The call will return, and a background process will asynchronously delete the stream and all of its resources (tasks, associated resources, resource attributes, created artifacts).</p> </li> <li> <p>If the stream takes time to be deleted, it might still show up on a <code>ListProgressUpdateStreams</code> call.</p> </li> <li> <p> <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>, <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the tasks belonging to the stream will throw "InvalidInputException" if the stream of the same name is in the process of being deleted.</p> </li> <li> <p>Once the stream and all of its resources are deleted, <code>CreateProgressUpdateStream</code> for a stream of the same name will succeed, and that stream will be an entirely new logical resource (without any resources associated with the old stream).</p> </li> </ul>
		 * Post #X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream
		 * @return {DeleteProgressUpdateStreamResult} Success
		 */
		DeleteProgressUpdateStream(requestBody: DeleteProgressUpdateStreamRequest): Observable<DeleteProgressUpdateStreamResult> {
			return this.http.post<DeleteProgressUpdateStreamResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.DeleteProgressUpdateStream', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the migration status of an application.
		 * Post #X-Amz-Target=AWSMigrationHub.DescribeApplicationState
		 * @return {DescribeApplicationStateResult} Success
		 */
		DescribeApplicationState(requestBody: DescribeApplicationStateRequest): Observable<DescribeApplicationStateResult> {
			return this.http.post<DescribeApplicationStateResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.DescribeApplicationState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all attributes associated with a specific migration task.
		 * Post #X-Amz-Target=AWSMigrationHub.DescribeMigrationTask
		 * @return {DescribeMigrationTaskResult} Success
		 */
		DescribeMigrationTask(requestBody: DescribeMigrationTaskRequest): Observable<DescribeMigrationTaskResult> {
			return this.http.post<DescribeMigrationTaskResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.DescribeMigrationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disassociates a created artifact of an AWS resource with a migration task performed by a migration tool that was previously associated. This API has the following traits:</p> <ul> <li> <p>A migration user can call the <code>DisassociateCreatedArtifacts</code> operation to disassociate a created AWS Artifact from a migration task.</p> </li> <li> <p>The created artifact name must be provided in ARN (Amazon Resource Name) format which will contain information about type and region; for example: <code>arn:aws:ec2:us-east-1:488216288981:image/ami-6d0ba87b</code>.</p> </li> <li> <p>Examples of the AWS resource behind the created artifact are, AMI's, EC2 instance, or RDS instance, etc.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact
		 * @return {DisassociateCreatedArtifactResult} Success
		 */
		DisassociateCreatedArtifact(requestBody: DisassociateCreatedArtifactRequest): Observable<DisassociateCreatedArtifactResult> {
			return this.http.post<DisassociateCreatedArtifactResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.DisassociateCreatedArtifact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disassociate an Application Discovery Service discovered resource from a migration task.
		 * Post #X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource
		 * @return {DisassociateDiscoveredResourceResult} Success
		 */
		DisassociateDiscoveredResource(requestBody: DisassociateDiscoveredResourceRequest): Observable<DisassociateDiscoveredResourceResult> {
			return this.http.post<DisassociateDiscoveredResourceResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.DisassociateDiscoveredResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers a new migration task which represents a server, database, etc., being migrated to AWS by a migration tool.</p> <p>This API is a prerequisite to calling the <code>NotifyMigrationTaskState</code> API as the migration tool must first register the migration task with Migration Hub.</p>
		 * Post #X-Amz-Target=AWSMigrationHub.ImportMigrationTask
		 * @return {ImportMigrationTaskResult} Success
		 */
		ImportMigrationTask(requestBody: ImportMigrationTaskRequest): Observable<ImportMigrationTaskResult> {
			return this.http.post<ImportMigrationTaskResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.ImportMigrationTask', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the migration statuses for your applications. If you use the optional <code>ApplicationIds</code> parameter, only the migration statuses for those applications will be returned.
		 * Post #X-Amz-Target=AWSMigrationHub.ListApplicationStates
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListApplicationStatesResult} Success
		 */
		ListApplicationStates(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListApplicationStatesRequest): Observable<ListApplicationStatesResult> {
			return this.http.post<ListApplicationStatesResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.ListApplicationStates?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists the created artifacts attached to a given migration task in an update stream. This API has the following traits:</p> <ul> <li> <p>Gets the list of the created artifacts while migration is taking place.</p> </li> <li> <p>Shows the artifacts created by the migration tool that was associated by the <code>AssociateCreatedArtifact</code> API. </p> </li> <li> <p>Lists created artifacts in a paginated interface. </p> </li> </ul>
		 * Post #X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListCreatedArtifactsResult} Success
		 */
		ListCreatedArtifacts(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListCreatedArtifactsRequest): Observable<ListCreatedArtifactsResult> {
			return this.http.post<ListCreatedArtifactsResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.ListCreatedArtifacts?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists discovered resources associated with the given <code>MigrationTask</code>.
		 * Post #X-Amz-Target=AWSMigrationHub.ListDiscoveredResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDiscoveredResourcesResult} Success
		 */
		ListDiscoveredResources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDiscoveredResourcesRequest): Observable<ListDiscoveredResourcesResult> {
			return this.http.post<ListDiscoveredResourcesResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.ListDiscoveredResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all, or filtered by resource name, migration tasks associated with the user account making this call. This API has the following traits:</p> <ul> <li> <p>Can show a summary list of the most recent migration tasks.</p> </li> <li> <p>Can show a summary list of migration tasks associated with a given discovered resource.</p> </li> <li> <p>Lists migration tasks in a paginated interface.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSMigrationHub.ListMigrationTasks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListMigrationTasksResult} Success
		 */
		ListMigrationTasks(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListMigrationTasksRequest): Observable<ListMigrationTasksResult> {
			return this.http.post<ListMigrationTasksResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.ListMigrationTasks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists progress update streams associated with the user account making this call.
		 * Post #X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProgressUpdateStreamsResult} Success
		 */
		ListProgressUpdateStreams(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListProgressUpdateStreamsRequest): Observable<ListProgressUpdateStreamsResult> {
			return this.http.post<ListProgressUpdateStreamsResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.ListProgressUpdateStreams?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets the migration state of an application. For a given application identified by the value passed to <code>ApplicationId</code>, its status is set or updated by passing one of three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS | COMPLETED</code>.
		 * Post #X-Amz-Target=AWSMigrationHub.NotifyApplicationState
		 * @return {NotifyApplicationStateResult} Success
		 */
		NotifyApplicationState(requestBody: NotifyApplicationStateRequest): Observable<NotifyApplicationStateResult> {
			return this.http.post<NotifyApplicationStateResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.NotifyApplicationState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Notifies Migration Hub of the current status, progress, or other detail regarding a migration task. This API has the following traits:</p> <ul> <li> <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share the latest progress and status.</p> </li> <li> <p> <code>MigrationTaskName</code> is used for addressing updates to the correct target.</p> </li> <li> <p> <code>ProgressUpdateStream</code> is used for access control and to provide a namespace for each migration tool.</p> </li> </ul>
		 * Post #X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState
		 * @return {NotifyMigrationTaskStateResult} Success
		 */
		NotifyMigrationTaskState(requestBody: NotifyMigrationTaskStateRequest): Observable<NotifyMigrationTaskStateResult> {
			return this.http.post<NotifyMigrationTaskStateResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.NotifyMigrationTaskState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Provides identifying details of the resource being migrated so that it can be associated in the Application Discovery Service repository. This association occurs asynchronously after <code>PutResourceAttributes</code> returns.</p> <important> <ul> <li> <p>Keep in mind that subsequent calls to PutResourceAttributes will override previously stored attributes. For example, if it is first called with a MAC address, but later, it is desired to <i>add</i> an IP address, it will then be required to call it with <i>both</i> the IP and MAC addresses to prevent overriding the MAC address.</p> </li> <li> <p>Note the instructions regarding the special use case of the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#migrationhub-PutResourceAttributes-request-ResourceAttributeList"> <code>ResourceAttributeList</code> </a> parameter when specifying any "VM" related value.</p> </li> </ul> </important> <note> <p>Because this is an asynchronous call, it will always return 200, whether an association occurs or not. To confirm if an association was found based on the provided details, call <code>ListDiscoveredResources</code>.</p> </note>
		 * Post #X-Amz-Target=AWSMigrationHub.PutResourceAttributes
		 * @return {PutResourceAttributesResult} Success
		 */
		PutResourceAttributes(requestBody: PutResourceAttributesRequest): Observable<PutResourceAttributesResult> {
			return this.http.post<PutResourceAttributesResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHub.PutResourceAttributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AssociateCreatedArtifactX_Amz_Target { 'AWSMigrationHub.AssociateCreatedArtifact' = 0 }

	export enum AssociateDiscoveredResourceX_Amz_Target { 'AWSMigrationHub.AssociateDiscoveredResource' = 0 }

	export enum CreateProgressUpdateStreamX_Amz_Target { 'AWSMigrationHub.CreateProgressUpdateStream' = 0 }

	export enum DeleteProgressUpdateStreamX_Amz_Target { 'AWSMigrationHub.DeleteProgressUpdateStream' = 0 }

	export enum DescribeApplicationStateX_Amz_Target { 'AWSMigrationHub.DescribeApplicationState' = 0 }

	export enum DescribeMigrationTaskX_Amz_Target { 'AWSMigrationHub.DescribeMigrationTask' = 0 }

	export enum DisassociateCreatedArtifactX_Amz_Target { 'AWSMigrationHub.DisassociateCreatedArtifact' = 0 }

	export enum DisassociateDiscoveredResourceX_Amz_Target { 'AWSMigrationHub.DisassociateDiscoveredResource' = 0 }

	export enum ImportMigrationTaskX_Amz_Target { 'AWSMigrationHub.ImportMigrationTask' = 0 }

	export enum ListApplicationStatesX_Amz_Target { 'AWSMigrationHub.ListApplicationStates' = 0 }

	export enum ListCreatedArtifactsX_Amz_Target { 'AWSMigrationHub.ListCreatedArtifacts' = 0 }

	export enum ListDiscoveredResourcesX_Amz_Target { 'AWSMigrationHub.ListDiscoveredResources' = 0 }

	export enum ListMigrationTasksX_Amz_Target { 'AWSMigrationHub.ListMigrationTasks' = 0 }

	export enum ListProgressUpdateStreamsX_Amz_Target { 'AWSMigrationHub.ListProgressUpdateStreams' = 0 }

	export enum NotifyApplicationStateX_Amz_Target { 'AWSMigrationHub.NotifyApplicationState' = 0 }

	export enum NotifyMigrationTaskStateX_Amz_Target { 'AWSMigrationHub.NotifyMigrationTaskState' = 0 }

	export enum PutResourceAttributesX_Amz_Target { 'AWSMigrationHub.PutResourceAttributes' = 0 }

}

