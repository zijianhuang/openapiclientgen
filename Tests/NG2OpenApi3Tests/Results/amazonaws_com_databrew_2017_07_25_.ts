import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface BatchDeleteRecipeVersionResponse {

		/** Required */
		Name: string;
		Errors?: Array<RecipeVersionErrorDetail>;
	}
	export interface BatchDeleteRecipeVersionResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateBatchDeleteRecipeVersionResponseFormGroup() {
		return new FormGroup<BatchDeleteRecipeVersionResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents any errors encountered when attempting to delete multiple recipe versions. */
	export interface RecipeVersionErrorDetail {
		ErrorCode?: string;
		ErrorMessage?: string;
		RecipeVersion?: string;
	}

	/** Represents any errors encountered when attempting to delete multiple recipe versions. */
	export interface RecipeVersionErrorDetailFormProperties {
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		RecipeVersion: FormControl<string | null | undefined>,
	}
	export function CreateRecipeVersionErrorDetailFormGroup() {
		return new FormGroup<RecipeVersionErrorDetailFormProperties>({
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			RecipeVersion: new FormControl<string | null | undefined>(undefined),
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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface CreateDatasetResponse {

		/** Required */
		Name: string;
	}
	export interface CreateDatasetResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateDatasetResponseFormGroup() {
		return new FormGroup<CreateDatasetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the JSON-specific options that define how input is to be interpreted by Glue DataBrew. */
	export interface JsonOptions {
		MultiLine?: boolean | null;
	}

	/** Represents the JSON-specific options that define how input is to be interpreted by Glue DataBrew. */
	export interface JsonOptionsFormProperties {
		MultiLine: FormControl<boolean | null | undefined>,
	}
	export function CreateJsonOptionsFormGroup() {
		return new FormGroup<JsonOptionsFormProperties>({
			MultiLine: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when creating a dataset from that file. */
	export interface ExcelOptions {
		SheetNames?: Array<string>;
		SheetIndexes?: Array<number> | null;
		HeaderRow?: boolean | null;
	}

	/** Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when creating a dataset from that file. */
	export interface ExcelOptionsFormProperties {
		HeaderRow: FormControl<boolean | null | undefined>,
	}
	export function CreateExcelOptionsFormGroup() {
		return new FormGroup<ExcelOptionsFormProperties>({
			HeaderRow: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a set of options that define how DataBrew will read a comma-separated value (CSV) file when creating a dataset from that file. */
	export interface CsvOptions {
		Delimiter?: string;
		HeaderRow?: boolean | null;
	}

	/** Represents a set of options that define how DataBrew will read a comma-separated value (CSV) file when creating a dataset from that file. */
	export interface CsvOptionsFormProperties {
		Delimiter: FormControl<string | null | undefined>,
		HeaderRow: FormControl<boolean | null | undefined>,
	}
	export function CreateCsvOptionsFormGroup() {
		return new FormGroup<CsvOptionsFormProperties>({
			Delimiter: new FormControl<string | null | undefined>(undefined),
			HeaderRow: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job. */
	export interface S3Location {

		/** Required */
		Bucket: string;
		Key?: string;
		BucketOwner?: string;
	}

	/** Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job. */
	export interface S3LocationFormProperties {

		/** Required */
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		BucketOwner: FormControl<string | null | undefined>,
	}
	export function CreateS3LocationFormGroup() {
		return new FormGroup<S3LocationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined),
			BucketOwner: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents how metadata stored in the Glue Data Catalog is defined in a DataBrew dataset.  */
	export interface DataCatalogInputDefinition {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		TempDirectory?: S3Location;
	}

	/** Represents how metadata stored in the Glue Data Catalog is defined in a DataBrew dataset.  */
	export interface DataCatalogInputDefinitionFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDataCatalogInputDefinitionFormGroup() {
		return new FormGroup<DataCatalogInputDefinitionFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Connection information for dataset input files stored in a database. */
	export interface DatabaseInputDefinition {

		/** Required */
		GlueConnectionName: string;
		DatabaseTableName?: string;

		/** Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job. */
		TempDirectory?: S3Location;
		QueryString?: string;
	}

	/** Connection information for dataset input files stored in a database. */
	export interface DatabaseInputDefinitionFormProperties {

		/** Required */
		GlueConnectionName: FormControl<string | null | undefined>,
		DatabaseTableName: FormControl<string | null | undefined>,
		QueryString: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseInputDefinitionFormGroup() {
		return new FormGroup<DatabaseInputDefinitionFormProperties>({
			GlueConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseTableName: new FormControl<string | null | undefined>(undefined),
			QueryString: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains additional resource information needed for specific datasets. */
	export interface Metadata {
		SourceArn?: string;
	}

	/** Contains additional resource information needed for specific datasets. */
	export interface MetadataFormProperties {
		SourceArn: FormControl<string | null | undefined>,
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
			SourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a structure for defining parameter conditions. Supported conditions are described here: <a href="https://docs.aws.amazon.com/databrew/latest/dg/datasets.multiple-files.html#conditions.for.dynamic.datasets">Supported conditions for dynamic datasets</a> in the <i>Glue DataBrew Developer Guide</i>. */
	export interface FilterExpression {

		/** Required */
		Expression: string;

		/** Required */
		ValuesMap: ValuesMap;
	}

	/** Represents a structure for defining parameter conditions. Supported conditions are described here: <a href="https://docs.aws.amazon.com/databrew/latest/dg/datasets.multiple-files.html#conditions.for.dynamic.datasets">Supported conditions for dynamic datasets</a> in the <i>Glue DataBrew Developer Guide</i>. */
	export interface FilterExpressionFormProperties {

		/** Required */
		Expression: FormControl<string | null | undefined>,
	}
	export function CreateFilterExpressionFormGroup() {
		return new FormGroup<FilterExpressionFormProperties>({
			Expression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ValuesMap {
	}
	export interface ValuesMapFormProperties {
	}
	export function CreateValuesMapFormGroup() {
		return new FormGroup<ValuesMapFormProperties>({
		});

	}


	/** Represents a limit imposed on number of Amazon S3 files that should be selected for a dataset from a connected Amazon S3 path. */
	export interface FilesLimit {

		/** Required */
		MaxFiles: number;
		OrderedBy?: OrderedBy;
		Order?: Order;
	}

	/** Represents a limit imposed on number of Amazon S3 files that should be selected for a dataset from a connected Amazon S3 path. */
	export interface FilesLimitFormProperties {

		/** Required */
		MaxFiles: FormControl<number | null | undefined>,
		OrderedBy: FormControl<OrderedBy | null | undefined>,
		Order: FormControl<Order | null | undefined>,
	}
	export function CreateFilesLimitFormGroup() {
		return new FormGroup<FilesLimitFormProperties>({
			MaxFiles: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			OrderedBy: new FormControl<OrderedBy | null | undefined>(undefined),
			Order: new FormControl<Order | null | undefined>(undefined),
		});

	}

	export enum OrderedBy { LAST_MODIFIED_DATE = 0 }

	export enum Order { DESCENDING = 0, ASCENDING = 1 }


	/** A structure that map names of parameters used in the Amazon S3 path of a dataset to their definitions. A definition includes parameter type and conditions. */
	export interface PathParametersMap {
	}

	/** A structure that map names of parameters used in the Amazon S3 path of a dataset to their definitions. A definition includes parameter type and conditions. */
	export interface PathParametersMapFormProperties {
	}
	export function CreatePathParametersMapFormGroup() {
		return new FormGroup<PathParametersMapFormProperties>({
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

	export interface ServiceQuotaExceededException {
	}
	export interface ServiceQuotaExceededExceptionFormProperties {
	}
	export function CreateServiceQuotaExceededExceptionFormGroup() {
		return new FormGroup<ServiceQuotaExceededExceptionFormProperties>({
		});

	}

	export interface CreateProfileJobResponse {

		/** Required */
		Name: string;
	}
	export interface CreateProfileJobResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileJobResponseFormGroup() {
		return new FormGroup<CreateProfileJobResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Configuration of evaluations for a profile job. This configuration can be used to select evaluations and override the parameters of selected evaluations.  */
	export interface StatisticsConfiguration {
		IncludedStatistics?: Array<string>;
		Overrides?: Array<StatisticOverride>;
	}

	/** Configuration of evaluations for a profile job. This configuration can be used to select evaluations and override the parameters of selected evaluations.  */
	export interface StatisticsConfigurationFormProperties {
	}
	export function CreateStatisticsConfigurationFormGroup() {
		return new FormGroup<StatisticsConfigurationFormProperties>({
		});

	}


	/** Override of a particular evaluation for a profile job.  */
	export interface StatisticOverride {

		/** Required */
		Statistic: string;

		/** Required */
		Parameters: ParameterMap;
	}

	/** Override of a particular evaluation for a profile job.  */
	export interface StatisticOverrideFormProperties {

		/** Required */
		Statistic: FormControl<string | null | undefined>,
	}
	export function CreateStatisticOverrideFormGroup() {
		return new FormGroup<StatisticOverrideFormProperties>({
			Statistic: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ParameterMap {
	}
	export interface ParameterMapFormProperties {
	}
	export function CreateParameterMapFormGroup() {
		return new FormGroup<ParameterMapFormProperties>({
		});

	}


	/** Selector of a column from a dataset for profile job configuration. One selector includes either a column name or a regular expression. */
	export interface ColumnSelector {
		Regex?: string;
		Name?: string;
	}

	/** Selector of a column from a dataset for profile job configuration. One selector includes either a column name or a regular expression. */
	export interface ColumnSelectorFormProperties {
		Regex: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateColumnSelectorFormGroup() {
		return new FormGroup<ColumnSelectorFormProperties>({
			Regex: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configuration for column evaluations for a profile job. ColumnStatisticsConfiguration can be used to select evaluations and override parameters of evaluations for particular columns.  */
	export interface ColumnStatisticsConfiguration {
		Selectors?: Array<ColumnSelector>;

		/** Required */
		Statistics: StatisticsConfiguration;
	}

	/** Configuration for column evaluations for a profile job. ColumnStatisticsConfiguration can be used to select evaluations and override parameters of evaluations for particular columns.  */
	export interface ColumnStatisticsConfigurationFormProperties {
	}
	export function CreateColumnStatisticsConfigurationFormGroup() {
		return new FormGroup<ColumnStatisticsConfigurationFormProperties>({
		});

	}


	/** Configuration of entity detection for a profile job. When undefined, entity detection is disabled. */
	export interface EntityDetectorConfiguration {

		/** Required */
		EntityTypes: Array<string>;
		AllowedStatistics?: Array<AllowedStatistics>;
	}

	/** Configuration of entity detection for a profile job. When undefined, entity detection is disabled. */
	export interface EntityDetectorConfigurationFormProperties {
	}
	export function CreateEntityDetectorConfigurationFormGroup() {
		return new FormGroup<EntityDetectorConfigurationFormProperties>({
		});

	}


	/** Configuration of statistics that are allowed to be run on columns that contain detected entities. When undefined, no statistics will be computed on columns that contain detected entities. */
	export interface AllowedStatistics {

		/** Required */
		Statistics: Array<string>;
	}

	/** Configuration of statistics that are allowed to be run on columns that contain detected entities. When undefined, no statistics will be computed on columns that contain detected entities. */
	export interface AllowedStatisticsFormProperties {
	}
	export function CreateAllowedStatisticsFormGroup() {
		return new FormGroup<AllowedStatisticsFormProperties>({
		});

	}


	/** Configuration for data quality validation. Used to select the Rulesets and Validation Mode to be used in the profile job. When ValidationConfiguration is null, the profile job will run without data quality validation. */
	export interface ValidationConfiguration {

		/** Required */
		RulesetArn: string;
		ValidationMode?: ValidationMode;
	}

	/** Configuration for data quality validation. Used to select the Rulesets and Validation Mode to be used in the profile job. When ValidationConfiguration is null, the profile job will run without data quality validation. */
	export interface ValidationConfigurationFormProperties {

		/** Required */
		RulesetArn: FormControl<string | null | undefined>,
		ValidationMode: FormControl<ValidationMode | null | undefined>,
	}
	export function CreateValidationConfigurationFormGroup() {
		return new FormGroup<ValidationConfigurationFormProperties>({
			RulesetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ValidationMode: new FormControl<ValidationMode | null | undefined>(undefined),
		});

	}

	export enum ValidationMode { CHECK_ALL = 0 }

	export enum SampleMode { FULL_DATASET = 0, CUSTOM_ROWS = 1 }

	export interface CreateProjectResponse {

		/** Required */
		Name: string;
	}
	export interface CreateProjectResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectResponseFormGroup() {
		return new FormGroup<CreateProjectResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SampleType { FIRST_N = 0, LAST_N = 1, RANDOM = 2 }

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface CreateRecipeResponse {

		/** Required */
		Name: string;
	}
	export interface CreateRecipeResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateRecipeResponseFormGroup() {
		return new FormGroup<CreateRecipeResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a single step from a DataBrew recipe to be performed. */
	export interface RecipeStep {

		/** Required */
		Action: RecipeAction;
		ConditionExpressions?: Array<ConditionExpression>;
	}

	/** Represents a single step from a DataBrew recipe to be performed. */
	export interface RecipeStepFormProperties {
	}
	export function CreateRecipeStepFormGroup() {
		return new FormGroup<RecipeStepFormProperties>({
		});

	}


	/** Represents a transformation and associated parameters that are used to apply a change to a DataBrew dataset. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html">Recipe actions reference</a>. */
	export interface RecipeAction {

		/** Required */
		Operation: string;
		Parameters?: ParameterMap;
	}

	/** Represents a transformation and associated parameters that are used to apply a change to a DataBrew dataset. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html">Recipe actions reference</a>. */
	export interface RecipeActionFormProperties {

		/** Required */
		Operation: FormControl<string | null | undefined>,
	}
	export function CreateRecipeActionFormGroup() {
		return new FormGroup<RecipeActionFormProperties>({
			Operation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** <p>Represents an individual condition that evaluates to true or false.</p> <p>Conditions are used with recipe actions. The action is only performed for column values where the condition evaluates to true.</p> <p>If a recipe requires more than one condition, then the recipe must specify multiple <code>ConditionExpression</code> elements. Each condition is applied to the rows in a dataset first, before the recipe action is performed.</p> */
	export interface ConditionExpression {

		/** Required */
		Condition: string;
		Value?: string;

		/** Required */
		TargetColumn: string;
	}

	/** <p>Represents an individual condition that evaluates to true or false.</p> <p>Conditions are used with recipe actions. The action is only performed for column values where the condition evaluates to true.</p> <p>If a recipe requires more than one condition, then the recipe must specify multiple <code>ConditionExpression</code> elements. Each condition is applied to the rows in a dataset first, before the recipe action is performed.</p> */
	export interface ConditionExpressionFormProperties {

		/** Required */
		Condition: FormControl<string | null | undefined>,
		Value: FormControl<string | null | undefined>,

		/** Required */
		TargetColumn: FormControl<string | null | undefined>,
	}
	export function CreateConditionExpressionFormGroup() {
		return new FormGroup<ConditionExpressionFormProperties>({
			Condition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined),
			TargetColumn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRecipeJobResponse {

		/** Required */
		Name: string;
	}
	export interface CreateRecipeJobResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateRecipeJobResponseFormGroup() {
		return new FormGroup<CreateRecipeJobResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents options that specify how and where in Amazon S3 DataBrew writes the output generated by recipe jobs or profile jobs. */
	export interface Output {
		CompressionFormat?: CompressionFormat;
		Format?: OutputFormat;
		PartitionColumns?: Array<string>;

		/** Required */
		Location: S3Location;
		Overwrite?: boolean | null;
		FormatOptions?: OutputFormatOptions;
		MaxOutputFiles?: number | null;
	}

	/** Represents options that specify how and where in Amazon S3 DataBrew writes the output generated by recipe jobs or profile jobs. */
	export interface OutputFormProperties {
		CompressionFormat: FormControl<CompressionFormat | null | undefined>,
		Format: FormControl<OutputFormat | null | undefined>,
		Overwrite: FormControl<boolean | null | undefined>,
		MaxOutputFiles: FormControl<number | null | undefined>,
	}
	export function CreateOutputFormGroup() {
		return new FormGroup<OutputFormProperties>({
			CompressionFormat: new FormControl<CompressionFormat | null | undefined>(undefined),
			Format: new FormControl<OutputFormat | null | undefined>(undefined),
			Overwrite: new FormControl<boolean | null | undefined>(undefined),
			MaxOutputFiles: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CompressionFormat { GZIP = 0, LZ4 = 1, SNAPPY = 2, BZIP2 = 3, DEFLATE = 4, LZO = 5, BROTLI = 6, ZSTD = 7, ZLIB = 8 }

	export enum OutputFormat { CSV = 0, JSON = 1, PARQUET = 2, GLUEPARQUET = 3, AVRO = 4, ORC = 5, XML = 6, TABLEAUHYPER = 7 }


	/** Represents a set of options that define the structure of comma-separated (CSV) job output. */
	export interface OutputFormatOptions {
		Csv?: CsvOutputOptions;
	}

	/** Represents a set of options that define the structure of comma-separated (CSV) job output. */
	export interface OutputFormatOptionsFormProperties {
	}
	export function CreateOutputFormatOptionsFormGroup() {
		return new FormGroup<OutputFormatOptionsFormProperties>({
		});

	}


	/** Represents a set of options that define how DataBrew will write a comma-separated value (CSV) file. */
	export interface CsvOutputOptions {
		Delimiter?: string;
	}

	/** Represents a set of options that define how DataBrew will write a comma-separated value (CSV) file. */
	export interface CsvOutputOptionsFormProperties {
		Delimiter: FormControl<string | null | undefined>,
	}
	export function CreateCsvOutputOptionsFormGroup() {
		return new FormGroup<CsvOutputOptionsFormProperties>({
			Delimiter: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents options that specify how and where in the Glue Data Catalog DataBrew writes the output generated by recipe jobs. */
	export interface DataCatalogOutput {
		CatalogId?: string;

		/** Required */
		DatabaseName: string;

		/** Required */
		TableName: string;
		S3Options?: S3TableOutputOptions;
		DatabaseOptions?: DatabaseTableOutputOptions;
		Overwrite?: boolean | null;
	}

	/** Represents options that specify how and where in the Glue Data Catalog DataBrew writes the output generated by recipe jobs. */
	export interface DataCatalogOutputFormProperties {
		CatalogId: FormControl<string | null | undefined>,

		/** Required */
		DatabaseName: FormControl<string | null | undefined>,

		/** Required */
		TableName: FormControl<string | null | undefined>,
		Overwrite: FormControl<boolean | null | undefined>,
	}
	export function CreateDataCatalogOutputFormGroup() {
		return new FormGroup<DataCatalogOutputFormProperties>({
			CatalogId: new FormControl<string | null | undefined>(undefined),
			DatabaseName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Overwrite: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs. */
	export interface S3TableOutputOptions {

		/** Required */
		Location: S3Location;
	}

	/** Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs. */
	export interface S3TableOutputOptionsFormProperties {
	}
	export function CreateS3TableOutputOptionsFormGroup() {
		return new FormGroup<S3TableOutputOptionsFormProperties>({
		});

	}


	/** Represents options that specify how and where DataBrew writes the database output generated by recipe jobs. */
	export interface DatabaseTableOutputOptions {
		TempDirectory?: S3Location;

		/** Required */
		TableName: string;
	}

	/** Represents options that specify how and where DataBrew writes the database output generated by recipe jobs. */
	export interface DatabaseTableOutputOptionsFormProperties {

		/** Required */
		TableName: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseTableOutputOptionsFormGroup() {
		return new FormGroup<DatabaseTableOutputOptionsFormProperties>({
			TableName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a JDBC database output object which defines the output destination for a DataBrew recipe job to write into. */
	export interface DatabaseOutput {

		/** Required */
		GlueConnectionName: string;

		/** Required */
		DatabaseOptions: DatabaseTableOutputOptions;
		DatabaseOutputMode?: DatabaseOutputMode;
	}

	/** Represents a JDBC database output object which defines the output destination for a DataBrew recipe job to write into. */
	export interface DatabaseOutputFormProperties {

		/** Required */
		GlueConnectionName: FormControl<string | null | undefined>,
		DatabaseOutputMode: FormControl<DatabaseOutputMode | null | undefined>,
	}
	export function CreateDatabaseOutputFormGroup() {
		return new FormGroup<DatabaseOutputFormProperties>({
			GlueConnectionName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DatabaseOutputMode: new FormControl<DatabaseOutputMode | null | undefined>(undefined),
		});

	}

	export enum DatabaseOutputMode { NEW_TABLE = 0 }

	export interface CreateRulesetResponse {

		/** Required */
		Name: string;
	}
	export interface CreateRulesetResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateRulesetResponseFormGroup() {
		return new FormGroup<CreateRulesetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents a single data quality requirement that should be validated in the scope of this dataset. */
	export interface Rule {

		/** Required */
		Name: string;
		Disabled?: boolean | null;

		/** Required */
		CheckExpression: string;
		SubstitutionMap?: ValuesMap;
		Threshold?: Threshold;
		ColumnSelectors?: Array<ColumnSelector>;
	}

	/** Represents a single data quality requirement that should be validated in the scope of this dataset. */
	export interface RuleFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Disabled: FormControl<boolean | null | undefined>,

		/** Required */
		CheckExpression: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Disabled: new FormControl<boolean | null | undefined>(undefined),
			CheckExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The threshold used with a non-aggregate check expression. The non-aggregate check expression will be applied to each row in a specific column. Then the threshold will be used to determine whether the validation succeeds. */
	export interface Threshold {

		/** Required */
		Value: number;
		Type?: ThresholdType;
		Unit?: ThresholdUnit;
	}

	/** The threshold used with a non-aggregate check expression. The non-aggregate check expression will be applied to each row in a specific column. Then the threshold will be used to determine whether the validation succeeds. */
	export interface ThresholdFormProperties {

		/** Required */
		Value: FormControl<number | null | undefined>,
		Type: FormControl<ThresholdType | null | undefined>,
		Unit: FormControl<ThresholdUnit | null | undefined>,
	}
	export function CreateThresholdFormGroup() {
		return new FormGroup<ThresholdFormProperties>({
			Value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ThresholdType | null | undefined>(undefined),
			Unit: new FormControl<ThresholdUnit | null | undefined>(undefined),
		});

	}

	export enum ThresholdType { GREATER_THAN_OR_EQUAL = 0, LESS_THAN_OR_EQUAL = 1, GREATER_THAN = 2, LESS_THAN = 3 }

	export enum ThresholdUnit { COUNT = 0, PERCENTAGE = 1 }

	export interface CreateScheduleResponse {

		/** Required */
		Name: string;
	}
	export interface CreateScheduleResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateScheduleResponseFormGroup() {
		return new FormGroup<CreateScheduleResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDatasetResponse {

		/** Required */
		Name: string;
	}
	export interface DeleteDatasetResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDatasetResponseFormGroup() {
		return new FormGroup<DeleteDatasetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteJobResponse {

		/** Required */
		Name: string;
	}
	export interface DeleteJobResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteJobResponseFormGroup() {
		return new FormGroup<DeleteJobResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteProjectResponse {

		/** Required */
		Name: string;
	}
	export interface DeleteProjectResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteProjectResponseFormGroup() {
		return new FormGroup<DeleteProjectResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRecipeVersionResponse {

		/** Required */
		Name: string;

		/** Required */
		RecipeVersion: string;
	}
	export interface DeleteRecipeVersionResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RecipeVersion: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRecipeVersionResponseFormGroup() {
		return new FormGroup<DeleteRecipeVersionResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecipeVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteRulesetResponse {

		/** Required */
		Name: string;
	}
	export interface DeleteRulesetResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteRulesetResponseFormGroup() {
		return new FormGroup<DeleteRulesetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteScheduleResponse {

		/** Required */
		Name: string;
	}
	export interface DeleteScheduleResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteScheduleResponseFormGroup() {
		return new FormGroup<DeleteScheduleResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DescribeDatasetResponse {
		CreatedBy?: string;
		CreateDate?: Date;

		/** Required */
		Name: string;
		Format?: InputFormat;

		/** Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input. */
		FormatOptions?: FormatOptions;

		/**
		 * Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.
		 * Required
		 */
		Input: Input;
		LastModifiedDate?: Date;
		LastModifiedBy?: string;
		Source?: Source;
		PathOptions?: PathOptions;
		Tags?: TagMap;
		ResourceArn?: string;
	}
	export interface DescribeDatasetResponseFormProperties {
		CreatedBy: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Format: FormControl<InputFormat | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		Source: FormControl<Source | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeDatasetResponseFormGroup() {
		return new FormGroup<DescribeDatasetResponseFormProperties>({
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<InputFormat | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<Source | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InputFormat { CSV = 0, JSON = 1, PARQUET = 2, EXCEL = 3, ORC = 4 }


	/** Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input. */
	export interface FormatOptions {
		Json?: JsonOptions;
		Excel?: ExcelOptions;
		Csv?: CsvOptions;
	}

	/** Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input. */
	export interface FormatOptionsFormProperties {
	}
	export function CreateFormatOptionsFormGroup() {
		return new FormGroup<FormatOptionsFormProperties>({
		});

	}


	/** Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3. */
	export interface Input {
		S3InputDefinition?: S3Location;
		DataCatalogInputDefinition?: DataCatalogInputDefinition;
		DatabaseInputDefinition?: DatabaseInputDefinition;
		Metadata?: Metadata;
	}

	/** Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3. */
	export interface InputFormProperties {
	}
	export function CreateInputFormGroup() {
		return new FormGroup<InputFormProperties>({
		});

	}

	export enum Source { S3 = 0, 'DATA-CATALOG' = 1, DATABASE = 2 }


	/** Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset. */
	export interface PathOptions {
		LastModifiedDateCondition?: FilterExpression;
		FilesLimit?: FilesLimit;
		Parameters?: PathParametersMap;
	}

	/** Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset. */
	export interface PathOptionsFormProperties {
	}
	export function CreatePathOptionsFormGroup() {
		return new FormGroup<PathOptionsFormProperties>({
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

	export interface DescribeJobResponse {
		CreateDate?: Date;
		CreatedBy?: string;
		DatasetName?: string;
		EncryptionKeyArn?: string;
		EncryptionMode?: EncryptionMode;

		/** Required */
		Name: string;
		Type?: JobType;
		LastModifiedBy?: string;
		LastModifiedDate?: Date;
		LogSubscription?: LogSubscription;
		MaxCapacity?: number | null;
		MaxRetries?: number | null;
		Outputs?: Array<Output>;
		DataCatalogOutputs?: Array<DataCatalogOutput>;
		DatabaseOutputs?: Array<DatabaseOutput>;
		ProjectName?: string;
		ProfileConfiguration?: ProfileConfiguration;
		ValidationConfigurations?: Array<ValidationConfiguration>;

		/** Represents the name and version of a DataBrew recipe. */
		RecipeReference?: RecipeReference;
		ResourceArn?: string;
		RoleArn?: string;
		Tags?: TagMap;
		Timeout?: number | null;
		JobSample?: JobSample;
	}
	export interface DescribeJobResponseFormProperties {
		CreateDate: FormControl<Date | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<JobType | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LogSubscription: FormControl<LogSubscription | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
		ProjectName: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateDescribeJobResponseFormGroup() {
		return new FormGroup<DescribeJobResponseFormProperties>({
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<JobType | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			ProjectName: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum EncryptionMode { 'SSE-KMS' = 0, 'SSE-S3' = 1 }

	export enum JobType { PROFILE = 0, RECIPE = 1 }

	export enum LogSubscription { ENABLE = 0, DISABLE = 1 }


	/** Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.  */
	export interface ProfileConfiguration {
		DatasetStatisticsConfiguration?: StatisticsConfiguration;
		ProfileColumns?: Array<ColumnSelector>;
		ColumnStatisticsConfigurations?: Array<ColumnStatisticsConfiguration>;
		EntityDetectorConfiguration?: EntityDetectorConfiguration;
	}

	/** Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.  */
	export interface ProfileConfigurationFormProperties {
	}
	export function CreateProfileConfigurationFormGroup() {
		return new FormGroup<ProfileConfigurationFormProperties>({
		});

	}


	/** Represents the name and version of a DataBrew recipe. */
	export interface RecipeReference {

		/** Required */
		Name: string;
		RecipeVersion?: string;
	}

	/** Represents the name and version of a DataBrew recipe. */
	export interface RecipeReferenceFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		RecipeVersion: FormControl<string | null | undefined>,
	}
	export function CreateRecipeReferenceFormGroup() {
		return new FormGroup<RecipeReferenceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecipeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter. */
	export interface JobSample {
		Mode?: SampleMode;
		Size?: number | null;
	}

	/** A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter. */
	export interface JobSampleFormProperties {
		Mode: FormControl<SampleMode | null | undefined>,
		Size: FormControl<number | null | undefined>,
	}
	export function CreateJobSampleFormGroup() {
		return new FormGroup<JobSampleFormProperties>({
			Mode: new FormControl<SampleMode | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DescribeJobRunResponse {
		Attempt?: number | null;
		CompletedOn?: Date;
		DatasetName?: string;
		ErrorMessage?: string;
		ExecutionTime?: number | null;

		/** Required */
		JobName: string;
		ProfileConfiguration?: ProfileConfiguration;
		ValidationConfigurations?: Array<ValidationConfiguration>;
		RunId?: string;
		State?: JobRunState;
		LogSubscription?: LogSubscription;
		LogGroupName?: string;
		Outputs?: Array<Output>;
		DataCatalogOutputs?: Array<DataCatalogOutput>;
		DatabaseOutputs?: Array<DatabaseOutput>;

		/** Represents the name and version of a DataBrew recipe. */
		RecipeReference?: RecipeReference;
		StartedBy?: string;
		StartedOn?: Date;
		JobSample?: JobSample;
	}
	export interface DescribeJobRunResponseFormProperties {
		Attempt: FormControl<number | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,

		/** Required */
		JobName: FormControl<string | null | undefined>,
		RunId: FormControl<string | null | undefined>,
		State: FormControl<JobRunState | null | undefined>,
		LogSubscription: FormControl<LogSubscription | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,
		StartedBy: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeJobRunResponseFormGroup() {
		return new FormGroup<DescribeJobRunResponseFormProperties>({
			Attempt: new FormControl<number | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ExecutionTime: new FormControl<number | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RunId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<JobRunState | null | undefined>(undefined),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			StartedBy: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum JobRunState { STARTING = 0, RUNNING = 1, STOPPING = 2, STOPPED = 3, SUCCEEDED = 4, FAILED = 5, TIMEOUT = 6 }

	export interface DescribeProjectResponse {
		CreateDate?: Date;
		CreatedBy?: string;
		DatasetName?: string;
		LastModifiedDate?: Date;
		LastModifiedBy?: string;

		/** Required */
		Name: string;
		RecipeName?: string;
		ResourceArn?: string;

		/** Represents the sample size and sampling type for DataBrew to use for interactive data analysis. */
		Sample?: Sample;
		RoleArn?: string;
		Tags?: TagMap;
		SessionStatus?: SessionStatus;
		OpenedBy?: string;
		OpenDate?: Date;
	}
	export interface DescribeProjectResponseFormProperties {
		CreateDate: FormControl<Date | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		RecipeName: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		SessionStatus: FormControl<SessionStatus | null | undefined>,
		OpenedBy: FormControl<string | null | undefined>,
		OpenDate: FormControl<Date | null | undefined>,
	}
	export function CreateDescribeProjectResponseFormGroup() {
		return new FormGroup<DescribeProjectResponseFormProperties>({
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecipeName: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			SessionStatus: new FormControl<SessionStatus | null | undefined>(undefined),
			OpenedBy: new FormControl<string | null | undefined>(undefined),
			OpenDate: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the sample size and sampling type for DataBrew to use for interactive data analysis. */
	export interface Sample {
		Size?: number | null;

		/** Required */
		Type: SampleType;
	}

	/** Represents the sample size and sampling type for DataBrew to use for interactive data analysis. */
	export interface SampleFormProperties {
		Size: FormControl<number | null | undefined>,

		/** Required */
		Type: FormControl<SampleType | null | undefined>,
	}
	export function CreateSampleFormGroup() {
		return new FormGroup<SampleFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<SampleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SessionStatus { ASSIGNED = 0, FAILED = 1, INITIALIZING = 2, PROVISIONING = 3, READY = 4, RECYCLING = 5, ROTATING = 6, TERMINATED = 7, TERMINATING = 8, UPDATING = 9 }

	export interface DescribeRecipeResponse {
		CreatedBy?: string;
		CreateDate?: Date;
		LastModifiedBy?: string;
		LastModifiedDate?: Date;
		ProjectName?: string;
		PublishedBy?: string;
		PublishedDate?: Date;
		Description?: string;

		/** Required */
		Name: string;
		Steps?: Array<RecipeStep>;
		Tags?: TagMap;
		ResourceArn?: string;
		RecipeVersion?: string;
	}
	export interface DescribeRecipeResponseFormProperties {
		CreatedBy: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		ProjectName: FormControl<string | null | undefined>,
		PublishedBy: FormControl<string | null | undefined>,
		PublishedDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		RecipeVersion: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRecipeResponseFormGroup() {
		return new FormGroup<DescribeRecipeResponseFormProperties>({
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			ProjectName: new FormControl<string | null | undefined>(undefined),
			PublishedBy: new FormControl<string | null | undefined>(undefined),
			PublishedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			RecipeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeRulesetResponse {

		/** Required */
		Name: string;
		Description?: string;
		TargetArn?: string;
		Rules?: Array<Rule>;
		CreateDate?: Date;
		CreatedBy?: string;
		LastModifiedBy?: string;
		LastModifiedDate?: Date;
		ResourceArn?: string;
		Tags?: TagMap;
	}
	export interface DescribeRulesetResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,
		TargetArn: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRulesetResponseFormGroup() {
		return new FormGroup<DescribeRulesetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			TargetArn: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeScheduleResponse {
		CreateDate?: Date;
		CreatedBy?: string;
		JobNames?: Array<string>;
		LastModifiedBy?: string;
		LastModifiedDate?: Date;
		ResourceArn?: string;
		CronExpression?: string;
		Tags?: TagMap;

		/** Required */
		Name: string;
	}
	export interface DescribeScheduleResponseFormProperties {
		CreateDate: FormControl<Date | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		CronExpression: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeScheduleResponseFormGroup() {
		return new FormGroup<DescribeScheduleResponseFormProperties>({
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			CronExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListDatasetsResponse {

		/** Required */
		Datasets: Array<Dataset>;
		NextToken?: string;
	}
	export interface ListDatasetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDatasetsResponseFormGroup() {
		return new FormGroup<ListDatasetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a dataset that can be processed by DataBrew. */
	export interface Dataset {
		AccountId?: string;
		CreatedBy?: string;
		CreateDate?: Date;

		/** Required */
		Name: string;
		Format?: InputFormat;
		FormatOptions?: FormatOptions;

		/** Required */
		Input: Input;
		LastModifiedDate?: Date;
		LastModifiedBy?: string;
		Source?: Source;
		PathOptions?: PathOptions;
		Tags?: TagMap;
		ResourceArn?: string;
	}

	/** Represents a dataset that can be processed by DataBrew. */
	export interface DatasetFormProperties {
		AccountId: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Format: FormControl<InputFormat | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		Source: FormControl<Source | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<InputFormat | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			Source: new FormControl<Source | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListJobRunsResponse {

		/** Required */
		JobRuns: Array<JobRun>;
		NextToken?: string;
	}
	export interface ListJobRunsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobRunsResponseFormGroup() {
		return new FormGroup<ListJobRunsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents one run of a DataBrew job. */
	export interface JobRun {
		Attempt?: number | null;
		CompletedOn?: Date;
		DatasetName?: string;
		ErrorMessage?: string;
		ExecutionTime?: number | null;
		JobName?: string;
		RunId?: string;
		State?: JobRunState;
		LogSubscription?: LogSubscription;
		LogGroupName?: string;
		Outputs?: Array<Output>;
		DataCatalogOutputs?: Array<DataCatalogOutput>;
		DatabaseOutputs?: Array<DatabaseOutput>;
		RecipeReference?: RecipeReference;
		StartedBy?: string;
		StartedOn?: Date;
		JobSample?: JobSample;
		ValidationConfigurations?: Array<ValidationConfiguration>;
	}

	/** Represents one run of a DataBrew job. */
	export interface JobRunFormProperties {
		Attempt: FormControl<number | null | undefined>,
		CompletedOn: FormControl<Date | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		ExecutionTime: FormControl<number | null | undefined>,
		JobName: FormControl<string | null | undefined>,
		RunId: FormControl<string | null | undefined>,
		State: FormControl<JobRunState | null | undefined>,
		LogSubscription: FormControl<LogSubscription | null | undefined>,
		LogGroupName: FormControl<string | null | undefined>,
		StartedBy: FormControl<string | null | undefined>,
		StartedOn: FormControl<Date | null | undefined>,
	}
	export function CreateJobRunFormGroup() {
		return new FormGroup<JobRunFormProperties>({
			Attempt: new FormControl<number | null | undefined>(undefined),
			CompletedOn: new FormControl<Date | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			ExecutionTime: new FormControl<number | null | undefined>(undefined),
			JobName: new FormControl<string | null | undefined>(undefined),
			RunId: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<JobRunState | null | undefined>(undefined),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			LogGroupName: new FormControl<string | null | undefined>(undefined),
			StartedBy: new FormControl<string | null | undefined>(undefined),
			StartedOn: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListJobsResponse {

		/** Required */
		Jobs: Array<Job>;
		NextToken?: string;
	}
	export interface ListJobsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListJobsResponseFormGroup() {
		return new FormGroup<ListJobsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents all of the attributes of a DataBrew job. */
	export interface Job {
		AccountId?: string;
		CreatedBy?: string;
		CreateDate?: Date;
		DatasetName?: string;
		EncryptionKeyArn?: string;
		EncryptionMode?: EncryptionMode;

		/** Required */
		Name: string;
		Type?: JobType;
		LastModifiedBy?: string;
		LastModifiedDate?: Date;
		LogSubscription?: LogSubscription;
		MaxCapacity?: number | null;
		MaxRetries?: number | null;
		Outputs?: Array<Output>;
		DataCatalogOutputs?: Array<DataCatalogOutput>;
		DatabaseOutputs?: Array<DatabaseOutput>;
		ProjectName?: string;
		RecipeReference?: RecipeReference;
		ResourceArn?: string;
		RoleArn?: string;
		Timeout?: number | null;
		Tags?: TagMap;
		JobSample?: JobSample;
		ValidationConfigurations?: Array<ValidationConfiguration>;
	}

	/** Represents all of the attributes of a DataBrew job. */
	export interface JobFormProperties {
		AccountId: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		Type: FormControl<JobType | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LogSubscription: FormControl<LogSubscription | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
		ProjectName: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateJobFormGroup() {
		return new FormGroup<JobFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<JobType | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			ProjectName: new FormControl<string | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ListProjectsResponse {

		/** Required */
		Projects: Array<Project>;
		NextToken?: string;
	}
	export interface ListProjectsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListProjectsResponseFormGroup() {
		return new FormGroup<ListProjectsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents all of the attributes of a DataBrew project. */
	export interface Project {
		AccountId?: string;
		CreateDate?: Date;
		CreatedBy?: string;
		DatasetName?: string;
		LastModifiedDate?: Date;
		LastModifiedBy?: string;

		/** Required */
		Name: string;

		/** Required */
		RecipeName: string;
		ResourceArn?: string;
		Sample?: Sample;
		Tags?: TagMap;
		RoleArn?: string;
		OpenedBy?: string;
		OpenDate?: Date;
	}

	/** Represents all of the attributes of a DataBrew project. */
	export interface ProjectFormProperties {
		AccountId: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		DatasetName: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RecipeName: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		RoleArn: FormControl<string | null | undefined>,
		OpenedBy: FormControl<string | null | undefined>,
		OpenDate: FormControl<Date | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			DatasetName: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecipeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined),
			OpenedBy: new FormControl<string | null | undefined>(undefined),
			OpenDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListRecipeVersionsResponse {
		NextToken?: string;

		/** Required */
		Recipes: Array<Recipe>;
	}
	export interface ListRecipeVersionsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecipeVersionsResponseFormGroup() {
		return new FormGroup<ListRecipeVersionsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents one or more actions to be performed on a DataBrew dataset. */
	export interface Recipe {
		CreatedBy?: string;
		CreateDate?: Date;
		LastModifiedBy?: string;
		LastModifiedDate?: Date;
		ProjectName?: string;
		PublishedBy?: string;
		PublishedDate?: Date;
		Description?: string;

		/** Required */
		Name: string;
		ResourceArn?: string;
		Steps?: Array<RecipeStep>;
		Tags?: TagMap;
		RecipeVersion?: string;
	}

	/** Represents one or more actions to be performed on a DataBrew dataset. */
	export interface RecipeFormProperties {
		CreatedBy: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		ProjectName: FormControl<string | null | undefined>,
		PublishedBy: FormControl<string | null | undefined>,
		PublishedDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		RecipeVersion: FormControl<string | null | undefined>,
	}
	export function CreateRecipeFormGroup() {
		return new FormGroup<RecipeFormProperties>({
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			ProjectName: new FormControl<string | null | undefined>(undefined),
			PublishedBy: new FormControl<string | null | undefined>(undefined),
			PublishedDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			RecipeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRecipesResponse {

		/** Required */
		Recipes: Array<Recipe>;
		NextToken?: string;
	}
	export interface ListRecipesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRecipesResponseFormGroup() {
		return new FormGroup<ListRecipesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListRulesetsResponse {

		/** Required */
		Rulesets: Array<RulesetItem>;
		NextToken?: string;
	}
	export interface ListRulesetsResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRulesetsResponseFormGroup() {
		return new FormGroup<ListRulesetsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata about the ruleset. */
	export interface RulesetItem {
		AccountId?: string;
		CreatedBy?: string;
		CreateDate?: Date;
		Description?: string;
		LastModifiedBy?: string;
		LastModifiedDate?: Date;

		/** Required */
		Name: string;
		ResourceArn?: string;
		RuleCount?: number | null;
		Tags?: TagMap;

		/** Required */
		TargetArn: string;
	}

	/** Contains metadata about the ruleset. */
	export interface RulesetItemFormProperties {
		AccountId: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		Description: FormControl<string | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		RuleCount: FormControl<number | null | undefined>,

		/** Required */
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateRulesetItemFormGroup() {
		return new FormGroup<RulesetItemFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			RuleCount: new FormControl<number | null | undefined>(undefined),
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListSchedulesResponse {

		/** Required */
		Schedules: Array<Schedule>;
		NextToken?: string;
	}
	export interface ListSchedulesResponseFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSchedulesResponseFormGroup() {
		return new FormGroup<ListSchedulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents one or more dates and times when a job is to run. */
	export interface Schedule {
		AccountId?: string;
		CreatedBy?: string;
		CreateDate?: Date;
		JobNames?: Array<string>;
		LastModifiedBy?: string;
		LastModifiedDate?: Date;
		ResourceArn?: string;
		CronExpression?: string;
		Tags?: TagMap;

		/** Required */
		Name: string;
	}

	/** Represents one or more dates and times when a job is to run. */
	export interface ScheduleFormProperties {
		AccountId: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		CreateDate: FormControl<Date | null | undefined>,
		LastModifiedBy: FormControl<string | null | undefined>,
		LastModifiedDate: FormControl<Date | null | undefined>,
		ResourceArn: FormControl<string | null | undefined>,
		CronExpression: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			AccountId: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreateDate: new FormControl<Date | null | undefined>(undefined),
			LastModifiedBy: new FormControl<string | null | undefined>(undefined),
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			ResourceArn: new FormControl<string | null | undefined>(undefined),
			CronExpression: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListTagsForResourceResponse {
		Tags?: TagMap;
	}
	export interface ListTagsForResourceResponseFormProperties {
	}
	export function CreateListTagsForResourceResponseFormGroup() {
		return new FormGroup<ListTagsForResourceResponseFormProperties>({
		});

	}

	export interface PublishRecipeResponse {

		/** Required */
		Name: string;
	}
	export interface PublishRecipeResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePublishRecipeResponseFormGroup() {
		return new FormGroup<PublishRecipeResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SendProjectSessionActionResponse {
		Result?: string;

		/** Required */
		Name: string;
		ActionId?: number | null;
	}
	export interface SendProjectSessionActionResponseFormProperties {
		Result: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		ActionId: FormControl<number | null | undefined>,
	}
	export function CreateSendProjectSessionActionResponseFormGroup() {
		return new FormGroup<SendProjectSessionActionResponseFormProperties>({
			Result: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ActionId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AnalyticsMode { ENABLE = 0, DISABLE = 1 }

	export interface StartJobRunResponse {

		/** Required */
		RunId: string;
	}
	export interface StartJobRunResponseFormProperties {

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateStartJobRunResponseFormGroup() {
		return new FormGroup<StartJobRunResponseFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartProjectSessionResponse {

		/** Required */
		Name: string;
		ClientSessionId?: string;
	}
	export interface StartProjectSessionResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		ClientSessionId: FormControl<string | null | undefined>,
	}
	export function CreateStartProjectSessionResponseFormGroup() {
		return new FormGroup<StartProjectSessionResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ClientSessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopJobRunResponse {

		/** Required */
		RunId: string;
	}
	export interface StopJobRunResponseFormProperties {

		/** Required */
		RunId: FormControl<string | null | undefined>,
	}
	export function CreateStopJobRunResponseFormGroup() {
		return new FormGroup<StopJobRunResponseFormProperties>({
			RunId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

	export interface UpdateDatasetResponse {

		/** Required */
		Name: string;
	}
	export interface UpdateDatasetResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDatasetResponseFormGroup() {
		return new FormGroup<UpdateDatasetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProfileJobResponse {

		/** Required */
		Name: string;
	}
	export interface UpdateProfileJobResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfileJobResponseFormGroup() {
		return new FormGroup<UpdateProfileJobResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateProjectResponse {
		LastModifiedDate?: Date;

		/** Required */
		Name: string;
	}
	export interface UpdateProjectResponseFormProperties {
		LastModifiedDate: FormControl<Date | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectResponseFormGroup() {
		return new FormGroup<UpdateProjectResponseFormProperties>({
			LastModifiedDate: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRecipeResponse {

		/** Required */
		Name: string;
	}
	export interface UpdateRecipeResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecipeResponseFormGroup() {
		return new FormGroup<UpdateRecipeResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRecipeJobResponse {

		/** Required */
		Name: string;
	}
	export interface UpdateRecipeJobResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecipeJobResponseFormGroup() {
		return new FormGroup<UpdateRecipeJobResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRulesetResponse {

		/** Required */
		Name: string;
	}
	export interface UpdateRulesetResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRulesetResponseFormGroup() {
		return new FormGroup<UpdateRulesetResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateScheduleResponse {

		/** Required */
		Name: string;
	}
	export interface UpdateScheduleResponseFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateScheduleResponseFormGroup() {
		return new FormGroup<UpdateScheduleResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BatchDeleteRecipeVersionRequest {

		/** Required */
		RecipeVersions: Array<string>;
	}
	export interface BatchDeleteRecipeVersionRequestFormProperties {
	}
	export function CreateBatchDeleteRecipeVersionRequestFormGroup() {
		return new FormGroup<BatchDeleteRecipeVersionRequestFormProperties>({
		});

	}

	export interface CreateDatasetRequest {

		/** Required */
		Name: string;
		Format?: InputFormat;

		/** Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input. */
		FormatOptions?: FormatOptions;

		/**
		 * Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.
		 * Required
		 */
		Input: Input;
		PathOptions?: PathOptions;
		Tags?: TagMap;
	}
	export interface CreateDatasetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Format: FormControl<InputFormat | null | undefined>,
	}
	export function CreateCreateDatasetRequestFormGroup() {
		return new FormGroup<CreateDatasetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Format: new FormControl<InputFormat | null | undefined>(undefined),
		});

	}

	export interface CreateProfileJobRequest {

		/** Required */
		DatasetName: string;
		EncryptionKeyArn?: string;
		EncryptionMode?: EncryptionMode;

		/** Required */
		Name: string;
		LogSubscription?: LogSubscription;
		MaxCapacity?: number | null;
		MaxRetries?: number | null;

		/**
		 * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
		 * Required
		 */
		OutputLocation: S3Location;
		Configuration?: ProfileConfiguration;
		ValidationConfigurations?: Array<ValidationConfiguration>;

		/** Required */
		RoleArn: string;
		Tags?: TagMap;
		Timeout?: number | null;
		JobSample?: JobSample;
	}
	export interface CreateProfileJobRequestFormProperties {

		/** Required */
		DatasetName: FormControl<string | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		LogSubscription: FormControl<LogSubscription | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateCreateProfileJobRequestFormGroup() {
		return new FormGroup<CreateProfileJobRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateProjectRequest {

		/** Required */
		DatasetName: string;

		/** Required */
		Name: string;

		/** Required */
		RecipeName: string;

		/** Represents the sample size and sampling type for DataBrew to use for interactive data analysis. */
		Sample?: Sample;

		/** Required */
		RoleArn: string;
		Tags?: TagMap;
	}
	export interface CreateProjectRequestFormProperties {

		/** Required */
		DatasetName: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		RecipeName: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateProjectRequestFormGroup() {
		return new FormGroup<CreateProjectRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RecipeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRecipeJobRequest {
		DatasetName?: string;
		EncryptionKeyArn?: string;
		EncryptionMode?: EncryptionMode;

		/** Required */
		Name: string;
		LogSubscription?: LogSubscription;
		MaxCapacity?: number | null;
		MaxRetries?: number | null;
		Outputs?: Array<Output>;
		DataCatalogOutputs?: Array<DataCatalogOutput>;
		DatabaseOutputs?: Array<DatabaseOutput>;
		ProjectName?: string;

		/** Represents the name and version of a DataBrew recipe. */
		RecipeReference?: RecipeReference;

		/** Required */
		RoleArn: string;
		Tags?: TagMap;
		Timeout?: number | null;
	}
	export interface CreateRecipeJobRequestFormProperties {
		DatasetName: FormControl<string | null | undefined>,
		EncryptionKeyArn: FormControl<string | null | undefined>,
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
		LogSubscription: FormControl<LogSubscription | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,
		ProjectName: FormControl<string | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateCreateRecipeJobRequestFormGroup() {
		return new FormGroup<CreateRecipeJobRequestFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			ProjectName: new FormControl<string | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateRecipeRequest {
		Description?: string;

		/** Required */
		Name: string;

		/** Required */
		Steps: Array<RecipeStep>;
		Tags?: TagMap;
	}
	export interface CreateRecipeRequestFormProperties {
		Description: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateRecipeRequestFormGroup() {
		return new FormGroup<CreateRecipeRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateRulesetRequest {

		/** Required */
		Name: string;
		Description?: string;

		/** Required */
		TargetArn: string;

		/** Required */
		Rules: Array<Rule>;
		Tags?: TagMap;
	}
	export interface CreateRulesetRequestFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,
		Description: FormControl<string | null | undefined>,

		/** Required */
		TargetArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateRulesetRequestFormGroup() {
		return new FormGroup<CreateRulesetRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Description: new FormControl<string | null | undefined>(undefined),
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateScheduleRequest {
		JobNames?: Array<string>;

		/** Required */
		CronExpression: string;
		Tags?: TagMap;

		/** Required */
		Name: string;
	}
	export interface CreateScheduleRequestFormProperties {

		/** Required */
		CronExpression: FormControl<string | null | undefined>,

		/** Required */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateScheduleRequestFormGroup() {
		return new FormGroup<CreateScheduleRequestFormProperties>({
			CronExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ParameterType { Datetime = 0, Number = 1, String = 2 }


	/** Represents additional options for correct interpretation of datetime parameters used in the Amazon S3 path of a dataset. */
	export interface DatetimeOptions {

		/** Required */
		Format: string;
		TimezoneOffset?: string;
		LocaleCode?: string;
	}

	/** Represents additional options for correct interpretation of datetime parameters used in the Amazon S3 path of a dataset. */
	export interface DatetimeOptionsFormProperties {

		/** Required */
		Format: FormControl<string | null | undefined>,
		TimezoneOffset: FormControl<string | null | undefined>,
		LocaleCode: FormControl<string | null | undefined>,
	}
	export function CreateDatetimeOptionsFormGroup() {
		return new FormGroup<DatetimeOptionsFormProperties>({
			Format: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			TimezoneOffset: new FormControl<string | null | undefined>(undefined),
			LocaleCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a dataset parameter that defines type and conditions for a parameter in the Amazon S3 path of the dataset. */
	export interface DatasetParameter {

		/** Required */
		Name: string;

		/** Required */
		Type: ParameterType;
		DatetimeOptions?: DatetimeOptions;
		CreateColumn?: boolean | null;
		Filter?: FilterExpression;
	}

	/** Represents a dataset parameter that defines type and conditions for a parameter in the Amazon S3 path of the dataset. */
	export interface DatasetParameterFormProperties {

		/** Required */
		Name: FormControl<string | null | undefined>,

		/** Required */
		Type: FormControl<ParameterType | null | undefined>,
		CreateColumn: FormControl<boolean | null | undefined>,
	}
	export function CreateDatasetParameterFormGroup() {
		return new FormGroup<DatasetParameterFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Type: new FormControl<ParameterType | null | undefined>(undefined, [Validators.required]),
			CreateColumn: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteDatasetRequest {
	}
	export interface DeleteDatasetRequestFormProperties {
	}
	export function CreateDeleteDatasetRequestFormGroup() {
		return new FormGroup<DeleteDatasetRequestFormProperties>({
		});

	}

	export interface DeleteJobRequest {
	}
	export interface DeleteJobRequestFormProperties {
	}
	export function CreateDeleteJobRequestFormGroup() {
		return new FormGroup<DeleteJobRequestFormProperties>({
		});

	}

	export interface DeleteProjectRequest {
	}
	export interface DeleteProjectRequestFormProperties {
	}
	export function CreateDeleteProjectRequestFormGroup() {
		return new FormGroup<DeleteProjectRequestFormProperties>({
		});

	}

	export interface DeleteRecipeVersionRequest {
	}
	export interface DeleteRecipeVersionRequestFormProperties {
	}
	export function CreateDeleteRecipeVersionRequestFormGroup() {
		return new FormGroup<DeleteRecipeVersionRequestFormProperties>({
		});

	}

	export interface DeleteRulesetRequest {
	}
	export interface DeleteRulesetRequestFormProperties {
	}
	export function CreateDeleteRulesetRequestFormGroup() {
		return new FormGroup<DeleteRulesetRequestFormProperties>({
		});

	}

	export interface DeleteScheduleRequest {
	}
	export interface DeleteScheduleRequestFormProperties {
	}
	export function CreateDeleteScheduleRequestFormGroup() {
		return new FormGroup<DeleteScheduleRequestFormProperties>({
		});

	}

	export interface DescribeDatasetRequest {
	}
	export interface DescribeDatasetRequestFormProperties {
	}
	export function CreateDescribeDatasetRequestFormGroup() {
		return new FormGroup<DescribeDatasetRequestFormProperties>({
		});

	}

	export interface DescribeJobRequest {
	}
	export interface DescribeJobRequestFormProperties {
	}
	export function CreateDescribeJobRequestFormGroup() {
		return new FormGroup<DescribeJobRequestFormProperties>({
		});

	}

	export interface DescribeJobRunRequest {
	}
	export interface DescribeJobRunRequestFormProperties {
	}
	export function CreateDescribeJobRunRequestFormGroup() {
		return new FormGroup<DescribeJobRunRequestFormProperties>({
		});

	}

	export interface DescribeProjectRequest {
	}
	export interface DescribeProjectRequestFormProperties {
	}
	export function CreateDescribeProjectRequestFormGroup() {
		return new FormGroup<DescribeProjectRequestFormProperties>({
		});

	}

	export interface DescribeRecipeRequest {
	}
	export interface DescribeRecipeRequestFormProperties {
	}
	export function CreateDescribeRecipeRequestFormGroup() {
		return new FormGroup<DescribeRecipeRequestFormProperties>({
		});

	}

	export interface DescribeRulesetRequest {
	}
	export interface DescribeRulesetRequestFormProperties {
	}
	export function CreateDescribeRulesetRequestFormGroup() {
		return new FormGroup<DescribeRulesetRequestFormProperties>({
		});

	}

	export interface DescribeScheduleRequest {
	}
	export interface DescribeScheduleRequestFormProperties {
	}
	export function CreateDescribeScheduleRequestFormGroup() {
		return new FormGroup<DescribeScheduleRequestFormProperties>({
		});

	}

	export interface ListDatasetsRequest {
	}
	export interface ListDatasetsRequestFormProperties {
	}
	export function CreateListDatasetsRequestFormGroup() {
		return new FormGroup<ListDatasetsRequestFormProperties>({
		});

	}

	export interface ListJobRunsRequest {
	}
	export interface ListJobRunsRequestFormProperties {
	}
	export function CreateListJobRunsRequestFormGroup() {
		return new FormGroup<ListJobRunsRequestFormProperties>({
		});

	}

	export interface ListJobsRequest {
	}
	export interface ListJobsRequestFormProperties {
	}
	export function CreateListJobsRequestFormGroup() {
		return new FormGroup<ListJobsRequestFormProperties>({
		});

	}

	export interface ListProjectsRequest {
	}
	export interface ListProjectsRequestFormProperties {
	}
	export function CreateListProjectsRequestFormGroup() {
		return new FormGroup<ListProjectsRequestFormProperties>({
		});

	}

	export interface ListRecipeVersionsRequest {
	}
	export interface ListRecipeVersionsRequestFormProperties {
	}
	export function CreateListRecipeVersionsRequestFormGroup() {
		return new FormGroup<ListRecipeVersionsRequestFormProperties>({
		});

	}

	export interface ListRecipesRequest {
	}
	export interface ListRecipesRequestFormProperties {
	}
	export function CreateListRecipesRequestFormGroup() {
		return new FormGroup<ListRecipesRequestFormProperties>({
		});

	}

	export interface ListRulesetsRequest {
	}
	export interface ListRulesetsRequestFormProperties {
	}
	export function CreateListRulesetsRequestFormGroup() {
		return new FormGroup<ListRulesetsRequestFormProperties>({
		});

	}

	export interface ListSchedulesRequest {
	}
	export interface ListSchedulesRequestFormProperties {
	}
	export function CreateListSchedulesRequestFormGroup() {
		return new FormGroup<ListSchedulesRequestFormProperties>({
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

	export interface PublishRecipeRequest {
		Description?: string;
	}
	export interface PublishRecipeRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePublishRecipeRequestFormGroup() {
		return new FormGroup<PublishRecipeRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the data being transformed during an action. */
	export interface ViewFrame {

		/** Required */
		StartColumnIndex: number;
		ColumnRange?: number | null;
		HiddenColumns?: Array<string>;
		StartRowIndex?: number | null;
		RowRange?: number | null;
		Analytics?: LogSubscription;
	}

	/** Represents the data being transformed during an action. */
	export interface ViewFrameFormProperties {

		/** Required */
		StartColumnIndex: FormControl<number | null | undefined>,
		ColumnRange: FormControl<number | null | undefined>,
		StartRowIndex: FormControl<number | null | undefined>,
		RowRange: FormControl<number | null | undefined>,
		Analytics: FormControl<LogSubscription | null | undefined>,
	}
	export function CreateViewFrameFormGroup() {
		return new FormGroup<ViewFrameFormProperties>({
			StartColumnIndex: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ColumnRange: new FormControl<number | null | undefined>(undefined),
			StartRowIndex: new FormControl<number | null | undefined>(undefined),
			RowRange: new FormControl<number | null | undefined>(undefined),
			Analytics: new FormControl<LogSubscription | null | undefined>(undefined),
		});

	}

	export interface SendProjectSessionActionRequest {
		Preview?: boolean | null;

		/** Represents a single step from a DataBrew recipe to be performed. */
		RecipeStep?: RecipeStep;
		StepIndex?: number | null;
		ClientSessionId?: string;

		/** Represents the data being transformed during an action. */
		ViewFrame?: ViewFrame;
	}
	export interface SendProjectSessionActionRequestFormProperties {
		Preview: FormControl<boolean | null | undefined>,
		StepIndex: FormControl<number | null | undefined>,
		ClientSessionId: FormControl<string | null | undefined>,
	}
	export function CreateSendProjectSessionActionRequestFormGroup() {
		return new FormGroup<SendProjectSessionActionRequestFormProperties>({
			Preview: new FormControl<boolean | null | undefined>(undefined),
			StepIndex: new FormControl<number | null | undefined>(undefined),
			ClientSessionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartJobRunRequest {
	}
	export interface StartJobRunRequestFormProperties {
	}
	export function CreateStartJobRunRequestFormGroup() {
		return new FormGroup<StartJobRunRequestFormProperties>({
		});

	}

	export interface StartProjectSessionRequest {
		AssumeControl?: boolean | null;
	}
	export interface StartProjectSessionRequestFormProperties {
		AssumeControl: FormControl<boolean | null | undefined>,
	}
	export function CreateStartProjectSessionRequestFormGroup() {
		return new FormGroup<StartProjectSessionRequestFormProperties>({
			AssumeControl: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StopJobRunRequest {
	}
	export interface StopJobRunRequestFormProperties {
	}
	export function CreateStopJobRunRequestFormGroup() {
		return new FormGroup<StopJobRunRequestFormProperties>({
		});

	}

	export interface TagResourceRequest {

		/** Required */
		Tags: TagMap;
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

	export interface UpdateDatasetRequest {
		Format?: InputFormat;

		/** Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input. */
		FormatOptions?: FormatOptions;

		/**
		 * Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.
		 * Required
		 */
		Input: Input;
		PathOptions?: PathOptions;
	}
	export interface UpdateDatasetRequestFormProperties {
		Format: FormControl<InputFormat | null | undefined>,
	}
	export function CreateUpdateDatasetRequestFormGroup() {
		return new FormGroup<UpdateDatasetRequestFormProperties>({
			Format: new FormControl<InputFormat | null | undefined>(undefined),
		});

	}

	export interface UpdateProfileJobRequest {
		Configuration?: ProfileConfiguration;
		EncryptionKeyArn?: string;
		EncryptionMode?: EncryptionMode;
		LogSubscription?: LogSubscription;
		MaxCapacity?: number | null;
		MaxRetries?: number | null;

		/**
		 * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
		 * Required
		 */
		OutputLocation: S3Location;
		ValidationConfigurations?: Array<ValidationConfiguration>;

		/** Required */
		RoleArn: string;
		Timeout?: number | null;
		JobSample?: JobSample;
	}
	export interface UpdateProfileJobRequestFormProperties {
		EncryptionKeyArn: FormControl<string | null | undefined>,
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,
		LogSubscription: FormControl<LogSubscription | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProfileJobRequestFormGroup() {
		return new FormGroup<UpdateProfileJobRequestFormProperties>({
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateProjectRequest {

		/** Represents the sample size and sampling type for DataBrew to use for interactive data analysis. */
		Sample?: Sample;

		/** Required */
		RoleArn: string;
	}
	export interface UpdateProjectRequestFormProperties {

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectRequestFormGroup() {
		return new FormGroup<UpdateProjectRequestFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateRecipeJobRequest {
		EncryptionKeyArn?: string;
		EncryptionMode?: EncryptionMode;
		LogSubscription?: LogSubscription;
		MaxCapacity?: number | null;
		MaxRetries?: number | null;
		Outputs?: Array<Output>;
		DataCatalogOutputs?: Array<DataCatalogOutput>;
		DatabaseOutputs?: Array<DatabaseOutput>;

		/** Required */
		RoleArn: string;
		Timeout?: number | null;
	}
	export interface UpdateRecipeJobRequestFormProperties {
		EncryptionKeyArn: FormControl<string | null | undefined>,
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,
		LogSubscription: FormControl<LogSubscription | null | undefined>,
		MaxCapacity: FormControl<number | null | undefined>,
		MaxRetries: FormControl<number | null | undefined>,

		/** Required */
		RoleArn: FormControl<string | null | undefined>,
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRecipeJobRequestFormGroup() {
		return new FormGroup<UpdateRecipeJobRequestFormProperties>({
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined),
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Timeout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateRecipeRequest {
		Description?: string;
		Steps?: Array<RecipeStep>;
	}
	export interface UpdateRecipeRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecipeRequestFormGroup() {
		return new FormGroup<UpdateRecipeRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateRulesetRequest {
		Description?: string;

		/** Required */
		Rules: Array<Rule>;
	}
	export interface UpdateRulesetRequestFormProperties {
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRulesetRequestFormGroup() {
		return new FormGroup<UpdateRulesetRequestFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateScheduleRequest {
		JobNames?: Array<string>;

		/** Required */
		CronExpression: string;
	}
	export interface UpdateScheduleRequestFormProperties {

		/** Required */
		CronExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateScheduleRequestFormGroup() {
		return new FormGroup<UpdateScheduleRequestFormProperties>({
			CronExpression: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p>Deletes one or more versions of a recipe at a time.</p> <p>The entire request will be rejected if:</p> <ul> <li> <p>The recipe does not exist.</p> </li> <li> <p>There is an invalid version identifier in the list of versions.</p> </li> <li> <p>The version list is empty.</p> </li> <li> <p>The version list size exceeds 50.</p> </li> <li> <p>The version list contains duplicate entries.</p> </li> </ul> <p>The request will complete successfully, but with partial failures, if:</p> <ul> <li> <p>A version does not exist.</p> </li> <li> <p>A version is being used by a job.</p> </li> <li> <p>You specify <code>LATEST_WORKING</code>, but it's being used by a project.</p> </li> <li> <p>The version fails to be deleted.</p> </li> </ul> <p>The <code>LATEST_WORKING</code> version will only be deleted if the recipe has no other versions. If you try to delete <code>LATEST_WORKING</code> while other versions exist (or if they can't be deleted), then <code>LATEST_WORKING</code> will be listed as partial failure in the response.</p>
		 * Post recipes/{name}/batchDeleteRecipeVersion
		 * @param {string} name The name of the recipe whose versions are to be deleted.
		 * @return {BatchDeleteRecipeVersionResponse} Success
		 */
		BatchDeleteRecipeVersion(name: string, requestBody: BatchDeleteRecipeVersionPostBody): Observable<BatchDeleteRecipeVersionResponse> {
			return this.http.post<BatchDeleteRecipeVersionResponse>(this.baseUri + 'recipes/' + (name == null ? '' : encodeURIComponent(name)) + '/batchDeleteRecipeVersion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new DataBrew dataset.
		 * Post datasets
		 * @return {CreateDatasetResponse} Success
		 */
		CreateDataset(requestBody: CreateDatasetPostBody): Observable<CreateDatasetResponse> {
			return this.http.post<CreateDatasetResponse>(this.baseUri + 'datasets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the DataBrew datasets.
		 * Get datasets
		 * @param {number} maxResults The maximum number of results to return in this request. 
		 * @param {string} nextToken The token returned by a previous call to retrieve the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListDatasetsResponse} Success
		 */
		ListDatasets(maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListDatasetsResponse> {
			return this.http.get<ListDatasetsResponse>(this.baseUri + 'datasets?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new job to analyze a dataset and create its data profile.
		 * Post profileJobs
		 * @return {CreateProfileJobResponse} Success
		 */
		CreateProfileJob(requestBody: CreateProfileJobPostBody): Observable<CreateProfileJobResponse> {
			return this.http.post<CreateProfileJobResponse>(this.baseUri + 'profileJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new DataBrew project.
		 * Post projects
		 * @return {CreateProjectResponse} Success
		 */
		CreateProject(requestBody: CreateProjectPostBody): Observable<CreateProjectResponse> {
			return this.http.post<CreateProjectResponse>(this.baseUri + 'projects', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the DataBrew projects that are defined.
		 * Get projects
		 * @param {string} nextToken The token returned by a previous call to retrieve the next set of results.
		 * @param {number} maxResults The maximum number of results to return in this request. 
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListProjectsResponse} Success
		 */
		ListProjects(nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListProjectsResponse> {
			return this.http.get<ListProjectsResponse>(this.baseUri + 'projects?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new DataBrew recipe.
		 * Post recipes
		 * @return {CreateRecipeResponse} Success
		 */
		CreateRecipe(requestBody: CreateRecipePostBody): Observable<CreateRecipeResponse> {
			return this.http.post<CreateRecipeResponse>(this.baseUri + 'recipes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the DataBrew recipes that are defined.
		 * Get recipes
		 * @param {number} maxResults The maximum number of results to return in this request. 
		 * @param {string} nextToken The token returned by a previous call to retrieve the next set of results.
		 * @param {string} recipeVersion <p>Return only those recipes with a version identifier of <code>LATEST_WORKING</code> or <code>LATEST_PUBLISHED</code>. If <code>RecipeVersion</code> is omitted, <code>ListRecipes</code> returns all of the <code>LATEST_PUBLISHED</code> recipe versions.</p> <p>Valid values: <code>LATEST_WORKING</code> | <code>LATEST_PUBLISHED</code> </p>
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRecipesResponse} Success
		 */
		ListRecipes(maxResults: number | null | undefined, nextToken: string | null | undefined, recipeVersion: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRecipesResponse> {
			return this.http.get<ListRecipesResponse>(this.baseUri + 'recipes?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&recipeVersion=' + (recipeVersion == null ? '' : encodeURIComponent(recipeVersion)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new job to transform input data, using steps defined in an existing Glue DataBrew recipe
		 * Post recipeJobs
		 * @return {CreateRecipeJobResponse} Success
		 */
		CreateRecipeJob(requestBody: CreateRecipeJobPostBody): Observable<CreateRecipeJobResponse> {
			return this.http.post<CreateRecipeJobResponse>(this.baseUri + 'recipeJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Creates a new ruleset that can be used in a profile job to validate the data quality of a dataset.
		 * Post rulesets
		 * @return {CreateRulesetResponse} Success
		 */
		CreateRuleset(requestBody: CreateRulesetPostBody): Observable<CreateRulesetResponse> {
			return this.http.post<CreateRulesetResponse>(this.baseUri + 'rulesets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all rulesets available in the current account or rulesets associated with a specific resource (dataset).
		 * Get rulesets
		 * @param {string} targetArn The Amazon Resource Name (ARN) of a resource (dataset). Using this parameter indicates to return only those rulesets that are associated with the specified resource.
		 * @param {number} maxResults The maximum number of results to return in this request.
		 * @param {string} nextToken A token generated by DataBrew that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the NextToken value from the response object of the previous page call.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRulesetsResponse} Success
		 */
		ListRulesets(targetArn: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRulesetsResponse> {
			return this.http.get<ListRulesetsResponse>(this.baseUri + 'rulesets?targetArn=' + (targetArn == null ? '' : encodeURIComponent(targetArn)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Creates a new schedule for one or more DataBrew jobs. Jobs can be run at a specific date and time, or at regular intervals.
		 * Post schedules
		 * @return {CreateScheduleResponse} Success
		 */
		CreateSchedule(requestBody: CreateSchedulePostBody): Observable<CreateScheduleResponse> {
			return this.http.post<CreateScheduleResponse>(this.baseUri + 'schedules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the DataBrew schedules that are defined.
		 * Get schedules
		 * @param {string} jobName The name of the job that these schedules apply to.
		 * @param {number} maxResults The maximum number of results to return in this request. 
		 * @param {string} nextToken The token returned by a previous call to retrieve the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSchedulesResponse} Success
		 */
		ListSchedules(jobName: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSchedulesResponse> {
			return this.http.get<ListSchedulesResponse>(this.baseUri + 'schedules?jobName=' + (jobName == null ? '' : encodeURIComponent(jobName)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Deletes a dataset from DataBrew.
		 * Delete datasets/{name}
		 * @param {string} name The name of the dataset to be deleted.
		 * @return {DeleteDatasetResponse} Success
		 */
		DeleteDataset(name: string): Observable<DeleteDatasetResponse> {
			return this.http.delete<DeleteDatasetResponse>(this.baseUri + 'datasets/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns the definition of a specific DataBrew dataset.
		 * Get datasets/{name}
		 * @param {string} name The name of the dataset to be described.
		 * @return {DescribeDatasetResponse} Success
		 */
		DescribeDataset(name: string): Observable<DescribeDatasetResponse> {
			return this.http.get<DescribeDatasetResponse>(this.baseUri + 'datasets/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Modifies the definition of an existing DataBrew dataset.
		 * Put datasets/{name}
		 * @param {string} name The name of the dataset to be updated.
		 * @return {UpdateDatasetResponse} Success
		 */
		UpdateDataset(name: string, requestBody: UpdateDatasetPutBody): Observable<UpdateDatasetResponse> {
			return this.http.put<UpdateDatasetResponse>(this.baseUri + 'datasets/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified DataBrew job.
		 * Delete jobs/{name}
		 * @param {string} name The name of the job to be deleted.
		 * @return {DeleteJobResponse} Success
		 */
		DeleteJob(name: string): Observable<DeleteJobResponse> {
			return this.http.delete<DeleteJobResponse>(this.baseUri + 'jobs/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns the definition of a specific DataBrew job.
		 * Get jobs/{name}
		 * @param {string} name The name of the job to be described.
		 * @return {DescribeJobResponse} Success
		 */
		DescribeJob(name: string): Observable<DescribeJobResponse> {
			return this.http.get<DescribeJobResponse>(this.baseUri + 'jobs/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Deletes an existing DataBrew project.
		 * Delete projects/{name}
		 * @param {string} name The name of the project to be deleted.
		 * @return {DeleteProjectResponse} Success
		 */
		DeleteProject(name: string): Observable<DeleteProjectResponse> {
			return this.http.delete<DeleteProjectResponse>(this.baseUri + 'projects/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns the definition of a specific DataBrew project.
		 * Get projects/{name}
		 * @param {string} name The name of the project to be described.
		 * @return {DescribeProjectResponse} Success
		 */
		DescribeProject(name: string): Observable<DescribeProjectResponse> {
			return this.http.get<DescribeProjectResponse>(this.baseUri + 'projects/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Modifies the definition of an existing DataBrew project.
		 * Put projects/{name}
		 * @param {string} name The name of the project to be updated.
		 * @return {UpdateProjectResponse} Success
		 */
		UpdateProject(name: string, requestBody: UpdateProjectPutBody): Observable<UpdateProjectResponse> {
			return this.http.put<UpdateProjectResponse>(this.baseUri + 'projects/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a single version of a DataBrew recipe.
		 * Delete recipes/{name}/recipeVersion/{recipeVersion}
		 * @param {string} name The name of the recipe.
		 * @param {string} recipeVersion The version of the recipe to be deleted. You can specify a numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is not supported.
		 * @return {DeleteRecipeVersionResponse} Success
		 */
		DeleteRecipeVersion(name: string, recipeVersion: string): Observable<DeleteRecipeVersionResponse> {
			return this.http.delete<DeleteRecipeVersionResponse>(this.baseUri + 'recipes/' + (name == null ? '' : encodeURIComponent(name)) + '/recipeVersion/' + (recipeVersion == null ? '' : encodeURIComponent(recipeVersion)), {});
		}

		/**
		 * Deletes a ruleset.
		 * Delete rulesets/{name}
		 * @param {string} name The name of the ruleset to be deleted.
		 * @return {DeleteRulesetResponse} Success
		 */
		DeleteRuleset(name: string): Observable<DeleteRulesetResponse> {
			return this.http.delete<DeleteRulesetResponse>(this.baseUri + 'rulesets/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves detailed information about the ruleset.
		 * Get rulesets/{name}
		 * @param {string} name The name of the ruleset to be described.
		 * @return {DescribeRulesetResponse} Success
		 */
		DescribeRuleset(name: string): Observable<DescribeRulesetResponse> {
			return this.http.get<DescribeRulesetResponse>(this.baseUri + 'rulesets/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates specified ruleset.
		 * Put rulesets/{name}
		 * @param {string} name The name of the ruleset to be updated.
		 * @return {UpdateRulesetResponse} Success
		 */
		UpdateRuleset(name: string, requestBody: UpdateRulesetPutBody): Observable<UpdateRulesetResponse> {
			return this.http.put<UpdateRulesetResponse>(this.baseUri + 'rulesets/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the specified DataBrew schedule.
		 * Delete schedules/{name}
		 * @param {string} name The name of the schedule to be deleted.
		 * @return {DeleteScheduleResponse} Success
		 */
		DeleteSchedule(name: string): Observable<DeleteScheduleResponse> {
			return this.http.delete<DeleteScheduleResponse>(this.baseUri + 'schedules/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Returns the definition of a specific DataBrew schedule.
		 * Get schedules/{name}
		 * @param {string} name The name of the schedule to be described.
		 * @return {DescribeScheduleResponse} Success
		 */
		DescribeSchedule(name: string): Observable<DescribeScheduleResponse> {
			return this.http.get<DescribeScheduleResponse>(this.baseUri + 'schedules/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Modifies the definition of an existing DataBrew schedule.
		 * Put schedules/{name}
		 * @param {string} name The name of the schedule to update.
		 * @return {UpdateScheduleResponse} Success
		 */
		UpdateSchedule(name: string, requestBody: UpdateSchedulePutBody): Observable<UpdateScheduleResponse> {
			return this.http.put<UpdateScheduleResponse>(this.baseUri + 'schedules/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Represents one run of a DataBrew job.
		 * Get jobs/{name}/jobRun/{runId}
		 * @param {string} name The name of the job being processed during this run.
		 * @param {string} runId The unique identifier of the job run.
		 * @return {DescribeJobRunResponse} Success
		 */
		DescribeJobRun(name: string, runId: string): Observable<DescribeJobRunResponse> {
			return this.http.get<DescribeJobRunResponse>(this.baseUri + 'jobs/' + (name == null ? '' : encodeURIComponent(name)) + '/jobRun/' + (runId == null ? '' : encodeURIComponent(runId)), {});
		}

		/**
		 * Returns the definition of a specific DataBrew recipe corresponding to a particular version.
		 * Get recipes/{name}
		 * @param {string} name The name of the recipe to be described.
		 * @param {string} recipeVersion The recipe version identifier. If this parameter isn't specified, then the latest published version is returned.
		 * @return {DescribeRecipeResponse} Success
		 */
		DescribeRecipe(name: string, recipeVersion: string | null | undefined): Observable<DescribeRecipeResponse> {
			return this.http.get<DescribeRecipeResponse>(this.baseUri + 'recipes/' + (name == null ? '' : encodeURIComponent(name)) + '&recipeVersion=' + (recipeVersion == null ? '' : encodeURIComponent(recipeVersion)), {});
		}

		/**
		 * Modifies the definition of the <code>LATEST_WORKING</code> version of a DataBrew recipe.
		 * Put recipes/{name}
		 * @param {string} name The name of the recipe to be updated.
		 * @return {UpdateRecipeResponse} Success
		 */
		UpdateRecipe(name: string, requestBody: UpdateRecipePutBody): Observable<UpdateRecipeResponse> {
			return this.http.put<UpdateRecipeResponse>(this.baseUri + 'recipes/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all of the previous runs of a particular DataBrew job.
		 * Get jobs/{name}/jobRuns
		 * @param {string} name The name of the job.
		 * @param {number} maxResults The maximum number of results to return in this request. 
		 * @param {string} nextToken The token returned by a previous call to retrieve the next set of results.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobRunsResponse} Success
		 */
		ListJobRuns(name: string, maxResults: number | null | undefined, nextToken: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListJobRunsResponse> {
			return this.http.get<ListJobRunsResponse>(this.baseUri + 'jobs/' + (name == null ? '' : encodeURIComponent(name)) + '/jobRuns&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all of the DataBrew jobs that are defined.
		 * Get jobs
		 * @param {string} datasetName The name of a dataset. Using this parameter indicates to return only those jobs that act on the specified dataset.
		 * @param {number} maxResults The maximum number of results to return in this request. 
		 * @param {string} nextToken A token generated by DataBrew that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the NextToken value from the response object of the previous page call. 
		 * @param {string} projectName The name of a project. Using this parameter indicates to return only those jobs that are associated with the specified project.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListJobsResponse} Success
		 */
		ListJobs(datasetName: string | null | undefined, maxResults: number | null | undefined, nextToken: string | null | undefined, projectName: string | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListJobsResponse> {
			return this.http.get<ListJobsResponse>(this.baseUri + 'jobs?datasetName=' + (datasetName == null ? '' : encodeURIComponent(datasetName)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&projectName=' + (projectName == null ? '' : encodeURIComponent(projectName)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the versions of a particular DataBrew recipe, except for <code>LATEST_WORKING</code>.
		 * Get recipeVersions#name
		 * @param {number} maxResults The maximum number of results to return in this request. 
		 * @param {string} nextToken The token returned by a previous call to retrieve the next set of results.
		 * @param {string} name The name of the recipe for which to return version information.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRecipeVersionsResponse} Success
		 */
		ListRecipeVersions(maxResults: number | null | undefined, nextToken: string | null | undefined, name: string, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRecipeVersionsResponse> {
			return this.http.get<ListRecipeVersionsResponse>(this.baseUri + 'recipeVersions#name?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists all the tags for a DataBrew resource.
		 * Get tags/{ResourceArn}
		 * @param {string} ResourceArn The Amazon Resource Name (ARN) string that uniquely identifies the DataBrew resource. 
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(ResourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), {});
		}

		/**
		 * Adds metadata tags to a DataBrew resource, such as a dataset, project, recipe, job, or schedule.
		 * Post tags/{ResourceArn}
		 * @param {string} ResourceArn The DataBrew resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN). For DataBrew, you can tag a dataset, a job, a project, or a recipe.
		 * @return {TagResourceResponse} Success
		 */
		TagResource(ResourceArn: string, requestBody: TagResourcePostBody): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Publishes a new version of a DataBrew recipe.
		 * Post recipes/{name}/publishRecipe
		 * @param {string} name The name of the recipe to be published.
		 * @return {PublishRecipeResponse} Success
		 */
		PublishRecipe(name: string, requestBody: PublishRecipePostBody): Observable<PublishRecipeResponse> {
			return this.http.post<PublishRecipeResponse>(this.baseUri + 'recipes/' + (name == null ? '' : encodeURIComponent(name)) + '/publishRecipe', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Performs a recipe step within an interactive DataBrew session that's currently open.
		 * Put projects/{name}/sendProjectSessionAction
		 * @param {string} name The name of the project to apply the action to.
		 * @return {SendProjectSessionActionResponse} Success
		 */
		SendProjectSessionAction(name: string, requestBody: SendProjectSessionActionPutBody): Observable<SendProjectSessionActionResponse> {
			return this.http.put<SendProjectSessionActionResponse>(this.baseUri + 'projects/' + (name == null ? '' : encodeURIComponent(name)) + '/sendProjectSessionAction', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Runs a DataBrew job.
		 * Post jobs/{name}/startJobRun
		 * @param {string} name The name of the job to be run.
		 * @return {StartJobRunResponse} Success
		 */
		StartJobRun(name: string): Observable<StartJobRunResponse> {
			return this.http.post<StartJobRunResponse>(this.baseUri + 'jobs/' + (name == null ? '' : encodeURIComponent(name)) + '/startJobRun', null, {});
		}

		/**
		 * Creates an interactive session, enabling you to manipulate data in a DataBrew project.
		 * Put projects/{name}/startProjectSession
		 * @param {string} name The name of the project to act upon.
		 * @return {StartProjectSessionResponse} Success
		 */
		StartProjectSession(name: string, requestBody: StartProjectSessionPutBody): Observable<StartProjectSessionResponse> {
			return this.http.put<StartProjectSessionResponse>(this.baseUri + 'projects/' + (name == null ? '' : encodeURIComponent(name)) + '/startProjectSession', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops a particular run of a job.
		 * Post jobs/{name}/jobRun/{runId}/stopJobRun
		 * @param {string} name The name of the job to be stopped.
		 * @param {string} runId The ID of the job run to be stopped.
		 * @return {StopJobRunResponse} Success
		 */
		StopJobRun(name: string, runId: string): Observable<StopJobRunResponse> {
			return this.http.post<StopJobRunResponse>(this.baseUri + 'jobs/' + (name == null ? '' : encodeURIComponent(name)) + '/jobRun/' + (runId == null ? '' : encodeURIComponent(runId)) + '/stopJobRun', null, {});
		}

		/**
		 * Removes metadata tags from a DataBrew resource.
		 * Delete tags/{ResourceArn}#tagKeys
		 * @param {string} ResourceArn A DataBrew resource from which you want to remove a tag or tags. The value for this parameter is an Amazon Resource Name (ARN). 
		 * @param {Array<string>} tagKeys The tag keys (names) of one or more tags to be removed.
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(ResourceArn: string, tagKeys: Array<string>): Observable<UntagResourceResponse> {
			return this.http.delete<UntagResourceResponse>(this.baseUri + 'tags/' + (ResourceArn == null ? '' : encodeURIComponent(ResourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Modifies the definition of an existing profile job.
		 * Put profileJobs/{name}
		 * @param {string} name The name of the job to be updated.
		 * @return {UpdateProfileJobResponse} Success
		 */
		UpdateProfileJob(name: string, requestBody: UpdateProfileJobPutBody): Observable<UpdateProfileJobResponse> {
			return this.http.put<UpdateProfileJobResponse>(this.baseUri + 'profileJobs/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies the definition of an existing DataBrew recipe job.
		 * Put recipeJobs/{name}
		 * @param {string} name The name of the job to update.
		 * @return {UpdateRecipeJobResponse} Success
		 */
		UpdateRecipeJob(name: string, requestBody: UpdateRecipeJobPutBody): Observable<UpdateRecipeJobResponse> {
			return this.http.put<UpdateRecipeJobResponse>(this.baseUri + 'recipeJobs/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface BatchDeleteRecipeVersionPostBody {

		/**
		 * An array of version identifiers, for the recipe versions to be deleted. You can specify numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is not supported.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		RecipeVersions: Array<string>;
	}
	export interface BatchDeleteRecipeVersionPostBodyFormProperties {
	}
	export function CreateBatchDeleteRecipeVersionPostBodyFormGroup() {
		return new FormGroup<BatchDeleteRecipeVersionPostBodyFormProperties>({
		});

	}

	export interface CreateDatasetPostBody {

		/**
		 * The name of the dataset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/** The file format of a dataset that is created from an Amazon S3 file or folder. */
		Format?: InputFormat | null;

		/** Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input. */
		FormatOptions?: CreateDatasetPostBodyFormatOptions;

		/**
		 * Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.
		 * Required
		 */
		Input: CreateDatasetPostBodyInput;

		/** Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset. */
		PathOptions?: CreateDatasetPostBodyPathOptions;

		/** Metadata tags to apply to this dataset. */
		Tags?: {[id: string]: string };
	}
	export interface CreateDatasetPostBodyFormProperties {

		/**
		 * The name of the dataset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** The file format of a dataset that is created from an Amazon S3 file or folder. */
		Format: FormControl<InputFormat | null | undefined>,

		/** Metadata tags to apply to this dataset. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateDatasetPostBodyFormGroup() {
		return new FormGroup<CreateDatasetPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Format: new FormControl<InputFormat | null | undefined>(undefined),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateDatasetPostBodyFormatOptions {
		Json?: JsonOptions;
		Excel?: ExcelOptions;
		Csv?: CsvOptions;
	}
	export interface CreateDatasetPostBodyFormatOptionsFormProperties {
	}
	export function CreateCreateDatasetPostBodyFormatOptionsFormGroup() {
		return new FormGroup<CreateDatasetPostBodyFormatOptionsFormProperties>({
		});

	}

	export interface CreateDatasetPostBodyInput {
		S3InputDefinition?: S3Location;
		DataCatalogInputDefinition?: DataCatalogInputDefinition;
		DatabaseInputDefinition?: DatabaseInputDefinition;
		Metadata?: Metadata;
	}
	export interface CreateDatasetPostBodyInputFormProperties {
	}
	export function CreateCreateDatasetPostBodyInputFormGroup() {
		return new FormGroup<CreateDatasetPostBodyInputFormProperties>({
		});

	}

	export interface CreateDatasetPostBodyPathOptions {
		LastModifiedDateCondition?: FilterExpression;
		FilesLimit?: FilesLimit;
		Parameters?: PathParametersMap;
	}
	export interface CreateDatasetPostBodyPathOptionsFormProperties {
	}
	export function CreateCreateDatasetPostBodyPathOptionsFormGroup() {
		return new FormGroup<CreateDatasetPostBodyPathOptionsFormProperties>({
		});

	}

	export interface CreateProfileJobPostBody {

		/**
		 * The name of the dataset that this job is to act upon.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatasetName: string;

		/**
		 * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
		 * Max length: 2048
		 * Min length: 20
		 */
		EncryptionKeyArn?: string | null;

		/** <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - <code>SSE-KMS</code> - Server-side encryption with KMS-managed keys.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul> */
		EncryptionMode?: EncryptionMode | null;

		/**
		 * The name of the job to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 240
		 * Min length: 1
		 */
		Name: string;

		/** Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run. */
		LogSubscription?: LogSubscription | null;

		/** The maximum number of nodes that DataBrew can use when the job processes data. */
		MaxCapacity?: number | null;

		/**
		 * The maximum number of times to retry the job after a job run fails.
		 * Minimum: 0
		 */
		MaxRetries?: number | null;

		/**
		 * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
		 * Required
		 */
		OutputLocation: CreateProfileJobPostBodyOutputLocation;

		/** Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns. */
		Configuration?: CreateProfileJobPostBodyConfiguration;

		/**
		 * List of validation configurations that are applied to the profile job.
		 * Minimum items: 1
		 */
		ValidationConfigurations?: Array<ValidationConfiguration>;

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/** Metadata tags to apply to this job. */
		Tags?: {[id: string]: string };

		/**
		 * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.
		 * Minimum: 0
		 */
		Timeout?: number | null;

		/** A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter. */
		JobSample?: CreateProfileJobPostBodyJobSample;
	}
	export interface CreateProfileJobPostBodyFormProperties {

		/**
		 * The name of the dataset that this job is to act upon.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatasetName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
		 * Max length: 2048
		 * Min length: 20
		 */
		EncryptionKeyArn: FormControl<string | null | undefined>,

		/** <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - <code>SSE-KMS</code> - Server-side encryption with KMS-managed keys.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul> */
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,

		/**
		 * The name of the job to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 240
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run. */
		LogSubscription: FormControl<LogSubscription | null | undefined>,

		/** The maximum number of nodes that DataBrew can use when the job processes data. */
		MaxCapacity: FormControl<number | null | undefined>,

		/**
		 * The maximum number of times to retry the job after a job run fails.
		 * Minimum: 0
		 */
		MaxRetries: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Metadata tags to apply to this job. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.
		 * Minimum: 0
		 */
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateCreateProfileJobPostBodyFormGroup() {
		return new FormGroup<CreateProfileJobPostBodyFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(240)]),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface CreateProfileJobPostBodyOutputLocation {
		Bucket?: string;
		Key?: string;
		BucketOwner?: string;
	}
	export interface CreateProfileJobPostBodyOutputLocationFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		BucketOwner: FormControl<string | null | undefined>,
	}
	export function CreateCreateProfileJobPostBodyOutputLocationFormGroup() {
		return new FormGroup<CreateProfileJobPostBodyOutputLocationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			BucketOwner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateProfileJobPostBodyConfiguration {
		DatasetStatisticsConfiguration?: StatisticsConfiguration;
		ProfileColumns?: Array<ColumnSelector>;
		ColumnStatisticsConfigurations?: Array<ColumnStatisticsConfiguration>;
		EntityDetectorConfiguration?: EntityDetectorConfiguration;
	}
	export interface CreateProfileJobPostBodyConfigurationFormProperties {
	}
	export function CreateCreateProfileJobPostBodyConfigurationFormGroup() {
		return new FormGroup<CreateProfileJobPostBodyConfigurationFormProperties>({
		});

	}

	export interface CreateProfileJobPostBodyJobSample {
		Mode?: SampleMode;
		Size?: number | null;
	}
	export interface CreateProfileJobPostBodyJobSampleFormProperties {
		Mode: FormControl<SampleMode | null | undefined>,
		Size: FormControl<number | null | undefined>,
	}
	export function CreateCreateProfileJobPostBodyJobSampleFormGroup() {
		return new FormGroup<CreateProfileJobPostBodyJobSampleFormProperties>({
			Mode: new FormControl<SampleMode | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateProjectPostBody {

		/**
		 * The name of an existing dataset to associate this project with.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatasetName: string;

		/**
		 * A unique name for the new project. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The name of an existing recipe to associate with the project.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RecipeName: string;

		/** Represents the sample size and sampling type for DataBrew to use for interactive data analysis. */
		Sample?: CreateProjectPostBodySample;

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed for this request.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/** Metadata tags to apply to this project. */
		Tags?: {[id: string]: string };
	}
	export interface CreateProjectPostBodyFormProperties {

		/**
		 * The name of an existing dataset to associate this project with.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		DatasetName: FormControl<string | null | undefined>,

		/**
		 * A unique name for the new project. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The name of an existing recipe to associate with the project.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		RecipeName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed for this request.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Metadata tags to apply to this project. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateProjectPostBodyFormGroup() {
		return new FormGroup<CreateProjectPostBodyFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			RecipeName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateProjectPostBodySample {
		Size?: number | null;
		Type?: SampleType;
	}
	export interface CreateProjectPostBodySampleFormProperties {
		Size: FormControl<number | null | undefined>,
		Type: FormControl<SampleType | null | undefined>,
	}
	export function CreateCreateProjectPostBodySampleFormGroup() {
		return new FormGroup<CreateProjectPostBodySampleFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<SampleType | null | undefined>(undefined),
		});

	}

	export interface CreateRecipePostBody {

		/**
		 * A description for the recipe.
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * A unique name for the recipe. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * An array containing the steps to be performed by the recipe. Each recipe step consists of one recipe action and (optionally) an array of condition expressions.
		 * Required
		 */
		Steps: Array<RecipeStep>;

		/** Metadata tags to apply to this recipe. */
		Tags?: {[id: string]: string };
	}
	export interface CreateRecipePostBodyFormProperties {

		/**
		 * A description for the recipe.
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * A unique name for the recipe. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Metadata tags to apply to this recipe. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRecipePostBodyFormGroup() {
		return new FormGroup<CreateRecipePostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateRecipeJobPostBody {

		/**
		 * The name of the dataset that this job processes.
		 * Max length: 255
		 * Min length: 1
		 */
		DatasetName?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
		 * Max length: 2048
		 * Min length: 20
		 */
		EncryptionKeyArn?: string | null;

		/** <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul> */
		EncryptionMode?: EncryptionMode | null;

		/**
		 * A unique name for the job. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 240
		 * Min length: 1
		 */
		Name: string;

		/** Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run. */
		LogSubscription?: LogSubscription | null;

		/** The maximum number of nodes that DataBrew can consume when the job processes data. */
		MaxCapacity?: number | null;

		/**
		 * The maximum number of times to retry the job after a job run fails.
		 * Minimum: 0
		 */
		MaxRetries?: number | null;

		/**
		 * One or more artifacts that represent the output from running the job.
		 * Minimum items: 1
		 */
		Outputs?: Array<Output>;

		/**
		 * One or more artifacts that represent the Glue Data Catalog output from running the job.
		 * Minimum items: 1
		 */
		DataCatalogOutputs?: Array<DataCatalogOutput>;

		/**
		 * Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write to.
		 * Minimum items: 1
		 */
		DatabaseOutputs?: Array<DatabaseOutput>;

		/**
		 * Either the name of an existing project, or a combination of a recipe and a dataset to associate with the recipe.
		 * Max length: 255
		 * Min length: 1
		 */
		ProjectName?: string | null;

		/** Represents the name and version of a DataBrew recipe. */
		RecipeReference?: CreateRecipeJobPostBodyRecipeReference;

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/** Metadata tags to apply to this job. */
		Tags?: {[id: string]: string };

		/**
		 * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.
		 * Minimum: 0
		 */
		Timeout?: number | null;
	}
	export interface CreateRecipeJobPostBodyFormProperties {

		/**
		 * The name of the dataset that this job processes.
		 * Max length: 255
		 * Min length: 1
		 */
		DatasetName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
		 * Max length: 2048
		 * Min length: 20
		 */
		EncryptionKeyArn: FormControl<string | null | undefined>,

		/** <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul> */
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,

		/**
		 * A unique name for the job. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 240
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run. */
		LogSubscription: FormControl<LogSubscription | null | undefined>,

		/** The maximum number of nodes that DataBrew can consume when the job processes data. */
		MaxCapacity: FormControl<number | null | undefined>,

		/**
		 * The maximum number of times to retry the job after a job run fails.
		 * Minimum: 0
		 */
		MaxRetries: FormControl<number | null | undefined>,

		/**
		 * Either the name of an existing project, or a combination of a recipe and a dataset to associate with the recipe.
		 * Max length: 255
		 * Min length: 1
		 */
		ProjectName: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Metadata tags to apply to this job. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.
		 * Minimum: 0
		 */
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateCreateRecipeJobPostBodyFormGroup() {
		return new FormGroup<CreateRecipeJobPostBodyFormProperties>({
			DatasetName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(240)]),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ProjectName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface CreateRecipeJobPostBodyRecipeReference {
		Name?: string;
		RecipeVersion?: string;
	}
	export interface CreateRecipeJobPostBodyRecipeReferenceFormProperties {
		Name: FormControl<string | null | undefined>,
		RecipeVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateRecipeJobPostBodyRecipeReferenceFormGroup() {
		return new FormGroup<CreateRecipeJobPostBodyRecipeReferenceFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			RecipeVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateRulesetPostBody {

		/**
		 * The name of the ruleset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;

		/**
		 * The description of the ruleset.
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		TargetArn: string;

		/**
		 * A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.
		 * Required
		 * Minimum items: 1
		 */
		Rules: Array<Rule>;

		/** Metadata tags to apply to the ruleset. */
		Tags?: {[id: string]: string };
	}
	export interface CreateRulesetPostBodyFormProperties {

		/**
		 * The name of the ruleset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * The description of the ruleset.
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		TargetArn: FormControl<string | null | undefined>,

		/** Metadata tags to apply to the ruleset. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreateRulesetPostBodyFormGroup() {
		return new FormGroup<CreateRulesetPostBodyFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreateSchedulePostBody {

		/**
		 * The name or names of one or more jobs to be run.
		 * Maximum items: 50
		 */
		JobNames?: Array<string>;

		/**
		 * The date or dates and time or times when the jobs are to be run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		CronExpression: string;

		/** Metadata tags to apply to this schedule. */
		Tags?: {[id: string]: string };

		/**
		 * A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: string;
	}
	export interface CreateSchedulePostBodyFormProperties {

		/**
		 * The date or dates and time or times when the jobs are to be run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		CronExpression: FormControl<string | null | undefined>,

		/** Metadata tags to apply to this schedule. */
		Tags: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSchedulePostBodyFormGroup() {
		return new FormGroup<CreateSchedulePostBodyFormProperties>({
			CronExpression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512)]),
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
		});

	}

	export interface UpdateDatasetPutBody {

		/** The file format of a dataset that is created from an Amazon S3 file or folder. */
		Format?: InputFormat | null;

		/** Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input. */
		FormatOptions?: UpdateDatasetPutBodyFormatOptions;

		/**
		 * Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.
		 * Required
		 */
		Input: UpdateDatasetPutBodyInput;

		/** Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset. */
		PathOptions?: UpdateDatasetPutBodyPathOptions;
	}
	export interface UpdateDatasetPutBodyFormProperties {

		/** The file format of a dataset that is created from an Amazon S3 file or folder. */
		Format: FormControl<InputFormat | null | undefined>,
	}
	export function CreateUpdateDatasetPutBodyFormGroup() {
		return new FormGroup<UpdateDatasetPutBodyFormProperties>({
			Format: new FormControl<InputFormat | null | undefined>(undefined),
		});

	}

	export interface UpdateDatasetPutBodyFormatOptions {
		Json?: JsonOptions;
		Excel?: ExcelOptions;
		Csv?: CsvOptions;
	}
	export interface UpdateDatasetPutBodyFormatOptionsFormProperties {
	}
	export function CreateUpdateDatasetPutBodyFormatOptionsFormGroup() {
		return new FormGroup<UpdateDatasetPutBodyFormatOptionsFormProperties>({
		});

	}

	export interface UpdateDatasetPutBodyInput {
		S3InputDefinition?: S3Location;
		DataCatalogInputDefinition?: DataCatalogInputDefinition;
		DatabaseInputDefinition?: DatabaseInputDefinition;
		Metadata?: Metadata;
	}
	export interface UpdateDatasetPutBodyInputFormProperties {
	}
	export function CreateUpdateDatasetPutBodyInputFormGroup() {
		return new FormGroup<UpdateDatasetPutBodyInputFormProperties>({
		});

	}

	export interface UpdateDatasetPutBodyPathOptions {
		LastModifiedDateCondition?: FilterExpression;
		FilesLimit?: FilesLimit;
		Parameters?: PathParametersMap;
	}
	export interface UpdateDatasetPutBodyPathOptionsFormProperties {
	}
	export function CreateUpdateDatasetPutBodyPathOptionsFormGroup() {
		return new FormGroup<UpdateDatasetPutBodyPathOptionsFormProperties>({
		});

	}

	export interface UpdateProjectPutBody {

		/** Represents the sample size and sampling type for DataBrew to use for interactive data analysis. */
		Sample?: UpdateProjectPutBodySample;

		/**
		 * The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;
	}
	export interface UpdateProjectPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProjectPutBodyFormGroup() {
		return new FormGroup<UpdateProjectPutBodyFormProperties>({
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
		});

	}

	export interface UpdateProjectPutBodySample {
		Size?: number | null;
		Type?: SampleType;
	}
	export interface UpdateProjectPutBodySampleFormProperties {
		Size: FormControl<number | null | undefined>,
		Type: FormControl<SampleType | null | undefined>,
	}
	export function CreateUpdateProjectPutBodySampleFormGroup() {
		return new FormGroup<UpdateProjectPutBodySampleFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined),
			Type: new FormControl<SampleType | null | undefined>(undefined),
		});

	}

	export interface UpdateRulesetPutBody {

		/**
		 * The description of the ruleset.
		 * Max length: 1024
		 */
		Description?: string | null;

		/**
		 * A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.
		 * Required
		 * Minimum items: 1
		 */
		Rules: Array<Rule>;
	}
	export interface UpdateRulesetPutBodyFormProperties {

		/**
		 * The description of the ruleset.
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRulesetPutBodyFormGroup() {
		return new FormGroup<UpdateRulesetPutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface UpdateSchedulePutBody {

		/**
		 * The name or names of one or more jobs to be run for this schedule.
		 * Maximum items: 50
		 */
		JobNames?: Array<string>;

		/**
		 * The date or dates and time or times when the jobs are to be run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		CronExpression: string;
	}
	export interface UpdateSchedulePutBodyFormProperties {

		/**
		 * The date or dates and time or times when the jobs are to be run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the <i>Glue DataBrew Developer Guide</i>.
		 * Required
		 * Max length: 512
		 * Min length: 1
		 */
		CronExpression: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSchedulePutBodyFormGroup() {
		return new FormGroup<UpdateSchedulePutBodyFormProperties>({
			CronExpression: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(512)]),
		});

	}

	export interface UpdateRecipePutBody {

		/**
		 * A description of the recipe.
		 * Max length: 1024
		 */
		Description?: string | null;

		/** One or more steps to be performed by the recipe. Each step consists of an action, and the conditions under which the action should succeed. */
		Steps?: Array<RecipeStep>;
	}
	export interface UpdateRecipePutBodyFormProperties {

		/**
		 * A description of the recipe.
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateRecipePutBodyFormGroup() {
		return new FormGroup<UpdateRecipePutBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface TagResourcePostBody {

		/**
		 * One or more tags to be assigned to the resource.
		 * Required
		 */
		Tags: {[id: string]: string };
	}
	export interface TagResourcePostBodyFormProperties {

		/**
		 * One or more tags to be assigned to the resource.
		 * Required
		 */
		Tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateTagResourcePostBodyFormGroup() {
		return new FormGroup<TagResourcePostBodyFormProperties>({
			Tags: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PublishRecipePostBody {

		/**
		 * A description of the recipe to be published, for this version of the recipe.
		 * Max length: 1024
		 */
		Description?: string | null;
	}
	export interface PublishRecipePostBodyFormProperties {

		/**
		 * A description of the recipe to be published, for this version of the recipe.
		 * Max length: 1024
		 */
		Description: FormControl<string | null | undefined>,
	}
	export function CreatePublishRecipePostBodyFormGroup() {
		return new FormGroup<PublishRecipePostBodyFormProperties>({
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1024)]),
		});

	}

	export interface SendProjectSessionActionPutBody {

		/** If true, the result of the recipe step will be returned, but not applied. */
		Preview?: boolean | null;

		/** Represents a single step from a DataBrew recipe to be performed. */
		RecipeStep?: SendProjectSessionActionPutBodyRecipeStep;

		/**
		 * The index from which to preview a step. This index is used to preview the result of steps that have already been applied, so that the resulting view frame is from earlier in the view frame stack.
		 * Minimum: 0
		 */
		StepIndex?: number | null;

		/**
		 * A unique identifier for an interactive session that's currently open and ready for work. The action will be performed on this session.
		 * Max length: 255
		 * Min length: 1
		 */
		ClientSessionId?: string | null;

		/** Represents the data being transformed during an action. */
		ViewFrame?: SendProjectSessionActionPutBodyViewFrame;
	}
	export interface SendProjectSessionActionPutBodyFormProperties {

		/** If true, the result of the recipe step will be returned, but not applied. */
		Preview: FormControl<boolean | null | undefined>,

		/**
		 * The index from which to preview a step. This index is used to preview the result of steps that have already been applied, so that the resulting view frame is from earlier in the view frame stack.
		 * Minimum: 0
		 */
		StepIndex: FormControl<number | null | undefined>,

		/**
		 * A unique identifier for an interactive session that's currently open and ready for work. The action will be performed on this session.
		 * Max length: 255
		 * Min length: 1
		 */
		ClientSessionId: FormControl<string | null | undefined>,
	}
	export function CreateSendProjectSessionActionPutBodyFormGroup() {
		return new FormGroup<SendProjectSessionActionPutBodyFormProperties>({
			Preview: new FormControl<boolean | null | undefined>(undefined),
			StepIndex: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			ClientSessionId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255), Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9-]*$')]),
		});

	}

	export interface SendProjectSessionActionPutBodyRecipeStep {
		Action?: RecipeAction;
		ConditionExpressions?: Array<ConditionExpression>;
	}
	export interface SendProjectSessionActionPutBodyRecipeStepFormProperties {
	}
	export function CreateSendProjectSessionActionPutBodyRecipeStepFormGroup() {
		return new FormGroup<SendProjectSessionActionPutBodyRecipeStepFormProperties>({
		});

	}

	export interface SendProjectSessionActionPutBodyViewFrame {
		StartColumnIndex?: number | null;
		ColumnRange?: number | null;
		HiddenColumns?: Array<string>;
		StartRowIndex?: number | null;
		RowRange?: number | null;
		Analytics?: LogSubscription;
	}
	export interface SendProjectSessionActionPutBodyViewFrameFormProperties {
		StartColumnIndex: FormControl<number | null | undefined>,
		ColumnRange: FormControl<number | null | undefined>,
		StartRowIndex: FormControl<number | null | undefined>,
		RowRange: FormControl<number | null | undefined>,
		Analytics: FormControl<LogSubscription | null | undefined>,
	}
	export function CreateSendProjectSessionActionPutBodyViewFrameFormGroup() {
		return new FormGroup<SendProjectSessionActionPutBodyViewFrameFormProperties>({
			StartColumnIndex: new FormControl<number | null | undefined>(undefined),
			ColumnRange: new FormControl<number | null | undefined>(undefined),
			StartRowIndex: new FormControl<number | null | undefined>(undefined),
			RowRange: new FormControl<number | null | undefined>(undefined),
			Analytics: new FormControl<LogSubscription | null | undefined>(undefined),
		});

	}

	export interface StartProjectSessionPutBody {

		/** A value that, if true, enables you to take control of a session, even if a different client is currently accessing the project. */
		AssumeControl?: boolean | null;
	}
	export interface StartProjectSessionPutBodyFormProperties {

		/** A value that, if true, enables you to take control of a session, even if a different client is currently accessing the project. */
		AssumeControl: FormControl<boolean | null | undefined>,
	}
	export function CreateStartProjectSessionPutBodyFormGroup() {
		return new FormGroup<StartProjectSessionPutBodyFormProperties>({
			AssumeControl: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UpdateProfileJobPutBody {

		/** Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns. */
		Configuration?: UpdateProfileJobPutBodyConfiguration;

		/**
		 * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
		 * Max length: 2048
		 * Min length: 20
		 */
		EncryptionKeyArn?: string | null;

		/** <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul> */
		EncryptionMode?: EncryptionMode | null;

		/** Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run. */
		LogSubscription?: LogSubscription | null;

		/** The maximum number of compute nodes that DataBrew can use when the job processes data. */
		MaxCapacity?: number | null;

		/**
		 * The maximum number of times to retry the job after a job run fails.
		 * Minimum: 0
		 */
		MaxRetries?: number | null;

		/**
		 * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
		 * Required
		 */
		OutputLocation: UpdateProfileJobPutBodyOutputLocation;

		/**
		 * List of validation configurations that are applied to the profile job.
		 * Minimum items: 1
		 */
		ValidationConfigurations?: Array<ValidationConfiguration>;

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/**
		 * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.
		 * Minimum: 0
		 */
		Timeout?: number | null;

		/** A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a <code>JobSample</code> value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter. */
		JobSample?: UpdateProfileJobPutBodyJobSample;
	}
	export interface UpdateProfileJobPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
		 * Max length: 2048
		 * Min length: 20
		 */
		EncryptionKeyArn: FormControl<string | null | undefined>,

		/** <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul> */
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,

		/** Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run. */
		LogSubscription: FormControl<LogSubscription | null | undefined>,

		/** The maximum number of compute nodes that DataBrew can use when the job processes data. */
		MaxCapacity: FormControl<number | null | undefined>,

		/**
		 * The maximum number of times to retry the job after a job run fails.
		 * Minimum: 0
		 */
		MaxRetries: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.
		 * Minimum: 0
		 */
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProfileJobPutBodyFormGroup() {
		return new FormGroup<UpdateProfileJobPutBodyFormProperties>({
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

	export interface UpdateProfileJobPutBodyConfiguration {
		DatasetStatisticsConfiguration?: StatisticsConfiguration;
		ProfileColumns?: Array<ColumnSelector>;
		ColumnStatisticsConfigurations?: Array<ColumnStatisticsConfiguration>;
		EntityDetectorConfiguration?: EntityDetectorConfiguration;
	}
	export interface UpdateProfileJobPutBodyConfigurationFormProperties {
	}
	export function CreateUpdateProfileJobPutBodyConfigurationFormGroup() {
		return new FormGroup<UpdateProfileJobPutBodyConfigurationFormProperties>({
		});

	}

	export interface UpdateProfileJobPutBodyOutputLocation {
		Bucket?: string;
		Key?: string;
		BucketOwner?: string;
	}
	export interface UpdateProfileJobPutBodyOutputLocationFormProperties {
		Bucket: FormControl<string | null | undefined>,
		Key: FormControl<string | null | undefined>,
		BucketOwner: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProfileJobPutBodyOutputLocationFormGroup() {
		return new FormGroup<UpdateProfileJobPutBodyOutputLocationFormProperties>({
			Bucket: new FormControl<string | null | undefined>(undefined),
			Key: new FormControl<string | null | undefined>(undefined),
			BucketOwner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateProfileJobPutBodyJobSample {
		Mode?: SampleMode;
		Size?: number | null;
	}
	export interface UpdateProfileJobPutBodyJobSampleFormProperties {
		Mode: FormControl<SampleMode | null | undefined>,
		Size: FormControl<number | null | undefined>,
	}
	export function CreateUpdateProfileJobPutBodyJobSampleFormGroup() {
		return new FormGroup<UpdateProfileJobPutBodyJobSampleFormProperties>({
			Mode: new FormControl<SampleMode | null | undefined>(undefined),
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateRecipeJobPutBody {

		/**
		 * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
		 * Max length: 2048
		 * Min length: 20
		 */
		EncryptionKeyArn?: string | null;

		/** <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul> */
		EncryptionMode?: EncryptionMode | null;

		/** Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run. */
		LogSubscription?: LogSubscription | null;

		/** The maximum number of nodes that DataBrew can consume when the job processes data. */
		MaxCapacity?: number | null;

		/**
		 * The maximum number of times to retry the job after a job run fails.
		 * Minimum: 0
		 */
		MaxRetries?: number | null;

		/**
		 * One or more artifacts that represent the output from running the job.
		 * Minimum items: 1
		 */
		Outputs?: Array<Output>;

		/**
		 * One or more artifacts that represent the Glue Data Catalog output from running the job.
		 * Minimum items: 1
		 */
		DataCatalogOutputs?: Array<DataCatalogOutput>;

		/**
		 * Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.
		 * Minimum items: 1
		 */
		DatabaseOutputs?: Array<DatabaseOutput>;

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: string;

		/**
		 * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.
		 * Minimum: 0
		 */
		Timeout?: number | null;
	}
	export interface UpdateRecipeJobPutBodyFormProperties {

		/**
		 * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
		 * Max length: 2048
		 * Min length: 20
		 */
		EncryptionKeyArn: FormControl<string | null | undefined>,

		/** <p>The encryption mode for the job, which can be one of the following:</p> <ul> <li> <p> <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p> </li> <li> <p> <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p> </li> </ul> */
		EncryptionMode: FormControl<EncryptionMode | null | undefined>,

		/** Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run. */
		LogSubscription: FormControl<LogSubscription | null | undefined>,

		/** The maximum number of nodes that DataBrew can consume when the job processes data. */
		MaxCapacity: FormControl<number | null | undefined>,

		/**
		 * The maximum number of times to retry the job after a job run fails.
		 * Minimum: 0
		 */
		MaxRetries: FormControl<number | null | undefined>,

		/**
		 * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
		 * Required
		 * Max length: 2048
		 * Min length: 20
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of <code>TIMEOUT</code>.
		 * Minimum: 0
		 */
		Timeout: FormControl<number | null | undefined>,
	}
	export function CreateUpdateRecipeJobPutBodyFormGroup() {
		return new FormGroup<UpdateRecipeJobPutBodyFormProperties>({
			EncryptionKeyArn: new FormControl<string | null | undefined>(undefined, [Validators.minLength(20), Validators.maxLength(2048)]),
			EncryptionMode: new FormControl<EncryptionMode | null | undefined>(undefined),
			LogSubscription: new FormControl<LogSubscription | null | undefined>(undefined),
			MaxCapacity: new FormControl<number | null | undefined>(undefined),
			MaxRetries: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(20), Validators.maxLength(2048)]),
			Timeout: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
		});

	}

}

