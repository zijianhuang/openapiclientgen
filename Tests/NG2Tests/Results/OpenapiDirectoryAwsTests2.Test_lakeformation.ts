import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
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

		/** A permission to a resource granted by batch operation to the principal. */
		RequestEntry?: BatchPermissionsRequestEntry;

		/** Contains details about an error. */
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Id: string;

		/** The AWS Lake Formation principal. */
		Principal?: DataLakePrincipal;

		/** A structure for the resource. */
		Resource?: Resource;
		Permissions?: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}

	/** A permission to a resource granted by batch operation to the principal. */
	export interface BatchPermissionsRequestEntryFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,
	}
	export function CreateBatchPermissionsRequestEntryFormGroup() {
		return new FormGroup<BatchPermissionsRequestEntryFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** The AWS Lake Formation principal. */
	export interface DataLakePrincipal {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DataLakePrincipalIdentifier?: string | null;
	}

	/** The AWS Lake Formation principal. */
	export interface DataLakePrincipalFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DataLakePrincipalIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateDataLakePrincipalFormGroup() {
		return new FormGroup<DataLakePrincipalFormProperties>({
			DataLakePrincipalIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** A structure for the resource. */
	export interface Resource {

		/** A structure for the catalog object. */
		Catalog?: CatalogResource;

		/** A structure for the database object. */
		Database?: DatabaseResource;

		/** A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. */
		Table?: TableResource;

		/** <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p> */
		TableWithColumns?: TableWithColumnsResource;

		/** A structure for a data location object where permissions are granted or revoked. */
		DataLocation?: DataLocationResource;
	}

	/** A structure for the resource. */
	export interface ResourceFormProperties {
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
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

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}

	/** A structure for the database object. */
	export interface DatabaseResourceFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseResourceFormGroup() {
		return new FormGroup<DatabaseResourceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.  */
	export interface TableResource {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: string;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}

	/** A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.  */
	export interface TableResourceFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateTableResourceFormGroup() {
		return new FormGroup<TableResourceFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(255), Validators.minLength(1)]),
		});

	}


	/** <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p> */
	export interface TableWithColumnsResource {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName?: string | null;

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name?: string | null;
		ColumnNames?: Array<string>;

		/** A wildcard object, consisting of an optional list of excluded column names or indexes. */
		ColumnWildcard?: ColumnWildcard;
	}

	/** <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p> */
	export interface TableWithColumnsResourceFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		DatabaseName: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateTableWithColumnsResourceFormGroup() {
		return new FormGroup<TableWithColumnsResourceFormProperties>({
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
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

		/** Required */
		ResourceArn: string;
	}

	/** A structure for a data location object where permissions are granted or revoked.  */
	export interface DataLocationResourceFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDataLocationResourceFormGroup() {
		return new FormGroup<DataLocationResourceFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Permission { ALL = 0, SELECT = 1, ALTER = 2, DROP = 3, DELETE = 4, INSERT = 5, CREATE_DATABASE = 6, CREATE_TABLE = 7, DATA_LOCATION_ACCESS = 8 }


	/** Contains details about an error. */
	export interface ErrorDetail {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ErrorCode?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		ErrorMessage?: string | null;
	}

	/** Contains details about an error. */
	export interface ErrorDetailFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		ErrorCode: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 0
		 */
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateErrorDetailFormGroup() {
		return new FormGroup<ErrorDetailFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			ErrorMessage: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(0)]),
		});

	}

	export interface BatchGrantPermissionsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/** Required */
		Entries: Array<BatchPermissionsRequestEntry>;
	}
	export interface BatchGrantPermissionsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGrantPermissionsRequestFormGroup() {
		return new FormGroup<BatchGrantPermissionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
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

	export interface OperationTimeoutException {
	}
	export interface OperationTimeoutExceptionFormProperties {
	}
	export function CreateOperationTimeoutExceptionFormGroup() {
		return new FormGroup<OperationTimeoutExceptionFormProperties>({
		});

	}

	export interface BatchRevokePermissionsResponse {
		Failures?: Array<BatchPermissionsFailureEntry>;
	}
	export interface BatchRevokePermissionsResponseFormProperties {
	}
	export function CreateBatchRevokePermissionsResponseFormGroup() {
		return new FormGroup<BatchRevokePermissionsResponseFormProperties>({
		});

	}

	export interface BatchRevokePermissionsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/** Required */
		Entries: Array<BatchPermissionsRequestEntry>;
	}
	export interface BatchRevokePermissionsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateBatchRevokePermissionsRequestFormGroup() {
		return new FormGroup<BatchRevokePermissionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
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

	export interface InternalServiceException {
	}
	export interface InternalServiceExceptionFormProperties {
	}
	export function CreateInternalServiceExceptionFormGroup() {
		return new FormGroup<InternalServiceExceptionFormProperties>({
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

	export interface DescribeResourceResponse {

		/** A structure containing information about an AWS Lake Formation resource. */
		ResourceInfo?: ResourceInfo;
	}
	export interface DescribeResourceResponseFormProperties {
	}
	export function CreateDescribeResourceResponseFormGroup() {
		return new FormGroup<DescribeResourceResponseFormProperties>({
		});

	}


	/** A structure containing information about an AWS Lake Formation resource. */
	export interface ResourceInfo {
		ResourceArn?: string | null;

		/** Pattern: arn:aws:iam::[0-9]*:role/.* */
		RoleArn?: string | null;
		LastModified?: Date | null;
	}

	/** A structure containing information about an AWS Lake Formation resource. */
	export interface ResourceInfoFormProperties {
		ResourceArn: FormControl<string | null | undefined>,

		/** Pattern: arn:aws:iam::[0-9]*:role/.* */
		RoleArn: FormControl<string | null | undefined>,
		LastModified: FormControl<Date | null | undefined>,
	}
	export function CreateResourceInfoFormGroup() {
		return new FormGroup<ResourceInfoFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			LastModified: new FormControl<Date | null | undefined>(undefined),
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

	export interface GetDataLakeSettingsResponse {

		/** The AWS Lake Formation principal. */
		DataLakeSettings?: DataLakeSettings;
	}
	export interface GetDataLakeSettingsResponseFormProperties {
	}
	export function CreateGetDataLakeSettingsResponseFormGroup() {
		return new FormGroup<GetDataLakeSettingsResponseFormProperties>({
		});

	}


	/** The AWS Lake Formation principal. */
	export interface DataLakeSettings {

		/**
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		DataLakeAdmins?: Array<DataLakePrincipal>;
		CreateDatabaseDefaultPermissions?: Array<PrincipalPermissions>;
		CreateTableDefaultPermissions?: Array<PrincipalPermissions>;
	}

	/** The AWS Lake Formation principal. */
	export interface DataLakeSettingsFormProperties {
	}
	export function CreateDataLakeSettingsFormGroup() {
		return new FormGroup<DataLakeSettingsFormProperties>({
		});

	}


	/** Permissions granted to a principal. */
	export interface PrincipalPermissions {

		/** The AWS Lake Formation principal. */
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

	export interface GetDataLakeSettingsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;
	}
	export interface GetDataLakeSettingsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateGetDataLakeSettingsRequestFormGroup() {
		return new FormGroup<GetDataLakeSettingsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
		});

	}

	export interface GetEffectivePermissionsForPathResponse {
		Permissions?: Array<PrincipalResourcePermissions>;
		NextToken?: string | null;
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

		/** The AWS Lake Formation principal. */
		Principal?: DataLakePrincipal;

		/** A structure for the resource. */
		Resource?: Resource;
		Permissions?: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}

	/** The permissions granted or revoked on a resource. */
	export interface PrincipalResourcePermissionsFormProperties {
	}
	export function CreatePrincipalResourcePermissionsFormGroup() {
		return new FormGroup<PrincipalResourcePermissionsFormProperties>({
		});

	}

	export interface GetEffectivePermissionsForPathRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/** Required */
		ResourceArn: string;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface GetEffectivePermissionsForPathRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateGetEffectivePermissionsForPathRequestFormGroup() {
		return new FormGroup<GetEffectivePermissionsForPathRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
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

	export interface GrantPermissionsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The AWS Lake Formation principal.
		 * Required
		 */
		Principal: DataLakePrincipal;

		/**
		 * A structure for the resource.
		 * Required
		 */
		Resource: Resource;

		/** Required */
		Permissions: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}
	export interface GrantPermissionsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateGrantPermissionsRequestFormGroup() {
		return new FormGroup<GrantPermissionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
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

	export interface ListPermissionsResponse {
		PrincipalResourcePermissions?: Array<PrincipalResourcePermissions>;
		NextToken?: string | null;
	}
	export interface ListPermissionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPermissionsResponseFormGroup() {
		return new FormGroup<ListPermissionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPermissionsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/** The AWS Lake Formation principal. */
		Principal?: DataLakePrincipal;
		ResourceType?: ListPermissionsRequestResourceType | null;

		/** A structure for the resource. */
		Resource?: Resource;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
	}
	export interface ListPermissionsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
		ResourceType: FormControl<ListPermissionsRequestResourceType | null | undefined>,
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateListPermissionsRequestFormGroup() {
		return new FormGroup<ListPermissionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
			ResourceType: new FormControl<ListPermissionsRequestResourceType | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
		});

	}

	export enum ListPermissionsRequestResourceType { CATALOG = 0, DATABASE = 1, TABLE = 2, DATA_LOCATION = 3 }

	export interface ListResourcesResponse {
		ResourceInfoList?: Array<ResourceInfo>;
		NextToken?: string | null;
	}
	export interface ListResourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesResponseFormGroup() {
		return new FormGroup<ListResourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListResourcesRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		FilterConditionList?: Array<FilterCondition>;

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults?: number | null;
		NextToken?: string | null;
	}
	export interface ListResourcesRequestFormProperties {

		/**
		 * Minimum: 1
		 * Maximum: 1000
		 */
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListResourcesRequestFormGroup() {
		return new FormGroup<ListResourcesRequestFormProperties>({
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(1000)]),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This structure describes the filtering of columns in a table based on a filter condition. */
	export interface FilterCondition {
		Field?: FilterConditionField | null;
		ComparisonOperator?: FilterConditionComparisonOperator | null;
		StringValueList?: Array<string>;
	}

	/** This structure describes the filtering of columns in a table based on a filter condition. */
	export interface FilterConditionFormProperties {
		Field: FormControl<FilterConditionField | null | undefined>,
		ComparisonOperator: FormControl<FilterConditionComparisonOperator | null | undefined>,
	}
	export function CreateFilterConditionFormGroup() {
		return new FormGroup<FilterConditionFormProperties>({
			Field: new FormControl<FilterConditionField | null | undefined>(undefined),
			ComparisonOperator: new FormControl<FilterConditionComparisonOperator | null | undefined>(undefined),
		});

	}

	export enum FilterConditionField { RESOURCE_ARN = 0, ROLE_ARN = 1, LAST_MODIFIED = 2 }

	export enum FilterConditionComparisonOperator { EQ = 0, NE = 1, LE = 2, LT = 3, GE = 4, GT = 5, CONTAINS = 6, NOT_CONTAINS = 7, BEGINS_WITH = 8, IN = 9, BETWEEN = 10 }

	export interface PutDataLakeSettingsResponse {
	}
	export interface PutDataLakeSettingsResponseFormProperties {
	}
	export function CreatePutDataLakeSettingsResponseFormGroup() {
		return new FormGroup<PutDataLakeSettingsResponseFormProperties>({
		});

	}

	export interface PutDataLakeSettingsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The AWS Lake Formation principal.
		 * Required
		 */
		DataLakeSettings: DataLakeSettings;
	}
	export interface PutDataLakeSettingsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreatePutDataLakeSettingsRequestFormGroup() {
		return new FormGroup<PutDataLakeSettingsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
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

	export interface RegisterResourceRequest {

		/** Required */
		ResourceArn: string;
		UseServiceLinkedRole?: boolean | null;

		/** Pattern: arn:aws:iam::[0-9]*:role/.* */
		RoleArn?: string | null;
	}
	export interface RegisterResourceRequestFormProperties {

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
		UseServiceLinkedRole: FormControl<boolean | null | undefined>,

		/** Pattern: arn:aws:iam::[0-9]*:role/.* */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateRegisterResourceRequestFormGroup() {
		return new FormGroup<RegisterResourceRequestFormProperties>({
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UseServiceLinkedRole: new FormControl<boolean | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
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

	export interface RevokePermissionsResponse {
	}
	export interface RevokePermissionsResponseFormProperties {
	}
	export function CreateRevokePermissionsResponseFormGroup() {
		return new FormGroup<RevokePermissionsResponseFormProperties>({
		});

	}

	export interface RevokePermissionsRequest {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId?: string | null;

		/**
		 * The AWS Lake Formation principal.
		 * Required
		 */
		Principal: DataLakePrincipal;

		/**
		 * A structure for the resource.
		 * Required
		 */
		Resource: Resource;

		/** Required */
		Permissions: Array<Permission>;
		PermissionsWithGrantOption?: Array<Permission>;
	}
	export interface RevokePermissionsRequestFormProperties {

		/**
		 * Max length: 255
		 * Min length: 1
		 */
		CatalogId: FormControl<string | null | undefined>,
	}
	export function CreateRevokePermissionsRequestFormGroup() {
		return new FormGroup<RevokePermissionsRequestFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(255), Validators.minLength(1)]),
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

	export interface UpdateResourceRequest {

		/**
		 * Required
		 * Pattern: arn:aws:iam::[0-9]*:role/.*
		 */
		RoleArn: string;

		/** Required */
		ResourceArn: string;
	}
	export interface UpdateResourceRequestFormProperties {

		/**
		 * Required
		 * Pattern: arn:aws:iam::[0-9]*:role/.*
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Required */
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateResourceRequestFormGroup() {
		return new FormGroup<UpdateResourceRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ComparisonOperator { EQ = 0, NE = 1, LE = 2, LT = 3, GE = 4, GT = 5, CONTAINS = 6, NOT_CONTAINS = 7, BEGINS_WITH = 8, IN = 9, BETWEEN = 10 }

	export enum DataLakeResourceType { CATALOG = 0, DATABASE = 1, TABLE = 2, DATA_LOCATION = 3 }

	export enum FieldNameString { RESOURCE_ARN = 0, ROLE_ARN = 1, LAST_MODIFIED = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Batch operation to grant permissions to the principal.
		 * Post #X-Amz-Target=AWSLakeFormation.BatchGrantPermissions
		 * @return {BatchGrantPermissionsResponse} Success
		 */
		BatchGrantPermissions(requestBody: BatchGrantPermissionsRequest): Observable<BatchGrantPermissionsResponse> {
			return this.http.post<BatchGrantPermissionsResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.BatchGrantPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Batch operation to revoke permissions from the principal.
		 * Post #X-Amz-Target=AWSLakeFormation.BatchRevokePermissions
		 * @return {BatchRevokePermissionsResponse} Success
		 */
		BatchRevokePermissions(requestBody: BatchRevokePermissionsRequest): Observable<BatchRevokePermissionsResponse> {
			return this.http.post<BatchRevokePermissionsResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.BatchRevokePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Deregisters the resource as managed by the Data Catalog.</p> <p>When you deregister a path, Lake Formation removes the path from the inline policy attached to your service-linked role.</p>
		 * Post #X-Amz-Target=AWSLakeFormation.DeregisterResource
		 * @return {DeregisterResourceResponse} Success
		 */
		DeregisterResource(requestBody: DeregisterResourceRequest): Observable<DeregisterResourceResponse> {
			return this.http.post<DeregisterResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.DeregisterResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the current data access role for the given resource registered in AWS Lake Formation.
		 * Post #X-Amz-Target=AWSLakeFormation.DescribeResource
		 * @return {DescribeResourceResponse} Success
		 */
		DescribeResource(requestBody: DescribeResourceRequest): Observable<DescribeResourceResponse> {
			return this.http.post<DescribeResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.DescribeResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The AWS Lake Formation principal.
		 * Post #X-Amz-Target=AWSLakeFormation.GetDataLakeSettings
		 * @return {GetDataLakeSettingsResponse} Success
		 */
		GetDataLakeSettings(requestBody: GetDataLakeSettingsRequest): Observable<GetDataLakeSettingsResponse> {
			return this.http.post<GetDataLakeSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.GetDataLakeSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the permissions for a specified table or database resource located at a path in Amazon S3.
		 * Post #X-Amz-Target=AWSLakeFormation.GetEffectivePermissionsForPath
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetEffectivePermissionsForPathResponse} Success
		 */
		GetEffectivePermissionsForPath(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetEffectivePermissionsForPathRequest): Observable<GetEffectivePermissionsForPathResponse> {
			return this.http.post<GetEffectivePermissionsForPathResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.GetEffectivePermissionsForPath?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Grants permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/michigan/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
		 * Post #X-Amz-Target=AWSLakeFormation.GrantPermissions
		 * @return {GrantPermissionsResponse} Success
		 */
		GrantPermissions(requestBody: GrantPermissionsRequest): Observable<GrantPermissionsResponse> {
			return this.http.post<GrantPermissionsResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.GrantPermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Returns a list of the principal permissions on the resource, filtered by the permissions of the caller. For example, if you are granted an ALTER permission, you are able to see only the principal permissions for ALTER.</p> <p>This operation returns only those permissions that have been explicitly granted.</p> <p>For information about permissions, see <a href="https://docs-aws.amazon.com/michigan/latest/dg/security-data-access.html">Security and Access Control to Metadata and Data</a>.</p>
		 * Post #X-Amz-Target=AWSLakeFormation.ListPermissions
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPermissionsResponse} Success
		 */
		ListPermissions(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListPermissionsRequest): Observable<ListPermissionsResponse> {
			return this.http.post<ListPermissionsResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.ListPermissions?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the resources registered to be managed by the Data Catalog.
		 * Post #X-Amz-Target=AWSLakeFormation.ListResources
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListResourcesResponse} Success
		 */
		ListResources(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: ListResourcesRequest): Observable<ListResourcesResponse> {
			return this.http.post<ListResourcesResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.ListResources?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The AWS Lake Formation principal.
		 * Post #X-Amz-Target=AWSLakeFormation.PutDataLakeSettings
		 * @return {PutDataLakeSettingsResponse} Success
		 */
		PutDataLakeSettings(requestBody: PutDataLakeSettingsRequest): Observable<PutDataLakeSettingsResponse> {
			return this.http.post<PutDataLakeSettingsResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.PutDataLakeSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Registers the resource as managed by the Data Catalog.</p> <p>To add or update data, Lake Formation needs read/write access to the chosen Amazon S3 path. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.</p>
		 * Post #X-Amz-Target=AWSLakeFormation.RegisterResource
		 * @return {RegisterResourceResponse} Success
		 */
		RegisterResource(requestBody: RegisterResourceRequest): Observable<RegisterResourceResponse> {
			return this.http.post<RegisterResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.RegisterResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes permissions to the principal to access metadata in the Data Catalog and data organized in underlying data storage such as Amazon S3.
		 * Post #X-Amz-Target=AWSLakeFormation.RevokePermissions
		 * @return {RevokePermissionsResponse} Success
		 */
		RevokePermissions(requestBody: RevokePermissionsRequest): Observable<RevokePermissionsResponse> {
			return this.http.post<RevokePermissionsResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.RevokePermissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the data access role used for vending access to the given (registered) resource in AWS Lake Formation.
		 * Post #X-Amz-Target=AWSLakeFormation.UpdateResource
		 * @return {UpdateResourceResponse} Success
		 */
		UpdateResource(requestBody: UpdateResourceRequest): Observable<UpdateResourceResponse> {
			return this.http.post<UpdateResourceResponse>(this.baseUri + '#X-Amz-Target=AWSLakeFormation.UpdateResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum BatchGrantPermissionsX_Amz_Target { AWSLakeFormation_BatchGrantPermissions = 0 }

	export enum BatchRevokePermissionsX_Amz_Target { AWSLakeFormation_BatchRevokePermissions = 0 }

	export enum DeregisterResourceX_Amz_Target { AWSLakeFormation_DeregisterResource = 0 }

	export enum DescribeResourceX_Amz_Target { AWSLakeFormation_DescribeResource = 0 }

	export enum GetDataLakeSettingsX_Amz_Target { AWSLakeFormation_GetDataLakeSettings = 0 }

	export enum GetEffectivePermissionsForPathX_Amz_Target { AWSLakeFormation_GetEffectivePermissionsForPath = 0 }

	export enum GrantPermissionsX_Amz_Target { AWSLakeFormation_GrantPermissions = 0 }

	export enum ListPermissionsX_Amz_Target { AWSLakeFormation_ListPermissions = 0 }

	export enum ListResourcesX_Amz_Target { AWSLakeFormation_ListResources = 0 }

	export enum PutDataLakeSettingsX_Amz_Target { AWSLakeFormation_PutDataLakeSettings = 0 }

	export enum RegisterResourceX_Amz_Target { AWSLakeFormation_RegisterResource = 0 }

	export enum RevokePermissionsX_Amz_Target { AWSLakeFormation_RevokePermissions = 0 }

	export enum UpdateResourceX_Amz_Target { AWSLakeFormation_UpdateResource = 0 }

}

