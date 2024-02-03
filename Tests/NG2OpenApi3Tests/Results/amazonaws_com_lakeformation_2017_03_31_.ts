import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddLFTagsToResourceResponse {
		Failures?: Array<LFTagError>;
	}
	export interface AddLFTagsToResourceResponseFormProperties {
	}
	export function CreateAddLFTagsToResourceResponseFormGroup() {
		return new FormGroup<AddLFTagsToResourceResponseFormProperties>({
		});

	}


	/** A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation. */
	export interface LFTagError {
		LFTag?: LFTagPair;
		Error?: ErrorDetail;
	}

	/** A structure containing an error related to a <code>TagResource</code> or <code>UnTagResource</code> operation. */
	export interface LFTagErrorFormProperties {
	}
	export function CreateLFTagErrorFormGroup() {
		return new FormGroup<LFTagErrorFormProperties>({
		});

	}


	/** A structure containing an LF-tag key-value pair. */
	export interface LFTagPair {
		CatalogId?: string;

		/** Required */
		TagKey: string;

		/** Required */
		TagValues: Array<string>;
	}

	/** A structure containing an LF-tag key-value pair. */
	export interface LFTagPairFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateLFTagPairFormGroup() {
		return new FormGroup<LFTagPairFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Contains details about an error. */
	export interface ErrorDetail {
		ErrorCode?: string;
		ErrorMessage?: string;
	}

	/** Contains details about an error. */
	export interface ErrorDetailFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure for the catalog object. */
	export interface CatalogResource {
	}

	/** A structure for the catalog object. */
	export interface CatalogResourceFormProperties {
	}
	export function CreateCatalogResourceFormGroup() {
		return new FormGroup<CatalogResourceFormProperties>({
		});

	}


	/** A structure for the database object. */
	export interface DatabaseResource {
		CatalogId?: string;

		/** Required */
		Name: string;
	}

	/** A structure for the database object. */
	export interface DatabaseResourceFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseResourceFormGroup() {
		return new FormGroup<DatabaseResourceFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.  */
	export interface TableResource {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;
		Name?: string;
		TableWildcard?: TableWildcard;
	}

	/** A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.  */
	export interface TableResourceFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateTableResourceFormGroup() {
		return new FormGroup<TableResourceFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A wildcard object representing every table under a database. */
	export interface TableWildcard {
	}

	/** A wildcard object representing every table under a database. */
	export interface TableWildcardFormProperties {
	}
	export function CreateTableWildcardFormGroup() {
		return new FormGroup<TableWildcardFormProperties>({
		});

	}


	/** <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p> */
	export interface TableWithColumnsResource {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		Name: string;
		ColumnNames?: Array<string>;
		ColumnWildcard?: ColumnWildcard;
	}

	/** <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p> */
	export interface TableWithColumnsResourceFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateTableWithColumnsResourceFormGroup() {
		return new FormGroup<TableWithColumnsResourceFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A wildcard object, consisting of an optional list of excluded column names or indexes. */
	export interface ColumnWildcard {
		ExcludedColumnNames?: Array<string>;
	}

	/** A wildcard object, consisting of an optional list of excluded column names or indexes. */
	export interface ColumnWildcardFormProperties {
	}
	export function CreateColumnWildcardFormGroup() {
		return new FormGroup<ColumnWildcardFormProperties>({
		});

	}


	/** A structure for a data location object where permissions are granted or revoked.  */
	export interface DataLocationResource {
		CatalogId?: string;

		/** Required */
		ResourceArn: string;
	}

	/** A structure for a data location object where permissions are granted or revoked.  */
	export interface DataLocationResourceFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDataLocationResourceFormGroup() {
		return new FormGroup<DataLocationResourceFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure for a data cells filter resource.  */
	export interface DataCellsFilterResource {
		TableCatalogId?: string;
		DatabaseName?: string;
		TableName?: string;
		Name?: string;
	}

	/** A structure for a data cells filter resource.  */
	export interface DataCellsFilterResourceFormProperties {
		TableCatalogId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDataCellsFilterResourceFormGroup() {
		return new FormGroup<DataCellsFilterResourceFormProperties>({
			TableCatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing an LF-tag key and values for a resource. */
	export interface LFTagKeyResource {
		CatalogId?: string;

		/** Required */
		TagKey: string;

		/** Required */
		TagValues: Array<string>;
	}

	/** A structure containing an LF-tag key and values for a resource. */
	export interface LFTagKeyResourceFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateLFTagKeyResourceFormGroup() {
		return new FormGroup<LFTagKeyResourceFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A structure containing a list of LF-tag conditions that apply to a resource's LF-tag policy. */
	export interface LFTagPolicyResource {
		CatalogId?: string;

		/** Required */
		ResourceType: ResourceType;

		/** Required */
		Expression: Array<LFTag>;
	}

	/** A structure containing a list of LF-tag conditions that apply to a resource's LF-tag policy. */
	export interface LFTagPolicyResourceFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		ResourceType: FormControl<ResourceType | null | undefined>,
	}
	export function CreateLFTagPolicyResourceFormGroup() {
		return new FormGroup<LFTagPolicyResourceFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceType { DATABASE = 'DATABASE', TABLE = 'TABLE' }


	/** A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'. */
	export interface LFTag {

		/** Required */
		TagKey: string;

		/** Required */
		TagValues: Array<string>;
	}

	/** A structure that allows an admin to grant user permissions on certain conditions. For example, granting a role access to all columns that do not have the LF-tag 'PII' in tables that have the LF-tag 'Prod'. */
	export interface LFTagFormProperties {

		/** Required */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateLFTagFormGroup() {
		return new FormGroup<LFTagFormProperties>({
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EntityNotFoundException {
	}
	export interface EntityNotFoundExceptionFormProperties {
	}
	export function CreateEntityNotFoundExceptionFormGroup() {
		return new FormGroup<EntityNotFoundExceptionFormProperties>({
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

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
		});

	}

	export interface OperationTimeoutException {
	}
	export interface OperationTimeoutExceptionFormProperties {
	}
	export function CreateOperationTimeoutExceptionFormGroup() {
		return new FormGroup<OperationTimeoutExceptionFormProperties>({
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

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
		});

	}

	export interface AssumeDecoratedRoleWithSAMLResponse {
		AccessKeyId?: string;
		SecretAccessKey?: string;
		SessionToken?: string;
		Expiration?: Date;
	}
	export interface AssumeDecoratedRoleWithSAMLResponseFormProperties {
		AccessKeyId: FormControl<string | null | undefined>,
		SecretAccessKey: FormControl<string | null | undefined>,
		SessionToken: FormControl<string | null | undefined>,
		Expiration: FormControl<Date | null | undefined>,
	}
	export function CreateAssumeDecoratedRoleWithSAMLResponseFormGroup() {
		return new FormGroup<AssumeDecoratedRoleWithSAMLResponseFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			SecretAccessKey: new FormControl<string | null | undefined>(undefined),
			SessionToken: new FormControl<string | null | undefined>(undefined),
			Expiration: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface BatchGrantPermissionsResponse {
		Failures?: Array<BatchPermissionsFailureEntry>;
	}
	export interface BatchGrantPermissionsResponseFormProperties {
	}
	export function CreateBatchGrantPermissionsResponseFormGroup() {
		return new FormGroup<BatchGrantPermissionsResponseFormProperties>({
		});

	}


	/** A list of failures when performing a batch grant or batch revoke operation. */
	export interface BatchPermissionsFailureEntry {
		RequestEntry?: BatchPermissionsRequestEntry;
		Error?: ErrorDetail;
	}

	/** A list of failures when performing a batch grant or batch revoke operation. */
	export interface BatchPermissionsFailureEntryFormProperties {
	}
	export function CreateBatchPermissionsFailureEntryFormGroup() {
		return new FormGroup<BatchPermissionsFailureEntryFormProperties>({
		});

	}


	/** A permission to a resource granted by batch operation to the principal. */
	export interface BatchPermissionsRequestEntry {

		/** Required */
		Id: string;
		Principal?: DataLakePrincipal;
		Resource?: Resource;
		Permissions?: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}

	/** A permission to a resource granted by batch operation to the principal. */
	export interface BatchPermissionsRequestEntryFormProperties {

		/** Required */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateBatchPermissionsRequestEntryFormGroup() {
		return new FormGroup<BatchPermissionsRequestEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The Lake Formation principal. Supported principals are IAM users or IAM roles. */
	export interface DataLakePrincipal {
		DataLakePrincipalIdentifier?: string;
	}

	/** The Lake Formation principal. Supported principals are IAM users or IAM roles. */
	export interface DataLakePrincipalFormProperties {
		DataLakePrincipalIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDataLakePrincipalFormGroup() {
		return new FormGroup<DataLakePrincipalFormProperties>({
			DataLakePrincipalIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure for the resource. */
	export interface Resource {
		Catalog?: CatalogResource;
		Database?: DatabaseResource;
		Table?: TableResource;
		TableWithColumns?: TableWithColumnsResource;
		DataLocation?: DataLocationResource;
		DataCellsFilter?: DataCellsFilterResource;
		LFTag?: LFTagKeyResource;
		LFTagPolicy?: LFTagPolicyResource;
	}

	/** A structure for the resource. */
	export interface ResourceFormProperties {
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
		});

	}

	export enum Permission { ALL = 'ALL', SELECT = 'SELECT', ALTER = 'ALTER', DROP = 'DROP', DELETE = 'DELETE', INSERT = 'INSERT', DESCRIBE = 'DESCRIBE', CREATE_DATABASE = 'CREATE_DATABASE', CREATE_TABLE = 'CREATE_TABLE', DATA_LOCATION_ACCESS = 'DATA_LOCATION_ACCESS', CREATE_LF_TAG = 'CREATE_LF_TAG', ASSOCIATE = 'ASSOCIATE', GRANT_WITH_LF_TAG_EXPRESSION = 'GRANT_WITH_LF_TAG_EXPRESSION' }

	export interface BatchRevokePermissionsResponse {
		Failures?: Array<BatchPermissionsFailureEntry>;
	}
	export interface BatchRevokePermissionsResponseFormProperties {
	}
	export function CreateBatchRevokePermissionsResponseFormGroup() {
		return new FormGroup<BatchRevokePermissionsResponseFormProperties>({
		});

	}

	export interface CancelTransactionResponse {
	}
	export interface CancelTransactionResponseFormProperties {
	}
	export function CreateCancelTransactionResponseFormGroup() {
		return new FormGroup<CancelTransactionResponseFormProperties>({
		});

	}

	export interface TransactionCommittedException {
	}
	export interface TransactionCommittedExceptionFormProperties {
	}
	export function CreateTransactionCommittedExceptionFormGroup() {
		return new FormGroup<TransactionCommittedExceptionFormProperties>({
		});

	}

	export interface TransactionCommitInProgressException {
	}
	export interface TransactionCommitInProgressExceptionFormProperties {
	}
	export function CreateTransactionCommitInProgressExceptionFormGroup() {
		return new FormGroup<TransactionCommitInProgressExceptionFormProperties>({
		});

	}

	export interface CommitTransactionResponse {
		TransactionStatus?: TransactionStatus;
	}
	export interface CommitTransactionResponseFormProperties {
		TransactionStatus: FormControl<TransactionStatus | null | undefined>,
	}
	export function CreateCommitTransactionResponseFormGroup() {
		return new FormGroup<CommitTransactionResponseFormProperties>({
			TransactionStatus: new FormControl<TransactionStatus | null | undefined>(undefined),
		});

	}

	export enum TransactionStatus { ACTIVE = 'ACTIVE', COMMITTED = 'COMMITTED', ABORTED = 'ABORTED', COMMIT_IN_PROGRESS = 'COMMIT_IN_PROGRESS' }

	export interface TransactionCanceledException {
	}
	export interface TransactionCanceledExceptionFormProperties {
	}
	export function CreateTransactionCanceledExceptionFormGroup() {
		return new FormGroup<TransactionCanceledExceptionFormProperties>({
		});

	}

	export interface CreateDataCellsFilterResponse {
	}
	export interface CreateDataCellsFilterResponseFormProperties {
	}
	export function CreateCreateDataCellsFilterResponseFormGroup() {
		return new FormGroup<CreateDataCellsFilterResponseFormProperties>({
		});

	}


	/** A PartiQL predicate. */
	export interface RowFilter {
		FilterExpression?: string;
		AllRowsWildcard?: AllRowsWildcard;
	}

	/** A PartiQL predicate. */
	export interface RowFilterFormProperties {
		FilterExpression: FormControl<string | null | undefined>,
	}
	export function CreateRowFilterFormGroup() {
		return new FormGroup<RowFilterFormProperties>({
			FilterExpression: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure that you pass to indicate you want all rows in a filter.  */
	export interface AllRowsWildcard {
	}

	/** A structure that you pass to indicate you want all rows in a filter.  */
	export interface AllRowsWildcardFormProperties {
	}
	export function CreateAllRowsWildcardFormGroup() {
		return new FormGroup<AllRowsWildcardFormProperties>({
		});

	}

	export interface AlreadyExistsException {
	}
	export interface AlreadyExistsExceptionFormProperties {
	}
	export function CreateAlreadyExistsExceptionFormGroup() {
		return new FormGroup<AlreadyExistsExceptionFormProperties>({
		});

	}

	export interface ResourceNumberLimitExceededException {
	}
	export interface ResourceNumberLimitExceededExceptionFormProperties {
	}
	export function CreateResourceNumberLimitExceededExceptionFormGroup() {
		return new FormGroup<ResourceNumberLimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateLFTagResponse {
	}
	export interface CreateLFTagResponseFormProperties {
	}
	export function CreateCreateLFTagResponseFormGroup() {
		return new FormGroup<CreateLFTagResponseFormProperties>({
		});

	}

	export interface DeleteDataCellsFilterResponse {
	}
	export interface DeleteDataCellsFilterResponseFormProperties {
	}
	export function CreateDeleteDataCellsFilterResponseFormGroup() {
		return new FormGroup<DeleteDataCellsFilterResponseFormProperties>({
		});

	}

	export interface DeleteLFTagResponse {
	}
	export interface DeleteLFTagResponseFormProperties {
	}
	export function CreateDeleteLFTagResponseFormGroup() {
		return new FormGroup<DeleteLFTagResponseFormProperties>({
		});

	}

	export interface DeleteObjectsOnCancelResponse {
	}
	export interface DeleteObjectsOnCancelResponseFormProperties {
	}
	export function CreateDeleteObjectsOnCancelResponseFormGroup() {
		return new FormGroup<DeleteObjectsOnCancelResponseFormProperties>({
		});

	}


	/** An object that defines an Amazon S3 object to be deleted if a transaction cancels, provided that <code>VirtualPut</code> was called before writing the object. */
	export interface VirtualObject {

		/** Required */
		Uri: string;
		ETag?: string;
	}

	/** An object that defines an Amazon S3 object to be deleted if a transaction cancels, provided that <code>VirtualPut</code> was called before writing the object. */
	export interface VirtualObjectFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,
		ETag: FormControl<string | null | undefined>,
	}
	export function CreateVirtualObjectFormGroup() {
		return new FormGroup<VirtualObjectFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ETag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceNotReadyException {
	}
	export interface ResourceNotReadyExceptionFormProperties {
	}
	export function CreateResourceNotReadyExceptionFormGroup() {
		return new FormGroup<ResourceNotReadyExceptionFormProperties>({
		});

	}

	export interface DeregisterResourceResponse {
	}
	export interface DeregisterResourceResponseFormProperties {
	}
	export function CreateDeregisterResourceResponseFormGroup() {
		return new FormGroup<DeregisterResourceResponseFormProperties>({
		});

	}

	export interface DescribeResourceResponse {
		ResourceInfo?: ResourceInfo;
	}
	export interface DescribeResourceResponseFormProperties {
	}
	export function CreateDescribeResourceResponseFormGroup() {
		return new FormGroup<DescribeResourceResponseFormProperties>({
		});

	}


	/** A structure containing information about an Lake Formation resource. */
	export interface ResourceInfo {
		ResourceArn?: string;
		RoleArn?: string;
		LastModified?: Date;
		WithFederation?: boolean | null;
	}

	/** A structure containing information about an Lake Formation resource. */
	export interface ResourceInfoFormProperties {
		ResourceArn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
		WithFederation: FormControl<boolean | null | undefined>,
	}
	export function CreateResourceInfoFormGroup() {
		return new FormGroup<ResourceInfoFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
			WithFederation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DescribeTransactionResponse {
		TransactionDescription?: TransactionDescription;
	}
	export interface DescribeTransactionResponseFormProperties {
	}
	export function CreateDescribeTransactionResponseFormGroup() {
		return new FormGroup<DescribeTransactionResponseFormProperties>({
		});

	}


	/** A structure that contains information about a transaction. */
	export interface TransactionDescription {
		TransactionId?: string;
		TransactionStatus?: TransactionStatus;
		TransactionStartTime?: Date;
		TransactionEndTime?: Date;
	}

	/** A structure that contains information about a transaction. */
	export interface TransactionDescriptionFormProperties {
		TransactionId: FormControl<string | null | undefined>,
		TransactionStatus: FormControl<TransactionStatus | null | undefined>,
		TransactionStartTime: FormControl<Date | null | undefined>,
		TransactionEndTime: FormControl<Date | null | undefined>,
	}
	export function CreateTransactionDescriptionFormGroup() {
		return new FormGroup<TransactionDescriptionFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
			TransactionStatus: new FormControl<TransactionStatus | null | undefined>(undefined),
			TransactionStartTime: new FormControl<Date | null | undefined>(undefined),
			TransactionEndTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ExtendTransactionResponse {
	}
	export interface ExtendTransactionResponseFormProperties {
	}
	export function CreateExtendTransactionResponseFormGroup() {
		return new FormGroup<ExtendTransactionResponseFormProperties>({
		});

	}

	export interface GetDataCellsFilterResponse {
		DataCellsFilter?: DataCellsFilter;
	}
	export interface GetDataCellsFilterResponseFormProperties {
	}
	export function CreateGetDataCellsFilterResponseFormGroup() {
		return new FormGroup<GetDataCellsFilterResponseFormProperties>({
		});

	}


	/** A structure that describes certain columns on certain rows. */
	export interface DataCellsFilter {

		/** Required */
		TableCatalogId: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		Name: string;
		RowFilter?: RowFilter;
		ColumnNames?: Array<string>;
		ColumnWildcard?: ColumnWildcard;
		VersionId?: string;
	}

	/** A structure that describes certain columns on certain rows. */
	export interface DataCellsFilterFormProperties {

		/** Required */
		TableCatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateDataCellsFilterFormGroup() {
		return new FormGroup<DataCellsFilterFormProperties>({
			TableCatalogId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataLakeSettingsResponse {
		DataLakeSettings?: DataLakeSettings;
	}
	export interface GetDataLakeSettingsResponseFormProperties {
	}
	export function CreateGetDataLakeSettingsResponseFormGroup() {
		return new FormGroup<GetDataLakeSettingsResponseFormProperties>({
		});

	}


	/** A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions. */
	export interface DataLakeSettings {
		DataLakeAdmins?: Array<DataLakePrincipal>;
		ReadOnlyAdmins?: Array<DataLakePrincipal>;
		CreateDatabaseDefaultPermissions?: Array<PrincipalPermissions>;
		CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
		Parameters?: ParametersMap;
		TrustedResourceOwners?: Array<string>;
		AllowExternalDataFiltering?: boolean | null;
		AllowFullTableExternalDataAccess?: boolean | null;
		ExternalDataFilteringAllowList?: Array<DataLakePrincipal>;
		AuthorizedSessionTagValueList?: Array<string>;
	}

	/** A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions. */
	export interface DataLakeSettingsFormProperties {
		AllowExternalDataFiltering: FormControl<boolean | null | undefined>,
		AllowFullTableExternalDataAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateDataLakeSettingsFormGroup() {
		return new FormGroup<DataLakeSettingsFormProperties>({
			AllowExternalDataFiltering: new FormControl<boolean | null | undefined>(undefined),
			AllowFullTableExternalDataAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Permissions granted to a principal. */
	export interface PrincipalPermissions {
		Principal?: DataLakePrincipal;
		Permissions?: Array<Permission>;
	}

	/** Permissions granted to a principal. */
	export interface PrincipalPermissionsFormProperties {
	}
	export function CreatePrincipalPermissionsFormGroup() {
		return new FormGroup<PrincipalPermissionsFormProperties>({
		});

	}

	export interface ParametersMap {
	}
	export interface ParametersMapFormProperties {
	}
	export function CreateParametersMapFormGroup() {
		return new FormGroup<ParametersMapFormProperties>({
		});

	}

	export interface GetEffectivePermissionsForPathResponse {
		Permissions?: Array<PrincipalResourcePermissions>;
		NextToken?: string;
	}
	export interface GetEffectivePermissionsForPathResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetEffectivePermissionsForPathResponseFormGroup() {
		return new FormGroup<GetEffectivePermissionsForPathResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The permissions granted or revoked on a resource. */
	export interface PrincipalResourcePermissions {
		Principal?: DataLakePrincipal;
		Resource?: Resource;
		Permissions?: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
		AdditionalDetails?: DetailsMap;
	}

	/** The permissions granted or revoked on a resource. */
	export interface PrincipalResourcePermissionsFormProperties {
	}
	export function CreatePrincipalResourcePermissionsFormGroup() {
		return new FormGroup<PrincipalResourcePermissionsFormProperties>({
		});

	}


	/** <p>A structure containing the additional details to be returned in the <code>AdditionalDetails</code> attribute of <code>PrincipalResourcePermissions</code>.</p> <p>If a catalog resource is shared through Resource Access Manager (RAM), then there will exist a corresponding RAM resource share ARN.</p> */
	export interface DetailsMap {
		ResourceShare?: Array<string>;
	}

	/** <p>A structure containing the additional details to be returned in the <code>AdditionalDetails</code> attribute of <code>PrincipalResourcePermissions</code>.</p> <p>If a catalog resource is shared through Resource Access Manager (RAM), then there will exist a corresponding RAM resource share ARN.</p> */
	export interface DetailsMapFormProperties {
	}
	export function CreateDetailsMapFormGroup() {
		return new FormGroup<DetailsMapFormProperties>({
		});

	}

	export interface GetLFTagResponse {
		CatalogId?: string;
		TagKey?: string;
		TagValues?: Array<string>;
	}
	export interface GetLFTagResponseFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateGetLFTagResponseFormGroup() {
		return new FormGroup<GetLFTagResponseFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			TagKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure for the output. */
	export interface GetQueryStateResponse {
		Error?: string;

		/** Required */
		State: QueryStateString;
	}

	/** A structure for the output. */
	export interface GetQueryStateResponseFormProperties {
		Error: FormControl<string | null | undefined>,

		/** Required */
		State: FormControl<QueryStateString | null | undefined>,
	}
	export function CreateGetQueryStateResponseFormGroup() {
		return new FormGroup<GetQueryStateResponseFormProperties>({
			Error: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<QueryStateString | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum QueryStateString { PENDING = 'PENDING', WORKUNITS_AVAILABLE = 'WORKUNITS_AVAILABLE', ERROR = 'ERROR', FINISHED = 'FINISHED', EXPIRED = 'EXPIRED' }

	export interface GetQueryStatisticsResponse {
		ExecutionStatistics?: ExecutionStatistics;
		PlanningStatistics?: PlanningStatistics;
		QuerySubmissionTime?: Date;
	}
	export interface GetQueryStatisticsResponseFormProperties {
		QuerySubmissionTime: FormControl<Date | null | undefined>,
	}
	export function CreateGetQueryStatisticsResponseFormGroup() {
		return new FormGroup<GetQueryStatisticsResponseFormProperties>({
			QuerySubmissionTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Statistics related to the processing of a query statement. */
	export interface ExecutionStatistics {
		AverageExecutionTimeMillis?: number | null;
		DataScannedBytes?: number | null;
		WorkUnitsExecutedCount?: number | null;
	}

	/** Statistics related to the processing of a query statement. */
	export interface ExecutionStatisticsFormProperties {
		AverageExecutionTimeMillis: FormControl<number | null | undefined>,
		DataScannedBytes: FormControl<number | null | undefined>,
		WorkUnitsExecutedCount: FormControl<number | null | undefined>,
	}
	export function CreateExecutionStatisticsFormGroup() {
		return new FormGroup<ExecutionStatisticsFormProperties>({
			AverageExecutionTimeMillis: new FormControl<number | null | undefined>(undefined),
			DataScannedBytes: new FormControl<number | null | undefined>(undefined),
			WorkUnitsExecutedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Statistics related to the processing of a query statement. */
	export interface PlanningStatistics {
		EstimatedDataToScanBytes?: number | null;
		PlanningTimeMillis?: number | null;
		QueueTimeMillis?: number | null;
		WorkUnitsGeneratedCount?: number | null;
	}

	/** Statistics related to the processing of a query statement. */
	export interface PlanningStatisticsFormProperties {
		EstimatedDataToScanBytes: FormControl<number | null | undefined>,
		PlanningTimeMillis: FormControl<number | null | undefined>,
		QueueTimeMillis: FormControl<number | null | undefined>,
		WorkUnitsGeneratedCount: FormControl<number | null | undefined>,
	}
	export function CreatePlanningStatisticsFormGroup() {
		return new FormGroup<PlanningStatisticsFormProperties>({
			EstimatedDataToScanBytes: new FormControl<number | null | undefined>(undefined),
			PlanningTimeMillis: new FormControl<number | null | undefined>(undefined),
			QueueTimeMillis: new FormControl<number | null | undefined>(undefined),
			WorkUnitsGeneratedCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StatisticsNotReadyYetException {
	}
	export interface StatisticsNotReadyYetExceptionFormProperties {
	}
	export function CreateStatisticsNotReadyYetExceptionFormGroup() {
		return new FormGroup<StatisticsNotReadyYetExceptionFormProperties>({
		});

	}

	export interface ExpiredException {
	}
	export interface ExpiredExceptionFormProperties {
	}
	export function CreateExpiredExceptionFormGroup() {
		return new FormGroup<ExpiredExceptionFormProperties>({
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

	export interface GetResourceLFTagsResponse {
		LFTagOnDatabase?: Array<LFTagPair>;
		LFTagsOnTable?: Array<LFTagPair>;
		LFTagsOnColumns?: Array<ColumnLFTag>;
	}
	export interface GetResourceLFTagsResponseFormProperties {
	}
	export function CreateGetResourceLFTagsResponseFormGroup() {
		return new FormGroup<GetResourceLFTagsResponseFormProperties>({
		});

	}


	/** A structure containing the name of a column resource and the LF-tags attached to it. */
	export interface ColumnLFTag {
		Name?: string;
		LFTags?: Array<LFTagPair>;
	}

	/** A structure containing the name of a column resource and the LF-tags attached to it. */
	export interface ColumnLFTagFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateColumnLFTagFormGroup() {
		return new FormGroup<ColumnLFTagFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GlueEncryptionException {
	}
	export interface GlueEncryptionExceptionFormProperties {
	}
	export function CreateGlueEncryptionExceptionFormGroup() {
		return new FormGroup<GlueEncryptionExceptionFormProperties>({
		});

	}

	export interface GetTableObjectsResponse {
		Objects?: Array<PartitionObjects>;
		NextToken?: string;
	}
	export interface GetTableObjectsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTableObjectsResponseFormGroup() {
		return new FormGroup<GetTableObjectsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing a list of partition values and table objects. */
	export interface PartitionObjects {
		PartitionValues?: Array<string>;
		Objects?: Array<TableObject>;
	}

	/** A structure containing a list of partition values and table objects. */
	export interface PartitionObjectsFormProperties {
	}
	export function CreatePartitionObjectsFormGroup() {
		return new FormGroup<PartitionObjectsFormProperties>({
		});

	}


	/** Specifies the details of a governed table. */
	export interface TableObject {
		Uri?: string;
		ETag?: string;
		Size?: number | null;
	}

	/** Specifies the details of a governed table. */
	export interface TableObjectFormProperties {
		Uri: FormControl<string | null | undefined>,
		ETag: FormControl<string | null | undefined>,
		Size: FormControl<number | null | undefined>,
	}
	export function CreateTableObjectFormGroup() {
		return new FormGroup<TableObjectFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined),
			ETag: new FormControl<string | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTemporaryGluePartitionCredentialsResponse {
		AccessKeyId?: string;
		SecretAccessKey?: string;
		SessionToken?: string;
		Expiration?: Date;
	}
	export interface GetTemporaryGluePartitionCredentialsResponseFormProperties {
		AccessKeyId: FormControl<string | null | undefined>,
		SecretAccessKey: FormControl<string | null | undefined>,
		SessionToken: FormControl<string | null | undefined>,
		Expiration: FormControl<Date | null | undefined>,
	}
	export function CreateGetTemporaryGluePartitionCredentialsResponseFormGroup() {
		return new FormGroup<GetTemporaryGluePartitionCredentialsResponseFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			SecretAccessKey: new FormControl<string | null | undefined>(undefined),
			SessionToken: new FormControl<string | null | undefined>(undefined),
			Expiration: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PermissionType { COLUMN_PERMISSION = 'COLUMN_PERMISSION', CELL_FILTER_PERMISSION = 'CELL_FILTER_PERMISSION', NESTED_PERMISSION = 'NESTED_PERMISSION', NESTED_CELL_PERMISSION = 'NESTED_CELL_PERMISSION' }

	export interface PermissionTypeMismatchException {
	}
	export interface PermissionTypeMismatchExceptionFormProperties {
	}
	export function CreatePermissionTypeMismatchExceptionFormGroup() {
		return new FormGroup<PermissionTypeMismatchExceptionFormProperties>({
		});

	}

	export interface GetTemporaryGlueTableCredentialsResponse {
		AccessKeyId?: string;
		SecretAccessKey?: string;
		SessionToken?: string;
		Expiration?: Date;
	}
	export interface GetTemporaryGlueTableCredentialsResponseFormProperties {
		AccessKeyId: FormControl<string | null | undefined>,
		SecretAccessKey: FormControl<string | null | undefined>,
		SessionToken: FormControl<string | null | undefined>,
		Expiration: FormControl<Date | null | undefined>,
	}
	export function CreateGetTemporaryGlueTableCredentialsResponseFormGroup() {
		return new FormGroup<GetTemporaryGlueTableCredentialsResponseFormProperties>({
			AccessKeyId: new FormControl<string | null | undefined>(undefined),
			SecretAccessKey: new FormControl<string | null | undefined>(undefined),
			SessionToken: new FormControl<string | null | undefined>(undefined),
			Expiration: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A structure for the output. */
	export interface GetWorkUnitResultsResponse {
		ResultStream?: string;
	}

	/** A structure for the output. */
	export interface GetWorkUnitResultsResponseFormProperties {
		ResultStream: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkUnitResultsResponseFormGroup() {
		return new FormGroup<GetWorkUnitResultsResponseFormProperties>({
			ResultStream: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure for the output. */
	export interface GetWorkUnitsResponse {
		NextToken?: string;

		/** Required */
		QueryId: string;

		/** Required */
		WorkUnitRanges: Array<WorkUnitRange>;
	}

	/** A structure for the output. */
	export interface GetWorkUnitsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/** Required */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkUnitsResponseFormGroup() {
		return new FormGroup<GetWorkUnitsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Defines the valid range of work unit IDs for querying the execution service. */
	export interface WorkUnitRange {

		/** Required */
		WorkUnitIdMax: number;

		/** Required */
		WorkUnitIdMin: number;

		/** Required */
		WorkUnitToken: string;
	}

	/** Defines the valid range of work unit IDs for querying the execution service. */
	export interface WorkUnitRangeFormProperties {

		/** Required */
		WorkUnitIdMax: FormControl<number | null | undefined>,

		/** Required */
		WorkUnitIdMin: FormControl<number | null | undefined>,

		/** Required */
		WorkUnitToken: FormControl<string | null | undefined>,
	}
	export function CreateWorkUnitRangeFormGroup() {
		return new FormGroup<WorkUnitRangeFormProperties>({
			WorkUnitIdMax: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			WorkUnitIdMin: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			WorkUnitToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WorkUnitsNotReadyYetException {
	}
	export interface WorkUnitsNotReadyYetExceptionFormProperties {
	}
	export function CreateWorkUnitsNotReadyYetExceptionFormGroup() {
		return new FormGroup<WorkUnitsNotReadyYetExceptionFormProperties>({
		});

	}

	export interface GrantPermissionsResponse {
	}
	export interface GrantPermissionsResponseFormProperties {
	}
	export function CreateGrantPermissionsResponseFormGroup() {
		return new FormGroup<GrantPermissionsResponseFormProperties>({
		});

	}

	export interface ListDataCellsFilterResponse {
		DataCellsFilters?: Array<DataCellsFilter>;
		NextToken?: string;
	}
	export interface ListDataCellsFilterResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDataCellsFilterResponseFormGroup() {
		return new FormGroup<ListDataCellsFilterResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLFTagsResponse {
		LFTags?: Array<LFTagPair>;
		NextToken?: string;
	}
	export interface ListLFTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLFTagsResponseFormGroup() {
		return new FormGroup<ListLFTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionsResponse {
		PrincipalResourcePermissions?: Array<PrincipalResourcePermissions>;
		NextToken?: string;
	}
	export interface ListPermissionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionsResponseFormGroup() {
		return new FormGroup<ListPermissionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcesResponse {
		ResourceInfoList?: Array<ResourceInfo>;
		NextToken?: string;
	}
	export interface ListResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesResponseFormGroup() {
		return new FormGroup<ListResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure describes the filtering of columns in a table based on a filter condition. */
	export interface FilterCondition {
		Field?: FieldNameString;
		ComparisonOperator?: ComparisonOperator;
		StringValueList?: Array<string>;
	}

	/** This structure describes the filtering of columns in a table based on a filter condition. */
	export interface FilterConditionFormProperties {
		Field: FormControl<FieldNameString | null | undefined>,
		ComparisonOperator: FormControl<ComparisonOperator | null | undefined>,
	}
	export function CreateFilterConditionFormGroup() {
		return new FormGroup<FilterConditionFormProperties>({
			Field: new FormControl<FieldNameString | null | undefined>(undefined),
			ComparisonOperator: new FormControl<ComparisonOperator | null | undefined>(undefined),
		});

	}

	export enum FieldNameString { RESOURCE_ARN = 'RESOURCE_ARN', ROLE_ARN = 'ROLE_ARN', LAST_MODIFIED = 'LAST_MODIFIED' }

	export enum ComparisonOperator { EQ = 'EQ', NE = 'NE', LE = 'LE', LT = 'LT', GE = 'GE', GT = 'GT', CONTAINS = 'CONTAINS', NOT_CONTAINS = 'NOT_CONTAINS', BEGINS_WITH = 'BEGINS_WITH', IN = 'IN', BETWEEN = 'BETWEEN' }

	export interface ListTableStorageOptimizersResponse {
		StorageOptimizerList?: Array<StorageOptimizer>;
		NextToken?: string;
	}
	export interface ListTableStorageOptimizersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTableStorageOptimizersResponseFormGroup() {
		return new FormGroup<ListTableStorageOptimizersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure describing the configuration and details of a storage optimizer. */
	export interface StorageOptimizer {
		StorageOptimizerType?: OptimizerType;
		Config?: StorageOptimizerConfig;
		ErrorMessage?: string;
		Warnings?: string;
		LastRunDetails?: string;
	}

	/** A structure describing the configuration and details of a storage optimizer. */
	export interface StorageOptimizerFormProperties {
		StorageOptimizerType: FormControl<OptimizerType | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		Warnings: FormControl<string | null | undefined>,
		LastRunDetails: FormControl<string | null | undefined>,
	}
	export function CreateStorageOptimizerFormGroup() {
		return new FormGroup<StorageOptimizerFormProperties>({
			StorageOptimizerType: new FormControl<OptimizerType | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			Warnings: new FormControl<string | null | undefined>(undefined),
			LastRunDetails: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OptimizerType { COMPACTION = 'COMPACTION', GARBAGE_COLLECTION = 'GARBAGE_COLLECTION', ALL = 'ALL' }

	export interface StorageOptimizerConfig {
	}
	export interface StorageOptimizerConfigFormProperties {
	}
	export function CreateStorageOptimizerConfigFormGroup() {
		return new FormGroup<StorageOptimizerConfigFormProperties>({
		});

	}

	export interface ListTransactionsResponse {
		Transactions?: Array<TransactionDescription>;
		NextToken?: string;
	}
	export interface ListTransactionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransactionsResponseFormGroup() {
		return new FormGroup<ListTransactionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutDataLakeSettingsResponse {
	}
	export interface PutDataLakeSettingsResponseFormProperties {
	}
	export function CreatePutDataLakeSettingsResponseFormGroup() {
		return new FormGroup<PutDataLakeSettingsResponseFormProperties>({
		});

	}

	export interface RegisterResourceResponse {
	}
	export interface RegisterResourceResponseFormProperties {
	}
	export function CreateRegisterResourceResponseFormGroup() {
		return new FormGroup<RegisterResourceResponseFormProperties>({
		});

	}

	export interface RemoveLFTagsFromResourceResponse {
		Failures?: Array<LFTagError>;
	}
	export interface RemoveLFTagsFromResourceResponseFormProperties {
	}
	export function CreateRemoveLFTagsFromResourceResponseFormGroup() {
		return new FormGroup<RemoveLFTagsFromResourceResponseFormProperties>({
		});

	}

	export interface RevokePermissionsResponse {
	}
	export interface RevokePermissionsResponseFormProperties {
	}
	export function CreateRevokePermissionsResponseFormGroup() {
		return new FormGroup<RevokePermissionsResponseFormProperties>({
		});

	}

	export interface SearchDatabasesByLFTagsResponse {
		NextToken?: string;
		DatabaseList?: Array<TaggedDatabase>;
	}
	export interface SearchDatabasesByLFTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchDatabasesByLFTagsResponseFormGroup() {
		return new FormGroup<SearchDatabasesByLFTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure describing a database resource with LF-tags. */
	export interface TaggedDatabase {
		Database?: DatabaseResource;
		LFTags?: Array<LFTagPair>;
	}

	/** A structure describing a database resource with LF-tags. */
	export interface TaggedDatabaseFormProperties {
	}
	export function CreateTaggedDatabaseFormGroup() {
		return new FormGroup<TaggedDatabaseFormProperties>({
		});

	}

	export interface SearchTablesByLFTagsResponse {
		NextToken?: string;
		TableList?: Array<TaggedTable>;
	}
	export interface SearchTablesByLFTagsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateSearchTablesByLFTagsResponseFormGroup() {
		return new FormGroup<SearchTablesByLFTagsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure describing a table resource with LF-tags. */
	export interface TaggedTable {
		Table?: TableResource;
		LFTagOnDatabase?: Array<LFTagPair>;
		LFTagsOnTable?: Array<LFTagPair>;
		LFTagsOnColumns?: Array<ColumnLFTag>;
	}

	/** A structure describing a table resource with LF-tags. */
	export interface TaggedTableFormProperties {
	}
	export function CreateTaggedTableFormGroup() {
		return new FormGroup<TaggedTableFormProperties>({
		});

	}


	/** A structure for the output. */
	export interface StartQueryPlanningResponse {

		/** Required */
		QueryId: string;
	}

	/** A structure for the output. */
	export interface StartQueryPlanningResponseFormProperties {

		/** Required */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryPlanningResponseFormGroup() {
		return new FormGroup<StartQueryPlanningResponseFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface QueryParameterMap {
	}
	export interface QueryParameterMapFormProperties {
	}
	export function CreateQueryParameterMapFormGroup() {
		return new FormGroup<QueryParameterMapFormProperties>({
		});

	}

	export interface StartTransactionResponse {
		TransactionId?: string;
	}
	export interface StartTransactionResponseFormProperties {
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateStartTransactionResponseFormGroup() {
		return new FormGroup<StartTransactionResponseFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataCellsFilterResponse {
	}
	export interface UpdateDataCellsFilterResponseFormProperties {
	}
	export function CreateUpdateDataCellsFilterResponseFormGroup() {
		return new FormGroup<UpdateDataCellsFilterResponseFormProperties>({
		});

	}

	export interface UpdateLFTagResponse {
	}
	export interface UpdateLFTagResponseFormProperties {
	}
	export function CreateUpdateLFTagResponseFormGroup() {
		return new FormGroup<UpdateLFTagResponseFormProperties>({
		});

	}

	export interface UpdateResourceResponse {
	}
	export interface UpdateResourceResponseFormProperties {
	}
	export function CreateUpdateResourceResponseFormGroup() {
		return new FormGroup<UpdateResourceResponseFormProperties>({
		});

	}

	export interface UpdateTableObjectsResponse {
	}
	export interface UpdateTableObjectsResponseFormProperties {
	}
	export function CreateUpdateTableObjectsResponseFormGroup() {
		return new FormGroup<UpdateTableObjectsResponseFormProperties>({
		});

	}


	/** Defines an object to add to or delete from a governed table. */
	export interface WriteOperation {
		AddObject?: AddObjectInput;
		DeleteObject?: DeleteObjectInput;
	}

	/** Defines an object to add to or delete from a governed table. */
	export interface WriteOperationFormProperties {
	}
	export function CreateWriteOperationFormGroup() {
		return new FormGroup<WriteOperationFormProperties>({
		});

	}


	/** A new object to add to the governed table. */
	export interface AddObjectInput {

		/** Required */
		Uri: string;

		/** Required */
		ETag: string;

		/** Required */
		Size: number;
		PartitionValues?: Array<string>;
	}

	/** A new object to add to the governed table. */
	export interface AddObjectInputFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,

		/** Required */
		ETag: FormControl<string | null | undefined>,

		/** Required */
		Size: FormControl<number | null | undefined>,
	}
	export function CreateAddObjectInputFormGroup() {
		return new FormGroup<AddObjectInputFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ETag: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Size: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** An object to delete from the governed table. */
	export interface DeleteObjectInput {

		/** Required */
		Uri: string;
		ETag?: string;
		PartitionValues?: Array<string>;
	}

	/** An object to delete from the governed table. */
	export interface DeleteObjectInputFormProperties {

		/** Required */
		Uri: FormControl<string | null | undefined>,
		ETag: FormControl<string | null | undefined>,
	}
	export function CreateDeleteObjectInputFormGroup() {
		return new FormGroup<DeleteObjectInputFormProperties>({
			Uri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ETag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTableStorageOptimizerResponse {
		Result?: string;
	}
	export interface UpdateTableStorageOptimizerResponseFormProperties {
		Result: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableStorageOptimizerResponseFormGroup() {
		return new FormGroup<UpdateTableStorageOptimizerResponseFormProperties>({
			Result: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddLFTagsToResourceRequest {
		CatalogId?: string;

		/** Required */
		Resource: Resource;

		/** Required */
		LFTags: Array<LFTagPair>;
	}
	export interface AddLFTagsToResourceRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateAddLFTagsToResourceRequestFormGroup() {
		return new FormGroup<AddLFTagsToResourceRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssumeDecoratedRoleWithSAMLRequest {

		/** Required */
		SAMLAssertion: string;

		/** Required */
		RoleArn: string;

		/** Required */
		PrincipalArn: string;
		DurationSeconds?: number | null;
	}
	export interface AssumeDecoratedRoleWithSAMLRequestFormProperties {

		/** Required */
		SAMLAssertion: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		PrincipalArn: FormControl<string | null | undefined>,
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateAssumeDecoratedRoleWithSAMLRequestFormGroup() {
		return new FormGroup<AssumeDecoratedRoleWithSAMLRequestFormProperties>({
			SAMLAssertion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PrincipalArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A structure used to include auditing information on the privileged API.  */
	export interface AuditContext {
		AdditionalAuditContext?: string;
	}

	/** A structure used to include auditing information on the privileged API.  */
	export interface AuditContextFormProperties {
		AdditionalAuditContext: FormControl<string | null | undefined>,
	}
	export function CreateAuditContextFormGroup() {
		return new FormGroup<AuditContextFormProperties>({
			AdditionalAuditContext: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchGrantPermissionsRequest {
		CatalogId?: string;

		/** Required */
		Entries: Array<BatchPermissionsRequestEntry>;
	}
	export interface BatchGrantPermissionsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGrantPermissionsRequestFormGroup() {
		return new FormGroup<BatchGrantPermissionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BatchRevokePermissionsRequest {
		CatalogId?: string;

		/** Required */
		Entries: Array<BatchPermissionsRequestEntry>;
	}
	export interface BatchRevokePermissionsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateBatchRevokePermissionsRequestFormGroup() {
		return new FormGroup<BatchRevokePermissionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CancelTransactionRequest {

		/** Required */
		TransactionId: string;
	}
	export interface CancelTransactionRequestFormProperties {

		/** Required */
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateCancelTransactionRequestFormGroup() {
		return new FormGroup<CancelTransactionRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CommitTransactionRequest {

		/** Required */
		TransactionId: string;
	}
	export interface CommitTransactionRequestFormProperties {

		/** Required */
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionRequestFormGroup() {
		return new FormGroup<CommitTransactionRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDataCellsFilterRequest {

		/** Required */
		TableData: DataCellsFilter;
	}
	export interface CreateDataCellsFilterRequestFormProperties {
	}
	export function CreateCreateDataCellsFilterRequestFormGroup() {
		return new FormGroup<CreateDataCellsFilterRequestFormProperties>({
		});

	}

	export interface CreateLFTagRequest {
		CatalogId?: string;

		/** Required */
		TagKey: string;

		/** Required */
		TagValues: Array<string>;
	}
	export interface CreateLFTagRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateLFTagRequestFormGroup() {
		return new FormGroup<CreateLFTagRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataLakeResourceType { CATALOG = 'CATALOG', DATABASE = 'DATABASE', TABLE = 'TABLE', DATA_LOCATION = 'DATA_LOCATION', LF_TAG = 'LF_TAG', LF_TAG_POLICY = 'LF_TAG_POLICY', LF_TAG_POLICY_DATABASE = 'LF_TAG_POLICY_DATABASE', LF_TAG_POLICY_TABLE = 'LF_TAG_POLICY_TABLE' }

	export interface DeleteDataCellsFilterRequest {
		TableCatalogId?: string;
		DatabaseName?: string;
		TableName?: string;
		Name?: string;
	}
	export interface DeleteDataCellsFilterRequestFormProperties {
		TableCatalogId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataCellsFilterRequestFormGroup() {
		return new FormGroup<DeleteDataCellsFilterRequestFormProperties>({
			TableCatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteLFTagRequest {
		CatalogId?: string;

		/** Required */
		TagKey: string;
	}
	export interface DeleteLFTagRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLFTagRequestFormGroup() {
		return new FormGroup<DeleteLFTagRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteObjectsOnCancelRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		TransactionId: string;

		/** Required */
		Objects: Array<VirtualObject>;
	}
	export interface DeleteObjectsOnCancelRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteObjectsOnCancelRequestFormGroup() {
		return new FormGroup<DeleteObjectsOnCancelRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeregisterResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DeregisterResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterResourceRequestFormGroup() {
		return new FormGroup<DeregisterResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeResourceRequest {

		/** Required */
		ResourceArn: string;
	}
	export interface DescribeResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourceRequestFormGroup() {
		return new FormGroup<DescribeResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTransactionRequest {

		/** Required */
		TransactionId: string;
	}
	export interface DescribeTransactionRequestFormProperties {

		/** Required */
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTransactionRequestFormGroup() {
		return new FormGroup<DescribeTransactionRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExtendTransactionRequest {
		TransactionId?: string;
	}
	export interface ExtendTransactionRequestFormProperties {
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateExtendTransactionRequestFormGroup() {
		return new FormGroup<ExtendTransactionRequestFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetDataCellsFilterRequest {

		/** Required */
		TableCatalogId: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		Name: string;
	}
	export interface GetDataCellsFilterRequestFormProperties {

		/** Required */
		TableCatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetDataCellsFilterRequestFormGroup() {
		return new FormGroup<GetDataCellsFilterRequestFormProperties>({
			TableCatalogId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetDataLakeSettingsRequest {
		CatalogId?: string;
	}
	export interface GetDataLakeSettingsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataLakeSettingsRequestFormGroup() {
		return new FormGroup<GetDataLakeSettingsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetEffectivePermissionsForPathRequest {
		CatalogId?: string;

		/** Required */
		ResourceArn: string;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface GetEffectivePermissionsForPathRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEffectivePermissionsForPathRequestFormGroup() {
		return new FormGroup<GetEffectivePermissionsForPathRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetLFTagRequest {
		CatalogId?: string;

		/** Required */
		TagKey: string;
	}
	export interface GetLFTagRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateGetLFTagRequestFormGroup() {
		return new FormGroup<GetLFTagRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetQueryStateRequest {

		/** Required */
		QueryId: string;
	}
	export interface GetQueryStateRequestFormProperties {

		/** Required */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryStateRequestFormGroup() {
		return new FormGroup<GetQueryStateRequestFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetQueryStatisticsRequest {

		/** Required */
		QueryId: string;
	}
	export interface GetQueryStatisticsRequestFormProperties {

		/** Required */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryStatisticsRequestFormGroup() {
		return new FormGroup<GetQueryStatisticsRequestFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetResourceLFTagsRequest {
		CatalogId?: string;

		/** Required */
		Resource: Resource;
		ShowAssignedLFTags?: boolean | null;
	}
	export interface GetResourceLFTagsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		ShowAssignedLFTags: FormControl<boolean | null | undefined>,
	}
	export function CreateGetResourceLFTagsRequestFormGroup() {
		return new FormGroup<GetResourceLFTagsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			ShowAssignedLFTags: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetTableObjectsRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		TransactionId?: string;
		QueryAsOfTime?: Date;
		PartitionPredicate?: string;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface GetTableObjectsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
		QueryAsOfTime: FormControl<Date | null | undefined>,
		PartitionPredicate: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTableObjectsRequestFormGroup() {
		return new FormGroup<GetTableObjectsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransactionId: new FormControl<string | null | undefined>(undefined),
			QueryAsOfTime: new FormControl<Date | null | undefined>(undefined),
			PartitionPredicate: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a list of values defining partitions. */
	export interface PartitionValueList {

		/** Required */
		Values: Array<string>;
	}

	/** Contains a list of values defining partitions. */
	export interface PartitionValueListFormProperties {
	}
	export function CreatePartitionValueListFormGroup() {
		return new FormGroup<PartitionValueListFormProperties>({
		});

	}

	export interface GetTemporaryGluePartitionCredentialsRequest {

		/** Required */
		TableArn: string;

		/** Required */
		Partition: PartitionValueList;
		Permissions?: Array<Permission>;
		DurationSeconds?: number | null;
		AuditContext?: AuditContext;
		SupportedPermissionTypes?: Array<PermissionType>;
	}
	export interface GetTemporaryGluePartitionCredentialsRequestFormProperties {

		/** Required */
		TableArn: FormControl<string | null | undefined>,
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGetTemporaryGluePartitionCredentialsRequestFormGroup() {
		return new FormGroup<GetTemporaryGluePartitionCredentialsRequestFormProperties>({
			TableArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetTemporaryGlueTableCredentialsRequest {

		/** Required */
		TableArn: string;
		Permissions?: Array<Permission>;
		DurationSeconds?: number | null;
		AuditContext?: AuditContext;
		SupportedPermissionTypes?: Array<PermissionType>;
	}
	export interface GetTemporaryGlueTableCredentialsRequestFormProperties {

		/** Required */
		TableArn: FormControl<string | null | undefined>,
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGetTemporaryGlueTableCredentialsRequestFormGroup() {
		return new FormGroup<GetTemporaryGlueTableCredentialsRequestFormProperties>({
			TableArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetWorkUnitResultsRequest {

		/** Required */
		QueryId: string;

		/** Required */
		WorkUnitId: number;

		/** Required */
		WorkUnitToken: string;
	}
	export interface GetWorkUnitResultsRequestFormProperties {

		/** Required */
		QueryId: FormControl<string | null | undefined>,

		/** Required */
		WorkUnitId: FormControl<number | null | undefined>,

		/** Required */
		WorkUnitToken: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkUnitResultsRequestFormGroup() {
		return new FormGroup<GetWorkUnitResultsRequestFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WorkUnitId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			WorkUnitToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWorkUnitsRequest {
		NextToken?: string;
		PageSize?: number | null;

		/** Required */
		QueryId: string;
	}
	export interface GetWorkUnitsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		PageSize: FormControl<number | null | undefined>,

		/** Required */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkUnitsRequestFormGroup() {
		return new FormGroup<GetWorkUnitsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GrantPermissionsRequest {
		CatalogId?: string;

		/** Required */
		Principal: DataLakePrincipal;

		/** Required */
		Resource: Resource;

		/** Required */
		Permissions: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}
	export interface GrantPermissionsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateGrantPermissionsRequestFormGroup() {
		return new FormGroup<GrantPermissionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDataCellsFilterRequest {
		Table?: TableResource;
		NextToken?: string;
		MaxResults?: number | null;
	}
	export interface ListDataCellsFilterRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDataCellsFilterRequestFormGroup() {
		return new FormGroup<ListDataCellsFilterRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ResourceShareType { FOREIGN = 'FOREIGN', ALL = 'ALL' }

	export interface ListLFTagsRequest {
		CatalogId?: string;
		ResourceShareType?: ResourceShareType;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListLFTagsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		ResourceShareType: FormControl<ResourceShareType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLFTagsRequestFormGroup() {
		return new FormGroup<ListLFTagsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			ResourceShareType: new FormControl<ResourceShareType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionsRequest {
		CatalogId?: string;
		Principal?: DataLakePrincipal;
		ResourceType?: DataLakeResourceType;
		Resource?: Resource;
		NextToken?: string;
		MaxResults?: number | null;
		IncludeRelated?: string;
	}
	export interface ListPermissionsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		ResourceType: FormControl<DataLakeResourceType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		IncludeRelated: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionsRequestFormGroup() {
		return new FormGroup<ListPermissionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			ResourceType: new FormControl<DataLakeResourceType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			IncludeRelated: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcesRequest {
		FilterConditionList?: Array<FilterCondition>;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListResourcesRequestFormProperties {
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesRequestFormGroup() {
		return new FormGroup<ListResourcesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTableStorageOptimizersRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		StorageOptimizerType?: OptimizerType;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListTableStorageOptimizersRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		StorageOptimizerType: FormControl<OptimizerType | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTableStorageOptimizersRequestFormGroup() {
		return new FormGroup<ListTableStorageOptimizersRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			StorageOptimizerType: new FormControl<OptimizerType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransactionStatusFilter { ALL = 'ALL', COMPLETED = 'COMPLETED', ACTIVE = 'ACTIVE', COMMITTED = 'COMMITTED', ABORTED = 'ABORTED' }

	export interface ListTransactionsRequest {
		CatalogId?: string;
		StatusFilter?: TransactionStatusFilter;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface ListTransactionsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		StatusFilter: FormControl<TransactionStatusFilter | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransactionsRequestFormGroup() {
		return new FormGroup<ListTransactionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			StatusFilter: new FormControl<TransactionStatusFilter | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutDataLakeSettingsRequest {
		CatalogId?: string;

		/** Required */
		DataLakeSettings: DataLakeSettings;
	}
	export interface PutDataLakeSettingsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreatePutDataLakeSettingsRequestFormGroup() {
		return new FormGroup<PutDataLakeSettingsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure containing information about the query plan. */
	export interface QueryPlanningContext {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;
		QueryAsOfTime?: Date;
		QueryParameters?: QueryParameterMap;
		TransactionId?: string;
	}

	/** A structure containing information about the query plan. */
	export interface QueryPlanningContextFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,
		QueryAsOfTime: FormControl<Date | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateQueryPlanningContextFormGroup() {
		return new FormGroup<QueryPlanningContextFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueryAsOfTime: new FormControl<Date | null | undefined>(undefined),
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RegisterResourceRequest {

		/** Required */
		ResourceArn: string;
		UseServiceLinkedRole?: boolean | null;
		RoleArn?: string;
		WithFederation?: boolean | null;
	}
	export interface RegisterResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		UseServiceLinkedRole: FormControl<boolean | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		WithFederation: FormControl<boolean | null | undefined>,
	}
	export function CreateRegisterResourceRequestFormGroup() {
		return new FormGroup<RegisterResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UseServiceLinkedRole: new FormControl<boolean | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			WithFederation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RemoveLFTagsFromResourceRequest {
		CatalogId?: string;

		/** Required */
		Resource: Resource;

		/** Required */
		LFTags: Array<LFTagPair>;
	}
	export interface RemoveLFTagsFromResourceRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveLFTagsFromResourceRequestFormGroup() {
		return new FormGroup<RemoveLFTagsFromResourceRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RevokePermissionsRequest {
		CatalogId?: string;

		/** Required */
		Principal: DataLakePrincipal;

		/** Required */
		Resource: Resource;

		/** Required */
		Permissions: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}
	export interface RevokePermissionsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateRevokePermissionsRequestFormGroup() {
		return new FormGroup<RevokePermissionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchDatabasesByLFTagsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		CatalogId?: string;

		/** Required */
		Expression: Array<LFTag>;
	}
	export interface SearchDatabasesByLFTagsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateSearchDatabasesByLFTagsRequestFormGroup() {
		return new FormGroup<SearchDatabasesByLFTagsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SearchTablesByLFTagsRequest {
		NextToken?: string;
		MaxResults?: number | null;
		CatalogId?: string;

		/** Required */
		Expression: Array<LFTag>;
	}
	export interface SearchTablesByLFTagsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateSearchTablesByLFTagsRequestFormGroup() {
		return new FormGroup<SearchTablesByLFTagsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			CatalogId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartQueryPlanningRequest {

		/** Required */
		QueryPlanningContext: QueryPlanningContext;

		/** Required */
		QueryString: string;
	}
	export interface StartQueryPlanningRequestFormProperties {

		/** Required */
		QueryString: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryPlanningRequestFormGroup() {
		return new FormGroup<StartQueryPlanningRequestFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TransactionType { READ_AND_WRITE = 'READ_AND_WRITE', READ_ONLY = 'READ_ONLY' }

	export interface StartTransactionRequest {
		TransactionType?: TransactionType;
	}
	export interface StartTransactionRequestFormProperties {
		TransactionType: FormControl<TransactionType | null | undefined>,
	}
	export function CreateStartTransactionRequestFormGroup() {
		return new FormGroup<StartTransactionRequestFormProperties>({
			TransactionType: new FormControl<TransactionType | null | undefined>(undefined),
		});

	}

	export interface StorageOptimizerConfigMap {
	}
	export interface StorageOptimizerConfigMapFormProperties {
	}
	export function CreateStorageOptimizerConfigMapFormGroup() {
		return new FormGroup<StorageOptimizerConfigMapFormProperties>({
		});

	}

	export interface UpdateDataCellsFilterRequest {

		/** Required */
		TableData: DataCellsFilter;
	}
	export interface UpdateDataCellsFilterRequestFormProperties {
	}
	export function CreateUpdateDataCellsFilterRequestFormGroup() {
		return new FormGroup<UpdateDataCellsFilterRequestFormProperties>({
		});

	}

	export interface UpdateLFTagRequest {
		CatalogId?: string;

		/** Required */
		TagKey: string;
		TagValuesToDelete?: Array<string>;
		TagValuesToAdd?: Array<string>;
	}
	export interface UpdateLFTagRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLFTagRequestFormGroup() {
		return new FormGroup<UpdateLFTagRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateResourceRequest {

		/** Required */
		RoleArn: string;

		/** Required */
		ResourceArn: string;
		WithFederation?: boolean | null;
	}
	export interface UpdateResourceRequestFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		WithFederation: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateResourceRequestFormGroup() {
		return new FormGroup<UpdateResourceRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WithFederation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateTableObjectsRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		TransactionId?: string;

		/** Required */
		WriteOperations: Array<WriteOperation>;
	}
	export interface UpdateTableObjectsRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableObjectsRequestFormGroup() {
		return new FormGroup<UpdateTableObjectsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTableStorageOptimizerRequest {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;

		/** Required */
		StorageOptimizerConfig: StorageOptimizerConfigMap;
	}
	export interface UpdateTableStorageOptimizerRequestFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableStorageOptimizerRequestFormGroup() {
		return new FormGroup<UpdateTableStorageOptimizerRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Attaches one or more LF-tags to an existing resource.
		 * Post AddLFTagsToResource
		 * @return {AddLFTagsToResourceResponse} Success
		 */
		AddLFTagsToResource(requestBody: AddLFTagsToResourcePostBody): Observable<AddLFTagsToResourceResponse> {
			return this.http.post<AddLFTagsToResourceResponse>(this.baseUri + 'AddLFTagsToResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Allows a caller to assume an IAM role decorated as the SAML user specified in the SAML assertion included in the request. This decoration allows Lake Formation to enforce access policies against the SAML users and groups. This API operation requires SAML federation setup in the caller’s account as it can only be called with valid SAML assertions. Lake Formation does not scope down the permission of the assumed role. All permissions attached to the role via the SAML federation setup will be included in the role session. </p> <p> This decorated role is expected to access data in Amazon S3 by getting temporary access from Lake Formation which is authorized via the virtual API <code>GetDataAccess</code>. Therefore, all SAML roles that can be assumed via <code>AssumeDecoratedRoleWithSAML</code> must at a minimum include <code>lakeformation:GetDataAccess</code> in their role policies. A typical IAM policy attached to such a role would look as follows: </p>
		 * Post AssumeDecoratedRoleWithSAML
		 * @return {AssumeDecoratedRoleWithSAMLResponse} Success
		 */
		AssumeDecoratedRoleWithSAML(requestBody: AssumeDecoratedRoleWithSAMLPostBody): Observable<AssumeDecoratedRoleWithSAMLResponse> {
			return this.http.post<AssumeDecoratedRoleWithSAMLResponse>(this.baseUri + 'AssumeDecoratedRoleWithSAML', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch operation to grant permissions to the principal.
		 * Post BatchGrantPermissions
		 * @return {BatchGrantPermissionsResponse} Success
		 */
		BatchGrantPermissions(requestBody: BatchGrantPermissionsPostBody): Observable<BatchGrantPermissionsResponse> {
			return this.http.post<BatchGrantPermissionsResponse>(this.baseUri + 'BatchGrantPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch operation to revoke permissions from the principal.
		 * Post BatchRevokePermissions
		 * @return {BatchRevokePermissionsResponse} Success
		 */
		BatchRevokePermissions(requestBody: BatchRevokePermissionsPostBody): Observable<BatchRevokePermissionsResponse> {
			return this.http.post<BatchRevokePermissionsResponse>(this.baseUri + 'BatchRevokePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to cancel the specified transaction. Returns an exception if the transaction was previously committed.
		 * Post CancelTransaction
		 * @return {CancelTransactionResponse} Success
		 */
		CancelTransaction(requestBody: CancelTransactionPostBody): Observable<CancelTransactionResponse> {
			return this.http.post<CancelTransactionResponse>(this.baseUri + 'CancelTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Attempts to commit the specified transaction. Returns an exception if the transaction was previously aborted. This API action is idempotent if called multiple times for the same transaction.
		 * Post CommitTransaction
		 * @return {CommitTransactionResponse} Success
		 */
		CommitTransaction(requestBody: CommitTransactionPostBody): Observable<CommitTransactionResponse> {
			return this.http.post<CommitTransactionResponse>(this.baseUri + 'CommitTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a data cell filter to allow one to grant access to certain columns on certain rows.
		 * Post CreateDataCellsFilter
		 * @return {CreateDataCellsFilterResponse} Success
		 */
		CreateDataCellsFilter(requestBody: CreateDataCellsFilterPostBody): Observable<CreateDataCellsFilterResponse> {
			return this.http.post<CreateDataCellsFilterResponse>(this.baseUri + 'CreateDataCellsFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates an LF-tag with the specified name and values.
		 * Post CreateLFTag
		 * @return {CreateLFTagResponse} Success
		 */
		CreateLFTag(requestBody: CreateLFTagPostBody): Observable<CreateLFTagResponse> {
			return this.http.post<CreateLFTagResponse>(this.baseUri + 'CreateLFTag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a data cell filter.
		 * Post DeleteDataCellsFilter
		 * @return {DeleteDataCellsFilterResponse} Success
		 */
		DeleteDataCellsFilter(requestBody: DeleteDataCellsFilterPostBody): Observable<DeleteDataCellsFilterResponse> {
			return this.http.post<DeleteDataCellsFilterResponse>(this.baseUri + 'DeleteDataCellsFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified LF-tag given a key name. If the input parameter tag key was not found, then the operation will throw an exception. When you delete an LF-tag, the <code>LFTagPolicy</code> attached to the LF-tag becomes invalid. If the deleted LF-tag was still assigned to any resource, the tag policy attach to the deleted LF-tag will no longer be applied to the resource.
		 * Post DeleteLFTag
		 * @return {DeleteLFTagResponse} Success
		 */
		DeleteLFTag(requestBody: DeleteLFTagPostBody): Observable<DeleteLFTagResponse> {
			return this.http.post<DeleteLFTagResponse>(this.baseUri + 'DeleteLFTag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels. </p> <p> The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically call <code>DeleteObjectsOnCancel</code> before writes. For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>. </p>
		 * Post DeleteObjectsOnCancel
		 * @return {DeleteObjectsOnCancelResponse} Success
		 */
		DeleteObjectsOnCancel(requestBody: DeleteObjectsOnCancelPostBody): Observable<DeleteObjectsOnCancelResponse> {
			return this.http.post<DeleteObjectsOnCancelResponse>(this.baseUri + 'DeleteObjectsOnCancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
		 * Post DeregisterResource
		 * @return {DeregisterResourceResponse} Success
		 */
		DeregisterResource(requestBody: DeregisterResourcePostBody): Observable<DeregisterResourceResponse> {
			return this.http.post<DeregisterResourceResponse>(this.baseUri + 'DeregisterResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current data access role for the given resource registered in Lake Formation.
		 * Post DescribeResource
		 * @return {DescribeResourceResponse} Success
		 */
		DescribeResource(requestBody: DescribeResourcePostBody): Observable<DescribeResourceResponse> {
			return this.http.post<DescribeResourceResponse>(this.baseUri + 'DescribeResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the details of a single transaction.
		 * Post DescribeTransaction
		 * @return {DescribeTransactionResponse} Success
		 */
		DescribeTransaction(requestBody: DescribeTransactionPostBody): Observable<DescribeTransactionResponse> {
			return this.http.post<DescribeTransactionResponse>(this.baseUri + 'DescribeTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Indicates to the service that the specified transaction is still active and should not be treated as idle and aborted.</p> <p>Write transactions that remain idle for a long period are automatically aborted unless explicitly extended.</p>
		 * Post ExtendTransaction
		 * @return {ExtendTransactionResponse} Success
		 */
		ExtendTransaction(requestBody: ExtendTransactionPostBody): Observable<ExtendTransactionResponse> {
			return this.http.post<ExtendTransactionResponse>(this.baseUri + 'ExtendTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a data cells filter.
		 * Post GetDataCellsFilter
		 * @return {GetDataCellsFilterResponse} Success
		 */
		GetDataCellsFilter(requestBody: GetDataCellsFilterPostBody): Observable<GetDataCellsFilterResponse> {
			return this.http.post<GetDataCellsFilterResponse>(this.baseUri + 'GetDataCellsFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the list of the data lake administrators of a Lake Formation-managed data lake.
		 * Post GetDataLakeSettings
		 * @return {GetDataLakeSettingsResponse} Success
		 */
		GetDataLakeSettings(requestBody: GetDataLakeSettingsPostBody): Observable<GetDataLakeSettingsResponse> {
			return this.http.post<GetDataLakeSettingsResponse>(this.baseUri + 'GetDataLakeSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the Lake Formation permissions for a specified table or database resource located at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.
		 * Post GetEffectivePermissionsForPath
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetEffectivePermissionsForPathResponse} Success
		 */
		GetEffectivePermissionsForPath(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetEffectivePermissionsForPathPostBody): Observable<GetEffectivePermissionsForPathResponse> {
			return this.http.post<GetEffectivePermissionsForPathResponse>(this.baseUri + 'GetEffectivePermissionsForPath?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns an LF-tag definition.
		 * Post GetLFTag
		 * @return {GetLFTagResponse} Success
		 */
		GetLFTag(requestBody: GetLFTagPostBody): Observable<GetLFTagResponse> {
			return this.http.post<GetLFTagResponse>(this.baseUri + 'GetLFTag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the state of a query previously submitted. Clients are expected to poll <code>GetQueryState</code> to monitor the current state of the planning before retrieving the work units. A query state is only visible to the principal that made the initial call to <code>StartQueryPlanning</code>.
		 * Post GetQueryState
		 * @return {GetQueryStateResponse} Success
		 */
		GetQueryState(requestBody: GetQueryStatePostBody): Observable<GetQueryStateResponse> {
			return this.http.post<GetQueryStateResponse>(this.baseUri + 'GetQueryState', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves statistics on the planning and execution of a query.
		 * Post GetQueryStatistics
		 * @return {GetQueryStatisticsResponse} Success
		 */
		GetQueryStatistics(requestBody: GetQueryStatisticsPostBody): Observable<GetQueryStatisticsResponse> {
			return this.http.post<GetQueryStatisticsResponse>(this.baseUri + 'GetQueryStatistics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the LF-tags applied to a resource.
		 * Post GetResourceLFTags
		 * @return {GetResourceLFTagsResponse} Success
		 */
		GetResourceLFTags(requestBody: GetResourceLFTagsPostBody): Observable<GetResourceLFTagsResponse> {
			return this.http.post<GetResourceLFTagsResponse>(this.baseUri + 'GetResourceLFTags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the set of Amazon S3 objects that make up the specified governed table. A transaction ID or timestamp can be specified for time-travel queries.
		 * Post GetTableObjects
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetTableObjectsResponse} Success
		 */
		GetTableObjects(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetTableObjectsPostBody): Observable<GetTableObjectsResponse> {
			return this.http.post<GetTableObjectsResponse>(this.baseUri + 'GetTableObjects?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This API is identical to <code>GetTemporaryTableCredentials</code> except that this is used when the target Data Catalog resource is of type Partition. Lake Formation restricts the permission of the vended credentials with the same scope down policy which restricts access to a single Amazon S3 prefix.
		 * Post GetTemporaryGluePartitionCredentials
		 * @return {GetTemporaryGluePartitionCredentialsResponse} Success
		 */
		GetTemporaryGluePartitionCredentials(requestBody: GetTemporaryGluePartitionCredentialsPostBody): Observable<GetTemporaryGluePartitionCredentialsResponse> {
			return this.http.post<GetTemporaryGluePartitionCredentialsResponse>(this.baseUri + 'GetTemporaryGluePartitionCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Allows a caller in a secure environment to assume a role with permission to access Amazon S3. In order to vend such credentials, Lake Formation assumes the role associated with a registered location, for example an Amazon S3 bucket, with a scope down policy which restricts the access to a single prefix.
		 * Post GetTemporaryGlueTableCredentials
		 * @return {GetTemporaryGlueTableCredentialsResponse} Success
		 */
		GetTemporaryGlueTableCredentials(requestBody: GetTemporaryGlueTableCredentialsPostBody): Observable<GetTemporaryGlueTableCredentialsResponse> {
			return this.http.post<GetTemporaryGlueTableCredentialsResponse>(this.baseUri + 'GetTemporaryGlueTableCredentials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the work units resulting from the query. Work units can be executed in any order and in parallel.
		 * Post GetWorkUnitResults
		 * @return {GetWorkUnitResultsResponse} Success
		 */
		GetWorkUnitResults(requestBody: GetWorkUnitResultsPostBody): Observable<GetWorkUnitResultsResponse> {
			return this.http.post<GetWorkUnitResultsResponse>(this.baseUri + 'GetWorkUnitResults', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the work units generated by the <code>StartQueryPlanning</code> operation.
		 * Post GetWorkUnits
		 * @param {string} PageSize Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetWorkUnitsResponse} Success
		 */
		GetWorkUnits(PageSize: string | null | undefined, NextToken: string | null | undefined, requestBody: GetWorkUnitsPostBody): Observable<GetWorkUnitsResponse> {
			return this.http.post<GetWorkUnitsResponse>(this.baseUri + 'GetWorkUnits?PageSize=' + (PageSize == null ? '' : encodeURIComponent(PageSize)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
		 * Post GrantPermissions
		 * @return {GrantPermissionsResponse} Success
		 */
		GrantPermissions(requestBody: GrantPermissionsPostBody): Observable<GrantPermissionsResponse> {
			return this.http.post<GrantPermissionsResponse>(this.baseUri + 'GrantPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the data cell filters on a table.
		 * Post ListDataCellsFilter
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataCellsFilterResponse} Success
		 */
		ListDataCellsFilter(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListDataCellsFilterPostBody): Observable<ListDataCellsFilterResponse> {
			return this.http.post<ListDataCellsFilterResponse>(this.baseUri + 'ListDataCellsFilter?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists LF-tags that the requester has permission to view.
		 * Post ListLFTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListLFTagsResponse} Success
		 */
		ListLFTags(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListLFTagsPostBody): Observable<ListLFTagsResponse> {
			return this.http.post<ListLFTagsResponse>(this.baseUri + 'ListLFTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
		 * Post ListPermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPermissionsResponse} Success
		 */
		ListPermissions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPermissionsPostBody): Observable<ListPermissionsResponse> {
			return this.http.post<ListPermissionsResponse>(this.baseUri + 'ListPermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resources registered to be managed by the Data Catalog.
		 * Post ListResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcesResponse} Success
		 */
		ListResources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourcesPostBody): Observable<ListResourcesResponse> {
			return this.http.post<ListResourcesResponse>(this.baseUri + 'ListResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the configuration of all storage optimizers associated with a specified table.
		 * Post ListTableStorageOptimizers
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTableStorageOptimizersResponse} Success
		 */
		ListTableStorageOptimizers(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTableStorageOptimizersPostBody): Observable<ListTableStorageOptimizersResponse> {
			return this.http.post<ListTableStorageOptimizersResponse>(this.baseUri + 'ListTableStorageOptimizers?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns metadata about transactions and their status. To prevent the response from growing indefinitely, only uncommitted transactions and those available for time-travel queries are returned.</p> <p>This operation can help you identify uncommitted transactions or to get information about transactions.</p>
		 * Post ListTransactions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTransactionsResponse} Success
		 */
		ListTransactions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListTransactionsPostBody): Observable<ListTransactionsResponse> {
			return this.http.post<ListTransactionsResponse>(this.baseUri + 'ListTransactions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Sets the list of data lake administrators who have admin privileges on all resources managed by Lake Formation. For more information on admin privileges, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/lake-formation-permissions.html">Granting Lake Formation Permissions</a>.</p> <p>This API replaces the current list of data lake admins with the new list being passed. To add an admin, fetch the current list and add the new admin to that list and pass that list in this API.</p>
		 * Post PutDataLakeSettings
		 * @return {PutDataLakeSettingsResponse} Success
		 */
		PutDataLakeSettings(requestBody: PutDataLakeSettingsPostBody): Observable<PutDataLakeSettingsResponse> {
			return this.http.post<PutDataLakeSettingsResponse>(this.baseUri + 'PutDataLakeSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p> <p>The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.</p> <p> <code>ResourceArn = arn:aws:s3:::my-bucket UseServiceLinkedRole = true</code> </p> <p>If <code>UseServiceLinkedRole</code> is not set to true, you must provide or set the <code>RoleArn</code>:</p> <p> <code>arn:aws:iam::12345:role/my-data-access-role</code> </p>
		 * Post RegisterResource
		 * @return {RegisterResourceResponse} Success
		 */
		RegisterResource(requestBody: RegisterResourcePostBody): Observable<RegisterResourceResponse> {
			return this.http.post<RegisterResourceResponse>(this.baseUri + 'RegisterResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes an LF-tag from the resource. Only database, table, or tableWithColumns resource are allowed. To tag columns, use the column inclusion list in <code>tableWithColumns</code> to specify column input.
		 * Post RemoveLFTagsFromResource
		 * @return {RemoveLFTagsFromResourceResponse} Success
		 */
		RemoveLFTagsFromResource(requestBody: RemoveLFTagsFromResourcePostBody): Observable<RemoveLFTagsFromResourceResponse> {
			return this.http.post<RemoveLFTagsFromResourceResponse>(this.baseUri + 'RemoveLFTagsFromResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
		 * Post RevokePermissions
		 * @return {RevokePermissionsResponse} Success
		 */
		RevokePermissions(requestBody: RevokePermissionsPostBody): Observable<RevokePermissionsResponse> {
			return this.http.post<RevokePermissionsResponse>(this.baseUri + 'RevokePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.
		 * Post SearchDatabasesByLFTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchDatabasesByLFTagsResponse} Success
		 */
		SearchDatabasesByLFTags(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchDatabasesByLFTagsPostBody): Observable<SearchDatabasesByLFTagsResponse> {
			return this.http.post<SearchDatabasesByLFTagsResponse>(this.baseUri + 'SearchDatabasesByLFTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LF-tags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.
		 * Post SearchTablesByLFTags
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchTablesByLFTagsResponse} Success
		 */
		SearchTablesByLFTags(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchTablesByLFTagsPostBody): Observable<SearchTablesByLFTagsResponse> {
			return this.http.post<SearchTablesByLFTagsResponse>(this.baseUri + 'SearchTablesByLFTags?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Submits a request to process a query statement.</p> <p>This operation generates work units that can be retrieved with the <code>GetWorkUnits</code> operation as soon as the query state is WORKUNITS_AVAILABLE or FINISHED.</p>
		 * Post StartQueryPlanning
		 * @return {StartQueryPlanningResponse} Success
		 */
		StartQueryPlanning(requestBody: StartQueryPlanningPostBody): Observable<StartQueryPlanningResponse> {
			return this.http.post<StartQueryPlanningResponse>(this.baseUri + 'StartQueryPlanning', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a new transaction and returns its transaction ID. Transaction IDs are opaque objects that you can use to identify a transaction.
		 * Post StartTransaction
		 * @return {StartTransactionResponse} Success
		 */
		StartTransaction(requestBody: StartTransactionPostBody): Observable<StartTransactionResponse> {
			return this.http.post<StartTransactionResponse>(this.baseUri + 'StartTransaction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a data cell filter.
		 * Post UpdateDataCellsFilter
		 * @return {UpdateDataCellsFilterResponse} Success
		 */
		UpdateDataCellsFilter(requestBody: UpdateDataCellsFilterPostBody): Observable<UpdateDataCellsFilterResponse> {
			return this.http.post<UpdateDataCellsFilterResponse>(this.baseUri + 'UpdateDataCellsFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value.
		 * Post UpdateLFTag
		 * @return {UpdateLFTagResponse} Success
		 */
		UpdateLFTag(requestBody: UpdateLFTagPostBody): Observable<UpdateLFTagResponse> {
			return this.http.post<UpdateLFTagResponse>(this.baseUri + 'UpdateLFTag', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the data access role used for vending access to the given (registered) resource in Lake Formation.
		 * Post UpdateResource
		 * @return {UpdateResourceResponse} Success
		 */
		UpdateResource(requestBody: UpdateResourcePostBody): Observable<UpdateResourceResponse> {
			return this.http.post<UpdateResourceResponse>(this.baseUri + 'UpdateResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the manifest of Amazon S3 objects that make up the specified governed table.
		 * Post UpdateTableObjects
		 * @return {UpdateTableObjectsResponse} Success
		 */
		UpdateTableObjects(requestBody: UpdateTableObjectsPostBody): Observable<UpdateTableObjectsResponse> {
			return this.http.post<UpdateTableObjectsResponse>(this.baseUri + 'UpdateTableObjects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of the storage optimizers for a table.
		 * Post UpdateTableStorageOptimizer
		 * @return {UpdateTableStorageOptimizerResponse} Success
		 */
		UpdateTableStorageOptimizer(requestBody: UpdateTableStorageOptimizerPostBody): Observable<UpdateTableStorageOptimizerResponse> {
			return this.http.post<UpdateTableStorageOptimizerResponse>(this.baseUri + 'UpdateTableStorageOptimizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface AddLFTagsToResourcePostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * A structure for the resource.
		 * Required
		 */
		Resource: AddLFTagsToResourcePostBodyResource;

		/**
		 * The LF-tags to attach to the resource.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		LFTags: Array<LFTagPair>;
	}
	export interface AddLFTagsToResourcePostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateAddLFTagsToResourcePostBodyFormGroup() {
		return new FormGroup<AddLFTagsToResourcePostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface AddLFTagsToResourcePostBodyResource {
		Catalog?: CatalogResource;
		Database?: DatabaseResource;
		Table?: TableResource;
		TableWithColumns?: TableWithColumnsResource;
		DataLocation?: DataLocationResource;
		DataCellsFilter?: DataCellsFilterResource;
		LFTag?: LFTagKeyResource;
		LFTagPolicy?: LFTagPolicyResource;
	}
	export interface AddLFTagsToResourcePostBodyResourceFormProperties {
	}
	export function CreateAddLFTagsToResourcePostBodyResourceFormGroup() {
		return new FormGroup<AddLFTagsToResourcePostBodyResourceFormProperties>({
		});

	}

	export interface AssumeDecoratedRoleWithSAMLPostBody {

		/**
		 * A SAML assertion consisting of an assertion statement for the user who needs temporary credentials. This must match the SAML assertion that was issued to IAM. This must be Base64 encoded.
		 * Required
		 * Max length: 100000
		 * Min length: 4
		 */
		SAMLAssertion: string;

		/**
		 * The role that represents an IAM principal whose scope down policy allows it to call credential vending APIs such as <code>GetTemporaryTableCredentials</code>. The caller must also have iam:PassRole permission on this role.
		 * Required
		 */
		RoleArn: string;

		/**
		 * The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.
		 * Required
		 */
		PrincipalArn: string;

		/**
		 * The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials.
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds?: number | null;
	}
	export interface AssumeDecoratedRoleWithSAMLPostBodyFormProperties {

		/**
		 * A SAML assertion consisting of an assertion statement for the user who needs temporary credentials. This must match the SAML assertion that was issued to IAM. This must be Base64 encoded.
		 * Required
		 * Max length: 100000
		 * Min length: 4
		 */
		SAMLAssertion: FormControl<string | null | undefined>,

		/**
		 * The role that represents an IAM principal whose scope down policy allows it to call credential vending APIs such as <code>GetTemporaryTableCredentials</code>. The caller must also have iam:PassRole permission on this role.
		 * Required
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the SAML provider in IAM that describes the IdP.
		 * Required
		 */
		PrincipalArn: FormControl<string | null | undefined>,

		/**
		 * The time period, between 900 and 43,200 seconds, for the timeout of the temporary credentials.
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateAssumeDecoratedRoleWithSAMLPostBodyFormGroup() {
		return new FormGroup<AssumeDecoratedRoleWithSAMLPostBodyFormProperties>({
			SAMLAssertion: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(4), Validators.maxLength(100000)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:aws:iam::[0-9]*:role/.*')]),
			PrincipalArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:aws:iam::[0-9]*:saml-provider/.*')]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(43200)]),
		});

	}

	export interface BatchGrantPermissionsPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * A list of up to 20 entries for resource permissions to be granted by batch operation to the principal.
		 * Required
		 */
		Entries: Array<BatchPermissionsRequestEntry>;
	}
	export interface BatchGrantPermissionsPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGrantPermissionsPostBodyFormGroup() {
		return new FormGroup<BatchGrantPermissionsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface BatchRevokePermissionsPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * A list of up to 20 entries for resource permissions to be revoked by batch operation to the principal.
		 * Required
		 */
		Entries: Array<BatchPermissionsRequestEntry>;
	}
	export interface BatchRevokePermissionsPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateBatchRevokePermissionsPostBodyFormGroup() {
		return new FormGroup<BatchRevokePermissionsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface CancelTransactionPostBody {

		/**
		 * The transaction to cancel.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: string;
	}
	export interface CancelTransactionPostBodyFormProperties {

		/**
		 * The transaction to cancel.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateCancelTransactionPostBodyFormGroup() {
		return new FormGroup<CancelTransactionPostBodyFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\p{L}\p{N}\p{P}]*')]),
		});

	}

	export interface CommitTransactionPostBody {

		/**
		 * The transaction to commit.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: string;
	}
	export interface CommitTransactionPostBodyFormProperties {

		/**
		 * The transaction to commit.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateCommitTransactionPostBodyFormGroup() {
		return new FormGroup<CommitTransactionPostBodyFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\p{L}\p{N}\p{P}]*')]),
		});

	}

	export interface CreateDataCellsFilterPostBody {

		/**
		 * A structure that describes certain columns on certain rows.
		 * Required
		 */
		TableData: CreateDataCellsFilterPostBodyTableData;
	}
	export interface CreateDataCellsFilterPostBodyFormProperties {
	}
	export function CreateCreateDataCellsFilterPostBodyFormGroup() {
		return new FormGroup<CreateDataCellsFilterPostBodyFormProperties>({
		});

	}

	export interface CreateDataCellsFilterPostBodyTableData {
		TableCatalogId?: string;
		DatabaseName?: string;
		TableName?: string;
		Name?: string;
		RowFilter?: RowFilter;
		ColumnNames?: Array<string>;
		ColumnWildcard?: ColumnWildcard;
		VersionId?: string;
	}
	export interface CreateDataCellsFilterPostBodyTableDataFormProperties {
		TableCatalogId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataCellsFilterPostBodyTableDataFormGroup() {
		return new FormGroup<CreateDataCellsFilterPostBodyTableDataFormProperties>({
			TableCatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateLFTagPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The key-name for the LF-tag.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TagKey: string;

		/**
		 * A list of possible values an attribute can take.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagValues: Array<string>;
	}
	export interface CreateLFTagPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * The key-name for the LF-tag.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateCreateLFTagPostBodyFormGroup() {
		return new FormGroup<CreateLFTagPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:\/=+\-@%]*)$')]),
		});

	}

	export interface DeleteDataCellsFilterPostBody {

		/**
		 * The ID of the catalog to which the table belongs.
		 * Max length: 255
		 * Min length: 1
		 */
		TableCatalogId?: string | null;

		/**
		 * A database in the Glue Data Catalog.
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName?: string | null;

		/**
		 * A table in the database.
		 * Max length: 255
		 * Min length: 1
		 */
		TableName?: string | null;

		/**
		 * The name given by the user to the data filter cell.
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface DeleteDataCellsFilterPostBodyFormProperties {

		/**
		 * The ID of the catalog to which the table belongs.
		 * Max length: 255
		 * Min length: 1
		 */
		TableCatalogId: FormControl<string | null | undefined>,

		/**
		 * A database in the Glue Data Catalog.
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * A table in the database.
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * The name given by the user to the data filter cell.
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataCellsFilterPostBodyFormGroup() {
		return new FormGroup<DeleteDataCellsFilterPostBodyFormProperties>({
			TableCatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface DeleteLFTagPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The key-name for the LF-tag to delete.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TagKey: string;
	}
	export interface DeleteLFTagPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * The key-name for the LF-tag to delete.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateDeleteLFTagPostBodyFormGroup() {
		return new FormGroup<DeleteLFTagPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:\/=+\-@%]*)$')]),
		});

	}

	export interface DeleteObjectsOnCancelPostBody {

		/**
		 * The Glue data catalog that contains the governed table. Defaults to the current account ID.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The database that contains the governed table.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * The name of the governed table.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * ID of the transaction that the writes occur in.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: string;

		/**
		 * A list of VirtualObject structures, which indicates the Amazon S3 objects to be deleted if the transaction cancels.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Objects: Array<VirtualObject>;
	}
	export interface DeleteObjectsOnCancelPostBodyFormProperties {

		/**
		 * The Glue data catalog that contains the governed table. Defaults to the current account ID.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * The database that contains the governed table.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * The name of the governed table.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * ID of the transaction that the writes occur in.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteObjectsOnCancelPostBodyFormGroup() {
		return new FormGroup<DeleteObjectsOnCancelPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\p{L}\p{N}\p{P}]*')]),
		});

	}

	export interface DeregisterResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to deregister.
		 * Required
		 */
		ResourceArn: string;
	}
	export interface DeregisterResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to deregister.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDeregisterResourcePostBodyFormGroup() {
		return new FormGroup<DeregisterResourcePostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeResourcePostBody {

		/**
		 * The resource ARN.
		 * Required
		 */
		ResourceArn: string;
	}
	export interface DescribeResourcePostBodyFormProperties {

		/**
		 * The resource ARN.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeResourcePostBodyFormGroup() {
		return new FormGroup<DescribeResourcePostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeTransactionPostBody {

		/**
		 * The transaction for which to return status.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: string;
	}
	export interface DescribeTransactionPostBodyFormProperties {

		/**
		 * The transaction for which to return status.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTransactionPostBodyFormGroup() {
		return new FormGroup<DescribeTransactionPostBodyFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\p{L}\p{N}\p{P}]*')]),
		});

	}

	export interface ExtendTransactionPostBody {

		/**
		 * The transaction to extend.
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId?: string | null;
	}
	export interface ExtendTransactionPostBodyFormProperties {

		/**
		 * The transaction to extend.
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateExtendTransactionPostBodyFormGroup() {
		return new FormGroup<ExtendTransactionPostBodyFormProperties>({
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\p{L}\p{N}\p{P}]*')]),
		});

	}

	export interface GetDataCellsFilterPostBody {

		/**
		 * The ID of the catalog to which the table belongs.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableCatalogId: string;

		/**
		 * A database in the Glue Data Catalog.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * A table in the database.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * The name given by the user to the data filter cell.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface GetDataCellsFilterPostBodyFormProperties {

		/**
		 * The ID of the catalog to which the table belongs.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableCatalogId: FormControl<string | null | undefined>,

		/**
		 * A database in the Glue Data Catalog.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * A table in the database.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * The name given by the user to the data filter cell.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateGetDataCellsFilterPostBodyFormGroup() {
		return new FormGroup<GetDataCellsFilterPostBodyFormProperties>({
			TableCatalogId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetDataLakeSettingsPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;
	}
	export interface GetDataLakeSettingsPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataLakeSettingsPostBodyFormGroup() {
		return new FormGroup<GetDataLakeSettingsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GetEffectivePermissionsForPathPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of the resource for which you want to get permissions.
		 * Required
		 */
		ResourceArn: string;

		/** A continuation token, if this is not the first call to retrieve this list. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetEffectivePermissionsForPathPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the resource for which you want to get permissions.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/** A continuation token, if this is not the first call to retrieve this list. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEffectivePermissionsForPathPostBodyFormGroup() {
		return new FormGroup<GetEffectivePermissionsForPathPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface GetLFTagPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The key-name for the LF-tag.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TagKey: string;
	}
	export interface GetLFTagPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * The key-name for the LF-tag.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateGetLFTagPostBodyFormGroup() {
		return new FormGroup<GetLFTagPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:\/=+\-@%]*)$')]),
		});

	}

	export interface GetQueryStatePostBody {

		/**
		 * The ID of the plan query operation.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		QueryId: string;
	}
	export interface GetQueryStatePostBodyFormProperties {

		/**
		 * The ID of the plan query operation.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryStatePostBodyFormGroup() {
		return new FormGroup<GetQueryStatePostBodyFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
		});

	}

	export interface GetQueryStatisticsPostBody {

		/**
		 * The ID of the plan query operation.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		QueryId: string;
	}
	export interface GetQueryStatisticsPostBodyFormProperties {

		/**
		 * The ID of the plan query operation.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateGetQueryStatisticsPostBodyFormGroup() {
		return new FormGroup<GetQueryStatisticsPostBodyFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
		});

	}

	export interface GetResourceLFTagsPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * A structure for the resource.
		 * Required
		 */
		Resource: GetResourceLFTagsPostBodyResource;

		/** Indicates whether to show the assigned LF-tags. */
		ShowAssignedLFTags?: boolean | null;
	}
	export interface GetResourceLFTagsPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/** Indicates whether to show the assigned LF-tags. */
		ShowAssignedLFTags: FormControl<boolean | null | undefined>,
	}
	export function CreateGetResourceLFTagsPostBodyFormGroup() {
		return new FormGroup<GetResourceLFTagsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ShowAssignedLFTags: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GetResourceLFTagsPostBodyResource {
		Catalog?: CatalogResource;
		Database?: DatabaseResource;
		Table?: TableResource;
		TableWithColumns?: TableWithColumnsResource;
		DataLocation?: DataLocationResource;
		DataCellsFilter?: DataCellsFilterResource;
		LFTag?: LFTagKeyResource;
		LFTagPolicy?: LFTagPolicyResource;
	}
	export interface GetResourceLFTagsPostBodyResourceFormProperties {
	}
	export function CreateGetResourceLFTagsPostBodyResourceFormGroup() {
		return new FormGroup<GetResourceLFTagsPostBodyResourceFormProperties>({
		});

	}

	export interface GetTableObjectsPostBody {

		/**
		 * The catalog containing the governed table. Defaults to the caller’s account.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The database containing the governed table.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * The governed table for which to retrieve objects.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId?: string | null;

		/** The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with <code>TransactionId</code>. */
		QueryAsOfTime?: Date | null;

		/**
		 * <p>A predicate to filter the objects returned based on the partition keys defined in the governed table.</p> <ul> <li> <p>The comparison operators supported are: =, &gt;, &lt;, &gt;=, &lt;=</p> </li> <li> <p>The logical operators supported are: AND</p> </li> <li> <p>The data types supported are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p> </li> </ul>
		 * Max length: 2048
		 * Min length: 0
		 */
		PartitionPredicate?: string | null;

		/**
		 * Specifies how many values to return in a page.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/**
		 * A continuation token if this is not the first call to retrieve these objects.
		 * Max length: 4096
		 */
		NextToken?: string | null;
	}
	export interface GetTableObjectsPostBodyFormProperties {

		/**
		 * The catalog containing the governed table. Defaults to the caller’s account.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * The database containing the governed table.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * The governed table for which to retrieve objects.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * The transaction ID at which to read the governed table contents. If this transaction has aborted, an error is returned. If not set, defaults to the most recent committed transaction. Cannot be specified along with <code>QueryAsOfTime</code>.
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: FormControl<string | null | undefined>,

		/** The time as of when to read the governed table contents. If not set, the most recent transaction commit time is used. Cannot be specified along with <code>TransactionId</code>. */
		QueryAsOfTime: FormControl<Date | null | undefined>,

		/**
		 * <p>A predicate to filter the objects returned based on the partition keys defined in the governed table.</p> <ul> <li> <p>The comparison operators supported are: =, &gt;, &lt;, &gt;=, &lt;=</p> </li> <li> <p>The logical operators supported are: AND</p> </li> <li> <p>The data types supported are integer, long, date(yyyy-MM-dd), timestamp(yyyy-MM-dd HH:mm:ssXXX or yyyy-MM-dd HH:mm:ss"), string and decimal.</p> </li> </ul>
		 * Max length: 2048
		 * Min length: 0
		 */
		PartitionPredicate: FormControl<string | null | undefined>,

		/**
		 * Specifies how many values to return in a page.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A continuation token if this is not the first call to retrieve these objects.
		 * Max length: 4096
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetTableObjectsPostBodyFormGroup() {
		return new FormGroup<GetTableObjectsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\p{L}\p{N}\p{P}]*')]),
			QueryAsOfTime: new FormControl<Date | null | undefined>(undefined),
			PartitionPredicate: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048)]),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface GetTemporaryGluePartitionCredentialsPostBody {

		/**
		 * The ARN of the partitions' table.
		 * Required
		 */
		TableArn: string;

		/**
		 * Contains a list of values defining partitions.
		 * Required
		 */
		Partition: GetTemporaryGluePartitionCredentialsPostBodyPartition;

		/** Filters the request based on the user having been granted a list of specified permissions on the requested resource(s). */
		Permissions?: Array<Permission>;

		/**
		 * The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds?: number | null;

		/** A structure used to include auditing information on the privileged API. */
		AuditContext?: GetTemporaryGluePartitionCredentialsPostBodyAuditContext;

		/**
		 * A list of supported permission types for the partition. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.
		 * Minimum items: 1
		 * Maximum items: 255
		 */
		SupportedPermissionTypes?: Array<PermissionType>;
	}
	export interface GetTemporaryGluePartitionCredentialsPostBodyFormProperties {

		/**
		 * The ARN of the partitions' table.
		 * Required
		 */
		TableArn: FormControl<string | null | undefined>,

		/**
		 * The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGetTemporaryGluePartitionCredentialsPostBodyFormGroup() {
		return new FormGroup<GetTemporaryGluePartitionCredentialsPostBodyFormProperties>({
			TableArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(43200)]),
		});

	}

	export interface GetTemporaryGluePartitionCredentialsPostBodyPartition {
		Values?: Array<string>;
	}
	export interface GetTemporaryGluePartitionCredentialsPostBodyPartitionFormProperties {
	}
	export function CreateGetTemporaryGluePartitionCredentialsPostBodyPartitionFormGroup() {
		return new FormGroup<GetTemporaryGluePartitionCredentialsPostBodyPartitionFormProperties>({
		});

	}

	export interface GetTemporaryGluePartitionCredentialsPostBodyAuditContext {
		AdditionalAuditContext?: string;
	}
	export interface GetTemporaryGluePartitionCredentialsPostBodyAuditContextFormProperties {
		AdditionalAuditContext: FormControl<string | null | undefined>,
	}
	export function CreateGetTemporaryGluePartitionCredentialsPostBodyAuditContextFormGroup() {
		return new FormGroup<GetTemporaryGluePartitionCredentialsPostBodyAuditContextFormProperties>({
			AdditionalAuditContext: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetTemporaryGlueTableCredentialsPostBody {

		/**
		 * The ARN identifying a table in the Data Catalog for the temporary credentials request.
		 * Required
		 */
		TableArn: string;

		/** Filters the request based on the user having been granted a list of specified permissions on the requested resource(s). */
		Permissions?: Array<Permission>;

		/**
		 * The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds?: number | null;

		/** A structure used to include auditing information on the privileged API. */
		AuditContext?: GetTemporaryGlueTableCredentialsPostBodyAuditContext;

		/**
		 * A list of supported permission types for the table. Valid values are <code>COLUMN_PERMISSION</code> and <code>CELL_FILTER_PERMISSION</code>.
		 * Minimum items: 1
		 * Maximum items: 255
		 */
		SupportedPermissionTypes?: Array<PermissionType>;
	}
	export interface GetTemporaryGlueTableCredentialsPostBodyFormProperties {

		/**
		 * The ARN identifying a table in the Data Catalog for the temporary credentials request.
		 * Required
		 */
		TableArn: FormControl<string | null | undefined>,

		/**
		 * The time period, between 900 and 21,600 seconds, for the timeout of the temporary credentials.
		 * Minimum: 900
		 * Maximum: 43200
		 */
		DurationSeconds: FormControl<number | null | undefined>,
	}
	export function CreateGetTemporaryGlueTableCredentialsPostBodyFormGroup() {
		return new FormGroup<GetTemporaryGlueTableCredentialsPostBodyFormProperties>({
			TableArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DurationSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(900), Validators.max(43200)]),
		});

	}

	export interface GetTemporaryGlueTableCredentialsPostBodyAuditContext {
		AdditionalAuditContext?: string;
	}
	export interface GetTemporaryGlueTableCredentialsPostBodyAuditContextFormProperties {
		AdditionalAuditContext: FormControl<string | null | undefined>,
	}
	export function CreateGetTemporaryGlueTableCredentialsPostBodyAuditContextFormGroup() {
		return new FormGroup<GetTemporaryGlueTableCredentialsPostBodyAuditContextFormProperties>({
			AdditionalAuditContext: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetWorkUnitResultsPostBody {

		/**
		 * The ID of the plan query operation for which to get results.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		QueryId: string;

		/**
		 * The work unit ID for which to get results. Value generated by enumerating <code>WorkUnitIdMin</code> to <code>WorkUnitIdMax</code> (inclusive) from the <code>WorkUnitRange</code> in the output of <code>GetWorkUnits</code>.
		 * Required
		 * Minimum: 0
		 */
		WorkUnitId: number;

		/**
		 * A work token used to query the execution service. Token output from <code>GetWorkUnits</code>.
		 * Required
		 * Min length: 1
		 */
		WorkUnitToken: string;
	}
	export interface GetWorkUnitResultsPostBodyFormProperties {

		/**
		 * The ID of the plan query operation for which to get results.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		QueryId: FormControl<string | null | undefined>,

		/**
		 * The work unit ID for which to get results. Value generated by enumerating <code>WorkUnitIdMin</code> to <code>WorkUnitIdMax</code> (inclusive) from the <code>WorkUnitRange</code> in the output of <code>GetWorkUnits</code>.
		 * Required
		 * Minimum: 0
		 */
		WorkUnitId: FormControl<number | null | undefined>,

		/**
		 * A work token used to query the execution service. Token output from <code>GetWorkUnits</code>.
		 * Required
		 * Min length: 1
		 */
		WorkUnitToken: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkUnitResultsPostBodyFormGroup() {
		return new FormGroup<GetWorkUnitResultsPostBodyFormProperties>({
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
			WorkUnitId: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			WorkUnitToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface GetWorkUnitsPostBody {

		/** A continuation token, if this is a continuation call. */
		NextToken?: string | null;

		/** The size of each page to get in the Amazon Web Services service call. This does not affect the number of items returned in the command's output. Setting a smaller page size results in more calls to the Amazon Web Services service, retrieving fewer items in each call. This can help prevent the Amazon Web Services service calls from timing out. */
		PageSize?: number | null;

		/**
		 * The ID of the plan query operation.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		QueryId: string;
	}
	export interface GetWorkUnitsPostBodyFormProperties {

		/** A continuation token, if this is a continuation call. */
		NextToken: FormControl<string | null | undefined>,

		/** The size of each page to get in the Amazon Web Services service call. This does not affect the number of items returned in the command's output. Setting a smaller page size results in more calls to the Amazon Web Services service, retrieving fewer items in each call. This can help prevent the Amazon Web Services service calls from timing out. */
		PageSize: FormControl<number | null | undefined>,

		/**
		 * The ID of the plan query operation.
		 * Required
		 * Max length: 36
		 * Min length: 36
		 */
		QueryId: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkUnitsPostBodyFormGroup() {
		return new FormGroup<GetWorkUnitsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			PageSize: new FormControl<number | null | undefined>(undefined),
			QueryId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
		});

	}

	export interface GrantPermissionsPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The Lake Formation principal. Supported principals are IAM users or IAM roles.
		 * Required
		 */
		Principal: GrantPermissionsPostBodyPrincipal;

		/**
		 * A structure for the resource.
		 * Required
		 */
		Resource: GrantPermissionsPostBodyResource;

		/**
		 * The permissions granted to the principal on the resource. Lake Formation defines privileges to grant and revoke access to metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3. Lake Formation requires that each principal be authorized to perform a specific task on Lake Formation resources.
		 * Required
		 */
		Permissions: Array<Permission>;

		/** Indicates a list of the granted permissions that the principal may pass to other users. These permissions may only be a subset of the permissions granted in the <code>Privileges</code>. */
		PermissionsWithGrantOption?: Array<Permission>;
	}
	export interface GrantPermissionsPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateGrantPermissionsPostBodyFormGroup() {
		return new FormGroup<GrantPermissionsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface GrantPermissionsPostBodyPrincipal {
		DataLakePrincipalIdentifier?: string;
	}
	export interface GrantPermissionsPostBodyPrincipalFormProperties {
		DataLakePrincipalIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateGrantPermissionsPostBodyPrincipalFormGroup() {
		return new FormGroup<GrantPermissionsPostBodyPrincipalFormProperties>({
			DataLakePrincipalIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GrantPermissionsPostBodyResource {
		Catalog?: CatalogResource;
		Database?: DatabaseResource;
		Table?: TableResource;
		TableWithColumns?: TableWithColumnsResource;
		DataLocation?: DataLocationResource;
		DataCellsFilter?: DataCellsFilterResource;
		LFTag?: LFTagKeyResource;
		LFTagPolicy?: LFTagPolicyResource;
	}
	export interface GrantPermissionsPostBodyResourceFormProperties {
	}
	export function CreateGrantPermissionsPostBodyResourceFormGroup() {
		return new FormGroup<GrantPermissionsPostBodyResourceFormProperties>({
		});

	}

	export interface ListDataCellsFilterPostBody {

		/** A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. */
		Table?: ListDataCellsFilterPostBodyTable;

		/** A continuation token, if this is a continuation call. */
		NextToken?: string | null;

		/**
		 * The maximum size of the response.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface ListDataCellsFilterPostBodyFormProperties {

		/** A continuation token, if this is a continuation call. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum size of the response.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListDataCellsFilterPostBodyFormGroup() {
		return new FormGroup<ListDataCellsFilterPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export interface ListDataCellsFilterPostBodyTable {
		CatalogId?: string;
		DatabaseName?: string;
		Name?: string;
		TableWildcard?: TableWildcard;
	}
	export interface ListDataCellsFilterPostBodyTableFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateListDataCellsFilterPostBodyTableFormGroup() {
		return new FormGroup<ListDataCellsFilterPostBodyTableFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLFTagsPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/** If resource share type is <code>ALL</code>, returns both in-account LF-tags and shared LF-tags that the requester has permission to view. If resource share type is <code>FOREIGN</code>, returns all share LF-tags that the requester can view. If no resource share type is passed, lists LF-tags in the given catalog ID that the requester has permission to view. */
		ResourceShareType?: ResourceShareType | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/** A continuation token, if this is not the first call to retrieve this list. */
		NextToken?: string | null;
	}
	export interface ListLFTagsPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/** If resource share type is <code>ALL</code>, returns both in-account LF-tags and shared LF-tags that the requester has permission to view. If resource share type is <code>FOREIGN</code>, returns all share LF-tags that the requester can view. If no resource share type is passed, lists LF-tags in the given catalog ID that the requester has permission to view. */
		ResourceShareType: FormControl<ResourceShareType | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** A continuation token, if this is not the first call to retrieve this list. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListLFTagsPostBodyFormGroup() {
		return new FormGroup<ListLFTagsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ResourceShareType: new FormControl<ResourceShareType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionsPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/** The Lake Formation principal. Supported principals are IAM users or IAM roles. */
		Principal?: ListPermissionsPostBodyPrincipal;

		/** Specifies a resource type to filter the permissions returned. */
		ResourceType?: DataLakeResourceType | null;

		/** A structure for the resource. */
		Resource?: ListPermissionsPostBodyResource;

		/** A continuation token, if this is not the first call to retrieve this list. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/**
		 * Indicates that related permissions should be included in the results.
		 * Max length: 5
		 * Min length: 1
		 */
		IncludeRelated?: string | null;
	}
	export interface ListPermissionsPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/** Specifies a resource type to filter the permissions returned. */
		ResourceType: FormControl<DataLakeResourceType | null | undefined>,

		/** A continuation token, if this is not the first call to retrieve this list. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * Indicates that related permissions should be included in the results.
		 * Max length: 5
		 * Min length: 1
		 */
		IncludeRelated: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionsPostBodyFormGroup() {
		return new FormGroup<ListPermissionsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			ResourceType: new FormControl<DataLakeResourceType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			IncludeRelated: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(5)]),
		});

	}

	export interface ListPermissionsPostBodyPrincipal {
		DataLakePrincipalIdentifier?: string;
	}
	export interface ListPermissionsPostBodyPrincipalFormProperties {
		DataLakePrincipalIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionsPostBodyPrincipalFormGroup() {
		return new FormGroup<ListPermissionsPostBodyPrincipalFormProperties>({
			DataLakePrincipalIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionsPostBodyResource {
		Catalog?: CatalogResource;
		Database?: DatabaseResource;
		Table?: TableResource;
		TableWithColumns?: TableWithColumnsResource;
		DataLocation?: DataLocationResource;
		DataCellsFilter?: DataCellsFilterResource;
		LFTag?: LFTagKeyResource;
		LFTagPolicy?: LFTagPolicyResource;
	}
	export interface ListPermissionsPostBodyResourceFormProperties {
	}
	export function CreateListPermissionsPostBodyResourceFormGroup() {
		return new FormGroup<ListPermissionsPostBodyResourceFormProperties>({
		});

	}

	export interface ListResourcesPostBody {

		/**
		 * Any applicable row-level and/or column-level filtering conditions for the resources.
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		FilterConditionList?: Array<FilterCondition>;

		/**
		 * The maximum number of resource results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/** A continuation token, if this is not the first call to retrieve these resources. */
		NextToken?: string | null;
	}
	export interface ListResourcesPostBodyFormProperties {

		/**
		 * The maximum number of resource results.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** A continuation token, if this is not the first call to retrieve these resources. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesPostBodyFormGroup() {
		return new FormGroup<ListResourcesPostBodyFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTableStorageOptimizersPostBody {

		/**
		 * The Catalog ID of the table.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Name of the database where the table is present.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Name of the table.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/** The specific type of storage optimizers to list. The supported value is <code>compaction</code>. */
		StorageOptimizerType?: OptimizerType | null;

		/**
		 * The number of storage optimizers to return on each call.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/** A continuation token, if this is a continuation call. */
		NextToken?: string | null;
	}
	export interface ListTableStorageOptimizersPostBodyFormProperties {

		/**
		 * The Catalog ID of the table.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Name of the database where the table is present.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Name of the table.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/** The specific type of storage optimizers to list. The supported value is <code>compaction</code>. */
		StorageOptimizerType: FormControl<OptimizerType | null | undefined>,

		/**
		 * The number of storage optimizers to return on each call.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/** A continuation token, if this is a continuation call. */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTableStorageOptimizersPostBodyFormGroup() {
		return new FormGroup<ListTableStorageOptimizersPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			StorageOptimizerType: new FormControl<OptimizerType | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTransactionsPostBody {

		/**
		 * The catalog for which to list transactions. Defaults to the account ID of the caller.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/** A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is <code>ALL</code>. */
		StatusFilter?: TransactionStatusFilter | null;

		/**
		 * The maximum number of transactions to return in a single call.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;

		/**
		 * A continuation token if this is not the first call to retrieve transactions.
		 * Max length: 4096
		 */
		NextToken?: string | null;
	}
	export interface ListTransactionsPostBodyFormProperties {

		/**
		 * The catalog for which to list transactions. Defaults to the account ID of the caller.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/** A filter indicating the status of transactions to return. Options are ALL | COMPLETED | COMMITTED | ABORTED | ACTIVE. The default is <code>ALL</code>. */
		StatusFilter: FormControl<TransactionStatusFilter | null | undefined>,

		/**
		 * The maximum number of transactions to return in a single call.
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * A continuation token if this is not the first call to retrieve transactions.
		 * Max length: 4096
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransactionsPostBodyFormGroup() {
		return new FormGroup<ListTransactionsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			StatusFilter: new FormControl<TransactionStatusFilter | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PutDataLakeSettingsPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * A structure representing a list of Lake Formation principals designated as data lake administrators and lists of principal permission entries for default create database and default create table permissions.
		 * Required
		 */
		DataLakeSettings: PutDataLakeSettingsPostBodyDataLakeSettings;
	}
	export interface PutDataLakeSettingsPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreatePutDataLakeSettingsPostBodyFormGroup() {
		return new FormGroup<PutDataLakeSettingsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface PutDataLakeSettingsPostBodyDataLakeSettings {
		DataLakeAdmins?: Array<DataLakePrincipal>;
		ReadOnlyAdmins?: Array<DataLakePrincipal>;
		CreateDatabaseDefaultPermissions?: Array<PrincipalPermissions>;
		CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
		Parameters?: ParametersMap;
		TrustedResourceOwners?: Array<string>;
		AllowExternalDataFiltering?: boolean | null;
		AllowFullTableExternalDataAccess?: boolean | null;
		ExternalDataFilteringAllowList?: Array<DataLakePrincipal>;
		AuthorizedSessionTagValueList?: Array<string>;
	}
	export interface PutDataLakeSettingsPostBodyDataLakeSettingsFormProperties {
		AllowExternalDataFiltering: FormControl<boolean | null | undefined>,
		AllowFullTableExternalDataAccess: FormControl<boolean | null | undefined>,
	}
	export function CreatePutDataLakeSettingsPostBodyDataLakeSettingsFormGroup() {
		return new FormGroup<PutDataLakeSettingsPostBodyDataLakeSettingsFormProperties>({
			AllowExternalDataFiltering: new FormControl<boolean | null | undefined>(undefined),
			AllowFullTableExternalDataAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RegisterResourcePostBody {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to register.
		 * Required
		 */
		ResourceArn: string;

		/** <p>Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/service-linked-roles.html">Using Service-Linked Roles for Lake Formation</a>.</p> */
		UseServiceLinkedRole?: boolean | null;

		/** The identifier for the role that registers the resource. */
		RoleArn?: string | null;

		/** Whether or not the resource is a federated resource. */
		WithFederation?: boolean | null;
	}
	export interface RegisterResourcePostBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the resource that you want to register.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/** <p>Designates an Identity and Access Management (IAM) service-linked role by registering this role with the Data Catalog. A service-linked role is a unique type of IAM role that is linked directly to Lake Formation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/service-linked-roles.html">Using Service-Linked Roles for Lake Formation</a>.</p> */
		UseServiceLinkedRole: FormControl<boolean | null | undefined>,

		/** The identifier for the role that registers the resource. */
		RoleArn: FormControl<string | null | undefined>,

		/** Whether or not the resource is a federated resource. */
		WithFederation: FormControl<boolean | null | undefined>,
	}
	export function CreateRegisterResourcePostBodyFormGroup() {
		return new FormGroup<RegisterResourcePostBodyFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UseServiceLinkedRole: new FormControl<boolean | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.pattern('arn:aws:iam::[0-9]*:role/.*')]),
			WithFederation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface RemoveLFTagsFromResourcePostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * A structure for the resource.
		 * Required
		 */
		Resource: RemoveLFTagsFromResourcePostBodyResource;

		/**
		 * The LF-tags to be removed from the resource.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		LFTags: Array<LFTagPair>;
	}
	export interface RemoveLFTagsFromResourcePostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateRemoveLFTagsFromResourcePostBodyFormGroup() {
		return new FormGroup<RemoveLFTagsFromResourcePostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface RemoveLFTagsFromResourcePostBodyResource {
		Catalog?: CatalogResource;
		Database?: DatabaseResource;
		Table?: TableResource;
		TableWithColumns?: TableWithColumnsResource;
		DataLocation?: DataLocationResource;
		DataCellsFilter?: DataCellsFilterResource;
		LFTag?: LFTagKeyResource;
		LFTagPolicy?: LFTagPolicyResource;
	}
	export interface RemoveLFTagsFromResourcePostBodyResourceFormProperties {
	}
	export function CreateRemoveLFTagsFromResourcePostBodyResourceFormGroup() {
		return new FormGroup<RemoveLFTagsFromResourcePostBodyResourceFormProperties>({
		});

	}

	export interface RevokePermissionsPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The Lake Formation principal. Supported principals are IAM users or IAM roles.
		 * Required
		 */
		Principal: RevokePermissionsPostBodyPrincipal;

		/**
		 * A structure for the resource.
		 * Required
		 */
		Resource: RevokePermissionsPostBodyResource;

		/**
		 * The permissions revoked to the principal on the resource. For information about permissions, see <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.
		 * Required
		 */
		Permissions: Array<Permission>;

		/** Indicates a list of permissions for which to revoke the grant option allowing the principal to pass permissions to other principals. */
		PermissionsWithGrantOption?: Array<Permission>;
	}
	export interface RevokePermissionsPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateRevokePermissionsPostBodyFormGroup() {
		return new FormGroup<RevokePermissionsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface RevokePermissionsPostBodyPrincipal {
		DataLakePrincipalIdentifier?: string;
	}
	export interface RevokePermissionsPostBodyPrincipalFormProperties {
		DataLakePrincipalIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRevokePermissionsPostBodyPrincipalFormGroup() {
		return new FormGroup<RevokePermissionsPostBodyPrincipalFormProperties>({
			DataLakePrincipalIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RevokePermissionsPostBodyResource {
		Catalog?: CatalogResource;
		Database?: DatabaseResource;
		Table?: TableResource;
		TableWithColumns?: TableWithColumnsResource;
		DataLocation?: DataLocationResource;
		DataCellsFilter?: DataCellsFilterResource;
		LFTag?: LFTagKeyResource;
		LFTagPolicy?: LFTagPolicyResource;
	}
	export interface RevokePermissionsPostBodyResourceFormProperties {
	}
	export function CreateRevokePermissionsPostBodyResourceFormGroup() {
		return new FormGroup<RevokePermissionsPostBodyResourceFormProperties>({
		});

	}

	export interface SearchDatabasesByLFTagsPostBody {

		/** A continuation token, if this is not the first call to retrieve this list. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * A list of conditions (<code>LFTag</code> structures) to search for in database resources.
		 * Required
		 */
		Expression: Array<LFTag>;
	}
	export interface SearchDatabasesByLFTagsPostBodyFormProperties {

		/** A continuation token, if this is not the first call to retrieve this list. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateSearchDatabasesByLFTagsPostBodyFormGroup() {
		return new FormGroup<SearchDatabasesByLFTagsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface SearchTablesByLFTagsPostBody {

		/** A continuation token, if this is not the first call to retrieve this list. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * A list of conditions (<code>LFTag</code> structures) to search for in table resources.
		 * Required
		 */
		Expression: Array<LFTag>;
	}
	export interface SearchTablesByLFTagsPostBodyFormProperties {

		/** A continuation token, if this is not the first call to retrieve this list. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to return.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateSearchTablesByLFTagsPostBodyFormGroup() {
		return new FormGroup<SearchTablesByLFTagsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface StartQueryPlanningPostBody {

		/**
		 * A structure containing information about the query plan.
		 * Required
		 */
		QueryPlanningContext: StartQueryPlanningPostBodyQueryPlanningContext;

		/**
		 * A PartiQL query statement used as an input to the planner service.
		 * Required
		 * Min length: 1
		 */
		QueryString: string;
	}
	export interface StartQueryPlanningPostBodyFormProperties {

		/**
		 * A PartiQL query statement used as an input to the planner service.
		 * Required
		 * Min length: 1
		 */
		QueryString: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryPlanningPostBodyFormGroup() {
		return new FormGroup<StartQueryPlanningPostBodyFormProperties>({
			QueryString: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface StartQueryPlanningPostBodyQueryPlanningContext {
		CatalogId?: string;
		DatabaseName?: string;
		QueryAsOfTime?: Date;
		QueryParameters?: QueryParameterMap;
		TransactionId?: string;
	}
	export interface StartQueryPlanningPostBodyQueryPlanningContextFormProperties {
		CatalogId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		QueryAsOfTime: FormControl<Date | null | undefined>,
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateStartQueryPlanningPostBodyQueryPlanningContextFormGroup() {
		return new FormGroup<StartQueryPlanningPostBodyQueryPlanningContextFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			QueryAsOfTime: new FormControl<Date | null | undefined>(undefined),
			TransactionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartTransactionPostBody {

		/** Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed. */
		TransactionType?: TransactionType | null;
	}
	export interface StartTransactionPostBodyFormProperties {

		/** Indicates whether this transaction should be read only or read and write. Writes made using a read-only transaction ID will be rejected. Read-only transactions do not need to be committed. */
		TransactionType: FormControl<TransactionType | null | undefined>,
	}
	export function CreateStartTransactionPostBodyFormGroup() {
		return new FormGroup<StartTransactionPostBodyFormProperties>({
			TransactionType: new FormControl<TransactionType | null | undefined>(undefined),
		});

	}

	export interface UpdateDataCellsFilterPostBody {

		/**
		 * A structure that describes certain columns on certain rows.
		 * Required
		 */
		TableData: UpdateDataCellsFilterPostBodyTableData;
	}
	export interface UpdateDataCellsFilterPostBodyFormProperties {
	}
	export function CreateUpdateDataCellsFilterPostBodyFormGroup() {
		return new FormGroup<UpdateDataCellsFilterPostBodyFormProperties>({
		});

	}

	export interface UpdateDataCellsFilterPostBodyTableData {
		TableCatalogId?: string;
		DatabaseName?: string;
		TableName?: string;
		Name?: string;
		RowFilter?: RowFilter;
		ColumnNames?: Array<string>;
		ColumnWildcard?: ColumnWildcard;
		VersionId?: string;
	}
	export interface UpdateDataCellsFilterPostBodyTableDataFormProperties {
		TableCatalogId: FormControl<string | null | undefined>,
		DatabaseName: FormControl<string | null | undefined>,
		TableName: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
		VersionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataCellsFilterPostBodyTableDataFormGroup() {
		return new FormGroup<UpdateDataCellsFilterPostBodyTableDataFormProperties>({
			TableCatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined),
			TableName: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			VersionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateLFTagPostBody {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The key-name for the LF-tag for which to add or delete values.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TagKey: string;

		/**
		 * A list of LF-tag values to delete from the LF-tag.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagValuesToDelete?: Array<string>;

		/**
		 * A list of LF-tag values to add from the LF-tag.
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		TagValuesToAdd?: Array<string>;
	}
	export interface UpdateLFTagPostBodyFormProperties {

		/**
		 * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * The key-name for the LF-tag for which to add or delete values.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		TagKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLFTagPostBodyFormGroup() {
		return new FormGroup<UpdateLFTagPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			TagKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(128), Validators.pattern('^([\p{L}\p{Z}\p{N}_.:\/=+\-@%]*)$')]),
		});

	}

	export interface UpdateResourcePostBody {

		/**
		 * The new role to use for the given resource registered in Lake Formation.
		 * Required
		 */
		RoleArn: string;

		/**
		 * The resource ARN.
		 * Required
		 */
		ResourceArn: string;

		/** Whether or not the resource is a federated resource. */
		WithFederation?: boolean | null;
	}
	export interface UpdateResourcePostBodyFormProperties {

		/**
		 * The new role to use for the given resource registered in Lake Formation.
		 * Required
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * The resource ARN.
		 * Required
		 */
		ResourceArn: FormControl<string | null | undefined>,

		/** Whether or not the resource is a federated resource. */
		WithFederation: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateResourcePostBodyFormGroup() {
		return new FormGroup<UpdateResourcePostBodyFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('arn:aws:iam::[0-9]*:role/.*')]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			WithFederation: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateTableObjectsPostBody {

		/**
		 * The catalog containing the governed table to update. Defaults to the caller’s account ID.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The database containing the governed table to update.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * The governed table to update.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * The transaction at which to do the write.
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId?: string | null;

		/**
		 * A list of <code>WriteOperation</code> objects that define an object to add to or delete from the manifest for a governed table.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		WriteOperations: Array<WriteOperation>;
	}
	export interface UpdateTableObjectsPostBodyFormProperties {

		/**
		 * The catalog containing the governed table to update. Defaults to the caller’s account ID.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * The database containing the governed table to update.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * The governed table to update.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * The transaction at which to do the write.
		 * Max length: 255
		 * Min length: 1
		 */
		TransactionId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableObjectsPostBodyFormGroup() {
		return new FormGroup<UpdateTableObjectsPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TransactionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('[\p{L}\p{N}\p{P}]*')]),
		});

	}

	export interface UpdateTableStorageOptimizerPostBody {

		/**
		 * The Catalog ID of the table.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * Name of the database where the table is present.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Name of the table for which to enable the storage optimizer.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: string;

		/**
		 * Name of the table for which to enable the storage optimizer.
		 * Required
		 */
		StorageOptimizerConfig: {[id: string]: StorageOptimizerConfig };
	}
	export interface UpdateTableStorageOptimizerPostBodyFormProperties {

		/**
		 * The Catalog ID of the table.
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/**
		 * Name of the database where the table is present.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Name of the table for which to enable the storage optimizer.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		TableName: FormControl<string | null | undefined>,

		/**
		 * Name of the table for which to enable the storage optimizer.
		 * Required
		 */
		StorageOptimizerConfig: FormControl<{[id: string]: StorageOptimizerConfig } | null | undefined>,
	}
	export function CreateUpdateTableStorageOptimizerPostBodyFormGroup() {
		return new FormGroup<UpdateTableStorageOptimizerPostBodyFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			StorageOptimizerConfig: new FormControl<{[id: string]: StorageOptimizerConfig } | null | undefined>(undefined, [Validators.required]),
		});

	}

}

