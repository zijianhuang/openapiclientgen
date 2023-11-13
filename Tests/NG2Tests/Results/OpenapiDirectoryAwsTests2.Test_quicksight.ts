import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CancelIngestionResponse {
		Arn?: string | null;
		IngestionId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface AccessDeniedException {
	}

	export interface InvalidParameterValueException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ThrottlingException {
	}

	export interface ResourceExistsException {
	}

	export interface InternalFailureException {
	}

	export interface CreateDashboardResponse {
		Arn?: string | null;
		VersionArn?: string | null;
		DashboardId?: string | null;
		CreationStatus?: CreateDashboardResponseCreationStatus | null;
		Status?: number | null;
		RequestId?: string | null;
	}

	export enum CreateDashboardResponseCreationStatus { CREATION_IN_PROGRESS = 0, CREATION_SUCCESSFUL = 1, CREATION_FAILED = 2, UPDATE_IN_PROGRESS = 3, UPDATE_SUCCESSFUL = 4, UPDATE_FAILED = 5 }


	/** String parameter. */
	export interface StringParameter {
		Name: string;
		Values: Array<string>;
	}


	/** Integer parameter. */
	export interface IntegerParameter {
		Name: string;
		Values: Array<number>;
	}


	/** Decimal parameter. */
	export interface DecimalParameter {
		Name: string;
		Values: Array<number>;
	}


	/** Date time parameter. */
	export interface DateTimeParameter {
		Name: string;
		Values: Array<string>;
	}


	/** Permission for the resource. */
	export interface ResourcePermission {
		Principal: string;
		Actions: Array<string>;
	}


	/** Dashboard source template. */
	export interface DashboardSourceTemplate {
		DataSetReferences: Array<DataSetReference>;
		Arn: string;
	}


	/** Dataset reference. */
	export interface DataSetReference {
		DataSetPlaceholder: string;
		DataSetArn: string;
	}


	/** The key or keys of the key-value pairs for the resource tag or tags assigned to the resource. */
	export interface Tag {
		Key: string;
		Value: string;
	}


	/** Ad hoc (one-time) filtering option. */
	export interface AdHocFilteringOption {
		AvailabilityStatus?: AdHocFilteringOptionAvailabilityStatus | null;
	}

	export enum AdHocFilteringOptionAvailabilityStatus { ENABLED = 0, DISABLED = 1 }


	/** Export to .csv option. */
	export interface ExportToCSVOption {
		AvailabilityStatus?: AdHocFilteringOptionAvailabilityStatus | null;
	}


	/** Sheet controls option. */
	export interface SheetControlsOption {
		VisibilityState?: SheetControlsOptionVisibilityState | null;
	}

	export enum SheetControlsOptionVisibilityState { EXPANDED = 0, COLLAPSED = 1 }

	export interface ConflictException {
	}

	export interface UnsupportedUserEditionException {
	}

	export interface CreateDataSetResponse {
		Arn?: string | null;
		DataSetId?: string | null;
		IngestionArn?: string | null;
		IngestionId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** A view of a data source that contains information about the shape of the data in the underlying source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface PhysicalTable {

		/** A physical table type for relational data sources. */
		RelationalTable?: RelationalTable | null;

		/** A physical table type built from the results of the custom SQL query. */
		CustomSql?: CustomSql | null;

		/** A physical table type for as S3 data source. */
		S3Source?: S3Source | null;
	}


	/** A physical table type for relational data sources. */
	export interface RelationalTable {
		DataSourceArn: string;
		Schema?: string | null;
		Name: string;
		InputColumns: Array<InputColumn>;
	}


	/** Metadata for a column that is used as the input of a transform operation. */
	export interface InputColumn {
		Name: string;
		Type: InputColumnType;
	}

	export enum InputColumnType { STRING = 0, INTEGER = 1, DECIMAL = 2, DATETIME = 3, BIT = 4, BOOLEAN = 5, JSON = 6 }


	/** A physical table type built from the results of the custom SQL query. */
	export interface CustomSql {
		DataSourceArn: string;
		Name: string;
		SqlQuery: string;
		Columns?: Array<InputColumn> | null;
	}


	/** A physical table type for as S3 data source. */
	export interface S3Source {
		DataSourceArn: string;

		/** Information about the format for a source file or files. */
		UploadSettings?: UploadSettings | null;
		InputColumns: Array<InputColumn>;
	}


	/** Information about the format for a source file or files. */
	export interface UploadSettings {
		Format?: UploadSettingsFormat | null;
		StartFromRow?: number | null;
		ContainsHeader?: boolean | null;
		TextQualifier?: UploadSettingsTextQualifier | null;
		Delimiter?: string | null;
	}

	export enum UploadSettingsFormat { CSV = 0, TSV = 1, CLF = 2, ELF = 3, XLSX = 4, JSON = 5 }

	export enum UploadSettingsTextQualifier { DOUBLE_QUOTE = 0, SINGLE_QUOTE = 1 }


	/** A <i>logical table</i> is a unit that joins and that data transformations operate on. A logical table has a source, which can be either a physical table or result of a join. When a logical table points to a physical table, the logical table acts as a mutable copy of that physical table through transform operations. */
	export interface LogicalTable {
		Alias: string;
		DataTransforms?: Array<TransformOperation> | null;

		/**
		 * Information about the source of a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null.
		 * Required
		 */
		Source: LogicalTableSource;
	}


	/** A data transformation on a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface TransformOperation {

		/** A transform operation that projects columns. Operations that come after a projection can only refer to projected columns. */
		ProjectOperation?: ProjectOperation | null;

		/** A transform operation that filters rows based on a condition. */
		FilterOperation?: FilterOperation | null;

		/** A transform operation that creates calculated columns. Columns created in one such operation form a lexical closure. */
		CreateColumnsOperation?: CreateColumnsOperation | null;

		/** A transform operation that renames a column. */
		RenameColumnOperation?: RenameColumnOperation | null;

		/** A transform operation that casts a column to a different type. */
		CastColumnTypeOperation?: CastColumnTypeOperation | null;

		/** A transform operation that tags a column with additional information. */
		TagColumnOperation?: TagColumnOperation | null;
	}


	/** A transform operation that projects columns. Operations that come after a projection can only refer to projected columns. */
	export interface ProjectOperation {
		ProjectedColumns: Array<string>;
	}


	/** A transform operation that filters rows based on a condition. */
	export interface FilterOperation {
		ConditionExpression: string;
	}


	/** A transform operation that creates calculated columns. Columns created in one such operation form a lexical closure. */
	export interface CreateColumnsOperation {
		Columns: Array<CalculatedColumn>;
	}


	/** A calculated column for a dataset. */
	export interface CalculatedColumn {
		ColumnName: string;
		ColumnId: string;
		Expression: string;
	}


	/** A transform operation that renames a column. */
	export interface RenameColumnOperation {
		ColumnName: string;
		NewColumnName: string;
	}


	/** A transform operation that casts a column to a different type. */
	export interface CastColumnTypeOperation {
		ColumnName: string;
		NewColumnType: CastColumnTypeOperationNewColumnType;
		Format?: string | null;
	}

	export enum CastColumnTypeOperationNewColumnType { STRING = 0, INTEGER = 1, DECIMAL = 2, DATETIME = 3 }


	/** A transform operation that tags a column with additional information. */
	export interface TagColumnOperation {
		ColumnName: string;
		Tags: Array<ColumnTag>;
	}


	/** A tag for a column in a <code>TagColumnOperation</code> structure. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface ColumnTag {
		ColumnGeographicRole?: ColumnTagColumnGeographicRole | null;
	}

	export enum ColumnTagColumnGeographicRole { COUNTRY = 0, STATE = 1, COUNTY = 2, CITY = 3, POSTCODE = 4, LONGITUDE = 5, LATITUDE = 6 }


	/** Information about the source of a logical table. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface LogicalTableSource {

		/** Join instruction. */
		JoinInstruction?: JoinInstruction | null;
		PhysicalTableId?: string | null;
	}


	/** Join instruction. */
	export interface JoinInstruction {
		LeftOperand: string;
		RightOperand: string;
		Type: JoinInstructionType;
		OnClause: string;
	}

	export enum JoinInstructionType { INNER = 0, OUTER = 1, LEFT = 2, RIGHT = 3 }


	/** Groupings of columns that work together in certain Amazon QuickSight features. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface ColumnGroup {

		/** Geospatial column group that denotes a hierarchy. */
		GeoSpatialColumnGroup?: GeoSpatialColumnGroup | null;
	}


	/** Geospatial column group that denotes a hierarchy. */
	export interface GeoSpatialColumnGroup {
		Name: string;
		CountryCode: GeoSpatialColumnGroupCountryCode;
		Columns: Array<string>;
	}

	export enum GeoSpatialColumnGroupCountryCode { US = 0 }

	export enum RowLevelPermissionPolicy { GRANT_ACCESS = 0, DENY_ACCESS = 1 }

	export interface LimitExceededException {
	}

	export interface CreateDataSourceResponse {
		Arn?: string | null;
		DataSourceId?: string | null;
		CreationStatus?: CreateDashboardResponseCreationStatus | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** Amazon Elasticsearch Service parameters. */
	export interface AmazonElasticsearchParameters {
		Domain: string;
	}


	/** Amazon Athena parameters. */
	export interface AthenaParameters {
		WorkGroup?: string | null;
	}


	/** Amazon Aurora parameters. */
	export interface AuroraParameters {
		Host: string;
		Port: number;
		Database: string;
	}


	/** Amazon Aurora with PostgreSQL compatibility parameters. */
	export interface AuroraPostgreSqlParameters {
		Host: string;
		Port: number;
		Database: string;
	}


	/** AWS IoT Analytics parameters. */
	export interface AwsIotAnalyticsParameters {
		DataSetName: string;
	}


	/** Jira parameters. */
	export interface JiraParameters {
		SiteBaseUrl: string;
	}


	/** MariaDB parameters. */
	export interface MariaDbParameters {
		Host: string;
		Port: number;
		Database: string;
	}


	/** MySQL parameters. */
	export interface MySqlParameters {
		Host: string;
		Port: number;
		Database: string;
	}


	/** PostgreSQL parameters. */
	export interface PostgreSqlParameters {
		Host: string;
		Port: number;
		Database: string;
	}


	/** Presto parameters. */
	export interface PrestoParameters {
		Host: string;
		Port: number;
		Catalog: string;
	}


	/** Amazon RDS parameters. */
	export interface RdsParameters {
		InstanceId: string;
		Database: string;
	}


	/** Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set. */
	export interface RedshiftParameters {
		Host?: string | null;
		Port?: number | null;
		Database: string;
		ClusterId?: string | null;
	}


	/** S3 parameters. */
	export interface S3Parameters {

		/**
		 * Amazon S3 manifest file location.
		 * Required
		 */
		ManifestFileLocation: ManifestFileLocation;
	}


	/** Amazon S3 manifest file location. */
	export interface ManifestFileLocation {
		Bucket: string;
		Key: string;
	}


	/** ServiceNow parameters. */
	export interface ServiceNowParameters {
		SiteBaseUrl: string;
	}


	/** Snowflake parameters. */
	export interface SnowflakeParameters {
		Host: string;
		Database: string;
		Warehouse: string;
	}


	/** Spark parameters. */
	export interface SparkParameters {
		Host: string;
		Port: number;
	}


	/** SQL Server parameters. */
	export interface SqlServerParameters {
		Host: string;
		Port: number;
		Database: string;
	}


	/** Teradata parameters. */
	export interface TeradataParameters {
		Host: string;
		Port: number;
		Database: string;
	}


	/** Twitter parameters. */
	export interface TwitterParameters {
		Query: string;
		MaxRows: number;
	}


	/** The combination of user name and password that are used as credentials. */
	export interface CredentialPair {
		Username: string;
		Password: string;
	}


	/** The response object for this operation. */
	export interface CreateGroupResponse {

		/** A <i>group</i> in Amazon QuickSight consists of a set of users. You can use groups to make it easier to manage access and security. Currently, an Amazon QuickSight subscription can't contain more than 500 Amazon QuickSight groups. */
		Group?: Group | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** A <i>group</i> in Amazon QuickSight consists of a set of users. You can use groups to make it easier to manage access and security. Currently, an Amazon QuickSight subscription can't contain more than 500 Amazon QuickSight groups. */
	export interface Group {
		Arn?: string | null;
		GroupName?: string | null;
		Description?: string | null;
		PrincipalId?: string | null;
	}

	export interface PreconditionNotMetException {
	}

	export interface ResourceUnavailableException {
	}

	export interface CreateGroupMembershipResponse {

		/** A member of an Amazon QuickSight group. Currently, group members must be users. Groups can't be members of another group. . */
		GroupMember?: GroupMember | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** A member of an Amazon QuickSight group. Currently, group members must be users. Groups can't be members of another group. . */
	export interface GroupMember {
		Arn?: string | null;
		MemberName?: string | null;
	}

	export interface CreateIAMPolicyAssignmentResponse {
		AssignmentName?: string | null;
		AssignmentId?: string | null;
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
		PolicyArn?: string | null;
		Identities?: IdentityMap | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export enum CreateIAMPolicyAssignmentResponseAssignmentStatus { ENABLED = 0, DRAFT = 1, DISABLED = 2 }

	export interface IdentityMap {
	}

	export interface ConcurrentUpdatingException {
	}

	export interface CreateIngestionResponse {
		Arn?: string | null;
		IngestionId?: string | null;
		IngestionStatus?: CreateIngestionResponseIngestionStatus | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export enum CreateIngestionResponseIngestionStatus { INITIALIZED = 0, QUEUED = 1, RUNNING = 2, FAILED = 3, COMPLETED = 4, CANCELLED = 5 }

	export interface CreateTemplateResponse {
		Arn?: string | null;
		VersionArn?: string | null;
		TemplateId?: string | null;
		CreationStatus?: CreateDashboardResponseCreationStatus | null;
		Status?: number | null;
		RequestId?: string | null;
	}


	/** The source analysis of the template. */
	export interface TemplateSourceAnalysis {
		Arn: string;
		DataSetReferences: Array<DataSetReference>;
	}


	/** The source template of the template. */
	export interface TemplateSourceTemplate {
		Arn: string;
	}

	export interface CreateTemplateAliasResponse {

		/** The template alias. */
		TemplateAlias?: TemplateAlias | null;
		Status?: number | null;
		RequestId?: string | null;
	}


	/** The template alias. */
	export interface TemplateAlias {
		AliasName?: string | null;
		Arn?: string | null;
		TemplateVersionNumber?: number | null;
	}

	export interface DeleteDashboardResponse {
		Status?: number | null;
		Arn?: string | null;
		DashboardId?: string | null;
		RequestId?: string | null;
	}

	export interface DeleteDataSetResponse {
		Arn?: string | null;
		DataSetId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DeleteDataSourceResponse {
		Arn?: string | null;
		DataSourceId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DeleteGroupResponse {
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DeleteGroupMembershipResponse {
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DeleteIAMPolicyAssignmentResponse {
		AssignmentName?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DeleteTemplateResponse {
		RequestId?: string | null;
		Arn?: string | null;
		TemplateId?: string | null;
		Status?: number | null;
	}

	export interface DeleteTemplateAliasResponse {
		Status?: number | null;
		TemplateId?: string | null;
		AliasName?: string | null;
		Arn?: string | null;
		RequestId?: string | null;
	}

	export interface DeleteUserResponse {
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DeleteUserByPrincipalIdResponse {
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DescribeDashboardResponse {

		/** Dashboard. */
		Dashboard?: Dashboard | null;
		Status?: number | null;
		RequestId?: string | null;
	}


	/** Dashboard. */
	export interface Dashboard {
		DashboardId?: string | null;
		Arn?: string | null;
		Name?: string | null;

		/** Dashboard version. */
		Version?: DashboardVersion | null;
		CreatedTime?: Date | null;
		LastPublishedTime?: Date | null;
		LastUpdatedTime?: Date | null;
	}


	/** Dashboard version. */
	export interface DashboardVersion {
		CreatedTime?: Date | null;
		Errors?: Array<DashboardError> | null;
		VersionNumber?: number | null;
		Status?: CreateDashboardResponseCreationStatus | null;
		Arn?: string | null;
		SourceEntityArn?: string | null;
		DataSetArns?: Array<string> | null;
		Description?: string | null;
	}


	/** Dashboard error. */
	export interface DashboardError {
		Type?: DashboardErrorType | null;
		Message?: string | null;
	}

	export enum DashboardErrorType { ACCESS_DENIED = 0, SOURCE_NOT_FOUND = 1, DATA_SET_NOT_FOUND = 2, INTERNAL_FAILURE = 3, PARAMETER_VALUE_INCOMPATIBLE = 4, PARAMETER_TYPE_INVALID = 5, PARAMETER_NOT_FOUND = 6, COLUMN_TYPE_MISMATCH = 7, COLUMN_GEOGRAPHIC_ROLE_MISMATCH = 8, COLUMN_REPLACEMENT_MISSING = 9 }

	export interface DescribeDashboardPermissionsResponse {
		DashboardId?: string | null;
		DashboardArn?: string | null;
		Permissions?: Array<ResourcePermission> | null;
		Status?: number | null;
		RequestId?: string | null;
	}

	export interface DescribeDataSetResponse {

		/** Dataset. */
		DataSet?: DataSet | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** Dataset. */
	export interface DataSet {
		Arn?: string | null;
		DataSetId?: string | null;
		Name?: string | null;
		CreatedTime?: Date | null;
		LastUpdatedTime?: Date | null;
		PhysicalTableMap?: PhysicalTableMap | null;
		LogicalTableMap?: LogicalTableMap | null;
		OutputColumns?: Array<OutputColumn> | null;
		ImportMode?: DataSetImportMode | null;
		ConsumedSpiceCapacityInBytes?: number | null;
		ColumnGroups?: Array<ColumnGroup> | null;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: RowLevelPermissionDataSet | null;
	}

	export interface PhysicalTableMap {
	}

	export interface LogicalTableMap {
	}


	/** Output column. */
	export interface OutputColumn {
		Name?: string | null;
		Type?: CastColumnTypeOperationNewColumnType | null;
	}

	export enum DataSetImportMode { SPICE = 0, DIRECT_QUERY = 1 }


	/** The row-level security configuration for the dataset. */
	export interface RowLevelPermissionDataSet {
		Arn: string;
		PermissionPolicy: RowLevelPermissionPolicy;
	}

	export interface DescribeDataSetPermissionsResponse {
		DataSetArn?: string | null;
		DataSetId?: string | null;
		Permissions?: Array<ResourcePermission> | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DescribeDataSourceResponse {

		/** The structure of a data source. */
		DataSource?: DataSource | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** The structure of a data source. */
	export interface DataSource {
		Arn?: string | null;
		DataSourceId?: string | null;
		Name?: string | null;
		Type?: DataSourceType | null;
		Status?: CreateDashboardResponseCreationStatus | null;
		CreatedTime?: Date | null;
		LastUpdatedTime?: Date | null;

		/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
		DataSourceParameters?: DataSourceParameters | null;

		/** VPC connection properties. */
		VpcConnectionProperties?: VpcConnectionProperties | null;

		/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
		SslProperties?: SslProperties | null;

		/** Error information for the data source creation or update. */
		ErrorInfo?: DataSourceErrorInfo | null;
	}

	export enum DataSourceType { ADOBE_ANALYTICS = 0, AMAZON_ELASTICSEARCH = 1, ATHENA = 2, AURORA = 3, AURORA_POSTGRESQL = 4, AWS_IOT_ANALYTICS = 5, GITHUB = 6, JIRA = 7, MARIADB = 8, MYSQL = 9, POSTGRESQL = 10, PRESTO = 11, REDSHIFT = 12, S3 = 13, SALESFORCE = 14, SERVICENOW = 15, SNOWFLAKE = 16, SPARK = 17, SQLSERVER = 18, TERADATA = 19, TWITTER = 20 }


	/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
	export interface DataSourceParameters {

		/** Amazon Elasticsearch Service parameters. */
		AmazonElasticsearchParameters?: AmazonElasticsearchParameters | null;

		/** Amazon Athena parameters. */
		AthenaParameters?: AthenaParameters | null;

		/** Amazon Aurora parameters. */
		AuroraParameters?: AuroraParameters | null;

		/** Amazon Aurora with PostgreSQL compatibility parameters. */
		AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters | null;

		/** AWS IoT Analytics parameters. */
		AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters | null;

		/** Jira parameters. */
		JiraParameters?: JiraParameters | null;

		/** MariaDB parameters. */
		MariaDbParameters?: MariaDbParameters | null;

		/** MySQL parameters. */
		MySqlParameters?: MySqlParameters | null;

		/** PostgreSQL parameters. */
		PostgreSqlParameters?: PostgreSqlParameters | null;

		/** Presto parameters. */
		PrestoParameters?: PrestoParameters | null;

		/** Amazon RDS parameters. */
		RdsParameters?: RdsParameters | null;

		/** Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set. */
		RedshiftParameters?: RedshiftParameters | null;

		/** S3 parameters. */
		S3Parameters?: S3Parameters | null;

		/** ServiceNow parameters. */
		ServiceNowParameters?: ServiceNowParameters | null;

		/** Snowflake parameters. */
		SnowflakeParameters?: SnowflakeParameters | null;

		/** Spark parameters. */
		SparkParameters?: SparkParameters | null;

		/** SQL Server parameters. */
		SqlServerParameters?: SqlServerParameters | null;

		/** Teradata parameters. */
		TeradataParameters?: TeradataParameters | null;

		/** Twitter parameters. */
		TwitterParameters?: TwitterParameters | null;
	}


	/** VPC connection properties. */
	export interface VpcConnectionProperties {
		VpcConnectionArn: string;
	}


	/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
	export interface SslProperties {
		DisableSsl?: boolean | null;
	}


	/** Error information for the data source creation or update. */
	export interface DataSourceErrorInfo {
		Type?: DataSourceErrorInfoType | null;
		Message?: string | null;
	}

	export enum DataSourceErrorInfoType { TIMEOUT = 0, ENGINE_VERSION_NOT_SUPPORTED = 1, UNKNOWN_HOST = 2, GENERIC_SQL_FAILURE = 3, CONFLICT = 4, UNKNOWN = 5 }

	export interface DescribeDataSourcePermissionsResponse {
		DataSourceArn?: string | null;
		DataSourceId?: string | null;
		Permissions?: Array<ResourcePermission> | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DescribeGroupResponse {

		/** A <i>group</i> in Amazon QuickSight consists of a set of users. You can use groups to make it easier to manage access and security. Currently, an Amazon QuickSight subscription can't contain more than 500 Amazon QuickSight groups. */
		Group?: Group | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DescribeIAMPolicyAssignmentResponse {

		/** An IAM policy assignment. */
		IAMPolicyAssignment?: IAMPolicyAssignment | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** An IAM policy assignment. */
	export interface IAMPolicyAssignment {
		AwsAccountId?: string | null;
		AssignmentId?: string | null;
		AssignmentName?: string | null;
		PolicyArn?: string | null;
		Identities?: IdentityMap | null;
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
	}

	export interface InvalidNextTokenException {
	}

	export interface DescribeIngestionResponse {

		/** Information about the SPICE ingestion for a dataset. */
		Ingestion?: Ingestion | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** Information about the SPICE ingestion for a dataset. */
	export interface Ingestion {
		Arn: string;
		IngestionId?: string | null;
		IngestionStatus: CreateIngestionResponseIngestionStatus;

		/** Error information for the SPICE ingestion of a dataset. */
		ErrorInfo?: ErrorInfo | null;

		/** Information about rows for a data set SPICE ingestion. */
		RowInfo?: RowInfo | null;

		/** Information about a queued dataset SPICE ingestion. */
		QueueInfo?: QueueInfo | null;
		CreatedTime: Date;
		IngestionTimeInSeconds?: number | null;
		IngestionSizeInBytes?: number | null;
		RequestSource?: IngestionRequestSource | null;
		RequestType?: IngestionRequestType | null;
	}


	/** Error information for the SPICE ingestion of a dataset. */
	export interface ErrorInfo {
		Type?: ErrorInfoType | null;
		Message?: string | null;
	}

	export enum ErrorInfoType { FAILURE_TO_ASSUME_ROLE = 0, INGESTION_SUPERSEDED = 1, INGESTION_CANCELED = 2, DATA_SET_DELETED = 3, DATA_SET_NOT_SPICE = 4, S3_UPLOADED_FILE_DELETED = 5, S3_MANIFEST_ERROR = 6, DATA_TOLERANCE_EXCEPTION = 7, SPICE_TABLE_NOT_FOUND = 8, DATA_SET_SIZE_LIMIT_EXCEEDED = 9, ROW_SIZE_LIMIT_EXCEEDED = 10, ACCOUNT_CAPACITY_LIMIT_EXCEEDED = 11, CUSTOMER_ERROR = 12, DATA_SOURCE_NOT_FOUND = 13, IAM_ROLE_NOT_AVAILABLE = 14, CONNECTION_FAILURE = 15, SQL_TABLE_NOT_FOUND = 16, PERMISSION_DENIED = 17, SSL_CERTIFICATE_VALIDATION_FAILURE = 18, OAUTH_TOKEN_FAILURE = 19, SOURCE_API_LIMIT_EXCEEDED_FAILURE = 20, PASSWORD_AUTHENTICATION_FAILURE = 21, SQL_SCHEMA_MISMATCH_ERROR = 22, INVALID_DATE_FORMAT = 23, INVALID_DATAPREP_SYNTAX = 24, SOURCE_RESOURCE_LIMIT_EXCEEDED = 25, SQL_INVALID_PARAMETER_VALUE = 26, QUERY_TIMEOUT = 27, SQL_NUMERIC_OVERFLOW = 28, UNRESOLVABLE_HOST = 29, UNROUTABLE_HOST = 30, SQL_EXCEPTION = 31, S3_FILE_INACCESSIBLE = 32, IOT_FILE_NOT_FOUND = 33, IOT_DATA_SET_FILE_EMPTY = 34, INVALID_DATA_SOURCE_CONFIG = 35, DATA_SOURCE_AUTH_FAILED = 36, DATA_SOURCE_CONNECTION_FAILED = 37, FAILURE_TO_PROCESS_JSON_FILE = 38, INTERNAL_SERVICE_ERROR = 39 }


	/** Information about rows for a data set SPICE ingestion. */
	export interface RowInfo {
		RowsIngested?: number | null;
		RowsDropped?: number | null;
	}


	/** Information about a queued dataset SPICE ingestion. */
	export interface QueueInfo {
		WaitingOnIngestion: string;
		QueuedIngestion: string;
	}

	export enum IngestionRequestSource { MANUAL = 0, SCHEDULED = 1 }

	export enum IngestionRequestType { INITIAL_INGESTION = 0, EDIT = 1, INCREMENTAL_REFRESH = 2, FULL_REFRESH = 3 }

	export interface DescribeTemplateResponse {

		/** <p>A template object. A <i>template</i> is an entity in QuickSight that encapsulates the metadata required to create an analysis and that you can use to create a dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.</p> <p>You can share templates across AWS accounts by allowing users in other AWS accounts to create a template or a dashboard from an existing template.</p> */
		Template?: Template | null;
		Status?: number | null;
	}


	/** <p>A template object. A <i>template</i> is an entity in QuickSight that encapsulates the metadata required to create an analysis and that you can use to create a dashboard. A template adds a layer of abstraction by using placeholders to replace the dataset associated with the analysis. You can use templates to create dashboards by replacing dataset placeholders with datasets that follow the same schema that was used to create the source analysis and template.</p> <p>You can share templates across AWS accounts by allowing users in other AWS accounts to create a template or a dashboard from an existing template.</p> */
	export interface Template {
		Arn?: string | null;
		Name?: string | null;

		/** A version of a template. */
		Version?: TemplateVersion | null;
		TemplateId?: string | null;
		LastUpdatedTime?: Date | null;
		CreatedTime?: Date | null;
	}


	/** A version of a template. */
	export interface TemplateVersion {
		CreatedTime?: Date | null;
		Errors?: Array<TemplateError> | null;
		VersionNumber?: number | null;
		Status?: CreateDashboardResponseCreationStatus | null;
		DataSetConfigurations?: Array<DataSetConfiguration> | null;
		Description?: string | null;
		SourceEntityArn?: string | null;
	}


	/** List of errors that occurred when the template version creation failed. */
	export interface TemplateError {
		Type?: TemplateErrorType | null;
		Message?: string | null;
	}

	export enum TemplateErrorType { SOURCE_NOT_FOUND = 0, DATA_SET_NOT_FOUND = 1, INTERNAL_FAILURE = 2 }


	/** Dataset configuration. */
	export interface DataSetConfiguration {
		Placeholder?: string | null;

		/** Dataset schema. */
		DataSetSchema?: DataSetSchema | null;
		ColumnGroupSchemaList?: Array<ColumnGroupSchema> | null;
	}


	/** Dataset schema. */
	export interface DataSetSchema {
		ColumnSchemaList?: Array<ColumnSchema> | null;
	}


	/** The column schema. */
	export interface ColumnSchema {
		Name?: string | null;
		DataType?: string | null;
		GeographicRole?: string | null;
	}


	/** The column group schema. */
	export interface ColumnGroupSchema {
		Name?: string | null;
		ColumnGroupColumnSchemaList?: Array<ColumnGroupColumnSchema> | null;
	}


	/** A structure describing the name, data type, and geographic role of the columns. */
	export interface ColumnGroupColumnSchema {
		Name?: string | null;
	}

	export interface DescribeTemplateAliasResponse {

		/** The template alias. */
		TemplateAlias?: TemplateAlias | null;
		Status?: number | null;
		RequestId?: string | null;
	}

	export interface DescribeTemplatePermissionsResponse {
		TemplateId?: string | null;
		TemplateArn?: string | null;
		Permissions?: Array<ResourcePermission> | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface DescribeUserResponse {

		/** A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription can't contain more than 20 million users. */
		User?: User | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription can't contain more than 20 million users. */
	export interface User {
		Arn?: string | null;
		UserName?: string | null;
		Email?: string | null;
		Role?: UserRole | null;
		IdentityType?: UserIdentityType | null;
		Active?: boolean | null;
		PrincipalId?: string | null;
	}

	export enum UserRole { ADMIN = 0, AUTHOR = 1, READER = 2, RESTRICTED_AUTHOR = 3, RESTRICTED_READER = 4 }

	export enum UserIdentityType { IAM = 0, QUICKSIGHT = 1 }

	export interface GetDashboardEmbedUrlResponse {
		EmbedUrl?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}

	export interface DomainNotWhitelistedException {
	}

	export interface QuickSightUserNotFoundException {
	}

	export interface IdentityTypeNotSupportedException {
	}

	export interface SessionLifetimeInMinutesInvalidException {
	}

	export interface ListDashboardVersionsResponse {
		DashboardVersionSummaryList?: Array<DashboardVersionSummary> | null;
		NextToken?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}


	/** Dashboard version summary. */
	export interface DashboardVersionSummary {
		Arn?: string | null;
		CreatedTime?: Date | null;
		VersionNumber?: number | null;
		Status?: CreateDashboardResponseCreationStatus | null;
		SourceEntityArn?: string | null;
		Description?: string | null;
	}

	export interface ListDashboardsResponse {
		DashboardSummaryList?: Array<DashboardSummary> | null;
		NextToken?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}


	/** Dashboard summary. */
	export interface DashboardSummary {
		Arn?: string | null;
		DashboardId?: string | null;
		Name?: string | null;
		CreatedTime?: Date | null;
		LastUpdatedTime?: Date | null;
		PublishedVersionNumber?: number | null;
		LastPublishedTime?: Date | null;
	}

	export interface ListDataSetsResponse {
		DataSetSummaries?: Array<DataSetSummary> | null;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** Dataset summary. */
	export interface DataSetSummary {
		Arn?: string | null;
		DataSetId?: string | null;
		Name?: string | null;
		CreatedTime?: Date | null;
		LastUpdatedTime?: Date | null;
		ImportMode?: DataSetImportMode | null;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: RowLevelPermissionDataSet | null;
	}

	export interface ListDataSourcesResponse {
		DataSources?: Array<DataSource> | null;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface ListGroupMembershipsResponse {
		GroupMemberList?: Array<GroupMember> | null;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface ListGroupsResponse {
		GroupList?: Array<Group> | null;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface ListIAMPolicyAssignmentsResponse {
		IAMPolicyAssignments?: Array<IAMPolicyAssignmentSummary> | null;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}


	/** IAM policy assignment summary. */
	export interface IAMPolicyAssignmentSummary {
		AssignmentName?: string | null;
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
	}

	export interface ListIAMPolicyAssignmentsForUserResponse {
		ActiveAssignments?: Array<ActiveIAMPolicyAssignment> | null;
		RequestId?: string | null;
		NextToken?: string | null;
		Status?: number | null;
	}


	/** The active AWS Identity and Access Management (IAM) policy assignment. */
	export interface ActiveIAMPolicyAssignment {
		AssignmentName?: string | null;
		PolicyArn?: string | null;
	}

	export interface ListIngestionsResponse {
		Ingestions?: Array<Ingestion> | null;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface ListTagsForResourceResponse {
		Tags?: Array<Tag> | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface ListTemplateAliasesResponse {
		TemplateAliasList?: Array<TemplateAlias> | null;
		Status?: number | null;
		RequestId?: string | null;
		NextToken?: string | null;
	}

	export interface ListTemplateVersionsResponse {
		TemplateVersionSummaryList?: Array<TemplateVersionSummary> | null;
		NextToken?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}


	/** The template version. */
	export interface TemplateVersionSummary {
		Arn?: string | null;
		VersionNumber?: number | null;
		CreatedTime?: Date | null;
		Status?: CreateDashboardResponseCreationStatus | null;
		Description?: string | null;
	}

	export interface ListTemplatesResponse {
		TemplateSummaryList?: Array<TemplateSummary> | null;
		NextToken?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}


	/** The template summary. */
	export interface TemplateSummary {
		Arn?: string | null;
		TemplateId?: string | null;
		Name?: string | null;
		LatestVersionNumber?: number | null;
		CreatedTime?: Date | null;
		LastUpdatedTime?: Date | null;
	}

	export interface ListUserGroupsResponse {
		GroupList?: Array<Group> | null;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface ListUsersResponse {
		UserList?: Array<User> | null;
		NextToken?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface RegisterUserResponse {

		/** A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription can't contain more than 20 million users. */
		User?: User | null;
		UserInvitationUrl?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface SearchDashboardsResponse {
		DashboardSummaryList?: Array<DashboardSummary> | null;
		NextToken?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}


	/** A filter that you apply when searching for dashboards.  */
	export interface DashboardSearchFilter {
		Operator: DashboardSearchFilterOperator;
		Name?: DashboardSearchFilterName | null;
		Value?: string | null;
	}

	export enum DashboardSearchFilterOperator { StringEquals = 0 }

	export enum DashboardSearchFilterName { QUICKSIGHT_USER = 0 }

	export interface TagResourceResponse {
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface UntagResourceResponse {
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface UpdateDashboardResponse {
		Arn?: string | null;
		VersionArn?: string | null;
		DashboardId?: string | null;
		CreationStatus?: CreateDashboardResponseCreationStatus | null;
		Status?: number | null;
		RequestId?: string | null;
	}

	export interface UpdateDashboardPermissionsResponse {
		DashboardArn?: string | null;
		DashboardId?: string | null;
		Permissions?: Array<ResourcePermission> | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface UpdateDashboardPublishedVersionResponse {
		DashboardId?: string | null;
		DashboardArn?: string | null;
		Status?: number | null;
		RequestId?: string | null;
	}

	export interface UpdateDataSetResponse {
		Arn?: string | null;
		DataSetId?: string | null;
		IngestionArn?: string | null;
		IngestionId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface UpdateDataSetPermissionsResponse {
		DataSetArn?: string | null;
		DataSetId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface UpdateDataSourceResponse {
		Arn?: string | null;
		DataSourceId?: string | null;
		UpdateStatus?: CreateDashboardResponseCreationStatus | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface UpdateDataSourcePermissionsResponse {
		DataSourceArn?: string | null;
		DataSourceId?: string | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface UpdateGroupResponse {

		/** A <i>group</i> in Amazon QuickSight consists of a set of users. You can use groups to make it easier to manage access and security. Currently, an Amazon QuickSight subscription can't contain more than 500 Amazon QuickSight groups. */
		Group?: Group | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface UpdateIAMPolicyAssignmentResponse {
		AssignmentName?: string | null;
		AssignmentId?: string | null;
		PolicyArn?: string | null;
		Identities?: IdentityMap | null;
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface UpdateTemplateResponse {
		TemplateId?: string | null;
		Arn?: string | null;
		VersionArn?: string | null;
		CreationStatus?: CreateDashboardResponseCreationStatus | null;
		Status?: number | null;
		RequestId?: string | null;
	}

	export interface UpdateTemplateAliasResponse {

		/** The template alias. */
		TemplateAlias?: TemplateAlias | null;
		Status?: number | null;
		RequestId?: string | null;
	}

	export interface UpdateTemplatePermissionsResponse {
		TemplateId?: string | null;
		TemplateArn?: string | null;
		Permissions?: Array<ResourcePermission> | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export interface UpdateUserResponse {

		/** A registered user of Amazon QuickSight. Currently, an Amazon QuickSight subscription can't contain more than 20 million users. */
		User?: User | null;
		RequestId?: string | null;
		Status?: number | null;
	}

	export enum DashboardBehavior { ENABLED = 0, DISABLED = 1 }

	export enum AssignmentStatus { ENABLED = 0, DRAFT = 1, DISABLED = 2 }

	export interface CancelIngestionRequest {
	}

	export enum ColumnDataType { STRING = 0, INTEGER = 1, DECIMAL = 2, DATETIME = 3 }

	export enum GeoSpatialDataRole { COUNTRY = 0, STATE = 1, COUNTY = 2, CITY = 3, POSTCODE = 4, LONGITUDE = 5, LATITUDE = 6 }


	/** Parameters. */
	export interface Parameters {
		StringParameters?: Array<StringParameter> | null;
		IntegerParameters?: Array<IntegerParameter> | null;
		DecimalParameters?: Array<DecimalParameter> | null;
		DateTimeParameters?: Array<DateTimeParameter> | null;
	}


	/** Dashboard source entity. */
	export interface DashboardSourceEntity {

		/** Dashboard source template. */
		SourceTemplate?: DashboardSourceTemplate | null;
	}


	/** Dashboard publish options. */
	export interface DashboardPublishOptions {

		/** Ad hoc (one-time) filtering option. */
		AdHocFilteringOption?: AdHocFilteringOption | null;

		/** Export to .csv option. */
		ExportToCSVOption?: ExportToCSVOption | null;

		/** Sheet controls option. */
		SheetControlsOption?: SheetControlsOption | null;
	}

	export interface CreateDashboardRequest {
		Name: string;

		/** Parameters. */
		Parameters?: Parameters | null;
		Permissions?: Array<ResourcePermission> | null;

		/**
		 * Dashboard source entity.
		 * Required
		 */
		SourceEntity: DashboardSourceEntity;
		Tags?: Array<Tag> | null;
		VersionDescription?: string | null;

		/** Dashboard publish options. */
		DashboardPublishOptions?: DashboardPublishOptions | null;
	}

	export enum ResourceStatus { CREATION_IN_PROGRESS = 0, CREATION_SUCCESSFUL = 1, CREATION_FAILED = 2, UPDATE_IN_PROGRESS = 3, UPDATE_SUCCESSFUL = 4, UPDATE_FAILED = 5 }

	export interface CreateDataSetRequest {
		DataSetId: string;
		Name: string;
		PhysicalTableMap: PhysicalTableMap;
		LogicalTableMap?: LogicalTableMap | null;
		ImportMode: DataSetImportMode;
		ColumnGroups?: Array<ColumnGroup> | null;
		Permissions?: Array<ResourcePermission> | null;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: RowLevelPermissionDataSet | null;
		Tags?: Array<Tag> | null;
	}


	/** Data source credentials. */
	export interface DataSourceCredentials {

		/** The combination of user name and password that are used as credentials. */
		CredentialPair?: CredentialPair | null;
	}

	export interface CreateDataSourceRequest {
		DataSourceId: string;
		Name: string;
		Type: DataSourceType;

		/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
		DataSourceParameters?: DataSourceParameters | null;

		/** Data source credentials. */
		Credentials?: DataSourceCredentials | null;
		Permissions?: Array<ResourcePermission> | null;

		/** VPC connection properties. */
		VpcConnectionProperties?: VpcConnectionProperties | null;

		/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
		SslProperties?: SslProperties | null;
		Tags?: Array<Tag> | null;
	}

	export interface CreateGroupMembershipRequest {
	}


	/** The request object for this operation.  */
	export interface CreateGroupRequest {
		GroupName: string;
		Description?: string | null;
	}

	export interface CreateIAMPolicyAssignmentRequest {
		AssignmentName: string;
		AssignmentStatus: CreateIAMPolicyAssignmentResponseAssignmentStatus;
		PolicyArn?: string | null;
		Identities?: IdentityMap | null;
	}

	export interface CreateIngestionRequest {
	}

	export enum IngestionStatus { INITIALIZED = 0, QUEUED = 1, RUNNING = 2, FAILED = 3, COMPLETED = 4, CANCELLED = 5 }

	export interface CreateTemplateAliasRequest {
		TemplateVersionNumber: number;
	}


	/** The source entity of the template. */
	export interface TemplateSourceEntity {

		/** The source analysis of the template. */
		SourceAnalysis?: TemplateSourceAnalysis | null;

		/** The source template of the template. */
		SourceTemplate?: TemplateSourceTemplate | null;
	}

	export interface CreateTemplateRequest {
		Name?: string | null;
		Permissions?: Array<ResourcePermission> | null;

		/**
		 * The source entity of the template.
		 * Required
		 */
		SourceEntity: TemplateSourceEntity;
		Tags?: Array<Tag> | null;
		VersionDescription?: string | null;
	}

	export enum DashboardFilterAttribute { QUICKSIGHT_USER = 0 }

	export enum FilterOperator { StringEquals = 0 }

	export enum DashboardUIState { EXPANDED = 0, COLLAPSED = 1 }

	export interface DeleteDashboardRequest {
	}

	export interface DeleteDataSetRequest {
	}

	export interface DeleteDataSourceRequest {
	}

	export interface DeleteGroupMembershipRequest {
	}

	export interface DeleteGroupRequest {
	}

	export interface DeleteIAMPolicyAssignmentRequest {
	}

	export interface DeleteTemplateAliasRequest {
	}

	export interface DeleteTemplateRequest {
	}


	/** <p/> */
	export interface DeleteUserByPrincipalIdRequest {
	}

	export interface DeleteUserRequest {
	}

	export interface DescribeDashboardPermissionsRequest {
	}

	export interface DescribeDashboardRequest {
	}

	export interface DescribeDataSetPermissionsRequest {
	}

	export interface DescribeDataSetRequest {
	}

	export interface DescribeDataSourcePermissionsRequest {
	}

	export interface DescribeDataSourceRequest {
	}

	export interface DescribeGroupRequest {
	}

	export interface DescribeIAMPolicyAssignmentRequest {
	}

	export interface DescribeIngestionRequest {
	}

	export interface DescribeTemplateAliasRequest {
	}

	export interface DescribeTemplatePermissionsRequest {
	}

	export interface DescribeTemplateRequest {
	}

	export interface DescribeUserRequest {
	}

	export enum IngestionErrorType { FAILURE_TO_ASSUME_ROLE = 0, INGESTION_SUPERSEDED = 1, INGESTION_CANCELED = 2, DATA_SET_DELETED = 3, DATA_SET_NOT_SPICE = 4, S3_UPLOADED_FILE_DELETED = 5, S3_MANIFEST_ERROR = 6, DATA_TOLERANCE_EXCEPTION = 7, SPICE_TABLE_NOT_FOUND = 8, DATA_SET_SIZE_LIMIT_EXCEEDED = 9, ROW_SIZE_LIMIT_EXCEEDED = 10, ACCOUNT_CAPACITY_LIMIT_EXCEEDED = 11, CUSTOMER_ERROR = 12, DATA_SOURCE_NOT_FOUND = 13, IAM_ROLE_NOT_AVAILABLE = 14, CONNECTION_FAILURE = 15, SQL_TABLE_NOT_FOUND = 16, PERMISSION_DENIED = 17, SSL_CERTIFICATE_VALIDATION_FAILURE = 18, OAUTH_TOKEN_FAILURE = 19, SOURCE_API_LIMIT_EXCEEDED_FAILURE = 20, PASSWORD_AUTHENTICATION_FAILURE = 21, SQL_SCHEMA_MISMATCH_ERROR = 22, INVALID_DATE_FORMAT = 23, INVALID_DATAPREP_SYNTAX = 24, SOURCE_RESOURCE_LIMIT_EXCEEDED = 25, SQL_INVALID_PARAMETER_VALUE = 26, QUERY_TIMEOUT = 27, SQL_NUMERIC_OVERFLOW = 28, UNRESOLVABLE_HOST = 29, UNROUTABLE_HOST = 30, SQL_EXCEPTION = 31, S3_FILE_INACCESSIBLE = 32, IOT_FILE_NOT_FOUND = 33, IOT_DATA_SET_FILE_EMPTY = 34, INVALID_DATA_SOURCE_CONFIG = 35, DATA_SOURCE_AUTH_FAILED = 36, DATA_SOURCE_CONNECTION_FAILED = 37, FAILURE_TO_PROCESS_JSON_FILE = 38, INTERNAL_SERVICE_ERROR = 39 }

	export enum FileFormat { CSV = 0, TSV = 1, CLF = 2, ELF = 3, XLSX = 4, JSON = 5 }

	export enum GeoSpatialCountryCode { US = 0 }

	export enum IdentityType { IAM = 0, QUICKSIGHT = 1 }

	export interface GetDashboardEmbedUrlRequest {
	}

	export enum InputColumnDataType { STRING = 0, INTEGER = 1, DECIMAL = 2, DATETIME = 3, BIT = 4, BOOLEAN = 5, JSON = 6 }

	export enum JoinType { INNER = 0, OUTER = 1, LEFT = 2, RIGHT = 3 }

	export interface ListDashboardVersionsRequest {
	}

	export interface ListDashboardsRequest {
	}

	export interface ListDataSetsRequest {
	}

	export interface ListDataSourcesRequest {
	}

	export interface ListGroupMembershipsRequest {
	}

	export interface ListGroupsRequest {
	}

	export interface ListIAMPolicyAssignmentsForUserRequest {
	}

	export interface ListIAMPolicyAssignmentsRequest {
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
	}

	export interface ListIngestionsRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface ListTemplateAliasesRequest {
	}

	export interface ListTemplateVersionsRequest {
	}

	export interface ListTemplatesRequest {
	}

	export interface ListUserGroupsRequest {
	}

	export interface ListUsersRequest {
	}

	export interface RegisterUserRequest {
		IdentityType: UserIdentityType;
		Email: string;
		UserRole: UserRole;
		IamArn?: string | null;
		SessionName?: string | null;
		UserName?: string | null;
	}

	export interface SearchDashboardsRequest {
		Filters: Array<DashboardSearchFilter>;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface TagResourceRequest {
		Tags: Array<Tag>;
	}

	export enum TextQualifier { DOUBLE_QUOTE = 0, SINGLE_QUOTE = 1 }

	export interface UntagResourceRequest {
	}

	export interface UpdateDashboardPermissionsRequest {
		GrantPermissions?: Array<ResourcePermission> | null;
		RevokePermissions?: Array<ResourcePermission> | null;
	}

	export interface UpdateDashboardPublishedVersionRequest {
	}

	export interface UpdateDashboardRequest {
		Name: string;

		/**
		 * Dashboard source entity.
		 * Required
		 */
		SourceEntity: DashboardSourceEntity;

		/** Parameters. */
		Parameters?: Parameters | null;
		VersionDescription?: string | null;

		/** Dashboard publish options. */
		DashboardPublishOptions?: DashboardPublishOptions | null;
	}

	export interface UpdateDataSetPermissionsRequest {
		GrantPermissions?: Array<ResourcePermission> | null;
		RevokePermissions?: Array<ResourcePermission> | null;
	}

	export interface UpdateDataSetRequest {
		Name: string;
		PhysicalTableMap: PhysicalTableMap;
		LogicalTableMap?: LogicalTableMap | null;
		ImportMode: DataSetImportMode;
		ColumnGroups?: Array<ColumnGroup> | null;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: RowLevelPermissionDataSet | null;
	}

	export interface UpdateDataSourcePermissionsRequest {
		GrantPermissions?: Array<ResourcePermission> | null;
		RevokePermissions?: Array<ResourcePermission> | null;
	}

	export interface UpdateDataSourceRequest {
		Name: string;

		/** The parameters that Amazon QuickSight uses to connect to your underlying data source. This is a variant type structure. For this structure to be valid, only one of the attributes can be non-null. */
		DataSourceParameters?: DataSourceParameters | null;

		/** Data source credentials. */
		Credentials?: DataSourceCredentials | null;

		/** VPC connection properties. */
		VpcConnectionProperties?: VpcConnectionProperties | null;

		/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
		SslProperties?: SslProperties | null;
	}

	export interface UpdateGroupRequest {
		Description?: string | null;
	}

	export interface UpdateIAMPolicyAssignmentRequest {
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;
		PolicyArn?: string | null;
		Identities?: IdentityMap | null;
	}

	export interface UpdateTemplateAliasRequest {
		TemplateVersionNumber: number;
	}

	export interface UpdateTemplatePermissionsRequest {
		GrantPermissions?: Array<ResourcePermission> | null;
		RevokePermissions?: Array<ResourcePermission> | null;
	}

	export interface UpdateTemplateRequest {

		/**
		 * The source entity of the template.
		 * Required
		 */
		SourceEntity: TemplateSourceEntity;
		VersionDescription?: string | null;
		Name?: string | null;
	}

	export interface UpdateUserRequest {
		Email: string;
		Role: UserRole;
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
		 * Pattern: [\u0020-\u00FF]+
		 */
		Name: string;

		/** Parameters. */
		Parameters?: CreateDashboardPostBodyParameters | null;

		/**
		 * A structure that contains the permissions of the dashboard. You can use this structure for granting permissions with principal and action information.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission> | null;

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
		Tags?: Array<Tag> | null;

		/**
		 * A description for the first version of the dashboard being created.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;

		/** Dashboard publish options. */
		DashboardPublishOptions?: CreateDashboardPostBodyDashboardPublishOptions | null;
	}

	export interface CreateDashboardPostBodyParameters {
		StringParameters?: Array<StringParameter> | null;
		IntegerParameters?: Array<IntegerParameter> | null;
		DecimalParameters?: Array<DecimalParameter> | null;
		DateTimeParameters?: Array<DateTimeParameter> | null;
	}

	export interface CreateDashboardPostBodySourceEntity {

		/** Dashboard source template. */
		SourceTemplate?: DashboardSourceTemplate | null;
	}

	export interface CreateDashboardPostBodyDashboardPublishOptions {

		/** Ad hoc (one-time) filtering option. */
		AdHocFilteringOption?: AdHocFilteringOption | null;

		/** Export to .csv option. */
		ExportToCSVOption?: ExportToCSVOption | null;

		/** Sheet controls option. */
		SheetControlsOption?: SheetControlsOption | null;
	}

	export interface UpdateDashboardPutBody {

		/**
		 * The display name of the dashboard.
		 * Required
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [\u0020-\u00FF]+
		 */
		Name: string;

		/**
		 * Dashboard source entity.
		 * Required
		 */
		SourceEntity: UpdateDashboardPutBodySourceEntity;

		/** Parameters. */
		Parameters?: UpdateDashboardPutBodyParameters | null;

		/**
		 * A description for the first version of the dashboard being created.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;

		/** Dashboard publish options. */
		DashboardPublishOptions?: UpdateDashboardPutBodyDashboardPublishOptions | null;
	}

	export interface UpdateDashboardPutBodySourceEntity {

		/** Dashboard source template. */
		SourceTemplate?: DashboardSourceTemplate | null;
	}

	export interface UpdateDashboardPutBodyParameters {
		StringParameters?: Array<StringParameter> | null;
		IntegerParameters?: Array<IntegerParameter> | null;
		DecimalParameters?: Array<DecimalParameter> | null;
		DateTimeParameters?: Array<DateTimeParameter> | null;
	}

	export interface UpdateDashboardPutBodyDashboardPublishOptions {

		/** Ad hoc (one-time) filtering option. */
		AdHocFilteringOption?: AdHocFilteringOption | null;

		/** Export to .csv option. */
		ExportToCSVOption?: ExportToCSVOption | null;

		/** Sheet controls option. */
		SheetControlsOption?: SheetControlsOption | null;
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
		LogicalTableMap?: {[id: string]: LogicalTable } | null;

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
		ColumnGroups?: Array<ColumnGroup> | null;

		/**
		 * A list of resource permissions on the dataset.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission> | null;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: CreateDataSetPostBodyRowLevelPermissionDataSet | null;

		/**
		 * Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag> | null;
	}

	export interface CreateDataSetPostBodyRowLevelPermissionDataSet {
		Arn?: string | null;
		PermissionPolicy?: RowLevelPermissionPolicy | null;
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
		DataSourceParameters?: CreateDataSourcePostBodyDataSourceParameters | null;

		/** Data source credentials. */
		Credentials?: CreateDataSourcePostBodyCredentials | null;

		/**
		 * A list of resource permissions on the data source.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission> | null;

		/** VPC connection properties. */
		VpcConnectionProperties?: CreateDataSourcePostBodyVpcConnectionProperties | null;

		/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
		SslProperties?: CreateDataSourcePostBodySslProperties | null;

		/**
		 * Contains a map of the key-value pairs for the resource tag or tags assigned to the data source.
		 * Minimum items: 1
		 * Maximum items: 200
		 */
		Tags?: Array<Tag> | null;
	}

	export interface CreateDataSourcePostBodyDataSourceParameters {

		/** Amazon Elasticsearch Service parameters. */
		AmazonElasticsearchParameters?: AmazonElasticsearchParameters | null;

		/** Amazon Athena parameters. */
		AthenaParameters?: AthenaParameters | null;

		/** Amazon Aurora parameters. */
		AuroraParameters?: AuroraParameters | null;

		/** Amazon Aurora with PostgreSQL compatibility parameters. */
		AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters | null;

		/** AWS IoT Analytics parameters. */
		AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters | null;

		/** Jira parameters. */
		JiraParameters?: JiraParameters | null;

		/** MariaDB parameters. */
		MariaDbParameters?: MariaDbParameters | null;

		/** MySQL parameters. */
		MySqlParameters?: MySqlParameters | null;

		/** PostgreSQL parameters. */
		PostgreSqlParameters?: PostgreSqlParameters | null;

		/** Presto parameters. */
		PrestoParameters?: PrestoParameters | null;

		/** Amazon RDS parameters. */
		RdsParameters?: RdsParameters | null;

		/** Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set. */
		RedshiftParameters?: RedshiftParameters | null;

		/** S3 parameters. */
		S3Parameters?: S3Parameters | null;

		/** ServiceNow parameters. */
		ServiceNowParameters?: ServiceNowParameters | null;

		/** Snowflake parameters. */
		SnowflakeParameters?: SnowflakeParameters | null;

		/** Spark parameters. */
		SparkParameters?: SparkParameters | null;

		/** SQL Server parameters. */
		SqlServerParameters?: SqlServerParameters | null;

		/** Teradata parameters. */
		TeradataParameters?: TeradataParameters | null;

		/** Twitter parameters. */
		TwitterParameters?: TwitterParameters | null;
	}

	export interface CreateDataSourcePostBodyCredentials {

		/** The combination of user name and password that are used as credentials. */
		CredentialPair?: CredentialPair | null;
	}

	export interface CreateDataSourcePostBodyVpcConnectionProperties {
		VpcConnectionArn?: string | null;
	}

	export interface CreateDataSourcePostBodySslProperties {
		DisableSsl?: boolean | null;
	}

	export interface CreateGroupPostBody {

		/**
		 * A name for the group that you want to create.
		 * Required
		 * Min length: 1
		 * Pattern: [\u0020-\u00FF]+
		 */
		GroupName: string;

		/**
		 * A description for the group that you want to create.
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
	}

	export interface CreateIAMPolicyAssignmentPostBody {

		/**
		 * The name of the assignment. It must be unique within an AWS account.
		 * Required
		 * Min length: 1
		 * Pattern: (?=^.{2,256}$)(?!.*\s)[0-9a-zA-Z-_.:=+@]*$
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
		Identities?: {[id: string]: Array<string> } | null;
	}

	export interface CreateTemplatePostBody {

		/**
		 * A display name for the template.
		 * Max length: 2048
		 * Min length: 1
		 * Pattern: [\u0020-\u00FF]+
		 */
		Name?: string | null;

		/**
		 * A list of resource permissions to be set on the template.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		Permissions?: Array<ResourcePermission> | null;

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
		Tags?: Array<Tag> | null;

		/**
		 * A description of the current template version being created. This API operation creates the first version of the template. Every time <code>UpdateTemplate</code> is called, a new version is created. Each version of the template maintains a description of the version in the <code>VersionDescription</code> field.
		 * Max length: 512
		 * Min length: 1
		 */
		VersionDescription?: string | null;
	}

	export interface CreateTemplatePostBodySourceEntity {

		/** The source analysis of the template. */
		SourceAnalysis?: TemplateSourceAnalysis | null;

		/** The source template of the template. */
		SourceTemplate?: TemplateSourceTemplate | null;
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
		 * Pattern: [\u0020-\u00FF]+
		 */
		Name?: string | null;
	}

	export interface UpdateTemplatePutBodySourceEntity {

		/** The source analysis of the template. */
		SourceAnalysis?: TemplateSourceAnalysis | null;

		/** The source template of the template. */
		SourceTemplate?: TemplateSourceTemplate | null;
	}

	export interface CreateTemplateAliasPostBody {

		/**
		 * The version number of the template.
		 * Required
		 * Minimum: 1
		 */
		TemplateVersionNumber: number;
	}

	export interface UpdateTemplateAliasPutBody {

		/**
		 * The version number of the template.
		 * Required
		 * Minimum: 1
		 */
		TemplateVersionNumber: number;
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
		LogicalTableMap?: {[id: string]: LogicalTable } | null;

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
		ColumnGroups?: Array<ColumnGroup> | null;

		/** The row-level security configuration for the dataset. */
		RowLevelPermissionDataSet?: UpdateDataSetPutBodyRowLevelPermissionDataSet | null;
	}

	export interface UpdateDataSetPutBodyRowLevelPermissionDataSet {
		Arn?: string | null;
		PermissionPolicy?: RowLevelPermissionPolicy | null;
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
		DataSourceParameters?: UpdateDataSourcePutBodyDataSourceParameters | null;

		/** Data source credentials. */
		Credentials?: UpdateDataSourcePutBodyCredentials | null;

		/** VPC connection properties. */
		VpcConnectionProperties?: UpdateDataSourcePutBodyVpcConnectionProperties | null;

		/** Secure Socket Layer (SSL) properties that apply when QuickSight connects to your underlying data source. */
		SslProperties?: UpdateDataSourcePutBodySslProperties | null;
	}

	export interface UpdateDataSourcePutBodyDataSourceParameters {

		/** Amazon Elasticsearch Service parameters. */
		AmazonElasticsearchParameters?: AmazonElasticsearchParameters | null;

		/** Amazon Athena parameters. */
		AthenaParameters?: AthenaParameters | null;

		/** Amazon Aurora parameters. */
		AuroraParameters?: AuroraParameters | null;

		/** Amazon Aurora with PostgreSQL compatibility parameters. */
		AuroraPostgreSqlParameters?: AuroraPostgreSqlParameters | null;

		/** AWS IoT Analytics parameters. */
		AwsIotAnalyticsParameters?: AwsIotAnalyticsParameters | null;

		/** Jira parameters. */
		JiraParameters?: JiraParameters | null;

		/** MariaDB parameters. */
		MariaDbParameters?: MariaDbParameters | null;

		/** MySQL parameters. */
		MySqlParameters?: MySqlParameters | null;

		/** PostgreSQL parameters. */
		PostgreSqlParameters?: PostgreSqlParameters | null;

		/** Presto parameters. */
		PrestoParameters?: PrestoParameters | null;

		/** Amazon RDS parameters. */
		RdsParameters?: RdsParameters | null;

		/** Amazon Redshift parameters. The <code>ClusterId</code> field can be blank if <code>Host</code> and <code>Port</code> are both set. The <code>Host</code> and <code>Port</code> fields can be blank if the <code>ClusterId</code> field is set. */
		RedshiftParameters?: RedshiftParameters | null;

		/** S3 parameters. */
		S3Parameters?: S3Parameters | null;

		/** ServiceNow parameters. */
		ServiceNowParameters?: ServiceNowParameters | null;

		/** Snowflake parameters. */
		SnowflakeParameters?: SnowflakeParameters | null;

		/** Spark parameters. */
		SparkParameters?: SparkParameters | null;

		/** SQL Server parameters. */
		SqlServerParameters?: SqlServerParameters | null;

		/** Teradata parameters. */
		TeradataParameters?: TeradataParameters | null;

		/** Twitter parameters. */
		TwitterParameters?: TwitterParameters | null;
	}

	export interface UpdateDataSourcePutBodyCredentials {

		/** The combination of user name and password that are used as credentials. */
		CredentialPair?: CredentialPair | null;
	}

	export interface UpdateDataSourcePutBodyVpcConnectionProperties {
		VpcConnectionArn?: string | null;
	}

	export interface UpdateDataSourcePutBodySslProperties {
		DisableSsl?: boolean | null;
	}

	export interface UpdateGroupPutBody {

		/**
		 * The description for the group that you want to update.
		 * Max length: 512
		 * Min length: 1
		 */
		Description?: string | null;
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

	export interface UpdateDashboardPermissionsPutBody {

		/**
		 * The permissions that you want to grant on this resource.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		GrantPermissions?: Array<ResourcePermission> | null;

		/**
		 * The permissions that you want to revoke from this resource.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		RevokePermissions?: Array<ResourcePermission> | null;
	}

	export interface UpdateDataSetPermissionsPostBody {

		/**
		 * The resource permissions that you want to grant to the dataset.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		GrantPermissions?: Array<ResourcePermission> | null;

		/**
		 * The resource permissions that you want to revoke from the dataset.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		RevokePermissions?: Array<ResourcePermission> | null;
	}

	export interface UpdateDataSourcePermissionsPostBody {

		/**
		 * A list of resource permissions that you want to grant on the data source.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		GrantPermissions?: Array<ResourcePermission> | null;

		/**
		 * A list of resource permissions that you want to revoke on the data source.
		 * Minimum items: 1
		 * Maximum items: 64
		 */
		RevokePermissions?: Array<ResourcePermission> | null;
	}

	export interface UpdateIAMPolicyAssignmentPutBody {

		/** <p>The status of the assignment. Possible values are as follows:</p> <ul> <li> <p> <code>ENABLED</code> - Anything specified in this assignment is used when creating the data source.</p> </li> <li> <p> <code>DISABLED</code> - This assignment isn't used when creating the data source.</p> </li> <li> <p> <code>DRAFT</code> - This assignment is an unfinished draft and isn't used when creating the data source.</p> </li> </ul> */
		AssignmentStatus?: CreateIAMPolicyAssignmentResponseAssignmentStatus | null;

		/** The ARN for the IAM policy to apply to the QuickSight users and groups specified in this assignment. */
		PolicyArn?: string | null;

		/** The QuickSight users, groups, or both that you want to assign the policy to. */
		Identities?: {[id: string]: Array<string> } | null;
	}

	export interface UpdateTemplatePermissionsPutBody {

		/**
		 * A list of resource permissions to be granted on the template.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		GrantPermissions?: Array<ResourcePermission> | null;

		/**
		 * A list of resource permissions to be revoked from the template.
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		RevokePermissions?: Array<ResourcePermission> | null;
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
		 * Pattern: [\w+=.@-]*
		 */
		SessionName?: string | null;

		/**
		 * The Amazon QuickSight user name that you want to create for the user you are registering.
		 * Min length: 1
		 * Pattern: [\u0020-\u00FF]+
		 */
		UserName?: string | null;
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

}

