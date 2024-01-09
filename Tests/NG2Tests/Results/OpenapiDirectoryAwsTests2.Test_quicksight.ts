import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CancelIngestionResponse {
		Arn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IngestionId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface CancelIngestionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IngestionId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateCancelIngestionResponseFormGroup() {
		return new FormGroup<CancelIngestionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			IngestionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
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

	export interface InvalidParameterValueException {
	}
	export interface InvalidParameterValueExceptionFormProperties {
	}
	export function CreateInvalidParameterValueExceptionFormGroup() {
		return new FormGroup<InvalidParameterValueExceptionFormProperties>({
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

	export interface ResourceExistsException {
	}
	export interface ResourceExistsExceptionFormProperties {
	}
	export function CreateResourceExistsExceptionFormGroup() {
		return new FormGroup<ResourceExistsExceptionFormProperties>({
		});

	}

	export interface InternalFailureException {
	}
	export interface InternalFailureExceptionFormProperties {
	}
	export function CreateInternalFailureExceptionFormGroup() {
		return new FormGroup<InternalFailureExceptionFormProperties>({
		});

	}

	export interface CreateDashboardResponse {
		Arn?: string | null;
		VersionArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId?: string | null;
		CreationStatus?: CreateDashboardResponseCreationStatus | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface CreateDashboardResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		VersionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId: FormControl<string | null | undefined>,
		CreationStatus: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateDashboardResponseFormGroup() {
		return new FormGroup<CreateDashboardResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			VersionArn: new FormControl<string | null | undefined>(undefined),
			DashboardId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			CreationStatus: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateDashboardResponseCreationStatus { CREATION_IN_PROGRESS = 0, CREATION_SUCCESSFUL = 1, CREATION_FAILED = 2, UPDATE_IN_PROGRESS = 3, UPDATE_SUCCESSFUL = 4, UPDATE_FAILED = 5 }


	/** String parameter. */
	export interface StringParameter {

		/** Required */
		Name: string;

		/** Required */
		Values: Array<string>;
	}

	/** String parameter. */
	export interface StringParameterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateStringParameterFormGroup() {
		return new FormGroup<StringParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Integer parameter. */
	export interface IntegerParameter {

		/** Required */
		Name: string;

		/** Required */
		Values: Array<number>;
	}

	/** Integer parameter. */
	export interface IntegerParameterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateIntegerParameterFormGroup() {
		return new FormGroup<IntegerParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Decimal parameter. */
	export interface DecimalParameter {

		/** Required */
		Name: string;

		/** Required */
		Values: Array<number>;
	}

	/** Decimal parameter. */
	export interface DecimalParameterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDecimalParameterFormGroup() {
		return new FormGroup<DecimalParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Date time parameter. */
	export interface DateTimeParameter {

		/** Required */
		Name: string;

		/** Required */
		Values: Array<string>;
	}

	/** Date time parameter. */
	export interface DateTimeParameterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDateTimeParameterFormGroup() {
		return new FormGroup<DateTimeParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Permission for the resource. */
	export interface ResourcePermission {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Principal: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		Actions: Array<string>;
	}

	/** Permission for the resource. */
	export interface ResourcePermissionFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Principal: FormControl<string | null | undefined>,
	}
	export function CreateResourcePermissionFormGroup() {
		return new FormGroup<ResourcePermissionFormProperties>({
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Dashboard source template. */
	export interface DashboardSourceTemplate {

		/**
		 * Required
		 * Minimum items: 1
		 */
		DataSetReferences: Array<DataSetReference>;

		/** Required */
		Arn: string;
	}

	/** Dashboard source template. */
	export interface DashboardSourceTemplateFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateDashboardSourceTemplateFormGroup() {
		return new FormGroup<DashboardSourceTemplateFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Dataset reference. */
	export interface DataSetReference {

		/** Required */
		DataSetPlaceholder: string;

		/** Required */
		DataSetArn: string;
	}

	/** Dataset reference. */
	export interface DataSetReferenceFormProperties {

		/** Required */
		DataSetPlaceholder: FormControl<string | null | undefined>,

		/** Required */
		DataSetArn: FormControl<string | null | undefined>,
	}
	export function CreateDataSetReferenceFormGroup() {
		return new FormGroup<DataSetReferenceFormProperties>({
			DataSetPlaceholder: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DataSetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The key or keys of the key-value pairs for the resource tag or tags assigned to the resource. */
	export interface Tag {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Value: string;
	}

	/** The key or keys of the key-value pairs for the resource tag or tags assigned to the resource. */
	export interface TagFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
		});

	}


	/** Ad hoc (one-time) filtering option. */
	export interface AdHocFilteringOption {
		AvailabilityStatus?: AdHocFilteringOptionAvailabilityStatus | null;
	}

	/** Ad hoc (one-time) filtering option. */
	export interface AdHocFilteringOptionFormProperties {
		AvailabilityStatus: FormControl<AdHocFilteringOptionAvailabilityStatus | null | undefined>,
	}
	export function CreateAdHocFilteringOptionFormGroup() {
		return new FormGroup<AdHocFilteringOptionFormProperties>({
			AvailabilityStatus: new FormControl<AdHocFilteringOptionAvailabilityStatus | null | undefined>(undefined),
		});

	}

	export enum AdHocFilteringOptionAvailabilityStatus { ENABLED = 0, DISABLED = 1 }


	/** Export to .csv option. */
	export interface ExportToCSVOption {
		AvailabilityStatus?: AdHocFilteringOptionAvailabilityStatus | null;
	}

	/** Export to .csv option. */
	export interface ExportToCSVOptionFormProperties {
		AvailabilityStatus: FormControl<AdHocFilteringOptionAvailabilityStatus | null | undefined>,
	}
	export function CreateExportToCSVOptionFormGroup() {
		return new FormGroup<ExportToCSVOptionFormProperties>({
			AvailabilityStatus: new FormControl<AdHocFilteringOptionAvailabilityStatus | null | undefined>(undefined),
		});

	}


	/** Sheet controls option. */
	export interface SheetControlsOption {
		VisibilityState?: SheetControlsOptionVisibilityState | null;
	}

	/** Sheet controls option. */
	export interface SheetControlsOptionFormProperties {
		VisibilityState: FormControl<SheetControlsOptionVisibilityState | null | undefined>,
	}
	export function CreateSheetControlsOptionFormGroup() {
		return new FormGroup<SheetControlsOptionFormProperties>({
			VisibilityState: new FormControl<SheetControlsOptionVisibilityState | null | undefined>(undefined),
		});

	}

	export enum SheetControlsOptionVisibilityState { EXPANDED = 0, COLLAPSED = 1 }

	export interface ConflictException {
	}
	export interface ConflictExceptionFormProperties {
	}
	export function CreateConflictExceptionFormGroup() {
		return new FormGroup<ConflictExceptionFormProperties>({
		});

	}

	export interface UnsupportedUserEditionException {
	}
	export interface UnsupportedUserEditionExceptionFormProperties {
	}
	export function CreateUnsupportedUserEditionExceptionFormGroup() {
		return new FormGroup<UnsupportedUserEditionExceptionFormProperties>({
		});

	}

	export interface CreateDataSetResponse {
		Arn?: string | null;
		DataSetId?: string | null;
		IngestionArn?: string | null;
		IngestionId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface CreateDataSetResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		IngestionArn: FormControl<string | null | undefined>,
		IngestionId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateCreateDataSetResponseFormGroup() {
		return new FormGroup<CreateDataSetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			IngestionArn: new FormControl<string | null | undefined>(undefined),
			IngestionId: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A view of a data source that contains information about the shape of the data in the underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface PhysicalTable {

		/** A physical table type for relational data sources. */
		RelationalTable?: RelationalTable;

		/** A physical table type built from the results of the custom SQL query. */
		CustomSql?: CustomSql;

		/** A physical table type for as S3 data source. */
		S3Source?: S3Source;
	}

	/** A view of a data source that contains information about the shape of the data in the underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface PhysicalTableFormProperties {
	}
	export function CreatePhysicalTableFormGroup() {
		return new FormGroup<PhysicalTableFormProperties>({
		});

	}


	/** A physical table type for relational data sources. */
	export interface RelationalTable {

		/** Required */
		DataSourceArn: string;

		/** Max length: 64 */
		Schema?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2048
		 */
		InputColumns: Array<InputColumn>;
	}

	/** A physical table type for relational data sources. */
	export interface RelationalTableFormProperties {

		/** Required */
		DataSourceArn: FormControl<string | null | undefined>,

		/** Max length: 64 */
		Schema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateRelationalTableFormGroup() {
		return new FormGroup<RelationalTableFormProperties>({
			DataSourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Schema: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}


	/** Metadata for a column that is used as the input of a transform operation. */
	export interface InputColumn {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Type: InputColumnType;
	}

	/** Metadata for a column that is used as the input of a transform operation. */
	export interface InputColumnFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<InputColumnType | null | undefined>,
	}
	export function CreateInputColumnFormGroup() {
		return new FormGroup<InputColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Type: new FormControl<InputColumnType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum InputColumnType { STRING = 0, INTEGER = 1, DECIMAL = 2, DATETIME = 3, BIT = 4, BOOLEAN = 5, JSON = 6 }


	/** A physical table type built from the results of the custom SQL query. */
	export interface CustomSql {

		/** Required */
		DataSourceArn: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		SqlQuery: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 2048
		 */
		Columns?: Array<InputColumn>;
	}

	/** A physical table type built from the results of the custom SQL query. */
	export interface CustomSqlFormProperties {

		/** Required */
		DataSourceArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65536
		 * Min length: 1
		 */
		SqlQuery: FormControl<string | null | undefined>,
	}
	export function CreateCustomSqlFormGroup() {
		return new FormGroup<CustomSqlFormProperties>({
			DataSourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			SqlQuery: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(65536), Validators.minLength(1)]),
		});

	}


	/** A physical table type for as S3 data source. */
	export interface S3Source {

		/** Required */
		DataSourceArn: string;

		/** Information about the format for a source file or files. */
		UploadSettings?: UploadSettings;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2048
		 */
		InputColumns: Array<InputColumn>;
	}

	/** A physical table type for as S3 data source. */
	export interface S3SourceFormProperties {

		/** Required */
		DataSourceArn: FormControl<string | null | undefined>,
	}
	export function CreateS3SourceFormGroup() {
		return new FormGroup<S3SourceFormProperties>({
			DataSourceArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Information about the format for a source file or files. */
	export interface UploadSettings {
		Format?: UploadSettingsFormat | null;

		/** Minimum: 1 */
		StartFromRow?: number | null;
		ContainsHeader?: boolean | null;
		TextQualifier?: UploadSettingsTextQualifier | null;

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		Delimiter?: string | null;
	}

	/** Information about the format for a source file or files. */
	export interface UploadSettingsFormProperties {
		Format: FormControl<UploadSettingsFormat | null | undefined>,

		/** Minimum: 1 */
		StartFromRow: FormControl<number | null | undefined>,
		ContainsHeader: FormControl<boolean | null | undefined>,
		TextQualifier: FormControl<UploadSettingsTextQualifier | null | undefined>,

		/**
		 * Max length: 1
		 * Min length: 1
		 */
		Delimiter: FormControl<string | null | undefined>,
	}
	export function CreateUploadSettingsFormGroup() {
		return new FormGroup<UploadSettingsFormProperties>({
			Format: new FormControl<UploadSettingsFormat | null | undefined>(undefined),
			StartFromRow: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			ContainsHeader: new FormControl<boolean | null | undefined>(undefined),
			TextQualifier: new FormControl<UploadSettingsTextQualifier | null | undefined>(undefined),
			Delimiter: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1), Validators.minLength(1)]),
		});

	}

	export enum UploadSettingsFormat { CSV = 0, TSV = 1, CLF = 2, ELF = 3, XLSX = 4, JSON = 5 }

	export enum UploadSettingsTextQualifier { DOUBLE_QUOTE = 0, SINGLE_QUOTE = 1 }


	/** A <i>logical table</i> is a unit that joins and that data transformations operate on. A logical table has a source, which can be either a physical table or result of a join. When a logical table points to a physical table, the logical table acts as a mutable copy of that physical table through transform operations. */
	export interface LogicalTable {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Alias: string;

		/**
		 * Minimum items: 1
		 * Maximum items: 2048
		 */
		DataTransforms?: Array<TransformOperation>;

		/**
		 * Information about the source of a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
		 * Required
		 */
		Source: LogicalTableSource;
	}

	/** A <i>logical table</i> is a unit that joins and that data transformations operate on. A logical table has a source, which can be either a physical table or result of a join. When a logical table points to a physical table, the logical table acts as a mutable copy of that physical table through transform operations. */
	export interface LogicalTableFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Alias: FormControl<string | null | undefined>,
	}
	export function CreateLogicalTableFormGroup() {
		return new FormGroup<LogicalTableFormProperties>({
			Alias: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}


	/** A data transformation on a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface TransformOperation {

		/** A transform operation that projects columns. Operations that come after a projection can only refer to projected columns. */
		ProjectOperation?: ProjectOperation;

		/** A transform operation that filters rows based on a condition. */
		FilterOperation?: FilterOperation;

		/** A transform operation that creates calculated columns. Columns created in one such operation form a lexical closure. */
		CreateColumnsOperation?: CreateColumnsOperation;

		/** A transform operation that renames a column. */
		RenameColumnOperation?: RenameColumnOperation;

		/** A transform operation that casts a column to a different type. */
		CastColumnTypeOperation?: CastColumnTypeOperation;

		/** A transform operation that tags a column with additional information. */
		TagColumnOperation?: TagColumnOperation;
	}

	/** A data transformation on a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface TransformOperationFormProperties {
	}
	export function CreateTransformOperationFormGroup() {
		return new FormGroup<TransformOperationFormProperties>({
		});

	}


	/** A transform operation that projects columns. Operations that come after a projection can only refer to projected columns. */
	export interface ProjectOperation {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 2000
		 */
		ProjectedColumns: Array<string>;
	}

	/** A transform operation that projects columns. Operations that come after a projection can only refer to projected columns. */
	export interface ProjectOperationFormProperties {
	}
	export function CreateProjectOperationFormGroup() {
		return new FormGroup<ProjectOperationFormProperties>({
		});

	}


	/** A transform operation that filters rows based on a condition. */
	export interface FilterOperation {

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		ConditionExpression: string;
	}

	/** A transform operation that filters rows based on a condition. */
	export interface FilterOperationFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		ConditionExpression: FormControl<string | null | undefined>,
	}
	export function CreateFilterOperationFormGroup() {
		return new FormGroup<FilterOperationFormProperties>({
			ConditionExpression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096), Validators.minLength(1)]),
		});

	}


	/** A transform operation that creates calculated columns. Columns created in one such operation form a lexical closure. */
	export interface CreateColumnsOperation {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 128
		 */
		Columns: Array<CalculatedColumn>;
	}

	/** A transform operation that creates calculated columns. Columns created in one such operation form a lexical closure. */
	export interface CreateColumnsOperationFormProperties {
	}
	export function CreateCreateColumnsOperationFormGroup() {
		return new FormGroup<CreateColumnsOperationFormProperties>({
		});

	}


	/** A calculated column for a dataset. */
	export interface CalculatedColumn {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ColumnName: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ColumnId: string;

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		Expression: string;
	}

	/** A calculated column for a dataset. */
	export interface CalculatedColumnFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ColumnName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		ColumnId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 * Min length: 1
		 */
		Expression: FormControl<string | null | undefined>,
	}
	export function CreateCalculatedColumnFormGroup() {
		return new FormGroup<CalculatedColumnFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			ColumnId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096), Validators.minLength(1)]),
		});

	}


	/** A transform operation that renames a column. */
	export interface RenameColumnOperation {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ColumnName: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		NewColumnName: string;
	}

	/** A transform operation that renames a column. */
	export interface RenameColumnOperationFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ColumnName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		NewColumnName: FormControl<string | null | undefined>,
	}
	export function CreateRenameColumnOperationFormGroup() {
		return new FormGroup<RenameColumnOperationFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			NewColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** A transform operation that casts a column to a different type. */
	export interface CastColumnTypeOperation {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ColumnName: string;

		/** Required */
		NewColumnType: CastColumnTypeOperationNewColumnType;

		/** Max length: 32 */
		Format?: string | null;
	}

	/** A transform operation that casts a column to a different type. */
	export interface CastColumnTypeOperationFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ColumnName: FormControl<string | null | undefined>,

		/** Required */
		NewColumnType: FormControl<CastColumnTypeOperationNewColumnType | null | undefined>,

		/** Max length: 32 */
		Format: FormControl<string | null | undefined>,
	}
	export function CreateCastColumnTypeOperationFormGroup() {
		return new FormGroup<CastColumnTypeOperationFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			NewColumnType: new FormControl<CastColumnTypeOperationNewColumnType | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(32)]),
		});

	}

	export enum CastColumnTypeOperationNewColumnType { STRING = 0, INTEGER = 1, DECIMAL = 2, DATETIME = 3 }


	/** A transform operation that tags a column with additional information. */
	export interface TagColumnOperation {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ColumnName: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		Tags: Array<ColumnTag>;
	}

	/** A transform operation that tags a column with additional information. */
	export interface TagColumnOperationFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		ColumnName: FormControl<string | null | undefined>,
	}
	export function CreateTagColumnOperationFormGroup() {
		return new FormGroup<TagColumnOperationFormProperties>({
			ColumnName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** A tag for a column in a <code>TagColumnOperation</code> structure. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface ColumnTag {
		ColumnGeographicRole?: ColumnTagColumnGeographicRole | null;
	}

	/** A tag for a column in a <code>TagColumnOperation</code> structure. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface ColumnTagFormProperties {
		ColumnGeographicRole: FormControl<ColumnTagColumnGeographicRole | null | undefined>,
	}
	export function CreateColumnTagFormGroup() {
		return new FormGroup<ColumnTagFormProperties>({
			ColumnGeographicRole: new FormControl<ColumnTagColumnGeographicRole | null | undefined>(undefined),
		});

	}

	export enum ColumnTagColumnGeographicRole { COUNTRY = 0, STATE = 1, COUNTY = 2, CITY = 3, POSTCODE = 4, LONGITUDE = 5, LATITUDE = 6 }


	/** Information about the source of a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface LogicalTableSource {

		/** Join instruction. */
		JoinInstruction?: JoinInstruction;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		PhysicalTableId?: string | null;
	}

	/** Information about the source of a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface LogicalTableSourceFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		PhysicalTableId: FormControl<string | null | undefined>,
	}
	export function CreateLogicalTableSourceFormGroup() {
		return new FormGroup<LogicalTableSourceFormProperties>({
			PhysicalTableId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[0-9a-zA-Z-]*')]),
		});

	}


	/** Join instruction. */
	export interface JoinInstruction {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LeftOperand: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		RightOperand: string;

		/** Required */
		Type: JoinInstructionType;

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		OnClause: string;
	}

	/** Join instruction. */
	export interface JoinInstructionFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		LeftOperand: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		RightOperand: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<JoinInstructionType | null | undefined>,

		/**
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		OnClause: FormControl<string | null | undefined>,
	}
	export function CreateJoinInstructionFormGroup() {
		return new FormGroup<JoinInstructionFormProperties>({
			LeftOperand: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[0-9a-zA-Z-]*')]),
			RightOperand: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[0-9a-zA-Z-]*')]),
			Type: new FormControl<JoinInstructionType | null | undefined>(undefined, [Validators.required]),
			OnClause: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export enum JoinInstructionType { INNER = 0, OUTER = 1, LEFT = 2, RIGHT = 3 }


	/** Groupings of columns that work together in certain Amazon QuickSight features. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface ColumnGroup {

		/** Geospatial column group that denotes a hierarchy. */
		GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
	}

	/** Groupings of columns that work together in certain Amazon QuickSight features. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface ColumnGroupFormProperties {
	}
	export function CreateColumnGroupFormGroup() {
		return new FormGroup<ColumnGroupFormProperties>({
		});

	}


	/** Geospatial column group that denotes a hierarchy. */
	export interface GeoSpatialColumnGroup {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		CountryCode: GeoSpatialColumnGroupCountryCode;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 16
		 */
		Columns: Array<string>;
	}

	/** Geospatial column group that denotes a hierarchy. */
	export interface GeoSpatialColumnGroupFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		CountryCode: FormControl<GeoSpatialColumnGroupCountryCode | null | undefined>,
	}
	export function CreateGeoSpatialColumnGroupFormGroup() {
		return new FormGroup<GeoSpatialColumnGroupFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			CountryCode: new FormControl<GeoSpatialColumnGroupCountryCode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GeoSpatialColumnGroupCountryCode { US = 0 }

	export enum RowLevelPermissionPolicy { GRANT_ACCESS = 0, DENY_ACCESS = 1 }

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface CreateDataSourceResponse {
		Arn?: string | null;
		DataSourceId?: string | null;
		CreationStatus?: CreateDashboardResponseCreationStatus | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface CreateDataSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,
		CreationStatus: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateCreateDataSourceResponseFormGroup() {
		return new FormGroup<CreateDataSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			CreationStatus: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Amazon Elasticsearch Service parameters. */
	export interface AmazonElasticsearchParameters {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Domain: string;
	}

	/** Amazon Elasticsearch Service parameters. */
	export interface AmazonElasticsearchParametersFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Domain: FormControl<string | null | undefined>,
	}
	export function CreateAmazonElasticsearchParametersFormGroup() {
		return new FormGroup<AmazonElasticsearchParametersFormProperties>({
			Domain: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
		});

	}


	/** Amazon Athena parameters. */
	export interface AthenaParameters {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		WorkGroup?: string | null;
	}

	/** Amazon Athena parameters. */
	export interface AthenaParametersFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		WorkGroup: FormControl<string | null | undefined>,
	}
	export function CreateAthenaParametersFormGroup() {
		return new FormGroup<AthenaParametersFormProperties>({
			WorkGroup: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Amazon Aurora parameters. */
	export interface AuroraParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: number;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: string;
	}

	/** Amazon Aurora parameters. */
	export interface AuroraParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateAuroraParametersFormGroup() {
		return new FormGroup<AuroraParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Amazon Aurora with PostgreSQL compatibility parameters. */
	export interface AuroraPostgreSqlParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: number;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: string;
	}

	/** Amazon Aurora with PostgreSQL compatibility parameters. */
	export interface AuroraPostgreSqlParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateAuroraPostgreSqlParametersFormGroup() {
		return new FormGroup<AuroraPostgreSqlParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** AWS IoT Analytics parameters. */
	export interface AwsIotAnalyticsParameters {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		DataSetName: string;
	}

	/** AWS IoT Analytics parameters. */
	export interface AwsIotAnalyticsParametersFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		DataSetName: FormControl<string | null | undefined>,
	}
	export function CreateAwsIotAnalyticsParametersFormGroup() {
		return new FormGroup<AwsIotAnalyticsParametersFormProperties>({
			DataSetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Jira parameters. */
	export interface JiraParameters {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SiteBaseUrl: string;
	}

	/** Jira parameters. */
	export interface JiraParametersFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SiteBaseUrl: FormControl<string | null | undefined>,
	}
	export function CreateJiraParametersFormGroup() {
		return new FormGroup<JiraParametersFormProperties>({
			SiteBaseUrl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** MariaDB parameters. */
	export interface MariaDbParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: number;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: string;
	}

	/** MariaDB parameters. */
	export interface MariaDbParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateMariaDbParametersFormGroup() {
		return new FormGroup<MariaDbParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** MySQL parameters. */
	export interface MySqlParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: number;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: string;
	}

	/** MySQL parameters. */
	export interface MySqlParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateMySqlParametersFormGroup() {
		return new FormGroup<MySqlParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** PostgreSQL parameters. */
	export interface PostgreSqlParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: number;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: string;
	}

	/** PostgreSQL parameters. */
	export interface PostgreSqlParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: FormControl<string | null | undefined>,
	}
	export function CreatePostgreSqlParametersFormGroup() {
		return new FormGroup<PostgreSqlParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Presto parameters. */
	export interface PrestoParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: number;

		/**
		 * Required
		 * Max length: 128
		 */
		Catalog: string;
	}

	/** Presto parameters. */
	export interface PrestoParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 */
		Catalog: FormControl<string | null | undefined>,
	}
	export function CreatePrestoParametersFormGroup() {
		return new FormGroup<PrestoParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			Catalog: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128)]),
		});

	}


	/** Amazon RDS parameters. */
	export interface RdsParameters {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: string;
	}

	/** Amazon RDS parameters. */
	export interface RdsParametersFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		InstanceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateRdsParametersFormGroup() {
		return new FormGroup<RdsParametersFormProperties>({
			InstanceId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set. */
	export interface RedshiftParameters {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Host?: string | null;

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		Port?: number | null;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: string;

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClusterId?: string | null;
	}

	/** Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set. */
	export interface RedshiftParametersFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Minimum: 0
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		ClusterId: FormControl<string | null | undefined>,
	}
	export function CreateRedshiftParametersFormGroup() {
		return new FormGroup<RedshiftParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.min(0), Validators.max(65535)]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			ClusterId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1)]),
		});

	}


	/** S3 parameters. */
	export interface S3Parameters {

		/**
		 * Amazon S3 manifest file location.
		 * Required
		 */
		ManifestFileLocation: ManifestFileLocation;
	}

	/** S3 parameters. */
	export interface S3ParametersFormProperties {
	}
	export function CreateS3ParametersFormGroup() {
		return new FormGroup<S3ParametersFormProperties>({
		});

	}


	/** Amazon S3 manifest file location. */
	export interface ManifestFileLocation {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Bucket: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: string;
	}

	/** Amazon S3 manifest file location. */
	export interface ManifestFileLocationFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Bucket: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateManifestFileLocationFormGroup() {
		return new FormGroup<ManifestFileLocationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** ServiceNow parameters. */
	export interface ServiceNowParameters {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SiteBaseUrl: string;
	}

	/** ServiceNow parameters. */
	export interface ServiceNowParametersFormProperties {

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		SiteBaseUrl: FormControl<string | null | undefined>,
	}
	export function CreateServiceNowParametersFormGroup() {
		return new FormGroup<ServiceNowParametersFormProperties>({
			SiteBaseUrl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** Snowflake parameters. */
	export interface SnowflakeParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: string;

		/**
		 * Required
		 * Max length: 128
		 */
		Warehouse: string;
	}

	/** Snowflake parameters. */
	export interface SnowflakeParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 */
		Warehouse: FormControl<string | null | undefined>,
	}
	export function CreateSnowflakeParametersFormGroup() {
		return new FormGroup<SnowflakeParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Warehouse: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128)]),
		});

	}


	/** Spark parameters. */
	export interface SparkParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: number;
	}

	/** Spark parameters. */
	export interface SparkParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,
	}
	export function CreateSparkParametersFormGroup() {
		return new FormGroup<SparkParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
		});

	}


	/** SQL Server parameters. */
	export interface SqlServerParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: number;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: string;
	}

	/** SQL Server parameters. */
	export interface SqlServerParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateSqlServerParametersFormGroup() {
		return new FormGroup<SqlServerParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Teradata parameters. */
	export interface TeradataParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: string;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: number;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: string;
	}

	/** Teradata parameters. */
	export interface TeradataParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Host: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 65535
		 */
		Port: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Database: FormControl<string | null | undefined>,
	}
	export function CreateTeradataParametersFormGroup() {
		return new FormGroup<TeradataParametersFormProperties>({
			Host: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			Port: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(65535)]),
			Database: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}


	/** Twitter parameters. */
	export interface TwitterParameters {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Query: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		MaxRows: number;
	}

	/** Twitter parameters. */
	export interface TwitterParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Query: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		MaxRows: FormControl<number | null | undefined>,
	}
	export function CreateTwitterParametersFormGroup() {
		return new FormGroup<TwitterParametersFormProperties>({
			Query: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1)]),
			MaxRows: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}


	/** The combination of user name and password that are used as credentials. */
	export interface CredentialPair {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Username: string;

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Password: string;
	}

	/** The combination of user name and password that are used as credentials. */
	export interface CredentialPairFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Username: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1024
		 * Min length: 1
		 */
		Password: FormControl<string | null | undefined>,
	}
	export function CreateCredentialPairFormGroup() {
		return new FormGroup<CredentialPairFormProperties>({
			Username: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1)]),
			Password: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1024), Validators.minLength(1)]),
		});

	}


	/** The response object for this operation. */
	export interface CreateGroupResponse {

		/** A <i>group</i> in Amazon QuickSight consists of a set of users. You can use groups to make it easier to manage access and security. Currently, an Amazon QuickSight subscription can't contain more than 500 Amazon QuickSight groups. */
		Group?: Group;
		RequestId?: string | null;
		Status?: number | null;
	}

	/** The response object for this operation. */
	export interface CreateGroupResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateCreateGroupResponseFormGroup() {
		return new FormGroup<CreateGroupResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A <i>group</i> in Amazon QuickSight consists of a set of users. You can use groups to make it easier to manage access and security. Currently, an Amazon QuickSight subscription can't contain more than 500 Amazon QuickSight groups. */
	export interface Group {
		Arn?: string | null;

		/** Min length: 1 */
		GroupName?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
		PrincipalId?: string | null;
	}

	/** A <i>group</i> in Amazon QuickSight consists of a set of users. You can use groups to make it easier to manage access and security. Currently, an Amazon QuickSight subscription can't contain more than 500 Amazon QuickSight groups. */
	export interface GroupFormProperties {
		Arn: FormControl<string | null | undefined>,

		/** Min length: 1 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		PrincipalId: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			PrincipalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PreconditionNotMetException {
	}
	export interface PreconditionNotMetExceptionFormProperties {
	}
	export function CreatePreconditionNotMetExceptionFormGroup() {
		return new FormGroup<PreconditionNotMetExceptionFormProperties>({
		});

	}

	export interface ResourceUnavailableException {
	}
	export interface ResourceUnavailableExceptionFormProperties {
	}
	export function CreateResourceUnavailableExceptionFormGroup() {
		return new FormGroup<ResourceUnavailableExceptionFormProperties>({
		});

	}

	export interface CreateGroupMembershipResponse {

		/** A member of an Amazon QuickSight group. Currently, group members must be users. Groups can't be members of another group. . */
		GroupMember?: GroupMember;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface CreateGroupMembershipResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateCreateGroupMembershipResponseFormGroup() {
		return new FormGroup<CreateGroupMembershipResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A member of an Amazon QuickSight group. Currently, group members must be users. Groups can't be members of another group. . */
	export interface GroupMember {
		Arn?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		MemberName?: string | null;
	}

	/** A member of an Amazon QuickSight group. Currently, group members must be users. Groups can't be members of another group. . */
	export interface GroupMemberFormProperties {
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		MemberName: FormControl<string | null | undefined>,
	}
	export function CreateGroupMemberFormGroup() {
		return new FormGroup<GroupMemberFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			MemberName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
		});

	}

	export interface CreateIAMPolicyAssignmentResponse {

		/** Min length: 1 */
		AssignmentName?: string | null;
		AssignmentId?: string | null;
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
		PolicyArn?: string | null;
		Identities?: IdentityMap;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface CreateIAMPolicyAssignmentResponseFormProperties {

		/** Min length: 1 */
		AssignmentName: FormControl<string | null | undefined>,
		AssignmentId: FormControl<string | null | undefined>,
		AssignmentStatus: FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>,
		PolicyArn: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateCreateIAMPolicyAssignmentResponseFormGroup() {
		return new FormGroup<CreateIAMPolicyAssignmentResponseFormProperties>({
			AssignmentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('(?=^.{2,256}$)(?!.*\s)[0-9a-zA-Z-_.:=+@]*$')]),
			AssignmentId: new FormControl<string | null | undefined>(undefined),
			AssignmentStatus: new FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreateIAMPolicyAssignmentResponseAssignmentStatus { ENABLED = 0, DRAFT = 1, DISABLED = 2 }

	export interface IdentityMap {
	}
	export interface IdentityMapFormProperties {
	}
	export function CreateIdentityMapFormGroup() {
		return new FormGroup<IdentityMapFormProperties>({
		});

	}

	export interface ConcurrentUpdatingException {
	}
	export interface ConcurrentUpdatingExceptionFormProperties {
	}
	export function CreateConcurrentUpdatingExceptionFormGroup() {
		return new FormGroup<ConcurrentUpdatingExceptionFormProperties>({
		});

	}

	export interface CreateIngestionResponse {
		Arn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IngestionId?: string | null;
		IngestionStatus?: CreateIngestionResponseIngestionStatus | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface CreateIngestionResponseFormProperties {
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IngestionId: FormControl<string | null | undefined>,
		IngestionStatus: FormControl<CreateIngestionResponseIngestionStatus | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateCreateIngestionResponseFormGroup() {
		return new FormGroup<CreateIngestionResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			IngestionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			IngestionStatus: new FormControl<CreateIngestionResponseIngestionStatus | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreateIngestionResponseIngestionStatus { INITIALIZED = 0, QUEUED = 1, RUNNING = 2, FAILED = 3, COMPLETED = 4, CANCELLED = 5 }

	export interface CreateTemplateResponse {
		Arn?: string | null;
		VersionArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId?: string | null;
		CreationStatus?: CreateDashboardResponseCreationStatus | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface CreateTemplateResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		VersionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId: FormControl<string | null | undefined>,
		CreationStatus: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTemplateResponseFormGroup() {
		return new FormGroup<CreateTemplateResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			VersionArn: new FormControl<string | null | undefined>(undefined),
			TemplateId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			CreationStatus: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The source analysis of the template. */
	export interface TemplateSourceAnalysis {

		/** Required */
		Arn: string;

		/**
		 * Required
		 * Minimum items: 1
		 */
		DataSetReferences: Array<DataSetReference>;
	}

	/** The source analysis of the template. */
	export interface TemplateSourceAnalysisFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSourceAnalysisFormGroup() {
		return new FormGroup<TemplateSourceAnalysisFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The source template of the template. */
	export interface TemplateSourceTemplate {

		/** Required */
		Arn: string;
	}

	/** The source template of the template. */
	export interface TemplateSourceTemplateFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSourceTemplateFormGroup() {
		return new FormGroup<TemplateSourceTemplateFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateTemplateAliasResponse {

		/** The template alias. */
		TemplateAlias?: TemplateAlias;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface CreateTemplateAliasResponseFormProperties {
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTemplateAliasResponseFormGroup() {
		return new FormGroup<CreateTemplateAliasResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The template alias. */
	export interface TemplateAlias {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		AliasName?: string | null;
		Arn?: string | null;

		/** Minimum: 1 */
		TemplateVersionNumber?: number | null;
	}

	/** The template alias. */
	export interface TemplateAliasFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		AliasName: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		TemplateVersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateTemplateAliasFormGroup() {
		return new FormGroup<TemplateAliasFormProperties>({
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+|(\$LATEST)|(\$PUBLISHED)')]),
			Arn: new FormControl<string | null | undefined>(undefined),
			TemplateVersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface DeleteDashboardResponse {
		Status?: number | null;
		Arn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId?: string | null;
		RequestId?: string | null;
	}
	export interface DeleteDashboardResponseFormProperties {
		Status: FormControl<number | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDashboardResponseFormGroup() {
		return new FormGroup<DeleteDashboardResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			DashboardId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteDataSetResponse {
		Arn?: string | null;
		DataSetId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DeleteDataSetResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteDataSetResponseFormGroup() {
		return new FormGroup<DeleteDataSetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteDataSourceResponse {
		Arn?: string | null;
		DataSourceId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DeleteDataSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteDataSourceResponseFormGroup() {
		return new FormGroup<DeleteDataSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupResponse {
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DeleteGroupResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteGroupResponseFormGroup() {
		return new FormGroup<DeleteGroupResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteGroupMembershipResponse {
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DeleteGroupMembershipResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteGroupMembershipResponseFormGroup() {
		return new FormGroup<DeleteGroupMembershipResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteIAMPolicyAssignmentResponse {

		/** Min length: 1 */
		AssignmentName?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DeleteIAMPolicyAssignmentResponseFormProperties {

		/** Min length: 1 */
		AssignmentName: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteIAMPolicyAssignmentResponseFormGroup() {
		return new FormGroup<DeleteIAMPolicyAssignmentResponseFormProperties>({
			AssignmentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('(?=^.{2,256}$)(?!.*\s)[0-9a-zA-Z-_.:=+@]*$')]),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteTemplateResponse {
		RequestId?: string | null;
		Arn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId?: string | null;
		Status?: number | null;
	}
	export interface DeleteTemplateResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteTemplateResponseFormGroup() {
		return new FormGroup<DeleteTemplateResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			TemplateId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteTemplateAliasResponse {
		Status?: number | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		AliasName?: string | null;
		Arn?: string | null;
		RequestId?: string | null;
	}
	export interface DeleteTemplateAliasResponseFormProperties {
		Status: FormControl<number | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		AliasName: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTemplateAliasResponseFormGroup() {
		return new FormGroup<DeleteTemplateAliasResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
			TemplateId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			AliasName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+|(\$LATEST)|(\$PUBLISHED)')]),
			Arn: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeleteUserResponse {
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DeleteUserResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteUserResponseFormGroup() {
		return new FormGroup<DeleteUserResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeleteUserByPrincipalIdResponse {
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DeleteUserByPrincipalIdResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDeleteUserByPrincipalIdResponseFormGroup() {
		return new FormGroup<DeleteUserByPrincipalIdResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeDashboardResponse {

		/** Dashboard. */
		Dashboard?: Dashboard;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface DescribeDashboardResponseFormProperties {
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDashboardResponseFormGroup() {
		return new FormGroup<DescribeDashboardResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dashboard. */
	export interface Dashboard {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId?: string | null;
		Arn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;

		/** Dashboard version. */
		Version?: DashboardVersion;
		CreatedTime?: Date | null;
		LastPublishedTime?: Date | null;
		LastUpdatedTime?: Date | null;
	}

	/** Dashboard. */
	export interface DashboardFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastPublishedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDashboardFormGroup() {
		return new FormGroup<DashboardFormProperties>({
			DashboardId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastPublishedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Dashboard version. */
	export interface DashboardVersion {
		CreatedTime?: Date | null;

		/** Minimum items: 1 */
		Errors?: Array<DashboardError>;

		/** Minimum: 1 */
		VersionNumber?: number | null;
		Status?: CreateDashboardResponseCreationStatus | null;
		Arn?: string | null;
		SourceEntityArn?: string | null;

		/** Maximum items: 100 */
		DataSetArns?: Array<string>;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/** Dashboard version. */
	export interface DashboardVersionFormProperties {
		CreatedTime: FormControl<Date | null | undefined>,

		/** Minimum: 1 */
		VersionNumber: FormControl<number | null | undefined>,
		Status: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		SourceEntityArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateDashboardVersionFormGroup() {
		return new FormGroup<DashboardVersionFormProperties>({
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Status: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			SourceEntityArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}


	/** Dashboard error. */
	export interface DashboardError {
		Type?: DashboardErrorType | null;
		Message?: string | null;
	}

	/** Dashboard error. */
	export interface DashboardErrorFormProperties {
		Type: FormControl<DashboardErrorType | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDashboardErrorFormGroup() {
		return new FormGroup<DashboardErrorFormProperties>({
			Type: new FormControl<DashboardErrorType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DashboardErrorType { ACCESS_DENIED = 0, SOURCE_NOT_FOUND = 1, DATA_SET_NOT_FOUND = 2, INTERNAL_FAILURE = 3, PARAMETER_VALUE_INCOMPATIBLE = 4, PARAMETER_TYPE_INVALID = 5, PARAMETER_NOT_FOUND = 6, COLUMN_TYPE_MISMATCH = 7, COLUMN_GEOGRAPHIC_ROLE_MISMATCH = 8, COLUMN_REPLACEMENT_MISSING = 9 }

	export interface DescribeDashboardPermissionsResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId?: string | null;
		DashboardArn?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface DescribeDashboardPermissionsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId: FormControl<string | null | undefined>,
		DashboardArn: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDashboardPermissionsResponseFormGroup() {
		return new FormGroup<DescribeDashboardPermissionsResponseFormProperties>({
			DashboardId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			DashboardArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeDataSetResponse {

		/** Dataset. */
		DataSet?: DataSet;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DescribeDataSetResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDataSetResponseFormGroup() {
		return new FormGroup<DescribeDataSetResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Dataset. */
	export interface DataSet {
		Arn?: string | null;
		DataSetId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;
		CreatedTime?: Date | null;
		LastUpdatedTime?: Date | null;
		PhysicalTableMap?: PhysicalTableMap;
		LogicalTableMap?: LogicalTableMap;
		OutputColumns?: Array<OutputColumn>;
		ImportMode?: DataSetImportMode | null;
		ConsumedSpiceCapacityInBytes?: number | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		ColumnGroups?: Array<ColumnGroup>;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
	}

	/** Dataset. */
	export interface DataSetFormProperties {
		Arn: FormControl<string | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		ImportMode: FormControl<DataSetImportMode | null | undefined>,
		ConsumedSpiceCapacityInBytes: FormControl<number | null | undefined>,
	}
	export function CreateDataSetFormGroup() {
		return new FormGroup<DataSetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			ImportMode: new FormControl<DataSetImportMode | null | undefined>(undefined),
			ConsumedSpiceCapacityInBytes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PhysicalTableMap {
	}
	export interface PhysicalTableMapFormProperties {
	}
	export function CreatePhysicalTableMapFormGroup() {
		return new FormGroup<PhysicalTableMapFormProperties>({
		});

	}

	export interface LogicalTableMap {
	}
	export interface LogicalTableMapFormProperties {
	}
	export function CreateLogicalTableMapFormGroup() {
		return new FormGroup<LogicalTableMapFormProperties>({
		});

	}


	/** Output column. */
	export interface OutputColumn {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;
		Type?: CastColumnTypeOperationNewColumnType | null;
	}

	/** Output column. */
	export interface OutputColumnFormProperties {

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<CastColumnTypeOperationNewColumnType | null | undefined>,
	}
	export function CreateOutputColumnFormGroup() {
		return new FormGroup<OutputColumnFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			Type: new FormControl<CastColumnTypeOperationNewColumnType | null | undefined>(undefined),
		});

	}

	export enum DataSetImportMode { SPICE = 0, DIRECT_QUERY = 1 }


	/** The row-level security configuration for the dataset. */
	export interface RowLevelPermissionDataSet {

		/** Required */
		Arn: string;

		/** Required */
		PermissionPolicy: RowLevelPermissionPolicy;
	}

	/** The row-level security configuration for the dataset. */
	export interface RowLevelPermissionDataSetFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/** Required */
		PermissionPolicy: FormControl<RowLevelPermissionPolicy | null | undefined>,
	}
	export function CreateRowLevelPermissionDataSetFormGroup() {
		return new FormGroup<RowLevelPermissionDataSetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			PermissionPolicy: new FormControl<RowLevelPermissionPolicy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDataSetPermissionsResponse {
		DataSetArn?: string | null;
		DataSetId?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DescribeDataSetPermissionsResponseFormProperties {
		DataSetArn: FormControl<string | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDataSetPermissionsResponseFormGroup() {
		return new FormGroup<DescribeDataSetPermissionsResponseFormProperties>({
			DataSetArn: new FormControl<string | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeDataSourceResponse {

		/** The structure of a data source. */
		DataSource?: DataSource;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DescribeDataSourceResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDataSourceResponseFormGroup() {
		return new FormGroup<DescribeDataSourceResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The structure of a data source. */
	export interface DataSource {
		Arn?: string | null;
		DataSourceId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;
		Type?: DataSourceType | null;
		Status?: CreateDashboardResponseCreationStatus | null;
		CreatedTime?: Date | null;
		LastUpdatedTime?: Date | null;

		/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
		DataSourceParameters?: DataSourceParameters;

		/** VPC connection properties. */
		VpcConnectionProperties?: VpcConnectionProperties;

		/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
		SslProperties?: SslProperties;

		/** Error information for the data source creation or update. */
		ErrorInfo?: DataSourceErrorInfo;
	}

	/** The structure of a data source. */
	export interface DataSourceFormProperties {
		Arn: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<DataSourceType | null | undefined>,
		Status: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			Type: new FormControl<DataSourceType | null | undefined>(undefined),
			Status: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum DataSourceType { ADOBE_ANALYTICS = 0, AMAZON_ELASTICSEARCH = 1, ATHENA = 2, AURORA = 3, AURORA_POSTGRESQL = 4, AWS_IOT_ANALYTICS = 5, GITHUB = 6, JIRA = 7, MARIADB = 8, MYSQL = 9, POSTGRESQL = 10, PRESTO = 11, REDSHIFT = 12, S3 = 13, SALESFORCE = 14, SERVICENOW = 15, SNOWFLAKE = 16, SPARK = 17, SQLSERVER = 18, TERADATA = 19, TWITTER = 20 }


	/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface DataSourceParameters {

		/** Amazon Elasticsearch Service parameters. */
		AmazonElasticsearchParameters?: AmazonElasticsearchParameters;

		/** Amazon Athena parameters. */
		AthenaParameters?: AthenaParameters;

		/** Amazon Aurora parameters. */
		AuroraParameters?: AuroraParameters;

		/** Amazon Aurora with PostgreSQL compatibility parameters. */
		AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;

		/** AWS IoT Analytics parameters. */
		AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters;

		/** Jira parameters. */
		JiraParameters?: JiraParameters;

		/** MariaDB parameters. */
		MariaDbParameters?: MariaDbParameters;

		/** MySQL parameters. */
		MySqlParameters?: MySqlParameters;

		/** PostgreSQL parameters. */
		PostgreSqlParameters?: PostgreSqlParameters;

		/** Presto parameters. */
		PrestoParameters?: PrestoParameters;

		/** Amazon RDS parameters. */
		RdsParameters?: RdsParameters;

		/** Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set. */
		RedshiftParameters?: RedshiftParameters;

		/** S3 parameters. */
		S3Parameters?: S3Parameters;

		/** ServiceNow parameters. */
		ServiceNowParameters?: ServiceNowParameters;

		/** Snowflake parameters. */
		SnowflakeParameters?: SnowflakeParameters;

		/** Spark parameters. */
		SparkParameters?: SparkParameters;

		/** SQL Server parameters. */
		SqlServerParameters?: SqlServerParameters;

		/** Teradata parameters. */
		TeradataParameters?: TeradataParameters;

		/** Twitter parameters. */
		TwitterParameters?: TwitterParameters;
	}

	/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface DataSourceParametersFormProperties {
	}
	export function CreateDataSourceParametersFormGroup() {
		return new FormGroup<DataSourceParametersFormProperties>({
		});

	}


	/** VPC connection properties. */
	export interface VpcConnectionProperties {

		/** Required */
		VpcConnectionArn: string;
	}

	/** VPC connection properties. */
	export interface VpcConnectionPropertiesFormProperties {

		/** Required */
		VpcConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateVpcConnectionPropertiesFormGroup() {
		return new FormGroup<VpcConnectionPropertiesFormProperties>({
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
	export interface SslProperties {
		DisableSsl?: boolean | null;
	}

	/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
	export interface SslPropertiesFormProperties {
		DisableSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateSslPropertiesFormGroup() {
		return new FormGroup<SslPropertiesFormProperties>({
			DisableSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Error information for the data source creation or update. */
	export interface DataSourceErrorInfo {
		Type?: DataSourceErrorInfoType | null;
		Message?: string | null;
	}

	/** Error information for the data source creation or update. */
	export interface DataSourceErrorInfoFormProperties {
		Type: FormControl<DataSourceErrorInfoType | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceErrorInfoFormGroup() {
		return new FormGroup<DataSourceErrorInfoFormProperties>({
			Type: new FormControl<DataSourceErrorInfoType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataSourceErrorInfoType { TIMEOUT = 0, ENGINE_VERSION_NOT_SUPPORTED = 1, UNKNOWN_HOST = 2, GENERIC_SQL_FAILURE = 3, CONFLICT = 4, UNKNOWN = 5 }

	export interface DescribeDataSourcePermissionsResponse {
		DataSourceArn?: string | null;
		DataSourceId?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DescribeDataSourcePermissionsResponseFormProperties {
		DataSourceArn: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDescribeDataSourcePermissionsResponseFormGroup() {
		return new FormGroup<DescribeDataSourcePermissionsResponseFormProperties>({
			DataSourceArn: new FormControl<string | null | undefined>(undefined),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeGroupResponse {

		/** A <i>group</i> in Amazon QuickSight consists of a set of users. You can use groups to make it easier to manage access and security. Currently, an Amazon QuickSight subscription can't contain more than 500 Amazon QuickSight groups. */
		Group?: Group;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DescribeGroupResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDescribeGroupResponseFormGroup() {
		return new FormGroup<DescribeGroupResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeIAMPolicyAssignmentResponse {

		/** An IAM policy assignment. */
		IAMPolicyAssignment?: IAMPolicyAssignment;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DescribeIAMPolicyAssignmentResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDescribeIAMPolicyAssignmentResponseFormGroup() {
		return new FormGroup<DescribeIAMPolicyAssignmentResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An IAM policy assignment. */
	export interface IAMPolicyAssignment {

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		AwsAccountId?: string | null;
		AssignmentId?: string | null;

		/** Min length: 1 */
		AssignmentName?: string | null;
		PolicyArn?: string | null;
		Identities?: IdentityMap;
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
	}

	/** An IAM policy assignment. */
	export interface IAMPolicyAssignmentFormProperties {

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		AwsAccountId: FormControl<string | null | undefined>,
		AssignmentId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		AssignmentName: FormControl<string | null | undefined>,
		PolicyArn: FormControl<string | null | undefined>,
		AssignmentStatus: FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>,
	}
	export function CreateIAMPolicyAssignmentFormGroup() {
		return new FormGroup<IAMPolicyAssignmentFormProperties>({
			AwsAccountId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(12), Validators.minLength(12), Validators.pattern('^[0-9]{12}$')]),
			AssignmentId: new FormControl<string | null | undefined>(undefined),
			AssignmentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('(?=^.{2,256}$)(?!.*\s)[0-9a-zA-Z-_.:=+@]*$')]),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			AssignmentStatus: new FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>(undefined),
		});

	}

	export interface InvalidNextTokenException {
	}
	export interface InvalidNextTokenExceptionFormProperties {
	}
	export function CreateInvalidNextTokenExceptionFormGroup() {
		return new FormGroup<InvalidNextTokenExceptionFormProperties>({
		});

	}

	export interface DescribeIngestionResponse {

		/** Information about the SPICE ingestion for a dataset. */
		Ingestion?: Ingestion;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DescribeIngestionResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDescribeIngestionResponseFormGroup() {
		return new FormGroup<DescribeIngestionResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about the SPICE ingestion for a dataset. */
	export interface Ingestion {

		/** Required */
		Arn: string;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IngestionId?: string | null;

		/** Required */
		IngestionStatus: CreateIngestionResponseIngestionStatus;

		/** Error information for the SPICE ingestion of a dataset. */
		ErrorInfo?: ErrorInfo;

		/** Information about rows for a data set SPICE ingestion. */
		RowInfo?: RowInfo;

		/** Information about a queued dataset SPICE ingestion. */
		QueueInfo?: QueueInfo;

		/** Required */
		CreatedTime: Date;
		IngestionTimeInSeconds?: number | null;
		IngestionSizeInBytes?: number | null;
		RequestSource?: IngestionRequestSource | null;
		RequestType?: IngestionRequestType | null;
	}

	/** Information about the SPICE ingestion for a dataset. */
	export interface IngestionFormProperties {

		/** Required */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		IngestionId: FormControl<string | null | undefined>,

		/** Required */
		IngestionStatus: FormControl<CreateIngestionResponseIngestionStatus | null | undefined>,

		/** Required */
		CreatedTime: FormControl<Date | null | undefined>,
		IngestionTimeInSeconds: FormControl<number | null | undefined>,
		IngestionSizeInBytes: FormControl<number | null | undefined>,
		RequestSource: FormControl<IngestionRequestSource | null | undefined>,
		RequestType: FormControl<IngestionRequestType | null | undefined>,
	}
	export function CreateIngestionFormGroup() {
		return new FormGroup<IngestionFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			IngestionId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9-_]+$')]),
			IngestionStatus: new FormControl<CreateIngestionResponseIngestionStatus | null | undefined>(undefined, [Validators.required]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			IngestionTimeInSeconds: new FormControl<number | null | undefined>(undefined),
			IngestionSizeInBytes: new FormControl<number | null | undefined>(undefined),
			RequestSource: new FormControl<IngestionRequestSource | null | undefined>(undefined),
			RequestType: new FormControl<IngestionRequestType | null | undefined>(undefined),
		});

	}


	/** Error information for the SPICE ingestion of a dataset. */
	export interface ErrorInfo {
		Type?: ErrorInfoType | null;
		Message?: string | null;
	}

	/** Error information for the SPICE ingestion of a dataset. */
	export interface ErrorInfoFormProperties {
		Type: FormControl<ErrorInfoType | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateErrorInfoFormGroup() {
		return new FormGroup<ErrorInfoFormProperties>({
			Type: new FormControl<ErrorInfoType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorInfoType { FAILURE_TO_ASSUME_ROLE = 0, INGESTION_SUPERSEDED = 1, INGESTION_CANCELED = 2, DATA_SET_DELETED = 3, DATA_SET_NOT_SPICE = 4, S3_UPLOADED_FILE_DELETED = 5, S3_MANIFEST_ERROR = 6, DATA_TOLERANCE_EXCEPTION = 7, SPICE_TABLE_NOT_FOUND = 8, DATA_SET_SIZE_LIMIT_EXCEEDED = 9, ROW_SIZE_LIMIT_EXCEEDED = 10, ACCOUNT_CAPACITY_LIMIT_EXCEEDED = 11, CUSTOMER_ERROR = 12, DATA_SOURCE_NOT_FOUND = 13, IAM_ROLE_NOT_AVAILABLE = 14, CONNECTION_FAILURE = 15, SQL_TABLE_NOT_FOUND = 16, PERMISSION_DENIED = 17, SSL_CERTIFICATE_VALIDATION_FAILURE = 18, OAUTH_TOKEN_FAILURE = 19, SOURCE_API_LIMIT_EXCEEDED_FAILURE = 20, PASSWORD_AUTHENTICATION_FAILURE = 21, SQL_SCHEMA_MISMATCH_ERROR = 22, INVALID_DATE_FORMAT = 23, INVALID_DATAPREP_SYNTAX = 24, SOURCE_RESOURCE_LIMIT_EXCEEDED = 25, SQL_INVALID_PARAMETER_VALUE = 26, QUERY_TIMEOUT = 27, SQL_NUMERIC_OVERFLOW = 28, UNRESOLVABLE_HOST = 29, UNROUTABLE_HOST = 30, SQL_EXCEPTION = 31, S3_FILE_INACCESSIBLE = 32, IOT_FILE_NOT_FOUND = 33, IOT_DATA_SET_FILE_EMPTY = 34, INVALID_DATA_SOURCE_CONFIG = 35, DATA_SOURCE_AUTH_FAILED = 36, DATA_SOURCE_CONNECTION_FAILED = 37, FAILURE_TO_PROCESS_JSON_FILE = 38, INTERNAL_SERVICE_ERROR = 39 }


	/** Information about rows for a data set SPICE ingestion. */
	export interface RowInfo {
		RowsIngested?: number | null;
		RowsDropped?: number | null;
	}

	/** Information about rows for a data set SPICE ingestion. */
	export interface RowInfoFormProperties {
		RowsIngested: FormControl<number | null | undefined>,
		RowsDropped: FormControl<number | null | undefined>,
	}
	export function CreateRowInfoFormGroup() {
		return new FormGroup<RowInfoFormProperties>({
			RowsIngested: new FormControl<number | null | undefined>(undefined),
			RowsDropped: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information about a queued dataset SPICE ingestion. */
	export interface QueueInfo {

		/** Required */
		WaitingOnIngestion: string;

		/** Required */
		QueuedIngestion: string;
	}

	/** Information about a queued dataset SPICE ingestion. */
	export interface QueueInfoFormProperties {

		/** Required */
		WaitingOnIngestion: FormControl<string | null | undefined>,

		/** Required */
		QueuedIngestion: FormControl<string | null | undefined>,
	}
	export function CreateQueueInfoFormGroup() {
		return new FormGroup<QueueInfoFormProperties>({
			WaitingOnIngestion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			QueuedIngestion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum IngestionRequestSource { MANUAL = 0, SCHEDULED = 1 }

	export enum IngestionRequestType { INITIAL_INGESTION = 0, EDIT = 1, INCREMENTAL_REFRESH = 2, FULL_REFRESH = 3 }

	export interface DescribeTemplateResponse {

		/** <p>A template object. A <i>template</i> is an entity in QuickSight that encapsulates the metadata required to create an analysis and that you can use to create a dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.</p> <p>You can share templates across AWS accounts by allowing users in other AWS accounts to create a template or a dashboard from an existing template.</p> */
		Template?: Template;
		Status?: number | null;
	}
	export interface DescribeTemplateResponseFormProperties {
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTemplateResponseFormGroup() {
		return new FormGroup<DescribeTemplateResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** <p>A template object. A <i>template</i> is an entity in QuickSight that encapsulates the metadata required to create an analysis and that you can use to create a dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.</p> <p>You can share templates across AWS accounts by allowing users in other AWS accounts to create a template or a dashboard from an existing template.</p> */
	export interface Template {
		Arn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;

		/** A version of a template. */
		Version?: TemplateVersion;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId?: string | null;
		LastUpdatedTime?: Date | null;
		CreatedTime?: Date | null;
	}

	/** <p>A template object. A <i>template</i> is an entity in QuickSight that encapsulates the metadata required to create an analysis and that you can use to create a dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.</p> <p>You can share templates across AWS accounts by allowing users in other AWS accounts to create a template or a dashboard from an existing template.</p> */
	export interface TemplateFormProperties {
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId: FormControl<string | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateTemplateFormGroup() {
		return new FormGroup<TemplateFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			TemplateId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A version of a template. */
	export interface TemplateVersion {
		CreatedTime?: Date | null;

		/** Minimum items: 1 */
		Errors?: Array<TemplateError>;

		/** Minimum: 1 */
		VersionNumber?: number | null;
		Status?: CreateDashboardResponseCreationStatus | null;

		/** Maximum items: 30 */
		DataSetConfigurations?: Array<DataSetConfiguration>;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
		SourceEntityArn?: string | null;
	}

	/** A version of a template. */
	export interface TemplateVersionFormProperties {
		CreatedTime: FormControl<Date | null | undefined>,

		/** Minimum: 1 */
		VersionNumber: FormControl<number | null | undefined>,
		Status: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
		SourceEntityArn: FormControl<string | null | undefined>,
	}
	export function CreateTemplateVersionFormGroup() {
		return new FormGroup<TemplateVersionFormProperties>({
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Status: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			SourceEntityArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of errors that occurred when the template version creation failed. */
	export interface TemplateError {
		Type?: TemplateErrorType | null;
		Message?: string | null;
	}

	/** List of errors that occurred when the template version creation failed. */
	export interface TemplateErrorFormProperties {
		Type: FormControl<TemplateErrorType | null | undefined>,
		Message: FormControl<string | null | undefined>,
	}
	export function CreateTemplateErrorFormGroup() {
		return new FormGroup<TemplateErrorFormProperties>({
			Type: new FormControl<TemplateErrorType | null | undefined>(undefined),
			Message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TemplateErrorType { SOURCE_NOT_FOUND = 0, DATA_SET_NOT_FOUND = 1, INTERNAL_FAILURE = 2 }


	/** Dataset configuration. */
	export interface DataSetConfiguration {
		Placeholder?: string | null;

		/** Dataset schema. */
		DataSetSchema?: DataSetSchema;

		/** Maximum items: 500 */
		ColumnGroupSchemaList?: Array<ColumnGroupSchema>;
	}

	/** Dataset configuration. */
	export interface DataSetConfigurationFormProperties {
		Placeholder: FormControl<string | null | undefined>,
	}
	export function CreateDataSetConfigurationFormGroup() {
		return new FormGroup<DataSetConfigurationFormProperties>({
			Placeholder: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dataset schema. */
	export interface DataSetSchema {

		/** Maximum items: 500 */
		ColumnSchemaList?: Array<ColumnSchema>;
	}

	/** Dataset schema. */
	export interface DataSetSchemaFormProperties {
	}
	export function CreateDataSetSchemaFormGroup() {
		return new FormGroup<DataSetSchemaFormProperties>({
		});

	}


	/** The column schema. */
	export interface ColumnSchema {
		Name?: string | null;
		DataType?: string | null;
		GeographicRole?: string | null;
	}

	/** The column schema. */
	export interface ColumnSchemaFormProperties {
		Name: FormControl<string | null | undefined>,
		DataType: FormControl<string | null | undefined>,
		GeographicRole: FormControl<string | null | undefined>,
	}
	export function CreateColumnSchemaFormGroup() {
		return new FormGroup<ColumnSchemaFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			DataType: new FormControl<string | null | undefined>(undefined),
			GeographicRole: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The column group schema. */
	export interface ColumnGroupSchema {
		Name?: string | null;

		/** Maximum items: 500 */
		ColumnGroupColumnSchemaList?: Array<ColumnGroupColumnSchema>;
	}

	/** The column group schema. */
	export interface ColumnGroupSchemaFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateColumnGroupSchemaFormGroup() {
		return new FormGroup<ColumnGroupSchemaFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A structure describing the name, data type, and geographic role of the columns. */
	export interface ColumnGroupColumnSchema {
		Name?: string | null;
	}

	/** A structure describing the name, data type, and geographic role of the columns. */
	export interface ColumnGroupColumnSchemaFormProperties {
		Name: FormControl<string | null | undefined>,
	}
	export function CreateColumnGroupColumnSchemaFormGroup() {
		return new FormGroup<ColumnGroupColumnSchemaFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTemplateAliasResponse {

		/** The template alias. */
		TemplateAlias?: TemplateAlias;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface DescribeTemplateAliasResponseFormProperties {
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateDescribeTemplateAliasResponseFormGroup() {
		return new FormGroup<DescribeTemplateAliasResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeTemplatePermissionsResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId?: string | null;
		TemplateArn?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DescribeTemplatePermissionsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId: FormControl<string | null | undefined>,
		TemplateArn: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDescribeTemplatePermissionsResponseFormGroup() {
		return new FormGroup<DescribeTemplatePermissionsResponseFormProperties>({
			TemplateId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			TemplateArn: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeUserResponse {

		/** A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription can't contain more than 20 million users. */
		User?: User;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface DescribeUserResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateDescribeUserResponseFormGroup() {
		return new FormGroup<DescribeUserResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription can't contain more than 20 million users. */
	export interface User {
		Arn?: string | null;

		/** Min length: 1 */
		UserName?: string | null;
		Email?: string | null;
		Role?: UserRole | null;
		IdentityType?: UserIdentityType | null;
		Active?: boolean | null;
		PrincipalId?: string | null;
	}

	/** A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription can't contain more than 20 million users. */
	export interface UserFormProperties {
		Arn: FormControl<string | null | undefined>,

		/** Min length: 1 */
		UserName: FormControl<string | null | undefined>,
		Email: FormControl<string | null | undefined>,
		Role: FormControl<UserRole | null | undefined>,
		IdentityType: FormControl<UserIdentityType | null | undefined>,
		Active: FormControl<boolean | null | undefined>,
		PrincipalId: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			Email: new FormControl<string | null | undefined>(undefined),
			Role: new FormControl<UserRole | null | undefined>(undefined),
			IdentityType: new FormControl<UserIdentityType | null | undefined>(undefined),
			Active: new FormControl<boolean | null | undefined>(undefined),
			PrincipalId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UserRole { ADMIN = 0, AUTHOR = 1, READER = 2, RESTRICTED_AUTHOR = 3, RESTRICTED_READER = 4 }

	export enum UserIdentityType { IAM = 0, QUICKSIGHT = 1 }

	export interface GetDashboardEmbedUrlResponse {
		EmbedUrl?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface GetDashboardEmbedUrlResponseFormProperties {
		EmbedUrl: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateGetDashboardEmbedUrlResponseFormGroup() {
		return new FormGroup<GetDashboardEmbedUrlResponseFormProperties>({
			EmbedUrl: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainNotWhitelistedException {
	}
	export interface DomainNotWhitelistedExceptionFormProperties {
	}
	export function CreateDomainNotWhitelistedExceptionFormGroup() {
		return new FormGroup<DomainNotWhitelistedExceptionFormProperties>({
		});

	}

	export interface QuickSightUserNotFoundException {
	}
	export interface QuickSightUserNotFoundExceptionFormProperties {
	}
	export function CreateQuickSightUserNotFoundExceptionFormGroup() {
		return new FormGroup<QuickSightUserNotFoundExceptionFormProperties>({
		});

	}

	export interface IdentityTypeNotSupportedException {
	}
	export interface IdentityTypeNotSupportedExceptionFormProperties {
	}
	export function CreateIdentityTypeNotSupportedExceptionFormGroup() {
		return new FormGroup<IdentityTypeNotSupportedExceptionFormProperties>({
		});

	}

	export interface SessionLifetimeInMinutesInvalidException {
	}
	export interface SessionLifetimeInMinutesInvalidExceptionFormProperties {
	}
	export function CreateSessionLifetimeInMinutesInvalidExceptionFormGroup() {
		return new FormGroup<SessionLifetimeInMinutesInvalidExceptionFormProperties>({
		});

	}

	export interface ListDashboardVersionsResponse {

		/** Maximum items: 100 */
		DashboardVersionSummaryList?: Array<DashboardVersionSummary>;
		NextToken?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface ListDashboardVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateListDashboardVersionsResponseFormGroup() {
		return new FormGroup<ListDashboardVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dashboard version summary. */
	export interface DashboardVersionSummary {
		Arn?: string | null;
		CreatedTime?: Date | null;

		/** Minimum: 1 */
		VersionNumber?: number | null;
		Status?: CreateDashboardResponseCreationStatus | null;
		SourceEntityArn?: string | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/** Dashboard version summary. */
	export interface DashboardVersionSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,

		/** Minimum: 1 */
		VersionNumber: FormControl<number | null | undefined>,
		Status: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,
		SourceEntityArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateDashboardVersionSummaryFormGroup() {
		return new FormGroup<DashboardVersionSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			Status: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			SourceEntityArn: new FormControl<string | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface ListDashboardsResponse {

		/** Maximum items: 100 */
		DashboardSummaryList?: Array<DashboardSummary>;
		NextToken?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface ListDashboardsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateListDashboardsResponseFormGroup() {
		return new FormGroup<ListDashboardsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Dashboard summary. */
	export interface DashboardSummary {
		Arn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;
		CreatedTime?: Date | null;
		LastUpdatedTime?: Date | null;

		/** Minimum: 1 */
		PublishedVersionNumber?: number | null;
		LastPublishedTime?: Date | null;
	}

	/** Dashboard summary. */
	export interface DashboardSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,

		/** Minimum: 1 */
		PublishedVersionNumber: FormControl<number | null | undefined>,
		LastPublishedTime: FormControl<Date | null | undefined>,
	}
	export function CreateDashboardSummaryFormGroup() {
		return new FormGroup<DashboardSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DashboardId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			PublishedVersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			LastPublishedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListDataSetsResponse {
		DataSetSummaries?: Array<DataSetSummary>;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface ListDataSetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateListDataSetsResponseFormGroup() {
		return new FormGroup<ListDataSetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Dataset summary. */
	export interface DataSetSummary {
		Arn?: string | null;
		DataSetId?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name?: string | null;
		CreatedTime?: Date | null;
		LastUpdatedTime?: Date | null;
		ImportMode?: DataSetImportMode | null;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
	}

	/** Dataset summary. */
	export interface DataSetSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
		ImportMode: FormControl<DataSetImportMode | null | undefined>,
	}
	export function CreateDataSetSummaryFormGroup() {
		return new FormGroup<DataSetSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
			ImportMode: new FormControl<DataSetImportMode | null | undefined>(undefined),
		});

	}

	export interface ListDataSourcesResponse {
		DataSources?: Array<DataSource>;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface ListDataSourcesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateListDataSourcesResponseFormGroup() {
		return new FormGroup<ListDataSourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupMembershipsResponse {
		GroupMemberList?: Array<GroupMember>;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface ListGroupMembershipsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateListGroupMembershipsResponseFormGroup() {
		return new FormGroup<ListGroupMembershipsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListGroupsResponse {
		GroupList?: Array<Group>;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface ListGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateListGroupsResponseFormGroup() {
		return new FormGroup<ListGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListIAMPolicyAssignmentsResponse {
		IAMPolicyAssignments?: Array<IAMPolicyAssignmentSummary>;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface ListIAMPolicyAssignmentsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateListIAMPolicyAssignmentsResponseFormGroup() {
		return new FormGroup<ListIAMPolicyAssignmentsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** IAM policy assignment summary. */
	export interface IAMPolicyAssignmentSummary {

		/** Min length: 1 */
		AssignmentName?: string | null;
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
	}

	/** IAM policy assignment summary. */
	export interface IAMPolicyAssignmentSummaryFormProperties {

		/** Min length: 1 */
		AssignmentName: FormControl<string | null | undefined>,
		AssignmentStatus: FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>,
	}
	export function CreateIAMPolicyAssignmentSummaryFormGroup() {
		return new FormGroup<IAMPolicyAssignmentSummaryFormProperties>({
			AssignmentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('(?=^.{2,256}$)(?!.*\s)[0-9a-zA-Z-_.:=+@]*$')]),
			AssignmentStatus: new FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>(undefined),
		});

	}

	export interface ListIAMPolicyAssignmentsForUserResponse {
		ActiveAssignments?: Array<ActiveIAMPolicyAssignment>;
		RequestId?: string | null;
		NextToken?: string | null;
		Status?: number | null;
	}
	export interface ListIAMPolicyAssignmentsForUserResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateListIAMPolicyAssignmentsForUserResponseFormGroup() {
		return new FormGroup<ListIAMPolicyAssignmentsForUserResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The active AWS Identity and Access Management (IAM) policy assignment. */
	export interface ActiveIAMPolicyAssignment {

		/** Min length: 1 */
		AssignmentName?: string | null;
		PolicyArn?: string | null;
	}

	/** The active AWS Identity and Access Management (IAM) policy assignment. */
	export interface ActiveIAMPolicyAssignmentFormProperties {

		/** Min length: 1 */
		AssignmentName: FormControl<string | null | undefined>,
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateActiveIAMPolicyAssignmentFormGroup() {
		return new FormGroup<ActiveIAMPolicyAssignmentFormProperties>({
			AssignmentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('(?=^.{2,256}$)(?!.*\s)[0-9a-zA-Z-_.:=+@]*$')]),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListIngestionsResponse {
		Ingestions?: Array<Ingestion>;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface ListIngestionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateListIngestionsResponseFormGroup() {
		return new FormGroup<ListIngestionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTagsForResourceResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface ListTagsForResourceResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListTemplateAliasesResponse {

		/** Maximum items: 100 */
		TemplateAliasList?: Array<TemplateAlias>;
		Status?: number | null;
		RequestId?: string | null;
		NextToken?: string | null;
	}
	export interface ListTemplateAliasesResponseFormProperties {
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTemplateAliasesResponseFormGroup() {
		return new FormGroup<ListTemplateAliasesResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTemplateVersionsResponse {

		/** Maximum items: 100 */
		TemplateVersionSummaryList?: Array<TemplateVersionSummary>;
		NextToken?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface ListTemplateVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateListTemplateVersionsResponseFormGroup() {
		return new FormGroup<ListTemplateVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The template version. */
	export interface TemplateVersionSummary {
		Arn?: string | null;

		/** Minimum: 1 */
		VersionNumber?: number | null;
		CreatedTime?: Date | null;
		Status?: CreateDashboardResponseCreationStatus | null;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/** The template version. */
	export interface TemplateVersionSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		VersionNumber: FormControl<number | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		Status: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateTemplateVersionSummaryFormGroup() {
		return new FormGroup<TemplateVersionSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			VersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface ListTemplatesResponse {

		/** Maximum items: 100 */
		TemplateSummaryList?: Array<TemplateSummary>;
		NextToken?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface ListTemplatesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateListTemplatesResponseFormGroup() {
		return new FormGroup<ListTemplatesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The template summary. */
	export interface TemplateSummary {
		Arn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;

		/** Minimum: 1 */
		LatestVersionNumber?: number | null;
		CreatedTime?: Date | null;
		LastUpdatedTime?: Date | null;
	}

	/** The template summary. */
	export interface TemplateSummaryFormProperties {
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		LatestVersionNumber: FormControl<number | null | undefined>,
		CreatedTime: FormControl<Date | null | undefined>,
		LastUpdatedTime: FormControl<Date | null | undefined>,
	}
	export function CreateTemplateSummaryFormGroup() {
		return new FormGroup<TemplateSummaryFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			TemplateId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			LatestVersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			CreatedTime: new FormControl<Date | null | undefined>(undefined),
			LastUpdatedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListUserGroupsResponse {
		GroupList?: Array<Group>;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface ListUserGroupsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateListUserGroupsResponseFormGroup() {
		return new FormGroup<ListUserGroupsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListUsersResponse {
		UserList?: Array<User>;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface ListUsersResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateListUsersResponseFormGroup() {
		return new FormGroup<ListUsersResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisterUserResponse {

		/** A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription can't contain more than 20 million users. */
		User?: User;
		UserInvitationUrl?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface RegisterUserResponseFormProperties {
		UserInvitationUrl: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateRegisterUserResponseFormGroup() {
		return new FormGroup<RegisterUserResponseFormProperties>({
			UserInvitationUrl: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SearchDashboardsResponse {

		/** Maximum items: 100 */
		DashboardSummaryList?: Array<DashboardSummary>;
		NextToken?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface SearchDashboardsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateSearchDashboardsResponseFormGroup() {
		return new FormGroup<SearchDashboardsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter that you apply when searching for dashboards.  */
	export interface DashboardSearchFilter {

		/** Required */
		Operator: DashboardSearchFilterOperator;
		Name?: DashboardSearchFilterName | null;
		Value?: string | null;
	}

	/** A filter that you apply when searching for dashboards.  */
	export interface DashboardSearchFilterFormProperties {

		/** Required */
		Operator: FormControl<DashboardSearchFilterOperator | null | undefined>,
		Name: FormControl<DashboardSearchFilterName | null | undefined>,
		Value: FormControl<string | null | undefined>,
	}
	export function CreateDashboardSearchFilterFormGroup() {
		return new FormGroup<DashboardSearchFilterFormProperties>({
			Operator: new FormControl<DashboardSearchFilterOperator | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<DashboardSearchFilterName | null | undefined>(undefined),
			Value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DashboardSearchFilterOperator { StringEquals = 0 }

	export enum DashboardSearchFilterName { QUICKSIGHT_USER = 0 }

	export interface TagResourceResponse {
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface TagResourceResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateTagResourceResponseFormGroup() {
		return new FormGroup<TagResourceResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UntagResourceResponse {
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface UntagResourceResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateUntagResourceResponseFormGroup() {
		return new FormGroup<UntagResourceResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDashboardResponse {
		Arn?: string | null;
		VersionArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId?: string | null;
		CreationStatus?: CreateDashboardResponseCreationStatus | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface UpdateDashboardResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		VersionArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId: FormControl<string | null | undefined>,
		CreationStatus: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDashboardResponseFormGroup() {
		return new FormGroup<UpdateDashboardResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			VersionArn: new FormControl<string | null | undefined>(undefined),
			DashboardId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			CreationStatus: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDashboardPermissionsResponse {
		DashboardArn?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface UpdateDashboardPermissionsResponseFormProperties {
		DashboardArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDashboardPermissionsResponseFormGroup() {
		return new FormGroup<UpdateDashboardPermissionsResponseFormProperties>({
			DashboardArn: new FormControl<string | null | undefined>(undefined),
			DashboardId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDashboardPublishedVersionResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId?: string | null;
		DashboardArn?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface UpdateDashboardPublishedVersionResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		DashboardId: FormControl<string | null | undefined>,
		DashboardArn: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDashboardPublishedVersionResponseFormGroup() {
		return new FormGroup<UpdateDashboardPublishedVersionResponseFormProperties>({
			DashboardId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			DashboardArn: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSetResponse {
		Arn?: string | null;
		DataSetId?: string | null;
		IngestionArn?: string | null;
		IngestionId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface UpdateDataSetResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		IngestionArn: FormControl<string | null | undefined>,
		IngestionId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDataSetResponseFormGroup() {
		return new FormGroup<UpdateDataSetResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			IngestionArn: new FormControl<string | null | undefined>(undefined),
			IngestionId: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSetPermissionsResponse {
		DataSetArn?: string | null;
		DataSetId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface UpdateDataSetPermissionsResponseFormProperties {
		DataSetArn: FormControl<string | null | undefined>,
		DataSetId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDataSetPermissionsResponseFormGroup() {
		return new FormGroup<UpdateDataSetPermissionsResponseFormProperties>({
			DataSetArn: new FormControl<string | null | undefined>(undefined),
			DataSetId: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourceResponse {
		Arn?: string | null;
		DataSourceId?: string | null;
		UpdateStatus?: CreateDashboardResponseCreationStatus | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface UpdateDataSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,
		UpdateStatus: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDataSourceResponseFormGroup() {
		return new FormGroup<UpdateDataSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			UpdateStatus: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourcePermissionsResponse {
		DataSourceArn?: string | null;
		DataSourceId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface UpdateDataSourcePermissionsResponseFormProperties {
		DataSourceArn: FormControl<string | null | undefined>,
		DataSourceId: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateUpdateDataSourcePermissionsResponseFormGroup() {
		return new FormGroup<UpdateDataSourcePermissionsResponseFormProperties>({
			DataSourceArn: new FormControl<string | null | undefined>(undefined),
			DataSourceId: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupResponse {

		/** A <i>group</i> in Amazon QuickSight consists of a set of users. You can use groups to make it easier to manage access and security. Currently, an Amazon QuickSight subscription can't contain more than 500 Amazon QuickSight groups. */
		Group?: Group;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface UpdateGroupResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateUpdateGroupResponseFormGroup() {
		return new FormGroup<UpdateGroupResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateIAMPolicyAssignmentResponse {

		/** Min length: 1 */
		AssignmentName?: string | null;
		AssignmentId?: string | null;
		PolicyArn?: string | null;
		Identities?: IdentityMap;
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface UpdateIAMPolicyAssignmentResponseFormProperties {

		/** Min length: 1 */
		AssignmentName: FormControl<string | null | undefined>,
		AssignmentId: FormControl<string | null | undefined>,
		PolicyArn: FormControl<string | null | undefined>,
		AssignmentStatus: FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateUpdateIAMPolicyAssignmentResponseFormGroup() {
		return new FormGroup<UpdateIAMPolicyAssignmentResponseFormProperties>({
			AssignmentName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('(?=^.{2,256}$)(?!.*\s)[0-9a-zA-Z-_.:=+@]*$')]),
			AssignmentId: new FormControl<string | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			AssignmentStatus: new FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateTemplateResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId?: string | null;
		Arn?: string | null;
		VersionArn?: string | null;
		CreationStatus?: CreateDashboardResponseCreationStatus | null;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface UpdateTemplateResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		VersionArn: FormControl<string | null | undefined>,
		CreationStatus: FormControl<CreateDashboardResponseCreationStatus | null | undefined>,
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTemplateResponseFormGroup() {
		return new FormGroup<UpdateTemplateResponseFormProperties>({
			TemplateId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			Arn: new FormControl<string | null | undefined>(undefined),
			VersionArn: new FormControl<string | null | undefined>(undefined),
			CreationStatus: new FormControl<CreateDashboardResponseCreationStatus | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTemplateAliasResponse {

		/** The template alias. */
		TemplateAlias?: TemplateAlias;
		Status?: number | null;
		RequestId?: string | null;
	}
	export interface UpdateTemplateAliasResponseFormProperties {
		Status: FormControl<number | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTemplateAliasResponseFormGroup() {
		return new FormGroup<UpdateTemplateAliasResponseFormProperties>({
			Status: new FormControl<number | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTemplatePermissionsResponse {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId?: string | null;
		TemplateArn?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface UpdateTemplatePermissionsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		TemplateId: FormControl<string | null | undefined>,
		TemplateArn: FormControl<string | null | undefined>,
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateUpdateTemplatePermissionsResponseFormGroup() {
		return new FormGroup<UpdateTemplatePermissionsResponseFormProperties>({
			TemplateId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\w\-]+')]),
			TemplateArn: new FormControl<string | null | undefined>(undefined),
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateUserResponse {

		/** A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription can't contain more than 20 million users. */
		User?: User;
		RequestId?: string | null;
		Status?: number | null;
	}
	export interface UpdateUserResponseFormProperties {
		RequestId: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
	}
	export function CreateUpdateUserResponseFormGroup() {
		return new FormGroup<UpdateUserResponseFormProperties>({
			RequestId: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DashboardBehavior { ENABLED = 0, DISABLED = 1 }

	export enum AssignmentStatus { ENABLED = 0, DRAFT = 1, DISABLED = 2 }

	export interface CancelIngestionRequest {
	}
	export interface CancelIngestionRequestFormProperties {
	}
	export function CreateCancelIngestionRequestFormGroup() {
		return new FormGroup<CancelIngestionRequestFormProperties>({
		});

	}

	export enum ColumnDataType { STRING = 0, INTEGER = 1, DECIMAL = 2, DATETIME = 3 }

	export enum GeoSpatialDataRole { COUNTRY = 0, STATE = 1, COUNTY = 2, CITY = 3, POSTCODE = 4, LONGITUDE = 5, LATITUDE = 6 }


	/** Parameters. */
	export interface Parameters {

		/** Maximum items: 100 */
		StringParameters?: Array<StringParameter>;

		/** Maximum items: 100 */
		IntegerParameters?: Array<IntegerParameter>;

		/** Maximum items: 100 */
		DecimalParameters?: Array<DecimalParameter>;

		/** Maximum items: 100 */
		DateTimeParameters?: Array<DateTimeParameter>;
	}

	/** Parameters. */
	export interface ParametersFormProperties {
	}
	export function CreateParametersFormGroup() {
		return new FormGroup<ParametersFormProperties>({
		});

	}


	/** Dashboard source entity. */
	export interface DashboardSourceEntity {

		/** Dashboard source template. */
		SourceTemplate?: DashboardSourceTemplate;
	}

	/** Dashboard source entity. */
	export interface DashboardSourceEntityFormProperties {
	}
	export function CreateDashboardSourceEntityFormGroup() {
		return new FormGroup<DashboardSourceEntityFormProperties>({
		});

	}


	/** Dashboard publish options. */
	export interface DashboardPublishOptions {

		/** Ad hoc (one-time) filtering option. */
		AdHocFilteringOption?: AdHocFilteringOption;

		/** Export to .csv option. */
		ExportToCSVOption?: ExportToCSVOption;

		/** Sheet controls option. */
		SheetControlsOption?: SheetControlsOption;
	}

	/** Dashboard publish options. */
	export interface DashboardPublishOptionsFormProperties {
	}
	export function CreateDashboardPublishOptionsFormGroup() {
		return new FormGroup<DashboardPublishOptionsFormProperties>({
		});

	}

	export interface CreateDashboardRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: string;

		/** Parameters. */
		Parameters?: Parameters;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;

		/**
		 * Dashboard source entity.
		 * Required
		 */
		SourceEntity: DashboardSourceEntity;

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;

		/** Dashboard publish options. */
		DashboardPublishOptions?: DashboardPublishOptions;
	}
	export interface CreateDashboardRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateDashboardRequestFormGroup() {
		return new FormGroup<CreateDashboardRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			VersionDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export enum ResourceStatus { CREATION_IN_PROGRESS = 0, CREATION_SUCCESSFUL = 1, CREATION_FAILED = 2, UPDATE_IN_PROGRESS = 3, UPDATE_SUCCESSFUL = 4, UPDATE_FAILED = 5 }

	export interface CreateDataSetRequest {

		/** Required */
		DataSetId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		PhysicalTableMap: PhysicalTableMap;
		LogicalTableMap?: LogicalTableMap;

		/** Required */
		ImportMode: DataSetImportMode;

		/**
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		ColumnGroups?: Array<ColumnGroup>;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: RowLevelPermissionDataSet;

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateDataSetRequestFormProperties {

		/** Required */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ImportMode: FormControl<DataSetImportMode | null | undefined>,
	}
	export function CreateCreateDataSetRequestFormGroup() {
		return new FormGroup<CreateDataSetRequestFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			ImportMode: new FormControl<DataSetImportMode | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Data source credentials. */
	export interface DataSourceCredentials {

		/** The combination of user name and password that are used as credentials. */
		CredentialPair?: CredentialPair;
	}

	/** Data source credentials. */
	export interface DataSourceCredentialsFormProperties {
	}
	export function CreateDataSourceCredentialsFormGroup() {
		return new FormGroup<DataSourceCredentialsFormProperties>({
		});

	}

	export interface CreateDataSourceRequest {

		/** Required */
		DataSourceId: string;

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		Type: DataSourceType;

		/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
		DataSourceParameters?: DataSourceParameters;

		/** Data source credentials. */
		Credentials?: DataSourceCredentials;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;

		/** VPC connection properties. */
		VpcConnectionProperties?: VpcConnectionProperties;

		/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
		SslProperties?: SslProperties;

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateDataSourceRequestFormProperties {

		/** Required */
		DataSourceId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<DataSourceType | null | undefined>,
	}
	export function CreateCreateDataSourceRequestFormGroup() {
		return new FormGroup<CreateDataSourceRequestFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Type: new FormControl<DataSourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateGroupMembershipRequest {
	}
	export interface CreateGroupMembershipRequestFormProperties {
	}
	export function CreateCreateGroupMembershipRequestFormGroup() {
		return new FormGroup<CreateGroupMembershipRequestFormProperties>({
		});

	}


	/** The request object for this operation.  */
	export interface CreateGroupRequest {

		/**
		 * Required
		 * Min length: 1
		 */
		GroupName: string;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
	}

	/** The request object for this operation.  */
	export interface CreateGroupRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupRequestFormGroup() {
		return new FormGroup<CreateGroupRequestFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface CreateIAMPolicyAssignmentRequest {

		/**
		 * Required
		 * Min length: 1
		 */
		AssignmentName: string;

		/** Required */
		AssignmentStatus: CreateIAMPolicyAssignmentResponseAssignmentStatus;
		PolicyArn?: string | null;
		Identities?: IdentityMap;
	}
	export interface CreateIAMPolicyAssignmentRequestFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		AssignmentName: FormControl<string | null | undefined>,

		/** Required */
		AssignmentStatus: FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>,
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateIAMPolicyAssignmentRequestFormGroup() {
		return new FormGroup<CreateIAMPolicyAssignmentRequestFormProperties>({
			AssignmentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('(?=^.{2,256}$)(?!.*\s)[0-9a-zA-Z-_.:=+@]*$')]),
			AssignmentStatus: new FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>(undefined, [Validators.required]),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateIngestionRequest {
	}
	export interface CreateIngestionRequestFormProperties {
	}
	export function CreateCreateIngestionRequestFormGroup() {
		return new FormGroup<CreateIngestionRequestFormProperties>({
		});

	}

	export enum IngestionStatus { INITIALIZED = 0, QUEUED = 1, RUNNING = 2, FAILED = 3, COMPLETED = 4, CANCELLED = 5 }

	export interface CreateTemplateAliasRequest {

		/**
		 * Required
		 * Minimum: 1
		 */
		TemplateVersionNumber: number;
	}
	export interface CreateTemplateAliasRequestFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 */
		TemplateVersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateCreateTemplateAliasRequestFormGroup() {
		return new FormGroup<CreateTemplateAliasRequestFormProperties>({
			TemplateVersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}


	/** The source entity of the template. */
	export interface TemplateSourceEntity {

		/** The source analysis of the template. */
		SourceAnalysis?: TemplateSourceAnalysis;

		/** The source template of the template. */
		SourceTemplate?: TemplateSourceTemplate;
	}

	/** The source entity of the template. */
	export interface TemplateSourceEntityFormProperties {
	}
	export function CreateTemplateSourceEntityFormGroup() {
		return new FormGroup<TemplateSourceEntityFormProperties>({
		});

	}

	export interface CreateTemplateRequest {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;

		/**
		 * The source entity of the template.
		 * Required
		 */
		SourceEntity: TemplateSourceEntity;

		/**
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;
	}
	export interface CreateTemplateRequestFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateTemplateRequestFormGroup() {
		return new FormGroup<CreateTemplateRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			VersionDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export enum DashboardFilterAttribute { QUICKSIGHT_USER = 0 }

	export enum FilterOperator { StringEquals = 0 }

	export enum DashboardUIState { EXPANDED = 0, COLLAPSED = 1 }

	export interface DeleteDashboardRequest {
	}
	export interface DeleteDashboardRequestFormProperties {
	}
	export function CreateDeleteDashboardRequestFormGroup() {
		return new FormGroup<DeleteDashboardRequestFormProperties>({
		});

	}

	export interface DeleteDataSetRequest {
	}
	export interface DeleteDataSetRequestFormProperties {
	}
	export function CreateDeleteDataSetRequestFormGroup() {
		return new FormGroup<DeleteDataSetRequestFormProperties>({
		});

	}

	export interface DeleteDataSourceRequest {
	}
	export interface DeleteDataSourceRequestFormProperties {
	}
	export function CreateDeleteDataSourceRequestFormGroup() {
		return new FormGroup<DeleteDataSourceRequestFormProperties>({
		});

	}

	export interface DeleteGroupMembershipRequest {
	}
	export interface DeleteGroupMembershipRequestFormProperties {
	}
	export function CreateDeleteGroupMembershipRequestFormGroup() {
		return new FormGroup<DeleteGroupMembershipRequestFormProperties>({
		});

	}

	export interface DeleteGroupRequest {
	}
	export interface DeleteGroupRequestFormProperties {
	}
	export function CreateDeleteGroupRequestFormGroup() {
		return new FormGroup<DeleteGroupRequestFormProperties>({
		});

	}

	export interface DeleteIAMPolicyAssignmentRequest {
	}
	export interface DeleteIAMPolicyAssignmentRequestFormProperties {
	}
	export function CreateDeleteIAMPolicyAssignmentRequestFormGroup() {
		return new FormGroup<DeleteIAMPolicyAssignmentRequestFormProperties>({
		});

	}

	export interface DeleteTemplateAliasRequest {
	}
	export interface DeleteTemplateAliasRequestFormProperties {
	}
	export function CreateDeleteTemplateAliasRequestFormGroup() {
		return new FormGroup<DeleteTemplateAliasRequestFormProperties>({
		});

	}

	export interface DeleteTemplateRequest {
	}
	export interface DeleteTemplateRequestFormProperties {
	}
	export function CreateDeleteTemplateRequestFormGroup() {
		return new FormGroup<DeleteTemplateRequestFormProperties>({
		});

	}


	/** <p/> */
	export interface DeleteUserByPrincipalIdRequest {
	}

	/** <p/> */
	export interface DeleteUserByPrincipalIdRequestFormProperties {
	}
	export function CreateDeleteUserByPrincipalIdRequestFormGroup() {
		return new FormGroup<DeleteUserByPrincipalIdRequestFormProperties>({
		});

	}

	export interface DeleteUserRequest {
	}
	export interface DeleteUserRequestFormProperties {
	}
	export function CreateDeleteUserRequestFormGroup() {
		return new FormGroup<DeleteUserRequestFormProperties>({
		});

	}

	export interface DescribeDashboardPermissionsRequest {
	}
	export interface DescribeDashboardPermissionsRequestFormProperties {
	}
	export function CreateDescribeDashboardPermissionsRequestFormGroup() {
		return new FormGroup<DescribeDashboardPermissionsRequestFormProperties>({
		});

	}

	export interface DescribeDashboardRequest {
	}
	export interface DescribeDashboardRequestFormProperties {
	}
	export function CreateDescribeDashboardRequestFormGroup() {
		return new FormGroup<DescribeDashboardRequestFormProperties>({
		});

	}

	export interface DescribeDataSetPermissionsRequest {
	}
	export interface DescribeDataSetPermissionsRequestFormProperties {
	}
	export function CreateDescribeDataSetPermissionsRequestFormGroup() {
		return new FormGroup<DescribeDataSetPermissionsRequestFormProperties>({
		});

	}

	export interface DescribeDataSetRequest {
	}
	export interface DescribeDataSetRequestFormProperties {
	}
	export function CreateDescribeDataSetRequestFormGroup() {
		return new FormGroup<DescribeDataSetRequestFormProperties>({
		});

	}

	export interface DescribeDataSourcePermissionsRequest {
	}
	export interface DescribeDataSourcePermissionsRequestFormProperties {
	}
	export function CreateDescribeDataSourcePermissionsRequestFormGroup() {
		return new FormGroup<DescribeDataSourcePermissionsRequestFormProperties>({
		});

	}

	export interface DescribeDataSourceRequest {
	}
	export interface DescribeDataSourceRequestFormProperties {
	}
	export function CreateDescribeDataSourceRequestFormGroup() {
		return new FormGroup<DescribeDataSourceRequestFormProperties>({
		});

	}

	export interface DescribeGroupRequest {
	}
	export interface DescribeGroupRequestFormProperties {
	}
	export function CreateDescribeGroupRequestFormGroup() {
		return new FormGroup<DescribeGroupRequestFormProperties>({
		});

	}

	export interface DescribeIAMPolicyAssignmentRequest {
	}
	export interface DescribeIAMPolicyAssignmentRequestFormProperties {
	}
	export function CreateDescribeIAMPolicyAssignmentRequestFormGroup() {
		return new FormGroup<DescribeIAMPolicyAssignmentRequestFormProperties>({
		});

	}

	export interface DescribeIngestionRequest {
	}
	export interface DescribeIngestionRequestFormProperties {
	}
	export function CreateDescribeIngestionRequestFormGroup() {
		return new FormGroup<DescribeIngestionRequestFormProperties>({
		});

	}

	export interface DescribeTemplateAliasRequest {
	}
	export interface DescribeTemplateAliasRequestFormProperties {
	}
	export function CreateDescribeTemplateAliasRequestFormGroup() {
		return new FormGroup<DescribeTemplateAliasRequestFormProperties>({
		});

	}

	export interface DescribeTemplatePermissionsRequest {
	}
	export interface DescribeTemplatePermissionsRequestFormProperties {
	}
	export function CreateDescribeTemplatePermissionsRequestFormGroup() {
		return new FormGroup<DescribeTemplatePermissionsRequestFormProperties>({
		});

	}

	export interface DescribeTemplateRequest {
	}
	export interface DescribeTemplateRequestFormProperties {
	}
	export function CreateDescribeTemplateRequestFormGroup() {
		return new FormGroup<DescribeTemplateRequestFormProperties>({
		});

	}

	export interface DescribeUserRequest {
	}
	export interface DescribeUserRequestFormProperties {
	}
	export function CreateDescribeUserRequestFormGroup() {
		return new FormGroup<DescribeUserRequestFormProperties>({
		});

	}

	export enum IngestionErrorType { FAILURE_TO_ASSUME_ROLE = 0, INGESTION_SUPERSEDED = 1, INGESTION_CANCELED = 2, DATA_SET_DELETED = 3, DATA_SET_NOT_SPICE = 4, S3_UPLOADED_FILE_DELETED = 5, S3_MANIFEST_ERROR = 6, DATA_TOLERANCE_EXCEPTION = 7, SPICE_TABLE_NOT_FOUND = 8, DATA_SET_SIZE_LIMIT_EXCEEDED = 9, ROW_SIZE_LIMIT_EXCEEDED = 10, ACCOUNT_CAPACITY_LIMIT_EXCEEDED = 11, CUSTOMER_ERROR = 12, DATA_SOURCE_NOT_FOUND = 13, IAM_ROLE_NOT_AVAILABLE = 14, CONNECTION_FAILURE = 15, SQL_TABLE_NOT_FOUND = 16, PERMISSION_DENIED = 17, SSL_CERTIFICATE_VALIDATION_FAILURE = 18, OAUTH_TOKEN_FAILURE = 19, SOURCE_API_LIMIT_EXCEEDED_FAILURE = 20, PASSWORD_AUTHENTICATION_FAILURE = 21, SQL_SCHEMA_MISMATCH_ERROR = 22, INVALID_DATE_FORMAT = 23, INVALID_DATAPREP_SYNTAX = 24, SOURCE_RESOURCE_LIMIT_EXCEEDED = 25, SQL_INVALID_PARAMETER_VALUE = 26, QUERY_TIMEOUT = 27, SQL_NUMERIC_OVERFLOW = 28, UNRESOLVABLE_HOST = 29, UNROUTABLE_HOST = 30, SQL_EXCEPTION = 31, S3_FILE_INACCESSIBLE = 32, IOT_FILE_NOT_FOUND = 33, IOT_DATA_SET_FILE_EMPTY = 34, INVALID_DATA_SOURCE_CONFIG = 35, DATA_SOURCE_AUTH_FAILED = 36, DATA_SOURCE_CONNECTION_FAILED = 37, FAILURE_TO_PROCESS_JSON_FILE = 38, INTERNAL_SERVICE_ERROR = 39 }

	export enum FileFormat { CSV = 0, TSV = 1, CLF = 2, ELF = 3, XLSX = 4, JSON = 5 }

	export enum GeoSpatialCountryCode { US = 0 }

	export enum IdentityType { IAM = 0, QUICKSIGHT = 1 }

	export interface GetDashboardEmbedUrlRequest {
	}
	export interface GetDashboardEmbedUrlRequestFormProperties {
	}
	export function CreateGetDashboardEmbedUrlRequestFormGroup() {
		return new FormGroup<GetDashboardEmbedUrlRequestFormProperties>({
		});

	}

	export enum InputColumnDataType { STRING = 0, INTEGER = 1, DECIMAL = 2, DATETIME = 3, BIT = 4, BOOLEAN = 5, JSON = 6 }

	export enum JoinType { INNER = 0, OUTER = 1, LEFT = 2, RIGHT = 3 }

	export interface ListDashboardVersionsRequest {
	}
	export interface ListDashboardVersionsRequestFormProperties {
	}
	export function CreateListDashboardVersionsRequestFormGroup() {
		return new FormGroup<ListDashboardVersionsRequestFormProperties>({
		});

	}

	export interface ListDashboardsRequest {
	}
	export interface ListDashboardsRequestFormProperties {
	}
	export function CreateListDashboardsRequestFormGroup() {
		return new FormGroup<ListDashboardsRequestFormProperties>({
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

	export interface ListDataSourcesRequest {
	}
	export interface ListDataSourcesRequestFormProperties {
	}
	export function CreateListDataSourcesRequestFormGroup() {
		return new FormGroup<ListDataSourcesRequestFormProperties>({
		});

	}

	export interface ListGroupMembershipsRequest {
	}
	export interface ListGroupMembershipsRequestFormProperties {
	}
	export function CreateListGroupMembershipsRequestFormGroup() {
		return new FormGroup<ListGroupMembershipsRequestFormProperties>({
		});

	}

	export interface ListGroupsRequest {
	}
	export interface ListGroupsRequestFormProperties {
	}
	export function CreateListGroupsRequestFormGroup() {
		return new FormGroup<ListGroupsRequestFormProperties>({
		});

	}

	export interface ListIAMPolicyAssignmentsForUserRequest {
	}
	export interface ListIAMPolicyAssignmentsForUserRequestFormProperties {
	}
	export function CreateListIAMPolicyAssignmentsForUserRequestFormGroup() {
		return new FormGroup<ListIAMPolicyAssignmentsForUserRequestFormProperties>({
		});

	}

	export interface ListIAMPolicyAssignmentsRequest {
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
	}
	export interface ListIAMPolicyAssignmentsRequestFormProperties {
		AssignmentStatus: FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>,
	}
	export function CreateListIAMPolicyAssignmentsRequestFormGroup() {
		return new FormGroup<ListIAMPolicyAssignmentsRequestFormProperties>({
			AssignmentStatus: new FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>(undefined),
		});

	}

	export interface ListIngestionsRequest {
	}
	export interface ListIngestionsRequestFormProperties {
	}
	export function CreateListIngestionsRequestFormGroup() {
		return new FormGroup<ListIngestionsRequestFormProperties>({
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

	export interface ListTemplateAliasesRequest {
	}
	export interface ListTemplateAliasesRequestFormProperties {
	}
	export function CreateListTemplateAliasesRequestFormGroup() {
		return new FormGroup<ListTemplateAliasesRequestFormProperties>({
		});

	}

	export interface ListTemplateVersionsRequest {
	}
	export interface ListTemplateVersionsRequestFormProperties {
	}
	export function CreateListTemplateVersionsRequestFormGroup() {
		return new FormGroup<ListTemplateVersionsRequestFormProperties>({
		});

	}

	export interface ListTemplatesRequest {
	}
	export interface ListTemplatesRequestFormProperties {
	}
	export function CreateListTemplatesRequestFormGroup() {
		return new FormGroup<ListTemplatesRequestFormProperties>({
		});

	}

	export interface ListUserGroupsRequest {
	}
	export interface ListUserGroupsRequestFormProperties {
	}
	export function CreateListUserGroupsRequestFormGroup() {
		return new FormGroup<ListUserGroupsRequestFormProperties>({
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

	export interface RegisterUserRequest {

		/** Required */
		IdentityType: UserIdentityType;

		/** Required */
		Email: string;

		/** Required */
		UserRole: UserRole;
		IamArn?: string | null;

		/**
		 * Max length: 64
		 * Min length: 2
		 */
		SessionName?: string | null;

		/** Min length: 1 */
		UserName?: string | null;
	}
	export interface RegisterUserRequestFormProperties {

		/** Required */
		IdentityType: FormControl<UserIdentityType | null | undefined>,

		/** Required */
		Email: FormControl<string | null | undefined>,

		/** Required */
		UserRole: FormControl<UserRole | null | undefined>,
		IamArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 64
		 * Min length: 2
		 */
		SessionName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterUserRequestFormGroup() {
		return new FormGroup<RegisterUserRequestFormProperties>({
			IdentityType: new FormControl<UserIdentityType | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserRole: new FormControl<UserRole | null | undefined>(undefined, [Validators.required]),
			IamArn: new FormControl<string | null | undefined>(undefined),
			SessionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(2), Validators.pattern('[\w+=.@-]*')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
		});

	}

	export interface SearchDashboardsRequest {

		/**
		 * Required
		 * Maximum items: 1
		 */
		Filters: Array<DashboardSearchFilter>;
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface SearchDashboardsRequestFormProperties {
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchDashboardsRequestFormGroup() {
		return new FormGroup<SearchDashboardsRequestFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface TagResourceRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
		});

	}

	export enum TextQualifier { DOUBLE_QUOTE = 0, SINGLE_QUOTE = 1 }

	export interface UntagResourceRequest {
	}
	export interface UntagResourceRequestFormProperties {
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
		});

	}

	export interface UpdateDashboardPermissionsRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		GrantPermissions?: Array<ResourcePermission>;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		RevokePermissions?: Array<ResourcePermission>;
	}
	export interface UpdateDashboardPermissionsRequestFormProperties {
	}
	export function CreateUpdateDashboardPermissionsRequestFormGroup() {
		return new FormGroup<UpdateDashboardPermissionsRequestFormProperties>({
		});

	}

	export interface UpdateDashboardPublishedVersionRequest {
	}
	export interface UpdateDashboardPublishedVersionRequestFormProperties {
	}
	export function CreateUpdateDashboardPublishedVersionRequestFormGroup() {
		return new FormGroup<UpdateDashboardPublishedVersionRequestFormProperties>({
		});

	}

	export interface UpdateDashboardRequest {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Dashboard source entity.
		 * Required
		 */
		SourceEntity: DashboardSourceEntity;

		/** Parameters. */
		Parameters?: Parameters;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;

		/** Dashboard publish options. */
		DashboardPublishOptions?: DashboardPublishOptions;
	}
	export interface UpdateDashboardRequestFormProperties {

		/**
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDashboardRequestFormGroup() {
		return new FormGroup<UpdateDashboardRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			VersionDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface UpdateDataSetPermissionsRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		GrantPermissions?: Array<ResourcePermission>;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		RevokePermissions?: Array<ResourcePermission>;
	}
	export interface UpdateDataSetPermissionsRequestFormProperties {
	}
	export function CreateUpdateDataSetPermissionsRequestFormGroup() {
		return new FormGroup<UpdateDataSetPermissionsRequestFormProperties>({
		});

	}

	export interface UpdateDataSetRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/** Required */
		PhysicalTableMap: PhysicalTableMap;
		LogicalTableMap?: LogicalTableMap;

		/** Required */
		ImportMode: DataSetImportMode;

		/**
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		ColumnGroups?: Array<ColumnGroup>;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
	}
	export interface UpdateDataSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Required */
		ImportMode: FormControl<DataSetImportMode | null | undefined>,
	}
	export function CreateUpdateDataSetRequestFormGroup() {
		return new FormGroup<UpdateDataSetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			ImportMode: new FormControl<DataSetImportMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDataSourcePermissionsRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		GrantPermissions?: Array<ResourcePermission>;

		/**
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		RevokePermissions?: Array<ResourcePermission>;
	}
	export interface UpdateDataSourcePermissionsRequestFormProperties {
	}
	export function CreateUpdateDataSourcePermissionsRequestFormGroup() {
		return new FormGroup<UpdateDataSourcePermissionsRequestFormProperties>({
		});

	}

	export interface UpdateDataSourceRequest {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
		DataSourceParameters?: DataSourceParameters;

		/** Data source credentials. */
		Credentials?: DataSourceCredentials;

		/** VPC connection properties. */
		VpcConnectionProperties?: VpcConnectionProperties;

		/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
		SslProperties?: SslProperties;
	}
	export interface UpdateDataSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourceRequestFormGroup() {
		return new FormGroup<UpdateDataSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface UpdateGroupRequest {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
	}
	export interface UpdateGroupRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupRequestFormGroup() {
		return new FormGroup<UpdateGroupRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface UpdateIAMPolicyAssignmentRequest {
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
		PolicyArn?: string | null;
		Identities?: IdentityMap;
	}
	export interface UpdateIAMPolicyAssignmentRequestFormProperties {
		AssignmentStatus: FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>,
		PolicyArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateIAMPolicyAssignmentRequestFormGroup() {
		return new FormGroup<UpdateIAMPolicyAssignmentRequestFormProperties>({
			AssignmentStatus: new FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateTemplateAliasRequest {

		/**
		 * Required
		 * Minimum: 1
		 */
		TemplateVersionNumber: number;
	}
	export interface UpdateTemplateAliasRequestFormProperties {

		/**
		 * Required
		 * Minimum: 1
		 */
		TemplateVersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateUpdateTemplateAliasRequestFormGroup() {
		return new FormGroup<UpdateTemplateAliasRequestFormProperties>({
			TemplateVersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface UpdateTemplatePermissionsRequest {

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		GrantPermissions?: Array<ResourcePermission>;

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		RevokePermissions?: Array<ResourcePermission>;
	}
	export interface UpdateTemplatePermissionsRequestFormProperties {
	}
	export function CreateUpdateTemplatePermissionsRequestFormGroup() {
		return new FormGroup<UpdateTemplatePermissionsRequestFormProperties>({
		});

	}

	export interface UpdateTemplateRequest {

		/**
		 * The source entity of the template.
		 * Required
		 */
		SourceEntity: TemplateSourceEntity;

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface UpdateTemplateRequestFormProperties {

		/**
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTemplateRequestFormGroup() {
		return new FormGroup<UpdateTemplateRequestFormProperties>({
			VersionDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
		});

	}

	export interface UpdateUserRequest {

		/** Required */
		Email: string;

		/** Required */
		Role: UserRole;
	}
	export interface UpdateUserRequestFormProperties {

		/** Required */
		Email: FormControl<string | null | undefined>,

		/** Required */
		Role: FormControl<UserRole | null | undefined>,
	}
	export function CreateUpdateUserRequestFormGroup() {
		return new FormGroup<UpdateUserRequestFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Role: new FormControl<UserRole | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Cancels an ongoing ingestion of data into SPICE.
		 * Delete accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSetId The ID of the dataset used in the ingestion.
		 * @param {string} IngestionId An ID for the ingestion.
		 * @return {CancelIngestionResponse} Success
		 */
		CancelIngestion(AwsAccountId: string, DataSetId: string, IngestionId: string): Observable<CancelIngestionResponse> {
			return this.http.delete<CancelIngestionResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/ingestions/' + (IngestionId == null ? '' : encodeURIComponent(IngestionId)), {});
		}

		/**
		 * <p>Creates and starts a new SPICE ingestion on a dataset</p> <p>Any ingestions operating on tagged datasets inherit the same tags automatically for use in access control. For an example, see <a href="https://aws.amazon.com/premiumsupport/knowledge-center/iam-ec2-resource-tags/">How do I create an IAM policy to control access to Amazon EC2 resources using tags?</a> in the AWS Knowledge Center. Tags are visible on the tagged dataset, but not on the ingestion resource.</p>
		 * Put accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}
		 * @param {string} DataSetId The ID of the dataset used in the ingestion.
		 * @param {string} IngestionId An ID for the ingestion.
		 * @param {string} AwsAccountId The AWS account ID.
		 * @return {CreateIngestionResponse} Success
		 */
		CreateIngestion(DataSetId: string, IngestionId: string, AwsAccountId: string): Observable<CreateIngestionResponse> {
			return this.http.put<CreateIngestionResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/ingestions/' + (IngestionId == null ? '' : encodeURIComponent(IngestionId)), null, {});
		}

		/**
		 * Describes a SPICE ingestion.
		 * Get accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions/{IngestionId}
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSetId The ID of the dataset used in the ingestion.
		 * @param {string} IngestionId An ID for the ingestion.
		 * @return {DescribeIngestionResponse} Success
		 */
		DescribeIngestion(AwsAccountId: string, DataSetId: string, IngestionId: string): Observable<DescribeIngestionResponse> {
			return this.http.get<DescribeIngestionResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/ingestions/' + (IngestionId == null ? '' : encodeURIComponent(IngestionId)), {});
		}

		/**
		 * <p>Creates a dashboard from a template. To first create a template, see the CreateTemplate API operation.</p> <p>A dashboard is an entity in QuickSight that identifies QuickSight reports, created from analyses. You can share QuickSight dashboards. With the right permissions, you can create scheduled email reports from them. The <code>CreateDashboard</code>, <code>DescribeDashboard</code>, and <code>ListDashboardsByUser</code> API operations act on the dashboard entity. If you have the correct permissions, you can create a dashboard from a template that exists in a different AWS account.</p>
		 * Post accounts/{AwsAccountId}/dashboards/{DashboardId}
		 * @param {string} AwsAccountId The ID of the AWS account where you want to create the dashboard.
		 * @param {string} DashboardId The ID for the dashboard, also added to the IAM policy.
		 * @return {CreateDashboardResponse} Success
		 */
		CreateDashboard(AwsAccountId: string, DashboardId: string, requestBody: CreateDashboardPostBody): Observable<CreateDashboardResponse> {
			return this.http.post<CreateDashboardResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/dashboards/' + (DashboardId == null ? '' : encodeURIComponent(DashboardId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a dashboard.
		 * Delete accounts/{AwsAccountId}/dashboards/{DashboardId}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the dashboard that you're deleting.
		 * @param {string} DashboardId The ID for the dashboard.
		 * @param {number} version_number The version number of the dashboard. If the version number property is provided, only the specified version of the dashboard is deleted.
		 * @return {DeleteDashboardResponse} Success
		 */
		DeleteDashboard(AwsAccountId: string, DashboardId: string, version_number: number | null | undefined): Observable<DeleteDashboardResponse> {
			return this.http.delete<DeleteDashboardResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/dashboards/' + (DashboardId == null ? '' : encodeURIComponent(DashboardId)) + '&version_number=' + version_number, {});
		}

		/**
		 * Provides a summary for a dashboard.
		 * Get accounts/{AwsAccountId}/dashboards/{DashboardId}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the dashboard that you're describing.
		 * @param {string} DashboardId The ID for the dashboard.
		 * @param {number} version_number The version number for the dashboard. If a version number isn't passed, the latest published dashboard version is described. 
		 * @param {string} alias_name The alias name.
		 * @return {DescribeDashboardResponse} Success
		 */
		DescribeDashboard(AwsAccountId: string, DashboardId: string, version_number: number | null | undefined, alias_name: string | null | undefined): Observable<DescribeDashboardResponse> {
			return this.http.get<DescribeDashboardResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/dashboards/' + (DashboardId == null ? '' : encodeURIComponent(DashboardId)) + '&version_number=' + version_number + '&alias_name=' + (alias_name == null ? '' : encodeURIComponent(alias_name)), {});
		}

		/**
		 * Updates a dashboard in an AWS account.
		 * Put accounts/{AwsAccountId}/dashboards/{DashboardId}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the dashboard that you're updating.
		 * @param {string} DashboardId The ID for the dashboard.
		 * @return {UpdateDashboardResponse} Success
		 */
		UpdateDashboard(AwsAccountId: string, DashboardId: string, requestBody: UpdateDashboardPutBody): Observable<UpdateDashboardResponse> {
			return this.http.put<UpdateDashboardResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/dashboards/' + (DashboardId == null ? '' : encodeURIComponent(DashboardId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a dataset.
		 * Post accounts/{AwsAccountId}/data-sets
		 * @param {string} AwsAccountId The AWS account ID.
		 * @return {CreateDataSetResponse} Success
		 */
		CreateDataSet(AwsAccountId: string, requestBody: CreateDataSetPostBody): Observable<CreateDataSetResponse> {
			return this.http.post<CreateDataSetResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists all of the datasets belonging to the current AWS account in an AWS Region.</p> <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/*</code>.</p>
		 * Get accounts/{AwsAccountId}/data-sets
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} next_token The token for the next set of results, or null if there are no more results.
		 * @param {number} max_results The maximum number of results to be returned per request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSetsResponse} Success
		 */
		ListDataSets(AwsAccountId: string, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDataSetsResponse> {
			return this.http.get<ListDataSetsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a data source.
		 * Post accounts/{AwsAccountId}/data-sources
		 * @param {string} AwsAccountId The AWS account ID.
		 * @return {CreateDataSourceResponse} Success
		 */
		CreateDataSource(AwsAccountId: string, requestBody: CreateDataSourcePostBody): Observable<CreateDataSourceResponse> {
			return this.http.post<CreateDataSourceResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists data sources in current AWS Region that belong to this AWS account.
		 * Get accounts/{AwsAccountId}/data-sources
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} next_token The token for the next set of results, or null if there are no more results.
		 * @param {number} max_results The maximum number of results to be returned per request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDataSourcesResponse} Success
		 */
		ListDataSources(AwsAccountId: string, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDataSourcesResponse> {
			return this.http.get<ListDataSourcesResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sources&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Creates an Amazon QuickSight group.</p> <p>The permissions resource is <code>arn:aws:quicksight:us-east-1:<i>&lt;relevant-aws-account-id&gt;</i>:group/default/<i>&lt;group-name&gt;</i> </code>.</p> <p>The response is a group object.</p>
		 * Post accounts/{AwsAccountId}/namespaces/{Namespace}/groups
		 * @param {string} AwsAccountId The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {CreateGroupResponse} Success
		 */
		CreateGroup(AwsAccountId: string, Namespace: string, requestBody: CreateGroupPostBody): Observable<CreateGroupResponse> {
			return this.http.post<CreateGroupResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/groups', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all user groups in Amazon QuickSight.
		 * Get accounts/{AwsAccountId}/namespaces/{Namespace}/groups
		 * @param {string} AwsAccountId The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} next_token A pagination token that can be used in a subsequent request.
		 * @param {number} max_results The maximum number of results to return.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {ListGroupsResponse} Success
		 */
		ListGroups(AwsAccountId: string, next_token: string | null | undefined, max_results: number | null | undefined, Namespace: string): Observable<ListGroupsResponse> {
			return this.http.get<ListGroupsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/groups&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Adds an Amazon QuickSight user to an Amazon QuickSight group.
		 * Put accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}
		 * @param {string} MemberName The name of the user that you want to add to the group membership.
		 * @param {string} GroupName The name of the group that you want to add the user to.
		 * @param {string} AwsAccountId The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {CreateGroupMembershipResponse} Success
		 */
		CreateGroupMembership(MemberName: string, GroupName: string, AwsAccountId: string, Namespace: string): Observable<CreateGroupMembershipResponse> {
			return this.http.put<CreateGroupMembershipResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '/members/' + (MemberName == null ? '' : encodeURIComponent(MemberName)), null, {});
		}

		/**
		 * Removes a user from a group so that the user is no longer a member of the group.
		 * Delete accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members/{MemberName}
		 * @param {string} MemberName The name of the user that you want to delete from the group membership.
		 * @param {string} GroupName The name of the group that you want to delete the user from.
		 * @param {string} AwsAccountId The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {DeleteGroupMembershipResponse} Success
		 */
		DeleteGroupMembership(MemberName: string, GroupName: string, AwsAccountId: string, Namespace: string): Observable<DeleteGroupMembershipResponse> {
			return this.http.delete<DeleteGroupMembershipResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '/members/' + (MemberName == null ? '' : encodeURIComponent(MemberName)), {});
		}

		/**
		 * Creates an assignment with one specified IAM policy, identified by its Amazon Resource Name (ARN). This policy will be assigned to specified groups or users of Amazon QuickSight. The users and groups need to be in the same namespace.
		 * Post accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/
		 * @param {string} AwsAccountId The ID of the AWS account where you want to assign an IAM policy to QuickSight users or groups.
		 * @param {string} Namespace The namespace that contains the assignment.
		 * @return {CreateIAMPolicyAssignmentResponse} Success
		 */
		CreateIAMPolicyAssignment(AwsAccountId: string, Namespace: string, requestBody: CreateIAMPolicyAssignmentPostBody): Observable<CreateIAMPolicyAssignmentResponse> {
			return this.http.post<CreateIAMPolicyAssignmentResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/iam-policy-assignments/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Creates a template from an existing QuickSight analysis or template. You can use the resulting template to create a dashboard.</p> <p>A <i>template</i> is an entity in QuickSight that encapsulates the metadata required to create an analysis and that you can use to create s dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.</p>
		 * Post accounts/{AwsAccountId}/templates/{TemplateId}
		 * @param {string} AwsAccountId The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} TemplateId An ID for the template that you want to create. This template is unique per AWS Region in each AWS account.
		 * @return {CreateTemplateResponse} Success
		 */
		CreateTemplate(AwsAccountId: string, TemplateId: string, requestBody: CreateTemplatePostBody): Observable<CreateTemplateResponse> {
			return this.http.post<CreateTemplateResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a template.
		 * Delete accounts/{AwsAccountId}/templates/{TemplateId}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the template that you're deleting.
		 * @param {string} TemplateId An ID for the template you want to delete.
		 * @param {number} version_number Specifies the version of the template that you want to delete. If you don't provide a version number, <code>DeleteTemplate</code> deletes all versions of the template. 
		 * @return {DeleteTemplateResponse} Success
		 */
		DeleteTemplate(AwsAccountId: string, TemplateId: string, version_number: number | null | undefined): Observable<DeleteTemplateResponse> {
			return this.http.delete<DeleteTemplateResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)) + '&version_number=' + version_number, {});
		}

		/**
		 * Describes a template's metadata.
		 * Get accounts/{AwsAccountId}/templates/{TemplateId}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the template that you're describing.
		 * @param {string} TemplateId The ID for the template.
		 * @param {number} version_number (Optional) The number for the version to describe. If a <code>VersionNumber</code> parameter value isn't provided, the latest version of the template is described.
		 * @param {string} alias_name The alias of the template that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.
		 * @return {DescribeTemplateResponse} Success
		 */
		DescribeTemplate(AwsAccountId: string, TemplateId: string, version_number: number | null | undefined, alias_name: string | null | undefined): Observable<DescribeTemplateResponse> {
			return this.http.get<DescribeTemplateResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)) + '&version_number=' + version_number + '&alias_name=' + (alias_name == null ? '' : encodeURIComponent(alias_name)), {});
		}

		/**
		 * Updates a template from an existing Amazon QuickSight analysis or another template.
		 * Put accounts/{AwsAccountId}/templates/{TemplateId}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the template that you're updating.
		 * @param {string} TemplateId The ID for the template.
		 * @return {UpdateTemplateResponse} Success
		 */
		UpdateTemplate(AwsAccountId: string, TemplateId: string, requestBody: UpdateTemplatePutBody): Observable<UpdateTemplateResponse> {
			return this.http.put<UpdateTemplateResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a template alias for a template.
		 * Post accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the template that you creating an alias for.
		 * @param {string} TemplateId An ID for the template.
		 * @param {string} AliasName The name that you want to give to the template alias that you're creating. Don't start the alias name with the <code>$</code> character. Alias names that start with <code>$</code> are reserved by QuickSight. 
		 * @return {CreateTemplateAliasResponse} Success
		 */
		CreateTemplateAlias(AwsAccountId: string, TemplateId: string, AliasName: string, requestBody: CreateTemplateAliasPostBody): Observable<CreateTemplateAliasResponse> {
			return this.http.post<CreateTemplateAliasResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)) + '/aliases/' + (AliasName == null ? '' : encodeURIComponent(AliasName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the item that the specified template alias points to. If you provide a specific alias, you delete the version of the template that the alias points to.
		 * Delete accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the item to delete.
		 * @param {string} TemplateId The ID for the template that the specified alias is for.
		 * @param {string} AliasName The name for the template alias. If you name a specific alias, you delete the version that the alias points to. You can specify the latest version of the template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter. 
		 * @return {DeleteTemplateAliasResponse} Success
		 */
		DeleteTemplateAlias(AwsAccountId: string, TemplateId: string, AliasName: string): Observable<DeleteTemplateAliasResponse> {
			return this.http.delete<DeleteTemplateAliasResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)) + '/aliases/' + (AliasName == null ? '' : encodeURIComponent(AliasName)), {});
		}

		/**
		 * Describes the template alias for a template.
		 * Get accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the template alias that you're describing.
		 * @param {string} TemplateId The ID for the template.
		 * @param {string} AliasName The name of the template alias that you want to describe. If you name a specific alias, you describe the version that the alias points to. You can specify the latest version of the template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.
		 * @return {DescribeTemplateAliasResponse} Success
		 */
		DescribeTemplateAlias(AwsAccountId: string, TemplateId: string, AliasName: string): Observable<DescribeTemplateAliasResponse> {
			return this.http.get<DescribeTemplateAliasResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)) + '/aliases/' + (AliasName == null ? '' : encodeURIComponent(AliasName)), {});
		}

		/**
		 * Updates the template alias of a template.
		 * Put accounts/{AwsAccountId}/templates/{TemplateId}/aliases/{AliasName}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the template alias that you're updating.
		 * @param {string} TemplateId The ID for the template.
		 * @param {string} AliasName The alias of the template that you want to update. If you name a specific alias, you update the version that the alias points to. You can specify the latest version of the template by providing the keyword <code>$LATEST</code> in the <code>AliasName</code> parameter. The keyword <code>$PUBLISHED</code> doesn't apply to templates.
		 * @return {UpdateTemplateAliasResponse} Success
		 */
		UpdateTemplateAlias(AwsAccountId: string, TemplateId: string, AliasName: string, requestBody: UpdateTemplateAliasPutBody): Observable<UpdateTemplateAliasResponse> {
			return this.http.put<UpdateTemplateAliasResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)) + '/aliases/' + (AliasName == null ? '' : encodeURIComponent(AliasName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a dataset.
		 * Delete accounts/{AwsAccountId}/data-sets/{DataSetId}
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSetId The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
		 * @return {DeleteDataSetResponse} Success
		 */
		DeleteDataSet(AwsAccountId: string, DataSetId: string): Observable<DeleteDataSetResponse> {
			return this.http.delete<DeleteDataSetResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)), {});
		}

		/**
		 * Describes a dataset.
		 * Get accounts/{AwsAccountId}/data-sets/{DataSetId}
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSetId The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
		 * @return {DescribeDataSetResponse} Success
		 */
		DescribeDataSet(AwsAccountId: string, DataSetId: string): Observable<DescribeDataSetResponse> {
			return this.http.get<DescribeDataSetResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)), {});
		}

		/**
		 * Updates a dataset.
		 * Put accounts/{AwsAccountId}/data-sets/{DataSetId}
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSetId The ID for the dataset that you want to update. This ID is unique per AWS Region for each AWS account.
		 * @return {UpdateDataSetResponse} Success
		 */
		UpdateDataSet(AwsAccountId: string, DataSetId: string, requestBody: UpdateDataSetPutBody): Observable<UpdateDataSetResponse> {
			return this.http.put<UpdateDataSetResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the data source permanently. This action breaks all the datasets that reference the deleted data source.
		 * Delete accounts/{AwsAccountId}/data-sources/{DataSourceId}
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSourceId The ID of the data source. This ID is unique per AWS Region for each AWS account.
		 * @return {DeleteDataSourceResponse} Success
		 */
		DeleteDataSource(AwsAccountId: string, DataSourceId: string): Observable<DeleteDataSourceResponse> {
			return this.http.delete<DeleteDataSourceResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sources/' + (DataSourceId == null ? '' : encodeURIComponent(DataSourceId)), {});
		}

		/**
		 * Describes a data source.
		 * Get accounts/{AwsAccountId}/data-sources/{DataSourceId}
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSourceId The ID of the data source. This ID is unique per AWS Region for each AWS account.
		 * @return {DescribeDataSourceResponse} Success
		 */
		DescribeDataSource(AwsAccountId: string, DataSourceId: string): Observable<DescribeDataSourceResponse> {
			return this.http.get<DescribeDataSourceResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sources/' + (DataSourceId == null ? '' : encodeURIComponent(DataSourceId)), {});
		}

		/**
		 * Updates a data source.
		 * Put accounts/{AwsAccountId}/data-sources/{DataSourceId}
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSourceId The ID of the data source. This ID is unique per AWS Region for each AWS account. 
		 * @return {UpdateDataSourceResponse} Success
		 */
		UpdateDataSource(AwsAccountId: string, DataSourceId: string, requestBody: UpdateDataSourcePutBody): Observable<UpdateDataSourceResponse> {
			return this.http.put<UpdateDataSourceResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sources/' + (DataSourceId == null ? '' : encodeURIComponent(DataSourceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a user group from Amazon QuickSight.
		 * Delete accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}
		 * @param {string} GroupName The name of the group that you want to delete.
		 * @param {string} AwsAccountId The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {DeleteGroupResponse} Success
		 */
		DeleteGroup(GroupName: string, AwsAccountId: string, Namespace: string): Observable<DeleteGroupResponse> {
			return this.http.delete<DeleteGroupResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)), {});
		}

		/**
		 * Returns an Amazon QuickSight group's description and Amazon Resource Name (ARN).
		 * Get accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}
		 * @param {string} GroupName The name of the group that you want to describe.
		 * @param {string} AwsAccountId The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {DescribeGroupResponse} Success
		 */
		DescribeGroup(GroupName: string, AwsAccountId: string, Namespace: string): Observable<DescribeGroupResponse> {
			return this.http.get<DescribeGroupResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)), {});
		}

		/**
		 * Changes a group description.
		 * Put accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}
		 * @param {string} GroupName The name of the group that you want to update.
		 * @param {string} AwsAccountId The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {UpdateGroupResponse} Success
		 */
		UpdateGroup(GroupName: string, AwsAccountId: string, Namespace: string, requestBody: UpdateGroupPutBody): Observable<UpdateGroupResponse> {
			return this.http.put<UpdateGroupResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an existing IAM policy assignment.
		 * Delete accounts/{AwsAccountId}/namespace/{Namespace}/iam-policy-assignments/{AssignmentName}
		 * @param {string} AwsAccountId The AWS account ID where you want to delete the IAM policy assignment.
		 * @param {string} AssignmentName The name of the assignment. 
		 * @param {string} Namespace The namespace that contains the assignment.
		 * @return {DeleteIAMPolicyAssignmentResponse} Success
		 */
		DeleteIAMPolicyAssignment(AwsAccountId: string, AssignmentName: string, Namespace: string): Observable<DeleteIAMPolicyAssignmentResponse> {
			return this.http.delete<DeleteIAMPolicyAssignmentResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespace/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/iam-policy-assignments/' + (AssignmentName == null ? '' : encodeURIComponent(AssignmentName)), {});
		}

		/**
		 * Deletes the Amazon QuickSight user that is associated with the identity of the AWS Identity and Access Management (IAM) user or role that's making the call. The IAM user isn't deleted as a result of this call.
		 * Delete accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}
		 * @param {string} UserName The name of the user that you want to delete.
		 * @param {string} AwsAccountId The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {DeleteUserResponse} Success
		 */
		DeleteUser(UserName: string, AwsAccountId: string, Namespace: string): Observable<DeleteUserResponse> {
			return this.http.delete<DeleteUserResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/users/' + (UserName == null ? '' : encodeURIComponent(UserName)), {});
		}

		/**
		 * Returns information about a user, given the user name.
		 * Get accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}
		 * @param {string} UserName The name of the user that you want to describe.
		 * @param {string} AwsAccountId The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(UserName: string, AwsAccountId: string, Namespace: string): Observable<DescribeUserResponse> {
			return this.http.get<DescribeUserResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/users/' + (UserName == null ? '' : encodeURIComponent(UserName)), {});
		}

		/**
		 * Updates an Amazon QuickSight user.
		 * Put accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}
		 * @param {string} UserName The Amazon QuickSight user name that you want to update.
		 * @param {string} AwsAccountId The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {UpdateUserResponse} Success
		 */
		UpdateUser(UserName: string, AwsAccountId: string, Namespace: string, requestBody: UpdateUserPutBody): Observable<UpdateUserResponse> {
			return this.http.put<UpdateUserResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/users/' + (UserName == null ? '' : encodeURIComponent(UserName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user identified by its principal ID.
		 * Delete accounts/{AwsAccountId}/namespaces/{Namespace}/user-principals/{PrincipalId}
		 * @param {string} PrincipalId The principal ID of the user.
		 * @param {string} AwsAccountId The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {DeleteUserByPrincipalIdResponse} Success
		 */
		DeleteUserByPrincipalId(PrincipalId: string, AwsAccountId: string, Namespace: string): Observable<DeleteUserByPrincipalIdResponse> {
			return this.http.delete<DeleteUserByPrincipalIdResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/user-principals/' + (PrincipalId == null ? '' : encodeURIComponent(PrincipalId)), {});
		}

		/**
		 * Describes read and write permissions for a dashboard.
		 * Get accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions
		 * @param {string} AwsAccountId The ID of the AWS account that contains the dashboard that you're describing permissions for.
		 * @param {string} DashboardId The ID for the dashboard, also added to the IAM policy.
		 * @return {DescribeDashboardPermissionsResponse} Success
		 */
		DescribeDashboardPermissions(AwsAccountId: string, DashboardId: string): Observable<DescribeDashboardPermissionsResponse> {
			return this.http.get<DescribeDashboardPermissionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/dashboards/' + (DashboardId == null ? '' : encodeURIComponent(DashboardId)) + '/permissions', {});
		}

		/**
		 * Updates read and write permissions on a dashboard.
		 * Put accounts/{AwsAccountId}/dashboards/{DashboardId}/permissions
		 * @param {string} AwsAccountId The ID of the AWS account that contains the dashboard whose permissions you're updating.
		 * @param {string} DashboardId The ID for the dashboard.
		 * @return {UpdateDashboardPermissionsResponse} Success
		 */
		UpdateDashboardPermissions(AwsAccountId: string, DashboardId: string, requestBody: UpdateDashboardPermissionsPutBody): Observable<UpdateDashboardPermissionsResponse> {
			return this.http.put<UpdateDashboardPermissionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/dashboards/' + (DashboardId == null ? '' : encodeURIComponent(DashboardId)) + '/permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the permissions on a dataset.</p> <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/data-set-id</code>.</p>
		 * Get accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSetId The ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
		 * @return {DescribeDataSetPermissionsResponse} Success
		 */
		DescribeDataSetPermissions(AwsAccountId: string, DataSetId: string): Observable<DescribeDataSetPermissionsResponse> {
			return this.http.get<DescribeDataSetPermissionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/permissions', {});
		}

		/**
		 * <p>Updates the permissions on a dataset.</p> <p>The permissions resource is <code>arn:aws:quicksight:region:aws-account-id:dataset/data-set-id</code>.</p>
		 * Post accounts/{AwsAccountId}/data-sets/{DataSetId}/permissions
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSetId The ID for the dataset whose permissions you want to update. This ID is unique per AWS Region for each AWS account.
		 * @return {UpdateDataSetPermissionsResponse} Success
		 */
		UpdateDataSetPermissions(AwsAccountId: string, DataSetId: string, requestBody: UpdateDataSetPermissionsPostBody): Observable<UpdateDataSetPermissionsResponse> {
			return this.http.post<UpdateDataSetPermissionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes the resource permissions for a data source.
		 * Get accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSourceId The ID of the data source. This ID is unique per AWS Region for each AWS account.
		 * @return {DescribeDataSourcePermissionsResponse} Success
		 */
		DescribeDataSourcePermissions(AwsAccountId: string, DataSourceId: string): Observable<DescribeDataSourcePermissionsResponse> {
			return this.http.get<DescribeDataSourcePermissionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sources/' + (DataSourceId == null ? '' : encodeURIComponent(DataSourceId)) + '/permissions', {});
		}

		/**
		 * Updates the permissions to a data source.
		 * Post accounts/{AwsAccountId}/data-sources/{DataSourceId}/permissions
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {string} DataSourceId The ID of the data source. This ID is unique per AWS Region for each AWS account. 
		 * @return {UpdateDataSourcePermissionsResponse} Success
		 */
		UpdateDataSourcePermissions(AwsAccountId: string, DataSourceId: string, requestBody: UpdateDataSourcePermissionsPostBody): Observable<UpdateDataSourcePermissionsResponse> {
			return this.http.post<UpdateDataSourcePermissionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sources/' + (DataSourceId == null ? '' : encodeURIComponent(DataSourceId)) + '/permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes an existing IAM policy assignment, as specified by the assignment name.
		 * Get accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the assignment that you want to describe.
		 * @param {string} AssignmentName The name of the assignment. 
		 * @param {string} Namespace The namespace that contains the assignment.
		 * @return {DescribeIAMPolicyAssignmentResponse} Success
		 */
		DescribeIAMPolicyAssignment(AwsAccountId: string, AssignmentName: string, Namespace: string): Observable<DescribeIAMPolicyAssignmentResponse> {
			return this.http.get<DescribeIAMPolicyAssignmentResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/iam-policy-assignments/' + (AssignmentName == null ? '' : encodeURIComponent(AssignmentName)), {});
		}

		/**
		 * Updates an existing IAM policy assignment. This operation updates only the optional parameter or parameters that are specified in the request.
		 * Put accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments/{AssignmentName}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the IAM policy assignment.
		 * @param {string} AssignmentName The name of the assignment. This name must be unique within an AWS account.
		 * @param {string} Namespace The namespace of the assignment.
		 * @return {UpdateIAMPolicyAssignmentResponse} Success
		 */
		UpdateIAMPolicyAssignment(AwsAccountId: string, AssignmentName: string, Namespace: string, requestBody: UpdateIAMPolicyAssignmentPutBody): Observable<UpdateIAMPolicyAssignmentResponse> {
			return this.http.put<UpdateIAMPolicyAssignmentResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/iam-policy-assignments/' + (AssignmentName == null ? '' : encodeURIComponent(AssignmentName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Describes read and write permissions on a template.
		 * Get accounts/{AwsAccountId}/templates/{TemplateId}/permissions
		 * @param {string} AwsAccountId The ID of the AWS account that contains the template that you're describing.
		 * @param {string} TemplateId The ID for the template.
		 * @return {DescribeTemplatePermissionsResponse} Success
		 */
		DescribeTemplatePermissions(AwsAccountId: string, TemplateId: string): Observable<DescribeTemplatePermissionsResponse> {
			return this.http.get<DescribeTemplatePermissionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)) + '/permissions', {});
		}

		/**
		 * Updates the resource permissions for a template.
		 * Put accounts/{AwsAccountId}/templates/{TemplateId}/permissions
		 * @param {string} AwsAccountId The ID of the AWS account that contains the template.
		 * @param {string} TemplateId The ID for the template.
		 * @return {UpdateTemplatePermissionsResponse} Success
		 */
		UpdateTemplatePermissions(AwsAccountId: string, TemplateId: string, requestBody: UpdateTemplatePermissionsPutBody): Observable<UpdateTemplatePermissionsResponse> {
			return this.http.put<UpdateTemplatePermissionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)) + '/permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Generates a server-side embeddable URL and authorization code. For this process to work properly, first configure the dashboards and user permissions. For more information, see <a href="https://docs.aws.amazon.com/quicksight/latest/user/embedding-dashboards.html">Embedding Amazon QuickSight Dashboards</a> in the <i>Amazon QuickSight User Guide</i> or <a href="https://docs.aws.amazon.com/quicksight/latest/APIReference/qs-dev-embedded-dashboards.html">Embedding Amazon QuickSight Dashboards</a> in the <i>Amazon QuickSight API Reference</i>.</p> <p>Currently, you can use <code>GetDashboardEmbedURL</code> only from the server, not from the user’s browser.</p>
		 * Get accounts/{AwsAccountId}/dashboards/{DashboardId}/embed-url#creds-type
		 * @param {string} AwsAccountId The ID for the AWS account that contains the dashboard that you're embedding.
		 * @param {string} DashboardId The ID for the dashboard, also added to the IAM policy.
		 * @param {UserIdentityType} creds_type The authentication method that the user uses to sign in.
		 * @param {number} session_lifetime How many minutes the session is valid. The session lifetime must be 15-600 minutes.
		 * @param {boolean} undo_redo_disabled Remove the undo/redo button on the embedded dashboard. The default is FALSE, which enables the undo/redo button.
		 * @param {boolean} reset_disabled Remove the reset button on the embedded dashboard. The default is FALSE, which enables the reset button.
		 * @param {string} user_arn <p>The Amazon QuickSight user's Amazon Resource Name (ARN), for use with <code>QUICKSIGHT</code> identity type. You can use this for any Amazon QuickSight users in your account (readers, authors, or admins) authenticated as one of the following:</p> <ul> <li> <p>Active Directory (AD) users or group members</p> </li> <li> <p>Invited nonfederated users</p> </li> <li> <p>IAM users and IAM role-based sessions authenticated through Federated Single Sign-On using SAML, OpenID Connect, or IAM federation.</p> </li> </ul>
		 * @return {GetDashboardEmbedUrlResponse} Success
		 */
		GetDashboardEmbedUrl(AwsAccountId: string, DashboardId: string, creds_type: UserIdentityType, session_lifetime: number | null | undefined, undo_redo_disabled: boolean | null | undefined, reset_disabled: boolean | null | undefined, user_arn: string | null | undefined): Observable<GetDashboardEmbedUrlResponse> {
			return this.http.get<GetDashboardEmbedUrlResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/dashboards/' + (DashboardId == null ? '' : encodeURIComponent(DashboardId)) + '/embed-url#creds-type&creds_type=' + creds_type + '&session_lifetime=' + session_lifetime + '&undo_redo_disabled=' + undo_redo_disabled + '&reset_disabled=' + reset_disabled + '&user_arn=' + (user_arn == null ? '' : encodeURIComponent(user_arn)), {});
		}

		/**
		 * Lists all the versions of the dashboards in the QuickSight subscription.
		 * Get accounts/{AwsAccountId}/dashboards/{DashboardId}/versions
		 * @param {string} AwsAccountId The ID of the AWS account that contains the dashboard that you're listing versions for.
		 * @param {string} DashboardId The ID for the dashboard.
		 * @param {string} next_token The token for the next set of results, or null if there are no more results.
		 * @param {number} max_results The maximum number of results to be returned per request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDashboardVersionsResponse} Success
		 */
		ListDashboardVersions(AwsAccountId: string, DashboardId: string, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDashboardVersionsResponse> {
			return this.http.get<ListDashboardVersionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/dashboards/' + (DashboardId == null ? '' : encodeURIComponent(DashboardId)) + '/versions&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists dashboards in an AWS account.
		 * Get accounts/{AwsAccountId}/dashboards
		 * @param {string} AwsAccountId The ID of the AWS account that contains the dashboards that you're listing.
		 * @param {string} next_token The token for the next set of results, or null if there are no more results.
		 * @param {number} max_results The maximum number of results to be returned per request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDashboardsResponse} Success
		 */
		ListDashboards(AwsAccountId: string, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDashboardsResponse> {
			return this.http.get<ListDashboardsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/dashboards&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists member users in a group.
		 * Get accounts/{AwsAccountId}/namespaces/{Namespace}/groups/{GroupName}/members
		 * @param {string} GroupName The name of the group that you want to see a membership list of.
		 * @param {string} next_token A pagination token that can be used in a subsequent request.
		 * @param {number} max_results The maximum number of results to return from this request.
		 * @param {string} AwsAccountId The ID for the AWS account that the group is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {ListGroupMembershipsResponse} Success
		 */
		ListGroupMemberships(GroupName: string, next_token: string | null | undefined, max_results: number | null | undefined, AwsAccountId: string, Namespace: string): Observable<ListGroupMembershipsResponse> {
			return this.http.get<ListGroupMembershipsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/groups/' + (GroupName == null ? '' : encodeURIComponent(GroupName)) + '/members&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Lists IAM policy assignments in the current Amazon QuickSight account.
		 * Get accounts/{AwsAccountId}/namespaces/{Namespace}/iam-policy-assignments
		 * @param {string} AwsAccountId The ID of the AWS account that contains these IAM policy assignments.
		 * @param {string} Namespace The namespace for the assignments.
		 * @param {string} next_token The token for the next set of results, or null if there are no more results.
		 * @param {number} max_results The maximum number of results to be returned per request.
		 * @return {ListIAMPolicyAssignmentsResponse} Success
		 */
		ListIAMPolicyAssignments(AwsAccountId: string, Namespace: string, next_token: string | null | undefined, max_results: number | null | undefined): Observable<ListIAMPolicyAssignmentsResponse> {
			return this.http.get<ListIAMPolicyAssignmentsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/iam-policy-assignments&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Lists all the IAM policy assignments, including the Amazon Resource Names (ARNs) for the IAM policies assigned to the specified user and group or groups that the user belongs to.
		 * Get accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/iam-policy-assignments
		 * @param {string} AwsAccountId The ID of the AWS account that contains the assignments.
		 * @param {string} UserName The name of the user.
		 * @param {string} next_token The token for the next set of results, or null if there are no more results.
		 * @param {number} max_results The maximum number of results to be returned per request.
		 * @param {string} Namespace The namespace of the assignment.
		 * @return {ListIAMPolicyAssignmentsForUserResponse} Success
		 */
		ListIAMPolicyAssignmentsForUser(AwsAccountId: string, UserName: string, next_token: string | null | undefined, max_results: number | null | undefined, Namespace: string): Observable<ListIAMPolicyAssignmentsForUserResponse> {
			return this.http.get<ListIAMPolicyAssignmentsForUserResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/users/' + (UserName == null ? '' : encodeURIComponent(UserName)) + '/iam-policy-assignments&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Lists the history of SPICE ingestions for a dataset.
		 * Get accounts/{AwsAccountId}/data-sets/{DataSetId}/ingestions
		 * @param {string} DataSetId The ID of the dataset used in the ingestion.
		 * @param {string} next_token The token for the next set of results, or null if there are no more results.
		 * @param {string} AwsAccountId The AWS account ID.
		 * @param {number} max_results The maximum number of results to be returned per request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListIngestionsResponse} Success
		 */
		ListIngestions(DataSetId: string, next_token: string | null | undefined, AwsAccountId: string, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListIngestionsResponse> {
			return this.http.get<ListIngestionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/data-sets/' + (DataSetId == null ? '' : encodeURIComponent(DataSetId)) + '/ingestions&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags assigned to a resource.
		 * Get resources/{ResourceArn}/tags
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want a list of tags for.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'resources/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '/tags', {});
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified QuickSight resource. </p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only resources with certain tag values. You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource. QuickSight supports tagging on data set, data source, dashboard, and template. </p> <p>Tagging for QuickSight works in a similar way to tagging for other AWS services, except for the following:</p> <ul> <li> <p>You can't use tags to track AWS costs for QuickSight. This restriction is because QuickSight costs are based on users and SPICE capacity, which aren't taggable resources.</p> </li> <li> <p>QuickSight doesn't currently support the Tag Editor for AWS Resource Groups.</p> </li> </ul>
		 * Post resources/{ResourceArn}/tags
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want to tag.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'resources/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the aliases of a template.
		 * Get accounts/{AwsAccountId}/templates/{TemplateId}/aliases
		 * @param {string} AwsAccountId The ID of the AWS account that contains the template aliases that you're listing.
		 * @param {string} TemplateId The ID for the template.
		 * @param {string} next_token The token for the next set of results, or null if there are no more results.
		 * @param {number} max_result The maximum number of results to be returned per request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTemplateAliasesResponse} Success
		 */
		ListTemplateAliases(AwsAccountId: string, TemplateId: string, next_token: string | null | undefined, max_result: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListTemplateAliasesResponse> {
			return this.http.get<ListTemplateAliasesResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)) + '/aliases&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_result=' + max_result + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all the versions of the templates in the current Amazon QuickSight account.
		 * Get accounts/{AwsAccountId}/templates/{TemplateId}/versions
		 * @param {string} AwsAccountId The ID of the AWS account that contains the templates that you're listing.
		 * @param {string} TemplateId The ID for the template.
		 * @param {string} next_token The token for the next set of results, or null if there are no more results.
		 * @param {number} max_results The maximum number of results to be returned per request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTemplateVersionsResponse} Success
		 */
		ListTemplateVersions(AwsAccountId: string, TemplateId: string, next_token: string | null | undefined, max_results: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListTemplateVersionsResponse> {
			return this.http.get<ListTemplateVersionsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates/' + (TemplateId == null ? '' : encodeURIComponent(TemplateId)) + '/versions&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all the templates in the current Amazon QuickSight account.
		 * Get accounts/{AwsAccountId}/templates
		 * @param {string} AwsAccountId The ID of the AWS account that contains the templates that you're listing.
		 * @param {string} next_token The token for the next set of results, or null if there are no more results.
		 * @param {number} max_result The maximum number of results to be returned per request.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListTemplatesResponse} Success
		 */
		ListTemplates(AwsAccountId: string, next_token: string | null | undefined, max_result: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListTemplatesResponse> {
			return this.http.get<ListTemplatesResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/templates&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_result=' + max_result + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the Amazon QuickSight groups that an Amazon QuickSight user is a member of.
		 * Get accounts/{AwsAccountId}/namespaces/{Namespace}/users/{UserName}/groups
		 * @param {string} UserName The Amazon QuickSight user name that you want to list group memberships for.
		 * @param {string} AwsAccountId The AWS account ID that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @param {string} next_token A pagination token that can be used in a subsequent request.
		 * @param {number} max_results The maximum number of results to return from this request.
		 * @return {ListUserGroupsResponse} Success
		 */
		ListUserGroups(UserName: string, AwsAccountId: string, Namespace: string, next_token: string | null | undefined, max_results: number | null | undefined): Observable<ListUserGroupsResponse> {
			return this.http.get<ListUserGroupsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/users/' + (UserName == null ? '' : encodeURIComponent(UserName)) + '/groups&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Returns a list of all of the Amazon QuickSight users belonging to this account.
		 * Get accounts/{AwsAccountId}/namespaces/{Namespace}/users
		 * @param {string} AwsAccountId The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} next_token A pagination token that can be used in a subsequent request.
		 * @param {number} max_results The maximum number of results to return from this request.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(AwsAccountId: string, next_token: string | null | undefined, max_results: number | null | undefined, Namespace: string): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/users&next_token=' + (next_token == null ? '' : encodeURIComponent(next_token)) + '&max_results=' + max_results, {});
		}

		/**
		 * Creates an Amazon QuickSight user, whose identity is associated with the AWS Identity and Access Management (IAM) identity or role specified in the request.
		 * Post accounts/{AwsAccountId}/namespaces/{Namespace}/users
		 * @param {string} AwsAccountId The ID for the AWS account that the user is in. Currently, you use the ID for the AWS account that contains your Amazon QuickSight account.
		 * @param {string} Namespace The namespace. Currently, you should set this to <code>default</code>.
		 * @return {RegisterUserResponse} Success
		 */
		RegisterUser(AwsAccountId: string, Namespace: string, requestBody: RegisterUserPostBody): Observable<RegisterUserResponse> {
			return this.http.post<RegisterUserResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/namespaces/' + (Namespace == null ? '' : encodeURIComponent(Namespace)) + '/users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Searchs for dashboards that belong to a user.
		 * Post accounts/{AwsAccountId}/search/dashboards
		 * @param {string} AwsAccountId The ID of the AWS account that contains the user whose dashboards you're searching for. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {SearchDashboardsResponse} Success
		 */
		SearchDashboards(AwsAccountId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: SearchDashboardsPostBody): Observable<SearchDashboardsResponse> {
			return this.http.post<SearchDashboardsResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/search/dashboards&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a tag or tags from a resource.
		 * Delete resources/{ResourceArn}/tags#keys
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) of the resource that you want to untag.
		 * @param {Array<string>} keys The keys of the key-value pairs for the resource tag or tags assigned to the resource.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, keys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'resources/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '/tags#keys&' + keys.map(z => `keys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Updates the published version of a dashboard.
		 * Put accounts/{AwsAccountId}/dashboards/{DashboardId}/versions/{VersionNumber}
		 * @param {string} AwsAccountId The ID of the AWS account that contains the dashboard that you're updating.
		 * @param {string} DashboardId The ID for the dashboard.
		 * @param {number} VersionNumber The version number of the dashboard.
		 * @return {UpdateDashboardPublishedVersionResponse} Success
		 */
		UpdateDashboardPublishedVersion(AwsAccountId: string, DashboardId: string, VersionNumber: number): Observable<UpdateDashboardPublishedVersionResponse> {
			return this.http.put<UpdateDashboardPublishedVersionResponse>(this.baseUri + 'accounts/' + (AwsAccountId == null ? '' : encodeURIComponent(AwsAccountId)) + '/dashboards/' + (DashboardId == null ? '' : encodeURIComponent(DashboardId)) + '/versions/' + VersionNumber, null, {});
		}
	}

	export interface CreateDashboardPostBody {

		/**
		 * The display name of the dashboard.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: string;

		/** Parameters. */
		Parameters?: CreateDashboardPostBodyParameters;

		/**
		 * A structure that contains the permissions of the dashboard. You can use this structure for granting permissions with principal and action information.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;

		/**
		 * Dashboard source entity.
		 * Required
		 */
		SourceEntity: CreateDashboardPostBodySourceEntity;

		/**
		 * Contains a map of the key-value pairs for the resource tag or tags assigned to the dashboard.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * A description for the first version of the dashboard being created.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;

		/** Dashboard publish options. */
		DashboardPublishOptions?: CreateDashboardPostBodyDashboardPublishOptions;
	}
	export interface CreateDashboardPostBodyFormProperties {

		/**
		 * The display name of the dashboard.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description for the first version of the dashboard being created.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateDashboardPostBodyFormGroup() {
		return new FormGroup<CreateDashboardPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			VersionDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface CreateDashboardPostBodyParameters {

		/** Maximum items: 100 */
		StringParameters?: Array<StringParameter>;

		/** Maximum items: 100 */
		IntegerParameters?: Array<IntegerParameter>;

		/** Maximum items: 100 */
		DecimalParameters?: Array<DecimalParameter>;

		/** Maximum items: 100 */
		DateTimeParameters?: Array<DateTimeParameter>;
	}
	export interface CreateDashboardPostBodyParametersFormProperties {
	}
	export function CreateCreateDashboardPostBodyParametersFormGroup() {
		return new FormGroup<CreateDashboardPostBodyParametersFormProperties>({
		});

	}

	export interface CreateDashboardPostBodySourceEntity {

		/** Dashboard source template. */
		SourceTemplate?: DashboardSourceTemplate;
	}
	export interface CreateDashboardPostBodySourceEntityFormProperties {
	}
	export function CreateCreateDashboardPostBodySourceEntityFormGroup() {
		return new FormGroup<CreateDashboardPostBodySourceEntityFormProperties>({
		});

	}

	export interface CreateDashboardPostBodyDashboardPublishOptions {

		/** Ad hoc (one-time) filtering option. */
		AdHocFilteringOption?: AdHocFilteringOption;

		/** Export to .csv option. */
		ExportToCSVOption?: ExportToCSVOption;

		/** Sheet controls option. */
		SheetControlsOption?: SheetControlsOption;
	}
	export interface CreateDashboardPostBodyDashboardPublishOptionsFormProperties {
	}
	export function CreateCreateDashboardPostBodyDashboardPublishOptionsFormGroup() {
		return new FormGroup<CreateDashboardPostBodyDashboardPublishOptionsFormProperties>({
		});

	}

	export interface UpdateDashboardPutBody {

		/**
		 * The display name of the dashboard.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Dashboard source entity.
		 * Required
		 */
		SourceEntity: UpdateDashboardPutBodySourceEntity;

		/** Parameters. */
		Parameters?: UpdateDashboardPutBodyParameters;

		/**
		 * A description for the first version of the dashboard being created.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;

		/** Dashboard publish options. */
		DashboardPublishOptions?: UpdateDashboardPutBodyDashboardPublishOptions;
	}
	export interface UpdateDashboardPutBodyFormProperties {

		/**
		 * The display name of the dashboard.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description for the first version of the dashboard being created.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDashboardPutBodyFormGroup() {
		return new FormGroup<UpdateDashboardPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			VersionDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface UpdateDashboardPutBodySourceEntity {

		/** Dashboard source template. */
		SourceTemplate?: DashboardSourceTemplate;
	}
	export interface UpdateDashboardPutBodySourceEntityFormProperties {
	}
	export function CreateUpdateDashboardPutBodySourceEntityFormGroup() {
		return new FormGroup<UpdateDashboardPutBodySourceEntityFormProperties>({
		});

	}

	export interface UpdateDashboardPutBodyParameters {

		/** Maximum items: 100 */
		StringParameters?: Array<StringParameter>;

		/** Maximum items: 100 */
		IntegerParameters?: Array<IntegerParameter>;

		/** Maximum items: 100 */
		DecimalParameters?: Array<DecimalParameter>;

		/** Maximum items: 100 */
		DateTimeParameters?: Array<DateTimeParameter>;
	}
	export interface UpdateDashboardPutBodyParametersFormProperties {
	}
	export function CreateUpdateDashboardPutBodyParametersFormGroup() {
		return new FormGroup<UpdateDashboardPutBodyParametersFormProperties>({
		});

	}

	export interface UpdateDashboardPutBodyDashboardPublishOptions {

		/** Ad hoc (one-time) filtering option. */
		AdHocFilteringOption?: AdHocFilteringOption;

		/** Export to .csv option. */
		ExportToCSVOption?: ExportToCSVOption;

		/** Sheet controls option. */
		SheetControlsOption?: SheetControlsOption;
	}
	export interface UpdateDashboardPutBodyDashboardPublishOptionsFormProperties {
	}
	export function CreateUpdateDashboardPutBodyDashboardPublishOptionsFormGroup() {
		return new FormGroup<UpdateDashboardPutBodyDashboardPublishOptionsFormProperties>({
		});

	}

	export interface CreateDataSetPostBody {

		/**
		 * An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
		 * Required
		 */
		DataSetId: string;

		/**
		 * The display name for the dataset.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Declares the physical tables that are available in the underlying data sources.
		 * Required
		 */
		PhysicalTableMap: {[id: string]: PhysicalTable };

		/** Configures the combination and transformation of the data from the physical tables. */
		LogicalTableMap?: {[id: string]: LogicalTable };

		/**
		 * Indicates whether you want to import the data into SPICE.
		 * Required
		 */
		ImportMode: DataSetImportMode;

		/**
		 * Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		ColumnGroups?: Array<ColumnGroup>;

		/**
		 * A list of resource permissions on the dataset.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: CreateDataSetPostBodyRowLevelPermissionDataSet;

		/**
		 * Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateDataSetPostBodyFormProperties {

		/**
		 * An ID for the dataset that you want to create. This ID is unique per AWS Region for each AWS account.
		 * Required
		 */
		DataSetId: FormControl<string | null | undefined>,

		/**
		 * The display name for the dataset.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Declares the physical tables that are available in the underlying data sources.
		 * Required
		 */
		PhysicalTableMap: FormControl<{[id: string]: PhysicalTable } | null | undefined>,

		/** Configures the combination and transformation of the data from the physical tables. */
		LogicalTableMap: FormControl<{[id: string]: LogicalTable } | null | undefined>,

		/**
		 * Indicates whether you want to import the data into SPICE.
		 * Required
		 */
		ImportMode: FormControl<DataSetImportMode | null | undefined>,
	}
	export function CreateCreateDataSetPostBodyFormGroup() {
		return new FormGroup<CreateDataSetPostBodyFormProperties>({
			DataSetId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			PhysicalTableMap: new FormControl<{[id: string]: PhysicalTable } | null | undefined>(undefined, [Validators.required]),
			LogicalTableMap: new FormControl<{[id: string]: LogicalTable } | null | undefined>(undefined),
			ImportMode: new FormControl<DataSetImportMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDataSetPostBodyRowLevelPermissionDataSet {
		Arn?: string | null;
		PermissionPolicy?: RowLevelPermissionPolicy | null;
	}
	export interface CreateDataSetPostBodyRowLevelPermissionDataSetFormProperties {
		Arn: FormControl<string | null | undefined>,
		PermissionPolicy: FormControl<RowLevelPermissionPolicy | null | undefined>,
	}
	export function CreateCreateDataSetPostBodyRowLevelPermissionDataSetFormGroup() {
		return new FormGroup<CreateDataSetPostBodyRowLevelPermissionDataSetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			PermissionPolicy: new FormControl<RowLevelPermissionPolicy | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourcePostBody {

		/**
		 * An ID for the data source. This ID is unique per AWS Region for each AWS account.
		 * Required
		 */
		DataSourceId: string;

		/**
		 * A display name for the data source.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The type of the data source. Currently, the supported types for this operation are: <code>ATHENA, AURORA, AURORA_POSTGRESQL, MARIADB, MYSQL, POSTGRESQL, PRESTO, REDSHIFT, S3, SNOWFLAKE, SPARK, SQLSERVER, TERADATA</code>. Use <code>ListDataSources</code> to return a list of all data sources.
		 * Required
		 */
		Type: DataSourceType;

		/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
		DataSourceParameters?: CreateDataSourcePostBodyDataSourceParameters;

		/** Data source credentials. */
		Credentials?: CreateDataSourcePostBodyCredentials;

		/**
		 * A list of resource permissions on the data source.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;

		/** VPC connection properties. */
		VpcConnectionProperties?: CreateDataSourcePostBodyVpcConnectionProperties;

		/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
		SslProperties?: CreateDataSourcePostBodySslProperties;

		/**
		 * Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;
	}
	export interface CreateDataSourcePostBodyFormProperties {

		/**
		 * An ID for the data source. This ID is unique per AWS Region for each AWS account.
		 * Required
		 */
		DataSourceId: FormControl<string | null | undefined>,

		/**
		 * A display name for the data source.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The type of the data source. Currently, the supported types for this operation are: <code>ATHENA, AURORA, AURORA_POSTGRESQL, MARIADB, MYSQL, POSTGRESQL, PRESTO, REDSHIFT, S3, SNOWFLAKE, SPARK, SQLSERVER, TERADATA</code>. Use <code>ListDataSources</code> to return a list of all data sources.
		 * Required
		 */
		Type: FormControl<DataSourceType | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyFormProperties>({
			DataSourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Type: new FormControl<DataSourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateDataSourcePostBodyDataSourceParameters {

		/** Amazon Elasticsearch Service parameters. */
		AmazonElasticsearchParameters?: AmazonElasticsearchParameters;

		/** Amazon Athena parameters. */
		AthenaParameters?: AthenaParameters;

		/** Amazon Aurora parameters. */
		AuroraParameters?: AuroraParameters;

		/** Amazon Aurora with PostgreSQL compatibility parameters. */
		AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;

		/** AWS IoT Analytics parameters. */
		AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters;

		/** Jira parameters. */
		JiraParameters?: JiraParameters;

		/** MariaDB parameters. */
		MariaDbParameters?: MariaDbParameters;

		/** MySQL parameters. */
		MySqlParameters?: MySqlParameters;

		/** PostgreSQL parameters. */
		PostgreSqlParameters?: PostgreSqlParameters;

		/** Presto parameters. */
		PrestoParameters?: PrestoParameters;

		/** Amazon RDS parameters. */
		RdsParameters?: RdsParameters;

		/** Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set. */
		RedshiftParameters?: RedshiftParameters;

		/** S3 parameters. */
		S3Parameters?: S3Parameters;

		/** ServiceNow parameters. */
		ServiceNowParameters?: ServiceNowParameters;

		/** Snowflake parameters. */
		SnowflakeParameters?: SnowflakeParameters;

		/** Spark parameters. */
		SparkParameters?: SparkParameters;

		/** SQL Server parameters. */
		SqlServerParameters?: SqlServerParameters;

		/** Teradata parameters. */
		TeradataParameters?: TeradataParameters;

		/** Twitter parameters. */
		TwitterParameters?: TwitterParameters;
	}
	export interface CreateDataSourcePostBodyDataSourceParametersFormProperties {
	}
	export function CreateCreateDataSourcePostBodyDataSourceParametersFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyDataSourceParametersFormProperties>({
		});

	}

	export interface CreateDataSourcePostBodyCredentials {

		/** The combination of user name and password that are used as credentials. */
		CredentialPair?: CredentialPair;
	}
	export interface CreateDataSourcePostBodyCredentialsFormProperties {
	}
	export function CreateCreateDataSourcePostBodyCredentialsFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyCredentialsFormProperties>({
		});

	}

	export interface CreateDataSourcePostBodyVpcConnectionProperties {
		VpcConnectionArn?: string | null;
	}
	export interface CreateDataSourcePostBodyVpcConnectionPropertiesFormProperties {
		VpcConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodyVpcConnectionPropertiesFormGroup() {
		return new FormGroup<CreateDataSourcePostBodyVpcConnectionPropertiesFormProperties>({
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateDataSourcePostBodySslProperties {
		DisableSsl?: boolean | null;
	}
	export interface CreateDataSourcePostBodySslPropertiesFormProperties {
		DisableSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateDataSourcePostBodySslPropertiesFormGroup() {
		return new FormGroup<CreateDataSourcePostBodySslPropertiesFormProperties>({
			DisableSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CreateGroupPostBody {

		/**
		 * A name for the group that you want to create.
		 * Required
		 * Min length: 1
		 */
		GroupName: string;

		/**
		 * A description for the group that you want to create.
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
	}
	export interface CreateGroupPostBodyFormProperties {

		/**
		 * A name for the group that you want to create.
		 * Required
		 * Min length: 1
		 */
		GroupName: FormControl<string | null | undefined>,

		/**
		 * A description for the group that you want to create.
		 * Max length: 512
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateCreateGroupPostBodyFormGroup() {
		return new FormGroup<CreateGroupPostBodyFormProperties>({
			GroupName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface CreateIAMPolicyAssignmentPostBody {

		/**
		 * The name of the assignment. It must be unique within an AWS account.
		 * Required
		 * Min length: 1
		 */
		AssignmentName: string;

		/**
		 * <p>The status of the assignment. Possible values are as follows:</p> <ul> <li> <p> <code>ENABLED</code> - Anything specified in this assignment is used when creating the data source.</p> </li> <li> <p> <code>DISABLED</code> - This assignment isn't used when creating the data source.</p> </li> <li> <p> <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the data source.</p> </li> </ul>
		 * Required
		 */
		AssignmentStatus: CreateIAMPolicyAssignmentResponseAssignmentStatus;

		/** The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment. */
		PolicyArn?: string | null;

		/** The QuickSight users, groups, or both that you want to assign the policy to. */
		Identities?: {[id: string]: Array<string> };
	}
	export interface CreateIAMPolicyAssignmentPostBodyFormProperties {

		/**
		 * The name of the assignment. It must be unique within an AWS account.
		 * Required
		 * Min length: 1
		 */
		AssignmentName: FormControl<string | null | undefined>,

		/**
		 * <p>The status of the assignment. Possible values are as follows:</p> <ul> <li> <p> <code>ENABLED</code> - Anything specified in this assignment is used when creating the data source.</p> </li> <li> <p> <code>DISABLED</code> - This assignment isn't used when creating the data source.</p> </li> <li> <p> <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the data source.</p> </li> </ul>
		 * Required
		 */
		AssignmentStatus: FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>,

		/** The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment. */
		PolicyArn: FormControl<string | null | undefined>,

		/** The QuickSight users, groups, or both that you want to assign the policy to. */
		Identities: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateCreateIAMPolicyAssignmentPostBodyFormGroup() {
		return new FormGroup<CreateIAMPolicyAssignmentPostBodyFormProperties>({
			AssignmentName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.pattern('(?=^.{2,256}$)(?!.*\s)[0-9a-zA-Z-_.:=+@]*$')]),
			AssignmentStatus: new FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>(undefined, [Validators.required]),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			Identities: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
		});

	}

	export interface CreateTemplatePostBody {

		/**
		 * A display name for the template.
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * A list of resource permissions to be set on the template.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission>;

		/**
		 * The source entity of the template.
		 * Required
		 */
		SourceEntity: CreateTemplatePostBodySourceEntity;

		/**
		 * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag>;

		/**
		 * A description of the current template version being created. This API operation creates the first version of the template. Every time <code>UpdateTemplate</code> is called, a new version is created. Each version of the template maintains a description of the version in the <code>VersionDescription</code> field.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;
	}
	export interface CreateTemplatePostBodyFormProperties {

		/**
		 * A display name for the template.
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * A description of the current template version being created. This API operation creates the first version of the template. Every time <code>UpdateTemplate</code> is called, a new version is created. Each version of the template maintains a description of the version in the <code>VersionDescription</code> field.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription: FormControl<string | null | undefined>,
	}
	export function CreateCreateTemplatePostBodyFormGroup() {
		return new FormGroup<CreateTemplatePostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
			VersionDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface CreateTemplatePostBodySourceEntity {

		/** The source analysis of the template. */
		SourceAnalysis?: TemplateSourceAnalysis;

		/** The source template of the template. */
		SourceTemplate?: TemplateSourceTemplate;
	}
	export interface CreateTemplatePostBodySourceEntityFormProperties {
	}
	export function CreateCreateTemplatePostBodySourceEntityFormGroup() {
		return new FormGroup<CreateTemplatePostBodySourceEntityFormProperties>({
		});

	}

	export interface UpdateTemplatePutBody {

		/**
		 * The source entity of the template.
		 * Required
		 */
		SourceEntity: UpdateTemplatePutBodySourceEntity;

		/**
		 * A description of the current template version that is being updated. Every time you call <code>UpdateTemplate</code>, you create a new version of the template. Each version of the template maintains a description of the version in the <code>VersionDescription</code> field.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;

		/**
		 * The name for the template.
		 * Max length: 2048
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface UpdateTemplatePutBodyFormProperties {

		/**
		 * A description of the current template version that is being updated. Every time you call <code>UpdateTemplate</code>, you create a new version of the template. Each version of the template maintains a description of the version in the <code>VersionDescription</code> field.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription: FormControl<string | null | undefined>,

		/**
		 * The name for the template.
		 * Max length: 2048
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTemplatePutBodyFormGroup() {
		return new FormGroup<UpdateTemplatePutBodyFormProperties>({
			VersionDescription: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
		});

	}

	export interface UpdateTemplatePutBodySourceEntity {

		/** The source analysis of the template. */
		SourceAnalysis?: TemplateSourceAnalysis;

		/** The source template of the template. */
		SourceTemplate?: TemplateSourceTemplate;
	}
	export interface UpdateTemplatePutBodySourceEntityFormProperties {
	}
	export function CreateUpdateTemplatePutBodySourceEntityFormGroup() {
		return new FormGroup<UpdateTemplatePutBodySourceEntityFormProperties>({
		});

	}

	export interface CreateTemplateAliasPostBody {

		/**
		 * The version number of the template.
		 * Required
		 * Minimum: 1
		 */
		TemplateVersionNumber: number;
	}
	export interface CreateTemplateAliasPostBodyFormProperties {

		/**
		 * The version number of the template.
		 * Required
		 * Minimum: 1
		 */
		TemplateVersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateCreateTemplateAliasPostBodyFormGroup() {
		return new FormGroup<CreateTemplateAliasPostBodyFormProperties>({
			TemplateVersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface UpdateTemplateAliasPutBody {

		/**
		 * The version number of the template.
		 * Required
		 * Minimum: 1
		 */
		TemplateVersionNumber: number;
	}
	export interface UpdateTemplateAliasPutBodyFormProperties {

		/**
		 * The version number of the template.
		 * Required
		 * Minimum: 1
		 */
		TemplateVersionNumber: FormControl<number | null | undefined>,
	}
	export function CreateUpdateTemplateAliasPutBodyFormGroup() {
		return new FormGroup<UpdateTemplateAliasPutBodyFormProperties>({
			TemplateVersionNumber: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
		});

	}

	export interface UpdateDataSetPutBody {

		/**
		 * The display name for the dataset.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Declares the physical tables that are available in the underlying data sources.
		 * Required
		 */
		PhysicalTableMap: {[id: string]: PhysicalTable };

		/** Configures the combination and transformation of the data from the physical tables. */
		LogicalTableMap?: {[id: string]: LogicalTable };

		/**
		 * Indicates whether you want to import the data into SPICE.
		 * Required
		 */
		ImportMode: DataSetImportMode;

		/**
		 * Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.
		 * Minimum items: 1
		 * Maximum items: 8
		 */
		ColumnGroups?: Array<ColumnGroup>;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: UpdateDataSetPutBodyRowLevelPermissionDataSet;
	}
	export interface UpdateDataSetPutBodyFormProperties {

		/**
		 * The display name for the dataset.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Declares the physical tables that are available in the underlying data sources.
		 * Required
		 */
		PhysicalTableMap: FormControl<{[id: string]: PhysicalTable } | null | undefined>,

		/** Configures the combination and transformation of the data from the physical tables. */
		LogicalTableMap: FormControl<{[id: string]: LogicalTable } | null | undefined>,

		/**
		 * Indicates whether you want to import the data into SPICE.
		 * Required
		 */
		ImportMode: FormControl<DataSetImportMode | null | undefined>,
	}
	export function CreateUpdateDataSetPutBodyFormGroup() {
		return new FormGroup<UpdateDataSetPutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			PhysicalTableMap: new FormControl<{[id: string]: PhysicalTable } | null | undefined>(undefined, [Validators.required]),
			LogicalTableMap: new FormControl<{[id: string]: LogicalTable } | null | undefined>(undefined),
			ImportMode: new FormControl<DataSetImportMode | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDataSetPutBodyRowLevelPermissionDataSet {
		Arn?: string | null;
		PermissionPolicy?: RowLevelPermissionPolicy | null;
	}
	export interface UpdateDataSetPutBodyRowLevelPermissionDataSetFormProperties {
		Arn: FormControl<string | null | undefined>,
		PermissionPolicy: FormControl<RowLevelPermissionPolicy | null | undefined>,
	}
	export function CreateUpdateDataSetPutBodyRowLevelPermissionDataSetFormGroup() {
		return new FormGroup<UpdateDataSetPutBodyRowLevelPermissionDataSetFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			PermissionPolicy: new FormControl<RowLevelPermissionPolicy | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourcePutBody {

		/**
		 * A display name for the data source.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: string;

		/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
		DataSourceParameters?: UpdateDataSourcePutBodyDataSourceParameters;

		/** Data source credentials. */
		Credentials?: UpdateDataSourcePutBodyCredentials;

		/** VPC connection properties. */
		VpcConnectionProperties?: UpdateDataSourcePutBodyVpcConnectionProperties;

		/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
		SslProperties?: UpdateDataSourcePutBodySslProperties;
	}
	export interface UpdateDataSourcePutBodyFormProperties {

		/**
		 * A display name for the data source.
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourcePutBodyFormGroup() {
		return new FormGroup<UpdateDataSourcePutBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
		});

	}

	export interface UpdateDataSourcePutBodyDataSourceParameters {

		/** Amazon Elasticsearch Service parameters. */
		AmazonElasticsearchParameters?: AmazonElasticsearchParameters;

		/** Amazon Athena parameters. */
		AthenaParameters?: AthenaParameters;

		/** Amazon Aurora parameters. */
		AuroraParameters?: AuroraParameters;

		/** Amazon Aurora with PostgreSQL compatibility parameters. */
		AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters;

		/** AWS IoT Analytics parameters. */
		AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters;

		/** Jira parameters. */
		JiraParameters?: JiraParameters;

		/** MariaDB parameters. */
		MariaDbParameters?: MariaDbParameters;

		/** MySQL parameters. */
		MySqlParameters?: MySqlParameters;

		/** PostgreSQL parameters. */
		PostgreSqlParameters?: PostgreSqlParameters;

		/** Presto parameters. */
		PrestoParameters?: PrestoParameters;

		/** Amazon RDS parameters. */
		RdsParameters?: RdsParameters;

		/** Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set. */
		RedshiftParameters?: RedshiftParameters;

		/** S3 parameters. */
		S3Parameters?: S3Parameters;

		/** ServiceNow parameters. */
		ServiceNowParameters?: ServiceNowParameters;

		/** Snowflake parameters. */
		SnowflakeParameters?: SnowflakeParameters;

		/** Spark parameters. */
		SparkParameters?: SparkParameters;

		/** SQL Server parameters. */
		SqlServerParameters?: SqlServerParameters;

		/** Teradata parameters. */
		TeradataParameters?: TeradataParameters;

		/** Twitter parameters. */
		TwitterParameters?: TwitterParameters;
	}
	export interface UpdateDataSourcePutBodyDataSourceParametersFormProperties {
	}
	export function CreateUpdateDataSourcePutBodyDataSourceParametersFormGroup() {
		return new FormGroup<UpdateDataSourcePutBodyDataSourceParametersFormProperties>({
		});

	}

	export interface UpdateDataSourcePutBodyCredentials {

		/** The combination of user name and password that are used as credentials. */
		CredentialPair?: CredentialPair;
	}
	export interface UpdateDataSourcePutBodyCredentialsFormProperties {
	}
	export function CreateUpdateDataSourcePutBodyCredentialsFormGroup() {
		return new FormGroup<UpdateDataSourcePutBodyCredentialsFormProperties>({
		});

	}

	export interface UpdateDataSourcePutBodyVpcConnectionProperties {
		VpcConnectionArn?: string | null;
	}
	export interface UpdateDataSourcePutBodyVpcConnectionPropertiesFormProperties {
		VpcConnectionArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourcePutBodyVpcConnectionPropertiesFormGroup() {
		return new FormGroup<UpdateDataSourcePutBodyVpcConnectionPropertiesFormProperties>({
			VpcConnectionArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateDataSourcePutBodySslProperties {
		DisableSsl?: boolean | null;
	}
	export interface UpdateDataSourcePutBodySslPropertiesFormProperties {
		DisableSsl: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdateDataSourcePutBodySslPropertiesFormGroup() {
		return new FormGroup<UpdateDataSourcePutBodySslPropertiesFormProperties>({
			DisableSsl: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateGroupPutBody {

		/**
		 * The description for the group that you want to update.
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
	}
	export interface UpdateGroupPutBodyFormProperties {

		/**
		 * The description for the group that you want to update.
		 * Max length: 512
		 * Min length: 1
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateGroupPutBodyFormGroup() {
		return new FormGroup<UpdateGroupPutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512), Validators.minLength(1)]),
		});

	}

	export interface UpdateUserPutBody {

		/**
		 * The email address of the user that you want to update.
		 * Required
		 */
		Email: string;

		/**
		 * <p>The Amazon QuickSight role of the user. The user role can be one of the following:</p> <ul> <li> <p> <code>READER</code>: A user who has read-only access to dashboards.</p> </li> <li> <p> <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and dashboards.</p> </li> <li> <p> <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight settings.</p> </li> </ul>
		 * Required
		 */
		Role: UserRole;
	}
	export interface UpdateUserPutBodyFormProperties {

		/**
		 * The email address of the user that you want to update.
		 * Required
		 */
		Email: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon QuickSight role of the user. The user role can be one of the following:</p> <ul> <li> <p> <code>READER</code>: A user who has read-only access to dashboards.</p> </li> <li> <p> <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and dashboards.</p> </li> <li> <p> <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight settings.</p> </li> </ul>
		 * Required
		 */
		Role: FormControl<UserRole | null | undefined>,
	}
	export function CreateUpdateUserPutBodyFormGroup() {
		return new FormGroup<UpdateUserPutBodyFormProperties>({
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Role: new FormControl<UserRole | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateDashboardPermissionsPutBody {

		/**
		 * The permissions that you want to grant on this resource.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		GrantPermissions?: Array<ResourcePermission>;

		/**
		 * The permissions that you want to revoke from this resource.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		RevokePermissions?: Array<ResourcePermission>;
	}
	export interface UpdateDashboardPermissionsPutBodyFormProperties {
	}
	export function CreateUpdateDashboardPermissionsPutBodyFormGroup() {
		return new FormGroup<UpdateDashboardPermissionsPutBodyFormProperties>({
		});

	}

	export interface UpdateDataSetPermissionsPostBody {

		/**
		 * The resource permissions that you want to grant to the dataset.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		GrantPermissions?: Array<ResourcePermission>;

		/**
		 * The resource permissions that you want to revoke from the dataset.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		RevokePermissions?: Array<ResourcePermission>;
	}
	export interface UpdateDataSetPermissionsPostBodyFormProperties {
	}
	export function CreateUpdateDataSetPermissionsPostBodyFormGroup() {
		return new FormGroup<UpdateDataSetPermissionsPostBodyFormProperties>({
		});

	}

	export interface UpdateDataSourcePermissionsPostBody {

		/**
		 * A list of resource permissions that you want to grant on the data source.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		GrantPermissions?: Array<ResourcePermission>;

		/**
		 * A list of resource permissions that you want to revoke on the data source.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		RevokePermissions?: Array<ResourcePermission>;
	}
	export interface UpdateDataSourcePermissionsPostBodyFormProperties {
	}
	export function CreateUpdateDataSourcePermissionsPostBodyFormGroup() {
		return new FormGroup<UpdateDataSourcePermissionsPostBodyFormProperties>({
		});

	}

	export interface UpdateIAMPolicyAssignmentPutBody {

		/** <p>The status of the assignment. Possible values are as follows:</p> <ul> <li> <p> <code>ENABLED</code> - Anything specified in this assignment is used when creating the data source.</p> </li> <li> <p> <code>DISABLED</code> - This assignment isn't used when creating the data source.</p> </li> <li> <p> <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the data source.</p> </li> </ul> */
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;

		/** The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment. */
		PolicyArn?: string | null;

		/** The QuickSight users, groups, or both that you want to assign the policy to. */
		Identities?: {[id: string]: Array<string> };
	}
	export interface UpdateIAMPolicyAssignmentPutBodyFormProperties {

		/** <p>The status of the assignment. Possible values are as follows:</p> <ul> <li> <p> <code>ENABLED</code> - Anything specified in this assignment is used when creating the data source.</p> </li> <li> <p> <code>DISABLED</code> - This assignment isn't used when creating the data source.</p> </li> <li> <p> <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the data source.</p> </li> </ul> */
		AssignmentStatus: FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>,

		/** The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment. */
		PolicyArn: FormControl<string | null | undefined>,

		/** The QuickSight users, groups, or both that you want to assign the policy to. */
		Identities: FormControl<{[id: string]: Array<string> } | null | undefined>,
	}
	export function CreateUpdateIAMPolicyAssignmentPutBodyFormGroup() {
		return new FormGroup<UpdateIAMPolicyAssignmentPutBodyFormProperties>({
			AssignmentStatus: new FormControl<CreateIAMPolicyAssignmentResponseAssignmentStatus | null | undefined>(undefined),
			PolicyArn: new FormControl<string | null | undefined>(undefined),
			Identities: new FormControl<{[id: string]: Array<string> } | null | undefined>(undefined),
		});

	}

	export interface UpdateTemplatePermissionsPutBody {

		/**
		 * A list of resource permissions to be granted on the template.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		GrantPermissions?: Array<ResourcePermission>;

		/**
		 * A list of resource permissions to be revoked from the template.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		RevokePermissions?: Array<ResourcePermission>;
	}
	export interface UpdateTemplatePermissionsPutBodyFormProperties {
	}
	export function CreateUpdateTemplatePermissionsPutBodyFormGroup() {
		return new FormGroup<UpdateTemplatePermissionsPutBodyFormProperties>({
		});

	}

	export interface TagResourcePostBody {

		/**
		 * Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags: Array<Tag>;
	}
	export interface TagResourcePostBodyFormProperties {
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
		});

	}

	export interface RegisterUserPostBody {

		/**
		 * <p>Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts two values:</p> <ul> <li> <p> <code>IAM</code>: A user whose identity maps to an existing IAM user or role. </p> </li> <li> <p> <code>QUICKSIGHT</code>: A user whose identity is owned and managed internally by Amazon QuickSight. </p> </li> </ul>
		 * Required
		 */
		IdentityType: UserIdentityType;

		/**
		 * The email address of the user that you want to register.
		 * Required
		 */
		Email: string;

		/**
		 * <p>The Amazon QuickSight role for the user. The user role can be one of the following:</p> <ul> <li> <p> <code>READER</code>: A user who has read-only access to dashboards.</p> </li> <li> <p> <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and dashboards.</p> </li> <li> <p> <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight settings.</p> </li> <li> <p> <code>RESTRICTED_READER</code>: This role isn't currently available for use.</p> </li> <li> <p> <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for use.</p> </li> </ul>
		 * Required
		 */
		UserRole: UserRole;

		/** The ARN of the IAM user or role that you are registering with Amazon QuickSight. */
		IamArn?: string | null;

		/**
		 * You need to use this parameter only when you register one or more users using an assumed IAM role. You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon QuickSight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see <a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/assume-role.html"> <code>assume-role</code> </a> in the <i>AWS CLI Reference.</i>
		 * Max length: 64
		 * Min length: 2
		 */
		SessionName?: string | null;

		/**
		 * The Amazon QuickSight user name that you want to create for the user you are registering.
		 * Min length: 1
		 */
		UserName?: string | null;
	}
	export interface RegisterUserPostBodyFormProperties {

		/**
		 * <p>Amazon QuickSight supports several ways of managing the identity of users. This parameter accepts two values:</p> <ul> <li> <p> <code>IAM</code>: A user whose identity maps to an existing IAM user or role. </p> </li> <li> <p> <code>QUICKSIGHT</code>: A user whose identity is owned and managed internally by Amazon QuickSight. </p> </li> </ul>
		 * Required
		 */
		IdentityType: FormControl<UserIdentityType | null | undefined>,

		/**
		 * The email address of the user that you want to register.
		 * Required
		 */
		Email: FormControl<string | null | undefined>,

		/**
		 * <p>The Amazon QuickSight role for the user. The user role can be one of the following:</p> <ul> <li> <p> <code>READER</code>: A user who has read-only access to dashboards.</p> </li> <li> <p> <code>AUTHOR</code>: A user who can create data sources, datasets, analyses, and dashboards.</p> </li> <li> <p> <code>ADMIN</code>: A user who is an author, who can also manage Amazon QuickSight settings.</p> </li> <li> <p> <code>RESTRICTED_READER</code>: This role isn't currently available for use.</p> </li> <li> <p> <code>RESTRICTED_AUTHOR</code>: This role isn't currently available for use.</p> </li> </ul>
		 * Required
		 */
		UserRole: FormControl<UserRole | null | undefined>,

		/** The ARN of the IAM user or role that you are registering with Amazon QuickSight. */
		IamArn: FormControl<string | null | undefined>,

		/**
		 * You need to use this parameter only when you register one or more users using an assumed IAM role. You don't need to provide the session name for other scenarios, for example when you are registering an IAM user or an Amazon QuickSight user. You can register multiple users using the same IAM role if each user has a different session name. For more information on assuming IAM roles, see <a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/sts/assume-role.html"> <code>assume-role</code> </a> in the <i>AWS CLI Reference.</i>
		 * Max length: 64
		 * Min length: 2
		 */
		SessionName: FormControl<string | null | undefined>,

		/**
		 * The Amazon QuickSight user name that you want to create for the user you are registering.
		 * Min length: 1
		 */
		UserName: FormControl<string | null | undefined>,
	}
	export function CreateRegisterUserPostBodyFormGroup() {
		return new FormGroup<RegisterUserPostBodyFormProperties>({
			IdentityType: new FormControl<UserIdentityType | null | undefined>(undefined, [Validators.required]),
			Email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			UserRole: new FormControl<UserRole | null | undefined>(undefined, [Validators.required]),
			IamArn: new FormControl<string | null | undefined>(undefined),
			SessionName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(2), Validators.pattern('[\w+=.@-]*')]),
			UserName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.pattern('[\u0020-\u00FF]+')]),
		});

	}

	export interface SearchDashboardsPostBody {

		/**
		 * The filters to apply to the search. Currently, you can search only by user name. For example, <code>"Filters": [ { "Name": "QUICKSIGHT_USER", "Operator": "StringEquals", "Value": "arn:aws:quicksight:us-east-1:1:user/default/UserName1" } ]</code>
		 * Required
		 * Maximum items: 1
		 */
		Filters: Array<DashboardSearchFilter>;

		/** The token for the next set of results, or null if there are no more results. */
		NextToken?: string | null;

		/**
		 * The maximum number of results to be returned per request.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}
	export interface SearchDashboardsPostBodyFormProperties {

		/** The token for the next set of results, or null if there are no more results. */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * The maximum number of results to be returned per request.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults: FormControl<number | null | undefined>,
	}
	export function CreateSearchDashboardsPostBodyFormGroup() {
		return new FormGroup<SearchDashboardsPostBodyFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

}

