import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelBatchJobExecutionResponse {
	}
	export interface CancelBatchJobExecutionResponseFormProperties {
	}
	export function CreateCancelBatchJobExecutionResponseFormGroup() {
		return new FormGroup<CancelBatchJobExecutionResponseFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface CreateApplicationResponse {

		/** Required */
		applicationArn: string;

		/** Required */
		applicationId: string;

		/** Required */
		applicationVersion: number;
	}
	export interface CreateApplicationResponseFormProperties {

		/** Required */
		applicationArn: FormControl<string | null | undefined>,

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		applicationVersion: FormControl<number | null | undefined>,
	}
	export function CreateCreateApplicationResponseFormGroup() {
		return new FormGroup<CreateApplicationResponseFormProperties>({
			applicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
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

	export interface CreateDataSetImportTaskResponse {

		/** Required */
		taskId: string;
	}
	export interface CreateDataSetImportTaskResponseFormProperties {

		/** Required */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSetImportTaskResponseFormGroup() {
		return new FormGroup<CreateDataSetImportTaskResponseFormProperties>({
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Identifies a specific data set to import from an external location. */
	export interface DataSetImportItem {

		/** Required */
		dataSet: DataSet;

		/** Required */
		externalLocation: ExternalLocation;
	}

	/** Identifies a specific data set to import from an external location. */
	export interface DataSetImportItemFormProperties {
	}
	export function CreateDataSetImportItemFormGroup() {
		return new FormGroup<DataSetImportItemFormProperties>({
		});

	}


	/** Defines a data set. */
	export interface DataSet {

		/** Required */
		datasetName: string;

		/** Required */
		datasetOrg: DatasetOrgAttributes;

		/** Required */
		recordLength: RecordLength;
		relativePath?: string;
		storageType?: string;
	}

	/** Defines a data set. */
	export interface DataSetFormProperties {

		/** Required */
		datasetName: FormControl<string | null | undefined>,
		relativePath: FormControl<string | null | undefined>,
		storageType: FormControl<string | null | undefined>,
	}
	export function CreateDataSetFormGroup() {
		return new FormGroup<DataSetFormProperties>({
			datasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			relativePath: new FormControl<string | null | undefined>(undefined),
			storageType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional details about the data set. Different attributes correspond to different data set organizations. The values are populated based on datasetOrg, storageType and backend (Blu Age or Micro Focus). */
	export interface DatasetOrgAttributes {
		gdg?: GdgAttributes;
		po?: PoAttributes;
		ps?: PsAttributes;
		vsam?: VsamAttributes;
	}

	/** Additional details about the data set. Different attributes correspond to different data set organizations. The values are populated based on datasetOrg, storageType and backend (Blu Age or Micro Focus). */
	export interface DatasetOrgAttributesFormProperties {
	}
	export function CreateDatasetOrgAttributesFormGroup() {
		return new FormGroup<DatasetOrgAttributesFormProperties>({
		});

	}


	/** The required attributes for a generation data group data set. A generation data set is one of a collection of successive, historically related, catalogued data sets that together are known as a generation data group (GDG). Use this structure when you want to import a GDG. For more information on GDG, see <a href="https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-generation-data-sets">Generation data sets</a>. */
	export interface GdgAttributes {
		limit?: number | null;
		rollDisposition?: string;
	}

	/** The required attributes for a generation data group data set. A generation data set is one of a collection of successive, historically related, catalogued data sets that together are known as a generation data group (GDG). Use this structure when you want to import a GDG. For more information on GDG, see <a href="https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-generation-data-sets">Generation data sets</a>. */
	export interface GdgAttributesFormProperties {
		limit: FormControl<number | null | undefined>,
		rollDisposition: FormControl<string | null | undefined>,
	}
	export function CreateGdgAttributesFormGroup() {
		return new FormGroup<GdgAttributesFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			rollDisposition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The supported properties for a PO type data set. */
	export interface PoAttributes {
		encoding?: string;

		/** Required */
		format: string;

		/** Required */
		memberFileExtensions: Array<string>;
	}

	/** The supported properties for a PO type data set. */
	export interface PoAttributesFormProperties {
		encoding: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,
	}
	export function CreatePoAttributesFormGroup() {
		return new FormGroup<PoAttributesFormProperties>({
			encoding: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The supported properties for a PS type data set. */
	export interface PsAttributes {
		encoding?: string;

		/** Required */
		format: string;
	}

	/** The supported properties for a PS type data set. */
	export interface PsAttributesFormProperties {
		encoding: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,
	}
	export function CreatePsAttributesFormGroup() {
		return new FormGroup<PsAttributesFormProperties>({
			encoding: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The attributes of a VSAM type data set. */
	export interface VsamAttributes {
		alternateKeys?: Array<AlternateKey>;
		compressed?: boolean | null;
		encoding?: string;

		/** Required */
		format: string;
		primaryKey?: PrimaryKey;
	}

	/** The attributes of a VSAM type data set. */
	export interface VsamAttributesFormProperties {
		compressed: FormControl<boolean | null | undefined>,
		encoding: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,
	}
	export function CreateVsamAttributesFormGroup() {
		return new FormGroup<VsamAttributesFormProperties>({
			compressed: new FormControl<boolean | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines an alternate key. This value is optional. A legacy data set might not have any alternate key defined but if those alternate keys definitions exist, provide them, as some applications will make use of them. */
	export interface AlternateKey {
		allowDuplicates?: boolean | null;

		/** Required */
		length: number;
		name?: string;

		/** Required */
		offset: number;
	}

	/** Defines an alternate key. This value is optional. A legacy data set might not have any alternate key defined but if those alternate keys definitions exist, provide them, as some applications will make use of them. */
	export interface AlternateKeyFormProperties {
		allowDuplicates: FormControl<boolean | null | undefined>,

		/** Required */
		length: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		offset: FormControl<number | null | undefined>,
	}
	export function CreateAlternateKeyFormGroup() {
		return new FormGroup<AlternateKeyFormProperties>({
			allowDuplicates: new FormControl<boolean | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The primary key for a KSDS data set. */
	export interface PrimaryKey {

		/** Required */
		length: number;
		name?: string;

		/** Required */
		offset: number;
	}

	/** The primary key for a KSDS data set. */
	export interface PrimaryKeyFormProperties {

		/** Required */
		length: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		offset: FormControl<number | null | undefined>,
	}
	export function CreatePrimaryKeyFormGroup() {
		return new FormGroup<PrimaryKeyFormProperties>({
			length: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The length of the records in the data set. */
	export interface RecordLength {

		/** Required */
		max: number;

		/** Required */
		min: number;
	}

	/** The length of the records in the data set. */
	export interface RecordLengthFormProperties {

		/** Required */
		max: FormControl<number | null | undefined>,

		/** Required */
		min: FormControl<number | null | undefined>,
	}
	export function CreateRecordLengthFormGroup() {
		return new FormGroup<RecordLengthFormProperties>({
			max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines an external storage location. */
	export interface ExternalLocation {
		s3Location?: string;
	}

	/** Defines an external storage location. */
	export interface ExternalLocationFormProperties {
		s3Location: FormControl<string | null | undefined>,
	}
	export function CreateExternalLocationFormGroup() {
		return new FormGroup<ExternalLocationFormProperties>({
			s3Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentResponse {

		/** Required */
		deploymentId: string;
	}
	export interface CreateDeploymentResponseFormProperties {

		/** Required */
		deploymentId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentResponseFormGroup() {
		return new FormGroup<CreateDeploymentResponseFormProperties>({
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEnvironmentResponse {

		/** Required */
		environmentId: string;
	}
	export interface CreateEnvironmentResponseFormProperties {

		/** Required */
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentResponseFormGroup() {
		return new FormGroup<CreateEnvironmentResponseFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the storage configuration for a runtime environment. */
	export interface StorageConfiguration {
		efs?: EfsStorageConfiguration;
		fsx?: FsxStorageConfiguration;
	}

	/** Defines the storage configuration for a runtime environment. */
	export interface StorageConfigurationFormProperties {
	}
	export function CreateStorageConfigurationFormGroup() {
		return new FormGroup<StorageConfigurationFormProperties>({
		});

	}


	/** Defines the storage configuration for an Amazon EFS file system. */
	export interface EfsStorageConfiguration {

		/** Required */
		fileSystemId: string;

		/** Required */
		mountPoint: string;
	}

	/** Defines the storage configuration for an Amazon EFS file system. */
	export interface EfsStorageConfigurationFormProperties {

		/** Required */
		fileSystemId: FormControl<string | null | undefined>,

		/** Required */
		mountPoint: FormControl<string | null | undefined>,
	}
	export function CreateEfsStorageConfigurationFormGroup() {
		return new FormGroup<EfsStorageConfigurationFormProperties>({
			fileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mountPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the storage configuration for an Amazon FSx file system. */
	export interface FsxStorageConfiguration {

		/** Required */
		fileSystemId: string;

		/** Required */
		mountPoint: string;
	}

	/** Defines the storage configuration for an Amazon FSx file system. */
	export interface FsxStorageConfigurationFormProperties {

		/** Required */
		fileSystemId: FormControl<string | null | undefined>,

		/** Required */
		mountPoint: FormControl<string | null | undefined>,
	}
	export function CreateFsxStorageConfigurationFormGroup() {
		return new FormGroup<FsxStorageConfigurationFormProperties>({
			fileSystemId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mountPoint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteApplicationResponse {
	}
	export interface DeleteApplicationResponseFormProperties {
	}
	export function CreateDeleteApplicationResponseFormGroup() {
		return new FormGroup<DeleteApplicationResponseFormProperties>({
		});

	}

	export interface DeleteApplicationFromEnvironmentResponse {
	}
	export interface DeleteApplicationFromEnvironmentResponseFormProperties {
	}
	export function CreateDeleteApplicationFromEnvironmentResponseFormGroup() {
		return new FormGroup<DeleteApplicationFromEnvironmentResponseFormProperties>({
		});

	}

	export interface DeleteEnvironmentResponse {
	}
	export interface DeleteEnvironmentResponseFormProperties {
	}
	export function CreateDeleteEnvironmentResponseFormGroup() {
		return new FormGroup<DeleteEnvironmentResponseFormProperties>({
		});

	}

	export interface GetApplicationResponse {

		/** Required */
		applicationArn: string;

		/** Required */
		applicationId: string;

		/** Required */
		creationTime: Date;
		deployedVersion?: DeployedVersionSummary;
		description?: string;

		/** Required */
		engineType: EngineType;
		environmentId?: string;
		kmsKeyId?: string;
		lastStartTime?: Date;

		/** Required */
		latestVersion: ApplicationVersionSummary;
		listenerArns?: Array<string>;
		listenerPorts?: Array<number> | null;
		loadBalancerDnsName?: string;
		logGroups?: Array<LogGroupSummary>;

		/** Required */
		name: string;
		roleArn?: string;

		/** Required */
		status: ApplicationLifecycle;
		statusReason?: string;
		tags?: TagMap;
		targetGroupArns?: Array<string>;
	}
	export interface GetApplicationResponseFormProperties {

		/** Required */
		applicationArn: FormControl<string | null | undefined>,

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		engineType: FormControl<EngineType | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		lastStartTime: FormControl<Date | null | undefined>,
		loadBalancerDnsName: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ApplicationLifecycle | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateGetApplicationResponseFormGroup() {
		return new FormGroup<GetApplicationResponseFormProperties>({
			applicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			engineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			environmentId: new FormControl<string | null | undefined>(undefined),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			lastStartTime: new FormControl<Date | null | undefined>(undefined),
			loadBalancerDnsName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApplicationLifecycle | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of a deployed application. */
	export interface DeployedVersionSummary {

		/** Required */
		applicationVersion: number;

		/** Required */
		status: DeploymentLifecycle;
		statusReason?: string;
	}

	/** Contains a summary of a deployed application. */
	export interface DeployedVersionSummaryFormProperties {

		/** Required */
		applicationVersion: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<DeploymentLifecycle | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateDeployedVersionSummaryFormGroup() {
		return new FormGroup<DeployedVersionSummaryFormProperties>({
			applicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DeploymentLifecycle | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeploymentLifecycle { Deploying = 'Deploying', Succeeded = 'Succeeded', Failed = 'Failed' }

	export enum EngineType { microfocus = 'microfocus', bluage = 'bluage' }


	/** Defines an application version summary. */
	export interface ApplicationVersionSummary {

		/** Required */
		applicationVersion: number;

		/** Required */
		creationTime: Date;

		/** Required */
		status: ApplicationVersionLifecycle;
		statusReason?: string;
	}

	/** Defines an application version summary. */
	export interface ApplicationVersionSummaryFormProperties {

		/** Required */
		applicationVersion: FormControl<number | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<ApplicationVersionLifecycle | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateApplicationVersionSummaryFormGroup() {
		return new FormGroup<ApplicationVersionSummaryFormProperties>({
			applicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ApplicationVersionLifecycle | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationVersionLifecycle { Creating = 'Creating', Available = 'Available', Failed = 'Failed' }


	/** A subset of the attributes that describe a log group. In CloudWatch a log group is a group of log streams that share the same retention, monitoring, and access control settings. */
	export interface LogGroupSummary {

		/** Required */
		logGroupName: string;

		/** Required */
		logType: string;
	}

	/** A subset of the attributes that describe a log group. In CloudWatch a log group is a group of log streams that share the same retention, monitoring, and access control settings. */
	export interface LogGroupSummaryFormProperties {

		/** Required */
		logGroupName: FormControl<string | null | undefined>,

		/** Required */
		logType: FormControl<string | null | undefined>,
	}
	export function CreateLogGroupSummaryFormGroup() {
		return new FormGroup<LogGroupSummaryFormProperties>({
			logGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ApplicationLifecycle { Creating = 'Creating', Created = 'Created', Available = 'Available', Ready = 'Ready', Starting = 'Starting', Running = 'Running', Stopping = 'Stopping', Stopped = 'Stopped', Failed = 'Failed', Deleting = 'Deleting', 'Deleting From Environment' = 'Deleting From Environment' }

	export interface TagMap {
	}
	export interface TagMapFormProperties {
	}
	export function CreateTagMapFormGroup() {
		return new FormGroup<TagMapFormProperties>({
		});

	}

	export interface GetApplicationVersionResponse {

		/** Required */
		applicationVersion: number;

		/** Required */
		creationTime: Date;

		/** Required */
		definitionContent: string;
		description?: string;

		/** Required */
		name: string;

		/** Required */
		status: ApplicationVersionLifecycle;
		statusReason?: string;
	}
	export interface GetApplicationVersionResponseFormProperties {

		/** Required */
		applicationVersion: FormControl<number | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		definitionContent: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ApplicationVersionLifecycle | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateGetApplicationVersionResponseFormGroup() {
		return new FormGroup<GetApplicationVersionResponseFormProperties>({
			applicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			definitionContent: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<ApplicationVersionLifecycle | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetBatchJobExecutionResponse {

		/** Required */
		applicationId: string;
		batchJobIdentifier?: BatchJobIdentifier;
		endTime?: Date;

		/** Required */
		executionId: string;
		jobId?: string;
		jobName?: string;
		jobType?: BatchJobType;
		jobUser?: string;
		returnCode?: string;

		/** Required */
		startTime: Date;

		/** Required */
		status: BatchJobExecutionStatus;
		statusReason?: string;
	}
	export interface GetBatchJobExecutionResponseFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		executionId: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		jobName: FormControl<string | null | undefined>,
		jobType: FormControl<BatchJobType | null | undefined>,
		jobUser: FormControl<string | null | undefined>,
		returnCode: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<BatchJobExecutionStatus | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateGetBatchJobExecutionResponseFormGroup() {
		return new FormGroup<GetBatchJobExecutionResponseFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined),
			executionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<BatchJobType | null | undefined>(undefined),
			jobUser: new FormControl<string | null | undefined>(undefined),
			returnCode: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BatchJobExecutionStatus | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies a specific batch job. */
	export interface BatchJobIdentifier {
		fileBatchJobIdentifier?: FileBatchJobIdentifier;
		scriptBatchJobIdentifier?: ScriptBatchJobIdentifier;
	}

	/** Identifies a specific batch job. */
	export interface BatchJobIdentifierFormProperties {
	}
	export function CreateBatchJobIdentifierFormGroup() {
		return new FormGroup<BatchJobIdentifierFormProperties>({
		});

	}


	/** A batch job identifier in which the batch job to run is identified by the file name and the relative path to the file name. */
	export interface FileBatchJobIdentifier {

		/** Required */
		fileName: string;
		folderPath?: string;
	}

	/** A batch job identifier in which the batch job to run is identified by the file name and the relative path to the file name. */
	export interface FileBatchJobIdentifierFormProperties {

		/** Required */
		fileName: FormControl<string | null | undefined>,
		folderPath: FormControl<string | null | undefined>,
	}
	export function CreateFileBatchJobIdentifierFormGroup() {
		return new FormGroup<FileBatchJobIdentifierFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			folderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch job identifier in which the batch job to run is identified by the script name. */
	export interface ScriptBatchJobIdentifier {

		/** Required */
		scriptName: string;
	}

	/** A batch job identifier in which the batch job to run is identified by the script name. */
	export interface ScriptBatchJobIdentifierFormProperties {

		/** Required */
		scriptName: FormControl<string | null | undefined>,
	}
	export function CreateScriptBatchJobIdentifierFormGroup() {
		return new FormGroup<ScriptBatchJobIdentifierFormProperties>({
			scriptName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum BatchJobType { VSE = 'VSE', JES2 = 'JES2', JES3 = 'JES3' }

	export enum BatchJobExecutionStatus { Submitting = 'Submitting', Holding = 'Holding', Dispatching = 'Dispatching', Running = 'Running', Cancelling = 'Cancelling', Cancelled = 'Cancelled', Succeeded = 'Succeeded', Failed = 'Failed', 'Succeeded With Warning' = 'Succeeded With Warning' }

	export interface GetDataSetDetailsResponse {
		blocksize?: number | null;
		creationTime?: Date;

		/** Required */
		dataSetName: string;
		dataSetOrg?: DatasetDetailOrgAttributes;
		lastReferencedTime?: Date;
		lastUpdatedTime?: Date;
		location?: string;
		recordLength?: number | null;
	}
	export interface GetDataSetDetailsResponseFormProperties {
		blocksize: FormControl<number | null | undefined>,
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		dataSetName: FormControl<string | null | undefined>,
		lastReferencedTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
		location: FormControl<string | null | undefined>,
		recordLength: FormControl<number | null | undefined>,
	}
	export function CreateGetDataSetDetailsResponseFormGroup() {
		return new FormGroup<GetDataSetDetailsResponseFormProperties>({
			blocksize: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined),
			dataSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastReferencedTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			recordLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Additional details about the data set. Different attributes correspond to different data set organizations. The values are populated based on datasetOrg, storageType and backend (Blu Age or Micro Focus). */
	export interface DatasetDetailOrgAttributes {
		gdg?: GdgDetailAttributes;
		po?: PoDetailAttributes;
		ps?: PsDetailAttributes;
		vsam?: VsamDetailAttributes;
	}

	/** Additional details about the data set. Different attributes correspond to different data set organizations. The values are populated based on datasetOrg, storageType and backend (Blu Age or Micro Focus). */
	export interface DatasetDetailOrgAttributesFormProperties {
	}
	export function CreateDatasetDetailOrgAttributesFormGroup() {
		return new FormGroup<DatasetDetailOrgAttributesFormProperties>({
		});

	}


	/** The required attributes for a generation data group data set. A generation data set is one of a collection of successive, historically related, catalogued data sets that together are known as a generation data group (GDG). Use this structure when you want to import a GDG. For more information on GDG, see <a href="https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-generation-data-sets">Generation data sets</a>. */
	export interface GdgDetailAttributes {
		limit?: number | null;
		rollDisposition?: string;
	}

	/** The required attributes for a generation data group data set. A generation data set is one of a collection of successive, historically related, catalogued data sets that together are known as a generation data group (GDG). Use this structure when you want to import a GDG. For more information on GDG, see <a href="https://www.ibm.com/docs/en/zos/2.3.0?topic=guide-generation-data-sets">Generation data sets</a>. */
	export interface GdgDetailAttributesFormProperties {
		limit: FormControl<number | null | undefined>,
		rollDisposition: FormControl<string | null | undefined>,
	}
	export function CreateGdgDetailAttributesFormGroup() {
		return new FormGroup<GdgDetailAttributesFormProperties>({
			limit: new FormControl<number | null | undefined>(undefined),
			rollDisposition: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The supported properties for a PO type data set. */
	export interface PoDetailAttributes {

		/** Required */
		encoding: string;

		/** Required */
		format: string;
	}

	/** The supported properties for a PO type data set. */
	export interface PoDetailAttributesFormProperties {

		/** Required */
		encoding: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,
	}
	export function CreatePoDetailAttributesFormGroup() {
		return new FormGroup<PoDetailAttributesFormProperties>({
			encoding: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The supported properties for a PS type data set. */
	export interface PsDetailAttributes {

		/** Required */
		encoding: string;

		/** Required */
		format: string;
	}

	/** The supported properties for a PS type data set. */
	export interface PsDetailAttributesFormProperties {

		/** Required */
		encoding: FormControl<string | null | undefined>,

		/** Required */
		format: FormControl<string | null | undefined>,
	}
	export function CreatePsDetailAttributesFormGroup() {
		return new FormGroup<PsDetailAttributesFormProperties>({
			encoding: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The attributes of a VSAM type data set. */
	export interface VsamDetailAttributes {
		alternateKeys?: Array<AlternateKey>;
		cacheAtStartup?: boolean | null;
		compressed?: boolean | null;
		encoding?: string;
		primaryKey?: PrimaryKey;
		recordFormat?: string;
	}

	/** The attributes of a VSAM type data set. */
	export interface VsamDetailAttributesFormProperties {
		cacheAtStartup: FormControl<boolean | null | undefined>,
		compressed: FormControl<boolean | null | undefined>,
		encoding: FormControl<string | null | undefined>,
		recordFormat: FormControl<string | null | undefined>,
	}
	export function CreateVsamDetailAttributesFormGroup() {
		return new FormGroup<VsamDetailAttributesFormProperties>({
			cacheAtStartup: new FormControl<boolean | null | undefined>(undefined),
			compressed: new FormControl<boolean | null | undefined>(undefined),
			encoding: new FormControl<string | null | undefined>(undefined),
			recordFormat: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataSetImportTaskResponse {

		/** Required */
		status: DataSetTaskLifecycle;
		summary?: DataSetImportSummary;

		/** Required */
		taskId: string;
	}
	export interface GetDataSetImportTaskResponseFormProperties {

		/** Required */
		status: FormControl<DataSetTaskLifecycle | null | undefined>,

		/** Required */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataSetImportTaskResponseFormGroup() {
		return new FormGroup<GetDataSetImportTaskResponseFormProperties>({
			status: new FormControl<DataSetTaskLifecycle | null | undefined>(undefined, [Validators.required]),
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataSetTaskLifecycle { Creating = 'Creating', Running = 'Running', Completed = 'Completed' }


	/** Represents a summary of data set imports. */
	export interface DataSetImportSummary {

		/** Required */
		failed: number;

		/** Required */
		inProgress: number;

		/** Required */
		pending: number;

		/** Required */
		succeeded: number;

		/** Required */
		total: number;
	}

	/** Represents a summary of data set imports. */
	export interface DataSetImportSummaryFormProperties {

		/** Required */
		failed: FormControl<number | null | undefined>,

		/** Required */
		inProgress: FormControl<number | null | undefined>,

		/** Required */
		pending: FormControl<number | null | undefined>,

		/** Required */
		succeeded: FormControl<number | null | undefined>,

		/** Required */
		total: FormControl<number | null | undefined>,
	}
	export function CreateDataSetImportSummaryFormGroup() {
		return new FormGroup<DataSetImportSummaryFormProperties>({
			failed: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			inProgress: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			pending: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			succeeded: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			total: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDeploymentResponse {

		/** Required */
		applicationId: string;

		/** Required */
		applicationVersion: number;

		/** Required */
		creationTime: Date;

		/** Required */
		deploymentId: string;

		/** Required */
		environmentId: string;

		/** Required */
		status: DeploymentLifecycle;
		statusReason?: string;
	}
	export interface GetDeploymentResponseFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		applicationVersion: FormControl<number | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		deploymentId: FormControl<string | null | undefined>,

		/** Required */
		environmentId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DeploymentLifecycle | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateGetDeploymentResponseFormGroup() {
		return new FormGroup<GetDeploymentResponseFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DeploymentLifecycle | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEnvironmentResponse {
		actualCapacity?: number | null;

		/** Required */
		creationTime: Date;
		description?: string;

		/** Required */
		engineType: EngineType;

		/** Required */
		engineVersion: string;

		/** Required */
		environmentArn: string;

		/** Required */
		environmentId: string;
		highAvailabilityConfig?: HighAvailabilityConfig;

		/** Required */
		instanceType: string;
		kmsKeyId?: string;
		loadBalancerArn?: string;

		/** Required */
		name: string;
		pendingMaintenance?: PendingMaintenance;
		preferredMaintenanceWindow?: string;
		publiclyAccessible?: boolean | null;

		/** Required */
		securityGroupIds: Array<string>;

		/** Required */
		status: EnvironmentLifecycle;
		statusReason?: string;
		storageConfigurations?: Array<StorageConfiguration>;

		/** Required */
		subnetIds: Array<string>;
		tags?: TagMap;

		/** Required */
		vpcId: string;
	}
	export interface GetEnvironmentResponseFormProperties {
		actualCapacity: FormControl<number | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		engineType: FormControl<EngineType | null | undefined>,

		/** Required */
		engineVersion: FormControl<string | null | undefined>,

		/** Required */
		environmentArn: FormControl<string | null | undefined>,

		/** Required */
		environmentId: FormControl<string | null | undefined>,

		/** Required */
		instanceType: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,
		loadBalancerArn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		preferredMaintenanceWindow: FormControl<string | null | undefined>,
		publiclyAccessible: FormControl<boolean | null | undefined>,

		/** Required */
		status: FormControl<EnvironmentLifecycle | null | undefined>,
		statusReason: FormControl<string | null | undefined>,

		/** Required */
		vpcId: FormControl<string | null | undefined>,
	}
	export function CreateGetEnvironmentResponseFormGroup() {
		return new FormGroup<GetEnvironmentResponseFormProperties>({
			actualCapacity: new FormControl<number | null | undefined>(undefined),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			engineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			engineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			loadBalancerArn: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<EnvironmentLifecycle | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
			vpcId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the details of a high availability configuration. */
	export interface HighAvailabilityConfig {

		/** Required */
		desiredCapacity: number;
	}

	/** Defines the details of a high availability configuration. */
	export interface HighAvailabilityConfigFormProperties {

		/** Required */
		desiredCapacity: FormControl<number | null | undefined>,
	}
	export function CreateHighAvailabilityConfigFormGroup() {
		return new FormGroup<HighAvailabilityConfigFormProperties>({
			desiredCapacity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The scheduled maintenance for a runtime engine. */
	export interface PendingMaintenance {
		engineVersion?: string;
		schedule?: MaintenanceSchedule;
	}

	/** The scheduled maintenance for a runtime engine. */
	export interface PendingMaintenanceFormProperties {
		engineVersion: FormControl<string | null | undefined>,
	}
	export function CreatePendingMaintenanceFormGroup() {
		return new FormGroup<PendingMaintenanceFormProperties>({
			engineVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The information about the maintenance schedule. */
	export interface MaintenanceSchedule {
		endTime?: Date;
		startTime?: Date;
	}

	/** The information about the maintenance schedule. */
	export interface MaintenanceScheduleFormProperties {
		endTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateMaintenanceScheduleFormGroup() {
		return new FormGroup<MaintenanceScheduleFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum EnvironmentLifecycle { Creating = 'Creating', Available = 'Available', Updating = 'Updating', Deleting = 'Deleting', Failed = 'Failed' }

	export interface GetSignedBluinsightsUrlResponse {

		/** Required */
		signedBiUrl: string;
	}
	export interface GetSignedBluinsightsUrlResponseFormProperties {

		/** Required */
		signedBiUrl: FormControl<string | null | undefined>,
	}
	export function CreateGetSignedBluinsightsUrlResponseFormGroup() {
		return new FormGroup<GetSignedBluinsightsUrlResponseFormProperties>({
			signedBiUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListApplicationVersionsResponse {

		/** Required */
		applicationVersions: Array<ApplicationVersionSummary>;
		nextToken?: string;
	}
	export interface ListApplicationVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationVersionsResponseFormGroup() {
		return new FormGroup<ListApplicationVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListApplicationsResponse {

		/** Required */
		applications: Array<ApplicationSummary>;
		nextToken?: string;
	}
	export interface ListApplicationsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationsResponseFormGroup() {
		return new FormGroup<ListApplicationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subset of the possible application attributes. Used in the application list. */
	export interface ApplicationSummary {

		/** Required */
		applicationArn: string;

		/** Required */
		applicationId: string;

		/** Required */
		applicationVersion: number;

		/** Required */
		creationTime: Date;
		deploymentStatus?: ApplicationDeploymentLifecycle;
		description?: string;

		/** Required */
		engineType: EngineType;
		environmentId?: string;
		lastStartTime?: Date;

		/** Required */
		name: string;
		roleArn?: string;

		/** Required */
		status: ApplicationLifecycle;
		versionStatus?: ApplicationVersionLifecycle;
	}

	/** A subset of the possible application attributes. Used in the application list. */
	export interface ApplicationSummaryFormProperties {

		/** Required */
		applicationArn: FormControl<string | null | undefined>,

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		applicationVersion: FormControl<number | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,
		deploymentStatus: FormControl<ApplicationDeploymentLifecycle | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		engineType: FormControl<EngineType | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		lastStartTime: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ApplicationLifecycle | null | undefined>,
		versionStatus: FormControl<ApplicationVersionLifecycle | null | undefined>,
	}
	export function CreateApplicationSummaryFormGroup() {
		return new FormGroup<ApplicationSummaryFormProperties>({
			applicationArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentStatus: new FormControl<ApplicationDeploymentLifecycle | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			engineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			environmentId: new FormControl<string | null | undefined>(undefined),
			lastStartTime: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ApplicationLifecycle | null | undefined>(undefined, [Validators.required]),
			versionStatus: new FormControl<ApplicationVersionLifecycle | null | undefined>(undefined),
		});

	}

	export enum ApplicationDeploymentLifecycle { Deploying = 'Deploying', Deployed = 'Deployed' }

	export interface ListBatchJobDefinitionsResponse {

		/** Required */
		batchJobDefinitions: Array<BatchJobDefinition>;
		nextToken?: string;
	}
	export interface ListBatchJobDefinitionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBatchJobDefinitionsResponseFormGroup() {
		return new FormGroup<ListBatchJobDefinitionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the details of a batch job. */
	export interface BatchJobDefinition {
		fileBatchJobDefinition?: FileBatchJobDefinition;
		scriptBatchJobDefinition?: ScriptBatchJobDefinition;
	}

	/** Defines the details of a batch job. */
	export interface BatchJobDefinitionFormProperties {
	}
	export function CreateBatchJobDefinitionFormGroup() {
		return new FormGroup<BatchJobDefinitionFormProperties>({
		});

	}


	/** A file containing a batch job definition. */
	export interface FileBatchJobDefinition {

		/** Required */
		fileName: string;
		folderPath?: string;
	}

	/** A file containing a batch job definition. */
	export interface FileBatchJobDefinitionFormProperties {

		/** Required */
		fileName: FormControl<string | null | undefined>,
		folderPath: FormControl<string | null | undefined>,
	}
	export function CreateFileBatchJobDefinitionFormGroup() {
		return new FormGroup<FileBatchJobDefinitionFormProperties>({
			fileName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			folderPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A batch job definition contained in a script. */
	export interface ScriptBatchJobDefinition {

		/** Required */
		scriptName: string;
	}

	/** A batch job definition contained in a script. */
	export interface ScriptBatchJobDefinitionFormProperties {

		/** Required */
		scriptName: FormControl<string | null | undefined>,
	}
	export function CreateScriptBatchJobDefinitionFormGroup() {
		return new FormGroup<ScriptBatchJobDefinitionFormProperties>({
			scriptName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListBatchJobExecutionsResponse {

		/** Required */
		batchJobExecutions: Array<BatchJobExecutionSummary>;
		nextToken?: string;
	}
	export interface ListBatchJobExecutionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListBatchJobExecutionsResponseFormGroup() {
		return new FormGroup<ListBatchJobExecutionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subset of the possible batch job attributes. Used in the batch job list. */
	export interface BatchJobExecutionSummary {

		/** Required */
		applicationId: string;
		batchJobIdentifier?: BatchJobIdentifier;
		endTime?: Date;

		/** Required */
		executionId: string;
		jobId?: string;
		jobName?: string;
		jobType?: BatchJobType;
		returnCode?: string;

		/** Required */
		startTime: Date;

		/** Required */
		status: BatchJobExecutionStatus;
	}

	/** A subset of the possible batch job attributes. Used in the batch job list. */
	export interface BatchJobExecutionSummaryFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,
		endTime: FormControl<Date | null | undefined>,

		/** Required */
		executionId: FormControl<string | null | undefined>,
		jobId: FormControl<string | null | undefined>,
		jobName: FormControl<string | null | undefined>,
		jobType: FormControl<BatchJobType | null | undefined>,
		returnCode: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<Date | null | undefined>,

		/** Required */
		status: FormControl<BatchJobExecutionStatus | null | undefined>,
	}
	export function CreateBatchJobExecutionSummaryFormGroup() {
		return new FormGroup<BatchJobExecutionSummaryFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			endTime: new FormControl<Date | null | undefined>(undefined),
			executionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			jobId: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			jobType: new FormControl<BatchJobType | null | undefined>(undefined),
			returnCode: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<BatchJobExecutionStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDataSetImportHistoryResponse {

		/** Required */
		dataSetImportTasks: Array<DataSetImportTask>;
		nextToken?: string;
	}
	export interface ListDataSetImportHistoryResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSetImportHistoryResponseFormGroup() {
		return new FormGroup<ListDataSetImportHistoryResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a data set import task. */
	export interface DataSetImportTask {

		/** Required */
		status: DataSetTaskLifecycle;

		/** Required */
		summary: DataSetImportSummary;

		/** Required */
		taskId: string;
	}

	/** Contains information about a data set import task. */
	export interface DataSetImportTaskFormProperties {

		/** Required */
		status: FormControl<DataSetTaskLifecycle | null | undefined>,

		/** Required */
		taskId: FormControl<string | null | undefined>,
	}
	export function CreateDataSetImportTaskFormGroup() {
		return new FormGroup<DataSetImportTaskFormProperties>({
			status: new FormControl<DataSetTaskLifecycle | null | undefined>(undefined, [Validators.required]),
			taskId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDataSetsResponse {

		/** Required */
		dataSets: Array<DataSetSummary>;
		nextToken?: string;
	}
	export interface ListDataSetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataSetsResponseFormGroup() {
		return new FormGroup<ListDataSetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subset of the possible data set attributes. */
	export interface DataSetSummary {
		creationTime?: Date;

		/** Required */
		dataSetName: string;
		dataSetOrg?: string;
		format?: string;
		lastReferencedTime?: Date;
		lastUpdatedTime?: Date;
	}

	/** A subset of the possible data set attributes. */
	export interface DataSetSummaryFormProperties {
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		dataSetName: FormControl<string | null | undefined>,
		dataSetOrg: FormControl<string | null | undefined>,
		format: FormControl<string | null | undefined>,
		lastReferencedTime: FormControl<Date | null | undefined>,
		lastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDataSetSummaryFormGroup() {
		return new FormGroup<DataSetSummaryFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined),
			dataSetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSetOrg: new FormControl<string | null | undefined>(undefined),
			format: new FormControl<string | null | undefined>(undefined),
			lastReferencedTime: new FormControl<Date | null | undefined>(undefined),
			lastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDeploymentsResponse {

		/** Required */
		deployments: Array<DeploymentSummary>;
		nextToken?: string;
	}
	export interface ListDeploymentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentsResponseFormGroup() {
		return new FormGroup<ListDeploymentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subset of information about a specific deployment. */
	export interface DeploymentSummary {

		/** Required */
		applicationId: string;

		/** Required */
		applicationVersion: number;

		/** Required */
		creationTime: Date;

		/** Required */
		deploymentId: string;

		/** Required */
		environmentId: string;

		/** Required */
		status: DeploymentLifecycle;
		statusReason?: string;
	}

	/** A subset of information about a specific deployment. */
	export interface DeploymentSummaryFormProperties {

		/** Required */
		applicationId: FormControl<string | null | undefined>,

		/** Required */
		applicationVersion: FormControl<number | null | undefined>,

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		deploymentId: FormControl<string | null | undefined>,

		/** Required */
		environmentId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DeploymentLifecycle | null | undefined>,
		statusReason: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentSummaryFormGroup() {
		return new FormGroup<DeploymentSummaryFormProperties>({
			applicationId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			applicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deploymentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<DeploymentLifecycle | null | undefined>(undefined, [Validators.required]),
			statusReason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEngineVersionsResponse {

		/** Required */
		engineVersions: Array<EngineVersionsSummary>;
		nextToken?: string;
	}
	export interface ListEngineVersionsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEngineVersionsResponseFormGroup() {
		return new FormGroup<ListEngineVersionsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A subset of information about the engine version for a specific application. */
	export interface EngineVersionsSummary {

		/** Required */
		engineType: string;

		/** Required */
		engineVersion: string;
	}

	/** A subset of information about the engine version for a specific application. */
	export interface EngineVersionsSummaryFormProperties {

		/** Required */
		engineType: FormControl<string | null | undefined>,

		/** Required */
		engineVersion: FormControl<string | null | undefined>,
	}
	export function CreateEngineVersionsSummaryFormGroup() {
		return new FormGroup<EngineVersionsSummaryFormProperties>({
			engineType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			engineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEnvironmentsResponse {

		/** Required */
		environments: Array<EnvironmentSummary>;
		nextToken?: string;
	}
	export interface ListEnvironmentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsResponseFormGroup() {
		return new FormGroup<ListEnvironmentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a subset of the possible runtime environment attributes. Used in the environment list. */
	export interface EnvironmentSummary {

		/** Required */
		creationTime: Date;

		/** Required */
		engineType: EngineType;

		/** Required */
		engineVersion: string;

		/** Required */
		environmentArn: string;

		/** Required */
		environmentId: string;

		/** Required */
		instanceType: string;

		/** Required */
		name: string;

		/** Required */
		status: EnvironmentLifecycle;
	}

	/** Contains a subset of the possible runtime environment attributes. Used in the environment list. */
	export interface EnvironmentSummaryFormProperties {

		/** Required */
		creationTime: FormControl<Date | null | undefined>,

		/** Required */
		engineType: FormControl<EngineType | null | undefined>,

		/** Required */
		engineVersion: FormControl<string | null | undefined>,

		/** Required */
		environmentArn: FormControl<string | null | undefined>,

		/** Required */
		environmentId: FormControl<string | null | undefined>,

		/** Required */
		instanceType: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<EnvironmentLifecycle | null | undefined>,
	}
	export function CreateEnvironmentSummaryFormGroup() {
		return new FormGroup<EnvironmentSummaryFormProperties>({
			creationTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			engineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			engineVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<EnvironmentLifecycle | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {

		/** Required */
		tags: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface StartApplicationResponse {
	}
	export interface StartApplicationResponseFormProperties {
	}
	export function CreateStartApplicationResponseFormGroup() {
		return new FormGroup<StartApplicationResponseFormProperties>({
		});

	}

	export interface StartBatchJobResponse {

		/** Required */
		executionId: string;
	}
	export interface StartBatchJobResponseFormProperties {

		/** Required */
		executionId: FormControl<string | null | undefined>,
	}
	export function CreateStartBatchJobResponseFormGroup() {
		return new FormGroup<StartBatchJobResponseFormProperties>({
			executionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StopApplicationResponse {
	}
	export interface StopApplicationResponseFormProperties {
	}
	export function CreateStopApplicationResponseFormGroup() {
		return new FormGroup<StopApplicationResponseFormProperties>({
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

	export interface UpdateApplicationResponse {

		/** Required */
		applicationVersion: number;
	}
	export interface UpdateApplicationResponseFormProperties {

		/** Required */
		applicationVersion: FormControl<number | null | undefined>,
	}
	export function CreateUpdateApplicationResponseFormGroup() {
		return new FormGroup<UpdateApplicationResponseFormProperties>({
			applicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateEnvironmentResponse {

		/** Required */
		environmentId: string;
	}
	export interface UpdateEnvironmentResponseFormProperties {

		/** Required */
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentResponseFormGroup() {
		return new FormGroup<UpdateEnvironmentResponseFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Job parameters are optional. Can contain up to 500 entries. */
	export interface BatchJobParametersMap {
	}

	/** Job parameters are optional. Can contain up to 500 entries. */
	export interface BatchJobParametersMapFormProperties {
	}
	export function CreateBatchJobParametersMapFormGroup() {
		return new FormGroup<BatchJobParametersMapFormProperties>({
		});

	}

	export interface CancelBatchJobExecutionRequest {
	}
	export interface CancelBatchJobExecutionRequestFormProperties {
	}
	export function CreateCancelBatchJobExecutionRequestFormGroup() {
		return new FormGroup<CancelBatchJobExecutionRequestFormProperties>({
		});

	}


	/** The application definition for a particular application.  */
	export interface Definition {
		content?: string;
		s3Location?: string;
	}

	/** The application definition for a particular application.  */
	export interface DefinitionFormProperties {
		content: FormControl<string | null | undefined>,
		s3Location: FormControl<string | null | undefined>,
	}
	export function CreateDefinitionFormGroup() {
		return new FormGroup<DefinitionFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			s3Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationRequest {
		clientToken?: string;

		/** Required */
		definition: Definition;
		description?: string;

		/** Required */
		engineType: EngineType;
		kmsKeyId?: string;

		/** Required */
		name: string;
		roleArn?: string;
		tags?: TagMap;
	}
	export interface CreateApplicationRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		engineType: FormControl<EngineType | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		roleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationRequestFormGroup() {
		return new FormGroup<CreateApplicationRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			engineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			roleArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Identifies one or more data sets you want to import with the <a>CreateDataSetImportTask</a> operation. */
	export interface DataSetImportConfig {
		dataSets?: Array<DataSetImportItem>;
		s3Location?: string;
	}

	/** Identifies one or more data sets you want to import with the <a>CreateDataSetImportTask</a> operation. */
	export interface DataSetImportConfigFormProperties {
		s3Location: FormControl<string | null | undefined>,
	}
	export function CreateDataSetImportConfigFormGroup() {
		return new FormGroup<DataSetImportConfigFormProperties>({
			s3Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSetImportTaskRequest {
		clientToken?: string;

		/** Required */
		importConfig: DataSetImportConfig;
	}
	export interface CreateDataSetImportTaskRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSetImportTaskRequestFormGroup() {
		return new FormGroup<CreateDataSetImportTaskRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentRequest {

		/** Required */
		applicationVersion: number;
		clientToken?: string;

		/** Required */
		environmentId: string;
	}
	export interface CreateDeploymentRequestFormProperties {

		/** Required */
		applicationVersion: FormControl<number | null | undefined>,
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentRequestFormGroup() {
		return new FormGroup<CreateDeploymentRequestFormProperties>({
			applicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateEnvironmentRequest {
		clientToken?: string;
		description?: string;

		/** Required */
		engineType: EngineType;
		engineVersion?: string;
		highAvailabilityConfig?: HighAvailabilityConfig;

		/** Required */
		instanceType: string;
		kmsKeyId?: string;

		/** Required */
		name: string;
		preferredMaintenanceWindow?: string;
		publiclyAccessible?: boolean | null;
		securityGroupIds?: Array<string>;
		storageConfigurations?: Array<StorageConfiguration>;
		subnetIds?: Array<string>;
		tags?: TagMap;
	}
	export interface CreateEnvironmentRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		engineType: FormControl<EngineType | null | undefined>,
		engineVersion: FormControl<string | null | undefined>,

		/** Required */
		instanceType: FormControl<string | null | undefined>,
		kmsKeyId: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		preferredMaintenanceWindow: FormControl<string | null | undefined>,
		publiclyAccessible: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateEnvironmentRequestFormGroup() {
		return new FormGroup<CreateEnvironmentRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			engineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteApplicationFromEnvironmentRequest {
	}
	export interface DeleteApplicationFromEnvironmentRequestFormProperties {
	}
	export function CreateDeleteApplicationFromEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteApplicationFromEnvironmentRequestFormProperties>({
		});

	}

	export interface DeleteApplicationRequest {
	}
	export interface DeleteApplicationRequestFormProperties {
	}
	export function CreateDeleteApplicationRequestFormGroup() {
		return new FormGroup<DeleteApplicationRequestFormProperties>({
		});

	}

	export interface DeleteEnvironmentRequest {
	}
	export interface DeleteEnvironmentRequestFormProperties {
	}
	export function CreateDeleteEnvironmentRequestFormGroup() {
		return new FormGroup<DeleteEnvironmentRequestFormProperties>({
		});

	}

	export interface GetApplicationRequest {
	}
	export interface GetApplicationRequestFormProperties {
	}
	export function CreateGetApplicationRequestFormGroup() {
		return new FormGroup<GetApplicationRequestFormProperties>({
		});

	}

	export interface GetApplicationVersionRequest {
	}
	export interface GetApplicationVersionRequestFormProperties {
	}
	export function CreateGetApplicationVersionRequestFormGroup() {
		return new FormGroup<GetApplicationVersionRequestFormProperties>({
		});

	}

	export interface GetBatchJobExecutionRequest {
	}
	export interface GetBatchJobExecutionRequestFormProperties {
	}
	export function CreateGetBatchJobExecutionRequestFormGroup() {
		return new FormGroup<GetBatchJobExecutionRequestFormProperties>({
		});

	}

	export interface GetDataSetDetailsRequest {
	}
	export interface GetDataSetDetailsRequestFormProperties {
	}
	export function CreateGetDataSetDetailsRequestFormGroup() {
		return new FormGroup<GetDataSetDetailsRequestFormProperties>({
		});

	}

	export interface GetDataSetImportTaskRequest {
	}
	export interface GetDataSetImportTaskRequestFormProperties {
	}
	export function CreateGetDataSetImportTaskRequestFormGroup() {
		return new FormGroup<GetDataSetImportTaskRequestFormProperties>({
		});

	}

	export interface GetDeploymentRequest {
	}
	export interface GetDeploymentRequestFormProperties {
	}
	export function CreateGetDeploymentRequestFormGroup() {
		return new FormGroup<GetDeploymentRequestFormProperties>({
		});

	}

	export interface GetEnvironmentRequest {
	}
	export interface GetEnvironmentRequestFormProperties {
	}
	export function CreateGetEnvironmentRequestFormGroup() {
		return new FormGroup<GetEnvironmentRequestFormProperties>({
		});

	}

	export interface ListApplicationVersionsRequest {
	}
	export interface ListApplicationVersionsRequestFormProperties {
	}
	export function CreateListApplicationVersionsRequestFormGroup() {
		return new FormGroup<ListApplicationVersionsRequestFormProperties>({
		});

	}

	export interface ListApplicationsRequest {
	}
	export interface ListApplicationsRequestFormProperties {
	}
	export function CreateListApplicationsRequestFormGroup() {
		return new FormGroup<ListApplicationsRequestFormProperties>({
		});

	}

	export interface ListBatchJobDefinitionsRequest {
	}
	export interface ListBatchJobDefinitionsRequestFormProperties {
	}
	export function CreateListBatchJobDefinitionsRequestFormGroup() {
		return new FormGroup<ListBatchJobDefinitionsRequestFormProperties>({
		});

	}

	export interface ListBatchJobExecutionsRequest {
	}
	export interface ListBatchJobExecutionsRequestFormProperties {
	}
	export function CreateListBatchJobExecutionsRequestFormGroup() {
		return new FormGroup<ListBatchJobExecutionsRequestFormProperties>({
		});

	}

	export interface ListDataSetImportHistoryRequest {
	}
	export interface ListDataSetImportHistoryRequestFormProperties {
	}
	export function CreateListDataSetImportHistoryRequestFormGroup() {
		return new FormGroup<ListDataSetImportHistoryRequestFormProperties>({
		});

	}

	export interface ListDataSetsRequest {
	}
	export interface ListDataSetsRequestFormProperties {
	}
	export function CreateListDataSetsRequestFormGroup() {
		return new FormGroup<ListDataSetsRequestFormProperties>({
		});

	}

	export interface ListDeploymentsRequest {
	}
	export interface ListDeploymentsRequestFormProperties {
	}
	export function CreateListDeploymentsRequestFormGroup() {
		return new FormGroup<ListDeploymentsRequestFormProperties>({
		});

	}

	export interface ListEngineVersionsRequest {
	}
	export interface ListEngineVersionsRequestFormProperties {
	}
	export function CreateListEngineVersionsRequestFormGroup() {
		return new FormGroup<ListEngineVersionsRequestFormProperties>({
		});

	}

	export interface ListEnvironmentsRequest {
	}
	export interface ListEnvironmentsRequestFormProperties {
	}
	export function CreateListEnvironmentsRequestFormGroup() {
		return new FormGroup<ListEnvironmentsRequestFormProperties>({
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

	export interface StartApplicationRequest {
	}
	export interface StartApplicationRequestFormProperties {
	}
	export function CreateStartApplicationRequestFormGroup() {
		return new FormGroup<StartApplicationRequestFormProperties>({
		});

	}

	export interface StartBatchJobRequest {

		/** Required */
		batchJobIdentifier: BatchJobIdentifier;
		jobParams?: BatchJobParametersMap;
	}
	export interface StartBatchJobRequestFormProperties {
	}
	export function CreateStartBatchJobRequestFormGroup() {
		return new FormGroup<StartBatchJobRequestFormProperties>({
		});

	}

	export interface StopApplicationRequest {
		forceStop?: boolean | null;
	}
	export interface StopApplicationRequestFormProperties {
		forceStop: FormControl<boolean | null | undefined>,
	}
	export function CreateStopApplicationRequestFormGroup() {
		return new FormGroup<StopApplicationRequestFormProperties>({
			forceStop: new FormControl<boolean | null | undefined>(undefined),
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

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateApplicationRequest {

		/** Required */
		currentApplicationVersion: number;
		definition?: Definition;
		description?: string;
	}
	export interface UpdateApplicationRequestFormProperties {

		/** Required */
		currentApplicationVersion: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationRequestFormGroup() {
		return new FormGroup<UpdateApplicationRequestFormProperties>({
			currentApplicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEnvironmentRequest {
		applyDuringMaintenanceWindow?: boolean | null;
		desiredCapacity?: number | null;
		engineVersion?: string;
		instanceType?: string;
		preferredMaintenanceWindow?: string;
	}
	export interface UpdateEnvironmentRequestFormProperties {
		applyDuringMaintenanceWindow: FormControl<boolean | null | undefined>,
		desiredCapacity: FormControl<number | null | undefined>,
		engineVersion: FormControl<string | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
		preferredMaintenanceWindow: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentRequestFormGroup() {
		return new FormGroup<UpdateEnvironmentRequestFormProperties>({
			applyDuringMaintenanceWindow: new FormControl<boolean | null | undefined>(undefined),
			desiredCapacity: new FormControl<number | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels the running of a specific batch job execution.
		 * Post applications/{applicationId}/batch-job-executions/{executionId}/cancel
		 * @param {string} applicationId The unique identifier of the application.
		 * @param {string} executionId The unique identifier of the batch job execution.
		 * @return {CancelBatchJobExecutionResponse} Success
		 */
		CancelBatchJobExecution(applicationId: string, executionId: string): Observable<CancelBatchJobExecutionResponse> {
			return this.http.post<CancelBatchJobExecutionResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/batch-job-executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/cancel', null, {});
		}

		/**
		 * Creates a new application with given parameters. Requires an existing runtime environment and application definition file.
		 * Post applications
		 * @return {CreateApplicationResponse} Success
		 */
		CreateApplication(requestBody: CreateApplicationPostBody): Observable<CreateApplicationResponse> {
			return this.http.post<CreateApplicationResponse>(this.baseUri + 'applications', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the applications associated with a specific Amazon Web Services account. You can provide the unique identifier of a specific runtime environment in a query parameter to see all applications associated with that environment.
		 * Get applications
		 * @param {string} environmentId The unique identifier of the runtime environment where the applications are deployed.
		 * @param {number} maxResults The maximum number of applications to return.
		 *     Minimum: 1    Maximum: 2000
		 * @param {Array<string>} names The names of the applications.
		 *     Minimum items: 1    Maximum items: 10
		 * @param {string} nextToken A pagination token to control the number of applications displayed in the list.
		 * @return {ListApplicationsResponse} Success
		 */
		ListApplications(environmentId: string | null | undefined, maxResults: number | null | undefined, names: Array<string> | null | undefined, nextToken: string | null | undefined): Observable<ListApplicationsResponse> {
			return this.http.get<ListApplicationsResponse>(this.baseUri + 'applications?environmentId=' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '&maxResults=' + maxResults + '&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Starts a data set import task for a specific application.
		 * Post applications/{applicationId}/dataset-import-task
		 * @param {string} applicationId The unique identifier of the application for which you want to import data sets.
		 * @return {CreateDataSetImportTaskResponse} Success
		 */
		CreateDataSetImportTask(applicationId: string, requestBody: CreateDataSetImportTaskPostBody): Observable<CreateDataSetImportTaskResponse> {
			return this.http.post<CreateDataSetImportTaskResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/dataset-import-task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates and starts a deployment to deploy an application into a runtime environment.
		 * Post applications/{applicationId}/deployments
		 * @param {string} applicationId The application identifier.
		 * @return {CreateDeploymentResponse} Success
		 */
		CreateDeployment(applicationId: string, requestBody: CreateDeploymentPostBody): Observable<CreateDeploymentResponse> {
			return this.http.post<CreateDeploymentResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/deployments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of all deployments of a specific application. A deployment is a combination of a specific application and a specific version of that application. Each deployment is mapped to a particular application version.
		 * Get applications/{applicationId}/deployments
		 * @param {string} applicationId The application identifier.
		 * @param {number} maxResults The maximum number of objects to return.
		 *     Minimum: 1    Maximum: 2000
		 * @param {string} nextToken A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter.
		 * @return {ListDeploymentsResponse} Success
		 */
		ListDeployments(applicationId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListDeploymentsResponse> {
			return this.http.get<ListDeploymentsResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/deployments&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a runtime environment for a given runtime engine.
		 * Post environments
		 * @return {CreateEnvironmentResponse} Success
		 */
		CreateEnvironment(requestBody: CreateEnvironmentPostBody): Observable<CreateEnvironmentResponse> {
			return this.http.post<CreateEnvironmentResponse>(this.baseUri + 'environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the runtime environments.
		 * Get environments
		 * @param {EngineType} engineType The engine type for the runtime environment.
		 * @param {number} maxResults The maximum number of runtime environments to return.
		 *     Minimum: 1    Maximum: 2000
		 * @param {Array<string>} names The names of the runtime environments. Must be unique within the account.
		 *     Minimum items: 1    Maximum items: 10
		 * @param {string} nextToken A pagination token to control the number of runtime environments displayed in the list.
		 * @return {ListEnvironmentsResponse} Success
		 */
		ListEnvironments(engineType: EngineType | null | undefined, maxResults: number | null | undefined, names: Array<string> | null | undefined, nextToken: string | null | undefined): Observable<ListEnvironmentsResponse> {
			return this.http.get<ListEnvironmentsResponse>(this.baseUri + 'environments?engineType=' + engineType + '&maxResults=' + maxResults + '&' + names?.map(z => `names=${encodeURIComponent(z)}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Deletes a specific application. You cannot delete a running application.
		 * Delete applications/{applicationId}
		 * @param {string} applicationId The unique identifier of the application you want to delete.
		 * @return {DeleteApplicationResponse} Success
		 */
		DeleteApplication(applicationId: string): Observable<DeleteApplicationResponse> {
			return this.http.delete<DeleteApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), {});
		}

		/**
		 * Describes the details of a specific application.
		 * Get applications/{applicationId}
		 * @param {string} applicationId The identifier of the application.
		 * @return {GetApplicationResponse} Success
		 */
		GetApplication(applicationId: string): Observable<GetApplicationResponse> {
			return this.http.get<GetApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), {});
		}

		/**
		 * Updates an application and creates a new version.
		 * Patch applications/{applicationId}
		 * @param {string} applicationId The unique identifier of the application you want to update.
		 * @return {UpdateApplicationResponse} Success
		 */
		UpdateApplication(applicationId: string, requestBody: UpdateApplicationPatchBody): Observable<UpdateApplicationResponse> {
			return this.http.patch<UpdateApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.
		 * Delete applications/{applicationId}/environment/{environmentId}
		 * @param {string} applicationId The unique identifier of the application you want to delete.
		 * @param {string} environmentId The unique identifier of the runtime environment where the application was previously deployed.
		 * @return {DeleteApplicationFromEnvironmentResponse} Success
		 */
		DeleteApplicationFromEnvironment(applicationId: string, environmentId: string): Observable<DeleteApplicationFromEnvironmentResponse> {
			return this.http.delete<DeleteApplicationFromEnvironmentResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/environment/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), {});
		}

		/**
		 * Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.
		 * Delete environments/{environmentId}
		 * @param {string} environmentId The unique identifier of the runtime environment you want to delete.
		 * @return {DeleteEnvironmentResponse} Success
		 */
		DeleteEnvironment(environmentId: string): Observable<DeleteEnvironmentResponse> {
			return this.http.delete<DeleteEnvironmentResponse>(this.baseUri + 'environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), {});
		}

		/**
		 * Describes a specific runtime environment.
		 * Get environments/{environmentId}
		 * @param {string} environmentId The unique identifier of the runtime environment.
		 * @return {GetEnvironmentResponse} Success
		 */
		GetEnvironment(environmentId: string): Observable<GetEnvironmentResponse> {
			return this.http.get<GetEnvironmentResponse>(this.baseUri + 'environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), {});
		}

		/**
		 * Updates the configuration details for a specific runtime environment.
		 * Patch environments/{environmentId}
		 * @param {string} environmentId The unique identifier of the runtime environment that you want to update.
		 * @return {UpdateEnvironmentResponse} Success
		 */
		UpdateEnvironment(environmentId: string, requestBody: UpdateEnvironmentPatchBody): Observable<UpdateEnvironmentResponse> {
			return this.http.patch<UpdateEnvironmentResponse>(this.baseUri + 'environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns details about a specific version of a specific application.
		 * Get applications/{applicationId}/versions/{applicationVersion}
		 * @param {string} applicationId The unique identifier of the application.
		 * @param {number} applicationVersion The specific version of the application.
		 *     Minimum: 1
		 * @return {GetApplicationVersionResponse} Success
		 */
		GetApplicationVersion(applicationId: string, applicationVersion: number): Observable<GetApplicationVersionResponse> {
			return this.http.get<GetApplicationVersionResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/versions/' + applicationVersion, {});
		}

		/**
		 * Gets the details of a specific batch job execution for a specific application.
		 * Get applications/{applicationId}/batch-job-executions/{executionId}
		 * @param {string} applicationId The identifier of the application.
		 * @param {string} executionId The unique identifier of the batch job execution.
		 * @return {GetBatchJobExecutionResponse} Success
		 */
		GetBatchJobExecution(applicationId: string, executionId: string): Observable<GetBatchJobExecutionResponse> {
			return this.http.get<GetBatchJobExecutionResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/batch-job-executions/' + (executionId == null ? '' : encodeURIComponent(executionId)), {});
		}

		/**
		 * Gets the details of a specific data set.
		 * Get applications/{applicationId}/datasets/{dataSetName}
		 * @param {string} applicationId The unique identifier of the application that this data set is associated with.
		 * @param {string} dataSetName The name of the data set.
		 * @return {GetDataSetDetailsResponse} Success
		 */
		GetDataSetDetails(applicationId: string, dataSetName: string): Observable<GetDataSetDetailsResponse> {
			return this.http.get<GetDataSetDetailsResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/datasets/' + (dataSetName == null ? '' : encodeURIComponent(dataSetName)), {});
		}

		/**
		 * Gets the status of a data set import task initiated with the <a>CreateDataSetImportTask</a> operation.
		 * Get applications/{applicationId}/dataset-import-tasks/{taskId}
		 * @param {string} applicationId The application identifier.
		 * @param {string} taskId The task identifier returned by the <a>CreateDataSetImportTask</a> operation. 
		 * @return {GetDataSetImportTaskResponse} Success
		 */
		GetDataSetImportTask(applicationId: string, taskId: string): Observable<GetDataSetImportTaskResponse> {
			return this.http.get<GetDataSetImportTaskResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/dataset-import-tasks/' + (taskId == null ? '' : encodeURIComponent(taskId)), {});
		}

		/**
		 * Gets details of a specific deployment with a given deployment identifier.
		 * Get applications/{applicationId}/deployments/{deploymentId}
		 * @param {string} applicationId The unique identifier of the application.
		 * @param {string} deploymentId The unique identifier for the deployment.
		 * @return {GetDeploymentResponse} Success
		 */
		GetDeployment(applicationId: string, deploymentId: string): Observable<GetDeploymentResponse> {
			return this.http.get<GetDeploymentResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/deployments/' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)), {});
		}

		/**
		 * Gets a single sign-on URL that can be used to connect to AWS Blu Insights.
		 * Get signed-bi-url
		 * @return {GetSignedBluinsightsUrlResponse} Success
		 */
		GetSignedBluinsightsUrl(): Observable<GetSignedBluinsightsUrlResponse> {
			return this.http.get<GetSignedBluinsightsUrlResponse>(this.baseUri + 'signed-bi-url', {});
		}

		/**
		 * Returns a list of the application versions for a specific application.
		 * Get applications/{applicationId}/versions
		 * @param {string} applicationId The unique identifier of the application.
		 * @param {number} maxResults The maximum number of application versions to return.
		 *     Minimum: 1    Maximum: 2000
		 * @param {string} nextToken A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter.
		 * @return {ListApplicationVersionsResponse} Success
		 */
		ListApplicationVersions(applicationId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListApplicationVersionsResponse> {
			return this.http.get<ListApplicationVersionsResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/versions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists all the available batch job definitions based on the batch job resources uploaded during the application creation. You can use the batch job definitions in the list to start a batch job.
		 * Get applications/{applicationId}/batch-job-definitions
		 * @param {string} applicationId The identifier of the application.
		 * @param {number} maxResults The maximum number of batch job definitions to return.
		 *     Minimum: 1    Maximum: 2000
		 * @param {string} nextToken A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter.
		 * @param {string} prefix If the batch job definition is a FileBatchJobDefinition, the prefix allows you to search on the file names of FileBatchJobDefinitions.
		 * @return {ListBatchJobDefinitionsResponse} Success
		 */
		ListBatchJobDefinitions(applicationId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, prefix: string | null | undefined): Observable<ListBatchJobDefinitionsResponse> {
			return this.http.get<ListBatchJobDefinitionsResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/batch-job-definitions&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)), {});
		}

		/**
		 * Lists historical, current, and scheduled batch job executions for a specific application.
		 * Get applications/{applicationId}/batch-job-executions
		 * @param {string} applicationId The unique identifier of the application.
		 * @param {Array<string>} executionIds The unique identifier of each batch job execution.
		 *     Minimum items: 1    Maximum items: 10
		 * @param {string} jobName The name of each batch job execution.
		 * @param {number} maxResults The maximum number of batch job executions to return.
		 *     Minimum: 1    Maximum: 2000
		 * @param {string} nextToken A pagination token to control the number of batch job executions displayed in the list.
		 * @param {Date} startedAfter The time after which the batch job executions started.
		 * @param {Date} startedBefore The time before the batch job executions started.
		 * @param {BatchJobExecutionStatus} status The status of the batch job executions.
		 * @return {ListBatchJobExecutionsResponse} Success
		 */
		ListBatchJobExecutions(applicationId: string, executionIds: Array<string> | null | undefined, jobName: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, startedAfter: Date | null | undefined, startedBefore: Date | null | undefined, status: BatchJobExecutionStatus | null | undefined): Observable<ListBatchJobExecutionsResponse> {
			return this.http.get<ListBatchJobExecutionsResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/batch-job-executions&' + executionIds?.map(z => `executionIds=${encodeURIComponent(z)}`).join('&') + '&jobName=' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&startedAfter=' + startedAfter?.toISOString() + '&startedBefore=' + startedBefore?.toISOString() + '&status=' + status, {});
		}

		/**
		 * Lists the data set imports for the specified application.
		 * Get applications/{applicationId}/dataset-import-tasks
		 * @param {string} applicationId The unique identifier of the application.
		 * @param {number} maxResults The maximum number of objects to return.
		 *     Minimum: 1    Maximum: 2000
		 * @param {string} nextToken A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter.
		 * @return {ListDataSetImportHistoryResponse} Success
		 */
		ListDataSetImportHistory(applicationId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListDataSetImportHistoryResponse> {
			return this.http.get<ListDataSetImportHistoryResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/dataset-import-tasks&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists the data sets imported for a specific application. In Amazon Web Services Mainframe Modernization, data sets are associated with applications deployed on runtime environments. This is known as importing data sets. Currently, Amazon Web Services Mainframe Modernization can import data sets into catalogs using <a href="https://docs.aws.amazon.com/m2/latest/APIReference/API_CreateDataSetImportTask.html">CreateDataSetImportTask</a>.
		 * Get applications/{applicationId}/datasets
		 * @param {string} applicationId The unique identifier of the application for which you want to list the associated data sets.
		 * @param {number} maxResults The maximum number of objects to return.
		 *     Minimum: 1    Maximum: 2000
		 * @param {string} nextToken A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter.
		 * @param {string} prefix The prefix of the data set name, which you can use to filter the list of data sets.
		 * @return {ListDataSetsResponse} Success
		 */
		ListDataSets(applicationId: string, maxResults: number | null | undefined, nextToken: string | null | undefined, prefix: string | null | undefined): Observable<ListDataSetsResponse> {
			return this.http.get<ListDataSetsResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/datasets&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&prefix=' + (prefix == null ? '' : encodeURIComponent(prefix)), {});
		}

		/**
		 * Lists the available engine versions.
		 * Get engine-versions
		 * @param {EngineType} engineType The type of target platform.
		 * @param {number} maxResults The maximum number of objects to return.
		 *     Minimum: 1    Maximum: 2000
		 * @param {string} nextToken A pagination token returned from a previous call to this operation. This specifies the next item to return. To return to the beginning of the list, exclude this parameter.
		 * @return {ListEngineVersionsResponse} Success
		 */
		ListEngineVersions(engineType: EngineType | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListEngineVersionsResponse> {
			return this.http.get<ListEngineVersionsResponse>(this.baseUri + 'engine-versions?engineType=' + engineType + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Lists the tags for the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * Adds one or more tags to the specified resource.
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts an application that is currently stopped.
		 * Post applications/{applicationId}/start
		 * @param {string} applicationId The unique identifier of the application you want to start.
		 * @return {StartApplicationResponse} Success
		 */
		StartApplication(applicationId: string): Observable<StartApplicationResponse> {
			return this.http.post<StartApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/start', null, {});
		}

		/**
		 * Starts a batch job and returns the unique identifier of this execution of the batch job. The associated application must be running in order to start the batch job.
		 * Post applications/{applicationId}/batch-job
		 * @param {string} applicationId The unique identifier of the application associated with this batch job.
		 * @return {StartBatchJobResponse} Success
		 */
		StartBatchJob(applicationId: string, requestBody: StartBatchJobPostBody): Observable<StartBatchJobResponse> {
			return this.http.post<StartBatchJobResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/batch-job', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a running application.
		 * Post applications/{applicationId}/stop
		 * @param {string} applicationId The unique identifier of the application you want to stop.
		 * @return {StopApplicationResponse} Success
		 */
		StopApplication(applicationId: string, requestBody: StopApplicationPostBody): Observable<StopApplicationResponse> {
			return this.http.post<StopApplicationResponse>(this.baseUri + 'applications/' + (applicationId == null ? '' : encodeURIComponent(applicationId)) + '/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The keys of the tags to remove.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}
	}

	export interface CreateApplicationPostBody {

		/** Unique, case-sensitive identifier the service generates to ensure the idempotency of the request to create an application. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires. */
		clientToken?: string | null;

		/**
		 * The application definition for a particular application.
		 * Required
		 */
		definition: CreateApplicationPostBodyDefinition;

		/**
		 * The description of the application.
		 * Min length: 0
		 * Max length: 500
		 */
		description?: string | null;

		/**
		 * The type of the target platform for this application.
		 * Required
		 */
		engineType: EngineType;

		/** The identifier of a customer managed key. */
		kmsKeyId?: string | null;

		/**
		 * The unique identifier of the application.
		 * Required
		 */
		name: string;

		/** The Amazon Resource Name (ARN) that identifies a role that the application uses to access Amazon Web Services resources that are not part of the application or are in a different Amazon Web Services account. */
		roleArn?: string | null;

		/** A list of tags to apply to the application. */
		tags?: {[id: string]: string };
	}
	export interface CreateApplicationPostBodyFormProperties {

		/** Unique, case-sensitive identifier the service generates to ensure the idempotency of the request to create an application. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the application.
		 * Min length: 0
		 * Max length: 500
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The type of the target platform for this application.
		 * Required
		 */
		engineType: FormControl<EngineType | null | undefined>,

		/** The identifier of a customer managed key. */
		kmsKeyId: FormControl<string | null | undefined>,

		/**
		 * The unique identifier of the application.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The Amazon Resource Name (ARN) that identifies a role that the application uses to access Amazon Web Services resources that are not part of the application or are in a different Amazon Web Services account. */
		roleArn: FormControl<string | null | undefined>,

		/** A list of tags to apply to the application. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyFormGroup() {
		return new FormGroup<CreateApplicationPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			engineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
			roleArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^arn:(aws|aws-cn|aws-iso|aws-iso-[a-z]{1}|aws-us-gov):[A-Za-z0-9][A-Za-z0-9_/.-]{0,62}:([a-z]{2}-((iso[a-z]{0,1}-)|(gov-)){0,1}[a-z]+-[0-9]|):[0-9]{12}:[A-Za-z0-9/][A-Za-z0-9:_/+=,@.-]{0,1023}$')]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateApplicationPostBodyDefinition {
		content?: string;
		s3Location?: string;
	}
	export interface CreateApplicationPostBodyDefinitionFormProperties {
		content: FormControl<string | null | undefined>,
		s3Location: FormControl<string | null | undefined>,
	}
	export function CreateCreateApplicationPostBodyDefinitionFormGroup() {
		return new FormGroup<CreateApplicationPostBodyDefinitionFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			s3Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSetImportTaskPostBody {

		/** Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create a data set import. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires. */
		clientToken?: string | null;

		/**
		 * Identifies one or more data sets you want to import with the <a>CreateDataSetImportTask</a> operation.
		 * Required
		 */
		importConfig: CreateDataSetImportTaskPostBodyImportConfig;
	}
	export interface CreateDataSetImportTaskPostBodyFormProperties {

		/** Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create a data set import. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires. */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSetImportTaskPostBodyFormGroup() {
		return new FormGroup<CreateDataSetImportTaskPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSetImportTaskPostBodyImportConfig {
		dataSets?: Array<DataSetImportItem>;
		s3Location?: string;
	}
	export interface CreateDataSetImportTaskPostBodyImportConfigFormProperties {
		s3Location: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSetImportTaskPostBodyImportConfigFormGroup() {
		return new FormGroup<CreateDataSetImportTaskPostBodyImportConfigFormProperties>({
			s3Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDeploymentPostBody {

		/**
		 * The version of the application to deploy.
		 * Required
		 * Minimum: 1
		 */
		applicationVersion: number;

		/** Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create a deployment. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires. */
		clientToken?: string | null;

		/**
		 * The identifier of the runtime environment where you want to deploy this application.
		 * Required
		 */
		environmentId: string;
	}
	export interface CreateDeploymentPostBodyFormProperties {

		/**
		 * The version of the application to deploy.
		 * Required
		 * Minimum: 1
		 */
		applicationVersion: FormControl<number | null | undefined>,

		/** Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create a deployment. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The identifier of the runtime environment where you want to deploy this application.
		 * Required
		 */
		environmentId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDeploymentPostBodyFormGroup() {
		return new FormGroup<CreateDeploymentPostBodyFormProperties>({
			applicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			clientToken: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,80}$')]),
		});

	}

	export interface CreateEnvironmentPostBody {

		/** Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create an environment. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires. */
		clientToken?: string | null;

		/**
		 * The description of the runtime environment.
		 * Min length: 0
		 * Max length: 500
		 */
		description?: string | null;

		/**
		 * The engine type for the runtime environment.
		 * Required
		 */
		engineType: EngineType;

		/** The version of the engine type for the runtime environment. */
		engineVersion?: string | null;

		/** Defines the details of a high availability configuration. */
		highAvailabilityConfig?: CreateEnvironmentPostBodyHighAvailabilityConfig;

		/**
		 * The type of instance for the runtime environment.
		 * Required
		 */
		instanceType: string;

		/** The identifier of a customer managed key. */
		kmsKeyId?: string | null;

		/**
		 * The name of the runtime environment. Must be unique within the account.
		 * Required
		 */
		name: string;

		/** Configures the maintenance window you want for the runtime environment. If you do not provide a value, a random system-generated value will be assigned. */
		preferredMaintenanceWindow?: string | null;

		/** Specifies whether the runtime environment is publicly accessible. */
		publiclyAccessible?: boolean | null;

		/** The list of security groups for the VPC associated with this runtime environment. */
		securityGroupIds?: Array<string>;

		/** Optional. The storage configurations for this runtime environment. */
		storageConfigurations?: Array<StorageConfiguration>;

		/** The list of subnets associated with the VPC for this runtime environment. */
		subnetIds?: Array<string>;

		/** The tags for the runtime environment. */
		tags?: {[id: string]: string };
	}
	export interface CreateEnvironmentPostBodyFormProperties {

		/** Unique, case-sensitive identifier you provide to ensure the idempotency of the request to create an environment. The service generates the clientToken when the API call is triggered. The token expires after one hour, so if you retry the API within this timeframe with the same clientToken, you will get the same response. The service also handles deleting the clientToken after it expires. */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * The description of the runtime environment.
		 * Min length: 0
		 * Max length: 500
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The engine type for the runtime environment.
		 * Required
		 */
		engineType: FormControl<EngineType | null | undefined>,

		/** The version of the engine type for the runtime environment. */
		engineVersion: FormControl<string | null | undefined>,

		/**
		 * The type of instance for the runtime environment.
		 * Required
		 */
		instanceType: FormControl<string | null | undefined>,

		/** The identifier of a customer managed key. */
		kmsKeyId: FormControl<string | null | undefined>,

		/**
		 * The name of the runtime environment. Must be unique within the account.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Configures the maintenance window you want for the runtime environment. If you do not provide a value, a random system-generated value will be assigned. */
		preferredMaintenanceWindow: FormControl<string | null | undefined>,

		/** Specifies whether the runtime environment is publicly accessible. */
		publiclyAccessible: FormControl<boolean | null | undefined>,

		/** The tags for the runtime environment. */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateEnvironmentPostBodyFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
			engineType: new FormControl<EngineType | null | undefined>(undefined, [Validators.required]),
			engineVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,10}$')]),
			instanceType: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^\S{1,20}$')]),
			kmsKeyId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$')]),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,50}$')]),
			publiclyAccessible: new FormControl<boolean | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentPostBodyHighAvailabilityConfig {
		desiredCapacity?: number | null;
	}
	export interface CreateEnvironmentPostBodyHighAvailabilityConfigFormProperties {
		desiredCapacity: FormControl<number | null | undefined>,
	}
	export function CreateCreateEnvironmentPostBodyHighAvailabilityConfigFormGroup() {
		return new FormGroup<CreateEnvironmentPostBodyHighAvailabilityConfigFormProperties>({
			desiredCapacity: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationPatchBody {

		/**
		 * The current version of the application to update.
		 * Required
		 * Minimum: 1
		 */
		currentApplicationVersion: number;

		/** The application definition for a particular application. */
		definition?: UpdateApplicationPatchBodyDefinition;

		/**
		 * The description of the application to update.
		 * Min length: 0
		 * Max length: 500
		 */
		description?: string | null;
	}
	export interface UpdateApplicationPatchBodyFormProperties {

		/**
		 * The current version of the application to update.
		 * Required
		 * Minimum: 1
		 */
		currentApplicationVersion: FormControl<number | null | undefined>,

		/**
		 * The description of the application to update.
		 * Min length: 0
		 * Max length: 500
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyFormProperties>({
			currentApplicationVersion: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(500)]),
		});

	}

	export interface UpdateApplicationPatchBodyDefinition {
		content?: string;
		s3Location?: string;
	}
	export interface UpdateApplicationPatchBodyDefinitionFormProperties {
		content: FormControl<string | null | undefined>,
		s3Location: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationPatchBodyDefinitionFormGroup() {
		return new FormGroup<UpdateApplicationPatchBodyDefinitionFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			s3Location: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateEnvironmentPatchBody {

		/** Indicates whether to update the runtime environment during the maintenance window. The default is false. Currently, Amazon Web Services Mainframe Modernization accepts the <code>engineVersion</code> parameter only if <code>applyDuringMaintenanceWindow</code> is true. If any parameter other than <code>engineVersion</code> is provided in <code>UpdateEnvironmentRequest</code>, it will fail if <code>applyDuringMaintenanceWindow</code> is set to true. */
		applyDuringMaintenanceWindow?: boolean | null;

		/**
		 * The desired capacity for the runtime environment to update. The minimum possible value is 0 and the maximum is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		desiredCapacity?: number | null;

		/** The version of the runtime engine for the runtime environment. */
		engineVersion?: string | null;

		/** The instance type for the runtime environment to update. */
		instanceType?: string | null;

		/** Configures the maintenance window you want for the runtime environment. If you do not provide a value, a random system-generated value will be assigned. */
		preferredMaintenanceWindow?: string | null;
	}
	export interface UpdateEnvironmentPatchBodyFormProperties {

		/** Indicates whether to update the runtime environment during the maintenance window. The default is false. Currently, Amazon Web Services Mainframe Modernization accepts the <code>engineVersion</code> parameter only if <code>applyDuringMaintenanceWindow</code> is true. If any parameter other than <code>engineVersion</code> is provided in <code>UpdateEnvironmentRequest</code>, it will fail if <code>applyDuringMaintenanceWindow</code> is set to true. */
		applyDuringMaintenanceWindow: FormControl<boolean | null | undefined>,

		/**
		 * The desired capacity for the runtime environment to update. The minimum possible value is 0 and the maximum is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		desiredCapacity: FormControl<number | null | undefined>,

		/** The version of the runtime engine for the runtime environment. */
		engineVersion: FormControl<string | null | undefined>,

		/** The instance type for the runtime environment to update. */
		instanceType: FormControl<string | null | undefined>,

		/** Configures the maintenance window you want for the runtime environment. If you do not provide a value, a random system-generated value will be assigned. */
		preferredMaintenanceWindow: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentPatchBodyFormGroup() {
		return new FormGroup<UpdateEnvironmentPatchBodyFormProperties>({
			applyDuringMaintenanceWindow: new FormControl<boolean | null | undefined>(undefined),
			desiredCapacity: new FormControl<number | null | undefined>(undefined),
			engineVersion: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,10}$')]),
			instanceType: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^\S{1,20}$')]),
			preferredMaintenanceWindow: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * The tags to add to the resource.
		 * Required
		 */
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartBatchJobPostBody {

		/**
		 * Identifies a specific batch job.
		 * Required
		 */
		batchJobIdentifier: StartBatchJobPostBodyBatchJobIdentifier;

		/** Job parameters are optional. Can contain up to 500 entries. */
		jobParams?: {[id: string]: string };
	}
	export interface StartBatchJobPostBodyFormProperties {

		/** Job parameters are optional. Can contain up to 500 entries. */
		jobParams: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateStartBatchJobPostBodyFormGroup() {
		return new FormGroup<StartBatchJobPostBodyFormProperties>({
			jobParams: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface StartBatchJobPostBodyBatchJobIdentifier {
		fileBatchJobIdentifier?: FileBatchJobIdentifier;
		scriptBatchJobIdentifier?: ScriptBatchJobIdentifier;
	}
	export interface StartBatchJobPostBodyBatchJobIdentifierFormProperties {
	}
	export function CreateStartBatchJobPostBodyBatchJobIdentifierFormGroup() {
		return new FormGroup<StartBatchJobPostBodyBatchJobIdentifierFormProperties>({
		});

	}

	export interface StopApplicationPostBody {

		/** Stopping an application process can take a long time. Setting this parameter to true lets you force stop the application so you don't need to wait until the process finishes to apply another action on the application. The default value is false. */
		forceStop?: boolean | null;
	}
	export interface StopApplicationPostBodyFormProperties {

		/** Stopping an application process can take a long time. Setting this parameter to true lets you force stop the application so you don't need to wait until the process finishes to apply another action on the application. The default value is false. */
		forceStop: FormControl<boolean | null | undefined>,
	}
	export function CreateStopApplicationPostBodyFormGroup() {
		return new FormGroup<StopApplicationPostBodyFormProperties>({
			forceStop: new FormControl<boolean | null | undefined>(undefined),
		});

	}

}

