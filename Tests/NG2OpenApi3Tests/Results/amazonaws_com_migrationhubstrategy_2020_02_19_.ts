import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface GetApplicationComponentDetailsResponse {
		applicationComponentDetail?: ApplicationComponentDetail;
		associatedApplications?: Array<AssociatedApplication>;
		associatedServerIds?: Array<string>;
		moreApplicationResource?: boolean | null;
	}
	export interface GetApplicationComponentDetailsResponseFormProperties {
		moreApplicationResource: FormControl<boolean | null | undefined>,
	}
	export function CreateGetApplicationComponentDetailsResponseFormGroup() {
		return new FormGroup<GetApplicationComponentDetailsResponseFormProperties>({
			moreApplicationResource: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**  Contains detailed information about an application component.  */
	export interface ApplicationComponentDetail {
		analysisStatus?: SrcCodeOrDbAnalysisStatus;
		antipatternReportS3Object?: S3Object;
		antipatternReportStatus?: AntipatternReportStatus;
		antipatternReportStatusMessage?: string;
		appType?: AppType;
		appUnitError?: AppUnitError;
		associatedServerId?: string;
		databaseConfigDetail?: DatabaseConfigDetail;
		id?: string;
		inclusionStatus?: InclusionStatus;
		lastAnalyzedTimestamp?: Date;
		listAntipatternSeveritySummary?: Array<AntipatternSeveritySummary>;
		moreServerAssociationExists?: boolean | null;
		name?: string;
		osDriver?: string;
		osVersion?: string;
		recommendationSet?: RecommendationSet;
		resourceSubType?: ResourceSubType;
		resultList?: Array<Result>;
		runtimeStatus?: RuntimeAnalysisStatus;
		runtimeStatusMessage?: string;
		sourceCodeRepositories?: Array<SourceCodeRepository>;
		statusMessage?: string;
	}

	/**  Contains detailed information about an application component.  */
	export interface ApplicationComponentDetailFormProperties {
		analysisStatus: FormControl<SrcCodeOrDbAnalysisStatus | null | undefined>,
		antipatternReportStatus: FormControl<AntipatternReportStatus | null | undefined>,
		antipatternReportStatusMessage: FormControl<string | null | undefined>,
		appType: FormControl<AppType | null | undefined>,
		associatedServerId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		inclusionStatus: FormControl<InclusionStatus | null | undefined>,
		lastAnalyzedTimestamp: FormControl<Date | null | undefined>,
		moreServerAssociationExists: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		osDriver: FormControl<string | null | undefined>,
		osVersion: FormControl<string | null | undefined>,
		resourceSubType: FormControl<ResourceSubType | null | undefined>,
		runtimeStatus: FormControl<RuntimeAnalysisStatus | null | undefined>,
		runtimeStatusMessage: FormControl<string | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateApplicationComponentDetailFormGroup() {
		return new FormGroup<ApplicationComponentDetailFormProperties>({
			analysisStatus: new FormControl<SrcCodeOrDbAnalysisStatus | null | undefined>(undefined),
			antipatternReportStatus: new FormControl<AntipatternReportStatus | null | undefined>(undefined),
			antipatternReportStatusMessage: new FormControl<string | null | undefined>(undefined),
			appType: new FormControl<AppType | null | undefined>(undefined),
			associatedServerId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			inclusionStatus: new FormControl<InclusionStatus | null | undefined>(undefined),
			lastAnalyzedTimestamp: new FormControl<Date | null | undefined>(undefined),
			moreServerAssociationExists: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			osDriver: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			resourceSubType: new FormControl<ResourceSubType | null | undefined>(undefined),
			runtimeStatus: new FormControl<RuntimeAnalysisStatus | null | undefined>(undefined),
			runtimeStatusMessage: new FormControl<string | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SrcCodeOrDbAnalysisStatus { ANALYSIS_TO_BE_SCHEDULED = 'ANALYSIS_TO_BE_SCHEDULED', ANALYSIS_STARTED = 'ANALYSIS_STARTED', ANALYSIS_SUCCESS = 'ANALYSIS_SUCCESS', ANALYSIS_FAILED = 'ANALYSIS_FAILED', ANALYSIS_PARTIAL_SUCCESS = 'ANALYSIS_PARTIAL_SUCCESS', UNCONFIGURED = 'UNCONFIGURED', CONFIGURED = 'CONFIGURED' }


	/**  Contains the S3 bucket name and the Amazon S3 key name.  */
	export interface S3Object {
		s3Bucket?: string;
		s3key?: string;
	}

	/**  Contains the S3 bucket name and the Amazon S3 key name.  */
	export interface S3ObjectFormProperties {
		s3Bucket: FormControl<string | null | undefined>,
		s3key: FormControl<string | null | undefined>,
	}
	export function CreateS3ObjectFormGroup() {
		return new FormGroup<S3ObjectFormProperties>({
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			s3key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AntipatternReportStatus { FAILED = 'FAILED', IN_PROGRESS = 'IN_PROGRESS', SUCCESS = 'SUCCESS' }

	export enum AppType { DotNetFramework = 'DotNetFramework', Java = 'Java', SQLServer = 'SQLServer', IIS = 'IIS', Oracle = 'Oracle', Other = 'Other', Tomcat = 'Tomcat', JBoss = 'JBoss', Spring = 'Spring', 'Mongo DB' = 'Mongo DB', DB2 = 'DB2', 'Maria DB' = 'Maria DB', MySQL = 'MySQL', Sybase = 'Sybase', PostgreSQLServer = 'PostgreSQLServer', Cassandra = 'Cassandra', 'IBM WebSphere' = 'IBM WebSphere', 'Oracle WebLogic' = 'Oracle WebLogic', 'Visual Basic' = 'Visual Basic', Unknown = 'Unknown', DotnetCore = 'DotnetCore', Dotnet = 'Dotnet' }


	/** Error in the analysis of the application unit. */
	export interface AppUnitError {
		appUnitErrorCategory?: AppUnitErrorCategory;
	}

	/** Error in the analysis of the application unit. */
	export interface AppUnitErrorFormProperties {
		appUnitErrorCategory: FormControl<AppUnitErrorCategory | null | undefined>,
	}
	export function CreateAppUnitErrorFormGroup() {
		return new FormGroup<AppUnitErrorFormProperties>({
			appUnitErrorCategory: new FormControl<AppUnitErrorCategory | null | undefined>(undefined),
		});

	}

	export enum AppUnitErrorCategory { CREDENTIAL_ERROR = 'CREDENTIAL_ERROR', CONNECTIVITY_ERROR = 'CONNECTIVITY_ERROR', PERMISSION_ERROR = 'PERMISSION_ERROR', UNSUPPORTED_ERROR = 'UNSUPPORTED_ERROR', OTHER_ERROR = 'OTHER_ERROR' }


	/**  Configuration information used for assessing databases.  */
	export interface DatabaseConfigDetail {
		secretName?: string;
	}

	/**  Configuration information used for assessing databases.  */
	export interface DatabaseConfigDetailFormProperties {
		secretName: FormControl<string | null | undefined>,
	}
	export function CreateDatabaseConfigDetailFormGroup() {
		return new FormGroup<DatabaseConfigDetailFormProperties>({
			secretName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InclusionStatus { excludeFromAssessment = 'excludeFromAssessment', includeInAssessment = 'includeInAssessment' }


	/**  Contains the summary of anti-patterns and their severity.  */
	export interface AntipatternSeveritySummary {
		count?: number | null;
		severity?: Severity;
	}

	/**  Contains the summary of anti-patterns and their severity.  */
	export interface AntipatternSeveritySummaryFormProperties {
		count: FormControl<number | null | undefined>,
		severity: FormControl<Severity | null | undefined>,
	}
	export function CreateAntipatternSeveritySummaryFormGroup() {
		return new FormGroup<AntipatternSeveritySummaryFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			severity: new FormControl<Severity | null | undefined>(undefined),
		});

	}

	export enum Severity { HIGH = 'HIGH', MEDIUM = 'MEDIUM', LOW = 'LOW' }


	/**  Contains a recommendation set.  */
	export interface RecommendationSet {
		strategy?: Strategy;
		targetDestination?: TargetDestination;
		transformationTool?: TransformationTool;
	}

	/**  Contains a recommendation set.  */
	export interface RecommendationSetFormProperties {
		strategy: FormControl<Strategy | null | undefined>,
		targetDestination: FormControl<TargetDestination | null | undefined>,
	}
	export function CreateRecommendationSetFormGroup() {
		return new FormGroup<RecommendationSetFormProperties>({
			strategy: new FormControl<Strategy | null | undefined>(undefined),
			targetDestination: new FormControl<TargetDestination | null | undefined>(undefined),
		});

	}

	export enum Strategy { Rehost = 'Rehost', Retirement = 'Retirement', Refactor = 'Refactor', Replatform = 'Replatform', Retain = 'Retain', Relocate = 'Relocate', Repurchase = 'Repurchase' }

	export enum TargetDestination { 'None specified' = 'None specified', 'AWS Elastic BeanStalk' = 'AWS Elastic BeanStalk', 'AWS Fargate' = 'AWS Fargate', 'Amazon Elastic Cloud Compute (EC2)' = 'Amazon Elastic Cloud Compute (EC2)', 'Amazon Elastic Container Service (ECS)' = 'Amazon Elastic Container Service (ECS)', 'Amazon Elastic Kubernetes Service (EKS)' = 'Amazon Elastic Kubernetes Service (EKS)', 'Aurora MySQL' = 'Aurora MySQL', 'Aurora PostgreSQL' = 'Aurora PostgreSQL', 'Amazon Relational Database Service on MySQL' = 'Amazon Relational Database Service on MySQL', 'Amazon Relational Database Service on PostgreSQL' = 'Amazon Relational Database Service on PostgreSQL', 'Amazon DocumentDB' = 'Amazon DocumentDB', 'Amazon DynamoDB' = 'Amazon DynamoDB', 'Amazon Relational Database Service' = 'Amazon Relational Database Service', 'Babelfish for Aurora PostgreSQL' = 'Babelfish for Aurora PostgreSQL' }


	/**  Information of the transformation tool that can be used to migrate and modernize the application.  */
	export interface TransformationTool {
		description?: string;
		name?: TransformationToolName;
		tranformationToolInstallationLink?: string;
	}

	/**  Information of the transformation tool that can be used to migrate and modernize the application.  */
	export interface TransformationToolFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<TransformationToolName | null | undefined>,
		tranformationToolInstallationLink: FormControl<string | null | undefined>,
	}
	export function CreateTransformationToolFormGroup() {
		return new FormGroup<TransformationToolFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<TransformationToolName | null | undefined>(undefined),
			tranformationToolInstallationLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TransformationToolName { App2Container = 'App2Container', 'Porting Assistant For .NET' = 'Porting Assistant For .NET', 'End of Support Migration' = 'End of Support Migration', 'Windows Web Application Migration Assistant' = 'Windows Web Application Migration Assistant', 'Application Migration Service' = 'Application Migration Service', 'Strategy Recommendation Support' = 'Strategy Recommendation Support', 'In Place Operating System Upgrade' = 'In Place Operating System Upgrade', 'Schema Conversion Tool' = 'Schema Conversion Tool', 'Database Migration Service' = 'Database Migration Service', 'Native SQL Server Backup/Restore' = 'Native SQL Server Backup/Restore' }

	export enum ResourceSubType { Database = 'Database', Process = 'Process', DatabaseProcess = 'DatabaseProcess' }


	/** The error in server analysis. */
	export interface Result {
		analysisStatus?: AnalysisStatusUnion;
		analysisType?: AnalysisType;
		antipatternReportResultList?: Array<AntipatternReportResult>;
		statusMessage?: string;
	}

	/** The error in server analysis. */
	export interface ResultFormProperties {
		analysisType: FormControl<AnalysisType | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateResultFormGroup() {
		return new FormGroup<ResultFormProperties>({
			analysisType: new FormControl<AnalysisType | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A combination of existing analysis statuses. */
	export interface AnalysisStatusUnion {
		runtimeAnalysisStatus?: RuntimeAnalysisStatus;
		srcCodeOrDbAnalysisStatus?: SrcCodeOrDbAnalysisStatus;
	}

	/** A combination of existing analysis statuses. */
	export interface AnalysisStatusUnionFormProperties {
		runtimeAnalysisStatus: FormControl<RuntimeAnalysisStatus | null | undefined>,
		srcCodeOrDbAnalysisStatus: FormControl<SrcCodeOrDbAnalysisStatus | null | undefined>,
	}
	export function CreateAnalysisStatusUnionFormGroup() {
		return new FormGroup<AnalysisStatusUnionFormProperties>({
			runtimeAnalysisStatus: new FormControl<RuntimeAnalysisStatus | null | undefined>(undefined),
			srcCodeOrDbAnalysisStatus: new FormControl<SrcCodeOrDbAnalysisStatus | null | undefined>(undefined),
		});

	}

	export enum RuntimeAnalysisStatus { ANALYSIS_TO_BE_SCHEDULED = 'ANALYSIS_TO_BE_SCHEDULED', ANALYSIS_STARTED = 'ANALYSIS_STARTED', ANALYSIS_SUCCESS = 'ANALYSIS_SUCCESS', ANALYSIS_FAILED = 'ANALYSIS_FAILED' }

	export enum AnalysisType { SOURCE_CODE_ANALYSIS = 'SOURCE_CODE_ANALYSIS', DATABASE_ANALYSIS = 'DATABASE_ANALYSIS', RUNTIME_ANALYSIS = 'RUNTIME_ANALYSIS', BINARY_ANALYSIS = 'BINARY_ANALYSIS' }


	/** The anti-pattern report result. */
	export interface AntipatternReportResult {
		analyzerName?: AnalyzerNameUnion;

		/** Contains the S3 bucket name and the Amazon S3 key name. */
		antiPatternReportS3Object?: S3Object;
		antipatternReportStatus?: AntipatternReportStatus;
		antipatternReportStatusMessage?: string;
	}

	/** The anti-pattern report result. */
	export interface AntipatternReportResultFormProperties {
		antipatternReportStatus: FormControl<AntipatternReportStatus | null | undefined>,
		antipatternReportStatusMessage: FormControl<string | null | undefined>,
	}
	export function CreateAntipatternReportResultFormGroup() {
		return new FormGroup<AntipatternReportResultFormProperties>({
			antipatternReportStatus: new FormControl<AntipatternReportStatus | null | undefined>(undefined),
			antipatternReportStatusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The combination of the existing analyzers. */
	export interface AnalyzerNameUnion {
		binaryAnalyzerName?: BinaryAnalyzerName;
		runTimeAnalyzerName?: RunTimeAnalyzerName;
		sourceCodeAnalyzerName?: SourceCodeAnalyzerName;
	}

	/** The combination of the existing analyzers. */
	export interface AnalyzerNameUnionFormProperties {
		binaryAnalyzerName: FormControl<BinaryAnalyzerName | null | undefined>,
		runTimeAnalyzerName: FormControl<RunTimeAnalyzerName | null | undefined>,
		sourceCodeAnalyzerName: FormControl<SourceCodeAnalyzerName | null | undefined>,
	}
	export function CreateAnalyzerNameUnionFormGroup() {
		return new FormGroup<AnalyzerNameUnionFormProperties>({
			binaryAnalyzerName: new FormControl<BinaryAnalyzerName | null | undefined>(undefined),
			runTimeAnalyzerName: new FormControl<RunTimeAnalyzerName | null | undefined>(undefined),
			sourceCodeAnalyzerName: new FormControl<SourceCodeAnalyzerName | null | undefined>(undefined),
		});

	}

	export enum BinaryAnalyzerName { DLL_ANALYZER = 'DLL_ANALYZER', BYTECODE_ANALYZER = 'BYTECODE_ANALYZER' }

	export enum RunTimeAnalyzerName { A2C_ANALYZER = 'A2C_ANALYZER', REHOST_ANALYZER = 'REHOST_ANALYZER', EMP_PA_ANALYZER = 'EMP_PA_ANALYZER', DATABASE_ANALYZER = 'DATABASE_ANALYZER', SCT_ANALYZER = 'SCT_ANALYZER' }

	export enum SourceCodeAnalyzerName { CSHARP_ANALYZER = 'CSHARP_ANALYZER', JAVA_ANALYZER = 'JAVA_ANALYZER', BYTECODE_ANALYZER = 'BYTECODE_ANALYZER', PORTING_ASSISTANT = 'PORTING_ASSISTANT' }


	/**  Object containing source code information that is linked to an application component.  */
	export interface SourceCodeRepository {
		branch?: string;
		projectName?: string;
		repository?: string;
		versionControlType?: string;
	}

	/**  Object containing source code information that is linked to an application component.  */
	export interface SourceCodeRepositoryFormProperties {
		branch: FormControl<string | null | undefined>,
		projectName: FormControl<string | null | undefined>,
		repository: FormControl<string | null | undefined>,
		versionControlType: FormControl<string | null | undefined>,
	}
	export function CreateSourceCodeRepositoryFormGroup() {
		return new FormGroup<SourceCodeRepositoryFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined),
			projectName: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			versionControlType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Object containing details about applications as defined in Application Discovery Service.  */
	export interface AssociatedApplication {
		id?: string;
		name?: string;
	}

	/**  Object containing details about applications as defined in Application Discovery Service.  */
	export interface AssociatedApplicationFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAssociatedApplicationFormGroup() {
		return new FormGroup<AssociatedApplicationFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
		});

	}

	export interface GetApplicationComponentStrategiesResponse {
		applicationComponentStrategies?: Array<ApplicationComponentStrategy>;
	}
	export interface GetApplicationComponentStrategiesResponseFormProperties {
	}
	export function CreateGetApplicationComponentStrategiesResponseFormGroup() {
		return new FormGroup<GetApplicationComponentStrategiesResponseFormProperties>({
		});

	}


	/**  Contains information about a strategy recommendation for an application component.  */
	export interface ApplicationComponentStrategy {
		isPreferred?: boolean | null;
		recommendation?: RecommendationSet;
		status?: StrategyRecommendation;
	}

	/**  Contains information about a strategy recommendation for an application component.  */
	export interface ApplicationComponentStrategyFormProperties {
		isPreferred: FormControl<boolean | null | undefined>,
		status: FormControl<StrategyRecommendation | null | undefined>,
	}
	export function CreateApplicationComponentStrategyFormGroup() {
		return new FormGroup<ApplicationComponentStrategyFormProperties>({
			isPreferred: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<StrategyRecommendation | null | undefined>(undefined),
		});

	}

	export enum StrategyRecommendation { recommended = 'recommended', viableOption = 'viableOption', notRecommended = 'notRecommended', potential = 'potential' }

	export interface GetAssessmentResponse {
		assessmentTargets?: Array<AssessmentTarget>;
		dataCollectionDetails?: DataCollectionDetails;
		id?: string;
	}
	export interface GetAssessmentResponseFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateGetAssessmentResponseFormGroup() {
		return new FormGroup<GetAssessmentResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the criteria of assessment. */
	export interface AssessmentTarget {

		/** Required */
		condition: Condition;

		/** Required */
		name: string;

		/** Required */
		values: Array<string>;
	}

	/** Defines the criteria of assessment. */
	export interface AssessmentTargetFormProperties {

		/** Required */
		condition: FormControl<Condition | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentTargetFormGroup() {
		return new FormGroup<AssessmentTargetFormProperties>({
			condition: new FormControl<Condition | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Condition { EQUALS = 'EQUALS', NOT_EQUALS = 'NOT_EQUALS', CONTAINS = 'CONTAINS', NOT_CONTAINS = 'NOT_CONTAINS' }


	/**  Detailed information about an assessment.  */
	export interface DataCollectionDetails {
		completionTime?: Date;
		failed?: number | null;
		inProgress?: number | null;
		servers?: number | null;
		startTime?: Date;
		status?: AssessmentStatus;
		statusMessage?: string;
		success?: number | null;
	}

	/**  Detailed information about an assessment.  */
	export interface DataCollectionDetailsFormProperties {
		completionTime: FormControl<Date | null | undefined>,
		failed: FormControl<number | null | undefined>,
		inProgress: FormControl<number | null | undefined>,
		servers: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		status: FormControl<AssessmentStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		success: FormControl<number | null | undefined>,
	}
	export function CreateDataCollectionDetailsFormGroup() {
		return new FormGroup<DataCollectionDetailsFormProperties>({
			completionTime: new FormControl<Date | null | undefined>(undefined),
			failed: new FormControl<number | null | undefined>(undefined),
			inProgress: new FormControl<number | null | undefined>(undefined),
			servers: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<AssessmentStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			success: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AssessmentStatus { IN_PROGRESS = 'IN_PROGRESS', COMPLETE = 'COMPLETE', FAILED = 'FAILED', STOPPED = 'STOPPED' }

	export interface AccessDeniedException {
	}
	export interface AccessDeniedExceptionFormProperties {
	}
	export function CreateAccessDeniedExceptionFormGroup() {
		return new FormGroup<AccessDeniedExceptionFormProperties>({
		});

	}

	export interface GetImportFileTaskResponse {
		completionTime?: Date;
		id?: string;
		importName?: string;
		inputS3Bucket?: string;
		inputS3Key?: string;
		numberOfRecordsFailed?: number | null;
		numberOfRecordsSuccess?: number | null;
		startTime?: Date;
		status?: ImportFileTaskStatus;
		statusReportS3Bucket?: string;
		statusReportS3Key?: string;
	}
	export interface GetImportFileTaskResponseFormProperties {
		completionTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		importName: FormControl<string | null | undefined>,
		inputS3Bucket: FormControl<string | null | undefined>,
		inputS3Key: FormControl<string | null | undefined>,
		numberOfRecordsFailed: FormControl<number | null | undefined>,
		numberOfRecordsSuccess: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		status: FormControl<ImportFileTaskStatus | null | undefined>,
		statusReportS3Bucket: FormControl<string | null | undefined>,
		statusReportS3Key: FormControl<string | null | undefined>,
	}
	export function CreateGetImportFileTaskResponseFormGroup() {
		return new FormGroup<GetImportFileTaskResponseFormProperties>({
			completionTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			importName: new FormControl<string | null | undefined>(undefined),
			inputS3Bucket: new FormControl<string | null | undefined>(undefined),
			inputS3Key: new FormControl<string | null | undefined>(undefined),
			numberOfRecordsFailed: new FormControl<number | null | undefined>(undefined),
			numberOfRecordsSuccess: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ImportFileTaskStatus | null | undefined>(undefined),
			statusReportS3Bucket: new FormControl<string | null | undefined>(undefined),
			statusReportS3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ImportFileTaskStatus { ImportInProgress = 'ImportInProgress', ImportFailed = 'ImportFailed', ImportPartialSuccess = 'ImportPartialSuccess', ImportSuccess = 'ImportSuccess', DeleteInProgress = 'DeleteInProgress', DeleteFailed = 'DeleteFailed', DeletePartialSuccess = 'DeletePartialSuccess', DeleteSuccess = 'DeleteSuccess' }

	export interface ValidationException {
	}
	export interface ValidationExceptionFormProperties {
	}
	export function CreateValidationExceptionFormGroup() {
		return new FormGroup<ValidationExceptionFormProperties>({
		});

	}

	export interface GetLatestAssessmentIdResponse {
		id?: string;
	}
	export interface GetLatestAssessmentIdResponseFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateGetLatestAssessmentIdResponseFormGroup() {
		return new FormGroup<GetLatestAssessmentIdResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DependencyException {
	}
	export interface DependencyExceptionFormProperties {
	}
	export function CreateDependencyExceptionFormGroup() {
		return new FormGroup<DependencyExceptionFormProperties>({
		});

	}

	export interface GetPortfolioPreferencesResponse {
		applicationMode?: ApplicationMode;
		applicationPreferences?: ApplicationPreferences;
		databasePreferences?: DatabasePreferences;
		prioritizeBusinessGoals?: PrioritizeBusinessGoals;
	}
	export interface GetPortfolioPreferencesResponseFormProperties {
		applicationMode: FormControl<ApplicationMode | null | undefined>,
	}
	export function CreateGetPortfolioPreferencesResponseFormGroup() {
		return new FormGroup<GetPortfolioPreferencesResponseFormProperties>({
			applicationMode: new FormControl<ApplicationMode | null | undefined>(undefined),
		});

	}

	export enum ApplicationMode { ALL = 'ALL', KNOWN = 'KNOWN', UNKNOWN = 'UNKNOWN' }


	/**  Application preferences that you specify.  */
	export interface ApplicationPreferences {
		managementPreference?: ManagementPreference;
	}

	/**  Application preferences that you specify.  */
	export interface ApplicationPreferencesFormProperties {
	}
	export function CreateApplicationPreferencesFormGroup() {
		return new FormGroup<ApplicationPreferencesFormProperties>({
		});

	}


	/**  Preferences for migrating an application to AWS.  */
	export interface ManagementPreference {
		awsManagedResources?: AwsManagedResources;
		noPreference?: NoManagementPreference;
		selfManageResources?: SelfManageResources;
	}

	/**  Preferences for migrating an application to AWS.  */
	export interface ManagementPreferenceFormProperties {
	}
	export function CreateManagementPreferenceFormGroup() {
		return new FormGroup<ManagementPreferenceFormProperties>({
		});

	}


	/**  Object containing the choice of application destination that you specify.  */
	export interface AwsManagedResources {

		/** Required */
		targetDestination: Array<AwsManagedTargetDestination>;
	}

	/**  Object containing the choice of application destination that you specify.  */
	export interface AwsManagedResourcesFormProperties {
	}
	export function CreateAwsManagedResourcesFormGroup() {
		return new FormGroup<AwsManagedResourcesFormProperties>({
		});

	}

	export enum AwsManagedTargetDestination { 'None specified' = 'None specified', 'AWS Elastic BeanStalk' = 'AWS Elastic BeanStalk', 'AWS Fargate' = 'AWS Fargate' }


	/**  Object containing the choice of application destination that you specify.  */
	export interface NoManagementPreference {

		/** Required */
		targetDestination: Array<NoPreferenceTargetDestination>;
	}

	/**  Object containing the choice of application destination that you specify.  */
	export interface NoManagementPreferenceFormProperties {
	}
	export function CreateNoManagementPreferenceFormGroup() {
		return new FormGroup<NoManagementPreferenceFormProperties>({
		});

	}

	export enum NoPreferenceTargetDestination { 'None specified' = 'None specified', 'AWS Elastic BeanStalk' = 'AWS Elastic BeanStalk', 'AWS Fargate' = 'AWS Fargate', 'Amazon Elastic Cloud Compute (EC2)' = 'Amazon Elastic Cloud Compute (EC2)', 'Amazon Elastic Container Service (ECS)' = 'Amazon Elastic Container Service (ECS)', 'Amazon Elastic Kubernetes Service (EKS)' = 'Amazon Elastic Kubernetes Service (EKS)' }


	/**  Self-managed resources.  */
	export interface SelfManageResources {

		/** Required */
		targetDestination: Array<SelfManageTargetDestination>;
	}

	/**  Self-managed resources.  */
	export interface SelfManageResourcesFormProperties {
	}
	export function CreateSelfManageResourcesFormGroup() {
		return new FormGroup<SelfManageResourcesFormProperties>({
		});

	}

	export enum SelfManageTargetDestination { 'None specified' = 'None specified', 'Amazon Elastic Cloud Compute (EC2)' = 'Amazon Elastic Cloud Compute (EC2)', 'Amazon Elastic Container Service (ECS)' = 'Amazon Elastic Container Service (ECS)', 'Amazon Elastic Kubernetes Service (EKS)' = 'Amazon Elastic Kubernetes Service (EKS)' }


	/**  Preferences on managing your databases on AWS.  */
	export interface DatabasePreferences {
		databaseManagementPreference?: DatabaseManagementPreference;
		databaseMigrationPreference?: DatabaseMigrationPreference;
	}

	/**  Preferences on managing your databases on AWS.  */
	export interface DatabasePreferencesFormProperties {
		databaseManagementPreference: FormControl<DatabaseManagementPreference | null | undefined>,
	}
	export function CreateDatabasePreferencesFormGroup() {
		return new FormGroup<DatabasePreferencesFormProperties>({
			databaseManagementPreference: new FormControl<DatabaseManagementPreference | null | undefined>(undefined),
		});

	}

	export enum DatabaseManagementPreference { 'AWS-managed' = 'AWS-managed', 'Self-manage' = 'Self-manage', 'No preference' = 'No preference' }


	/**  Preferences for migrating a database to AWS.  */
	export interface DatabaseMigrationPreference {
		heterogeneous?: Heterogeneous;
		homogeneous?: Homogeneous;
		noPreference?: NoDatabaseMigrationPreference;
	}

	/**  Preferences for migrating a database to AWS.  */
	export interface DatabaseMigrationPreferenceFormProperties {
	}
	export function CreateDatabaseMigrationPreferenceFormGroup() {
		return new FormGroup<DatabaseMigrationPreferenceFormProperties>({
		});

	}


	/**  The object containing details about heterogeneous database preferences.  */
	export interface Heterogeneous {

		/** Required */
		targetDatabaseEngine: Array<HeterogeneousTargetDatabaseEngine>;
	}

	/**  The object containing details about heterogeneous database preferences.  */
	export interface HeterogeneousFormProperties {
	}
	export function CreateHeterogeneousFormGroup() {
		return new FormGroup<HeterogeneousFormProperties>({
		});

	}

	export enum HeterogeneousTargetDatabaseEngine { 'None specified' = 'None specified', 'Amazon Aurora' = 'Amazon Aurora', 'AWS PostgreSQL' = 'AWS PostgreSQL', MySQL = 'MySQL', 'Microsoft SQL Server' = 'Microsoft SQL Server', 'Oracle Database' = 'Oracle Database', MariaDB = 'MariaDB', SAP = 'SAP', 'Db2 LUW' = 'Db2 LUW', MongoDB = 'MongoDB' }


	/**  The object containing details about homogeneous database preferences.  */
	export interface Homogeneous {
		targetDatabaseEngine?: Array<HomogeneousTargetDatabaseEngine>;
	}

	/**  The object containing details about homogeneous database preferences.  */
	export interface HomogeneousFormProperties {
	}
	export function CreateHomogeneousFormGroup() {
		return new FormGroup<HomogeneousFormProperties>({
		});

	}

	export enum HomogeneousTargetDatabaseEngine { 'None specified' = 'None specified' }


	/**  The object containing details about database migration preferences, when you have no particular preference.  */
	export interface NoDatabaseMigrationPreference {

		/** Required */
		targetDatabaseEngine: Array<TargetDatabaseEngine>;
	}

	/**  The object containing details about database migration preferences, when you have no particular preference.  */
	export interface NoDatabaseMigrationPreferenceFormProperties {
	}
	export function CreateNoDatabaseMigrationPreferenceFormGroup() {
		return new FormGroup<NoDatabaseMigrationPreferenceFormProperties>({
		});

	}

	export enum TargetDatabaseEngine { 'None specified' = 'None specified', 'Amazon Aurora' = 'Amazon Aurora', 'AWS PostgreSQL' = 'AWS PostgreSQL', MySQL = 'MySQL', 'Microsoft SQL Server' = 'Microsoft SQL Server', 'Oracle Database' = 'Oracle Database', MariaDB = 'MariaDB', SAP = 'SAP', 'Db2 LUW' = 'Db2 LUW', MongoDB = 'MongoDB' }


	/**  Rank of business goals based on priority.  */
	export interface PrioritizeBusinessGoals {
		businessGoals?: BusinessGoals;
	}

	/**  Rank of business goals based on priority.  */
	export interface PrioritizeBusinessGoalsFormProperties {
	}
	export function CreatePrioritizeBusinessGoalsFormGroup() {
		return new FormGroup<PrioritizeBusinessGoalsFormProperties>({
		});

	}


	/**  Business goals that you specify.  */
	export interface BusinessGoals {
		licenseCostReduction?: number | null;
		modernizeInfrastructureWithCloudNativeTechnologies?: number | null;
		reduceOperationalOverheadWithManagedServices?: number | null;
		speedOfMigration?: number | null;
	}

	/**  Business goals that you specify.  */
	export interface BusinessGoalsFormProperties {
		licenseCostReduction: FormControl<number | null | undefined>,
		modernizeInfrastructureWithCloudNativeTechnologies: FormControl<number | null | undefined>,
		reduceOperationalOverheadWithManagedServices: FormControl<number | null | undefined>,
		speedOfMigration: FormControl<number | null | undefined>,
	}
	export function CreateBusinessGoalsFormGroup() {
		return new FormGroup<BusinessGoalsFormProperties>({
			licenseCostReduction: new FormControl<number | null | undefined>(undefined),
			modernizeInfrastructureWithCloudNativeTechnologies: new FormControl<number | null | undefined>(undefined),
			reduceOperationalOverheadWithManagedServices: new FormControl<number | null | undefined>(undefined),
			speedOfMigration: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetPortfolioSummaryResponse {
		assessmentSummary?: AssessmentSummary;
	}
	export interface GetPortfolioSummaryResponseFormProperties {
	}
	export function CreateGetPortfolioSummaryResponseFormGroup() {
		return new FormGroup<GetPortfolioSummaryResponseFormProperties>({
		});

	}


	/**  Contains the summary of the assessment results.  */
	export interface AssessmentSummary {
		antipatternReportS3Object?: S3Object;
		antipatternReportStatus?: AntipatternReportStatus;
		antipatternReportStatusMessage?: string;
		lastAnalyzedTimestamp?: Date;
		listAntipatternSeveritySummary?: Array<AntipatternSeveritySummary>;
		listApplicationComponentStatusSummary?: Array<ApplicationComponentStatusSummary>;
		listApplicationComponentStrategySummary?: Array<StrategySummary>;
		listApplicationComponentSummary?: Array<ApplicationComponentSummary>;
		listServerStatusSummary?: Array<ServerStatusSummary>;
		listServerStrategySummary?: Array<StrategySummary>;
		listServerSummary?: Array<ServerSummary>;
	}

	/**  Contains the summary of the assessment results.  */
	export interface AssessmentSummaryFormProperties {
		antipatternReportStatus: FormControl<AntipatternReportStatus | null | undefined>,
		antipatternReportStatusMessage: FormControl<string | null | undefined>,
		lastAnalyzedTimestamp: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentSummaryFormGroup() {
		return new FormGroup<AssessmentSummaryFormProperties>({
			antipatternReportStatus: new FormControl<AntipatternReportStatus | null | undefined>(undefined),
			antipatternReportStatusMessage: new FormControl<string | null | undefined>(undefined),
			lastAnalyzedTimestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Summary of the analysis status of the application component. */
	export interface ApplicationComponentStatusSummary {
		count?: number | null;
		srcCodeOrDbAnalysisStatus?: SrcCodeOrDbAnalysisStatus;
	}

	/** Summary of the analysis status of the application component. */
	export interface ApplicationComponentStatusSummaryFormProperties {
		count: FormControl<number | null | undefined>,
		srcCodeOrDbAnalysisStatus: FormControl<SrcCodeOrDbAnalysisStatus | null | undefined>,
	}
	export function CreateApplicationComponentStatusSummaryFormGroup() {
		return new FormGroup<ApplicationComponentStatusSummaryFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			srcCodeOrDbAnalysisStatus: new FormControl<SrcCodeOrDbAnalysisStatus | null | undefined>(undefined),
		});

	}


	/**  Object containing the summary of the strategy recommendations.  */
	export interface StrategySummary {
		count?: number | null;
		strategy?: Strategy;
	}

	/**  Object containing the summary of the strategy recommendations.  */
	export interface StrategySummaryFormProperties {
		count: FormControl<number | null | undefined>,
		strategy: FormControl<Strategy | null | undefined>,
	}
	export function CreateStrategySummaryFormGroup() {
		return new FormGroup<StrategySummaryFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			strategy: new FormControl<Strategy | null | undefined>(undefined),
		});

	}


	/**  Contains the summary of application components.  */
	export interface ApplicationComponentSummary {
		appType?: AppType;
		count?: number | null;
	}

	/**  Contains the summary of application components.  */
	export interface ApplicationComponentSummaryFormProperties {
		appType: FormControl<AppType | null | undefined>,
		count: FormControl<number | null | undefined>,
	}
	export function CreateApplicationComponentSummaryFormGroup() {
		return new FormGroup<ApplicationComponentSummaryFormProperties>({
			appType: new FormControl<AppType | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The status summary of the server analysis. */
	export interface ServerStatusSummary {
		count?: number | null;
		runTimeAssessmentStatus?: RunTimeAssessmentStatus;
	}

	/** The status summary of the server analysis. */
	export interface ServerStatusSummaryFormProperties {
		count: FormControl<number | null | undefined>,
		runTimeAssessmentStatus: FormControl<RunTimeAssessmentStatus | null | undefined>,
	}
	export function CreateServerStatusSummaryFormGroup() {
		return new FormGroup<ServerStatusSummaryFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			runTimeAssessmentStatus: new FormControl<RunTimeAssessmentStatus | null | undefined>(undefined),
		});

	}

	export enum RunTimeAssessmentStatus { dataCollectionTaskToBeScheduled = 'dataCollectionTaskToBeScheduled', dataCollectionTaskScheduled = 'dataCollectionTaskScheduled', dataCollectionTaskStarted = 'dataCollectionTaskStarted', dataCollectionTaskStopped = 'dataCollectionTaskStopped', dataCollectionTaskSuccess = 'dataCollectionTaskSuccess', dataCollectionTaskFailed = 'dataCollectionTaskFailed', dataCollectionTaskPartialSuccess = 'dataCollectionTaskPartialSuccess' }


	/**  Object containing details about the servers imported by Application Discovery Service  */
	export interface ServerSummary {
		ServerOsType?: ServerOsType;
		count?: number | null;
	}

	/**  Object containing details about the servers imported by Application Discovery Service  */
	export interface ServerSummaryFormProperties {
		ServerOsType: FormControl<ServerOsType | null | undefined>,
		count: FormControl<number | null | undefined>,
	}
	export function CreateServerSummaryFormGroup() {
		return new FormGroup<ServerSummaryFormProperties>({
			ServerOsType: new FormControl<ServerOsType | null | undefined>(undefined),
			count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ServerOsType { WindowsServer = 'WindowsServer', AmazonLinux = 'AmazonLinux', EndOfSupportWindowsServer = 'EndOfSupportWindowsServer', Redhat = 'Redhat', Other = 'Other' }

	export interface GetRecommendationReportDetailsResponse {
		id?: string;
		recommendationReportDetails?: RecommendationReportDetails;
	}
	export interface GetRecommendationReportDetailsResponseFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateGetRecommendationReportDetailsResponseFormGroup() {
		return new FormGroup<GetRecommendationReportDetailsResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Contains detailed information about a recommendation report.  */
	export interface RecommendationReportDetails {
		completionTime?: Date;
		s3Bucket?: string;
		s3Keys?: Array<string>;
		startTime?: Date;
		status?: AntipatternReportStatus;
		statusMessage?: string;
	}

	/**  Contains detailed information about a recommendation report.  */
	export interface RecommendationReportDetailsFormProperties {
		completionTime: FormControl<Date | null | undefined>,
		s3Bucket: FormControl<string | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		status: FormControl<AntipatternReportStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateRecommendationReportDetailsFormGroup() {
		return new FormGroup<RecommendationReportDetailsFormProperties>({
			completionTime: new FormControl<Date | null | undefined>(undefined),
			s3Bucket: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<AntipatternReportStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetServerDetailsResponse {
		associatedApplications?: Array<AssociatedApplication>;
		nextToken?: string;
		serverDetail?: ServerDetail;
	}
	export interface GetServerDetailsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateGetServerDetailsResponseFormGroup() {
		return new FormGroup<GetServerDetailsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Detailed information about a server.  */
	export interface ServerDetail {
		antipatternReportS3Object?: S3Object;
		antipatternReportStatus?: AntipatternReportStatus;
		antipatternReportStatusMessage?: string;
		applicationComponentStrategySummary?: Array<StrategySummary>;
		dataCollectionStatus?: RunTimeAssessmentStatus;
		id?: string;
		lastAnalyzedTimestamp?: Date;
		listAntipatternSeveritySummary?: Array<AntipatternSeveritySummary>;
		name?: string;
		recommendationSet?: RecommendationSet;
		serverError?: ServerError;
		serverType?: string;
		statusMessage?: string;
		systemInfo?: SystemInfo;
	}

	/**  Detailed information about a server.  */
	export interface ServerDetailFormProperties {
		antipatternReportStatus: FormControl<AntipatternReportStatus | null | undefined>,
		antipatternReportStatusMessage: FormControl<string | null | undefined>,
		dataCollectionStatus: FormControl<RunTimeAssessmentStatus | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastAnalyzedTimestamp: FormControl<Date | null | undefined>,
		name: FormControl<string | null | undefined>,
		serverType: FormControl<string | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
	}
	export function CreateServerDetailFormGroup() {
		return new FormGroup<ServerDetailFormProperties>({
			antipatternReportStatus: new FormControl<AntipatternReportStatus | null | undefined>(undefined),
			antipatternReportStatusMessage: new FormControl<string | null | undefined>(undefined),
			dataCollectionStatus: new FormControl<RunTimeAssessmentStatus | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastAnalyzedTimestamp: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serverType: new FormControl<string | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The error in server analysis. */
	export interface ServerError {
		serverErrorCategory?: ServerErrorCategory;
	}

	/** The error in server analysis. */
	export interface ServerErrorFormProperties {
		serverErrorCategory: FormControl<ServerErrorCategory | null | undefined>,
	}
	export function CreateServerErrorFormGroup() {
		return new FormGroup<ServerErrorFormProperties>({
			serverErrorCategory: new FormControl<ServerErrorCategory | null | undefined>(undefined),
		});

	}

	export enum ServerErrorCategory { CONNECTIVITY_ERROR = 'CONNECTIVITY_ERROR', CREDENTIAL_ERROR = 'CREDENTIAL_ERROR', PERMISSION_ERROR = 'PERMISSION_ERROR', ARCHITECTURE_ERROR = 'ARCHITECTURE_ERROR', OTHER_ERROR = 'OTHER_ERROR' }


	/**  Information about the server that hosts application components.  */
	export interface SystemInfo {
		cpuArchitecture?: string;
		fileSystemType?: string;
		networkInfoList?: Array<NetworkInfo>;
		osInfo?: OSInfo;
	}

	/**  Information about the server that hosts application components.  */
	export interface SystemInfoFormProperties {
		cpuArchitecture: FormControl<string | null | undefined>,
		fileSystemType: FormControl<string | null | undefined>,
	}
	export function CreateSystemInfoFormGroup() {
		return new FormGroup<SystemInfoFormProperties>({
			cpuArchitecture: new FormControl<string | null | undefined>(undefined),
			fileSystemType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about the server's network for which the assessment was run.  */
	export interface NetworkInfo {

		/** Required */
		interfaceName: string;

		/** Required */
		ipAddress: string;

		/** Required */
		macAddress: string;

		/** Required */
		netMask: string;
	}

	/**  Information about the server's network for which the assessment was run.  */
	export interface NetworkInfoFormProperties {

		/** Required */
		interfaceName: FormControl<string | null | undefined>,

		/** Required */
		ipAddress: FormControl<string | null | undefined>,

		/** Required */
		macAddress: FormControl<string | null | undefined>,

		/** Required */
		netMask: FormControl<string | null | undefined>,
	}
	export function CreateNetworkInfoFormGroup() {
		return new FormGroup<NetworkInfoFormProperties>({
			interfaceName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ipAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			macAddress: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			netMask: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Information about the operating system.  */
	export interface OSInfo {
		type?: OSType;
		version?: string;
	}

	/**  Information about the operating system.  */
	export interface OSInfoFormProperties {
		type: FormControl<OSType | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateOSInfoFormGroup() {
		return new FormGroup<OSInfoFormProperties>({
			type: new FormControl<OSType | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OSType { LINUX = 'LINUX', WINDOWS = 'WINDOWS' }

	export interface GetServerStrategiesResponse {
		serverStrategies?: Array<ServerStrategy>;
	}
	export interface GetServerStrategiesResponseFormProperties {
	}
	export function CreateGetServerStrategiesResponseFormGroup() {
		return new FormGroup<GetServerStrategiesResponseFormProperties>({
		});

	}


	/**  Contains information about a strategy recommendation for a server.  */
	export interface ServerStrategy {
		isPreferred?: boolean | null;
		numberOfApplicationComponents?: number | null;
		recommendation?: RecommendationSet;
		status?: StrategyRecommendation;
	}

	/**  Contains information about a strategy recommendation for a server.  */
	export interface ServerStrategyFormProperties {
		isPreferred: FormControl<boolean | null | undefined>,
		numberOfApplicationComponents: FormControl<number | null | undefined>,
		status: FormControl<StrategyRecommendation | null | undefined>,
	}
	export function CreateServerStrategyFormGroup() {
		return new FormGroup<ServerStrategyFormProperties>({
			isPreferred: new FormControl<boolean | null | undefined>(undefined),
			numberOfApplicationComponents: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<StrategyRecommendation | null | undefined>(undefined),
		});

	}

	export interface ListApplicationComponentsResponse {
		applicationComponentInfos?: Array<ApplicationComponentDetail>;
		nextToken?: string;
	}
	export interface ListApplicationComponentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListApplicationComponentsResponseFormGroup() {
		return new FormGroup<ListApplicationComponentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  The object containing information about distinct imports or groups for Strategy Recommendations.  */
	export interface Group {
		name?: GroupName;
		value?: string;
	}

	/**  The object containing information about distinct imports or groups for Strategy Recommendations.  */
	export interface GroupFormProperties {
		name: FormControl<GroupName | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
			name: new FormControl<GroupName | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GroupName { ExternalId = 'ExternalId', ExternalSourceType = 'ExternalSourceType' }

	export interface ServiceLinkedRoleLockClientException {
	}
	export interface ServiceLinkedRoleLockClientExceptionFormProperties {
	}
	export function CreateServiceLinkedRoleLockClientExceptionFormGroup() {
		return new FormGroup<ServiceLinkedRoleLockClientExceptionFormProperties>({
		});

	}

	export interface ListCollectorsResponse {
		Collectors?: Array<Collector>;
		nextToken?: string;
	}
	export interface ListCollectorsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCollectorsResponseFormGroup() {
		return new FormGroup<ListCollectorsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Process data collector that runs in the environment that you specify.  */
	export interface Collector {
		collectorHealth?: CollectorHealth;
		collectorId?: string;
		collectorVersion?: string;
		configurationSummary?: ConfigurationSummary;
		hostName?: string;
		ipAddress?: string;
		lastActivityTimeStamp?: string;
		registeredTimeStamp?: string;
	}

	/**  Process data collector that runs in the environment that you specify.  */
	export interface CollectorFormProperties {
		collectorHealth: FormControl<CollectorHealth | null | undefined>,
		collectorId: FormControl<string | null | undefined>,
		collectorVersion: FormControl<string | null | undefined>,
		hostName: FormControl<string | null | undefined>,
		ipAddress: FormControl<string | null | undefined>,
		lastActivityTimeStamp: FormControl<string | null | undefined>,
		registeredTimeStamp: FormControl<string | null | undefined>,
	}
	export function CreateCollectorFormGroup() {
		return new FormGroup<CollectorFormProperties>({
			collectorHealth: new FormControl<CollectorHealth | null | undefined>(undefined),
			collectorId: new FormControl<string | null | undefined>(undefined),
			collectorVersion: new FormControl<string | null | undefined>(undefined),
			hostName: new FormControl<string | null | undefined>(undefined),
			ipAddress: new FormControl<string | null | undefined>(undefined),
			lastActivityTimeStamp: new FormControl<string | null | undefined>(undefined),
			registeredTimeStamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CollectorHealth { COLLECTOR_HEALTHY = 'COLLECTOR_HEALTHY', COLLECTOR_UNHEALTHY = 'COLLECTOR_UNHEALTHY' }


	/** Summary of the collector configuration. */
	export interface ConfigurationSummary {
		ipAddressBasedRemoteInfoList?: Array<IPAddressBasedRemoteInfo>;
		pipelineInfoList?: Array<PipelineInfo>;
		remoteSourceCodeAnalysisServerInfo?: RemoteSourceCodeAnalysisServerInfo;
		vcenterBasedRemoteInfoList?: Array<VcenterBasedRemoteInfo>;
		versionControlInfoList?: Array<VersionControlInfo>;
	}

	/** Summary of the collector configuration. */
	export interface ConfigurationSummaryFormProperties {
	}
	export function CreateConfigurationSummaryFormGroup() {
		return new FormGroup<ConfigurationSummaryFormProperties>({
		});

	}


	/** IP address based configurations. */
	export interface IPAddressBasedRemoteInfo {
		authType?: AuthType;
		ipAddressConfigurationTimeStamp?: string;
		osType?: OSType;
	}

	/** IP address based configurations. */
	export interface IPAddressBasedRemoteInfoFormProperties {
		authType: FormControl<AuthType | null | undefined>,
		ipAddressConfigurationTimeStamp: FormControl<string | null | undefined>,
		osType: FormControl<OSType | null | undefined>,
	}
	export function CreateIPAddressBasedRemoteInfoFormGroup() {
		return new FormGroup<IPAddressBasedRemoteInfoFormProperties>({
			authType: new FormControl<AuthType | null | undefined>(undefined),
			ipAddressConfigurationTimeStamp: new FormControl<string | null | undefined>(undefined),
			osType: new FormControl<OSType | null | undefined>(undefined),
		});

	}

	export enum AuthType { NTLM = 'NTLM', SSH = 'SSH', CERT = 'CERT' }


	/** Detailed information of the pipeline. */
	export interface PipelineInfo {
		pipelineConfigurationTimeStamp?: string;
		pipelineType?: PipelineType;
	}

	/** Detailed information of the pipeline. */
	export interface PipelineInfoFormProperties {
		pipelineConfigurationTimeStamp: FormControl<string | null | undefined>,
		pipelineType: FormControl<PipelineType | null | undefined>,
	}
	export function CreatePipelineInfoFormGroup() {
		return new FormGroup<PipelineInfoFormProperties>({
			pipelineConfigurationTimeStamp: new FormControl<string | null | undefined>(undefined),
			pipelineType: new FormControl<PipelineType | null | undefined>(undefined),
		});

	}

	export enum PipelineType { AZURE_DEVOPS = 'AZURE_DEVOPS' }


	/** Information about the server configured for source code analysis. */
	export interface RemoteSourceCodeAnalysisServerInfo {
		remoteSourceCodeAnalysisServerConfigurationTimestamp?: string;
	}

	/** Information about the server configured for source code analysis. */
	export interface RemoteSourceCodeAnalysisServerInfoFormProperties {
		remoteSourceCodeAnalysisServerConfigurationTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateRemoteSourceCodeAnalysisServerInfoFormGroup() {
		return new FormGroup<RemoteSourceCodeAnalysisServerInfoFormProperties>({
			remoteSourceCodeAnalysisServerConfigurationTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the server in vCenter. */
	export interface VcenterBasedRemoteInfo {
		osType?: OSType;
		vcenterConfigurationTimeStamp?: string;
	}

	/** Details about the server in vCenter. */
	export interface VcenterBasedRemoteInfoFormProperties {
		osType: FormControl<OSType | null | undefined>,
		vcenterConfigurationTimeStamp: FormControl<string | null | undefined>,
	}
	export function CreateVcenterBasedRemoteInfoFormGroup() {
		return new FormGroup<VcenterBasedRemoteInfoFormProperties>({
			osType: new FormControl<OSType | null | undefined>(undefined),
			vcenterConfigurationTimeStamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details about the version control configuration. */
	export interface VersionControlInfo {
		versionControlConfigurationTimeStamp?: string;
		versionControlType?: VersionControlType;
	}

	/** Details about the version control configuration. */
	export interface VersionControlInfoFormProperties {
		versionControlConfigurationTimeStamp: FormControl<string | null | undefined>,
		versionControlType: FormControl<VersionControlType | null | undefined>,
	}
	export function CreateVersionControlInfoFormGroup() {
		return new FormGroup<VersionControlInfoFormProperties>({
			versionControlConfigurationTimeStamp: new FormControl<string | null | undefined>(undefined),
			versionControlType: new FormControl<VersionControlType | null | undefined>(undefined),
		});

	}

	export enum VersionControlType { GITHUB = 'GITHUB', GITHUB_ENTERPRISE = 'GITHUB_ENTERPRISE', AZURE_DEVOPS_GIT = 'AZURE_DEVOPS_GIT' }

	export interface ListImportFileTaskResponse {
		nextToken?: string;
		taskInfos?: Array<ImportFileTaskInformation>;
	}
	export interface ListImportFileTaskResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListImportFileTaskResponseFormGroup() {
		return new FormGroup<ListImportFileTaskResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**  Information about the import file tasks you request.  */
	export interface ImportFileTaskInformation {
		completionTime?: Date;
		id?: string;
		importName?: string;
		inputS3Bucket?: string;
		inputS3Key?: string;
		numberOfRecordsFailed?: number | null;
		numberOfRecordsSuccess?: number | null;
		startTime?: Date;
		status?: ImportFileTaskStatus;
		statusReportS3Bucket?: string;
		statusReportS3Key?: string;
	}

	/**  Information about the import file tasks you request.  */
	export interface ImportFileTaskInformationFormProperties {
		completionTime: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		importName: FormControl<string | null | undefined>,
		inputS3Bucket: FormControl<string | null | undefined>,
		inputS3Key: FormControl<string | null | undefined>,
		numberOfRecordsFailed: FormControl<number | null | undefined>,
		numberOfRecordsSuccess: FormControl<number | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
		status: FormControl<ImportFileTaskStatus | null | undefined>,
		statusReportS3Bucket: FormControl<string | null | undefined>,
		statusReportS3Key: FormControl<string | null | undefined>,
	}
	export function CreateImportFileTaskInformationFormGroup() {
		return new FormGroup<ImportFileTaskInformationFormProperties>({
			completionTime: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			importName: new FormControl<string | null | undefined>(undefined),
			inputS3Bucket: new FormControl<string | null | undefined>(undefined),
			inputS3Key: new FormControl<string | null | undefined>(undefined),
			numberOfRecordsFailed: new FormControl<number | null | undefined>(undefined),
			numberOfRecordsSuccess: new FormControl<number | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ImportFileTaskStatus | null | undefined>(undefined),
			statusReportS3Bucket: new FormControl<string | null | undefined>(undefined),
			statusReportS3Key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListServersResponse {
		nextToken?: string;
		serverInfos?: Array<ServerDetail>;
	}
	export interface ListServersResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListServersResponseFormGroup() {
		return new FormGroup<ListServersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPortfolioPreferencesResponse {
	}
	export interface PutPortfolioPreferencesResponseFormProperties {
	}
	export function CreatePutPortfolioPreferencesResponseFormGroup() {
		return new FormGroup<PutPortfolioPreferencesResponseFormProperties>({
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

	export interface StartAssessmentResponse {
		assessmentId?: string;
	}
	export interface StartAssessmentResponseFormProperties {
		assessmentId: FormControl<string | null | undefined>,
	}
	export function CreateStartAssessmentResponseFormGroup() {
		return new FormGroup<StartAssessmentResponseFormProperties>({
			assessmentId: new FormControl<string | null | undefined>(undefined),
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

	export interface StartImportFileTaskResponse {
		id?: string;
	}
	export interface StartImportFileTaskResponseFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateStartImportFileTaskResponseFormGroup() {
		return new FormGroup<StartImportFileTaskResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartRecommendationReportGenerationResponse {
		id?: string;
	}
	export interface StartRecommendationReportGenerationResponseFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateStartRecommendationReportGenerationResponseFormGroup() {
		return new FormGroup<StartRecommendationReportGenerationResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StopAssessmentResponse {
	}
	export interface StopAssessmentResponseFormProperties {
	}
	export function CreateStopAssessmentResponseFormGroup() {
		return new FormGroup<StopAssessmentResponseFormProperties>({
		});

	}

	export interface UpdateApplicationComponentConfigResponse {
	}
	export interface UpdateApplicationComponentConfigResponseFormProperties {
	}
	export function CreateUpdateApplicationComponentConfigResponseFormGroup() {
		return new FormGroup<UpdateApplicationComponentConfigResponseFormProperties>({
		});

	}


	/**  Object containing source code information that is linked to an application component.  */
	export interface SourceCode {
		location?: string;
		projectName?: string;
		sourceVersion?: string;
		versionControl?: VersionControlType;
	}

	/**  Object containing source code information that is linked to an application component.  */
	export interface SourceCodeFormProperties {
		location: FormControl<string | null | undefined>,
		projectName: FormControl<string | null | undefined>,
		sourceVersion: FormControl<string | null | undefined>,
		versionControl: FormControl<VersionControlType | null | undefined>,
	}
	export function CreateSourceCodeFormGroup() {
		return new FormGroup<SourceCodeFormProperties>({
			location: new FormControl<string | null | undefined>(undefined),
			projectName: new FormControl<string | null | undefined>(undefined),
			sourceVersion: new FormControl<string | null | undefined>(undefined),
			versionControl: new FormControl<VersionControlType | null | undefined>(undefined),
		});

	}

	export interface UpdateServerConfigResponse {
	}
	export interface UpdateServerConfigResponseFormProperties {
	}
	export function CreateUpdateServerConfigResponseFormGroup() {
		return new FormGroup<UpdateServerConfigResponseFormProperties>({
		});

	}

	export enum ApplicationComponentCriteria { NOT_DEFINED = 'NOT_DEFINED', APP_NAME = 'APP_NAME', SERVER_ID = 'SERVER_ID', APP_TYPE = 'APP_TYPE', STRATEGY = 'STRATEGY', DESTINATION = 'DESTINATION', ANALYSIS_STATUS = 'ANALYSIS_STATUS', ERROR_CATEGORY = 'ERROR_CATEGORY' }

	export enum DataSourceType { ApplicationDiscoveryService = 'ApplicationDiscoveryService', MPA = 'MPA', Import = 'Import' }

	export interface GetApplicationComponentDetailsRequest {
	}
	export interface GetApplicationComponentDetailsRequestFormProperties {
	}
	export function CreateGetApplicationComponentDetailsRequestFormGroup() {
		return new FormGroup<GetApplicationComponentDetailsRequestFormProperties>({
		});

	}

	export interface GetApplicationComponentStrategiesRequest {
	}
	export interface GetApplicationComponentStrategiesRequestFormProperties {
	}
	export function CreateGetApplicationComponentStrategiesRequestFormGroup() {
		return new FormGroup<GetApplicationComponentStrategiesRequestFormProperties>({
		});

	}

	export interface GetAssessmentRequest {
	}
	export interface GetAssessmentRequestFormProperties {
	}
	export function CreateGetAssessmentRequestFormGroup() {
		return new FormGroup<GetAssessmentRequestFormProperties>({
		});

	}

	export interface GetImportFileTaskRequest {
	}
	export interface GetImportFileTaskRequestFormProperties {
	}
	export function CreateGetImportFileTaskRequestFormGroup() {
		return new FormGroup<GetImportFileTaskRequestFormProperties>({
		});

	}

	export interface GetLatestAssessmentIdRequest {
	}
	export interface GetLatestAssessmentIdRequestFormProperties {
	}
	export function CreateGetLatestAssessmentIdRequestFormGroup() {
		return new FormGroup<GetLatestAssessmentIdRequestFormProperties>({
		});

	}

	export interface GetPortfolioPreferencesRequest {
	}
	export interface GetPortfolioPreferencesRequestFormProperties {
	}
	export function CreateGetPortfolioPreferencesRequestFormGroup() {
		return new FormGroup<GetPortfolioPreferencesRequestFormProperties>({
		});

	}

	export interface GetPortfolioSummaryRequest {
	}
	export interface GetPortfolioSummaryRequestFormProperties {
	}
	export function CreateGetPortfolioSummaryRequestFormGroup() {
		return new FormGroup<GetPortfolioSummaryRequestFormProperties>({
		});

	}

	export interface GetRecommendationReportDetailsRequest {
	}
	export interface GetRecommendationReportDetailsRequestFormProperties {
	}
	export function CreateGetRecommendationReportDetailsRequestFormGroup() {
		return new FormGroup<GetRecommendationReportDetailsRequestFormProperties>({
		});

	}

	export interface GetServerDetailsRequest {
	}
	export interface GetServerDetailsRequestFormProperties {
	}
	export function CreateGetServerDetailsRequestFormGroup() {
		return new FormGroup<GetServerDetailsRequestFormProperties>({
		});

	}

	export interface GetServerStrategiesRequest {
	}
	export interface GetServerStrategiesRequestFormProperties {
	}
	export function CreateGetServerStrategiesRequestFormGroup() {
		return new FormGroup<GetServerStrategiesRequestFormProperties>({
		});

	}

	export enum SortOrder { ASC = 'ASC', DESC = 'DESC' }

	export interface ListApplicationComponentsRequest {
		applicationComponentCriteria?: ApplicationComponentCriteria;
		filterValue?: string;
		groupIdFilter?: Array<Group>;
		maxResults?: number | null;
		nextToken?: string;
		sort?: SortOrder;
	}
	export interface ListApplicationComponentsRequestFormProperties {
		applicationComponentCriteria: FormControl<ApplicationComponentCriteria | null | undefined>,
		filterValue: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		sort: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListApplicationComponentsRequestFormGroup() {
		return new FormGroup<ListApplicationComponentsRequestFormProperties>({
			applicationComponentCriteria: new FormControl<ApplicationComponentCriteria | null | undefined>(undefined),
			filterValue: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			sort: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListCollectorsRequest {
	}
	export interface ListCollectorsRequestFormProperties {
	}
	export function CreateListCollectorsRequestFormGroup() {
		return new FormGroup<ListCollectorsRequestFormProperties>({
		});

	}

	export interface ListImportFileTaskRequest {
	}
	export interface ListImportFileTaskRequestFormProperties {
	}
	export function CreateListImportFileTaskRequestFormGroup() {
		return new FormGroup<ListImportFileTaskRequestFormProperties>({
		});

	}

	export enum ServerCriteria { NOT_DEFINED = 'NOT_DEFINED', OS_NAME = 'OS_NAME', STRATEGY = 'STRATEGY', DESTINATION = 'DESTINATION', SERVER_ID = 'SERVER_ID', ANALYSIS_STATUS = 'ANALYSIS_STATUS', ERROR_CATEGORY = 'ERROR_CATEGORY' }

	export interface ListServersRequest {
		filterValue?: string;
		groupIdFilter?: Array<Group>;
		maxResults?: number | null;
		nextToken?: string;
		serverCriteria?: ServerCriteria;
		sort?: SortOrder;
	}
	export interface ListServersRequestFormProperties {
		filterValue: FormControl<string | null | undefined>,
		maxResults: FormControl<number | null | undefined>,
		nextToken: FormControl<string | null | undefined>,
		serverCriteria: FormControl<ServerCriteria | null | undefined>,
		sort: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListServersRequestFormGroup() {
		return new FormGroup<ListServersRequestFormProperties>({
			filterValue: new FormControl<string | null | undefined>(undefined),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined),
			serverCriteria: new FormControl<ServerCriteria | null | undefined>(undefined),
			sort: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export enum OutputFormat { Excel = 'Excel', Json = 'Json' }

	export interface PutPortfolioPreferencesRequest {
		applicationMode?: ApplicationMode;
		applicationPreferences?: ApplicationPreferences;
		databasePreferences?: DatabasePreferences;
		prioritizeBusinessGoals?: PrioritizeBusinessGoals;
	}
	export interface PutPortfolioPreferencesRequestFormProperties {
		applicationMode: FormControl<ApplicationMode | null | undefined>,
	}
	export function CreatePutPortfolioPreferencesRequestFormGroup() {
		return new FormGroup<PutPortfolioPreferencesRequestFormProperties>({
			applicationMode: new FormControl<ApplicationMode | null | undefined>(undefined),
		});

	}

	export enum RecommendationReportStatus { FAILED = 'FAILED', IN_PROGRESS = 'IN_PROGRESS', SUCCESS = 'SUCCESS' }

	export enum VersionControl { GITHUB = 'GITHUB', GITHUB_ENTERPRISE = 'GITHUB_ENTERPRISE', AZURE_DEVOPS_GIT = 'AZURE_DEVOPS_GIT' }

	export interface StartAssessmentRequest {
		assessmentTargets?: Array<AssessmentTarget>;
		s3bucketForAnalysisData?: string;
		s3bucketForReportData?: string;
	}
	export interface StartAssessmentRequestFormProperties {
		s3bucketForAnalysisData: FormControl<string | null | undefined>,
		s3bucketForReportData: FormControl<string | null | undefined>,
	}
	export function CreateStartAssessmentRequestFormGroup() {
		return new FormGroup<StartAssessmentRequestFormProperties>({
			s3bucketForAnalysisData: new FormControl<string | null | undefined>(undefined),
			s3bucketForReportData: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartImportFileTaskRequest {

		/** Required */
		S3Bucket: string;
		dataSourceType?: DataSourceType;
		groupId?: Array<Group>;

		/** Required */
		name: string;
		s3bucketForReportData?: string;

		/** Required */
		s3key: string;
	}
	export interface StartImportFileTaskRequestFormProperties {

		/** Required */
		S3Bucket: FormControl<string | null | undefined>,
		dataSourceType: FormControl<DataSourceType | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		s3bucketForReportData: FormControl<string | null | undefined>,

		/** Required */
		s3key: FormControl<string | null | undefined>,
	}
	export function CreateStartImportFileTaskRequestFormGroup() {
		return new FormGroup<StartImportFileTaskRequestFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			dataSourceType: new FormControl<DataSourceType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			s3bucketForReportData: new FormControl<string | null | undefined>(undefined),
			s3key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartRecommendationReportGenerationRequest {
		groupIdFilter?: Array<Group>;
		outputFormat?: OutputFormat;
	}
	export interface StartRecommendationReportGenerationRequestFormProperties {
		outputFormat: FormControl<OutputFormat | null | undefined>,
	}
	export function CreateStartRecommendationReportGenerationRequestFormGroup() {
		return new FormGroup<StartRecommendationReportGenerationRequestFormProperties>({
			outputFormat: new FormControl<OutputFormat | null | undefined>(undefined),
		});

	}

	export interface StopAssessmentRequest {

		/** Required */
		assessmentId: string;
	}
	export interface StopAssessmentRequestFormProperties {

		/** Required */
		assessmentId: FormControl<string | null | undefined>,
	}
	export function CreateStopAssessmentRequestFormGroup() {
		return new FormGroup<StopAssessmentRequestFormProperties>({
			assessmentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/**  Information about all the available strategy options for migrating and modernizing an application component.  */
	export interface StrategyOption {
		isPreferred?: boolean | null;
		strategy?: Strategy;
		targetDestination?: TargetDestination;
		toolName?: TransformationToolName;
	}

	/**  Information about all the available strategy options for migrating and modernizing an application component.  */
	export interface StrategyOptionFormProperties {
		isPreferred: FormControl<boolean | null | undefined>,
		strategy: FormControl<Strategy | null | undefined>,
		targetDestination: FormControl<TargetDestination | null | undefined>,
		toolName: FormControl<TransformationToolName | null | undefined>,
	}
	export function CreateStrategyOptionFormGroup() {
		return new FormGroup<StrategyOptionFormProperties>({
			isPreferred: new FormControl<boolean | null | undefined>(undefined),
			strategy: new FormControl<Strategy | null | undefined>(undefined),
			targetDestination: new FormControl<TargetDestination | null | undefined>(undefined),
			toolName: new FormControl<TransformationToolName | null | undefined>(undefined),
		});

	}

	export interface UpdateApplicationComponentConfigRequest {
		appType?: AppType;

		/** Required */
		applicationComponentId: string;
		configureOnly?: boolean | null;
		inclusionStatus?: InclusionStatus;
		secretsManagerKey?: string;
		sourceCodeList?: Array<SourceCode>;
		strategyOption?: StrategyOption;
	}
	export interface UpdateApplicationComponentConfigRequestFormProperties {
		appType: FormControl<AppType | null | undefined>,

		/** Required */
		applicationComponentId: FormControl<string | null | undefined>,
		configureOnly: FormControl<boolean | null | undefined>,
		inclusionStatus: FormControl<InclusionStatus | null | undefined>,
		secretsManagerKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationComponentConfigRequestFormGroup() {
		return new FormGroup<UpdateApplicationComponentConfigRequestFormProperties>({
			appType: new FormControl<AppType | null | undefined>(undefined),
			applicationComponentId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			configureOnly: new FormControl<boolean | null | undefined>(undefined),
			inclusionStatus: new FormControl<InclusionStatus | null | undefined>(undefined),
			secretsManagerKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateServerConfigRequest {

		/** Required */
		serverId: string;
		strategyOption?: StrategyOption;
	}
	export interface UpdateServerConfigRequestFormProperties {

		/** Required */
		serverId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServerConfigRequestFormGroup() {
		return new FormGroup<UpdateServerConfigRequestFormProperties>({
			serverId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieves details about an application component.
		 * Get get-applicationcomponent-details/{applicationComponentId}
		 * @param {string} applicationComponentId  The ID of the application component. The ID is unique within an AWS account.
		 *     Min length: 0    Max length: 44
		 * @return {GetApplicationComponentDetailsResponse} Success
		 */
		GetApplicationComponentDetails(applicationComponentId: string): Observable<GetApplicationComponentDetailsResponse> {
			return this.http.get<GetApplicationComponentDetailsResponse>(this.baseUri + 'get-applicationcomponent-details/' + (applicationComponentId == null ? '' : encodeURIComponent(applicationComponentId)), {});
		}

		/**
		 * Retrieves a list of all the recommended strategies and tools for an application component running on a server.
		 * Get get-applicationcomponent-strategies/{applicationComponentId}
		 * @param {string} applicationComponentId  The ID of the application component. The ID is unique within an AWS account.
		 *     Min length: 0    Max length: 44
		 * @return {GetApplicationComponentStrategiesResponse} Success
		 */
		GetApplicationComponentStrategies(applicationComponentId: string): Observable<GetApplicationComponentStrategiesResponse> {
			return this.http.get<GetApplicationComponentStrategiesResponse>(this.baseUri + 'get-applicationcomponent-strategies/' + (applicationComponentId == null ? '' : encodeURIComponent(applicationComponentId)), {});
		}

		/**
		 * Retrieves the status of an on-going assessment.
		 * Get get-assessment/{id}
		 * @param {string} id  The <code>assessmentid</code> returned by <a>StartAssessment</a>.
		 *     Min length: 0    Max length: 52
		 * @return {GetAssessmentResponse} Success
		 */
		GetAssessment(id: string): Observable<GetAssessmentResponse> {
			return this.http.get<GetAssessmentResponse>(this.baseUri + 'get-assessment/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves the details about a specific import task.
		 * Get get-import-file-task/{id}
		 * @param {string} id  The ID of the import file task. This ID is returned in the response of <a>StartImportFileTask</a>. 
		 *     Min length: 0    Max length: 1024
		 * @return {GetImportFileTaskResponse} Success
		 */
		GetImportFileTask(id: string): Observable<GetImportFileTaskResponse> {
			return this.http.get<GetImportFileTaskResponse>(this.baseUri + 'get-import-file-task/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieve the latest ID of a specific assessment task.
		 * Get get-latest-assessment-id
		 * @return {GetLatestAssessmentIdResponse} Success
		 */
		GetLatestAssessmentId(): Observable<GetLatestAssessmentIdResponse> {
			return this.http.get<GetLatestAssessmentIdResponse>(this.baseUri + 'get-latest-assessment-id', {});
		}

		/**
		 * Retrieves your migration and modernization preferences.
		 * Get get-portfolio-preferences
		 * @return {GetPortfolioPreferencesResponse} Success
		 */
		GetPortfolioPreferences(): Observable<GetPortfolioPreferencesResponse> {
			return this.http.get<GetPortfolioPreferencesResponse>(this.baseUri + 'get-portfolio-preferences', {});
		}

		/**
		 * Retrieves overall summary including the number of servers to rehost and the overall number of anti-patterns.
		 * Get get-portfolio-summary
		 * @return {GetPortfolioSummaryResponse} Success
		 */
		GetPortfolioSummary(): Observable<GetPortfolioSummaryResponse> {
			return this.http.get<GetPortfolioSummaryResponse>(this.baseUri + 'get-portfolio-summary', {});
		}

		/**
		 * Retrieves detailed information about the specified recommendation report.
		 * Get get-recommendation-report-details/{id}
		 * @param {string} id  The recommendation report generation task <code>id</code> returned by <a>StartRecommendationReportGeneration</a>. 
		 *     Min length: 0    Max length: 52
		 * @return {GetRecommendationReportDetailsResponse} Success
		 */
		GetRecommendationReportDetails(id: string): Observable<GetRecommendationReportDetailsResponse> {
			return this.http.get<GetRecommendationReportDetailsResponse>(this.baseUri + 'get-recommendation-report-details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Retrieves detailed information about a specified server.
		 * Get get-server-details/{serverId}
		 * @param {number} maxResults  The maximum number of items to include in the response. The maximum value is 100. 
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} nextToken  The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10. 
		 *     Min length: 0    Max length: 2048
		 * @param {string} serverId  The ID of the server. 
		 *     Min length: 1    Max length: 27
		 * @return {GetServerDetailsResponse} Success
		 */
		GetServerDetails(maxResults: number | null | undefined, nextToken: string | null | undefined, serverId: string): Observable<GetServerDetailsResponse> {
			return this.http.get<GetServerDetailsResponse>(this.baseUri + 'get-server-details/' + (serverId == null ? '' : encodeURIComponent(serverId)) + '?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves recommended strategies and tools for the specified server.
		 * Get get-server-strategies/{serverId}
		 * @param {string} serverId  The ID of the server. 
		 *     Min length: 1    Max length: 27
		 * @return {GetServerStrategiesResponse} Success
		 */
		GetServerStrategies(serverId: string): Observable<GetServerStrategiesResponse> {
			return this.http.get<GetServerStrategiesResponse>(this.baseUri + 'get-server-strategies/' + (serverId == null ? '' : encodeURIComponent(serverId)), {});
		}

		/**
		 * Retrieves a list of all the application components (processes).
		 * Post list-applicationcomponents
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListApplicationComponentsResponse} Success
		 */
		ListApplicationComponents(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListApplicationComponentsPostBody): Observable<ListApplicationComponentsResponse> {
			return this.http.post<ListApplicationComponentsResponse>(this.baseUri + 'list-applicationcomponents?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of all the installed collectors.
		 * Get list-collectors
		 * @param {number} maxResults  The maximum number of items to include in the response. The maximum value is 100. 
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} nextToken  The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10. 
		 *     Min length: 0    Max length: 2048
		 * @return {ListCollectorsResponse} Success
		 */
		ListCollectors(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListCollectorsResponse> {
			return this.http.get<ListCollectorsResponse>(this.baseUri + 'list-collectors?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Retrieves a list of all the imports performed.
		 * Get list-import-file-task
		 * @param {number} maxResults  The total number of items to return. The maximum value is 100. 
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} nextToken  The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10. 
		 *     Min length: 0    Max length: 1024
		 * @return {ListImportFileTaskResponse} Success
		 */
		ListImportFileTask(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListImportFileTaskResponse> {
			return this.http.get<ListImportFileTaskResponse>(this.baseUri + 'list-import-file-task?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Returns a list of all the servers.
		 * Post list-servers
		 * @param {string} maxResults Pagination limit
		 * @param {string} nextToken Pagination token
		 * @return {ListServersResponse} Success
		 */
		ListServers(maxResults: string | null | undefined, nextToken: string | null | undefined, requestBody: ListServersPostBody): Observable<ListServersResponse> {
			return this.http.post<ListServersResponse>(this.baseUri + 'list-servers?maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Saves the specified migration and modernization preferences.
		 * Post put-portfolio-preferences
		 * @return {PutPortfolioPreferencesResponse} Success
		 */
		PutPortfolioPreferences(requestBody: PutPortfolioPreferencesPostBody): Observable<PutPortfolioPreferencesResponse> {
			return this.http.post<PutPortfolioPreferencesResponse>(this.baseUri + 'put-portfolio-preferences', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts the assessment of an on-premises environment.
		 * Post start-assessment
		 * @return {StartAssessmentResponse} Success
		 */
		StartAssessment(requestBody: StartAssessmentPostBody): Observable<StartAssessmentResponse> {
			return this.http.post<StartAssessmentResponse>(this.baseUri + 'start-assessment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts a file import.
		 * Post start-import-file-task
		 * @return {StartImportFileTaskResponse} Success
		 */
		StartImportFileTask(requestBody: StartImportFileTaskPostBody): Observable<StartImportFileTaskResponse> {
			return this.http.post<StartImportFileTaskResponse>(this.baseUri + 'start-import-file-task', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Starts generating a recommendation report.
		 * Post start-recommendation-report-generation
		 * @return {StartRecommendationReportGenerationResponse} Success
		 */
		StartRecommendationReportGeneration(requestBody: StartRecommendationReportGenerationPostBody): Observable<StartRecommendationReportGenerationResponse> {
			return this.http.post<StartRecommendationReportGenerationResponse>(this.baseUri + 'start-recommendation-report-generation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops the assessment of an on-premises environment.
		 * Post stop-assessment
		 * @return {StopAssessmentResponse} Success
		 */
		StopAssessment(requestBody: StopAssessmentPostBody): Observable<StopAssessmentResponse> {
			return this.http.post<StopAssessmentResponse>(this.baseUri + 'stop-assessment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of an application component.
		 * Post update-applicationcomponent-config/
		 * @return {UpdateApplicationComponentConfigResponse} Success
		 */
		UpdateApplicationComponentConfig(requestBody: UpdateApplicationComponentConfigPostBody): Observable<UpdateApplicationComponentConfigResponse> {
			return this.http.post<UpdateApplicationComponentConfigResponse>(this.baseUri + 'update-applicationcomponent-config/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates the configuration of the specified server.
		 * Post update-server-config/
		 * @return {UpdateServerConfigResponse} Success
		 */
		UpdateServerConfig(requestBody: UpdateServerConfigPostBody): Observable<UpdateServerConfigResponse> {
			return this.http.post<UpdateServerConfigResponse>(this.baseUri + 'update-server-config/', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface ListApplicationComponentsPostBody {

		/** Criteria for filtering the list of application components. */
		applicationComponentCriteria?: ApplicationComponentCriteria | null;

		/**
		 * Specify the value based on the application component criteria type. For example, if <code>applicationComponentCriteria</code> is set to <code>SERVER_ID</code> and <code>filterValue</code> is set to <code>server1</code>, then <a>ListApplicationComponents</a> returns all the application components running on server1.
		 * Min length: 0
		 * Max length: 256
		 */
		filterValue?: string | null;

		/** The group ID specified in to filter on. */
		groupIdFilter?: Array<Group>;

		/**
		 * The maximum number of items to include in the response. The maximum value is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
		 * Min length: 0
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/** Specifies whether to sort by ascending (<code>ASC</code>) or descending (<code>DESC</code>) order. */
		sort?: SortOrder | null;
	}
	export interface ListApplicationComponentsPostBodyFormProperties {

		/** Criteria for filtering the list of application components. */
		applicationComponentCriteria: FormControl<ApplicationComponentCriteria | null | undefined>,

		/**
		 * Specify the value based on the application component criteria type. For example, if <code>applicationComponentCriteria</code> is set to <code>SERVER_ID</code> and <code>filterValue</code> is set to <code>server1</code>, then <a>ListApplicationComponents</a> returns all the application components running on server1.
		 * Min length: 0
		 * Max length: 256
		 */
		filterValue: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to include in the response. The maximum value is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
		 * Min length: 0
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/** Specifies whether to sort by ascending (<code>ASC</code>) or descending (<code>DESC</code>) order. */
		sort: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListApplicationComponentsPostBodyFormGroup() {
		return new FormGroup<ListApplicationComponentsPostBodyFormProperties>({
			applicationComponentCriteria: new FormControl<ApplicationComponentCriteria | null | undefined>(undefined),
			filterValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(256), Validators.pattern('.*\S.*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*\S.*')]),
			sort: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface ListServersPostBody {

		/**
		 * Specifies the filter value, which is based on the type of server criteria. For example, if <code>serverCriteria</code> is <code>OS_NAME</code>, and the <code>filterValue</code> is equal to <code>WindowsServer</code>, then <code>ListServers</code> returns all of the servers matching the OS name <code>WindowsServer</code>.
		 * Min length: 0
		 * Max length: 1024
		 */
		filterValue?: string | null;

		/** Specifies the group ID to filter on. */
		groupIdFilter?: Array<Group>;

		/**
		 * The maximum number of items to include in the response. The maximum value is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults?: number | null;

		/**
		 * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
		 * Min length: 0
		 * Max length: 2048
		 */
		nextToken?: string | null;

		/** Criteria for filtering servers. */
		serverCriteria?: ServerCriteria | null;

		/** Specifies whether to sort by ascending (<code>ASC</code>) or descending (<code>DESC</code>) order. */
		sort?: SortOrder | null;
	}
	export interface ListServersPostBodyFormProperties {

		/**
		 * Specifies the filter value, which is based on the type of server criteria. For example, if <code>serverCriteria</code> is <code>OS_NAME</code>, and the <code>filterValue</code> is equal to <code>WindowsServer</code>, then <code>ListServers</code> returns all of the servers matching the OS name <code>WindowsServer</code>.
		 * Min length: 0
		 * Max length: 1024
		 */
		filterValue: FormControl<string | null | undefined>,

		/**
		 * The maximum number of items to include in the response. The maximum value is 100.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxResults: FormControl<number | null | undefined>,

		/**
		 * The token from a previous call that you use to retrieve the next set of results. For example, if a previous call to this action returned 100 items, but you set <code>maxResults</code> to 10. You'll receive a set of 10 results along with a token. You then use the returned token to retrieve the next set of 10.
		 * Min length: 0
		 * Max length: 2048
		 */
		nextToken: FormControl<string | null | undefined>,

		/** Criteria for filtering servers. */
		serverCriteria: FormControl<ServerCriteria | null | undefined>,

		/** Specifies whether to sort by ascending (<code>ASC</code>) or descending (<code>DESC</code>) order. */
		sort: FormControl<SortOrder | null | undefined>,
	}
	export function CreateListServersPostBodyFormGroup() {
		return new FormGroup<ListServersPostBodyFormProperties>({
			filterValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*\S.*')]),
			maxResults: new FormControl<number | null | undefined>(undefined),
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(2048), Validators.pattern('.*\S.*')]),
			serverCriteria: new FormControl<ServerCriteria | null | undefined>(undefined),
			sort: new FormControl<SortOrder | null | undefined>(undefined),
		});

	}

	export interface PutPortfolioPreferencesPostBody {

		/** The classification for application component types. */
		applicationMode?: ApplicationMode | null;

		/** Application preferences that you specify. */
		applicationPreferences?: PutPortfolioPreferencesPostBodyApplicationPreferences;

		/** Preferences on managing your databases on AWS. */
		databasePreferences?: PutPortfolioPreferencesPostBodyDatabasePreferences;

		/** Rank of business goals based on priority. */
		prioritizeBusinessGoals?: PutPortfolioPreferencesPostBodyPrioritizeBusinessGoals;
	}
	export interface PutPortfolioPreferencesPostBodyFormProperties {

		/** The classification for application component types. */
		applicationMode: FormControl<ApplicationMode | null | undefined>,
	}
	export function CreatePutPortfolioPreferencesPostBodyFormGroup() {
		return new FormGroup<PutPortfolioPreferencesPostBodyFormProperties>({
			applicationMode: new FormControl<ApplicationMode | null | undefined>(undefined),
		});

	}

	export interface PutPortfolioPreferencesPostBodyApplicationPreferences {
		managementPreference?: ManagementPreference;
	}
	export interface PutPortfolioPreferencesPostBodyApplicationPreferencesFormProperties {
	}
	export function CreatePutPortfolioPreferencesPostBodyApplicationPreferencesFormGroup() {
		return new FormGroup<PutPortfolioPreferencesPostBodyApplicationPreferencesFormProperties>({
		});

	}

	export interface PutPortfolioPreferencesPostBodyDatabasePreferences {
		databaseManagementPreference?: DatabaseManagementPreference;
		databaseMigrationPreference?: DatabaseMigrationPreference;
	}
	export interface PutPortfolioPreferencesPostBodyDatabasePreferencesFormProperties {
		databaseManagementPreference: FormControl<DatabaseManagementPreference | null | undefined>,
	}
	export function CreatePutPortfolioPreferencesPostBodyDatabasePreferencesFormGroup() {
		return new FormGroup<PutPortfolioPreferencesPostBodyDatabasePreferencesFormProperties>({
			databaseManagementPreference: new FormControl<DatabaseManagementPreference | null | undefined>(undefined),
		});

	}

	export interface PutPortfolioPreferencesPostBodyPrioritizeBusinessGoals {
		businessGoals?: BusinessGoals;
	}
	export interface PutPortfolioPreferencesPostBodyPrioritizeBusinessGoalsFormProperties {
	}
	export function CreatePutPortfolioPreferencesPostBodyPrioritizeBusinessGoalsFormGroup() {
		return new FormGroup<PutPortfolioPreferencesPostBodyPrioritizeBusinessGoalsFormProperties>({
		});

	}

	export interface StartAssessmentPostBody {

		/**
		 * List of criteria for assessment.
		 * Minimum items: 0
		 * Maximum items: 10
		 */
		assessmentTargets?: Array<AssessmentTarget>;

		/**
		 * The S3 bucket used by the collectors to send analysis data to the service. The bucket name must begin with <code>migrationhub-strategy-</code>.
		 * Min length: 0
		 * Max length: 63
		 */
		s3bucketForAnalysisData?: string | null;

		/**
		 * The S3 bucket where all the reports generated by the service are stored. The bucket name must begin with <code>migrationhub-strategy-</code>.
		 * Min length: 0
		 * Max length: 63
		 */
		s3bucketForReportData?: string | null;
	}
	export interface StartAssessmentPostBodyFormProperties {

		/**
		 * The S3 bucket used by the collectors to send analysis data to the service. The bucket name must begin with <code>migrationhub-strategy-</code>.
		 * Min length: 0
		 * Max length: 63
		 */
		s3bucketForAnalysisData: FormControl<string | null | undefined>,

		/**
		 * The S3 bucket where all the reports generated by the service are stored. The bucket name must begin with <code>migrationhub-strategy-</code>.
		 * Min length: 0
		 * Max length: 63
		 */
		s3bucketForReportData: FormControl<string | null | undefined>,
	}
	export function CreateStartAssessmentPostBodyFormGroup() {
		return new FormGroup<StartAssessmentPostBodyFormProperties>({
			s3bucketForAnalysisData: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(63), Validators.pattern('[0-9a-z]+[0-9a-z\.\-]*[0-9a-z]+')]),
			s3bucketForReportData: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(63), Validators.pattern('[0-9a-z]+[0-9a-z\.\-]*[0-9a-z]+')]),
		});

	}

	export interface StartImportFileTaskPostBody {

		/**
		 * The S3 bucket where the import file is located. The bucket name is required to begin with <code>migrationhub-strategy-</code>.
		 * Required
		 * Min length: 0
		 * Max length: 63
		 */
		S3Bucket: string;

		/** Specifies the source that the servers are coming from. By default, Strategy Recommendations assumes that the servers specified in the import file are available in AWS Application Discovery Service. */
		dataSourceType?: DataSourceType | null;

		/** Groups the resources in the import file together with a unique name. This ID can be as filter in <code>ListApplicationComponents</code> and <code>ListServers</code>. */
		groupId?: Array<Group>;

		/**
		 * A descriptive name for the request.
		 * Required
		 * Min length: 1
		 * Max length: 50
		 */
		name: string;

		/**
		 * The S3 bucket where Strategy Recommendations uploads import results. The bucket name is required to begin with migrationhub-strategy-.
		 * Min length: 0
		 * Max length: 63
		 */
		s3bucketForReportData?: string | null;

		/**
		 * The Amazon S3 key name of the import file.
		 * Required
		 * Min length: 0
		 * Max length: 1024
		 */
		s3key: string;
	}
	export interface StartImportFileTaskPostBodyFormProperties {

		/**
		 * The S3 bucket where the import file is located. The bucket name is required to begin with <code>migrationhub-strategy-</code>.
		 * Required
		 * Min length: 0
		 * Max length: 63
		 */
		S3Bucket: FormControl<string | null | undefined>,

		/** Specifies the source that the servers are coming from. By default, Strategy Recommendations assumes that the servers specified in the import file are available in AWS Application Discovery Service. */
		dataSourceType: FormControl<DataSourceType | null | undefined>,

		/**
		 * A descriptive name for the request.
		 * Required
		 * Min length: 1
		 * Max length: 50
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The S3 bucket where Strategy Recommendations uploads import results. The bucket name is required to begin with migrationhub-strategy-.
		 * Min length: 0
		 * Max length: 63
		 */
		s3bucketForReportData: FormControl<string | null | undefined>,

		/**
		 * The Amazon S3 key name of the import file.
		 * Required
		 * Min length: 0
		 * Max length: 1024
		 */
		s3key: FormControl<string | null | undefined>,
	}
	export function CreateStartImportFileTaskPostBodyFormGroup() {
		return new FormGroup<StartImportFileTaskPostBodyFormProperties>({
			S3Bucket: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(63), Validators.pattern('[0-9a-z]+[0-9a-z\.\-]*[0-9a-z]+')]),
			dataSourceType: new FormControl<DataSourceType | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(50), Validators.pattern('[a-zA-Z0-9_-]+')]),
			s3bucketForReportData: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(63), Validators.pattern('[0-9a-z]+[0-9a-z\.\-]*[0-9a-z]+')]),
			s3key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1024), Validators.pattern('.*\S.*')]),
		});

	}

	export interface StartRecommendationReportGenerationPostBody {

		/** Groups the resources in the recommendation report with a unique name. */
		groupIdFilter?: Array<Group>;

		/** The output format for the recommendation report file. The default format is Microsoft Excel. */
		outputFormat?: OutputFormat | null;
	}
	export interface StartRecommendationReportGenerationPostBodyFormProperties {

		/** The output format for the recommendation report file. The default format is Microsoft Excel. */
		outputFormat: FormControl<OutputFormat | null | undefined>,
	}
	export function CreateStartRecommendationReportGenerationPostBodyFormGroup() {
		return new FormGroup<StartRecommendationReportGenerationPostBodyFormProperties>({
			outputFormat: new FormControl<OutputFormat | null | undefined>(undefined),
		});

	}

	export interface StopAssessmentPostBody {

		/**
		 * The <code>assessmentId</code> returned by <a>StartAssessment</a>.
		 * Required
		 * Min length: 0
		 * Max length: 52
		 */
		assessmentId: string;
	}
	export interface StopAssessmentPostBodyFormProperties {

		/**
		 * The <code>assessmentId</code> returned by <a>StartAssessment</a>.
		 * Required
		 * Min length: 0
		 * Max length: 52
		 */
		assessmentId: FormControl<string | null | undefined>,
	}
	export function CreateStopAssessmentPostBodyFormGroup() {
		return new FormGroup<StopAssessmentPostBodyFormProperties>({
			assessmentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(52), Validators.pattern('[0-9a-z-:]+')]),
		});

	}

	export interface UpdateApplicationComponentConfigPostBody {

		/** The type of known component. */
		appType?: AppType | null;

		/**
		 * The ID of the application component. The ID is unique within an AWS account.
		 * Required
		 * Min length: 0
		 * Max length: 44
		 */
		applicationComponentId: string;

		/** Update the configuration request of an application component. If it is set to true, the source code and/or database credentials are updated. If it is set to false, the source code and/or database credentials are updated and an analysis is initiated. */
		configureOnly?: boolean | null;

		/** Indicates whether the application component has been included for server recommendation or not. */
		inclusionStatus?: InclusionStatus | null;

		/**
		 * Database credentials.
		 * Min length: 1
		 * Max length: 512
		 */
		secretsManagerKey?: string | null;

		/** The list of source code configurations to update for the application component. */
		sourceCodeList?: Array<SourceCode>;

		/** Information about all the available strategy options for migrating and modernizing an application component. */
		strategyOption?: UpdateApplicationComponentConfigPostBodyStrategyOption;
	}
	export interface UpdateApplicationComponentConfigPostBodyFormProperties {

		/** The type of known component. */
		appType: FormControl<AppType | null | undefined>,

		/**
		 * The ID of the application component. The ID is unique within an AWS account.
		 * Required
		 * Min length: 0
		 * Max length: 44
		 */
		applicationComponentId: FormControl<string | null | undefined>,

		/** Update the configuration request of an application component. If it is set to true, the source code and/or database credentials are updated. If it is set to false, the source code and/or database credentials are updated and an analysis is initiated. */
		configureOnly: FormControl<boolean | null | undefined>,

		/** Indicates whether the application component has been included for server recommendation or not. */
		inclusionStatus: FormControl<InclusionStatus | null | undefined>,

		/**
		 * Database credentials.
		 * Min length: 1
		 * Max length: 512
		 */
		secretsManagerKey: FormControl<string | null | undefined>,
	}
	export function CreateUpdateApplicationComponentConfigPostBodyFormGroup() {
		return new FormGroup<UpdateApplicationComponentConfigPostBodyFormProperties>({
			appType: new FormControl<AppType | null | undefined>(undefined),
			applicationComponentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(44), Validators.pattern('[0-9a-zA-Z-]+')]),
			configureOnly: new FormControl<boolean | null | undefined>(undefined),
			inclusionStatus: new FormControl<InclusionStatus | null | undefined>(undefined),
			secretsManagerKey: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(512), Validators.pattern('.*')]),
		});

	}

	export interface UpdateApplicationComponentConfigPostBodyStrategyOption {
		isPreferred?: boolean | null;
		strategy?: Strategy;
		targetDestination?: TargetDestination;
		toolName?: TransformationToolName;
	}
	export interface UpdateApplicationComponentConfigPostBodyStrategyOptionFormProperties {
		isPreferred: FormControl<boolean | null | undefined>,
		strategy: FormControl<Strategy | null | undefined>,
		targetDestination: FormControl<TargetDestination | null | undefined>,
		toolName: FormControl<TransformationToolName | null | undefined>,
	}
	export function CreateUpdateApplicationComponentConfigPostBodyStrategyOptionFormGroup() {
		return new FormGroup<UpdateApplicationComponentConfigPostBodyStrategyOptionFormProperties>({
			isPreferred: new FormControl<boolean | null | undefined>(undefined),
			strategy: new FormControl<Strategy | null | undefined>(undefined),
			targetDestination: new FormControl<TargetDestination | null | undefined>(undefined),
			toolName: new FormControl<TransformationToolName | null | undefined>(undefined),
		});

	}

	export interface UpdateServerConfigPostBody {

		/**
		 * The ID of the server.
		 * Required
		 * Min length: 1
		 * Max length: 27
		 */
		serverId: string;

		/** Information about all the available strategy options for migrating and modernizing an application component. */
		strategyOption?: UpdateServerConfigPostBodyStrategyOption;
	}
	export interface UpdateServerConfigPostBodyFormProperties {

		/**
		 * The ID of the server.
		 * Required
		 * Min length: 1
		 * Max length: 27
		 */
		serverId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateServerConfigPostBodyFormGroup() {
		return new FormGroup<UpdateServerConfigPostBodyFormProperties>({
			serverId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(27), Validators.pattern('.*\S.*')]),
		});

	}

	export interface UpdateServerConfigPostBodyStrategyOption {
		isPreferred?: boolean | null;
		strategy?: Strategy;
		targetDestination?: TargetDestination;
		toolName?: TransformationToolName;
	}
	export interface UpdateServerConfigPostBodyStrategyOptionFormProperties {
		isPreferred: FormControl<boolean | null | undefined>,
		strategy: FormControl<Strategy | null | undefined>,
		targetDestination: FormControl<TargetDestination | null | undefined>,
		toolName: FormControl<TransformationToolName | null | undefined>,
	}
	export function CreateUpdateServerConfigPostBodyStrategyOptionFormGroup() {
		return new FormGroup<UpdateServerConfigPostBodyStrategyOptionFormProperties>({
			isPreferred: new FormControl<boolean | null | undefined>(undefined),
			strategy: new FormControl<Strategy | null | undefined>(undefined),
			targetDestination: new FormControl<TargetDestination | null | undefined>(undefined),
			toolName: new FormControl<TransformationToolName | null | undefined>(undefined),
		});

	}

}

