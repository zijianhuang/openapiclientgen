import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AssociateUserToPermissionGroupResponse {
		statusCode?: number | null;
	}
	export interface AssociateUserToPermissionGroupResponseFormProperties {
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateAssociateUserToPermissionGroupResponseFormGroup() {
		return new FormGroup<AssociateUserToPermissionGroupResponseFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
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

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
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

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}


	/** The response from a CreateChangeset operation. */
	export interface CreateChangesetResponse {
		datasetId?: string;
		changesetId?: string;
	}

	/** The response from a CreateChangeset operation. */
	export interface CreateChangesetResponseFormProperties {
		datasetId: FormControl<string | null | undefined>,
		changesetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateChangesetResponseFormGroup() {
		return new FormGroup<CreateChangesetResponseFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			changesetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}


	/** Response for creating a data view. */
	export interface CreateDataViewResponse {
		datasetId?: string;
		dataViewId?: string;
	}

	/** Response for creating a data view. */
	export interface CreateDataViewResponseFormProperties {
		datasetId: FormControl<string | null | undefined>,
		dataViewId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataViewResponseFormGroup() {
		return new FormGroup<CreateDataViewResponseFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			dataViewId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data View Export File Format */
	export enum ExportFileFormat { PARQUET = 'PARQUET', DELIMITED_TEXT = 'DELIMITED_TEXT' }

	export interface S3DestinationFormatOptions {
	}
	export interface S3DestinationFormatOptionsFormProperties {
	}
	export function CreateS3DestinationFormatOptionsFormGroup() {
		return new FormGroup<S3DestinationFormatOptionsFormProperties>({
		});

	}


	/** The response from a CreateDataset operation */
	export interface CreateDatasetResponse {
		datasetId?: string;
	}

	/** The response from a CreateDataset operation */
	export interface CreateDatasetResponseFormProperties {
		datasetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetResponseFormGroup() {
		return new FormGroup<CreateDatasetResponseFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** <p>Resource permission for a dataset. When you create a dataset, all the other members of the same user group inherit access to the dataset. You can only create a dataset if your user group has application permission for Create Datasets.</p> <p>The following is a list of valid dataset permissions that you can apply: </p> <ul> <li> <p> <code>ViewDatasetDetails</code> </p> </li> <li> <p> <code>ReadDatasetDetails</code> </p> </li> <li> <p> <code>AddDatasetData</code> </p> </li> <li> <p> <code>CreateDataView</code> </p> </li> <li> <p> <code>EditDatasetMetadata</code> </p> </li> <li> <p> <code>DeleteDataset</code> </p> </li> </ul> <p>For more information on the dataset permissions, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/managing-user-permissions.html#supported-dataset-permissions">Supported Dataset Permissions</a> in the FinSpace User Guide.</p> */
	export interface ResourcePermission {
		permission?: string;
	}

	/** <p>Resource permission for a dataset. When you create a dataset, all the other members of the same user group inherit access to the dataset. You can only create a dataset if your user group has application permission for Create Datasets.</p> <p>The following is a list of valid dataset permissions that you can apply: </p> <ul> <li> <p> <code>ViewDatasetDetails</code> </p> </li> <li> <p> <code>ReadDatasetDetails</code> </p> </li> <li> <p> <code>AddDatasetData</code> </p> </li> <li> <p> <code>CreateDataView</code> </p> </li> <li> <p> <code>EditDatasetMetadata</code> </p> </li> <li> <p> <code>DeleteDataset</code> </p> </li> </ul> <p>For more information on the dataset permissions, see <a href="https://docs.aws.amazon.com/finspace/latest/userguide/managing-user-permissions.html#supported-dataset-permissions">Supported Dataset Permissions</a> in the FinSpace User Guide.</p> */
	export interface ResourcePermissionFormProperties {
		permission: FormControl<string | null | undefined>,
	}
	export function CreateResourcePermissionFormGroup() {
		return new FormGroup<ResourcePermissionFormProperties>({
			permission: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Definition for a schema on a tabular Dataset. */
	export interface SchemaDefinition {
		columns?: Array<ColumnDefinition>;
		primaryKeyColumns?: Array<string>;
	}

	/** Definition for a schema on a tabular Dataset. */
	export interface SchemaDefinitionFormProperties {
	}
	export function CreateSchemaDefinitionFormGroup() {
		return new FormGroup<SchemaDefinitionFormProperties>({
		});

	}


	/** The definition of a column in a tabular Dataset. */
	export interface ColumnDefinition {
		dataType?: ColumnDataType;
		columnName?: string;
		columnDescription?: string;
	}

	/** The definition of a column in a tabular Dataset. */
	export interface ColumnDefinitionFormProperties {
		dataType: FormControl<ColumnDataType | null | undefined>,
		columnName: FormControl<string | null | undefined>,
		columnDescription: FormControl<string | null | undefined>,
	}
	export function CreateColumnDefinitionFormGroup() {
		return new FormGroup<ColumnDefinitionFormProperties>({
			dataType: new FormControl<ColumnDataType | null | undefined>(undefined),
			columnName: new FormControl<string | null | undefined>(undefined),
			columnDescription: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Data type of a column. */
	export enum ColumnDataType { STRING = 'STRING', CHAR = 'CHAR', INTEGER = 'INTEGER', TINYINT = 'TINYINT', SMALLINT = 'SMALLINT', BIGINT = 'BIGINT', FLOAT = 'FLOAT', DOUBLE = 'DOUBLE', DATE = 'DATE', DATETIME = 'DATETIME', BOOLEAN = 'BOOLEAN', BINARY = 'BINARY' }

	export interface CreatePermissionGroupResponse {
		permissionGroupId?: string;
	}
	export interface CreatePermissionGroupResponseFormProperties {
		permissionGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionGroupResponseFormGroup() {
		return new FormGroup<CreatePermissionGroupResponseFormProperties>({
			permissionGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ApplicationPermission { CreateDataset = 'CreateDataset', ManageClusters = 'ManageClusters', ManageUsersAndGroups = 'ManageUsersAndGroups', ManageAttributeSets = 'ManageAttributeSets', ViewAuditData = 'ViewAuditData', AccessNotebooks = 'AccessNotebooks', GetTemporaryCredentials = 'GetTemporaryCredentials' }

	export interface CreateUserResponse {
		userId?: string;
	}
	export interface CreateUserResponseFormProperties {
		userId: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserResponseFormGroup() {
		return new FormGroup<CreateUserResponseFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from an DeleteDataset operation */
	export interface DeleteDatasetResponse {
		datasetId?: string;
	}

	/** The response from an DeleteDataset operation */
	export interface DeleteDatasetResponseFormProperties {
		datasetId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetResponseFormGroup() {
		return new FormGroup<DeleteDatasetResponseFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePermissionGroupResponse {
		permissionGroupId?: string;
	}
	export interface DeletePermissionGroupResponseFormProperties {
		permissionGroupId: FormControl<string | null | undefined>,
	}
	export function CreateDeletePermissionGroupResponseFormGroup() {
		return new FormGroup<DeletePermissionGroupResponseFormProperties>({
			permissionGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisableUserResponse {
		userId?: string;
	}
	export interface DisableUserResponseFormProperties {
		userId: FormControl<string | null | undefined>,
	}
	export function CreateDisableUserResponseFormGroup() {
		return new FormGroup<DisableUserResponseFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateUserFromPermissionGroupResponse {
		statusCode?: number | null;
	}
	export interface DisassociateUserFromPermissionGroupResponseFormProperties {
		statusCode: FormControl<number | null | undefined>,
	}
	export function CreateDisassociateUserFromPermissionGroupResponseFormGroup() {
		return new FormGroup<DisassociateUserFromPermissionGroupResponseFormProperties>({
			statusCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnableUserResponse {
		userId?: string;
	}
	export interface EnableUserResponseFormProperties {
		userId: FormControl<string | null | undefined>,
	}
	export function CreateEnableUserResponseFormGroup() {
		return new FormGroup<EnableUserResponseFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from a describe changeset operation */
	export interface GetChangesetResponse {
		changesetId?: string;
		changesetArn?: string;
		datasetId?: string;
		changeType?: ChangeType;
		sourceParams?: SourceParams;
		formatParams?: FormatParams;
		createTime?: number | null;
		status?: IngestionStatus;
		errorInfo?: ChangesetErrorInfo;
		activeUntilTimestamp?: number | null;
		activeFromTimestamp?: number | null;
		updatesChangesetId?: string;
		updatedByChangesetId?: string;
	}

	/** The response from a describe changeset operation */
	export interface GetChangesetResponseFormProperties {
		changesetId: FormControl<string | null | undefined>,
		changesetArn: FormControl<string | null | undefined>,
		datasetId: FormControl<string | null | undefined>,
		changeType: FormControl<ChangeType | null | undefined>,
		createTime: FormControl<number | null | undefined>,
		status: FormControl<IngestionStatus | null | undefined>,
		activeUntilTimestamp: FormControl<number | null | undefined>,
		activeFromTimestamp: FormControl<number | null | undefined>,
		updatesChangesetId: FormControl<string | null | undefined>,
		updatedByChangesetId: FormControl<string | null | undefined>,
	}
	export function CreateGetChangesetResponseFormGroup() {
		return new FormGroup<GetChangesetResponseFormProperties>({
			changesetId: new FormControl<string | null | undefined>(undefined),
			changesetArn: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			changeType: new FormControl<ChangeType | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<IngestionStatus | null | undefined>(undefined),
			activeUntilTimestamp: new FormControl<number | null | undefined>(undefined),
			activeFromTimestamp: new FormControl<number | null | undefined>(undefined),
			updatesChangesetId: new FormControl<string | null | undefined>(undefined),
			updatedByChangesetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Indicates how the given change will be applied to the dataset. */
	export enum ChangeType { REPLACE = 'REPLACE', APPEND = 'APPEND', MODIFY = 'MODIFY' }


	/** Source Parameters of a Changeset */
	export interface SourceParams {
	}

	/** Source Parameters of a Changeset */
	export interface SourceParamsFormProperties {
	}
	export function CreateSourceParamsFormGroup() {
		return new FormGroup<SourceParamsFormProperties>({
		});

	}


	/** Format Parameters of a Changeset */
	export interface FormatParams {
	}

	/** Format Parameters of a Changeset */
	export interface FormatParamsFormProperties {
	}
	export function CreateFormatParamsFormGroup() {
		return new FormGroup<FormatParamsFormProperties>({
		});

	}


	/** Status of the ingestion process returned from scheduler service. */
	export enum IngestionStatus { PENDING = 'PENDING', FAILED = 'FAILED', SUCCESS = 'SUCCESS', RUNNING = 'RUNNING', STOP_REQUESTED = 'STOP_REQUESTED' }


	/** The structure with error messages. */
	export interface ChangesetErrorInfo {
		errorMessage?: string;
		errorCategory?: ErrorCategory;
	}

	/** The structure with error messages. */
	export interface ChangesetErrorInfoFormProperties {
		errorMessage: FormControl<string | null | undefined>,
		errorCategory: FormControl<ErrorCategory | null | undefined>,
	}
	export function CreateChangesetErrorInfoFormGroup() {
		return new FormGroup<ChangesetErrorInfoFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			errorCategory: new FormControl<ErrorCategory | null | undefined>(undefined),
		});

	}


	/** Changeset Error Category */
	export enum ErrorCategory { VALIDATION = 'VALIDATION', SERVICE_QUOTA_EXCEEDED = 'SERVICE_QUOTA_EXCEEDED', ACCESS_DENIED = 'ACCESS_DENIED', RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND', THROTTLING = 'THROTTLING', INTERNAL_SERVICE_EXCEPTION = 'INTERNAL_SERVICE_EXCEPTION', CANCELLED = 'CANCELLED', USER_RECOVERABLE = 'USER_RECOVERABLE' }


	/** Response from retrieving a dataview, which includes details on the target database and table name */
	export interface GetDataViewResponse {
		autoUpdate?: boolean | null;
		partitionColumns?: Array<string>;
		datasetId?: string;
		asOfTimestamp?: number | null;
		errorInfo?: DataViewErrorInfo;
		lastModifiedTime?: number | null;
		createTime?: number | null;
		sortColumns?: Array<string>;
		dataViewId?: string;
		dataViewArn?: string;
		destinationTypeParams?: DataViewDestinationTypeParams;
		status?: DataViewStatus;
	}

	/** Response from retrieving a dataview, which includes details on the target database and table name */
	export interface GetDataViewResponseFormProperties {
		autoUpdate: FormControl<boolean | null | undefined>,
		datasetId: FormControl<string | null | undefined>,
		asOfTimestamp: FormControl<number | null | undefined>,
		lastModifiedTime: FormControl<number | null | undefined>,
		createTime: FormControl<number | null | undefined>,
		dataViewId: FormControl<string | null | undefined>,
		dataViewArn: FormControl<string | null | undefined>,
		status: FormControl<DataViewStatus | null | undefined>,
	}
	export function CreateGetDataViewResponseFormGroup() {
		return new FormGroup<GetDataViewResponseFormProperties>({
			autoUpdate: new FormControl<boolean | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			asOfTimestamp: new FormControl<number | null | undefined>(undefined),
			lastModifiedTime: new FormControl<number | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined),
			dataViewId: new FormControl<string | null | undefined>(undefined),
			dataViewArn: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DataViewStatus | null | undefined>(undefined),
		});

	}


	/** The structure with error messages. */
	export interface DataViewErrorInfo {
		errorMessage?: string;
		errorCategory?: ErrorCategory;
	}

	/** The structure with error messages. */
	export interface DataViewErrorInfoFormProperties {
		errorMessage: FormControl<string | null | undefined>,
		errorCategory: FormControl<ErrorCategory | null | undefined>,
	}
	export function CreateDataViewErrorInfoFormGroup() {
		return new FormGroup<DataViewErrorInfoFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			errorCategory: new FormControl<ErrorCategory | null | undefined>(undefined),
		});

	}


	/** Structure for the Dataview destination type parameters. */
	export interface DataViewDestinationTypeParams {

		/** Required */
		destinationType: string;
		s3DestinationExportFileFormat?: ExportFileFormat;
		s3DestinationExportFileFormatOptions?: S3DestinationFormatOptions;
	}

	/** Structure for the Dataview destination type parameters. */
	export interface DataViewDestinationTypeParamsFormProperties {

		/** Required */
		destinationType: FormControl<string | null | undefined>,
		s3DestinationExportFileFormat: FormControl<ExportFileFormat | null | undefined>,
	}
	export function CreateDataViewDestinationTypeParamsFormGroup() {
		return new FormGroup<DataViewDestinationTypeParamsFormProperties>({
			destinationType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3DestinationExportFileFormat: new FormControl<ExportFileFormat | null | undefined>(undefined),
		});

	}


	/** Status of a DataView */
	export enum DataViewStatus { RUNNING = 'RUNNING', STARTING = 'STARTING', FAILED = 'FAILED', CANCELLED = 'CANCELLED', TIMEOUT = 'TIMEOUT', SUCCESS = 'SUCCESS', PENDING = 'PENDING', FAILED_CLEANUP_FAILED = 'FAILED_CLEANUP_FAILED' }


	/** Response for the GetDataset operation */
	export interface GetDatasetResponse {
		datasetId?: string;
		datasetArn?: string;
		datasetTitle?: string;
		kind?: DatasetKind;
		datasetDescription?: string;
		createTime?: number | null;
		lastModifiedTime?: number | null;
		schemaDefinition?: SchemaUnion;
		alias?: string;
		status?: DatasetStatus;
	}

	/** Response for the GetDataset operation */
	export interface GetDatasetResponseFormProperties {
		datasetId: FormControl<string | null | undefined>,
		datasetArn: FormControl<string | null | undefined>,
		datasetTitle: FormControl<string | null | undefined>,
		kind: FormControl<DatasetKind | null | undefined>,
		datasetDescription: FormControl<string | null | undefined>,
		createTime: FormControl<number | null | undefined>,
		lastModifiedTime: FormControl<number | null | undefined>,
		alias: FormControl<string | null | undefined>,
		status: FormControl<DatasetStatus | null | undefined>,
	}
	export function CreateGetDatasetResponseFormGroup() {
		return new FormGroup<GetDatasetResponseFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			datasetArn: new FormControl<string | null | undefined>(undefined),
			datasetTitle: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<DatasetKind | null | undefined>(undefined),
			datasetDescription: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined),
			lastModifiedTime: new FormControl<number | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<DatasetStatus | null | undefined>(undefined),
		});

	}


	/** Dataset Kind */
	export enum DatasetKind { TABULAR = 'TABULAR', NON_TABULAR = 'NON_TABULAR' }


	/** A union of schema types. */
	export interface SchemaUnion {
		tabularSchemaConfig?: SchemaDefinition;
	}

	/** A union of schema types. */
	export interface SchemaUnionFormProperties {
	}
	export function CreateSchemaUnionFormGroup() {
		return new FormGroup<SchemaUnionFormProperties>({
		});

	}


	/** Status of the dataset process returned from scheduler service. */
	export enum DatasetStatus { PENDING = 'PENDING', FAILED = 'FAILED', SUCCESS = 'SUCCESS', RUNNING = 'RUNNING' }

	export interface GetExternalDataViewAccessDetailsResponse {
		credentials?: AwsCredentials;
		s3Location?: S3Location;
	}
	export interface GetExternalDataViewAccessDetailsResponseFormProperties {
	}
	export function CreateGetExternalDataViewAccessDetailsResponseFormGroup() {
		return new FormGroup<GetExternalDataViewAccessDetailsResponseFormProperties>({
		});

	}


	/**  The credentials required to access the external Dataview from the S3 location. */
	export interface AwsCredentials {
		accessKeyId?: string;
		secretAccessKey?: string;
		sessionToken?: string;
		expiration?: number | null;
	}

	/**  The credentials required to access the external Dataview from the S3 location. */
	export interface AwsCredentialsFormProperties {
		accessKeyId: FormControl<string | null | undefined>,
		secretAccessKey: FormControl<string | null | undefined>,
		sessionToken: FormControl<string | null | undefined>,
		expiration: FormControl<number | null | undefined>,
	}
	export function CreateAwsCredentialsFormGroup() {
		return new FormGroup<AwsCredentialsFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			secretAccessKey: new FormControl<string | null | undefined>(undefined),
			sessionToken: new FormControl<string | null | undefined>(undefined),
			expiration: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The location of an external Dataview in an S3 bucket. */
	export interface S3Location {

		/** Required */
		bucket: string;

		/** Required */
		key: string;
	}

	/** The location of an external Dataview in an S3 bucket. */
	export interface S3LocationFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetPermissionGroupResponse {

		/** The structure for a permission group. */
		permissionGroup?: PermissionGroup;
	}
	export interface GetPermissionGroupResponseFormProperties {
	}
	export function CreateGetPermissionGroupResponseFormGroup() {
		return new FormGroup<GetPermissionGroupResponseFormProperties>({
		});

	}


	/** The structure for a permission group. */
	export interface PermissionGroup {
		permissionGroupId?: string;
		name?: string;
		description?: string;
		applicationPermissions?: Array<ApplicationPermission>;
		createTime?: number | null;
		lastModifiedTime?: number | null;
		membershipStatus?: PermissionGroupMembershipStatus;
	}

	/** The structure for a permission group. */
	export interface PermissionGroupFormProperties {
		permissionGroupId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		createTime: FormControl<number | null | undefined>,
		lastModifiedTime: FormControl<number | null | undefined>,
		membershipStatus: FormControl<PermissionGroupMembershipStatus | null | undefined>,
	}
	export function CreatePermissionGroupFormGroup() {
		return new FormGroup<PermissionGroupFormProperties>({
			permissionGroupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined),
			lastModifiedTime: new FormControl<number | null | undefined>(undefined),
			membershipStatus: new FormControl<PermissionGroupMembershipStatus | null | undefined>(undefined),
		});

	}

	export enum PermissionGroupMembershipStatus { ADDITION_IN_PROGRESS = 'ADDITION_IN_PROGRESS', ADDITION_SUCCESS = 'ADDITION_SUCCESS', REMOVAL_IN_PROGRESS = 'REMOVAL_IN_PROGRESS' }


	/** Response for GetProgrammaticAccessCredentials operation */
	export interface GetProgrammaticAccessCredentialsResponse {
		credentials?: Credentials;
		durationInMinutes?: number | null;
	}

	/** Response for GetProgrammaticAccessCredentials operation */
	export interface GetProgrammaticAccessCredentialsResponseFormProperties {
		durationInMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGetProgrammaticAccessCredentialsResponseFormGroup() {
		return new FormGroup<GetProgrammaticAccessCredentialsResponseFormProperties>({
			durationInMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Short term API credentials. */
	export interface Credentials {
		accessKeyId?: string;
		secretAccessKey?: string;
		sessionToken?: string;
	}

	/** Short term API credentials. */
	export interface CredentialsFormProperties {
		accessKeyId: FormControl<string | null | undefined>,
		secretAccessKey: FormControl<string | null | undefined>,
		sessionToken: FormControl<string | null | undefined>,
	}
	export function CreateCredentialsFormGroup() {
		return new FormGroup<CredentialsFormProperties>({
			accessKeyId: new FormControl<string | null | undefined>(undefined),
			secretAccessKey: new FormControl<string | null | undefined>(undefined),
			sessionToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetUserResponse {
		userId?: string;
		status?: UserStatus;
		firstName?: string;
		lastName?: string;
		emailAddress?: string;
		type?: UserType;
		apiAccess?: ApiAccess;
		apiAccessPrincipalArn?: string;
		createTime?: number | null;
		lastEnabledTime?: number | null;
		lastDisabledTime?: number | null;
		lastModifiedTime?: number | null;
		lastLoginTime?: number | null;
	}
	export interface GetUserResponseFormProperties {
		userId: FormControl<string | null | undefined>,
		status: FormControl<UserStatus | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		type: FormControl<UserType | null | undefined>,
		apiAccess: FormControl<ApiAccess | null | undefined>,
		apiAccessPrincipalArn: FormControl<string | null | undefined>,
		createTime: FormControl<number | null | undefined>,
		lastEnabledTime: FormControl<number | null | undefined>,
		lastDisabledTime: FormControl<number | null | undefined>,
		lastModifiedTime: FormControl<number | null | undefined>,
		lastLoginTime: FormControl<number | null | undefined>,
	}
	export function CreateGetUserResponseFormGroup() {
		return new FormGroup<GetUserResponseFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<UserStatus | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UserType | null | undefined>(undefined),
			apiAccess: new FormControl<ApiAccess | null | undefined>(undefined),
			apiAccessPrincipalArn: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined),
			lastEnabledTime: new FormControl<number | null | undefined>(undefined),
			lastDisabledTime: new FormControl<number | null | undefined>(undefined),
			lastModifiedTime: new FormControl<number | null | undefined>(undefined),
			lastLoginTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum UserStatus { CREATING = 'CREATING', ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export enum UserType { SUPER_USER = 'SUPER_USER', APP_USER = 'APP_USER' }

	export enum ApiAccess { ENABLED = 'ENABLED', DISABLED = 'DISABLED' }

	export interface GetWorkingLocationResponse {
		s3Uri?: string;
		s3Path?: string;
		s3Bucket?: string;
	}
	export interface GetWorkingLocationResponseFormProperties {
		s3Uri: FormControl<string | null | undefined>,
		s3Path: FormControl<string | null | undefined>,
		s3Bucket: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkingLocationResponseFormGroup() {
		return new FormGroup<GetWorkingLocationResponseFormProperties>({
			s3Uri: new FormControl<string | null | undefined>(undefined),
			s3Path: new FormControl<string | null | undefined>(undefined),
			s3Bucket: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to ListChangesetsResponse. This returns a list of dataset changesets that match the query criteria. */
	export interface ListChangesetsResponse {
		changesets?: Array<ChangesetSummary>;
		nextToken?: string;
	}

	/** Response to ListChangesetsResponse. This returns a list of dataset changesets that match the query criteria. */
	export interface ListChangesetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListChangesetsResponseFormGroup() {
		return new FormGroup<ListChangesetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Changeset is unit of data in a Dataset. */
	export interface ChangesetSummary {
		changesetId?: string;
		changesetArn?: string;
		datasetId?: string;
		changeType?: ChangeType;
		sourceParams?: SourceParams;
		formatParams?: FormatParams;
		createTime?: number | null;
		status?: IngestionStatus;
		errorInfo?: ChangesetErrorInfo;
		activeUntilTimestamp?: number | null;
		activeFromTimestamp?: number | null;
		updatesChangesetId?: string;
		updatedByChangesetId?: string;
	}

	/** A Changeset is unit of data in a Dataset. */
	export interface ChangesetSummaryFormProperties {
		changesetId: FormControl<string | null | undefined>,
		changesetArn: FormControl<string | null | undefined>,
		datasetId: FormControl<string | null | undefined>,
		changeType: FormControl<ChangeType | null | undefined>,
		createTime: FormControl<number | null | undefined>,
		status: FormControl<IngestionStatus | null | undefined>,
		activeUntilTimestamp: FormControl<number | null | undefined>,
		activeFromTimestamp: FormControl<number | null | undefined>,
		updatesChangesetId: FormControl<string | null | undefined>,
		updatedByChangesetId: FormControl<string | null | undefined>,
	}
	export function CreateChangesetSummaryFormGroup() {
		return new FormGroup<ChangesetSummaryFormProperties>({
			changesetId: new FormControl<string | null | undefined>(undefined),
			changesetArn: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			changeType: new FormControl<ChangeType | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<IngestionStatus | null | undefined>(undefined),
			activeUntilTimestamp: new FormControl<number | null | undefined>(undefined),
			activeFromTimestamp: new FormControl<number | null | undefined>(undefined),
			updatesChangesetId: new FormControl<string | null | undefined>(undefined),
			updatedByChangesetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDataViewsResponse {
		nextToken?: string;
		dataViews?: Array<DataViewSummary>;
	}
	export interface ListDataViewsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataViewsResponseFormGroup() {
		return new FormGroup<ListDataViewsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Structure for the summary of a Dataview. */
	export interface DataViewSummary {
		dataViewId?: string;
		dataViewArn?: string;
		datasetId?: string;
		asOfTimestamp?: number | null;
		partitionColumns?: Array<string>;
		sortColumns?: Array<string>;
		status?: DataViewStatus;
		errorInfo?: DataViewErrorInfo;
		destinationTypeProperties?: DataViewDestinationTypeParams;
		autoUpdate?: boolean | null;
		createTime?: number | null;
		lastModifiedTime?: number | null;
	}

	/** Structure for the summary of a Dataview. */
	export interface DataViewSummaryFormProperties {
		dataViewId: FormControl<string | null | undefined>,
		dataViewArn: FormControl<string | null | undefined>,
		datasetId: FormControl<string | null | undefined>,
		asOfTimestamp: FormControl<number | null | undefined>,
		status: FormControl<DataViewStatus | null | undefined>,
		autoUpdate: FormControl<boolean | null | undefined>,
		createTime: FormControl<number | null | undefined>,
		lastModifiedTime: FormControl<number | null | undefined>,
	}
	export function CreateDataViewSummaryFormGroup() {
		return new FormGroup<DataViewSummaryFormProperties>({
			dataViewId: new FormControl<string | null | undefined>(undefined),
			dataViewArn: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			asOfTimestamp: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<DataViewStatus | null | undefined>(undefined),
			autoUpdate: new FormControl<boolean | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined),
			lastModifiedTime: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response for the ListDatasets operation */
	export interface ListDatasetsResponse {
		datasets?: Array<Dataset>;
		nextToken?: string;
	}

	/** Response for the ListDatasets operation */
	export interface ListDatasetsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure for a Dataset. */
	export interface Dataset {
		datasetId?: string;
		datasetArn?: string;
		datasetTitle?: string;
		kind?: DatasetKind;
		datasetDescription?: string;
		ownerInfo?: DatasetOwnerInfo;
		createTime?: number | null;
		lastModifiedTime?: number | null;
		schemaDefinition?: SchemaUnion;
		alias?: string;
	}

	/** The structure for a Dataset. */
	export interface DatasetFormProperties {
		datasetId: FormControl<string | null | undefined>,
		datasetArn: FormControl<string | null | undefined>,
		datasetTitle: FormControl<string | null | undefined>,
		kind: FormControl<DatasetKind | null | undefined>,
		datasetDescription: FormControl<string | null | undefined>,
		createTime: FormControl<number | null | undefined>,
		lastModifiedTime: FormControl<number | null | undefined>,
		alias: FormControl<string | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			datasetArn: new FormControl<string | null | undefined>(undefined),
			datasetTitle: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<DatasetKind | null | undefined>(undefined),
			datasetDescription: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined),
			lastModifiedTime: new FormControl<number | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure for Dataset owner info. */
	export interface DatasetOwnerInfo {
		name?: string;
		phoneNumber?: string;
		email?: string;
	}

	/** A structure for Dataset owner info. */
	export interface DatasetOwnerInfoFormProperties {
		name: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
	}
	export function CreateDatasetOwnerInfoFormGroup() {
		return new FormGroup<DatasetOwnerInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionGroupsResponse {
		permissionGroups?: Array<PermissionGroup>;
		nextToken?: string;
	}
	export interface ListPermissionGroupsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionGroupsResponseFormGroup() {
		return new FormGroup<ListPermissionGroupsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionGroupsByUserResponse {
		permissionGroups?: Array<PermissionGroupByUser>;
		nextToken?: string;
	}
	export interface ListPermissionGroupsByUserResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionGroupsByUserResponseFormGroup() {
		return new FormGroup<ListPermissionGroupsByUserResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure of a permission group associated with a user account. */
	export interface PermissionGroupByUser {
		permissionGroupId?: string;
		name?: string;
		membershipStatus?: PermissionGroupMembershipStatus;
	}

	/** The structure of a permission group associated with a user account. */
	export interface PermissionGroupByUserFormProperties {
		permissionGroupId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		membershipStatus: FormControl<PermissionGroupMembershipStatus | null | undefined>,
	}
	export function CreatePermissionGroupByUserFormGroup() {
		return new FormGroup<PermissionGroupByUserFormProperties>({
			permissionGroupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			membershipStatus: new FormControl<PermissionGroupMembershipStatus | null | undefined>(undefined),
		});

	}

	export interface ListUsersResponse {
		users?: Array<User>;
		nextToken?: string;
	}
	export interface ListUsersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The details of the user account. */
	export interface User {
		userId?: string;
		status?: UserStatus;
		firstName?: string;
		lastName?: string;
		emailAddress?: string;
		type?: UserType;
		apiAccess?: ApiAccess;
		apiAccessPrincipalArn?: string;
		createTime?: number | null;
		lastEnabledTime?: number | null;
		lastDisabledTime?: number | null;
		lastModifiedTime?: number | null;
		lastLoginTime?: number | null;
	}

	/** The details of the user account. */
	export interface UserFormProperties {
		userId: FormControl<string | null | undefined>,
		status: FormControl<UserStatus | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		type: FormControl<UserType | null | undefined>,
		apiAccess: FormControl<ApiAccess | null | undefined>,
		apiAccessPrincipalArn: FormControl<string | null | undefined>,
		createTime: FormControl<number | null | undefined>,
		lastEnabledTime: FormControl<number | null | undefined>,
		lastDisabledTime: FormControl<number | null | undefined>,
		lastModifiedTime: FormControl<number | null | undefined>,
		lastLoginTime: FormControl<number | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<UserStatus | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UserType | null | undefined>(undefined),
			apiAccess: new FormControl<ApiAccess | null | undefined>(undefined),
			apiAccessPrincipalArn: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<number | null | undefined>(undefined),
			lastEnabledTime: new FormControl<number | null | undefined>(undefined),
			lastDisabledTime: new FormControl<number | null | undefined>(undefined),
			lastModifiedTime: new FormControl<number | null | undefined>(undefined),
			lastLoginTime: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListUsersByPermissionGroupResponse {
		users?: Array<UserByPermissionGroup>;
		nextToken?: string;
	}
	export interface ListUsersByPermissionGroupResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListUsersByPermissionGroupResponseFormGroup() {
		return new FormGroup<ListUsersByPermissionGroupResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The structure of a user account associated with a permission group. */
	export interface UserByPermissionGroup {
		userId?: string;
		status?: UserStatus;
		firstName?: string;
		lastName?: string;
		emailAddress?: string;
		type?: UserType;
		apiAccess?: ApiAccess;
		apiAccessPrincipalArn?: string;
		membershipStatus?: PermissionGroupMembershipStatus;
	}

	/** The structure of a user account associated with a permission group. */
	export interface UserByPermissionGroupFormProperties {
		userId: FormControl<string | null | undefined>,
		status: FormControl<UserStatus | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		emailAddress: FormControl<string | null | undefined>,
		type: FormControl<UserType | null | undefined>,
		apiAccess: FormControl<ApiAccess | null | undefined>,
		apiAccessPrincipalArn: FormControl<string | null | undefined>,
		membershipStatus: FormControl<PermissionGroupMembershipStatus | null | undefined>,
	}
	export function CreateUserByPermissionGroupFormGroup() {
		return new FormGroup<UserByPermissionGroupFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<UserStatus | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<UserType | null | undefined>(undefined),
			apiAccess: new FormControl<ApiAccess | null | undefined>(undefined),
			apiAccessPrincipalArn: new FormControl<string | null | undefined>(undefined),
			membershipStatus: new FormControl<PermissionGroupMembershipStatus | null | undefined>(undefined),
		});

	}

	export interface ResetUserPasswordResponse {
		userId?: string;
		temporaryPassword?: string;
	}
	export interface ResetUserPasswordResponseFormProperties {
		userId: FormControl<string | null | undefined>,
		temporaryPassword: FormControl<string | null | undefined>,
	}
	export function CreateResetUserPasswordResponseFormGroup() {
		return new FormGroup<ResetUserPasswordResponseFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
			temporaryPassword: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from a update changeset operation. */
	export interface UpdateChangesetResponse {
		changesetId?: string;
		datasetId?: string;
	}

	/** The response from a update changeset operation. */
	export interface UpdateChangesetResponseFormProperties {
		changesetId: FormControl<string | null | undefined>,
		datasetId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChangesetResponseFormGroup() {
		return new FormGroup<UpdateChangesetResponseFormProperties>({
			changesetId: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response from an UpdateDataset operation */
	export interface UpdateDatasetResponse {
		datasetId?: string;
	}

	/** The response from an UpdateDataset operation */
	export interface UpdateDatasetResponseFormProperties {
		datasetId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetResponseFormGroup() {
		return new FormGroup<UpdateDatasetResponseFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePermissionGroupResponse {
		permissionGroupId?: string;
	}
	export interface UpdatePermissionGroupResponseFormProperties {
		permissionGroupId: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePermissionGroupResponseFormGroup() {
		return new FormGroup<UpdatePermissionGroupResponseFormProperties>({
			permissionGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserResponse {
		userId?: string;
	}
	export interface UpdateUserResponseFormProperties {
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociateUserToPermissionGroupRequest {
		clientToken?: string;
	}
	export interface AssociateUserToPermissionGroupRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateUserToPermissionGroupRequestFormGroup() {
		return new FormGroup<AssociateUserToPermissionGroupRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for a CreateChangeset operation. */
	export interface CreateChangesetRequest {
		clientToken?: string;

		/** Required */
		changeType: ChangeType;

		/** Required */
		sourceParams: SourceParams;

		/** Required */
		formatParams: FormatParams;
	}

	/** The request for a CreateChangeset operation. */
	export interface CreateChangesetRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		changeType: FormControl<ChangeType | null | undefined>,
	}
	export function CreateCreateChangesetRequestFormGroup() {
		return new FormGroup<CreateChangesetRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			changeType: new FormControl<ChangeType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Request for creating a data view. */
	export interface CreateDataViewRequest {
		clientToken?: string;
		autoUpdate?: boolean | null;
		sortColumns?: Array<string>;
		partitionColumns?: Array<string>;
		asOfTimestamp?: number | null;

		/** Required */
		destinationTypeParams: DataViewDestinationTypeParams;
	}

	/** Request for creating a data view. */
	export interface CreateDataViewRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
		autoUpdate: FormControl<boolean | null | undefined>,
		asOfTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateCreateDataViewRequestFormGroup() {
		return new FormGroup<CreateDataViewRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			autoUpdate: new FormControl<boolean | null | undefined>(undefined),
			asOfTimestamp: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>Permission group parameters for Dataset permissions.</p> <p>Here is an example of how you could specify the <code>PermissionGroupParams</code>:</p> <p> <code> { "permissionGroupId": "0r6fCRtSTUk4XPfXQe3M0g", "datasetPermissions": [ {"permission": "ViewDatasetDetails"}, {"permission": "AddDatasetData"}, {"permission": "EditDatasetMetadata"}, {"permission": "DeleteDataset"} ] } </code> </p> */
	export interface PermissionGroupParams {
		permissionGroupId?: string;
		datasetPermissions?: Array<ResourcePermission>;
	}

	/** <p>Permission group parameters for Dataset permissions.</p> <p>Here is an example of how you could specify the <code>PermissionGroupParams</code>:</p> <p> <code> { "permissionGroupId": "0r6fCRtSTUk4XPfXQe3M0g", "datasetPermissions": [ {"permission": "ViewDatasetDetails"}, {"permission": "AddDatasetData"}, {"permission": "EditDatasetMetadata"}, {"permission": "DeleteDataset"} ] } </code> </p> */
	export interface PermissionGroupParamsFormProperties {
		permissionGroupId: FormControl<string | null | undefined>,
	}
	export function CreatePermissionGroupParamsFormGroup() {
		return new FormGroup<PermissionGroupParamsFormProperties>({
			permissionGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for a CreateDataset operation */
	export interface CreateDatasetRequest {
		clientToken?: string;

		/** Required */
		datasetTitle: string;

		/** Required */
		kind: DatasetKind;
		datasetDescription?: string;
		ownerInfo?: DatasetOwnerInfo;

		/** Required */
		permissionGroupParams: PermissionGroupParams;
		alias?: string;
		schemaDefinition?: SchemaUnion;
	}

	/** The request for a CreateDataset operation */
	export interface CreateDatasetRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		datasetTitle: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<DatasetKind | null | undefined>,
		datasetDescription: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			datasetTitle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<DatasetKind | null | undefined>(undefined, [Validators.required]),
			datasetDescription: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePermissionGroupRequest {

		/** Required */
		name: string;
		description?: string;

		/** Required */
		applicationPermissions: Array<ApplicationPermission>;
		clientToken?: string;
	}
	export interface CreatePermissionGroupRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionGroupRequestFormGroup() {
		return new FormGroup<CreatePermissionGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateUserRequest {

		/** Required */
		emailAddress: string;

		/** Required */
		type: UserType;
		firstName?: string;
		lastName?: string;
		ApiAccess?: ApiAccess;
		apiAccessPrincipalArn?: string;
		clientToken?: string;
	}
	export interface CreateUserRequestFormProperties {

		/** Required */
		emailAddress: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<UserType | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		ApiAccess: FormControl<ApiAccess | null | undefined>,
		apiAccessPrincipalArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserRequestFormGroup() {
		return new FormGroup<CreateUserRequestFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<UserType | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			ApiAccess: new FormControl<ApiAccess | null | undefined>(undefined),
			apiAccessPrincipalArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for a DeleteDataset operation. */
	export interface DeleteDatasetRequest {
	}

	/** The request for a DeleteDataset operation. */
	export interface DeleteDatasetRequestFormProperties {
	}
	export function CreateDeleteDatasetRequestFormGroup() {
		return new FormGroup<DeleteDatasetRequestFormProperties>({
		});

	}

	export interface DeletePermissionGroupRequest {
	}
	export interface DeletePermissionGroupRequestFormProperties {
	}
	export function CreateDeletePermissionGroupRequestFormGroup() {
		return new FormGroup<DeletePermissionGroupRequestFormProperties>({
		});

	}

	export interface DisableUserRequest {
		clientToken?: string;
	}
	export interface DisableUserRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisableUserRequestFormGroup() {
		return new FormGroup<DisableUserRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DisassociateUserFromPermissionGroupRequest {
	}
	export interface DisassociateUserFromPermissionGroupRequestFormProperties {
	}
	export function CreateDisassociateUserFromPermissionGroupRequestFormGroup() {
		return new FormGroup<DisassociateUserFromPermissionGroupRequestFormProperties>({
		});

	}

	export interface EnableUserRequest {
		clientToken?: string;
	}
	export interface EnableUserRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateEnableUserRequestFormGroup() {
		return new FormGroup<EnableUserRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to describe a changeset. */
	export interface GetChangesetRequest {
	}

	/** Request to describe a changeset. */
	export interface GetChangesetRequestFormProperties {
	}
	export function CreateGetChangesetRequestFormGroup() {
		return new FormGroup<GetChangesetRequestFormProperties>({
		});

	}


	/** Request for retrieving a data view detail. Grouped / accessible within a dataset by its dataset id. */
	export interface GetDataViewRequest {
	}

	/** Request for retrieving a data view detail. Grouped / accessible within a dataset by its dataset id. */
	export interface GetDataViewRequestFormProperties {
	}
	export function CreateGetDataViewRequestFormGroup() {
		return new FormGroup<GetDataViewRequestFormProperties>({
		});

	}


	/** Request for the GetDataset operation. */
	export interface GetDatasetRequest {
	}

	/** Request for the GetDataset operation. */
	export interface GetDatasetRequestFormProperties {
	}
	export function CreateGetDatasetRequestFormGroup() {
		return new FormGroup<GetDatasetRequestFormProperties>({
		});

	}

	export interface GetExternalDataViewAccessDetailsRequest {
	}
	export interface GetExternalDataViewAccessDetailsRequestFormProperties {
	}
	export function CreateGetExternalDataViewAccessDetailsRequestFormGroup() {
		return new FormGroup<GetExternalDataViewAccessDetailsRequestFormProperties>({
		});

	}

	export interface GetPermissionGroupRequest {
	}
	export interface GetPermissionGroupRequestFormProperties {
	}
	export function CreateGetPermissionGroupRequestFormGroup() {
		return new FormGroup<GetPermissionGroupRequestFormProperties>({
		});

	}


	/** Request for GetProgrammaticAccessCredentials operation */
	export interface GetProgrammaticAccessCredentialsRequest {
	}

	/** Request for GetProgrammaticAccessCredentials operation */
	export interface GetProgrammaticAccessCredentialsRequestFormProperties {
	}
	export function CreateGetProgrammaticAccessCredentialsRequestFormGroup() {
		return new FormGroup<GetProgrammaticAccessCredentialsRequestFormProperties>({
		});

	}

	export interface GetUserRequest {
	}
	export interface GetUserRequestFormProperties {
	}
	export function CreateGetUserRequestFormGroup() {
		return new FormGroup<GetUserRequestFormProperties>({
		});

	}

	export enum LocationType { INGESTION = 'INGESTION', SAGEMAKER = 'SAGEMAKER' }

	export interface GetWorkingLocationRequest {
		locationType?: LocationType;
	}
	export interface GetWorkingLocationRequestFormProperties {
		locationType: FormControl<LocationType | null | undefined>,
	}
	export function CreateGetWorkingLocationRequestFormGroup() {
		return new FormGroup<GetWorkingLocationRequestFormProperties>({
			locationType: new FormControl<LocationType | null | undefined>(undefined),
		});

	}


	/** Request to ListChangesetsRequest. It exposes minimal query filters. */
	export interface ListChangesetsRequest {
	}

	/** Request to ListChangesetsRequest. It exposes minimal query filters. */
	export interface ListChangesetsRequestFormProperties {
	}
	export function CreateListChangesetsRequestFormGroup() {
		return new FormGroup<ListChangesetsRequestFormProperties>({
		});

	}


	/** Request for a list data views. */
	export interface ListDataViewsRequest {
	}

	/** Request for a list data views. */
	export interface ListDataViewsRequestFormProperties {
	}
	export function CreateListDataViewsRequestFormGroup() {
		return new FormGroup<ListDataViewsRequestFormProperties>({
		});

	}


	/** Request for the ListDatasets operation. */
	export interface ListDatasetsRequest {
	}

	/** Request for the ListDatasets operation. */
	export interface ListDatasetsRequestFormProperties {
	}
	export function CreateListDatasetsRequestFormGroup() {
		return new FormGroup<ListDatasetsRequestFormProperties>({
		});

	}

	export interface ListPermissionGroupsByUserRequest {
	}
	export interface ListPermissionGroupsByUserRequestFormProperties {
	}
	export function CreateListPermissionGroupsByUserRequestFormGroup() {
		return new FormGroup<ListPermissionGroupsByUserRequestFormProperties>({
		});

	}

	export interface ListPermissionGroupsRequest {
	}
	export interface ListPermissionGroupsRequestFormProperties {
	}
	export function CreateListPermissionGroupsRequestFormGroup() {
		return new FormGroup<ListPermissionGroupsRequestFormProperties>({
		});

	}

	export interface ListUsersByPermissionGroupRequest {
	}
	export interface ListUsersByPermissionGroupRequestFormProperties {
	}
	export function CreateListUsersByPermissionGroupRequestFormGroup() {
		return new FormGroup<ListUsersByPermissionGroupRequestFormProperties>({
		});

	}

	export interface ListUsersRequest {
	}
	export interface ListUsersRequestFormProperties {
	}
	export function CreateListUsersRequestFormGroup() {
		return new FormGroup<ListUsersRequestFormProperties>({
		});

	}

	export interface ResetUserPasswordRequest {
		clientToken?: string;
	}
	export interface ResetUserPasswordRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateResetUserPasswordRequestFormGroup() {
		return new FormGroup<ResetUserPasswordRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to update an existing changeset. */
	export interface UpdateChangesetRequest {
		clientToken?: string;

		/** Required */
		sourceParams: SourceParams;

		/** Required */
		formatParams: FormatParams;
	}

	/** Request to update an existing changeset. */
	export interface UpdateChangesetRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateChangesetRequestFormGroup() {
		return new FormGroup<UpdateChangesetRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for an UpdateDataset operation */
	export interface UpdateDatasetRequest {
		clientToken?: string;

		/** Required */
		datasetTitle: string;

		/** Required */
		kind: DatasetKind;
		datasetDescription?: string;
		alias?: string;
		schemaDefinition?: SchemaUnion;
	}

	/** The request for an UpdateDataset operation */
	export interface UpdateDatasetRequestFormProperties {
		clientToken: FormControl<string | null | undefined>,

		/** Required */
		datasetTitle: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<DatasetKind | null | undefined>,
		datasetDescription: FormControl<string | null | undefined>,
		alias: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetRequestFormGroup() {
		return new FormGroup<UpdateDatasetRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined),
			datasetTitle: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<DatasetKind | null | undefined>(undefined, [Validators.required]),
			datasetDescription: new FormControl<string | null | undefined>(undefined),
			alias: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePermissionGroupRequest {
		name?: string;
		description?: string;
		applicationPermissions?: Array<ApplicationPermission>;
		clientToken?: string;
	}
	export interface UpdatePermissionGroupRequestFormProperties {
		name: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePermissionGroupRequestFormGroup() {
		return new FormGroup<UpdatePermissionGroupRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserRequest {
		type?: UserType;
		firstName?: string;
		lastName?: string;
		apiAccess?: ApiAccess;
		apiAccessPrincipalArn?: string;
		clientToken?: string;
	}
	export interface UpdateUserRequestFormProperties {
		type: FormControl<UserType | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		apiAccess: FormControl<ApiAccess | null | undefined>,
		apiAccessPrincipalArn: FormControl<string | null | undefined>,
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			type: new FormControl<UserType | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			apiAccess: new FormControl<ApiAccess | null | undefined>(undefined),
			apiAccessPrincipalArn: new FormControl<string | null | undefined>(undefined),
			clientToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Adds a user account to a permission group to grant permissions for actions a user can perform in FinSpace.
		 * Post permission-group/{permissionGroupId}/users/{userId}
		 * @param {string} permissionGroupId The unique identifier for the permission group.
		 * @param {string} userId The unique identifier for the user.
		 * @return {AssociateUserToPermissionGroupResponse} Success
		 */
		AssociateUserToPermissionGroup(permissionGroupId: string, userId: string, requestBody: AssociateUserToPermissionGroupPostBody): Observable<AssociateUserToPermissionGroupResponse> {
			return this.http.post<AssociateUserToPermissionGroupResponse>(this.baseUri + 'permission-group/' + (permissionGroupId == null ? '' : encodeURIComponent(permissionGroupId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a user account from a permission group.
		 * Delete permission-group/{permissionGroupId}/users/{userId}
		 * @param {string} permissionGroupId The unique identifier for the permission group.
		 * @param {string} userId The unique identifier for the user.
		 * @param {string} clientToken A token that ensures idempotency. This token expires in 10 minutes.
		 * @return {DisassociateUserFromPermissionGroupResponse} Success
		 */
		DisassociateUserFromPermissionGroup(permissionGroupId: string, userId: string, clientToken: string | null | undefined): Observable<DisassociateUserFromPermissionGroupResponse> {
			return this.http.delete<DisassociateUserFromPermissionGroupResponse>(this.baseUri + 'permission-group/' + (permissionGroupId == null ? '' : encodeURIComponent(permissionGroupId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * Creates a new Changeset in a FinSpace Dataset.
		 * Post datasets/{datasetId}/changesetsv2
		 * @param {string} datasetId The unique identifier for the FinSpace Dataset where the Changeset will be created. 
		 * @return {CreateChangesetResponse} Success
		 */
		CreateChangeset(datasetId: string, requestBody: CreateChangesetPostBody): Observable<CreateChangesetResponse> {
			return this.http.post<CreateChangesetResponse>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/changesetsv2', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the FinSpace Changesets for a Dataset.
		 * Get datasets/{datasetId}/changesetsv2
		 * @param {string} datasetId The unique identifier for the FinSpace Dataset to which the Changeset belongs.
		 * @param {number} maxResults The maximum number of results per page.
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @return {ListChangesetsResponse} Success
		 */
		ListChangesets(datasetId: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListChangesetsResponse> {
			return this.http.get<ListChangesetsResponse>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/changesetsv2&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Creates a Dataview for a Dataset.
		 * Post datasets/{datasetId}/dataviewsv2
		 * @param {string} datasetId The unique Dataset identifier that is used to create a Dataview.
		 * @return {CreateDataViewResponse} Success
		 */
		CreateDataView(datasetId: string, requestBody: CreateDataViewPostBody): Observable<CreateDataViewResponse> {
			return this.http.post<CreateDataViewResponse>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/dataviewsv2', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all available Dataviews for a Dataset.
		 * Get datasets/{datasetId}/dataviewsv2
		 * @param {string} datasetId The unique identifier of the Dataset for which to retrieve Dataviews.
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results per page.
		 * @return {ListDataViewsResponse} Success
		 */
		ListDataViews(datasetId: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDataViewsResponse> {
			return this.http.get<ListDataViewsResponse>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/dataviewsv2&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new FinSpace Dataset.
		 * Post datasetsv2
		 * @return {CreateDatasetResponse} Success
		 */
		CreateDataset(requestBody: CreateDatasetPostBody): Observable<CreateDatasetResponse> {
			return this.http.post<CreateDatasetResponse>(this.baseUri + 'datasetsv2', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the active Datasets that a user has access to.
		 * Get datasetsv2
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results per page.
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListDatasetsResponse> {
			return this.http.get<ListDatasetsResponse>(this.baseUri + 'datasetsv2?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a group of permissions for various actions that a user can perform in FinSpace.
		 * Post permission-group
		 * @return {CreatePermissionGroupResponse} Success
		 */
		CreatePermissionGroup(requestBody: CreatePermissionGroupPostBody): Observable<CreatePermissionGroupResponse> {
			return this.http.post<CreatePermissionGroupResponse>(this.baseUri + 'permission-group', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new user in FinSpace.
		 * Post user
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(requestBody: CreateUserPostBody): Observable<CreateUserResponse> {
			return this.http.post<CreateUserResponse>(this.baseUri + 'user', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a FinSpace Dataset.
		 * Delete datasetsv2/{datasetId}
		 * @param {string} clientToken A token that ensures idempotency. This token expires in 10 minutes.
		 * @param {string} datasetId The unique identifier of the Dataset to be deleted.
		 * @return {DeleteDatasetResponse} Success
		 */
		DeleteDataset(clientToken: string | null | undefined, datasetId: string): Observable<DeleteDatasetResponse> {
			return this.http.delete<DeleteDatasetResponse>(this.baseUri + 'datasetsv2/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '?clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * Returns information about a Dataset.
		 * Get datasetsv2/{datasetId}
		 * @param {string} datasetId The unique identifier for a Dataset.
		 * @return {GetDatasetResponse} Success
		 */
		GetDataset(datasetId: string): Observable<GetDatasetResponse> {
			return this.http.get<GetDatasetResponse>(this.baseUri + 'datasetsv2/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), {});
		}

		/**
		 * Updates a FinSpace Dataset.
		 * Put datasetsv2/{datasetId}
		 * @param {string} datasetId The unique identifier for the Dataset to update.
		 * @return {UpdateDatasetResponse} Success
		 */
		UpdateDataset(datasetId: string, requestBody: UpdateDatasetPutBody): Observable<UpdateDatasetResponse> {
			return this.http.put<UpdateDatasetResponse>(this.baseUri + 'datasetsv2/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a permission group. This action is irreversible.
		 * Delete permission-group/{permissionGroupId}
		 * @param {string} permissionGroupId The unique identifier for the permission group that you want to delete.
		 * @param {string} clientToken A token that ensures idempotency. This token expires in 10 minutes.
		 * @return {DeletePermissionGroupResponse} Success
		 */
		DeletePermissionGroup(permissionGroupId: string, clientToken: string | null | undefined): Observable<DeletePermissionGroupResponse> {
			return this.http.delete<DeletePermissionGroupResponse>(this.baseUri + 'permission-group/' + (permissionGroupId == null ? '' : encodeURIComponent(permissionGroupId)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), {});
		}

		/**
		 * Retrieves the details of a specific permission group.
		 * Get permission-group/{permissionGroupId}
		 * @param {string} permissionGroupId The unique identifier for the permission group.
		 * @return {GetPermissionGroupResponse} Success
		 */
		GetPermissionGroup(permissionGroupId: string): Observable<GetPermissionGroupResponse> {
			return this.http.get<GetPermissionGroupResponse>(this.baseUri + 'permission-group/' + (permissionGroupId == null ? '' : encodeURIComponent(permissionGroupId)), {});
		}

		/**
		 * Modifies the details of a permission group. You cannot modify a <code>permissionGroupID</code>.
		 * Put permission-group/{permissionGroupId}
		 * @param {string} permissionGroupId The unique identifier for the permission group to update.
		 * @return {UpdatePermissionGroupResponse} Success
		 */
		UpdatePermissionGroup(permissionGroupId: string, requestBody: UpdatePermissionGroupPutBody): Observable<UpdatePermissionGroupResponse> {
			return this.http.put<UpdatePermissionGroupResponse>(this.baseUri + 'permission-group/' + (permissionGroupId == null ? '' : encodeURIComponent(permissionGroupId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Denies access to the FinSpace web application and API for the specified user.
		 * Post user/{userId}/disable
		 * @param {string} userId The unique identifier for the user account that you want to disable.
		 * @return {DisableUserResponse} Success
		 */
		DisableUser(userId: string, requestBody: DisableUserPostBody): Observable<DisableUserResponse> {
			return this.http.post<DisableUserResponse>(this.baseUri + 'user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows the specified user to access the FinSpace web application and API.
		 * Post user/{userId}/enable
		 * @param {string} userId The unique identifier for the user account that you want to enable.
		 * @return {EnableUserResponse} Success
		 */
		EnableUser(userId: string, requestBody: EnableUserPostBody): Observable<EnableUserResponse> {
			return this.http.post<EnableUserResponse>(this.baseUri + 'user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get information about a Changeset.
		 * Get datasets/{datasetId}/changesetsv2/{changesetId}
		 * @param {string} datasetId The unique identifier for the FinSpace Dataset where the Changeset is created.
		 * @param {string} changesetId The unique identifier of the Changeset for which to get data.
		 * @return {GetChangesetResponse} Success
		 */
		GetChangeset(datasetId: string, changesetId: string): Observable<GetChangesetResponse> {
			return this.http.get<GetChangesetResponse>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/changesetsv2/' + (changesetId == null ? '' : encodeURIComponent(changesetId)), {});
		}

		/**
		 * Updates a FinSpace Changeset.
		 * Put datasets/{datasetId}/changesetsv2/{changesetId}
		 * @param {string} datasetId The unique identifier for the FinSpace Dataset in which the Changeset is created.
		 * @param {string} changesetId The unique identifier for the Changeset to update.
		 * @return {UpdateChangesetResponse} Success
		 */
		UpdateChangeset(datasetId: string, changesetId: string, requestBody: UpdateChangesetPutBody): Observable<UpdateChangesetResponse> {
			return this.http.put<UpdateChangesetResponse>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/changesetsv2/' + (changesetId == null ? '' : encodeURIComponent(changesetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets information about a Dataview.
		 * Get datasets/{datasetId}/dataviewsv2/{dataviewId}
		 * @param {string} dataviewId The unique identifier for the Dataview.
		 * @param {string} datasetId The unique identifier for the Dataset used in the Dataview.
		 * @return {GetDataViewResponse} Success
		 */
		GetDataView(dataviewId: string, datasetId: string): Observable<GetDataViewResponse> {
			return this.http.get<GetDataViewResponse>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/dataviewsv2/' + (dataviewId == null ? '' : encodeURIComponent(dataviewId)), {});
		}

		/**
		 * <p>Returns the credentials to access the external Dataview from an S3 location. To call this API:</p> <ul> <li> <p>You must retrieve the programmatic credentials.</p> </li> <li> <p>You must be a member of a FinSpace user group, where the dataset that you want to access has <code>Read Dataset Data</code> permissions.</p> </li> </ul>
		 * Post datasets/{datasetId}/dataviewsv2/{dataviewId}/external-access-details
		 * @param {string} dataviewId The unique identifier for the Dataview that you want to access.
		 * @param {string} datasetId The unique identifier for the Dataset.
		 * @return {GetExternalDataViewAccessDetailsResponse} Success
		 */
		GetExternalDataViewAccessDetails(dataviewId: string, datasetId: string): Observable<GetExternalDataViewAccessDetailsResponse> {
			return this.http.post<GetExternalDataViewAccessDetailsResponse>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '/dataviewsv2/' + (dataviewId == null ? '' : encodeURIComponent(dataviewId)) + '/external-access-details', null, {});
		}

		/**
		 * Request programmatic credentials to use with FinSpace SDK.
		 * Get credentials/programmatic#environmentId
		 * @param {number} durationInMinutes The time duration in which the credentials remain valid. 
		 * @param {string} environmentId The FinSpace environment identifier.
		 * @return {GetProgrammaticAccessCredentialsResponse} Success
		 */
		GetProgrammaticAccessCredentials(durationInMinutes: number | null | undefined, environmentId: string): Observable<GetProgrammaticAccessCredentialsResponse> {
			return this.http.get<GetProgrammaticAccessCredentialsResponse>(this.baseUri + 'credentials/programmatic#environmentId?durationInMinutes=' + durationInMinutes + '&environmentId=' + (environmentId == null ? '' : encodeURIComponent(environmentId)), {});
		}

		/**
		 * Retrieves details for a specific user.
		 * Get user/{userId}
		 * @param {string} userId The unique identifier of the user to get data for.
		 * @return {GetUserResponse} Success
		 */
		GetUser(userId: string): Observable<GetUserResponse> {
			return this.http.get<GetUserResponse>(this.baseUri + 'user/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Modifies the details of the specified user account. You cannot update the <code>userId</code> for a user.
		 * Put user/{userId}
		 * @param {string} userId The unique identifier for the user account to update.
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(userId: string, requestBody: UpdateUserPutBody): Observable<UpdateUserResponse> {
			return this.http.put<UpdateUserResponse>(this.baseUri + 'user/' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * A temporary Amazon S3 location, where you can copy your files from a source location to stage or use as a scratch space in FinSpace notebook.
		 * Post workingLocationV1
		 * @return {GetWorkingLocationResponse} Success
		 */
		GetWorkingLocation(requestBody: GetWorkingLocationPostBody): Observable<GetWorkingLocationResponse> {
			return this.http.post<GetWorkingLocationResponse>(this.baseUri + 'workingLocationV1', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all available permission groups in FinSpace.
		 * Get permission-group#maxResults
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results per page.
		 * @return {ListPermissionGroupsResponse} Success
		 */
		ListPermissionGroups(nextToken: string | null | undefined, maxResults: number): Observable<ListPermissionGroupsResponse> {
			return this.http.get<ListPermissionGroupsResponse>(this.baseUri + 'permission-group#maxResults?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists all the permission groups that are associated with a specific user account.
		 * Get user/{userId}/permission-groups#maxResults
		 * @param {string} userId The unique identifier for the user.
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results per page.
		 * @return {ListPermissionGroupsByUserResponse} Success
		 */
		ListPermissionGroupsByUser(userId: string, nextToken: string | null | undefined, maxResults: number): Observable<ListPermissionGroupsByUserResponse> {
			return this.http.get<ListPermissionGroupsByUserResponse>(this.baseUri + 'user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/permission-groups#maxResults&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists all available user accounts in FinSpace.
		 * Get user#maxResults
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results per page.
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(nextToken: string | null | undefined, maxResults: number): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'user#maxResults?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Lists details of all the users in a specific permission group.
		 * Get permission-group/{permissionGroupId}/users#maxResults
		 * @param {string} permissionGroupId The unique identifier for the permission group.
		 * @param {string} nextToken A token that indicates where a results page should begin.
		 * @param {number} maxResults The maximum number of results per page.
		 * @return {ListUsersByPermissionGroupResponse} Success
		 */
		ListUsersByPermissionGroup(permissionGroupId: string, nextToken: string | null | undefined, maxResults: number): Observable<ListUsersByPermissionGroupResponse> {
			return this.http.get<ListUsersByPermissionGroupResponse>(this.baseUri + 'permission-group/' + (permissionGroupId == null ? '' : encodeURIComponent(permissionGroupId)) + '/users#maxResults&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Resets the password for a specified user ID and generates a temporary one. Only a superuser can reset password for other users. Resetting the password immediately invalidates the previous password associated with the user.
		 * Post user/{userId}/password
		 * @param {string} userId The unique identifier of the user that a temporary password is requested for.
		 * @return {ResetUserPasswordResponse} Success
		 */
		ResetUserPassword(userId: string, requestBody: ResetUserPasswordPostBody): Observable<ResetUserPasswordResponse> {
			return this.http.post<ResetUserPasswordResponse>(this.baseUri + 'user/' + (userId == null ? '' : encodeURIComponent(userId)) + '/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AssociateUserToPermissionGroupPostBody {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface AssociateUserToPermissionGroupPostBodyFormProperties {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateAssociateUserToPermissionGroupPostBodyFormGroup() {
		return new FormGroup<AssociateUserToPermissionGroupPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateChangesetPostBody {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Indicates how the given change will be applied to the dataset.
		 * Required
		 */
		changeType: ChangeType;

		/**
		 * Source Parameters of a Changeset
		 * Required
		 */
		sourceParams: {[id: string]: string };

		/**
		 * Format Parameters of a Changeset
		 * Required
		 */
		formatParams: {[id: string]: string };
	}
	export interface CreateChangesetPostBodyFormProperties {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Indicates how the given change will be applied to the dataset.
		 * Required
		 */
		changeType: FormControl<ChangeType | null | undefined>,

		/**
		 * Source Parameters of a Changeset
		 * Required
		 */
		sourceParams: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Format Parameters of a Changeset
		 * Required
		 */
		formatParams: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateChangesetPostBodyFormGroup() {
		return new FormGroup<CreateChangesetPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
			changeType: new FormControl<ChangeType | null | undefined>(undefined, [Validators.required]),
			sourceParams: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			formatParams: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDataViewPostBody {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;

		/** Common Boolean data type */
		autoUpdate?: boolean | null;

		/** DataView Sort Column List */
		sortColumns?: Array<string>;

		/** DataView Partition Column List */
		partitionColumns?: Array<string>;

		/** Milliseconds since UTC epoch */
		asOfTimestamp?: number | null;

		/**
		 * Structure for the Dataview destination type parameters.
		 * Required
		 */
		destinationTypeParams: CreateDataViewPostBodyDestinationTypeParams;
	}
	export interface CreateDataViewPostBodyFormProperties {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/** Common Boolean data type */
		autoUpdate: FormControl<boolean | null | undefined>,

		/** Milliseconds since UTC epoch */
		asOfTimestamp: FormControl<number | null | undefined>,
	}
	export function CreateCreateDataViewPostBodyFormGroup() {
		return new FormGroup<CreateDataViewPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
			autoUpdate: new FormControl<boolean | null | undefined>(undefined),
			asOfTimestamp: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDataViewPostBodyDestinationTypeParams {
		destinationType?: string;
		s3DestinationExportFileFormat?: ExportFileFormat;
		s3DestinationExportFileFormatOptions?: S3DestinationFormatOptions;
	}
	export interface CreateDataViewPostBodyDestinationTypeParamsFormProperties {
		destinationType: FormControl<string | null | undefined>,
		s3DestinationExportFileFormat: FormControl<ExportFileFormat | null | undefined>,
	}
	export function CreateCreateDataViewPostBodyDestinationTypeParamsFormGroup() {
		return new FormGroup<CreateDataViewPostBodyDestinationTypeParamsFormProperties>({
			destinationType: new FormControl<string | null | undefined>(undefined),
			s3DestinationExportFileFormat: new FormControl<ExportFileFormat | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetPostBody {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Title for a given Dataset
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		datasetTitle: string;

		/**
		 * Dataset Kind
		 * Required
		 */
		kind: DatasetKind;

		/**
		 * Description of a dataset
		 * Max length: 1000
		 */
		datasetDescription?: string | null;

		/** A structure for Dataset owner info. */
		ownerInfo?: CreateDatasetPostBodyOwnerInfo;

		/**
		 * <p>Permission group parameters for Dataset permissions.</p> <p>Here is an example of how you could specify the <code>PermissionGroupParams</code>:</p> <p> <code> { "permissionGroupId": "0r6fCRtSTUk4XPfXQe3M0g", "datasetPermissions": [ {"permission": "ViewDatasetDetails"}, {"permission": "AddDatasetData"}, {"permission": "EditDatasetMetadata"}, {"permission": "DeleteDataset"} ] } </code> </p>
		 * Required
		 */
		permissionGroupParams: CreateDatasetPostBodyPermissionGroupParams;

		/**
		 * The unique resource identifier for a Dataset.
		 * Max length: 255
		 * Min length: 1
		 */
		alias?: string | null;

		/** A union of schema types. */
		schemaDefinition?: CreateDatasetPostBodySchemaDefinition;
	}
	export interface CreateDatasetPostBodyFormProperties {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Title for a given Dataset
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		datasetTitle: FormControl<string | null | undefined>,

		/**
		 * Dataset Kind
		 * Required
		 */
		kind: FormControl<DatasetKind | null | undefined>,

		/**
		 * Description of a dataset
		 * Max length: 1000
		 */
		datasetDescription: FormControl<string | null | undefined>,

		/**
		 * The unique resource identifier for a Dataset.
		 * Max length: 255
		 * Min length: 1
		 */
		alias: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetPostBodyFormGroup() {
		return new FormGroup<CreateDatasetPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
			datasetTitle: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('.*\S.*')]),
			kind: new FormControl<DatasetKind | null | undefined>(undefined, [Validators.required]),
			datasetDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[\s\S]*')]),
			alias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^alias\/\S+')]),
		});

	}

	export interface CreateDatasetPostBodyOwnerInfo {
		name?: string;
		phoneNumber?: string;
		email?: string;
	}
	export interface CreateDatasetPostBodyOwnerInfoFormProperties {
		name: FormControl<string | null | undefined>,
		phoneNumber: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetPostBodyOwnerInfoFormGroup() {
		return new FormGroup<CreateDatasetPostBodyOwnerInfoFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			phoneNumber: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetPostBodyPermissionGroupParams {
		permissionGroupId?: string;
		datasetPermissions?: Array<ResourcePermission>;
	}
	export interface CreateDatasetPostBodyPermissionGroupParamsFormProperties {
		permissionGroupId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetPostBodyPermissionGroupParamsFormGroup() {
		return new FormGroup<CreateDatasetPostBodyPermissionGroupParamsFormProperties>({
			permissionGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetPostBodySchemaDefinition {
		tabularSchemaConfig?: SchemaDefinition;
	}
	export interface CreateDatasetPostBodySchemaDefinitionFormProperties {
	}
	export function CreateCreateDatasetPostBodySchemaDefinitionFormGroup() {
		return new FormGroup<CreateDatasetPostBodySchemaDefinitionFormProperties>({
		});

	}

	export interface CreatePermissionGroupPostBody {

		/**
		 * The name of the permission group.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * A brief description for the permission group.
		 * Max length: 4000
		 * Min length: 1
		 */
		description?: string | null;

		/**
		 * <p>The option to indicate FinSpace application permissions that are granted to a specific group.</p> <important> <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p> </important> <ul> <li> <p> <code>CreateDataset</code> – Group members can create new datasets.</p> </li> <li> <p> <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p> </li> <li> <p> <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p> </li> <li> <p> <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p> </li> <li> <p> <code>ViewAuditData</code> – Group members can view audit data.</p> </li> <li> <p> <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p> </li> <li> <p> <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p> </li> </ul>
		 * Required
		 */
		applicationPermissions: Array<ApplicationPermission>;

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface CreatePermissionGroupPostBodyFormProperties {

		/**
		 * The name of the permission group.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A brief description for the permission group.
		 * Max length: 4000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreatePermissionGroupPostBodyFormGroup() {
		return new FormGroup<CreatePermissionGroupPostBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('.*\S.*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4000), Validators.pattern('[\s\S]*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
		});

	}

	export interface CreateUserPostBody {

		/**
		 * The email address of the user that you want to register. The email address serves as a uniquer identifier for each user and cannot be changed after it's created.
		 * Required
		 * Max length: 320
		 * Min length: 4
		 */
		emailAddress: string;

		/**
		 * <p>The option to indicate the type of user. Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>
		 * Required
		 */
		type: UserType;

		/**
		 * The first name of the user that you want to register.
		 * Max length: 50
		 * Min length: 1
		 */
		firstName?: string | null;

		/**
		 * The last name of the user that you want to register.
		 * Max length: 50
		 * Min length: 1
		 */
		lastName?: string | null;

		/** <p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul> */
		ApiAccess?: ApiAccess | null;

		/**
		 * The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.
		 * Max length: 2048
		 * Min length: 20
		 */
		apiAccessPrincipalArn?: string | null;

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface CreateUserPostBodyFormProperties {

		/**
		 * The email address of the user that you want to register. The email address serves as a uniquer identifier for each user and cannot be changed after it's created.
		 * Required
		 * Max length: 320
		 * Min length: 4
		 */
		emailAddress: FormControl<string | null | undefined>,

		/**
		 * <p>The option to indicate the type of user. Use one of the following options to specify this parameter:</p> <ul> <li> <p> <code>SUPER_USER</code> – A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul>
		 * Required
		 */
		type: FormControl<UserType | null | undefined>,

		/**
		 * The first name of the user that you want to register.
		 * Max length: 50
		 * Min length: 1
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * The last name of the user that you want to register.
		 * Max length: 50
		 * Min length: 1
		 */
		lastName: FormControl<string | null | undefined>,

		/** <p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul> */
		ApiAccess: FormControl<ApiAccess | null | undefined>,

		/**
		 * The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.
		 * Max length: 2048
		 * Min length: 20
		 */
		apiAccessPrincipalArn: FormControl<string | null | undefined>,

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateCreateUserPostBodyFormGroup() {
		return new FormGroup<CreateUserPostBodyFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(4), Validators.maxLength(320), Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}')]),
			type: new FormControl<UserType | null | undefined>(undefined, [Validators.required]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50), Validators.pattern('.*\S.*')]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50), Validators.pattern('.*\S.*')]),
			ApiAccess: new FormControl<ApiAccess | null | undefined>(undefined),
			apiAccessPrincipalArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateDatasetPutBody {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Title for a given Dataset
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		datasetTitle: string;

		/**
		 * Dataset Kind
		 * Required
		 */
		kind: DatasetKind;

		/**
		 * Description of a dataset
		 * Max length: 1000
		 */
		datasetDescription?: string | null;

		/**
		 * The unique resource identifier for a Dataset.
		 * Max length: 255
		 * Min length: 1
		 */
		alias?: string | null;

		/** A union of schema types. */
		schemaDefinition?: UpdateDatasetPutBodySchemaDefinition;
	}
	export interface UpdateDatasetPutBodyFormProperties {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Title for a given Dataset
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		datasetTitle: FormControl<string | null | undefined>,

		/**
		 * Dataset Kind
		 * Required
		 */
		kind: FormControl<DatasetKind | null | undefined>,

		/**
		 * Description of a dataset
		 * Max length: 1000
		 */
		datasetDescription: FormControl<string | null | undefined>,

		/**
		 * The unique resource identifier for a Dataset.
		 * Max length: 255
		 * Min length: 1
		 */
		alias: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetPutBodyFormGroup() {
		return new FormGroup<UpdateDatasetPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
			datasetTitle: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('.*\S.*')]),
			kind: new FormControl<DatasetKind | null | undefined>(undefined, [Validators.required]),
			datasetDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000), Validators.pattern('[\s\S]*')]),
			alias: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^alias\/\S+')]),
		});

	}

	export interface UpdateDatasetPutBodySchemaDefinition {
		tabularSchemaConfig?: SchemaDefinition;
	}
	export interface UpdateDatasetPutBodySchemaDefinitionFormProperties {
	}
	export function CreateUpdateDatasetPutBodySchemaDefinitionFormGroup() {
		return new FormGroup<UpdateDatasetPutBodySchemaDefinitionFormProperties>({
		});

	}

	export interface UpdatePermissionGroupPutBody {

		/**
		 * The name of the permission group.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * A brief description for the permission group.
		 * Max length: 4000
		 * Min length: 1
		 */
		description?: string | null;

		/** <p>The permissions that are granted to a specific group for accessing the FinSpace application.</p> <important> <p>When assigning application permissions, be aware that the permission <code>ManageUsersAndGroups</code> allows users to grant themselves or others access to any functionality in their FinSpace environment's application. It should only be granted to trusted users.</p> </important> <ul> <li> <p> <code>CreateDataset</code> – Group members can create new datasets.</p> </li> <li> <p> <code>ManageClusters</code> – Group members can manage Apache Spark clusters from FinSpace notebooks.</p> </li> <li> <p> <code>ManageUsersAndGroups</code> – Group members can manage users and permission groups. This is a privileged permission that allows users to grant themselves or others access to any functionality in the application. It should only be granted to trusted users.</p> </li> <li> <p> <code>ManageAttributeSets</code> – Group members can manage attribute sets.</p> </li> <li> <p> <code>ViewAuditData</code> – Group members can view audit data.</p> </li> <li> <p> <code>AccessNotebooks</code> – Group members will have access to FinSpace notebooks.</p> </li> <li> <p> <code>GetTemporaryCredentials</code> – Group members can get temporary API credentials.</p> </li> </ul> */
		applicationPermissions?: Array<ApplicationPermission>;

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdatePermissionGroupPutBodyFormProperties {

		/**
		 * The name of the permission group.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A brief description for the permission group.
		 * Max length: 4000
		 * Min length: 1
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePermissionGroupPutBodyFormGroup() {
		return new FormGroup<UpdatePermissionGroupPutBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('.*\S.*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(4000), Validators.pattern('[\s\S]*')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
		});

	}

	export interface DisableUserPostBody {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface DisableUserPostBodyFormProperties {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateDisableUserPostBodyFormGroup() {
		return new FormGroup<DisableUserPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
		});

	}

	export interface EnableUserPostBody {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface EnableUserPostBodyFormProperties {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateEnableUserPostBodyFormGroup() {
		return new FormGroup<EnableUserPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateChangesetPutBody {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Source Parameters of a Changeset
		 * Required
		 */
		sourceParams: {[id: string]: string };

		/**
		 * Format Parameters of a Changeset
		 * Required
		 */
		formatParams: {[id: string]: string };
	}
	export interface UpdateChangesetPutBodyFormProperties {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Source Parameters of a Changeset
		 * Required
		 */
		sourceParams: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Format Parameters of a Changeset
		 * Required
		 */
		formatParams: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdateChangesetPutBodyFormGroup() {
		return new FormGroup<UpdateChangesetPutBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
			sourceParams: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			formatParams: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateUserPutBody {

		/** <p>The option to indicate the type of user.</p> <ul> <li> <p> <code>SUPER_USER</code>– A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul> */
		type?: UserType | null;

		/**
		 * The first name of the user.
		 * Max length: 50
		 * Min length: 1
		 */
		firstName?: string | null;

		/**
		 * The last name of the user.
		 * Max length: 50
		 * Min length: 1
		 */
		lastName?: string | null;

		/** <p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul> */
		apiAccess?: ApiAccess | null;

		/**
		 * The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.
		 * Max length: 2048
		 * Min length: 20
		 */
		apiAccessPrincipalArn?: string | null;

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface UpdateUserPutBodyFormProperties {

		/** <p>The option to indicate the type of user.</p> <ul> <li> <p> <code>SUPER_USER</code>– A user with permission to all the functionality and data in FinSpace.</p> </li> <li> <p> <code>APP_USER</code> – A user with specific permissions in FinSpace. The users are assigned permissions by adding them to a permission group.</p> </li> </ul> */
		type: FormControl<UserType | null | undefined>,

		/**
		 * The first name of the user.
		 * Max length: 50
		 * Min length: 1
		 */
		firstName: FormControl<string | null | undefined>,

		/**
		 * The last name of the user.
		 * Max length: 50
		 * Min length: 1
		 */
		lastName: FormControl<string | null | undefined>,

		/** <p>The option to indicate whether the user can use the <code>GetProgrammaticAccessCredentials</code> API to obtain credentials that can then be used to access other FinSpace Data API operations.</p> <ul> <li> <p> <code>ENABLED</code> – The user has permissions to use the APIs.</p> </li> <li> <p> <code>DISABLED</code> – The user does not have permissions to use any APIs.</p> </li> </ul> */
		apiAccess: FormControl<ApiAccess | null | undefined>,

		/**
		 * The ARN identifier of an AWS user or role that is allowed to call the <code>GetProgrammaticAccessCredentials</code> API to obtain a credentials token for a specific FinSpace user. This must be an IAM role within your FinSpace account.
		 * Max length: 2048
		 * Min length: 20
		 */
		apiAccessPrincipalArn: FormControl<string | null | undefined>,

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateUpdateUserPutBodyFormGroup() {
		return new FormGroup<UpdateUserPutBodyFormProperties>({
			type: new FormControl<UserType | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50), Validators.pattern('.*\S.*')]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(50), Validators.pattern('.*\S.*')]),
			apiAccess: new FormControl<ApiAccess | null | undefined>(undefined),
			apiAccessPrincipalArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048), Validators.pattern('^arn:aws[a-z\-]*:iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$')]),
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
		});

	}

	export interface GetWorkingLocationPostBody {

		/** <p>Specify the type of the working location.</p> <ul> <li> <p> <code>SAGEMAKER</code> – Use the Amazon S3 location as a temporary location to store data content when working with FinSpace Notebooks that run on SageMaker studio.</p> </li> <li> <p> <code>INGESTION</code> – Use the Amazon S3 location as a staging location to copy your data content and then use the location with the Changeset creation operation.</p> </li> </ul> */
		locationType?: LocationType | null;
	}
	export interface GetWorkingLocationPostBodyFormProperties {

		/** <p>Specify the type of the working location.</p> <ul> <li> <p> <code>SAGEMAKER</code> – Use the Amazon S3 location as a temporary location to store data content when working with FinSpace Notebooks that run on SageMaker studio.</p> </li> <li> <p> <code>INGESTION</code> – Use the Amazon S3 location as a staging location to copy your data content and then use the location with the Changeset creation operation.</p> </li> </ul> */
		locationType: FormControl<LocationType | null | undefined>,
	}
	export function CreateGetWorkingLocationPostBodyFormGroup() {
		return new FormGroup<GetWorkingLocationPostBodyFormProperties>({
			locationType: new FormControl<LocationType | null | undefined>(undefined),
		});

	}

	export interface ResetUserPasswordPostBody {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken?: string | null;
	}
	export interface ResetUserPasswordPostBodyFormProperties {

		/**
		 * Idempotence Token for API operations
		 * Max length: 128
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,
	}
	export function CreateResetUserPasswordPostBodyFormGroup() {
		return new FormGroup<ResetUserPasswordPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(128), Validators.pattern('.*\S.*')]),
		});

	}

}

